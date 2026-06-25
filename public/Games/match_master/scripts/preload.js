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
var Load = function() {
    return Phaser.Scene.call(this, "load") || this
};
$jscomp.inherits(Load, Phaser.Scene);
Load.prototype.preload = function() {
    var a = this;
    this.add.sprite(config.width / 2, 340, "game_title");
    var b = this.add.rectangle(config.width / 2, 600, 600, 20);
    b.setStrokeStyle(4, 16777215);
    b.alpha = .7;
    var c = this.add.rectangle(config.width / 2, 600, 590, 10, 16777215);
    c.alpha = .8;
    this.load.on("progress", function(a) {
        c.width = 590 * a
    });
    this.load.on("complete", function() {
        a.scene.start("menu")
    }, this);
    this.input.on("gameobjectdown", function() {
        a.scene.start("menu")
    }, this);
    this.load.image("shadow", "img/shadow.png");
    this.load.image("cursor",
        "img/cursor.png");
    this.load.image("bar_timer", "img/bar_timer.png");
    this.load.image("animals", "img/animals.png");
    this.load.image("popup", "img/popup.png");
    this.load.image("header", "img/header.png");
    this.load.image("footer", "img/footer.png");
    this.load.image("placement", "img/placement.png");
    this.load.image("highlight", "img/highlight.png");
    this.load.image("bg_level", "img/bg_level.png");
    this.load.image("btn_arrow_left", "img/btn_arrow_left.png");
    this.load.image("btn_arrow_right", "img/btn_arrow_right.png");
    this.load.image("popup_gameover", "img/popup_gameover.png");
    this.load.image("btn_close", "img/btn_close.png");
    this.load.image("btn_back2", "img/btn_back2.png");
    this.load.image("btn_restart", "img/btn_restart.png");
    this.load.image("btn_back", "img/btn_back.png");
    this.load.image("btn_menu", "img/btn_menu.png");
    this.load.image("btn_next", "img/btn_next.png");
    this.load.image("btn_resume", "img/btn_resume.png");
    this.load.image("btn_play", "img/btn_play.png");
    this.load.image("btn_about", "img/btn_about.png");
    this.load.image("btn_hint",
        "img/btn_hint.png");
    this.load.image("btn_shuffle", "img/btn_shuffle.png");
    this.load.image("btn_undo", "img/btn_undo.png");
    this.load.image("btn_pause", "img/btn_pause.png");
    this.load.image("btn_level", "img/btn_level.png");
    this.load.image("btn_yes", "img/btn_yes.png");
    this.load.image("btn_no", "img/btn_no.png");
    this.load.image("btn_level_cur", "img/btn_level_cur.png");
    this.load.image("btn_level_lock", "img/btn_level_lock.png");
    this.load.image("btn_sound_on", "img/btn_sound_on.png");
    this.load.image("btn_sound_off",
        "img/btn_sound_off.png");
    this.load.spritesheet("tiles", "img/tiles.png", {
        frameWidth: 80,
        frameHeight: 80
    });
    this.load.spritesheet("page", "img/page.png", {
        frameWidth: 84,
        frameHeight: 84
    });
    this.load.audio("click", "audio/click.mp3");
    this.load.audio("completed", "audio/completed.mp3");
    this.load.audio("gameover", "audio/gameover.mp3");
    this.load.audio("hint", "audio/hint.mp3");
    this.load.audio("stack", "audio/stack.mp3");
    this.load.audio("tile", "audio/tile.mp3");
    this.load.audio("wrong", "audio/wrong.mp3");
    this.load.audio("shuffle",
        "audio/shuffle.mp3");
    this.load.audio("match", "audio/match.mp3");
    this.load.video("tutor", "file/tutor.mp4", "loadeddata", !0, !0)
};
Load.prototype.create = function() {};