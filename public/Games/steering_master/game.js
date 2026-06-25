var Game;
(function(Game) {
    var SceneList;
    (function(SceneList) {
        // game states
        SceneList["Boot"] = "Boot";
        SceneList["Preloader"] = "Preloader";
        SceneList["LevelBuilder"] = "LevelBuilder";
    })(SceneList = Game.SceneList || (Game.SceneList = {}));
    var SubSceneList;
    (function(SubSceneList) {
        // game sub states
        SubSceneList["Menu"] = "SubMenu";
        SubSceneList["Game"] = "SubGame";
        SubSceneList["Shop"] = "SubShop";
        SubSceneList["Defeat"] = "SubDefeat";
        SubSceneList["Missions"] = "SubMission";
        SubSceneList["SplashScreen"] = "SubSplashScreen";
    })(SubSceneList = Game.SubSceneList || (Game.SubSceneList = {}));
    var PanelList;
    (function(PanelList) {
        PanelList["NoOne"] = "NoOne";
        PanelList["Pause"] = "PanelPause";
        PanelList["Continue"] = "PanelContinue";
        PanelList["GetCoins"] = "PanelGetCoins";
        PanelList["NoMoreVideo"] = "PanelNoMoreVideo";
        PanelList["WatchFullVideo"] = "PanelWatchFullVideo";
        PanelList["Daily"] = "PanelDaily";
    })(PanelList = Game.PanelList || (Game.PanelList = {}));
    var RoadType;
    (function(RoadType) {
        RoadType[RoadType["straight"] = 0] = "straight";
        RoadType[RoadType["bend"] = 1] = "bend";
        RoadType[RoadType["slew"] = 2] = "slew";
        RoadType[RoadType["circle"] = 3] = "circle";
        RoadType[RoadType["coin"] = 4] = "coin";
        RoadType[RoadType["shield"] = 5] = "shield";
        RoadType[RoadType["recordLine"] = 6] = "recordLine";
    })(RoadType = Game.RoadType || (Game.RoadType = {}));
    var ControlType;
    (function(ControlType) {
        ControlType[ControlType["spin"] = 0] = "spin";
        ControlType[ControlType["tap"] = 1] = "tap";
    })(ControlType = Game.ControlType || (Game.ControlType = {}));
    var Bool3;
    (function(Bool3) {
        Bool3[Bool3["true"] = 0] = "true";
        Bool3[Bool3["false"] = 1] = "false";
        Bool3[Bool3["none"] = 2] = "none";
    })(Bool3 = Game.Bool3 || (Game.Bool3 = {}));
})(Game || (Game = {}));
var __extends = (this && this.__extends) || (function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({
                    __proto__: []
                }
                instanceof Array && function(d, b) {
                    d.__proto__ = b;
                }) ||
            function(d, b) {
                for (var p in b)
                    if (b.hasOwnProperty(p)) d[p] = b[p];
            };
        return extendStatics(d, b);
    }
    return function(d, b) {
        extendStatics(d, b);

        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Game;
(function(Game) {
    var Main = /** @class */ (function(_super) {
        __extends(Main, _super);

        function Main() {
            var _this = this;
            var config = {
                width: Game.Constants.GAME_MAX_WIDTH,
                height: Game.Constants.GAME_MAX_HEIGHT,
                renderer: Phaser.AUTO,
                antialias: true,
                enableDebug: false,
                parent: Game.Constants.DIV_ID
            };
            _this = _super.call(this, config) || this;
            Main.instance = _this;
            Main.gameHalfWidthMax = Game.Constants.GAME_MAX_WIDTH / 2;
            Main.gameHalfHeightMax = Game.Constants.GAME_MAX_HEIGHT / 2;
            _this.clearBeforeRender = false;
            _this.state.onStateChange.add(Game.CustomResize.resizeCurrentScene, Game.CustomResize);
            window.addEventListener('blur', function() {
                return _this.focusLost();
            });
            window.addEventListener('focus', function() {
                return _this.focusFound();
            });
            _this.maxCars = 36;
            _this.carForAd = 5;
            _this.adCarStart = _this.maxCars - _this.carForAd;
            _this.initStates();
            return _this;
        }
        Main.getInstance = function() {
            return Main.instance;
        };
        Main.prototype.focusLost = function() {
            this.paused = true;
            Main.LOST_FOCUS = true;
        };
        Main.prototype.focusFound = function() {
            this.paused = false;
            Main.LOST_FOCUS = false;
        };
        Main.prototype.initStates = function() {
            this.state.add(Game.SceneList.Boot, Game.Boot, false);
            this.state.add(Game.SceneList.Preloader, Game.Preloader, false);
            this.state.add(Game.SceneList.LevelBuilder, Game.LevelBuilder, false);
            this.showScene(Game.SceneList.Boot);
        };
        Main.prototype.preloaderComplete = function() {
            Game.DataManager.getInstance().loadProgress(localStorage.getItem(Game.Constants.SAVE_NAME));
            if (!Game.DataManager.getInstance().getData('played')) {
                Game.DataManager.getInstance().saveData('played', 1);
                Game.DataManager.getInstance().saveData('carID', 1);
                Game.DataManager.getInstance().saveData('openID1', 1);
                for (var i = this.adCarStart; i < this.maxCars; i++) {
                    Game.DataManager.getInstance().saveData('carAD' + i, 4);
                }
            }
            Game.SoundManager.start();
            this.physics.startSystem(Phaser.Physics.BOX2D);
            Game.Missions.getInstance().init();
            this.roadCreator = new Game.RoadCreator(this);
            this.roadLocation = new Game.RoadLocation();
            this.roadColors = new Game.RoadColors();
            this.showScene(Game.SceneList.LevelBuilder);
            this.stage.addChild(new Game.PanelManager(this));
        };
        Main.prototype.showScene = function(sceneId) {
            this.state.start(sceneId, true, false);
        };
        Main.instance = null;
        Main.LOST_FOCUS = false;
        return Main;
    }(Phaser.Game));
    Game.Main = Main;
})(Game || (Game = {}));
/// <reference path="../tsDefinitions/phaser.comments.d.ts"/>
/// <reference path="../tsDefinitions/phaser_box2d.d.ts"/>
var Game;
(function(Game) {
    var Button = /** @class */ (function(_super) {
        __extends(Button, _super);

        function Button(game, x, y, name) {
            var _this = _super.call(this, game, x, y, 'game', name) || this;
            _this.pressed = false;
            _this.soundName = 'btnClick';
            _this.anchor.setTo(0.5);
            _this.inputEnabled = true;
            _this.input.useHandCursor = true;
            _this.onComplete = new Phaser.Signal();
            _this.events.onInputDown.add(_this.down, _this);
            _this.events.onInputUp.add(_this.up, _this);
            return _this;
        }
        Button.prototype.addIcon = function(name, x, y) {
            var icon = this.game.make.image(x, y, 'game', name);
            icon.cacheAsBitmap = true;
            icon.anchor.setTo(0.5);
            this.addChild(icon);
            return icon;
        };
        Button.prototype.down = function() {
            this.pressed = true;
            this.downComplete();
        };
        Button.prototype.downComplete = function() {};
        Button.prototype.up = function(sprite, pointer, isOver) {
            if (this.pressed === true) {
                this.upComplete(isOver);
            }
            this.pressed = false;
        };
        Button.prototype.upComplete = function(isOver) {
            if (isOver === true) {
                if (this.soundName) {
                    Game.SoundManager.playSFX(this.soundName);
                }
                this.onComplete.dispatch();
            }
        };
        Button.prototype.destroy = function() {
            _super.prototype.destroy.call(this);
            this.onComplete = null;
        };
        return Button;
    }(Phaser.Image));
    Game.Button = Button;
})(Game || (Game = {}));
var Game;
(function(Game) {
    var ButtonScale = /** @class */ (function(_super) {
        __extends(ButtonScale, _super);

        function ButtonScale() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.upScale = new Phaser.Point(1, 1);
            _this.downScale = new Phaser.Point(0.9, 0.9);
            return _this;
        }
        ButtonScale.prototype.downComplete = function() {
            this.scale = this.downScale;
        };
        ButtonScale.prototype.upComplete = function(isOver) {
            _super.prototype.upComplete.call(this, isOver);
            this.scale = this.upScale;
        };
        ButtonScale.prototype.destroy = function() {
            _super.prototype.destroy.call(this);
        };
        return ButtonScale;
    }(Game.Button));
    Game.ButtonScale = ButtonScale;
})(Game || (Game = {}));
var Game;
(function(Game) {
    var ButtonSound = /** @class */ (function(_super) {
        __extends(ButtonSound, _super);

        function ButtonSound(game, x, y, type) {
            var _this = _super.call(this, game, x, y, '') || this;
            _this.stype = type;
            _this.set_Frame();
            return _this;
        }
        ButtonSound.prototype.downComplete = function() {
            _super.prototype.downComplete.call(this);
        };
        ButtonSound.prototype.upComplete = function(isOver) {
            _super.prototype.upComplete.call(this, isOver);
            if (isOver === true) {
                if (this.stype === Game.SoundType.Music) {
                    Game.SoundManager.changeEnabledMusic();
                } else {
                    Game.SoundManager.changeEnabledSFX();
                }
                this.set_Frame();
            }
        };
        ButtonSound.prototype.set_Frame = function() {
            if (Game.SoundManager.getEnabled(this.stype) === true) {
                this.frameName = 'btn' + this.stype + ' instance 10000';
            } else {
                this.frameName = 'btn' + this.stype + ' instance 10001';
            }
        };
        return ButtonSound;
    }(Game.ButtonScale));
    Game.ButtonSound = ButtonSound;
})(Game || (Game = {}));
var Game;
(function(Game) {
    var ButtonText = /** @class */ (function(_super) {
        __extends(ButtonText, _super);

        function ButtonText() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         *
         * @param text localization
         * @param x
         * @param y
         * @param size
         * @param color
         * @param align
         */
        ButtonText.prototype.addText = function(text, x, y, size, color, align) {
            if (color === void 0) {
                color = 0xFFFFFF;
            }
            if (align === void 0) {
                align = 'center';
            }
            this.addText2(Game.Localization.getText(text), x, y, size, color, align);
        };
        /**
         *
         * @param text no localization
         * @param x
         * @param y
         * @param size
         * @param color
         * @param align
         */
        ButtonText.prototype.addText2 = function(text, x, y, size, color, align) {
            if (color === void 0) {
                color = 0xFFFFFF;
            }
            if (align === void 0) {
                align = 'center';
            }
            this.text = new Game.BmpdText(this.game, x, y, text, size, align);
            this.text.anchor.set(0.5, 0.5);
            this.text.tint = color;
            this.addChild(this.text);
        };
        ButtonText.prototype.destroy = function() {
            _super.prototype.destroy.call(this);
            this.text = null;
        };
        return ButtonText;
    }(Game.ButtonScale));
    Game.ButtonText = ButtonText;
})(Game || (Game = {}));
var Game;
(function(Game) {
    var CustomResize = /** @class */ (function() {
        function CustomResize() {}
        CustomResize.init = function(game) {
            var _this = this;
            this.game = game;
            this.dom = document.getElementById(Game.Constants.DIV_ID);
            this.dom_orientation = document.getElementById(Game.Constants.DIV_ID_ORIENTATION);
            this.game.scale.scaleMode = Phaser.ScaleManager.USER_SCALE;
            this.getParams();
            window.addEventListener('resize', function(e) {
                return _this.resize();
            });
            this.resize();
        };
        CustomResize.getParams = function() {
            this.offsetWidth = Math.round((Game.Constants.GAME_MAX_WIDTH - Game.Constants.GAME_WIDTH) / 2);
            this.offsetHeight = Math.round((Game.Constants.GAME_MAX_HEIGHT - Game.Constants.GAME_HEIGHT) / 2);
        };
        CustomResize.resize = function() {
            var newWidth = this.getScreenWidth();
            var newHeight = this.getScreenHeigth();
            var maxScaleX = newWidth / Game.Constants.GAME_WIDTH;
            var maxScaleY = newHeight / Game.Constants.GAME_HEIGHT;
            var currentScale = Math.min(maxScaleX, maxScaleY);
            var shiftLayerX = newWidth / 2 - (Game.Constants.GAME_MAX_WIDTH * currentScale) / 2;
            var shiftLayerY = newHeight / 2 - (Game.Constants.GAME_MAX_HEIGHT * currentScale) / 2;
            this.shiftX = Game.Tools.abs(Math.round(Phaser.Math.clamp(shiftLayerX / currentScale, -this.offsetWidth, 0)));
            this.shiftY = Game.Tools.abs(Math.round(Phaser.Math.clamp(shiftLayerY / currentScale, -this.offsetHeight, 0)));
            this.game.scale.setUserScale(currentScale, currentScale, 0, 0);
            this.dom.style.marginLeft = Math.round(shiftLayerX).toString() + 'px';
            this.dom.style.marginTop = Math.round(shiftLayerY).toString() + 'px';
            this.dom.style.maxWidth = String(Game.Constants.GAME_MAX_WIDTH * currentScale) + 'px';
            this.dom.style.maxHeight = String(Game.Constants.GAME_MAX_HEIGHT * currentScale) + 'px';
            this.game.scale.refresh();
            if (this.game.state.states[this.game.state.current]) {
                this.resizeCurrentScene();
            }
            if (this.game.device.desktop === false) {
                if ((newHeight > newWidth) !== Game.Constants.ORIENTATION_PORTRAIT) {
                    this.showRotateIcon();
                } else {
                    this.hideRotateIcon();
                }
                setTimeout('window.scrollTo(0,0)', 1000);
            }
        };
        CustomResize.resizeCurrentScene = function() {
            this.game.state.states[this.game.state.current].customResize(CustomResize.shiftX, CustomResize.shiftY);
            if (Game.PanelManager.getInstance()) {
                Game.PanelManager.getInstance().resize(CustomResize.shiftX, CustomResize.shiftY);
            }
        };
        CustomResize.showRotateIcon = function() {
            this.dom_orientation.style.display = 'block';
            Game.Main.getInstance().focusLost();
        };
        CustomResize.hideRotateIcon = function() {
            this.dom_orientation.style.display = 'none';
            Game.Main.getInstance().focusFound();
        };
        CustomResize.getScreenWidth = function() {
            if (this.game.device.desktop === false && this.game.device.iOS === true) {
                return document.documentElement.clientWidth;
            }
            return window.innerWidth;
        };
        CustomResize.getScreenHeigth = function() {
            if (this.game.device.desktop === false && this.game.device.iOS === true) {
                return document.documentElement.clientHeight;
            }
            return window.innerHeight;
        };
        CustomResize.offsetWidth = 0;
        CustomResize.offsetHeight = 0;
        CustomResize.shiftX = 0;
        CustomResize.shiftY = 0;
        return CustomResize;
    }());
    Game.CustomResize = CustomResize;
})(Game || (Game = {}));
var Game;
(function(Game) {
    var DataManager = /** @class */ (function() {
        function DataManager() {
            this.data = {};
            DataManager.instance = this;
        }
        DataManager.getInstance = function() {
            if (DataManager.instance === null) {
                return new DataManager();
            }
            return DataManager.instance;
        };
        DataManager.prototype.clearData = function() {
            this.data = {};
            this.saveProgress();
        };
        DataManager.prototype.saveData = function(key, value) {
            this.data[key] = value;
        };
        DataManager.prototype.saveBigger = function(key, value) {
            if (value > this.getDataNumber(key)) {
                this.saveData(key, value);
            }
        };
        DataManager.prototype.saveAddTo = function(key, value) {
            this.saveData(key, this.getDataNumber(key) + value);
        };
        DataManager.prototype.getData = function(key) {
            return this.data[key];
        };
        DataManager.prototype.getDataNumber = function(key) {
            var value = Number(this.data[key]);
            if (!value) {
                value = 0;
            }
            return value;
        };
        DataManager.prototype.calcData = function(key, start, end) {
            var total = 0;
            for (var i = start; i <= end; i++) {
                total += this.getDataNumber(key + '' + i);
            }
            return total;
        };
        DataManager.prototype.loadProgress = function(data) {
            if (!data) {
                this.data = {};
            } else {
                this.data = JSON.parse(data);
            }
            // console.log(this.data);
        };
        DataManager.prototype.saveProgress = function() {
            localStorage.setItem(Game.Constants.SAVE_NAME, JSON.stringify(this.data));
        };
        DataManager.instance = null;
        return DataManager;
    }());
    Game.DataManager = DataManager;
})(Game || (Game = {}));
var Game;
(function(Game) {
    var PhaserTools = /** @class */ (function() {
        function PhaserTools() {}
        PhaserTools.getAnimationFrames = function(name, start, stop) {
            var output = new Array();
            if (start < stop) {
                for (var i = start; i <= stop; i++) {
                    output.push(name + ' instance ' + (10000 + i));
                }
            } else {
                for (var i = start; i >= stop; i--) {
                    output.push(name + ' instance ' + (10000 + i));
                }
            }
            return output;
        };
        //maxwidth has https://github.com/photonstorm/phaser/issues/2601
        PhaserTools.wordWrap = function(text, symbolsLength) {
            if (text.length >= symbolsLength) {
                for (var i = text.length - 1; i >= 0; i--) {
                    if (/(\s)/.test(text.charAt(i))) {
                        if (i <= symbolsLength) {
                            return text.substr(0, i) + '\n' + text.substr(i + 1, text.length);
                        }
                    }
                }
            }
            return text;
        };
        return PhaserTools;
    }());
    Game.PhaserTools = PhaserTools;
})(Game || (Game = {}));
var Game;
(function(Game) {
    var SoundType;
    (function(SoundType) {
        SoundType["Music"] = "music";
        SoundType["SFX"] = "sfx";
    })(SoundType = Game.SoundType || (Game.SoundType = {}));
    var SoundManager = /** @class */ (function() {
        function SoundManager() {}
        SoundManager.init = function(game) {
            this.game = game;
        };
        SoundManager.start = function() {
            if (Game.DataManager.getInstance().getDataNumber('' + SoundType.Music) === 1) {
                SoundManager.enabMusic = false;
            }
            if (Game.DataManager.getInstance().getDataNumber('' + SoundType.SFX) === 1) {
                SoundManager.enabSFX = false;
            }
        };
        SoundManager.playMusic = function(name, volume) {
            if (volume === void 0) {
                volume = 0.5;
            }
            if (SoundManager.music === null) {
                SoundManager.music = SoundManager.game.add.audio(name, volume, true);
                if (SoundManager.enabMusic === true) {
                    SoundManager.music.play();
                }
            } else {
                SoundManager.music.volume = volume;
                if (SoundManager.enabMusic === true) {
                    if (SoundManager.music.key === name) {
                        SoundManager.music.play();
                    } else {
                        SoundManager.music.destroy();
                        SoundManager.music = SoundManager.game.add.audio(name, volume, true);
                        if (SoundManager.enabMusic === true) {
                            SoundManager.music.play();
                        }
                        //SoundManager.music.key = name;
                        //SoundManager.music.play();
                    }
                }
            }
        };
        SoundManager.stopMusic = function() {
            if (SoundManager.music === null) {
                return;
            }
            SoundManager.music.stop();
        };
        SoundManager.playSFX = function(name, loop, volume) {
            if (loop === void 0) {
                loop = false;
            }
            if (volume === void 0) {
                volume = 1;
            }
            if (SoundManager.enabSFX === false) {
                if (loop === true) {
                    if (SoundManager.sfxLoop[name] === undefined) {
                        SoundManager.sfxLoop[name] = SoundManager.game.add.audio(name, volume, true);
                    }
                }
                return;
            }
            if (loop === true) {
                if (SoundManager.sfxLoop[name] === undefined) {
                    SoundManager.sfxLoop[name] = SoundManager.game.add.audio(name, volume, true).play();
                } else {
                    SoundManager.sfxLoop[name].play();
                }
            } else {
                SoundManager.game.add.audio(name, volume).play();
            }
        };
        SoundManager.stopSFXLoop = function(name) {
            if (SoundManager.sfxLoop[name] === undefined) {
                return;
            }
            SoundManager.sfxLoop[name].stop();
        };
        SoundManager.stopAllSFXLoop = function() {
            for (var _i = 0, _a = Object.keys(SoundManager.sfxLoop); _i < _a.length; _i++) {
                var item = _a[_i];
                SoundManager.sfxLoop[item].stop();
            }
        };
        SoundManager.changeEnabledMusic = function() {
            if (SoundManager.enabMusic === true) {
                if (SoundManager.music !== null) {
                    SoundManager.music.pause();
                }
                Game.DataManager.getInstance().saveData('' + SoundType.Music, 1); //disable music
            } else {
                if (SoundManager.music !== null) {
                    if (SoundManager.music.paused === true) {
                        SoundManager.music.resume();
                    } else {
                        SoundManager.music.play();
                    }
                }
                Game.DataManager.getInstance().saveData('' + SoundType.Music, 0); //enable music
            }
            SoundManager.enabMusic = !SoundManager.enabMusic;
        };
        SoundManager.changeEnabledSFX = function() {
            if (SoundManager.enabSFX === true) {
                //sfx
                for (var _i = 0, _a = Object.keys(this.sfxLoop); _i < _a.length; _i++) {
                    var item = _a[_i];
                    if (this.sfxLoop[item].isPlaying === true) {
                        this.sfxLoop[item].pause();
                    }
                }
                //
                Game.DataManager.getInstance().saveData('' + SoundType.SFX, 1); //disable all SFX
            } else {
                //sfx
                for (var _b = 0, _c = Object.keys(this.sfxLoop); _b < _c.length; _b++) {
                    var item = _c[_b];
                    if (this.sfxLoop[item].paused === true) {
                        this.sfxLoop[item].resume();
                    }
                    //else {
                    //    this.sfxLoop[item].play();
                    //}
                }
                //
                Game.DataManager.getInstance().saveData('' + SoundType.SFX, 0); //enable all SFX
            }
            SoundManager.enabSFX = !SoundManager.enabSFX;
        };
        SoundManager.setEnabled = function(id) {
            if (id === SoundType.Music) {
                SoundManager.changeEnabledMusic();
            } else {
                SoundManager.changeEnabledSFX();
            }
        };
        SoundManager.getEnabled = function(id) {
            if (id === SoundType.Music) {
                return SoundManager.enabMusic;
            } else {
                return SoundManager.enabSFX;
            }
        };
        SoundManager.reset = function() {
            for (var _i = 0, _a = Object.keys(SoundManager.sfxLoop); _i < _a.length; _i++) {
                var item = _a[_i];
                SoundManager.sfxLoop[item].destroy();
            }
            SoundManager.sfxLoop = {};
        };
        SoundManager.enabMusic = true;
        SoundManager.enabSFX = true;
        SoundManager.game = null;
        SoundManager.music = null;
        SoundManager.sfxLoop = {};
        return SoundManager;
    }());
    Game.SoundManager = SoundManager;
})(Game || (Game = {}));
var Game;
(function(Game) {
    var Tools = /** @class */ (function() {
        function Tools() {}
        Tools.random = function(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        };
        /**
         * return not rounded number from 0 to 100 (Math.random() * 100)
         */
        Tools.simpleRandom = function() {
            return Math.random() * 100;
        };
        /**
         * if random < value = 1 else -1
         * @param value default is 50 < 100
         */
        Tools.randomOne = function(value) {
            if (value === void 0) {
                value = 50;
            }
            if (this.simpleRandom() < value) {
                return 1;
            }
            return -1;
        };
        /**
         * if random < value = true else false
         * @param value default is 50 < 100
         */
        Tools.randomBool = function(value) {
            if (value === void 0) {
                value = 50;
            }
            if (this.simpleRandom() < value) {
                return true;
            }
            return false;
        };
        Tools.getDir = function(value) {
            if (value < 0) {
                return -1;
            } else if (value > 0) {
                return 1;
            }
            return 0;
        };
        Tools.roundDec = function(numIn, decimalPlaces) {
            if (decimalPlaces === void 0) {
                decimalPlaces = 0;
            }
            var nExp = Math.pow(10, decimalPlaces);
            return Math.round(numIn * nExp) / nExp;
        };
        Tools.clamp = function(val, min, max) {
            return Math.max(min, Math.min(max, val));
        };
        Tools.lerp = function(start, end, amount) {
            return start + ((end - start) * Tools.clamp(amount, 0, 1));
        };
        Tools.toDeg = function(rad) {
            return rad * this.radToDeg;
        };
        Tools.toRad = function(deg) {
            return deg * this.degToRad;
        };
        Tools.getInstance = function(module, name) {
            var args = [];
            for (var _i = 2; _i < arguments.length; _i++) {
                args[_i - 2] = arguments[_i];
            }
            var newInstance = Object.create(window[module][name].prototype);
            newInstance.constructor.apply(newInstance, args);
            return newInstance;
        };
        Tools.rotatePointByAnglePIXI = function(anchorX, anchorY, rotatedX, rotatedY, angleRad) {
            var cos = Math.cos(angleRad);
            var sin = Math.sin(angleRad);
            return new PIXI.Point(anchorX + (rotatedX - anchorX) * cos - (rotatedY - anchorY) * sin, anchorY + (rotatedX - anchorX) * sin + (rotatedY - anchorY) * cos);
        };
        /**
         *
         * @param anchorX
         * @param anchorY
         * @param rotatedX
         * @param rotatedY
         * @param angleRad
         *
         * @returns object {x:number, y:number}
         */
        Tools.rotatePointByAngle = function(anchorX, anchorY, rotatedX, rotatedY, angleRad) {
            var cos = Math.cos(angleRad);
            var sin = Math.sin(angleRad);
            return {
                x: anchorX + (rotatedX - anchorX) * cos - (rotatedY - anchorY) * sin,
                y: anchorY + (rotatedX - anchorX) * sin + (rotatedY - anchorY) * cos
            };
        };
        Tools.distance = function(x1, y1, x2, y2) {
            return Math.sqrt(((x2 - x1) * (x2 - x1)) + ((y2 - y1) * (y2 - y1)));
        };
        /**
         *
         * @param x1
         * @param y1
         * @param x2
         * @param y2
         *
         * @returns angle in radians
         */
        Tools.angleOfPoints = function(x1, y1, x2, y2, xDir, yDir) {
            if (xDir === void 0) {
                xDir = -1;
            }
            if (yDir === void 0) {
                yDir = -1;
            }
            return Math.atan2((y2 - y1) * xDir, (x2 - x1) * yDir);
        };
        Tools.getObjectRandomProperty = function(obj) {
            var keys = Object.keys(obj);
            return obj[keys[keys.length * Math.random() << 0]];
        };
        Tools.abs = function(x) {
            if (x < 0) {
                x = -x;
            }
            return x;
        };
        /**
         *
         * @param clickX
         * @param clickY
         * @param moveX
         * @param moveY
         *
         * @returns 'down', 'up', 'left', 'right'
         */
        Tools.getSlideSide = function(clickX, clickY, moveX, moveY) {
            var angleSlide = this.toDeg(this.angleOfPoints(clickX, clickY, moveX, moveY));
            if (angleSlide < -45 && angleSlide > -135) {
                return 'down';
            } else if (angleSlide > 135 && angleSlide <= 180 || angleSlide >= -180 && angleSlide < -135) {
                return 'right';
            } else if (angleSlide > 45 && angleSlide < 135) {
                return 'up';
            } else if (angleSlide > -45 && angleSlide < 45) {
                return 'left';
            }
        };
        Tools.toPercent = function(current, total) {
            return (current / total) * 100;
        };
        Tools.fromPercent = function(percent, total) {
            return (percent * total) / 100;
        };
        /**
         *
         * @param value
         * @param minValue 0.05
         * @param friction 0.95
         */
        Tools.damping = function(value, minValue, friction) {
            if (minValue === void 0) {
                minValue = 0.05;
            }
            if (friction === void 0) {
                friction = 0.95;
            }
            if (value !== 0) {
                value *= friction;
                if (Tools.abs(value) < minValue) {
                    value = 0;
                }
            }
            return value;
        };
        Tools.intersects = function(x1, y1, w1, h1, x2, y2, w2, h2) {
            var r1 = x1 + w1;
            var r2 = x2 + w2;
            var b1 = y1 + h1;
            var b2 = y2 + h2;
            return !(r1 < x2 || b1 < y2 || x1 > r2 || y1 > b2);
        };
        Tools.intersectsPIXIRectangles = function(a, b) {
            return Tools.intersects(a.x, a.y, a.width, a.height, b.x, b.y, b.width, b.height);
        };
        Tools.containsPIXIRectPoint = function(a, x, y) {
            var r = a.x + a.width;
            var b = a.y + a.height;
            return (x >= a.x && x < r && y >= a.y && y < b);
        };
        Tools.getRectangleMidPoint = function(x, y, width, height, angle_rad) {
            var cosa = Math.cos(angle_rad);
            var sina = Math.sin(angle_rad);
            var wp = width / 2;
            var hp = height / 2;
            return new Phaser.Point(x + wp * cosa - hp * sina, y + wp * sina + hp * cosa);
        };
        Tools.angleDifference = function(a, b) {
            var __dif = a > b ? a - b : b - a;
            return (__dif < 180 ? __dif : 360 - __dif);
        };
        Tools.PI2 = Math.PI * 2;
        Tools.PI05 = Math.PI / 2;
        Tools.degToRad = Math.PI / 180;
        Tools.radToDeg = 180 / Math.PI;
        return Tools;
    }());
    Game.Tools = Tools;
})(Game || (Game = {}));
var Game;
(function(Game) {
    var Vector2 = /** @class */ (function() {
        function Vector2(x, y) {
            if (x === void 0) {
                x = 0;
            }
            if (y === void 0) {
                y = 0;
            }
            this.setInPlaceFloat(x, y);
        }
        Vector2.prototype.subtractBeetweenInPlace = function(vec1, vec2) {
            this.x = vec1.x - vec2.x;
            this.y = vec1.y - vec2.y;
        };
        Vector2.prototype.subtractFloatInPlace = function(x, y) {
            this.x -= x;
            this.y -= y;
        };
        Vector2.prototype.setInPlaceFloat = function(x, y) {
            this.x = x;
            this.y = y;
        };
        Vector2.prototype.setInPlace = function(vec) {
            this.x = vec.x;
            this.y = vec.y;
        };
        Vector2.prototype.normalize = function() {
            var len = this.length;
            if (len === 0) {
                return this;
            }
            var num = 1.0 / len;
            this.x *= num;
            this.y *= num;
            return this;
        };
        Object.defineProperty(Vector2.prototype, "length", {
            get: function() {
                return Math.sqrt(this.x * this.x + this.y * this.y);
            },
            set: function(length) {
                var t = length / this.length;
                this.x *= t;
                this.y *= t;
            },
            enumerable: true,
            configurable: true
        });
        //static
        Vector2.distance = function(left, right) {
            return Game.Tools.distance(left.x, left.y, right.x, right.y);
        };
        Vector2.cross = function(left, right) {
            return left.x * right.y - left.y * right.x;
        };
        Vector2.angle = function(from, to) {
            return Math.acos(Game.Tools.clamp(this.dot(from.normalize(), to.normalize()), -1, 1));
        };
        Vector2.dot = function(left, right) {
            return (left.x * right.x + left.y * right.y);
        };
        return Vector2;
    }());
    Game.Vector2 = Vector2;
})(Game || (Game = {}));
var Game;
(function(Game) {
    var BmpdText = /** @class */ (function(_super) {
        __extends(BmpdText, _super);

        function BmpdText(game, x, y, text, size, align) {
            if (align === void 0) {
                align = 'center';
            }
            return _super.call(this, game, x, y, Game.GDSDK.mainFont, text, size, align) || this;
        }
        Object.defineProperty(BmpdText.prototype, "scaleX", {
            get: function() {
                return this.scale.x;
            },
            set: function(value) {
                this.scale.x = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BmpdText.prototype, "scaleY", {
            get: function() {
                return this.scale.y;
            },
            set: function(value) {
                this.scale.y = value;
            },
            enumerable: true,
            configurable: true
        });
        return BmpdText;
    }(Phaser.BitmapText));
    Game.BmpdText = BmpdText;
})(Game || (Game = {}));
var Game;
(function(Game) {
    var JDImage = /** @class */ (function(_super) {
        __extends(JDImage, _super);

        function JDImage() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(JDImage.prototype, "scaleX", {
            get: function() {
                return this.scale.x;
            },
            set: function(value) {
                this.scale.x = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(JDImage.prototype, "scaleY", {
            get: function() {
                return this.scale.y;
            },
            set: function(value) {
                this.scale.y = value;
            },
            enumerable: true,
            configurable: true
        });
        return JDImage;
    }(Phaser.Image));
    Game.JDImage = JDImage;
})(Game || (Game = {}));
var Game;
(function(Game) {
    var ScrollHorizontal = /** @class */ (function(_super) {
        __extends(ScrollHorizontal, _super);

        function ScrollHorizontal(game, x, y, _sceneWidth, _scrollWidth) {
            var _this = _super.call(this, game) || this;
            // Constant letiables
            _this.DECAY = 0.93; //0.93;
            _this.DECAY_BOUNCING = 0.8; //0.8;
            _this.MOUSE_DOWN_DECAY = 0.5; //0.5
            _this.SPEED_SPRINGNESS = 0.4; //0.4
            _this.BOUNCING_SPRINGESS = 0.4; //0.4;
            _this.BORDER_DUMPING = 0.75; //0.75
            //
            _this.maxVelocityX = 50;
            _this.mousePressed = false;
            _this.velocityX = 0;
            _this.lastScrollX = 0;
            _this.mouseDownX = 0;
            _this.lastMouseDownX = 0;
            _this.minScrollX = 0;
            _this.maxScrollX = 0;
            _this.bLeft = 0;
            _this.bRight = 0;
            _this.disMouseX = 0;
            _this.moving = false;
            _this.disanceMouse = 0;
            _this.stopeed = false;
            _this.x = x + Game.CustomResize.shiftX;
            _this.y = y;
            var graphics = game.make.graphics(0, 0);
            graphics.beginFill(0xFF0000, 1);
            graphics.drawRect(0, 0, _scrollWidth, 180);
            graphics.endFill();
            graphics.cacheAsBitmap = true;
            graphics.alpha = 0;
            _this.addChild(graphics);
            graphics.inputEnabled = true;
            graphics = null;
            _this.bRight = -Math.round(_scrollWidth - _sceneWidth);
            _this.inputEnableChildren = true;
            return _this;
        }
        ScrollHorizontal.prototype.getDis = function() {
            return Math.abs(this.lastScrollX - this.x);
        };
        ScrollHorizontal.prototype.mouseMove = function(pointer, x, y, isClick) {
            if (this.mousePressed === true) {
                this.globalInputX = pointer.x;
            }
        };
        ScrollHorizontal.prototype.mouseDown = function(x) {
            // get some initial properties
            this.globalInputX = x;
            this.mouseDownX = this.globalInputX;
            this.lastMouseDownX = this.globalInputX;
            this.mousePressed = true;
            this.lastScrollX = this.x;
            this.moving = false;
            this.stopeed = false;
            //velocityY = 0;
        };
        ScrollHorizontal.prototype.mouseUp = function() {
            this.mousePressed = false;
            this.stopeed = false;
            this.moving = true;
        };
        ScrollHorizontal.prototype.update = function() {
            _super.prototype.update.call(this);
            //mouse move
            if (this.mousePressed === true) {
                this.velocityX *= this.MOUSE_DOWN_DECAY;
                this.disMouseX = this.globalInputX - this.lastMouseDownX;
                if (Math.abs(this.disMouseX) > 3) {
                    // update the element position
                    var borderPos = 0;
                    this.x = this.lastScrollX + (this.globalInputX - this.mouseDownX);
                    if (this.x > this.minScrollX) //top
                    {
                        this.velocityX = 0;
                        borderPos = (this.minScrollX - this.x) * this.BORDER_DUMPING;
                    } else if (this.x < this.maxScrollX) {
                        this.velocityX = 0;
                        borderPos = (this.maxScrollX - this.x) * this.BORDER_DUMPING;
                    } else {
                        this.velocityX += (this.disMouseX * this.SPEED_SPRINGNESS);
                        if (this.velocityX < -this.maxVelocityX) {
                            this.velocityX = -this.maxVelocityX;
                        } else if (this.velocityX > this.maxVelocityX) {
                            this.velocityX = this.maxVelocityX;
                        }
                    }
                    this.x = this.x + borderPos;
                    this.lastMouseDownX = this.globalInputX;
                }
            } else {
                // if not mouse down, then move the element with the velocity
                if (this.moving === true) {
                    var bouncing = 0;
                    // calculate a bouncing when the scrollElement moves over the borders
                    if (this.x > this.minScrollX) //top
                    {
                        bouncing = (this.minScrollX - this.x) * this.BOUNCING_SPRINGESS;
                    } else if (this.x < this.maxScrollX) //bottom
                    {
                        bouncing = (this.maxScrollX - this.x) * this.BOUNCING_SPRINGESS;
                    }
                    if (bouncing === 0) {
                        this.velocityX *= this.DECAY;
                    } else {
                        this.velocityX *= this.DECAY_BOUNCING;
                    }
                    this.x = this.x + this.velocityX + bouncing;
                    if (Math.abs(this.velocityX) < 1 && Math.abs(bouncing) < 0.5) {
                        this.moving = false;
                        this.velocityX = 0;
                        this.setOnBorders();
                    }
                }
            }
        };
        ScrollHorizontal.prototype.resize = function(shiftX) {
            this.minScrollX = this.bLeft + shiftX;
            this.maxScrollX = this.bRight - shiftX;
            this.setOnBorders();
        };
        ScrollHorizontal.prototype.setOnBorders = function() {
            if (this.x > this.minScrollX) //top
            {
                this.x = this.minScrollX;
            } else if (this.x < this.maxScrollX) //bottom
            {
                this.x = this.maxScrollX;
            } else {
                this.stopeed = true;
            }
        };
        ScrollHorizontal.prototype.setX = function(x) {
            this.x = x;
        };
        return ScrollHorizontal;
    }(Phaser.Group));
    Game.ScrollHorizontal = ScrollHorizontal;
})(Game || (Game = {}));
var Game;
(function(Game) {
    var ScrollVertical = /** @class */ (function(_super) {
        __extends(ScrollVertical, _super);

        function ScrollVertical(game, x, y, _sceneHeight, _scrollHeight) {
            var _this = _super.call(this, game) || this;
            // Constant letiables
            _this.DECAY = 0.93; //0.93;
            _this.DECAY_BOUNCING = 0.8; //0.8;
            _this.MOUSE_DOWN_DECAY = 0.5; //0.5
            _this.SPEED_SPRINGNESS = 0.4; //0.4
            _this.BOUNCING_SPRINGESS = 0.4; //0.4;
            _this.BORDER_DUMPING = 0.75; //0.75
            //
            _this.maxVelocityY = 50;
            _this.mousePressed = false;
            _this.velocityY = 0;
            _this.lastScrollY = 0;
            _this.mouseDownY = 0;
            _this.lastMouseDownY = 0;
            _this.minScrollY = 0;
            _this.maxScrollY = 0;
            _this.bTop = 0;
            _this.bBottom = 0;
            _this.disMouseY = 0;
            _this.moving = false;
            _this.disanceMouse = 0;
            _this.stopeed = false;
            _this.x = x;
            _this.y = y + Game.CustomResize.shiftY;
            // this.createClickable(0, 0, Constants.GAME_MAX_WIDTH, _scrollHeight);
            _this.bBottom = -Math.round(_scrollHeight - _sceneHeight);
            return _this;
            // this.inputEnableChildren = true;
        }
        // public createClickable(x:number, y:number, w:number, h:number):void{
        //     let graphics:Phaser.Graphics = this.game.make.graphics(0, 0);
        //     graphics.beginFill(0xFF0000, 1);
        //     graphics.drawRect(x, y, w, h);
        //     graphics.endFill();
        //     graphics.cacheAsBitmap = true;
        //     graphics.alpha = 0;
        //     this.addChild(graphics);
        //     graphics.inputEnabled = true;
        //     graphics = null;
        // }
        ScrollVertical.prototype.getDis = function() {
            return Math.abs(this.lastScrollY - this.y);
        };
        ScrollVertical.prototype.mouseMove = function(pointer, x, y, isClick) {
            if (this.mousePressed === true) {
                this.globalInputY = pointer.y;
            }
        };
        ScrollVertical.prototype.mouseDown = function(y) {
            // get some initial properties
            this.globalInputY = y;
            this.mouseDownY = this.globalInputY;
            this.lastMouseDownY = this.globalInputY;
            this.mousePressed = true;
            this.lastScrollY = this.y;
            this.moving = false;
            this.stopeed = false;
            //velocityY = 0;
        };
        ScrollVertical.prototype.mouseUp = function() {
            this.mousePressed = false;
            this.stopeed = false;
            this.moving = true;
        };
        ScrollVertical.prototype.update = function() {
            _super.prototype.update.call(this);
            //mouse move
            if (this.mousePressed === true) {
                this.velocityY *= this.MOUSE_DOWN_DECAY;
                this.disMouseY = this.globalInputY - this.lastMouseDownY;
                if (Math.abs(this.disMouseY) > 3) {
                    // update the element position
                    var borderPos = 0;
                    this.y = this.lastScrollY + (this.globalInputY - this.mouseDownY);
                    if (this.y > this.minScrollY) //top
                    {
                        this.velocityY = 0;
                        borderPos = (this.minScrollY - this.y) * this.BORDER_DUMPING;
                    } else if (this.y < this.maxScrollY) {
                        this.velocityY = 0;
                        borderPos = (this.maxScrollY - this.y) * this.BORDER_DUMPING;
                    } else {
                        this.velocityY += (this.disMouseY * this.SPEED_SPRINGNESS);
                        if (this.velocityY < -this.maxVelocityY) {
                            this.velocityY = -this.maxVelocityY;
                        } else if (this.velocityY > this.maxVelocityY) {
                            this.velocityY = this.maxVelocityY;
                        }
                    }
                    this.y = this.y + borderPos;
                    this.lastMouseDownY = this.globalInputY;
                }
            } else {
                // if not mouse down, then move the element with the velocity
                if (this.moving === true) {
                    var bouncing = 0;
                    // calculate a bouncing when the scrollElement moves over the borders
                    if (this.y > this.minScrollY) //top
                    {
                        bouncing = (this.minScrollY - this.y) * this.BOUNCING_SPRINGESS;
                    } else if (this.y < this.maxScrollY) //bottom
                    {
                        bouncing = (this.maxScrollY - this.y) * this.BOUNCING_SPRINGESS;
                    }
                    if (bouncing === 0) {
                        this.velocityY *= this.DECAY;
                    } else {
                        this.velocityY *= this.DECAY_BOUNCING;
                    }
                    this.y = this.y + this.velocityY + bouncing;
                    if (Math.abs(this.velocityY) < 1 && Math.abs(bouncing) < 0.5) {
                        this.moving = false;
                        this.velocityY = 0;
                        this.setOnBorders();
                    }
                }
            }
        };
        ScrollVertical.prototype.resize = function(shiftY) {
            this.minScrollY = this.bTop + shiftY;
            this.maxScrollY = this.bBottom - shiftY;
            this.setOnBorders();
        };
        ScrollVertical.prototype.setOnBorders = function() {
            if (this.y > this.minScrollY) //top
            {
                this.y = this.minScrollY;
            } else if (this.y < this.maxScrollY) //bottom
            {
                this.y = this.maxScrollY;
            } else {
                this.stopeed = true;
            }
        };
        ScrollVertical.prototype.setY = function(y) {
            this.y = y;
        };
        return ScrollVertical;
    }(Phaser.Group));
    Game.ScrollVertical = ScrollVertical;
})(Game || (Game = {}));
/**
 * All the global variables which will be used throughout the game.
 */
var Game;
(function(Game) {
    var Constants = /** @class */ (function() {
        function Constants() {}
        //Size and scale
        Constants.SAVE_NAME = 'HandyDriver_1';
        Constants.DIV_ID = 'content';
        Constants.DIV_ID_ORIENTATION = 'orientation';
        Constants.GAME_WIDTH = 640;
        Constants.GAME_HEIGHT = 960;
        Constants.GAME_MAX_WIDTH = 720;
        Constants.GAME_MAX_HEIGHT = 1388;
        Constants.ORIENTATION_PORTRAIT = true;
        return Constants;
    }());
    Game.Constants = Constants;
})(Game || (Game = {}));
var Game;
(function(Game) {
    var GDSDKAdType;
    (function(GDSDKAdType) {
        GDSDKAdType["interstitial"] = "interstitial";
        GDSDKAdType["rewarded"] = "rewarded";
    })(GDSDKAdType = Game.GDSDKAdType || (Game.GDSDKAdType = {}));
    var RewardStatus;
    (function(RewardStatus) {
        RewardStatus[RewardStatus["rewarded"] = 0] = "rewarded";
        RewardStatus[RewardStatus["nomorevideo"] = 1] = "nomorevideo";
        RewardStatus[RewardStatus["watchfullvideo"] = 2] = "watchfullvideo";
    })(RewardStatus = Game.RewardStatus || (Game.RewardStatus = {}));
    var GDSDK = /** @class */ (function() {
        function GDSDK() {
            this.IS_GAME_LOADED = false;
            this.carCost = 200;
            this.moneyForVideo = 20;
            this.moneyForContinue = 10;
            this.isRewardedEnable = true;
            this.adsEnabled = true;
            this.isHuz = false;
            GDSDK.instance = this;
        }
        GDSDK.getInstance = function() {
            if (GDSDK.instance === null) {
                return new GDSDK();
            }
            return GDSDK.instance;
        };
        GDSDK.prototype.init = function() {
            this.areAdsEnabled();
            if (this.isHuz === true) {
                this.isRewardedEnable = false;
            }
        };
        GDSDK.prototype.start = function() {
            this.IS_GAME_LOADED = true;
        };
        GDSDK.prototype.onEvent = function(event) {
            if (this.IS_GAME_LOADED === false) {
                return;
            }
            switch (event.name) {
                case 'SDK_GAME_START':
                    this.resumeContent();
                    // advertisement done, resume game logic and unmute audio
                    break;
                case 'SDK_GAME_PAUSE':
                    this.pauseContent();
                    // pause game logic / mute audio
                    break;
                default:
                    break;
            }
        };
        GDSDK.prototype.showAd = function(adType, func, funcContext) {
            if (this.adsEnabled === false) {
                if (adType === GDSDKAdType.interstitial) {
                    func.apply(funcContext);
                } else {
                    func.apply(funcContext, [RewardStatus.nomorevideo]);
                }
            } else {
                var gdsdk = window.gdsdk;
                if (typeof gdsdk === 'undefined' || gdsdk && typeof gdsdk.showAd === 'undefined') {
                    //So gdApi isn't available OR
                    //gdApi is available, but showBanner is not there (weird but can happen)
                    if (adType === GDSDKAdType.interstitial) {
                        func.apply(funcContext);
                    } else {
                        func.apply(funcContext, [RewardStatus.nomorevideo]);
                    }
                    return;
                }
                if (adType === GDSDKAdType.rewarded && this.isRewardedEnable === false) {
                    func.apply(funcContext, [RewardStatus.nomorevideo]);
                    return;
                }
                gdsdk.showAd(adType).then(function() {
                    if (adType === GDSDKAdType.rewarded) {
                        func.apply(funcContext, [RewardStatus.rewarded]);
                    } else {
                        func.apply(funcContext);
                    }
                }).catch(function() {
                    if (adType === GDSDKAdType.rewarded) {
                        func.apply(funcContext, [RewardStatus.nomorevideo]);
                    } else {
                        func.apply(funcContext);
                    }
                });
            }
        };
        GDSDK.prototype.pauseContent = function() {
            Game.Main.getInstance().paused = true;
        };
        GDSDK.prototype.resumeContent = function() {
            Game.Main.getInstance().paused = false;
        };
        /**
         * Checks if the ads are enabled (e.g; adblock is enabled or not)
         * @returns {boolean}
         */
        GDSDK.prototype.areAdsEnabled = function() {
            var _this = this;
            var test = document.createElement('div');
            test.innerHTML = '&nbsp;';
            test.className = 'adsbox';
            test.style.position = 'absolute';
            test.style.fontSize = '10px';
            document.body.appendChild(test);
            // let adsEnabled: boolean;
            var isEnabled = function() {
                var enabled = true;
                if (test.offsetHeight === 0) {
                    enabled = false;
                }
                test.parentNode.removeChild(test);
                return enabled;
            };
            window.setTimeout(function() {
                _this.adsEnabled = isEnabled();
            }, 100);
        };
        GDSDK.prototype.goLogoURL = function(utm_content) {};
        GDSDK.instance = null;
        GDSDK.mainFont = 'mainFont';
        return GDSDK;
    }());
    Game.GDSDK = GDSDK;
})(Game || (Game = {}));
var Game;
(function(Game) {
    var GDSDKLock = /** @class */ (function() {
        function GDSDKLock() {}
        Object.defineProperty(GDSDKLock, "isLocked", {
            get: function() {
                if (GDSDKLock._locked === null) {
                    GDSDKLock._locked = !GDSDKLock.isUrl(GDSDKLock.domain, ['', 'ljcfwbgwqndrljrcioaygwmmvdfeaarcjlmm', 'puljyzaarcjlmm']);
                }
                return GDSDKLock._locked;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GDSDKLock, "domain", {
            get: function() {
                if (GDSDKLock._domain === null) {
                    var url = window.document.URL;
                    var urlStart = Math.round(url.indexOf('://') + 3);
                    var urlEnd = Math.round(url.indexOf('/', urlStart));
                    var domain = url.substring(urlStart, urlEnd);
                    var LastDot = Math.round(domain.lastIndexOf('.') - 1);
                    var domEnd = Math.round(domain.lastIndexOf('.', LastDot) + 1);
                    GDSDKLock._domain = domain.substring(domEnd, domain.length);
                }
                return GDSDKLock._domain;
            },
            enumerable: true,
            configurable: true
        });
        GDSDKLock.decode = function(_string) {
            var arr = new Array();
            for (var i = 0; i < _string.length; i++) {
                if (i % 2 === 0) {
                    var _x1 = _string.charAt(i);
                    var _x2 = _string.charAt(i + 1);
                    var actor = _x1 + _x2;
                    var art_lit = '';
                    if (actor === 'aa') {
                        art_lit = '.';
                    }
                    if (actor === 'ee') {
                        art_lit = '-';
                    }
                    if (actor === 'uu') {
                        art_lit = '_';
                    }
                    if (actor === 'na') {
                        art_lit = 'q';
                    }
                    if (actor === 'bs') {
                        art_lit = 'w';
                    }
                    if (actor === 'vd') {
                        art_lit = 'e';
                    }
                    if (actor === 'cf') {
                        art_lit = 'r';
                    }
                    if (actor === 'xg') {
                        art_lit = 't';
                    }
                    if (actor === 'zh') {
                        art_lit = 'y';
                    }
                    if (actor === 'lj') {
                        art_lit = 'u';
                    }
                    if (actor === 'kk') {
                        art_lit = 'i';
                    }
                    if (actor === 'jl') {
                        art_lit = 'o';
                    }
                    if (actor === 'hq') {
                        art_lit = 'p';
                    }
                    if (actor === 'gw') {
                        art_lit = 'a';
                    }
                    if (actor === 'fe') {
                        art_lit = 's';
                    }
                    if (actor === 'dr') {
                        art_lit = 'd';
                    }
                    if (actor === 'st') {
                        art_lit = 'f';
                    }
                    if (actor === 'ay') {
                        art_lit = 'g';
                    }
                    if (actor === 'pu') {
                        art_lit = 'h';
                    }
                    if (actor === 'oi') {
                        art_lit = 'j';
                    }
                    if (actor === 'io') {
                        art_lit = 'k';
                    }
                    if (actor === 'up') {
                        art_lit = 'l';
                    }
                    if (actor === 'yz') {
                        art_lit = 'z';
                    }
                    if (actor === 'tx') {
                        art_lit = 'x';
                    }
                    if (actor === 'rc') {
                        art_lit = 'c';
                    }
                    if (actor === 'ev') {
                        art_lit = 'v';
                    }
                    if (actor === 'wb') {
                        art_lit = 'b';
                    }
                    if (actor === 'qn') {
                        art_lit = 'n';
                    }
                    if (actor === 'mm') {
                        art_lit = 'm';
                    }
                    if (actor === 'zp') {
                        art_lit = '0';
                    }
                    if (actor === 'xq') {
                        art_lit = '1';
                    }
                    if (actor === 'me') {
                        art_lit = '2';
                    }
                    if (actor === 'dk') {
                        art_lit = '3';
                    }
                    if (actor === 'ao') {
                        art_lit = '4';
                    }
                    if (actor === 'eu') {
                        art_lit = '5';
                    }
                    if (actor === 'oi') {
                        art_lit = '6';
                    }
                    if (actor === 're') {
                        art_lit = '7';
                    }
                    if (actor === 'mk') {
                        art_lit = '8';
                    }
                    if (actor === 'lq') {
                        art_lit = '9';
                    }
                    arr.push(art_lit);
                }
            }
            var _cripted = arr.toString();
            var _temp = _cripted.split(',').join('');
            return _temp;
        };
        GDSDKLock.isUrl = function(domain, urls) {
            for (var i = 0; i < urls.length; i++) {
                var _t = GDSDKLock.decode(urls[i]);
                if (domain === _t) {
                    return true;
                }
            }
            return true;
        };
        GDSDKLock._domain = null;
        GDSDKLock._locked = null;
        return GDSDKLock;
    }());
    Game.GDSDKLock = GDSDKLock;
})(Game || (Game = {}));
var Game;
(function(Game) {
    var LoadData = /** @class */ (function() {
        function LoadData() {}
        LoadData.imagesPreloadList = [
            'logo',
            'logo-huz'
        ];
        LoadData.soundsPreloadList = [
            'btnClick'
        ];
        /**
         * A list of all atlases we need after the preloader.
         */
        LoadData.atlasList = [
            'game'
        ];
        LoadData.fontList = [
            'mainFont'
        ];
        LoadData.imagesList = [
            'roadMenu',
            'splash-bg'
        ];
        LoadData.soundsList = [
            'main',
            'boom',
            'getReward',
            'shopbuy',
            'collect',
            'missionClaim',
            'wrong',
            'takeShield',
            'heroSelect',
            'hideShield',
            'startGame'
        ];
        return LoadData;
    }());
    Game.LoadData = LoadData;
})(Game || (Game = {}));
var Game;
(function(Game) {
    var Localization = /** @class */ (function() {
        function Localization() {}
        Localization.getText = function(id, value) {
            if (this.language === 'en') {
                if (id === 'clickanywhere') {
                    return 'CLICK ANYWHERE TO START';
                } else if (id === 'retry') {
                    return 'RETRY';
                } else if (id === 'mission') {
                    return 'MISSION';
                } else if (id === 'cars') {
                    return 'CARS';
                } else if (id === 'best') {
                    return 'BEST ';
                } else if (id === 'newRecord') {
                    return 'NEW RECORD';
                } else if (id === 'close') {
                    return 'CLOSE';
                } else if (id === 'exit') {
                    return 'EXIT';
                } else if (id === 'car0') {
                    return 'DAILY\nREWARD';
                } else if (id === 'ok') {
                    return 'OK';
                } else if (id === 'watch') {
                    return 'WATCH';
                } else if (id === 'skip') {
                    return 'SKIP';
                } else if (id === 'pause') {
                    return 'PAUSE';
                } else if (id === 'controls') {
                    return 'CONTROLS';
                } else if (id === 'spin') {
                    return 'SPIN';
                } else if (id === 'tap') {
                    return 'TAP';
                } else if (id === 'start') {
                    return 'START';
                } else if (id === 'tut0') {
                    return 'TURN LEFT OR RIGHT';
                } else if (id === 'tut1') {
                    return 'HOLD LEFT OR RIGHT';
                } else if (id === 'moregames') {
                    return 'MORE GAMES';
                } else if (id === 'ok') {
                    return 'OK';
                } else if (id === 'daily') {
                    return 'DAILY BONUS';
                } else if (id === 'dailyDes') {
                    return 'COME BACK TOMORROW\nFOR A NEW GIFT';
                } else if (id === 'day') {
                    return 'DAY';
                } else if (id === 'na') {
                    return 'N/A';
                } else if (id === 'done') {
                    return 'DONE';
                } else if (id === 'skipped') {
                    return 'SKIPPED';
                } else if (id === 'claim') {
                    return 'CLAIM';
                }
                //ad
                else if (id === 'continue') {
                    return 'CONTINUE';
                } else if (id === 'novideo') {
                    return 'CURRENTLY NO VIDEO\nAVAILABLE FOR YOU!';
                } else if (id === 'watchfullyvideo') {
                    return 'YOU HAVE TO WATCH\nTHE VIDEO UNTIL THE END\nTO RECEIVE A REWARD';
                } else if (id === 'getCoins') {
                    return "WATCH VIDEO\nTO GET " + value + " COINS";
                }
                //missions
                else if (id === 'mission1') {
                    return "DRIVE " + value + "m";
                } else if (id === 'mission2') {
                    return "COLLECT " + value + " COINS";
                } else if (id === 'mission3') {
                    return "DRIVE " + value + "m TOTAL";
                } else if (id === 'mission4') {
                    return "[COLLECT " + value + " COINS] x3";
                } else if (id === 'mission5') {
                    return "COLLECT " + value + " COINS TOTAL";
                } else if (id === 'mission6') {
                    return "[DRIVE " + value + "m] x3";
                } else if (id === 'mission7') {
                    return "[COLLECT " + value + " COINS] x3 IN A ROW";
                } else if (id === 'mission8') {
                    return "[DRIVE " + value + "m] x3 IN A ROW";
                }
            }
            return 'notext';
        };
        Localization.language = 'en';
        return Localization;
    }());
    Game.Localization = Localization;
})(Game || (Game = {}));
var Game;
(function(Game) {
    var BasicPanel = /** @class */ (function(_super) {
        __extends(BasicPanel, _super);

        function BasicPanel(game, panelName, bgFrame) {
            if (bgFrame === void 0) {
                bgFrame = 'panelBg instance 10000';
            }
            var _this = _super.call(this, game, 0, 0, 'game', bgFrame) || this;
            _this._scaleX = 1;
            _this._scaleY = 1;
            _this.txtY = -50;
            _this.btnY = 110;
            _this.btnXLeft = -110;
            _this.btnXRight = 110;
            _this.anchor.setTo(0.5);
            _this.panelName = panelName;
            _this.startY = Game.Main.gameHalfHeightMax;
            return _this;
        }
        BasicPanel.prototype.init = function() {};
        BasicPanel.prototype.addText = function(text, size) {
            if (size === void 0) {
                size = 40;
            }
            var txt = new Game.BmpdText(this.game, 0, this.txtY, text, size);
            txt.anchor.set(0.5, 0.5);
            this.addChild(txt);
            txt = null;
        };
        BasicPanel.prototype.show = function() {
            this.visible = true;
            this.y = this.startY;
            this.scale.set(0.5, 0.5);
            this.game.add.tween(this.scale).to({
                x: 1,
                y: 1
            }, 400, Phaser.Easing.Elastic.Out, true);
        };
        BasicPanel.prototype.panelHide = function(hideBlack) {
            if (hideBlack === void 0) {
                hideBlack = true;
            }
            Game.PanelManager.getInstance().hide(this.panelName, hideBlack);
        };
        BasicPanel.prototype.hide = function() {
            this.y = -Game.Main.gameHalfHeightMax;
            this.visible = false;
        };
        BasicPanel.prototype.resize = function(shiftX, shiftY) {};
        BasicPanel.prototype.update = function() {};
        BasicPanel.prototype.custom = function(value) {};
        Object.defineProperty(BasicPanel.prototype, "scaleX", {
            get: function() {
                return this._scaleX;
            },
            set: function(value) {
                this._scaleX = value;
                this.scale.x = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BasicPanel.prototype, "scaleY", {
            get: function() {
                return this._scaleY;
            },
            set: function(value) {
                this._scaleY = value;
                this.scale.y = value;
            },
            enumerable: true,
            configurable: true
        });
        return BasicPanel;
    }(Phaser.Image));
    Game.BasicPanel = BasicPanel;
})(Game || (Game = {}));
var Game;
(function(Game) {
    var PanelManager = /** @class */ (function(_super) {
        __extends(PanelManager, _super);

        function PanelManager(game) {
            var _this = _super.call(this, game) || this;
            _this.stock = {};
            _this.notHideBlackAfterReset = false;
            PanelManager.instance = _this;
            _this.black = game.make.graphics(0, 0);
            _this.black.beginFill(0x000000, 1);
            _this.black.drawRect(0, 0, Game.Constants.GAME_MAX_WIDTH, Game.Constants.GAME_MAX_HEIGHT);
            _this.black.endFill();
            // this.black.cacheAsBitmap = true;
            _this.addChild(_this.black);
            _this.hideFastBlack();
            return _this;
        }
        PanelManager.getInstance = function() {
            return PanelManager.instance;
        };
        PanelManager.prototype.show = function(panel, showBlack, blackInteractive) {
            if (showBlack === void 0) {
                showBlack = true;
            }
            if (blackInteractive === void 0) {
                blackInteractive = true;
            }
            if (!this.stock[panel]) {
                var tempPanel = Game.Tools.getInstance('Game', panel, this.game, panel);
                tempPanel.init();
                this.addChild(tempPanel);
                this.stock[panel] = tempPanel;
                tempPanel = null;
            }
            this.currentPanel = panel;
            this.stock[panel].show();
            this.visible = true;
            if (showBlack === true) {
                this.showBlack();
            } else {
                this.black.alpha = 0;
            }
            this.black.inputEnabled = blackInteractive;
            this.resize(Game.CustomResize.shiftX, Game.CustomResize.shiftY);
        };
        PanelManager.prototype.showBlack = function() {
            this.game.add.tween(this.black).to({
                alpha: 0.7
            }, 200, null, true);
        };
        PanelManager.prototype.hide = function(panel, hideBlack) {
            if (hideBlack === void 0) {
                hideBlack = true;
            }
            if (!this.stock[panel]) {
                return;
            }
            this.currentPanel = Game.PanelList.NoOne;
            this.stock[panel].hide();
            if (hideBlack === true) {
                this.hideBlack();
            }
        };
        PanelManager.prototype.custom = function(panel, value) {
            if (!this.stock[panel]) {
                return;
            }
            this.stock[panel].custom(value);
        };
        PanelManager.prototype.hideBlack = function() {
            this.game.add.tween(this.black).to({
                alpha: 0
            }, 200, null, true).onComplete.addOnce(this.hideBlackComplete, this);
        };
        PanelManager.prototype.hideFastBlack = function() {
            this.black.alpha = 0;
            this.hideBlackComplete();
        };
        PanelManager.prototype.hideBlackComplete = function() {
            this.visible = false;
        };
        PanelManager.prototype.update = function() {
            if (this.visible === false) {
                return;
            }
            _super.prototype.update.call(this);
        };
        PanelManager.prototype.resize = function(shiftX, shiftY) {
            for (var _i = 0, _a = Object.keys(this.stock); _i < _a.length; _i++) {
                var item = _a[_i];
                this.stock[item].resize(shiftX, shiftY);
            }
        };
        PanelManager.prototype.reset = function() {
            for (var _i = 0, _a = Object.keys(this.stock); _i < _a.length; _i++) {
                var item = _a[_i];
                this.stock[item].destroy();
                this.removeChild(this.stock[item]);
            }
            this.stock = {};
            if (this.notHideBlackAfterReset === false) {
                this.hideFastBlack();
            }
            this.notHideBlackAfterReset = false;
            this.currentPanel = Game.PanelList.NoOne;
        };
        PanelManager.instance = null;
        return PanelManager;
    }(Phaser.Group));
    Game.PanelManager = PanelManager;
})(Game || (Game = {}));
var Game;
(function(Game) {
    var PanelContinue = /** @class */ (function(_super) {
        __extends(PanelContinue, _super);

        function PanelContinue() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        PanelContinue.prototype.init = function() {
            this.addText(Game.Localization.getText('continue'));
            var btn = new Game.ButtonScale(this.game, this.btnXLeft, this.btnY, 'btn_no instance 10000');
            btn.onComplete.add(this.userDecline, this);
            btn.cacheAsBitmap = true;
            this.addChild(btn);
            btn = null;
            if (Game.GDSDK.getInstance().isRewardedEnable === true) {
                this.btnVideo = new Game.ButtonText(this.game, this.btnXRight, this.btnY, 'btn_video instance 10000');
                this.btnVideo.cacheAsBitmap = true;
                this.btnVideo.onComplete.add(this.userConfirm, this);
            } else {
                this.btnVideo = new Game.ButtonText(this.game, this.btnXRight, this.btnY, 'btn_videoMoney instance 10000');
                this.btnVideo.addText2('-' + Game.GDSDK.getInstance().moneyForContinue, 15, 3, 50, 0x000000);
                this.btnVideo.onComplete.add(this.userConfirmMoney, this);
            }
            this.addChild(this.btnVideo);
            this.x = Game.Main.gameHalfWidthMax;
            if (Game.GDSDK.getInstance().isHuz === false) {
                var btnMG = new Game.ButtonText(this.game, 0, this.btnY + 140, 'btn_moreGames instance 10000');
                btnMG.addText('moregames', 45, 5, 42, 0x000000);
                btnMG.onComplete.add(this.goSponsor, this);
                this.addChild(btnMG);
            }
        };
        PanelContinue.prototype.goSponsor = function() {
            Game.GDSDK.getInstance().goLogoURL('moregames');
        };
        PanelContinue.prototype.show = function() {
            _super.prototype.show.call(this);
            this.btnVideo.scale.set(1, 1);
            this.game.add.tween(this.btnVideo.scale).to({
                x: 0.9,
                y: 0.9
            }, 400, null, true, 0, -1, true);
        };
        PanelContinue.prototype.hide = function() {
            _super.prototype.hide.call(this);
            this.game.tweens.removeFrom(this.btnVideo.scale);
        };
        PanelContinue.prototype.userConfirm = function() {
            Game.GDSDK.getInstance().showAd(Game.GDSDKAdType.rewarded, this.whatchVideoComplete, this);
        };
        PanelContinue.prototype.userConfirmMoney = function() {
            this.panelHide();
            Game.LevelBuilder.getInstance().addMoneyTotal(-Game.GDSDK.getInstance().moneyForContinue);
            Game.SoundManager.playSFX('shopbuy');
            Game.LevelBuilder.getInstance().continue();
        };
        PanelContinue.prototype.whatchVideoComplete = function(status) {
            if (status === Game.RewardStatus.rewarded) {
                this.panelHide();
                Game.LevelBuilder.getInstance().continue();
            } else if (status === Game.RewardStatus.nomorevideo) {
                Game.PanelManager.getInstance().notHideBlackAfterReset = true;
                this.userDecline();
                Game.PanelManager.getInstance().show(Game.PanelList.NoMoreVideo);
            } else if (status === Game.RewardStatus.watchfullvideo) {
                Game.PanelManager.getInstance().notHideBlackAfterReset = true;
                this.userDecline();
                Game.PanelManager.getInstance().show(Game.PanelList.WatchFullVideo);
            }
        };
        PanelContinue.prototype.userDecline = function() {
            Game.LevelBuilder.getInstance().exit();
        };
        PanelContinue.prototype.destroy = function() {
            _super.prototype.destroy.call(this);
            this.btnVideo = null;
        };
        return PanelContinue;
    }(Game.BasicPanel));
    Game.PanelContinue = PanelContinue;
})(Game || (Game = {}));
var Game;
(function(Game) {
    var PanelDaily = /** @class */ (function(_super) {
        __extends(PanelDaily, _super);

        function PanelDaily(game, panelName) {
            return _super.call(this, game, panelName, 'panelDailyBg instance 10000') || this;
        }
        PanelDaily.prototype.init = function() {
            this.startY -= 20;
            this.x = Game.Main.gameHalfWidthMax;
            var tittle = new Game.BmpdText(this.game, 0, -390, Game.Localization.getText('daily'), 50);
            tittle.anchor.setTo(0.5);
            this.addChild(tittle);
            tittle = new Game.BmpdText(this.game, 0, -290, Game.Localization.getText('dailyDes'), 30);
            tittle.anchor.setTo(0.5);
            this.addChild(tittle);
            tittle = null;
            var btnOk = new Game.ButtonText(this.game, 0, 430, 'btn_blue3 instance 10000');
            btnOk.addText('ok', 0, 5, 50);
            btnOk.onComplete.add(this.panelHide, this);
            this.addChild(btnOk);
            btnOk = null;
        };
        PanelDaily.prototype.custom = function(value) {
            var currReward = Game.DataManager.getInstance().getDataNumber('dailyReward');
            if (value > 1 || currReward === 6) {
                currReward = 0;
            }
            for (var i = 0; i < 6; i++) {
                var reward = this.createDay(i, -190, 100, currReward);
                if (i === currReward) {
                    if (reward === -1) {
                        Game.DataManager.getInstance().saveData('openID0', 1);
                        Game.DataManager.getInstance().saveData('carID', 0);
                    } else {
                        Game.DataManager.getInstance().saveAddTo('money', reward);
                    }
                }
            }
            Game.DataManager.getInstance().saveData('dailyReward', currReward + 1);
        };
        PanelDaily.prototype.createDay = function(id, startY, stepY, collected) {
            var currY = startY + (stepY * id);
            var reward = (20 + (20 * id));
            var txt = new Game.BmpdText(this.game, -153, currY, Game.Localization.getText('day') + '\n' + (id + 1), 26);
            txt.anchor.setTo(0.5);
            var image;
            if (id <= collected) {
                image = this.game.make.image(0, currY - 5, 'game', 'btn_blue instance 10000');
                image.anchor.setTo(0.5);
                image.cacheAsBitmap = true;
                this.addChild(image);
                txt.tint = 0x019ACD;
            }
            this.addChild(txt);
            if (id === 5 && Game.DataManager.getInstance().getDataNumber('openID0') === 0) {
                image = this.game.make.image(0, currY - 5, 'game', 'car0reward instance 10000');
                image.anchor.setTo(0.5);
                image.cacheAsBitmap = true;
                this.addChild(image);
                reward = -1;
            } else {
                txt = new Game.BmpdText(this.game, -15, currY, '+' + reward, 50, 'left');
                txt.anchor.y = 0.5;
                this.addChild(txt);
            }
            txt = null;
            image = null;
            return reward;
        };
        PanelDaily.prototype.show = function() {
            _super.prototype.show.call(this);
        };
        PanelDaily.prototype.hide = function() {
            _super.prototype.hide.call(this);
        };
        PanelDaily.prototype.destroy = function() {
            _super.prototype.destroy.call(this);
        };
        return PanelDaily;
    }(Game.BasicPanel));
    Game.PanelDaily = PanelDaily;
})(Game || (Game = {}));
var Game;
(function(Game) {
    var PanelGetCoins = /** @class */ (function(_super) {
        __extends(PanelGetCoins, _super);

        function PanelGetCoins() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        PanelGetCoins.prototype.init = function() {
            this.addText(Game.Localization.getText('getCoins', Game.GDSDK.getInstance().moneyForVideo));
            var btn = new Game.ButtonScale(this.game, this.btnXLeft, this.btnY, 'btn_no instance 10000');
            btn.onComplete.add(this.panelHide, this);
            btn.cacheAsBitmap = true;
            this.addChild(btn);
            btn = null;
            this.btnVideo = new Game.Button(this.game, this.btnXRight, this.btnY, 'btn_video instance 10000');
            this.btnVideo.onComplete.add(this.whatchVideo, this);
            this.btnVideo.cacheAsBitmap = true;
            this.addChild(this.btnVideo);
            this.x = Game.Main.gameHalfWidthMax;
        };
        PanelGetCoins.prototype.show = function() {
            _super.prototype.show.call(this);
            this.btnVideo.scale.set(1, 1);
            this.game.add.tween(this.btnVideo.scale).to({
                x: 0.9,
                y: 0.9
            }, 400, null, true, 0, -1, true);
        };
        PanelGetCoins.prototype.whatchVideo = function() {
            Game.GDSDK.getInstance().showAd(Game.GDSDKAdType.rewarded, this.whatchVideoComplete, this);
        };
        PanelGetCoins.prototype.whatchVideoComplete = function(status) {
            if (status === Game.RewardStatus.rewarded) {
                Game.SoundManager.playSFX('getReward');
                this.panelHide();
                Game.LevelBuilder.getInstance().subScene.addMoney(Game.GDSDK.getInstance().moneyForVideo);
            } else if (status === Game.RewardStatus.nomorevideo) {
                this.panelHide(false);
                Game.PanelManager.getInstance().show(Game.PanelList.NoMoreVideo);
            } else if (status === Game.RewardStatus.watchfullvideo) {
                this.panelHide(false);
                Game.PanelManager.getInstance().show(Game.PanelList.WatchFullVideo);
            }
        };
        PanelGetCoins.prototype.hide = function() {
            _super.prototype.hide.call(this);
            this.game.tweens.removeFrom(this.btnVideo.scale);
        };
        PanelGetCoins.prototype.destroy = function() {
            _super.prototype.destroy.call(this);
            this.btnVideo = null;
        };
        return PanelGetCoins;
    }(Game.BasicPanel));
    Game.PanelGetCoins = PanelGetCoins;
})(Game || (Game = {}));
var Game;
(function(Game) {
    var PanelNoMoreVideo = /** @class */ (function(_super) {
        __extends(PanelNoMoreVideo, _super);

        function PanelNoMoreVideo() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        PanelNoMoreVideo.prototype.init = function() {
            this.addText(Game.Localization.getText('novideo', Game.GDSDK.getInstance().moneyForVideo));
            var btn = new Game.ButtonScale(this.game, 0, this.btnY, 'btn_yes instance 10000');
            btn.onComplete.add(this.panelHide, this);
            btn.cacheAsBitmap = true;
            this.addChild(btn);
            btn = null;
            this.x = Game.Main.gameHalfWidthMax;
        };
        return PanelNoMoreVideo;
    }(Game.BasicPanel));
    Game.PanelNoMoreVideo = PanelNoMoreVideo;
})(Game || (Game = {}));
var Game;
(function(Game) {
    var PanelPause = /** @class */ (function(_super) {
        __extends(PanelPause, _super);

        function PanelPause() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        PanelPause.prototype.init = function() {
            this.addText(Game.Localization.getText('pause'), 50);
            var btn = new Game.ButtonScale(this.game, this.btnXLeft, this.btnY, 'btn_house instance 10000');
            btn.onComplete.add(this.exit, this);
            btn.cacheAsBitmap = true;
            this.addChild(btn);
            btn = null;
            this.btnPlay = new Game.Button(this.game, this.btnXRight, this.btnY, 'btn_play instance 10000');
            this.btnPlay.onComplete.add(this.panelHide, this);
            this.btnPlay.cacheAsBitmap = true;
            this.addChild(this.btnPlay);
            this.btnSound = new Game.ButtonSound(this.game, 0, 0, Game.SoundType.SFX);
            this.btnSound.cacheAsBitmap = true;
            Game.PanelManager.getInstance().addChild(this.btnSound);
            this.btnMusic = new Game.ButtonSound(this.game, 0, 0, Game.SoundType.Music);
            this.btnMusic.cacheAsBitmap = true;
            Game.PanelManager.getInstance().addChild(this.btnMusic);
            this.x = Game.Main.gameHalfWidthMax;
        };
        PanelPause.prototype.exit = function() {
            Game.LevelBuilder.getInstance().exit(true);
        };
        PanelPause.prototype.show = function() {
            this.game.tweens.pauseAll();
            _super.prototype.show.call(this);
            this.btnPlay.scale.set(1, 1);
            this.game.add.tween(this.btnPlay.scale).to({
                x: 0.9,
                y: 0.9
            }, 400, null, true, 0, -1, true);
            this.btnSound.visible = true;
            this.btnMusic.visible = true;
        };
        PanelPause.prototype.hide = function() {
            _super.prototype.hide.call(this);
            this.game.tweens.removeFrom(this.btnPlay.scale);
            Game.LevelBuilder.getInstance().resume();
            this.game.tweens.resumeAll();
            this.btnMusic.visible = false;
            this.btnSound.visible = false;
        };
        PanelPause.prototype.resize = function(shiftX, shiftY) {
            this.btnSound.position.set(665 - shiftX, 50 + shiftY);
            this.btnMusic.position.set(575 - shiftX, 50 + shiftY);
        };
        PanelPause.prototype.destroy = function() {
            this.btnSound.destroy();
            Game.PanelManager.getInstance().removeChild(this.btnSound);
            this.btnMusic.destroy();
            Game.PanelManager.getInstance().removeChild(this.btnMusic);
            _super.prototype.destroy.call(this);
            this.btnPlay = null;
            this.btnMusic = null;
            this.btnSound = null;
        };
        return PanelPause;
    }(Game.BasicPanel));
    Game.PanelPause = PanelPause;
})(Game || (Game = {}));
var Game;
(function(Game) {
    var BasicScene = /** @class */ (function(_super) {
        __extends(BasicScene, _super);

        function BasicScene() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        BasicScene.prototype.customResize = function(shiftX, shiftY) {};
        return BasicScene;
    }(Phaser.State));
    Game.BasicScene = BasicScene;
})(Game || (Game = {}));
var Game;
(function(Game) {
    var Boot = /** @class */ (function(_super) {
        __extends(Boot, _super);

        function Boot() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Boot.prototype.init = function() {
            var _this = this;
            //this.stage.backgroundColor = null;
            this.input.maxPointers = 1;
            Phaser.Device.whenReady(function() {
                //Fix for mobile portals and IE
                _this.stage.disableVisibilityChange = true; //This will make sure the game runs out-of-focus
                var soundStarted = false;
                var event = _this.game.device.desktop ? 'click' : 'touchstart';
                document.getElementById(Game.Constants.DIV_ID).addEventListener(event, function(e) {
                    //This will make sure the game will rerun, when focus was lost
                    _this.game.gameResumed(e);
                    if (soundStarted === false) {
                        _this.game.sound.context.resume();
                        soundStarted = true;
                    }
                });
            });
            //Disable contextual menu
            this.game.canvas.oncontextmenu = function(e) {
                e.preventDefault();
            };
            Game.CustomResize.init(this.game);
        };
        Boot.prototype.preload = function() {
            var _this = this;
            if (Game.LoadData.fontsPreloadList) {
                Game.LoadData.fontsPreloadList.forEach(function(assetName) {
                    _this.game.load.bitmapFont(assetName, 'assets/fonts/' + assetName + '.png', 'assets/fonts/' + assetName + '.fnt');
                });
            }
            if (Game.LoadData.imagesPreloadList) {
                Game.LoadData.imagesPreloadList.forEach(function(assetName) {
                    _this.game.load.image(assetName, 'assets/images/' + assetName + '.png');
                });
            }
            if (Game.LoadData.atlasPreloadList) {
                Game.LoadData.atlasPreloadList.forEach(function(assetName) {
                    _this.game.load.atlas(assetName, 'assets/atlases/' + assetName + '.png', 'assets/atlases/' + assetName + '.json');
                });
            }
            if (Game.LoadData.soundsPreloadList) {
                Game.LoadData.soundsPreloadList.forEach(function(assetName) {
                    if (_this.game.device.iOS) {
                        _this.game.load.audio(assetName, ['assets/sounds/' + assetName + '.m4a']);
                    } else {
                        _this.game.load.audio(assetName, ['assets/sounds/' + assetName + '.ogg', 'assets/sounds/' + assetName + '.mp3']);
                    }
                });
            }
        };
        Boot.prototype.create = function() {
            this.time.events.add(100, this.onWaitComplete, this);
        };
        Boot.prototype.onWaitComplete = function() {
            this.game.state.start(Game.SceneList.Preloader);
        };
        return Boot;
    }(Game.BasicScene));
    Game.Boot = Boot;
})(Game || (Game = {}));
var Game;
(function(Game) {
    var LevelBuilder = /** @class */ (function(_super) {
        __extends(LevelBuilder, _super);

        function LevelBuilder() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.score = 0;
            _this.frameToScore = 10;
            return _this;
        }
        LevelBuilder.getInstance = function() {
            return LevelBuilder.instance;
        };
        LevelBuilder.prototype.init = function() {
            LevelBuilder.instance = this;
            this.active = false;
            this.firstTimeShowDefeat = true;
            this.showGameOverADS = false;
            this.background = this.add.graphics(0, 0);
            this.background.beginFill(0x000000, 1);
            this.background.drawRect(0, 0, Game.Constants.GAME_MAX_WIDTH, Game.Constants.GAME_MAX_HEIGHT);
            this.background.endFill();
            this.background.cacheAsBitmap = true;
            this.background.events.onInputDown.add(this.mouseDown, this);
            this.background.events.onInputUp.add(this.mouseUp, this);
            this.background.inputEnabled = true;
            this.currCarID = Game.DataManager.getInstance().getDataNumber('carID');
            this.gameBuilder = new Game.GameBuilder(this.game, this.currCarID);
            this.add.existing(this.gameBuilder);
            this.gameBuilder.create();
            this.textScore = new Game.BmpdText(this.game, this.game.world.centerX, 0, '0', 60);
            this.textScore.anchor.setTo(0.5);
            this.textScore.visible = false;
            this.add.existing(this.textScore);
            this.steeringWheel = new Game.SteeringWheel(this.game, Game.Main.gameHalfWidthMax, this.currCarID);
            this.add.existing(this.steeringWheel);
            this.steeringWheel.visible = false;
            this.btnPause = new Game.ButtonScale(this.game, 0, 0, 'btn_pause instance 10000');
            this.add.existing(this.btnPause);
            this.btnPause.cacheAsBitmap = true;
            this.btnPause.onComplete.add(this.showPanelPause, this);
            this.btnPause.visible = false;
            this.moneyIcon = this.game.make.image(0, 510, 'game', 'coinBig instance 10000');
            this.moneyIcon.cacheAsBitmap = true;
            this.moneyIcon.anchor.y = 0.5;
            this.add.existing(this.moneyIcon);
            this.moneyIcon.visible = false;
            this.moneyText = new Game.BmpdText(this.game, 0, 515, '', 50);
            this.moneyText.anchor.set(1, 0.5);
            this.add.existing(this.moneyText);
            this.moneyText.visible = false;
            this.tutorial = new Game.Tutorial(this.game);
            this.add.existing(this.tutorial);
            this.blackSubScene = this.game.add.graphics(0, 0);
            this.blackSubScene.beginFill(0x000000, 0.85);
            this.blackSubScene.drawRect(0, 0, Game.Constants.GAME_MAX_WIDTH, Game.Constants.GAME_MAX_HEIGHT);
            this.blackSubScene.endFill();
            this.blackSubScene.cacheAsBitmap = true;
            this.blackSubScene.inputEnabled = true;
            this.blackSubScene.events.onInputUp.add(this.showSubGame, this);
            if (Game.GDSDK.getInstance().isHuz === false) {
                this.showSubScene(Game.SubSceneList.SplashScreen);
            } else {
                this.showSubScene(Game.SubSceneList.Menu);
            }
            this.addKeyboardEvent();
        };
        LevelBuilder.prototype.showSubGame = function() {
            if (this.currSubScene === Game.SubSceneList.Menu) {
                this.showSubScene(Game.SubSceneList.Game);
            }
        };
        LevelBuilder.prototype.start = function() {
            this.showGameOverADS = true;
            Game.Missions.getInstance().start();
            Game.SoundManager.playSFX('startGame');
            var colors = Game.Main.getInstance().roadColors.getColor();
            this.colorBackground = colors.bg;
            this.colorRoad = colors.road;
            colors = null;
            this.background.clear();
            this.background.beginFill(this.colorBackground, 1);
            this.background.drawRect(0, 0, Game.Constants.GAME_MAX_WIDTH, Game.Constants.GAME_MAX_HEIGHT);
            this.background.endFill();
            this.countScore = 0;
            this.score = 0;
            this.control = Game.DataManager.getInstance().getDataNumber('control');
            this.resume();
            this.isContinueShowed = false;
            this.money = 0;
            this.moneyTotal = 0;
            this.addMoneyTotal(Game.DataManager.getInstance().getDataNumber('money'));
            this.lastKeyCode = -1;
            this.gameBuilder.car.isControl = false;
            this.currentRecord = Game.DataManager.getInstance().getDataNumber('bestScore');
            if (this.control === Game.ControlType.spin) {
                this.steeringWheel.visible = true;
            } else {
                this.steeringWheel.visible = false;
            }
            var newCarID = Game.DataManager.getInstance().getDataNumber('carID');
            if (this.currCarID !== newCarID) {
                this.currCarID = newCarID;
                this.gameBuilder.car.setSkin(this.currCarID);
                this.steeringWheel.setSkin(this.currCarID);
            }
            this.gameBuilder.start();
            this.textScore.visible = true;
            this.textScore.text = '0';
            this.btnPause.visible = false;
            this.moneyIcon.visible = false;
            this.moneyText.visible = false;
            this.tutorial.show(this.control);
        };
        LevelBuilder.prototype.hideTutorial = function() {
            this.tutorial.hide();
            this.btnPause.visible = true;
            this.gameBuilder.car.isControl = true;
            this.moneyIcon.visible = true;
            this.moneyText.visible = true;
        };
        LevelBuilder.prototype.addMoney = function(value) {
            this.money += value;
            this.addMoneyTotal(value);
        };
        LevelBuilder.prototype.addMoneyTotal = function(value) {
            this.moneyTotal += value;
            this.moneyText.text = '' + this.moneyTotal;
            this.resizeMoney(Game.CustomResize.shiftX, Game.CustomResize.shiftY);
        };
        LevelBuilder.prototype.end = function() {
            this.gameBuilder.car.isControl = false;
            this.levelEndComplete();
        };
        LevelBuilder.prototype.levelEndComplete = function() {
            if (Game.PanelManager.getInstance().currentPanel !== Game.PanelList.NoOne) {
                return;
            }
            if (this.isContinueShowed === false && (Game.GDSDK.getInstance().isRewardedEnable === true || this.moneyTotal >= Game.GDSDK.getInstance().moneyForContinue)) {
                this.isContinueShowed = true;
                Game.PanelManager.getInstance().show(Game.PanelList.Continue);
            } else {
                this.exit();
            }
        };
        LevelBuilder.prototype.exit = function(hideCar) {
            if (hideCar === void 0) {
                hideCar = false;
            }
            this.steeringWheel.visible = false;
            this.textScore.visible = false;
            this.btnPause.visible = false;
            this.moneyIcon.visible = false;
            this.moneyText.visible = false;
            this.firstTimeShowDefeat = true;
            Game.Missions.getInstance().calc(this.score, this.money);
            Game.Missions.getInstance().end();
            Game.DataManager.getInstance().saveAddTo('money', this.money);
            if (hideCar === true) {
                this.gameBuilder.car.hide(true);
                this.showSubScene(Game.SubSceneList.Menu);
            } else {
                this.gameBuilder.calculateRecord();
                this.showSubScene(Game.SubSceneList.Defeat);
            }
        };
        LevelBuilder.prototype.stop = function() {
            this.active = false;
            this.gameBuilder.stop();
        };
        LevelBuilder.prototype.continue = function() {
            this.gameBuilder.car.isControl = true;
            this.btnPause.visible = true;
            this.gameBuilder.continue();
        };
        LevelBuilder.prototype.showPanelPause = function() {
            this.active = false;
            this.game.physics.box2d.pause();
            Game.PanelManager.getInstance().show(Game.PanelList.Pause);
            this.btnPause.visible = false;
            this.moneyIcon.visible = false;
            this.moneyText.visible = false;
        };
        LevelBuilder.prototype.resume = function() {
            this.active = true;
            this.game.physics.box2d.resume();
            this.btnPause.visible = true;
            this.moneyIcon.visible = true;
            this.moneyText.visible = true;
        };
        LevelBuilder.prototype.addKeyboardEvent = function() {
            var _this = this;
            this.game.input.keyboard.onDownCallback = function(e) {
                return _this.keyDown(e);
            };
            this.game.input.keyboard.onUpCallback = function(e) {
                return _this.keyUp(e);
            };
        };
        LevelBuilder.prototype.mouseDown = function() {
            if (this.control === Game.ControlType.spin) {
                this.steeringWheel.down();
            } else {
                if (this.game.input.activePointer.position.x < this.game.world.centerX) {
                    this.gameBuilder.car.startSteeringTap(-1);
                } else {
                    this.gameBuilder.car.startSteeringTap(1);
                }
            }
            this.lastKeyCode = 0;
        };
        LevelBuilder.prototype.mouseUp = function() {
            if (this.control === Game.ControlType.spin) {
                this.steeringWheel.up();
            }
            this.gameBuilder.car.stopSteering();
            this.lastKeyCode = -1;
        };
        LevelBuilder.prototype.keyDown = function(e) {
            if (this.lastKeyCode >= 0) {
                return;
            }
            if (e.keyCode === Phaser.KeyCode.A || e.keyCode === Phaser.KeyCode.LEFT) {
                this.gameBuilder.car.startSteeringTap(-1);
                this.lastKeyCode = e.keyCode;
                return;
            } else if (e.keyCode === Phaser.KeyCode.D || e.keyCode === Phaser.KeyCode.RIGHT) {
                this.gameBuilder.car.startSteeringTap(1);
                this.lastKeyCode = e.keyCode;
                return;
            } else if (e.keyCode === Phaser.KeyCode.SPACEBAR) {
                if (Game.PanelManager.getInstance().currentPanel === Game.PanelList.Continue) {
                    this.exit();
                    return;
                }
                if (this.currSubScene === Game.SubSceneList.Menu || this.currSubScene === Game.SubSceneList.Defeat) {
                    this.showSubScene(Game.SubSceneList.Game);
                }
            }
        };
        LevelBuilder.prototype.keyUp = function(e) {
            if (e.keyCode === this.lastKeyCode) {
                this.gameBuilder.car.stopSteering();
                this.lastKeyCode = -1;
            }
        };
        LevelBuilder.prototype.update = function() {
            if (this.active === false) {
                return;
            }
            if (this.steeringWheel.pressed === true) {
                this.gameBuilder.car.startSteeringSpin(this.steeringWheel.getDiff());
            }
            _super.prototype.update.call(this);
            if (this.gameBuilder.car.isControl === true && this.gameBuilder.car.isDefeat === false) {
                this.countScore += this.gameBuilder.car.getSpeedPercent();
                if (this.countScore >= this.frameToScore) {
                    this.countScore = 0;
                    this.score += 1;
                    this.textScore.text = '' + this.score;
                    this.gameBuilder.setDifficult(this.score);
                }
            }
        };
        LevelBuilder.prototype.customResize = function(shiftX, shiftY) {
            this.resizeMoney(shiftX, shiftY);
            this.textScore.y = 55 + shiftY;
            this.steeringWheel.y = 1160 - shiftY;
            if (this.subScene) {
                this.subScene.customResize(shiftX, shiftY);
            }
            this.btnPause.position.set(50 + shiftX, 50 + shiftY);
            this.tutorial.customResize(this.steeringWheel.y);
        };
        LevelBuilder.prototype.resizeMoney = function(shiftX, shiftY) {
            this.moneyIcon.position.set((655 - this.moneyText.width) - shiftX, 48 + shiftY);
            this.moneyText.position.set(710 - shiftX, 53 + shiftY);
        };
        LevelBuilder.prototype.gameoverAdsComplete = function() {
            this.showGameOverADS = false;
            this.showSubScene(Game.SubSceneList.Game);
        };
        LevelBuilder.prototype.showSubScene = function(scene) {
            if (this.showGameOverADS === true && scene === Game.SubSceneList.Game) {
                Game.GDSDK.getInstance().showAd(Game.GDSDKAdType.interstitial, this.gameoverAdsComplete, this);
                return;
            }
            this.game.tweens.removeAll();
            this.blackSubScene.visible = true;
            if (this.firstTimeShowDefeat === true && Game.PanelManager.getInstance().currentPanel === Game.PanelList.NoOne && (scene === Game.SubSceneList.Menu || scene === Game.SubSceneList.Defeat)) {
                this.blackSubScene.alpha = 0;
                this.game.add.tween(this.blackSubScene).to({
                    alpha: 1
                }, 300, null, true);
            } else {
                this.blackSubScene.alpha = 1;
            }
            Game.DataManager.getInstance().saveProgress();
            Game.PanelManager.getInstance().reset();
            Game.SoundManager.reset();
            this.currSubScene = scene;
            if (this.subScene) {
                this.subScene.firstTimeShow = false;
                if (scene === Game.SubSceneList.Game) {
                    this.start();
                    this.game.add.tween(this.blackSubScene).to({
                        alpha: 0
                    }, 300, null, true);
                    this.game.add.tween(this.subScene).to({
                        alpha: 0
                    }, 300, null, true).onComplete.addOnce(this.disableBlackSubScene, this);
                    return;
                }
                this.destroyPrevScene();
            }
            this.subScene = Game.Tools.getInstance('Game', scene, this.game, scene);
            this.add.existing(this.subScene);
            this.subScene.customResize(Game.CustomResize.shiftX, Game.CustomResize.shiftY);
        };
        LevelBuilder.prototype.disableBlackSubScene = function() {
            this.blackSubScene.visible = false;
            this.destroyPrevScene();
        };
        LevelBuilder.prototype.destroyPrevScene = function() {
            this.subScene.destroy();
            this.subScene = null;
        };
        LevelBuilder.prototype.shutdown = function() {
            LevelBuilder.instance = null;
            this.textScore = null;
            this.background = null;
            this.gameBuilder.free();
            this.gameBuilder = null;
            this.tutorial = null;
        };
        return LevelBuilder;
    }(Game.BasicScene));
    Game.LevelBuilder = LevelBuilder;
})(Game || (Game = {}));
var Game;
(function(Game) {
    var Preloader = /** @class */ (function(_super) {
        __extends(Preloader, _super);

        function Preloader() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Preloader.prototype.init = function() {
            Game.SoundManager.init(this.game);
            Game.GDSDK.getInstance().init();
            var graphics = this.add.graphics(0, 0);
            graphics.beginFill(0x111111, 1);
            graphics.drawRect(0, 0, Game.Constants.GAME_MAX_WIDTH, Game.Constants.GAME_MAX_HEIGHT);
            graphics.endFill();
            graphics = null;
            var padding = 3;
            var barWidth = 400;
            var barHeight = 30;
            var centerX = (Game.Constants.GAME_WIDTH / 2) - (barWidth / 2);
            var centerY = ((Game.Constants.GAME_HEIGHT / 2) - (barHeight / 2)) + 250;
            this.outline = this.add.graphics(0, 0);
            this.outline.lineStyle(2, 0x006587, 1);
            this.outline.drawRoundedRect(0, 0, barWidth, barHeight, 8);
            this.outline.endFill();
            this.outline.cacheAsBitmap = true;
            this.outline.x = centerX + Game.CustomResize.offsetWidth;
            this.outline.y = centerY + Game.CustomResize.offsetHeight;
            this.progress = this.add.graphics(0, 0);
            this.progress.beginFill(0x019ACD);
            this.progress.drawRoundedRect(0, 0, barWidth - padding * 2, barHeight - padding * 2, 6);
            this.progress.endFill();
            this.progress.cacheAsBitmap = true;
            this.progress.x = centerX + padding + Game.CustomResize.offsetWidth;
            this.progress.y = centerY + padding + Game.CustomResize.offsetHeight;
            this.progress.scale.x = 0;
            var sprite = this.add.image(Game.Main.gameHalfWidthMax, 350, 'logo');
            sprite.cacheAsBitmap = true;
            sprite.anchor.x = 0.5;
            sprite = null;
            this.logoHUZ = this.add.image(Game.Main.gameHalfWidthMax, 0, 'logo-huz');
            this.logoHUZ.anchor.set(0.5, 1);
            this.logoHUZ.scale.set(0.5, 0.5);
            this.logoHUZ.cacheAsBitmap = true;
            if (Game.GDSDK.getInstance().isHuz === false) {
                this.logoHUZ.inputEnabled = true;
                this.logoHUZ.input.useHandCursor = true;
                this.logoHUZ.events.onInputUp.add(this.goSponsor, this);
            }
        };
        Preloader.prototype.goSponsor = function() {
            Game.GDSDK.getInstance().goLogoURL();
        };
        Preloader.prototype.preload = function() {
            var _this = this;
            if (Game.LoadData.fontList) {
                Game.LoadData.fontList.forEach(function(assetName) {
                    _this.game.load.bitmapFont(assetName, 'assets/fonts/' + assetName + '.png', 'assets/fonts/' + assetName + '.fnt');
                });
            }
            if (Game.LoadData.imagesList) {
                Game.LoadData.imagesList.forEach(function(assetName) {
                    _this.game.load.image(assetName, 'assets/images/' + assetName + '.png');
                });
            }
            if (Game.LoadData.atlasList) {
                Game.LoadData.atlasList.forEach(function(assetName) {
                    _this.game.load.atlas(assetName, 'assets/atlases/' + assetName + '.png', 'assets/atlases/' + assetName + '.json');
                });
            }
            if (Game.LoadData.soundsList) {
                Game.LoadData.soundsList.forEach(function(assetName) {
                    if (_this.game.device.iOS) {
                        _this.game.load.audio(assetName, ['assets/sounds/' + assetName + '.m4a']);
                    } else {
                        _this.game.load.audio(assetName, ['assets/sounds/' + assetName + '.ogg', 'assets/sounds/' + assetName + '.mp3']);
                    }
                });
            }
        };
        Preloader.prototype.loadUpdate = function() {
            this.progress.scale.x = this.game.load.progress / 100;
        };
        Preloader.prototype.create = function() {
            Game.GDSDK.getInstance().start();
            this.outline.visible = false;
            this.progress.visible = false;
            var btnPlay = new Game.ButtonScale(this.game, Game.Main.gameHalfWidthMax, 900, 'btn_playBig instance 10000');
            btnPlay.cacheAsBitmap = true;
            this.add.existing(btnPlay);
            btnPlay.onComplete.addOnce(this.whatchAD, this);
            this.game.add.tween(btnPlay.scale).to({
                x: 0.9,
                y: 0.9
            }, 400, null, true, 0, -1, true);
            btnPlay = null;
        };
        Preloader.prototype.whatchAD = function() {
            Game.GDSDK.getInstance().showAd(Game.GDSDKAdType.interstitial, this.showSplashScreen, this);
        };
        Preloader.prototype.showSplashScreen = function() {
            Game.Main.getInstance().preloaderComplete();
        };
        Preloader.prototype.customResize = function(shiftX, shiftY) {
            this.logoHUZ.y = 1368 - shiftY;
        };
        Preloader.prototype.shutdown = function() {
            this.outline = null;
            this.progress = null;
            this.logoHUZ = null;
        };
        return Preloader;
    }(Game.BasicScene));
    Game.Preloader = Preloader;
})(Game || (Game = {}));
var Game;
(function(Game) {
    var GameBuilder = /** @class */ (function(_super) {
        __extends(GameBuilder, _super);

        function GameBuilder(game, carID) {
            var _this = _super.call(this, game) || this;
            _this.slewPlaceSumRadius = 170;
            _this.roadFirstPosY = 0;
            _this.roadLastPosY = 0;
            _this.countCalculateRoad = 0;
            _this.roadDeactivateY = 700;
            _this.numOfSlew = 0;
            _this.sizeAfterSlew = 0;
            _this.maxSlewRow = 3;
            _this.percentType3 = -1;
            _this.percentSlew = -1;
            _this.difficult = 0;
            _this.maxCircleInARow = 4;
            _this.maxElementsInARow = 4;
            _this.shieldPercent = 0;
            _this.recordDis = 0;
            _this.recordPlaced = 0;
            GameBuilder.startCameraY = Game.Main.gameHalfHeightMax - 110;
            _this.carID = carID;
            _this.roads = new Array();
            _this.deactivateRoads = new Array();
            _this.roadWidth = Game.RoadCreator.roadWidth;
            _this.roadActivateY = -(700 + _this.roadWidth * 2 + Game.RoadCreator.slewRadiusOffset * 2);
            _this.maxCircleInARow = _this.maxElementsInARow / 2;
            return _this;
        }
        GameBuilder.prototype.create = function() {
            this.topLayer = this.game.make.group();
            // this.car = new Car(this.game, Main.gameHalfWidthMax, Constants.GAME_MAX_HEIGHT - CustomResize.offsetHeight - 100, this.carID, this.topLayer);
            this.car = new Game.Car(this.game, Game.Main.gameHalfWidthMax, 1100, this.carID, this.topLayer);
            this.addChild(this.car);
            this.car.visible = false;
            this.addChild(this.topLayer);
            var startY = Game.Constants.GAME_MAX_HEIGHT * 2;
            var newSize;
            for (var i = Game.RoadCreator.minRoadRadius; i <= Game.RoadCreator.maxRoadRadius; i++) {
                newSize = i * 10;
                if (i >= Game.RoadCreator.minStraightRoadRadius) {
                    this.poolRoad(Game.RoadType.straight, newSize, 3, startY);
                }
                this.poolRoad(Game.RoadType.bend, newSize, 3, startY);
            }
            this.poolRoad(Game.RoadType.slew, Game.RoadCreator.slewRadiusOffset, 5, startY);
            this.poolRoad(Game.RoadType.circle, Game.RoadCreator.circleRadius, 10, startY);
            this.poolRoad(Game.RoadType.coin, Game.RoadCreator.coinRadius, 10, startY);
            this.poolRoad(Game.RoadType.shield, Game.RoadCreator.shieldRadius, 1, startY);
            this.poolRoad(Game.RoadType.recordLine, 0, 1, startY);
            this.deactivateRoads.push(this.createRoad(Game.RoadType.straight, Game.RoadCreator.straightStartRadius, 0, startY, 0));
        };
        GameBuilder.prototype.poolRoad = function(type, size, amount, y) {
            var road;
            for (var i = 0; i < amount; i++) {
                road = this.createRoad(type, size, 0, y, 0);
                road.deactivate();
                this.deactivateRoads.push(road);
            }
            if (type === Game.RoadType.recordLine) {
                this.recordLineObj = road;
            }
            road = null;
        };
        GameBuilder.prototype.start = function() {
            this.countCalculateRoad = 0;
            this.numOfSlew = 0;
            this.sizeAfterSlew = 0;
            this.roadFirstPosY = 0;
            this.roadLastPosY = 0;
            this.maxSlewRow = 2;
            this.percentType3 = -1;
            this.shieldPercent = -1;
            this.difficult = 0;
            this.recursionLocation = 0;
            this.counterElementsInARow = 0;
            this.minRadius = Game.RoadCreator.maxRoadRadius;
            this.percentSlew = -1;
            this.prevCoinRoad = null;
            this.recordPlaced = 0;
            this.cameraFollow = false;
            this.x = 0;
            this.y = 0;
            this.car.start();
            var startX = Game.Main.gameHalfWidthMax + (this.roadWidth / 2);
            var startY = Game.Constants.GAME_MAX_HEIGHT - Game.RoadCreator.straightStartRadius;
            while (this.roads.length > 0) {
                this.removeRoad();
            }
            this.canCreateShield = true;
            this.recordDistancePlace = Game.DataManager.getInstance().getDataNumber('recordDis');
            this.addRoad(Game.RoadType.straight, Game.RoadCreator.straightStartRadius, startX, startY, 90);
            for (var i = 0; i < 25; i++) {
                this.calculateNextRoadElement();
            }
            this.recordDis = 0;
        };
        GameBuilder.prototype.stop = function() {
            for (var i = 0; i < this.roads.length; i++) {
                this.roads[i].stop();
            }
        };
        GameBuilder.prototype.continue = function() {
            var currRoad;
            for (var i = 0; i < this.roads.length; i++) {
                if (this.roads[i].roadElement.type > 2) {
                    continue;
                }
                var intersect = Game.Tools.intersectsPIXIRectangles(this.car.graphic.getBounds(), this.roads[i].getBounds());
                if (intersect === true) {
                    if (currRoad) {
                        currRoad = this.roads[i];
                        break;
                    }
                    currRoad = this.roads[i];
                }
            }
            this.car.start(this.getContinueCoordinates(currRoad, this.car.graphic.x, this.car.graphic.y));
        };
        GameBuilder.prototype.getContinueCoordinates = function(currRoad, placeX, placeY, forceSlewDoorOpen) {
            if (forceSlewDoorOpen === void 0) {
                forceSlewDoorOpen = 0;
            }
            var roadType = currRoad.roadElement.type;
            var angle;
            var rotatedX;
            var pos;
            var carAngle;
            if (roadType === Game.RoadType.bend) {
                angle = Game.Tools.angleOfPoints(placeX, placeY, currRoad.x, currRoad.y);
                rotatedX = currRoad.x + currRoad.roadElement.radius + (Game.RoadCreator.roadWidth / 2);
                pos = Game.Tools.rotatePointByAnglePIXI(currRoad.x, currRoad.y, rotatedX, currRoad.y, angle);
                if (currRoad.angle === 90 || Game.Tools.abs(currRoad.angle) === 180) {
                    carAngle = angle + Math.PI;
                } else if (currRoad.angle === 0 || currRoad.angle === -90) {
                    carAngle = angle;
                }
            } else if (roadType === Game.RoadType.straight) {
                if (currRoad.angle === 0) {
                    pos = new PIXI.Point(currRoad.x + Game.Tools.abs(placeX - currRoad.x), currRoad.y + Game.RoadCreator.roadWidth / 2);
                } else if (Game.Tools.abs(currRoad.angle) === 180) {
                    pos = new PIXI.Point(currRoad.x - Game.Tools.abs(placeX - currRoad.x), currRoad.y - Game.RoadCreator.roadWidth / 2);
                } else if (currRoad.angle === 90) {
                    pos = new PIXI.Point(currRoad.x - Game.RoadCreator.roadWidth / 2, currRoad.y + Game.Tools.abs(placeY - currRoad.y));
                } else if (currRoad.angle === -90) {
                    pos = new PIXI.Point(currRoad.x + Game.RoadCreator.roadWidth / 2, currRoad.y - Game.Tools.abs(placeY - currRoad.y));
                }
                carAngle = Game.Tools.abs(currRoad.rotation) - Game.Tools.PI05;
            } else if (roadType === Game.RoadType.slew) {
                rotatedX = currRoad.x + Game.RoadCreator.slewRadius + Game.RoadCreator.roadWidth;
                var rotatedY = currRoad.y + Game.RoadCreator.roadWidth + Game.RoadCreator.slewRadiusOffset;
                //center slew
                pos = Game.Tools.rotatePointByAnglePIXI(currRoad.x, currRoad.y, rotatedX, rotatedY, currRoad.rotation);
                //angle beetwen center slew and car
                angle = Game.Tools.angleOfPoints(placeX, placeY, pos.x, pos.y);
                var roadRot = currRoad.rotation;
                if (Game.Tools.abs(roadRot) === Math.PI) {
                    roadRot = Math.PI;
                }
                var angleDif = angle - roadRot;
                //calculate new car pos
                if (angleDif >= -Game.Tools.PI05 && angleDif <= 0) {
                    if (currRoad.doorOpen === true || forceSlewDoorOpen === 1) {
                        if (currRoad.angle === 0) {
                            pos = new PIXI.Point(currRoad.x + Game.RoadCreator.roadWidth * 1.5 + Game.RoadCreator.slewRadiusOffset, currRoad.y + Game.Tools.abs(placeY - currRoad.y));
                            carAngle = 0;
                        } else if (Game.Tools.abs(currRoad.angle) === 180) {
                            pos = new PIXI.Point(currRoad.x - Game.Tools.abs(placeX - currRoad.x), currRoad.y - Game.RoadCreator.roadWidth / 2 - Game.RoadCreator.slewOffset);
                            carAngle = -Game.Tools.PI05;
                        } else if (currRoad.angle === 90) {
                            pos = new PIXI.Point(currRoad.x - Game.Tools.abs(placeX - currRoad.x), currRoad.y + Game.RoadCreator.roadWidth * 1.5 + Game.RoadCreator.slewRadiusOffset);
                            carAngle = Game.Tools.PI05;
                        } else if (currRoad.angle === -90) {
                            pos = new PIXI.Point(currRoad.x + Game.RoadCreator.roadWidth / 2 + Game.RoadCreator.slewOffset, currRoad.y - Game.Tools.abs(placeY - currRoad.y));
                            carAngle = 0;
                        }
                    } else {
                        if (currRoad.angle === 0) {
                            pos = new PIXI.Point(currRoad.x + Game.Tools.abs(placeX - currRoad.x), currRoad.y + Game.RoadCreator.roadWidth / 2 + Game.RoadCreator.slewOffset);
                            carAngle = -Game.Tools.PI05;
                        } else if (Game.Tools.abs(currRoad.angle) === 180) {
                            pos = new PIXI.Point(currRoad.x - Game.RoadCreator.roadWidth * 1.5 - Game.RoadCreator.slewRadiusOffset - 5, currRoad.y - Game.Tools.abs(placeY - currRoad.y));
                            carAngle = 0;
                        } else if (currRoad.angle === 90) {
                            pos = new PIXI.Point(currRoad.x - Game.RoadCreator.roadWidth / 2 - Game.RoadCreator.slewOffset, currRoad.y + Game.Tools.abs(placeY - currRoad.y));
                            carAngle = 0;
                        } else if (currRoad.angle === -90) {
                            pos = new PIXI.Point(currRoad.x + Game.Tools.abs(placeX - currRoad.x), currRoad.y - Game.RoadCreator.roadWidth * 1.5 - Game.RoadCreator.slewRadiusOffset - 5);
                            carAngle = Game.Tools.PI05;
                        }
                    }
                } else {
                    rotatedX = pos.x + Game.RoadCreator.slewRadius + (Game.RoadCreator.roadWidth / 2);
                    pos = Game.Tools.rotatePointByAnglePIXI(pos.x, pos.y, rotatedX, pos.y, angle);
                    if (currRoad.angle === 0 || currRoad.angle === 90) {
                        carAngle = angle;
                    } else if (Game.Tools.abs(currRoad.angle) === 180 || currRoad.angle === -90) {
                        carAngle = angle - Math.PI;
                    }
                }
            }
            return {
                x: pos.x,
                y: pos.y,
                r: carAngle
            };
        };
        GameBuilder.prototype.calculateRecord = function() {
            if (Game.LevelBuilder.getInstance().score <= Game.DataManager.getInstance().getDataNumber('bestScore')) {
                return;
            }
            var currRoad;
            var forceSlewDoorOpen = 0;
            for (var i = 0; i < this.roads.length; i++) {
                currRoad = this.roads[i];
                if (currRoad.roadElement.type > 2) {
                    continue;
                }
                var intersect = Game.Tools.intersectsPIXIRectangles(this.car.graphic.getBounds(), currRoad.getBounds());
                var radius = this.getRecordRadius(currRoad.roadElement.type, currRoad.roadElement.radius);
                if (intersect === true) {
                    var input = Game.Main.getInstance().roadLocation.getInputPos(currRoad);
                    var percent = void 0;
                    if (currRoad.roadElement.type === Game.RoadType.straight) {
                        var dis = void 0;
                        if (input.inpDY === 0) {
                            dis = Game.Tools.abs(this.car.graphic.x - input.inpX);
                        } else {
                            dis = Game.Tools.abs(this.car.graphic.y - input.inpY);
                        }
                        percent = dis / currRoad.roadElement.radius;
                    } else if (currRoad.roadElement.type === Game.RoadType.bend) {
                        var angle = (Game.Tools.angleOfPoints(currRoad.x, currRoad.y, this.car.graphic.x, this.car.graphic.y) + Math.PI) % Game.Tools.PI05;
                        if (currRoad.rotation === 0 || currRoad.rotation === -Game.Tools.PI05) {
                            angle = Game.Tools.PI05 - angle;
                        }
                        percent = angle / Game.Tools.PI05;
                    } else if (currRoad.roadElement.type === Game.RoadType.slew) {
                        //{ceX:centerX, ceY:centerY, inpX:inputX, inpY:inputY, inpD:inputDir};
                        var angle = void 0;
                        var placePos = this.car.graphic.position;
                        if (currRoad.angle === 90) {
                            angle = ((Game.Tools.angleOfPoints(input.ceX, input.ceY, placePos.x, placePos.y, 1, -1) + Math.PI) + Game.Tools.PI05) % Game.Tools.PI2;
                        } else if (Game.Tools.abs(currRoad.angle) === 180) {
                            angle = ((Game.Tools.angleOfPoints(input.ceX, input.ceY, placePos.x, placePos.y, 1, 1) + Math.PI) + Game.Tools.PI05) % Game.Tools.PI2;
                        } else if (currRoad.angle === -90) {
                            angle = ((Game.Tools.angleOfPoints(input.ceX, input.ceY, placePos.x, placePos.y, 1, 1) + Math.PI)) % Game.Tools.PI2;
                        } else if (currRoad.angle === 0) {
                            angle = ((Game.Tools.angleOfPoints(input.ceX, input.ceY, placePos.x, placePos.y, 1, -1) + Math.PI)) % Game.Tools.PI2;
                        }
                        if (angle >= 0 && angle <= 90) {
                            if (currRoad.doorOpen === true) {
                                forceSlewDoorOpen = 1;
                            } else {
                                forceSlewDoorOpen = 2;
                            }
                        }
                        percent = angle / Game.Tools.PI2;
                    }
                    this.recordDis += radius * percent;
                    break;
                }
                this.recordDis += radius;
            }
            currRoad = null;
            Game.DataManager.getInstance().saveData('recordDis', this.recordDis);
            Game.DataManager.getInstance().saveData('recordForceSlewDoorOpen', forceSlewDoorOpen);
            Game.DataManager.getInstance().saveData('bestScore', Game.LevelBuilder.getInstance().score);
        };
        GameBuilder.prototype.calcRecordDis = function(roadType, radius) {
            this.recordDis += this.getRecordRadius(roadType, radius);
        };
        GameBuilder.prototype.getRecordRadius = function(roadType, radius) {
            if (roadType === Game.RoadType.bend) {
                radius *= 2;
            } else if (roadType === Game.RoadType.slew) {
                radius = (Game.RoadCreator.roadWidth + Game.RoadCreator.slewRadiusOffset) * 2 + (Game.RoadCreator.slewRadius * 6); //190
            }
            return radius;
        };
        GameBuilder.prototype.placeRecordLine = function(currRoad) {
            if (this.recordPlaced === -2 || currRoad.roadElement.type > 2 || this.recordDistancePlace === 0) {
                return;
            }
            var currType = currRoad.roadElement.type;
            if (this.recordPlaced === -1) {
                if (currType === Game.RoadType.slew) {
                    this.setRecordLineOver(currRoad.imageDoor);
                    currRoad.recordOver = true;
                }
                this.recordPlaced = -2;
                return;
            }
            var radius = this.getRecordRadius(currType, currRoad.roadElement.radius);
            this.recordPlaced += radius;
            if (this.recordPlaced < this.recordDistancePlace) {
                return;
            }
            var checkRecordIndex = 0;
            var percent = 1 - ((this.recordPlaced - this.recordDistancePlace) / radius);
            var inputPos = Game.Main.getInstance().roadLocation.getInputPos(currRoad);
            var placePos;
            var forceSlewDoorOpen = 0;
            if (currType === Game.RoadType.bend) {
                placePos = Game.Tools.rotatePointByAngle(currRoad.x, currRoad.y, inputPos.inpX, inputPos.inpY, (Game.Tools.PI05 * percent) * inputPos.inpD);
                this.recordPlaced = -1;
            } else if (currType === Game.RoadType.straight) {
                placePos = {
                    x: (inputPos.inpX + ((radius * percent) * inputPos.inpDX)),
                    y: (inputPos.inpY + ((radius * percent) * inputPos.inpDY))
                };
                this.recordPlaced = -1;
            } else if (currType === Game.RoadType.slew) {
                placePos = Game.Tools.rotatePointByAngle(inputPos.ceX, inputPos.ceY, inputPos.inpX, inputPos.inpY, (Game.Tools.PI2 * percent) * inputPos.inpD);
                checkRecordIndex = 1;
                this.recordPlaced = -2;
            }
            forceSlewDoorOpen = Game.DataManager.getInstance().getDataNumber('recordForceSlewDoorOpen');
            var pos = this.getContinueCoordinates(currRoad, placePos.x, placePos.y, forceSlewDoorOpen);
            this.addRoad(Game.RoadType.recordLine, 0, pos.x, pos.y, Game.Tools.toDeg(pos.r));
            if (checkRecordIndex === 0) {
                this.setChildBelowCar(this.recordLineObj);
            } else {
                if (forceSlewDoorOpen === 2) {
                    this.setRecordLineOver(currRoad.imageDoor);
                    currRoad.recordOver = true;
                } else {
                    this.setRecordLineOver(currRoad.imageDoor, -1);
                }
            }
        };
        GameBuilder.prototype.setRecordLineOver = function(over, index) {
            if (index === void 0) {
                index = 0;
            }
            this.setChildIndex(this.recordLineObj, this.getChildIndex(over) + index);
        };
        GameBuilder.prototype.getRandomSize = function(minRadius) {
            if (minRadius <= this.minRadius) {
                minRadius = this.minRadius;
            }
            return Game.Tools.random(minRadius, Game.RoadCreator.maxRoadRadius) * 10;
        };
        // export enum RoadType{
        //     straight, = 0
        //     bend, = 1
        //     slew, = 2
        //     circle, = 3
        //     coin, = 4
        //     shield = 5
        // }
        GameBuilder.prototype.getNewType = function(prevRoad) {
            if (Game.Tools.simpleRandom() <= this.percentType3 && this.counterElementsInARow < this.maxCircleInARow) {
                this.counterElementsInARow += 1;
                return 3;
            }
            if (this.counterElementsInARow < this.maxElementsInARow) {
                if (this.roads.length > 3) {
                    if (this.canCreateShield === true && Game.Tools.simpleRandom() <= this.shieldPercent) {
                        this.counterElementsInARow += 1;
                        this.canCreateShield = false;
                        return 5;
                    }
                    if (Game.Tools.simpleRandom() <= 30 && this.prevCoinRoad !== prevRoad) {
                        this.counterElementsInARow += 1;
                        this.prevCoinRoad = prevRoad;
                        return 4;
                    }
                }
            }
            this.counterElementsInARow = 0;
            var maxNextElement = 1;
            if (Game.Tools.simpleRandom() <= this.percentSlew) {
                maxNextElement = 2;
            }
            return Game.Tools.random(0, maxNextElement);
        };
        GameBuilder.prototype.setDifficult = function(score) {
            if (score % 50 === 0) {
                this.difficult += 1;
                if (this.difficult % 2 === 0) {
                    this.car.addSpeed();
                }
                if (this.minRadius > 0) {
                    this.minRadius = Math.ceil(this.minRadius - 0.7);
                }
                if (this.difficult === 1) { //50
                    this.shieldPercent = 5;
                } else if (this.difficult === 3) {
                    this.percentSlew = 30;
                } else if (this.difficult === 6) {
                    this.percentSlew = 40;
                } else if (this.difficult === 8) {
                    this.maxSlewRow = 3;
                    this.percentType3 = 10;
                    this.percentSlew = 60;
                } else if (this.difficult === 10) {
                    this.percentSlew = 80;
                } else if (this.difficult === 12) {
                    this.percentType3 = 25;
                    this.percentSlew = 100;
                } else if (this.difficult === 17) {
                    this.percentType3 = 40;
                } else if (this.difficult === 30) {
                    this.percentType3 = 60;
                }
            }
        };
        GameBuilder.prototype.checkCanCreate = function(newType, x, y) {
            if (newType >= 3) { //RoadType.circle || RoadType.coin || RoadType.shield
                var road = void 0;
                for (var i = 0; i < this.maxElementsInARow; i++) {
                    road = this.getPrevRoadElement(i, true);
                    if (Game.Tools.distance(road.x, road.y, x, y) <= 45) {
                        return false;
                    }
                }
            }
            return true;
        };
        GameBuilder.prototype.calculateNextRoadElement = function(newSize, newType) {
            if (newSize === void 0) {
                newSize = -1;
            }
            if (newType === void 0) {
                newType = -1;
            }
            var prevRoad = this.getPrevRoadElement();
            var prevType = prevRoad.roadElement.type;
            if (newType < 0) {
                newType = this.getNewType(prevRoad);
                if (newType >= 3) {
                    if (newType === Game.RoadType.circle) {
                        newSize = Game.RoadCreator.circleRadius;
                    } else if (newType === Game.RoadType.coin) {
                        newSize = Game.RoadCreator.coinRadius;
                    } else if (newType === Game.RoadType.shield) {
                        newSize = Game.RoadCreator.shieldRadius;
                    }
                    this.calculateNextRoadLocation(prevType, prevRoad, newSize, newType, 0);
                    return;
                }
                if (newType === Game.RoadType.straight && prevType === Game.RoadType.straight) {
                    newType = Game.RoadType.bend;
                }
            }
            var forceAngle = 0;
            if (newType !== Game.RoadType.slew) {
                this.numOfSlew = 0;
            }
            if (newType === Game.RoadType.slew) {
                if (this.checkPlaceSlew(prevRoad) === false) {
                    this.calculateNextRoadElement(-1, 1);
                    return;
                }
                this.numOfSlew += 1;
                if (this.numOfSlew === this.maxSlewRow) {
                    this.numOfSlew = 0;
                    this.calculateNextRoadElement(-1, 1);
                    return;
                }
                newSize = Game.RoadCreator.slewRadiusOffset;
                this.sizeAfterSlew = 3; //3
            } else if (newType === Game.RoadType.straight) {
                newSize = this.getRandomSize(Game.RoadCreator.minStraightRoadRadius);
                if (prevType === Game.RoadType.slew) {
                    if (newSize < 120) {
                        newSize = 120;
                    }
                    if (prevRoad.angle === 90 || Game.Tools.abs(prevRoad.angle) === 180) {
                        this.calculateNextRoadElement(-1, 1);
                        return;
                    }
                    var prevPrevRoad = this.getPrevRoadElement(1);
                    var prevPrevType = prevPrevRoad.roadElement.type;
                    if (prevPrevType === Game.RoadType.slew) {
                        this.calculateNextRoadElement(-1, 1);
                        return;
                    }
                }
            } else if (newType === Game.RoadType.bend) {
                newSize = this.getRandomSize(Game.RoadCreator.minRoadRadius);
                var prevPrevRoad = this.getPrevRoadElement(1);
                var prevPrevType = prevPrevRoad.roadElement.type;
                if (prevPrevType === Game.RoadType.slew) {
                    if (prevType === Game.RoadType.bend) {
                        if (prevRoad.angle === 90) {
                            forceAngle = -90;
                        } else if (prevRoad.angle === 0) {
                            forceAngle = 180;
                        }
                    } else if (prevType === Game.RoadType.slew) {
                        if (prevRoad.angle === 0) {
                            forceAngle = -90;
                        } else if (prevRoad.angle === -90) {
                            forceAngle = 180;
                        }
                    }
                }
            }
            if (newType !== Game.RoadType.slew) {
                if (this.sizeAfterSlew > 0) {
                    this.sizeAfterSlew -= 1;
                    if (forceAngle === 0 && newSize < 60) {
                        newSize = 60;
                    }
                }
            }
            this.calculateNextRoadLocation(prevType, prevRoad, newSize, newType, forceAngle);
        };
        GameBuilder.prototype.checkPlaceSlew = function(prevRoad_1) {
            var prevType_1 = prevRoad_1.roadElement.type;
            var prevRoad_2 = this.getPrevRoadElement(1);
            var prevType_2 = prevRoad_2.roadElement.type;
            if (prevType_1 === Game.RoadType.slew) {
                var prevRoad_3 = this.getPrevRoadElement(2);
                var prevType_3 = prevRoad_3.roadElement.type;
                if (prevType_2 === Game.RoadType.bend && prevType_3 === Game.RoadType.bend) {
                    if (prevRoad_1.angle === 90 && prevRoad_2.angle === 90 && prevRoad_3.angle === -90 || Game.Tools.abs(prevRoad_1.angle) === 180 && prevRoad_2.angle === 0 && Game.Tools.abs(prevRoad_3.angle) === 180) {
                        return false;
                    }
                } else if (prevType_2 === Game.RoadType.bend && prevType_3 === Game.RoadType.straight) {
                    if (prevRoad_1.angle === 90 && prevRoad_2.angle === 90 && prevRoad_3.angle === 0 || Game.Tools.abs(prevRoad_1.angle) === 180 && prevRoad_2.angle === 0 && Game.Tools.abs(prevRoad_3.angle) === 180) {
                        return false;
                    }
                } else if (prevType_2 === Game.RoadType.straight && prevType_3 === Game.RoadType.bend) {
                    if (prevRoad_1.angle === 90 && prevRoad_2.angle === -90 && prevRoad_3.angle === 90 || Game.Tools.abs(prevRoad_1.angle) === 180 && prevRoad_2.angle === 90 && prevRoad_3.angle === 0) {
                        return false;
                    }
                } else if (prevType_2 === Game.RoadType.bend && prevType_3 === Game.RoadType.slew) {
                    if (Game.Tools.abs(prevRoad_1.angle) === 180 && prevRoad_2.angle === 0 || prevRoad_1.angle === 90 && prevRoad_2.angle === 90) {
                        return false;
                    }
                }
                if (prevType_1 === Game.RoadType.slew && prevType_2 === Game.RoadType.straight) {
                    var sumRadius = prevRoad_1.roadElement.radius + prevRoad_2.roadElement.radius;
                    if (prevRoad_1.angle === 90 && prevRoad_2.angle === -90 && sumRadius < this.slewPlaceSumRadius || Game.Tools.abs(prevRoad_1.angle) === 180 && prevRoad_2.angle === 90 && sumRadius < this.slewPlaceSumRadius) {
                        return false;
                    }
                }
            } else {
                var sumRadius = prevRoad_1.roadElement.radius + prevRoad_2.roadElement.radius;
                if (prevType_1 === Game.RoadType.bend && prevType_2 === Game.RoadType.bend && sumRadius < this.slewPlaceSumRadius) {
                    if (prevRoad_1.angle === -90 && prevRoad_2.angle === 0 || Game.Tools.abs(prevRoad_1.angle) === 180 && prevRoad_2.angle === 90) {
                        return false;
                    }
                } else if (prevType_1 === Game.RoadType.straight && prevType_2 === Game.RoadType.bend && sumRadius < this.slewPlaceSumRadius + 80) {
                    if (prevRoad_1.angle === 0 && prevRoad_2.angle === -90 || Game.Tools.abs(prevRoad_1.angle) === 180 && Game.Tools.abs(prevRoad_2.angle) === 180) {
                        return false;
                    }
                } else if (prevType_1 === Game.RoadType.bend && prevType_2 === Game.RoadType.straight && sumRadius < this.slewPlaceSumRadius + 80) {
                    if (prevRoad_1.angle === -90 && prevRoad_2.angle === 90 || Game.Tools.abs(prevRoad_1.angle) === 180 && prevRoad_2.angle === -90) {
                        return false;
                    }
                } else if (prevType_1 === Game.RoadType.bend && prevType_2 === Game.RoadType.slew && sumRadius < this.slewPlaceSumRadius) {
                    return false;
                }
            }
            return true;
        };
        GameBuilder.prototype.calculateNextRoadLocation = function(prevType, prevRoad, newSize, newType, forceAngle) {
            var location = Game.Main.getInstance().roadLocation.getLocation(prevType, prevRoad.x, prevRoad.y, prevRoad.angle, prevRoad.roadElement.radius, newSize, newType, forceAngle);
            if (this.checkCanCreate(newType, location.x, location.y) === false) {
                if (this.recursionLocation >= 5) {
                    this.counterElementsInARow = this.maxElementsInARow;
                    this.calculateNextRoadElement();
                } else {
                    this.recursionLocation += 1;
                    this.calculateNextRoadLocation(prevType, prevRoad, newSize, newType, forceAngle);
                }
                return;
            }
            this.addRoad(newType, newSize, Math.round(location.x), Math.round(location.y), location.angle);
            this.recursionLocation = 0;
        };
        GameBuilder.prototype.addRoad = function(newType, radius, x, y, angle) {
            var road;
            for (var i = 0; i < this.deactivateRoads.length; i++) {
                road = this.deactivateRoads[i];
                if (road.roadElement.type === newType && road.roadElement.radius === radius) {
                    road.activate(x, y, angle);
                    this.deactivateRoads.splice(i, 1);
                    this.roads.push(road);
                    this.placeRecordLine(road);
                    return;
                }
            }
            road = this.createRoad(newType, radius, x, y, angle);
            this.roads.push(road);
            this.placeRecordLine(road);
            road = null;
        };
        GameBuilder.prototype.createRoad = function(newType, radius, x, y, angle) {
            var road;
            if (newType === Game.RoadType.slew) {
                road = new Game.RoadSlew(this.game, x, y, angle, Game.Main.getInstance().roadCreator.getElement(newType, radius));
                this.addChildAt(road, 0);
            } else if (newType === Game.RoadType.circle) {
                road = new Game.RoadCircle(this.game, x, y, Game.Main.getInstance().roadCreator.getElement(newType, radius));
                this.topLayer.addChildAt(road, 0);
            } else if (newType === Game.RoadType.coin) {
                road = new Game.RoadCoin(this.game, x, y, Game.Main.getInstance().roadCreator.getElement(newType, radius));
                this.topLayer.addChild(road);
            } else if (newType === Game.RoadType.shield) {
                road = new Game.RoadShield(this.game, x, y, Game.Main.getInstance().roadCreator.getElement(newType, radius));
                this.topLayer.addChild(road);
            } else if (newType === Game.RoadType.recordLine) {
                road = new Game.RoadRecordLine(this.game, x, y, angle);
                this.addChildBelowCar(road);
            } else {
                road = new Game.Road(this.game, x, y, angle, Game.Main.getInstance().roadCreator.getElement(newType, radius));
                this.addChildAt(road, 0);
            }
            return road;
        };
        GameBuilder.prototype.removeRoad = function(road, forRecord) {
            if (road === void 0) {
                road = null;
            }
            if (forRecord === void 0) {
                forRecord = false;
            }
            if (road) {
                var index = this.roads.indexOf(road);
                this.roads.splice(index, 1);
            } else {
                road = this.roads.shift();
                road.deactivate();
                if (forRecord === true && road.roadElement.type <= 2) {
                    this.calcRecordDis(road.roadElement.type, road.roadElement.radius);
                }
            }
            this.deactivateRoads.push(road);
        };
        GameBuilder.prototype.getPrevRoadElement = function(end, elements) {
            if (end === void 0) {
                end = 0;
            }
            if (elements === void 0) {
                elements = false;
            }
            for (var i = this.roads.length - 1; i >= 0; i--) {
                if (elements === false && this.roads[i].roadElement.type < 3 || elements === true && this.roads[i].roadElement.type >= 3) {
                    end -= 1;
                    if (end < 0) {
                        return this.roads[i];
                    }
                }
            }
            return this.roads[this.roads.length - 1];
        };
        GameBuilder.prototype.addChildBelowCar = function(child) {
            this.addChildAt(child, this.getCarIndex() - 1);
        };
        GameBuilder.prototype.setChildBelowCar = function(child, ind) {
            if (ind === void 0) {
                ind = 1;
            }
            this.setChildIndex(child, this.getCarIndex() - ind);
        };
        GameBuilder.prototype.setChildAboveCar = function(child) {
            this.setChildIndex(child, this.getCarIndex());
        };
        GameBuilder.prototype.getCarIndex = function() {
            return this.getChildIndex(this.car);
        };
        GameBuilder.prototype.update = function() {
            if (Game.LevelBuilder.getInstance().active === false) {
                return;
            }
            _super.prototype.update.call(this);
            this.x = Game.Main.gameHalfWidthMax - this.car.body.x;
            if (this.cameraFollow === false) {
                if (this.car.body.y <= GameBuilder.startCameraY) {
                    this.cameraFollow = true;
                    Game.LevelBuilder.getInstance().hideTutorial();
                }
            } else {
                this.y = GameBuilder.startCameraY - this.car.body.y;
            }
            this.calculateRoad();
        };
        GameBuilder.prototype.calculateRoad = function() {
            this.countCalculateRoad += 1;
            if (this.countCalculateRoad < 5) {
                return;
            }
            this.countCalculateRoad = 0;
            if (this.roadFirstPosY === 0) {
                this.roadFirstPosY = this.getRoadTopY(this.roads[0]) - 110;
            }
            if ((this.roadFirstPosY - this.car.body.y) > this.roadDeactivateY) {
                this.removeRoad(null, true);
                this.roadFirstPosY = 0;
            }
            if (this.roadLastPosY === 0) {
                this.roadLastPosY = this.getRoadBottomY(this.getPrevRoadElement());
            }
            if ((this.roadLastPosY - this.car.body.y) > this.roadActivateY) {
                this.calculateNextRoadElement();
                this.roadLastPosY = 0;
            }
        };
        GameBuilder.prototype.getRoadTopY = function(a) {
            if (a.angle === 0) {
                return a.y;
            } else if (a.angle === 90) {
                return a.y;
            } else if (a.angle === 180 || a.angle === -180) {
                return a.y - a.height;
            } else if (a.angle === -90) {
                return a.y - a.width;
            }
            return -1;
        };
        GameBuilder.prototype.getRoadBottomY = function(a) {
            if (a.angle === 0) {
                return a.y + a.height;
            } else if (a.angle === 90) {
                return a.y + a.width;
            } else if (a.angle === 180 || a.angle === -180) {
                return a.y;
            } else if (a.angle === -90) {
                return a.y;
            }
            return -1;
        };
        GameBuilder.prototype.free = function() {
            this.roads = [];
            this.roads = null;
            this.deactivateRoads = [];
            this.deactivateRoads = null;
            this.topLayer = null;
            this.car = null;
        };
        return GameBuilder;
    }(Phaser.Group));
    Game.GameBuilder = GameBuilder;
})(Game || (Game = {}));
var Game;
(function(Game) {
    var Missions = /** @class */ (function() {
        function Missions() {
            this.defaultValues = [
                100,
                3,
                500,
                3,
                15,
                100,
                3,
                100 //[drive 100m] x3 in a row
            ];
            this.addPerLevel = [
                100,
                1,
                250,
                1,
                10,
                100,
                1,
                100 //[drive 100m] x3 in a row
            ];
            Missions.instance = this;
            this.maxMissions = 100;
        }
        Missions.getInstance = function() {
            if (Missions.instance === null) {
                return new Missions();
            }
            return Missions.instance;
        };
        Missions.prototype.getDescription = function(id) {
            var num = (id % this.defaultValues.length) + 1;
            var level = Math.floor(id / this.defaultValues.length);
            var val = this.defaultValues[num - 1] + this.addPerLevel[num - 1] * level;
            return Game.Localization.getText('mission' + num, val);
        };
        Missions.prototype.getProgress = function() {
            var target;
            if (this.currMissionID === 0 || this.currMissionID === 1) {
                target = this.currTempValue;
            } else if (this.currMissionID === 2 || this.currMissionID === 4) {
                target = this.totalTarget;
            } else {
                target = this.currRow;
                return '' + target + '/3';
            }
            return '' + target + '/' + this.currTarget;
        };
        Missions.prototype.init = function() {
            this.currMission = Game.DataManager.getInstance().getDataNumber('currMission');
            this.currTempValue = 0;
            this.isComplete = false;
            this.getNext(true);
        };
        Missions.prototype.getNext = function(init) {
            if (init === void 0) {
                init = false;
            }
            if (init === false) {
                this.setNext();
                Game.DataManager.getInstance().saveProgress();
            }
            this.currMissionID = (this.currMission % this.defaultValues.length);
            this.currMissionLVL = Game.DataManager.getInstance().getDataNumber('missionLVL' + this.currMissionID);
            this.currTarget = this.defaultValues[this.currMissionID] + (this.addPerLevel[this.currMissionID] * this.currMissionLVL);
            this.totalTarget = Game.DataManager.getInstance().getDataNumber('missionTotal' + this.currMissionID);
            this.currRow = Game.DataManager.getInstance().getDataNumber('missionRow' + this.currMissionID);
        };
        Missions.prototype.setNext = function() {
            this.isComplete = false;
            this.currMission += 1;
            Game.DataManager.getInstance().saveData('currMission', this.currMission);
        };
        Missions.prototype.start = function() {
            this.tempTotalTarget = 0;
            this.currTempValue = 0;
        };
        Missions.prototype.end = function() {
            this.totalTarget += this.tempTotalTarget;
            if (this.isComplete === false) {
                Game.DataManager.getInstance().saveData('missionRow' + this.currMissionID, this.currRow);
                Game.DataManager.getInstance().saveData('missionTotal' + this.currMissionID, this.totalTarget);
                Game.DataManager.getInstance().saveProgress();
            }
        };
        Missions.prototype.complete = function() {
            this.isComplete = true;
            this.currRow = 0;
            this.currTempValue = 0;
            this.totalTarget = 0;
            Game.DataManager.getInstance().saveData('missionLVL' + this.currMissionID, this.currMissionLVL + 1);
            Game.DataManager.getInstance().saveData('missionTotal' + this.currMissionID, 0);
            Game.DataManager.getInstance().saveData('missionRow' + this.currMissionID, 0);
            Game.DataManager.getInstance().saveData('mission' + this.currMission, 1);
            this.getNext();
        };
        Missions.prototype.calc = function(drive, coins) {
            if (this.isComplete === true) {
                return;
            }
            if (this.currMissionID === 0) {
                this.setValue0(drive);
            } else if (this.currMissionID === 1) {
                this.setValue0(coins);
            } else if (this.currMissionID === 2) {
                this.setValue1(drive);
            } else if (this.currMissionID === 3) {
                this.setValue2(coins);
            } else if (this.currMissionID === 4) {
                this.setValue1(coins);
            } else if (this.currMissionID === 5) {
                this.setValue2(drive);
            } else if (this.currMissionID === 6) {
                this.setValue3(coins);
            } else if (this.currMissionID === 7) {
                this.setValue3(drive);
            }
        };
        //собрать/проехать за раз 
        Missions.prototype.setValue0 = function(value) {
            this.currTempValue = value;
            if (this.currTempValue >= this.currTarget) {
                this.complete();
            }
        };
        //собрать/проехать всего
        Missions.prototype.setValue1 = function(value) {
            this.tempTotalTarget += value;
            if (this.tempTotalTarget + this.totalTarget >= this.currTarget) {
                this.complete();
            }
        };
        //собрать/проехать три раза
        Missions.prototype.setValue2 = function(value) {
            if (value >= this.currTarget) {
                this.currRow += 1;
                if (this.currRow >= 3) {
                    this.complete();
                }
            }
        };
        //собрать/проехать три раза подряд
        Missions.prototype.setValue3 = function(value) {
            if (value >= this.currTarget) {
                this.currRow += 1;
                if (this.currRow >= 3) {
                    this.complete();
                }
            } else {
                this.currRow = 0;
            }
        };
        Missions.instance = null;
        return Missions;
    }());
    Game.Missions = Missions;
})(Game || (Game = {}));
var Game;
(function(Game) {
    var SteeringWheel = /** @class */ (function(_super) {
        __extends(SteeringWheel, _super);

        function SteeringWheel(game, x, carID) {
            var _this = _super.call(this, game, x, 0, 'game', 'steeringWheel' + carID + ' instance 10000') || this;
            _this.pressed = false;
            _this.diff = 0;
            _this.pressAngle = 0;
            _this.lastAngle = 0;
            _this.anchor.setTo(0.5);
            _this.cacheAsBitmap = true;
            return _this;
        }
        SteeringWheel.prototype.setSkin = function(carID) {
            this.frameName = 'steeringWheel' + carID + ' instance 10000';
        };
        SteeringWheel.prototype.down = function() {
            this.pressed = true;
            this.lastAngle = Game.Tools.angleOfPoints(this.game.input.activePointer.x, this.game.input.activePointer.y, this.world.x, this.world.y);
            this.pressAngle = this.rotation;
        };
        SteeringWheel.prototype.up = function() {
            this.pressed = false;
            this.diff = 0;
        };
        SteeringWheel.prototype.getDiff = function() {
            return this.diff;
        };
        SteeringWheel.prototype.update = function() {
            if (this.pressed === true) {
                var angle = Game.Tools.angleOfPoints(this.game.input.activePointer.x, this.game.input.activePointer.y, this.world.x, this.world.y);
                var newAngle = this.pressAngle + (angle - this.lastAngle);
                this.diff = newAngle - this.rotation;
                if (this.diff > Math.PI) {
                    this.diff = this.diff - Game.Tools.PI2;
                } else if (this.diff < -Math.PI) {
                    this.diff = this.diff + Game.Tools.PI2;
                }
                this.rotation = newAngle;
            } else {
                this.rotation = Game.Tools.damping(this.rotation, 0.008, 0.9);
            }
        };
        return SteeringWheel;
    }(Phaser.Image));
    Game.SteeringWheel = SteeringWheel;
})(Game || (Game = {}));
var Game;
(function(Game) {
    var Tutorial = /** @class */ (function(_super) {
        __extends(Tutorial, _super);

        function Tutorial(game) {
            var _this = _super.call(this, game) || this;
            _this.image = game.make.image(Game.Main.gameHalfWidthMax, 0, 'game', 'tut0 instance 10000');
            _this.image.cacheAsBitmap = true;
            _this.image.anchor.setTo(0.5);
            _this.addChild(_this.image);
            _this.line = game.make.image(0, Game.GameBuilder.startCameraY, 'game', 'tutLine instance 10000');
            _this.line.cacheAsBitmap = true;
            _this.addChild(_this.line);
            _this.startText = new Game.BmpdText(game, Game.Main.gameHalfWidthMax, Game.GameBuilder.startCameraY - 40, Game.Localization.getText('start'), 100);
            _this.startText.anchor.setTo(0.5);
            _this.addChild(_this.startText);
            _this.text = new Game.BmpdText(game, Game.Main.gameHalfWidthMax, 0, '', 36);
            _this.text.anchor.setTo(0.5);
            _this.addChild(_this.text);
            _this.visible = false;
            return _this;
        }
        Tutorial.prototype.show = function(control) {
            this.image.frameName = 'tut' + control + ' instance 10000';
            this.image.rotation = 0;
            this.text.text = Game.Localization.getText('tut' + control);
            if (control === Game.ControlType.spin) {
                this.game.add.tween(this.image).to({
                    rotation: -Math.PI / 4
                }, 700, null, true, 0, -1, true);
                this.text.y = this.image.y + this.image.height / 2 - 20;
            } else {
                this.text.y = this.image.y + this.image.height / 2 + 40;
            }
            this.superAlpha = 1;
            this.startText.y = Game.GameBuilder.startCameraY - 40;
            this.startText.scale.set(1, 1);
            this.startText.alpha = 1;
            this.visible = true;
        };
        Tutorial.prototype.hide = function() {
            this.game.add.tween(this.startText).to({
                scaleX: 5,
                scaleY: 5,
                alpha: 0,
                y: Game.Main.gameHalfHeightMax
            }, 400, null, true).onComplete.addOnce(this.disable, this);
            this.game.add.tween(this).to({
                superAlpha: 0
            }, 200, null, true);
        };
        Tutorial.prototype.disable = function() {
            this.visible = false;
            this.game.tweens.removeFrom(this.image);
        };
        Tutorial.prototype.customResize = function(y) {
            this.image.y = y;
        };
        Object.defineProperty(Tutorial.prototype, "superAlpha", {
            get: function() {
                return this.image.alpha;
            },
            set: function(value) {
                this.image.alpha = value;
                this.line.alpha = value;
                this.text.alpha = value;
            },
            enumerable: true,
            configurable: true
        });
        Tutorial.prototype.destroy = function() {
            _super.prototype.destroy.call(this);
            this.image = null;
            this.line = null;
            this.startText = null;
            this.text = null;
        };
        return Tutorial;
    }(Phaser.Group));
    Game.Tutorial = Tutorial;
})(Game || (Game = {}));
var Game;
(function(Game) {
    var Car = /** @class */ (function(_super) {
        __extends(Car, _super);
        //
        function Car(game, x, y, carID, topLayer) {
            var _this = _super.call(this, game) || this;
            _this.maxSpeed = 290;
            _this.startSpeed = 230;
            _this.stepSpeed = 4;
            _this.carSpeed = 0;
            _this.speedAcceleration = 2;
            //
            _this.steerAngle = 0;
            //
            _this.contactCount = 0;
            _this.pivotY = 6; //12
            _this.contacted = 0;
            _this.angleMultiplier = 0.58; //0.348//0.48
            _this.maxAngle = 168;
            _this.maxAngleWhenRelease = 68;
            _this.startX = x;
            _this.startY = y;
            _this.tailOffY = 32 + _this.pivotY;
            _this.initSteerVal();
            _this.graphicShadow = game.make.image(0, 0, 'game', 'car' + carID + ' instance 10000');
            _this.graphicShadow.anchor.setTo(0.5);
            _this.graphicShadow.tint = 0x000000;
            _this.graphicShadow.alpha = 0.4;
            _this.graphicShadow.cacheAsBitmap = true;
            _this.graphicShadow.pivot.y = -_this.pivotY;
            _this.addChild(_this.graphicShadow);
            _this.tail = new Game.CarTail(game);
            _this.addChild(_this.tail);
            _this.smoke = new Game.CarSmoke(game, _this);
            _this.graphic = game.make.image(x, y, 'game', 'car' + carID + ' instance 10000');
            _this.graphic.anchor.setTo(0.5);
            _this.graphic.pivot.y = -_this.pivotY;
            _this.addChild(_this.graphic);
            _this.light = new Game.CarLight(game);
            _this.light.pivot.y = 30 - _this.pivotY;
            topLayer.addChild(_this.light);
            _this.light.setSkin(carID);
            _this.shield = game.make.image(0, 0, 'game', 'animation_shield instance 10000');
            _this.shield.animations.add('anim', Game.PhaserTools.getAnimationFrames('animation_shield', 1, 25), 30, true);
            _this.shield.animations.add('animDeactiv', Game.PhaserTools.getAnimationFrames('animation_shield', 0, 1), 3, true);
            _this.shield.anchor.setTo(0.5);
            _this.shield.pivot.y = -_this.pivotY;
            _this.shield.visible = false;
            _this.shield.cacheAsBitmap = true;
            topLayer.addChild(_this.shield);
            _this.defeatAnim = new Game.CarDefeat(game, topLayer);
            _this.body = new Phaser.Physics.Box2D.Body(game, null, x, y, 2);
            _this.body.setPolygon([-12, 28 + _this.pivotY, -12, -20 + _this.pivotY, -7, -29 + _this.pivotY, 7, -29 + _this.pivotY, 12, -20 + _this.pivotY, 12, 28 + _this.pivotY]);
            _this.body.data.SetSleepingAllowed(false);
            _this.body.setCategoryContactCallback(1, _this.contact, _this);
            return _this;
        }
        Car.prototype.start = function(startPos) {
            if (startPos === void 0) {
                startPos = null;
            }
            if (!startPos) {
                startPos = {
                    x: this.startX,
                    y: this.startY,
                    r: 0
                };
                this.carSpeed = this.startSpeed / 2;
            } else {
                this.carSpeed = 0;
            }
            this.currMaxSpeed = this.startSpeed;
            this.visible = true;
            this.isDefeat = false;
            this.contacted = 0;
            this.deactivateShield();
            this.steerAngle = 0;
            this.steeringRotateSpeed = 0;
            this.graphic.visible = true;
            this.graphicShadow.visible = true;
            this.light.visible = true;
            this.tail.show(startPos.x, startPos.y);
            this.defeatAnim.hide();
            this.body.x = startPos.x;
            this.body.y = startPos.y;
            this.body.rotation = startPos.r;
        };
        Car.prototype.setSkin = function(carID) {
            this.graphicShadow.frameName = 'car' + carID + ' instance 10000';
            this.graphic.frameName = 'car' + carID + ' instance 10000';
            this.light.setSkin(carID);
        };
        Car.prototype.addSpeed = function() {
            if (this.currMaxSpeed < this.maxSpeed) {
                this.currMaxSpeed += this.stepSpeed;
            }
        };
        Car.prototype.getSpeedPercent = function() {
            return this.carSpeed / this.currMaxSpeed;
        };
        Car.prototype.contact = function(body1, body2, fixture1, fixture2, begin, contact) {
            if (this.contactCount < 1) {
                this.contactCount = 1;
                return;
            }
            this.contactCount = 0;
            if (begin === true) {
                if (fixture2.IsSensor() === true) {
                    var userData = body2.data.GetUserData();
                    if (this.isShield === Game.Bool3.false && userData.name === 'shield') {
                        this.activateShield();
                    }
                    userData.link.contact();
                } else {
                    if (this.isShield === Game.Bool3.true) {
                        Game.SoundManager.playSFX('hideShield', false, 0.5);
                        this.isShield = Game.Bool3.none;
                        this.shield.animations.play('animDeactiv');
                        this.game.add.tween(this.shield.scale).to({
                            x: 0,
                            y: 0
                        }, 500, null, true, 1500).onComplete.addOnce(this.deactivateShield, this);
                    } else if (this.isShield === Game.Bool3.false) {
                        //defeat
                        this.defeat();
                    }
                    this.contacted += 1;
                }
            } else {
                if (fixture2.IsSensor() === false) {
                    this.contacted -= 1;
                    if (this.contacted < 0) {
                        this.contacted = 0;
                    }
                }
            }
        };
        Car.prototype.activateShield = function() {
            Game.SoundManager.playSFX('takeShield');
            this.isShield = Game.Bool3.true;
            this.shield.visible = true;
            this.shield.scale.set(1, 1);
            this.shield.animations.play('anim');
        };
        Car.prototype.deactivateShield = function() {
            this.isShield = Game.Bool3.false;
            this.shield.visible = false;
            this.shield.animations.stop('animDeactiv', true);
            Game.LevelBuilder.getInstance().gameBuilder.canCreateShield = true;
            if (this.contacted > 0) {
                this.defeat();
            }
        };
        Car.prototype.defeat = function() {
            Game.SoundManager.playSFX('boom');
            this.isDefeat = true;
            Game.LevelBuilder.getInstance().btnPause.visible = false;
            this.defeatAnim.start(this.body.x, this.body.y, this.body.rotation);
            this.hide();
        };
        Car.prototype.hide = function(hideSmoke) {
            if (hideSmoke === void 0) {
                hideSmoke = false;
            }
            this.graphic.visible = false;
            this.graphicShadow.visible = false;
            this.body.velocity.x = 0;
            this.body.velocity.y = 0;
            this.body.angularVelocity = 0;
            this.light.visible = false;
            this.tail.hide();
            if (hideSmoke === true) {
                this.smoke.hide();
            }
        };
        Car.prototype.startSteeringTap = function(side) {
            this.steeringRotateSpeed = this.rotAngleTap * side;
            this.rotateLerpSpeed = 0.06256; //3.68 * this.deltaTime
            this.maxAngle = 168;
        };
        Car.prototype.startSteeringSpin = function(side) {
            this.rotateLerpSpeed = 0.09;
            this.maxAngle = 110;
            this.steeringRotateSpeed = Game.Tools.clamp(Game.Tools.toDeg(side), -10, 10) * this.angleMultiplier;
        };
        Car.prototype.stopSteering = function() {
            this.steeringRotateSpeed = 0;
            this.steerAngle = Game.Tools.clamp(this.steerAngle, -this.maxAngleWhenRelease, this.maxAngleWhenRelease);
        };
        // private deltaTime:number = 0.017;//0.017
        Car.prototype.initSteerVal = function() {
            this.rotAngleTap = 3.366; //198 * this.deltaTime
            this.rotateLerpSpeed = 0;
        };
        Car.prototype.update = function() {
            _super.prototype.update.call(this);
            if (this.isDefeat === false) {
                if (this.isControl === true && this.steeringRotateSpeed !== 0) {
                    this.steerAngle = Game.Tools.clamp(this.steerAngle + this.steeringRotateSpeed, -this.maxAngle, this.maxAngle);
                }
                this.body.angularVelocity = (this.steerAngle * this.rotateLerpSpeed) * (this.carSpeed / this.currMaxSpeed);
                this.steerAngle = Game.Tools.lerp(this.steerAngle, 0, this.rotateLerpSpeed);
                var rot = this.body.rotation - Game.Tools.PI05;
                if (this.carSpeed < this.currMaxSpeed) {
                    this.carSpeed += this.speedAcceleration;
                }
                this.body.velocity.x = Math.cos(rot) * this.carSpeed;
                this.body.velocity.y = Math.sin(rot) * this.carSpeed;
                //
                this.updateGraphic(this.body.x, this.body.y, this.body.rotation);
                this.tail.addPoint(this.body.x, this.body.y, this.body.rotation, this.tailOffY);
                this.smoke.addPoint(this.body.x, this.body.y, this.body.rotation, this.tailOffY);
            }
        };
        Car.prototype.updateGraphic = function(x, y, r) {
            this.light.x = x;
            this.light.y = y;
            this.light.rotation = r;
            this.shield.x = x;
            this.shield.y = y;
            this.shield.rotation = r;
            this.graphic.x = x;
            this.graphic.y = y;
            this.graphic.rotation = r;
            this.graphicShadow.x = x; //-2
            this.graphicShadow.y = y + 6;
            this.graphicShadow.rotation = r;
        };
        return Car;
    }(Phaser.Group));
    Game.Car = Car;
})(Game || (Game = {}));
var Game;
(function(Game) {
    var CarDefeat = /** @class */ (function() {
        function CarDefeat(game, parent) {
            this.particleLength = 40;
            this.speedHide = 0.01;
            this.speedMove = 1.8;
            this.game = game;
            this.graphic = game.make.image(0, 0, 'game', 'animation_crash instance 10000');
            this.graphic.animations.add('anim', Game.PhaserTools.getAnimationFrames('animation_crash', 0, 18), 40);
            this.graphic.anchor.setTo(0.5);
            parent.addChild(this.graphic);
            this.graphic.visible = false;
            this.graphic.cacheAsBitmap = true;
            this.children = new Array(this.particleLength);
            var part;
            var delay;
            for (var i = 0; i < this.particleLength; i++) {
                delay = 0;
                if (i > 0 && i % 2 === 0) {
                    delay = 15;
                }
                part = new Game.CarParticle(game, delay);
                part.visible = false;
                parent.addChild(part);
                this.children[i] = part;
            }
            part = null;
        }
        CarDefeat.prototype.start = function(x, y, r) {
            this.graphic.visible = true;
            this.graphic.alpha = 1;
            this.graphic.x = x;
            this.graphic.y = y;
            this.graphic.scale.set(1, 1);
            this.graphic.animations.play('anim');
            this.game.add.tween(this).to({
                graphicScaleX: 3,
                graphicScaleY: 3,
                graphicAlpha: 0
            }, 500, null, true).onComplete.addOnce(this.complete, this);
            var currAngle = 0;
            var stepAngle = Game.Tools.PI2 / this.particleLength;
            var speedMove;
            for (var i = 0; i < this.children.length; i++) {
                var scale = 0.3 + 0.5 * Math.random();
                speedMove = this.speedMove / scale;
                this.children[i].start(x, y, scale, scale, this.speedHide, Math.cos(currAngle) * speedMove, Math.sin(currAngle) * speedMove);
                currAngle += stepAngle;
            }
        };
        CarDefeat.prototype.hide = function() {
            this.graphic.visible = false;
            for (var i = 0; i < this.children.length; i++) {
                this.children[i].visible = false;
            }
        };
        CarDefeat.prototype.complete = function() {
            this.graphic.visible = false;
            Game.LevelBuilder.getInstance().end();
        };
        Object.defineProperty(CarDefeat.prototype, "graphicScaleX", {
            get: function() {
                return this.graphic.scale.x;
            },
            set: function(val) {
                this.graphic.scale.x = val;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CarDefeat.prototype, "graphicScaleY", {
            get: function() {
                return this.graphic.scale.y;
            },
            set: function(val) {
                this.graphic.scale.y = val;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CarDefeat.prototype, "graphicAlpha", {
            get: function() {
                return this.graphic.alpha;
            },
            set: function(val) {
                this.graphic.alpha = val;
            },
            enumerable: true,
            configurable: true
        });
        return CarDefeat;
    }());
    Game.CarDefeat = CarDefeat;
})(Game || (Game = {}));
var Game;
(function(Game) {
    var CarLight = /** @class */ (function(_super) {
        __extends(CarLight, _super);

        function CarLight(game) {
            var _this = _super.call(this, game) || this;
            _this.speed = 0.03;
            _this.goDown = true;
            return _this;
            // this.cacheAsBitmap = true;
        }
        CarLight.prototype.setSkin = function(carID) {
            this.index = -1;
            if (carID === 0) {
                this.addLight(-2, 10, -2, 'lightsuper instance 10000');
                this.addLight(1, 10, 2, 'lightsuper instance 10000');
            } else if (carID === 1) {
                this.addLight(-10, 5, -10);
                this.addLight(8, 5, 10);
            } else if (carID === 2 || carID === 13 || carID === 24) {
                this.addLight(-8, 4, -10);
                this.addLight(8, 4, 10);
            } else if (carID === 3 || carID === 4 || carID === 6 || carID === 7 || carID === 9 || carID === 10 || carID === 25 || carID === 30) {
                this.addLight(-9, 5, -10);
                this.addLight(9, 5, 10);
            } else if (carID === 5) {
                this.addLight(-9, 5, -10);
                this.addLight(8, 5, 10);
            } else if (carID === 8 || carID === 14 || carID === 20 || carID === 26) {
                this.addLight(-7, 5, -10);
                this.addLight(7, 5, 10);
            } else if (carID === 11 || carID === 15) {
                this.addLight(-8, 6, -10);
                this.addLight(8, 6, 10);
            } else if (carID === 12) {
                this.addLight(-9, 4, -10);
                this.addLight(9, 4, 10);
            } else if (carID === 16) {
                this.addLight(-8, 6, -10);
                this.addLight(9, 6, 10);
            } else if (carID === 17 || carID === 22 || carID === 27) {
                this.addLight(-7, 4, -10);
                this.addLight(7, 4, 10);
            } else if (carID === 18 || carID === 19 || carID === 23) {
                this.addLight(-6, 3, -10);
                this.addLight(6, 3, 10);
            } else if (carID === 21) {
                this.addLight(-7, 5, -10);
                this.addLight(8, 5, 10);
            } else if (carID === 28) {
                this.addLight(-10, 4, -10);
                this.addLight(10, 4, 10);
            } else if (carID === 29) {
                this.addLight(-7, 8, -10);
                this.addLight(7, 8, 10);
            } else if (carID === 31) {
                this.addLight(0, 4, 0);
            } else if (carID === 32) {
                this.addLight(-9, 6, -10);
                this.addLight(9, 6, 10);
            } else if (carID === 33) {
                this.addLight(-11, 3, -5);
                this.addLight(10, 3, 5);
            } else if (carID === 34) {
                this.addLight(-6, 31, -10);
                this.addLight(5, 31, 10);
            } else if (carID === 35) {
                this.addLight(-8, 6, -10);
                this.addLight(7, 6, 10);
            }
            for (var i = this.index + 1; i < this.children.length; i++) {
                this.children[i].visible = false;
            }
            // (this as any).updateCache();
        };
        CarLight.prototype.addLight = function(x, y, angle, frame) {
            if (frame === void 0) {
                frame = 'light instance 10000';
            }
            this.index += 1;
            var child = this.children[this.index];
            if (child) {
                child.frameName = frame;
                child.position.set(x, y - 1);
                child.angle = angle;
                child.visible = true;
            } else {
                child = this.game.make.image(x, y - 1, 'game', frame);
                child.anchor.set(0.5, 1);
                child.cacheAsBitmap = true;
                child.angle = angle;
                this.addChild(child);
            }
            child = null;
        };
        CarLight.prototype.update = function() {
            if (this.visible === false) {
                return;
            }
            if (this.goDown === true) {
                this.alpha -= this.speed;
                if (this.alpha <= 0.2) {
                    this.alpha = 0.2;
                    this.goDown = false;
                }
            } else {
                this.alpha += this.speed;
                if (this.alpha >= 1) {
                    this.alpha = 1;
                    this.goDown = true;
                }
            }
        };
        return CarLight;
    }(Phaser.Group));
    Game.CarLight = CarLight;
})(Game || (Game = {}));
var Game;
(function(Game) {
    var CarParticle = /** @class */ (function(_super) {
        __extends(CarParticle, _super);

        function CarParticle(game, delay) {
            if (delay === void 0) {
                delay = 0;
            }
            var _this = _super.call(this, game, 0, 0, 'game', 'particle instance 10000') || this;
            _this.delay = 0;
            _this.counterDelay = 0;
            _this.velocityX = 0;
            _this.velocityY = 0;
            _this.scaleSpeed = 0;
            _this.anchor.setTo(0.5);
            _this.cacheAsBitmap = true;
            _this.visible = false;
            _this.delay = delay;
            return _this;
        }
        CarParticle.prototype.start = function(px, py, sx, sy, sSpeed, vx, vy) {
            this.position.set(px, py);
            this.scale.set(sx, sy);
            this.scaleSpeed = sSpeed;
            this.velocityX = vx;
            this.velocityY = vy;
            this.visible = true;
            this.counterDelay = 0;
        };
        CarParticle.prototype.update = function() {
            if (this.visible === true) {
                if (this.counterDelay < this.delay) {
                    this.counterDelay += 1;
                    return;
                }
                this.x += this.velocityX;
                this.y += this.velocityY;
                this.scale.x -= this.scaleSpeed;
                this.scale.y = this.scale.x;
                if (this.scale.x <= 0) {
                    this.scale.setTo(0, 0);
                    this.visible = false;
                }
            }
        };
        return CarParticle;
    }(Phaser.Image));
    Game.CarParticle = CarParticle;
})(Game || (Game = {}));
var Game;
(function(Game) {
    var CarSmoke = /** @class */ (function() {
        function CarSmoke(game, parent) {
            this.tailLength = 30;
            this.speedHide = 0.008;
            this.counter = 0;
            this.children = new Array(this.tailLength);
            var part;
            for (var i = 0; i < this.tailLength; i++) {
                part = new Game.CarParticle(game);
                parent.addChild(part);
                this.children[i] = part;
            }
            part = null;
        }
        CarSmoke.prototype.addPoint = function(x, y, r, yoff) {
            this.counter += 1;
            if (this.counter >= 2) {
                this.counter = 0;
                var pos = Game.Tools.rotatePointByAngle(x, y, x - 7 + (14 * Math.random()), y + yoff, r);
                var part = void 0;
                for (var i = 0; i < this.children.length; i++) {
                    part = this.children[i];
                    if (part.visible === false) {
                        var scale = 0.1 + 0.5 * Math.random();
                        part.start(pos.x, pos.y, scale, scale, this.speedHide, 0, 0);
                        break;
                    }
                }
                part = null;
            }
        };
        CarSmoke.prototype.hide = function() {
            for (var i = 0; i < this.children.length; i++) {
                this.children[i].visible = false;
            }
        };
        return CarSmoke;
    }());
    Game.CarSmoke = CarSmoke;
})(Game || (Game = {}));
var Game;
(function(Game) {
    var CarTail = /** @class */ (function(_super) {
        __extends(CarTail, _super);

        function CarTail(game) {
            var _this = _super.call(this, game) || this;
            _this.tailLength = 30;
            _this.points = new Array();
            _this.startY = Game.Constants.GAME_MAX_HEIGHT * 2;
            var part;
            for (var i = 0; i < _this.tailLength; i++) {
                part = game.make.image(0, _this.startY, 'game', 'particle instance 10000');
                part.anchor.setTo(0.5);
                part.cacheAsBitmap = true;
                _this.addChild(part);
            }
            part = null;
            _this.alpha = 0.4;
            _this.cacheAsBitmap = true;
            return _this;
        }
        CarTail.prototype.show = function(x, y) {
            this.visible = true;
            for (var i = 0; i < this.tailLength; i++) {
                this.children[i].visible = true;
                this.children[i].position.set(x, y);
            }
        };
        CarTail.prototype.hide = function() {
            this.visible = false;
            this.points = [];
        };
        CarTail.prototype.addPoint = function(x, y, r, yoff) {
            this.points.push(Game.Tools.rotatePointByAngle(x, y, x, y + yoff, r));
            if (this.points.length > this.tailLength) {
                this.points.shift();
            }
            this.drawTail();
        };
        CarTail.prototype.drawTail = function() {
            if (this.points.length === 0) {
                return;
            }
            for (var i = 0; i < this.points.length; i++) {
                var scale = 0.2 + (0.8 * (i / this.points.length));
                this.children[i].scale.set(scale, scale);
                this.children[i].position.set(this.points[i].x, this.points[i].y);
            }
            this.updateCache();
        };
        return CarTail;
    }(Phaser.Group));
    Game.CarTail = CarTail;
})(Game || (Game = {}));
var Game;
(function(Game) {
    var Road = /** @class */ (function(_super) {
        __extends(Road, _super);

        function Road(game, x, y, angle, roadElement, texture) {
            var _this = this;
            if (texture) {
                _this = _super.call(this, game, x, y, texture.atlas, texture.frameName) || this;
                _this.tinted = 0;
            } else {
                _this = _super.call(this, game, x, y, roadElement.texture) || this;
                _this.tinted = 1;
            }
            _this.roadElement = roadElement;
            _this.cacheAsBitmap = true;
            _this.angle = angle;
            _this.create();
            return _this;
        }
        Road.prototype.create = function() {
            this.tint = Game.LevelBuilder.getInstance().colorRoad;
            this.body = new Phaser.Physics.Box2D.Body(this.game, null, this.x, this.y, 0);
            this.body.setChain(this.roadElement.arrayBody, 0, this.roadElement.stepsInside);
            this.body.addChain(this.roadElement.arrayBody, this.roadElement.stepsInside, this.roadElement.stepsOutside);
            this.body.angle = this.angle;
        };
        Road.prototype.activate = function(x, y, angle) {
            if (this.tinted === 1) {
                this.tint = Game.LevelBuilder.getInstance().colorRoad;
            } else if (this.tinted === 2) {
                this.tint = Game.LevelBuilder.getInstance().colorBackground;
            }
            this.visible = true;
            this.x = x;
            this.y = y;
            this.angle = angle;
            this.body.x = x;
            this.body.y = y;
            this.body.angle = angle;
        };
        Road.prototype.deactivate = function() {
            this.x = Game.Main.gameHalfWidthMax;
            this.y = Game.Constants.GAME_MAX_HEIGHT * 2;
            this.body.x = this.x;
            this.body.y = this.y;
            this.visible = false;
        };
        Road.prototype.stop = function() {};
        Road.prototype.destroy = function() {
            _super.prototype.destroy.call(this);
            this.body = null;
            this.roadElement = null;
        };
        return Road;
    }(Phaser.Image));
    Game.Road = Road;
})(Game || (Game = {}));
var Game;
(function(Game) {
    var RoadCircle = /** @class */ (function(_super) {
        __extends(RoadCircle, _super);

        function RoadCircle(game, x, y, roadElement) {
            var _this = _super.call(this, game, x, y, 0, roadElement) || this;
            _this.anchor.set(0.5, 0.5);
            _this.tinted = 2;
            return _this;
        }
        RoadCircle.prototype.create = function() {
            this.tint = Game.LevelBuilder.getInstance().colorBackground;
            this.body = new Phaser.Physics.Box2D.Body(this.game, null, this.x, this.y, 0);
            this.body.setCircle(this.roadElement.radius);
            this.body.angle = this.angle;
        };
        return RoadCircle;
    }(Game.Road));
    Game.RoadCircle = RoadCircle;
})(Game || (Game = {}));
var Game;
(function(Game) {
    var RoadCoin = /** @class */ (function(_super) {
        __extends(RoadCoin, _super);

        function RoadCoin(game, x, y, roadElement) {
            var _this = _super.call(this, game, x, y, 0, roadElement, {
                atlas: 'game',
                frameName: 'coin instance 10000'
            }) || this;
            _this.counter = 0;
            _this.collectAnim = false;
            _this.animations.add('anim', Game.PhaserTools.getAnimationFrames('coin', 0, 13), 20, true);
            _this.animations.add('collect', Game.PhaserTools.getAnimationFrames('coin', 14, 14));
            _this.animations.play('anim');
            _this.anchor.set(0.5, 0.6);
            return _this;
        }
        RoadCoin.prototype.create = function() {
            this.body = new Phaser.Physics.Box2D.Body(this.game, null, this.x, this.y, 0);
            this.body.setCircle(this.roadElement.radius);
            this.body.angle = this.angle;
            this.body.sensor = true;
            this.body.data.SetUserData({
                name: 'coin',
                link: this
            });
        };
        RoadCoin.prototype.activate = function(x, y, angle) {
            _super.prototype.activate.call(this, x, y, angle);
            this.animations.play('anim');
            this.alpha = 1;
            this.counter = 0;
            this.collectAnim = false;
        };
        RoadCoin.prototype.contact = function() {
            if (this.collectAnim === true) {
                return;
            }
            //play anim then deactivate
            Game.LevelBuilder.getInstance().addMoney(1);
            Game.SoundManager.playSFX('collect');
            this.animations.play('collect');
            this.collectAnim = true;
        };
        RoadCoin.prototype.update = function() {
            if (this.visible === true && this.collectAnim === true) {
                this.counter += 1;
                this.y -= 7;
                this.alpha -= 0.04;
                if (this.counter >= 25) {
                    this.collected();
                }
            }
        };
        RoadCoin.prototype.collected = function() {
            this.deactivate();
            Game.LevelBuilder.getInstance().gameBuilder.removeRoad(this);
        };
        RoadCoin.prototype.deactivate = function() {
            _super.prototype.deactivate.call(this);
            this.animations.stop();
        };
        RoadCoin.prototype.stop = function() {
            _super.prototype.stop.call(this);
            this.animations.stop();
        };
        return RoadCoin;
    }(Game.Road));
    Game.RoadCoin = RoadCoin;
})(Game || (Game = {}));
var Game;
(function(Game) {
    var RoadRecordLine = /** @class */ (function(_super) {
        __extends(RoadRecordLine, _super);

        function RoadRecordLine(game, x, y, angle) {
            var _this = _super.call(this, game, x, y, angle, new Game.RoadElement(Game.RoadType.recordLine, null, null, 0, 0, 0), {
                atlas: 'game',
                frameName: 'recordLine instance 10000'
            }) || this;
            _this.cacheAsBitmap = false;
            _this.anchor.setTo(0.5, 0.5);
            return _this;
        }
        RoadRecordLine.prototype.create = function() {};
        RoadRecordLine.prototype.activate = function(x, y, angle) {
            this.tint = Game.LevelBuilder.getInstance().colorBackground;
            this.visible = true;
            this.x = x;
            this.y = y;
            this.angle = angle;
        };
        RoadRecordLine.prototype.deactivate = function() {
            this.x = Game.Main.gameHalfWidthMax;
            this.y = Game.Constants.GAME_MAX_HEIGHT * 2;
            this.visible = false;
        };
        RoadRecordLine.prototype.stop = function() {};
        RoadRecordLine.prototype.destroy = function() {
            _super.prototype.destroy.call(this);
        };
        return RoadRecordLine;
    }(Game.Road));
    Game.RoadRecordLine = RoadRecordLine;
})(Game || (Game = {}));
var Game;
(function(Game) {
    var RoadShield = /** @class */ (function(_super) {
        __extends(RoadShield, _super);

        function RoadShield(game, x, y, roadElement) {
            var _this = _super.call(this, game, x, y, 0, roadElement, {
                atlas: 'game',
                frameName: 'shield instance 10000'
            }) || this;
            _this.counter = 0;
            _this.collectAnim = false;
            _this.anchor.set(0.5, 0.5);
            _this.startAnim();
            return _this;
        }
        RoadShield.prototype.create = function() {
            this.body = new Phaser.Physics.Box2D.Body(this.game, null, this.x, this.y, 0);
            this.body.setCircle(this.roadElement.radius);
            this.body.angle = this.angle;
            this.body.sensor = true;
            this.body.data.SetUserData({
                name: 'shield',
                link: this
            });
        };
        RoadShield.prototype.activate = function(x, y, angle) {
            _super.prototype.activate.call(this, x, y, angle);
            this.frameName = 'shield instance 10000';
            this.startAnim();
        };
        RoadShield.prototype.startAnim = function() {
            this.counter = 0;
            this.collectAnim = false;
            this.alpha = 1;
            this.scale.set(1, 1);
            this.game.add.tween(this.scale).to({
                x: 0.8,
                y: 0.8
            }, 500, Phaser.Easing.Linear.None, true, 0, -1, true);
        };
        RoadShield.prototype.contact = function() {
            if (this.collectAnim === true) {
                return;
            }
            //play anim then deactivate
            this.frameName = 'shieldBig instance 10000';
            this.game.tweens.removeFrom(this.scale);
            this.scale.set(0.2, 0.2);
            this.collectAnim = true;
        };
        RoadShield.prototype.update = function() {
            if (this.visible === true && this.collectAnim === true) {
                this.counter += 1;
                this.scale.x += 0.09;
                this.scale.y = this.scale.x;
                this.alpha -= 0.065;
                if (this.counter >= 16) {
                    this.collected();
                }
            }
        };
        RoadShield.prototype.collected = function() {
            this.deactivate();
            Game.LevelBuilder.getInstance().gameBuilder.removeRoad(this);
        };
        RoadShield.prototype.deactivate = function() {
            _super.prototype.deactivate.call(this);
            this.game.tweens.removeFrom(this);
            if (Game.LevelBuilder.getInstance().gameBuilder.car.isShield !== Game.Bool3.true) {
                Game.LevelBuilder.getInstance().gameBuilder.canCreateShield = true;
            }
        };
        RoadShield.prototype.stop = function() {
            _super.prototype.stop.call(this);
            this.game.tweens.removeFrom(this);
        };
        return RoadShield;
    }(Game.Road));
    Game.RoadShield = RoadShield;
})(Game || (Game = {}));
var Game;
(function(Game) {
    var RoadSlew = /** @class */ (function(_super) {
        __extends(RoadSlew, _super);

        function RoadSlew(game, x, y, angle, roadElement) {
            var _this = _super.call(this, game, x, y, angle, roadElement) || this;
            _this.doorOpen = false;
            _this.recordOver = false;
            _this.rotationCount = 0;
            _this.roadWidth = Game.RoadCreator.roadWidth;
            _this.roadWidth05 = _this.roadWidth / 2;
            var arrBody = [-_this.roadWidth05 - roadElement.radius + Game.RoadCreator.slewOffset, -_this.roadWidth05,
                _this.roadWidth05 + Game.RoadCreator.slewOffset, -_this.roadWidth05,
                _this.roadWidth05 + Game.RoadCreator.slewOffset, _this.roadWidth05, -_this.roadWidth05 - roadElement.radius + Game.RoadCreator.slewOffset, _this.roadWidth05
            ];
            var doorPos = _this.calcDoorPos();
            _this.bodyDoor = new Phaser.Physics.Box2D.Body(game, null, doorPos.x, doorPos.y, 1);
            _this.bodyDoor.setChain(arrBody, 0, 2);
            _this.bodyDoor.addChain(arrBody, 2, 2);
            _this.bodyDoor.addRectangle(_this.roadWidth, 10, 0, arrBody[1] + Game.RoadCreator.roadWidth + 40).SetSensor(true);
            _this.bodyDoor.angle = _this.startDoorAngle;
            _this.bodyDoor.data.SetUserData({
                name: 'slew',
                link: _this
            });
            _this.imageDoor = game.make.graphics(doorPos.x, doorPos.y);
            _this.drawDoor();
            _this.imageDoor.angle = _this.startDoorAngle;
            _this.imageDoor.cacheAsBitmap = true;
            Game.LevelBuilder.getInstance().gameBuilder.addChildBelowCar(_this.imageDoor);
            return _this;
        }
        RoadSlew.prototype.contact = function() {
            if (this.rotationCount === 0) {
                this.rotationCount = 1;
            }
        };
        RoadSlew.prototype.update = function() {
            _super.prototype.update.call(this);
            if (this.rotationCount === 1) {
                this.doorOpen = true;
                this.rotationCount = 2;
                this.bodyDoor.angle = this.endDoorAngle;
                Game.LevelBuilder.getInstance().gameBuilder.setChildAboveCar(this.imageDoor);
                if (this.recordOver === true) {
                    Game.LevelBuilder.getInstance().gameBuilder.setRecordLineOver(this.imageDoor);
                    this.recordOver = false;
                }
            }
        };
        RoadSlew.prototype.drawDoor = function() {
            this.imageDoor.clear();
            this.imageDoor.beginFill(0x333333, 0.5);
            this.imageDoor.drawRect(-this.roadWidth05, -this.roadWidth05 - Game.RoadCreator.slewOffset, this.roadWidth, Game.RoadCreator.slewOffset);
            this.imageDoor.drawRect(-this.roadWidth05, this.roadWidth05, this.roadWidth, Game.RoadCreator.slewOffset);
            this.imageDoor.beginFill(Game.LevelBuilder.getInstance().colorRoad, 0.8);
            this.imageDoor.drawRect(-this.roadWidth05 - 15, -this.roadWidth05, this.roadWidth + 30, this.roadWidth);
            this.imageDoor.endFill();
        };
        RoadSlew.prototype.activate = function(x, y, angle) {
            _super.prototype.activate.call(this, x, y, angle);
            this.drawDoor();
            this.recordOver = false;
            this.doorOpen = false;
            var doorPos = this.calcDoorPos();
            this.bodyDoor.x = doorPos.x;
            this.bodyDoor.y = doorPos.y;
            this.bodyDoor.angle = this.startDoorAngle;
            this.imageDoor.x = doorPos.x;
            this.imageDoor.y = doorPos.y;
            this.imageDoor.angle = this.startDoorAngle;
            this.imageDoor.visible = true;
            this.rotationCount = 0;
            Game.LevelBuilder.getInstance().gameBuilder.setChildBelowCar(this.imageDoor);
        };
        RoadSlew.prototype.deactivate = function() {
            _super.prototype.deactivate.call(this);
            this.imageDoor.visible = false;
            this.bodyDoor.x = this.x;
            this.bodyDoor.y = this.y;
            this.recordOver = false;
        };
        RoadSlew.prototype.calcDoorPos = function() {
            if (this.angle === 90) {
                this.startDoorAngle = 90;
                this.endDoorAngle = 0;
            } else if (this.angle === 180 || this.angle === -180) {
                this.startDoorAngle = -90;
                this.endDoorAngle = 0;
            } else if (this.angle === 0 || this.angle === -90) {
                this.startDoorAngle = 0;
                this.endDoorAngle = -90;
            }
            var doorX = this.roadWidth * 1.5 + this.roadElement.radius * 2 - Game.RoadCreator.slewOffset * 2;
            var doorY = this.roadWidth / 2 + Game.RoadCreator.slewOffset;
            return Game.Tools.rotatePointByAnglePIXI(this.x, this.y, this.x + doorX, this.y + doorY, this.rotation);
        };
        RoadSlew.prototype.destroy = function() {
            _super.prototype.destroy.call(this);
            this.bodyDoor = null;
            this.imageDoor = null;
        };
        return RoadSlew;
    }(Game.Road));
    Game.RoadSlew = RoadSlew;
})(Game || (Game = {}));
var Game;
(function(Game) {
    var RoadColors = /** @class */ (function() {
        function RoadColors() {
            this.colors = [
                0x664B60, 0xDBBB74,
                0x633E5A, 0xCB95AA,
                0xFDAE55, 0x658CC8,
                0x62A399, 0xCD8FA3,
                0xFEBB79, 0xCC773C,
                0x8C6A5C, 0xDDDCDC,
                0x67861F, 0xDACDD0,
                0xCE5A6A, 0xE3ABCA,
                0x7CB2D1, 0x9B726E,
                0xAB6E50, 0xE4B18E,
                0x34572A, 0xD8C896,
                0x8DBA69, 0x939393,
                0x909700, 0xF9C099,
                0xF9DF7B, 0x66921B,
                0xF07D10, 0x5B8300,
                0xFFC87C, 0xBEA698,
                0xCAD877, 0x1D5B00,
                0xB0B5B5, 0xF4841A,
                0xECBD8B, 0x004C56,
                0xC14E76, 0xF7B2CF,
                0xFFE6A3, 0x879163,
                0x84CDED, 0x736056,
                0x7D5023, 0xF87070,
                0xB1A671, 0xB7CACA,
                0xF5D8AD, 0xBE865C,
                0x626C7A, 0xE38D83,
                0x9BD8DA, 0xFFB62A,
                0x98514B, 0xF8B786,
                0x00332B, 0xE7B382,
                0x7E3D4A, 0xE2C9C3
            ];
            this.colorsID = new Array();
        }
        RoadColors.prototype.getColor = function() {
            if (this.colorsID.length === 0) {
                for (var i = 0; i < this.colors.length / 2; i++) {
                    this.colorsID.push(i);
                }
            }
            var id = Game.Tools.random(0, this.colorsID.length - 1);
            var variant = this.colorsID[id] * 2;
            this.colorsID.splice(id, 1);
            return {
                bg: this.colors[variant],
                road: this.colors[variant + 1]
            };
        };
        return RoadColors;
    }());
    Game.RoadColors = RoadColors;
})(Game || (Game = {}));
var Game;
(function(Game) {
    var RoadCreator = /** @class */ (function() {
        function RoadCreator(game) {
            this.game = game;
            this.elements = {};
            var radius;
            for (var i = RoadCreator.minRoadRadius; i <= RoadCreator.maxRoadRadius; i++) {
                radius = i * 10;
                this.elements['1_' + radius] = this.drawBend(RoadCreator.roadWidth, radius);
            }
            this.elements['0_' + RoadCreator.straightStartRadius] = this.drawStraight(RoadCreator.roadWidth, RoadCreator.straightStartRadius);
            for (var i = RoadCreator.minStraightRoadRadius; i <= RoadCreator.maxRoadRadius; i++) {
                radius = i * 10;
                this.elements['0_' + radius] = this.drawStraight(RoadCreator.roadWidth, radius);
            }
            RoadCreator.slewRadiusOffset = RoadCreator.slewRadius + RoadCreator.slewOffset;
            this.elements['2_' + RoadCreator.slewRadiusOffset] = this.drawSlew(RoadCreator.roadWidth, RoadCreator.slewRadiusOffset);
            this.elements['3_' + RoadCreator.circleRadius] = this.drawCircle(RoadCreator.circleRadius);
            this.elements['4_' + RoadCreator.coinRadius] = new Game.RoadElement(Game.RoadType.coin, null, null, 0, 0, RoadCreator.coinRadius);
            this.elements['5_' + RoadCreator.shieldRadius] = new Game.RoadElement(Game.RoadType.shield, null, null, 0, 0, RoadCreator.shieldRadius);
        }
        RoadCreator.prototype.getElement = function(type, radius) {
            if (radius === void 0) {
                radius = 0;
            }
            return this.elements['' + type + '_' + radius];
        };
        RoadCreator.prototype.drawStraight = function(roadWidth, width) {
            var arrBody = [0, 0, width, 0, width, roadWidth, 0, roadWidth];
            var stepsInOutside = 2;
            var bmpd = this.game.make.bitmapData(width, roadWidth);
            bmpd.context.beginPath();
            bmpd.context.fillStyle = '#FFFFFF';
            bmpd.context.moveTo(0, 0);
            bmpd.context.lineTo(width, 0);
            bmpd.context.lineTo(width, roadWidth);
            bmpd.context.lineTo(0, roadWidth);
            bmpd.context.lineTo(0, 0);
            bmpd.context.fill();
            return new Game.RoadElement(Game.RoadType.straight, bmpd, arrBody, stepsInOutside, stepsInOutside, width);
        };
        RoadCreator.prototype.drawBend = function(roadWidth, radius) {
            var arrBody = new Array();
            var size = radius + roadWidth;
            var steps = 30;
            var stepsInside = 3; //6
            if (radius >= 70) {
                stepsInside = 6;
            }
            var stepsOutside = 6;
            var bmpd = this.game.make.bitmapData(size, size);
            bmpd.context.beginPath();
            bmpd.context.fillStyle = '#FFFFFF';
            bmpd.context.moveTo(radius, 0);
            this.drawArc(bmpd, arrBody, radius, 0, 90, steps, steps / stepsInside);
            this.drawArc(bmpd, arrBody, size, 90, 0, steps, steps / stepsOutside);
            bmpd.context.lineTo(radius, 0);
            bmpd.context.fill();
            return new Game.RoadElement(Game.RoadType.bend, bmpd, arrBody, stepsInside + 1, stepsOutside + 1, radius);
        };
        RoadCreator.prototype.drawArc = function(sprite, arrBody, radius, angle_from, angle_to, steps, physSteps, x, y) {
            if (x === void 0) {
                x = 0;
            }
            if (y === void 0) {
                y = 0;
            }
            var angle_diff = (angle_to - angle_from) / steps;
            for (var i = 0; i <= steps; i++) {
                var angle = (angle_from + (angle_diff * i)) * Game.Tools.degToRad;
                var newX = x + Math.cos(angle) * radius;
                var newY = y + Math.sin(angle) * radius;
                if (i % physSteps === 0) {
                    arrBody.push(newX, newY);
                }
                if (i === 0 && angle_diff > 0) {
                    continue;
                }
                sprite.context.lineTo(newX, newY);
            }
        };
        RoadCreator.prototype.drawSlew = function(roadWidth, radius) {
            var offset = RoadCreator.slewOffset;
            radius -= offset;
            var arrBody = new Array();
            var size = radius + roadWidth;
            var steps = 90;
            var stepsInside = 6;
            var stepsOutside = 15;
            var startX = size;
            var startY = size + offset;
            var bmpd = this.game.make.bitmapData(size * 2 + offset, size * 2 + offset);
            bmpd.context.beginPath();
            bmpd.context.fillStyle = '#FFFFFF';
            bmpd.context.moveTo(startX + radius, 0);
            this.drawArc(bmpd, arrBody, radius, 0, 270, steps, steps / stepsInside, startX, startY);
            bmpd.context.lineTo(startX * 2 + offset, roadWidth + offset);
            bmpd.context.lineTo(startX * 2 + offset, offset);
            this.drawArc(bmpd, arrBody, size, 270, 0, steps, steps / stepsOutside, startX, startY);
            bmpd.context.lineTo(startX + size, 0);
            bmpd.context.lineTo(startX + radius, 0);
            bmpd.context.fill();
            return new Game.RoadElement(Game.RoadType.slew, bmpd, arrBody, stepsInside + 1, stepsOutside + 1, radius + offset);
        };
        RoadCreator.prototype.drawCircle = function(radius) {
            var bmpd = this.game.make.bitmapData(radius * 2, radius * 2);
            bmpd.context.beginPath();
            bmpd.context.fillStyle = '#FFFFFF';
            bmpd.context.arc(radius, radius, radius, 0, Game.Tools.PI2, true);
            bmpd.context.fill();
            return new Game.RoadElement(Game.RoadType.circle, bmpd, null, 0, 0, radius);
        };
        RoadCreator.roadWidth = 120;
        RoadCreator.straightStartRadius = 1014;
        RoadCreator.minStraightRoadRadius = 4;
        RoadCreator.minRoadRadius = 2;
        RoadCreator.maxRoadRadius = 14;
        RoadCreator.circleRadius = 28;
        RoadCreator.slewRadius = 20;
        RoadCreator.slewOffset = 15;
        RoadCreator.coinRadius = 12;
        RoadCreator.shieldRadius = 12;
        return RoadCreator;
    }());
    Game.RoadCreator = RoadCreator;
})(Game || (Game = {}));
var Game;
(function(Game) {
    var RoadElement = /** @class */ (function() {
        function RoadElement(type, texture, arrayBody, stepsInside, stepsOutside, radius) {
            this.type = type;
            this.texture = texture;
            this.arrayBody = arrayBody;
            this.stepsInside = stepsInside;
            this.stepsOutside = stepsOutside;
            this.radius = radius;
        }
        return RoadElement;
    }());
    Game.RoadElement = RoadElement;
})(Game || (Game = {}));
var Game;
(function(Game) {
    var RoadLocation = /** @class */ (function() {
        function RoadLocation() {
            this.posOff = 1;
            this.roadWidth = Game.RoadCreator.roadWidth;
            this.roadWidth2 = this.roadWidth * 2;
            this.slewOffset = Game.RoadCreator.slewOffset;
            this.slewOffset2 = this.slewOffset * 2;
        }
        RoadLocation.prototype.getLocation = function(prevType, prevX, prevY, prevA, prevSize, newSize, newType, forceAngle) {
            if (prevType === Game.RoadType.bend) {
                if (newType === Game.RoadType.bend) {
                    return this.fromBendToBend(prevX, prevY, prevA, prevSize, newSize, forceAngle);
                } else if (newType === Game.RoadType.straight) {
                    return this.fromBendToStraight(prevX, prevY, prevA, prevSize, newSize);
                } else if (newType === Game.RoadType.slew) {
                    return this.fromBendToSlew(prevX, prevY, prevA, prevSize, newSize);
                } else if (newType === Game.RoadType.circle) {
                    return this.fromBendToObject(Game.Tools.randomBool() === false ? prevSize : prevSize + this.roadWidth, prevX, prevY, prevA);
                }
                return this.fromBendToObject(Game.Tools.random(prevSize + newSize, prevSize + this.roadWidth - newSize), prevX, prevY, prevA);
            } else if (prevType === Game.RoadType.straight) {
                if (newType === Game.RoadType.bend) {
                    return this.fromStraightToBend(prevX, prevY, prevA, prevSize, newSize);
                } else if (newType === Game.RoadType.slew) {
                    return this.fromStraightToSlew(prevX, prevY, prevA, prevSize, newSize);
                } else if (newType === Game.RoadType.circle) {
                    return this.fromStraightToObject(Game.Tools.randomBool() === false ? 0 : this.roadWidth, prevX, prevY, prevA, prevSize);
                }
                return this.fromStraightToObject(Game.Tools.random(newSize, this.roadWidth - newSize), prevX, prevY, prevA, prevSize);
            } else if (prevType === Game.RoadType.slew) {
                if (newType === Game.RoadType.bend) {
                    return this.fromSlewToBend(prevX, prevY, prevA, prevSize, newSize, forceAngle);
                } else if (newType === Game.RoadType.straight) {
                    return this.fromSlewToStraight(prevX, prevY, prevA, prevSize, newSize);
                } else if (newType === Game.RoadType.slew) {
                    return this.fromSlewToSlew(prevX, prevY, prevA, prevSize, newSize);
                } else if (newType === Game.RoadType.circle) {
                    return this.fromSlewToObject(Game.Tools.randomBool() === false ? prevSize - this.slewOffset : prevSize + this.roadWidth - this.slewOffset, prevX, prevY, prevA, prevSize);
                }
                return this.fromSlewToObject(Game.Tools.random(prevSize - this.slewOffset + newSize, prevSize + this.roadWidth - this.slewOffset - newSize), prevX, prevY, prevA, prevSize);
            }
            return null;
        };
        RoadLocation.prototype.fromBendToBend = function(prevX, prevY, prevA, prevSize, newSize, forceAngle) {
            var newAngle;
            var newX;
            var newY;
            if (prevA === 0) {
                if (forceAngle === 180) {
                    newAngle = 180;
                    newX = prevX + prevSize + newSize + this.roadWidth;
                } else {
                    if (Game.Tools.randomBool() === true) {
                        newAngle = 180;
                        newX = prevX + prevSize + newSize + this.roadWidth;
                    } else {
                        newAngle = -90;
                        newX = prevX + prevSize - newSize;
                    }
                }
                newY = prevY + this.posOff;
            } else if (prevA === 90) {
                if (forceAngle === -90) {
                    newAngle = -90;
                    newX = prevX - prevSize - newSize - this.roadWidth;
                } else {
                    if (Game.Tools.randomBool() === true) {
                        newAngle = 180;
                        newX = prevX - prevSize + newSize;
                    } else {
                        newAngle = -90;
                        newX = prevX - prevSize - newSize - this.roadWidth;
                    }
                }
                newY = prevY + this.posOff;
            } else if (prevA === -90) {
                newAngle = 90;
                newX = prevX + this.posOff;
                newY = prevY - prevSize - newSize - this.roadWidth;
            } else if (Game.Tools.abs(prevA) === 180) {
                newAngle = 0;
                newX = prevX - this.posOff;
                newY = prevY - prevSize - newSize - this.roadWidth;
            }
            return {
                x: newX,
                y: newY,
                angle: newAngle
            };
        };
        RoadLocation.prototype.fromBendToStraight = function(prevX, prevY, prevA, prevSize, newSize) {
            var newAngle;
            var newX;
            var newY;
            if (prevA === 0) {
                newAngle = 90;
                newX = prevX + prevSize + this.roadWidth;
                newY = prevY - newSize + this.posOff;
            } else if (prevA === 90) {
                newAngle = -90;
                newX = prevX - prevSize - this.roadWidth;
                newY = prevY + this.posOff;
            } else if (prevA === -90) {
                newAngle = 0;
                newX = prevX - newSize + this.posOff;
                newY = prevY - prevSize - this.roadWidth;
            } else if (Game.Tools.abs(prevA) === 180) {
                newAngle = 180;
                newX = prevX + newSize - this.posOff;
                newY = prevY - prevSize;
            }
            return {
                x: newX,
                y: newY,
                angle: newAngle
            };
        };
        RoadLocation.prototype.fromBendToSlew = function(prevX, prevY, prevA, prevSize, newSize) {
            var newAngle;
            var newX;
            var newY;
            if (prevA === 0) {
                if (Game.Tools.randomBool() === true) {
                    newAngle = 90;
                    newX = prevX + prevSize + this.roadWidth + this.slewOffset;
                    newY = prevY - newSize * 2 - this.roadWidth2 + this.slewOffset + this.posOff;
                } else {
                    newAngle = 180;
                    newX = prevX + prevSize + newSize * 2 + this.roadWidth2 - this.slewOffset2;
                    newY = prevY + this.posOff;
                }
            } else if (prevA === 90) {
                if (Game.Tools.randomBool() === true) {
                    newAngle = 180;
                    newX = prevX + newSize * 2 + this.roadWidth - prevSize - this.slewOffset2;
                    newY = prevY + this.posOff;
                } else {
                    newAngle = 90;
                    newX = prevX - prevSize + this.slewOffset;
                    newY = prevY - newSize * 2 - this.roadWidth2 + this.slewOffset + this.posOff;
                }
            } else if (prevA === -90) {
                newAngle = 0;
                newX = prevX - newSize * 2 - this.roadWidth2 + this.slewOffset + this.posOff;
                newY = prevY - prevSize - this.roadWidth - this.slewOffset;
            } else if (Game.Tools.abs(prevA) === 180) {
                newAngle = -90;
                newX = prevX - this.posOff;
                newY = prevY + newSize * 2 + this.roadWidth - prevSize - this.slewOffset2;
            }
            return {
                x: newX,
                y: newY,
                angle: newAngle
            };
        };
        RoadLocation.prototype.fromStraightToBend = function(prevX, prevY, prevA, prevSize, newSize) {
            var newAngle;
            var newX;
            var newY;
            if (prevA === 0) {
                newAngle = 90;
                newX = prevX + this.posOff;
                newY = prevY - newSize;
            } else if (prevA === 90) {
                if (Game.Tools.randomBool() === true) {
                    newAngle = 180;
                    newX = prevX + newSize;
                } else {
                    newAngle = -90;
                    newX = prevX - newSize - this.roadWidth;
                }
                newY = prevY + this.posOff;
            } else if (prevA === -90) {
                if (Game.Tools.randomBool() === true) {
                    newAngle = 180;
                    newX = prevX + this.roadWidth + newSize;
                } else {
                    newAngle = -90;
                    newX = prevX - newSize;
                }
                newY = prevY - prevSize + this.posOff;
            } else if (prevA === 180 || prevA === -180) {
                newAngle = 0;
                newX = prevX - this.posOff;
                newY = prevY - newSize - this.roadWidth;
            }
            return {
                x: newX,
                y: newY,
                angle: newAngle
            };
        };
        RoadLocation.prototype.fromStraightToSlew = function(prevX, prevY, prevA, prevSize, newSize) {
            var newAngle;
            var newX;
            var newY;
            if (prevA === 0) {
                newAngle = 0;
                newX = prevX - newSize * 2 - this.roadWidth2 + this.slewOffset + this.posOff;
                newY = prevY - this.slewOffset;
            } else if (prevA === 90) {
                if (Game.Tools.randomBool() === true) {
                    newAngle = 180;
                    newX = prevX + newSize * 2 + this.roadWidth - this.slewOffset2;
                    newY = prevY + this.posOff;
                } else {
                    newAngle = 90;
                    newX = prevX + this.slewOffset;
                    newY = prevY - newSize * 2 - this.roadWidth2 + this.slewOffset + this.posOff;
                }
            } else if (prevA === -90) {
                if (Game.Tools.randomBool() === true) {
                    newAngle = 180;
                    newX = prevX + this.roadWidth2 + newSize * 2 - this.slewOffset2;
                    newY = prevY - prevSize + this.posOff;
                } else {
                    newAngle = 90;
                    newX = prevX + this.slewOffset + this.roadWidth;
                    newY = prevY - this.slewOffset - this.roadWidth2 - newSize - prevSize + this.posOff;
                }
            } else if (prevA === 180 || prevA === -180) {
                newAngle = -90;
                newX = prevX - this.posOff;
                newY = prevY + newSize * 2 + this.roadWidth - this.slewOffset2;
            }
            return {
                x: newX,
                y: newY,
                angle: newAngle
            };
        };
        RoadLocation.prototype.fromSlewToBend = function(prevX, prevY, prevA, prevSize, newSize, forceAngle) {
            var newAngle;
            var newX;
            var newY;
            if (prevA === 0) {
                if (forceAngle === -90) {
                    newAngle = -90;
                    newX = prevX + prevSize * 2 + this.roadWidth - newSize - this.slewOffset2;
                } else {
                    if (Game.Tools.randomBool() === true) {
                        newAngle = 180;
                        newX = prevX + prevSize * 2 + newSize + this.roadWidth2 - this.slewOffset2;
                    } else {
                        newAngle = -90;
                        newX = prevX + prevSize * 2 + this.roadWidth - newSize - this.slewOffset2;
                    }
                }
                newY = prevY + this.posOff;
            } else if (prevA === 90) {
                newAngle = 0;
                newX = prevX - this.posOff;
                newY = prevY + this.roadWidth - newSize + prevSize * 2 - this.slewOffset2;
            } else if (prevA === -90) {
                if (forceAngle === 180) {
                    newAngle = 180;
                    newX = prevX + newSize + this.roadWidth + this.slewOffset;
                } else {
                    if (Game.Tools.randomBool() === true) {
                        newAngle = 180;
                        newX = prevX + newSize + this.roadWidth + this.slewOffset;
                    } else {
                        newAngle = -90;
                        newX = prevX - newSize + this.slewOffset;
                    }
                }
                newY = prevY - prevSize * 2 - this.roadWidth2 + this.slewOffset + this.posOff;
            } else if (prevA === 180 || prevA === -180) {
                newAngle = 90;
                newX = prevX - this.roadWidth2 - prevSize * 2 + this.slewOffset + this.posOff;
                newY = prevY - this.roadWidth - newSize - this.slewOffset;
            }
            return {
                x: newX,
                y: newY,
                angle: newAngle
            };
        };
        RoadLocation.prototype.fromSlewToStraight = function(prevX, prevY, prevA, prevSize, newSize) {
            var newAngle;
            var newX;
            var newY;
            if (prevA === 0) {
                newAngle = -90;
                newX = prevX + this.roadWidth + prevSize * 2 - this.slewOffset2;
                newY = prevY + this.posOff;
            } else if (prevA === 90) {
                newAngle = 180;
                newX = prevX + newSize - this.posOff;
                newY = prevY + prevSize * 2 + this.roadWidth2 - this.slewOffset2;
            } else if (prevA === -90) {
                newAngle = 90;
                newX = prevX + this.roadWidth + this.slewOffset;
                newY = prevY - prevSize * 2 - this.roadWidth2 - newSize + this.slewOffset + this.posOff;
            } else if (prevA === 180 || prevA === -180) {
                newAngle = 0;
                newX = prevX - prevSize * 2 - this.roadWidth2 - newSize + this.slewOffset + this.posOff;
                newY = prevY - this.roadWidth - this.slewOffset;
            }
            return {
                x: newX,
                y: newY,
                angle: newAngle
            };
        };
        RoadLocation.prototype.fromSlewToSlew = function(prevX, prevY, prevA, prevSize, newSize) {
            var newAngle;
            var newX;
            var newY;
            if (prevA === 0) {
                if (Game.Tools.randomBool() === true) {
                    newAngle = 180;
                    newX = prevX + prevSize * 2 + newSize * 2 + this.roadWidth * 3 - this.slewOffset * 4;
                    newY = prevY + this.posOff;
                } else {
                    newAngle = 90;
                    newX = prevX + prevSize * 2 + this.roadWidth2 - this.slewOffset;
                    newY = prevY - this.roadWidth2 - newSize * 2 + this.slewOffset + this.posOff;
                }
            } else if (prevA === 90) {
                newAngle = -90;
                newX = prevX - this.posOff;
                newY = prevY + prevSize * 2 + newSize * 2 + this.roadWidth * 3 - this.slewOffset * 4;
            } else if (prevA === -90) {
                if (Game.Tools.randomBool() === true) {
                    newAngle = 180;
                    newX = prevX + newSize * 2 + this.roadWidth2 - this.slewOffset;
                    newY = prevY - prevSize * 2 - this.roadWidth2 + this.slewOffset + this.posOff;
                } else {
                    newAngle = 90;
                    newX = prevX + this.roadWidth + this.slewOffset2;
                    newY = prevY - prevSize * 2 - newSize * 2 - this.roadWidth * 4 + this.slewOffset2 + this.posOff;
                }
            } else if (prevA === 180 || prevA === -180) {
                newAngle = 0;
                newX = prevX - prevSize * 2 - newSize * 2 - this.roadWidth * 4 + this.slewOffset2 + this.posOff;
                newY = prevY - this.roadWidth - this.slewOffset2;
            }
            return {
                x: newX,
                y: newY,
                angle: newAngle
            };
        };
        //
        RoadLocation.prototype.fromBendToObject = function(size, prevX, prevY, prevA) {
            var randomA = Game.Tools.toRad(Game.Tools.random(0, 90));
            var newX = prevX + Math.sin(randomA) * size;
            var newY = prevY + Math.cos(randomA) * size;
            var newPos = Game.Tools.rotatePointByAnglePIXI(prevX, prevY, newX, newY, Game.Tools.toRad(prevA));
            return {
                x: newPos.x,
                y: newPos.y,
                angle: 0
            };
        };
        RoadLocation.prototype.fromStraightToObject = function(size, prevX, prevY, prevA, prevSize) {
            var newX = prevX + Game.Tools.random(0, prevSize);
            var newY = prevY + size;
            var newPos = Game.Tools.rotatePointByAnglePIXI(prevX, prevY, newX, newY, Game.Tools.toRad(prevA));
            return {
                x: newPos.x,
                y: newPos.y,
                angle: 0
            };
        };
        RoadLocation.prototype.fromSlewToObject = function(size, prevX, prevY, prevA, prevSize) {
            var newX = prevX + this.roadWidth + prevSize - this.slewOffset;
            var newY = prevY + this.roadWidth + prevSize;
            var newPrevPos = Game.Tools.rotatePointByAnglePIXI(prevX, prevY, newX, newY, Game.Tools.toRad(prevA));
            var randomA = Game.Tools.toRad(Game.Tools.random(0, 270));
            newX = newPrevPos.x + Math.cos(randomA) * size;
            newY = newPrevPos.y + Math.sin(randomA) * size;
            var newPos = Game.Tools.rotatePointByAnglePIXI(newPrevPos.x, newPrevPos.y, newX, newY, Game.Tools.toRad(prevA));
            return {
                x: newPos.x,
                y: newPos.y,
                angle: 0
            };
        };
        RoadLocation.prototype.getInputPos = function(currRoad) {
            if (currRoad.roadElement.type === Game.RoadType.bend) {
                return this.getBendPos(currRoad.angle, currRoad.x, currRoad.y, currRoad.roadElement.radius);
            } else if (currRoad.roadElement.type === Game.RoadType.straight) {
                return this.getStraightPos(currRoad.angle, currRoad.x, currRoad.y, currRoad.roadElement.radius);
            } else if (currRoad.roadElement.type === Game.RoadType.slew) {
                return this.getSlewPos(currRoad.angle, currRoad.x, currRoad.y, currRoad.roadElement.radius);
            }
        };
        RoadLocation.prototype.getBendPos = function(angle, x, y, size) {
            var inputX;
            var inputY;
            var inputDir;
            if (Game.Tools.abs(angle) === 180) {
                inputDir = 1;
                inputX = x - size;
                inputY = y;
            } else if (angle === 90) {
                inputDir = 1;
                inputX = x;
                inputY = y + size;
            } else if (angle === -90) {
                inputDir = -1;
                inputX = x + size;
                inputY = y;
            } else if (angle === 0) {
                inputDir = -1;
                inputX = x;
                inputY = y + size;
            }
            return {
                inpX: inputX,
                inpY: inputY,
                inpD: inputDir
            };
        };
        RoadLocation.prototype.getStraightPos = function(angle, x, y, size) {
            var inputX;
            var inputY;
            var inputDirX;
            var inputDirY;
            if (Game.Tools.abs(angle) === 180) {
                inputDirX = 1;
                inputDirY = 0;
                inputX = x - size;
                inputY = y;
            } else if (angle === 0) {
                inputDirX = -1;
                inputDirY = 0;
                inputX = x + size;
                inputY = y;
            } else if (angle === 90) {
                inputDirX = 0;
                inputDirY = -1;
                inputX = x;
                inputY = y + size;
            } else if (angle === -90) {
                inputDirX = 0;
                inputDirY = -1;
                inputX = x;
                inputY = y;
            }
            return {
                inpX: inputX,
                inpY: inputY,
                inpDX: inputDirX,
                inpDY: inputDirY
            };
        };
        RoadLocation.prototype.getSlewPos = function(angle, x, y, size) {
            var inputDir;
            var centerX;
            var centerY;
            var roadWidthSlewRadius = Game.RoadCreator.roadWidth + Game.RoadCreator.slewRadius;
            var rot;
            if (angle === 90) {
                inputDir = -1; //anti clockwise
                centerX = x - Game.RoadCreator.slewOffset - roadWidthSlewRadius;
                centerY = y + roadWidthSlewRadius;
                rot = Game.Tools.PI05;
            } else if (Game.Tools.abs(angle) === 180) {
                inputDir = 1; //clockwise
                centerX = x - roadWidthSlewRadius;
                centerY = y - Game.RoadCreator.slewOffset - roadWidthSlewRadius;
                rot = Game.Tools.PI05;
            } else if (angle === 0) {
                inputDir = -1;
                centerX = x + roadWidthSlewRadius;
                centerY = y + Game.RoadCreator.slewOffset + roadWidthSlewRadius;
                rot = 0;
            } else if (angle === -90) {
                inputDir = 1;
                centerX = x + Game.RoadCreator.slewOffset + roadWidthSlewRadius;
                centerY = y - roadWidthSlewRadius;
                rot = Math.PI;
            }
            var inputX = centerX + Math.cos(rot) * roadWidthSlewRadius;
            var inputY = centerY + Math.sin(rot) * roadWidthSlewRadius;
            return {
                ceX: centerX,
                ceY: centerY,
                inpX: inputX,
                inpY: inputY,
                inpD: inputDir
            };
        };
        return RoadLocation;
    }());
    Game.RoadLocation = RoadLocation;
})(Game || (Game = {}));
var Game;
(function(Game) {
    var BasicSubScene = /** @class */ (function(_super) {
        __extends(BasicSubScene, _super);

        function BasicSubScene(game, name) {
            var _this = _super.call(this, game) || this;
            _this.currScene = name;
            // this.beginFill(0x000000, 0.85);
            // this.drawRect(0,0,Constants.GAME_MAX_WIDTH, Constants.GAME_MAX_HEIGHT);
            // this.endFill();
            // this.inputEnabled = true;
            _this.init();
            return _this;
        }
        BasicSubScene.prototype.init = function() {};
        BasicSubScene.prototype.addMoney = function(value) {};
        BasicSubScene.prototype.customResize = function(shiftX, shiftY) {};
        return BasicSubScene;
    }(Phaser.Group));
    Game.BasicSubScene = BasicSubScene;
})(Game || (Game = {}));
var Game;
(function(Game) {
    var SubDefeat = /** @class */ (function(_super) {
        __extends(SubDefeat, _super);

        function SubDefeat() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.counterUpdate = 0;
            return _this;
        }
        SubDefeat.prototype.init = function() {
            var currScore = Game.LevelBuilder.getInstance().score;
            var txtScore = new Game.BmpdText(this.game, 360, 400, '' + currScore, 100);
            txtScore.anchor.x = 0.5;
            this.addChild(txtScore);
            var bestScore = Game.DataManager.getInstance().getDataNumber('bestScore');
            txtScore = new Game.BmpdText(this.game, 360, 510, Game.Localization.getText('best') + bestScore, 50);
            txtScore.anchor.x = 0.5;
            this.addChild(txtScore);
            if (currScore > bestScore) {
                Game.DataManager.getInstance().saveData('bestScore', currScore);
                txtScore.text = Game.Localization.getText('newRecord');
            }
            txtScore = new Game.BmpdText(this.game, 360, 600, Game.Missions.getInstance().getDescription(Game.Missions.getInstance().currMission) + '\n' + Game.Missions.getInstance().getProgress(), 36);
            txtScore.anchor.x = 0.5;
            txtScore.tint = 0xFFCC00;
            this.addChild(txtScore);
            txtScore = null;
            this.btnMissions = new Game.ButtonText(this.game, 360, 770, 'btn_yellow instance 10000');
            this.btnMissions.addIcon('flag instance 10000', -120, 0);
            this.btnMissions.addText('mission', 30, 5, 50, 0x000000);
            this.addChild(this.btnMissions);
            this.btnMissions.onComplete.addOnce(this.showMission, this);
            this.checkAttentionMission();
            var carID = Game.DataManager.getInstance().getDataNumber('carID');
            this.btnCars = new Game.ButtonText(this.game, 360, 900, 'btn_red instance 10000');
            this.btnCars.addIcon('car' + carID + ' instance 10000', -120, 0);
            this.btnCars.addText('cars', 30, 5, 50, 0x000000);
            this.addChild(this.btnCars);
            this.btnCars.onComplete.addOnce(this.showShop, this);
            this.checkAttentionCars();
            this.btnRetry = new Game.ButtonText(this.game, 415, 1040, 'btn_white2 instance 10000');
            this.btnRetry.addText('retry', 0, 5, 50, 0x000000);
            this.btnRetry.soundName = null;
            this.addChild(this.btnRetry);
            this.btnRetry.onComplete.addOnce(this.showGame, this);
            this.btnMenu = new Game.ButtonScale(this.game, 215, 1040, 'btn_house instance 10000');
            this.addChild(this.btnMenu);
            this.btnMenu.cacheAsBitmap = true;
            this.btnMenu.onComplete.addOnce(this.showMainMenu, this);
            this.btnSound = new Game.ButtonSound(this.game, 0, 0, Game.SoundType.SFX);
            this.btnSound.cacheAsBitmap = true;
            this.addChild(this.btnSound);
            this.btnMusic = new Game.ButtonSound(this.game, 0, 0, Game.SoundType.Music);
            this.btnMusic.cacheAsBitmap = true;
            this.addChild(this.btnMusic);
            this.firstTimeShow = Game.LevelBuilder.getInstance().firstTimeShowDefeat;
            if (this.firstTimeShow === true) {
                Game.LevelBuilder.getInstance().firstTimeShowDefeat = false;
                this.alpha = 0;
                this.game.add.tween(this).to({
                    alpha: 1
                }, 300, null, true);
            }
        };
        SubDefeat.prototype.customResize = function(shiftX, shiftY) {
            this.btnMissions.y = 970 - shiftY;
            this.btnCars.y = 1100 - shiftY;
            this.btnMenu.y = 1240 - shiftY;
            this.btnRetry.y = 1240 - shiftY;
            this.btnSound.position.set(665 - shiftX, 50 + shiftY);
            this.btnMusic.position.set(575 - shiftX, 50 + shiftY);
        };
        SubDefeat.prototype.update = function() {
            _super.prototype.update.call(this);
            if (this.firstTimeShow === true) {
                this.counterUpdate += 1;
                if (this.counterUpdate >= 50) {
                    this.firstTimeShow = false;
                    Game.LevelBuilder.getInstance().stop();
                }
            }
        };
        SubDefeat.prototype.checkAttentionCars = function() {
            if (Game.DataManager.getInstance().getDataNumber('money') < Game.GDSDK.getInstance().carCost) {
                return;
            }
            for (var i = 0; i < Game.Main.getInstance().maxCars; i++) {
                if (Game.DataManager.getInstance().getDataNumber('openID' + i) === 0) {
                    var icon = this.btnCars.addIcon('atentionCars instance 10000', 160, -40);
                    this.game.add.tween(icon.scale).to({
                        x: 0.9,
                        y: 0.9
                    }, 400, null, true, 0, -1, true);
                    return;
                }
            }
        };
        SubDefeat.prototype.checkAttentionMission = function() {
            for (var i = 0; i <= Game.Missions.getInstance().currMission; i++) {
                if (Game.DataManager.getInstance().getDataNumber('mission' + i) === 1) {
                    var icon = this.btnMissions.addIcon('atentionMission instance 10000', 160, -40);
                    this.game.add.tween(icon.scale).to({
                        x: 0.9,
                        y: 0.9
                    }, 400, null, true, 0, -1, true);
                    return;
                }
            }
        };
        SubDefeat.prototype.showGame = function() {
            Game.LevelBuilder.getInstance().showSubScene(Game.SubSceneList.Game);
        };
        SubDefeat.prototype.showMission = function() {
            Game.LevelBuilder.getInstance().showSubScene(Game.SubSceneList.Missions);
        };
        SubDefeat.prototype.showShop = function() {
            Game.LevelBuilder.getInstance().showSubScene(Game.SubSceneList.Shop);
        };
        SubDefeat.prototype.showMainMenu = function() {
            Game.LevelBuilder.getInstance().showSubScene(Game.SubSceneList.Menu);
        };
        SubDefeat.prototype.destroy = function() {
            _super.prototype.destroy.call(this);
            this.btnMissions = null;
            this.btnCars = null;
            this.btnRetry = null;
            this.btnMenu = null;
            this.btnMusic = null;
            this.btnSound = null;
        };
        return SubDefeat;
    }(Game.BasicSubScene));
    Game.SubDefeat = SubDefeat;
})(Game || (Game = {}));
var Game;
(function(Game) {
    var SubMenu = /** @class */ (function(_super) {
        __extends(SubMenu, _super);

        function SubMenu() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.counterUpdate = 0;
            return _this;
        }
        SubMenu.prototype.init = function() {
            // this.events.onInputUp.addOnce(this.start, this);
            var sprite = this.game.make.image(0, 400, 'roadMenu');
            sprite.cacheAsBitmap = true;
            this.addChild(sprite);
            sprite = this.game.make.image(Game.Main.gameHalfWidthMax, 350, 'logo');
            sprite.cacheAsBitmap = true;
            sprite.anchor.x = 0.5;
            this.addChild(sprite);
            sprite = null;
            var text = new Game.BmpdText(this.game, Game.Main.gameHalfWidthMax, 850, Game.Localization.getText('clickanywhere'), 36);
            text.anchor.setTo(0.5);
            text.tint = 0x29A4CD;
            this.addChild(text);
            this.game.add.tween(text).to({
                alpha: 0.1
            }, 700, null, true, 0, -1, true);
            text = new Game.BmpdText(this.game, Game.Main.gameHalfWidthMax, 1040, Game.Localization.getText('controls'), 34);
            text.anchor.setTo(0.5);
            text.tint = 0x29A4CD;
            this.addChild(text);
            text = null;
            this.currControl = Game.DataManager.getInstance().getDataNumber('control');
            this.btnControl = this.game.make.image(Game.Main.gameHalfWidthMax, 1100, 'game', 'btnControl instance 1000' + this.currControl);
            this.btnControl.anchor.setTo(0.5);
            this.btnControl.cacheAsBitmap = true;
            this.addChild(this.btnControl);
            this.btnControl.inputEnabled = true;
            this.btnControl.input.useHandCursor = true;
            this.btnControl.events.onInputUp.add(this.changeControl, this);
            this.spinText = new Game.BmpdText(this.game, this.btnControl.x - 100, this.btnControl.y + 5, Game.Localization.getText('spin'), 42);
            this.spinText.anchor.setTo(0.5);
            this.addChild(this.spinText);
            this.tapText = new Game.BmpdText(this.game, this.btnControl.x + 100, this.btnControl.y + 5, Game.Localization.getText('tap'), 42);
            this.tapText.anchor.setTo(0.5);
            this.addChild(this.tapText);
            if (this.currControl === Game.ControlType.spin) {
                this.spinText.tint = 0x0099CC;
                this.tapText.tint = 0x000000;
            } else {
                this.spinText.tint = 0x000000;
                this.tapText.tint = 0x0099CC;
            }
            this.btnSound = new Game.ButtonSound(this.game, 0, 0, Game.SoundType.SFX);
            this.btnSound.cacheAsBitmap = true;
            this.addChild(this.btnSound);
            this.btnMusic = new Game.ButtonSound(this.game, 0, 0, Game.SoundType.Music);
            this.btnMusic.cacheAsBitmap = true;
            this.addChild(this.btnMusic);
            this.firstTimeShow = Game.LevelBuilder.getInstance().firstTimeShowDefeat;
            if (this.firstTimeShow === true) {
                Game.LevelBuilder.getInstance().firstTimeShowDefeat = false;
                this.alpha = 0;
                this.game.add.tween(this).to({
                    alpha: 1
                }, 300, null, true);
            }
            this.checkDaily();
        };
        SubMenu.prototype.update = function() {
            _super.prototype.update.call(this);
            if (this.firstTimeShow === true) {
                this.counterUpdate += 1;
                if (this.counterUpdate >= 50) {
                    this.firstTimeShow = false;
                    Game.LevelBuilder.getInstance().stop();
                }
            }
        };
        SubMenu.prototype.changeControl = function() {
            if (this.currControl === 0) {
                this.currControl = 1;
                this.spinText.tint = 0x000000;
                this.tapText.tint = 0x0099CC;
            } else {
                this.currControl = 0;
                this.spinText.tint = 0x0099CC;
                this.tapText.tint = 0x000000;
            }
            this.btnControl.frameName = 'btnControl instance 1000' + this.currControl;
            Game.DataManager.getInstance().saveData('control', this.currControl);
        };
        // private start():void{
        //     LevelBuilder.getInstance().showSubScene(SubSceneList.Game);
        // }
        SubMenu.prototype.customResize = function(shiftX, shiftY) {
            this.btnSound.position.set(665 - shiftX, 50 + shiftY);
            this.btnMusic.position.set(575 - shiftX, 50 + shiftY);
        };
        SubMenu.prototype.checkDaily = function() {
            var countDownDate = Game.DataManager.getInstance().getData('dailyTimer');
            var days = 10;
            if (countDownDate) {
                // Find the distance between now and the count down date
                var distance = Date.now() - countDownDate;
                // Time calculations for days, hours, minutes and seconds
                days = Math.floor(distance / (1000 * 60 * 60 * 24));
                if (days < 0) {
                    days = 10;
                }
            }
            if (days >= 1) {
                Game.PanelManager.getInstance().show(Game.PanelList.Daily);
                Game.PanelManager.getInstance().custom(Game.PanelList.Daily, days);
                Game.DataManager.getInstance().saveData('dailyTimer', Date.now());
                Game.DataManager.getInstance().saveProgress();
            }
        };
        SubMenu.prototype.destroy = function() {
            _super.prototype.destroy.call(this);
            this.btnControl = null;
            this.spinText = null;
            this.tapText = null;
            this.btnMusic = null;
            this.btnSound = null;
        };
        return SubMenu;
    }(Game.BasicSubScene));
    Game.SubMenu = SubMenu;
})(Game || (Game = {}));
var Game;
(function(Game) {
    var SubMission = /** @class */ (function(_super) {
        __extends(SubMission, _super);

        function SubMission() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        SubMission.prototype.init = function() {
            this.scrollMask = this.game.make.graphics(0, 0);
            this.scrollMask.beginFill(0x00ff00, 1);
            this.scrollMask.drawRect(0, 0, Game.Constants.GAME_MAX_WIDTH, 600);
            this.scrollMask.endFill();
            this.addChild(this.scrollMask);
            this.createScroll(0, 0);
            this.scroll.mask = this.scrollMask;
            this.moneyIcon = this.game.make.image(0, 510, 'game', 'coinBig instance 10000');
            this.moneyIcon.cacheAsBitmap = true;
            this.moneyIcon.anchor.y = 0.5;
            this.addChild(this.moneyIcon);
            this.money = Game.DataManager.getInstance().getDataNumber('money');
            this.moneyText = new Game.BmpdText(this.game, 0, 515, '' + this.money, 50);
            this.moneyText.anchor.set(1, 0.5);
            this.addChild(this.moneyText);
            if (Game.GDSDK.getInstance().isRewardedEnable === true) {
                this.moneyPlus = new Game.ButtonScale(this.game, 0, 510, 'btn_plus instance 10000');
                this.moneyPlus.onComplete.add(this.getCoins, this);
                this.addChild(this.moneyPlus);
            }
            this.btnClose = new Game.ButtonText(this.game, Game.Main.gameHalfWidthMax, 0, 'btn_red2 instance 10000');
            this.btnClose.addText('close', 0, 5, 50);
            this.addChild(this.btnClose);
            this.btnClose.onComplete.addOnce(this.showDefeat, this);
            this.createMissions(220, 130);
            var curM = Game.Missions.getInstance().currMission;
            if (curM === Game.Missions.getInstance().maxMissions) {
                curM = Game.Missions.getInstance().maxMissions - 1;
            }
            var skipY = this.scroll.children[Game.Missions.getInstance().currMission].y;
            if (Game.Missions.getInstance().currMission < Game.Missions.getInstance().maxMissions) {
                this.btnSkip = new Game.ButtonText(this.game, 0, 0, 'btnSkip instance 10000');
                this.btnSkip.anchor.x = 1;
                this.btnSkip.soundName = null;
                this.btnSkip.addText('skip', -85, -18, 42, 0x000000, 'left');
                this.btnSkip.addText2('', -67, 29, 34, 0x000000, 'left');
                this.scroll.addChild(this.btnSkip);
                this.btnSkip.onComplete.add(this.skipCurrMission, this);
                this.btnSkip.events.onInputDown.add(this.onDown, this);
                this.btnSkip.events.onInputUp.add(this.onUp, this);
                this.btnSkip.x = 730;
                this.btnSkip.y = skipY;
                this.calcSkipCost();
            }
            this.scroll.setY(-(skipY - Game.Main.gameHalfHeightMax + 20));
        };
        SubMission.prototype.createScroll = function(x, y) {
            this.scroll = new Game.ScrollVertical(this.game, x, y, Game.Constants.GAME_MAX_HEIGHT, (Game.Missions.getInstance().maxMissions * 134));
            this.addChild(this.scroll);
            // this.scroll.onChildInputDown.add(this.onDown, this);
            // this.scroll.onChildInputUp.add(this.onUp, this);
            this.scrollMask.inputEnabled = true;
            this.scrollMask.events.onInputDown.add(this.onDown, this);
            this.scrollMask.events.onInputUp.add(this.onUp, this);
            this.game.input.addMoveCallback(this.scroll.mouseMove, this.scroll);
        };
        SubMission.prototype.createMissions = function(startY, stepY) {
            var item;
            var reward = 20;
            for (var i = 0; i < Game.Missions.getInstance().maxMissions; i++) {
                if (i > 0 && i % 8 === 0) {
                    reward += 10;
                }
                item = new Game.MisItem(this.game, startY, i, reward);
                this.scroll.addChild(item);
                if (i === Game.Missions.getInstance().currMission) {
                    item.current();
                }
                startY += stepY;
            }
            item = null;
        };
        SubMission.prototype.calcSkipCost = function() {
            this.skipMissionCost = 30 + (5 * Math.round(Game.Missions.getInstance().currMission / 10));
            this.btnSkip.text.text = '-' + this.skipMissionCost;
        };
        SubMission.prototype.skipCurrMission = function() {
            if (this.scroll.getDis() > 10) {
                return;
            }
            if (this.money >= this.skipMissionCost) {
                var item = this.scroll.children[Game.Missions.getInstance().currMission];
                item.skip();
                this.addMoney(-this.skipMissionCost);
                Game.Missions.getInstance().setNext();
                Game.SoundManager.playSFX('shopbuy');
                if (this.scroll.children[Game.Missions.getInstance().currMission] instanceof Game.MisItem) {
                    item = this.scroll.children[Game.Missions.getInstance().currMission];
                    item.current();
                    this.calcSkipCost();
                    this.btnSkip.y = item.y;
                } else {
                    this.btnSkip.visible = false;
                }
            } else {
                if (this.moneyPlus) {
                    this.getCoins();
                }
            }
        };
        SubMission.prototype.onDown = function(sprite) {
            this.scroll.mouseDown(this.game.input.activePointer.y);
        };
        SubMission.prototype.addMoney = function(value) {
            this.money += value;
            this.moneyText.text = '' + this.money;
            Game.DataManager.getInstance().saveData('money', this.money);
            Game.DataManager.getInstance().saveProgress();
            this.resizeMoney(Game.CustomResize.shiftX, Game.CustomResize.shiftY);
        };
        SubMission.prototype.onUp = function(sprite) {
            this.scroll.mouseUp();
        };
        SubMission.prototype.update = function() {
            _super.prototype.update.call(this);
            this.scroll.update();
        };
        SubMission.prototype.showDefeat = function() {
            Game.LevelBuilder.getInstance().showSubScene(Game.SubSceneList.Defeat);
        };
        SubMission.prototype.getCoins = function() {
            Game.PanelManager.getInstance().show(Game.PanelList.GetCoins);
        };
        SubMission.prototype.customResize = function(shiftX, shiftY) {
            this.resizeMoney(shiftX, shiftY);
            this.btnClose.y = 1240 - shiftY;
            this.scrollMask.y = 136 + shiftY;
            this.scrollMask.scale.y = 1 + (0.71 * (1 - (shiftY / Game.CustomResize.offsetHeight)));
            this.scroll.x = -shiftX;
            this.scroll.resize(shiftY);
        };
        SubMission.prototype.resizeMoney = function(shiftX, shiftY) {
            if (this.moneyPlus) {
                this.moneyIcon.position.set((585 - this.moneyText.width) - shiftX, 48 + shiftY);
                this.moneyText.position.set(640 - shiftX, 53 + shiftY);
                this.moneyPlus.x = 680 - shiftX;
                this.moneyPlus.y = 48 + shiftY;
            } else {
                this.moneyIcon.position.set((655 - this.moneyText.width) - shiftX, 48 + shiftY);
                this.moneyText.position.set(710 - shiftX, 53 + shiftY);
            }
        };
        SubMission.prototype.destroy = function() {
            this.game.input.deleteMoveCallback(this.scroll.mouseMove, this.scroll);
            _super.prototype.destroy.call(this);
            this.btnClose = null;
            this.moneyIcon = null;
            this.moneyText = null;
            this.moneyPlus = null;
            this.scroll = null;
            this.scrollMask = null;
            this.btnSkip = null;
        };
        return SubMission;
    }(Game.BasicSubScene));
    Game.SubMission = SubMission;
})(Game || (Game = {}));
var Game;
(function(Game) {
    var SubShop = /** @class */ (function(_super) {
        __extends(SubShop, _super);

        function SubShop() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        SubShop.prototype.init = function() {
            var bg = this.game.make.image(0, 380, 'game', 'bg_shop instance 10000');
            bg.cacheAsBitmap = true;
            this.addChild(bg);
            this.moneyIcon = this.game.make.image(0, 510, 'game', 'coinBig instance 10000');
            this.moneyIcon.cacheAsBitmap = true;
            this.moneyIcon.anchor.y = 0.5;
            this.addChild(this.moneyIcon);
            this.money = Game.DataManager.getInstance().getDataNumber('money');
            this.carID = Game.DataManager.getInstance().getDataNumber('carID');
            this.moneyText = new Game.BmpdText(this.game, 0, 515, '' + this.money, 50);
            this.moneyText.anchor.set(1, 0.5);
            this.addChild(this.moneyText);
            if (Game.GDSDK.getInstance().isRewardedEnable === true) {
                this.moneyPlus = new Game.ButtonScale(this.game, 0, 510, 'btn_plus instance 10000');
                this.moneyPlus.onComplete.add(this.getCoins, this);
                this.addChild(this.moneyPlus);
            }
            this.steeringWheel = this.game.make.image(Game.Main.gameHalfWidthMax, bg.y + 115, 'game', 'steeringWheel' + this.carID + ' instance 10000');
            this.steeringWheel.anchor.setTo(0.5);
            this.steeringWheel.cacheAsBitmap = true;
            this.addChild(this.steeringWheel);
            this.btnClose = new Game.ButtonText(this.game, Game.Main.gameHalfWidthMax, 0, 'btn_red2 instance 10000');
            this.btnClose.addText('close', 0, 5, 50);
            this.addChild(this.btnClose);
            this.btnClose.onComplete.addOnce(this.showDefeat, this);
            this.createScroll(0, bg.y + 193);
            this.selected = this.game.make.image(0, 180, 'game', 'shopSelected instance 10000');
            this.selected.anchor.setTo(0.5);
            this.selected.cacheAsBitmap = true;
            this.scroll.addChild(this.selected);
            this.createItems(90, 60, 120);
            this.scroll.setX(-(this.selected.x - Game.Main.gameHalfWidthMax));
        };
        SubShop.prototype.createScroll = function(x, y) {
            this.scroll = new Game.ScrollHorizontal(this.game, x, y, Game.Constants.GAME_MAX_WIDTH, Game.Main.getInstance().maxCars * 120.4);
            this.addChild(this.scroll);
            this.scroll.onChildInputDown.add(this.onDown, this);
            this.scroll.onChildInputUp.add(this.onUp, this);
            this.game.input.addMoveCallback(this.scroll.mouseMove, this.scroll);
        };
        SubShop.prototype.onDown = function(sprite) {
            this.scroll.mouseDown(this.game.input.activePointer.x);
        };
        SubShop.prototype.addMoney = function(value) {
            this.money += value;
            this.moneyText.text = '' + this.money;
            Game.DataManager.getInstance().saveData('money', this.money);
            this.resizeMoney(Game.CustomResize.shiftX, Game.CustomResize.shiftY);
        };
        SubShop.prototype.onUp = function(sprite) {
            this.scroll.mouseUp();
            if (this.scroll.getDis() < 10 && sprite instanceof Game.ShopItem) {
                var item = sprite;
                if (item.locked === true) {
                    if (item.id === 0 || item.id >= Game.Main.getInstance().adCarStart) {
                        item.pressUp();
                    } else {
                        if (this.money >= Game.GDSDK.getInstance().carCost) { //buy
                            item.open();
                            this.addMoney(-Game.GDSDK.getInstance().carCost);
                            this.selectCar(item.id, item.x);
                            Game.SoundManager.playSFX('shopbuy');
                        } else { //no money show panel more coins
                            if (this.moneyPlus) {
                                this.getCoins();
                            } else {
                                Game.SoundManager.playSFX('wrong');
                            }
                        }
                    }
                } else { //select
                    if (this.carID !== item.id) {
                        this.selectCar(item.id, item.x);
                        Game.SoundManager.playSFX('heroSelect');
                    }
                }
                item = null;
            }
        };
        SubShop.prototype.selectCar = function(id, x) {
            this.selected.x = x;
            this.carID = id;
            Game.DataManager.getInstance().saveData('carID', this.carID);
            Game.DataManager.getInstance().saveProgress();
            this.steeringWheel.frameName = 'steeringWheel' + this.carID + ' instance 10000';
            this.steeringWheel.scale.setTo(0.8);
            this.game.add.tween(this.steeringWheel.scale).to({
                x: 1,
                y: 1
            }, 300, Phaser.Easing.Elastic.Out, true);
        };
        SubShop.prototype.createItems = function(y, startX, stepX) {
            var item;
            for (var i = 0; i < Game.Main.getInstance().maxCars; i++) {
                if (i === 0) {
                    item = new Game.ShopItemDailyReward(this.game, startX, y, i);
                } else if (i >= Game.Main.getInstance().adCarStart) {
                    item = new Game.ShopItemRewardAD(this.game, startX, y, i);
                } else {
                    item = new Game.ShopItem(this.game, startX, y, i);
                }
                this.scroll.addChild(item);
                item.inputEnabled = true;
                item.input.useHandCursor = true;
                if (this.carID === i) {
                    this.selected.x = startX;
                }
                startX += stepX;
            }
            item = null;
        };
        SubShop.prototype.update = function() {
            _super.prototype.update.call(this);
            this.scroll.update();
        };
        SubShop.prototype.showDefeat = function() {
            Game.LevelBuilder.getInstance().showSubScene(Game.SubSceneList.Defeat);
        };
        SubShop.prototype.getCoins = function() {
            Game.PanelManager.getInstance().show(Game.PanelList.GetCoins);
        };
        SubShop.prototype.customResize = function(shiftX, shiftY) {
            this.resizeMoney(shiftX, shiftY);
            this.btnClose.y = 1240 - shiftY;
            this.scroll.resize(shiftX);
        };
        SubShop.prototype.resizeMoney = function(shiftX, shiftY) {
            if (this.moneyPlus) {
                this.moneyIcon.position.set((585 - this.moneyText.width) - shiftX, 48 + shiftY);
                this.moneyText.position.set(640 - shiftX, 53 + shiftY);
                this.moneyPlus.x = 680 - shiftX;
                this.moneyPlus.y = 48 + shiftY;
            } else {
                this.moneyIcon.position.set((655 - this.moneyText.width) - shiftX, 48 + shiftY);
                this.moneyText.position.set(710 - shiftX, 53 + shiftY);
            }
        };
        SubShop.prototype.destroy = function() {
            this.game.input.deleteMoveCallback(this.scroll.mouseMove, this.scroll);
            _super.prototype.destroy.call(this);
            this.btnClose = null;
            this.moneyIcon = null;
            this.moneyText = null;
            this.moneyPlus = null;
            this.steeringWheel = null;
            this.scroll = null;
            this.selected = null;
        };
        return SubShop;
    }(Game.BasicSubScene));
    Game.SubShop = SubShop;
})(Game || (Game = {}));
var Game;
(function(Game) {
    var SubSplashScreen = /** @class */ (function(_super) {
        __extends(SubSplashScreen, _super);

        function SubSplashScreen() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.counter = 0;
            _this.state = 0;
            return _this;
        }
        SubSplashScreen.prototype.init = function() {
            var bg = this.game.make.image(0, 0, 'splash-bg');
            bg.width = Game.Constants.GAME_MAX_WIDTH;
            bg.height = Game.Constants.GAME_MAX_HEIGHT;
            bg.cacheAsBitmap = true;
            this.addChild(bg);
            bg = null;
            this.logo = this.game.make.image(Game.Main.gameHalfWidthMax, Game.Main.gameHalfHeightMax, 'logo-huz');
            this.logo.anchor.set(0.5, 0.5);
            this.logo.scale.set(1.2, 1.2);
            this.addChild(this.logo);
            this.logo.cacheAsBitmap = true;
            if (Game.GDSDK.getInstance().isHuz === false) {
                this.logo.inputEnabled = true;
                this.logo.input.useHandCursor = true;
                this.logo.events.onInputUp.add(this.goSponsor, this);
            }
            this.logo.alpha = 0;
        };
        SubSplashScreen.prototype.update = function() {
            _super.prototype.update.call(this);
            this.counter += 1;
            if (this.state === 0 && this.counter >= 10) {
                this.logo.alpha += 0.016;
                if (this.logo.alpha >= 1) {
                    this.logo.alpha = 1;
                    this.counter = 0;
                    this.state = 1;
                }
            } else if (this.state === 1 && this.counter >= 90) {
                this.logo.alpha -= 0.016;
                if (this.logo.alpha <= 0) {
                    this.logo.alpha = 0;
                    this.showMainMenu();
                }
            }
        };
        SubSplashScreen.prototype.goSponsor = function() {
            Game.GDSDK.getInstance().goLogoURL();
        };
        SubSplashScreen.prototype.showMainMenu = function() {
            Game.SoundManager.playMusic('main');
            Game.LevelBuilder.getInstance().showSubScene(Game.SubSceneList.Menu);
        };
        SubSplashScreen.prototype.destroy = function() {
            _super.prototype.destroy.call(this);
            this.logo = null;
        };
        return SubSplashScreen;
    }(Game.BasicSubScene));
    Game.SubSplashScreen = SubSplashScreen;
})(Game || (Game = {}));
var Game;
(function(Game) {
    var MisItem = /** @class */ (function(_super) {
        __extends(MisItem, _super);

        function MisItem(game, y, id, reward) {
            var _this = _super.call(this, game, Game.Constants.GAME_MAX_WIDTH, y, 'game', 'mission_closed instance 10000') || this;
            _this.anchor.set(1, 0.5);
            _this.id = id;
            _this.reward = reward;
            var idTemp = (_this.id + 1);
            var idText = '' + idTemp;
            if (idTemp < 10) {
                idText = '0' + idTemp;
            }
            _this.numText = new Game.BmpdText(_this.game, -574, 5, idText, 60); //-640
            _this.numText.anchor.setTo(0.5);
            _this.numText.tint = 0x666666;
            _this.addChild(_this.numText);
            _this.descriptionText = new Game.BmpdText(game, -508, -50, '', 28, 'left');
            _this.descriptionText.tint = 0x000000;
            _this.addChild(_this.descriptionText);
            _this.progressText = new Game.BmpdText(_this.game, -508, 40, Game.Localization.getText('na'), 28, 'left');
            _this.progressText.anchor.y = 0.5;
            _this.progressText.tint = 0x000000;
            _this.addChild(_this.progressText);
            _this.rewardText = new Game.BmpdText(_this.game, -275, 40, '+' + _this.reward, 28, 'left');
            _this.rewardText.anchor.y = 0.5;
            _this.rewardText.tint = 0x000000;
            _this.addChild(_this.rewardText);
            var status = Game.DataManager.getInstance().getDataNumber('mission' + _this.id);
            if (status === 0) { //closed
                _this.descriptionText.text = Game.Localization.getText('na');
                _this.rewardText.visible = false;
                return _this;
            } else if (status === 1) { //claim
                _this.claim();
            } else if (status === 2) { //complete || rewarded
                _this.completed(false);
            } else if (status === 3) { //skipped
                _this.skip(false);
            }
            _this.descriptionText.text = Game.PhaserTools.wordWrap(Game.Missions.getInstance().getDescription(_this.id), 23);
            return _this;
        }
        MisItem.prototype.current = function() {
            this.frameName = 'mission_active instance 10000';
            this.numText.tint = 0xFFCC00;
            this.descriptionText.text = Game.PhaserTools.wordWrap(Game.Missions.getInstance().getDescription(this.id), 23);
            this.progressText.text = Game.Missions.getInstance().getProgress();
            this.rewardText.visible = true;
        };
        MisItem.prototype.claim = function() {
            this.frameName = 'mission_claim instance 10000';
            this.numText.tint = 0x666666;
            this.progressText.text = Game.Localization.getText('done');
            this.btnClaim = new Game.ButtonText(this.game, 0, 0, 'btnClaim instance 10000');
            this.btnClaim.anchor.x = 1;
            this.btnClaim.addText('claim', -85, 5, 42, 0xffffff, 'left');
            this.btnClaim.soundName = null;
            this.addChild(this.btnClaim);
            this.btnClaim.onComplete.add(this.pressClaim, this);
            this.btnClaim.events.onInputDown.add(this.onDown, this);
            this.btnClaim.events.onInputUp.add(this.onUp, this);
        };
        MisItem.prototype.onDown = function() {
            Game.LevelBuilder.getInstance().subScene.onDown(this.btnClaim);
        };
        MisItem.prototype.onUp = function() {
            Game.LevelBuilder.getInstance().subScene.onUp(this.btnClaim);
        };
        MisItem.prototype.pressClaim = function() {
            if (Game.LevelBuilder.getInstance().subScene.scroll.getDis() < 10) {
                this.btnClaim.destroy();
                this.onUp();
                this.completed();
                Game.LevelBuilder.getInstance().subScene.addMoney(this.reward);
                Game.SoundManager.playSFX('missionClaim');
                Game.SoundManager.playSFX('getReward');
            }
        };
        MisItem.prototype.completed = function(save) {
            if (save === void 0) {
                save = true;
            }
            this.frameName = 'mission_complete instance 10000';
            this.progressText.visible = false;
            this.rewardText.visible = false;
            if (save === true) {
                this.saveStatus(2);
            }
        };
        MisItem.prototype.skip = function(save) {
            if (save === void 0) {
                save = true;
            }
            this.frameName = 'mission_closed instance 10000';
            this.numText.tint = 0x666666;
            this.rewardText.text = Game.Localization.getText('skipped');
            this.rewardText.anchor.x = 1;
            this.rewardText.fontSize = 34;
            this.rewardText.x = -10;
            this.progressText.visible = false;
            if (save === true) {
                this.saveStatus(3);
            }
        };
        MisItem.prototype.saveStatus = function(status) {
            Game.DataManager.getInstance().saveData('mission' + this.id, status);
            Game.DataManager.getInstance().saveProgress();
        };
        MisItem.prototype.destroy = function() {
            _super.prototype.destroy.call(this);
            this.numText = null;
            this.descriptionText = null;
            this.progressText = null;
            this.rewardText = null;
            this.btnClaim = null;
        };
        return MisItem;
    }(Phaser.Image));
    Game.MisItem = MisItem;
})(Game || (Game = {}));
var Game;
(function(Game) {
    var ShopItem = /** @class */ (function(_super) {
        __extends(ShopItem, _super);

        function ShopItem(game, x, y, id) {
            var _this = _super.call(this, game, x, y) || this;
            _this.beginFill(0x00ff00, 0);
            _this.drawRect(-40, -70, 80, 140);
            _this.endFill();
            _this.id = id;
            _this.counter = id;
            _this.locked = Game.DataManager.getInstance().getDataNumber('openID' + id) === 0;
            _this.create();
            return _this;
        }
        ShopItem.prototype.create = function() {
            if (this.locked === true) {
                this.shadow = this.game.make.image(0, -10, 'game', 'lock instance 10000');
                this.shadow.anchor.setTo(0.5);
                this.shadow.cacheAsBitmap = true;
                this.addChild(this.shadow);
                this.car = this.game.make.image(-30, 50, 'game', 'coinBig instance 10000');
                this.car.anchor.setTo(0.5);
                this.car.cacheAsBitmap = true;
                this.car.scale.setTo(0.6);
                this.addChild(this.car);
                this.priceText = new Game.BmpdText(this.game, -10, 53, '' + Game.GDSDK.getInstance().carCost, 32);
                this.priceText.anchor.y = 0.5;
                this.addChild(this.priceText);
            } else {
                this.shadow = this.game.make.image(0, -5, 'game', 'car' + this.id + ' instance 10000');
                this.shadow.anchor.setTo(0.5);
                this.shadow.tint = 0x000000;
                this.shadow.alpha = 0.4;
                this.shadow.cacheAsBitmap = true;
                this.addChild(this.shadow);
                this.car = this.game.make.image(0, -10, 'game', 'car' + this.id + ' instance 10000');
                this.car.anchor.setTo(0.5);
                this.car.cacheAsBitmap = true;
                this.addChild(this.car);
            }
        };
        ShopItem.prototype.open = function() {
            this.priceText.visible = false;
            this.shadow.position.set(0, -5);
            this.shadow.tint = 0x000000;
            this.shadow.alpha = 0.4;
            this.shadow.frameName = 'car' + this.id + ' instance 10000';
            this.car.frameName = 'car' + this.id + ' instance 10000';
            this.car.scale.setTo(1);
            this.car.position.set(0, -10);
            this.locked = false;
            Game.DataManager.getInstance().saveData('openID' + this.id, 1);
        };
        ShopItem.prototype.update = function() {
            _super.prototype.update.call(this);
            this.counter += 0.08;
            if (this.id === 0 || this.locked === false) {
                this.car.y = -10 - (3 * (1 + Math.cos(this.counter)));
            }
        };
        ShopItem.prototype.pressUp = function() {};
        ShopItem.prototype.destroy = function() {
            _super.prototype.destroy.call(this);
            this.car = null;
            this.shadow = null;
            this.priceText = null;
        };
        return ShopItem;
    }(Phaser.Graphics));
    Game.ShopItem = ShopItem;
})(Game || (Game = {}));
var Game;
(function(Game) {
    var ShopItemDailyReward = /** @class */ (function(_super) {
        __extends(ShopItemDailyReward, _super);

        function ShopItemDailyReward() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ShopItemDailyReward.prototype.create = function() {
            if (this.locked === true) {
                this.dailyRewardText = new Game.BmpdText(this.game, 0, -87, Game.Localization.getText('car0'), 18);
                this.dailyRewardText.anchor.x = 0.5;
                this.dailyRewardText.tint = 0x000000;
                this.addChild(this.dailyRewardText);
                this.dailyRewardText.visible = false;
                this.priceText = this.game.make.image(0, 50, 'game', 'lock instance 10000');
                this.priceText.anchor.setTo(0.5);
                this.priceText.cacheAsBitmap = true;
                this.priceText.scale.setTo(0.6);
                this.addChild(this.priceText);
            }
            this.shadow = this.game.make.image(0, -5, 'game', 'car' + this.id + ' instance 10000');
            this.shadow.anchor.setTo(0.5);
            this.shadow.tint = 0x000000;
            this.shadow.alpha = 0.4;
            this.shadow.cacheAsBitmap = true;
            this.addChild(this.shadow);
            this.car = this.game.make.image(0, -10, 'game', 'car' + this.id + ' instance 10000');
            this.car.anchor.setTo(0.5);
            this.car.cacheAsBitmap = true;
            this.addChild(this.car);
        };
        ShopItemDailyReward.prototype.pressUp = function() {
            if (this.dailyRewardText.visible === true) {
                return;
            }
            Game.SoundManager.playSFX('wrong');
            this.dailyRewardText.visible = true;
            this.dailyRewardText.alpha = 0;
            this.game.add.tween(this.dailyRewardText).to({
                alpha: 1
            }, 200, null, true, 0, 3).onComplete.addOnce(this.hideDailyReward, this);
        };
        ShopItemDailyReward.prototype.hideDailyReward = function() {
            this.dailyRewardText.visible = false;
        };
        ShopItemDailyReward.prototype.destroy = function() {
            _super.prototype.destroy.call(this);
            this.dailyRewardText = null;
        };
        return ShopItemDailyReward;
    }(Game.ShopItem));
    Game.ShopItemDailyReward = ShopItemDailyReward;
})(Game || (Game = {}));
var Game;
(function(Game) {
    var ShopItemRewardAD = /** @class */ (function(_super) {
        __extends(ShopItemRewardAD, _super);

        function ShopItemRewardAD() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ShopItemRewardAD.prototype.create = function() {
            if (this.locked === true) {
                this.shadow = this.game.make.image(0, -10, 'game', 'lock instance 10000');
                this.shadow.anchor.setTo(0.5);
                this.shadow.cacheAsBitmap = true;
                this.addChild(this.shadow);
                this.car = this.game.make.image(-21, 50, 'game', 'iconVideo instance 10000');
                this.car.anchor.setTo(0.5);
                this.car.cacheAsBitmap = true;
                this.addChild(this.car);
                this.countAD = Game.DataManager.getInstance().getDataNumber('carAD' + this.id);
                this.priceText = new Game.BmpdText(this.game, 9, 51, 'x' + this.countAD, 32);
                this.priceText.anchor.y = 0.5;
                this.addChild(this.priceText);
                this.watchIcon = this.game.make.image(0, 90, 'game', 'btn_white3 instance 10000');
                this.watchIcon.anchor.setTo(0.5);
                this.watchIcon.cacheAsBitmap = true;
                this.addChild(this.watchIcon);
                this.watchText = new Game.BmpdText(this.game, 0, 92, Game.Localization.getText('watch'), 18);
                this.watchText.anchor.setTo(0.5);
                this.watchText.tint = 0x000000;
                this.addChild(this.watchText);
            } else {
                this.shadow = this.game.make.image(0, -5, 'game', 'car' + this.id + ' instance 10000');
                this.shadow.anchor.setTo(0.5);
                this.shadow.tint = 0x000000;
                this.shadow.alpha = 0.4;
                this.shadow.cacheAsBitmap = true;
                this.addChild(this.shadow);
                this.car = this.game.make.image(0, -10, 'game', 'car' + this.id + ' instance 10000');
                this.car.anchor.setTo(0.5);
                this.car.cacheAsBitmap = true;
                this.addChild(this.car);
            }
        };
        ShopItemRewardAD.prototype.open = function() {
            _super.prototype.open.call(this);
            this.watchIcon.visible = false;
            this.watchText.visible = false;
            Game.LevelBuilder.getInstance().subScene.selectCar(this.id, this.x);
        };
        ShopItemRewardAD.prototype.pressUp = function() {
            Game.GDSDK.getInstance().showAd(Game.GDSDKAdType.rewarded, this.whatchVideoComplete, this);
        };
        ShopItemRewardAD.prototype.whatchVideoComplete = function(status) {
            if (status === Game.RewardStatus.rewarded) {
                this.countAD -= 1;
                this.priceText.text = 'x' + this.countAD;
                Game.DataManager.getInstance().saveData('carAD' + this.id, this.countAD);
                Game.DataManager.getInstance().saveProgress();
                if (this.countAD <= 0) {
                    this.open();
                }
            } else if (status === Game.RewardStatus.nomorevideo) {
                Game.PanelManager.getInstance().show(Game.PanelList.NoMoreVideo);
            } else if (status === Game.RewardStatus.watchfullvideo) {
                Game.PanelManager.getInstance().show(Game.PanelList.WatchFullVideo);
            }
        };
        ShopItemRewardAD.prototype.destroy = function() {
            _super.prototype.destroy.call(this);
            this.watchIcon = null;
            this.watchText = null;
        };
        return ShopItemRewardAD;
    }(Game.ShopItem));
    Game.ShopItemRewardAD = ShopItemRewardAD;
})(Game || (Game = {}));