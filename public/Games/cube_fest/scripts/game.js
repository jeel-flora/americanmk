var Funday;
(function(Funday) {
    class AudioId {
        constructor(key, markerName) {
            this.key = null;
            this.markerName = null;
            this.key = key;
            this.markerName = markerName;
        }
    }
    Funday.AudioId = AudioId;
})(Funday || (Funday = {}));
var Funday;
(function(Funday) {
    class BitmapFontId {
        constructor(key) {
            this.key = null;
            this.key = key;
        }
    }
    Funday.BitmapFontId = BitmapFontId;
})(Funday || (Funday = {}));
var Funday;
(function(Funday) {
    class SpriteId {
        constructor(key, frame) {
            this.key = null;
            this.frame = null;
            this.key = key;
            this.frame = frame;
        }
    }
    Funday.SpriteId = SpriteId;
})(Funday || (Funday = {}));
var Funday;
(function(Funday) {
    var Animation;
    (function(Animation_1) {
        class Animation {
            constructor() {
                this.onPlay = new Phaser.Signal();
                this.onStop = new Phaser.Signal();
                this.onPause = new Phaser.Signal();
                this.onComplete = new Phaser.Signal();
            }
            play() {
                this._isPlaying = true;
                this._isPaused = false;
                this.onPlay.dispatch();
            }
            isPlaying() {
                return this._isPlaying;
            }
            stop() {
                this._isPlaying = false;
                this._isPaused = false;
                this.onStop.dispatch();
            }
            pause() {
                this._isPlaying = false;
                this._isPaused = true;
                this.onPause.dispatch();
            }
            isPaused() {
                return this._isPaused;
            }
            onCompleted() {
                this._isPlaying = false;
                this._isPaused = false;
                this.onComplete.dispatch();
            }
        }
        Animation_1.Animation = Animation;
    })(Animation = Funday.Animation || (Funday.Animation = {}));
})(Funday || (Funday = {}));
var Funday;
(function(Funday) {
    var Animation;
    (function(Animation) {
        class AbstractGroup extends Funday.Animation.Animation {
            constructor(animations) {
                super();
                this.animations = new Array();
                if (!animations) {
                    throw "Animation array is 'null' or 'undefined'!";
                }
                if (animations.length <= 0) {
                    throw "Animation array is empty";
                }
                this.animations = animations;
                for (let index = 0; index < this.animations.length; index++) {
                    const animation = this.animations[index];
                    animation.onComplete.add(this.onChildAnimationComplete.bind(this, animation));
                }
            }
            stop() {
                for (let index = 0; index < this.animations.length; index++) {
                    const animation = this.animations[index];
                    animation.stop();
                }
                super.stop();
            }
            pause() {
                for (let index = 0; index < this.animations.length; index++) {
                    const animation = this.animations[index];
                    if (animation.isPlaying()) {
                        animation.pause();
                    }
                }
                super.pause();
            }
            onChildAnimationComplete(childAnimation) {
                console.log("child animation complete");
            }
            foreachAnimation(callback) {
                for (let index = 0; index < this.animations.length; index++) {
                    const animation = this.animations[index];
                    callback(animation);
                }
            }
        }
        Animation.AbstractGroup = AbstractGroup;
    })(Animation = Funday.Animation || (Funday.Animation = {}));
})(Funday || (Funday = {}));
var Funday;
(function(Funday) {
    var Animation;
    (function(Animation) {
        class Bundle extends Funday.Animation.AbstractGroup {
            constructor() {
                super(...arguments);
                this.completedAnimationCount = 0;
            }
            play() {
                this.completedAnimationCount = 0;
                super.play();
                for (let index = 0; index < this.animations.length; index++) {
                    const animation = this.animations[index];
                    animation.play();
                }
            }
            onChildAnimationComplete(childAnimation) {
                this.completedAnimationCount++;
                if (this.completedAnimationCount === this.animations.length) {
                    this.onCompleted();
                }
            }
        }
        Animation.Bundle = Bundle;
    })(Animation = Funday.Animation || (Funday.Animation = {}));
})(Funday || (Funday = {}));
var Funday;
(function(Funday) {
    var Animation;
    (function(Animation) {
        class CameraFade extends Funday.Animation.Animation {
            constructor(game, color, durationMs, isTo) {
                super();
                this.game = null;
                this.onCameraAnimationComplete = null;
                this.startFunction = null;
                this.color = 0;
                this.durationMs = 0;
                this.game = game;
                this.startFunction = isTo ? game.camera.flash.bind(game.camera) : game.camera.fade.bind(game.camera);
                this.onCameraAnimationComplete = isTo ? game.camera.onFlashComplete : game.camera.onFadeComplete;
                this.color = color;
                this.durationMs = durationMs;
            }
            play() {
                this.onCameraAnimationComplete.add(this.onCameraAnimationCompleted, this);
                this.startFunction(this.color, this.durationMs);
                super.play();
            }
            stop() {
                this.onCameraAnimationComplete.remove(this.onCameraAnimationCompleted, this);
                super.stop();
                this.game.camera.resetFX();
            }
            pause() {
                console.error("pause not implemented");
                this.stop();
            }
            onCameraAnimationCompleted() {
                this.onCameraAnimationComplete.remove(this.onCameraAnimationCompleted, this);
                this.onCompleted();
            }
        }
        Animation.CameraFade = CameraFade;
    })(Animation = Funday.Animation || (Funday.Animation = {}));
})(Funday || (Funday = {}));
var Funday;
(function(Funday) {
    var Animation;
    (function(Animation) {
        class Event extends Animation.Animation {
            constructor(event) {
                super();
                this.onComplete.add(event);
            }
            play() {
                super.play();
                this.onCompleted();
            }
            pause() {
                console.warn("cannot pause event. ignoring");
            }
        }
        Animation.Event = Event;
    })(Animation = Funday.Animation || (Funday.Animation = {}));
})(Funday || (Funday = {}));
var Funday;
(function(Funday) {
    var Animation;
    (function(Animation) {
        class Loop extends Animation.Animation {
            constructor(animationToLoop, maxRepeatCount) {
                super();
                this.repeatCount = 0;
                this.maxRepeatCount = -1;
                this.animationToLoop = null;
                this.maxRepeatCount = maxRepeatCount;
                animationToLoop.onComplete.add(this.onLoopCycleFinished.bind(this));
                this.animationToLoop = animationToLoop;
            }
            onLoopCycleFinished() {
                if (this.isLoopingForever()) {
                    this.play();
                } else {
                    if (this.hasRepeatsLeft()) {
                        this.repeatCount++;
                        this.play();
                    } else {
                        this.repeatCount = 0;
                        this.onCompleted();
                    }
                }
            }
            isLoopingForever() {
                return this.maxRepeatCount === -1;
            }
            hasRepeatsLeft() {
                return this.repeatCount < this.maxRepeatCount;
            }
            play() {
                super.play();
                this.animationToLoop.play();
            }
            stop() {
                this.repeatCount = 0;
                this.animationToLoop.stop();
                super.stop();
            }
            pause() {
                this.animationToLoop.pause();
                super.pause();
            }
        }
        Animation.Loop = Loop;
    })(Animation = Funday.Animation || (Funday.Animation = {}));
})(Funday || (Funday = {}));
var Funday;
(function(Funday) {
    var Animation;
    (function(Animation) {
        class Queue extends Funday.Animation.AbstractGroup {
            constructor() {
                super(...arguments);
                this.playIndex = 0;
            }
            play() {
                if (this.isPaused() && this.playIndex > 0) {
                    this.playAnimationAtIndex(this.playIndex);
                } else {
                    this.playAnimationAtIndex(0);
                }
                super.play();
            }
            playAnimationAtIndex(index) {
                this.playIndex = index;
                this.animations[index].play();
            }
            stop() {
                this.playIndex = 0;
                for (let index = 0; index < this.animations.length; index++) {
                    const animation = this.animations[index];
                    animation.stop();
                }
                super.stop();
            }
            onChildAnimationComplete(childAnimation) {
                let index = this.animations.indexOf(childAnimation);
                if (index === -1) {
                    throw "Animation is not member of this queue";
                }
                let nextIndex = index + 1;
                if (nextIndex === this.animations.length) {
                    this.onCompleted();
                    this.playIndex = 0;
                } else {
                    this.playAnimationAtIndex(nextIndex);
                }
            }
        }
        Animation.Queue = Queue;
    })(Animation = Funday.Animation || (Funday.Animation = {}));
})(Funday || (Funday = {}));
var Funday;
(function(Funday) {
    var Animation;
    (function(Animation) {
        class Sprite extends Funday.Animation.Animation {
            constructor(target, animationName, durationMs) {
                super();
                this.target = null;
                this.animationName = null;
                this.durationMs = null;
                this.onCompleteCallback = null;
                this.target = target;
                this.animationName = animationName;
                this.durationMs = durationMs;
                this.onCompleteCallback = this.onSpriteAnimationCompleted.bind(this);
                if (!this.target.animations.getAnimation(animationName)) {
                    throw "Sprite animation with the name '" + animationName + "' does not exist";
                }
            }
            play() {
                super.play();
                if (this.target.animations.currentAnim.isPaused && this.target.animations.currentAnim.name === this.animationName) {
                    this.target.animations.currentAnim.paused = false;
                } else {
                    let fps = this.convertDurationToFps();
                    this.target.animations.play(this.animationName, fps);
                }
                this.target.events.onAnimationComplete.add(this.onSpriteAnimationCompleted, this);
            }
            convertDurationToFps() {
                let spriteAnimation = this.target.animations.getAnimation(this.animationName);
                return Sprite.convertDurationMsToFps(this.durationMs, spriteAnimation);
            }
            static convertDurationMsToFps(durationMs, spriteAnimation) {
                let durationSeconds = durationMs / 1000;
                let framesPerSecond = spriteAnimation.frameTotal / durationSeconds;
                return framesPerSecond;
            }
            static convertFpsToDurationMs(fps, spriteAnimation) {
                let durationMs = (spriteAnimation.frameTotal / fps) * 1000;
                return durationMs;
            }
            pause() {
                if (this.target.animations.currentAnim.name === this.animationName) {
                    this.target.animations.paused = true;
                }
                this.target.events.onAnimationComplete.remove(this.onSpriteAnimationCompleted, this);
                super.pause();
            }
            stop() {
                this.target.events.onAnimationComplete.remove(this.onSpriteAnimationCompleted, this);
                super.stop();
            }
            onSpriteAnimationCompleted(sprite, animation) {
                if (sprite === this.target && animation.name === this.animationName) {
                    this.onCompleted();
                    this.target.events.onAnimationComplete.remove(this.onSpriteAnimationCompleted, this);
                }
            }
        }
        Animation.Sprite = Sprite;
    })(Animation = Funday.Animation || (Funday.Animation = {}));
})(Funday || (Funday = {}));
var Funday;
(function(Funday) {
    var Animation;
    (function(Animation) {
        class Tween extends Funday.Animation.Animation {
            constructor(game, target, to, durationMs, easing) {
                super();
                this.tween = null;
                this.isPause = false;
                this.tween = game.add.tween(target);
                this.tween.to(to, durationMs, easing);
                this.tween.onComplete.add(this.onComplete.dispatch, this.onComplete);
            }
            play() {
                super.play();
                if (this.tween.isPaused) {
                    this.tween.resume();
                } else {
                    this.tween.start();
                }
            }
            stop() {
                this.tween.stop();
                super.stop();
            }
            pause() {
                this.tween.pause();
                super.pause();
            }
            addOnUpdateCallback(callback, callbackContext) {
                this.tween.onUpdateCallback(callback, callbackContext);
            }
            setTimeScale(value) {
                this.tween.timeScale = value;
            }
        }
        Animation.Tween = Tween;
    })(Animation = Funday.Animation || (Funday.Animation = {}));
})(Funday || (Funday = {}));
var Toolbox;
(function(Toolbox) {
    class CartoonNetworkGame extends Phaser.Game {
        constructor() {
            super(1, 1, Phaser.CANVAS);
            this.version = new Version();
            this.services = null;
            this.modal = null;
            this.addedSounds = {};
            this.services = new Funday.Service.Provider(this);
            this.modal = new Funday.UI.Modal.Modal(this);
        }
        preBoot() {
            this.input.maxPointers = 1;
            this.stage.disableVisibilityChange = true;
            this.services.platform.determinePlatform();
            this.services.resolution.setupResolutionForGame();
            this.onBlur.add(this.onGameLoseFocus, this);
            this.onFocus.add(this.onGameFocus, this);
        }
        loadLoadScreenGfxForCurrentResolution() {
            let quality = this.services.resolution.getQuality();
            this.load.pack("Load_" + quality, "assets/data/assets.json");
        }
        loadGfxForCurrentResolution() {
            let quality = this.services.resolution.getQuality();
            this.load.pack(quality, "assets/data/assets.json");
        }
        applyResolutionRatio(value) {
            return this.services.resolution.applyResultionRatio(value);
        }
        applyResolutionRatioFloored(value) {
            return this.services.resolution.applyResultionRatioFloored(value);
        }
        responsiveDistanceFromBottom(value) {
            return this.height - this.applyResolutionRatio(value);
        }
        onGameFocus() {
            this.unmuteSounds();
        }
        onGameLoseFocus() {
            this.muteSounds();
        }
        muteSounds() {
            this.sound.mute = true;
        }
        unmuteSounds() {
            this.sound.mute = false;
        }
        createImage(x, y, spriteId, group) {
            if (!spriteId) {
                spriteId = new Funday.SpriteId(null, null);
            }
            let i = this.add.image(x || 0, y || 0, spriteId.key, spriteId.frame, group);
            return i;
        }
        createSprite(x, y, spriteId, group) {
            if (!spriteId) {
                spriteId = new Funday.SpriteId(null, null);
            }
            let s = this.add.sprite(x || 0, y || 0, spriteId.key, spriteId.frame, group);
            return s;
        }
        createTileSprite(x, y, width, height, spriteId, group) {
            return this.add.tileSprite(x, y, width, height, spriteId.key, spriteId.frame, group);
        }
        createButton(x, y, spriteId) {
            if (!spriteId) {
                spriteId = new Funday.SpriteId(null, null);
            }
            return new Funday.UI.Button(this, x, y, spriteId.key, spriteId.frame);
        }
        getFrameData(spriteId) {
            let data = this.cache.getFrameData(spriteId.key);
            let frame = data.getFrameByName(spriteId.frame);
            return frame;
        }
        getOrInitAudioSprite(audioId) {
            let audioSprite = this.addedSounds[audioId.key];
            if (!audioSprite) {
                this.addedSounds[audioId.key] = this.add.audioSprite(audioId.key);
                audioSprite = this.addedSounds[audioId.key];
            }
            return audioSprite;
        }
        playSound(audioId, volume = 1.0) {
            let audioSprite = this.getOrInitAudioSprite(audioId);
            return audioSprite.play(audioId.markerName, volume);
        }
    }
    Toolbox.CartoonNetworkGame = CartoonNetworkGame;
    class Version {
        constructor() {
            this.major = 0;
            this.minor = 0;
            this.revision = 0;
            this.name = "";
            this.description = "";
        }
        getVersionString() {
            return this.major + "." + this.minor + "." + this.revision;
        }
        getNameAndVersionString() {
            return this.name + " - " + this.getVersionString();
        }
    }
})(Toolbox || (Toolbox = {}));
var Funday;
(function(Funday) {
    var Service;
    (function(Service) {
        class Animation {
            constructor(game) {
                this.game = null;
                this.game = game;
            }
            tween(target, to, durationMs, easingMethod) {
                return new Funday.Animation.Tween(this.game, target, to, durationMs, easingMethod);
            }
            tweenArray(targets, to, durationMs, easingMethod) {
                let anims = [];
                for (let index = 0; index < targets.length; index++) {
                    const target = targets[index];
                    let anim = this.tween(target, to, durationMs, easingMethod);
                    anims.push(anim);
                }
                return this.bundle(anims);
            }
            tweenTint(sprite, toColor, durationMs, easingMethod) {
                let state = {
                    progress: 0
                };
                let maxProgress = 100;
                let animation = this.tween(state, {
                    progress: maxProgress
                }, durationMs, easingMethod);
                let startColor = sprite.tint;
                animation.onPlay.add(function() {
                    startColor = sprite.tint;
                }, this);
                animation.addOnUpdateCallback(function() {
                    let color32 = Phaser.Color.interpolateColor(startColor, toColor, maxProgress, state.progress);
                    let rgb = Phaser.Color.getRGB(color32);
                    sprite.tint = Phaser.Color.getColor(rgb.r, rgb.g, rgb.b);
                }, this);
                return animation;
            }
            sprite(target, animationName, durationMs) {
                return new Funday.Animation.Sprite(target, animationName, durationMs);
            }
            spriteFps(target, animationName, framesPerSecond) {
                let phaserSpriteAnim = target.animations.getAnimation(animationName);
                let fps = framesPerSecond || phaserSpriteAnim.speed;
                let durationMs = Funday.Animation.Sprite.convertFpsToDurationMs(fps, phaserSpriteAnim);
                return new Funday.Animation.Sprite(target, animationName, durationMs);
            }
            delay(delayInMilliseconds) {
                let tween = this.tween({}, {}, delayInMilliseconds);
                tween.isPause = true;
                return tween;
            }
            event(callback) {
                return new Funday.Animation.Event(callback);
            }
            bundle(animations) {
                return new Funday.Animation.Bundle(animations);
            }
            queue(animations) {
                return new Funday.Animation.Queue(animations);
            }
            loop(animation) {
                return new Funday.Animation.Loop(animation, -1);
            }
            repeat(animation, repeatCount) {
                return new Funday.Animation.Loop(animation, repeatCount);
            }
            fadeFrom(color, durationMs) {
                return new Funday.Animation.CameraFade(this.game, color, durationMs, false);
            }
            fadeTo(color, durationMs) {
                return new Funday.Animation.CameraFade(this.game, color, durationMs, true);
            }
            fadeFromBlack(durationMs) {
                return new Funday.Animation.CameraFade(this.game, 0x000000, durationMs, true);
            }
            fadeToBlack(durationMs) {
                return new Funday.Animation.CameraFade(this.game, 0x000000, durationMs, false);
            }
            fadeFromWhite(durationMs) {
                return new Funday.Animation.CameraFade(this.game, 0xffffff, durationMs, true);
            }
            fadeToWhite(durationMs) {
                return new Funday.Animation.CameraFade(this.game, 0xffffff, durationMs, false);
            }
        }
        Service.Animation = Animation;
    })(Service = Funday.Service || (Funday.Service = {}));
})(Funday || (Funday = {}));
var Funday;
(function(Funday) {
    var Service;
    (function(Service) {
        class CNArcadeProvider {
            constructor(cnArcadeSDK, game) {
                this.achievement = new Service.CNArcadeAchievementService(cnArcadeSDK);
                this.persistence = new Service.CNArcadePersistenceService(cnArcadeSDK);
                this.ads = new Service.CNAdService(cnArcadeSDK);
                this.analytics = new Service.CNArcadeAnalytics(cnArcadeSDK);
                this.platform = new Service.PlatformService(game);
                this.animation = new Service.Animation(game);
                this.resolution = new Service.ResolutionService(game);
            }
        }
        Service.CNArcadeProvider = CNArcadeProvider;
    })(Service = Funday.Service || (Funday.Service = {}));
})(Funday || (Funday = {}));
var Funday;
(function(Funday) {
    var Service;
    (function(Service) {
        class Provider {
            constructor(game) {
                this.achievement = new Service.AchievementService();
                this.persistence = new Service.PersistenceService();
                this.ads = new Service.EmptyAdService();
                this.analytics = new Service.EmptyAnalytics();
                this.platform = new Service.PlatformService(game);
                this.animation = new Service.Animation(game);
                this.resolution = new Service.ResolutionService(game);
            }
        }
        Service.Provider = Provider;
    })(Service = Funday.Service || (Funday.Service = {}));
})(Funday || (Funday = {}));
var Funday;
(function(Funday) {
    var Service;
    (function(Service) {
        var Achievement;
        (function(Achievement_1) {
            class Achievement {
                constructor(id, maxProgress) {
                    this.id = 0;
                    this.progress = 0;
                    this.maxProgress = 1;
                    this.hasBeenAwarded = false;
                    this.id = id;
                    this.maxProgress = maxProgress;
                }
                shouldBeAwarded() {
                    return !this.hasBeenAwarded && this.hasReachedGoal();
                }
                hasReachedGoal() {
                    return this.progress >= this.maxProgress;
                }
            }
            Achievement_1.Achievement = Achievement;
        })(Achievement = Service.Achievement || (Service.Achievement = {}));
    })(Service = Funday.Service || (Funday.Service = {}));
})(Funday || (Funday = {}));
var Funday;
(function(Funday) {
    var Service;
    (function(Service) {
        var Achievement;
        (function(Achievement) {
            class AchievementMetadata {
                constructor(id, name, description, icon) {
                    this.id = 0;
                    this.name = null;
                    this.description = null;
                    this.iconSpriteId = null;
                    this.id = id;
                    this.name = name;
                    this.description = description;
                    this.iconSpriteId = icon;
                }
            }
            Achievement.AchievementMetadata = AchievementMetadata;
        })(Achievement = Service.Achievement || (Service.Achievement = {}));
    })(Service = Funday.Service || (Funday.Service = {}));
})(Funday || (Funday = {}));
var Funday;
(function(Funday) {
    var Service;
    (function(Service) {
        class AchievementService {
            constructor() {}
            award(achievement, metadata) {
                if (AchievementService.alertAchievements) {
                    alert("Achievement Completed!\n" + metadata.name + "(" + metadata.description + ")");
                }
                achievement.hasBeenAwarded = true;
            }
            getProgress(achievement) {
                return Number(localStorage.getItem("achiev_" + achievement.id.toString()));
            }
            updateProgress(achievement, progress) {
                localStorage.setItem("achiev_" + achievement.id.toString(), progress.toString());
            }
        }
        AchievementService.alertAchievements = true;
        Service.AchievementService = AchievementService;
    })(Service = Funday.Service || (Funday.Service = {}));
})(Funday || (Funday = {}));
var Funday;
(function(Funday) {
    var Service;
    (function(Service) {
        class CNArcadeAchievementService {
            constructor(cnArcadeSDK) {
                this.cnArcadeSDK = cnArcadeSDK;
            }
            loadAchievement(id) {
                return this.cnArcadeSDK.achievements.find((achievement) => achievement.id === id);
            }
            award(achievement) {
                if (achievement.hasBeenAwarded)
                    return;
                this.cnArcadeSDK.unlockAchievement(achievement.id).then((achiev) => {
                    achievement.hasBeenAwarded = true;
                }).catch((err) => {
                    console.log("Could not unlock achievement with id", achievement.id, ". ", err);
                });
            }
            getProgress(achievement) {
                return this.cnArcadeSDK.getAchievementProgress(achievement.id);
            }
            updateProgress(achievement, progress) {
                if (achievement.hasBeenAwarded)
                    return;
                achievement.progress = progress;
                this.cnArcadeSDK.setAchievementProgress(achievement.id, progress).then((achiev) => {
                    if (achiev.completed) {
                        this.award(achievement);
                    } else {}
                }).catch((err) => {
                    console.log("Could not update progress. ", err);
                });
            }
        }
        Service.CNArcadeAchievementService = CNArcadeAchievementService;
    })(Service = Funday.Service || (Funday.Service = {}));
})(Funday || (Funday = {}));
var Funday;
(function(Funday) {
    var Service;
    (function(Service) {
        class CNAdService {
            constructor(cnSDK) {
                this.cnSDK = cnSDK;
            }
            showAd() {
                return this.cnSDK.showAd();
            }
        }
        Service.CNAdService = CNAdService;
    })(Service = Funday.Service || (Funday.Service = {}));
})(Funday || (Funday = {}));
var Funday;
(function(Funday) {
    var Service;
    (function(Service) {
        class EmptyAdService {
            showAd() {
                return new Promise((resolve, reject) => {
                    return resolve();
                });
            }
        }
        Service.EmptyAdService = EmptyAdService;
    })(Service = Funday.Service || (Funday.Service = {}));
})(Funday || (Funday = {}));
var Funday;
(function(Funday) {
    var Service;
    (function(Service) {
        Service.GameLocations = {
            TITLE: 'title',
            PAUSE: 'pause',
            SHOP: 'shop',
            PLAY: 'play'
        };
    })(Service = Funday.Service || (Funday.Service = {}));
})(Funday || (Funday = {}));
var Funday;
(function(Funday) {
    var Service;
    (function(Service) {
        class CNArcadeAnalytics {
            constructor(cnSDK) {
                this.verbose = true;
                this.cnSDK = cnSDK;
            }
            trackLocation(location) {
                this.cnSDK.analytics.trackPlay(location);
                if (this.verbose)
                    console.log("Tracked play analytics from", location);
            }
        }
        Service.CNArcadeAnalytics = CNArcadeAnalytics;
    })(Service = Funday.Service || (Funday.Service = {}));
})(Funday || (Funday = {}));
var Funday;
(function(Funday) {
    var Service;
    (function(Service) {
        class EmptyAnalytics {
            trackLocation(location) {}
        }
        Service.EmptyAnalytics = EmptyAnalytics;
    })(Service = Funday.Service || (Funday.Service = {}));
})(Funday || (Funday = {}));
var Funday;
(function(Funday) {
    var Service;
    (function(Service) {
        class CNArcadePersistenceService {
            constructor(cnArcadeSDK) {
                this.state = {};
                this.highscoreKey = "highscore";
                this.verbose = true;
                this.cnArcadeSDK = cnArcadeSDK;
            }
            loadOrSetDefault(defaultGameState) {
                var gameStatePromise = this.cnArcadeSDK.getGameState();
                var highscorePromise = this.cnArcadeSDK.getHighScore();
                gameStatePromise.then((state) => {
                    this.state = state;
                    if (this.verbose)
                        console.log("Loaded game state!", state);
                    if (this.state == null || this.state == undefined) {
                        this.state = defaultGameState;
                        return Promise.reject("Game state is null or undefined.");
                    };
                }).catch((err) => {
                    this.state = defaultGameState;
                    if (this.verbose)
                        console.log("Could not load game state. Setting default.", err);
                    this.cnArcadeSDK.setGameState(this.state).then(() => {
                        if (this.verbose)
                            console.log("Stored default game state!");
                    }).catch((err) => {
                        if (this.verbose)
                            console.log("Could not store game state.", err);
                    });
                });
                highscorePromise.then((highscore) => {
                    if (this.verbose)
                        console.log("Retrieved highscore to be", highscore);
                    this.cachedHighscore = highscore;
                }).catch((err) => {
                    if (this.verbose)
                        console.log("Could not retrieve highscore, setting default", err);
                    this.cachedHighscore = 0;
                });
                return Promise.all([gameStatePromise, highscorePromise]);
            };
            save(key, data) {
                if (key == this.highscoreKey) {
                    this.cnArcadeSDK.setHighScore(data).then((newScore) => {
                        if (this.verbose)
                            console.log("Set highscore to", newScore);
                        this.cachedHighscore = data;
                    }).catch((err) => {
                        if (this.verbose)
                            console.log("Could not set highscore", err);
                    });
                } else {
                    this.state[key] = data;
                    this.cnArcadeSDK.setGameState(this.state).then(() => {
                        if (this.verbose)
                            console.log("Stored game state!");
                    }).catch((err) => {
                        if (this.verbose)
                            console.log("Could not store game state. ", err);
                    });
                }
            }
            load(key) {
                if (key == this.highscoreKey) {
                    return this.cachedHighscore.toString();
                }
                if (this.verbose)
                    console.log("Loading with key", key, this.state[key]);
                return this.state[key];
            }
            hasSavedKey(key) {
                if (this.verbose)
                    console.log("Checkin for saved key", this.state[key], "staten er", this.state);
                return !!this.state[key];
            }
            saveDto(key, obj) {
                this.save(key, obj);
            }
            loadDto(key) {
                return this.load(key);
            }
            clearAllData() {}
        }
        Service.CNArcadePersistenceService = CNArcadePersistenceService;
    })(Service = Funday.Service || (Funday.Service = {}));
})(Funday || (Funday = {}));
var Funday;
(function(Funday) {
    var Service;
    (function(Service) {
        class PersistenceService {
            save(key, data) {
                try {
                    localStorage.setItem(key, data.toString());
                } catch (e) {}
            }
            load(key) {
                return localStorage.getItem(key);
            }
            hasSavedKey(key) {
                return !!localStorage.getItem(key);
            }
            saveDto(key, obj) {
                let data = JSON.stringify(obj);
                this.save(key, data);
            }
            loadDto(key) {
                let data = this.load(key);
                return JSON.parse(data);
            }
            clearAllData() {
                localStorage.clear();
            }
        }
        Service.PersistenceService = PersistenceService;
    })(Service = Funday.Service || (Funday.Service = {}));
})(Funday || (Funday = {}));
var Funday;
(function(Funday) {
    var Service;
    (function(Service) {
        class PlatformService {
            constructor(game) {
                this.game = null;
                this.platform = PlatformType.None;
                this.forcePlatform = PlatformType.None;
                this.game = game;
            }
            determinePlatform() {
                if (this.forcePlatform === PlatformType.None) {
                    if (this.game.device.desktop) {
                        this.platform = PlatformType.Browser;
                    } else {
                        this.platform = PlatformType.CartoonNetworkPlay;
                    }
                } else {
                    this.platform = this.forcePlatform;
                }
            }
            getPlatform() {
                return this.platform;
            }
        }
        Service.PlatformService = PlatformService;
        let PlatformType;
        (function(PlatformType) {
            PlatformType[PlatformType["None"] = 0] = "None";
            PlatformType[PlatformType["Browser"] = 1] = "Browser";
            PlatformType[PlatformType["CartoonNetworkPlay"] = 2] = "CartoonNetworkPlay";
        })(PlatformType = Service.PlatformType || (Service.PlatformType = {}));
    })(Service = Funday.Service || (Funday.Service = {}));
})(Funday || (Funday = {}));
var Funday;
(function(Funday) {
    var Service;
    (function(Service) {
        class CustomScaleManager {
            static calculateGameSize(minRes, maxRes) {
                let designAspectRatio = minRes.width / minRes.height;
                let thisRatio = window.innerWidth / window.innerHeight;
                let newWidth = minRes.width;
                let newHeight = minRes.height;
                if (thisRatio < designAspectRatio) {
                    newHeight = minRes.height * designAspectRatio / thisRatio;
                } else {
                    newWidth = minRes.width / (designAspectRatio / thisRatio);
                }
                newHeight = Phaser.Math.clamp(newHeight, minRes.height, maxRes.height);
                newWidth = Phaser.Math.clamp(newWidth, minRes.width, maxRes.width);
                return {
                    width: newWidth,
                    height: newHeight
                };
            }
        }
        Service.CustomScaleManager = CustomScaleManager;
    })(Service = Funday.Service || (Funday.Service = {}));
})(Funday || (Funday = {}));
var Funday;
(function(Funday) {
    var Service;
    (function(Service) {
        class ResolutionConfiguration {
            constructor(name, min, max, ratio) {
                this.minScreenResolution = null;
                this.maxScreenResolution = null;
                this.scaleMode = Phaser.ScaleManager.SHOW_ALL;
                this.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;
                this.pageAlignHorizontally = true;
                this.pageAlignVertically = true;
                this.name = name;
                this.minScreenResolution = min;
                this.maxScreenResolution = max;
                this.ratio = ratio;
            }
            getName() {
                return this.name;
            }
            getMinScreenResolution() {
                return this.minScreenResolution;
            }
            getMaxScreenResolution() {
                return this.maxScreenResolution;
            }
            getRatio() {
                return this.ratio;
            }
            applyToGame(game) {
                game.scale.scaleMode = this.scaleMode;
                game.scale.fullScreenScaleMode = this.fullScreenScaleMode;
                game.scale.pageAlignHorizontally = this.pageAlignHorizontally;
                game.scale.pageAlignVertically = this.pageAlignVertically;
                if (this.minScreenResolution.width !== this.maxScreenResolution.width || this.minScreenResolution.height !== this.maxScreenResolution.height) {
                    let size = Service.CustomScaleManager.calculateGameSize(this.minScreenResolution, this.maxScreenResolution);
                    game.scale.setGameSize(size.width, size.height);
                } else {
                    game.scale.setGameSize(this.minScreenResolution.width, this.minScreenResolution.height);
                }
            }
            static createStaticResolutionConfiguration(name, width, height, ratio) {
                let minScreenSize = new ScreenResolution(width, height);
                let maxScreenSize = new ScreenResolution(width, height);
                let resolutionConfiguration = new ResolutionConfiguration(name, minScreenSize, maxScreenSize, ratio);
                return resolutionConfiguration;
            }
            static createFillAllResolutionConfiguration(name, minWidth, minHeight, maxWidth, maxHeight, ratio) {
                let minScreenSize = new ScreenResolution(minWidth, minHeight);
                let maxScreenSize = new ScreenResolution(maxWidth, maxHeight);
                let resolutionConfiguration = new ResolutionConfiguration(name, minScreenSize, maxScreenSize, ratio);
                return resolutionConfiguration;
            }
        }
        Service.ResolutionConfiguration = ResolutionConfiguration;
        class ScreenResolution {
            constructor(width, height) {
                this.width = 0;
                this.height = 0;
                this.width = width;
                this.height = height;
            }
        }
        Service.ScreenResolution = ScreenResolution;
        let Orientation;
        (function(Orientation) {
            Orientation[Orientation["Portrait"] = 0] = "Portrait";
            Orientation[Orientation["Landscape"] = 1] = "Landscape";
        })(Orientation = Service.Orientation || (Service.Orientation = {}));
    })(Service = Funday.Service || (Funday.Service = {}));
})(Funday || (Funday = {}));
var Funday;
(function(Funday) {
    var Service;
    (function(Service) {
        class ResolutionConfigurationRepository {
            constructor() {
                this.resolutionConfigurations = new Array();
            }
            addResolutionConfiguration(resolutionConfiguration) {
                this.resolutionConfigurations.push(resolutionConfiguration);
            }
            addNewLockedResolutionConfiguration(name, width, height, ratio) {
                let resolutionConfiguration = Service.ResolutionConfiguration.createStaticResolutionConfiguration(name, width, height, ratio);
                this.addResolutionConfiguration(resolutionConfiguration);
            }
            addNewFillAllResolutionConfiguration(name, minWidth, minHeight, maxWidth, maxHeight, ratio) {
                let resolutionConfiguration = Service.ResolutionConfiguration.createFillAllResolutionConfiguration(name, minWidth, minHeight, maxWidth, maxHeight, ratio);
                this.addResolutionConfiguration(resolutionConfiguration);
            }
            getByName(name) {
                let configuration = null;
                for (let index = 0; index < this.resolutionConfigurations.length; index++) {
                    const resolutionConfiguration = this.resolutionConfigurations[index];
                    if (resolutionConfiguration.getName() === name) {
                        configuration = resolutionConfiguration;
                        break;
                    }
                }
                return configuration;
            }
        }
        Service.ResolutionConfigurationRepository = ResolutionConfigurationRepository;
    })(Service = Funday.Service || (Funday.Service = {}));
})(Funday || (Funday = {}));
var Funday;
(function(Funday) {
    var Service;
    (function(Service) {
        class ResolutionService {
            constructor(game) {
                this.browserResolutionConfigurationRepository = null;
                this.cnPlayResolutionConfigurationRepository = null;
                this.resolutionConfiguration = null;
                this.game = game;
                this.browserResolutionConfigurationRepository = this.createBrowserResolutionRepository();
                this.cnPlayResolutionConfigurationRepository = this.createCNPlayResolutionRepository();
            }
            createBrowserResolutionRepository() {
                let resolutionConfigurationRepository = new Service.ResolutionConfigurationRepository();
                resolutionConfigurationRepository.addNewLockedResolutionConfiguration("HD", 1080, 1920, 1);
                resolutionConfigurationRepository.addNewLockedResolutionConfiguration("MD", 750, 1334, .7);
                resolutionConfigurationRepository.addNewLockedResolutionConfiguration("SD", 572, 1017, .53);
                return resolutionConfigurationRepository;
            }
            createCNPlayResolutionRepository() {
                let resolutionConfigurationRepository = new Service.ResolutionConfigurationRepository();
                resolutionConfigurationRepository.addNewFillAllResolutionConfiguration("HD", 1080, 1920, 1440, 1920, 1);
                resolutionConfigurationRepository.addNewFillAllResolutionConfiguration("MD", 750, 1334, 1001, 1334, .7);
                resolutionConfigurationRepository.addNewFillAllResolutionConfiguration("SD", 750, 1017, 763, 1017, .53);
                return resolutionConfigurationRepository;
            }
            getResolutionRepositoryForCurrentPlatform() {
                let platformService = this.game.services.platform;
                let resolutionRepository = null;
                if (platformService.getPlatform() === Service.PlatformType.Browser) {
                    resolutionRepository = this.browserResolutionConfigurationRepository;
                } else {
                    resolutionRepository = this.cnPlayResolutionConfigurationRepository;
                }
                return resolutionRepository;
            }
            getQuality() {
                return this.resolutionConfiguration.getName();
            }
            determineBestResolution() {
                let resolutionConfigurationRepository = this.getResolutionRepositoryForCurrentPlatform();
                let quality = "HD";
                this.resolutionConfiguration = resolutionConfigurationRepository.getByName(quality);
            }
            setupResolutionForGame() {
                if (!this.resolutionConfiguration) {
                    this.determineBestResolution();
                }
                if (!this.resolutionConfiguration) {
                    throw "Could not find resolution configuration!";
                }
                this.resolutionConfiguration.applyToGame(this.game);
            }
            applyResultionRatio(value) {
                return value * this.resolutionConfiguration.getRatio();
            }
            applyResultionRatioFloored(value) {
                return Math.floor(this.applyResultionRatio(value));
            }
            getNotchSafeTop() {
                if (!this.notchSafeTop) {
                    if ((screen.width == 375 && screen.height === 812) || (screen.width == 414 && screen.height === 896)) {
                        this.notchSafeTop = 64;
                    } else {
                        this.notchSafeTop = 0;
                    }
                }
                return this.notchSafeTop;
            }
            setResolutionConfiguration(quality = "HD", browser = false) {
                let resolutionRepository = null;
                if (browser) {
                    resolutionRepository = this.browserResolutionConfigurationRepository;
                } else {
                    resolutionRepository = this.cnPlayResolutionConfigurationRepository;
                }
                this.resolutionConfiguration = resolutionRepository.getByName(quality);
            }
        }
        Service.ResolutionService = ResolutionService;
    })(Service = Funday.Service || (Funday.Service = {}));
})(Funday || (Funday = {}));
var Funday;
(function(Funday) {
    var UI;
    (function(UI) {
        class Button extends Phaser.Group {
            constructor(game, x, y, key, overFrame, outFrame, downFrame, upFrame) {
                super(game);
                this.button = null;
                this.onDown = new Phaser.Signal();
                this.onUp = new Phaser.Signal();
                this.onOver = new Phaser.Signal();
                this.onOut = new Phaser.Signal();
                this.xFlipModifier = 1;
                this.yFlipModifier = 1;
                this.currentHideOrShowAnim = null;
                this.position.x = x;
                this.position.y = y;
                this.button = new Phaser.Button(game, 0, 0, key, null, null, overFrame, outFrame || overFrame, downFrame || overFrame, upFrame || overFrame);
                this.button.anchor.setTo(.5);
                this.add(this.button);
                this.button.onOverMouseOnly = true;
                this.button.onInputDown.add(this.onButtonDown, this);
                this.button.onInputOut.add(this.onButtonOut, this);
                this.button.onInputOver.add(this.onButtonOver, this);
                this.button.onInputUp.add(this.onButtonUp, this);
            }
            loadTexture(key, frame, stopAnimation) {
                this.button.loadTexture(key, frame, stopAnimation);
            }
            flipX() {
                this.xFlipModifier *= -1;
                this.button.scale.x *= this.xFlipModifier;
            }
            flipY() {
                this.yFlipModifier *= -1;
                this.button.scale.y *= this.yFlipModifier;
            }
            onButtonOut(gameObject, pointer) {
                let animationFactory = this.game.services.animation;
                var tween = animationFactory.tween(this.button.scale, {
                    x: 1 * this.xFlipModifier,
                    y: 1 * this.yFlipModifier
                }, 100);
                tween.play();
            }
            onButtonOver() {
                let animationFactory = this.game.services.animation;
                var tween = animationFactory.tween(this.button.scale, {
                    x: 1.05 * this.xFlipModifier,
                    y: 1.05 * this.yFlipModifier
                }, 100);
                tween.play();
                this.onOver.dispatch();
            }
            onButtonDown() {
                let animationFactory = this.game.services.animation;
                var tween = animationFactory.tween(this.button.scale, {
                    x: .9 * this.xFlipModifier,
                    y: .9 * this.yFlipModifier
                }, 100);
                tween.play();
                this.onDown.dispatch();
            }
            onButtonUp(gameObject, pointer, isPointerOver) {
                let animationFactory = this.game.services.animation;
                var tween = animationFactory.tween(this.button.scale, {
                    x: 1 * this.xFlipModifier,
                    y: 1 * this.yFlipModifier
                }, 100);
                tween.play();
                if (isPointerOver) {
                    this.onUp.dispatch();
                }
            }
            disableHide() {
                this.button.inputEnabled = false;
                this.visible = false;
            }
            enableShow() {
                this.button.inputEnabled = true;
                this.visible = true;
            }
            animatedDisableHide(callback) {
                this.clearCurrentHideOrShowAnim();
                this.currentHideOrShowAnim = this.createDisableHideAnimation();
                if (callback) {
                    this.currentHideOrShowAnim.onComplete.add(callback);
                }
                this.currentHideOrShowAnim.play();
            }
            animatedEnableShow() {
                this.clearCurrentHideOrShowAnim();
                this.currentHideOrShowAnim = this.createEnableShowAnimation();
                this.currentHideOrShowAnim.play();
            }
            clearCurrentHideOrShowAnim() {
                if (this.currentHideOrShowAnim) {
                    this.currentHideOrShowAnim.stop();
                    this.currentHideOrShowAnim = null;
                }
            }
            createDisableHideAnimation() {
                let animationFactory = this.game.services.animation;
                let tween = animationFactory.tween(this.scale, {
                    x: 0,
                    y: 0
                }, 800, Phaser.Easing.Elastic.In);
                tween.onPlay.add(function() {
                    this.scale.setTo(1);
                    this.visible = true;
                    this.button.inputEnabled = false;
                }, this);
                tween.onComplete.add(function() {
                    this.visible = false;
                    this.scale.setTo(1);
                }, this);
                return tween;
            }
            createEnableShowAnimation() {
                let animationFactory = this.game.services.animation;
                let myScale = {
                    x: this.scale.x,
                    y: this.scale.y
                };
                let tween = animationFactory.tween(this.scale, {
                    x: myScale.x,
                    y: myScale.y
                }, 800, Phaser.Easing.Elastic.Out);
                tween.onPlay.add(function() {
                    this.button.inputEnabled = true;
                    this.scale.setTo(0);
                    this.visible = true;
                }, this);
                tween.onComplete.add(function() {}, this);
                return tween;
            }
            isInputEnabled() {
                return this.button.inputEnabled;
            }
            addIconFromSpriteId(spriteId) {
                return this.addIconSprite(spriteId.key, spriteId.frame);
            }
            addIconSprite(key, frame) {
                let iconSprite = this.game.add.sprite(0, 0, key, frame);
                iconSprite.anchor.setTo(.5, .5);
                this.button.addChild(iconSprite);
                return iconSprite;
            }
            setAudioSettings(buttonAudioSettings) {
                let game = this.game;
                let audioSprite = game.getOrInitAudioSprite(buttonAudioSettings.out);
                this.button.setOutSound(audioSprite, buttonAudioSettings.out.markerName);
                audioSprite = game.getOrInitAudioSprite(buttonAudioSettings.out);
                this.button.setOverSound(audioSprite, buttonAudioSettings.over.markerName);
                audioSprite = game.getOrInitAudioSprite(buttonAudioSettings.down);
                this.button.setDownSound(audioSprite, buttonAudioSettings.down.markerName);
                audioSprite = game.getOrInitAudioSprite(buttonAudioSettings.up);
                this.button.setUpSound(audioSprite, buttonAudioSettings.up.markerName);
            }
        }
        UI.Button = Button;
        class ButtonAudioSettings {
            constructor(over, down, up, out) {
                this.over = null;
                this.down = null;
                this.up = null;
                this.out = null;
                this.over = over;
                this.down = down;
                this.up = up;
                this.out = out;
            }
        }
        UI.ButtonAudioSettings = ButtonAudioSettings;
    })(UI = Funday.UI || (Funday.UI = {}));
})(Funday || (Funday = {}));
var Funday;
(function(Funday) {
    var UI;
    (function(UI) {
        class CartoonNetworkLoadScreen extends Phaser.Group {
            constructor(state, fillTint) {
                super(state.game, null, "Cartoon Network Load Screen");
                state.add.existing(this);
                if (this.game.cache.getFrameByName("load", "load_background")) {
                    let background = state.add.sprite(this.game.world.centerX, this.game.height, "load", "load_background");
                    background.anchor.set(0.5, 1.0);
                }
                if (this.game.cache.getFrameByName("load", "load_logo")) {
                    let logo = state.add.sprite(state.game.canvas.width * .5, state.game.canvas.height * .15, "load", "load_logo");
                    logo.anchor.setTo(.5, 0);
                }
                let loadbar = state.add.sprite(state.game.canvas.width * .5, state.game.canvas.height * .5, "load", "load_bar");
                loadbar.anchor.setTo(.5, 0);
                let progressbar = state.add.sprite(state.game.canvas.width * .5, state.game.canvas.height * .5, "load", "load_progress");
                progressbar.anchor.setTo(.5, 0);
                progressbar.tint = fillTint;
                state.load.setPreloadSprite(progressbar, 0);
            }
        }
        UI.CartoonNetworkLoadScreen = CartoonNetworkLoadScreen;
    })(UI = Funday.UI || (Funday.UI = {}));
})(Funday || (Funday = {}));
var Funday;
(function(Funday) {
    var UI;
    (function(UI) {
        class LoadScreen extends Phaser.Group {
            constructor(game, loadScreenSettings) {
                super(game, null, "Load Bar");
                this.loadScreenSettings = null;
                this.background = null;
                this.box = null;
                this.progressBar = null;
                this.loadScreenSettings = loadScreenSettings;
                this.background = this.createBackgroundGraphics(loadScreenSettings.backgroundColor);
                this.progressBar = this.createProgressBarGraphics(loadScreenSettings.fillColor);
                this.box = this.createBoxGraphics(loadScreenSettings.boxColor);
            }
            onLoadProgess(progress) {
                let percentage = progress / 100;
                this.progressBar.scale.x = percentage;
            }
            listenToState(state) {
                state.load.onFileComplete.add(this.onLoadProgess, this);
            }
            createBackgroundGraphics(color) {
                let g = this.game.add.graphics(0, 0, this);
                g.beginFill(color);
                g.drawRect(0, 0, this.game.canvas.width, this.game.canvas.height);
                g.endFill();
                this.add(g);
                return g;
            }
            createBoxGraphics(color) {
                let g = this.game.add.graphics(this.game.canvas.height * .5, this.game.canvas.height * .5, this);
                g.lineStyle(this.game.canvas.width * .0025, color, 1);
                let width = this.game.canvas.width * .65;
                let height = this.game.canvas.height * .025;
                g.drawRect(0, 0, width, height);
                g.lineStyle(0);
                g.position.x -= g.width / 2;
                g.position.y -= g.height / 2;
                this.add(g);
                return g;
            }
            createProgressBarGraphics(color) {
                let g = this.game.add.graphics(this.game.canvas.width * .5, this.game.canvas.height * .5, this);
                g.beginFill(color);
                let width = this.game.canvas.width * .65;
                let height = this.game.canvas.height * .025;
                g.drawRect(0, 0, width, height);
                g.endFill();
                g.position.x -= g.width / 2;
                g.position.y -= g.height / 2;
                this.add(g);
                return g;
            }
            static add(state, boxColor, fillColor, backgroundColor) {
                let loadScreenSettings = new LoadScreenSettings(boxColor, fillColor, backgroundColor);
                let loadScreen = new LoadScreen(state.game, loadScreenSettings);
                state.add.existing(loadScreen);
                loadScreen.listenToState(state);
            }
        }
        UI.LoadScreen = LoadScreen;
        class LoadScreenSettings {
            constructor(boxColor, fillColor, backgroundColor) {
                this.boxColor = null;
                this.fillColor = null;
                this.backgroundColor = null;
                this.boxColor = boxColor;
                this.fillColor = fillColor;
                this.backgroundColor = backgroundColor;
            }
        }
    })(UI = Funday.UI || (Funday.UI = {}));
})(Funday || (Funday = {}));
var Funday;
(function(Funday) {
    var UI;
    (function(UI) {
        class NotificationBoard extends Phaser.Group {
            constructor(game, durationMs) {
                super(game);
                this.currentIndex = 0;
                this.durationMs = 0;
                this.durationMs = durationMs;
                this.startNotificationTextCycle();
            }
            startNotificationTextCycle() {
                if (this.children.length <= 1) {
                    return;
                }
                let game = this.game;
                let animationFactory = game.services.animation;
                let waitAnim = animationFactory.delay(this.durationMs);
                waitAnim.onComplete.add(this.showNextNotification, this);
                let loop = animationFactory.loop(waitAnim);
                loop.play();
            }
            showNextNotification() {
                let game = this.game;
                let animationFactory = game.services.animation;
                this.currentIndex = (this.currentIndex + 1) % this.children.length;
                let animScaleDown = animationFactory.tween(this.scale, {
                    x: 0,
                    y: 0
                }, 150);
                let animScaleUp = animationFactory.tween(this.scale, {
                    x: 1,
                    y: 1
                }, 150);
                animScaleDown.onComplete.add(this.showCurrentChildIndex, this);
                let queue = animationFactory.queue([animScaleDown, animScaleUp]);
                queue.play();
            }
            showCurrentChildIndex() {
                for (let index = 0; index < this.children.length; index++) {
                    const child = this.children[index];
                    child.visible = this.currentIndex === index;
                }
            }
        }
        UI.NotificationBoard = NotificationBoard;
    })(UI = Funday.UI || (Funday.UI = {}));
})(Funday || (Funday = {}));
var Funday;
(function(Funday) {
    var UI;
    (function(UI) {
        class ShadowTextGroup extends Phaser.Group {
            constructor(game, bitmapFontKey, caption, size, color, shadowOffset = 4) {
                super(game);
                this.text = null;
                this.shadowText = null;
                let shadowText = game.add.bitmapText(0, 0, bitmapFontKey, caption, size);
                shadowText.tint = 0x000000;
                shadowText.anchor.setTo(.5);
                shadowText.alpha = 0.5;
                this.addChild(shadowText);
                let text = game.add.bitmapText(0, 0, bitmapFontKey, caption, size);
                text.tint = color;
                text.anchor.setTo(.5);
                this.addChild(text);
                this.text = text;
                this.shadowText = shadowText;
                this.setShadowOffset(shadowOffset);
                this.cacheAsBitmap = true;
                this.updateCache();
            }
            setText(caption) {
                this.text.text = caption;
                this.shadowText.text = caption;
                this.updateCache();
            }
            setShadowOffset(shadowOffset) {
                let offset = this.game.applyResolutionRatio(shadowOffset);
                this.shadowText.position.x = offset;
                this.shadowText.position.y = offset;
                this.updateCache();
            }
            setAnchor(x, y) {
                this.text.anchor.x = x;
                this.text.anchor.y = y;
                this.shadowText.anchor.x = x;
                this.shadowText.anchor.y = y;
                this.updateCache();
            }
            setShadowColorAndAlpha(color, alpha = 1.0) {
                this.shadowText.tint = color;
                this.shadowText.alpha = alpha;
                this.updateCache();
            }
            setFontSize(size) {
                this.text.fontSize = size;
                this.shadowText.fontSize = size;
                this.updateCache();
            }
        }
        UI.ShadowTextGroup = ShadowTextGroup;
    })(UI = Funday.UI || (Funday.UI = {}));
})(Funday || (Funday = {}));
var Funday;
(function(Funday) {
    var UI;
    (function(UI) {
        class TransitionHandler {
            constructor(game) {
                this.game = null;
                this.game = game;
            }
            handleTransition(from, to) {}
        }
        UI.TransitionHandler = TransitionHandler;
    })(UI = Funday.UI || (Funday.UI = {}));
})(Funday || (Funday = {}));
var Funday;
(function(Funday) {
    var UI;
    (function(UI) {
        class View extends Phaser.Group {
            constructor(game) {
                super(game);
                this.onTransitionInStart = new Phaser.Signal();
                this.onTransitionInComplete = new Phaser.Signal();
                this.onTransitionOutStart = new Phaser.Signal();
                this.onTransitionOutComplete = new Phaser.Signal();
                this.parent.removeChild(this);
            }
            onTransitionInStarted() {
                this.onTransitionInStart.dispatch();
            }
            onTransitionInCompleted() {
                this.onTransitionInComplete.dispatch();
            }
            onTransitionOutStarted() {
                this.onTransitionOutStart.dispatch();
            }
            onTranstionOutCompleted() {
                this.onTransitionOutComplete.dispatch();
            }
        }
        UI.View = View;
    })(UI = Funday.UI || (Funday.UI = {}));
})(Funday || (Funday = {}));
var Funday;
(function(Funday) {
    var UI;
    (function(UI) {
        class ViewContainer extends UI.View {
            constructor(game) {
                super(game);
                this.views = new Array();
                this.currentView = null;
                this.position.x = game.canvas.width * .5;
                this.position.y = game.canvas.height * .5;
            }
            addView(view) {
                this.views.push(view);
                this.add(view);
            }
            transitionTo(view, transitionHandler) {
                transitionHandler.handleTransition(this.currentView, view);
            }
        }
        UI.ViewContainer = ViewContainer;
    })(UI = Funday.UI || (Funday.UI = {}));
})(Funday || (Funday = {}));
var Funday;
(function(Funday) {
    var UI;
    (function(UI) {
        var Modal;
        (function(Modal_1) {
            class Modal extends Phaser.Sprite {
                constructor(game) {
                    super(game, 0, 0, null);
                    this.currentView = null;
                    this.game = null;
                    this.hasBeenInitialized = false;
                    this.isHiding = false;
                    this.onHidden = new Phaser.Signal();
                    this.game = game;
                }
                static generateBackgroundTexture(game) {
                    if (!Funday.UI.Modal.Modal.backgroundTexture) {
                        let bmd = new Phaser.BitmapData(game, "ModalBackground", game.canvas.width, game.canvas.height);
                        bmd.ctx.fillStyle = "black";
                        bmd.ctx.globalAlpha = .6;
                        bmd.ctx.fillRect(0, 0, game.canvas.width, game.canvas.height);
                        bmd.ctx.globalAlpha = 1;
                        bmd.dirty = true;
                        Funday.UI.Modal.Modal.backgroundTexture = bmd;
                    }
                    return Funday.UI.Modal.Modal.backgroundTexture;
                }
                static getBackgroundTexture(game) {
                    return this.generateBackgroundTexture(game);
                }
                setView(view) {
                    this.removeCurrentView();
                    if (view) {
                        this.addChild(view);
                        this.currentView = view;
                    }
                }
                removeCurrentView() {
                    if (this.currentView) {
                        this.currentView.kill();
                        this.removeChild(this.currentView);
                        this.currentView = null;
                    }
                }
                show() {
                    if (!this.hasBeenInitialized) {
                        this.loadTexture(Modal.getBackgroundTexture(this.game));
                        this.hasBeenInitialized = true;
                    }
                    this.revive();
                    this.currentView.revive();
                    this.inputEnabled = true;
                    let alphaAnim = this.game.services.animation.tween(this, {
                        alpha: 1
                    }, 500);
                    if (this.currentView) {
                        this.currentView.scale.setTo(0);
                        this.currentView.alignIn(this, Phaser.CENTER);
                        let tweenAnim = this.game.services.animation.tween(this.currentView.scale, {
                            x: 1,
                            y: 1
                        }, 200, Phaser.Easing.Back.Out);
                        let queue = this.game.services.animation.queue([alphaAnim, tweenAnim]);
                        let currentView = this.currentView;
                        queue.onPlay.add(function() {
                            currentView.onTransitionInStarted();
                        });
                        queue.onComplete.add(function() {
                            currentView.onTransitionInCompleted();
                        }, this);
                        queue.play();
                    } else {
                        alphaAnim.play();
                    }
                }
                instantShow() {
                    if (!this.hasBeenInitialized) {
                        this.loadTexture(Modal.getBackgroundTexture(this.game));
                        this.hasBeenInitialized = true;
                    }
                    this.currentView.scale.setTo(1);
                    this.currentView.alignIn(this, Phaser.CENTER);
                    this.alpha = 1;
                    this.visible = true;
                    this.revive();
                    this.currentView.revive();
                    this.inputEnabled = true;
                    this.currentView.onTransitionInStarted();
                    this.currentView.onTransitionInCompleted();
                }
                instantHide() {
                    this.alpha = 0;
                    this.onHide();
                }
                hide() {
                    this.isHiding = true;
                    let tweenAnim = this.game.services.animation.tween(this.currentView.scale, {
                        x: 0,
                        y: 0
                    }, 200, Phaser.Easing.Back.In);
                    let alphaAnim = this.game.services.animation.tween(this, {
                        alpha: 0
                    }, 500);
                    let queue = this.game.services.animation.queue([tweenAnim, alphaAnim]);
                    queue.onPlay.add(this.currentView.onTransitionOutStarted, this.currentView);
                    queue.onComplete.add(this.onHide, this);
                    queue.onPlay.add(this.currentView.onTransitionOutStarted, this.currentView);
                    queue.onComplete.add(this.currentView.onTranstionOutCompleted, this.currentView);
                    queue.play();
                }
                onHide() {
                    this.kill();
                    this.currentView.onTranstionOutCompleted();
                    this.currentView.kill();
                    this.inputEnabled = false;
                    this.isHiding = false;
                    this.onHidden.dispatch();
                }
                update() {
                    if (this.alive && this.currentView) {
                        this.currentView.update();
                    }
                }
            }
            Modal.backgroundTexture = null;
            Modal_1.Modal = Modal;
        })(Modal = UI.Modal || (UI.Modal = {}));
    })(UI = Funday.UI || (Funday.UI = {}));
})(Funday || (Funday = {}));
var Funday;
(function(Funday) {
    var Utils;
    (function(Utils) {
        class EnumToObjectMap {
            constructor() {
                this.backingArray = new Array();
            }
            add(key, obj) {
                if (this.backingArray[key]) {
                    throw "Enum to Object map already contains key";
                }
                this.backingArray[key] = obj;
            }
            get(key) {
                return this.backingArray[key];
            }
        }
        Utils.EnumToObjectMap = EnumToObjectMap;
    })(Utils = Funday.Utils || (Funday.Utils = {}));
})(Funday || (Funday = {}));
var Funday;
(function(Funday) {
    var Utils;
    (function(Utils) {
        class LootTable {
            constructor() {
                this.autoResolveDroppedLootTables = true;
                this.lootTable = new Array();
            }
            addItem(item, weight) {
                let dropItem = new WeightedItem(item, weight);
                this.lootTable.push(dropItem);
            }
            getRandomItem() {
                let totalWeight = this.calculateTotalWeight();
                let targetWeight = this.getRandomValue(0, totalWeight);
                let lootTableItem = this.getDropItemFromWeight(targetWeight);
                return lootTableItem;
            }
            isEmpty() {
                return this.lootTable.length === 0;
            }
            hasItems() {
                return !this.isEmpty();
            }
            calculateTotalWeight() {
                let sum = 0;
                for (let i = 0; i < this.lootTable.length; i++) {
                    const weightedItem = this.lootTable[i];
                    sum += weightedItem.weight;
                }
                return sum;
            }
            getRandomValue(fromInclusive, toExclusive) {
                return Math.random() * (toExclusive - fromInclusive) + fromInclusive;
            }
            getDropItemFromWeight(targetWeight) {
                let item = null;
                let sum = 0;
                for (let i = 0; i < this.lootTable.length; i++) {
                    const weightedItem = this.lootTable[i];
                    sum += weightedItem.weight;
                    if (sum >= targetWeight) {
                        item = weightedItem.item;
                        if (this.autoResolveDroppedLootTables && item instanceof LootTable) {
                            item = item.getRandomItem();
                        }
                        break;
                    }
                }
                return item;
            }
        }
        Utils.LootTable = LootTable;
        class WeightedItem {
            constructor(item, weight) {
                this.item = null;
                this.weight = 0;
                this.item = item;
                this.weight = weight;
            }
        }
        Utils.WeightedItem = WeightedItem;
    })(Utils = Funday.Utils || (Funday.Utils = {}));
})(Funday || (Funday = {}));
var Funday;
(function(Funday) {
    var Utils;
    (function(Utils) {
        class MaskHelper {
            static addRectangleMask(game, width, height, parent) {
                let graphics = game.add.graphics(0, 0);
                if (parent) {
                    parent.addChild(graphics);
                }
                graphics.beginFill(0xFFFF00);
                graphics.drawRect(0, 0, width, height);
                graphics.endFill();
                return graphics;
            }
        }
        Utils.MaskHelper = MaskHelper;
    })(Utils = Funday.Utils || (Funday.Utils = {}));
})(Funday || (Funday = {}));
var MobilePie;
(function(MobilePie) {
    class LocalisationUtility {
        constructor(game, language = "en", jsonAsset = "localisation") {
            this.language = "en";
            this.game = game;
            this.language = language;
            this.localisationData = this.game.cache.getJSON(jsonAsset);
        }
        SetLanguage(langauge) {
            this.language = langauge;
        }
        GetLanguage() {
            if (this.localisationData) {
                const first = Object.keys(this.localisationData)[0];
                return this.localisationData[first][this.language] ? this.language : "en";
            } else {
                return this.language;
            }
        }
        GetString(key) {
            if (!this.localisationData) {
                return key;
            }
            const data = this.localisationData[key];
            if (!data) {
                return key;
            }
            const locText = data[this.language];
            if (!locText) {
                return data["en"];
            }
            return locText;
        }
    }
    MobilePie.LocalisationUtility = LocalisationUtility;
})(MobilePie || (MobilePie = {}));
var Funday;
(function(Funday) {
    var Gumball;
    (function(Gumball) {
        class AchievementController {
            constructor(game) {
                this.verbose = true;
                this.game = game;
            }
            init() {
                this.achievements = [];
                this.achievements.push(this.loadAchievementFromSDK(achievementIDs.jumpto150));
                this.achievements.push(this.loadAchievementFromSDK(achievementIDs.collect250coins));
                this.achievements.push(this.loadAchievementFromSDK(achievementIDs.usespring50times));
                this.achievements.push(this.loadAchievementFromSDK(achievementIDs.break100blocks));
                this.achievements.push(this.loadAchievementFromSDK(achievementIDs.unlockall));
                for (var i = this.achievements.length - 1; i >= 0; i--) {
                    if (this.achievements[i] === undefined) {
                        this.achievements.splice(i, 1);
                    }
                }
            }
            loadAchievementFromSDK(id) {
                let cnArcadeAchievService = this.game.services.achievement;
                if (cnArcadeAchievService instanceof Funday.Service.AchievementService)
                    return undefined;
                let loadedAchiev = cnArcadeAchievService.loadAchievement(id);
                let achiev = undefined;
                if (loadedAchiev != undefined) {
                    achiev = new Funday.Service.Achievement.Achievement(id, loadedAchiev.timesRequired);
                    this.game.services.achievement.getProgress(achiev).then((progress) => {
                        achiev.progress = progress;
                        achiev.hasBeenAwarded = loadedAchiev.completed;
                        console.log("[Achievement Repository] Loaded achievement", loadedAchiev.title, ". Progress: " + achiev.progress + "/" + achiev.maxProgress, "has been awarded =", achiev.hasBeenAwarded);
                    });
                } else {
                    console.log("[Achievement Repository] Could not load achievement with id: " + id);
                }
                return achiev;
            }
            getAchievementById(id) {
                for (var i = 0; this.achievements.length; i++) {
                    if (this.achievements[i].id === id) {
                        return this.achievements[i];
                    }
                }
                return undefined;
            }
            saveAllProgress() {
                this.achievements.forEach(achiev => {
                    this.game.services.achievement.updateProgress(achiev, achiev.progress);
                });
                if (this.verbose)
                    console.log("[Achievement Controller] Saved achievement progress");
            }
            onScoreChange(score) {
                let jumpAchiev = this.getAchievementById(achievementIDs.jumpto150);
                if (!jumpAchiev)
                    return;
                if (score > jumpAchiev.progress) {
                    jumpAchiev.progress = score;
                }
                if (score >= jumpAchiev.maxProgress && !jumpAchiev.hasBeenAwarded) {
                    this.checkForAchivementUnlock();
                }
            }
            onCoinCollect(coins) {
                let coinAchiev = this.getAchievementById(achievementIDs.collect250coins);
                if (!coinAchiev)
                    return;
                if (coins > coinAchiev.progress) {
                    coinAchiev.progress = coins;
                }
                this.checkForAchivementUnlock();
            }
            onAllUnlocked() {
                let unlockAchiev = this.getAchievementById(achievementIDs.unlockall);
                if (!unlockAchiev)
                    return;
                unlockAchiev.progress = 1;
                this.checkForAchivementUnlock();
            }
            onSpringJump() {
                let springAchiev = this.getAchievementById(achievementIDs.usespring50times);
                if (!springAchiev)
                    return;
                springAchiev.progress += 1;
                this.checkForAchivementUnlock();
            }
            onBreakBlock() {
                let breakableAchiev = this.getAchievementById(achievementIDs.break100blocks);
                if (!breakableAchiev)
                    return;
                breakableAchiev.progress += 1;
                this.checkForAchivementUnlock();
            }
            checkForAchivementUnlock() {
                let awarded = false;
                for (let index = 0; index < this.achievements.length; index++) {
                    const achievement = this.achievements[index];
                    if (achievement.shouldBeAwarded()) {
                        this.game.services.achievement.award(achievement, undefined);
                        awarded = true;
                    }
                }
                if (awarded)
                    this.saveAllProgress();
            }
        }
        Gumball.AchievementController = AchievementController;
        class achievementIDs {}
        achievementIDs.jumpto150 = "9c0b716c-6c54-4f00-8cf4-bc1fb4612b95";
        achievementIDs.collect250coins = "ed6cd3da-3459-4db6-93bd-c0da3f35671a";
        achievementIDs.usespring50times = "38a99a3e-6c1b-4054-a350-b2ac283aae15";
        achievementIDs.break100blocks = "a85511d9-df49-473d-b26f-7dfe0fbdacc0";
        achievementIDs.unlockall = "f941ad1f-1099-4091-91e9-04f83af9f59d";
        Gumball.achievementIDs = achievementIDs;
    })(Gumball = Funday.Gumball || (Funday.Gumball = {}));
})(Funday || (Funday = {}));
var Funday;
(function(Funday) {
    var Gumball;
    (function(Gumball) {
        class CameraHelper {
            constructor(game) {
                this.game = game;
                this.halfWidth = this.game.camera.width / 2;
                this.halfHeight = this.game.camera.height / 2;
            }
            panTo(x, y, duration, easing) {
                return this.game.add.tween(this.game.camera).to({
                    x: x - this.halfWidth,
                    y: y - this.halfHeight
                }, duration, easing, true, 0);
            }
            follow(target, style, lerpX, lerpY) {
                this.game.camera.follow(target, style, lerpX, lerpY);
            }
        }
        Gumball.CameraHelper = CameraHelper;
    })(Gumball = Funday.Gumball || (Funday.Gumball = {}));
})(Funday || (Funday = {}));
var Funday;
(function(Funday) {
    var Gumball;
    (function(Gumball) {
        class CoreController {
            constructor(game) {
                this.paused = false;
                this.movementEnabledOnPause = false;
                this.game = game;
                let cameraHelper = new Gumball.CameraHelper(game);
                let player = new Gumball.Player(game, cameraHelper);
                let uiController = new Gumball.UIController(game, player.playerScore);
                this.player = player;
                this.ui = uiController;
                this.cameraHelper = cameraHelper;
                let tutorialController = new Gumball.TutorialController(game, this.ui, this.player);
                let levelController = new Gumball.LevelController(game, tutorialController);
                let background = new Gumball.BackgroundController(game);
                background.kill();
                this.player.fallOffEvent.add(this.gameOver.bind(this));
                this.player.playerMovement.gridPositionChanged.add(levelController.playerPosChanged, levelController);
                game.stage.add(background, true, 0);
                game.stage.add(this.ui);
                this.levelController = levelController;
                this.background = background;
                this.tutorial = tutorialController;
                window.core = this;
            }
            setup() {
                this.player.loadCostume();
                this.player.setAtPosition(new Gumball.Vec3(0, 0, 0));
                this.player.playerMovement.setupBinding();
                this.player.playerMovement.disable();
                this.player.playerScore.reset();
                this.player.revive();
                this.revives = 0;
                let startPosition = this.game.grid.getTopOfBlockPosition(new Gumball.Vec3(0, 0, 0));
                this.game.camera.setPosition(startPosition.x - this.game.camera.width / 2, (startPosition.y + this.player.cameraSprite.y) - this.game.camera.height / 2);
                this.levelController.setupLevel();
                this.background.revive();
                this.background.init();
                this.game.world.add(this.levelController.levelGroup);
                this.levelController.levelGroup.add(this.player);
                if (this.tutorial.isTutorialActive()) {
                    this.start();
                    return;
                };
                this.start();
            }
            start() {
                this.game.camera.follow(this.player.cameraSprite, 0, 0.1, 0.1);
                this.player.playerMovement.enable();
                this.levelController.startLevel();
            }
            tearDown() {
                this.levelController.clearAll();
                this.background.kill();
            }
            gameOver() {
                this.reallyGameOver();
            }
            reallyGameOver() {
                this.ui.updateGameOverPrompt(this.player.playerScore.score, this.player.playerScore.highscore);
                this.ui.showPrompt(this.ui.gameOverPrompt);
                this.levelController.tearDown();
                this.player.playerScore.saveCoinAndHighscore();
                this.player.playerScore.setDoubleCoins(false);
                this.game.achiev.saveAllProgress();
                this.game.time.events.add(2000, () => {
                    this.ui.hidePrompt(this.ui.gameOverPrompt);
                    let fade = this.game.services.animation.fadeToBlack(250);
                    fade.onComplete.addOnce(() => {
                        this.tearDown();
                        if (this.tutorial.isTutorialActive()) {
                            this.game.services.animation.fadeFromBlack(500).play();
                            this.setup();
                        } else {
                            this.ui.gameOverPrompt.kill();
                            this.ui.blackOverlay.kill();
                            this.game.startCharSelect();
                        }
                    });
                    fade.play();
                });
            }
            pause() {
                this.game.time.events.pause();
                this.game.tweens.pauseAll();
                this.paused = true;
                this.movementEnabledOnPause = this.player.playerMovement.isEnabled();
                this.levelController.levelGroup.forEachAlive((obj) => {
                    if (obj instanceof Gumball.GameObject) {
                        obj.pause();
                        if (obj.animations.currentAnim)
                            obj.animations.paused = true;
                    }
                });
                this.player.playerMovement.disable(true);
            }
            resume() {
                this.game.time.events.resume();
                this.game.tweens.resumeAll();
                this.paused = false;
                this.levelController.levelGroup.forEachAlive((obj) => {
                    if (obj instanceof Gumball.GameObject) {
                        obj.resume();
                        if (obj.animations.currentAnim)
                            obj.animations.paused = false;
                    }
                });
                if (this.movementEnabledOnPause) {
                    this.player.playerMovement.enable();
                }
            }
            isPaused() {
                return this.paused;
            }
            update() {}
        }
        Gumball.CoreController = CoreController;
    })(Gumball = Funday.Gumball || (Funday.Gumball = {}));
})(Funday || (Funday = {}));
var Funday;
(function(Funday) {
    var Gumball;
    (function(Gumball) {
        class DebugMenu extends Phaser.Group {
            constructor(game) {
                super(game);
                this.fields = [];
                this.game = game;
                this.position.y += 60;
                this.background = game.add.graphics(0, 0, this);
                this.visible = false;
            }
            addKeyListener() {
                this.game.input.keyboard.addKey(Phaser.KeyCode.D).onUp.add(() => {
                    this.visible = !this.visible;
                });
            }
            updateBackground() {
                this.background.beginFill(0x000000);
                this.background.drawRect(0, 0, 400, this.fields.length * this.fields[0].height * 2);
                this.background.endFill();
            }
            addField(label, value) {
                let field = new Phaser.Text(this.game, 10, 10 + this.fields.length * 80, label + ": " + value);
                field.anchor.set(0, 0);
                field.font = 'Arial Black';
                field.fontSize = 32;
                field.fontWeight = 'bold';
                field.addColor('#ffffff', 0);
                this.add(field);
                this.fields.push(field);
                this.updateBackground();
            }
            addButton(label, callback) {
                let field = new Phaser.Text(this.game, 10, 10 + this.fields.length * 80 + 15, label);
                field.anchor.set(0, 0);
                field.font = 'Arial Black';
                field.fontSize = 32;
                field.fontWeight = 'bold';
                field.addColor('#ffffff', 0);
                let btnBackground = this.game.add.graphics(0, 10 + this.fields.length * 80, this);
                btnBackground.beginFill(0xFF00FF);
                btnBackground.drawRect(0, 0, field.width + 20, field.height * 1.5);
                btnBackground.endFill();
                field.inputEnabled = true;
                field.events.onInputUp.add(callback);
                this.add(btnBackground);
                this.add(field);
                this.fields.push(field);
                this.updateBackground();
            }
        }
        Gumball.DebugMenu = DebugMenu;
    })(Gumball = Funday.Gumball || (Funday.Gumball = {}));
})(Funday || (Funday = {}));
var Funday;
(function(Funday) {
    var Gumball;
    (function(Gumball) {
        class DragonbonesLoader {
            constructor(game, path) {
                this.quality = "HD";
                this.dragonbonePath = "";
                this.verbose = false;
                this.game = game;
                this.dragonbonePath = path;
                this.loadedAnimations = [];
                dragonBones.PhaserFactory.init(this.game);
            }
            setQuality(quality) {
                this.quality = quality;
            }
            loadDBAnimation(name) {
                let skeletonPath = this.dragonbonePath + name + '_ske_' + this.quality + '.json';;
                let textureJSONPath = this.dragonbonePath + name + '_tex_' + this.quality + '.json';
                let texturePNGPath = this.dragonbonePath + name + '_tex_' + this.quality + '.png';
                if (this.verbose)
                    console.log("[DragonbonesLoader] Loading skeleton at:", skeletonPath, "\nTexture json at:", textureJSONPath, "\TtexturePNG at:", texturePNGPath);
                this.game.load.json(name + "_ske", skeletonPath);
                this.game.load.json(name + "_tex_json", textureJSONPath);
                this.game.load.image(name + "_tex_img", texturePNGPath);
                this.loadedAnimations.push(name);
            }
            createDBAnimations() {
                let factory = dragonBones.PhaserFactory.factory;
                this.loadedAnimations.forEach((animation) => {
                    let json = this.game.cache.getItem(animation + "_ske", Phaser.Cache.JSON).data;
                    factory.parseDragonBonesData(json);
                    factory.parseTextureAtlasData(this.game.cache.getItem(animation + "_tex_json", Phaser.Cache.JSON).data, this.game.cache.getImage(animation + "_tex_img", true).base);
                    if (this.verbose) {
                        console.log("For animation", animation, "adding:");
                        for (var anim of json.armature[0].animation) {
                            console.log(anim.name);
                        }
                    }
                });
            }
        }
        Gumball.DragonbonesLoader = DragonbonesLoader;
    })(Gumball = Funday.Gumball || (Funday.Gumball = {}));
})(Funday || (Funday = {}));
var Funday;
(function(Funday) {
    var Gumball;
    (function(Gumball) {
        class Game extends Toolbox.CartoonNetworkGame {
            constructor(sdk) {
                super();
                this.version.name = "";
                this.version.major = 1;
                this.version.minor = 0;
                this.version.revision = 5;
                this.setupSDK(sdk);
                this.state.add(StateKey.Boot, Gumball.StateBoot, false);
                this.state.add(StateKey.Load, Gumball.StateLoad, false);
                this.state.add(StateKey.Splash, Gumball.StateSplash, false);
                this.state.add(StateKey.CharSelect, Gumball.StateCharSelect, false);
                this.state.add(StateKey.Game, Gumball.StateGame, false);
                window.game = this;
                this.startBoot();
            }
            setupSDK(sdk) {
                if (sdk == undefined)
                    return;
                this.services = new Funday.Service.CNArcadeProvider(sdk, this);
                sdk.setPlayFunction(() => {
                    this.paused = false;
                });
                sdk.setPauseFunction(() => {
                    this.paused = true;
                });
                let defaultState = this.getDefaultState();
                this.services.persistence.loadOrSetDefault(defaultState);
                this.services.persistence.highscoreKey = PersistenceKeys.HIGHSCORE;
            }
            startBoot() {
                this.state.start(StateKey.Boot);
            }
            startLoad() {
                this.localis = new MobilePie.LocalisationUtility(this, document.documentElement.lang);
                this.state.start(StateKey.Load);
                this.stage.disableVisibilityChange = false;
                this.tweens.frameBased = true;
                this.world.setBounds(0, 0, 10000000, 100000000);
                this.soundRepo = new Gumball.SoundRepo(this);
                this.achiev = new Gumball.AchievementController(this);
                this.achiev.init();
                this.onResume.add(this.browserResume, this);
                const lang = this.localis.GetLanguage();
                WebFont.load({
                    custom: {
                        families: [
                            "FredBurger Black"
                        ],
                        urls: [
                            lang != "ar" ? "assets/fonts/fredburger.css" : "assets/fonts/fredburger_arabic.css"
                        ]
                    }
                });
            }
            startSplash() {
                this.state.start(StateKey.Splash);
                this.soundRepo.startMusic();
            }
            startCharSelect() {
                this.state.start(StateKey.CharSelect, false);
            }
            startGame() {
                this.state.start(StateKey.Game, false);
            }
            onLoadComplete() {
                this.grid = new Gumball.Grid(this);
            }
            getDefaultState() {
                let defaultState = {};
                defaultState[PersistenceKeys.COINS] = 0;
                defaultState[PersistenceKeys.HIGHSCORE] = 0;
                defaultState[PersistenceKeys.CHARLOCKS] = [false, true, true, true, true];
                defaultState[PersistenceKeys.TUTORIAL] = false;
                return defaultState;
            }
            browserResume() {
                if (this.core && this.core.isPaused()) {
                    this.time.events.pause();
                }
            }
            createButton(x, y, spriteId) {
                let btn = super.createButton(x, y, spriteId);
                btn.button.onInputUp.add(() => {
                    this.soundRepo.onMouseClick();
                });
                return btn;
            }
        }
        Gumball.Game = Game;
        class StateKey {}
        StateKey.Boot = "Boot";
        StateKey.Load = "Load";
        StateKey.Splash = "Splash";
        StateKey.CharSelect = "CharSelect";
        StateKey.Game = "Game";
        Gumball.StateKey = StateKey;
        class PersistenceKeys {}
        PersistenceKeys.COINS = "coins";
        PersistenceKeys.HIGHSCORE = "highscore";
        PersistenceKeys.CHARLOCKS = "charlocks";
        PersistenceKeys.TUTORIAL = "tutorial";
        Gumball.PersistenceKeys = PersistenceKeys;
    })(Gumball = Funday.Gumball || (Funday.Gumball = {}));
})(Funday || (Funday = {}));
var Funday;
(function(Funday) {
    var Gumball;
    (function(Gumball) {
        class GameObjectPool {
            constructor() {
                this.pool = [];
            }
            getDeadObj(obj, game, x, y, spriteId) {
                let returnObj = null;
                for (let pooledObj of this.pool) {
                    if (!pooledObj.alive) {
                        returnObj = pooledObj;
                        returnObj.position.x = x;
                        returnObj.position.y = y;
                        returnObj.revive();
                        break;
                    }
                };
                if (returnObj == null) {
                    returnObj = new obj(game, x, y, spriteId);
                    this.pool.push(returnObj);
                }
                return returnObj;
            }
            getAllAlive() {
                let objs = [];
                for (let pooledObj of this.pool) {
                    if (pooledObj.alive)
                        objs.push(pooledObj);
                }
                return objs;
            }
            getAll() {
                return this.pool;
            }
        }
        Gumball.GameObjectPool = GameObjectPool;
    })(Gumball = Funday.Gumball || (Funday.Gumball = {}));
})(Funday || (Funday = {}));
var Funday;
(function(Funday) {
    var Gumball;
    (function(Gumball) {
        class SoundRepo {
            constructor(game) {
                this.music = null;
                this.sfxMute = false;
                this.sfxSounds = [];
                this.game = game;
            }
            startMusic(loop = false) {
                if (!this.music || loop) {
                    this.music = this.game.playSound(Gumball.AudioLibrary.main.music.gumballMusicLOOP);
                    this.music.loop = true;
                    this.music.onStop.addOnce(() => {
                        this.startMusic(true);
                    });
                }
            }
            muteSFX() {
                this.sfxMute = true;
                this.sfxSounds.forEach((sound) => {
                    sound.mute = true;
                });
            }
            unMuteSFX() {
                this.sfxMute = false;
                this.sfxSounds.forEach((sound) => {
                    sound.mute = false;
                });
            }
            isSFXMuted() {
                return this.sfxMute;
            }
            isMusicMuted() {
                return this.music.mute;
            }
            muteMusic() {
                this.music.mute = true;
            }
            unMuteMusic() {
                this.music.mute = false;
            }
            pauseSFX() {
                this.sfxSounds.forEach((sound) => {
                    sound.pause();
                });
            }
            resumeSFX() {
                this.sfxSounds.forEach((sound) => {
                    sound.resume();
                });
            }
            onBricksFallDown(gridPosition) {
                let volume = 1.0;
                if (gridPosition) {
                    volume = Phaser.Math.clamp(1.2 - this.game.core.player.gridPosition.distance3D(gridPosition) / 10, 0, 1.0);
                }
                this.playRandomKey(Gumball.AudioLibrary.main.sfxBricksFall, volume);
            }
            onCoinPickup() {
                this.play(Gumball.AudioLibrary.main.sfxCoin.sfxCoin);
            }
            onBiggerCoins() {
                this.play(Gumball.AudioLibrary.main.sfxBiggerCoins.sfxBiggerCoins);
            }
            onFallOff(character) {
                this.play(Gumball.AudioLibrary.main.sfxFallOffCliff.sfxFallOffCliff);
                if (character == Gumball.PlayerCostume.gumball)
                    this.play(Gumball.AudioLibrary.main.voiceFallOffCliff.voiceFallOffCliffGumball);
                if (character == Gumball.PlayerCostume.darwin)
                    this.play(Gumball.AudioLibrary.main.voiceFallOffCliff.voiceFallOffCliffDarwin);
                if (character == Gumball.PlayerCostume.anais)
                    this.play(Gumball.AudioLibrary.main.voiceFallOffCliff.voiceFallOffCliffAnais);
                if (character == Gumball.PlayerCostume.richard)
                    this.play(Gumball.AudioLibrary.main.voiceFallOffCliff.voiceFallOffCliffRichard);
                if (character == Gumball.PlayerCostume.carrie)
                    this.play(Gumball.AudioLibrary.main.voiceFallOffCliff.voiceFallOffCliffCarrie);
            }
            onFallThroughHole(character) {
                if (character == Gumball.PlayerCostume.richard) {
                    this.onRichardFallThroughHole();
                    return;
                }
                this.onFallOff(character);
            }
            onRichardFallThroughHole() {
                this.play(Gumball.AudioLibrary.main.voiceRichardStuckFall.voiceRichardStuckFall);
            }
            onBricksFallAtGameOver() {
                this.play(Gumball.AudioLibrary.main.sfxGameOverBricksFallDown.sfxGameOverBricksFallDown);
            }
            onJump(character) {
                if (character == Gumball.PlayerCostume.gumball)
                    this.playRandomKey(Gumball.AudioLibrary.main.sfxJump);
                if (character == Gumball.PlayerCostume.darwin)
                    this.playRandomKey(Gumball.AudioLibrary.main.sfxJumpDarwin);
                if (character == Gumball.PlayerCostume.anais)
                    this.playRandomKey(Gumball.AudioLibrary.main.sfxJumpAnais);
                if (character == Gumball.PlayerCostume.richard)
                    this.playRandomKey(Gumball.AudioLibrary.main.sfxJumpRichard);
                if (character == Gumball.PlayerCostume.carrie)
                    this.playRandomKey(Gumball.AudioLibrary.main.sfxJumpCarrie);
                if (Math.random() < 0.33) {
                    if (character == Gumball.PlayerCostume.gumball)
                        this.playRandomKey(Gumball.AudioLibrary.main.voiceGumballJump);
                    if (character == Gumball.PlayerCostume.darwin)
                        this.playRandomKey(Gumball.AudioLibrary.main.voiceJumpDarwin);
                    if (character == Gumball.PlayerCostume.anais)
                        this.playRandomKey(Gumball.AudioLibrary.main.voiceJumpAnais);
                    if (character == Gumball.PlayerCostume.richard)
                        this.playRandomKey(Gumball.AudioLibrary.main.voiceJumpRichard);
                    if (character == Gumball.PlayerCostume.carrie)
                        this.playRandomKey(Gumball.AudioLibrary.main.voiceJumpCarrie);
                }
            }
            onJumpHitBricks() {
                this.playRandomKey(Gumball.AudioLibrary.main.sfxJumpHitBricks);
            }
            onDestroyBricks() {
                this.playRandomKey(Gumball.AudioLibrary.main.sfxJumpDestroyBricks);
            }
            onNewHighscore(character) {
                if (character == Gumball.PlayerCostume.gumball)
                    this.playRandomKey(Gumball.AudioLibrary.main.voiceSuccessHighscore.gumball);
                if (character == Gumball.PlayerCostume.darwin)
                    this.playRandomKey(Gumball.AudioLibrary.main.voiceSuccessHighscore.darwin);
                if (character == Gumball.PlayerCostume.anais)
                    this.playRandomKey(Gumball.AudioLibrary.main.voiceSuccessHighscore.anais);
                if (character == Gumball.PlayerCostume.richard)
                    this.playRandomKey(Gumball.AudioLibrary.main.voiceSuccessHighscore.richard);
                if (character == Gumball.PlayerCostume.carrie)
                    this.playRandomKey(Gumball.AudioLibrary.main.voiceSuccessHighscore.carrie);
            }
            onRespawn() {
                this.play(Gumball.AudioLibrary.main.sfxRespawn.sfxRespawn);
            }
            onSpringJump() {
                this.playRandomKey(Gumball.AudioLibrary.main.sfxSpringJump);
            }
            onSpringLand(character) {
                if (character == Gumball.PlayerCostume.gumball)
                    this.playRandomKey(Gumball.AudioLibrary.main.voiceSpringJumpReaction.gumball);
                if (character == Gumball.PlayerCostume.darwin)
                    this.playRandomKey(Gumball.AudioLibrary.main.voiceSpringJumpReaction.darwin);
                if (character == Gumball.PlayerCostume.anais)
                    this.playRandomKey(Gumball.AudioLibrary.main.voiceSpringJumpReaction.anais);
                if (character == Gumball.PlayerCostume.richard)
                    this.playRandomKey(Gumball.AudioLibrary.main.voiceSpringJumpReaction.richard);
                if (character == Gumball.PlayerCostume.carrie)
                    this.playRandomKey(Gumball.AudioLibrary.main.voiceSpringJumpReaction.carrie);
            }
            onStartLevel() {
                this.play(Gumball.AudioLibrary.main.sfxStartLevel.sfxStartLevel);
            }
            onBuyCharacter(character) {
                this.playRandomKey(Gumball.AudioLibrary.main.uiBuyCharacter);
                if (character == Gumball.PlayerCostume.darwin)
                    this.playRandomKey(Gumball.AudioLibrary.main.voiceBuyDarwin);
                if (character == Gumball.PlayerCostume.anais)
                    this.playRandomKey(Gumball.AudioLibrary.main.voiceBuyAnais);
                if (character == Gumball.PlayerCostume.richard)
                    this.playRandomKey(Gumball.AudioLibrary.main.voiceBuyRichard);
                if (character == Gumball.PlayerCostume.carrie)
                    this.playRandomKey(Gumball.AudioLibrary.main.voiceBuyCarrie);
            }
            onCantBuy() {
                this.playRandomKey(Gumball.AudioLibrary.main.uiCantBuyCharacter);
            }
            onCharSelectSlide() {
                this.playRandomKey(Gumball.AudioLibrary.main.uiCharacterSelectSlide);
            }
            onMouseClick() {
                this.play(Gumball.AudioLibrary.main.uiMouseClick.uiMouseClick);
            }
            play(audioId, volume = 1.0) {
                let sound = this.game.playSound(audioId, volume);
                this.addToArray(sound);
                return sound;
            }
            playRandomKey(object, volume = 1.0) {
                let keys = Object.keys(object);
                let key = Phaser.ArrayUtils.getRandomItem(keys);
                let value = object[key];
                let sound;
                if (value instanceof Funday.AudioId) {
                    sound = this.game.playSound(value, volume);
                } else if (value instanceof Object) {
                    sound = this.playRandomKey(value, volume);
                }
                this.addToArray(sound);
                return sound;
            }
            addToArray(sound) {
                this.sfxSounds.push(sound);
                sound.onMarkerComplete.addOnce(() => {
                    this.sfxSounds.splice(this.sfxSounds.indexOf(sound), 1);
                });
                sound.mute = this.isSFXMuted();
            }
        }
        Gumball.SoundRepo = SoundRepo;
    })(Gumball = Funday.Gumball || (Funday.Gumball = {}));
})(Funday || (Funday = {}));
var Funday;
(function(Funday) {
    var Gumball;
    (function(Gumball) {
        class AudioLibrary {}
        AudioLibrary.main = {
            music: {
                gumballMusicLOOP: new Funday.AudioId('main', '/music/gumball_music_LOOP'),
            },
            sfxBiggerCoins: {
                sfxBiggerCoins: new Funday.AudioId('main', '/sfx_Bigger_Coins/sfx_Bigger_Coins'),
            },
            sfxBricksFall: {
                sfxBricksFall01: new Funday.AudioId('main', '/sfx_Bricks_Fall/sfx_Bricks_Fall_01'),
                sfxBricksFall02: new Funday.AudioId('main', '/sfx_Bricks_Fall/sfx_Bricks_Fall_02'),
                sfxBricksFall03: new Funday.AudioId('main', '/sfx_Bricks_Fall/sfx_Bricks_Fall_03'),
                sfxBricksFall04: new Funday.AudioId('main', '/sfx_Bricks_Fall/sfx_Bricks_Fall_04'),
                sfxBricksFall05: new Funday.AudioId('main', '/sfx_Bricks_Fall/sfx_Bricks_Fall_05'),
                sfxBricksFall06: new Funday.AudioId('main', '/sfx_Bricks_Fall/sfx_Bricks_Fall_06'),
            },
            sfxCoin: {
                sfxCoin: new Funday.AudioId('main', '/sfx_Coin/sfx_Coin'),
            },
            sfxFallOffCliff: {
                sfxFallOffCliff: new Funday.AudioId('main', '/sfx_Fall_Off_Cliff/sfx_Fall_Off_Cliff'),
            },
            sfxGameOverBricksFallDown: {
                sfxGameOverBricksFallDown: new Funday.AudioId('main', '/sfx_Game_Over_Bricks_Fall_Down/sfx_Game_Over_Bricks_Fall_Down'),
            },
            sfxJump: {
                sfxJump01: new Funday.AudioId('main', '/sfx_Jump/sfx_Jump_01'),
                sfxJump02: new Funday.AudioId('main', '/sfx_Jump/sfx_Jump_02'),
                sfxJump03: new Funday.AudioId('main', '/sfx_Jump/sfx_Jump_03'),
                sfxJump04: new Funday.AudioId('main', '/sfx_Jump/sfx_Jump_04'),
                sfxJump05: new Funday.AudioId('main', '/sfx_Jump/sfx_Jump_05'),
                sfxJump06: new Funday.AudioId('main', '/sfx_Jump/sfx_Jump_06'),
                sfxJump07: new Funday.AudioId('main', '/sfx_Jump/sfx_Jump_07'),
                sfxJump08: new Funday.AudioId('main', '/sfx_Jump/sfx_Jump_08'),
                sfxJump09: new Funday.AudioId('main', '/sfx_Jump/sfx_Jump_09'),
                sfxJump10: new Funday.AudioId('main', '/sfx_Jump/sfx_Jump_10'),
                sfxJump11: new Funday.AudioId('main', '/sfx_Jump/sfx_Jump_11'),
                sfxJump12: new Funday.AudioId('main', '/sfx_Jump/sfx_Jump_12'),
                sfxJump13: new Funday.AudioId('main', '/sfx_Jump/sfx_Jump_13'),
                sfxJump14: new Funday.AudioId('main', '/sfx_Jump/sfx_Jump_14'),
                sfxJump15: new Funday.AudioId('main', '/sfx_Jump/sfx_Jump_15'),
                sfxJump16: new Funday.AudioId('main', '/sfx_Jump/sfx_Jump_16'),
            },
            sfxJumpAnais: {
                sfxJumpAnais01: new Funday.AudioId('main', '/sfx_Jump_Anais/sfx_Jump_Anais_01'),
                sfxJumpAnais010: new Funday.AudioId('main', '/sfx_Jump_Anais/sfx_Jump_Anais_010'),
                sfxJumpAnais011: new Funday.AudioId('main', '/sfx_Jump_Anais/sfx_Jump_Anais_011'),
                sfxJumpAnais012: new Funday.AudioId('main', '/sfx_Jump_Anais/sfx_Jump_Anais_012'),
                sfxJumpAnais013: new Funday.AudioId('main', '/sfx_Jump_Anais/sfx_Jump_Anais_013'),
                sfxJumpAnais014: new Funday.AudioId('main', '/sfx_Jump_Anais/sfx_Jump_Anais_014'),
                sfxJumpAnais015: new Funday.AudioId('main', '/sfx_Jump_Anais/sfx_Jump_Anais_015'),
                sfxJumpAnais016: new Funday.AudioId('main', '/sfx_Jump_Anais/sfx_Jump_Anais_016'),
                sfxJumpAnais02: new Funday.AudioId('main', '/sfx_Jump_Anais/sfx_Jump_Anais_02'),
                sfxJumpAnais03: new Funday.AudioId('main', '/sfx_Jump_Anais/sfx_Jump_Anais_03'),
                sfxJumpAnais04: new Funday.AudioId('main', '/sfx_Jump_Anais/sfx_Jump_Anais_04'),
                sfxJumpAnais05: new Funday.AudioId('main', '/sfx_Jump_Anais/sfx_Jump_Anais_05'),
                sfxJumpAnais06: new Funday.AudioId('main', '/sfx_Jump_Anais/sfx_Jump_Anais_06'),
                sfxJumpAnais07: new Funday.AudioId('main', '/sfx_Jump_Anais/sfx_Jump_Anais_07'),
                sfxJumpAnais08: new Funday.AudioId('main', '/sfx_Jump_Anais/sfx_Jump_Anais_08'),
                sfxJumpAnais09: new Funday.AudioId('main', '/sfx_Jump_Anais/sfx_Jump_Anais_09'),
            },
            sfxJumpCarrie: {
                sfxJumpCarrie01: new Funday.AudioId('main', '/sfx_Jump_Carrie/sfx_Jump_Carrie_01'),
                sfxJumpCarrie02: new Funday.AudioId('main', '/sfx_Jump_Carrie/sfx_Jump_Carrie_02'),
                sfxJumpCarrie03: new Funday.AudioId('main', '/sfx_Jump_Carrie/sfx_Jump_Carrie_03'),
                sfxJumpCarrie04: new Funday.AudioId('main', '/sfx_Jump_Carrie/sfx_Jump_Carrie_04'),
                sfxJumpCarrie05: new Funday.AudioId('main', '/sfx_Jump_Carrie/sfx_Jump_Carrie_05'),
                sfxJumpCarrie06: new Funday.AudioId('main', '/sfx_Jump_Carrie/sfx_Jump_Carrie_06'),
                sfxJumpCarrie07: new Funday.AudioId('main', '/sfx_Jump_Carrie/sfx_Jump_Carrie_07'),
                sfxJumpCarrie08: new Funday.AudioId('main', '/sfx_Jump_Carrie/sfx_Jump_Carrie_08'),
                sfxJumpCarrie09: new Funday.AudioId('main', '/sfx_Jump_Carrie/sfx_Jump_Carrie_09'),
                sfxJumpCarrie10: new Funday.AudioId('main', '/sfx_Jump_Carrie/sfx_Jump_Carrie_10'),
                sfxJumpCarrie11: new Funday.AudioId('main', '/sfx_Jump_Carrie/sfx_Jump_Carrie_11'),
                sfxJumpCarrie12: new Funday.AudioId('main', '/sfx_Jump_Carrie/sfx_Jump_Carrie_12'),
                sfxJumpCarrie13: new Funday.AudioId('main', '/sfx_Jump_Carrie/sfx_Jump_Carrie_13'),
                sfxJumpCarrie14: new Funday.AudioId('main', '/sfx_Jump_Carrie/sfx_Jump_Carrie_14'),
                sfxJumpCarrie15: new Funday.AudioId('main', '/sfx_Jump_Carrie/sfx_Jump_Carrie_15'),
                sfxJumpCarrie16: new Funday.AudioId('main', '/sfx_Jump_Carrie/sfx_Jump_Carrie_16'),
            },
            sfxJumpDarwin: {
                sfxJumpDarwin01: new Funday.AudioId('main', '/sfx_Jump_Darwin/sfx_Jump_Darwin_01'),
                sfxJumpDarwin02: new Funday.AudioId('main', '/sfx_Jump_Darwin/sfx_Jump_Darwin_02'),
                sfxJumpDarwin03: new Funday.AudioId('main', '/sfx_Jump_Darwin/sfx_Jump_Darwin_03'),
                sfxJumpDarwin04: new Funday.AudioId('main', '/sfx_Jump_Darwin/sfx_Jump_Darwin_04'),
                sfxJumpDarwin05: new Funday.AudioId('main', '/sfx_Jump_Darwin/sfx_Jump_Darwin_05'),
                sfxJumpDarwin06: new Funday.AudioId('main', '/sfx_Jump_Darwin/sfx_Jump_Darwin_06'),
                sfxJumpDarwin07: new Funday.AudioId('main', '/sfx_Jump_Darwin/sfx_Jump_Darwin_07'),
                sfxJumpDarwin08: new Funday.AudioId('main', '/sfx_Jump_Darwin/sfx_Jump_Darwin_08'),
                sfxJumpDarwin09: new Funday.AudioId('main', '/sfx_Jump_Darwin/sfx_Jump_Darwin_09'),
                sfxJumpDarwin10: new Funday.AudioId('main', '/sfx_Jump_Darwin/sfx_Jump_Darwin_10'),
                sfxJumpDarwin11: new Funday.AudioId('main', '/sfx_Jump_Darwin/sfx_Jump_Darwin_11'),
                sfxJumpDarwin12: new Funday.AudioId('main', '/sfx_Jump_Darwin/sfx_Jump_Darwin_12'),
                sfxJumpDarwin13: new Funday.AudioId('main', '/sfx_Jump_Darwin/sfx_Jump_Darwin_13'),
                sfxJumpDarwin14: new Funday.AudioId('main', '/sfx_Jump_Darwin/sfx_Jump_Darwin_14'),
                sfxJumpDarwin15: new Funday.AudioId('main', '/sfx_Jump_Darwin/sfx_Jump_Darwin_15'),
            },
            sfxJumpDestroyBricks: {
                sfxJumpHitBricksDestroy01: new Funday.AudioId('main', '/sfx_Jump_Destroy_Bricks/sfx_Jump_Hit_Bricks_Destroy_01'),
                sfxJumpHitBricksDestroy02: new Funday.AudioId('main', '/sfx_Jump_Destroy_Bricks/sfx_Jump_Hit_Bricks_Destroy_02'),
            },
            sfxJumpHitBricks: {
                sfxJumpHitBricks01: new Funday.AudioId('main', '/sfx_Jump_Hit_Bricks/sfx_Jump_Hit_Bricks_01'),
                sfxJumpHitBricks02: new Funday.AudioId('main', '/sfx_Jump_Hit_Bricks/sfx_Jump_Hit_Bricks_02'),
                sfxJumpHitBricks03: new Funday.AudioId('main', '/sfx_Jump_Hit_Bricks/sfx_Jump_Hit_Bricks_03'),
                sfxJumpHitBricks04: new Funday.AudioId('main', '/sfx_Jump_Hit_Bricks/sfx_Jump_Hit_Bricks_04'),
            },
            sfxJumpRichard: {
                sfxJumpRichard01: new Funday.AudioId('main', '/sfx_Jump_Richard/sfx_Jump_Richard_01'),
                sfxJumpRichard010: new Funday.AudioId('main', '/sfx_Jump_Richard/sfx_Jump_Richard_010'),
                sfxJumpRichard011: new Funday.AudioId('main', '/sfx_Jump_Richard/sfx_Jump_Richard_011'),
                sfxJumpRichard012: new Funday.AudioId('main', '/sfx_Jump_Richard/sfx_Jump_Richard_012'),
                sfxJumpRichard013: new Funday.AudioId('main', '/sfx_Jump_Richard/sfx_Jump_Richard_013'),
                sfxJumpRichard014: new Funday.AudioId('main', '/sfx_Jump_Richard/sfx_Jump_Richard_014'),
                sfxJumpRichard015: new Funday.AudioId('main', '/sfx_Jump_Richard/sfx_Jump_Richard_015'),
                sfxJumpRichard016: new Funday.AudioId('main', '/sfx_Jump_Richard/sfx_Jump_Richard_016'),
                sfxJumpRichard02: new Funday.AudioId('main', '/sfx_Jump_Richard/sfx_Jump_Richard_02'),
                sfxJumpRichard03: new Funday.AudioId('main', '/sfx_Jump_Richard/sfx_Jump_Richard_03'),
                sfxJumpRichard04: new Funday.AudioId('main', '/sfx_Jump_Richard/sfx_Jump_Richard_04'),
                sfxJumpRichard05: new Funday.AudioId('main', '/sfx_Jump_Richard/sfx_Jump_Richard_05'),
                sfxJumpRichard06: new Funday.AudioId('main', '/sfx_Jump_Richard/sfx_Jump_Richard_06'),
                sfxJumpRichard07: new Funday.AudioId('main', '/sfx_Jump_Richard/sfx_Jump_Richard_07'),
                sfxJumpRichard08: new Funday.AudioId('main', '/sfx_Jump_Richard/sfx_Jump_Richard_08'),
                sfxJumpRichard09: new Funday.AudioId('main', '/sfx_Jump_Richard/sfx_Jump_Richard_09'),
            },
            sfxRespawn: {
                sfxRespawn: new Funday.AudioId('main', '/sfx_Respawn/sfx_Respawn'),
            },
            sfxSpringJump: {
                sfxSpringJump01: new Funday.AudioId('main', '/sfx_Spring_Jump/sfx_Spring_Jump_01'),
                sfxSpringJump02: new Funday.AudioId('main', '/sfx_Spring_Jump/sfx_Spring_Jump_02'),
            },
            sfxStartLevel: {
                sfxStartLevel: new Funday.AudioId('main', '/sfx_Start_Level/sfx_Start_Level'),
            },
            uiBuyCharacter: {
                uiBuyCharacter01: new Funday.AudioId('main', '/ui_Buy_Character/ui_Buy_Character_01'),
                uiBuyCharacter02: new Funday.AudioId('main', '/ui_Buy_Character/ui_Buy_Character_02'),
                uiBuyCharacter03: new Funday.AudioId('main', '/ui_Buy_Character/ui_Buy_Character_03'),
            },
            uiCantBuyCharacter: {
                uiCantBuyCharacter01: new Funday.AudioId('main', '/ui_Cant_Buy_Character/ui_Cant_Buy_Character_01'),
                uiCantBuyCharacter02: new Funday.AudioId('main', '/ui_Cant_Buy_Character/ui_Cant_Buy_Character_02'),
            },
            uiCharacterSelectSlide: {
                uiCharacterSelectSlide01: new Funday.AudioId('main', '/ui_Character_Select_Slide/ui_Character_Select_Slide_01'),
                uiCharacterSelectSlide02: new Funday.AudioId('main', '/ui_Character_Select_Slide/ui_Character_Select_Slide_02'),
                uiCharacterSelectSlide03: new Funday.AudioId('main', '/ui_Character_Select_Slide/ui_Character_Select_Slide_03'),
                uiCharacterSelectSlide04: new Funday.AudioId('main', '/ui_Character_Select_Slide/ui_Character_Select_Slide_04'),
            },
            uiMouseClick: {
                uiMouseClick: new Funday.AudioId('main', '/ui_Mouse_Click/ui_Mouse_Click'),
            },
            voiceBuyAnais: {
                voiceBuyAnais01: new Funday.AudioId('main', '/voice_Buy_Anais/voice_Buy_Anais_01'),
                voiceBuyAnais02: new Funday.AudioId('main', '/voice_Buy_Anais/voice_Buy_Anais_02'),
                voiceBuyAnais03: new Funday.AudioId('main', '/voice_Buy_Anais/voice_Buy_Anais_03'),
            },
            voiceBuyCarrie: {
                voiceBuyCarrie01: new Funday.AudioId('main', '/voice_Buy_Carrie/voice_Buy_Carrie_01'),
            },
            voiceBuyDarwin: {
                voiceBuyDarwin02: new Funday.AudioId('main', '/voice_Buy_Darwin/voice_Buy_Darwin_02'),
            },
            voiceBuyRichard: {
                voiceBuyRichard02: new Funday.AudioId('main', '/voice_Buy_Richard/voice_Buy_Richard_02'),
            },
            voiceFallOffCliff: {
                voiceFallOffCliffAnais: new Funday.AudioId('main', '/voice_Fall_Off_Cliff/voice_Fall_Off_Cliff_Anais'),
                voiceFallOffCliffCarrie: new Funday.AudioId('main', '/voice_Fall_Off_Cliff/voice_Fall_Off_Cliff_Carrie'),
                voiceFallOffCliffDarwin: new Funday.AudioId('main', '/voice_Fall_Off_Cliff/voice_Fall_Off_Cliff_Darwin'),
                voiceFallOffCliffGumball: new Funday.AudioId('main', '/voice_Fall_Off_Cliff/voice_Fall_Off_Cliff_Gumball'),
                voiceFallOffCliffRichard: new Funday.AudioId('main', '/voice_Fall_Off_Cliff/voice_Fall_Off_Cliff_Richard'),
            },
            voiceGumballJump: {
                voiceGumballJumpGrunt01: new Funday.AudioId('main', '/voice_Gumball_Jump/voice_Gumball_Jump_Grunt_01'),
                voiceGumballJumpGrunt02: new Funday.AudioId('main', '/voice_Gumball_Jump/voice_Gumball_Jump_Grunt_02'),
                voiceGumballJumpGrunt03: new Funday.AudioId('main', '/voice_Gumball_Jump/voice_Gumball_Jump_Grunt_03'),
                voiceGumballJumpGrunt04: new Funday.AudioId('main', '/voice_Gumball_Jump/voice_Gumball_Jump_Grunt_04'),
                voiceGumballJumpGrunt05: new Funday.AudioId('main', '/voice_Gumball_Jump/voice_Gumball_Jump_Grunt_05'),
                voiceGumballJumpGrunt06: new Funday.AudioId('main', '/voice_Gumball_Jump/voice_Gumball_Jump_Grunt_06'),
                voiceGumballJumpGrunt07: new Funday.AudioId('main', '/voice_Gumball_Jump/voice_Gumball_Jump_Grunt_07'),
                voiceGumballJumpGrunt08: new Funday.AudioId('main', '/voice_Gumball_Jump/voice_Gumball_Jump_Grunt_08'),
            },
            voiceGumballJumpSmashGrunt: {
                voiceGumballJumpSmashGrunt01: new Funday.AudioId('main', '/voice_Gumball_Jump_Smash_Grunt/voice_Gumball_Jump_Smash_Grunt_01'),
                voiceGumballJumpSmashGrunt02: new Funday.AudioId('main', '/voice_Gumball_Jump_Smash_Grunt/voice_Gumball_Jump_Smash_Grunt_02'),
            },
            voiceJumpAnais: {
                voiceAnaisJumpGrunt01: new Funday.AudioId('main', '/voice_Jump_Anais/voice_Anais_Jump_Grunt_01'),
                voiceAnaisJumpGrunt010: new Funday.AudioId('main', '/voice_Jump_Anais/voice_Anais_Jump_Grunt_010'),
                voiceAnaisJumpGrunt011: new Funday.AudioId('main', '/voice_Jump_Anais/voice_Anais_Jump_Grunt_011'),
                voiceAnaisJumpGrunt012: new Funday.AudioId('main', '/voice_Jump_Anais/voice_Anais_Jump_Grunt_012'),
                voiceAnaisJumpGrunt02: new Funday.AudioId('main', '/voice_Jump_Anais/voice_Anais_Jump_Grunt_02'),
                voiceAnaisJumpGrunt03: new Funday.AudioId('main', '/voice_Jump_Anais/voice_Anais_Jump_Grunt_03'),
                voiceAnaisJumpGrunt04: new Funday.AudioId('main', '/voice_Jump_Anais/voice_Anais_Jump_Grunt_04'),
                voiceAnaisJumpGrunt05: new Funday.AudioId('main', '/voice_Jump_Anais/voice_Anais_Jump_Grunt_05'),
                voiceAnaisJumpGrunt06: new Funday.AudioId('main', '/voice_Jump_Anais/voice_Anais_Jump_Grunt_06'),
                voiceAnaisJumpGrunt07: new Funday.AudioId('main', '/voice_Jump_Anais/voice_Anais_Jump_Grunt_07'),
                voiceAnaisJumpGrunt08: new Funday.AudioId('main', '/voice_Jump_Anais/voice_Anais_Jump_Grunt_08'),
                voiceAnaisJumpGrunt09: new Funday.AudioId('main', '/voice_Jump_Anais/voice_Anais_Jump_Grunt_09'),
            },
            voiceJumpCarrie: {
                voiceJumpCarrie01: new Funday.AudioId('main', '/voice_Jump_Carrie/voice_Jump_Carrie_01'),
                voiceJumpCarrie010: new Funday.AudioId('main', '/voice_Jump_Carrie/voice_Jump_Carrie_010'),
                voiceJumpCarrie011: new Funday.AudioId('main', '/voice_Jump_Carrie/voice_Jump_Carrie_011'),
                voiceJumpCarrie012: new Funday.AudioId('main', '/voice_Jump_Carrie/voice_Jump_Carrie_012'),
                voiceJumpCarrie02: new Funday.AudioId('main', '/voice_Jump_Carrie/voice_Jump_Carrie_02'),
                voiceJumpCarrie03: new Funday.AudioId('main', '/voice_Jump_Carrie/voice_Jump_Carrie_03'),
                voiceJumpCarrie04: new Funday.AudioId('main', '/voice_Jump_Carrie/voice_Jump_Carrie_04'),
                voiceJumpCarrie05: new Funday.AudioId('main', '/voice_Jump_Carrie/voice_Jump_Carrie_05'),
                voiceJumpCarrie06: new Funday.AudioId('main', '/voice_Jump_Carrie/voice_Jump_Carrie_06'),
                voiceJumpCarrie07: new Funday.AudioId('main', '/voice_Jump_Carrie/voice_Jump_Carrie_07'),
                voiceJumpCarrie08: new Funday.AudioId('main', '/voice_Jump_Carrie/voice_Jump_Carrie_08'),
                voiceJumpCarrie09: new Funday.AudioId('main', '/voice_Jump_Carrie/voice_Jump_Carrie_09'),
            },
            voiceJumpDarwin: {
                voiceDarwinJumpGrunt01: new Funday.AudioId('main', '/voice_Jump_Darwin/voice_Darwin_Jump_Grunt_01'),
                voiceDarwinJumpGrunt010: new Funday.AudioId('main', '/voice_Jump_Darwin/voice_Darwin_Jump_Grunt_010'),
                voiceDarwinJumpGrunt02: new Funday.AudioId('main', '/voice_Jump_Darwin/voice_Darwin_Jump_Grunt_02'),
                voiceDarwinJumpGrunt03: new Funday.AudioId('main', '/voice_Jump_Darwin/voice_Darwin_Jump_Grunt_03'),
                voiceDarwinJumpGrunt04: new Funday.AudioId('main', '/voice_Jump_Darwin/voice_Darwin_Jump_Grunt_04'),
                voiceDarwinJumpGrunt05: new Funday.AudioId('main', '/voice_Jump_Darwin/voice_Darwin_Jump_Grunt_05'),
                voiceDarwinJumpGrunt06: new Funday.AudioId('main', '/voice_Jump_Darwin/voice_Darwin_Jump_Grunt_06'),
                voiceDarwinJumpGrunt07: new Funday.AudioId('main', '/voice_Jump_Darwin/voice_Darwin_Jump_Grunt_07'),
                voiceDarwinJumpGrunt08: new Funday.AudioId('main', '/voice_Jump_Darwin/voice_Darwin_Jump_Grunt_08'),
                voiceDarwinJumpGrunt09: new Funday.AudioId('main', '/voice_Jump_Darwin/voice_Darwin_Jump_Grunt_09'),
            },
            voiceJumpRichard: {
                voiceRichardJumpGrunt01: new Funday.AudioId('main', '/voice_Jump_Richard/voice_Richard_Jump_Grunt_01'),
                voiceRichardJumpGrunt02: new Funday.AudioId('main', '/voice_Jump_Richard/voice_Richard_Jump_Grunt_02'),
                voiceRichardJumpGrunt03: new Funday.AudioId('main', '/voice_Jump_Richard/voice_Richard_Jump_Grunt_03'),
                voiceRichardJumpGrunt04: new Funday.AudioId('main', '/voice_Jump_Richard/voice_Richard_Jump_Grunt_04'),
                voiceRichardJumpGrunt05: new Funday.AudioId('main', '/voice_Jump_Richard/voice_Richard_Jump_Grunt_05'),
                voiceRichardJumpGrunt06: new Funday.AudioId('main', '/voice_Jump_Richard/voice_Richard_Jump_Grunt_06'),
                voiceRichardJumpGrunt07: new Funday.AudioId('main', '/voice_Jump_Richard/voice_Richard_Jump_Grunt_07'),
                voiceRichardJumpGrunt08: new Funday.AudioId('main', '/voice_Jump_Richard/voice_Richard_Jump_Grunt_08'),
            },
            voiceRichardStuckFall: {
                voiceRichardStuckFall: new Funday.AudioId('main', '/voice_Richard_Stuck_Fall/voice_Richard_Stuck_Fall'),
            },
            voiceSpringJumpReaction: {
                anais: {
                    voiceSpringJumpReactionAnais01: new Funday.AudioId('main', '/voice_Spring_Jump_Reaction/anais/voice_Spring_Jump_Reaction_Anais_01'),
                    voiceSpringJumpReactionAnais02: new Funday.AudioId('main', '/voice_Spring_Jump_Reaction/anais/voice_Spring_Jump_Reaction_Anais_02'),
                },
                carrie: {
                    voiceSpringJumpReactionCarrie01: new Funday.AudioId('main', '/voice_Spring_Jump_Reaction/carrie/voice_Spring_Jump_Reaction_Carrie_01'),
                    voiceSpringJumpReactionCarrie02: new Funday.AudioId('main', '/voice_Spring_Jump_Reaction/carrie/voice_Spring_Jump_Reaction_Carrie_02'),
                },
                darwin: {
                    voiceSpringJumpReactionDarwin01: new Funday.AudioId('main', '/voice_Spring_Jump_Reaction/darwin/voice_Spring_Jump_Reaction_Darwin_01'),
                    voiceSpringJumpReactionDarwin02: new Funday.AudioId('main', '/voice_Spring_Jump_Reaction/darwin/voice_Spring_Jump_Reaction_Darwin_02'),
                    voiceSpringJumpReactionDarwin03: new Funday.AudioId('main', '/voice_Spring_Jump_Reaction/darwin/voice_Spring_Jump_Reaction_Darwin_03'),
                },
                gumball: {
                    voiceSpringJumpReactionGumball01: new Funday.AudioId('main', '/voice_Spring_Jump_Reaction/gumball/voice_Spring_Jump_Reaction_Gumball_01'),
                },
                richard: {
                    voiceSpringJumpReactionRichard01: new Funday.AudioId('main', '/voice_Spring_Jump_Reaction/richard/voice_Spring_Jump_Reaction_Richard_01'),
                    voiceSpringJumpReactionRichard02: new Funday.AudioId('main', '/voice_Spring_Jump_Reaction/richard/voice_Spring_Jump_Reaction_Richard_02'),
                },
            },
            voiceSuccessHighscore: {
                anais: {
                    voiceAnaisSuccessHighScore03: new Funday.AudioId('main', '/voice_Success_Highscore/anais/voice_Anais_Success_HighScore_03'),
                },
                carrie: {
                    voiceCarrieSuccessHighScore03: new Funday.AudioId('main', '/voice_Success_Highscore/carrie/voice_Carrie_Success_HighScore_03'),
                },
                darwin: {
                    voiceDarwinSuccessHighScore04: new Funday.AudioId('main', '/voice_Success_Highscore/darwin/voice_Darwin_Success_HighScore_04'),
                },
                gumball: {
                    voiceGumballSuccessHighScore03: new Funday.AudioId('main', '/voice_Success_Highscore/gumball/voice_Gumball_Success_HighScore_03'),
                },
                richard: {
                    voiceRichardSuccessHighScore02: new Funday.AudioId('main', '/voice_Success_Highscore/richard/voice_Richard_Success_HighScore_02'),
                    voiceRichardSuccessHighScore03: new Funday.AudioId('main', '/voice_Success_Highscore/richard/voice_Richard_Success_HighScore_03'),
                },
            },
        };
        Gumball.AudioLibrary = AudioLibrary;
    })(Gumball = Funday.Gumball || (Funday.Gumball = {}));
})(Funday || (Funday = {}));
var Funday;
(function(Funday) {
    var Gumball;
    (function(Gumball) {
        class BitmapFontLibrary {}
        BitmapFontLibrary.fonts = {
            gumball_font_export: new Funday.BitmapFontId('gumball_font-export'),
            gumball_stroke_font_export: new Funday.BitmapFontId('gumball_stroke_font-export')
        };
        Gumball.BitmapFontLibrary = BitmapFontLibrary;
    })(Gumball = Funday.Gumball || (Funday.Gumball = {}));
})(Funday || (Funday = {}));
var Funday;
(function(Funday) {
    var Gumball;
    (function(Gumball) {
        class SpriteLibrary {}
        SpriteLibrary.game = {
            block01: new Funday.SpriteId('game', 'block01'),
            block02: new Funday.SpriteId('game', 'block02'),
            block03: new Funday.SpriteId('game', 'block03'),
            block04: new Funday.SpriteId('game', 'block04'),
            block05: new Funday.SpriteId('game', 'block05'),
            block06: new Funday.SpriteId('game', 'block06'),
            block_decoration01: new Funday.SpriteId('game', 'block_decoration01'),
            block_decoration02: new Funday.SpriteId('game', 'block_decoration02'),
            block_decoration03: new Funday.SpriteId('game', 'block_decoration03'),
            block_decoration04: new Funday.SpriteId('game', 'block_decoration04'),
            block_decoration05: new Funday.SpriteId('game', 'block_decoration05'),
            block_decoration06: new Funday.SpriteId('game', 'block_decoration06'),
            brick_block: new Funday.SpriteId('game', 'brick_block'),
            brick_block_particles: new Funday.SpriteId('game', 'brick_block_particles'),
            coin01: new Funday.SpriteId('game', 'coin01'),
            coin02: new Funday.SpriteId('game', 'coin02'),
            coin03: new Funday.SpriteId('game', 'coin03'),
            coin04: new Funday.SpriteId('game', 'coin04'),
            coin05: new Funday.SpriteId('game', 'coin05'),
            coin_shadow: new Funday.SpriteId('game', 'coin_shadow'),
            double_coin01: new Funday.SpriteId('game', 'double_coin01'),
            double_coin02: new Funday.SpriteId('game', 'double_coin02'),
            double_coin03: new Funday.SpriteId('game', 'double_coin03'),
            double_coin04: new Funday.SpriteId('game', 'double_coin04'),
            double_coin05: new Funday.SpriteId('game', 'double_coin05'),
            gumball: new Funday.SpriteId('game', 'gumball'),
            manhole_block: new Funday.SpriteId('game', 'manhole_block'),
            manhole_block_top: new Funday.SpriteId('game', 'manhole_block_top'),
            pause_button: new Funday.SpriteId('game', 'pause_button'),
            spring_anim01: new Funday.SpriteId('game', 'spring_anim01'),
            spring_anim02: new Funday.SpriteId('game', 'spring_anim02'),
            spring_anim03: new Funday.SpriteId('game', 'spring_anim03'),
            spring_anim04: new Funday.SpriteId('game', 'spring_anim04'),
            spring_anim05: new Funday.SpriteId('game', 'spring_anim05'),
            start: new Funday.SpriteId('game', 'start'),
            start_big: new Funday.SpriteId('game', 'start_big'),
            start_small: new Funday.SpriteId('game', 'start_small'),
        };
        SpriteLibrary.load = {
            load_background02: new Funday.SpriteId('load', 'load_background02'),
            load_bar: new Funday.SpriteId('load', 'load_bar'),
            load_logo: new Funday.SpriteId('load', 'load_logo'),
            load_progress: new Funday.SpriteId('load', 'load_progress'),
        };
        SpriteLibrary.loadbg = {
            load_background: new Funday.SpriteId('loadbg', 'load_background'),
        };
        SpriteLibrary.menus = {
            ad_button: new Funday.SpriteId('menus', 'ad_button'),
            arrow_tutorial: new Funday.SpriteId('menus', 'arrow_tutorial'),
            back_icon: new Funday.SpriteId('menus', 'back_icon'),
            box: new Funday.SpriteId('menus', 'box'),
            box_small: new Funday.SpriteId('menus', 'box_small'),
            checkmark_icon: new Funday.SpriteId('menus', 'checkmark_icon'),
            circle_tutorial: new Funday.SpriteId('menus', 'circle_tutorial'),
            keyboard_left: new Funday.SpriteId('menus', 'keyboard_left'),
            keyboard_right: new Funday.SpriteId('menus', 'keyboard_right'),
            music_icon: new Funday.SpriteId('menus', 'music_icon'),
            no_button: new Funday.SpriteId('menus', 'no_button'),
            pause_button: new Funday.SpriteId('menus', 'pause_button'),
            pause_menu_box: new Funday.SpriteId('menus', 'pause_menu_box'),
            pause_menu_button: new Funday.SpriteId('menus', 'pause_menu_button'),
            price_box: new Funday.SpriteId('menus', 'price_box'),
            sound_icon: new Funday.SpriteId('menus', 'sound_icon'),
            tutorial_hand: new Funday.SpriteId('menus', 'tutorial_hand'),
            x_icon: new Funday.SpriteId('menus', 'x_icon'),
            yes_button: new Funday.SpriteId('menus', 'yes_button'),
        };
        SpriteLibrary.select_character_screen = {
            anais_shop: new Funday.SpriteId('select_character_screen', 'anais_shop'),
            anais_shop_white: new Funday.SpriteId('select_character_screen', 'anais_shop_white'),
            arrow: new Funday.SpriteId('select_character_screen', 'arrow'),
            arrow02: new Funday.SpriteId('select_character_screen', 'arrow02'),
            Carrie_shop: new Funday.SpriteId('select_character_screen', 'Carrie_shop'),
            Carrie_shop_white: new Funday.SpriteId('select_character_screen', 'Carrie_shop_white'),
            darwin_shop: new Funday.SpriteId('select_character_screen', 'darwin_shop'),
            darwin_shop_white: new Funday.SpriteId('select_character_screen', 'darwin_shop_white'),
            gumball_shop: new Funday.SpriteId('select_character_screen', 'gumball_shop'),
            gumball_shop_cloud: new Funday.SpriteId('select_character_screen', 'gumball_shop_cloud'),
            gumball_shop_cloud02: new Funday.SpriteId('select_character_screen', 'gumball_shop_cloud02'),
            gumball_shop_cloud03: new Funday.SpriteId('select_character_screen', 'gumball_shop_cloud03'),
            gumball_shop_white: new Funday.SpriteId('select_character_screen', 'gumball_shop_white'),
            richard_shop: new Funday.SpriteId('select_character_screen', 'richard_shop'),
            richard_shop_white: new Funday.SpriteId('select_character_screen', 'richard_shop_white'),
        };
        SpriteLibrary.splash_screen = {
            play_button: new Funday.SpriteId('splash-screen', 'play_button'),
            splash_screen_background: new Funday.SpriteId('splash-screen', 'splash_screen_background'),
        };
        SpriteLibrary.splash_screen_top = {
            splash_screen_background02: new Funday.SpriteId('splash-screen-top', 'splash_screen_background02'),
        };
        SpriteLibrary.uncompressed = {
            cloud01: new Funday.SpriteId('uncompressed', 'cloud01'),
            cloud02: new Funday.SpriteId('uncompressed', 'cloud02'),
            cloud03___Copy: new Funday.SpriteId('uncompressed', 'cloud03 - Copy'),
            cloud03: new Funday.SpriteId('uncompressed', 'cloud03'),
            cloud04: new Funday.SpriteId('uncompressed', 'cloud04'),
            earth: new Funday.SpriteId('uncompressed', 'earth'),
            gumball_shop_tower: new Funday.SpriteId('uncompressed', 'gumball_shop_tower'),
            planet01: new Funday.SpriteId('uncompressed', 'planet01'),
            planet02: new Funday.SpriteId('uncompressed', 'planet02'),
            space_background: new Funday.SpriteId('uncompressed', 'space_background'),
        };
        Gumball.SpriteLibrary = SpriteLibrary;
    })(Gumball = Funday.Gumball || (Funday.Gumball = {}));
})(Funday || (Funday = {}));
var Funday;
(function(Funday) {
    var Gumball;
    (function(Gumball) {
        class BackgroundController extends Phaser.Group {
            constructor(game) {
                super(game);
                this.lastCamPos = new Phaser.Point(0, 0);
                this.switchedToSpace = false;
                this.speedFactor = 1.0;
                this.fakePosition = 0;
                this.game.stage.backgroundColor = '#000000';
                this.drawBackground();
                this.frontClouds = new Gumball.ScrollingBackground(this.game);
                this.backClouds = new Gumball.ScrollingBackground(this.game);
                let backCloudsSprites = [Gumball.SpriteLibrary.uncompressed.cloud03, Gumball.SpriteLibrary.uncompressed.cloud04];
                this.backClouds.createScrollObj(0.5, 1, 0.75, 0.5, backCloudsSprites);
                this.backClouds.createScrollObj(0.5, 1, 0.75, 0.5, backCloudsSprites);
                this.backClouds.createScrollObj(0.5, 1, 0.75, 0.5, backCloudsSprites);
                this.backClouds.createScrollObj(0.5, 1, 0.75, 0.5, backCloudsSprites);
                this.frontClouds.createScrollObj(2, 2, 0.5, 1.5, [Gumball.SpriteLibrary.uncompressed.cloud01]);
                this.frontClouds.createScrollObj(2, 2, 0.5, 1.5, [Gumball.SpriteLibrary.uncompressed.cloud02]);
                this.add(this.backClouds);
                this.game.world.add(this.frontClouds);
                this.frontClouds.fixedToCamera = true;
                this.frontStars = new Gumball.ScrollingBackground(this.game);
                this.backStars = new Gumball.ScrollingBackground(this.game);
                this.planets = new Gumball.ScrollingBackground(this.game);
                let starSprites = [Gumball.SpriteLibrary.game.start];
                let backStar = [Gumball.SpriteLibrary.game.start_small];
                let frontStar = [Gumball.SpriteLibrary.game.start_big];
                let planetSprites = [Gumball.SpriteLibrary.uncompressed.planet02, Gumball.SpriteLibrary.uncompressed.planet01];
                this.frontStars.createScrollObj(4, 4, 0.5, 1.5, frontStar).setRandomizeRotation();
                this.backStars.createScrollObj(1, 1, 1, 0.3, starSprites).setRandomizeRotation();
                this.backStars.createScrollObj(1, 1, 1, 0.3, starSprites).setRandomizeRotation();
                this.backStars.createScrollObj(1, 1, 1, 0.3, starSprites).setRandomizeRotation();
                this.planets.createScrollObj(1, 1, 1.0, 0.05, backStar).setRandomizeRotation();
                this.planets.createScrollObj(1, 1, 1.0, 0.05, backStar).setRandomizeRotation();
                this.planets.createScrollObj(1, 1, 1.0, 0.05, backStar).setRandomizeRotation();
                this.planets.createScrollObj(1, 1, 1.0, 0.05, backStar).setRandomizeRotation();
                this.planets.createScrollObj(1, 1, 1.0, 0.05, [planetSprites[0]]);
                this.planets.createScrollObj(1, 1, 1.0, 0.05, backStar).setRandomizeRotation();
                this.planets.createScrollObj(1, 1, 1.0, 0.05, backStar).setRandomizeRotation();
                this.planets.createScrollObj(1, 1, 1.0, 0.05, [planetSprites[1]]);
                this.frontStars.fixedToCamera = true;
                this.add(this.planets);
                this.add(this.backStars);
                this.game.world.add(this.frontStars);
                this.spaceImg.alpha = 0;
                this.gradientGroup.position.y = this.game.height - this.game.applyResolutionRatio(250);
                this.earth.position.y = this.game.height;
            }
            init() {
                this.game.camera.position.copyTo(this.lastCamPos);
                this.hideClouds(false, false);
                this.frontStars.scrollObjs.forEach(o => {
                    o.visible = false;
                });
                this.backStars.scrollObjs.forEach(o => {
                    o.visible = false;
                });
                this.planets.scrollObjs.forEach(o => {
                    o.visible = false;
                });
                this.hideSpace(true);
                this.spaceImg.alpha = 0;
                this.gradientGroup.position.y = this.game.height - this.game.applyResolutionRatio(250);
                this.earth.position.y = this.game.height;
                this.switchedToSpace = false;
            }
            kill() {
                this.frontClouds.killAll();
                this.frontStars.killAll();
                super.kill();
            }
            revive() {
                this.frontClouds.reviveAll();
                this.frontStars.reviveAll();
                super.revive();
            }
            hideClouds(bool, isReverse) {
                this.frontClouds.scrollObjs.forEach(o => {
                    o.setHideOnNextReset(bool);
                });
                this.backClouds.scrollObjs.forEach(o => {
                    o.setHideOnNextReset(bool);
                });
                if (bool == false) {
                    this.frontClouds.resetObjs(this.game.height / 1.5, -500);
                    this.backClouds.resetObjs(this.game.height / 5, this.game.height);
                }
            }
            hideSpace(bool) {
                this.frontStars.scrollObjs.forEach(o => {
                    o.setHideOnNextReset(bool);
                });
                this.backStars.scrollObjs.forEach(o => {
                    o.setHideOnNextReset(bool);
                });
                this.planets.scrollObjs.forEach(o => {
                    o.setHideOnNextReset(bool);
                });
                if (bool == false) {
                    this.frontStars.resetObjs(this.game.height, 0);
                    this.backStars.resetObjs(this.game.height / 2, 350);
                    this.planets.resetObjs(this.game.height / 6, this.game.height / 2);
                    this.frontStars.scrollObjs.forEach(o => {
                        o.visible = true;
                    });
                    this.backStars.scrollObjs.forEach(o => {
                        o.visible = true;
                    });
                    this.planets.scrollObjs.forEach(o => {
                        o.visible = true;
                    });
                    this.frontStars.alpha = 0.0;
                    this.backStars.alpha = 0.0;
                    this.planets.alpha = 0.0;
                }
            }
            drawBackground() {
                let earth = this.game.createImage(this.game.width / 2, this.game.height, Gumball.SpriteLibrary.uncompressed.earth);
                earth.anchor.set(0.5, 1.0);
                this.earth = earth;
                this.earth.fixedToCamera = true;
                this.gradientGroup = this.game.add.group(this);
                this.gradientGroup.fixedToCamera = true;
                let grad1 = this.drawGradient(0xc0d4ed, 0x7aa2d6);
                let grad2 = this.drawGradient(0x7aa2d6, 0x000000);
                let spaceImg = this.game.createImage(0, 0, Gumball.SpriteLibrary.uncompressed.space_background);
                spaceImg.width = this.game.width;
                spaceImg.height = this.game.height;
                spaceImg.alpha = 0.0;
                this.spaceImg = spaceImg;
                grad1.bottom = 0;
                grad2.bottom = grad1.top + 5;
                spaceImg.bottom = grad2.top + 5;
                this.gradientGroup.add(grad1);
                this.gradientGroup.add(grad2);
                this.gradientGroup.add(spaceImg);
                this.add(this.gradientGroup);
                this.add(earth);
            }
            drawGradient(startColor, endColor) {
                var bmd = this.game.add.bitmapData(this.game.width, this.game.height);
                let y = 0;
                let steps = 5;
                for (var i = 0; i < this.game.height; i += steps) {
                    var c = Phaser.Color.interpolateColor(endColor, startColor, this.game.height, i);
                    bmd.rect(0, y, this.game.width, y + steps, Phaser.Color.getWebRGB(c));
                    y += steps;
                }
                return bmd.addToWorld();
            }
            postUpdate() {
                if (!this.exists) {
                    return;
                }
                let deltaX = this.game.camera.position.x - this.lastCamPos.x;
                let deltaY = (this.game.camera.position.y - this.lastCamPos.y) * this.speedFactor;
                this.game.camera.position.copyTo(this.lastCamPos);
                this.frontClouds.move(deltaX, deltaY);
                this.backClouds.move(deltaX, deltaY);
                this.backStars.move(deltaX, deltaY);
                this.frontStars.move(deltaX, deltaY);
                this.planets.move(deltaX, deltaY);
                if (this.switchedToSpace) {
                    this.frontStars.alpha = Math.min(1.0, this.planets.alpha - deltaY * 0.00020);
                    this.backStars.alpha = Math.min(1.0, this.planets.alpha - deltaY * 0.00020);
                    this.planets.alpha = Math.min(1.0, this.planets.alpha - deltaY * 0.00020);
                }
                this.earth.position.y -= deltaY * 0.020;
                if (this.gradientGroup.y > this.gradientGroup.height - 1000) {
                    this.spaceImg.alpha = (this.gradientGroup.y - (this.gradientGroup.height - 1000)) / 1000;
                }
                if (this.gradientGroup.y < this.gradientGroup.height || (deltaY > 0 && this.fakePosition <= 0)) {
                    this.gradientGroup.y = Math.min(this.gradientGroup.y - deltaY / 8, this.gradientGroup.height);
                } else {
                    this.fakePosition = Math.max(-1, this.fakePosition - deltaY / 8);
                }
                if (deltaY < 0) {
                    this.handleSpaceTransition();
                } else {
                    this.handleReverseSpaceTransition();
                }
            }
            handleSpaceTransition() {
                if (!this.switchedToSpace) {
                    if (this.gradientGroup.y > this.gradientGroup.height - this.game.height) {
                        this.hideClouds(true, false);
                        this.hideSpace(false);
                        this.switchedToSpace = true;
                    }
                }
            }
            handleReverseSpaceTransition() {
                if (this.switchedToSpace) {
                    if (this.gradientGroup.y < this.gradientGroup.height - this.game.height) {
                        this.hideClouds(false, true);
                        this.hideSpace(true);
                        this.switchedToSpace = false;
                    }
                }
            }
        }
        Gumball.BackgroundController = BackgroundController;
    })(Gumball = Funday.Gumball || (Funday.Gumball = {}));
})(Funday || (Funday = {}));
var Funday;
(function(Funday) {
    var Gumball;
    (function(Gumball) {
        class ScrollObj extends Phaser.Sprite {
            constructor(game, x, y, spriteId) {
                super(game, x, y, spriteId.key, spriteId.frame);
                this.scrollFactor = 1.0;
                this.spacing = 0;
                this.horizontal = false;
                this.hideNextReset = false;
                this.randomizeRotation = false;
            }
            setHideOnNextReset(bool) {
                this.hideNextReset = bool;
            }
            onOffscreen() {
                if (this.hideNextReset) {
                    this.visible = false;
                    return;
                }
                if (!this.visible && !this.hideNextReset) {
                    this.visible = true;
                }
                if (!this.isHorizontal()) {
                    this.position.x = this.game.width * Math.random();
                } else {}
                if (this.randomizeRotation)
                    this.rotation = Math.random() * 2 * Math.PI;
                let ranIndex = this.game.rnd.integerInRange(0, this.allowedSprites.length - 1);
                this.key = this.allowedSprites[ranIndex].key;
                this.frameName = this.allowedSprites[ranIndex].frame;
            }
            setSpacing(space) {
                this.spacing = space;
            }
            randomizeScale(scaleMin, scaleMax) {
                this.scale.set(Math.random() * (scaleMax - scaleMin) + scaleMin);
            }
            setRandomizeRotation() {
                this.randomizeRotation = true;
            }
            setAllowedSprites(sprites) {
                this.allowedSprites = sprites;
            }
            setScrollFactor(val) {
                this.scrollFactor = val;
            }
            setHorizontal(bool) {
                this.horizontal = bool;
            }
            isHorizontal() {
                return this.horizontal;
            }
            move(deltaX, deltaY) {
                if (!this.visible)
                    return;
                if (this.scrollFactor > 0.1)
                    deltaY = Phaser.Math.clamp(deltaY, -100, 100);
                this.x -= deltaX * this.scrollFactor;
                this.y -= deltaY * this.scrollFactor;
            }
        }
        Gumball.ScrollObj = ScrollObj;
    })(Gumball = Funday.Gumball || (Funday.Gumball = {}));
})(Funday || (Funday = {}));
var Funday;
(function(Funday) {
    var Gumball;
    (function(Gumball) {
        class ScrollingBackground extends Phaser.Group {
            constructor(game) {
                super(game);
                this.scrollObjs = [];
            }
            createScrollObj(scaleMin, scaleMax, alpha, scrollFactor, allowedSprites, horizontal = false) {
                let obj = new Gumball.ScrollObj(this.game, 0, 0, allowedSprites[0]);
                obj.anchor.set(0.5);
                obj.setScrollFactor(scrollFactor);
                obj.setAllowedSprites(allowedSprites);
                obj.randomizeScale(scaleMin, scaleMax);
                obj.setHorizontal(horizontal);
                obj.alpha = alpha;
                this.scrollObjs.push(obj);
                this.add(obj);
                return obj;
            }
            resetObjs(spacing, offset = 0, resetToBottom = false) {
                this.topObj = undefined;
                this.rightObj = undefined;
                for (var i = 0; i < this.scrollObjs.length; i++) {
                    let scrollObj = this.scrollObjs[i];
                    scrollObj.visible = true;
                    scrollObj.setHideOnNextReset(false);
                    scrollObj.setSpacing(spacing);
                    if (scrollObj.isHorizontal()) {
                        scrollObj.onOffscreen();
                        scrollObj.left = offset;
                        if (this.rightObj)
                            scrollObj.left = this.rightObj.right + scrollObj.spacing;
                        this.rightObj = scrollObj;
                    } else {
                        scrollObj.onOffscreen();
                        scrollObj.top = offset;
                        if (this.topObj)
                            scrollObj.bottom = this.topObj.top - spacing;
                        this.topObj = scrollObj;
                    }
                }
            }
            move(deltaX, deltaY) {
                this.scrollObjs.forEach(o => {
                    o.move(deltaX, deltaY);
                    if (!o.isHorizontal() && deltaY < 0) {
                        if (o.top > this.game.height + 100) {
                            o.bottom = this.topObj.top - o.spacing;
                            o.onOffscreen();
                            this.topObj = o;
                        }
                    }
                    if (o.isHorizontal() && deltaX > 0) {
                        if (o.right < 0) {
                            o.left = this.rightObj.right + o.spacing;
                            o.onOffscreen();
                            this.rightObj = o;
                        }
                    }
                });
            }
        }
        Gumball.ScrollingBackground = ScrollingBackground;
    })(Gumball = Funday.Gumball || (Funday.Gumball = {}));
})(Funday || (Funday = {}));
var Funday;
(function(Funday) {
    var Gumball;
    (function(Gumball) {
        class GameObject extends Phaser.Sprite {
            constructor(game, x, y, spriteId) {
                super(game, x, y, spriteId.key, spriteId.frame);
                this.gridRenderOffset = new Gumball.Vec3(0, 0, 0);
                this.baseFallTime = 0;
                this.fallTime = 0;
                this.anchor.set(0.5);
            }
            onInit() {}
            onCollisionWithPlayer(player) {
                if (!this.collided)
                    return;
                this.collided = true;
            }
            pause() {}
            resume() {}
            revive() {
                this.collided = false;
                this.onInit();
                return super.revive();
            }
            kill() {
                this.game.grid.removeFromGrid(this, this.gridPosition);
                this.stopFallTimer();
                return super.kill();
            }
            doFadeInTransition(delay = 0, playSound = false) {
                if (!this.exists) {
                    return;
                }
                this.visible = true;
                if (this.gridPosition.x == 0 && this.gridPosition.y == 0 && this.gridPosition.z == 0)
                    return;
                let properPosition = this.position.y;
                this.position.y -= this.game.applyResolutionRatio(350);
                this.alpha = 0;
                let duration = 1000;
                this.game.add.tween(this).to({
                    alpha: 1.0
                }, duration * 0.25, Phaser.Easing.Linear.None, true, delay);
                let posTween = this.game.add.tween(this.position).to({
                    y: properPosition
                }, duration, Phaser.Easing.Elastic.Out, true, delay);
                if (playSound)
                    this.game.time.events.add(delay, () => {
                        this.game.soundRepo.onBricksFallDown(this.gridPosition);
                    });
                return posTween;
            }
            startFallTimer(playerPos, modifier, offset) {
                if (this.fallDownTween && this.fallDownTween.isRunning)
                    return;
                this.stopFallTimer();
                this.fallTime = this.baseFallTime + offset + playerPos.distance2D(this.gridPosition) * modifier;
                this.fallTimeEvent = this.game.time.events.add(this.fallTime, this.fallDown, this);
                this.playerPosReference = playerPos;
            }
            stopFallTimer() {
                if (this.fallTimeEvent) {
                    this.game.time.events.remove(this.fallTimeEvent);
                    this.fallTimeEvent = null;
                }
                if (this.fallDownTween)
                    this.fallDownTween.stop(false);
            }
            getFallTimeLeft() {
                if (!this.fallTimeEvent)
                    return undefined;
                return this.fallTimeEvent.tick - this.game.time.time;
            }
            fallDown() {
                this.game.grid.removeFromGrid(this, this.gridPosition);
                this.fallDownTween = this.game.add.tween(this.position).to({
                    y: '+3000'
                }, 1000, Phaser.Easing.Quadratic.In, true);
                this.fallDownTween.onComplete.addOnce(() => {
                    this.kill();
                });
            }
        }
        Gumball.GameObject = GameObject;
    })(Gumball = Funday.Gumball || (Funday.Gumball = {}));
})(Funday || (Funday = {}));
var Funday;
(function(Funday) {
    var Gumball;
    (function(Gumball) {
        class Block extends Gumball.GameObject {
            constructor() {
                super(...arguments);
                this.possibleSprites = [Gumball.SpriteLibrary.game.block01,
                    Gumball.SpriteLibrary.game.block02,
                    Gumball.SpriteLibrary.game.block03,
                    Gumball.SpriteLibrary.game.block04,
                    Gumball.SpriteLibrary.game.block05,
                    Gumball.SpriteLibrary.game.block06
                ];
                this.possibleDecorationSprites = [Gumball.SpriteLibrary.game.block_decoration01,
                    Gumball.SpriteLibrary.game.block_decoration02,
                    Gumball.SpriteLibrary.game.block_decoration03,
                    Gumball.SpriteLibrary.game.block_decoration04,
                    Gumball.SpriteLibrary.game.block_decoration05,
                    Gumball.SpriteLibrary.game.block_decoration06
                ];
                this.shakeStartPos = new Phaser.Point();
            }
            onInit() {
                super.onInit();
                this.alpha = 1.0;
                this.gridRenderOffset.x = 0;
                this.gridRenderOffset.y = 0;
                this.mutedFallSound = false;
                this.position.copyTo(this.shakeStartPos);
            }
            setBlockSprite(spriteNumber) {
                this.key = this.possibleSprites[spriteNumber].key;
                this.frameName = this.possibleSprites[spriteNumber].frame;
                if (Math.random() < 0.25) {
                    this.key = this.possibleDecorationSprites[spriteNumber].key;
                    this.frameName = this.possibleDecorationSprites[spriteNumber].frame;
                }
            }
            muteFallSound() {
                this.mutedFallSound = true;
            }
            fallDown() {
                super.fallDown();
                this.game.grid.checkForPlayer(this.gridPosition);
                if (!this.mutedFallSound)
                    this.game.soundRepo.onBricksFallDown(this.gridPosition);
            }
            update() {
                if (this.fallTimeEvent && this.getFallTimeLeft() > 0 && !this.fallTimeEvent.timer.paused) {
                    let shakeIntensity = this.game.applyResolutionRatio(Math.max(0, 100 * (0.25 - this.getFallTimeLeft() / this.fallTime)));
                    let ranDir = Phaser.Math.random(-1, 1);
                    this.position.x = Phaser.Math.linearInterpolation([this.position.x, this.shakeStartPos.x + ranDir * shakeIntensity], 0.1);
                    this.position.y = Phaser.Math.linearInterpolation([this.position.y, this.shakeStartPos.y + ranDir * shakeIntensity], 0.1);
                }
            }
        }
        Gumball.Block = Block;
    })(Gumball = Funday.Gumball || (Funday.Gumball = {}));
})(Funday || (Funday = {}));
var Funday;
(function(Funday) {
    var Gumball;
    (function(Gumball) {
        class BreakableBlock extends Gumball.GameObject {
            constructor(game, x, y, spriteId) {
                super(game, x, y, spriteId);
                this.emitter = game.add.emitter(x, y, 100);
                this.emitter.makeParticles(Gumball.SpriteLibrary.game.brick_block_particles.key, Gumball.SpriteLibrary.game.brick_block_particles.frame, 100, false);
                this.emitter.gravity.y = 500;
            }
            onInit() {
                this.health = 3;
                this.scale.set(1.0, 1.0);
                super.onInit();
            }
            onCollisionWithPlayer(player) {
                this.health -= 1;
                this.emitter.x = this.x;
                this.emitter.y = this.y;
                let particleDirection = Phaser.Math.sign(this.position.x - player.position.x);
                this.emitter.minParticleSpeed.setTo(300 * particleDirection, -300);
                this.emitter.maxParticleSpeed.setTo(-50 * particleDirection, 300);
                this.emitter.start(true, 1500, null, 8);
                if (this.scaleTween) {
                    this.scaleTween.stop(false);
                    this.posTween.stop(false);
                }
                this.scaleTween = this.game.add.tween(this.scale).to({
                    x: this.health / 3 * 1.0,
                    y: this.health / 3 * 1.0
                }, 200, Phaser.Easing.Back.Out, true);
                this.posTween = this.game.add.tween(this.position).to({
                    y: '+' + ((this.height / 2) / 6).toString()
                }, 200, Phaser.Easing.Exponential.Out, true, 100);
                if (this.health <= 0) {
                    this.game.grid.removeFromGrid(this, this.gridPosition);
                    this.game.soundRepo.onDestroyBricks();
                    this.game.achiev.onBreakBlock();
                    this.scaleTween.stop(false);
                    this.posTween.stop(false);
                    this.kill();
                } else {
                    this.game.soundRepo.onJumpHitBricks();
                }
            }
            update() {
                this.emitter.forEachAlive((p) => {
                    p.alpha = p.lifespan / this.emitter.lifespan;
                });
            }
        }
        Gumball.BreakableBlock = BreakableBlock;
    })(Gumball = Funday.Gumball || (Funday.Gumball = {}));
})(Funday || (Funday = {}));
var Funday;
(function(Funday) {
    var Gumball;
    (function(Gumball) {
        class Coin extends Gumball.GameObject {
            constructor(game, x, y, spriteId) {
                super(game, x, y, spriteId);
                this.gridRenderOffset = new Gumball.Vec3(-0.1, -0.1, 0.0);
                if (spriteId.key != '') {
                    this.animations.add('double_spin', Phaser.Animation.generateFrameNames("double_coin", 1, 5, '', 2), 16, true);
                    this.animations.add('spin', Phaser.Animation.generateFrameNames("coin", 1, 5, '', 2), 16, true).play();
                }
                this.shadow = game.createImage(0, 0, Gumball.SpriteLibrary.game.coin_shadow);
                this.shadow.anchor.set(0.5);
                this.addChild(this.shadow);
            }
            onInit() {
                this.alpha = 1.0;
                this.shadow.alpha = 1.0;
                this.cachedPosition = new Phaser.Point();
                this.position.copyTo(this.cachedPosition);
                this.refreshGraphics();
                super.onInit();
            }
            refreshGraphics() {
                this.position = this.cachedPosition;
                this.shadow.y = this.game.applyResolutionRatio(65);
                if (this.game.core.player.playerScore.doubleCoins) {
                    this.scale.set(0.0, 0.0);
                    this.animations.play('double_spin');
                    let tween = this.game.add.tween(this.scale).to({
                        x: 1.0,
                        y: 1.0
                    }, 1000, Phaser.Easing.Elastic.Out, true);
                    this.shadow.position.y += this.game.applyResolutionRatio(15);
                } else {
                    this.shadow.scale.set(1, 1);
                    this.scale.set(1.0);
                    this.animations.play('spin');
                }
            }
            spawnDoubleCoinGraphic() {}
            onCollisionWithPlayer(player) {
                super.onCollisionWithPlayer(player);
                this.game.soundRepo.onCoinPickup();
                this.game.add.tween(this.position).to({
                    y: '-250'
                }, 500, Phaser.Easing.Quadratic.Out, true);
                this.game.add.tween(this.scale).to({
                    x: 1.25,
                    y: 1.25
                }, 500, Phaser.Easing.Quadratic.Out, true).onComplete.addOnce(() => {
                    this.kill();
                });
                this.game.add.tween(this).to({
                    alpha: 0.0
                }, 500, Phaser.Easing.Linear.None, true);
                this.game.add.tween(this.shadow).to({
                    alpha: 0.0
                }, 100, Phaser.Easing.Linear.None, true);
                this.game.grid.removeFromGrid(this, this.gridPosition);
            }
            update() {
                super.update();
            }
        }
        Gumball.Coin = Coin;
    })(Gumball = Funday.Gumball || (Funday.Gumball = {}));
})(Funday || (Funday = {}));
var Funday;
(function(Funday) {
    var Gumball;
    (function(Gumball) {
        class Manhole extends Gumball.GameObject {
            constructor(game, x, y, spriteId) {
                super(game, x, y, spriteId);
                this.gridRenderOffset = new Gumball.Vec3(0.0, 0.0, 0.0);
                let topSprite = this.game.createSprite(0, 0, Gumball.SpriteLibrary.game.manhole_block_top);
                topSprite.anchor.set(0.5);
                this.addChild(topSprite);
                this.topSprite = topSprite;
            }
            onCollisionWithPlayer(player) {
                super.onCollisionWithPlayer(player);
                this.game.camera.follow(null);
                this.game.time.events.add(300, () => {
                    player.visible = false;
                    let fakePlayer = dragonBones.PhaserFactory.factory.buildArmatureDisplay("Armature", player.playerCostume.getCostume());
                    fakePlayer.anchor.set(0.5, 0.5);
                    fakePlayer.position.y -= 75;
                    fakePlayer.scale.x = player.scale.x;
                    this.game.soundRepo.onFallThroughHole(player.playerCostume.getCostume());
                    this.game.grid.removeFromGrid(player, this.gridPosition);
                    if (player.playerCostume.getCostume() == "richard") {
                        this.addChild(this.topSprite);
                        this.addChild(fakePlayer);
                        fakePlayer.animation.play('fall_manhole');
                        fakePlayer.position.y += 22;
                        if (!this.getFallTimeLeft()) {
                            this.startFallTimer(player.gridPosition, 0, 1000);
                        }
                        this.game.time.events.add(this.getFallTimeLeft() + 1000, () => {
                            player.fallOffEvent.dispatch();
                            this.removeChild(fakePlayer);
                        });
                    } else {
                        this.addChild(fakePlayer);
                        this.addChild(this.topSprite);
                        fakePlayer.animation.play('fall', 10);
                        let fallingTween = this.game.add.tween(fakePlayer.position).to({
                            y: '+2000'
                        }, 800, Phaser.Easing.Quadratic.In, true, 250);
                        fallingTween.onComplete.addOnce(() => {
                            player.fallOffEvent.dispatch();
                            this.removeChild(fakePlayer);
                        });
                    }
                });
            }
        }
        Gumball.Manhole = Manhole;
    })(Gumball = Funday.Gumball || (Funday.Gumball = {}));
})(Funday || (Funday = {}));
var Funday;
(function(Funday) {
    var Gumball;
    (function(Gumball) {
        class ShadowBlock extends Gumball.GameObject {
            onInit() {
                this.alpha = 1;
                this.correctFacing = false;
                this.xPositions = [this.gridPosition.copy().add(new Gumball.Vec3(1, 0, 0)), this.gridPosition.copy().add(new Gumball.Vec3(-1, 0, 0))];
                this.yPositions = [this.gridPosition.copy().add(new Gumball.Vec3(0, 1, 0)), this.gridPosition.copy().add(new Gumball.Vec3(0, -1, 0))];
            }
            fallDown() {
                super.fallDown();
                this.game.add.tween(this).to({
                    alpha: 0.0
                }, 200, Phaser.Easing.Linear.None, true);
            }
            update() {
                if (!this.correctFacing) {}
            }
        }
        Gumball.ShadowBlock = ShadowBlock;
    })(Gumball = Funday.Gumball || (Funday.Gumball = {}));
})(Funday || (Funday = {}));
var Funday;
(function(Funday) {
    var Gumball;
    (function(Gumball) {
        class Spring extends Gumball.GameObject {
            constructor(game, x, y, spriteId) {
                super(game, x, y, spriteId);
                this.gridRenderOffset = new Gumball.Vec3(-0.08, -0.08, 0.0);
                let frames = [];
                frames.push('spring_anim02');
                frames.push('spring_anim04');
                frames.push('spring_anim03');
                frames.push('spring_anim04');
                frames.push('spring_anim05');
                this.animations.add('fire', frames, 12, false);
                this.animations.add('idle', [Gumball.SpriteLibrary.game.spring_anim01.frame], 12, true);
            }
            onInit() {
                this.scale.set(1.0, 1.0);
                this.animations.play('idle');
            }
            setJumpPos(pos) {
                this.jumpPos = pos;
            }
            playFireAnim() {
                this.animations.play('fire');
            }
            onCollisionWithPlayer(player) {
                super.onCollisionWithPlayer(player);
                let exits = this.game.grid.getExitPositions();
                for (let i = 0; i < exits.length; i++) {
                    let exit = exits[i];
                    let distance = exit.z - this.gridPosition.z;
                    if (distance > 0) {
                        if (exits[i + 1]) {
                            this.setJumpPos(exits[i + 1]);
                        } else {
                            console.log("[Spring] can't find the next exit! :(");
                            this.setJumpPos(exits[i]);
                        }
                        break;
                    }
                }
            }
        }
        Gumball.Spring = Spring;
    })(Gumball = Funday.Gumball || (Funday.Gumball = {}));
})(Funday || (Funday = {}));
var Funday;
(function(Funday) {
    var Gumball;
    (function(Gumball) {
        class SpawnChances {
            constructor(coin, breakable, spring, manhole) {
                this.coin = coin;
                this.breakable = breakable;
                this.spring = spring;
                this.manhole = manhole;
            }
            copy() {
                return new SpawnChances(this.coin, this.breakable, this.spring, this.manhole);
            }
        }
        Gumball.SpawnChances = SpawnChances;
        class DifficultyController {
            constructor() {
                this.difficultyLowBound = 0;
                this.difficultyHighBound = 0;
                this.patternsPerLowBoundIncrease = 15;
                this.patternsPerHighBoundIncrease = 10;
            }
            reset() {
                this.patternsSpawned = 0;
                this.baseSpawnChances = new SpawnChances(0.5, 0.2, 0.25, 1);
                this.currentSpawnChances = this.baseSpawnChances.copy();
                this.springSpawnTracker = new Gumball.ObjectSpawnTracker(0.3);
                this.breakableSpawnTracker = new Gumball.ObjectSpawnTracker(0);
                this.manholeSpawnTracker = new Gumball.ObjectSpawnTracker(0.0);
            }
            newPattern() {
                this.patternsSpawned += 1;
                this.difficultyLowBound = Math.floor(this.patternsSpawned / this.patternsPerLowBoundIncrease);
                this.difficultyHighBound = Math.floor(this.patternsSpawned / this.patternsPerHighBoundIncrease);
                this.difficultyLowBound = Phaser.Math.clamp(this.difficultyLowBound, 0, 1);
                this.breakableSpawnTracker.setMaxSpawnsPerPattern(Phaser.Math.clamp(Math.floor(this.patternsSpawned / 6), 0, 1.0));
                this.manholeSpawnTracker.setMaxSpawnsPerPattern(Phaser.Math.clamp((this.patternsSpawned - 5) * 0.1, 0, 2));
                this.springSpawnTracker.newPattern();
                this.breakableSpawnTracker.newPattern();
                this.manholeSpawnTracker.newPattern();
                this.updateSpawnTrackers();
            }
            getSpawnChance() {
                return this.currentSpawnChances;
            }
            adjustSpawnChances(spawnedObj) {
                if (spawnedObj == Gumball.GameObjs.spring) {
                    this.springSpawnTracker.spawned();
                }
                if (spawnedObj == Gumball.GameObjs.breakable) {
                    this.breakableSpawnTracker.spawned();
                }
                if (spawnedObj == Gumball.GameObjs.manhole) {
                    this.manholeSpawnTracker.spawned();
                }
                this.updateSpawnTrackers();
            }
            updateSpawnTrackers() {
                this.currentSpawnChances.spring = this.baseSpawnChances.spring * this.springSpawnTracker.canSpawn();
                this.currentSpawnChances.breakable = this.baseSpawnChances.breakable * this.breakableSpawnTracker.canSpawn();
                this.currentSpawnChances.manhole = this.baseSpawnChances.manhole * this.manholeSpawnTracker.canSpawn();
            }
        }
        Gumball.DifficultyController = DifficultyController;
    })(Gumball = Funday.Gumball || (Funday.Gumball = {}));
})(Funday || (Funday = {}));
var Funday;
(function(Funday) {
    var Gumball;
    (function(Gumball) {
        class Vec3 {
            constructor(x, y, z) {
                this.x = 0;
                this.y = 0;
                this.z = 0;
                this.x = x;
                this.y = y;
                this.z = z;
            }
            copy() {
                return new Vec3(this.x, this.y, this.z);
            }
            isZero() {
                if (this.x == 0 && this.y == 0 && this.z == 0) {
                    return true;
                }
                return false;
            }
            add(other) {
                this.x += other.x;
                this.y += other.y;
                this.z += other.z;
                return this;
            }
            distance2D(other) {
                return Math.abs(this.x - other.x) + Math.abs(this.y - other.y);
            }
            distance3D(other) {
                return Math.abs(this.x - other.x) + Math.abs(this.y - other.y) + Math.abs(this.z - other.z);
            }
        }
        Gumball.Vec3 = Vec3;
        class Grid {
            constructor(game) {
                this.gridArray = [];
                this.zLayerArray = [];
                this.exitPositions = [];
                this.gridSize = new Vec3(124.5 + 15, 126 + 15, 278 - 130);
                this.angle = Math.atan2(63, 124.5);
                this.game = game;
            }
            lazyInitPos(x, y, z) {
                if (!this.gridArray[x]) {
                    this.gridArray[x] = new Array();
                }
                if (!this.gridArray[x][y]) {
                    this.gridArray[x][y] = new Array();
                }
                if (!this.gridArray[x][y][z]) {
                    this.gridArray[x][y][z] = new Array();
                }
                if (!this.zLayerArray[z]) {
                    this.zLayerArray[z] = new Array();
                }
            }
            clearGrid() {
                this.gridArray = [];
                this.zLayerArray = [];
                this.exitPositions = [];
            }
            addToGrid(obj, pos) {
                this.lazyInitPos(pos.x, pos.y, pos.z);
                this.gridArray[pos.x][pos.y][pos.z].push(obj);
                this.zLayerArray[pos.z].push(obj);
            }
            addExitPos(pos) {
                this.exitPositions.push(pos);
            }
            removeExitPos(pos) {
                this.exitPositions.splice(this.exitPositions.indexOf(pos), 1);
            }
            getExitPositions() {
                return this.exitPositions;
            }
            removeFromGrid(obj, pos) {
                let gridArrayIndex = this.gridArray[pos.x][pos.y][pos.z].indexOf(obj);
                let zLayerIndex = this.zLayerArray[pos.z].indexOf(obj);
                if (gridArrayIndex != -1)
                    this.gridArray[pos.x][pos.y][pos.z].splice(gridArrayIndex, 1);
                if (zLayerIndex != -1)
                    this.zLayerArray[pos.z].splice(zLayerIndex, 1);
            }
            checkForPlayer(pos) {
                this.gridArray[pos.x][pos.y][pos.z].forEach((remainingObjs) => {
                    if (remainingObjs instanceof Gumball.Player) {
                        remainingObjs.removalAtGridPos();
                    }
                });
            }
            getBlockAt(pos) {
                this.lazyInitPos(pos.x, pos.y, pos.z);
                let block = undefined;
                this.gridArray[pos.x][pos.y][pos.z].forEach((obj) => {
                    if (obj instanceof Gumball.Block) {
                        block = obj;
                        return;
                    }
                });
                return block;
            }
            getObjOfType(pos, type) {
                let allObjs = this.getAllObjsAt(pos);
                let returnObj = undefined;
                allObjs.forEach(o => {
                    if (o instanceof type) {
                        returnObj = o;
                        return;
                    }
                });
                return returnObj;
            }
            getAllObjsAt(pos) {
                this.lazyInitPos(pos.x, pos.y, pos.z);
                return this.gridArray[pos.x][pos.y][pos.z];
            }
            getAllObjsAtZ(z) {
                return this.zLayerArray[z];
            }
            getAllObjsAtXY(x, y, startZ, maxZ) {
                let objs = [];
                let z = startZ;
                while (z < maxZ) {
                    let zObjs = this.getAllObjsAt(new Vec3(x, y, z));
                    if (zObjs != undefined) {
                        zObjs.forEach((obj) => {
                            objs.push(obj);
                        });
                    }
                    z += 1;
                }
                return objs;
            }
            getWorldPosition(pos) {
                let newX = this.game.world.centerX - (pos.x * this.gridSize.x) * Math.cos(this.angle) + (pos.y * this.gridSize.x) * Math.cos(this.angle);
                let newY = this.game.world.height / 2 - (pos.x * this.gridSize.y) * Math.sin(this.angle) - (pos.y * this.gridSize.y) * Math.sin(this.angle) - pos.z * this.gridSize.z;
                return {
                    x: this.game.services.resolution.applyResultionRatioFloored(newX),
                    y: this.game.services.resolution.applyResultionRatioFloored(newY)
                };
            }
            getTopOfBlockPosition(pos) {
                let worldPos = this.getWorldPosition(pos);
                worldPos.y -= this.game.services.resolution.applyResultionRatio(this.gridSize.y * 0.55);
                return worldPos;
            }
        }
        Gumball.Grid = Grid;
    })(Gumball = Funday.Gumball || (Funday.Gumball = {}));
})(Funday || (Funday = {}));
var Funday;
(function(Funday) {
    var Gumball;
    (function(Gumball) {
        class LevelBuilder {
            constructor(game, levelGroup) {
                this.blockPool = new Gumball.GameObjectPool();
                this.breakableBlockPool = new Gumball.GameObjectPool();
                this.coinPool = new Gumball.GameObjectPool();
                this.manholePool = new Gumball.GameObjectPool();
                this.springPool = new Gumball.GameObjectPool();
                this.offscreenObjects = {};
                this.yIndexInterval = 50;
                this.game = game;
                this.levelGroup = levelGroup;
                window.levelBuilder = this;
            }
            resetAtOrigin() {
                this.nextLayerStartPos = new Gumball.Vec3(0, 0, 0);
                this.offscreenObjects = {};
                this.lastYIndex = this.getYIndex(this.game.camera.view.bottom);
                this.lastBottomYIndex = this.getYIndex(this.game.camera.view.bottom - 400);
                this.topYIndex = this.lastBottomYIndex;
            }
            buildPattern(pattern, diff) {
                let spawnChance = diff.getSpawnChance();
                pattern.getList().forEach(element => {
                    let spawnPos = element.pos.copy();
                    spawnPos.x += this.nextLayerStartPos.x;
                    spawnPos.y += this.nextLayerStartPos.y;
                    spawnPos.z += this.nextLayerStartPos.z;
                    let spawnedObj;
                    if (element.obj === Gumball.GameObjs.block) {
                        this.add(new Gumball.ObjData(element.obj, spawnPos));
                    }
                    if (element.obj == Gumball.GameObjs.breakable) {
                        this.add(new Gumball.ObjData(element.obj, spawnPos));
                    }
                    if (element.obj == Gumball.GameObjs.spring) {
                        this.add(new Gumball.ObjData(element.obj, spawnPos));
                    }
                    if (element.obj === Gumball.GameObjs.manhole || element.obj == Gumball.GameObjs.guaranteedManhole) {
                        let ran = Math.random();
                        if (ran < spawnChance.manhole || element.obj == Gumball.GameObjs.guaranteedManhole) {
                            spawnedObj = this.add(new Gumball.ObjData(Gumball.GameObjs.manhole, spawnPos));
                        }
                    }
                    if (element.obj === Gumball.GameObjs.pickup) {
                        let ran = Math.random();
                        if (ran < spawnChance.coin) {
                            spawnedObj = this.add(new Gumball.ObjData(Gumball.GameObjs.coin, spawnPos));
                        } else if (ran < spawnChance.coin + spawnChance.breakable) {
                            spawnedObj = this.add(new Gumball.ObjData(Gumball.GameObjs.breakable, new Gumball.Vec3(spawnPos.x, spawnPos.y, spawnPos.z + 1)));
                        } else if (ran < spawnChance.coin + spawnChance.breakable + spawnChance.spring) {
                            spawnedObj = this.add(new Gumball.ObjData(Gumball.GameObjs.spring, spawnPos));
                        }
                    }
                    diff.adjustSpawnChances(spawnedObj);
                });
                this.nextLayerStartPos = pattern.getExitPos().copy().add(this.nextLayerStartPos);
                this.game.grid.addExitPos(this.nextLayerStartPos.copy());
                this.nextLayerStartPos.y += 1;
            }
            getYIndex(y) {
                return Math.floor(y / this.yIndexInterval);
            }
            add(objData) {
                let worldPos = this.game.grid.getTopOfBlockPosition(objData.pos);
                let yIndex = this.getYIndex(worldPos.y);
                this.topYIndex = Math.min(yIndex, this.topYIndex);
                if (!this.offscreenObjects[yIndex]) {
                    this.offscreenObjects[yIndex] = [];
                }
                this.offscreenObjects[yIndex].push(objData);
                return objData.obj;
            }
            buildObjectsComingOnScreen() {
                let yIndex = this.getYIndex(this.game.camera.view.top - this.game.applyResolutionRatio(1000));
                yIndex = Math.max(yIndex, this.topYIndex + 1);
                for (let i = this.lastYIndex; i > yIndex; i--) {
                    if (this.offscreenObjects[i]) {
                        this.offscreenObjects[i].forEach((element) => {
                            if (element.obj == Gumball.GameObjs.block) {
                                this.addBlockAt(element.pos);
                            }
                            if (element.obj == Gumball.GameObjs.coin) {
                                this.addCoinAt(element.pos);
                            }
                            if (element.obj == Gumball.GameObjs.spring) {
                                this.addSpringAt(element.pos);
                            }
                            if (element.obj == Gumball.GameObjs.breakable) {
                                this.addBreakableBlock(element.pos);
                            }
                            if (element.obj === Gumball.GameObjs.manhole || element.obj == Gumball.GameObjs.guaranteedManhole) {
                                this.addManholeAt(element.pos);
                            }
                        });
                    }
                }
                this.lastYIndex = yIndex;
            }
            killObjectsOffScreen() {
                let bottomYIndex = this.getYIndex(this.game.camera.view.bottom + this.game.applyResolutionRatio(100));
                for (let i = this.lastBottomYIndex; i > bottomYIndex; i--) {
                    if (this.offscreenObjects[i]) {
                        this.offscreenObjects[i].forEach((element) => {
                            this.game.grid.getAllObjsAt(element.pos).forEach(obj => {
                                if (obj instanceof Gumball.GameObject)
                                    obj.kill();
                            });
                        });
                    }
                    delete this.offscreenObjects[i];
                }
                this.lastBottomYIndex = bottomYIndex;
            }
            addCoinAt(pos) {
                if (this.game.grid.getObjOfType(pos, Gumball.Coin))
                    return;
                let worldPos = this.game.grid.getTopOfBlockPosition(pos);
                worldPos.y -= this.game.applyResolutionRatio(65);
                let coin = this.coinPool.getDeadObj(Gumball.Coin, this.game, worldPos.x, worldPos.y, Gumball.SpriteLibrary.game.coin01);
                coin.onInit();
                this.setGridPosOnObj(pos, coin);
                return coin;
            }
            addManholeAt(pos) {
                let worldPos = this.game.grid.getTopOfBlockPosition(pos);
                let manhole = this.manholePool.getDeadObj(Gumball.Manhole, this.game, worldPos.x, worldPos.y, Gumball.SpriteLibrary.game.manhole_block);
                this.setGridPosOnObj(pos, manhole);
                let blockAtPos = this.game.grid.getBlockAt(manhole.gridPosition);
                if (blockAtPos)
                    blockAtPos.kill();
                manhole.position.y += manhole.height / 3.8;
                return manhole;
            }
            addSpringAt(pos) {
                let worldPos = this.game.grid.getTopOfBlockPosition(pos);
                worldPos.y -= this.game.applyResolutionRatio(65);
                let spring = this.springPool.getDeadObj(Gumball.Spring, this.game, worldPos.x, worldPos.y, Gumball.SpriteLibrary.game.spring_anim01);
                spring.onInit();
                this.setGridPosOnObj(pos, spring);
                return spring;
            }
            addBlockAt(pos) {
                if (this.game.grid.getBlockAt(pos) != undefined)
                    return;
                let worldPos = this.game.grid.getWorldPosition(pos);
                let blockObj = this.blockPool.getDeadObj(Gumball.Block, this.game, worldPos.x, worldPos.y, Gumball.SpriteLibrary.game.block01);
                blockObj.onInit();
                blockObj.setBlockSprite(Math.floor(pos.z / 2) % 6);
                this.setGridPosOnObj(pos, blockObj);
                return blockObj;
            }
            addBreakableBlock(pos) {
                if (this.game.grid.getAllObjsAt(pos).length != 0)
                    return;
                let worldPos = this.game.grid.getWorldPosition(pos);
                let breakableObj = this.breakableBlockPool.getDeadObj(Gumball.BreakableBlock, this.game, worldPos.x, worldPos.y, Gumball.SpriteLibrary.game.brick_block);
                breakableObj.onInit();
                this.setGridPosOnObj(pos, breakableObj);
                return breakableObj;
            }
            setGridPosOnObj(pos, obj) {
                obj.gridPosition = pos;
                this.levelGroup.add(obj);
                this.game.grid.addToGrid(obj, pos);
            }
        }
        Gumball.LevelBuilder = LevelBuilder;
    })(Gumball = Funday.Gumball || (Funday.Gumball = {}));
})(Funday || (Funday = {}));
var Funday;
(function(Funday) {
    var Gumball;
    (function(Gumball) {
        class LevelController {
            constructor(game, tutorialController) {
                this.game = game;
                this.levelGroup = game.add.group();
                this.levelBuilder = new Gumball.LevelBuilder(game, this.levelGroup);
                this.difficultyController = new Gumball.DifficultyController();
                this.patternChooser = new Gumball.PatternChooser(game, this.difficultyController);
                this.playerRespawner = new Gumball.PlayerRespawner(game);
                this.tutorialController = tutorialController;
                window.levelController = this;
            }
            setupLevel() {
                this.playerPos = new Gumball.Vec3(0, 0, 0);
                this.fallTimeModifier = 0;
                this.difficultyController.reset();
                this.levelBuilder.resetAtOrigin();
                if (this.tutorialController.isTutorialActive()) {
                    let tutorialPatternChooser = new Gumball.TutorialPatternChooser(this.game);
                    let nextPattern = tutorialPatternChooser.getNextPattern();
                    this.playerRespawner.newPattern(nextPattern, this.levelBuilder.nextLayerStartPos);
                    this.levelBuilder.buildPattern(nextPattern, this.difficultyController);
                }
                this.checkIfNewPatternShouldBeBuilt();
                this.checkIfNewPatternShouldBeBuilt();
                this.levelBuilder.buildObjectsComingOnScreen();
                this.game.soundRepo.onStartLevel();
                this.levelGroup.forEach((o) => {
                    if (o instanceof Gumball.GameObject) {
                        let delay = o.gridPosition.distance2D(this.playerPos) * 100 - 100;
                        o.doFadeInTransition(delay);
                    }
                });
                this.updatePerspective();
            }
            startLevel() {
                if (this.tutorialController.isTutorialActive())
                    this.tutorialController.startTutorial();
            }
            tearDown() {
                let fallOffset = 0;
                this.playerRespawner.reset();
                this.game.soundRepo.onBricksFallAtGameOver();
                this.levelGroup.forEachAlive((e) => {
                    if (e instanceof Gumball.GameObject) {
                        e.startFallTimer(this.playerPos, 100, fallOffset);
                        if (e instanceof Gumball.Block)
                            e.muteFallSound();
                    }
                });
            }
            clearAll() {
                this.levelGroup.forEachAlive((e) => {
                    e.kill();
                });
                this.game.grid.clearGrid();
            }
            respawnBlocks(positions, callback) {
                let fadeInTween = undefined;
                positions.forEach(pos => {
                    let block = this.game.grid.getBlockAt(pos);
                    if (block) {
                        block.stopFallTimer();
                    }
                    let manhole = this.game.grid.getObjOfType(pos, Gumball.Manhole);
                    if (!block && !manhole) {
                        let newBlock = this.levelBuilder.addBlockAt(pos);
                        newBlock.stopFallTimer();
                        let delay = newBlock.gridPosition.distance2D(positions[0]) * 100 - 100;
                        fadeInTween = newBlock.doFadeInTransition(delay, true);
                        this.updatePerspective();
                    }
                });
                if (fadeInTween) {
                    fadeInTween.onComplete.addOnce(() => {
                        callback();
                    });
                } else {
                    callback();
                }
            }
            springJumpUpdate() {
                this.checkIfNewPatternShouldBeBuilt();
                this.killOffscreenBlocksAndExits();
                this.levelBuilder.buildObjectsComingOnScreen();
                this.updatePerspective();
            }
            playerPosChanged(newPos, moveTween) {
                this.fallTimeModifier += 10;
                let timeOffset = Math.max(1000, 3000 - this.fallTimeModifier);
                this.checkIfNewPatternShouldBeBuilt();
                this.killOffscreenBlocksAndExits();
                this.levelBuilder.buildObjectsComingOnScreen();
                if (this.tutorialController.isTutorialActive()) {
                    this.tutorialController.playerPosChanged(newPos);
                } else {
                    this.startFalltime(newPos, timeOffset);
                }
                this.playerPos = newPos.copy();
                this.playerRespawner.updatePlayerPos(this.playerPos);
                this.updatePerspective();
                if (moveTween)
                    moveTween.onComplete.addOnce(this.updatePerspective, this);
            }
            killOffscreenBlocksAndExits() {
                this.levelBuilder.killObjectsOffScreen();
                let bottomExit = this.game.grid.getExitPositions()[0];
                if (this.game.grid.getWorldPosition(bottomExit).y > this.game.camera.view.bottom + 200) {
                    this.game.grid.removeExitPos(bottomExit);
                }
            }
            startFalltime(pos, timeOffset) {
                this.game.grid.getAllObjsAtXY(pos.x, pos.y, pos.z - 5, pos.z + 1).forEach((b) => {
                    if (b instanceof Gumball.GameObject)
                        b.startFallTimer(pos, this.fallTimeModifier, timeOffset);
                });
            }
            checkIfNewPatternShouldBeBuilt() {
                let exits = this.game.grid.getExitPositions();
                let topExit = exits[exits.length - 1];
                if (!topExit || this.game.grid.getWorldPosition(topExit).y > this.game.camera.view.top - this.game.camera.height) {
                    let nextPattern = this.patternChooser.getNextPattern();
                    this.playerRespawner.newPattern(nextPattern, this.levelBuilder.nextLayerStartPos.copy());
                    this.levelBuilder.buildPattern(nextPattern, this.difficultyController);
                }
            }
            updatePerspective() {
                this.levelGroup.children.sort(this.perspectiveSorter);
            }
            perspectiveSorter(a, b) {
                let xDepth = b.gridPosition.x + b.gridRenderOffset.x - (a.gridPosition.x + a.gridRenderOffset.x);
                let yDepth = b.gridPosition.y + b.gridRenderOffset.y - (a.gridPosition.y + a.gridRenderOffset.y);
                let depth = xDepth + yDepth;
                if (depth === 0)
                    depth = a.gridPosition.z + a.gridRenderOffset.z - (b.gridPosition.z + b.gridRenderOffset.z);
                return depth;
            }
        }
        Gumball.LevelController = LevelController;
    })(Gumball = Funday.Gumball || (Funday.Gumball = {}));
})(Funday || (Funday = {}));
var Funday;
(function(Funday) {
    var Gumball;
    (function(Gumball) {
        class LevelEditor {}
        Gumball.LevelEditor = LevelEditor;
    })(Gumball = Funday.Gumball || (Funday.Gumball = {}));
})(Funday || (Funday = {}));
var Funday;
(function(Funday) {
    var Gumball;
    (function(Gumball) {
        class ObjData {
            constructor(obj, pos) {
                this.obj = obj;
                this.pos = pos;
            }
        }
        Gumball.ObjData = ObjData;
        class GameObjs {}
        GameObjs.block = "BLOCK";
        GameObjs.pickup = "PICKUP";
        GameObjs.coin = "COIN";
        GameObjs.manhole = "MANHOLE";
        GameObjs.guaranteedManhole = "MANHOLE_GUARANTEED";
        GameObjs.shadow = "SHADOW";
        GameObjs.spring = "SPRING";
        GameObjs.breakable = "BREAKABLE";
        GameObjs.exit = "EXIT";
        Gumball.GameObjs = GameObjs;
        class LevelPattern {
            constructor() {
                this.mirror = false;
                this.list = [];
                this.mirrorList = [];
            }
            addObject(obj, pos) {
                this.list.push(new ObjData(obj, pos));
                this.mirrorList.push(new ObjData(obj, new Gumball.Vec3(pos.y, pos.x, pos.z)));
                if (obj == GameObjs.exit) {
                    this.exitPos = new Gumball.Vec3(pos.x, pos.y, pos.z);
                    this.mirrorExitPos = new Gumball.Vec3(pos.y, pos.x, pos.z);
                }
                return this;
            }
            removeObject(obj, pos) {
                for (let i = 0; i < this.list.length; i++) {
                    let data = this.list[i];
                    if (data.obj == obj && data.pos.x == pos.x && data.pos.y == pos.y && data.pos.z == pos.z) {
                        this.list.splice(i, 1);
                    }
                };
            }
            exportPattern() {
                let data = JSON.stringify(this.list);
                console.log(data);
            }
            loadPattern(json) {
                json.forEach((e) => {
                    this.list.push(new ObjData(e.obj, new Gumball.Vec3(e.pos.x, e.pos.y, e.pos.z)));
                    this.mirrorList.push(new ObjData(e.obj, new Gumball.Vec3(e.pos.y, e.pos.x, e.pos.z)));
                    if (e.obj == GameObjs.exit) {
                        this.exitPos = new Gumball.Vec3(e.pos.x, e.pos.y, e.pos.z);
                        this.mirrorExitPos = new Gumball.Vec3(e.pos.y, e.pos.x, e.pos.z);
                    }
                });
            }
            decideIfMirror() {
                this.mirror = Math.random() > 0.5 ? true : false;
            }
            getExitPos() {
                return (this.mirror ? this.mirrorExitPos : this.exitPos);
            }
            getList() {
                return (this.mirror ? this.mirrorList : this.list);
            }
        }
        Gumball.LevelPattern = LevelPattern;
    })(Gumball = Funday.Gumball || (Funday.Gumball = {}));
})(Funday || (Funday = {}));
var Funday;
(function(Funday) {
    var Gumball;
    (function(Gumball) {
        class ObjectSpawnTracker {
            constructor(maxSpawnsPerPattern) {
                this.spawnsThisPattern = 0;
                this.maxSpawnsPerPattern = 0;
                this.patternsSinceLastSpawn = 0;
                this.maxSpawnsPerPattern = maxSpawnsPerPattern;
            }
            setMaxSpawnsPerPattern(num) {
                this.maxSpawnsPerPattern = num;
            }
            newPattern() {
                this.spawnsThisPattern = 0;
                this.patternsSinceLastSpawn += 1;
            }
            spawned() {
                this.spawnsThisPattern += 1;
                this.patternsSinceLastSpawn = 0;
            }
            canSpawn() {
                if (this.maxSpawnsPerPattern < 1.0 && this.patternsSinceLastSpawn * this.maxSpawnsPerPattern >= 1.0) {
                    return 1.0;
                }
                if (this.maxSpawnsPerPattern >= 1.0 && this.spawnsThisPattern < this.maxSpawnsPerPattern) {
                    return 1.0;
                }
                return 0.0;
            }
        }
        Gumball.ObjectSpawnTracker = ObjectSpawnTracker;
    })(Gumball = Funday.Gumball || (Funday.Gumball = {}));
})(Funday || (Funday = {}));
var Funday;
(function(Funday) {
    var Gumball;
    (function(Gumball) {
        class PatternChooser {
            constructor(game, difficultyController) {
                this.forcedPattern = undefined;
                this.patternsSpawned = 0;
                this.patternsPerLowerDiffBoundIncrease = 15;
                this.patternsPerHigherDiffBoundIncrease = 8;
                this.patterns = [];
                this.game = game;
                this.difficultyController = difficultyController;
                this.loadPatterns();
                window.patternChooser = this;
            }
            loadPatterns() {
                this.addPattern(this.game.cache.getJSON('pattern1'), 'pattern 1', 0);
                this.addPattern(this.game.cache.getJSON('pattern2'), 'pattern 2', 0);
                this.addPattern(this.game.cache.getJSON('pattern4'), 'pattern 4', 0);
                this.addPattern(this.game.cache.getJSON('pattern5'), 'pattern 5', 0);
                this.addPattern(this.game.cache.getJSON('pattern6'), 'pattern 6', 0);
                this.addPattern(this.game.cache.getJSON('pattern0'), 'pattern 0', 1);
                this.addPattern(this.game.cache.getJSON('pattern3'), 'pattern 3', 1);
                this.addPattern(this.game.cache.getJSON('pattern7'), 'pattern 7', 1);
                this.addPattern(this.game.cache.getJSON('pattern8'), 'pattern 8', 1);
                this.addPattern(this.game.cache.getJSON('pattern9'), 'pattern 9', 1);
                this.addPattern(this.game.cache.getJSON('pattern10'), 'pattern 10', 1);
                this.addPattern(this.game.cache.getJSON('pattern11'), 'pattern 11', 1);
                this.addPattern(this.game.cache.getJSON('pattern12'), 'pattern 12', 1);
                this.addPattern(this.game.cache.getJSON('pattern13'), 'pattern 13', 2);
                this.addPattern(this.game.cache.getJSON('pattern14'), 'pattern 14', 2);
                this.addPattern(this.game.cache.getJSON('pattern15'), 'pattern 15', 2);
                this.addPattern(this.game.cache.getJSON('pattern16'), 'pattern 16', 2);
                this.addPattern(this.game.cache.getJSON('pattern17'), 'pattern 17', 2);
                this.addPattern(this.game.cache.getJSON('pattern18'), 'pattern 18', 2);
            }
            addPattern(json, name, difficultyScore) {
                let newPattern = new Gumball.LevelPattern();
                newPattern.loadPattern(json);
                if (!this.patterns[difficultyScore]) {
                    this.patterns[difficultyScore] = [];
                }
                this.patterns[difficultyScore].push(newPattern);
                let patternIndex = this.patterns[difficultyScore].length - 1;
                let diffString = "(easy)";
                if (difficultyScore == 1)
                    diffString = "(medium)";
                if (difficultyScore == 2)
                    diffString = "(hard)";
                this.game.debugMenu.addButton('Spawn ' + name + " " + diffString, () => {
                    this.forcedPattern = {
                        index: patternIndex,
                        difficulty: difficultyScore
                    };
                    this.game.core.tearDown();
                    this.game.core.setup();
                });
            }
            testPattern() {
                let pattern = new Gumball.LevelPattern();
                pattern.addObject(Gumball.GameObjs.block, new Gumball.Vec3(0, 0, 0));
                pattern.addObject(Gumball.GameObjs.block, new Gumball.Vec3(0, 1, 1));
                pattern.addObject(Gumball.GameObjs.block, new Gumball.Vec3(0, 2, 2));
                pattern.addObject(Gumball.GameObjs.block, new Gumball.Vec3(0, 3, 3));
                pattern.addObject(Gumball.GameObjs.block, new Gumball.Vec3(0, 4, 4));
                pattern.addObject(Gumball.GameObjs.block, new Gumball.Vec3(0, 5, 5));
                pattern.addObject(Gumball.GameObjs.exit, new Gumball.Vec3(0, 5, 5));
                if (!this.patterns[0]) {
                    this.patterns[0] = [];
                }
                this.patterns[0].push(pattern);
                this.forcedPattern = 0;
            }
            getNextPattern() {
                let pattern;
                if (this.forcedPattern) {
                    pattern = this.patterns[this.forcedPattern.difficulty][this.forcedPattern.index];
                } else {
                    this.difficultyController.newPattern();
                    let lowBound = this.difficultyController.difficultyLowBound;
                    let highBound = this.difficultyController.difficultyHighBound;
                    let difficulty = Math.min(this.patterns.length - 1, this.game.rnd.integerInRange(lowBound, highBound));
                    let patternIndex = this.game.rnd.integerInRange(0, this.patterns[difficulty].length - 1);
                    pattern = this.patterns[difficulty][patternIndex];
                }
                pattern.decideIfMirror();
                return pattern;
            }
        }
        Gumball.PatternChooser = PatternChooser;
    })(Gumball = Funday.Gumball || (Funday.Gumball = {}));
})(Funday || (Funday = {}));
var Funday;
(function(Funday) {
    var Gumball;
    (function(Gumball) {
        class Player extends Phaser.Sprite {
            constructor(game, cameraHelper) {
                super(game, 0, 0, "", "");
                this.gridRenderOffset = new Gumball.Vec3(-0.1, -0.1, 0.0);
                this.fallOffEvent = new Phaser.Signal();
                this.game = game;
                this.cameraHelper = cameraHelper;
                this.cameraSprite = new Phaser.Sprite(game, 0, 0, '', '');
                this.addChild(this.cameraSprite);
                this.cameraSprite.x = 0;
                this.cameraSprite.y = -this.game.services.resolution.applyResultionRatio(300);
                this.anchor.set(0.5, 0.5);
                this.playerMovement = new Gumball.PlayerMovement(game, this);
                this.playerScore = new Gumball.PlayerScore(game, this);
                this.playerCostume = new Gumball.PlayerCostume();
                this.playerAnimation = new Gumball.PlayerAnimation(this.game, this, this.playerCostume);
                this.playerMovement.gridPositionChanged.add(this.playerScore.moved, this.playerScore, 0);
                this.playerMovement.gridPositionChanged.add(this.checkCollisions, this, 0);
                this.playerMovement.gridPositionChanged.add(this.checkShadowVisibility, this, 0);
                this.playerMovement.gridPositionChanged.add(this.playerAnimation.moved, this.playerAnimation, 0);
                this.playerScore.onScoreChange.add(this.game.achiev.onScoreChange, this.game.achiev);
                this.playerScore.onCoinPickup.add(this.game.achiev.onCoinCollect, this.game.achiev);
                this.shadow = new Gumball.Shadow(game, Gumball.SpriteLibrary.game.coin_shadow, this);
                this.addChild(this.shadow);
                window.player = this;
            }
            loadCostume() {
                this.playerAnimation.loadCostume(this.playerCostume.getCostume());
                this.addChild(this.playerAnimation.armature);
                this.playerCostume.setShadowScale(this.shadow);
            }
            setAtPosition(pos) {
                this.gridPosition = pos;
                this.playerMovement.setPosition(this.gridPosition);
                this.scale.x = 1;
                this.shadow.visible = true;
                this.visible = true;
            }
            respawn(position) {
                this.setAtPosition(position);
                this.playerAnimation.play('idle');
                this.playerMovement.gridPositionChanged.dispatch(this.gridPosition, null);
                this.playerMovement.enable();
                this.game.soundRepo.onRespawn();
            }
            checkShadowVisibility(newPos, moveTween) {
                if (this.game.grid.getBlockAt(newPos)) {
                    this.shadow.visible = true;
                } else {
                    this.game.time.events.add(moveTween.totalDuration * 0.15, () => {
                        this.shadow.visible = false;
                    });
                }
            }
            checkCollisions() {
                let objArray = this.game.grid.getAllObjsAt(this.gridPosition);
                objArray.forEach((obj) => {
                    if (obj instanceof Gumball.GameObject) {
                        obj.onCollisionWithPlayer(this);
                    }
                    if (obj instanceof Gumball.Coin) {
                        this.playerScore.addCoin(1);
                        if (this.playerScore.doubleCoins)
                            obj.spawnDoubleCoinGraphic();
                    }
                    if (obj instanceof Gumball.Manhole)
                        this.playerMovement.disable(false);
                    if (obj instanceof Gumball.Spring) {
                        this.playerMovement.disable(false);
                        this.cameraHelper.follow(null);
                        this.game.time.events.add(400, () => {
                            this.doSpringJump(obj);
                            this.playerAnimation.play('fall', -1);
                            obj.playFireAnim();
                            this.game.soundRepo.onSpringJump();
                            this.game.achiev.onSpringJump();
                        });
                    }
                });
            }
            doSpringJump(spring) {
                let jumpWorldPos = this.game.grid.getTopOfBlockPosition(spring.jumpPos);
                let distance = new Phaser.Point(jumpWorldPos.x - this.position.x, Math.abs(jumpWorldPos.y - this.position.y) / this.game.applyResolutionRatio(1));
                let speed = 3.5;
                let jumpTween = this.game.add.tween(this.position).to({
                    x: this.position.x + distance.x * 0.8,
                    y: jumpWorldPos.y - 1000
                }, (distance.y + 1000) / speed, Phaser.Easing.Quadratic.Out, true, 0);
                jumpTween.onUpdateCallback(() => {
                    this.playerScore.addScore(0.25);
                    this.game.core.levelController.springJumpUpdate();
                });
                this.cameraHelper.panTo(jumpWorldPos.x, jumpWorldPos.y + this.cameraSprite.y, (distance.y + this.game.applyResolutionRatio(1000)) / speed + 1000 / speed, Phaser.Easing.Quadratic.InOut);
                jumpTween.onComplete.addOnce(() => {
                    this.game.add.tween(this.position).to({
                        x: jumpWorldPos.x,
                        y: jumpWorldPos.y
                    }, 1000 / speed, Phaser.Easing.Quadratic.In, true, 0).onComplete.addOnce(() => {
                        this.game.grid.removeFromGrid(this, this.gridPosition);
                        this.game.grid.addToGrid(this, spring.jumpPos);
                        this.gridPosition = spring.jumpPos;
                        this.playerMovement.enable();
                        this.playerAnimation.play('idle');
                        this.game.soundRepo.onSpringLand(this.playerCostume.getCostume());
                        this.playerMovement.gridPositionChanged.dispatch(this.gridPosition, null);
                        this.cameraHelper.follow(this.cameraSprite, 0, 0.1, 0.1);
                    });
                });
            }
            removalAtGridPos() {
                if (this.playerMovement.isEnabled()) {
                    this.fallOff();
                }
            }
            fallOff() {
                this.game.camera.follow(null);
                this.playerMovement.disable();
                this.playerAnimation.play('fall', 10);
                this.game.grid.removeFromGrid(this, this.gridPosition);
                this.game.soundRepo.onFallOff(this.playerCostume.getCostume());
                this.addFallingTween();
            }
            addFallingTween() {
                let fallingTween = this.game.add.tween(this.position).to({
                    y: '+' + this.game.applyResolutionRatio(2000)
                }, 800, Phaser.Easing.Quadratic.In, true, 250);
                fallingTween.onComplete.addOnce(() => {
                    this.fallOffEvent.dispatch();
                });
            }
            update() {
                this.playerAnimation.update();
            }
        }
        Gumball.Player = Player;
    })(Gumball = Funday.Gumball || (Funday.Gumball = {}));
})(Funday || (Funday = {}));
var Funday;
(function(Funday) {
    var Gumball;
    (function(Gumball) {
        class PlayerAnimation {
            constructor(game, player, playerCostume) {
                this.game = game;
                this.player = player;
                this.armatures = {};
                this.armatures[Gumball.PlayerCostume.gumball] = dragonBones.PhaserFactory.factory.buildArmatureDisplay("Armature", Gumball.PlayerCostume.gumball);
                this.armatures[Gumball.PlayerCostume.darwin] = dragonBones.PhaserFactory.factory.buildArmatureDisplay("Armature", Gumball.PlayerCostume.darwin);
                this.armatures[Gumball.PlayerCostume.anais] = dragonBones.PhaserFactory.factory.buildArmatureDisplay("Armature", Gumball.PlayerCostume.anais);
                this.armatures[Gumball.PlayerCostume.carrie] = dragonBones.PhaserFactory.factory.buildArmatureDisplay("Armature", Gumball.PlayerCostume.carrie);
                this.armatures[Gumball.PlayerCostume.richard] = dragonBones.PhaserFactory.factory.buildArmatureDisplay("Armature", Gumball.PlayerCostume.richard);
                this.oldPos = new Gumball.Vec3(0, 0, 0);
                this.moves = 0;
            }
            loadCostume(costume) {
                if (this.armature) {
                    this.armature.parent.removeChild(this.armature);
                }
                this.armature = this.armatures[costume];
                this.armature.anchor.set(0.5, 0.5);
                this.play('idle');
            }
            play(name, repeats = 1) {
                this.currentAnim = this.armature.animation.play(name, repeats);
            }
            moved(newPos) {
                let currentPos = this.player.position;
                let worldPos = this.game.grid.getTopOfBlockPosition(newPos);
                this.player.scale.x = (worldPos.x - currentPos.x) < 0 ? 1 : -1;
                if (this.currentAnim.name != "fall") {
                    if (newPos.z - this.oldPos.z > 0) {
                        this.play('move_jump', 1);
                    } else {
                        if (this.moves % 2 == 0) {
                            this.play('move', 1);
                        } else {
                            this.play('move2', 1);
                        }
                    }
                }
                this.moves += 1;
                this.oldPos = newPos;
            }
            update() {
                if (this.currentAnim.isCompleted) {
                    this.play('idle');
                }
            }
        }
        Gumball.PlayerAnimation = PlayerAnimation;
    })(Gumball = Funday.Gumball || (Funday.Gumball = {}));
})(Funday || (Funday = {}));
var Funday;
(function(Funday) {
    var Gumball;
    (function(Gumball) {
        class PlayerCostume {
            setCostume(name) {
                this.costume = PlayerCostume.translateCostumeName(name);
            }
            getCostume() {
                return this.costume;
            }
            static translateCostumeName(name) {
                if (name == "gumball_shop") {
                    return PlayerCostume.gumball;
                }
                if (name == "darwin_shop") {
                    return PlayerCostume.darwin;
                }
                if (name == "anais_shop") {
                    return PlayerCostume.anais;
                }
                if (name == "Carrie_shop") {
                    return PlayerCostume.carrie;
                }
                if (name == "richard_shop") {
                    return PlayerCostume.richard;
                }
                return null;
            }
            setShadowScale(shadow) {
                if (this.costume == PlayerCostume.richard) {
                    shadow.scale.set(2.0, 1.5);
                    shadow.setOffset(0, -10);
                } else {
                    shadow.scale.set(1.0, 1.0);
                    shadow.setOffset(0, -10);
                }
            }
        }
        PlayerCostume.gumball = "GumballNew";
        PlayerCostume.darwin = "Darwin";
        PlayerCostume.anais = "anais";
        PlayerCostume.carrie = "Carrie";
        PlayerCostume.richard = "richard";
        Gumball.PlayerCostume = PlayerCostume;
    })(Gumball = Funday.Gumball || (Funday.Gumball = {}));
})(Funday || (Funday = {}));
var Funday;
(function(Funday) {
    var Gumball;
    (function(Gumball) {
        class PlayerMovement {
            constructor(game, player) {
                this.gridPositionChanged = new Phaser.Signal();
                this.moveDelay = 0;
                this.timeAtLastMove = 0;
                this.game = game;
                this.player = player;
            }
            setupBinding() {
                if (this.inputBinding) {
                    this.inputBinding.detach();
                }
                this.inputBinding = this.game.input.onUp.add(this.onInputUp, this);
                this.leftKey = this.game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
                this.rightKey = this.game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
                this.leftBinding = this.leftKey.onUp.add(this.onLeftUp, this);
                this.rightBinding = this.rightKey.onUp.add(this.onRightUp, this);
            }
            enable() {
                this.inputBinding.active = true;
                this.leftBinding.active = true;
                this.rightBinding.active = true;
            }
            disable(stopMovement = true) {
                this.inputBinding.active = false;
                this.leftBinding.active = false;
                this.rightBinding.active = false;
                if (this.moveTween && stopMovement)
                    this.moveTween.stop(false);
            }
            isEnabled() {
                return this.inputBinding.active;
            }
            setPosition(pos) {
                let worldPos = this.game.grid.getTopOfBlockPosition(pos);
                this.game.grid.addToGrid(this.player, this.player.gridPosition);
                this.player.position.x = worldPos.x;
                this.player.position.y = worldPos.y;
            }
            onInputUp(pointer) {
                if (!pointer.withinGame)
                    return;
                if (this.game.time.now - this.timeAtLastMove < this.moveDelay)
                    return;
                if (pointer.position.y < this.game.applyResolutionRatio(125) + this.game.services.resolution.getNotchSafeTop())
                    return;
                let currentPos = this.player.gridPosition;
                let newPos = currentPos.copy();
                this.lastBlocks = this.game.grid.getAllObjsAtXY(currentPos.x, currentPos.y, currentPos.z - 5, currentPos.z + 1);
                if (pointer.worldX > this.player.position.x) {
                    newPos.y += 1;
                } else {
                    newPos.x += 1;
                }
                let moveDir = new Gumball.Vec3(newPos.x - currentPos.x, newPos.y - currentPos.y, newPos.z - currentPos.z);
                this.lastBlocks.forEach((obj) => {
                    if (obj instanceof Gumball.Block) {
                        obj.gridRenderOffset.x = 0.95 * moveDir.x;
                        obj.gridRenderOffset.y = 0.95 * moveDir.y;
                    }
                });
                let zPlusOnePos = new Gumball.Vec3(newPos.x, newPos.y, newPos.z + 1);
                let zPlusTwoPos = new Gumball.Vec3(newPos.x, newPos.y, newPos.z + 2);
                if (this.game.grid.getBlockAt(zPlusOnePos) || this.game.grid.getObjOfType(zPlusOnePos, Gumball.Manhole)) {
                    newPos.z += 1;
                    zPlusOnePos.z += 1;
                    if (this.game.grid.getBlockAt(zPlusTwoPos))
                        return;
                }
                if (this.checkForBreakableBlock(newPos, zPlusOnePos)) {
                    this.moveToNewPosition(newPos);
                    this.game.grid.removeFromGrid(this.player, currentPos);
                    this.game.grid.addToGrid(this.player, newPos);
                    this.player.gridPosition = newPos;
                    this.gridPositionChanged.dispatch(newPos, this.moveTween);
                    if (this.game.time.now - this.timeAtLastMove > 400) {
                        this.moveDelay = 0;
                    } else {
                        this.moveDelay += 100;
                    }
                    this.timeAtLastMove = this.game.time.now;
                }
            }
            onLeftUp(key) {
                let pointer = this.game.input.activePointer;
                pointer.x = 0;
                this.onInputUp(pointer);
            }
            onRightUp(key) {
                let pointer = this.game.input.activePointer;
                pointer.x = this.game.width;
                this.onInputUp(pointer);
            }
            bugMove() {
                let currentPos = new Gumball.Vec3(0, 0, 0);
                this.lastBlocks = this.game.grid.getAllObjsAtXY(currentPos.x, currentPos.y, currentPos.z - 5, currentPos.z + 1);
                this.moveToNewPosition(currentPos.add(new Gumball.Vec3(0, 1, 0)));
                this.moveToNewPosition(currentPos.add(new Gumball.Vec3(1, 0, 0)));
            }
            moveToNewPosition(newPos) {
                let worldPos = this.game.grid.getTopOfBlockPosition(newPos);
                if (this.game.grid.getObjOfType(newPos, Gumball.Spring)) {
                    worldPos.y -= 35;
                }
                if (this.moveTween && this.moveTween.isRunning)
                    this.moveTween.stop();
                let duration = newPos.z - this.player.gridPosition.z > 0 ? 400 : 250;
                this.moveTween = this.game.add.tween(this.player.position).to({
                    x: worldPos.x,
                    y: worldPos.y
                }, duration, Phaser.Easing.Exponential.Out, true, 0);
                this.game.soundRepo.onJump(this.player.playerCostume.getCostume());
                let block = this.game.grid.getBlockAt(newPos);
                if (!block) {
                    block = this.game.grid.getObjOfType(newPos, Gumball.Manhole);
                    if (!block)
                        this.disable(false);
                }
                this.moveTween.onComplete.addOnce(() => {
                    this.lastBlocks.forEach((obj) => {
                        if (obj instanceof Gumball.Block) {
                            obj.gridRenderOffset.x = 0;
                            obj.gridRenderOffset.y = 0;
                        }
                    });
                    this.lastBlocks = [];
                    if (!block) {
                        this.player.fallOff();
                    }
                });
            }
            checkForBreakableBlock(newPos, zPlusOnePos) {
                let breakableBlock = this.game.grid.getObjOfType(zPlusOnePos, Gumball.BreakableBlock);
                if (breakableBlock != undefined) {
                    breakableBlock.onCollisionWithPlayer(this.player);
                    let currentPos = this.player.position;
                    let worldPos = this.game.grid.getTopOfBlockPosition(newPos);
                    let smallMove = new Phaser.Point(worldPos.x - currentPos.x, worldPos.y - currentPos.y);
                    this.moveTween = this.game.add.tween(this.player.position).to({
                        x: currentPos.x + smallMove.x * 0.5,
                        y: currentPos.y + smallMove.y * 0.5
                    }, 50, Phaser.Easing.Linear.None, true, 0, 0, true);
                    if (newPos.z - this.player.gridPosition.z == 1) {
                        this.player.playerAnimation.play('punch_up', 1);
                    } else {
                        this.player.playerAnimation.play('punch', 1);
                    }
                    this.player.scale.x = smallMove.x < 0 ? 1 : -1;
                    return false;
                }
                return true;
            }
        }
        Gumball.PlayerMovement = PlayerMovement;
    })(Gumball = Funday.Gumball || (Funday.Gumball = {}));
})(Funday || (Funday = {}));
var Funday;
(function(Funday) {
    var Gumball;
    (function(Gumball) {
        class PlayerRespawner {
            constructor(game) {
                this.reset();
                this.game = game;
            }
            reset() {
                this.patternList = [];
                this.patternStartPosList = [];
            }
            updatePlayerPos(playerPos) {
                if (this.patternStartPosList.length <= 1)
                    return;
                if (playerPos.x >= this.patternStartPosList[1].x && playerPos.y >= this.patternStartPosList[1].y && playerPos.z >= this.patternStartPosList[1].z) {
                    this.removeFirstPattern();
                }
            }
            newPattern(pattern, pos) {
                this.patternList.push(pattern.getList());
                this.patternStartPosList.push(pos);
            }
            removeFirstPattern() {
                this.patternList.shift();
                this.patternStartPosList.shift();
            }
            getCurrentPatternBlocks() {
                let positions = [];
                this.patternList[0].forEach(element => {
                    if (element.obj == Gumball.GameObjs.block) {
                        let newPos = element.pos.copy().add(this.patternStartPosList[0]);
                        positions.push(newPos);
                    }
                });
                return positions;
            }
            findSafeSpot(playerPos) {
                let smallestDistance = Number.MAX_VALUE;
                let smallestPosition;
                this.patternList[0].forEach(element => {
                    if (element.obj == Gumball.GameObjs.pickup) {
                        let newPos = element.pos.copy().add(this.patternStartPosList[0]);
                        let possibleBreakablePosition = new Gumball.Vec3(newPos.x, newPos.y, newPos.z + 1);
                        if (!this.game.grid.getObjOfType(possibleBreakablePosition, Gumball.BreakableBlock)) {
                            if (playerPos.distance3D(newPos) < smallestDistance) {
                                smallestDistance = playerPos.distance3D(newPos);
                                smallestPosition = newPos;
                            }
                        }
                    }
                });
                return smallestPosition.copy();
            }
        }
        Gumball.PlayerRespawner = PlayerRespawner;
    })(Gumball = Funday.Gumball || (Funday.Gumball = {}));
})(Funday || (Funday = {}));
var Funday;
(function(Funday) {
    var Gumball;
    (function(Gumball) {
        class PlayerScore {
            constructor(game, player) {
                this.onCoinPickup = new Phaser.Signal();
                this.onScoreChange = new Phaser.Signal();
                this.onHighscoreChange = new Phaser.Signal();
                this.game = game;
                this.doubleCoins = false;
                this.highscore = 0;
                this.coins = 0;
                this.player = player;
                let loadedHighscore = this.game.services.persistence.load(Gumball.PersistenceKeys.HIGHSCORE);
                let loadedCoins = this.game.services.persistence.load(Gumball.PersistenceKeys.COINS);
                this.game.debugMenu.addButton('Get coins', () => {
                    this.addCoin(1000);
                });
                if (loadedHighscore)
                    this.highscore = Number(loadedHighscore);
                if (loadedCoins)
                    this.coins = Number(loadedCoins);
                this.reset();
            }
            reset() {
                this.score = 0;
                this.newHighscore = false;
                this.onScoreChange.dispatch(this.score);
            }
            saveCoinAndHighscore() {
                this.game.services.persistence.save(Gumball.PersistenceKeys.HIGHSCORE, this.highscore.toString());
                this.game.services.persistence.save(Gumball.PersistenceKeys.COINS, this.coins.toString());
            }
            addCoin(val = 1) {
                this.coins += val;
                if (this.doubleCoins)
                    this.coins += val;
                this.onCoinPickup.dispatch(this.coins);
            }
            spendCoins(val) {
                this.coins -= val;
                this.saveCoinAndHighscore();
                this.onCoinPickup.dispatch(this.coins);
            }
            setDoubleCoins(bool) {
                this.doubleCoins = bool;
            }
            moved(to) {
                this.addScore(1);
            }
            addScore(val = 1) {
                this.score += val;
                if (this.score >= this.highscore) {
                    this.highscore = Math.floor(this.score);
                    this.onHighscoreChange.dispatch(Math.floor(this.highscore));
                    if (!this.newHighscore) {
                        if (this.highscore > 1)
                            this.game.soundRepo.onNewHighscore(this.player.playerCostume.getCostume());
                        this.newHighscore = true;
                    }
                }
                this.onScoreChange.dispatch(Math.floor(this.score));
            }
        }
        Gumball.PlayerScore = PlayerScore;
    })(Gumball = Funday.Gumball || (Funday.Gumball = {}));
})(Funday || (Funday = {}));
var Funday;
(function(Funday) {
    var Gumball;
    (function(Gumball) {
        class Shadow extends Phaser.Sprite {
            constructor(game, spriteId, owner) {
                super(game, 0, 0, spriteId.key, spriteId.frame);
                this.shadowOffsetX = 0;
                this.shadowOffsetY = 0;
                this.anchor.set(0.5, 0.5);
                this.owner = owner;
            }
            setOffset(x, y) {
                this.shadowOffsetX = x;
                this.shadowOffsetY = y;
            }
            update() {
                this.position.x = this.owner.x + this.offsetX;
                this.position.y = this.owner.y + this.offsetY;
            }
        }
        Gumball.Shadow = Shadow;
    })(Gumball = Funday.Gumball || (Funday.Gumball = {}));
})(Funday || (Funday = {}));
var Funday;
(function(Funday) {
    var Gumball;
    (function(Gumball) {
        class StateBoot extends Phaser.State {
            init() {
                let game = this.game;
                let platformService = game.services.platform;
                platformService.determinePlatform();
                if (platformService.getPlatform() === Funday.Service.PlatformType.Browser) {
                    let resolutionService = game.services.resolution;
                    resolutionService.setResolutionConfiguration("HD", false);
                }
                game.preBoot();
            }
            preload() {
                let game = this.game;
                game.loadLoadScreenGfxForCurrentResolution();
                game.load.json("localisation", "assets/data/localisation.json");
            }
            create() {
                let game = this.game;
                game.startLoad();
            }
        }
        Gumball.StateBoot = StateBoot;
    })(Gumball = Funday.Gumball || (Funday.Gumball = {}));
})(Funday || (Funday = {}));
var Funday;
(function(Funday) {
    var Gumball;
    (function(Gumball) {
        class StateCharSelect extends Phaser.State {
            constructor() {
                super(...arguments);
                this.characters = [Gumball.SpriteLibrary.select_character_screen.gumball_shop,
                    Gumball.SpriteLibrary.select_character_screen.darwin_shop,
                    Gumball.SpriteLibrary.select_character_screen.anais_shop,
                    Gumball.SpriteLibrary.select_character_screen.Carrie_shop,
                    Gumball.SpriteLibrary.select_character_screen.richard_shop
                ];
                this.scaled = false;
                this.characterOffsets = [-25, 0, 60, -10, 40];
                this.characterPrices = [0, 150, 300, 450, 600];
                this.buttonGap = 325;
                this.buttonFocusIndex = 0;
                this.focusYOffset = 25;
            }
            init() {
                if (this.scaled)
                    return;
                for (let i = 0; i < this.characterOffsets.length; i++) {
                    this.characterOffsets[i] = this.game.applyResolutionRatio(this.characterOffsets[i]);
                }
                this.buttonGap = this.game.applyResolutionRatio(this.buttonGap);
                this.focusYOffset = this.game.applyResolutionRatio(this.focusYOffset);
                this.scaled = true;
            }
            create() {
                this.game.services.analytics.trackLocation(Funday.Service.GameLocations.SHOP);
                if (this.charSelectGroup) {
                    this.charSelectGroup.revive();
                    this.game.services.animation.fadeFromBlack(500).play();
                    this.startHoverArrowTween();
                    this.game.add.tween(this.tower.position).to({
                        y: '-30'
                    }, 5000, Phaser.Easing.Quadratic.InOut, true, 0, -1, true);
                    if (this.notEnoughMoneyPrompt && this.notEnoughMoneyPrompt.alive)
                        this.notEnoughMoneyPrompt.kill();
                    return;
                };
                let game = this.game;
                this.charSelectGroup = this.game.add.group();
                game.debugMenu = new Gumball.DebugMenu(game);
                game.core = new Gumball.CoreController(game);
                this.loadCharacterLocks();
                let bg = this.game.createImage(game.width * 0.5, game.height, Gumball.SpriteLibrary.loadbg.load_background);
                bg.anchor.set(0.5, 1.0);
                let bgTop = game.createImage(game.width * 0.5, bg.top, Gumball.SpriteLibrary.load.load_background02);
                bgTop.anchor.set(0.5, 1.0);
                this.charSelectGroup.add(bg);
                this.charSelectGroup.add(bgTop);
                this.drawMovingBackground();
                this.characterButtons = [];
                let charSelectButtonGroup = this.charSelectGroup.add(game.add.group());
                for (let i = 0; i < this.characters.length; i++) {
                    let btn = game.createButton(game.width * 0.5, game.height * 0.88, this.characters[i]);
                    btn.button.anchor.set(0.5, 1.0);
                    btn.scale.set(0.75, 0.75);
                    btn.position.x += this.buttonGap * i + this.characterOffsets[i];
                    this.characterButtons.push(btn);
                    charSelectButtonGroup.add(btn);
                    let priceTag = new Gumball.PriceTag(game, 0, 0, Gumball.SpriteLibrary.menus.price_box);
                    btn.addChild(priceTag);
                    priceTag.y -= btn.height * 1.5;
                    priceTag.name = 'pricetag';
                    btn.button.onInputUp.add(this.clickedCharacterButton, this, 0);
                }
                this.characterButtons[0].position.y += this.focusYOffset;
                this.characterButtons[0].scale.set(1, 1);
                this.characterButtons[0].button.tint = 0xFFFFFF;
                this.hoverArrow = game.createImage(this.game.width / 2, this.characterButtons[0].position.y - this.characterButtons[0].button.height * 1 - game.applyResolutionRatio(150), Gumball.SpriteLibrary.select_character_screen.arrow);
                this.startHoverArrowTween();
                this.hoverArrow.anchor.set(0.5, 0.5);
                let leftArrow = game.createButton(0 + game.applyResolutionRatio(50), game.height * 0.83, Gumball.SpriteLibrary.select_character_screen.arrow02);
                leftArrow.button.anchor.set(1.0, 0.5);
                leftArrow.scale.set(-1.0, 1.0);
                leftArrow.onUp.add(this.moveCharacters, this, 0, 1);
                this.leftArrow = leftArrow;
                this.leftArrow.visible = false;
                let rightArrow = game.createButton(game.width - game.applyResolutionRatio(50), game.height * 0.83, Gumball.SpriteLibrary.select_character_screen.arrow02);
                rightArrow.scale.set(1.0, 1.0);
                rightArrow.button.anchor.set(1.0, 0.5);
                rightArrow.onUp.add(this.moveCharacters, this, 0, -1);
                this.rightArrow = rightArrow;
                this.charSelectGroup.add(this.hoverArrow);
                this.charSelectGroup.add(this.leftArrow);
                this.charSelectGroup.add(this.rightArrow);
                let subtext = new Phaser.Text(game, game.width * 0.5, game.height * 0.93, game.localis.GetString("choose_character"), {
                    font: game.applyResolutionRatio(72) + "px FredBurger Black",
                    fill: "#fff",
                    stroke: "#000",
                    strokeThickness: game.applyResolutionRatio(10)
                });
                subtext.anchor.set(0.5, 0.5);
                this.charSelectGroup.add(subtext);
                this.updateCharacterPriceAndLocks();
                window.charSelect = this;
            }
            loadCharacterLocks() {
                let locks = this.game.services.persistence.loadDto(Gumball.PersistenceKeys.CHARLOCKS);
                if (!locks) {
                    this.characterLocked = [false, true, true, true, true];
                    this.saveCharacterLocks();
                } else {
                    this.characterLocked = locks;
                }
            }
            saveCharacterLocks() {
                this.game.services.persistence.saveDto(Gumball.PersistenceKeys.CHARLOCKS, this.characterLocked);
            }
            drawMovingBackground() {
                let frontCloudScroller = new Gumball.ScrollingBackground(this.game);
                frontCloudScroller.createScrollObj(0.9, 0.9, 1, 0.8, [Gumball.SpriteLibrary.select_character_screen.gumball_shop_cloud], true);
                frontCloudScroller.createScrollObj(1.2, 1.2, 1, 0.8, [Gumball.SpriteLibrary.select_character_screen.gumball_shop_cloud02], true);
                frontCloudScroller.resetObjs(this.game.width / 3, 0);
                frontCloudScroller.position.y = this.game.height * 0.375;
                let bgCloudScroller = new Gumball.ScrollingBackground(this.game);
                bgCloudScroller.createScrollObj(1.0, 1.0, 1, 0.4, [Gumball.SpriteLibrary.select_character_screen.gumball_shop_cloud03], true);
                bgCloudScroller.createScrollObj(1.0, 1.0, 1, 0.4, [Gumball.SpriteLibrary.select_character_screen.gumball_shop_cloud03], true);
                bgCloudScroller.createScrollObj(1.0, 1.0, 1, 0.4, [Gumball.SpriteLibrary.select_character_screen.gumball_shop_cloud03], true);
                bgCloudScroller.resetObjs(this.game.width / 4, 0);
                bgCloudScroller.position.y = this.game.height * 0.3;
                this.tower = this.game.createImage(this.game.width / 2, this.game.height / 4, Gumball.SpriteLibrary.uncompressed.gumball_shop_tower);
                this.tower.anchor.set(0.5, 0.5);
                this.frontClouds = frontCloudScroller;
                this.bgClouds = bgCloudScroller;
                this.charSelectGroup.add(bgCloudScroller);
                this.charSelectGroup.add(this.tower);
                this.charSelectGroup.add(frontCloudScroller);
            }
            updateCharacterPriceAndLocks() {
                for (let i = 0; i < this.characterButtons.length; i++) {
                    let priceTag = (this.characterButtons[i].getByName('pricetag'));
                    if (this.characterLocked[i]) {
                        this.characterButtons[i].button.tint = 0x000000;
                        priceTag.visible = true;
                    } else {
                        this.characterButtons[i].button.tint = (i == this.buttonFocusIndex) ? 0xFFFFFF : 0x999999;
                        priceTag.visible = false;
                    }
                    priceTag.priceText.text = this.characterPrices[i].toString();
                }
            }
            startHoverArrowTween() {
                this.hoverArrowTween = this.game.add.tween(this.hoverArrow.position).to({
                    y: '+15'
                }, 500, Phaser.Easing.Quadratic.InOut, true, 0, -1, true);
            }
            clickedCharacterButton(btn) {
                if (this.focusTween && this.focusTween.isRunning) {
                    return;
                }
                if (btn.parent == this.characterButtons[this.buttonFocusIndex]) {
                    if (this.characterLocked[this.buttonFocusIndex]) {
                        this.tryToBuy(this.buttonFocusIndex);
                        return;
                    };
                    if (this.focusTween)
                        this.focusTween.stop(false);
                    this.game.core.player.playerCostume.setCostume(this.characters[this.buttonFocusIndex].frame);
                    this.charSelectGroup.kill();
                    this.game.startGame();
                } else {
                    let direction = Phaser.Math.sign(this.characterButtons[this.buttonFocusIndex].x - btn.parent.x);
                    this.moveCharacters(direction);
                }
            }
            moveCharacters(direction) {
                if (this.focusTween && this.focusTween.isRunning) {
                    return;
                }
                this.characterButtons.forEach((btn) => {
                    this.game.add.tween(btn.position).to({
                        x: btn.position.x + this.buttonGap * direction
                    }, 500, Phaser.Easing.Circular.Out, true);
                });
                this.game.soundRepo.onCharSelectSlide();
                let oldFocusBtn = this.characterButtons[this.buttonFocusIndex];
                let newFocusBtn = this.characterButtons[this.buttonFocusIndex - direction];
                let newIsLocked = this.characterLocked[this.buttonFocusIndex - direction];
                this.hoverArrow.visible = !newIsLocked;
                oldFocusBtn.button.tint = this.characterLocked[this.buttonFocusIndex] ? 0x000000 : 0x999999;
                newFocusBtn.button.tint = newIsLocked ? 0x000000 : 0xFFFFFF;;
                this.game.add.tween(oldFocusBtn.scale).to({
                    x: 0.75,
                    y: 0.75
                }, 500, Phaser.Easing.Circular.Out, true);
                this.game.add.tween(oldFocusBtn.position).to({
                    y: '-' + this.focusYOffset.toString()
                }, 500, Phaser.Easing.Circular.Out, true);
                this.game.add.tween(newFocusBtn.scale).to({
                    x: 1.0,
                    y: 1.0
                }, 500, Phaser.Easing.Circular.Out, true);
                this.focusTween = this.game.add.tween(newFocusBtn.position).to({
                    y: '+' + this.focusYOffset.toString()
                }, 505, Phaser.Easing.Circular.Out, true);
                this.hoverArrow.alpha = 0.5;
                this.hoverArrowTween.stop(false);
                this.game.add.tween(this.hoverArrow).to({
                    alpha: 1.0
                }, 400, Phaser.Easing.Linear.None, true);
                this.game.add.tween(this.hoverArrow.position).to({
                    y: newFocusBtn.position.y - newFocusBtn.button.height * 1 - 150
                }, 500, Phaser.Easing.Cubic.Out, true).onComplete.addOnce(() => {
                    this.startHoverArrowTween();
                });
                newFocusBtn.parent.addChild(newFocusBtn);
                this.buttonFocusIndex -= direction;
                if (this.buttonFocusIndex == 0) {
                    this.leftArrow.visible = false;
                } else if (this.buttonFocusIndex == this.characterButtons.length - 1) {
                    this.rightArrow.visible = false;
                } else {
                    this.leftArrow.visible = true;
                    this.rightArrow.visible = true;
                }
            }
            tryToBuy(characterIndex) {
                let playerScore = this.game.core.player.playerScore;
                let game = this.game;
                if (playerScore.coins >= this.characterPrices[characterIndex]) {
                    playerScore.spendCoins(this.characterPrices[characterIndex]);
                    this.characterLocked[characterIndex] = false;
                    this.updateCharacterPriceAndLocks();
                    let char = this.characterButtons[characterIndex];
                    char.button.inputEnabled = false;
                    let img = new Phaser.Image(this.game, 0, 0, char.button.key.toString(), char.button.frameName + '_white');
                    img.anchor.set(0.5, 1.0);
                    this.game.soundRepo.onBuyCharacter(Gumball.PlayerCostume.translateCostumeName(char.button.frameName));
                    let priceTag = char.getByName('pricetag');
                    priceTag.visible = true;
                    this.game.add.tween(priceTag).to({
                        alpha: 0.0
                    }, 300, Phaser.Easing.Exponential.In, true);
                    this.game.add.tween(priceTag.scale).to({
                        x: 1.5,
                        y: 1.5
                    }, 300, Phaser.Easing.Quadratic.In, true);
                    this.game.add.tween(img).to({
                        alpha: 0.0
                    }, 500, Phaser.Easing.Exponential.In, true).onComplete.addOnce(() => {
                        char.button.removeChild(img);
                        priceTag.scale.set(1.0, 1.0);
                        priceTag.alpha = 1.0;
                        priceTag.visible = false;
                        char.button.inputEnabled = true;
                        if (this.characterLocked.indexOf(true) == -1)
                            this.game.achiev.onAllUnlocked();
                    });
                    char.button.addChild(img);
                    this.saveCharacterLocks();
                } else {
                    if (!this.notEnoughMoneyPrompt) {
                        this.notEnoughMoneyPrompt = new Gumball.Prompt(this.game, Gumball.SpriteLibrary.menus.box_small);
                        this.notEnoughMoneyPrompt.y = this.game.height * 0.30;
                        this.notEnoughMoneyPrompt.addText(game.localis.GetString("low_coins"), 100, this.notEnoughMoneyPrompt.height * 0.18);
                        this.notEnoughMoneyPrompt.kill();
                        this.charSelectGroup.add(this.notEnoughMoneyPrompt);
                    }
                    if (this.notEnoughMoneyPrompt.alive)
                        return;
                    this.game.soundRepo.onCantBuy();
                    this.notEnoughMoneyPrompt.show();
                    this.game.time.events.add(1500, () => {
                        this.notEnoughMoneyPrompt.hide();
                    });
                }
            }
            update() {
                this.bgClouds.move(1, 0);
                this.frontClouds.move(1, 0);
            }
        }
        Gumball.StateCharSelect = StateCharSelect;
    })(Gumball = Funday.Gumball || (Funday.Gumball = {}));
})(Funday || (Funday = {}));
var Funday;
(function(Funday) {
    var Gumball;
    (function(Gumball) {
        class StateGame extends Phaser.State {
            constructor() {
                super(...arguments);
                this.coreInitialized = false;
            }
            create() {
                let game = this.game;
                this.game.services.analytics.trackLocation(Funday.Service.GameLocations.PLAY);
                game.core.setup();
            }
            update() {
                this.game.core.update();
            }
            render() {
                if (!this.game.core.isPaused())
                    dragonBones.PhaserFactory.factory.dragonBones.advanceTime(this.game.time.physicsElapsed);
            }
        }
        Gumball.StateGame = StateGame;
    })(Gumball = Funday.Gumball || (Funday.Gumball = {}));
})(Funday || (Funday = {}));
var Funday;
(function(Funday) {
    var Gumball;
    (function(Gumball) {
        class StateLoad extends Phaser.State {
            preload() {
                let cartoonNetworkGame = this.game;
                cartoonNetworkGame.loadGfxForCurrentResolution();
                this.game = cartoonNetworkGame;
                this.load.pack("Audio", "assets/data/assets.json");
                this.load.pack("Bitmapfonts", "assets/data/assets.json");
                let maxLevel = 18;
                for (let i = 0; i <= maxLevel; i++) {
                    this.game.load.json('pattern' + i, 'assets/data/levels/pattern' + i + '.json');
                }
                this.game.load.json('tutpattern', 'assets/data/levels/tutpattern.json');
                this.dragonbonesLoader = new Gumball.DragonbonesLoader(this.game, 'assets/dragonbones/');
                this.dragonbonesLoader.setQuality(this.game.services.resolution.getQuality());
                this.dragonbonesLoader.loadDBAnimation('GumballNew');
                this.dragonbonesLoader.loadDBAnimation('Darwin');
                this.dragonbonesLoader.loadDBAnimation('anais');
                this.dragonbonesLoader.loadDBAnimation('Carrie');
                this.dragonbonesLoader.loadDBAnimation('richard');
                let lang = this.game.localis.GetLanguage();
                this.load.image("logo", "assets/images/logos/logo_" + lang + ".png");
                let bg = this.game.createImage(this.game.width * 0.5, this.game.height, Gumball.SpriteLibrary.loadbg.load_background);
                bg.anchor.set(0.5, 1.0);
                let bgTop = this.game.createImage(this.game.width * 0.5, bg.top, Gumball.SpriteLibrary.load.load_background02);
                bgTop.anchor.set(0.5, 1.0);
                bgTop.scale.set(1, 1.05);
                let loadScreenNew = new Funday.UI.CartoonNetworkLoadScreen(this, 0xD9F0FF);
                this.game.stage.backgroundColor = 0xFFFFFF;
            }
            create() {
                let game = this.game;
                let animationFactory = game.services.animation;
                let animFadeToBlack = animationFactory.fadeToBlack(900);
                this.dragonbonesLoader.createDBAnimations();
                animFadeToBlack.onComplete.add(function() {
                    game.startSplash();
                    game.onLoadComplete();
                });
                animFadeToBlack.play();
            }
        }
        Gumball.StateLoad = StateLoad;
    })(Gumball = Funday.Gumball || (Funday.Gumball = {}));
})(Funday || (Funday = {}));
var Funday;
(function(Funday) {
    var Gumball;
    (function(Gumball) {
        class StateSplash extends Phaser.State {
            create() {
                let game = this.game;
                game.services.analytics.trackLocation(Funday.Service.GameLocations.TITLE);
                this.splashGroup = this.game.add.group();
                let bg = game.createImage(game.width * 0.5, game.height, Gumball.SpriteLibrary.splash_screen.splash_screen_background);
                bg.anchor.set(0.5, 1.0);
                bg.scale.set(1.01, 1.01);
                let bgTop = game.createImage(game.width * 0.5, bg.top, Gumball.SpriteLibrary.splash_screen_top.splash_screen_background02);
                bgTop.anchor.set(0.5, 1.0);
                bgTop.scale.set(1.1, 1.1);
                let logo = game.add.image(game.width * 0.5, game.height * 0.1, "logo");
                logo.anchor.set(0.5, 0.0);
                logo.scale.set(game.applyResolutionRatio(1));
                let highscore = game.services.persistence.load('highscore');
                highscore = highscore == undefined ? "0" : highscore;
                let highscoreText = new Phaser.Text(game, game.width * 0.5, game.height * 0.825, game.localis.GetString("high_score").replace("<num>", highscore), {
                    font: game.applyResolutionRatio(72) + "px FredBurger Black",
                    fill: "#fff",
                    stroke: "#000",
                    strokeThickness: game.applyResolutionRatio(10)
                });
                highscoreText.anchor.set(0.5, 0.5);
                let btn = game.createButton(game.width / 2 - 10, game.world.centerY, Funday.Gumball.SpriteLibrary.splash_screen.play_button);
                btn.y = game.height * 0.925;
                this.game.world.add(this.splashGroup);
                this.splashGroup.add(bg);
                this.splashGroup.add(highscoreText);
                this.splashGroup.add(btn);
                btn.onUp.add(() => {
                    this.splashGroup.kill();
                    game.startCharSelect();
                });
            }
        }
        Gumball.StateSplash = StateSplash;
    })(Gumball = Funday.Gumball || (Funday.Gumball = {}));
})(Funday || (Funday = {}));
var Funday;
(function(Funday) {
    var Gumball;
    (function(Gumball) {
        class TutorialController {
            constructor(game, ui, player) {
                this.game = game;
                this.ui = ui;
                this.player = player;
                const promptText = this.game.device.desktop ? "tutorial_left_desktop" : "tutorial_left";
                this.tutorialPrompt = new Gumball.TutorialPrompt(game, new Funday.SpriteId('', ''));
                this.tutorialPrompt.addText(game.localis.GetString(promptText), 100, this.tutorialPrompt.textPrompt.height / 5);
                this.tutorialPrompt.textPrompt.text.tint = 0x000000;
                this.tutorialPrompt.kill();
                let tutCompleted = game.services.persistence.load(Gumball.PersistenceKeys.TUTORIAL);
                if (tutCompleted == undefined) {
                    this.active = true;
                } else {
                    this.active = !(Boolean(tutCompleted));
                }
                this.game.debugMenu.addButton('Play tutorial', () => {
                    this.active = true;
                    this.game.debugMenu.visible = false;
                });
            }
            isTutorialActive() {
                return this.active;
            }
            startTutorial() {
                this.tutorialPrompt.x = this.game.width / 2;
                this.tutorialPrompt.y = this.game.height / 2;
                this.tutorialPrompt.moveTutHand(-this.game.width / 4, this.game.height / 3);
                this.tutorialPrompt.show();
                this.tutorialPrompt.rightArrow.visible = false;
                this.tutorialPrompt.leftArrow.visible = true;
                this.tutorialPrompt.blackOverlay.x = this.game.width / 2;
                if (!this.game.device.desktop) {
                    this.tutorialPrompt.tutHand.visible = true;
                } else {
                    this.tutorialPrompt.tutKeyboard.visible = true;
                }
                this.tutorialPrompt.fixedToCamera = true;
                this.oldPlayerParent = this.player.parent;
                this.game.world.add(this.tutorialPrompt);
                this.game.world.add(this.player);
            }
            tutorialOver() {
                this.active = false;
                this.game.services.persistence.save(Gumball.PersistenceKeys.TUTORIAL, "true");
            }
            playerDead() {
                this.tutorialPrompt.hide();
            }
            playerPosChanged(newPos) {
                if (newPos.x == 1) {
                    this.tutorialPrompt.hide();
                    this.oldPlayerParent.add(this.player);
                }
                if (newPos.x == 4 && newPos.y == 0) {
                    const promptText = this.game.device.desktop ? "tutorial_right_desktop" : "tutorial_right";
                    this.tutorialPrompt.changeTextCaption(this.game.localis.GetString(promptText));
                    this.tutorialPrompt.moveTutHand(this.game.width / 4, this.game.height / 3);
                    this.tutorialPrompt.rightArrow.visible = true;
                    this.tutorialPrompt.leftArrow.visible = false;
                    this.tutorialPrompt.show();
                    this.tutorialPrompt.blackOverlay.x = -this.game.width / 2;
                    this.game.world.add(this.player);
                }
                if (newPos.y == 1 && newPos.x == 4) {
                    this.tutorialPrompt.hide();
                    this.oldPlayerParent.add(this.player);
                }
                if (newPos.x == 4 && newPos.y == 4) {
                    const promptText = this.game.device.desktop ? "tutorial_block_desktop" : "tutorial_block";
                    this.tutorialPrompt.changeTextCaption(this.game.localis.GetString(promptText));
                    this.tutorialPrompt.leftArrow.visible = false;
                    this.tutorialPrompt.rightArrow.visible = false;
                    this.tutorialPrompt.moveTutHand(this.game.width / 4, this.game.height / 3);
                    this.tutorialPrompt.show();
                    this.game.world.add(this.player);
                }
                if (newPos.x == 4 && newPos.y == 5 || newPos.x == 5 && newPos.y == 4) {
                    this.tutorialPrompt.hide();
                    this.oldPlayerParent.add(this.player);
                }
                if (newPos.x == 4 && newPos.y == 8) {
                    this.tutorialPrompt.changeTextCaption(this.game.localis.GetString("tutorial_manholes"));
                    this.tutorialPrompt.leftArrow.visible = true;
                    this.tutorialPrompt.moveTutHand(-this.game.width / 4, this.game.height / 3);
                    this.tutorialPrompt.blackOverlay.x = this.game.width / 2;
                    this.tutorialPrompt.show();
                    this.game.world.add(this.player);
                }
                if (newPos.x == 5 && newPos.y == 8 || newPos.x == 4 && newPos.y == 9) {
                    this.tutorialPrompt.hide();
                    this.oldPlayerParent.add(this.player);
                }
                if (newPos.x == 7 && newPos.y == 8) {
                    this.player.playerMovement.disable(false);
                    this.tutorialPrompt.textPrompt.text.fontSize = this.game.applyResolutionRatio(86 * 0.72);
                    this.tutorialPrompt.changeTextCaption(this.game.localis.GetString("tutorial_move"));
                    this.tutorialPrompt.tutHand.visible = false;
                    if (this.game.device.desktop) {
                        this.tutorialPrompt.tutKeyboard.visible = false;
                    }
                    this.tutorialPrompt.leftArrow.visible = true;
                    this.tutorialPrompt.rightArrow.visible = true;
                    this.tutorialPrompt.show();
                    this.tutorialPrompt.blackOverlay.visible = false;
                    this.game.time.events.add(1000, this.player.playerMovement.enable, this.player.playerMovement);
                    this.hideEvent = this.game.time.events.add(3000, this.tutorialPrompt.hide, this.tutorialPrompt);
                }
                if (newPos.x == 8 && newPos.y == 8 || newPos.x == 7 && newPos.y == 9) {
                    if (this.tutorialPrompt.alive) {
                        this.tutorialPrompt.hide();
                        this.game.time.events.remove(this.hideEvent);
                    }
                }
                if (newPos.x == 11 && newPos.y == 8 || newPos.x == 11 && newPos.y == 12) {
                    this.tutorialPrompt.textPrompt.text.fontSize = this.game.applyResolutionRatio(100 * 0.72);
                    this.tutorialPrompt.changeTextCaption(this.game.localis.GetString("tutorial_fall"));
                    this.tutorialPrompt.show();
                    this.tutorialPrompt.leftArrow.visible = false;
                    this.tutorialPrompt.rightArrow.visible = false;
                    this.tutorialPrompt.blackOverlay.visible = false;
                    this.tutorialPrompt.tutHand.visible = false;
                    if (this.game.device.desktop) {
                        this.tutorialPrompt.tutKeyboard.visible = false;
                    }
                    let modifier = 200;
                    let playerPos = this.player.gridPosition;
                    for (let i = 1; i <= 5; i++) {
                        let pos = new Gumball.Vec3(playerPos.x - i, playerPos.y, playerPos.z);
                        let block = this.game.grid.getBlockAt(pos);
                        if (block)
                            block.startFallTimer(new Gumball.Vec3(playerPos.x - 5, playerPos.y, playerPos.z), modifier, 0);
                    }
                    let playerBlock = this.game.grid.getBlockAt(this.player.gridPosition);
                    playerBlock.startFallTimer(this.player.gridPosition, 0, 3000);
                    this.tutorialOver();
                    this.game.time.events.add(4000, this.tutorialPrompt.hide, this.tutorialPrompt);
                }
            }
        }
        Gumball.TutorialController = TutorialController;
    })(Gumball = Funday.Gumball || (Funday.Gumball = {}));
})(Funday || (Funday = {}));
var Funday;
(function(Funday) {
    var Gumball;
    (function(Gumball) {
        class TutorialPatternChooser {
            constructor(game) {
                this.game = game;
                let pat1 = new Gumball.LevelPattern();
                pat1.loadPattern(this.game.cache.getJSON('tutpattern'));
                pat1.addObject(Gumball.GameObjs.breakable, new Gumball.Vec3(4, 5, 3));
                pat1.addObject(Gumball.GameObjs.guaranteedManhole, new Gumball.Vec3(4, 9, 2));
                pat1.addObject(Gumball.GameObjs.spring, new Gumball.Vec3(13, 12, 3));
                this.patterns = [];
                this.patterns.push(pat1);
            }
            getNextPattern() {
                return this.patterns[0];
            }
        }
        Gumball.TutorialPatternChooser = TutorialPatternChooser;
    })(Gumball = Funday.Gumball || (Funday.Gumball = {}));
})(Funday || (Funday = {}));
var Funday;
(function(Funday) {
    var Gumball;
    (function(Gumball) {
        class Prompt extends Phaser.Image {
            constructor(game, bgSpriteId) {
                super(game, game.width / 2, game.height / 2, bgSpriteId.key, bgSpriteId.frame);
                this.onTransitionInStart = new Phaser.Signal();
                this.onTransitionInComplete = new Phaser.Signal();
                this.onTransitionOutStart = new Phaser.Signal();
                this.onTransitionOutComplete = new Phaser.Signal();
                this.anchor.set(0.5, 0.5);
            }
            addText(caption, size = 100, offsetY = 0) {
                let text = new Phaser.Text(this.game, 0, -this.height * 0.25, caption, {
                    font: this.game.applyResolutionRatio(size * 0.68) + "px FredBurger Black",
                    fill: "#000",
                    align: "center",
                    wordWrap: true,
                    wordWrapWidth: this.game.applyResolutionRatio(720)
                });
                text.anchor.set(0.5, 0.45);
                text.position.y += offsetY;
                this.addChild(text);
                this.text = text;
            }
            changeTextCaption(caption) {
                this.text.setText(caption);
            }
            show() {
                this.revive();
                this.alpha = 0.0;
                this.scale.set(0.75, 0.75);
                this.onTransitionInStarted();
                let scaleTween = this.game.add.tween(this.scale).to({
                    x: 1.0,
                    y: 1.0
                }, 250, Phaser.Easing.Back.Out, true);
                let alphaTween = this.game.add.tween(this).to({
                    alpha: 1.0
                }, 250, Phaser.Easing.Linear.None, true);
                scaleTween.onComplete.addOnce(this.onTransitionInCompleted, this);
            }
            hide() {
                this.onTransitionOutStarted();
                let scaleTween = this.game.add.tween(this.scale).to({
                    x: 0.75,
                    y: 0.75
                }, 250, Phaser.Easing.Exponential.Out, true);
                let alphaTween = this.game.add.tween(this).to({
                    alpha: 0
                }, 250, Phaser.Easing.Exponential.Out, true);
                scaleTween.onComplete.addOnce(this.onTransitionOutCompleted, this);
            }
            onTransitionInStarted() {
                this.onTransitionInStart.dispatch();
            }
            onTransitionInCompleted() {
                this.onTransitionInComplete.dispatch();
            }
            onTransitionOutStarted() {
                this.onTransitionOutStart.dispatch();
            }
            onTransitionOutCompleted() {
                this.kill();
                this.onTransitionOutComplete.dispatch();
            }
        }
        Gumball.Prompt = Prompt;
    })(Gumball = Funday.Gumball || (Funday.Gumball = {}));
})(Funday || (Funday = {}));
var Funday;
(function(Funday) {
    var Gumball;
    (function(Gumball) {
        class TutorialPrompt extends Gumball.Prompt {
            constructor(game, bgSpriteId) {
                super(game, bgSpriteId);
                this.blackOverlay = new Gumball.BlackOverlay(game);
                this.blackOverlay.position.x -= this.game.width / 2;
                this.blackOverlay.position.y -= this.game.height / 2;
                this.addChild(this.blackOverlay);
                this.textPrompt = new Gumball.Prompt(game, Gumball.SpriteLibrary.menus.box_small);
                this.textPrompt.x = 0;
                this.textPrompt.y = -this.game.height / 4;
                this.addChild(this.textPrompt);
                this.leftArrow = game.add.image(0, 0, Gumball.SpriteLibrary.menus.arrow_tutorial.key, Gumball.SpriteLibrary.menus.arrow_tutorial.frame);
                this.leftArrow.anchor.set(0.5);
                this.addChild(this.leftArrow);
                this.rightArrow = game.add.image(0, 0, Gumball.SpriteLibrary.menus.arrow_tutorial.key, Gumball.SpriteLibrary.menus.arrow_tutorial.frame);
                this.rightArrow.anchor.set(0.5);
                this.addChild(this.rightArrow);
                this.leftArrow.position.set(this.game.applyResolutionRatio(-125 * 2), this.game.applyResolutionRatio(165));
                this.rightArrow.position.set(this.game.applyResolutionRatio(125 * 2), this.game.applyResolutionRatio(165));
                this.tapCircle = game.add.image(0, 0, Gumball.SpriteLibrary.menus.circle_tutorial.key, Gumball.SpriteLibrary.menus.circle_tutorial.frame);
                this.tapCircle.anchor.set(0.5);
                this.addChild(this.tapCircle);
                this.tutHand = game.add.image(0, 0, Gumball.SpriteLibrary.menus.tutorial_hand.key, Gumball.SpriteLibrary.menus.tutorial_hand.frame);
                this.tutHand.anchor.set(0.5);
                this.addChild(this.tutHand);
                if (this.game.device.desktop) {
                    this.tutKeyboard = game.add.image(0, 0, Gumball.SpriteLibrary.menus.keyboard_left.key, Gumball.SpriteLibrary.menus.keyboard_left.frame);
                    this.tutKeyboard.anchor.set(0.5);
                    this.addChild(this.tutKeyboard);
                    this.tutHand.visible = false;
                }
            }
            addText(caption, size = 100, offsetY = 0) {
                this.textPrompt.addText(caption, size, offsetY);
            }
            changeTextCaption(caption) {
                this.textPrompt.changeTextCaption(caption);
            }
            moveTutHand(x, y) {
                this.tutHand.x = x;
                this.tutHand.y = y;
                this.tutHand.scale.set(1.0, 1.0);
                this.tapCircle.x = x + 15;
                this.tapCircle.y = y - this.tutHand.height / 2.35;
                this.tapCircle.alpha = 0.0;
                if (this.game.device.desktop) {
                    this.tutKeyboard.x = x;
                    this.tutKeyboard.y = y;
                    this.tapCircle.y = y + this.tutKeyboard.height * 0.25;
                    if (x > 0) {
                        this.tutKeyboard.frameName = Gumball.SpriteLibrary.menus.keyboard_right.frame;
                        this.tapCircle.x = x + this.tutKeyboard.width * 0.3333;
                    } else {
                        this.tutKeyboard.frameName = Gumball.SpriteLibrary.menus.keyboard_left.frame;
                        this.tapCircle.x = x - this.tutKeyboard.width * 0.3333;
                    }
                }
                this.handTween = this.game.add.tween(this.tutHand.scale).to({
                    x: 0.8,
                    y: 0.8
                }, 500, Phaser.Easing.Quadratic.InOut, true, 250, Number.MAX_VALUE, true);
                this.handTween.onRepeat.add((scale) => {
                    if (scale.x == 0.8) {
                        this.tapCircle.scale.set(1.0, 1.0);
                        this.tapCircle.alpha = 1.0;
                        const scaleTo = this.game.device.desktop ? 2 : 1.25;
                        this.game.add.tween(this.tapCircle.scale).to({
                            x: scaleTo,
                            y: scaleTo
                        }, 500, Phaser.Easing.Quadratic.Out, true, 0, 0, false);
                        this.game.add.tween(this.tapCircle).to({
                            alpha: 0.0
                        }, 500, Phaser.Easing.Linear.None, true, 0, 0, false);
                    }
                });
            }
            show() {
                if (this.hideTween)
                    this.hideTween.stop(false);
                this.revive();
                this.tutHand.alpha = 0.0;
                this.leftArrow.alpha = 0.0;
                this.rightArrow.alpha = 0.0;
                this.leftArrow.scale.set(0.0, 0.0);
                this.rightArrow.scale.set(0.0, 0.0);
                this.onTransitionInStarted();
                this.blackOverlay.show();
                this.textPrompt.show();
                let handAlphaTween = this.game.add.tween(this.tutHand).to({
                    alpha: 1.0
                }, 300, Phaser.Easing.Linear.None, true);
                let arrowScaleTween = this.game.add.tween(this.leftArrow.scale).to({
                    x: 1.0,
                    y: 1.0
                }, 500, Phaser.Easing.Back.Out, true);
                let arrowAlphaTween = this.game.add.tween(this.leftArrow).to({
                    alpha: 1.0
                }, 300, Phaser.Easing.Linear.None, true);
                let otherArrowScaleTween = this.game.add.tween(this.rightArrow.scale).to({
                    x: -1.0,
                    y: 1.0
                }, 500, Phaser.Easing.Back.Out, true);
                let otherArrowAlphaTween = this.game.add.tween(this.rightArrow).to({
                    alpha: 1.0
                }, 300, Phaser.Easing.Linear.None, true);
                this.textPrompt.onTransitionInComplete.addOnce(this.onTransitionInCompleted, this);
            }
            hide() {
                if (this.handTween)
                    this.handTween.stop();
                this.onTransitionOutStarted();
                this.blackOverlay.hide();
                this.textPrompt.hide();
                let handAlphaTween = this.game.add.tween(this.tutHand).to({
                    alpha: 0
                }, 500, Phaser.Easing.Exponential.Out, true);
                let arrowScaleTween = this.game.add.tween(this.leftArrow.scale).to({
                    x: 0.6,
                    y: 0.6
                }, 500, Phaser.Easing.Exponential.Out, true);
                let arowwAlphaTween = this.game.add.tween(this.leftArrow).to({
                    alpha: 0
                }, 500, Phaser.Easing.Exponential.Out, true);
                let otherArrowScaleTween = this.game.add.tween(this.rightArrow.scale).to({
                    x: -0.6,
                    y: 0.6
                }, 500, Phaser.Easing.Exponential.Out, true);
                let otherArrowAlphaTween = this.game.add.tween(this.rightArrow).to({
                    alpha: 0
                }, 500, Phaser.Easing.Exponential.Out, true);
                this.textPrompt.onTransitionOutComplete.addOnce(this.onTransitionOutCompleted, this);
            }
            update() {
                super.update();
            }
        }
        Gumball.TutorialPrompt = TutorialPrompt;
    })(Gumball = Funday.Gumball || (Funday.Gumball = {}));
})(Funday || (Funday = {}));
var Funday;
(function(Funday) {
    var Gumball;
    (function(Gumball) {
        class BlackOverlay extends Gumball.Prompt {
            constructor(game) {
                super(game, new Funday.SpriteId(null, null));
                let overlay = this.game.add.graphics(0, 0);
                overlay.beginFill(0x000000, 0.4);
                overlay.drawRect(-this.game.width / 2, -this.game.height / 2, this.game.width, this.game.height);
                overlay.inputEnabled = true;
                this.anchor.set(0.5);
                this.addChild(overlay);
            }
            show() {
                if (this.fadeOutTween) {
                    this.fadeOutTween.stop(true);
                    this.fadeOutTween = null;
                }
                this.revive();
                this.alpha = 0.0;
                this.onTransitionInStarted();
                this.fadeInTween = this.game.add.tween(this).to({
                    alpha: 1.0
                }, 300, Phaser.Easing.Linear.None, true);
                this.fadeInTween.onComplete.addOnce(this.onTransitionInCompleted, this);
            }
            hide() {
                if (this.fadeInTween) {
                    this.fadeInTween.stop(true);
                    this.fadeInTween = null;
                }
                this.onTransitionOutStarted();
                this.fadeOutTween = this.game.add.tween(this).to({
                    alpha: 0
                }, 450, Phaser.Easing.Exponential.Out, true);
                this.fadeOutTween.onComplete.addOnce(this.onTransitionOutCompleted, this);
            }
            onTransitionOutCompleted() {
                this.kill();
                this.onTransitionOutComplete.dispatch();
            }
        }
        Gumball.BlackOverlay = BlackOverlay;
    })(Gumball = Funday.Gumball || (Funday.Gumball = {}));
})(Funday || (Funday = {}));
var Funday;
(function(Funday) {
    var Gumball;
    (function(Gumball) {
        class DistanceAndScoreText {
            constructor(game, playerScore, uiGroup) {
                this.currentHighscore = 0;
                this.game = game;
                let textPadding = game.applyResolutionRatio(25);
                playerScore.onCoinPickup.add(this.updateCoinText, this);
                playerScore.onScoreChange.add(this.updateDistanceText, this);
                playerScore.onHighscoreChange.add(this.updateHighscore, this);
                let safeTop = this.game.services.resolution.getNotchSafeTop();
                this.distanceText = new Phaser.BitmapText(game, this.game.width / 2, textPadding + safeTop, Funday.Gumball.BitmapFontLibrary.fonts.gumball_stroke_font_export.key);
                this.distanceText.text = "";
                this.distanceText.fontSize = game.applyResolutionRatio(72);
                this.distanceText.anchor.set(0.5, 0.25);
                this.coinImg = new Phaser.Image(game, this.game.width - textPadding - game.applyResolutionRatio(125), textPadding + safeTop, Gumball.SpriteLibrary.game.coin01.key, Gumball.SpriteLibrary.game.coin01.frame);
                this.coinImg.scale.set(0.8);
                this.coinImg.anchor.set(1.0, 0);
                this.coinText = new Phaser.BitmapText(game, this.coinImg.position.x - game.applyResolutionRatio(100), textPadding + safeTop, Funday.Gumball.BitmapFontLibrary.fonts.gumball_stroke_font_export.key);
                this.coinText.text = "";
                this.coinText.fontSize = game.applyResolutionRatio(72);
                this.coinText.anchor.set(1.0, 0.25);
                uiGroup.add(this.coinImg);
                uiGroup.add(this.coinText);
                uiGroup.add(this.distanceText);
                this.updateHighscore(playerScore.highscore);
                this.updateDistanceText(playerScore.score);
                this.updateCoinText(playerScore.coins);
            }
            updateDistanceText(distance) {
                this.distanceText.text = distance.toString();
                if (this.currentHighscore > 0 && distance < this.currentHighscore) {
                    this.distanceText.text += " / " + this.currentHighscore;
                }
            }
            updateCoinText(coins) {
                this.coinText.text = coins.toString();
                this.coinText.position.x = this.coinImg.position.x - this.game.applyResolutionRatio(100);
            }
            updateHighscore(highscore) {
                this.currentHighscore = highscore;
            }
        }
        Gumball.DistanceAndScoreText = DistanceAndScoreText;
    })(Gumball = Funday.Gumball || (Funday.Gumball = {}));
})(Funday || (Funday = {}));
var Funday;
(function(Funday) {
    var Gumball;
    (function(Gumball) {
        class OptionsMenu extends Gumball.Prompt {
            constructor(game, spriteId, ui) {
                super(game, spriteId);
                this.tweening = false;
                let startPos = -this.height / 2 + game.applyResolutionRatio(325);
                let btnGap = game.applyResolutionRatio(235);
                let iconPadding = game.applyResolutionRatio(50);
                let iconOffsetY = game.applyResolutionRatio(-5);
                let returnBtn = this.game.createButton(0, startPos, Gumball.SpriteLibrary.menus.pause_menu_button);
                returnBtn.addIconFromSpriteId(Gumball.SpriteLibrary.menus.back_icon).y += iconOffsetY;
                returnBtn.onUp.add(ui.optionsMenuPressed, ui);
                this.addChild(returnBtn);
                let musicBtn = this.game.createButton(0, startPos + btnGap, Gumball.SpriteLibrary.menus.pause_menu_button);
                let musicIcon = musicBtn.addIconFromSpriteId(Gumball.SpriteLibrary.menus.music_icon);
                musicIcon.x -= musicBtn.width / 2 - musicIcon.width / 2 - iconPadding;
                musicIcon.y += iconOffsetY;
                this.musicToggleIcon = musicBtn.addIconFromSpriteId(Gumball.SpriteLibrary.menus.checkmark_icon);
                this.musicToggleIcon.x += musicBtn.width / 2 - this.musicToggleIcon.width / 2 - iconPadding;
                this.musicToggleIcon.y += iconOffsetY;
                musicBtn.onUp.add(this.toggleMusic, this);
                this.addChild(musicBtn);
                let sfxBtn = this.game.createButton(0, startPos + 2 * btnGap, Gumball.SpriteLibrary.menus.pause_menu_button);
                let sfxIcon = sfxBtn.addIconFromSpriteId(Gumball.SpriteLibrary.menus.sound_icon);
                sfxIcon.x -= sfxBtn.width / 2 - sfxIcon.width / 2 - iconPadding;
                sfxIcon.y += iconOffsetY;
                this.sfxToggleIcon = sfxBtn.addIconFromSpriteId(Gumball.SpriteLibrary.menus.checkmark_icon);
                this.sfxToggleIcon.x += sfxBtn.width / 2 - this.sfxToggleIcon.width / 2 - iconPadding;
                this.sfxToggleIcon.y += iconOffsetY;
                sfxBtn.onUp.add(this.toggleSFX, this);
                this.addChild(sfxBtn);
                let resetProgressBtn = this.game.createButton(0, startPos + 3 * btnGap, Gumball.SpriteLibrary.menus.pause_menu_button);
                let text = new Phaser.Text(game, 0, 0, game.localis.GetString("reset_progress"), {
                    font: game.applyResolutionRatio(68) + "px FredBurger Black",
                    fill: "#000",
                    align: "center",
                    wordWrap: true,
                    wordWrapWidth: game.applyResolutionRatio(800)
                });
                text.lineSpacing = game.applyResolutionRatio(-5);
                text.anchor.set(0.5, 0.55);
                resetProgressBtn.button.addChild(text);
                resetProgressBtn.onUp.add(this.showAreYouSurePrompt, this);
                this.addChild(resetProgressBtn);
                this.blackOverlay = new Gumball.BlackOverlay(game);
                this.blackOverlay.position.set(0, 0);
                this.addChild(this.blackOverlay);
                this.blackOverlay.kill();
                this.areYouSurePrompt = new Gumball.YesNoPrompt(game, Gumball.SpriteLibrary.menus.box);
                this.areYouSurePrompt.position.set(0, 0);
                this.areYouSurePrompt.addText(game.localis.GetString("reset_confirm"));
                this.addChild(this.areYouSurePrompt);
                this.areYouSurePrompt.kill();
                let versionText = new Phaser.Text(game, 0, this.height * 0.5 - game.applyResolutionRatio(75), game.localis.GetString("version").replace("<num>", game.version.getVersionString()), {
                    font: game.applyResolutionRatio(32) + "px FredBurger Black",
                    fill: "#fff",
                    stroke: "#000",
                    strokeThickness: game.applyResolutionRatio(5)
                });
                versionText.anchor.set(0.5, 0.0);
                this.addChild(versionText);
            }
            toggleMusic() {
                if (this.game.soundRepo.isMusicMuted()) {
                    this.musicToggleIcon.frameName = Gumball.SpriteLibrary.menus.checkmark_icon.frame;
                    this.game.soundRepo.unMuteMusic();
                } else {
                    this.musicToggleIcon.frameName = Gumball.SpriteLibrary.menus.x_icon.frame;
                    this.game.soundRepo.muteMusic();
                }
            }
            toggleSFX() {
                if (this.game.soundRepo.isSFXMuted()) {
                    this.sfxToggleIcon.frameName = Gumball.SpriteLibrary.menus.checkmark_icon.frame;
                    this.game.soundRepo.unMuteSFX();
                } else {
                    this.sfxToggleIcon.frameName = Gumball.SpriteLibrary.menus.x_icon.frame;
                    this.game.soundRepo.muteSFX();
                }
            }
            showAreYouSurePrompt() {
                this.blackOverlay.show();
                this.areYouSurePrompt.show();
                this.areYouSurePrompt.addYesCallback(() => {
                    this.resetProgress();
                }, this);
                this.areYouSurePrompt.addNoCallback(() => {
                    this.blackOverlay.hide();
                    this.areYouSurePrompt.hide();
                }, this);
            }
            resetProgress() {
                let defaultState = this.game.getDefaultState();
                for (var key in defaultState) {
                    if (defaultState[key] instanceof Array) {
                        this.game.services.persistence.saveDto(key, defaultState[key]);
                    } else {
                        this.game.services.persistence.save(key, defaultState[key]);
                    }
                }
                location.reload();
            }
            show() {
                if (this.tweening)
                    return;
                super.show();
                this.tweening = true;
                this.game.services.analytics.trackLocation(Funday.Service.GameLocations.PAUSE);
                this.onTransitionInComplete.addOnce(() => {
                    this.tweening = false;
                });
            }
            hide() {
                if (this.tweening)
                    return;
                super.hide();
                this.tweening = true;
                if (this.game.state.getCurrentState() instanceof Gumball.StateCharSelect) {
                    this.game.services.analytics.trackLocation(Funday.Service.GameLocations.SHOP);
                }
                if (this.game.state.getCurrentState() instanceof Gumball.StateGame) {
                    this.game.services.analytics.trackLocation(Funday.Service.GameLocations.PLAY);
                }
                this.onTransitionOutComplete.addOnce(() => {
                    this.tweening = false;
                });
            }
        }
        Gumball.OptionsMenu = OptionsMenu;
    })(Gumball = Funday.Gumball || (Funday.Gumball = {}));
})(Funday || (Funday = {}));
var Funday;
(function(Funday) {
    var Gumball;
    (function(Gumball) {
        class PriceTag extends Phaser.Sprite {
            constructor(game, x, y, spriteId) {
                super(game, x, y, spriteId.key, spriteId.frame);
                let coinImg = new Phaser.Image(game, 0, 0, Gumball.SpriteLibrary.game.coin01.key, Gumball.SpriteLibrary.game.coin01.frame);
                coinImg.anchor.set(0.5, 0.5);
                coinImg.scale.set(0.8, 0.8);
                coinImg.x += this.width * 0.24;
                this.addChild(coinImg);
                this.priceText = new Phaser.BitmapText(game, 0, 0, Gumball.BitmapFontLibrary.fonts.gumball_font_export.key, '100', game.applyResolutionRatio(62));
                this.priceText.anchor.set(0.5, 0.5);
                this.priceText.y -= game.applyResolutionRatio(14);
                this.priceText.x -= this.width * 0.12;
                this.addChild(this.priceText);
                this.anchor.set(0.5);
            }
        }
        Gumball.PriceTag = PriceTag;
    })(Gumball = Funday.Gumball || (Funday.Gumball = {}));
})(Funday || (Funday = {}));
var Funday;
(function(Funday) {
    var Gumball;
    (function(Gumball) {
        class UIController extends Phaser.Group {
            constructor(game, playerScore) {
                super(game);
                this.activePrompts = [];
                this.distanceAndScoreText = new Gumball.DistanceAndScoreText(game, playerScore, this);
                this.gameOverPrompt = new Gumball.Prompt(game, Gumball.SpriteLibrary.menus.box);
                this.gameOverPrompt.addText(game.localis.GetString("game_over"), 120, this.gameOverPrompt.height / 6);
                this.gameOverPrompt.kill();
                this.blackOverlay = new Gumball.BlackOverlay(game);
                this.blackOverlay.kill();
                this.optionsMenu = new Gumball.OptionsMenu(game, Gumball.SpriteLibrary.menus.pause_menu_box, this);
                this.optionsMenu.addText(game.localis.GetString("options"), 120, -this.optionsMenu.height / 4 + game.applyResolutionRatio(80));
                this.optionsMenu.kill();
                let safeTop = this.game.services.resolution.getNotchSafeTop();
                let pauseBtn = game.createButton(game.width - game.applyResolutionRatio(15) - game.applyResolutionRatio(50), game.applyResolutionRatio(65) + safeTop, Gumball.SpriteLibrary.menus.pause_button);
                pauseBtn.button.anchor.set(0.5, 0.5);
                pauseBtn.scale.set(0.8, 0.8);
                pauseBtn.onUp.add(this.optionsMenuPressed, this);
                this.add(this.blackOverlay);
                this.add(pauseBtn);
                this.add(this.gameOverPrompt);
                this.add(this.optionsMenu);
                this.add(this.game.debugMenu);
            }
            showPrompt(prompt, callback, callbackContext) {
                if (prompt.alive)
                    return;
                prompt.show();
                this.activePrompts.push(prompt);
                if (this.activePrompts.length == 1)
                    this.blackOverlay.show();
                if (callback)
                    prompt.onTransitionInComplete.addOnce(callback, callbackContext);
            }
            hidePrompt(prompt, callback, callbackContext) {
                prompt.hide();
                this.activePrompts.splice(this.activePrompts.indexOf(prompt), 1);
                if (this.activePrompts.length == 0)
                    this.blackOverlay.hide();
                if (callback)
                    prompt.onTransitionOutComplete.addOnce(callback, callbackContext);
            }
            optionsMenuPressed() {
                if (this.optionsMenu.tweening)
                    return;
                if (this.optionsMenu.alive) {
                    if (this.game.state.current == Gumball.StateKey.Game)
                        this.game.core.resume();
                    this.hidePrompt(this.optionsMenu);
                } else {
                    if (this.game.state.current == Gumball.StateKey.Game)
                        this.game.core.pause();
                    this.showPrompt(this.optionsMenu);
                }
            }
            updateGameOverPrompt(score, currentHighscore) {
                let game = this.game;
                this.gameOverPrompt.text.setText(game.localis.GetString("game_over") + "\n");
                if (score >= currentHighscore)
                    this.gameOverPrompt.text.text += game.localis.GetString("high_score_new") + "\n";
                this.gameOverPrompt.text.text += game.localis.GetString("points").replace("<num>", Math.floor(score));
            }
        }
        Gumball.UIController = UIController;
    })(Gumball = Funday.Gumball || (Funday.Gumball = {}));
})(Funday || (Funday = {}));
var Funday;
(function(Funday) {
    var Gumball;
    (function(Gumball) {
        class YesNoPrompt extends Gumball.Prompt {
            constructor(game, bgSpriteId) {
                super(game, bgSpriteId);
                this.yesButton = this.game.createButton(game.applyResolutionRatio(200), game.applyResolutionRatio(200), Gumball.SpriteLibrary.menus.ad_button);
                let yesText = new Phaser.Text(game, 0, 0, game.localis.GetString("yes"), {
                    font: game.applyResolutionRatio(86) + "px FredBurger Black",
                    fill: "#000"
                });
                yesText.anchor.set(0.5, 0.6);
                this.yesButton.button.addChild(yesText);
                this.noButton = this.game.createButton(-game.applyResolutionRatio(200), game.applyResolutionRatio(200), Gumball.SpriteLibrary.menus.ad_button);
                let noText = new Phaser.Text(game, 0, 0, game.localis.GetString("no"), {
                    font: game.applyResolutionRatio(58) + "px FredBurger Black",
                    fill: "#000"
                });
                noText.anchor.set(0.5, 0.6);
                this.noButton.button.addChild(noText);
                let btnWidth = this.yesButton.width;
                let btnHeight = this.yesButton.height;
                this.addChild(this.yesButton);
                this.addChild(this.noButton);
            }
            show() {
                super.show();
                this.activateEvents();
            }
            addYesCallback(yesCallback, yesCallbackContext) {
                this.yesButton.onUp.add(() => {
                    yesCallback.bind(yesCallbackContext)();
                    this.pauseEvents();
                });
            }
            addNoCallback(noCallback, noCallbackContext) {
                this.noButton.onUp.add(() => {
                    noCallback.bind(noCallbackContext)();
                    this.pauseEvents();
                });
            }
            activateEvents() {
                this.yesButton.onUp.active = true;
                this.noButton.onUp.active = true;
            }
            pauseEvents() {
                this.yesButton.onUp.active = false;
                this.noButton.onUp.active = false;
            }
        }
        Gumball.YesNoPrompt = YesNoPrompt;
    })(Gumball = Funday.Gumball || (Funday.Gumball = {}));
})(Funday || (Funday = {}));
//# sourceMappingURL=game.js.map