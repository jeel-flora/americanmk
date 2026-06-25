var $jscomp = $jscomp || {};
$jscomp.scope = {};
$jscomp.ASSUME_ES5 = !1;
$jscomp.ASSUME_NO_NATIVE_MAP = !1;
$jscomp.ASSUME_NO_NATIVE_SET = !1;
$jscomp.SIMPLE_FROUND_POLYFILL = !1;
$jscomp.objectCreate = $jscomp.ASSUME_ES5 || "function" == typeof Object.create ? Object.create : function(e) {
    var m = function() {};
    m.prototype = e;
    return new m
};
$jscomp.underscoreProtoCanBeSet = function() {
    var e = {
            a: !0
        },
        m = {};
    try {
        return m.__proto__ = e,
            m.a
    } catch (w) {}
    return !1
};
$jscomp.setPrototypeOf = "function" == typeof Object.setPrototypeOf ? Object.setPrototypeOf : $jscomp.underscoreProtoCanBeSet() ? function(e, m) {
        e.__proto__ = m;
        if (e.__proto__ !== m)
            throw new TypeError(e + " is not extensible");
        return e
    } :
    null;
$jscomp.inherits = function(e, m) {
    e.prototype = $jscomp.objectCreate(m.prototype);
    e.prototype.constructor = e;
    if ($jscomp.setPrototypeOf) {
        var w = $jscomp.setPrototypeOf;
        w(e, m)
    } else
        for (w in m)
            if ("prototype" != w)
                if (Object.defineProperties) {
                    var B = Object.getOwnPropertyDescriptor(m, w);
                    B && Object.defineProperty(e, w, B)
                } else
                    e[w] = m[w];
    e.superClass_ = m.prototype
};
var cur_scene;
// window.GD_OPTIONS = {
//     gameId: "6fa7537b0f6a47a79b34cb558ba6c7fd",
//     onEvent: function(e) {
//         switch (e.name) {
//         case "SDK_GAME_START":
//             cur_scene.sound.setMute(!1);
//             break;
//         case "SDK_GAME_PAUSE":
//             cur_scene.sound.setMute(!0)
//         }
//     }
// };
// (function(e, m, w) {
//     var B = e.getElementsByTagName(m)[0];
//     e.getElementById(w) || (e = e.createElement(m),
//     e.id = w,
//     e.src = "https://html5.api.gamedistribution.com/main.min.js",
//     B.parentNode.insertBefore(e, B))
// }
// )(document, "script", "gamedistribution-jssdk");
function show_ad() {
    // "undefined" !== typeof gdsdk && "undefined" !== gdsdk.showAd && gdsdk.showAd()
}
var Game = function() {
    return Phaser.Scene.call(this, "game") || this
};
$jscomp.inherits(Game, Phaser.Scene);
Game.prototype.create = function() {
    function e() {
        function a() {
            var a;
            a: {
                for (a = 0; a < d; a++) {
                    var b = r[a];
                    if (b.available && !b.picked)
                        for (var c = 1, g = 0; g < d; g++)
                            if (a != g) {
                                var y = r[g];
                                if (y.frame.name == b.frame.name && !y.picked && y.available && (c++,
                                        3 <= c)) {
                                    a = b;
                                    break a
                                }
                            }
                }
                a = !1
            }
            a && (e = a)
        }

        function b(a) {
            for (var b = [], c = 0; c < d; c++) {
                var g = r[c];
                g.available && !g.picked && g.frame.name == a && b.push(g)
            }
            return b
        }
        if ("play" == k) {
            var d = t.getLength(),
                r = t.getChildren();
            if (f.length) {
                var c = 0;
                a: for (; c < f.length; c++) {
                    var y = b(f[c].frame.name);
                    if (y.length) {
                        var e = y[0];
                        break a
                    }
                }
                e || (console.log("pppppppp"),
                    a())
            } else
                a();
            e ? (k = "moving",
                m(e)) : console.log("no r")
        }
    }

    function m(a) {
        F || L();
        if (7 > f.length) {
            var b = 0;
            M(a.pos);
            a.setDepth(z);
            D.push(a);
            c.children.bringToTop(a);
            f.length ? (b = w(a),
                f.splice(b, 0, a)) : f.push(a);
            b < f.length - 1 && B(b);
            var d = G[b];
            a.picked = !0;
            c.tweens.add({
                targets: a,
                x: d.x,
                y: d.y,
                duration: 300,
                onComplete: function() {
                    Y(b) ? Z(b) : (k = "play",
                        7 == f.length && (play_sound("wrong", c),
                            H = !0,
                            c.time.delayedCall(1E3, function() {
                                E("gameover")
                            })))
                }
            });
            I()
        } else
            H || (play_sound("wrong", c),
                k = "play",
                H = !0,
                c.time.delayedCall(1E3, function() {
                    E("gameover")
                }))
    }

    function w(a) {
        for (var b = 0, d = !1, c = 0; c < f.length; c++)
            if (a.frame.name == f[c].frame.name)
                d = !0,
                b = c;
            else if (d)
            break;
        return d ? b + 1 : f.length
    }

    function B(a, b) {
        var d = 72;
        for ((void 0 === b ? 0 : b) && (d = -72); a < f.length; a++)
            b = f[a],
            c.children.bringToTop(b),
            c.tweens.add({
                targets: b,
                x: b.x + d,
                duration: 200
            })
    }

    function Y(a) {
        if (2 <= a) {
            for (var b = f[a].frame.name, d = a - 1; d > a - 3; d--)
                if (f[d].frame.name != b)
                    return !1;
            return !0
        }
        return !1
    }

    function Z(a) {
        play_sound("stack", c);
        for (var b = G[a - 2].x, d, r = {}, g = a; g > a - 3; r = {
                $jscomp$loop$prop$tile$19$60: r.$jscomp$loop$prop$tile$19$60
            },
            g--)
            r.$jscomp$loop$prop$tile$19$60 = f[g],
            d = r.$jscomp$loop$prop$tile$19$60.frame.name,
            c.tweens.add({
                targets: r.$jscomp$loop$prop$tile$19$60,
                x: b,
                duration: 150,
                onComplete: function(a) {
                    return function() {
                        a.$jscomp$loop$prop$tile$19$60.destroy(!0, !0)
                    }
                }(r)
            });
        if (a < f.length - 1)
            for (b = a + 1; b < f.length; b++)
                r = f[b],
                c.tweens.add({
                    targets: r,
                    x: r.x - 216,
                    duration: 300
                });
        c.time.delayedCall(150, function() {
            aa(a, d)
        });
        c.time.delayedCall(350, function() {
            for (var b = 0; 3 > b; b++)
                f.splice(a - 2, 1);
            D = [];
            k = "play"
        })
    }

    function aa(a, b) {
        var d = c.add.sprite(G[a - 2].x, G[a - 2].y, "tiles");
        d.setFrame(b);
        d.setDepth(z);
        c.tweens.add({
            targets: d,
            rotation: 6.28319,
            duration: 500,
            repeat: 3,
            onComplete: function() {
                d.destroy(!0, !0)
            }
        });
        c.tweens.add({
            targets: d,
            y: config.height + 100,
            duration: 600,
            ease: "Back.easeIn"
        });
        c.time.delayedCall(600, function() {
            0 == t.getLength() && E("completed")
        })
    }

    function R() {
        if (D.length && "play" == k) {
            k = "undo";
            var a = D[D.length - 1];
            c.tweens.add({
                targets: a,
                x: a.def.x,
                y: a.def.y,
                duration: 300,
                onComplete: function() {
                    k = "play";
                    a.picked = !1;
                    a.shadow.setVisible(!0);
                    a.setDepth(a.pos.z + 1);
                    h[a.pos.z][a.pos.y][a.pos.x] = JSON.parse(a.arr_data);
                    for (var b = h.length, r = 0; r < b; r++)
                        for (var g = 0; g < q.width; g++)
                            for (var y = 0; y < q.height; y++)
                                if (h[r][y][g][1]) {
                                    var e = N(r, y, g);
                                    c.children.bringToTop(e)
                                }
                    I();
                    for (b = 0; b < f.length; b++)
                        if (f[b].uid == a.uid) {
                            f.splice(b, 1);
                            break
                        }
                }
            });
            for (var b = 0; b < f.length; b++)
                if (f[b].uid == a.uid) {
                    B(b + 1, !0);
                    break
                }
            D.pop()
        }
    }

    function S(a) {
        for (var b = a.length, d, c; b;)
            c = Math.floor(Math.random() * b--),
            d = a[b],
            a[b] = a[c],
            a[c] = d;
        return a
    }

    function I() {
        for (var a = 0; a < z; a++)
            for (var b = 0; b < q.width; b++)
                for (var d = 0; d < q.height; d++)
                    if (h[a][d][b][1]) {
                        var c = !0;
                        c && a < z - 1 && h[a + 1][d][b][1] && (c = !1);
                        c && 0 < b && b < q.width - 1 && (h[a][d][b - 1][1] && h[a][d][b + 1][1] && (c = !1),
                            c && 0 < d && (1 === h[a][d - 1][b + 1][0] || 1 === h[a][d - 1][b - 1][0]) && (c = !1),
                            2 < z && c && a === z - 2 && (0 < d && (2 === h[a + 1][d - 1][b - 1][0] || 2 === h[a + 1][d - 1][b][0]) && (c = !1),
                                c && 2 === h[a + 1][d][b - 1][0] || 2 === h[a + 1][d][b][0])) && (c = !1);
                        var g = N(a, d, b);
                        g.available = c;
                        g || console.log(b + ", " + d + ", " + a);
                        c ? g.clearTint() : g.setTint(13226446)
                    }
    }

    function N(a, b, d) {
        for (var c = t.getLength(), g = t.getChildren(), e = 0; e < c; e++)
            if (g[e].pos.z === a && g[e].pos.y === b && g[e].pos.x === d)
                return g[e];
        return !1
    }

    function M(a) {
        h[a.z][a.y][a.x][0] = 0;
        h[a.z][a.y][a.x][1] = 0;
        N(a.z, a.y, a.x).shadow.setVisible(!1);
        ba.setText(t.getLength())
    }

    function ca() {
        var a = J();
        a ? (a[0].setTint(7208095),
            a[1].setTint(7208095)) : console.log("no pair")
    }

    function J(a) {
        for (var b, d = [], c = 0, g = t.getLength(), e = t.getChildren(), f = 0; f < g; f++)
            e[f].available && d.push(e[f]);
        g = d.length;
        e = 0;
        a: for (; e < g; e++)
            for (f = 0; f < g; f++) {
                var h;
                if (h = e != f) {
                    h = d[e];
                    var k = d[f];
                    h = 34 <= h.frame.name && 41 >= h.frame.name ? 34 <= h.frame.name && 37 >= h.frame.name && 34 <= k.frame.name && 37 >= k.frame.name ? !0 : 38 <= h.frame.name && 41 >= h.frame.name && 38 <= k.frame.name && 41 >= k.frame.name ? !0 : !1 : h.frame.name === k.frame.name ? !0 : !1
                }
                if (h && (c++,
                        b = [d[e], d[f]], !a))
                    break a
            }
        return b ? a ? c / 2 : b : 0
    }

    function O(a) {
        console.log("s " + (void 0 === a ? 0 : a));
        a = [];
        for (var b = t.getLength(), d = t.getChildren(), c = 0; c < b; c++)
            d[c].picked || a.push(d[c].frame.name);
        a = S(a);
        for (var e = c = 0; e < b; e++)
            d[e].picked || (d[e].setFrame(a[c]),
                c++);
        D = []
    }

    function da(a) {
        return 0 <= a && 8 >= a ? 4 : 9 <= a && 17 >= a ? 6 : 18 <= a && 26 >= a ? 2 : 27 <= a && 30 >= a ? 8 : 31 <= a && 33 >= a ? 10 : 34 <= a && 37 >= a ? 12 : 14
    }

    function P(a) {
        var b = Math.floor(a / 60);
        a = 0 < b ? a - 60 * b : a;
        10 > b && (b = "0" + b);
        10 > a && (a = "0" + a);
        return b + ":" + a
    }

    function L() {
        F || (F = c.time.addEvent({
            delay: 1E3,
            callback: ea,
            loop: !0
        }))
    }

    function ea() {
        "play" === k && (K(),
            T++)
    }

    function K(a) {
        A -= void 0 === a ? 1 : a;
        if (0 > A && (A = 0,
                "play" === k))
            if (U)
                E("gameover");
            else {
                k = "second_chance";
                U = !0;
                a = c.add.rectangle(0, 0, config.width, config.height, 0).setOrigin(0);
                a.setInteractive();
                a.alpha = 0;
                c.tweens.add({
                    targets: a,
                    alpha: .3,
                    duration: 200,
                    ease: "Linear"
                });
                var b = c.add.sprite(config.width / 2, config.height / 2, "popup"),
                    d = c.add.text(config.width / 2, 280, "Second Chance", {
                        fontFamily: "poetsenone",
                        fontSize: 40,
                        align: "center",
                        color: "#ffffff"
                    }).setOrigin(.5),
                    e = c.add.text(config.width / 2, 450, "Do you want to get\n1 minute extra\nby watching Rewarding ad?", {
                        fontFamily: "poetsenone",
                        fontSize: 30,
                        align: "center",
                        color: "#793a08"
                    }).setOrigin(.5),
                    g = draw_button(config.width / 2, 600, "yes", c),
                    f = draw_button(config.width / 2, 720, "no", c);
                u.addMultiple([a, b, d, e, g, f]);
                a = u.getLength();
                b = u.getChildren();
                for (d = 0; d < a; d++)
                    b[d].setDepth(10)
            }
        fa.setText(P(A))
    }

    function E(a) {
        if ("play" == k) {
            k = a;
            play_sound(a, c);
            var b = "GAMEOVER!";
            "completed" === a && (b = "COMPLETED!",
                unlocked_level < total_level && cur_level === unlocked_level - 1 && (unlocked_level++,
                    save_data(storage_key, unlocked_level)));
            var d = c.add.rectangle(0, 0, config.width, config.height, 0).setOrigin(0);
            d.setInteractive();
            d.alpha = 0;
            c.tweens.add({
                targets: d,
                alpha: .3,
                duration: 200,
                ease: "Linear"
            });
            var e = c.add.sprite(config.width / 2, config.height / 2, "popup");
            b = c.add.text(config.width / 2, 280, b, {
                fontFamily: "poetsenone",
                fontSize: 40,
                align: "center",
                color: "#ffffff"
            }).setOrigin(.5);
            var g = c.add.text(config.width / 2, 420, P(T), {
                fontFamily: "poetsenone",
                fontSize: 40,
                align: "center",
                color: "#c9b375"
            }).setOrigin(.5);
            a = "completed" === a ? draw_button(config.width / 2, 560, "next", c) : draw_button(config.width / 2, 560, "restart", c);
            var f = draw_button(config.width / 2, 680, "menu", c);
            u.addMultiple([d, e, b, g, a, f]);
            d = u.getLength();
            e = u.getChildren();
            for (b = 0; b < d; b++)
                e[b].setDepth(10)
        }
    }

    function ha() {
        var a = c.add.rectangle(0, 0, config.width, config.height, 0).setOrigin(0);
        a.setInteractive();
        a.alpha = 0;
        c.tweens.add({
            targets: a,
            alpha: .3,
            duration: 200,
            ease: "Linear"
        });
        var b = c.add.sprite(config.width / 2, config.height / 2, "popup"),
            d = c.add.text(config.width / 2, 280, "Paused", {
                fontFamily: "poetsenone",
                fontSize: 40,
                align: "center",
                color: "#ffffff"
            }).setOrigin(.5),
            e = draw_button(config.width / 2, 480, "resume", c),
            g = draw_button(config.width / 2, 600, "restart", c),
            f = draw_button(config.width / 2, 720, "menu", c);
        u.addMultiple([a, b, d, e, g, f]);
        a = u.getLength();
        b = u.getChildren();
        for (d = 0; d < a; d++)
            b[d].setDepth(10)
    }

    function ia() {
        // "undefined" !== gdsdk && "undefined" !== gdsdk.showAd && gdsdk.showAd("rewarded").then(function(a) {
        u.clear(!0, !0);
        A = 60;
        k = "play"
        // }).catch(function(a) {
        //     u.clear(!0, !0);
        //     c.time.delayedCall(500, function() {
        //         k = "play";
        //         E("gameover")
        //     })
        // })
    }

    function ja() {
        // if ("undefined" !== gdsdk && "undefined" !== gdsdk.showAd) {
        var a = c.add.rectangle(0, 0, config.width, config.height, 0).setOrigin(0);
        a.setInteractive();
        a.setDepth(100);
        a.alpha = 0;
        c.tweens.add({
            targets: a,
            alpha: .5,
            duration: 200,
            ease: "Linear"
        });
        // gdsdk.showAd("rewarded").then(function(b) {
        a.destroy(!0, !0);
        O()
        // }).catch(function(b) {
        //     a.destroy(!0, !0);
        //     10 < A && (F || L(),
        //     O(),
        //     K(10))
        // })
        // }
    }
    cur_scene = this;
    this.add.sprite(config.width / 2, config.height / 2, "background");
    // "undefined" !== gdsdk && "undefined" !== gdsdk.preloadAd && gdsdk.preloadAd("rewarded").then(function(a) {}).catch(function(a) {});
    var F, V = !1,
        H = !1,
        c = this,
        k = "play",
        u = this.add.group(),
        t = this.add.group();
    this.add.group();
    for (var G = [], f = [], D = [], A, T = 0, U = !1, h = JSON.parse(JSON.stringify(stages[cur_level])), q = {
            width: 10,
            height: 11
        }, W = config.width / 2 - q.width / 2 * 68 + 34, X = config.height / 2 - q.height / 2 * 68 + 34 - 50, l = config.width / 2 - 252 + 36, v = 0; 7 > v; v++) {
        var n = this.add.sprite(l + 72 * v, 900, "placement");
        G.push(n)
    }
    (function() {
        var a = 0,
            b = 0;
        a: for (; b < q.width; b++) {
            for (var c = 0; c < q.height; c++)
                if (h[0][c][b][1]) {
                    var e = a;
                    break a
                }
            a++
        }
        a = 0;
        b = q.width - 1;
        a: for (; 0 <= b; b--) {
            for (c = 0; c < q.height; c++)
                if (h[0][c][b][1]) {
                    var g = a;
                    break a
                }
            a++
        }
        b = a = 0;
        a: for (; b < q.height; b++) {
            for (c = 0; c < q.width; c++)
                if (h[0][b][c][1]) {
                    var f = a;
                    break a
                }
            a++
        }
        a = 0;
        b = q.height - 1;
        a: for (; 0 <= b; b--) {
            for (c = 0; c < q.width; c++)
                if (h[0][b][c][1]) {
                    var k = a;
                    break a
                }
            a++
        }
        W -= (e - g) / 2 * 68;
        X -= (f - k) / 2 * 68
    })();
    var z = h.length;
    for (v = l = 0; v < z; v++)
        for (n = 0; n < q.width; n++)
            for (var x = 0; x < q.height; x++)
                h[v][x][n][1] && l++;
    console.log(l + " pieces");
    0 != l % 3 && alert("Error count");
    A = Math.round(l / 2 * 3.5);
    0 == cur_level && (A += 80);
    v = function(a) {
        var b = 15 + cur_level;
        29 < b && (b = 29);
        for (var c = [], e = [], f = 0; f < a / 3; f++)
            e.push(Math.round(Math.random() * b));
        for (a = 0; 3 > a; a++)
            for (b = 0; b < e.length; b++)
                c.push(e[b]);
        return S(c)
    }(l);
    for (n = 0; n < z; n++)
        for (x = 0; x < q.width; x++)
            for (var C = 0; C < q.height; C++)
                if (h[n][C][x][1]) {
                    l--;
                    var p = this.add.sprite(W + 68 * x - 12 * n, X + 68 * C - 12 * n, "tiles");
                    p.setInteractive();
                    p.pos = {
                        z: n,
                        x: x,
                        y: C
                    };
                    p.uid = l;
                    p.piece = !0;
                    p.setFrame(v[l]);
                    h[n][C][x][0] && (p.y += 34,
                        2 === h[n][C][x][0] && (p.x += 34));
                    p.def = {
                        x: p.x,
                        y: p.y,
                        z: p.z
                    };
                    p.arr_data = JSON.stringify(h[n][C][x]);
                    p.setDepth(n + 1);
                    p.shadow = this.add.sprite(p.x, p.y, "shadow");
                    p.shadow.setDepth(n);
                    t.add(p)
                }
                [this.add.sprite(0, 0, "highlight"), this.add.sprite(0, 0, "highlight")].forEach(function(a) {
        a.setDepth(z);
        a.setVisible(!1)
    });
    l = this.add.sprite(0, 0, "tiles");
    l.setDepth(z);
    l.setVisible(!1);
    l = this.add.sprite(0, 0, "tiles");
    l.setDepth(z);
    l.setVisible(!1);
    I();
    t.getLength();
    var ka = 0;
    this.add.sprite(config.width / 2, 0, "header").setOrigin(.5, 0);
    this.add.sprite(config.width / 2, config.height, "footer").setOrigin(.5, 1);
    draw_button(642, 1030, "undo", this);
    draw_button(79, 1030, "shuffle", this);
    draw_button(642, 54, "pause", this);
    l = draw_button(79, 54, "sound_on", this);
    l.name = "sound";
    check_audio(l);
    this.add.sprite(config.width / 2 - 20, 52, "bar_timer");
    var fa = c.add.text(config.width / 2, 54, P(A), {
            fontFamily: "poetsenone",
            fontSize: 40,
            align: "center",
            color: "#ffffff"
        }).setOrigin(.5),
        ba = this.add.text(1353, 42, t.getLength(), {
            fontFamily: "poetsenone",
            fontSize: 32,
            align: "center",
            color: "#fff"
        }).setOrigin(.5),
        la = this.add.text(817, 44, String(J(!0)), {
            fontFamily: "poetsenone",
            fontSize: 32,
            align: "center",
            color: "#fff"
        }).setOrigin(.5);
    0 == cur_level && (k = "tutor",
        v = c.add.rectangle(0, 0, config.width, config.height, 0).setOrigin(0),
        v.setInteractive(),
        v.alpha = .7,
        v.setDepth(1E3),
        l = this.add.video(config.width / 2, config.height / 2, "tutor"),
        l.setDepth(1E3),
        l.play(!0),
        l.setPaused(!1),
        n = draw_button(510, 360, "close", this),
        n.setDepth(1E3),
        u.addMultiple([v, l, n]));
    this.input.on("gameobjectdown", function(a, b) {
        b.piece && !b.picked && b.available && "play" == k && !H && (play_sound("tile", c),
            k = "moving",
            m(b));
        b.button && ("hint" === b.name ? play_sound("hint", c) : "shuffle" === b.name ? play_sound("shuffle", c) : play_sound("click", c),
            c.tweens.add({
                targets: b,
                scaleX: .95,
                scaleY: .95,
                yoyo: !0,
                duration: 100,
                ease: "Linear",
                onComplete: function() {
                    "play" === k ? "sound" === b.name ? switch_audio(b) : "home" === b.name ? (show_ad(),
                        c.scene.start("menu")) : "shuffle" === b.name ? ja() : "hint" === b.name ? 10 < A && (F || L(),
                        ca(),
                        K(15)) : "pause" === b.name ? (k = "pause",
                        ha()) : "undo" === b.name && (K(3),
                        R()) : "resume" === b.name ? (k = "play",
                        u.clear(!0, !0)) : "sound" === b.name ? switch_audio(b) : "restart" === b.name ? (show_ad(),
                        c.scene.restart()) : "menu" === b.name ? (show_ad(),
                        c.scene.start("level")) : "close" === b.name ? "tutor" == k && (u.clear(!0, !0),
                        k = "play") : "next" === b.name ? cur_level < stages.length - 1 ? (cur_level++,
                        show_ad(),
                        c.scene.restart()) : (show_ad(),
                        c.scene.start("level")) : "no" === b.name ? (u.clear(!0, !0),
                        c.time.delayedCall(500, function() {
                            k = "play";
                            E("gameover")
                        })) : "yes" === b.name && ia()
                }
            }))
    });
    var Q = !1;
    this.input.keyboard.on("keydown", function(a) {
        if (" " === a.key && !Q) {
            var b = J();
            b ? (Q = !0,
                b[0].setTint(15881578),
                b[1].setTint(15881578),
                setTimeout(function() {
                    ka += da(b[0].frame.name) * t.getLength();
                    M(b[0].pos);
                    M(b[1].pos);
                    I();
                    var a = J(!0);
                    la.setText(a);
                    a || setTimeout(function() {
                        t.getLength() ? O() : E("completed")
                    }, 1E3);
                    V || (V = !0);
                    Q = !1
                }, 500)) : console.log("no pair")
        }
        "a" == a.key && e();
        "p" == a.key && R()
    })
};
var config = {
        type: Phaser.WEBGL,
        transparent: !0,
        width: 720,
        height: 1080,
        scale: {
            mode: Phaser.Scale.FIT,
            parent: "game_content",
            autoCenter: Phaser.Scale.CENTER_BOTH
        },
        scene: [Boot, Load, Menu, Level, Game]
    },
    game = new Phaser.Game(config);