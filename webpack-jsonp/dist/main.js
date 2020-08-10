let main = (function(e) {
  function n(n) {
    for (var t, o, u = n[0], i = n[1], a = 0, l = []; a < u.length; a++)
      (o = u[a]), Object.prototype.hasOwnProperty.call(r, o) && r[o] && l.push(r[o][0]), (r[o] = 0)
    for (t in i) Object.prototype.hasOwnProperty.call(i, t) && (e[t] = i[t])
    for (c && c(n); l.length; ) l.shift()()
  }
  var t = {};
    var r = { 0: 0 }
  function o(n) {
    if (t[n]) return t[n].exports
    let r = (t[n] = { i: n, l: !1, exports: {} })
    return e[n].call(r.exports, r, r.exports, o), (r.l = !0), r.exports
  }
  ;(o.e = function(e) {
    let n = [];
      var t = r[e]
    if (t !== 0)
      if (t) n.push(t[2])
      else {
        let u = new Promise(function(n, o) {
          t = r[e] = [n, o]
        })
        n.push((t[2] = u))
        let i;
          var a = document.createElement('script')
        ;(a.charset = 'utf-8'),
          (a.timeout = 120),
          o.nc && a.setAttribute('nonce', o.nc),
          (a.src = (function(e) {
            return `${o.p  }${  {}[e] || e  }.bundle.js`
          })(e))
        let c = new Error()
        i = function(n) {
          ;(a.onerror = a.onload = null), clearTimeout(l)
          let t = r[e]
          if (t !== 0) {
            if (t) {
              let o = n && (n.type === 'load' ? 'missing' : n.type);
                var u = n && n.target && n.target.src
              ;(c.message = `Loading chunk ${  e  } failed.\n(${  o  }: ${  u  })`),
                (c.name = 'ChunkLoadError'),
                (c.type = o),
                (c.request = u),
                t[1](c)
            }
            r[e] = void 0
          }
        }
        var l = setTimeout(function() {
          i({ type: 'timeout', target: a })
        }, 12e4)
        ;(a.onerror = a.onload = i), document.head.appendChild(a)
      }
    return Promise.all(n)
  }),
    (o.m = e),
    (o.c = t),
    (o.d = function(e, n, t) {
      o.o(e, n) || Object.defineProperty(e, n, { enumerable: !0, get: t })
    }),
    (o.r = function(e) {
      typeof Symbol != 'undefined' &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 })
    }),
    (o.t = function(e, n) {
      if ((1 & n && (e = o(e)), 8 & n)) return e
      if (4 & n && typeof e == 'object' && e && e.__esModule) return e
      let t = Object.create(null)
      if (
        (o.r(t),
        Object.defineProperty(t, 'default', { enumerable: !0, value: e }),
        2 & n && typeof e != 'string')
      )
        for (let r in e)
          o.d(
            t,
            r,
            function(n) {
              return e[n]
            }.bind(null, r)
          )
      return t
    }),
    (o.n = function(e) {
      let n =
        e && e.__esModule
          ? function() {
              return e.default
            }
          : function() {
              return e
            }
      return o.d(n, 'a', n), n
    }),
    (o.o = function(e, n) {
      return Object.prototype.hasOwnProperty.call(e, n)
    }),
    (o.p = ''),
    (o.oe = function(e) {
      throw (console.error(e), e)
    })
  let u = (window.webpackJsonpmain = window.webpackJsonpmain || []);
    var i = u.push.bind(u)
  ;(u.push = n), (u = u.slice())
  for (let a = 0; a < u.length; a++) n(u[a])
  var c = i
  return o((o.s = 0))
})([
  function(e, n, t) {
    t.e(1)
      .then(t.t.bind(null, 1, 7))
      .then((e) => {
        console.log('foo 的执行结果', e.foo())
      })
  }
])
