(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict'

var {
  complex,
  runMultiFilter,
  runMultiFilterReverse,
  evaluatePhase
} = require('./utils')

// params: array of biquad coefficient objects and z registers
// stage structure e.g. {k:1, a:[1.1, -1.2], b:[0.3, -1.2, -0.4], z:[0, 0]}
var IirFilter = function (filter) {
  var f = filter
  var cone = {
    re: 1,
    im: 0
  }
  var cf = []
  var cc = []
  for (var cnt = 0; cnt < f.length; cnt++) {
    cf[cnt] = {}
    var s = f[cnt]
    cf[cnt].b0 = {
      re: s.b[0],
      im: 0
    }
    cf[cnt].b1 = {
      re: s.b[1],
      im: 0
    }
    cf[cnt].b2 = {
      re: s.b[2],
      im: 0
    }
    cf[cnt].a1 = {
      re: s.a[0],
      im: 0
    }
    cf[cnt].a2 = {
      re: s.a[1],
      im: 0
    }
    cf[cnt].k = {
      re: s.k,
      im: 0
    }
    cf[cnt].z = [0, 0]
    cc[cnt] = {}
    cc[cnt].b1 = s.b[1] / s.b[0]
    cc[cnt].b2 = s.b[2] / s.b[0]
    cc[cnt].a1 = s.a[0]
    cc[cnt].a2 = s.a[1]
  }

  var runStage = function (s, input) {
    var temp = input * s.k.re - s.a1.re * s.z[0] - s.a2.re * s.z[1]
    var out = s.b0.re * temp + s.b1.re * s.z[0] + s.b2.re * s.z[1]
    s.z[1] = s.z[0]
    s.z[0] = temp
    return out
  }

  var doStep = function (input, coeffs) {
    var out = input
    var cnt = 0
    for (cnt = 0; cnt < coeffs.length; cnt++) {
      out = runStage(coeffs[cnt], out)
    }
    return out
  }

  var biquadResponse = function (params, s) {
    var Fs = params.Fs
    var Fr = params.Fr
    // z = exp(j*omega*pi) = cos(omega*pi) + j*sin(omega*pi)
    // z^-1 = exp(-j*omega*pi)
    // omega is between 0 and 1. 1 is the Nyquist frequency.
    var theta = -Math.PI * (Fr / Fs) * 2
    var z = {
      re: Math.cos(theta),
      im: Math.sin(theta)
    }
    // k * (b0 + b1*z^-1 + b2*z^-2) / (1 + a1*z^⁻1 + a2*z^-2)
    var p = complex.mul(s.k, complex.add(s.b0, complex.mul(z, complex.add(s.b1, complex.mul(s.b2, z)))))
    var q = complex.add(cone, complex.mul(z, complex.add(s.a1, complex.mul(s.a2, z))))
    var h = complex.div(p, q)
    var res = {
      magnitude: complex.magnitude(h),
      phase: complex.phase(h)
    }
    return res
  }

  var calcResponse = function (params) {
    var cnt = 0
    var res = {
      magnitude: 1,
      phase: 0
    }
    for (cnt = 0; cnt < cf.length; cnt++) {
      var r = biquadResponse(params, cf[cnt])
      // a cascade of biquads results in the multiplication of H(z)
      // H_casc(z) = H_0(z) * H_1(z) * ... * H_n(z)
      res.magnitude *= r.magnitude
      // phase is wrapped -> unwrap before using
      res.phase += r.phase
    }
    res.dBmagnitude = 20 * Math.log(res.magnitude) * Math.LOG10E
    return res
  }

  var reinit = function () {
    var tempF = []
    for (var cnt = 0; cnt < f.length; cnt++) {
      tempF[cnt] = {
        b0: {
          re: s.b[0],
          im: 0
        },
        b1: {
          re: s.b[1],
          im: 0
        },
        b2: {
          re: s.b[2],
          im: 0
        },
        a1: {
          re: s.a[0],
          im: 0
        },
        a2: {
          re: s.a[1],
          im: 0
        },
        k: {
          re: s.k,
          im: 0
        },
        z: [0, 0]
      }
    }
    return tempF
  }

  var calcInputResponse = function (input) {
    var tempF = reinit()
    return runMultiFilter(input, tempF, doStep)
  }

  var predefinedResponse = function (def, length) {
    var ret = {}
    var input = []
    var cnt = 0
    for (cnt = 0; cnt < length; cnt++) {
      input.push(def(cnt))
    }
    ret.out = calcInputResponse(input)
    var maxFound = false
    var minFound = false
    for (cnt = 0; cnt < length - 1; cnt++) {
      if (ret.out[cnt] > ret.out[cnt + 1] && !maxFound) {
        maxFound = true
        ret.max = {
          sample: cnt,
          value: ret.out[cnt]
        }
      }
      if (maxFound && !minFound && ret.out[cnt] < ret.out[cnt + 1]) {
        minFound = true
        ret.min = {
          sample: cnt,
          value: ret.out[cnt]
        }
        break
      }
    }
    return ret
  }

  var getComplRes = function (n1, n2) {
    var innerSqrt = Math.pow(n1 / 2, 2) - n2
    if (innerSqrt < 0) {
      return [{
        re: -n1 / 2,
        im: Math.sqrt(Math.abs(innerSqrt))
      }, {
        re: -n1 / 2,
        im: -Math.sqrt(Math.abs(innerSqrt))
      }]
    } else {
      return [{
        re: -n1 / 2 + Math.sqrt(innerSqrt),
        im: 0
      }, {
        re: -n1 / 2 - Math.sqrt(innerSqrt),
        im: 0
      }]
    }
  }

  var getPZ = function () {
    var res = []
    for (var cnt = 0; cnt < cc.length; cnt++) {
      res[cnt] = {}
      res[cnt].z = getComplRes(cc[cnt].b1, cc[cnt].b2)
      res[cnt].p = getComplRes(cc[cnt].a1, cc[cnt].a2)
    }
    return res
  }

  var self = {
    singleStep: function (input) {
      return doStep(input, cf)
    },
    multiStep: function (input, overwrite) {
      return runMultiFilter(input, cf, doStep, overwrite)
    },
    filtfilt: function (input, overwrite) {
      return runMultiFilterReverse(runMultiFilter(
          input, cf, doStep, overwrite), cf, doStep, true)
    },
    simulate: function (input) {
      return calcInputResponse(input)
    },
    stepResponse: function (length) {
      return predefinedResponse(function () {
        return 1
      }, length)
    },
    impulseResponse: function (length) {
      return predefinedResponse(function (val) {
        if (val === 0) {
          return 1
        } else {
          return 0
        }
      }, length)
    },
    responsePoint: function (params) {
      return calcResponse(params)
    },
    response: function (resolution) {
      resolution = resolution || 100
      var res = []
      var cnt = 0
      var r = resolution * 2
      for (cnt = 0; cnt < resolution; cnt++) {
        res[cnt] = calcResponse({
          Fs: r,
          Fr: cnt
        })
      }
      evaluatePhase(res)
      return res
    },
    polesZeros: function () {
      return getPZ()
    },
    reinit: function () {
      for (cnt = 0; cnt < cf.length; cnt++) {
        cf[cnt].z = [0, 0]
      }
    }
  }
  return self
}

module.exports = IirFilter

},{"./utils":2}],2:[function(require,module,exports){
'use strict'

/**
 * Evaluate phase
 */
exports.evaluatePhase = function (res) {
  var xcnt = 0
  var cnt = 0
  var pi = Math.PI
  var tpi = 2 * pi
  var phase = []
  for (cnt = 0; cnt < res.length; cnt++) {
    phase.push(res[cnt].phase)
  }
  res[0].unwrappedPhase = res[0].phase
  res[0].groupDelay = 0
  // TODO: more sophisticated phase unwrapping needed
  for (cnt = 1; cnt < phase.length; cnt++) {
    var diff = phase[cnt] - phase[cnt - 1]
    if (diff > pi) {
      for (xcnt = cnt; xcnt < phase.length; xcnt++) {
        phase[xcnt] -= tpi
      }
    } else if (diff < -pi) {
      for (xcnt = cnt; xcnt < phase.length; xcnt++) {
        phase[xcnt] += tpi
      }
    }
    if (phase[cnt] < 0) {
      res[cnt].unwrappedPhase = -phase[cnt]
    } else {
      res[cnt].unwrappedPhase = phase[cnt]
    }

    res[cnt].phaseDelay = res[cnt].unwrappedPhase / (cnt / res.length)
    res[cnt].groupDelay = (res[cnt].unwrappedPhase - res[cnt - 1].unwrappedPhase) / (pi / res.length)
    if (res[cnt].groupDelay < 0) {
      res[cnt].groupDelay = -res[cnt].groupDelay
    }
  }
  if (res[0].magnitude !== 0) {
    res[0].phaseDelay = res[1].phaseDelay
    res[0].groupDelay = res[1].groupDelay
  } else {
    res[0].phaseDelay = res[2].phaseDelay
    res[0].groupDelay = res[2].groupDelay
    res[1].phaseDelay = res[2].phaseDelay
    res[1].groupDelay = res[2].groupDelay
  }
}

/**
 * Run multi filter
 */
exports.runMultiFilter = function (input, d, doStep, overwrite) {
  var out = []
  if (overwrite) {
    out = input
  }
  var i
  for (i = 0; i < input.length; i++) {
    out[i] = doStep(input[i], d)
  }
  return out
}

exports.runMultiFilterReverse = function (input, d, doStep, overwrite) {
  var out = []
  if (overwrite) {
    out = input
  }
  var i
  for (i = input.length - 1; i >= 0; i--) {
    out[i] = doStep(input[i], d)
  }
  return out
}

var factorial = function (n, a) {
  if (!a) {
    a = 1
  }
  if (n !== Math.floor(n) || a !== Math.floor(a)) {
    return 1
  }
  if (n === 0 || n === 1) {
    return a
  } else {
    return factorial(n - 1, a * n)
  }
}

/**
 * Bessel factors
 */
exports.besselFactors = function (n) {
  var res = []
  for (var k = 0; k < n + 1; k++) {
    var p = factorial(2 * n - k)
    var q = Math.pow(2, (n - k)) * factorial(k) * factorial(n - k)
    res.unshift(Math.floor(p / q))
  }
  return res
}

var fractionToFp = function (fraction, fractionBits) {
  var fpFraction = 0
  for (var cnt = 0; cnt < fractionBits; cnt++) {
    var bitVal = 1 / Math.pow(2, cnt + 1)
    if (fraction > bitVal) {
      fraction -= bitVal
      fpFraction += bitVal
    }
  }
  return fpFraction
}

var numberToFp = function (number, numberBits) {
  return number & Math.pow(2, numberBits)
}

var valueToFp = function (value, numberBits, fractionBits) {
  var number = Math.abs(value)
  var fraction = value - number
  var fpNumber = {
    number: numberToFp(number, numberBits).toString(),
    fraction: fractionToFp(fraction, fractionBits).toString(),
    numberBits: numberBits,
    fractionBits: fractionBits
  }
  return fpNumber
}

exports.fixedPoint = {
  convert: function (value, numberBits, fractionBits) {
    return valueToFp(value, numberBits, fractionBits)
  },
  add: function (fpVal1, fpVal2) {
  },
  sub: function (fpVal1, fpVal2) {
  },
  mul: function (fpVal1, fpVal2) {
  },
  div: function (fpVal1, fpVal2) {
  }
}

/**
 * Complex
 */
exports.complex = {

  div: function (p, q) {
    var a = p.re
    var b = p.im
    var c = q.re
    var d = q.im
    var n = (c * c + d * d)
    var x = {
      re: (a * c + b * d) / n,
      im: (b * c - a * d) / n
    }
    return x
  },
  mul: function (p, q) {
    var a = p.re
    var b = p.im
    var c = q.re
    var d = q.im
    var x = {
      re: (a * c - b * d),
      im: (a + b) * (c + d) - a * c - b * d
    }
    return x
  },
  add: function (p, q) {
    var x = {
      re: p.re + q.re,
      im: p.im + q.im
    }
    return x
  },
  sub: function (p, q) {
    var x = {
      re: p.re - q.re,
      im: p.im - q.im
    }
    return x
  },
  phase: function (n) {
    return Math.atan2(n.im, n.re)
  },
  magnitude: function (n) {
    return Math.sqrt(n.re * n.re + n.im * n.im)
  }
}

},{}]},{},[1]);
