'use strict';
var ba, ha, ma, na, pa, sa, ta, va, xa, za, Aa, Da, Ea, Fa, Ia, Ja, Ka, La, Ma, Na, Oa, Pa, Ra, Sa, Ta, Ua, Va, B, Wa, Xa, Ya, $a, ab, bb, cb, db, gb, hb, ib, jb, lb, mb, nb, ob, pb, qb, rb, sb, tb, ub, vb, wb, xb, yb, zb, Ab, Bb, Cb, Db, Hb, Jb, Kb, Lb, Mb, Nb, Ob, Pb, Qb, Rb, Sb, Ub, Vb, Wb, hc, ic, jc, kc, lc, mc, nc, oc, pc, qc, rc, sc, tc, uc, vc, Bc, Cc, Dc, Ec, Fc, Gc, Hc, Ic, Jc, Kc, Lc, Mc, Nc, Oc, Pc, Qc, Rc = {};
"function" !== typeof Object.getPrototypeOf && (Object.getPrototypeOf = "object" === typeof "test".__proto__ ? function(f) {
    return f.__proto__
} : function(f) {
    return f.constructor.prototype
});
(function() {
    function f(a, b, g, c) {
        this.set(a, b, g, c)
    }

    function h() {
        this.Zb = this.Yb = this.ac = this.$b = this.pc = this.oc = this.sb = this.rb = 0
    }

    function e(a, b, g, c) {
        a < b ? g < c ? (Q = a < g ? a : g, J = b > c ? b : c) : (Q = a < c ? a : c, J = b > g ? b : g) : g < c ? (Q = b < g ? b : g, J = a > c ? a : c) : (Q = b < c ? b : c, J = a > g ? a : g)
    }

    function l() {
        this.items = this.nd = null;
        this.Wk = 0;
        w && (this.nd = new Set);
        this.ak = [];
        this.zg = !0
    }

    function r(a) {
        v[y++] = a
    }

    function m() {
        this.Da = this.Wb = this.y = this.If = 0
    }

    function d(a) {
        this.Sb = [];
        this.rm = this.um = this.vm = this.tm = 0;
        this.Nl(a)
    }

    function a(a, b) {
        this.cq = a;
        this.bq = b;
        this.cells = {}
    }

    function b(a, b) {
        this.cq = a;
        this.bq = b;
        this.cells = {}
    }

    function c(a, b, g) {
        var c;
        return x.length ? (c = x.pop(), c.Tq = a, c.x = b, c.y = g, c) : new ha(a, b, g)
    }

    function g(a, b, g) {
        this.Tq = a;
        this.x = b;
        this.y = g;
        this.xc = new ma
    }

    function k(a, b, g) {
        var c;
        return u.length ? (c = u.pop(), c.Tq = a, c.x = b, c.y = g, c) : new na(a, b, g)
    }

    function p(a, b, g) {
        this.Tq = a;
        this.x = b;
        this.y = g;
        this.xc = [];
        this.fj = !0;
        this.rf = new ma;
        this.ik = !1
    }

    function q(a, b) {
        return a.Ze - b.Ze
    }
    pa = function(a) {
        window.console && window.console.log && window.console.log(a)
    };
    sa = function(a) {
        window.console && window.console.error && window.console.error(a)
    };
    ba = function(a) {
        return a
    };
    ta = function(a) {
        return "undefined" === typeof a
    };
    va = function(a) {
        return "number" === typeof a
    };
    xa = function(a) {
        return "string" === typeof a
    };
    za = function(a) {
        return 0 < a && 0 === (a - 1 & a)
    };
    Aa = function(a) {
        --a;
        for (var b = 1; 32 > b; b <<= 1) a = a | a >> b;
        return a + 1
    };
    Da = function(a) {
        return 0 > a ? -a : a
    };
    Ea = function(a, b) {
        return a > b ? a : b
    };
    Fa = function(a, b) {
        return a < b ? a : b
    };
    Ia = Math.PI;
    Ja = function(a) {
        return 0 <= a ? a | 0 : (a | 0) - 1
    };
    Ka = function(a) {
        var b = a | 0;
        return b === a ? b : b + 1
    };
    La = function(a, b, g, c, k, n, p, t) {
        var q, d, e, h;
        a < g ? (d = a, q = g) : (d = g, q = a);
        k < p ? (h = k, e = p) : (h = p, e = k);
        if (q < h || d > e) return !1;
        b < c ? (d = b, q = c) : (d = c, q = b);
        n < t ? (h = n, e = t) : (h = t, e = n);
        if (q < h || d > e) return !1;
        q = k - a + p - g;
        d = n - b + t - c;
        a = g - a;
        b = c - b;
        k = p - k;
        n = t - n;
        t = Da(b * k - n * a);
        return Da(k * d - n * q) > t ? !1 : Da(a * d - b * q) <= t
    };
    f.prototype.set = function(a, b, g, c) {
        this.left = a;
        this.top = b;
        this.right = g;
        this.bottom = c
    };
    f.prototype.Ki = function(a) {
        this.left = a.left;
        this.top = a.top;
        this.right = a.right;
        this.bottom = a.bottom
    };
    f.prototype.width = function() {
        return this.right - this.left
    };
    f.prototype.height = function() {
        return this.bottom - this.top
    };
    f.prototype.offset = function(a, b) {
        this.left += a;
        this.top += b;
        this.right += a;
        this.bottom += b;
        return this
    };
    f.prototype.normalize = function() {
        var a = 0;
        this.left > this.right && (a = this.left, this.left = this.right, this.right = a);
        this.top > this.bottom && (a = this.top, this.top = this.bottom, this.bottom = a)
    };
    f.prototype.FD = function(a) {
        return !(a.right < this.left || a.bottom < this.top || a.left > this.right || a.top > this.bottom)
    };
    f.prototype.GD = function(a, b, g) {
        return !(a.right + b < this.left || a.bottom + g < this.top || a.left + b > this.right || a.top + g > this.bottom)
    };
    f.prototype.Mc = function(a, b) {
        return a >= this.left && a <= this.right && b >= this.top && b <= this.bottom
    };
    f.prototype.wk = function(a) {
        return this.left === a.left && this.top === a.top && this.right === a.right && this.bottom === a.bottom
    };
    Ma = f;
    h.prototype.Ij = function(a) {
        this.rb = a.left;
        this.sb = a.top;
        this.oc = a.right;
        this.pc = a.top;
        this.$b = a.right;
        this.ac = a.bottom;
        this.Yb = a.left;
        this.Zb = a.bottom
    };
    h.prototype.Mx = function(a, b) {
        if (0 === b) this.Ij(a);
        else {
            var g = Math.sin(b),
                c = Math.cos(b),
                k = a.left * g,
                n = a.top * g,
                p = a.right * g,
                g = a.bottom * g,
                t = a.left * c,
                q = a.top * c,
                d = a.right * c,
                c = a.bottom * c;
            this.rb = t - n;
            this.sb = q + k;
            this.oc = d - n;
            this.pc = q + p;
            this.$b = d - g;
            this.ac = c + p;
            this.Yb = t - g;
            this.Zb = c + k
        }
    };
    h.prototype.offset = function(a, b) {
        this.rb += a;
        this.sb += b;
        this.oc += a;
        this.pc += b;
        this.$b += a;
        this.ac += b;
        this.Yb += a;
        this.Zb += b;
        return this
    };
    var Q = 0,
        J = 0;
    h.prototype.mu = function(a) {
        e(this.rb, this.oc, this.$b, this.Yb);
        a.left = Q;
        a.right = J;
        e(this.sb, this.pc, this.ac, this.Zb);
        a.top = Q;
        a.bottom = J
    };
    h.prototype.Mc = function(a, b) {
        var g = this.rb,
            c = this.sb,
            k = this.oc - g,
            n = this.pc - c,
            p = this.$b - g,
            t = this.ac - c,
            q = a - g,
            d = b - c,
            e = k * k + n * n,
            h = k * p + n * t,
            n = k * q + n * d,
            m = p * p + t * t,
            l = p * q + t * d,
            f = 1 / (e * m - h * h),
            k = (m * n - h * l) * f,
            e = (e * l - h * n) * f;
        if (0 <= k && 0 < e && 1 > k + e) return !0;
        k = this.Yb - g;
        n = this.Zb - c;
        e = k * k + n * n;
        h = k * p + n * t;
        n = k * q + n * d;
        f = 1 / (e * m - h * h);
        k = (m * n - h * l) * f;
        e = (e * l - h * n) * f;
        return 0 <= k && 0 < e && 1 > k + e
    };
    h.prototype.He = function(a, b) {
        if (b) switch (a) {
            case 0:
                return this.rb;
            case 1:
                return this.oc;
            case 2:
                return this.$b;
            case 3:
                return this.Yb;
            case 4:
                return this.rb;
            default:
                return this.rb
        } else switch (a) {
            case 0:
                return this.sb;
            case 1:
                return this.pc;
            case 2:
                return this.ac;
            case 3:
                return this.Zb;
            case 4:
                return this.sb;
            default:
                return this.sb
        }
    };
    h.prototype.pw = function() {
        return (this.rb + this.oc + this.$b + this.Yb) / 4
    };
    h.prototype.qw = function() {
        return (this.sb + this.pc + this.ac + this.Zb) / 4
    };
    h.prototype.yv = function(a) {
        var b = a.pw(),
            g = a.qw();
        if (this.Mc(b, g)) return !0;
        b = this.pw();
        g = this.qw();
        if (a.Mc(b, g)) return !0;
        var c, k, n, p, t, q, d, e;
        for (d = 0; 4 > d; d++)
            for (e = 0; 4 > e; e++)
                if (b = this.He(d, !0), g = this.He(d, !1), c = this.He(d + 1, !0), k = this.He(d + 1, !1), n = a.He(e, !0), p = a.He(e, !1), t = a.He(e + 1, !0), q = a.He(e + 1, !1), La(b, g, c, k, n, p, t, q)) return !0;
        return !1
    };
    Na = h;
    Oa = function(a, b, g) {
        return Math.max(Math.min(a, 255), 0) | Math.max(Math.min(b, 255), 0) << 8 | Math.max(Math.min(g, 255), 0) << 16
    };
    Pa = function(a) {
        return a & 255
    };
    Ra = function(a) {
        return (a & 65280) >> 8
    };
    Sa = function(a) {
        return (a & 16711680) >> 16
    };
    Ta = function(a, b) {
        for (var g in b) b.hasOwnProperty(g) && (a[g] = b[g]);
        return a
    };
    Ua = function(a, b) {
        var g, c;
        b = Ja(b);
        if (!(0 > b || b >= a.length)) {
            g = b;
            for (c = a.length - 1; g < c; g++) a[g] = a[g + 1];
            Va(a, c)
        }
    };
    Va = function(a, b) {
        a.length = b
    };
    B = function(a) {
        Va(a, 0)
    };
    Wa = function(a, b) {
        B(a);
        var g, c;
        g = 0;
        for (c = b.length; g < c; ++g) a[g] = b[g]
    };
    Xa = function(a, b) {
        a.push.apply(a, b)
    };
    Ya = function(a, b) {
        var g, c;
        g = 0;
        for (c = a.length; g < c; ++g)
            if (a[g] === b) return g;
        return -1
    };
    $a = function(a, b) {
        var g = Ya(a, b); - 1 !== g && Ua(a, g)
    };
    ab = function(a, b, g) {
        return a < b ? b : a > g ? g : a
    };
    bb = function(a) {
        return a / (180 / Ia)
    };
    cb = function(a) {
        return 180 / Ia * a
    };
    db = function(a) {
        a %= 360;
        0 > a && (a += 360);
        return a
    };
    gb = function(a) {
        a %= 2 * Ia;
        0 > a && (a += 2 * Ia);
        return a
    };
    hb = function(a) {
        return db(cb(a))
    };
    ib = function(a) {
        return gb(bb(a))
    };
    jb = function(a, b, g, c) {
        return Math.atan2(c - b, g - a)
    };
    lb = function(a, b) {
        if (a === b) return 0;
        var g = Math.sin(a),
            c = Math.cos(a),
            k = Math.sin(b),
            n = Math.cos(b),
            g = g * k + c * n;
        return 1 <= g ? 0 : -1 >= g ? Ia : Math.acos(g)
    };
    mb = function(a, b, g) {
        var c = Math.sin(a),
            k = Math.cos(a),
            n = Math.sin(b),
            p = Math.cos(b);
        return Math.acos(c * n + k * p) > g ? 0 < k * n - c * p ? gb(a + g) : gb(a - g) : gb(b)
    };
    nb = function(a, b) {
        var g = Math.sin(a),
            c = Math.cos(a),
            k = Math.sin(b),
            n = Math.cos(b);
        return 0 >= c * k - g * n
    };
    ob = function(a, b, g, c, k, n) {
        if (0 === g) return n ? a : b;
        var p = Math.sin(g);
        g = Math.cos(g);
        a -= c;
        b -= k;
        var t = a * p;
        a = a * g - b * p;
        b = b * g + t;
        return n ? a + c : b + k
    };
    pb = function(a, b, g, c) {
        a = g - a;
        b = c - b;
        return Math.sqrt(a * a + b * b)
    };
    qb = function(a, b) {
        return !a !== !b
    };
    rb = function(a) {
        for (var b in a)
            if (a.hasOwnProperty(b)) return !0;
        return !1
    };
    sb = function(a) {
        for (var b in a) a.hasOwnProperty(b) && delete a[b]
    };
    var z = +new Date;
    tb = function() {
        if ("undefined" !== typeof window.performance) {
            var a = window.performance;
            if ("undefined" !== typeof a.now) return a.now();
            if ("undefined" !== typeof a.webkitNow) return a.webkitNow();
            if ("undefined" !== typeof a.mozNow) return a.mozNow();
            if ("undefined" !== typeof a.msNow) return a.msNow()
        }
        return Date.now() - z
    };
    var n = !1,
        D = n = !1,
        E = !1;
    "undefined" !== typeof window && (n = /chrome/i.test(navigator.userAgent) || /chromium/i.test(navigator.userAgent), n = !n && /safari/i.test(navigator.userAgent), D = /(iphone|ipod|ipad)/i.test(navigator.userAgent), E = window.c2ejecta);
    var w = !n && !E && !D && "undefined" !== typeof Set && "undefined" !== typeof Set.prototype.forEach;
    l.prototype.contains = function(a) {
        return this.Vf() ? !1 : w ? this.nd.has(a) : this.items && this.items.hasOwnProperty(a)
    };
    l.prototype.add = function(a) {
        if (w) this.nd.has(a) || (this.nd.add(a), this.zg = !1);
        else {
            var b = a.toString(),
                g = this.items;
            g ? g.hasOwnProperty(b) || (g[b] = a, this.Wk++, this.zg = !1) : (this.items = {}, this.items[b] = a, this.Wk = 1, this.zg = !1)
        }
    };
    l.prototype.remove = function(a) {
        if (!this.Vf())
            if (w) this.nd.has(a) && (this.nd["delete"](a), this.zg = !1);
            else if (this.items) {
            a = a.toString();
            var b = this.items;
            b.hasOwnProperty(a) && (delete b[a], this.Wk--, this.zg = !1)
        }
    };
    l.prototype.clear = function() {
        this.Vf() || (w ? this.nd.clear() : (this.items = null, this.Wk = 0), B(this.ak), this.zg = !0)
    };
    l.prototype.Vf = function() {
        return 0 === this.count()
    };
    l.prototype.count = function() {
        return w ? this.nd.size : this.Wk
    };
    var v = null,
        y = 0;
    l.prototype.TF = function() {
        if (!this.zg) {
            if (w) B(this.ak), v = this.ak, y = 0, this.nd.forEach(r), v = null, y = 0;
            else {
                var a = this.ak;
                B(a);
                var b, g = 0,
                    c = this.items;
                if (c)
                    for (b in c) c.hasOwnProperty(b) && (a[g++] = c[b])
            }
            this.zg = !0
        }
    };
    l.prototype.qh = function() {
        this.TF();
        return this.ak
    };
    ma = l;
    new ma;
    ub = function(a, b) {
        w ? vb(a, b.nd) : wb(a, b.qh())
    };
    vb = function(a, b) {
        var g, c, k, n;
        c = g = 0;
        for (k = a.length; g < k; ++g) n = a[g], b.has(n) || (a[c++] = n);
        Va(a, c)
    };
    wb = function(a, b) {
        var g, c, k, n;
        c = g = 0;
        for (k = a.length; g < k; ++g) n = a[g], -1 === Ya(b, n) && (a[c++] = n);
        Va(a, c)
    };
    m.prototype.add = function(a) {
        this.y = a - this.If;
        this.Wb = this.Da + this.y;
        this.If = this.Wb - this.Da - this.y;
        this.Da = this.Wb
    };
    m.prototype.reset = function() {
        this.Da = this.Wb = this.y = this.If = 0
    };
    xb = m;
    yb = function(a) {
        return a.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&")
    };
    d.prototype.Nl = function(a) {
        this.jx = a;
        this.ve = a.length / 2;
        this.Sb.length = a.length;
        this.ym = this.zm = -1;
        this.pu = 0
    };
    d.prototype.Zh = function() {
        return !this.jx.length
    };
    d.prototype.La = function() {
        for (var a = this.Sb, b = a[0], g = b, c = a[1], k = c, n, p, t = 1, q = this.ve; t < q; ++t) p = 2 * t, n = a[p], p = a[p + 1], n < b && (b = n), n > g && (g = n), p < c && (c = p), p > k && (k = p);
        this.tm = b;
        this.um = g;
        this.vm = c;
        this.rm = k
    };
    d.prototype.Ij = function(a, b, g) {
        this.Sb.length = 8;
        this.ve = 4;
        var c = this.Sb;
        c[0] = a.left - b;
        c[1] = a.top - g;
        c[2] = a.right - b;
        c[3] = a.top - g;
        c[4] = a.right -
            b;
        c[5] = a.bottom - g;
        c[6] = a.left - b;
        c[7] = a.bottom - g;
        this.zm = a.right - a.left;
        this.ym = a.bottom - a.top;
        this.La()
    };
    d.prototype.Hj = function(a, b, g, c, k) {
        this.Sb.length = 8;
        this.ve = 4;
        var n = this.Sb;
        n[0] = a.rb - b;
        n[1] = a.sb - g;
        n[2] = a.oc - b;
        n[3] = a.pc - g;
        n[4] = a.$b - b;
        n[5] = a.ac - g;
        n[6] = a.Yb - b;
        n[7] = a.Zb - g;
        this.zm = c;
        this.ym = k;
        this.La()
    };
    d.prototype.Lx = function(a) {
        this.ve = a.ve;
        Wa(this.Sb, a.Sb);
        this.tm = a.tm;
        this.vm - a.vm;
        this.um = a.um;
        this.rm = a.rm
    };
    d.prototype.Hh = function(a, b, g) {
        if (this.zm !== a || this.ym !== b || this.pu !== g) {
            this.zm = a;
            this.ym = b;
            this.pu = g;
            var c, k, n, p, t, q = 0,
                d = 1,
                e = this.jx,
                h = this.Sb;
            0 !== g && (q = Math.sin(g), d = Math.cos(g));
            g = 0;
            for (n = this.ve; g < n; g++) c = 2 * g, k = c + 1, p = e[c] * a, t = e[k] * b, h[c] = p * d - t * q, h[k] = t * d + p * q;
            this.La()
        }
    };
    d.prototype.Mc = function(a, b) {
        var g = this.Sb;
        if (a === g[0] && b === g[1]) return !0;
        var c, k, n, p = this.ve,
            t = this.tm - 110,
            q = this.vm - 101,
            d = this.um + 131,
            e = this.rm + 120,
            h, m, l = 0,
            f = 0;
        for (c = 0; c < p; c++) k = 2 * c, n = (c + 1) % p * 2, h = g[k], k = g[k + 1], m = g[n], n = g[n + 1], La(t, q, a, b, h, k, m, n) && l++, La(d, e, a, b, h, k, m, n) && f++;
        return 1 === l % 2 || 1 === f % 2
    };
    d.prototype.Mk = function(a, b, g) {
        var c = a.Sb,
            k = this.Sb;
        if (this.Mc(c[0] + b, c[1] + g) || a.Mc(k[0] - b, k[1] - g)) return !0;
        var n, p, t, q, d, e, h, m, l, f, r, D;
        n = 0;
        for (q = this.ve; n < q; n++)
            for (p = 2 * n, t = (n + 1) % q * 2, m = k[p], p = k[p + 1], l = k[t], f = k[t + 1], t = 0, h = a.ve; t < h; t++)
                if (d = 2 * t, e = (t + 1) % h * 2, r = c[d] + b, d = c[d + 1] + g, D = c[e] + b, e = c[e + 1] + g, La(m, p, l, f, r, d, D, e)) return !0;
        return !1
    };
    zb = d;
    a.prototype.Jg = function(a, b, g) {
        var k;
        k = this.cells[a];
        return k ? (k = k[b]) ? k : g ? (k = c(this, a, b), this.cells[a][b] = k) : null : g ? (k = c(this, a, b), this.cells[a] = {}, this.cells[a][b] = k) : null
    };
    a.prototype.ed = function(a) {
        return Ja(a / this.cq)
    };
    a.prototype.fd = function(a) {
        return Ja(a / this.bq)
    };
    a.prototype.update = function(a, b, g) {
        var c, k, n, p, t;
        if (b)
            for (c = b.left, k = b.right; c <= k; ++c)
                for (n = b.top, p = b.bottom; n <= p; ++n)
                    if (!g || !g.Mc(c, n))
                        if (t = this.Jg(c, n, !1)) t.remove(a), t.Vf() && (t.xc.clear(), 1E3 > x.length && x.push(t), this.cells[c][n] = null);
        if (g)
            for (c = g.left, k = g.right; c <= k; ++c)
                for (n = g.top, p = g.bottom; n <= p; ++n) b && b.Mc(c, n) || this.Jg(c, n, !0).Pg(a)
    };
    a.prototype.zo = function(a, b) {
        var g, c, k, n, p, t;
        g = this.ed(a.left);
        k = this.fd(a.top);
        c = this.ed(a.right);
        for (p = this.fd(a.bottom); g <= c; ++g)
            for (n = k; n <= p; ++n)(t = this.Jg(g, n, !1)) && t.dump(b)
    };
    Ab = a;
    b.prototype.Jg = function(a, b, g) {
        var c;
        c = this.cells[a];
        return c ? (c = c[b]) ? c : g ? (c = k(this, a, b), this.cells[a][b] = c) : null : g ? (c = k(this, a, b), this.cells[a] = {}, this.cells[a][b] = c) : null
    };
    b.prototype.ed = function(a) {
        return Ja(a / this.cq)
    };
    b.prototype.fd = function(a) {
        return Ja(a / this.bq)
    };
    b.prototype.update = function(a, b, g) {
        var c, k, n, p, t;
        if (b)
            for (c = b.left, k = b.right; c <= k; ++c)
                for (n = b.top, p = b.bottom; n <= p; ++n)
                    if (!g || !g.Mc(c, n))
                        if (t = this.Jg(c, n, !1)) t.remove(a), t.Vf() && (t.reset(), 1E3 > u.length && u.push(t), this.cells[c][n] = null);
        if (g)
            for (c = g.left, k = g.right; c <= k; ++c)
                for (n = g.top, p = g.bottom; n <= p; ++n) b && b.Mc(c, n) || this.Jg(c, n, !0).Pg(a)
    };
    b.prototype.zo = function(a, b, g, c, k) {
        var n, p;
        a = this.ed(a);
        b = this.fd(b);
        g = this.ed(g);
        for (n = this.fd(c); a <= g; ++a)
            for (c = b; c <= n; ++c)(p = this.Jg(a, c, !1)) && p.dump(k)
    };
    b.prototype.fE = function(a) {
        var b, g, c, k, n;
        b = a.left;
        c = a.top;
        g = a.right;
        for (k = a.bottom; b <= g; ++b)
            for (a = c; a <= k; ++a)
                if (n = this.Jg(b, a, !1)) n.fj = !1
    };
    Bb = b;
    var x = [];
    g.prototype.Vf = function() {
        return this.xc.Vf()
    };
    g.prototype.Pg = function(a) {
        this.xc.add(a)
    };
    g.prototype.remove = function(a) {
        this.xc.remove(a)
    };
    g.prototype.dump = function(a) {
        Xa(a, this.xc.qh())
    };
    ha = g;
    var u = [];
    p.prototype.Vf = function() {
        if (!this.xc.length) return !0;
        if (this.xc.length > this.rf.count()) return !1;
        this.Dq();
        return !0
    };
    p.prototype.Pg = function(a) {
        this.rf.contains(a) ? (this.rf.remove(a), this.rf.Vf() && (this.ik = !1)) : this.xc.length ? (this.xc[this.xc.length - 1].kf() > a.kf() && (this.fj = !1), this.xc.push(a)) : (this.xc.push(a), this.fj = !0)
    };
    p.prototype.remove = function(a) {
        this.rf.add(a);
        this.ik = !0;
        30 <= this.rf.count() && this.Dq()
    };
    p.prototype.Dq = function() {
        this.ik && (this.rf.count() === this.xc.length ? this.reset() : (ub(this.xc, this.rf), this.rf.clear(), this.ik = !1))
    };
    p.prototype.hC = function() {
        this.fj || (this.xc.sort(q), this.fj = !0)
    };
    p.prototype.reset = function() {
        B(this.xc);
        this.fj = !0;
        this.rf.clear();
        this.ik = !1
    };
    p.prototype.dump = function(a) {
        this.Dq();
        this.hC();
        this.xc.length && a.push(this.xc)
    };
    na = p;
    var G = "lighter xor copy destination-over source-in destination-in source-out destination-out source-atop destination-atop".split(" ");
    Cb = function(a) {
        return 0 >= a || 11 <= a ? "source-over" : G[a - 1]
    };
    Db = function(a, b, g) {
        if (g) switch (a.fb = g.ONE, a.eb = g.ONE_MINUS_SRC_ALPHA, b) {
            case 1:
                a.fb = g.ONE;
                a.eb = g.ONE;
                break;
            case 3:
                a.fb = g.ONE;
                a.eb = g.ZERO;
                break;
            case 4:
                a.fb = g.ONE_MINUS_DST_ALPHA;
                a.eb = g.ONE;
                break;
            case 5:
                a.fb = g.DST_ALPHA;
                a.eb = g.ZERO;
                break;
            case 6:
                a.fb = g.ZERO;
                a.eb = g.SRC_ALPHA;
                break;
            case 7:
                a.fb = g.ONE_MINUS_DST_ALPHA;
                a.eb = g.ZERO;
                break;
            case 8:
                a.fb = g.ZERO;
                a.eb = g.ONE_MINUS_SRC_ALPHA;
                break;
            case 9:
                a.fb = g.DST_ALPHA;
                a.eb = g.ONE_MINUS_SRC_ALPHA;
                break;
            case 10:
                a.fb = g.ONE_MINUS_DST_ALPHA, a.eb = g.SRC_ALPHA
        }
    };
    Hb = function(a) {
        return Math.round(1E6 * a) / 1E6
    };
    Jb = function(a, b) {
        return "string" !== typeof a || "string" !== typeof b || a.length !== b.length ? !1 : a === b ? !0 : a.toLowerCase() === b.toLowerCase()
    };
    Kb = function(a) {
        a = a.target;
        return !a || a === document || a === window || document && document.body && a === document.body || Jb(a.tagName, "canvas") ? !0 : !1
    }
})();
var Sc = "undefined" !== typeof Float32Array ? Float32Array : Array;

function Tc(f) {
    var h = new Sc(3);
    f && (h[0] = f[0], h[1] = f[1], h[2] = f[2]);
    return h
}

function Uc(f) {
    var h = new Sc(16);
    f && (h[0] = f[0], h[1] = f[1], h[2] = f[2], h[3] = f[3], h[4] = f[4], h[5] = f[5], h[6] = f[6], h[7] = f[7], h[8] = f[8], h[9] = f[9], h[10] = f[10], h[11] = f[11], h[12] = f[12], h[13] = f[13], h[14] = f[14], h[15] = f[15]);
    return h
}

function Vc(f, h) {
    h[0] = f[0];
    h[1] = f[1];
    h[2] = f[2];
    h[3] = f[3];
    h[4] = f[4];
    h[5] = f[5];
    h[6] = f[6];
    h[7] = f[7];
    h[8] = f[8];
    h[9] = f[9];
    h[10] = f[10];
    h[11] = f[11];
    h[12] = f[12];
    h[13] = f[13];
    h[14] = f[14];
    h[15] = f[15]
}

function Wc(f, h) {
    var e = h[0],
        l = h[1];
    h = h[2];
    f[0] *= e;
    f[1] *= e;
    f[2] *= e;
    f[3] *= e;
    f[4] *= l;
    f[5] *= l;
    f[6] *= l;
    f[7] *= l;
    f[8] *= h;
    f[9] *= h;
    f[10] *= h;
    f[11] *= h
}

function Xc(f, h, e, l) {
    l || (l = Uc());
    var r, m, d, a, b, c, g, k, p = f[0],
        q = f[1];
    f = f[2];
    m = e[0];
    d = e[1];
    r = e[2];
    e = h[1];
    c = h[2];
    p === h[0] && q === e && f === c ? (f = l, f[0] = 1, f[1] = 0, f[2] = 0, f[3] = 0, f[4] = 0, f[5] = 1, f[6] = 0, f[7] = 0, f[8] = 0, f[9] = 0, f[10] = 1, f[11] = 0, f[12] = 0, f[13] = 0, f[14] = 0, f[15] = 1) : (e = p - h[0], c = q - h[1], g = f - h[2], k = 1 / Math.sqrt(e * e + c * c + g * g), e *= k, c *= k, g *= k, h = d * g - r * c, r = r * e - m * g, m = m * c - d * e, (k = Math.sqrt(h * h + r * r + m * m)) ? (k = 1 / k, h *= k, r *= k, m *= k) : m = r = h = 0, d = c * m - g * r, a = g * h - e * m, b = e * r - c * h, (k = Math.sqrt(d * d + a * a + b * b)) ? (k = 1 / k, d *= k, a *= k, b *= k) : b = a = d = 0, l[0] = h, l[1] = d, l[2] = e, l[3] = 0, l[4] = r, l[5] = a, l[6] = c, l[7] = 0, l[8] = m, l[9] = b, l[10] = g, l[11] = 0, l[12] = -(h * p + r * q + m * f), l[13] = -(d * p + a * q + b * f), l[14] = -(e * p + c * q + g * f), l[15] = 1)
}
(function() {
    function f(a, b, c) {
        this.Qg = /msie/i.test(navigator.userAgent) || /trident/i.test(navigator.userAgent);
        this.height = this.width = 0;
        this.hb = !!c;
        this.vn = this.Nk = !1;
        this.qq = 0;
        this.vp = 1;
        this.qt = 1E3;
        this.aG = (this.qt - this.vp) / 32768;
        this.$p = Tc([0, 0, 100]);
        this.Wv = Tc([0, 0, 0]);
        this.ly = Tc([0, 1, 0]);
        this.gm = Tc([1, 1, 1]);
        this.Ju = !0;
        this.Pn = Uc();
        this.Vd = Uc();
        this.ur = Uc();
        this.pq = Uc();
        this.L = a;
        this.version = 0 === this.L.getParameter(this.L.VERSION).indexOf("WebGL 2") ? 2 : 1;
        this.tv()
    }

    function h(a, b, c) {
        this.L = a;
        this.Ol = b;
        this.name = c;
        this.qe = a.getAttribLocation(b, "aPos");
        this.Yg = a.getAttribLocation(b, "aTex");
        this.Tv = a.getUniformLocation(b, "matP");
        this.Kn = a.getUniformLocation(b, "matMV");
        this.pj = a.getUniformLocation(b, "opacity");
        this.Ir = a.getUniformLocation(b, "colorFill");
        this.Uv = a.getUniformLocation(b, "samplerFront");
        this.kl = a.getUniformLocation(b, "samplerBack");
        this.hi = a.getUniformLocation(b, "destStart");
        this.gi = a.getUniformLocation(b, "destEnd");
        this.ml = a.getUniformLocation(b, "seconds");
        this.Kr = a.getUniformLocation(b, "pixelWidth");
        this.Jr = a.getUniformLocation(b, "pixelHeight");
        this.jl = a.getUniformLocation(b, "layerScale");
        this.il = a.getUniformLocation(b, "layerAngle");
        this.nl = a.getUniformLocation(b, "viewOrigin");
        this.ll = a.getUniformLocation(b, "scrollPos");
        this.zD = !!(this.Kr || this.Jr || this.ml || this.kl || this.hi || this.gi || this.jl || this.il || this.nl || this.ll);
        this.fw = this.gw = -999;
        this.On = 1;
        this.aw = this.$v = 0;
        this.dw = this.Zv = this.Yv = 1;
        this.jw = this.iw = this.hw = this.lw = this.kw = this.bw = 0;
        this.tr = [];
        this.ew = Uc();
        this.pj && a.uniform1f(this.pj, 1);
        this.Ir && a.uniform4f(this.Ir, 1, 1, 1, 1);
        this.Uv && a.uniform1i(this.Uv, 0);
        this.kl && a.uniform1i(this.kl, 1);
        this.hi && a.uniform2f(this.hi, 0, 0);
        this.gi && a.uniform2f(this.gi, 1, 1);
        this.jl && a.uniform1f(this.jl, 1);
        this.il && a.uniform1f(this.il, 0);
        this.nl && a.uniform2f(this.nl, 0, 0);
        this.ll && a.uniform2f(this.ll, 0, 0);
        this.ml && a.uniform1f(this.ml, 0);
        this.Uh = !1
    }

    function e(a, b) {
        return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] && a[4] === b[4] && a[5] === b[5] && a[6] === b[6] && a[7] === b[7] && a[8] === b[8] && a[9] === b[9] && a[10] === b[10] && a[11] === b[11] && a[12] === b[12] && a[13] === b[13] && a[14] === b[14] && a[15] === b[15]
    }

    function l(a, b) {
        this.type = a;
        this.M = b;
        this.L = b.L;
        this.ne = this.Tc = this.Sw = 0;
        this.ra = this.ye = null;
        this.Nx = []
    }
    var r = Uc();
    f.prototype.tv = function() {
        var a = this.L,
            b;
        this.Iv = 1;
        this.bi = this.ai = null;
        this.Lm = 1;
        a.clearColor(0, 0, 0, 0);
        a.clear(a.COLOR_BUFFER_BIT);
        a.enable(a.BLEND);
        a.blendFunc(a.ONE, a.ONE_MINUS_SRC_ALPHA);
        a.disable(a.CULL_FACE);
        a.disable(a.STENCIL_TEST);
        a.disable(a.DITHER);
        this.hb ? (a.enable(a.DEPTH_TEST), a.depthFunc(a.LEQUAL)) : a.disable(a.DEPTH_TEST);
        this.Jv = a.ONE;
        this.Hv = a.ONE_MINUS_SRC_ALPHA;
        this.qp = new Float32Array(8E3 * (this.hb ? 3 : 2));
        this.Yo = new Float32Array(16E3);
        this.ls = new Float32Array(32E3);
        this.ks = a.createBuffer();
        a.bindBuffer(a.ARRAY_BUFFER, this.ks);
        a.bufferData(a.ARRAY_BUFFER, this.ls.byteLength, a.DYNAMIC_DRAW);
        this.fm = Array(4);
        this.Vl = Array(4);
        for (b = 0; 4 > b; b++) this.fm[b] = a.createBuffer(), a.bindBuffer(a.ARRAY_BUFFER, this.fm[b]), a.bufferData(a.ARRAY_BUFFER, this.qp.byteLength, a.DYNAMIC_DRAW), this.Vl[b] = a.createBuffer(), a.bindBuffer(a.ARRAY_BUFFER, this.Vl[b]), a.bufferData(a.ARRAY_BUFFER, this.Yo.byteLength, a.DYNAMIC_DRAW);
        this.Kf = 0;
        this.CD = a.createBuffer();
        a.bindBuffer(a.ELEMENT_ARRAY_BUFFER, this.CD);
        for (var c = new Uint16Array(12E3), g = b = 0; 12E3 > b;) c[b++] = g, c[b++] = g + 1, c[b++] = g + 2, c[b++] = g, c[b++] = g + 2, c[b++] = g + 3, g += 4;
        a.bufferData(a.ELEMENT_ARRAY_BUFFER, c, a.STATIC_DRAW);
        this.Aj = this.Oj = this.ng = 0;
        this.Bb = [];
        b = this.hb ? "attribute highp vec3 aPos;\nattribute mediump vec2 aTex;\nvarying mediump vec2 vTex;\nuniform highp mat4 matP;\nuniform highp mat4 matMV;\nvoid main(void) {\n\tgl_Position = matP * matMV * vec4(aPos.x, aPos.y, aPos.z, 1.0);\n\tvTex = aTex;\n}" : "attribute highp vec2 aPos;\nattribute mediump vec2 aTex;\nvarying mediump vec2 vTex;\nuniform highp mat4 matP;\nuniform highp mat4 matMV;\nvoid main(void) {\n\tgl_Position = matP * matMV * vec4(aPos.x, aPos.y, 0.0, 1.0);\n\tvTex = aTex;\n}";
        c = this.nk({
            src: "varying mediump vec2 vTex;\nuniform lowp float opacity;\nuniform lowp sampler2D samplerFront;\nvoid main(void) {\n\tgl_FragColor = texture2D(samplerFront, vTex);\n\tgl_FragColor *= opacity;\n}"
        }, b, "<default>");
        this.Bb.push(c);
        c = this.nk({
            src: "uniform mediump sampler2D samplerFront;\nvarying lowp float opacity;\nvoid main(void) {\n\tgl_FragColor = texture2D(samplerFront, gl_PointCoord);\n\tgl_FragColor *= opacity;\n}"
        }, "attribute vec4 aPos;\nvarying float opacity;\nuniform mat4 matP;\nuniform mat4 matMV;\nvoid main(void) {\n\tgl_Position = matP * matMV * vec4(aPos.x, aPos.y, 0.0, 1.0);\n\tgl_PointSize = aPos.z;\n\topacity = aPos.w;\n}", "<point>");
        this.Bb.push(c);
        c = this.nk({
            src: "varying mediump vec2 vTex;\nuniform lowp sampler2D samplerFront;\nvoid main(void) {\n\tif (texture2D(samplerFront, vTex).a < 1.0)\n\t\tdiscard;\n}"
        }, b, "<earlyz>");
        this.Bb.push(c);
        c = this.nk({
            src: "uniform lowp vec4 colorFill;\nvoid main(void) {\n\tgl_FragColor = colorFill;\n}"
        }, b, "<fill>");
        this.Bb.push(c);
        for (var k in Yc) Yc.hasOwnProperty(k) && this.Bb.push(this.nk(Yc[k], b, k));
        a.activeTexture(a.TEXTURE0);
        a.bindTexture(a.TEXTURE_2D, null);
        this.Hf = [];
        this.cf = 0;
        this.Qc = this.Dc = !1;
        this.Cu = this.cl = -1;
        this.Mi = null;
        this.Bq = a.createFramebuffer();
        this.Pm = this.Co = null;
        this.ju = !1;
        this.hb && (this.Pm = a.createRenderbuffer());
        this.ph = Tc([0, 0, 0]);
        a = a.getParameter(a.ALIASED_POINT_SIZE_RANGE);
        this.iE = a[0];
        this.Nr = a[1];
        2048 < this.Nr && (this.Nr = 2048);
        this.rd(0)
    };
    h.prototype.dt = function(a) {
        e(this.ew, a) || (Vc(a, this.ew), this.L.uniformMatrix4fv(this.Kn, !1, a))
    };
    f.prototype.nk = function(a, b, c) {
        var g = this.L,
            k = g.createShader(g.FRAGMENT_SHADER);
        g.shaderSource(k, a.src);
        g.compileShader(k);
        if (!g.getShaderParameter(k, g.COMPILE_STATUS)) throw a = g.getShaderInfoLog(k), g.deleteShader(k), Error("error compiling fragment shader: " + a);
        var p = g.createShader(g.VERTEX_SHADER);
        g.shaderSource(p, b);
        g.compileShader(p);
        if (!g.getShaderParameter(p, g.COMPILE_STATUS)) throw a = g.getShaderInfoLog(p), g.deleteShader(k), g.deleteShader(p), Error("error compiling vertex shader: " + a);
        b = g.createProgram();
        g.attachShader(b, k);
        g.attachShader(b, p);
        g.linkProgram(b);
        if (!g.getProgramParameter(b, g.LINK_STATUS)) throw a = g.getProgramInfoLog(b), g.deleteShader(k), g.deleteShader(p), g.deleteProgram(b), Error("error linking shader program: " + a);
        g.useProgram(b);
        g.deleteShader(k);
        g.deleteShader(p);
        k = new h(g, b, c);
        k.Um = a.Um || 0;
        k.Vm = a.Vm || 0;
        k.oq = !!a.oq;
        k.ue = !!a.ue;
        k.Sp = !!a.Sp;
        k.na = a.na || [];
        a = 0;
        for (p = k.na.length; a < p; a++) k.na[a][1] = g.getUniformLocation(b, k.na[a][0]), k.tr.push(0), g.uniform1f(k.na[a][1], 0);
        return k
    };
    f.prototype.Pq = function(a) {
        var b, c;
        b = 0;
        for (c = this.Bb.length; b < c; b++)
            if (this.Bb[b].name === a) return b;
        return -1
    };
    f.prototype.xo = function(a, b, c) {
        var g = this.Vd,
            k = this.Pn,
            p = [0, 0, 0, 0, 0, 0, 0, 0];
        p[0] = g[0] * a + g[4] * b + g[12];
        p[1] = g[1] * a + g[5] * b + g[13];
        p[2] = g[2] * a + g[6] * b + g[14];
        p[3] = g[3] * a + g[7] * b + g[15];
        p[4] = k[0] * p[0] + k[4] * p[1] + k[8] * p[2] + k[12] * p[3];
        p[5] = k[1] * p[0] + k[5] * p[1] + k[9] * p[2] + k[13] * p[3];
        p[6] = k[2] * p[0] + k[6] * p[1] + k[10] * p[2] + k[14] * p[3];
        p[7] = -p[2];
        0 !== p[7] && (p[7] = 1 / p[7], p[4] *= p[7], p[5] *= p[7], p[6] *= p[7], c[0] = (.5 * p[4] + .5) * this.width, c[1] = (.5 * p[5] + .5) * this.height)
    };
    f.prototype.fg = function(a, b, c) {
        if (this.width !== a || this.height !== b || c) {
            this.Hg();
            c = this.L;
            this.width = a;
            this.height = b;
            c.viewport(0, 0, a, b);
            Xc(this.$p, this.Wv, this.ly, this.Vd);
            if (this.hb) {
                var g = -a / 2;
                a = a / 2;
                var k = b / 2;
                b = -b / 2;
                var p = this.vp,
                    q = this.qt,
                    d = this.Pn;
                d || (d = Uc());
                var e = a - g,
                    h = b - k,
                    n = q - p;
                d[0] = 2 / e;
                d[1] = 0;
                d[2] = 0;
                d[3] = 0;
                d[4] = 0;
                d[5] = 2 / h;
                d[6] = 0;
                d[7] = 0;
                d[8] = 0;
                d[9] = 0;
                d[10] = -2 / n;
                d[11] = 0;
                d[12] = -(g + a) / e;
                d[13] = -(b +
                    k) / h;
                d[14] = -(q + p) / n;
                d[15] = 1;
                this.gm[0] = 1;
                this.gm[1] = 1
            } else b = a / b, g = this.vp, a = this.qt, d = this.Pn, q = g * Math.tan(45 * Math.PI / 360), b *= q, k = -b, p = -q, d || (d = Uc()), e = b - k, h = q - p, n = a - g, d[0] = 2 * g / e, d[1] = 0, d[2] = 0, d[3] = 0, d[4] = 0, d[5] = 2 * g / h, d[6] = 0, d[7] = 0, d[8] = (b + k) / e, d[9] = (q + p) / h, d[10] = -(a + g) / n, d[11] = -1, d[12] = 0, d[13] = 0, d[14] = -(a * g * 2) / n, d[15] = 0, g = [0, 0], a = [0, 0], this.xo(0, 0, g), this.xo(1, 1, a), this.gm[0] = 1 / (a[0] - g[0]), this.gm[1] = -1 / (a[1] - g[1]);
            g = 0;
            for (a = this.Bb.length; g < a; g++) k = this.Bb[g], k.Uh = !1, k.Tv && (c.useProgram(k.Ol), c.uniformMatrix4fv(k.Tv, !1, this.Pn));
            c.useProgram(this.Bb[this.cl].Ol);
            c.bindTexture(c.TEXTURE_2D, null);
            c.activeTexture(c.TEXTURE1);
            c.bindTexture(c.TEXTURE_2D, null);
            c.activeTexture(c.TEXTURE0);
            this.bi = this.ai = null;
            this.Pm && (c.bindFramebuffer(c.FRAMEBUFFER, this.Bq), c.bindRenderbuffer(c.RENDERBUFFER, this.Pm), c.renderbufferStorage(c.RENDERBUFFER, c.DEPTH_COMPONENT16, this.width, this.height), this.ju || (c.framebufferRenderbuffer(c.FRAMEBUFFER, c.DEPTH_ATTACHMENT, c.RENDERBUFFER, this.Pm), this.ju = !0), c.bindRenderbuffer(c.RENDERBUFFER, null), c.bindFramebuffer(c.FRAMEBUFFER, null), this.Co = null)
        }
    };
    f.prototype.tf = function() {
        Xc(this.$p, this.Wv, this.ly, this.Vd);
        Wc(this.Vd, this.gm)
    };
    f.prototype.translate = function(a, b) {
        if (0 !== a || 0 !== b) {
            this.ph[0] = a;
            this.ph[1] = b;
            this.ph[2] = 0;
            var c = this.Vd,
                g = this.ph,
                k = g[0],
                p = g[1],
                g = g[2];
            c[12] = c[0] * k + c[4] * p + c[8] * g + c[12];
            c[13] = c[1] * k + c[5] * p + c[9] * g + c[13];
            c[14] = c[2] * k + c[6] * p + c[10] * g + c[14];
            c[15] = c[3] * k + c[7] * p + c[11] * g + c[15]
        }
    };
    f.prototype.scale = function(a, b) {
        if (1 !== a || 1 !== b) this.ph[0] = a, this.ph[1] = b, this.ph[2] = 1, Wc(this.Vd, this.ph)
    };
    f.prototype.xs = function(a) {
        if (0 !== a) {
            var b = this.Vd,
                c, g = Math.sin(a);
            a = Math.cos(a);
            var k = b[0],
                p = b[1],
                d = b[2],
                e = b[3],
                h = b[4],
                m = b[5],
                n = b[6],
                l = b[7];
            c ? b !== c && (c[8] = b[8], c[9] = b[9], c[10] = b[10], c[11] = b[11], c[12] = b[12], c[13] = b[13], c[14] = b[14], c[15] = b[15]) : c = b;
            c[0] = k * a + h * g;
            c[1] = p * a + m * g;
            c[2] = d * a + n * g;
            c[3] = e * a + l * g;
            c[4] = k * -g + h * a;
            c[5] = p * -g + m * a;
            c[6] = d * -g + n * a;
            c[7] = e * -g + l * a
        }
    };
    f.prototype.Ye = function() {
        if (!e(this.ur, this.Vd)) {
            var a = this.kd();
            a.type = 5;
            a.ra ? Vc(this.Vd, a.ra) : a.ra = Uc(this.Vd);
            Vc(this.Vd, this.ur);
            this.Qc = this.Dc = !1
        }
    };
    f.prototype.Io = function(a) {
        this.hb && (32760 < a && (a = 32760), this.qq = this.$p[2] - this.vp - a * this.aG)
    };
    l.prototype.RB = function() {
        var a = this.L,
            b = this.M;
        0 !== this.Tc ? (a.depthMask(!0), a.colorMask(!1, !1, !1, !1), a.disable(a.BLEND), a.bindFramebuffer(a.FRAMEBUFFER, b.Bq), a.framebufferTexture2D(a.FRAMEBUFFER, a.COLOR_ATTACHMENT0, a.TEXTURE_2D, null, 0), a.clear(a.DEPTH_BUFFER_BIT), a.bindFramebuffer(a.FRAMEBUFFER, null), b.vn = !0) : (a.depthMask(!1), a.colorMask(!0, !0, !0, !0), a.enable(a.BLEND), b.vn = !1)
    };
    l.prototype.VB = function() {
        this.L.bindTexture(this.L.TEXTURE_2D, this.ye)
    };
    l.prototype.WB = function() {
        var a = this.L;
        a.activeTexture(a.TEXTURE1);
        a.bindTexture(a.TEXTURE_2D, this.ye);
        a.activeTexture(a.TEXTURE0)
    };
    l.prototype.SB = function() {
        var a = this.Sw,
            b = this.M;
        b.Lm = a;
        b = b.Mi;
        b.pj && b.On !== a && (b.On = a, this.L.uniform1f(b.pj, a))
    };
    l.prototype.MB = function() {
        this.L.drawElements(this.L.TRIANGLES, this.ne, this.L.UNSIGNED_SHORT, this.Tc)
    };
    l.prototype.OB = function() {
        this.L.blendFunc(this.Tc, this.ne)
    };
    l.prototype.XB = function() {
        var a, b, c, g = this.M.Bb,
            k = this.M.Cu;
        a = 0;
        for (b = g.length; a < b; a++) c = g[a], a === k && c.Kn ? (c.dt(this.ra), c.Uh = !0) : c.Uh = !1;
        Vc(this.ra, this.M.pq)
    };
    l.prototype.NB = function() {
        var a = this.L,
            b = this.M;
        this.ye ? (b.bi === this.ye && (a.activeTexture(a.TEXTURE1), a.bindTexture(a.TEXTURE_2D, null), b.bi = null, a.activeTexture(a.TEXTURE0)), a.bindFramebuffer(a.FRAMEBUFFER, b.Bq), b.vn || a.framebufferTexture2D(a.FRAMEBUFFER, a.COLOR_ATTACHMENT0, a.TEXTURE_2D, this.ye, 0)) : (b.hb || a.framebufferTexture2D(a.FRAMEBUFFER, a.COLOR_ATTACHMENT0, a.TEXTURE_2D, null, 0), a.bindFramebuffer(a.FRAMEBUFFER, null))
    };
    l.prototype.JB = function() {
        var a = this.L,
            b = this.Tc;
        0 === b ? (a.clearColor(this.ra[0], this.ra[1], this.ra[2], this.ra[3]), a.clear(a.COLOR_BUFFER_BIT)) : 1 === b ? (a.enable(a.SCISSOR_TEST), a.scissor(this.ra[0], this.ra[1], this.ra[2], this.ra[3]), a.clearColor(0, 0, 0, 0), a.clear(a.COLOR_BUFFER_BIT), a.disable(a.SCISSOR_TEST)) : a.clear(a.DEPTH_BUFFER_BIT)
    };
    l.prototype.QB = function() {
        var a = this.L;
        0 !== this.Tc ? a.enable(a.DEPTH_TEST) : a.disable(a.DEPTH_TEST)
    };
    l.prototype.LB = function() {
        var a = this.L,
            b = this.M;
        b.hb && a.disable(a.DEPTH_TEST);
        var c = b.Bb[1];
        a.useProgram(c.Ol);
        !c.Uh && c.Kn && (c.dt(b.pq), c.Uh = !0);
        a.enableVertexAttribArray(c.qe);
        a.bindBuffer(a.ARRAY_BUFFER, b.ks);
        a.vertexAttribPointer(c.qe, 4, a.FLOAT, !1, 0, 0);
        a.drawArrays(a.POINTS, this.Tc / 4, this.ne);
        c = b.Mi;
        a.useProgram(c.Ol);
        0 <= c.qe && (a.enableVertexAttribArray(c.qe), a.bindBuffer(a.ARRAY_BUFFER, b.fm[b.Kf]), a.vertexAttribPointer(c.qe, b.hb ? 3 : 2, a.FLOAT, !1, 0, 0));
        0 <= c.Yg && (a.enableVertexAttribArray(c.Yg), a.bindBuffer(a.ARRAY_BUFFER, b.Vl[b.Kf]), a.vertexAttribPointer(c.Yg, 2, a.FLOAT, !1, 0, 0));
        b.hb && a.enable(a.DEPTH_TEST)
    };
    l.prototype.TB = function() {
        var a = this.L,
            b = this.M,
            c = b.Bb[this.Tc];
        b.Cu = this.Tc;
        b.Mi = c;
        a.useProgram(c.Ol);
        !c.Uh && c.Kn && (c.dt(b.pq), c.Uh = !0);
        c.pj && c.On !== b.Lm && (c.On = b.Lm, a.uniform1f(c.pj, b.Lm));
        0 <= c.qe && (a.enableVertexAttribArray(c.qe), a.bindBuffer(a.ARRAY_BUFFER, b.fm[b.Kf]), a.vertexAttribPointer(c.qe, b.hb ? 3 : 2, a.FLOAT, !1, 0, 0));
        0 <= c.Yg && (a.enableVertexAttribArray(c.Yg), a.bindBuffer(a.ARRAY_BUFFER, b.Vl[b.Kf]), a.vertexAttribPointer(c.Yg, 2, a.FLOAT, !1, 0, 0))
    };
    l.prototype.PB = function() {
        var a = this.ra;
        this.L.uniform4f(this.M.Mi.Ir, a[0], a[1], a[2], a[3])
    };
    l.prototype.UB = function() {
        var a, b, c = this.M.Mi,
            g = this.L;
        a = this.ra;
        c.kl && this.M.bi !== this.ye && (g.activeTexture(g.TEXTURE1), g.bindTexture(g.TEXTURE_2D, this.ye), this.M.bi = this.ye, g.activeTexture(g.TEXTURE0));
        var k = a[0];
        c.Kr && k !== c.gw && (c.gw = k, g.uniform1f(c.Kr, k));
        k = a[1];
        c.Jr && k !== c.fw && (c.fw = k, g.uniform1f(c.Jr, k));
        k = a[2];
        b = a[3];
        !c.hi || k === c.$v && b === c.aw || (c.$v = k, c.aw = b, g.uniform2f(c.hi, k, b));
        k = a[4];
        b = a[5];
        !c.gi || k === c.Yv && b === c.Zv || (c.Yv = k, c.Zv = b, g.uniform2f(c.gi, k, b));
        k = a[6];
        c.jl && k !== c.dw && (c.dw = k, g.uniform1f(c.jl, k));
        k = a[7];
        c.il && k !== c.bw && (c.bw = k, g.uniform1f(c.il, k));
        k = a[8];
        b = a[9];
        !c.nl || k === c.kw && b === c.lw || (c.kw = k, c.lw = b, g.uniform2f(c.nl, k, b));
        k = a[10];
        b = a[11];
        !c.ll || k === c.hw && b === c.iw || (c.hw = k, c.iw = b, g.uniform2f(c.ll, k, b));
        k = a[12];
        c.ml && k !== c.jw && (c.jw = k, g.uniform1f(c.ml, k));
        if (c.na.length)
            for (a = 0, b = c.na.length; a < b; a++) k = this.Nx[a], k !== c.tr[a] && (c.tr[a] = k, g.uniform1f(c.na[a][1], k))
    };
    f.prototype.kd = function() {
        this.cf === this.Hf.length && this.Hf.push(new l(0, this));
        return this.Hf[this.cf++]
    };
    f.prototype.Hg = function() {
        if (0 !== this.cf && !this.L.isContextLost()) {
            var a = this.L;
            0 < this.Aj && (a.bindBuffer(a.ARRAY_BUFFER, this.ks), a.bufferSubData(a.ARRAY_BUFFER, 0, this.ls.subarray(0, this.Aj)), b && 0 <= b.qe && "<point>" === b.name && a.vertexAttribPointer(b.qe, 4, a.FLOAT, !1, 0, 0));
            if (0 < this.ng) {
                var b = this.Mi;
                a.bindBuffer(a.ARRAY_BUFFER, this.fm[this.Kf]);
                a.bufferSubData(a.ARRAY_BUFFER, 0, this.qp.subarray(0, this.ng));
                b && 0 <= b.qe && "<point>" !== b.name && a.vertexAttribPointer(b.qe, this.hb ? 3 : 2, a.FLOAT, !1, 0, 0);
                a.bindBuffer(a.ARRAY_BUFFER, this.Vl[this.Kf]);
                a.bufferSubData(a.ARRAY_BUFFER, 0, this.Yo.subarray(0, this.Oj));
                b && 0 <= b.Yg && "<point>" !== b.name && a.vertexAttribPointer(b.Yg, 2, a.FLOAT, !1, 0, 0)
            }
            for (var c, a = 0, b = this.cf; a < b; a++) switch (c = this.Hf[a], c.type) {
                case 1:
                    c.MB();
                    break;
                case 2:
                    c.VB();
                    break;
                case 3:
                    c.SB();
                    break;
                case 4:
                    c.OB();
                    break;
                case 5:
                    c.XB();
                    break;
                case 6:
                    c.NB();
                    break;
                case 7:
                    c.JB();
                    break;
                case 8:
                    c.LB();
                    break;
                case 9:
                    c.TB();
                    break;
                case 10:
                    c.UB();
                    break;
                case 11:
                    c.WB();
                    break;
                case 12:
                    c.PB();
                    break;
                case 13:
                    c.QB();
                    break;
                case 14:
                    c.RB()
            }
            this.Aj = this.Oj = this.ng = this.cf = 0;
            this.vn = this.Qc = this.Dc = !1;
            this.Kf++;
            4 <= this.Kf && (this.Kf = 0)
        }
    };
    f.prototype.mh = function(a) {
        if (a !== this.Iv && !this.Nk) {
            var b = this.kd();
            b.type = 3;
            this.Iv = b.Sw = a;
            this.Qc = this.Dc = !1
        }
    };
    f.prototype.qd = function(a) {
        if (a !== this.ai) {
            var b = this.kd();
            b.type = 2;
            this.ai = b.ye = a;
            this.Qc = this.Dc = !1
        }
    };
    f.prototype.eg = function(a, b) {
        if ((a !== this.Jv || b !== this.Hv) && !this.Nk) {
            var c = this.kd();
            c.type = 4;
            c.Tc = a;
            c.ne = b;
            this.Jv = a;
            this.Hv = b;
            this.Qc = this.Dc = !1
        }
    };
    f.prototype.Ax = function() {
        this.eg(this.L.ONE, this.L.ONE_MINUS_SRC_ALPHA)
    };
    f.prototype.ih = function(a, b, c, g, k, p, d, e) {
        15992 <= this.ng && this.Hg();
        var h = this.ng,
            m = this.Oj,
            n = this.qp,
            l = this.Yo,
            f = this.qq;
        if (this.Dc) this.Hf[this.cf - 1].ne += 6;
        else {
            var r = this.kd();
            r.type = 1;
            r.Tc = this.hb ? h : h / 2 * 3;
            r.ne = 6;
            this.Dc = !0;
            this.Qc = !1
        }
        this.hb ? (n[h++] = a, n[h++] = b, n[h++] = f, n[h++] = c, n[h++] = g, n[h++] = f, n[h++] = k, n[h++] = p, n[h++] = f, n[h++] = d, n[h++] = e, n[h++] = f) : (n[h++] = a, n[h++] = b, n[h++] = c, n[h++] = g, n[h++] = k, n[h++] = p, n[h++] = d, n[h++] = e);
        l[m++] = 0;
        l[m++] = 0;
        l[m++] = 1;
        l[m++] = 0;
        l[m++] = 1;
        l[m++] = 1;
        l[m++] = 0;
        l[m++] = 1;
        this.ng = h;
        this.Oj = m
    };
    f.prototype.jh = function(a, b, c, g, k, p, d, e, h) {
        15992 <= this.ng && this.Hg();
        var m = this.ng,
            n = this.Oj,
            l = this.qp,
            f = this.Yo,
            r = this.qq;
        if (this.Dc) this.Hf[this.cf - 1].ne += 6;
        else {
            var v = this.kd();
            v.type = 1;
            v.Tc = this.hb ? m : m / 2 * 3;
            v.ne = 6;
            this.Dc = !0;
            this.Qc = !1
        }
        var v = h.left,
            y = h.top,
            x = h.right;
        h = h.bottom;
        this.hb ? (l[m++] = a, l[m++] = b, l[m++] = r, l[m++] = c, l[m++] = g, l[m++] = r, l[m++] = k, l[m++] = p, l[m++] = r, l[m++] = d, l[m++] = e, l[m++] = r) : (l[m++] = a, l[m++] = b, l[m++] = c, l[m++] = g, l[m++] = k, l[m++] = p, l[m++] = d, l[m++] = e);
        f[n++] = v;
        f[n++] = y;
        f[n++] = x;
        f[n++] = y;
        f[n++] = x;
        f[n++] = h;
        f[n++] = v;
        f[n++] = h;
        this.ng = m;
        this.Oj = n
    };
    f.prototype.zE = function(a, b, c, g) {
        7996 <= this.Aj && this.Hg();
        var k = this.Aj,
            p = this.ls;
        if (this.Qc) this.Hf[this.cf - 1].ne++;
        else {
            var d = this.kd();
            d.type = 8;
            d.Tc = k;
            d.ne = 1;
            this.Qc = !0;
            this.Dc = !1
        }
        p[k++] = a;
        p[k++] = b;
        p[k++] = c;
        p[k++] = g;
        this.Aj = k
    };
    f.prototype.rd = function(a) {
        if (this.cl !== a) {
            if (!this.Bb[a]) {
                if (0 === this.cl) return;
                a = 0
            }
            var b = this.kd();
            b.type = 9;
            this.cl = b.Tc = a;
            this.Qc = this.Dc = !1
        }
    };
    f.prototype.Dl = function(a) {
        a = this.Bb[a];
        return !(!a.hi && !a.gi)
    };
    f.prototype.ps = function(a) {
        a = this.Bb[a];
        return !!(a.hi || a.gi || a.oq)
    };
    f.prototype.os = function(a) {
        return this.Bb[a].ue
    };
    f.prototype.IE = function(a) {
        a = this.Bb[a];
        return 0 !== a.Um || 0 !== a.Vm
    };
    f.prototype.dD = function(a) {
        return this.Bb[a].Um
    };
    f.prototype.eD = function(a) {
        return this.Bb[a].Vm
    };
    f.prototype.fD = function(a, b) {
        return this.Bb[a].na[b][2]
    };
    f.prototype.wo = function(a) {
        return this.Bb[a].Sp
    };
    f.prototype.Gj = function(a, b, c, g, k, p, d, e, h, m, n, l, f, r, v) {
        var y = this.Bb[this.cl],
            x, u;
        if (y.zD || v.length) {
            x = this.kd();
            x.type = 10;
            x.ra ? Vc(this.Vd, x.ra) : x.ra = Uc();
            u = x.ra;
            u[0] = b;
            u[1] = c;
            u[2] = g;
            u[3] = k;
            u[4] = p;
            u[5] = d;
            u[6] = e;
            u[7] = h;
            u[8] = m;
            u[9] = n;
            u[10] = l;
            u[11] = f;
            u[12] = r;
            y.kl ? x.ye = a : x.ye = null;
            if (v.length)
                for (c = x.Nx, c.length = v.length, a = 0, b = v.length; a < b; a++) c[a] = v[a];
            this.Qc = this.Dc = !1
        }
    };
    f.prototype.clear = function(a, b, c, g) {
        var k = this.kd();
        k.type = 7;
        k.Tc = 0;
        k.ra || (k.ra = Uc());
        k.ra[0] = a;
        k.ra[1] = b;
        k.ra[2] = c;
        k.ra[3] = g;
        this.Qc = this.Dc = !1
    };
    f.prototype.clearRect = function(a, b, c, g) {
        if (!(0 > c || 0 > g)) {
            var k = this.kd();
            k.type = 7;
            k.Tc = 1;
            k.ra || (k.ra = Uc());
            k.ra[0] = a;
            k.ra[1] = b;
            k.ra[2] = c;
            k.ra[3] = g;
            this.Qc = this.Dc = !1
        }
    };
    f.prototype.Fx = function(a) {
        if (this.hb && (a = !!a, this.Nk !== a)) {
            var b = this.kd();
            b.type = 14;
            b.Tc = a ? 1 : 0;
            this.Qc = this.Dc = !1;
            this.Nk = a;
            this.Co = null;
            this.Nk ? this.rd(2) : this.rd(0)
        }
    };
    f.prototype.Ex = function(a) {
        if (this.hb) {
            var b = this.kd();
            b.type = 13;
            b.Tc = a ? 1 : 0;
            this.Qc = this.Dc = !1
        }
    };
    f.prototype.Xu = function() {
        Vc(this.ur, r);
        this.tf();
        this.Ye();
        var a = this.width / 2,
            b = this.height / 2;
        this.ih(-a, b, a, b, a, -b, -a, -b);
        Vc(r, this.Vd);
        this.Ye()
    };
    f.prototype.Dx = function(a, b, c) {
        this.rd(3);
        var g = this.kd();
        g.type = 12;
        g.ra || (g.ra = Uc());
        g.ra[0] = a;
        g.ra[1] = b;
        g.ra[2] = c;
        g.ra[3] = 1;
        this.Qc = this.Dc = !1
    };
    f.prototype.sF = function() {
        this.rd(0)
    };
    f.prototype.ZE = function() {
        this.rd(2)
    };
    f.prototype.GE = function() {
        this.Hg();
        this.L.flush()
    };
    var m = [],
        d = {};
    f.prototype.xB = function() {
        B(m);
        d = {}
    };
    f.prototype.fi = function(a, b, c, g) {
        b = !!b;
        c = !!c;
        var k = a.src + "," + b + "," + c + (b ? ",undefined" : ""),
            p = null;
        if ("undefined" !== typeof a.src && d.hasOwnProperty(k)) return p = d[k], p.xm++, p;
        this.Hg();
        var q = this.L,
            e = za(a.width) && za(a.height),
            p = q.createTexture();
        q.bindTexture(q.TEXTURE_2D, p);
        q.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !0);
        var h = q.RGBA,
            l = q.RGBA,
            n = q.UNSIGNED_BYTE;
        if (g && !this.Qg) switch (g) {
            case 1:
                l = h = q.RGB;
                break;
            case 2:
                n = q.UNSIGNED_SHORT_4_4_4_4;
                break;
            case 3:
                n = q.UNSIGNED_SHORT_5_5_5_1;
                break;
            case 4:
                l = h = q.RGB, n = q.UNSIGNED_SHORT_5_6_5
        }
        if (1 === this.version && !e && b) {
            g = document.createElement("canvas");
            g.width = Aa(a.width);
            g.height = Aa(a.height);
            var f = g.getContext("2d");
            "undefined" !== typeof f.imageSmoothingEnabled ? f.imageSmoothingEnabled = c : (f.webkitImageSmoothingEnabled = c, f.mozImageSmoothingEnabled = c, f.msImageSmoothingEnabled = c);
            f.drawImage(a, 0, 0, a.width, a.height, 0, 0, g.width, g.height);
            q.texImage2D(q.TEXTURE_2D, 0, h, l, n, g)
        } else q.texImage2D(q.TEXTURE_2D, 0, h, l, n, a);
        b ? (q.texParameteri(q.TEXTURE_2D, q.TEXTURE_WRAP_S, q.REPEAT), q.texParameteri(q.TEXTURE_2D, q.TEXTURE_WRAP_T, q.REPEAT)) : (q.texParameteri(q.TEXTURE_2D, q.TEXTURE_WRAP_S, q.CLAMP_TO_EDGE), q.texParameteri(q.TEXTURE_2D, q.TEXTURE_WRAP_T, q.CLAMP_TO_EDGE));
        c ? (q.texParameteri(q.TEXTURE_2D, q.TEXTURE_MAG_FILTER, q.LINEAR), (e || 2 <= this.version) && this.Ju ? (q.texParameteri(q.TEXTURE_2D, q.TEXTURE_MIN_FILTER, q.LINEAR_MIPMAP_LINEAR), q.generateMipmap(q.TEXTURE_2D)) : q.texParameteri(q.TEXTURE_2D, q.TEXTURE_MIN_FILTER, q.LINEAR)) : (q.texParameteri(q.TEXTURE_2D, q.TEXTURE_MAG_FILTER, q.NEAREST), q.texParameteri(q.TEXTURE_2D, q.TEXTURE_MIN_FILTER, q.NEAREST));
        q.bindTexture(q.TEXTURE_2D, null);
        this.ai = null;
        p.Gh = a.width;
        p.Fh = a.height;
        p.xm = 1;
        p.ou = k;
        m.push(p);
        return d[k] = p
    };
    f.prototype.ie = function(a, b, c) {
        var g;
        this.Hg();
        var k = this.L;
        this.Qg && (g = !1);
        var p = k.createTexture();
        k.bindTexture(k.TEXTURE_2D, p);
        k.texImage2D(k.TEXTURE_2D, 0, k.RGBA, a, b, 0, k.RGBA, g ? k.UNSIGNED_SHORT_4_4_4_4 : k.UNSIGNED_BYTE, null);
        k.texParameteri(k.TEXTURE_2D, k.TEXTURE_WRAP_S, k.CLAMP_TO_EDGE);
        k.texParameteri(k.TEXTURE_2D, k.TEXTURE_WRAP_T, k.CLAMP_TO_EDGE);
        k.texParameteri(k.TEXTURE_2D, k.TEXTURE_MAG_FILTER, c ? k.LINEAR : k.NEAREST);
        k.texParameteri(k.TEXTURE_2D, k.TEXTURE_MIN_FILTER, c ? k.LINEAR : k.NEAREST);
        k.bindTexture(k.TEXTURE_2D, null);
        this.ai = null;
        p.Gh = a;
        p.Fh = b;
        m.push(p);
        return p
    };
    f.prototype.deleteTexture = function(a) {
        a && ("undefined" !== typeof a.xm && 1 < a.xm ? a.xm-- : (this.Hg(), a === this.ai && (this.L.bindTexture(this.L.TEXTURE_2D, null), this.ai = null), a === this.bi && (this.L.activeTexture(this.L.TEXTURE1), this.L.bindTexture(this.L.TEXTURE_2D, null), this.L.activeTexture(this.L.TEXTURE0), this.bi = null), $a(m, a), "undefined" !== typeof a.ou && delete d[a.ou], this.L.deleteTexture(a)))
    };
    f.prototype.we = function(a) {
        if (a !== this.Co) {
            var b = this.kd();
            b.type = 6;
            this.Co = b.ye = a;
            this.Qc = this.Dc = !1
        }
    };
    Lb = f
})();
(function() {
    function f(a) {
        if (a && (a.getContext || a.dc) && !a.c2runtime) {
            a.c2runtime = this;
            var b = this;
            this.Cd = (this.wn = /crosswalk/i.test(navigator.userAgent) || /xwalk/i.test(navigator.userAgent) || !("undefined" === typeof window.c2isCrosswalk || !window.c2isCrosswalk)) || "undefined" !== typeof window.device && ("undefined" !== typeof window.device.cordova || "undefined" !== typeof window.device.phonegap) || "undefined" !== typeof window.c2iscordova && window.c2iscordova;
            this.Sc = !!a.dc;
            this.Av = "undefined" !== typeof window.AppMobi || this.Sc;
            this.Td = !!window.c2cocoonjs;
            this.oe = !!window.c2ejecta;
            this.Td && (CocoonJS.App.onSuspended.addEventListener(function() {
                b.setSuspended(!0)
            }), CocoonJS.App.onActivated.addEventListener(function() {
                b.setSuspended(!1)
            }));
            this.oe && (document.addEventListener("pagehide", function() {
                b.setSuspended(!0)
            }), document.addEventListener("pageshow", function() {
                b.setSuspended(!1)
            }), document.addEventListener("resize", function() {
                b.setSize(window.innerWidth, window.innerHeight)
            }));
            this.Ob = this.Sc || this.Td || this.oe;
            this.Pk = /edge\//i.test(navigator.userAgent);
            this.Qg = (/msie/i.test(navigator.userAgent) || /trident/i.test(navigator.userAgent) || /iemobile/i.test(navigator.userAgent)) && !this.Pk;
            this.Dv = /tizen/i.test(navigator.userAgent);
            this.tn = /android/i.test(navigator.userAgent) && !this.Dv && !this.Qg && !this.Pk;
            this.Gv = (/iphone/i.test(navigator.userAgent) || /ipod/i.test(navigator.userAgent)) && !this.Qg && !this.Pk;
            this.SD = /ipad/i.test(navigator.userAgent);
            this.hj = this.Gv || this.SD || this.oe;
            this.jr = (/chrome/i.test(navigator.userAgent) || /chromium/i.test(navigator.userAgent)) && !this.Qg && !this.Pk;
            this.zv = /amazonwebappplatform/i.test(navigator.userAgent);
            this.KD = /firefox/i.test(navigator.userAgent);
            this.ND = /safari/i.test(navigator.userAgent) && !this.jr && !this.Qg && !this.Pk;
            this.OD = /windows/i.test(navigator.userAgent);
            this.yn = "undefined" !== typeof window.c2nodewebkit || "undefined" !== typeof window.c2nwjs || /nodewebkit/i.test(navigator.userAgent) || /nwjs/i.test(navigator.userAgent);
            this.Ev = !("undefined" === typeof window.c2isWindows8 || !window.c2isWindows8);
            this.QD = !("undefined" === typeof window.c2isWindows8Capable || !window.c2isWindows8Capable);
            this.Tk = !("undefined" === typeof window.c2isWindowsPhone8 || !window.c2isWindowsPhone8);
            this.rr = !("undefined" === typeof window.c2isWindowsPhone81 || !window.c2isWindowsPhone81);
            this.qr = !!window.cr_windows10;
            this.pr = this.Ev || this.QD || this.rr || this.qr;
            this.ID = !("undefined" === typeof window.c2isBlackberry10 || !window.c2isBlackberry10);
            this.un = this.tn && !this.jr && !this.wn && !this.KD && !this.zv && !this.Ob;
            this.devicePixelRatio = 1;
            this.bj = this.Cd || this.wn || this.Av || this.Td || this.tn || this.hj || this.Tk || this.rr || this.ID || this.Dv || this.oe;
            this.bj || (this.bj = /(blackberry|bb10|playbook|palm|symbian|nokia|windows\s+ce|phone|mobile|tablet|kindle|silk)/i.test(navigator.userAgent));
            this.zn = !!(this.hj && this.Cd && window.webkit);
            "undefined" === typeof cr_is_preview || this.yn || "?nw" !== window.location.search && !/nodewebkit/i.test(navigator.userAgent) && !/nwjs/i.test(navigator.userAgent) || (this.yn = !0);
            this.canvas = a;
            this.qu = document.getElementById("c2canvasdiv");
            this.M = this.L = null;
            this.Sq = "(unavailable)";
            this.hb = !1;
            this.Nh = 0;
            this.I = null;
            this.$m = !1;
            this.Gw = this.Hw = 0;
            this.canvas.oncontextmenu = function(a) {
                a.preventDefault && a.preventDefault();
                return !1
            };
            this.canvas.onselectstart = function(a) {
                a.preventDefault && a.preventDefault();
                return !1
            };
            this.canvas.ontouchstart = function(a) {
                a.preventDefault && a.preventDefault();
                return !1
            };
            this.Sc && (window.c2runtime = this);
            this.yn && (window.ondragover = function(a) {
                a.preventDefault();
                return !1
            }, window.ondrop = function(a) {
                a.preventDefault();
                return !1
            }, window.nwgui && window.nwgui.App.clearCache && window.nwgui.App.clearCache());
            this.un && "undefined" !== typeof jQuery && jQuery("canvas").parents("*").css("overflow", "visible");
            this.width = a.width;
            this.height = a.height;
            this.X = this.width;
            this.W = this.height;
            this.Jm = this.width;
            this.pk = this.height;
            this.mj = window.innerWidth;
            this.lj = window.innerHeight;
            this.O = !0;
            this.Rk = !1;
            Date.now || (Date.now = function() {
                return +new Date
            });
            this.plugins = [];
            this.types = {};
            this.K = [];
            this.ub = [];
            this.Fr = {};
            this.Pe = [];
            this.Aq = {};
            this.Pf = [];
            this.xi = [];
            this.fp = [];
            this.VA = [];
            this.WA = [];
            this.Lh = {};
            this.mr = this.Mg = !1;
            this.Ne = 0;
            this.kr = this.or = !1;
            this.Le = [];
            this.Ok = !1;
            this.Hn = this.Cs = "";
            this.kc = null;
            this.Wf = "";
            this.Tl = this.Qx = !1;
            this.Zm = [];
            this.Mh = this.Gg = 0;
            this.rw = 30;
            this.mq = this.ol = 0;
            this.oh = 1;
            this.vc = new xb;
            this.pg = new xb;
            this.Sn = this.cn = this.yk = this.lg = this.di = this.Eq = this.Dn = 0;
            this.Ih = null;
            this.Qm = [];
            this.zq = [];
            this.Tm = -1;
            this.Lr = [
                []
            ];
            this.Zs = this.Ln = 0;
            this.yo(null);
            this.pl = [];
            this.ql = -1;
            this.Bw = this.yl = 0;
            this.Er = !0;
            this.zk = 0;
            this.Ul = [];
            this.Ws = this.qs = -1;
            this.ij = !0;
            this.oj = 0;
            this.Qk = !1;
            this.xF = 0;
            this.Ei = null;
            this.lf = this.pv = !1;
            this.Fw = new ma;
            this.Xr = new ma;
            this.Yr = new ma;
            this.Bo = [];
            this.Ue = new zb([]);
            this.Ss = new zb([]);
            this.xg = [];
            this.Ik = {};
            this.Cg = {};
            this.vg = {};
            this.bk = {};
            this.ku = {};
            this.Sv = this.Gn = this.Qb = this.jc = this.Rv = this.Fn = this.Ra = null;
            this.Yj = this.sr = !1;
            this.Fq = [null, null];
            this.Sh = 0;
            this.Cq = "";
            this.Zf = {};
            this.Ql = this.Wg = null;
            this.Sx = "";
            this.Rn = [];
            this.VE()
        }
    }

    function h(a, b) {
        return 128 >= b ? a[3] : 256 >= b ? a[2] : 512 >= b ? a[1] : a[0]
    }

    function e() {
        try {
            return !!window.indexedDB
        } catch (a) {
            return !1
        }
    }

    function l(a) {
        a.target.result.createObjectStore("saves", {
            keyPath: "slot"
        })
    }

    function r(a, b, g, c) {
        try {
            var k = indexedDB.open("_C2SaveStates");
            k.onupgradeneeded = l;
            k.onerror = c;
            k.onsuccess = function(k) {
                k = k.target.result;
                k.onerror = c;
                k.transaction(["saves"], "readwrite").objectStore("saves").put({
                    slot: a,
                    data: b
                }).onsuccess = g
            }
        } catch (n) {
            c(n)
        }
    }

    function m(a, b, g) {
        try {
            var c = indexedDB.open("_C2SaveStates");
            c.onupgradeneeded = l;
            c.onerror = g;
            c.onsuccess = function(c) {
                c = c.target.result;
                c.onerror = g;
                var k = c.transaction(["saves"]).objectStore("saves").get(a);
                k.onsuccess = function() {
                    k.result ? b(k.result.data) : b(null)
                }
            }
        } catch (k) {
            g(k)
        }
    }

    function d() {
        pa("Reloading for continuous preview");
        window.c2cocoonjs ? CocoonJS.App.reload() : -1 < window.location.search.indexOf("continuous") ? window.location.reload(!0) : window.location = window.location + "?continuous"
    }

    function a(a) {
        var b, g = {};
        for (b in a) !a.hasOwnProperty(b) || a[b] instanceof ma || a[b] && "undefined" !== typeof a[b].QH || "spriteCreatedDestroyCallback" !== b && (g[b] = a[b]);
        return g
    }
    var b = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame;
    f.prototype.VE = function() {
        var a = this;
        if (this.zn) this.MC(function(b) {
            a.hl(JSON.parse(b))
        }, function() {
            // alert("Error fetching data.js")
        });
        else {
            var b;
            this.Tk ? b = new ActiveXObject("Microsoft.XMLHTTP") : b = new XMLHttpRequest;
            var g = "data.js";
            if (this.Ev || this.Tk || this.rr || this.qr) g = "data.json";
            b.open("GET", g, !0);
            var c = !1;
            if (!this.Ob && "response" in b && "responseType" in b) try {
                b.responseType = "json", c = "json" === b.responseType
            } catch (k) {
                c = !1
            }
            if (!c && "responseType" in b) try {
                b.responseType = "text"
            } catch (n) {}
            if ("overrideMimeType" in b) try {
                b.overrideMimeType("application/json; charset=utf-8")
            } catch (p) {}
            this.Tk ? b.onreadystatechange = function() {
                4 === b.readyState && a.hl(JSON.parse(b.responseText))
            } : (b.onload = function() {
                if (c) a.hl(b.response);
                else if (a.oe) {
                    var g = b.responseText,
                        g = g.substr(g.indexOf("{"));
                    a.hl(JSON.parse(g))
                } else a.hl(JSON.parse(b.responseText))
            }, b.onerror = function(a) {
                sa("Error requesting " + g + ":");
                sa(a)
            });
            b.send()
        }
    };
    f.prototype.DD = function() {
        var a = this,
            b, g, c, k, n, p, d, e, q;
        this.Yh = (!this.Ob || this.oe || this.Cd) && this.UF && !this.un;
        0 === this.jd && this.hj && (this.Yh = !1);
        this.devicePixelRatio = this.Yh ? window.devicePixelRatio || window.webkitDevicePixelRatio || window.mozDevicePixelRatio || window.msDevicePixelRatio || 1 : 1;
        this.Ic();
        0 < this.jd && this.setSize(window.innerWidth, window.innerHeight, !0);
        this.canvas.addEventListener("webglcontextlost", function(b) {
            b.preventDefault();
            a.lE();
            pa("[Construct 2] WebGL context lost");
            window.cr_setSuspended(!0)
        }, !1);
        this.canvas.addEventListener("webglcontextrestored", function() {
            a.M.tv();
            a.M.fg(a.M.width, a.M.height, !0);
            a.jc = null;
            a.Qb = null;
            a.Fq[0] = null;
            a.Fq[1] = null;
            a.mE();
            a.O = !0;
            pa("[Construct 2] WebGL context restored");
            window.cr_setSuspended(!1)
        }, !1);
        try {
            this.fC && (this.Td || this.oe || !this.Ob) && (b = {
                alpha: !0,
                depth: !1,
                antialias: !1,
                powerPreference: "high-performance",
                failIfMajorPerformanceCaveat: !0
            }, this.L = this.canvas.getContext("webgl2", b) || this.canvas.getContext("webgl", b) || this.canvas.getContext("experimental-webgl", b))
        } catch (h) {}
        if (this.L) {
            if (b = this.L.getExtension("WEBGL_debug_renderer_info")) this.Sq = this.L.getParameter(b.UNMASKED_RENDERER_WEBGL) + " [" + this.L.getParameter(b.UNMASKED_VENDOR_WEBGL) + "]";
            this.hb && (this.Sq += " [front-to-back enabled]");
            this.Ob || (this.Gc = document.createElement("canvas"), jQuery(this.Gc).appendTo(this.canvas.parentNode), this.Gc.oncontextmenu = function() {
                return !1
            }, this.Gc.onselectstart = function() {
                return !1
            }, this.Gc.width = Math.round(this.Jm * this.devicePixelRatio), this.Gc.height = Math.round(this.pk * this.devicePixelRatio), jQuery(this.Gc).css({
                width: this.Jm + "px",
                height: this.pk + "px"
            }), this.hx(), this.es = this.Gc.getContext("2d"));
            this.M = new Lb(this.L, this.bj, this.hb);
            this.M.fg(this.canvas.width, this.canvas.height);
            this.M.Ju = 0 !== this.YB;
            this.I = null;
            b = 0;
            for (g = this.K.length; b < g; b++)
                for (n = this.K[b], c = 0, k = n.ja.length; c < k; c++) d = n.ja[c], d.Ub = this.M.Pq(d.id), d.ue = this.M.os(d.Ub), this.Yj = this.Yj || this.M.Dl(d.Ub);
            b = 0;
            for (g = this.Pe.length; b < g; b++) {
                e = this.Pe[b];
                c = 0;
                for (k = e.ja.length; c < k; c++) d = e.ja[c], d.Ub = this.M.Pq(d.id), d.ue = this.M.os(d.Ub);
                e.Xe();
                c = 0;
                for (k = e.V.length; c < k; c++) {
                    q = e.V[c];
                    n = 0;
                    for (p = q.ja.length; n < p; n++) d = q.ja[n], d.Ub = this.M.Pq(d.id), d.ue = this.M.os(d.Ub), this.Yj = this.Yj || this.M.Dl(d.Ub);
                    q.Xe()
                }
            }
        } else {
            if (0 < this.jd && this.Sc) {
                this.canvas = null;
                document.oncontextmenu = function() {
                    return !1
                };
                document.onselectstart = function() {
                    return !1
                };
                this.I = AppMobi.canvas.getContext("2d");
                try {
                    this.I.samplingMode = this.ib ? "smooth" : "sharp", this.I.globalScale = 1, this.I.HTML5CompatibilityMode = !0, this.I.imageSmoothingEnabled = this.ib
                } catch (m) {}
                0 !== this.width && 0 !== this.height && (this.I.width = this.width, this.I.height = this.height)
            }
            this.I || (this.Td ? (b = {
                antialias: !!this.ib,
                alpha: !0
            }, this.I = this.canvas.getContext("2d", b)) : (b = {
                alpha: !0
            }, this.I = this.canvas.getContext("2d", b)), this.Ho(this.I, this.ib));
            this.es = this.Gc = null
        }
        this.dy = function(b) {
            a.Hb(!1, b)
        };
        window == window.top || this.Ob || this.pr || this.Tk || (document.addEventListener("mousedown", function() {
            window.focus()
        }, !0), document.addEventListener("touchstart", function() {
            window.focus()
        }, !0));
        "undefined" !== typeof cr_is_preview && (this.Td && console.log("[Construct 2] In preview-over-wifi via CocoonJS mode"), -1 < window.location.search.indexOf("continuous") && (pa("Reloading for continuous preview"), this.Hn = "__c2_continuouspreview", this.Tl = !0), this.wE && !this.bj && (jQuery(window).focus(function() {
            a.setSuspended(!1)
        }), jQuery(window).blur(function() {
            var b = window.parent;
            b && b.document.hasFocus() || a.setSuspended(!0)
        })));
        window.addEventListener("blur", function() {});
        this.Ob || (b = function(a) {
            if (Kb(a) && document.activeElement && document.activeElement !== document.getElementsByTagName("body")[0] && document.activeElement.blur) try {
                document.activeElement.blur()
            } catch (b) {}
        }, "undefined" !== typeof PointerEvent ? document.addEventListener("pointerdown", b) : window.navigator.msPointerEnabled ? document.addEventListener("MSPointerDown", b) : document.addEventListener("touchstart", b), document.addEventListener("mousedown", b));
        0 === this.jd && this.Yh && 1 < this.devicePixelRatio && this.setSize(this.mc, this.lc, !0);
        this.hy();
        this.sD();
        this.go();
        this.ka = {}
    };
    f.prototype.setSize = function(a, b, g) {
        var c = 0,
            k = 0,
            n = 0,
            p = 0,
            p = 0;
        if (this.mj !== a || this.lj !== b || g) {
            this.mj = a;
            this.lj = b;
            var d = this.jd;
            if ((n = (document.mozFullScreen || document.webkitIsFullScreen || !!document.msFullscreenElement || document.fullScreen || this.Qk) && !this.Cd) || 0 !== this.jd || g) n && 0 < this.Sh && (d = this.Sh), g = this.devicePixelRatio, 4 <= d ? (n = this.mc / this.lc, a / b > n ? (n *= b, 5 === d ? (p = n * g / this.mc, 1 < p ? p = Math.floor(p) : 1 > p && (p = 1 / Math.ceil(1 / p)), n = this.mc * p / g, p = this.lc * p / g, c = (a - n) / 2, k = (b - p) / 2, a = n, b = p) : (c = (a - n) / 2, a = n)) : (p = a / n, 5 === d ? (p = p * g / this.lc, 1 < p ? p = Math.floor(p) : 1 > p && (p = 1 / Math.ceil(1 / p)), n = this.mc * p / g, p = this.lc * p / g, c = (a - n) / 2, k = (b - p) / 2, a = n) : k = (b - p) / 2, b = p)) : this.yn && this.Qk && 0 === this.Yu && (c = Math.floor((a - this.mc) / 2), k = Math.floor((b - this.lc) / 2), a = this.mc, b = this.lc), 2 > d && (this.kk = g), this.Jm = Math.round(a), this.pk = Math.round(b), this.width = Math.round(a * g), this.height = Math.round(b * g), this.O = !0, this.wy ? (this.X = this.width, this.W = this.height, this.Pd = !0) : this.width < this.mc && this.height < this.lc || 1 === d ? (this.X = this.width, this.W = this.height, this.Pd = !0) : (this.X = this.mc, this.W = this.lc, this.Pd = !1, 2 === d ? (n = this.mc / this.lc, d = this.mj / this.lj, d < n ? this.X = this.W * d : d > n && (this.W = this.X / d)) : 3 === d && (n = this.mc / this.lc, d = this.mj / this.lj, d > n ? this.X = this.W * d : d < n && (this.W = this.X / d))), this.qu && !this.Ob && (jQuery(this.qu).css({
                width: Math.round(a) + "px",
                height: Math.round(b) + "px",
                "margin-left": Math.floor(c) + "px",
                "margin-top": Math.floor(k) + "px"
            }), "undefined" !== typeof cr_is_preview && jQuery("#borderwrap").css({
                width: Math.round(a) + "px",
                height: Math.round(b) + "px"
            })), this.canvas && (this.canvas.width = Math.round(a * g), this.canvas.height = Math.round(b * g), this.oe ? (this.canvas.style.left = Math.floor(c) + "px", this.canvas.style.top = Math.floor(k) + "px", this.canvas.style.width = Math.round(a) + "px", this.canvas.style.height = Math.round(b) + "px") : this.Yh && !this.Ob && (this.canvas.style.width = Math.round(a) + "px", this.canvas.style.height = Math.round(b) + "px")), this.Gc && (this.Gc.width = Math.round(a * g), this.Gc.height = Math.round(b * g), this.Gc.style.width = this.Jm + "px", this.Gc.style.height = this.pk + "px"), this.M && this.M.fg(Math.round(a * g), Math.round(b * g)), this.Sc && this.I && (this.I.width = Math.round(a), this.I.height = Math.round(b)), this.I && this.Ho(this.I, this.ib), this.hy(), this.Gv && !this.Cd && window.scrollTo(0, 0)
        }
    };
    f.prototype.hy = function() {
        if (this.dB && 0 !== this.ds) {
            var a = "portrait";
            2 === this.ds && (a = "landscape");
            try {
                screen.orientation && screen.orientation.lock ? screen.orientation.lock(a).catch(function() {}) : screen.lockOrientation ? screen.lockOrientation(a) : screen.webkitLockOrientation ? screen.webkitLockOrientation(a) : screen.mozLockOrientation ? screen.mozLockOrientation(a) : screen.msLockOrientation && screen.msLockOrientation(a)
            } catch (b) {
                console && console.warn && console.warn("Failed to lock orientation: ", b)
            }
        }
    };
    f.prototype.lE = function() {
        this.M.xB();
        this.sr = !0;
        var a, b, g;
        a = 0;
        for (b = this.K.length; a < b; a++) g = this.K[a], g.Un && g.Un()
    };
    f.prototype.mE = function() {
        this.sr = !1;
        var a, b, g;
        a = 0;
        for (b = this.K.length; a < b; a++) g = this.K[a], g.Wn && g.Wn()
    };
    f.prototype.hx = function() {
        if (!this.Ob) {
            var a = (document.mozFullScreen || document.webkitIsFullScreen || document.fullScreen || document.msFullscreenElement || this.Qk) && !this.Cd ? jQuery(this.canvas).offset() : jQuery(this.canvas).position();
            a.position = "absolute";
            jQuery(this.Gc).css(a)
        }
    };
    var c = window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame || window.msCancelAnimationFrame || window.oCancelAnimationFrame;
    f.prototype.setSuspended = function(a) {
        var b;
        if (a && !this.Rk)
            for (pa("[Construct 2] Suspending"), this.Rk = !0, -1 !== this.qs && c && c(this.qs), -1 !== this.Ws && clearTimeout(this.Ws), a = 0, b = this.Ul.length; a < b; a++) this.Ul[a](!0);
        else if (!a && this.Rk) {
            pa("[Construct 2] Resuming");
            this.Rk = !1;
            this.Dn = tb();
            this.di = tb();
            a = this.ol = this.cn = 0;
            for (b = this.Ul.length; a < b; a++) this.Ul[a](!1);
            this.Hb(!1)
        }
    };
    f.prototype.fu = function(a) {
        this.Ul.push(a)
    };
    f.prototype.tg = function(a) {
        return this.Rn[a]
    };
    f.prototype.hl = function(a) {
        a && a.project || sa("Project model unavailable");
        a = a.project;
        this.name = a[0];
        this.Tu = a[1];
        this.jd = a[12];
        this.Yu = a[12];
        this.mc = a[10];
        this.lc = a[11];
        this.$w = this.mc / 2;
        this.ax = this.lc / 2;
        this.Ob && !this.oe && (4 <= a[12] || 0 === a[12]) && (pa("[Construct 2] Letterbox scale fullscreen modes are not supported on this platform - falling back to 'Scale outer'"), this.Yu = this.jd = 3);
        this.it = a[18];
        this.Xg = a[19];
        if (0 === this.Xg) {
            var b = new Image;
            b.crossOrigin = "anonymous";
            this.Hx(b, "loading-logo.png");
            this.Wg = {
                Nn: b
            }
        } else if (4 === this.Xg) {
            b = new Image;
            b.src = "";
            var g = new Image;
            g.src = "";
            var c = new Image;
            c.src = "";
            var k = new Image;
            k.src = "";
            var n = new Image;
            n.src = "";
            var p = new Image;
            p.src = "";
            var d = new Image;
            d.src = "";
            var e = new Image;
            e.src = "";
            var q = new Image;
            q.src = "";
            var h = new Image;
            h.src = "";
            var m = new Image;
            m.src = "";
            var l = new Image;
            l.src = "";
            this.Wg = {
                Nn: [b, g, c, k],
                DE: [n, p, d, e],
                ZF: [q, h, m, l]
            }
        }
        this.yl = a[21];
        this.Rn = Zc();
        this.uf = new H(this);
        b = 0;
        for (g = a[2].length; b < g; b++) d = a[2][b], c = this.tg(d[0]), Mb(d, c.prototype), e = new c(this), e.Oo = d[1], e.Sg = d[2], e.bI = d[5], e.xw = d[9], e.Y && e.Y(), this.plugins.push(e);
        this.Rn = Zc();
        b = 0;
        for (g = a[3].length; b < g; b++) {
            d = a[3][b];
            n = this.tg(d[1]);
            e = null;
            c = 0;
            for (k = this.plugins.length; c < k; c++)
                if (this.plugins[c] instanceof n) {
                    e = this.plugins[c];
                    break
                }
            q = new e.Ha(e);
            q.name = d[0];
            q.U = d[2];
            q.hr = d[3].slice(0);
            q.WF = d[3].length;
            q.fB = d[4];
            q.RC = d[5];
            q.Ca = d[11];
            q.U ? (q.sj = [], q.Qf = this.zk++, q.nb = null) : (q.sj = null, q.Qf = -1, q.nb = []);
            q.Xm = null;
            q.Ti = null;
            q.Mu = null;
            q.Zc = !1;
            q.yd = null;
            d[6] ? (q.Wl = d[6][0], q.Zo = d[6][1], q.Xl = d[6][2]) : (q.Wl = null, q.Zo = 0, q.Xl = 0);
            d[7] ? q.vd = d[7] : q.vd = null;
            q.index = b;
            q.d = [];
            q.Nm = [];
            q.jg = [new Nb(q)];
            q.gf = 0;
            q.le = null;
            q.EB = 0;
            q.Lj = !0;
            q.jp = Ob;
            q.WC = Pb;
            q.bD = Qb;
            q.ba = Rb;
            q.El = Sb;
            q.hh = Ub;
            q.Se = Vb;
            q.en = Wb;
            q.Iq = hc;
            q.Lq = ic;
            q.xd = jc;
            q.Mq = kc;
            q.Em = new Ab(this.mc, this.lc);
            q.om = !0;
            q.pm = !1;
            q.ka = {};
            q.toString = lc;
            q.ub = [];
            c = 0;
            for (k = d[8].length; c < k; c++) {
                h = d[8][c];
                m = this.tg(h[1]);
                l = null;
                n = 0;
                for (p = this.ub.length; n < p; n++)
                    if (this.ub[n] instanceof m) {
                        l = this.ub[n];
                        break
                    }
                l || (l = new m(this), l.zw = [], l.Sr = new ma, l.Y && l.Y(), this.ub.push(l)); - 1 === l.zw.indexOf(q) && l.zw.push(q);
                n = new l.Ha(l, q);
                n.name = h[0];
                n.Ca = h[2];
                n.Y();
                q.ub.push(n)
            }
            q.global = d[9];
            q.nr = d[10];
            q.ja = [];
            c = 0;
            for (k = d[12].length; c < k; c++) q.ja.push({
                id: d[12][c][0],
                name: d[12][c][1],
                Ub: -1,
                ue: !1,
                Ya: !0,
                index: c
            });
            q.wI = d[13];
            this.it && !q.U && !q.nr && e.Sg || q.Y();
            q.name && (this.types[q.name] = q);
            this.K.push(q);
            e.Oo && (c = new e.wa(q), c.uid = this.yl++, c.kx = this.Bw++, c.Wh = 0, c.Gk = mc, c.toString = nc, c.D = d[14], c.Y(), q.d.push(c), this.Zf[c.uid.toString()] = c)
        }
        b = 0;
        for (g = a[4].length; b < g; b++)
            for (n = a[4][b], p = this.K[n[0]], c = 1, k = n.length; c < k; c++) d = this.K[n[c]], d.nb.push(p), p.sj.push(d);
        b = 0;
        for (g = a[28].length; b < g; b++) {
            n = a[28][b];
            p = [];
            c = 0;
            for (k = n.length; c < k; c++) p.push(this.K[n[c]]);
            c = 0;
            for (k = p.length; c < k; c++) p[c].Zc = !0, p[c].yd = p
        }
        if (0 < this.zk)
            for (b = 0, g = this.K.length; b < g; b++)
                if (d = this.K[b], !d.U && d.nb.length) {
                    d.Xm = Array(this.zk);
                    d.Ti = Array(this.zk);
                    d.Mu = Array(this.zk);
                    q = [];
                    c = l = m = h = 0;
                    for (k = d.nb.length; c < k; c++)
                        for (e = d.nb[c], d.Xm[e.Qf] = h, h += e.WF, d.Ti[e.Qf] = m, m += e.fB, d.Mu[e.Qf] = l, l += e.RC, n = 0, p = e.ja.length; n < p; n++) q.push(Ta({}, e.ja[n]));
                    d.ja = q.concat(d.ja);
                    c = 0;
                    for (k = d.ja.length; c < k; c++) d.ja[c].index = c
                }
        b = 0;
        for (g = a[5].length; b < g; b++) d = a[5][b], c = new oc(this, d), this.Fr[c.name] = c, this.Pe.push(c);
        b = 0;
        for (g = a[6].length; b < g; b++) d = a[6][b], c = new pc(this, d), this.Aq[c.name] = c, this.Pf.push(c);
        b = 0;
        for (g = this.Pf.length; b < g; b++) this.Pf[b].Gb();
        b = 0;
        for (g = this.Pf.length; b < g; b++) this.Pf[b].ct();
        b = 0;
        for (g = this.fp.length; b < g; b++) this.fp[b].Gb();
        B(this.fp);
        this.cB = a[7];
        this.Cq = a[8];
        this.Xd = a[9];
        this.kk = 1;
        this.fC = a[13];
        this.ib = a[14];
        this.uu = a[15];
        this.UF = a[17];
        this.ds = a[20];
        this.dB = 0 < this.ds;
        this.wE = a[22];
        this.Pd = this.wy = a[23];
        this.YB = a[24];
        this.EE = a[25];
        this.hb = a[27] && !this.Qg;
        this.So = Date.now();
        B(this.Rn);
        this.DD()
    };
    var g = !1,
        k = 0,
        p = [];
    f.prototype.ME = function(a, b) {
        function g() {
            k--;
            c.mw()
        }
        var c = this;
        a.addEventListener("load", g);
        a.addEventListener("error", g);
        p.push([a, b]);
        this.mw()
    };
    f.prototype.mw = function() {
        for (var a; p.length && 100 > k;) k++, a = p.shift(), this.Hx(a[0], a[1])
    };
    f.prototype.mt = function(a, b) {
        a.cocoonLazyLoad = !0;
        a.onerror = function(b) {
            g = a.nu = !0;
            console && console.error && console.error("Error loading image '" +
                a.src + "': ", b)
        };
        this.oe ? a.src = b : a.src || ("undefined" !== typeof XAPKReader ? XAPKReader.get(b, function(b) {
            a.src = b
        }, function(c) {
            g = a.nu = !0;
            console && console.error && console.error("Error extracting image '" + b + "' from expansion file: ", c)
        }) : (a.crossOrigin = "anonymous", this.ME(a, b)));
        this.xi.push(a)
    };
    f.prototype.OC = function(a) {
        var b, g;
        b = 0;
        for (g = this.xi.length; b < g; b++)
            if (this.xi[b].yB === a) return this.xi[b];
        return null
    };
    var q = 0,
        Q = !1;
    f.prototype.sD = function() {
        this.Ei && (q = this.Ei.pF(this.cB))
    };
    f.prototype.iu = function() {
        var a = q,
            b = 0,
            g = 0,
            c = !0,
            k, n, g = 0;
        for (k = this.xi.length; g < k; g++) {
            n = this.xi[g];
            var d = n.nq;
            if (!d || 0 >= d) d = 5E4;
            a += d;
            n.src && (n.complete || n.loaded) && !n.nu ? b += d : c = !1
        }
        c && this.EE && this.Ei && (Q || (this.Ei.yF(), Q = !0), g = this.Ei.cD(), b += g, g < q && (c = !1));
        this.ta = 0 == a ? 1 : b / a;
        return c
    };
    var J = !1;
    f.prototype.go = function() {
        if (this.I || this.M) {
            var a = this.I || this.es;
            this.Gc && this.hx();
            var c = window.innerWidth,
                k = window.innerHeight;
            this.mj === c && this.lj === k || this.setSize(c, k);
            this.ta = 0;
            this.Qv = -1;
            var n = this;
            if (this.iu() && (4 !== this.Xg || J)) this.tD();
            else {
                k = Date.now() - this.So;
                if (a) {
                    var d = this.width,
                        p = this.height,
                        c = this.devicePixelRatio;
                    if (3 > this.Xg && (this.Td || 500 <= k && this.Qv != this.ta)) {
                        a.clearRect(0, 0, d, p);
                        var k = d / 2,
                            p = p / 2,
                            d = 0 === this.Xg && this.Wg.Nn.complete,
                            q = 40 * c,
                            e = 0,
                            h = 80 * c,
                            l;
                        if (d) {
                            var m = this.Wg.Nn,
                                h = m.width * c;
                            l = m.height * c;
                            q = h / 2;
                            e = l / 2;
                            a.drawImage(m, Ja(k - q), Ja(p - e), h, l)
                        }
                        1 >= this.Xg ? (k = Ja(k - q) + .5, p = Ja(p + (e + (d ? 12 * c : 0))) + .5, a.fillStyle = g ? "red" : "DodgerBlue", a.fillRect(k, p, Math.floor(h * this.ta), 6 * c), a.strokeStyle = "black", a.strokeRect(k, p, h, 6 * c), a.strokeStyle = "white", a.strokeRect(k - 1 * c, p - 1 * c, h + 2 * c, 8 * c)) : 2 === this.Xg && (a.font = this.oe ? "12pt ArialMT" : "12pt Arial", a.fillStyle = g ? "#f00" : "#999", a.vI = "middle", c = Math.round(100 * this.ta) + "%", d = a.measureText ? a.measureText(c) : null, a.fillText(c, k - (d ? d.width : 0) / 2, p));
                        this.Qv = this.ta
                    } else if (4 === this.Xg) {
                        this.dC(a);
                        b ? b(function() {
                            n.go()
                        }) : setTimeout(function() {
                            n.go()
                        }, 16);
                        return
                    }
                }
                setTimeout(function() {
                    n.go()
                }, this.Td ? 10 : 100)
            }
        }
    };
    var z = -1,
        n = "undefined" === typeof cr_is_preview ? 200 : 0,
        D = !0,
        E = !1,
        w = 0,
        v = 0,
        y = "undefined" === typeof cr_is_preview ? 3E3 : 0,
        x = null,
        u = null,
        G = 0;
    f.prototype.dC = function(a) {
        if (!J) {
            for (var b = Math.ceil(this.width), c = Math.ceil(this.height), k = this.Wg.Nn, d = this.Wg.DE, p = this.Wg.ZF, q = 0; 4 > q; ++q)
                if (!k[q].complete || !d[q].complete || !p[q].complete) return;
            0 === G && (z = Date.now());
            var q = Date.now(),
                e = !1,
                l = a,
                m, f;
            D || E ? (a.clearRect(0, 0, b, c), x && x.width === b && x.height === c || (x = document.createElement("canvas"), x.width = b, x.height = c, u = x.getContext("2d")), l = u, e = !0, D && 1 === G && (z = Date.now())) : a.globalAlpha = 1;
            l.fillStyle = "#333333";
            l.fillRect(0, 0, b, c);
            256 < this.pk ? (m = ab(.22 * c, 105, .6 * b), f = .25 * m, l.drawImage(h(d, m), .5 * b - m / 2, .2 * c - f / 2, m, f), f = m = Math.min(.395 * c, .95 * b), l.drawImage(h(k, m), .5 * b - m / 2, .485 * c - f / 2, m, f), m = ab(.22 * c, 105, .6 * b), f = .25 * m, l.drawImage(h(p, m), .5 * b - m / 2, .868 * c - f / 2, m, f), l.fillStyle = "#3C3C3C", m = b, f = Math.max(.005 * c, 2), l.fillRect(0, .8 * c - f / 2, m, f), l.fillStyle = g ? "red" : "#E0FF65", m = b * this.ta, l.fillRect(.5 * b - m / 2, .8 * c - f / 2, m, f)) : (f = m = .55 * c, l.drawImage(h(k, m), .5 * b - m / 2, .45 * c - f / 2, m, f), l.fillStyle = "#3C3C3C", m = b, f = Math.max(.005 * c, 2), l.fillRect(0, .85 * c -
                f / 2, m, f), l.fillStyle = g ? "red" : "#E0FF65", m = b * this.ta, l.fillRect(.5 * b - m / 2, .85 * c - f / 2, m, f));
            e && (D ? a.globalAlpha = 0 === G ? 0 : Math.min((q - z) / 300, 1) : E && (a.globalAlpha = Math.max(1 - (q - v) / 300, 0)), a.drawImage(x, 0, 0, b, c));
            D && 300 <= q - z && 2 <= G && (D = !1, w = q);
            !D && q - w >= y && !E && 1 <= this.ta && (E = !0, v = q);
            if (E && q - v >= 300 + n || "undefined" !== typeof cr_is_preview && 1 <= this.ta && 500 > Date.now() - z) J = !0, E = D = !1, this.Wg = u = x = null;
            ++G
        }
    };
    f.prototype.tD = function() {
        this.Gc && (this.canvas.parentNode.removeChild(this.Gc), this.Gc = this.es = null);
        this.So = Date.now();
        this.di = tb();
        var a, b, g;
        if (this.it)
            for (a = 0, b = this.K.length; a < b; a++) g = this.K[a], g.U || g.nr || !g.Ua.Sg || g.Y();
        else this.ij = !1;
        a = 0;
        for (b = this.Pe.length; a < b; a++) this.Pe[a].zB();
        2 <= this.jd && (a = this.mc / this.lc, b = this.width / this.height, this.kk = 2 !== this.jd && b > a || 2 === this.jd && b < a ? this.height / this.lc : this.width / this.mc);
        this.Tu ? this.Fr[this.Tu].Ms() : this.Pe[0].Ms();
        this.it || (this.oj = 1, this.trigger(H.prototype.e.Ap, null), window.C2_RegisterSW && window.C2_RegisterSW());
        navigator.splashscreen && navigator.splashscreen.hide && navigator.splashscreen.hide();
        a = 0;
        for (b = this.K.length; a < b; a++) g = this.K[a], g.Iw && g.Iw();
        document.hidden || document.webkitHidden || document.mozHidden || document.msHidden ? window.cr_setSuspended(!0) : this.Hb(!1);
        this.Sc && AppMobi.webview.execute("onGameReady();")
    };
    f.prototype.Hb = function(a, g, c) {
        if (this.Ra) {
            var k = tb();
            if (c || !this.Rk || a) {
                a || (b ? this.qs = b(this.dy) : this.Ws = setTimeout(this.dy, this.bj ? 1 : 16));
                g = g || k;
                var n = this.jd;
                ((c = (document.mozFullScreen || document.webkitIsFullScreen || document.fullScreen || !!document.msFullscreenElement) && !this.Cd) || this.Qk) && 0 < this.Sh && (n = this.Sh);
                if (0 < n) {
                    var n = window.innerWidth,
                        d = window.innerHeight;
                    this.mj === n && this.lj === d || this.setSize(n, d)
                }
                this.Ob || (c ? this.$m || (this.$m = !0) : this.$m ? (this.$m = !1, 0 === this.jd && this.setSize(Math.round(this.Hw / this.devicePixelRatio), Math.round(this.Gw / this.devicePixelRatio), !0)) : (this.Hw = this.width, this.Gw = this.height));
                this.ij && (c = this.iu(), this.oj = this.ta, c && (this.ij = !1, this.ta = 1, this.trigger(H.prototype.e.Ap, null), window.C2_RegisterSW && window.C2_RegisterSW()));
                this.aE(g);
                !this.O && !this.Td || this.sr || this.Tl || a || (this.O = !1, this.M ? this.Nc() : this.Ad(), this.Ql && (this.canvas && this.canvas.toDataURL && (this.Sx = this.canvas.toDataURL(this.Ql[0], this.Ql[1]), window.cr_onSnapshot && window.cr_onSnapshot(this.Sx), this.trigger(H.prototype.e.Dz, null)), this.Ql = null));
                this.$H || (this.lg++, this.yk++, this.cn++);
                this.ol += tb() - k
            }
        }
    };
    f.prototype.aE = function(a) {
        var b, g, c, k, n, d, p, q;
        1E3 <= a - this.di && (this.di += 1E3, 1E3 <= a - this.di && (this.di = a), this.Eq = this.cn, this.cn = 0, this.mq = this.ol, this.ol = 0);
        b = 0;
        0 !== this.Dn && (b = a - this.Dn, 0 > b && (b = 0), this.Mh = b /= 1E3, .5 < this.Mh ? this.Mh = 0 : this.Mh > 1 / this.rw && (this.Mh = 1 / this.rw));
        this.Dn = a;
        this.Gg = this.Mh * this.oh;
        this.vc.add(this.Gg);
        this.pg.add(b);
        a = (document.mozFullScreen || document.webkitIsFullScreen || document.fullScreen || !!document.msFullscreenElement || this.Qk) && !this.Cd;
        2 <= this.jd || a && 0 < this.Sh ? (b = this.mc / this.lc, g = this.width / this.height, c = this.jd, a && 0 < this.Sh && (c = this.Sh), this.kk = 2 !== c && g > b || 2 === c && g < b ? this.height / this.lc : this.width / this.mc, this.Ra && (this.Ra.xx(this.Ra.scrollX), this.Ra.yx(this.Ra.scrollY))) : this.kk = this.Yh ? this.devicePixelRatio : 1;
        this.Ic();
        this.Ne++;
        this.uf.eF();
        this.Ne--;
        this.Ic();
        this.Ne++;
        g = this.Fw.qh();
        a = 0;
        for (b = g.length; a < b; a++) g[a].lI();
        a = 0;
        for (b = this.K.length; a < b; a++)
            if (d = this.K[a], !d.U && (d.ub.length || d.nb.length))
                for (g = 0, c = d.d.length; g < c; g++)
                    for (p = d.d[g], k = 0, n = p.qa.length; k < n; k++) p.qa[k].Hb();
        a = 0;
        for (b = this.K.length; a < b; a++)
            if (d = this.K[a], !d.U && (d.ub.length || d.nb.length))
                for (g = 0, c = d.d.length; g < c; g++)
                    for (p = d.d[g], k = 0, n = p.qa.length; k < n; k++) q = p.qa[k], q.CE && q.CE();
        g = this.Xr.qh();
        a = 0;
        for (b = g.length; a < b; a++) g[a].Hb();
        this.Ne--;
        this.yD();
        for (a = 0; this.Ih && 10 > a++;) this.Gu(this.Ih);
        a = 0;
        for (b = this.Pf.length; a < b; a++) this.Pf[a].Xq = !1;
        this.Ra.Qh && this.Ra.Qh.Tb();
        B(this.Bo);
        this.Er = !1;
        this.Ne++;
        a = 0;
        for (b = this.K.length; a < b; a++)
            if (d = this.K[a], !d.U && (d.ub.length || d.nb.length))
                for (g = 0, c = d.d.length; g < c; g++)
                    for (p = d.d[g], k = 0, n = p.qa.length; k < n; k++) q = p.qa[k], q.bp && q.bp();
        g = this.Yr.qh();
        a = 0;
        for (b = g.length; a < b; a++) g[a].bp();
        this.Ne--
    };
    f.prototype.Gu = function(a) {
        var b = this.Ra;
        this.Ra.AF();
        var g, c, k;
        if (this.M)
            for (g = 0, c = this.K.length; g < c; g++) k = this.K[g], k.U || !k.gp || k.global && 0 !== k.d.length || -1 !== a.Lk.indexOf(k) || k.gp();
        b == a && B(this.uf.td);
        B(this.Bo);
        this.ux(!0);
        a.Ms();
        this.ux(!1);
        this.Er = this.O = !0;
        this.Ic()
    };
    f.prototype.ux = function(a) {
        var b, g, c, k, n, d, p, q, e;
        b = 0;
        for (g = this.ub.length; b < g; b++) c = this.ub[b], a ? c.zl && c.zl() : c.Al && c.Al();
        b = 0;
        for (g = this.K.length; b < g; b++)
            if (c = this.K[b], c.global || c.Ua.Oo)
                for (k = 0, n = c.d.length; k < n; k++)
                    if (d = c.d[k], a ? d.zl && d.zl() : d.Al && d.Al(), d.qa)
                        for (p = 0, q = d.qa.length; p < q; p++) e = d.qa[p], a ? e.zl && e.zl() : e.Al && e.Al()
    };
    f.prototype.Zl = function(a) {
        this.Xr.add(a)
    };
    f.prototype.FF = function(a) {
        this.Yr.add(a)
    };
    f.prototype.Vi = function(a) {
        return a && -1 !== a.ul ? this.Mh * a.ul : this.Gg
    };
    f.prototype.Ad = function() {
        this.Ra.Ad(this.I);
        this.Sc && this.I.present()
    };
    f.prototype.Nc = function() {
        this.hb && (this.Nh = 1, this.Ra.Oi(this.M));
        this.Ra.Nc(this.M);
        this.M.GE()
    };
    f.prototype.Pp = function(a) {
        a && this.Qm.push(a)
    };
    f.prototype.UE = function(a) {
        $a(this.Qm, a)
    };
    f.prototype.Xi = function(a) {
        a = a.toString();
        return this.Zf.hasOwnProperty(a) ? this.Zf[a] : null
    };
    var L = [];
    f.prototype.sg = function(a) {
        var b, g;
        b = a.type.name;
        var c = null;
        if (this.Lh.hasOwnProperty(b)) {
            if (c = this.Lh[b], c.contains(a)) return
        } else c = L.length ? L.pop() : new ma, this.Lh[b] = c;
        c.add(a);
        this.Mg = !0;
        if (a.Zc)
            for (b = 0, g = a.siblings.length; b < g; b++) this.sg(a.siblings[b]);
        this.mr && c.ak.push(a);
        this.kr || (this.Ne++, this.trigger(Object.getPrototypeOf(a.type.Ua).e.Dt, a), this.Ne--)
    };
    f.prototype.Ic = function() {
        if (this.Mg) {
            var a, b, g, c, k, n;
            this.mr = !0;
            g = 0;
            for (k = this.Le.length; g < k; ++g)
                for (a = this.Le[g], b = a.type, b.d.push(a), c = 0, n = b.nb.length; c < n; ++c) b.nb[c].d.push(a), b.nb[c].Lj = !0;
            B(this.Le);
            this.pz();
            sb(this.Lh);
            this.Mg = this.mr = !1
        }
    };
    f.prototype.pz = function() {
        for (var a in this.Lh) this.Lh.hasOwnProperty(a) && this.Jy(this.Lh[a])
    };
    f.prototype.Jy = function(a) {
        var b = a.qh(),
            g = b[0].type,
            c, k, n, d, p, q;
        ub(g.d, a);
        g.Lj = !0;
        0 === g.d.length && (g.pm = !1);
        c = 0;
        for (k = g.nb.length; c < k; ++c) q = g.nb[c], ub(q.d, a), q.Lj = !0;
        c = 0;
        for (k = this.uf.td.length; c < k; ++c)
            if (p = this.uf.td[c], p.cd.hasOwnProperty(g.index) && ub(p.cd[g.index].Uf, a), !g.U)
                for (n = 0, d = g.nb.length; n < d; ++n) q = g.nb[n], p.cd.hasOwnProperty(q.index) && ub(p.cd[q.index].Uf, a);
        if (p = b[0].q) {
            if (p.be)
                for (n = p.d, c = 0, k = n.length; c < k; ++c) d = n[c], a.contains(d) && (d.La(), p.Hc.update(d, d.ld, null), d.ld.set(0, 0, -1, -1));
            ub(p.d, a);
            p.Ll(0)
        }
        for (c = 0; c < b.length; ++c) this.Iy(b[c], g);
        a.clear();
        L.push(a);
        this.O = !0
    };
    f.prototype.Iy = function(a, b) {
        var g, c, k;
        g = 0;
        for (c = this.Qm.length; g < c; ++g) this.Qm[g](a);
        a.Dg && b.Em.update(a, a.Dg, null);
        (g = a.q) && g.Cj(a, !0);
        if (a.qa)
            for (g = 0, c = a.qa.length; g < c; ++g) k = a.qa[g], k.of && k.of(), k.behavior.Sr.remove(a);
        this.Fw.remove(a);
        this.Xr.remove(a);
        this.Yr.remove(a);
        a.of && a.of();
        this.Zf.hasOwnProperty(a.uid.toString()) && delete this.Zf[a.uid.toString()];
        this.Sn--;
        100 > b.Nm.length && b.Nm.push(a)
    };
    f.prototype.Im = function(a, b, g, c) {
        if (a.U) {
            var k = Ja(Math.random() * a.sj.length);
            return this.Im(a.sj[k], b, g, c)
        }
        return a.le ? this.Eg(a.le, b, !1, g, c, !1) : null
    };
    var Y = [];
    f.prototype.Eg = function(a, b, g, c, k, n) {
        var d, p, q, e;
        if (!a) return null;
        var h = this.K[a[1]],
            m = h.Ua.Sg;
        if (this.ij && m && !h.nr || m && !this.M && 11 === a[0][11]) return null;
        var l = b;
        m || (b = null);
        var f;
        h.Nm.length ? (f = h.Nm.pop(), f.Jd = !0, h.Ua.wa.call(f, h)) : (f = new h.Ua.wa(h), f.Jd = !1);
        !g || n || this.Zf.hasOwnProperty(a[2].toString()) ? f.uid = this.yl++ : f.uid = a[2];
        this.Zf[f.uid.toString()] = f;
        f.kx = this.Bw++;
        f.Wh = h.d.length;
        d = 0;
        for (p = this.Le.length; d < p; ++d) this.Le[d].type === h && f.Wh++;
        f.Gk = mc;
        f.toString = nc;
        q = a[3];
        if (f.Jd) sb(f.ka);
        else {
            f.ka = {};
            if ("undefined" !== typeof cr_is_preview)
                for (f.wv = [], f.wv.length = q.length, d = 0, p = q.length; d < p; d++) f.wv[d] = q[d][1];
            f.ic = [];
            f.ic.length = q.length
        }
        d = 0;
        for (p = q.length; d < p; d++) f.ic[d] = q[d][0];
        if (m) {
            var r = a[0];
            f.x = ta(c) ? r[0] : c;
            f.y = ta(k) ? r[1] : k;
            f.z = r[2];
            f.width = r[3];
            f.height = r[4];
            f.depth = r[5];
            f.j = r[6];
            f.opacity = r[7];
            f.gc = r[8];
            f.hc = r[9];
            f.Xb = r[10];
            d = r[11];
            !this.M && h.ja.length && (f.Xb = d);
            f.fe = Cb(f.Xb);
            this.L && Db(f, f.Xb, this.L);
            if (f.Jd) {
                d = 0;
                for (p = r[12].length; d < p; d++)
                    for (q = 0, e = r[12][d].length; q < e; q++) f.xb[d][q] = r[12][d][q];
                f.lb.set(0, 0, 0, 0);
                f.Dg.set(0, 0, -1, -1);
                f.ld.set(0, 0, -1, -1);
                f.Lc.Ij(f.lb);
                B(f.Xp)
            } else {
                f.xb = r[12].slice(0);
                d = 0;
                for (p = f.xb.length; d < p; d++) f.xb[d] = r[12][d].slice(0);
                f.Na = [];
                f.ug = [];
                f.ug.length = h.ja.length;
                f.lb = new Ma(0, 0, 0, 0);
                f.Dg = new Ma(0, 0, -1, -1);
                f.ld = new Ma(0, 0, -1, -1);
                f.Lc = new Na;
                f.Xp = [];
                f.gb = qc;
                f.UA = rc;
                f.Mc = sc;
                f.La = tc;
                f.qy = uc;
                f.ht = vc;
                f.kf = Bc
            }
            f.ae = !1;
            f.IF = 0;
            f.HF = 0;
            f.GF = null;
            14 === r.length && (f.ae = !0, f.IF = r[13][0], f.HF = r[13][1], f.GF = r[13][2]);
            d = 0;
            for (p = h.ja.length; d < p; d++) f.ug[d] = !0;
            f.hg = !0;
            f.Xe = Cc;
            f.Xe();
            f.ry = !!f.Na.length;
            f.wm = !0;
            f.aq = !0;
            h.om = !0;
            f.visible = !0;
            f.ul = -1;
            f.q = b;
            f.Ze = b.d.length;
            f.Nh = 0;
            "undefined" === typeof f.xa && (f.xa = null);
            this.O = f.Jh = !0
        }
        var D;
        B(Y);
        d = 0;
        for (p = h.nb.length; d < p; d++) Y.push.apply(Y, h.nb[d].ub);
        Y.push.apply(Y, h.ub);
        if (f.Jd)
            for (d = 0, p = Y.length; d < p; d++) {
                var v = Y[d];
                D = f.qa[d];
                D.Jd = !0;
                v.behavior.wa.call(D, v, f);
                r = a[4][d];
                q = 0;
                for (e = r.length; q < e; q++) D.D[q] = r[q];
                D.Y();
                v.behavior.Sr.add(f)
            } else
                for (f.qa = [], d = 0, p = Y.length; d < p; d++) v = Y[d], D = new v.behavior.wa(v, f), D.Jd = !1, D.D = a[4][d].slice(0), D.Y(), f.qa.push(D), v.behavior.Sr.add(f);
        r = a[5];
        if (f.Jd)
            for (d = 0, p = r.length; d < p; d++) f.D[d] = r[d];
        else f.D = r.slice(0);
        this.Le.push(f);
        this.Mg = !0;
        b && (b.jk(f, !0), 1 !== b.se || 1 !== b.te) && (h.pm = !0);
        this.Sn++;
        if (h.Zc) {
            if (f.Zc = !0, f.Jd ? B(f.siblings) : f.siblings = [], !g && !n) {
                d = 0;
                for (p = h.yd.length; d < p; d++)
                    if (h.yd[d] !== h) {
                        if (!h.yd[d].le) return null;
                        f.siblings.push(this.Eg(h.yd[d].le, l, !1, m ? f.x : c, m ? f.y : k, !0))
                    }
                d = 0;
                for (p = f.siblings.length; d < p; d++)
                    for (f.siblings[d].siblings.push(f), q = 0; q < p; q++) d !== q && f.siblings[d].siblings.push(f.siblings[q])
            }
        } else f.Zc = !1, f.siblings = null;
        f.Y();
        d = 0;
        for (p = f.qa.length; d < p; d++) f.qa[d].ix && f.qa[d].ix();
        return f
    };
    f.prototype.gn = function(a) {
        var b, g;
        b = 0;
        for (g = this.Ra.V.length; b < g; b++) {
            var c = this.Ra.V[b];
            if (Jb(c.name, a)) return c
        }
        return null
    };
    f.prototype.Wi = function(a) {
        a = Ja(a);
        0 > a && (a = 0);
        a >= this.Ra.V.length && (a = this.Ra.V.length - 1);
        return this.Ra.V[a]
    };
    f.prototype.$C = function(a) {
        return va(a) ? this.Wi(a) : this.gn(a.toString())
    };
    f.prototype.fq = function(a) {
        var b, g;
        b = 0;
        for (g = a.length; b < g; b++) a[b].ba().ua = !0
    };
    f.prototype.El = function(a) {
        var b, g;
        b = 0;
        for (g = a.length; b < g; b++) a[b].El()
    };
    f.prototype.hh = function(a) {
        var b, g;
        b = 0;
        for (g = a.length; b < g; b++) a[b].hh()
    };
    f.prototype.Se = function(a) {
        var b, g;
        b = 0;
        for (g = a.length; b < g; b++) a[b].Se()
    };
    f.prototype.ny = function(a) {
        if (a.om) {
            var b, g, c = a.d;
            b = 0;
            for (g = c.length; b < g; ++b) c[b].ht();
            c = this.Le;
            b = 0;
            for (g = c.length; b < g; ++b) c[b].type === a && c[b].ht();
            a.om = !1
        }
    };
    f.prototype.cv = function(a, b, g, c) {
        var k, d, n = a ? 1 !== a.se || 1 !== a.te : !1;
        if (b.U)
            for (a = 0, k = b.sj.length; a < k; ++a) d = b.sj[a], n || d.pm ? Xa(c, d.d) : (this.ny(d), d.Em.zo(g, c));
        else n || b.pm ? Xa(c, b.d) : (this.ny(b), b.Em.zo(g, c))
    };
    f.prototype.Xo = function(a, b, g) {
        var c = a.ba(),
            k, d, n, p, q = this.Eb().Kb.Wd,
            e, f, h;
        if (c.ua)
            for (c.ua = !1, B(c.d), k = 0, p = a.d.length; k < p; k++) n = a.d[k], n.La(), e = n.q.Ac(b, g, !0), f = n.q.Ac(b, g, !1), n.Mc(e, f) ? c.d.push(n) : q && c.ma.push(n);
        else {
            d = 0;
            h = q ? c.ma : c.d;
            k = 0;
            for (p = h.length; k < p; k++) n = h[k], n.La(), e = n.q.Ac(b, g, !0), f = n.q.Ac(b, g, !1), n.Mc(e, f) && (q ? c.d.push(n) : (c.d[d] = c.d[k], d++));
            h.length = d
        }
        a.xd();
        return c.Wq()
    };
    f.prototype.Ts = function(a, b) {
        if (!(a && b && a !== b && a.Jh && b.Jh)) return !1;
        a.La();
        b.La();
        var g = a.q,
            c = b.q,
            k, n, d, p, q, e, f, h;
        if (g === c || g.se === c.se && c.te === c.te && g.scale === c.scale && g.j === c.j && g.$e === c.$e) {
            if (!a.lb.FD(b.lb) || !a.Lc.yv(b.Lc) || a.ae && b.ae) return !1;
            if (a.ae) return this.by(a, b);
            if (b.ae) return this.by(b, a);
            f = a.xa && !a.xa.Zh();
            k = b.xa && !b.xa.Zh();
            if (!f && !k) return !0;
            f ? (a.xa.Hh(a.width, a.height, a.j), f = a.xa) : (this.Ue.Hj(a.Lc, a.x, a.y, a.width, a.height), f = this.Ue);
            k ? (b.xa.Hh(b.width, b.height, b.j), h = b.xa) : (this.Ue.Hj(b.Lc, b.x, b.y, b.width, b.height), h = this.Ue);
            return f.Mk(h, b.x - a.x, b.y - a.y)
        }
        f = a.xa && !a.xa.Zh();
        k = b.xa && !b.xa.Zh();
        f ? (a.xa.Hh(a.width, a.height, a.j), this.Ue.Lx(a.xa)) : this.Ue.Hj(a.Lc, a.x, a.y, a.width, a.height);
        f = this.Ue;
        k ? (b.xa.Hh(b.width, b.height, b.j), this.Ss.Lx(b.xa)) : this.Ss.Hj(b.Lc, b.x, b.y, b.width, b.height);
        h = this.Ss;
        k = 0;
        for (n = f.ve; k < n; k++) d = 2 * k, p = d + 1, q = f.Sb[d], e = f.Sb[p], f.Sb[d] = g.$c(q + a.x, e + a.y, !0), f.Sb[p] = g.$c(q + a.x, e + a.y, !1);
        f.La();
        k = 0;
        for (n = h.ve; k < n; k++) d = 2 * k, p = d + 1, q = h.Sb[d], e = h.Sb[p], h.Sb[d] = c.$c(q + b.x, e + b.y, !0), h.Sb[p] = c.$c(q + b.x, e + b.y, !1);
        h.La();
        return f.Mk(h, 0, 0)
    };
    var F = new Na;
    new Ma(0, 0, 0, 0);
    var P = [];
    f.prototype.by = function(a, b) {
        var g, c, k, n, d = b.lb,
            p = a.x,
            q = a.y;
        a.XH(d, P);
        var e = b.xa && !b.xa.Zh();
        g = 0;
        for (c = P.length; g < c; ++g)
            if (k = P[g], n = k.NE, d.GD(n, p, q) && (F.Ij(n), F.offset(p, q), F.yv(b.Lc)))
                if (e)
                    if (b.xa.Hh(b.width, b.height, b.j), k.gh) {
                        if (k.gh.Mk(b.xa, b.x - (p + n.left), b.y - (q + n.top))) return B(P), !0
                    } else {
                        if (this.Ue.Hj(F, 0, 0, n.right - n.left, n.bottom - n.top), this.Ue.Mk(b.xa, b.x, b.y)) return B(P), !0
                    }
        else if (k.gh) {
            if (this.Ue.Hj(b.Lc, 0, 0, b.width, b.height), k.gh.Mk(this.Ue, -(p + n.left), -(q + n.top))) return B(P), !0
        } else return B(P), !0;
        B(P);
        return !1
    };
    f.prototype.iy = function(a, b) {
        if (!b) return !1;
        var g, c, k, n, d;
        g = 0;
        for (c = a.ub.length; g < c; g++)
            if (a.ub[g].behavior instanceof b) return !0;
        if (!a.U)
            for (g = 0, c = a.nb.length; g < c; g++)
                for (d = a.nb[g], k = 0, n = d.ub.length; k < n; k++)
                    if (d.ub[k].behavior instanceof b) return !0;
        return !1
    };
    f.prototype.$s = function(a) {
        return this.iy(a, Rc.QG)
    };
    f.prototype.bt = function(a) {
        return this.iy(a, Rc.WG)
    };
    f.prototype.kB = function(a, b) {
        var g, c, k;
        g = 0;
        for (c = this.Bo.length; g < c; g++)
            if (k = this.Bo[g], k[0] == a && k[1] == b || k[0] == b && k[1] == a) return !0;
        return !1
    };
    var W = -1;
    f.prototype.trigger = function(a, b, g) {
        if (!this.Ra) return !1;
        var c = this.Ra.Qh;
        if (!c) return !1;
        var k = !1,
            n, d, p;
        W++;
        var q = c.sq;
        d = 0;
        for (p = q.length; d < p; ++d) n = this.fy(a, b, q[d], g), k = k || n;
        n = this.fy(a, b, c, g);
        W--;
        return k || n
    };
    f.prototype.fy = function(a, b, g, c) {
        var k = !1,
            n, d, p, q;
        if (b)
            for (p = this.Ys(a, b, b.type.name, g, c), k = k || p, q = b.type.nb, n = 0, d = q.length; n < d; ++n) p = this.Ys(a, b, q[n].name, g, c), k = k || p;
        else p = this.Ys(a, b, "system", g, c), k = k || p;
        return k
    };
    f.prototype.Ys = function(a, b, g, c, k) {
        var n, d = !1,
            p = !1,
            p = "undefined" !== typeof k,
            q = (p ? c.Ou : c.gy)[g];
        if (!q) return d;
        var e = null;
        c = 0;
        for (n = q.length; c < n; ++c)
            if (q[c].method == a) {
                e = q[c].xk;
                break
            }
        if (!e) return d;
        var f;
        p ? f = e[k] : f = e;
        if (!f) return null;
        c = 0;
        for (n = f.length; c < n; c++) a = f[c][0], k = f[c][1], p = this.LC(b, g, a, k), d = d || p;
        return d
    };
    f.prototype.LC = function(a, b, g, c) {
        var k, n, d = !1;
        this.Zs++;
        var p = this.Eb().Kb;
        p && this.El(p.nh);
        var q = 1 < this.Zs;
        this.El(g.nh);
        q && this.JE();
        var e = this.yo(g);
        e.Kb = g;
        a && (k = this.types[b].ba(), k.ua = !1, B(k.d), k.d[0] = a, this.types[b].xd());
        a = !0;
        if (g.parent) {
            b = e.ay;
            for (k = g.parent; k;) b.push(k), k = k.parent;
            b.reverse();
            k = 0;
            for (n = b.length; k < n; k++)
                if (!b[k].gF()) {
                    a = !1;
                    break
                }
        }
        a && (this.yk++, g.Wd ? g.fF(c) : g.Tb(), d = d || e.ci);
        this.po();
        q && this.AE();
        this.Se(g.nh);
        p && this.Se(p.nh);
        this.Mg && 0 === this.Ne && 0 === W && !this.or && this.Ic();
        this.Zs--;
        return d
    };
    f.prototype.Dk = function() {
        var a = this.Eb();
        return a.Kb.cc[a.Jb]
    };
    f.prototype.JD = function() {
        return 0 === this.Eb().Jb
    };
    f.prototype.JE = function() {
        this.Ln++;
        this.Ln >= this.Lr.length && this.Lr.push([])
    };
    f.prototype.AE = function() {
        this.Ln--
    };
    f.prototype.gv = function() {
        return this.Lr[this.Ln]
    };
    f.prototype.yo = function(a) {
        this.Tm++;
        this.Tm >= this.zq.length && this.zq.push(new Dc);
        var b = this.Eb();
        b.reset(a);
        return b
    };
    f.prototype.po = function() {
        this.Tm--
    };
    f.prototype.Eb = function() {
        return this.zq[this.Tm]
    };
    f.prototype.mx = function(a) {
        this.ql++;
        this.ql >= this.pl.length && this.pl.push(ba({
            name: a,
            index: 0,
            Cb: !1
        }));
        var b = this.hv();
        b.name = a;
        b.index = 0;
        b.Cb = !1;
        return b
    };
    f.prototype.gx = function() {
        this.ql--
    };
    f.prototype.hv = function() {
        return this.pl[this.ql]
    };
    f.prototype.jv = function(a, b) {
        for (var g, c, k, n, d, p; b;) {
            g = 0;
            for (c = b.xe.length; g < c; g++)
                if (p = b.xe[g], p instanceof Ec && Jb(a, p.name)) return p;
            b = b.parent
        }
        g = 0;
        for (c = this.Pf.length; g < c; g++)
            for (d = this.Pf[g], k = 0, n = d.Ig.length; k < n; k++)
                if (p = d.Ig[k], p instanceof Ec && Jb(a, p.name)) return p;
        return null
    };
    f.prototype.kv = function(a) {
        var b, g;
        b = 0;
        for (g = this.Pe.length; b < g; b++)
            if (this.Pe[b].Ca === a) return this.Pe[b];
        return null
    };
    f.prototype.jn = function(a) {
        var b, g;
        b = 0;
        for (g = this.K.length; b < g; b++)
            if (this.K[b].Ca === a) return this.K[b];
        return null
    };
    f.prototype.XC = function(a) {
        var b, g;
        b = 0;
        for (g = this.xg.length; b < g; b++)
            if (this.xg[b].Ca === a) return this.xg[b];
        return null
    };
    f.prototype.IB = function(a, b) {
        this.Ql = [a, b];
        this.O = !0
    };
    f.prototype.yD = function() {
        var a = this,
            b = this.Cs,
            g = this.Wf,
            c = this.Hn,
            k = !1;
        this.Qx && (k = !0, b = "__c2_continuouspreview", this.Qx = !1);
        if (b.length) {
            this.Ic();
            g = this.kF();
            if (e() && !this.Td) r(b, g, function() {
                pa("Saved state to IndexedDB storage (" + g.length + " bytes)");
                a.Wf = g;
                a.trigger(H.prototype.e.Bp, null);
                a.Wf = "";
                k && d()
            }, function(c) {
                try {
                    localStorage.setItem("__c2save_" +
                        b, g), pa("Saved state to WebStorage (" + g.length + " bytes)"), a.Wf = g, a.trigger(H.prototype.e.Bp, null), a.Wf = "", k && d()
                } catch (n) {
                    pa("Failed to save game state: " + c + "; " + n), a.trigger(H.prototype.e.Nt, null)
                }
            });
            else try {
                localStorage.setItem("__c2save_" + b, g), pa("Saved state to WebStorage (" + g.length + " bytes)"), a.Wf = g, this.trigger(H.prototype.e.Bp, null), a.Wf = "", k && d()
            } catch (n) {
                pa("Error saving to WebStorage: " + n), a.trigger(H.prototype.e.Nt, null)
            }
            this.Hn = this.Cs = "";
            this.kc = null
        }
        if (c.length) {
            if (e() && !this.Td) m(c, function(b) {
                b ? (a.kc = b, pa("Loaded state from IndexedDB storage (" + a.kc.length + " bytes)")) : (a.kc = localStorage.getItem("__c2save_" + c) || "", pa("Loaded state from WebStorage (" + a.kc.length + " bytes)"));
                a.Tl = !1;
                a.kc || (a.kc = null, a.trigger(H.prototype.e.km, null))
            }, function() {
                a.kc = localStorage.getItem("__c2save_" + c) || "";
                pa("Loaded state from WebStorage (" + a.kc.length + " bytes)");
                a.Tl = !1;
                a.kc || (a.kc = null, a.trigger(H.prototype.e.km, null))
            });
            else {
                try {
                    this.kc = localStorage.getItem("__c2save_" + c) || "", pa("Loaded state from WebStorage (" +
                        this.kc.length + " bytes)")
                } catch (p) {
                    this.kc = null
                }
                this.Tl = !1;
                a.kc || (a.kc = null, a.trigger(H.prototype.e.km, null))
            }
            this.Cs = this.Hn = ""
        }
        null !== this.kc && (this.Ic(), this.$D(this.kc) ? (this.Wf = this.kc, this.trigger(H.prototype.e.Mz, null), this.Wf = "") : a.trigger(H.prototype.e.km, null), this.kc = null)
    };
    f.prototype.kF = function() {
        var b, g, c, k, n, d, p, q = {
            c2save: !0,
            version: 1,
            rt: {
                time: this.vc.Da,
                walltime: this.pg.Da,
                timescale: this.oh,
                tickcount: this.lg,
                execcount: this.yk,
                next_uid: this.yl,
                running_layout: this.Ra.Ca,
                start_time_offset: Date.now() -
                    this.So
            },
            types: {},
            layouts: {},
            events: {
                groups: {},
                cnds: {},
                acts: {},
                vars: {}
            }
        };
        b = 0;
        for (g = this.K.length; b < g; b++)
            if (n = this.K[b], !n.U && !this.$s(n)) {
                d = {
                    instances: []
                };
                rb(n.ka) && (d.ex = a(n.ka));
                c = 0;
                for (k = n.d.length; c < k; c++) d.instances.push(this.Bs(n.d[c]));
                q.types[n.Ca.toString()] = d
            }
        b = 0;
        for (g = this.Pe.length; b < g; b++) c = this.Pe[b], q.layouts[c.Ca.toString()] = c.nc();
        k = q.events.groups;
        b = 0;
        for (g = this.xg.length; b < g; b++) c = this.xg[b], k[c.Ca.toString()] = this.Ik[c.Hk].Zi;
        g = q.events.cnds;
        for (p in this.Cg) this.Cg.hasOwnProperty(p) && (b = this.Cg[p], rb(b.ka) && (g[p] = {
            ex: a(b.ka)
        }));
        g = q.events.acts;
        for (p in this.vg) this.vg.hasOwnProperty(p) && (b = this.vg[p], rb(b.ka) && (g[p] = {
            ex: a(b.ka)
        }));
        g = q.events.vars;
        for (p in this.bk) this.bk.hasOwnProperty(p) && (b = this.bk[p], b.An || b.parent && !b.Vk || (g[p] = b.data));
        q.system = this.uf.nc();
        return JSON.stringify(q)
    };
    f.prototype.qx = function() {
        var a, b, g, c, k, n;
        this.Zf = {};
        a = 0;
        for (b = this.K.length; a < b; a++)
            if (g = this.K[a], !g.U)
                for (c = 0, k = g.d.length; c < k; c++) n = g.d[c], this.Zf[n.uid.toString()] = n
    };
    f.prototype.$D = function(a) {
        var b;
        try {
            b = JSON.parse(a)
        } catch (g) {
            return !1
        }
        if (!b.c2save || 1 < b.version) return !1;
        this.Ok = !0;
        a = b.rt;
        this.vc.reset();
        this.vc.Da = a.time;
        this.pg.reset();
        this.pg.Da = a.walltime || 0;
        this.oh = a.timescale;
        this.lg = a.tickcount;
        this.yk = a.execcount;
        this.So = Date.now() - a.start_time_offset;
        var c = a.running_layout;
        if (c !== this.Ra.Ca)
            if (c = this.kv(c)) this.Gu(c);
            else return;
        var k, n, d, p, q, e, f;
        e = b.types;
        for (n in e)
            if (e.hasOwnProperty(n) && (p = this.jn(parseInt(n, 10))) && !p.U && !this.$s(p)) {
                e[n].ex ? p.ka = e[n].ex : sb(p.ka);
                q = p.d;
                d = e[n].instances;
                c = 0;
                for (k = Fa(q.length, d.length); c < k; c++) this.In(q[c], d[c]);
                c = d.length;
                for (k = q.length; c < k; c++) this.sg(q[c]);
                c = q.length;
                for (k = d.length; c < k; c++) {
                    q = null;
                    if (p.Ua.Sg && (q = this.Ra.hn(d[c].w.l), !q)) continue;
                    q = this.Eg(p.le, q, !1, 0, 0, !0);
                    this.In(q, d[c])
                }
                p.Lj = !0
            }
        this.Ic();
        this.qx();
        k = b.layouts;
        for (n in k) k.hasOwnProperty(n) && (c = this.kv(parseInt(n, 10))) && c.Ec(k[n]);
        k = b.events.groups;
        for (n in k) k.hasOwnProperty(n) && (c = this.XC(parseInt(n, 10))) && this.Ik[c.Hk] && this.Ik[c.Hk].Gx(k[n]);
        c = b.events.cnds;
        for (n in this.Cg) this.Cg.hasOwnProperty(n) && (c.hasOwnProperty(n) ? this.Cg[n].ka = c[n].ex : this.Cg[n].ka = {});
        c = b.events.acts;
        for (n in this.vg) this.vg.hasOwnProperty(n) && (c.hasOwnProperty(n) ? this.vg[n].ka = c[n].ex : this.vg[n].ka = {});
        c = b.events.vars;
        for (n in c) c.hasOwnProperty(n) && this.bk.hasOwnProperty(n) && (this.bk[n].data = c[n]);
        this.yl = a.next_uid;
        this.Ok = !1;
        c = 0;
        for (k = this.Zm.length; c < k; ++c) q = this.Zm[c], this.trigger(Object.getPrototypeOf(q.type.Ua).e.dk, q);
        B(this.Zm);
        this.uf.Ec(b.system);
        c = 0;
        for (k = this.K.length; c < k; c++)
            if (p = this.K[c], !p.U && !this.$s(p))
                for (b = 0, n = p.d.length; b < n; b++) {
                    q = p.d[b];
                    if (p.Zc)
                        for (e = q.Gk(), B(q.siblings), a = 0, d = p.yd.length; a < d; a++) f = p.yd[a], p !== f && q.siblings.push(f.d[e]);
                    q.Df && q.Df();
                    if (q.qa)
                        for (a = 0, d = q.qa.length; a < d; a++) e = q.qa[a], e.Df && e.Df()
                }
        return this.O = !0
    };
    f.prototype.Bs = function(b, g) {
        var c, k, n, d, p;
        d = b.type;
        n = d.Ua;
        var q = {};
        g ? q.c2 = !0 : q.uid = b.uid;
        rb(b.ka) && (q.ex = a(b.ka));
        if (b.ic && b.ic.length)
            for (q.ivs = {}, c = 0, k = b.ic.length; c < k; c++) q.ivs[b.type.hr[c].toString()] = b.ic[c];
        if (n.Sg) {
            n = {
                x: b.x,
                y: b.y,
                w: b.width,
                h: b.height,
                l: b.q.Ca,
                zi: b.kf()
            };
            0 !== b.j && (n.a = b.j);
            1 !== b.opacity && (n.o = b.opacity);
            .5 !== b.gc && (n.hX = b.gc);
            .5 !== b.hc && (n.hY = b.hc);
            0 !== b.Xb && (n.bm = b.Xb);
            b.visible || (n.v = b.visible);
            b.Jh || (n.ce = b.Jh); - 1 !== b.ul && (n.mts = b.ul);
            if (d.ja.length)
                for (n.fx = [], c = 0, k = d.ja.length; c < k; c++) p = d.ja[c], n.fx.push({
                    name: p.name,
                    active: b.ug[p.index],
                    params: b.xb[p.index]
                });
            q.w = n
        }
        if (b.qa && b.qa.length)
            for (q.behs = {}, c = 0, k = b.qa.length; c < k; c++) d = b.qa[c], d.nc && (q.behs[d.type.Ca.toString()] = d.nc());
        b.nc && (q.data = b.nc());
        return q
    };
    f.prototype.ZC = function(a, b) {
        var g, c;
        g = 0;
        for (c = a.hr.length; g < c; g++)
            if (a.hr[g] === b) return g;
        return -1
    };
    f.prototype.VC = function(a, b) {
        var g, c;
        g = 0;
        for (c = a.qa.length; g < c; g++)
            if (a.qa[g].type.Ca === b) return g;
        return -1
    };
    f.prototype.In = function(a, b, g) {
        var c, k, n, d, p;
        p = a.type;
        var q = p.Ua;
        if (g) {
            if (!b.c2) return
        } else a.uid = b.uid;
        b.ex ? a.ka = b.ex : sb(a.ka);
        if (k = b.ivs)
            for (c in k) k.hasOwnProperty(c) && (n = this.ZC(p, parseInt(c, 10)), 0 > n || n >= a.ic.length || (d = k[c], null === d && (d = NaN), a.ic[n] = d));
        if (q.Sg) {
            n = b.w;
            a.q.Ca !== n.l && (k = a.q, a.q = this.Ra.hn(n.l), a.q ? (k.Cj(a, !0), a.q.jk(a, !0), a.gb(), a.q.Ll(0)) : (a.q = k, g || this.sg(a)));
            a.x = n.x;
            a.y = n.y;
            a.width = n.w;
            a.height = n.h;
            a.Ze = n.zi;
            a.j = n.hasOwnProperty("a") ? n.a : 0;
            a.opacity = n.hasOwnProperty("o") ? n.o : 1;
            a.gc = n.hasOwnProperty("hX") ? n.hX : .5;
            a.hc = n.hasOwnProperty("hY") ? n.hY : .5;
            a.visible = n.hasOwnProperty("v") ? n.v : !0;
            a.Jh = n.hasOwnProperty("ce") ? n.ce : !0;
            a.ul = n.hasOwnProperty("mts") ? n.mts : -1;
            a.Xb = n.hasOwnProperty("bm") ? n.bm : 0;
            a.fe = Cb(a.Xb);
            this.L && Db(a, a.Xb, this.L);
            a.gb();
            if (n.hasOwnProperty("fx"))
                for (g = 0, k = n.fx.length; g < k; g++) d = p.Lq(n.fx[g].name), 0 > d || (a.ug[d] = n.fx[g].active, a.xb[d] = n.fx[g].params);
            a.Xe()
        }
        if (p = b.behs)
            for (c in p) p.hasOwnProperty(c) && (g = this.VC(a, parseInt(c, 10)), 0 > g || a.qa[g].Ec(p[c]));
        b.data && a.Ec(b.data)
    };
    f.prototype.Pu = function(a, b, g) {
        window.resolveLocalFileSystemURL(cordova.file.applicationDirectory + "www/" + a, function(a) {
            a.file(b, g)
        }, g)
    };
    f.prototype.MC = function(a, b) {
        this.Pu("data.js", function(g) {
            var c = new FileReader;
            c.onload = function(b) {
                a(b.target.result)
            };
            c.onerror = b;
            c.readAsText(g)
        }, b)
    };
    var U = [],
        O = 0;
    f.prototype.Or = function() {
        if (U.length && !(8 <= O)) {
            O++;
            var a = U.shift();
            this.KB(a.filename, a.DF, a.iC)
        }
    };
    f.prototype.Qu = function(a, b, g) {
        var c = this;
        U.push({
            filename: a,
            DF: function(a) {
                O--;
                c.Or();
                b(a)
            },
            iC: function(a) {
                O--;
                c.Or();
                g(a)
            }
        });
        this.Or()
    };
    f.prototype.KB = function(a, b, g) {
        this.Pu(a, function(a) {
            var g = new FileReader;
            g.onload = function(a) {
                b(a.target.result)
            };
            g.readAsArrayBuffer(a)
        }, g)
    };
    f.prototype.NC = function(a, b, g) {
        var c = "",
            k = a.toLowerCase(),
            n = k.substr(k.length - 4),
            k = k.substr(k.length - 5);
        ".mp4" === n ? c = "video/mp4" : ".webm" === k ? c = "video/webm" : ".m4a" === n ? c = "audio/mp4" : ".mp3" === n && (c = "audio/mpeg");
        this.Qu(a, function(a) {
            a = URL.createObjectURL(new Blob([a], {
                type: c
            }));
            b(a)
        }, g)
    };
    f.prototype.HD = function(a) {
        return /^(?:[a-z]+:)?\/\//.test(a) || "data:" === a.substr(0, 5) || "blob:" === a.substr(0, 5)
    };
    f.prototype.Hx = function(a, b) {
        this.zn && !this.HD(b) ? this.NC(b, function(b) {
            a.src = b
        }, function(a) {
            // alert("Failed to load image: " + a)
        }) : a.src = b
    };
    f.prototype.Ho = function(a, b) {
        "undefined" !== typeof a.imageSmoothingEnabled ? a.imageSmoothingEnabled = b : (a.webkitImageSmoothingEnabled = b, a.mozImageSmoothingEnabled = b, a.msImageSmoothingEnabled = b)
    };
    Fc = function(a) {
        return new f(document.getElementById(a))
    };
    Gc = function(a, b) {
        return new f({
            dc: !0,
            width: a,
            height: b
        })
    };
    window.cr_createRuntime = Fc;
    window.cr_createDCRuntime = Gc;
    window.createCocoonJSRuntime = function() {
        window.c2cocoonjs = !0;
        var a = document.createElement("screencanvas") || document.createElement("canvas");
        a.Oe = !0;
        document.body.appendChild(a);
        a = new f(a);
        window.c2runtime = a;
        window.addEventListener("orientationchange", function() {
            window.c2runtime.setSize(window.innerWidth, window.innerHeight)
        });
        window.c2runtime.setSize(window.innerWidth, window.innerHeight);
        return a
    };
    window.createEjectaRuntime = function() {
        var a = new f(document.getElementById("canvas"));
        window.c2runtime = a;
        window.c2runtime.setSize(window.innerWidth, window.innerHeight);
        return a
    }
})();
window.cr_getC2Runtime = function() {
    var f = document.getElementById("c2canvas");
    return f ? f.c2runtime : window.c2runtime ? window.c2runtime : null
};
window.cr_getSnapshot = function(f, h) {
    var e = window.cr_getC2Runtime();
    e && e.IB(f, h)
};
window.cr_sizeCanvas = function(f, h) {
    if (0 !== f && 0 !== h) {
        var e = window.cr_getC2Runtime();
        e && e.setSize(f, h)
    }
};
window.cr_setSuspended = function(f) {
    var h = window.cr_getC2Runtime();
    h && h.setSuspended(f)
};
(function() {
    function f(a, b) {
        this.b = a;
        this.Qh = null;
        this.scrollX = this.b.mc / 2;
        this.scrollY = this.b.lc / 2;
        this.scale = 1;
        this.j = 0;
        this.Ui = !0;
        this.name = b[0];
        this.vE = b[1];
        this.uE = b[2];
        this.width = b[1];
        this.height = b[2];
        this.jy = b[3];
        this.Ox = b[4];
        this.Ca = b[5];
        var c = b[6],
            d, e;
        this.V = [];
        this.Lk = [];
        d = 0;
        for (e = c.length; d < e; d++) {
            var f = new Hc(this, c[d]);
            f.Dw = d;
            this.V.push(f)
        }
        c = b[7];
        this.Og = [];
        d = 0;
        for (e = c.length; d < e; d++) {
            var f = c[d],
                h = this.b.K[f[1]];
            h.le || (h.le = f);
            this.Og.push(f); - 1 === this.Lk.indexOf(h) && this.Lk.push(h)
        }
        this.ja = [];
        this.Na = [];
        this.hg = !0;
        this.xb = [];
        d = 0;
        for (e = b[8].length; d < e; d++) this.ja.push({
            id: b[8][d][0],
            name: b[8][d][1],
            Ub: -1,
            ue: !1,
            Ya: !0,
            index: d
        }), this.xb.push(b[8][d][2].slice(0));
        this.Xe();
        this.Ao = new Ma(0, 0, 1, 1);
        this.ss = new Ma(0, 0, 1, 1);
        this.eh = {}
    }

    function h(a, b) {
        return a.Ze - b.Ze
    }

    function e(a, b) {
        this.wc = a;
        this.b = a.b;
        this.d = [];
        this.scale = 1;
        this.j = 0;
        this.Of = !1;
        this.mg = new Ma(0, 0, 0, 0);
        this.ey = new Na;
        this.$a = this.Wa = this.ab = this.Va = 0;
        this.yi = !1;
        this.qg = -1;
        this.gq = 0;
        this.name = b[0];
        this.index = b[1];
        this.Ca = b[2];
        this.visible = b[3];
        this.Kc = b[4];
        this.We = b[5];
        this.se = b[6];
        this.te = b[7];
        this.opacity = b[8];
        this.bn = b[9];
        this.be = b[10];
        this.$e = b[11];
        this.Xb = b[12];
        this.eC = b[13];
        this.fe = "source-over";
        this.eb = this.fb = 0;
        this.Hc = null;
        this.Xf = l();
        this.Te = !0;
        this.nj = new Ma(0, 0, -1, -1);
        this.Bc = new Ma(0, 0, -1, -1);
        this.be && (this.Hc = new Bb(this.b.mc, this.b.lc));
        this.sf = !1;
        var c = b[14],
            d, e;
        this.Tx = [];
        this.Sd = [];
        this.ok = [];
        d = 0;
        for (e = c.length; d < e; d++) {
            var f = c[d],
                h = this.b.K[f[1]];
            h.le || (h.le = f, h.EB = this.index);
            this.Sd.push(f); - 1 === this.wc.Lk.indexOf(h) && this.wc.Lk.push(h)
        }
        Wa(this.Tx, this.Sd);
        this.ja = [];
        this.Na = [];
        this.hg = !0;
        this.xb = [];
        d = 0;
        for (e = b[15].length; d < e; d++) this.ja.push({
            id: b[15][d][0],
            name: b[15][d][1],
            Ub: -1,
            ue: !1,
            Ya: !0,
            index: d
        }), this.xb.push(b[15][d][2].slice(0));
        this.Xe();
        this.Ao = new Ma(0, 0, 1, 1);
        this.ss = new Ma(0, 0, 1, 1)
    }

    function l() {
        return a.length ? a.pop() : []
    }

    function r(b) {
        B(b);
        a.push(b)
    }
    f.prototype.jF = function(a) {
        var b = a.type.Ca.toString();
        this.eh.hasOwnProperty(b) || (this.eh[b] = []);
        this.eh[b].push(this.b.Bs(a))
    };
    f.prototype.qv = function() {
        var a = this.V[0];
        return !a.We && 1 === a.opacity && !a.bn && a.visible
    };
    f.prototype.Xe = function() {
        B(this.Na);
        this.hg = !0;
        var a, b, c;
        a = 0;
        for (b = this.ja.length; a < b; a++) c = this.ja[a], c.Ya && (this.Na.push(c), c.ue || (this.hg = !1))
    };
    f.prototype.Kq = function(a) {
        var b, c, d;
        b = 0;
        for (c = this.ja.length; b < c; b++)
            if (d = this.ja[b], d.name === a) return d;
        return null
    };
    var m = [],
        d = !0;
    f.prototype.Ms = function() {
        this.Ox && (this.Qh = this.b.Aq[this.Ox], this.Qh.ct());
        this.b.Ra = this;
        this.width = this.vE;
        this.height = this.uE;
        this.scrollX = this.b.mc / 2;
        this.scrollY = this.b.lc / 2;
        var a, b, c, q, e, f, l;
        a = 0;
        for (c = this.b.K.length; a < c; a++)
            if (b = this.b.K[a], !b.U)
                for (e = b.d, b = 0, q = e.length; b < q; b++)
                    if (f = e[b], f.q) {
                        var n = f.q.Dw;
                        n >= this.V.length && (n = this.V.length - 1);
                        f.q = this.V[n]; - 1 === f.q.d.indexOf(f) && f.q.d.push(f);
                        f.q.yi = !0
                    }
        if (!d)
            for (a = 0, c = this.V.length; a < c; ++a) this.V[a].d.sort(h);
        B(m);
        this.gB();
        a = 0;
        for (c = this.V.length; a < c; a++) f = this.V[a], f.AB(), f.mp();
        e = !1;
        if (!this.Ui) {
            for (l in this.eh)
                if (this.eh.hasOwnProperty(l) && (b = this.b.jn(parseInt(l, 10))) && !b.U && this.b.bt(b)) {
                    q = this.eh[l];
                    a = 0;
                    for (c = q.length; a < c; a++) {
                        f = null;
                        if (b.Ua.Sg && (f = this.hn(q[a].w.l), !f)) continue;
                        f = this.b.Eg(b.le, f, !1, 0, 0, !0);
                        this.b.In(f, q[a]);
                        e = !0;
                        m.push(f)
                    }
                    B(q)
                }
            a = 0;
            for (c = this.V.length; a < c; a++) this.V[a].d.sort(h), this.V[a].yi = !0
        }
        e && (this.b.Ic(), this.b.qx());
        for (a = 0; a < m.length; a++)
            if (f = m[a], f.type.Zc)
                for (c = f.Gk(), b = 0, q = f.type.yd.length; b < q; b++) l = f.type.yd[b], f.type !== l && (l.d.length > c ? f.siblings.push(l.d[c]) : l.le && (e = this.b.Eg(l.le, f.q, !0, f.x, f.y, !0), this.b.Ic(), l.jp(), f.siblings.push(e), m.push(e)));
        a = 0;
        for (c = this.Og.length; a < c; a++) f = this.Og[a], b = this.b.K[f[1]], b.Zc || this.b.Eg(this.Og[a], null, !0);
        this.b.Ih = null;
        this.b.Ic();
        if (this.b.I && !this.b.Ob)
            for (a = 0, c = this.b.K.length; a < c; a++) l = this.b.K[a], !l.U && l.d.length && l.vo && l.vo(this.b.I);
        if (this.b.Ok) Wa(this.b.Zm, m);
        else
            for (a = 0, c = m.length; a < c; a++) f = m[a], this.b.trigger(Object.getPrototypeOf(f.type.Ua).e.dk, f);
        B(m);
        this.b.Ok || this.b.trigger(H.prototype.e.Jt, null);
        this.Ui = !1
    };
    f.prototype.zB = function() {
        var a, b, c, d, e;
        b = a = 0;
        for (c = this.Og.length; a < c; a++) d = this.Og[a], e = this.b.K[d[1]], e.global ? e.Zc || this.b.Eg(d, null, !0) : (this.Og[b] = d, b++);
        Va(this.Og, b)
    };
    f.prototype.AF = function() {
        this.b.Ok || this.b.trigger(H.prototype.e.Lz, null);
        this.b.kr = !0;
        B(this.b.uf.td);
        var a, b, c, q, e, f;
        if (!this.Ui)
            for (a = 0, b = this.V.length; a < b; a++)
                for (this.V[a].gt(), e = this.V[a].d, c = 0, q = e.length; c < q; c++) f = e[c], f.type.global || this.b.bt(f.type) && this.jF(f);
        a = 0;
        for (b = this.V.length; a < b; a++) {
            e = this.V[a].d;
            c = 0;
            for (q = e.length; c < q; c++) f = e[c], f.type.global || this.b.sg(f);
            this.b.Ic();
            B(e);
            this.V[a].yi = !0
        }
        a = 0;
        for (b = this.b.K.length; a < b; a++)
            if (e = this.b.K[a], !(e.global || e.Ua.Sg || e.Ua.Oo || e.U)) {
                c = 0;
                for (q = e.d.length; c < q; c++) this.b.sg(e.d[c]);
                this.b.Ic()
            }
        d = !1;
        this.b.kr = !1
    };
    new Ma(0, 0, 0, 0);
    f.prototype.Ad = function(a) {
        var b, c = a,
            d = !1,
            e = !this.b.Pd;
        e && (this.b.Gn || (this.b.Gn = document.createElement("canvas"), b = this.b.Gn, b.width = this.b.X, b.height = this.b.W, this.b.Sv = b.getContext("2d"), d = !0), b = this.b.Gn, c = this.b.Sv, b.width !== this.b.X && (b.width = this.b.X, d = !0), b.height !== this.b.W && (b.height = this.b.W, d = !0), d && this.b.Ho(c, this.b.ib));
        c.globalAlpha = 1;
        c.globalCompositeOperation = "source-over";
        this.b.uu && !this.qv() && c.clearRect(0, 0, this.b.X, this.b.W);
        var f, h, d = 0;
        for (f = this.V.length; d < f; d++) h = this.V[d], h.visible && 0 < h.opacity && 11 !== h.Xb && (h.d.length || !h.We) ? h.Ad(c) : h.mp();
        e && a.drawImage(b, 0, 0, this.b.width, this.b.height)
    };
    f.prototype.Oi = function(a) {
        a.Fx(!0);
        this.b.Qb || (this.b.Qb = a.ie(this.b.X, this.b.W, this.b.ib));
        if (this.b.Qb.Gh !== this.b.X || this.b.Qb.Fh !== this.b.W) a.deleteTexture(this.b.Qb), this.b.Qb = a.ie(this.b.X, this.b.W, this.b.ib);
        a.we(this.b.Qb);
        this.b.Pd || a.fg(this.b.X, this.b.W);
        var b, c;
        for (b = this.V.length - 1; 0 <= b; --b) c = this.V[b], c.visible && 1 === c.opacity && c.hg && 0 === c.Xb && (c.d.length || !c.We) ? c.Oi(a) : c.mp();
        a.Fx(!1)
    };
    f.prototype.Nc = function(a) {
        var b = 0 < this.Na.length || this.b.Yj || !this.b.Pd || this.b.hb;
        if (b) {
            this.b.Qb || (this.b.Qb = a.ie(this.b.X, this.b.W, this.b.ib));
            if (this.b.Qb.Gh !== this.b.X || this.b.Qb.Fh !== this.b.W) a.deleteTexture(this.b.Qb), this.b.Qb = a.ie(this.b.X, this.b.W, this.b.ib);
            a.we(this.b.Qb);
            this.b.Pd || a.fg(this.b.X, this.b.W)
        } else this.b.Qb && (a.we(null), a.deleteTexture(this.b.Qb), this.b.Qb = null);
        this.b.uu && !this.qv() && a.clear(0, 0, 0, 0);
        var c, d, e;
        c = 0;
        for (d = this.V.length; c < d; c++) e = this.V[c], e.visible && 0 < e.opacity && (e.d.length || !e.We) ? e.Nc(a) : e.mp();
        b && (0 === this.Na.length || 1 === this.Na.length && this.b.Pd ? (1 === this.Na.length ? (b = this.Na[0].index, a.rd(this.Na[0].Ub), a.Gj(null, 1 / this.b.X, 1 / this.b.W, 0, 0, 1, 1, this.scale, this.j, 0, 0, this.b.X / 2, this.b.W / 2, this.b.vc.Da, this.xb[b]), a.wo(this.Na[0].Ub) && (this.b.O = !0)) : a.rd(0), this.b.Pd || a.fg(this.b.width, this.b.height), a.we(null), a.Ex(!1), a.mh(1), a.qd(this.b.Qb), a.Ax(), a.tf(), a.Ye(), b = this.b.width / 2, c = this.b.height / 2, a.ih(-b, c, b, c, b, -c, -b, -c), a.qd(null), a.Ex(!0)) : this.us(a, null, null, null))
    };
    f.prototype.Fk = function() {
        return 0 < this.Na.length || this.b.Yj || !this.b.Pd || this.b.hb ? this.b.Qb : null
    };
    f.prototype.lv = function() {
        var a = this.V[0].Rd(),
            b, c, d;
        b = 1;
        for (c = this.V.length; b < c; b++) d = this.V[b], (0 !== d.se || 0 !== d.te) && d.Rd() < a && (a = d.Rd());
        return a
    };
    f.prototype.xx = function(a) {
        if (!this.jy) {
            var b = 1 / this.lv() * this.b.X / 2;
            a > this.width - b && (a = this.width - b);
            a < b && (a = b)
        }
        this.scrollX !== a && (this.scrollX = a, this.b.O = !0)
    };
    f.prototype.yx = function(a) {
        if (!this.jy) {
            var b = 1 / this.lv() * this.b.W / 2;
            a > this.height - b && (a = this.height - b);
            a < b && (a = b)
        }
        this.scrollY !== a && (this.scrollY = a, this.b.O = !0)
    };
    f.prototype.gB = function() {
        this.xx(this.scrollX);
        this.yx(this.scrollY)
    };
    f.prototype.us = function(a, b, c, d) {
        var e = c ? c.Na : b ? b.Na : this.Na,
            f = 1,
            h = 0,
            n = 0,
            l = 0,
            m = this.b.X,
            r = this.b.W;
        c ? (f = c.q.Rd(), h = c.q.fc(), n = c.q.Va, l = c.q.Wa, m = c.q.ab, r = c.q.$a) : b && (f = b.Rd(), h = b.fc(), n = b.Va, l = b.Wa, m = b.ab, r = b.$a);
        var v = this.b.Fq,
            y, x, u, G, L = 0,
            Y = 1,
            F, P, W = this.b.X,
            U = this.b.W,
            O = W / 2,
            t = U / 2,
            R = b ? b.Ao : this.Ao,
            C = b ? b.ss : this.ss,
            X = 0,
            K = 0,
            M = 0,
            S = 0,
            Z = W,
            oa = W,
            T = U,
            Qa = U,
            Ga = u = 0;
        G = c ? c.q.fc() : 0;
        if (c) {
            y = 0;
            for (x = e.length; y < x; y++) u += a.dD(e[y].Ub), Ga += a.eD(e[y].Ub);
            S = c.lb;
            X = b.$c(S.left, S.top, !0, !0);
            M = b.$c(S.left, S.top, !1, !0);
            Z = b.$c(S.right, S.bottom, !0, !0);
            T = b.$c(S.right, S.bottom, !1, !0);
            0 !== G && (y = b.$c(S.right, S.top, !0, !0), x = b.$c(S.right, S.top, !1, !0), K = b.$c(S.left, S.bottom, !0, !0), S = b.$c(S.left, S.bottom, !1, !0), G = Math.min(X, Z, y, K), Z = Math.max(X, Z, y, K), X = G, G = Math.min(M, T, x, S), T = Math.max(M, T, x, S), M = G);
            X -= u;
            M -= Ga;
            Z += u;
            T += Ga;
            C.left = X / W;
            C.top = 1 - M / U;
            C.right = Z / W;
            C.bottom = 1 - T / U;
            K = X = Ja(X);
            S = M = Ja(M);
            oa = Z = Ka(Z);
            Qa = T = Ka(T);
            K -= u;
            S -= Ga;
            oa += u;
            Qa += Ga;
            0 > X && (X = 0);
            0 > M && (M = 0);
            Z > W && (Z = W);
            T > U && (T = U);
            0 > K && (K = 0);
            0 > S && (S = 0);
            oa > W && (oa = W);
            Qa > U && (Qa = U);
            R.left = X / W;
            R.top = 1 - M / U;
            R.right = Z / W;
            R.bottom = 1 - T / U
        } else R.left = C.left = 0, R.top = C.top = 0, R.right = C.right = 1, R.bottom = C.bottom = 1;
        Ga = c && (a.Dl(e[0].Ub) || 0 !== u || 0 !== Ga || 1 !== c.opacity || c.type.Ua.xw) || b && !c && 1 !== b.opacity;
        a.Ax();
        if (Ga) {
            v[L] || (v[L] = a.ie(W, U, this.b.ib));
            if (v[L].Gh !== W || v[L].Fh !== U) a.deleteTexture(v[L]), v[L] = a.ie(W, U, this.b.ib);
            a.rd(0);
            a.we(v[L]);
            P = Qa - S;
            a.clearRect(K, U - S - P, oa - K, P);
            c ? c.Nc(a) : (a.qd(this.b.jc), a.mh(b.opacity), a.tf(), a.translate(-O, -t), a.Ye(), a.jh(X, T, Z, T, Z, M, X, M, R));
            C.left = C.top = 0;
            C.right = C.bottom = 1;
            c && (G = R.top, R.top = R.bottom, R.bottom = G);
            L = 1;
            Y = 0
        }
        a.mh(1);
        u = e.length - 1;
        var ra = a.ps(e[u].Ub) || !b && !c && !this.b.Pd;
        y = G = 0;
        for (x = e.length; y < x; y++) {
            v[L] || (v[L] = a.ie(W, U, this.b.ib));
            if (v[L].Gh !== W || v[L].Fh !== U) a.deleteTexture(v[L]), v[L] = a.ie(W, U, this.b.ib);
            a.rd(e[y].Ub);
            G = e[y].index;
            a.wo(e[y].Ub) && (this.b.O = !0);
            0 != y || Ga ? (a.Gj(d, 1 / W, 1 / U, C.left, C.top, C.right, C.bottom, f, h, n, l, (n + m) / 2, (l + r) / 2, this.b.vc.Da, c ? c.xb[G] : b ? b.xb[G] : this.xb[G]), a.qd(null), y !== u || ra ? (a.we(v[L]), P = Qa - S, F = U - S - P, a.clearRect(K, F, oa - K, P)) : (c ? a.eg(c.fb, c.eb) : b && a.eg(b.fb, b.eb), a.we(d)), a.qd(v[Y]), a.tf(), a.translate(-O, -t), a.Ye(), a.jh(X, T, Z, T, Z, M, X, M, R), y !== u || ra || a.qd(null)) : (a.we(v[L]), P = Qa - S, F = U - S - P, a.clearRect(K, F, oa - K, P), c ? (c.mb && c.mb.aa ? (F = c.mb.aa, Y = 1 / F.width, F = 1 / F.height) : (Y = 1 / c.width, F = 1 / c.height), a.Gj(d, Y, F, C.left, C.top, C.right, C.bottom, f, h, n, l, (n + m) / 2, (l + r) / 2, this.b.vc.Da, c.xb[G]), c.Nc(a)) : (a.Gj(d, 1 / W, 1 / U, 0, 0, 1, 1, f, h, n, l, (n + m) / 2, (l + r) / 2, this.b.vc.Da, b ? b.xb[G] : this.xb[G]), a.qd(b ? this.b.jc : this.b.Qb), a.tf(), a.translate(-O, -t), a.Ye(), a.jh(X, T, Z, T, Z, M, X, M, R)), C.left = C.top = 0, C.right = C.bottom = 1, c && !ra && (G = T, T = M, M = G));
            L = 0 === L ? 1 : 0;
            Y = 0 === L ? 1 : 0
        }
        ra && (a.rd(0), c ? a.eg(c.fb, c.eb) : b ? a.eg(b.fb, b.eb) : this.b.Pd || (a.fg(this.b.width, this.b.height), O = this.b.width / 2, t = this.b.height / 2, M = X = 0, Z = this.b.width, T = this.b.height), a.we(d), a.qd(v[Y]), a.tf(), a.translate(-O, -t), a.Ye(), c && 1 === e.length && !Ga ? a.jh(X, M, Z, M, Z, T, X, T, R) : a.jh(X, T, Z, T, Z, M, X, M, R), a.qd(null))
    };
    f.prototype.hn = function(a) {
        var b, c;
        b = 0;
        for (c = this.V.length; b < c; b++)
            if (this.V[b].Ca === a) return this.V[b];
        return null
    };
    f.prototype.nc = function() {
        var a, b, c, d = {
            sx: this.scrollX,
            sy: this.scrollY,
            s: this.scale,
            a: this.j,
            w: this.width,
            h: this.height,
            fv: this.Ui,
            persist: this.eh,
            fx: [],
            layers: {}
        };
        a = 0;
        for (b = this.ja.length; a < b; a++) c = this.ja[a], d.fx.push({
            name: c.name,
            active: c.Ya,
            params: this.xb[c.index]
        });
        a = 0;
        for (b = this.V.length; a < b; a++) c = this.V[a], d.layers[c.Ca.toString()] = c.nc();
        return d
    };
    f.prototype.Ec = function(a) {
        var b, c, d, e;
        this.scrollX = a.sx;
        this.scrollY = a.sy;
        this.scale = a.s;
        this.j = a.a;
        this.width = a.w;
        this.height = a.h;
        this.eh = a.persist;
        "undefined" !== typeof a.fv && (this.Ui = a.fv);
        var f = a.fx;
        b = 0;
        for (c = f.length; b < c; b++)
            if (d = this.Kq(f[b].name)) d.Ya = f[b].active, this.xb[d.index] = f[b].params;
        this.Xe();
        b = a.layers;
        for (e in b) b.hasOwnProperty(e) && (a = this.hn(parseInt(e, 10))) && a.Ec(b[e])
    };
    oc = f;
    e.prototype.Xe = function() {
        B(this.Na);
        this.hg = !0;
        var a, b, c;
        a = 0;
        for (b = this.ja.length; a < b; a++) c = this.ja[a], c.Ya && (this.Na.push(c), c.ue || (this.hg = !1))
    };
    e.prototype.Kq = function(a) {
        var b, c, d;
        b = 0;
        for (c = this.ja.length; b < c; b++)
            if (d = this.ja[b], d.name === a) return d;
        return null
    };
    e.prototype.AB = function() {
        var a, b, c, d, e, f;
        b = a = 0;
        for (c = this.Sd.length; a < c; a++) {
            d = this.Sd[a];
            e = this.b.K[d[1]];
            f = this.b.bt(e);
            e = !0;
            if (!f || this.wc.Ui) {
                d = this.b.Eg(d, this, !0);
                if (!d) continue;
                m.push(d);
                d.type.global && (e = !1, this.ok.push(d.uid))
            }
            e && (this.Sd[b] = this.Sd[a], b++)
        }
        this.Sd.length = b;
        this.b.Ic();
        !this.b.M && this.ja.length && (this.Xb = this.eC);
        this.fe = Cb(this.Xb);
        this.b.L && Db(this, this.Xb, this.b.L);
        this.Te = !0
    };
    e.prototype.Cj = function(a, b) {
        var c = Ya(this.d, a);
        0 > c || (b && this.be && a.ld && a.ld.right >= a.ld.left && (a.La(), this.Hc.update(a, a.ld, null), a.ld.set(0, 0, -1, -1)), c === this.d.length - 1 ? this.d.pop() : (Ua(this.d, c), this.Ll(c)), this.Te = !0)
    };
    e.prototype.jk = function(a, b) {
        a.Ze = this.d.length;
        this.d.push(a);
        b && this.be && a.ld && a.gb();
        this.Te = !0
    };
    e.prototype.FE = function(a) {
        this.d.unshift(a);
        this.Ll(0)
    };
    e.prototype.jE = function(a, b, c) {
        var d = a.kf();
        b = b.kf();
        Ua(this.d, d);
        d < b && b--;
        c && b++;
        b === this.d.length ? this.d.push(a) : this.d.splice(b, 0, a);
        this.Ll(d < b ? d : b)
    };
    e.prototype.Ll = function(a) {
        -1 === this.qg ? this.qg = a : a < this.qg && (this.qg = a);
        this.Te = this.yi = !0
    };
    e.prototype.gt = function() {
        if (this.yi) {
            -1 === this.qg && (this.qg = 0);
            var a, b, c;
            if (this.be)
                for (a = this.qg, b = this.d.length; a < b; ++a) c = this.d[a], c.Ze = a, this.Hc.fE(c.ld);
            else
                for (a = this.qg, b = this.d.length; a < b; ++a) this.d[a].Ze = a;
            this.yi = !1;
            this.qg = -1
        }
    };
    e.prototype.Rd = function(a) {
        return this.aD() * (this.b.Pd || a ? this.b.kk : 1)
    };
    e.prototype.aD = function() {
        return (this.scale * this.wc.scale - 1) * this.$e + 1
    };
    e.prototype.fc = function() {
        return this.Of ? 0 : gb(this.wc.j + this.j)
    };
    var a = [],
        b = [],
        c = [];
    e.prototype.Oq = function() {
        this.gt();
        this.Hc.zo(this.Va, this.Wa, this.ab, this.$a, c);
        if (!c.length) return l();
        if (1 === c.length) {
            var a = l();
            Wa(a, c[0]);
            B(c);
            return a
        }
        for (var d = !0; 1 < c.length;) {
            for (var a = c, e = void 0, q = void 0, f = void 0, h = void 0, m = void 0, e = 0, q = a.length; e < q - 1; e += 2) {
                var f = a[e],
                    h = a[e + 1],
                    m = l(),
                    n = f,
                    D = h,
                    E = m,
                    w = 0,
                    v = 0,
                    y = 0,
                    x = n.length,
                    u = D.length,
                    G = void 0,
                    L = void 0;
                for (E.length = x + u; w < x && v < u; ++y) G = n[w], L = D[v], G.Ze < L.Ze ? (E[y] = G, ++w) : (E[y] = L, ++v);
                for (; w < x; ++w, ++y) E[y] = n[w];
                for (; v < u; ++v, ++y) E[y] = D[v];
                d || (r(f), r(h));
                b.push(m)
            }
            1 === q % 2 && (d ? (f = l(), Wa(f, a[q - 1]), b.push(f)) : b.push(a[q - 1]));
            Wa(a, b);
            B(b);
            d = !1
        }
        a = c[0];
        B(c);
        return a
    };
    e.prototype.Ad = function(a) {
        this.sf = this.bn || 1 !== this.opacity || 0 !== this.Xb;
        var b = this.b.canvas,
            c = a,
            d = !1;
        this.sf && (this.b.Fn || (this.b.Fn = document.createElement("canvas"), b = this.b.Fn, b.width = this.b.X, b.height = this.b.W, this.b.Rv = b.getContext("2d"), d = !0), b = this.b.Fn, c = this.b.Rv, b.width !== this.b.X && (b.width = this.b.X, d = !0), b.height !== this.b.W && (b.height = this.b.W, d = !0), d && this.b.Ho(c, this.b.ib), this.We && c.clearRect(0, 0, this.b.X, this.b.W));
        c.globalAlpha = 1;
        c.globalCompositeOperation = "source-over";
        this.We || (c.fillStyle = "rgb(" + this.Kc[0] + "," + this.Kc[1] + "," + this.Kc[2] + ")", c.fillRect(0, 0, this.b.X, this.b.W));
        c.save();
        this.Of = !0;
        var d = this.Ac(0, 0, !0, !0),
            e = this.Ac(0, 0, !1, !0);
        this.Of = !1;
        this.b.Xd && (d = Math.round(d), e = Math.round(e));
        this.Do(d, e, c);
        var f = this.Rd();
        c.scale(f, f);
        c.translate(-d, -e);
        this.be ? (this.Bc.left = this.Hc.ed(this.Va), this.Bc.top = this.Hc.fd(this.Wa), this.Bc.right = this.Hc.ed(this.ab), this.Bc.bottom = this.Hc.fd(this.$a), this.Te || !this.Bc.wk(this.nj) ? (r(this.Xf), d = this.Oq(), this.Te = !1, this.nj.Ki(this.Bc)) : d = this.Xf) : d = this.d;
        for (var h, n = null, e = 0, f = d.length; e < f; ++e) h = d[e], h !== n && (this.ZB(h, c), n = h);
        this.be && (this.Xf = d);
        c.restore();
        this.sf && (a.globalCompositeOperation = this.fe, a.globalAlpha = this.opacity, a.drawImage(b, 0, 0))
    };
    e.prototype.ZB = function(a, b) {
        if (a.visible && 0 !== a.width && 0 !== a.height) {
            a.La();
            var c = a.lb;
            c.right < this.Va || c.bottom < this.Wa || c.left > this.ab || c.top > this.$a || (b.globalCompositeOperation = a.fe, a.Ad(b))
        }
    };
    e.prototype.mp = function() {
        this.Of = !0;
        var a = this.Ac(0, 0, !0, !0),
            b = this.Ac(0, 0, !1, !0);
        this.Of = !1;
        this.b.Xd && (a = Math.round(a), b = Math.round(b));
        this.Do(a, b, null)
    };
    e.prototype.Do = function(a, b, c) {
        var d = this.Rd();
        this.Va = a;
        this.Wa = b;
        this.ab = a + 1 / d * this.b.X;
        this.$a = b + 1 / d * this.b.W;
        this.Va > this.ab && (a = this.Va, this.Va = this.ab, this.ab = a);
        this.Wa > this.$a && (a = this.Wa, this.Wa = this.$a, this.$a = a);
        a = this.fc();
        0 !== a && (c && (c.translate(this.b.X / 2, this.b.W / 2), c.rotate(-a), c.translate(this.b.X / -2, this.b.W / -2)), this.mg.set(this.Va, this.Wa, this.ab, this.$a), this.mg.offset((this.Va + this.ab) / -2, (this.Wa + this.$a) / -2), this.ey.Mx(this.mg, a), this.ey.mu(this.mg), this.mg.offset((this.Va + this.ab) / 2, (this.Wa + this.$a) / 2), this.Va = this.mg.left, this.Wa = this.mg.top, this.ab = this.mg.right, this.$a = this.mg.bottom)
    };
    e.prototype.Oi = function(a) {
        if (this.sf = this.bn) {
            this.b.jc || (this.b.jc = a.ie(this.b.X, this.b.W, this.b.ib));
            if (this.b.jc.Gh !== this.b.X || this.b.jc.Fh !== this.b.W) a.deleteTexture(this.b.jc), this.b.jc = a.ie(this.b.X, this.b.W, this.b.ib);
            a.we(this.b.jc)
        }
        this.Of = !0;
        var b = this.Ac(0, 0, !0, !0),
            c = this.Ac(0, 0, !1, !0);
        this.Of = !1;
        this.b.Xd && (b = Math.round(b), c = Math.round(c));
        this.Do(b, c, null);
        b = this.Rd();
        a.tf();
        a.scale(b, b);
        a.xs(-this.fc());
        a.translate((this.Va + this.ab) / -2, (this.Wa + this.$a) / -2);
        a.Ye();
        this.be ? (this.Bc.left = this.Hc.ed(this.Va), this.Bc.top = this.Hc.fd(this.Wa), this.Bc.right = this.Hc.ed(this.ab), this.Bc.bottom = this.Hc.fd(this.$a), this.Te || !this.Bc.wk(this.nj) ? (r(this.Xf), b = this.Oq(), this.Te = !1, this.nj.Ki(this.Bc)) : b = this.Xf) : b = this.d;
        for (var d, e = null, c = b.length - 1; 0 <= c; --c) d = b[c], d !== e && (this.aC(b[c], a), e = d);
        this.be && (this.Xf = b);
        this.We || (this.gq = this.b.Nh++, a.Io(this.gq), a.Dx(1, 1, 1), a.Xu(), a.ZE())
    };
    e.prototype.Nc = function(a) {
        var b = 0,
            c = 0;
        if (this.sf = this.bn || 1 !== this.opacity || 0 < this.Na.length || 0 !== this.Xb) {
            this.b.jc || (this.b.jc = a.ie(this.b.X, this.b.W, this.b.ib));
            if (this.b.jc.Gh !== this.b.X || this.b.jc.Fh !== this.b.W) a.deleteTexture(this.b.jc), this.b.jc = a.ie(this.b.X, this.b.W, this.b.ib);
            a.we(this.b.jc);
            this.We && a.clear(0, 0, 0, 0)
        }
        this.We || (this.b.hb ? (a.Io(this.gq), a.Dx(this.Kc[0] / 255, this.Kc[1] / 255, this.Kc[2] / 255), a.Xu(), a.sF()) : a.clear(this.Kc[0] / 255, this.Kc[1] / 255, this.Kc[2] / 255, 1));
        this.Of = !0;
        var d = this.Ac(0, 0, !0, !0),
            b = this.Ac(0, 0, !1, !0);
        this.Of = !1;
        this.b.Xd && (d = Math.round(d), b = Math.round(b));
        this.Do(d, b, null);
        d = this.Rd();
        a.tf();
        a.scale(d, d);
        a.xs(-this.fc());
        a.translate((this.Va + this.ab) / -2, (this.Wa + this.$a) / -2);
        a.Ye();
        this.be ? (this.Bc.left = this.Hc.ed(this.Va), this.Bc.top = this.Hc.fd(this.Wa), this.Bc.right = this.Hc.ed(this.ab), this.Bc.bottom = this.Hc.fd(this.$a), this.Te || !this.Bc.wk(this.nj) ? (r(this.Xf), b = this.Oq(), this.Te = !1, this.nj.Ki(this.Bc)) : b = this.Xf) : b = this.d;
        var e, f, h = null,
            c = 0;
        for (e = b.length; c < e; ++c) f = b[c], f !== h && (this.$B(b[c], a), h = f);
        this.be && (this.Xf = b);
        this.sf && (b = this.Na.length ? this.Na[0].Ub : 0, c = this.Na.length ? this.Na[0].index : 0, 0 === this.Na.length || 1 === this.Na.length && !a.ps(b) && 1 === this.opacity ? (1 === this.Na.length ? (a.rd(b), a.Gj(this.wc.Fk(), 1 / this.b.X, 1 / this.b.W, 0, 0, 1, 1, d, this.fc(), this.Va, this.Wa, (this.Va + this.ab) / 2, (this.Wa + this.$a) / 2, this.b.vc.Da, this.xb[c]), a.wo(b) && (this.b.O = !0)) : a.rd(0), a.we(this.wc.Fk()), a.mh(this.opacity), a.qd(this.b.jc), a.eg(this.fb, this.eb), a.tf(), a.Ye(), d = this.b.X / 2, b = this.b.W / 2, a.ih(-d, b, d, b, d, -b, -d, -b), a.qd(null)) : this.wc.us(a, this, null, this.wc.Fk()))
    };
    e.prototype.$B = function(a, b) {
        if (a.visible && 0 !== a.width && 0 !== a.height) {
            a.La();
            var c = a.lb;
            c.right < this.Va || c.bottom < this.Wa || c.left > this.ab || c.top > this.$a || (b.Io(a.Nh), a.ry ? this.bC(a, b) : (b.rd(0), b.eg(a.fb, a.eb), a.Nc(b)))
        }
    };
    e.prototype.aC = function(a, b) {
        if (a.visible && 0 !== a.width && 0 !== a.height) {
            a.La();
            var c = a.lb;
            c.right < this.Va || c.bottom < this.Wa || c.left > this.ab || c.top > this.$a || (a.Nh = this.b.Nh++, 0 === a.Xb && 1 === a.opacity && a.hg && a.Oi && (b.Io(a.Nh), a.Oi(b)))
        }
    };
    e.prototype.bC = function(a, b) {
        var c = a.Na[0].Ub,
            d = a.Na[0].index,
            e = this.Rd();
        if (1 !== a.Na.length || b.ps(c) || b.IE(c) || (a.j || a.q.fc()) && b.Dl(c) || 1 !== a.opacity || a.type.Ua.xw) this.wc.us(b, this, a, this.sf ? this.b.jc : this.wc.Fk()), b.tf(), b.scale(e, e), b.xs(-this.fc()), b.translate((this.Va + this.ab) / -2, (this.Wa + this.$a) / -2), b.Ye();
        else {
            b.rd(c);
            b.eg(a.fb, a.eb);
            b.wo(c) && (this.b.O = !0);
            var f = 0,
                h = 0,
                n = 0,
                l = 0;
            b.Dl(c) && (l = a.lb, f = this.$c(l.left, l.top, !0, !0), h = this.$c(l.left, l.top, !1, !0), n = this.$c(l.right, l.bottom, !0, !0), l = this.$c(l.right, l.bottom, !1, !0), f = f / windowWidth, h = 1 - h / windowHeight, n = n / windowWidth, l = 1 - l / windowHeight);
            var m;
            a.mb && a.mb.aa ? (m = a.mb.aa, c = 1 / m.width, m = 1 / m.height) : (c = 1 / a.width, m = 1 / a.height);
            b.Gj(this.sf ? this.b.jc : this.wc.Fk(), c, m, f, h, n, l, e, this.fc(), this.Va, this.Wa, (this.Va + this.ab) / 2, (this.Wa + this.$a) / 2, this.b.vc.Da, a.xb[d]);
            a.Nc(b)
        }
    };
    e.prototype.Ac = function(a, b, c, d) {
        var e = this.b.devicePixelRatio;
        this.b.Yh && (a *= e, b *= e);
        var e = this.b.$w,
            f = this.b.ax,
            e = (this.wc.scrollX - e) * this.se + e,
            f = (this.wc.scrollY - f) * this.te + f,
            h = e,
            n = f,
            l = 1 / this.Rd(!d);
        d ? (h -= this.b.X * l / 2, n -= this.b.W * l / 2) : (h -= this.b.width * l / 2, n -= this.b.height * l / 2);
        h += a * l;
        n += b * l;
        b = this.fc();
        0 !== b && (h -= e, n -= f, a = Math.cos(b), b = Math.sin(b), d = h * a - n * b, n = n * a + h * b, h = d + e, n += f);
        return c ? h : n
    };
    e.prototype.$c = function(a, b, c, d) {
        var e = this.b.$w,
            f = this.b.ax,
            h = (this.wc.scrollX - e) * this.se + e,
            n = (this.wc.scrollY - f) * this.te + f,
            f = h,
            e = n,
            l = this.fc();
        if (0 !== l) {
            a -= h;
            b -= n;
            var m = Math.cos(-l),
                l = Math.sin(-l),
                r = a * m - b * l;
            b = b * m + a * l;
            a = r + h;
            b += n
        }
        h = 1 / this.Rd(!d);
        d ? (f -= this.b.X * h / 2, e -= this.b.W * h / 2) : (f -= this.b.width * h / 2, e -= this.b.height * h / 2);
        f = (a - f) / h;
        e = (b - e) / h;
        a = this.b.devicePixelRatio;
        this.b.Yh && !d && (f /= a, e /= a);
        return c ? f : e
    };
    e.prototype.nc = function() {
        var a, b, c, d = {
            s: this.scale,
            a: this.j,
            vl: this.Va,
            vt: this.Wa,
            vr: this.ab,
            vb: this.$a,
            v: this.visible,
            bc: this.Kc,
            t: this.We,
            px: this.se,
            py: this.te,
            o: this.opacity,
            zr: this.$e,
            fx: [],
            cg: this.ok,
            instances: []
        };
        a = 0;
        for (b = this.ja.length; a < b; a++) c = this.ja[a], d.fx.push({
            name: c.name,
            active: c.Ya,
            params: this.xb[c.index]
        });
        return d
    };
    e.prototype.Ec = function(a) {
        var b, c, d;
        this.scale = a.s;
        this.j = a.a;
        this.Va = a.vl;
        this.Wa = a.vt;
        this.ab = a.vr;
        this.$a = a.vb;
        this.visible = a.v;
        this.Kc = a.bc;
        this.We = a.t;
        this.se = a.px;
        this.te = a.py;
        this.opacity = a.o;
        this.$e = a.zr;
        this.ok = a.cg || [];
        Wa(this.Sd, this.Tx);
        var e = new ma;
        b = 0;
        for (d = this.ok.length; b < d; ++b) e.add(this.ok[b]);
        c = b = 0;
        for (d = this.Sd.length; b < d; ++b) e.contains(this.Sd[b][2]) || (this.Sd[c] = this.Sd[b], ++c);
        Va(this.Sd, c);
        c = a.fx;
        b = 0;
        for (d = c.length; b < d; b++)
            if (a = this.Kq(c[b].name)) a.Ya = c[b].active, this.xb[a.index] = c[b].params;
        this.Xe();
        this.d.sort(h);
        this.yi = !0
    };
    Hc = e
})();
(function() {
    function f(a, b) {
        var c, d = a.length;
        switch (d) {
            case 0:
                return !0;
            case 1:
                return a[0] === b[0];
            case 2:
                return a[0] === b[0] && a[1] === b[1];
            default:
                for (c = 0; c < d; c++)
                    if (a[c] !== b[c]) return !1;
                return !0
        }
    }

    function h(a, b) {
        return a.index - b.index
    }

    function e(a) {
        var b, c, d, g;
        2 === a.length ? a[0].index > a[1].index && (b = a[0], a[0] = a[1], a[1] = b) : 2 < a.length && a.sort(h);
        a.length >= Q.length && (Q.length = a.length + 1);
        Q[a.length] || (Q[a.length] = []);
        g = Q[a.length];
        b = 0;
        for (c = g.length; b < c; b++)
            if (d = g[b], f(a, d)) return d;
        g.push(a);
        return a
    }

    function l(a, b) {
        this.b = a;
        this.gy = {};
        this.Ou = {};
        this.Xq = !1;
        this.sv = new ma;
        this.sq = [];
        this.Rp = [];
        this.name = b[0];
        var c = b[1];
        this.Ig = [];
        var d, g;
        d = 0;
        for (g = c.length; d < g; d++) this.uv(c[d], null, this.Ig)
    }

    function r(a) {
        this.type = a;
        this.d = [];
        this.ma = [];
        this.ua = !0
    }

    function m(a, b, c) {
        this.sheet = a;
        this.parent = b;
        this.b = a.b;
        this.Ba = [];
        this.nh = [];
        this.rv = this.dp = this.Xs = this.rn = this.group = this.Ks = !1;
        this.cc = [];
        this.Ee = [];
        this.xe = [];
        this.Hk = "";
        this.Zi = this.rn = this.group = !1;
        this.Fm = null;
        c[1] && (this.Hk = c[1][1].toLowerCase(), this.group = !0, this.rn = !!c[1][0], this.Fm = [], this.Zi = this.rn, this.b.xg.push(this), this.b.Ik[this.Hk] = this);
        this.Wd = c[2];
        this.Ca = c[4];
        this.group || (this.b.ku[this.Ca.toString()] = this);
        var d = c[5];
        a = 0;
        for (b = d.length; a < b; a++) {
            var g = new Ic(this, d[a]);
            g.index = a;
            this.cc.push(g);
            this.du(g.type)
        }
        d = c[6];
        a = 0;
        for (b = d.length; a < b; a++) g = new Jc(this, d[a]), g.index = a, this.Ee.push(g);
        if (8 === c.length)
            for (c = c[7], a = 0, b = c.length; a < b; a++) this.sheet.uv(c[a], this, this.xe);
        this.Bn = !1;
        this.cc.length && (this.Bn = null == this.cc[0].type && this.cc[0].Cc == H.prototype.e.yt)
    }

    function d(a, b) {
        var c, d, g;
        if (a && (-1 === b.indexOf(a) && b.push(a), a.Zc))
            for (c = 0, d = a.yd.length; c < d; c++) g = a.yd[c], a !== g && -1 === b.indexOf(g) && b.push(g)
    }

    function a(a, b) {
        this.Ld = a;
        this.sheet = a.sheet;
        this.b = a.b;
        this.na = [];
        this.Ab = [];
        this.ka = {};
        this.index = -1;
        this.hk = !1;
        this.Cc = this.b.tg(b[1]);
        this.trigger = 0 < b[3];
        this.Nu = 2 === b[3];
        this.nf = b[4];
        this.sn = b[5];
        this.TD = b[6];
        this.Ca = b[7];
        this.b.Cg[this.Ca.toString()] = this; - 1 === b[0] ? (this.type = null, this.Tb = this.As, this.Eh = null, this.Ie = -1) : (this.type = this.b.K[b[0]], this.Tb = this.TD ? this.hF : this.zs, b[2] ? (this.Eh = this.type.en(b[2]), this.Ie = this.type.Iq(b[2])) : (this.Eh = null, this.Ie = -1), this.Ld.parent && this.Ld.parent.Mo());
        this.Nu && (this.Tb = this.iF);
        if (10 === b.length) {
            var c, d, g = b[9];
            c = 0;
            for (d = g.length; c < d; c++) {
                var k = new Kc(this, g[c]);
                this.na.push(k)
            }
            this.Ab.length = g.length
        }
    }

    function b(a, b) {
        this.Ld = a;
        this.sheet = a.sheet;
        this.b = a.b;
        this.na = [];
        this.Ab = [];
        this.ka = {};
        this.index = -1;
        this.hk = !1;
        this.Cc = this.b.tg(b[1]); - 1 === b[0] ? (this.type = null, this.Tb = this.As, this.Eh = null, this.Ie = -1) : (this.type = this.b.K[b[0]], this.Tb = this.zs, b[2] ? (this.Eh = this.type.en(b[2]), this.Ie = this.type.Iq(b[2])) : (this.Eh = null, this.Ie = -1));
        this.Ca = b[3];
        this.b.vg[this.Ca.toString()] = this;
        if (6 === b.length) {
            var c, d, g = b[5];
            c = 0;
            for (d = g.length; c < d; c++) {
                var k = new Kc(this, g[c]);
                this.na.push(k)
            }
            this.Ab.length = g.length
        }
    }

    function c() {
        z++;
        J.length === z && J.push(new Lc);
        return J[z]
    }

    function g(a, b) {
        this.jb = a;
        this.Ld = a.Ld;
        this.sheet = a.sheet;
        this.b = a.b;
        this.type = b[0];
        this.hf = null;
        this.ig = 0;
        this.get = null;
        this.xu = 0;
        this.wc = null;
        this.key = 0;
        this.object = null;
        this.index = 0;
        this.am = this.vi = this.am = this.vi = this.Ru = this.Rh = this.cm = null;
        this.ze = !1;
        var c, d, g;
        switch (b[0]) {
            case 0:
            case 7:
                this.hf = new Mc(this, b[1]);
                this.ig = 0;
                this.get = this.jD;
                break;
            case 1:
                this.hf = new Mc(this, b[1]);
                this.ig = 0;
                this.get = this.kD;
                break;
            case 5:
                this.hf = new Mc(this, b[1]);
                this.ig = 0;
                this.get = this.oD;
                break;
            case 3:
            case 8:
                this.xu = b[1];
                this.get = this.hD;
                break;
            case 6:
                this.wc = this.b.Fr[b[1]];
                this.get = this.pD;
                break;
            case 9:
                this.key = b[1];
                this.get = this.nD;
                break;
            case 4:
                this.object = this.b.K[b[1]];
                this.get = this.qD;
                this.Ld.du(this.object);
                this.jb instanceof Jc ? this.Ld.Mo() : this.Ld.parent && this.Ld.parent.Mo();
                break;
            case 10:
                this.index = b[1];
                a.type && a.type.U ? (this.get = this.lD, this.ze = !0) : this.get = this.mD;
                break;
            case 11:
                this.cm = b[1];
                this.Rh = null;
                this.get = this.iD;
                break;
            case 2:
            case 12:
                this.Ru = b[1];
                this.get = this.gD;
                break;
            case 13:
                for (this.get = this.rD, this.vi = [], this.am = [], c = 1, d = b.length; c < d; c++) g = new Kc(this.jb, b[c]), this.vi.push(g), this.am.push(0)
        }
    }

    function k(a, b, c) {
        this.sheet = a;
        this.parent = b;
        this.b = a.b;
        this.Ba = [];
        this.name = c[1];
        this.em = c[2];
        this.cr = c[3];
        this.Vk = !!c[4];
        this.An = !!c[5];
        this.Ca = c[6];
        this.b.bk[this.Ca.toString()] = this;
        this.data = this.cr;
        this.parent ? (this.ii = this.Vk || this.An ? -1 : this.b.xF++, this.b.WA.push(this)) : (this.ii = -1, this.b.VA.push(this))
    }

    function p(a, b, c) {
        this.sheet = a;
        this.parent = b;
        this.b = a.b;
        this.Ba = [];
        this.Kk = null;
        this.BD = c[1];
        this.Ya = !0
    }

    function q() {
        this.ay = [];
        this.reset(null)
    }
    var Q = [];
    l.prototype.toString = function() {
        return this.name
    };
    l.prototype.uv = function(a, b, c) {
        switch (a[0]) {
            case 0:
                a = new Nc(this, b, a);
                if (a.Wd)
                    for (c.push(a), c = 0, b = a.cc.length; c < b; c++) a.cc[c].trigger && this.vv(a, c);
                else a.Fv() ? this.vv(a, 0) : c.push(a);
                break;
            case 1:
                a = new Ec(this, b, a);
                c.push(a);
                break;
            case 2:
                a = new Oc(this, b, a), c.push(a)
        }
    };
    l.prototype.Gb = function() {
        var a, b;
        a = 0;
        for (b = this.Ig.length; a < b; a++) this.Ig[a].Gb(a < b - 1 && this.Ig[a + 1].Bn)
    };
    l.prototype.ct = function() {
        B(this.sq);
        B(this.Rp);
        this.bu(this);
        B(this.Rp)
    };
    l.prototype.bu = function(a) {
        var b, c, d, g, k = a.sq,
            e = a.Rp,
            f = this.sv.qh();
        b = 0;
        for (c = f.length; b < c; ++b) d = f[b], g = d.Kk, !d.Ya || a === g || -1 < e.indexOf(g) || (e.push(g), g.bu(a), k.push(g))
    };
    l.prototype.Tb = function(a) {
        this.b.sI || (this.Xq = !0, a || (this.b.or = !0));
        var b, c;
        b = 0;
        for (c = this.Ig.length; b < c; b++) {
            var d = this.Ig[b];
            d.Tb();
            this.b.fq(d.Ba);
            this.b.Mg && this.b.Ic()
        }
        a || (this.b.or = !1)
    };
    l.prototype.vv = function(a, b) {
        a.Wd || this.b.fp.push(a);
        var c, d, g = a.cc[b],
            k;
        g.type ? k = g.type.name : k = "system";
        var e = (c = g.Nu) ? this.Ou : this.gy;
        e[k] || (e[k] = []);
        k = e[k];
        e = g.Cc;
        if (c) {
            if (g.na.length && (g = g.na[0], 1 === g.type && 2 === g.hf.type)) {
                g = g.hf.value.toLowerCase();
                c = 0;
                for (d = k.length; c < d; c++)
                    if (k[c].method == e) {
                        c = k[c].xk;
                        c[g] ? c[g].push([a, b]) : c[g] = [
                            [a, b]
                        ];
                        return
                    }
                c = {};
                c[g] = [
                    [a, b]
                ];
                k.push({
                    method: e,
                    xk: c
                })
            }
        } else {
            c = 0;
            for (d = k.length; c < d; c++)
                if (k[c].method == e) {
                    k[c].xk.push([a, b]);
                    return
                }
            I && e === I.prototype.e.Ci ? k.unshift({
                method: e,
                xk: [
                    [a, b]
                ]
            }) : k.push({
                method: e,
                xk: [
                    [a, b]
                ]
            })
        }
    };
    pc = l;
    r.prototype.Wq = function() {
        return this.ua ? this.type.d.length : this.d.length
    };
    r.prototype.Pc = function() {
        return this.ua ? this.type.d : this.d
    };
    r.prototype.oi = function(a) {
        a && (a.b.Eb().Kb.Wd ? (this.ua && (B(this.d), Wa(this.ma, a.type.d), this.ua = !1), a = this.ma.indexOf(a), -1 !== a && (this.d.push(this.ma[a]), this.ma.splice(a, 1))) : (this.ua = !1, B(this.d), this.d[0] = a))
    };
    Nb = r;
    window._c2hh_ = "9B8E65E8653E4C80672958512A488E29C3DF5E90";
    m.prototype.Gb = function(a) {
        var b, c = this.parent;
        if (this.group)
            for (this.dp = !0; c;) {
                if (!c.group) {
                    this.dp = !1;
                    break
                }
                c = c.parent
            }
        this.Xs = !this.Fv() && (!this.parent || this.parent.group && this.parent.dp);
        this.rv = !!a;
        this.nh = this.Ba.slice(0);
        for (c = this.parent; c;) {
            a = 0;
            for (b = c.Ba.length; a < b; a++) this.TA(c.Ba[a]);
            c = c.parent
        }
        this.Ba = e(this.Ba);
        this.nh = e(this.nh);
        a = 0;
        for (b = this.cc.length; a < b; a++) this.cc[a].Gb();
        a = 0;
        for (b = this.Ee.length; a < b; a++) this.Ee[a].Gb();
        a = 0;
        for (b = this.xe.length; a < b; a++) this.xe[a].Gb(a < b - 1 && this.xe[a + 1].Bn)
    };
    m.prototype.Gx = function(a) {
        if (this.Zi !== !!a) {
            this.Zi = !!a;
            var b;
            a = 0;
            for (b = this.Fm.length; a < b; ++a) this.Fm[a].my();
            0 < b && this.b.Ra.Qh && this.b.Ra.Qh.ct()
        }
    };
    m.prototype.du = function(a) {
        d(a, this.Ba)
    };
    m.prototype.TA = function(a) {
        d(a, this.nh)
    };
    m.prototype.Mo = function() {
        this.Ks = !0;
        this.parent && this.parent.Mo()
    };
    m.prototype.Fv = function() {
        return this.cc.length ? this.cc[0].trigger : !1
    };
    m.prototype.Tb = function() {
        var a, b, c = !1,
            d = this.b,
            g = this.b.Eb();
        g.Kb = this;
        var k = this.cc;
        this.Bn || (g.yq = !1);
        if (this.Wd) {
            0 === k.length && (c = !0);
            g.Jb = 0;
            for (a = k.length; g.Jb < a; g.Jb++) b = k[g.Jb], b.trigger || (b = b.Tb()) && (c = !0);
            (g.ci = c) && this.Eo()
        } else {
            g.Jb = 0;
            for (a = k.length; g.Jb < a; g.Jb++)
                if (b = k[g.Jb].Tb(), !b) {
                    g.ci = !1;
                    this.Xs && d.Mg && d.Ic();
                    return
                }
            g.ci = !0;
            this.Eo()
        }
        this.gC(g)
    };
    m.prototype.gC = function(a) {
        a.ci && this.rv && (a.yq = !0);
        this.Xs && this.b.Mg && this.b.Ic()
    };
    m.prototype.fF = function(a) {
        this.b.Eb().Kb = this;
        this.cc[a].Tb() && (this.Eo(), this.b.Eb().ci = !0)
    };
    m.prototype.Eo = function() {
        var a = this.b.Eb(),
            b;
        a.ud = 0;
        for (b = this.Ee.length; a.ud < b; a.ud++)
            if (this.Ee[a.ud].Tb()) return;
        this.vx()
    };
    m.prototype.aF = function() {
        var a = this.b.Eb(),
            b;
        for (b = this.Ee.length; a.ud < b; a.ud++)
            if (this.Ee[a.ud].Tb()) return;
        this.vx()
    };
    m.prototype.vx = function() {
        if (this.xe.length) {
            var a, b, c, d, g = this.xe.length -
                1;
            this.b.yo(this);
            if (this.Ks)
                for (a = 0, b = this.xe.length; a < b; a++) c = this.xe[a], (d = !this.dp || !this.group && a < g) && this.b.hh(c.Ba), c.Tb(), d ? this.b.Se(c.Ba) : this.b.fq(c.Ba);
            else
                for (a = 0, b = this.xe.length; a < b; a++) this.xe[a].Tb();
            this.b.po()
        }
    };
    m.prototype.gF = function() {
        var a = this.b.Eb();
        a.Kb = this;
        var b = !1,
            c;
        a.Jb = 0;
        for (c = this.cc.length; a.Jb < c; a.Jb++)
            if (this.cc[a.Jb].Tb()) b = !0;
            else if (!this.Wd) return !1;
        return this.Wd ? b : !0
    };
    m.prototype.kh = function() {
        this.b.yk++;
        var a = this.b.Eb().Jb,
            b = this.b.yo(this);
        if (!this.Wd)
            for (b.Jb = a + 1, a = this.cc.length; b.Jb < a; b.Jb++)
                if (!this.cc[b.Jb].Tb()) {
                    this.b.po();
                    return
                }
        this.Eo();
        this.b.po()
    };
    m.prototype.LD = function(a) {
        var b = a.index;
        if (0 === b) return !0;
        for (--b; 0 <= b; --b)
            if (this.cc[b].type === a.type) return !1;
        return !0
    };
    Nc = m;
    a.prototype.Gb = function() {
        var a, b, c;
        a = 0;
        for (b = this.na.length; a < b; a++) c = this.na[a], c.Gb(), c.ze && (this.hk = !0)
    };
    a.prototype.iF = function() {
        return !0
    };
    a.prototype.As = function() {
        var a, b;
        a = 0;
        for (b = this.na.length; a < b; a++) this.Ab[a] = this.na[a].get();
        return qb(this.Cc.apply(this.b.uf, this.Ab), this.sn)
    };
    a.prototype.hF = function() {
        var a, b;
        a = 0;
        for (b = this.na.length; a < b; a++) this.Ab[a] = this.na[a].get();
        a = this.Cc.apply(this.Eh ? this.Eh : this.type, this.Ab);
        this.type.xd();
        return a
    };
    a.prototype.zs = function() {
        var a, b, c, d, g, k, e, f, q = this.type,
            h = q.ba(),
            p = this.Ld.Wd && !this.trigger;
        b = 0;
        var l = q.Zc,
            m = q.U,
            r = q.Qf,
            J = this.Ie,
            Q = -1 < J,
            t = this.hk,
            z = this.na,
            C = this.Ab,
            X = this.sn,
            K = this.Cc,
            M;
        if (t)
            for (b = 0, g = z.length; b < g; ++b) k = z[b], k.ze || (C[b] = k.get(0));
        else
            for (b = 0, g = z.length; b < g; ++b) C[b] = z[b].get(0);
        if (h.ua) {
            B(h.d);
            B(h.ma);
            M = q.d;
            a = 0;
            for (d = M.length; a < d; ++a) {
                f = M[a];
                if (t)
                    for (b = 0, g = z.length; b < g; ++b) k = z[b], k.ze && (C[b] = k.get(a));
                Q ? (b = 0, m && (b = f.type.Ti[r]), b = K.apply(f.qa[J + b], C)) : b = K.apply(f, C);
                (e = qb(b, X)) ? h.d.push(f): p && h.ma.push(f)
            }
            q.finish && q.finish(!0);
            h.ua = !1;
            q.xd();
            return h.Wq()
        }
        c = 0;
        M = (e = p && !this.Ld.LD(this)) ? h.ma : h.d;
        var S = !1;
        a = 0;
        for (d = M.length; a < d; ++a) {
            f = M[a];
            if (t)
                for (b = 0, g = z.length; b < g; ++b) k = z[b], k.ze && (C[b] = k.get(a));
            Q ? (b = 0, m && (b = f.type.Ti[r]), b = K.apply(f.qa[J + b], C)) : b = K.apply(f, C);
            if (qb(b, X))
                if (S = !0, e) {
                    if (h.d.push(f), l)
                        for (b = 0, g = f.siblings.length; b < g; b++) k = f.siblings[b], k.type.ba().d.push(k)
                } else {
                    M[c] = f;
                    if (l)
                        for (b = 0, g = f.siblings.length; b < g; b++) k = f.siblings[b], k.type.ba().d[c] = k;
                    c++
                }
            else if (e) {
                M[c] = f;
                if (l)
                    for (b = 0, g = f.siblings.length; b < g; b++) k = f.siblings[b], k.type.ba().ma[c] = k;
                c++
            } else if (p && (h.ma.push(f), l))
                for (b = 0, g = f.siblings.length; b < g; b++) k = f.siblings[b], k.type.ba().ma.push(k)
        }
        Va(M, c);
        if (l)
            for (m = q.yd, a = 0, d = m.length; a < d; a++) f = m[a].ba(), e ? Va(f.ma, c) : Va(f.d, c);
        c = S;
        if (e && !S)
            for (a = 0, d = h.d.length; a < d; a++) {
                f = h.d[a];
                if (t)
                    for (b = 0, g = z.length; b < g; b++) k = z[b], k.ze && (C[b] = k.get(a));
                b = Q ? K.apply(f.qa[J], C) : K.apply(f, C);
                if (qb(b, X)) {
                    S = !0;
                    break
                }
            }
        q.finish && q.finish(c || p);
        return p ? S : h.Wq()
    };
    Ic = a;
    b.prototype.Gb = function() {
        var a, b, c;
        a = 0;
        for (b = this.na.length; a < b; a++) c = this.na[a], c.Gb(), c.ze && (this.hk = !0)
    };
    b.prototype.As = function() {
        var a = this.b,
            b, c, d = this.na,
            g = this.Ab;
        b = 0;
        for (c = d.length; b < c; ++b) g[b] = d[b].get();
        return this.Cc.apply(a.uf, g)
    };
    b.prototype.zs = function() {
        var a = this.type,
            b = this.Ie,
            c = a.Qf,
            d = this.hk,
            g = this.na,
            k = this.Ab,
            e = this.Cc,
            f = a.ba().Pc(),
            a = a.U,
            q = -1 < b,
            h, p, l, m, r, J;
        if (d)
            for (p = 0, m = g.length; p < m; ++p) r = g[p], r.ze || (k[p] = r.get(0));
        else
            for (p = 0, m = g.length; p < m; ++p) k[p] = g[p].get(0);
        h = 0;
        for (l = f.length; h < l; ++h) {
            J = f[h];
            if (d)
                for (p = 0, m = g.length; p < m; ++p) r = g[p], r.ze && (k[p] = r.get(h));
            q ? (p = 0, a && (p = J.type.Ti[c]), e.apply(J.qa[b + p], k)) : e.apply(J, k)
        }
        return !1
    };
    Jc = b;
    var J = [],
        z = -1;
    g.prototype.Gb = function() {
        var a, b;
        if (11 === this.type) this.Rh = this.b.jv(this.cm, this.Ld.parent);
        else if (13 === this.type)
            for (a = 0, b = this.vi.length; a < b; a++) this.vi[a].Gb();
        this.hf && this.hf.Gb()
    };
    g.prototype.hE = function(a) {
        this.ze || !a || a.Ua.Oo || (this.ze = !0)
    };
    g.prototype.Kx = function() {
        this.ze = !0
    };
    g.prototype.jD = function(a) {
        this.ig = a || 0;
        a = c();
        this.hf.get(a);
        z--;
        return a.data
    };
    g.prototype.kD = function(a) {
        this.ig = a || 0;
        a = c();
        this.hf.get(a);
        z--;
        return xa(a.data) ? a.data : ""
    };
    g.prototype.qD = function() {
        return this.object
    };
    g.prototype.hD = function() {
        return this.xu
    };
    g.prototype.oD = function(a) {
        this.ig = a || 0;
        a = c();
        this.hf.get(a);
        z--;
        return a.tc() ? this.b.Wi(a.data) : this.b.gn(a.data)
    };
    g.prototype.pD = function() {
        return this.wc
    };
    g.prototype.nD = function() {
        return this.key
    };
    g.prototype.mD = function() {
        return this.index
    };
    g.prototype.lD = function(a) {
        a = a || 0;
        var b = this.jb.type,
            c = null,
            c = b.ba(),
            d = c.Pc();
        if (d.length) c = d[a % d.length].type;
        else if (c.ma.length) c = c.ma[a % c.ma.length].type;
        else if (b.d.length) c = b.d[a % b.d.length].type;
        else return 0;
        return this.index + c.Xm[b.Qf]
    };
    g.prototype.iD = function() {
        return this.Rh
    };
    g.prototype.gD = function() {
        return this.Ru
    };
    g.prototype.rD = function() {
        var a, b;
        a = 0;
        for (b = this.vi.length; a < b; a++) this.am[a] = this.vi[a].get();
        return this.am
    };
    Kc = g;
    k.prototype.Gb = function() {
        this.Ba = e(this.Ba)
    };
    k.prototype.gg = function(a) {
        var b = this.b.gv();
        this.parent && !this.Vk && b ? (this.ii >= b.length && (b.length = this.ii + 1), b[this.ii] = a) : this.data = a
    };
    k.prototype.Th = function() {
        var a = this.b.gv();
        return !this.parent || this.Vk || !a || this.An ? this.data : this.ii >= a.length || "undefined" === typeof a[this.ii] ? this.cr : a[this.ii]
    };
    k.prototype.Tb = function() {
        !this.parent || this.Vk || this.An || this.gg(this.cr)
    };
    Ec = k;
    p.prototype.toString = function() {
        return "include:" + this.Kk.toString()
    };
    p.prototype.Gb = function() {
        this.Kk = this.b.Aq[this.BD];
        this.sheet.sv.add(this);
        this.Ba = e(this.Ba);
        for (var a = this.parent; a;) a.group && a.Fm.push(this), a = a.parent;
        this.my()
    };
    p.prototype.Tb = function() {
        this.parent && this.b.El(this.b.K);
        this.Kk.Xq || this.Kk.Tb(!0);
        this.parent && this.b.Se(this.b.K)
    };
    p.prototype.my = function() {
        for (var a = this.parent; a;) {
            if (a.group && !a.Zi) {
                this.Ya = !1;
                return
            }
            a = a.parent
        }
        this.Ya = !0
    };
    Oc = p;
    q.prototype.reset = function(a) {
        this.Kb = a;
        this.ud = this.Jb = 0;
        B(this.ay);
        this.yq = this.ci = !1
    };
    q.prototype.Cv = function() {
        return this.Kb.Ks ? !0 : this.Jb < this.Kb.cc.length - 1 ? !!this.Kb.Ba.length : !1
    };
    Dc = q
})();
(function() {
    function f(d, a) {
        this.jb = d;
        this.b = d.b;
        this.type = a[0];
        this.get = [this.yC, this.uC, this.HC, this.KC, this.jC, this.IC, this.CC, this.rC, this.BC, this.GC, this.kC, this.FC, this.sC, this.DC, this.zC, this.AC, this.vC, this.wC, this.qC, this.JC, this.EC, this.xC, this.pC, this.tC][this.type];
        var b = null;
        this.Yf = this.na = this.Ab = this.Cc = this.$o = this.second = this.first = this.value = null;
        this.Ie = -1;
        this.Me = null;
        this.uy = -1;
        this.Rh = this.cm = null;
        this.Ej = !1;
        switch (this.type) {
            case 0:
            case 1:
            case 2:
                this.value = a[1];
                break;
            case 3:
                this.first = new Mc(d, a[1]);
                break;
            case 18:
                this.first = new Mc(d, a[1]);
                this.second = new Mc(d, a[2]);
                this.$o = new Mc(d, a[3]);
                break;
            case 19:
                this.Cc = this.b.tg(a[1]);
                this.Cc !== H.prototype.H.random && this.Cc !== H.prototype.H.tu || this.jb.Kx();
                this.Ab = [];
                this.na = [];
                3 === a.length ? (b = a[2], this.Ab.length = b.length + 1) : this.Ab.length = 1;
                break;
            case 20:
                this.Yf = this.b.K[a[1]];
                this.Ie = -1;
                this.Cc = this.b.tg(a[2]);
                this.Ej = a[3];
                $c && this.Cc === $c.prototype.H.ut && this.jb.Kx();
                a[4] ? this.Me = new Mc(d, a[4]) : this.Me = null;
                this.Ab = [];
                this.na = [];
                6 === a.length ? (b = a[5], this.Ab.length = b.length + 1) : this.Ab.length = 1;
                break;
            case 21:
                this.Yf = this.b.K[a[1]];
                this.Ej = a[2];
                a[3] ? this.Me = new Mc(d, a[3]) : this.Me = null;
                this.uy = a[4];
                break;
            case 22:
                this.Yf = this.b.K[a[1]];
                this.Yf.en(a[2]);
                this.Ie = this.Yf.Iq(a[2]);
                this.Cc = this.b.tg(a[3]);
                this.Ej = a[4];
                a[5] ? this.Me = new Mc(d, a[5]) : this.Me = null;
                this.Ab = [];
                this.na = [];
                7 === a.length ? (b = a[6], this.Ab.length = b.length + 1) : this.Ab.length = 1;
                break;
            case 23:
                this.cm = a[1], this.Rh = null
        }
        this.jb.hE(this.Yf);
        4 <= this.type && 17 >= this.type && (this.first = new Mc(d, a[1]), this.second = new Mc(d, a[2]));
        if (b) {
            var c, g;
            c = 0;
            for (g = b.length; c < g; c++) this.na.push(new Mc(d, b[c]))
        }
    }

    function h() {
        ++m;
        r.length === m && r.push(new Lc);
        return r[m]
    }

    function e(d, a, b) {
        var c, g;
        c = 0;
        for (g = d.length; c < g; ++c) d[c].get(b), a[c + 1] = b.data
    }

    function l(d, a) {
        this.type = d || Pc.Bi;
        this.data = a || 0;
        this.mi = null;
        this.type == Pc.Bi && (this.data = Math.floor(this.data))
    }
    f.prototype.Gb = function() {
        23 === this.type && (this.Rh = this.jb.b.jv(this.cm, this.jb.Ld.parent));
        this.first && this.first.Gb();
        this.second && this.second.Gb();
        this.$o && this.$o.Gb();
        this.Me && this.Me.Gb();
        if (this.na) {
            var d, a;
            d = 0;
            for (a = this.na.length; d < a; d++) this.na[d].Gb()
        }
    };
    var r = [],
        m = -1;
    f.prototype.JC = function(d) {
        var a = this.na,
            b = this.Ab;
        b[0] = d;
        d = h();
        e(a, b, d);
        --m;
        this.Cc.apply(this.b.uf, b)
    };
    f.prototype.EC = function(d) {
        var a = this.Yf,
            b = this.Ab,
            c = this.na,
            g = this.Me,
            k = this.Cc,
            f = this.jb.ig,
            q = a.ba(),
            l = q.Pc();
        if (!l.length)
            if (q.ma.length) l = q.ma;
            else {
                this.Ej ? d.kb("") : d.S(0);
                return
            }
        b[0] = d;
        d.mi = a;
        d = h();
        e(c, b, d);
        g && (g.get(d), d.tc() && (f = d.data, l = a.d));
        --m;
        a = l.length;
        if (f >= a || f <= -a) f %= a;
        0 > f && (f += a);
        k.apply(l[f], b)
    };
    f.prototype.pC = function(d) {
        var a = this.Yf,
            b = this.Ab,
            c = this.na,
            g = this.Me,
            k = this.Ie,
            f = this.Cc,
            q = this.jb.ig,
            l = a.ba(),
            r = l.Pc();
        if (!r.length)
            if (l.ma.length) r = l.ma;
            else {
                this.Ej ? d.kb("") : d.S(0);
                return
            }
        b[0] = d;
        d.mi = a;
        d = h();
        e(c, b, d);
        g && (g.get(d), d.tc() && (q = d.data, r = a.d));
        --m;
        c = r.length;
        if (q >= c || q <= -c) q %= c;
        0 > q && (q += c);
        q = r[q];
        r = 0;
        a.U && (r = q.type.Ti[a.Qf]);
        f.apply(q.qa[k + r], b)
    };
    f.prototype.xC = function(d) {
        var a = this.Me,
            b = this.Yf,
            c = this.uy,
            g = this.jb.ig,
            k = b.ba(),
            e = k.Pc();
        if (!e.length)
            if (k.ma.length) e = k.ma;
            else {
                this.Ej ? d.kb("") : d.S(0);
                return
            }
        if (a) {
            k = h();
            a.get(k);
            if (k.tc()) {
                g = k.data;
                e = b.d;
                0 !== e.length && (g %= e.length, 0 > g && (g += e.length));
                g = b.Mq(g);
                b = g.ic[c];
                xa(b) ? d.kb(b) : d.B(b);
                --m;
                return
            }--m
        }
        a = e.length;
        if (g >= a || g <= -a) g %= a;
        0 > g && (g += a);
        g = e[g];
        e = 0;
        b.U && (e = g.type.Xm[b.Qf]);
        b = g.ic[c + e];
        xa(b) ? d.kb(b) : d.B(b)
    };
    f.prototype.yC = function(d) {
        d.type = Pc.Bi;
        d.data = this.value
    };
    f.prototype.uC = function(d) {
        d.type = Pc.Ai;
        d.data = this.value
    };
    f.prototype.HC = function(d) {
        d.type = Pc.String;
        d.data = this.value
    };
    f.prototype.KC = function(d) {
        this.first.get(d);
        d.tc() && (d.data = -d.data)
    };
    f.prototype.jC = function(d) {
        this.first.get(d);
        var a = h();
        this.second.get(a);
        d.tc() && a.tc() && (d.data += a.data, a.dj() && d.qj());
        --m
    };
    f.prototype.IC = function(d) {
        this.first.get(d);
        var a = h();
        this.second.get(a);
        d.tc() && a.tc() && (d.data -= a.data, a.dj() && d.qj());
        --m
    };
    f.prototype.CC = function(d) {
        this.first.get(d);
        var a = h();
        this.second.get(a);
        d.tc() && a.tc() && (d.data *= a.data, a.dj() && d.qj());
        --m
    };
    f.prototype.rC = function(d) {
        this.first.get(d);
        var a = h();
        this.second.get(a);
        d.tc() && a.tc() && (d.data /= a.data, d.qj());
        --m
    };
    f.prototype.BC = function(d) {
        this.first.get(d);
        var a = h();
        this.second.get(a);
        d.tc() && a.tc() && (d.data %= a.data, a.dj() && d.qj());
        --m
    };
    f.prototype.GC = function(d) {
        this.first.get(d);
        var a = h();
        this.second.get(a);
        d.tc() && a.tc() && (d.data = Math.pow(d.data, a.data), a.dj() && d.qj());
        --m
    };
    f.prototype.kC = function(d) {
        this.first.get(d);
        var a = h();
        this.second.get(a);
        a.gj() || d.gj() ? this.mC(d, a) : this.lC(d, a);
        --m
    };
    f.prototype.mC = function(d, a) {
        d.gj() && a.gj() ? this.oC(d, a) : this.nC(d, a)
    };
    f.prototype.oC = function(d, a) {
        d.data += a.data
    };
    f.prototype.nC = function(d, a) {
        d.gj() ? d.data += (Math.round(1E10 * a.data) / 1E10).toString() : d.kb(d.data.toString() + a.data)
    };
    f.prototype.lC = function(d, a) {
        d.S(d.data && a.data ? 1 : 0)
    };
    f.prototype.FC = function(d) {
        this.first.get(d);
        var a = h();
        this.second.get(a);
        d.tc() && a.tc() && (d.data || a.data ? d.S(1) : d.S(0));
        --m
    };
    f.prototype.qC = function(d) {
        this.first.get(d);
        d.data ? this.second.get(d) : this.$o.get(d)
    };
    f.prototype.sC = function(d) {
        this.first.get(d);
        var a = h();
        this.second.get(a);
        d.S(d.data === a.data ? 1 : 0);
        --m
    };
    f.prototype.DC = function(d) {
        this.first.get(d);
        var a = h();
        this.second.get(a);
        d.S(d.data !== a.data ? 1 : 0);
        --m
    };
    f.prototype.zC = function(d) {
        this.first.get(d);
        var a = h();
        this.second.get(a);
        d.S(d.data < a.data ? 1 : 0);
        --m
    };
    f.prototype.AC = function(d) {
        this.first.get(d);
        var a = h();
        this.second.get(a);
        d.S(d.data <= a.data ? 1 : 0);
        --m
    };
    f.prototype.vC = function(d) {
        this.first.get(d);
        var a = h();
        this.second.get(a);
        d.S(d.data > a.data ? 1 : 0);
        --m
    };
    f.prototype.wC = function(d) {
        this.first.get(d);
        var a = h();
        this.second.get(a);
        d.S(d.data >= a.data ? 1 : 0);
        --m
    };
    f.prototype.tC = function(d) {
        var a = this.Rh.Th();
        va(a) ? d.B(a) : d.kb(a)
    };
    Mc = f;
    l.prototype.dj = function() {
        return this.type === Pc.Ai
    };
    l.prototype.tc = function() {
        return this.type === Pc.Bi || this.type === Pc.Ai
    };
    l.prototype.gj = function() {
        return this.type === Pc.String
    };
    l.prototype.qj = function() {
        this.dj() || (this.gj() && (this.data = parseFloat(this.data)), this.type = Pc.Ai)
    };
    l.prototype.S = function(d) {
        this.type = Pc.Bi;
        this.data = Math.floor(d)
    };
    l.prototype.B = function(d) {
        this.type = Pc.Ai;
        this.data = d
    };
    l.prototype.kb = function(d) {
        this.type = Pc.String;
        this.data = d
    };
    l.prototype.Ml = function(d) {
        va(d) ? (this.type = Pc.Ai, this.data = d) : xa(d) ? (this.type = Pc.String, this.data = d.toString()) : (this.type = Pc.Bi, this.data = 0)
    };
    Lc = l;
    Pc = {
        Bi: 0,
        Ai: 1,
        String: 2
    }
})();

function H(f) {
    this.b = f;
    this.td = []
}
H.prototype.nc = function() {
    var f = {},
        h, e, l, r, m, d, a, b;
    f.waits = [];
    var c = f.waits,
        g;
    h = 0;
    for (e = this.td.length; h < e; h++) {
        d = this.td[h];
        g = {
            t: d.time,
            st: d.Rx,
            s: d.Is,
            ev: d.Ri.Ca,
            sm: [],
            sols: {}
        };
        d.Ri.Ee[d.ud] && (g.act = d.Ri.Ee[d.ud].Ca);
        l = 0;
        for (r = d.Ba.length; l < r; l++) g.sm.push(d.Ba[l].Ca);
        for (m in d.cd)
            if (d.cd.hasOwnProperty(m)) {
                a = this.b.K[parseInt(m, 10)];
                b = {
                    sa: d.cd[m].Fo,
                    insts: []
                };
                l = 0;
                for (r = d.cd[m].Uf.length; l < r; l++) b.insts.push(d.cd[m].Uf[l].uid);
                g.sols[a.Ca.toString()] = b
            }
        c.push(g)
    }
    return f
};
H.prototype.Ec = function(f) {
    f = f.waits;
    var h, e, l, r, m, d, a, b, c, g, k;
    B(this.td);
    h = 0;
    for (e = f.length; h < e; h++)
        if (d = f[h], b = this.b.ku[d.ev.toString()]) {
            c = -1;
            l = 0;
            for (r = b.Ee.length; l < r; l++)
                if (b.Ee[l].Ca === d.act) {
                    c = l;
                    break
                }
            if (-1 !== c) {
                a = {
                    cd: {},
                    Ba: [],
                    tq: !1
                };
                a.time = d.t;
                a.Rx = d.st || "";
                a.Is = !!d.s;
                a.Ri = b;
                a.ud = c;
                l = 0;
                for (r = d.sm.length; l < r; l++)(b = this.b.jn(d.sm[l])) && a.Ba.push(b);
                for (m in d.sols)
                    if (d.sols.hasOwnProperty(m) && (b = this.b.jn(parseInt(m, 10)))) {
                        c = d.sols[m];
                        g = {
                            Fo: c.sa,
                            Uf: []
                        };
                        l = 0;
                        for (r = c.insts.length; l < r; l++)(k = this.b.Xi(c.insts[l])) && g.Uf.push(k);
                        a.cd[b.index.toString()] = g
                    }
                this.td.push(a)
            }
        }
};
(function() {
    function f() {}

    function h() {}

    function e() {}
    var l = H.prototype;
    f.prototype.Xy = function() {
        return !0
    };
    f.prototype.Jt = function() {
        return !0
    };
    f.prototype.Lz = function() {
        return !0
    };
    f.prototype.Ky = function(a, c, d) {
        return Qc(a, c, d)
    };
    f.prototype.sz = function(a) {
        return a ? a.visible : !1
    };
    f.prototype.rz = function(a, c, d) {
        return a ? Qc(100 * a.opacity, c, d) : !1
    };
    f.prototype.Yy = function(a, c, d) {
        var k = this.b.Eb(),
            e = k.Kb,
            k = k.Cv();
        a = this.b.mx(a);
        if (d < c)
            if (k)
                for (; c >= d && !a.Cb; --c) this.b.hh(e.Ba), a.index = c, e.kh(), this.b.Se(e.Ba);
            else
                for (; c >= d && !a.Cb; --c) a.index = c, e.kh();
        else if (k)
            for (; c <= d && !a.Cb; ++c) this.b.hh(e.Ba), a.index = c, e.kh(), this.b.Se(e.Ba);
        else
            for (; c <= d && !a.Cb; ++c) a.index = c, e.kh();
        this.b.gx();
        return !1
    };
    var r = [],
        m = -1;
    f.prototype.Zy = function(a) {
        var c = a.ba();
        m++;
        r.length === m && r.push([]);
        var d = r[m];
        Wa(d, c.Pc());
        var k = this.b.Eb(),
            e = k.Kb,
            f = k.Cv(),
            k = this.b.mx(),
            h, l, z, n, D, E, w = a.Zc;
        if (f)
            for (f = 0, h = d.length; f < h && !k.Cb; f++) {
                this.b.hh(e.Ba);
                n = d[f];
                c = a.ba();
                c.ua = !1;
                B(c.d);
                c.d[0] = n;
                if (w)
                    for (l = 0, z = n.siblings.length; l < z; l++) D = n.siblings[l], E = D.type.ba(), E.ua = !1, B(E.d), E.d[0] = D;
                k.index = f;
                e.kh();
                this.b.Se(e.Ba)
            } else
                for (c.ua = !1, B(c.d), f = 0, h = d.length; f < h && !k.Cb; f++) {
                    n = d[f];
                    c.d[0] = n;
                    if (w)
                        for (l = 0, z = n.siblings.length; l < z; l++) D = n.siblings[l], E = D.type.ba(), E.ua = !1, B(E.d), E.d[0] = D;
                    k.index = f;
                    e.kh()
                }
        B(d);
        this.b.gx();
        m--;
        return !1
    };
    f.prototype.HA = function() {
        var a = this.b.Dk().ka;
        "undefined" === typeof a.TriggerOnce_lastTick && (a.TriggerOnce_lastTick = -1);
        var c = a.TriggerOnce_lastTick,
            d = this.b.lg;
        a.TriggerOnce_lastTick = d;
        return this.b.Er || c !== d - 1
    };
    f.prototype.Wy = function(a) {
        var c = this.b.Dk(),
            d = c.ka.Every_lastTime || 0,
            k = this.b.vc.Da;
        "undefined" === typeof c.ka.Every_seconds && (c.ka.Every_seconds = a);
        var e = c.ka.Every_seconds;
        if (k >= d + e) return c.ka.Every_lastTime = d + e, k >= c.ka.Every_lastTime + .04 && (c.ka.Every_lastTime = k), c.ka.Every_seconds = a, !0;
        k < d - .1 && (c.ka.Every_lastTime = k);
        return !1
    };
    f.prototype.aA = function(a, c) {
        if (!a) return !1;
        var d = a.ba(),
            k = d.Pc();
        c = Ja(c);
        if (0 > c || c >= k.length) return !1;
        d.oi(k[c]);
        a.xd();
        return !0
    };
    f.prototype.bA = function(a) {
        if (!a) return !1;
        var c = a.ba(),
            d = c.Pc(),
            k = Ja(Math.random() * d.length);
        if (k >= d.length) return !1;
        c.oi(d[k]);
        a.xd();
        return !0
    };
    f.prototype.Oy = function(a, c, d) {
        return Qc(a.Th(), c, d)
    };
    f.prototype.hz = function(a) {
        return (a = this.b.Ik[a.toLowerCase()]) && a.Zi
    };
    f.prototype.yt = function() {
        var a = this.b.Eb();
        return a.yq ? !1 : !a.ci
    };
    f.prototype.Ap = function() {
        return !0
    };
    f.prototype.Dz = function() {
        return !0
    };
    f.prototype.Bp = function() {
        return !0
    };
    f.prototype.Nt = function() {
        return !0
    };
    f.prototype.Mz = function() {
        return !0
    };
    f.prototype.km = function() {
        return !0
    };
    f.prototype.Ay = function(a, c, d) {
        return lb(bb(a), bb(d)) <= bb(c)
    };
    f.prototype.gz = function(a, c) {
        return nb(bb(a), bb(c))
    };
    f.prototype.fz = function(a, c, d) {
        a = ib(a);
        c = ib(c);
        d = ib(d);
        return nb(d, c) ? nb(a, c) && !nb(a, d) : !(!nb(a, c) && nb(a, d))
    };
    l.e = new f;
    h.prototype.az = function(a) {
        this.b.ij || this.b.Ih || (this.b.Ih = a)
    };
    h.prototype.Ry = function(a, c, d, k) {
        if (c && a && (c = this.b.Im(a, c, d, k))) {
            this.b.Ne++;
            var e;
            this.b.trigger(Object.getPrototypeOf(a.Ua).e.dk, c);
            if (c.Zc)
                for (d = 0, k = c.siblings.length; d < k; d++) e = c.siblings[d], this.b.trigger(Object.getPrototypeOf(e.type.Ua).e.dk, e);
            this.b.Ne--;
            a = a.ba();
            a.ua = !1;
            B(a.d);
            a.d[0] = c;
            if (c.Zc)
                for (d = 0, k = c.siblings.length; d < k; d++) e = c.siblings[d], a = e.type.ba(), a.ua = !1, B(a.d), a.d[0] = e
        }
    };
    h.prototype.oA = function(a, c) {
        a && a.visible !== c && (a.visible = c, this.b.O = !0)
    };
    h.prototype.nA = function(a, c) {
        a && (c = ab(c / 100, 0, 1), a.opacity !== c && (a.opacity = c, this.b.O = !0))
    };
    h.prototype.xA = function(a, c) {
        0 === a.em ? va(c) ? a.gg(c) : a.gg(parseFloat(c)) : 1 === a.em && a.gg(c.toString())
    };
    h.prototype.yy = function(a, c) {
        0 === a.em ? va(c) ? a.gg(a.Th() + c) : a.gg(a.Th() + parseFloat(c)) : 1 === a.em && a.gg(a.Th() + c.toString())
    };
    h.prototype.FA = function(a, c) {
        0 === a.em && (va(c) ? a.gg(a.Th() - c) : a.gg(a.Th() - parseFloat(c)))
    };
    h.prototype.wA = function(a) {
        0 > a && (a = 0);
        this.b.oh = a
    };
    var d = [],
        a = [];
    h.prototype.JA = function(b) {
        if (!(0 > b)) {
            var c, g, k, e = this.b.Eb(),
                f;
            d.length ? f = d.pop() : f = {
                cd: {},
                Ba: []
            };
            f.tq = !1;
            f.time = this.b.vc.Da + b;
            f.Rx = "";
            f.Is = !1;
            f.Ri = e.Kb;
            f.ud = e.ud + 1;
            b = 0;
            for (c = this.b.K.length; b < c; b++) k = this.b.K[b], g = k.ba(), g.ua && -1 === e.Kb.Ba.indexOf(k) || (f.Ba.push(k), k = void 0, a.length ? k = a.pop() : k = {
                Uf: []
            }, k.Fo = !1, k.Fo = g.ua, Wa(k.Uf, g.d), f.cd[b.toString()] = k);
            this.td.push(f);
            return !0
        }
    };
    h.prototype.mA = function(a, c) {
        if (a) {
            var d = Pa(c),
                k = Ra(c),
                e = Sa(c);
            if (a.Kc[0] !== d || a.Kc[1] !== k || a.Kc[2] !== e) a.Kc[0] = d, a.Kc[1] = k, a.Kc[2] = e, this.b.O = !0
        }
    };
    h.prototype.dA = function() {
        if (!this.b.ij && !this.b.Ih && this.b.Ra) {
            this.b.Ih = this.b.Ra;
            var a, c, d;
            a = 0;
            for (c = this.b.xg.length; a < c; a++) d = this.b.xg[a], d.Gx(d.rn)
        }
    };
    l.k = new h;
    e.prototype["int"] = function(a, c) {
        xa(c) ? (a.S(parseInt(c, 10)), isNaN(a.data) && (a.data = 0)) : a.S(c)
    };
    e.prototype["float"] = function(a, c) {
        xa(c) ? (a.B(parseFloat(c)), isNaN(a.data) && (a.data = 0)) : a.B(c)
    };
    e.prototype.Wx = function(a, c) {
        xa(c) ? a.kb(c) : a.kb(c.toString())
    };
    e.prototype.random = function(a, c, d) {
        void 0 === d ? a.B(Math.random() * c) : a.B(Math.random() * (d - c) + c)
    };
    e.prototype.sqrt = function(a, c) {
        a.B(Math.sqrt(c))
    };
    e.prototype.abs = function(a, c) {
        a.B(Math.abs(c))
    };
    e.prototype.round = function(a, c) {
        a.S(Math.round(c))
    };
    e.prototype.floor = function(a, c) {
        a.S(Math.floor(c))
    };
    e.prototype.ceil = function(a, c) {
        a.S(Math.ceil(c))
    };
    e.prototype.sin = function(a, c) {
        a.B(Math.sin(bb(c)))
    };
    e.prototype.cos = function(a, c) {
        a.B(Math.cos(bb(c)))
    };
    e.prototype.tan = function(a, c) {
        a.B(Math.tan(bb(c)))
    };
    e.prototype.asin = function(a, c) {
        a.B(cb(Math.asin(c)))
    };
    e.prototype.acos = function(a, c) {
        a.B(cb(Math.acos(c)))
    };
    e.prototype.atan = function(a, c) {
        a.B(cb(Math.atan(c)))
    };
    e.prototype.exp = function(a, c) {
        a.B(Math.exp(c))
    };
    e.prototype.log10 = function(a, c) {
        a.B(Math.log(c) / Math.LN10)
    };
    e.prototype.max = function(a) {
        var c = arguments[1];
        "number" !== typeof c && (c = 0);
        var d, k, e;
        d = 2;
        for (k = arguments.length; d < k; d++) e = arguments[d], "number" === typeof e && c < e && (c = e);
        a.B(c)
    };
    e.prototype.min = function(a) {
        var c = arguments[1];
        "number" !== typeof c && (c = 0);
        var d, e, f;
        d = 2;
        for (e = arguments.length; d < e; d++) f = arguments[d], "number" === typeof f && c > f && (c = f);
        a.B(c)
    };
    e.prototype.Gg = function(a) {
        a.B(this.b.Gg)
    };
    e.prototype.oh = function(a) {
        a.B(this.b.oh)
    };
    e.prototype.time = function(a) {
        a.B(this.b.vc.Da)
    };
    e.prototype.lg = function(a) {
        a.S(this.b.lg)
    };
    e.prototype.Sn = function(a) {
        a.S(this.b.Sn)
    };
    e.prototype.Eq = function(a) {
        a.S(this.b.Eq)
    };
    e.prototype.bE = function(a, c) {
        var d, e;
        if (this.b.pl.length)
            if (c) {
                for (e = this.b.ql; 0 <= e; --e)
                    if (d = this.b.pl[e], d.name === c) {
                        a.S(d.index);
                        return
                    }
                a.S(0)
            } else d = this.b.hv(), a.S(d ? d.index : -1);
        else a.S(0)
    };
    e.prototype.HB = function(a, c, d, e, f) {
        a.B(pb(c, d, e, f))
    };
    e.prototype.j = function(a, c, d, e, f) {
        a.B(cb(jb(c, d, e, f)))
    };
    e.prototype.Hi = function(a, c, d, e) {
        c < d ? a.B(d) : c > e ? a.B(e) : a.B(c)
    };
    e.prototype.XD = function(a, c) {
        var d = this.b.$C(c);
        d ? a.B(100 * d.opacity) : a.B(0)
    };
    e.prototype.ZD = function(a) {
        a.S(this.b.Ra.width)
    };
    e.prototype.YD = function(a) {
        a.S(this.b.Ra.height)
    };
    e.prototype.find = function(a, c, d) {
        xa(c) && xa(d) ? a.S(c.search(new RegExp(yb(d), "i"))) : a.S(-1)
    };
    e.prototype.left = function(a, c, d) {
        a.kb(xa(c) ? c.substr(0, d) : "")
    };
    e.prototype.right = function(a, c, d) {
        a.kb(xa(c) ? c.substr(c.length - d) : "")
    };
    e.prototype.JF = function(a, c, d, e) {
        xa(c) && xa(e) ? (c = c.split(e), d = Ja(d), 0 > d || d >= c.length ? a.kb("") : a.kb(c[d])) : a.kb("")
    };
    e.prototype.KF = function(a, c, d) {
        xa(c) && c.length ? a.S(c.split(d).length) : a.S(0)
    };
    e.prototype.replace = function(a, c, d, e) {
        xa(c) && xa(d) && xa(e) ? a.kb(c.replace(new RegExp(yb(d), "gi"), e)) : a.kb(xa(c) ? c : "")
    };
    e.prototype.trim = function(a, c) {
        a.kb(xa(c) ? c.trim() : "")
    };
    e.prototype.tu = function(a) {
        var c = Ja(Math.random() * (arguments.length - 1));
        a.Ml(arguments[c + 1])
    };
    e.prototype.cF = function(a, c, d, e) {
        a.S(Oa(c, d, e))
    };
    e.prototype.bG = function(a, c, d) {
        var e = 0 > c ? "-" : "";
        0 > c && (c = -c);
        d = d - c.toString().length;
        for (var f = 0; f < d; f++) e += "0";
        a.kb(e + c.toString())
    };
    e.prototype.mq = function(a) {
        a.B(this.b.mq / 1E3)
    };
    e.prototype.oj = function(a) {
        a.B(this.b.oj)
    };
    l.H = new e;
    l.eF = function() {
        var b, c, g, e, f, h, l = this.b.Eb();
        b = 0;
        for (g = this.td.length; b < g; b++) {
            e = this.td[b];
            if (-1 === e.time) {
                if (!e.Is) continue
            } else if (e.time > this.b.vc.Da) continue;
            l.Kb = e.Ri;
            l.ud = e.ud;
            l.Jb = 0;
            for (c in e.cd) e.cd.hasOwnProperty(c) && (f = this.b.K[parseInt(c, 10)].ba(), h = e.cd[c], f.ua = h.Fo, Wa(f.d, h.Uf), f = h, B(f.Uf), a.push(f));
            e.Ri.aF();
            this.b.fq(e.Ba);
            e.tq = !0
        }
        c = b = 0;
        for (g = this.td.length; b < g; b++) e = this.td[b], this.td[c] = e, e.tq ? (sb(e.cd), B(e.Ba), d.push(e)) : c++;
        Va(this.td, c)
    }
})();
(function() {
    Mb = function(f, e) {
        var l = f[1],
            r = f[3],
            m = f[4],
            d = f[5],
            a = f[6],
            b = f[7],
            c = f[8];
        e.e || (e.e = {});
        e.k || (e.k = {});
        e.H || (e.H = {});
        var g = e.e,
            k = e.k,
            p = e.H;
        r && (g.wt = function(a, b) {
            return Qc(this.x, a, b)
        }, g.Py = function(a, b) {
            return Qc(this.y, a, b)
        }, g.DG = function() {
            var a = this.q;
            this.La();
            var b = this.lb;
            return !(b.right < a.Va || b.bottom < a.Wa || b.left > a.ab || b.top > a.$a)
        }, g.jz = function() {
            this.La();
            var a = this.lb,
                b = this.b.Ra;
            return 0 > a.right || 0 > a.bottom || a.left > b.width || a.top > b.height
        }, g.YG = function(a, b, c) {
            var d = this.ba(),
                g = d.Pc();
            if (!g.length) return !1;
            var e = g[0],
                f = e,
                k = pb(e.x, e.y, b, c),
                h, l, m;
            h = 1;
            for (l = g.length; h < l; h++)
                if (e = g[h], m = pb(e.x, e.y, b, c), 0 === a && m < k || 1 === a && m > k) k = m, f = e;
            d.oi(f);
            return !0
        }, k.zA = function(a) {
            this.x !== a && (this.x = a, this.gb())
        }, k.AH = function(a) {
            this.y !== a && (this.y = a, this.gb())
        }, k.rA = function(a, b) {
            if (this.x !== a || this.y !== b) this.x = a, this.y = b, this.gb()
        }, k.sA = function(a, b) {
            var c = a.bD(this);
            if (c) {
                var d;
                c.Lg ? (d = c.Lg(b, !0), c = c.Lg(b, !1)) : (d = c.x, c = c.y);
                if (this.x !== d || this.y !== c) this.x = d, this.y = c, this.gb()
            }
        }, k.wz = function(a) {
            0 !== a && (this.x += Math.cos(this.j) * a, this.y += Math.sin(this.j) * a, this.gb())
        }, k.MG = function(a, b) {
            0 !== b && (this.x += Math.cos(bb(a)) * b, this.y += Math.sin(bb(a)) * b, this.gb())
        }, p.Jp = function(a) {
            a.B(this.x)
        }, p.Kp = function(a) {
            a.B(this.y)
        }, p.Gg = function(a) {
            a.B(this.b.Vi(this))
        });
        m && (g.mG = function(a, b) {
            return Qc(this.width, a, b)
        }, g.kG = function(a, b) {
            return Qc(this.height, a, b)
        }, k.yA = function(a) {
            this.width !== a && (this.width = a, this.gb())
        }, k.uH = function(a) {
            this.height !== a && (this.height = a, this.gb())
        }, k.St = function(a, b) {
            if (this.width !== a || this.height !== b) this.width = a, this.height = b, this.gb()
        }, p.Wt = function(a) {
            a.B(this.width)
        }, p.zp = function(a) {
            a.B(this.height)
        }, p.fG = function(a) {
            this.La();
            a.B(this.lb.left)
        }, p.hG = function(a) {
            this.La();
            a.B(this.lb.top)
        }, p.gG = function(a) {
            this.La();
            a.B(this.lb.right)
        }, p.Dy = function(a) {
            this.La();
            a.B(this.lb.bottom)
        });
        d && (g.Ay = function(a, b) {
            return lb(this.j, bb(b)) <= bb(a)
        }, g.gz = function(a) {
            return nb(this.j, bb(a))
        }, g.fz = function(a, b) {
            var c = ib(a),
                d = ib(b),
                g = gb(this.j);
            return nb(d, c) ? nb(g, c) && !nb(g, d) : !(!nb(g, c) && nb(g, d))
        }, k.fA = function(a) {
            a = bb(db(a));
            isNaN(a) || this.j === a || (this.j = a, this.gb())
        }, k.jH = function(a) {
            0 === a || isNaN(a) || (this.j += bb(a), this.j = gb(this.j), this.gb())
        }, k.kH = function(a) {
            0 === a || isNaN(a) || (this.j -= bb(a), this.j = gb(this.j), this.gb())
        }, k.lH = function(a, b) {
            var c = mb(this.j, bb(b), bb(a));
            isNaN(c) || this.j === c || (this.j = c, this.gb())
        }, k.mH = function(a, b, c) {
            a = mb(this.j, Math.atan2(c - this.y, b - this.x), bb(a));
            isNaN(a) || this.j === a || (this.j = a, this.gb())
        }, k.xH = function(a, b) {
            var c = Math.atan2(b - this.y, a - this.x);
            isNaN(c) || this.j === c || (this.j = c, this.gb())
        }, p.zy = function(a) {
            a.B(hb(this.j))
        });
        l || (g.xp = function(a, b, c) {
            return Qc(this.ic[a], b, c)
        }, g.BG = function(a) {
            return this.ic[a]
        }, g.ZG = function(a, b) {
            var c = this.ba(),
                d = c.Pc();
            if (!d.length) return !1;
            var g = d[0],
                e = g,
                f = g.ic[b],
                k, h, l;
            k = 1;
            for (h = d.length; k < h; k++)
                if (g = d[k], l = g.ic[b], 0 === a && l < f || 1 === a && l > f) f = l, e = g;
            c.oi(e);
            return !0
        }, g.XG = function(a) {
            var b, c, d, g, e;
            if (this.b.Dk().sn) {
                e = this.ba();
                if (e.ua)
                    for (e.ua = !1, B(e.d), B(e.ma), d = this.d, b = 0, c = d.length; b < c; b++) g = d[b], g.uid === a ? e.ma.push(g) : e.d.push(g);
                else {
                    d = b = 0;
                    for (c = e.d.length; b < c; b++) g = e.d[b], e.d[d] = g, g.uid === a ? e.ma.push(g) : d++;
                    Va(e.d, d)
                }
                this.xd();
                return !!e.d.length
            }
            g = this.b.Xi(a);
            if (!g) return !1;
            e = this.ba();
            if (!e.ua && -1 === e.d.indexOf(g)) return !1;
            if (this.U)
                for (a = g.type.nb, b = 0, c = a.length; b < c; b++) {
                    if (a[b] === this) return e.oi(g), this.xd(), !0
                } else if (g.type === this) return e.oi(g), this.xd(), !0;
            return !1
        }, g.dk = function() {
            return !0
        }, g.Dt = function() {
            return !0
        }, k.Rt = function(a, b) {
            var c = this.ic;
            va(c[a]) ? c[a] = va(b) ? b : parseFloat(b) : xa(c[a]) && (c[a] = xa(b) ? b : b.toString())
        }, k.xy = function(a, b) {
            var c = this.ic;
            va(c[a]) ? c[a] = va(b) ? c[a] + b : c[a] + parseFloat(b) : xa(c[a]) && (c[a] = xa(b) ? c[a] + b : c[a] + b.toString())
        }, k.GH = function(a, b) {
            var c = this.ic;
            va(c[a]) && (c[a] = va(b) ? c[a] - b : c[a] - parseFloat(b))
        }, k.pH = function(a, b) {
            this.ic[a] = b ? 1 : 0
        }, k.JH = function(a) {
            this.ic[a] = 1 - this.ic[a]
        }, k.xt = function() {
            this.b.sg(this)
        }, k.vz || (k.vz = function(a) {
            var b, c;
            try {
                b = JSON.parse(a)
            } catch (d) {
                return
            }
            this.b.In(this, b, !0);
            this.Df && this.Df();
            if (this.qa)
                for (a = 0, b = this.qa.length; a < b; ++a) c = this.qa[a], c.Df && c.Df()
        }), p.Qy = function(a) {
            var b = a.mi.d.length,
                c, d, g;
            c = 0;
            for (d = this.b.Le.length; c < d; c++) g = this.b.Le[c], a.mi.U ? 0 <= g.type.nb.indexOf(a.mi) && b++ : g.type === a.mi && b++;
            a.S(b)
        }, p.aH = function(a) {
            a.S(a.mi.ba().Pc().length)
        }, p.IA = function(a) {
            a.S(this.uid)
        }, p.AG = function(a) {
            a.S(this.Gk())
        }, p.wp || (p.wp = function(a) {
            a.kb(JSON.stringify(this.b.Bs(this, !0)))
        }));
        a && (g.FG = function() {
            return this.visible
        }, k.Tt = function(a) {
            !a !== !this.visible && (this.visible = !!a, this.b.O = !0)
        }, g.My = function(a, b) {
            return Qc(Hb(100 * this.opacity), a, b)
        }, k.qA = function(a) {
            a = a / 100;
            0 > a ? a = 0 : 1 < a && (a = 1);
            a !== this.opacity && (this.opacity = a, this.b.O = !0)
        }, p.Opacity = function(a) {
            a.B(Hb(100 * this.opacity))
        });
        b && (g.CG = function(a) {
            return a ? this.q === a : !1
        }, g.$G = function(a) {
            var b = this.ba(),
                c = b.Pc();
            if (!c.length) return !1;
            var d = c[0],
                g = d,
                e, f;
            e = 1;
            for (f = c.length; e < f; e++)
                if (d = c[e], 0 === a) {
                    if (d.q.index > g.q.index || d.q.index === g.q.index && d.kf() > g.kf()) g = d
                } else if (d.q.index < g.q.index || d.q.index === g.q.index && d.kf() < g.kf()) g = d;
            b.oi(g);
            return !0
        }, k.Ct = function() {
            var a = this.q,
                b = a.d;
            b.length && b[b.length - 1] === this || (a.Cj(this, !1), a.jk(this, !1), this.b.O = !0)
        }, k.At = function() {
            var a = this.q,
                b = a.d;
            b.length && b[0] === this || (a.Cj(this, !1), a.FE(this), this.b.O = !0)
        }, k.Bt = function(a) {
            a && a != this.q && (this.q.Cj(this, !0), this.q = a, a.jk(this, !0), this.b.O = !0)
        }, k.MA = function(a, b) {
            var c = 0 === a;
            if (b) {
                var d = b.WC(this);
                d && d.uid !== this.uid && (this.q.index !== d.q.index && (this.q.Cj(this, !0), this.q = d.q, d.q.jk(this, !0)), this.q.jE(this, d, c), this.b.O = !0)
            }
        }, p.KG = function(a) {
            a.S(this.q.Dw)
        }, p.JG = function(a) {
            a.kb(this.q.name)
        }, p.MH = function(a) {
            a.S(this.kf())
        });
        c && (k.sH = function(a, b) {
            if (this.b.M) {
                var c = this.type.Lq(b);
                if (!(0 > c)) {
                    var d = 1 === a;
                    this.ug[c] !== d && (this.ug[c] = d, this.Xe(), this.b.O = !0)
                }
            }
        }, k.Hp = function(a, b, c) {
            if (this.b.M) {
                var d = this.type.Lq(a);
                0 > d || (a = this.type.ja[d], d = this.xb[d], b = Math.floor(b), 0 > b || b >= d.length || (1 === this.b.M.fD(a.Ub, b) && (c /= 100), d[b] !== c && (d[b] = c, a.Ya && (this.b.O = !0))))
            }
        })
    };
    qc = function() {
        this.aq = this.wm = !0;
        this.type.om = !0;
        this.b.O = !0;
        var f, e, l = this.Xp;
        f = 0;
        for (e = l.length; f < e; ++f) l[f](this);
        this.q.be && this.La()
    };
    rc = function(f) {
        f && this.Xp.push(f)
    };
    tc = function() {
        if (this.wm) {
            var f = this.lb,
                e = this.Lc;
            f.set(this.x, this.y, this.x + this.width, this.y + this.height);
            f.offset(-this.gc * this.width, -this.hc * this.height);
            this.j ? (f.offset(-this.x, -this.y), e.Mx(f, this.j), e.offset(this.x, this.y), e.mu(f)) : e.Ij(f);
            f.normalize();
            this.wm = !1;
            this.qy()
        }
    };
    var f = new Ma(0, 0, 0, 0);
    uc = function() {
        if (this.q.be) {
            var h = this.q.Hc,
                e = this.lb;
            f.set(h.ed(e.left), h.fd(e.top), h.ed(e.right), h.fd(e.bottom));
            this.ld.wk(f) || (this.ld.right < this.ld.left ? h.update(this, null, f) : h.update(this, this.ld, f), this.ld.Ki(f), this.q.Te = !0)
        }
    };
    vc = function() {
        if (this.aq && this.Jh) {
            this.La();
            var h = this.type.Em,
                e = this.lb;
            f.set(h.ed(e.left), h.fd(e.top), h.ed(e.right), h.fd(e.bottom));
            this.Dg.wk(f) || (this.Dg.right < this.Dg.left ? h.update(this, null, f) : h.update(this, this.Dg, f), this.Dg.Ki(f), this.aq = !1)
        }
    };
    sc = function(f, e) {
        return this.lb.Mc(f, e) && this.Lc.Mc(f, e) ? this.ae ? this.uI(f, e) : this.xa && !this.xa.Zh() ? (this.xa.Hh(this.width, this.height, this.j), this.xa.Mc(f - this.x, e - this.y)) : !0 : !1
    };
    mc = function() {
        this.type.jp();
        return this.Wh
    };
    Bc = function() {
        this.q.gt();
        return this.Ze
    };
    Cc = function() {
        B(this.Na);
        var f, e, l, r = !0;
        f = 0;
        for (e = this.ug.length; f < e; f++) this.ug[f] && (l = this.type.ja[f], this.Na.push(l), l.ue || (r = !1));
        this.ry = !!this.Na.length;
        this.hg = r
    };
    nc = function() {
        return "Inst" + this.kx
    };
    Pb = function(f) {
        if (f && f.Zc && f.type != this) {
            var e, l, r;
            e = 0;
            for (l = f.siblings.length; e < l; e++)
                if (r = f.siblings[e], r.type == this) return r
        }
        f = this.ba().Pc();
        return f.length ? f[0] : null
    };
    Qb = function(f) {
        var e = this.ba().Pc();
        return e.length ? e[f.Gk() % e.length] : null
    };
    Ob = function() {
        if (this.Lj && !this.U) {
            var f, e;
            f = 0;
            for (e = this.d.length; f < e; f++) this.d[f].Wh = f;
            var l = f,
                r = this.b.Le;
            f = 0;
            for (e = r.length; f < e; ++f) r[f].type === this && (r[f].Wh = l++);
            this.Lj = !1
        }
    };
    kc = function(f) {
        if (f < this.d.length) return this.d[f];
        f -= this.d.length;
        var e = this.b.Le,
            l, r;
        l = 0;
        for (r = e.length; l < r; ++l)
            if (e[l].type === this) {
                if (0 === f) return e[l];
                --f
            }
        return null
    };
    Rb = function() {
        return this.jg[this.gf]
    };
    Sb = function() {
        this.gf++;
        this.gf === this.jg.length ? this.jg.push(new Nb(this)) : (this.jg[this.gf].ua = !0, B(this.jg[this.gf].ma))
    };
    Ub = function() {
        this.gf++;
        this.gf === this.jg.length && this.jg.push(new Nb(this));
        var f = this.jg[this.gf],
            e = this.jg[this.gf - 1];
        e.ua ? (f.ua = !0, B(f.ma)) : (f.ua = !1, Wa(f.d, e.d), Wa(f.ma, e.ma))
    };
    Vb = function() {
        this.gf--
    };
    Wb = function(f) {
        var e, l, r, m, d, a = 0;
        if (!this.U)
            for (e = 0, l = this.nb.length; e < l; e++)
                for (d = this.nb[e], r = 0, m = d.ub.length; r < m; r++) {
                    if (f === d.ub[r].name) return this.ka.lastBehIndex = a, d.ub[r];
                    a++
                }
        e = 0;
        for (l = this.ub.length; e < l; e++) {
            if (f === this.ub[e].name) return this.ka.lastBehIndex = a, this.ub[e];
            a++
        }
        return null
    };
    hc = function(f) {
        return this.en(f) ? this.ka.lastBehIndex : -1
    };
    ic = function(f) {
        var e, l;
        e = 0;
        for (l = this.ja.length; e < l; e++)
            if (this.ja[e].name === f) return e;
        return -1
    };
    jc = function() {
        if (this.Zc && !this.U) {
            var f, e, l, r, m, d, a;
            this.jp();
            d = this.ba();
            var b = d.ua,
                c = (f = this.b.Eb()) && f.Kb && f.Kb.Wd;
            f = 0;
            for (e = this.yd.length; f < e; f++)
                if (m = this.yd[f], m !== this && (m.jp(), a = m.ba(), a.ua = b, !b)) {
                    B(a.d);
                    l = 0;
                    for (r = d.d.length; l < r; ++l) a.d[l] = m.Mq(d.d[l].Wh);
                    if (c)
                        for (B(a.ma), l = 0, r = d.ma.length; l < r; ++l) a.ma[l] = m.Mq(d.ma[l].Wh)
                }
        }
    };
    lc = function() {
        return "Type" + this.Ca
    };
    Qc = function(f, e, l) {
        if ("undefined" === typeof f || "undefined" === typeof l) return !1;
        switch (e) {
            case 0:
                return f === l;
            case 1:
                return f !== l;
            case 2:
                return f < l;
            case 3:
                return f <= l;
            case 4:
                return f > l;
            case 5:
                return f >= l;
            default:
                return !1
        }
    }
})();
var Yc = {
    inverse: {
        src: "varying mediump vec2 vTex;\nuniform lowp sampler2D samplerFront;\nuniform lowp float intensity;\nvoid main(void)\n{\nlowp vec4 front = texture2D(samplerFront, vTex);\nlowp vec3 inverse = vec3(front.a - front.rgb);\ngl_FragColor = vec4(mix(front.rgb, inverse, intensity), front.a);\n}",
        Um: 0,
        Vm: 0,
        oq: !1,
        ue: !0,
        Sp: !1,
        na: [
            ["intensity", 0, 1]
        ]
    }
};

function ad(f) {
    this.b = f
}
(function() {
    function f() {
        return a.length ? a.pop() : []
    }

    function h(b) {
        var c, d;
        c = 0;
        for (d = b.length; c < d; c++) Array.isArray(b[c]) && h(b[c]);
        B(b);
        a.push(b)
    }

    function e() {}

    function l() {}

    function r() {}
    var m = ad.prototype;
    m.Ha = function(a) {
        this.Ua = a;
        this.b = a.b
    };
    m.Ha.prototype.Y = function() {};
    m.wa = function(a) {
        this.type = a;
        this.b = a.b
    };
    var d = m.wa.prototype,
        a = [];
    Array.isArray || (Array.isArray = function(a) {
        return "[object Array]" === Object.prototype.toString.call(a)
    });
    d.Y = function() {
        this.Xc = this.D[0];
        this.zd = this.D[1];
        this.je = this.D[2];
        this.Jd || (this.Ge = f());
        var a = this.Ge;
        a.length = this.Xc;
        var c, d, e;
        for (c = 0; c < this.Xc; c++)
            for (a[c] || (a[c] = f()), a[c].length = this.zd, d = 0; d < this.zd; d++)
                for (a[c][d] || (a[c][d] = f()), a[c][d].length = this.je, e = 0; e < this.je; e++) a[c][d][e] = 0;
        this.Uu = [];
        this.Vu = [];
        this.Wu = [];
        this.Rf = -1
    };
    d.of = function() {
        var a;
        for (a = 0; a < this.Xc; a++) h(this.Ge[a]);
        B(this.Ge)
    };
    d.He = function(a, c, d) {
        a = Math.floor(a);
        c = Math.floor(c);
        d = Math.floor(d);
        return isNaN(a) || 0 > a || a > this.Xc - 1 || isNaN(c) || 0 > c || c > this.zd - 1 || isNaN(d) || 0 > d || d > this.je -
            1 ? 0 : this.Ge[a][c][d]
    };
    d.set = function(a, c, d, e) {
        a = Math.floor(a);
        c = Math.floor(c);
        d = Math.floor(d);
        isNaN(a) || 0 > a || a > this.Xc - 1 || isNaN(c) || 0 > c || c > this.zd - 1 || isNaN(d) || 0 > d || d > this.je - 1 || (this.Ge[a][c][d] = e)
    };
    d.UC = function() {
        return JSON.stringify({
            c2array: !0,
            size: [this.Xc, this.zd, this.je],
            data: this.Ge
        })
    };
    d.nc = function() {
        return {
            size: [this.Xc, this.zd, this.je],
            data: this.Ge
        }
    };
    d.Ec = function(a) {
        var c = a.size;
        this.Xc = c[0];
        this.zd = c[1];
        this.je = c[2];
        this.Ge = a.data
    };
    d.fg = function(a, c, d) {
        0 > a && (a = 0);
        0 > c && (c = 0);
        0 > d && (d = 0);
        if (this.Xc !== a || this.zd !== c || this.je !== d) {
            this.Xc = a;
            this.zd = c;
            this.je = d;
            var e, l, h = this.Ge;
            h.length = a;
            for (a = 0; a < this.Xc; a++)
                for (ta(h[a]) && (h[a] = f()), h[a].length = c, e = 0; e < this.zd; e++)
                    for (ta(h[a][e]) && (h[a][e] = f()), h[a][e].length = d, l = 0; l < this.je; l++) ta(h[a][e][l]) && (h[a][e][l] = 0)
        }
    };
    d.Tg = function() {
        return 0 <= this.Rf && this.Rf < this.Uu.length ? this.Uu[this.Rf] : 0
    };
    d.sh = function() {
        return 0 <= this.Rf && this.Rf < this.Vu.length ? this.Vu[this.Rf] : 0
    };
    d.Sy = function() {
        return 0 <= this.Rf && this.Rf < this.Wu.length ? this.Wu[this.Rf] : 0
    };
    e.prototype.wt = function(a, c, d) {
        return Qc(this.He(a, 0, 0), c, d)
    };
    d.Oe = function(a) {
        this.b.hh(a.Ba);
        a.kh();
        this.b.Se(a.Ba)
    };
    m.e = new e;
    l.prototype.St = function(a, c, d) {
        this.fg(a, c, d)
    };
    l.prototype.zA = function(a, c) {
        this.set(a, 0, 0, c)
    };
    l.prototype.Qt = function(a) {
        var c = 0,
            d = 0,
            e = this.Ge;
        if (0 !== this.Xc && 0 !== this.zd && 0 !== this.je) switch (a) {
            case 0:
                e.reverse();
                break;
            case 1:
                for (; c < this.Xc; c++) e[c].reverse();
                break;
            case 2:
                for (; c < this.Xc; c++)
                    for (d = 0; d < this.zd; d++) e[c][d].reverse()
        }
    };
    l.prototype.qz = function(a) {
        var c;
        try {
            c = JSON.parse(a)
        } catch (d) {
            return
        }
        c.c2array && (a = c.size, this.Xc = a[0], this.zd = a[1], this.je = a[2], this.Ge = c.data)
    };
    m.k = new l;
    r.prototype.By = function(a, c, d, e) {
        a.Ml(this.He(c, d || 0, e || 0))
    };
    r.prototype.Wt = function(a) {
        a.S(this.Xc)
    };
    r.prototype.zp = function(a) {
        a.S(this.zd)
    };
    r.prototype.wp = function(a) {
        a.kb(this.UC())
    };
    m.H = new r
})();

function bd(f) {
    this.b = f
}
(function() {
    function f(a) {
        0 > a && (a = 0);
        1 < a && (a = 1);
        return Math.log(a) / Math.log(10) * 20
    }

    function h(a) {
        a = a.toLowerCase();
        return ga.hasOwnProperty(a) && ga[a].length ? ga[a][0].Qd() : t.destination
    }

    function e() {
        return t.createGain ? t.createGain() : t.createGainNode()
    }

    function l(a) {
        return t.createDelay ? t.createDelay(a) : t.createDelayNode(a)
    }

    function r(a, b) {
        a.start ? a.start(b || 0) : a.noteOn(b || 0)
    }

    function m(a, b, c, d) {
        a.start ? a.start(d || 0, b) : a.noteGrainOn(d || 0, b, c - b)
    }

    function d(a) {
        try {
            a.stop ? a.stop(0) : a.noteOff(0)
        } catch (b) {}
    }

    function a(a, b, c, d, g, f) {
        this.type = "filter";
        this.Fb = [a, b, c, d, g, f];
        this.Fa = e();
        this.ga = e();
        this.ga.gain.value = f;
        this.ea = e();
        this.ea.gain.value = 1 - f;
        this.Mb = t.createBiquadFilter();
        this.Mb.type = "number" === typeof this.Mb.type ? a : ca[a];
        this.Mb.frequency.value = b;
        this.Mb.detune && (this.Mb.detune.value = c);
        this.Mb.Q.value = d;
        this.Mb.gain.value = g;
        this.Fa.connect(this.Mb);
        this.Fa.connect(this.ea);
        this.Mb.connect(this.ga)
    }

    function b(a, b, c) {
        this.type = "delay";
        this.Fb = [a, b, c];
        this.Fa = e();
        this.ga = e();
        this.ga.gain.value = c;
        this.ea = e();
        this.ea.gain.value = 1 - c;
        this.rl = e();
        this.me = l(a);
        this.me.delayTime.value = a;
        this.Om = e();
        this.Om.gain.value = b;
        this.Fa.connect(this.rl);
        this.Fa.connect(this.ea);
        this.rl.connect(this.ga);
        this.rl.connect(this.me);
        this.me.connect(this.Om);
        this.Om.connect(this.rl)
    }

    function c(a, b, c, d) {
        this.type = "convolve";
        this.Fb = [b, c, d];
        this.Fa = e();
        this.ga = e();
        this.ga.gain.value = c;
        this.ea = e();
        this.ea.gain.value = 1 - c;
        this.Kh = t.createConvolver();
        a && (this.Kh.normalize = b, this.Kh.buffer = a);
        this.Fa.connect(this.Kh);
        this.Fa.connect(this.ea);
        this.Kh.connect(this.ga)
    }

    function g(a, b, c, d, g) {
        this.type = "flanger";
        this.Fb = [a, b, c, d, g];
        this.Fa = e();
        this.ea = e();
        this.ea.gain.value = 1 - g / 2;
        this.ga = e();
        this.ga.gain.value = g / 2;
        this.Ym = e();
        this.Ym.gain.value = d;
        this.me = l(a + b);
        this.me.delayTime.value = a;
        this.yc = t.createOscillator();
        this.yc.frequency.value = c;
        this.Id = e();
        this.Id.gain.value = b;
        this.Fa.connect(this.me);
        this.Fa.connect(this.ea);
        this.me.connect(this.ga);
        this.me.connect(this.Ym);
        this.Ym.connect(this.me);
        this.yc.connect(this.Id);
        this.Id.connect(this.me.delayTime);
        r(this.yc)
    }

    function k(a, b, c, d, g, f) {
        this.type = "phaser";
        this.Fb = [a, b, c, d, g, f];
        this.Fa = e();
        this.ea = e();
        this.ea.gain.value = 1 - f / 2;
        this.ga = e();
        this.ga.gain.value = f / 2;
        this.Mb = t.createBiquadFilter();
        this.Mb.type = "number" === typeof this.Mb.type ? 7 : "allpass";
        this.Mb.frequency.value = a;
        this.Mb.detune && (this.Mb.detune.value = b);
        this.Mb.Q.value = c;
        this.yc = t.createOscillator();
        this.yc.frequency.value = g;
        this.Id = e();
        this.Id.gain.value = d;
        this.Fa.connect(this.Mb);
        this.Fa.connect(this.ea);
        this.Mb.connect(this.ga);
        this.yc.connect(this.Id);
        this.Id.connect(this.Mb.frequency);
        r(this.yc)
    }

    function p(a) {
        this.type = "gain";
        this.Fb = [a];
        this.Ka = e();
        this.Ka.gain.value = a
    }

    function q(a, b) {
        this.type = "tremolo";
        this.Fb = [a, b];
        this.Ka = e();
        this.Ka.gain.value = 1 - b / 2;
        this.yc = t.createOscillator();
        this.yc.frequency.value = a;
        this.Id = e();
        this.Id.gain.value = b / 2;
        this.yc.connect(this.Id);
        this.Id.connect(this.Ka.gain);
        r(this.yc)
    }

    function Q(a, b) {
        this.type = "ringmod";
        this.Fb = [a, b];
        this.Fa = e();
        this.ga = e();
        this.ga.gain.value = b;
        this.ea = e();
        this.ea.gain.value = 1 - b;
        this.Gl = e();
        this.Gl.gain.value = 0;
        this.yc = t.createOscillator();
        this.yc.frequency.value = a;
        this.yc.connect(this.Gl.gain);
        r(this.yc);
        this.Fa.connect(this.Gl);
        this.Fa.connect(this.ea);
        this.Gl.connect(this.ga)
    }

    function J(a, b, c, d, g) {
        this.type = "distortion";
        this.Fb = [a, b, c, d, g];
        this.Fa = e();
        this.so = e();
        this.qo = e();
        this.lF(c, Math.pow(10, d / 20));
        this.ga = e();
        this.ga.gain.value = g;
        this.ea = e();
        this.ea.gain.value = 1 - g;
        this.rp = t.createWaveShaper();
        this.Mm = new Float32Array(65536);
        this.SC(a, b);
        this.rp.Mm = this.Mm;
        this.Fa.connect(this.so);
        this.Fa.connect(this.ea);
        this.so.connect(this.rp);
        this.rp.connect(this.qo);
        this.qo.connect(this.ga)
    }

    function z(a, b, c, d, g) {
        this.type = "compressor";
        this.Fb = [a, b, c, d, g];
        this.Ka = t.createDynamicsCompressor();
        try {
            this.Ka.threshold.value = a, this.Ka.knee.value = b, this.Ka.ratio.value = c, this.Ka.attack.value = d, this.Ka.release.value = g
        } catch (e) {}
    }

    function n(a, b) {
        this.type = "analyser";
        this.Fb = [a, b];
        this.Ka = t.createAnalyser();
        this.Ka.fftSize = a;
        this.Ka.smoothingTimeConstant = b;
        this.QC = new Float32Array(this.Ka.frequencyBinCount);
        this.Px = new Uint8Array(a);
        this.Bl = 0
    }

    function D() {
        this.fa = null;
        this.Jn = 0
    }

    function E(a, b) {
        this.src = a;
        this.Aa = O;
        this.pe = b;
        this.nm = !1;
        var c = this;
        this.rj = this.xj = null;
        this.yj = [];
        this.Go = 0;
        this.nt = this.Wm = this.Xx = this.ho = !1;
        1 === O && b && !ea && (this.Aa = 0, this.xj = e());
        this.Gf = this.Ia = null;
        var d;
        switch (this.Aa) {
            case 0:
                this.Ia = new Audio;
                this.Ia.crossOrigin = "anonymous";
                this.Ia.addEventListener("canplaythrough", function() {
                    c.nt = !0
                });
                1 === O && t.createMediaElementSource && !/wiiu/i.test(navigator.userAgent) && (this.Xx = !0, this.Ia.addEventListener("canplay", function() {
                    !c.rj && c.Ia && (c.rj = t.createMediaElementSource(c.Ia), c.rj.connect(c.xj))
                }));
                this.Ia.autoplay = !1;
                this.Ia.kI = "auto";
                this.Ia.src = a;
                break;
            case 1:
                F.zn ? F.Qu(a, function(a) {
                    c.Gf = a;
                    c.Du()
                }, function() {
                    c.Wm = !0
                }) : (d = new XMLHttpRequest, d.open("GET", a, !0), d.responseType = "arraybuffer", d.onload = function() {
                    c.Gf = d.response;
                    c.Du()
                }, d.onerror = function() {
                    c.Wm = !0
                }, d.send());
                break;
            case 2:
                this.Ia = !0;
                break;
            case 3:
                this.Ia = !0
        }
    }

    function w(a, b) {
        var c = this;
        this.tag = b;
        this.Cb = this.jf = !0;
        this.src = a.src;
        this.buffer = a;
        this.Aa = O;
        this.pe = a.pe;
        this.playbackRate = 1;
        this.aj = !0;
        this.Dd = this.Zd = !1;
        this.md = 0;
        this.Uk = this.ej = this.nf = !1;
        this.volume = 1;
        this.cs = function(a) {
            if (!c.Dd && !c.Zd) {
                var b = this;
                b || (b = a.target);
                b === c.mm && (c.aj = !0, c.Cb = !0, W = c.tag, F.trigger(bd.prototype.e.im, P))
            }
        };
        this.mm = null;
        this.cj = 1 === M && !this.pe || 2 === M;
        this.tj = 1;
        this.startTime = this.cj ? F.vc.Da : F.pg.Da;
        this.Rb = this.ec = null;
        this.pf = !1;
        this.Fc = null;
        this.Xw = this.Ww = this.Vw = this.Uw = this.Zw = this.Yw = 0;
        this.n = null;
        var d = !1;
        1 !== this.Aa || 0 !== this.buffer.Aa || this.buffer.Xx || (this.Aa = 0);
        switch (this.Aa) {
            case 0:
                this.pe ? (this.n = a.Ia, d = !a.nm, a.nm = !0) : (this.n = new Audio, this.n.crossOrigin = "anonymous", this.n.autoplay = !1, this.n.src = a.Ia.src, d = !0);
                d && this.n.addEventListener("ended", function() {
                    W = c.tag;
                    c.Cb = !0;
                    F.trigger(bd.prototype.e.im, P)
                });
                break;
            case 1:
                this.ec = e();
                this.ec.connect(h(b));
                1 === this.buffer.Aa ? a.Ia && (this.n = t.createBufferSource(), this.n.buffer = a.Ia, this.n.connect(this.ec)) : (this.n = this.buffer.Ia, this.buffer.xj.connect(this.ec), this.buffer.nm || (this.buffer.nm = !0, this.buffer.Ia.addEventListener("ended", function() {
                    W = c.tag;
                    c.Cb = !0;
                    F.trigger(bd.prototype.e.im, P)
                })));
                break;
            case 2:
                this.n = new window.Media(U + this.src, null, null, function(a) {
                    a === window.Media.MEDIA_STOPPED && (c.aj = !0, c.Cb = !0, W = c.tag, F.trigger(bd.prototype.e.im, P))
                });
                break;
            case 3:
                this.n = !0
        }
    }

    function v(a, b) {
        var c = a.Rg() ? 1 : 0,
            d = b.Rg() ? 1 : 0;
        return c === d ? 0 : c < d ? 1 : -1
    }

    function y(a, b) {
        B(ya);
        if (a.length) {
            var c, d, g;
            c = 0;
            for (d = C.length; c < d; c++) g = C[c], Jb(a, g.tag) && ya.push(g);
            b && ya.sort(v)
        } else X && !X.Vh() && (B(ya), ya[0] = X)
    }

    function x(a, b) {
        ga.hasOwnProperty(a) ? ga[a].push(b) : ga[a] = [b];
        var c, d, g, e, f = t.destination;
        if (ga.hasOwnProperty(a) && (g = ga[a], g.length))
            for (f = g[0].Qd(), c = 0, d = g.length; c < d; c++) e = g[c], c + 1 === d ? e.ge(t.destination) : e.ge(g[c + 1].Qd());
        y(a);
        c = 0;
        for (d = ya.length; c < d; c++) ya[c].OE(f);
        ka && Gb === a && (ka.disconnect(), ka.connect(f))
    }

    function u() {}

    function G() {}

    function L() {}
    var Y = bd.prototype;
    Y.Ha = function(a) {
        this.Ua = a;
        this.b = a.b
    };
    Y.Ha.prototype.Y = function() {};
    var F = null,
        P = null,
        W = "",
        U = "",
        O = 0,
        t = null,
        R = [],
        C = [],
        X = null,
        K = !1,
        M = 0,
        S = !1,
        Z = 1,
        oa = 0,
        T = 0,
        Qa = !1,
        Ga = 1,
        ra = 1,
        aa = 10,
        A = 1E4,
        qa = 1,
        ka = null,
        Gb = "",
        N = !1,
        ua = [],
        ea = !1,
        ga = {},
        ca = "lowpass highpass bandpass lowshelf highshelf peaking notch allpass".split(" ");
    a.prototype.ge = function(a) {
        this.ga.disconnect();
        this.ga.connect(a);
        this.ea.disconnect();
        this.ea.connect(a)
    };
    a.prototype.remove = function() {
        this.Fa.disconnect();
        this.Mb.disconnect();
        this.ga.disconnect();
        this.ea.disconnect()
    };
    a.prototype.Qd = function() {
        return this.Fa
    };
    b.prototype.ge = function(a) {
        this.ga.disconnect();
        this.ga.connect(a);
        this.ea.disconnect();
        this.ea.connect(a)
    };
    b.prototype.remove = function() {
        this.Fa.disconnect();
        this.rl.disconnect();
        this.me.disconnect();
        this.Om.disconnect();
        this.ga.disconnect();
        this.ea.disconnect()
    };
    b.prototype.Qd = function() {
        return this.Fa
    };
    c.prototype.ge = function(a) {
        this.ga.disconnect();
        this.ga.connect(a);
        this.ea.disconnect();
        this.ea.connect(a)
    };
    c.prototype.remove = function() {
        this.Fa.disconnect();
        this.Kh.disconnect();
        this.ga.disconnect();
        this.ea.disconnect()
    };
    c.prototype.Qd = function() {
        return this.Fa
    };
    g.prototype.ge = function(a) {
        this.ea.disconnect();
        this.ea.connect(a);
        this.ga.disconnect();
        this.ga.connect(a)
    };
    g.prototype.remove = function() {
        this.Fa.disconnect();
        this.me.disconnect();
        this.yc.disconnect();
        this.Id.disconnect();
        this.ea.disconnect();
        this.ga.disconnect();
        this.Ym.disconnect()
    };
    g.prototype.Qd = function() {
        return this.Fa
    };
    k.prototype.ge = function(a) {
        this.ea.disconnect();
        this.ea.connect(a);
        this.ga.disconnect();
        this.ga.connect(a)
    };
    k.prototype.remove = function() {
        this.Fa.disconnect();
        this.Mb.disconnect();
        this.yc.disconnect();
        this.Id.disconnect();
        this.ea.disconnect();
        this.ga.disconnect()
    };
    k.prototype.Qd = function() {
        return this.Fa
    };
    p.prototype.ge = function(a) {
        this.Ka.disconnect();
        this.Ka.connect(a)
    };
    p.prototype.remove = function() {
        this.Ka.disconnect()
    };
    p.prototype.Qd = function() {
        return this.Ka
    };
    q.prototype.ge = function(a) {
        this.Ka.disconnect();
        this.Ka.connect(a)
    };
    q.prototype.remove = function() {
        this.yc.disconnect();
        this.Id.disconnect();
        this.Ka.disconnect()
    };
    q.prototype.Qd = function() {
        return this.Ka
    };
    Q.prototype.ge = function(a) {
        this.ga.disconnect();
        this.ga.connect(a);
        this.ea.disconnect();
        this.ea.connect(a)
    };
    Q.prototype.remove = function() {
        this.yc.disconnect();
        this.Gl.disconnect();
        this.Fa.disconnect();
        this.ga.disconnect();
        this.ea.disconnect()
    };
    Q.prototype.Qd = function() {
        return this.Fa
    };
    J.prototype.lF = function(a, b) {
        .01 > a && (a = .01);
        this.so.gain.value = a;
        this.qo.gain.value = Math.pow(1 / a, .6) * b
    };
    J.prototype.shape = function(a, b, c) {
        var d = 1.05 * c * b - b;
        c = 0 > a ? -1 : 1;
        a = 0 > a ? -a : a;
        b = a < b ? a : b + d * (1 - Math.exp(-(1 / d) * (a - b)));
        return b * c
    };
    J.prototype.SC = function(a, b) {
        for (var c = Math.pow(10, a / 20), d = Math.pow(10, b / 20), g = 0, e = 0; 32768 > e; ++e) g = e / 32768, g = this.shape(g, c, d), this.Mm[32768 + e] = g, this.Mm[32768 - e - 1] = -g
    };
    J.prototype.ge = function(a) {
        this.ga.disconnect();
        this.ga.connect(a);
        this.ea.disconnect();
        this.ea.connect(a)
    };
    J.prototype.remove = function() {
        this.Fa.disconnect();
        this.so.disconnect();
        this.rp.disconnect();
        this.qo.disconnect();
        this.ga.disconnect();
        this.ea.disconnect()
    };
    J.prototype.Qd = function() {
        return this.Fa
    };
    z.prototype.ge = function(a) {
        this.Ka.disconnect();
        this.Ka.connect(a)
    };
    z.prototype.remove = function() {
        this.Ka.disconnect()
    };
    z.prototype.Qd = function() {
        return this.Ka
    };
    n.prototype.Hb = function() {
        this.Ka.getFloatFrequencyData(this.QC);
        this.Ka.getByteTimeDomainData(this.Px);
        for (var a = this.Ka.fftSize, b = 0, c = this.Bl = 0, d = 0; b < a; b++) d = (this.Px[b] - 128) / 128, 0 > d && (d = -d), this.Bl < d && (this.Bl = d), c += d * d;
        this.Bl = f(this.Bl);
        f(Math.sqrt(c / a))
    };
    n.prototype.ge = function(a) {
        this.Ka.disconnect();
        this.Ka.connect(a)
    };
    n.prototype.remove = function() {
        this.Ka.disconnect()
    };
    n.prototype.Qd = function() {
        return this.Ka
    };
    D.prototype.Kl = function(a) {
        this.fa = a
    };
    D.prototype.pn = function() {
        return !!this.fa
    };
    D.prototype.Hb = function() {};
    var fa = !1;
    E.prototype.RE = function() {
        var a, b, c, d;
        c = a = 0;
        for (b = C.length; a < b; ++a) d = C[a], C[c] = d, d.buffer === this ? d.stop() : ++c;
        C.length = c;
        this.rj && (this.rj.disconnect(), this.rj = null);
        this.xj && (this.xj.disconnect(), this.xj = null);
        this.Gf = this.Ia = null
    };
    E.prototype.Du = function() {
        if (!this.Ia && this.Gf) {
            var a = this;
            if (t.decodeAudioData) t.decodeAudioData(this.Gf, function(b) {
                a.Ia = b;
                a.Gf = null;
                var c, d, g;
                if (ta(a.lo) || S) ta(a.Hm) || (c = a.Hm.Kh, c.normalize = a.Cw, c.buffer = b);
                else if (a.yj.length) {
                    c = 0;
                    for (d = a.yj.length; c < d; c++) {
                        b = a.yj[c];
                        g = new w(a, b.cy);
                        g.Gs(!0);
                        if ("undefined" !== typeof b.Ew && (b.fa = F.Xi(b.Ew), !b.fa)) continue;
                        if (b.fa) {
                            var e = ob(b.fa.x, b.fa.y, -b.fa.q.fc(), oa, T, !0),
                                f = ob(b.fa.x, b.fa.y, -b.fa.q.fc(), oa, T, !1);
                            g.Fs(e, f, cb(b.fa.j - b.fa.q.fc()), b.Yq, b.Vr, b.Zr);
                            g.Kl(b.fa)
                        } else g.Fs(b.x, b.y, b.A, b.Yq, b.Vr, b.Zr);
                        g.play(a.Mr, a.kt, a.Go);
                        a.ho && g.pause();
                        C.push(g)
                    }
                    B(a.yj)
                } else g = new w(a, a.lo || ""), g.play(a.Mr, a.kt, a.Go), a.ho && g.pause(), C.push(g)
            }, function() {
                a.Wm = !0
            });
            else if (this.Ia = t.createBuffer(this.Gf, !1), this.Gf = null, ta(this.lo) || S) ta(this.Hm) || (b = this.Hm.Kh, b.normalize = this.Cw, b.buffer = this.Ia);
            else {
                var b = new w(this, this.lo);
                b.play(this.Mr, this.kt, this.Go);
                this.ho && b.pause();
                C.push(b)
            }
        }
    };
    E.prototype.Bv = function() {
        switch (this.Aa) {
            case 0:
                var a = 4 <= this.Ia.readyState;
                a && (this.nt = !0);
                return a || this.nt;
            case 1:
                return !!this.Gf || !!this.Ia;
            case 2:
                return !0;
            case 3:
                return !0
        }
        return !1
    };
    E.prototype.MD = function() {
        switch (this.Aa) {
            case 0:
                return this.Bv();
            case 1:
                return !!this.Ia;
            case 2:
                return !0;
            case 3:
                return !0
        }
        return !1
    };
    E.prototype.AD = function() {
        switch (this.Aa) {
            case 0:
                return !!this.Ia.error;
            case 1:
                return this.Wm
        }
        return !1
    };
    w.prototype.Vh = function() {
        switch (this.Aa) {
            case 0:
                return this.n.ended;
            case 1:
                return 1 === this.buffer.Aa ? !this.jf && !this.Cb && this.n.loop || this.Dd ? !1 : this.aj : this.n.ended;
            case 2:
                return this.aj;
            case 3:
                !0
        }
        return !0
    };
    w.prototype.jB = function() {
        return this.jf || this.Cb ? !0 : this.Vh()
    };
    w.prototype.Gs = function(a) {
        1 === O && (!this.pf && a ? this.ec && (this.Rb || (this.Rb = t.createPanner(), this.Rb.panningModel = "number" === typeof this.Rb.panningModel ? Ga : ["equalpower", "HRTF", "soundfield"][Ga], this.Rb.distanceModel = "number" === typeof this.Rb.distanceModel ? ra : ["linear", "inverse", "exponential"][ra], this.Rb.refDistance = aa, this.Rb.maxDistance = A, this.Rb.rolloffFactor = qa), this.ec.disconnect(), this.ec.connect(this.Rb), this.Rb.connect(h(this.tag)), this.pf = !0) : this.pf && !a && this.ec && (this.Rb.disconnect(), this.ec.disconnect(), this.ec.connect(h(this.tag)), this.pf = !1))
    };
    w.prototype.Fs = function(a, b, c, d, g, e) {
        this.pf && 1 === O && (this.Rb.setPosition(a, b, 0), this.Rb.setOrientation(Math.cos(bb(c)), Math.sin(bb(c)), 0), this.Rb.coneInnerAngle = d, this.Rb.coneOuterAngle = g, this.Rb.coneOuterGain = e, this.Yw = a, this.Zw = b, this.Uw = c, this.Vw = d, this.Ww = g, this.Xw = e)
    };
    w.prototype.Kl = function(a) {
        this.pf && 1 === O && (this.Fc || (this.Fc = new D), this.Fc.Kl(a))
    };
    w.prototype.Hb = function(a) {
        if (this.pf && 1 === O && this.Fc && this.Fc.pn() && this.Rg()) {
            this.Fc.Hb(a);
            a = this.Fc.fa;
            var b = ob(a.x, a.y, -a.q.fc(), oa, T, !0),
                c = ob(a.x, a.y, -a.q.fc(), oa, T, !1);
            this.Rb.setPosition(b, c, 0);
            b = 0;
            "undefined" !== typeof this.Fc.fa.j && (b = a.j - a.q.fc(), this.Rb.setOrientation(Math.cos(b), Math.sin(b), 0))
        }
    };
    w.prototype.play = function(a, b, c, d) {
        var g = this.n;
        this.nf = a;
        this.volume = b;
        c = c || 0;
        d = d || 0;
        switch (this.Aa) {
            case 0:
                1 !== g.playbackRate && (g.playbackRate = 1);
                g.volume !== b * Z && (g.volume = b * Z);
                g.loop !== a && (g.loop = a);
                g.muted && (g.muted = !1);
                if (g.currentTime !== c) try {
                    g.currentTime = c
                } catch (e) {}
                if (this.pe && N && !F.lf) ua.push(this);
                else try {
                    this.n.play()
                } catch (f) {
                    console && console.log && console.log("[C2] WARNING: exception trying to play audio '" + this.buffer.src + "': ", f)
                }
                break;
            case 1:
                this.muted = !1;
                this.tj = 1;
                if (1 === this.buffer.Aa) this.ec.gain.value = b * Z, this.jf || (this.n = t.createBufferSource(), this.n.buffer = this.buffer.Ia, this.n.connect(this.ec)), this.n.onended = this.cs, this.mm = this.n, this.n.loop = a, this.aj = !1, 0 === c ? r(this.n, d) : m(this.n, c, this.Kg(), d);
                else {
                    1 !== g.playbackRate && (g.playbackRate = 1);
                    g.loop !== a && (g.loop = a);
                    g.volume = b * Z;
                    if (g.currentTime !== c) try {
                        g.currentTime = c
                    } catch (k) {}
                    this.pe && N && !F.lf ? ua.push(this) : g.play()
                }
                break;
            case 2:
                (!this.jf && this.Cb || 0 !== c) && g.seekTo(c);
                g.play();
                this.aj = !1;
                break;
            case 3:
                F.Sc ? AppMobi.context.playSound(this.src, a) : AppMobi.player.playSound(this.src, a)
        }
        this.playbackRate = 1;
        this.startTime = (this.cj ? F.vc.Da : F.pg.Da) - c;
        this.Dd = this.Cb = this.jf = !1
    };
    w.prototype.stop = function() {
        switch (this.Aa) {
            case 0:
                this.n.paused || this.n.pause();
                break;
            case 1:
                1 === this.buffer.Aa ? d(this.n) : this.n.paused || this.n.pause();
                break;
            case 2:
                this.n.stop();
                break;
            case 3:
                F.Sc && AppMobi.context.stopSound(this.src)
        }
        this.Cb = !0;
        this.Dd = !1
    };
    w.prototype.pause = function() {
        if (!(this.jf || this.Cb || this.Vh() || this.Dd)) {
            switch (this.Aa) {
                case 0:
                    this.n.paused || this.n.pause();
                    break;
                case 1:
                    1 === this.buffer.Aa ? (this.md = this.Nq(!0), this.nf && (this.md = this.md % this.Kg()), this.Dd = !0, d(this.n)) : this.n.paused || this.n.pause();
                    break;
                case 2:
                    this.n.pause();
                    break;
                case 3:
                    F.Sc && AppMobi.context.stopSound(this.src)
            }
            this.Dd = !0
        }
    };
    w.prototype.$E = function() {
        if (!(this.jf || this.Cb || this.Vh()) && this.Dd) {
            switch (this.Aa) {
                case 0:
                    this.n.play();
                    break;
                case 1:
                    1 === this.buffer.Aa ? (this.n = t.createBufferSource(), this.n.buffer = this.buffer.Ia, this.n.connect(this.ec), this.n.onended = this.cs, this.mm = this.n, this.n.loop = this.nf, this.ec.gain.value = Z * this.volume * this.tj, this.kp(), this.startTime = (this.cj ? F.vc.Da : F.pg.Da) - this.md / (this.playbackRate || .001), m(this.n, this.md, this.Kg())) : this.n.play();
                    break;
                case 2:
                    this.n.play();
                    break;
                case 3:
                    F.Sc && AppMobi.context.resumeSound(this.src)
            }
            this.Dd = !1
        }
    };
    w.prototype.seek = function(a) {
        if (!(this.jf || this.Cb || this.Vh())) switch (this.Aa) {
            case 0:
                try {
                    this.n.currentTime = a
                } catch (b) {}
                break;
            case 1:
                if (1 === this.buffer.Aa) this.Dd ? this.md = a : (this.pause(), this.md = a, this.$E());
                else try {
                    this.n.currentTime = a
                } catch (c) {}
                break;
            case 3:
                F.Sc && AppMobi.context.seekSound(this.src, a)
        }
    };
    w.prototype.OE = function(a) {
        1 === this.Aa && (this.pf ? (this.Rb.disconnect(), this.Rb.connect(a)) : (this.ec.disconnect(), this.ec.connect(a)))
    };
    w.prototype.Kg = function() {
        var a = 0;
        switch (this.Aa) {
            case 0:
                "undefined" !== typeof this.n.duration && (a = this.n.duration);
                break;
            case 1:
                a = this.buffer.Ia.duration;
                break;
            case 2:
                a = this.n.getDuration();
                break;
            case 3:
                F.Sc && (a = AppMobi.context.getDurationSound(this.src))
        }
        return a
    };
    w.prototype.Nq = function(a) {
        var b = this.Kg(),
            c = 0;
        switch (this.Aa) {
            case 0:
                "undefined" !== typeof this.n.currentTime && (c = this.n.currentTime);
                break;
            case 1:
                if (1 === this.buffer.Aa) {
                    if (this.Dd) return this.md;
                    c = (this.cj ? F.vc.Da : F.pg.Da) - this.startTime
                } else "undefined" !== typeof this.n.currentTime && (c = this.n.currentTime);
                break;
            case 3:
                F.Sc && (c = AppMobi.context.getPlaybackTimeSound(this.src))
        }
        a && (c *= this.playbackRate);
        !this.nf && c > b && (c = b);
        return c
    };
    w.prototype.Rg = function() {
        return !this.Dd && !this.jf && !this.Cb && !this.Vh()
    };
    w.prototype.uF = function() {
        return !this.jf && !this.Cb && !this.Vh()
    };
    w.prototype.SF = function() {
        var a = this.volume * Z;
        isFinite(a) || (a = 0);
        switch (this.Aa) {
            case 0:
                "undefined" !== typeof this.n.volume && this.n.volume !== a && (this.n.volume = a);
                break;
            case 1:
                1 === this.buffer.Aa ? this.ec.gain.value = a * this.tj : "undefined" !== typeof this.n.volume && this.n.volume !== a && (this.n.volume = a)
        }
    };
    w.prototype.Rm = function(a) {
        switch (this.Aa) {
            case 0:
                this.n.muted !== !!a && (this.n.muted = !!a);
                break;
            case 1:
                1 === this.buffer.Aa ? (this.tj = a ? 0 : 1, this.ec.gain.value = Z * this.volume * this.tj) : this.n.muted !== !!a && (this.n.muted = !!a)
        }
    };
    w.prototype.oF = function() {
        this.ej = !0;
        this.Rm(this.ej || this.Uk)
    };
    w.prototype.Jx = function(a) {
        this.Uk = !!a;
        this.Rm(this.ej || this.Uk)
    };
    w.prototype.kp = function() {
        var a = this.playbackRate;
        this.cj && (a *= F.oh);
        switch (this.Aa) {
            case 0:
                this.n.playbackRate !== a && (this.n.playbackRate = a);
                break;
            case 1:
                1 === this.buffer.Aa ? this.n.playbackRate.value !== a && (this.n.playbackRate.value = a) : this.n.playbackRate !== a && (this.n.playbackRate = a)
        }
    };
    w.prototype.rF = function(a) {
        switch (this.Aa) {
            case 0:
                a ? this.Rg() ? (this.Zd = !0, this.n.pause()) : this.Zd = !1 : this.Zd && (this.n.play(), this.Zd = !1);
                break;
            case 1:
                a ? this.Rg() ? (this.Zd = !0, 1 === this.buffer.Aa ? (this.md = this.Nq(!0), this.nf && (this.md = this.md % this.Kg()), d(this.n)) : this.n.pause()) : this.Zd = !1 : this.Zd && (1 === this.buffer.Aa ? (this.n = t.createBufferSource(), this.n.buffer = this.buffer.Ia, this.n.connect(this.ec), this.n.onended = this.cs, this.mm = this.n, this.n.loop = this.nf, this.ec.gain.value = Z * this.volume * this.tj, this.kp(), this.startTime = (this.cj ? F.vc.Da : F.pg.Da) - this.md / (this.playbackRate || .001), m(this.n, this.md, this.Kg())) : this.n.play(), this.Zd = !1);
                break;
            case 2:
                a ? this.Rg() ? (this.n.pause(), this.Zd = !0) : this.Zd = !1 : this.Zd && (this.Zd = !1, this.n.play())
        }
    };
    Y.wa = function(a) {
        function b() {
            "suspended" === t.state && t.resume && t.resume();
            if (!Qa && t.createBuffer) {
                var a = t.createBuffer(1, 220, 22050),
                    c = t.createBufferSource();
                c.buffer = a;
                c.connect(t.destination);
                r(c)
            }
        }
        this.type = a;
        F = this.b = a.b;
        P = this;
        this.Fd = null;
        this.gl = -600;
        this.b.zn && (ea = !0);
        !(this.b.hj || this.b.tn && (this.b.jr || this.b.un)) || this.b.wn || this.b.Ob || this.b.zv || ea || (N = !0);
        t = null;
        "undefined" !== typeof AudioContext ? (O = 1, t = new AudioContext) : "undefined" !== typeof webkitAudioContext && (O = 1, t = new webkitAudioContext);
        this.b.hj && t && (t.close && t.close(), "undefined" !== typeof AudioContext ? t = new AudioContext : "undefined" !== typeof webkitAudioContext && (t = new webkitAudioContext));
        N ? document.addEventListener("touchend", function() {
            !fa && t && (b(), fa = !0);
            var a, c, d;
            if (N) {
                if (!S)
                    for (a = 0, c = ua.length; a < c; ++a) d = ua[a], d.Cb || d.Dd || d.n.play();
                B(ua)
            }
        }, !0) : ea && document.addEventListener("touchend", function() {
            !fa && t && (b(), fa = !0)
        }, !0);
        1 !== O && (this.b.Cd && "undefined" !== typeof window.Media ? O = 2 : this.b.Av && (O = 3));
        2 === O && (U = location.href, a = U.lastIndexOf("/"), -1 < a && (U = U.substr(0, a + 1)), U = U.replace("file://", ""));
        if (this.b.ND && this.b.OD && "undefined" === typeof Audio) this.b.sg(this);
        // alert("It looks like you're using Safari for Windows without Quicktime.  Audio cannot be played until Quicktime is installed."), 
        else {
            if (this.b.Sc) K = this.b.tn;
            else try {
                K = !!(new Audio).canPlayType('audio/ogg; codecs="vorbis"')
            } catch (c) {
                K = !1
            }
            this.b.Zl(this)
        }
    };
    var wa = Y.wa.prototype;
    wa.Y = function() {
        this.b.Ei = this;
        M = this.D[0];
        this.dg = this.D[1];
        this.yE = 0 !== this.D[2];
        this.Aw = 0;
        Ga = this.D[3];
        ra = this.D[4];
        this.gl = -this.D[5];
        aa = this.D[6];
        A = this.D[7];
        qa = this.D[8];
        this.Fd = new D;
        var a = this.b.X || this.b.width,
            b = this.b.W || this.b.height;
        1 === O && (t.listener.setPosition(a / 2, b / 2, this.gl), t.listener.setOrientation(0, 0, 1, 0, -1, 0), window.c2OnAudioMicStream = function(a, b) {
            ka && ka.disconnect();
            Gb = b.toLowerCase();
            ka = t.createMediaStreamSource(a);
            ka.connect(h(Gb))
        });
        this.b.fu(function(a) {
            P.tE(a)
        });
        var c = this;
        this.b.Pp(function(a) {
            c.as(a)
        })
    };
    wa.as = function(a) {
        var b, c, d;
        b = 0;
        for (c = C.length; b < c; b++) d = C[b], d.Fc && d.Fc.fa === a && (d.Fc.fa = null, d.pf && d.Rg() && d.nf && d.stop());
        this.Fd.fa === a && (this.Fd.fa = null)
    };
    wa.nc = function() {
        var a = {
                silent: S,
                masterVolume: Z,
                listenerZ: this.gl,
                listenerUid: this.Fd.pn() ? this.Fd.fa.uid : -1,
                playing: [],
                effects: {}
            },
            b = a.playing,
            c, d, g, e, f, k;
        c = 0;
        for (d = C.length; c < d; c++) g = C[c], !g.uF() || 3 === this.dg || g.pe && 1 === this.dg || !g.pe && 2 === this.dg || (e = g.Nq(), g.nf && (e = e % g.Kg()), e = {
            tag: g.tag,
            buffersrc: g.buffer.src,
            is_music: g.pe,
            playbackTime: e,
            volume: g.volume,
            looping: g.nf,
            muted: g.ej,
            playbackRate: g.playbackRate,
            paused: g.Dd,
            resume_position: g.md
        }, g.pf && (e.pan = {}, k = e.pan, g.Fc && g.Fc.pn() ? k.objUid = g.Fc.fa.uid : (k.x = g.Yw, k.y = g.Zw, k.a = g.Uw), k.ia = g.Vw, k.oa = g.Ww, k.og = g.Xw), b.push(e));
        b = a.effects;
        for (f in ga)
            if (ga.hasOwnProperty(f)) {
                g = [];
                c = 0;
                for (d = ga[f].length; c < d; c++) g.push({
                    type: ga[f][c].type,
                    params: ga[f][c].Fb
                });
                b[f] = g
            }
        return a
    };
    var da = [];
    wa.Ec = function(d) {
        var e = d.silent;
        Z = d.masterVolume;
        this.gl = d.listenerZ;
        this.Fd.Kl(null);
        var f = d.listenerUid; - 1 !== f && (this.Fd.Jn = f, da.push(this.Fd));
        var f = d.playing,
            l, h, m, r, v, P, y, L, t, u, w;
        if (3 !== this.dg)
            for (l = 0, h = C.length; l < h; l++) t = C[l], t.pe && 1 === this.dg || (t.pe || 2 !== this.dg) && t.stop();
        for (v in ga)
            if (ga.hasOwnProperty(v))
                for (l = 0, h = ga[v].length; l < h; l++) ga[v][l].remove();
        sb(ga);
        for (v in d.effects)
            if (d.effects.hasOwnProperty(v))
                for (P = d.effects[v], l = 0, h = P.length; l < h; l++) switch (m = P[l].type, u = P[l].params, m) {
                    case "filter":
                        x(v, new a(u[0], u[1], u[2], u[3], u[4], u[5]));
                        break;
                    case "delay":
                        x(v, new b(u[0], u[1], u[2]));
                        break;
                    case "convolve":
                        m = u[2];
                        t = this.dn(m, !1);
                        t.Ia ? m = new c(t.Ia, u[0], u[1], m) : (m = new c(null, u[0], u[1], m), t.Cw = u[0], t.Hm = m);
                        x(v, m);
                        break;
                    case "flanger":
                        x(v, new g(u[0], u[1], u[2], u[3], u[4]));
                        break;
                    case "phaser":
                        x(v, new k(u[0], u[1], u[2], u[3], u[4], u[5]));
                        break;
                    case "gain":
                        x(v, new p(u[0]));
                        break;
                    case "tremolo":
                        x(v, new q(u[0], u[1]));
                        break;
                    case "ringmod":
                        x(v, new Q(u[0], u[1]));
                        break;
                    case "distortion":
                        x(v, new J(u[0], u[1], u[2], u[3], u[4]));
                        break;
                    case "compressor":
                        x(v, new z(u[0], u[1], u[2], u[3], u[4]));
                        break;
                    case "analyser":
                        x(v, new n(u[0], u[1]))
                }
        l = 0;
        for (h = f.length; l < h; l++) 3 === this.dg || (d = f[l], m = d.buffersrc, r = d.is_music, v = d.tag, P = d.playbackTime, y = d.looping, L = d.volume, w = (u = d.pan) && u.hasOwnProperty("objUid") ? u.objUid : -1, r && 1 === this.dg) || !r && 2 === this.dg || ((t = this.av(m, v, r, y, L)) ? (t.md = d.resume_position, t.Gs(!!u), t.play(y, L, P), t.kp(), t.SF(), t.Rm(t.ej || t.Uk), d.paused && t.pause(), d.muted && t.oF(), t.Rm(t.ej || t.Uk), u && (-1 !== w ? (t.Fc = t.Fc || new D, t.Fc.Jn = w, da.push(t.Fc)) : t.Fs(u.x, u.y, u.a, u.ia, u.oa, u.og))) : (t = this.dn(m, r), t.Go = P, t.ho = d.paused, u && (-1 !== w ? t.yj.push({
            Ew: w,
            Yq: u.ia,
            Vr: u.oa,
            Zr: u.og,
            cy: v
        }) : t.yj.push({
            x: u.x,
            y: u.y,
            A: u.a,
            Yq: u.ia,
            Vr: u.oa,
            Zr: u.og,
            cy: v
        }))));
        if (e && !S) {
            l = 0;
            for (h = C.length; l < h; l++) C[l].Jx(!0);
            S = !0
        } else if (!e && S) {
            l = 0;
            for (h = C.length; l < h; l++) C[l].Jx(!1);
            S = !1
        }
    };
    wa.Df = function() {
        var a, b, c, d;
        a = 0;
        for (b = da.length; a < b; a++) c = da[a], d = this.b.Xi(c.Jn), c.Kl(d), c.Jn = -1, d && (oa = d.x, T = d.y);
        B(da)
    };
    wa.tE = function(a) {
        if (!this.yE) {
            !a && t && t.resume && (t.resume(), Qa = !1);
            var b, c;
            b = 0;
            for (c = C.length; b < c; b++) C[b].rF(a);
            a && t && t.suspend && (t.suspend(), Qa = !0)
        }
    };
    wa.Hb = function() {
        var a = this.b.Gg,
            b, c, d;
        b = 0;
        for (c = C.length; b < c; b++) d = C[b], d.Hb(a), 0 !== M && d.kp();
        var g, e;
        for (g in ga)
            if (ga.hasOwnProperty(g))
                for (d = ga[g], b = 0, c = d.length; b < c; b++) e = d[b], e.Hb && e.Hb();
        1 === O && this.Fd.pn() && (this.Fd.Hb(a), oa = this.Fd.fa.x, T = this.Fd.fa.y, t.listener.setPosition(this.Fd.fa.x, this.Fd.fa.y, this.gl))
    };
    var Ca = [];
    wa.pF = function(a) {
        var b, c, d, g, e, f = 0;
        b = 0;
        for (c = a.length; b < c; ++b)
            if (d = a[b], g = d[0], d = 2 * d[1], (e = 4 < g.length && ".ogg" === g.substr(g.length - 4)) && K || !e && !K) Ca.push({
                filename: g,
                size: d,
                fa: null
            }), f += d;
        return f
    };
    wa.yF = function() {
        var a, b, c, d;
        a = 0;
        for (b = Ca.length; a < b; ++a) c = Ca[a], d = this.b.Cq +
            c.filename, c.fa = this.dn(d, !1)
    };
    wa.cD = function() {
        var a = 0,
            b, c, d;
        b = 0;
        for (c = Ca.length; b < c; ++b) d = Ca[b], d.fa.MD() || d.fa.AD() || this.b.Ob || this.b.un ? a += d.size : d.fa.Bv() && (a += Math.floor(d.size / 2));
        return a
    };
    wa.SE = function() {
        var a, b, c, d;
        c = a = 0;
        for (b = R.length; a < b; ++a) d = R[a], R[c] = d, d.pe ? d.RE() : ++c;
        R.length = c
    };
    wa.dn = function(a, b) {
        var c, d, g, e = null;
        c = 0;
        for (d = R.length; c < d; c++)
            if (g = R[c], g.src === a) {
                e = g;
                break
            }
        e || (ea && b && this.SE(), e = new E(a, b), R.push(e));
        return e
    };
    wa.av = function(a, b, c, d, g) {
        var e, f, k;
        e = 0;
        for (f = C.length; e < f; e++)
            if (k = C[e], k.src === a && (k.jB() || c)) return k.tag = b, k;
        a = this.dn(a, c);
        if (!a.Ia) return "<preload>" !== b && (a.lo = b, a.Mr = d, a.kt = g), null;
        k = new w(a, b);
        C.push(k);
        return k
    };
    var ya = [];
    u.prototype.im = function(a) {
        return Jb(W, a)
    };
    u.prototype.lz = function(a) {
        y(a);
        var b;
        a = 0;
        for (b = ya.length; a < b; a++)
            if (ya[a].Rg()) return !0;
        return !1
    };
    Y.e = new u;
    G.prototype.Play = function(a, b, c, d) {
        !S && (c = Math.pow(10, c / 20), isFinite(c) || (c = 0), 0 > c && (c = 0), 1 < c && (c = 1), X = this.av(this.b.Cq + a[0] + (K ? ".ogg" : ".m4a"), d, a[1], 0 !== b, c)) && (X.Gs(!1), X.play(0 !== b, c, 0, this.Aw), this.Aw = 0)
    };
    G.prototype.Ut = function(a) {
        y(a);
        var b;
        a = 0;
        for (b = ya.length; a < b; a++) ya[a].stop()
    };
    G.prototype.EA = function() {
        var a, b;
        a = 0;
        for (b = C.length; a < b; a++) C[a].stop()
    };
    Y.k = new G;
    L.prototype.Uy = function(a, b) {
        y(b, !0);
        ya.length ? a.B(ya[0].Kg()) : a.B(0)
    };
    Y.H = new L
})();

function cd(f) {
    this.b = f
}
(function() {
    function f() {
        m && d && window.OfflineClientInfo && window.OfflineClientInfo.SetMessageCallback(function(b) {
            a.sE(b)
        })
    }

    function h() {}

    function e() {}
    var l = cd.prototype;
    l.Ha = function(a) {
        this.Ua = a;
        this.b = a.b
    };
    var r = l.Ha.prototype;
    r.Y = function() {};
    var m = !1,
        d = !1;
    document.addEventListener("DOMContentLoaded", function() {
        if (window.C2_RegisterSW && navigator.Oe) {
            var a = document.createElement("script");
            a.onload = function() {
                m = !0;
                f()
            };
            a.src = "offlineClient.js";
            document.head.appendChild(a)
        }
    });
    var a = null;
    r.Iw = function() {
        d = !0;
        f()
    };
    l.wa = function(a) {
        this.type = a;
        this.b = a.b
    };
    r = l.wa.prototype;
    r.Y = function() {
        var b = this;
        window.addEventListener("resize", function() {
            b.b.trigger(cd.prototype.e.Sz, b)
        });
        a = this;
        "undefined" !== typeof navigator.onLine && (window.addEventListener("online", function() {
            b.b.trigger(cd.prototype.e.Pz, b)
        }), window.addEventListener("offline", function() {
            b.b.trigger(cd.prototype.e.Nz, b)
        }));
        "undefined" !== typeof window.applicationCache && (window.applicationCache.addEventListener("updateready", function() {
            b.b.oj = 1;
            b.b.trigger(cd.prototype.e.lm, b)
        }), window.applicationCache.addEventListener("progress", function(a) {
            b.b.oj = a.loaded / a.total || 0
        }));
        this.b.Sc || (document.addEventListener("appMobi.device.update.available", function() {
            b.b.trigger(cd.prototype.e.lm, b)
        }), document.addEventListener("backbutton", function() {
            b.b.trigger(cd.prototype.e.hm, b)
        }), document.addEventListener("menubutton", function() {
            b.b.trigger(cd.prototype.e.Kt, b)
        }), document.addEventListener("searchbutton", function() {
            b.b.trigger(cd.prototype.e.Vz, b)
        }), document.addEventListener("tizenhwkey", function(a) {
            var d;
            switch (a.keyName) {
                case "back":
                    d = b.b.trigger(cd.prototype.e.hm, b);
                    !d && window.tizen && window.tizen.application.getCurrentApplication().exit();
                    break;
                case "menu":
                    (d = b.b.trigger(cd.prototype.e.Kt, b)) || a.preventDefault()
            }
        }));
        this.b.qr && "undefined" !== typeof Windows ? Windows.UI.Core.SystemNavigationManager.getForCurrentView().addEventListener("backrequested", function(a) {
            b.b.trigger(cd.prototype.e.hm, b) && (a.handled = !0)
        }) : this.b.pr && WinJS.Application && (WinJS.Application.onbackclick = function() {
            return !!b.b.trigger(cd.prototype.e.hm, b)
        });
        this.b.fu(function(a) {
            a ? b.b.trigger(cd.prototype.e.Qz, b) : b.b.trigger(cd.prototype.e.Rz, b)
        });
        this.RD = "undefined" !== typeof window.is_scirra_arcade
    };
    r.sE = function(a) {
        a = a.data.type;
        "downloading-update" === a ? this.b.trigger(cd.prototype.e.Zz, this) : "update-ready" === a || "update-pending" === a ? this.b.trigger(cd.prototype.e.lm, this) : "offline-ready" === a && this.b.trigger(cd.prototype.e.Oz, this)
    };
    h.prototype.Pz = function() {
        return !0
    };
    h.prototype.Nz = function() {
        return !0
    };
    h.prototype.lm = function() {
        return !0
    };
    h.prototype.Rz = function() {
        return !0
    };
    h.prototype.Qz = function() {
        return !0
    };
    h.prototype.Sz = function() {
        return !0
    };
    h.prototype.hm = function() {
        return !0
    };
    h.prototype.Kt = function() {
        return !0
    };
    h.prototype.Vz = function() {
        return !0
    };
    h.prototype.Zz = function() {
        return !0
    };
    h.prototype.lm = function() {
        return !0
    };
    h.prototype.Oz = function() {
        return !0
    };
    l.e = new h;
    e.prototype.bz = function(a, c) {

    };
    l.k = new e;
    l.H = new function() {}
})();

function $c(f) {
    this.b = f
}
(function() {
    function f() {
        this.name = "";
        this.Dj = 0;
        this.Fb = []
    }

    function h() {
        b++;
        b === a.length && a.push(new f);
        return a[b]
    }

    function e() {
        return 0 > b ? null : a[b]
    }

    function l() {}

    function r() {}

    function m() {}
    var d = $c.prototype;
    d.Ha = function(a) {
        this.Ua = a;
        this.b = a.b
    };
    d.Ha.prototype.Y = function() {};
    d.wa = function(a) {
        this.type = a;
        this.b = a.b
    };
    var a = [],
        b = -1;
    d.wa.prototype.Y = function() {
        var a = this;
        window.c2_callFunction = function(d, e) {
            var f, l, m, r = h();
            r.name = d.toLowerCase();
            r.Dj = 0;
            if (e)
                for (r.Fb.length = e.length, f = 0, l = e.length; f < l; ++f) m = e[f], r.Fb[f] = "number" === typeof m || "string" === typeof m ? m : "boolean" === typeof m ? m ? 1 : 0 : 0;
            else B(r.Fb);
            a.b.trigger($c.prototype.e.jm, a, r.name);
            b--;
            return r.Dj
        }
    };
    l.prototype.jm = function(a) {
        var b = e();
        return b ? Jb(a, b.name) : !1
    };
    l.prototype.Ny = function(a, b, d) {
        var f = e();
        if (!f) return !1;
        a = Ja(a);
        return 0 > a || a >= f.Fb.length ? !1 : Qc(f.Fb[a], b, d)
    };
    d.e = new l;
    r.prototype.CallFunction = function(a, d) {
        var e = h();
        e.name = a.toLowerCase();
        e.Dj = 0;
        Wa(e.Fb, d);
        this.b.trigger($c.prototype.e.jm, this, e.name);
        b--
    };
    r.prototype.tA = function(a) {
        var b = e();
        b && (b.Dj = a)
    };
    d.k = new r;
    m.prototype.$z = function(a, b) {
        b = Ja(b);
        var d = e();
        d ? 0 <= b && b < d.Fb.length ? a.Ml(d.Fb[b]) : a.S(0) : a.S(0)
    };
    m.prototype.ut = function(a, d) {
        var e = h();
        e.name = d.toLowerCase();
        e.Dj = 0;
        B(e.Fb);
        var f, l;
        f = 2;
        for (l = arguments.length; f < l; f++) e.Fb.push(arguments[f]);
        this.b.trigger($c.prototype.e.jm, this, e.name);
        b--;
        a.Ml(e.Dj)
    };
    d.H = new m
})();

function dd(f) {
    this.b = f
}
(function() {
    function f() {}
    var h = dd.prototype;
    h.Ha = function(e) {
        this.Ua = e;
        this.b = e.b
    };
    var e = null,
        l = null;
    h.Ha.prototype.Y = function() {};
    h.wa = function(e) {
        this.type = e;
        this.b = e.b;
        this.wx = []
    };
    var r = h.wa.prototype;
    r.Y = function() {
        e = this.b;
        l = this;
        var f = "//lagged.com/api/v2/lagged_tps.js";
        if ("localhost" === location.hostname || "127.0.0.1" === location.hostname) f = "//lagged.com/api/v2/lagged_dev.js";
        (function(d, a, b, c, g, e, f) {
            d[g] = d[g] || function() {
                (d[g].KE = d[g].KE || []).push(arguments)
            };
            d[g].kj = 1 * new Date;
            e = a.createElement(b);
            f = a.getElementsByTagName(b)[0];
            e.async = 1;
            e.src = c;
            f.parentNode.insertBefore(e, f)
        })(window, document, "script", f, "Lagged")
    };
    r.Ad = function() {};
    r.Nc = function() {};
    f.prototype.Ow = function() {
        return !0
    };
    f.prototype.Jw = function() {
        return !0
    };
    f.prototype.nE = function() {
        return !0
    };
    h.e = new f;
    h.k = {};
    r = h.k;
    r.pB = function(f, d) {
        // pa("LaggedAPI: Ad has started");
        // e.trigger(dd.prototype.e.Jw, l);
        // LaggedAPI.APIAds.show("interstitial", f, d, function(a) {
        //     a.success ? console.log("ad done") : console.log(a.Ku);
        //     pa("LaggedAPI: Ad is done");
        //     e.trigger(dd.prototype.e.Ow, l)
        // })
    };
    r.mB = function(e) {
        // LaggedAPI.init(e, "lagdevaF3001")
    };
    r.oB = function(f, d) {
        var a = {};
        a.score = f;
        a.board = d;
        // LaggedAPI.Scores.save(a, function(a) {
        //     a.success ? console.log("high score saved") : console.log(a.Ku);
        //     pa("LaggedAPI: HS Saved");
        //     e.trigger(dd.prototype.e.nE, l)
        // })
    };
    r.nB = function(e) {
        if (!(-1 < this.wx.indexOf(e))) {
            var d = [];
            d.push(e);
            this.wx.push(e);
            // LaggedAPI.Achievements.save(d, function(a) {
            //     a.success ? console.log("achievement saved") : console.log(a.Ku)
            // })
        }
    };
    h.H = {}
})();
var ed = !1;
try {
    ! function() {
        var f, h, e;
        ! function() {
            var l = {},
                r = {};
            f = function(e, d, a) {
                l[e] = {
                    uq: d,
                    Zp: a
                }
            };
            e = h = function(f) {
                function d(a) {
                    if ("." !== a.charAt(0)) return a;
                    a = a.split("/");
                    for (var b = f.split("/").slice(0, -1), c = 0, d = a.length; d > c; c++) {
                        var g = a[c];
                        ".." === g ? b.pop() : "." !== g && b.push(g)
                    }
                    return b.join("/")
                }
                if (e.NA = l, r[f]) return r[f];
                if (r[f] = {}, !l[f]) throw Error("Could not find module " + f);
                for (var a, b = l[f], c = b.uq, b = b.Zp, g = [], k = 0, p = c.length; p > k; k++) "exports" === c[k] ? g.push(a = {}) : g.push(h(d(c[k])));
                c = b.apply(this, g);
                return r[f] = a || c
            }
        }();
        f("promise/all", ["./utils", "exports"], function(e, f) {
            var h = e.isArray,
                d = e.isFunction;
            f.all = function(a) {
                if (!h(a)) throw new TypeError("You must pass an array to all.");
                return new this(function(b, c) {
                    function g(a) {
                        return function(c) {
                            f[a] = c;
                            0 === --l && b(f)
                        }
                    }
                    var e, f = [],
                        l = a.length;
                    0 === l && b([]);
                    for (var h = 0; h < a.length; h++)(e = a[h]) && d(e.then) ? e.then(g(h), c) : (f[h] = e, 0 === --l && b(f))
                })
            }
        });
        f("promise/asap", ["exports"], function(e) {
            function f() {
                return function() {
                    process.kE(a)
                }
            }

            function h() {
                var b = 0,
                    c = new g(a),
                    d = document.createTextNode("");
                return c.observe(d, {
                        characterData: !0
                    }),
                    function() {
                        d.data = b = ++b % 2
                    }
            }

            function d() {
                return function() {
                    k.setTimeout(a, 1)
                }
            }

            function a() {
                for (var a = 0; a < p.length; a++) {
                    var b = p[a];
                    (0, b[0])(b[1])
                }
                p = []
            }
            var b, c = "undefined" != typeof window ? window : {},
                g = c.MutationObserver || c.WebKitMutationObserver,
                k = "undefined" != typeof global ? global : void 0 === this ? window : this,
                p = [];
            b = "undefined" != typeof process && "[object process]" === {}.toString.call(process) ? f() : g ? h() : d();
            e.Vp = function(a, c) {
                1 === p.push([a, c]) && b()
            }
        });
        f("promise/config", ["exports"], function(e) {
            var f = {
                ED: !1
            };
            e.mk = f;
            e.lq = function(e, d) {
                return 2 !== arguments.length ? f[e] : void(f[e] = d)
            }
        });
        f("promise/polyfill", ["./promise", "./utils", "exports"], function(e, f, h) {
            var d = e.Promise,
                a = f.isFunction;
            h.ms = function() {
                var b;
                b = "undefined" != typeof global ? global : "undefined" != typeof window && window.document ? window : self;
                "Promise" in b && "resolve" in b.Promise && "reject" in b.Promise && "all" in b.Promise && "race" in b.Promise && function() {
                    var c;
                    return new b.Promise(function(a) {
                        c = a
                    }), a(c)
                }() || (b.Promise = d)
            }
        });
        f("promise/promise", "./config ./utils ./all ./race ./resolve ./reject ./asap exports".split(" "), function(e, f, h, d, a, b, c, g) {
            function k(a) {
                if (!u(a)) throw new TypeError("You must pass a resolver function as the first argument to the promise constructor");
                if (!(this instanceof k)) throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
                this.Cf = [];
                p(a, this)
            }

            function p(a, b) {
                function c(a) {
                    n(b, a)
                }

                function d(a) {
                    E(b, a)
                }
                try {
                    a(c, d)
                } catch (g) {
                    d(g)
                }
            }

            function q(a, b, c, d) {
                var g, e, f, k, l = u(c);
                if (l) try {
                    g = c(d), f = !0
                } catch (h) {
                    k = !0, e = h
                } else g = d, f = !0;
                z(b, g) || (l && f ? n(b, g) : k ? E(b, e) : a === Y ? n(b, g) : a === F && E(b, g))
            }

            function Q(a, b, c, d) {
                a = a.Cf;
                var g = a.length;
                a[g] = b;
                a[g + Y] = c;
                a[g + F] = d
            }

            function J(a, b) {
                for (var c, d, g = a.Cf, e = a.Bf, f = 0; f < g.length; f += 3) c = g[f], d = g[f + b], q(b, c, d, e);
                a.Cf = null
            }

            function z(a, b) {
                var c, d = null;
                try {
                    if (a === b) throw new TypeError("A promises callback cannot return that same promise.");
                    if (x(b) && (d = b.then, u(d))) return d.call(b, function(d) {
                        return c ? !0 : (c = !0, void(b !== d ? n(a, d) : D(a, d)))
                    }, function(b) {
                        return c ? !0 : (c = !0, void E(a, b))
                    }), !0
                } catch (g) {
                    return c ? !0 : (E(a, g), !0)
                }
                return !1
            }

            function n(a, b) {
                a === b ? D(a, b) : z(a, b) || D(a, b)
            }

            function D(a, b) {
                a.qc === G && (a.qc = L, a.Bf = b, y.async(w, a))
            }

            function E(a, b) {
                a.qc === G && (a.qc = L, a.Bf = b, y.async(v, a))
            }

            function w(a) {
                J(a, a.qc = Y)
            }

            function v(a) {
                J(a, a.qc = F)
            }
            var y = e.mk,
                x = (e.lq, f.Wr),
                u = f.isFunction;
            e = (f.now, h.all);
            d = d.race;
            a = a.resolve;
            b = b.reject;
            y.async = c.Vp;
            var G = void 0,
                L = 0,
                Y = 1,
                F = 2;
            k.prototype = {
                constructor: k,
                qc: void 0,
                Bf: void 0,
                Cf: void 0,
                then: function(a, b) {
                    var c = this,
                        d = new this.constructor(function() {});
                    if (this.qc) {
                        var g = arguments;
                        y.async(function() {
                            q(c.qc, d, g[c.qc - 1], c.Bf)
                        })
                    } else Q(this, d, a, b);
                    return d
                },
                "catch": function(a) {
                    return this.then(null, a)
                }
            };
            k.all = e;
            k.race = d;
            k.resolve = a;
            k.reject = b;
            g.Promise = k
        });
        f("promise/race", ["./utils", "exports"], function(e, f) {
            var h = e.isArray;
            f.race = function(d) {
                if (!h(d)) throw new TypeError("You must pass an array to race.");
                return new this(function(a, b) {
                    for (var c, g = 0; g < d.length; g++)(c = d[g]) && "function" == typeof c.then ? c.then(a, b) : a(c)
                })
            }
        });
        f("promise/reject", ["exports"], function(e) {
            e.reject = function(e) {
                return new this(function(f, d) {
                    d(e)
                })
            }
        });
        f("promise/resolve", ["exports"], function(e) {
            e.resolve = function(e) {
                return e && "object" == typeof e && e.constructor === this ? e : new this(function(f) {
                    f(e)
                })
            }
        });
        f("promise/utils", ["exports"], function(e) {
            function f(d) {
                return "function" == typeof d
            }
            var h = Date.now || function() {
                return (new Date).getTime()
            };
            e.Wr = function(d) {
                return f(d) || "object" == typeof d && null !== d
            };
            e.isFunction = f;
            e.isArray = function(d) {
                return "[object Array]" === Object.prototype.toString.call(d)
            };
            e.now = h
        });
        h("promise/polyfill").ms()
    }();
    var fd = function() {
        return function(f) {
            function h(l) {
                if (e[l]) return e[l].Lb;
                var r = e[l] = {
                    Lb: {},
                    id: l,
                    loaded: !1
                };
                return f[l].call(r.Lb, r, r.Lb, h), r.loaded = !0, r.Lb
            }
            var e = {};
            return h.Zg = f, h.If = e, h.ca = "", h(0)
        }([
            function(f, h, e) {
                h.Af = !0;
                var l = function(f) {
                    function h(a, b) {
                        a[b] = function() {
                            var c = arguments;
                            return a.ready().then(function() {
                                return a[b].apply(a, c)
                            })
                        }
                    }

                    function d() {
                        for (var a = 1; a < arguments.length; a++) {
                            var b = arguments[a];
                            if (b)
                                for (var c in b) b.hasOwnProperty(c) && (q(b[c]) ? arguments[0][c] = b[c].slice() : arguments[0][c] = b[c])
                        }
                        return arguments[0]
                    }

                    function a(a) {
                        for (var b in c)
                            if (c.hasOwnProperty(b) && c[b] === a) return !0;
                        return !1
                    }
                    var b = {},
                        c = {
                            Ae: "asyncStorage",
                            Be: "localStorageWrapper",
                            Ce: "webSQLStorage"
                        },
                        g = "clear getItem iterate key keys length removeItem setItem".split(" "),
                        k = {
                            description: "",
                            Nd: [c.Ae, c.Ce, c.Be].slice(),
                            name: "localforage",
                            size: 4980736,
                            G: "keyvaluepairs",
                            version: 1
                        },
                        l = function(a) {
                            var b = {},
                                d;
                            try {
                                var g = g || a.indexedDB || a.webkitIndexedDB || a.mozIndexedDB || a.sh || a.msIndexedDB;
                                d = "undefined" != typeof a.openDatabase && a.navigator && a.navigator.userAgent && /Safari/.test(a.navigator.userAgent) && !/Chrome/.test(a.navigator.userAgent) ? !1 : g && "function" == typeof g.open && "undefined" != typeof a.IDBKeyRange
                            } catch (e) {
                                d = !1
                            }
                            b[c.Ae] = !!d;
                            var f;
                            try {
                                f = a.openDatabase
                            } catch (k) {
                                f = !1
                            }
                            b[c.Ce] = !!f;
                            var h;
                            try {
                                h = a.localStorage && "setItem" in a.localStorage && a.localStorage.setItem
                            } catch (l) {
                                h = !1
                            }
                            return b[c.Be] = !!h, b
                        }(f),
                        q = Array.isArray || function(a) {
                            return "[object Array]" === Object.prototype.toString.call(a)
                        };
                    return new(function() {
                        function f(a) {
                            if (!(this instanceof f)) throw new TypeError("Cannot call a class as a function");
                            this.Ae = c.Ae;
                            this.Be = c.Be;
                            this.Ce = c.Ce;
                            this.vh = d({}, k);
                            this.gd = d({}, this.vh, a);
                            this.fk = this.Ib = null;
                            this.Jc = !1;
                            this.F = null;
                            this.gk();
                            this.Il(this.gd.Nd)
                        }
                        return f.prototype.mk = function(a) {
                            if ("object" == typeof a) {
                                if (this.Jc) return Error("Can't call config() after localforage has been used.");
                                for (var b in a) "storeName" === b && (a[b] = a[b].replace(/\W/g, "_")), this.gd[b] = a[b];
                                return "driver" in a && a.Nd && this.Il(this.gd.Nd), !0
                            }
                            return "string" == typeof a ? this.gd[a] : this.gd
                        }, f.prototype.Nd = function() {
                            return this.De || null
                        }, f.prototype.Ek = function(c, d, g) {
                            var f = this,
                                k = function() {
                                    if (a(c)) switch (c) {
                                        case f.Ae:
                                            return new Promise(function(a) {
                                                a(e(1))
                                            });
                                        case f.Be:
                                            return new Promise(function(a) {
                                                a(e(2))
                                            });
                                        case f.Ce:
                                            return new Promise(function(a) {
                                                a(e(4))
                                            })
                                    } else if (b[c]) return Promise.resolve(b[c]);
                                    return Promise.reject(Error("Driver not found."))
                                }();
                            return k.then(d, g), k
                        }, f.prototype.ready = function(a) {
                            var b = this,
                                c = b.Ib.then(function() {
                                    return null === b.Jc && (b.Jc = b.fk()), b.Jc
                                });
                            return c.then(a, a), c
                        }, f.prototype.Il = function(a, b, c) {
                            function d() {
                                e.gd.Nd = e.Nd()
                            }

                            function g(a) {
                                return function() {
                                    function b() {
                                        for (; c < a.length;) {
                                            var g = a[c];
                                            return c++, e.F = null, e.Jc = null, e.Ek(g).then(function(a) {
                                                return e.Lp(a), d(), e.Jc = e.xh(e.gd), e.Jc
                                            })["catch"](b)
                                        }
                                        d();
                                        return e.Ib = Promise.reject(Error("No available storage method found.")), e.Ib
                                    }
                                    var c = 0;
                                    return b()
                                }
                            }
                            var e = this;
                            q(a) || (a = [a]);
                            var f = this.Mp(a);
                            return this.Ib = (null !== this.Ib ? this.Ib["catch"](function() {
                                return Promise.resolve()
                            }) : Promise.resolve()).then(function() {
                                var a = f[0];
                                return e.F = null, e.Jc = null, e.Ek(a).then(function(a) {
                                    e.De = a.De;
                                    d();
                                    e.gk();
                                    e.fk = g(f)
                                })
                            })["catch"](function() {
                                d();
                                return e.Ib = Promise.reject(Error("No available storage method found.")), e.Ib
                            }), this.Ib.then(b, c), this.Ib
                        }, f.prototype.supports = function(a) {
                            return !!l[a]
                        }, f.prototype.Lp = function(a) {
                            d(this, a)
                        }, f.prototype.Mp = function(a) {
                            for (var b = [], c = 0, d = a.length; d > c; c++) {
                                var g = a[c];
                                this.supports(g) && b.push(g)
                            }
                            return b
                        }, f.prototype.gk = function() {
                            for (var a = 0; a < g.length; a++) h(this, g[a])
                        }, f.prototype.Im = function(a) {
                            return new f(a)
                        }, f
                    }())
                }("undefined" != typeof window ? window : self);
                h["default"] = l;
                f.Lb = h["default"]
            },
            function(f, h) {
                h.Af = !0;
                h["default"] = function(e) {
                    function f(a, b) {
                        a = a || [];
                        b = b || {};
                        try {
                            return new Blob(a, b)
                        } catch (c) {
                            if ("TypeError" !== c.name) throw c;
                            for (var d = new(e.BlobBuilder || e.Oe || e.Tg || e.WebKitBlobBuilder), g = 0; g < a.length; g += 1) d.append(a[g]);
                            return d.getBlob(b.type)
                        }
                    }

                    function h(a) {
                        return new Promise(function(b, c) {
                            var d = new XMLHttpRequest;
                            d.open("GET", a);
                            d.withCredentials = !0;
                            d.responseType = "arraybuffer";
                            d.onreadystatechange = function() {
                                return 4 === d.readyState ? 200 === d.status ? b({
                                    response: d.response,
                                    type: d.getResponseHeader("Content-Type")
                                }) : void c({
                                    status: d.status,
                                    response: d.response
                                }) : void 0
                            };
                            d.send()
                        })
                    }

                    function m(a) {
                        return (new Promise(function(b, c) {
                            var d = f([""], {
                                    type: "image/png"
                                }),
                                g = a.transaction([G], "readwrite");
                            g.objectStore(G).put(d, "key");
                            g.oncomplete = function() {
                                var d = a.transaction([G], "readwrite").objectStore(G).get("key");
                                d.onerror = c;
                                d.onsuccess = function(a) {
                                    var c = URL.createObjectURL(a.target.result);
                                    h(c).then(function(a) {
                                        b(!(!a || "image/png" !== a.type))
                                    }, function() {
                                        b(!1)
                                    }).then(function() {
                                        URL.revokeObjectURL(c)
                                    })
                                }
                            };
                            g.onerror = g.onabort = c
                        }))["catch"](function() {
                            return !1
                        })
                    }

                    function d(a) {
                        return "boolean" == typeof x ? Promise.resolve(x) : m(a).then(function(a) {
                            return x = a
                        })
                    }

                    function a(a) {
                        return new Promise(function(b, c) {
                            var d = new FileReader;
                            d.onerror = c;
                            d.onloadend = function(c) {
                                b({
                                    ek: !0,
                                    data: btoa(c.target.result || ""),
                                    type: a.type
                                })
                            };
                            d.readAsBinaryString(a)
                        })
                    }

                    function b(a) {
                        for (var b = atob(a.data), c = b.length, d = new ArrayBuffer(c), g = new Uint8Array(d), e = 0; c > e; e++) g[e] = b.charCodeAt(e);
                        return f([d], {
                            type: a.type
                        })
                    }

                    function c(a) {
                        var b = this,
                            c = b.wh().then(function() {
                                var a = u[b.F.name];
                                return a && a.Md ? a.Md : void 0
                            });
                        return c.then(a, a), c
                    }

                    function g(a) {
                        a = u[a.name];
                        var b = {};
                        b.promise = new Promise(function(a) {
                            b.resolve = a
                        });
                        a.sk.push(b);
                        a.Md ? a.Md = a.Md.then(function() {
                            return b.promise
                        }) : a.Md = b.promise
                    }

                    function k(a) {
                        function b() {
                            return Promise.resolve()
                        }
                        var d = this,
                            g = {
                                db: null
                            };
                        if (a)
                            for (var f in a) g[f] = a[f];
                        u || (u = {});
                        var k = u[g.name];
                        k || (k = {
                            Sf: [],
                            db: null,
                            Md: null,
                            sk: []
                        }, u[g.name] = k);
                        k.Sf.push(d);
                        d.wh || (d.wh = d.ready, d.ready = c);
                        a = [];
                        for (f = 0; f < k.Sf.length; f++) {
                            var h = k.Sf[f];
                            h !== d && a.push(h.wh()["catch"](b))
                        }
                        var l = k.Sf.slice(0);
                        return Promise.all(a).then(function() {
                            return g.db = k.db, p(g, !1)
                        }).then(function(a) {
                            g.db = a;
                            var b;
                            b = d.vh.version;
                            if (g.db) {
                                var c = !g.db.objectStoreNames.contains(g.G),
                                    f = g.version > g.db.version;
                                (g.version < g.db.version && (g.version !== b && e.console.warn('The database "' + g.name + "\" can't be downgraded from version " + g.db.version + " to version " + g.version + "."), g.version = g.db.version), f || c) ? (c && (b = g.db.version + 1, b > g.version && (g.version = b)), b = !0) : b = !1
                            } else b = !0;
                            return b ? p(g, !0) : a
                        }).then(function(a) {
                            g.db = k.db = a;
                            d.F = g;
                            for (a = 0; a < l.length; a++) {
                                var b = l[a];
                                b !== d && (b.F.db = g.db, b.F.version = g.version)
                            }
                        })
                    }

                    function p(a, b) {
                        return new Promise(function(c, d) {
                            if (a.db) {
                                if (!b) return c(a.db);
                                g(a);
                                a.db.close()
                            }
                            var f = [a.name];
                            b && f.push(a.version);
                            var k = y.open.apply(y, f);
                            b && (k.onupgradeneeded = function(b) {
                                var c = k.result;
                                try {
                                    c.createObjectStore(a.G), 1 >= b.oldVersion && c.createObjectStore(G)
                                } catch (d) {
                                    if ("ConstraintError" !== d.name) throw d;
                                    e.console.warn('The database "' + a.name + '" has been upgraded from version ' + b.oldVersion + " to version " + b.newVersion + ', but the storage "' + a.G + '" already exists.')
                                }
                            });
                            k.onerror = function() {
                                d(k.error)
                            };
                            k.onsuccess = function() {
                                c(k.result);
                                var b = u[a.name].sk.pop();
                                b && b.resolve()
                            }
                        })
                    }

                    function q(a, c) {
                        var d = this;
                        "string" != typeof a && (e.console.warn(a + " used as a key, but it is not a string."), a = String(a));
                        var g = new Promise(function(c, g) {
                            d.ready().then(function() {
                                var e = d.F,
                                    f = e.db.transaction(e.G, "readonly").objectStore(e.G).get(a);
                                f.onsuccess = function() {
                                    var a = f.result;
                                    void 0 === a && (a = null);
                                    a && a.ek && (a = b(a));
                                    c(a)
                                };
                                f.onerror = function() {
                                    g(f.error)
                                }
                            })["catch"](g)
                        });
                        return v(g, c), g
                    }

                    function Q(a, c) {
                        var d = this,
                            g = new Promise(function(c, g) {
                                d.ready().then(function() {
                                    var e = d.F,
                                        f = e.db.transaction(e.G, "readonly").objectStore(e.G).openCursor(),
                                        k = 1;
                                    f.onsuccess = function() {
                                        var d = f.result;
                                        if (d) {
                                            var g = d.value;
                                            g && g.ek && (g = b(g));
                                            g = a(g, d.key, k++);
                                            void 0 !== g ? c(g) : d["continue"]()
                                        } else c()
                                    };
                                    f.onerror = function() {
                                        g(f.error)
                                    }
                                })["catch"](g)
                            });
                        return v(g, c), g
                    }

                    function J(b, c, g) {
                        var f = this;
                        "string" != typeof b && (e.console.warn(b + " used as a key, but it is not a string."), b = String(b));
                        var k = new Promise(function(g, e) {
                            var k;
                            f.ready().then(function() {
                                return k = f.F, c instanceof Blob ? d(k.db).then(function(b) {
                                    return b ? c : a(c)
                                }) : c
                            }).then(function(a) {
                                var c = k.db.transaction(k.G, "readwrite"),
                                    d = c.objectStore(k.G);
                                null === a && (a = void 0);
                                c.oncomplete = function() {
                                    void 0 === a && (a = null);
                                    g(a)
                                };
                                c.onabort = c.onerror = function() {
                                    e(f.error ? f.error : f.transaction.error)
                                };
                                var f = d.put(a, b)
                            })["catch"](e)
                        });
                        return v(k, g), k
                    }

                    function z(a, b) {
                        var c = this;
                        "string" != typeof a && (e.console.warn(a + " used as a key, but it is not a string."), a = String(a));
                        var d = new Promise(function(b, d) {
                            c.ready().then(function() {
                                var g = c.F,
                                    e = g.db.transaction(g.G, "readwrite"),
                                    f = e.objectStore(g.G)["delete"](a);
                                e.oncomplete = function() {
                                    b()
                                };
                                e.onerror = function() {
                                    d(f.error)
                                };
                                e.onabort = function() {
                                    d(f.error ? f.error : f.transaction.error)
                                }
                            })["catch"](d)
                        });
                        return v(d, b), d
                    }

                    function n(a) {
                        var b = this,
                            c = new Promise(function(a, c) {
                                b.ready().then(function() {
                                    var d = b.F,
                                        g = d.db.transaction(d.G, "readwrite"),
                                        e = g.objectStore(d.G).clear();
                                    g.oncomplete = function() {
                                        a()
                                    };
                                    g.onabort = g.onerror = function() {
                                        c(e.error ? e.error : e.transaction.error)
                                    }
                                })["catch"](c)
                            });
                        return v(c, a), c
                    }

                    function D(a) {
                        var b = this,
                            c = new Promise(function(a, c) {
                                b.ready().then(function() {
                                    var d = b.F,
                                        g = d.db.transaction(d.G, "readonly").objectStore(d.G).count();
                                    g.onsuccess = function() {
                                        a(g.result)
                                    };
                                    g.onerror = function() {
                                        c(g.error)
                                    }
                                })["catch"](c)
                            });
                        return v(c, a), c
                    }

                    function E(a, b) {
                        var c = this,
                            d = new Promise(function(b, d) {
                                return 0 > a ? void b(null) : void c.ready().then(function() {
                                    var g = c.F,
                                        e = !1,
                                        f = g.db.transaction(g.G, "readonly").objectStore(g.G).openCursor();
                                    f.onsuccess = function() {
                                        var c = f.result;
                                        return c ? void(0 === a ? b(c.key) : e ? b(c.key) : (e = !0, c.advance(a))) : void b(null)
                                    };
                                    f.onerror = function() {
                                        d(f.error)
                                    }
                                })["catch"](d)
                            });
                        return v(d, b), d
                    }

                    function w(a) {
                        var b = this,
                            c = new Promise(function(a, c) {
                                b.ready().then(function() {
                                    var d = b.F,
                                        g = d.db.transaction(d.G, "readonly").objectStore(d.G).openCursor(),
                                        e = [];
                                    g.onsuccess = function() {
                                        var b = g.result;
                                        return b ? (e.push(b.key), void b["continue"]()) : void a(e)
                                    };
                                    g.onerror = function() {
                                        c(g.error)
                                    }
                                })["catch"](c)
                            });
                        return v(c, a), c
                    }

                    function v(a, b) {
                        b && a.then(function(a) {
                            b(null, a)
                        }, function(a) {
                            b(a)
                        })
                    }
                    var y = y || e.indexedDB || e.webkitIndexedDB || e.mozIndexedDB || e.sh || e.msIndexedDB;
                    if (y) {
                        var x, u, G = "local-forage-detect-blob-support";
                        return {
                            De: "asyncStorage",
                            xh: k,
                            Xk: Q,
                            getItem: q,
                            setItem: J,
                            removeItem: z,
                            clear: n,
                            length: D,
                            key: E,
                            keys: w
                        }
                    }
                }("undefined" != typeof window ? window : self);
                f.Lb = h["default"]
            },
            function(f, h, e) {
                h.Af = !0;
                h["default"] = function(f) {
                    function h(a, b) {
                        b && a.then(function(a) {
                            b(null, a)
                        }, function(a) {
                            b(a)
                        })
                    }
                    var m = null;
                    try {
                        if (!(f.localStorage && "setItem" in f.localStorage)) return;
                        m = f.localStorage
                    } catch (d) {
                        return
                    }
                    return {
                        De: "localStorageWrapper",
                        xh: function(a) {
                            var b = {};
                            if (a)
                                for (var c in a) b[c] = a[c];
                            return b.Pb = b.name + "/", b.G !== this.vh.G && (b.Pb += b.G + "/"), this.F = b, (new Promise(function(a) {
                                a(e(3))
                            })).then(function(a) {
                                return b.od = a, Promise.resolve()
                            })
                        },
                        Xk: function(a, b) {
                            var c = this,
                                d = c.ready().then(function() {
                                    for (var b = c.F, d = b.Pb, g = d.length, e = m.length, f = 1, h = 0; e > h; h++) {
                                        var n = m.key(h);
                                        if (0 === n.indexOf(d)) {
                                            var l = m.getItem(n);
                                            if (l && (l = b.od.Nf(l)), l = a(l, n.substring(g), f++), void 0 !== l) return l
                                        }
                                    }
                                });
                            return h(d, b), d
                        },
                        getItem: function(a, b) {
                            var c = this;
                            "string" != typeof a && (f.console.warn(a +
                                " used as a key, but it is not a string."), a = String(a));
                            var d = c.ready().then(function() {
                                var b = c.F,
                                    d = m.getItem(b.Pb + a);
                                return d && (d = b.od.Nf(d)), d
                            });
                            return h(d, b), d
                        },
                        setItem: function(a, b, c) {
                            var d = this;
                            "string" != typeof a && (f.console.warn(a + " used as a key, but it is not a string."), a = String(a));
                            var e = d.ready().then(function() {
                                void 0 === b && (b = null);
                                var c = b;
                                return new Promise(function(e, f) {
                                    var k = d.F;
                                    k.od.serialize(b, function(b, d) {
                                        if (d) f(d);
                                        else try {
                                            m.setItem(k.Pb + a, b), e(c)
                                        } catch (g) {
                                            "QuotaExceededError" !== g.name && "NS_ERROR_DOM_QUOTA_REACHED" !== g.name || f(g), f(g)
                                        }
                                    })
                                })
                            });
                            return h(e, c), e
                        },
                        removeItem: function(a, b) {
                            var c = this;
                            "string" != typeof a && (f.console.warn(a + " used as a key, but it is not a string."), a = String(a));
                            var d = c.ready().then(function() {
                                m.removeItem(c.F.Pb + a)
                            });
                            return h(d, b), d
                        },
                        clear: function(a) {
                            var b = this,
                                c = b.ready().then(function() {
                                    for (var a = b.F.Pb, c = m.length - 1; 0 <= c; c--) {
                                        var d = m.key(c);
                                        0 === d.indexOf(a) && m.removeItem(d)
                                    }
                                });
                            return h(c, a), c
                        },
                        length: function(a) {
                            var b = this.keys().then(function(a) {
                                return a.length
                            });
                            return h(b, a), b
                        },
                        key: function(a, b) {
                            var c = this,
                                d = c.ready().then(function() {
                                    var b, d = c.F;
                                    try {
                                        b = m.key(a)
                                    } catch (g) {
                                        b = null
                                    }
                                    return b && (b = b.substring(d.Pb.length)), b
                                });
                            return h(d, b), d
                        },
                        keys: function(a) {
                            var b = this,
                                c = b.ready().then(function() {
                                    for (var a = b.F, c = m.length, d = [], e = 0; c > e; e++) 0 === m.key(e).indexOf(a.Pb) && d.push(m.key(e).substring(a.Pb.length));
                                    return d
                                });
                            return h(c, a), c
                        }
                    }
                }("undefined" != typeof window ? window : self);
                f.Lb = h["default"]
            },
            function(f, h) {
                h.Af = !0;
                h["default"] = function(e) {
                    function f(a) {
                        var b, c, d, e, h;
                        b = .75 * a.length;
                        var l = a.length,
                            r = 0;
                        "=" === a[a.length - 1] && (b--, "=" === a[a.length - 2] && b--);
                        var J = new ArrayBuffer(b),
                            z = new Uint8Array(J);
                        for (b = 0; l > b; b += 4) c = m.indexOf(a[b]), d = m.indexOf(a[b + 1]), e = m.indexOf(a[b + 2]), h = m.indexOf(a[b + 3]), z[r++] = c << 2 | d >> 4, z[r++] = (15 & d) << 4 | e >> 2, z[r++] = (3 & e) << 6 | 63 & h;
                        return J
                    }

                    function h(a) {
                        var b = new Uint8Array(a),
                            c = "";
                        for (a = 0; a < b.length; a += 3) c += m[b[a] >> 2], c += m[(3 & b[a]) << 4 | b[a + 1] >> 4], c += m[(15 & b[a + 1]) << 2 | b[a + 2] >> 6], c += m[63 & b[a + 2]];
                        return 2 === b.length % 3 ? c = c.substring(0, c.length -
                            1) + "=" : 1 === b.length % 3 && (c = c.substring(0, c.length - 2) + "=="), c
                    }
                    var m = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                        d = /^~~local_forage_type~([^~]+)~/;
                    return {
                        serialize: function(a, b) {
                            var c = "";
                            if (a && (c = a.toString()), a && ("[object ArrayBuffer]" === a.toString() || a.buffer && "[object ArrayBuffer]" === a.buffer.toString())) {
                                var d, e = "__lfsc__:";
                                a instanceof ArrayBuffer ? (d = a, e += "arbf") : (d = a.buffer, "[object Int8Array]" === c ? e += "si08" : "[object Uint8Array]" === c ? e += "ui08" : "[object Uint8ClampedArray]" === c ? e += "uic8" : "[object Int16Array]" === c ? e += "si16" : "[object Uint16Array]" === c ? e += "ur16" : "[object Int32Array]" === c ? e += "si32" : "[object Uint32Array]" === c ? e += "ui32" : "[object Float32Array]" === c ? e += "fl32" : "[object Float64Array]" === c ? e += "fl64" : b(Error("Failed to get type for BinaryArray")));
                                b(e + h(d))
                            } else if ("[object Blob]" === c) c = new FileReader, c.onload = function() {
                                var c = "~~local_forage_type~" + a.type + "~" + h(this.result);
                                b("__lfsc__:blob" + c)
                            }, c.readAsArrayBuffer(a);
                            else try {
                                b(JSON.stringify(a))
                            } catch (f) {
                                console.error("Couldn't convert value into a JSON string: ", a), b(null, f)
                            }
                        },
                        Nf: function(a) {
                            if ("__lfsc__:" !== a.substring(0, 9)) return JSON.parse(a);
                            var b, c = a.substring(13);
                            a = a.substring(9, 13);
                            if ("blob" === a && d.test(c)) {
                                var g = c.match(d);
                                b = g[1];
                                c = c.substring(g[0].length)
                            }
                            c = f(c);
                            switch (a) {
                                case "arbf":
                                    return c;
                                case "blob":
                                    var k;
                                    c = [c];
                                    b = {
                                        type: b
                                    };
                                    c = c || [];
                                    b = b || {};
                                    try {
                                        k = new Blob(c, b)
                                    } catch (h) {
                                        if ("TypeError" !== h.name) throw h;
                                        k = new(e.BlobBuilder || e.Oe || e.Tg || e.WebKitBlobBuilder);
                                        for (a = 0; a < c.length; a += 1) k.append(c[a]);
                                        k = k.getBlob(b.type)
                                    }
                                    return k;
                                case "si08":
                                    return new Int8Array(c);
                                case "ui08":
                                    return new Uint8Array(c);
                                case "uic8":
                                    return new Uint8ClampedArray(c);
                                case "si16":
                                    return new Int16Array(c);
                                case "ur16":
                                    return new Uint16Array(c);
                                case "si32":
                                    return new Int32Array(c);
                                case "ui32":
                                    return new Uint32Array(c);
                                case "fl32":
                                    return new Float32Array(c);
                                case "fl64":
                                    return new Float64Array(c);
                                default:
                                    throw Error("Unkown type: " + a);
                            }
                        },
                        CF: f,
                        hB: h
                    }
                }("undefined" != typeof window ? window : self);
                f.Lb = h["default"]
            },
            function(f, h, e) {
                h.Af = !0;
                h["default"] = function(f) {
                    function h(a) {
                        var b = this,
                            c = {
                                db: null
                            };
                        if (a)
                            for (var d in a) c[d] = "string" != typeof a[d] ? a[d].toString() : a[d];
                        var g = new Promise(function(a, d) {
                            try {
                                c.db = Q(c.name, String(c.version), c.description, c.size)
                            } catch (g) {
                                return d(g)
                            }
                            c.db.transaction(function(g) {
                                g.executeSql("CREATE TABLE IF NOT EXISTS " + c.G + " (id INTEGER PRIMARY KEY, key unique, value)", [], function() {
                                    b.F = c;
                                    a()
                                }, function(a, b) {
                                    d(b)
                                })
                            })
                        });
                        return (new Promise(function(a) {
                            a(e(3))
                        })).then(function(a) {
                            return c.od = a, g
                        })
                    }

                    function m(a, b) {
                        var c = this;
                        "string" != typeof a && (f.console.warn(a + " used as a key, but it is not a string."), a = String(a));
                        var d = new Promise(function(b, d) {
                            c.ready().then(function() {
                                var g = c.F;
                                g.db.transaction(function(c) {
                                    c.executeSql("SELECT * FROM " + g.G + " WHERE key = ? LIMIT 1", [a], function(a, c) {
                                        var d = c.rows.length ? c.rows.item(0).value : null;
                                        d && (d = g.od.Nf(d));
                                        b(d)
                                    }, function(a, b) {
                                        d(b)
                                    })
                                })
                            })["catch"](d)
                        });
                        return q(d, b), d
                    }

                    function d(a, b) {
                        var c = this,
                            d = new Promise(function(b, d) {
                                c.ready().then(function() {
                                    var g = c.F;
                                    g.db.transaction(function(c) {
                                        c.executeSql("SELECT * FROM " + g.G, [], function(c, d) {
                                            for (var e = d.rows, f = e.length, k = 0; f > k; k++) {
                                                var h = e.item(k),
                                                    l = h.value;
                                                if (l && (l = g.od.Nf(l)), l = a(l, h.key, k + 1), void 0 !== l) return void b(l)
                                            }
                                            b()
                                        }, function(a, b) {
                                            d(b)
                                        })
                                    })
                                })["catch"](d)
                            });
                        return q(d, b), d
                    }

                    function a(a, b, c) {
                        var d = this;
                        "string" != typeof a && (f.console.warn(a + " used as a key, but it is not a string."), a = String(a));
                        var g = new Promise(function(c, g) {
                            d.ready().then(function() {
                                void 0 === b && (b = null);
                                var e = b,
                                    f = d.F;
                                f.od.serialize(b, function(b, d) {
                                    d ? g(d) : f.db.transaction(function(d) {
                                        d.executeSql("INSERT OR REPLACE INTO " + f.G + " (key, value) VALUES (?, ?)", [a, b], function() {
                                            c(e)
                                        }, function(a, b) {
                                            g(b)
                                        })
                                    }, function(a) {
                                        a.code === a.QUOTA_ERR && g(a)
                                    })
                                })
                            })["catch"](g)
                        });
                        return q(g, c), g
                    }

                    function b(a, b) {
                        var c = this;
                        "string" != typeof a && (f.console.warn(a + " used as a key, but it is not a string."), a = String(a));
                        var d = new Promise(function(b, d) {
                            c.ready().then(function() {
                                var g = c.F;
                                g.db.transaction(function(c) {
                                    c.executeSql("DELETE FROM " + g.G + " WHERE key = ?", [a], function() {
                                        b()
                                    }, function(a, b) {
                                        d(b)
                                    })
                                })
                            })["catch"](d)
                        });
                        return q(d, b), d
                    }

                    function c(a) {
                        var b = this,
                            c = new Promise(function(a, c) {
                                b.ready().then(function() {
                                    var d = b.F;
                                    d.db.transaction(function(b) {
                                        b.executeSql("DELETE FROM " + d.G, [], function() {
                                            a()
                                        }, function(a, b) {
                                            c(b)
                                        })
                                    })
                                })["catch"](c)
                            });
                        return q(c, a), c
                    }

                    function g(a) {
                        var b = this,
                            c = new Promise(function(a, c) {
                                b.ready().then(function() {
                                    var d = b.F;
                                    d.db.transaction(function(b) {
                                        b.executeSql("SELECT COUNT(key) as c FROM " + d.G, [], function(b, c) {
                                            var d = c.rows.item(0).If;
                                            a(d)
                                        }, function(a, b) {
                                            c(b)
                                        })
                                    })
                                })["catch"](c)
                            });
                        return q(c, a), c
                    }

                    function k(a, b) {
                        var c = this,
                            d = new Promise(function(b, d) {
                                c.ready().then(function() {
                                    var g = c.F;
                                    g.db.transaction(function(c) {
                                        c.executeSql("SELECT key FROM " + g.G + " WHERE id = ? LIMIT 1", [a + 1], function(a, c) {
                                            var d = c.rows.length ? c.rows.item(0).key : null;
                                            b(d)
                                        }, function(a, b) {
                                            d(b)
                                        })
                                    })
                                })["catch"](d)
                            });
                        return q(d, b), d
                    }

                    function p(a) {
                        var b = this,
                            c = new Promise(function(a, c) {
                                b.ready().then(function() {
                                    var d = b.F;
                                    d.db.transaction(function(b) {
                                        b.executeSql("SELECT key FROM " + d.G, [], function(b, c) {
                                            for (var d = [], g = 0; g < c.rows.length; g++) d.push(c.rows.item(g).key);
                                            a(d)
                                        }, function(a, b) {
                                            c(b)
                                        })
                                    })
                                })["catch"](c)
                            });
                        return q(c, a), c
                    }

                    function q(a, b) {
                        b && a.then(function(a) {
                            b(null, a)
                        }, function(a) {
                            b(a)
                        })
                    }
                    var Q = f.openDatabase;
                    if (Q) return {
                        De: "webSQLStorage",
                        xh: h,
                        Xk: d,
                        getItem: m,
                        setItem: a,
                        removeItem: b,
                        clear: c,
                        length: g,
                        key: k,
                        keys: p
                    }
                }("undefined" != typeof window ? window : self);
                f.Lb = h["default"]
            }
        ])
    };
    "object" == typeof exports && "object" == typeof module ? module.Lb = fd() : "function" == typeof define && define.XA ? define([], fd) : "object" == typeof exports ? exports.localforage = fd() : this.localforage = fd()
} catch (gd) {
    ed = !0
}

function hd(f) {
    this.b = f
}
(function() {
    function f(a) {
        a.b.trigger(hd.prototype.e.uh, a)
    }

    function h() {}

    function e() {}

    function l() {}
    var r = "",
        m = "",
        d = "";
    "undefined" !== typeof window.is_scirra_arcade && (d = "sa" + window.scirra_arcade_id + "_");
    var a = hd.prototype;
    a.Ha = function(a) {
        this.Ua = a;
        this.b = a.b
    };
    a.Ha.prototype.Y = function() {};
    a.wa = function(a) {
        this.type = a;
        this.b = a.b
    };
    var b = a.wa.prototype;
    b.Y = function() {
        this.gs = this.hs = 0
    };
    b.of = function() {};
    b.nc = function() {
        return {}
    };
    b.Ec = function() {};
    h.prototype.Kz = function(a) {
        return r === a
    };
    h.prototype.Cz = function() {
        return !0
    };
    h.prototype.Ht = function(a) {
        return r === a
    };
    h.prototype.Bz = function() {
        return !0
    };
    h.prototype.Jz = function(a) {
        return r === a
    };
    h.prototype.uh = function() {
        return !0
    };
    h.prototype.Gt = function(a) {
        return r === a
    };
    h.prototype.It = function(a) {
        return r === a
    };
    h.prototype.yz = function() {
        return !0
    };
    h.prototype.xz = function() {
        return !0
    };
    a.e = new h;
    e.prototype.lA = function(a, b) {
        if (ed) f(this);
        else {
            var e = d + a;
            this.hs++;
            var h = this;
            localforage.setItem(e, b, function(b, d) {
                h.hs--;
                b ? h.b.trigger(hd.prototype.e.uh, h) : (r = a, m = d, h.b.trigger(hd.prototype.e.Cz, h), h.b.trigger(hd.prototype.e.Kz, h), m = r = "");
                0 === h.hs && h.b.trigger(hd.prototype.e.yz, h)
            })
        }
    };
    e.prototype.$y = function(a) {
        if (ed) f(this);
        else {
            var b = d + a;
            this.gs++;
            var e = this;
            localforage.getItem(b, function(b, d) {
                e.gs--;
                if (b) e.b.trigger(hd.prototype.e.uh, e);
                else {
                    r = a;
                    m = d;
                    if ("undefined" === typeof m || null === m) m = "";
                    e.b.trigger(hd.prototype.e.Bz, e);
                    e.b.trigger(hd.prototype.e.Ht, e);
                    m = r = ""
                }
                0 === e.gs && e.b.trigger(hd.prototype.e.xz, e)
            })
        }
    };
    e.prototype.Fy = function(a) {
        if (ed) f(this);
        else {
            var b = this;
            localforage.getItem(d + a, function(d, e) {
                d ? b.b.trigger(hd.prototype.e.uh, b) : (r = a, null === e ? (m = "", b.b.trigger(hd.prototype.e.It, b)) : (m = e, b.b.trigger(hd.prototype.e.Gt, b)), m = r = "")
            })
        }
    };
    a.k = new e;
    l.prototype.oz = function(a) {
        a.Ml(m)
    };
    a.H = new l
})();

function id(f) {
    this.b = f
}
(function() {
    function f(e) {
        this.jb = e;
        this.Ya = !1;
        this.j = this.speed = this.y = this.x = 0;
        this.opacity = 1;
        this.wg = this.$i = this.size = this.ln = 0
    }

    function h() {}
    var e = id.prototype;
    e.Ha = function(e) {
        this.Ua = e;
        this.b = e.b
    };
    var l = e.Ha.prototype;
    l.Y = function() {
        this.U || (this.aa = new Image, this.aa.nq = this.Zo, this.Ma = null, this.b.mt(this.aa, this.Wl))
    };
    l.Un = function() {
        this.U || (this.Ma = null)
    };
    l.Wn = function() {
        this.U || !this.d.length || this.Ma || (this.Ma = this.b.M.fi(this.aa, !0, this.b.ib, this.Xl))
    };
    l.Hr = function() {
        this.U || this.Ma || !this.b.M || (this.Ma = this.b.M.fi(this.aa, !0, this.b.ib, this.Xl))
    };
    l.gp = function() {
        this.U || this.d.length || !this.Ma || (this.b.M.deleteTexture(this.Ma), this.Ma = null)
    };
    l.vo = function(e) {
        e.drawImage(this.aa, 0, 0)
    };
    f.prototype.init = function() {
        var e = this.jb;
        this.x = e.x - e.tp / 2 + Math.random() * e.tp;
        this.y = e.y - e.up / 2 + Math.random() * e.up;
        this.speed = e.fr - e.Qo / 2 + Math.random() * e.Qo;
        this.j = e.j - e.Ro / 2 + Math.random() * e.Ro;
        this.opacity = e.dr;
        this.size = e.er - e.Po / 2 + Math.random() * e.Po;
        this.ln = e.Uq - e.mn / 2 + Math.random() * e.mn;
        this.wg = this.$i = 0
    };
    f.prototype.Hb = function(e) {
        var d = this.jb;
        this.x += Math.cos(this.j) * this.speed * e;
        this.y += Math.sin(this.j) * this.speed * e;
        this.y += this.$i * e;
        this.speed += d.Np * e;
        this.size += this.ln * e;
        this.$i += d.Gq * e;
        this.wg += e;
        1 > this.size ? this.Ya = !1 : (0 !== d.dl && (this.j += Math.random() * d.dl * e - d.dl * e / 2), 0 !== d.fl && (this.speed += Math.random() * d.fl * e - d.fl * e / 2), 0 !== d.el && (this.opacity += Math.random() * d.el * e - d.el * e / 2, 0 > this.opacity ? this.opacity = 0 : 1 < this.opacity && (this.opacity = 1)), 1 >= d.Ni && this.wg >= d.timeout && (this.Ya = !1), 2 === d.Ni && 0 >= this.speed && (this.Ya = !1))
    };
    f.prototype.Ad = function(e) {
        var d = this.jb.opacity * this.opacity;
        if (0 !== d) {
            0 === this.jb.Ni && (d *= 1 - this.wg / this.jb.timeout);
            e.globalAlpha = d;
            var d = this.x - this.size / 2,
                a = this.y - this.size / 2;
            this.jb.b.Xd && (d = d + .5 | 0, a = a + .5 | 0);
            e.drawImage(this.jb.type.aa, d, a, this.size, this.size)
        }
    };
    f.prototype.Nc = function(e) {
        var d = this.jb.opacity * this.opacity;
        0 === this.jb.Ni && (d *= 1 - this.wg / this.jb.timeout);
        var a = this.size,
            b = a * this.jb.bx,
            c = this.x - a / 2,
            g = this.y - a / 2;
        this.jb.b.Xd && (c = c + .5 | 0, g = g + .5 | 0);
        1 > b || 0 === d || (b < e.iE || b > e.Nr ? (e.mh(d), e.ih(c, g, c + a, g, c + a, g + a, c, g + a)) : e.zE(this.x, this.y, b, d))
    };
    f.prototype.left = function() {
        return this.x - this.size / 2
    };
    f.prototype.right = function() {
        return this.x + this.size / 2
    };
    f.prototype.top = function() {
        return this.y - this.size / 2
    };
    f.prototype.bottom = function() {
        return this.y + this.size / 2
    };
    e.wa = function(e) {
        this.type = e;
        this.b = e.b
    };
    var l = e.wa.prototype,
        r = [];
    l.Y = function() {
        var e = this.D;
        this.Bj = e[0];
        this.Ro = bb(e[1]);
        this.Jj = e[2];
        this.Ls = !0;
        this.fr = e[3];
        this.er = e[4];
        this.dr = e[5] / 100;
        this.Uq = e[6];
        this.tp = e[7];
        this.up = e[8];
        this.Qo = e[9];
        this.Po = e[10];
        this.mn = e[11];
        this.Np = e[12];
        this.Gq = e[13];
        this.dl = e[14];
        this.fl = e[15];
        this.el = e[16];
        this.Ni = e[17];
        this.timeout = e[18];
        this.ni = 0;
        this.bx = 1;
        this.co = this.x;
        this.fo = this.y;
        this.eo = this.x;
        this.bo = this.y;
        this.UA(function(d) {
            d.lb.set(d.co, d.fo, d.eo, d.bo);
            d.Lc.Ij(d.lb);
            d.wm = !1;
            d.ht();
            d.qy()
        });
        this.Jd || (this.bd = []);
        this.b.Zl(this);
        this.type.Hr();
        if (1 === this.Jj)
            for (e = 0; e < this.Bj; e++) this.Qp().opacity = 0;
        this.an = !0
    };
    l.nc = function() {
        var e = {
                r: this.Bj,
                sc: this.Ro,
                st: this.Jj,
                s: this.Ls,
                isp: this.fr,
                isz: this.er,
                io: this.dr,
                gr: this.Uq,
                xr: this.tp,
                yr: this.up,
                spr: this.Qo,
                szr: this.Po,
                grnd: this.mn,
                acc: this.Np,
                g: this.Gq,
                lar: this.dl,
                lsr: this.fl,
                lor: this.el,
                dm: this.Ni,
                to: this.timeout,
                pcc: this.ni,
                ft: this.an,
                p: []
            },
            d, a, b, c = e.p;
        d = 0;
        for (a = this.bd.length; d < a; d++) b = this.bd[d], c.push([b.x, b.y, b.speed, b.j, b.opacity, b.ln, b.size, b.$i, b.wg]);
        return e
    };
    l.Ec = function(e) {
        this.Bj = e.r;
        this.Ro = e.sc;
        this.Jj = e.st;
        this.Ls = e.s;
        this.fr = e.isp;
        this.er = e.isz;
        this.dr = e.io;
        this.Uq = e.gr;
        this.tp = e.xr;
        this.up = e.yr;
        this.Qo = e.spr;
        this.Po = e.szr;
        this.mn = e.grnd;
        this.Np = e.acc;
        this.Gq = e.g;
        this.dl = e.lar;
        this.fl = e.lsr;
        this.el = e.lor;
        this.Ni = e.dm;
        this.timeout = e.to;
        this.ni = e.pcc;
        this.an = e.ft;
        r.push.apply(r, this.bd);
        B(this.bd);
        var d, a, b, c = e.p;
        e = 0;
        for (d = c.length; e < d; e++) a = this.Qp(), b = c[e], a.x = b[0], a.y = b[1], a.speed = b[2], a.j = b[3], a.opacity = b[4], a.ln = b[5], a.size = b[6], a.$i = b[7], a.wg = b[8]
    };
    l.of = function() {
        r.push.apply(r, this.bd);
        B(this.bd)
    };
    l.Qp = function() {
        var e;
        r.length ? (e = r.pop(), e.jb = this) : e = new f(this);
        this.bd.push(e);
        e.Ya = !0;
        return e
    };
    l.Hb = function() {
        var e = this.b.Vi(this),
            d, a, b, c;
        if (0 === this.Jj && this.Ls)
            for (this.ni += e * this.Bj, a = Ja(this.ni), this.ni -= a, d = 0; d < a; d++) b = this.Qp(), b.init();
        this.co = this.x;
        this.fo = this.y;
        this.eo = this.x;
        this.bo = this.y;
        c = d = 0;
        for (a = this.bd.length; d < a; d++) b = this.bd[d], this.bd[c] = b, this.b.O = !0, 1 === this.Jj && this.an && b.init(), b.Hb(e), b.Ya ? (b.left() < this.co && (this.co = b.left()), b.right() > this.eo && (this.eo = b.right()), b.top() < this.fo && (this.fo = b.top()), b.bottom() > this.bo && (this.bo = b.bottom()), c++) : r.push(b);
        Va(this.bd, c);
        this.gb();
        this.an = !1;
        1 === this.Jj && 0 === this.bd.length && this.b.sg(this)
    };
    l.Ad = function(e) {
        var d, a, b, c = this.q;
        d = 0;
        for (a = this.bd.length; d < a; d++) b = this.bd[d], b.right() >= c.Va && b.bottom() >= c.Wa && b.left() <= c.ab && b.top() <= c.$a && b.Ad(e)
    };
    l.Nc = function(e) {
        this.bx = this.q.Rd();
        e.qd(this.type.Ma);
        var d, a, b, c = this.q;
        d = 0;
        for (a = this.bd.length; d < a; d++) b = this.bd[d], b.right() >= c.Va && b.bottom() >= c.Wa && b.left() <= c.ab && b.top() <= c.$a && b.Nc(e)
    };
    e.e = new function() {};
    h.prototype.Gp = function(e) {
        this.Xb = e;
        this.fe = Cb(e);
        Db(this, e, this.b.L);
        this.b.O = !0
    };
    e.k = new h;
    e.H = new function() {}
})();
ed = !1;
try {
    ! function() {
        var f, h, e;
        ! function() {
            var l = {},
                r = {};
            f = function(e, d, a) {
                l[e] = {
                    uq: d,
                    Zp: a
                }
            };
            e = h = function(f) {
                function d(a) {
                    if ("." !== a.charAt(0)) return a;
                    a = a.split("/");
                    for (var b = f.split("/").slice(0, -1), c = 0, d = a.length; d > c; c++) {
                        var e = a[c];
                        ".." === e ? b.pop() : "." !== e && b.push(e)
                    }
                    return b.join("/")
                }
                if (e.NA = l, r[f]) return r[f];
                if (r[f] = {}, !l[f]) throw Error("Could not find module " + f);
                for (var a, b = l[f], c = b.uq, b = b.Zp, g = [], k = 0, p = c.length; p > k; k++) "exports" === c[k] ? g.push(a = {}) : g.push(h(d(c[k])));
                c = b.apply(this, g);
                return r[f] = a || c
            }
        }();
        f("promise/all", ["./utils", "exports"], function(e, f) {
            var h = e.isArray,
                d = e.isFunction;
            f.all = function(a) {
                if (!h(a)) throw new TypeError("You must pass an array to all.");
                return new this(function(b, c) {
                    function e(a) {
                        return function(c) {
                            h[a] = c;
                            0 === --l && b(h)
                        }
                    }
                    var f, h = [],
                        l = a.length;
                    0 === l && b([]);
                    for (var r = 0; r < a.length; r++)(f = a[r]) && d(f.then) ? f.then(e(r), c) : (h[r] = f, 0 === --l && b(h))
                })
            }
        });
        f("promise/asap", ["exports"], function(e) {
            function f() {
                return function() {
                    process.kE(a)
                }
            }

            function h() {
                var b = 0,
                    c = new g(a),
                    d = document.createTextNode("");
                return c.observe(d, {
                        characterData: !0
                    }),
                    function() {
                        d.data = b = ++b % 2
                    }
            }

            function d() {
                return function() {
                    k.setTimeout(a, 1)
                }
            }

            function a() {
                for (var a = 0; a < p.length; a++) {
                    var b = p[a];
                    (0, b[0])(b[1])
                }
                p = []
            }
            var b, c = "undefined" != typeof window ? window : {},
                g = c.MutationObserver || c.WebKitMutationObserver,
                k = "undefined" != typeof global ? global : void 0 === this ? window : this,
                p = [];
            b = "undefined" != typeof process && "[object process]" === {}.toString.call(process) ? f() : g ? h() : d();
            e.Vp = function(a, c) {
                1 === p.push([a, c]) && b()
            }
        });
        f("promise/config", ["exports"], function(e) {
            var f = {
                ED: !1
            };
            e.mk = f;
            e.lq = function(e, d) {
                return 2 !== arguments.length ? f[e] : void(f[e] = d)
            }
        });
        f("promise/polyfill", ["./promise", "./utils", "exports"], function(e, f, h) {
            var d = e.Promise,
                a = f.isFunction;
            h.ms = function() {
                var b;
                b = "undefined" != typeof global ? global : "undefined" != typeof window && window.document ? window : self;
                "Promise" in b && "resolve" in b.Promise && "reject" in b.Promise && "all" in b.Promise && "race" in b.Promise && function() {
                    var c;
                    return new b.Promise(function(a) {
                        c = a
                    }), a(c)
                }() || (b.Promise = d)
            }
        });
        f("promise/promise", "./config ./utils ./all ./race ./resolve ./reject ./asap exports".split(" "), function(e, f, h, d, a, b, c, g) {
            function k(a) {
                if (!u(a)) throw new TypeError("You must pass a resolver function as the first argument to the promise constructor");
                if (!(this instanceof k)) throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
                this.Cf = [];
                p(a, this)
            }

            function p(a, b) {
                function c(a) {
                    n(b, a)
                }

                function d(a) {
                    E(b, a)
                }
                try {
                    a(c, d)
                } catch (e) {
                    d(e)
                }
            }

            function q(a, b, c, d) {
                var e, g, f, k, h = u(c);
                if (h) try {
                    e = c(d), f = !0
                } catch (l) {
                    k = !0, g = l
                } else e = d, f = !0;
                z(b, e) || (h && f ? n(b, e) : k ? E(b, g) : a === Y ? n(b, e) : a === F && E(b, e))
            }

            function Q(a, b, c, d) {
                a = a.Cf;
                var e = a.length;
                a[e] = b;
                a[e + Y] = c;
                a[e + F] = d
            }

            function J(a, b) {
                for (var c, d, e = a.Cf, g = a.Bf, f = 0; f < e.length; f += 3) c = e[f], d = e[f + b], q(b, c, d, g);
                a.Cf = null
            }

            function z(a, b) {
                var c, d = null;
                try {
                    if (a === b) throw new TypeError("A promises callback cannot return that same promise.");
                    if (x(b) && (d = b.then, u(d))) return d.call(b, function(d) {
                        return c ? !0 : (c = !0, void(b !== d ? n(a, d) : D(a, d)))
                    }, function(b) {
                        return c ? !0 : (c = !0, void E(a, b))
                    }), !0
                } catch (e) {
                    return c ? !0 : (E(a, e), !0)
                }
                return !1
            }

            function n(a, b) {
                a === b ? D(a, b) : z(a, b) || D(a, b)
            }

            function D(a, b) {
                a.qc === G && (a.qc = L, a.Bf = b, y.async(w, a))
            }

            function E(a, b) {
                a.qc === G && (a.qc = L, a.Bf = b, y.async(v, a))
            }

            function w(a) {
                J(a, a.qc = Y)
            }

            function v(a) {
                J(a, a.qc = F)
            }
            var y = e.mk,
                x = (e.lq, f.Wr),
                u = f.isFunction;
            e = (f.now, h.all);
            d = d.race;
            a = a.resolve;
            b = b.reject;
            y.async = c.Vp;
            var G = void 0,
                L = 0,
                Y = 1,
                F = 2;
            k.prototype = {
                constructor: k,
                qc: void 0,
                Bf: void 0,
                Cf: void 0,
                then: function(a, b) {
                    var c = this,
                        d = new this.constructor(function() {});
                    if (this.qc) {
                        var e = arguments;
                        y.async(function() {
                            q(c.qc, d, e[c.qc - 1], c.Bf)
                        })
                    } else Q(this, d, a, b);
                    return d
                },
                "catch": function(a) {
                    return this.then(null, a)
                }
            };
            k.all = e;
            k.race = d;
            k.resolve = a;
            k.reject = b;
            g.Promise = k
        });
        f("promise/race", ["./utils", "exports"], function(e, f) {
            var h = e.isArray;
            f.race = function(d) {
                if (!h(d)) throw new TypeError("You must pass an array to race.");
                return new this(function(a, b) {
                    for (var c, e = 0; e < d.length; e++)(c = d[e]) && "function" == typeof c.then ? c.then(a, b) : a(c)
                })
            }
        });
        f("promise/reject", ["exports"], function(e) {
            e.reject = function(e) {
                return new this(function(f, d) {
                    d(e)
                })
            }
        });
        f("promise/resolve", ["exports"], function(e) {
            e.resolve = function(e) {
                return e && "object" == typeof e && e.constructor === this ? e : new this(function(f) {
                    f(e)
                })
            }
        });
        f("promise/utils", ["exports"], function(e) {
            function f(d) {
                return "function" == typeof d
            }
            var h = Date.now || function() {
                return (new Date).getTime()
            };
            e.Wr = function(d) {
                return f(d) || "object" == typeof d && null !== d
            };
            e.isFunction = f;
            e.isArray = function(d) {
                return "[object Array]" === Object.prototype.toString.call(d)
            };
            e.now = h
        });
        h("promise/polyfill").ms()
    }();
    var jd = function() {
        return function(f) {
            function h(l) {
                if (e[l]) return e[l].Lb;
                var r = e[l] = {
                    Lb: {},
                    id: l,
                    loaded: !1
                };
                return f[l].call(r.Lb, r, r.Lb, h), r.loaded = !0, r.Lb
            }
            var e = {};
            return h.Zg = f, h.If = e, h.ca = "", h(0)
        }([
            function(f, h, e) {
                h.Af = !0;
                var l = function(f) {
                    function h(a, b) {
                        a[b] = function() {
                            var c = arguments;
                            return a.ready().then(function() {
                                return a[b].apply(a, c)
                            })
                        }
                    }

                    function d() {
                        for (var a = 1; a < arguments.length; a++) {
                            var b = arguments[a];
                            if (b)
                                for (var c in b) b.hasOwnProperty(c) && (q(b[c]) ? arguments[0][c] = b[c].slice() : arguments[0][c] = b[c])
                        }
                        return arguments[0]
                    }

                    function a(a) {
                        for (var b in c)
                            if (c.hasOwnProperty(b) && c[b] === a) return !0;
                        return !1
                    }
                    var b = {},
                        c = {
                            Ae: "asyncStorage",
                            Be: "localStorageWrapper",
                            Ce: "webSQLStorage"
                        },
                        g = "clear getItem iterate key keys length removeItem setItem".split(" "),
                        k = {
                            description: "",
                            Nd: [c.Ae, c.Ce, c.Be].slice(),
                            name: "localforage",
                            size: 4980736,
                            G: "keyvaluepairs",
                            version: 1
                        },
                        l = function(a) {
                            var b = {},
                                d;
                            try {
                                var e = e || a.indexedDB || a.webkitIndexedDB || a.mozIndexedDB || a.sh || a.msIndexedDB;
                                d = "undefined" != typeof a.openDatabase && a.navigator && a.navigator.userAgent && /Safari/.test(a.navigator.userAgent) && !/Chrome/.test(a.navigator.userAgent) ? !1 : e && "function" == typeof e.open && "undefined" != typeof a.IDBKeyRange
                            } catch (g) {
                                d = !1
                            }
                            b[c.Ae] = !!d;
                            var f;
                            try {
                                f = a.openDatabase
                            } catch (k) {
                                f = !1
                            }
                            b[c.Ce] = !!f;
                            var h;
                            try {
                                h = a.localStorage && "setItem" in a.localStorage && a.localStorage.setItem
                            } catch (l) {
                                h = !1
                            }
                            return b[c.Be] = !!h, b
                        }(f),
                        q = Array.isArray || function(a) {
                            return "[object Array]" === Object.prototype.toString.call(a)
                        };
                    return new(function() {
                        function f(a) {
                            if (!(this instanceof f)) throw new TypeError("Cannot call a class as a function");
                            this.Ae = c.Ae;
                            this.Be = c.Be;
                            this.Ce = c.Ce;
                            this.vh = d({}, k);
                            this.gd = d({}, this.vh, a);
                            this.fk = this.Ib = null;
                            this.Jc = !1;
                            this.F = null;
                            this.gk();
                            this.Il(this.gd.Nd)
                        }
                        return f.prototype.mk = function(a) {
                            if ("object" == typeof a) {
                                if (this.Jc) return Error("Can't call config() after localforage has been used.");
                                for (var b in a) "storeName" === b && (a[b] = a[b].replace(/\W/g, "_")), this.gd[b] = a[b];
                                return "driver" in a && a.Nd && this.Il(this.gd.Nd), !0
                            }
                            return "string" == typeof a ? this.gd[a] : this.gd
                        }, f.prototype.Nd = function() {
                            return this.De || null
                        }, f.prototype.Ek = function(c, d, g) {
                            var f = this,
                                k = function() {
                                    if (a(c)) switch (c) {
                                        case f.Ae:
                                            return new Promise(function(a) {
                                                a(e(1))
                                            });
                                        case f.Be:
                                            return new Promise(function(a) {
                                                a(e(2))
                                            });
                                        case f.Ce:
                                            return new Promise(function(a) {
                                                a(e(4))
                                            })
                                    } else if (b[c]) return Promise.resolve(b[c]);
                                    return Promise.reject(Error("Driver not found."))
                                }();
                            return k.then(d, g), k
                        }, f.prototype.ready = function(a) {
                            var b = this,
                                c = b.Ib.then(function() {
                                    return null === b.Jc && (b.Jc = b.fk()), b.Jc
                                });
                            return c.then(a, a), c
                        }, f.prototype.Il = function(a, b, c) {
                            function d() {
                                g.gd.Nd = g.Nd()
                            }

                            function e(a) {
                                return function() {
                                    function b() {
                                        for (; c < a.length;) {
                                            var e = a[c];
                                            return c++, g.F = null, g.Jc = null, g.Ek(e).then(function(a) {
                                                return g.Lp(a), d(), g.Jc = g.xh(g.gd), g.Jc
                                            })["catch"](b)
                                        }
                                        d();
                                        return g.Ib = Promise.reject(Error("No available storage method found.")), g.Ib
                                    }
                                    var c = 0;
                                    return b()
                                }
                            }
                            var g = this;
                            q(a) || (a = [a]);
                            var f = this.Mp(a);
                            return this.Ib = (null !== this.Ib ? this.Ib["catch"](function() {
                                return Promise.resolve()
                            }) : Promise.resolve()).then(function() {
                                var a = f[0];
                                return g.F = null, g.Jc = null, g.Ek(a).then(function(a) {
                                    g.De = a.De;
                                    d();
                                    g.gk();
                                    g.fk = e(f)
                                })
                            })["catch"](function() {
                                d();
                                return g.Ib = Promise.reject(Error("No available storage method found.")), g.Ib
                            }), this.Ib.then(b, c), this.Ib
                        }, f.prototype.supports = function(a) {
                            return !!l[a]
                        }, f.prototype.Lp = function(a) {
                            d(this, a)
                        }, f.prototype.Mp = function(a) {
                            for (var b = [], c = 0, d = a.length; d > c; c++) {
                                var e = a[c];
                                this.supports(e) && b.push(e)
                            }
                            return b
                        }, f.prototype.gk = function() {
                            for (var a = 0; a < g.length; a++) h(this, g[a])
                        }, f.prototype.Im = function(a) {
                            return new f(a)
                        }, f
                    }())
                }("undefined" != typeof window ? window : self);
                h["default"] = l;
                f.Lb = h["default"]
            },
            function(f, h) {
                h.Af = !0;
                h["default"] = function(e) {
                    function f(a, b) {
                        a = a || [];
                        b = b || {};
                        try {
                            return new Blob(a, b)
                        } catch (c) {
                            if ("TypeError" !== c.name) throw c;
                            for (var d = new(e.BlobBuilder || e.Oe || e.Tg || e.WebKitBlobBuilder), g = 0; g < a.length; g += 1) d.append(a[g]);
                            return d.getBlob(b.type)
                        }
                    }

                    function h(a) {
                        return new Promise(function(b, c) {
                            var d = new XMLHttpRequest;
                            d.open("GET", a);
                            d.withCredentials = !0;
                            d.responseType = "arraybuffer";
                            d.onreadystatechange = function() {
                                return 4 === d.readyState ? 200 === d.status ? b({
                                    response: d.response,
                                    type: d.getResponseHeader("Content-Type")
                                }) : void c({
                                    status: d.status,
                                    response: d.response
                                }) : void 0
                            };
                            d.send()
                        })
                    }

                    function m(a) {
                        return (new Promise(function(b, c) {
                            var d = f([""], {
                                    type: "image/png"
                                }),
                                e = a.transaction([G], "readwrite");
                            e.objectStore(G).put(d, "key");
                            e.oncomplete = function() {
                                var d = a.transaction([G], "readwrite").objectStore(G).get("key");
                                d.onerror = c;
                                d.onsuccess = function(a) {
                                    var c = URL.createObjectURL(a.target.result);
                                    h(c).then(function(a) {
                                        b(!(!a || "image/png" !== a.type))
                                    }, function() {
                                        b(!1)
                                    }).then(function() {
                                        URL.revokeObjectURL(c)
                                    })
                                }
                            };
                            e.onerror = e.onabort = c
                        }))["catch"](function() {
                            return !1
                        })
                    }

                    function d(a) {
                        return "boolean" == typeof x ? Promise.resolve(x) : m(a).then(function(a) {
                            return x = a
                        })
                    }

                    function a(a) {
                        return new Promise(function(b, c) {
                            var d = new FileReader;
                            d.onerror = c;
                            d.onloadend = function(c) {
                                b({
                                    ek: !0,
                                    data: btoa(c.target.result || ""),
                                    type: a.type
                                })
                            };
                            d.readAsBinaryString(a)
                        })
                    }

                    function b(a) {
                        for (var b = atob(a.data), c = b.length, d = new ArrayBuffer(c), e = new Uint8Array(d), g = 0; c > g; g++) e[g] = b.charCodeAt(g);
                        return f([d], {
                            type: a.type
                        })
                    }

                    function c(a) {
                        var b = this,
                            c = b.wh().then(function() {
                                var a = u[b.F.name];
                                return a && a.Md ? a.Md : void 0
                            });
                        return c.then(a, a), c
                    }

                    function g(a) {
                        a = u[a.name];
                        var b = {};
                        b.promise = new Promise(function(a) {
                            b.resolve = a
                        });
                        a.sk.push(b);
                        a.Md ? a.Md = a.Md.then(function() {
                            return b.promise
                        }) : a.Md = b.promise
                    }

                    function k(a) {
                        function b() {
                            return Promise.resolve()
                        }
                        var d = this,
                            g = {
                                db: null
                            };
                        if (a)
                            for (var f in a) g[f] = a[f];
                        u || (u = {});
                        var k = u[g.name];
                        k || (k = {
                            Sf: [],
                            db: null,
                            Md: null,
                            sk: []
                        }, u[g.name] = k);
                        k.Sf.push(d);
                        d.wh || (d.wh = d.ready, d.ready = c);
                        a = [];
                        for (f = 0; f < k.Sf.length; f++) {
                            var h = k.Sf[f];
                            h !== d && a.push(h.wh()["catch"](b))
                        }
                        var l = k.Sf.slice(0);
                        return Promise.all(a).then(function() {
                            return g.db = k.db, p(g, !1)
                        }).then(function(a) {
                            g.db = a;
                            var b;
                            b = d.vh.version;
                            if (g.db) {
                                var c = !g.db.objectStoreNames.contains(g.G),
                                    f = g.version > g.db.version;
                                (g.version < g.db.version && (g.version !== b && e.console.warn('The database "' + g.name + "\" can't be downgraded from version " + g.db.version + " to version " + g.version + "."), g.version = g.db.version), f || c) ? (c && (b = g.db.version + 1, b > g.version && (g.version = b)), b = !0) : b = !1
                            } else b = !0;
                            return b ? p(g, !0) : a
                        }).then(function(a) {
                            g.db = k.db = a;
                            d.F = g;
                            for (a = 0; a < l.length; a++) {
                                var b = l[a];
                                b !== d && (b.F.db = g.db, b.F.version = g.version)
                            }
                        })
                    }

                    function p(a, b) {
                        return new Promise(function(c, d) {
                            if (a.db) {
                                if (!b) return c(a.db);
                                g(a);
                                a.db.close()
                            }
                            var f = [a.name];
                            b && f.push(a.version);
                            var k = y.open.apply(y, f);
                            b && (k.onupgradeneeded = function(b) {
                                var c = k.result;
                                try {
                                    c.createObjectStore(a.G), 1 >= b.oldVersion && c.createObjectStore(G)
                                } catch (d) {
                                    if ("ConstraintError" !== d.name) throw d;
                                    e.console.warn('The database "' + a.name + '" has been upgraded from version ' + b.oldVersion + " to version " + b.newVersion + ', but the storage "' + a.G + '" already exists.')
                                }
                            });
                            k.onerror = function() {
                                d(k.error)
                            };
                            k.onsuccess = function() {
                                c(k.result);
                                var b = u[a.name].sk.pop();
                                b && b.resolve()
                            }
                        })
                    }

                    function q(a, c) {
                        var d = this;
                        "string" != typeof a && (e.console.warn(a + " used as a key, but it is not a string."), a = String(a));
                        var g = new Promise(function(c, e) {
                            d.ready().then(function() {
                                var g = d.F,
                                    f = g.db.transaction(g.G, "readonly").objectStore(g.G).get(a);
                                f.onsuccess = function() {
                                    var a = f.result;
                                    void 0 === a && (a = null);
                                    a && a.ek && (a = b(a));
                                    c(a)
                                };
                                f.onerror = function() {
                                    e(f.error)
                                }
                            })["catch"](e)
                        });
                        return v(g, c), g
                    }

                    function Q(a, c) {
                        var d = this,
                            e = new Promise(function(c, e) {
                                d.ready().then(function() {
                                    var g = d.F,
                                        f = g.db.transaction(g.G, "readonly").objectStore(g.G).openCursor(),
                                        k = 1;
                                    f.onsuccess = function() {
                                        var d = f.result;
                                        if (d) {
                                            var e = d.value;
                                            e && e.ek && (e = b(e));
                                            e = a(e, d.key, k++);
                                            void 0 !== e ? c(e) : d["continue"]()
                                        } else c()
                                    };
                                    f.onerror = function() {
                                        e(f.error)
                                    }
                                })["catch"](e)
                            });
                        return v(e, c), e
                    }

                    function J(b, c, g) {
                        var f = this;
                        "string" != typeof b && (e.console.warn(b + " used as a key, but it is not a string."), b = String(b));
                        var k = new Promise(function(e, g) {
                            var k;
                            f.ready().then(function() {
                                return k = f.F, c instanceof Blob ? d(k.db).then(function(b) {
                                    return b ? c : a(c)
                                }) : c
                            }).then(function(a) {
                                var c = k.db.transaction(k.G, "readwrite"),
                                    d = c.objectStore(k.G);
                                null === a && (a = void 0);
                                c.oncomplete = function() {
                                    void 0 === a && (a = null);
                                    e(a)
                                };
                                c.onabort = c.onerror = function() {
                                    g(f.error ? f.error : f.transaction.error)
                                };
                                var f = d.put(a, b)
                            })["catch"](g)
                        });
                        return v(k, g), k
                    }

                    function z(a, b) {
                        var c = this;
                        "string" != typeof a && (e.console.warn(a + " used as a key, but it is not a string."), a = String(a));
                        var d = new Promise(function(b, d) {
                            c.ready().then(function() {
                                var e = c.F,
                                    g = e.db.transaction(e.G, "readwrite"),
                                    f = g.objectStore(e.G)["delete"](a);
                                g.oncomplete = function() {
                                    b()
                                };
                                g.onerror = function() {
                                    d(f.error)
                                };
                                g.onabort = function() {
                                    d(f.error ? f.error : f.transaction.error)
                                }
                            })["catch"](d)
                        });
                        return v(d, b), d
                    }

                    function n(a) {
                        var b = this,
                            c = new Promise(function(a, c) {
                                b.ready().then(function() {
                                    var d = b.F,
                                        e = d.db.transaction(d.G, "readwrite"),
                                        g = e.objectStore(d.G).clear();
                                    e.oncomplete = function() {
                                        a()
                                    };
                                    e.onabort = e.onerror = function() {
                                        c(g.error ? g.error : g.transaction.error)
                                    }
                                })["catch"](c)
                            });
                        return v(c, a), c
                    }

                    function D(a) {
                        var b = this,
                            c = new Promise(function(a, c) {
                                b.ready().then(function() {
                                    var d = b.F,
                                        e = d.db.transaction(d.G, "readonly").objectStore(d.G).count();
                                    e.onsuccess = function() {
                                        a(e.result)
                                    };
                                    e.onerror = function() {
                                        c(e.error)
                                    }
                                })["catch"](c)
                            });
                        return v(c, a), c
                    }

                    function E(a, b) {
                        var c = this,
                            d = new Promise(function(b, d) {
                                return 0 > a ? void b(null) : void c.ready().then(function() {
                                    var e = c.F,
                                        g = !1,
                                        f = e.db.transaction(e.G, "readonly").objectStore(e.G).openCursor();
                                    f.onsuccess = function() {
                                        var c = f.result;
                                        return c ? void(0 === a ? b(c.key) : g ? b(c.key) : (g = !0, c.advance(a))) : void b(null)
                                    };
                                    f.onerror = function() {
                                        d(f.error)
                                    }
                                })["catch"](d)
                            });
                        return v(d, b), d
                    }

                    function w(a) {
                        var b = this,
                            c = new Promise(function(a, c) {
                                b.ready().then(function() {
                                    var d = b.F,
                                        e = d.db.transaction(d.G, "readonly").objectStore(d.G).openCursor(),
                                        g = [];
                                    e.onsuccess = function() {
                                        var b = e.result;
                                        return b ? (g.push(b.key), void b["continue"]()) : void a(g)
                                    };
                                    e.onerror = function() {
                                        c(e.error)
                                    }
                                })["catch"](c)
                            });
                        return v(c, a), c
                    }

                    function v(a, b) {
                        b && a.then(function(a) {
                            b(null, a)
                        }, function(a) {
                            b(a)
                        })
                    }
                    var y = y || e.indexedDB || e.webkitIndexedDB || e.mozIndexedDB || e.sh || e.msIndexedDB;
                    if (y) {
                        var x, u, G = "local-forage-detect-blob-support";
                        return {
                            De: "asyncStorage",
                            xh: k,
                            Xk: Q,
                            getItem: q,
                            setItem: J,
                            removeItem: z,
                            clear: n,
                            length: D,
                            key: E,
                            keys: w
                        }
                    }
                }("undefined" != typeof window ? window : self);
                f.Lb = h["default"]
            },
            function(f, h, e) {
                h.Af = !0;
                h["default"] = function(f) {
                    function h(a, b) {
                        b && a.then(function(a) {
                            b(null, a)
                        }, function(a) {
                            b(a)
                        })
                    }
                    var m = null;
                    try {
                        if (!(f.localStorage && "setItem" in f.localStorage)) return;
                        m = f.localStorage
                    } catch (d) {
                        return
                    }
                    return {
                        De: "localStorageWrapper",
                        xh: function(a) {
                            var b = {};
                            if (a)
                                for (var c in a) b[c] = a[c];
                            return b.Pb = b.name + "/", b.G !== this.vh.G && (b.Pb += b.G + "/"), this.F = b, (new Promise(function(a) {
                                a(e(3))
                            })).then(function(a) {
                                return b.od = a, Promise.resolve()
                            })
                        },
                        Xk: function(a, b) {
                            var c = this,
                                d = c.ready().then(function() {
                                    for (var b = c.F, d = b.Pb, e = d.length, g = m.length, f = 1, h = 0; g > h; h++) {
                                        var l = m.key(h);
                                        if (0 === l.indexOf(d)) {
                                            var r = m.getItem(l);
                                            if (r && (r = b.od.Nf(r)), r = a(r, l.substring(e), f++), void 0 !== r) return r
                                        }
                                    }
                                });
                            return h(d, b), d
                        },
                        getItem: function(a, b) {
                            var c = this;
                            "string" != typeof a && (f.console.warn(a +
                                " used as a key, but it is not a string."), a = String(a));
                            var d = c.ready().then(function() {
                                var b = c.F,
                                    d = m.getItem(b.Pb + a);
                                return d && (d = b.od.Nf(d)), d
                            });
                            return h(d, b), d
                        },
                        setItem: function(a, b, c) {
                            var d = this;
                            "string" != typeof a && (f.console.warn(a + " used as a key, but it is not a string."), a = String(a));
                            var e = d.ready().then(function() {
                                void 0 === b && (b = null);
                                var c = b;
                                return new Promise(function(e, f) {
                                    var k = d.F;
                                    k.od.serialize(b, function(b, d) {
                                        if (d) f(d);
                                        else try {
                                            m.setItem(k.Pb + a, b), e(c)
                                        } catch (g) {
                                            "QuotaExceededError" !== g.name && "NS_ERROR_DOM_QUOTA_REACHED" !== g.name || f(g), f(g)
                                        }
                                    })
                                })
                            });
                            return h(e, c), e
                        },
                        removeItem: function(a, b) {
                            var c = this;
                            "string" != typeof a && (f.console.warn(a + " used as a key, but it is not a string."), a = String(a));
                            var d = c.ready().then(function() {
                                m.removeItem(c.F.Pb + a)
                            });
                            return h(d, b), d
                        },
                        clear: function(a) {
                            var b = this,
                                c = b.ready().then(function() {
                                    for (var a = b.F.Pb, c = m.length - 1; 0 <= c; c--) {
                                        var d = m.key(c);
                                        0 === d.indexOf(a) && m.removeItem(d)
                                    }
                                });
                            return h(c, a), c
                        },
                        length: function(a) {
                            var b = this.keys().then(function(a) {
                                return a.length
                            });
                            return h(b, a), b
                        },
                        key: function(a, b) {
                            var c = this,
                                d = c.ready().then(function() {
                                    var b, d = c.F;
                                    try {
                                        b = m.key(a)
                                    } catch (e) {
                                        b = null
                                    }
                                    return b && (b = b.substring(d.Pb.length)), b
                                });
                            return h(d, b), d
                        },
                        keys: function(a) {
                            var b = this,
                                c = b.ready().then(function() {
                                    for (var a = b.F, c = m.length, d = [], e = 0; c > e; e++) 0 === m.key(e).indexOf(a.Pb) && d.push(m.key(e).substring(a.Pb.length));
                                    return d
                                });
                            return h(c, a), c
                        }
                    }
                }("undefined" != typeof window ? window : self);
                f.Lb = h["default"]
            },
            function(f, h) {
                h.Af = !0;
                h["default"] = function(e) {
                    function f(a) {
                        var b, c, d, e, h;
                        b = .75 * a.length;
                        var l = a.length,
                            r = 0;
                        "=" === a[a.length - 1] && (b--, "=" === a[a.length - 2] && b--);
                        var J = new ArrayBuffer(b),
                            z = new Uint8Array(J);
                        for (b = 0; l > b; b += 4) c = m.indexOf(a[b]), d = m.indexOf(a[b + 1]), e = m.indexOf(a[b + 2]), h = m.indexOf(a[b + 3]), z[r++] = c << 2 | d >> 4, z[r++] = (15 & d) << 4 | e >> 2, z[r++] = (3 & e) << 6 | 63 & h;
                        return J
                    }

                    function h(a) {
                        var b = new Uint8Array(a),
                            c = "";
                        for (a = 0; a < b.length; a += 3) c += m[b[a] >> 2], c += m[(3 & b[a]) << 4 | b[a + 1] >> 4], c += m[(15 & b[a + 1]) << 2 | b[a + 2] >> 6], c += m[63 & b[a + 2]];
                        return 2 === b.length % 3 ? c = c.substring(0, c.length -
                            1) + "=" : 1 === b.length % 3 && (c = c.substring(0, c.length - 2) + "=="), c
                    }
                    var m = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                        d = /^~~local_forage_type~([^~]+)~/;
                    return {
                        serialize: function(a, b) {
                            var c = "";
                            if (a && (c = a.toString()), a && ("[object ArrayBuffer]" === a.toString() || a.buffer && "[object ArrayBuffer]" === a.buffer.toString())) {
                                var d, e = "__lfsc__:";
                                a instanceof ArrayBuffer ? (d = a, e += "arbf") : (d = a.buffer, "[object Int8Array]" === c ? e += "si08" : "[object Uint8Array]" === c ? e += "ui08" : "[object Uint8ClampedArray]" === c ? e += "uic8" : "[object Int16Array]" === c ? e += "si16" : "[object Uint16Array]" === c ? e += "ur16" : "[object Int32Array]" === c ? e += "si32" : "[object Uint32Array]" === c ? e += "ui32" : "[object Float32Array]" === c ? e += "fl32" : "[object Float64Array]" === c ? e += "fl64" : b(Error("Failed to get type for BinaryArray")));
                                b(e + h(d))
                            } else if ("[object Blob]" === c) c = new FileReader, c.onload = function() {
                                var c = "~~local_forage_type~" + a.type + "~" + h(this.result);
                                b("__lfsc__:blob" + c)
                            }, c.readAsArrayBuffer(a);
                            else try {
                                b(JSON.stringify(a))
                            } catch (f) {
                                console.error("Couldn't convert value into a JSON string: ", a), b(null, f)
                            }
                        },
                        Nf: function(a) {
                            if ("__lfsc__:" !== a.substring(0, 9)) return JSON.parse(a);
                            var b, c = a.substring(13);
                            a = a.substring(9, 13);
                            if ("blob" === a && d.test(c)) {
                                var g = c.match(d);
                                b = g[1];
                                c = c.substring(g[0].length)
                            }
                            c = f(c);
                            switch (a) {
                                case "arbf":
                                    return c;
                                case "blob":
                                    var k;
                                    c = [c];
                                    b = {
                                        type: b
                                    };
                                    c = c || [];
                                    b = b || {};
                                    try {
                                        k = new Blob(c, b)
                                    } catch (h) {
                                        if ("TypeError" !== h.name) throw h;
                                        k = new(e.BlobBuilder || e.Oe || e.Tg || e.WebKitBlobBuilder);
                                        for (a = 0; a < c.length; a += 1) k.append(c[a]);
                                        k = k.getBlob(b.type)
                                    }
                                    return k;
                                case "si08":
                                    return new Int8Array(c);
                                case "ui08":
                                    return new Uint8Array(c);
                                case "uic8":
                                    return new Uint8ClampedArray(c);
                                case "si16":
                                    return new Int16Array(c);
                                case "ur16":
                                    return new Uint16Array(c);
                                case "si32":
                                    return new Int32Array(c);
                                case "ui32":
                                    return new Uint32Array(c);
                                case "fl32":
                                    return new Float32Array(c);
                                case "fl64":
                                    return new Float64Array(c);
                                default:
                                    throw Error("Unkown type: " + a);
                            }
                        },
                        CF: f,
                        hB: h
                    }
                }("undefined" != typeof window ? window : self);
                f.Lb = h["default"]
            },
            function(f, h, e) {
                h.Af = !0;
                h["default"] = function(f) {
                    function h(a) {
                        var b = this,
                            c = {
                                db: null
                            };
                        if (a)
                            for (var d in a) c[d] = "string" != typeof a[d] ? a[d].toString() : a[d];
                        var g = new Promise(function(a, d) {
                            try {
                                c.db = Q(c.name, String(c.version), c.description, c.size)
                            } catch (e) {
                                return d(e)
                            }
                            c.db.transaction(function(e) {
                                e.executeSql("CREATE TABLE IF NOT EXISTS " + c.G + " (id INTEGER PRIMARY KEY, key unique, value)", [], function() {
                                    b.F = c;
                                    a()
                                }, function(a, b) {
                                    d(b)
                                })
                            })
                        });
                        return (new Promise(function(a) {
                            a(e(3))
                        })).then(function(a) {
                            return c.od = a, g
                        })
                    }

                    function m(a, b) {
                        var c = this;
                        "string" != typeof a && (f.console.warn(a + " used as a key, but it is not a string."), a = String(a));
                        var d = new Promise(function(b, d) {
                            c.ready().then(function() {
                                var e = c.F;
                                e.db.transaction(function(c) {
                                    c.executeSql("SELECT * FROM " + e.G + " WHERE key = ? LIMIT 1", [a], function(a, c) {
                                        var d = c.rows.length ? c.rows.item(0).value : null;
                                        d && (d = e.od.Nf(d));
                                        b(d)
                                    }, function(a, b) {
                                        d(b)
                                    })
                                })
                            })["catch"](d)
                        });
                        return q(d, b), d
                    }

                    function d(a, b) {
                        var c = this,
                            d = new Promise(function(b, d) {
                                c.ready().then(function() {
                                    var e = c.F;
                                    e.db.transaction(function(c) {
                                        c.executeSql("SELECT * FROM " + e.G, [], function(c, d) {
                                            for (var g = d.rows, f = g.length, k = 0; f > k; k++) {
                                                var h = g.item(k),
                                                    l = h.value;
                                                if (l && (l = e.od.Nf(l)), l = a(l, h.key, k + 1), void 0 !== l) return void b(l)
                                            }
                                            b()
                                        }, function(a, b) {
                                            d(b)
                                        })
                                    })
                                })["catch"](d)
                            });
                        return q(d, b), d
                    }

                    function a(a, b, c) {
                        var d = this;
                        "string" != typeof a && (f.console.warn(a + " used as a key, but it is not a string."), a = String(a));
                        var e = new Promise(function(c, e) {
                            d.ready().then(function() {
                                void 0 === b && (b = null);
                                var g = b,
                                    f = d.F;
                                f.od.serialize(b, function(b, d) {
                                    d ? e(d) : f.db.transaction(function(d) {
                                        d.executeSql("INSERT OR REPLACE INTO " + f.G + " (key, value) VALUES (?, ?)", [a, b], function() {
                                            c(g)
                                        }, function(a, b) {
                                            e(b)
                                        })
                                    }, function(a) {
                                        a.code === a.QUOTA_ERR && e(a)
                                    })
                                })
                            })["catch"](e)
                        });
                        return q(e, c), e
                    }

                    function b(a, b) {
                        var c = this;
                        "string" != typeof a && (f.console.warn(a + " used as a key, but it is not a string."), a = String(a));
                        var d = new Promise(function(b, d) {
                            c.ready().then(function() {
                                var e = c.F;
                                e.db.transaction(function(c) {
                                    c.executeSql("DELETE FROM " + e.G + " WHERE key = ?", [a], function() {
                                        b()
                                    }, function(a, b) {
                                        d(b)
                                    })
                                })
                            })["catch"](d)
                        });
                        return q(d, b), d
                    }

                    function c(a) {
                        var b = this,
                            c = new Promise(function(a, c) {
                                b.ready().then(function() {
                                    var d = b.F;
                                    d.db.transaction(function(b) {
                                        b.executeSql("DELETE FROM " + d.G, [], function() {
                                            a()
                                        }, function(a, b) {
                                            c(b)
                                        })
                                    })
                                })["catch"](c)
                            });
                        return q(c, a), c
                    }

                    function g(a) {
                        var b = this,
                            c = new Promise(function(a, c) {
                                b.ready().then(function() {
                                    var d = b.F;
                                    d.db.transaction(function(b) {
                                        b.executeSql("SELECT COUNT(key) as c FROM " + d.G, [], function(b, c) {
                                            var d = c.rows.item(0).If;
                                            a(d)
                                        }, function(a, b) {
                                            c(b)
                                        })
                                    })
                                })["catch"](c)
                            });
                        return q(c, a), c
                    }

                    function k(a, b) {
                        var c = this,
                            d = new Promise(function(b, d) {
                                c.ready().then(function() {
                                    var e = c.F;
                                    e.db.transaction(function(c) {
                                        c.executeSql("SELECT key FROM " + e.G + " WHERE id = ? LIMIT 1", [a + 1], function(a, c) {
                                            var d = c.rows.length ? c.rows.item(0).key : null;
                                            b(d)
                                        }, function(a, b) {
                                            d(b)
                                        })
                                    })
                                })["catch"](d)
                            });
                        return q(d, b), d
                    }

                    function p(a) {
                        var b = this,
                            c = new Promise(function(a, c) {
                                b.ready().then(function() {
                                    var d = b.F;
                                    d.db.transaction(function(b) {
                                        b.executeSql("SELECT key FROM " + d.G, [], function(b, c) {
                                            for (var d = [], e = 0; e < c.rows.length; e++) d.push(c.rows.item(e).key);
                                            a(d)
                                        }, function(a, b) {
                                            c(b)
                                        })
                                    })
                                })["catch"](c)
                            });
                        return q(c, a), c
                    }

                    function q(a, b) {
                        b && a.then(function(a) {
                            b(null, a)
                        }, function(a) {
                            b(a)
                        })
                    }
                    var Q = f.openDatabase;
                    if (Q) return {
                        De: "webSQLStorage",
                        xh: h,
                        Xk: d,
                        getItem: m,
                        setItem: a,
                        removeItem: b,
                        clear: c,
                        length: g,
                        key: k,
                        keys: p
                    }
                }("undefined" != typeof window ? window : self);
                f.Lb = h["default"]
            }
        ])
    };
    "object" == typeof exports && "object" == typeof module ? module.Lb = jd() : "function" == typeof define && define.XA ? define([], jd) : "object" == typeof exports ? exports.localforage = jd() : this.localforage = jd()
} catch (kd) {
    ed = !0
}

function ld(f) {
    this.b = f
}
(function() {
    function f(a) {
        var b;
        a || (a = {});
        b || (b = (new Date).getTime());
        a.state = 1;
        a.start = b;
        a.acc = 0;
        return a
    }

    function h(a) {
        return a ? "string" === typeof a ? a : "string" === typeof a.message ? a.message : "string" === typeof a.name ? a.name : "string" === typeof a.data ? a.data : "unknown error" : "unknown error"
    }

    function e() {}

    function l() {}

    function r() {}
    var m = ld.prototype;
    m.Ha = function(a) {
        this.Ua = a;
        this.b = a.b
    };
    m.Ha.prototype.Y = function() {};
    m.wa = function(a) {
        this.type = a;
        this.b = a.b
    };
    var d = m.wa.prototype;
    d.Y = function() {
        this.ee = {};
        this.qk = null;
        this.Lu = ""
    };
    d.yp = function(a, b) {
        if (this.ee.hasOwnProperty(a)) b(null, this.ee[a]);
        else {
            var c = this;
            localforage.getItem(a, function(d, e) {
                d ? c.ee.hasOwnProperty(a) && delete c.ee[a] : null == e ? c.ee.hasOwnProperty(a) && delete c.ee[a] : c.ee[a] = e;
                b(d, e)
            })
        }
    };
    m.e = new e;
    e.prototype.uh = function() {
        return !0
    };
    e.prototype.Ft = function(a) {
        return this.qk === a
    };
    e.prototype.Xz = function(a) {
        return this.qk === a
    };
    e.prototype.nz = function(a) {
        return this.ee.hasOwnProperty(a)
    };
    m.k = new l;
    l.prototype.DA = function(a) {
        this.ee[a] = f(this.ee[a]);
        var b = this;
        localforage.setItem(a, this.ee[a], function(c) {
            b.qk = a;
            c ? (b.Lu = h(c), b.b.trigger(ld.prototype.e.uh, b)) : b.b.trigger(ld.prototype.e.Xz, b)
        })
    };
    l.prototype.yp = function(a) {
        var b = this;
        this.yp(a, function(c) {
            b.qk = a;
            c ? (b.Lu = h(c), b.b.trigger(ld.prototype.e.uh, b)) : b.b.trigger(ld.prototype.e.Ft, b)
        })
    };
    m.H = new r;
    r.prototype.Vy = function(a, b) {
        b || (b = this.qk);
        var c;
        c = this.ee[b];
        var d;
        if (c) {
            d || (d = (new Date).getTime());
            var e = c.acc;
            1 === c.state && (e += d - c.start);
            c = e
        } else c = 0;
        a.B(c / 1E3)
    }
})();

function I(f) {
    this.b = f
}
(function() {
    function f() {
        if (0 === this.rq.length) {
            var a = document.createElement("canvas");
            a.width = this.width;
            a.height = this.height;
            var b = a.getContext("2d");
            this.Kj ? b.drawImage(this.aa, this.uj, this.vj, this.width, this.height, 0, 0, this.width, this.height) : b.drawImage(this.aa, 0, 0, this.width, this.height);
            this.rq = a.toDataURL("image/png")
        }
        return this.rq
    }

    function h() {}

    function e(a) {
        a[0] = 0;
        a[1] = 0;
        a[2] = 0;
        q.push(a)
    }

    function l(a, b) {
        return a < b ? "" + a + "," + b : "" + b + "," + a
    }

    function r(a, b, c, d) {
        b = b.uid;
        c = c.uid;
        var e = l(b, c);
        if (a.hasOwnProperty(e)) a[e][2] = d;
        else {
            var g = q.length ? q.pop() : [0, 0, 0];
            g[0] = b;
            g[1] = c;
            g[2] = d;
            a[e] = g
        }
    }

    function m(a, b, c) {
        b = l(b.uid, c.uid);
        a.hasOwnProperty(b) && (e(a[b]), delete a[b])
    }

    function d(a, b, c) {
        b = l(b.uid, c.uid);
        if (a.hasOwnProperty(b)) return Q = a[b][2], !0;
        Q = -2;
        return !1
    }

    function a() {}

    function b() {}
    var c = I.prototype;
    c.Ha = function(a) {
        this.Ua = a;
        this.b = a.b
    };
    var g = c.Ha.prototype;
    g.Y = function() {
        if (!this.U) {
            var a, b, c, d, e, g, k, h, l;
            this.Fe = [];
            this.Jk = !1;
            a = 0;
            for (b = this.vd.length; a < b; a++) {
                e = this.vd[a];
                k = {};
                k.name = e[0];
                k.speed = e[1];
                k.loop = e[2];
                k.vs = e[3];
                k.ws = e[4];
                k.ag = e[5];
                k.Ca = e[6];
                k.frames = [];
                c = 0;
                for (d = e[7].length; c < d; c++) g = e[7][c], h = {}, h.Wl = g[0], h.Zo = g[1], h.uj = g[2], h.vj = g[3], h.width = g[4], h.height = g[5], h.duration = g[6], h.gc = g[7], h.hc = g[8], h.$q = g[9], h.mo = g[10], h.cx = g[11], h.Kj = 0 !== h.width, h.rq = "", h.YH = f, l = {
                    left: 0,
                    top: 0,
                    right: 1,
                    bottom: 1
                }, h.Hs = l, h.Ma = null, (l = this.b.OC(g[0])) ? h.aa = l : (h.aa = new Image, h.aa.yB = g[0], h.aa.nq = g[1], h.aa.iB = null, this.b.mt(h.aa, g[0])), k.frames.push(h), this.Fe.push(h);
                this.vd[a] = k
            }
        }
    };
    g.oy = function() {
        var a, b, c;
        a = 0;
        for (b = this.d.length; a < b; a++) c = this.d[a], c.Km = c.mb.Ma
    };
    g.Un = function() {
        if (!this.U) {
            var a, b, c;
            a = 0;
            for (b = this.Fe.length; a < b; ++a) c = this.Fe[a], c.aa.iB = null, c.Ma = null;
            this.Jk = !1;
            this.oy()
        }
    };
    g.Wn = function() {
        if (!this.U && this.d.length) {
            var a, b, c;
            a = 0;
            for (b = this.Fe.length; a < b; ++a) c = this.Fe[a], c.Ma = this.b.M.fi(c.aa, !1, this.b.ib, c.cx);
            this.oy()
        }
    };
    g.Hr = function() {
        if (!this.U && !this.Jk && this.b.M) {
            var a, b, c;
            a = 0;
            for (b = this.Fe.length; a < b; ++a) c = this.Fe[a], c.Ma = this.b.M.fi(c.aa, !1, this.b.ib, c.cx);
            this.Jk = !0
        }
    };
    g.gp = function() {
        if (!this.U && !this.d.length && this.Jk) {
            var a, b, c;
            a = 0;
            for (b = this.Fe.length; a < b; ++a) c = this.Fe[a], this.b.M.deleteTexture(c.Ma), c.Ma = null;
            this.Jk = !1
        }
    };
    var k = [];
    g.vo = function(a) {
        var b, c, d;
        B(k);
        b = 0;
        for (c = this.Fe.length; b < c; ++b) d = this.Fe[b].aa, -1 === k.indexOf(d) && (a.drawImage(d, 0, 0), k.push(d))
    };
    c.wa = function(a) {
        this.type = a;
        this.b = a.b;
        a = this.type.vd[0].frames[0].mo;
        this.Jd ? this.xa.Nl(a) : this.xa = new zb(a)
    };
    var p = c.wa.prototype;
    p.Y = function() {
        this.visible = 0 === this.D[0];
        this.qn = this.Sk = !1;
        this.Jh = 0 !== this.D[3];
        this.cb = this.$u(this.D[1]) || this.type.vd[0];
        this.P = this.D[2];
        0 > this.P && (this.P = 0);
        this.P >= this.cb.frames.length && (this.P = this.cb.frames.length - 1);
        var a = this.cb.frames[this.P];
        this.xa.Nl(a.mo);
        this.gc = a.gc;
        this.hc = a.hc;
        this.Li = this.cb.speed;
        this.Fg = this.cb.ws;
        1 === this.type.vd.length && 1 === this.type.vd[0].frames.length || 0 === this.Li || (this.b.Zl(this), this.Sk = !0);
        this.Jd ? this.bf.reset() : this.bf = new xb;
        this.Tf = this.bf.Da;
        this.Ch = !0;
        this.Ff = 0;
        this.Bh = !0;
        this.Fi = this.hu = "";
        this.su = 0;
        this.Am = -1;
        this.type.Hr();
        var b, c, d, e, g, f, h, a = 0;
        for (b = this.type.vd.length; a < b; a++)
            for (e = this.type.vd[a], c = 0, d = e.frames.length; c < d; c++) g = e.frames[c], 0 === g.width && (g.width = g.aa.width, g.height = g.aa.height), g.Kj && (h = g.aa, f = g.Hs, f.left = g.uj / h.width, f.top = g.vj / h.height, f.right = (g.uj + g.width) / h.width, f.bottom = (g.vj + g.height) / h.height, 0 === g.uj && 0 === g.vj && g.width === h.width && g.height === h.height && (g.Kj = !1));
        this.mb = this.cb.frames[this.P];
        this.Km = this.mb.Ma
    };
    p.nc = function() {
        var a = {
            a: this.cb.Ca,
            f: this.P,
            cas: this.Li,
            fs: this.Tf,
            ar: this.Ff,
            at: this.bf.Da,
            rt: this.Fg
        };
        this.Ch || (a.ap = this.Ch);
        this.Bh || (a.af = this.Bh);
        return a
    };
    p.Ec = function(a) {
        var b = this.TC(a.a);
        b && (this.cb = b);
        this.P = a.f;
        0 > this.P && (this.P = 0);
        this.P >= this.cb.frames.length && (this.P = this.cb.frames.length - 1);
        this.Li = a.cas;
        this.Tf = a.fs;
        this.Ff = a.ar;
        this.bf.reset();
        this.bf.Da = a.at;
        this.Ch = a.hasOwnProperty("ap") ? a.ap : !0;
        this.Bh = a.hasOwnProperty("af") ? a.af : !0;
        a.hasOwnProperty("rt") ? this.Fg = a.rt : this.Fg = this.cb.ws;
        this.mb = this.cb.frames[this.P];
        this.Km = this.mb.Ma;
        this.xa.Nl(this.mb.mo);
        this.gc = this.mb.gc;
        this.hc = this.mb.hc
    };
    p.Tp = function(a) {
        this.P = a ? 0 : this.cb.frames.length - 1;
        this.Ch = !1;
        this.hu = this.cb.name;
        this.qn = !0;
        this.b.trigger(I.prototype.e.Az, this);
        this.b.trigger(I.prototype.e.zz, this);
        this.qn = !1;
        this.Ff = 0
    };
    p.Oe = function() {
        return this.bf.Da
    };
    p.Hb = function() {
        this.bf.add(this.b.Vi(this));
        this.Fi.length && this.Eu();
        0 <= this.Am && this.Fu();
        var a = this.bf.Da,
            b = this.cb,
            c = b.frames[this.P],
            d = c.duration / this.Li;
        this.Ch && a >= this.Tf + d && (this.Bh ? this.P++ : this.P--, this.Tf += d, this.P >= b.frames.length && (b.ag ? (this.Bh = !1, this.P = b.frames.length - 2) : b.loop ? this.P = this.Fg : (this.Ff++, this.Ff >= b.vs ? this.Tp(!1) : this.P = this.Fg)), 0 > this.P && (b.ag ? (this.P = 1, this.Bh = !0, b.loop || (this.Ff++, this.Ff >= b.vs && this.Tp(!0))) : b.loop ? this.P = this.Fg : (this.Ff++, this.Ff >= b.vs ? this.Tp(!0) : this.P = this.Fg)), 0 > this.P ? this.P = 0 : this.P >= b.frames.length && (this.P = b.frames.length - 1), a > this.Tf + b.frames[this.P].duration / this.Li && (this.Tf = a), a = b.frames[this.P], this.Ci(c, a), this.b.O = !0)
    };
    p.$u = function(a) {
        var b, c, d;
        b = 0;
        for (c = this.type.vd.length; b < c; b++)
            if (d = this.type.vd[b], Jb(d.name, a)) return d;
        return null
    };
    p.TC = function(a) {
        var b, c, d;
        b = 0;
        for (c = this.type.vd.length; b < c; b++)
            if (d = this.type.vd[b], d.Ca === a) return d;
        return null
    };
    p.Eu = function() {
        var a = this.cb.frames[this.P],
            b = this.$u(this.Fi);
        this.Fi = "";
        !b || Jb(b.name, this.cb.name) && this.Ch || (this.cb = b, this.Li = b.speed, this.Fg = b.ws, 0 > this.P && (this.P = 0), this.P >= this.cb.frames.length && (this.P = this.cb.frames.length - 1), 1 === this.su && (this.P = 0), this.Ch = !0, this.Tf = this.bf.Da, this.Bh = !0, this.Ci(a, this.cb.frames[this.P]), this.b.O = !0)
    };
    p.Fu = function() {
        var a = this.cb.frames[this.P],
            b = this.P;
        this.P = Ja(this.Am);
        0 > this.P && (this.P = 0);
        this.P >= this.cb.frames.length && (this.P = this.cb.frames.length - 1);
        b !== this.P && (this.Ci(a, this.cb.frames[this.P]), this.Tf = this.bf.Da, this.b.O = !0);
        this.Am = -1
    };
    p.Ci = function(a, b) {
        var c = a.width,
            d = a.height,
            e = b.width,
            g = b.height;
        c != e && (this.width *= e / c);
        d != g && (this.height *= g / d);
        this.gc = b.gc;
        this.hc = b.hc;
        this.xa.Nl(b.mo);
        this.gb();
        this.mb = b;
        this.Km = b.Ma;
        c = 0;
        for (d = this.qa.length; c < d; c++) e = this.qa[c], e.Pw && e.Pw(a, b);
        this.b.trigger(I.prototype.e.Ci, this)
    };
    p.Ad = function(a) {
        a.globalAlpha = this.opacity;
        var b = this.mb,
            c = b.Kj,
            d = b.aa,
            e = this.x,
            g = this.y,
            f = this.width,
            h = this.height;
        if (0 === this.j && 0 <= f && 0 <= h) e -= this.gc * f, g -= this.hc * h, this.b.Xd && (e = Math.round(e), g = Math.round(g)), c ? a.drawImage(d, b.uj, b.vj, b.width, b.height, e, g, f, h) : a.drawImage(d, e, g, f, h);
        else {
            this.b.Xd && (e = Math.round(e), g = Math.round(g));
            a.save();
            var k = 0 < f ? 1 : -1,
                l = 0 < h ? 1 : -1;
            a.translate(e, g);
            1 === k && 1 === l || a.scale(k, l);
            a.rotate(this.j * k * l);
            e = 0 - this.gc * Da(f);
            g = 0 - this.hc * Da(h);
            c ? a.drawImage(d, b.uj, b.vj, b.width, b.height, e, g, Da(f), Da(h)) : a.drawImage(d, e, g, Da(f), Da(h));
            a.restore()
        }
    };
    p.Oi = function(a) {
        this.Nc(a)
    };
    p.Nc = function(a) {
        a.qd(this.Km);
        a.mh(this.opacity);
        var b = this.mb,
            c = this.Lc;
        if (this.b.Xd) {
            var d = Math.round(this.x) - this.x,
                e = Math.round(this.y) - this.y;
            b.Kj ? a.jh(c.rb + d, c.sb + e, c.oc + d, c.pc + e, c.$b + d, c.ac + e, c.Yb + d, c.Zb + e, b.Hs) : a.ih(c.rb + d, c.sb + e, c.oc + d, c.pc + e, c.$b + d, c.ac + e, c.Yb + d, c.Zb + e)
        } else b.Kj ? a.jh(c.rb, c.sb, c.oc, c.pc, c.$b, c.ac, c.Yb, c.Zb, b.Hs) : a.ih(c.rb, c.sb, c.oc, c.pc, c.$b, c.ac, c.Yb, c.Zb)
    };
    p.YC = function(a) {
        var b = this.mb,
            c, d;
        c = 0;
        for (d = b.$q.length; c < d; c++)
            if (Jb(a, b.$q[c][0])) return c;
        return -1
    };
    p.Lg = function(a, b) {
        var c = this.mb,
            d = c.$q,
            e;
        xa(a) ? e = this.YC(a) : e = a - 1;
        e = Ja(e);
        if (0 > e || e >= d.length) return b ? this.x : this.y;
        var g = (d[e][1] - c.gc) * this.width,
            d = d[e][2],
            d = (d - c.hc) * this.height,
            c = Math.cos(this.j);
        e = Math.sin(this.j);
        var f = g * c - d * e,
            d = d * c + g * e,
            g = f + this.x,
            d = d + this.y;
        return b ? g : d
    };
    var q = [],
        Q = -2,
        J = [];
    h.prototype.Ez = function(a) {
        if (!a) return !1;
        var b = this.b,
            c = b.Dk(),
            g = c.type,
            f = null;
        c.ka.collmemory ? f = c.ka.collmemory : (f = {}, c.ka.collmemory = f);
        c.ka.spriteCreatedDestroyCallback || (c.ka.spriteCreatedDestroyCallback = !0, b.Pp(function(a) {
            var b = c.ka.collmemory;
            a = a.uid;
            var d, g;
            for (d in b) b.hasOwnProperty(d) && (g = b[d], g[0] === a || g[1] === a) && (e(b[d]), delete b[d])
        }));
        var h = g.ba(),
            k = a.ba(),
            h = h.Pc(),
            l, n, p, q, E, t, w, D = this.b.lg,
            z = D - 1,
            K = b.Eb().Kb;
        for (n = 0; n < h.length; n++) {
            p = h[n];
            k.ua ? (p.La(), this.b.cv(p.q, a, p.lb, J), l = J) : l = k.Pc();
            for (q = 0; q < l.length; q++) E = l[q], b.Ts(p, E) || b.kB(p, E) ? (t = d(f, p, E), t = !t || Q < z, r(f, p, E, D), t && (b.hh(K.Ba), t = g.ba(), w = a.ba(), t.ua = !1, w.ua = !1, g === a ? (t.d.length = 2, t.d[0] = p, t.d[1] = E, g.xd()) : (t.d.length = 1, w.d.length = 1, t.d[0] = p, w.d[0] = E, g.xd(), a.xd()), K.kh(), b.Se(K.Ba))) : m(f, p, E);
            B(J)
        }
        return !1
    };
    var z = null,
        n = new ma,
        D = !1,
        E = [],
        w = new Ma(0, 0, 0, 0);
    g.finish = function(a) {
        if (D) {
            if (a) {
                var b = this.b.Eb().Kb.Wd;
                a = z.ba();
                var c = n.qh(),
                    d, e;
                if (a.ua) {
                    a.ua = !1;
                    B(a.d);
                    d = 0;
                    for (e = c.length; d < e; ++d) a.d[d] = c[d];
                    if (b)
                        for (B(a.ma), d = 0, e = z.d.length; d < e; ++d) c = z.d[d], n.contains(c) || a.ma.push(c)
                } else if (b)
                    for (b = a.d.length, d = 0, e = c.length; d < e; ++d) a.d[b + d] = c[d], $a(a.ma, c[d]);
                else Wa(a.d, c);
                z.xd()
            }
            n.clear();
            D = !1
        }
    };
    h.prototype.kz = function(a) {
        if (a) {
            var b = !1,
                c, d, e, g = this.b.Dk(),
                f = g.type,
                g = g.sn;
            c = a.ba();
            d = this.b.Eb().Kb.Wd;
            var h;
            c.ua ? (this.La(), w.Ki(this.lb), w.offset(0, 0), this.b.cv(this.q, a, w, E), h = E) : h = d ? this.b.JD() && !c.ma.length && c.d.length ? c.d : c.ma : c.d;
            z = a;
            D = f !== a && !g;
            c = 0;
            for (d = h.length; c < d; c++)
                if (e = h[c], this.b.Ts(this, e)) {
                    b = !0;
                    if (g) break;
                    f !== a && n.add(e)
                }
            B(E);
            a = b
        } else a = !1;
        return a
    };
    h.prototype.ez = function(a) {
        return this.Fi.length ? Jb(this.Fi, a) : Jb(this.cb.name, a)
    };
    h.prototype.Ly = function(a, b) {
        return Qc(this.P, a, b)
    };
    h.prototype.zz = function(a) {
        return Jb(this.hu, a)
    };
    h.prototype.Az = function() {
        return !0
    };
    h.prototype.Ci = function() {
        return !0
    };
    c.e = new h;
    a.prototype.Gp = function(a) {
        this.Xb = a;
        this.fe = Cb(a);
        Db(this, a, this.b.L);
        this.b.O = !0
    };
    a.prototype.gA = function(a, b) {
        this.Fi = a;
        this.su = b;
        this.Sk || (this.b.Zl(this), this.Sk = !0);
        this.qn || this.Eu()
    };
    a.prototype.hA = function(a) {
        this.Am = a;
        this.Sk || (this.b.Zl(this), this.Sk = !0);
        this.qn || this.Fu()
    };
    a.prototype.pA = function(a) {
        a = Da(this.width) * (0 === a ? -1 : 1);
        this.width !== a && (this.width = a, this.gb())
    };
    a.prototype.Ip = function(a) {
        var b = this.mb,
            c = b.width * a * (0 > this.width ? -1 : 1);
        a = b.height * a * (0 > this.height ? -1 : 1);
        if (this.width !== c || this.height !== a) this.width = c, this.height = a, this.gb()
    };
    c.k = new a;
    b.prototype.cz = function(a, b) {
        a.B(this.Lg(b, !0))
    };
    b.prototype.dz = function(a, b) {
        a.B(this.Lg(b, !1))
    };
    c.H = new b
})();

function md(f) {
    this.b = f
}
(function() {
    function f(a, b) {
        return a.length ? a.pop() : new b
    }

    function h(a, b, c) {
        if (c) {
            var e;
            c = 0;
            for (e = b.length; c < e; c++) a.length < d && a.push(b[c]);
            B(b)
        } else
            for (e in b) Object.prototype.hasOwnProperty.call(b, e) && (a.length < d && a.push(b[e]), delete b[e])
    }

    function e(b, c, d) {
        var e = b.ei;
        d = d.replace(/\s\s*$/, "");
        c >= e.length && e.push(f(a, Object));
        c = e[c];
        c.text = d;
        c.width = b.Pr(d);
        b.Pj = Ea(b.Pj, c.width)
    }

    function l() {}
    var r = md.prototype;
    r.Y = function() {};
    r.Ha = function(a) {
        this.Ua = a;
        this.b = a.b
    };
    var m = r.Ha.prototype;
    m.Y = function() {
        this.U || (this.aa = new Image, this.b.mt(this.aa, this.Wl), this.Ma = null)
    };
    m.Un = function() {
        this.U || (this.Ma = null)
    };
    m.Wn = function() {
        if (!this.U && this.d.length) {
            this.Ma || (this.Ma = this.b.M.fi(this.aa, !1, this.b.ib, this.Xl));
            var a, b;
            a = 0;
            for (b = this.d.length; a < b; a++) this.d[a].Ma = this.Ma
        }
    };
    m.gp = function() {
        this.U || this.d.length || !this.Ma || (this.b.M.deleteTexture(this.Ma), this.Ma = null)
    };
    m.vo = function(a) {
        a.drawImage(this.aa, 0, 0)
    };
    r.wa = function(a) {
        this.type = a;
        this.b = a.b
    };
    m = r.wa.prototype;
    m.of = function() {
        h(a, this.ei, !0);
        h(b, this.Cm, !1);
        h(c, this.Dm, !1);
        sb(this.Bg)
    };
    m.Y = function() {
        this.aa = this.type.aa;
        this.Bm = this.D[0];
        this.Ag = this.D[1];
        this.characterSet = this.D[2];
        this.text = this.D[3];
        this.ef = this.D[4];
        this.visible = 0 === this.D[5];
        this.nn = this.D[6] / 2;
        this.op = this.D[7] / 2;
        this.$F = 0 === this.D[9];
        this.Gi = this.D[10];
        this.lineHeight = this.D[11];
        this.wi = this.Pj = 0;
        this.Jd ? (B(this.ei), sb(this.Cm), sb(this.Dm), sb(this.Bg)) : (this.ei = [], this.Cm = {}, this.Dm = {}, this.Bg = {});
        this.Qj = !0;
        this.Dr = this.width;
        this.b.M && (this.type.Ma || (this.type.Ma = this.b.M.fi(this.type.aa, !1, this.b.ib, this.type.Xl)), this.Ma = this.type.Ma);
        this.BA()
    };
    m.nc = function() {
        var a = {
                t: this.text,
                csc: this.ef,
                csp: this.Gi,
                lh: this.lineHeight,
                tw: this.Pj,
                th: this.wi,
                lrt: this.WD,
                ha: this.nn,
                va: this.op,
                cw: {}
            },
            b;
        for (b in this.Bg) a.cw[b] = this.Bg[b];
        return a
    };
    m.Ec = function(a) {
        this.text = a.t;
        this.ef = a.csc;
        this.Gi = a.csp;
        this.lineHeight = a.lh;
        this.Pj = a.tw;
        this.wi = a.th;
        this.WD = a.lrt;
        a.hasOwnProperty("ha") && (this.nn = a.ha);
        a.hasOwnProperty("va") && (this.op = a.va);
        for (var b in a.cw) this.Bg[b] = a.cw[b];
        this.Qj = !0;
        this.Dr = this.width
    };
    var d = 1E3,
        a = [],
        b = [],
        c = [];
    m.BA = function() {
        for (var a = this.aa, d = a.width, e = a.height, a = this.Bm, g = this.Ag, h = a / d, k = g / e, l = this.characterSet, d = Math.floor(d / a), e = Math.floor(e / g), r = 0; r < l.length && !(r >= d * e); r++) {
            var m = r % d,
                v = Math.floor(r / d),
                y = l.charAt(r);
            if (this.b.M) {
                var x = this.Dm,
                    u = m * h,
                    G = v * k,
                    m = (m + 1) * h,
                    v = (v + 1) * k;
                void 0 === x[y] && (x[y] = f(c, Ma));
                x[y].left = u;
                x[y].top = G;
                x[y].right = m;
                x[y].bottom = v
            } else x = this.Cm, m = m * a, v = v * g, u = a, G = g, void 0 === x[y] && (x[y] = f(b, Object)), x[y].x = m, x[y].y = v, x[y].u = u, x[y].ov = G
        }
    };
    var g = [];
    r.GA = function(a) {
        B(g);
        for (var b = "", c, d = 0; d < a.length;)
            if (c = a.charAt(d), "\n" === c) b.length && (g.push(b), b = ""), g.push("\n"), ++d;
            else if (" " === c || "\t" === c || "-" === c) {
            do b += a.charAt(d), d++; while (d < a.length && (" " === a.charAt(d) || "\t" === a.charAt(d)));
            g.push(b);
            b = ""
        } else d < a.length && (b += c, d++);
        b.length && g.push(b)
    };
    r.KA = function(b) {
        var c = b.text,
            d = b.ei;
        if (c && c.length) {
            var e = b.width;
            if (2 >= e) h(a, d, !0);
            else {
                var g = b.ef,
                    k = b.Gi;
                if (c.length * (b.Bm * g + k) - k <= e && -1 === c.indexOf("\n") && (k = b.Pr(c), k <= e)) {
                    h(a, d, !0);
                    d.push(f(a, Object));
                    d[0].text = c;
                    d[0].width = k;
                    b.Pj = k;
                    b.wi = b.Ag * g + b.lineHeight;
                    return
                }
                this.LA(b);
                b.wi = d.length * (b.Ag * g + b.lineHeight)
            }
        } else h(a, d, !0)
    };
    r.LA = function(b) {
        var c = b.$F,
            f = b.text,
            h = b.ei,
            k = b.width;
        c && (this.GA(f), f = g);
        var l = "",
            r, m, w, v = 0,
            y = !1;
        for (w = 0; w < f.length; w++) "\n" === f[w] ? (!0 === y ? y = !1 : (e(b, v, l), v++), l = "") : (y = !1, r = l, l += f[w], m = b.Pr(l.replace(/\s\s*$/, "")), m > k && ("" === r ? (e(b, v, l), l = "", y = !0) : (e(b, v, r), l = f[w]), v++, c || " " !== l || (l = "")));
        l.replace(/\s\s*$/, "").length && (e(b, v, l), v++);
        for (w = v; w < h.length; w++) a.length < d && a.push(h[w]);
        h.length = v
    };
    m.Pr = function(a) {
        for (var b = this.Gi, c = a.length, d = 0, e = 0; e < c; e++) d += this.Jq(a.charAt(e)) * this.ef + b;
        return d - (0 < d ? b : 0)
    };
    m.Jq = function(a) {
        var b = this.Bg;
        return void 0 !== b[a] ? b[a] : this.Bm
    };
    m.ox = function() {
        if (this.Qj || this.width !== this.Dr) this.wi = this.Pj = 0, this.type.Ua.KA(this), this.Qj = !1, this.Dr = this.width
    };
    m.Ad = function(a) {
        var b = this.aa;
        if ("" !== this.text && null != b && (this.ox(), !(this.height < this.Ag * this.ef + this.lineHeight))) {
            a.globalAlpha = this.opacity;
            var b = this.x,
                c = this.y;
            this.b.Xd && (b = Math.round(b), c = Math.round(c));
            var d = this.q.Va,
                e = this.q.Wa,
                g = this.q.ab,
                f = this.q.$a;
            a.save();
            a.translate(b, c);
            a.rotate(this.j);
            for (var h = this.j, k = this.nn, l = this.ef, r = this.Ag * l, m = this.lineHeight, u = this.Gi, G = this.ei, L, Y = -(this.gc * this.width), F = -(this.hc * this.height), F = F + this.op * Ea(0, this.height - this.wi), P, W, U, O = 0; O < G.length; O++) {
                var t = G[O].text;
                L = k * Ea(0, this.width - G[O].width);
                P = Y + L;
                F += m;
                if (0 === h && c + F + r < e) F += r;
                else {
                    for (var R = 0; R < t.length; R++) {
                        W = t.charAt(R);
                        L = this.Jq(W);
                        var C = this.Cm[W];
                        if (0 === h && b + P + L * l + u < d) P += L * l + u;
                        else {
                            if (P + L * l > this.width + 1E-5) break;
                            void 0 !== C && (W = P, U = F, 0 === h && 1 === l && (W = Math.round(W), U = Math.round(U)), a.drawImage(this.aa, C.x, C.y, C.u, C.ov, W, U, C.u * l, C.ov * l));
                            P += L * l + u;
                            if (0 === h && b + P > g) break
                        }
                    }
                    F += r;
                    if (0 === h && (F + r + m > this.height || c + F > f)) break
                }
            }
            a.restore()
        }
    };
    var k = new Na;
    m.Nc = function(a) {
        a.qd(this.Ma);
        a.mh(this.opacity);
        if (this.text && (this.ox(), !(this.height < this.Ag * this.ef + this.lineHeight))) {
            this.La();
            var b = this.Lc,
                c = 0,
                d = 0;
            this.b.Xd && (c = Math.round(this.x) -
                this.x, d = Math.round(this.y) - this.y);
            var e = this.q.Va,
                g = this.q.Wa,
                f = this.q.ab,
                h = this.q.$a,
                l = this.j,
                r = this.nn,
                m = this.op,
                x = this.ef,
                u = this.Ag * x,
                G = this.lineHeight,
                L = this.Gi,
                Y = this.ei,
                F = this.wi,
                P, W, U;
            0 !== l && (W = Math.cos(l), U = Math.sin(l));
            for (var c = b.rb + c, b = b.sb + d, O, m = m * Ea(0, this.height - F), t, R, F = 0; F < Y.length; F++)
                if (d = Y[F].text, O = P = r * Ea(0, this.width - Y[F].width), m += G, 0 === l && b + m + u < g) m += u;
                else {
                    for (var C = 0; C < d.length; C++) {
                        var X = d.charAt(C);
                        P = this.Jq(X);
                        X = this.Dm[X];
                        if (0 === l && c + O + P * x + L < e) O += P * x + L;
                        else {
                            if (O + P * x > this.width + 1E-5) break;
                            if (void 0 !== X) {
                                var K = this.Bm * x,
                                    M = this.Ag * x;
                                t = O;
                                R = m;
                                0 === l && 1 === x && (t = Math.round(t), R = Math.round(R));
                                k.rb = t;
                                k.sb = R;
                                k.oc = t + K;
                                k.pc = R;
                                k.Yb = t;
                                k.Zb = R + M;
                                k.$b = t + K;
                                k.ac = R + M;
                                0 !== l && (t = k, R = W, K = U, M = void 0, M = t.rb * R - t.sb * K, t.sb = t.sb * R + t.rb * K, t.rb = M, M = t.oc * R - t.pc * K, t.pc = t.pc * R + t.oc * K, t.oc = M, M = t.Yb * R - t.Zb * K, t.Zb = t.Zb * R + t.Yb * K, t.Yb = M, M = t.$b * R - t.ac * K, t.ac = t.ac * R + t.$b * K, t.$b = M);
                                k.offset(c, b);
                                a.jh(k.rb, k.sb, k.oc, k.pc, k.$b, k.ac, k.Yb, k.Zb, X)
                            }
                            O += P * x + L;
                            if (0 === l && c + O > f) break
                        }
                    }
                    m += u;
                    if (0 === l && (m + u + G > this.height || b + m > h)) break
                }
        }
    };
    r.e = new function() {};
    l.prototype.vA = function(a) {
        va(a) && 1E9 > a && (a = Math.round(1E10 * a) / 1E10);
        a = a.toString();
        this.text !== a && (this.text = a, this.Qj = !0, this.b.O = !0)
    };
    l.prototype.Ip = function(a) {
        a !== this.ef && (this.ef = a, this.Qj = !0, this.b.O = !0)
    };
    m.iA = function(a, b) {
        var c = parseInt(b, 10);
        this.Bg[a] !== c && (this.Bg[a] = c, this.Qj = !0, this.b.O = !0)
    };
    l.prototype.jA = function(a, b) {
        if ("" !== a)
            for (var c = 0; c < a.length; c++) this.iA(a.charAt(c), b)
    };
    l.prototype.Gp = function(a) {
        this.Xb = a;
        this.fe = Cb(a);
        Db(this, a, this.b.L);
        this.b.O = !0
    };
    r.k = new l;
    r.H = new function() {}
})();

function nd(f) {
    this.b = f
}
(function() {
    function f(a) {
        c = a.x;
        g = a.y;
        k = a.z
    }

    function h(a, b, c, d) {
        var g;
        g = p.length ? p.pop() : new e;
        g.init(a, b, c, d);
        return g
    }

    function e() {
        this.Sl = this.id = this.y = this.x = this.Uo = this.To = this.Cr = this.time = this.Ns = 0;
        this.$l = this.ep = !1
    }

    function l(a) {
        return a.sourceCapabilities && a.sourceCapabilities.firesTouchEvents || a.originalEvent && a.originalEvent.sourceCapabilities && a.originalEvent.sourceCapabilities.firesTouchEvents
    }

    function r() {}

    function m() {}
    var d = nd.prototype;
    d.Ha = function(a) {
        this.Ua = a;
        this.b = a.b
    };
    d.Ha.prototype.Y = function() {};
    d.wa = function(a) {
        this.type = a;
        this.b = a.b;
        this.touches = [];
        this.Rr = !1
    };
    var a = d.wa.prototype,
        b = {
            left: 0,
            top: 0
        };
    a.Ak = function(a) {
        var b, c;
        b = 0;
        for (c = this.touches.length; b < c; b++)
            if (this.touches[b].id === a) return b;
        return -1
    };
    var c = 0,
        g = 0,
        k = 0,
        p = [];
    e.prototype.init = function(a, b, c, d) {
        var e = tb();
        this.Ns = this.Cr = this.time = e;
        this.To = a;
        this.Uo = b;
        this.x = a;
        this.y = b;
        this.pressure = this.height = this.width = 0;
        this.id = c;
        this.Sl = d;
        this.$l = this.ep = !1
    };
    e.prototype.update = function(a, b, c, d, e, g) {
        this.Cr = this.time;
        this.time = a;
        this.x = b;
        this.y = c;
        this.width = d;
        this.height = e;
        this.pressure = g;
        !this.$l && 15 <= pb(this.To, this.Uo, this.x, this.y) && (this.$l = !0)
    };
    e.prototype.gE = function(a, b) {
        !this.ep && 500 <= tb() - this.Ns && !this.$l && 15 > pb(this.To, this.Uo, this.x, this.y) && (this.ep = !0, a.yf = this.Sl, a.Vj = this.id, a.Yi = b, a.b.trigger(nd.prototype.e.Hz, a), a.Lf = this.x, a.Mf = this.y, a.b.trigger(nd.prototype.e.Iz, a), a.Yi = 0)
    };
    var q = -1E3,
        Q = -1E3,
        J = -1E4;
    e.prototype.ow = function(a, b) {
        if (!this.ep) {
            var c = tb();
            333 >= c - this.Ns && !this.$l && 15 > pb(this.To, this.Uo, this.x, this.y) && (a.yf = this.Sl, a.Vj = this.id, a.Yi = b, 666 >= c - J && 25 > pb(q, Q, this.x, this.y) ? (a.b.trigger(nd.prototype.e.Fz, a), a.Lf = this.x, a.Mf = this.y, a.b.trigger(nd.prototype.e.Gz, a), Q = q = -1E3, J = -1E4) : (a.b.trigger(nd.prototype.e.Yz, a), a.Lf = this.x, a.Mf = this.y, a.b.trigger(nd.prototype.e.Ot, a), q = this.x, Q = this.y, J = c), a.Yi = 0)
        }
    };
    a.Y = function() {
        this.PD = !("undefined" === typeof window.c2isWindows8 || !window.c2isWindows8);
        this.Yi = this.Vj = this.yf = this.Mf = this.Lf = this.Zt = this.Yt = this.Xt = this.RA = this.QA = this.PA = this.ao = this.$n = this.Zn = 0;
        this.VF = 0 !== this.D[0];
        var a = 0 < this.b.jd ? document : this.b.canvas,
            b = document;
        this.b.Sc ? b = a = window.Canvas : this.b.Td && (b = a = window);
        var c = this;
        "undefined" !== typeof PointerEvent ? (a.addEventListener("pointerdown", function(a) {
            c.Lw(a)
        }, !1), a.addEventListener("pointermove", function(a) {
            c.Kw(a)
        }, !1), b.addEventListener("pointerup", function(a) {
            c.Vn(a, !1)
        }, !1), b.addEventListener("pointercancel", function(a) {
            c.Vn(a, !0)
        }, !1), this.b.canvas && (this.b.canvas.addEventListener("MSGestureHold", function(a) {
            a.preventDefault()
        }, !1), document.addEventListener("MSGestureHold", function(a) {
            a.preventDefault()
        }, !1), this.b.canvas.addEventListener("gesturehold", function(a) {
            a.preventDefault()
        }, !1), document.addEventListener("gesturehold", function(a) {
            a.preventDefault()
        }, !1))) : window.navigator.msPointerEnabled ? (a.addEventListener("MSPointerDown", function(a) {
            c.Lw(a)
        }, !1), a.addEventListener("MSPointerMove", function(a) {
            c.Kw(a)
        }, !1), b.addEventListener("MSPointerUp", function(a) {
            c.Vn(a, !1)
        }, !1), b.addEventListener("MSPointerCancel", function(a) {
            c.Vn(a, !0)
        }, !1), this.b.canvas && (this.b.canvas.addEventListener("MSGestureHold", function(a) {
            a.preventDefault()
        }, !1), document.addEventListener("MSGestureHold", function(a) {
            a.preventDefault()
        }, !1))) : (a.addEventListener("touchstart", function(a) {
            c.Rw(a)
        }, !1), a.addEventListener("touchmove", function(a) {
            c.Qw(a)
        }, !1), b.addEventListener("touchend", function(a) {
            c.bs(a, !1)
        }, !1), b.addEventListener("touchcancel", function(a) {
            c.bs(a, !0)
        }, !1));
        if (this.PD) {
            var d = function(a) {
                    a = a.reading;
                    c.Xt = a.accelerationX;
                    c.Yt = a.accelerationY;
                    c.Zt = a.accelerationZ
                },
                e = function(a) {
                    a = a.reading;
                    c.Zn = a.yawDegrees;
                    c.$n = a.pitchDegrees;
                    c.ao = a.rollDegrees
                },
                g = Windows.Devices.Sensors.Accelerometer.getDefault();
            g && (g.reportInterval = Math.max(g.minimumReportInterval, 16), g.addEventListener("readingchanged", d));
            var h = Windows.Devices.Sensors.Inclinometer.getDefault();
            h && (h.reportInterval = Math.max(h.minimumReportInterval, 16), h.addEventListener("readingchanged", e));
            document.addEventListener("visibilitychange", function() {
                document.hidden || document.msHidden ? (g && g.removeEventListener("readingchanged", d), h && h.removeEventListener("readingchanged", e)) : (g && g.addEventListener("readingchanged", d), h && h.addEventListener("readingchanged", e))
            }, !1)
        } else window.addEventListener("deviceorientation", function(a) {
            c.Zn = a.alpha || 0;
            c.$n = a.beta || 0;
            c.ao = a.gamma || 0
        }, !1), window.addEventListener("devicemotion", function(a) {
            a.accelerationIncludingGravity && (c.PA = a.accelerationIncludingGravity.x || 0, c.QA = a.accelerationIncludingGravity.y || 0, c.RA = a.accelerationIncludingGravity.z || 0);
            a.acceleration && (c.Xt = a.acceleration.x || 0, c.Yt = a.acceleration.y || 0, c.Zt = a.acceleration.z || 0)
        }, !1);
        this.VF && !this.b.Ob && (jQuery(document).mousemove(function(a) {
            c.pE(a)
        }), jQuery(document).mousedown(function(a) {
            c.oE(a)
        }), jQuery(document).mouseup(function(a) {
            c.qE(a)
        }));
        !this.b.hj && this.b.Cd && navigator.accelerometer && navigator.accelerometer.watchAcceleration && navigator.accelerometer.watchAcceleration(f, null, {
            frequency: 40
        });
        this.b.FF(this)
    };
    a.Kw = function(a) {
        if (a.pointerType !== a.MSPOINTER_TYPE_MOUSE && "mouse" !== a.pointerType) {
            a.preventDefault && a.preventDefault();
            var c = this.Ak(a.pointerId),
                d = tb();
            if (0 <= c) {
                var e = this.b.Ob ? b : jQuery(this.b.canvas).offset(),
                    c = this.touches[c];
                2 > d - c.time || c.update(d, a.pageX - e.left, a.pageY - e.top, a.width || 0, a.height || 0, a.pressure || 0)
            }
        }
    };
    a.Lw = function(a) {
        if (a.pointerType !== a.MSPOINTER_TYPE_MOUSE && "mouse" !== a.pointerType) {
            a.preventDefault && Kb(a) && a.preventDefault();
            var c = this.b.Ob ? b : jQuery(this.b.canvas).offset(),
                d = a.pageX - c.left,
                c = a.pageY - c.top;
            tb();
            this.yf = this.touches.length;
            this.Vj = a.pointerId;
            this.touches.push(h(d, c, a.pointerId, this.yf));
            this.b.lf = !0;
            this.b.trigger(nd.prototype.e.Mt, this);
            this.b.trigger(nd.prototype.e.Ep, this);
            this.Lf = d;
            this.Mf = c;
            this.b.trigger(nd.prototype.e.Pt, this);
            this.b.lf = !1
        }
    };
    a.Vn = function(a, b) {
        if (a.pointerType !== a.MSPOINTER_TYPE_MOUSE && "mouse" !== a.pointerType) {
            a.preventDefault && Kb(a) && a.preventDefault();
            var c = this.Ak(a.pointerId);
            this.yf = 0 <= c ? this.touches[c].Sl : -1;
            this.Vj = 0 <= c ? this.touches[c].id : -1;
            this.b.lf = !0;
            this.b.trigger(nd.prototype.e.Lt, this);
            this.b.trigger(nd.prototype.e.Dp, this);
            0 <= c && (b || this.touches[c].ow(this, c), 100 > p.length && p.push(this.touches[c]), this.touches.splice(c, 1));
            this.b.lf = !1
        }
    };
    a.Qw = function(a) {
        a.preventDefault && a.preventDefault();
        var c = tb(),
            d, e, g, f;
        d = 0;
        for (e = a.changedTouches.length; d < e; d++)
            if (g = a.changedTouches[d], f = this.Ak(g.identifier), 0 <= f) {
                var h = this.b.Ob ? b : jQuery(this.b.canvas).offset();
                f = this.touches[f];
                2 > c - f.time || f.update(c, g.pageX - h.left, g.pageY - h.top, 2 * (g.mI || g.zI || g.fI || g.iI || 0), 2 * (g.nI || g.AI || g.gI || g.jI || 0), g.VH || g.yI || g.eI || g.hI || 0)
            }
    };
    a.Rw = function(a) {
        a.preventDefault && Kb(a) && a.preventDefault();
        var c = this.b.Ob ? b : jQuery(this.b.canvas).offset();
        tb();
        this.b.lf = !0;
        var d, e, g, f;
        d = 0;
        for (e = a.changedTouches.length; d < e; d++)
            if (g = a.changedTouches[d], f = this.Ak(g.identifier), -1 === f) {
                f = g.pageX - c.left;
                var k = g.pageY - c.top;
                this.yf = this.touches.length;
                this.Vj = g.identifier;
                this.touches.push(h(f, k, g.identifier, this.yf));
                this.b.trigger(nd.prototype.e.Mt, this);
                this.b.trigger(nd.prototype.e.Ep, this);
                this.Lf = f;
                this.Mf = k;
                this.b.trigger(nd.prototype.e.Pt, this)
            }
        this.b.lf = !1
    };
    a.bs = function(a, b) {
        a.preventDefault && Kb(a) && a.preventDefault();
        this.b.lf = !0;
        var c, d, e;
        c = 0;
        for (d = a.changedTouches.length; c < d; c++) e = a.changedTouches[c], e = this.Ak(e.identifier), 0 <= e && (this.yf = this.touches[e].Sl, this.Vj = this.touches[e].id, this.b.trigger(nd.prototype.e.Lt, this), this.b.trigger(nd.prototype.e.Dp, this), b || this.touches[e].ow(this, e), 100 > p.length && p.push(this.touches[e]), this.touches.splice(e, 1));
        this.b.lf = !1
    };
    a.Oe = function() {
        return this.b.Cd && 0 === this.Zn && 0 !== k ? 90 * k : this.Zn
    };
    a.Tg = function() {
        return this.b.Cd && 0 === this.$n && 0 !== g ? 90 * g : this.$n
    };
    a.sh = function() {
        return this.b.Cd && 0 === this.ao && 0 !== c ? 90 * c : this.ao
    };
    a.oE = function(a) {
        l(a) || (this.Rw({
            changedTouches: [{
                pageX: a.pageX,
                pageY: a.pageY,
                identifier: 0
            }]
        }), this.Rr = !0)
    };
    a.pE = function(a) {
        this.Rr && !l(a) && this.Qw({
            changedTouches: [{
                pageX: a.pageX,
                pageY: a.pageY,
                identifier: 0
            }]
        })
    };
    a.qE = function(a) {
        a.preventDefault && this.b.pv && !this.b.bj && a.preventDefault();
        this.b.pv = !0;
        l(a) || (this.bs({
            changedTouches: [{
                pageX: a.pageX,
                pageY: a.pageY,
                identifier: 0
            }]
        }), this.Rr = !1)
    };
    a.bp = function() {
        var a, b, c, d = tb();
        a = 0;
        for (b = this.touches.length; a < b; ++a) c = this.touches[a], c.time <= d - 50 && (c.Cr = d), c.gE(this, a)
    };
    r.prototype.Ep = function() {
        return !0
    };
    r.prototype.Dp = function() {
        return !0
    };
    r.prototype.iz = function() {
        return this.touches.length
    };
    r.prototype.Pt = function(a) {
        return a ? this.b.Xo(a, this.Lf, this.Mf) : !1
    };
    var z = [];
    r.prototype.mz = function(a) {
        if (!a) return !1;
        var b = a.ba(),
            c = b.Pc(),
            d, e, g, f, h, k;
        g = 0;
        for (f = c.length; g < f; g++) {
            var l = c[g];
            l.La();
            h = 0;
            for (k = this.touches.length; h < k; h++)
                if (e = this.touches[h], d = l.q.Ac(e.x, e.y, !0), e = l.q.Ac(e.x, e.y, !1), l.Mc(d, e)) {
                    z.push(l);
                    break
                }
        }
        return z.length ? (b.ua = !1, Wa(b.d, z), a.xd(), B(z), !0) : !1
    };
    r.prototype.Mt = function(a) {
        a = Math.floor(a);
        return a === this.yf
    };
    r.prototype.Lt = function(a) {
        a = Math.floor(a);
        return a === this.yf
    };
    r.prototype.Hz = function() {
        return !0
    };
    r.prototype.Yz = function() {
        return !0
    };
    r.prototype.Fz = function() {
        return !0
    };
    r.prototype.Iz = function(a) {
        return a ? this.b.Xo(a, this.Lf, this.Mf) : !1
    };
    r.prototype.Ot = function(a) {
        return a ? this.b.Xo(a, this.Lf, this.Mf) : !1
    };
    r.prototype.Gz = function(a) {
        return a ? this.b.Xo(a, this.Lf, this.Mf) : !1
    };
    d.e = new r;
    m.prototype.Jp = function(a, b) {
        var c = this.Yi;
        if (0 > c || c >= this.touches.length) a.B(0);
        else {
            var d, e, g, f, h;
            ta(b) ? (d = this.b.Wi(0), e = d.scale, g = d.$e, f = d.se, h = d.j, d.scale = 1, d.$e = 1, d.se = 1, d.j = 0, a.B(d.Ac(this.touches[c].x, this.touches[c].y, !0)), d.scale = e, d.$e = g, d.se = f, d.j = h) : (d = va(b) ? this.b.Wi(b) : this.b.gn(b)) ? a.B(d.Ac(this.touches[c].x, this.touches[c].y, !0)) : a.B(0)
        }
    };
    m.prototype.Kp = function(a, b) {
        var c = this.Yi;
        if (0 > c || c >= this.touches.length) a.B(0);
        else {
            var d, e, g, f, h;
            ta(b) ? (d = this.b.Wi(0), e = d.scale, g = d.$e, f = d.te, h = d.j, d.scale = 1, d.$e = 1, d.te = 1, d.j = 0, a.B(d.Ac(this.touches[c].x, this.touches[c].y, !1)), d.scale = e, d.$e = g, d.te = f, d.j = h) : (d = va(b) ? this.b.Wi(b) : this.b.gn(b)) ? a.B(d.Ac(this.touches[c].x, this.touches[c].y, !1)) : a.B(0)
        }
    };
    d.H = new m
})();

function od(f, h, e, l, r, m) {
    function d(a) {
        return q == f[a] && Q == f[a + 1] && J == f[a + 2]
    }

    function a(a) {
        f[a] = c;
        f[a + 1] = g;
        f[a + 2] = k;
        f[a + 3] = 255
    }

    function b(a) {
        d(p + 4 * a) ? n[a] || (z.push([l + a, r]), n[a] = !0) : n[a] && (n[a] = !1)
    }
    if (!(0 > l || l > h || 0 > r || r > e)) {
        m = $("<div></div>").css("background-color", m).css("background-color");
        "transparent" == m && (m = "rgb(0,0,0)");
        m = m.slice(4, -1).split(",");
        var c = m[0],
            g = m[1],
            k = m[2],
            p = 4 * (r * h + l),
            q = f[p],
            Q = f[p + 1],
            J = f[p + 2];
        if (c != q || g != Q || k != J)
            for (var z = [
                    [l, r]
                ]; z.length;) {
                m = z.pop();
                l = m[0];
                r = m[1];
                for (p = 4 * (r * h +
                        l); 0 <= r-- && d(p);) p -= 4 * h;
                p += 4 * h;
                ++r;
                var n = [];
                n[-1] = !1;
                for (n[1] = !1; r++ < e - 1 && d(p);) a(p), 0 < l && b(-1), l < h - 1 && b(1), p += 4 * h
            }
    }
}

function pd(f) {
    this.b = f
}
(function() {
    var f = pd.prototype;
    f.Ha = function(e) {
        this.Ua = e;
        this.b = e.b
    };
    f.Ha.prototype.Y = function() {
        this.U || (this.aa = new Image, this.aa.src = this.Wl, this.aa.nq = this.Zo, this.b.xi.push(this.aa))
    };
    f.wa = function(e) {
        this.type = e;
        this.b = e.b
    };
    var h = f.wa.prototype,
        e = "lighter xor copy destination-over source-in destination-in source-out destination-out source-atop destination-atop".split(" ");
    h.Iu = function(f) {
        return 0 >= f || 11 <= f ? "source-over" : e[f - 1]
    };
    h.OF = function(e) {
        var f = this.b.L;
        if (f) switch (this.fb = f.ONE, this.eb = f.ONE_MINUS_SRC_ALPHA, e) {
            case 1:
                this.eb = this.fb = f.ONE;
                break;
            case 3:
                this.fb = f.ONE;
                this.eb = f.ZERO;
                break;
            case 4:
                this.fb = f.ONE_MINUS_DST_ALPHA;
                this.eb = f.ONE;
                break;
            case 5:
                this.fb = f.DST_ALPHA;
                this.eb = f.ZERO;
                break;
            case 6:
                this.fb = f.ZERO;
                this.eb = f.SRC_ALPHA;
                break;
            case 7:
                this.fb = f.ONE_MINUS_DST_ALPHA;
                this.eb = f.ZERO;
                break;
            case 8:
                this.fb = f.ZERO;
                this.eb = f.ONE_MINUS_SRC_ALPHA;
                break;
            case 9:
                this.fb = f.DST_ALPHA;
                this.eb = f.ONE_MINUS_SRC_ALPHA;
                break;
            case 10:
                this.fb = f.ONE_MINUS_DST_ALPHA, this.eb = f.SRC_ALPHA
        }
    };
    h.Y = function() {
        this.visible = 0 === this.D[0];
        this.fe = this.Iu(this.D[1]);
        this.OF(this.D[1]);
        this.canvas = document.createElement("canvas");
        this.canvas.width = this.width;
        this.canvas.height = this.height;
        this.I = this.canvas.getContext("2d");
        this.I.drawImage(this.type.aa, 0, 0, this.width, this.height);
        this.Nj = document.createElement("canvas");
        this.EF = this.Nj.getContext("2d");
        this.dd = !0;
        this.Ao = new Ma(0, 0, 0, 0)
    };
    h.of = function() {};
    h.nc = function() {
        return {
            canvas_w: this.canvas.width,
            canvas_h: this.canvas.height,
            image: this.I.getImageData(0, 0, this.canvas.width, this.canvas.height).data
        }
    };
    h.Ec = function(e) {
        for (var f = this.canvas.width = e.canvas_w, h = this.canvas.height = e.canvas_h, d = this.I.getImageData(0, 0, this.canvas.width, this.canvas.height).data, a = 0; a < h; ++a)
            for (var b = 0; b < f; ++b)
                for (var c = 4 * (a * f + b), g = 0; 4 > g; ++g) d[c + g] = e.image[c + g]
    };
    h.Hu = function(e, f) {
        for (var h in e)
            if (0 != e[h].visible || 0 != this.b.Ts(this, e[h])) f.save(), f.scale(this.canvas.width / this.width, this.canvas.height / this.height), f.rotate(-this.j), f.translate(-this.Lc.rb, -this.Lc.sb), f.globalCompositeOperation = e[h].fe, void 0 !== e[h].type.pattern && void 0 !== e[h].type.aa && (e[h].pattern = f.createPattern(e[h].type.aa, "repeat")), e[h].Ad(f), f.restore()
    };
    h.Ad = function(e) {
        e.save();
        e.globalAlpha = this.opacity;
        e.globalCompositeOperation = this.fe;
        var f = this.x,
            h = this.y;
        this.b.Xd && (f = Math.round(f), h = Math.round(h));
        e.translate(f, h);
        e.rotate(this.j);
        e.drawImage(this.canvas, 0 - this.gc * this.width, 0 - this.hc * this.height, this.width, this.height);
        e.restore()
    };
    h.Nc = function(e) {
        e.eg(this.fb, this.eb);
        this.dd && (this.Us && e.deleteTexture(this.Us), this.Us = e.fi(this.canvas, !1, this.b.ib), this.dd = !1);
        e.qd(this.Us);
        e.mh(this.opacity);
        var f = this.Lc;
        if (this.b.Xd) {
            var h = Math.round(this.x) - this.x,
                d = Math.round(this.y) - this.y;
            e.ih(f.rb + h, f.sb + d, f.oc + h, f.pc + d, f.$b + h, f.ac + d, f.Yb + h, f.Zb + d)
        } else e.ih(f.rb, f.sb, f.oc, f.pc, f.$b, f.ac, f.Yb, f.Zb)
    };
    f.e = {};
    f.k = {};
    h = f.k;
    h.Gp = function(e) {
        this.fe = this.Iu(e);
        this.dd = this.b.O = !0
    };
    h.rG = function(e, f, h) {
        var d = this.I;
        d.fillStyle = h;
        d.fillRect(e, f, 1, 1);
        this.dd = this.b.O = !0
    };
    h.cA = function(e, f) {
        this.canvas.width = e;
        this.canvas.height = f;
        this.dd = this.b.O = !0
    };
    h.VG = function(e) {
        var f = this.I;
        this.La();
        e = e.ba();
        this.Hu(e.ua ? e.type.d : e.d, f);
        this.dd = this.b.O = !0
    };
    h.UG = function(e) {
        if (!e || !e.visible) return !1;
        var f = this.I;
        this.La();
        this.Nj.width = this.canvas.width;
        this.Nj.height = this.canvas.height;
        var h = this.EF;
        h.clearRect(0, 0, this.Nj.width, this.Nj.height);
        this.Hu(e.d, h);
        f.drawImage(this.Nj, 0, 0, this.width, this.height);
        this.dd = this.b.O = !0
    };
    h.qG = function(e, f, h, d, a) {
        this.I.fillStyle = a;
        this.I.fillRect(e, f, h, d);
        this.dd = this.b.O = !0
    };
    h.Ty = function(e, f, h, d, a, b) {
        var c = this.I;
        c.strokeStyle = a;
        c.lineWidth = b;
        c.beginPath();
        c.moveTo(e, f);
        c.lineTo(h, d);
        c.stroke();
        this.dd = this.b.O = !0
    };
    h.Hy = function() {
        this.I.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.dd = this.b.O = !0
    };
    h.tG = function(e) {
        this.I.fillStyle = e;
        this.I.fillRect(0, 0, this.canvas.width, this.canvas.height);
        this.dd = this.b.O = !0
    };
    h.TH = function(e, f, h) {
        var d = this.I,
            a = this.canvas.width,
            b = this.canvas.height,
            c;
        switch (e) {
            case 0:
                c = d.createLinearGradient(0, 0, a, 0);
                break;
            case 1:
                c = d.createLinearGradient(0, 0, 0, b);
                break;
            case 2:
                c = d.createLinearGradient(0, 0, a, b);
                break;
            case 3:
                c = d.createLinearGradient(a, 0, 0, b);
                break;
            case 4:
                c = d.createRadialGradient(a / 2, b / 2, 0, a / 2, b / 2, Math.sqrt(a * a + b * b) / 2)
        }
        try {
            c.addColorStop(0, f)
        } catch (g) {
            c.addColorStop(0, "black")
        }
        try {
            c.addColorStop(1, h)
        } catch (k) {
            c.addColorStop(1, "black")
        }
        this.I.fillStyle = c;
        this.I.fillRect(0, 0, a, b);
        this.dd = this.b.O = !0
    };
    h.beginPath = function() {
        this.I.beginPath()
    };
    h.cC = function(e, f) {
        var h = this.I;
        h.strokeStyle = e;
        h.lineWidth = f;
        h.stroke();
        this.dd = this.b.O = !0
    };
    h.nF = function(e, f) {
        var h = this.I;
        h.lineCap = ["butt", "round", "square"][e];
        h.lineJoin = ["round", "bevel", "milet"][f]
    };
    h.UH = function(e) {
        this.I.fillStyle = e;
        this.I.fill();
        this.dd = this.b.O = !0
    };
    h.moveTo = function(e, f) {
        this.I.moveTo(e, f)
    };
    h.lineTo = function(e, f) {
        this.I.lineTo(e, f)
    };
    h.arc = function(e, f, h, d, a, b) {
        this.I.arc(e, f, h, bb(d), bb(a), 1 == b)
    };
    h.SH = function(e, f, h, d, a) {
        var b = this.I;
        b.strokeStyle = d;
        b.lineWidth = a;
        b.beginPath();
        b.arc(e, f, h, 0, bb(360), !0);
        b.stroke();
        this.dd = this.b.O = !0
    };
    h.bezierCurveTo = function(e, f, h, d, a, b) {
        this.I.bezierCurveTo(e, f, h, d, a, b)
    };
    h.quadraticCurveTo = function(e, f, h, d) {
        this.I.quadraticCurveTo(e, f, h, d)
    };
    h.pI = function(e, f, h, d) {
        this.I.rect(e, f, h, d)
    };
    h.uG = function(e, f, h) {
        var d = this.I,
            a = d.getImageData(0, 0, this.canvas.width, this.canvas.height);
        od(a.data, this.canvas.width, this.canvas.height, e, f, h);
        d.putImageData(a, 0, 0);
        this.dd = this.b.O = !0
    };
    h.setLineDash = function(e, f) {
        this.I.setLineDash([e, f])
    };
    f.H = {};
    f = f.H;
    f.tI = function(e, f, h) {
        f = this.I.getImageData(f, h, 1, 1).data;
        e.kb("rgba(" + f[0] + "," + f[1] + "," +
            f[2] + "," + f[3] / 255 + ")")
    };
    f.qI = function(e, f, h) {
        f = this.I.getImageData(f, h, 1, 1).data;
        e.S(f[0])
    };
    f.ZH = function(e, f, h) {
        f = this.I.getImageData(f, h, 1, 1).data;
        e.S(f[1])
    };
    f.PH = function(e, f, h) {
        f = this.I.getImageData(f, h, 1, 1).data;
        e.S(f[2])
    };
    f.NH = function(e, f, h) {
        f = this.I.getImageData(f, h, 1, 1).data;
        e.S(100 * f[3] / 255)
    };
    f.aI = function(e) {
        e.kb(this.canvas.toDataURL())
    };
    f.wp = function(e) {
        e.kb(JSON.stringify({
            c2array: !0,
            size: [1, 1, this.canvas.width * this.canvas.height * 4],
            data: [
                [this.I.getImageData(0, 0, this.canvas.width, this.canvas.height).data]
            ]
        }))
    }
})();

function qd(f) {
    this.b = f
}
(function() {
    var f = qd.prototype;
    f.Ha = function(e) {
        this.behavior = e;
        this.b = e.b
    };
    f.Ha.prototype.Y = function() {};
    f.wa = function(e, f) {
        this.type = e;
        this.behavior = e.behavior;
        this.c = f;
        this.b = e.b
    };
    var h = f.wa.prototype;
    h.Y = function() {
        this.zc = null;
        this.ko = -1;
        this.mode = this.bl = this.Vs = this.tl = this.fh = this.jo = 0;
        var e = this;
        this.Jd || (this.yw = function(f) {
            e.as(f)
        });
        this.b.Pp(this.yw)
    };
    h.nc = function() {
        return {
            uid: this.zc ? this.zc.uid : -1,
            pa: this.jo,
            pd: this.fh,
            msa: this.tl,
            tsa: this.Vs,
            lka: this.bl,
            m: this.mode
        }
    };
    h.Ec = function(e) {
        this.ko = e.uid;
        this.jo = e.pa;
        this.fh = e.pd;
        this.tl = e.msa;
        this.Vs = e.tsa;
        this.bl = e.lka;
        this.mode = e.m
    };
    h.Df = function() {
        -1 === this.ko ? this.zc = null : this.zc = this.b.Xi(this.ko);
        this.ko = -1
    };
    h.as = function(e) {
        this.zc == e && (this.zc = null)
    };
    h.of = function() {
        this.zc = null;
        this.b.UE(this.yw)
    };
    h.Hb = function() {};
    h.bp = function() {
        if (this.zc) {
            this.bl !== this.c.j && (this.tl = gb(this.tl + (this.c.j - this.bl)));
            var e = this.c.x,
                f = this.c.y;
            if (3 === this.mode || 4 === this.mode) {
                var h = pb(this.c.x, this.c.y, this.zc.x, this.zc.y);
                if (h > this.fh || 4 === this.mode && h < this.fh) f = jb(this.zc.x, this.zc.y, this.c.x, this.c.y), e = this.zc.x + Math.cos(f) * this.fh, f = this.zc.y + Math.sin(f) * this.fh
            } else e = this.zc.x + Math.cos(this.zc.j + this.jo) * this.fh, f = this.zc.y + Math.sin(this.zc.j + this.jo) * this.fh;
            this.bl = h = gb(this.tl + (this.zc.j - this.Vs));
            0 !== this.mode && 1 !== this.mode && 3 !== this.mode && 4 !== this.mode || this.c.x === e && this.c.y === f || (this.c.x = e, this.c.y = f, this.c.gb());
            0 !== this.mode && 2 !== this.mode || this.c.j === h || (this.c.j = h, this.c.gb())
        }
    };
    f.e = new function() {};
    f.k = new function() {};
    f.H = new function() {}
})();

function rd(f) {
    this.b = f
}
(function() {
    function f() {}

    function h() {}
    var e = rd.prototype;
    e.Ha = function(a) {
        this.behavior = a;
        this.b = a.b
    };
    e.Ha.prototype.Y = function() {};
    e.wa = function(a, b) {
        this.type = a;
        this.behavior = a.behavior;
        this.c = b;
        this.b = a.b;
        this.Za = 0
    };
    var l = e.wa.prototype,
        r = 2 * Math.PI,
        m = Math.PI / 2,
        d = 3 * Math.PI / 2;
    l.Y = function() {
        this.Ya = 1 === this.D[0];
        this.li = this.D[1];
        this.pt = this.D[2];
        this.$f = this.D[3];
        this.$f += Math.random() * this.D[4];
        0 === this.$f ? this.Za = 0 : (this.Za = this.D[5] / this.$f * r, this.Za += Math.random() * this.D[6] / this.$f * r);
        this.ad = this.D[7];
        this.ad += Math.random() * this.D[8];
        this.bg = this.Xh = this.Ea = 0;
        5 === this.li && (this.ad = bb(this.ad));
        this.init()
    };
    l.nc = function() {
        return {
            i: this.Za,
            a: this.Ya,
            mv: this.li,
            w: this.pt,
            p: this.$f,
            mag: this.ad,
            iv: this.Ea,
            iv2: this.Xh,
            r: this.bg,
            lkv: this.la,
            lkv2: this.ob
        }
    };
    l.Ec = function(a) {
        this.Za = a.i;
        this.Ya = a.a;
        this.li = a.mv;
        this.pt = a.w;
        this.$f = a.p;
        this.ad = a.mag;
        this.Ea = a.iv;
        this.Xh = a.iv2 || 0;
        this.bg = a.r;
        this.la = a.lkv;
        this.ob = a.lkv2 || 0
    };
    l.init = function() {
        switch (this.li) {
            case 0:
                this.Ea = this.c.x;
                break;
            case 1:
                this.Ea = this.c.y;
                break;
            case 2:
                this.Ea = this.c.width;
                this.bg = this.c.height / this.c.width;
                break;
            case 3:
                this.Ea = this.c.width;
                break;
            case 4:
                this.Ea = this.c.height;
                break;
            case 5:
                this.Ea = this.c.j;
                break;
            case 6:
                this.Ea = this.c.opacity;
                break;
            case 7:
                this.Ea = 0;
                break;
            case 8:
                this.Ea = this.c.x, this.Xh = this.c.y
        }
        this.la = this.Ea;
        this.ob = this.Xh
    };
    l.zf = function(a) {
        a = a % r;
        switch (this.pt) {
            case 0:
                return Math.sin(a);
            case 1:
                return a <= m ? a / m : a <= d ? 1 - 2 * (a - m) / Math.PI : (a - d) / m - 1;
            case 2:
                return 2 * a / r - 1;
            case 3:
                return -2 * a / r + 1;
            case 4:
                return a < Math.PI ? -1 : 1
        }
        return 0
    };
    l.Hb = function() {
        var a = this.b.Vi(this.c);
        this.Ya && 0 !== a && (0 === this.$f ? this.Za = 0 : (this.Za += a / this.$f * r, this.Za = this.Za % r), this.PF())
    };
    l.PF = function() {
        switch (this.li) {
            case 0:
                this.c.x !== this.la && (this.Ea += this.c.x - this.la);
                this.c.x = this.Ea + this.zf(this.Za) * this.ad;
                this.la = this.c.x;
                break;
            case 1:
                this.c.y !== this.la && (this.Ea += this.c.y - this.la);
                this.c.y = this.Ea + this.zf(this.Za) * this.ad;
                this.la = this.c.y;
                break;
            case 2:
                this.c.width = this.Ea + this.zf(this.Za) * this.ad;
                this.c.height = this.c.width * this.bg;
                break;
            case 3:
                this.c.width = this.Ea + this.zf(this.Za) * this.ad;
                break;
            case 4:
                this.c.height = this.Ea + this.zf(this.Za) * this.ad;
                break;
            case 5:
                this.c.j !== this.la && (this.Ea = gb(this.Ea + (this.c.j - this.la)));
                this.c.j = gb(this.Ea + this.zf(this.Za) * this.ad);
                this.la = this.c.j;
                break;
            case 6:
                this.c.opacity = this.Ea + this.zf(this.Za) * this.ad / 100;
                0 > this.c.opacity ? this.c.opacity = 0 : 1 < this.c.opacity && (this.c.opacity = 1);
                break;
            case 8:
                this.c.x !== this.la && (this.Ea += this.c.x - this.la), this.c.y !== this.ob && (this.Xh += this.c.y - this.ob), this.c.x = this.Ea + Math.cos(this.c.j) * this.zf(this.Za) * this.ad, this.c.y = this.Xh + Math.sin(this.c.j) * this.zf(this.Za) * this.ad, this.la = this.c.x, this.ob = this.c.y
        }
        this.c.gb()
    };
    l.Pw = function(a, b) {
        switch (this.li) {
            case 2:
                this.Ea *= b.width / a.width;
                this.bg = b.height / b.width;
                break;
            case 3:
                this.Ea *= b.width / a.width;
                break;
            case 4:
                this.Ea *= b.height / a.height
        }
    };
    f.prototype.zt = function() {
        return this.Ya
    };
    e.e = new f;
    e.k = new function() {};
    h.prototype.Vt = function(a) {
        a.B(this.zf(this.Za) * this.ad)
    };
    e.H = new h
})();
var sd = [],
    td = [],
    ud = [],
    vd = [],
    wd = [],
    xd = [],
    yd = [],
    zd = [],
    Dd = [],
    Ed = [];

function Fd(f) {
    return result = (f /= 1) < 1 / 2.75 ? 7.5625 * f * f + 0 : f < 2 / 2.75 ? 1 * (7.5625 * (f -= 1.5 / 2.75) * f + .75) + 0 : f < 2.5 / 2.75 ? 1 * (7.5625 * (f -= 2.25 / 2.75) * f + .9375) + 0 : 1 * (7.5625 * (f -= 2.625 / 2.75) * f + .984375) + 0
}

function Gd(f, h) {
    return Math.round(f / h * 1E4)
}

function Hd(f, h, e, l, r) {
    var m = 0;
    switch (f) {
        case 0:
            m = 1 * h / e + 0;
            break;
        case 1:
            m = 1 * (h /= e) * h + 0;
            break;
        case 2:
            m = -1 * (h /= e) * (h - 2) + 0;
            break;
        case 3:
            m = 1 > (h /= e / 2) ? .5 * h * h + 0 : -.5 * (--h * (h - 2) - 1) + 0;
            break;
        case 4:
            m = 1 * (h /= e) * h * h + 0;
            break;
        case 5:
            m = 1 * ((h = h / e - 1) * h * h + 1) + 0;
            break;
        case 6:
            m = 1 > (h /= e / 2) ? .5 * h * h * h + 0 : .5 * ((h -= 2) * h * h + 2) + 0;
            break;
        case 7:
            m = 1 * (h /= e) * h * h * h + 0;
            break;
        case 8:
            m = -1 * ((h = h / e - 1) * h * h * h - 1) + 0;
            break;
        case 9:
            m = 1 > (h /= e / 2) ? .5 * h * h * h * h + 0 : -.5 * ((h -= 2) * h * h * h - 2) + 0;
            break;
        case 10:
            m = 1 * (h /= e) * h * h * h * h + 0;
            break;
        case 11:
            m = 1 * ((h = h / e - 1) * h * h * h * h + 1) + 0;
            break;
        case 12:
            m = 1 > (h /= e / 2) ? .5 * h * h * h * h * h + 0 : .5 * ((h -= 2) * h * h * h * h + 2) + 0;
            break;
        case 13:
            r.Hd ? m = wd[Gd(h, e)] : m = -(Math.sqrt(1 - h * h) - 1);
            break;
        case 14:
            r.Hd ? m = xd[Gd(h, e)] : m = Math.sqrt(1 - (h - 1) * (h - 1));
            break;
        case 15:
            m = r.Hd ? yd[Gd(h, e)] : 1 > (h /= e / 2) ? -.5 * (Math.sqrt(1 - h * h) - 1) + 0 : .5 * (Math.sqrt(1 - (h -= 2) * h) + 1) + 0;
            break;
        case 16:
            r.Hd ? m = zd[Gd(h, e)] : (r = r.nd, m = 1 * (h /= e) * h * ((r + 1) * h - r) + 0);
            break;
        case 17:
            r.Hd ? m = Dd[Gd(h, e)] : (r = r.nd, m = 1 * ((h = h / e - 1) * h * ((r + 1) * h + r) + 1) + 0);
            break;
        case 18:
            r.Hd ? m = Ed[Gd(h, e)] : (r = r.nd, m = 1 > (h /= e / 2) ? .5 * h * h * (((r *= 1.525) + 1) * h - r) + 0 : .5 * ((h -= 2) * h * (((r *= 1.525) + 1) * h + r) + 2) + 0);
            break;
        case 19:
            r.Hd ? m = td[Gd(h, e)] : (m = r.A, f = r.ca, h /= e, 0 == f && (f = .3 * e), 0 == m || m < Math.abs(1) ? (m = 1, r = f / 4) : r = f / (2 * Math.PI) * Math.asin(1 / m), m = -(m * Math.pow(2, 10 * --h) * Math.sin(2 * (h * e - r) * Math.PI / f)) + 0);
            break;
        case 20:
            r.Hd ? m = ud[Gd(h, e)] : (m = r.A, f = r.ca, h /= e, 0 == f && (f = .3 * e), 0 == m || m < Math.abs(1) ? (m = 1, r = f / 4) : r = f / (2 * Math.PI) * Math.asin(1 / m), m = m * Math.pow(2, -10 * h) * Math.sin(2 * (h * e - r) * Math.PI / f) + 1);
            break;
        case 21:
            r.Hd ? m = vd[Gd(h, e)] : (m = r.A, f = r.ca, h /= e / 2, 0 == f && (f = .3 * e * 1.5), 0 == m || m < Math.abs(1) ? (m = 1, r = f / 4) : r = f / (2 * Math.PI) * Math.asin(1 / m), m = 1 > h ? -.5 * m * Math.pow(2, 10 * --h) * Math.sin(2 * (h * e - r) * Math.PI / f) + 0 : m * Math.pow(2, -10 * --h) * Math.sin(2 * (h * e - r) * Math.PI / f) * .5 + 1);
            break;
        case 22:
            m = r.Hd ? 1 - sd[Gd(e - h, e)] + 0 : 1 - Fd(e - h / e) + 0;
            break;
        case 23:
            m = r.Hd ? sd[Gd(h, e)] : Fd(h / e);
            break;
        case 24:
            m = r.Hd ? h < e / 2 ? .5 * (1 - sd[Gd(e - 2 * h, e)] + 0) + 0 : .5 * sd[Gd(2 * h - e, e)] + .5 : h < e / 2 ? .5 * (1 - Fd(e - 2 * h) + 0) + 0 : .5 * Fd((2 * h - e) / e) + .5;
            break;
        case 25:
            h = h / e / 2;
            m = 2 * h * h * (3 - 2 * h);
            break;
        case 26:
            h = (h / e + 1) / 2;
            m = 2 * h * h * (3 - 2 * h) - 1;
            break;
        case 27:
            h = h / e, m = h * h * (3 - 2 * h)
    }
    return l ? 1 - m : m
}
for (var Id = 0, Jd = 0, Kd = 0, V = 0, Ld = 0, Md = 0; 1E4 >= Md; Md++) V = Md / 1E4, Id = (V /= 1) < 1 / 2.75 ? 7.5625 * V * V + 0 : V < 2 / 2.75 ? 1 * (7.5625 * (V -= 1.5 / 2.75) * V + .75) + 0 : V < 2.5 / 2.75 ? 1 * (7.5625 * (V -= 2.25 / 2.75) * V + .9375) + 0 : 1 * (7.5625 * (V -= 2.625 / 2.75) * V + .984375) + 0, sd[Md] = Id, V = Md / 1E4, Kd = Jd = 0, V /= 1, 0 == Kd && (Kd = .3), 0 == Jd || Jd < Math.abs(1) ? (Jd = 1, Ld = Kd / 4) : Ld = Kd / (2 * Math.PI) * Math.asin(1 / Jd), Id = -(Jd * Math.pow(2, 10 * --V) * Math.sin(2 * (1 * V - Ld) * Math.PI / Kd)) + 0, td[Md] = Id, V = Md / 1E4, Kd = Jd = 0, V /= 1, 0 == Kd && (Kd = .3), 0 == Jd || Jd < Math.abs(1) ? (Jd = 1, Ld = Kd / 4) : Ld = Kd / (2 * Math.PI) * Math.asin(1 / Jd), Id = Jd * Math.pow(2, -10 * V) * Math.sin(2 * (1 * V - Ld) * Math.PI / Kd) + 1, ud[Md] = Id, V = Md / 1E4, Kd = Jd = 0, V /= .5, 0 == Kd && (Kd = .3 * 1.5), 0 == Jd || Jd < Math.abs(1) ? (Jd = 1, Ld = Kd / 4) : Ld = Kd / (2 * Math.PI) * Math.asin(1 / Jd), Id = 1 > V ? -.5 * Jd * Math.pow(2, 10 * --V) * Math.sin(2 * (1 * V - Ld) * Math.PI / Kd) + 0 : Jd * Math.pow(2, -10 * --V) * Math.sin(2 * (1 * V - Ld) * Math.PI / Kd) * .5 + 1, vd[Md] = Id, V = Md / 1E4, wd[Md] = -(Math.sqrt(1 - V * V) - 1), V = Md / 1E4, xd[Md] = Math.sqrt(1 - (V - 1) * (V - 1)), V = Md / 1E4, Id = 1 > (V /= .5) ? -.5 * (Math.sqrt(1 - V * V) - 1) + 0 : .5 * (Math.sqrt(1 - (V -= 2) * V) + 1) + 0, yd[Md] = Id, V = Md / 1E4, Ld = 0, 0 == Ld && (Ld = 1.70158), Id = 1 * (V /= 1) * V * ((Ld + 1) * V - Ld) + 0, zd[Md] = Id, V = Md / 1E4, Ld = 0, 0 == Ld && (Ld = 1.70158), Id = 1 * ((V = V / 1 - 1) * V * ((Ld + 1) * V + Ld) + 1) + 0, Dd[Md] = Id, V = Md / 1E4, Ld = 0, 0 == Ld && (Ld = 1.70158), Id = 1 > (V /= .5) ? .5 * V * V * (((Ld *= 1.525) + 1) * V - Ld) + 0 : .5 * ((V -= 2) * V * (((Ld *= 1.525) + 1) * V + Ld) + 2) + 0, Ed[Md] = Id;

function Nd(f, h, e, l, r, m, d) {
    this.name = f;
    this.value = 0;
    this.Fj(l);
    this.No(r);
    this.Oh = e;
    this.tb = h;
    this.duration = m;
    this.state = this.ta = 0;
    this.Xn = this.Yn = this.Tn = this.wj = !1;
    this.ob = this.la = 0;
    this.Oc = d;
    this.ag = 1;
    this.Bk = !1;
    this.Od = [];
    this.Kv = 1;
    for (f = 0; 28 > f; f++) this.Od[f] = {}, this.Od[f].A = 0, this.Od[f].ca = 0, this.Od[f].Wb = 0, this.Od[f].nd = 0, this.Od[f].Hd = !0
}
Nd.prototype = {};
Nd.prototype.Fj = function(f) {
    this.Ja = parseFloat(f.split(",")[0]);
    this.Nb = parseFloat(f.split(",")[1]);
    this.ob = this.la = 0
};
Nd.prototype.No = function(f) {
    this.Ga = parseFloat(f.split(",")[0]);
    this.Db = parseFloat(f.split(",")[1]);
    isNaN(this.Db) && (this.Db = this.Ga)
};
Nd.prototype.Cp = function(f) {
    if (0 === this.state) return -1;
    1 === this.state && (this.ta += f);
    2 === this.state && (this.ta -= f);
    3 === this.state && (this.state = 0);
    if (4 === this.state || 6 === this.state) this.ta += f * this.ag;
    5 === this.state && (this.ta += f * this.ag);
    return 0 > this.ta ? (this.ta = 0, 4 === this.state ? this.ag = 1 : 6 === this.state ? (this.ag = 1, this.Bk = !1) : this.state = 0, this.Xn = !0, 0) : this.ta > this.duration ? (this.ta = this.duration, 4 === this.state ? this.ag = -1 : 6 === this.state ? (this.ag = -1, this.Bk = !0) : 5 === this.state ? this.ta = 0 : this.state = 0, this.Tn = !0, 1) : this.Bk ? Hd(this.Oh, this.duration - this.ta, this.duration, this.Bk, this.Od[this.Oh]) : Hd(this.Oh, this.ta, this.duration, this.Bk, this.Od[this.Oh])
};

function Wd(f) {
    this.b = f
}
(function() {
    var f = Wd.prototype;
    f.Ha = function(e) {
        this.behavior = e;
        this.b = e.b
    };
    f.Ha.prototype.Y = function() {};
    f.wa = function(e, f) {
        this.type = e;
        this.behavior = e.behavior;
        this.c = f;
        this.b = e.b;
        this.Za = 0
    };
    var h = f.wa.prototype;
    h.Y = function() {
        this.zj = this.D[0];
        this.Ya = 1 == this.zj || 2 == this.zj || 3 == this.zj || 4 == this.zj;
        this.tb = this.D[1];
        this.wq = this.D[2];
        this.target = this.D[3];
        this.Wo = this.D[4];
        this.np = !1;
        1 === this.Wo && (this.target = "relative(" + this.target + ")");
        this.duration = this.D[5];
        this.Oc = 1 === this.D[6];
        this.value = 0;
        this.J = {};
        this.gu(this.tb, this.wq, "current", this.target, this.duration, this.Oc);
        1 === this.D[0] && this.Rl(0);
        2 === this.D[0] && this.Rl(2);
        3 === this.D[0] && this.Rl(3);
        4 === this.D[0] && this.Rl(4)
    };
    h.qf = function(e, f) {
        void 0 === f && (f = "current");
        var h = f.replace(/^\s\s*/, "").replace(/\s\s*$/, "");
        f = f.replace(/^\s\s*/, "").replace(/\s\s*$/, "");
        var m = this.value;
        if ("current" === f) switch (e) {
            case 0:
                h = this.c.x + "," + this.c.y;
                break;
            case 1:
                h = this.c.width + "," + this.c.height;
                break;
            case 2:
                h = this.c.width + "," + this.c.height;
                break;
            case 3:
                h = this.c.width + "," + this.c.height;
                break;
            case 4:
                h = cb(this.c.j) + "," + cb(this.c.j);
                break;
            case 5:
                h = 100 * this.c.opacity + "," + 100 * this.c.opacity;
                break;
            case 6:
                h = m + "," + m;
                break;
            case 7:
                h = this.c.x + "," + this.c.y;
                break;
            case 8:
                h = this.c.x + "," + this.c.y;
                break;
            case 9:
                h = void 0 !== this.c.mb ? this.c.width / this.c.mb.width + "," + this.c.height / this.c.mb.height : "1,1"
        }
        if ("relative" === f.substring(0, 8)) {
            var d = f.match(/\((.*?)\)/);
            if (d) var a = parseFloat(d[1].split(",")[0]),
                b = parseFloat(d[1].split(",")[1]);
            isNaN(a) && (a = 0);
            isNaN(b) && (b = 0);
            switch (e) {
                case 0:
                    h = this.c.x + a + "," + (this.c.y + b);
                    break;
                case 1:
                    h = this.c.width + a + "," + (this.c.height + b);
                    break;
                case 2:
                    h = this.c.width + a + "," + (this.c.height + b);
                    break;
                case 3:
                    h = this.c.width + a + "," + (this.c.height + b);
                    break;
                case 4:
                    h = cb(this.c.j) + a + "," + (cb(this.c.j) + b);
                    break;
                case 5:
                    h = 100 * this.c.opacity + a + "," + (100 * this.c.opacity + b);
                    break;
                case 6:
                    h = m + a + "," + m + a;
                    break;
                case 7:
                    h = this.c.x + a + "," + this.c.y;
                    break;
                case 8:
                    h = this.c.x + "," + (this.c.y + a);
                    break;
                case 9:
                    h = a + "," + b
            }
        }
        return h
    };
    h.gu = function(e, f, h, m, d, a) {
        h = this.qf(e, h);
        m = this.qf(e, m);
        void 0 !== this.J["default"] && delete this.J["default"];
        this.J["default"] = new Nd("default", e, f, h, m, d, a);
        this.J["default"].Gg = 0
    };
    h.nc = function() {
        JSON.stringify(this.J["default"]);
        return {
            playmode: this.zj,
            active: this.Ya,
            tweened: this.tb,
            easing: this.wq,
            target: this.target,
            targetmode: this.Wo,
            useCurrent: this.np,
            duration: this.duration,
            enforce: this.Oc,
            value: this.value,
            tweenlist: JSON.stringify(this.J["default"])
        }
    };
    Nd.uz = function(e, f, h, m, d, a, b, c) {
        f = new Nd(f, h, m, d, a, b, c);
        for (var g in e) f[g] = e[g];
        return f
    };
    h.Ec = function(e) {
        var f = JSON.parse(e.tweenlist),
            f = Nd.uz(f, f.name, f.tb, f.Oh, f.Ja + "," + f.Nb, f.Ga + "," + f.Db, f.duration, f.Oc);
        this.J["default"] = f;
        this.zj = e.playmode;
        this.Ya = e.active;
        this.li = e.tweened;
        this.wq = e.easing;
        this.target = e.target;
        this.Wo = e.targetmode;
        this.np = e.useCurrent;
        this.duration = e.duration;
        this.Oc = e.enforce;
        this.value = e.value
    };
    h.qF = function(e) {
        1 < e && (e = 1);
        0 > e && (e = 0);
        for (var f in this.J) {
            var h = this.J[f];
            h.la = 0;
            h.ob = 0;
            h.state = 3;
            h.ta = e * h.duration;
            var m = h.Cp(0);
            this.et(h, m)
        }
    };
    h.Rl = function(e) {
        for (var f in this.J) {
            var h = this.J[f];
            if (this.np) {
                var m = this.qf(h.tb, "current"),
                    d = this.qf(h.tb, this.target);
                h.Fj(m);
                h.No(d)
            }
            0 === e && (h.ta = 1E-6, h.la = 0, h.ob = 0, h.wj = !0, h.state = 1);
            1 === e && (h.state = h.Kv);
            if (2 === e || 4 === e) h.ta = 1E-6, h.la = 0, h.ob = 0, h.wj = !0, 2 == e && (h.state = 4), 4 == e && (h.state = 6);
            3 === e && (h.ta = 1E-6, h.la = 0, h.ob = 0, h.wj = !0, h.state = 5)
        }
    };
    h.BF = function(e) {
        for (var f in this.J) {
            var h = this.J[f];
            3 != h.state && 0 != h.state && (h.Kv = h.state);
            1 === e && (h.ta = 0);
            2 === e && (h.ta = h.duration);
            h.state = 3;
            var m = h.Cp(0);
            this.et(h, m)
        }
    };
    h.bF = function(e) {
        for (var f in this.J) {
            var h = this.J[f];
            1 === e && (h.ta = h.duration, h.la = 0, h.ob = 0, h.Yn = !0);
            h.state = 2
        }
    };
    h.et = function(e, f) {
        if (0 === e.tb) e.Oc ? (this.c.x = e.Ja + (e.Ga - e.Ja) * f, this.c.y = e.Nb + (e.Db - e.Nb) * f) : (this.c.x += (e.Ga - e.Ja) * f - e.la, this.c.y += (e.Db - e.Nb) * f - e.ob, e.la = (e.Ga - e.Ja) * f, e.ob = (e.Db - e.Nb) * f);
        else if (1 === e.tb) e.Oc ? (this.c.width = e.Ja + (e.Ga - e.Ja) * f, this.c.height = e.Nb + (e.Db - e.Nb) * f) : (this.c.width += (e.Ga - e.Ja) * f - e.la, this.c.height += (e.Db - e.Nb) * f - e.ob, e.la = (e.Ga - e.Ja) * f, e.ob = (e.Db - e.Nb) * f);
        else if (2 === e.tb) e.Oc ? this.c.width = e.Ja + (e.Ga -
            e.Ja) * f : (this.c.width += (e.Ga - e.Ja) * f - e.la, e.la = (e.Ga - e.Ja) * f);
        else if (3 === e.tb) e.Oc ? this.c.height = e.Nb + (e.Db - e.Nb) * f : (this.c.height += (e.Db - e.Nb) * f - e.ob, e.ob = (e.Db - e.Nb) * f);
        else if (4 === e.tb)
            if (e.Oc) {
                var h = e.Ja + (e.Ga - e.Ja) * f;
                this.c.j = gb(bb(h))
            } else h = (e.Ga - e.Ja) * f - e.la, this.c.j = gb(this.c.j + bb(h)), e.la = (e.Ga - e.Ja) * f;
        else if (5 === e.tb) e.Oc ? this.c.opacity = (e.Ja + (e.Ga - e.Ja) * f) / 100 : (this.c.opacity += ((e.Ga - e.Ja) * f - e.la) / 100, e.la = (e.Ga - e.Ja) * f);
        else if (6 === e.tb) e.Oc ? this.value = e.Ja + (e.Ga - e.Ja) * f : (this.value += (e.Ga - e.Ja) * f - e.la, e.la = (e.Ga - e.Ja) * f);
        else if (7 === e.tb) e.Oc ? this.c.x = e.Ja + (e.Ga - e.Ja) * f : (this.c.x += (e.Ga - e.Ja) * f - e.la, e.la = (e.Ga - e.Ja) * f);
        else if (8 === e.tb) e.Oc ? this.c.y = e.Nb + (e.Db - e.Nb) * f : (this.c.y += (e.Db - e.Nb) * f - e.ob, e.ob = (e.Db - e.Nb) * f);
        else if (9 === e.tb) {
            var h = e.Ja + (e.Ga - e.Ja) * f,
                m = e.Nb + (e.Db - e.Nb) * f;
            0 > this.c.width && (h = e.Ja + (e.Ga + e.Ja) * -f);
            0 > this.c.height && (m = e.Nb + (e.Db + e.Nb) * -f);
            e.Oc ? (this.c.width = this.c.mb.width * h, this.c.height = this.c.mb.height * m) : (0 > this.c.width ? (this.c.width = this.c.width / (-1 +
                e.la) * h, e.la = h + 1) : (this.c.width = this.c.width / (1 + e.la) * h, e.la = h - 1), 0 > this.c.height ? (this.c.height = this.c.height / (-1 + e.ob) * m, e.ob = m + 1) : (this.c.height = this.c.height / (1 + e.ob) * m, e.ob = m - 1))
        }
        this.c.gb()
    };
    h.Hb = function() {
        var e = this.b.Vi(this.c),
            f = this.J["default"];
        0 !== f.state && (f.wj && (this.b.trigger(Wd.prototype.e.Wz, this.c), f.wj = !1), f.Yn && (this.b.trigger(Wd.prototype.e.Uz, this.c), f.Yn = !1), this.Ya = 1 == f.state || 2 == f.state || 4 == f.state || 5 == f.state || 6 == f.state, e = f.Cp(e), this.et(f, e), f.Tn && (this.b.trigger(Wd.prototype.e.Et, this.c), f.Tn = !1), f.Xn && (this.b.trigger(Wd.prototype.e.Tz, this.c), f.Xn = !1))
    };
    f.e = {};
    h = f.e;
    h.zt = function() {
        return 0 !== this.J["default"].state
    };
    h.EG = function() {
        return 2 == this.J["default"].state
    };
    h.lG = function(e, f) {
        var h = this.J["default"];
        return Qc(h.ta / h.duration, e, f)
    };
    h.SG = function(e, f) {
        var h = this.J["default"];
        this.Yl = Qc(h.ta / h.duration, e, f);
        if (h = this.$r != this.Yl && this.Yl) this.$r = this.Yl;
        return h
    };
    h.Wz = function() {
        return void 0 === this.J["default"] ? !1 : this.J["default"].wj
    };
    h.Uz = function() {
        return void 0 === this.J["default"] ? !1 : this.J["default"].Yn
    };
    h.Et = function() {
        return void 0 === this.J["default"] ? !1 : this.J["default"].Tn
    };
    h.Tz = function() {
        return void 0 === this.J["default"] ? !1 : this.J["default"].Xn
    };
    f.k = {};
    h = f.k;
    h.CA = function(e, f) {
        this.$r = this.Yl = !1;
        this.np = 1 == f;
        this.Rl(e)
    };
    h.Ut = function(e) {
        this.BF(e)
    };
    h.Qt = function(e) {
        this.$r = this.Yl = !1;
        this.bF(e)
    };
    h.eH = function(e) {
        this.qF(e)
    };
    h.kA = function(e) {
        isNaN(e) || 0 > e || void 0 === this.J["default"] || (this.J["default"].duration = e)
    };
    h.tH = function(e) {
        void 0 !== this.J["default"] && (this.J["default"].Oc = 1 === e)
    };
    h.vH = function(e) {
        void 0 !== this.J["default"] && (e = this.qf(this.J["default"].tb, e), this.J["default"].Fj(e))
    };
    h.uA = function(e, f, h) {
        if (void 0 !== this.J["default"] && !isNaN(h)) {
            var m = this.J["default"],
                d = h + "";
            this.Wo = f;
            var a = "",
                b = "";
            if (1 === f) {
                this.target = "relative(" + d + ")";
                switch (e) {
                    case 0:
                        a = this.c.x + h;
                        b = m.Db;
                        break;
                    case 1:
                        a = m.Ga;
                        b = this.c.y + h;
                        break;
                    case 2:
                        b = a = "" + cb(this.c.j + bb(h));
                        break;
                    case 3:
                        b = a = "" + 100 * this.c.opacity + h;
                        break;
                    case 4:
                        a = this.c.width + h;
                        b = m.Db;
                        break;
                    case 5:
                        a = m.Ga;
                        b = this.c.height + h;
                        break;
                    case 6:
                        b = a = h
                }
                d = a + "," + b
            } else {
                switch (e) {
                    case 0:
                        a = h;
                        b = m.Db;
                        break;
                    case 1:
                        a = m.Ga;
                        b = h;
                        break;
                    case 2:
                        b = a = h;
                        break;
                    case 3:
                        b = a = h;
                        break;
                    case 4:
                        a = h;
                        b = m.Db;
                        break;
                    case 5:
                        a = m.Ga;
                        b = h;
                        break;
                    case 6:
                        b = a = h
                }
                this.target = d = a + "," + b
            }
            e = this.qf(this.J["default"].tb, "current");
            d = this.qf(this.J["default"].tb, d);
            m.Fj(e);
            m.No(d)
        }
    };
    h.yH = function(e) {
        void 0 !== this.J["default"] && (this.J["default"].tb = e)
    };
    h.qH = function(e) {
        void 0 !== this.J["default"] && (this.J["default"].Oh = e)
    };
    h.rH = function(e, f, h, m, d) {
        void 0 !== this.J["default"] && (this.J["default"].Od[e].Hd = !1, this.J["default"].Od[e].A = f, this.J["default"].Od[e].ca = h, this.J["default"].Od[e].Wb = m, this.J["default"].Od[e].nd = d)
    };
    h.hH = function() {
        void 0 !== this.J["default"] && (this.J["default"].Hd = !0)
    };
    h.zH = function(e) {
        var f = this.J["default"];
        this.value = e;
        6 === f.tb && f.Fj(this.qf(f.tb, "current"))
    };
    h.wH = function(e, f, h, m, d) {
        if (void 0 === this.J["default"]) this.gu(e, f, initial, h, m, d);
        else {
            var a = this.J["default"];
            a.tb = e;
            a.Oh = f;
            a.Fj(this.qf(e, "current"));
            a.No(this.qf(e, h));
            a.duration = m;
            a.Oc = 1 === d
        }
    };
    f.H = {};
    f = f.H;
    f.FH = function(e) {
        var f = "N/A";
        switch (this.J["default"].state) {
            case 0:
                f = "paused";
                break;
            case 1:
                f = "playing";
                break;
            case 2:
                f = "reversing";
                break;
            case 3:
                f = "seeking"
        }
        e.kb(f)
    };
    f.dH = function(e) {
        e.B(this.J["default"].ta / this.J["default"].duration)
    };
    f.Uy = function(e) {
        e.B(this.J["default"].duration)
    };
    f.IH = function(e) {
        var f = this.J["default"],
            h = "N/A";
        switch (f.tb) {
            case 0:
                h = f.Ga;
                break;
            case 1:
                h = f.Db;
                break;
            case 2:
                h = f.Ga;
                break;
            case 3:
                h = f.Ga;
                break;
            case 4:
                h = f.Ga;
                break;
            case 5:
                h = f.Db;
                break;
            case 6:
                h = f.Ga
        }
        e.B(h)
    };
    f.Vt = function(e) {
        e.B(this.value)
    };
    f.KH = function(e, f, h, m, d) {
        m = 1 < m ? 1 : m;
        d = Hd(d, 0 > m ? 0 : m, 1, !1, !1);
        e.B(f + d * (h - f))
    }
})();
(function() {
    function f(a, b) {
        return (b - a.XE) * a.Os
    }

    function h(a, b) {
        return (a.YE - b) * a.Os
    }

    function e(a, b, c, d, e, f) {
        var g;
        g = a.Qe + b.Qe;
        var h = a.ya,
            k = c.x * c.x * h;
        a = -c.x * c.y * h;
        c = g + c.y * c.y * h;
        g += k;
        h = b.ya;
        b = d.x * d.x * h;
        k = -d.x * d.y * h;
        c += d.y * d.y * h;
        d = 0 + a + k;
        a = 0 + a + k;
        g += b;
        b = c * g - d * a;
        ra(0 !== b, "Unsolvable constraint.");
        b = 1 / b;
        e.x = g * b;
        e.y = -d * b;
        f.x = -a * b;
        f.y = c * b
    }

    function l(a, b, c, d, e) {
        a = r(a, c, e) + r(b, d, e);
        ra(0 !== a, "Unsolvable collision or constraint.");
        return a
    }

    function r(a, b, c) {
        b = Ca(b, c);
        return a.Qe + a.ya * b * b
    }

    function m(a, b, c, d) {
        a.Zj += b * a.Qe;
        a.$j += c * a.Qe;
        a.rh += a.ya * (d.x * c - d.y * b)
    }

    function d(b, c, d, e, f, g) {
        a(b, -f, -g, d);
        a(c, f, g, e)
    }

    function a(a, b, c, d) {
        a.Uc += b * a.Qe;
        a.Vc += c * a.Qe;
        a.u += a.ya * (d.x * c - d.y * b)
    }

    function b(a, b, c, d, e) {
        return (b.Uc + -d.y * b.u - (a.Uc + -c.y * a.u)) * e.x + (b.Vc + d.x * b.u - (a.Vc + c.x * a.u)) * e.y
    }

    function c(a, b, c, d) {
        return new N(b.Uc + -d.y * b.u - (a.Uc + -c.y * a.u), b.Vc + d.x * b.u - (a.Vc + c.x * a.u))
    }

    function g(a) {
        var b = a.body;
        a.update(b.ca, b.pb)
    }

    function k(a, b) {
        var c = Od;
        if (a.Sa <= b.Ta && b.Sa <= a.Ta && a.Oa <= b.Pa && b.Oa <= a.Pa && a.body !== b.body && (!a.group || a.group !== b.group) && a.V & b.V) {
            var d = c.Xv(a.lk, b.lk),
                e = a.zx || b.zx;
            if (!e || d !== Pd) {
                if (a.Jf > b.Jf) {
                    var f = a;
                    a = b;
                    b = f
                }
                f = Xd(a, b);
                if (0 !== f.length) {
                    var g = T(a.yb, b.yb),
                        h = c.df[g];
                    h || (h = c.df[g] = new v(a, b));
                    h.update(f, d, a, b);
                    "ignore" !== h.state && d.uo(h, c) && !e ? c.Di.push(h) : (h.he = null, "ignore" !== h.state && (h.state = "normal"));
                    h.Vb = c.Vb
                }
            }
        }
    }

    function p(a, b) {
        if (!b.Xa()) {
            var c = b ? b.bh : null;
            if (null == c) {
                b.bh = a;
                b !== a && (b.re = a.re, a.re = b);
                for (c = b.Dh; c; c = c.next(b)) p(a, b == c.wb ? c.Je : c.wb);
                for (c = b.Ii; c; c = c.next(b)) p(a, b == c.A ? c.N : c.A)
            } else ra(c === a, "Internal Error: Inconsistency detected in the contact graph.")
        }
    }

    function q(a) {
        aa(!a.Gd, "This addition/removal cannot be done safely during a call to cpSpaceStep() \r\n or during a query. Put these calls into a post-step callback.")
    }

    function Q(a, b, c, d, e) {
        for (var f = Ca(b.xf, b.sd), g = Ca(b.xf, b.$d), h = da(b.xf, e), k = c.kg, l = 0; l < k.length; l += 2) {
            var m = k[l],
                p = k[l + 1];
            if (m * h.x + p * h.y < ea(b.xf, b.sd) * e + b.Qa) {
                var n = b.xf.x * p - b.xf.y * m;
                f >= n && n >= g && a.push(new E(new N(m, p), h, d, T(c.yb, l)))
            }
        }
    }

    function J(a, b, c) {
        var d = ea(b, a.sd) - a.Qa;
        a = ea(b, a.$d) - a.Qa;
        return qa(d, a) - c
    }

    function z(a, b, c, d) {
        for (var e = [], f = a.kg, g = 0; g < f.length; g += 2) {
            var h = f[g],
                k = f[g + 1];
            b.Gm(h, k) && e.push(new E(new N(h, k), c, d, T(a.yb, g >> 1)))
        }
        f = b.kg;
        for (g = 0; g < f.length; g += 2) h = f[g], k = f[g + 1], a.Gm(h, k) && e.push(new E(new N(h, k), c, d, T(b.yb, g >> 1)));
        if (!e.length) {
            e = [];
            f = a.kg;
            for (g = 0; g < f.length; g += 2) h = f[g], k = f[g + 1], b.zu(h, k, wa(c)) && e.push(new E(new N(h, k), c, d, T(a.yb, g)));
            f = b.kg;
            for (g = 0; g < f.length; g += 2) h = f[g], k = f[g + 1], a.zu(h, k, c) && e.push(new E(new N(h, k), c, d, T(b.yb, g)))
        }
        return a = e
    }

    function n(a, b) {
        var c = 0,
            d = a.pp(b[0].R, b[0].ke);
        if (0 < d) return -1;
        for (var e = 1; e < b.length; e++) {
            var f = a.pp(b[e].R, b[e].ke);
            if (0 < f) return -1;
            f > d && (d = f, c = e)
        }
        wc = d;
        return c
    }

    function D(a, b, c, d) {
        d = c + d;
        b = fa(b, a);
        var e = kb(b);
        if (!(e >= d * d)) return e = Math.sqrt(e), new E(ca(a, da(b, .5 + (c - .5 * d) / (e ? e : Infinity))), e ? da(b, 1 / e) : new N(1, 0), e - d, 0)
    }

    function E(a, b, c, d) {
        this.ca = a;
        this.R = b;
        this.tk = c;
        this.Z = this.da = ua;
        this.uc = this.$h = this.Yk = this.Re = this.$x = this.lu = this.bb = 0;
        this.hash = d;
        Yd++
    }

    function w(a, b, c) {
        b ? b.wb === a ? b.Rj = c : b.Tj = c : a.Dh = c;
        c && (c.wb === a ? c.Sj = b : c.Uj = b)
    }

    function v(a, b) {
        this.Wj = this.Qi = 0;
        this.Zx = ua;
        this.A = a;
        this.wb = a.body;
        this.N = b;
        this.Je = b.body;
        this.he = this.Tj = this.Uj = this.Rj = this.Sj = null;
        this.Vb = 0;
        this.Vq = null;
        this.Ps = !1;
        this.state = "first coll"
    }

    function y(a, b) {
        !a.xn && 10 >= b && (y(a.Wc, b + 1), y(a.Kd, b + 1));
        for (var c = "", d = 0; d < b; d++) c += " ";
        console.log(c + a.Oa + " " + a.Pa)
    }

    function x(a, b) {
        return a.Sa <= b.Ta && b.Sa <= a.Ta && a.Oa <= b.Pa && b.Oa <= a.Pa
    }

    function u(a, b, c) {
        if (b == a) return null;
        var d = b.parent;
        if (d == a) return b = a.Tw(b), b.parent = a.parent, a.qi(c), b;
        d.parent.replaceChild(d, d.Tw(b), c);
        return a
    }

    function G(a, b, c) {
        a.xv(b) && (a.xn ? c(a.fa) : (G(a.Wc, b, c), G(a.Kd, b, c)))
    }

    function L(a, b, c) {
        if (null == a) return b;
        if (a.xn) return c.dE(b, a);
        var d = a.Kd.Wp() + F(a.Wc, b),
            e = a.Wc.Wp() + F(a.Kd, b);
        d === e && (d = Y(a.Wc, b), e = Y(a.Kd, b));
        e < d ? a.Es(L(a.Kd, b, c)) : a.Ds(L(a.Wc, b, c));
        a.Sa = qa(a.Sa, b.Sa);
        a.Oa = qa(a.Oa, b.Oa);
        a.Ta = ka(a.Ta, b.Ta);
        a.Pa = ka(a.Pa, b.Pa);
        return a
    }

    function Y(a, b) {
        return Math.abs(a.Sa + a.Ta - b.Sa - b.Ta) + Math.abs(a.Oa + a.Pa - b.Oa - b.Pa)
    }

    function F(a, b) {
        return (ka(a.Ta, b.Ta) - qa(a.Sa, b.Sa)) * (ka(a.Pa, b.Pa) - qa(a.Oa, b.Oa))
    }

    function P(a, b, c) {
        var d = a.dh,
            e = b.dh;
        c = c.eE(a, d, b, e);
        a.dh = b.dh = c;
        d && (d.Ug === a ? d.pi = c : d.Cl = c);
        e && (e.Ug === b ? e.pi = c : e.Cl = c)
    }

    function W(a, b, c) {
        c && (c.Ug === b ? c.pi = a : c.Cl = a);
        a ? a.Ug === b ? a.wl = c : a.xl = c : b.dh = c
    }

    function U(a, b, c, d) {
        this.pi = null;
        this.Ug = a;
        this.wl = b;
        this.Cl = null;
        this.Gr = c;
        this.xl = d
    }

    function O(a, b) {
        this.fa = b;
        a.Hq(b, this);
        this.parent = null;
        this.Vb = 1;
        this.dh = null;
        Zd++
    }

    function t(a, b, c) {
        this.fa = null;
        this.Sa = qa(b.Sa, c.Sa);
        this.Oa = qa(b.Oa, c.Oa);
        this.Ta = ka(b.Ta, c.Ta);
        this.Pa = ka(b.Pa, c.Pa);
        this.parent = null;
        this.Ds(b);
        this.Es(c)
    }

    function R(a, b, c) {
        if (a === c) return a.next(b);
        a.A === b ? a.Tr = R(a.Tr, b, c) : a.Ur = R(a.Ur, b, c);
        return a
    }

    function C(a, b) {
        this.R = a;
        this.ke = b
    }

    function X(a) {
        for (var b = a.length, c = 0; c < b; c += 2) {
            var d = a[(c + 2) % b],
                e = a[(c + 3) % b];
            if (0 < (d - a[c]) * (a[(c + 5) % b] - e) - (e - a[c + 1]) * (a[(c + 4) % b] - d)) return !1
        }
        return !0
    }

    function K(a, b, c) {
        return qa(ka(a, b), c)
    }

    function M(a, b, c, d, e, f, g, h) {
        if (0 > d) return 0;
        if (0 == d) return b[2 * h] = f.x, b[2 * h + 1] = f.y, 1;
        var k = S(b, c, d, e, f, a),
            l = new N(b[2 * c], b[2 * c + 1]);
        e = M(a, b, c + 1, k - 1, e, l, f, h);
        l = h + e++;
        b[2 * l] = f.x;
        b[2 * l + 1] = f.y;
        d = S(b, c + k, d - k, f, g, a);
        l = new N(b[2 * (c + k)], b[2 * (c + k) + 1]);
        return e + M(a, b, c + k + 1, d - 1, f, l, g, h + e)
    }

    function S(a, b, c, d, e, f) {
        if (0 === c) return 0;
        var g = 0,
            h = b;
        e = fa(e, d);
        f = f * ga(e);
        var k = b;
        for (c = b + c - 1; k <= c;) {
            var l = new N(a[2 * k], a[2 * k + 1]),
                l = Ca(e, fa(l, d));
            l > f ? (l > g && (g = l, h = k), k++) : (Z(a, k, c), c--)
        }
        h != b && Z(a, b, h);
        return k - b
    }

    function Z(a, b, c) {
        var d = a[2 * b];
        a[2 * b] = a[2 * c];
        a[2 * c] = d;
        d = a[2 * b + 1];
        a[2 * b + 1] = a[2 * c + 1];
        a[2 * c + 1] = d
    }

    function oa(a, b) {
        for (var c = 0; c < a.length; c++)
            if (a[c] === b) {
                a[c] = a[a.length - 1];
                a.length--;
                break
            }
    }

    function T(a, b) {
        return a < b ? a + " " + b : b + " " + a
    }

    function Qa(a, b) {
        return a > b ? a : b
    }

    function Ga(a, b) {
        return a < b ? a : b
    }

    function ra(a, b) {
        !a && console && console.warn && (console.warn("ASSERTION FAILED: " + b), console.trace && console.trace())
    }

    function aa(a, b) {
        if (!a) throw Error("Assertion failed: " + b);
    }
    Object.create = Object.create || function(a) {
        function b() {}
        b.prototype = a;
        return new b
    };
    var A;
    "undefined" === typeof exports ? (A = {}, "object" === typeof window && (window.cp = A)) : A = exports;
    var qa, ka;
    "object" === typeof window && -1 < window.navigator.userAgent.indexOf("Firefox") ? (qa = Math.min, ka = Math.max) : (qa = Ga, ka = Qa);
    A.uw = function(a, b) {
        var c = cp.C(0, 0);
        return a * (.5 * (b * b + 0) + kb(c))
    };
    A.aB = function(a) {
        return Math.PI * Math.abs(a * a - 0)
    };
    A.vw = function(a, b, c) {
        var d = da(ca(b, c), .5);
        return a * (Bd(c, b) / 12 + kb(d))
    };
    A.bB = function(a, b, c) {
        return c * (Math.PI * c + 2 * Sd(a, b))
    };
    A.Qr = function(a, b, c) {
        for (var d = 0, e = 0, f = b.length, g = 0; g < f; g += 2) var h = b[g] + c.x,
            k = b[g + 1] + c.y,
            l = b[(g + 2) % f] + c.x,
            m = b[(g + 3) % f] + c.y,
            p = l * k - m * h,
            d = d + p * (h * h + k * k + (h * l + k * m) + (l * l + m * m)),
            e = e + p;
        return a * d / (6 * e)
    };
    A.Up = function(a) {
        for (var b = 0, c = 0, d = a.length; c < d; c += 2) b += Ca(new N(a[c], a[c + 1]), new N(a[(c + 2) % d], a[(c + 3) % d]));
        return -b / 2
    };
    A.ru = function(a) {
        for (var b = 0, c = new N(0, 0), d = 0, e = a.length; d < e; d += 2) var f = new N(a[d], a[d + 1]),
            g = new N(a[(d + 2) % e], a[(d + 3) % e]),
            h = Ca(f, g),
            b = b + h,
            c = ca(c, da(ca(f, g), h));
        return da(c, 1 / (3 * b))
    };
    A.oI = function(a) {
        for (var b = A.ru(a), c = 0; c < a.length; c += 2) a[c] -= b.x, a[c + 1] -= b.y
    };
    A.sw = function(a, b, c) {
        return a * (b * b + c * c) / 12
    };
    A.dI = function(a, b) {
        var c = b.Qa - b.kj,
            d = b.Wb - b.N,
            e = da([b.kj + b.Qa, b.N + b.Wb], .5);
        return A.sw(a, c, d) + a * kb(e)
    };
    var Gb = A.cI = function(a) {
        var b = 0,
            c = 0,
            d, e, f, g;
        d = f = a[0];
        e = g = a[1];
        for (var h = a.length >> 1, k = 1; k < h; k++) {
            var l = a[2 * k],
                m = a[2 * k + 1];
            if (l < d || l == d && m < e) d = l, e = m, b = k;
            else if (l > f || l == f && m > g) f = l, g = m, c = k
        }
        return [b, c]
    };
    A.RH = function(a, b, c) {
        if (b)
            for (var d = 0; d < a.length; d++) b[d] = a[d];
        else b = a;
        var e = Gb(a),
            d = e[0],
            e = e[1];
        if (d == e) return b.length = 2, b;
        Z(b, 0, d);
        Z(b, 1, 0 == e ? d : e);
        d = new N(b[0], b[1]);
        e = new N(b[2], b[3]);
        a = M(c, b, 2, (a.length >> 1) - 2, d, e, d, 1) + 1;
        b.length = 2 * a;
        ra(X(b), "Internal error: cpConvexHull() and cpPolyValidate() did not agree.Please report this error with as much info as you can.");
        return b
    };
    var N = A.LH = function(a, b) {
        this.x = a;
        this.y = b
    };
    A.C = function(a, b) {
        return new N(a, b)
    };
    var ua = A.xI = new N(0, 0),
        ea = A.C.uk = function(a, b) {
            return a.x * b.x + a.y * b.y
        },
        ga = A.C.vG = function(a) {
            return Math.sqrt(ea(a, a))
        };
    A.C.zG = function(a, b) {
        return Math.sqrt(a * a + b * b)
    };
    A.C.Sy = function(a, b) {
        return a.x === b.x && a.y === b.y
    };
    var ca = A.C.add = function(a, b) {
        return new N(a.x + b.x, a.y + b.y)
    };
    N.prototype.add = function(a) {
        this.x += a.x;
        this.y += a.y;
        return this
    };
    var fa = A.C.sub = function(a, b) {
        return new N(a.x - b.x, a.y - b.y)
    };
    N.prototype.sub = function(a) {
        this.x -= a.x;
        this.y -= a.y;
        return this
    };
    var wa = A.C.Oe = function(a) {
        return new N(-a.x, -a.y)
    };
    N.prototype.Oe = function() {
        this.x = -this.x;
        this.y = -this.y;
        return this
    };
    var da = A.C.ww = function(a, b) {
        return new N(a.x * b, a.y * b)
    };
    N.prototype.ww = function(a) {
        this.x *= a;
        this.y *= a;
        return this
    };
    var Ca = A.C.BB = function(a, b) {
            return a.x * b.y -
                a.y * b.x
        },
        ya = A.C.RG = function(a) {
            return new N(-a.y, a.x)
        };
    A.C.TG = function(a) {
        return new N(a.y, -a.x)
    };
    var Qd = A.C.xo = function(a, b) {
        return da(b, ea(a, b) / kb(b))
    };
    N.prototype.xo = function(a) {
        this.ww(ea(this, a) / kb(a));
        return this
    };
    var Ba = A.C.rotate = function(a, b) {
        return new N(a.x * b.x - a.y * b.y, a.x * b.y + a.y * b.x)
    };
    N.prototype.rotate = function(a) {
        this.x = this.x * a.x - this.y * a.y;
        this.y = this.x * a.y + this.y * a.x;
        return this
    };
    var Rd = A.C.HH = function(a, b) {
            return new N(a.x * b.x + a.y * b.y, a.y * b.x - a.x * b.y)
        },
        kb = A.C.GG = function(a) {
            return ea(a, a)
        };
    A.C.HG = function(a, b) {
        return a * a + b * b
    };
    A.C.yG = function(a, b, c) {
        return ca(da(a, 1 - c), da(b, c))
    };
    var Eb = A.C.normalize = function(a) {
            return da(a, 1 / ga(a))
        },
        Ad = A.C.NG = function(a) {
            return 0 === a.x && 0 === a.y ? ua : Eb(a)
        },
        Fb = A.C.Hi = function(a, b) {
            return ea(a, a) > b * b ? da(Eb(a), b) : a
        };
    A.C.IG = function(a, b, c) {
        return ca(a, Fb(fa(b, a), c))
    };
    var Sd = A.C.tk = function(a, b) {
            return ga(fa(a, b))
        },
        Bd = A.C.sh = function(a, b) {
            return kb(fa(a, b))
        };
    A.C.LG = function(a, b, c) {
        return Bd(a, b) < c * c
    };
    var Td = A.C.fH = function(a, b, c) {
        var d = Math.acos(ea(a, b));
        if (d) {
            var e = 1 / Math.sin(d);
            return ca(da(a, Math.sin((1 - c) * d) * e), da(b, Math.sin(c * d) * e))
        }
        return a
    };
    A.C.nH = function(a, b, c) {
        var d = Math.acos(ea(a, b));
        return Td(a, b, qa(c, d) / d)
    };
    A.C.sG = function(a) {
        return new N(Math.cos(a), Math.sin(a))
    };
    A.C.Tg = function(a) {
        return Math.atan2(a.y, a.x)
    };
    A.C.Wx = function(a) {
        return "(" + a.x.toFixed(3) + ", " + a.y.toFixed(3) + ")"
    };
    var Ud = 0,
        Tb = A.eG = function(a, b, c, d) {
            this.kj = a;
            this.N = b;
            this.Qa = c;
            this.Wb = d;
            Ud++
        };
    A.OH = function(a, b, c, d) {
        return new Tb(a, b, c, d)
    };
    var Cd = 0;
    A.OG = 0;
    var Vd = A.cG = -1;
    A.rI = function() {
        Cd = 0
    };
    var eb = A.BH = function(a) {
        this.body = a;
        this.Sa = this.Oa = this.Ta = this.Pa = 0;
        this.yb = Cd++;
        this.zx = !1;
        this.Wj = this.Qi = 0;
        this.Yx = ua;
        this.group = this.lk = 0;
        this.V = Vd;
        this.T = null;
        this.zb = !1;
        this.Jf = this.Jf
    };
    eb.prototype.Jo = function(a) {
        this.Qi = a
    };
    eb.prototype.Ko = function(a) {
        this.body.rc();
        this.Wj = a
    };
    eb.prototype.Ya = function() {
        return this.body && -1 !== this.body.ti.indexOf(this)
    };
    eb.prototype.update = function(a, b) {
        aa(!isNaN(b.x), "Rotation is NaN");
        aa(!isNaN(a.x), "Position is NaN");
        this.Yp(a, b)
    };
    eb.prototype.Hq = function() {
        return new Tb(this.Sa, this.Oa, this.Ta, this.Pa)
    };
    A.PG = function(a, b, c) {
        this.shape = a;
        this.ca = b;
        this.ke = c
    };
    A.oH = function(a, b, c) {
        this.shape = a;
        this.Wb = b;
        this.R = c
    };
    var Xb = A.Gy = function(a, b, c) {
        this.If = this.wf = c;
        this.Qa = b;
        this.type = "circle";
        eb.call(this, a)
    };
    Xb.prototype = Object.create(eb.prototype);
    Xb.prototype.Yp = function(a, b) {
        var c = this.wf = Ba(this.If, b).add(a),
            d = this.Qa;
        this.Sa = c.x - d;
        this.Oa = c.y - d;
        this.Ta = c.x + d;
        this.Pa = c.y + d
    };
    var Yb = A.eA = function(a, b, c, d) {
        this.A = b;
        this.N = c;
        this.R = ya(Eb(fa(c, b)));
        this.sd = this.$d = this.xf = null;
        this.Qa = d;
        this.eB = this.OA = ua;
        this.type = "segment";
        eb.call(this, a)
    };
    Yb.prototype = Object.create(eb.prototype);
    Yb.prototype.Yp = function(a, b) {
        this.sd = ca(a, Ba(this.A, b));
        this.$d = ca(a, Ba(this.N, b));
        this.xf = Ba(this.R, b);
        var c, d, e, f;
        this.sd.x < this.$d.x ? (c = this.sd.x, d = this.$d.x) : (c = this.$d.x, d = this.sd.x);
        this.sd.y < this.$d.y ? (e = this.sd.y, f = this.$d.y) : (e = this.$d.y, f = this.sd.y);
        var g = this.Qa;
        this.Sa = c - g;
        this.Oa = e - g;
        this.Ta = d + g;
        this.Pa = f + g
    };
    var fb = A.Fp = function(a, b, c) {
        this.tF(b, c);
        this.type = "poly";
        eb.call(this, a)
    };
    fb.prototype = Object.create(eb.prototype);
    C.prototype.compare = function(a) {
        return ea(this.R, a) - this.ke
    };
    fb.prototype.tF = function(a, b) {
        aa(4 <= a.length, "Polygons require some verts");
        aa("number" === typeof a[0], "Polygon verticies should be specified in a flattened list (eg [x1,y1,x2,y2,x3,y3,...])");
        aa(X(a), "Polygon is concave or has a reversed winding. Consider using cpConvexHull()");
        var c = a.length,
            d = c >> 1;
        this.ck = Array(c);
        this.kg = Array(c);
        this.dx = Array(d);
        this.vf = Array(d);
        for (d = 0; d < c; d += 2) {
            var e = a[d] + b.x,
                f = a[d + 1] + b.y,
                g = Eb(ya(new N(a[(d + 2) % c] + b.x - e, a[(d + 3) % c] + b.y - f)));
            this.ck[d] = e;
            this.ck[d + 1] = f;
            this.dx[d >> 1] = new C(g, g.x * e + g.y * f);
            this.vf[d >> 1] = new C(new N(0, 0), 0)
        }
    };
    A.Ey = function(a, b, c) {
        b = b / 2;
        c = c / 2;
        return $d(a, new Tb(-b, -c, b, c))
    };
    var $d = A.iG = function(a, b) {
        return new fb(a, [b.kj, b.N, b.kj, b.Wb, b.Qa, b.Wb, b.Qa, b.N], ua)
    };
    fb.prototype.MF = function(a, b) {
        for (var c = this.ck, d = this.kg, e = Infinity, f = -Infinity, g = Infinity, h = -Infinity, k = 0; k < c.length; k += 2) {
            var l = c[k],
                m = c[k + 1],
                p = a.x + l * b.x - m * b.y,
                l = a.y + l * b.y + m * b.x;
            d[k] = p;
            d[k + 1] = l;
            e = qa(e, p);
            f = ka(f, p);
            g = qa(g, l);
            h = ka(h, l)
        }
        this.Sa = e;
        this.Oa = g;
        this.Ta = f;
        this.Pa = h
    };
    fb.prototype.LF = function(a, b) {
        for (var c = this.dx, d = this.vf, e = 0; e < c.length; e++) {
            var f = Ba(c[e].R, b);
            d[e].R = f;
            d[e].ke = ea(a, f) + c[e].ke
        }
    };
    fb.prototype.Yp = function(a, b) {
        this.LF(a, b);
        this.MF(a, b)
    };
    fb.prototype.pp = function(a, b) {
        for (var c = this.kg, d = a.x * c[0] + a.y * c[1], e = 2; e < c.length; e += 2) d = qa(d, a.x * c[e] + a.y * c[e + 1]);
        return d - b
    };
    fb.prototype.Gm = function(a, b) {
        for (var c = this.vf, d = 0; d < c.length; d++) {
            var e = c[d].R;
            if (0 < e.x * a + e.y * b - c[d].ke) return !1
        }
        return !0
    };
    fb.prototype.zu = function(a, b, c) {
        for (var d = this.vf, e = 0; e < d.length; e++) {
            var f = d[e].R;
            if (!(0 > ea(f, c)) && 0 < f.x * a + f.y * b - d[e].ke) return !1
        }
        return !0
    };
    var ia = A.tt = function(a, b) {
        this.ca = new N(0, 0);
        this.Uc = this.Vc = 0;
        this.Si = new N(0, 0);
        this.Wb = this.u = 0;
        this.lt = this.jt = Infinity;
        this.rh = this.Zj = this.$j = 0;
        this.T = null;
        this.zb = !1;
        this.ti = [];
        this.re = this.bh = this.Ii = this.Dh = null;
        this.ah = 0;
        this.Lo(a);
        this.Jl(b);
        this.pb = new N(0, 0);
        this.Bx(0)
    };
    if ("undefined" !== typeof DEBUG && DEBUG) {
        var xc = function(a, b) {
                aa(a.x == a.x && a.y == a.y, b)
            },
            yc = function(a, b) {
                aa(Infinity !== Math.abs(a.x) && Infinity !== Math.abs(a.y), b)
            };
        ia.prototype.Hl = function() {
            aa(this.Zg === this.Zg && this.Qe === this.Qe, "Body's mass is invalid.");
            aa(this.Za === this.Za && this.ya === this.ya, "Body's moment is invalid.");
            var a = this.ca;
            xc(a, "Body's position is invalid.");
            yc(a, "Body's position is invalid.");
            a = this.Si;
            xc(a, "Body's force is invalid.");
            yc(a, "Body's force is invalid.");
            aa(this.Uc === this.Uc && Infinity !== Math.abs(this.Uc), "Body's velocity is invalid.");
            aa(this.Vc === this.Vc && Infinity !== Math.abs(this.Vc), "Body's velocity is invalid.");
            aa(this.A === this.A && Infinity !== Math.abs(this.A), "Body's angle is invalid.");
            aa(this.u === this.u && Infinity !== Math.abs(this.u), "Body's angular velocity is invalid.");
            aa(this.Wb === this.Wb && Infinity !== Math.abs(this.Wb), "Body's torque is invalid.");
            a = this.pb;
            xc(a, "Body's rotation vector is invalid.");
            yc(a, "Body's rotation vector is invalid.");
            aa(this.jt === this.jt, "Body's velocity limit is invalid.");
            aa(this.lt === this.lt, "Body's angular velocity limit is invalid.")
        }
    } else ia.prototype.Hl = function() {};
    ia.prototype.fc = function() {
        return A.C.Tg(this.pb)
    };
    ia.prototype.mf = function() {
        return null !== this.bh
    };
    ia.prototype.Yc = function() {
        return Infinity === this.ah
    };
    ia.prototype.Xa = function() {
        return null === this.T
    };
    ia.prototype.Lo = function(a) {
        aa(0 < a, "Mass must be positive and non-zero.");
        this.rc();
        this.Zg = a;
        this.Qe = 1 / a
    };
    ia.prototype.Jl = function(a) {
        aa(0 < a, "Moment of Inertia must be positive and non-zero.");
        this.rc();
        this.Za = a;
        this.ya = 1 / a
    };
    ia.prototype.zh = function(a) {
        this.ti.push(a)
    };
    ia.prototype.ri = function(a) {
        oa(this.ti, a)
    };
    ia.prototype.Fl = function(a) {
        this.Ii = R(this.Ii, this, a)
    };
    ia.prototype.Ix = function(a) {
        this.rc();
        this.Hl();
        a === ua && (a = A.C(0, 0));
        this.ca = a
    };
    ia.prototype.Cx = function(a) {
        aa(!isNaN(a), "Internal Error: Attempting to set body's angle to NaN");
        this.A = a;
        this.pb.x = Math.cos(a);
        this.pb.y = Math.sin(a)
    };
    ia.prototype.Bx = function(a) {
        this.rc();
        this.Hl();
        this.Cx(a)
    };
    ia.prototype.YF = function(a, b, c) {
        var d = this.Uc * b + (a.x + this.Si.x * this.Qe) * c;
        a = this.Vc * b + (a.y + this.Si.y * this.Qe) * c;
        var e = this.jt,
            f = d * d + a * a,
            e = f > e * e ? e / Math.sqrt(f) : 1;
        this.Uc = d * e;
        this.Vc = a * e;
        d = this.lt;
        this.u = K(this.u * b + this.Wb * this.ya * c, -d, d);
        this.Hl()
    };
    ia.prototype.BE = function(a) {
        this.ca.x += (this.Uc + this.Zj) * a;
        this.ca.y += (this.Vc + this.$j) * a;
        this.Cx(this.A + (this.u + this.rh) * a);
        this.rh = this.Zj = this.$j = 0;
        this.Hl()
    };
    ia.prototype.WE = function() {
        this.rc();
        this.Si = new N(0, 0);
        this.Wb = 0
    };
    ia.prototype.YA = function(a, b) {
        this.rc();
        this.Si = ca(this.Si, a);
        this.Wb += Ca(b, a)
    };
    ia.prototype.wd = function(b, c) {
        this.rc();
        a(this, b.x, b.y, c)
    };
    ia.prototype.Sm = function(a) {
        for (var b = this.Ii; b;) {
            var c = b.next(this);
            a(b);
            b = c
        }
    };
    ia.prototype.Vv = function(a) {
        return ca(this.ca, Ba(a, this.pb))
    };
    ia.prototype.sp = function(a) {
        return Rd(fa(a, this.ca), this.pb)
    };
    ia.prototype.VD = function() {
        var a = this.Uc * this.Uc + this.Vc * this.Vc,
            b = this.u * this.u;
        return (a ? a * this.Zg : 0) + (b ? b * this.Za : 0)
    };
    var zc = A.EH = function(a) {
        if (this.Vx = a) {
            if (a.Pi) throw Error("This static index is already associated with a dynamic index.");
            a.Pi = this
        }
    };
    zc.prototype.qB = function(a, b) {
        if (0 < a.count) {
            var c = a.LE;
            this.each(function(a) {
                c(a, new Tb(a.Sa, a.Oa, a.Ta, a.Pa), b)
            })
        }
    };
    var Ha = A.Cy = function(a) {
        zc.call(this, a);
        this.XF = null;
        this.Vg = {};
        this.count = 0;
        this.oo = this.no = this.root = null;
        this.Vb = 0
    };
    Ha.prototype = Object.create(zc.prototype);
    var ae = 0;
    Ha.prototype.dE = function(a, b) {
        var c = this.no;
        if (c) return this.no = c.parent, c.constructor(this, a, b), c;
        ae++;
        return new t(0, a, b)
    };
    var Zd = 0;
    Ha.prototype.Hq = function(a, b) {
        var c = this.XF;
        if (c) {
            var d = .1 * (a.Ta - a.Sa),
                e = .1 * (a.Pa - a.Oa),
                c = da(c(a), .1);
            b.Sa = a.Sa + qa(-d, c.x);
            b.Oa = a.Oa + qa(-e, c.y);
            b.Ta = a.Ta + ka(d, c.x);
            b.Pa = a.Pa + ka(e, c.y)
        } else b.Sa = a.Sa, b.Oa = a.Oa, b.Ta = a.Ta, b.Pa = a.Pa
    };
    Ha.prototype.Qq = function() {
        var a = this.Pi;
        return a && a.Vb ? a.Vb : this.Vb
    };
    Ha.prototype.br = function() {
        this.Pi && this.Pi.Vb ? this.Pi.Vb++ : this.Vb++
    };
    var be = 0;
    Ha.prototype.eE = function(a, b, c, d) {
        var e = this.oo;
        if (e) return this.oo = e.pi, e.pi = null, e.Ug = a, e.wl = b, e.Cl = null, e.Gr = c, e.xl = d, e;
        be++;
        return new U(a, b, c, d)
    };
    U.prototype.qi = function(a) {
        this.pi = a.oo;
        a.oo = this
    };
    O.prototype.vu = function(a) {
        var b = this.dh,
            c;
        for (this.dh = null; b;) b.Ug === this ? (c = b.wl, W(b.Cl, b.Gr, b.xl)) : (c = b.xl, W(b.pi, b.Ug, b.wl)), b.qi(a), b = c
    };
    t.prototype.qi = function(a) {
        this.parent = a.no;
        a.no = this
    };
    O.prototype.qi = function() {};
    t.prototype.Ds = function(a) {
        this.Wc = a;
        a.parent = this
    };
    t.prototype.Es = function(a) {
        this.Kd = a;
        a.parent = this
    };
    O.prototype.xn = !0;
    t.prototype.xn = !1;
    t.prototype.Tw = function(a) {
        return this.Wc == a ? this.Kd : this.Wc
    };
    t.prototype.replaceChild = function(a, b, c) {
        ra(a == this.Wc || a == this.Kd, "Node is not a child of parent.");
        this.Wc == a ? (this.Wc.qi(c), this.Ds(b)) : (this.Kd.qi(c), this.Es(b));
        for (a = this; a; a = a.parent) b = a.Wc, c = a.Kd, a.Sa = qa(b.Sa, c.Sa), a.Oa = qa(b.Oa, c.Oa), a.Ta = ka(b.Ta, c.Ta), a.Pa = ka(b.Pa, c.Pa)
    };
    t.prototype.Wp = O.prototype.Wp = function() {
        return (this.Ta - this.Sa) * (this.Pa - this.Oa)
    };
    t.prototype.xv = O.prototype.xv = function(a) {
        return this.Sa <= a.Qa && a.kj <= this.Ta && this.Oa <= a.Wb && a.N <= this.Pa
    };
    O.prototype.ji = function(a, b, c, d) {
        x(a, this) && (b ? P(a, this, c) : (this.Vb < a.Vb && P(this, a, c), d && d(a.fa, this.fa)))
    };
    t.prototype.ji = function(a, b, c, d) {
        x(a, this) && (this.Wc.ji(a, b, c, d), this.Kd.ji(a, b, c, d))
    };
    O.prototype.sl = function(a, b, c) {
        if (this.Vb == a.Qq())
            for (b && b.ji(this, !1, a, c), b = this; b.parent; b = b.parent) b == b.parent.Wc ? b.parent.Kd.ji(this, !0, a, c) : b.parent.Wc.ji(this, !1, a, c);
        else
            for (a = this.dh; a;) this === a.Gr ? (c && c(a.Ug.fa, this.fa), a = a.xl) : a = a.wl
    };
    t.prototype.sl = function(a, b, c) {
        this.Wc.sl(a, b, c);
        this.Kd.sl(a, b, c)
    };
    O.prototype.wB = function(a) {
        return this.Sa <= a.Sa && this.Ta >= a.Ta && this.Oa <= a.Oa && this.Pa >= a.Pa
    };
    O.prototype.update = function(a) {
        var b = a.root;
        return this.wB(this.fa) ? !1 : (a.Hq(this.fa, this), b = u(b, this, a), a.root = L(b, this, a), this.vu(a), this.Vb = a.Qq(), !0)
    };
    O.prototype.cu = function(a) {
        var b = a.Pi;
        b ? (a = b.root) && a.ji(this, !0, b, null) : this.sl(a, a.Vx.root, null)
    };
    Ha.prototype.Pg = function(a, b) {
        var c = new O(this, a);
        this.Vg[b] = c;
        this.root = L(this.root, c, this);
        this.count++;
        c.Vb = this.Qq();
        c.cu(this);
        this.br()
    };
    Ha.prototype.remove = function(a, b) {
        var c = this.Vg[b];
        delete this.Vg[b];
        this.root = u(this.root, c, this);
        this.count--;
        c.vu(this);
        c.qi(this)
    };
    Ha.prototype.contains = function(a, b) {
        return null != this.Vg[b]
    };
    Ha.prototype.PE = function(a) {
        if (this.root) {
            var b, c = this.Vg;
            for (b in c) c[b].update(this);
            c = (b = this.Vx) && b.root;
            this.root.sl(this, c, a);
            b && !c && this.qB(this, b);
            this.br()
        }
    };
    Ha.prototype.rx = function(a) {
        if (a = this.Vg[a]) a.update(this) && a.cu(this), this.br()
    };
    Ha.prototype.LE = function(a, b) {
        this && this.root && this instanceof A.Cy && G(this.root, a, b)
    };
    Ha.prototype.count = function() {
        return this.count
    };
    Ha.prototype.each = function(a) {
        for (var b in this.Vg) a(this.Vg[b].fa)
    };
    Ha.prototype.log = function() {
        this.root && y(this.root, 0)
    };
    var Zb = A.jG = function() {
        this.A = this.N = 0
    };
    Zb.prototype.uo = function() {
        return !0
    };
    Zb.prototype.ro = function() {};
    v.prototype.Zu = function() {
        return this.Ps ? this.N : this.A
    };
    v.prototype.bv = function() {
        return this.Ps ? this.A : this.N
    };
    v.prototype.lr = function() {
        return "first coll" === this.state
    };
    v.prototype.ky = function() {
        w(this.wb, this.Sj, this.Rj);
        w(this.Je, this.Uj, this.Tj);
        this.Uj = this.Tj = this.Sj = this.Rj = null
    };
    v.prototype.update = function(a, b, c, d) {
        if (this.he)
            for (var e = 0; e < this.he.length; e++)
                for (var f = this.he[e], g = 0; g < a.length; g++) {
                    var h = a[g];
                    h.hash === f.hash && (h.uc = f.uc, h.$h = f.$h)
                }
        this.he = a;
        this.Vq = b;
        this.Ps = c.lk !== b.A;
        this.Qi = c.Qi * d.Qi;
        this.Wj = c.Wj * d.Wj;
        this.Zx = fa(c.Yx, d.Yx);
        this.A = c;
        this.wb = c.body;
        this.N = d;
        this.Je = d.body;
        "cached" == this.state && (this.state = "first coll")
    };
    v.prototype.Yd = function(a, c, d) {
        for (var e = this.wb, f = this.Je, g = 0; g < this.he.length; g++) {
            var h = this.he[g];
            h.Z = fa(h.ca, e.ca);
            h.da = fa(h.ca, f.ca);
            h.Re = 1 / l(e, f, h.Z, h.da, h.R);
            h.$x = 1 / l(e, f, h.Z, h.da, ya(h.R));
            h.bb = -d * qa(0, h.tk + c) / a;
            h.Yk = 0;
            h.lu = b(e, f, h.Z, h.da, h.R) * this.Qi
        }
    };
    v.prototype.de = function(a) {
        if (!this.lr())
            for (var b = this.wb, c = this.Je, e = 0; e < this.he.length; e++) {
                var f = this.he[e],
                    g = f.R.x,
                    h = f.R.y;
                d(b, c, f.Z, f.da, (g * f.uc - h * f.$h) * a, (g * f.$h + h * f.uc) * a)
            }
    };
    var ce = 0,
        de = 0;
    v.prototype.wd = function() {
        ce++;
        for (var a = this.wb, b = this.Je, c = this.Zx, e = this.Wj, f = 0; f < this.he.length; f++) {
            de++;
            var g = this.he[f],
                h = g.Re,
                k = g.R,
                l = g.Z,
                p = g.da,
                n = b.Uc - p.y * b.u - (a.Uc - l.y * a.u),
                q = b.Vc + p.x * b.u - (a.Vc + l.x * a.u),
                r = n * k.x + q * k.y,
                t = (n + c.x) * -k.y + (q + c.y) * k.x,
                q = g.Yk;
            g.Yk = ka(q +
                (g.bb - (k.x * (b.Zj - p.y * b.rh - a.Zj + l.y * a.rh) + k.y * (p.x * b.rh + b.$j - l.x * a.rh - a.$j))) * h, 0);
            n = g.uc;
            g.uc = ka(n + -(g.lu + r) * h, 0);
            r = e * g.uc;
            h = g.$h;
            g.$h = K(h + -t * g.$x, -r, r);
            r = k.x * (g.Yk - q);
            q = k.y * (g.Yk - q);
            m(a, -r, -q, l);
            m(b, r, q, p);
            n = g.uc - n;
            g = g.$h - h;
            d(a, b, l, p, k.x * n - k.y * g, k.x * g + k.y * n)
        }
    };
    v.prototype.next = function(a) {
        return this.wb == a ? this.Rj : this.Tj
    };
    var Yd = 0,
        Za = [],
        wc = 0;
    Xb.prototype.Jf = 0;
    Yb.prototype.Jf = 1;
    fb.prototype.Jf = 2;
    Xb.prototype.kq = [
        function(a, b) {
            var c = D(a.wf, b.wf, a.Qa, b.Qa);
            return c ? [c] : Za
        },
        function(a, b) {
            var c = b.sd,
                d = a.wf,
                e = fa(b.$d, c),
                f;
            f = ea(e, fa(d, c)) / kb(e);
            f = ka(0, qa(f, 1));
            c = ca(c, da(e, f));
            return (d = D(d, c, a.Qa, b.Qa)) ? (c = d.R, 0 === f && 0 > ea(c, b.OA) || 1 === f && 0 > ea(c, b.eB) ? Za : [d]) : Za
        },
        function(a, b) {
            for (var c = b.vf, d = 0, e = ea(c[0].R, a.wf) - c[0].ke - a.Qa, f = 0; f < c.length; f++) {
                var g = ea(c[f].R, a.wf) - c[f].ke - a.Qa;
                if (0 < g) return Za;
                g > e && (e = g, d = f)
            }
            var c = c[d].R,
                h = b.kg,
                k = h.length,
                l = d << 1,
                d = h[l],
                f = h[l + 1],
                g = h[(l + 2) % k],
                h = h[(l + 3) % k],
                k = c.x * f - c.y * d,
                l = c.x * h - c.y * g,
                m = Ca(c, a.wf);
            return m < l ? (e = D(a.wf, new N(g, h), a.Qa, 0)) ? [e] : Za : m < k ? [new E(fa(a.wf, da(c, a.Qa + e / 2)), wa(c), e, 0)] : (e = D(a.wf, new N(d, f), a.Qa, 0)) ? [e] : Za
        }
    ];
    Yb.prototype.kq = [null,
        function() {
            return Za
        },
        function(a, b) {
            var c = [],
                d = b.vf,
                e = d.length,
                f = ea(a.xf, a.sd),
                g = b.pp(a.xf, f) - a.Qa,
                f = b.pp(wa(a.xf), -f) - a.Qa;
            if (0 < f || 0 < g) return Za;
            var h = 0,
                k = J(a, d[0].R, d[0].ke);
            if (0 < k) return Za;
            for (var l = 0; l < e; l++) {
                var m = J(a, d[l].R, d[l].ke);
                if (0 < m) return Za;
                m > k && (k = m, h = l)
            }
            d = wa(d[h].R);
            l = ca(a.sd, da(d, a.Qa));
            m = ca(a.$d, da(d, a.Qa));
            b.Gm(l.x, l.y) && c.push(new E(l, d, k, T(a.yb, 0)));
            b.Gm(m.x, m.y) && c.push(new E(m, d, k, T(a.yb, 1)));
            if (g >= k || f >= k) g > f ? Q(c, a, b, g, 1) : Q(c, a, b, f, -1);
            if (0 === c.length) {
                g = 2 * h;
                f = b.kg;
                k = new N(f[g], f[g + 1]);
                if ((h = D(a.sd, k, a.Qa, 0)) || (h = D(a.$d, k, a.Qa, 0))) return [h];
                e = 2 * e;
                e = new N(f[(g + 2) % e], f[(g + 3) % e]);
                if ((h = D(a.sd, e, a.Qa, 0)) || (h = D(a.$d, e, a.Qa, 0))) return [h]
            }
            return c
        }
    ];
    fb.prototype.kq = [null, null,
        function(a, b) {
            var c = n(b, a.vf);
            if (-1 == c) return Za;
            var d = wc,
                e = n(a, b.vf);
            if (-1 == e) return Za;
            var f = wc;
            return d > f ? z(a, b, a.vf[c].R, d) : z(a, b, wa(b.vf[e].R), f)
        }
    ];
    var Xd = A.wu = function(a, b) {
            aa(a.Jf <= b.Jf, "Collided shapes must be sorted by type");
            return a.kq[b.Jf](a, b)
        },
        Pd = new Zb,
        ja = A.AA = function() {
            this.Bu = this.Vb = 0;
            this.yg = [];
            this.ys = [];
            this.Js = [];
            this.Mj = new Ha(null);
            this.yh = new Ha(this.Mj);
            this.Di = [];
            this.df = {};
            this.Ji = [];
            this.Gd = 0;
            this.jq = {};
            this.DB = Pd;
            this.ns = [];
            this.hd = [];
            this.UD = 10;
            this.kn = ua;
            this.rk = 1;
            this.Zq = 0;
            this.Pl = Infinity;
            this.tB = .1;
            this.rB = Math.pow(.9, 60);
            this.sB = 3;
            this.Ux = new ia(Infinity, Infinity);
            this.Ux.ah = Infinity;
            this.wu = this.cE()
        };
    ja.prototype.SA = function(a, b) {
        q(this);
        this.TE();
        var c = new Zb;
        c.A = 0;
        c.N = 0;
        a && (c.uo = a);
        b && (c.ro = b);
        this.jq[T(0, 0)] = c
    };
    ja.prototype.TE = function() {
        q(this);
        delete this.jq[T(0, 0)]
    };
    ja.prototype.Xv = function(a, b) {
        return this.jq[T(a, b)] || this.DB
    };
    ja.prototype.zh = function(a) {
        var b = a.body;
        if (b.Yc()) return this.eu(a);
        if (this.Gd) return a.zb || (a.zb = !0, this.hd.push(this.zh), this.hd.push(a)), a;
        a.zb = !0;
        aa(!a.T, "This shape is already added to a space and cannot be added to another.");
        q(this);
        b.rc();
        b.zh(a);
        a.update(b.ca, b.pb);
        this.yh.Pg(a, a.yb);
        a.T = this;
        return a
    };
    ja.prototype.eu = function(a) {
        if (this.Gd) return a.zb || (a.zb = !0, this.hd.push(this.eu), this.hd.push(a)), a;
        a.zb = !0;
        aa(!a.T, "This shape is already added to a space and cannot be added to another.");
        q(this);
        var b = a.body;
        b.zh(a);
        a.update(b.ca, b.pb);
        this.Mj.Pg(a, a.yb);
        a.T = this;
        return a
    };
    ja.prototype.Op = function(a) {
        aa(!a.Yc(), "Static bodies cannot be added to a space as they are not meant to be simulated.");
        if (this.Gd) return a.zb || (a.zb = !0, this.hd.push(this.Op), this.hd.push(a)), a;
        a.zb = !0;
        aa(!a.T, "This body is already added to a space and cannot be added to another.");
        q(this);
        this.yg.push(a);
        a.T = this;
        return a
    };
    ja.prototype.Su = function(a, b) {
        for (var c in this.df) {
            var d = this.df[c];
            if (a === d.wb && (b === d.A || null === b) || a === d.Je && (b === d.N || null === b)) d.ky(), oa(this.Di, d), delete this.df[c]
        }
    };
    ja.prototype.ri = function(a) {
        var b = a.body;
        b.Yc() ? this.tx(a) : this.Gd ? a.zb && (a.zb = !1, this.hd.push(this.ri), this.hd.push(a)) : (a.zb = !1, aa(this.yu(a), "Cannot remove a shape that was not added to the space. (Removed twice maybe?)"), q(this), b.rc(), b.ri(a), this.Su(b, a), this.yh.remove(a, a.yb), a.T = null)
    };
    ja.prototype.tx = function(a) {
        if (this.Gd) a.zb && (a.zb = !1, this.hd.push(this.tx), this.hd.push(a));
        else {
            a.zb = !1;
            aa(this.yu(a), "Cannot remove a static or sleeping shape that was not added to the space. (Removed twice maybe?)");
            q(this);
            var b = a.body;
            b.Yc() && b.au(a);
            b.ri(a);
            this.Su(b, a);
            this.Mj.remove(a, a.yb);
            a.T = null
        }
    };
    ja.prototype.ts = function(a) {
        this.Gd ? a.zb && (a.zb = !1, this.hd.push(this.ts), this.hd.push(a)) : (a.zb = !1, aa(this.uB(a), "Cannot remove a body that was not added to the space. (Removed twice maybe?)"), q(this), a.rc(), oa(this.yg, a), a.T = null)
    };
    ja.prototype.Fl = function(a) {
        this.Gd ? a.zb && (a.zb = !1, this.hd.push(this.Fl), this.hd.push(a)) : (a.zb = !1, aa(this.vB(a), "Cannot remove a constraint that was not added to the space. (Removed twice maybe?)"), q(this), a.A.rc(), a.N.rc(), oa(this.Ji, a), a.A.Fl(a), a.N.Fl(a), a.T = null)
    };
    ja.prototype.yu = function(a) {
        return a.T === this
    };
    ja.prototype.uB = function(a) {
        return a.T == this
    };
    ja.prototype.vB = function(a) {
        return a.T == this
    };
    ja.prototype.NF = function(a) {
        delete this.df[T(a.A.yb, a.N.yb)];
        oa(this.Di, a)
    };
    ja.prototype.vq = function(a, b) {
        this.Mn();
        for (var c = this.yg, d = 0; d < c.length; d++) a.call(b, c[d]);
        c = this.Js;
        for (d = 0; d < c.length; d++)
            for (var e = c[d]; e;) {
                var f = e.re;
                a.call(b, e);
                e = f
            }
        this.hp(!0)
    };
    ja.prototype.Sm = function(a) {
        this.Mn();
        for (var b = this.Ji, c = 0; c < b.length; c++) a(b[c]);
        this.hp(!0)
    };
    ja.prototype.QE = function(a) {
        aa(!this.Gd, "You cannot manually reindex objects while the space is locked. Wait until the current query or step is complete.");
        var b = a.body;
        a.update(b.ca, b.pb);
        this.yh.rx(a.yb);
        this.Mj.rx(a.yb)
    };
    ja.prototype.$t = function(a) {
        aa(!a.Xa(), "Internal error: Attempting to activate a rogue body.");
        if (this.Gd) - 1 === this.ys.indexOf(a) && this.ys.push(a);
        else {
            this.yg.push(a);
            for (var b = 0; b < a.ti.length; b++) {
                var c = a.ti[b];
                this.Mj.remove(c, c.yb);
                this.yh.Pg(c, c.yb)
            }
            for (b = a.Dh; b; b = b.next(a))
                if (c = b.wb, a === c || c.Yc()) {
                    var c = b.A,
                        d = b.N;
                    this.df[T(c.yb, d.yb)] = b;
                    b.Vb = this.Vb;
                    b.Vq = this.Xv(c.lk, d.lk);
                    this.Di.push(b)
                }
            for (b = a.Ii; b; b = b.re) c = b.A, (a === c || c.Yc()) && this.Ji.push(b)
        }
    };
    ja.prototype.CB = function(a) {
        aa(!a.Xa(), "Internal error: Attempting to deactivate a rogue body.");
        oa(this.yg, a);
        for (var b = 0; b < a.ti.length; b++) {
            var c = a.ti[b];
            this.yh.remove(c, c.yb);
            this.Mj.Pg(c, c.yb)
        }
        for (c = a.Dh; c; c = c.next(a)) b = c.wb, (a === b || b.Yc()) && this.NF(c);
        for (c = a.Ii; c; c = c.re) b = c.A, (a === b || b.Yc()) && oa(this.Ji, c)
    };
    ia.prototype.rc = function() {
        if (!this.Xa()) {
            this.ah = 0;
            var a = this ? this.bh : null;
            if (a && a.mf(a)) {
                aa(!a.Xa(), "Internal Error: componentActivate() called on a rogue body.");
                for (var b = a.T, c = a; c;) {
                    var d = c.re;
                    c.ah = 0;
                    c.bh = null;
                    c.re = null;
                    b.$t(c);
                    c = d
                }
                oa(b.Js, a)
            }
        }
    };
    ia.prototype.au = function(a) {
        aa(this.Yc(), "Body.activateStatic() called on a non-static body.");
        for (var b = this.Dh; b; b = b.next(this)) a && a != b.A && a != b.N || (b.wb == this ? b.Je : b.wb).rc()
    };
    ia.prototype.lx = function(a) {
        ra(null === (a.wb === this ? a.Rj : a.Tj), "Internal Error: Dangling contact graph pointers detected. (A)");
        ra(null === (a.wb === this ? a.Sj : a.Uj), "Internal Error: Dangling contact graph pointers detected. (B)");
        var b = this.Dh;
        ra(null === b || null === (b.wb === this ? b.Sj : b.Uj), "Internal Error: Dangling contact graph pointers detected. (C)");
        a.wb === this ? a.Rj = b : a.Tj = b;
        b && (b.wb === this ? b.Sj = a : b.Uj = a);
        this.Dh = a
    };
    ja.prototype.HE = function(a) {
        for (var b = Infinity !== this.Pl, c = this.yg, d = 0; d < c.length; d++) {
            var e = c[d];
            ra(null === e.re, "Internal Error: Dangling next pointer detected in contact graph.");
            ra(null === e.bh, "Internal Error: Dangling root pointer detected in contact graph.")
        }
        if (b)
            for (var f = (d = this.Zq) ? d * d : kb(this.kn) * a * a, d = 0; d < c.length; d++) e = c[d], e.ah = Infinity !== e.Zg ? e.VD() > (f ? e.Zg * f : 0) ? 0 : e.ah + a : Infinity;
        for (var f = this.Di, d = 0, g = f.length; d < g; d++) {
            var h = f[d],
                e = h.wb;
            a = h.Je;
            b && ((a.Xa() && !a.Yc() || e.mf()) && e.rc(), (e.Xa() && !e.Yc() || a.mf()) && a.rc());
            e.lx(h);
            a.lx(h)
        }
        if (b) {
            b = this.Ji;
            for (d = 0; d < b.length; d++) a = b[d], e = a.A, a = a.N, a.Xa() && !a.Yc() && e.rc(), e.Xa() && !e.Yc() && a.rc();
            for (d = 0; d < c.length;) {
                e = c[d];
                if (null === (e ? e.bh : null)) {
                    p(e, e);
                    a: {
                        for (b = e; b; b = b.re)
                            if (b.ah < this.Pl) {
                                b = !0;
                                break a
                            }
                        b = !1
                    }
                    if (!b) {
                        this.Js.push(e);
                        for (b = e; b; b = b.re) this.CB(b);
                        continue
                    }
                }
                d++;
                e.bh = null;
                e.re = null
            }
        }
    };
    ja.prototype.dF = function() {
        for (var a = 0; a < this.ns.length; a++) this.ns[a]();
        this.ns.length = 0
    };
    ja.prototype.Mn = function() {
        this.Gd++
    };
    ja.prototype.hp = function(a) {
        this.Gd--;
        aa(0 <= this.Gd, "Internal Error: Space lock underflow.");
        if (0 === this.Gd && a) {
            a = this.ys;
            for (var b = 0; b < a.length; b++) this.$t(a[b]);
            a.length = 0;
            this.dF()
        }
    };
    var Od;
    ja.prototype.cE = function() {
        Od = this;
        return k
    };
    ja.prototype.$A = function(a) {
        var b = this.Vb - a.Vb,
            c = a.wb,
            d = a.Je;
        if ((c.Yc() || c.mf()) && (d.Yc() || d.mf())) return !0;
        1 <= b && "cached" != a.state && (a.state = "cached");
        return b >= this.sB ? (a.he = null, !1) : !0
    };
    ja.prototype.step = function(a) {
        if (0 !== a) {
            aa(0 === ua.x && 0 === ua.y, "vzero is invalid");
            this.Vb++;
            var b = this.Bu;
            this.Bu = a;
            var c, d, e = this.yg,
                f = this.Ji,
                h = this.Di;
            for (c = 0; c < h.length; c++) {
                var k = h[c];
                k.state = "normal";
                k.wb.mf() || k.Je.mf() || k.ky()
            }
            h.length = 0;
            this.Mn();
            for (c = 0; c < e.length; c++) e[c].BE(a);
            this.yh.each(g);
            this.yh.PE(this.wu);
            this.hp(!1);
            this.HE(a);
            this.Mn();
            for (d in this.df) this.$A(this.df[d]) || delete this.df[d];
            d = this.tB;
            k = 1 - Math.pow(this.rB, a);
            for (c = 0; c < h.length; c++) h[c].Yd(a, d, k);
            for (c = 0; c < f.length; c++) d = f[c], d.uo(this), d.Yd(a);
            d = Math.pow(this.rk, a);
            k = this.kn;
            for (c = 0; c < e.length; c++) e[c].YF(k, d, a);
            a = 0 === b ? 0 : a / b;
            for (c = 0; c < h.length; c++) h[c].de(a);
            for (c = 0; c < f.length; c++) f[c].de(a);
            for (c = 0; c < this.UD; c++) {
                for (a = 0; a < h.length; a++) h[a].wd();
                for (a = 0; a < f.length; a++) f[a].wd()
            }
            for (c = 0; c < f.length; c++) f[c].ro(this);
            for (c = 0; c < h.length; c++) h[c].Vq.ro(h[c], this);
            this.hp(!0)
        }
    };
    var la = A.nG = function(a, b) {
        this.A = a;
        this.N = b;
        this.T = null;
        this.zb = !1;
        this.Ur = this.Tr = null;
        this.$g = Infinity;
        this.Ph = Math.pow(.9, 60);
        this.ki = Infinity
    };
    la.prototype.Yd = function() {};
    la.prototype.de = function() {};
    la.prototype.wd = function() {};
    la.prototype.uo = function() {};
    la.prototype.ro = function() {};
    la.prototype.next = function(a) {
        return this.A === a ? this.Tr : this.Ur
    };
    var $b = A.bH = function(a, b, c, d) {
        la.call(this, a, b);
        this.Ah = c;
        this.Ef = d;
        a = a ? ca(a.ca, Ba(c, a.pb)) : c;
        b = b ? ca(b.ca, Ba(d, b.pb)) : d;
        this.tk = ga(fa(b, a));
        ra(0 < this.tk, "You created a 0 length pin joint. A pivot joint will be much more stable.");
        this.R = this.Z = this.da = null;
        this.bb = this.uc = this.jj = this.Re = 0
    };
    $b.prototype = Object.create(la.prototype);
    $b.prototype.Yd = function(a) {
        var b = this.A,
            c = this.N;
        if (!b.Xa() || !c.Xa()) {
            this.Z = Ba(this.Ah, b.pb);
            this.da = Ba(this.Ef, c.pb);
            var d = fa(ca(c.ca, this.da), ca(b.ca, this.Z)),
                e = ga(d);
            this.R = da(d, 1 / (e ? e : Infinity));
            this.Re = 1 / l(b, c, this.Z, this.da, this.R);
            b = this.ki;
            this.bb = K(-(1 - Math.pow(this.Ph, a)) * (e - this.tk) / a, -b, b);
            this.jj = this.$g * a
        }
    };
    $b.prototype.de = function(a) {
        a = da(this.R, this.uc * a);
        d(this.A, this.N, this.Z, this.da, a.x, a.y)
    };
    $b.prototype.wd = function() {
        var a = this.A,
            c = this.N,
            e = this.R,
            f = (this.bb - b(a, c, this.Z, this.da, e)) * this.Re,
            g = this.uc;
        this.uc = K(g + f, -this.jj, this.jj);
        f = this.uc - g;
        d(a, c, this.Z, this.da, e.x * f, e.y * f)
    };
    var ac = A.DH = function(a, b, c, d, e, f) {
        la.call(this, a, b);
        this.Ah = c;
        this.Ef = d;
        this.min = e;
        this.max = f;
        this.Z = this.da = this.R = null;
        this.bb = this.uc = this.jj = this.Re = 0
    };
    ac.prototype = Object.create(la.prototype);
    ac.prototype.Yd = function(a) {
        var b = this.A,
            c = this.N;
        if (!b.Xa() || !c.Xa()) {
            this.Z = Ba(this.Ah, b.pb);
            this.da = Ba(this.Ef, c.pb);
            var d = fa(ca(c.ca, this.da), ca(b.ca, this.Z)),
                e = ga(d),
                f = 0;
            e > this.max ? (f = e - this.max, this.R = Ad(d)) : e < this.min ? (f = this.min - e, this.R = wa(Ad(d))) : (this.R = ua, this.uc = 0);
            this.Re = 1 / l(b, c, this.Z, this.da, this.R);
            b = this.ki;
            this.bb = K(-(1 - Math.pow(this.Ph, a)) * f / a, -b, b);
            this.jj = this.$g * a
        }
    };
    ac.prototype.de = function(a) {
        a = this.uc * a;
        d(this.A, this.N, this.Z, this.da, this.R.x * a, this.R.y * a)
    };
    ac.prototype.wd = function() {
        if (0 !== this.R.x || 0 !== this.R.y) {
            var a = this.A,
                b = this.N,
                e = this.R,
                f = c(a, b, this.Z, this.da),
                f = ea(f, e),
                f = (this.bb - f) * this.Re,
                g = this.uc;
            this.uc = K(g + f, -this.jj, 0);
            f = this.uc - g;
            d(a, b, this.Z, this.da, e.x * f, e.y * f)
        }
    };
    var bc = A.cH = function(a, b, c, d) {
        la.call(this, a, b);
        "undefined" === typeof d && (d = c, c = a ? a.sp(d) : d, d = b ? b.sp(d) : d);
        this.Ah = c;
        this.Ef = d;
        this.Z = this.da = ua;
        this.$k = new N(0, 0);
        this.al = new N(0, 0);
        this.za = ua;
        this.Zk = 0;
        this.bb = ua
    };
    bc.prototype = Object.create(la.prototype);
    bc.prototype.Yd = function(a) {
        var b = this.A,
            c = this.N;
        b.Xa() && c.Xa() || (this.Z = Ba(this.Ah, b.pb), this.da = Ba(this.Ef, c.pb), e(b, c, this.Z, this.da, this.$k, this.al), this.Zk = this.$g * a, b = fa(ca(c.ca, this.da), ca(b.ca, this.Z)), this.bb = Fb(da(b, -(1 - Math.pow(this.Ph, a)) / a), this.ki))
    };
    bc.prototype.de = function(a) {
        d(this.A, this.N, this.Z, this.da, this.za.x * a, this.za.y * a)
    };
    bc.prototype.wd = function() {
        var a = this.A,
            b = this.N,
            e = c(a, b, this.Z, this.da),
            e = fa(this.bb, e),
            f = this.al,
            e = new N(ea(e, this.$k), ea(e, f)),
            f = this.za;
        this.za = Fb(ca(this.za, e), this.Zk);
        d(a, b, this.Z, this.da, this.za.x - f.x, this.za.y - f.y)
    };
    var Ib = A.xG = function(a, b, c, d, e) {
        la.call(this, a, b);
        this.vD = c;
        this.wD = d;
        this.xD = ya(Eb(fa(d, c)));
        this.Ef = e;
        this.nv = null;
        this.Hi = 0;
        this.Z = this.da = null;
        this.$k = new N(0, 0);
        this.al = new N(0, 0);
        this.za = ua;
        this.Zk = 0;
        this.bb = null
    };
    Ib.prototype = Object.create(la.prototype);
    Ib.prototype.Yd = function(a) {
        var b = this.A,
            c = this.N;
        if (!b.Xa() || !c.Xa()) {
            var d = b.Vv(this.vD),
                f = b.Vv(this.wD),
                g = Ba(this.xD, b.pb),
                h = ea(d, g);
            this.nv = g;
            this.da = Ba(this.Ef, c.pb);
            var k = Ca(ca(c.ca, this.da), g);
            k <= Ca(d, g) ? (this.Hi = 1, this.Z = fa(d, b.ca)) : k >= Ca(f, g) ? (this.Hi = -1, this.Z = fa(f, b.ca)) : (this.Hi = 0, this.Z = fa(ca(da(ya(g), -k), da(g, h)), b.ca));
            e(b, c, this.Z, this.da, this.$k, this.al);
            this.Zk = this.$g * a;
            b = fa(ca(c.ca, this.da), ca(b.ca, this.Z));
            this.bb = Fb(da(b, -(1 - Math.pow(this.Ph, a)) / a), this.ki)
        }
    };
    Ib.prototype.de = function(a) {
        d(this.A, this.N, this.Z, this.da, this.za.x * a, this.za.y * a)
    };
    Ib.prototype.uD = function(a) {
        var b = this.nv;
        a = 0 < this.Hi * Ca(a, b) ? a : Qd(a, b);
        return Fb(a, this.Zk)
    };
    Ib.prototype.wd = function() {
        var a = this.A,
            b = this.N,
            e = c(a, b, this.Z, this.da),
            e = fa(this.bb, e),
            f = this.al,
            e = new N(ea(e, this.$k), ea(e, f)),
            f = this.za;
        this.za = this.uD(ca(f, e));
        d(a, b, this.Z, this.da, this.za.x - f.x, this.za.y - f.y)
    };
    var cc = A.pG = function(a, b, c, d, e, f, g) {
        la.call(this, a, b);
        this.Ah = c;
        this.Ef = d;
        this.YE = e;
        this.Os = f;
        this.rk = g;
        this.vF = h;
        this.Qs = this.ty = 0;
        this.Z = this.da = null;
        this.Re = 0;
        this.R = null
    };
    cc.prototype = Object.create(la.prototype);
    cc.prototype.Yd = function(a) {
        var b = this.A,
            c = this.N;
        if (!b.Xa() || !c.Xa()) {
            this.Z = Ba(this.Ah, b.pb);
            this.da = Ba(this.Ef, c.pb);
            var e = fa(ca(c.ca, this.da), ca(b.ca, this.Z)),
                f = ga(e);
            this.R = da(e, 1 / (f ? f : Infinity));
            e = l(b, c, this.Z, this.da, this.R);
            ra(0 !== e, "Unsolvable this.");
            this.Re = 1 / e;
            this.Qs = 0;
            this.ty = 1 - Math.exp(-this.rk * a * e);
            f = this.vF(this, f);
            d(b, c, this.Z, this.da, this.R.x * f * a, this.R.y * f * a)
        }
    };
    cc.prototype.de = function() {};
    cc.prototype.wd = function() {
        var a = this.A,
            c = this.N,
            e = b(a, c, this.Z, this.da, this.R),
            f = (this.Qs - e) * this.ty;
        this.Qs = e + f;
        f *= this.Re;
        d(a, c, this.Z, this.da, this.R.x * f, this.R.y * f)
    };
    var Ac = A.oG = function(a, b, c, d, e) {
        la.call(this, a, b);
        this.XE = c;
        this.Os = d;
        this.rk = e;
        this.wF = f;
        this.Bd = this.vy = this.Rs = 0
    };
    Ac.prototype = Object.create(la.prototype);
    Ac.prototype.Yd = function(a) {
        var b = this.A,
            c = this.N;
        if (!b.Xa() || !c.Xa()) {
            var d = b.ya + c.ya;
            ra(0 !== d, "Unsolvable spring.");
            this.Bd = 1 / d;
            this.vy = 1 - Math.exp(-this.rk * a * d);
            this.Rs = 0;
            a = this.wF(this, b.A - c.A) * a;
            b.u -= a * b.ya;
            c.u += a * c.ya
        }
    };
    Ac.prototype.wd = function() {
        var a = this.A,
            b = this.N,
            c = a.u - b.u,
            d = (this.Rs - c) * this.vy;
        this.Rs = c + d;
        c = d * this.Bd;
        a.u += c * a.ya;
        b.u -= c * b.ya
    };
    var dc = A.iH = function(a, b, c, d) {
        la.call(this, a, b);
        this.min = c;
        this.max = d;
        this.Bd = this.bb = this.Ed = this.za = 0
    };
    dc.prototype = Object.create(la.prototype);
    dc.prototype.Yd = function(a) {
        var b = this.A,
            c = this.N;
        if (!b.Xa() || !c.Xa()) {
            var d = c.A - b.A,
                e = 0;
            d > this.max ? e = this.max - d : d < this.min && (e = this.min - d);
            this.Bd = 1 / (1 / b.Za + 1 / c.Za);
            b = this.ki;
            this.bb = K(-(1 - Math.pow(this.Ph, a)) * e / a, -b, b);
            this.Ed = this.$g * a;
            this.bb || (this.za = 0)
        }
    };
    dc.prototype.de = function(a) {
        var b = this.A,
            c = this.N;
        a = this.za * a;
        b.u -= a * b.ya;
        c.u += a * c.ya
    };
    dc.prototype.wd = function() {
        if (this.bb) {
            var a = this.A,
                b = this.N,
                c = -(this.bb + (b.u - a.u)) * this.Bd,
                d = this.za;
            this.za = 0 > this.bb ? K(d + c, 0, this.Ed) : K(d + c, -this.Ed, 0);
            c = this.za - d;
            a.u -= c * a.ya;
            b.u += c * b.ya
        }
    };
    var ec = A.gH = function(a, b, c, d) {
        la.call(this, a, b);
        this.j = 0;
        this.js = c;
        this.nx = d;
        this.j = (b ? b.A : 0) - (a ? a.A : 0);
        this.Bd = this.bb = this.za = this.Ed = 0
    };
    ec.prototype = Object.create(la.prototype);
    ec.prototype.Yd = function(a) {
        var b = this.A,
            c = this.N;
        if (!b.Xa() || !c.Xa()) {
            var d = this.js,
                e = this.nx,
                f = c.A - b.A,
                g = this.j - f,
                h = 0;
            0 < g * e ? h = g : this.j = Math.floor((f - d) / e) * e + d;
            this.Bd = 1 / (b.ya + c.ya);
            b = this.ki;
            this.bb = K(-(1 - Math.pow(this.Ph, a)) * h / a, -b, b);
            this.Ed = this.$g * a;
            this.bb || (this.za = 0)
        }
    };
    ec.prototype.de = function(a) {
        var b = this.A,
            c = this.N;
        a = this.za * a;
        b.u -= a * b.ya;
        c.u += a * c.ya
    };
    ec.prototype.wd = function() {
        if (this.bb) {
            var a = this.A,
                b = this.N,
                c = this.nx,
                d = -(this.bb + (b.u - a.u)) * this.Bd,
                e = this.za;
            this.za = K((e + d) * c, 0, this.Ed * Math.abs(c)) / c;
            d = this.za - e;
            a.u -= d * a.ya;
            b.u += d * b.ya
        }
    };
    var fc = A.wG = function(a, b, c, d) {
        la.call(this, a, b);
        this.js = c;
        this.bg = d;
        this.rs = 1 / d;
        this.Bd = this.bb = this.Ed = this.za = 0
    };
    fc.prototype = Object.create(la.prototype);
    fc.prototype.Yd = function(a) {
        var b = this.A,
            c = this.N;
        if (!b.Xa() || !c.Xa()) {
            this.Bd = 1 / (b.ya * this.rs + this.bg * c.ya);
            var d = this.ki;
            this.bb = K(-(1 - Math.pow(this.Ph, a)) * (c.A * this.bg - b.A - this.js) / a, -d, d);
            this.Ed = this.$g * a
        }
    };
    fc.prototype.de = function(a) {
        var b = this.A,
            c = this.N;
        a = this.za * a;
        b.u -= a * b.ya * this.rs;
        c.u += a * c.ya
    };
    fc.prototype.wd = function() {
        var a = this.A,
            b = this.N,
            c = (this.bb - (b.u * this.bg - a.u)) * this.Bd,
            d = this.za;
        this.za = K(d + c, -this.Ed, this.Ed);
        c = this.za - d;
        a.u -= c * a.ya * this.rs;
        b.u += c * b.ya
    };
    var gc = A.CH = function(a, b, c) {
        la.call(this, a, b);
        this.Bj = c;
        this.Bd = this.Ed = this.za = 0
    };
    gc.prototype = Object.create(la.prototype);
    gc.prototype.Yd = function(a) {
        this.Bd = 1 / (this.A.ya + this.N.ya);
        this.Ed = this.$g * a
    };
    gc.prototype.de = function(a) {
        var b = this.A,
            c = this.N;
        a = this.za * a;
        b.u -= a * b.ya;
        c.u += a * c.ya
    };
    gc.prototype.wd = function() {
        var a = this.A,
            b = this.N,
            c = -(b.u - a.u + this.Bj) * this.Bd,
            d = this.za;
        this.za = K(d + c, -this.Ed, this.Ed);
        c = this.za - d;
        a.u -= c * a.ya;
        b.u += c * b.ya
    }
})();

function ee(f) {
    var h = f[1],
        e = f[2];
    f = cp.C.sub(h, f[0]);
    h = cp.C.sub(e, h);
    return 0 > cp.C.BB(f, h)
}

function fe(f) {
    this.b = f;
    var h = this.T = new cp.AA;
    h.SA(function(e) {
        if (e.lr()) {
            var h = e.Zu().body.Ke,
                r = e.bv().body.Ke;
            h.rg = e;
            h.Vo = !1;
            r.rg = e;
            r.Vo = !0;
            f.trigger(fe.prototype.e.Nw, h.c);
            f.trigger(fe.prototype.e.Nw, r.c);
            h.rg = null;
            r.rg = null
        }
        return "ignore" !== e.state
    }, function(e) {
        if (e.lr()) {
            var h = e.Zu().body.Ke,
                r = e.bv().body.Ke;
            h.rg = e;
            h.Vo = !1;
            r.rg = e;
            r.Vo = !0;
            f.trigger(fe.prototype.e.Mw, h.c);
            f.trigger(fe.prototype.e.Mw, r.c);
            h.rg = null;
            r.rg = null
        }
        return !0
    });
    h.kn = cp.C(0, 100);
    h.PC = 1 / 30;
    h.zF = 0;
    h.Pl = 1
}
(function() {
    function f(d) {
        this.b.trigger(fe.prototype.e.rE, d.Ke.c)
    }

    function h() {}

    function e() {}

    function l() {}
    var r = fe.prototype;
    r.Ha = function(d) {
        this.behavior = d;
        this.b = d.b
    };
    r.Ha.prototype.Y = function() {
        this.behavior.Lv = -1;
        this.behavior.si = []
    };
    r.wa = function(d, a) {
        this.type = d;
        this.behavior = d.behavior;
        this.c = a;
        this.b = d.b;
        this.T = this.behavior.T
    };
    var m = r.wa.prototype;
    m.RF = function() {
        if (0 !== this.ff && 2 !== this.ff && 4 !== this.ff) {
            var d = this.c,
                a = [];
            d.La();
            d.WH(a);
            var b, c, e, f, d = 0;
            for (b = a.length; d < b; ++d)
                if (c = a[d], e = c.NE, c.gh && 3 === this.ff)
                    for (c.gh.Au || (f = c.id & 3758096384, c.gh.Au = this.dv(c.gh, -2147483648 === f || 1073741824 === f || 536870912 === f || f & -2147483648 && f & 1073741824 && f & 536870912)), f = cp.C(e.left, e.top), c = c.gh.Au, e = 0; e < c.length; ++e) this.qb.push(new cp.Fp(this.body, c[e], f));
                else f = cp.C(0, 0), this.qb.push(new cp.Fp(this.body, [e.left, e.top, e.left, e.bottom, e.right, e.bottom, e.right, e.top], f));
            d = 0;
            for (b = this.qb.length; d < b; ++d) a = this.qb[d], a.group = this.hq, a.V = this.iq, a.Jo(this.vk), a.Ko(this.Ck), this.enabled && this.T.zh(a)
        }
    };
    m.dv = function(d, a) {
        var b = d.Sb,
            c = d.ve,
            e = [];
        e.length = c;
        for (w = 0; w < c; w++) e[w] = cp.C(b[2 * w], b[2 * w + 1]);
        a && e.reverse();
        b = e.slice(0);
        w = [];
        for (c = 0; 3 <= b.length;) {
            var e = [b[c], b[(c + 1) % b.length], b[(c + 2) % b.length]],
                f;
            if (!(f = ee(e))) a: {
                f = b;
                for (var h = e, l = void 0, l = void 0, m = 0; m < f.length; ++m)
                    if (l = f[m], -1 == h.indexOf(l)) {
                        var r = h[0],
                            z = h[1],
                            n = cp.C.sub(h[2], r),
                            z = cp.C.sub(z, r),
                            D = cp.C.sub(l, r),
                            l = cp.C.uk(n, n),
                            r = cp.C.uk(n, z),
                            n = cp.C.uk(n, D),
                            E = cp.C.uk(z, z),
                            z = cp.C.uk(z, D),
                            D = 1 / (l * E - r * r),
                            E = (E * n - r * z) * D,
                            l = (l * z - r * n) * D;
                        if (l = 0 <= E && 0 <= l && 1 > E + l) {
                            f = !0;
                            break a
                        }
                    }
                f = !1
            }
            f ? c++ : (b.splice((c + 1) % b.length, 1), w.push(e));
            c %= b.length
        }
        for (b = []; 0 < w.length;) {
            c = w[0];
            w.shift();
            for (e = 0; e < w.length; e++) {
                f = c;
                l = w[e];
                h = void 0;
                r = 0;
                z = m = void 0;
                for (h = 0; 3 > h; h++) - 1 == f.indexOf(l[h]) ? (m = l[h], z = l[(h + 1) % 3]) : r++;
                2 != r ? f = !1 : (h = f.indexOf(z), l = f.length, ee([f[(h - 2 + l) % l], f[(h - 1 + l) % l], m]) || ee([m, f[h], f[(h + 1) % l]]) ? f = !1 : (f.splice(h, 0, m), f = !0));
                f && (w.splice(e, 1), e = -1)
            }
            b.push(c)
        }
        for (var c = [], w = 0; w < b.length; ++w) {
            e = b[w].reverse();
            f = [];
            f.length = 2 * e.length;
            for (h = 0; h < e.length; ++h) f[2 * h] = e[h].x, f[2 * h + 1] = e[h].y;
            c.push(f)
        }
        return c
    };
    m.QF = function() {
        var d = this.qb;
        if (this.enabled)
            for (var a = 0, b = d.length; a < b; a++) this.T.ri(d[a]);
        d.length = 0;
        this.Xj(this.body);
        if (this.c.ae) this.Ve = 0, this.RF(), this.Qn = !0, this.body.Jl(Infinity);
        else {
            b = this.ff;
            3 != b || this.c.xa && !this.c.xa.Zh() || (b = 1);
            var a = Math.abs(this.c.width),
                c = Math.abs(this.c.height);
            switch (b) {
                case 0:
                    this.Rc = 1;
                    break;
                case 1:
                    this.Rc = cp.sw(this.Ud, a, c);
                    d.push(new cp.Ey(this.body, a, c));
                    break;
                case 2:
                    this.Rc = cp.uw(this.Ud, a / 2);
                    d.push(new cp.Gy(this.body, c / 2, cp.C(0, 0)));
                    break;
                case 3:
                    this.c.xa.Hh(this.c.width, this.c.height, 0);
                    b = this.dv(this.c.xa, 0 > this.c.width != 0 > this.c.height);
                    cp.ru(this.c.xa);
                    for (a = this.Ve = 0; a < b.length; ++a) c = new cp.Fp(this.body, b[a], this.offset), c.qm = cp.Up(b[a]), this.Ve += c.qm, d.push(c);
                    for (var c = 0, e, a = 0; a < d.length; ++a) e = d[a].qm / this.Ve, c += cp.Qr(e * this.Ud, b[a], this.offset);
                    this.Rc = c;
                    break;
                case 4:
                    c = 0, 0 > this.xq && (c = -this.xq), b = cp.C(-a / 2 + c, 0), a = cp.C(a / 2 - c, 0), this.Rc = cp.vw(this.Ud, b, a), d.push(new cp.eA(this.body, b, a, Math.abs(this.xq)))
            }
            0 >= this.Rc && (this.Rc = 1);
            this.Ng || this.Qn ? this.body.Jl(Infinity) : this.body.Jl(this.Rc);
            this.body.Xa() || this.body.rc();
            for (a = 0; a < d.length; ++a) c = d[a], c.group = this.hq, c.V = this.iq, c.Jo(this.vk), c.Ko(this.Ck), this.enabled && this.T.zh(c)
        }
    };
    m.Y = function() {
        this.Ng = 1 == this.D[0];
        this.ff = this.D[1];
        this.hq = this.D[2];
        this.iq = parseInt(this.D[3], 16);
        this.Ud = this.D[4];
        this.Rc = 1;
        this.vk = this.D[5];
        this.Ck = this.D[6];
        this.enabled = 0 == this.D[7];
        this.xq = this.D[8];
        this.Qn = 1 == this.D[9];
        this.ir = !0;
        this.lp = !1;
        this.offset = cp.C(0, 0);
        this.Cn = this.En = this.Pv = this.Ov = this.wr = this.Br = this.Ar = 0;
        this.Mv = null;
        this.Nv = -1;
        this.rg = null;
        this.Vo = !1;
        this.Ve = 0;
        var d;
        this.Ng ? (d = this.body = new cp.tt(Infinity, Infinity), this.enabled && this.behavior.si.push(d), d.ah = Infinity) : (d = this.body = new cp.tt(this.Ud, 1), this.enabled && this.T.Op(d));
        d.ot = !1;
        d.Ke = this;
        this.c.lB = d;
        this.qb = []
    };
    m.ix = function() {
        this.dq(this.body)
    };
    m.of = function() {
        if (this.enabled)
            for (var d = 0; d < this.qb.length; d++) this.T.ri(this.qb[d]);
        this.qb.length = 0;
        var a = this;
        this.body.Sm(function(b) {
            a.T.Fl(b)
        });
        this.body.Xa() ? $a(this.behavior.si, this.body) : this.T.ts(this.body)
    };
    m.nc = function() {
        return {}
    };
    m.Ec = function() {};
    m.sh = function(d) {
        d = d.Ke;
        var a = d.c;
        a.La();
        d.offset = a.ae ? cp.C(0, 0) : cp.C((a.gc - .5) * a.width, (a.hc - .5) * a.height)
    };
    m.Xj = function(d) {
        var a = d.Ke,
            b = a.c,
            c = !1;
        b.La();
        if (a.En !== b.width || a.Cn !== b.height) c = !0, a.ir = !0, a.En = b.width, a.Cn = b.height;
        if (c || a.Ar !== b.x || a.Br !== b.y || a.wr !== b.j || a.Ov !== b.gc || a.Pv !== b.hc) b.ae ? d.Ix(cp.C(b.x, b.y)) : (a.offset = cp.C((b.gc - .5) * b.width, (b.hc - .5) * b.height), d.Bx(b.j), d.Ix(cp.C.sub(cp.C(b.x, b.y), cp.C.rotate(a.offset, d.pb)))), d.Yc() && (a.lp = !0, d.au()), a.Ar = b.x, a.Br = b.y, a.wr = b.j, a.Ov = b.gc, a.Pv = b.hc
    };
    m.ip = function(d) {
        var a = d.Ke,
            b = a.c;
        d.ot && (d.WE(), d.ot = !1);
        if (!d.Xa()) {
            a.Xj(d);
            var c = cp.C.add(d.ca, cp.C.rotate(a.offset, d.pb));
            a.Ar = b.x = c.x;
            a.Br = b.y = c.y;
            a.wr = b.j = d.fc();
            b.gb()
        }
    };
    m.dq = function(d) {
        d = d.Ke;
        if (d.enabled) {
            if (d.ir || d.c.ae && d.c.xE || d.En !== d.c.width || 4 !== d.ff && d.Cn !== d.c.height || 3 === d.ff && (d.Mv !== d.c.cb || d.Nv !== d.c.P)) d.QF(), d.c.ae && (d.c.xE = !1), d.En = d.c.width, d.Cn = d.c.height, d.Mv = d.c.cb, d.Nv = d.c.P, d.ir = !1, d.lp = !1;
            if (d.lp) {
                for (var a = 0, b = d.qb.length; a < b; a++) d.T.QE(d.qb[a]);
                d.lp = !1
            }
        }
    };
    m.Hb = function() {
        var d = this.b.oh;
        if (this.b.lg > this.behavior.Lv && 0 < d) {
            this.T.vq(f, this);
            this.behavior.si.forEach(this.Xj);
            this.T.vq(this.Xj);
            this.behavior.si.forEach(this.dq);
            this.T.yg.forEach(this.dq);
            this.T.zF ? this.T.step(this.b.Vi(this.c)) : this.T.step(this.T.PC * d);
            for (var d = this.T.hd, a = 0, b = d.length / 2; a < b; a++) d[2 * a].call(this.T, d[2 * a + 1]);
            d.length = 0;
            this.T.vq(this.ip);
            this.behavior.si.forEach(this.ip);
            this.behavior.Lv = this.b.lg
        }
    };
    m.Tg = function(d) {
        var a = null,
            b = 0;
        "string" == typeof d ? this.body.Sm(function(b) {
            b.tag === d && (a = b)
        }) : this.body.Sm(function(c) {
            d == b && (a = c);
            b++
        });
        return a
    };
    h.prototype.mf = function() {
        return this.body.mf()
    };
    h.prototype.rE = function() {
        return !0
    };
    h.prototype.Mw = function() {
        this.ip(this.body);
        return !0
    };
    h.prototype.Nw = function() {
        this.ip(this.body);
        return !0
    };
    r.e = new h;
    m.Rq = function(d, a, b) {
        var c;
        switch (d) {
            case 0:
                c = cp.C(a, b);
                break;
            case 1:
                a = bb(a);
                c = cp.C(b * Math.cos(a), b * Math.sin(a));
                break;
            case 2:
                c = (void 0).sp(cp.C(a, b));
                break;
            case 3:
                if (!(void 0).Ke) {
                    c = cp.C(0, 0);
                    break
                }
                d = (void 0).Ke.c;
                d.La();
                b = a;
                d.Lg && -1 !== b ? (a = d.Lg(b, !0), b = d.Lg(b, !1), c = (void 0).sp(cp.C(a, b))) : c = cp.C(0, 0)
        }
        return c
    };
    e.prototype.ZA = function(d, a, b, c, e, f) {
        this.body.YA(this.Rq(d, a, b), this.Rq(c, e, f));
        this.body.ot = !0
    };
    e.prototype.Lo = function(d) {
        this.Ud = d;
        if (this.c.ae) this.Ng || this.body.Lo(this.Ud);
        else {
            d = this.qb[0];
            switch (this.ff) {
                case 0:
                    this.Rc = 1;
                    break;
                case 1:
                    this.Rc = cp.Qr(this.Ud, d.ck, cp.C(0, 0));
                    break;
                case 2:
                    this.Rc = cp.uw(this.Ud, d.Qa);
                    break;
                case 3:
                    d = 0;
                    for (var a, b = 0; b < this.qb.length; ++b) a = shapes[b].qm / this.Ve, d += cp.Qr(a * this.Ud, polys[b], this.offset);
                    this.Rc = d;
                    break;
                case 4:
                    this.Rc = cp.vw(this.Ud, d.A, d.N)
            }
            0 >= this.Rc && (this.Rc = 1);
            this.Ng || (this.body.Lo(this.Ud), this.Qn || this.body.Jl(this.Rc))
        }
    };
    e.prototype.Ko = function(d) {
        this.Ck = d;
        for (var a = 0; a < this.qb.length; a++) this.qb[a].Ko(d)
    };
    e.prototype.Jo = function(d) {
        this.vk = d;
        for (var a = 0; a < this.qb.length; a++) this.qb[a].Jo(d)
    };
    e.prototype.GB = function(d) {
        if (!d && this.enabled)
            for (this.enabled = !1, this.Ng ? $a(this.behavior.si, this.body) : this.T.ts(this.body), d = 0; d < this.qb.length; d++) this.T.ri(this.qb[d]);
        else if (d && !this.enabled)
            for (this.enabled = !0, this.Ng ? this.behavior.si.push(this.body) : this.T.Op(this.body), d = 0; d < this.qb.length; d++) this.T.zh(this.qb[d])
    };
    e.prototype.mF = function(d, a, b) {
        this.T.kn = this.Rq(d, a, b)
    };
    m.Oe = function(d, a) {
        this.Xj(d);
        var b;
        if (-1 == a) b = this.T.Ux;
        else {
            b = this.b.Xi(a);
            if (!b) return null;
            b = b.lB;
            this.Xj(b)
        }
        return b && d != b ? b : null
    };
    r.k = new e;
    l.prototype.speed = function(d) {
        var a = this.body.Uc,
            b = this.body.Vc;
        d.B(Math.sqrt(a * a + b * b))
    };
    l.prototype.group = function(d) {
        d.S(this.hq)
    };
    l.prototype.V = function(d) {
        d.S(this.iq)
    };
    l.prototype.Ud = function(d) {
        this.Ng ? d.B(Infinity) : d.B(this.body.Zg)
    };
    l.prototype.Rc = function(d) {
        this.Ng || this.Qn ? d.B(Infinity) : d.B(this.body.Za)
    };
    l.prototype.vk = function(d) {
        d.B(this.vk)
    };
    l.prototype.Ck = function(d) {
        d.B(this.Ck)
    };
    l.prototype.qm = function(d) {
        if (this.c.ae || 3 === this.ff) {
            if (!this.Ve)
                for (var a = 0; a < this.qb.length; ++a) this.Ve += cp.Up(this.qb[a].ck);
            d.B(this.Ve)
        } else if (0 == this.qb.length) d.B(0);
        else {
            var b = this.qb[0];
            switch (this.ff) {
                case 0:
                    a = 0;
                    break;
                case 1:
                    a = cp.Up(b.ck);
                    break;
                case 3:
                    a = this.Ve;
                    break;
                case 2:
                    a = cp.aB(b.Qa);
                    break;
                case 4:
                    a = cp.bB(b.A, b.N, b.Qa)
            }
            d.B(a)
        }
    };
    l.prototype.Pl = function(d) {
        d.B(this.T.Pl)
    };
    l.prototype.Zq = function(d) {
        d.B(this.T.Zq)
    };
    r.H = new l
})();

function Zc() {
    return [ad, bd, pd, cd, $c, id, dd, hd, ld, I, md, nd, fe, Wd, rd, qd, H.prototype.e.hz, H.prototype.e.Jt, I.prototype.k.xt, id.prototype.k.xt, H.prototype.e.Ky, I.prototype.H.Qy, H.prototype.e.Oy, H.prototype.e.HA, $c.prototype.k.CallFunction, nd.prototype.e.iz, nd.prototype.e.mz, H.prototype.e.sz, nd.prototype.H.Kp, H.prototype.k.Ry, H.prototype.H.YD, H.prototype.k.xA, H.prototype.k.yy, Wd.prototype.k.CA, H.prototype.k.JA, H.prototype.k.oA, $c.prototype.e.jm, H.prototype.H.tu, $c.prototype.H.$z, $c.prototype.e.Ny, I.prototype.H.cz, I.prototype.H.dz, I.prototype.k.pA, I.prototype.k.fA, I.prototype.H.zy, I.prototype.k.hA, I.prototype.H.Jp, I.prototype.H.Kp, I.prototype.k.wz, id.prototype.k.Rt, I.prototype.H.IA, I.prototype.e.Ez, I.prototype.e.xp, I.prototype.k.Rt, Wd.prototype.k.uA, I.prototype.H.Wt, I.prototype.H.zp, Wd.prototype.e.Et, Wd.prototype.k.Qt, I.prototype.e.kz, I.prototype.e.dk, I.prototype.k.sA, H.prototype.e.Xy, fe.prototype.k.mF, I.prototype.e.Ly, H.prototype.H.ZD, fe.prototype.k.ZA, I.prototype.k.xy, I.prototype.e.Py, I.prototype.H.Dy, H.prototype.e.Zy, I.prototype.e.jz, I.prototype.e.wt, H.prototype.k.FA, fe.prototype.k.GB, pd.prototype.k.rA, pd.prototype.k.St, pd.prototype.k.cA, nd.prototype.H.Jp, nd.prototype.e.Ep, H.prototype.e.Yy, H.prototype.H.bE, pd.prototype.k.beginPath, pd.prototype.k.nF, pd.prototype.k.Ty, pd.prototype.k.cC, $c.prototype.H.ut, H.prototype.H.HB, I.prototype.k.yA, H.prototype.H.j, $c.prototype.k.tA, pd.prototype.k.Hy, H.prototype.k.nA, H.prototype.H.XD, H.prototype.e.rz, H.prototype.k.dA, I.prototype.k.Ct, I.prototype.k.At, id.prototype.k.MA, pd.prototype.k.At, md.prototype.k.Ct, H.prototype.k.mA, H.prototype.H.cF, I.prototype.k.Hp, id.prototype.k.Hp, md.prototype.k.Hp, I.prototype.k.qA, nd.prototype.e.Dp, bd.prototype.k.Ut, bd.prototype.e.lz, bd.prototype.k.Play, H.prototype.k.wA, I.prototype.k.Ip, I.prototype.k.Tt, H.prototype.e.yt, ad.prototype.k.qz, ad.prototype.H.zp, md.prototype.k.jA, ad.prototype.H.By, md.prototype.k.vA, I.prototype.k.Bt, md.prototype.k.Bt, I.prototype.e.Dt, id.prototype.e.xp, hd.prototype.k.lA, H.prototype.e.aA, I.prototype.k.gA, H.prototype.H.find, H.prototype.H.Wx, H.prototype.H.replace, H.prototype.H.JF, H.prototype.H["int"], I.prototype.e.My, I.prototype.e.ez, H.prototype.e.bA, dd.prototype.k.mB, dd.prototype.k.nB, H.prototype.H.KF, hd.prototype.k.Fy, hd.prototype.e.Gt, hd.prototype.k.$y, hd.prototype.e.Ht, hd.prototype.H.oz, hd.prototype.e.Jz, hd.prototype.e.It, md.prototype.k.Tt, md.prototype.e.xp, fe.prototype.e.mf, Wd.prototype.e.zt, md.prototype.k.Ip, Wd.prototype.H.Vt, dd.prototype.k.oB, dd.prototype.k.pB, H.prototype.H.bG, ld.prototype.k.yp, ld.prototype.e.Ft, ld.prototype.e.nz, ld.prototype.k.DA, H.prototype.H.floor, ld.prototype.H.Vy, H.prototype.H.random, Wd.prototype.k.kA, H.prototype.e.Wy, nd.prototype.e.Ot, cd.prototype.k.bz, dd.prototype.e.Jw, bd.prototype.k.EA, dd.prototype.e.Ow, H.prototype.e.Ap, H.prototype.k.az]
};