/* v0.0.16,0.0.17,1 2017-10-30 14:30:06 */
!
function() {
    function t() {
        return Math.random()
    }
    function e() {
        var t, e = window[r];
        return isNaN(e) ? (t = location.href.split(r + "=")[1], e = parseFloat(t), void(isNaN(e) || (n = e))) : void(n = e)
    }
    var n = 1,
    r = "aq-ty-grey-ratio",
    i = function() {},
    o = function() { !
        function t(e, n, r) {
            function i(a, u) {
                if (!n[a]) {
                    if (!e[a]) {
                        var s = "function" == typeof require && require;
                        if (!u && s) return s(a, !0);
                        if (o) return o(a, !0);
                        throw new Error("Cannot find module '" + a + "'")
                    }
                    var f = n[a] = {
                        exports: {}
                    };
                    e[a][0].call(f.exports,
                    function(t) {
                        var n = e[a][1][t];
                        return i(n ? n: t)
                    },
                    f, f.exports, t, e, n, r)
                }
                return n[a].exports
            }
            for (var o = "function" == typeof require && require,
            a = 0; a < r.length; a++) i(r[a]);
            return i
        } ({
            1 : [function(t, e, n) {
                function r(t) {
                    var e = -1 == t.indexOf("?") ? "?": "&";
                    return t + e + "_t=" + a
                }
                function i() {
                    var t;
                    return s.currentScript ? s.currentScript: (t = s.getElementsByTagName("script"), t[t.length - 1])
                }
                var o = t("./loader").pointman;
                o._now = o._now || (new Date).getTime();
                var a = Math.floor(o._now / 36e5);
                o.TIMESTAMP = a;
                var u = t("./libs/events");
                o.events = u,
                o.on = u.on,
                o.addTimeStamp = r,
                o._z = 19,
                o.addHourStamp = function(t, e) {
                    var n = Math.floor((new Date).getTime() / (36e5 * (e || 2))),
                    r = -1 === t.indexOf("?") ? "?": "&";
                    return t + r + "_t=" + n
                };
                var s = document,
                f = i(),
                c = f.getAttribute("data-app") || f.getAttribute("app") || "",
                l = "//g.alicdn.com/sd/";
                o.register({
                    name: "m/",
                    charset: "utf-8",
                    url: l + "pointman/js/"
                }),
                o.register({
                    name: "do",
                    url: l + "pointman/js/do.js?_=" + a
                }),
                o.use("do",
                function(t) {
                    t.init(c)
                })
            },
            {
                "./libs/events": 2,
                "./loader": 3
            }],
            2 : [function(t, e, n) {
                var r = [].slice,
                i = {},
                o = function(t, e) {
                    var n = i[t] || (i[t] = []);
                    n.push(e)
                },
                a = function(t, e) {
                    var n = function() {
                        u(t, n),
                        e.apply(null, arguments)
                    };
                    o(t, n)
                },
                u = function(t, e) {
                    if (!t && !e) return void(i = {});
                    var n = i[t];
                    if (n) if (e) for (var r = n.length - 1; r >= 0; r--) n[r] === e && n.splice(r, 1);
                    else delete i[t]
                },
                s = function(t) {
                    var e = i[t],
                    n = r.call(arguments, 1);
                    if (e) {
                        e = e.slice();
                        for (var o = 0,
                        a = e.length; a > o; o++) e[o].apply(null, n)
                    }
                };
                e.exports = {
                    on: o,
                    one: a,
                    off: u,
                    trigger: s,
                    __events: i
                }
            },
            {}],
            3 : [function(t, e, n) { !
                function(t, e) {
                    "use strict";
                    function r(t) {
                        "object" == typeof n && (n[e] = n.pointman = t)
                    }
                    function i(t, e, n) {
                        this.name = t,
                        this.deps = e,
                        this.callback = n,
                        this.deps_left = e.length,
                        this.init()
                    }
                    function o(t) {
                        var e = t.split("/");
                        if (1 != e.length) {
                            var n, r = e[0];
                            return c.hasOwnProperty(r) ? (n = {
                                name: t,
                                charset: c[r].charset,
                                url: c[r].url + t + ".js"
                            },
                            m.register(n), n) : void 0
                        }
                    }
                    function a() {
                        var t, e, n = s.length;
                        for (t = 0; n > t; t++) e = s.shift(),
                        e && e[0] && (m.is_registered(e[0]) || l.hasOwnProperty(e[0]) ? m.use.apply(null, e) : s.push(e))
                    }
                    if (t[e]) return void r(t[e]);
                    var u = "_" + e + "_q",
                    s = t[u] = t[u] || [],
                    f = {},
                    c = {},
                    l = {},
                    p = {},
                    h = {},
                    d = document,
                    v = 0,
                    m = function() {
                        var t = Array.prototype.slice.call(arguments);
                        t.length >= 2 && s.push(t)
                    };
                    m.q = s,
                    i.prototype = {
                        init: function() {
                            0 == this.deps_left && this.loaded(this.name);
                            for (var t = 0; t < this.deps.length; t++) this.loadModule(this.deps[t])
                        },
                        loadModule: function(t) {
                            var e = this;
                            if (l.hasOwnProperty(t)) return void this.loaded(t);
                            var n = f[t] || o(t);
                            if (!n) throw new Error("unregisted module: " + t);
                            var r = d.createElement("script");
                            r.src = n.url,
                            n.charset && (r.charset = n.charset);
                            var i = d.getElementsByTagName("script")[0];
                            i.parentNode.insertBefore(r, i),
                            h[t] = h[t] || [],
                            h[t].push(function() {
                                e.loaded()
                            }),
                            n.timeout && (clearTimeout(p[t]), p[t] = setTimeout(function() {
                                m.define(t,
                                function() {})
                            },
                            n.timeout))
                        },
                        loaded: function() {
                            this.deps_left--,
                            this.deps_left <= 0 && this.run(),
                            a()
                        },
                        run: function() {
                            if (!l[this.name]) {
                                var t, e = [];
                                for (t = 0; t < this.deps.length; t++) e.push(l[this.deps[t]]);
                                l[this.name] = this.callback.apply(null, e) || {
                                    PT_NULL: 1
                                };
                                for (var n, r = h[this.name] || []; n = r.shift();) n.call()
                            }
                        }
                    },
                    m.checkQueue = a,
                    m.autoCheckQueue = function(t) {
                        return setInterval(a, t || 100)
                    },
                    t[e] = m,
                    m.define = function(t, e, n) {
                        "function" == typeof e && (n = e, e = []),
                        new i(t, e, n)
                    },
                    m.register = function(t) {
                        var e;
                        if ("[object Array]" === Object.prototype.toString.call(t)) for (var n = 0; n < t.length; n++) m.register(t[n]);
                        else e = t.name,
                        e.match(/\/$/) ? c[e.substr(0, e.length - 1)] = t: f[e] = t,
                        a()
                    },
                    m.use = m.require = function(t, e) {
                        "string" == typeof t && (t = [t]),
                        new i(v++, t, e)
                    },
                    m.is_registered = function(t) {
                        return f.hasOwnProperty(t) || c.hasOwnProperty(t.split("/")[0])
                    },
                    r(m)
                } (window, "pointman")
            },
            {}]
        },
        {},
        [1])
    };
    e(),
    t() > n ? i() : o()
} ();