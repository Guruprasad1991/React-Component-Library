import Q from "react";
var Z = { exports: {} }, W = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Pe;
function cr() {
  if (Pe) return W;
  Pe = 1;
  var D = Q, R = Symbol.for("react.element"), h = Symbol.for("react.fragment"), b = Object.prototype.hasOwnProperty, T = D.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, O = { key: !0, ref: !0, __self: !0, __source: !0 };
  function S(y, f, m) {
    var c, g = {}, P = null, Y = null;
    m !== void 0 && (P = "" + m), f.key !== void 0 && (P = "" + f.key), f.ref !== void 0 && (Y = f.ref);
    for (c in f) b.call(f, c) && !O.hasOwnProperty(c) && (g[c] = f[c]);
    if (y && y.defaultProps) for (c in f = y.defaultProps, f) g[c] === void 0 && (g[c] = f[c]);
    return { $$typeof: R, type: y, key: P, ref: Y, props: g, _owner: T.current };
  }
  return W.Fragment = h, W.jsx = S, W.jsxs = S, W;
}
var I = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var we;
function dr() {
  return we || (we = 1, process.env.NODE_ENV !== "production" && function() {
    var D = Q, R = Symbol.for("react.element"), h = Symbol.for("react.portal"), b = Symbol.for("react.fragment"), T = Symbol.for("react.strict_mode"), O = Symbol.for("react.profiler"), S = Symbol.for("react.provider"), y = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), m = Symbol.for("react.suspense"), c = Symbol.for("react.suspense_list"), g = Symbol.for("react.memo"), P = Symbol.for("react.lazy"), Y = Symbol.for("react.offscreen"), ee = Symbol.iterator, Ce = "@@iterator";
    function je(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = ee && e[ee] || e[Ce];
      return typeof r == "function" ? r : null;
    }
    var j = D.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function d(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        ke("error", e, t);
      }
    }
    function ke(e, r, t) {
      {
        var n = j.ReactDebugCurrentFrame, o = n.getStackAddendum();
        o !== "" && (r += "%s", t = t.concat([o]));
        var u = t.map(function(i) {
          return String(i);
        });
        u.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, u);
      }
    }
    var xe = !1, De = !1, Fe = !1, Ae = !1, We = !1, re;
    re = Symbol.for("react.module.reference");
    function Ie(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === b || e === O || We || e === T || e === m || e === c || Ae || e === Y || xe || De || Fe || typeof e == "object" && e !== null && (e.$$typeof === P || e.$$typeof === g || e.$$typeof === S || e.$$typeof === y || e.$$typeof === f || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === re || e.getModuleId !== void 0));
    }
    function $e(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var o = r.displayName || r.name || "";
      return o !== "" ? t + "(" + o + ")" : t;
    }
    function te(e) {
      return e.displayName || "Context";
    }
    function E(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && d("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case b:
          return "Fragment";
        case h:
          return "Portal";
        case O:
          return "Profiler";
        case T:
          return "StrictMode";
        case m:
          return "Suspense";
        case c:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case y:
            var r = e;
            return te(r) + ".Consumer";
          case S:
            var t = e;
            return te(t._context) + ".Provider";
          case f:
            return $e(e, e.render, "ForwardRef");
          case g:
            var n = e.displayName || null;
            return n !== null ? n : E(e.type) || "Memo";
          case P: {
            var o = e, u = o._payload, i = o._init;
            try {
              return E(i(u));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var w = Object.assign, F = 0, ne, ae, ie, oe, ue, se, le;
    function fe() {
    }
    fe.__reactDisabledLog = !0;
    function Ye() {
      {
        if (F === 0) {
          ne = console.log, ae = console.info, ie = console.warn, oe = console.error, ue = console.group, se = console.groupCollapsed, le = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: fe,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        F++;
      }
    }
    function Le() {
      {
        if (F--, F === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: w({}, e, {
              value: ne
            }),
            info: w({}, e, {
              value: ae
            }),
            warn: w({}, e, {
              value: ie
            }),
            error: w({}, e, {
              value: oe
            }),
            group: w({}, e, {
              value: ue
            }),
            groupCollapsed: w({}, e, {
              value: se
            }),
            groupEnd: w({}, e, {
              value: le
            })
          });
        }
        F < 0 && d("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var B = j.ReactCurrentDispatcher, J;
    function L(e, r, t) {
      {
        if (J === void 0)
          try {
            throw Error();
          } catch (o) {
            var n = o.stack.trim().match(/\n( *(at )?)/);
            J = n && n[1] || "";
          }
        return `
` + J + e;
      }
    }
    var q = !1, V;
    {
      var Ve = typeof WeakMap == "function" ? WeakMap : Map;
      V = new Ve();
    }
    function ce(e, r) {
      if (!e || q)
        return "";
      {
        var t = V.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      q = !0;
      var o = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var u;
      u = B.current, B.current = null, Ye();
      try {
        if (r) {
          var i = function() {
            throw Error();
          };
          if (Object.defineProperty(i.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(i, []);
            } catch (p) {
              n = p;
            }
            Reflect.construct(e, [], i);
          } else {
            try {
              i.call();
            } catch (p) {
              n = p;
            }
            e.call(i.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (p) {
            n = p;
          }
          e();
        }
      } catch (p) {
        if (p && n && typeof p.stack == "string") {
          for (var a = p.stack.split(`
`), v = n.stack.split(`
`), s = a.length - 1, l = v.length - 1; s >= 1 && l >= 0 && a[s] !== v[l]; )
            l--;
          for (; s >= 1 && l >= 0; s--, l--)
            if (a[s] !== v[l]) {
              if (s !== 1 || l !== 1)
                do
                  if (s--, l--, l < 0 || a[s] !== v[l]) {
                    var _ = `
` + a[s].replace(" at new ", " at ");
                    return e.displayName && _.includes("<anonymous>") && (_ = _.replace("<anonymous>", e.displayName)), typeof e == "function" && V.set(e, _), _;
                  }
                while (s >= 1 && l >= 0);
              break;
            }
        }
      } finally {
        q = !1, B.current = u, Le(), Error.prepareStackTrace = o;
      }
      var x = e ? e.displayName || e.name : "", C = x ? L(x) : "";
      return typeof e == "function" && V.set(e, C), C;
    }
    function Me(e, r, t) {
      return ce(e, !1);
    }
    function Ne(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function M(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return ce(e, Ne(e));
      if (typeof e == "string")
        return L(e);
      switch (e) {
        case m:
          return L("Suspense");
        case c:
          return L("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case f:
            return Me(e.render);
          case g:
            return M(e.type, r, t);
          case P: {
            var n = e, o = n._payload, u = n._init;
            try {
              return M(u(o), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var A = Object.prototype.hasOwnProperty, de = {}, ve = j.ReactDebugCurrentFrame;
    function N(e) {
      if (e) {
        var r = e._owner, t = M(e.type, e._source, r ? r.type : null);
        ve.setExtraStackFrame(t);
      } else
        ve.setExtraStackFrame(null);
    }
    function Ue(e, r, t, n, o) {
      {
        var u = Function.call.bind(A);
        for (var i in e)
          if (u(e, i)) {
            var a = void 0;
            try {
              if (typeof e[i] != "function") {
                var v = Error((n || "React class") + ": " + t + " type `" + i + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[i] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw v.name = "Invariant Violation", v;
              }
              a = e[i](r, i, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (s) {
              a = s;
            }
            a && !(a instanceof Error) && (N(o), d("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, i, typeof a), N(null)), a instanceof Error && !(a.message in de) && (de[a.message] = !0, N(o), d("Failed %s type: %s", t, a.message), N(null));
          }
      }
    }
    var Be = Array.isArray;
    function K(e) {
      return Be(e);
    }
    function Je(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function qe(e) {
      try {
        return pe(e), !1;
      } catch {
        return !0;
      }
    }
    function pe(e) {
      return "" + e;
    }
    function _e(e) {
      if (qe(e))
        return d("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Je(e)), pe(e);
    }
    var ge = j.ReactCurrentOwner, Ke = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, he, ye;
    function Ge(e) {
      if (A.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function ze(e) {
      if (A.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Xe(e, r) {
      typeof e.ref == "string" && ge.current;
    }
    function He(e, r) {
      {
        var t = function() {
          he || (he = !0, d("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function Ze(e, r) {
      {
        var t = function() {
          ye || (ye = !0, d("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var Qe = function(e, r, t, n, o, u, i) {
      var a = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: R,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: i,
        // Record the component responsible for creating this element.
        _owner: u
      };
      return a._store = {}, Object.defineProperty(a._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(a, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: n
      }), Object.defineProperty(a, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: o
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    };
    function er(e, r, t, n, o) {
      {
        var u, i = {}, a = null, v = null;
        t !== void 0 && (_e(t), a = "" + t), ze(r) && (_e(r.key), a = "" + r.key), Ge(r) && (v = r.ref, Xe(r, o));
        for (u in r)
          A.call(r, u) && !Ke.hasOwnProperty(u) && (i[u] = r[u]);
        if (e && e.defaultProps) {
          var s = e.defaultProps;
          for (u in s)
            i[u] === void 0 && (i[u] = s[u]);
        }
        if (a || v) {
          var l = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          a && He(i, l), v && Ze(i, l);
        }
        return Qe(e, a, v, o, n, ge.current, i);
      }
    }
    var G = j.ReactCurrentOwner, be = j.ReactDebugCurrentFrame;
    function k(e) {
      if (e) {
        var r = e._owner, t = M(e.type, e._source, r ? r.type : null);
        be.setExtraStackFrame(t);
      } else
        be.setExtraStackFrame(null);
    }
    var z;
    z = !1;
    function X(e) {
      return typeof e == "object" && e !== null && e.$$typeof === R;
    }
    function me() {
      {
        if (G.current) {
          var e = E(G.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function rr(e) {
      return "";
    }
    var Ee = {};
    function tr(e) {
      {
        var r = me();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function Re(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = tr(r);
        if (Ee[t])
          return;
        Ee[t] = !0;
        var n = "";
        e && e._owner && e._owner !== G.current && (n = " It was passed a child from " + E(e._owner.type) + "."), k(e), d('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), k(null);
      }
    }
    function Te(e, r) {
      {
        if (typeof e != "object")
          return;
        if (K(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            X(n) && Re(n, r);
          }
        else if (X(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var o = je(e);
          if (typeof o == "function" && o !== e.entries)
            for (var u = o.call(e), i; !(i = u.next()).done; )
              X(i.value) && Re(i.value, r);
        }
      }
    }
    function nr(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === f || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === g))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = E(r);
          Ue(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !z) {
          z = !0;
          var o = E(r);
          d("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", o || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && d("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ar(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            k(e), d("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), k(null);
            break;
          }
        }
        e.ref !== null && (k(e), d("Invalid attribute `ref` supplied to `React.Fragment`."), k(null));
      }
    }
    var Oe = {};
    function Se(e, r, t, n, o, u) {
      {
        var i = Ie(e);
        if (!i) {
          var a = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (a += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var v = rr();
          v ? a += v : a += me();
          var s;
          e === null ? s = "null" : K(e) ? s = "array" : e !== void 0 && e.$$typeof === R ? (s = "<" + (E(e.type) || "Unknown") + " />", a = " Did you accidentally export a JSX literal instead of a component?") : s = typeof e, d("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", s, a);
        }
        var l = er(e, r, t, o, u);
        if (l == null)
          return l;
        if (i) {
          var _ = r.children;
          if (_ !== void 0)
            if (n)
              if (K(_)) {
                for (var x = 0; x < _.length; x++)
                  Te(_[x], e);
                Object.freeze && Object.freeze(_);
              } else
                d("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Te(_, e);
        }
        if (A.call(r, "key")) {
          var C = E(e), p = Object.keys(r).filter(function(fr) {
            return fr !== "key";
          }), H = p.length > 0 ? "{key: someKey, " + p.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Oe[C + H]) {
            var lr = p.length > 0 ? "{" + p.join(": ..., ") + ": ...}" : "{}";
            d(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, H, C, lr, C), Oe[C + H] = !0;
          }
        }
        return e === b ? ar(l) : nr(l), l;
      }
    }
    function ir(e, r, t) {
      return Se(e, r, t, !0);
    }
    function or(e, r, t) {
      return Se(e, r, t, !1);
    }
    var ur = or, sr = ir;
    I.Fragment = b, I.jsx = ur, I.jsxs = sr;
  }()), I;
}
process.env.NODE_ENV === "production" ? Z.exports = cr() : Z.exports = dr();
var U = Z.exports;
const vr = "_button_1v6kg_7", pr = "_sm_1v6kg_61", _r = "_md_1v6kg_73", gr = "_lg_1v6kg_85", hr = "_primary_1v6kg_103", yr = "_secondary_1v6kg_123", br = "_danger_1v6kg_141", mr = "_outline_1v6kg_165", Er = "_ghost_1v6kg_183", Rr = "_fullWidth_1v6kg_217", Tr = "_spinner_1v6kg_231", Or = "_spin_1v6kg_231", $ = {
  button: vr,
  sm: pr,
  md: _r,
  lg: gr,
  primary: hr,
  secondary: yr,
  danger: br,
  outline: mr,
  ghost: Er,
  fullWidth: Rr,
  spinner: Tr,
  spin: Or
}, Sr = Q.forwardRef(
  ({
    variant: D = "primary",
    size: R = "md",
    loading: h = !1,
    fullWidth: b = !1,
    startIcon: T,
    endIcon: O,
    disabled: S,
    children: y,
    className: f,
    ...m
  }, c) => {
    const g = [
      $.button,
      $[D],
      $[R],
      b ? $.fullWidth : "",
      f ?? ""
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ U.jsxs(
      "button",
      {
        ref: c,
        className: g,
        disabled: S || h,
        "aria-busy": h,
        ...m,
        children: [
          h && /* @__PURE__ */ U.jsx("span", { className: $.spinner, "aria-hidden": "true" }),
          !h && T && /* @__PURE__ */ U.jsx("span", { "aria-hidden": "true", children: T }),
          y,
          !h && O && /* @__PURE__ */ U.jsx("span", { "aria-hidden": "true", children: O })
        ]
      }
    );
  }
);
Sr.displayName = "Button";
export {
  Sr as Button
};
