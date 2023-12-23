var yj = Object.defineProperty;
var Bj = (A, M, I) => M in A ? yj(A, M, { enumerable: !0, configurable: !0, writable: !0, value: I }) : A[M] = I;
var WI = (A, M, I) => (Bj(A, typeof M != "symbol" ? M + "" : M, I), I);
import * as rM from "react";
import G, { createContext as bI, useReducer as oj, useContext as VN, useRef as VI, useCallback as XI, useEffect as Sj, createElement as kM, PureComponent as XN } from "react";
import Y, { ThemeProvider as sj } from "styled-components";
var uA = /* @__PURE__ */ ((A) => (A[A.Solana = 501] = "Solana", A[A.Ethereum = 60] = "Ethereum", A))(uA || {}), bj = /* @__PURE__ */ ((A) => (A.ETHEREUM_MAINNET = "0x1", A.BINANCE_SMART_CHAIN = "0x38", A.POLYGON = "0x89", A.AVALANCHE = "0xa86a", A.CELO = "0xa4ec", A.FANTOM = "0xfa", A.OPTIMISM = "0xa", A.SOLANA_MAINNET = "0x65", A))(bj || {});
const OM = "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee", gI = "So11111111111111111111111111111111111111112", Qj = "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff", g4 = 100, WA = "brave-swap-data-theme";
var fM = { exports: {} }, eM = {};
/** @license React v16.14.0
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hI;
function Gj() {
  if (hI)
    return eM;
  hI = 1;
  var A = G, M = 60103;
  if (eM.Fragment = 60107, typeof Symbol == "function" && Symbol.for) {
    var I = Symbol.for;
    M = I("react.element"), eM.Fragment = I("react.fragment");
  }
  var N = A.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, j = Object.prototype.hasOwnProperty, D = { key: !0, ref: !0, __self: !0, __source: !0 };
  function c(x, i, T) {
    var Z, U = {}, L = null, Q = null;
    T !== void 0 && (L = "" + T), i.key !== void 0 && (L = "" + i.key), i.ref !== void 0 && (Q = i.ref);
    for (Z in i)
      j.call(i, Z) && !D.hasOwnProperty(Z) && (U[Z] = i[Z]);
    if (x && x.defaultProps)
      for (Z in i = x.defaultProps, i)
        U[Z] === void 0 && (U[Z] = i[Z]);
    return { $$typeof: M, type: x, key: L, ref: Q, props: U, _owner: N.current };
  }
  return eM.jsx = c, eM.jsxs = c, eM;
}
var DI = {};
/** @license React v16.14.0
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var FI;
function Zj() {
  return FI || (FI = 1, function(A) {
    process.env.NODE_ENV !== "production" && function() {
      var M = G, I = 60103, N = 60106;
      A.Fragment = 60107;
      var j = 60108, D = 60114, c = 60109, x = 60110, i = 60112, T = 60113, Z = 60120, U = 60115, L = 60116, Q = 60121, p = 60122, E = 60117, r = 60129, b = 60131;
      if (typeof Symbol == "function" && Symbol.for) {
        var l = Symbol.for;
        I = l("react.element"), N = l("react.portal"), A.Fragment = l("react.fragment"), j = l("react.strict_mode"), D = l("react.profiler"), c = l("react.provider"), x = l("react.context"), i = l("react.forward_ref"), T = l("react.suspense"), Z = l("react.suspense_list"), U = l("react.memo"), L = l("react.lazy"), Q = l("react.block"), p = l("react.server.block"), E = l("react.fundamental"), l("react.scope"), l("react.opaque.id"), r = l("react.debug_trace_mode"), l("react.offscreen"), b = l("react.legacy_hidden");
      }
      var o = typeof Symbol == "function" && Symbol.iterator, y = "@@iterator";
      function O(s) {
        if (s === null || typeof s != "object")
          return null;
        var v = o && s[o] || s[y];
        return typeof v == "function" ? v : null;
      }
      var m = M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
      function H(s) {
        {
          for (var v = arguments.length, h = new Array(v > 1 ? v - 1 : 0), gA = 1; gA < v; gA++)
            h[gA - 1] = arguments[gA];
          g("error", s, h);
        }
      }
      function g(s, v, h) {
        {
          var gA = m.ReactDebugCurrentFrame, CA = "";
          if (t) {
            var lA = w(t.type), AA = t._owner;
            CA += a(lA, t._source, AA && w(AA.type));
          }
          CA += gA.getStackAddendum(), CA !== "" && (v += "%s", h = h.concat([CA]));
          var DA = h.map(function(dA) {
            return "" + dA;
          });
          DA.unshift("Warning: " + v), Function.prototype.apply.call(console[s], console, DA);
        }
      }
      var z = !1;
      function e(s) {
        return !!(typeof s == "string" || typeof s == "function" || s === A.Fragment || s === D || s === r || s === j || s === T || s === Z || s === b || z || typeof s == "object" && s !== null && (s.$$typeof === L || s.$$typeof === U || s.$$typeof === c || s.$$typeof === x || s.$$typeof === i || s.$$typeof === E || s.$$typeof === Q || s[0] === p));
      }
      var n = /^(.*)[\\\/]/;
      function a(s, v, h) {
        var gA = "";
        if (v) {
          var CA = v.fileName, lA = CA.replace(n, "");
          if (/^index\./.test(lA)) {
            var AA = CA.match(n);
            if (AA) {
              var DA = AA[1];
              if (DA) {
                var dA = DA.replace(n, "");
                lA = dA + "/" + lA;
              }
            }
          }
          gA = " (at " + lA + ":" + v.lineNumber + ")";
        } else
          h && (gA = " (created by " + h + ")");
        return `
    in ` + (s || "Unknown") + gA;
      }
      var d = 1;
      function B(s) {
        return s._status === d ? s._result : null;
      }
      function C(s, v, h) {
        var gA = v.displayName || v.name || "";
        return s.displayName || (gA !== "" ? h + "(" + gA + ")" : h);
      }
      function w(s) {
        if (s == null)
          return null;
        if (typeof s.tag == "number" && H("Received an unexpected object in getComponentName(). This is likely a bug in React. Please file an issue."), typeof s == "function")
          return s.displayName || s.name || null;
        if (typeof s == "string")
          return s;
        switch (s) {
          case A.Fragment:
            return "Fragment";
          case N:
            return "Portal";
          case D:
            return "Profiler";
          case j:
            return "StrictMode";
          case T:
            return "Suspense";
          case Z:
            return "SuspenseList";
        }
        if (typeof s == "object")
          switch (s.$$typeof) {
            case x:
              return "Context.Consumer";
            case c:
              return "Context.Provider";
            case i:
              return C(s, s.render, "ForwardRef");
            case U:
              return w(s.type);
            case Q:
              return w(s.render);
            case L: {
              var v = s, h = B(v);
              if (h)
                return w(h);
              break;
            }
          }
        return null;
      }
      var S = {};
      m.ReactDebugCurrentFrame;
      var t = null;
      function R(s) {
        t = s;
      }
      function X(s, v, h, gA, CA) {
        {
          var lA = Function.call.bind(Object.prototype.hasOwnProperty);
          for (var AA in s)
            if (lA(s, AA)) {
              var DA = void 0;
              try {
                if (typeof s[AA] != "function") {
                  var dA = Error((gA || "React class") + ": " + h + " type `" + AA + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof s[AA] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw dA.name = "Invariant Violation", dA;
                }
                DA = s[AA](v, AA, gA, h, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (GA) {
                DA = GA;
              }
              DA && !(DA instanceof Error) && (R(CA), H("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", gA || "React class", h, AA, typeof DA), R(null)), DA instanceof Error && !(DA.message in S) && (S[DA.message] = !0, R(CA), H("Failed %s type: %s", h, DA.message), R(null));
            }
        }
      }
      var V = m.ReactCurrentOwner, _ = Object.prototype.hasOwnProperty, eA = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, cA, q, jA;
      jA = {};
      function wA(s) {
        if (_.call(s, "ref")) {
          var v = Object.getOwnPropertyDescriptor(s, "ref").get;
          if (v && v.isReactWarning)
            return !1;
        }
        return s.ref !== void 0;
      }
      function XA(s) {
        if (_.call(s, "key")) {
          var v = Object.getOwnPropertyDescriptor(s, "key").get;
          if (v && v.isReactWarning)
            return !1;
        }
        return s.key !== void 0;
      }
      function iA(s, v) {
        if (typeof s.ref == "string" && V.current && v && V.current.stateNode !== v) {
          var h = w(V.current.type);
          jA[h] || (H('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', w(V.current.type), s.ref), jA[h] = !0);
        }
      }
      function xA(s, v) {
        {
          var h = function() {
            cA || (cA = !0, H("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", v));
          };
          h.isReactWarning = !0, Object.defineProperty(s, "key", {
            get: h,
            configurable: !0
          });
        }
      }
      function tA(s, v) {
        {
          var h = function() {
            q || (q = !0, H("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", v));
          };
          h.isReactWarning = !0, Object.defineProperty(s, "ref", {
            get: h,
            configurable: !0
          });
        }
      }
      var hA = function(s, v, h, gA, CA, lA, AA) {
        var DA = {
          $$typeof: I,
          type: s,
          key: v,
          ref: h,
          props: AA,
          _owner: lA
        };
        return DA._store = {}, Object.defineProperty(DA._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(DA, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: gA
        }), Object.defineProperty(DA, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: CA
        }), Object.freeze && (Object.freeze(DA.props), Object.freeze(DA)), DA;
      };
      function aA(s, v, h, gA, CA) {
        {
          var lA, AA = {}, DA = null, dA = null;
          h !== void 0 && (DA = "" + h), XA(v) && (DA = "" + v.key), wA(v) && (dA = v.ref, iA(v, CA));
          for (lA in v)
            _.call(v, lA) && !eA.hasOwnProperty(lA) && (AA[lA] = v[lA]);
          if (s && s.defaultProps) {
            var GA = s.defaultProps;
            for (lA in GA)
              AA[lA] === void 0 && (AA[lA] = GA[lA]);
          }
          if (DA || dA) {
            var W = typeof s == "function" ? s.displayName || s.name || "Unknown" : s;
            DA && xA(AA, W), dA && tA(AA, W);
          }
          return hA(s, DA, dA, CA, gA, V.current, AA);
        }
      }
      var EA = m.ReactCurrentOwner;
      m.ReactDebugCurrentFrame;
      function zA(s) {
        t = s;
      }
      var PA;
      PA = !1;
      function iM(s) {
        return typeof s == "object" && s !== null && s.$$typeof === I;
      }
      function aM() {
        {
          if (EA.current) {
            var s = w(EA.current.type);
            if (s)
              return `

Check the render method of \`` + s + "`.";
          }
          return "";
        }
      }
      function EM(s) {
        {
          if (s !== void 0) {
            var v = s.fileName.replace(/^.*[\\\/]/, ""), h = s.lineNumber;
            return `

Check your code at ` + v + ":" + h + ".";
          }
          return "";
        }
      }
      var FA = {};
      function LM(s) {
        {
          var v = aM();
          if (!v) {
            var h = typeof s == "string" ? s : s.displayName || s.name;
            h && (v = `

Check the top-level render call using <` + h + ">.");
          }
          return v;
        }
      }
      function fA(s, v) {
        {
          if (!s._store || s._store.validated || s.key != null)
            return;
          s._store.validated = !0;
          var h = LM(v);
          if (FA[h])
            return;
          FA[h] = !0;
          var gA = "";
          s && s._owner && s._owner !== EA.current && (gA = " It was passed a child from " + w(s._owner.type) + "."), zA(s), H('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', h, gA), zA(null);
        }
      }
      function zM(s, v) {
        {
          if (typeof s != "object")
            return;
          if (Array.isArray(s))
            for (var h = 0; h < s.length; h++) {
              var gA = s[h];
              iM(gA) && fA(gA, v);
            }
          else if (iM(s))
            s._store && (s._store.validated = !0);
          else if (s) {
            var CA = O(s);
            if (typeof CA == "function" && CA !== s.entries)
              for (var lA = CA.call(s), AA; !(AA = lA.next()).done; )
                iM(AA.value) && fA(AA.value, v);
          }
        }
      }
      function MI(s) {
        {
          var v = s.type;
          if (v == null || typeof v == "string")
            return;
          var h;
          if (typeof v == "function")
            h = v.propTypes;
          else if (typeof v == "object" && (v.$$typeof === i || v.$$typeof === U))
            h = v.propTypes;
          else
            return;
          if (h) {
            var gA = w(v);
            X(h, s.props, "prop", gA, s);
          } else if (v.PropTypes !== void 0 && !PA) {
            PA = !0;
            var CA = w(v);
            H("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", CA || "Unknown");
          }
          typeof v.getDefaultProps == "function" && !v.getDefaultProps.isReactClassApproved && H("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function tM(s) {
        {
          for (var v = Object.keys(s.props), h = 0; h < v.length; h++) {
            var gA = v[h];
            if (gA !== "children" && gA !== "key") {
              zA(s), H("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", gA), zA(null);
              break;
            }
          }
          s.ref !== null && (zA(s), H("Invalid attribute `ref` supplied to `React.Fragment`."), zA(null));
        }
      }
      function kA(s, v, h, gA, CA, lA) {
        {
          var AA = e(s);
          if (!AA) {
            var DA = "";
            (s === void 0 || typeof s == "object" && s !== null && Object.keys(s).length === 0) && (DA += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
            var dA = EM(CA);
            dA ? DA += dA : DA += aM();
            var GA;
            s === null ? GA = "null" : Array.isArray(s) ? GA = "array" : s !== void 0 && s.$$typeof === I ? (GA = "<" + (w(s.type) || "Unknown") + " />", DA = " Did you accidentally export a JSX literal instead of a component?") : GA = typeof s, H("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", GA, DA);
          }
          var W = aA(s, v, h, CA, lA);
          if (W == null)
            return W;
          if (AA) {
            var F = v.children;
            if (F !== void 0)
              if (gA)
                if (Array.isArray(F)) {
                  for (var IA = 0; IA < F.length; IA++)
                    zM(F[IA], s);
                  Object.freeze && Object.freeze(F);
                } else
                  H("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
              else
                zM(F, s);
          }
          return s === A.Fragment ? tM(W) : MI(W), W;
        }
      }
      function DM(s, v, h) {
        return kA(s, v, h, !0);
      }
      function II(s, v, h) {
        return kA(s, v, h, !1);
      }
      var NI = II, jI = DM;
      A.jsx = NI, A.jsxs = jI;
    }();
  }(DI)), DI;
}
(function(A) {
  process.env.NODE_ENV === "production" ? A.exports = Gj() : A.exports = Zj();
})(fM);
const bA = fM.exports.Fragment, u = fM.exports.jsx, P = fM.exports.jsxs, hN = bI(void 0), Uj = (A) => {
  const {
    children: M,
    assetsList: I,
    network: N,
    account: j,
    supportedNetworks: D,
    exchanges: c,
    walletAccounts: x,
    defaultBaseCurrency: i,
    isWalletConnected: T,
    isReady: Z,
    connectWallet: U,
    disconnectWallet: L,
    switchAccount: Q,
    switchNetwork: p,
    getLocale: E,
    getBalance: r,
    getTokenBalance: b,
    getTokenBalances: l,
    getTokenPrice: o,
    getNetworkFeeEstimate: y,
    ethWalletAdapter: O,
    solWalletAdapter: m,
    swapService: H
  } = A;
  return /* @__PURE__ */ u(hN.Provider, {
    value: {
      assetsList: I,
      network: N,
      account: j,
      supportedNetworks: D,
      exchanges: c,
      walletAccounts: x,
      defaultBaseCurrency: i,
      isWalletConnected: T,
      isReady: Z,
      connectWallet: U,
      disconnectWallet: L,
      switchAccount: Q,
      switchNetwork: p,
      getLocale: E,
      getBalance: r,
      getTokenBalance: b,
      getTokenBalances: l,
      getTokenPrice: o,
      getNetworkFeeEstimate: y,
      ethWalletAdapter: O,
      solWalletAdapter: m,
      swapService: H
    },
    children: M
  });
}, TA = () => {
  const A = G.useContext(hN);
  if (A === void 0)
    throw new Error("useSwap must be used within a SwapProvider");
  return A;
};
function rj(A, ...M) {
  return (...I) => A(...M, ...I);
}
function bM(A) {
  return function(...M) {
    var I = M.pop();
    return A.call(this, M, I);
  };
}
var Oj = typeof queueMicrotask == "function" && queueMicrotask, FN = typeof setImmediate == "function" && setImmediate, fN = typeof process == "object" && typeof process.nextTick == "function";
function JN(A) {
  setTimeout(A, 0);
}
function KN(A) {
  return (M, ...I) => A(() => M(...I));
}
var dM;
Oj ? dM = queueMicrotask : FN ? dM = setImmediate : fN ? dM = process.nextTick : dM = JN;
var cM = KN(dM);
function nI(A) {
  return QM(A) ? function(...M) {
    const I = M.pop(), N = A.apply(this, M);
    return fI(N, I);
  } : bM(function(M, I) {
    var N;
    try {
      N = A.apply(this, M);
    } catch (j) {
      return I(j);
    }
    if (N && typeof N.then == "function")
      return fI(N, I);
    I(null, N);
  });
}
function fI(A, M) {
  return A.then((I) => {
    JI(M, null, I);
  }, (I) => {
    JI(M, I && I.message ? I : new Error(I));
  });
}
function JI(A, M, I) {
  try {
    A(M, I);
  } catch (N) {
    cM((j) => {
      throw j;
    }, N);
  }
}
function QM(A) {
  return A[Symbol.toStringTag] === "AsyncFunction";
}
function Rj(A) {
  return A[Symbol.toStringTag] === "AsyncGenerator";
}
function Yj(A) {
  return typeof A[Symbol.asyncIterator] == "function";
}
function NA(A) {
  if (typeof A != "function")
    throw new Error("expected a function");
  return QM(A) ? nI(A) : A;
}
function MA(A, M = A.length) {
  if (!M)
    throw new Error("arity is undefined");
  function I(...N) {
    return typeof N[M - 1] == "function" ? A.apply(this, N) : new Promise((j, D) => {
      N[M - 1] = (c, ...x) => {
        if (c)
          return D(c);
        j(x.length > 1 ? x : x[0]);
      }, A.apply(this, N);
    });
  }
  return I;
}
function qN(A) {
  return function(I, ...N) {
    return MA(function(D) {
      var c = this;
      return A(I, (x, i) => {
        NA(x).apply(c, N.concat(i));
      }, D);
    });
  };
}
function QI(A, M, I, N) {
  M = M || [];
  var j = [], D = 0, c = NA(I);
  return A(M, (x, i, T) => {
    var Z = D++;
    c(x, (U, L) => {
      j[Z] = L, T(U);
    });
  }, (x) => {
    N(x, j);
  });
}
function JM(A) {
  return A && typeof A.length == "number" && A.length >= 0 && A.length % 1 === 0;
}
const KM = {};
function NM(A) {
  function M(...I) {
    if (A !== null) {
      var N = A;
      A = null, N.apply(this, I);
    }
  }
  return Object.assign(M, A), M;
}
function Hj(A) {
  return A[Symbol.iterator] && A[Symbol.iterator]();
}
function mj(A) {
  var M = -1, I = A.length;
  return function() {
    return ++M < I ? { value: A[M], key: M } : null;
  };
}
function Pj(A) {
  var M = -1;
  return function() {
    var N = A.next();
    return N.done ? null : (M++, { value: N.value, key: M });
  };
}
function kj(A) {
  var M = A ? Object.keys(A) : [], I = -1, N = M.length;
  return function j() {
    var D = M[++I];
    return D === "__proto__" ? j() : I < N ? { value: A[D], key: D } : null;
  };
}
function pj(A) {
  if (JM(A))
    return mj(A);
  var M = Hj(A);
  return M ? Pj(M) : kj(A);
}
function jM(A) {
  return function(...M) {
    if (A === null)
      throw new Error("Callback was already called.");
    var I = A;
    A = null, I.apply(this, M);
  };
}
function KI(A, M, I, N) {
  let j = !1, D = !1, c = !1, x = 0, i = 0;
  function T() {
    x >= M || c || j || (c = !0, A.next().then(({ value: L, done: Q }) => {
      if (!(D || j)) {
        if (c = !1, Q) {
          j = !0, x <= 0 && N(null);
          return;
        }
        x++, I(L, i, Z), i++, T();
      }
    }).catch(U));
  }
  function Z(L, Q) {
    if (x -= 1, !D) {
      if (L)
        return U(L);
      if (L === !1) {
        j = !0, D = !0;
        return;
      }
      if (Q === KM || j && x <= 0)
        return j = !0, N(null);
      T();
    }
  }
  function U(L) {
    D || (c = !1, j = !0, N(L));
  }
  T();
}
var mA = (A) => (M, I, N) => {
  if (N = NM(N), A <= 0)
    throw new RangeError("concurrency limit cannot be less than 1");
  if (!M)
    return N(null);
  if (Rj(M))
    return KI(M, A, I, N);
  if (Yj(M))
    return KI(M[Symbol.asyncIterator](), A, I, N);
  var j = pj(M), D = !1, c = !1, x = 0, i = !1;
  function T(U, L) {
    if (!c)
      if (x -= 1, U)
        D = !0, N(U);
      else if (U === !1)
        D = !0, c = !0;
      else {
        if (L === KM || D && x <= 0)
          return D = !0, N(null);
        i || Z();
      }
  }
  function Z() {
    for (i = !0; x < A && !D; ) {
      var U = j();
      if (U === null) {
        D = !0, x <= 0 && N(null);
        return;
      }
      x += 1, I(U.value, U.key, jM(T));
    }
    i = !1;
  }
  Z();
};
function vj(A, M, I, N) {
  return mA(M)(A, NA(I), N);
}
var XM = MA(vj, 4);
function Wj(A, M, I) {
  I = NM(I);
  var N = 0, j = 0, { length: D } = A, c = !1;
  D === 0 && I(null);
  function x(i, T) {
    i === !1 && (c = !0), c !== !0 && (i ? I(i) : (++j === D || T === KM) && I(null));
  }
  for (; N < D; N++)
    M(A[N], N, jM(x));
}
function Vj(A, M, I) {
  return XM(A, 1 / 0, M, I);
}
function Xj(A, M, I) {
  var N = JM(A) ? Wj : Vj;
  return N(A, NA(M), I);
}
var HA = MA(Xj, 3);
function hj(A, M, I) {
  return QI(HA, A, M, I);
}
var GI = MA(hj, 3), Fj = qN(GI);
function fj(A, M, I) {
  return XM(A, 1, M, I);
}
var _A = MA(fj, 3);
function Jj(A, M, I) {
  return QI(_A, A, M, I);
}
var _N = MA(Jj, 3), Kj = qN(_N);
const nM = Symbol("promiseCallback");
function wM() {
  let A, M;
  function I(N, ...j) {
    if (N)
      return M(N);
    A(j.length > 1 ? j : j[0]);
  }
  return I[nM] = new Promise((N, j) => {
    A = N, M = j;
  }), I;
}
function $N(A, M, I) {
  typeof M != "number" && (I = M, M = null), I = NM(I || wM());
  var N = Object.keys(A).length;
  if (!N)
    return I(null);
  M || (M = N);
  var j = {}, D = 0, c = !1, x = !1, i = /* @__PURE__ */ Object.create(null), T = [], Z = [], U = {};
  Object.keys(A).forEach((o) => {
    var y = A[o];
    if (!Array.isArray(y)) {
      L(o, [y]), Z.push(o);
      return;
    }
    var O = y.slice(0, y.length - 1), m = O.length;
    if (m === 0) {
      L(o, y), Z.push(o);
      return;
    }
    U[o] = m, O.forEach((H) => {
      if (!A[H])
        throw new Error("async.auto task `" + o + "` has a non-existent dependency `" + H + "` in " + O.join(", "));
      p(H, () => {
        m--, m === 0 && L(o, y);
      });
    });
  }), b(), Q();
  function L(o, y) {
    T.push(() => r(o, y));
  }
  function Q() {
    if (!c) {
      if (T.length === 0 && D === 0)
        return I(null, j);
      for (; T.length && D < M; ) {
        var o = T.shift();
        o();
      }
    }
  }
  function p(o, y) {
    var O = i[o];
    O || (O = i[o] = []), O.push(y);
  }
  function E(o) {
    var y = i[o] || [];
    y.forEach((O) => O()), Q();
  }
  function r(o, y) {
    if (!x) {
      var O = jM((H, ...g) => {
        if (D--, H === !1) {
          c = !0;
          return;
        }
        if (g.length < 2 && ([g] = g), H) {
          var z = {};
          if (Object.keys(j).forEach((e) => {
            z[e] = j[e];
          }), z[o] = g, x = !0, i = /* @__PURE__ */ Object.create(null), c)
            return;
          I(H, z);
        } else
          j[o] = g, E(o);
      });
      D++;
      var m = NA(y[y.length - 1]);
      y.length > 1 ? m(j, O) : m(O);
    }
  }
  function b() {
    for (var o, y = 0; Z.length; )
      o = Z.pop(), y++, l(o).forEach((O) => {
        --U[O] === 0 && Z.push(O);
      });
    if (y !== N)
      throw new Error(
        "async.auto cannot execute tasks due to a recursive dependency"
      );
  }
  function l(o) {
    var y = [];
    return Object.keys(A).forEach((O) => {
      const m = A[O];
      Array.isArray(m) && m.indexOf(o) >= 0 && y.push(O);
    }), y;
  }
  return I[nM];
}
var qj = /^(?:async\s+)?(?:function)?\s*\w*\s*\(\s*([^)]+)\s*\)(?:\s*{)/, _j = /^(?:async\s+)?\(?\s*([^)=]+)\s*\)?(?:\s*=>)/, $j = /,/, Ag = /(=.+)?(\s*)$/;
function Mg(A) {
  let M = "", I = 0, N = A.indexOf("*/");
  for (; I < A.length; )
    if (A[I] === "/" && A[I + 1] === "/") {
      let j = A.indexOf(`
`, I);
      I = j === -1 ? A.length : j;
    } else if (N !== -1 && A[I] === "/" && A[I + 1] === "*") {
      let j = A.indexOf("*/", I);
      j !== -1 ? (I = j + 2, N = A.indexOf("*/", I)) : (M += A[I], I++);
    } else
      M += A[I], I++;
  return M;
}
function Ig(A) {
  const M = Mg(A.toString());
  let I = M.match(qj);
  if (I || (I = M.match(_j)), !I)
    throw new Error(`could not parse args in autoInject
Source:
` + M);
  let [, N] = I;
  return N.replace(/\s/g, "").split($j).map((j) => j.replace(Ag, "").trim());
}
function Ng(A, M) {
  var I = {};
  return Object.keys(A).forEach((N) => {
    var j = A[N], D, c = QM(j), x = !c && j.length === 1 || c && j.length === 0;
    if (Array.isArray(j))
      D = [...j], j = D.pop(), I[N] = D.concat(D.length > 0 ? i : j);
    else if (x)
      I[N] = j;
    else {
      if (D = Ig(j), j.length === 0 && !c && D.length === 0)
        throw new Error("autoInject task functions require explicit parameters.");
      c || D.pop(), I[N] = D.concat(i);
    }
    function i(T, Z) {
      var U = D.map((L) => T[L]);
      U.push(Z), NA(j)(...U);
    }
  }), $N(I, M);
}
class jg {
  constructor() {
    this.head = this.tail = null, this.length = 0;
  }
  removeLink(M) {
    return M.prev ? M.prev.next = M.next : this.head = M.next, M.next ? M.next.prev = M.prev : this.tail = M.prev, M.prev = M.next = null, this.length -= 1, M;
  }
  empty() {
    for (; this.head; )
      this.shift();
    return this;
  }
  insertAfter(M, I) {
    I.prev = M, I.next = M.next, M.next ? M.next.prev = I : this.tail = I, M.next = I, this.length += 1;
  }
  insertBefore(M, I) {
    I.prev = M.prev, I.next = M, M.prev ? M.prev.next = I : this.head = I, M.prev = I, this.length += 1;
  }
  unshift(M) {
    this.head ? this.insertBefore(this.head, M) : qI(this, M);
  }
  push(M) {
    this.tail ? this.insertAfter(this.tail, M) : qI(this, M);
  }
  shift() {
    return this.head && this.removeLink(this.head);
  }
  pop() {
    return this.tail && this.removeLink(this.tail);
  }
  toArray() {
    return [...this];
  }
  *[Symbol.iterator]() {
    for (var M = this.head; M; )
      yield M.data, M = M.next;
  }
  remove(M) {
    for (var I = this.head; I; ) {
      var { next: N } = I;
      M(I) && this.removeLink(I), I = N;
    }
    return this;
  }
}
function qI(A, M) {
  A.length = 1, A.head = A.tail = M;
}
function ZI(A, M, I) {
  if (M == null)
    M = 1;
  else if (M === 0)
    throw new RangeError("Concurrency must not be zero");
  var N = NA(A), j = 0, D = [];
  const c = {
    error: [],
    drain: [],
    saturated: [],
    unsaturated: [],
    empty: []
  };
  function x(l, o) {
    c[l].push(o);
  }
  function i(l, o) {
    const y = (...O) => {
      T(l, y), o(...O);
    };
    c[l].push(y);
  }
  function T(l, o) {
    if (!l)
      return Object.keys(c).forEach((y) => c[y] = []);
    if (!o)
      return c[l] = [];
    c[l] = c[l].filter((y) => y !== o);
  }
  function Z(l, ...o) {
    c[l].forEach((y) => y(...o));
  }
  var U = !1;
  function L(l, o, y, O) {
    if (O != null && typeof O != "function")
      throw new Error("task callback must be a function");
    b.started = !0;
    var m, H;
    function g(e, ...n) {
      if (e)
        return y ? H(e) : m();
      if (n.length <= 1)
        return m(n[0]);
      m(n);
    }
    var z = b._createTaskItem(
      l,
      y ? g : O || g
    );
    if (o ? b._tasks.unshift(z) : b._tasks.push(z), U || (U = !0, cM(() => {
      U = !1, b.process();
    })), y || !O)
      return new Promise((e, n) => {
        m = e, H = n;
      });
  }
  function Q(l) {
    return function(o, ...y) {
      j -= 1;
      for (var O = 0, m = l.length; O < m; O++) {
        var H = l[O], g = D.indexOf(H);
        g === 0 ? D.shift() : g > 0 && D.splice(g, 1), H.callback(o, ...y), o != null && Z("error", o, H.data);
      }
      j <= b.concurrency - b.buffer && Z("unsaturated"), b.idle() && Z("drain"), b.process();
    };
  }
  function p(l) {
    return l.length === 0 && b.idle() ? (cM(() => Z("drain")), !0) : !1;
  }
  const E = (l) => (o) => {
    if (!o)
      return new Promise((y, O) => {
        i(l, (m, H) => {
          if (m)
            return O(m);
          y(H);
        });
      });
    T(l), x(l, o);
  };
  var r = !1, b = {
    _tasks: new jg(),
    _createTaskItem(l, o) {
      return {
        data: l,
        callback: o
      };
    },
    *[Symbol.iterator]() {
      yield* b._tasks[Symbol.iterator]();
    },
    concurrency: M,
    payload: I,
    buffer: M / 4,
    started: !1,
    paused: !1,
    push(l, o) {
      return Array.isArray(l) ? p(l) ? void 0 : l.map((y) => L(y, !1, !1, o)) : L(l, !1, !1, o);
    },
    pushAsync(l, o) {
      return Array.isArray(l) ? p(l) ? void 0 : l.map((y) => L(y, !1, !0, o)) : L(l, !1, !0, o);
    },
    kill() {
      T(), b._tasks.empty();
    },
    unshift(l, o) {
      return Array.isArray(l) ? p(l) ? void 0 : l.map((y) => L(y, !0, !1, o)) : L(l, !0, !1, o);
    },
    unshiftAsync(l, o) {
      return Array.isArray(l) ? p(l) ? void 0 : l.map((y) => L(y, !0, !0, o)) : L(l, !0, !0, o);
    },
    remove(l) {
      b._tasks.remove(l);
    },
    process() {
      if (!r) {
        for (r = !0; !b.paused && j < b.concurrency && b._tasks.length; ) {
          var l = [], o = [], y = b._tasks.length;
          b.payload && (y = Math.min(y, b.payload));
          for (var O = 0; O < y; O++) {
            var m = b._tasks.shift();
            l.push(m), D.push(m), o.push(m.data);
          }
          j += 1, b._tasks.length === 0 && Z("empty"), j === b.concurrency && Z("saturated");
          var H = jM(Q(l));
          N(o, H);
        }
        r = !1;
      }
    },
    length() {
      return b._tasks.length;
    },
    running() {
      return j;
    },
    workersList() {
      return D;
    },
    idle() {
      return b._tasks.length + j === 0;
    },
    pause() {
      b.paused = !0;
    },
    resume() {
      b.paused !== !1 && (b.paused = !1, cM(b.process));
    }
  };
  return Object.defineProperties(b, {
    saturated: {
      writable: !1,
      value: E("saturated")
    },
    unsaturated: {
      writable: !1,
      value: E("unsaturated")
    },
    empty: {
      writable: !1,
      value: E("empty")
    },
    drain: {
      writable: !1,
      value: E("drain")
    },
    error: {
      writable: !1,
      value: E("error")
    }
  }), b;
}
function gg(A, M) {
  return ZI(A, 1, M);
}
function Dg(A, M, I) {
  return ZI(A, M, I);
}
function cg(A, M, I, N) {
  N = NM(N);
  var j = NA(I);
  return _A(A, (D, c, x) => {
    j(M, D, (i, T) => {
      M = T, x(i);
    });
  }, (D) => N(D, M));
}
var yM = MA(cg, 4);
function Aj(...A) {
  var M = A.map(NA);
  return function(...I) {
    var N = this, j = I[I.length - 1];
    return typeof j == "function" ? I.pop() : j = wM(), yM(
      M,
      I,
      (D, c, x) => {
        c.apply(N, D.concat((i, ...T) => {
          x(i, T);
        }));
      },
      (D, c) => j(D, ...c)
    ), j[nM];
  };
}
function ig(...A) {
  return Aj(...A.reverse());
}
function zg(A, M, I, N) {
  return QI(mA(M), A, I, N);
}
var qM = MA(zg, 4);
function eg(A, M, I, N) {
  var j = NA(I);
  return qM(A, M, (D, c) => {
    j(D, (x, ...i) => x ? c(x) : c(x, i));
  }, (D, c) => {
    for (var x = [], i = 0; i < c.length; i++)
      c[i] && (x = x.concat(...c[i]));
    return N(D, x);
  });
}
var hM = MA(eg, 4);
function xg(A, M, I) {
  return hM(A, 1 / 0, M, I);
}
var _I = MA(xg, 3);
function ug(A, M, I) {
  return hM(A, 1, M, I);
}
var $I = MA(ug, 3);
function lg(...A) {
  return function(...M) {
    var I = M.pop();
    return I(null, ...A);
  };
}
function $A(A, M) {
  return (I, N, j, D) => {
    var c = !1, x;
    const i = NA(j);
    I(N, (T, Z, U) => {
      i(T, (L, Q) => {
        if (L || L === !1)
          return U(L);
        if (A(Q) && !x)
          return c = !0, x = M(!0, T), U(null, KM);
        U();
      });
    }, (T) => {
      if (T)
        return D(T);
      D(null, c ? x : M(!1));
    });
  };
}
function wg(A, M, I) {
  return $A((N) => N, (N, j) => j)(HA, A, M, I);
}
var AN = MA(wg, 3);
function Cg(A, M, I, N) {
  return $A((j) => j, (j, D) => D)(mA(M), A, I, N);
}
var MN = MA(Cg, 4);
function ng(A, M, I) {
  return $A((N) => N, (N, j) => j)(mA(1), A, M, I);
}
var IN = MA(ng, 3);
function Mj(A) {
  return (M, ...I) => NA(M)(...I, (N, ...j) => {
    typeof console == "object" && (N ? console.error && console.error(N) : console[A] && j.forEach((D) => console[A](D)));
  });
}
var Tg = Mj("dir");
function ag(A, M, I) {
  I = jM(I);
  var N = NA(A), j = NA(M), D;
  function c(i, ...T) {
    if (i)
      return I(i);
    i !== !1 && (D = T, j(...T, x));
  }
  function x(i, T) {
    if (i)
      return I(i);
    if (i !== !1) {
      if (!T)
        return I(null, ...D);
      N(c);
    }
  }
  return x(null, !0);
}
var TI = MA(ag, 3);
function Eg(A, M, I) {
  const N = NA(M);
  return TI(A, (...j) => {
    const D = j.pop();
    N(...j, (c, x) => D(c, !x));
  }, I);
}
function Ij(A) {
  return (M, I, N) => A(M, N);
}
function Lg(A, M, I) {
  return HA(A, Ij(NA(M)), I);
}
var NN = MA(Lg, 3);
function tg(A, M, I, N) {
  return mA(M)(A, Ij(NA(I)), N);
}
var aI = MA(tg, 4);
function dg(A, M, I) {
  return aI(A, 1, M, I);
}
var EI = MA(dg, 3);
function Nj(A) {
  return QM(A) ? A : function(...M) {
    var I = M.pop(), N = !0;
    M.push((...j) => {
      N ? cM(() => I(...j)) : I(...j);
    }), A.apply(this, M), N = !1;
  };
}
function yg(A, M, I) {
  return $A((N) => !N, (N) => !N)(HA, A, M, I);
}
var jN = MA(yg, 3);
function Bg(A, M, I, N) {
  return $A((j) => !j, (j) => !j)(mA(M), A, I, N);
}
var gN = MA(Bg, 4);
function og(A, M, I) {
  return $A((N) => !N, (N) => !N)(_A, A, M, I);
}
var DN = MA(og, 3);
function Sg(A, M, I, N) {
  var j = new Array(M.length);
  A(M, (D, c, x) => {
    I(D, (i, T) => {
      j[c] = !!T, x(i);
    });
  }, (D) => {
    if (D)
      return N(D);
    for (var c = [], x = 0; x < M.length; x++)
      j[x] && c.push(M[x]);
    N(null, c);
  });
}
function sg(A, M, I, N) {
  var j = [];
  A(M, (D, c, x) => {
    I(D, (i, T) => {
      if (i)
        return x(i);
      T && j.push({ index: c, value: D }), x(i);
    });
  }, (D) => {
    if (D)
      return N(D);
    N(null, j.sort((c, x) => c.index - x.index).map((c) => c.value));
  });
}
function _M(A, M, I, N) {
  var j = JM(M) ? Sg : sg;
  return j(A, M, NA(I), N);
}
function bg(A, M, I) {
  return _M(HA, A, M, I);
}
var cN = MA(bg, 3);
function Qg(A, M, I, N) {
  return _M(mA(M), A, I, N);
}
var iN = MA(Qg, 4);
function Gg(A, M, I) {
  return _M(_A, A, M, I);
}
var zN = MA(Gg, 3);
function Zg(A, M) {
  var I = jM(M), N = NA(Nj(A));
  function j(D) {
    if (D)
      return I(D);
    D !== !1 && N(j);
  }
  return j();
}
var Ug = MA(Zg, 2);
function rg(A, M, I, N) {
  var j = NA(I);
  return qM(A, M, (D, c) => {
    j(D, (x, i) => x ? c(x) : c(x, { key: i, val: D }));
  }, (D, c) => {
    for (var x = {}, { hasOwnProperty: i } = Object.prototype, T = 0; T < c.length; T++)
      if (c[T]) {
        var { key: Z } = c[T], { val: U } = c[T];
        i.call(x, Z) ? x[Z].push(U) : x[Z] = [U];
      }
    return N(D, x);
  });
}
var UI = MA(rg, 4);
function Og(A, M, I) {
  return UI(A, 1 / 0, M, I);
}
function Rg(A, M, I) {
  return UI(A, 1, M, I);
}
var Yg = Mj("log");
function Hg(A, M, I, N) {
  N = NM(N);
  var j = {}, D = NA(I);
  return mA(M)(A, (c, x, i) => {
    D(c, x, (T, Z) => {
      if (T)
        return i(T);
      j[x] = Z, i(T);
    });
  }, (c) => N(c, j));
}
var rI = MA(Hg, 4);
function mg(A, M, I) {
  return rI(A, 1 / 0, M, I);
}
function Pg(A, M, I) {
  return rI(A, 1, M, I);
}
function kg(A, M = (I) => I) {
  var I = /* @__PURE__ */ Object.create(null), N = /* @__PURE__ */ Object.create(null), j = NA(A), D = bM((c, x) => {
    var i = M(...c);
    i in I ? cM(() => x(null, ...I[i])) : i in N ? N[i].push(x) : (N[i] = [x], j(...c, (T, ...Z) => {
      T || (I[i] = Z);
      var U = N[i];
      delete N[i];
      for (var L = 0, Q = U.length; L < Q; L++)
        U[L](T, ...Z);
    }));
  });
  return D.memo = I, D.unmemoized = A, D;
}
var pM;
fN ? pM = process.nextTick : FN ? pM = setImmediate : pM = JN;
var pg = KN(pM), OI = MA((A, M, I) => {
  var N = JM(M) ? [] : {};
  A(M, (j, D, c) => {
    NA(j)((x, ...i) => {
      i.length < 2 && ([i] = i), N[D] = i, c(x);
    });
  }, (j) => I(j, N));
}, 3);
function vg(A, M) {
  return OI(HA, A, M);
}
function Wg(A, M, I) {
  return OI(mA(M), A, I);
}
function jj(A, M) {
  var I = NA(A);
  return ZI((N, j) => {
    I(N[0], j);
  }, M, 1);
}
class Vg {
  constructor() {
    this.heap = [], this.pushCount = Number.MIN_SAFE_INTEGER;
  }
  get length() {
    return this.heap.length;
  }
  empty() {
    return this.heap = [], this;
  }
  percUp(M) {
    let I;
    for (; M > 0 && cI(this.heap[M], this.heap[I = eN(M)]); ) {
      let N = this.heap[M];
      this.heap[M] = this.heap[I], this.heap[I] = N, M = I;
    }
  }
  percDown(M) {
    let I;
    for (; (I = Xg(M)) < this.heap.length && (I + 1 < this.heap.length && cI(this.heap[I + 1], this.heap[I]) && (I = I + 1), !cI(this.heap[M], this.heap[I])); ) {
      let N = this.heap[M];
      this.heap[M] = this.heap[I], this.heap[I] = N, M = I;
    }
  }
  push(M) {
    M.pushCount = ++this.pushCount, this.heap.push(M), this.percUp(this.heap.length - 1);
  }
  unshift(M) {
    return this.heap.push(M);
  }
  shift() {
    let [M] = this.heap;
    return this.heap[0] = this.heap[this.heap.length - 1], this.heap.pop(), this.percDown(0), M;
  }
  toArray() {
    return [...this];
  }
  *[Symbol.iterator]() {
    for (let M = 0; M < this.heap.length; M++)
      yield this.heap[M].data;
  }
  remove(M) {
    let I = 0;
    for (let N = 0; N < this.heap.length; N++)
      M(this.heap[N]) || (this.heap[I] = this.heap[N], I++);
    this.heap.splice(I);
    for (let N = eN(this.heap.length - 1); N >= 0; N--)
      this.percDown(N);
    return this;
  }
}
function Xg(A) {
  return (A << 1) + 1;
}
function eN(A) {
  return (A + 1 >> 1) - 1;
}
function cI(A, M) {
  return A.priority !== M.priority ? A.priority < M.priority : A.pushCount < M.pushCount;
}
function hg(A, M) {
  var I = jj(A, M), {
    push: N,
    pushAsync: j
  } = I;
  I._tasks = new Vg(), I._createTaskItem = ({ data: c, priority: x }, i) => ({
    data: c,
    priority: x,
    callback: i
  });
  function D(c, x) {
    return Array.isArray(c) ? c.map((i) => ({ data: i, priority: x })) : { data: c, priority: x };
  }
  return I.push = function(c, x = 0, i) {
    return N(D(c, x), i);
  }, I.pushAsync = function(c, x = 0, i) {
    return j(D(c, x), i);
  }, delete I.unshift, delete I.unshiftAsync, I;
}
function Fg(A, M) {
  if (M = NM(M), !Array.isArray(A))
    return M(new TypeError("First argument to race must be an array of functions"));
  if (!A.length)
    return M();
  for (var I = 0, N = A.length; I < N; I++)
    NA(A[I])(M);
}
var fg = MA(Fg, 2);
function xN(A, M, I, N) {
  var j = [...A].reverse();
  return yM(j, M, I, N);
}
function LI(A) {
  var M = NA(A);
  return bM(function(N, j) {
    return N.push((D, ...c) => {
      let x = {};
      if (D && (x.error = D), c.length > 0) {
        var i = c;
        c.length <= 1 && ([i] = c), x.value = i;
      }
      j(null, x);
    }), M.apply(this, N);
  });
}
function Jg(A) {
  var M;
  return Array.isArray(A) ? M = A.map(LI) : (M = {}, Object.keys(A).forEach((I) => {
    M[I] = LI.call(this, A[I]);
  })), M;
}
function RI(A, M, I, N) {
  const j = NA(I);
  return _M(A, M, (D, c) => {
    j(D, (x, i) => {
      c(x, !i);
    });
  }, N);
}
function Kg(A, M, I) {
  return RI(HA, A, M, I);
}
var qg = MA(Kg, 3);
function _g(A, M, I, N) {
  return RI(mA(M), A, I, N);
}
var $g = MA(_g, 4);
function AD(A, M, I) {
  return RI(_A, A, M, I);
}
var MD = MA(AD, 3);
function gj(A) {
  return function() {
    return A;
  };
}
const tI = 5, Dj = 0;
function dI(A, M, I) {
  var N = {
    times: tI,
    intervalFunc: gj(Dj)
  };
  if (arguments.length < 3 && typeof A == "function" ? (I = M || wM(), M = A) : (ID(N, A), I = I || wM()), typeof M != "function")
    throw new Error("Invalid arguments for async.retry");
  var j = NA(M), D = 1;
  function c() {
    j((x, ...i) => {
      x !== !1 && (x && D++ < N.times && (typeof N.errorFilter != "function" || N.errorFilter(x)) ? setTimeout(c, N.intervalFunc(D - 1)) : I(x, ...i));
    });
  }
  return c(), I[nM];
}
function ID(A, M) {
  if (typeof M == "object")
    A.times = +M.times || tI, A.intervalFunc = typeof M.interval == "function" ? M.interval : gj(+M.interval || Dj), A.errorFilter = M.errorFilter;
  else if (typeof M == "number" || typeof M == "string")
    A.times = +M || tI;
  else
    throw new Error("Invalid arguments for async.retry");
}
function ND(A, M) {
  M || (M = A, A = null);
  let I = A && A.arity || M.length;
  QM(M) && (I += 1);
  var N = NA(M);
  return bM((j, D) => {
    (j.length < I - 1 || D == null) && (j.push(D), D = wM());
    function c(x) {
      N(...j, x);
    }
    return A ? dI(A, c, D) : dI(c, D), D[nM];
  });
}
function jD(A, M) {
  return OI(_A, A, M);
}
function gD(A, M, I) {
  return $A(Boolean, (N) => N)(HA, A, M, I);
}
var uN = MA(gD, 3);
function DD(A, M, I, N) {
  return $A(Boolean, (j) => j)(mA(M), A, I, N);
}
var lN = MA(DD, 4);
function cD(A, M, I) {
  return $A(Boolean, (N) => N)(_A, A, M, I);
}
var wN = MA(cD, 3);
function iD(A, M, I) {
  var N = NA(M);
  return GI(A, (D, c) => {
    N(D, (x, i) => {
      if (x)
        return c(x);
      c(x, { value: D, criteria: i });
    });
  }, (D, c) => {
    if (D)
      return I(D);
    I(null, c.sort(j).map((x) => x.value));
  });
  function j(D, c) {
    var x = D.criteria, i = c.criteria;
    return x < i ? -1 : x > i ? 1 : 0;
  }
}
var zD = MA(iD, 3);
function eD(A, M, I) {
  var N = NA(A);
  return bM((j, D) => {
    var c = !1, x;
    function i() {
      var T = A.name || "anonymous", Z = new Error('Callback function "' + T + '" timed out.');
      Z.code = "ETIMEDOUT", I && (Z.info = I), c = !0, D(Z);
    }
    j.push((...T) => {
      c || (D(...T), clearTimeout(x));
    }), x = setTimeout(i, M), N(...j);
  });
}
function xD(A) {
  for (var M = Array(A); A--; )
    M[A] = A;
  return M;
}
function YI(A, M, I, N) {
  var j = NA(I);
  return qM(xD(A), M, j, N);
}
function uD(A, M, I) {
  return YI(A, 1 / 0, M, I);
}
function lD(A, M, I) {
  return YI(A, 1, M, I);
}
function wD(A, M, I, N) {
  arguments.length <= 3 && typeof M == "function" && (N = I, I = M, M = Array.isArray(A) ? [] : {}), N = NM(N || wM());
  var j = NA(I);
  return HA(A, (D, c, x) => {
    j(M, D, c, x);
  }, (D) => N(D, M)), N[nM];
}
function CD(A, M) {
  var I = null, N;
  return EI(A, (j, D) => {
    NA(j)((c, ...x) => {
      if (c === !1)
        return D(c);
      x.length < 2 ? [N] = x : N = x, I = c, D(c ? null : {});
    });
  }, () => M(I, N));
}
var nD = MA(CD);
function TD(A) {
  return (...M) => (A.unmemoized || A)(...M);
}
function aD(A, M, I) {
  I = jM(I);
  var N = NA(M), j = NA(A), D = [];
  function c(i, ...T) {
    if (i)
      return I(i);
    D = T, i !== !1 && j(x);
  }
  function x(i, T) {
    if (i)
      return I(i);
    if (i !== !1) {
      if (!T)
        return I(null, ...D);
      N(c);
    }
  }
  return j(x);
}
var yI = MA(aD, 3);
function ED(A, M, I) {
  const N = NA(A);
  return yI((j) => N((D, c) => j(D, !c)), M, I);
}
function LD(A, M) {
  if (M = NM(M), !Array.isArray(A))
    return M(new Error("First argument to waterfall must be an array of functions"));
  if (!A.length)
    return M();
  var I = 0;
  function N(D) {
    var c = NA(A[I++]);
    c(...D, jM(j));
  }
  function j(D, ...c) {
    if (D !== !1) {
      if (D || I === A.length)
        return M(D, ...c);
      N(c);
    }
  }
  N([]);
}
var tD = MA(LD), dD = {
  apply: rj,
  applyEach: Fj,
  applyEachSeries: Kj,
  asyncify: nI,
  auto: $N,
  autoInject: Ng,
  cargo: gg,
  cargoQueue: Dg,
  compose: ig,
  concat: _I,
  concatLimit: hM,
  concatSeries: $I,
  constant: lg,
  detect: AN,
  detectLimit: MN,
  detectSeries: IN,
  dir: Tg,
  doUntil: Eg,
  doWhilst: TI,
  each: NN,
  eachLimit: aI,
  eachOf: HA,
  eachOfLimit: XM,
  eachOfSeries: _A,
  eachSeries: EI,
  ensureAsync: Nj,
  every: jN,
  everyLimit: gN,
  everySeries: DN,
  filter: cN,
  filterLimit: iN,
  filterSeries: zN,
  forever: Ug,
  groupBy: Og,
  groupByLimit: UI,
  groupBySeries: Rg,
  log: Yg,
  map: GI,
  mapLimit: qM,
  mapSeries: _N,
  mapValues: mg,
  mapValuesLimit: rI,
  mapValuesSeries: Pg,
  memoize: kg,
  nextTick: pg,
  parallel: vg,
  parallelLimit: Wg,
  priorityQueue: hg,
  queue: jj,
  race: fg,
  reduce: yM,
  reduceRight: xN,
  reflect: LI,
  reflectAll: Jg,
  reject: qg,
  rejectLimit: $g,
  rejectSeries: MD,
  retry: dI,
  retryable: ND,
  seq: Aj,
  series: jD,
  setImmediate: cM,
  some: uN,
  someLimit: lN,
  someSeries: wN,
  sortBy: zD,
  timeout: eD,
  times: uD,
  timesLimit: YI,
  timesSeries: lD,
  transform: wD,
  tryEach: nD,
  unmemoize: TD,
  until: ED,
  waterfall: tD,
  whilst: yI,
  all: jN,
  allLimit: gN,
  allSeries: DN,
  any: uN,
  anyLimit: lN,
  anySeries: wN,
  find: AN,
  findLimit: MN,
  findSeries: IN,
  flatMap: _I,
  flatMapLimit: hM,
  flatMapSeries: $I,
  forEach: NN,
  forEachSeries: EI,
  forEachLimit: aI,
  forEachOf: HA,
  forEachOfSeries: _A,
  forEachOfLimit: XM,
  inject: yM,
  foldl: yM,
  foldr: xN,
  select: cN,
  selectLimit: iN,
  selectSeries: zN,
  wrapSync: nI,
  during: yI,
  doDuring: TI
};
const yD = [
  {
    label: "braveSwapToAccount",
    name: "to-account"
  },
  {
    label: "braveSwapToAddress",
    name: "to-address"
  }
], BD = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTciIGhlaWdodD0iMTciIHZpZXdCb3g9IjAgMCAxNyAxNyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNi42MTU0IDAuNTYyNTQ1QzE2LjY0NDIgMC42MzM1MyAxNi42NjM2IDAuNzA3ODYzIDE2LjY2NjMgMC43ODQ4NzVDMTYuNjY2OSAwLjc4ODg5MyAxNi42NjQ5IDAuNzkzNTgxIDE2LjY2NDkgMC43OTc1OTlDMTYuNjY2MyAwLjg1NTg2IDE2LjY2MjMgMC45MTM0NTEgMTYuNjQ3NSAwLjk3MTA0M0wxMy4zMTQyIDE0LjMwOTVDMTMuMjYzMyAxNC41MTExIDEzLjEyMjcgMTQuNjc3MiAxMi45MzI2IDE0Ljc2MDJDMTIuODQ3NiAxNC43OTcgMTIuNzU3MiAxNC44MTUxIDEyLjY2NzUgMTQuODE1MUMxMi41NTUgMTQuODE1MSAxMi40NDM5IDE0Ljc4NyAxMi4zNDM1IDE0LjczMDdMOS4yODU5OSAxMy4wMzE4QzkuMjY0NTcgMTMuMDkyNyA5LjI0NDQ4IDEzLjE1NDMgOS4yMDQzMSAxMy4yMDg2TDcuMjQ4NzggMTUuODc1OUM3LjEyMDkxIDE2LjA1MDcgNi45MTk0IDE2LjE0ODQgNi43MTExOSAxNi4xNDg0QzYuNjQyOSAxNi4xNDg0IDYuNTczOTUgMTYuMTM4NCA2LjUwNyAxNi4xMTYzQzYuMjMzODUgMTYuMDI4NiA2LjA0NzA3IDE1Ljc3NTQgNi4wNDQzOSAxNS40ODgxTDYuMDAwMjEgMTAuODE5OUM2LjAwMDIxIDEwLjgwNjUgNi4wMDY5IDEwLjc5NTEgNi4wMDc1NyAxMC43ODI0QzYuMDA4MjQgMTAuNzYzIDYuMDE0MjcgMTAuNzQ0MiA2LjAxODI4IDEwLjcyNDhDNi4wMjY5OSAxMC42NjA1IDYuMDQxMDUgMTAuNTk4OSA2LjA2ODQ5IDEwLjUzODZDNi4wNzA1IDEwLjUzNDYgNi4wNzA1IDEwLjUyOTkgNi4wNzI1MSAxMC41MjUyQzYuMDc4NTQgMTAuNTEzOCA2LjA3Nzg3IDEwLjUwMTEgNi4wODM4OSAxMC40ODk3QzYuMDk3OTUgMTAuNDY1IDYuMTIwMDQgMTAuNDQ5NSA2LjEzNjc4IDEwLjQyNzRDNi4xNTI4NSAxMC40MDUzIDYuMTYwMjEgMTAuMzc5MiA2LjE3OTYzIDEwLjM1ODVMMTIuOTg2MiAzLjA2MzA5TDIuODIzNTUgOC4xNDU4OEw0Ljc1NDk4IDkuMTExNTVDNS4wODUwNCA5LjI3NjI5IDUuMjE4MjYgOS42NzY3NSA1LjA1MzU3IDEwLjAwNjJDNC44ODg4OCAxMC4zMzU3IDQuNDg4NTMgMTAuNDY5NiA0LjE1OTE1IDEwLjMwNDlMMS4wMzQ3MSA4Ljc0MTg5QzAuODA5MTAyIDguNjI5MzkgMC42NjY1MDQgOC4zOTgzNSAwLjY2NjUwNCA4LjE0NTg4QzAuNjY2NTA0IDcuODkzNDIgMC44MDkxMDIgNy42NjIzOCAxLjAzNDcxIDcuNTQ5MjFMMTUuNzAyMiAwLjIxMjk3N0MxNS43MDc2IDAuMjEwOTY4IDE1LjcxMzYgMC4yMTAyOTggMTUuNzE4MyAwLjIwNzYyQzE1LjczNSAwLjIwMDI1MyAxNS43NTE4IDAuMTk3NTc1IDE1Ljc2ODUgMC4xOTE1NDdDMTUuODI2MSAwLjE3MDExOCAxNS44ODQzIDAuMTU2MDU1IDE1Ljk0MzkgMC4xNTA2OThDMTUuOTY3MyAwLjE0ODY4OSAxNS45ODg4IDAuMTQ4MDE5IDE2LjAxMjIgMC4xNDg2ODlDMTYuMDc1MSAwLjE0OTM1OCAxNi4xMzY3IDAuMTU5NDAzIDE2LjE5NyAwLjE3ODE1NEMxNi4yMTEgMC4xODIxNzIgMTYuMjI1MSAwLjE4MzUxMSAxNi4yMzkyIDAuMTg4ODY5QzE2LjMwMjggMC4yMTI5NzcgMTYuMzYzIDAuMjQ1NzkxIDE2LjQxNzkgMC4yODkzMTlDMTYuNDI1OSAwLjI5NjAxNiAxNi40MzA2IDAuMzA0NzIyIDE2LjQzODcgMC4zMTE0MThDMTYuNDQ0IDAuMzE2MTA2IDE2LjQ1MDcgMC4zMTc0NDUgMTYuNDU1NCAwLjMyMjEzM0MxNi40NjYxIDAuMzMxNTA4IDE2LjQ2OTUgMC4zNDQ5MDIgMTYuNDc4OCAwLjM1NDk0N0MxNi41MjIzIDAuNDAxMTU0IDE2LjU1ODUgMC40NTA3MSAxNi41ODY2IDAuNTA1NjIzQzE2LjU5NjcgMC41MjUwNDMgMTYuNjA3NCAwLjU0MjQ1NCAxNi42MTU0IDAuNTYyNTQ1Wk0xMi4yMzE3IDEzLjE0M0wxNC43MjgxIDMuMTUwODJMNy43MzYxNiAxMC42NDQ0TDEyLjIzMTcgMTMuMTQzWk03LjM1OTI0IDEzLjQ3MDRMOC4xMjkxNCAxMi40MTk3QzguMTM1MTYgMTIuNDExNyA4LjE0Mzg3IDEyLjQwODMgOC4xNDk4OSAxMi40MDFMNy4zNDQ1MSAxMS45NTNMNy4zNTkyNCAxMy40NzA0WiIgZmlsbD0iIzczN0FERSIvPgo8L3N2Zz4K", oD = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjIiIGhlaWdodD0iMjIiIHZpZXdCb3g9IjAgMCAyMiAxMyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik02LjAxODMyIDEuNDI2ODdDOC40MDIzOCAwLjUzNDQyOSAxMC4zNjggMC42Nzc2NjYgMTEuODc5NCAxLjQ0OTE0QzEyLjcxNzggMS44NzcwOSAxMy42MjA5IDIuNTA1MzUgMTQuMzkwNyAzLjA0MDc4QzE0LjQyMzcgMy4wNjM3MyAxNC40NTY0IDMuMDg2NTEgMTQuNDg4OSAzLjEwOTFDMTQuODkxIDMuMzg4NjMgMTUuMjUxIDMuNjM3MyAxNS41NTY3IDMuODI2ODVDMTUuODc4IDQuMDI2MTQgMTYuMDgxIDQuMTIyMTYgMTYuMTgzOCA0LjE0NTI2QzE2LjM2ODQgNC4xODY3IDE2Ljc2OTIgNC4yNDIzIDE3LjI2MDkgNC4zMTA0OEMxNy41MjA2IDQuMzQ2NTEgMTcuODA1NyA0LjM4NjA0IDE4LjA5NzYgNC40Mjg4N0MxOC41MDY2IDQuNDg4ODcgMTguOTE5NyA0LjU1NDM0IDE5LjI2NDMgNC42MjMxNUMxOS40MzYzIDQuNjU3NTEgMTkuNTk3MyA0LjY5Mzg4IDE5LjczNTMgNC43MzIzNUMxOS44NjM3IDQuNzY4MTkgMjAuMDA2NCA0LjgxNDg0IDIwLjEyMTYgNC44Nzk1NUMyMC43NTggNS4yMzY4OSAyMS4yMDI5IDUuNzUzNjIgMjEuNDQ3OCA2LjM1NTJDMjEuNzA0NCA2Ljk4NTM3IDIxLjcyNjkgNy42NzM0NiAyMS41NjA0IDguMzAyMTFDMjEuMzUxNCA5LjA5MDY2IDIwLjg0NSA5Ljc4OTM5IDIwLjEyMTYgMTAuMTk1NkMyMC4wNDk4IDEwLjIzNTkgMTkuOTcwNSAxMC4yNTY5IDE5Ljg5MDIgMTAuMjU2OUgxOC4yMTQ3QzE3LjkyOSAxMC4yNTY5IDE3LjY5NzMgOS45OTY3NSAxNy42OTczIDkuNjc1NzlDMTcuNjk3MyA5LjM1NDgzIDE3LjkyOSA5LjA5NDYzIDE4LjIxNDcgOS4wOTQ2M0gxOS43NjAzQzE5LjkyMzEgOC45ODkwMyAyMC4wNjQ4IDguODYwOTUgMjAuMTgzOSA4LjcxNzUxSDE5LjgxNEMxOS4xNDk3IDguNzE3NTEgMTguNjExMiA4LjExMjY5IDE4LjYxMTIgNy4zNjY2QzE4LjYxMTIgNi42MjA1MSAxOS4xNDk3IDYuMDE1NjggMTkuODE0IDYuMDE1NjhIMTkuODE2MUMxOS43NjY0IDUuOTgyMzcgMTkuNzE0IDUuOTUwMTUgMTkuNjU4OCA1LjkxOTE2QzE5LjY1ODkgNS45MTkyMSAxOS42NTkgNS45MTkyNSAxOS42NTg4IDUuOTE5MTZDMTkuNjU3MSA1LjkxODMzIDE5LjY0MzUgNS45MTE1IDE5LjYxMyA1LjkwMDMyQzE5LjU4MSA1Ljg4ODY0IDE5LjUzODkgNS44NzUyMSAxOS40ODU4IDUuODYwNEMxOS4zNzkzIDUuODMwNjkgMTkuMjQzNCA1Ljc5OTUzIDE5LjA4MzEgNS43Njc1MUMxOC43NjI4IDUuNzAzNTQgMTguMzY4OSA1LjY0MDg1IDE3Ljk2MzUgNS41ODEzOUMxNy43MTM0IDUuNTQ0NjkgMTcuNDU0NSA1LjUwODc0IDE3LjIwNzIgNS40NzQ0QzE2LjY3ODkgNS40MDEwNCAxNi4yMDM4IDUuMzM1MDYgMTUuOTgwOSA1LjI4NUMxNS43MDI5IDUuMjIyNTYgMTUuMzcyOCA1LjA0MDYxIDE1LjA1NjMgNC44NDQzMkMxNC43MjQyIDQuNjM4MjkgMTQuMzQxNyA0LjM3Mzc5IDEzLjk0NDEgNC4wOTczN0MxMy45MTkxIDQuMDc5OTQgMTMuODkzOSA0LjA2MjQ2IDEzLjg2ODcgNC4wNDQ5M0MxMy4wODA2IDMuNDk2ODUgMTIuMjI3NCAyLjkwMzU1IDExLjQ1MTEgMi41MDcyOEMxMC4yMjA4IDEuODc5MjggOC41MzA5NCAxLjcxMTQ4IDYuMzQ1NTkgMi41Mjk1NEM1LjU1MTU5IDIuODI2NzcgNS4wMTgzNSAzLjM1NzM3IDQuNjAyMjggMy45Mjg1MkM0LjM5MTUxIDQuMjE3ODQgNC4yMTM1IDQuNTEzNjcgNC4wNDIyIDQuODAyMjhDNC4wMzA4IDQuODIxNDcgNC4wMTkzNyA0Ljg0MDc2IDQuMDA3ODkgNC44NjAxMkMzLjg1NDM4IDUuMTE5MTEgMy42OTM3OCA1LjM5MDA1IDMuNTI4NTggNS42MDY1MUMzLjQzMDI2IDUuNzM1MzIgMy4yODY3NCA1LjgwOTQ1IDMuMTM1NjggNS44MDk0NUgzLjA0MjU5QzIuMTE3OTkgNS44MDk0NSAxLjM2ODQ1IDYuNjUxMjMgMS4zNjg0NSA3LjY4OTYyQzEuMzY4NDUgOC4xMTAxIDEuNDc3MzggOC40MjcwMyAxLjY2NDg4IDguNjAyODhDMS45Njc1MyA4Ljg4NjcgMi4zMjY5NiA5LjA5NDYzIDIuNjc4NzQgOS4wOTQ2M0MyLjk2NDUzIDkuMDk0NjMgMy4xOTYyMSA5LjM1NDgzIDMuMTk2MjEgOS42NzU3OUMzLjE5NjIxIDkuOTk2NzUgMi45NjQ1MyAxMC4yNTY5IDIuNjc4NzQgMTAuMjU2OUMxLjk4MTgyIDEwLjI1NjkgMS4zOTIzMyA5Ljg2MTU0IDEuMDAxNTIgOS40OTUwM0MwLjQ4Nzc5MiA5LjAxMzI2IDAuMzMzNDk2IDguMjk1MTQgMC4zMzM0OTYgNy42ODk2MkMwLjMzMzQ5NiA2LjA3MDUxIDEuNDU5NjYgNC43NDY3OSAyLjg4MDI5IDQuNjUyNTFDMi45NjM4MyA0LjUyMzYxIDMuMDU0ODMgNC4zNzAyNiAzLjE2Mjg4IDQuMTg4MTlDMy4xNjg4OCA0LjE3ODA4IDMuMTc0OTMgNC4xNjc4OCAzLjE4MTA0IDQuMTU3NTlDMy4zNTI0IDMuODY4ODkgMy41NTUxMiAzLjUzMDQgMy44MDEyNSAzLjE5MjUyQzQuMjk4OTkgMi41MDkyNyA0Ljk4NDI2IDEuODEzOTYgNi4wMTgzMiAxLjQyNjg3Wk0yMC42MDQ2IDcuMTc3OTlIMTkuODE0QzE5LjcyMTMgNy4xNzc5OSAxOS42NDYxIDcuMjYyNDMgMTkuNjQ2MSA3LjM2NjZDMTkuNjQ2MSA3LjQ3MDc2IDE5LjcyMTMgNy41NTUyIDE5LjgxNCA3LjU1NTJIMjAuNjMwN0MyMC42MzUzIDcuNDI4NDQgMjAuNjI2NyA3LjMwMiAyMC42MDQ2IDcuMTc3OTlaTTYuNzQ0ODQgMi43NDg1N0M2Ljg0MDQzIDIuNjQ5NDggNi45NjU3NSAyLjU5NDQ1IDcuMDk1ODQgMi41OTQ0NUgxMS4yMDgzQzExLjMyNTggMi41OTQ0NSAxMS40Mzk4IDIuNjM5MzcgMTEuNTMxNiAyLjcyMThMMTMuODE2MyA0Ljc3NDQ5QzEzLjk4NzkgNC45Mjg2NyAxNC4wNTQxIDUuMTg3NzcgMTMuOTgxMyA1LjQyMDY3QzEzLjkwODYgNS42NTM1NiAxMy43MTI4IDUuODA5NDUgMTMuNDkzIDUuODA5NDVINS4xMTU3NkM0LjkwMjY5IDUuODA5NDUgNC43MTE0IDUuNjYyNzggNC42MzM4MSA1LjQzOTkyQzQuNTU2MjIgNS4yMTcwNiA0LjYwODIgNC45NjM1NyA0Ljc2NDc2IDQuODAxMjZMNi43NDQ4NCAyLjc0ODU3Wk03LjI5ODE2IDMuNzU2NzdMNi40MzkyOCA0LjY0NzE0SDguNzEwNzZWMy43NTY3N0g3LjI5ODE2Wk05Ljc0NTcxIDMuNzU2NzdWNC42NDcxNEgxMi4wMTc4TDExLjAyNjggMy43NTY3N0g5Ljc0NTcxWk02LjEyMTQyIDkuNjc1NzlDNi4xMjE0MiA5LjM1NDgzIDYuMzUzMSA5LjA5NDYzIDYuNjM4OSA5LjA5NDYzSDE0LjU1OTJDMTQuODQ1IDkuMDk0NjMgMTUuMDc2NyA5LjM1NDgzIDE1LjA3NjcgOS42NzU3OUMxNS4wNzY3IDkuOTk2NzUgMTQuODQ1IDEwLjI1NjkgMTQuNTU5MiAxMC4yNTY5SDYuNjM4OUM2LjM1MzEgMTAuMjU2OSA2LjEyMTQyIDkuOTk2NzUgNi4xMjE0MiA5LjY3NTc5WiIgZmlsbD0iIzczN0FERSIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTQuODQ2MiAxMC45OTgxQzUuNDI5MjUgMTAuOTk4MSA1LjkwMTkgMTAuNDU0MSA1LjkwMTkgOS43ODI5OUM1LjkwMTkgOS4xMTE4OCA1LjQyOTI1IDguNTY3ODMgNC44NDYyIDguNTY3ODNDNC4yNjMxNiA4LjU2NzgzIDMuNzkwNTEgOS4xMTE4OCAzLjc5MDUxIDkuNzgyOTlDMy43OTA1MSAxMC40NTQxIDQuMjYzMTYgMTAuOTk4MSA0Ljg0NjIgMTAuOTk4MVpNNC44NDYyIDEyLjE0NDFDNS45NzkxIDEyLjE0NDEgNi44OTc0OSAxMS4wODcgNi44OTc0OSA5Ljc4Mjk5QzYuODk3NDkgOC40Nzg5OCA1Ljk3OTEgNy40MjE4OCA0Ljg0NjIgNy40MjE4OEMzLjcxMzMxIDcuNDIxODggMi43OTQ5MiA4LjQ3ODk4IDIuNzk0OTIgOS43ODI5OUMyLjc5NDkyIDExLjA4NyAzLjcxMzMxIDEyLjE0NDEgNC44NDYyIDEyLjE0NDFaIiBmaWxsPSIjNzM3QURFIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTYuMzMzNSAxMC45OTgxQzE2LjkxNjYgMTAuOTk4MSAxNy4zODkyIDEwLjQ1NDEgMTcuMzg5MiA5Ljc4Mjk5QzE3LjM4OTIgOS4xMTE4OCAxNi45MTY2IDguNTY3ODMgMTYuMzMzNSA4LjU2NzgzQzE1Ljc1MDUgOC41Njc4MyAxNS4yNzc4IDkuMTExODggMTUuMjc3OCA5Ljc4Mjk5QzE1LjI3NzggMTAuNDU0MSAxNS43NTA1IDEwLjk5ODEgMTYuMzMzNSAxMC45OTgxWk0xNi4zMzM1IDEyLjE0NDFDMTcuNDY2NCAxMi4xNDQxIDE4LjM4NDggMTEuMDg3IDE4LjM4NDggOS43ODI5OUMxOC4zODQ4IDguNDc4OTggMTcuNDY2NCA3LjQyMTg4IDE2LjMzMzUgNy40MjE4OEMxNS4yMDA2IDcuNDIxODggMTQuMjgyMiA4LjQ3ODk4IDE0LjI4MjIgOS43ODI5OUMxNC4yODIyIDExLjA4NyAxNS4yMDA2IDEyLjE0NDEgMTYuMzMzNSAxMi4xNDQxWiIgZmlsbD0iIzczN0FERSIvPgo8L3N2Zz4K", SD = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTciIHZpZXdCb3g9IjAgMCAxNiAxNyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzgyMzNfMjU4ODUwKSI+CjxwYXRoIGQ9Ik0xMS41NDY0IDEyLjM1MTRDMTEuNjcwNiAxMi4yMDIxIDExLjY5NTIgMTEuOTcwMSAxMS42Mjg3IDExLjc0NjRMMTEuMjU0OSAxMC42NzhDMTEuOTQyMSAxMC4xNTUzIDEyLjc1MzUgOS40ODM0NiAxMy41Mzk3IDguNTM4MThDMTYuMzQ1NCA1LjA2Mzk2IDE1LjA5MDQgMC45MDU3NjkgMTUuMDMyMyAwLjc3MzI1M0MxNC45NjU4IDAuNTQ5NjA0IDE0LjcxNzEgMC4zNDI2OTQgMTQuNDg1IDAuMzE4MDUxQzE0LjM0NDEgMC4yODUwMzggMTEuODQxNyAwLjA1NTM0MTcgOS4zOTA0IDEuMzgzMjhMOS4zNDkwMiAxLjQzMzAzQzguNTYyMjkgMS44NzI4OSA3LjgzMzY5IDIuNDQ1MjYgNy4xMzAyIDMuMjkxMDRDNi4zNDM5NCA0LjIzNjMxIDUuNzgxMzMgNS4xMTUxIDUuNDAwOTkgNS45NzcxNEw0LjMyMzY2IDUuNzU0NDJDNC4wOTE2NCA1LjcyOTc4IDMuODY3OTkgNS43OTYyNyAzLjc0Mzg1IDUuOTQ1NTJMMC44MzgyNzEgOC44MzE1NkMwLjY3Mjc0MiA5LjAzMDU3IDAuNjA2NzE3IDkuMzEyMzQgMC42NzMyMDcgOS41MzU5OUMwLjY4MTU3NyA5LjYyNzEyIDAuNzgxMDc4IDkuNzA5ODkgMC44ODA1ODEgOS43OTI2NUMwLjk4MDA4NCA5Ljg3NTQxIDEuMTcwNzIgOS45NDk4MSAxLjI2MTg1IDkuOTQxNDRMNS4xNjQzMSA5LjkwNDcxQzUuMTY0MzEgOS45MDQ3MSA1LjE2NDMxIDkuOTA0NzEgNS4yNTU0NSA5Ljg5NjM0QzUuMjU1NDUgOS44OTYzNCA1LjI1NTQ1IDkuODk2MzQgNS4zMDUyIDkuOTM3NzJDNS4zMDUyIDkuOTM3NzIgNS44NTIgOS44ODc1MSA2LjQ5ODc3IDEwLjQyNTVDNy4xOTUyOCAxMS4wMDQ4IDcuMjM3MTMgMTEuNDYwNSA3LjIzNzEzIDExLjQ2MDVDNy4yNDU1IDExLjU1MTYgNy4yNTM4NyAxMS42NDI4IDcuMzExOTkgMTEuNzc1M0w4LjAxOTY2IDE1LjQ3ODNDOC4wMzY0IDE1LjY2MDUgOC4xMzU5IDE1Ljc0MzMgOC4yMzU0MSAxNS44MjYxQzguMzM0OTEgMTUuOTA4OCA4LjM4NDY2IDE1Ljk1MDIgOC41MjU1NSAxNS45ODMyQzguODA3MzIgMTYuMDQ5MiA5LjA3MjM1IDE1LjkzMyA5LjE4ODEyIDE1LjY5MjZMMTEuNTQ2NCAxMi4zNTE0Wk0xMy44NjQ4IDEuNTY5NzRDMTMuOTY0NyAyLjE1NzkyIDE0LjExNDkgMy4yOTI5IDEzLjgyNjIgNC42NTJMMTAuODQxMSAyLjE2OTA4QzEyLjEyNDkgMS42Mzc2MiAxMy4yNjgyIDEuNTc4NTcgMTMuODY0OCAxLjU2OTc0Wk00LjQ0MDgzIDcuMDMwMjlMNC45MDQ4NyA3LjA3OTU4QzQuNzMxNDMgNy42OTI4NyA0LjY0MDc2IDguMjA2NjUgNC41ODMxMSA4LjU3OTU2TDIuODM0ODMgOC41NTYzMUw0LjQ0MDgzIDcuMDMwMjlaTTUuODg0MDggOC43MzU3OUM1Ljk5MTAyIDcuODk4ODUgNi4zODcxOCA2LjIwODIzIDguMTI1MjIgNC4xMTg2OEM4LjU4MDQzIDMuNTcxNDEgOS4wOTM3NSAzLjE1NjY2IDkuNjU2ODIgMi43ODMzTDEzLjUzNzQgNi4wMTEwOUMxMy4zMTQyIDYuNTgzIDEyLjk5OTkgNy4xNjMyOCAxMi41MDMzIDcuNzYwM0MxMC43NjUzIDkuODQ5ODUgOS4xNzUxMSAxMC41NDczIDguMzcxNjUgMTAuODA0OUM4LjE5NzI5IDEwLjQwNzMgNy44ODIwNCA5Ljk3Njc4IDcuMzM0NzcgOS41MjE1OEM2Ljc4NzUxIDkuMDY2MzggNi4yNTY5OCA4Ljc5MzQ0IDUuODg0MDggOC43MzU3OVpNOC42MjEzMyAxMi4wMjI2QzguOTc3NSAxMS44OTggOS40NjYxOCAxMS43MTUzIDEwLjAzNzYgMTEuNDMzMUwxMC4yMjA0IDExLjkyMTdMOC45MjEyMyAxMy43ODcyTDguNjIxMzMgMTIuMDIyNlpNMi4yMTg3NSAxNC4zNTY4QzEuOTIwMjQgMTQuMTA4NSAxLjg4Njc2IDEzLjc0MzkgMi4xMzUwNiAxMy40NDU0TDQuMjg2OTIgMTAuODU4NEM0LjUzNTIxIDEwLjU1OTggNC44OTk3NSAxMC41MjY0IDUuMTk4MjUgMTAuNzc0N0M1LjQ5Njc2IDExLjAyMyA1LjUzMDI0IDExLjM4NzUgNS4yODE5NSAxMS42ODZMMy4xMzAwOCAxNC4yNzMxQzIuOTIzMTcgMTQuNTIxOCAyLjQ2NzUgMTQuNTYzNyAyLjIxODc1IDE0LjM1NjhaTTQuNTM4NDYgMTQuMDk3OEM0LjIzOTk2IDEzLjg0OTUgNC4yMDY0OCAxMy40ODQ5IDQuNDU0NzcgMTMuMTg2NEw1LjUzMDcgMTEuODkyOUM1Ljc3OSAxMS41OTQ0IDYuMTQzNTMgMTEuNTYwOSA2LjQ0MjA0IDExLjgwOTJDNi43NDA1NSAxMi4wNTc1IDYuNzc0MDIgMTIuNDIyIDYuNTI1NzMgMTIuNzIwNUw1LjQ0OTggMTQuMDE0MUM1LjI0Mjg5IDE0LjI2MjggNC44MzY5NyAxNC4zNDYxIDQuNTM4NDYgMTQuMDk3OFoiIGZpbGw9IiM3MzdBREUiLz4KPC9nPgo8ZGVmcz4KPGNsaXBQYXRoIGlkPSJjbGlwMF84MjMzXzI1ODg1MCI+CjxyZWN0IHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0id2hpdGUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMC4xNDg0MzgpIi8+CjwvY2xpcFBhdGg+CjwvZGVmcz4KPC9zdmc+Cg==", cj = [
  {
    id: "slow",
    name: "braveSwapSlow",
    icon: BD
  },
  {
    id: "average",
    name: "braveSwapAverage",
    icon: oD
  },
  {
    id: "fast",
    name: "braveSwapFast",
    icon: SD
  }
], ij = bI(void 0), zj = bI(void 0), sD = {
  tokenBalances: {},
  spotPrices: {
    makerAsset: "",
    takerAsset: "",
    nativeAsset: ""
  },
  userSelectedExchanges: [],
  networkFeeEstimates: {}
}, bD = (A, M) => {
  switch (M.type) {
    case "updateTokenBalances":
      return {
        ...A,
        tokenBalances: {
          ...A.tokenBalances,
          ...M.payload
        }
      };
    case "updateSpotPrices":
      return {
        ...A,
        spotPrices: {
          ...A.spotPrices,
          ...M.payload
        }
      };
    case "updateUserSelectedExchanges":
      return {
        ...A,
        userSelectedExchanges: M.payload
      };
    default:
      return A;
  }
}, QD = (A) => {
  const {
    children: M
  } = A, [I, N] = oj(bD, sD);
  return /* @__PURE__ */ u(ij.Provider, {
    value: {
      state: I
    },
    children: /* @__PURE__ */ u(zj.Provider, {
      value: {
        dispatch: N
      },
      children: M
    })
  });
}, TM = () => {
  const A = VN(ij);
  if (A === void 0)
    throw new Error("useWalletState must be used within a WalletStateProvider");
  return A;
}, ej = () => {
  const A = VN(zj);
  if (A === void 0)
    throw new Error("useWalletDispatch must be used within a WalletStateDispatchProvider");
  return A;
};
var GD = /^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i, iI = Math.ceil, vA = Math.floor, sA = "[BigNumber Error] ", CN = sA + "Number primitive has more than 15 significant digits: ", RA = 1e14, $ = 14, zI = 9007199254740991, eI = [1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10, 1e11, 1e12, 1e13], IM = 1e7, LA = 1e9;
function xj(A) {
  var M, I, N, j = l.prototype = { constructor: l, toString: null, valueOf: null }, D = new l(1), c = 20, x = 4, i = -7, T = 21, Z = -1e7, U = 1e7, L = !1, Q = 1, p = 0, E = {
    prefix: "",
    groupSize: 3,
    secondaryGroupSize: 0,
    groupSeparator: ",",
    decimalSeparator: ".",
    fractionGroupSize: 0,
    fractionGroupSeparator: "\xA0",
    suffix: ""
  }, r = "0123456789abcdefghijklmnopqrstuvwxyz", b = !0;
  function l(g, z) {
    var e, n, a, d, B, C, w, S, t = this;
    if (!(t instanceof l))
      return new l(g, z);
    if (z == null) {
      if (g && g._isBigNumber === !0) {
        t.s = g.s, !g.c || g.e > U ? t.c = t.e = null : g.e < Z ? t.c = [t.e = 0] : (t.e = g.e, t.c = g.c.slice());
        return;
      }
      if ((C = typeof g == "number") && g * 0 == 0) {
        if (t.s = 1 / g < 0 ? (g = -g, -1) : 1, g === ~~g) {
          for (d = 0, B = g; B >= 10; B /= 10, d++)
            ;
          d > U ? t.c = t.e = null : (t.e = d, t.c = [g]);
          return;
        }
        S = String(g);
      } else {
        if (!GD.test(S = String(g)))
          return N(t, S, C);
        t.s = S.charCodeAt(0) == 45 ? (S = S.slice(1), -1) : 1;
      }
      (d = S.indexOf(".")) > -1 && (S = S.replace(".", "")), (B = S.search(/e/i)) > 0 ? (d < 0 && (d = B), d += +S.slice(B + 1), S = S.substring(0, B)) : d < 0 && (d = S.length);
    } else {
      if (nA(z, 2, r.length, "Base"), z == 10 && b)
        return t = new l(g), m(t, c + t.e + 1, x);
      if (S = String(g), C = typeof g == "number") {
        if (g * 0 != 0)
          return N(t, S, C, z);
        if (t.s = 1 / g < 0 ? (S = S.slice(1), -1) : 1, l.DEBUG && S.replace(/^0\.0*|\./, "").length > 15)
          throw Error(CN + g);
      } else
        t.s = S.charCodeAt(0) === 45 ? (S = S.slice(1), -1) : 1;
      for (e = r.slice(0, z), d = B = 0, w = S.length; B < w; B++)
        if (e.indexOf(n = S.charAt(B)) < 0) {
          if (n == ".") {
            if (B > d) {
              d = w;
              continue;
            }
          } else if (!a && (S == S.toUpperCase() && (S = S.toLowerCase()) || S == S.toLowerCase() && (S = S.toUpperCase()))) {
            a = !0, B = -1, d = 0;
            continue;
          }
          return N(t, String(g), C, z);
        }
      C = !1, S = I(S, z, 10, t.s), (d = S.indexOf(".")) > -1 ? S = S.replace(".", "") : d = S.length;
    }
    for (B = 0; S.charCodeAt(B) === 48; B++)
      ;
    for (w = S.length; S.charCodeAt(--w) === 48; )
      ;
    if (S = S.slice(B, ++w)) {
      if (w -= B, C && l.DEBUG && w > 15 && (g > zI || g !== vA(g)))
        throw Error(CN + t.s * g);
      if ((d = d - B - 1) > U)
        t.c = t.e = null;
      else if (d < Z)
        t.c = [t.e = 0];
      else {
        if (t.e = d, t.c = [], B = (d + 1) % $, d < 0 && (B += $), B < w) {
          for (B && t.c.push(+S.slice(0, B)), w -= $; B < w; )
            t.c.push(+S.slice(B, B += $));
          B = $ - (S = S.slice(B)).length;
        } else
          B -= w;
        for (; B--; S += "0")
          ;
        t.c.push(+S);
      }
    } else
      t.c = [t.e = 0];
  }
  l.clone = xj, l.ROUND_UP = 0, l.ROUND_DOWN = 1, l.ROUND_CEIL = 2, l.ROUND_FLOOR = 3, l.ROUND_HALF_UP = 4, l.ROUND_HALF_DOWN = 5, l.ROUND_HALF_EVEN = 6, l.ROUND_HALF_CEIL = 7, l.ROUND_HALF_FLOOR = 8, l.EUCLID = 9, l.config = l.set = function(g) {
    var z, e;
    if (g != null)
      if (typeof g == "object") {
        if (g.hasOwnProperty(z = "DECIMAL_PLACES") && (e = g[z], nA(e, 0, LA, z), c = e), g.hasOwnProperty(z = "ROUNDING_MODE") && (e = g[z], nA(e, 0, 8, z), x = e), g.hasOwnProperty(z = "EXPONENTIAL_AT") && (e = g[z], e && e.pop ? (nA(e[0], -LA, 0, z), nA(e[1], 0, LA, z), i = e[0], T = e[1]) : (nA(e, -LA, LA, z), i = -(T = e < 0 ? -e : e))), g.hasOwnProperty(z = "RANGE"))
          if (e = g[z], e && e.pop)
            nA(e[0], -LA, -1, z), nA(e[1], 1, LA, z), Z = e[0], U = e[1];
          else if (nA(e, -LA, LA, z), e)
            Z = -(U = e < 0 ? -e : e);
          else
            throw Error(sA + z + " cannot be zero: " + e);
        if (g.hasOwnProperty(z = "CRYPTO"))
          if (e = g[z], e === !!e)
            if (e)
              if (typeof crypto < "u" && crypto && (crypto.getRandomValues || crypto.randomBytes))
                L = e;
              else
                throw L = !e, Error(sA + "crypto unavailable");
            else
              L = e;
          else
            throw Error(sA + z + " not true or false: " + e);
        if (g.hasOwnProperty(z = "MODULO_MODE") && (e = g[z], nA(e, 0, 9, z), Q = e), g.hasOwnProperty(z = "POW_PRECISION") && (e = g[z], nA(e, 0, LA, z), p = e), g.hasOwnProperty(z = "FORMAT"))
          if (e = g[z], typeof e == "object")
            E = e;
          else
            throw Error(sA + z + " not an object: " + e);
        if (g.hasOwnProperty(z = "ALPHABET"))
          if (e = g[z], typeof e == "string" && !/^.?$|[+\-.\s]|(.).*\1/.test(e))
            b = e.slice(0, 10) == "0123456789", r = e;
          else
            throw Error(sA + z + " invalid: " + e);
      } else
        throw Error(sA + "Object expected: " + g);
    return {
      DECIMAL_PLACES: c,
      ROUNDING_MODE: x,
      EXPONENTIAL_AT: [i, T],
      RANGE: [Z, U],
      CRYPTO: L,
      MODULO_MODE: Q,
      POW_PRECISION: p,
      FORMAT: E,
      ALPHABET: r
    };
  }, l.isBigNumber = function(g) {
    if (!g || g._isBigNumber !== !0)
      return !1;
    if (!l.DEBUG)
      return !0;
    var z, e, n = g.c, a = g.e, d = g.s;
    A:
      if ({}.toString.call(n) == "[object Array]") {
        if ((d === 1 || d === -1) && a >= -LA && a <= LA && a === vA(a)) {
          if (n[0] === 0) {
            if (a === 0 && n.length === 1)
              return !0;
            break A;
          }
          if (z = (a + 1) % $, z < 1 && (z += $), String(n[0]).length == z) {
            for (z = 0; z < n.length; z++)
              if (e = n[z], e < 0 || e >= RA || e !== vA(e))
                break A;
            if (e !== 0)
              return !0;
          }
        }
      } else if (n === null && a === null && (d === null || d === 1 || d === -1))
        return !0;
    throw Error(sA + "Invalid BigNumber: " + g);
  }, l.maximum = l.max = function() {
    return y(arguments, j.lt);
  }, l.minimum = l.min = function() {
    return y(arguments, j.gt);
  }, l.random = function() {
    var g = 9007199254740992, z = Math.random() * g & 2097151 ? function() {
      return vA(Math.random() * g);
    } : function() {
      return (Math.random() * 1073741824 | 0) * 8388608 + (Math.random() * 8388608 | 0);
    };
    return function(e) {
      var n, a, d, B, C, w = 0, S = [], t = new l(D);
      if (e == null ? e = c : nA(e, 0, LA), B = iI(e / $), L)
        if (crypto.getRandomValues) {
          for (n = crypto.getRandomValues(new Uint32Array(B *= 2)); w < B; )
            C = n[w] * 131072 + (n[w + 1] >>> 11), C >= 9e15 ? (a = crypto.getRandomValues(new Uint32Array(2)), n[w] = a[0], n[w + 1] = a[1]) : (S.push(C % 1e14), w += 2);
          w = B / 2;
        } else if (crypto.randomBytes) {
          for (n = crypto.randomBytes(B *= 7); w < B; )
            C = (n[w] & 31) * 281474976710656 + n[w + 1] * 1099511627776 + n[w + 2] * 4294967296 + n[w + 3] * 16777216 + (n[w + 4] << 16) + (n[w + 5] << 8) + n[w + 6], C >= 9e15 ? crypto.randomBytes(7).copy(n, w) : (S.push(C % 1e14), w += 7);
          w = B / 7;
        } else
          throw L = !1, Error(sA + "crypto unavailable");
      if (!L)
        for (; w < B; )
          C = z(), C < 9e15 && (S[w++] = C % 1e14);
      for (B = S[--w], e %= $, B && e && (C = eI[$ - e], S[w] = vA(B / C) * C); S[w] === 0; S.pop(), w--)
        ;
      if (w < 0)
        S = [d = 0];
      else {
        for (d = -1; S[0] === 0; S.splice(0, 1), d -= $)
          ;
        for (w = 1, C = S[0]; C >= 10; C /= 10, w++)
          ;
        w < $ && (d -= $ - w);
      }
      return t.e = d, t.c = S, t;
    };
  }(), l.sum = function() {
    for (var g = 1, z = arguments, e = new l(z[0]); g < z.length; )
      e = e.plus(z[g++]);
    return e;
  }, I = function() {
    var g = "0123456789";
    function z(e, n, a, d) {
      for (var B, C = [0], w, S = 0, t = e.length; S < t; ) {
        for (w = C.length; w--; C[w] *= n)
          ;
        for (C[0] += d.indexOf(e.charAt(S++)), B = 0; B < C.length; B++)
          C[B] > a - 1 && (C[B + 1] == null && (C[B + 1] = 0), C[B + 1] += C[B] / a | 0, C[B] %= a);
      }
      return C.reverse();
    }
    return function(e, n, a, d, B) {
      var C, w, S, t, R, X, V, _, eA = e.indexOf("."), cA = c, q = x;
      for (eA >= 0 && (t = p, p = 0, e = e.replace(".", ""), _ = new l(n), X = _.pow(e.length - eA), p = t, _.c = z(
        KA(ZA(X.c), X.e, "0"),
        10,
        a,
        g
      ), _.e = _.c.length), V = z(e, n, a, B ? (C = r, g) : (C = g, r)), S = t = V.length; V[--t] == 0; V.pop())
        ;
      if (!V[0])
        return C.charAt(0);
      if (eA < 0 ? --S : (X.c = V, X.e = S, X.s = d, X = M(X, _, cA, q, a), V = X.c, R = X.r, S = X.e), w = S + cA + 1, eA = V[w], t = a / 2, R = R || w < 0 || V[w + 1] != null, R = q < 4 ? (eA != null || R) && (q == 0 || q == (X.s < 0 ? 3 : 2)) : eA > t || eA == t && (q == 4 || R || q == 6 && V[w - 1] & 1 || q == (X.s < 0 ? 8 : 7)), w < 1 || !V[0])
        e = R ? KA(C.charAt(1), -cA, C.charAt(0)) : C.charAt(0);
      else {
        if (V.length = w, R)
          for (--a; ++V[--w] > a; )
            V[w] = 0, w || (++S, V = [1].concat(V));
        for (t = V.length; !V[--t]; )
          ;
        for (eA = 0, e = ""; eA <= t; e += C.charAt(V[eA++]))
          ;
        e = KA(e, S, C.charAt(0));
      }
      return e;
    };
  }(), M = function() {
    function g(n, a, d) {
      var B, C, w, S, t = 0, R = n.length, X = a % IM, V = a / IM | 0;
      for (n = n.slice(); R--; )
        w = n[R] % IM, S = n[R] / IM | 0, B = V * w + S * X, C = X * w + B % IM * IM + t, t = (C / d | 0) + (B / IM | 0) + V * S, n[R] = C % d;
      return t && (n = [t].concat(n)), n;
    }
    function z(n, a, d, B) {
      var C, w;
      if (d != B)
        w = d > B ? 1 : -1;
      else
        for (C = w = 0; C < d; C++)
          if (n[C] != a[C]) {
            w = n[C] > a[C] ? 1 : -1;
            break;
          }
      return w;
    }
    function e(n, a, d, B) {
      for (var C = 0; d--; )
        n[d] -= C, C = n[d] < a[d] ? 1 : 0, n[d] = C * B + n[d] - a[d];
      for (; !n[0] && n.length > 1; n.splice(0, 1))
        ;
    }
    return function(n, a, d, B, C) {
      var w, S, t, R, X, V, _, eA, cA, q, jA, wA, XA, iA, xA, tA, hA, aA = n.s == a.s ? 1 : -1, EA = n.c, zA = a.c;
      if (!EA || !EA[0] || !zA || !zA[0])
        return new l(
          !n.s || !a.s || (EA ? zA && EA[0] == zA[0] : !zA) ? NaN : EA && EA[0] == 0 || !zA ? aA * 0 : aA / 0
        );
      for (eA = new l(aA), cA = eA.c = [], S = n.e - a.e, aA = d + S + 1, C || (C = RA, S = UA(n.e / $) - UA(a.e / $), aA = aA / $ | 0), t = 0; zA[t] == (EA[t] || 0); t++)
        ;
      if (zA[t] > (EA[t] || 0) && S--, aA < 0)
        cA.push(1), R = !0;
      else {
        for (iA = EA.length, tA = zA.length, t = 0, aA += 2, X = vA(C / (zA[0] + 1)), X > 1 && (zA = g(zA, X, C), EA = g(EA, X, C), tA = zA.length, iA = EA.length), XA = tA, q = EA.slice(0, tA), jA = q.length; jA < tA; q[jA++] = 0)
          ;
        hA = zA.slice(), hA = [0].concat(hA), xA = zA[0], zA[1] >= C / 2 && xA++;
        do {
          if (X = 0, w = z(zA, q, tA, jA), w < 0) {
            if (wA = q[0], tA != jA && (wA = wA * C + (q[1] || 0)), X = vA(wA / xA), X > 1)
              for (X >= C && (X = C - 1), V = g(zA, X, C), _ = V.length, jA = q.length; z(V, q, _, jA) == 1; )
                X--, e(V, tA < _ ? hA : zA, _, C), _ = V.length, w = 1;
            else
              X == 0 && (w = X = 1), V = zA.slice(), _ = V.length;
            if (_ < jA && (V = [0].concat(V)), e(q, V, jA, C), jA = q.length, w == -1)
              for (; z(zA, q, tA, jA) < 1; )
                X++, e(q, tA < jA ? hA : zA, jA, C), jA = q.length;
          } else
            w === 0 && (X++, q = [0]);
          cA[t++] = X, q[0] ? q[jA++] = EA[XA] || 0 : (q = [EA[XA]], jA = 1);
        } while ((XA++ < iA || q[0] != null) && aA--);
        R = q[0] != null, cA[0] || cA.splice(0, 1);
      }
      if (C == RA) {
        for (t = 1, aA = cA[0]; aA >= 10; aA /= 10, t++)
          ;
        m(eA, d + (eA.e = t + S * $ - 1) + 1, B, R);
      } else
        eA.e = S, eA.r = +R;
      return eA;
    };
  }();
  function o(g, z, e, n) {
    var a, d, B, C, w;
    if (e == null ? e = x : nA(e, 0, 8), !g.c)
      return g.toString();
    if (a = g.c[0], B = g.e, z == null)
      w = ZA(g.c), w = n == 1 || n == 2 && (B <= i || B >= T) ? YM(w, B) : KA(w, B, "0");
    else if (g = m(new l(g), z, e), d = g.e, w = ZA(g.c), C = w.length, n == 1 || n == 2 && (z <= d || d <= i)) {
      for (; C < z; w += "0", C++)
        ;
      w = YM(w, d);
    } else if (z -= B, w = KA(w, d, "0"), d + 1 > C) {
      if (--z > 0)
        for (w += "."; z--; w += "0")
          ;
    } else if (z += d - C, z > 0)
      for (d + 1 == C && (w += "."); z--; w += "0")
        ;
    return g.s < 0 && a ? "-" + w : w;
  }
  function y(g, z) {
    for (var e, n = 1, a = new l(g[0]); n < g.length; n++)
      if (e = new l(g[n]), e.s)
        z.call(a, e) && (a = e);
      else {
        a = e;
        break;
      }
    return a;
  }
  function O(g, z, e) {
    for (var n = 1, a = z.length; !z[--a]; z.pop())
      ;
    for (a = z[0]; a >= 10; a /= 10, n++)
      ;
    return (e = n + e * $ - 1) > U ? g.c = g.e = null : e < Z ? g.c = [g.e = 0] : (g.e = e, g.c = z), g;
  }
  N = function() {
    var g = /^(-?)0([xbo])(?=\w[\w.]*$)/i, z = /^([^.]+)\.$/, e = /^\.([^.]+)$/, n = /^-?(Infinity|NaN)$/, a = /^\s*\+(?=[\w.])|^\s+|\s+$/g;
    return function(d, B, C, w) {
      var S, t = C ? B : B.replace(a, "");
      if (n.test(t))
        d.s = isNaN(t) ? null : t < 0 ? -1 : 1;
      else {
        if (!C && (t = t.replace(g, function(R, X, V) {
          return S = (V = V.toLowerCase()) == "x" ? 16 : V == "b" ? 2 : 8, !w || w == S ? X : R;
        }), w && (S = w, t = t.replace(z, "$1").replace(e, "0.$1")), B != t))
          return new l(t, S);
        if (l.DEBUG)
          throw Error(sA + "Not a" + (w ? " base " + w : "") + " number: " + B);
        d.s = null;
      }
      d.c = d.e = null;
    };
  }();
  function m(g, z, e, n) {
    var a, d, B, C, w, S, t, R = g.c, X = eI;
    if (R) {
      A: {
        for (a = 1, C = R[0]; C >= 10; C /= 10, a++)
          ;
        if (d = z - a, d < 0)
          d += $, B = z, w = R[S = 0], t = w / X[a - B - 1] % 10 | 0;
        else if (S = iI((d + 1) / $), S >= R.length)
          if (n) {
            for (; R.length <= S; R.push(0))
              ;
            w = t = 0, a = 1, d %= $, B = d - $ + 1;
          } else
            break A;
        else {
          for (w = C = R[S], a = 1; C >= 10; C /= 10, a++)
            ;
          d %= $, B = d - $ + a, t = B < 0 ? 0 : w / X[a - B - 1] % 10 | 0;
        }
        if (n = n || z < 0 || R[S + 1] != null || (B < 0 ? w : w % X[a - B - 1]), n = e < 4 ? (t || n) && (e == 0 || e == (g.s < 0 ? 3 : 2)) : t > 5 || t == 5 && (e == 4 || n || e == 6 && (d > 0 ? B > 0 ? w / X[a - B] : 0 : R[S - 1]) % 10 & 1 || e == (g.s < 0 ? 8 : 7)), z < 1 || !R[0])
          return R.length = 0, n ? (z -= g.e + 1, R[0] = X[($ - z % $) % $], g.e = -z || 0) : R[0] = g.e = 0, g;
        if (d == 0 ? (R.length = S, C = 1, S--) : (R.length = S + 1, C = X[$ - d], R[S] = B > 0 ? vA(w / X[a - B] % X[B]) * C : 0), n)
          for (; ; )
            if (S == 0) {
              for (d = 1, B = R[0]; B >= 10; B /= 10, d++)
                ;
              for (B = R[0] += C, C = 1; B >= 10; B /= 10, C++)
                ;
              d != C && (g.e++, R[0] == RA && (R[0] = 1));
              break;
            } else {
              if (R[S] += C, R[S] != RA)
                break;
              R[S--] = 0, C = 1;
            }
        for (d = R.length; R[--d] === 0; R.pop())
          ;
      }
      g.e > U ? g.c = g.e = null : g.e < Z && (g.c = [g.e = 0]);
    }
    return g;
  }
  function H(g) {
    var z, e = g.e;
    return e === null ? g.toString() : (z = ZA(g.c), z = e <= i || e >= T ? YM(z, e) : KA(z, e, "0"), g.s < 0 ? "-" + z : z);
  }
  return j.absoluteValue = j.abs = function() {
    var g = new l(this);
    return g.s < 0 && (g.s = 1), g;
  }, j.comparedTo = function(g, z) {
    return xM(this, new l(g, z));
  }, j.decimalPlaces = j.dp = function(g, z) {
    var e, n, a, d = this;
    if (g != null)
      return nA(g, 0, LA), z == null ? z = x : nA(z, 0, 8), m(new l(d), g + d.e + 1, z);
    if (!(e = d.c))
      return null;
    if (n = ((a = e.length - 1) - UA(this.e / $)) * $, a = e[a])
      for (; a % 10 == 0; a /= 10, n--)
        ;
    return n < 0 && (n = 0), n;
  }, j.dividedBy = j.div = function(g, z) {
    return M(this, new l(g, z), c, x);
  }, j.dividedToIntegerBy = j.idiv = function(g, z) {
    return M(this, new l(g, z), 0, 1);
  }, j.exponentiatedBy = j.pow = function(g, z) {
    var e, n, a, d, B, C, w, S, t, R = this;
    if (g = new l(g), g.c && !g.isInteger())
      throw Error(sA + "Exponent not an integer: " + H(g));
    if (z != null && (z = new l(z)), C = g.e > 14, !R.c || !R.c[0] || R.c[0] == 1 && !R.e && R.c.length == 1 || !g.c || !g.c[0])
      return t = new l(Math.pow(+H(R), C ? g.s * (2 - RM(g)) : +H(g))), z ? t.mod(z) : t;
    if (w = g.s < 0, z) {
      if (z.c ? !z.c[0] : !z.s)
        return new l(NaN);
      n = !w && R.isInteger() && z.isInteger(), n && (R = R.mod(z));
    } else {
      if (g.e > 9 && (R.e > 0 || R.e < -1 || (R.e == 0 ? R.c[0] > 1 || C && R.c[1] >= 24e7 : R.c[0] < 8e13 || C && R.c[0] <= 9999975e7)))
        return d = R.s < 0 && RM(g) ? -0 : 0, R.e > -1 && (d = 1 / d), new l(w ? 1 / d : d);
      p && (d = iI(p / $ + 2));
    }
    for (C ? (e = new l(0.5), w && (g.s = 1), S = RM(g)) : (a = Math.abs(+H(g)), S = a % 2), t = new l(D); ; ) {
      if (S) {
        if (t = t.times(R), !t.c)
          break;
        d ? t.c.length > d && (t.c.length = d) : n && (t = t.mod(z));
      }
      if (a) {
        if (a = vA(a / 2), a === 0)
          break;
        S = a % 2;
      } else if (g = g.times(e), m(g, g.e + 1, 1), g.e > 14)
        S = RM(g);
      else {
        if (a = +H(g), a === 0)
          break;
        S = a % 2;
      }
      R = R.times(R), d ? R.c && R.c.length > d && (R.c.length = d) : n && (R = R.mod(z));
    }
    return n ? t : (w && (t = D.div(t)), z ? t.mod(z) : d ? m(t, p, x, B) : t);
  }, j.integerValue = function(g) {
    var z = new l(this);
    return g == null ? g = x : nA(g, 0, 8), m(z, z.e + 1, g);
  }, j.isEqualTo = j.eq = function(g, z) {
    return xM(this, new l(g, z)) === 0;
  }, j.isFinite = function() {
    return !!this.c;
  }, j.isGreaterThan = j.gt = function(g, z) {
    return xM(this, new l(g, z)) > 0;
  }, j.isGreaterThanOrEqualTo = j.gte = function(g, z) {
    return (z = xM(this, new l(g, z))) === 1 || z === 0;
  }, j.isInteger = function() {
    return !!this.c && UA(this.e / $) > this.c.length - 2;
  }, j.isLessThan = j.lt = function(g, z) {
    return xM(this, new l(g, z)) < 0;
  }, j.isLessThanOrEqualTo = j.lte = function(g, z) {
    return (z = xM(this, new l(g, z))) === -1 || z === 0;
  }, j.isNaN = function() {
    return !this.s;
  }, j.isNegative = function() {
    return this.s < 0;
  }, j.isPositive = function() {
    return this.s > 0;
  }, j.isZero = function() {
    return !!this.c && this.c[0] == 0;
  }, j.minus = function(g, z) {
    var e, n, a, d, B = this, C = B.s;
    if (g = new l(g, z), z = g.s, !C || !z)
      return new l(NaN);
    if (C != z)
      return g.s = -z, B.plus(g);
    var w = B.e / $, S = g.e / $, t = B.c, R = g.c;
    if (!w || !S) {
      if (!t || !R)
        return t ? (g.s = -z, g) : new l(R ? B : NaN);
      if (!t[0] || !R[0])
        return R[0] ? (g.s = -z, g) : new l(t[0] ? B : x == 3 ? -0 : 0);
    }
    if (w = UA(w), S = UA(S), t = t.slice(), C = w - S) {
      for ((d = C < 0) ? (C = -C, a = t) : (S = w, a = R), a.reverse(), z = C; z--; a.push(0))
        ;
      a.reverse();
    } else
      for (n = (d = (C = t.length) < (z = R.length)) ? C : z, C = z = 0; z < n; z++)
        if (t[z] != R[z]) {
          d = t[z] < R[z];
          break;
        }
    if (d && (a = t, t = R, R = a, g.s = -g.s), z = (n = R.length) - (e = t.length), z > 0)
      for (; z--; t[e++] = 0)
        ;
    for (z = RA - 1; n > C; ) {
      if (t[--n] < R[n]) {
        for (e = n; e && !t[--e]; t[e] = z)
          ;
        --t[e], t[n] += RA;
      }
      t[n] -= R[n];
    }
    for (; t[0] == 0; t.splice(0, 1), --S)
      ;
    return t[0] ? O(g, t, S) : (g.s = x == 3 ? -1 : 1, g.c = [g.e = 0], g);
  }, j.modulo = j.mod = function(g, z) {
    var e, n, a = this;
    return g = new l(g, z), !a.c || !g.s || g.c && !g.c[0] ? new l(NaN) : !g.c || a.c && !a.c[0] ? new l(a) : (Q == 9 ? (n = g.s, g.s = 1, e = M(a, g, 0, 3), g.s = n, e.s *= n) : e = M(a, g, 0, Q), g = a.minus(e.times(g)), !g.c[0] && Q == 1 && (g.s = a.s), g);
  }, j.multipliedBy = j.times = function(g, z) {
    var e, n, a, d, B, C, w, S, t, R, X, V, _, eA, cA, q = this, jA = q.c, wA = (g = new l(g, z)).c;
    if (!jA || !wA || !jA[0] || !wA[0])
      return !q.s || !g.s || jA && !jA[0] && !wA || wA && !wA[0] && !jA ? g.c = g.e = g.s = null : (g.s *= q.s, !jA || !wA ? g.c = g.e = null : (g.c = [0], g.e = 0)), g;
    for (n = UA(q.e / $) + UA(g.e / $), g.s *= q.s, w = jA.length, R = wA.length, w < R && (_ = jA, jA = wA, wA = _, a = w, w = R, R = a), a = w + R, _ = []; a--; _.push(0))
      ;
    for (eA = RA, cA = IM, a = R; --a >= 0; ) {
      for (e = 0, X = wA[a] % cA, V = wA[a] / cA | 0, B = w, d = a + B; d > a; )
        S = jA[--B] % cA, t = jA[B] / cA | 0, C = V * S + t * X, S = X * S + C % cA * cA + _[d] + e, e = (S / eA | 0) + (C / cA | 0) + V * t, _[d--] = S % eA;
      _[d] = e;
    }
    return e ? ++n : _.splice(0, 1), O(g, _, n);
  }, j.negated = function() {
    var g = new l(this);
    return g.s = -g.s || null, g;
  }, j.plus = function(g, z) {
    var e, n = this, a = n.s;
    if (g = new l(g, z), z = g.s, !a || !z)
      return new l(NaN);
    if (a != z)
      return g.s = -z, n.minus(g);
    var d = n.e / $, B = g.e / $, C = n.c, w = g.c;
    if (!d || !B) {
      if (!C || !w)
        return new l(a / 0);
      if (!C[0] || !w[0])
        return w[0] ? g : new l(C[0] ? n : a * 0);
    }
    if (d = UA(d), B = UA(B), C = C.slice(), a = d - B) {
      for (a > 0 ? (B = d, e = w) : (a = -a, e = C), e.reverse(); a--; e.push(0))
        ;
      e.reverse();
    }
    for (a = C.length, z = w.length, a - z < 0 && (e = w, w = C, C = e, z = a), a = 0; z; )
      a = (C[--z] = C[z] + w[z] + a) / RA | 0, C[z] = RA === C[z] ? 0 : C[z] % RA;
    return a && (C = [a].concat(C), ++B), O(g, C, B);
  }, j.precision = j.sd = function(g, z) {
    var e, n, a, d = this;
    if (g != null && g !== !!g)
      return nA(g, 1, LA), z == null ? z = x : nA(z, 0, 8), m(new l(d), g, z);
    if (!(e = d.c))
      return null;
    if (a = e.length - 1, n = a * $ + 1, a = e[a]) {
      for (; a % 10 == 0; a /= 10, n--)
        ;
      for (a = e[0]; a >= 10; a /= 10, n++)
        ;
    }
    return g && d.e + 1 > n && (n = d.e + 1), n;
  }, j.shiftedBy = function(g) {
    return nA(g, -zI, zI), this.times("1e" + g);
  }, j.squareRoot = j.sqrt = function() {
    var g, z, e, n, a, d = this, B = d.c, C = d.s, w = d.e, S = c + 4, t = new l("0.5");
    if (C !== 1 || !B || !B[0])
      return new l(!C || C < 0 && (!B || B[0]) ? NaN : B ? d : 1 / 0);
    if (C = Math.sqrt(+H(d)), C == 0 || C == 1 / 0 ? (z = ZA(B), (z.length + w) % 2 == 0 && (z += "0"), C = Math.sqrt(+z), w = UA((w + 1) / 2) - (w < 0 || w % 2), C == 1 / 0 ? z = "5e" + w : (z = C.toExponential(), z = z.slice(0, z.indexOf("e") + 1) + w), e = new l(z)) : e = new l(C + ""), e.c[0]) {
      for (w = e.e, C = w + S, C < 3 && (C = 0); ; )
        if (a = e, e = t.times(a.plus(M(d, a, S, 1))), ZA(a.c).slice(0, C) === (z = ZA(e.c)).slice(0, C))
          if (e.e < w && --C, z = z.slice(C - 3, C + 1), z == "9999" || !n && z == "4999") {
            if (!n && (m(a, a.e + c + 2, 0), a.times(a).eq(d))) {
              e = a;
              break;
            }
            S += 4, C += 4, n = 1;
          } else {
            (!+z || !+z.slice(1) && z.charAt(0) == "5") && (m(e, e.e + c + 2, 1), g = !e.times(e).eq(d));
            break;
          }
    }
    return m(e, e.e + c + 1, x, g);
  }, j.toExponential = function(g, z) {
    return g != null && (nA(g, 0, LA), g++), o(this, g, z, 1);
  }, j.toFixed = function(g, z) {
    return g != null && (nA(g, 0, LA), g = g + this.e + 1), o(this, g, z);
  }, j.toFormat = function(g, z, e) {
    var n, a = this;
    if (e == null)
      g != null && z && typeof z == "object" ? (e = z, z = null) : g && typeof g == "object" ? (e = g, g = z = null) : e = E;
    else if (typeof e != "object")
      throw Error(sA + "Argument not an object: " + e);
    if (n = a.toFixed(g, z), a.c) {
      var d, B = n.split("."), C = +e.groupSize, w = +e.secondaryGroupSize, S = e.groupSeparator || "", t = B[0], R = B[1], X = a.s < 0, V = X ? t.slice(1) : t, _ = V.length;
      if (w && (d = C, C = w, w = d, _ -= d), C > 0 && _ > 0) {
        for (d = _ % C || C, t = V.substr(0, d); d < _; d += C)
          t += S + V.substr(d, C);
        w > 0 && (t += S + V.slice(d)), X && (t = "-" + t);
      }
      n = R ? t + (e.decimalSeparator || "") + ((w = +e.fractionGroupSize) ? R.replace(
        new RegExp("\\d{" + w + "}\\B", "g"),
        "$&" + (e.fractionGroupSeparator || "")
      ) : R) : t;
    }
    return (e.prefix || "") + n + (e.suffix || "");
  }, j.toFraction = function(g) {
    var z, e, n, a, d, B, C, w, S, t, R, X, V = this, _ = V.c;
    if (g != null && (C = new l(g), !C.isInteger() && (C.c || C.s !== 1) || C.lt(D)))
      throw Error(sA + "Argument " + (C.isInteger() ? "out of range: " : "not an integer: ") + H(C));
    if (!_)
      return new l(V);
    for (z = new l(D), S = e = new l(D), n = w = new l(D), X = ZA(_), d = z.e = X.length - V.e - 1, z.c[0] = eI[(B = d % $) < 0 ? $ + B : B], g = !g || C.comparedTo(z) > 0 ? d > 0 ? z : S : C, B = U, U = 1 / 0, C = new l(X), w.c[0] = 0; t = M(C, z, 0, 1), a = e.plus(t.times(n)), a.comparedTo(g) != 1; )
      e = n, n = a, S = w.plus(t.times(a = S)), w = a, z = C.minus(t.times(a = z)), C = a;
    return a = M(g.minus(e), n, 0, 1), w = w.plus(a.times(S)), e = e.plus(a.times(n)), w.s = S.s = V.s, d = d * 2, R = M(S, n, d, x).minus(V).abs().comparedTo(
      M(w, e, d, x).minus(V).abs()
    ) < 1 ? [S, n] : [w, e], U = B, R;
  }, j.toNumber = function() {
    return +H(this);
  }, j.toPrecision = function(g, z) {
    return g != null && nA(g, 1, LA), o(this, g, z, 2);
  }, j.toString = function(g) {
    var z, e = this, n = e.s, a = e.e;
    return a === null ? n ? (z = "Infinity", n < 0 && (z = "-" + z)) : z = "NaN" : (g == null ? z = a <= i || a >= T ? YM(ZA(e.c), a) : KA(ZA(e.c), a, "0") : g === 10 && b ? (e = m(new l(e), c + a + 1, x), z = KA(ZA(e.c), e.e, "0")) : (nA(g, 2, r.length, "Base"), z = I(KA(ZA(e.c), a, "0"), 10, g, n, !0)), n < 0 && e.c[0] && (z = "-" + z)), z;
  }, j.valueOf = j.toJSON = function() {
    return H(this);
  }, j._isBigNumber = !0, j[Symbol.toStringTag] = "BigNumber", j[Symbol.for("nodejs.util.inspect.custom")] = j.valueOf, A != null && l.set(A), l;
}
function UA(A) {
  var M = A | 0;
  return A > 0 || A === M ? M : M - 1;
}
function ZA(A) {
  for (var M, I, N = 1, j = A.length, D = A[0] + ""; N < j; ) {
    for (M = A[N++] + "", I = $ - M.length; I--; M = "0" + M)
      ;
    D += M;
  }
  for (j = D.length; D.charCodeAt(--j) === 48; )
    ;
  return D.slice(0, j + 1 || 1);
}
function xM(A, M) {
  var I, N, j = A.c, D = M.c, c = A.s, x = M.s, i = A.e, T = M.e;
  if (!c || !x)
    return null;
  if (I = j && !j[0], N = D && !D[0], I || N)
    return I ? N ? 0 : -x : c;
  if (c != x)
    return c;
  if (I = c < 0, N = i == T, !j || !D)
    return N ? 0 : !j ^ I ? 1 : -1;
  if (!N)
    return i > T ^ I ? 1 : -1;
  for (x = (i = j.length) < (T = D.length) ? i : T, c = 0; c < x; c++)
    if (j[c] != D[c])
      return j[c] > D[c] ^ I ? 1 : -1;
  return i == T ? 0 : i > T ^ I ? 1 : -1;
}
function nA(A, M, I, N) {
  if (A < M || A > I || A !== vA(A))
    throw Error(sA + (N || "Argument") + (typeof A == "number" ? A < M || A > I ? " out of range: " : " not an integer: " : " not a primitive number: ") + String(A));
}
function RM(A) {
  var M = A.c.length - 1;
  return UA(A.e / $) == M && A.c[M] % 2 != 0;
}
function YM(A, M) {
  return (A.length > 1 ? A.charAt(0) + "." + A.slice(1) : A) + (M < 0 ? "e" : "e+") + M;
}
function KA(A, M, I) {
  var N, j;
  if (M < 0) {
    for (j = I + "."; ++M; j += I)
      ;
    A = j + A;
  } else if (N = A.length, ++M > N) {
    for (j = I, M -= N; --M; j += I)
      ;
    A += j;
  } else
    M < N && (A = A.slice(0, M) + "." + A.slice(M));
  return A;
}
var HM = xj(), uj = /* @__PURE__ */ ((A) => (A.AED = "\u062F.\u0625", A.ARS = "$", A.AUD = "$", A.AWG = "\u0192", A.BDT = "\u09F3", A.BHD = ".\u062F.\u0628", A.BMD = "$", A.BRL = "R$", A.CAD = "$", A.CHF = "CHF", A.CLP = "$", A.CZK = "K\u010D", A.DJF = "Fdj", A.DKK = "kr", A.EUR = "\u20AC", A.GBP = "\xA3", A.HKD = "$", A.HUF = "Ft", A.IDR = "Rp", A.ILS = "\u20AA", A.INR = "\u20B9", A.JPY = "\xA5", A.KRW = "\u20A9", A.KWD = "KD", A.LKR = "\u20A8", A.MMK = "K", A.MXN = "$", A.MYR = "RM", A.NGN = "\u20A6", A.NOK = "kr", A.NZD = "$", A.PHP = "\u20B1", A.PKR = "\u20A8", A.PLN = "z\u0142", A.RUB = "\u20BD", A.SAR = "\uFDFC", A.SEK = "kr", A.SGD = "S$", A.THB = "\u0E3F", A.TRY = "\u20BA", A.TWD = "NT$", A.UAH = "\u20B4", A.USD = "$", A.VEF = "Bs", A.VND = "\u20AB", A.XAG = "XAG", A.XAU = "XAU", A.XDR = "XDR", A.ZAR = "R", A))(uj || {});
class k {
  constructor(M) {
    WI(this, "value");
    this.value = M === "" ? void 0 : new HM(M);
  }
  static zero() {
    return new k("0");
  }
  static empty() {
    return new k("");
  }
  plus(M) {
    return M instanceof k ? this.plus(M.value || "") : M === "" ? this : this.value === void 0 ? new k(M) : new k(this.value.plus(M));
  }
  minus(M) {
    return M instanceof k ? this.minus(M.value || "") : M === "" ? this : this.value === void 0 ? new k(M) : new k(this.value.minus(M));
  }
  times(M) {
    return M instanceof k ? this.times(M.value || "") : M === "" || this.value === void 0 ? k.empty() : new k(this.value.times(M));
  }
  div(M) {
    return M instanceof k ? this.div(M.value || "") : M === "" || this.value === void 0 || new HM(M).isZero() ? k.empty() : new k(this.value.div(M));
  }
  divideByDecimals(M) {
    return this.value === void 0 ? k.empty() : new k(this.value.dividedBy(10 ** M));
  }
  multiplyByDecimals(M) {
    return this.value === void 0 ? k.empty() : new k(this.value.multipliedBy(10 ** M));
  }
  gt(M) {
    return this.value === void 0 ? !1 : M instanceof k ? this.gt(M.value || "") : M === "" ? !1 : this.value.gt(M);
  }
  gte(M) {
    return this.gt(M) || this.eq(M);
  }
  lt(M) {
    return M === "" ? !1 : M instanceof k ? this.lt(M.value || "") : this.value === void 0 ? !1 : this.value.lt(M);
  }
  lte(M) {
    return this.lt(M) || this.eq(M);
  }
  eq(M) {
    return M instanceof k ? this.eq(M.value || "") : this.value === void 0 && M === "" ? !0 : this.value !== void 0 && M !== "" ? this.value.eq(M) : !1;
  }
  static normalize(M) {
    if (M === "")
      return "";
    const I = new k(M);
    return I.value !== void 0 && I.value.isNaN() ? "" : I.isZero() ? "0" : I.format();
  }
  static formatAmountWithCommas(M, I) {
    const N = M.replace(/\.0*$|(\.\d*[1-9])0+$/, "$1");
    return I ? N.replace(new RegExp("\\B(?<!\\.\\d*)(?=(\\d{3})+(?!\\d))", "g"), ",") : N;
  }
  format(M, I = !1) {
    if (this.value === void 0 || this.value.isNaN())
      return "";
    if (M === void 0)
      return k.formatAmountWithCommas(this.value.toFixed(), I);
    const N = 2;
    return this.value.isGreaterThanOrEqualTo(10 ** (M - N)) ? k.formatAmountWithCommas(this.value.toFixed(N), I) : k.formatAmountWithCommas(this.value.precision(M).toFixed(), I);
  }
  formatAsAsset(M, I) {
    const N = this.format(M, !0);
    return I ? N === "" ? "" : `${N} ${I}` : N;
  }
  formatAsFiat(M) {
    let I, N;
    if (this.value === void 0 || this.value.isNaN())
      return "";
    this.value.decimalPlaces() < 2 || this.value.isGreaterThanOrEqualTo(10) ? (I = 2, N = this.value.toNumber()) : this.value.isGreaterThanOrEqualTo(1) ? (I = 3, N = this.value.toNumber()) : N = new HM(this.format(4)).toNumber();
    const j = {
      style: "decimal",
      minimumFractionDigits: I || 0,
      maximumFractionDigits: I || 20
    };
    return M && uj[M] && (j.style = "currency", j.currency = M, j.currencyDisplay = "narrowSymbol"), Intl.NumberFormat(navigator.language, j).format(N);
  }
  toHex() {
    return this.value === void 0 ? "" : this.value.isNaN() ? "0x0" : `0x${this.value.toString(16)}`;
  }
  toNumber() {
    return this.value === void 0 || this.value.isNaN() ? 0 : this.value.toNumber();
  }
  isUndefined() {
    return this.value === void 0;
  }
  isNaN() {
    return this.value !== void 0 && this.value.isNaN();
  }
  isZero() {
    return this.value !== void 0 && this.value.isZero();
  }
  isPositive() {
    return this.value !== void 0 && this.value.isPositive();
  }
  isNegative() {
    return this.value !== void 0 && this.value.isNegative();
  }
  parseInteger() {
    return this.value === void 0 ? k.empty() : new k(this.value.integerValue(HM.ROUND_DOWN));
  }
  abbreviate(M, I, N) {
    const j = {
      trillion: Math.pow(10, 12),
      billion: Math.pow(10, 9),
      million: Math.pow(10, 6),
      thousand: Math.pow(10, 3)
    }, D = {
      thousand: "k",
      million: "M",
      billion: "B",
      trillion: "T"
    };
    if (this.value === void 0)
      return "";
    const c = Intl.NumberFormat(navigator.language, {
      style: I ? "currency" : "decimal",
      currency: I,
      currencyDisplay: "narrowSymbol",
      minimumFractionDigits: M,
      maximumFractionDigits: M
    }), x = this.value.absoluteValue().toNumber();
    let i = this.value.toNumber(), T = "";
    return N && D[N] && j[N] ? (T = D[N], i = i / j[N], c.format(i) + T) : (x >= j.trillion || Math.round(x / j.trillion) === 1 ? (T = D.trillion, i = i / j.trillion) : x < j.trillion && x >= j.billion ? (T = D.billion, i = i / j.billion) : x < j.billion && x >= j.million ? (T = D.million, i = i / j.million) : x < j.million && x >= j.thousand && (T = D.thousand, i = i / j.thousand), c.format(i) + T);
  }
}
const nN = new k("0.000005");
function ZD(A) {
  const [M, I] = G.useState(void 0), [N, j] = G.useState(void 0), [D, c] = G.useState(!1), [x, i] = G.useState(void 0), [T, Z] = G.useState(void 0), [U, L] = G.useState(
    void 0
  ), { swapService: Q, solWalletAdapter: p, account: E, network: r, defaultBaseCurrency: b } = TA(), {
    state: { spotPrices: l }
  } = TM(), o = G.useCallback(
    async (H) => {
      I(void 0), j(void 0), c(!1), i(void 0), Z(void 0), U && U.abort(), H && await H();
    },
    [U]
  ), y = G.useCallback(
    async function(H = {}) {
      const g = {
        ...A,
        ...H
      };
      if (r.coin !== uA.Solana || !g.fromToken || !g.toToken)
        return;
      if (!g.fromAmount && !g.toAmount) {
        await o();
        return;
      }
      const z = new k(g.fromAmount), e = new k(g.toAmount), n = z.isZero() || z.isNaN() || z.isUndefined(), a = e.isZero() || e.isNaN() || e.isUndefined();
      if (n && a) {
        await o();
        return;
      }
      if (!g.fromAddress)
        return;
      const d = new AbortController();
      L(d), c(!0);
      try {
        const C = await Q.getBraveFeeForAsset(g.toToken);
        Z(C);
      } catch {
        console.log(`Error getting Brave fee (Jupiter): ${g.toToken.symbol}`);
      }
      let B;
      try {
        B = await Q.getJupiterQuote({
          inputMint: g.fromToken.contractAddress || gI,
          outputMint: g.toToken.contractAddress || gI,
          amount: n ? new k(g.toAmount).multiplyByDecimals(g.toToken.decimals).format() : new k(g.fromAmount).multiplyByDecimals(g.fromToken.decimals).format(),
          slippageBps: new k(g.slippageTolerance).times(100).parseInteger().toNumber(),
          userPublicKey: g.fromAddress
        });
      } catch (C) {
        console.log(`Error getting Jupiter quote: ${C}`);
      }
      if (d.signal.aborted) {
        c(!1), L(void 0);
        return;
      }
      return B != null && B.response && I(B.response), B != null && B.errorResponse && j(B.errorResponse), c(!1), L(void 0), B == null ? void 0 : B.response;
    },
    [r.coin, A, o, Q]
  ), O = G.useCallback(
    async function(H) {
      if (!M || (M == null ? void 0 : M.routes.length) === 0 || r.coin !== uA.Solana || !A.toToken || !E)
        return;
      c(!0);
      let g;
      try {
        g = await Q.getJupiterTransactionsPayload({
          userPublicKey: E.address,
          route: x || M.routes[0],
          outputMint: A.toToken.contractAddress || gI
        });
      } catch (e) {
        console.log(`Error getting Jupiter swap transactions: ${e}`);
      }
      if (g != null && g.errorResponse && j(g.errorResponse), !(g != null && g.response)) {
        c(!1);
        return;
      }
      const { swapTransaction: z } = g.response;
      try {
        await p.sendTransaction({
          encodedTransaction: z,
          from: E.address,
          sendOptions: {
            skipPreflight: !0,
            maxRetries: 2
          }
        }), await o(H);
      } catch (e) {
        console.error(`Error creating Solana transaction: ${e}`), c(!1);
      }
    },
    [
      M,
      r.coin,
      A.toToken,
      E,
      Q,
      x,
      p,
      o
    ]
  ), m = G.useMemo(() => !A.fromToken || !A.toToken ? [] : M === void 0 ? [] : M.routes.map(
    (H) => ({
      label: H.marketInfos.map((g) => g.label).join(" x "),
      fromAmount: new k(H.inAmount.toString()).divideByDecimals(
        A.fromToken.decimals
      ),
      toAmount: new k(H.outAmount.toString()).divideByDecimals(
        A.toToken.decimals
      ),
      minimumToAmount: new k(H.otherAmountThreshold.toString()).divideByDecimals(
        A.toToken.decimals
      ),
      fromToken: A.fromToken,
      toToken: A.toToken,
      rate: new k(H.outAmount.toString()).divideByDecimals(A.toToken.decimals).div(new k(H.inAmount.toString()).divideByDecimals(A.fromToken.decimals)),
      impact: new k(H.priceImpactPct),
      sources: H.marketInfos.flatMap(
        (g) => g.label.split("+").map((z) => {
          const e = z.match(/(.*)\s+\((\d+)%\)/);
          return e && e.length === 3 ? {
            name: e[1].trim(),
            proportion: new k(e[2]).div(100)
          } : {
            name: z.trim(),
            proportion: new k(1)
          };
        })
      ),
      routing: H.marketInfos.length > 1 ? "flow" : "split",
      networkFee: nN.times(l.nativeAsset).formatAsFiat(b),
      braveFee: T
    })
  ), [
    M,
    A.fromToken,
    A.toToken,
    b,
    l.nativeAsset,
    T
  ]);
  return {
    quote: M,
    error: N,
    loading: D,
    exchange: O,
    refresh: y,
    reset: o,
    selectedRoute: x,
    setSelectedRoute: i,
    quoteOptions: m,
    networkFee: nN
  };
}
const UD = (A) => {
  if (!A)
    return [];
  const M = A.startsWith("0x") ? A.slice(2) : A, I = [];
  for (let N = 0; N < M.length; N += 2)
    I.push(parseInt(M.substr(N, 2), 16));
  return I;
};
function rD(A) {
  const [M, I] = G.useState(void 0), [N, j] = G.useState(void 0), [D, c] = G.useState(!1), [x, i] = G.useState(!1), [T, Z] = G.useState(void 0), [U, L] = G.useState(
    void 0
  ), { swapService: Q, ethWalletAdapter: p, account: E, network: r, defaultBaseCurrency: b } = TA(), {
    state: { spotPrices: l }
  } = TM(), o = G.useCallback(
    async (z) => {
      I(void 0), j(void 0), i(!1), Z(void 0), U && U.abort(), z && await z();
    },
    [U]
  ), y = G.useCallback(
    async function(z = {}) {
      const e = {
        ...A,
        ...z
      };
      if (r.coin !== uA.Ethereum || !e.fromToken || !e.toToken)
        return;
      if (!e.fromAmount && !e.toAmount) {
        await o();
        return;
      }
      const n = new k(e.fromAmount), a = new k(e.toAmount), d = n.isZero() || n.isNaN() || n.isUndefined(), B = a.isZero() || a.isNaN() || a.isUndefined();
      if (d && B) {
        await o();
        return;
      }
      if (!e.fromAddress)
        return;
      const C = new AbortController();
      L(C), i(!0);
      try {
        const t = await Q.getBraveFeeForAsset(e.toToken);
        Z(t);
      } catch {
        console.log(`Error getting Brave fee (Jupiter): ${e.toToken.symbol}`);
      }
      let w;
      try {
        w = await Q.getZeroExPriceQuote({
          takerAddress: e.fromAddress,
          sellAmount: e.fromAmount && new k(e.fromAmount).multiplyByDecimals(e.fromToken.decimals).format(),
          sellToken: e.fromToken.contractAddress || OM,
          buyAmount: e.toAmount && new k(e.toAmount).multiplyByDecimals(e.toToken.decimals).format(),
          buyToken: e.toToken.contractAddress || OM,
          slippagePercentage: new k(e.slippageTolerance).div(100).toNumber(),
          gasPrice: ""
        });
      } catch (t) {
        console.log(`Error getting 0x quote: ${t}`);
      }
      let S = !1;
      if (e.fromToken.isToken || (S = !0), E || (S = !0), E && (w == null ? void 0 : w.response) && e.fromToken.isToken)
        try {
          const t = await p.getERC20Allowance(
            w.response.sellTokenAddress,
            E.address,
            w.response.allowanceTarget
          );
          S = new k(t).gte(w.response.sellAmount);
        } catch (t) {
          console.log(`Error getting ERC20 allowance: ${t}`);
        }
      if (C.signal.aborted) {
        i(!1), L(void 0);
        return;
      }
      return w != null && w.response && I(w.response), w != null && w.errorResponse && j(w.errorResponse), c(S), i(!1), L(void 0), w == null ? void 0 : w.response;
    },
    [A, r.coin, E, o, Q, p]
  ), O = G.useCallback(
    async function(z = {}, e) {
      const n = {
        ...A,
        ...z
      };
      if (r.coin !== uA.Ethereum || !E || !n.fromToken || !n.toToken || !n.fromAmount && !n.toAmount)
        return;
      const a = new k(n.fromAmount), d = new k(n.toAmount), B = a.isZero() || a.isNaN() || a.isUndefined(), C = d.isZero() || d.isNaN() || d.isUndefined();
      if (B && C || !n.fromAddress)
        return;
      i(!0);
      let w;
      try {
        w = await Q.getZeroExTransactionPayload({
          takerAddress: n.fromAddress,
          sellAmount: new k(n.fromAmount).multiplyByDecimals(n.fromToken.decimals).format(),
          sellToken: n.fromToken.contractAddress || OM,
          buyAmount: new k(n.toAmount).multiplyByDecimals(n.toToken.decimals).format(),
          buyToken: n.toToken.contractAddress || OM,
          slippagePercentage: new k(n.slippageTolerance).div(100).toNumber(),
          gasPrice: ""
        });
      } catch (V) {
        console.log(`Error getting 0x swap quote: ${V}`);
      }
      if (w != null && w.errorResponse && j(w == null ? void 0 : w.errorResponse), !(w != null && w.response)) {
        i(!1);
        return;
      }
      const { data: S, to: t, value: R, estimatedGas: X } = w.response;
      try {
        await p.sendTransaction({
          from: E.address,
          to: t,
          value: new k(R).toHex(),
          gas: new k(X).toHex(),
          data: UD(S)
        }), await o(e);
      } catch (V) {
        console.error(`Error creating 0x transaction: ${V}`), i(!1);
      }
    },
    [A, r.coin, E, Q, p, o]
  ), m = G.useCallback(async () => {
    if (!M || D || !E)
      return;
    const { allowanceTarget: z, sellTokenAddress: e } = M;
    try {
      const n = await p.getERC20ApproveData({
        contractAddress: e,
        spenderAddress: z,
        allowance: new k(Qj).toHex()
      });
      await p.sendTransaction({
        from: E.address,
        to: e,
        value: "0x0",
        data: n
      });
    } catch (n) {
      console.error(`Error creating ERC20 approve transaction: ${n}`);
    }
  }, [M, D, E, p]), H = G.useMemo(() => M ? new k(M.gasPrice).times(M.gas).divideByDecimals(r.decimals) : k.empty(), [M, r.decimals]), g = G.useMemo(() => !A.fromToken || !A.toToken ? [] : M === void 0 ? [] : [
    {
      label: "",
      fromAmount: new k(M.sellAmount).divideByDecimals(A.fromToken.decimals),
      toAmount: new k(M.buyAmount).divideByDecimals(A.toToken.decimals),
      minimumToAmount: void 0,
      fromToken: A.fromToken,
      toToken: A.toToken,
      rate: new k(M.buyAmount).divideByDecimals(A.toToken.decimals).div(new k(M.sellAmount).divideByDecimals(A.fromToken.decimals)),
      impact: new k(M.estimatedPriceImpact),
      sources: M.sources.map((z) => ({
        name: z.name,
        proportion: new k(z.proportion)
      })).filter((z) => z.proportion.gt(0)),
      routing: "split",
      networkFee: H.isUndefined() ? "" : H.times(l.nativeAsset).formatAsFiat(b),
      braveFee: T
    }
  ], [
    A.fromToken,
    A.toToken,
    M,
    b,
    H,
    l.nativeAsset,
    T
  ]);
  return {
    quote: M,
    error: N,
    hasAllowance: D,
    loading: x,
    exchange: O,
    refresh: y,
    reset: o,
    approve: m,
    quoteOptions: g,
    networkFee: H
  };
}
const vM = (A) => ({
  contractAddress: "",
  name: A.symbolName,
  symbol: A.symbol,
  logo: A.logo,
  isToken: !1,
  decimals: A.decimals,
  visible: !0,
  coingeckoId: "",
  chainId: A.chainId,
  coin: A.coin
}), TN = (A) => `${A.coin}-${A.chainId}-${A.contractAddress.toLowerCase()}`, OD = (A, M, I) => `${A}-${M}-${I.toLowerCase()}`, RD = () => {
  const { network: A } = TA();
  return G.useMemo(
    () => vM(A),
    [
      A.chainId,
      A.coin,
      A.symbol,
      A.symbolName,
      A.logo,
      A.decimals
    ]
  );
};
function mM(A, M) {
  const I = VI(), N = VI(), j = XI(() => {
    N.current && clearTimeout(N.current);
  }, [N]);
  return Sj(() => j, [j]), XI(
    async function(...c) {
      I.current = c, j(), N.current = setTimeout(async () => {
        I.current && await A(...I.current);
      }, M);
    },
    [I, N, j, A, M]
  );
}
const aN = (A, M) => {
  if (!M)
    return !1;
  const I = new k(A).multiplyByDecimals(M.decimals);
  if (!I.value)
    return !1;
  const N = I.value.decimalPlaces();
  return N !== null && N > 0;
}, YD = () => {
  const {
    state: { tokenBalances: A, spotPrices: M }
  } = TM(), {
    getLocale: I,
    getTokenPrice: N,
    getTokenBalance: j,
    getTokenBalances: D,
    getBalance: c,
    assetsList: x,
    network: i,
    account: T,
    defaultBaseCurrency: Z,
    walletAccounts: U
  } = TA(), { dispatch: L } = ej(), [Q, p] = G.useState(void 0), [E, r] = G.useState(void 0), [b, l] = G.useState(""), [o, y] = G.useState(""), [O, m] = G.useState(
    void 0
  ), [H, g] = G.useState(0), [z, e] = G.useState(
    yD[0].name
  ), [n, a] = G.useState(!1), [d, B] = G.useState(""), [C, w] = G.useState(!1), [S, t] = G.useState(T), [R, X] = G.useState(!1), [V, _] = G.useState("0.5"), [eA, cA] = G.useState(
    cj[1]
  ), [q, jA] = G.useState(!1), wA = RD(), XA = G.useCallback(() => {
    p(wA), r(void 0), l(""), y("");
  }, [wA]);
  G.useEffect(XA, [XA]);
  const iA = ZD({
    fromToken: Q,
    toToken: E,
    fromAmount: b,
    toAmount: "",
    slippageTolerance: V,
    fromAddress: T == null ? void 0 : T.address
  }), xA = rD({
    fromAmount: b,
    toAmount: "",
    fromToken: Q,
    toToken: E,
    slippageTolerance: V,
    fromAddress: T == null ? void 0 : T.address
  }), tA = G.useMemo(() => i.coin === uA.Solana ? iA.quoteOptions : xA.quoteOptions, [i.coin, iA.quoteOptions, xA.quoteOptions]), hA = G.useCallback(
    (W) => {
      const F = tA[W];
      if (i.coin === uA.Solana) {
        if (iA.quote && iA.quote.routes.length > W && E) {
          const IA = iA.quote.routes[W];
          iA.setSelectedRoute(IA), y(F.toAmount.format(6));
        }
      } else
        i.coin === uA.Ethereum && xA.quote && E && y(F.toAmount.format(6));
      g(W);
    },
    [tA, i.coin, iA, E, xA.quote]
  ), aA = G.useCallback(
    async (W) => {
      var ZM;
      const F = {
        nativeAsset: vM(i),
        fromAsset: Q,
        toAsset: E,
        ...W
      }, IA = F.fromAsset && await N(F.fromAsset), pA = F.toAsset && await N(F.toAsset), JA = (ZM = F.fromAsset) != null && ZM.isToken ? await N(F.nativeAsset) : IA;
      await L({
        type: "updateSpotPrices",
        payload: {
          nativeAsset: k.normalize(JA || ""),
          makerAsset: k.normalize(IA || ""),
          takerAsset: k.normalize(pA || "")
        }
      });
    },
    [i, Q, E, N, L]
  ), EA = mM(
    async (W) => {
      await aA(W);
    },
    0
  ), zA = G.useCallback(
    (W) => [vM(W), ...x].filter(
      (IA) => IA.coin === W.coin && IA.chainId === W.chainId
    ),
    [x]
  ), PA = G.useCallback(
    (W, F) => async (IA) => {
      const pA = TN(IA);
      try {
        const JA = IA.isToken ? await j(
          IA.contractAddress,
          W.address,
          W.coin,
          IA.chainId
        ) : await c(W.address, F.coin, F.chainId);
        return {
          key: pA,
          value: k.normalize(JA)
        };
      } catch (JA) {
        return console.log(`Error querying balance: error=${JA} asset=`, JSON.stringify(IA)), {
          key: pA,
          value: ""
        };
      }
    },
    [c, j]
  ), iM = G.useCallback(
    async (W) => {
      var pI;
      let F = {
        network: i,
        account: T,
        ...W
      };
      if (((pI = F.account) == null ? void 0 : pI.coin) !== F.network.coin && (F = {
        ...F,
        account: U.find((SA) => SA.coin === F.network.coin) || F.account
      }), !F.account)
        return;
      const IA = PA(
        F.account,
        F.network
      ), pA = await IA(
        vM(F.network)
      );
      L({
        type: "updateTokenBalances",
        payload: {
          [pA.key]: pA.value
        }
      });
      const JA = zA(F.network).filter(
        (SA) => SA.isToken
      );
      try {
        const SA = await D(
          JA.filter((AM) => AM.isToken).map((AM) => AM.contractAddress),
          F.account.address,
          F.account.coin,
          F.network.chainId
        ), UM = Object.entries(SA).map(([AM, MM]) => [
          OD(
            F.network.coin,
            F.network.chainId,
            AM
          ),
          MM
        ]).filter(([AM, MM]) => new k(MM).isPositive());
        L({
          type: "updateTokenBalances",
          payload: Object.fromEntries(UM)
        });
        return;
      } catch (SA) {
        console.log(`Error calling getTokenBalances(): error=${SA}`);
      }
      async function ZM(SA) {
        const AM = (await dD.mapLimit(SA, 10, IA)).filter((MM) => new k(MM.value).isPositive()).reduce((MM, vI) => (MM[vI.key] = vI.value, MM), {});
        L({
          type: "updateTokenBalances",
          payload: AM
        });
      }
      const kI = 10;
      for (let SA = 0; SA < JA.length; SA += kI) {
        const UM = JA.slice(SA, SA + kI);
        await ZM(UM);
      }
    },
    [
      i,
      T,
      zA,
      PA,
      U,
      D,
      L
    ]
  ), aM = mM(
    async (W) => {
      await iM(W);
    },
    0
  );
  G.useEffect(() => {
    (async () => x.length !== 0 && (q || (await aM({}), await EA({}), jA(!0))))();
  }, [aM, EA, q, x]);
  const EM = G.useCallback(
    async (W) => {
      const F = await iA.refresh(W);
      if (!!F) {
        if (W.fromAmount === "") {
          const IA = W.fromToken || Q;
          IA && F.routes.length > 0 && l(
            new k(F.routes[0].inAmount.toString()).divideByDecimals(IA.decimals).format(6)
          );
        }
        if (W.toAmount === "") {
          const IA = W.toToken || E;
          IA && F.routes.length > 0 && y(
            new k(F.routes[0].outAmount.toString()).divideByDecimals(IA.decimals).format(6)
          );
        }
      }
    },
    [iA, E, Q]
  ), FA = mM(async (W) => {
    await EM(W);
  }, 700), LM = G.useCallback(
    async (W) => {
      const F = await xA.refresh(W);
      if (!!F) {
        if (W.fromAmount === "") {
          const IA = W.fromToken || Q;
          IA && l(new k(F.sellAmount).divideByDecimals(IA.decimals).format(6));
        }
        if (W.toAmount === "") {
          const IA = W.toToken || E;
          IA && y(new k(F.buyAmount).divideByDecimals(IA.decimals).format(6));
        }
      }
    },
    [xA, E, Q]
  ), fA = mM(async (W) => {
    await LM(W);
  }, 700), zM = G.useCallback(
    async (W) => {
      l(W), W || y(""), i.coin === uA.Solana ? await FA({
        fromAmount: W,
        toAmount: ""
      }) : await fA({
        fromAmount: W,
        toAmount: ""
      });
    },
    [i.coin, FA, fA]
  ), MI = G.useCallback(
    async (W) => {
      y(W), W || l(""), i.coin === uA.Solana ? await FA({
        fromAmount: "",
        toAmount: W
      }) : await fA({
        fromAmount: "",
        toAmount: W
      });
    },
    [i.coin, fA, FA]
  ), tM = G.useCallback(
    (W) => {
      var IA;
      const F = TN(W);
      return A ? new k((IA = A[F]) != null ? IA : "0") : k.zero();
    },
    [A]
  ), kA = Q && tM(Q), DM = tM(wA), II = G.useCallback(async () => {
    if (p(E), r(Q), await zM(""), E && T) {
      const W = await PA(T, i)(E);
      L({
        type: "updateTokenBalances",
        payload: {
          [W.key]: W.value
        }
      });
    }
    await aA({ fromAsset: E, toAsset: Q });
  }, [
    E,
    Q,
    zM,
    T,
    aA,
    PA,
    i,
    L
  ]), NI = G.useCallback(
    async (W) => {
      r(W), m(void 0), y(""), i.coin === uA.Solana ? (await iA.reset(), await EM({
        toToken: W,
        toAmount: ""
      })) : i.coin === uA.Ethereum && (await xA.reset(), await LM({
        toToken: W,
        toAmount: ""
      })), await aA({ toAsset: W });
    },
    [
      i.coin,
      aA,
      iA,
      EM,
      xA,
      LM
    ]
  ), jI = G.useCallback(
    async (W) => {
      if (p(W), m(void 0), l(""), y(""), i.coin === uA.Solana ? await iA.reset() : i.coin === uA.Ethereum && await xA.reset(), T) {
        const F = await PA(T, i)(W);
        L({
          type: "updateTokenBalances",
          payload: {
            [F.key]: F.value
          }
        });
      }
      await aA({ fromAsset: W });
    },
    [L, aA, PA, T, i, xA, iA]
  ), s = G.useCallback((W) => {
    W === "to-account" && B(""), e(W);
  }, []), v = G.useCallback((W) => {
    B(W);
  }, []), h = G.useCallback((W, F) => {
    w(F);
  }, []), gA = G.useMemo(() => {
    if (b && M.makerAsset)
      return new k(b).times(M.makerAsset).formatAsFiat(Z);
  }, [M.makerAsset, b, Z]), CA = G.useMemo(() => ({
    gasFee: "0.0034",
    gasFeeGwei: "36",
    gasFeeFiat: "17.59",
    time: "1 min"
  }), []), lA = G.useMemo(() => i.coin === uA.Ethereum ? xA.networkFee.isUndefined() ? k.zero() : xA.networkFee : i.coin === uA.Solana ? iA.networkFee.isUndefined() ? k.zero() : iA.networkFee : k.zero(), [i.coin, xA.networkFee, iA.networkFee]), AA = G.useMemo(() => {
    var F, IA, pA;
    if (!b && !o)
      return;
    if (Q && b && aN(b, Q))
      return "fromAmountDecimalsOverflow";
    if (E && o && aN(o, E))
      return "toAmountDecimalsOverflow";
    if (!kA || !DM || !Q)
      return;
    const W = new k(b).multiplyByDecimals(Q.decimals);
    if (W.gt(kA))
      return "insufficientBalance";
    if (lA.gt(DM) || Q.symbol === i.symbol && W.plus(lA).gt(kA))
      return "insufficientFundsForGas";
    if (i.coin === uA.Ethereum)
      return Q.isToken && !xA.hasAllowance ? "insufficientAllowance" : xA.error === void 0 ? void 0 : xA.error.isInsufficientLiquidity ? "insufficientLiquidity" : "unknownError";
    if (i.coin === uA.Solana)
      return ((F = iA.error) == null ? void 0 : F.isInsufficientLiquidity) || ((pA = (IA = iA.quote) == null ? void 0 : IA.routes) == null ? void 0 : pA.length) === 0 ? "insufficientLiquidity" : iA.error === void 0 ? void 0 : "unknownError";
  }, [
    Q,
    b,
    E,
    o,
    i,
    lA,
    xA,
    iA,
    kA,
    DM
  ]), DA = G.useCallback(async () => {
    i.coin === uA.Ethereum ? xA.hasAllowance ? await xA.exchange({}, async function() {
      l(""), y("");
    }) : await xA.approve() : i.coin === uA.Solana && await iA.exchange(async function() {
      l(""), y("");
    });
  }, [i.coin, xA, iA]), dA = G.useMemo(() => T ? Q ? AA === "insufficientBalance" ? I("braveSwapInsufficientBalance").replace("$1", Q.symbol) : AA === "insufficientFundsForGas" ? I("braveSwapInsufficientBalance").replace("$1", i.symbol) : i.coin === uA.Ethereum && AA === "insufficientAllowance" ? I("braveSwapApproveToken").replace("$1", Q.symbol) : I(AA === "insufficientLiquidity" ? "braveSwapInsufficientLiquidity" : "braveSwapReviewOrder") : I("braveSwapReviewOrder") : I("braveSwapConnectWallet"), [T, Q, AA, i, I]), GA = G.useMemo(() => xA.loading || iA.loading || i.coin === uA.Ethereum && xA.quote === void 0 || i.coin === uA.Solana && iA.quote === void 0 || Q === void 0 || E === void 0 || new k(o).isUndefined() || new k(o).isZero() || new k(b).isUndefined() || new k(b).isZero() || DM === void 0 || kA === void 0 || AA && i.coin === uA.Ethereum && AA !== "insufficientAllowance" || AA && i.coin === uA.Solana, [
    xA.loading,
    iA.loading,
    xA.quote,
    iA.quote,
    i.coin,
    Q,
    E,
    b,
    o,
    DM,
    kA,
    AA
  ]);
  return G.useEffect(() => {
    const W = setInterval(async () => {
      i.coin === uA.Solana ? await FA({}) : await fA({});
    }, 1e4);
    return () => {
      clearInterval(W);
    };
  }, [i.coin, FA, fA]), {
    fromToken: Q,
    toToken: E,
    fromAmount: b,
    toAmount: o,
    fromAssetBalance: kA || k.zero(),
    fiatValue: gA,
    isFetchingQuote: xA.loading || iA.loading,
    quoteOptions: tA,
    selectedQuoteOptionIndex: H,
    selectingFromOrTo: O,
    swapAndSendSelected: n,
    selectedSwapAndSendOption: z,
    selectedSwapSendAccount: S,
    toAnotherAddress: d,
    userConfirmedAddress: C,
    selectedGasFeeOption: eA,
    slippageTolerance: V,
    useDirectRoute: R,
    gasEstimates: CA,
    onSelectFromToken: jI,
    onSelectToToken: NI,
    getCachedAssetBalance: tM,
    onSelectQuoteOption: hA,
    setSelectingFromOrTo: m,
    handleOnSetFromAmount: zM,
    handleOnSetToAmount: MI,
    onClickFlipSwapTokens: II,
    setSwapAndSendSelected: a,
    handleOnSetToAnotherAddress: v,
    onCheckUserConfirmedAddress: h,
    onSetSelectedSwapAndSendOption: s,
    setSelectedSwapSendAccount: t,
    setSelectedGasFeeOption: cA,
    setSlippageTolerance: _,
    setUseDirectRoute: X,
    onSubmit: DA,
    submitButtonText: dA,
    isSubmitButtonDisabled: GA,
    swapValidationError: AA,
    refreshBlockchainState: iM,
    getNetworkAssetsList: zA
  };
}, BM = (A, M, I) => {
  G.useEffect(() => {
    const N = (j) => {
      !A.current || A.current.contains((j == null ? void 0 : j.target) || null) || M(j);
    };
    if (I)
      return document.addEventListener("mousedown", N), document.addEventListener("touchstart", N), () => {
        document.removeEventListener("mousedown", N), document.removeEventListener("touchstart", N);
      };
    document.removeEventListener("mousedown", N), document.removeEventListener("touchstart", N);
  }, [A, I, M]);
}, HD = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMSAyMC43NTg3TDExIDFDMTEgMC40NDc3MTUgMTEuNDQ3NyAwIDEyIDBDMTIuNTUyMyAwIDEzIDAuNDQ3NzE1IDEzIDFMMTMgMjAuNzU4N0wxOS4yNjUyIDEzLjk3MTJDMTkuNjM5OCAxMy41NjU0IDIwLjI3MjQgMTMuNTQwMSAyMC42NzgzIDEzLjkxNDdDMjEuMDg0MSAxNC4yODkzIDIxLjEwOTQgMTQuOTIyIDIwLjczNDggMTUuMzI3OEwxMy4yMjQ4IDIzLjQ2MzhDMTIuNTY0OCAyNC4xNzg3IDExLjQzNTIgMjQuMTc4NyAxMC43NzUyIDIzLjQ2MzhMMy4yNjUxOSAxNS4zMjc4QzIuODkwNTkgMTQuOTIyIDIuOTE1OSAxNC4yODkzIDMuMzIxNzIgMTMuOTE0N0MzLjcyNzU1IDEzLjU0MDEgNC4zNjAyMSAxMy41NjU0IDQuNzM0ODEgMTMuOTcxMkwxMSAyMC43NTg3WiIgZmlsbD0iIzQ5NTA1NyIvPgo8L3N2Zz4K", f = Y.span`
  --text01: ${(A) => A.theme.color.legacy.text01};
  --text02: ${(A) => A.theme.color.legacy.text02};
  --text03: ${(A) => A.theme.color.legacy.text03};
  --error: ${(A) => A.theme.color.red40};
  --success: ${(A) => A.theme.color.green30};
  --warning: ${(A) => A.theme.color.yellow30};
  font-family: 'Poppins';
  color: ${(A) => A.textColor ? `var(--${A.textColor})` : A.theme.color.legacy.text01};
  font-size: ${(A) => A.textSize ? A.textSize : "18px"};
  font-weight: ${(A) => A.isBold ? 500 : 400};
  height: ${(A) => A.maintainHeight ? "20px" : "unset"};
  line-height: ${(A) => A.textSize === "12px" ? "18px" : "20px"};
  letter-spacing: 0.02em;
  text-align: ${(A) => A.textAlign ? A.textAlign : "center"};
  @media screen and (max-width: 570px) {
    font-size: ${(A) => A.responsiveTextSize ? A.responsiveTextSize : A.textSize ? A.textSize : "18px"};
  }
`, K = Y.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-family: 'Poppins';
  color: ${(A) => A.theme.color.legacy.text01};
  font-weight: 400;
  font-size: 18px;
  line-height: 20px;
  letter-spacing: 0.02em;
`, J = Y(K)`
  --vertical-padding: ${(A) => {
  var M;
  return (M = A.verticalPadding) != null ? M : 0;
}}px;
  --horizontal-padding: ${(A) => {
  var M;
  return (M = A.horizontalPadding) != null ? M : 0;
}}px;
  @media screen and (max-width: 570px) {
    --vertical-padding: ${(A) => {
  var M, I;
  return (I = (M = A.verticalPaddingResponsive) != null ? M : A.verticalPadding) != null ? I : 0;
}}px;
  }
  box-sizing: border-box;
  flex-direction: row;
  align-items: ${(A) => {
  var M;
  return (M = A.verticalAlign) != null ? M : "center";
}};
  justify-content: ${(A) => {
  var M;
  return (M = A.horizontalAlign) != null ? M : "space-between";
}};
  margin-bottom: ${(A) => {
  var M;
  return (M = A.marginBottom) != null ? M : 0;
}}px;
  padding: var(--vertical-padding) var(--horizontal-padding);
  width: ${(A) => A.rowWidth === "full" ? "100%" : "unset"};
  height: ${(A) => A.rowHeight === "full" ? "100%" : "unset"};
`, yA = Y(K)`
  --vertical-padding: ${(A) => {
  var M;
  return (M = A.verticalPadding) != null ? M : 0;
}}px;
  --horizontal-padding: ${(A) => {
  var M;
  return (M = A.horizontalPadding) != null ? M : 0;
}}px;
  align-items: ${(A) => {
  var M;
  return (M = A.horizontalAlign) != null ? M : "center";
}};
  box-sizing: border-box;
  height: ${(A) => A.columnHeight === "full" ? "100%" : "unset"};
  justify-content: ${(A) => {
  var M;
  return (M = A.verticalAlign) != null ? M : "center";
}};
  margin-bottom: ${(A) => {
  var M;
  return (M = A.marginBottom) != null ? M : 0;
}}px;
  padding: var(--vertical-padding) var(--horizontal-padding);
  width: ${(A) => A.columnWidth === "full" ? "100%" : "unset"};
`, oA = Y(K)`
  height: 100%;
  width: ${(A) => A.size}px;
`, qA = Y(K)`
  height: ${(A) => A.size}px;
  width: 100%;
`, SM = Y(K)`
  background-color: ${(A) => A.dividerTheme === "darker" ? A.theme.color.legacy.interactive08 : A.theme.color.legacy.divider01};
  height: ${(A) => A.height ? `${A.height}px` : "100%"};
  margin-left: ${(A) => {
  var M;
  return (M = A.marginLeft) != null ? M : 0;
}}px;
  margin-right: ${(A) => {
  var M;
  return (M = A.marginRight) != null ? M : 0;
}}px;
  width: 2px;
  @media screen and (max-width: 570px) {
    margin-left: ${(A) => {
  var M, I;
  return (I = (M = A.marginLeftResponsive) != null ? M : A.marginLeft) != null ? I : 0;
}}px;
  }
`, HI = Y(K)`
  background-color: ${(A) => A.theme.color.legacy.divider01};
  height: 2px;
  margin-top: ${(A) => {
  var M;
  return (M = A.marginTop) != null ? M : 0;
}}px;
  margin-bottom: ${(A) => {
  var M;
  return (M = A.marginBottom) != null ? M : 0;
}}px;
  width: ${(A) => A.width ? `${A.width}px` : "100%"};
`, OA = Y.div`
  height: ${(A) => A.size}px;
  width: ${(A) => A.size}px;
  mask-image: url(${(A) => A.icon});
  mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-image: url(${(A) => A.icon});
  -webkit-mask-size: contain;
  -webkit-mask-repeat: no-repeat;
`, mD = Y(K)`
  animation: spin 0.75s linear infinite;
  border: 2px solid transparent;
  border-top: 2px solid ${(A) => A.theme.color.legacy.text03};
  border-radius: 50%;
  height: 10px;
  margin-right: 6px;
  width: 10px;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`, BA = Y.button`
  display: flex;
  font-family: 'Poppins';
  cursor: pointer;
  border: none;
  outline: none;
  background: none;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0.02em;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: ${(A) => A.theme.color.legacy.text01};
  :disabled {
    cursor: not-allowed;
  }
`, VA = Y(BA)`
  padding: 0px;
  background-color: ${(A) => A.theme.color.legacy.text02};
  height: ${(A) => A.size ? A.size : 16}px;
  width: ${(A) => A.size ? A.size : 16}px;
  mask-image: url(${(A) => A.icon});
  mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-image: url(${(A) => A.icon});
  -webkit-mask-size: contain;
  -webkit-mask-repeat: no-repeat;
`, YA = Y(J)`
  display: flex;
  @media screen and (max-width: ${(A) => A.maxWidth ? A.maxWidth : 800}px) {
    display: ${(A) => A.dontHide ? "flex" : "none"};
  }
`, oM = Y(J)`
  display: none;
  @media screen and (max-width: ${(A) => A.maxWidth ? A.maxWidth : 800}px) {
    display: flex;
  }
`, gM = Y.input`
  font-family: 'Poppins';
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  outline: none;
  background-image: none;
  box-shadow: none;
  border: none;
  color: ${(A) => A.theme.color.legacy.text01};
  padding: 0px;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  background-color: transparent;
  letter-spacing: 0.02em;
  ::placeholder {
    color: ${(A) => A.theme.color.legacy.text01};
  }
  :focus {
    outline: none;
  }
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`, $M = Y.label`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: ${(A) => A.theme.color.legacy.text01};
`, PD = (A) => {
  const {
    onClick: M
  } = A;
  return /* @__PURE__ */ u(kD, {
    children: /* @__PURE__ */ u(pD, {
      onClick: M,
      children: /* @__PURE__ */ u(vD, {
        icon: HD,
        size: 24
      })
    })
  });
}, kD = Y(K)`
  height: 8px;
  width: 100%;
`, pD = Y(BA)`
  --icon-color: ${(A) => A.theme.color.legacy.text02};
  background-color: ${(A) => A.theme.color.legacy.background01};
  border-radius: 100%;
  box-shadow: var(--flip-tokens-button-shadow);
  height: 40px;
  position: absolute;
  width: 40px;
  z-index: 10;
  padding: 0px;
  &:hover {
    --icon-color: var(--flip-tokens-button-icon-color-hover);
    background-color: var(--flip-tokens-button-background-hover);
  }
`, vD = Y(OA)`
  background-color: var(--icon-color);
`, GM = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTYgNy40NjU1M0wxMC45MDY1IDMuMzc2NzZDMTEuMTg5NCAzLjE0MTA1IDExLjYwOTggMy4xNzkyNiAxMS44NDU1IDMuNDYyMTFDMTIuMDgxMiAzLjc0NDk3IDEyLjA0MyA0LjE2NTM0IDExLjc2MDEgNC40MDEwNUw2LjQyNjc5IDguODQ1NDhDNi4xNzk1NiA5LjA1MTUxIDUuODIwNDQgOS4wNTE1MSA1LjU3MzIxIDguODQ1NDhMMC4yMzk4OTMgNC40MDEwNUMtMC4wNDI5NTc0IDQuMTY1MzQgLTAuMDgxMTczMyAzLjc0NDk3IDAuMTU0NTM1IDMuNDYyMTFDMC4zOTAyNDQgMy4xNzkyNiAwLjgxMDYyIDMuMTQxMDUgMS4wOTM0NyAzLjM3Njc2TDYgNy40NjU1M1oiIGZpbGw9IiMyMTI1MjkiLz4KPC9zdmc+Cg==", lj = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yLjQ0MDY4IDIuODQ3NDRDMi40NDA2OCAyLjI4NTggMi44OTU5OSAxLjgzMDQ5IDMuNDU3NjMgMS44MzA0OUg1LjQ5MTU0QzYuMDUzMTggMS44MzA0OSA2LjUwODQ4IDIuMjg1OCA2LjUwODQ4IDIuODQ3NDRWNC4yNzExN0M2LjUwODQ4IDQuODMyODIgNi4wNTMxOCA1LjI4ODEyIDUuNDkxNTQgNS4yODgxMkgzLjQ1NzYzQzIuODk1OTkgNS4yODgxMiAyLjQ0MDY4IDQuODMyODIgMi40NDA2OCA0LjI3MTE3VjIuODQ3NDRaTTUuNDkxNTQgMi44NDc0NEwzLjQ1NzYzIDIuODQ3NDRWNC4yNzExN0g1LjQ5MTU0TDUuNDkxNTQgMi44NDc0NFoiIGZpbGw9IiM0OTUwNTciLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yLjEzNTYgMEMxLjI5MzEzIDAgMC42MTAxNzEgMC42ODI5NTUgMC42MTAxNzEgMS41MjU0MlY4LjgxMDc3QzAuNjEwMTcxIDguODg5NzEgMC41OTE3OTIgOC45Njc1NyAwLjU1NjQ4OSA5LjAzODE3TDAuMTU3OTExIDkuODM1MzNDMC4wNTQwNjM5IDEwLjA0MyAwIDEwLjI3MiAwIDEwLjUwNDJDMCAxMS4zMzAzIDAuNjY5NjcxIDEyIDEuNDk1NzUgMTJINy40NTM0MkM4LjI3OTUgMTIgOC45NDkxNyAxMS4zMzAzIDguOTQ5MTcgMTAuNTA0MkM4Ljk0OTE3IDEwLjI3MiA4Ljg5NTEgMTAuMDQzIDguNzkxMjYgOS44MzUzM0w4LjM5MjY4IDkuMDM4MTdDOC4zNTczOCA4Ljk2NzU3IDguMzM5IDguODg5NzEgOC4zMzkgOC44MTA3N1Y0LjY3ODQ5TDguNzkxOTcgNC42Nzg5N0M4Ljk5MTE4IDQuNjc5MTggOS4xNTI1NiA0Ljg0MDczIDkuMTUyNTYgNS4wMzk5NFY4LjE3NzgzQzkuMTUyNTYgOC45NjQxMyA5Ljc4OTk4IDkuNjAxNTYgMTAuNTc2MyA5LjYwMTU2QzExLjM2MjYgOS42MDE1NiAxMiA4Ljk2NDEzIDEyIDguMTc3ODNWMy45Njg0M0MxMiAzLjYwNDQzIDExLjg2OTkgMy4yNTI0MyAxMS42MzMgMi45NzZMMTEuNDkwNSAyLjgwOTU5QzExLjM1ODkgMi41ODk0MSAxMS4xOTk5IDIuNDA2OTMgMTEuMDMyNiAyLjI3NTE1TDEwLjM4OTYgMS41MjQ1MkMxMC4yMDY5IDEuMzExMjUgOS44ODU4NyAxLjI4NjQ4IDkuNjcyNiAxLjQ2OTE4QzkuNDU5MzQgMS42NTE4OCA5LjQzNDU3IDEuOTcyODcgOS42MTcyNyAyLjE4NjE0TDkuOTA4NjkgMi41MjYzMUM5LjgyNjQgMi44NDI2MSA5Ljg3OTIgMy4yNzM1IDEwLjA3OTMgMy42OTY4NUMxMC4zMDIxIDQuMTY4NDMgMTAuNjUwOSA0LjUxMDM2IDEwLjk4MzEgNC42MjU1N1Y4LjE3NzgzQzEwLjk4MzEgOC40MDI0OSAxMC44MDA5IDguNTg0NjEgMTAuNTc2MyA4LjU4NDYxQzEwLjM1MTYgOC41ODQ2MSAxMC4xNjk1IDguNDAyNDkgMTAuMTY5NSA4LjE3NzgzVjUuMDM5OTRDMTAuMTY5NSA0LjI3OTUgOS41NTM0OCAzLjY2MjgyIDguNzkzMDQgMy42NjIwMkw4LjMzOSAzLjY2MTU0VjEuNTI1NDJDOC4zMzkgMC42ODI5NTUgNy42NTYwNCAwIDYuODEzNTcgMEgyLjEzNTZaTTEuNjI3MTIgMS41MjU0MkMxLjYyNzEyIDEuMjQ0NiAxLjg1NDc3IDEuMDE2OTUgMi4xMzU2IDEuMDE2OTVINi44MTM1N0M3LjA5NDQgMS4wMTY5NSA3LjMyMjA1IDEuMjQ0NiA3LjMyMjA1IDEuNTI1NDJWOC44MTA3N0M3LjMyMjA1IDkuMDQ3NTkgNy4zNzcxOCA5LjI4MTE1IDcuNDgzMDkgOS40OTI5Nkw3Ljg4MTY3IDEwLjI5MDFDNy45MTQ5MSAxMC4zNTY2IDcuOTMyMjIgMTAuNDI5OSA3LjkzMjIyIDEwLjUwNDJDNy45MzIyMiAxMC43Njg3IDcuNzE3ODUgMTAuOTgzMSA3LjQ1MzQyIDEwLjk4MzFIMS40OTU3NUMxLjIzMTMyIDEwLjk4MzEgMS4wMTY5NSAxMC43Njg3IDEuMDE2OTUgMTAuNTA0MkMxLjAxNjk1IDEwLjQyOTkgMS4wMzQyNiAxMC4zNTY2IDEuMDY3NSAxMC4yOTAxTDEuNDY2MDggOS40OTI5NkMxLjU3MTk4IDkuMjgxMTUgMS42MjcxMiA5LjA0NzU5IDEuNjI3MTIgOC44MTA3N1YxLjUyNTQyWiIgZmlsbD0iIzQ5NTA1NyIvPgo8L3N2Zz4K";
var sM = { exports: {} };
(function(A) {
  (function() {
    var M = new Array(4), I = ["#5B5C63", "#151E9A", "#2197F9", "#1FC3DC", "#086582", "#67D4B4", "#AFCE57", "#F0CB44", "#F28A29", "#FC798F", "#C1226E", "#FAB5EE", "#9677EE", "#5433B0"];
    function N(L) {
      for (var Q = 0; Q < M.length; Q++)
        M[Q] = 0;
      for (var Q = 0; Q < L.length; Q++)
        M[Q % 4] = (M[Q % 4] << 5) - M[Q % 4] + L.charCodeAt(Q);
    }
    function j() {
      var L = M[0] ^ M[0] << 11;
      return M[0] = M[1], M[1] = M[2], M[2] = M[3], M[3] = M[3] ^ M[3] >> 19 ^ L ^ L >> 8, (M[3] >>> 0) / (1 << 31 >>> 0);
    }
    function D() {
      return I[Math.floor(j() * 100) % I.length];
    }
    function c(L) {
      for (var Q = L, p = L, E = Math.ceil(Q / 2), r = Q - E, b = [], l = 0; l < p; l++) {
        for (var o = [], y = 0; y < E; y++)
          o[y] = Math.floor(j() * 2.3);
        var O = o.slice(0, r);
        O.reverse(), o = o.concat(O);
        for (var m = 0; m < o.length; m++)
          b.push(o[m]);
      }
      return b;
    }
    function x(L) {
      var Q = {};
      return Q.seed = L.seed || Math.floor(Math.random() * Math.pow(10, 16)).toString(16), N(Q.seed), Q.size = L.size || 8, Q.scale = L.scale || 4, Q.color = L.color || D(), Q.bgcolor = L.bgcolor || D(), Q.spotcolor = L.spotcolor || D(), Q;
    }
    function i(L, Q) {
      L = x(L || {});
      var p = c(L.size), E = Math.sqrt(p.length);
      Q.width = Q.height = L.size * L.scale;
      var r = Q.getContext("2d");
      r.fillStyle = L.bgcolor, r.fillRect(0, 0, Q.width, Q.height), r.fillStyle = L.color;
      for (var b = 0; b < p.length; b++)
        if (p[b]) {
          var l = Math.floor(b / E), o = b % E;
          r.fillStyle = p[b] == 1 ? L.color : L.spotcolor, r.filter = "blur(17px)", r.fillRect(o * L.scale, l * L.scale, L.scale, L.scale);
        }
      return Q;
    }
    function T(L) {
      var Q = document.createElement("canvas");
      return i(L, Q), Q;
    }
    function Z(L) {
      return L = x(L || {}), "100% 100% linear-gradient(to bottom, " + L.bgcolor + " 0%, " + L.spotcolor + " 100%) no-repeat";
    }
    var U = {
      create: T,
      background: Z,
      render: i
    };
    A.exports = U, typeof window < "u" && (window.blockies = U);
  })();
})(sM);
const EN = (A) => (A == null ? void 0 : A.endsWith(".jpg")) || (A == null ? void 0 : A.endsWith(".jpeg")) || (A == null ? void 0 : A.endsWith(".png")) || (A == null ? void 0 : A.endsWith(".svg")) || (A == null ? void 0 : A.endsWith(".gif")), mI = (A) => {
  const {
    size: M,
    marginRight: I,
    asset: N,
    network: j,
    isHeader: D
  } = A, c = rM.useMemo(() => N !== void 0 ? !EN(N.logo) : j !== void 0 ? !EN(j.logo) : !0, [j, N]), x = rM.useMemo(() => {
    if (c) {
      if (N !== void 0)
        return sM.exports.background({
          seed: N.contractAddress ? N.contractAddress.toLowerCase() : N.name
        });
      if (j !== void 0)
        return sM.exports.background({
          seed: j.chainName
        });
    }
    return "";
  }, [c, N, j]), i = rM.useMemo(() => {
    if (c) {
      if (N !== void 0)
        return N.symbol.charAt(0);
      if (j !== void 0)
        return j.chainName.charAt(0);
    }
    return "";
  }, [c, N, j]), T = rM.useMemo(() => {
    if (!c) {
      if (N !== void 0)
        return N.logo;
      if (j !== void 0)
        return j.logo;
    }
    return "";
  }, [c, N, j]);
  return c ? /* @__PURE__ */ u(WD, {
    size: M,
    panelBackground: x,
    marginRight: I,
    children: /* @__PURE__ */ u(VD, {
      children: i
    })
  }) : /* @__PURE__ */ u(XD, {
    isHeader: D,
    size: M,
    src: T,
    marginRight: I
  });
}, WD = Y(K)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: ${(A) => A.size}px;
  width: ${(A) => A.size}px;
  border-radius: 100%;
  margin-right: ${(A) => A.marginRight ? A.marginRight : 0}px;
  background: ${(A) => A.panelBackground ? A.panelBackground : "none"};
`, VD = Y(f)`
  color: ${(A) => A.theme.color.white};
`, XD = Y.img`
  height: ${(A) => A.size}px;
  width: ${(A) => A.size}px;
  margin-right: ${(A) => A.marginRight ? A.marginRight : 0}px;
  @media screen and (max-width: 570px) {
    height: ${(A) => A.isHeader ? 40 : A.size}px;
    width: ${(A) => A.isHeader ? 40 : A.size}px;
  }
`, AI = (A) => {
  const {
    onClick: M,
    buttonType: I,
    buttonSize: N,
    text: j,
    disabled: D,
    hasBackground: c,
    hasShadow: x,
    networkFeeFiatValue: i,
    isHeader: T,
    networkNotSupported: Z,
    asset: U,
    network: L
  } = A, {
    getLocale: Q
  } = TA(), p = G.useMemo(() => j ? j.length > 3 : !0, [j]);
  return /* @__PURE__ */ P(hD, {
    onClick: M,
    buttonType: I,
    moreRightPadding: p,
    buttonSize: N,
    disabled: D,
    hasBackground: c,
    hasShadow: x,
    networkNotSupported: Z,
    children: [!Z && /* @__PURE__ */ P(bA, {
      children: [/* @__PURE__ */ P(J, {
        children: [j && /* @__PURE__ */ u(mI, {
          asset: U,
          network: L,
          size: N === "small" || N === "medium" ? 24 : 40,
          marginRight: 8
        }), /* @__PURE__ */ u(YA, {
          dontHide: !T,
          children: /* @__PURE__ */ u(f, {
            isBold: j !== void 0,
            textColor: j ? "text01" : "text03",
            textSize: N === "small" || N === "medium" ? "14px" : "18px",
            children: j != null ? j : Q("braveSwapSelectToken")
          })
        })]
      }), /* @__PURE__ */ P(YA, {
        dontHide: !T,
        children: [i && /* @__PURE__ */ P(bA, {
          children: [/* @__PURE__ */ u(oA, {
            size: 8
          }), /* @__PURE__ */ P(JD, {
            children: [/* @__PURE__ */ u(fD, {
              icon: lj,
              size: 12
            }), /* @__PURE__ */ u(f, {
              textSize: "14px",
              textColor: "text01",
              children: i
            })]
          })]
        }), N !== "small" && /* @__PURE__ */ u(oA, {
          size: 8
        })]
      })]
    }), Z && /* @__PURE__ */ P(bA, {
      children: [/* @__PURE__ */ u(KD, {
        isBold: !0,
        textSize: "14px",
        children: Q("braveSwapSwitchNetwork")
      }), /* @__PURE__ */ u(oA, {
        size: 8
      })]
    }), /* @__PURE__ */ u(FD, {
      networkNotSupported: Z,
      size: 12,
      icon: GM
    })]
  });
}, hD = Y(BA)`
  /* Variables */
  --big-padding: 10px ${(A) => A.moreRightPadding ? 12 : 10}px 10px 12px;
  --medium-padding: 8px 16px;
  --small-padding: 4px 12px 4px 4px;

  @media screen and (max-width: 570px) {
    --big-padding: 10px ${(A) => A.moreRightPadding ? 10 : 8}px 10px 8px;
    --medium-padding: 4px 16px 4px 8px;
    --small-padding: 4px 16px 4px 8px;
  }

  /* Styles */
  background-color: ${(A) => A.hasBackground ? A.networkNotSupported ? A.theme.color.red40 : A.theme.color.legacy.background01 : "transparent"};
  border-radius: 100px;
  box-shadow: ${(A) => A.hasShadow ? "0px 0px 10px rgba(0, 0, 0, 0.05)" : "none"};
  justify-content: ${(A) => A.buttonSize === "small" ? "space-between" : "center"};
  padding: ${(A) => A.buttonSize === "small" ? "var(--small-padding)" : A.buttonSize === "medium" ? "var(--medium-padding)" : "var(--big-padding)"};
  white-space: nowrap;
  width: ${(A) => A.buttonSize === "small" ? "140px" : "unset"};
  :disabled {
    opacity: 0.3;
  }
  &:hover:not([disabled]) {
    background-color: ${(A) => A.networkNotSupported ? A.theme.color.red40 : A.buttonType === "secondary" || A.buttonSize === "small" ? "var(--token-or-network-button-background-hover-secondary)" : "var(--token-or-network-button-background-hover-primary)"};
  }
`, FD = Y(OA)`
  background-color: ${(A) => A.networkNotSupported ? A.theme.color.white : A.theme.color.legacy.text01};
`, fD = Y(OA)`
  background-color: ${(A) => A.theme.color.legacy.text02};
  margin-right: 6px;
`, JD = Y(J)`
  padding: 2px 8px;
  border-radius: 8px;
  background-color: var(--token-or-network-bubble-background);
`, KD = Y(f)`
  color: ${(A) => A.theme.color.white};
`, PI = (A) => {
  const {
    isSelected: M,
    buttonSize: I,
    buttonStyle: N,
    buttonText: j,
    buttonType: D,
    buttonWidth: c,
    disabled: x,
    horizontalMargin: i,
    marginRight: T,
    onClick: Z,
    verticalMargin: U
  } = A;
  return /* @__PURE__ */ u(qD, {
    buttonStyle: N,
    buttonType: D,
    buttonWidth: c,
    disabled: x,
    horizontalMargin: i,
    onClick: Z,
    verticalMargin: U,
    buttonSize: I,
    isSelected: M,
    marginRight: T,
    children: j
  });
}, qD = Y(BA)`
  --button-background: ${(A) => A.buttonStyle === "square" ? A.theme.color.legacy.divider01 : A.buttonType === "secondary" ? A.theme.color.legacy.background01 : A.theme.color.legacy.interactive05};
  --button-background-hover: ${(A) => A.buttonStyle === "square" ? A.theme.color.legacy.interactive05 : A.theme.color.legacy.interactive04};
  --vertical-margin: ${(A) => {
  var M;
  return (M = A.verticalMargin) != null ? M : 0;
}}px;
  --horizontal-margin: ${(A) => {
  var M;
  return (M = A.horizontalMargin) != null ? M : 0;
}}px;
  background-color: var(--button-background);
  border-radius: ${(A) => A.buttonStyle === "square" ? "0px" : "48px"};
  border: ${(A) => A.buttonType === "secondary" ? A.isSelected ? "1px solid var(--standard-button-border-secondary-selected)" : `1px solid ${A.theme.color.legacy.interactive08}` : "none"};
  color: ${(A) => A.buttonType === "secondary" ? A.isSelected ? "var(--standard-button-border-secondary-selected)" : A.theme.color.legacy.text03 : A.buttonStyle === "square" ? A.theme.color.legacy.text02 : A.theme.color.white};
  font-size: ${(A) => A.buttonStyle === "square" || A.buttonSize === "small" ? "14px" : "16px"};
  margin: var(--vertical-margin) var(--horizontal-margin);
  margin-right: ${(A) => {
  var M;
  return (M = A.marginRight) != null ? M : 0;
}}px;
  padding: ${(A) => A.buttonSize === "small" ? "6px 15px" : "18px"};
  width: ${(A) => A.buttonWidth === "dynamic" ? "unset" : A.buttonWidth === "full" ? "100%" : `${A.buttonWidth}px`};
  &:hover:not([disabled]) {
    background-color: ${(A) => A.buttonType === "secondary" ? A.theme.color.legacy.background01 : "var(--button-background-hover)"};
    border: ${(A) => A.buttonType === "secondary" ? "1px solid var(--standard-button-border-secondary-selected)" : "none"};
    color: ${(A) => A.buttonType === "secondary" ? A.isSelected ? "var(--standard-button-border-secondary-selected)" : A.theme.color.legacy.text03 : A.theme.color.white};
  }
  :disabled {
    background-color: ${(A) => A.theme.color.legacy.disabled};
    color: var(--standard-button-color-disabled);
  }
`, LN = (A) => {
  const {
    buttonText: M,
    onClick: I
  } = A;
  return /* @__PURE__ */ u(_D, {
    onClick: I,
    children: M
  });
}, _D = Y(BA)`
  background-color: var(--preset-button-background);
  border-radius: 4px;
  font-size: 14px;
  margin-right: 8px;
  padding: 1px 6px;
  text-transform: uppercase;
  &:hover:not([disabled]) {
    background-color: var(--preset-button-background-hover);
  }
`, $D = (A) => {
  const {
    onClick: M,
    token: I,
    balance: N,
    disabled: j,
    isWalletConnected: D
  } = A, c = G.useCallback(() => {
    M(I);
  }, [I, M]);
  return /* @__PURE__ */ P(Ac, {
    onClick: c,
    disabled: j,
    children: [/* @__PURE__ */ P(J, {
      children: [/* @__PURE__ */ u(mI, {
        asset: I,
        size: 40,
        marginRight: 12
      }), /* @__PURE__ */ P(Mc, {
        horizontalAlign: "flex-start",
        children: [/* @__PURE__ */ u(f, {
          isBold: !0,
          textColor: "text01",
          textSize: "14px",
          textAlign: "left",
          children: I.name
        }), /* @__PURE__ */ u(f, {
          textColor: "text03",
          textSize: "14px",
          textAlign: "left",
          children: I.symbol
        })]
      })]
    }), D && /* @__PURE__ */ u(f, {
      isBold: !0,
      textColor: "text01",
      textSize: "14px",
      children: N.divideByDecimals(I.decimals).formatAsAsset(6, I.symbol)
    })]
  });
}, Ac = Y(BA)`
  background-color: none;
  border-radius: 8px;
  justify-content: space-between;
  padding: 16px 8px;
  white-space: nowrap;
  width: calc(100% - 24px);
  margin-left: 12px;
  :disabled {
    opacity: 0.3;
  }
  &:hover:not([disabled]) {
    box-shadow: var(--token-list-button-shadow);
    background-color: ${(A) => A.theme.color.legacy.background01};
  }
`, Mc = Y(yA)`
  @media screen and (max-width: 570px) {
    width: 40vw;
    overflow: hidden;
    white-space: pre-line;
  }
`, Ic = (A) => {
  const {
    onClick: M,
    option: I,
    isSelected: N,
    isBest: j,
    spotPrice: D
  } = A, {
    defaultBaseCurrency: c,
    getLocale: x
  } = TA(), i = G.useCallback(() => {
    M(I);
  }, [I, M]), T = G.useMemo(() => I.toAmount.times(D || 0).formatAsFiat(c), [D, I, c]);
  return /* @__PURE__ */ P(Nc, {
    onClick: i,
    isSelected: N,
    children: [j && /* @__PURE__ */ u(jc, {
      isSelected: N,
      children: x("braveSwapBest")
    }), /* @__PURE__ */ u(f, {
      isBold: !0,
      textColor: "text01",
      textSize: "14px",
      textAlign: "left",
      children: I.label
    }), /* @__PURE__ */ P(yA, {
      horizontalAlign: "flex-end",
      children: [/* @__PURE__ */ u(f, {
        isBold: !0,
        textColor: "text01",
        textSize: "14px",
        textAlign: "right",
        children: I.toAmount.formatAsAsset(6, I.toToken.symbol)
      }), /* @__PURE__ */ P(f, {
        textColor: "text03",
        textSize: "14px",
        textAlign: "right",
        children: ["~", T]
      })]
    })]
  });
}, Nc = Y(BA)`
  --best-background: ${(A) => A.isSelected ? A.theme.color.legacy.interactive05 : A.theme.color.legacy.focusBorder};
  background-color: var(--select-quote-button-background);
  border-radius: 8px;
  justify-content: space-between;
  padding: 12px 24px;
  width: 100%;
  margin: 0px 0px 10px 10px;
  position: relative;
  box-sizing: border-box;
  box-shadow: ${(A) => A.isSelected ? `0px 0px 0px 1px ${A.theme.color.legacy.interactive05} inset` : "none"};
  &:hover {
    --best-background: ${(A) => A.theme.color.legacy.interactive05};
    box-shadow: 0px 0px 0px 1px ${(A) => A.theme.color.legacy.interactive05} inset;
  }
`, jc = Y(K)`
  font-size: 12px;
  line-height: 20px;
  color: ${(A) => A.theme.color.white};
  border-radius: 7px 7px 7px 0px;
  background-color: var(--best-background);
  padding: 0px 16px;
  position: absolute;
  z-index: 5;
  top: -9px;
  left: 0px;
`, wj = () => {
  const { defaultBaseCurrency: A } = TA(), {
    state: { spotPrices: M, networkFeeEstimates: I }
  } = TM();
  return {
    getNetworkFeeFiatEstimate: G.useCallback(
      (j) => !I[j.chainId] || M.nativeAsset === "" ? "" : new k(M.nativeAsset).times(I[j.chainId].gasFee).formatAsFiat(A),
      [M, I, A]
    )
  };
}, gc = (A) => {
  const {
    network: M,
    isHeader: I,
    onClick: N
  } = A, {
    getNetworkFeeFiatEstimate: j
  } = wj(), D = G.useCallback(() => {
    N(M);
  }, [M, N]);
  return /* @__PURE__ */ P(Dc, {
    onClick: D,
    isHeader: I,
    children: [/* @__PURE__ */ P(J, {
      children: [/* @__PURE__ */ u(mI, {
        size: 24,
        marginRight: 8,
        network: M,
        isHeader: I
      }), /* @__PURE__ */ u(f, {
        isBold: !0,
        textSize: "14px",
        children: M.chainName
      })]
    }), /* @__PURE__ */ u(f, {
      textSize: "14px",
      children: j(M)
    })]
  });
}, Dc = Y(BA)`
  justify-content: space-between;
  padding: 8px 12px;
  white-space: nowrap;
  width: 100%;
  color: ${(A) => A.theme.color.legacy.text03};
  &:hover {
    color: ${(A) => A.theme.color.legacy.text01};
  }
  @media screen and (max-width: 570px) {
    padding: ${(A) => A.isHeader ? "8px 20px" : "8px 12px"};
  }
`, Cj = (A) => {
  const M = A.slice(0, 4), I = A.slice(-4);
  return M.concat("...", I);
};
Y(BA)`
  border-radius: 4px;
  justify-content: space-between;
  padding: 5px 18px;
  white-space: nowrap;
  width: 100%;
  background-color: none;
  margin-bottom: 2px;
  &:hover {
    background-color: var(--account-list-button-hover-background);
  }
`;
const cc = (A) => {
  const {
    onClick: M
  } = A;
  return /* @__PURE__ */ u(ic, {
    onClick: M,
    children: /* @__PURE__ */ u(zc, {})
  });
}, ic = Y(BA)`
  background-color: ${(A) => A.theme.color.legacy.background01};
  border-radius: 100%;
  box-shadow: var(--theme-button-box-shadow);
  height: 40px;
  width: 40px;
  margin-right: 16px;
  &:hover {
    background-color: var(--theme-button-background-hover);
  }
`, zc = Y(K)`
  height: 20px;
  width: 20px;
  background-image: var(--theme-button-icon);
  background-size: cover;
`, ec = (A) => {
  const {
    onClick: M
  } = A, {
    getLocale: I,
    account: N
  } = TA(), j = G.useMemo(() => {
    if (!!N)
      return sM.exports.create({
        seed: N.address.toLowerCase() || "",
        size: 8,
        scale: 16
      }).toDataURL();
  }, [N]);
  return /* @__PURE__ */ u(xc, {
    onClick: M,
    isConnected: N !== void 0,
    children: N ? /* @__PURE__ */ P(bA, {
      children: [j && /* @__PURE__ */ u(uc, {
        orb: j
      }), " ", /* @__PURE__ */ P(YA, {
        children: [/* @__PURE__ */ u(f, {
          textSize: "14px",
          textColor: "text01",
          isBold: !0,
          children: N.name
        }), /* @__PURE__ */ u(oA, {
          size: 4
        })]
      }), /* @__PURE__ */ u(f, {
        textSize: "14px",
        textColor: "text02",
        isBold: !0,
        responsiveTextSize: "12px",
        children: Cj(N.address)
      }), /* @__PURE__ */ u(oA, {
        size: 7
      }), /* @__PURE__ */ u(lc, {
        size: 12,
        icon: GM
      })]
    }) : I("braveSwapConnectWallet")
  });
}, xc = Y(BA)`
  background-color: ${(A) => A.isConnected ? "var(--connect-wallet-button-background-connected)" : "var(--connect-wallet-button-background-disconnected)"};
  border-radius: 48px;
  color: ${(A) => A.isConnected ? A.theme.color.legacy.text01 : A.theme.color.white};
  font-size: 14px;
  padding: ${(A) => A.isConnected ? "8px 16px" : "10px 22px"};
  box-shadow: ${(A) => A.isConnected ? "0px 0px 10px rgba(0, 0, 0, 0.05)" : "none"};
  @media screen and (max-width: 570px) {
    font-size: 12px;
    padding: ${(A) => A.isConnected ? "4px 8px" : "6px 16px"};
  }
`, uc = Y(K)`
  width: 24px;
  height: 24px;
  border-radius: 100%;
  background-image: url(${(A) => A.orb});
  background-size: cover;
  margin-right: 8px;
`, lc = Y(OA)`
  display: none;
  background-color: ${(A) => A.theme.color.legacy.text01};
  @media screen and (max-width: 570px) {
    display: block;
  }
`, FM = (A) => {
  const {
    boxType: M,
    children: I
  } = A;
  return /* @__PURE__ */ u(wc, {
    boxType: M,
    children: I
  });
}, wc = Y(K)`
  background-color: ${(A) => A.boxType === "primary" ? "var(--box-background-primary)" : "var(--box-background-secondary)"};
  box-sizing: border-box;
  border-radius: 16px;
  border: ${(A) => A.boxType === "secondary" ? `1px solid ${A.theme.color.legacy.divider01}` : "none"};
  height: ${(A) => A.boxType === "primary" ? "122px" : "unset"};
  min-height: ${(A) => A.boxType === "secondary" ? "88px" : "114px"};
  padding: 14px 16px 14px 8px;
  width: 100%;
  position: relative;
  @media screen and (max-width: 570px) {
    min-height: ${(A) => A.boxType === "secondary" ? "114px" : "122px"};
  }
`, nj = (A) => {
  const {
    onChange: M,
    value: I,
    autoFocus: N,
    hasError: j,
    disabled: D
  } = A, c = G.useCallback((x) => {
    M(x.target.value);
  }, [M]);
  return /* @__PURE__ */ u(Cc, {
    placeholder: "0.0",
    type: "number",
    spellCheck: !1,
    autoFocus: N,
    value: I,
    hasError: j,
    onChange: c,
    disabled: D != null ? D : !1
  });
}, Cc = Y(gM)`
  color: ${(A) => A.hasError ? A.theme.color.red40 : "inherit"};
  font-weight: 500;
  font-size: 28px;
  line-height: 42px;
  text-align: right;
  width: 100%;
  ::placeholder {
    color: ${(A) => A.theme.color.legacy.text03};
  }
`, nc = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxOCAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik03LjIgMTQuNEMzLjIyMzY2IDE0LjQgMCAxMS4xNzYzIDAgNy4xOTk1N0MwIDMuMjIzNTkgMy4yMjM4MSAwIDcuMiAwQzExLjE3NjIgMCAxNC40IDMuMjIzNTkgMTQuNCA3LjE5OTU3QzE0LjQgOS4wNDI1OSAxMy43MDc2IDEwLjcyMzkgMTIuNTY4NyAxMS45OTc1TDE3Ljc2NTggMTYuNzQ4NkMxOC4wNTkzIDE3LjAxNjkgMTguMDc5NyAxNy40NzIzIDE3LjgxMTQgMTcuNzY1OEMxNy41NDMxIDE4LjA1OTMgMTcuMDg3NyAxOC4wNzk3IDE2Ljc5NDIgMTcuODExNEwxMS41MDIzIDEyLjk3MzZDMTAuMzAyIDEzLjg2OTYgOC44MTI5MiAxNC40IDcuMiAxNC40Wk0xMS4xMzY5IDExLjQwNDRDMTEuMDgzMyAxMS40MzgxIDExLjAzMzMgMTEuNDc5NSAxMC45ODg2IDExLjUyODVDMTAuOTc2OSAxMS41NDEyIDEwLjk2NTkgMTEuNTU0MiAxMC45NTUzIDExLjU2NzVDOS45NDY5NCAxMi40MzU0IDguNjM0NjkgMTIuOTYgNy4xOTk5NyAxMi45NkM0LjAxODkzIDEyLjk2IDEuNDM5OTcgMTAuMzgxIDEuNDM5OTcgNy4xOTk1N0MxLjQzOTk3IDQuMDE4OSA0LjAxOTA1IDEuNDQgNy4xOTk5NyAxLjQ0QzEwLjM4MDkgMS40NCAxMi45NiA0LjAxODkgMTIuOTYgNy4xOTk1N0MxMi45NiA4Ljg1ODMzIDEyLjI1ODkgMTAuMzUzMyAxMS4xMzY5IDExLjQwNDRaIiBmaWxsPSIjODY4RTk2Ii8+Cjwvc3ZnPgo=", Tc = (A) => {
  const {
    onChange: M,
    value: I,
    autoFocus: N,
    placeholder: j
  } = A, D = G.useCallback((c) => {
    M(c.target.value);
  }, [M]);
  return /* @__PURE__ */ P(bA, {
    children: [/* @__PURE__ */ u(Ec, {
      icon: nc,
      size: 18
    }), /* @__PURE__ */ u(ac, {
      placeholder: j,
      spellCheck: !1,
      autoFocus: N,
      value: I,
      onChange: D
    })]
  });
}, ac = Y(gM)`
  flex: 1;
  ::placeholder {
    color: ${(A) => A.theme.color.legacy.text03};
  }
`, Ec = Y(OA)`
  background-color: ${(A) => A.theme.color.legacy.text03};
  margin-right: 10px;
`;
Y(gM)`
  width: 100%;
  height: 32px;
  border: 1px solid ${(A) => A.theme.color.legacy.interactive08};
  border-radius: 4px;
  padding-left: 12px;
  font-weight: 200;
  ::placeholder {
    color: ${(A) => A.theme.color.legacy.text03};
    font-size: 14px;
    font-weight: 200;
  }
  :disabled {
    border: 1px solid ${(A) => A.theme.color.legacy.disabled};
    ::placeholder {
      color: ${(A) => A.theme.color.legacy.disabled};
    }
  }
`;
const Lc = (A) => {
  const {
    onChange: M,
    value: I
  } = A, N = G.useCallback((j) => {
    M(j.target.value);
  }, [M]);
  return /* @__PURE__ */ P(tc, {
    children: [/* @__PURE__ */ u(dc, {
      type: "number",
      value: I,
      onChange: N,
      placeholder: "0"
    }), /* @__PURE__ */ u(f, {
      textSize: "14px",
      textColor: "text03",
      isBold: !0,
      children: "%"
    })]
  });
}, tc = Y(K)`
  display: flex;
  width: 94px;
  height: 32px;
  background-color: ${(A) => A.theme.color.legacy.background01};
  border: 1px solid ${(A) => A.theme.color.legacy.interactive08};
  border-radius: 4px;
  flex-direction: row;
  padding: 0px 12px;
  justify-content: space-between;
  box-sizing: border-box;
  &:focus-within {
    border: 1px solid var(--slippage-input-border-selected);
  }
`, dc = Y(gM)`
  width: 50px;
  border: none;
  font-weight: 400;
  ::placeholder {
    color: ${(A) => A.theme.color.legacy.text03};
    font-size: 14px;
    font-weight: 200;
  }
  :disabled {
    ::placeholder {
      color: ${(A) => A.theme.color.legacy.disabled};
    }
  }
`, yc = (A) => {
  const {
    token: M,
    onClickSelectToken: I,
    onInputChange: N,
    hasInputError: j,
    inputValue: D,
    tokenBalance: c,
    fiatValue: x
  } = A, {
    getLocale: i,
    isWalletConnected: T,
    account: Z
  } = TA(), U = () => {
    !M || N(c.div(2).parseInteger().divideByDecimals(M.decimals).format(6));
  }, L = () => {
    !M || N(c.divideByDecimals(M.decimals).format());
  };
  return /* @__PURE__ */ u(FM, {
    boxType: "primary",
    children: /* @__PURE__ */ P(yA, {
      columnWidth: "full",
      columnHeight: "full",
      children: [/* @__PURE__ */ u(J, {
        rowWidth: "full",
        horizontalAlign: "flex-end",
        children: M && /* @__PURE__ */ u(f, {
          textSize: "14px",
          textColor: j ? "error" : "text02",
          maintainHeight: !0,
          children: !c.isUndefined() && T ? `${i("braveSwapBalance")} ${c.divideByDecimals(M.decimals).format(6)}` : ""
        })
      }), /* @__PURE__ */ P(J, {
        rowWidth: "full",
        verticalAlign: "center",
        children: [/* @__PURE__ */ P(J, {
          children: [/* @__PURE__ */ u(AI, {
            onClick: I,
            asset: M,
            text: M == null ? void 0 : M.symbol,
            buttonType: "primary"
          }), M && Z !== void 0 && /* @__PURE__ */ P(J, {
            children: [/* @__PURE__ */ u(SM, {
              height: 28,
              marginLeft: 8,
              marginLeftResponsive: 6,
              marginRight: 8
            }), /* @__PURE__ */ u(YA, {
              maxWidth: 570,
              children: /* @__PURE__ */ u(LN, {
                buttonText: i("braveSwapHalf"),
                onClick: U
              })
            }), /* @__PURE__ */ u(LN, {
              buttonText: i("braveSwapMax"),
              onClick: L
            })]
          })]
        }), /* @__PURE__ */ u(nj, {
          onChange: N,
          value: D,
          hasError: j,
          autoFocus: !0
        })]
      }), /* @__PURE__ */ u(J, {
        rowWidth: "full",
        horizontalAlign: "flex-end",
        children: M && /* @__PURE__ */ u(f, {
          textSize: "14px",
          textColor: "text03",
          maintainHeight: !0,
          children: x
        })
      })]
    })
  });
}, Bc = (A) => {
  const {
    onClickSelectToken: M,
    onInputChange: I,
    token: N,
    inputValue: j,
    hasInputError: D,
    isLoading: c,
    disabled: x
  } = A, {
    getLocale: i
  } = TA();
  return /* @__PURE__ */ P(yA, {
    columnWidth: "full",
    children: [/* @__PURE__ */ u(oc, {
      rowWidth: "full",
      horizontalAlign: "flex-end",
      children: c && /* @__PURE__ */ P(bA, {
        children: [/* @__PURE__ */ u(mD, {}), /* @__PURE__ */ u(f, {
          textSize: "12px",
          textColor: D ? "error" : "text03",
          isBold: !1,
          children: i("braveSwapFindingPrice")
        })]
      })
    }), /* @__PURE__ */ P(J, {
      rowWidth: "full",
      children: [/* @__PURE__ */ u(AI, {
        onClick: M,
        asset: N,
        text: N == null ? void 0 : N.symbol,
        buttonType: "secondary"
      }), /* @__PURE__ */ u(nj, {
        hasError: D,
        onChange: I,
        value: j,
        disabled: x
      })]
    }), /* @__PURE__ */ u(qA, {
      size: 6
    })]
  });
}, oc = Y(J)`
  margin-top: 2px;
  height: 4px;
`, Tj = (A) => A ? A.split(" ")[0] : "", CM = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjEiIHZpZXdCb3g9IjAgMCAyMCAyMSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0zLjk2NDg0IDE3LjQyODJDMy41NDE3OCAxNy44NTEzIDIuODU1ODUgMTcuODUxMyAyLjQzMjc4IDE3LjQyODJDMi4wMDk3MSAxNy4wMDUxIDIuMDA5NzEgMTYuMzE5MiAyLjQzMjc4IDE1Ljg5NjFMOC4wMzkwOCAxMC4yODk4TDIuNTY3MzggNC44MTgxMkMyLjE0NDMxIDQuMzk1MDUgMi4xNDQzMSAzLjcwOTEyIDIuNTY3MzggMy4yODYwNUMyLjk5MDQ1IDIuODYyOTggMy42NzYzOCAyLjg2Mjk4IDQuMDk5NDUgMy4yODYwNUw5LjU3MTE1IDguNzU3NzVMMTUuMDQyOCAzLjI4NjA1QzE1LjQ2NTkgMi44NjI5OCAxNi4xNTE4IDIuODYyOTggMTYuNTc0OSAzLjI4NjA1QzE2Ljk5OCAzLjcwOTEyIDE2Ljk5OCA0LjM5NTA1IDE2LjU3NDkgNC44MTgxMkwxMS4xMDMyIDEwLjI4OThMMTYuNzA5NSAxNS44OTYxQzE3LjEzMjYgMTYuMzE5MiAxNy4xMzI2IDE3LjAwNTEgMTYuNzA5NSAxNy40MjgyQzE2LjI4NjUgMTcuODUxMyAxNS42MDA1IDE3Ljg1MTMgMTUuMTc3NSAxNy40MjgyTDkuNTcxMTUgMTEuODIxOUwzLjk2NDg0IDE3LjQyODJaIiBmaWxsPSIjMjEyNTI5Ii8+Cjwvc3ZnPgo=", aj = (A) => {
  const {
    onSelectNetwork: M,
    onClose: I,
    isHeader: N
  } = A, {
    getLocale: j,
    supportedNetworks: D
  } = TA();
  return /* @__PURE__ */ P(Sc, {
    isHeader: N,
    children: [/* @__PURE__ */ P(sc, {
      isHeader: N,
      rowWidth: "full",
      horizontalPadding: 20,
      verticalPadding: 12,
      children: [/* @__PURE__ */ u(f, {
        textSize: "20px",
        textColor: "text01",
        isBold: !0,
        children: j("braveSwapChangeNetwork")
      }), /* @__PURE__ */ u(VA, {
        icon: CM,
        onClick: I,
        size: 20
      })]
    }), /* @__PURE__ */ u(qA, {
      size: 4
    }), D.map((c) => /* @__PURE__ */ u(gc, {
      onClick: M,
      network: c,
      isHeader: N
    }, c.chainId))]
  });
}, Sc = Y(K)`
  justify-content: flex-start;
  background-color: ${(A) => A.theme.color.legacy.background01};
  min-width: 222px;
  position: absolute;
  padding-bottom: 4px;
  z-index: 10;
  top: ${(A) => A.isHeader ? 42 : 40}px;
  box-shadow: 0px 0px 16px var(--network-selector-shadow-color);
  right: ${(A) => A.isHeader ? "unset" : "-10px"};
  border-radius: ${(A) => A.isHeader ? 16 : 4}px;
  @media screen and (max-width: 800px) {
    right: ${(A) => A.isHeader ? "0px" : "unset"};
  }
  @media screen and (max-width: 570px) {
    position: ${(A) => A.isHeader ? "fixed" : "absolute"};
    right: ${(A) => A.isHeader ? "0px" : "-20px"};
    left: ${(A) => A.isHeader ? "0px" : "unset"};
    top: ${(A) => A.isHeader ? "72px" : "40px"};
    bottom: ${(A) => A.isHeader ? "0px" : "unset"};
    width: ${(A) => A.isHeader ? "auto" : "90vw"};
    border-radius: ${(A) => A.isHeader ? "16px 16px 0px 0px" : "4px"};
  }
`, sc = Y(J)`
  display: none;
  padding-top: 24px;
  @media screen and (max-width: 570px) {
    display: ${(A) => A.isHeader ? "flex" : "none"};
  }
`, bc = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNC42NjcxIDE2SDYuNjY0MDVDNS45MjkzMiAxNiA1LjMzMTEgMTUuNDAyIDUuMzMxMSAxNC42NjY3VjExLjMzMzNDNS4zMzExIDEwLjk2NTMgNS42Mjk1NCAxMC42NjY3IDUuOTk3NTcgMTAuNjY2N0M2LjM2NTYxIDEwLjY2NjcgNi42MzU5NCAxMC45NjUzIDYuNjM1OTQgMTEuMzMzM1YxNC42NjY3SDE0LjY2NzFWMS4zMzMzM0g2LjYzNTk0VjQuNjY2NjdDNi42MzU5NCA1LjAzNDY3IDYuMzY1NjEgNS4zMzMzMyA1Ljk5NzU3IDUuMzMzMzNDNS42Mjk1NCA1LjMzMzMzIDUuMzMxMSA1LjAzNDY3IDUuMzMxMSA0LjY2NjY3VjEuMzMzMzNDNS4zMzExIDAuNTk4IDUuOTI5MzIgMCA2LjY2NDA1IDBIMTQuNjY3MUMxNS40MDI1IDAgMTYgMC41OTggMTYgMS4zMzMzM1YxNC42NjY3QzE2IDE1LjQwMiAxNS40MDI1IDE2IDE0LjY2NzEgMTZaTTIuMjc1MSA3LjMzMzMzSDExLjMyODdDMTEuNjk2NyA3LjMzMzMzIDExLjk5NTEgNy42MzIgMTEuOTk1MSA4QzExLjk5NTEgOC4zNjggMTEuNjk2NyA4LjY2NjY3IDExLjMyODcgOC42NjY2N0gyLjI3NTc3TDMuODAzNDQgMTAuMTk1M0M0LjA2Mzc0IDEwLjQ1NTMgNC4wNjM3NCAxMC44NzggMy44MDM0NCAxMS4xMzhDMy42NzI5NSAxMS4yNjggMy41MDIzMiAxMS4zMzMzIDMuMzMyMzYgMTEuMzMzM0MzLjE2MTcyIDExLjMzMzMgMi45OTEwOSAxMS4yNjggMi44NjEyOCAxMS4xMzhMMC4xOTUzOTEgOC40NzEzM0MwLjEzMzgzIDguNDEgMC4wODU2NTEgOC4zMzY2NyAwLjA1MTUyNDQgOC4yNTQ2N0MwLjAxODczNjEgOC4xNzQ2NyAwLjAwMjAwNzQ0IDguMDkgMC4wMDEzMzgzIDguMDA0NjdDMC4wMDEzMzgzIDguMDAzMzMgMCA4LjAwMTMzIDAgOEMwIDcuOTk0NjcgMC4wMDI2NzY1OSA3Ljk5MDY3IDAuMDAzMzQ1NzQgNy45ODUzM0MwLjAwNDY4NDA0IDcuOTAzMzMgMC4wMjAwNzQ0IDcuODIyIDAuMDUxNTI0NCA3Ljc0NTMzQzAuMDg1NjUxIDcuNjY0IDAuMTMzODMgNy41OSAwLjE5NjA2IDcuNTI4TDIuODYxMjggNC44NjJDMy4xMjA5MSA0LjYwMTMzIDMuNTQzMTQgNC42MDEzMyAzLjgwMzQ0IDQuODYyQzQuMDYzNzQgNS4xMjIgNC4wNjM3NCA1LjU0NDY3IDMuODAzNDQgNS44MDQ2N0wyLjI3NTEgNy4zMzMzM1oiIGZpbGw9IiM0OTUwNTciLz4KPC9zdmc+Cg==", Qc = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxOCAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNS4zNjIyIDE1LjM2NDVDMTMuNjYyNiAxNy4wNjQgMTEuNDAyMiAxOCA4Ljk5Njg5IDE4QzYuNTkyMzMgMTggNC4zMzE5MyAxNy4wNjQgMi42MzE1NCAxNS4zNjM4Qy0wLjg3NzE3OSAxMS44NTQ1IC0wLjg3NzE3OSA2LjE0NDc1IDIuNjMxNTQgMi42MzYyNUM0LjMzMTkzIDAuOTM2IDYuNTkyMzMgMCA4Ljk5Njg5IDBDMTEuNDAyMiAwIDEzLjY2MjYgMC45MzYgMTUuMzYyMiAyLjYzNjI1QzE3LjA2MzQgNC4zMzU3NSAxOCA2LjU5NjI1IDE4IDlDMTggMTEuNDAzNyAxNy4wNjM0IDEzLjY2NDMgMTUuMzYyMiAxNS4zNjQ1Wk0xNC4zMDE4IDMuNjk2NzVDMTIuODg1MiAyLjI4IDExLjAwMTQgMS41IDguOTk2ODkgMS41QzYuOTkzMDkgMS41IDUuMTA5MyAyLjI4IDMuNjkyNjggMy42OTY3NUMwLjc2ODEyMSA2LjYyMSAwLjc2ODEyMSAxMS4zNzkgMy42OTI2OCAxNC4zMDMyQzUuMTA5MyAxNS43MiA2Ljk5MzA5IDE2LjUgOC45OTY4OSAxNi41QzExLjAwMTQgMTYuNSAxMi44ODUyIDE1LjcyIDE0LjMwMTggMTQuMzAzMkMxNS43MTkyIDEyLjg4NzIgMTYuNDk5NiAxMS4wMDMzIDE2LjQ5OTYgOUMxNi40OTk2IDYuOTk2NzUgMTUuNzE5MiA1LjExMzUgMTQuMzAxOCAzLjY5Njc1Wk0xMC40OTggMTQuMjVINy40OTcyNUM3LjA4MzY2IDE0LjI1IDYuNzQ3MDUgMTMuOTE0IDYuNzQ3MDUgMTMuNUM2Ljc0NzA1IDEzLjA4NiA3LjA4MzY2IDEyLjc1IDcuNDk3MjUgMTIuNzVIOC4yNDc0NVY5Ljc1SDcuNDk3MjVDNy4wODM2NiA5Ljc1IDYuNzQ3MDUgOS40MTQgNi43NDcwNSA5QzYuNzQ3MDUgOC41ODYgNy4wODM2NiA4LjI1IDcuNDk3MjUgOC4yNUg4Ljk5NzY0QzkuNDExOTkgOC4yNSA5Ljc0Nzg0IDguNTg2IDkuNzQ3ODQgOVYxMi43NUgxMC40OThDMTAuOTEyNCAxMi43NSAxMS4yNDgyIDEzLjA4NiAxMS4yNDgyIDEzLjVDMTEuMjQ4MiAxMy45MTQgMTAuOTEyNCAxNC4yNSAxMC40OTggMTQuMjVaTTguOTk3NjQgNi43NUM4LjE3MDQ2IDYuNzUgNy40OTcyNSA2LjA3NjUgNy40OTcyNSA1LjI0OTI1QzcuNDk3MjUgNC40MjI3NSA4LjE3MDQ2IDMuNzUgOC45OTc2NCAzLjc1QzkuODI1NTcgMy43NSAxMC40OTggNC40MjI3NSAxMC40OTggNS4yNDkyNUMxMC40OTggNi4wNzY1IDkuODI1NTcgNi43NSA4Ljk5NzY0IDYuNzVaIiBmaWxsPSIjMjEyNTI5Ii8+Cjwvc3ZnPgo=", Gc = (A) => {
  const {
    onClick: M,
    address: I,
    name: N
  } = A, j = G.useMemo(() => sM.exports.create({
    seed: I.toLowerCase() || "",
    size: 8,
    scale: 16
  }).toDataURL(), [I]);
  return /* @__PURE__ */ P(Zc, {
    onClick: M,
    children: [/* @__PURE__ */ u(Uc, {
      orb: j
    }), " ", /* @__PURE__ */ u(rc, {
      textSize: "14px",
      isBold: !0,
      children: N
    }), /* @__PURE__ */ u(oA, {
      size: 4
    }), /* @__PURE__ */ u(f, {
      textSize: "14px",
      textColor: "text03",
      isBold: !1,
      children: Cj(I)
    })]
  });
}, Zc = Y(BA)`
  --account-text-color: ${(A) => A.theme.color.legacy.text02};
  display: flex;
  justify-content: flex-start;
  background-color: ${(A) => A.theme.color.legacy.background01};
  padding: 8px 10px;
  width: 100%;
  &:hover {
    --account-text-color: ${(A) => A.theme.color.legacy.text01};
  }
`, Uc = Y(K)`
  width: 24px;
  height: 24px;
  border-radius: 100%;
  background-image: url(${(A) => A.orb});
  background-size: cover;
  margin-right: 8px;
  @media screen and (max-width: 570px) {
    width: 40px;
    height: 40px;
    margin-right: 16px;
  }
`, rc = Y(f)`
  color: var(--account-text-color);
`, tN = (A) => {
  const {
    onClick: M,
    icon: I,
    text: N
  } = A;
  return /* @__PURE__ */ P(Oc, {
    onClick: M,
    children: [/* @__PURE__ */ u(Rc, {
      size: 16,
      icon: I
    }), N]
  });
}, Oc = Y(BA)`
  display: flex;
  justify-content: flex-start;
  font-weight: 500;
  font-size: 14px;
  color: ${(A) => A.theme.color.legacy.text02};
  width: 100%;
  margin: 0px;
  margin-right: 16px;
  padding: 12px 4px;
`, Rc = Y(OA)`
  background-color: ${(A) => A.theme.color.legacy.text02};
  margin-right: 10px;
`, Yc = (A) => {
  const {
    onHideModal: M,
    refreshBlockchainState: I
  } = A, {
    getLocale: N,
    walletAccounts: j,
    network: D,
    switchAccount: c,
    disconnectWallet: x
  } = TA(), i = G.useMemo(() => j.filter((L) => L.coin === D.coin), [j, D]), T = G.useCallback(async (L) => {
    await c(L), M(), await I({
      account: L
    });
  }, [M, c, I]), Z = G.useCallback(async () => {
    x && await x(), await M();
  }, [x, M]), U = G.useCallback(() => {
    window.open("https://support.brave.com/hc/en-us/articles/8155407080845-Brave-Swaps-FAQ");
  }, []);
  return /* @__PURE__ */ P(Hc, {
    children: [/* @__PURE__ */ P(yA, {
      columnWidth: "full",
      verticalPadding: 12,
      horizontalPadding: 6,
      horizontalAlign: "flex-start",
      verticalAlign: "flex-start",
      children: [/* @__PURE__ */ P(J, {
        verticalPaddingResponsive: 8,
        horizontalPadding: 10,
        rowWidth: "full",
        marginBottom: 4,
        children: [/* @__PURE__ */ u(J, {
          children: /* @__PURE__ */ u(mc, {
            textSize: "12px",
            responsiveTextSize: "16px",
            textColor: "text02",
            isBold: !1,
            children: N("braveSwapAccounts")
          })
        }), /* @__PURE__ */ u(oM, {
          maxWidth: 570,
          children: /* @__PURE__ */ u(VA, {
            icon: CM,
            onClick: M,
            size: 20
          })
        })]
      }), i.map((L) => /* @__PURE__ */ u(Gc, {
        address: L.address,
        name: L.name,
        onClick: () => T(L)
      }, L.address))]
    }), /* @__PURE__ */ u(HI, {}), /* @__PURE__ */ P(yA, {
      columnWidth: "full",
      verticalPadding: 4,
      horizontalPadding: 16,
      horizontalAlign: "flex-start",
      verticalAlign: "flex-start",
      children: [x && /* @__PURE__ */ u(tN, {
        text: N("braveSwapDisconnectWallet"),
        icon: bc,
        onClick: Z
      }), /* @__PURE__ */ u(tN, {
        text: N("braveSwapHelpCenter"),
        icon: Qc,
        onClick: U
      })]
    })]
  });
}, Hc = Y(K)`
  background-color: ${(A) => A.theme.color.legacy.background01};
  min-width: 280px;
  position: absolute;
  padding-bottom: 4px;
  z-index: 10;
  top: 42px;
  box-shadow: 0px 0px 16px var(--network-selector-shadow-color);
  right: 0px;
  border-radius: 16px;
  white-space: nowrap;
  @media screen and (max-width: 570px) {
    position: fixed;
    right: 0px;
    left: 0px;
    bottom: 0px;
    top: unset;
    width: auto;
    height: auto;
    border-radius: 16px 16px 0px 0px;
  }
`, mc = Y(f)`
  @media screen and (max-width: 570px) {
    font-weight: 600;
  }
`, Pc = (A) => {
  const {
    refreshBlockchainState: M
  } = A, {
    network: I,
    supportedNetworks: N,
    isWalletConnected: j,
    connectWallet: D,
    switchNetwork: c,
    getLocale: x
  } = TA(), [i, T] = G.useState(!1), [Z, U] = G.useState(!1), L = G.useRef(null), Q = G.useRef(null), p = G.useCallback(async (o) => {
    const y = await c(o);
    T(!1), await M({
      network: o,
      account: y
    });
  }, [c, M]), E = G.useCallback(() => {
    const o = window.localStorage.getItem(WA), y = window.matchMedia("(prefers-color-scheme: dark)").matches ? "light" : "dark";
    if (o === null) {
      document.documentElement.setAttribute("data-theme", y), window.localStorage.setItem(WA, y);
      return;
    }
    if (o === "light") {
      document.documentElement.setAttribute("data-theme", "dark"), window.localStorage.setItem(WA, "dark");
      return;
    }
    document.documentElement.setAttribute("data-theme", "light"), window.localStorage.setItem(WA, "light");
  }, []), {
    getNetworkFeeFiatEstimate: r
  } = wj();
  BM(L, () => T(!1), i), BM(Q, () => U(!1), Z);
  const b = G.useMemo(() => N.some((o) => o.chainId === I.chainId), [I, N]), l = G.useCallback(async () => {
    if (!j && D) {
      await D();
      return;
    }
    U((o) => !o);
  }, [j, D]);
  return /* @__PURE__ */ P(kc, {
    children: [/* @__PURE__ */ P(J, {
      rowHeight: "full",
      verticalAlign: "center",
      children: [/* @__PURE__ */ u(pc, {}), /* @__PURE__ */ P(YA, {
        maxWidth: 570,
        children: [/* @__PURE__ */ u(SM, {
          height: 22,
          marginRight: 12,
          dividerTheme: "darker"
        }), /* @__PURE__ */ u(f, {
          textSize: "18px",
          textColor: "text02",
          isBold: !0,
          children: x("braveSwap")
        })]
      })]
    }), /* @__PURE__ */ P(J, {
      children: [/* @__PURE__ */ u(vc, {
        children: /* @__PURE__ */ u(cc, {
          onClick: E
        })
      }), /* @__PURE__ */ P(dN, {
        ref: L,
        children: [/* @__PURE__ */ u(AI, {
          onClick: () => T((o) => !o),
          text: Tj(I.chainName),
          network: I,
          buttonSize: "medium",
          hasBackground: !0,
          hasShadow: !0,
          networkFeeFiatValue: r(I),
          isHeader: !0,
          networkNotSupported: !b
        }), i && /* @__PURE__ */ u(aj, {
          isHeader: !0,
          onSelectNetwork: p,
          onClose: () => T(!1)
        })]
      }), /* @__PURE__ */ u(oA, {
        size: 15
      }), /* @__PURE__ */ P(dN, {
        ref: Q,
        children: [/* @__PURE__ */ u(ec, {
          onClick: l
        }), Z && /* @__PURE__ */ u(Yc, {
          refreshBlockchainState: M,
          onHideModal: () => U(!1)
        })]
      })]
    })]
  });
}, kc = Y(K)`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  padding: 16px 32px 0px 32px;
  margin-bottom: 45px;
  top: 0;
  width: 100%;
  box-sizing: border-box;
  position: fixed;
  z-index: 10;
  @media screen and (max-width: 570px) {
    padding: 20px 16px 0px 16px;
    position: absolute;
  }
`, pc = Y(K)`
  height: 30px;
  width: 100px;
  background-image: var(--header-icon);
  background-size: cover;
  margin: 0px 12px 4px 0px;
  @media screen and (max-width: 570px) {
    margin: 0px 0px 4px 0px;
  }
`, dN = Y(K)`
  display: flex;
  position: relative;
`, vc = Y(K)`
  @media screen and (max-width: 570px) {
    display: none;
  }
`, Wc = (A) => {
  var U;
  const {
    children: M,
    refreshBlockchainState: I,
    showPrivacyModal: N
  } = A, {
    network: j,
    getLocale: D
  } = TA(), [c, x] = G.useState(0), [i, T] = G.useState(0.3), Z = G.createRef();
  return G.useEffect(() => {
    var L, Q;
    x((Q = (L = Z == null ? void 0 : Z.current) == null ? void 0 : L.clientHeight) != null ? Q : 0);
  }, [Z]), G.useEffect(() => {
    T(0.6), setTimeout(() => T(0.3), 1e3);
  }, [j]), /* @__PURE__ */ P(Vc, {
    children: [/* @__PURE__ */ u(Pc, {
      refreshBlockchainState: I
    }), /* @__PURE__ */ u(hc, {
      ref: Z,
      children: M
    }), /* @__PURE__ */ u(Fc, {
      onClick: N,
      children: D("braveSwapPrivacyPolicy")
    }), /* @__PURE__ */ u(Xc, {
      height: c,
      network: (U = j.chainId) != null ? U : "",
      backgroundOpacity: i
    })]
  });
}, Vc = Y(K)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 100px 0px;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow-y: scroll;
  position: absolute;
  background-color: ${(A) => A.theme.color.legacy.background01};
  @media (prefers-color-scheme: dark) {
    background-color: ${(A) => A.theme.color.legacy.background02};
  @media screen and (max-width: 570px) {
    padding: 80px 0px;
  }
}
`, Xc = Y(K)`
  /* Solana */
  --0x65: linear-gradient(
    125deg,
    rgb(33, 178, 164) 0%,
    rgb(93, 124, 209) 50%,
    rgb(122, 96, 232) 100%
  );
  /* Ethereum */
  --0x1: linear-gradient(125deg, rgb(98, 126, 234) 0%, rgb(129, 152, 238) 100%);
  /* Polygon */
  --0x89: linear-gradient(
    125deg,
    rgb(130, 71, 229) 0%,
    rgb(93, 124, 209) 50%,
    rgb(130, 71, 229) 100%
  );
  /* Avalanche */
  --0xa86a: linear-gradient(
    125deg,
    rgb(232, 65, 66) 0%,
    rgb(233, 175, 176) 50%,
    rgb(232, 65, 66) 100%
  );
  /* Optimism */
  --0xa: linear-gradient(
    125deg,
    rgb(252, 141, 153) 0%,
    rgb(247, 211, 215) 50%,
    rgb(254, 4, 32) 100%
  );
  /* Celo */
  --0xa4ec: linear-gradient(
    125deg,
    rgb(252, 204, 94) 0%,
    rgb(238, 255, 143) 50%,
    rgb(54, 210, 129) 100%
  );
  /* Binance */
  --0x38: linear-gradient(
    125deg,
    rgb(243, 186, 47) 0%,
    rgb(255, 219, 133) 50%,
    rgb(243, 186, 47) 100%
  );
  /* Fantom */
  --0xfa: linear-gradient(
    125deg,
    rgb(19, 181, 236) 0%,
    rgb(19, 181, 236) 50%,
    rgb(19, 181, 236) 100%
  );
  filter: blur(150px);
  width: 512px;
  height: ${(A) => A.height}px;
  opacity: ${(A) => A.backgroundOpacity};
  transition-delay: 0s;
  transition-duration: 1s;
  transition-timing-function: ease;
  position: absolute;
  z-index: 8;
  background-image: var(--${(A) => A.network});
  @media screen and (max-width: 570px) {
    width: 100%;
  }
`, hc = Y(K)`
  background-color: ${(A) => A.theme.color.legacy.background01};
  border-radius: 24px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  justify-content: flex-start;
  padding: 16px;
  width: 512px;
  position: relative;
  z-index: 9;
  margin-bottom: 10px;
  @media screen and (max-width: 570px) {
    width: 92%;
    padding: 16px 8px;
  }
`, Fc = Y(BA)`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: ${(A) => A.theme.color.legacy.interactive05};
  @media (prefers-color-scheme: dark) {
    color: ${(A) => A.theme.color.legacy.interactive06};
  }
`, fc = (A) => {
  const {
    onSearchChanged: M,
    refreshBlockchainState: I,
    searchValue: N,
    networkSelectorDisabled: j
  } = A, {
    getLocale: D,
    network: c,
    switchNetwork: x
  } = TA(), [i, T] = G.useState(!1), Z = G.useCallback(async (U) => {
    const L = await x(U);
    T(!1), await I({
      network: U,
      account: L
    });
  }, [x, I]);
  return /* @__PURE__ */ P(Jc, {
    children: [/* @__PURE__ */ u(Tc, {
      placeholder: D("braveSwapSearchToken"),
      autoFocus: !1,
      onChange: M,
      value: N
    }), /* @__PURE__ */ P(YA, {
      maxWidth: 570,
      children: [/* @__PURE__ */ u(SM, {
        marginRight: 8,
        height: 24
      }), /* @__PURE__ */ P(Kc, {
        children: [/* @__PURE__ */ u(AI, {
          network: c,
          onClick: () => T((U) => !U),
          text: Tj(c.chainName),
          buttonSize: "small",
          disabled: j
        }), i && /* @__PURE__ */ u(aj, {
          onSelectNetwork: Z
        })]
      })]
    })]
  });
}, Jc = Y(K)`
  background-color: ${(A) => A.theme.color.legacy.background01};
  border: 1px solid ${(A) => A.theme.color.legacy.disabled};
  border-radius: 4px;
  box-sizing: border-box;
  flex-direction: row;
  justify-content: center;
  padding: 4px 8px 4px 12px;
  width: 100%;
  min-height: 40px;
`, Kc = Y(K)`
  display: flex;
  position: relative;
`, Ej = G.forwardRef((A, M) => {
  const {
    children: I,
    modalHeight: N,
    modalBackground: j
  } = A;
  return /* @__PURE__ */ u(qc, {
    children: /* @__PURE__ */ u(_c, {
      ref: M,
      modalHeight: N,
      modalBackground: j,
      children: I
    })
  });
}), qc = Y(K)`
  background-color: var(--standard-modal-background-color);
  bottom: 0%;
  left: 0%;
  position: absolute;
  right: 0%;
  top: 0%;
  z-index: 10;
`, _c = Y(K)`
  background-color: ${(A) => A.modalBackground === "background02" ? A.theme.color.legacy.background02 : A.theme.color.legacy.background01};
  border-radius: 22px;
  box-shadow: var(--standard-modal-box-shadow);
  box-sizing: border-box;
  flex-direction: column;
  height: ${(A) => A.modalHeight === "full" ? "85%" : A.modalHeight === "dynamic" ? "unset" : "520px"};
  justify-content: flex-start;
  overflow: hidden;
  position: absolute;
  width: 440px;
  z-index: 20;
  @media screen and (max-width: 570px) {
    position: fixed;
    right: 0px;
    left: 0px;
    top: 72px;
    bottom: 0px;
    width: auto;
    height: auto;
    border-radius: 16px 16px 0px 0px;
  }
`;
function BI() {
  return BI = Object.assign ? Object.assign.bind() : function(A) {
    for (var M = 1; M < arguments.length; M++) {
      var I = arguments[M];
      for (var N in I)
        Object.prototype.hasOwnProperty.call(I, N) && (A[N] = I[N]);
    }
    return A;
  }, BI.apply(this, arguments);
}
function yN(A) {
  if (A === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return A;
}
function oI(A, M) {
  return oI = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(N, j) {
    return N.__proto__ = j, N;
  }, oI(A, M);
}
function $c(A, M) {
  A.prototype = Object.create(M.prototype), A.prototype.constructor = A, oI(A, M);
}
var BN = Number.isNaN || function(M) {
  return typeof M == "number" && M !== M;
};
function Ai(A, M) {
  return !!(A === M || BN(A) && BN(M));
}
function Mi(A, M) {
  if (A.length !== M.length)
    return !1;
  for (var I = 0; I < A.length; I++)
    if (!Ai(A[I], M[I]))
      return !1;
  return !0;
}
function xI(A, M) {
  M === void 0 && (M = Mi);
  var I, N = [], j, D = !1;
  function c() {
    for (var x = [], i = 0; i < arguments.length; i++)
      x[i] = arguments[i];
    return D && I === this && M(x, N) || (j = A.apply(this, x), D = !0, I = this, N = x), j;
  }
  return c;
}
var Ii = typeof performance == "object" && typeof performance.now == "function", oN = Ii ? function() {
  return performance.now();
} : function() {
  return Date.now();
};
function SN(A) {
  cancelAnimationFrame(A.id);
}
function Ni(A, M) {
  var I = oN();
  function N() {
    oN() - I >= M ? A.call(null) : j.id = requestAnimationFrame(N);
  }
  var j = {
    id: requestAnimationFrame(N)
  };
  return j;
}
var uI = -1;
function sN(A) {
  if (A === void 0 && (A = !1), uI === -1 || A) {
    var M = document.createElement("div"), I = M.style;
    I.width = "50px", I.height = "50px", I.overflow = "scroll", document.body.appendChild(M), uI = M.offsetWidth - M.clientWidth, document.body.removeChild(M);
  }
  return uI;
}
var uM = null;
function bN(A) {
  if (A === void 0 && (A = !1), uM === null || A) {
    var M = document.createElement("div"), I = M.style;
    I.width = "50px", I.height = "50px", I.overflow = "scroll", I.direction = "rtl";
    var N = document.createElement("div"), j = N.style;
    return j.width = "100px", j.height = "100px", M.appendChild(N), document.body.appendChild(M), M.scrollLeft > 0 ? uM = "positive-descending" : (M.scrollLeft = 1, M.scrollLeft === 0 ? uM = "negative" : uM = "positive-ascending"), document.body.removeChild(M), uM;
  }
  return uM;
}
process.env.NODE_ENV;
var ji = 150, gi = function(M, I) {
  return M;
}, WM = null, VM = null;
process.env.NODE_ENV !== "production" && typeof window < "u" && typeof window.WeakSet < "u" && (WM = /* @__PURE__ */ new WeakSet(), VM = /* @__PURE__ */ new WeakSet());
function Di(A) {
  var M, I = A.getItemOffset, N = A.getEstimatedTotalSize, j = A.getItemSize, D = A.getOffsetForIndexAndAlignment, c = A.getStartIndexForOffset, x = A.getStopIndexForStartIndex, i = A.initInstanceProps, T = A.shouldResetStyleCacheOnItemSizeChange, Z = A.validateProps;
  return M = /* @__PURE__ */ function(U) {
    $c(L, U);
    function L(p) {
      var E;
      return E = U.call(this, p) || this, E._instanceProps = i(E.props, yN(E)), E._outerRef = void 0, E._resetIsScrollingTimeoutId = null, E.state = {
        instance: yN(E),
        isScrolling: !1,
        scrollDirection: "forward",
        scrollOffset: typeof E.props.initialScrollOffset == "number" ? E.props.initialScrollOffset : 0,
        scrollUpdateWasRequested: !1
      }, E._callOnItemsRendered = void 0, E._callOnItemsRendered = xI(function(r, b, l, o) {
        return E.props.onItemsRendered({
          overscanStartIndex: r,
          overscanStopIndex: b,
          visibleStartIndex: l,
          visibleStopIndex: o
        });
      }), E._callOnScroll = void 0, E._callOnScroll = xI(function(r, b, l) {
        return E.props.onScroll({
          scrollDirection: r,
          scrollOffset: b,
          scrollUpdateWasRequested: l
        });
      }), E._getItemStyle = void 0, E._getItemStyle = function(r) {
        var b = E.props, l = b.direction, o = b.itemSize, y = b.layout, O = E._getItemStyleCache(T && o, T && y, T && l), m;
        if (O.hasOwnProperty(r))
          m = O[r];
        else {
          var H = I(E.props, r, E._instanceProps), g = j(E.props, r, E._instanceProps), z = l === "horizontal" || y === "horizontal", e = l === "rtl", n = z ? H : 0;
          O[r] = m = {
            position: "absolute",
            left: e ? void 0 : n,
            right: e ? n : void 0,
            top: z ? 0 : H,
            height: z ? "100%" : g,
            width: z ? g : "100%"
          };
        }
        return m;
      }, E._getItemStyleCache = void 0, E._getItemStyleCache = xI(function(r, b, l) {
        return {};
      }), E._onScrollHorizontal = function(r) {
        var b = r.currentTarget, l = b.clientWidth, o = b.scrollLeft, y = b.scrollWidth;
        E.setState(function(O) {
          if (O.scrollOffset === o)
            return null;
          var m = E.props.direction, H = o;
          if (m === "rtl")
            switch (bN()) {
              case "negative":
                H = -o;
                break;
              case "positive-descending":
                H = y - l - o;
                break;
            }
          return H = Math.max(0, Math.min(H, y - l)), {
            isScrolling: !0,
            scrollDirection: O.scrollOffset < o ? "forward" : "backward",
            scrollOffset: H,
            scrollUpdateWasRequested: !1
          };
        }, E._resetIsScrollingDebounced);
      }, E._onScrollVertical = function(r) {
        var b = r.currentTarget, l = b.clientHeight, o = b.scrollHeight, y = b.scrollTop;
        E.setState(function(O) {
          if (O.scrollOffset === y)
            return null;
          var m = Math.max(0, Math.min(y, o - l));
          return {
            isScrolling: !0,
            scrollDirection: O.scrollOffset < m ? "forward" : "backward",
            scrollOffset: m,
            scrollUpdateWasRequested: !1
          };
        }, E._resetIsScrollingDebounced);
      }, E._outerRefSetter = function(r) {
        var b = E.props.outerRef;
        E._outerRef = r, typeof b == "function" ? b(r) : b != null && typeof b == "object" && b.hasOwnProperty("current") && (b.current = r);
      }, E._resetIsScrollingDebounced = function() {
        E._resetIsScrollingTimeoutId !== null && SN(E._resetIsScrollingTimeoutId), E._resetIsScrollingTimeoutId = Ni(E._resetIsScrolling, ji);
      }, E._resetIsScrolling = function() {
        E._resetIsScrollingTimeoutId = null, E.setState({
          isScrolling: !1
        }, function() {
          E._getItemStyleCache(-1, null);
        });
      }, E;
    }
    L.getDerivedStateFromProps = function(E, r) {
      return ci(E, r), Z(E), null;
    };
    var Q = L.prototype;
    return Q.scrollTo = function(E) {
      E = Math.max(0, E), this.setState(function(r) {
        return r.scrollOffset === E ? null : {
          scrollDirection: r.scrollOffset < E ? "forward" : "backward",
          scrollOffset: E,
          scrollUpdateWasRequested: !0
        };
      }, this._resetIsScrollingDebounced);
    }, Q.scrollToItem = function(E, r) {
      r === void 0 && (r = "auto");
      var b = this.props, l = b.itemCount, o = b.layout, y = this.state.scrollOffset;
      E = Math.max(0, Math.min(E, l - 1));
      var O = 0;
      if (this._outerRef) {
        var m = this._outerRef;
        o === "vertical" ? O = m.scrollWidth > m.clientWidth ? sN() : 0 : O = m.scrollHeight > m.clientHeight ? sN() : 0;
      }
      this.scrollTo(D(this.props, E, r, y, this._instanceProps, O));
    }, Q.componentDidMount = function() {
      var E = this.props, r = E.direction, b = E.initialScrollOffset, l = E.layout;
      if (typeof b == "number" && this._outerRef != null) {
        var o = this._outerRef;
        r === "horizontal" || l === "horizontal" ? o.scrollLeft = b : o.scrollTop = b;
      }
      this._callPropsCallbacks();
    }, Q.componentDidUpdate = function() {
      var E = this.props, r = E.direction, b = E.layout, l = this.state, o = l.scrollOffset, y = l.scrollUpdateWasRequested;
      if (y && this._outerRef != null) {
        var O = this._outerRef;
        if (r === "horizontal" || b === "horizontal")
          if (r === "rtl")
            switch (bN()) {
              case "negative":
                O.scrollLeft = -o;
                break;
              case "positive-ascending":
                O.scrollLeft = o;
                break;
              default:
                var m = O.clientWidth, H = O.scrollWidth;
                O.scrollLeft = H - m - o;
                break;
            }
          else
            O.scrollLeft = o;
        else
          O.scrollTop = o;
      }
      this._callPropsCallbacks();
    }, Q.componentWillUnmount = function() {
      this._resetIsScrollingTimeoutId !== null && SN(this._resetIsScrollingTimeoutId);
    }, Q.render = function() {
      var E = this.props, r = E.children, b = E.className, l = E.direction, o = E.height, y = E.innerRef, O = E.innerElementType, m = E.innerTagName, H = E.itemCount, g = E.itemData, z = E.itemKey, e = z === void 0 ? gi : z, n = E.layout, a = E.outerElementType, d = E.outerTagName, B = E.style, C = E.useIsScrolling, w = E.width, S = this.state.isScrolling, t = l === "horizontal" || n === "horizontal", R = t ? this._onScrollHorizontal : this._onScrollVertical, X = this._getRangeToRender(), V = X[0], _ = X[1], eA = [];
      if (H > 0)
        for (var cA = V; cA <= _; cA++)
          eA.push(kM(r, {
            data: g,
            key: e(cA, g),
            index: cA,
            isScrolling: C ? S : void 0,
            style: this._getItemStyle(cA)
          }));
      var q = N(this.props, this._instanceProps);
      return kM(a || d || "div", {
        className: b,
        onScroll: R,
        ref: this._outerRefSetter,
        style: BI({
          position: "relative",
          height: o,
          width: w,
          overflow: "auto",
          WebkitOverflowScrolling: "touch",
          willChange: "transform",
          direction: l
        }, B)
      }, kM(O || m || "div", {
        children: eA,
        ref: y,
        style: {
          height: t ? "100%" : q,
          pointerEvents: S ? "none" : void 0,
          width: t ? q : "100%"
        }
      }));
    }, Q._callPropsCallbacks = function() {
      if (typeof this.props.onItemsRendered == "function") {
        var E = this.props.itemCount;
        if (E > 0) {
          var r = this._getRangeToRender(), b = r[0], l = r[1], o = r[2], y = r[3];
          this._callOnItemsRendered(b, l, o, y);
        }
      }
      if (typeof this.props.onScroll == "function") {
        var O = this.state, m = O.scrollDirection, H = O.scrollOffset, g = O.scrollUpdateWasRequested;
        this._callOnScroll(m, H, g);
      }
    }, Q._getRangeToRender = function() {
      var E = this.props, r = E.itemCount, b = E.overscanCount, l = this.state, o = l.isScrolling, y = l.scrollDirection, O = l.scrollOffset;
      if (r === 0)
        return [0, 0, 0, 0];
      var m = c(this.props, O, this._instanceProps), H = x(this.props, m, O, this._instanceProps), g = !o || y === "backward" ? Math.max(1, b) : 1, z = !o || y === "forward" ? Math.max(1, b) : 1;
      return [Math.max(0, m - g), Math.max(0, Math.min(r - 1, H + z)), m, H];
    }, L;
  }(XN), M.defaultProps = {
    direction: "ltr",
    itemData: void 0,
    layout: "vertical",
    overscanCount: 2,
    useIsScrolling: !1
  }, M;
}
var ci = function(M, I) {
  var N = M.children, j = M.direction, D = M.height, c = M.layout, x = M.innerTagName, i = M.outerTagName, T = M.width, Z = I.instance;
  if (process.env.NODE_ENV !== "production") {
    (x != null || i != null) && VM && !VM.has(Z) && (VM.add(Z), console.warn("The innerTagName and outerTagName props have been deprecated. Please use the innerElementType and outerElementType props instead."));
    var U = j === "horizontal" || c === "horizontal";
    switch (j) {
      case "horizontal":
      case "vertical":
        WM && !WM.has(Z) && (WM.add(Z), console.warn('The direction prop should be either "ltr" (default) or "rtl". Please use the layout prop to specify "vertical" (default) or "horizontal" orientation.'));
        break;
      case "ltr":
      case "rtl":
        break;
      default:
        throw Error('An invalid "direction" prop has been specified. Value should be either "ltr" or "rtl". ' + ('"' + j + '" was specified.'));
    }
    switch (c) {
      case "horizontal":
      case "vertical":
        break;
      default:
        throw Error('An invalid "layout" prop has been specified. Value should be either "horizontal" or "vertical". ' + ('"' + c + '" was specified.'));
    }
    if (N == null)
      throw Error('An invalid "children" prop has been specified. Value should be a React component. ' + ('"' + (N === null ? "null" : typeof N) + '" was specified.'));
    if (U && typeof T != "number")
      throw Error('An invalid "width" prop has been specified. Horizontal lists must specify a number for width. ' + ('"' + (T === null ? "null" : typeof T) + '" was specified.'));
    if (!U && typeof D != "number")
      throw Error('An invalid "height" prop has been specified. Vertical lists must specify a number for height. ' + ('"' + (D === null ? "null" : typeof D) + '" was specified.'));
  }
}, ii = 50, lM = function(M, I, N) {
  var j = M, D = j.itemSize, c = N.itemMetadataMap, x = N.lastMeasuredIndex;
  if (I > x) {
    var i = 0;
    if (x >= 0) {
      var T = c[x];
      i = T.offset + T.size;
    }
    for (var Z = x + 1; Z <= I; Z++) {
      var U = D(Z);
      c[Z] = {
        offset: i,
        size: U
      }, i += U;
    }
    N.lastMeasuredIndex = I;
  }
  return c[I];
}, zi = function(M, I, N) {
  var j = I.itemMetadataMap, D = I.lastMeasuredIndex, c = D > 0 ? j[D].offset : 0;
  return c >= N ? Lj(M, I, D, 0, N) : ei(M, I, Math.max(0, D), N);
}, Lj = function(M, I, N, j, D) {
  for (; j <= N; ) {
    var c = j + Math.floor((N - j) / 2), x = lM(M, c, I).offset;
    if (x === D)
      return c;
    x < D ? j = c + 1 : x > D && (N = c - 1);
  }
  return j > 0 ? j - 1 : 0;
}, ei = function(M, I, N, j) {
  for (var D = M.itemCount, c = 1; N < D && lM(M, N, I).offset < j; )
    N += c, c *= 2;
  return Lj(M, I, Math.min(N, D - 1), Math.floor(N / 2), j);
}, QN = function(M, I) {
  var N = M.itemCount, j = I.itemMetadataMap, D = I.estimatedItemSize, c = I.lastMeasuredIndex, x = 0;
  if (c >= N && (c = N - 1), c >= 0) {
    var i = j[c];
    x = i.offset + i.size;
  }
  var T = N - c - 1, Z = T * D;
  return x + Z;
}, xi = /* @__PURE__ */ Di({
  getItemOffset: function(M, I, N) {
    return lM(M, I, N).offset;
  },
  getItemSize: function(M, I, N) {
    return N.itemMetadataMap[I].size;
  },
  getEstimatedTotalSize: QN,
  getOffsetForIndexAndAlignment: function(M, I, N, j, D, c) {
    var x = M.direction, i = M.height, T = M.layout, Z = M.width, U = x === "horizontal" || T === "horizontal", L = U ? Z : i, Q = lM(M, I, D), p = QN(M, D), E = Math.max(0, Math.min(p - L, Q.offset)), r = Math.max(0, Q.offset - L + Q.size + c);
    switch (N === "smart" && (j >= r - L && j <= E + L ? N = "auto" : N = "center"), N) {
      case "start":
        return E;
      case "end":
        return r;
      case "center":
        return Math.round(r + (E - r) / 2);
      case "auto":
      default:
        return j >= r && j <= E ? j : j < r ? r : E;
    }
  },
  getStartIndexForOffset: function(M, I, N) {
    return zi(M, N, I);
  },
  getStopIndexForStartIndex: function(M, I, N, j) {
    for (var D = M.direction, c = M.height, x = M.itemCount, i = M.layout, T = M.width, Z = D === "horizontal" || i === "horizontal", U = Z ? T : c, L = lM(M, I, j), Q = N + U, p = L.offset + L.size, E = I; E < x - 1 && p < Q; )
      E++, p += lM(M, E, j).size;
    return E;
  },
  initInstanceProps: function(M, I) {
    var N = M, j = N.estimatedItemSize, D = {
      itemMetadataMap: {},
      estimatedItemSize: j || ii,
      lastMeasuredIndex: -1
    };
    return I.resetAfterIndex = function(c, x) {
      x === void 0 && (x = !0), D.lastMeasuredIndex = Math.min(D.lastMeasuredIndex, c - 1), I._getItemStyleCache(-1), x && I.forceUpdate();
    }, D;
  },
  shouldResetStyleCacheOnItemSizeChange: !1,
  validateProps: function(M) {
    var I = M.itemSize;
    if (process.env.NODE_ENV !== "production" && typeof I != "function")
      throw Error('An invalid "itemSize" prop has been specified. Value should be a function. ' + ('"' + (I === null ? "null" : typeof I) + '" was specified.'));
  }
}), ui = function(A, M) {
  if (!(A instanceof M))
    throw new TypeError("Cannot call a class as a function");
}, li = function() {
  function A(M, I) {
    for (var N = 0; N < I.length; N++) {
      var j = I[N];
      j.enumerable = j.enumerable || !1, j.configurable = !0, "value" in j && (j.writable = !0), Object.defineProperty(M, j.key, j);
    }
  }
  return function(M, I, N) {
    return I && A(M.prototype, I), N && A(M, N), M;
  };
}(), wi = Object.assign || function(A) {
  for (var M = 1; M < arguments.length; M++) {
    var I = arguments[M];
    for (var N in I)
      Object.prototype.hasOwnProperty.call(I, N) && (A[N] = I[N]);
  }
  return A;
}, Ci = function(A, M) {
  if (typeof M != "function" && M !== null)
    throw new TypeError("Super expression must either be null or a function, not " + typeof M);
  A.prototype = Object.create(M && M.prototype, {
    constructor: {
      value: A,
      enumerable: !1,
      writable: !0,
      configurable: !0
    }
  }), M && (Object.setPrototypeOf ? Object.setPrototypeOf(A, M) : A.__proto__ = M);
}, GN = function(A, M) {
  if (!A)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return M && (typeof M == "object" || typeof M == "function") ? M : A;
}, ni = function() {
  function A(M, I) {
    var N = [], j = !0, D = !1, c = void 0;
    try {
      for (var x = M[Symbol.iterator](), i; !(j = (i = x.next()).done) && (N.push(i.value), !(I && N.length === I)); j = !0)
        ;
    } catch (T) {
      D = !0, c = T;
    } finally {
      try {
        !j && x.return && x.return();
      } finally {
        if (D)
          throw c;
      }
    }
    return N;
  }
  return function(M, I) {
    if (Array.isArray(M))
      return M;
    if (Symbol.iterator in Object(M))
      return A(M, I);
    throw new TypeError("Invalid attempt to destructure non-iterable instance");
  };
}(), rA = void 0;
typeof window < "u" ? rA = window : typeof self < "u" ? rA = self : rA = global;
var SI = null, sI = null, ZN = 20, lI = rA.clearTimeout, UN = rA.setTimeout, wI = rA.cancelAnimationFrame || rA.mozCancelAnimationFrame || rA.webkitCancelAnimationFrame, rN = rA.requestAnimationFrame || rA.mozRequestAnimationFrame || rA.webkitRequestAnimationFrame;
wI == null || rN == null ? (SI = lI, sI = function(M) {
  return UN(M, ZN);
}) : (SI = function(M) {
  var I = ni(M, 2), N = I[0], j = I[1];
  wI(N), lI(j);
}, sI = function(M) {
  var I = rN(function() {
    lI(N), M();
  }), N = UN(function() {
    wI(I), M();
  }, ZN);
  return [I, N];
});
function Ti(A) {
  var M = void 0, I = void 0, N = void 0, j = void 0, D = void 0, c = void 0, x = void 0, i = typeof document < "u" && document.attachEvent;
  if (!i) {
    c = function(y) {
      var O = y.__resizeTriggers__, m = O.firstElementChild, H = O.lastElementChild, g = m.firstElementChild;
      H.scrollLeft = H.scrollWidth, H.scrollTop = H.scrollHeight, g.style.width = m.offsetWidth + 1 + "px", g.style.height = m.offsetHeight + 1 + "px", m.scrollLeft = m.scrollWidth, m.scrollTop = m.scrollHeight;
    }, D = function(y) {
      return y.offsetWidth !== y.__resizeLast__.width || y.offsetHeight !== y.__resizeLast__.height;
    }, x = function(y) {
      if (!(y.target.className && typeof y.target.className.indexOf == "function" && y.target.className.indexOf("contract-trigger") < 0 && y.target.className.indexOf("expand-trigger") < 0)) {
        var O = this;
        c(this), this.__resizeRAF__ && SI(this.__resizeRAF__), this.__resizeRAF__ = sI(function() {
          D(O) && (O.__resizeLast__.width = O.offsetWidth, O.__resizeLast__.height = O.offsetHeight, O.__resizeListeners__.forEach(function(g) {
            g.call(O, y);
          }));
        });
      }
    };
    var T = !1, Z = "";
    N = "animationstart";
    var U = "Webkit Moz O ms".split(" "), L = "webkitAnimationStart animationstart oAnimationStart MSAnimationStart".split(" "), Q = "";
    {
      var p = document.createElement("fakeelement");
      if (p.style.animationName !== void 0 && (T = !0), T === !1) {
        for (var E = 0; E < U.length; E++)
          if (p.style[U[E] + "AnimationName"] !== void 0) {
            Q = U[E], Z = "-" + Q.toLowerCase() + "-", N = L[E], T = !0;
            break;
          }
      }
    }
    I = "resizeanim", M = "@" + Z + "keyframes " + I + " { from { opacity: 0; } to { opacity: 0; } } ", j = Z + "animation: 1ms " + I + "; ";
  }
  var r = function(y) {
    if (!y.getElementById("detectElementResize")) {
      var O = (M || "") + ".resize-triggers { " + (j || "") + 'visibility: hidden; opacity: 0; } .resize-triggers, .resize-triggers > div, .contract-trigger:before { content: " "; display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; z-index: -1; } .resize-triggers > div { background: #eee; overflow: auto; } .contract-trigger:before { width: 200%; height: 200%; }', m = y.head || y.getElementsByTagName("head")[0], H = y.createElement("style");
      H.id = "detectElementResize", H.type = "text/css", A != null && H.setAttribute("nonce", A), H.styleSheet ? H.styleSheet.cssText = O : H.appendChild(y.createTextNode(O)), m.appendChild(H);
    }
  }, b = function(y, O) {
    if (i)
      y.attachEvent("onresize", O);
    else {
      if (!y.__resizeTriggers__) {
        var m = y.ownerDocument, H = rA.getComputedStyle(y);
        H && H.position === "static" && (y.style.position = "relative"), r(m), y.__resizeLast__ = {}, y.__resizeListeners__ = [], (y.__resizeTriggers__ = m.createElement("div")).className = "resize-triggers";
        var g = m.createElement("div");
        g.className = "expand-trigger", g.appendChild(m.createElement("div"));
        var z = m.createElement("div");
        z.className = "contract-trigger", y.__resizeTriggers__.appendChild(g), y.__resizeTriggers__.appendChild(z), y.appendChild(y.__resizeTriggers__), c(y), y.addEventListener("scroll", x, !0), N && (y.__resizeTriggers__.__animationListener__ = function(n) {
          n.animationName === I && c(y);
        }, y.__resizeTriggers__.addEventListener(N, y.__resizeTriggers__.__animationListener__));
      }
      y.__resizeListeners__.push(O);
    }
  }, l = function(y, O) {
    if (i)
      y.detachEvent("onresize", O);
    else if (y.__resizeListeners__.splice(y.__resizeListeners__.indexOf(O), 1), !y.__resizeListeners__.length) {
      y.removeEventListener("scroll", x, !0), y.__resizeTriggers__.__animationListener__ && (y.__resizeTriggers__.removeEventListener(N, y.__resizeTriggers__.__animationListener__), y.__resizeTriggers__.__animationListener__ = null);
      try {
        y.__resizeTriggers__ = !y.removeChild(y.__resizeTriggers__);
      } catch {
      }
    }
  };
  return {
    addResizeListener: b,
    removeResizeListener: l
  };
}
var tj = function(A) {
  Ci(M, A);
  function M() {
    var I, N, j, D;
    ui(this, M);
    for (var c = arguments.length, x = Array(c), i = 0; i < c; i++)
      x[i] = arguments[i];
    return D = (N = (j = GN(this, (I = M.__proto__ || Object.getPrototypeOf(M)).call.apply(I, [this].concat(x))), j), j.state = {
      height: j.props.defaultHeight || 0,
      width: j.props.defaultWidth || 0
    }, j._onResize = function() {
      var T = j.props, Z = T.disableHeight, U = T.disableWidth, L = T.onResize;
      if (j._parentNode) {
        var Q = j._parentNode.offsetHeight || 0, p = j._parentNode.offsetWidth || 0, E = window.getComputedStyle(j._parentNode) || {}, r = parseInt(E.paddingLeft, 10) || 0, b = parseInt(E.paddingRight, 10) || 0, l = parseInt(E.paddingTop, 10) || 0, o = parseInt(E.paddingBottom, 10) || 0, y = Q - l - o, O = p - r - b;
        (!Z && j.state.height !== y || !U && j.state.width !== O) && (j.setState({
          height: Q - l - o,
          width: p - r - b
        }), L({ height: Q, width: p }));
      }
    }, j._setRef = function(T) {
      j._autoSizer = T;
    }, N), GN(j, D);
  }
  return li(M, [{
    key: "componentDidMount",
    value: function() {
      var N = this.props.nonce;
      this._autoSizer && this._autoSizer.parentNode && this._autoSizer.parentNode.ownerDocument && this._autoSizer.parentNode.ownerDocument.defaultView && this._autoSizer.parentNode instanceof this._autoSizer.parentNode.ownerDocument.defaultView.HTMLElement && (this._parentNode = this._autoSizer.parentNode, this._detectElementResize = Ti(N), this._detectElementResize.addResizeListener(this._parentNode, this._onResize), this._onResize());
    }
  }, {
    key: "componentWillUnmount",
    value: function() {
      this._detectElementResize && this._parentNode && this._detectElementResize.removeResizeListener(this._parentNode, this._onResize);
    }
  }, {
    key: "render",
    value: function() {
      var N = this.props, j = N.children, D = N.className, c = N.disableHeight, x = N.disableWidth, i = N.style, T = this.state, Z = T.height, U = T.width, L = { overflow: "visible" }, Q = {}, p = !1;
      return c || (Z === 0 && (p = !0), L.height = 0, Q.height = Z), x || (U === 0 && (p = !0), L.width = 0, Q.width = U), kM(
        "div",
        {
          className: D,
          ref: this._setRef,
          style: wi({}, L, i)
        },
        !p && j(Q)
      );
    }
  }]), M;
}(XN);
tj.defaultProps = {
  onResize: function() {
  },
  disableHeight: !1,
  disableWidth: !1,
  style: {}
};
const ON = 72, ai = (A, M) => {
  const I = M[A];
  return `${I.contractAddress}-${I.symbol}-${I.chainId}`;
}, Ei = (A) => {
  const {
    index: M,
    data: I,
    getCachedAssetBalance: N,
    disabledToken: j,
    isWalletConnected: D,
    onSelectToken: c,
    style: x
  } = A, i = I[M];
  return /* @__PURE__ */ u("div", {
    style: x,
    children: /* @__PURE__ */ u($D, {
      onClick: c,
      balance: N(i),
      isWalletConnected: D,
      token: i,
      disabled: j ? j.contractAddress === i.contractAddress : !1
    })
  });
}, Li = (A) => {
  const {
    tokenList: M,
    disabledToken: I,
    getCachedAssetBalance: N,
    isWalletConnected: j,
    onSelectToken: D
  } = A;
  return /* @__PURE__ */ u(tj, {
    style: {
      height: "100%",
      width: "100%"
    },
    children: function({
      height: c,
      width: x
    }) {
      return /* @__PURE__ */ u(xi, {
        width: x,
        height: c,
        itemData: M,
        itemSize: (i) => ON,
        estimatedItemSize: ON,
        itemCount: M.length,
        overscanCount: 2,
        itemKey: ai,
        children: (i) => /* @__PURE__ */ u(Ei, {
          ...i,
          getCachedAssetBalance: N,
          disabledToken: I,
          isWalletConnected: j,
          onSelectToken: D
        })
      });
    }
  });
}, ti = G.forwardRef((A, M) => {
  const {
    onClose: I,
    onSelectToken: N,
    getCachedAssetBalance: j,
    refreshBlockchainState: D,
    getNetworkAssetsList: c,
    disabledToken: x,
    selectingFromOrTo: i
  } = A, {
    getLocale: T,
    network: Z,
    isWalletConnected: U
  } = TA(), [L, Q] = G.useState(!0), [p, E] = G.useState(""), r = G.useCallback(() => {
    Q((g) => !g);
  }, []), b = G.useCallback((g) => {
    E(g);
  }, []), l = G.useMemo(() => c(Z), [c, Z]), o = G.useMemo(() => T(L ? "braveSwapShowTokensWithZeroBalances" : "braveSwapHideTokensWithZeroBalances"), [T, L]), y = G.useMemo(() => p === "" ? l : l.filter((g) => g.name.toLowerCase().startsWith(p.toLowerCase()) || g.symbol.toLowerCase().startsWith(p.toLowerCase())), [l, p]), O = G.useMemo(() => y.filter((g) => j(g).gt(0)), [y, j]), m = G.useMemo(() => O.length === 0 || !U ? y : L ? O : y, [y, L, O, U]), H = G.useMemo(() => O.length !== 0 && U, [O, U]);
  return G.useEffect(() => {
    i === "to" && Q(!1);
  }, [i]), /* @__PURE__ */ P(Ej, {
    ref: M,
    modalHeight: L ? "standard" : "full",
    children: [/* @__PURE__ */ P(J, {
      rowWidth: "full",
      horizontalPadding: 24,
      verticalPadding: 20,
      children: [/* @__PURE__ */ u(f, {
        textSize: "18px",
        responsiveTextSize: "20px",
        isBold: !0,
        children: T("braveSwapSelectAToken")
      }), /* @__PURE__ */ u(VA, {
        icon: CM,
        onClick: I,
        size: 20
      })]
    }), /* @__PURE__ */ u(J, {
      rowWidth: "full",
      horizontalPadding: 20,
      marginBottom: 16,
      children: /* @__PURE__ */ u(fc, {
        onSearchChanged: b,
        searchValue: p,
        networkSelectorDisabled: i === "to",
        refreshBlockchainState: D
      })
    }), /* @__PURE__ */ u(YA, {
      maxWidth: 570,
      children: /* @__PURE__ */ u(HI, {})
    }), /* @__PURE__ */ u(yi, {
      columnWidth: "full",
      verticalAlign: "flex-start",
      verticalPadding: 8,
      children: m.length !== 0 && /* @__PURE__ */ u(Li, {
        disabledToken: x,
        getCachedAssetBalance: j,
        isWalletConnected: U,
        onSelectToken: N,
        tokenList: m
      })
    }), H && /* @__PURE__ */ u(di, {
      buttonText: o,
      onClick: r,
      buttonStyle: "square",
      buttonWidth: "full",
      horizontalMargin: 0,
      verticalMargin: 0
    })]
  });
}), di = Y(PI)`
  align-self: flex-end;
  margin: auto;
`, yi = Y(yA)`
  flex: 1;
  overflow: hidden;
  @media screen and (max-width: 570px) {
    padding: 0;
  }
`, Bi = (A) => {
  const {
    options: M,
    selectedQuoteOptionIndex: I,
    onSelectQuoteOption: N
  } = A, {
    getTokenPrice: j
  } = TA(), [D, c] = G.useState(!1), [x, i] = G.useState(void 0);
  G.useEffect(() => {
    let U = !1;
    if (M[I] !== void 0)
      return j(M[I].toToken).then((L) => {
        U || i(Number(k.normalize(L)));
      }).catch((L) => console.log(L)), () => {
        U = !0;
      };
  }, [M, I, j]);
  const T = G.useCallback(() => {
    c((U) => !U);
  }, []), Z = G.useMemo(() => D ? M : M.slice(0, 2), [M, D]);
  return /* @__PURE__ */ P(bA, {
    children: [/* @__PURE__ */ u(qA, {
      size: 15
    }), /* @__PURE__ */ u(yA, {
      columnHeight: "dynamic",
      columnWidth: "full",
      children: Z.map((U, L) => /* @__PURE__ */ u(Ic, {
        isBest: L === 0,
        isSelected: I === L,
        onClick: () => N(L),
        option: U,
        spotPrice: x
      }, L))
    }), /* @__PURE__ */ u(oi, {
      isSelected: D,
      icon: GM,
      onClick: T
    })]
  });
}, oi = Y(VA)`
  transform: ${(A) => A.isSelected ? "rotate(180deg)" : "unset"};
  "0x": Si,
  Aave_V2: si,
  Aldrin: bi,
  ApeSwap: Qi,
  Balancer: RN,
  Balancer_V2: RN,
  Balansol: Gi,
  Bancor: YN,
  BancorV3: YN,
  Component: Zi,
  Crema: Ui,
  Cropper: ri,
  CryptoCom: Oi,
  Curve: HN,
  Curve_V2: HN,
  Cykura: Ri,
  Dfyn: Yi,
  DODO: mN,
  DODO_V2: mN,
  Dradex: Hi,
  FirebirdOneSwap: mi,
  GooseFX: Pi,
  Invariant: ki,
  IronSwap: pi,
  KyberDMM: vi,
  Lido: Wi,
  Lifinity: Vi,
  LiquidityProvider: "",
  MakerPsm: Xi,
  Marinade: hi,
  Mercurial: Fi,
  MeshSwap: fi,
  mStable: Ji,
  MultiHop: "",
  Orca: Ki,
  QuickSwap: qi,
  Penguin: _i,
  Saber: $i,
  Saddle: Az,
  Sencha: Mz,
  Saros: Iz,
  Serum: Nz,
  Shell: jz,
  ShibaSwap: gz,
  Step: Dz,
  Stepn: cz,
  SushiSwap: iz,
  Synapse: zz,
  Synthetix: ez,
  Uniswap: CI,
  Uniswap_V2: CI,
  Uniswap_V3: CI,
  WaultSwap: xz,
  WOOFi: uz
}, lz = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik05Ljg1MzQ5IDUuODUzMjlDOS43NTU3NiA1Ljk1MTIyIDkuNjI3ODEgNS45OTk5NCA5LjQ5OTg1IDUuOTk5OTRDOS4zNzE5IDUuOTk5OTQgOS4yNDM5NCA1Ljk1MTIyIDkuMTQ2NzIgNS44NTMyOUM4Ljk1MTI2IDUuNjU4NDMgOC45NTEyNiA1LjM0MTUzIDkuMTQ2NzIgNS4xNDY2N0wxMC4zMTI0IDMuOTgwNTNIMC40NzkwNzNDMC4yMDMwMTQgMy45ODA1MyAwIDMuNzc2MTIgMCAzLjQ5OTkxQzAgMy4yMjM2OSAwLjIyMzY2OCAyLjk5OTcgMC41MDAyMzEgMi45OTk3SDEwLjI5MjhMOS4xNDY3MiAxLjg1MzY0QzguOTUxMjYgMS42NTgyOCA4Ljk1MTI2IDEuMzQxMzggOS4xNDY3MiAxLjE0NjUyQzkuMzQxNjcgMC45NTExNTkgOS42NTgwMyAwLjk1MTE1OSA5Ljg1MzQ5IDEuMTQ2NTJMMTEuODUyOSAzLjE0NTg0QzExLjg5OTIgMy4xOTIwNSAxMS45MzYgMy4yNDc3OSAxMS45NjEyIDMuMzA5MDZDMTEuOTg2OSAzLjM3MDMzIDEyIDMuNDM1MTIgMTIgMy41MDA0MUMxMiAzLjY3NzE5IDExLjkyNyAzLjgxNzMxIDExLjgwNjYgMy45MDA2N0w5Ljg1MzQ5IDUuODUzMjlaTTAuMDM4Nzg5MyA4LjMwODYyQzAuMDYzOTc3MiA4LjI0Nzg2IDAuMTAwMjQ4IDguMTkyNjEgMC4xNDY1OTMgOC4xNDY0MUwyLjE0NjUxIDYuMTQ2NThDMi4zNDE5NyA1Ljk1MTIyIDIuNjU4MzMgNS45NTEyMiAyLjg1MzI4IDYuMTQ2NThDMy4wNDg3NCA2LjM0MTQ0IDMuMDQ4NzQgNi42NTgzNCAyLjg1MzI4IDYuODUzN0wxLjcwNzIzIDguMDAwMjZIMTEuNDk5OEMxMS43NzYzIDguMDAwMjYgMTIgOC4yMjM3NSAxMiA4LjQ5OTk3QzEyIDguNzc2MTkgMTEuNzc2MyA4Ljk5OTY3IDExLjQ5OTggOC45OTk2N0gxLjcwNzIzTDIuODUzMjggMTAuMTQ2MkMzLjA0ODc0IDEwLjM0MTYgMy4wNDg3NCAxMC42NTggMi44NTMyOCAxMC44NTM0QzIuNzU2MDYgMTAuOTUwOCAyLjYyODEgMTEgMi41MDAxNSAxMUMyLjM3MjE5IDExIDIuMjQ0MjQgMTAuOTUwOCAyLjE0NjUxIDEwLjg1MzRMMC4xNDY1OTMgOC44NTM1M0MwLjEwMDI0OCA4LjgwNzMyIDAuMDYzOTc3MiA4Ljc1MjA4IDAuMDM4Nzg5MyA4LjY5MTMxQy0wLjAxMjA5MDIgOC41Njg3NyAtMC4wMTIwOTAyIDguNDMxMTcgMC4wMzg3ODkzIDguMzA4NjJaIiBmaWxsPSIjODY4RTk2Ii8+Cjwvc3ZnPgo=", wz = (A) => {
  const {
    selectedQuoteOption: M,
    fromToken: I,
    toToken: N
  } = A, {
    getLocale: j
  } = TA(), [D, c] = G.useState(!1), {
    state: x
  } = TM(), {
    spotPrices: i
  } = x, T = G.useMemo(() => M === void 0 ? "" : `1 ${M.fromToken.symbol} \u2248 ${M.rate.format(6)} ${M.toToken.symbol}`, [M]), Z = G.useMemo(() => {
    if (I !== void 0 && N !== void 0 && i.makerAsset && i.takerAsset && M !== void 0) {
      const r = new k(i.makerAsset).div(i.takerAsset), b = M.rate;
      return b.minus(r).div(b).times(100);
    }
    return k.zero();
  }, [i, I, N, M]), U = G.useMemo(() => Z.gte(0) ? j("braveSwapCoinGeckoCheaper").replace("$1", Z.format(2)) : Z.gte(-1) ? j("braveSwapCoinGeckoWithin").replace("$1", Z.times(-1).format(2)) : j("braveSwapCoinGeckoExpensive").replace("$1", Z.times(-1).format(2)), [Z, j]), L = G.useMemo(() => Z.gte(-1) ? "success" : Z.gte(-5) ? "warning" : "error", [Z]), Q = G.useMemo(() => M === void 0 ? "" : M.impact.format(6), [M]), p = G.useMemo(() => M === void 0 || M.minimumToAmount === void 0 ? "" : M.minimumToAmount.formatAsAsset(6, M.toToken.symbol), [M]), E = G.useMemo(() => {
    if (!M)
      return;
    const {
      braveFee: r
    } = M;
    if (!!r)
      return new k(100).minus(r.discount).div(100).times(r.fee);
  }, [M]);
  return /* @__PURE__ */ P(yA, {
    columnHeight: "dynamic",
    columnWidth: "full",
    children: [/* @__PURE__ */ u(qA, {
      size: 16
    }), /* @__PURE__ */ P(J, {
      rowWidth: "full",
      marginBottom: 10,
      horizontalPadding: 16,
      children: [/* @__PURE__ */ u(f, {
        textSize: "14px",
        children: j("braveSwapRate")
      }), /* @__PURE__ */ P(J, {
        children: [/* @__PURE__ */ u(f, {
          textSize: "14px",
          children: T
        }), /* @__PURE__ */ u(Cz, {
          icon: lz,
          size: 12
        })]
      })]
    }), /* @__PURE__ */ P(J, {
      rowWidth: "full",
      marginBottom: 10,
      horizontalPadding: 16,
      children: [/* @__PURE__ */ u(oA, {
        size: 1
      }), /* @__PURE__ */ u(J, {
        children: /* @__PURE__ */ u(f, {
          textSize: "14px",
          textColor: L,
          children: U
        })
      })]
    }), /* @__PURE__ */ P(J, {
      rowWidth: "full",
      marginBottom: 10,
      horizontalPadding: 16,
      children: [/* @__PURE__ */ u(f, {
        textSize: "14px",
        children: j("braveSwapPriceImpact")
      }), /* @__PURE__ */ u(f, {
        textSize: "14px",
        children: Q === "0" ? `${Q}%` : `~ ${Q}%`
      })]
    }), p !== "" && /* @__PURE__ */ P(J, {
      rowWidth: "full",
      marginBottom: 8,
      horizontalPadding: 16,
      children: [/* @__PURE__ */ u(f, {
        textSize: "14px",
        textAlign: "left",
        children: j("braveSwapMinimumReceivedAfterSlippage")
      }), /* @__PURE__ */ u(f, {
        textSize: "14px",
        textAlign: "right",
        children: p
      })]
    }), M && M.sources.length > 0 && /* @__PURE__ */ P(yA, {
      columnWidth: "full",
      marginBottom: 8,
      horizontalPadding: 16,
      children: [/* @__PURE__ */ P(J, {
        rowWidth: "full",
        marginBottom: 8,
        children: [/* @__PURE__ */ u(f, {
          textSize: "14px",
          textAlign: "left",
          children: j("braveSwapLiquidityProvider")
        }), /* @__PURE__ */ P(J, {
          children: [/* @__PURE__ */ u(f, {
            textSize: "14px",
            children: M.sources.length
          }), /* @__PURE__ */ u(oA, {
            size: 8
          }), /* @__PURE__ */ u(tz, {
            size: 10,
            icon: GM,
            isExpanded: D,
            onClick: () => c((r) => !r)
          })]
        })]
      }), D && /* @__PURE__ */ u(J, {
        rowWidth: "full",
        horizontalAlign: "flex-start",
        verticalPadding: 6,
        children: M.sources.map((r, b) => /* @__PURE__ */ P(J, {
          children: [/* @__PURE__ */ P(kN, {
            children: [/* @__PURE__ */ u(f, {
              textSize: "12px",
              children: r.name.split("_").join(" ")
            }), PN[r.name] ? /* @__PURE__ */ u(Tz, {
              icon: PN[r.name],
              size: 12
            }) : null]
          }), b !== M.sources.length - 1 && /* @__PURE__ */ u(az, {
            textSize: "14px",
            children: M.routing === "split" ? "+" : "\xD7"
          })]
        }, b))
      })]
    }), M && /* @__PURE__ */ P(J, {
      rowWidth: "full",
      marginBottom: 8,
      horizontalPadding: 16,
      children: [/* @__PURE__ */ u(f, {
        textSize: "14px",
        children: j("braveSwapNetworkFee")
      }), /* @__PURE__ */ P(kN, {
        children: [/* @__PURE__ */ u(nz, {
          icon: lj,
          size: 12
        }), /* @__PURE__ */ u(f, {
          textSize: "14px",
          children: M.networkFee
        })]
      })]
    }), (M == null ? void 0 : M.braveFee) && E && /* @__PURE__ */ P(J, {
      rowWidth: "full",
      marginBottom: 16,
      horizontalPadding: 16,
      children: [/* @__PURE__ */ u(f, {
        textSize: "14px",
        children: j("braveSwapBraveFee")
      }), /* @__PURE__ */ u(f, {
        textSize: "14px",
        children: /* @__PURE__ */ P(Ez, {
          children: [E.isZero() && /* @__PURE__ */ u(f, {
            textSize: "14px",
            textColor: "success",
            isBold: !0,
            children: j("braveSwapFree")
          }), E.isZero() ? /* @__PURE__ */ u(Lz, {
            textSize: "14px",
            textColor: "text03",
            children: `${M.braveFee.fee}%`
          }) : /* @__PURE__ */ u(f, {
            textSize: "14px",
            children: `${E.format()}%`
          })]
        })
      })]
    })]
  });
}, Cz = Y(OA)`
  background-color: ${(A) => A.theme.color.legacy.text03};
  margin-left: 8px;
`, nz = Y(OA)`
  background-color: ${(A) => A.theme.color.legacy.text02};
  margin-right: 6px;
`, kN = Y(J)`
  padding: 2px 8px;
  border-radius: 8px;
  background-color: var(--token-or-network-bubble-background);
`, Tz = Y(K)`
  background-image: url(${(A) => A.icon});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: ${(A) => A.size}px;
  width: ${(A) => A.size}px;
  margin-left: 6px;
  border-radius: 50px;
`, az = Y(f)`
  padding: 0 6px;
`, Ez = Y(J)`
  gap: 4px;
`, Lz = Y(f)`
  text-decoration: line-through;
`, tz = Y(VA)`
  transform: ${(A) => A.isExpanded ? "rotate(180deg)" : "unset"};
  transition: transform 300ms ease;
`;
Y($M)`
  display: flex;
  align-items: center;
  cursor: pointer;
`;
const dz = Y(K)`
  position: relative;
  box-sizing: border-box;
  width: 48px;
  height: 24px;
  background: var(--standard-switch-unchecked-background);
  border-radius: 32px;
  padding: 2px;
  transition: 300ms all;

  &:before {
    transition: 300ms all;
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 35px;
    top: 50%;
    left: 4px;
    background: ${(A) => A.theme.color.legacy.background01};
    transform: translate(0, -50%);
  }
`;
Y(gM)`
  display: none;

  &:checked + ${dz} {
    background: var(--standard-switch-checked-background);

    &:before {
      transform: translate(20px, -50%);
      background: var(--standard-switch-button-checked-background);
    }
  }
`;
Y(gM)`
  -webkit-appearance: none;
  appearance: none;
  margin: 0;
  width: 20px;
  height: 20px;
  border: 2px solid ${(A) => A.theme.color.legacy.interactive08};
  cursor: pointer;
  border-radius: 100%;
  ::after {
    content: '';
    display: block;
    border-radius: 100%;
    width: 10px;
    height: 10px;
    margin: 3px;
  }
  :checked {
    border: 2px solid var(--standard-radio-checked-color);
    ::after {
      background-color: var(--standard-radio-checked-color);
    }
  }
`;
Y(K)`
  flex-direction: row;
  gap: 12px;
`;
Y($M)`
  cursor: pointer;
  color: ${(A) => A.isChecked ? A.theme.color.legacy.text01 : A.theme.color.legacy.text03};
`;
const yz = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTMiIGhlaWdodD0iMTMiIHZpZXdCb3g9IjAgMCAxMyAxMyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyLjQ3ODMgMC44Njg0NkMxMi4yMTUyIDAuNjM4NzU2IDExLjg2NDMgMC41NDY4NzUgMTEuNTEzNCAwLjU0Njg3NUMxMS4xNjI1IDAuNTkyODE2IDEwLjg1NTUgMC43MzA2MzggMTAuNjM2MiAxLjAwNjI4TDUuNDE2OTMgNy4yNTQyMkwyLjg3MzA3IDQuNjM1NkMyLjM0Njc2IDQuMDg0MzEgMS41MTM0MiA0LjA4NDMxIDEuMDMwOTcgNC42MzU2QzAuNzY3ODA5IDQuOTExMjQgMC42MzYyMyA1LjIzMjgyIDAuNjM2MjMgNS42MDAzNUMwLjYzNjIzIDUuOTY3ODggMC43Njc4MDkgNi4zMzU0IDEuMDMwOTcgNi41NjUxTDQuNTgzNiAxMC4yNDA0QzQuODQ2NzYgMTAuNTE2IDUuMTUzNzcgMTAuNjUzOCA1LjUwNDY1IDEwLjY1MzhINS41NDg1MUM1Ljg5OTM5IDEwLjY1MzggNi4yNTAyNyAxMC40NzAxIDYuNDY5NTYgMTAuMTk0NEwxMi42MDk5IDIuODQzOTFDMTMuMDQ4NSAyLjI0NjY4IDEzLjAwNDcgMS4zNzM4MSAxMi40NzgzIDAuODY4NDZaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K", Bz = (A) => {
  const {
    label: M,
    id: I,
    onChange: N,
    isChecked: j,
    labelSize: D,
    isBold: c
  } = A;
  return /* @__PURE__ */ P(J, {
    children: [/* @__PURE__ */ u(oz, {
      type: "checkbox",
      name: "checkbox",
      id: I,
      onChange: (i) => {
        N(i.target.id, i.target.checked);
      },
      checked: j
    }), /* @__PURE__ */ P(bz, {
      isChecked: j,
      htmlFor: I,
      labelSize: D,
      isBold: c,
      children: [/* @__PURE__ */ u(sz, {
        isChecked: j,
        children: j && /* @__PURE__ */ u(Sz, {
          size: 13,
          icon: yz
        })
      }), M]
    })]
  });
}, oz = Y(gM)`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`, Sz = Y(OA)`
  background-color: ${(A) => A.theme.color.white};
`, sz = Y(K)`
  width: 20px;
  height: 20px;
  background: ${(A) => A.isChecked ? A.theme.color.legacy.interactive05 : A.theme.color.legacy.background01};
  border-radius: 4px;
  box-shadow: ${(A) => A.isChecked ? "none" : `inset 0px 0px 0px 1px ${A.theme.color.legacy.interactive08}`};
`, bz = Y($M)`
  display: flex;
  flex-direction: row;
  gap: 12px;
  cursor: pointer;
  font-weight: ${(A) => A.isBold ? 400 : 200};
  font-size: ${(A) => A.labelSize ? A.labelSize : "12px"};
  color: ${(A) => A.theme.color.legacy.text02};
`, Qz = () => {
  const [A, M] = G.useState(!1), I = G.useCallback((N) => {
    M(N.target.checked);
    const j = window.localStorage.getItem(WA), D = window.matchMedia("(prefers-color-scheme: dark)").matches ? "light" : "dark";
    if (j === null) {
      document.documentElement.setAttribute("data-theme", D), window.localStorage.setItem(WA, D);
      return;
    }
    if (j === "light") {
      document.documentElement.setAttribute("data-theme", "dark"), window.localStorage.setItem(WA, "dark");
      return;
    }
    document.documentElement.setAttribute("data-theme", "light"), window.localStorage.setItem(WA, "light");
  }, []);
  return G.useEffect(() => {
    const N = window.matchMedia("(prefers-color-scheme: dark)").matches ? "light" : "dark", j = window.localStorage.getItem(WA);
    if (j === null) {
      if (N === "light") {
        M(!0);
        return;
      }
      if (N === "dark") {
        M(!1);
        return;
      }
    }
    if (j === "light") {
      M(!0);
      return;
    }
    M(!1);
  }, []), /* @__PURE__ */ P(Gz, {
    children: [/* @__PURE__ */ u(Zz, {
      checked: A,
      type: "checkbox",
      onChange: I
    }), /* @__PURE__ */ u(dj, {
      children: /* @__PURE__ */ u(Uz, {})
    })]
  });
}, Gz = Y($M)`
  display: flex;
  align-items: center;
  cursor: pointer;
  position: absolute;
  bottom: 24px;
  right: 24px;
`, dj = Y(K)`
  position: relative;
  box-sizing: border-box;
  width: 56px;
  height: 32px;
  background: var(--standard-switch-unchecked-background);
  border-radius: 32px;
  padding: 2px;
  transition: 300ms all;
  --icon-position: 10px;

  &:before {
    transition: 300ms all;
    content: '';
    position: absolute;
    box-sizing: border-box;
    width: 28px;
    height: 28px;
    border-radius: 35px;
    top: 50%;
    left: 3px;
    background: ${(A) => A.theme.color.legacy.background01};
    transform: translate(0, -50%);
  }
`, Zz = Y(gM)`
  display: none;

  &:checked + ${dj} {
    background: var(--standard-switch-button-checked-background);
    --icon-position: 32px;
    &:before {
      transform: translate(22px, -50%);
      background: ${(A) => A.theme.color.legacy.background01};
    }
  }
`, Uz = Y(K)`
  position: absolute;
  width: 14px;
  height: 14px;
  background-image: var(--theme-button-icon);
  background-size: cover;
  left: var(--icon-position);
  transition: 300ms all;
`;
Y(BA)`
  background-color: ${(A) => A.theme.color.legacy.background01};
  border: 1px solid ${(A) => A.theme.color.legacy.interactive08};
  border-radius: 4px;
  box-sizing: border-box;
  flex-direction: row;
  justify-content: space-between;
  padding: 7px 12px;
  min-width: 200px;
  :disabled {
    opacity: 0.3;
  }
`;
Y(K)`
  position: relative;
`;
Y(K)`
  background-color: ${(A) => A.theme.color.legacy.background01};
  min-width: 200px;
  position: absolute;
  z-index: 10;
  top: 36px;
  left: 0px;
  padding: 6px 4px 4px 4px;
  box-shadow: 0px 0px 24px var(--account-selector-shadow-color);
  border-radius: 8px;
  box-sizing: border-box;
`;
Y(OA)`
  background-color: ${(A) => A.theme.color.legacy.text01};
`;
Y(OA)`
  background-color: ${(A) => A.theme.color.legacy.text02};
  margin-left: 4px;
  margin-right: 16px;
`;
const pN = (A) => {
  const {
    label: M,
    value: I,
    secondaryValue: N,
    children: j,
    onExpandOut: D
  } = A, [c, x] = G.useState(!1), i = G.useCallback(() => {
    x((T) => !T);
  }, []);
  return /* @__PURE__ */ P(yA, {
    columnWidth: "full",
    children: [/* @__PURE__ */ P(J, {
      rowWidth: "full",
      verticalPadding: 16,
      children: [/* @__PURE__ */ u(f, {
        textColor: "text02",
        textSize: "14px",
        isBold: !0,
        children: M
      }), /* @__PURE__ */ P(J, {
        children: [/* @__PURE__ */ u(f, {
          textColor: "text01",
          textSize: "14px",
          isBold: !0,
          children: I
        }), N && /* @__PURE__ */ P(bA, {
          children: [/* @__PURE__ */ u(oA, {
            size: 4
          }), /* @__PURE__ */ u(f, {
            textColor: "text03",
            textSize: "14px",
            isBold: !0,
            children: N
          })]
        }), /* @__PURE__ */ u(oA, {
          size: 16
        }), /* @__PURE__ */ u(rz, {
          size: 16,
          icon: GM,
          isSelected: c,
          expandOut: D !== void 0,
          onClick: D != null ? D : i
        })]
      })]
    }), c && j]
  });
}, rz = Y(VA)`
  transform: ${(A) => A.expandOut ? "rotate(270deg)" : A.isSelected ? "rotate(180deg)" : "unset"};
  transition: transform 300ms ease;
`, Oz = (A) => {
  const {
    onClick: M,
    isSelected: I,
    option: N,
    gasEstimates: j
  } = A, {
    getLocale: D,
    network: c
  } = TA();
  return /* @__PURE__ */ P(Rz, {
    onClick: M,
    isSelected: I,
    children: [/* @__PURE__ */ P(J, {
      children: [/* @__PURE__ */ u(Yz, {
        children: /* @__PURE__ */ u(Hz, {
          size: 16,
          icon: N.icon
        })
      }), /* @__PURE__ */ P(yA, {
        horizontalAlign: "flex-start",
        columnHeight: "full",
        children: [/* @__PURE__ */ u(f, {
          textColor: "text02",
          textSize: "14px",
          isBold: !0,
          children: D(N.name)
        }), /* @__PURE__ */ P(f, {
          textColor: "text03",
          textSize: "12px",
          isBold: !1,
          children: ["<", " ", j.time]
        })]
      })]
    }), /* @__PURE__ */ P(yA, {
      horizontalAlign: "flex-end",
      columnHeight: "full",
      children: [/* @__PURE__ */ P(f, {
        textColor: "text02",
        textSize: "14px",
        isBold: !0,
        children: [j.gasFeeGwei, " ", D("braveSwapGwei")]
      }), /* @__PURE__ */ P(f, {
        textColor: "text03",
        textSize: "12px",
        isBold: !1,
        children: [j.gasFee, " ", c == null ? void 0 : c.symbol]
      })]
    })]
  });
}, Rz = Y(BA)`
  display: flex;
  justify-content: space-between;
  width: 100%;
  background-color: ${(A) => A.theme.color.legacy.background01};
  border-radius: 8px;
  border: 1px solid
    ${(A) => A.isSelected ? "var(--gas-preset-button-border-selected)" : A.theme.color.legacy.divider01};
  padding: 12px 16px;
  margin-bottom: 8px;
  &:hover {
    border: 1px solid var(--gas-preset-button-border-selected);
  }
`, Yz = Y(K)`
  width: 32px;
  height: 32px;
  border-radius: 100%;
  background-color: var(--gas-preset-button-icon-background);
  margin-right: 12px;
`, Hz = Y(OA)`
  background-color: var(--gas-preset-button-icon-color);
`, vN = ["0.1", "0.5", "1.0"], mz = (A) => {
  const {
    selectedGasFeeOption: M,
    setSelectedGasFeeOption: I,
    setSlippageTolerance: N,
    slippageTolerance: j,
    gasEstimates: D,
    onClose: c
  } = A, {
    getLocale: x,
    network: i,
    exchanges: T
  } = TA(), {
    dispatch: Z
  } = ej(), {
    state: {
      userSelectedExchanges: U
    }
  } = TM(), [L, Q] = G.useState(!1), p = G.useCallback((b, l) => {
    const o = T.find((O) => O.id === b);
    if (l && o !== void 0) {
      const O = [o, ...U];
      Z({
        type: "updateUserSelectedExchanges",
        payload: O
      });
      return;
    }
    const y = U.filter((O) => O.id !== b);
    Z({
      type: "updateUserSelectedExchanges",
      payload: y
    });
  }, [U, T, Z]), E = G.useMemo(() => vN.includes(j) ? "" : j, [j]), r = G.useMemo(() => x(L ? "braveSwapExchanges" : "braveSwapSettings"), [x, L]);
  return /* @__PURE__ */ P(Pz, {
    children: [/* @__PURE__ */ P(J, {
      rowWidth: "full",
      marginBottom: 2,
      children: [/* @__PURE__ */ u(f, {
        textColor: "text01",
        textSize: "16px",
        isBold: !0,
        children: r
      }), L && /* @__PURE__ */ u(VA, {
        icon: CM,
        onClick: () => Q(!1),
        size: 20
      }), !L && /* @__PURE__ */ u(oM, {
        maxWidth: 570,
        children: /* @__PURE__ */ u(VA, {
          icon: CM,
          onClick: c,
          size: 20
        })
      })]
    }), /* @__PURE__ */ u(oM, {
      maxWidth: 570,
      children: /* @__PURE__ */ u(qA, {
        size: 18
      })
    }), L && /* @__PURE__ */ P(bA, {
      children: [/* @__PURE__ */ u(qA, {
        size: 24
      }), /* @__PURE__ */ u(kz, {
        children: T.map((b) => /* @__PURE__ */ u(Bz, {
          id: b.id,
          isChecked: U.some((l) => l.id === b.id),
          label: b.name,
          onChange: p,
          labelSize: "14px",
          isBold: !0
        }, b.id))
      })]
    }), !L && /* @__PURE__ */ P(bA, {
      children: [/* @__PURE__ */ u(pN, {
        label: x("braveSwapSlippageTolerance"),
        value: `${j}%`,
        children: /* @__PURE__ */ P(J, {
          marginBottom: 22,
          rowWidth: "full",
          children: [/* @__PURE__ */ u(J, {
            horizontalAlign: "flex-start",
            children: vN.map((b) => /* @__PURE__ */ u(PI, {
              buttonText: `${b}%`,
              onClick: () => N(b),
              buttonType: "secondary",
              buttonSize: "small",
              buttonWidth: 64,
              isSelected: j === b,
              marginRight: 8
            }, b))
          }), /* @__PURE__ */ u(Lc, {
            onChange: N,
            value: E
          })]
        })
      }), /* @__PURE__ */ u(YA, {
        maxWidth: 570,
        children: /* @__PURE__ */ u(HI, {})
      }), i.coin === uA.Ethereum && /* @__PURE__ */ u(bA, {
        children: /* @__PURE__ */ u(pN, {
          label: x("braveSwapNetworkFee"),
          value: `$${D.gasFeeFiat}`,
          secondaryValue: `${D.gasFee} ${i.symbol}`,
          children: /* @__PURE__ */ u(yA, {
            columnWidth: "full",
            children: cj.map((b) => /* @__PURE__ */ u(Oz, {
              option: b,
              isSelected: M === b,
              onClick: () => I(b),
              gasEstimates: D
            }, b.id))
          })
        })
      }), i.coin === uA.Solana && /* @__PURE__ */ u(bA, {})]
    }), /* @__PURE__ */ u(oM, {
      maxWidth: 570,
      children: /* @__PURE__ */ u(Qz, {})
    })]
  });
}, Pz = Y(K)`
  background-color: ${(A) => A.theme.color.legacy.background02};
  border-radius: 16px;
  border: 1px solid var(--swap-settings-modal-border-color);
  box-shadow: var(--swap-settings-modal-box-shadow);
  box-sizing: border-box;
  flex-direction: column;
  justify-content: flex-start;
  overflow: hidden;
  position: absolute;
  padding: 20px 24px;
  width: 370px;
  min-height: 370px;
  z-index: 20;
  right: -16px;
  top: 28px;
  @media screen and (max-width: 570px) {
    position: fixed;
    right: 0;
    left: 0;
    top: 72px;
    bottom: 0;
    width: auto;
    border: none;
    border-radius: 16px 16px 0 0;
  }
`, kz = Y(K)`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
`, QA = (A) => {
  const {
    width: M,
    height: I,
    borderRadius: N,
    background: j
  } = A;
  return /* @__PURE__ */ u(pz, {
    width: M,
    height: I,
    borderRadius: N,
    background: j,
    children: /* @__PURE__ */ u(vz, {
      width: M,
      children: /* @__PURE__ */ u(Wz, {})
    })
  });
}, pz = Y.div`
  display: block;
  box-sizing: content-box;
  width: ${(A) => A.width ? `${A.width}px` : "100%"};
  height: ${(A) => A.height ? `${A.height}px` : "100%"};
  border-radius: ${(A) => A.borderRadius ? `${A.borderRadius}px` : "none"};
  background-color: var(--token-or-network-button-background-hover-${(A) => A.background ? A.background : "primary"});
  position: sticky;
  overflow: hidden;
`, vz = Y.div`
  display: block;
  height: 100%;
  transform: translate(400%);
  --start-distance: ${(A) => A.width && A.width < 60 ? "-1000%" : "-300%"};
  --end-distance: ${(A) => A.width && A.width < 60 ? "1000%" : "300%"};
  @keyframes identifier {
    0% {
      transform: translate(var(--start-distance));
    }
    100% {
      transform: translate(0%);
    }
    100% {
      transform: translate(var(--end-distance));
    }
  }
  animation: 3s identifier infinite linear;
`, Wz = Y.div`
  width: 1px;
  height: 100%;
  background-color: ${(A) => A.theme.color.legacy.divider01};
  box-shadow: 0 0 100px 100px ${(A) => A.theme.color.legacy.divider01};
`, Vz = () => {
  const {
    getLocale: A
  } = TA();
  return /* @__PURE__ */ P(Xz, {
    children: [/* @__PURE__ */ P(Fz, {
      children: [/* @__PURE__ */ P(J, {
        rowHeight: "full",
        verticalAlign: "center",
        children: [/* @__PURE__ */ u(fz, {}), /* @__PURE__ */ P(YA, {
          maxWidth: 570,
          children: [/* @__PURE__ */ u(SM, {
            height: 22,
            marginRight: 12,
            dividerTheme: "darker"
          }), /* @__PURE__ */ u(f, {
            textSize: "18px",
            textColor: "text02",
            isBold: !0,
            children: A("braveSwap")
          })]
        })]
      }), /* @__PURE__ */ P(J, {
        children: [/* @__PURE__ */ P(YA, {
          maxWidth: 570,
          children: [/* @__PURE__ */ u(QA, {
            width: 40,
            height: 40,
            borderRadius: 100
          }), /* @__PURE__ */ u(oA, {
            size: 16
          }), /* @__PURE__ */ u(QA, {
            width: 154,
            height: 40,
            borderRadius: 48
          }), /* @__PURE__ */ u(oA, {
            size: 16
          }), /* @__PURE__ */ u(QA, {
            width: 154,
            height: 40,
            borderRadius: 48
          })]
        }), /* @__PURE__ */ P(oM, {
          children: [/* @__PURE__ */ u(QA, {
            width: 68,
            height: 32,
            borderRadius: 100
          }), /* @__PURE__ */ u(oA, {
            size: 16
          }), /* @__PURE__ */ u(QA, {
            width: 135,
            height: 32,
            borderRadius: 48
          })]
        })]
      })]
    }), /* @__PURE__ */ P(hz, {
      children: [/* @__PURE__ */ u(J, {
        rowWidth: "full",
        horizontalPadding: 16,
        verticalPadding: 6,
        marginBottom: 18,
        children: /* @__PURE__ */ u(f, {
          isBold: !0,
          children: A("braveSwap")
        })
      }), /* @__PURE__ */ u(FM, {
        boxType: "primary",
        children: /* @__PURE__ */ P(J, {
          rowWidth: "full",
          children: [/* @__PURE__ */ P(J, {
            children: [/* @__PURE__ */ u(QA, {
              width: 124,
              height: 60,
              borderRadius: 100
            }), /* @__PURE__ */ u(SM, {
              height: 28,
              marginLeft: 8,
              marginRight: 8
            }), /* @__PURE__ */ u(YA, {
              maxWidth: 570,
              children: /* @__PURE__ */ u(QA, {
                width: 46,
                height: 24,
                borderRadius: 4
              })
            }), /* @__PURE__ */ u(oA, {
              size: 8
            }), /* @__PURE__ */ u(QA, {
              width: 46,
              height: 24,
              borderRadius: 4
            })]
          }), /* @__PURE__ */ u(QA, {
            width: 100,
            height: 42,
            borderRadius: 5
          })]
        })
      }), /* @__PURE__ */ u(Jz, {
        children: /* @__PURE__ */ u(Kz, {
          children: /* @__PURE__ */ u(QA, {
            width: 40,
            height: 40,
            borderRadius: 100,
            background: "secondary"
          })
        })
      }), /* @__PURE__ */ u(FM, {
        boxType: "secondary",
        children: /* @__PURE__ */ P(J, {
          rowWidth: "full",
          children: [/* @__PURE__ */ u(QA, {
            width: 160,
            height: 40,
            borderRadius: 100,
            background: "secondary"
          }), /* @__PURE__ */ u(QA, {
            width: 100,
            height: 42,
            borderRadius: 5,
            background: "secondary"
          })]
        })
      }), /* @__PURE__ */ u(J, {
        rowWidth: "full",
        horizontalAlign: "center",
        verticalPadding: 16,
        children: /* @__PURE__ */ u(QA, {
          height: 56,
          borderRadius: 48,
          background: "secondary"
        })
      })]
    })]
  });
}, Xz = Y(K)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 100px 0px;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow-y: scroll;
  position: absolute;
  background-color: ${(A) => A.theme.color.legacy.background01};
  @media (prefers-color-scheme: dark) {
    background-color: ${(A) => A.theme.color.legacy.background02};
    padding: 80px 0px;
  }
`, hz = Y(K)`
  background-color: ${(A) => A.theme.color.legacy.background01};
  border-radius: 24px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  justify-content: flex-start;
  padding: 16px;
  width: 512px;
  position: relative;
  z-index: 9;
  @media screen and (max-width: 570px) {
    width: 92%;
    padding: 16px 8px;
  }
`, Fz = Y(K)`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  padding: 16px 32px 0px 32px;
  margin-bottom: 45px;
  top: 0;
  width: 100%;
  box-sizing: border-box;
  position: fixed;
  z-index: 10;
  @media screen and (max-width: 570px) {
    padding: 20px 16px 0px 16px;
  }
`, fz = Y(K)`
  height: 30px;
  width: 100px;
  background-image: var(--header-icon);
  background-size: cover;
  margin: 0px 12px 4px 0px;
  @media screen and (max-width: 570px) {
    margin: 0px 0px 4px 0px;
  }
`, Jz = Y(K)`
  height: 8px;
  width: 100%;
`, Kz = Y(K)`
  position: absolute;
  z-index: 10;
  border-radius: 100%;
  background-color: ${(A) => A.theme.color.legacy.background01};
`, qz = G.forwardRef((A, M) => {
  const {
    onClose: I
  } = A, {
    getLocale: N
  } = TA();
  return /* @__PURE__ */ P(Ej, {
    ref: M,
    modalHeight: "dynamic",
    modalBackground: "background02",
    children: [/* @__PURE__ */ P(J, {
      rowWidth: "full",
      horizontalPadding: 24,
      verticalPadding: 20,
      children: [/* @__PURE__ */ u(f, {
        textSize: "18px",
        isBold: !0,
        children: N("braveSwapPrivacyPolicy")
      }), /* @__PURE__ */ u(VA, {
        icon: CM,
        onClick: I,
        size: 20
      })]
    }), /* @__PURE__ */ P(yA, {
      columnWidth: "full",
      columnHeight: "full",
      horizontalPadding: 20,
      horizontalAlign: "flex-start",
      children: [/* @__PURE__ */ u(f, {
        textSize: "16px",
        textColor: "text02",
        textAlign: "left",
        isBold: !0,
        children: N("braveSwapPrivacyDescription")
      }), /* @__PURE__ */ u(qA, {
        size: 10
      }), /* @__PURE__ */ P(WN, {
        columnWidth: "full",
        horizontalAlign: "flex-start",
        verticalPadding: 10,
        horizontalPadding: 10,
        children: [/* @__PURE__ */ u(PM, {
          rel: "noopener noreferrer",
          target: "_blank",
          href: "https://www.0x.org/",
          children: "0x"
        }), /* @__PURE__ */ u(f, {
          textSize: "14px",
          textColor: "text03",
          textAlign: "left",
          isBold: !0,
          children: N("braveSwapV2Disclaimer").replaceAll("$1", "0x").replace("$2", "EVM").replace("$3", "Ethereum")
        }), /* @__PURE__ */ u(PM, {
          rel: "noopener noreferrer",
          target: "_blank",
          href: "https://www.0x.org/privacy",
          children: N("braveSwapV2Privacy").replace("$1", "0x")
        })]
      }), /* @__PURE__ */ u(qA, {
        size: 20
      }), /* @__PURE__ */ P(WN, {
        columnWidth: "full",
        horizontalAlign: "flex-start",
        verticalPadding: 10,
        horizontalPadding: 10,
        children: [/* @__PURE__ */ u(PM, {
          rel: "noopener noreferrer",
          target: "_blank",
          href: "https://jup.ag/",
          children: "Jupiter"
        }), /* @__PURE__ */ u(f, {
          textSize: "14px",
          textColor: "text03",
          textAlign: "left",
          isBold: !0,
          children: N("braveSwapV2Disclaimer").replaceAll("$1", "Jupiter").replace("$2", "Solana").replace("$3", "Solana")
        }), /* @__PURE__ */ u(PM, {
          rel: "noopener noreferrer",
          target: "_blank",
          href: "https://docs.jup.ag/legal/privacy-policy",
          children: N("braveSwapV2Privacy").replace("$1", "Jupiter")
        })]
      }), /* @__PURE__ */ u(qA, {
        size: 20
      })]
    })]
  });
}), WN = Y(yA)`
  background-color: ${(A) => A.theme.color.legacy.background01};
  border: 1px solid ${(A) => A.theme.color.legacy.divider01};
  border-radius: 8px;
`, PM = Y.a`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: ${(A) => A.theme.color.legacy.interactive05};
  text-decoration: none;
  display: block;
  cursor: pointer;
  @media (prefers-color-scheme: dark) {
    color: ${(A) => A.theme.color.legacy.interactive06};
  }
`, _z = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik05LjQ1NjY3IDE0LjY2NjdMMC42NjY2NjUgMTQuNjY2N0MwLjI5ODY2NSAxNC42NjY3IC02LjI4MDQ1ZS0wNyAxNC4zNjggLTYuMTE5NTllLTA3IDE0Qy01Ljk1ODc0ZS0wNyAxMy42MzIgMC4yOTg2NjUgMTMuMzMzMyAwLjY2NjY2NSAxMy4zMzMzTDkuNDU2NjcgMTMuMzMzM0M5LjczMjY3IDEyLjU1ODcgMTAuNDY1MyAxMiAxMS4zMzMzIDEyQzEyLjIwMTMgMTIgMTIuOTM0IDEyLjU1ODcgMTMuMjEwNyAxMy4zMzMzTDE1LjMzMzMgMTMuMzMzM0MxNS43MDEzIDEzLjMzMzMgMTYgMTMuNjMyIDE2IDE0QzE2IDE0LjM2OCAxNS43MDEzIDE0LjY2NjcgMTUuMzMzMyAxNC42NjY3TDEzLjIxMDcgMTQuNjY2N0MxMi45MzQgMTUuNDQwNyAxMi4yMDEzIDE2IDExLjMzMzMgMTZDMTAuNDY1MyAxNiA5LjczMjY3IDE1LjQ0MDcgOS40NTY2NyAxNC42NjY3Wk0xMiAxNEMxMiAxMy42MzI3IDExLjcwMTMgMTMuMzMzMyAxMS4zMzMzIDEzLjMzMzNDMTAuOTY2IDEzLjMzMzMgMTAuNjY2NyAxMy42MzI3IDEwLjY2NjcgMTRDMTAuNjY2NyAxNC4zNjczIDEwLjk2NiAxNC42NjY3IDExLjMzMzMgMTQuNjY2N0MxMS43MDEzIDE0LjY2NjcgMTIgMTQuMzY3MyAxMiAxNFpNMi43ODkzMyA4LjY2NjY3TDAuNjY2NjY2IDguNjY2NjdDMC4yOTg2NjYgOC42NjY2NyAtMy42NTc3N2UtMDcgOC4zNjggLTMuNDk2OTFlLTA3IDhDLTMuMzM2MDVlLTA3IDcuNjMyIDAuMjk4NjY2IDcuMzMzMzMgMC42NjY2NjYgNy4zMzMzM0wyLjc4OTMzIDcuMzMzMzNDMy4wNjYgNi41NTkzMyAzLjc5ODY3IDYgNC42NjY2NyA2QzUuNTM0NjcgNiA2LjI2NzMzIDYuNTU5MzMgNi41NDQgNy4zMzMzM0wxNS4zMzMzIDcuMzMzMzNDMTUuNzAxMyA3LjMzMzMzIDE2IDcuNjMyIDE2IDhDMTYgOC4zNjggMTUuNzAxMyA4LjY2NjY3IDE1LjMzMzMgOC42NjY2N0w2LjU0NCA4LjY2NjY3QzYuMjY3MzMgOS40NDEzMyA1LjUzNDY3IDEwIDQuNjY2NjcgMTBDMy43OTg2NyAxMCAzLjA2NiA5LjQ0MTMzIDIuNzg5MzMgOC42NjY2N1pNNS4zMzMzMyA4QzUuMzMzMzMgNy42MzI2NyA1LjAzNDY3IDcuMzMzMzMgNC42NjY2NyA3LjMzMzMzQzQuMjk4NjcgNy4zMzMzMyA0IDcuNjMyNjcgNCA4QzQgOC4zNjczMyA0LjI5ODY3IDguNjY2NjcgNC42NjY2NyA4LjY2NjY3QzUuMDM0NjcgOC42NjY2NyA1LjMzMzMzIDguMzY3MzMgNS4zMzMzMyA4Wk02LjEyMjY3IDIuNjY2NjdMMC42NjY2NjUgMi42NjY2N0MwLjI5ODY2NSAyLjY2NjY3IC0yLjAxMDg2ZS0wNiAyLjM2OCAtMS45OTQ3N2UtMDYgMkMtMS45Nzg2OWUtMDYgMS42MzIgMC4yOTg2NjUgMS4zMzMzMyAwLjY2NjY2NSAxLjMzMzMzTDYuMTIyNjcgMS4zMzMzM0M2LjM5ODY3IDAuNTU4NjY2IDcuMTMyIC0zLjg3NjMzZS0wNyA4IC0zLjQ5NjkxZS0wN0M4Ljg2OCAtMy4xMTc1ZS0wNyA5LjYwMTMzIDAuNTU4NjY2IDkuODc3MzMgMS4zMzMzM0wxNS4zMzMzIDEuMzMzMzNDMTUuNzAxMyAxLjMzMzMzIDE2IDEuNjMyIDE2IDJDMTYgMi4zNjggMTUuNzAxMyAyLjY2NjY3IDE1LjMzMzMgMi42NjY2N0w5Ljg3NzMzIDIuNjY2NjdDOS42MDEzMyAzLjQ0MDY3IDguODY4IDQgOCA0QzcuMTMyIDQgNi4zOTg2NyAzLjQ0MDY3IDYuMTIyNjcgMi42NjY2N1pNOC42NjY2NyAyQzguNjY2NjcgMS42MzI2NyA4LjM2NzMzIDEuMzMzMzMgOCAxLjMzMzMzQzcuNjMyNjcgMS4zMzMzMyA3LjMzMzMzIDEuNjMyNjcgNy4zMzMzMyAyQzcuMzMzMzMgMi4zNjczMyA3LjYzMjY3IDIuNjY2NjcgOCAyLjY2NjY3QzguMzY3MzMgMi42NjY2NyA4LjY2NjY3IDIuMzY3MzMgOC42NjY2NyAyWiIgZmlsbD0iIzQ5NTA1NyIvPgo8L3N2Zz4K", $z = () => {
  const A = YD(), {
    fromAmount: M,
    toAmount: I,
    fromToken: N,
    toToken: j,
    isFetchingQuote: D,
    quoteOptions: c,
    selectedQuoteOptionIndex: x,
    selectingFromOrTo: i,
    fromAssetBalance: T,
    fiatValue: Z,
    selectedGasFeeOption: U,
    slippageTolerance: L,
    useDirectRoute: Q,
    gasEstimates: p,
    getCachedAssetBalance: E,
    onSelectFromToken: r,
    onSelectToToken: b,
    onSelectQuoteOption: l,
    onClickFlipSwapTokens: o,
    setSelectingFromOrTo: y,
    handleOnSetFromAmount: O,
    handleOnSetToAmount: m,
    setSelectedGasFeeOption: H,
    setSlippageTolerance: g,
    setUseDirectRoute: z,
    onSubmit: e,
    submitButtonText: n,
    isSubmitButtonDisabled: a,
    swapValidationError: d,
    refreshBlockchainState: B,
    getNetworkAssetsList: C
  } = A, {
    getLocale: w,
    network: S,
    isReady: t
  } = TA(), [R, X] = G.useState(!1), [V, _] = G.useState(!1), eA = G.useRef(null), cA = G.useRef(null), q = G.useRef(null), jA = G.useCallback(() => {
    X((wA) => !wA), L === "" && g("0.5");
  }, [L, g]);
  return BM(eA, () => y(void 0), i !== void 0), BM(cA, jA, R), BM(q, () => _(!1), V), G.useEffect(() => {
    const wA = window.localStorage.getItem(WA);
    wA !== null && document.documentElement.setAttribute("data-theme", wA);
  }, []), t ? /* @__PURE__ */ P(bA, {
    children: [/* @__PURE__ */ P(Wc, {
      showPrivacyModal: () => _(!0),
      refreshBlockchainState: B,
      children: [/* @__PURE__ */ P(J, {
        rowWidth: "full",
        horizontalPadding: 16,
        verticalPadding: 6,
        marginBottom: 18,
        children: [/* @__PURE__ */ u(f, {
          isBold: !0,
          children: w("braveSwap")
        }), /* @__PURE__ */ P(A4, {
          ref: cA,
          children: [/* @__PURE__ */ u(VA, {
            icon: _z,
            onClick: jA
          }), R && /* @__PURE__ */ u(mz, {
            selectedGasFeeOption: U,
            slippageTolerance: L,
            useDirectRoute: Q,
            setSelectedGasFeeOption: H,
            setSlippageTolerance: g,
            setUseDirectRoute: z,
            gasEstimates: p,
            onClose: () => X(!1)
          })]
        })]
      }), /* @__PURE__ */ u(yc, {
        onInputChange: O,
        inputValue: M,
        onClickSelectToken: () => y("from"),
        token: N,
        tokenBalance: T,
        hasInputError: d === "insufficientBalance" || d === "fromAmountDecimalsOverflow",
        fiatValue: Z
      }), /* @__PURE__ */ u(PD, {
        onClick: o
      }), /* @__PURE__ */ P(FM, {
        boxType: "secondary",
        children: [/* @__PURE__ */ u(Bc, {
          onClickSelectToken: () => y("to"),
          token: j,
          inputValue: I,
          onInputChange: m,
          hasInputError: d === "toAmountDecimalsOverflow",
          isLoading: D,
          disabled: S.coin === uA.Solana
        }), S.coin === uA.Solana && c.length > 0 && /* @__PURE__ */ u(Bi, {
          options: c,
          selectedQuoteOptionIndex: x,
          onSelectQuoteOption: l
        })]
      }), c.length > 0 && /* @__PURE__ */ u(bA, {
        children: /* @__PURE__ */ u(wz, {
          selectedQuoteOption: c[x],
          fromToken: N,
          toToken: j,
          toAmount: I
        })
      }), /* @__PURE__ */ u(PI, {
        onClick: e,
        buttonText: n,
        buttonType: "primary",
        buttonWidth: "full",
        verticalMargin: 16,
        disabled: a
      })]
    }), i && /* @__PURE__ */ u(ti, {
      ref: eA,
      onClose: () => y(void 0),
      onSelectToken: i === "from" ? r : b,
      disabledToken: i === "from" ? j : N,
      getCachedAssetBalance: E,
      selectingFromOrTo: i,
      refreshBlockchainState: B,
      getNetworkAssetsList: C
    }), V && /* @__PURE__ */ u(qz, {
      ref: q,
      onClose: () => _(!1)
    })]
  }) : /* @__PURE__ */ u(Vz, {});
}, A4 = Y(K)`
  display: flex;
  position: relative;
`, M4 = {
  name: "Default Theme",
  color: {
    gray10: "var(--color-gray-10)",
    gray20: "var(--color-gray-20)",
    gray30: "var(--color-gray-30)",
    gray40: "var(--color-gray-40)",
    gray50: "var(--color-gray-50)",
    gray60: "var(--color-gray-60)",
    gray70: "var(--color-gray-70)",
    gray80: "var(--color-gray-80)",
    gray90: "var(--color-gray-90)",
    gray100: "var(--color-gray-100)",
    gray110: "var(--color-gray-110)",
    gray120: "var(--color-gray-120)",
    primary10: "var(--color-primary-10)",
    primary20: "var(--color-primary-20)",
    primary30: "var(--color-primary-30)",
    primary40: "var(--color-primary-40)",
    primary50: "var(--color-primary-50)",
    primary60: "var(--color-primary-60)",
    primary70: "var(--color-primary-70)",
    primary80: "var(--color-primary-80)",
    primary90: "var(--color-primary-90)",
    primary100: "var(--color-primary-100)",
    primary110: "var(--color-primary-110)",
    primary120: "var(--color-primary-120)",
    secondary10: "var(--color-secondary-10)",
    secondary20: "var(--color-secondary-20)",
    secondary30: "var(--color-secondary-30)",
    secondary40: "var(--color-secondary-40)",
    secondary50: "var(--color-secondary-50)",
    secondary60: "var(--color-secondary-60)",
    secondary70: "var(--color-secondary-70)",
    secondary80: "var(--color-secondary-80)",
    secondary90: "var(--color-secondary-90)",
    secondary100: "var(--color-secondary-100)",
    secondary110: "var(--color-secondary-110)",
    secondary120: "var(--color-secondary-120)",
    red10: "var(--color-red-10)",
    red20: "var(--color-red-20)",
    red30: "var(--color-red-30)",
    red40: "var(--color-red-40)",
    red50: "var(--color-red-50)",
    red60: "var(--color-red-60)",
    red70: "var(--color-red-70)",
    red80: "var(--color-red-80)",
    red90: "var(--color-red-90)",
    red100: "var(--color-red-100)",
    red110: "var(--color-red-110)",
    red120: "var(--color-red-120)",
    yellow10: "var(--color-yellow-10)",
    yellow20: "var(--color-yellow-20)",
    yellow30: "var(--color-yellow-30)",
    yellow40: "var(--color-yellow-40)",
    yellow50: "var(--color-yellow-50)",
    yellow60: "var(--color-yellow-60)",
    yellow70: "var(--color-yellow-70)",
    yellow80: "var(--color-yellow-80)",
    yellow90: "var(--color-yellow-90)",
    yellow100: "var(--color-yellow-100)",
    yellow110: "var(--color-yellow-110)",
    yellow120: "var(--color-yellow-120)",
    green10: "var(--color-green-10)",
    green20: "var(--color-green-20)",
    green30: "var(--color-green-30)",
    green40: "var(--color-green-40)",
    green50: "var(--color-green-50)",
    green60: "var(--color-green-60)",
    green70: "var(--color-green-70)",
    green80: "var(--color-green-80)",
    green90: "var(--color-green-90)",
    green100: "var(--color-green-100)",
    green110: "var(--color-green-110)",
    green120: "var(--color-green-120)",
    blue10: "var(--color-blue-10)",
    blue20: "var(--color-blue-20)",
    blue30: "var(--color-blue-30)",
    blue40: "var(--color-blue-40)",
    blue50: "var(--color-blue-50)",
    blue60: "var(--color-blue-60)",
    blue70: "var(--color-blue-70)",
    blue80: "var(--color-blue-80)",
    blue90: "var(--color-blue-90)",
    blue100: "var(--color-blue-100)",
    blue110: "var(--color-blue-110)",
    blue120: "var(--color-blue-120)",
    lightBlue10: "var(--color-light-blue-10)",
    lightBlue20: "var(--color-light-blue-20)",
    lightBlue30: "var(--color-light-blue-30)",
    lightBlue40: "var(--color-light-blue-40)",
    lightBlue50: "var(--color-light-blue-50)",
    lightBlue60: "var(--color-light-blue-60)",
    lightBlue70: "var(--color-light-blue-70)",
    lightBlue80: "var(--color-light-blue-80)",
    lightBlue90: "var(--color-light-blue-90)",
    lightBlue100: "var(--color-light-blue-100)",
    lightBlue110: "var(--color-light-blue-110)",
    lightBlue120: "var(--color-light-blue-120)",
    violet10: "var(--color-violet-10)",
    violet20: "var(--color-violet-20)",
    violet30: "var(--color-violet-30)",
    violet40: "var(--color-violet-40)",
    violet50: "var(--color-violet-50)",
    violet60: "var(--color-violet-60)",
    violet70: "var(--color-violet-70)",
    violet80: "var(--color-violet-80)",
    violet90: "var(--color-violet-90)",
    violet100: "var(--color-violet-100)",
    violet110: "var(--color-violet-110)",
    violet120: "var(--color-violet-120)",
    pink10: "var(--color-pink-10)",
    pink20: "var(--color-pink-20)",
    pink30: "var(--color-pink-30)",
    pink40: "var(--color-pink-40)",
    pink50: "var(--color-pink-50)",
    pink60: "var(--color-pink-60)",
    pink70: "var(--color-pink-70)",
    pink80: "var(--color-pink-80)",
    pink90: "var(--color-pink-90)",
    pink100: "var(--color-pink-100)",
    pink110: "var(--color-pink-110)",
    pink120: "var(--color-pink-120)",
    teal10: "var(--color-teal-10)",
    teal20: "var(--color-teal-20)",
    teal30: "var(--color-teal-30)",
    teal40: "var(--color-teal-40)",
    teal50: "var(--color-teal-50)",
    teal60: "var(--color-teal-60)",
    teal70: "var(--color-teal-70)",
    teal80: "var(--color-teal-80)",
    teal90: "var(--color-teal-90)",
    teal100: "var(--color-teal-100)",
    teal110: "var(--color-teal-110)",
    teal120: "var(--color-teal-120)",
    tor10: "var(--color-tor-10)",
    tor20: "var(--color-tor-20)",
    tor30: "var(--color-tor-30)",
    tor40: "var(--color-tor-40)",
    tor50: "var(--color-tor-50)",
    tor60: "var(--color-tor-60)",
    tor70: "var(--color-tor-70)",
    tor80: "var(--color-tor-80)",
    tor90: "var(--color-tor-90)",
    tor100: "var(--color-tor-100)",
    tor110: "var(--color-tor-110)",
    tor120: "var(--color-tor-120)",
    white: "#ffffff",
    legacy: {
      background01: "var(--color-legacy-background1)",
      background02: "var(--color-legacy-background2)",
      text01: "var(--color-legacy-text1)",
      text02: "var(--color-legacy-text2)",
      text03: "var(--color-legacy-text3)",
      interactive01: "var(--color-legacy-interactive1)",
      interactive02: "var(--color-legacy-interactive2)",
      interactive03: "var(--color-legacy-interactive3)",
      interactive04: "var(--color-legacy-interactive4)",
      interactive05: "var(--color-legacy-interactive5)",
      interactive06: "var(--color-legacy-interactive6)",
      interactive07: "var(--color-legacy-interactive7)",
      interactive08: "var(--color-legacy-interactive8)",
      disabled: "var(--color-legacy-disabled)",
      divider01: "var(--color-legacy-divider1)",
      focusBorder: "var(--color-legacy-focus-border)"
    }
  }
};
const D4 = (A) => {
  const {
    theme: M,
    assetsList: I,
    account: N,
    network: j,
    supportedNetworks: D,
    defaultBaseCurrency: c,
    exchanges: x,
    walletAccounts: i,
    isWalletConnected: T,
    isReady: Z,
    connectWallet: U,
    disconnectWallet: L,
    switchAccount: Q,
    switchNetwork: p,
    getBalance: E,
    getTokenBalance: r,
    getTokenBalances: b,
    getLocale: l,
    getTokenPrice: o,
    getNetworkFeeEstimate: y,
    ethWalletAdapter: O,
    solWalletAdapter: m,
    swapService: H
  } = A;
  return /* @__PURE__ */ u(sj, {
    theme: M || M4,
    children: /* @__PURE__ */ u(Uj, {
      network: j,
      account: N,
      assetsList: I,
      supportedNetworks: D,
      defaultBaseCurrency: c,
      exchanges: x,
      walletAccounts: i,
      isWalletConnected: T,
      isReady: Z,
      connectWallet: U,
      disconnectWallet: L,
      switchAccount: Q,
      switchNetwork: p,
      getBalance: E,
      getTokenBalance: r,
      getTokenBalances: b,
      getLocale: l,
      getTokenPrice: o,
      getNetworkFeeEstimate: y,
      ethWalletAdapter: O,
      solWalletAdapter: m,
      swapService: H,
      children: /* @__PURE__ */ u(QD, {
        children: /* @__PURE__ */ u($z, {})
      })
    })
  });
};
export {
  WA as BRAVE_SWAP_DATA_THEME_KEY,
  bj as ChainID,
  uA as CoinType,
  Qj as MAX_UINT256,
  OM as NATIVE_ASSET_CONTRACT_ADDRESS_0X,
  D4 as Swap,
  gI as WRAPPED_SOL_CONTRACT_ADDRESS,
  g4 as ZERO_EX_VALIDATION_ERROR_CODE,
  UD as hexStrToNumberArray
};
//# sourceMappingURL=lib.js.map