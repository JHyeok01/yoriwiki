!function () {
    "use strict";
    var h = (
        i.prototype.isAdBlocked = function (e) {
            var t = this;
            this.createPixel(i.allowedPixelUrl, function () {
                (t.allowedPixelLoaded = !0) === t.blockedPixelFailed && e(!0)
            }, function () {}),
            this.createPixel(i.blockedPixelUrl, function () {
                e(!1)
            }, function () {
                (t.blockedPixelFailed = !0) === t.allowedPixelLoaded && e(!0)
            })
        },
        i.prototype.createPixel = function (e, t, i) {
            var n = document.createElement("img");
            n.src = e,
            n.height = 1,
            n.width = 1,
            n.style.display = "none",
            n.onload = t,
            n.onerror = i
        },
        i.allowedPixelUrl = "https://static.criteo.net/images/pixel.gif?ch=1",
        i.blockedPixelUrl = "https://static.criteo.net/images/pixel.gif?ch=2",
        i
    );
    function i() {
        this.allowedPixelLoaded = !1,
        this.blockedPixelFailed = !1
    }
    var A = (
        t.create = function (e) {
            return new t(e)
        },
        t.prototype.adBlockFlagEnabled = function () {
            var e = t.ADBLOCK_FLAG_KEY;
            return null !== this
                .localStorageHelper
                .getItem(e)
        },
        t.prototype.enableAdBlockFlag = function () {
            var e = t.ADBLOCK_FLAG_KEY;
            this
                .localStorageHelper
                .setItem(e, "1", t.ADBLOCK_FLAG_LIFETIME)
        },
        t.prototype.disableAdBlockFlag = function () {
            var e = t.ADBLOCK_FLAG_KEY;
            this
                .localStorageHelper
                .removeItem(e)
        },
        t.prototype.setAdBlockFlagTimer = function (e) {
            var t = this;
            this.adBlockFlagEnabled() || !this.timerEnabled || this.timerStarted || (
                this.timerStarted = !0,
                setTimeout(function () {
                    t.timerEnabled && (t.refreshAdblockFlag(), t.timerEnabled = !1)
                }, e)
            )
        },
        t.prototype.disableAdBlockFlagTimer = function () {
            this.timerEnabled = !1,
            this.adBlockFlagEnabled() && this.refreshAdblockFlag()
        },
        t.prototype.refreshAdblockFlag = function () {
            var t = this;
            (new h).isAdBlocked(function (e) {
                e
                    ? t.enableAdBlockFlag()
                    : t.disableAdBlockFlag()
            })
        },
        t.ADBLOCK_FLAG_KEY = "criteo_adblock_flag",
        t.ADBLOCK_FLAG_LIFETIME = 864e5,
        t
    );
    function t(e) {
        this.timerEnabled = !0,
        this.timerStarted = !1,
        this.localStorageHelper = e
    }
    var n = function (e, t) {
        return (n = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array && function (e, t) {
            e.__proto__ = t
        } || function (e, t) {
            for (var i in t) 
                t.hasOwnProperty(i) && (e[i] = t[i])
        })(e, t)
    };
    function r(e, t) {
        function i() {
            this.constructor = e
        }
        n(e, t),
        e.prototype = null === t
            ? Object.create(t)
            : (i.prototype = t.prototype, new i)
    }
    var S = function () {
        return (S = Object.assign || function (e) {
            for (var t, i = 1, n = arguments.length; i < n; i++) 
                for (var o in t = arguments[i]) 
                    Object
                        .prototype
                        .hasOwnProperty
                        .call(t, o) && (e[o] = t[o]);
            return e
        }).apply(this, arguments)
    };
    function e(e, t) {
        var i = {};
        for (var n in e) 
            Object
                .prototype
                .hasOwnProperty
                .call(e, n) && t.indexOf(n) < 0 && (i[n] = e[n]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
            var o = 0;
            for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) 
                t.indexOf(n[o]) < 0 && Object
                    .prototype
                    .propertyIsEnumerable
                    .call(e, n[o]) && (i[n[o]] = e[n[o]])
            }
        return i
    }
    function o(e, t, i, n) {
        var o,
            r = arguments.length,
            a = r < 3
                ? t
                : null === n
                    ? n = Object.getOwnPropertyDescriptor(t, i)
                    : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) 
            a = Reflect.decorate(e, t, i, n);
        else 
            for (var s = e.length - 1; 0 <= s; s--) 
                (o = e[s]) && (a = (
                    r < 3
                        ? o(a)
                        : 3 < r
                            ? o(t, i, a)
                            : o(t, i)
                ) || a);
    return 3 < r && a && Object.defineProperty(t, i, a),
        a
    }
    function a(i, n) {
        return function (e, t) {
            n(e, t, i)
        }
    }
    function s(e, t) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) 
            return Reflect.metadata(e, t)
    }
    function d(e, a, s, d) {
        return new(s = s || Promise)(function (i, t) {
            function n(e) {
                try {
                    r(d.next(e))
                } catch (e) {
                    t(e)
                }
            }
            function o(e) {
                try {
                    r(d.throw(e))
                } catch (e) {
                    t(e)
                }
            }
            function r(e) {
                var t;
                e.done
                    ? i(e.value)
                    : (
                        (t = e.value)instanceof s
                            ? t
                            : new s(function (e) {
                                e(t)
                            })
                    ).then(n, o)
            }
            r((d = d.apply(e, a || [])).next())
        })
    }
    function c(i, n) {
        var o,
            r,
            a,
            e,
            s = {
                label: 0,
                sent: function () {
                    if (1 & a[0]) 
                        throw a[1];
                    return a[1]
                },
                trys: [],
                ops: []
            };
        return e = {
            next: t(0),
            throw: t(1),
            return: t(2)
        },
        "function" == typeof Symbol && (e[Symbol.iterator] = function () {
            return this
        }),
        e;
        function t(t) {
            return function (e) {
                return function (t) {
                    if (o) 
                        throw new TypeError("Generator is already executing.");
                    for (; s;) 
                        try {
                            if (o = 1, r && (
                                a = 2 & t[0]
                                    ? r.return
                                    : t[0]
                                        ? r.throw || ((a = r.return) && a.call(r), 0)
                                        : r.next
                            ) && !(a = a.call(r, t[1])).done) 
                                return a;
                            switch (r = 0, a && (t = [
                                2 & t[0],
                                a.value
                            ]), t[0]) {
                                case 0:
                                case 1:
                                    a = t;
                                    break;
                                case 4:
                                    return s.label =2, {
                                        value: t[1],
                                        done: !1
                                    } + 1;
                                case 5:
                                    s.label++,
                                    r = t[1],
                                    t = [0];
                                    continue;
                                case 7:
                                    t = s
                                        .ops
                                        .pop(),
                                    s
                                        .trys
                                        .pop();
                                    continue;
                                default:
                                    if (!(a = 0 < (a = s.trys).length && a[a.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                        s = 0;
                                        continue
                                    }
                                    if (3 === t[0] && (!a || t[1] > a[0] && t[1] < a[3])) {
                                        s.label = t[1];
                                        break
                                    }
                                    if (6 === t[0] && s.label < a[1]) {
                                        s.label = a[1],
                                        a = t;
                                        break
                                    }
                                    if (a && s.label < a[2]) {
                                        s.label = a[2],
                                        s
                                            .ops
                                            .push(t);
                                        break
                                    }
                                    a[2] && s
                                        .ops
                                        .pop(),
                                    s
                                        .trys
                                        .pop();
                                    continue
                            }
                            t = n.call(i, s)
                        } catch (e) {
                            t = [
                                6, e
                            ],
                            r = 0
                        }
                    finally {
                        o = a = 0
                    }
                    if (5 & t[0]) 
                        throw t[1];
                    return {
                        value: t[0]
                            ? t[1]
                            : void 0,
                        done: !0
                    }
                }([t, e])
            }
        }
    }
    function l(e, t) {
        for (var i in e) 
            t.hasOwnProperty(i) || (t[i] = e[i])
    }
    function u(e) {
        var t = "function" == typeof Symbol && Symbol.iterator,
            i = t && e[t],
            n = 0;
        if (i) 
            return i.call(e);
        if (e && "number" == typeof e.length) 
            return {
                next: function () {
                    return e && n >= e.length && (e = void 0), {
                        value: e && e[n++],
                        done: !e
                    }
                }
            };
        throw new TypeError(
            t
                ? "Object is not iterable."
                : "Symbol.iterator is not defined."
        )
    }
    function p(e, t) {
        var i = "function" == typeof Symbol && e[Symbol.iterator];
        if (!i) 
            return e;
        var n,
            o,
            r = i.call(e),
            a = [];
        try {
            for (; (void 0 === t || 0 < t--) && !(n = r.next()).done;) 
                a.push(n.value)
        } catch (e) {
            o = {
                error: e
            }
        } finally {
            try {
                n && !n.done && (i = r.return) && i.call(r)
            } finally {
                if (o) 
                    throw o.error
            }
        }
        return a
    }
    function v() {
        for (var e = [], t = 0; t < arguments.length; t++) 
            e = e.concat(p(arguments[t]));
        return e
    }
    function f() {
        for (var e = 0, t = 0, i = arguments.length; t < i; t++) 
            e += arguments[t].length;
        var n = Array(e),
            o = 0;
        for (t = 0; t < i; t++) 
            for (var r = arguments[t], a = 0, s = r.length; a < s; a++, o++) 
                n[o] = r[a];
    return n
    }
    function m(e) {
        return this instanceof m
            ? (this.v = e, this)
            : new m(e)
    }
    function g(e, t, i) {
        if (!Symbol.asyncIterator) 
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var o,
            r = i.apply(e, t || []),
            a = [];
        return o = {},
        n("next"),
        n("throw"),
        n("return"),
        o[Symbol.asyncIterator] = function () {
            return this
        },
        o;
        function n(n) {
            r[n] && (o[n] = function (i) {
                return new Promise(function (e, t) {
                    1 < a.push([n, i, e, t]) || s(n, i)
                })
            })
        }
        function s(e, t) {
            try {
                (i = r[e](t)).value instanceof m
                    ? Promise
                        .resolve(i.value.v)
                        .then(d, c)
                    : l(a[0][2], i)
            } catch (e) {
                l(a[0][3], e)
            }
            var i
        }
        function d(e) {
            s("next", e)
        }
        function c(e) {
            s("throw", e)
        }
        function l(e, t) {
            e(t),
            a.shift(),
            a.length && s(a[0][0], a[0][1])
        }
    }
    function y(n) {
        var e,
            o;
        return e = {},
        t("next"),
        t("throw", function (e) {
            throw e
        }),
        t("return"),
        e[Symbol.iterator] = function () {
            return this
        },
        e;
        function t(t, i) {
            e[t] = n[t]
                ? function (e) {
                    return (o = !o)
                        ? {
                            value: m(n[t](e)),
                            done: "return" === t
                        }
                        : i
                            ? i(e)
                            : e
                }
                : i
        }
    }
    function w(d) {
        if (!Symbol.asyncIterator) 
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var e,
            t = d[Symbol.asyncIterator];
        return t
            ? t.call(d)
            : (
                d = "function" == typeof u
                    ? u(d)
                    : d[Symbol.iterator](),
                e = {},
                i("next"),
                i("throw"),
                i("return"),
                e[Symbol.asyncIterator] = function () {
                    return this
                },
                e
            );
        function i(s) {
            e[s] = d[s] && function (a) {
                return new Promise(function (e, t) {
                    var i,
                        n,
                        o,
                        r;
                    a = d[s](a),
                    i = e,
                    n = t,
                    o = a.done,
                    r = a.value,
                    Promise
                        .resolve(r)
                        .then(function (e) {
                            i({value: e, done: o})
                        }, n)
                })
            }
        }
    }
    function b(e, t) {
        return Object.defineProperty
            ? Object.defineProperty(e, "raw", {value: t})
            : e.raw = t,
        e
    }
    function C(e) {
        if (e && e.__esModule) 
            return e;
        var t = {};
        if (null != e) 
            for (var i in e) 
                Object
                    .hasOwnProperty
                    .call(e, i) && (t[i] = e[i]);
        return t.default = e,
        t
    }
    function I(e) {
        return e && e.__esModule
            ? e
            : {
                default: e
            }
    }
    function E(e, t) {
        if (!t.has(e)) 
            throw new TypeError("attempted to get private field on non-instance");
        return t.get(e)
    }
    function _(e, t, i) {
        if (!t.has(e)) 
            throw new TypeError("attempted to set private field on non-instance");
        return t.set(e, i),
        i
    }
    var T = (
            k.prototype.send = function (e, t, i, n) {
                var o = void 0 !== this.data
                        ? "POST"
                        : "GET",
                    r = this.getXMLHttpRequest(o, e, t, i, n);
                if (void 0 !== r) 
                    r.send(this.data);
                else {
                    var a = this.getXDomainRequest(o, e, t, i, n);
                    void 0 !== a && a.send(this.data)
                }
            },
            k.prototype.getXMLHttpRequest = function (e, t, i, n, o) {
                var r = new XMLHttpRequest;
                if ("withCredentials" in r) 
                    return r.open(e, this.url, !0),
                    r.timeout = o || k.LOCAL_PASSBACK_TIMEOUT,
                    this.contentType
                        ? r.setRequestHeader("Content-type", this.contentType)
                        : "POST" === e && r.setRequestHeader(
                            "Content-type",
                            "application/x-www-form-urlencoded"
                        ),
                    r.withCredentials = this.withCredentials,
                    r.onload = function () {
                        4 === r.readyState && 200 === r.status
                            ? t(r.responseText)
                            : i(r.readyState, r.status)
                    }
                ,
                r.onerror = function () {
                    i(void 0, void 0)
                },
                n && (r.ontimeout = n),
                r
            },
            k.prototype.getXDomainRequest = function (e, t, i, n, o) {
                if ("undefined" != typeof XDomainRequest) {
                    var r = new XDomainRequest;
                    return r.timeout = o || k.LOCAL_PASSBACK_TIMEOUT,
                    r.open(e, this.url),
                    r.onload = function () {
                        void 0 !== r.responseText
                            ? t(r.responseText)
                            : i(void 0, void 0)
                    },
                    r.onerror && (r.onerror = function () {
                        i(void 0, void 0)
                    }),
                    r.ontimeout && n && (r.ontimeout = n),
                    r
                }
            },
            k.LOCAL_PASSBACK_TIMEOUT = 3e4,
            k
        ),
        P,
        R;
    function k(e, t, i, n) {
        void 0 === n && (n = !0),
        this.url = e,
        this.data = t,
        this.contentType = i,
        this.withCredentials = n
    }
    R = P = P || {},
    R[R.Error = 0] = "Error",
    R[R.Warning = 1] = "Warning",
    R[R.Debug = 2] = "Debug";
    var x = ["color: #fff;", "background: #ff8f1c;", "display: inline-block;", "padding: 1px 4px;", "border-radius: 3px;"].join(
            " "
        ),
        O = (
            M.Log = function (e, t) {
                if (!(M.LOGLEVEL < e)) {
                    var i = P[e].toUpperCase(),
                        n = window.navigator.userAgent,
                        o = 0 < n.indexOf("MSIE ") || 0 < n.indexOf("Trident/");
                    window.console && (
                        o
                            ? console.log("[PubTag] " + i + ": " + t)
                            : console.log("%cPubTag", x, i + ": " + t)
                    )
                }
            },
            M.Debug = function (e) {
                M.Log(P.Debug, e)
            },
            M.Warning = function (e) {
                M.Log(P.Warning, e)
            },
            M.Error = function (e) {
                M.Log(P.Error, e)
            },
            M.LOGLEVEL = P.Error,
            M
        );
    function M() {}
    function D(e) {
        O.LOGLEVEL = e
    }
    var U = function () {},
        B = function (o) {
            function e(e, t) {
                var i = o.call(this) || this;
                i.containerId = t;
                var n = e.getElementById(t);
                return n
                    ? i.element = n
                    : O.Error(
                        "Target element '" + t + "' not found in the document"
                    ),
                i
            }
            return r(e, o),
            e.prototype.ResizeFrame = function (e, t) {},
            e.prototype.Write = function (e) {
                this.element && (this.element.innerHTML = e)
            },
            e.prototype.LoadScript = function (e) {
                e += -1 === e.indexOf("?")
                    ? "?"
                    : "&",
                e += "containerid=" + encodeURIComponent(this.containerId);
                var t = new T(e);
                t.send(function (e) {
                    eval(e)
                }, function () {}, function () {})
            },
            e
        }(U);
    function F(e) {
        return e
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
    }
    var N = (
            L = U,
            r(W, L),
            W.prototype.ResizeFrame = function (e, t) {
                if (this.document.defaultView && this.document.defaultView.frameElement) {
                    var i = this.document.defaultView.frameElement;
                    i.width = e.toString(),
                    i.height = t.toString()
                }
            },
            W.prototype.Write = function (e) {
                this
                    .document
                    .open(),
                this
                    .document
                    .write(e),
                this
                    .document
                    .close()
            },
            W.prototype.LoadScript = function (e) {
                this.Write(
                    "<script type='text/javascript' src='" + F(e) + "'><\/script>"
                )
            },
            W
        ),
        L;
    function W(e) {
        var t = L.call(this) || this;
        return t.document = e,
        t
    }
    var z = (H.prototype.eval = function (e) {}, H);
    function H(e) {
        this.name = e
    }
    function G(e) {
        try {
            return JSON.parse(e)
        } catch (e) {
            return
        }
    }
    function q(e) {
        var t = "number" == typeof window.PREBID_TIMEOUT
            ? window.PREBID_TIMEOUT
            : void 0;
        return e && t
            ? Math.min(e, t)
            : e || t || void 0
    }
    var V = (
        j.prototype.getMetricsManager = function () {
            return this.metricsManager
        },
        j.prototype.withElapsed = function (e) {
            return this.elapsed = Math.round(e),
            this
        },
        j.prototype.withIsTimeout = function (e) {
            return (this.isTimeout = e) && this
                .events
                .push({eventId: "CdbCallTimeout"}),
            this
        },
        j.prototype.withAdapterStartElapsed = function (e) {
            return this.adapterStartElapsed = Math.round(e),
            this
                .events
                .push({eventId: "AdapterBidStart", elapsed: this.adapterStartElapsed}),
            this
        },
        j.prototype.withCdbCallStartElapsed = function (e) {
            return this.cdbCallStartElapsed = Math.round(e),
            this
                .events
                .push({eventId: "CdbCallStart", elapsed: this.cdbCallStartElapsed}),
            this
        },
        j.prototype.withCdbCallEndElapsed = function (e) {
            return this.cdbCallEndElapsed = Math.round(e),
            this
                .events
                .push({eventId: "CdbCallEnd", elapsed: this.cdbCallEndElapsed}),
            this
        },
        j.prototype.withAdapterEndElapsed = function (e) {
            return this.adapterEndElapsed = Math.round(e),
            this
                .events
                .push({eventId: "AdapterBidEnd", elapsed: this.adapterEndElapsed}),
            this
        },
        j.prototype.withAdapterTimeout = function (e) {
            return this.adapterTimeout = e && Math.round(e),
            this
        },
        j.prototype.withTimeToFirstByte = function (e) {
            return this.timeToFirstByte = e && Math.round(e),
            this.timeToFirstByte && this
                .events
                .push({eventId: "TimeToFirstByte", elapsed: this.timeToFirstByte}),
            this
        },
        j.prototype.withConnectionEstablishmentTime = function (e) {
            return this.connectionEstablishmentTime = e && Math.round(e),
            this.connectionEstablishmentTime && this
                .events
                .push(
                    {eventId: "TcpConnectionElapsedTime", elapsed: this.connectionEstablishmentTime}
                ),
            this
        },
        j.prototype.withDomainLookupTime = function (e) {
            return this.domainLookupTime = e && Math.round(e),
            this.domainLookupTime && this
                .events
                .push({eventId: "DomainLookupElapsedTime", elapsed: this.domainLookupTime}),
            this
        },
        j.prototype.withUserPreviousTimestamp = function (e) {
            return e && this
                .events
                .push({
                    eventId: "UserReturnTime",
                    elapsed: (new Date).getTime() - e
                }),
            this
        },
        j.prototype.buildEvents = function (e) {
            if (this.events.length) {
                var t = {
                    requestId: e,
                    events: this.events
                };
                return void 0 !== this.adapterTimeout && this.adapterEndElapsed > this.adapterTimeout && t
                    .events
                    .push({eventId: "AdapterTimeout"}),
                t
            }
        },
        j.prototype.clear = function () {
            this.events = []
        },
        j
    );
    function j(e) {
        this.elapsed = 0,
        this.isTimeout = !1,
        this.adapterStartElapsed = 0,
        this.cdbCallStartElapsed = 0,
        this.cdbCallEndElapsed = 0,
        this.adapterEndElapsed = 0,
        this.slotIdsMatchedByCache = [],
        this.events = [],
        this.metricsManager = e
    }
    var K = (X.generateCacheBuster = function () {
            return Math.floor(99999999999 * Math.random())
        }, X),
        J,
        Y;
    function X() {}
    function Q(e) {
        switch (e.toLowerCase()) {
            case "amp":
                return J.AMP;
            default:
                return J.Unspecified
        }
    }
    Y = J = J || {},
    Y[Y.Unspecified = 0] = "Unspecified",
    Y[Y.AMP = 1] = "AMP";
    var Z = 135,
        $ = (
            ee.prototype.buildUrl = function (e, t, i, n, o) {
                void 0 === i && (i = J.Unspecified);
                var r = ee.CRITEO_BIDDER_URL + this.getHandlerPath();
                return r += "?ptv=" + Z,
                !0 === t.isAdBlocked && (r += "&abp=1"),
                r = this.appendCommonParameters(r, e, n, o),
                r += t.ctoIdOnPublisherDomain
                    ? "&idcpy=" + t.ctoIdOnPublisherDomain
                    : "",
                r += t.secureId
                    ? "&sid=" + t.secureId
                    : "",
                r += t.isOptOut
                    ? "&optout=1"
                    : "",
                r += t.bundle
                    ? "&bundle=" + t.bundle
                    : "",
                i !== J.Unspecified && (r += "&im=" + i),
                r += "&cb=" + String(K.generateCacheBuster()),
                r += t.getContextFlags()
            },
            ee.prototype.buildErrorUrl = function () {
                return ee.CRITEO_BIDDER_URL + ee.CRITEO_ERROR_HANDLER
            },
            ee.prototype.buildCsmEventsUrl = function () {
                return ee.CRITEO_BIDDER_URL + ee.CRITEO_CSM_EVENTS_HANDLER
            },
            ee.prototype.buildCsmCountersUrl = function () {
                return ee.CRITEO_BIDDER_URL + ee.CRITEO_CSM_COUNTERS_HANDLER
            },
            ee.prototype.appendCommonParameters = function (e, t, i, n) {
                return e += "&profileId=" + String(t),
                void 0 !== i && (e += "&av=" + String(i)),
                void 0 !== n && (e += "&wv=" + encodeURIComponent(n)),
                e
            },
            ee.prototype.getHandlerPath = function () {
                return this.auditMode
                    ? ee.CRITEO_BIDDER_AUDIT_HANDLER
                    : ee.CRITEO_BIDDER_HANDLER
            },
            ee.CRITEO_BIDDER_URL = "https://bidder.criteo.com/",
            ee.CRITEO_BIDDER_HANDLER = "cdb",
            ee.CRITEO_CSM_HANDLER = "csm",
            ee.CRITEO_CSM_EVENTS_HANDLER = "csm/events",
            ee.CRITEO_CSM_COUNTERS_HANDLER = "csm/counters",
            ee.CRITEO_ERROR_HANDLER = "error",
            ee.CRITEO_BIDDER_AUDIT_HANDLER = "prebid/audit",
            ee
        );
    function ee(e) {
        void 0 === e && (e = !1),
        this.auditMode = e
    }
    var te = (ie.prototype.sendEventsToBeacon = function (e, t) {
        navigator.sendBeacon && e && navigator.sendBeacon(t, JSON.stringify(e))
    }, ie);
    function ie() {
        this.urlBuilder = new $
    }
    var ne = (
            oe = te,
            r(re, oe),
            re.prototype.getManagerMetrics = function () {
                var e = this
                    .localStorageHelper
                    .getItem(re.MANAGER_METRICS_STORAGE_KEY);
                if (null == e) 
                    return {};
                var t = G(e);
                return void 0 === t
                    ? {}
                    : t
            },
            re.prototype.setManagerMetrics = function (e) {
                this
                    .localStorageHelper
                    .setItem(re.MANAGER_METRICS_STORAGE_KEY, JSON.stringify(e))
            },
            re.prototype.getLocalStorageKeyCount = function () {
                return this
                    .localStorageHelper
                    .getAllItemsByPrefix("criteo_")
                    .length + this
                    .localStorageHelper
                    .getAllItemsByPrefix("cto_")
                    .length
            },
            re.prototype.getPreviousBuildRequestTimestamp = function () {
                var e = this
                    .getManagerMetrics()
                    .previousBuildRequestTimestamp;
                return isNaN(e)
                    ? void 0
                    : e
            },
            re.prototype.resetPreviousBuildRequestTimestamp = function () {
                var e = this.getManagerMetrics();
                e.previousBuildRequestTimestamp = (new Date)
                    .getTime()
                    .toString(),
                this.setManagerMetrics(e)
            },
            re.prototype.sendEvents = function (e, t, i) {
                void 0 === i && (i = !1),
                i && (
                    e.withUserPreviousTimestamp(this.getPreviousBuildRequestTimestamp()),
                    this.resetPreviousBuildRequestTimestamp()
                ),
                this.sendEventsToBeacon(e.buildEvents(t), this.urlBuilder.buildCsmEventsUrl()),
                e.clear()
            },
            re.MANAGER_METRICS_STORAGE_KEY = "criteo_pt_cdb_mngr_metrics",
            re
        ),
        oe;
    function re(e) {
        var t = oe.call(this) || this;
        return t.localStorageHelper = e,
        t
    }
    var ae = (
        se.prototype.isValid = function () {
            return 0 < this.slots.length
        },
        se.prototype.getRequest = function () {
            for (var e = [], t = 0, i = this.slots; t < i.length; t++) {
                var n = i[t],
                    o = {
                        slotid: n.slotId,
                        impid: n.impId
                    };
                if (
                    void 0 !== n.zoneId && (o.zoneid = n.zoneId),
                    void 0 === n.nativeCallback && !n.native || (o.native = !0),
                    void 0 !== n.transactionId && (o.transactionid = n.transactionId),
                    void 0 !== n.publisherSubId && (o.publishersubid = n.publisherSubId),
                    void 0 !== n.sizes
                ) {
                    for (var r = [], a = 0, s = n.sizes; a < s.length; a++) {
                        var d = s[a];
                        r.push(d.width + "x" + d.height)
                    }
                    o.sizes = r
                }
                if (void 0 !== n.video) {
                    var c = {
                        playersizes: this.parsePlayerSizes(n.video.playersize),
                        mimes: n.video.mimes,
                        protocols: n.video.protocols,
                        maxduration: n.video.maxduration,
                        api: n.video.api,
                        skip: n.video.skip,
                        placement: n.video.placement,
                        playbackmethod: n.video.playbackmethod,
                        minduration: n.video.minduration,
                        startdelay: n.video.startdelay
                    };
                    o.video = c
                }
                if (void 0 !== this.viewportComputer) {
                    var l = this
                        .viewportComputer
                        .getSlotPosition(n);
                    void 0 !== l && (o.position = {
                        top: l.top,
                        left: l.left
                    })
                }
                void 0 !== n.ext && (o.ext = n.ext),
                e.push(o)
            }
            var u = S(S({}, this.context.getUser()), {
                    ceh: this.context.ceh,
                    uspOptout: this.context.ccpaOptout
                }),
                p = this
                    .context
                    .getSite();
            this
                .context
                .getUserExtWithContextualData(),
            this
                .context
                .getPublisherExt();
            var h = {
                publisher: {
                    url: this.context.highestAccessibleUrl
                },
                slots: e,
                user: u,
                site: p
            };
            if (
                void 0 !== this.networkId && (h.publisher.networkid = this.networkId),
                this.privacyWrapper && (
                    this.privacyWrapper.gdprConsent && (h.gdprConsent = this.privacyWrapper.gdprConsent),
                    this.privacyWrapper.ccpaIabConsent && (u.uspIab = this.privacyWrapper.ccpaIabConsent.uspString)
                ),
                void 0 !== this.viewportComputer
            ) {
                var v = this
                    .viewportComputer
                    .getViewport();
                h.viewport = {
                    width: v.width,
                    height: v.height,
                    scrollTop: v.scrollTop,
                    scrollLeft: v.scrollLeft
                }
            }
            return void 0 !== this.adapterTimeout && (h.tmax = this.adapterTimeout),
            void 0 !== this.auctionStart && (h.auctionStart = this.auctionStart),
            void 0 !== this.clientRequestId && (h.id = this.clientRequestId),
            void 0 !== this.userIds && (h.eids = this.userIds),
            void 0 !== this.schain && (h.source = {
                ext: {
                    schain: this.schain
                }
            }),
            void 0 !== this.regs && void 0 !== this.regs.coppa && (h.regs = {
                coppa: this.regs.coppa
            }),
            h
        },
        se.parsePlayerSize = function (e) {
            return e[0] + "x" + e[1]
        },
        se.prototype.parsePlayerSizes = function (e) {
            return e
                ? Array.isArray(e[0])
                    ? e.map(function (e) {
                        return se.parsePlayerSize(e)
                    })
                    : [se.parsePlayerSize(e)]
                : e
        },
        se.prototype.getUrl = function () {
            return this
                .urlBuilder
                .buildUrl(
                    this.profileId,
                    this.context,
                    this.integrationMode,
                    this.adapterVersion,
                    this.wrapperVersion
                )
        },
        se
    );
    function se(e, t, i, n, o, r, a, s, d, c, l, u, p, h, v, f) {
        this.slots = e,
        this.context = t,
        this.urlBuilder = i,
        this.profileId = n,
        this.integrationMode = o || J.Unspecified,
        this.networkId = r,
        this.adapterVersion = a,
        this.privacyWrapper = s,
        this.wrapperVersion = d,
        this.viewportComputer = c,
        this.adapterTimeout = l,
        this.clientRequestId = u,
        this.userIds = p,
        this.auctionStart = h,
        this.schain = v,
        this.regs = f
    }
    function de(e) {
        var t = {
            slots: void 0,
            time_to_next_call: 0
        };
        return void 0 !== e.exd && (
            void 0 !== e.exd.time_to_next_call && (t.time_to_next_call = e.exd.time_to_next_call),
            t.slots = e.exd.slots,
            delete e.exd
        ),
        t
    }
    var ce = (
        le.CreateRunning = function () {
            var e = new le;
            return e.start(),
            e
        },
        le.CreateWithStartTime = function (e) {
            var t = new le(!1);
            return t.startTime = e,
            t
        },
        le.TimeSincePageLoad = function () {
            if (window.performance) {
                if (window.performance.now) 
                    return window
                        .performance
                        .now();
                if (window.performance.timing && window.performance.timing.navigationStart) 
                    return (new Date).getTime() - performance.timing.navigationStart
            }
            return 0
        },
        le.prototype.start = function () {
            this.startTime = this.now()
        },
        le.prototype.elapsed = function () {
            return this.now() - this.startTime
        },
        le
    );
    function le(e) {
        void 0 === e && (e = !0),
        e && window.performance && window.performance.now
            ? this.now = window
                .performance
                .now
                .bind(window.performance)
            : Date.now
                ? this.now = Date.now
                : this.now = function () {
                    return (new Date).getTime()
                }
    }
    function ue(e) {
        if (window.performance && window.performance.getEntries) 
            for (var t = window.performance.getEntries(), i = t.length - 1; 0 <= i; --i) {
                var n = t[i];
                if (n.name === e && n.duration) 
                    return Math.round(n.duration)
            }
        }
    var pe = (
        he.prototype.sendRequest = function (e) {
            this.url = e,
            this.sendTime = ce.CreateRunning(),
            this
                .builder
                .withCdbCallStartElapsed(this.timer.elapsed())
        },
        he.prototype.requestReceived = function (e) {
            void 0 === e && (e = !1),
            this
                .builder
                .withElapsed(ue(this.url) || this.sendTime.elapsed()),
            this
                .builder
                .withCdbCallEndElapsed(this.timer.elapsed()),
            this
                .builder
                .withIsTimeout(e)
        },
        he.prototype.finish = function () {
            this
                .builder
                .withAdapterEndElapsed(this.timer.elapsed());
            var e = he.getLastCdbTiming();
            void 0 !== e && (
                this.builder.withTimeToFirstByte(he.computeTimeToFirstByte(e)),
                this.builder.withConnectionEstablishmentTime(he.computeConnectionEstablishmentTime(e)),
                this.builder.withDomainLookupTime(he.computeDomainLookupTime(e))
            )
        },
        he.getLastCdbTiming = function () {
            if (void 0 !== window.performance && void 0 !== window.performance.getEntriesByType && "function" == typeof window.performance.getEntriesByType) {
                var e = window
                    .performance
                    .getEntriesByType("resource");
                if (void 0 !== e) {
                    var t = e.filter(function (e) {
                        return 0 <= e
                            .name
                            .indexOf("cdb")
                    });
                    return void 0 !== t && 0 < t.length
                        ? t[t.length - 1]
                        : void 0
                }
            }
        },
        he.computeTimeToFirstByte = function (e) {
            var t = e.responseStart,
                i = e.requestStart;
            if (void 0 !== t && void 0 !== i) 
                return t - i
        },
        he.computeConnectionEstablishmentTime = function (e) {
            var t = e.connectEnd - e.connectStart;
            return isNaN(t)
                ? void 0
                : t
        },
        he.computeDomainLookupTime = function (e) {
            var t = e.domainLookupEnd - e.domainLookupStart;
            return isNaN(t)
                ? void 0
                : t
        },
        he
    );
    function he(e, t, i) {
        this.builder = e,
        this.timer = void 0 !== t
            ? ce.CreateWithStartTime(t)
            : ce.CreateRunning();
        var n = this
            .timer
            .elapsed();
        this
            .builder
            .withAdapterStartElapsed(n),
        void 0 !== i && this
            .builder
            .withAdapterTimeout(i)
    }
    function ve(e) {
        try {
            return JSON.parse(e)
        } catch (e) {
            return
        }
    }
    var fe = 1,
        me = (
            ge.prototype.getCMPFrame = function () {
                for (var e, t = this.currentWindow, i = 0; i < 10; ++i) {
                    try {
                        t.frames.__uspapiLocator && (e = t)
                    } catch (e) {}
                    if (t === this.currentWindow.top) 
                        break;
                    t = t.parent
                }
                return e
            },
            ge.prototype.hasCallerFunctionInWindow = function () {
                return "function" == typeof this.currentWindow.__uspapi
            },
            ge.prototype.readyToRetrieve = function () {
                return this.hasCallerFunctionInWindow() || void 0 !== this.getCMPFrame()
            },
            ge.prototype.retrieveConsent = function (i) {
                var n = this,
                    o = !1,
                    r = window.setTimeout(function () {
                        o = !0,
                        n.logger("Timeout: Unable to resolve CCPA consent after " + n.timeout + "ms"),
                        i(void 0)
                    }, this.timeout);
                this.executeCommand("getUSPData", fe, function (e, t) {
                    o || (
                        clearTimeout(r),
                        t
                            ? (n.logger("CCPA consent retrieved"), n.processResponseData(e, i))
                            : (n.logger("Error retrieving CCPA consent data from CMP"), i(void 0))
                    )
                })
            },
            ge.prototype.processResponseData = function (e, t) {
                e
                    ? t(e)
                    : (this.logger("Unable to read CCPA consent data from CMP"), t(void 0))
            },
            ge.prototype.executeCommand = function (e, t, i) {
                var r = this;
                if (!this.hasCallerFunctionInWindow()) {
                    this.logger("No CCPA CMP defined on current frame");
                    var a = this.getCMPFrame();
                    this.currentWindow.__uspapi = function (e, t, i) {
                        if (!a) 
                            return r.logger("CCPA CMP not found in any frame"),
                            void i({
                                msg: "CCPA CMP not found in any frame"
                            }, !1);
                        var n = Math
                                .random()
                                .toString(10),
                            o = {
                                __uspapiCall: {
                                    command: e,
                                    parameter: t,
                                    callId: n
                                }
                            };
                        r.uspapiCallbacks[n] = i,
                        a.postMessage(o, "*")
                    },
                    this
                        .currentWindow
                        .addEventListener("message", function (e) {
                            var t = "string" == typeof e.data
                                ? ve(e.data)
                                : e.data;
                            if (t && t.__uspapiReturn && t.__uspapiReturn.callId && t.__uspapiReturn.returnValue) {
                                var i = t.__uspapiReturn;
                                r.uspapiCallbacks && r.uspapiCallbacks[i.callId] && (
                                    r.uspapiCallbacks[i.callId](i.returnValue, i.success),
                                    delete r.uspapiCallbacks[i.callId]
                                )
                            }
                        }, !1)
                }
                this
                    .currentWindow
                    .__uspapi(e, t, i)
            },
            ge.prototype.hasUserOptOut = function (e) {
                return !(
                    !e || !e.uspString || "1YNY" === e.uspString.toUpperCase() || "1YNN" === e.uspString.toUpperCase() || "1YN-" === e.uspString.toUpperCase() || "1-N-" === e.uspString.toUpperCase() || "1---" === e.uspString
                )
            },
            ge
        );
    function ge(e, t, i) {
        void 0 === i && (i = function (e) {}),
        this.uspapiCallbacks = {},
        this.currentWindow = e,
        this.timeout = t.uspApiTimeout,
        this.logger = i
    }
    var ye = (
        we.prototype.getReadyToRetrieveProvider = function () {
            return this
                .tcfv2ConsentProvider
                .hasCallerFunctionInFrame()
                    ? this.tcfv2ConsentProvider
                    : this
                        .tcfv1ConsentProvider
                        .hasCallerFunctionInFrame()
                            ? this.tcfv1ConsentProvider
                            : void 0 !== this
                                .tcfv2ConsentProvider
                                .getCMPFrame()
                                    ? this.tcfv2ConsentProvider
                                    : void 0 !== this
                                        .tcfv1ConsentProvider
                                        .getCMPFrame()
                                            ? this.tcfv1ConsentProvider
                                            : void 0
        },
        we.prototype.retrieveConsentForPassback = function (e) {
            var t = this.getReadyToRetrieveProvider();
            void 0 === t && (
                this.logger("No compatible GDPR privacy provider found"),
                e(void 0)
            ),
            t === this.tcfv1ConsentProvider
                ? this
                    .tcfv1ConsentProvider
                    .retrieveConsentForPassback(e)
                : t === this.tcfv2ConsentProvider && this
                    .tcfv2ConsentProvider
                    .retrieveConsent(e)
        },
        we.prototype.retrieveConsent = function (e) {
            var t = this.getReadyToRetrieveProvider();
            void 0 === t && (
                this.logger("No compatible GDPR privacy provider found"),
                e(void 0)
            ),
            null == t || t.retrieveConsent(e)
        },
        we.prototype.readyToRetrieve = function () {
            return this
                .tcfv2ConsentProvider
                .readyToRetrieve() || this
                .tcfv1ConsentProvider
                .readyToRetrieve()
        },
        we
    );
    function we(e, t, i) {
        void 0 === i && (i = function (e) {}),
        this.tcfv1ConsentProvider = e,
        this.tcfv2ConsentProvider = t,
        this.logger = i
    }
    var be = 91,
        Ce = (
            Ie.prototype.getCMPFrame = function () {
                for (var e, t = this.currentWindow, i = 0; i < 10; ++i) {
                    try {
                        t.frames.__cmpLocator && (e = t)
                    } catch (e) {}
                    if (t === this.currentWindow.top) 
                        break;
                    t = t.parent
                }
                return e
            },
            Ie.prototype.hasCallerFunctionInFrame = function () {
                return "function" == typeof this.currentWindow.__cmp
            },
            Ie.prototype.readyToRetrieve = function () {
                return this.hasCallerFunctionInFrame() || void 0 !== this.getCMPFrame()
            },
            Ie.prototype.pingWithTimeout = function (n, e, t, i) {
                function o(e, t) {
                    r.logger(t),
                    clearTimeout(e),
                    i()
                }
                var r = this;
                return window.setTimeout(function () {
                    var i = window.setTimeout(function () {
                        o(n, "Timeout: Unable to get ping return after " + e + "ms")
                    }, e);
                    r.executeCommand("ping", null, function (e, t) {
                        clearTimeout(i),
                        t
                            ? (
                                r.logger("GDPR CMP ping returned"),
                                !0 !== e.cmpLoaded && o(n, "GDPR ping returned cmpLoaded which is not true"),
                                r.logger("GDPR ping returned cmpLoaded which is true")
                            )
                            : o(n, "Error sending ping to GDPR CMP")
                    })
                }, t)
            },
            Ie.prototype.retrieveConsent = function (e) {
                this.executeRetrieveConsent("getConsentData", null, e)
            },
            Ie.prototype.retrieveConsentForPassback = function (e) {
                this.executeRetrieveConsent("getVendorConsents", [be], e)
            },
            Ie.prototype.executeRetrieveConsent = function (e, t, i) {
                var n = this,
                    o = !1,
                    r = window.setTimeout(function () {
                        o = !0,
                        n.logger("Timeout: Unable to resolve GDPR consent after " + n.timeout + "ms"),
                        i(void 0)
                    }, this.timeout),
                    a = !1 !== this.cmpAutoDetect
                        ? this.pingWithTimeout(r, this.pingTimeout, this.pingDelay, function () {
                            o = !0,
                            n.logger("Timeout: Unable to ping GDPR API after " + n.pingTimeout + "ms"),
                            i(void 0)
                        })
                        : void 0;
                this.executeCommand(e, t, function (e, t) {
                    clearTimeout(a),
                    o || (
                        clearTimeout(r),
                        t
                            ? (n.logger("GDPR consent retrieved"), n.processConsentData(e, i))
                            : (n.logger("Error retrieving GDPR consent data from CMP"), i(void 0))
                    )
                })
            },
            Ie.prototype.processConsentData = function (e, t) {
                if (e) {
                    var i = {};
                    void 0 !== e.consentData && (i.consentData = e.consentData),
                    void 0 !== e.gdprApplies && (i.gdprApplies = !!e.gdprApplies),
                    t(i)
                } else 
                    this.logger("Unable to read GDPR consent data from CMP"),
                    t(void 0)
            },
            Ie.prototype.executeCommand = function (e, t, i) {
                var r = this;
                if (!this.hasCallerFunctionInFrame()) {
                    this.logger("No GDPR CMP defined on current frame");
                    var a = this.getCMPFrame();
                    this.currentWindow.__cmp = function (e, t, i) {
                        if (!a) 
                            return r.logger("GDPR CMP not found in any frame"),
                            void i({
                                msg: "GDPR CMP not found in any frame"
                            }, !1);
                        var n = Math
                                .random()
                                .toString(10),
                            o = {
                                __cmpCall: {
                                    command: e,
                                    parameter: t,
                                    callId: n
                                }
                            };
                        r.cmpCallbacks[n] = i,
                        a.postMessage(o, "*")
                    },
                    this
                        .currentWindow
                        .addEventListener("message", function (e) {
                            var t = "string" == typeof e.data
                                ? ve(e.data)
                                : e.data;
                            if (t && t.__cmpReturn && t.__cmpReturn.callId && t.__cmpReturn.returnValue) {
                                var i = t.__cmpReturn;
                                r.cmpCallbacks && r.cmpCallbacks[i.callId] && (
                                    r.cmpCallbacks[i.callId](i.returnValue, i.success),
                                    delete r.cmpCallbacks[i.callId]
                                )
                            }
                        }, !1)
                }
                this
                    .currentWindow
                    .__cmp(e, t, i)
            },
            Ie
        );
    function Ie(e, t, i) {
        void 0 === i && (i = function (e) {}),
        this.cmpCallbacks = {},
        this.currentWindow = e,
        this.timeout = t.tcfTimeout,
        this.pingTimeout = t.tcfPingTimeout,
        this.pingDelay = t.tcfPingDelay,
        this.cmpAutoDetect = t.cmpAutoDetect,
        this.logger = i
    }
    var Ee = 91,
        _e = 2,
        Ae = (
            Se.prototype.getCMPFrame = function () {
                for (var e, t = this.currentWindow, i = 0; i < 10; ++i) {
                    try {
                        t.frames.__tcfapiLocator && (e = t)
                    } catch (e) {}
                    if (t === this.currentWindow.top) 
                        break;
                    t = t.parent
                }
                return e
            },
            Se.prototype.hasCallerFunctionInFrame = function () {
                return "function" == typeof this.currentWindow.__tcfapi
            },
            Se.prototype.readyToRetrieve = function () {
                return this.hasCallerFunctionInFrame() || void 0 !== this.getCMPFrame()
            },
            Se.prototype.pingWithTimeout = function (i, e, t, n) {
                function o(e, t) {
                    r.logger(t),
                    clearTimeout(e),
                    n()
                }
                var r = this;
                return window.setTimeout(function () {
                    var t = window.setTimeout(function () {
                        o(i, "Timeout: Unable to get TCFv2 ping return after " + e + "ms")
                    }, e);
                    r.executeCommand("ping", _e, function (e) {
                        clearTimeout(t),
                        r.logger("TCFv2 CMP ping returned in ms"),
                        "error" === e.cmpStatus
                            ? o(i, "Error status on ping to TCFv2 CMP")
                            : !0 !== e.cmpLoaded
                                ? o(i, "TCFv2 ping returned cmpLoaded = false")
                                : r.logger("TCFv2 ping returned cmpLoaded = true")
                    })
                }, t)
            },
            Se.prototype.retrieveConsent = function (i) {
                var n = this,
                    o = !1,
                    r = window.setTimeout(function () {
                        o = !0,
                        n.logger("Timeout: Unable to resolve TCFv2 consent after " + n.timeout + "ms"),
                        i(void 0)
                    }, this.timeout),
                    a = !1 !== this.cmpAutoDetect
                        ? this.pingWithTimeout(r, this.pingTimeout, this.pingDelay, function () {
                            o = !0,
                            n.logger("Timeout: Unable to ping TCFv2 API after " + n.pingTimeout + "ms"),
                            i(void 0)
                        })
                        : void 0;
                this.executeCommand("getTCData", _e, function (e, t) {
                    clearTimeout(a),
                    o || (
                        clearTimeout(r),
                        t
                            ? (n.logger("TCFv2 consent retrieved in ms"), n.processResponseData(e, i))
                            : (n.logger("Error retrieving TCFv2 consent data from CMP"), i(void 0))
                    )
                }, [Ee])
            },
            Se.prototype.processResponseData = function (e, t) {
                var i,
                    n;
                if (e) {
                    var o = {};
                    void 0 !== e.tcString && (o.consentData = e.tcString),
                    void 0 !== e.gdprApplies && (o.gdprApplies = !!e.gdprApplies),
                    o.version = e.tcfPolicyVersion
                        ? e.tcfPolicyVersion
                        : _e,
                    o.purposes = null === (
                        i = null == e
                            ? void 0
                            : e.purpose
                    ) || void 0 === i
                        ? void 0
                        : i.consents,
                    o.vendorConsents = null === (
                        n = null == e
                            ? void 0
                            : e.vendor
                    ) || void 0 === n
                        ? void 0
                        : n.consents,
                    t(o)
                } else 
                    this.logger("Unable to read GDPR consent data from CMP"),
                    t(void 0)
            },
            Se.prototype.executeCommand = function (e, t, i, n) {
                var a = this;
                if (!this.hasCallerFunctionInFrame()) {
                    this.logger("No TCFv2 CMP defined on current frame");
                    var s = this.getCMPFrame();
                    this.currentWindow.__tcfapi = function (e, t, i, n) {
                        if (!s) 
                            return a.logger("TCFv2 CMP not found in any frame"),
                            void i({
                                msg: "TCFv2 CMP not found in any frame"
                            }, !1);
                        var o = Math
                                .random()
                                .toString(10),
                            r = {
                                __tcfapiCall: {
                                    command: e,
                                    version: t,
                                    parameter: n,
                                    callId: o
                                }
                            };
                        a.cmpCallbacks[o] = i,
                        s.postMessage(r, "*")
                    },
                    this
                        .currentWindow
                        .addEventListener("message", function (e) {
                            var t = "string" == typeof e.data
                                ? ve(e.data)
                                : e.data;
                            if (t && t.__tcfapiReturn && t.__tcfapiReturn.callId && t.__tcfapiReturn.returnValue) {
                                var i = t.__tcfapiReturn;
                                a.cmpCallbacks && a.cmpCallbacks[i.callId] && "function" == typeof a.cmpCallbacks[i.callId] && (
                                    a.cmpCallbacks[i.callId](i.returnValue, i.success),
                                    delete a.cmpCallbacks[i.callId]
                                )
                            }
                        }, !1)
                }
                this
                    .currentWindow
                    .__tcfapi(e, t, i, n)
            },
            Se
        );
    function Se(e, t, i) {
        void 0 === i && (i = function (e) {}),
        this.cmpCallbacks = {},
        this.currentWindow = e,
        this.timeout = t.tcfTimeout,
        this.pingTimeout = t.tcfPingTimeout,
        this.pingDelay = t.tcfPingDelay,
        this.cmpAutoDetect = t.cmpAutoDetect,
        this.logger = i
    }
    function Te(e) {
        return {
            uspApiTimeout: parseInt("50", 10),
            tcfTimeout: parseInt("10000", 10),
            tcfPingTimeout: Math.min(parseInt("10000", 10), parseInt("50", 10)),
            tcfPingDelay: Math.min(parseInt("10000", 10), parseInt("1000", 10)),
            cmpAutoDetect: null == e
                ? void 0
                : e.cmpAutoDetect
        }
    }
    function Pe(e) {
        try {
            return e.localStorage
        } catch (e) {
            return
        }
    }
    var Re = (
        ke.prototype.checkLocalStorage = function (e) {
            if (!this.localStorage) 
                return !1;
            var t = this.CHECK_STORAGE_KEY;
            try {
                return this.checkTcfPurposeOne(e)
                    ? (this.localStorage.setItem(t, t), this.localStorage.removeItem(t), !0)
                    : (O.Debug("Purpose One not granted"), !1)
            } catch (e) {
                return !1
            }
        },
        ke.prototype.checkTcfPurposeOne = function (e) {
            return !e || !e.purposes || !0 === e.purposes[1]
        },
        ke.prototype.removeItem = function (e) {
            this.localStorageEnabled && (
                this.localStorage.removeItem(e),
                this.localStorage.removeItem(
                    e + this.EXPIRE_SUFFIX
                )
            )
        },
        ke.prototype.getItem = function (e, t) {
            if (!this.localStorageEnabled) 
                return null;
            var i = (new Date).getTime(),
                n = this
                    .localStorage
                    .getItem(e + this.EXPIRE_SUFFIX),
                o = n
                    ? parseInt(n, 10)
                    : -1;
            return -1 !== o && o < i || t && (-1 === o || t < o - i)
                ? (this.removeItem(e), null)
                : this
                    .localStorage
                    .getItem(e)
        },
        ke.prototype.setItem = function (e, t, i) {
            if (this.localStorageEnabled) 
                try {
                    if (this.localStorage.setItem(e, t), i) {
                        var n = (new Date).getTime() + i;
                        this
                            .localStorage
                            .setItem(e + this.EXPIRE_SUFFIX, n.toString())
                    }
                } catch (e) {}
            },
        ke.prototype.getAllItemsByPrefix = function (e) {
            var t = [];
            if (this.localStorageEnabled) 
                for (var i in localStorage) 
                    0 === i.indexOf(e) && t.push(i);
        return t
        },
        ke
    );
    function ke(e, t) {
        this.EXPIRE_SUFFIX = "_expires",
        this.CHECK_STORAGE_KEY = "criteo_localstorage_check",
        this.localStorage = Pe(e || window),
        this.localStorageEnabled = this.checkLocalStorage(t)
    }
    var xe = (
        Oe.prototype.checkTcfPurposeOne = function (e) {
            return !e || !e.purposes || !0 === e.purposes[1]
        },
        Oe.prototype.setCookie = function (e, t, i, n, o) {
            void 0 === o && (o = !1);
            var r = n || document,
                a = r.location.hostname,
                s = new Date;
            s.setTime(s.getTime() + 60 * i * 60 * 1e3);
            var d = "expires=" + s.toUTCString();
            if (!o) 
                return this.setCookieString(e, t, d, void 0, r),
                a;
            for (var c = a.split("."), l = 1; l < c.length; ++l) {
                var u = c
                    .slice(c.length - l - 1, c.length)
                    .join(".");
                if (!(-1 < this.publicTopTlds.indexOf(u))) 
                    try {
                        this.setCookieString(e, t, d, u, r);
                        var p = this.getCookie(e, n);
                        if (p && p === t) 
                            return u
                    } catch (e) {}
                }
            return a
        },
        Oe.prototype.deleteCookie = function (e, t, i) {
            void 0 === i && (i = !1),
            this.setCookie(e, "", 0, t, i)
        },
        Oe.prototype.getCookie = function (e, t) {
            if (this.cookiesEnabled) 
                for (var i = 0, n = (t || document).cookie.split(";"); i < n.length; i++) {
                    var o = n[i],
                        r = o
                            .substr(0, o.indexOf("="))
                            .replace(/^\s+|\s+$/g, ""),
                        a = o.substr(o.indexOf("=") + 1);
                    if (r === e) 
                        return decodeURIComponent(a)
                }
            },
        Oe.prototype.setCookieString = function (e, t, i, n, o) {
            if (this.cookiesEnabled) {
                var r = e + "=" + encodeURIComponent(t) + ";" + i + ";";
                n && "" !== n && (r += "domain=." + n + ";"),
                o.cookie = r + "path=/"
            }
        },
        Oe
    );
    function Oe(e) {
        this.publicTopTlds = [
            "co.id",
            "co.il",
            "co.jp",
            "co.kr",
            "co.nz",
            "co.th",
            "co.uk",
            "com.au",
            "com.br",
            "com.mx",
            "com.my",
            "com.pl",
            "com.sg",
            "com.tr",
            "com.vn"
        ],
        this.cookiesEnabled = this.checkTcfPurposeOne(e)
    }
    var Me = (
        De.isChrome = function () {
            return -1 != navigator
                .userAgent
                .indexOf("Chrome")
        },
        De.addOneTrialTokenInDocument = function (e) {
            var t = document.createElement("meta");
            t.httpEquiv = "origin-trial",
            t.content = e,
            document
                .head
                .appendChild(t)
        },
        De.addTrialTokens = function () {
            this.isChrome() && (
                this.addOneTrialTokenInDocument(De.CRITEO_NET_TOKEN),
                this.addOneTrialTokenInDocument(De.CRITEO_COM_TOKEN)
            )
        },
        De.CRITEO_NET_TOKEN = "A/vXSuiuvzsL+Db89QNS/YzqK5Wmzx9oASGHZVMjcaWfVdbB6eUJrJGNr7uhrsmiGhryVjVALd72ag" +
                "YzELDTMAgAAACAeyJvcmlnaW4iOiJodHRwczovL2NyaXRlby5uZXQ6NDQzIiwiZmVhdHVyZSI6IlBy" +
                "aXZhY3lTYW5kYm94QWRzQVBJcyIsImV4cGlyeSI6MTY2OTc2NjM5OSwiaXNTdWJkb21haW4iOnRydW" +
                "UsImlzVGhpcmRQYXJ0eSI6dHJ1ZX0=",
        De.CRITEO_COM_TOKEN = "A0KGawWMfAygakxUO+Z3rulPwK2j0AqkLneiEt4pAI951GYaafeHNV9Ya+PAn7s0y12QSrfTjc9LdO" +
                "UU+QfkdQwAAACAeyJvcmlnaW4iOiJodHRwczovL2NyaXRlby5jb206NDQzIiwiZmVhdHVyZSI6IlBy" +
                "aXZhY3lTYW5kYm94QWRzQVBJcyIsImV4cGlyeSI6MTY2OTc2NjM5OSwiaXNTdWJkb21haW4iOnRydW" +
                "UsImlzVGhpcmRQYXJ0eSI6dHJ1ZX0=",
        De
    );
    function De() {}
    var Ue = (
        Be.prototype.initializeServices = function () {
            var n = this;
            this.initializing = !0,
            this.retrievePrivacyConsent(function (e, t) {
                var i = {
                    localStorageHelper: new Re(n.topFrame, t),
                    gdprConsent: t,
                    ccpaConsentProvider: n.ccpaConsentProvider,
                    ccpaConsent: e,
                    cookieHelper: new xe(t)
                };
                n.services = i,
                n.initialized = !0,
                n.initializing = !1,
                n
                    .postInitiliazeServicesCallbacks
                    .forEach(function (e) {
                        e(i)
                    })
            })
        },
        Be.prototype.getServicesAsync = function (e) {
            this.initialized
                ? e(this.services)
                : (
                    this.postInitiliazeServicesCallbacks.push(e),
                    this.initializing || this.initializeServices()
                )
        },
        Be.prototype.retrievePrivacyConsent = function (t) {
            var e = this
                    .tcfCompatibleConsentProvider
                    .readyToRetrieve(),
                i = this
                    .ccpaConsentProvider
                    .readyToRetrieve();
            e || i || t(void 0, void 0);
            var n,
                o,
                r = [];
            e && r.push(ye),
            i && r.push(me),
            e && this
                .tcfCompatibleConsentProvider
                .retrieveConsent(function (e) {
                    r.splice(r.indexOf(ye), 1),
                    0 === r.length
                        ? t(o, e)
                        : n = e
                }),
            i && this
                .ccpaConsentProvider
                .retrieveConsent(function (e) {
                    r.splice(r.indexOf(me), 1),
                    0 === r.length
                        ? t(e, n)
                        : o = e
                })
        },
        Be
    );
    function Be(e, t, i, n) {
        this.initializing = !1,
        this.initialized = !1,
        this.postInitiliazeServicesCallbacks = [],
        this.topFrame = e || window,
        Me.addTrialTokens();
        var o = Te(n);
        this.ccpaConsentProvider = t || new me(window, o, O.Warning);
        var r = new Ce(window, o, O.Warning),
            a = new Ae(window, o, O.Warning);
        this.tcfCompatibleConsentProvider = i || new ye(r, a, O.Warning),
        this.initializeServices()
    }
    var Fe = (
        Ne.prototype.retrievePixels = function (e, t, i) {
            var n = this;
            new T(this.getUserSyncUrl(e, t, i)).send(function (e) {
                if (e) {
                    var t = Ne.parseUserSyncResponse(e);
                    t
                        ? n.onPixelsRetrieved(t)
                        : n
                            .errorReporter
                            .log("Error", "Unable to parse response from user sync")
                }
            }, function (e, t) {
                O.Warning(
                    "User Sync Pixel endpoint error; readyState " + e + "; requestStatus " + t
                )
            }, function () {
                O.Warning("User Sync Pixel endpoint timeout")
            }, this.pixelSyncTimeout)
        },
        Ne.prototype.getUserSyncUrl = function (e, t, i) {
            var n = [];
            return (
                null == e
                    ? void 0
                    : e.consentData
            ) && n.push("gdpr=" + e.consentData),
            (
                null == e
                    ? void 0
                    : e.gdprApplies
            ) && n.push("gdprapplies=" + e.gdprApplies),
            (
                null == t
                    ? void 0
                    : t.uspString
            ) && n.push("ccpa=" + t.uspString),
            (
                null == i
                    ? void 0
                    : i.country_code
            ) && n.push("countrycode=" + i.country_code),
            this.debug && n.push("debug=1"),
            this.pixelSyncEndpoint + (
                n.length
                    ? "?" + n.join("&")
                    : ""
            )
        },
        Ne.parseUserSyncResponse = function (e) {
            var t = G(e);
            return t
                ? (
                    "pixels" in t
                        ? Array.isArray(t.pixels)
                            ? t.pixels = t.pixels.filter(function (t) {
                                try {
                                    return new URL(t),
                                    !0
                                } catch (e) {
                                    return O.Warning("Failed to parse User Sync Pixel URL: " + t),
                                    !1
                                }
                            })
                            : (
                                O.Warning("pixels field in user sync response is not an array: " + t.pixels),
                                t.pixels = []
                            )
                        : t.pixels = [],
                    t
                )
                : void O.Warning("Failed to parse user sync pixel JSON payload")
        },
        Ne
    );
    function Ne(e, t, i) {
        void 0 === i && (i = !1),
        this.pixelSyncEndpoint = "https://ssp-sync.criteo.com/user-sync/pixels",
        this.pixelSyncTimeout = 2e3,
        this.errorReporter = t,
        this.onPixelsRetrieved = e,
        this.debug = i
    }
    var Le = (
        We.execUserSync = function (e, t, i, n, o) {
            void 0 === o && (o = !1),
            new Fe(We.appendUserSyncPixels, e, o).retrievePixels(t, i, n)
        },
        We.getOrCreateTagContainer = function () {
            var e = document.getElementById(We.tagElementName);
            if (e) 
                return e;
            var t = document.createElement("div");
            return t.setAttribute("id", We.tagElementName),
            t.style.display = "none",
            document
                .body
                .appendChild(t),
            t
        },
        We.appendUserSyncPixels = function (e) {
            if (e.pixels.length) 
                for (
                    var t = We.getOrCreateTagContainer(),
                    i = 0,
                    n = e.pixels;
                    i < n.length;
                    i++
                ) {
                    var o = n[i],
                        r = new Image;
                    r.src = o,
                    r.alt = "",
                    t.appendChild(r)
                }
            },
        We.tagElementName = "criteoUserSyncTagsContainer",
        We
    );
    function We() {}
    function ze() {
        var i = (new Date).getTime();
        return "undefined" != typeof performance && "function" == typeof performance.now && (
            i += performance.now()
        ),
        "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (e) {
            var t = (i + 16 * Math.random()) % 16 | 0;
            return i = Math.floor(i / 16),
            (
                "x" === e
                    ? t
                    : 3 & t | 8
            ).toString(16)
        })
    }
    var He = (
            Ge = z,
            r(qe, Ge),
            qe.prototype.getMetricBuilder = function () {
                return this.metricBuilder
            },
            qe.prototype.eval = function (e) {
                this.evalWithTimeout(e, void 0)
            },
            qe.prototype.evalWithTimeout = function (t, i) {
                var n = this;
                (this.serviceProvider || new Ue).getServicesAsync(function (e) {
                    n.metricsManager || (n.metricsManager = new ne(e.localStorageHelper)),
                    n.metricBuilder || (n.metricBuilder = new V(n.metricsManager)),
                    n.innerEval(t, n.metricBuilder, e.gdprConsent, e.ccpaConsent, i)
                })
            },
            qe.prototype.innerEval = function (n, o, r, a, e) {
                var s = this,
                    d = ze(),
                    t = qe.getCriteoAdapterBidRequest(),
                    i = qe.getRequestAuctionStart(t),
                    c = e || q(t && t.timeout),
                    l = new pe(o, i, c),
                    u = new ae(
                        this.slots,
                        n.context,
                        this.urlBuilder,
                        this.profileId,
                        this.integrationMode,
                        this.networkId,
                        this.adapterVersion,
                        {
                            ccpaIabConsent: a,
                            gdprConsent: r
                        },
                        void 0,
                        this.viewportComputer,
                        c,
                        d,
                        n.context.userIds,
                        Math.round(new Date / 1e3)
                    );
                if (!u.isValid() || "undefined" == typeof JSON) 
                    return O.Debug("Request ignored because it doesnt contain any slot"),
                    void this.callbackError(void 0, void 0);
                var p = u.getRequest(),
                    h = JSON.stringify(p),
                    v = u.getUrl(),
                    f = new T(v, h, "application/x-www-form-urlencoded");
                l.sendRequest(v),
                f.send(function (e) {
                    try {
                        l.requestReceived();
                        var t = G(e) || {},
                            i = de(t);
                        void 0 !== s.callbackSuccess && s.callbackSuccess(JSON.stringify(t), i),
                        l.finish(),
                        !0 === t.user_sync && Le.execUserSync(n.context.remoteLogging, r, a, t),
                        o
                            .getMetricsManager()
                            .sendEvents(o, d, !0)
                    } catch (e) {
                        s.reportAsyncRequestException(n, "onSuccess", e)
                    }
                    n
                        .context
                        .remoteLogging
                        .sendErrorReport(s.urlBuilder, d),
                    s.metricBuilder = void 0
                }, function (e, t) {
                    try {
                        l.requestReceived(),
                        void 0 !== s.callbackError && s.callbackError(e, t),
                        l.finish(),
                        o
                            .getMetricsManager()
                            .sendEvents(o, d, !0)
                    } catch (e) {
                        s.reportAsyncRequestException(n, "onError", e)
                    }
                    n
                        .context
                        .remoteLogging
                        .sendErrorReport(s.urlBuilder, d),
                    s.metricBuilder = void 0
                }, function () {
                    try {
                        l.requestReceived(!0),
                        void 0 !== s.callbackTimeout && s.callbackTimeout(),
                        l.finish(),
                        o
                            .getMetricsManager()
                            .sendEvents(o, d, !0)
                    } catch (e) {
                        s.reportAsyncRequestException(n, "onTimeout", e)
                    }
                    n
                        .context
                        .remoteLogging
                        .sendErrorReport(s.urlBuilder, d),
                    s.metricBuilder = void 0
                }, this.timeout)
            },
            qe.prototype.reportAsyncRequestException = function (e, t, i) {
                var n = i.stack
                    ? i.stack
                    : i.toString();
                e
                    .context
                    .remoteLogging
                    .log("Exception", "Exception caught in AsyncRequest " + t + " callback:\n" + n),
                O.Error("Error " + t + ":\n\t" + n)
            },
            qe.getCriteoAdapterBidRequest = function () {
                try {
                    return window
                        .pbjs
                        ._bidsRequested
                        .find(function (e) {
                            return "criteo" === e.bidderCode
                        })
                } catch (e) {
                    return
                }
            },
            qe.getRequestAuctionStart = function (e) {
                return e && e.auctionStart
            },
            qe.NAME = "directbidding",
            qe
        ),
        Ge;
    function qe(e, t, i, n, o, r, a, s, d, c, l, u, p) {
        var h = Ge.call(this, qe.NAME) || this;
        return h.profileId = e,
        h.urlBuilder = t,
        h.slots = i,
        h.callbackSuccess = n,
        h.callbackError = o,
        h.callbackTimeout = r,
        h.serviceProvider = a,
        h.timeout = d,
        h.networkId = c,
        h.integrationMode = l,
        h.adapterVersion = u,
        h.viewportComputer = p,
        h.metricsManager = s,
        h.metricsManager && (h.metricBuilder = new V(h.metricsManager)),
        h
    }
    var Ve = (
            je = z,
            r(Ke, je),
            Ke.prototype.eval = function (e) {
                var t = this;
                setTimeout(function () {
                    return t.onTimeout()
                }, this.timeout),
                this
                    .directBiddingEvent
                    .evalWithTimeout(e, this.timeout)
            },
            Ke.prototype.onSuccess = function (e, t) {
                this.hasResponded = !0,
                this.hasTimeouted || this.callbackSuccess(e, t)
            },
            Ke.prototype.onError = function (e, t) {
                this.hasResponded = !0,
                this.hasTimeouted || this.callbackError(e, t)
            },
            Ke.prototype.onHttpTimeout = function () {
                this.hasResponded = !0,
                this.hasTimeouted || this.callbackTimeout()
            },
            Ke.prototype.onTimeout = function () {
                this.hasResponded || (this.hasTimeouted = !0, this.callbackTimeout())
            },
            Ke.prototype.getMetricBuilder = function () {
                return this
                    .directBiddingEvent
                    .getMetricBuilder()
            },
            Ke.NAME = "directbidding",
            Ke
        ),
        je;
    function Ke(e, t, i, n, o, r, a, s, d, c, l, u, p) {
        var h = je.call(this, Ke.NAME) || this,
            v = Math.max(10 * (d || 3e3), 3e3);
        return h.directBiddingEvent = new He(e, t, i, function (e, t) {
            return h.onSuccess(e, t)
        }, function (e, t) {
            return h.onError(e, t)
        }, function () {
            return h.onHttpTimeout()
        }, s, a, v, c, l, u, p),
        h.slots = i,
        h.callbackSuccess = n,
        h.callbackError = o,
        h.callbackTimeout = r,
        h.timeout = 0 === d
            ? 0
            : d || 3e3,
        h.hasTimeouted = !1,
        h.hasResponded = !1,
        h
    }
    var Je = (
            Ye = z,
            r(Xe, Ye),
            Xe.prototype.eval = function (e) {
                this.callback && this
                    .callback
                    .apply(this)
            },
            Xe.NAME = "genericEvent",
            Xe
        ),
        Ye;
    function Xe(e) {
        var t = Ye.call(this, Xe.NAME) || this;
        return t.callback = e,
        t
    }
    var Qe = (Ze.prototype.generateRandomId = function () {
        return Math
            .random()
            .toString(36)
            .replace(/[^a-z]+/g, "")
            .substr(0, 6)
    }, Ze);
    function Ze(e, t, i, n, o, r, a, s) {
        this.id = this.generateRandomId(),
        this.slotId = e,
        this.impressionId = t,
        this.cpm = i,
        this.width = n,
        this.height = o,
        this.zoneId = r,
        this.dealCode = a,
        this.useSafeframe = null != s && s
    }
    var $e = (
            et = Qe,
            r(tt, et),
            tt.prototype.GenerateEvent = function (e) {
                var t = this;
                return e.ResizeFrame(this.width, this.height),
                new Je(function () {
                    return e.LoadScript(t.displayUrl)
                })
            },
            tt.prototype.GenerateMessage = function () {
                return {displayUrl: this.displayUrl}
            },
            tt
        ),
        et;
    function tt(e, t, i, n, o, r, a, s, d) {
        var c = et.call(this, e, t, i, n, o, r, s, d) || this;
        return c.displayUrl = a,
        c
    }
    var it = (
            nt = Qe,
            r(ot, nt),
            ot.prototype.GenerateEvent = function (e) {
                var t = this;
                return e.ResizeFrame(this.width, this.height),
                new Je(function () {
                    return e.Write(t.creative)
                })
            },
            ot.prototype.GenerateMessage = function () {
                return {creative: this.creative}
            },
            ot
        ),
        nt;
    function ot(e, t, i, n, o, r, a, s, d) {
        var c = nt.call(this, e, t, i, n, o, r, s, d) || this;
        return c.creative = a,
        c
    }
    var rt = (
            at = Qe,
            r(st, at),
            st.prototype.GenerateEvent = function (e) {
                var t = this;
                return "function" != typeof this.nativeCallback
                    ? (
                        O.Error("'nativeCallback' parameter is not a function in placements object"),
                        new Je(void 0)
                    )
                    : "object" != typeof this.nativePayload
                        ? (
                            O.Error("'nativePayload' parameter is not an object in placements object"),
                            new Je(void 0)
                        )
                        : new Je(function () {
                            return t.nativeCallback(t.nativePayload)
                        })
            },
            st.prototype.GenerateMessage = function () {
                return {nativePayload: this.nativePayload}
            },
            st
        ),
        at;
    function st(e, t, i, n, o, r, a, s, d) {
        var c = at.call(this, e, t, i, n, o, r, d) || this;
        return c.nativeCallback = a,
        c.nativePayload = s,
        c
    }
    function dt(e, t) {
        if (e) {
            var i;
            try {
                i = eval("(function(){return " + e + "})()")
            } catch (e) {
                return void O.Error("Error evaluating the function: " + e)
            }
            if ("function" == typeof i) 
                return i.apply(i, t);
            O.Error("The passed value is not a function")
        } else 
            O.Error("Cannot execute an empty function")
    }
    var ct = (
            lt = Qe,
            r(ut, lt),
            ut.prototype.GenerateEvent = function (e) {
                var t = this;
                return void 0 !== this.videoCallback
                    ? "function" != typeof this.videoCallback
                        ? (
                            O.Error("'videoCallback' parameter is not a function in video object"),
                            new Je(void 0)
                        )
                        : new Je(function () {
                            return t.videoCallback(t.GenerateMessage())
                        })
                    : (dt(this.videoPlayerFunction, [
                        {
                            slotid: this.impressionId,
                            vastUrl: this.vastUrl,
                            vastXml: this.vastXml
                        }
                    ]), new Je(void 0))
            },
            ut.prototype.GenerateMessage = function () {
                return {vastUrl: this.vastUrl, vastXml: this.vastXml, slotid: this.impressionId, cpm: this.cpm}
            },
            ut
        ),
        lt;
    function ut(e, t, i, n, o, r, a, s, d, c, l) {
        var u = lt.call(this, e, t, i, n, o, r, s) || this;
        return u.videoCallback = a,
        u.vastUrl = d,
        u.vastXml = c,
        u.videoPlayerFunction = l,
        u
    }
    function pt(e, t, i, n, o, r, a, s, d, c, l, u, p, h, v) {
        if (u) 
            return new ct(e, t, i, n, o, r, p, l, d, c, v);
        if (void 0 !== a && void 0 !== s) 
            return new rt(e, t, i, n, o, r, a, s, l);
        if (void 0 !== c && 0 !== c.indexOf("<script")) 
            return new it(e, t, i, n, o, r, c, l, h);
        if (void 0 !== c && 0 === c.indexOf("<script")) {
            var f = new RegExp("(?<=src='|\")(.*)(?='|\")"),
                m = c.match(f);
            if (null !== m && 0 < m.length) 
                return new $e(e, t, i, n, o, r, m[0], l, h)
        }
        return void 0 !== d
            ? new $e(e, t, i, n, o, r, d, l, h)
            : void 0
    }
    var ht = (
        vt.tryInsertPlaceholder = function (e, t, i) {
            var n = document.getElementById(e);
            if (null === n) 
                return O.Warning(
                    "Unable to insert ad placeholder : impression id " + e + " not found."
                ),
                !1;
            if (n.appendChild(this.createPlaceholder()), !t && this.isVisible(n)) 
                return !0;
            this.removePlaceholder(e, i);
            var o = n.parentElement;
            if (null === o) 
                return !1;
            var r = this.createClone(n);
            return o.insertBefore(r, n),
            r.appendChild(this.createPlaceholder()),
            this.isVisible(r)
                ? (i[e] = r, !0)
                : (
                    O.Warning("Ad placeholder created but not visible : can't render."),
                    o.removeChild(r),
                    !1
                )
        },
        vt.isVisible = function (e) {
            return 0 !== e.offsetWidth && 0 !== e.offsetHeight && 0 !== e
                .getClientRects()
                .length
        },
        vt.createClone = function (e) {
            var t = e.cloneNode(!1);
            return t.id = this.generateRandomId(),
            t.className = "",
            "none" === t.style.display && t
                .style
                .removeProperty("display"),
            "SPAN" === t.tagName && (t.style.display = "block"),
            e.style.display = "none",
            t
        },
        vt.generateRandomId = function () {
            for (
                var e = "1234567890abcdefghijklmnopqrstuvwxyz",
                t = "",
                i = 0;
                i < 20;
                i++
            ) {
                var n = Math.floor(Math.random() * e.length);
                t += e.charAt(n)
            }
            return t
        },
        vt.createPlaceholder = function () {
            var e = document.createElement("div");
            return e.style.width = "1px",
            e.style.height = "1px",
            e.style.display = "block",
            e.className = vt.PLACEHOLDER_NAME,
            e
        },
        vt.removePlaceholder = function (e, t) {
            var i = t[e];
            void 0 !== i && null !== i.parentNode && i
                .parentNode
                .removeChild(i);
            var n = document.getElementById(e);
            if (null !== n) 
                for (
                    var o = 0,
                    r = n.getElementsByClassName(vt.PLACEHOLDER_NAME);
                    o < r.length;
                    o++
                ) {
                    var a = r[o];
                    null !== a.parentNode && a
                        .parentNode
                        .removeChild(a)
                }
            },
        vt.insertAdIFrame = function (e, t) {
            var i,
                n = t[e];
            if (void 0 !== n) 
                i = n;
            else {
                var o = document.getElementById(e);
                if (null === o) 
                    return null;
                i = o
            }
            for (
                var r = 0,
                a = i.getElementsByClassName(vt.PLACEHOLDER_NAME);
                r < a.length;
                r++
            ) {
                for (var s = a[r], d = 0, c = s.childNodes; d < c.length; d++) {
                    var l = c[d];
                    null !== l.parentNode && l
                        .parentNode
                        .removeChild(l)
                }
                var u = this.createAdIFrame();
                return s.appendChild(u),
                s.style.width = "",
                s.style.height = "",
                s.style.display = "",
                u
            }
            return null
        },
        vt.createAdIFrame = function () {
            var e = document.createElement("iframe");
            return e.scrolling = "no",
            e.marginWidth = "0",
            e.marginHeight = "0",
            e.frameBorder = "0",
            e.style.border = "0",
            e.style.verticalAlign = "bottom",
            e
        },
        vt.removePlaceholders = function (e, t, i) {
            for (var n = 0, o = e; n < o.length; n++) {
                var r = o[n].impId;
                -1 === t.indexOf(r) && vt.removePlaceholder(r, i)
            }
        },
        vt.tryInsertPlaceholders = function (e, t, i) {
            for (var n = [], o = 0, r = e; o < r.length; o++) {
                var a = r[o],
                    s = a.impId;
                vt.tryInsertPlaceholder(s, t, i) && n.push(a)
            }
            return n
        },
        vt.PLACEHOLDER_NAME = "criteo_placeholder",
        vt
    );
    function vt() {}
    function ft(e) {
        window.googletag = window.googletag || {},
        window.googletag.cmd = window.googletag.cmd || [],
        window
            .googletag
            .cmd
            .push(e)
    }
    function mt(t) {
        ft(function () {
            var e = gt(window.googletag.pubads().getSlots());
            t(e)
        })
    }
    function gt(e) {
        for (
            var t = [],
            i = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
            n = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight,
            o = 0,
            r = e;
            o < r.length;
            o++
        ) {
            for (
                var a = r[o],
                s = a.getSlotElementId(),
                d = [],
                c = 0,
                l = a.getSizes(i, n) || a.getSizes();
                c < l.length;
                c++
            ) {
                var u = l[c];
                "function" == typeof u.getWidth && u.getWidth() && "function" == typeof u.getHeight && u.getHeight() && d.push(
                    u.getWidth() + "x" + u.getHeight()
                )
            }
            s && 0 < d.length && t.push({slotId: s, sizes: d})
        }
        return t
    }
    function yt(e, t, i) {
        ft(function () {
            window.googletag.encryptedSignalProviders || (
                window.googletag.encryptedSignalProviders = []
            ),
            O.Debug("Promise set for GPT ESP"),
            window
                .googletag
                .encryptedSignalProviders
                .push({
                    id: "esp.criteo.com",
                    collectorFunction: function () {
                        return O.Debug("Returning Promise to GPT"),
                        t(),
                        e
                    }
                }),
            i()
        })
    }
    function wt() {
        return bt(null, null)
    }
    function bt(e, t, i) {
        var n = {
            crt_pb: [e],
            crt_bidid: [t]
        };
        return void 0 !== i && (n = S(S({}, n), {crt_deal: [i]})),
        n
    }
    var Ct = (
        It.prototype.setKeyValuesForAllSlots = function (t) {
            var i = this;
            this
                .googletag
                .cmd
                .push(function () {
                    for (var e in t) 
                        t.hasOwnProperty(e) && (
                            i.googletag.pubads().clearTargeting(e),
                            i.googletag.pubads().setTargeting(e, t[e] + "")
                        )
                })
        },
        It.prototype.setKeyValuePerSlot = function (t, i) {
            var n = this
                .googletag
                .pubads()
                .getSlots()
                .filter(function (e) {
                    return e.getSlotElementId() === t
                });
            0 === n.length
                ? O.Warning("No googletag slot found for slotId: " + t)
                : 1 < n.length
                    ? O.Warning("More than one googletag slot found for slotId: " + t)
                    : this
                        .googletag
                        .cmd
                        .push(function () {
                            for (var e in i) 
                                i.hasOwnProperty(e) && (
                                    n[0].clearTargeting(e),
                                    n[0].setTargeting(e, i[e] + "")
                                )
                        })
        },
        It.prototype.resetKeyValuesForSlots = function (t) {
            var e = this,
                i = wt();
            this
                .googletag
                .pubads()
                .getSlots()
                .filter(function (e) {
                    return -1 !== t.indexOf(e.getSlotElementId())
                })
                .forEach(function (t) {
                    e
                        .googletag
                        .cmd
                        .push(function () {
                            for (var e in i) 
                                i.hasOwnProperty(e) && t.clearTargeting(e)
                        })
                })
        },
        It
    );
    function It() {
        void 0 === window.googletag && (window.googletag = {}),
        this.googletag = window.googletag,
        this.googletag.cmd = this.googletag.cmd || []
    }
    function Et(e, t, i) {
        return typeof e[t] === i
            ? e[t]
            : void 0
    }
    function _t(t, i) {
        try {
            return decodeURIComponent(t)
        } catch (e) {
            return void 0 !== i
                ? i
                : t
        }
    }
    function At(e) {
        var t = document.createElement("a");
        return t.href = e, {
            protocol: t.protocol,
            host: t.host,
            hostname: t.hostname,
            pathname: "/" === t.pathname[0]
                ? t
                    .pathname
                    .slice(1)
                : t.pathname,
            search: t.search,
            href: t.href
        }
    }
    function St(e, t) {
        var i = document.createElement("a");
        t && "noDecodeWholeURL" in t && t.noDecodeWholeURL
            ? i.href = e
            : i.href = decodeURIComponent(e);
        var n = t && "decodeSearchAsString" in t && t.decodeSearchAsString;
        return {
            href: i.href,
            protocol: (i.protocol || "").replace(/:$/, ""),
            hostname: i.hostname,
            port: +i.port,
            pathname: i
                .pathname
                .replace(/^(?!\/)/, "/"),
            search: n
                ? i.search
                : Rt(i.search || ""),
            hash: (i.hash || "").replace(/^#/, ""),
            host: i.host || window.location.host
        }
    }
    function Tt(t) {
        return Object
            .keys(t)
            .map(function (e) {
                return e + "=" + t[e]
            })
            .join("&")
    }
    function Pt(e) {
        return (e.protocol || "http") + "://" + (
            e.host || e.hostname + (
                e.port
                    ? ":" + e.port
                    : ""
            )
        ) + (e.pathname || "") + (
            e.search
                ? "?" + Tt(e.search || "")
                : ""
        ) + (
            e.hash
                ? "#" + e.hash
                : ""
        )
    }
    function Rt(e) {
        return e
            ? e
                .replace(/^\?/, "")
                .split("&")
                .reduce(function (e, t) {
                    var i = t.split("="),
                        n = i[0],
                        o = i[1];
                    return /\[\]$/.test(n) || (e[n] = o || ""),
                    e
                }, {})
            : {}
    }
    function kt(e) {
        var t = {},
            i = e.split("?");
        if (1 < i.length) 
            for (var n = 0, o = i[1].split("&"); n < o.length; n++) {
                var r = o[n].split("=");
                t[_t(r[0])] = _t(r[1])
            }
        return t
    }
    var xt = function (e, t) {
            this.top = e,
            this.left = t
        },
        Ot = function (e, t, i, n) {
            this.width = e,
            this.height = t,
            this.scrollTop = i,
            this.scrollLeft = n
        },
        Mt = (
            Dt.getHighestAccessibleWindow = function (e) {
                var t = e,
                    i = !1;
                try {
                    for (; t.parent.document !== t.document;) {
                        if (!t.parent.document) {
                            i = !0;
                            break
                        }
                        t = t.parent
                    }
                } catch (e) {
                    i = !0
                }
                return {topFrame: t, err: i}
            },
            Dt.getHighestAccessibleUrl = function (e) {
                var t = e.topFrame;
                if (!e.err) 
                    return t.location.href;
                try {
                    var i = t.top.location.href;
                    if (i) 
                        return i
                } catch (e) {}
                try {
                    var n = t.location.ancestorOrigins;
                    if (n) 
                        return n[n.length - 1]
                } catch (e) {}
                return t.document.referrer
            },
            Dt.inIframe = function () {
                try {
                    return window.self !== window.top
                } catch (e) {
                    return !0
                }
            },
            Dt
        );
    function Dt() {}
    var Ut = (
        Bt.prototype.getViewport = function () {
            var e = Mt
                    .getHighestAccessibleWindow(window)
                    .topFrame,
                t = e.document,
                i = e.innerWidth || t.documentElement.clientWidth,
                n = e.innerHeight || t.documentElement.clientHeight,
                o = t.documentElement.scrollTop || t.body && t.body.scrollTop || 0,
                r = t.documentElement.scrollLeft || t.body && t.body.scrollLeft || 0;
            return new Ot(i, n, o, r)
        },
        Bt.prototype.getSlotPosition = function (e) {
            var t = e.impId,
                i = document.getElementById(t);
            if (null !== i) {
                var n = i.getBoundingClientRect();
                return new xt(n.top, n.left)
            }
        },
        Bt
    );
    function Bt() {}
    var Ft = (
        Nt.createLineItemRangesFromString = function (e) {
            for (var t = [], i = 0, n = e.split(";"); i < n.length; i++) {
                var o = n[i],
                    r = o.split(".."),
                    a = Nt.roundToDecimal(r[0], 2),
                    s = r[1].split(":"),
                    d = Nt.roundToDecimal(s[0], 2),
                    c = Nt.roundToDecimal(s[1], 2);
                if (isNaN(a) || isNaN(d) || isNaN(c) || 0 === c) {
                    O.Warning("Could not parse range parameter: " + o);
                    break
                }
                if (a < 0 || d < 0 || c < 0) {
                    O.Warning("Positive values must be set for range bounds: " + o);
                    break
                }
                var l = d - a,
                    u = 100 * l / (100 * c),
                    p = u === Math.floor(u);
                d < a
                    ? O.Warning(
                        "Lower bound (" + a + ") greater than upper bound (" + d + ")"
                    )
                    : p
                        ? t.push(new Nt(a, d, c))
                        : O.Warning(
                            "Range (" + l + ") is not divisible by increment (" + c + ")"
                        )
            }
            return t.sort(function (e, t) {
                return e.upperBound > t.upperBound
                    ? 1
                    : t.upperBound > e.upperBound
                        ? -1
                        : 0
            }),
            t
        },
        Nt.getDefaultDenseLineItemRanges = function () {
            return [
                new Nt(0, 3, .01),
                new Nt(3, 8, .05),
                new Nt(8, 20, .5)
            ]
        },
        Nt.computeLineItemPricebandValue = function (e, t) {
            0 === t.length && (t = Nt.getDefaultDenseLineItemRanges());
            for (var i = 0, n = t; i < n.length; i++) {
                var o = n[i];
                if (e <= o.upperBound && e > o.lowerBound) {
                    var r = Math.floor(e / o.increment + 1e-4) * o.increment;
                    return Nt.formatPriceBand(r)
                }
            }
            return e < t[0].lowerBound
                ? void 0
                : e === t[0].lowerBound
                    ? Nt.formatPriceBand(t[0].lowerBound)
                    : Nt.formatPriceBand(t[t.length - 1].upperBound)
        },
        Nt.formatPriceBand = function (e) {
            return e.toFixed(2)
        },
        Nt.roundToDecimal = function (e, t) {
            var i = parseFloat(e),
                n = Math.pow(10, t);
            return Math.round(i * n) / n
        },
        Nt
    );
    function Nt(e, t, i) {
        this.lowerBound = e,
        this.upperBound = t,
        this.increment = i
    }
    var Lt = (
        Wt.prototype.addParameter = function (e, t) {
            this.paramParser[e.toLowerCase()] = t
        },
        Wt.prototype.tryFillParameters = function (e) {
            for (var t in e) 
                if (void 0 !== e[t]) {
                    var i = t.toLowerCase();
                    this.paramParser[i]
                        ? this.paramParser[i](e[t])
                        : O.Warning("Unknown parameter: " + t)
                }
            },
        Wt
    );
    function Wt() {
        var t = this;
        this.integrationMode = J.Unspecified,
        this.paramParser = {},
        this.addParameter("integrationMode", function (e) {
            t.integrationMode = Q(e)
        })
    }
    var zt = (Ht = Lt, r(Gt, Ht), Gt),
        Ht;
    function Gt(e) {
        var t = Ht.call(this) || this;
        return t.bidId = void 0,
        t.document = window.document,
        t.containerId = void 0,
        t.addParameter("bidId", function (e) {
            t.bidId = e
        }),
        t.addParameter("document", function (e) {
            t.document = e
        }),
        t.addParameter("containerId", function (e) {
            t.containerId = e
        }),
        Ht
            .prototype
            .tryFillParameters
            .call(t, e),
        t
    }
    var qt = function (e, t, i, n, o, r, a, s, d, c) {
            this.slotId = ze().replace(/-/g, ""),
            this.impId = e,
            this.zoneId = t,
            this.native = i,
            this.nativeCallback = n,
            this.transactionId = o,
            this.sizes = r,
            this.publisherSubId = a,
            this.mediaTypes = s,
            this.video = d,
            this.ext = c
        },
        Vt = (jt.prototype.toString = function () {
            return this.width + "x" + this.height
        }, jt);
    function jt(e, t) {
        this.width = e,
        this.height = t
    }
    var Kt = function (e, t, i, n, o, r, a, s, d, c, l) {
            this.playersize = e,
            this.mimes = t,
            this.protocols = i,
            this.maxduration = n,
            this.api = o,
            this.skip = r,
            this.placement = a,
            this.playbackmethod = s,
            this.minduration = d,
            this.startdelay = c,
            this.videoCallback = l
        },
        Jt = (
            Yt = Lt,
            r(Xt, Yt),
            Xt.getSizesFromRawSizes = function (e) {
                for (var t = [], i = 0, n = e; i < n.length; i++) {
                    var o = n[i].split("x");
                    t.push(new Vt(parseInt(o[0], 10), parseInt(o[1], 10)))
                }
                return t
            },
            Xt.placementFromContext = function (e) {
                return "instream" === e
                    ? 1
                    : "outstream" === e
                        ? 2
                        : void 0
            },
            Xt
        ),
        Yt;
    function Xt(e) {
        var n = Yt.call(this) || this;
        return n.slotId = void 0,
        n.zoneId = void 0,
        n.sizes = [],
        n.nativeCallback = void 0,
        n.publisherSubId = void 0,
        n.ext = void 0,
        n.video = void 0,
        n.addParameter("slotid", function (e) {
            n.slotId = e
        }),
        n.addParameter("zoneid", function (e) {
            n.zoneId = e
        }),
        n.addParameter("sizes", function (e) {
            0 == n.sizes.length && (n.sizes = Xt.getSizesFromRawSizes(e))
        }),
        n.addParameter("mediaTypes", function (e) {
            var t,
                i;
            (
                null === (
                    t = null == e
                        ? void 0
                        : e.banner
                ) || void 0 === t
                    ? void 0
                    : t.sizes
            ) && (n.sizes = Xt.getSizesFromRawSizes(
                null == e
                    ? void 0
                    : e.banner.sizes
            )),
            (
                null == e
                    ? void 0
                    : e.video
            ) && (n.video = new Kt(
                e.video.playerSize,
                e.video.mimes,
                e.video.protocols,
                e.video.maxduration,
                e.video.api,
                e.video.skip,
                e.video.placement || Xt.placementFromContext(e.video.context),
                e.video.playbackmethod || [],
                e.video.minduration,
                e.video.startdelay,
                null === (i = e.video) || void 0 === i
                    ? void 0
                    : i.videoCallback
            ))
        }),
        n.addParameter("nativecallback", function (e) {
            n.nativeCallback = e
        }),
        n.addParameter("publisherSubId", function (e) {
            n.publisherSubId = e
        }),
        n.addParameter("ext", function (e) {
            var t = n.ext;
            (
                null == t
                    ? void 0
                    : t.data
            ) && e.data && (t.data = S(S({}, e.data), t.data)),
            n.ext = t
                ? S(S({}, e), t)
                : e
        }),
        n.addParameter("ortb2Imp", function (e) {
            var t,
                i = n.ext;
            (
                null == i
                    ? void 0
                    : i.data
            ) && (
                null === (t = e.ext) || void 0 === t
                    ? void 0
                    : t.data
            ) && (i.data = S(S({}, e.ext.data), i.data)),
            n.ext = i
                ? S(S({}, e.ext), i)
                : e.ext
        }),
        Yt
            .prototype
            .tryFillParameters
            .call(n, e),
        n
    }
    var Qt = (
            Zt = Lt,
            r($t, Zt),
            $t.prototype.deserializePlacementInput = function (e) {
                for (var t = [], i = 0, n = e; i < n.length; i++) {
                    var o = n[i],
                        r = new Jt(o);
                    t.push(new qt(
                        r.slotId,
                        r.zoneId,
                        void 0 !== r.nativeCallback,
                        r.nativeCallback,
                        void 0,
                        r.sizes,
                        r.publisherSubId,
                        void 0,
                        r.video,
                        r.ext
                    ))
                }
                return t
            },
            $t
        ),
        Zt;
    function $t(e) {
        var t = Zt.call(this) || this;
        return t.placements = void 0,
        t.networkId = void 0,
        t.addParameter("networkId", function (e) {
            t.networkId = e
        }),
        t.addParameter("placements", function (e) {
            t.placements = t.deserializePlacementInput(e)
        }),
        Zt
            .prototype
            .tryFillParameters
            .call(t, e),
        t
    }
    var ei = (
            ti = U,
            r(ii, ti),
            ii.prototype.ResizeFrame = function (e, t) {
                this.width = e,
                this.height = t
            },
            ii.prototype.Write = function (e) {
                var t = {
                    id: this.id,
                    width: this.width,
                    height: this.height,
                    html: e
                };
                this.LoadSafeframe(t)
            },
            ii.prototype.LoadScript = function (e) {
                var t = {
                    id: this.id,
                    width: this.width,
                    height: this.height,
                    url: F(e)
                };
                this.LoadSafeframe(t)
            },
            ii.prototype.LoadSafeframe = function (e) {
                var t = this
                    .document
                    .getElementById(this.containerId);
                if (t) {
                    var i = this.CreateSafeframe(
                        ii.IFRAME_URL + "#" + encodeURIComponent(JSON.stringify(e))
                    );
                    t.appendChild(i)
                }
            },
            ii.prototype.CreateSafeframe = function (e) {
                var t = this
                    .document
                    .createElement("iframe");
                return t.scrolling = "no",
                t.marginWidth = "0",
                t.marginHeight = "0",
                t.frameBorder = "0",
                t.style.border = "0",
                t.width = this
                    .width
                    .toString(),
                t.height = this
                    .height
                    .toString(),
                t.src = e,
                t
            },
            ii.IFRAME_URL = "https://static.criteo.net/js/ld/safeframe/html/safeframe.html",
            ii
        ),
        ti;
    function ii(e, t, i) {
        var n = ti.call(this) || this;
        return n.document = e,
        n.containerId = t,
        n.id = i,
        n.width = 0,
        n.height = 0,
        n
    }
    var ni = 184,
        oi = 275;
    function ri(e, t, i) {
        di(e, ni, t, i)
    }
    function ai(t, i, n) {
        mt(function (e) {
            e.length <= 0
                ? O.Warning(
                    "No Google tag placements have been retrieved, no bid will be requested."
                )
                : di({
                    networkId: t,
                    placements: e
                }, ni, i, n)
        })
    }
    function si(e, t, i) {
        if ("number" == typeof e) 
            ai(e, t, i);
        else {
            var n = Et(e, "networkId", "number"),
                o = Et(e, "placements", "object"),
                r = Et(e, "callback", "function"),
                a = Et(e, "timeout", "function");
            void 0 === o
                ? ai(n, r, a)
                : di({
                    networkId: n,
                    placements: gt(o)
                }, ni, r, a)
        }
    }
    function di(e, l, I, u) {
        var E = new Qt(e);
        if (yi(E)) {
            var p = new Ut,
                _ = (window["criteo_pubtag_135"] || window.criteo_pubtag).context;
            _
                .serviceProvider
                .getServicesAsync(function (e) {
                    var t = A.create(e.localStorageHelper);
                    if (t.adBlockFlagEnabled()) {
                        l = oi,
                        _.isAdBlocked = !0;
                        var i = ht.tryInsertPlaceholders(E.placements, !0, _.cloneByImpressionId);
                        if (0 === i.length) 
                            return;
                        E.placements = i;
                        var n = I;
                        I = function (e) {
                            void 0 !== n && n(e),
                            e.forEach(function (e) {
                                var t = ht.insertAdIFrame(e.impressionId, _.cloneByImpressionId);
                                null !== t && hi(e.id, t.contentDocument)
                            })
                        }
                    }
                    for (var o = function () {
                        ht.removePlaceholders(E.placements, [], _.cloneByImpressionId),
                        (new h).isAdBlocked(function (e) {
                            e
                                ? t.enableAdBlockFlag()
                                : t.disableAdBlockFlag()
                        }),
                        void 0 !== I && I([])
                    }, r = new Ve(
                        l,
                        new $(!1),
                        E.placements,
                        function (e, t) {
                            var s = [],
                                i = G(e);
                            if (void 0 !== i && void 0 !== i.slots) {
                                var d = {};
                                if (void 0 !== (
                                    null == t
                                        ? void 0
                                        : t.slots
                                )) 
                                    for (var n = 0, o = t.slots; n < o.length; n++) {
                                        var r = o[n];
                                        d[r.imp_id] = r
                                    }
                                var c = {};
                                if (i.invocation_codes) 
                                    for (var a = 0, l = i.invocation_codes; a < l.length; a++) 
                                        for (var u = l[a], p = 0, h = u.slot_ids; p < h.length; p++) {
                                            var v = h[p];
                                            c[v] = u.invocation_code
                                        }
                                    for (var f = function (t) {
                                    for (var e = void 0, i = void 0, n = 0, o = E.placements; n < o.length; n++) {
                                        var r = o[n];
                                        if (r.nativeCallback && r.impId === t.impid) {
                                            e = r.nativeCallback;
                                            break
                                        }
                                        if (r.video && r.video.videoCallback && r.impId === t.impid) {
                                            i = r.video.videoCallback;
                                            break
                                        }
                                    }
                                    !e && t.slotid in c && (e = function (e) {
                                        dt(c[t.slotid], [e])
                                    });
                                    var a = pt(
                                        t.slotid,
                                        t.impid,
                                        t.cpm,
                                        t.width,
                                        t.height,
                                        t.zoneid,
                                        e,
                                        t.native,
                                        t.displayurl,
                                        t.creative,
                                        t.deal,
                                        t.video,
                                        i,
                                        null === (o = d[t.slotid]) || void 0 === o
                                            ? void 0
                                            : o.enable_safeframe,
                                        t.video_callback
                                    );
                                    void 0 !== a && (
                                        (window["criteo_pubtag_135"] || window.criteo_pubtag).standaloneBidder.bids[a.id] = a,
                                        s.push(a.impressionId)
                                    )
                                }, m = 0, g = i.slots; m < g.length; m++) {
                                    f(r = g[m])
                                }
                                i.granularity && ci(i.granularity)
                            }
                            if (
                                ht.removePlaceholders(E.placements, s, _.cloneByImpressionId),
                                void 0 !== I
                            ) {
                                for (var y = [], w = 0, b = E.placements; w < b.length; w++) {
                                    var C = b[w];
                                    y.push(C.impId)
                                }
                                I(mi({impressionIds: y}))
                            }
                        },
                        o,
                        o,
                        new ne(e.localStorageHelper),
                        _.serviceProvider,
                        0 === u
                            ? 0
                            : u || 3e3,
                        E.networkId,
                        E.integrationMode,
                        void 0,
                        p
                    ), a = [], s = 0, d = E.placements; s < d.length; s++) {
                        var c = d[s];
                        a.push(c.impId),
                        void 0 === c.ext && void 0 !== _.slotsExt && void 0 !== _.slotsExt[c.impId] && (
                            c.ext = _.slotsExt[c.impId]
                        )
                    }
                    (window["criteo_pubtag_135"] || window.criteo_pubtag).standaloneBidder.impIds = a,
                    (window["criteo_pubtag_135"] || window.criteo_pubtag).push(r)
                })
        }
    }
    function ci(e) {
        (window["criteo_pubtag_135"] || window.criteo_pubtag).standaloneBidder.lineItemRanges = Ft.createLineItemRangesFromString(
            e
        )
    }
    function li() {
        var e = new Ct;
        e.resetKeyValuesForSlots(
            (window["criteo_pubtag_135"] || window.criteo_pubtag).standaloneBidder.impIds
        );
        var t = (window["criteo_pubtag_135"] || window.criteo_pubtag).standaloneBidder.lineItemRanges,
            i = wi();
        for (var n in i) 
            if (i.hasOwnProperty(n)) {
                var o = pi(i[n], t);
                void 0 !== o && e.setKeyValuePerSlot(n, o)
            }
        }
    function ui(e, t) {
        return pi(e, Ft.createLineItemRangesFromString(t))
    }
    function pi(e, t) {
        var i = Ft.computeLineItemPricebandValue(e.cpm, t);
        return void 0 === i
            ? void 0
            : bt(i, e.id, e.dealCode)
    }
    function hi(e, t) {
        var i = new zt(
            "string" == typeof e
                ? {
                    bidId: e,
                    document: t
                }
                : e
        );
        if (i.bidId) {
            var n = (window["criteo_pubtag_135"] || window.criteo_pubtag).standaloneBidder.bids;
            if (n.hasOwnProperty(i.bidId)) {
                var o = n[i.bidId];
                vi(
                    o,
                    void 0 === i.containerId
                        ? new N(i.document)
                        : !fi() && o.useSafeframe
                            ? new ei(i.document, i.containerId, o.impressionId)
                            : new B(i.document, i.containerId)
                ),
                delete n[o.id]
            } else 
                O.Error("Could not render bid with id: " + i.bidId)
        } else 
            O.Error("You must provide a bidId to the RenderAd call")
    }
    function vi(e, t) {
        var i = e.GenerateEvent(t);
        (window["criteo_pubtag_135"] || window.criteo_pubtag).push(i)
    }
    function fi() {
        var e;
        return void 0 !== (
            null === (e = window.googletag) || void 0 === e
                ? void 0
                : e.cmd
        )
    }
    function mi(e) {
        var t = (window["criteo_pubtag_135"] || window.criteo_pubtag).standaloneBidder.bids;
        if (null === t) 
            return [];
        var i = (window["criteo_pubtag_135"] || window.criteo_pubtag).standaloneBidder.lineItemRanges,
            n = [];
        for (var o in t) 
            if (t.hasOwnProperty(o)) {
                var r = t[o];
                e && e.impressionIds && -1 === e
                    .impressionIds
                    .indexOf(r.impressionId) || (
                        0 < i.length && (r.cpm_bucket = Ft.computeLineItemPricebandValue(r.cpm, i)),
                        n.push(r)
                    )
            }
        return n
    }
    function gi(e, t) {
        void 0 === t && (t = 1);
        var i = mi({impressionIds: [e]});
        return i
            .sort(function (e, t) {
                return t.cpm - e.cpm
            })
            .slice(0, Math.min(Math.max(t, 0), i.length))
    }
    function yi(e) {
        var t;
        if (void 0 === e.placements) 
            return O.Error("Missing 'placements' parameter"),
            !1;
        if (0 === e.placements.length) 
            return O.Error("'placements' parameter is empty"),
            !1;
        for (var i = 0, n = e.placements; i < n.length; i++) {
            var o = n[i];
            if (bi(o.impId)) 
                return O.Error("Missing 'slotId' parameter in placements object"),
                !1;
            if (bi(o.video)) {
                if (bi(o.zoneId) && (bi(o.sizes) || bi(e.networkId))) 
                    return O.Error(
                        "Missing zone information: specify either a zoneId or a networkId and a zone si" +
                        "ze"
                    ),
                    !1
            } else {
                if (bi(o.zoneId) && bi(e.networkId)) 
                    return O.Error(
                        "Missing zone information: specify either a zoneId or a networkId (size is only" +
                        " recommended for video"
                    ),
                    !1;
                if (null != (
                    null === (t = o.video) || void 0 === t
                        ? void 0
                        : t.videoCallback
                ) && "function" != typeof o.video.videoCallback) 
                    return O.Error("'videoCallback' parameter is not a function in video object"),
                    !1
            }
            if (void 0 !== o.nativeCallback && "function" != typeof o.nativeCallback) 
                return O.Error(
                    "'nativeCallback' parameter is not a function in placements object"
                ),
                !1
        }
        return !0
    }
    function wi() {
        var e = {},
            t = (window["criteo_pubtag_135"] || window.criteo_pubtag).standaloneBidder.bids;
        for (var i in t) 
            if (t.hasOwnProperty(i)) {
                var n = t[i];
                if (e.hasOwnProperty(n.impressionId)) 
                    e[n.impressionId].cpm < n.cpm && (e[n.impressionId] = n);
                else 
                    e[n.impressionId] = n
            }
        return e
    }
    function bi(e) {
        return void 0 === e || e + "" == ""
    }
    function Ci(e) {
        (window["criteo_pubtag_135"] || window.criteo_pubtag).context.ceh = e
    }
    function Ii(e) {
        (window["criteo_pubtag_135"] || window.criteo_pubtag).context.ccpaOptout = e
    }
    function Ei(e) {}
    function _i(e) {}
    function Ai(e) {
        (window["criteo_pubtag_135"] || window.criteo_pubtag).context.slotsExt = e
    }
    function Si(e) {
        (window["criteo_pubtag_135"] || window.criteo_pubtag).context.userIds = e
    }
    function Ti(e, t, i) {
        if (!i && !t) 
            return O.Error("A params object or a gamVastUrl is required"),
            null;
        if (t) {
            var n = St(t, {
                noDecodeWholeURL: !0
            });
            if (!i) 
                return o = n,
                r = l(e),
                o.search.cust_params = o.search.cust_params
                    ? o.search.cust_params + "%26" + r
                    : r,
                Pt(o)
        }
        var o,
            r,
            a,
            s,
            d,
            c = {};
        return s = e,
        (a = c).correlator = Date
            .now()
            .toFixed(),
        a.sz = s.width + "x" + s.height,
        (d = c = a).env = "vp",
        d.gdfp_req = "1",
        d.output = "vast",
        d.unviewed_position_start = "1",
        (c = function (e, t) {
            for (var i in t) 
                e[i] = t[i];
            return e
        }(c = d, i)).cust_params = l(e),
        Pt(
            {protocol: "https", host: "securepubads.g.doubleclick.net", pathname: "/gampad/ads", search: c}
        );
        function l(e) {
            var t = {
                crt_displayurl: encodeURIComponent(encodeURIComponent(e.vastUrl)),
                crt_pb: e
                    .cpm
                    .toFixed(2),
                crt_format: "video"
            };
            return encodeURIComponent(Tt(t))
        }
    }
    var Pi = (
        Ri.Standalone = function (o, r, a) {
            ri({
                integrationmode: "amp",
                placements: [
                    {
                        slotid: o.slot,
                        zoneid: o.zone,
                        sizes: [o.width + "x" + o.height]
                    }
                ]
            }, function (e) {
                if ("DFP" === o.adserver) {
                    Ri.listenForCreativeRequests(e);
                    for (var t = 0, i = e; t < i.length; t++) {
                        var n = ui(i[t], o.lineItemRanges);
                        void 0 !== n && a(n)
                    }
                    0 === e.length && a({})
                }
                r(null)
            }, o.timeout)
        },
        Ri.listenForCreativeRequests = function (s) {
            window.addEventListener("message", function (e) {
                var t = e.data instanceof Object
                    ? e.data
                    : G(e.data);
                if (t && t.bidId && e.source) 
                    for (var i = 0, n = s; i < n.length; i++) {
                        var o = n[i];
                        if (o.id === t.bidId) {
                            var r = e.source,
                                a = o.GenerateMessage();
                            a.message = "Criteo creative",
                            r.postMessage(JSON.stringify(a), "*")
                        }
                    }
                }, !1)
        },
        Ri
    );
    function Ri() {}
    function ki() {
        return (window["criteo_pubtag_135"] || window.criteo_pubtag)
            .context
            .getIdfs()
    }
    function xi(e) {
        (window["criteo_pubtag_135"] || window.criteo_pubtag)
            .context
            .setIdfs(e)
    }
    function Oi(e) {
        (window["criteo_pubtag_135"] || window.criteo_pubtag).context.ceh = e
    }
    var Mi = function (e) {
            this.coppa = e
        },
        Di = 280,
        Ui = 5e3,
        Bi,
        Fi;
    Fi = Bi = Bi || {},
    Fi.Native = "native",
    Fi.Banner = "banner",
    Fi.Video = "video";
    var Ni = (
        Li.prototype.hasValidNativeParams = function (e) {
            return !(
                e.nativeParams && (e.nativeParams.image && (!0 !== e.nativeParams.image.sendId || !0 === e.nativeParams.image.sendTargetingKeys) || e.nativeParams.icon && (!0 !== e.nativeParams.icon.sendId || !0 === e.nativeParams.icon.sendTargetingKeys) || e.nativeParams.clickUrl && (!0 !== e.nativeParams.clickUrl.sendId || !0 === e.nativeParams.clickUrl.sendTargetingKeys) || e.nativeParams.displayUrl && (!0 !== e.nativeParams.displayUrl.sendId || !0 === e.nativeParams.displayUrl.sendTargetingKeys) || e.nativeParams.privacyLink && (!0 !== e.nativeParams.privacyLink.sendId || !0 === e.nativeParams.privacyLink.sendTargetingKeys) || e.nativeParams.privacyIcon && (!0 !== e.nativeParams.privacyIcon.sendId || !0 === e.nativeParams.privacyIcon.sendTargetingKeys))
            )
        },
        Li.prototype.buildCdbUrl = function () {
            return this.url
        },
        Li.prototype.buildCdbRequest = function () {
            if (this.requestBuilder.isValid()) {
                var e = Math.min((this.timeout || Ui) + 1e3, Ui);
                return this
                    .adBlockFlagManager
                    .setAdBlockFlagTimer(e),
                this
                    .timer
                    .sendRequest(this.url),
                this
                    .requestBuilder
                    .getRequest()
            }
            O.Debug("Request ignored because it doesnt contain any slot")
        },
        Li.GetAllAdapters = function () {
            return (window["Criteo_135"] || window.Criteo).prebid_adapters
        },
        Li.GetAdapter = function (e) {
            var t = "string" == typeof e
                    ? e
                    : e
                        .bidRequests[0]
                        .auctionId,
                i = Li.GetAllAdapters();
            if (i && t in i) 
                return i[t]
        },
        Li.isPrebid3OrAbove = function (e) {
            if (null == e) 
                return !1;
            var t = parseInt(e, 10);
            return t != Number.NaN && 3 <= t
        },
        Li.createCriteoNativeAdWithCallback = function (e, t, i) {
            var n = F(e);
            return window.criteo_prebid_native_slots = window.criteo_prebid_native_slots || {},
            window.criteo_prebid_native_slots[n] = {
                callback: i,
                payload: t
            },
            '<script type="text/javascript">\n            var win = window;\n            fo' +
                    'r (var i = 0; i < 10; ++i) {\n                win = win.parent;\n             ' +
                    '   if (win.criteo_prebid_native_slots) {\n                    var responseSlot' +
                    ' = win.criteo_prebid_native_slots["' + n + '"];\n                    responseS' +
                    'lot.callback(responseSlot.payload);\n                    break;\n             ' +
                    '   }\n            }\n        <\/script>'
        },
        Li.createPrebidNativeAd = function (e) {
            return {
                sendTargetingKeys: !1,
                title: e
                    .products[0]
                    .title,
                body: e
                    .products[0]
                    .description,
                sponsoredBy: e.advertiser.description,
                icon: e.advertiser.logo,
                image: e
                    .products[0]
                    .image,
                clickUrl: e
                    .products[0]
                    .click_url,
                privacyLink: e.privacy.optout_click_url,
                privacyIcon: e.privacy.optout_image_url,
                cta: e
                    .products[0]
                    .call_to_action,
                price: e
                    .products[0]
                    .price,
                impressionTrackers: e
                    .impression_pixels
                    .map(function (e) {
                        return e.url
                    })
            }
        },
        Li.prototype.getBidRequestForSlot = function (e) {
            for (var t = 0, i = this.bidRequests; t < i.length; t++) {
                var n = i[t];
                if (n.adUnitCode === e.impid && (!n.params.zoneId || parseInt(n.params.zoneId, 10) === e.zoneid)) 
                    return n
            }
        },
        Li.prototype.getSlotForAdUnitCode = function (e) {
            for (var t = 0, i = this.slots; t < i.length; t++) {
                var n = i[t];
                if (n && n.impId === e) 
                    return n
            }
        },
        Li.getVideoInfoFromBidRequest = function (e) {
            var t,
                i,
                n,
                o,
                r;
            if (Li.hasVideoMediaType(e)) 
                return new Kt(
                    e.mediaTypes.video.playerSize,
                    e.mediaTypes.video.mimes,
                    e.mediaTypes.video.protocols,
                    e.mediaTypes.video.maxduration,
                    e.mediaTypes.video.api,
                    e.mediaTypes.video.skip || (
                        null === (t = e.params.video) || void 0 === t
                            ? void 0
                            : t.skip
                    ) || 0,
                    e.mediaTypes.video.placement || (
                        null === (i = e.params.video) || void 0 === i
                            ? void 0
                            : i.placement
                    ),
                    e.mediaTypes.video.playbackmethod || (
                        null === (n = e.params.video) || void 0 === n
                            ? void 0
                            : n.playbackmethod
                    ),
                    e.mediaTypes.video.minduration || (
                        null === (o = e.params.video) || void 0 === o
                            ? void 0
                            : o.minduration
                    ),
                    e.mediaTypes.video.startdelay || (
                        null === (r = e.params.video) || void 0 === r
                            ? void 0
                            : r.startdelay
                    ) || 0
                )
        },
        Li.hasVideoMediaType = function (e) {
            var t,
                i,
                n;
            return 0 < (
                null === (
                    n = null === (
                        i = null === (
                            t = null == e
                                ? void 0
                                : e.mediaTypes
                        ) || void 0 === t
                            ? void 0
                            : t.video
                    ) || void 0 === i
                        ? void 0
                        : i.playerSize
                ) || void 0 === n
                    ? void 0
                    : n.length
            )
        },
        Li.prototype.interpretResponse = function (e, t) {
            var i,
                n,
                o,
                r,
                a,
                s,
                d,
                c = window["criteo_pubtag_135"] || window.criteo_pubtag;
            this
                .timer
                .requestReceived(),
            this
                .adBlockFlagManager
                .disableAdBlockFlagTimer();
            var l = de(e),
                u = {};
            if (void 0 !== l.slots) 
                for (var p = 0, h = l.slots; p < h.length; p++) 
                    u[(g = h[p]).imp_id] = g;
        var v = [];
            if (e.slots && Array.isArray(e.slots)) 
                for (var f = 0, m = e.slots; f < m.length; f++) {
                    var g = m[f],
                        y = this.getBidRequestForSlot(g);
                    if (y) 
                        if (!0 === c.context.isAdBlocked) {
                            if (void 0 !== (E = pt(
                                g.slotid,
                                g.impid,
                                g.cpm,
                                g.width,
                                g.height,
                                g.zoneid,
                                y.params.nativeCallback,
                                g.native,
                                g.displayurl,
                                g.creative,
                                g.deal,
                                null === (i = u[g.slotid]) || void 0 === i
                                    ? void 0
                                    : i.enable_safeframe
                            )) && ht.tryInsertPlaceholder(y.adUnitCode, !0, c.context.cloneByImpressionId)) {
                                var w = ht.insertAdIFrame(y.adUnitCode, c.context.cloneByImpressionId);
                                if (null != w) {
                                    var b = new N(w.contentDocument);
                                    E
                                        .GenerateEvent(b)
                                        .eval(window["criteo_pubtag_135"])
                                }
                            }
                        }
                    else {
                        var C = y.bidId,
                            I = g.ttl || u[g.slotid] && u[g.slotid].ttl || 60,
                            E = {
                                requestId: C,
                                cpm: g.cpm,
                                currency: g.currency,
                                netRevenue: !0,
                                ttl: I,
                                creativeId: g.creativecode || C,
                                width: g.width,
                                height: g.height,
                                dealId: g.deal
                            };
                        if ((
                            null === (
                                o = null === (n = e.ext) || void 0 === n
                                    ? void 0
                                    : n.paf
                            ) || void 0 === o
                                ? void 0
                                : o.transmission
                        ) && (
                            null === (
                                a = null === (r = g.ext) || void 0 === r
                                    ? void 0
                                    : r.paf
                            ) || void 0 === a
                                ? void 0
                                : a.content_id
                        )) {
                            var _ = {
                                content_id: g.ext.paf.content_id,
                                transmission: e.ext.paf.transmission
                            };
                            E.meta = S(S({}, E.meta), {paf: _})
                        }
                        g.adomain && (E.meta = S(S({}, E.meta), {advertiserDomains: g.adomain})),
                        g.native
                            ? y.params.nativeCallback
                                ? E.ad = Li.createCriteoNativeAdWithCallback(
                                    C,
                                    g.native,
                                    y.params.nativeCallback
                                )
                                : (E.native = Li.createPrebidNativeAd(g.native), E.mediaType = Bi.Native)
                            : g.video
                                ? (E.vastUrl = g.displayurl, E.mediaType = Bi.Video, "outstream" === (
                                    null === (
                                        d = null === (s = y.mediaTypes) || void 0 === s
                                            ? void 0
                                            : s.video
                                    ) || void 0 === d
                                        ? void 0
                                        : d.context
                                ) && (E.renderer = this.createOutstreamVideoRenderer(g)))
                                : E.ad = g.creative,
                        v.push(E)
                    } else 
                        O.Error("Unable to bid request for slot " + g)
                }
            return this
                .timer
                .finish(),
            this
                .metricsManager
                .sendEvents(this.metricBuilder, this.clientRequestId, !0),
            !0 === e.user_sync && Le.execUserSync(
                c.context.remoteLogging,
                this.gdprConsent,
                this.ccpaIabConsent,
                e
            ),
            v
        },
        Li.prototype.handleBidWon = function () {},
        Li.prototype.handleBidTimeout = function () {
            this
                .timer
                .requestReceived(!0),
            this
                .timer
                .finish(),
            this
                .metricsManager
                .sendEvents(this.metricBuilder, this.clientRequestId, !0)
        },
        Li.prototype.handleSetTargeting = function () {},
        Li.prototype.getBannerSizes = function (
            e,
            t
        ) {
            var i,
                n;
            return (
                null === (
                    n = null === (i = e.mediaTypes) || void 0 === i
                        ? void 0
                        : i.banner
                ) || void 0 === n
                    ? void 0
                    : n.sizes
            ) || (
                t
                    ? e.sizes
                    : []
            ) || []
        },
        Li.prototype.getNativeSizes = function (e) {
            var t,
                i,
                n;
            return (
                null === (
                    n = null === (
                        i = null === (t = e.mediaTypes) || void 0 === t
                            ? void 0
                            : t.native
                    ) || void 0 === i
                        ? void 0
                        : i.image
                ) || void 0 === n
                    ? void 0
                    : n.sizes
            ) || []
        },
        Li.prototype.getSizes = function (e, t) {
            var i = this
                    .getBannerSizes(e, !t)
                    .map(function (e) {
                        return new Vt(e[0], e[1])
                    }),
                n = this
                    .getNativeSizes(e)
                    .map(function (e) {
                        return new Vt(e[0], e[1])
                    });
            return i
                .concat(n)
                .filter(function (e, t, i) {
                    return i.indexOf(e) === t
                })
        },
        Li.prototype.createOutstreamVideoRenderer = function (i) {
            if (void 0 !== i.video_callback) 
                return {
                    url: "#",
                    render: function (e, t) {
                        dt(i.video_callback, [
                            {
                                slotid: i.impid,
                                vastUrl: i.displayurl,
                                vastXml: i.creative,
                                documentContext: t
                            }
                        ])
                    },
                    config: {
                        documentResolver: function (e, t, i) {
                            return null != i
                                ? i
                                : t
                        }
                    }
                }
            },
        Li.prototype.parseSizes = function (e) {
            try {
                if (e) 
                    return 2 === e.length && "number" == typeof e[0] && "number" == typeof e[1]
                        ? [new Vt(e[0], e[1])]
                        : (e || []).map(function (e) {
                            return new Vt(e[0], e[1])
                        })
                } catch (e) {
                O.Debug("Could not parse size" + e)
            }
            return []
        },
        Li.prototype.pickAvailableGetFloorFunc = function (t) {
            if (t.getFloor) 
                return t.getFloor;
            if (t.params.bidFloor && t.params.bidFloorCur) 
                try {
                    var i = parseFloat(t.params.bidFloor);
                    return function (e) {
                        return {currency: t.params.bidFloorCur, floor: i}
                    }
                } catch (e) {}
            },
        Li.prototype.enrichSlotWithFloors = function (e, t) {
            var i,
                n,
                o,
                r,
                a,
                s,
                d;
            try {
                var c = {},
                    l = this.pickAvailableGetFloorFunc(t);
                void 0 !== l && ((
                    null === (i = t.mediaTypes) || void 0 === i
                        ? void 0
                        : i.banner
                ) && (c.banner = {}, this.parseSizes(
                    null === (
                        o = null === (n = t.mediaTypes) || void 0 === n
                            ? void 0
                            : n.banner
                    ) || void 0 === o
                        ? void 0
                        : o.sizes
                ).forEach(function (e) {
                    void 0 !== l && (c.banner[e.toString()] = l.call(t, {
                        size: [
                            e.width, e.height
                        ],
                        mediaType: Bi.Banner
                    }))
                })), (
                    null === (r = t.mediaTypes) || void 0 === r
                        ? void 0
                        : r.video
                ) && (c.video = {}, this.parseSizes(
                    null === (
                        s = null === (a = t.mediaTypes) || void 0 === a
                            ? void 0
                            : a.video
                    ) || void 0 === s
                        ? void 0
                        : s.playerSize
                ).forEach(function (e) {
                    void 0 !== l && (c.video[e.toString()] = l.call(t, {
                        size: [
                            e.width, e.height
                        ],
                        mediaType: Bi.Video
                    }))
                })), (
                    null === (d = t.mediaTypes) || void 0 === d
                        ? void 0
                        : d.native
                ) && (c.native = {}, c.native["*"] = l.call(t, {
                    size: "*",
                    mediaType: Bi.Native
                })), Object.keys(c).length && (e = S(S({}, e), {floors: c})))
            } catch (e) {
                O.Debug("Could not parse floors from Prebid: " + e)
            }
            return e
        },
        Li
    );
    function Li(e, t, i, n, o) {
        var r,
            a,
            s,
            d,
            c = window["criteo_pubtag_135"] || window.criteo_pubtag;
        this.clientRequestId = ze(),
        this.gdprConsent = {},
        n.gdprConsent && (
            void 0 !== n.gdprConsent.consentString && (this.gdprConsent.consentData = n.gdprConsent.consentString),
            void 0 !== n.gdprConsent.gdprApplies && (this.gdprConsent.gdprApplies = !!n.gdprConsent.gdprApplies),
            this.gdprConsent.version = n.gdprConsent.apiVersion
        ),
        this.ccpaIabConsent = {
            uspString: n.uspConsent
        },
        this.regs = new Mi(n.coppa);
        var l = new Re(void 0, this.gdprConsent);
        this.timeout = q(n.timeout),
        this.metricsManager = new ne(l),
        this.metricBuilder = new V(this.metricsManager),
        this.timer = new pe(this.metricBuilder, n.start, this.timeout);
        var u,
            p,
            h,
            v = new Ut;
        this.adBlockFlagManager = A.create(l),
        this
            .adBlockFlagManager
            .adBlockFlagEnabled() && (e = Di, c.context.isAdBlocked = !0),
        this.auctionId = n.auctionId,
        this.bidRequests = i,
        this.slots = [];
        for (var f = !0, m = 0, g = i; m < g.length; m++) {
            var y = void 0;
            (C = g[m]).fpd && C.fpd.context && (y = C.fpd.context),
            (
                null === (r = C.ortb2Imp) || void 0 === r
                    ? void 0
                    : r.ext
            ) && (
                (
                    null == y
                        ? void 0
                        : y.data
                ) && C.ortb2Imp.ext.data && (y.data = S(S({}, y.data), C.ortb2Imp.ext.data)),
                y = S(S({}, C.ortb2Imp.ext), y)
            ),
            C.params.ext && (
                (
                    null == y
                        ? void 0
                        : y.data
                ) && C.params.ext.data && (y.data = S(S({}, y.data), C.params.ext.data)),
                y = S(S({}, C.params.ext), y)
            ),
            f = this.hasValidNativeParams(C);
            var w = Li.isPrebid3OrAbove(o);
            y = this.enrichSlotWithFloors(y, C),
            this
                .slots
                .push(new qt(
                    C.adUnitCode,
                    C.params.zoneId,
                    void 0 !== C.params.nativeCallback || void 0 !== (
                        null === (
                            a = null == C
                                ? void 0
                                : C.mediaTypes
                        ) || void 0 === a
                            ? void 0
                            : a.native
                    ),
                    C.params.nativeCallback,
                    C.transactionId,
                    this.getSizes(C, w),
                    C.params.publisherSubId,
                    C.mediaTypes,
                    Li.getVideoInfoFromBidRequest(C),
                    y
                )),
            u = C.params.networkId || u,
            p = C.schain || p,
            Oi(n.ceh),
            C.params.integrationMode && (h = Q(C.params.integrationMode))
        }
        f || O.Warning(
            "All native assets containing URL should be sent as placeholders with sendId(ic" +
            "on, image, clickUrl, privacyLink, privacyIcon)"
        );
        var b,
            C,
            I = new $(!1);
        0 < i.length && (C = i[0]).userIdAsEids && 0 < C.userIdAsEids.length && (
            b = C.userIdAsEids
        );
        (
            null === (s = n.ortb2) || void 0 === s
                ? void 0
                : s.user
        ) && c
            .context
            .setUser(n.ortb2.user),
        (
            null === (d = n.ortb2) || void 0 === d
                ? void 0
                : d.site
        ) && c
            .context
            .setSite(n.ortb2.site),
        this.requestBuilder = new ae(this.slots, c.context, I, e, h, u, t, {
            ccpaIabConsent: this.ccpaIabConsent,
            gdprConsent: this.gdprConsent
        }, o, v, this.timeout, this.clientRequestId, b, n.start, p, this.regs),
        this.url = this
            .requestBuilder
            .getUrl(),
        (window["Criteo_135"] || window.Criteo).prebid_adapters = (
            window["Criteo_135"] || window.Criteo
        ).prebid_adapters || {},
        (window["Criteo_135"] || window.Criteo).prebid_adapters[this.auctionId] = this
    }
    var Wi = (
            zi = z,
            r(qi, zi),
            qi.prototype.canEval = function () {
                return void 0 === this.conditionRequirement || this
                    .conditionRequirement
                    .apply(this)
            },
            qi.prototype.eval = function (e) {
                this
                    .condition
                    .apply(this)
                        ? this
                            .eventIfTrue
                            .eval(e)
                        : this
                            .eventIfFalse
                            .eval(e)
            },
            qi.NAME = "conditionalEvent",
            qi
        ),
        zi,
        Hi,
        Gi;
    function qi(e, t, i, n) {
        var o = zi.call(this, qi.NAME) || this;
        return o.condition = e,
        o.eventIfTrue = t,
        o.eventIfFalse = i,
        o.conditionRequirement = n,
        o
    }
    Gi = Hi = Hi || {},
    Gi[Gi.Classic = 0] = "Classic",
    Gi[Gi.StickyFooter = 1] = "StickyFooter",
    Gi[Gi.ScrollingBanner = 2] = "ScrollingBanner";
    var Vi = (
            Ji.prototype.CreateAdvancedAdFormatContainer = function (e) {
                return this.adFormat === Hi.StickyFooter
                    ? this.CreateStickyFooterContainer(e)
                    : this.adFormat === Hi.ScrollingBanner
                        ? this.CreateScrollingBannerContainer(e)
                        : void 0
            },
            Ji.prototype.IsUserOptout = function () {
                return this.adFormat === Hi.StickyFooter && "true" === this
                    .cookieHelper
                    .getCookie("cto_sticky_closed")
            },
            Ji.prototype.CreateStickyFooterContainer = function (e) {
                var t = this,
                    i = document.createElement("div");
                i.style.position = "fixed",
                i.style.zIndex = "2147483646",
                i.style.bottom = "0",
                i.style.left = "0",
                i.style.padding = "0",
                i.style.borderColor = "rgb(196, 196, 196)",
                i.style.width = "100%",
                i.style.backgroundColor = "rgba(245, 245, 245, 0.54902)",
                i.style.borderStyle = "solid",
                i.style.borderWidth = "1px";
                var n = document.createElement("a");
                i.appendChild(n),
                n.style.backgroundColor = "rgb(221, 221, 221)",
                n.style.backgroundImage = "url('//static.criteo.net/images/criteo/publishertag/close.png')",
                n.style.backgroundRepeat = "no-repeat",
                n.style.backgroundPosition = "center",
                n.style.display = "block",
                n.style.position = "absolute",
                n.style.left = "0",
                n.style.top = "-24px",
                n.style.width = "23px",
                n.style.height = "24px",
                n.style.borderBottomColor = "#6d6c71",
                n.style.cursor = "pointer",
                n.onclick = function () {
                    i.style.display = "none",
                    t
                        .cookieHelper
                        .setCookie("cto_sticky_closed", "true", 24)
                };
                var o = document.createElement("div");
                if (
                    i.appendChild(o),
                    o.id = "cto_sticky",
                    o.style.margin = "0 auto",
                    o.style.display = "table",
                    void 0 === e || "" === e
                ) 
                    document
                        .body
                        .appendChild(i);
                else {
                    var r = document.getElementById(e);
                    r
                        ? r.appendChild(i)
                        : O.Error(
                            'Target element "' + e + '" not found in the document'
                        )
                }
                return o.id
            },
            Ji.prototype.CreateScrollingBannerContainer = function (e) {
                var t,
                    i = this;
                if (void 0 === e || "" === e) 
                    (t = document.createElement("div")).id = "cto_scrolling",
                    document
                        .body
                        .appendChild(t);
                else {
                    var n = document.getElementById(e);
                    if (!n) 
                        return O.Error(
                            'Target element "' + e + '" not found in the document'
                        ),
                        e;
                    t = n
                }
                var o = t.offsetTop;
                return window.addEventListener
                    ? window.addEventListener("scroll", function () {
                        i.SetScrollingContainerPosition(t, o)
                    }, !1)
                    : window.attachEvent("onscroll", function () {
                        i.SetScrollingContainerPosition(t, o)
                    }),
                this.SetScrollingContainerPosition(t, o),
                t.id
            },
            Ji.prototype.SetScrollingContainerPosition = function (e, t) {
                t - 10 <= (
                    window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
                )
                    ? (e.style.position = "fixed", e.style.top = "10px")
                    : (e.style.position = "static", e.style.top = "auto")
            },
            Ji
        ),
        ji,
        Ki;
    function Ji(e, t) {
        this.adFormat = e,
        this.cookieHelper = t
    }
    Ki = ji = ji || {},
    Ki[Ki.InFriendlyIframe = 1] = "InFriendlyIframe",
    Ki[Ki.InUnfriendlyIframe = 2] = "InUnfriendlyIframe",
    Ki[Ki.DirectIntegration = 3] = "DirectIntegration";
    var Yi = (Xi.tryWrite = function (e) {
        for (var t = [], i = 1; i < arguments.length; i++) 
            t[i - 1] = arguments[i];
        return "loading" === e.readyState && (e.write.apply(e, t), !0)
    }, Xi);
    function Xi() {}
    var Qi = (Zi.GetAtfRatio = function (e, t) {
        var i = document.getElementById(t);
        if (e.displayContext === ji.DirectIntegration) {
            if (null !== i) 
                return Zi.GetRatioAboveFold(i);
            if (Yi.tryWrite(
                document,
                "<div id='compute_visibility_helper' width='0px' height='0px'></div>"
            )) {
                var n = document.getElementById("compute_visibility_helper");
                if (void 0 !== n) {
                    var o = Zi.GetRatioAboveFold(n);
                    return n
                        .parentElement
                        .removeChild(n),
                    o
                }
            }
        }
        if (e.displayContext === ji.InFriendlyIframe) 
            return Zi.GetRatioAboveFold(frameElement)
    }, Zi.GetRatioAboveFold = function (e) {
        var t = (new Ut).getViewport(),
            i = t.height,
            n = e.getBoundingClientRect(),
            o = t.scrollTop;
        return i >= n.bottom + o
            ? 1
            : i <= n.top + o
                ? 0
                : (i - n.top - o) / e.offsetHeight
    }, Zi);
    function Zi() {}
    var $i = (
            en = z,
            r(on, en),
            on.prototype.eval = function (e) {
                this.displayParameters.atfRatio = Qi.GetAtfRatio(
                    e.context,
                    this.displayParameters.containerid
                )
            },
            on.prototype.buildCasUrl = function (t, i, n, o, r) {
                var a = this,
                    e = this
                        .tcfCompatibleConsentProvider
                        .readyToRetrieve(),
                    s = this
                        .ccpaConsentProvider
                        .readyToRetrieve();
                if (e || s) {
                    var d,
                        c,
                        l = [];
                    e && l.push(Ce),
                    s && l.push(me),
                    e && this
                        .tcfCompatibleConsentProvider
                        .retrieveConsentForPassback(function (e) {
                            l.splice(l.indexOf("GDPR"), 1),
                            0 === l.length
                                ? t(a.urlBuilder.buildUrl(a.displayParameters, i, n, o, r, e, c))
                                : d = e
                        }),
                    s && this
                        .ccpaConsentProvider
                        .retrieveConsent(function (e) {
                            l.splice(l.indexOf("CCPA"), 1),
                            0 === l.length
                                ? t(a.urlBuilder.buildUrl(a.displayParameters, i, n, o, r, d, e))
                                : c = e
                        })
                } else 
                    t(this.urlBuilder.buildUrl(this.displayParameters, i, n, o, r))
            },
            on
        ),
        en,
        tn,
        nn;
    function on(e, t, i, n, o) {
        var r = en.call(this, e) || this;
        r.displayParameters = i,
        r.urlBuilder = t;
        var a = Te();
        return r.tcfCompatibleConsentProvider = null != n
            ? n
            : new ye(new Ce(window, a, O.Warning), new Ae(window, a, O.Warning), O.Warning),
        r.ccpaConsentProvider = null != o
            ? o
            : new me(window, a, O.Warning),
        r
    }
    nn = tn = tn || {},
    nn[nn.AFR = 0] = "AFR",
    nn[nn.AJS = 1] = "AJS",
    nn[nn.NATIVEAPI = 2] = "NATIVEAPI";
    var rn = (
            an = $i,
            r(sn, an),
            sn.prototype.eval = function (t) {
                var i = this;
                an
                    .prototype
                    .eval
                    .call(this, t);
                var n = this.displayParameters.containerid,
                    o = this.displayParameters.callbackSuccess,
                    r = this.displayParameters.callbackError;
                this.buildCasUrl(function (e) {
                    if (t.context.isAdBlocked) {
                        if (!i.respectsEyeoDeal) 
                            return;
                        i.loadIframe(e, n, o, r)
                    } else 
                        i.loadIframe(e, n, o, r)
                }, t.context, tn.AFR)
            },
            sn.prototype.loadIframe = function (e, t, i, n) {
                var o = document.createElement("iframe");
                o.src = e,
                o.id = t + "_cto_iframe",
                o.frameBorder = "0",
                o.setAttribute("hspace", "0"),
                o.setAttribute("vspace", "0"),
                Me.isChrome() && o.setAttribute("allow", "attribution-reporting"),
                o.marginWidth = "0px",
                o.marginHeight = "0px",
                o.width = "100%",
                o.height = "100%",
                o.scrolling = "no",
                i && (o.onload = i),
                n && (o.onerror = n);
                var r = document.getElementById(t);
                r
                    ? r.appendChild(o)
                    : O.Error(
                        'Target element "' + t + '" not found in the document'
                    )
            },
            sn.NAME = "displayAfr",
            sn
        ),
        an;
    function sn(e, t, i) {
        var n = an.call(this, sn.NAME, e, t) || this;
        return n.respectsEyeoDeal = i,
        n
    }
    var dn = function (h) {
            function v(e, t) {
                return h.call(this, v.NAME, e, t) || this
            }
            return r(v, h),
            v.prototype.eval = function (t) {
                var i = this;
                h
                    .prototype
                    .eval
                    .call(this, t);
                var n = this.displayParameters.containerid,
                    o = this.displayParameters.width,
                    r = this.displayParameters.height,
                    e = this.displayParameters.layout,
                    a = this.displayParameters.callbackSuccess,
                    s = this.displayParameters.callbackError,
                    d = this.displayParameters.passbackCode,
                    c = this.displayParameters.nativeCallback,
                    l = this.displayParameters.nativeCallbackName;
                if (void 0 !== c && void 0 !== l) 
                    this.buildCasUrl(function (e) {
                        i.loadJsonpNativeApi(e, l, c, a, d)
                    }, t.context, tn.NATIVEAPI);
                else if ("" === n || void 0 === n) 
                    O.Error("No containerid provided");
                else if (void 0 !== e) {
                    var u = v.CHAPI_NAME + "=" + encodeURIComponent(JSON.stringify(e)),
                        p = function () {
                            var e = i.getContainerSize(n, o, r);
                            i.buildCasUrl(function (e) {
                                i.loadScriptAsync(e, u, a, s, d)
                            }, t.context, void 0, e.width, e.height)
                        };
                    void 0 !== o && void 0 !== r
                        ? p()
                        : window.addEventListener
                            ? window.addEventListener("load", p, !1)
                            : window.attachEvent("onload", p)
                } else 
                    this.buildCasUrl(function (e) {
                        i.loadScriptAsync(e, void 0, a, s, d)
                    }, t.context)
            },
            v.prototype.loadJsonpNativeApi = function (e, t, i, n, o) {
                var r = document.createElement("script");
                r.type = "text/javascript",
                r.src = e,
                window[t] = function (e) {
                    void 0 !== e && 0 === e.response_status
                        ? (i(e), void 0 !== n && n(e))
                        : void 0 !== o && o(),
                    window[t] = void 0,
                    document
                        .head
                        .removeChild(r)
                },
                document
                    .head
                    .appendChild(r)
            },
            v.prototype.loadScriptAsync = function (e, t, i, n, o) {
                var r = new T(e, t);
                r.send(function (e) {
                    var pb = o || function () {};
                    eval(e),
                    void 0 !== i && i(e)
                }, function (e, t) {
                    void 0 !== o && o(),
                    void 0 !== n && n(e, t)
                }, o)
            },
            v.prototype.getContainerSize = function (e, t, i) {
                var n = document.getElementById(e),
                    o = Mt.inIframe(),
                    r = t || (
                        o
                            ? document.body.offsetWidth
                            : n
                                ? n.offsetWidth
                                : 0
                    ),
                    a = i || (
                        o
                            ? document.body.offsetHeight
                            : n
                                ? n.offsetHeight
                                : 0
                    );
                return (0 === r || 0 === a || r < 80 || a < 40) && (r = a = void 0), {
                    width: r,
                    height: a
                }
            },
            v.NAME = "displayEventAsync",
            v.CHAPI_NAME = "publisherCreativeConfiguration",
            v
        }($i),
        cn = (
            ln = $i,
            r(un, ln),
            un.prototype.eval = function (e) {
                var t = this;
                ln
                    .prototype
                    .eval
                    .call(this, e),
                this.buildCasUrl(function (e) {
                    t.loadScriptSync(e)
                }, e.context)
            },
            un.prototype.loadScriptSync = function (e) {
                document.write(
                    "<script type='text/javascript' src='" + e + "'><\/script>"
                )
            },
            un.NAME = "displaySync",
            un
        ),
        ln;
    function un(e, t, i, n) {
        return ln.call(this, un.NAME, e, t, i, n) || this
    }
    var pn = (hn = Lt, r(vn, hn), vn.prototype.parseAdFormat = function (e) {
            switch (e.toLowerCase()) {
                case "stickyfooter":
                    return Hi.StickyFooter;
                case "scrollingbanner":
                    return Hi.ScrollingBanner;
                default:
                    return Hi.Classic
            }
        }, vn),
        hn;
    function vn(e) {
        var t = hn.call(this) || this;
        return t.zoneid = void 0,
        t.async = void 0,
        t.containerid = void 0,
        t.width = void 0,
        t.height = void 0,
        t.callbackSuccess = void 0,
        t.callbackError = void 0,
        t.callIfNotAdblocked = void 0,
        t.passbackCode = void 0,
        t.publisherUrl = void 0,
        t.overridenWpdt0 = void 0,
        t.overridenCt0 = void 0,
        t.layout = void 0,
        t.atfRatio = void 0,
        t.adFormat = Hi.Classic,
        t.nativeCallback = void 0,
        t.nativeCallbackName = void 0,
        t.overrideZoneFloor = !0,
        t.collapseContainerIfNotAdblocked = !0,
        t.extraData = {},
        t.addParameter("zoneId", function (e) {
            t.zoneid = e
        }),
        t.addParameter("async", function (e) {
            t.async = !0 === e
        }),
        t.addParameter("containerId", function (e) {
            t.containerid = e
        }),
        t.addParameter("width", function (e) {
            t.width = e
        }),
        t.addParameter("height", function (e) {
            t.height = e
        }),
        t.addParameter("callbackSuccess", function (e) {
            t.callbackSuccess = e
        }),
        t.addParameter("callbackError", function (e) {
            t.callbackError = e
        }),
        t.addParameter("callIfNotAdblocked", function (e) {
            t.callIfNotAdblocked = e
        }),
        t.addParameter("passbackCode", function (e) {
            t.passbackCode = e
        }),
        t.addParameter("layout", function (e) {
            t.layout = e
        }),
        t.addParameter("publisherCreativeConfiguration", function (e) {
            t.layout = e
        }),
        t.addParameter("extraData", function (e) {
            t.extraData = e
        }),
        t.addParameter("publisherUrl", function (e) {
            t.publisherUrl = e
        }),
        t.addParameter("wpdt0", function (e) {
            t.overridenWpdt0 = e
        }),
        t.addParameter("ct0", function (e) {
            t.overridenCt0 = e
        }),
        t.addParameter("overrideZoneFloor", function (e) {
            t.overrideZoneFloor = e
        }),
        t.addParameter("collapseContainerIfNotAdblocked", function (e) {
            t.collapseContainerIfNotAdblocked = e
        }),
        t.addParameter("adFormat", function (e) {
            t.adFormat = t.parseAdFormat(e)
        }),
        t.addParameter("nativeCallback", function (e) {
            t.nativeCallback = e,
            t.nativeCallbackName = "criteo_cb_" + ze().replace(/-/g, "")
        }),
        hn
            .prototype
            .tryFillParameters
            .call(t, e),
        t
    }
    var fn = (
        mn.prototype.buildUrl = function (e, t, i, n, o, r, a) {
            var s;
            switch (i) {
                case tn.AFR:
                    s = mn.CAS_URL_AFR;
                    break;
                case tn.NATIVEAPI:
                    s = mn.CAS_URL_NATIVE_API;
                    break;
                default:
                    s = mn.CAS_URL_AJS
            }
            var d = s + "?ptv=" + Z;
            if (!0 === t.isAdBlocked) {
                var c = this.getAbpParameter(e, t);
                d += "&abp=" + String(c)
            }
            for (
                var l in i !== tn.AFR && (
                    d += void 0 !== e.containerid && "" !== e.containerid
                        ? "&containerid=" + encodeURIComponent(e.containerid)
                        : ""
                ),
                d += "&zoneid=" + String(e.zoneid),
                d += n
                    ? "&width=" + n
                    : "",
                d += o
                    ? "&height=" + o
                    : "",
                d += t.ctoIdOnPublisherDomain
                    ? "&idcpy=" + t.ctoIdOnPublisherDomain
                    : "",
                d += t.secureId
                    ? "&sid=" + t.secureId
                    : "",
                d += t.isOptOut
                    ? "&optout=1"
                    : "",
                d += t.bundle
                    ? "&bundle=" + t.bundle
                    : "",
                d += "&cb=" + String(K.generateCacheBuster()),
                d += "&nodis=" + (
                    t.dising
                        ? "0"
                        : "1"
                ),
                d += t.charset
                    ? "&charset=" + t.charset
                    : "",
                d += e.overridenCt0
                    ? "&ct0=" + encodeURIComponent(e.overridenCt0)
                    : t.ct0
                        ? "&ct0=" + encodeURIComponent(t.ct0)
                        : "",
                d += e.overridenWpdt0
                    ? "&wpdt0=" + encodeURIComponent(e.overridenWpdt0)
                    : t.wpdt0
                        ? "&wpdt0=" + encodeURIComponent(t.wpdt0)
                        : "",
                e.publisherUrl && (d += "&publisherurl=" + encodeURIComponent(e.publisherUrl)),
                d += t.getContextFlags(),
                e.extraData
            ) 
                void 0 !== e.extraData[l] && (
                    d += "&" + l + "=" + encodeURIComponent(e.extraData[l])
                );
            return d += e.passbackCode
                ? "&dlp=1"
                : "",
            e.integrationMode !== J.Unspecified && (d += "&im=" + e.integrationMode),
            d += "&dc=" + t.displayContext,
            void 0 !== e.atfRatio && (d += "&atfr=" + Math.round(100 * e.atfRatio) / 100),
            d += t.highestAccessibleUrl
                ? "&loc=" + encodeURIComponent(t.highestAccessibleUrl).substring(0, 1600)
                : "",
            r && (void 0 !== r.gdprApplies && (d += "&gdprApp=" + (
                r.gdprApplies
                    ? "1"
                    : "0"
            )), void 0 !== r.consentData && (
                d += r.consentData
                    ? "&gdprDta=" + r.consentData
                    : ""
            ), void 0 !== r.version && (
                d += r.version
                    ? "&gdprVer=" + r.version
                    : ""
            )),
            a && void 0 !== a.uspString && (d += "&uspIab=" + a.uspString),
            t.ccpaOptout && (d += "&uspOptout=" + t.ccpaOptout),
            void 0 !== e.nativeCallbackName && (d += "&callback=" + e.nativeCallbackName),
            d
        },
        mn.prototype.getAbpParameter = function (e, t) {
            return (
                t.isAdBlocked
                    ? 1
                    : 0
            ) | (
                e.overrideZoneFloor
                    ? 0
                    : 2
            )
        },
        mn.CAS_URL_AJS = "https://cas.criteo.com/delivery/ajs.php",
        mn.CAS_URL_AFR = "https://cas.criteo.com/delivery/afr.php",
        mn.CAS_URL_NATIVE_API = "https://cas.criteo.com/delivery/0.1/napi.jsonp",
        mn
    );
    function mn() {}
    var gn = (
        yn.prototype.respectsEyeoDeal = function (e) {
            var t = document.getElementById(e);
            if (!this.respectsSizeConstraints(t)) 
                return O.Debug(
                    "The element " + e + "does not respect Eyeo acceptable ads size constraints"
                ),
                !1;
            var i = this.getNewRatiosFeatures(t),
                n = i.respectsAdRatioConstraint;
            return n
                ? (yn.atfRatio = i.newAtfRatio, yn.btfRatio = i.newBtfRatio)
                : O.Debug(
                    "The element " + e + "does not respect Eyeo acceptable ads ratio constraints"
                ),
            n
        },
        yn.prototype.respectsSizeConstraints = function (e) {
            var t = this.getAdLocationAttribute(e);
            switch (t) {
                case "above-content":
                    return e.offsetHeight <= 200;
                case "in-content":
                    return !1;
                case "below-content":
                    return e.offsetHeight <= 400;
                case "side-content":
                    return e.offsetWidth <= 350;
                default:
                    return void 0 !== t && O.Error("Unknown data-ad-loc attribute : " + t),
                    !0
            }
        },
        yn.prototype.getAdLocationAttribute = function (e) {
            return e.getAttribute("data-ad-loc") || void 0
        },
        yn.prototype.getNewRatiosFeatures = function (e) {
            var t = Qi.GetRatioAboveFold(e),
                i = e.offsetHeight * e.offsetWidth,
                n = screen.width * screen.height,
                o = yn.atfRatio + t * i / n,
                r = yn.btfRatio + (1 - t) * i / n;
            return {
                respectsAdRatioConstraint: o <= .15 && r <= .25,
                newAtfRatio: o,
                newBtfRatio: r
            }
        },
        yn.atfRatio = 0,
        yn.btfRatio = 0,
        yn
    );
    function yn() {}
    function wn(e) {
        var i,
            n = new pn(e);
        (n.async = !1 !== n.async, void 0 !== n.zoneid)
            ? void 0 === n.layout || !1 !== n.async
                ? !0 !== n.async || void 0 !== n.containerid && "" !== n.containerid || void 0 !== n.nativeCallback
                    ? (
                        !1 === n.async && void 0 !== n.passbackCode && (
                            O.Error("Criteo.DisplayAd does not support synchronous local passback"),
                            n.passbackCode = void 0
                        ),
                        !1 === n.async && void 0 !== n.nativeCallback && (
                            O.Error("Native API does not support synchronous local passback"),
                            n.passbackCode = void 0
                        ),
                        i = new(
                            n.async
                                ? dn
                                : cn
                        )(new fn, n),
                        n.adFormat !== Hi.Classic
                            ? (window["criteo_pubtag_135"] || window.criteo_pubtag).context.serviceProvider.getServicesAsync(
                                function (e) {
                                    var t = new Vi(n.adFormat, e.cookieHelper);
                                    t.IsUserOptout()
                                        ? O.Debug("The user has opted-out for 1 day when closing the sticky footer.")
                                        : (
                                            n.containerid = t.CreateAdvancedAdFormatContainer(n.containerid),
                                            (window["criteo_pubtag_135"] || window.criteo_pubtag).push(i)
                                        )
                                }
                            )
                            : (window["criteo_pubtag_135"] || window.criteo_pubtag).push(i)
                    )
                    : O.Error("Missing parameter 'containerid' for an async display")
                : O.Error("Criteo hosted ads only work in async mode")
            : O.Error("missing parameter 'zoneid'")
    }
    function bn(e) {
        var t = new pn(e);
        if (void 0 !== t.zoneid) 
            if (void 0 !== t.containerid && "" !== t.containerid) {
                var i = document.getElementById(t.containerid);
                if (Cn(i)) {
                    var n = (window["criteo_pubtag_135"] || window.criteo_pubtag).context;
                    if (void 0 === n.isAdBlocked) 
                        (new h).isAdBlocked(function (e) {
                            n.isAdBlocked = e,
                            (window["criteo_pubtag_135"] || window.criteo_pubtag).evalEvents()
                        });
                    var o,
                        r,
                        a = new gn;
                    o = new rn(new fn, t, a.respectsEyeoDeal(t.containerid)),
                    r = new Je(function () {
                        t.collapseContainerIfNotAdblocked && (i.style.display = "none"),
                        void 0 !== t.callIfNotAdblocked && t.callIfNotAdblocked()
                    });
                    var s;
                    s = new Wi(function () {
                        return !0 === (window["criteo_pubtag_135"] || window.criteo_pubtag).context.isAdBlocked
                    }, o, r, function () {
                        return void 0 !== (window["criteo_pubtag_135"] || window.criteo_pubtag).context.isAdBlocked
                    }),
                    (window["criteo_pubtag_135"] || window.criteo_pubtag).push(s)
                } else 
                    O.Error(
                        "can't display acceptable ad : the container \"" + t.containerid + '" is not vi' +
                        'sible'
                    )
            } else 
                O.Error("missing parameter 'containerid' to display acceptable ads");
    else 
            O.Error("missing parameter 'zoneid'")
    }
    function Cn(e, t) {
        if (e === document) 
            return !0;
        var i = "visible" === e.style.visibility;
        if (!e) 
            return !1;
        if (!e.parentNode) 
            return !1;
        if (e.style) {
            if ("none" === e.style.display) 
                return !1;
            if ("hidden" === e.style.visibility && !1 === t) 
                return !1
        }
        if (window.getComputedStyle) {
            var n = window.getComputedStyle(e, "");
            if ("none" === n.display) 
                return !1;
            if ("hidden" === n.visibility && !1 === t) 
                return !1;
            i = i || "visible" === n.visibility
        }
        var o = e.currentStyle;
        if (o) {
            if ("none" === o.display) 
                return !1;
            if ("hidden" === o.visibility && !1 === t) 
                return !1;
            i = i || "visible" === o.visibility
        }
        return Cn(
            e.parentNode,
            null != t
                ? t
                : i
        )
    }
    function In(e) {
        function t() {
            try {
                return i.apply(this, arguments)
            } catch (e) {
                O.Error("Exception caught: " + e.toString())
            }
        }
        var i = e;
        for (var n in t.prototype = i.prototype, i) 
            i.hasOwnProperty(n) && (t[n] = i[n]);
        return t
    }
    function En(e) {
        for (var t in e) 
            if (t in e) {
                var i = e[t];
                "function" == typeof i
                    ? e[t] = In(i)
                    : "object" == typeof i && (e[t] = En(i))
            }
        return e
    }
    function _n(e) {
        var t = {
            push: function () {
                for (var e = [], t = 0; t < arguments.length; t++) 
                    e[t] = arguments[t];
                if (void 0 !== e) 
                    for (var i = 0, n = e; i < n.length; i++) {
                        var o = n[i];
                        "function" == typeof o && In(o)()
                    }
                }
        };
        return e && Array.isArray(e) && t
            .push
            .apply(t, e),
        t
    }
    function An(e) {}
    function Sn(e) {}
    var Tn = "crtg_content",
        Pn = "crtg_rta",
        Rn = 206;
    function kn() {
        (window["Criteo_135"] || window.Criteo).passbackEvents = _n(
            (window["Criteo_135"] || window.Criteo).passbackEvents
        )
    }
    function xn(e, t) {
        di(e, Rn, kn, t)
    }
    function On(e, t, i, n) {
        var o;
        "string" == typeof e
            ? o = e
            : (
                o = Et(e, "adUnit", "string"),
                t = Et(e, "passback", "function"),
                i = Et(e, "customRenderFunction", "function"),
                n = Et(e, "minimumBidPrice", "number")
            ),
        void 0 !== o
            ? void 0 !== t
                ? (
                    "function" != typeof i && (i = function (e) {
                        hi({bidId: e.id, containerId: o})
                    }),
                    (window["Criteo_135"] || window.Criteo).passbackEvents = (window["Criteo_135"] || window.Criteo).passbackEvents || [],
                    (window["Criteo_135"] || window.Criteo).passbackEvents.push(function () {
                        var e = gi(o)[0];
                        e && (void 0 === n || e.cpm > n)
                            ? i(e)
                            : t(o)
                    })
                )
                : O.Error("A passback callback should be provided")
            : O.Error("An adUnit string parameter should be provided")
    }
    var Mn = "undefined" != typeof globalThis
        ? globalThis
        : "undefined" != typeof window
            ? window
            : "undefined" != typeof global
                ? global
                : "undefined" != typeof self
                    ? self
                    : {};
    function Dn() {
        throw new Error(
            "Dynamic requires are not currently supported by rollup-plugin-commonjs"
        )
    }
    function Un(e) {
        return e && e.__esModule && Object
            .prototype
            .hasOwnProperty
            .call(e, "default")
                ? e.default
                : e
    }
    function Bn(e, t) {
        return e(t = {
            exports: {}
        }, t.exports),
        t.exports
    }
    function Fn(e) {
        return e && e.default || e
    }
    var Nn = Bn(function (e, t) {
            var i;
            i = function () {
                function d(e) {
                    return "function" == typeof e
                }
                var i = Array.isArray
                        ? Array.isArray
                        : function (e) {
                            return "[object Array]" === Object
                                .prototype
                                .toString
                                .call(e)
                        },
                    n = 0,
                    t = void 0,
                    o = void 0,
                    a = function (e, t) {
                        p[n] = e,
                        p[n + 1] = t,
                        2 === (n += 2) && (
                            o
                                ? o(h)
                                : y()
                        )
                    };
                var e = "undefined" != typeof window
                        ? window
                        : void 0,
                    r = e || {},
                    s = r.MutationObserver || r.WebKitMutationObserver,
                    c = "undefined" == typeof self && "undefined" != typeof process && "[object process]" === {}
                        .toString
                        .call(process),
                    l = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel;
                function u() {
                    var e = setTimeout;
                    return function () {
                        return e(h, 1)
                    }
                }
                var p = new Array(1e3);
                function h() {
                    for (var e = 0; e < n; e += 2) {
                        (0, p[e])(p[e + 1]),
                        p[e] = void 0,
                        p[e + 1] = void 0
                    }
                    n = 0
                }
                var v,
                    f,
                    m,
                    g,
                    y = void 0;
                function w(e, t) {
                    var i = this,
                        n = new this.constructor(I);
                    void 0 === n[C] && B(n);
                    var o = i._state;
                    if (o) {
                        var r = arguments[o - 1];
                        a(function () {
                            return D(o, n, r, i._result)
                        })
                    } else 
                        O(i, n, e, t);
                    return n
                }
                function b(e) {
                    if (e && "object" == typeof e && e.constructor === this) 
                        return e;
                    var t = new this(I);
                    return P(t, e),
                    t
                }
                y = c
                    ? function () {
                        return process.nextTick(h)
                    }
                    : s
                        ? (f = 0, m = new s(h), g = document.createTextNode(""), m.observe(g, {
                            characterData: !0
                        }), function () {
                            g.data = f = ++f % 2
                        })
                        : l
                            ? ((v = new MessageChannel).port1.onmessage = h, function () {
                                return v
                                    .port2
                                    .postMessage(0)
                            })
                            : (
                                void 0 === e && "function" == typeof Dn
                                    ? function () {
                                        try {
                                            var e = Function("return this")().require("vertx");
                                            return void 0 !== (t = e.runOnLoop || e.runOnContext)
                                                ? function () {
                                                    t(h)
                                                }
                                                : u()
                                        } catch (e) {
                                            return u()
                                        }
                                    }
                                    : u
                            )();
                var C = Math
                    .random()
                    .toString(36)
                    .substring(2);
                function I() {}
                var E = void 0,
                    _ = 1,
                    A = 2;
                function S(e, n, o) {
                    a(function (t) {
                        var i = !1,
                            e = function (e, t, i, n) {
                                try {
                                    e.call(t, i, n)
                                } catch (e) {
                                    return e
                                }
                            }(o, n, function (e) {
                                i || (i = !0, (
                                    n !== e
                                        ? P
                                        : k
                                )(t, e))
                            }, function (e) {
                                i || (i = !0, x(t, e))
                            }, t._label);
                        !i && e && (i = !0, x(t, e))
                    }, e)
                }
                function T(e, t, i) {
                    var n,
                        o;
                    t.constructor === e.constructor && i === w && t.constructor.resolve === b
                        ? (
                            n = e,
                            (o = t)._state === _
                                ? k(n, o._result)
                                : o._state === A
                                    ? x(n, o._result)
                                    : O(o, void 0, function (e) {
                                        return P(n, e)
                                    }, function (e) {
                                        return x(n, e)
                                    })
                        )
                        : void 0 === i
                            ? k(e, t)
                            : d(i)
                                ? S(e, t, i)
                                : k(e, t)
                }
                function P(t, e) {
                    if (t === e) 
                        x(t, new TypeError("You cannot resolve a promise with itself"));
                    else if (o = typeof(n = e), null === n || "object" != o && "function" != o) 
                        k(t, e);
                    else {
                        var i = void 0;
                        try {
                            i = e.then
                        } catch (e) {
                            return void x(t, e)
                        }
                        T(t, e, i)
                    }
                    var n,
                        o
                }
                function R(e) {
                    e._onerror && e._onerror(e._result),
                    M(e)
                }
                function k(e, t) {
                    e._state === E && (
                        e._result = t,
                        e._state = _,
                        0 !== e._subscribers.length && a(M, e)
                    )
                }
                function x(e, t) {
                    e._state === E && (e._state = A, e._result = t, a(R, e))
                }
                function O(e, t, i, n) {
                    var o = e._subscribers,
                        r = o.length;
                    e._onerror = null,
                    o[r] = t,
                    o[r + _] = i,
                    o[r + A] = n,
                    0 === r && e._state && a(M, e)
                }
                function M(e) {
                    var t = e._subscribers,
                        i = e._state;
                    if (0 !== t.length) {
                        for (var n = void 0, o = void 0, r = e._result, a = 0; a < t.length; a += 3) 
                            n = t[a],
                            o = t[a + i],
                            n
                                ? D(i, n, o, r)
                                : o(r);
                        e._subscribers.length = 0
                    }
                }
                function D(e, t, i, n) {
                    var o = d(i),
                        r = void 0,
                        a = void 0,
                        s = !0;
                    if (o) {
                        try {
                            r = i(n)
                        } catch (e) {
                            s = !1,
                            a = e
                        }
                        if (t === r) 
                            return void x(
                                t,
                                new TypeError("A promises callback cannot return that same promise.")
                            )
                    } else 
                        r = n;
                    t._state !== E || (
                        o && s
                            ? P(t, r)
                            : !1 === s
                                ? x(t, a)
                                : e === _
                                    ? k(t, r)
                                    : e === A && x(t, r)
                    )
                }
                var U = 0;
                function B(e) {
                    e[C] = U++,
                    e._state = void 0,
                    e._result = void 0,
                    e._subscribers = []
                }
                var F = (
                    N.prototype._enumerate = function (e) {
                        for (var t = 0; this._state === E && t < e.length; t++) 
                            this._eachEntry(e[t], t)
                    },
                    N.prototype._eachEntry = function (t, e) {
                        var i = this._instanceConstructor,
                            n = i.resolve;
                        if (n === b) {
                            var o = void 0,
                                r = void 0,
                                a = !1;
                            try {
                                o = t.then
                            } catch (e) {
                                a = !0,
                                r = e
                            }
                            if (o === w && t._state !== E) 
                                this._settledAt(t._state, e, t._result);
                            else if ("function" != typeof o) 
                                this._remaining--,
                                this._result[e] = t;
                            else if (i === L) {
                                var s = new i(I);
                                a
                                    ? x(s, r)
                                    : T(s, t, o),
                                this._willSettleAt(s, e)
                            } else 
                                this._willSettleAt(new i(function (e) {
                                    return e(t)
                                }), e)
                        } else 
                            this._willSettleAt(n(t), e)
                    },
                    N.prototype._settledAt = function (e, t, i) {
                        var n = this.promise;
                        n._state === E && (
                            this._remaining--,
                            e === A
                                ? x(n, i)
                                : this._result[t] = i
                        ),
                        0 === this._remaining && k(n, this._result)
                    },
                    N.prototype._willSettleAt = function (e, t) {
                        var i = this;
                        O(e, void 0, function (e) {
                            return i._settledAt(_, t, e)
                        }, function (e) {
                            return i._settledAt(A, t, e)
                        })
                    },
                    N
                );
                function N(e, t) {
                    this._instanceConstructor = e,
                    this.promise = new e(I),
                    this.promise[C] || B(this.promise),
                    i(t)
                        ? (
                            this.length = t.length,
                            this._remaining = t.length,
                            this._result = new Array(this.length),
                            0 === this.length
                                ? k(this.promise, this._result)
                                : (
                                    this.length = this.length || 0,
                                    this._enumerate(t),
                                    0 === this._remaining && k(this.promise, this._result)
                                )
                        )
                        : x(this.promise, new Error("Array Methods must be provided an Array"))
                }
                var L = (W.prototype.catch = function (e) {
                    return this.then(null, e)
                }, W.prototype. finally = function (t) {
                    var i = this.constructor;
                    return d(t)
                        ? this.then(function (e) {
                            return i
                                .resolve(t())
                                .then(function () {
                                    return e
                                })
                        }, function (e) {
                            return i
                                .resolve(t())
                                .then(function () {
                                    throw e
                                })
                        })
                        : this.then(t, t)
                }, W);
                function W(e) {
                    this[C] = U++,
                    this._result = this._state = void 0,
                    this._subscribers = [],
                    I !== e && (
                        "function" != typeof e && function () {
                            throw new TypeError(
                                "You must pass a resolver function as the first argument to the promise constru" +
                                "ctor"
                            )
                        }(),
                        this instanceof W
                            ? function (t, e) {
                                try {
                                    e(function (e) {
                                        P(t, e)
                                    }, function (e) {
                                        x(t, e)
                                    })
                                } catch (e) {
                                    x(t, e)
                                }
                            }(this, e)
                            : function () {
                                throw new TypeError(
                                    "Failed to construct 'Promise': Please use the 'new' operator, this object cons" +
                                    "tructor cannot be called as a function."
                                )
                            }()
                    )
                }
                return L.prototype.then = w,
                L.all = function (e) {
                    return new F(this, e).promise
                },
                L.race = function (o) {
                    var r = this;
                    return i(o)
                        ? new r(function (e, t) {
                            for (var i = o.length, n = 0; n < i; n++) 
                                r
                                    .resolve(o[n])
                                    .then(e, t)
                            })
                        : new r(function (e, t) {
                            return t(new TypeError("You must pass an array to race."))
                        })
                },
                L.resolve = b,
                L.reject = function (e) {
                    var t = new this(I);
                    return x(t, e),
                    t
                },
                L._setScheduler = function (e) {
                    o = e
                },
                L._setAsap = function (e) {
                    a = e
                },
                L._asap = a,
                L.polyfill = function () {
                    var e = void 0;
                    if (void 0 !== Mn) 
                        e = Mn;
                    else if ("undefined" != typeof self) 
                        e = self;
                    else 
                        try {
                            e = Function("return this")()
                        } catch (e) {
                            throw new Error(
                                "polyfill failed because global object is unavailable in this environment"
                            )
                        }
                    var t = e.Promise;
                    if (t) {
                        var i = null;
                        try {
                            i = Object
                                .prototype
                                .toString
                                .call(t.resolve())
                        } catch (e) {}
                        if ("[object Promise]" === i && !t.cast) 
                            return
                    }
                    e.Promise = L
                },
                L.Promise = L
            },
            e.exports = i()
        }),
        Ln = Nn.polyfill,
        Wn = (
            zn.LoadPolyfills = function () {
                zn.DefineIsArray(),
                zn.DefineIndexOf(),
                zn.DefineFilter(),
                zn.DefinePromise()
            },
            zn.DefinePromise = function () {
                window.Promise || Ln()
            },
            zn.DefineIsArray = function () {
                Array.isArray || (Array.isArray = function (e) {
                    return "[object Array]" === Object
                        .prototype
                        .toString
                        .call(e)
                })
            },
            zn.DefineIndexOf = function () {
                Array.prototype.indexOf || (Array.prototype.indexOf = function (e, t) {
                    if (void 0 === t && (t = 0), void 0 === this) 
                        throw new TypeError("'this' is null or not defined");
                    var i = this.length;
                    if (0 === i) 
                        return -1;
                    if (i <= t) 
                        return -1;
                    for (var n = Math.max(
                        0 <= t
                            ? t
                            : i - Math.abs(t),
                        0
                    ); n < i;) {
                        if (n in this && this[n] === e) 
                            return n;
                        n++
                    }
                    return -1
                })
            },
            zn.DefineFilter = function () {
                Array.prototype.filter || (Array.prototype.filter = function (e) {
                    if (void 0 === this || void 0 === this) 
                        throw new TypeError;
                    var t = this.length;
                    if ("function" != typeof e) 
                        throw new TypeError;
                    for (
                        var i = [],
                        n = 2 <= arguments.length
                            ? arguments[1]
                            : void 0,
                        o = 0; o < t; o++
                    ) 
                        if (o in this) {
                            var r = this[o];
                            e.call(n, r, o, this) && i.push(r)
                        }
                    return i
                })
            },
            zn
        );
    function zn() {}
    var Hn = function (e, t) {
            this.errorType = e,
            this.messages = t
        },
        Gn = function (e, t, i) {
            this.environment = e,
            this.errors = t,
            this.requestId = i
        },
        qn = (
            Vn.prototype.withMessage = function (e, t) {
                return e in this.messages || (this.messages[e] = new Array),
                this
                    .messages[e]
                    .push(t),
                this
            },
            Vn.prototype.withRequestId = function (e) {
                return this.requestId = e,
                this
            },
            Vn.prototype.build = function () {
                var e = Array();
                for (var t in this.messages) 
                    null != t && e.push(new Hn(t, this.messages[t]));
                return new Gn(this.environment, e, this.requestId)
            },
            Vn
        );
    function Vn(e) {
        this.messages = {},
        this.environment = e
    }
    var jn = (
        Kn.prototype.reportPending = function () {
            return this.shouldSend
        },
        Kn.prototype.sendErrorReport = function (e, t) {
            if (this.shouldSend) {
                void 0 !== t && this
                    .builder
                    .withRequestId(t);
                var i = this
                        .builder
                        .build(),
                    n = e.buildErrorUrl();
                n += this.debug
                    ? "?debug=1"
                    : "";
                var o = JSON.stringify(i);
                navigator.sendBeacon && navigator.sendBeacon(n, o),
                this.shouldSend = !1,
                this.builder = new qn(Kn.environment)
            }
        },
        Kn.prototype.log = function (e, t) {
            this.shouldSend = !0,
            this
                .builder
                .withMessage(e, t)
        },
        Kn.environment = "PublisherTag Version " + Z,
        Kn
    );
    function Kn(e) {
        void 0 === e && (e = !1),
        this.builder = new qn(Kn.environment),
        this.shouldSend = !1,
        this.debug = e
    }
    var Jn = (
        Yn.prototype.getUserContextualData = function () {
            var e,
                t,
                i,
                n,
                o,
                r,
                a,
                s,
                d,
                c,
                l,
                u,
                p,
                h;
            return {
                data: {
                    contentLanguage: this.getContentLanguage(),
                    navigatorLanguage: null === (
                        t = null === (e = this.window) || void 0 === e
                            ? void 0
                            : e.navigator
                    ) || void 0 === t
                        ? void 0
                        : t.language,
                    orientation: this.getOrientation(),
                    windowInnerWidth: null === (i = this.window) || void 0 === i
                        ? void 0
                        : i.innerWidth,
                    windowInnerHeight: null === (n = this.window) || void 0 === n
                        ? void 0
                        : n.innerHeight,
                    pageWidth: null === (
                        a = null === (
                            r = null === (o = this.window) || void 0 === o
                                ? void 0
                                : o.document
                        ) || void 0 === r
                            ? void 0
                            : r.documentElement
                    ) || void 0 === a
                        ? void 0
                        : a.scrollWidth,
                    pageHeight: null === (
                        c = null === (
                            d = null === (s = this.window) || void 0 === s
                                ? void 0
                                : s.document
                        ) || void 0 === d
                            ? void 0
                            : d.documentElement
                    ) || void 0 === c
                        ? void 0
                        : c.scrollHeight,
                    sessionDuration: ce.TimeSincePageLoad()
                },
                device: {
                    w: null === (
                        u = null === (l = this.window) || void 0 === l
                            ? void 0
                            : l.screen
                    ) || void 0 === u
                        ? void 0
                        : u.width,
                    h: null === (
                        h = null === (p = this.window) || void 0 === p
                            ? void 0
                            : p.screen
                    ) || void 0 === h
                        ? void 0
                        : h.height
                }
            }
        },
        Yn.prototype.getOrientation = function () {
            var e,
                t,
                i,
                n,
                o,
                r;
            return ((
                null === (
                    t = null === (e = this.window) || void 0 === e
                        ? void 0
                        : e.screen
                ) || void 0 === t
                    ? void 0
                    : t.orientation
            ) || {}).type || (
                null === (
                    n = null === (i = this.window) || void 0 === i
                        ? void 0
                        : i.screen
                ) || void 0 === n
                    ? void 0
                    : n.mozOrientation
            ) || (
                null === (
                    r = null === (o = this.window) || void 0 === o
                        ? void 0
                        : o.screen
                ) || void 0 === r
                    ? void 0
                    : r.msOrientation
            )
        },
        Yn.prototype.getContentLanguage = function () {
            var e,
                t,
                i,
                n,
                o,
                r = null === (
                    i = null === (
                        t = null === (e = this.window) || void 0 === e
                            ? void 0
                            : e.document
                    ) || void 0 === t
                        ? void 0
                        : t.documentElement
                ) || void 0 === i
                    ? void 0
                    : i.lang;
            if (!r && "function" == typeof(
                null === (
                    o = null === (n = this.window) || void 0 === n
                        ? void 0
                        : n.document
                ) || void 0 === o
                    ? void 0
                    : o.querySelector
            )) {
                var a = this
                    .window
                    .document
                    .querySelector('meta[http-equiv="Content-Language"]');
                r = null == a
                    ? void 0
                    : a.content
            }
            return r
        },
        Yn
    );
    function Yn(e) {
        this.window = e
    }
    var Xn = (Qn = te, r(io, Qn), io.prototype.sendEvents = function (e) {
            var t = {
                requestId: this
                    .context
                    .getClientSessionId(),
                events: [e]
            };
            this
                .context
                .isEligibleForCsmEvents() && this.sendEventsToBeacon(
                    t,
                    this.urlBuilder.buildCsmEventsUrl()
                )
        }, io),
        Qn,
        Zn,
        $n,
        eo,
        to;
    function io(e) {
        var t = Qn.call(this) || this;
        return t.context = e,
        t
    }
    $n = Zn = Zn || {},
    $n[$n.None = 0] = "None",
    $n[$n.Cookie = 1] = "Cookie",
    $n[$n.LocalStorage = 2] = "LocalStorage",
    $n[$n.Delegation = 4] = "Delegation",
    to = eo = eo || {},
    to[to.Unknown = 0] = "Unknown",
    to[to.Deactivated = 1] = "Deactivated",
    to[to.Activated = 2] = "Activated";
    var no = (
        oo.prototype.getSid = function () {
            return this
                .userDataHandlers
                .sid()
                .fromAllStorages()
        },
        oo.prototype.getIdCpy = function () {
            return this
                .userDataHandlers
                .idCpy()
                .fromAllStorages()
        },
        oo.prototype.getLocalWebId = function () {
            return this
                .userDataHandlers
                .localWebId()
                .fromAllStorages()
        },
        oo.prototype.getOptOut = function () {
            return this
                .userDataHandlers
                .optOut()
                .fromAllStorages()
        },
        oo.prototype.getBundle = function () {
            return this
                .userDataHandlers
                .bundle()
                .fromAllStorages()
        },
        oo
    );
    function oo(e) {
        this.userDataHandlers = e
    }
    var ro = (
        ao.fromUserIdentificationData = function (e) {
            return new ao(e.value, e.origin)
        },
        ao.fromValue = function (e) {
            return new ao(e, Zn.None)
        },
        ao.prototype.hasValue = function () {
            return "" !== String(this.value) && null !== this.value && void 0 !== this.value
        },
        ao
    );
    function ao(e, t) {
        this.value = e,
        this.origin = t
    }
    var so = (
            co = ro,
            r(lo, co),
            lo.prototype.hasValue = function () {
                return "" !== String(this.value) && null !== this.value && void 0 !== this.value
            },
            lo.prototype.saveOnAllStorages = function () {
                if (this.hasValue()) {
                    var e = "boolean" == typeof this.value
                        ? this.value
                            ? "1"
                            : "0"
                        : String(this.value);
                    this
                        .storageAdapter
                        .writeToAllStorages(this.storageKey, e, this.expirationTimeHours)
                }
            },
            lo.prototype.toJSON = function () {
                return {value: this.value, origin: this.origin}
            },
            lo
        ),
        co;
    function lo(e, t, i, n, o) {
        var r = co.call(this, i, n) || this;
        return r.storageKey = e,
        r.expirationTimeHours = t,
        r.storageAdapter = o,
        r
    }
    var uo = (
        po.prototype.sid = function () {
            return this.createGuid(po.SID_COOKIE_NAME)
        },
        po.prototype.idCpy = function () {
            return this.createGuid(po.IDCPY_COOKIE_NAME)
        },
        po.prototype.localWebId = function () {
            return this.createGuid(po.LWID_COOKIE_NAME)
        },
        po.prototype.optOut = function () {
            return new ho(
                Boolean,
                po.OPTOUT_COOKIE_NAME,
                po.OPTOUT_RETENTION_TIME_HOUR,
                this.storageAdapter
            )
        },
        po.prototype.bundle = function () {
            return this.createGuid(po.BUNDLE_COOKIE_NAME)
        },
        po.prototype.createGuid = function (e) {
            return new ho(String, e, po.GUID_RETENTION_TIME_HOUR, this.storageAdapter)
        },
        po.SID_COOKIE_NAME = "cto_sid",
        po.IDCPY_COOKIE_NAME = "cto_idcpy",
        po.LWID_COOKIE_NAME = "cto_lwid",
        po.OPTOUT_COOKIE_NAME = "cto_optout",
        po.BUNDLE_COOKIE_NAME = "cto_bundle",
        po.GUID_RETENTION_TIME_HOUR = 9360,
        po.OPTOUT_RETENTION_TIME_HOUR = 43200,
        po
    );
    function po(e) {
        this.storageAdapter = e
    }
    var ho = (
        vo.prototype.fromAllStorages = function () {
            var e = this
                    .storageAdapter
                    .readFromAllStorages(this.storageKey),
                t = "boolean" == typeof(new this.type).valueOf()
                    ? "1" === e.value
                    : e.value;
            return this.create(t, e.origin)
        },
        vo.prototype.fromValue = function (e) {
            return this.create(e, Zn.None)
        },
        vo.prototype.removeFromAllStorages = function () {
            this
                .storageAdapter
                .removeFromAllStorages(this.storageKey)
        },
        vo.prototype.create = function (e, t) {
            return new so(
                this.storageKey,
                this.expirationTimeHours,
                e,
                t,
                this.storageAdapter
            )
        },
        vo
    );
    function vo(e, t, i, n) {
        this.type = e,
        this.storageKey = t,
        this.expirationTimeHours = i,
        this.storageAdapter = n
    }
    var fo = (
        mo.prototype.getSyncframeListener = function (i, n) {
            var o = this;
            return function (e) {
                if (!o.discardMessageFromOtherFrames(e) || o.window.criteo_syncframe_state.ForceSyncframeMessageHandling) {
                    var t = e.data;
                    (
                        null == t
                            ? void 0
                            : t.requestId
                    ) === i && (
                        e.stopImmediatePropagation(),
                        o.handleSyncframeResponse(t, n),
                        o.window.criteo_syncframe_state.firstSyncframeCompleted = !0,
                        o.window.criteo_syncframe_state.syncframeRequested = !1,
                        o.tryUnqueueAppendSyncframeRequests()
                    )
                }
            }
        },
        mo.prototype.userBundleHasAlreadyBeenRetrieved = function () {
            return this
                .userDataHandlers
                .bundle()
                .fromAllStorages()
                .hasValue()
        },
        mo.prototype.canDropSyncframe = function () {
            return !this.window.criteo_syncframe_state.syncframeRequested
        },
        mo.prototype.discardMessageFromOtherFrames = function (e) {
            return !e.data || e.origin != this.syncframeOrigin
        },
        mo.prototype.appendGumIframeIfDoesNotExist = function (e, t, i) {
            var n,
                o = this;
            !0 === (
                null === (n = this.window.criteo_syncframe_state) || void 0 === n
                    ? void 0
                    : n.firstSyncframeCompleted
            ) || this.userBundleHasAlreadyBeenRetrieved() || this.canDropSyncframe()
                ? this.appendGumIframe(e, t, i)
                : this.queueAppendSyncframeRequest(function () {
                    return o.appendGumIframeIfDoesNotExist(e, t, i)
                })
        },
        mo.prototype.doOnCompletedDom = function (e) {
            var t = this;
            if (this.window.addEventListener) 
                if ("complete" === this.document.readyState) 
                    e();
                else {
                    var i = function () {
                        t
                            .window
                            .removeEventListener("load", i),
                        t
                            .document
                            .removeEventListener("DOMContentLoaded", i),
                        e()
                    };
                    this
                        .window
                        .addEventListener("load", i, !1),
                    this
                        .document
                        .addEventListener("DOMContentLoaded", i, !1)
                }
            },
        mo.prototype.appendGumIframe = function (e, t, i) {
            t();
            var n = e();
            if (this.consentAllowsSyncframeToBeDropped(n.consent)) {
                this
                    .window
                    .addEventListener("message", this.getSyncframeListener(n.requestId, i), !0);
                var o = this.createIFrame(n);
                this
                    .document
                    .body
                    .appendChild(o),
                this.window.criteo_syncframe_state.syncframeRequested = !0
            } else 
                this.handleSyncframeResponse({}, i)
        },
        mo.prototype.consentAllowsSyncframeToBeDropped = function (e) {
            var t;
            return 2 !== (
                null == e
                    ? void 0
                    : e.gdprVersion
            ) || !0 !== (
                null == e
                    ? void 0
                    : e.gdprApplies
            ) || !0 === (
                null === (
                    t = null == e
                        ? void 0
                        : e.vendorConsents
                ) || void 0 === t
                    ? void 0
                    : t[this.criteoGlobalVendorListId]
            )
        },
        mo.prototype.queueAppendSyncframeRequest = function (e) {
            void 0 !== this.window.criteo_syncframe_state.appendSyncframeRequestQueue && this
                .window
                .criteo_syncframe_state
                .appendSyncframeRequestQueue
                .push(e)
        },
        mo.prototype.tryUnqueueAppendSyncframeRequests = function () {
            for (
                var e,
                t,
                i = null === (e = this.window.criteo_syncframe_state.appendSyncframeRequestQueue) || void 0 === e
                    ? void 0
                    : e.shift(); void 0 !== i;
            ) 
                i(),
                i = null === (
                    t = this.window.criteo_syncframe_state.appendSyncframeRequestQueue
                ) || void 0 === t
                    ? void 0
                    : t.shift()
            },
        mo.prototype.createIFrame = function (e) {
            var t,
                i = this
                    .document
                    .createElement("iframe"),
                n = {
                    uid: e.uid,
                    lwid: e.localWebId,
                    bundle: e.bundle,
                    optout: e.optoutCookie,
                    sid: e.secureIdCookie,
                    tld: e.topLevelDomain,
                    topUrl: e.topUrl,
                    version: "string" == typeof e.version
                        ? null === (t = e.version) || void 0 === t
                            ? void 0
                            : t.replace(/\./g, "_")
                        : e.version,
                    cw: e.canWriteCookie,
                    lsw: e.canWriteLocalStorage,
                    origin: e.origin,
                    pm: e.privateMode,
                    rtusCallerId: e.rtusCallerId,
                    requestId: e.requestId
                },
                o = [];
            return o.push("origin=" + e.origin),
            o.push("topUrl=" + e.topUrl),
            e.consent && (
                void 0 !== e.consent.gdprApplies && o.push("gdpr=" + (
                    e.consent.gdprApplies
                        ? 1
                        : 0
                )),
                void 0 !== e.consent.consentData && o.push("gdpr_consent=" + e.consent.consentData),
                void 0 !== e.consent.uspString && o.push(
                    "us_privacy=" + e.consent.uspString
                )
            ),
            e.isDebug && o.push("debug=1"),
            i.src = this.syncframeEndpoint + "?" + o.join("&") + "#" + JSON.stringify(n),
            i.width = "0",
            i.height = "0",
            i.frameBorder = "0",
            i.style.borderWidth = "0px",
            i.style.margin = "0px",
            i.style.display = "none",
            i.title = "Criteo GUM iframe",
            i
        },
        mo
    );
    function mo(e, t, i) {
        this.criteoGlobalVendorListId = 91,
        this.window = e,
        this.document = e.document,
        this.userDataHandlers = new uo(t),
        i = null != i
            ? i
            : "gum.criteo.com",
        this.syncframeOrigin = "https://" + i,
        this.syncframeEndpoint = "https://" + i + "/syncframe",
        this.window.criteo_syncframe_state || (this.window.criteo_syncframe_state = {
            syncframeRequested: !1
        }),
        this.window.criteo_syncframe_state.appendSyncframeRequestQueue || (
            this.window.criteo_syncframe_state.appendSyncframeRequestQueue = []
        )
    }
    var go = (
            yo = fo,
            r(wo, yo),
            wo.prototype.handleSyncframeResponse = function (e, t) {
                var i;
                if (e.optout) 
                    this
                        .userDataHandlers
                        .idCpy()
                        .removeFromAllStorages(),
                    this
                        .userDataHandlers
                        .sid()
                        .removeFromAllStorages(),
                    this
                        .userDataHandlers
                        .bundle()
                        .removeFromAllStorages(),
                    this
                        .userDataHandlers
                        .optOut()
                        .fromValue(!0)
                        .saveOnAllStorages(),
                    null === (
                        i = null == t
                            ? void 0
                            : t.resolve
                    ) || void 0 === i || i.call(t, "");
                else {
                    if (
                        e.uid && this.userDataHandlers.idCpy().fromValue(e.uid).saveOnAllStorages(),
                        e.callbacks
                    ) 
                        for (
                            var n = 0,
                            o = "string" == typeof e.callbacks
                                ? [e.callbacks]
                                : e.callbacks; n < o.length; n++
                        ) {
                            var r = o[n],
                                a = this
                                    .document
                                    .createElement("img");
                            a.style.display = "none",
                            a.width = 1,
                            a.height = 1,
                            a.setAttribute("data-owner", "criteo-tag"),
                            a.src = r
                        }
                    else 
                        e.bundle && this
                            .userDataHandlers
                            .bundle()
                            .fromValue(e.bundle)
                            .saveOnAllStorages();
                    e.removeSid
                        ? this
                            .userDataHandlers
                            .sid()
                            .removeFromAllStorages()
                        : e.sid && this
                            .userDataHandlers
                            .sid()
                            .fromValue(e.sid)
                            .saveOnAllStorages(),
                    (
                        null == t
                            ? void 0
                            : t.resolve
                    ) && t.resolve(
                        e.bundle
                            ? e.bundle
                            : ""
                    )
                }
            },
            wo.prototype.appendGumIFrameOnCompletedDomIfItDoesNotExist = function (e, t) {
                function i() {
                    return n.appendGumIframeIfDoesNotExist(function () {
                        return n.createSyncframeRequest(e(), o)
                    }, function () {}, {resolve: t})
                }
                var n = this,
                    o = Math
                        .random()
                        .toString();
                this.adapter.isPubTagIds
                    ? i()
                    : this.doOnCompletedDom(i)
            },
            wo.prototype.createSyncframeRequest = function (e, t) {
                return {
                    uid: this
                        .userDataHandlers
                        .idCpy()
                        .fromAllStorages()
                        .toJSON(),
                    localWebId: this
                        .userDataHandlers
                        .localWebId()
                        .fromAllStorages()
                        .toJSON(),
                    bundle: this
                        .userDataHandlers
                        .bundle()
                        .fromAllStorages()
                        .toJSON(),
                    optoutCookie: this
                        .userDataHandlers
                        .optOut()
                        .fromAllStorages()
                        .toJSON(),
                    secureIdCookie: this
                        .userDataHandlers
                        .sid()
                        .fromAllStorages()
                        .toJSON(),
                    topLevelDomain: e.topLevelDomain,
                    topUrl: e.topUrl,
                    version: e.version,
                    canWriteCookie: e.canWriteCookie,
                    canWriteLocalStorage: e.canWriteLocalStorage,
                    origin: this.adapter.isPubTagIds
                        ? "publishertagids"
                        : "publishertag",
                    privateMode: void 0,
                    consent: e.consent,
                    rtusCallerId: void 0,
                    isDebug: this.adapter.isDebug,
                    requestId: t
                }
            },
            wo.prototype.fetchUserData = function () {
                return new no(this.userDataHandlers)
            },
            wo
        ),
        yo;
    function wo(e, t, i) {
        void 0 === i && (i = !1);
        var n = yo.call(
            this,
            t,
            e.storageAdapter,
            i
                ? "gumi.criteo.com"
                : "gum.criteo.com"
        ) || this;
        return n.adapter = e,
        n
    }
    var bo = (
        Co.prototype.synchronizeCriteoUid = function (e, t) {
            var i = this;
            this
                .syncframe
                .appendGumIFrameOnCompletedDomIfItDoesNotExist(function () {
                    return {
                        topLevelDomain: i.getTld(),
                        topUrl: encodeURIComponent(At(i.topUrl).hostname),
                        version: Z,
                        canWriteCookie: i.canWriteCookies,
                        canWriteLocalStorage: i.localStorageHelper.localStorageEnabled,
                        consent: {
                            gdprApplies: null == e
                                ? void 0
                                : e.gdprApplies,
                            consentData: null == e
                                ? void 0
                                : e.consentData || "",
                            gdprVersion: null == e
                                ? void 0
                                : e.version,
                            vendorConsents: null == e
                                ? void 0
                                : e.vendorConsents,
                            uspString: void 0,
                            ccpaVersion: void 0
                        }
                    }
                }, t)
        },
        Co.prototype.checkCookiesAreWriteable = function () {
            var e = "cto_writeable";
            this
                .cookieHelper
                .setCookie(e, "1", 1, this.topDoc, !0);
            var t = "1" === this
                .cookieHelper
                .getCookie(e, this.topDoc);
            return this
                .cookieHelper
                .deleteCookie(e, this.topDoc, !0),
            t
        },
        Co.prototype.writeOnAllStorages = function (e, t, i) {
            this
                .localStorageHelper
                .setItem(e, t),
            this
                .cookieHelper
                .setCookie(e, t, i, this.topDoc, !0)
        },
        Co.prototype.getFromAllStorages = function (e) {
            var t = this
                    .cookieHelper
                    .getCookie(e, this.topDoc),
                i = this
                    .localStorageHelper
                    .getItem(e) || void 0;
            return {
                value: t || i,
                origin: (t && Zn.Cookie) | (i && Zn.LocalStorage)
            }
        },
        Co.prototype.deleteFromAllStorage = function (e) {
            this
                .cookieHelper
                .deleteCookie(e, this.topDoc, !0),
            this
                .localStorageHelper
                .removeItem(e)
        },
        Co.prototype.getTld = function () {
            var e = this
                .cookieHelper
                .setCookie(Co.TLD_TEST_COOKIE_NAME, "test", 1, this.topDoc, !0);
            return this
                .cookieHelper
                .deleteCookie(Co.TLD_TEST_COOKIE_NAME, this.topDoc, !0),
            e
        },
        Co.prototype.fetchUserData = function () {
            return this
                .syncframe
                .fetchUserData()
        },
        Co.TLD_TEST_COOKIE_NAME = "cto_pub_test_tld",
        Co
    );
    function Co(e, t, i, n, o, r) {
        var a = this;
        this.topDoc = i.document,
        this.cookieHelper = e,
        this.localStorageHelper = t,
        this.canWriteCookies = this.checkCookiesAreWriteable(),
        this.topUrl = o;
        var s = !1;
        try {
            s = JSON.parse("false")
        } catch (e) {}
        this.syncframe = new go({
            storageAdapter: {
                readFromAllStorages: function (e) {
                    var t = a.getFromAllStorages(e);
                    return {value: t.value, origin: t.origin}
                },
                writeToAllStorages: function (e, t, i) {
                    a.writeOnAllStorages(e, t, i)
                },
                removeFromAllStorages: function (e) {
                    a.deleteFromAllStorage(e)
                }
            },
            isPubTagIds: null != r && r,
            isDebug: n
        }, i, s)
    }
    var Io = (
        Eo.prototype.synchronizeCriteoUid = function (e, t, i, n) {
            var o,
                r = (
                    null === (o = this.cookieSynchronizerFactory) || void 0 === o
                        ? void 0
                        : o.call(this)
                ) || new bo(
                    t,
                    e,
                    this.highestAccessibleWindowStruct.topFrame,
                    this.debugMode,
                    this.highestAccessibleUrl,
                    !1
                ),
                a = r.fetchUserData();
            i(
                a.getIdCpy().value,
                a.getOptOut().value,
                a.getSid().value,
                a.getBundle().value
            ),
            r.synchronizeCriteoUid(n)
        },
        Eo.prototype.getServicesAndSyncCriteoUid = function (i) {
            var n = this;
            void 0 === i && (i = function (e, t, i, n) {}),
            this
                .serviceProvider
                .getServicesAsync(function (e) {
                    var t;
                    (
                        null === (t = e.ccpaConsentProvider) || void 0 === t
                            ? void 0
                            : t.hasUserOptOut(e.ccpaConsent)
                    ) || n.synchronizeCriteoUid(
                        e.localStorageHelper,
                        e.cookieHelper,
                        i,
                        e.gdprConsent
                    )
                })
        },
        Eo
    );
    function Eo(e, t, i, n, o) {
        this.highestAccessibleWindowStruct = Mt.getHighestAccessibleWindow(t),
        this.highestAccessibleUrl = Mt.getHighestAccessibleUrl(
            this.highestAccessibleWindowStruct
        );
        var r = kt(this.highestAccessibleUrl);
        this.debugMode = "1" === r.pbt_debug || !1,
        this.debugMode && D(P.Debug),
        this.cookieSynchronizerFactory = i,
        this.serviceProvider = n || new Ue(
            this.highestAccessibleWindowStruct.topFrame,
            void 0,
            void 0,
            o
        )
    }
    var _o = (
        Ao.prototype.getContextFlags = function () {
            var e = "";
            return e += this.debugMode
                ? "&debug=1"
                : "",
            e += this.noLog
                ? "&nolog=1"
                : ""
        },
        Ao.prototype.isEligibleForCsmEvents = function () {
            return this.sessionRandomId % 100 == 0
        },
        Ao.prototype.getClientSessionId = function () {
            return this.clientSessionId
        },
        Ao.prototype.getMetricsManager = function () {
            return this.contextMetricsManager
        },
        Ao.prototype.getDisplayContext = function (e) {
            return Mt.inIframe()
                ? e.err
                    ? ji.InUnfriendlyIframe
                    : ji.InFriendlyIframe
                : ji.DirectIntegration
        },
        Ao.prototype.synchronizeCriteoUid = function () {
            var o = this;
            this
                .identityHelper
                .getServicesAndSyncCriteoUid(function (e, t, i, n) {
                    o.ctoIdOnPublisherDomain = e,
                    o.isOptOut = t,
                    o.secureId = i,
                    o.bundle = n
                })
        },
        Ao.prototype.getIdfs = function () {
            return ["", this.secureId].join(":")
        },
        Ao.prototype.setIdfs = function (e) {
            var t = e.split(":");
            t[1] && (this.secureId = t[1])
        },
        Ao.prototype.setSite = function (e) {
            this.site = e
        },
        Ao.prototype.getSite = function () {
            return this.site
        },
        Ao.prototype.setUser = function (e) {
            this.user = e
        },
        Ao.prototype.getPublisherExt = function () {
            return {}
        },
        Ao.prototype.getUserExtWithContextualData = function () {
            return {}
        },
        Ao.prototype.getUser = function () {
            var e,
                t,
                i = this.user || {},
                n = this
                    .userContextualDataManager
                    .getUserContextualData();
            if (
                null == n
                    ? void 0
                    : n.data
            ) {
                var o = S(S(
                    {},
                    null === (e = i.ext) || void 0 === e
                        ? void 0
                        : e.data
                ), n.data);
                i.ext = S(S({}, i.ext), {data: o})
            }
            if (
                null == n
                    ? void 0
                    : n.device
            ) {
                var r = S(S(
                    {},
                    null === (t = i.ext) || void 0 === t
                        ? void 0
                        : t.device
                ), n.device);
                i.ext = S(S({}, i.ext), {device: r})
            }
            return i
        },
        Ao
    );
    function Ao(e, t, i, n, o, r, a, s) {
        void 0 === a && (a = (new Date).getUTCMilliseconds()),
        void 0 === s && (s = ze()),
        this.cloneByImpressionId = {},
        this.sessionRandomId = a,
        this.clientSessionId = s,
        this.contextMetricsManager = new Xn(this),
        this.charset = e.charset || e.characterSet || "",
        this.highestAccessibleWindowStruct = Mt.getHighestAccessibleWindow(t),
        this.displayContext = this.getDisplayContext(
            this.highestAccessibleWindowStruct
        ),
        this.highestAccessibleUrl = Mt.getHighestAccessibleUrl(
            this.highestAccessibleWindowStruct
        );
        var d = kt(this.highestAccessibleUrl);
        this.debugMode = "1" === d.pbt_debug || !1,
        this.noLog = "1" === d.pbt_nolog || !1,
        this.remoteLogging = new jn(this.debugMode),
        this.debugMode && D(P.Debug),
        this.location = t.location,
        this.dising = !1,
        this.ct0 = void 0,
        this.wpdt0 = void 0,
        this.isAdBlocked = void 0,
        this.rtaVarNames = [],
        this.identityHelper = new Io(e, t, i, n, o),
        this.serviceProvider = this.identityHelper.serviceProvider,
        this.synchronizeCriteoUid(),
        this.userContextualDataManager = r || new Jn(t)
    }
    var So = function () {
        this.bids = {},
        this.lineItemRanges = [],
        this.impIds = []
    };
    function To(e) {
        return "conditionalEvent" === e.name
    }
    var Po = (
            Uo.prototype.push = function () {
                for (var e = [], t = 0; t < arguments.length; t++) 
                    e[t] = arguments[t];
                for (var i = 0, n = e; i < n.length; i++) {
                    var o = n[i];
                    this
                        .events
                        .push(o)
                }
                this.evalEvents()
            },
            Uo.prototype.evalEvents = function () {
                for (var e = 0; e < this.events.length;) {
                    var t = this.events[e];
                    if (To(t) && !t.canEval()) 
                        e++;
                    else {
                        var i = this
                            .events
                            .splice(e, 1);
                        try {
                            i[0].eval(this)
                        } catch (e) {
                            O.Error("An exception occurred processing an event: " + e.toString())
                        }
                    }
                }
            },
            Uo.VERSION = Z,
            Uo
        ),
        Ro,
        ko,
        xo,
        Oo,
        Mo,
        Do;
    function Uo(e) {
        var t;
        void 0 === e && (
            e = null === (t = window["Criteo_135"] || window.Criteo) || void 0 === t
                ? void 0
                : t.config
        ),
        this.standaloneBidder = new So,
        this.events = [],
        this.context = new _o(document, window, void 0, void 0, e),
        O.Debug("Publisher Tag loaded")
    }
    function Bo(e) {
        window.criteo_pubtag && window.criteo_pubtag.context && "serviceProvider" in window.criteo_pubtag.context || (
            Wn.LoadPolyfills(),
            window.criteo_pubtag = new Po,
            window["criteo_pubtag_135"] = window.criteo_pubtag
        ),
        window.Criteo = Fo(window.Criteo || {}, e),
        window["Criteo_135"] = window.Criteo,
        O.Debug(
            "Publisher Tag initialized with window.criteo_pubtag|criteo_pubtag_135, window." +
            "Criteo|Criteo_135"
        )
    }
    function Fo(e, t) {
        if (No(e) && No(t)) 
            for (var i in t) 
                if (No(t[i])) {
                    if (!No(e[i]) && void 0 !== e[i]) 
                        continue;
                    No(e[i]) || (e[i] = {}),
                    Fo(e[i], t[i])
                }
            else 
            void 0 === e[i] && (e[i] = t[i]);
        return e
    }
    function No(e) {
        return e && "object" == typeof e && !Array.isArray(e)
    }
    Bo(En({
        CallRTA: An,
        SetTargeting: Sn,
        DisplayAd: wn,
        DisplayAcceptableAdIfAdblocked: bn,
        ComputeStandaloneDFPTargeting: ui,
        GetBids: mi,
        GetBidsForAdUnit: gi,
        RenderAd: hi,
        RequestBids: ri,
        RequestBidsOnGoogleTagSlots: si,
        SetDFPKeyValueTargeting: li,
        SetLineItemRanges: ci,
        SetCeh: Oi,
        SetCCPAExplicitOptOut: Ii,
        SetPublisherExt: Ei,
        SetUserExt: _i,
        SetSlotsExt: Ai,
        SetIdentities: Si,
        SetDFPVideoKeyValueTargeting: Ti,
        Passback: {
            RequestBids: xn,
            RenderAd: On
        },
        PubTag: {
            Adapters: {
                AMP: Pi,
                Prebid: Ni
            },
            Context: {
                SetIdfs: xi,
                GetIdfs: ki
            },
            DirectBidding: {
                DirectBiddingEvent: He,
                DirectBiddingSlot: qt,
                DirectBiddingUrlBuilder: $,
                Size: Vt
            },
            RTA: {
                DefaultCrtgContentName: Tn,
                DefaultCrtgRtaCookieName: Pn
            }
        },
        events: null !== (
            ko = null === (Ro = window.Criteo) || void 0 === Ro
                ? void 0
                : Ro.events
        ) && void 0 !== ko
            ? ko
            : [],
        passbackEvents: null !== (
            Oo = null === (xo = window.Criteo) || void 0 === xo
                ? void 0
                : xo.passbackEvents
        ) && void 0 !== Oo
            ? Oo
            : [],
        usePrebidEvents: null === (
            Do = null === (Mo = window.Criteo) || void 0 === Mo
                ? void 0
                : Mo.usePrebidEvents
        ) || void 0 === Do || Do
    })),
    window.Criteo.events = _n(window.Criteo.events)
}();