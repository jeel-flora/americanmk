var game = new Phaser.Game(504, 800, Phaser.AUTO, 'gameContainer');
var Main = {
    music: null,
    shutterOn: [true],
    selectionFlag: [0, 0],

    elsaFlag: [1, 1, 1, 1],
    elsaalpha: [1, 1, 1, 0],
    clrArr: [1],

    annaFlag: [1, 1, 1, 1],
    annaalpha: [1, 1, 1, 0],
    iarr: [0],

    cakeArr: [1, 1, 1],
};

Main.boot = function() {};
Main.boot.prototype = {
    preload: function() {
        game.stage.backgroundColor = '#b8175f';
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        game.scale.pageAlignVertically = true;
        game.scale.pageAlignHorizontally = true;
        game.stage.disableVisibilityChange = true;
        game.scale.refresh();
        game.renderer.renderSession.roundPixels = true;

        game.scale.setResizeCallback(this.gameResized, this);

        game.load.image('loading', 'assets/prebar.png');
        game.load.image('prelogo', 'assets/prebg_logo.png');
        game.load.image('barover', 'assets/barover.png');

        game.load.image('Go', 'assets/Go.png');


        game.load.onFileComplete.add(this.fileLoadFun, this);
    },
    gameResized: function(manager, bounds) {
        var xpos = window.innerWidth - (window.innerWidth / game.width);
        var scale = Math.min(window.innerWidth / game.width, window.innerHeight / game.height);
        manager.setUserScale(scale, scale, 0, 0);
        game.scale.pageAlignHorizontally = true;
    },
    fileLoadFun: function(progress, cacheKey, success, totalLoaded, totalFiles) {
        if (progress == 100) {
            game.load.onFileComplete.removeAll();
            game.state.start('preloader');
        }
    }
}
Main.preloader = function() {};

Main.preloader.prototype = {
    init: function() {
        this.progressbar;
        this.check = 10;
        this.bgbtn;
        this.progress;
        this.prelogo;
    },
    preload: function() {
        this.progress = game.add.text(game.world.centerX, 500, "LOADING: 0%", {
            font: "bold 22px Arial",
            fill: "#ffffff",
            align: "center"
        });
        this.progress.anchor.setTo(0.5)
        this.prelogo = game.add.sprite((game.width / 2) - 100, (game.height / 2) - 100, 'prelogo');

        this.prelogo.inputEnabled = true
        this.prelogo.input.useHandCursor = true;
        this.prelogo.events.onInputUp.add(this.openLink, this);

        game.load.crossOrigin = '*';
        game.load.audio('music', ['assets/music.mp3']);
        game.load.spritesheet('soundicon', 'assets/soundicon.png', 67, 73);
        game.load.image('logo', 'assets/logo.png');
        game.load.spritesheet('effects', 'assets/effects.png', 141, 134);
        game.load.spritesheet('effectssd', 'assets/efftes012.png', 367, 335);

        game.load.image('morebtn', 'assets/buttons/morebtn.png');
        game.load.image('playbtn', 'assets/buttons/playbtn.png');
        game.load.image('resetbtn', 'assets/buttons/resetbtn.png');
        game.load.image('donebtn', 'assets/buttons/donebtn.png');
        game.load.image('nextbtn', 'assets/buttons/nextbtn.png');

        game.load.image('shutterbg', 'assets/shutterbg.jpg');
        game.load.image('tbg', 'assets/title/tbg.png');
        game.load.image('text', 'assets/title/text.png');
        game.load.image('ibg', 'assets/intro/ibg.jpg');
        // game.load.image('fibg','assets/fibg.jpg');
        game.load.image('text', 'assets/intro/text.png');
        game.load.image('bgf', 'assets/selection/bgf.png');
        game.load.image('sbg', 'assets/selection/sbg.jpg');
        game.load.image('bgf', 'assets/selection/bgf.png');
        game.load.image('dbg', 'assets/edressup/dbg.png');
        game.load.image('efhand', 'assets/edressup/efhand.png');
        game.load.image('ehand2', 'assets/edressup/ehand2.png');
        game.load.image('ehand3', 'assets/edressup/ehand3.png');
        game.load.image('ehead', 'assets/edressup/ehead.png');
        game.load.image('ebody', 'assets/edressup/ebody.png');
        game.load.image('ebody2', 'assets/edressup/ebody2.png');
        game.load.image('ipanel', 'assets/edressup/ipanel.png');
        game.load.image('ehand1', 'assets/edressup/ehand1.png');

        game.load.image('ahand3', 'assets/annadressup/ahand3.png');
        game.load.image('abody', 'assets/annadressup/abody.png');
        game.load.image('abody2', 'assets/annadressup/abody2.png');
        game.load.image('final_hand', 'assets/annadressup/final_hand.png');
        game.load.image('ahand1', 'assets/annadressup/ahand1.png');
        game.load.image('ahand2', 'assets/annadressup/ahand2.png');
        game.load.image('ahead', 'assets/annadressup/ahead.png');
        game.load.spritesheet('aeye_blink', 'assets/annadressup/aeye_blink.png', 68, 19, 9);
        game.load.image('cbg', 'assets/cooking/cbg.jpg');
        game.load.image('oven', 'assets/cooking/oven.png');
        game.load.image('oven_close', 'assets/cooking/oven_close.png');
        game.load.image('oven_open', 'assets/cooking/oven_open.png');
        game.load.image('table', 'assets/cooking/table.png');
        game.load.image('ebowl', 'assets/cooking/ebowl.png');
        game.load.image('efbowl', 'assets/cooking/efbowl.png');
        game.load.image('sugar_bowl', 'assets/cooking/sugar_bowl.png');
        game.load.image('wheat_bowl', 'assets/cooking/wheat_bowl.png');
        game.load.image('bpowder_bowl', 'assets/cooking/bpowder_bowl.png');
        game.load.image('vbowl', 'assets/cooking/vbowl.png');
        game.load.image('sbottle', 'assets/cooking/sbottle.png');
        game.load.image('mbottle', 'assets/cooking/mbottle.png');
        game.load.image('mcap', 'assets/cooking/mcap.png');
        game.load.image('cplate', 'assets/cooking/cplate.png');
        game.load.image('egg', 'assets/cooking/egg.png');
        game.load.image('mcone1_1', 'assets/cooking/mcone1_0001.png');
        game.load.image('mcone1_2', 'assets/cooking/mcone1_0002.png');
        game.load.image('mbox', 'assets/cooking/mbox.png');
        game.load.image('mixi', 'assets/cooking/mixi.png');
        game.load.image('cake_ftrey', 'assets/cooking/cake_ftrey.png');
        game.load.image('cake_trey', 'assets/cooking/cake_trey.png');
        game.load.image('ocake', 'assets/cooking/ocake.png');
        game.load.image('cake1', 'assets/cooking/cake1.png');
        game.load.image('cake2', 'assets/cooking/cake2.png');
        game.load.image('cake3', 'assets/cooking/cake3.png');
        game.load.image('ocake2', 'assets/cooking/ocake2.png');
        game.load.image('cupcake1', 'assets/cooking/cupcake1.png');
        game.load.image('plate', 'assets/cooking/plate.png');
        game.load.spritesheet('bpowder_ani', 'assets/cooking/bpowder_ani.png', 148, 172, 14);
        game.load.spritesheet('milk_ani', 'assets/cooking/milk_ani.png', 223, 191, 19);
        game.load.spritesheet('salt_ani', 'assets/cooking/salt_ani.png', 220, 176, 8);
        game.load.spritesheet('sugar_ani', 'assets/cooking/sugar_ani.png', 143, 145, 17);
        game.load.spritesheet('vanilla_ani', 'assets/cooking/vanilla_ani.png', 170, 200, 17);
        game.load.spritesheet('wheat_ani', 'assets/cooking/wheat_ani.png', 207, 198, 17);
        game.load.spritesheet('egg_ani', 'assets/cooking/egg_ani.png', 170, 173, 13);
        game.load.spritesheet('mix_ani', 'assets/cooking/mix_ani.png', 251, 270, 10);
        game.load.spritesheet('cheese_ani', 'assets/cooking/cheese_ani.png', 231, 128, 6);
        game.load.spritesheet('mix_drop', 'assets/cooking/mix_drop.png', 213, 202, 14);
        game.load.spritesheet('cake_ani1', 'assets/cooking/cake_ani1.png', 99, 91, 11);
        game.load.spritesheet('cake_ani2', 'assets/cooking/cake_ani2.png', 99, 92, 11);
        game.load.spritesheet('cake_ani3', 'assets/cooking/cake_ani3.png', 99, 90, 11);
        game.load.spritesheet('cone_ani1', 'assets/cooking/cone_ani1.png', 134, 214, 12);
        game.load.spritesheet('arrow', 'assets/arrow.png', 66, 89, 13);
        game.load.spritesheet('timer', 'assets/timer.png', 160, 160, 60);

        game.load.image('bcreame', 'assets/cooking2/bcreame.png');
        game.load.image('boil', 'assets/cooking2/boil.png');
        game.load.image('bowl2', 'assets/cooking2/bowl2.png');
        game.load.image('bsugar', 'assets/cooking2/bsugar.png');
        game.load.image('fbowl2', 'assets/cooking2/fbowl2.png');
        game.load.image('sugar_bowl2', 'assets/cooking2/sugar_bowl2.png');
        game.load.image('creame_bowl2', 'assets/cooking2/creame_bowl2.png');
        game.load.image('oglass', 'assets/cooking2/oglass.png');
        game.load.image('mixi2', 'assets/cooking2/mixi2.png');
        game.load.image('cbottle1', 'assets/cooking2/cbottle1.png');
        game.load.image('cbottle2', 'assets/cooking2/cbottle2.png');
        game.load.image('cbottle3', 'assets/cooking2/cbottle3.png');
        game.load.image('cbottle4', 'assets/cooking2/cbottle4.png');
        game.load.image('cbowl', 'assets/cooking2/cbowl.png');
        game.load.image('bglass', 'assets/cooking2/bglass.png');
        game.load.image('fglass', 'assets/cooking2/fglass.png');
        game.load.image('ctop', 'assets/cooking2/ctop.png');
        game.load.image('icon_panel', 'assets/cooking2/icon_panel.png');
        game.load.image('forwardbtn', 'assets/forwardbtn.png');
        game.load.image('picbtn', 'assets/picbtn.png');
        game.load.spritesheet('cpowder_ani', 'assets/cooking2/cpowder_ani.png', 158, 362, 17);
        game.load.spritesheet('glass_ani1', 'assets/cooking2/glass_ani1.png', 211, 248, 19);
        game.load.spritesheet('sugar_ani2', 'assets/cooking2/sugar_ani2.png', 133, 363, 20);
        game.load.spritesheet('mix_ani2', 'assets/cooking2/mix_ani2.png', 306, 344, 28);
        game.load.spritesheet('creame_drop1', 'assets/cooking2/creame_drop1.png', 376, 470, 14);
        game.load.spritesheet('creame_drop2', 'assets/cooking2/creame_drop2.png', 414, 481, 14);
        game.load.spritesheet('creame_drop3', 'assets/cooking2/creame_drop3.png', 381, 458, 14);
        game.load.spritesheet('creame_drop4', 'assets/cooking2/creame_drop4.png', 361, 428, 13);
        game.load.spritesheet('blue_bowlani', 'assets/cooking2/blue_bowlani.png', 141, 89, 29);
        game.load.spritesheet('green_bowlani', 'assets/cooking2/green_bowlani.png', 141, 92, 29);
        game.load.spritesheet('purple_bowlani', 'assets/cooking2/purple_bowlani.png', 142, 90, 29);
        game.load.spritesheet('red_bowlani', 'assets/cooking2/red_bowlani.png', 128, 81, 27);
        game.load.spritesheet('clr_ani1', 'assets/cooking2/clr_ani1.png', 142, 146, 13);
        game.load.spritesheet('clr_ani2', 'assets/cooking2/clr_ani2.png', 165, 138, 13);
        game.load.spritesheet('clr_ani3', 'assets/cooking2/clr_ani3.png', 181, 134, 13);
        game.load.spritesheet('clr_ani4', 'assets/cooking2/clr_ani4.png', 184, 104, 13);
        game.load.spritesheet('clr_fill_ani1', 'assets/cooking2/clr_fill_ani1.png', 123, 214, 16);
        game.load.spritesheet('clr_fill_ani2', 'assets/cooking2/clr_fill_ani2.png', 123, 214, 16);
        game.load.spritesheet('clr_fill_ani3', 'assets/cooking2/clr_fill_ani3.png', 125, 215, 16);
        game.load.spritesheet('clr_fill_ani4', 'assets/cooking2/clr_fill_ani4.png', 133, 228, 16);
        game.load.spritesheet('candy_drop', 'assets/cooking2/candy_drop.png', 127, 324, 6);
        game.load.spritesheet('cbowl_ani', 'assets/cooking2/cbowl_ani.png', 345, 307, 11);
        game.load.spritesheet('cone_clr2_ani1', 'assets/cooking2/cone_clr2_ani1.png', 453, 418, 10);
        game.load.spritesheet('cone_clr2_ani2', 'assets/cooking2/cone_clr2_ani2.png', 363, 493, 10);
        game.load.spritesheet('cone_clr4_ani1', 'assets/cooking2/cone_clr4_ani1.png', 453, 418, 10);
        game.load.spritesheet('cone_clr4_ani2', 'assets/cooking2/cone_clr4_ani2.png', 363, 493, 10);
        game.load.spritesheet('cone_clr1_ani1', 'assets/cooking2/cone_clr1_ani1.png', 449, 414, 10);
        game.load.spritesheet('cone_clr1_ani2', 'assets/cooking2/cone_clr1_ani2.png', 363, 492, 10);
        game.load.spritesheet('cone_clr3_ani1', 'assets/cooking2/cone_clr3_ani1.png', 453, 418, 10);
        game.load.spritesheet('cone_clr3_ani2', 'assets/cooking2/cone_clr3_ani2.png', 363, 492, 10);


        for (i = 1; i <= 12; i++) {
            if (i <= 9) {
                game.load.image('ebag' + i, 'assets/edressup/ebag000' + i + '.png');
                game.load.image('edress' + i, 'assets/edressup/edress000' + i + '.png');
                game.load.image('efdress' + i, 'assets/edressup/efdress000' + i + '.png');
                game.load.image('eshoe' + i, 'assets/edressup/eshoe000' + i + '.png');
            }
            if (i > 9 && i <= 12) {
                game.load.image('ebag' + i, 'assets/edressup/ebag00' + i + '.png');
                game.load.image('edress' + i, 'assets/edressup/edress00' + i + '.png');
                game.load.image('efdress' + i, 'assets/edressup/efdress00' + i + '.png');
                game.load.image('eshoe' + i, 'assets/edressup/eshoe00' + i + '.png');
            }
            if (i <= 4) {
                game.load.image('ebdress' + i, 'assets/edressup/ebdress000' + i + '.png');
                game.load.image('dicon' + i, 'assets/edressup/dicon' + i + '.png');
                game.load.image('clrbowl' + i, 'assets/cooking2/clrbowl' + i + '.png');
                game.load.image('cake_cover000' + i, 'assets/cooking2/cake_cover000' + i + '.png');
                game.load.image('cupi000' + i, 'assets/cooking2/cupi000' + i + '.png');
                game.load.image('ctoping1_000' + i, 'assets/cooking2/ctoping1_000' + i + '.png');
                game.load.image('ctoping2_000' + i, 'assets/cooking2/ctoping2_000' + i + '.png');
            }
            if (i <= 3) {
                game.load.image('etext000' + i, 'assets/intro/etext000' + i + '.png');
                game.load.image('ebshoe' + i, 'assets/edressup/ebshoe000' + i + '.png');
            }
            if (i <= 6) {
                game.load.image('fibg' + i, 'assets/fibg' + i + '.jpg');
            }
            if (i <= 5) {
                game.load.image('ebhair000' + i, 'assets/edressup/ebhair000' + i + '.png');
                game.load.image('efhair000' + i, 'assets/edressup/efhair000' + i + '.png');
                game.load.image('abhair000' + i, 'assets/annadressup/abhair000' + i + '.png');
                game.load.image('afhair000' + i, 'assets/annadressup/afhair000' + i + '.png');
            }
            if (i <= 2) {
                game.load.image('atext000' + i, 'assets/intro/atext000' + i + '.png');
                game.load.image('select' + i, 'assets/selection/select' + i + '.png');
                game.load.image('clr_cone1_000' + i, 'assets/cooking2/clr_cone1_000' + i + '.png');
                game.load.image('clr_cone2_000' + i, 'assets/cooking2/clr_cone2_000' + i + '.png');
                game.load.image('clr_cone3_000' + i, 'assets/cooking2/clr_cone3_000' + i + '.png');
                game.load.image('clr_cone4_000' + i, 'assets/cooking2/clr_cone4_000' + i + '.png');
            }
        }

        /* for(i=0;i<RelatedGames.length; i++)
            {
            game.load.image('thumb_'+i, RelatedGames[i]["thumb"]);
            }*/
        game.load.image('Tump_frame', 'assets/Tump_frame.png');

        //LLLLL
        game.load.onFileComplete.add(this.fileLoadFunPre, this);


    },
    fileLoadFunPre: function(progress, cacheKey, success, totalLoaded, totalFiles) {
        this.progress.setText('LOADING: ' + parseInt(progress) + '%');
        if (progress == 100) {
            this.progress.visible = false;
            game.load.onFileComplete.removeAll();
            this.Go = game.add.sprite(game.world.width / 2.05, game.world.height / 1.65, 'Go');
            this.Go.anchor.setTo(0.5);
            this.Go.scale.setTo(0);
            this.Go.inputEnabled = true;
            this.Go.input.useHandCursor = true;
            this.Go.events.onInputDown.add(function() {
                if (Main.music == null) {
                    Main.music = game.add.audio('music', 0.5, true);
                    // Main.music.resume();
                };
                Main.music.play();

                game.state.start('title');


            }, this);
            game.add.tween(this.Go.scale).to({
                x: 1,
                y: 1
            }, 800, Phaser.Easing.Bounce.Out, true);
        }
    },
    openLink: function() {
        CreateLinksInGame("Frozen-Sisters-New-Year-Eve", "loading", "logo");
    }
}
Main.title = function() {}

Main.title.prototype = {
    create: function() {
        /* if (Main.music == null) {
                  Main.music = game.add.audio('music',0.5,true);
                  Main.music.play();
               };*/
        this.levelGroup = game.add.group();
        this.bg = game.add.sprite(0, 0, 'tbg');
        this.levelGroup.add(this.bg);

        this.egroup = game.add.group();
        this.agroup = game.add.group();

        this.abhair1 = game.add.sprite(312.45, 168.45, 'abhair000' + Main.annaFlag[1]);
        this.abhair1.anchor.setTo(0.5);
        this.agroup.add(this.abhair1);

        this.abdress1 = game.add.sprite(314.3, 173.65, 'ebdress1');
        this.abdress1.anchor.setTo(0.5);
        this.abdress1.visible = false;
        this.agroup.add(this.abdress1);

        this.abshoe1 = game.add.sprite(324, 656, 'ebshoe1');
        this.abshoe1.anchor.setTo(0.5);
        this.abshoe1.visible = false;
        this.agroup.add(this.abshoe1);

        this.abshoe2 = game.add.sprite(324, 657, 'ebshoe2');
        this.abshoe2.anchor.setTo(0.5);
        this.abshoe2.visible = false;
        this.agroup.add(this.abshoe2);

        this.abshoe3 = game.add.sprite(325.6, 658, 'ebshoe3');
        this.abshoe3.anchor.setTo(0.5);
        this.abshoe3.visible = false;
        this.agroup.add(this.abshoe3);

        this.abody = game.add.sprite(269.75, 436.75, 'abody2');
        this.abody.anchor.setTo(0.5);
        this.agroup.add(this.abody);

        this.ahand1 = game.add.sprite(362.65, 257.6, 'ahand1');
        this.ahand1.anchor.setTo(0.5);
        this.agroup.add(this.ahand1);

        this.ashoe1 = game.add.sprite(315, 683, 'eshoe' + Main.annaFlag[2]);
        this.ashoe1.anchor.setTo(0.5);
        this.agroup.add(this.ashoe1);

        this.adress1 = game.add.sprite(308.7, 407, 'edress2' /*+Main.annaFlag[0]*/ );
        this.adress1.anchor.setTo(0.5);
        this.agroup.add(this.adress1);

        this.ahand3 = game.add.sprite(365.65, 256.6, 'ehand3');
        this.ahand3.anchor.setTo(0.5);
        // this.ahand3.visible=false;
        this.agroup.add(this.ahand3);

        this.afdress1 = game.add.sprite(308.7, 407, 'efdress2' /*+Main.annaFlag[0]*/ );
        this.afdress1.anchor.setTo(0.5);
        this.agroup.add(this.afdress1);

        this.abag1 = game.add.sprite(351.1, 386.05, 'ebag' + Main.annaFlag[3]);
        this.abag1.anchor.setTo(0.5);
        this.abag1.alpha = Main.annaalpha[3];
        this.agroup.add(this.abag1);

        this.ashoe2 = game.add.sprite(315, 683, 'eshoe' + Main.annaFlag[2]);
        this.ashoe2.anchor.setTo(0.5);
        this.ashoe2.visible = false;
        this.agroup.add(this.ashoe2);

        this.ahand2 = game.add.sprite(331, 316.05, 'ahand2');
        this.ahand2.anchor.setTo(0.5);
        //this.agroup.add(this.ahand2);



        this.ahead = game.add.sprite(312.15, 122.85, 'ahead');
        this.ahead.anchor.setTo(0.5);
        this.agroup.add(this.ahead);

        this.aeyeblink = game.add.sprite(310.75, 126.6, 'aeye_blink');
        this.aeyeblink.anchor.setTo(0.5);
        this.aeyeblink.animations.add('aeye_blink').onComplete.add(function() {
            this.aeyeblink.frame = 0;
        }, this);
        //  this.aeyeblink.animations.play('aeye_blink',10,false);
        // game.time.events.loop(3000,this.updateyeblink,this);        
        this.agroup.add(this.aeyeblink);

        this.afhair1 = game.add.sprite(305.4, 167.5, 'afhair000' + Main.annaFlag[1]);
        this.afhair1.anchor.setTo(0.5);
        this.agroup.add(this.afhair1);

        game.time.events.loop(1900, function() {

            this.randomId1 = game.rnd.integerInRange(1, 4);

            this.abhair1.loadTexture('abhair000' + this.randomId1);
            this.afhair1.loadTexture('afhair000' + this.randomId1);
            this.ashoe1.loadTexture('eshoe' + this.randomId1);
            this.abag1.loadTexture('ebag' + this.randomId1);
            this.adress1.loadTexture('edress' + this.randomId1);
            this.afdress1.loadTexture('efdress' + this.randomId1);

        }, this);


        game.time.events.loop(1900, function() {

            this.randomId1 = game.rnd.integerInRange(1, 4);

            this.ebhair1.loadTexture('ebhair000' + this.randomId1);
            this.efhair1.loadTexture('efhair000' + this.randomId1);
            this.eshoe1.loadTexture('eshoe' + (this.randomId1 + 4));
            this.ebag1.loadTexture('ebag' + (this.randomId1 + 4));
            this.edress1.loadTexture('edress' + (this.randomId1 + 4));
            this.efdress1.loadTexture('efdress' + (this.randomId1 + 4));

        }, this);



        this.ebhair1 = game.add.sprite(305.15, 175.4, 'ebhair000' + Main.elsaFlag[1]);
        this.ebhair1.anchor.setTo(0.5);
        this.egroup.add(this.ebhair1);

        this.ebdress1 = game.add.sprite(314.3, 173.65, 'ebdress1');
        this.ebdress1.anchor.setTo(0.5);
        this.ebdress1.visible = false;
        this.egroup.add(this.ebdress1);

        this.ebshoe1 = game.add.sprite(325.6, 661.9, 'ebshoe1');
        this.ebshoe1.anchor.setTo(0.5);
        this.ebshoe1.visible = false;
        this.egroup.add(this.ebshoe1);

        this.ebshoe2 = game.add.sprite(325.6, 661.9, 'ebshoe2');
        this.ebshoe2.anchor.setTo(0.5);
        this.ebshoe2.visible = false;
        this.egroup.add(this.ebshoe2);

        this.ebshoe3 = game.add.sprite(325.6, 661.9, 'ebshoe3');
        this.ebshoe3.anchor.setTo(0.5);
        this.ebshoe3.visible = false;
        this.egroup.add(this.ebshoe3);

        this.ebody = game.add.sprite(286.65, 437.25, 'ebody2');
        this.ebody.anchor.setTo(0.5);
        this.egroup.add(this.ebody);

        this.efhand = game.add.sprite(362.65, 257.6, 'efhand');
        this.efhand.anchor.setTo(0.5);
        this.egroup.add(this.efhand);

        this.eshoe1 = game.add.sprite(314, 685, 'eshoe' + Main.elsaFlag[2]);
        this.eshoe1.anchor.setTo(0.5);
        this.egroup.add(this.eshoe1);

        this.edress1 = game.add.sprite(307.7, 407, 'edress' + Main.elsaFlag[0]);
        this.edress1.anchor.setTo(0.5);
        this.egroup.add(this.edress1);

        this.eshoe2 = game.add.sprite(314, 685, 'eshoe' + Main.elsaFlag[2]);
        this.eshoe2.anchor.setTo(0.5);
        this.eshoe2.visible = false;
        this.egroup.add(this.eshoe2);

        this.ehand3 = game.add.sprite(362.65, 257.6, 'ehand3');
        this.ehand3.anchor.setTo(0.5);
        // this.ehand3.visible=false;
        this.egroup.add(this.ehand3);

        this.efdress1 = game.add.sprite(307.7, 407, 'efdress' + Main.elsaFlag[0]);
        this.efdress1.anchor.setTo(0.5);
        this.egroup.add(this.efdress1);

        this.ebag1 = game.add.sprite(351.1, 386.05, 'ebag' + Main.elsaFlag[3]);
        this.ebag1.anchor.setTo(0.5);
        this.ebag1.alpha = Main.elsaalpha[3];
        this.egroup.add(this.ebag1);

        this.ehand2 = game.add.sprite(331, 317, 'ehand2');
        this.ehand2.anchor.setTo(0.5);
        // this.egroup.add(this.ehand2);

        this.ehead = game.add.sprite(246, 115, 'ehead');
        this.ehead.anchor.setTo(0.5);
        this.egroup.add(this.ehead);

        this.efhair1 = game.add.sprite(301, 166.5, 'efhair000' + Main.elsaFlag[1]);
        this.efhair1.anchor.setTo(0.5);
        this.egroup.add(this.efhair1);

        // this.final_hand = game.add.sprite(253,353,'final_hand');
        // this.final_hand.anchor.setTo(0.5);

        this.cupcakegroup = game.add.group();

        this.bglass = game.add.sprite(153, 590, 'bglass');
        this.bglass.anchor.setTo(0.5);
        this.bglass.scale.setTo(0.7);
        this.cupcakegroup.add(this.bglass);

        this.candy_drop = game.add.sprite(159, 548, 'candy_drop');
        this.candy_drop.anchor.setTo(0.5);
        this.candy_drop.scale.setTo(0.9);
        this.candy_drop.frame = 5;
        this.cupcakegroup.add(this.candy_drop);


        this.ctop = game.add.sprite(156.35, 427, 'ctop');
        this.ctop.anchor.setTo(0.5);
        this.ctop.scale.setTo(0.7);
        // this.ctop.visible=false;
        this.cupcakegroup.add(this.ctop);

        this.cake_cover1 = game.add.sprite(156.35, 465, 'cake_cover000' + Main.cakeArr[0]);
        this.cake_cover1.anchor.setTo(0.5);
        this.cake_cover1.scale.setTo(0.7);
        // this.cake_cover1.visible=false;
        this.cupcakegroup.add(this.cake_cover1);

        if (Main.clrArr[0] == 1) {
            this.cone_clr1_ani2 = game.add.sprite(104, 279, 'cone_clr1_ani2');
            this.cone_clr1_ani2.anchor.setTo(0.5);
            this.cone_clr1_ani2.scale.setTo(0.7);
            this.cone_clr1_ani2.frame = 9;
            this.cupcakegroup.add(this.cone_clr1_ani2);
        }

        if (Main.clrArr[0] == 2) {
            this.cone_clr2_ani2 = game.add.sprite(102, 279, 'cone_clr2_ani2');
            this.cone_clr2_ani2.anchor.setTo(0.5);
            this.cone_clr2_ani2.scale.setTo(0.7);
            this.cone_clr2_ani2.frame = 9;
            this.cupcakegroup.add(this.cone_clr2_ani2);
        }

        if (Main.clrArr[0] == 3) {
            this.cone_clr3_ani2 = game.add.sprite(102, 278, 'cone_clr3_ani2');
            this.cone_clr3_ani2.anchor.setTo(0.5);
            this.cone_clr3_ani2.scale.setTo(0.7);
            this.cone_clr3_ani2.frame = 9;
            this.cupcakegroup.add(this.cone_clr3_ani2);
        }

        if (Main.clrArr[0] == 4) {
            this.cone_clr4_ani2 = game.add.sprite(102, 279, 'cone_clr4_ani2');
            this.cone_clr4_ani2.anchor.setTo(0.5);
            this.cone_clr4_ani2.scale.setTo(0.7);
            this.cone_clr4_ani2.frame = 9;
            this.cupcakegroup.add(this.cone_clr4_ani2);
        }

        this.fctoping1_1 = game.add.sprite(156, 407, 'ctoping1_000' + Main.cakeArr[1]);
        this.fctoping1_1.anchor.setTo(0.5);
        this.fctoping1_1.scale.setTo(0.7);
        // this.fctoping1_1.visible=false;
        this.cupcakegroup.add(this.fctoping1_1);

        this.fctoping2_1 = game.add.sprite(144, 333, 'ctoping2_000' + Main.cakeArr[2]);
        this.fctoping2_1.anchor.setTo(0.5);
        this.fctoping2_1.scale.setTo(0.7);
        // this.fctoping2_1.visible=false;
        this.cupcakegroup.add(this.fctoping2_1);

        this.fglass = game.add.sprite(153, 595, 'fglass');
        this.fglass.anchor.setTo(0.5);
        this.fglass.scale.setTo(0.7);
        this.cupcakegroup.add(this.fglass);

        this.cupcakegroup2 = game.add.group();

        this.bglass = game.add.sprite(153, 590, 'bglass');
        this.bglass.anchor.setTo(0.5);
        this.bglass.scale.setTo(0.7);
        this.cupcakegroup2.add(this.bglass);

        this.candy_drop = game.add.sprite(159, 548, 'candy_drop');
        this.candy_drop.anchor.setTo(0.5);
        this.candy_drop.scale.setTo(0.9);
        this.candy_drop.frame = 5;
        this.cupcakegroup2.add(this.candy_drop);


        this.ctop = game.add.sprite(156.35, 427, 'ctop');
        this.ctop.anchor.setTo(0.5);
        this.ctop.scale.setTo(0.7);
        // this.ctop.visible=false;
        this.cupcakegroup2.add(this.ctop);

        this.cake_cover1 = game.add.sprite(156.35, 465, 'cake_cover000' + Main.cakeArr[0]);
        this.cake_cover1.anchor.setTo(0.5);
        this.cake_cover1.scale.setTo(0.7);
        // this.cake_cover1.visible=false;
        this.cupcakegroup2.add(this.cake_cover1);

        if (Main.clrArr[0] == 1) {
            this.cone_clr1_ani2 = game.add.sprite(104, 279, 'cone_clr1_ani2');
            this.cone_clr1_ani2.anchor.setTo(0.5);
            this.cone_clr1_ani2.scale.setTo(0.7);
            this.cone_clr1_ani2.frame = 9;
            this.cupcakegroup2.add(this.cone_clr1_ani2);
        }

        if (Main.clrArr[0] == 2) {
            this.cone_clr2_ani2 = game.add.sprite(102, 279, 'cone_clr2_ani2');
            this.cone_clr2_ani2.anchor.setTo(0.5);
            this.cone_clr2_ani2.scale.setTo(0.7);
            this.cone_clr2_ani2.frame = 9;
            this.cupcakegroup2.add(this.cone_clr2_ani2);
        }

        if (Main.clrArr[0] == 3) {
            this.cone_clr3_ani2 = game.add.sprite(102, 278, 'cone_clr3_ani2');
            this.cone_clr3_ani2.anchor.setTo(0.5);
            this.cone_clr3_ani2.scale.setTo(0.7);
            this.cone_clr3_ani2.frame = 9;
            this.cupcakegroup2.add(this.cone_clr3_ani2);
        }

        if (Main.clrArr[0] == 4) {
            this.cone_clr4_ani2 = game.add.sprite(102, 279, 'cone_clr4_ani2');
            this.cone_clr4_ani2.anchor.setTo(0.5);
            this.cone_clr4_ani2.scale.setTo(0.7);
            this.cone_clr4_ani2.frame = 9;
            this.cupcakegroup2.add(this.cone_clr4_ani2);
        }

        this.fctoping1_1 = game.add.sprite(156, 407, 'ctoping1_000' + Main.cakeArr[1]);
        this.fctoping1_1.anchor.setTo(0.5);
        this.fctoping1_1.scale.setTo(0.7);
        // this.fctoping1_1.visible=false;
        this.cupcakegroup2.add(this.fctoping1_1);

        this.fctoping2_1 = game.add.sprite(144, 333, 'ctoping2_000' + Main.cakeArr[2]);
        this.fctoping2_1.anchor.setTo(0.5);
        this.fctoping2_1.scale.setTo(0.7);
        // this.fctoping2_1.visible=false;
        this.cupcakegroup2.add(this.fctoping2_1);

        this.fglass = game.add.sprite(153, 595, 'fglass');
        this.fglass.anchor.setTo(0.5);
        this.fglass.scale.setTo(0.7);
        this.cupcakegroup2.add(this.fglass);

        this.agroup.add(this.cupcakegroup);
        this.agroup.add(this.ahand3);
        this.agroup.add(this.abag1);
        this.agroup.add(this.ahand2);

        this.egroup.add(this.cupcakegroup2);
        this.egroup.add(this.ehand3);
        this.egroup.add(this.ebag1);
        this.egroup.add(this.ehand2);


        /* this.cupcakegroup.scale.setTo(0.3);
         this.cupcakegroup.x=80;
         this.cupcakegroup.y=140;*/

        this.cupcakegroup.scale.setTo(0.3);
        this.cupcakegroup.x = 270;
        this.cupcakegroup.y = 140;

        this.cupcakegroup2.scale.setTo(0.3);
        this.cupcakegroup2.x = 270;
        this.cupcakegroup2.y = 140;

        this.egroup.scale.x = -this.egroup.scale.x;
        this.egroup.x = 430;
        this.egroup.y = -7;
        this.agroup.x = 70;
        this.agroup.y = -5;

        this.text = game.add.sprite(255.7, 523.9, 'text');
        this.text.anchor.setTo(0.5);

        this.morebtn = game.add.sprite(75.55, 749.55, 'morebtn');
        this.morebtn.anchor.setTo(0.5);
        this.morebtn.inputEnabled = true;
        this.morebtn.input.useHandCursor = true;
        this.morebtn.events.onInputUp.add(this.moreLink, this);
        this.morebtn.events.onInputOver.add(this.btnOver, this);
        this.morebtn.events.onInputOut.add(this.btnOut, this);
        //this.levelGroup.add(this.morebtn);
        this.playbtn = game.add.sprite(431.4, 749.2, 'playbtn');
        this.playbtn.anchor.setTo(0.5);
        this.playbtn.inputEnabled = true;
        this.playbtn.input.useHandCursor = true;
        this.playbtn.events.onInputUp.add(this.enterRoom, this);
        this.playbtn.events.onInputOver.add(this.btnOver, this);
        this.playbtn.events.onInputOut.add(this.btnOut, this);
        //this.levelGroup.add(this.playbtn);

        game.add.tween(this.text.scale).to({
            x: 1.05,
            y: 1.05
        }, 700, Phaser.Easing.Linear.Out, true, 0, -1).yoyo(100, true);




        this.logoVar = game.add.sprite(5, 5, 'logo');
        this.logoVar.scale.setTo(0.8);
        this.logoVar.inputEnabled = true
        this.logoVar.input.useHandCursor = true;
        this.logoVar.events.onInputUp.add(this.openLink, this);

        this.musicButton = game.add.sprite(427, 5, "soundicon");
        this.musicButton.scale.setTo(0.9);
        this.musicButton.inputEnabled = true
        this.musicButton.input.useHandCursor = true;
        this.musicButton.events.onInputUp.add(this.changemusic, this);
        if (!game.sound.mute) {
            this.musicButton.frame = 0;
        } else {
            this.musicButton.frame = 1;
        }
    },
    changemusic: function() {
        if (!game.sound.mute) {
            this.musicButton.frame = 1;
            game.sound.mute = true;
        } else {
            this.musicButton.frame = 0;
            game.sound.mute = false;
        };
    },
    openLink: function() {
        CreateLinksInGame("Frozen-Sisters-New-Year-Eve", "menu", "logo");
    },
    moreLink: function() {
        CreateLinksInGame("Frozen-Sisters-New-Year-Eve", "menu", "more");
    },
    btnOver: function(items) {
        items.scale.setTo(items.scale.x + 0.05);
        effectVar = game.add.sprite(items.x - 30, items.y - 80, 'effects');
        effectVar.anchor.setTo(0.5);
        effectVar.scale.setTo(2);
        effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
        effectVar.animations.play('glitter', 30, false);
    },
    btnOut: function(items) {
        items.scale.setTo(items.scale.x - 0.05);

    },
    removeGlitter: function(evt) {
        evt.kill();
    },
    enterRoom: function() {
        game.state.start('intro');
    },
}

Main.intro = function() {}

Main.intro.prototype = {
    create: function() {
        this.levelGroup = game.add.group();
        this.introbg = game.add.sprite(0, 0, 'ibg');
        this.levelGroup.add(this.introbg);




        this.morebtn = game.add.sprite(75.55, 749.55, 'morebtn');
        this.morebtn.anchor.setTo(0.5);
        this.morebtn.scale.setTo(0);
        this.morebtn.inputEnabled = true;
        this.morebtn.input.useHandCursor = true;
        this.morebtn.events.onInputUp.add(this.moreLink, this);
        this.morebtn.events.onInputOver.add(this.btnOver, this);
        this.morebtn.events.onInputOut.add(this.btnOut, this);
        this.levelGroup.add(this.morebtn);

        this.playbtn = game.add.sprite(431.4, 749.2, 'nextbtn');
        this.playbtn.anchor.setTo(0.5);
        this.playbtn.scale.setTo(0);
        this.playbtn.inputEnabled = true;
        this.playbtn.input.useHandCursor = true;
        this.playbtn.events.onInputUp.add(this.enterRoom, this);
        this.playbtn.events.onInputOver.add(this.btnOver, this);
        this.playbtn.events.onInputOut.add(this.btnOut, this);
        this.levelGroup.add(this.playbtn);

        this.popup1 = game.add.sprite(167.45, 168.55, 'etext0001');
        this.popup1.anchor.setTo(0.5);
        this.popup1.scale.setTo(0);
        this.levelGroup.add(this.popup1);

        this.popup2 = game.add.sprite(355.9, 532.55, 'atext0001');
        this.popup2.anchor.setTo(0.5);
        this.popup2.scale.setTo(0);
        this.levelGroup.add(this.popup2);

        this.popup3 = game.add.sprite(167.45, 168.55, 'etext0002');
        this.popup3.anchor.setTo(0.5);
        this.popup3.scale.setTo(0);
        this.levelGroup.add(this.popup3);

        this.popup4 = game.add.sprite(355.9, 532.55, 'atext0002');
        this.popup4.anchor.setTo(0.5);
        this.popup4.scale.setTo(0);
        this.levelGroup.add(this.popup4);

        this.popup5 = game.add.sprite(167.45, 168.55, 'etext0003');
        this.popup5.anchor.setTo(0.5);
        this.popup5.scale.setTo(0);
        this.levelGroup.add(this.popup5);


        if (Main.shutterOn[0]) {
            Main.iarr[0]++;
            this.shutter = game.add.sprite(0, 0, 'shutterbg');
            game.add.tween(this.shutter).to({
                y: -850
            }, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                if (Main.iarr[0] == 1) {
                    this.startPopUp();
                }
                if (Main.iarr[0] == 2) {
                    this.startPopUp2();
                }
            }, this)
        }

        this.logoVar = game.add.sprite(5, 5, 'logo');
        this.logoVar.scale.setTo(0.8);
        this.logoVar.inputEnabled = true
        this.logoVar.input.useHandCursor = true;
        this.logoVar.events.onInputUp.add(this.openLink, this);

        this.musicButton = game.add.sprite(427, 5, "soundicon");
        this.musicButton.scale.setTo(0.9);
        this.musicButton.inputEnabled = true
        this.musicButton.input.useHandCursor = true;
        this.musicButton.events.onInputUp.add(this.changemusic, this);
        if (!game.sound.mute) {
            this.musicButton.frame = 0;
        } else {
            this.musicButton.frame = 1;
        }



    },
    startPopUp: function() {
        game.add.tween(this.popup1.scale).to({
            x: 1,
            y: 1
        }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(this.bringPopUp2, this);
    },
    bringPopUp2: function() {
        game.add.tween(this.popup1).to({
            alpha: 0
        }, 700, Phaser.Easing.Quadratic.Out, true, 2000);
        game.add.tween(this.popup2.scale).to({
            x: 1,
            y: 1
        }, 700, Phaser.Easing.Quadratic.Out, true, 2500).onComplete.add(this.bringPopUp3, this);
    },
    bringPopUp3: function() {
        game.add.tween(this.popup2).to({
            alpha: 0
        }, 700, Phaser.Easing.Quadratic.Out, true, 2000)
        game.add.tween(this.popup3.scale).to({
            x: 1,
            y: 1
        }, 700, Phaser.Easing.Quadratic.Out, true, 2500).onComplete.add(this.bringBottons, this);
    },
    startPopUp2: function() {
        game.add.tween(this.popup5.scale).to({
            x: 1,
            y: 1
        }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(this.bringPopUp4, this);
    },
    bringPopUp4: function() {
        game.add.tween(this.popup5).to({
            alpha: 0
        }, 700, Phaser.Easing.Quadratic.Out, true, 2000);
        game.add.tween(this.popup4.scale).to({
            x: 1,
            y: 1
        }, 700, Phaser.Easing.Quadratic.Out, true, 2500).onComplete.add(this.bringBottons, this);
    },
    bringBottons: function() {
        game.add.tween(this.morebtn.scale).to({
            x: 1,
            y: 1
        }, 700, Phaser.Easing.Quadratic.Out, true);
        game.add.tween(this.playbtn.scale).to({
            x: 1,
            y: 1
        }, 700, Phaser.Easing.Quadratic.Out, true);
    },
    changemusic: function() {
        if (!game.sound.mute) {
            this.musicButton.frame = 1;
            game.sound.mute = true;
        } else {
            this.musicButton.frame = 0;
            game.sound.mute = false;
        };
    },
    openLink: function() {
        CreateLinksInGame("Frozen-Sisters-New-Year-Eve", "game", "logo");
    },
    moreLink: function() {
        CreateLinksInGame("Frozen-Sisters-New-Year-Eve", "game", "morebutton");
    },
    btnOver: function(items) {
        items.scale.setTo(items.scale.x + 0.05);
        effectVar = game.add.sprite(items.x - 30, items.y - 80, 'effects');
        effectVar.anchor.setTo(0.5);
        effectVar.scale.setTo(2);
        effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
        effectVar.animations.play('glitter', 30, false);
    },
    btnOut: function(items) {
        items.scale.setTo(items.scale.x - 0.05);

    },
    removeGlitter: function(evt) {
        evt.kill();
    },
    enterRoom: function() {
        game.add.tween(this.shutter).to({
            y: 0
        }, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
            game.state.start('selection_screen');
        });

    },
}

Main.selection_screen = function() {}

Main.selection_screen.prototype = {
    create: function() {
        this.levelGroup = game.add.group();
        this.introbg = game.add.sprite(0, 0, 'sbg');
        this.levelGroup.add(this.introbg);

        this.bgf = game.add.sprite(256.65, 398.95, 'bgf');
        this.bgf.anchor.setTo(0.5);
        this.levelGroup.add(this.bgf);

        this.select1 = game.add.sprite(266.5, 210, 'select1');
        this.select1.anchor.setTo(0.5);
        if (Main.selectionFlag[0] == 0) {
            // this.select1.inputEnabled = true;
            //this.select1.input.useHandCursor = true;
            this.select1.events.onInputOver.add(this.btnOver, this);
            this.select1.events.onInputOut.add(this.btnOut, this);

            this.select1.events.onInputDown.add(function() {
                Main.selectionFlag[0] = 1;
                this.select2.inputEnabled = false;
                this.select1.inputEnabled = false;
                //Main.shuttersound.play();

                game.add.tween(this.shutter).to({
                    y: 0
                }, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                    game.state.start('cooking_screen');
                });

            }, this);
        } else {
            this.select1.alpha = 0.6;
        }
        this.levelGroup.add(this.select1);



        this.select2 = game.add.sprite(273.15, 553.3, 'select2');
        this.select2.anchor.setTo(0.5);
        if (Main.selectionFlag[0] == 1) {
            // this.select2.inputEnabled = true;
            // this.select2.input.useHandCursor = true;
            this.select2.events.onInputOver.add(this.btnOver, this);
            this.select2.events.onInputOut.add(this.btnOut, this);

            this.select2.events.onInputDown.add(function() {
                Main.selectionFlag[1] = 1;
                this.select2.inputEnabled = false;
                this.select1.inputEnabled = false;

                //Main.shuttersound.play();
                game.add.tween(this.shutter).to({
                    y: 0
                }, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                    game.state.start('elsa_dressup');
                });

            }, this);
        } else {
            this.select2.alpha = 0.6;
        }
        this.levelGroup.add(this.select2);

        this.morebtn = game.add.sprite(55, 740, 'morebtn');
        this.morebtn.anchor.setTo(0.5);
        // this.morebtn.scale.setTo(0);
        this.morebtn.inputEnabled = true;
        this.morebtn.input.useHandCursor = true;
        this.morebtn.events.onInputUp.add(this.moreLink, this);
        this.morebtn.events.onInputOver.add(this.btnOver, this);
        this.morebtn.events.onInputOut.add(this.btnOut, this);




        if (Main.shutterOn[0]) {
            this.shutter = game.add.sprite(0, 0, 'shutterbg');
            game.add.tween(this.shutter).to({
                y: -850
            }, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                this.select1.inputEnabled = true;
                this.select1.input.useHandCursor = true;
                this.select2.inputEnabled = true;
                this.select2.input.useHandCursor = true;

            }, this);
        }


        this.logoVar = game.add.sprite(5, 5, 'logo');
        this.logoVar.scale.setTo(0.8);
        this.logoVar.inputEnabled = true
        this.logoVar.input.useHandCursor = true;
        this.logoVar.events.onInputUp.add(this.openLink, this);

        this.musicButton = game.add.sprite(427, 5, "soundicon");
        this.musicButton.scale.setTo(0.9);
        this.musicButton.inputEnabled = true
        this.musicButton.input.useHandCursor = true;
        this.musicButton.events.onInputUp.add(this.changemusic, this);
        if (!game.sound.mute) {
            this.musicButton.frame = 0;
        } else {
            this.musicButton.frame = 1;
        }
    },
    changemusic: function() {
        if (!game.sound.mute) {
            this.musicButton.frame = 1;
            game.sound.mute = true;
        } else {
            this.musicButton.frame = 0;
            game.sound.mute = false;
        };
    },
    openLink: function() {
        CreateLinksInGame("Frozen-Sisters-New-Year-Eve", "game", "logo");
    },
    moreLink: function() {
        CreateLinksInGame("Frozen-Sisters-New-Year-Eve", "game", "more");
    },
    btnOver: function(items) {
        items.scale.setTo(items.scale.x + 0.05);
        effectVar = game.add.sprite(items.x - 30, items.y - 80, 'effects');
        effectVar.anchor.setTo(0.5);
        effectVar.scale.setTo(2);
        effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
        effectVar.animations.play('glitter', 30, false);
    },
    btnOut: function(items) {
        items.scale.setTo(items.scale.x - 0.05);

    },
    removeGlitter: function(evt) {
        evt.kill();
    },
}

Main.elsa_dressup = function() {}

Main.elsa_dressup.prototype = {
    create: function() {
        this.annai = [0, 0, 0, 0];
        this.levelGroup = game.add.group();
        this.bg = game.add.sprite(0, 0, 'dbg');
        this.levelGroup.add(this.bg);

        this.egroup = game.add.group();

        this.ebhair1 = game.add.sprite(305.15, 175.4, 'ebhair000' + Main.elsaFlag[1]);
        this.ebhair1.anchor.setTo(0.5);
        this.egroup.add(this.ebhair1);

        this.ebdress1 = game.add.sprite(314.3, 173.65, 'ebdress1');
        this.ebdress1.anchor.setTo(0.5);
        this.egroup.add(this.ebdress1);

        this.ebshoe1 = game.add.sprite(325.6, 661.9, 'ebshoe1');
        this.ebshoe1.anchor.setTo(0.5);
        this.ebshoe1.visible = false;
        this.egroup.add(this.ebshoe1);

        this.ebshoe2 = game.add.sprite(325.6, 661.9, 'ebshoe2');
        this.ebshoe2.anchor.setTo(0.5);
        this.ebshoe2.visible = false;
        this.egroup.add(this.ebshoe2);

        this.ebshoe3 = game.add.sprite(325.6, 661.9, 'ebshoe3');
        this.ebshoe3.anchor.setTo(0.5);
        this.ebshoe3.visible = false;
        this.egroup.add(this.ebshoe3);

        this.ebody = game.add.sprite(286.65, 437.25, 'ebody');
        this.ebody.anchor.setTo(0.5);
        this.egroup.add(this.ebody);

        this.efhand = game.add.sprite(362.65, 257.6, 'efhand');
        this.efhand.anchor.setTo(0.5);
        this.egroup.add(this.efhand);

        this.eshoe1 = game.add.sprite(314, 685, 'eshoe' + Main.elsaFlag[2]);
        this.eshoe1.anchor.setTo(0.5);
        this.egroup.add(this.eshoe1);

        this.edress1 = game.add.sprite(307.7, 407, 'edress' + Main.elsaFlag[0]);
        this.edress1.anchor.setTo(0.5);
        this.egroup.add(this.edress1);

        this.eshoe2 = game.add.sprite(314, 685, 'eshoe' + Main.elsaFlag[2]);
        this.eshoe2.anchor.setTo(0.5);
        this.eshoe2.visible = false;
        this.egroup.add(this.eshoe2);

        this.ehand3 = game.add.sprite(362.65, 257.6, 'ehand3');
        this.ehand3.anchor.setTo(0.5);
        // this.ehand3.visible=false;
        this.egroup.add(this.ehand3);

        this.efdress1 = game.add.sprite(307.7, 407, 'efdress' + Main.elsaFlag[0]);
        this.efdress1.anchor.setTo(0.5);
        this.egroup.add(this.efdress1);

        this.ebag1 = game.add.sprite(351.1, 386.05, 'ebag' + Main.elsaFlag[3]);
        this.ebag1.anchor.setTo(0.5);
        this.ebag1.alpha = Main.elsaalpha[3];
        this.egroup.add(this.ebag1);

        this.ehand2 = game.add.sprite(331, 317, 'ehand2');
        this.ehand2.anchor.setTo(0.5);
        this.egroup.add(this.ehand2);

        this.ehead = game.add.sprite(246, 115, 'ehead');
        this.ehead.anchor.setTo(0.5);
        this.egroup.add(this.ehead);

        this.efhair1 = game.add.sprite(301, 166.5, 'efhair000' + Main.elsaFlag[1]);
        this.efhair1.anchor.setTo(0.5);
        this.egroup.add(this.efhair1);

        this.icongp = game.add.group();

        this.ipanel = game.add.sprite(-4.9, 398.65, 'ipanel');
        this.ipanel.anchor.setTo(0.5);
        this.icongp.add(this.ipanel);

        var iconx = [54.5, 54.5, 54.5, 54.5];
        var icony = [340.75, 232.9, 463.55, 583.75];

        for (i = 1; i <= 4; i++) {
            this['dicon' + i] = game.add.sprite(iconx[i - 1], icony[i - 1], 'dicon' + i);
            this['dicon' + i].anchor.setTo(0.5);
            this['dicon' + i].id = i;
            this['dicon' + i].cnt = 1;
            this['dicon' + i].inputEnabled = true;
            this['dicon' + i].input.useHandCursor = true;
            this['dicon' + i].events.onInputOver.add(this.btnOver, this);
            this['dicon' + i].events.onInputOut.add(this.btnOut, this);
            this['dicon' + i].events.onInputDown.add(this.changefun, this);

        }





        this.morebtn = game.add.sprite(75.55, 749.55, 'morebtn');
        this.morebtn.anchor.setTo(0.5);
        // this.morebtn.scale.setTo(0);
        this.morebtn.inputEnabled = true;
        this.morebtn.input.useHandCursor = true;
        this.morebtn.events.onInputUp.add(this.moreLink, this);
        this.morebtn.events.onInputOver.add(this.btnOver, this);
        this.morebtn.events.onInputOut.add(this.btnOut, this);
        // this.levelGroup.add(this.morebtn);

        this.playbtn = game.add.sprite(431.4, 749.2, 'donebtn');
        this.playbtn.anchor.setTo(0.5);
        this.playbtn.scale.setTo(0);
        this.playbtn.inputEnabled = true;
        this.playbtn.input.useHandCursor = true;
        this.playbtn.events.onInputUp.add(this.enterRoom, this);
        this.playbtn.events.onInputOver.add(this.btnOver, this);
        this.playbtn.events.onInputOut.add(this.btnOut, this);
        // this.levelGroup.add(this.playbtn);


        if (Main.shutterOn[0]) {
            this.shutter = game.add.sprite(0, 0, 'shutterbg');
            game.add.tween(this.shutter).to({
                y: -850
            }, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {

            }, this);
        }


        this.logoVar = game.add.sprite(5, 5, 'logo');
        this.logoVar.scale.setTo(0.8);
        this.logoVar.inputEnabled = true
        this.logoVar.input.useHandCursor = true;
        this.logoVar.events.onInputUp.add(this.openLink, this);

        this.musicButton = game.add.sprite(427, 5, "soundicon");
        this.musicButton.scale.setTo(0.9);
        this.musicButton.inputEnabled = true
        this.musicButton.input.useHandCursor = true;
        this.musicButton.events.onInputUp.add(this.changemusic, this);
        if (!game.sound.mute) {
            this.musicButton.frame = 0;
        } else {
            this.musicButton.frame = 1;
        }
        this.effectFlag = [this.edress1, this.efhair1, this.eshoe1, this.ebag1];
    },
    changemusic: function() {
        if (!game.sound.mute) {
            this.musicButton.frame = 1;
            game.sound.mute = true;
        } else {
            this.musicButton.frame = 0;
            game.sound.mute = false;
        };
    },
    changefun: function(evt) {
        this.annai[evt.id - 1] = 1;
        if (evt.id == 1) {
            evt.cnt++;
            if (evt.cnt <= 4) {
                this.ebdress1.visible = true;
                this.ebdress1.loadTexture('ebdress' + evt.cnt);
            } else {
                this.ebdress1.visible = false;
            }

            this.edress1.loadTexture('edress' + evt.cnt);
            this.efdress1.loadTexture('efdress' + evt.cnt);
            Main.elsaFlag[0] = evt.cnt;
            Main.elsaalpha[0] = 1;
            if (evt.cnt >= 12) {
                evt.cnt = 0;
            }
            /* if(Main.elsaFlag[0]==10){
               this.ehand3.visible=true;
             }else{
               this.ehand3.visible=false;
             }*/

        }

        if (evt.id == 2) {
            evt.cnt++;
            this.efhair1.loadTexture('efhair000' + evt.cnt);
            this.ebhair1.loadTexture('ebhair000' + evt.cnt);
            Main.elsaFlag[1] = evt.cnt;
            Main.elsaalpha[1] = 1;
            if (evt.cnt >= 5) {
                evt.cnt = 0;
            }

        }

        if (evt.id == 3) {
            evt.cnt++;
            if (evt.cnt == 2) {
                this.ebshoe1.visible = true;
            } else {
                this.ebshoe1.visible = false;
            }
            if (evt.cnt == 3) {
                this.ebshoe2.visible = true;
            } else {
                this.ebshoe2.visible = false;
            }
            if (evt.cnt == 4) {
                this.ebshoe3.visible = true;
            } else {
                this.ebshoe3.visible = false;
            }


            this.eshoe1.loadTexture('eshoe' + evt.cnt);
            this.eshoe2.loadTexture('eshoe' + evt.cnt);
            Main.elsaFlag[2] = evt.cnt;
            Main.elsaalpha[2] = 1;
            if (evt.cnt >= 12) {
                evt.cnt = 0;
            }

            if (Main.elsaFlag[2] == 6 || Main.elsaFlag[2] == 7 || Main.elsaFlag[2] == 2 || Main.elsaFlag[2] == 3 || Main.elsaFlag[2] == 4 || Main.elsaFlag[2] == 5 || Main.elsaFlag[2] == 12) {
                this.eshoe1.visible = false;
                this.eshoe2.visible = true;
            } else {
                this.eshoe1.visible = true;
                this.eshoe2.visible = false;
            }

            if (Main.elsaFlag[2] == 7) {
                this.eshoe1.x = 318;
                this.eshoe2.x = 318;
            } else {
                this.eshoe1.x = 314;
                this.eshoe2.x = 314;
            }

        }

        if (evt.id == 4) {
            evt.cnt++;
            this.ebag1.alpha = 1;
            this.ebag1.loadTexture('ebag' + evt.cnt);
            Main.elsaFlag[3] = evt.cnt;
            Main.elsaalpha[3] = 1;
            if (evt.cnt >= 12) {
                evt.cnt = 0;
            }

        }

        if (this.annai.indexOf(0) < 0) {
            game.add.tween(this.playbtn.scale).to({
                x: 1,
                y: 1
            }, 800, Phaser.Easing.Elastic.Out, true);
        }

        effectssd = game.add.sprite(this.effectFlag[evt.id - 1].worldPosition.x, this.effectFlag[evt.id - 1].worldPosition.y, 'effectssd');
        effectssd.anchor.setTo(0.5);
        effectssd.animations.add('effectssd');
        effectssd.animations.play('effectssd', 20, false).onComplete.add(function(evt) {
            evt.destroy();
        }, this);

    },
    openLink: function() {
        CreateLinksInGame("Frozen-Sisters-New-Year-Eve", "game", "logo");
    },
    moreLink: function() {
        CreateLinksInGame("Frozen-Sisters-New-Year-Eve", "game", "more");
    },
    btnOver: function(items) {
        items.scale.setTo(items.scale.x + 0.05);
        effectVar = game.add.sprite(items.x - 30, items.y - 80, 'effects');
        effectVar.anchor.setTo(0.5);
        effectVar.scale.setTo(2);
        effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
        effectVar.animations.play('glitter', 30, false);
    },
    btnOut: function(items) {
        items.scale.setTo(items.scale.x - 0.05);

    },
    removeGlitter: function(evt) {
        evt.kill();
    },
    enterRoom: function() {
        game.add.tween(this.shutter).to({
            y: 0
        }, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
            game.state.start('anna_dressup');
        });

    },
}

Main.anna_dressup = function() {}

Main.anna_dressup.prototype = {
    create: function() {
        this.annai = [0, 0, 0, 0];
        this.levelGroup = game.add.group();
        this.bg = game.add.sprite(0, 0, 'dbg');
        this.levelGroup.add(this.bg);

        this.mconedrag = false;

        this.agroup = game.add.group();

        this.abhair1 = game.add.sprite(312.45, 168.45, 'abhair000' + Main.annaFlag[1]);
        this.abhair1.anchor.setTo(0.5);
        this.agroup.add(this.abhair1);

        this.abdress1 = game.add.sprite(314.3, 173.65, 'ebdress1');
        this.abdress1.anchor.setTo(0.5);
        this.abdress1.visible = false;
        this.agroup.add(this.abdress1);

        this.abshoe1 = game.add.sprite(324, 656, 'ebshoe1');
        this.abshoe1.anchor.setTo(0.5);
        this.abshoe1.visible = false;
        this.agroup.add(this.abshoe1);

        this.abshoe2 = game.add.sprite(324, 657, 'ebshoe2');
        this.abshoe2.anchor.setTo(0.5);
        this.abshoe2.visible = false;
        this.agroup.add(this.abshoe2);

        this.abshoe3 = game.add.sprite(325.6, 658, 'ebshoe3');
        this.abshoe3.anchor.setTo(0.5);
        this.abshoe3.visible = false;
        this.agroup.add(this.abshoe3);

        this.abody = game.add.sprite(269.75, 436.75, 'abody');
        this.abody.anchor.setTo(0.5);
        this.agroup.add(this.abody);

        this.ahand1 = game.add.sprite(362.65, 257.6, 'ahand1');
        this.ahand1.anchor.setTo(0.5);
        this.agroup.add(this.ahand1);

        this.ashoe1 = game.add.sprite(315, 683, 'eshoe' + Main.annaFlag[2]);
        this.ashoe1.anchor.setTo(0.5);
        this.agroup.add(this.ashoe1);

        this.adress1 = game.add.sprite(308.7, 407, 'edress9' /*+Main.annaFlag[0]*/ );
        this.adress1.anchor.setTo(0.5);
        this.agroup.add(this.adress1);

        this.ahand3 = game.add.sprite(365.65, 256.6, 'ehand3');
        this.ahand3.anchor.setTo(0.5);
        // this.ahand3.visible=false;
        this.agroup.add(this.ahand3);

        this.afdress1 = game.add.sprite(308.7, 407, 'efdress9' /*+Main.annaFlag[0]*/ );
        this.afdress1.anchor.setTo(0.5);
        this.agroup.add(this.afdress1);

        this.abag1 = game.add.sprite(351.1, 386.05, 'ebag' + Main.annaFlag[3]);
        this.abag1.anchor.setTo(0.5);
        this.abag1.alpha = Main.annaalpha[3];
        this.agroup.add(this.abag1);

        this.ashoe2 = game.add.sprite(315, 683, 'eshoe' + Main.annaFlag[2]);
        this.ashoe2.anchor.setTo(0.5);
        this.ashoe2.visible = false;
        this.agroup.add(this.ashoe2);

        this.ahand2 = game.add.sprite(331, 316.05, 'ahand2');
        this.ahand2.anchor.setTo(0.5);
        this.agroup.add(this.ahand2);



        this.ahead = game.add.sprite(312.15, 122.85, 'ahead');
        this.ahead.anchor.setTo(0.5);
        this.agroup.add(this.ahead);

        this.aeyeblink = game.add.sprite(310.75, 126.6, 'aeye_blink');
        this.aeyeblink.anchor.setTo(0.5);
        this.aeyeblink.animations.add('aeye_blink').onComplete.add(function() {
            this.aeyeblink.frame = 0;
        }, this);
        //  this.aeyeblink.animations.play('aeye_blink',10,false);
        // game.time.events.loop(3000,this.updateyeblink,this);        
        this.agroup.add(this.aeyeblink);

        this.afhair1 = game.add.sprite(305.4, 167.5, 'afhair000' + Main.annaFlag[1]);
        this.afhair1.anchor.setTo(0.5);
        this.agroup.add(this.afhair1);

        this.icongp = game.add.group();

        this.ipanel = game.add.sprite(-4.9, 398.65, 'ipanel');
        this.ipanel.anchor.setTo(0.5);
        this.icongp.add(this.ipanel);

        var iconx = [54.5, 54.5, 54.5, 54.5];
        var icony = [340.75, 232.9, 463.55, 583.75];

        for (i = 1; i <= 4; i++) {
            this['dicon' + i] = game.add.sprite(iconx[i - 1], icony[i - 1], 'dicon' + i);
            this['dicon' + i].anchor.setTo(0.5);
            this['dicon' + i].id = i;
            this['dicon' + i].cnt = 1;
            this['dicon' + i].inputEnabled = true;
            this['dicon' + i].input.useHandCursor = true;
            this['dicon' + i].events.onInputOver.add(this.btnOver, this);
            this['dicon' + i].events.onInputOut.add(this.btnOut, this);
            this['dicon' + i].events.onInputDown.add(this.changefun, this);

        }





        this.morebtn = game.add.sprite(75.55, 749.55, 'morebtn');
        this.morebtn.anchor.setTo(0.5);
        // this.morebtn.scale.setTo(0);
        this.morebtn.inputEnabled = true;
        this.morebtn.input.useHandCursor = true;
        this.morebtn.events.onInputUp.add(this.moreLink, this);
        this.morebtn.events.onInputOver.add(this.btnOver, this);
        this.morebtn.events.onInputOut.add(this.btnOut, this);
        // this.levelGroup.add(this.morebtn);

        this.playbtn = game.add.sprite(431.4, 749.2, 'donebtn');
        this.playbtn.anchor.setTo(0.5);
        this.playbtn.scale.setTo(0);
        this.playbtn.inputEnabled = true;
        this.playbtn.input.useHandCursor = true;
        this.playbtn.events.onInputUp.add(this.enterRoom, this);
        this.playbtn.events.onInputOver.add(this.btnOver, this);
        this.playbtn.events.onInputOut.add(this.btnOut, this);
        // this.levelGroup.add(this.playbtn);


        if (Main.shutterOn[0]) {
            this.shutter = game.add.sprite(0, 0, 'shutterbg');
            game.add.tween(this.shutter).to({
                y: -850
            }, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {

            }, this);
        }


        this.logoVar = game.add.sprite(5, 5, 'logo');
        this.logoVar.scale.setTo(0.8);
        this.logoVar.inputEnabled = true
        this.logoVar.input.useHandCursor = true;
        this.logoVar.events.onInputUp.add(this.openLink, this);

        this.musicButton = game.add.sprite(427, 5, "soundicon");
        this.musicButton.scale.setTo(0.9);
        this.musicButton.inputEnabled = true
        this.musicButton.input.useHandCursor = true;
        this.musicButton.events.onInputUp.add(this.changemusic, this);
        if (!game.sound.mute) {
            this.musicButton.frame = 0;
        } else {
            this.musicButton.frame = 1;
        }
        this.effectFlag = [this.adress1, this.afhair1, this.ashoe1, this.abag1];
    },
    changemusic: function() {
        if (!game.sound.mute) {
            this.musicButton.frame = 1;
            game.sound.mute = true;
        } else {
            this.musicButton.frame = 0;
            game.sound.mute = false;
        };
    },
    updateyeblink: function() {
        this.aeyeblink.play('aeye_blink', 10, false);
    },
    changefun: function(evt) {
        this.annai[evt.id - 1] = 1;
        if (evt.id == 1) {
            evt.cnt++;
            if (evt.cnt <= 4) {
                this.abdress1.visible = true;
                this.abdress1.loadTexture('ebdress' + evt.cnt);
            } else {
                this.abdress1.visible = false;
            }
            this.adress1.loadTexture('edress' + evt.cnt);
            this.afdress1.loadTexture('efdress' + evt.cnt);
            Main.annaFlag[0] = evt.cnt;
            Main.annaalpha[0] = 1;
            if (evt.cnt >= 12) {
                evt.cnt = 0;
            }
            if (Main.annaFlag[0] == 12 || Main.annaFlag[0] == 10) {
                this.adress1.x = 307.7;
                this.afdress1.x = 307.7;
            } else {
                this.adress1.x = 308.7;
                this.afdress1.x = 308.7;
            }
            /*if(Main.annaFlag[0]==10){
                this.ahand3.visible=true;
              }else{
                this.ahand3.visible=false;
              }*/

        }

        if (evt.id == 2) {
            evt.cnt++;
            this.afhair1.loadTexture('afhair000' + evt.cnt);
            this.abhair1.loadTexture('abhair000' + evt.cnt);
            Main.annaFlag[1] = evt.cnt;
            Main.annaalpha[1] = 1;
            if (evt.cnt >= 5) {
                evt.cnt = 0;
            }

        }

        if (evt.id == 3) {
            evt.cnt++;
            if (evt.cnt == 2) {
                this.abshoe1.visible = true;
            } else {
                this.abshoe1.visible = false;
            }
            if (evt.cnt == 3) {
                this.abshoe2.visible = true;
            } else {
                this.abshoe2.visible = false;
            }
            if (evt.cnt == 4) {
                this.abshoe3.visible = true;
            } else {
                this.abshoe3.visible = false;
            }
            this.ashoe1.loadTexture('eshoe' + evt.cnt);
            this.ashoe2.loadTexture('eshoe' + evt.cnt);
            Main.annaFlag[2] = evt.cnt;
            Main.annaalpha[2] = 1;
            if (evt.cnt >= 12) {
                evt.cnt = 0;
            }

            if (Main.annaFlag[2] == 6 || Main.annaFlag[2] == 7 || Main.annaFlag[2] == 2 || Main.annaFlag[2] == 3 || Main.annaFlag[2] == 4 || Main.annaFlag[2] == 5 || Main.annaFlag[2] == 12) {
                this.ashoe1.visible = false;
                this.ashoe2.visible = true;
            } else {
                this.ashoe1.visible = true;
                this.ashoe2.visible = false;
            }

            if (Main.annaFlag[2] == 7) {
                this.ashoe1.x = 319;
                this.ashoe2.x = 319;
            } else {
                this.ashoe1.x = 315;
                this.ashoe2.x = 315;
            }

        }

        if (evt.id == 4) {
            evt.cnt++;
            this.abag1.alpha = 1;
            this.abag1.loadTexture('ebag' + evt.cnt);
            Main.annaFlag[3] = evt.cnt;
            Main.annaalpha[3] = 1;
            if (evt.cnt >= 12) {
                evt.cnt = 0;
            }

        }

        if (this.annai.indexOf(0) < 0) {
            game.add.tween(this.playbtn.scale).to({
                x: 1,
                y: 1
            }, 800, Phaser.Easing.Elastic.Out, true);
        }

        effectssd = game.add.sprite(this.effectFlag[evt.id - 1].worldPosition.x, this.effectFlag[evt.id - 1].worldPosition.y, 'effectssd');
        effectssd.anchor.setTo(0.5);
        effectssd.animations.add('effectssd');
        effectssd.animations.play('effectssd', 20, false).onComplete.add(function(evt) {
            evt.destroy();
        }, this);

    },
    openLink: function() {
        CreateLinksInGame("Frozen-Sisters-New-Year-Eve", "game", "logo");
    },
    moreLink: function() {
        CreateLinksInGame("Frozen-Sisters-New-Year-Eve", "game", "more");
    },
    btnOver: function(items) {
        items.scale.setTo(items.scale.x + 0.05);
        effectVar = game.add.sprite(items.x - 30, items.y - 80, 'effects');
        effectVar.anchor.setTo(0.5);
        effectVar.scale.setTo(2);
        effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
        effectVar.animations.play('glitter', 30, false);
    },
    btnOut: function(items) {
        items.scale.setTo(items.scale.x - 0.05);

    },
    removeGlitter: function(evt) {
        evt.kill();
    },
    enterRoom: function() {
        game.add.tween(this.shutter).to({
            y: 0
        }, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
            game.state.start('finalscreen');
        });

    },
}

Main.cooking_screen = function() {}

Main.cooking_screen.prototype = {
    create: function() {
        this.annai = [0, 0, 0, 0];
        this.levelGroup = game.add.group();
        this.bg = game.add.sprite(0, 0, 'cbg');
        this.levelGroup.add(this.bg);

        this.ovengp = game.add.group();

        this.oven = game.add.sprite(352.65, 339.9, 'oven');
        this.oven.anchor.setTo(0.5);
        this.ovengp.add(this.oven);

        this.ocake = game.add.sprite(327.65, 297.35, 'ocake');
        this.ocake.anchor.setTo(0.5);
        this.ocake.visible = false;
        this.ovengp.add(this.ocake);

        this.ocake2 = game.add.sprite(327.65, 297.35, 'ocake2');
        this.ocake2.anchor.setTo(0.5);
        this.ocake2.alpha = 0;
        // this.ocake2.inputEnabled=true;
        this.ocake2.events.onInputDown.add(function() {
            this.ocake2.inputEnabled = false;
            this.ocake2.visible = false;
            this.treygp.visible = true;
            this.arrow8.visible = false;
            game.add.tween(this.treygp.scale).to({
                x: 1,
                y: 1
            }, 700, Phaser.Easing.Quadratic.Out, true);
            game.add.tween(this.treygp).to({
                x: 20,
                y: 0
            }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                this.ovcir.inputEnabled = true;
                this.arrow7.visible = true;


            }, this);
        }, this);
        this.ovengp.add(this.ocake2);

        this.oven_close = game.add.sprite(329.15, 282.1, 'oven_close');
        this.oven_close.anchor.setTo(0.5);
        this.ovengp.add(this.oven_close);

        this.oven_open = game.add.sprite(222.3, 287.95, 'oven_open');
        this.oven_open.anchor.setTo(0.5);
        this.oven_open.visible = false;
        this.ovengp.add(this.oven_open);

        this.ovcnt = 0;

        this.ovcir = game.add.graphics(435, 282);
        this.ovcir.beginFill(0x666666, 0);
        this.ovcir.drawCircle(0, 0, 40);
        // this.ovcir.inputEnabled=true;
        this.ovcir.events.onInputDown.add(function() {
            this.ovcnt++;
            this.ovcir.inputEnabled = false;
            this.arrow7.visible = false;
            if (this.ovcnt == 1) {
                this.arrow6.visible = true;
                this.oven_close.visible = false;
                this.oven_open.visible = true;
                this.cake_trey.inputEnabled = true;

            }
            if (this.ovcnt == 2) {
                this.oven_close.visible = true;
                this.oven_open.visible = false;
                game.add.tween(this.timer).to({
                    x: 80
                }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                    this.timer.animations.add('timer');
                    this.timer.animations.play('timer', 25, false).onComplete.add(function() {
                        game.add.tween(this.timer).to({
                            x: -80
                        }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                            this.ovcir.inputEnabled = true;
                            this.arrow7.visible = true;
                        }, this);
                    }, this);
                    game.add.tween(this.ocake2).to({
                        alpha: 1
                    }, 1700, Phaser.Easing.Quadratic.Out, true);
                    game.add.tween(this.ocake).to({
                        alpha: 0
                    }, 1700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {

                    }, this);
                }, this);

            }
            if (this.ovcnt == 3) {
                //this.arrow6.visible=true;
                this.oven_close.visible = false;
                this.oven_open.visible = true;
                this.arrow8.visible = true;
                this.ocake2.inputEnabled = true;

            }
            if (this.ovcnt == 4) {
                //this.arrow6.visible=true;
                this.oven_close.visible = true;
                this.oven_open.visible = false;
                game.add.tween(this.plategp).to({
                    x: 0
                }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                    this.cake3.inputEnabled = true;
                    this.arrow6.visible = true;
                }, this);
            }

        }, this);

        /*this.mcnt1=0;

       this.mcir = game.add.graphics(0,0);
        this.mcir.beginFill(0x666666,0.1);
        this.mcir.drawRect(0,0,504,800);
        this.mcir.inputEnabled=true;
        this.mcir.events.onInputDown.add(function(){
            this.mcnt1++;
          this['xcnt'+this.mcnt1]=game.input.activePointer.x;
          this['ycnt'+this.mcnt1]=game.input.activePointer.y;
        this.mcir = game.add.graphics(game.input.activePointer.x,game.input.activePointer.y);
        this.mcir.beginFill(0x000000,0.5);
        this.mcir.drawCircle(0,0,20);
        console.log(this['xcnt'+this.mcnt1]+':'+this['ycnt'+this.mcnt1]);
        //console.log(this['ycnt'+this.mcnt1]);

        },this);*/


        this.table = game.add.sprite(252, 659.5, 'table');
        this.table.anchor.setTo(0.5);

        this.mix_ani = game.add.sprite(109.5, 473.65, 'mix_ani');
        this.mix_ani.anchor.setTo(0.5);

        this.sugar_bowl = game.add.sprite(370, 610, 'sugar_bowl');
        this.sugar_bowl.anchor.setTo(0.5);
        this.sugar_bowl.inputEnabled = true;
        this.sugar_bowl.input.enableDrag();
        this.sugar_bowl.events.onInputDown.add(function() {
            //game.world.bringToTop(this.pcup);
            this.arrow1.visible = false;
            this.arrow2.visible = true;
        }, this);
        this.sugar_bowl.events.onInputUp.add(function() {
            this.sugar_bowl.inputEnabled = false;
            this.arrow2.visible = false;
            if ((game.input.activePointer.x > 155 && game.input.activePointer.x < 357 && game.input.activePointer.y > 352 && game.input.activePointer.y < 483)) {
                this.sugar_bowl.visible = false;
                this.sugar_ani.visible = true;
                this.sugar_ani.animations.add('sugar_ani');
                this.sugar_ani.animations.play('sugar_ani', 10, false).onComplete.add(function() {
                    game.add.tween(this.sugar_ani).to({
                        alpha: 0
                    }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                        game.add.tween(this.wheat_bowl).to({
                            x: 370
                        }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                            this.wheat_bowl.inputEnabled = true;
                            this.wheat_bowl.input.enableDrag();
                            this.arrow1.visible = true;
                        }, this);
                    }, this);
                }, this);

            } else {
                game.add.tween(this.sugar_bowl).to({
                    x: 370,
                    y: 610
                }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                    this.sugar_bowl.inputEnabled = true;
                    this.arrow1.visible = true;
                }, this);
            }
        }, this);



        this.sugar_ani = game.add.sprite(230, 443, 'sugar_ani');
        this.sugar_ani.anchor.setTo(0.5);
        this.sugar_ani.visible = false;
        /*this.sugar_ani.animations.add('sugar_ani');
        this.sugar_ani.animations.play('sugar_ani',10,false);*/

        this.wheat_bowl = game.add.sprite(670, 610, 'wheat_bowl');
        this.wheat_bowl.anchor.setTo(0.5);
        // this.wheat_bowl.inputEnabled=true;
        // this.wheat_bowl.input.enableDrag();
        this.wheat_bowl.events.onInputDown.add(function() {
            //game.world.bringToTop(this.pcup);
            this.arrow1.visible = false;
            this.arrow2.visible = true;
        }, this);
        this.wheat_bowl.events.onInputUp.add(function() {
            this.wheat_bowl.inputEnabled = false;
            this.arrow2.visible = false;
            if ((game.input.activePointer.x > 155 && game.input.activePointer.x < 357 && game.input.activePointer.y > 352 && game.input.activePointer.y < 483)) {
                this.wheat_bowl.visible = false;
                this.wheat_ani.visible = true;
                this.wheat_ani.animations.add('wheat_ani');
                this.wheat_ani.animations.play('wheat_ani', 10, false).onComplete.add(function() {
                    game.add.tween(this.wheat_ani).to({
                        alpha: 0
                    }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                        game.add.tween(this.bpowder_bowl).to({
                            x: 370
                        }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                            this.bpowder_bowl.inputEnabled = true;
                            this.bpowder_bowl.input.enableDrag();
                            this.arrow1.visible = true;
                        }, this);
                    }, this);
                }, this);

            } else {
                game.add.tween(this.wheat_bowl).to({
                    x: 370,
                    y: 610
                }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                    this.wheat_bowl.inputEnabled = true;
                    this.arrow1.visible = true;
                }, this);
            }
        }, this);

        this.wheat_ani = game.add.sprite(245, 418, 'wheat_ani');
        this.wheat_ani.anchor.setTo(0.5);
        this.wheat_ani.visible = false;
        // this.wheat_ani.animations.add('wheat_ani');
        // this.wheat_ani.animations.play('wheat_ani',10,false);

        this.bpowder_bowl = game.add.sprite(670, 610, 'bpowder_bowl');
        this.bpowder_bowl.anchor.setTo(0.5);
        // this.bpowder_bowl.inputEnabled=true;
        // this.bpowder_bowl.input.enableDrag();
        this.bpowder_bowl.events.onInputDown.add(function() {
            //game.world.bringToTop(this.pcup);
            this.arrow1.visible = false;
            this.arrow2.visible = true;
        }, this);
        this.bpowder_bowl.events.onInputUp.add(function() {
            this.bpowder_bowl.inputEnabled = false;
            this.arrow2.visible = false;
            if ((game.input.activePointer.x > 155 && game.input.activePointer.x < 357 && game.input.activePointer.y > 352 && game.input.activePointer.y < 483)) {
                this.bpowder_bowl.visible = false;
                this.bpowder_ani.visible = true;
                this.bpowder_ani.animations.add('bpowder_ani');
                this.bpowder_ani.animations.play('bpowder_ani', 10, false).onComplete.add(function() {
                    game.add.tween(this.bpowder_ani).to({
                        alpha: 0
                    }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                        game.add.tween(this.vbowl).to({
                            x: 370
                        }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                            this.vbowl.inputEnabled = true;
                            this.vbowl.input.enableDrag();
                            this.arrow1.visible = true;
                        }, this);
                    }, this);
                }, this);

            } else {
                game.add.tween(this.bpowder_bowl).to({
                    x: 370,
                    y: 610
                }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                    this.bpowder_bowl.inputEnabled = true;
                    this.arrow1.visible = true;
                }, this);
            }
        }, this);

        this.bpowder_ani = game.add.sprite(215, 405, 'bpowder_ani');
        this.bpowder_ani.anchor.setTo(0.5);
        this.bpowder_ani.visible = false;
        // this.bpowder_ani.animations.add('bpowder_ani');
        // this.bpowder_ani.animations.play('bpowder_ani',10,false);

        this.vbowl = game.add.sprite(670, 610, 'vbowl');
        this.vbowl.anchor.setTo(0.5);
        // this.vbowl.inputEnabled=true;
        // this.vbowl.input.enableDrag();
        this.vbowl.events.onInputDown.add(function() {
            //game.world.bringToTop(this.pcup);
            this.arrow1.visible = false;
            this.arrow2.visible = true;
        }, this);
        this.vbowl.events.onInputUp.add(function() {
            this.vbowl.inputEnabled = false;
            this.arrow2.visible = false;
            if ((game.input.activePointer.x > 155 && game.input.activePointer.x < 357 && game.input.activePointer.y > 352 && game.input.activePointer.y < 483)) {
                this.vbowl.visible = false;
                this.vanilla_ani.visible = true;
                this.vanilla_ani.animations.add('vanilla_ani');
                this.vanilla_ani.animations.play('vanilla_ani', 10, false).onComplete.add(function() {
                    game.add.tween(this.vanilla_ani).to({
                        alpha: 0
                    }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                        game.add.tween(this.sbottle).to({
                            x: 370
                        }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                            this.sbottle.inputEnabled = true;
                            this.sbottle.input.enableDrag();
                            this.arrow1.visible = true;
                        }, this);
                    }, this);
                }, this);

            } else {
                game.add.tween(this.vbowl).to({
                    x: 370,
                    y: 610
                }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                    this.arrow1.visible = true;
                    this.vbowl.inputEnabled = true;
                }, this);
            }
        }, this);

        this.vanilla_ani = game.add.sprite(230, 442, 'vanilla_ani');
        this.vanilla_ani.anchor.setTo(0.5);
        this.vanilla_ani.visible = false;
        // this.vanilla_ani.animations.add('vanilla_ani');
        // this.vanilla_ani.animations.play('vanilla_ani',10,false);

        this.sbottle = game.add.sprite(670, 620, 'sbottle');
        this.sbottle.anchor.setTo(0.5);
        this.sbottle.scale.setTo(0.8);
        // this.sbottle.inputEnabled=true;
        // this.sbottle.input.enableDrag();
        this.sbottle.events.onInputDown.add(function() {
            //game.world.bringToTop(this.pcup);
            this.arrow1.visible = false;
            this.arrow2.visible = true;
        }, this);
        this.sbottle.events.onInputUp.add(function() {
            this.sbottle.inputEnabled = false;
            this.arrow2.visible = false;
            if ((game.input.activePointer.x > 155 && game.input.activePointer.x < 357 && game.input.activePointer.y > 352 && game.input.activePointer.y < 483)) {
                this.sbottle.visible = false;
                this.salt_ani.visible = true;
                this.salt_ani.animations.add('salt_ani', [0, 1, 2, 3, 4, 5, 6, 7, 6, 5, 4, 3, 2, 1, 2, 3, 4, 5, 6, 7]);
                this.salt_ani.animations.play('salt_ani', 10, false).onComplete.add(function() {
                    game.add.tween(this.salt_ani).to({
                        alpha: 0
                    }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                        game.add.tween(this.milkgp).to({
                            x: 0
                        }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                            this.mbottle.inputEnabled = true;
                            this.arrow1.visible = true;
                        }, this);
                    }, this);
                }, this);

            } else {
                game.add.tween(this.sbottle).to({
                    x: 370,
                    y: 620
                }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                    this.arrow1.visible = true;
                    this.sbottle.inputEnabled = true;
                }, this);
            }
        }, this);

        this.salt_ani = game.add.sprite(215, 450, 'salt_ani');
        this.salt_ani.anchor.setTo(0.5);
        this.salt_ani.scale.setTo(0.8);
        this.salt_ani.visible = false;
        // this.salt_ani.animations.add('salt_ani',[0,1,2,3,4,5,6,7,6,5,4,3,2,1,2,3,4,5,6,7,6,5,4,3,2,1]);
        // this.salt_ani.animations.play('salt_ani',10,false);

        this.milkgp = game.add.group();

        this.mlcnt = 0;

        this.mbottle = game.add.sprite(370, 640, 'mbottle');
        this.mbottle.anchor.setTo(0.5);
        // this.mbottle.inputEnabled=true;
        // this.mbottle.input.enableDrag();
        this.mbottle.events.onInputDown.add(function() {
            this.mlcnt++;
            //game.world.bringToTop(this.pcup);
            if (this.mlcnt == 1) {
                this.arrow1.visible = false;
                game.add.tween(this.mcap).to({
                    y: 530,
                    alpha: 0
                }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                    this.mbottle.input.enableDrag();
                    this.arrow1.visible = true;
                }, this);
            }
            if (this.mlcnt >= 2) {
                this.arrow1.visible = false;
                this.arrow2.visible = true;
            }
        }, this);
        this.mbottle.events.onInputUp.add(function() {
            if (this.mlcnt > 1) {
                this.mbottle.inputEnabled = false;
                this.arrow2.visible = false;
                if ((game.input.activePointer.x > 155 && game.input.activePointer.x < 357 && game.input.activePointer.y > 352 && game.input.activePointer.y < 483)) {
                    this.mbottle.visible = false;
                    this.milk_ani.visible = true;
                    this.milk_ani.animations.add('milk_ani');
                    this.milk_ani.animations.play('milk_ani', 10, false).onComplete.add(function() {
                        game.add.tween(this.milk_ani).to({
                            alpha: 0
                        }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                            game.add.tween(this.cplate).to({
                                x: 370
                            }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                                this.cplate.inputEnabled = true;
                                this.cplate.input.enableDrag();
                                this.arrow1.visible = true;
                            }, this);
                        }, this);
                    }, this);

                } else {
                    game.add.tween(this.mbottle).to({
                        x: 370,
                        y: 640
                    }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                        this.mbottle.inputEnabled = true;
                        this.arrow1.visible = true;
                    }, this);
                }
            }
        }, this);
        this.milkgp.add(this.mbottle);

        this.mcap = game.add.sprite(362, 573, 'mcap');
        this.mcap.anchor.setTo(0.5);
        this.milkgp.add(this.mcap);

        this.milk_ani = game.add.sprite(280, 462, 'milk_ani');
        this.milk_ani.anchor.setTo(0.5);
        this.milk_ani.visible = false;
        // this.milk_ani.animations.add('milk_ani');
        // this.milk_ani.animations.play('milk_ani',10,false);

        this.milkgp.x = 200;

        this.cplate = game.add.sprite(670, 620, 'cplate');
        this.cplate.anchor.setTo(0.5);
        // this.cplate.scale.setTo(0.8);
        // this.cplate.inputEnabled=true;
        // this.cplate.input.enableDrag();
        this.cplate.events.onInputDown.add(function() {
            //game.world.bringToTop(this.pcup);
            this.arrow1.visible = false;
            this.arrow2.visible = true;
        }, this);
        this.cplate.events.onInputUp.add(function() {
            this.cplate.inputEnabled = false;
            this.arrow2.visible = false;
            if ((game.input.activePointer.x > 155 && game.input.activePointer.x < 357 && game.input.activePointer.y > 352 && game.input.activePointer.y < 483)) {
                this.cplate.visible = false;
                this.cheese_ani.visible = true;
                this.cheese_ani.animations.add('cheese_ani');
                this.cheese_ani.animations.play('cheese_ani', 10, false).onComplete.add(function() {
                    game.add.tween(this.cheese_ani).to({
                        alpha: 0
                    }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                        game.add.tween(this.eggGp).to({
                            x: 0
                        }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                            this.egg1.inputEnabled = true;
                            this.egg1.input.enableDrag();
                            this.egg2.inputEnabled = true;
                            this.egg2.input.enableDrag();
                            this.arrow1.visible = true;
                        }, this);
                    }, this);
                }, this);

            } else {
                game.add.tween(this.cplate).to({
                    x: 370,
                    y: 620
                }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                    this.arrow1.visible = true;
                    this.cplate.inputEnabled = true;
                }, this);
            }
        }, this);

        this.cheese_ani = game.add.sprite(234, 428, 'cheese_ani');
        this.cheese_ani.anchor.setTo(0.5);
        this.cheese_ani.visible = false;
        // this.cheese_ani.animations.add('cheese_ani');
        // this.cheese_ani.animations.play('cheese_ani',10,false);

        this.eggGp = game.add.group();

        this.ebowl = game.add.sprite(370, 620, 'ebowl');
        this.ebowl.anchor.setTo(0.5);
        this.eggGp.add(this.ebowl);

        this.egg_1 = game.add.sprite(340, 620, 'egg');
        this.egg_1.anchor.setTo(0.5);
        this.egg_1.scale.setTo(0.8);
        this.eggGp.add(this.egg_1);

        this.egg_2 = game.add.sprite(390, 620, 'egg');
        this.egg_2.anchor.setTo(0.5);
        this.egg_2.scale.setTo(0.8);
        this.eggGp.add(this.egg_2);

        this.efbowl = game.add.sprite(370, 635, 'efbowl');
        this.efbowl.anchor.setTo(0.5);
        this.eggGp.add(this.efbowl);

        this.egcnt = 0;


        this.egg1 = game.add.sprite(340, 620, 'egg');
        this.egg1.anchor.setTo(0.5);
        this.egg1.scale.setTo(0.8);
        this.egg1.alpha = 0;
        this.egg1.inputEnabled = true;
        this.egg1.input.enableDrag();
        this.egg1.events.onInputDown.add(function() {
            //game.world.bringToTop(this.pcup);
            this.arrow1.visible = false;
            this.arrow2.visible = true;
            this.egg_1.alpha = 0;
            this.egg1.alpha = 1;

        }, this);
        this.egg1.events.onInputUp.add(function() {
            this.egg1.inputEnabled = false;
            this.arrow2.visible = false;
            if ((game.input.activePointer.x > 155 && game.input.activePointer.x < 357 && game.input.activePointer.y > 352 && game.input.activePointer.y < 483)) {
                this.egcnt++;
                this.egg2.inputEnabled = false;
                this.egg1.visible = false;
                this.egg_ani.visible = true;
                this.egg_ani.animations.add('egg_ani');
                this.egg_ani.animations.play('egg_ani', 10, false).onComplete.add(function() {
                    game.add.tween(this.egg_ani).to({
                        alpha: 0
                    }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                        if (this.egcnt == 1) {
                            this.egg_ani.alpha = 1;
                            this.egg_ani.visible = false;
                            this.egg_ani.frame = 0;
                            this.egg2.inputEnabled = true;
                            this.arrow1.visible = true;
                        } else {
                            game.add.tween(this.eggGp).to({
                                x: 270
                            }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                                this.mix_rect.inputEnabled = true;
                                this.arrow3.visible = true;
                            }, this);
                        }
                    }, this);
                }, this);

            } else {
                game.add.tween(this.egg1).to({
                    x: 340,
                    y: 620
                }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                    this.arrow1.visible = true;
                    this.egg1.inputEnabled = true;
                    this.egg_1.alpha = 1;
                    this.egg1.alpha = 0;
                }, this);
            }
        }, this);
        this.eggGp.add(this.egg1);


        this.egg2 = game.add.sprite(390, 620, 'egg');
        this.egg2.anchor.setTo(0.5);
        this.egg2.scale.setTo(0.8);
        this.egg2.alpha = 0;
        this.egg2.inputEnabled = true;
        this.egg2.input.enableDrag();
        this.egg2.events.onInputDown.add(function() {
            //game.world.bringToTop(this.pcup);
            this.arrow1.visible = false;
            this.arrow2.visible = true;
            this.egg_2.alpha = 0;
            this.egg2.alpha = 1;
        }, this);
        this.egg2.events.onInputUp.add(function() {
            this.egg2.inputEnabled = false;
            this.arrow2.visible = false;
            if ((game.input.activePointer.x > 155 && game.input.activePointer.x < 357 && game.input.activePointer.y > 352 && game.input.activePointer.y < 483)) {
                this.egcnt++;
                this.egg1.inputEnabled = false;
                this.egg2.visible = false;
                this.egg_ani.visible = true;
                this.egg_ani.animations.add('egg_ani');
                this.egg_ani.animations.play('egg_ani', 10, false).onComplete.add(function() {
                    game.add.tween(this.egg_ani).to({
                        alpha: 0
                    }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                        if (this.egcnt == 1) {
                            this.egg_ani.alpha = 1;
                            this.egg_ani.visible = false;
                            this.egg_ani.frame = 0;
                            this.egg1.inputEnabled = true;
                            this.arrow1.visible = true;
                        } else {
                            game.add.tween(this.eggGp).to({
                                x: 270
                            }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                                this.mix_rect.inputEnabled = true;
                                this.arrow3.visible = true;

                            }, this);

                        }
                    }, this);
                }, this);

            } else {
                game.add.tween(this.egg2).to({
                    x: 390,
                    y: 620
                }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                    this.arrow1.visible = true;
                    this.egg2.inputEnabled = true;
                    this.egg_2.alpha = 1;
                    this.egg2.alpha = 0;
                }, this);
            }
        }, this);
        this.eggGp.add(this.egg2);

        this.egg_ani = game.add.sprite(201, 440, 'egg_ani');
        this.egg_ani.anchor.setTo(0.5);
        this.egg_ani.scale.setTo(0.8);
        this.egg_ani.visible = false;
        // this.egg_ani.animations.add('egg_ani');
        // this.egg_ani.animations.play('egg_ani',10,false);

        this.eggGp.x = 270;

        this.mix_rect = game.add.graphics(40, 350);
        this.mix_rect.beginFill(0x666666, 0);
        this.mix_rect.drawRect(0, 0, 80, 120);
        this.mix_rect.angle = 23;
        // this.mix_rect.inputEnabled=true;
        this.mix_rect.events.onInputDown.add(function() {
            this.arrow3.visible = false;
            this.mix_rect.inputEnabled = false;
            this.mix_ani.animations.add('mix_ani', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 8, 7, 6, 5, 6, 7, 8, 9, 8, 7, 6, 5, 6, 7, 8, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]);
            this.mix_ani.animations.play('mix_ani', 15, false).onComplete.add(function() {
                this.mix_ani.visible = false;
                this.mixi.visible = true;
                this.mbox.visible = true;

                game.add.tween(this.mcone1_1).to({
                    x: 350
                }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                    this.mbox.inputEnabled = true;
                    this.mbox.input.enableDrag();
                    this.arrow4.visible = true;

                }, this);

            }, this);
        }, this);

        this.mixi = game.add.sprite(109.5, 475.65, 'mixi');
        this.mixi.anchor.setTo(0.5);
        this.mixi.visible = false;

        /* this.mbox = game.add.sprite(172,534.8,'mbox');
         this.mbox.anchor.setTo(0.5);*/

        this.mcone1_1 = game.add.sprite(650, 534.8, 'mcone1_1');
        this.mcone1_1.anchor.setTo(0.5);
        // this.mcone1_1.inputEnabled=true;
        this.mcone1_1.events.onInputDown.add(function() {
            this.mcone1_1.inputEnabled = false;
            this.mconedrag = true;
            this.arrow5.visible = false;
            this.arrow6.visible = true;
            this.arrow6.x += 20;
            this.cake_rect.inputEnabled = true;
            game.world.bringToTop(this.mcone1_1);
        }, this);

        this.mbox = game.add.sprite(172, 534.8, 'mbox');
        this.mbox.anchor.setTo(0.5);
        this.mbox.visible = false;
        // this.mbox.scale.setTo(0.8);
        // this.mbox.inputEnabled=true;
        // this.mbox.input.enableDrag();
        this.mbox.events.onInputDown.add(function() {
            //game.world.bringToTop(this.pcup);
            this.arrow4.visible = false;
            this.arrow5.visible = true;
        }, this);
        this.mbox.events.onInputUp.add(function() {
            this.mbox.inputEnabled = false;
            this.arrow5.visible = false;
            if ((game.input.activePointer.x > 270 && game.input.activePointer.x < 421 && game.input.activePointer.y > 340 && game.input.activePointer.y < 481)) {
                this.mbox.visible = false;
                this.mix_drop.visible = true;
                this.mix_drop.animations.add('mix_drop');
                this.mix_drop.animations.play('mix_drop', 10, false).onComplete.add(function() {
                    game.add.tween(this.mix_drop).to({
                        alpha: 0
                    }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                        this.mcone1_1.loadTexture('mcone1_2');
                        game.add.tween(this.mixi).to({
                            x: -250
                        }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                            game.add.tween(this.treygp).to({
                                x: 20
                            }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                                this.mcone1_1.inputEnabled = true;
                                this.arrow5.visible = true;

                            }, this);
                            /*this.egg1.inputEnabled=true;
              this.egg1.input.enableDrag();
              this.egg2.inputEnabled=true;
              this.egg2.input.enableDrag();
            this.arrow1.visible=true;*/
                        }, this);
                    }, this);
                }, this);

            } else {
                game.add.tween(this.mbox).to({
                    x: 172,
                    y: 534.8
                }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                    this.mbox.inputEnabled = true;
                    this.arrow4.visible = true;
                }, this);
            }
        }, this);



        this.mix_drop = game.add.sprite(400, 410, 'mix_drop');
        this.mix_drop.anchor.setTo(0.5);
        this.mix_drop.scale.setTo(0.8);
        this.mix_drop.visible = false;
        // this.mix_drop.animations.add('mix_drop');
        // this.mix_drop.animations.play('mix_drop',10,false);

        this.plategp = game.add.group();

        this.plate = game.add.sprite(326.45, 556.8, 'plate');
        this.plate.anchor.setTo(0.5);
        this.plate.scale.setTo(0.8);
        this.plategp.add(this.plate);

        this.cupcake1 = game.add.sprite(326.45, 517, 'cupcake1');
        this.cupcake1.anchor.setTo(0.5);
        this.cupcake1.scale.setTo(0.7);
        this.cupcake1.visible = false;
        this.plategp.add(this.cupcake1);

        this.plategp.x = 450;

        this.treygp = game.add.group();

        this.cake_trey = game.add.sprite(242.25, 696.65, 'cake_trey');
        this.cake_trey.anchor.setTo(0.5);
        // this.cake_trey.inputEnabled=true;
        this.cake_trey.events.onInputDown.add(function() {
            this.cake_trey.inputEnabled = false;
            this.arrow6.visible = false;
            this.arrow6.x += 100;
            game.add.tween(this.treygp.scale).to({
                x: 0.4,
                y: 0.4
            }, 700, Phaser.Easing.Quadratic.Out, true);
            game.add.tween(this.treygp).to({
                x: 230,
                y: 20
            }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                this.treygp.visible = false;
                this.cake_ani1.visible = false;
                this.cake_ani2.visible = false;
                this.cake_ani3.visible = false;
                this.cake1.visible = true;
                this.cake2.visible = true;
                this.cake3.visible = true;
                this.ocake.visible = true;
                this.ovcir.inputEnabled = true;
                this.arrow7.visible = true;

            }, this);

        }, this);
        this.treygp.add(this.cake_trey);

        this.cake_ani1 = game.add.sprite(145, 671.15, 'cake_ani1');
        this.cake_ani1.anchor.setTo(0.5);
        // this.cake_ani1.animations.add('cake_ani1');
        // this.cake_ani1.animations.play('cake_ani1',10,false);
        this.treygp.add(this.cake_ani1);

        this.cake_ani2 = game.add.sprite(241.25, 666.15, 'cake_ani2');
        this.cake_ani2.anchor.setTo(0.5);
        // this.cake_ani2.animations.add('cake_ani1');
        // this.cake_ani2.animations.play('cake_ani1',10,false);
        this.treygp.add(this.cake_ani2);

        this.cake_ani3 = game.add.sprite(341.25, 667.15, 'cake_ani3');
        this.cake_ani3.anchor.setTo(0.5);
        // this.cake_ani3.animations.add('cake_ani1');
        // this.cake_ani3.animations.play('cake_ani1',10,false);
        this.treygp.add(this.cake_ani3);

        this.cake1 = game.add.sprite(142, 671.15, 'cake1');
        this.cake1.anchor.setTo(0.5);
        this.cake1.visible = false;
        this.treygp.add(this.cake1);

        this.cake2 = game.add.sprite(241.25, 666.15, 'cake2');
        this.cake2.anchor.setTo(0.5);
        this.cake2.visible = false;
        this.treygp.add(this.cake2);

        this.cupcake2 = game.add.sprite(338, 671, 'cupcake1');
        this.cupcake2.anchor.setTo(0.5);
        this.cupcake2.scale.setTo(0.4);
        this.cupcake2.visible = false;
        this.treygp.add(this.cupcake2);

        this.cake3 = game.add.sprite(338, 671, 'cake3');
        this.cake3.anchor.setTo(0.5);
        this.cake3.visible = false;
        // this.cake3.inputEnabled=true;
        this.cake3.events.onInputDown.add(function() {
            this.arrow6.visible = false;
            this.cake3.visible = false;
            this.cupcake2.visible = true;
            this.cake3.inputEnabled = false;
            game.add.tween(this.cupcake2.scale).to({
                x: 0.7,
                y: 0.7
            }, 700, Phaser.Easing.Quadratic.Out, true);
            game.add.tween(this.cupcake2).to({
                x: 326.45,
                y: 517
            }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                this.cupcake2.visible = false;
                this.cupcake1.visible = true;
                game.add.tween(this.treygp).to({
                    x: 480
                }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                    game.time.events.add(1000, function() {
                        game.add.tween(this.plategp).to({
                            x: -480
                        }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                            game.state.start('cooking2_screen');
                        }, this);
                    }, this);
                }, this);
            }, this);

        }, this);
        this.treygp.add(this.cake3);

        this.cake_ftrey = game.add.sprite(242.25, 699.15, 'cake_ftrey');
        this.cake_ftrey.anchor.setTo(0.5);
        this.treygp.add(this.cake_ftrey);

        this.cone_ani1 = game.add.sprite(156.25, 571.15, 'cone_ani1');
        this.cone_ani1.anchor.setTo(0.5);
        this.cone_ani1.visible = false;
        // this.cone_ani1.animations.add('cone_ani1');
        // this.cone_ani1.animations.play('cone_ani1',10,false);
        this.treygp.add(this.cone_ani1);

        this.cone_ani2 = game.add.sprite(256.25, 569, 'cone_ani1');
        this.cone_ani2.anchor.setTo(0.5);
        this.cone_ani2.visible = false;
        // this.cone_ani2.animations.add('cone_ani1');
        // this.cone_ani2.animations.play('cone_ani1',10,false);
        this.treygp.add(this.cone_ani2);

        this.cone_ani3 = game.add.sprite(356.25, 569, 'cone_ani1');
        this.cone_ani3.anchor.setTo(0.5);
        this.cone_ani3.visible = false;
        // this.cone_ani3.animations.add('cone_ani1');
        // this.cone_ani3.animations.play('cone_ani1',10,false);
        this.treygp.add(this.cone_ani3);

        this.treygp.x = 450;

        this.conecnt = 0;

        this.cake_rect = game.add.graphics(120, 630);
        this.cake_rect.beginFill(0x666666, 0);
        this.cake_rect.drawRect(0, 0, 85, 60);
        // this.cake_rect.inputEnabled=true;
        this.cake_rect.events.onInputDown.add(function() {
            this.conecnt++;
            this.cake_rect.inputEnabled = false;
            if (this.conecnt == 1) {
                this.arrow6.visible = false;
                this.arrow6.x += 100;
                this.mcone1_1.visible = false;
                this.cone_ani1.visible = true;
                this.cake_ani1.animations.add('cake_ani1');
                this.cake_ani1.animations.play('cake_ani1', 10, false);
                this.cone_ani1.animations.add('cone_ani1');
                this.cone_ani1.animations.play('cone_ani1', 10, false).onComplete.add(function() {
                    this.cone_ani1.visible = false;
                    this.mcone1_1.visible = true;
                    this.cake_rect.x = 220;
                    this.arrow6.visible = true;
                    this.cake_rect.inputEnabled = true;

                }, this);

            }

            if (this.conecnt == 2) {
                this.arrow6.visible = false;
                this.arrow6.x += 100;
                this.mcone1_1.visible = false;
                this.cone_ani2.visible = true;
                this.cake_ani2.animations.add('cake_ani1');
                this.cake_ani2.animations.play('cake_ani1', 10, false);
                this.cone_ani2.animations.add('cone_ani1');
                this.cone_ani2.animations.play('cone_ani1', 10, false).onComplete.add(function() {
                    this.cone_ani2.visible = false;
                    this.mcone1_1.visible = true;
                    this.cake_rect.x = 320;
                    this.arrow6.visible = true;
                    this.cake_rect.inputEnabled = true;

                }, this);

            }

            if (this.conecnt == 3) {
                this.arrow6.visible = false;
                this.arrow6.x -= 100;
                this.mcone1_1.visible = false;
                this.cone_ani3.visible = true;
                this.cake_ani3.animations.add('cake_ani1');
                this.cake_ani3.animations.play('cake_ani1', 10, false);
                this.cone_ani3.animations.add('cone_ani1');
                this.cone_ani3.animations.play('cone_ani1', 10, false).onComplete.add(function() {
                    this.cone_ani3.visible = false;
                    this.mcone1_1.visible = true;
                    this.cake_rect.x -= 200;
                    this.mconedrag = false;
                    //this.arrow6.visible=true;
                    //this.cake_rect.inputEnabled=true;
                    game.add.tween(this.mcone1_1).to({
                        x: 580
                    }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                        this.arrow7.visible = true;
                        this.ovcir.inputEnabled = true;
                    }, this);

                }, this);

            }


        }, this);





        var arro2x = [370, 180, 80, 180, 340, 145, 435, 330];
        var arro2y = [520, 390, 300, 430, 385, 580, 230, 230];

        for (i = 1; i <= 8; i++) {
            this['arrow' + i] = game.add.sprite(arro2x[i - 1], arro2y[i - 1], 'arrow');
            this['arrow' + i].anchor.setTo(0.5);
            this['arrow' + i].animations.add('arrow');
            this['arrow' + i].animations.play('arrow', 12, true);
            this['arrow' + i].visible = false;
            if (i == 1) {
                this['arrow' + i].visible = true;
            }

        }




        this.timer = game.add.sprite(-80, 150, 'timer');
        this.timer.anchor.setTo(0.5);
        this.timer.scale.setTo(0.8);

        this.morebtn = game.add.sprite(55, 749.55, 'morebtn');
        this.morebtn.anchor.setTo(0.5);
        // this.morebtn.scale.setTo(0);
        this.morebtn.inputEnabled = true;
        this.morebtn.input.useHandCursor = true;
        this.morebtn.events.onInputUp.add(this.moreLink, this);
        this.morebtn.events.onInputOver.add(this.btnOver, this);
        this.morebtn.events.onInputOut.add(this.btnOut, this);
        // this.levelGroup.add(this.morebtn);

        this.playbtn = game.add.sprite(431.4, 749.2, 'donebtn');
        this.playbtn.anchor.setTo(0.5);
        this.playbtn.scale.setTo(0);
        this.playbtn.inputEnabled = true;
        this.playbtn.input.useHandCursor = true;
        this.playbtn.events.onInputUp.add(this.enterRoom, this);
        this.playbtn.events.onInputOver.add(this.btnOver, this);
        this.playbtn.events.onInputOut.add(this.btnOut, this);
        // this.levelGroup.add(this.playbtn);


        if (Main.shutterOn[0]) {
            this.shutter = game.add.sprite(0, 0, 'shutterbg');
            game.add.tween(this.shutter).to({
                y: -850
            }, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {

            }, this);
        }


        this.logoVar = game.add.sprite(5, 5, 'logo');
        this.logoVar.scale.setTo(0.8);
        this.logoVar.inputEnabled = true
        this.logoVar.input.useHandCursor = true;
        this.logoVar.events.onInputUp.add(this.openLink, this);

        this.musicButton = game.add.sprite(427, 5, "soundicon");
        this.musicButton.scale.setTo(0.9);
        this.musicButton.inputEnabled = true
        this.musicButton.input.useHandCursor = true;
        this.musicButton.events.onInputUp.add(this.changemusic, this);
        if (!game.sound.mute) {
            this.musicButton.frame = 0;
        } else {
            this.musicButton.frame = 1;
        }
        this.effectFlag = [this.adress1, this.afhair1, this.ashoe1, this.abag1];
    },
    changemusic: function() {
        if (!game.sound.mute) {
            this.musicButton.frame = 1;
            game.sound.mute = true;
        } else {
            this.musicButton.frame = 0;
            game.sound.mute = false;
        };
    },
    updateyeblink: function() {
        this.aeyeblink.play('aeye_blink', 10, false);
    },
    changefun: function(evt) {
        this.annai[evt.id - 1] = 1;
        if (evt.id == 1) {
            evt.cnt++;
            if (evt.cnt <= 4) {
                this.abdress1.visible = true;
                this.abdress1.loadTexture('ebdress' + evt.cnt);
            } else {
                this.abdress1.visible = false;
            }
            this.adress1.loadTexture('edress' + evt.cnt);
            Main.elsaFlag[0] = evt.cnt;
            Main.elsaalpha[0] = 1;
            if (evt.cnt >= 12) {
                evt.cnt = 0;
            }

        }

        if (evt.id == 2) {
            evt.cnt++;
            this.afhair1.loadTexture('afhair000' + evt.cnt);
            this.abhair1.loadTexture('abhair000' + evt.cnt);
            Main.elsaFlag[1] = evt.cnt;
            Main.elsaalpha[1] = 1;
            if (evt.cnt >= 5) {
                evt.cnt = 0;
            }

        }

        if (evt.id == 3) {
            evt.cnt++;
            if (evt.cnt == 2) {
                this.abshoe1.visible = true;
            } else {
                this.abshoe1.visible = false;
            }
            if (evt.cnt == 3) {
                this.abshoe2.visible = true;
            } else {
                this.abshoe2.visible = false;
            }
            if (evt.cnt == 4) {
                this.abshoe3.visible = true;
            } else {
                this.abshoe3.visible = false;
            }
            this.ashoe1.loadTexture('eshoe' + evt.cnt);
            Main.elsaFlag[2] = evt.cnt;
            Main.elsaalpha[2] = 1;
            if (evt.cnt >= 12) {
                evt.cnt = 0;
            }

        }

        if (evt.id == 4) {
            evt.cnt++;
            this.abag1.alpha = 1;
            this.abag1.loadTexture('ebag' + evt.cnt);
            Main.elsaFlag[3] = evt.cnt;
            Main.elsaalpha[3] = 1;
            if (evt.cnt >= 12) {
                evt.cnt = 0;
            }

        }

        if (this.annai.indexOf(0) < 0) {
            game.add.tween(this.playbtn.scale).to({
                x: 1,
                y: 1
            }, 800, Phaser.Easing.Elastic.Out, true);
        }

        effectssd = game.add.sprite(this.effectFlag[evt.id - 1].worldPosition.x, this.effectFlag[evt.id - 1].worldPosition.y, 'effectssd');
        effectssd.anchor.setTo(0.5);
        effectssd.animations.add('effectssd');
        effectssd.animations.play('effectssd', 20, false).onComplete.add(function(evt) {
            evt.destroy();
        }, this);

    },
    update: function() {
        if (this.mconedrag) {
            this.mcone1_1.x = game.input.activePointer.x + 20;
            this.mcone1_1.y = game.input.activePointer.y - 65;
        }
    },
    openLink: function() {
        CreateLinksInGame("Frozen-Sisters-New-Year-Eve", "game", "logo");
    },
    moreLink: function() {
        CreateLinksInGame("Frozen-Sisters-New-Year-Eve", "game", "more");
    },
    btnOver: function(items) {
        items.scale.setTo(items.scale.x + 0.05);
        effectVar = game.add.sprite(items.x - 30, items.y - 80, 'effects');
        effectVar.anchor.setTo(0.5);
        effectVar.scale.setTo(2);
        effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
        effectVar.animations.play('glitter', 30, false);
    },
    btnOut: function(items) {
        items.scale.setTo(items.scale.x - 0.05);

    },
    removeGlitter: function(evt) {
        evt.kill();
    },
    enterRoom: function() {
        game.add.tween(this.shutter).to({
            y: 0
        }, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
            game.state.start('elsaScreen');
        });

    },
}


Main.cooking2_screen = function() {}

Main.cooking2_screen.prototype = {
    create: function() {
        this.annai = [0, 0, 0, 0];
        this.levelGroup = game.add.group();
        this.bg = game.add.sprite(0, 0, 'cbg');
        this.levelGroup.add(this.bg);

        this.ovengp = game.add.group();

        this.oven = game.add.sprite(352.65, 339.9, 'oven');
        this.oven.anchor.setTo(0.5);
        this.ovengp.add(this.oven);

        this.ocake = game.add.sprite(327.65, 297.35, 'ocake');
        this.ocake.anchor.setTo(0.5);
        this.ocake.visible = false;
        this.ovengp.add(this.ocake);

        this.ocake2 = game.add.sprite(327.65, 297.35, 'ocake2');
        this.ocake2.anchor.setTo(0.5);
        this.ocake2.alpha = 0;
        // this.ocake2.inputEnabled=true;
        this.ocake2.events.onInputDown.add(function() {
            this.ocake2.inputEnabled = false;
            this.ocake2.visible = false;
            this.treygp.visible = true;
            this.arrow8.visible = false;
            game.add.tween(this.treygp.scale).to({
                x: 1,
                y: 1
            }, 700, Phaser.Easing.Quadratic.Out, true);
            game.add.tween(this.treygp).to({
                x: 0,
                y: 0
            }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                this.ovcir.inputEnabled = true;
                this.arrow7.visible = true;


            }, this);
        }, this);
        this.ovengp.add(this.ocake2);

        this.oven_close = game.add.sprite(329.15, 282.1, 'oven_close');
        this.oven_close.anchor.setTo(0.5);
        this.ovengp.add(this.oven_close);

        this.oven_open = game.add.sprite(222.3, 287.95, 'oven_open');
        this.oven_open.anchor.setTo(0.5);
        this.oven_open.visible = false;
        this.ovengp.add(this.oven_open);

        this.ovcnt = 0;

        this.ovcir = game.add.graphics(435, 282);
        this.ovcir.beginFill(0x666666, 0);
        this.ovcir.drawCircle(0, 0, 40);
        // this.ovcir.inputEnabled=true;
        this.ovcir.events.onInputDown.add(function() {
            this.ovcnt++;
            this.ovcir.inputEnabled = false;
            this.arrow7.visible = false;
            if (this.ovcnt == 1) {
                this.arrow6.visible = true;
                this.oven_close.visible = false;
                this.oven_open.visible = true;
                this.cake_trey.inputEnabled = true;

            }
            if (this.ovcnt == 2) {
                this.oven_close.visible = true;
                this.oven_open.visible = false;
                game.add.tween(this.timer).to({
                    x: 80
                }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                    this.timer.animations.add('timer');
                    this.timer.animations.play('timer', 25, false).onComplete.add(function() {
                        game.add.tween(this.timer).to({
                            x: -80
                        }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                            this.ovcir.inputEnabled = true;
                            this.arrow7.visible = true;
                        }, this);
                    }, this);
                    game.add.tween(this.ocake2).to({
                        alpha: 1
                    }, 1700, Phaser.Easing.Quadratic.Out, true);
                    game.add.tween(this.ocake).to({
                        alpha: 0
                    }, 1700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {

                    }, this);
                }, this);

            }
            if (this.ovcnt == 3) {
                //this.arrow6.visible=true;
                this.oven_close.visible = false;
                this.oven_open.visible = true;
                this.arrow8.visible = true;
                this.ocake2.inputEnabled = true;

            }
            if (this.ovcnt == 4) {
                //this.arrow6.visible=true;
                this.oven_close.visible = true;
                this.oven_open.visible = false;
                game.add.tween(this.plategp).to({
                    x: 0
                }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                    this.cake3.inputEnabled = true;
                    this.arrow6.visible = true;
                }, this);
            }

        }, this);

        /*this.mcnt1=0;

       this.mcir = game.add.graphics(0,0);
        this.mcir.beginFill(0x666666,0.1);
        this.mcir.drawRect(0,0,504,800);
        this.mcir.inputEnabled=true;
        this.mcir.events.onInputDown.add(function(){
            this.mcnt1++;
          this['xcnt'+this.mcnt1]=game.input.activePointer.x;
          this['ycnt'+this.mcnt1]=game.input.activePointer.y;
        this.mcir = game.add.graphics(game.input.activePointer.x,game.input.activePointer.y);
        this.mcir.beginFill(0x000000,0.5);
        this.mcir.drawCircle(0,0,20);
        console.log(this['xcnt'+this.mcnt1]+':'+this['ycnt'+this.mcnt1]);
        //console.log(this['ycnt'+this.mcnt1]);

        },this);*/


        this.table = game.add.sprite(252, 659.5, 'table');
        this.table.anchor.setTo(0.5);

        this.bowlgrp = game.add.group();

        this.dropcnt = 0;

        this.bowl2 = game.add.sprite(247.75, 520, 'bowl2');
        this.bowl2.anchor.setTo(0.5);
        // this.bowl2.inputEnabled=true;
        this.bowl2.events.onInputDown.add(function() {
            this.bowl2.inputEnabled = false;
            this.dropcnt++;
            this.arrow2.visible = false;
            if (this.dropcnt == 1) {
                this.bowlgrp.alpha = 0;
                this.mix_ani2.visible = false;
                this.creame_drop1.visible = true;
                this.creame_drop1.animations.add('creame_drop1');
                this.creame_drop1.animations.play('creame_drop1', 10, false).onComplete.add(function() {
                    this.creame_drop1.visible = false;
                    this.cbowl1.visible = true;
                    this.bowl2.inputEnabled = true;
                    this.arrow2.visible = true;

                }, this);
                game.time.events.add(50, function() {
                    this.blue_bowlani.visible = true;
                    this.blue_bowlani.animations.add('blue_bowlani', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
                    this.blue_bowlani.animations.play('blue_bowlani', 10, false).onComplete.add(function() {

                    }, this);
                }, this);
            }

            if (this.dropcnt == 2) {
                //this.bowlgrp.alpha=0;
                this.cbowl1.visible = false;
                this.creame_drop2.visible = true;
                this.creame_drop2.animations.add('creame_drop2');
                this.creame_drop2.animations.play('creame_drop2', 10, false).onComplete.add(function() {
                    this.creame_drop2.visible = false;
                    this.cbowl2.visible = true;
                    this.bowl2.inputEnabled = true;
                    this.arrow2.visible = true;

                }, this);
                game.time.events.add(50, function() {
                    this.purple_bowlani.visible = true;
                    this.purple_bowlani.animations.add('purple_bowlani', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
                    this.purple_bowlani.animations.play('purple_bowlani', 10, false).onComplete.add(function() {

                    }, this);
                }, this);
            }

            if (this.dropcnt == 3) {
                //this.bowlgrp.visible=false;
                this.cbowl2.visible = false;
                this.creame_drop3.visible = true;
                this.creame_drop3.animations.add('creame_drop3');
                this.creame_drop3.animations.play('creame_drop3', 10, false).onComplete.add(function() {
                    this.creame_drop3.visible = false;
                    this.cbowl3.visible = true;
                    this.bowl2.inputEnabled = true;
                    this.arrow2.visible = true;

                }, this);
                game.time.events.add(50, function() {
                    this.green_bowlani.visible = true;
                    this.green_bowlani.animations.add('green_bowlani', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
                    this.green_bowlani.animations.play('green_bowlani', 10, false).onComplete.add(function() {

                    }, this);
                }, this);
            }

            if (this.dropcnt == 4) {
                //this.bowlgrp.visible=false;
                this.cbowl3.visible = false;
                this.creame_drop4.visible = true;
                this.creame_drop4.animations.add('creame_drop4');
                this.creame_drop4.animations.play('creame_drop4', 10, false).onComplete.add(function() {
                    this.creame_drop4.visible = false;
                    this.bowlgrp.alpha = 1;
                    // this.bowl2.inputEnabled=true;
                    game.add.tween(this.bowlgrp).to({
                        x: -450
                    }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                        game.add.tween(this.cbottlegp).to({
                            x: 0
                        }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                            this.cbottle1.inputEnabled = true;
                            this.cbottle1.input.enableDrag();
                            this.arrow9.visible = true;
                        }, this)
                    }, this);


                }, this);
                game.time.events.add(50, function() {
                    this.red_bowlani.visible = true;
                    this.red_bowlani.animations.add('red_bowlani', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
                    this.red_bowlani.animations.play('red_bowlani', 10, false).onComplete.add(function() {


                    }, this);
                }, this);
            }

        }, this);
        this.bowlgrp.add(this.bowl2);

        this.bcreame = game.add.sprite(248.75, 533.5, 'bcreame');
        this.bcreame.anchor.setTo(0.5);
        this.bcreame.scale.setTo(0);
        this.bowlgrp.add(this.bcreame);

        this.boil = game.add.sprite(244.05, 506.3, 'boil');
        this.boil.anchor.setTo(0.5);
        this.boil.scale.setTo(0);
        this.bowlgrp.add(this.boil);

        this.bsugar = game.add.sprite(210, 529.4, 'bsugar');
        this.bsugar.anchor.setTo(0.5);
        this.bsugar.scale.setTo(0);
        this.bowlgrp.add(this.bsugar);

        this.cpowder_ani = game.add.sprite(340, 350, 'cpowder_ani');
        this.cpowder_ani.anchor.setTo(0.5);
        this.cpowder_ani.visible = false;
        // this.cpowder_ani.animations.add('cpowder_ani');
        // this.cpowder_ani.animations.play('cpowder_ani',10,false);
        this.bowlgrp.add(this.cpowder_ani);

        this.glass_ani1 = game.add.sprite(340, 420, 'glass_ani1');
        this.glass_ani1.anchor.setTo(0.5);
        this.glass_ani1.visible = false;
        // this.glass_ani1.animations.add('glass_ani1');
        // this.glass_ani1.animations.play('glass_ani1',10,false);
        this.bowlgrp.add(this.glass_ani1);

        this.sugar_ani2 = game.add.sprite(340, 420, 'sugar_ani2');
        this.sugar_ani2.anchor.setTo(0.5);
        this.sugar_ani2.visible = false;
        // this.sugar_ani2.animations.add('sugar_ani2');
        // this.sugar_ani2.animations.play('sugar_ani2',10,false);
        this.bowlgrp.add(this.sugar_ani2);

        this.mix_ani2 = game.add.sprite(255, 380, 'mix_ani2');
        this.mix_ani2.anchor.setTo(0.5);
        this.mix_ani2.visible = false;
        // this.mix_ani2.animations.add('mix_ani2',[0,1,2,3,4,5,6,7,8,9,10,13,14,15,16,17,18,19,20,21,24,25,26,27]);
        // this.mix_ani2.animations.play('mix_ani2',10,false);
        this.bowlgrp.add(this.mix_ani2);

        this.fbowl2 = game.add.sprite(247.75, 548, 'fbowl2');
        this.fbowl2.anchor.setTo(0.5);
        this.bowlgrp.add(this.fbowl2);

        this.bowlgrp.x = -450;

        this.cbowl1 = game.add.sprite(228, 571, 'creame_drop2');
        this.cbowl1.anchor.setTo(0.5);
        this.cbowl1.angle = 52;
        this.cbowl1.visible = false;

        this.cbowl2 = game.add.sprite(277, 550, 'creame_drop3');
        this.cbowl2.anchor.setTo(0.5);
        this.cbowl2.angle = -47;
        this.cbowl2.visible = false;

        this.cbowl3 = game.add.sprite(277, 540, 'creame_drop4');
        this.cbowl3.anchor.setTo(0.5);
        this.cbowl3.angle = -60;
        this.cbowl3.visible = false;

        this.creame_bowl2 = game.add.sprite(670, 670, 'creame_bowl2');
        this.creame_bowl2.anchor.setTo(0.5);
        // this.creame_bowl2.inputEnabled=true;
        // this.creame_bowl2.input.enableDrag();
        this.creame_bowl2.events.onInputDown.add(function() {
            //game.world.bringToTop(this.pcup);
            this.arrow1.visible = false;
            this.arrow2.visible = true;
        }, this);
        this.creame_bowl2.events.onInputUp.add(function() {
            this.creame_bowl2.inputEnabled = false;
            this.arrow2.visible = false;
            if ((game.input.activePointer.x > 126 && game.input.activePointer.x < 379 && game.input.activePointer.y > 305 && game.input.activePointer.y < 505)) {
                this.creame_bowl2.visible = false;
                this.cpowder_ani.visible = true;
                game.add.tween(this.bcreame).to({
                    y: 513
                }, 1700, Phaser.Easing.Quadratic.Out, true);
                game.add.tween(this.bcreame.scale).to({
                    x: 1,
                    y: 1
                }, 1700, Phaser.Easing.Quadratic.Out, true);
                this.cpowder_ani.animations.add('cpowder_ani');
                this.cpowder_ani.animations.play('cpowder_ani', 10, false).onComplete.add(function() {
                    game.add.tween(this.cpowder_ani).to({
                        alpha: 0
                    }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                        game.add.tween(this.oglass).to({
                            x: 370
                        }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                            this.oglass.inputEnabled = true;
                            this.oglass.input.enableDrag();
                            this.arrow1.visible = true;
                        }, this);
                    }, this);
                }, this);

            } else {
                game.add.tween(this.creame_bowl2).to({
                    x: 370,
                    y: 670
                }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                    this.creame_bowl2.inputEnabled = true;
                    this.arrow1.visible = true;
                }, this);
            }
        }, this);

        this.oglass = game.add.sprite(670, 670, 'oglass');
        this.oglass.anchor.setTo(0.5);
        // this.oglass.inputEnabled=true;
        // this.oglass.input.enableDrag();
        this.oglass.events.onInputDown.add(function() {
            //game.world.bringToTop(this.pcup);
            this.arrow1.visible = false;
            this.arrow2.visible = true;
        }, this);
        this.oglass.events.onInputUp.add(function() {
            this.oglass.inputEnabled = false;
            this.arrow2.visible = false;
            if ((game.input.activePointer.x > 126 && game.input.activePointer.x < 379 && game.input.activePointer.y > 305 && game.input.activePointer.y < 505)) {
                this.oglass.visible = false;
                this.glass_ani1.visible = true;
                game.add.tween(this.boil).to({
                    y: 513
                }, 1700, Phaser.Easing.Quadratic.Out, true);
                game.add.tween(this.boil.scale).to({
                    x: 1,
                    y: 1
                }, 1700, Phaser.Easing.Quadratic.Out, true);
                this.glass_ani1.animations.add('glass_ani1');
                this.glass_ani1.animations.play('glass_ani1', 10, false).onComplete.add(function() {
                    game.add.tween(this.glass_ani1).to({
                        alpha: 0
                    }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                        game.add.tween(this.sugar_bowl2).to({
                            x: 370
                        }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                            this.sugar_bowl2.inputEnabled = true;
                            this.sugar_bowl2.input.enableDrag();
                            this.arrow1.visible = true;
                        }, this);
                    }, this);
                }, this);

            } else {
                game.add.tween(this.oglass).to({
                    x: 370,
                    y: 670
                }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                    this.oglass.inputEnabled = true;
                    this.arrow1.visible = true;
                }, this);
            }
        }, this);

        this.sugar_bowl2 = game.add.sprite(670, 670, 'sugar_bowl2');
        this.sugar_bowl2.anchor.setTo(0.5);
        // this.sugar_bowl2.inputEnabled=true;
        // this.sugar_bowl2.input.enableDrag();
        this.sugar_bowl2.events.onInputDown.add(function() {
            //game.world.bringToTop(this.pcup);
            this.arrow1.visible = false;
            this.arrow2.visible = true;
        }, this);
        this.sugar_bowl2.events.onInputUp.add(function() {
            this.sugar_bowl2.inputEnabled = false;
            this.arrow2.visible = false;
            if ((game.input.activePointer.x > 126 && game.input.activePointer.x < 379 && game.input.activePointer.y > 305 && game.input.activePointer.y < 505)) {
                this.sugar_bowl2.visible = false;
                this.sugar_ani2.visible = true;
                game.add.tween(this.bsugar).to({
                    y: 513
                }, 1700, Phaser.Easing.Quadratic.Out, true);
                game.add.tween(this.bsugar.scale).to({
                    x: 0.8,
                    y: 0.8
                }, 1700, Phaser.Easing.Quadratic.Out, true);
                this.sugar_ani2.animations.add('sugar_ani2');
                this.sugar_ani2.animations.play('sugar_ani2', 10, false).onComplete.add(function() {
                    game.add.tween(this.sugar_ani2).to({
                        alpha: 0
                    }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                        game.add.tween(this.mixi2).to({
                            x: 370
                        }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                            this.mixi2.inputEnabled = true;
                            this.mixi2.input.enableDrag();
                            this.arrow1.visible = true;
                        }, this);
                    }, this);
                }, this);

            } else {
                game.add.tween(this.sugar_bowl2).to({
                    x: 370,
                    y: 670
                }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                    this.arrow1.visible = true;
                    this.sugar_bowl2.inputEnabled = true;
                }, this);
            }
        }, this);

        this.mixi2 = game.add.sprite(670, 670, 'mixi2');
        this.mixi2.anchor.setTo(0.5);
        this.mixi2.scale.setTo(0.8);
        // this.mixi2.inputEnabled=true;
        // this.mixi2.input.enableDrag();
        this.mixi2.events.onInputDown.add(function() {
            //game.world.bringToTop(this.pcup);
            this.arrow1.visible = false;
            this.arrow2.visible = true;
        }, this);
        this.mixi2.events.onInputUp.add(function() {
            this.mixi2.inputEnabled = false;
            this.arrow2.visible = false;
            if ((game.input.activePointer.x > 126 && game.input.activePointer.x < 379 && game.input.activePointer.y > 305 && game.input.activePointer.y < 505)) {
                this.mixi2.visible = false;
                this.mix_ani2.visible = true;
                game.add.tween(this.bsugar).to({
                    alpha: 0
                }, 1700, Phaser.Easing.Quadratic.Out, true);
                game.add.tween(this.bcreame).to({
                    alpha: 0
                }, 1700, Phaser.Easing.Quadratic.Out, true);
                game.add.tween(this.boil).to({
                    alpha: 0
                }, 1700, Phaser.Easing.Quadratic.Out, true);
                this.mix_ani2.animations.add('mix_ani2', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 13, 14, 15, 16, 17, 18, 19, 20, 21, 24, 25, 26, 27]);
                this.mix_ani2.animations.play('mix_ani2', 10, false).onComplete.add(function() {
                    //game.add.tween(this.mix_ani2).to({alpha:0},700,Phaser.Easing.Quadratic.Out,true).onComplete.add(function(){
                    game.add.tween(this.clrgp1).to({
                        x: 0
                    }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                        this.bowl2.inputEnabled = true;
                        this.arrow2.visible = true;
                    }, this);
                    //},this);
                }, this);

            } else {
                game.add.tween(this.mixi2).to({
                    x: 370,
                    y: 670
                }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                    this.mixi2.inputEnabled = true;
                    this.arrow1.visible = true;
                }, this);
            }
        }, this);

        this.conegrp = game.add.group();

        this.clr_cone1 = game.add.sprite(101.15, 464.2, 'clr_cone1_0001');
        this.clr_cone1.anchor.setTo(0.5);
        // this.clr_cone1.inputEnabled=true;
        this.clr_cone1.events.onInputDown.add(function() {
            this.clr_cone1.inputEnabled = false;
            this.arrow11.visible = false;
            Main.clrArr[0] = 1;
            game.add.tween(this.conegrp).to({
                x: -450
            }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                game.add.tween(this.cupcakegroup).to({
                    x: 0
                }, 700, Phaser.Easing.Quadratic.Out, true);
                game.add.tween(this.cbowl).to({
                    x: 380
                }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                    this.arrow1.visible = true;
                    this.cbowl.inputEnabled = true;
                    this.cbowl.input.enableDrag();
                }, this);
            }, this);
        }, this);
        this.conegrp.add(this.clr_cone1);

        this.clr_cone2 = game.add.sprite(194, 464.2, 'clr_cone2_0001');
        this.clr_cone2.anchor.setTo(0.5);
        // this.clr_cone2.inputEnabled=true;
        this.clr_cone2.events.onInputDown.add(function() {
            this.clr_cone2.inputEnabled = false;
            this.arrow11.visible = false;
            Main.clrArr[0] = 2;
            game.add.tween(this.conegrp).to({
                x: -450
            }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                game.add.tween(this.cupcakegroup).to({
                    x: 0
                }, 700, Phaser.Easing.Quadratic.Out, true);
                game.add.tween(this.cbowl).to({
                    x: 380
                }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                    this.arrow1.visible = true;
                    this.cbowl.inputEnabled = true;
                    this.cbowl.input.enableDrag();
                }, this);
            }, this);
        }, this);
        this.conegrp.add(this.clr_cone2);

        this.clr_cone3 = game.add.sprite(285.75, 468.85, 'clr_cone3_0001');
        this.clr_cone3.anchor.setTo(0.5);
        // this.clr_cone3.inputEnabled=true;
        this.clr_cone3.events.onInputDown.add(function() {
            this.clr_cone3.inputEnabled = false;
            this.arrow11.visible = false;
            Main.clrArr[0] = 3;
            game.add.tween(this.conegrp).to({
                x: -450
            }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                game.add.tween(this.cupcakegroup).to({
                    x: 0
                }, 700, Phaser.Easing.Quadratic.Out, true);
                game.add.tween(this.cbowl).to({
                    x: 380
                }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                    this.arrow1.visible = true;
                    this.cbowl.inputEnabled = true;
                    this.cbowl.input.enableDrag();
                }, this);
            }, this);
        }, this);
        this.conegrp.add(this.clr_cone3);

        this.clr_cone4 = game.add.sprite(382.6, 472.65, 'clr_cone4_0001');
        this.clr_cone4.anchor.setTo(0.5);
        // this.clr_cone4.inputEnabled=true;
        this.clr_cone4.events.onInputDown.add(function() {
            this.clr_cone4.inputEnabled = false;
            this.arrow11.visible = false;
            Main.clrArr[0] = 4;
            game.add.tween(this.conegrp).to({
                x: -450
            }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                game.add.tween(this.cupcakegroup).to({
                    x: 0
                }, 700, Phaser.Easing.Quadratic.Out, true);
                game.add.tween(this.cbowl).to({
                    x: 380
                }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                    this.arrow1.visible = true;
                    this.cbowl.inputEnabled = true;
                    this.cbowl.input.enableDrag();
                }, this);
            }, this);
        }, this);
        this.conegrp.add(this.clr_cone4);

        this.conegrp.x = -450;

        this.clr_fill_ani1 = game.add.sprite(115, 244, 'clr_fill_ani1');
        this.clr_fill_ani1.anchor.setTo(0.5);
        this.clr_fill_ani1.visible = false;
        // this.clr_fill_ani1.animations.add('clr_fill_ani1');
        // this.clr_fill_ani1.animations.play('clr_fill_ani1',10,false);

        this.clr_fill_ani2 = game.add.sprite(210, 244, 'clr_fill_ani2');
        this.clr_fill_ani2.anchor.setTo(0.5);
        this.clr_fill_ani2.visible = false;
        // this.clr_fill_ani2.animations.add('clr_fill_ani2');
        // this.clr_fill_ani2.animations.play('clr_fill_ani2',10,false);

        this.clr_fill_ani3 = game.add.sprite(300, 250, 'clr_fill_ani3');
        this.clr_fill_ani3.anchor.setTo(0.5);
        this.clr_fill_ani3.visible = false;
        // this.clr_fill_ani3.animations.add('clr_fill_ani3');
        // this.clr_fill_ani3.animations.play('clr_fill_ani3',10,false);

        this.clr_fill_ani4 = game.add.sprite(400, 246, 'clr_fill_ani4');
        this.clr_fill_ani4.anchor.setTo(0.5);
        this.clr_fill_ani4.visible = false;
        // this.clr_fill_ani4.animations.add('clr_fill_ani4');
        // this.clr_fill_ani4.animations.play('clr_fill_ani4',10,false);





        this.clrgp1 = game.add.group();



        this.blue_bowlani = game.add.sprite(105.2, 662.5, 'blue_bowlani');
        this.blue_bowlani.anchor.setTo(0.5);
        // this.blue_bowlani.visible=false;
        // this.blue_bowlani.animations.add('blue_bowlani');
        // this.blue_bowlani.animations.play('blue_bowlani',10,false);
        this.clrgp1.add(this.blue_bowlani);

        this.purple_bowlani = game.add.sprite(256.85, 662.85, 'purple_bowlani');
        this.purple_bowlani.anchor.setTo(0.5);
        // this.purple_bowlani.visible=false;
        // this.purple_bowlani.animations.add('purple_bowlani');
        // this.purple_bowlani.animations.play('purple_bowlani',10,false);
        this.clrgp1.add(this.purple_bowlani);

        this.red_bowlani = game.add.sprite(431, 592.3, 'red_bowlani');
        this.red_bowlani.anchor.setTo(0.5);
        // this.red_bowlani.visible=false;
        // this.red_bowlani.animations.add('red_bowlani');
        // this.red_bowlani.animations.play('red_bowlani',10,false);
        this.clrgp1.add(this.red_bowlani);

        this.green_bowlani = game.add.sprite(402.15, 662, 'green_bowlani');
        this.green_bowlani.anchor.setTo(0.5);
        // this.green_bowlani.visible=false;
        // this.green_bowlani.animations.add('green_bowlani');
        // this.green_bowlani.animations.play('green_bowlani',10,false);
        this.clrgp1.add(this.green_bowlani);

        this.clrgp1.x = 480;

        this.clrbowl1 = game.add.sprite(105.2, 662.5, 'clrbowl1');
        this.clrbowl1.anchor.setTo(0.5);
        this.clrbowl1.visible = false;
        // this.clrbowl1.inputEnabled=true;
        // this.clrbowl1.input.enableDrag();
        this.clrbowl1.events.onInputDown.add(function() {
            //game.world.bringToTop(this.pcup);
            this.arrow10.visible = false;
            this.arrow11.visible = true;
        }, this);
        this.clrbowl1.events.onInputUp.add(function() {
            this.clrbowl1.inputEnabled = false;
            this.arrow11.visible = false;
            if ((game.input.activePointer.x > 36 && game.input.activePointer.x < 153 && game.input.activePointer.y > 252 && game.input.activePointer.y < 364)) {
                this.arrow11.x += 90;
                this.arrow10.x += 150;
                this.clrbowl1.visible = false;
                this.clr_fill_ani1.visible = true;
                this.clr_fill_ani1.animations.add('clr_fill_ani1');
                this.clr_fill_ani1.animations.play('clr_fill_ani1', 10, false).onComplete.add(function() {
                    game.add.tween(this.clr_fill_ani1).to({
                        alpha: 0
                    }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                        this.clr_cone1.loadTexture('clr_cone1_0002');
                        this.clrbowl2.inputEnabled = true;
                        this.clrbowl2.input.enableDrag();
                        this.arrow10.visible = true;
                    }, this);
                }, this);

            } else {
                game.add.tween(this.clrbowl1).to({
                    x: 105.2,
                    y: 662.5
                }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                    this.clrbowl1.inputEnabled = true;
                    this.arrow10.visible = true;
                }, this);
            }
        }, this);

        this.clrbowl2 = game.add.sprite(256.85, 662.85, 'clrbowl2');
        this.clrbowl2.anchor.setTo(0.5);
        this.clrbowl2.visible = false;
        // this.clrbowl2.inputEnabled=true;
        // this.clrbowl2.input.enableDrag();
        this.clrbowl2.events.onInputDown.add(function() {
            //game.world.bringToTop(this.pcup);
            this.arrow10.visible = false;
            this.arrow11.visible = true;
        }, this);
        this.clrbowl2.events.onInputUp.add(function() {
            this.clrbowl2.inputEnabled = false;
            this.arrow11.visible = false;
            if ((game.input.activePointer.x > 131 && game.input.activePointer.x < 236 && game.input.activePointer.y > 252 && game.input.activePointer.y < 364)) {
                this.arrow11.x += 90;
                this.arrow10.x += 150;
                this.clrbowl2.visible = false;
                this.clr_fill_ani2.visible = true;
                this.clr_fill_ani2.animations.add('clr_fill_ani2');
                this.clr_fill_ani2.animations.play('clr_fill_ani2', 10, false).onComplete.add(function() {
                    game.add.tween(this.clr_fill_ani2).to({
                        alpha: 0
                    }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                        this.clr_cone2.loadTexture('clr_cone2_0002');
                        this.clrbowl3.inputEnabled = true;
                        this.clrbowl3.input.enableDrag();
                        this.arrow10.visible = true;
                    }, this);
                }, this);

            } else {
                game.add.tween(this.clrbowl2).to({
                    x: 256.85,
                    y: 662.85
                }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                    this.clrbowl2.inputEnabled = true;
                    this.arrow10.visible = true;
                }, this);
            }
        }, this);

        this.clrbowl4 = game.add.sprite(431, 592.3, 'clrbowl4');
        this.clrbowl4.anchor.setTo(0.5);
        this.clrbowl4.visible = false;
        // this.clrbowl4.inputEnabled=true;
        // this.clrbowl4.input.enableDrag();
        this.clrbowl4.events.onInputDown.add(function() {
            //game.world.bringToTop(this.pcup);
            this.arrow10.visible = false;
            this.arrow11.visible = true;
        }, this);
        this.clrbowl4.events.onInputUp.add(function() {
            this.clrbowl4.inputEnabled = false;
            this.arrow11.visible = false;
            if ((game.input.activePointer.x > 311 && game.input.activePointer.x < 423 && game.input.activePointer.y > 252 && game.input.activePointer.y < 364)) {
                this.arrow11.x = 221;
                this.arrow11.y = 243;
                this.clrbowl4.visible = false;
                this.clr_fill_ani4.visible = true;
                this.clr_fill_ani4.animations.add('clr_fill_ani4');
                this.clr_fill_ani4.animations.play('clr_fill_ani4', 10, false).onComplete.add(function() {
                    game.add.tween(this.clr_fill_ani4).to({
                        alpha: 0
                    }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                        this.clr_cone4.loadTexture('clr_cone4_0002');
                        this.clr_cone1.inputEnabled = true;
                        this.clr_cone2.inputEnabled = true;
                        this.clr_cone3.inputEnabled = true;
                        this.clr_cone4.inputEnabled = true;
                        this.arrow11.visible = true;

                        /*game.add.tween(this.oglass).to({x:370},700,Phaser.Easing.Quadratic.Out,true).onComplete.add(function(){
             this.oglass.inputEnabled=true;
         this.oglass.input.enableDrag();
         this.arrow1.visible=true;
         	},this);*/
                    }, this);
                }, this);

            } else {
                game.add.tween(this.clrbowl4).to({
                    x: 431,
                    y: 592.3
                }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                    this.arrow10.visible = true;
                    this.clrbowl4.inputEnabled = true;
                }, this);
            }
        }, this);

        this.clrbowl3 = game.add.sprite(402.15, 662, 'clrbowl3');
        this.clrbowl3.anchor.setTo(0.5);
        this.clrbowl3.visible = false;
        // this.clrbowl3.inputEnabled=true;
        // this.clrbowl3.input.enableDrag();
        this.clrbowl3.events.onInputDown.add(function() {
            //game.world.bringToTop(this.pcup);
            this.arrow10.visible = false;
            this.arrow11.visible = true;
        }, this);
        this.clrbowl3.events.onInputUp.add(function() {
            this.clrbowl3.inputEnabled = false;
            this.arrow11.visible = false;
            if ((game.input.activePointer.x > 219 && game.input.activePointer.x < 328 && game.input.activePointer.y > 252 && game.input.activePointer.y < 364)) {
                this.arrow11.x += 90;
                this.arrow10.x += 40;
                this.arrow10.y -= 70;
                this.clrbowl3.visible = false;
                this.clr_fill_ani3.visible = true;
                this.clr_fill_ani3.animations.add('clr_fill_ani3');
                this.clr_fill_ani3.animations.play('clr_fill_ani3', 10, false).onComplete.add(function() {
                    game.add.tween(this.clr_fill_ani3).to({
                        alpha: 0
                    }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                        this.clr_cone3.loadTexture('clr_cone3_0002');
                        this.clrbowl4.inputEnabled = true;
                        this.clrbowl4.input.enableDrag();
                        this.arrow10.visible = true;
                    }, this);
                }, this);

            } else {
                game.add.tween(this.clrbowl3).to({
                    x: 402.15,
                    y: 662
                }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                    this.arrow10.visible = true;
                    this.clrbowl3.inputEnabled = true;
                }, this);
            }
        }, this);

        this.creame_drop1 = game.add.sprite(214, 435, 'creame_drop1');
        this.creame_drop1.anchor.setTo(0.5);
        this.creame_drop1.visible = false;
        // this.creame_drop1.animations.add('creame_drop1');
        // this.creame_drop1.animations.play('creame_drop1',10,false);

        this.creame_drop2 = game.add.sprite(363, 432, 'creame_drop2');
        this.creame_drop2.anchor.setTo(0.5);
        this.creame_drop2.visible = false;
        // this.creame_drop2.animations.add('creame_drop2');
        // this.creame_drop2.animations.play('creame_drop2',10,false);

        this.creame_drop3 = game.add.sprite(260, 445, 'creame_drop3');
        this.creame_drop3.anchor.setTo(0.5);
        this.creame_drop3.visible = false;
        // this.creame_drop3.animations.add('creame_drop3');
        // this.creame_drop3.animations.play('creame_drop3',10,false);

        this.creame_drop4 = game.add.sprite(310, 385, 'creame_drop4');
        this.creame_drop4.anchor.setTo(0.5);
        this.creame_drop4.visible = false;
        // this.creame_drop4.animations.add('creame_drop4');
        // this.creame_drop4.animations.play('creame_drop4',10,false);

        this.cbottlegp = game.add.group();

        this.cbottle1 = game.add.sprite(72.8, 545.4, 'cbottle1');
        this.cbottle1.anchor.setTo(0.5);
        // this.cbottle1.inputEnabled=true;
        // this.cbottle1.input.enableDrag();
        this.cbottle1.events.onInputDown.add(function() {
            game.world.bringToTop(this.cbottle1);
            this.arrow9.visible = false;
            this.arrow10.visible = true;
        }, this);
        this.cbottle1.events.onInputUp.add(function() {
            this.cbottle1.inputEnabled = false;
            this.arrow10.visible = false;
            if ((game.input.activePointer.x > 41 && game.input.activePointer.x < 168 && game.input.activePointer.y > 583 && game.input.activePointer.y < 673)) {
                this.arrow9.x += 60;
                this.arrow10.x += 150;
                this.cbottle1.visible = false;
                this.clr_ani1.visible = true;
                this.clr_ani1.animations.add('clr_ani1');
                this.clr_ani1.animations.play('clr_ani1', 10, false).onComplete.add(function() {
                    game.add.tween(this.clr_ani1).to({
                        alpha: 0
                    }, 700, Phaser.Easing.Quadratic.Out, true);
                }, this);
                game.time.events.add(1000, function() {
                    this.blue_bowlani.animations.add('blue_bowlani', [12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28]);
                    this.blue_bowlani.animations.play('blue_bowlani', 10, false).onComplete.add(function() {
                        this.blue_bowlani.visible = false;
                        this.clrbowl1.visible = true;
                        this.cbottle2.inputEnabled = true;
                        this.cbottle2.input.enableDrag();
                        this.arrow9.visible = true;
                    }, this);
                }, this);
            } else {
                game.add.tween(this.cbottle1).to({
                    x: 72.8,
                    y: 545.4
                }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                    this.cbottle1.inputEnabled = true;
                    this.arrow9.visible = true;
                }, this);
            }
        }, this);

        this.cbottle2 = game.add.sprite(135.05, 543.95, 'cbottle2');
        this.cbottle2.anchor.setTo(0.5);
        // this.cbottle2.inputEnabled=true;
        // this.cbottle2.input.enableDrag();
        this.cbottle2.events.onInputDown.add(function() {
            game.world.bringToTop(this.cbottle2);
            this.arrow9.visible = false;
            this.arrow10.visible = true;
        }, this);
        this.cbottle2.events.onInputUp.add(function() {
            this.cbottle2.inputEnabled = false;
            this.arrow10.visible = false;
            if ((game.input.activePointer.x > 192 && game.input.activePointer.x < 323 && game.input.activePointer.y > 583 && game.input.activePointer.y < 668)) {
                this.arrow9.x += 60;
                this.arrow10.x += 150;
                this.cbottle2.visible = false;
                this.clr_ani2.visible = true;
                this.clr_ani2.animations.add('clr_ani2');
                this.clr_ani2.animations.play('clr_ani2', 10, false).onComplete.add(function() {
                    game.add.tween(this.clr_ani2).to({
                        alpha: 0
                    }, 700, Phaser.Easing.Quadratic.Out, true);
                }, this);
                game.time.events.add(1000, function() {
                    this.purple_bowlani.animations.add('purple_bowlani', [12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28]);
                    this.purple_bowlani.animations.play('purple_bowlani', 10, false).onComplete.add(function() {
                        this.purple_bowlani.visible = false;
                        this.clrbowl2.visible = true;
                        this.cbottle3.inputEnabled = true;
                        this.cbottle3.input.enableDrag();
                        this.arrow9.visible = true;
                    }, this);
                }, this);
            } else {
                game.add.tween(this.cbottle2).to({
                    x: 135.05,
                    y: 543.95
                }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                    this.cbottle2.inputEnabled = true;
                    this.arrow9.visible = true;
                }, this);
            }
        }, this);

        this.cbottle3 = game.add.sprite(200.2, 543.95, 'cbottle3');
        this.cbottle3.anchor.setTo(0.5);
        // this.cbottle3.inputEnabled=true;
        // this.cbottle3.input.enableDrag();
        this.cbottle3.events.onInputDown.add(function() {
            game.world.bringToTop(this.cbottle3);
            this.arrow9.visible = false;
            this.arrow10.visible = true;
        }, this);
        this.cbottle3.events.onInputUp.add(function() {
            this.cbottle3.inputEnabled = false;
            this.arrow10.visible = false;
            if ((game.input.activePointer.x > 331 && game.input.activePointer.x < 467 && game.input.activePointer.y > 583 && game.input.activePointer.y < 668)) {
                this.arrow9.x += 65;
                this.arrow10.x += 40;
                this.arrow10.y -= 70;
                this.cbottle3.visible = false;
                this.clr_ani3.visible = true;
                this.clr_ani3.animations.add('clr_ani3');
                this.clr_ani3.animations.play('clr_ani3', 10, false).onComplete.add(function() {
                    game.add.tween(this.clr_ani3).to({
                        alpha: 0
                    }, 700, Phaser.Easing.Quadratic.Out, true);
                }, this);
                game.time.events.add(1000, function() {
                    this.green_bowlani.animations.add('green_bowlani', [12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28]);
                    this.green_bowlani.animations.play('green_bowlani', 10, false).onComplete.add(function() {
                        this.green_bowlani.visible = false;
                        this.clrbowl3.visible = true;
                        this.cbottle4.inputEnabled = true;
                        this.cbottle4.input.enableDrag();
                        this.arrow9.visible = true;
                    }, this);
                }, this);
            } else {
                game.add.tween(this.cbottle3).to({
                    x: 200.2,
                    y: 543.95
                }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                    this.cbottle3.inputEnabled = true;
                    this.arrow9.visible = true;
                }, this);
            }
        }, this);

        this.cbottle4 = game.add.sprite(266.2, 543.95, 'cbottle4');
        this.cbottle4.anchor.setTo(0.5);
        // this.cbottle4.inputEnabled=true;
        // this.cbottle4.input.enableDrag();
        this.cbottle4.events.onInputDown.add(function() {
            game.world.bringToTop(this.cbottle4);
            this.arrow9.visible = false;
            this.arrow10.visible = true;
        }, this);
        this.cbottle4.events.onInputUp.add(function() {
            this.cbottle4.inputEnabled = false;
            this.arrow10.visible = false;
            if ((game.input.activePointer.x > 374 && game.input.activePointer.x < 486 && game.input.activePointer.y > 510 && game.input.activePointer.y < 593)) {
                this.cbottle4.visible = false;
                this.clr_ani4.visible = true;
                this.arrow10.x = 104;
                this.arrow10.y = 560;
                this.arrow9.x = 75;
                this.arrow9.y = 237;
                this.clr_ani4.animations.add('clr_ani4');
                this.clr_ani4.animations.play('clr_ani4', 10, false).onComplete.add(function() {
                    game.add.tween(this.clr_ani4).to({
                        alpha: 0
                    }, 700, Phaser.Easing.Quadratic.Out, true);
                }, this);
                game.time.events.add(1000, function() {
                    this.red_bowlani.animations.add('red_bowlani', [12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28]);
                    this.red_bowlani.animations.play('red_bowlani', 10, false).onComplete.add(function() {
                        this.red_bowlani.visible = false;
                        this.clrbowl4.visible = true;
                        //game.add.tween(this.clr_ani4).to({alpha:0},700,Phaser.Easing.Quadratic.Out,true).onComplete.add(function(){
                        game.add.tween(this.conegrp).to({
                            x: 0
                        }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                            this.clrbowl1.inputEnabled = true;
                            this.clrbowl1.input.enableDrag();
                            this.arrow10.visible = true;
                        }, this);
                        //},this);
                    }, this);
                }, this);
            } else {
                game.add.tween(this.cbottle4).to({
                    x: 266.2,
                    y: 543.95
                }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                    this.cbottle4.inputEnabled = true;
                    this.arrow9.visible = true;
                }, this);
            }
        }, this);
        this.cbottlegp.add(this.cbottle4);
        this.cbottlegp.add(this.cbottle3);
        this.cbottlegp.add(this.cbottle2);
        this.cbottlegp.add(this.cbottle1);

        this.cbottlegp.x = -350;

        this.clr_ani1 = game.add.sprite(153, 595.4, 'clr_ani1');
        this.clr_ani1.anchor.setTo(0.5);
        this.clr_ani1.visible = false;
        // this.clr_ani1.animations.add('clr_ani1');
        // this.clr_ani1.animations.play('clr_ani1',10,false);

        this.clr_ani2 = game.add.sprite(300, 595.4, 'clr_ani2');
        this.clr_ani2.anchor.setTo(0.5);
        this.clr_ani2.visible = false;
        // this.clr_ani2.animations.add('clr_ani2');
        // this.clr_ani2.animations.play('clr_ani2',10,false);

        this.clr_ani3 = game.add.sprite(410, 595.4, 'clr_ani3');
        this.clr_ani3.anchor.setTo(0.5);
        this.clr_ani3.visible = false;
        // this.clr_ani3.animations.add('clr_ani3');
        // this.clr_ani3.animations.play('clr_ani3',10,false);

        this.clr_ani4 = game.add.sprite(370, 538, 'clr_ani4');
        this.clr_ani4.anchor.setTo(0.5);
        this.clr_ani4.visible = false;
        this.clr_ani4.animations.add('clr_ani4');
        this.clr_ani4.animations.play('clr_ani4', 10, false);

        this.cupcakegroup = game.add.group();

        this.bglass = game.add.sprite(153, 590, 'bglass');
        this.bglass.anchor.setTo(0.5);
        this.bglass.scale.setTo(0.75);
        this.cupcakegroup.add(this.bglass);

        this.candy_drop = game.add.sprite(159, 548, 'candy_drop');
        this.candy_drop.anchor.setTo(0.5);
        this.candy_drop.scale.setTo(0.9);
        // this.candy_drop.frame=5;
        this.cupcakegroup.add(this.candy_drop);

        this.cbowl_ani = game.add.sprite(230, 380, 'cbowl_ani');
        this.cbowl_ani.anchor.setTo(0.5);
        this.cbowl_ani.scale.setTo(0.7);
        this.cbowl_ani.visible = false;
        // this.cbowl_ani.frame=5;
        //  this.cbowl_ani.animations.add('cbowl_ani');
        // this.cbowl_ani.animations.play('cbowl_ani',15,false);
        this.cupcakegroup.add(this.cbowl_ani);

        this.ctop = game.add.sprite(156.35, 427, 'ctop');
        this.ctop.anchor.setTo(0.5);
        this.ctop.scale.setTo(0.7);
        this.ctop.visible = false;
        this.cupcakegroup.add(this.ctop);

        this.cake_cover1 = game.add.sprite(156.35, 465, 'cake_cover0001');
        this.cake_cover1.anchor.setTo(0.5);
        this.cake_cover1.scale.setTo(0.7);
        this.cake_cover1.visible = false;
        this.cupcakegroup.add(this.cake_cover1);

        this.cone_clr1_ani1 = game.add.sprite(136, 311, 'cone_clr1_ani1');
        this.cone_clr1_ani1.anchor.setTo(0.5);
        this.cone_clr1_ani1.scale.setTo(0.7);
        // this.cone_clr1_ani1.frame=9;
        this.cone_clr1_ani1.visible = false;
        this.cupcakegroup.add(this.cone_clr1_ani1);

        this.cone_clr1_ani2 = game.add.sprite(104, 279, 'cone_clr1_ani2');
        this.cone_clr1_ani2.anchor.setTo(0.5);
        this.cone_clr1_ani2.scale.setTo(0.7);
        // this.cone_clr1_ani2.frame=9;
        this.cone_clr1_ani2.visible = false;
        this.cupcakegroup.add(this.cone_clr1_ani2);

        this.cone_clr2_ani1 = game.add.sprite(136, 311, 'cone_clr2_ani1');
        this.cone_clr2_ani1.anchor.setTo(0.5);
        this.cone_clr2_ani1.scale.setTo(0.7);
        // this.cone_clr2_ani1.frame=9;
        this.cone_clr2_ani1.visible = false;
        this.cupcakegroup.add(this.cone_clr2_ani1);

        this.cone_clr2_ani2 = game.add.sprite(102, 279, 'cone_clr2_ani2');
        this.cone_clr2_ani2.anchor.setTo(0.5);
        this.cone_clr2_ani2.scale.setTo(0.7);
        // this.cone_clr2_ani2.frame=9;
        this.cone_clr2_ani2.visible = false;
        this.cupcakegroup.add(this.cone_clr2_ani2);

        this.cone_clr3_ani1 = game.add.sprite(136, 311, 'cone_clr3_ani1');
        this.cone_clr3_ani1.anchor.setTo(0.5);
        this.cone_clr3_ani1.scale.setTo(0.7);
        // this.cone_clr3_ani1.frame=9;
        this.cone_clr3_ani1.visible = false;
        this.cupcakegroup.add(this.cone_clr3_ani1);

        this.cone_clr3_ani2 = game.add.sprite(102, 278, 'cone_clr3_ani2');
        this.cone_clr3_ani2.anchor.setTo(0.5);
        this.cone_clr3_ani2.scale.setTo(0.7);
        // this.cone_clr3_ani2.frame=9;
        this.cone_clr3_ani2.visible = false;
        this.cupcakegroup.add(this.cone_clr3_ani2);

        this.cone_clr4_ani1 = game.add.sprite(136, 311, 'cone_clr4_ani1');
        this.cone_clr4_ani1.anchor.setTo(0.5);
        this.cone_clr4_ani1.scale.setTo(0.7);
        // this.cone_clr4_ani1.frame=9;
        this.cone_clr4_ani1.visible = false;
        this.cupcakegroup.add(this.cone_clr4_ani1);

        this.cone_clr4_ani2 = game.add.sprite(102, 279, 'cone_clr4_ani2');
        this.cone_clr4_ani2.anchor.setTo(0.5);
        this.cone_clr4_ani2.scale.setTo(0.7);
        // this.cone_clr4_ani2.frame=9;
        this.cone_clr4_ani2.visible = false;
        this.cupcakegroup.add(this.cone_clr4_ani2);

        this.fctoping1_1 = game.add.sprite(156, 407, 'ctoping1_0001');
        this.fctoping1_1.anchor.setTo(0.5);
        this.fctoping1_1.scale.setTo(0.7);
        this.fctoping1_1.visible = false;
        this.cupcakegroup.add(this.fctoping1_1);

        this.fctoping2_1 = game.add.sprite(144, 333, 'ctoping2_0001');
        this.fctoping2_1.anchor.setTo(0.5);
        this.fctoping2_1.scale.setTo(0.7);
        this.fctoping2_1.visible = false;
        this.cupcakegroup.add(this.fctoping2_1);

        this.fglass = game.add.sprite(153, 595, 'fglass');
        this.fglass.anchor.setTo(0.5);
        this.fglass.scale.setTo(0.75);
        this.cupcakegroup.add(this.fglass);

        this.cupcakegroup.x = -350;

        this.cbowl = game.add.sprite(680, 662, 'cbowl');
        this.cbowl.anchor.setTo(0.5);
        this.cbowl.scale.setTo(0.7);
        // this.cbowl.visible=false;
        // this.cbowl.inputEnabled=true;
        // this.cbowl.input.enableDrag();
        this.cbowl.events.onInputDown.add(function() {
            //game.world.bringToTop(this.pcup);
            this.arrow1.visible = false;
            this.arrow12.visible = true;
        }, this);
        this.cbowl.events.onInputUp.add(function() {
            this.cbowl.inputEnabled = false;
            this.arrow12.visible = false;
            if ((game.input.activePointer.x > 90 && game.input.activePointer.x < 248 && game.input.activePointer.y > 340 && game.input.activePointer.y < 449)) {
                this.cbowl.visible = false;
                game.time.events.add(500, function() {
                    this.candy_drop.animations.add('candy_drop');
                    this.candy_drop.animations.play('candy_drop', 15, false);
                }, this);
                this.cbowl_ani.visible = true;
                this.cbowl_ani.animations.add('cbowl_ani');
                this.cbowl_ani.animations.play('cbowl_ani', 10, false).onComplete.add(function() {
                    game.add.tween(this.cbowl_ani).to({
                        alpha: 0
                    }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                        game.add.tween(this.fplategp).to({
                            x: 0
                        }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                            this.fcupcake1.inputEnabled = true;
                            this.fcupcake1.input.enableDrag();
                            this.arrow1.visible = true;
                        }, this);
                    }, this);
                }, this);

            } else {
                game.add.tween(this.cbowl).to({
                    x: 380,
                    y: 662
                }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                    this.cbowl.inputEnabled = true;
                    this.arrow1.visible = true;
                }, this);
            }
        }, this);

        this.fplategp = game.add.group();

        this.plate = game.add.sprite(380, 662, 'plate');
        this.plate.anchor.setTo(0.5);
        this.plate.scale.setTo(0.7);
        this.fplategp.add(this.plate);

        this.fcupcake1 = game.add.sprite(380, 642, 'cupcake1');
        this.fcupcake1.anchor.setTo(0.5);
        this.fcupcake1.scale.setTo(0.6);
        // this.fcupcake1.visible=false;
        // this.fcupcake1.inputEnabled=true;
        // this.fcupcake1.input.enableDrag();
        this.fcupcake1.events.onInputDown.add(function() {
            //game.world.bringToTop(this.pcup);
            this.arrow1.visible = false;
            this.arrow12.visible = true;
        }, this);
        this.fcupcake1.events.onInputUp.add(function() {
            this.fcupcake1.inputEnabled = false;
            this.arrow12.visible = false;
            if ((game.input.activePointer.x > 77 && game.input.activePointer.x < 243 && game.input.activePointer.y > 352 && game.input.activePointer.y < 471)) {
                this.fcupcake1.visible = false;
                this.ctop.visible = true;
                this.cake_cover1.visible = true;
                game.add.tween(this.plate).to({
                    x: 650
                }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                    this.fcone1.loadTexture('clr_cone' + Main.clrArr[0] + '_0002');
                    game.add.tween(this.fcone1).to({
                        x: 388
                    }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                        this.fcone1.inputEnabled = true;
                        this.fcone1.input.enableDrag();
                        this.arrow1.visible = true;
                    }, this);
                }, this);


            } else {
                game.add.tween(this.fcupcake1).to({
                    x: 380,
                    y: 642
                }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                    this.fcupcake1.inputEnabled = true;
                    this.arrow1.visible = true;
                }, this);
            }
        }, this);
        this.fplategp.add(this.fcupcake1);

        this.fplategp.x = 450;

        this.fcone1 = game.add.sprite(688, 662, 'clr_cone1_0002');
        this.fcone1.anchor.setTo(0.5);
        this.fcone1.scale.setTo(0.7);
        // this.fcone1.visible=false;
        // this.fcone1.inputEnabled=true;
        // this.fcone1.input.enableDrag();
        this.fcone1.events.onInputDown.add(function() {
            //game.world.bringToTop(this.pcup);
            this.arrow1.visible = false;
            this.arrow12.visible = true;
        }, this);
        this.fcone1.events.onInputUp.add(function() {
            this.fcone1.inputEnabled = false;
            this.arrow12.visible = false;
            if ((game.input.activePointer.x > 90 && game.input.activePointer.x < 248 && game.input.activePointer.y > 340 && game.input.activePointer.y < 449)) {
                this.fcone1.visible = false;
                // Main.clrArr[0]=4;
                if (Main.clrArr[0] == 1) {
                    this.cone_clr1_ani1.visible = true;
                    this.cone_clr1_ani1.animations.add('cone_clr1_ani1');
                    this.cone_clr1_ani1.animations.play('cone_clr1_ani1', 10, false).onComplete.add(function() {
                        this.cone_clr1_ani1.visible = false;
                        this.cone_clr1_ani2.visible = true;
                        this.cone_clr1_ani2.animations.add('cone_clr1_ani2');
                        this.cone_clr1_ani2.animations.play('cone_clr1_ani2', 10, false).onComplete.add(function() {
                            game.add.tween(this.icongp).to({
                                x: 0
                            }, 700, Phaser.Easing.Quadratic.Out, true);

                        }, this);
                    }, this);
                }
                if (Main.clrArr[0] == 2) {
                    this.cone_clr2_ani1.visible = true;
                    this.cone_clr2_ani1.animations.add('cone_clr2_ani1');
                    this.cone_clr2_ani1.animations.play('cone_clr2_ani1', 10, false).onComplete.add(function() {
                        this.cone_clr2_ani1.visible = false;
                        this.cone_clr2_ani2.visible = true;
                        this.cone_clr2_ani2.animations.add('cone_clr2_ani2');
                        this.cone_clr2_ani2.animations.play('cone_clr2_ani2', 10, false).onComplete.add(function() {
                            game.add.tween(this.icongp).to({
                                x: 0
                            }, 700, Phaser.Easing.Quadratic.Out, true);

                        }, this);
                    }, this);
                }

                if (Main.clrArr[0] == 3) {
                    this.cone_clr3_ani1.visible = true;
                    this.cone_clr3_ani1.animations.add('cone_clr3_ani1');
                    this.cone_clr3_ani1.animations.play('cone_clr3_ani1', 10, false).onComplete.add(function() {
                        this.cone_clr3_ani1.visible = false;
                        this.cone_clr3_ani2.visible = true;
                        this.cone_clr3_ani2.animations.add('cone_clr3_ani2');
                        this.cone_clr3_ani2.animations.play('cone_clr3_ani2', 10, false).onComplete.add(function() {
                            game.add.tween(this.icongp).to({
                                x: 0
                            }, 700, Phaser.Easing.Quadratic.Out, true);

                        }, this);
                    }, this);
                }
                if (Main.clrArr[0] == 4) {
                    this.cone_clr4_ani1.visible = true;
                    this.cone_clr4_ani1.animations.add('cone_clr4_ani1');
                    this.cone_clr4_ani1.animations.play('cone_clr4_ani1', 10, false).onComplete.add(function() {
                        this.cone_clr4_ani1.visible = false;
                        this.cone_clr4_ani2.visible = true;
                        this.cone_clr4_ani2.animations.add('cone_clr4_ani2');
                        this.cone_clr4_ani2.animations.play('cone_clr4_ani2', 10, false).onComplete.add(function() {
                            game.add.tween(this.icongp).to({
                                x: 0
                            }, 700, Phaser.Easing.Quadratic.Out, true);

                        }, this);
                    }, this);
                }

            } else {
                game.add.tween(this.fcone1).to({
                    x: 388,
                    y: 662
                }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                    this.fcone1.inputEnabled = true;
                    this.arrow1.visible = true;
                }, this);
            }
        }, this);

        this.icongp = game.add.group();

        this.icon_panel = game.add.sprite(445, 340, 'icon_panel');
        this.icon_panel.anchor.setTo(0.5);
        this.icongp.add(this.icon_panel);

        this.cupgp = game.add.group();

        var cupx = [419.1, 419.1, 419.1, 419.1, 340, 145, 435, 330, 75, 104, 78, 158];
        var cupy = [187.6, 298.85, 405.25, 515.65, 385, 580, 230, 230, 437, 560, 245, 340];

        for (i = 1; i <= 4; i++) {
            this['cupi' + i] = game.add.sprite(cupx[i - 1], cupy[i - 1], 'cupi000' + i);
            this['cupi' + i].anchor.setTo(0.5);
            this['cupi' + i].inputEnabled = true;
            this['cupi' + i].id = i;
            this['cupi' + i].cnt = 1;
            this['cupi' + i].events.onInputOver.add(this.btnOver, this);
            this['cupi' + i].events.onInputOut.add(this.btnOut, this);
            this['cupi' + i].events.onInputDown.add(this.changefun, this);
            this.cupgp.add(this['cupi' + i]);
        }

        this.cupgp2 = game.add.group();

        var cupx = [419.1, 419.1, 419.1, 419.1, 340, 145, 435, 330, 75, 104, 78, 158];
        var cupy = [170, 285, 400, 515.65, 385, 580, 230, 230, 437, 560, 245, 340];

        for (i = 1; i <= 4; i++) {
            this['ccone' + i] = game.add.sprite(cupx[i - 1], cupy[i - 1], 'clr_cone' + i + '_0002');
            this['ccone' + i].anchor.setTo(0.5);
            this['ccone' + i].scale.setTo(0.42);
            this['ccone' + i].inputEnabled = true;
            this['ccone' + i].id = i;
            this['ccone' + i].cnt = 4;
            this['ccone' + i].events.onInputOver.add(this.btnOver, this);
            this['ccone' + i].events.onInputOut.add(this.btnOut, this);
            this['ccone' + i].events.onInputDown.add(this.changefun, this);
            this.cupgp2.add(this['ccone' + i]);
        }
        this.cupgp2.visible = false;

        this.tpgp = game.add.group();

        var topx1 = [419.1, 419.1, 419.1, 419.1, 340, 145, 435, 330, 75, 104, 78, 158];
        var topy1 = [187.6, 298.85, 405.25, 515.65, 385, 580, 230, 230, 437, 560, 245, 340];

        for (i = 1; i <= 4; i++) {
            this['ctoping1_' + i] = game.add.sprite(topx1[i - 1], topy1[i - 1], 'ctoping1_000' + i);
            this['ctoping1_' + i].anchor.setTo(0.5);
            this['ctoping1_' + i].scale.setTo(0.7);
            this['ctoping1_' + i].inputEnabled = true;
            this['ctoping1_' + i].id = i;
            this['ctoping1_' + i].cnt = 2;
            this['ctoping1_' + i].events.onInputOver.add(this.btnOver, this);
            this['ctoping1_' + i].events.onInputOut.add(this.btnOut, this);
            this['ctoping1_' + i].events.onInputDown.add(this.changefun, this);
            this.tpgp.add(this['ctoping1_' + i]);
        }
        this.tpgp.visible = false;

        this.tpgp2 = game.add.group();

        var topx2 = [419.1, 419.1, 419.1, 419.1, 340, 145, 435, 330, 75, 104, 78, 158];
        var topy2 = [187.6, 298.85, 405.25, 515.65, 385, 580, 230, 230, 437, 560, 245, 340];

        for (i = 1; i <= 4; i++) {
            this['ctoping2_' + i] = game.add.sprite(topx2[i - 1], topy2[i - 1], 'ctoping2_000' + i);
            this['ctoping2_' + i].anchor.setTo(0.5);
            this['ctoping2_' + i].scale.setTo(0.7);
            this['ctoping2_' + i].inputEnabled = true;
            this['ctoping2_' + i].id = i;
            this['ctoping2_' + i].cnt = 3;
            this['ctoping2_' + i].events.onInputOver.add(this.btnOver, this);
            this['ctoping2_' + i].events.onInputOut.add(this.btnOut, this);
            this['ctoping2_' + i].events.onInputDown.add(this.changefun, this);
            this.tpgp2.add(this['ctoping2_' + i]);
        }
        this.tpgp2.visible = false;

        this.grcnt = 1;

        this.forwardbtn = game.add.sprite(472, 611, 'forwardbtn');
        this.forwardbtn.anchor.setTo(0.5);
        this.forwardbtn.scale.setTo(1.2);
        this.forwardbtn.inputEnabled = true;
        this.forwardbtn.events.onInputDown.add(function() {
            this.grcnt++;
            if (this.grcnt == 2) {
                this.backwardbtn.visible = true;
                this.cupgp.visible = false;
                this.cupgp2.visible = true;
                this.tpgp2.visible = false;
            }
            if (this.grcnt == 3) {
                this.backwardbtn.visible = true;
                this.cupgp2.visible = false;
                this.tpgp2.visible = false;
                this.tpgp.visible = true;
            }
            if (this.grcnt == 4) {
                this.forwardbtn.visible = false;
                this.cupgp2.visible = false;
                this.tpgp2.visible = true;
                this.tpgp.visible = false;
            }

        }, this);
        this.icongp.add(this.forwardbtn);

        this.backwardbtn = game.add.sprite(370, 611, 'forwardbtn');
        this.backwardbtn.anchor.setTo(0.5);
        this.backwardbtn.scale.setTo(1.2);
        this.backwardbtn.scale.x = -this.backwardbtn.scale.x;
        this.backwardbtn.inputEnabled = true;
        this.backwardbtn.visible = false;
        this.backwardbtn.events.onInputDown.add(function() {
            this.grcnt--;
            if (this.grcnt == 1) {
                this.backwardbtn.visible = false;
                this.cupgp.visible = true;
                this.cupgp2.visible = false;
                this.tpgp.visible = false;
            }
            if (this.grcnt == 2) {
                // this.backwardbtn.visible = false;
                this.cupgp2.visible = true;
                this.cupgp.visible = false;
                this.tpgp.visible = false;
            }
            if (this.grcnt == 3) {
                this.forwardbtn.visible = true;
                this.cupgp2.visible = false;
                this.tpgp2.visible = false;
                this.tpgp.visible = true;
            }

        }, this);
        this.icongp.add(this.backwardbtn);
        this.icongp.add(this.cupgp);
        this.icongp.add(this.cupgp2);
        this.icongp.add(this.tpgp);
        this.icongp.add(this.tpgp2);

        this.icongp.x = 240;




        var arro2x = [370, 240, 80, 180, 340, 145, 435, 330, 75, 104, 78, 158];
        var arro2y = [550, 340, 300, 430, 385, 580, 230, 230, 437, 560, 245, 340];

        for (i = 1; i <= 12; i++) {
            this['arrow' + i] = game.add.sprite(arro2x[i - 1], arro2y[i - 1], 'arrow');
            this['arrow' + i].anchor.setTo(0.5);
            this['arrow' + i].animations.add('arrow');
            this['arrow' + i].animations.play('arrow', 12, true);
            this['arrow' + i].visible = false;
            if (i == 1) {
                // this['arrow'+i].visible=true;
            }

        }




        this.timer = game.add.sprite(-80, 150, 'timer');
        this.timer.anchor.setTo(0.5);
        this.timer.scale.setTo(0.8);

        this.morebtn = game.add.sprite(55, 749.55, 'morebtn');
        this.morebtn.anchor.setTo(0.5);
        // this.morebtn.scale.setTo(0);
        this.morebtn.inputEnabled = true;
        this.morebtn.input.useHandCursor = true;
        this.morebtn.events.onInputUp.add(this.moreLink, this);
        this.morebtn.events.onInputOver.add(this.btnOver, this);
        this.morebtn.events.onInputOut.add(this.btnOut, this);
        // this.levelGroup.add(this.morebtn);

        this.playbtn = game.add.sprite(431.4, 749.2, 'donebtn');
        this.playbtn.anchor.setTo(0.5);
        this.playbtn.scale.setTo(0);
        this.playbtn.inputEnabled = true;
        this.playbtn.input.useHandCursor = true;
        this.playbtn.events.onInputUp.add(this.enterRoom, this);
        this.playbtn.events.onInputOver.add(this.btnOver, this);
        this.playbtn.events.onInputOut.add(this.btnOut, this);
        // this.levelGroup.add(this.playbtn);


        game.add.tween(this.bowlgrp).to({
            x: 0
        }, 700, Phaser.Easing.Quadratic.Out, true);
        game.add.tween(this.creame_bowl2).to({
            x: 370
        }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
            this.creame_bowl2.inputEnabled = true;
            this.creame_bowl2.input.enableDrag();
            this.arrow1.visible = true;
        }, this);


        if (Main.shutterOn[0]) {
            this.shutter = game.add.sprite(0, -850, 'shutterbg');
            /*game.add.tween(this.shutter).to({y:-850}, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
         
            },this);*/
        }


        this.logoVar = game.add.sprite(5, 5, 'logo');
        this.logoVar.scale.setTo(0.8);
        this.logoVar.inputEnabled = true
        this.logoVar.input.useHandCursor = true;
        this.logoVar.events.onInputUp.add(this.openLink, this);

        this.musicButton = game.add.sprite(427, 5, "soundicon");
        this.musicButton.scale.setTo(0.9);
        this.musicButton.inputEnabled = true
        this.musicButton.input.useHandCursor = true;
        this.musicButton.events.onInputUp.add(this.changemusic, this);
        if (!game.sound.mute) {
            this.musicButton.frame = 0;
        } else {
            this.musicButton.frame = 1;
        }
        this.effectFlag = [this.cake_cover1, this.fctoping1_1, this.fctoping2_1, this.cone_clr1_ani2];
    },
    changemusic: function() {
        if (!game.sound.mute) {
            this.musicButton.frame = 1;
            game.sound.mute = true;
        } else {
            this.musicButton.frame = 0;
            game.sound.mute = false;
        };
    },
    updateyeblink: function() {
        this.aeyeblink.play('aeye_blink', 10, false);
    },
    changefun: function(evt) {
        this.annai[evt.cnt - 1] = 1;

        if (evt.cnt == 1) {
            this.cake_cover1.loadTexture('cake_cover000' + evt.id);
            Main.cakeArr[0] = evt.id;

            effectssd = game.add.sprite(this.effectFlag[evt.cnt - 1].worldPosition.x, this.effectFlag[evt.cnt - 1].worldPosition.y, 'effectssd');
            effectssd.anchor.setTo(0.5);
            effectssd.animations.add('effectssd');
            effectssd.animations.play('effectssd', 20, false).onComplete.add(function(evt) {
                evt.destroy();
            }, this);
        }

        if (evt.cnt == 2) {
            this.fctoping1_1.visible = true;
            this.fctoping1_1.loadTexture('ctoping1_000' + evt.id);
            Main.cakeArr[1] = evt.id;

            effectssd = game.add.sprite(this.effectFlag[evt.cnt - 1].worldPosition.x, this.effectFlag[evt.cnt - 1].worldPosition.y, 'effectssd');
            effectssd.anchor.setTo(0.5);
            effectssd.animations.add('effectssd');
            effectssd.animations.play('effectssd', 20, false).onComplete.add(function(evt) {
                evt.destroy();
            }, this);
        }

        if (evt.cnt == 3) {
            this.fctoping2_1.visible = true;
            this.fctoping2_1.loadTexture('ctoping2_000' + evt.id);
            Main.cakeArr[2] = evt.id;

            effectssd = game.add.sprite(this.effectFlag[evt.cnt - 1].worldPosition.x, this.effectFlag[evt.cnt - 1].worldPosition.y, 'effectssd');
            effectssd.anchor.setTo(0.5);
            effectssd.animations.add('effectssd');
            effectssd.animations.play('effectssd', 20, false).onComplete.add(function(evt) {
                evt.destroy();
            }, this);
        }

        if (evt.cnt == 4) {

            this.cone_clr1_ani2.loadTexture('cone_clr' + evt.id + '_ani2');
            this.cone_clr2_ani2.loadTexture('cone_clr' + evt.id + '_ani2');
            this.cone_clr3_ani2.loadTexture('cone_clr' + evt.id + '_ani2');
            this.cone_clr4_ani2.loadTexture('cone_clr' + evt.id + '_ani2');
            this.cone_clr1_ani2.frame = 9;
            this.cone_clr2_ani2.frame = 9;
            this.cone_clr3_ani2.frame = 9;
            this.cone_clr4_ani2.frame = 9;
            Main.clrArr[0] = evt.id;

            effectssd = game.add.sprite(153, 392, 'effectssd');
            effectssd.anchor.setTo(0.5);
            effectssd.animations.add('effectssd');
            effectssd.animations.play('effectssd', 20, false).onComplete.add(function(evt) {
                evt.destroy();
            }, this);
        }

        if (this.annai.indexOf(0) < 0) {
            game.add.tween(this.playbtn.scale).to({
                x: 1,
                y: 1
            }, 800, Phaser.Easing.Elastic.Out, true);
        }



    },
    update: function() {
        if (this.mconedrag) {
            this.mcone1_1.x = game.input.activePointer.x + 20;
            this.mcone1_1.y = game.input.activePointer.y - 65;
        }
    },
    openLink: function() {
        CreateLinksInGame("Frozen-Sisters-New-Year-Eve", "game", "logo");
    },
    moreLink: function() {
        CreateLinksInGame("Frozen-Sisters-New-Year-Eve", "game", "more");
    },
    btnOver: function(items) {
        items.scale.setTo(items.scale.x + 0.05);
        effectVar = game.add.sprite(items.x - 30, items.y - 80, 'effects');
        effectVar.anchor.setTo(0.5);
        effectVar.scale.setTo(2);
        effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
        effectVar.animations.play('glitter', 30, false);
    },
    btnOut: function(items) {
        items.scale.setTo(items.scale.x - 0.05);

    },
    removeGlitter: function(evt) {
        evt.kill();
    },
    enterRoom: function() {
        game.add.tween(this.shutter).to({
            y: 0
        }, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
            game.state.start('intro');
        });

    },
}

Main.finalscreen = function() {}

Main.finalscreen.prototype = {
    create: function() {
        this.annai = [0, 0, 0, 0];
        this.levelGroup = game.add.group();
        this.bg = game.add.sprite(0, 0, 'fibg1');
        this.levelGroup.add(this.bg);

        this.mconedrag = false;

        this.egroup = game.add.group();
        this.agroup = game.add.group();

        this.abhair1 = game.add.sprite(312.45, 168.45, 'abhair000' + Main.annaFlag[1]);
        this.abhair1.anchor.setTo(0.5);
        this.agroup.add(this.abhair1);

        this.abdress1 = game.add.sprite(314.3, 173.65, 'ebdress1');
        this.abdress1.anchor.setTo(0.5);
        this.abdress1.visible = false;
        this.agroup.add(this.abdress1);

        this.abshoe1 = game.add.sprite(324, 656, 'ebshoe1');
        this.abshoe1.anchor.setTo(0.5);
        this.abshoe1.visible = false;
        this.agroup.add(this.abshoe1);

        this.abshoe2 = game.add.sprite(324, 657, 'ebshoe2');
        this.abshoe2.anchor.setTo(0.5);
        this.abshoe2.visible = false;
        this.agroup.add(this.abshoe2);

        this.abshoe3 = game.add.sprite(325.6, 658, 'ebshoe3');
        this.abshoe3.anchor.setTo(0.5);
        this.abshoe3.visible = false;
        this.agroup.add(this.abshoe3);

        this.abody = game.add.sprite(269.75, 436.75, 'abody2');
        this.abody.anchor.setTo(0.5);
        this.agroup.add(this.abody);

        this.ahand1 = game.add.sprite(362.65, 257.6, 'ahand1');
        this.ahand1.anchor.setTo(0.5);
        this.agroup.add(this.ahand1);

        this.ashoe1 = game.add.sprite(315, 683, 'eshoe' + Main.annaFlag[2]);
        this.ashoe1.anchor.setTo(0.5);
        this.agroup.add(this.ashoe1);

        this.adress1 = game.add.sprite(308.7, 407, 'edress' + Main.annaFlag[0]);
        this.adress1.anchor.setTo(0.5);
        this.agroup.add(this.adress1);

        this.ahand3 = game.add.sprite(365.65, 256.6, 'ehand3');
        this.ahand3.anchor.setTo(0.5);
        // this.ahand3.visible=false;
        this.agroup.add(this.ahand3);

        this.afdress1 = game.add.sprite(308.7, 407, 'efdress' + Main.annaFlag[0]);
        this.afdress1.anchor.setTo(0.5);
        this.agroup.add(this.afdress1);

        this.abag1 = game.add.sprite(351.1, 386.05, 'ebag' + Main.annaFlag[3]);
        this.abag1.anchor.setTo(0.5);
        this.abag1.alpha = Main.annaalpha[3];
        this.agroup.add(this.abag1);

        this.ashoe2 = game.add.sprite(315, 683, 'eshoe' + Main.annaFlag[2]);
        this.ashoe2.anchor.setTo(0.5);
        this.ashoe2.visible = false;
        this.agroup.add(this.ashoe2);

        this.ahand2 = game.add.sprite(331, 316.05, 'ahand2');
        this.ahand2.anchor.setTo(0.5);
        //this.agroup.add(this.ahand2);



        this.ahead = game.add.sprite(312.15, 122.85, 'ahead');
        this.ahead.anchor.setTo(0.5);
        this.agroup.add(this.ahead);

        this.aeyeblink = game.add.sprite(310.75, 126.6, 'aeye_blink');
        this.aeyeblink.anchor.setTo(0.5);
        this.aeyeblink.animations.add('aeye_blink').onComplete.add(function() {
            this.aeyeblink.frame = 0;
        }, this);
        //  this.aeyeblink.animations.play('aeye_blink',10,false);
        // game.time.events.loop(3000,this.updateyeblink,this);        
        this.agroup.add(this.aeyeblink);

        this.afhair1 = game.add.sprite(305.4, 167.5, 'afhair000' + Main.annaFlag[1]);
        this.afhair1.anchor.setTo(0.5);
        this.agroup.add(this.afhair1);



        this.ebhair1 = game.add.sprite(305.15, 175.4, 'ebhair000' + Main.elsaFlag[1]);
        this.ebhair1.anchor.setTo(0.5);
        this.egroup.add(this.ebhair1);

        this.ebdress1 = game.add.sprite(314.3, 173.65, 'ebdress1');
        this.ebdress1.anchor.setTo(0.5);
        this.egroup.add(this.ebdress1);

        this.ebshoe1 = game.add.sprite(325.6, 661.9, 'ebshoe1');
        this.ebshoe1.anchor.setTo(0.5);
        this.ebshoe1.visible = false;
        this.egroup.add(this.ebshoe1);

        this.ebshoe2 = game.add.sprite(325.6, 661.9, 'ebshoe2');
        this.ebshoe2.anchor.setTo(0.5);
        this.ebshoe2.visible = false;
        this.egroup.add(this.ebshoe2);

        this.ebshoe3 = game.add.sprite(325.6, 661.9, 'ebshoe3');
        this.ebshoe3.anchor.setTo(0.5);
        this.ebshoe3.visible = false;
        this.egroup.add(this.ebshoe3);

        this.ebody = game.add.sprite(286.65, 437.25, 'ebody2');
        this.ebody.anchor.setTo(0.5);
        this.egroup.add(this.ebody);

        this.efhand = game.add.sprite(362.65, 257.6, 'efhand');
        this.efhand.anchor.setTo(0.5);
        this.egroup.add(this.efhand);

        this.eshoe1 = game.add.sprite(314, 685, 'eshoe' + Main.elsaFlag[2]);
        this.eshoe1.anchor.setTo(0.5);
        this.egroup.add(this.eshoe1);

        this.edress1 = game.add.sprite(307.7, 407, 'edress' + Main.elsaFlag[0]);
        this.edress1.anchor.setTo(0.5);
        this.egroup.add(this.edress1);

        this.eshoe2 = game.add.sprite(314, 685, 'eshoe' + Main.elsaFlag[2]);
        this.eshoe2.anchor.setTo(0.5);
        this.eshoe2.visible = false;
        this.egroup.add(this.eshoe2);

        this.ehand3 = game.add.sprite(362.65, 257.6, 'ehand3');
        this.ehand3.anchor.setTo(0.5);
        // this.ehand3.visible=false;
        this.egroup.add(this.ehand3);

        this.efdress1 = game.add.sprite(307.7, 407, 'efdress' + Main.elsaFlag[0]);
        this.efdress1.anchor.setTo(0.5);
        this.egroup.add(this.efdress1);

        this.ebag1 = game.add.sprite(351.1, 386.05, 'ebag' + Main.elsaFlag[3]);
        this.ebag1.anchor.setTo(0.5);
        this.ebag1.alpha = Main.elsaalpha[3];
        this.egroup.add(this.ebag1);

        this.ehand2 = game.add.sprite(331, 317, 'ehand2');
        this.ehand2.anchor.setTo(0.5);
        // this.egroup.add(this.ehand2);

        this.ehead = game.add.sprite(246, 115, 'ehead');
        this.ehead.anchor.setTo(0.5);
        this.egroup.add(this.ehead);

        this.efhair1 = game.add.sprite(301, 166.5, 'efhair000' + Main.elsaFlag[1]);
        this.efhair1.anchor.setTo(0.5);
        this.egroup.add(this.efhair1);

        // this.final_hand = game.add.sprite(253,353,'final_hand');
        // this.final_hand.anchor.setTo(0.5);
        // this.agroup.add(this.final_hand);


        this.cupcakegroup = game.add.group();

        this.bglass = game.add.sprite(153, 590, 'bglass');
        this.bglass.anchor.setTo(0.5);
        this.bglass.scale.setTo(0.7);
        this.cupcakegroup.add(this.bglass);

        this.candy_drop = game.add.sprite(159, 548, 'candy_drop');
        this.candy_drop.anchor.setTo(0.5);
        this.candy_drop.scale.setTo(0.9);
        this.candy_drop.frame = 5;
        this.cupcakegroup.add(this.candy_drop);


        this.ctop = game.add.sprite(156.35, 427, 'ctop');
        this.ctop.anchor.setTo(0.5);
        this.ctop.scale.setTo(0.7);
        // this.ctop.visible=false;
        this.cupcakegroup.add(this.ctop);

        this.cake_cover1 = game.add.sprite(156.35, 465, 'cake_cover000' + Main.cakeArr[0]);
        this.cake_cover1.anchor.setTo(0.5);
        this.cake_cover1.scale.setTo(0.7);
        // this.cake_cover1.visible=false;
        this.cupcakegroup.add(this.cake_cover1);

        if (Main.clrArr[0] == 1) {
            this.cone_clr1_ani2 = game.add.sprite(104, 279, 'cone_clr1_ani2');
            this.cone_clr1_ani2.anchor.setTo(0.5);
            this.cone_clr1_ani2.scale.setTo(0.7);
            this.cone_clr1_ani2.frame = 9;
            this.cupcakegroup.add(this.cone_clr1_ani2);
        }

        if (Main.clrArr[0] == 2) {
            this.cone_clr2_ani2 = game.add.sprite(102, 279, 'cone_clr2_ani2');
            this.cone_clr2_ani2.anchor.setTo(0.5);
            this.cone_clr2_ani2.scale.setTo(0.7);
            this.cone_clr2_ani2.frame = 9;
            this.cupcakegroup.add(this.cone_clr2_ani2);
        }

        if (Main.clrArr[0] == 3) {
            this.cone_clr3_ani2 = game.add.sprite(102, 278, 'cone_clr3_ani2');
            this.cone_clr3_ani2.anchor.setTo(0.5);
            this.cone_clr3_ani2.scale.setTo(0.7);
            this.cone_clr3_ani2.frame = 9;
            this.cupcakegroup.add(this.cone_clr3_ani2);
        }

        if (Main.clrArr[0] == 4) {
            this.cone_clr4_ani2 = game.add.sprite(102, 279, 'cone_clr4_ani2');
            this.cone_clr4_ani2.anchor.setTo(0.5);
            this.cone_clr4_ani2.scale.setTo(0.7);
            this.cone_clr4_ani2.frame = 9;
            this.cupcakegroup.add(this.cone_clr4_ani2);
        }

        this.fctoping1_1 = game.add.sprite(156, 407, 'ctoping1_000' + Main.cakeArr[1]);
        this.fctoping1_1.anchor.setTo(0.5);
        this.fctoping1_1.scale.setTo(0.7);
        // this.fctoping1_1.visible=false;
        this.cupcakegroup.add(this.fctoping1_1);

        this.fctoping2_1 = game.add.sprite(144, 333, 'ctoping2_000' + Main.cakeArr[2]);
        this.fctoping2_1.anchor.setTo(0.5);
        this.fctoping2_1.scale.setTo(0.7);
        // this.fctoping2_1.visible=false;
        this.cupcakegroup.add(this.fctoping2_1);

        this.fglass = game.add.sprite(153, 595, 'fglass');
        this.fglass.anchor.setTo(0.5);
        this.fglass.scale.setTo(0.7);
        this.cupcakegroup.add(this.fglass);

        this.cupcakegroup2 = game.add.group();

        this.bglass = game.add.sprite(153, 590, 'bglass');
        this.bglass.anchor.setTo(0.5);
        this.bglass.scale.setTo(0.7);
        this.cupcakegroup2.add(this.bglass);

        this.candy_drop = game.add.sprite(159, 548, 'candy_drop');
        this.candy_drop.anchor.setTo(0.5);
        this.candy_drop.scale.setTo(0.9);
        this.candy_drop.frame = 5;
        this.cupcakegroup2.add(this.candy_drop);


        this.ctop = game.add.sprite(156.35, 427, 'ctop');
        this.ctop.anchor.setTo(0.5);
        this.ctop.scale.setTo(0.7);
        // this.ctop.visible=false;
        this.cupcakegroup2.add(this.ctop);

        this.cake_cover1 = game.add.sprite(156.35, 465, 'cake_cover000' + Main.cakeArr[0]);
        this.cake_cover1.anchor.setTo(0.5);
        this.cake_cover1.scale.setTo(0.7);
        // this.cake_cover1.visible=false;
        this.cupcakegroup2.add(this.cake_cover1);

        if (Main.clrArr[0] == 1) {
            this.cone_clr1_ani2 = game.add.sprite(104, 279, 'cone_clr1_ani2');
            this.cone_clr1_ani2.anchor.setTo(0.5);
            this.cone_clr1_ani2.scale.setTo(0.7);
            this.cone_clr1_ani2.frame = 9;
            this.cupcakegroup2.add(this.cone_clr1_ani2);
        }

        if (Main.clrArr[0] == 2) {
            this.cone_clr2_ani2 = game.add.sprite(102, 279, 'cone_clr2_ani2');
            this.cone_clr2_ani2.anchor.setTo(0.5);
            this.cone_clr2_ani2.scale.setTo(0.7);
            this.cone_clr2_ani2.frame = 9;
            this.cupcakegroup2.add(this.cone_clr2_ani2);
        }

        if (Main.clrArr[0] == 3) {
            this.cone_clr3_ani2 = game.add.sprite(102, 278, 'cone_clr3_ani2');
            this.cone_clr3_ani2.anchor.setTo(0.5);
            this.cone_clr3_ani2.scale.setTo(0.7);
            this.cone_clr3_ani2.frame = 9;
            this.cupcakegroup2.add(this.cone_clr3_ani2);
        }

        if (Main.clrArr[0] == 4) {
            this.cone_clr4_ani2 = game.add.sprite(102, 279, 'cone_clr4_ani2');
            this.cone_clr4_ani2.anchor.setTo(0.5);
            this.cone_clr4_ani2.scale.setTo(0.7);
            this.cone_clr4_ani2.frame = 9;
            this.cupcakegroup2.add(this.cone_clr4_ani2);
        }

        this.fctoping1_1 = game.add.sprite(156, 407, 'ctoping1_000' + Main.cakeArr[1]);
        this.fctoping1_1.anchor.setTo(0.5);
        this.fctoping1_1.scale.setTo(0.7);
        // this.fctoping1_1.visible=false;
        this.cupcakegroup2.add(this.fctoping1_1);

        this.fctoping2_1 = game.add.sprite(144, 333, 'ctoping2_000' + Main.cakeArr[2]);
        this.fctoping2_1.anchor.setTo(0.5);
        this.fctoping2_1.scale.setTo(0.7);
        // this.fctoping2_1.visible=false;
        this.cupcakegroup2.add(this.fctoping2_1);

        this.fglass = game.add.sprite(153, 595, 'fglass');
        this.fglass.anchor.setTo(0.5);
        this.fglass.scale.setTo(0.7);
        this.cupcakegroup2.add(this.fglass);

        this.agroup.add(this.cupcakegroup);
        this.agroup.add(this.ahand3);
        this.agroup.add(this.abag1);
        this.agroup.add(this.ahand2);

        this.egroup.add(this.cupcakegroup2);
        this.egroup.add(this.ehand3);
        this.egroup.add(this.ebag1);
        this.egroup.add(this.ehand2);


        /* this.cupcakegroup.scale.setTo(0.3);
         this.cupcakegroup.x=80;
         this.cupcakegroup.y=140;*/

        this.cupcakegroup.scale.setTo(0.3);
        this.cupcakegroup.x = 270;
        this.cupcakegroup.y = 140;

        this.cupcakegroup2.scale.setTo(0.3);
        this.cupcakegroup2.x = 270;
        this.cupcakegroup2.y = 140;

        this.egroup.scale.x = -this.egroup.scale.x;
        this.egroup.x = 430;
        this.egroup.y = -7;
        this.agroup.x = 70;
        this.agroup.y = -5;

        if (Main.elsaFlag[0] <= 4) {
            this.ebdress1.visible = true;
            this.ebdress1.loadTexture('ebdress' + Main.elsaFlag[0]);
        } else {
            this.ebdress1.visible = false;
        }



        if (Main.elsaFlag[2] == 2) {
            this.ebshoe1.visible = true;
        } else {
            this.ebshoe1.visible = false;
        }
        if (Main.elsaFlag[2] == 3) {
            this.ebshoe2.visible = true;
        } else {
            this.ebshoe2.visible = false;
        }
        if (Main.elsaFlag[2] == 4) {
            this.ebshoe3.visible = true;
        } else {
            this.ebshoe3.visible = false;
        }

        if (Main.annaFlag[0] <= 4) {
            this.abdress1.visible = true;
            this.abdress1.loadTexture('ebdress' + Main.annaFlag[0]);
        } else {
            this.abdress1.visible = false;
        }

        if (Main.annaFlag[2] == 2) {
            this.abshoe1.visible = true;
        } else {
            this.abshoe1.visible = false;
        }
        if (Main.annaFlag[2] == 3) {
            this.abshoe2.visible = true;
        } else {
            this.abshoe2.visible = false;
        }
        if (Main.annaFlag[2] == 4) {
            this.abshoe3.visible = true;
        } else {
            this.abshoe3.visible = false;
        }

        if (Main.elsaFlag[2] == 6 || Main.elsaFlag[2] == 7 || Main.elsaFlag[2] == 2 || Main.elsaFlag[2] == 3 || Main.elsaFlag[2] == 4 || Main.elsaFlag[2] == 5 || Main.elsaFlag[2] == 12) {
            this.eshoe1.visible = false;
            this.eshoe2.visible = true;
        } else {
            this.eshoe1.visible = true;
            this.eshoe2.visible = false;
        }



        if (Main.elsaFlag[2] == 7) {
            this.eshoe1.x = 318;
            this.eshoe2.x = 318;
        } else {
            this.eshoe1.x = 314;
            this.eshoe2.x = 314;
        }

        if (Main.annaFlag[2] == 6 || Main.annaFlag[2] == 7 || Main.annaFlag[2] == 2 || Main.annaFlag[2] == 3 || Main.annaFlag[2] == 4 || Main.annaFlag[2] == 5 || Main.annaFlag[2] == 12) {
            this.ashoe1.visible = false;
            this.ashoe2.visible = true;
        } else {
            this.ashoe1.visible = true;
            this.ashoe2.visible = false;
        }

        if (Main.annaFlag[2] == 7) {
            this.ashoe1.x = 319;
            this.ashoe2.x = 319;
        } else {
            this.ashoe1.x = 315;
            this.ashoe2.x = 315;
        }



        if (Main.annaFlag[0] == 12 || Main.annaFlag[0] == 10) {
            this.adress1.x = 307.7;
            this.afdress1.x = 307.7;
        } else {
            this.adress1.x = 308.7;
            this.afdress1.x = 308.7;
        }

        this.bgcnt = 1;

        this.forwardbtn = game.add.sprite(472, 520, 'forwardbtn');
        this.forwardbtn.anchor.setTo(0.5);
        this.forwardbtn.scale.setTo(1.4);
        this.forwardbtn.inputEnabled = true;
        this.forwardbtn.input.useHandCursor = true;
        this.forwardbtn.events.onInputDown.add(function() {
            //this.forwardbtn.inputEnabled = false;
            this.bgcnt++;
            this.bg.loadTexture('fibg' + this.bgcnt);
            this.backwardbtn.visible = true;
            game.add.tween(this.donebtn.scale).to({
                x: 1,
                y: 1
            }, 700, Phaser.Easing.Quadratic.Out, true);
            if (this.bgcnt == 6) {
                this.forwardbtn.visible = false;
            }
        }, this);

        this.backwardbtn = game.add.sprite(35, 520, 'forwardbtn');
        this.backwardbtn.anchor.setTo(0.5);
        this.backwardbtn.scale.setTo(1.4);
        this.backwardbtn.scale.x = -this.backwardbtn.scale.x;
        this.backwardbtn.visible = false;
        this.backwardbtn.inputEnabled = true;
        this.backwardbtn.input.useHandCursor = true;
        this.backwardbtn.events.onInputDown.add(function() {
            //this.backwardbtn.inputEnabled = false;
            this.bgcnt--;
            this.bg.loadTexture('fibg' + this.bgcnt);
            this.forwardbtn.visible = true;
            if (this.bgcnt == 1) {
                this.backwardbtn.visible = false;
            }
        }, this);






        this.morebtn = game.add.sprite(50, 749.55, 'morebtn');
        this.morebtn.anchor.setTo(0.5);
        // this.morebtn.scale.setTo(0);
        this.morebtn.inputEnabled = true;
        this.morebtn.input.useHandCursor = true;
        this.morebtn.events.onInputUp.add(this.moreLink, this);
        this.morebtn.events.onInputOver.add(this.btnOver, this);
        this.morebtn.events.onInputOut.add(this.btnOut, this);
        //this.levelGroup.add(this.morebtn);

        this.donebtn = game.add.sprite(450, 749.2, 'donebtn');
        this.donebtn.anchor.setTo(0.5);
        this.donebtn.scale.setTo(0);
        this.donebtn.inputEnabled = true;
        this.donebtn.input.useHandCursor = true;
        this.donebtn.events.onInputUp.add(this.enterRoom1, this);
        this.donebtn.events.onInputOver.add(this.btnOver, this);
        this.donebtn.events.onInputOut.add(this.btnOut, this);
        //this.levelGroup.add(this.donebtn);

        this.playbtn = game.add.sprite(450, 749.2, 'resetbtn');
        this.playbtn.anchor.setTo(0.5);
        this.playbtn.scale.setTo(0);
        this.playbtn.inputEnabled = true;
        this.playbtn.input.useHandCursor = true;
        this.playbtn.events.onInputUp.add(this.enterRoom, this);
        this.playbtn.events.onInputOver.add(this.btnOver, this);
        this.playbtn.events.onInputOut.add(this.btnOut, this);

        game.load.crossOrigin = '*';
        /*this.randomId = game.rnd.integerInRange(0,  RelatedGames.length-1);
            this.thumbVar = game.add.sprite(156.5, 936, 'thumb_'+this.randomId);
            this.thumbVar.inputEnabled = true;
            this.thumbVar.input.useHandCursor = true;
           this.thumbVar.events.onInputUp.add(this.thumbLink, this);
            this.thumbframeVar = game.add.sprite(155, 935, 'Tump_frame'); 
			this.thumbVar.height=this.thumbframeVar.height-2;
			this.thumbVar.width=this.thumbframeVar.width-2;*/

        //this.thumbframeVar.scale.setTo(0);
        //this.thumbVar.scale.setTo(0); 


        if (Main.shutterOn[0]) {
            this.shutter = game.add.sprite(0, 0, 'shutterbg');
            game.add.tween(this.shutter).to({
                y: -850
            }, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                /* game.add.tween(this.playbtn.scale).to({x:0.8,y:0.8},700, Phaser.Easing.Quadratic.Out, true);
        game.add.tween(this.thumbframeVar.scale).to({x:1,y:1}, 700, Phaser.Easing.Quadratic.Out, true);
            game.add.tween(this.thumbVar.scale).to({x:1,y:1}, 700, Phaser.Easing.Quadratic.Out, true);*/
            }, this);
        }


        this.logoVar = game.add.sprite(5, 5, 'logo');
        this.logoVar.scale.setTo(0.8);
        this.logoVar.inputEnabled = true
        this.logoVar.input.useHandCursor = true;
        this.logoVar.events.onInputUp.add(this.openLink, this);

        this.musicButton = game.add.sprite(427, 5, "soundicon");
        this.musicButton.scale.setTo(0.9);
        this.musicButton.inputEnabled = true
        this.musicButton.input.useHandCursor = true;
        this.musicButton.events.onInputUp.add(this.changemusic, this);
        if (!game.sound.mute) {
            this.musicButton.frame = 0;
        } else {
            this.musicButton.frame = 1;
        }
        this.effectFlag = [this.adress1, this.afhair1, this.ashoe1, this.abag1];
    },
    changemusic: function() {
        if (!game.sound.mute) {
            this.musicButton.frame = 1;
            game.sound.mute = true;
        } else {
            this.musicButton.frame = 0;
            game.sound.mute = false;
        };
    },
    updateyeblink: function() {
        this.aeyeblink.play('aeye_blink', 10, false);
    },
    changefun: function(evt) {
        this.annai[evt.id - 1] = 1;
        if (evt.id == 1) {
            evt.cnt++;
            if (evt.cnt <= 4) {
                this.abdress1.visible = true;
                this.abdress1.loadTexture('ebdress' + evt.cnt);
            } else {
                this.abdress1.visible = false;
            }
            this.adress1.loadTexture('edress' + evt.cnt);
            Main.elsaFlag[0] = evt.cnt;
            Main.elsaalpha[0] = 1;
            if (evt.cnt >= 12) {
                evt.cnt = 0;
            }

        }

        if (evt.id == 2) {
            evt.cnt++;
            this.afhair1.loadTexture('afhair000' + evt.cnt);
            this.abhair1.loadTexture('abhair000' + evt.cnt);
            Main.elsaFlag[1] = evt.cnt;
            Main.elsaalpha[1] = 1;
            if (evt.cnt >= 5) {
                evt.cnt = 0;
            }

        }

        if (evt.id == 3) {
            evt.cnt++;
            if (evt.cnt == 2) {
                this.abshoe1.visible = true;
            } else {
                this.abshoe1.visible = false;
            }
            if (evt.cnt == 3) {
                this.abshoe2.visible = true;
            } else {
                this.abshoe2.visible = false;
            }
            if (evt.cnt == 4) {
                this.abshoe3.visible = true;
            } else {
                this.abshoe3.visible = false;
            }
            this.ashoe1.loadTexture('eshoe' + evt.cnt);
            Main.elsaFlag[2] = evt.cnt;
            Main.elsaalpha[2] = 1;
            if (evt.cnt >= 12) {
                evt.cnt = 0;
            }

        }

        if (evt.id == 4) {
            evt.cnt++;
            this.abag1.alpha = 1;
            this.abag1.loadTexture('ebag' + evt.cnt);
            Main.elsaFlag[3] = evt.cnt;
            Main.elsaalpha[3] = 1;
            if (evt.cnt >= 12) {
                evt.cnt = 0;
            }

        }

        if (this.annai.indexOf(0) < 0) {
            game.add.tween(this.playbtn.scale).to({
                x: 1,
                y: 1
            }, 800, Phaser.Easing.Elastic.Out, true);
        }

        effectssd = game.add.sprite(this.effectFlag[evt.id - 1].worldPosition.x, this.effectFlag[evt.id - 1].worldPosition.y, 'effectssd');
        effectssd.anchor.setTo(0.5);
        effectssd.animations.add('effectssd');
        effectssd.animations.play('effectssd', 20, false).onComplete.add(function(evt) {
            evt.destroy();
        }, this);

    },
    thumbLink: function() {
        // CreateLinksInGame("Frozen-Sisters-New-Year-Eve","gameover","thumb",RelatedGames[this.randomId]['id']);
    },
    openLink: function() {
        // CreateLinksInGame("Frozen-Sisters-New-Year-Eve","gameover","logo");
    },
    moreLink: function() {
        //CreateLinksInGame("Frozen-Sisters-New-Year-Eve","gameover","more");
    },
    btnOver: function(items) {
        items.scale.setTo(items.scale.x + 0.05);
        effectVar = game.add.sprite(items.x - 30, items.y - 80, 'effects');
        effectVar.anchor.setTo(0.5);
        effectVar.scale.setTo(2);
        effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
        effectVar.animations.play('glitter', 30, false);
    },
    btnOut: function(items) {
        items.scale.setTo(items.scale.x - 0.05);

    },
    removeGlitter: function(evt) {
        evt.kill();
    },
    enterRoom1: function() {

        game.add.tween(this.shutter).to({
            y: 0
        }, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
            this.donebtn.scale.setTo(0);
            game.add.tween(this.shutter).to({
                y: -850
            }, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                game.add.tween(this.playbtn.scale).to({
                    x: 0.8,
                    y: 0.8
                }, 700, Phaser.Easing.Quadratic.Out, true);
                // game.add.tween(this.thumbframeVar).to({y:635}, 700, Phaser.Easing.Quadratic.Out, true);
                //game.add.tween(this.thumbVar).to({y:636}, 700, Phaser.Easing.Quadratic.Out, true);
            }, this);
            this.backwardbtn.visible = false;
            this.forwardbtn.visible = false;
        }, this);

    },
    enterRoom: function() {
        Main.selectionFlag = [0, 0];

        Main.elsaFlag = [1, 1, 1, 1];
        Main.elsaalpha = [1, 1, 1, 0];
        Main.clrArr = [1];

        Main.cakeArr = [1, 1, 1];

        Main.annaFlag = [1, 1, 1, 1];
        Main.annaalpha = [1, 1, 1, 0];
        Main.iarr = [0];
        game.add.tween(this.shutter).to({
            y: 0
        }, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
            game.state.start('intro');
        });

    },
}



game.state.add('boot', Main.boot);
game.state.add('preloader', Main.preloader);
game.state.add('title', Main.title);
game.state.add('intro', Main.intro);
game.state.add('selection_screen', Main.selection_screen);
game.state.add('elsa_dressup', Main.elsa_dressup);
game.state.add('anna_dressup', Main.anna_dressup);
game.state.add('cooking_screen', Main.cooking_screen);
game.state.add('cooking2_screen', Main.cooking2_screen);
game.state.add('finalscreen', Main.finalscreen);

game.state.start('boot');