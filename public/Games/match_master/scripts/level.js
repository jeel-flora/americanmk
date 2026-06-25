var $jscomp = $jscomp || {};
$jscomp.scope = {};
$jscomp.ASSUME_ES5 = !1;
$jscomp.ASSUME_NO_NATIVE_MAP = !1;
$jscomp.ASSUME_NO_NATIVE_SET = !1;
$jscomp.SIMPLE_FROUND_POLYFILL = !1;
$jscomp.objectCreate = $jscomp.ASSUME_ES5 || "function" == typeof Object.create ? Object.create : function(a) {
    var b = function() {};
    b.prototype = a;
    return new b
};
$jscomp.underscoreProtoCanBeSet = function() {
    var a = {
            a: !0
        },
        b = {};
    try {
        return b.__proto__ = a, b.a
    } catch (f) {}
    return !1
};
$jscomp.setPrototypeOf = "function" == typeof Object.setPrototypeOf ? Object.setPrototypeOf : $jscomp.underscoreProtoCanBeSet() ? function(a, b) {
    a.__proto__ = b;
    if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
    return a
} : null;
$jscomp.inherits = function(a, b) {
    a.prototype = $jscomp.objectCreate(b.prototype);
    a.prototype.constructor = a;
    if ($jscomp.setPrototypeOf) {
        var f = $jscomp.setPrototypeOf;
        f(a, b)
    } else
        for (f in b)
            if ("prototype" != f)
                if (Object.defineProperties) {
                    var l = Object.getOwnPropertyDescriptor(b, f);
                    l && Object.defineProperty(a, f, l)
                } else a[f] = b[f];
    a.superClass_ = b.prototype
};
var total_level = stages.length,
    unlocked_level = 1,
    cur_level = 1,
    storage_key = "gc_tile_matching";
get_data(storage_key) && (unlocked_level = get_data(storage_key));
var Level = function() {
    return Phaser.Scene.call(this, "level") || this
};
$jscomp.inherits(Level, Phaser.Scene);
Level.prototype.create = function() {
    function a(a) {
        if (q) {
            var c = !1,
                d = 0;
            if ("right" === a) {
                if (k + 1 < n) {
                    k++;
                    var e = -720;
                    c = !0
                }
            } else "left" === a && 0 <= k - 1 && (k--, e = 720, c = !0);
            if (c) {
                b();
                q = !1;
                var g = f.getLength();
                a = f.getChildren();
                for (c = 0; c < g; c++) {
                    var h = a[c];
                    this.tweens.add({
                        targets: h,
                        x: h.x + e,
                        ease: "Linear",
                        duration: 300,
                        onComplete: function() {
                            d++;
                            d === g - 1 && (q = !0)
                        }
                    })
                }
            }
        }
    }

    function b() {
        for (var a = l.getLength(), c = l.getChildren(), b = 0; b < a; b++) {
            var d = c[b];
            b === k ? d.setFrame(0) : d.setFrame(1)
        }
    }
    cur_scene = this;
    this.add.sprite(config.width /
        2, 0, "bg_level").setOrigin(.5, 0);
    this.add.sprite(config.width / 2, 0, "header").setOrigin(.5, 0);
    draw_button(100, 60, "back2", this);
    for (var f = this.add.group(), l = this.add.group(), q = !0, d = 0, e = config.width / 2 - 300 + 75, n = Math.ceil(total_level / 16), p = Math.ceil(unlocked_level / 16), k = 0, m = 0; m < n; m++) {
        0 < m && (e += 720);
        for (var h = 0; 4 > h; h++)
            for (var r = 0; 4 > r; r++)
                if (d < total_level) {
                    var g = void 0;
                    d < unlocked_level - 1 ? g = "btn_level" : d === unlocked_level - 1 && (g = "btn_level_cur");
                    d > unlocked_level - 1 && (g = "btn_level_lock");
                    g = this.add.sprite(e + 150 *
                        r, 270 + 160 * h, g).setInteractive();
                    g.button = !0;
                    g.id = d;
                    if (d <= unlocked_level - 1) {
                        var t = this.add.text(g.x, g.y, String(d + 1), {
                            fontFamily: "poetsenone",
                            fontSize: 50,
                            align: "center",
                            color: "#000000"
                        }).setOrigin(.5);
                        f.add(t)
                    }
                    f.add(g);
                    d++
                }
    }
    d = 360 - 85 * (n - 1) / 2;
    for (e = 0; e < n; e++) m = 0, e != k && (m = 1), h = this.add.sprite(d + 85 * e, 940, "page").setInteractive(), h.setFrame(m), h.id = e, h.page = !0, l.add(h);
    if (1 < p)
        for (k = p - 1, b(), p = f.getLength(), d = f.getChildren(), e = 0; e < p; e++) d[e].x -= 720 * k;
    draw_button(100, 940, "arrow_left", this);
    draw_button(config.width -
        100, 940, "arrow_right", this);
    this.input.keyboard.on("keydown", function(b) {
        "ArrowRight" === b.key ? a.bind(this)("right") : "ArrowLeft" === b.key && a.bind(this)("left")
    }, this);
    this.input.on("gameobjectdown", function(b, c) {
        c.page ? c.id != k && (c.id > k ? a.bind(this)("right") : a.bind(this)("left")) : c.button && (play_sound("click", this), this.tweens.add({
            targets: c,
            scaleX: .95,
            scaleY: .95,
            yoyo: !0,
            ease: "Linear",
            duration: 100,
            onComplete: function() {
                "back2" === c.name ? this.scene.start("menu") : "arrow_left" == c.name ? a.bind(this)("left") :
                    "arrow_right" == c.name ? a.bind(this)("right") : c.id + 1 <= unlocked_level && (cur_level = c.id, this.scene.start("game"))
            }.bind(this)
        }, this))
    }, this)
};