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
    } catch (c) {}
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
        var c = $jscomp.setPrototypeOf;
        c(a, b)
    } else
        for (c in b)
            if ("prototype" != c)
                if (Object.defineProperties) {
                    var d = Object.getOwnPropertyDescriptor(b, c);
                    d && Object.defineProperty(a, c, d)
                } else a[c] = b[c];
    a.superClass_ = b.prototype
};
var game_data = {
        sound: !0
    },
    Menu = function() {
        return Phaser.Scene.call(this, "menu") || this
    };
$jscomp.inherits(Menu, Phaser.Scene);
Menu.prototype.create = function() {
    var a = this;
    cur_scene = this;
    this.add.sprite(config.width / 2, config.height / 2, "background");
    var b = this,
        c = this.add.group(),
        d = this.add.sprite(config.width / 2, 340, "game_title");
    this.add.sprite(config.width / 2, 810, "animals");
    var g = "play";
    this.tweens.add({
        targets: d,
        y: d.y + 20,
        duration: 1300,
        ease: "Sine.easeInOut",
        yoyo: !0,
        repeat: -1
    });
    draw_button(config.width / 2, 640, "play", this);
    this.input.on("gameobjectdown", function(d, f) {
        "about" == g && (c.clear(!0, !0), g = "play");
        f.button && (play_sound("click",
            a), a.tweens.add({
            targets: f,
            scaleX: .9,
            scaleY: .9,
            yoyo: !0,
            ease: "Linear",
            duration: 100,
            onComplete: function() {
                if ("play" === f.name) show_ad(), b.scene.start("level");
                else if ("about" === f.name) {
                    g = "about";
                    var a = b.add.rectangle(0, 0, config.width, config.height, 0).setOrigin(0);
                    a.setInteractive();
                    a.alpha = 0;
                    b.tweens.add({
                        targets: a,
                        alpha: .3,
                        duration: 200,
                        ease: "Linear"
                    });
                    var d = b.add.sprite(config.width / 2, config.height / 2, "popup");
                    d.setInteractive();
                    var e = b.add.text(config.width / 2, 280, "About", {
                            fontFamily: "poetsenone",
                            fontSize: 40,
                            align: "center",
                            color: "#ffffff"
                        }).setOrigin(.5),
                        h = b.add.text(360, 580, "Developed by Gimcraft\nhttps://gimcraft.com", {
                            fontFamily: "poetsenone",
                            fontSize: 30,
                            align: "center",
                            color: "#b25816"
                        }).setOrigin(.5),
                        k = draw_button(570, 310, "close", b);
                    c.addMultiple([a, d, e, h, k]);
                    a = c.getLength();
                    d = c.getChildren();
                    for (e = 0; e < a; e++) d[e].setDepth(10)
                }
            }
        }, a))
    }, this);
    this.add.sprite(config.width / 2, config.height - 50, "gimcraft_wm")
};