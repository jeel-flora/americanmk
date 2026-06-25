var game = new Phaser.Game(504, 800, Phaser.AUTO, 'gameContainer');
var Main = {
    music: null,

    shutterOn: [true],
    baby_array: [1, 1, 1, 1, 1, 1],


    foam1X: [56, 76, 109, 90, 120, 130, 157, 145, 130, 147, 169, 176, 152, 180, 199, 227, 208, 187, 218, 241, 370, 395, 423, 445, 399, 422, 394, 424, 449, 388, 461, 388, 417, 442, 399, 417,
        447, 395, 428, 420
    ],

    foam1Y: [270, 250, 254, 281, 293, 270, 275, 301, 326, 347, 324, 299, 371, 355, 326, 336, 359, 381, 382, 352, 320, 313, 321, 338, 343, 354, 372, 384, 369, 398, 394, 426, 413, 413, 454,
        442, 437, 480, 469, 497
    ],

    foam2X: [91, 121, 149, 103, 128, 119, 172, 151, 132, 164, 184, 137, 162, 192, 213, 149, 175, 195, 225, 242, 273, 254, 225, 197, 171, 172, 199, 176, 197, 177, 198, 296, 323, 349, 372,
        288, 313, 344, 375, 345, 319, 292, 265, 279, 244, 220, 322, 354, 372, 339, 368, 351, 377, 352, 377, 351, 384
    ],

    foam2Y: [252, 256, 270, 283, 295, 310, 291, 307, 341, 335, 317, 373, 362, 350, 326, 399, 387, 373, 355, 334, 338, 365, 387, 406, 419, 445, 438, 474, 466, 502, 498, 329, 327, 324, 340,
        363, 356, 353, 372, 381, 383, 392, 392, 413, 409, 416, 412, 411, 400, 440, 438, 468, 465, 495, 494, 524, 525
    ],

    clean1X: [211, 238, 266, 294, 316, 331, 337, 337, 334, 312, 289, 261, 235, 210, 188, 182, 187, 197, 230, 256, 285, 307, 307, 309, 294, 267, 237, 215, 209, 211, 243, 271, 286, 282, 256, 232],
    clean1Y: [293, 293, 295, 294, 302, 325, 352, 381, 411, 430, 441, 442, 431, 417, 394, 360, 332, 309, 322, 319, 321, 331, 364, 391, 411, 412, 402, 385, 363, 339, 346, 345, 358, 384, 377, 367],


};

Main.boot = function() {};
Main.boot.prototype = {
    preload: function() {
        game.stage.backgroundColor = '#b8175f';
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        game.scale.refresh();
        game.scale.pageAlignVertically = true;
        game.scale.pageAlignHorizontally = true;
        game.stage.disableVisibilityChange = true;
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
        game.load.spritesheet('soundicon', 'assets/soundicon.png', 77, 77, 2);
        game.load.image('logo', 'assets/logo.png');
        game.load.spritesheet('effects', 'assets/effects.png', 141, 134);
        game.load.spritesheet('effectssd', 'assets/efftes012.png', 367, 335);
        game.load.image('titlebg', 'assets/titlebg.png');

        //baby_assets


        game.load.image('t_bg', 'assets/baby/t_bg.png');

        game.load.image('babyelsabag1', 'assets/baby/babyelsabag1.png');
        game.load.image('babyelsabag2', 'assets/baby/babyelsabag2.png');
        game.load.image('babyelsabag3', 'assets/baby/babyelsabag3.png');
        game.load.image('babyelsabag4', 'assets/baby/babyelsabag4.png');
        game.load.image('babyelsabag5', 'assets/baby/babyelsabag5.png');
        game.load.image('babyelsabag6', 'assets/baby/babyelsabag6.png');
        game.load.image('babyelsabag56tophand', 'assets/baby/babyelsabag56tophand.png');
        game.load.image('babyelsabagtophand', 'assets/baby/babyelsabagtophand.png');
        game.load.image('babyelsacap1', 'assets/baby/babyelsacap1.png');
        game.load.image('babyelsacap2', 'assets/baby/babyelsacap2.png');
        game.load.image('babyelsacap3', 'assets/baby/babyelsacap3.png');
        game.load.image('babyelsacap4', 'assets/baby/babyelsacap4.png');
        game.load.image('babyelsacap5', 'assets/baby/babyelsacap5.png');
        game.load.image('babyelsacap6', 'assets/baby/babyelsacap6.png');
        game.load.image('babyelsaearing1', 'assets/baby/babyelsaearing1.png');
        game.load.image('babyelsaearing2', 'assets/baby/babyelsaearing2.png');
        game.load.image('babyelsaearing3', 'assets/baby/babyelsaearing3.png');
        game.load.image('babyelsaearing4', 'assets/baby/babyelsaearing4.png');
        game.load.image('babyelsaearing5', 'assets/baby/babyelsaearing5.png');
        game.load.image('babyelsaearing6', 'assets/baby/babyelsaearing6.png');
        game.load.image('babyelsaearing1', 'assets/baby/babyelsaearing1.png');
        game.load.image('babyelsaearing2', 'assets/baby/babyelsaearing2.png');
        game.load.image('babyelsaearing3', 'assets/baby/babyelsaearing3.png');
        game.load.image('babyelsaearing4', 'assets/baby/babyelsaearing4.png');
        game.load.image('babyelsaearing5', 'assets/baby/babyelsaearing5.png');
        game.load.image('babyelsaearing6', 'assets/baby/babyelsaearing6.png');
        game.load.image('babyelsanailcleaner', 'assets/baby/babyelsanailcleaner.png');
        game.load.image('babyelsanailcutter', 'assets/baby/babyelsanailcutter.png');
        game.load.image('babyelsanailpolish', 'assets/baby/babyelsanailpolish.png');
        game.load.image('babyelsaneckkerchief1', 'assets/baby/babyelsaneckkerchief1.png');
        game.load.image('babyelsaneckkerchief2', 'assets/baby/babyelsaneckkerchief2.png');
        game.load.image('babyelsaneckkerchief3', 'assets/baby/babyelsaneckkerchief3.png');
        game.load.image('babyelsaneckkerchief4', 'assets/baby/babyelsaneckkerchief4.png');
        game.load.image('babyelsaneckkerchief5', 'assets/baby/babyelsaneckkerchief5.png');
        game.load.image('babyelsaneckkerchief6', 'assets/baby/babyelsaneckkerchief6.png');
        game.load.image('BabyElsasmallfile', 'assets/baby/BabyElsasmallfile.png');
        game.load.image('Body', 'assets/baby/Body.png');
        game.load.image('Dress1', 'assets/baby/Dress1.png');
        game.load.image('Dress2', 'assets/baby/Dress2.png');
        game.load.image('Dress3', 'assets/baby/Dress3.png');
        game.load.image('Dress4', 'assets/baby/Dress4.png');
        game.load.image('Dress5', 'assets/baby/Dress5.png');
        game.load.image('Dress6', 'assets/baby/Dress6.png');
        game.load.image('Face', 'assets/baby/Face.png');
        game.load.image('Hair', 'assets/baby/Hair.png');
        game.load.image('Righthandfinger', 'assets/baby/Righthandfinger.png');
        game.load.image('Shoe1', 'assets/baby/Shoe1.png');
        game.load.image('Shoe2', 'assets/baby/Shoe2.png');
        game.load.image('Shoe3', 'assets/baby/Shoe3.png');
        game.load.image('Shoe4', 'assets/baby/Shoe4.png');
        game.load.image('Shoe5', 'assets/baby/Shoe5.png');
        game.load.image('Shoe6', 'assets/baby/Shoe6.png');
        game.load.image('tomdressbottom1', 'assets/baby/tomdressbottom1.png');
        game.load.image('tomdressbottom2', 'assets/baby/tomdressbottom2.png');
        game.load.image('tomdresstop1', 'assets/baby/tomdresstop1.png');
        game.load.image('tomdresstop2', 'assets/baby/tomdresstop2.png');
        game.load.image('f_hair', 'assets/baby/f_hair.png');

        //intro_assets

        game.load.image('ibg', 'assets/intro/ibg.png');
        game.load.image('b_father', 'assets/intro/b_father.png');
        game.load.image('b_mother', 'assets/intro/b_mother.png');
        game.load.image('ibaby', 'assets/intro/ibaby.png');
        game.load.image('popet1', 'assets/intro/popet1.png');
        game.load.image('popet20001', 'assets/intro/popet20001.png');
        game.load.image('popet20002', 'assets/intro/popet20002.png');
        game.load.image('popet20003', 'assets/intro/popet20003.png');
        game.load.image('popet30001', 'assets/intro/popet30001.png');
        game.load.image('popet30002', 'assets/intro/popet30002.png');


        //flite_assets

        game.load.image('r_bg', 'assets/intro/r_bg.png');
        game.load.image('flite', 'assets/intro/flite.png');
        game.load.image('r_titles', 'assets/intro/r_titles.png');
        game.load.image('resetbtn', 'assets/button/btn0001.png');
        game.load.image('donebtn', 'assets/button/btn0002.png');
        game.load.image('playbtn', 'assets/button/btn0003.png');
        game.load.image('morebtn', 'assets/button/btn0004.png');
        game.load.image('nextbtn', 'assets/button/btn0005.png');
        game.load.image('icon_panel', 'assets/button/icon_panel.png');
        game.load.image('icon0001', 'assets/button/icon0001.png');
        game.load.image('icon0002', 'assets/button/icon0002.png');
        game.load.image('icon0003', 'assets/button/icon0003.png');
        game.load.image('icon0004', 'assets/button/icon0004.png');
        game.load.image('icon0005', 'assets/button/icon0005.png');
        game.load.image('icon0006', 'assets/button/icon0006.png');
        game.load.image('icon0007', 'assets/button/icon0007.png');


        //leval1_assets


        game.load.image('lbg', 'assets/leval1/lbg.png');
        game.load.image('ground', 'assets/leval1/ground.png');
        game.load.image('Baseket', 'assets/leval1/Baseket.png');
        game.load.image('Baseket1', 'assets/leval1/Baseket1.png');
        game.load.image('neilcutter1', 'assets/leval1/neilcutter1.png');
        game.load.image('neilcutter2', 'assets/leval1/neilcutter2.png');
        game.load.image('nailpolish', 'assets/leval1/nailpolish.png');
        game.load.image('boy0001', 'assets/leval1/boy0001.png');
        game.load.image('boy0002', 'assets/leval1/boy0002.png');
        game.load.image('gril0001', 'assets/leval1/gril0001.png');
        game.load.image('gril0002', 'assets/leval1/gril0002.png');
        game.load.image('bag1', 'assets/leval1/bag1.png');
        game.load.image('bag2', 'assets/leval1/bag2.png');
        game.load.image('bag3', 'assets/leval1/bag3.png');
        game.load.image('tv1', 'assets/leval1/tv1.png');
        game.load.image('tv1_1', 'assets/leval1/tv1_1.png');
        game.load.image('tv1_2', 'assets/leval1/tv1_2.png');
        game.load.image('tv2', 'assets/leval1/tv2.png');
        game.load.image('bulb', 'assets/leval1/bulb.png');
        game.load.image('frank0001', 'assets/leval1/frank0001.png');
        game.load.image('frank0002', 'assets/leval1/frank0002.png');
        game.load.image('frank', 'assets/leval1/frank.png');




        //bathroom
        game.load.image('btbg', 'assets/bathroom/btbg.jpg');
        game.load.image('bfoam', 'assets/bathroom/bfoam.png');
        game.load.image('bpanel', 'assets/bathroom/bpanel.png');
        game.load.image('tbaby2', 'assets/bathroom/tbaby2.png');
        game.load.image('tbaby3', 'assets/bathroom/tbaby3.png');
        game.load.image('tpaste', 'assets/bathroom/tpaste.png');
        game.load.image('washer', 'assets/bathroom/washer.png');
        game.load.image('ffoam', 'assets/bathroom/ffoam.png');
        game.load.image('fwater', 'assets/bathroom/fwater.png');
        game.load.image('towel', 'assets/bathroom/towel.png');
        game.load.image('shmp', 'assets/bathroom/shmp.png');
        game.load.image('soap', 'assets/bathroom/soap.png');
        game.load.image('mouth0001', 'assets/bathroom/mouth0001.png');
        game.load.image('mouth0002', 'assets/bathroom/mouth0002.png');
        game.load.image('mouth0003', 'assets/bathroom/mouth0003.png');
        game.load.image('h_hand', 'assets/bathroom/h_hand.png');
        game.load.spritesheet('brush_ani', 'assets/bathroom/brush_ani.png', 284, 246, 9);
        game.load.spritesheet('eye_blink2', 'assets/bathroom/eye_blink2.png', 268, 101, 5);
        game.load.spritesheet('glass_ani', 'assets/bathroom/glass_ani.png', 175, 237, 15);
        game.load.spritesheet('water_spitting', 'assets/bathroom/water_spitting.png', 111, 260, 30);
        game.load.spritesheet('spray', 'assets/bathroom/spray.png', 207, 187, 15);
        // game.load.spritesheet('clap_ani1', 'assets/bathroom/clap_ani1.png',504,719,6);
        // game.load.spritesheet('clap_ani2', 'assets/bathroom/clap_ani2.png',504,732,6);
        // game.load.spritesheet('clap_ani3', 'assets/bathroom/clap_ani3.png',504,714,6);
        game.load.spritesheet('ani_shmp', 'assets/bathroom/ani_shmp.png', 233, 280, 8);
        game.load.spritesheet('arrow', 'assets/arrow.png', 66, 89, 13);

        game.load.spritesheet('f1_shutter', 'assets/door/f1_shutter.png', 196, 189, 5);
        game.load.spritesheet('f2_shutter', 'assets/door/f2_shutter.png', 188, 387, 7);

        // game.load.spritesheet('boy_walk', 'assets/leval1/boy_walk.png',311,812,12);
        // game.load.spritesheet('frank_walk', 'assets/leval1/frank_walk.png',345,921,10);
        // game.load.spritesheet('girl_walk', 'assets/leval1/girl_walk.png',282,634,13);
        game.load.spritesheet('ani_plane', 'assets/leval1/ani_plane.png', 545, 290, 10);
        game.load.image('ar_bg', 'assets/leval1/ar_bg.png');


        game.load.image('plane_bg', 'assets/plane_bg.png');
        game.load.image('plane_bg1', 'assets/plane_bg1.png');
        game.load.image('plane_bg2', 'assets/plane_bg2.png');


        //hair assets

        game.load.image('band', 'assets/hair/band.png');
        game.load.image('h_clip', 'assets/hair/h_clip.png');
        game.load.image('h_comb', 'assets/hair/h_comb.png');
        game.load.image('h_panel', 'assets/hair/h_panel.png');
        game.load.image('straight', 'assets/hair/straight.png');
        game.load.image('h_arrow1', 'assets/hair/h_arrow1.png');
        game.load.image('h_arrow2', 'assets/hair/h_arrow2.png');
        game.load.image('h_body', 'assets/hair/h_body.png');
        for (i = 1; i <= 11; i++) {
            game.load.image('hair000' + i, 'assets/hair/hair000' + i + '.png');
        }


        // airpot

        for (i = 1; i <= 3; i++) {
            game.load.image('door' + i, 'assets/door/door' + i + '.png');
            game.load.image('passport000' + i, 'assets/door/passport000' + i + '.png');
            game.load.image('stamp' + i, 'assets/door/stamp' + i + '.png');
        }
        game.load.image('check_in', 'assets/door/check_in.png');
        game.load.image('door_1', 'assets/door/door_1.png');
        game.load.image('s_pane', 'assets/door/s_pane.png');
        game.load.image('table', 'assets/door/table.png');
        game.load.image('tick', 'assets/door/tick.png');
        game.load.image('passport0001_1', 'assets/door/passport0001_1.png');
        game.load.image('passport0002_2', 'assets/door/passport0002_2.png');
        game.load.image('passport0003_3', 'assets/door/passport0003_3.png');


        for (i = 1; i <= 14; i++) {
            game.load.image('plane' + i, 'assets/plane/plane' + i + '.png');
        }




        game.load.image('Tump_frame', 'assets/Tump_frame.png');

        //LLLLL
        game.load.onFileComplete.add(this.fileLoadFunPre, this);


    },
    fileLoadFunPre: function(progress, cacheKey, success, totalLoaded, totalFiles) {
        this.progress.setText('LOADING: ' + parseInt(progress) + '%');
        if (progress == 100) {
            this.progress.visible = false;
            game.load.onFileComplete.removeAll();
            //AAAAAA
            // game.state.start('bathroom_scene');

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
        CreateLinksInGame("Baby-Taylor-Airline-High-Hopes", "loading", "logo");
    }

}

// tttt
Main.title = function() {}

Main.title.prototype = {
    create: function() {

        this.levelGroup = game.add.group();
        this.bg = game.add.sprite(0, 0, 'r_bg');
        this.levelGroup.add(this.bg);


        this.flite = game.add.sprite(261.5, 251.5, 'flite');
        this.flite.anchor.setTo(0.5);




        this.babygroup = game.add.group();
        this.Body = game.add.sprite(0, 0, 'Body');
        this.babygroup.add(this.Body);

        this.babyelsabag56tophand = game.add.sprite(0, 0, 'babyelsabag56tophand');
        this.babygroup.add(this.babyelsabag56tophand);


        this.Shoe1 = game.add.sprite(0, 0, 'Shoe' + Main.baby_array[5]);
        this.babygroup.add(this.Shoe1);




        this.Dress1 = game.add.sprite(0, 0, 'Dress' + Main.baby_array[4]);
        this.babygroup.add(this.Dress1);

        this.babyelsabag1 = game.add.sprite(0, 0, 'babyelsabag' + Main.baby_array[0]);
        this.babyelsabag1.alpha = 0;
        this.babygroup.add(this.babyelsabag1);

        this.babyelsabagtophand = game.add.sprite(0, 0, 'babyelsabagtophand');
        this.babygroup.add(this.babyelsabagtophand);

        this.babyelsaneckkerchief1 = game.add.sprite(0, 0, 'babyelsaneckkerchief' + Main.baby_array[3]);
        // this.babyelsaneckkerchief1.alpha=0;
        this.babygroup.add(this.babyelsaneckkerchief1);

        this.Face = game.add.sprite(0, 0, 'Face');
        this.babygroup.add(this.Face);

        this.babyelsaearing1 = game.add.sprite(0, 0, 'babyelsaearing' + Main.baby_array[2]);
        // this.babyelsaearing1.alpha=0;
        this.babygroup.add(this.babyelsaearing1);

        this.babyelsaearing2 = game.add.sprite(-143, 0, 'babyelsaearing' + Main.baby_array[2]);
        this.babyelsaearing2.scale.setTo(0);
        // this.babyelsaearing2.alpha=0;
        this.babygroup.add(this.babyelsaearing2);

        this.Hair = game.add.sprite(0, 0, 'f_hair');
        this.babygroup.add(this.Hair);

        this.babyelsacap1 = game.add.sprite(0, 0, 'babyelsacap' + Main.baby_array[1]);
        // this.babyelsacap1.alpha=0;
        this.babygroup.add(this.babyelsacap1);


        this.BabyElsasmallfile = game.add.sprite(0, 0, 'BabyElsasmallfile');
        this.BabyElsasmallfile.visible = false;
        this.babygroup.add(this.BabyElsasmallfile);

        this.Righthandfinger = game.add.sprite(0, 0, 'Righthandfinger');
        this.babygroup.add(this.Righthandfinger);

        this.babygroup.scale.setTo(0.65);
        this.babygroup.x = 80;
        this.babygroup.y = 190;

        this.r_titles = game.add.image(242.05, 580.2, 'r_titles');
        this.r_titles.anchor.setTo(0.5);








        this.morebtn = game.add.sprite(85, 730, 'morebtn');
        this.morebtn.anchor.setTo(0.5);
        this.morebtn.inputEnabled = true;
        this.morebtn.input.useHandCursor = true;
        this.morebtn.events.onInputUp.add(this.moreLink, this);
        this.morebtn.events.onInputOver.add(this.btnOver, this);
        this.morebtn.events.onInputOut.add(this.btnOut, this);

        this.playbtn = game.add.sprite(430, 730, 'playbtn');
        this.playbtn.anchor.setTo(0.5);
        this.playbtn.inputEnabled = true;
        this.playbtn.input.useHandCursor = true;
        this.playbtn.events.onInputUp.add(this.enterRoom, this);
        this.playbtn.events.onInputOver.add(this.btnOver, this);
        this.playbtn.events.onInputOut.add(this.btnOut, this);

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
        CreateLinksInGame("Baby-Taylor-Airline-High-Hopes", "menu", "logo");
    },
    moreLink: function() {
        CreateLinksInGame("Baby-Taylor-Airline-High-Hopes", "menu", "more");
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

// iiiii

Main.intro = function() {}

Main.intro.prototype = {
    create: function() {
        this.levelGroup = game.add.group();
        this.introbg = game.add.sprite(0, 0, 'ibg');
        this.levelGroup.add(this.introbg);


        this.ibg = game.add.sprite(0, 0, 'ibg');

        this.b_father = game.add.sprite(365, 410.05, 'b_father');
        this.b_father.anchor.setTo(0.5);
        this.b_father.scale.setTo(0.9);

        this.b_mother = game.add.sprite(160, 390, 'b_mother');
        this.b_mother.anchor.setTo(0.5);
        this.b_mother.scale.setTo(0.92);

        this.ibaby = game.add.sprite(260.1, 600, 'ibaby');
        this.ibaby.anchor.setTo(0.5);
        this.ibaby.scale.setTo(0.7);

        this.popet1 = game.add.sprite(267.1, 93.1, 'popet1');
        this.popet1.anchor.setTo(0.5);
        this.popet1.scale.setTo(0);

        this.popet20001 = game.add.sprite(133, 400, 'popet20001');
        this.popet20001.anchor.setTo(0.5);
        this.popet20001.scale.setTo(0);

        this.popet30001 = game.add.sprite(100, 130, 'popet30001');
        this.popet30001.anchor.setTo(0.5);
        this.popet30001.scale.setTo(0);

        this.pop4 = game.add.sprite(100, 130, 'popet30002');
        this.pop4.anchor.setTo(0.5);
        this.pop4.scale.setTo(0);




        this.morebtn = game.add.sprite(85, 730, 'morebtn');
        this.morebtn.anchor.setTo(0.5);
        // this.morebtn.scale.setTo(0);
        this.morebtn.inputEnabled = true;
        this.morebtn.input.useHandCursor = true;
        this.morebtn.events.onInputUp.add(this.moreLink, this);
        this.morebtn.events.onInputOver.add(this.btnOver, this);
        this.morebtn.events.onInputOut.add(this.btnOut, this);

        this.playbtn = game.add.sprite(430, 730, 'nextbtn');
        this.playbtn.anchor.setTo(0.5);
        this.playbtn.scale.setTo(0);
        this.playbtn.inputEnabled = true;
        this.playbtn.input.useHandCursor = true;
        this.playbtn.events.onInputUp.add(this.enterRoom, this);
        this.playbtn.events.onInputOver.add(this.btnOver, this);
        this.playbtn.events.onInputOut.add(this.btnOut, this);




        if (Main.shutterOn[0]) {
            this.shutter = game.add.sprite(0, 0, 'titlebg');
            game.add.tween(this.shutter).to({
                y: -850
            }, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                game.add.tween(this.popet20001.scale).to({
                    x: 0.9,
                    y: 0.9
                }, 800, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                    game.add.tween(this.popet20001.scale).to({
                        x: 0,
                        y: 0
                    }, 800, Phaser.Easing.Quadratic.Out, true, 2000).onComplete.add(function() {
                        game.add.tween(this.popet1.scale).to({
                            x: 1,
                            y: 1
                        }, 800, Phaser.Easing.Quadratic.Out, true);
                        game.add.tween(this.popet30001.scale).to({
                            x: 1,
                            y: 1
                        }, 800, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                            game.add.tween(this.popet1.scale).to({
                                x: 0,
                                y: 0
                            }, 800, Phaser.Easing.Quadratic.Out, true, 2000);
                            game.add.tween(this.popet30001.scale).to({
                                x: 0,
                                y: 0
                            }, 800, Phaser.Easing.Quadratic.Out, true, 2000).onComplete.add(function() {
                                game.add.tween(this.pop4.scale).to({
                                    x: 0.9,
                                    y: 0.9
                                }, 800, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                                    game.add.tween(this.pop4.scale).to({
                                        x: 0,
                                        y: 0
                                    }, 800, Phaser.Easing.Quadratic.Out, true, 2000).onComplete.add(function() {
                                        game.add.tween(this.playbtn.scale).to({
                                            x: 1,
                                            y: 1
                                        }, 800, Phaser.Easing.Quadratic.Out, true, );
                                        // game.add.tween(this.morebtn.scale).to({x:1,y:1}, 800, Phaser.Easing.Quadratic.Out, true,); 

                                    }, this);
                                }, this);
                            }, this);
                        }, this);
                    }, this);
                }, this);
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
        CreateLinksInGame("Baby-Taylor-Airline-High-Hopes", "game", "logo");
    },
    moreLink: function() {
        CreateLinksInGame("Baby-Taylor-Airline-High-Hopes", "game", "morebutton");
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
            game.state.start('bathroom_scene');
        });

    },

}

//bbbbbb


Main.baby_dressup = function() {}

Main.baby_dressup.prototype = {
    create: function() {
        this.d1_arr = [0, 0, 0, 0, 0, 0];

        this.levelGroup = game.add.group();
        this.introbg = game.add.sprite(0, 0, 't_bg');
        this.levelGroup.add(this.introbg);

        this.babygroup = game.add.group();
        this.Body = game.add.sprite(0, 0, 'Body');
        this.babygroup.add(this.Body);

        this.babyelsabag56tophand = game.add.sprite(0, 0, 'babyelsabag56tophand');
        this.babygroup.add(this.babyelsabag56tophand);


        this.Shoe1 = game.add.sprite(0, 0, 'Shoe' + Main.baby_array[5]);
        this.babygroup.add(this.Shoe1);

        this.Dress1 = game.add.sprite(0, 0, 'Dress' + Main.baby_array[4]);
        this.babygroup.add(this.Dress1);

        this.babyelsabag1 = game.add.sprite(0, 0, 'babyelsabag' + Main.baby_array[0]);
        this.babyelsabag1.alpha = 0;
        this.babygroup.add(this.babyelsabag1);

        this.babyelsabagtophand = game.add.sprite(0, 0, 'babyelsabagtophand');
        this.babygroup.add(this.babyelsabagtophand);

        this.babyelsaneckkerchief1 = game.add.sprite(0, 0, 'babyelsaneckkerchief' + Main.baby_array[3]);
        this.babyelsaneckkerchief1.alpha = 0;
        this.babygroup.add(this.babyelsaneckkerchief1);

        this.Face = game.add.sprite(0, 0, 'Face');
        this.babygroup.add(this.Face);

        this.babyelsaearing1 = game.add.sprite(0, 0, 'babyelsaearing' + Main.baby_array[2]);
        this.babyelsaearing1.alpha = 0;
        this.babygroup.add(this.babyelsaearing1);

        this.babyelsaearing2 = game.add.sprite(-143, 0, 'babyelsaearing' + Main.baby_array[2]);
        this.babyelsaearing2.scale.setTo(0);

        this.babyelsaearing2.alpha = 0;
        this.babygroup.add(this.babyelsaearing2);

        this.Hair = game.add.sprite(0, 0, 'f_hair');
        this.babygroup.add(this.Hair);

        this.babyelsacap1 = game.add.sprite(0, 0, 'babyelsacap' + Main.baby_array[1]);
        this.babyelsacap1.alpha = 0;
        this.babygroup.add(this.babyelsacap1);


        this.BabyElsasmallfile = game.add.sprite(0, 0, 'BabyElsasmallfile');
        this.BabyElsasmallfile.visible = false;
        this.babygroup.add(this.BabyElsasmallfile);

        this.Righthandfinger = game.add.sprite(0, 0, 'Righthandfinger');
        this.babygroup.add(this.Righthandfinger);




        this.babygroup.scale.setTo(0.7);
        this.babygroup.x = 60;
        this.babygroup.y = 180;


        this.icon_panel = game.add.sprite(540, 390, 'icon_panel');
        this.icon_panel.anchor.setTo(0.5);


        this.count1 = 1;
        this.icon0002 = game.add.sprite(430, 160, 'icon0002');
        this.icon0002.anchor.setTo(0.5);
        this.icon0002.scale.setTo(0.8);
        this.icon0002.inputEnabled = true;
        this.icon0002.input.useHandCursor = true;
        this.icon0002.events.onInputOver.add(this.btnOver, this);
        this.icon0002.events.onInputOut.add(this.btnOut, this);
        this.icon0002.events.onInputDown.add(function() {
            this.count1++
                this.Dress1.loadTexture('Dress' + this.count1);
            Main.baby_array[4] = this.count1;
            if (this.count1 == 6) {
                this.count1 = 0;
            }

            this.d1_arr[0] = 1;
            if (this.d1_arr.indexOf(0) < 0) {
                game.add.tween(this.playbtn.scale).to({
                    x: 1,
                    y: 1
                }, 400, Phaser.Easing.Bounce.Out, true);
            }

            effectssd = game.add.sprite(230, 450, 'effectssd');
            effectssd.anchor.setTo(0.5);
            effectssd.animations.add('effectssd');
            effectssd.animations.play('effectssd', 20, false).onComplete.add(function(evt) {
                evt.destroy();
            }, this);

        }, this);

        this.count2 = 1;
        this.icon0003 = game.add.sprite(430, 250, 'icon0003');
        this.icon0003.anchor.setTo(0.5);
        this.icon0003.scale.setTo(0.8);
        this.icon0003.inputEnabled = true;
        this.icon0003.input.useHandCursor = true;
        this.icon0003.events.onInputOver.add(this.btnOver, this);
        this.icon0003.events.onInputOut.add(this.btnOut, this);
        this.icon0003.events.onInputDown.add(function() {
            this.count2++
                this.Shoe1.loadTexture('Shoe' + this.count2);
            Main.baby_array[5] = this.count2;
            if (this.count2 == 6) {
                this.count2 = 0;
            }
            this.d1_arr[1] = 1;
            if (this.d1_arr.indexOf(0) < 0) {
                game.add.tween(this.playbtn.scale).to({
                    x: 1,
                    y: 1
                }, 400, Phaser.Easing.Bounce.Out, true);
            }

            effectssd = game.add.sprite(230, 710, 'effectssd');
            effectssd.anchor.setTo(0.5);
            effectssd.animations.add('effectssd');
            effectssd.animations.play('effectssd', 20, false).onComplete.add(function(evt) {
                evt.destroy();
            }, this);

        }, this);

        this.count3 = 0;
        this.icon0004 = game.add.sprite(430, 340, 'icon0004');
        this.icon0004.anchor.setTo(0.5);
        this.icon0004.scale.setTo(0.8);
        this.icon0004.inputEnabled = true;
        this.icon0004.input.useHandCursor = true;
        this.icon0004.events.onInputOver.add(this.btnOver, this);
        this.icon0004.events.onInputOut.add(this.btnOut, this);
        this.icon0004.events.onInputDown.add(function() {
            this.count3++
                this.babyelsaearing1.alpha = 1;
            this.babyelsaearing2.alpha = 1;
            this.babyelsaearing1.loadTexture('babyelsaearing' + this.count3);
            this.babyelsaearing2.loadTexture('babyelsaearing' + this.count3);
            Main.baby_array[2] = this.count3;
            if (this.count3 == 6) {
                this.count3 = 0;
            }
            this.d1_arr[2] = 1;
            if (this.d1_arr.indexOf(0) < 0) {
                game.add.tween(this.playbtn.scale).to({
                    x: 1,
                    y: 1
                }, 400, Phaser.Easing.Bounce.Out, true);
            }

            effectssd = game.add.sprite(230, 300, 'effectssd');
            effectssd.anchor.setTo(0.5);
            effectssd.animations.add('effectssd');
            effectssd.animations.play('effectssd', 20, false).onComplete.add(function(evt) {
                evt.destroy();
            }, this);

        }, this);


        this.count4 = 0;
        this.icon0005 = game.add.sprite(430, 430, 'icon0005');
        this.icon0005.anchor.setTo(0.5);
        this.icon0005.scale.setTo(0.8);
        this.icon0005.inputEnabled = true;
        this.icon0005.input.useHandCursor = true;
        this.icon0005.events.onInputOver.add(this.btnOver, this);
        this.icon0005.events.onInputOut.add(this.btnOut, this);
        this.icon0005.events.onInputDown.add(function() {
            this.count4++
                this.babyelsacap1.alpha = 1;
            this.babyelsacap1.loadTexture('babyelsacap' + this.count4);
            Main.baby_array[1] = this.count4;
            if (this.count4 == 6) {
                this.count4 = 0;
            }

            this.d1_arr[3] = 1;
            if (this.d1_arr.indexOf(0) < 0) {
                game.add.tween(this.playbtn.scale).to({
                    x: 1,
                    y: 1
                }, 400, Phaser.Easing.Bounce.Out, true);
            }

            effectssd = game.add.sprite(230, 200, 'effectssd');
            effectssd.anchor.setTo(0.5);
            effectssd.animations.add('effectssd');
            effectssd.animations.play('effectssd', 20, false).onComplete.add(function(evt) {
                evt.destroy();
            }, this);

        }, this);


        this.count5 = 0;
        this.icon0006 = game.add.sprite(430, 520, 'icon0006');
        this.icon0006.anchor.setTo(0.5);
        this.icon0006.scale.setTo(0.8);
        this.icon0006.inputEnabled = true;
        this.icon0006.input.useHandCursor = true;
        this.icon0006.events.onInputOver.add(this.btnOver, this);
        this.icon0006.events.onInputOut.add(this.btnOut, this);
        this.icon0006.events.onInputDown.add(function() {
            this.count5++
                this.babyelsaneckkerchief1.alpha = 1;
            this.babyelsaneckkerchief1.loadTexture('babyelsaneckkerchief' + this.count5);
            Main.baby_array[3] = this.count5;
            if (this.count5 == 6) {
                this.count5 = 0
            }
            this.d1_arr[4] = 1;
            if (this.d1_arr.indexOf(0) < 0) {
                game.add.tween(this.playbtn.scale).to({
                    x: 1,
                    y: 1
                }, 400, Phaser.Easing.Bounce.Out, true);
            }

            effectssd = game.add.sprite(230, 350, 'effectssd');
            effectssd.anchor.setTo(0.5);
            effectssd.animations.add('effectssd');
            effectssd.animations.play('effectssd', 20, false).onComplete.add(function(evt) {
                evt.destroy();
            }, this);

        }, this);


        this.count6 = 0;
        this.icon0007 = game.add.sprite(430, 610, 'icon0007');
        this.icon0007.anchor.setTo(0.5);
        this.icon0007.scale.setTo(0.8);
        this.icon0007.inputEnabled = true;
        this.icon0007.input.useHandCursor = true;
        this.icon0007.events.onInputOver.add(this.btnOver, this);
        this.icon0007.events.onInputOut.add(this.btnOut, this);
        this.icon0007.events.onInputDown.add(function() {
            this.count6++
                this.babyelsabag1.alpha = 1;
            this.babyelsabag1.loadTexture('babyelsabag' + this.count6);
            Main.baby_array[0] = this.count6;
            if (this.count6 == 6) {
                this.count6 = 0
            }

            this.d1_arr[5] = 1;
            if (this.d1_arr.indexOf(0) < 0) {
                game.add.tween(this.playbtn.scale).to({
                    x: 1,
                    y: 1
                }, 400, Phaser.Easing.Bounce.Out, true);
            }

            effectssd = game.add.sprite(360, 580, 'effectssd');
            effectssd.anchor.setTo(0.5);
            effectssd.animations.add('effectssd');
            effectssd.animations.play('effectssd', 20, false).onComplete.add(function(evt) {
                evt.destroy();
            }, this);
        }, this);








        this.morebtn = game.add.sprite(85, 730, 'morebtn');
        this.morebtn.anchor.setTo(0.5);
        // this.morebtn.scale.setTo(0);
        this.morebtn.inputEnabled = true;
        this.morebtn.input.useHandCursor = true;
        this.morebtn.events.onInputUp.add(this.moreLink, this);
        this.morebtn.events.onInputOver.add(this.btnOver, this);
        this.morebtn.events.onInputOut.add(this.btnOut, this);

        this.playbtn = game.add.sprite(430, 730, 'donebtn');
        this.playbtn.anchor.setTo(0.5);
        this.playbtn.scale.setTo(0);
        this.playbtn.inputEnabled = true;
        this.playbtn.input.useHandCursor = true;
        this.playbtn.events.onInputUp.add(this.enterRoom, this);
        this.playbtn.events.onInputOver.add(this.btnOver, this);
        this.playbtn.events.onInputOut.add(this.btnOut, this);





        if (Main.shutterOn[0]) {
            this.shutter = game.add.sprite(0, 0, 'titlebg');
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
        CreateLinksInGame("Baby-Taylor-Airline-High-Hopes", "game", "logo");
    },
    moreLink: function() {
        CreateLinksInGame("Baby-Taylor-Airline-High-Hopes", "game", "more");
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
            game.state.start('airpot_entry');
        });

    },
}

// wwwwwwwwwwww

/**************************************************************************************************/

Main.bathroom_scene = function() {}

Main.bathroom_scene.prototype = {
    create: function() {
        game.physics.startSystem(Phaser.Physics.ARCADE);
        this.levelGroup = game.add.group();
        this.bg = game.add.sprite(0, 0, 'btbg');
        this.levelGroup.add(this.bg);

        this.bgroup = game.add.group();

        this.tbaby3 = game.add.sprite(272.7, 543.4, 'tbaby3');
        this.tbaby3.anchor.setTo(0.5);
        this.bgroup.add(this.tbaby3);

        this.mouth0001 = game.add.sprite(279, 377, 'mouth0001');
        this.mouth0001.anchor.setTo(0.5);
        this.bgroup.add(this.mouth0001);



        this.bfoam = game.add.sprite(277, 375, 'bfoam');
        this.bfoam.anchor.setTo(0.5);
        this.bfoam.alpha = 0;

        this.bpanel = game.add.sprite(247, 727.15, 'bpanel');
        this.bpanel.anchor.setTo(0.5);

        this.washer = game.add.sprite(270, 595.95, 'washer');
        this.washer.anchor.setTo(0.5);



        this.tpaste = game.add.sprite(574.75, 600.8, 'tpaste');
        this.tpaste.anchor.setTo(0.5);
        this.tpaste.scale.setTo(0.8);

        this.tpaste.events.onInputDown.add(function() {
            this.tpaste.inputEnabled = false;
            this.arrow2.visible = false;
            this.tpaste.visible = false;
            this.brush_ani.animations.add('brush_ani', [2, 3, 4, 5, 6]);
            this.brush_ani.animations.play('brush_ani', 10, false).onComplete.add(function() {
                this.brect1.inputEnabled = true;
                this.arrow1.visible = true;
                this.arrow1.x = 282;
                this.arrow1.y = 498;

            }, this);



        }, this);

        this.glass_ani = game.add.sprite(338, 480, 'glass_ani');
        this.glass_ani.anchor.setTo(0.5);

        this.glass_ani.visible = false;

        this.water_spitting = game.add.sprite(285, 501, 'water_spitting');
        this.water_spitting.anchor.setTo(0.5);
        this.water_spitting.visible = false;




        this.glass = game.add.sprite(581.9, 502.35, 'glass_ani');
        this.glass.anchor.setTo(0.5);

        this.glass.events.onInputDown.add(function() {
            this.arrow1.visible = false;
            this.arrow2.visible = true;
            this.arrow2.x = 277;
            this.arrow2.y = 330;
        }, this);
        this.glass.events.onInputUp.add(function() {
            this.glass.inputEnabled = false;
            this.arrow2.visible = false;
            if ((game.input.activePointer.x > 214 && game.input.activePointer.x < 338 && game.input.activePointer.y > 345 && game.input.activePointer.y < 455)) {
                this.glass.visible = false;
                this.glass_ani.visible = true;
                this.mouth0001.loadTexture('mouth0003');
                game.add.tween(this.bfoam).to({
                    alpha: 0
                }, 1300, Phaser.Easing.Quadratic.Out, true);

                this.glass_ani.animations.add('glass_ani', [6, 7, 8, 9, 10, 11, 12, 13, 14]);
                this.glass_ani.animations.play('glass_ani', 10, false).onComplete.add(function() {
                    game.add.tween(this.glass_ani).to({
                        x: 381,
                        y: 510
                    }, 700, Phaser.Easing.Quadratic.Out, true);
                    this.water_spitting.visible = true;
                    this.mouth0001.loadTexture('mouth0003');
                    this.water_spitting.animations.add('water_spitting');
                    this.water_spitting.animations.play('water_spitting', 15, false).onComplete.add(function() {
                        this.mouth0001.loadTexture('mouth0001');
                        game.add.tween(this.game0002.scale).to({
                            x: 1,
                            y: 1
                        }, 700, Phaser.Easing.Quadratic.Out, true);
                        // },this);
                    }, this);
                }, this);



            } else {
                game.add.tween(this.glass).to({
                    x: 381,
                    y: 502.35
                }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                    this.glass.inputEnabled = true;
                    this.arrow1.visible = true;
                }, this);
            }
        }, this);
        this.brush_ani = game.add.sprite(311.9, 502.35, 'brush_ani');
        this.brush_ani.anchor.setTo(0.5);

        this.bcnt = 0;

        this.brushdrag = false;

        this.brect1 = game.add.graphics(410, 375);
        this.brect1.beginFill(0x000000, 0);
        this.brect1.drawRect(0, 0, 40, 250);
        this.brect1.inputEnabled = true;
        this.brect1.events.onInputDown.add(function() {
            this.bcnt++;
            this.brect1.inputEnabled = false;
            if (this.bcnt == 1) {
                this.arrow1.visible = false;
                game.add.tween(this.tpaste).to({
                    x: 454
                }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                    this.arrow2.visible = true;
                    this.arrow2.x = 455;
                    this.arrow2.y = 544;
                    this.tpaste.inputEnabled = true;
                }, this);

                this.brush_ani.frame = 1;
                this.brect1.angle = 90;
                this.brect1.x = 420;
                this.brect1.y = 520;
            }
            if (this.bcnt == 2) {
                this.mouth0001.loadTexture('mouth0002');
                this.brushdrag = true;
                this.brush_ani.frame = 8;
                this.brush_ani.angle = -90
                this.strike1.body.enable = true;
                this.arrow1.visible = true;
                this.arrow1.x = 280;
                this.arrow1.y = 330;
            }


        }, this);



        this.dragCircle = game.add.graphics(250, 145);
        this.dragCircle.beginFill(0x000000, 0);
        this.dragCircle.drawCircle(0, 0, 15);

        var strikeposX = [248, 301, 317, 587, 202, 349, 464, 416, 420];
        var strikeposY = [379, 379, 121, 195, 333, 142, 142, 397, 490];

        for (i = 1; i <= 2; i++) {
            this['strike' + i] = game.add.graphics(strikeposX[i - 1], strikeposY[i - 1]);
            this['strike' + i].beginFill(0x00000, 0);
            this['strike' + i].drawCircle(0, 0, 30);
            this['strike' + i].nid = i;
            game.physics.arcade.enable([this['strike' + i]]);
            this['strike' + i].body.collideWorldBounds = true;
            this['strike' + i].body.enable = false;
        }

        var arro2x = [433, 413, 442, 705, 113, 410, 710];
        var arro2y = [342, 600, 414, 420, 402, 130, 440];

        for (i = 1; i <= 2; i++) {
            this['arrow' + i] = game.add.sprite(arro2x[i - 1], arro2y[i - 1], 'arrow');
            this['arrow' + i].anchor.setTo(0.5);
            this['arrow' + i].animations.add('arrow');
            this['arrow' + i].animations.play('arrow', 12, true);
            this['arrow' + i].visible = false;
            if (i == 2) {

            }
            if (i == 1) {
                this['arrow' + i].visible = true;
            }

        }



        game.physics.arcade.enable([this.dragCircle, this.strike1]);
        this.strike1.body.onCollide = new Phaser.Signal();
        this.strike1.body.onCollide.add(this.foamfun, this);

        game.physics.arcade.enable([this.dragCircle, this.strike2]);
        this.strike2.body.onCollide = new Phaser.Signal();
        this.strike2.body.onCollide.add(this.foamfun2, this);

        this.fcnt = 0;


        this.gicon6 = game.add.group();
        this.game0002 = game.add.sprite(430, 730, 'donebtn');
        this.game0002.anchor.setTo(0.5);
        this.game0002.scale.setTo(0);
        this.game0002.inputEnabled = true;
        this.game0002.input.useHandCursor = true;
        this.game0002.events.onInputOver.add(this.btnOver, this);
        this.game0002.events.onInputOut.add(this.btnOut, this);
        this.game0002.events.onInputDown.add(function() {
            game.add.tween(this.shutter).to({
                y: 0
            }, 1500, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                game.state.start('bathroom2_scene');
            }, this);
        }, this);
        this.gicon6.add(this.game0002);



        this.game0004 = game.add.sprite(85, 730, 'morebtn');
        this.game0004.anchor.setTo(0.5);
        // this.game0004.scale.setTo(0.8);
        this.game0004.inputEnabled = true;
        this.game0004.input.useHandCursor = true;
        this.game0004.events.onInputOver.add(this.btnOver, this);
        this.game0004.events.onInputOut.add(this.btnOut, this);
        this.game0004.events.onInputUp.add(this.moreLink, this);
        this.gicon6.add(this.game0004);

        if (Main.shutterOn[0]) {
            this.shutter = game.add.sprite(0, 0, 'titlebg');
            game.add.tween(this.shutter).to({
                y: -850
            }, 2000, Phaser.Easing.Quadratic.Out, true);
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
    foamfun: function() {
        this.fcnt++;
        this.arrow1.visible = false;
        this.strike1.body.enable = false;
        game.add.tween(this.bfoam).to({
            alpha: (this.fcnt / 10)
        }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
            this.strike2.body.enable = true;
        }, this);

    },
    foamfun2: function() {
        this.fcnt++;
        this.strike2.body.enable = false;
        game.add.tween(this.bfoam).to({
            alpha: (this.fcnt / 10)
        }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
            if (this.fcnt < 10) {
                this.strike1.body.enable = true;
            } else {
                this.brushdrag = false;
                this.dragCircle.y = 800;
                game.add.tween(this.brush_ani).to({
                    x: 650
                }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                    game.add.tween(this.glass).to({
                        x: 381
                    }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                        this.glass.inputEnabled = true;
                        this.glass.input.enableDrag();
                        this.arrow1.visible = true;
                        this.arrow1.x = 442;
                        this.arrow1.y = 436;
                    }, this);
                }, this);

            }
        }, this);

    },
    updateyeblink: function() {
        this.eye_blink.play('eye_blink', 10, false);
    },
    update: function() {
        if (this.dummydrag) {
            this.dummyobject.x = game.input.activePointer.x;
            this.dummyobject.y = game.input.activePointer.y;
            // console.log(game.input.activePointer.x+':'+game.input.activePointer.y);
        }
        if (this.brushdrag) {
            this.brush_ani.x = game.input.activePointer.x + 100;
            this.brush_ani.y = game.input.activePointer.y + 117;
            this.dragCircle.x = game.input.activePointer.x;
            this.dragCircle.y = game.input.activePointer.y;
        }
        game.physics.arcade.collide(this.dragCircle, this.strike1);
        game.physics.arcade.collide(this.dragCircle, this.strike2);

    },
    openLink: function() {
        CreateLinksInGame("Baby-Taylor-Caring-Story-New-Room", "game", "logo");
    },
    moreLink: function() {
        CreateLinksInGame("Baby-Taylor-Caring-Story-New-Room", "game", "more");
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
            game.state.start('bathroom2_scene');
        });

    },
}

/**************************************************************************************/

//face wash

Main.bathroom2_scene = function() {}

Main.bathroom2_scene.prototype = {
    create: function() {
        game.physics.startSystem(Phaser.Physics.ARCADE);

        this.levelGroup = game.add.group();
        this.bg = game.add.sprite(0, 0, 'btbg');
        this.levelGroup.add(this.bg);

        this.bgroup = game.add.group();

        this.tbaby2 = game.add.sprite(272.7, 543.4, 'tbaby2');
        this.tbaby2.anchor.setTo(0.5);
        this.bgroup.add(this.tbaby2);

        this.eye_blink3 = game.add.sprite(277, 288, 'eye_blink2');
        this.eye_blink3.anchor.setTo(0.5);
        this.eye_blink3.frame = 4;
        this.eye_blink3.visible = false;
        this.bgroup.add(this.eye_blink3);

        this.eye_blink2 = game.add.sprite(277, 294, 'eye_blink2');
        this.eye_blink2.anchor.setTo(0.5);
        //   this.eye_blink2.animations.add('eye_blink2').onComplete.add(function(){
        // this.eye_blink2.frame = 0;
        //  },this);
        // this.eye_blink2.animations.play('eye_blink2',10,false);
        // game.time.events.loop(2700,this.updateyeblink2,this);
        // this.eye_blink2.frame = 4;
        this.bgroup.add(this.eye_blink2);

        // this.clap_ani1 = game.add.sprite(272.7,410,'clap_ani1');
        // this.clap_ani1.anchor.setTo(0.5);
        // this.clap_ani1.visible=false;

        // this.clap_ani2 = game.add.sprite(272.7,410,'clap_ani2');
        // this.clap_ani2.anchor.setTo(0.5);
        // this.clap_ani2.visible=false;

        // this.clap_ani3 = game.add.sprite(272.7,410,'clap_ani3');
        // this.clap_ani3.anchor.setTo(0.5);
        // this.clap_ani3.visible=false;

        this.ffoam = game.add.sprite(290, 300, 'ffoam');
        this.ffoam.anchor.setTo(0.5);
        this.ffoam.alpha = 0;

        this.fwater = game.add.sprite(281, 293, 'fwater');
        this.fwater.anchor.setTo(0.5);
        this.fwater.alpha = 0;

        this.bpanel = game.add.sprite(247, 727.15, 'bpanel');
        this.bpanel.anchor.setTo(0.5);

        this.soapdrag = false;

        this.soap = game.add.sprite(112.35, 575.3, 'shmp');
        this.soap.anchor.setTo(0.5);
        this.soap.scale.setTo(0.5);
        // this.soap.inputEnabled=true;
        // this.soap.input.useHandCursor=true;
        // this.soap.input.enableDrag();
        this.soap.events.onInputDown.add(function() {
            this.arrow2.visible = true;
            this.arrow1.visible = false;
        }, this);
        this.soap.events.onInputDown.add(function() {

        }, this);
        this.soap.events.onInputUp.add(function() {

            if ((game.input.activePointer.x > 150 && game.input.activePointer.x < 400 && game.input.activePointer.y > 150 && game.input.activePointer.y < 420)) {
                this.arrow2.visible = false;
                this.soap.visible = false;
                this.ani_shmp.visible = true;
                this.soap.inputEnabled = false;
                this.ani_shmp.animations.add('ani_shmp');
                this.ani_shmp.animations.play('ani_shmp', 10, false).onComplete.add(function() {
                    this.soap.visible = true;

                    game.add.tween(this.soap).to({
                        x: 112.35,
                        y: 575.3
                    }, 800, Phaser.Easing.Quadratic.Out, true);

                    this.h_hand.visible = true;
                    this.soapdrag = true;
                    this.strike1.body.enable = true;
                }, this);

            } else {
                this.arrow1.visible = true;
                this.arrow2.visible = false;

                game.add.tween(this.soap).to({
                    x: 112.35,
                    y: 575.3
                }, 800, Phaser.Easing.Quadratic.Out, true);

            }
        }, this);

        // this.soap.inputEnabled=false;
        // this.soapdrag = true;
        // this.strike1.body.enable=true;



        this.ani_shmp = game.add.sprite(220, 300, 'ani_shmp');
        this.ani_shmp.anchor.setTo(0.5);
        this.ani_shmp.scale.setTo(0.6);
        this.ani_shmp.visible = false;

        this.h_hand = game.add.sprite(240, 565, 'h_hand');
        this.h_hand.anchor.setTo(0.5);
        this.h_hand.visible = false;

        this.spraydrag = false;

        this.spray = game.add.sprite(240, 565, 'spray');
        this.spray.anchor.setTo(0.5);
        this.spray.inputEnabled = true;
        this.spray.events.onInputDown.add(function() {
            this.spray.inputEnabled = false;
            this.spraydrag = true;
            this.arrow1.visible = false;
            this.arrow2.visible = true;
            this.eye_blink2.visible = false;
            this.eye_blink3.visible = true;

            if (this.fcnt > 1) {
                this.bcir2.inputEnabled = true;
            } else {
                this.bcir1.inputEnabled = true;
            }

        }, this);

        this.toweldrag = false;

        this.towel = game.add.sprite(446.05, 610.1, 'towel');
        this.towel.anchor.setTo(0.5);
        this.towel.angle = -90;

        this.towel.events.onInputDown.add(function() {
            this.towel.inputEnabled = false;
            this.towel.angle = 0;
            this.toweldrag = true;
            this.strike3.body.enable = true;
            this.arrow1.visible = false;
            this.arrow2.visible = true;

        }, this);






        this.scnt = 0;
        this.acnt = 0;

        this.bcir1 = game.add.graphics(280, 287);
        this.bcir1.beginFill(0x000000, 0);
        this.bcir1.drawCircle(0, 0, 280);

        this.bcir1.events.onInputDown.add(function() {
            this.scnt++;
            this.bcir1.inputEnabled = false;
            this.arrow2.visible = false;
            this.acnt += 0.3;
            this.spraydrag = false
            this.spray.x = game.input.activePointer.x - 40;
            this.spray.y = game.input.activePointer.y + 60;
            this.spray.animations.add('spray');
            this.spray.animations.play('spray', 20, false).onComplete.add(function() {

                game.add.tween(this.fwater).to({
                    alpha: this.acnt
                }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                    if (this.scnt <= 2) {
                        this.bcir1.inputEnabled = true;
                        this.spraydrag = true;
                        this.arrow2.visible = true;
                    } else {
                        game.add.tween(this.spray).to({
                            x: 240,
                            y: 565
                        }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                            this.soap.inputEnabled = true;
                            this.soap.input.useHandCursor = true;
                            this.soap.input.enableDrag();
                            this.arrow1.visible = true;
                            this.arrow1.x = 112;
                            this.arrow1.y = 500;
                        }, this);
                    }
                }, this);

            }, this);

        }, this);

        this.scnt2 = 0;
        this.acnt3 = 0;
        this.fcnt2 = 1;

        this.bcir2 = game.add.graphics(280, 287);
        this.bcir2.beginFill(0x000000, 0);
        this.bcir2.drawCircle(0, 0, 280);

        this.bcir2.events.onInputDown.add(function() {
            this.scnt2++;
            console.log('nnn')
            this.bcir2.inputEnabled = false;
            this.arrow2.visible = false;
            this.acnt3 += 0.2;
            this.fcnt2 -= 0.33;
            this.spraydrag = false
            this.spray.x = game.input.activePointer.x - 40;
            this.spray.y = game.input.activePointer.y + 60;
            this.spray.animations.add('spray');
            this.spray.animations.play('spray', 20, false).onComplete.add(function() {
                game.add.tween(this.ffoam).to({
                    alpha: this.fcnt2
                }, 700, Phaser.Easing.Quadratic.Out, true)
                game.add.tween(this.fwater).to({
                    alpha: this.acnt3
                }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                    if (this.scnt2 <= 2) {
                        this.bcir2.inputEnabled = true;
                        this.spraydrag = true;
                        this.arrow2.visible = true;
                    } else {
                        game.add.tween(this.spray).to({
                            x: 240,
                            y: 565
                        }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                            this.towel.inputEnabled = true;
                            this.arrow1.visible = true;
                            this.arrow1.x = 443;
                            this.arrow1.y = 542;
                        }, this);
                    }
                }, this);

            }, this);

        }, this);


        this.dragCircle = game.add.graphics(250, 145);
        this.dragCircle.beginFill(0x000000, 0);
        this.dragCircle.drawCircle(0, 0, 15);


        var strikeposX = [200, 355, 200, 355, 202, 349, 464, 416, 420];
        var strikeposY = [300, 300, 300, 300, 333, 142, 142, 397, 490];

        for (i = 1; i <= 4; i++) {
            this['strike' + i] = game.add.graphics(strikeposX[i - 1], strikeposY[i - 1]);
            this['strike' + i].beginFill(0x00000, 0);
            this['strike' + i].drawCircle(0, 0, 120);
            this['strike' + i].nid = i;
            game.physics.arcade.enable([this['strike' + i]]);
            this['strike' + i].body.collideWorldBounds = true;
            this['strike' + i].body.enable = false;
        }

        var arro2x = [284, 280, 442, 705, 113, 410, 710];
        var arro2y = [440, 172, 414, 420, 402, 130, 440];

        for (i = 1; i <= 2; i++) {
            this['arrow' + i] = game.add.sprite(arro2x[i - 1], arro2y[i - 1], 'arrow');
            this['arrow' + i].anchor.setTo(0.5);
            this['arrow' + i].animations.add('arrow');
            this['arrow' + i].animations.play('arrow', 12, true);
            this['arrow' + i].visible = false;
            if (i == 2) {

            }
            if (i == 1) {
                this['arrow' + i].visible = true;
            }

        }




        game.physics.arcade.enable([this.dragCircle, this.strike1]);
        this.strike1.body.onCollide = new Phaser.Signal();
        this.strike1.body.onCollide.add(this.foamfun, this);

        game.physics.arcade.enable([this.dragCircle, this.strike2]);
        this.strike2.body.onCollide = new Phaser.Signal();
        this.strike2.body.onCollide.add(this.foamfun2, this);

        game.physics.arcade.enable([this.dragCircle, this.strike3]);
        this.strike3.body.onCollide = new Phaser.Signal();
        this.strike3.body.onCollide.add(this.cleanfun, this);

        game.physics.arcade.enable([this.dragCircle, this.strike4]);
        this.strike4.body.onCollide = new Phaser.Signal();
        this.strike4.body.onCollide.add(this.cleanfun2, this);

        this.fcnt = 0;
        this.acnt2 = 1;

        this.fcnt4 = 0;
        this.acnt4 = 1;

        this.gicon6 = game.add.group();
        this.game0002 = game.add.sprite(430, 730, 'donebtn');
        this.game0002.anchor.setTo(0.5);
        this.game0002.scale.setTo(0);
        this.game0002.inputEnabled = true;
        this.game0002.input.useHandCursor = true;
        this.game0002.events.onInputOver.add(this.btnOver, this);
        this.game0002.events.onInputOut.add(this.btnOut, this);
        this.game0002.events.onInputDown.add(function() {
            game.add.tween(this.shutter).to({
                y: 0
            }, 1500, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                game.state.start('hair_scene');
            }, this);
        }, this);
        this.gicon6.add(this.game0002);



        this.game0004 = game.add.sprite(85, 730, 'morebtn');
        this.game0004.anchor.setTo(0.5);
        this.game0004.scale.setTo(0.8);
        this.game0004.inputEnabled = true;
        this.game0004.input.useHandCursor = true;
        this.game0004.events.onInputOver.add(this.btnOver, this);
        this.game0004.events.onInputOut.add(this.btnOut, this);
        this.game0004.events.onInputUp.add(this.moreLink, this);
        this.gicon6.add(this.game0004);

        if (Main.shutterOn[0]) {
            this.shutter = game.add.sprite(0, 0, 'titlebg');
            game.add.tween(this.shutter).to({
                y: -850
            }, 2000, Phaser.Easing.Quadratic.Out, true);
        }

        this.thcnt = 0;


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
    clapfun1: function() {
        //     this.clap_ani3.visible=false;
        // this.clap_ani1.visible=true;
        // this.clap_ani1.animations.add('clap_ani1');
        // this.clap_ani1.animations.play('clap_ani1',10,false).onComplete.add(function(){
        this.clapfun2();

        // },this);
    },
    clapfun2: function() {
        // this.clap_ani1.visible=false;
        // this.clap_ani2.visible=true;
        // this.clap_ani2.animations.add('clap_ani2');
        // this.clap_ani2.animations.play('clap_ani2',10,false).onComplete.add(function(){
        this.clapfun3();

        // },this);
    },

    clapfun3: function() {
        //     this.thcnt++;
        // this.clap_ani2.visible=false;
        //  this.clap_ani3.visible=true;
        //  this.clap_ani3.animations.add('clap_ani3');
        //  this.clap_ani3.animations.play('clap_ani3',10,false).onComplete.add(function(){
        //     this.thcnt++;
        //     if(this.thcnt==1){
        //      this.clapfun1();
        //       }else{
        //  this.clap_ani3.visible=false;
        //  this.bgroup.visible=true;
        this.eye_blink2.visible = true;
        this.eye_blink3.visible = false;
        // }

        // },this);
    },
    updateyeblink2: function() {
        this.eye_blink2.play('eye_blink2', 10, false);
    },
    foamfun: function() {
        this.fcnt++;
        this.acnt2 -= 0.1;
        this.arrow2.visible = false;
        this.arrow1.visible = false;
        this.strike1.body.enable = false;
        game.add.tween(this.fwater).to({
            alpha: this.acnt2
        }, 700, Phaser.Easing.Quadratic.Out, true);
        game.add.tween(this.ffoam).to({
            alpha: (this.fcnt / 10)
        }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
            this.strike2.body.enable = true;
        }, this);

    },
    foamfun2: function() {
        this.fcnt++;
        this.acnt2 -= 0.1;
        this.strike2.body.enable = false;
        game.add.tween(this.ani_shmp).to({
            alpha: 0
        }, 700, Phaser.Easing.Quadratic.Out, true);
        game.add.tween(this.fwater).to({
            alpha: this.acnt2
        }, 700, Phaser.Easing.Quadratic.Out, true);
        game.add.tween(this.ffoam).to({
            alpha: (this.fcnt / 10)
        }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
            if (this.fcnt < 10) {
                this.strike1.body.enable = true;
            } else {
                this.soapdrag = false;
                this.h_hand.visible = false;
                this.dragCircle.y = 800;

                game.add.tween(this.soap).to({
                    x: 112.35,
                    y: 575.3
                }, 800, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                    this.arrow1.visible = true;
                    this.arrow1.x = 284;
                    this.arrow1.y = 444;
                    this.spray.inputEnabled = true;

                }, this);

            }
        }, this);

    },

    cleanfun: function() {
        this.fcnt4++;
        this.acnt4 -= 0.1;
        this.arrow2.visible = false;
        this.arrow1.visible = false;
        this.strike3.body.enable = false;

        game.add.tween(this.fwater).to({
            alpha: this.acnt4
        }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
            this.strike4.body.enable = true;
        }, this);

    },
    cleanfun2: function() {
        this.fcnt4++;
        this.acnt4 -= 0.1;
        this.strike4.body.enable = false;
        game.add.tween(this.fwater).to({
            alpha: this.acnt4
        }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
            if (this.fcnt4 < 10) {
                this.strike3.body.enable = true;
            } else {
                this.toweldrag = false;
                this.dragCircle.y = 800;
                game.add.tween(this.towel).to({
                    x: 446.05,
                    y: 610
                }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                    this.towel.angle = -90
                    game.add.tween(this.game0002.scale).to({
                        x: 1,
                        y: 1
                    }, 700, Phaser.Easing.Quadratic.Out, true);
                    this.eye_blink2.y = 298;
                    this.eye_blink2.animations.add('eye_blink', [0]).onComplete.add(function() {
                        this.eye_blink2.frame = 0;
                    }, this);
                    this.eye_blink2.animations.play('eye_blink', 10, false);
                    // game.time.events.loop(3000,this.updateyeblink,this);

                    // this.bgroup.visible=false;

                    this.clapfun1();


                }, this);

            }
        }, this);

    },
    updateyeblink: function() {
        this.eye_blink2.play('eye_blink', 10, false);
    },
    update: function() {
        // console.log(game.input.activePointer.x+':'+game.input.activePointer.y);

        if (this.dummydrag) {
            this.dummyobject.x = game.input.activePointer.x;
            this.dummyobject.y = game.input.activePointer.y;
        }
        if (this.spraydrag) {
            this.spray.x = game.input.activePointer.x - 40;
            this.spray.y = game.input.activePointer.y + 60;
        }

        if (this.soapdrag) {
            this.h_hand.x = game.input.activePointer.x;
            this.h_hand.y = game.input.activePointer.y;
            this.dragCircle.x = game.input.activePointer.x;
            this.dragCircle.y = game.input.activePointer.y;
        }
        if (this.toweldrag) {
            this.towel.x = game.input.activePointer.x;
            this.towel.y = game.input.activePointer.y;
            this.dragCircle.x = game.input.activePointer.x;
            this.dragCircle.y = game.input.activePointer.y;
        }
        game.physics.arcade.collide(this.dragCircle, this.strike1);
        game.physics.arcade.collide(this.dragCircle, this.strike2);
        game.physics.arcade.collide(this.dragCircle, this.strike3);
        game.physics.arcade.collide(this.dragCircle, this.strike4);


    },
    openLink: function() {
        CreateLinksInGame("Baby-Taylor-Caring-Story-New-Room", "game", "logo");
    },
    moreLink: function() {
        CreateLinksInGame("Baby-Taylor-Caring-Story-New-Room", "game", "more");
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
            game.state.start('hair_scene');
        });
    },
}


//l111111111


Main.leval1 = function() {}

Main.leval1.prototype = {

    create: function() {

        this.d1_arr = [0, 0];

        this.levelGroup = game.add.group();
        this.introbg = game.add.sprite(0, 0, 'lbg');
        this.levelGroup.add(this.introbg);

        this.lbg = game.add.sprite(0, 0, 'lbg');

        this.ground = game.add.sprite(252, 713, 'ground');
        this.ground.anchor.setTo(0.5);



        this.Baseket1 = game.add.sprite(155, 660, 'Baseket1');
        this.Baseket1.anchor.setTo(0.5);

        this.neilcutter_2 = game.add.sprite(170, 626, 'neilcutter2');
        this.neilcutter_2.anchor.setTo(0.5);
        this.neilcutter_2.visible = false;

        this.nailpolish_2 = game.add.sprite(120, 637, 'nailpolish');
        this.nailpolish_2.anchor.setTo(0.5);
        this.nailpolish_2.visible = false;


        this.neilcutter1 = game.add.sprite(150, 638, 'neilcutter1');
        this.neilcutter1.anchor.setTo(0.5);
        this.neilcutter1.visible = false;


        this.Baseket = game.add.sprite(155, 660, 'Baseket');
        this.Baseket.anchor.setTo(0.5);

        this.neilcutter_1 = game.add.sprite(420, 656, 'neilcutter1');
        this.neilcutter_1.anchor.setTo(0.5);
        this.neilcutter_1.visible = false;
        this.neilcutter_1.events.onInputDown.add(function() {
            this.p_arrow9.visible = false;
            this.p_arrow8.visible = true;

        }, this);
        this.neilcutter_1.events.onInputUp.add(function() {

            if ((game.input.activePointer.x > 50 && game.input.activePointer.x < 250 && game.input.activePointer.y > 570 && game.input.activePointer.y < 670)) {
                this.p_arrow8.visible = false;
                this.neilcutter_1.visible = false;
                this.neilcutter1.visible = true;
                //          this.d1_arr[0]=1;
                //       if(this.d1_arr.indexOf(0)<0){
                game.add.tween(this.playbtn.scale).to({
                    x: 1,
                    y: 1
                }, 400, Phaser.Easing.Quadratic.Out, true);
                //          }
            } else {
                this.p_arrow9.visible = true;
                this.p_arrow8.visible = false;
                game.add.tween(this.neilcutter_1).to({
                    x: 420,
                    y: 656
                }, 800, Phaser.Easing.Quadratic.Out, true);

            }
        }, this);



        this.neilcutter2 = game.add.sprite(375, 656, 'neilcutter2');
        this.neilcutter2.anchor.setTo(0.5);
        this.neilcutter2.visible = false;
        this.neilcutter2.events.onInputDown.add(function() {
            this.p_arrow7.visible = false;
            this.p_arrow8.visible = true;

        }, this);
        this.neilcutter2.events.onInputUp.add(function() {

            if ((game.input.activePointer.x > 50 && game.input.activePointer.x < 250 && game.input.activePointer.y > 570 && game.input.activePointer.y < 670)) {
                this.p_arrow8.visible = false;
                this.neilcutter2.visible = false;
                this.neilcutter_2.visible = true;
                this.p_arrow9.visible = true;

                this.neilcutter_1.inputEnabled = true;
                this.neilcutter_1.input.useHandCursor = true;
                this.neilcutter_1.input.enableDrag();
            } else {
                this.p_arrow7.visible = true;
                this.p_arrow8.visible = false;
                game.add.tween(this.neilcutter2).to({
                    x: 375,
                    y: 656
                }, 800, Phaser.Easing.Quadratic.Out, true);

            }
        }, this);



        this.nailpolish = game.add.sprite(320, 647, 'nailpolish');
        this.nailpolish.anchor.setTo(0.5);
        this.nailpolish.visible = false;
        this.nailpolish.events.onInputDown.add(function() {
            this.p_arrow3.visible = false;
            this.p_arrow4.visible = true;
        }, this);
        this.nailpolish.events.onInputUp.add(function() {

            if ((game.input.activePointer.x > 50 && game.input.activePointer.x < 250 && game.input.activePointer.y > 570 && game.input.activePointer.y < 670)) {
                this.nailpolish.visible = false;
                this.nailpolish_2.visible = true;
                this.p_arrow4.visible = false;

                this.neilcutter2.inputEnabled = true;
                this.neilcutter2.input.useHandCursor = true;
                this.neilcutter2.input.enableDrag();
                this.p_arrow7.visible = true;

            } else {
                this.p_arrow3.visible = true;
                this.p_arrow4.visible = false;
                game.add.tween(this.nailpolish).to({
                    x: 320,
                    y: 647
                }, 800, Phaser.Easing.Quadratic.Out, true);

            }
        }, this);

        this.frank0002 = game.add.sprite(130, 275, 'frank0002');
        this.frank0002.anchor.setTo(0.5);
        this.frank0002.scale.setTo(0.8);
        // this.frank0002.inputEnabled=true;
        // this.frank0002.input.useHandCursor=true;
        this.frank0002.events.onInputDown.add(function() {
            this.p_arrow1.visible = false;
            this.frank0002.inputEnabled = false;
            this.bag2.visible = true;
            this.frank0002.loadTexture('frank0001');
            game.world.bringToTop(this.frank0002);
            game.world.bringToTop(this.f2_shutter);

            game.add.tween(this.bag2).to({
                visible: false
            }, 500, Phaser.Easing.Quadratic.Out, true);
            game.add.tween(this.bag_2.scale).to({
                x: 1,
                y: 1
            }, 2000, Phaser.Easing.Quadratic.Out, true, 500);

            game.add.tween(this.bag_2.scale).to({
                x: 0.6,
                y: 0.6
            }, 2000, Phaser.Easing.Quadratic.Out, true, 500);
            game.add.tween(this.bag_2).to({
                visible: true,
                x: 375,
                y: 280
            }, 2000, Phaser.Easing.Quadratic.Out, true, 500).onComplete.add(function() {

            }, this);

            game.add.tween(this.frank0002).to({
                y: 350
            }, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {

                this.tween2 = game.add.tween(this.tv1_2).to({
                    alpha: [1, 0, 1, 0, 1, 0]
                }, 2000, 'Linear', true, 700);

                this.f2_shutter.animations.add('f2_shutter', [0, 1, 2, 3, 4, 5, 6, 6, 6, 6, 6, 6, 6, 5, 4, 3, 2, 1, 0]);
                this.f2_shutter.animations.play('f2_shutter', 10, false).onComplete.add(function() {
                    game.add.tween(this.bag_2.scale).to({
                        x: 1,
                        y: 1
                    }, 2000, Phaser.Easing.Quadratic.Out, true);
                    game.add.tween(this.bag_2).to({
                        visible: true,
                        x: 375,
                        y: 500
                    }, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                        this.bag_2.inputEnabled = true;
                        this.bag_2.input.useHandCursor = true;
                        this.p_arrow2.visible = true;
                        this.f2_shutter1.visible = true;
                        this.f2_shutter.visible = false;

                    }, this);
                }, this);

                this.f1_shutter.animations.add('f1_shutter', [0, 1, 2, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 3, 2, 1, 0]);
                this.f1_shutter.animations.play('f1_shutter', 10, false).onComplete.add(function() {


                    game.add.tween(this.frank0002.scale).to({
                        x: 1,
                        y: 1
                    }, 2000, Phaser.Easing.Quadratic.Out, true, 500);
                    game.add.tween(this.frank0002).to({
                        y: 400
                    }, 2000, Phaser.Easing.Quadratic.Out, true, 500).onComplete.add(function() {

                    }, this);

                }, this);
            }, this);

            // game.add.tween(this.bag_2).to({visible:true,x:375 ,y:500}, 2000, Phaser.Easing.Quadratic.Out, true,500).onComplete.add(function(){

            //  game.add.tween(this.frank0002.scale).to({x:1,y:1}, 2000, Phaser.Easing.Quadratic.Out, true);
            //  game.add.tween(this.frank0002).to({y:400}, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
            //   this.bag_2.inputEnabled=true;
            // this.bag_2.input.useHandCursor=true;
            // this.p_arrow2.visible=true;

            //  },this);
            // },this);
        }, this);


        this.boy0001 = game.add.sprite(130, 255, 'boy0001');
        this.boy0001.anchor.setTo(0.5);
        this.boy0001.scale.setTo(0.4);
        // this.boy0001.visible=false;
        // this.boy0001.inputEnabled=true;
        // this.boy0001.input.useHandCursor=true;
        this.boy0001.events.onInputDown.add(function() {
            this.p_arrow5.visible = false;
            this.boy0001.inputEnabled = false;
            this.bag1.visible = true;
            this.boy0001.loadTexture('boy0002');
            game.world.bringToTop(this.boy0001);
            game.world.bringToTop(this.f2_shutter);

            game.add.tween(this.bag1).to({
                visible: false
            }, 500, Phaser.Easing.Quadratic.Out, true);
            game.add.tween(this.bag_1.scale).to({
                x: 1,
                y: 1
            }, 2000, Phaser.Easing.Quadratic.Out, true, 500);
            game.add.tween(this.bag_1.scale).to({
                x: 0.7,
                y: 0.7
            }, 2000, Phaser.Easing.Quadratic.Out, true, 500);
            game.add.tween(this.bag_1).to({
                visible: true,
                x: 375,
                y: 280
            }, 2000, Phaser.Easing.Quadratic.Out, true, 500).onComplete.add(function() {


            }, this);

            game.add.tween(this.boy0001.scale).to({
                x: 0.45,
                y: 0.45
            }, 2000, Phaser.Easing.Quadratic.Out, true);
            game.add.tween(this.boy0001).to({
                y: 330
            }, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {

                this.tween2 = game.add.tween(this.tv1_2).to({
                    alpha: [1, 0, 1, 0, 1, 0]
                }, 2000, 'Linear', true, 700);

                this.f1_shutter.animations.add('f1_shutter', [0, 1, 2, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 3, 2, 1, 0]);
                this.f1_shutter.animations.play('f1_shutter', 10, false).onComplete.add(function() {


                    game.add.tween(this.bag_1.scale).to({
                        x: 1,
                        y: 1
                    }, 2000, Phaser.Easing.Quadratic.Out, true, 500);
                    game.add.tween(this.bag_1).to({
                        visible: true,
                        x: 375,
                        y: 500
                    }, 2000, Phaser.Easing.Quadratic.Out, true, 500).onComplete.add(function() {

                        game.add.tween(this.frank0002).to({
                            y: 300
                        }, 2000, Phaser.Easing.Quadratic.Out, true);
                        this.bag_1.inputEnabled = true;
                        this.bag_1.input.useHandCursor = true;
                        this.p_arrow6.visible = true;

                    }, this);
                }, this);
                this.f2_shutter.animations.add('f2_shutter', [0, 1, 2, 3, 4, 5, 6, 6, 6, 6, 6, 6, 6, 5, 4, 3, 2, 1, 0]);
                this.f2_shutter.animations.play('f2_shutter', 10, false).onComplete.add(function() {

                    game.add.tween(this.boy0001.scale).to({
                        x: 0.5,
                        y: 0.5
                    }, 2000, Phaser.Easing.Quadratic.Out, true);
                    game.add.tween(this.boy0001).to({
                        y: 400
                    }, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {

                    }, this);
                }, this);
            }, this);


            // game.add.tween(this.bag_1).to({visible:true,x:375 ,y:500}, 2000, Phaser.Easing.Quadratic.Out, true,500).onComplete.add(function(){

            //  game.add.tween(this.boy0001.scale).to({x:0.5,y:0.5}, 2000, Phaser.Easing.Quadratic.Out, true);
            //  game.add.tween(this.boy0001).to({y:400}, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){

            //  game.add.tween(this.frank0002).to({y:300}, 2000, Phaser.Easing.Quadratic.Out, true);
            //  this.bag_1.inputEnabled=true;
            //  this.bag_1.input.useHandCursor=true;
            //  this.p_arrow6.visible=true;

            //  },this);
            // },this);
        }, this);


        this.gril0001 = game.add.sprite(125, 320, 'gril0001');
        this.gril0001.anchor.setTo(0.5);
        this.gril0001.scale.setTo(0.4);
        // this.gril0001.visible=false;
        this.gril0001.inputEnabled = true;
        this.gril0001.input.useHandCursor = true;
        this.gril0001.events.onInputDown.add(function() {
            this.p_arrow1.visible = false;
            this.gril0001.inputEnabled = false;
            this.bag3.visible = true;
            this.gril0001.loadTexture('gril0002');

            game.world.bringToTop(this.gril0001);
            game.world.bringToTop(this.f2_shutter);

            game.add.tween(this.bag3).to({
                visible: false
            }, 500, Phaser.Easing.Quadratic.Out, true);
            game.add.tween(this.bag_3.scale).to({
                x: 1,
                y: 1
            }, 2000, Phaser.Easing.Quadratic.Out, true, 500);

            game.add.tween(this.bag_3.scale).to({
                x: 0.7,
                y: 0.7
            }, 2000, Phaser.Easing.Quadratic.Out, true, 500);
            game.add.tween(this.bag_3).to({
                visible: true,
                x: 375,
                y: 280
            }, 2000, Phaser.Easing.Quadratic.Out, true, 500);

            game.add.tween(this.gril0001.scale).to({
                x: 0.45,
                y: 0.45
            }, 2000, Phaser.Easing.Quadratic.Out, true, 500);
            game.add.tween(this.gril0001).to({
                y: 335
            }, 2000, Phaser.Easing.Quadratic.Out, true, 500).onComplete.add(function() {

                this.tween2 = game.add.tween(this.tv1_2).to({
                    alpha: [1, 0, 1, 0, 1, 0]
                }, 2000, 'Linear', true, 700);


                this.f1_shutter.animations.add('f1_shutter', [0, 1, 2, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 3, 2, 1, 0]);
                this.f1_shutter.animations.play('f1_shutter', 10, false).onComplete.add(function() {


                    game.add.tween(this.bag_3.scale).to({
                        x: 1,
                        y: 1
                    }, 2000, Phaser.Easing.Quadratic.Out, true, 500);
                    game.add.tween(this.bag_3).to({
                        x: 375,
                        y: 500
                    }, 2000, Phaser.Easing.Quadratic.Out, true, 500).onComplete.add(function() {

                        this.p_arrow2.visible = true;
                        this.bag_3.inputEnabled = true;
                        this.bag_3.input.useHandCursor = true;
                        game.add.tween(this.boy0001).to({
                            y: 305
                        }, 1500, Phaser.Easing.Quadratic.Out, true, 500).onComplete.add(function() {

                        }, this);

                    }, this);
                }, this);


                this.f2_shutter.animations.add('f2_shutter', [0, 1, 2, 3, 4, 5, 6, 6, 6, 6, 6, 6, 6, 5, 4, 3, 2, 1, 0]);
                this.f2_shutter.animations.play('f2_shutter', 10, false).onComplete.add(function() {
                    game.add.tween(this.gril0001.scale).to({
                        x: 0.5,
                        y: 0.5
                    }, 2000, Phaser.Easing.Quadratic.Out, true, 500);
                    game.add.tween(this.gril0001).to({
                        y: 400
                    }, 2000, Phaser.Easing.Quadratic.Out, true, 500).onComplete.add(function() {

                    }, this);
                }, this);
            }, this);
        }, this);

        this.bag3 = game.add.sprite(375, 265, 'bag3');
        this.bag3.anchor.setTo(0.5);
        this.bag3.scale.setTo(0.8);
        this.bag3.visible = false;

        this.bag1 = game.add.sprite(375, 265, 'bag1');
        this.bag1.anchor.setTo(0.5);
        this.bag1.scale.setTo(0.8);
        this.bag1.visible = false;

        this.bag2 = game.add.sprite(375, 265, 'bag2');
        this.bag2.anchor.setTo(0.5);
        this.bag2.scale.setTo(0.8);
        this.bag2.visible = false;

        this.tv1 = game.add.sprite(375, 385, 'tv1');
        this.tv1.anchor.setTo(0.5);

        this.tv2 = game.add.sprite(114, 301.95, 'tv2');
        this.tv2.anchor.setTo(0.5);

        this.tv1_1 = game.add.sprite(375, 385, 'tv1_1');
        this.tv1_1.anchor.setTo(0.5);

        this.tv1_2 = game.add.sprite(375, 385, 'tv1_2');
        this.tv1_2.anchor.setTo(0.5);
        this.tv1_2.alpha = 0;

        // this.bag_3=game.add.sprite(375,500,'bag3');
        this.bag_3 = game.add.sprite(375, 265, 'bag3');
        this.bag_3.anchor.setTo(0.5);
        this.bag_3.scale.setTo(0.8);
        this.bag_3.visible = false;
        // this.bag_3.inputEnabled=true;
        // this.bag_3.input.useHandCursor=true;
        this.bag_3.events.onInputDown.add(function() {
            this.bag_3.inputEnabled = false;
            this.nailpolish.visible = true;
            this.p_arrow2.visible = false;

            game.time.events.add(1000, function() {
                this.bag_3.visible = false;
                this.gril0001.loadTexture('gril0001');
                game.add.tween(this.gril0001).to({
                    x: -200
                }, 1800, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                    this.boy0001.inputEnabled = true;
                    this.boy0001.input.useHandCursor = true;
                    this.p_arrow5.visible = true;

                }, this);
            }, this);
        }, this);



        this.bag_1 = game.add.sprite(375, 265, 'bag1');
        this.bag_1.anchor.setTo(0.5);
        this.bag_1.scale.setTo(0.8);
        this.bag_1.visible = false;
        // this.bag_1.inputEnabled=true;
        // this.bag_1.input.useHandCursor=true;
        this.bag_1.events.onInputDown.add(function() {
            this.bag_1.inputEnabled = false;
            this.neilcutter2.visible = true;
            this.p_arrow6.visible = false;

            game.time.events.add(1000, function() {
                this.bag_1.visible = false;
                this.boy0001.loadTexture('boy0001');
                game.add.tween(this.boy0001).to({
                    x: -200
                }, 1800, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                    // this.p_arrow3.visible=true;
                    // this.p_arrow7.visible=true;

                    // this.nailpolish.inputEnabled=true;
                    // this.nailpolish.input.useHandCursor=true;
                    // this.nailpolish.input.enableDrag();

                    // this.neilcutter2.inputEnabled=true;
                    // this.neilcutter2.input.useHandCursor=true;
                    // this.neilcutter2.input.enableDrag();

                    this.p_arrow1.visible = true;
                    this.frank0002.inputEnabled = true;
                    this.frank0002.input.useHandCursor = true;

                }, this);
            }, this);
        }, this);


        // this.bag_2=game.add.sprite(375,500,'bag3');
        this.bag_2 = game.add.sprite(375, 265, 'bag2');
        this.bag_2.anchor.setTo(0.5);
        this.bag_2.scale.setTo(0.8);
        this.bag_2.visible = false;
        // this.bag_2.inputEnabled=true;
        // this.bag_2.input.useHandCursor=true;
        this.bag_2.events.onInputDown.add(function() {
            this.bag_2.inputEnabled = false;
            this.neilcutter_1.visible = true;
            this.p_arrow2.visible = false;

            game.time.events.add(1000, function() {
                this.bag_2.visible = false;
                this.frank0002.loadTexture('frank0002');
                game.add.tween(this.frank0002).to({
                    x: -200
                }, 1800, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {

                    this.p_arrow3.visible = true;

                    this.nailpolish.inputEnabled = true;
                    this.nailpolish.input.useHandCursor = true;
                    this.nailpolish.input.enableDrag();

                }, this);
            }, this);
        }, this);



        this.f2_shutter1 = game.add.sprite(125, 310, 'f2_shutter');
        this.f2_shutter1.anchor.setTo(0.5);
        this.f2_shutter1.visible = false;

        this.f2_shutter = game.add.sprite(125, 310, 'f2_shutter');
        this.f2_shutter.anchor.setTo(0.5);



        this.f1_shutter = game.add.sprite(360, 260, 'f1_shutter');
        this.f1_shutter.anchor.setTo(0.5);

        // this.f2_shutter.animations.add('f2_shutter');
        // this.f2_shutter.animations.play('f2_shutter',10,false);




        for (i = 1; i <= 9; i++) {

            if (i == 1) {
                this['p_arrow' + i] = game.add.sprite(70, 390, 'arrow');
                this['p_arrow' + i].rotation = -1.6;
            }

            if (i == 2) {
                this['p_arrow' + i] = game.add.sprite(370, 450, 'arrow');
            }

            if (i == 5) {
                this['p_arrow' + i] = game.add.sprite(70, 390, 'arrow');
                this['p_arrow' + i].rotation = -1.6;
            }

            if (i == 6) {
                this['p_arrow' + i] = game.add.sprite(370, 450, 'arrow');
            }

            if (i == 3) {
                this['p_arrow' + i] = game.add.sprite(320, 590, 'arrow');
            }
            if (i == 4) {
                this['p_arrow' + i] = game.add.sprite(150, 590, 'arrow');
            }
            if (i == 7) {
                this['p_arrow' + i] = game.add.sprite(380, 590, 'arrow');
            }
            if (i == 8) {
                this['p_arrow' + i] = game.add.sprite(150, 590, 'arrow');
            }

            if (i == 9) {
                this['p_arrow' + i] = game.add.sprite(390, 590, 'arrow');
            }


            this['p_arrow' + i].anchor.setTo(0.5);
            this['p_arrow' + i].visible = false;
            this['p_arrow' + i].animations.add('arrow');
            this['p_arrow' + i].animations.play('arrow', 30, true);

            if (i <= 1) {
                this['p_arrow' + i].visible = true;

            }
        }




        this.morebtn = game.add.sprite(85, 730, 'morebtn');
        this.morebtn.anchor.setTo(0.5);
        // this.morebtn.scale.setTo(0);
        this.morebtn.inputEnabled = true;
        this.morebtn.input.useHandCursor = true;
        this.morebtn.events.onInputUp.add(this.moreLink, this);
        this.morebtn.events.onInputOver.add(this.btnOver, this);
        this.morebtn.events.onInputOut.add(this.btnOut, this);

        this.playbtn = game.add.sprite(430, 730, 'donebtn');
        this.playbtn.anchor.setTo(0.5);
        this.playbtn.scale.setTo(0);
        this.playbtn.inputEnabled = true;
        this.playbtn.input.useHandCursor = true;
        this.playbtn.events.onInputUp.add(this.enterRoom, this);
        this.playbtn.events.onInputOver.add(this.btnOver, this);
        this.playbtn.events.onInputOut.add(this.btnOut, this);




        if (Main.shutterOn[0]) {
            this.shutter = game.add.sprite(0, 0, 'titlebg');
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
    update: function() {
        // console.log(game.input.activePointer.x+":"+game.input.activePointer.y);
    },
    openLink: function() {
        CreateLinksInGame("Baby-Taylor-Airline-High-Hopes", "game", "logo");
    },
    moreLink: function() {
        CreateLinksInGame("Baby-Taylor-Airline-High-Hopes", "game", "more");
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
            game.state.start('final_screen1');
        });
    },
}


// hhhhhhh

Main.hair_scene = function() {}

Main.hair_scene.prototype = {
    create: function() {
        this.levelGroup = game.add.group();
        this.introbg = game.add.sprite(0, 0, 't_bg');
        this.levelGroup.add(this.introbg);

        this.h_body = game.add.sprite(246.5, 836, 'h_body');
        this.h_body.anchor.setTo(0.5);

        this.hair = game.add.sprite(258, 466.5, 'hair0001');
        this.hair.anchor.setTo(0.5);

        this.h_panel = game.add.sprite(252, 698.6, 'h_panel');
        this.h_panel.anchor.setTo(0.5);

        this.h_clip = game.add.sprite(440, 730, 'h_clip');
        this.h_clip.anchor.setTo(0.5);
        this.h_clip.events.onInputDown.add(function() {
            this.hair_arrow2.visible = false;
            this.hair_arrow3.visible = true;

        }, this);
        this.h_clip.events.onInputUp.add(function() {
            if ((game.input.activePointer.x > 30 && game.input.activePointer.x < 170 && game.input.activePointer.y > 350 && game.input.activePointer.y < 540)) {
                this.h_clip.visible = false;
                this.hair.loadTexture('hair0005');
                this.hair_arrow3.visible = false;
                this.hair_arrow2.visible = true;

                this.h_clip1.visible = true;
                this.h_clip1.inputEnabled = true;
                this.h_clip1.input.useHandCursor = true;
                this.h_clip1.input.enableDrag();
            } else {
                this.hair_arrow2.visible = true;
                this.hair_arrow3.visible = false;
                game.add.tween(this.h_clip).to({
                    x: 440,
                    y: 730
                }, 800, Phaser.Easing.Quadratic.Out, true);

            }
        }, this);

        this.h_clip1 = game.add.sprite(440, 730, 'h_clip');
        this.h_clip1.anchor.setTo(0.5);
        this.h_clip1.visible = false;
        this.h_clip1.events.onInputDown.add(function() {
            this.hair_arrow2.visible = false;
            this.hair_arrow4.visible = true;

        }, this);
        this.h_clip1.events.onInputUp.add(function() {
            if ((game.input.activePointer.x > 320 && game.input.activePointer.x < 490 && game.input.activePointer.y > 350 && game.input.activePointer.y < 540)) {
                this.h_clip1.visible = false;
                this.hair.loadTexture('hair0006');
                this.dragCircle1.visible = true;
                this.h_arrow2.visible = true;
                this.hair_arrow4.visible = false;

            } else {
                this.hair_arrow2.visible = true;
                this.hair_arrow4.visible = false;
                game.add.tween(this.h_clip1).to({
                    x: 440,
                    y: 730
                }, 800, Phaser.Easing.Quadratic.Out, true);

            }
        }, this);

        this.band = game.add.sprite(160.65, 750.95, 'band');
        this.band.anchor.setTo(0.5);
        this.band.events.onInputDown.add(function() {
            this.hair_arrow5.visible = false;
            this.hair_arrow6.visible = true;

        }, this);
        this.band.events.onInputUp.add(function() {
            if ((game.input.activePointer.x > 160 && game.input.activePointer.x < 340 && game.input.activePointer.y > 440 && game.input.activePointer.y < 600)) {
                this.hair_arrow6.visible = false;
                this.band.visible = false;
                this.hair.loadTexture('hair00011');
                game.add.tween(this.playbtn.scale).to({
                    x: 1,
                    y: 1
                }, 500, Phaser.Easing.Bounce.Out, true, 250);


            } else {
                this.hair_arrow5.visible = true;
                this.hair_arrow6.visible = false;
                game.add.tween(this.band).to({
                    x: 160.65,
                    y: 750.95
                }, 800, Phaser.Easing.Quadratic.Out, true);

            }
        }, this);

        this.h_arrow1 = game.add.sprite(250, 280, 'h_arrow1');
        this.h_arrow1.anchor.setTo(0.5);
        this.h_arrow1.visible = false;


        this.h_arrow2 = game.add.sprite(380, 400, 'h_arrow2');
        this.h_arrow2.anchor.setTo(0.5);
        this.h_arrow2.scale.x *= -1;
        this.h_arrow2.rotation = 0.3;
        this.h_arrow2.visible = false;

        this.h_arrow3 = game.add.sprite(120, 400, 'h_arrow2');
        this.h_arrow3.anchor.setTo(0.5);
        this.h_arrow3.visible = false;

        this.h_arrow4 = game.add.sprite(290, 520, 'h_arrow2');
        this.h_arrow4.anchor.setTo(0.5);
        this.h_arrow4.scale.x *= -1;
        this.h_arrow4.visible = false;

        this.h_arrow5 = game.add.sprite(190, 590, 'h_arrow2');
        this.h_arrow5.anchor.setTo(0.5);
        this.h_arrow5.visible = false;

        this.h_comb = game.add.sprite(300, 758, 'h_comb');
        this.h_comb.anchor.setTo(0.5);
        this.h_comb.inputEnabled = true;
        this.h_comb.input.useHandCursor = true;
        this.h_comb.events.onInputDown.add(function() {
            this.h_comb.inputEnabled = false;
            this.hair_arrow1.visible = false;
            this.combdrag = true;
            this.h_arrow1.visible = true;
            this.dragCircle1 = game.add.graphics(250, 200);
            this.dragCircle1.beginFill(0xFF0000, 0);
            this.dragCircle1.drawCircle(0, 0, 80);
            this.dragCircle1.endFill();
            this.dragCircle1.Id = 1;
            this.dragCircle1.inputEnabled = true;
            this.dragCircle1.useHandCursor = true;
            this.dragCircle1.input.enableDrag();
            this.dragCircle1.events.onInputDown.add(function() {}, this);
            this.dragCircle1.events.onInputUp.add(this.h1_up, this);

        }, this);




        for (i = 1; i <= 6; i++) {

            if (i == 1) {

                // this['hair_arrow'+i]=game.add.sprite(252,465,'arrow');
                this['hair_arrow' + i] = game.add.sprite(270, 700, 'arrow');
            }
            if (i == 2) {
                this['hair_arrow' + i] = game.add.sprite(430, 680, 'arrow');
            }
            if (i == 3) {
                this['hair_arrow' + i] = game.add.sprite(79, 400, 'arrow');
            }

            if (i == 4) {
                this['hair_arrow' + i] = game.add.sprite(400, 400, 'arrow');
            }

            if (i == 5) {
                this['hair_arrow' + i] = game.add.sprite(160, 690, 'arrow');
            }
            if (i == 6) {
                this['hair_arrow' + i] = game.add.sprite(252, 465, 'arrow');
            }

            this['hair_arrow' + i].anchor.setTo(0.5);
            this['hair_arrow' + i].visible = false;
            this['hair_arrow' + i].animations.add('arrow');
            this['hair_arrow' + i].animations.play('arrow', 30, true);

            if (i <= 1) {
                this['hair_arrow' + i].visible = true;

            }
        }


        this.morebtn = game.add.sprite(65, 730, 'morebtn');
        this.morebtn.anchor.setTo(0.5);
        this.morebtn.scale.setTo(0.8);
        this.morebtn.inputEnabled = true;
        this.morebtn.input.useHandCursor = true;
        this.morebtn.events.onInputUp.add(this.moreLink, this);
        this.morebtn.events.onInputOver.add(this.btnOver, this);
        this.morebtn.events.onInputOut.add(this.btnOut, this);

        this.playbtn = game.add.sprite(430, 730, 'donebtn');
        this.playbtn.anchor.setTo(0.5);
        this.playbtn.scale.setTo(0);
        this.playbtn.inputEnabled = true;
        this.playbtn.input.useHandCursor = true;
        this.playbtn.events.onInputUp.add(this.enterRoom, this);
        this.playbtn.events.onInputOver.add(this.btnOver, this);
        this.playbtn.events.onInputOut.add(this.btnOut, this);




        if (Main.shutterOn[0]) {
            this.shutter = game.add.sprite(0, 0, 'titlebg');
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
    h1_up: function(evt) {

        if (evt.Id == 1) {
            if ((game.input.activePointer.x > 180 && game.input.activePointer.x < 320 && game.input.activePointer.y > 300 && game.input.activePointer.y < 470)) {

                game.time.events.add(500, function() {
                    evt.Id = 2;

                }, this);

                this.h_arrow1.x = 120;
                this.h_arrow1.y = 390;
                this.h_arrow1.rotation = 0.5;

                this.dragCircle1.x = 160;
                this.dragCircle1.y = 310;

                this.hair.loadTexture('hair0002');


            } else {

                game.add.tween(this.dragCircle1).to({
                    x: 250,
                    y: 200
                }, 100, Phaser.Easing.Quadratic.Out, true);
            }
        }


        if (evt.Id == 2) {
            if ((game.input.activePointer.x > 30 && game.input.activePointer.x < 150 && game.input.activePointer.y > 390 && game.input.activePointer.y < 530)) {
                game.time.events.add(500, function() {
                    evt.Id = 3;
                }, this);


                this.h_arrow1.x = 350;
                this.h_arrow1.y = 390;
                this.h_arrow1.rotation = -0.5;

                this.dragCircle1.x = 310;
                this.dragCircle1.y = 325;

                this.hair.loadTexture('hair0003');


            } else {
                game.add.tween(this.dragCircle1).to({
                    x: 160,
                    y: 310
                }, 100, Phaser.Easing.Quadratic.Out, true);
            }
        }

        if (evt.Id == 3) {
            if ((game.input.activePointer.x > 300 && game.input.activePointer.x < 435 && game.input.activePointer.y > 380 && game.input.activePointer.y < 540)) {
                game.time.events.add(500, function() {
                    evt.Id = 4;
                }, this);


                this.h_arrow1.x = 350;
                this.h_arrow1.y = 390;
                this.h_arrow1.rotation = -0.5;
                this.h_arrow1.visible = false;

                this.dragCircle1.visible = false;
                this.dragCircle1.x = 380;
                this.dragCircle1.y = 360;

                this.hair.loadTexture('hair0004');

                this.combdrag = false;
                game.add.tween(this.h_comb).to({
                    x: 300,
                    y: 758
                }, 800, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                    this.hair_arrow2.visible = true;
                    this.h_clip.inputEnabled = true;
                    this.h_clip.input.useHandCursor = true;
                    this.h_clip.input.enableDrag();
                }, this);

            } else {
                game.add.tween(this.dragCircle1).to({
                    x: 310,
                    y: 325
                }, 100, Phaser.Easing.Quadratic.Out, true);
            }
        }

        if (evt.Id == 4) {
            if ((game.input.activePointer.x > 270 && game.input.activePointer.x < 360 && game.input.activePointer.y > 380 && game.input.activePointer.y < 480)) {
                game.time.events.add(500, function() {
                    evt.Id = 5;
                }, this);

                this.h_arrow2.visible = false;
                this.h_arrow3.visible = true;
                this.dragCircle1.x = 130;
                this.dragCircle1.y = 360;

                this.hair.loadTexture('hair0007');


            } else {
                game.add.tween(this.dragCircle1).to({
                    x: 380,
                    y: 360
                }, 100, Phaser.Easing.Quadratic.Out, true);
            }
        }

        if (evt.Id == 5) {
            if ((game.input.activePointer.x > 90 && game.input.activePointer.x < 200 && game.input.activePointer.y > 380 && game.input.activePointer.y < 480)) {
                game.time.events.add(500, function() {
                    evt.Id = 6;
                }, this);

                this.h_arrow3.visible = false;
                this.h_arrow4.visible = true;
                this.dragCircle1.x = 280;
                this.dragCircle1.y = 480;

                this.hair.loadTexture('hair0008');


            } else {
                game.add.tween(this.dragCircle1).to({
                    x: 130,
                    y: 360
                }, 100, Phaser.Easing.Quadratic.Out, true);
            }
        }
        if (evt.Id == 6) {
            if ((game.input.activePointer.x > 190 && game.input.activePointer.x < 290 && game.input.activePointer.y > 500 && game.input.activePointer.y < 600)) {
                game.time.events.add(500, function() {
                    evt.Id = 7;
                }, this);

                this.h_arrow4.visible = false;
                this.h_arrow5.visible = true;
                this.dragCircle1.x = 200;
                this.dragCircle1.y = 550;


            } else {
                game.add.tween(this.dragCircle1).to({
                    x: 280,
                    y: 480
                }, 100, Phaser.Easing.Quadratic.Out, true);
            }
        }

        if (evt.Id == 7) {
            if ((game.input.activePointer.x > 190 && game.input.activePointer.x < 290 && game.input.activePointer.y > 570 && game.input.activePointer.y < 670)) {
                game.time.events.add(500, function() {
                    evt.Id = 8;
                }, this);

                this.h_arrow5.visible = false;
                // this.h_arrow5.visible=true;
                this.dragCircle1.visible = false;
                this.dragCircle1.x = 250;
                this.dragCircle1.y = 650;
                this.hair.loadTexture('hair00010');

                this.hair_arrow5.visible = true;
                this.band.inputEnabled = true;
                this.band.input.useHandCursor = true;
                this.band.input.enableDrag();
            } else {
                game.add.tween(this.dragCircle1).to({
                    x: 200,
                    y: 550
                }, 100, Phaser.Easing.Quadratic.Out, true);
            }
        }
    },
    update: function() {
        // console.log(game.input.activePointer.x+":"+game.input.activePointer.y);

        if (this.combdrag) {
            this.h_comb.x = game.input.activePointer.x + 30;
            this.h_comb.y = game.input.activePointer.y;
        }
    },
    openLink: function() {
        CreateLinksInGame("Baby-Taylor-Airline-High-Hopes", "game", "logo");
    },
    moreLink: function() {
        CreateLinksInGame("Baby-Taylor-Airline-High-Hopes", "game", "more");
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
            game.state.start('baby_dressup');
        });
    },
}



//acccccccc

Main.airpot_entry = function() {}

Main.airpot_entry.prototype = {
    create: function() {
        this.levelGroup = game.add.group();
        this.door1 = game.add.sprite(0, 0, 'door1');
        this.levelGroup.add(this.door1);

        // this.boy0001 = game.add.sprite(420,470,'boy0001');
        // this.boy0001.anchor.setTo(0.5);
        // this.boy0001.scale.setTo(0.5);

        // this.gril0001 = game.add.sprite(270,470,'gril0001');
        // this.gril0001.anchor.setTo(0.5);
        // this.gril0001.scale.setTo(0.47);

        // this.frank0001 = game.add.sprite(120,470,'frank0002');
        // this.frank0001.anchor.setTo(0.5);
        // // this.frank0001.scale.setTo(0.9);

        this.boy0001 = game.add.sprite(320, 150, 'boy0001');
        this.boy0001.anchor.setTo(0.5);
        this.boy0001.scale.setTo(0.3);

        this.gril0001 = game.add.sprite(250, 150, 'gril0001');
        this.gril0001.anchor.setTo(0.5);
        this.gril0001.scale.setTo(0.3);

        this.frank0001 = game.add.sprite(190, 150, 'frank0002');
        this.frank0001.anchor.setTo(0.5);
        this.frank0001.scale.setTo(0.6);

        this.door_1 = game.add.sprite(250, 138, 'door_1');
        this.door_1.anchor.setTo(0.5);
        // this.door_1.inputEnabled=true;
        // this.door_1.input.useHandCursor=true;
        this.door_1.events.onInputDown.add(function() {
            this.door_1.inputEnabled = false;
            this.door_1.visible = false;
            this.a_arrow1.visible = false;
            this.door1.loadTexture('door3');
            game.add.tween(this.boy0001.scale).to({
                x: 0.5,
                y: 0.5
            }, 1600, Phaser.Easing.Quadratic.Out, true, 500);
            game.add.tween(this.boy0001).to({
                x: 420,
                y: 470
            }, 1600, Phaser.Easing.Quadratic.Out, true, 500);
            game.add.tween(this.gril0001).to({
                x: 270,
                y: 470
            }, 1600, Phaser.Easing.Quadratic.Out, true, 500);
            game.add.tween(this.frank0001).to({
                x: 120,
                y: 470
            }, 1600, Phaser.Easing.Quadratic.Out, true, 500);
            game.add.tween(this.frank0001.scale).to({
                x: 1,
                y: 1
            }, 1600, Phaser.Easing.Quadratic.Out, true, 500);
            game.add.tween(this.gril0001.scale).to({
                x: 0.47,
                y: 0.47
            }, 1600, Phaser.Easing.Quadratic.Out, true, 500).onComplete.add(function() {
                this.door1.loadTexture('door1');
                game.add.tween(this.playbtn.scale).to({
                    x: 1,
                    y: 1
                }, 400, Phaser.Easing.Quadratic.Out, true);


            }, this);
        }, this);


        this.babygroup = game.add.group();
        this.Body = game.add.sprite(0, 0, 'Body');
        this.babygroup.add(this.Body);

        this.babyelsabag56tophand = game.add.sprite(0, 0, 'babyelsabag56tophand');
        this.babygroup.add(this.babyelsabag56tophand);



        this.Shoe1 = game.add.sprite(0, 0, 'Shoe' + Main.baby_array[5]);
        this.babygroup.add(this.Shoe1);

        this.Dress1 = game.add.sprite(0, 0, 'Dress' + Main.baby_array[4]);
        this.babygroup.add(this.Dress1);

        this.babyelsabag1 = game.add.sprite(0, 0, 'babyelsabag' + Main.baby_array[0]);
        this.babyelsabag1.alpha = 0;
        this.babygroup.add(this.babyelsabag1);

        this.babyelsabagtophand = game.add.sprite(0, 0, 'babyelsabagtophand');
        this.babygroup.add(this.babyelsabagtophand);

        this.babyelsaneckkerchief1 = game.add.sprite(0, 0, 'babyelsaneckkerchief' + Main.baby_array[3]);
        // this.babyelsaneckkerchief1.alpha=0;
        this.babygroup.add(this.babyelsaneckkerchief1);

        this.Face = game.add.sprite(0, 0, 'Face');
        this.babygroup.add(this.Face);

        this.babyelsaearing1 = game.add.sprite(0, 0, 'babyelsaearing' + Main.baby_array[2]);
        // this.babyelsaearing1.alpha=0;
        this.babygroup.add(this.babyelsaearing1);

        this.babyelsaearing2 = game.add.sprite(-143, 0, 'babyelsaearing' + Main.baby_array[2]);
        this.babyelsaearing2.scale.setTo(0);

        // this.babyelsaearing2.alpha=0;
        this.babygroup.add(this.babyelsaearing2);

        this.Hair = game.add.sprite(0, 0, 'f_hair');
        this.babygroup.add(this.Hair);

        this.babyelsacap1 = game.add.sprite(0, 0, 'babyelsacap' + Main.baby_array[1]);
        // this.babyelsacap1.alpha=0;
        this.babygroup.add(this.babyelsacap1);

        this.Righthandfinger = game.add.sprite(0, 0, 'Righthandfinger');
        this.babygroup.add(this.Righthandfinger);

        this.babygroup.scale.setTo(0.8);
        this.babygroup.x = 500;
        // this.babygroup.x=170;
        this.babygroup.y = 120;

        this.popet20003 = game.add.sprite(150, 200, 'popet20003');
        this.popet20003.anchor.setTo(0.5);
        this.popet20003.scale.setTo(0);






        for (i = 1; i <= 1; i++) {

            if (i == 1) {

                // this['hair_arrow'+i]=game.add.sprite(252,465,'arrow');
                this['a_arrow' + i] = game.add.sprite(250, 100, 'arrow');
            }


            this['a_arrow' + i].anchor.setTo(0.5);
            this['a_arrow' + i].visible = false;
            this['a_arrow' + i].animations.add('arrow');
            this['a_arrow' + i].animations.play('arrow', 30, true);

            if (i >= 1) {
                this['a_arrow' + i].visible = false;

            }
        }




        this.morebtn = game.add.sprite(85, 730, 'morebtn');
        this.morebtn.anchor.setTo(0.5);
        // this.morebtn.scale.setTo(0);
        this.morebtn.inputEnabled = true;
        this.morebtn.input.useHandCursor = true;
        this.morebtn.events.onInputUp.add(this.moreLink, this);
        this.morebtn.events.onInputOver.add(this.btnOver, this);
        this.morebtn.events.onInputOut.add(this.btnOut, this);

        this.playbtn = game.add.sprite(430, 730, 'donebtn');
        this.playbtn.anchor.setTo(0.5);
        this.playbtn.scale.setTo(0);
        this.playbtn.inputEnabled = true;
        this.playbtn.input.useHandCursor = true;
        this.playbtn.events.onInputUp.add(this.enterRoom, this);
        this.playbtn.events.onInputOver.add(this.btnOver, this);
        this.playbtn.events.onInputOut.add(this.btnOut, this);




        if (Main.shutterOn[0]) {
            this.shutter = game.add.sprite(0, 0, 'titlebg');
            game.add.tween(this.shutter).to({
                y: -850
            }, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                game.add.tween(this.babygroup).to({
                    x: 170
                }, 800, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                    game.add.tween(this.popet20003.scale).to({
                        x: 0.95,
                        y: 0.95
                    }, 800, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                        game.add.tween(this.popet20003.scale).to({
                            x: 0,
                            y: 0
                        }, 800, Phaser.Easing.Quadratic.Out, true, 4500).onComplete.add(function() {
                            game.add.tween(this.babygroup).to({
                                x: 500
                            }, 800, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                                this.door_1.inputEnabled = true;
                                this.door_1.input.useHandCursor = true;
                                this.a_arrow1.visible = true;

                            }, this);
                        }, this);
                    }, this);
                }, this);
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
        CreateLinksInGame("Baby-Taylor-Airline-High-Hopes", "game", "logo");
    },
    moreLink: function() {
        CreateLinksInGame("Baby-Taylor-Airline-High-Hopes", "game", "more");
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
            game.state.start('check_in');
        });
    },
}


// ccccccc

Main.check_in = function() {}

Main.check_in.prototype = {
    create: function() {
        this.levelGroup = game.add.group();
        this.introbg = game.add.sprite(0, 0, 'door1');
        this.levelGroup.add(this.introbg);

        this.check_in = game.add.sprite(412, 54, 'check_in');
        this.check_in.anchor.setTo(0.5);


        this.frank = game.add.sprite(270, 300, 'frank');
        this.frank.anchor.setTo(0.5);
        this.frank.scale.setTo(0.65);

        this.boy0001 = game.add.sprite(360, 340, 'boy0001');
        this.boy0001.anchor.setTo(0.5);
        this.boy0001.scale.setTo(0.65);

        this.gril0001 = game.add.sprite(330, 420, 'gril0001');
        this.gril0001.anchor.setTo(0.5);
        this.gril0001.scale.setTo(0.55);

        this.s_pane = game.add.sprite(50, 300, 's_pane');
        this.s_pane.anchor.setTo(0.5);

        this.table = game.add.sprite(250.5, 644, 'table');
        this.table.anchor.setTo(0.5);

        this.passport0003 = game.add.sprite(370, 570, 'passport0003');
        this.passport0003.anchor.setTo(0.5);
        this.passport0003.scale.setTo(0);
        // this.passport0003.inputEnabled=true;
        // this.passport0003.input.useHandCursor=true;
        this.passport0003.events.onInputDown.add(function() {
            this.passport0003.inputEnabled = false;
            this.stamp1.visible = false;
            this.stamp_1.visible = true;
            this.s1_drag = false;
            game.time.events.add(500, function() {
                this.passport0003.loadTexture('passport0003_3');
            }, this);
            game.add.tween(this.stamp_1).to({
                y: [570, 580, 590, 600, 590, 580, 570]
            }, 1000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                this.stamp1.visible = true;
                this.stamp_1.visible = false;
                game.add.tween(this.stamp1).to({
                    x: 70,
                    y: 420
                }, 500, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                    game.add.tween(this.passport0003.scale).to({
                        x: 0,
                        y: 0
                    }, 1000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                        game.add.tween(this.gril0001).to({
                            x: 650
                        }, 800, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                            game.add.tween(this.boy0001).to({
                                y: 420
                            }, 800, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                                game.add.tween(this.frank).to({
                                    x: 300,
                                    y: 350
                                }, 800, Phaser.Easing.Quadratic.Out, true);
                                game.add.tween(this.passport0001.scale).to({
                                    x: 1,
                                    y: 1
                                }, 1000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                                    this.arrow3.visible = true;
                                    this.stamp3.inputEnabled = true;
                                    this.stamp3.input.useHandCursor = true;
                                }, this);
                            }, this);
                        }, this);
                    }, this);
                }, this);
            }, this);
        }, this);


        this.passport0001 = game.add.sprite(370, 570, 'passport0001');
        this.passport0001.anchor.setTo(0.5);
        this.passport0001.scale.setTo(0);
        // this.passport0001.inputEnabled=true;
        // this.passport0001.input.useHandCursor=true;
        this.passport0001.events.onInputDown.add(function() {
            this.passport0001.inputEnabled = false;
            this.stamp3.visible = false;
            this.stamp_3.visible = true;
            this.s3_drag = false;
            game.time.events.add(500, function() {
                this.passport0001.loadTexture('passport0001_1');
            }, this);
            game.add.tween(this.stamp_3).to({
                y: [570, 580, 590, 600, 590, 580, 570]
            }, 1000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                this.stamp3.visible = true;
                this.stamp_3.visible = false;
                game.add.tween(this.stamp3).to({
                    x: 70,
                    y: 160
                }, 500, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                    game.add.tween(this.passport0001.scale).to({
                        x: 0,
                        y: 0
                    }, 1000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                        game.add.tween(this.boy0001).to({
                            x: 650
                        }, 800, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                            game.add.tween(this.frank).to({
                                x: 360,
                                y: 420
                            }, 800, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                                game.add.tween(this.passport0002.scale).to({
                                    x: 1,
                                    y: 1
                                }, 1000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                                    this.arrow2.visible = true;
                                    this.stamp2.inputEnabled = true;
                                    this.stamp2.input.useHandCursor = true;
                                    // game.add.tween(this.playbtn.scale).to({x:1,y:1},400,Phaser.Easing.Quadratic.Out, true);

                                }, this);
                            }, this);
                        }, this);
                    }, this);
                }, this);
            }, this);
        }, this);


        this.passport0002 = game.add.sprite(370, 570, 'passport0002');
        this.passport0002.anchor.setTo(0.5);
        this.passport0002.scale.setTo(0);
        // this.passport0002.inputEnabled=true;
        // this.passport0002.input.useHandCursor=true;
        this.passport0002.events.onInputDown.add(function() {
            this.passport0002.inputEnabled = false;
            this.stamp2.visible = false;
            this.stamp_2.visible = true;
            this.s2_drag = false;
            game.time.events.add(500, function() {
                this.passport0002.loadTexture('passport0002_2');
            }, this);
            game.add.tween(this.stamp_2).to({
                y: [570, 580, 590, 600, 590, 580, 570]
            }, 1000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                this.stamp2.visible = true;
                this.stamp_2.visible = false;
                this.s2_drag = false;
                game.add.tween(this.stamp2).to({
                    x: 70,
                    y: 290
                }, 500, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                    game.add.tween(this.passport0002.scale).to({
                        x: 0,
                        y: 0
                    }, 1000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                        game.add.tween(this.frank).to({
                            x: 650
                        }, 800, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {

                            game.add.tween(this.playbtn.scale).to({
                                x: 1,
                                y: 1
                            }, 400, Phaser.Easing.Quadratic.Out, true);


                        }, this);
                    }, this);
                }, this);
            }, this);
        }, this);



        this.stamp_1 = game.add.sprite(310, 570, 'stamp1');
        this.stamp_1.anchor.setTo(0.5);
        this.stamp_1.scale.setTo(0.9);
        this.stamp_1.visible = false;

        this.stamp_3 = game.add.sprite(310, 570, 'stamp3');
        this.stamp_3.anchor.setTo(0.5);
        this.stamp_3.scale.setTo(0.9);
        this.stamp_3.visible = false;

        this.stamp_2 = game.add.sprite(310, 570, 'stamp2');
        this.stamp_2.anchor.setTo(0.5);
        this.stamp_2.scale.setTo(0.9);
        this.stamp_2.visible = false;




        this.s1_drag = false;
        this.stamp1 = game.add.sprite(70, 420, 'stamp1');
        this.stamp1.anchor.setTo(0.5);
        this.stamp1.scale.setTo(0.9);
        // this.stamp1.inputEnabled=true;
        // this.stamp1.input.useHandCursor=true;
        this.stamp1.events.onInputDown.add(function() {
            this.stamp1.inputEnabled = false;
            this.s1_drag = true;
            this.passport0003.inputEnabled = true;
            this.passport0003.input.useHandCursor = true;
            this.arrow1.visible = false;
        }, this);

        // this.dragCircle_1 = game.add.graphics(300,550);
        // this.dragCircle_1.beginFill(0x000000,0.5);
        // this.dragCircle_1.drawRect(0,0,100,100);
        // // this.dragCircle_1.inputEnabled=true;
        // this.dragCircle_1.events.onInputDown.add(function(){

        // },this);

        this.s2_drag = false;
        this.stamp2 = game.add.sprite(70, 290, 'stamp2');
        this.stamp2.anchor.setTo(0.5);
        this.stamp2.scale.setTo(0.9);
        this.stamp2.events.onInputDown.add(function() {
            this.stamp2.inputEnabled = false;
            this.s2_drag = true;
            this.passport0002.inputEnabled = true;
            this.passport0002.input.useHandCursor = true;
            this.arrow2.visible = false;
        }, this);


        this.s3_drag = false;
        this.stamp3 = game.add.sprite(70, 160, 'stamp3');
        this.stamp3.anchor.setTo(0.5);
        this.stamp3.scale.setTo(0.9);
        // this.stamp3.inputEnabled=true;
        // this.stamp3.input.useHandCursor=true;
        this.stamp3.events.onInputDown.add(function() {
            this.stamp3.inputEnabled = false;
            this.s3_drag = true;
            this.passport0001.inputEnabled = true;
            this.passport0001.input.useHandCursor = true;
            this.arrow3.visible = false;
        }, this);


        var arro2x = [150, 150, 150, 705, 113, 410, 710];
        var arro2y = [420, 300, 170, 420, 402, 130, 440];

        for (i = 1; i <= 3; i++) {
            this['arrow' + i] = game.add.sprite(arro2x[i - 1], arro2y[i - 1], 'arrow');
            this['arrow' + i].anchor.setTo(0.5);
            this['arrow' + i].animations.add('arrow');
            this['arrow' + i].animations.play('arrow', 30, true);
            this['arrow' + i].visible = false;
            if (i == 2) {

            }
            if (i == 1) {
                this['arrow' + i].visible = false;
                this['arrow' + i].rotation = 1.6;
            }

            if (i == 2) {
                this['arrow' + i].visible = false;
                this['arrow' + i].rotation = 1.6;
            }
            if (i == 3) {
                this['arrow' + i].visible = false;
                this['arrow' + i].rotation = 1.6;
            }

        }



        this.morebtn = game.add.sprite(85, 730, 'morebtn');
        this.morebtn.anchor.setTo(0.5);
        // this.morebtn.scale.setTo(0);
        this.morebtn.inputEnabled = true;
        this.morebtn.input.useHandCursor = true;
        this.morebtn.events.onInputUp.add(this.moreLink, this);
        this.morebtn.events.onInputOver.add(this.btnOver, this);
        this.morebtn.events.onInputOut.add(this.btnOut, this);

        this.playbtn = game.add.sprite(430, 730, 'donebtn');
        this.playbtn.anchor.setTo(0.5);
        this.playbtn.scale.setTo(0);
        this.playbtn.inputEnabled = true;
        this.playbtn.input.useHandCursor = true;
        this.playbtn.events.onInputUp.add(this.enterRoom, this);
        this.playbtn.events.onInputOver.add(this.btnOver, this);
        this.playbtn.events.onInputOut.add(this.btnOut, this);




        if (Main.shutterOn[0]) {
            this.shutter = game.add.sprite(0, 0, 'titlebg');
            game.add.tween(this.shutter).to({
                y: -850
            }, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                game.add.tween(this.passport0003.scale).to({
                    x: 1,
                    y: 1
                }, 800, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                    this.stamp1.inputEnabled = true;
                    this.stamp1.input.useHandCursor = true;
                    this.arrow1.visible = true;
                }, this);
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
    update: function() {
        // console.log(game.input.activePointer.x+":"+game.input.activePointer.y);
        if (this.s1_drag) {
            this.stamp1.x = this.game.input.activePointer.x;
            this.stamp1.y = this.game.input.activePointer.y - 20;
        }
        if (this.s2_drag) {
            this.stamp2.x = this.game.input.activePointer.x;
            this.stamp2.y = this.game.input.activePointer.y - 20;
        }
        if (this.s3_drag) {
            this.stamp3.x = this.game.input.activePointer.x;
            this.stamp3.y = this.game.input.activePointer.y - 20;
        }
    },
    openLink: function() {
        CreateLinksInGame("Baby-Taylor-Airline-High-Hopes", "game", "logo");
    },
    moreLink: function() {
        CreateLinksInGame("Baby-Taylor-Airline-High-Hopes", "game", "more");
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
            game.state.start('leval1');
        });
    },
}

// assssss

// Main.airpot_scene = function(){}

// Main.airpot_scene.prototype = {
//     create:function(){
//        this.levelGroup = game.add.group();
//         this.bg = game.add.sprite(262.95,642,'ar_bg');
//         this.bg.anchor.setTo(0.5);
//         this.levelGroup.add(this.bg);


//         // this.flite=game.add.sprite(241.5,271.5,'flite');
//         // this.flite.anchor.setTo(0.5);



//         this.boy_walk=game.add.sprite(100,700,'boy_walk');
//         this.boy_walk.anchor.setTo(0.5);
//         this.boy_walk.scale.setTo(0.9);


//         this.frank_walk=game.add.sprite(400,720,'frank_walk');
//         this.frank_walk.anchor.setTo(0.5);
//         this.frank_walk.scale.setTo(0.85);


//         this.girl_walk=game.add.sprite(250,650,'girl_walk');
//         this.girl_walk.anchor.setTo(0.5);



//         // this.babygroup = game.add.group();
//         // this.Body=game.add.sprite(0,0,'Body');
//         // this.babygroup.add(this.Body);

//         // this.babyelsabag56tophand=game.add.sprite(0,0,'babyelsabag56tophand');
//         // this.babygroup.add(this.babyelsabag56tophand);

//         // this.Face=game.add.sprite(0,0,'Face');
//         // this.babygroup.add(this.Face);

//         // this.babyelsaearing1=game.add.sprite(0,0,'babyelsaearing'+Main.baby_array[2]);
//         // // this.babyelsaearing1.alpha=0;
//         // this.babygroup.add(this.babyelsaearing1);

//         // this.babyelsaearing2=game.add.sprite(-143,0,'babyelsaearing'+Main.baby_array[2]);
//         // this.babyelsaearing2.scale.setTo(0);

//         // // this.babyelsaearing2.alpha=0;
//         // this.babygroup.add(this.babyelsaearing2);

//         // this.Hair=game.add.sprite(0,0,'f_hair');
//         // this.babygroup.add(this.Hair);

//         // this.babyelsacap1=game.add.sprite(0,0,'babyelsacap'+Main.baby_array[1]);
//         // // this.babyelsacap1.alpha=0;
//         // this.babygroup.add(this.babyelsacap1);

//         // this.Shoe1=game.add.sprite(0,0,'Shoe'+Main.baby_array[5]);
//         // this.babygroup.add(this.Shoe1);




//         // this.Dress1=game.add.sprite(0,0,'Dress'+Main.baby_array[4]);
//         // this.babygroup.add(this.Dress1);

//         //  this.babyelsabag1=game.add.sprite(0,0,'babyelsabag'+Main.baby_array[0]);
//         // this.babyelsabag1.alpha=0;
//         // this.babygroup.add(this.babyelsabag1);

//         // this.babyelsabagtophand=game.add.sprite(0,0,'babyelsabagtophand');
//         // this.babygroup.add(this.babyelsabagtophand);

//         // this.babyelsaneckkerchief1=game.add.sprite(0,0,'babyelsaneckkerchief'+Main.baby_array[3]);
//         // // this.babyelsaneckkerchief1.alpha=0;
//         // this.babygroup.add(this.babyelsaneckkerchief1);

//         // this.BabyElsasmallfile=game.add.sprite(0,0,'BabyElsasmallfile');
//         // this.BabyElsasmallfile.visible=false;
//         // this.babygroup.add(this.BabyElsasmallfile);

//         // this.Righthandfinger=game.add.sprite(0,0,'Righthandfinger');
//         // this.babygroup.add(this.Righthandfinger);

//         // this.babygroup.scale.setTo(0.4);
//         // this.babygroup.x=300;
//         // this.babygroup.y=220;


//          // this.gril0001 = game.add.sprite(-200,500,'gril0001');
//          // this.gril0001.anchor.setTo(0.5);
//          // this.gril0001.scale.setTo(0.4);

//          // this.boy0001 = game.add.sprite(-200,500,'boy0001');
//          // this.boy0001.anchor.setTo(0.5);
//          // this.boy0001.scale.setTo(0.44);

//          // this.frank = game.add.sprite(-200,500,'frank');
//          // this.frank.anchor.setTo(0.5);
//          // this.frank.scale.setTo(0.44);





//          this.morebtn = game.add.sprite(85,730,'morebtn');
//          this.morebtn.anchor.setTo(0.5);
//          // this.morebtn.scale.setTo(0);
//          this.morebtn.inputEnabled = true;
//          this.morebtn.input.useHandCursor = true;
//          this.morebtn.events.onInputUp.add(this.moreLink, this);
//          this.morebtn.events.onInputOver.add(this.btnOver, this);
//          this.morebtn.events.onInputOut.add(this.btnOut, this);

//          this.playbtn = game.add.sprite(430,730,'donebtn');
//          this.playbtn.anchor.setTo(0.5);
//          this.playbtn.scale.setTo(0);
//          this.playbtn.inputEnabled = true;
//          this.playbtn.input.useHandCursor = true;
//          this.playbtn.events.onInputUp.add(this.enterRoom, this);
//          this.playbtn.events.onInputOver.add(this.btnOver, this);
//          this.playbtn.events.onInputOut.add(this.btnOut, this);




//       if (Main.shutterOn[0]) {
//          this.shutter = game.add.sprite(0,0,'titlebg');
//          game.add.tween(this.shutter).to({y:-850}, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
//          this.boy_walk.animations.add('boy_walk',[0,1,2,3,4,5,6,7,8,9,10,11,10,9,8,7,6,5,4,3,2,1,0]);
//          this.boy_walk.animations.play('boy_walk',12,true);

//          this.frank_walk.animations.add('frank_walk',[0,1,2,3,4,5,6,7,8,9,10,9,8,7,6,5,4,3,2,1,0]);
//          this.frank_walk.animations.play('frank_walk',12,true);

//          this.girl_walk.animations.add('girl_walk');
//          this.girl_walk.animations.play('girl_walk',12,true);

//          game.add.tween(this.bg.scale).to({x:0.6,y:0.6}, 5000, Phaser.Easing.Quadratic.Out, true);
//          game.add.tween(this.bg).to({y:380}, 5000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
//             this.boy_walk.animations.stop();
// this.frank_walk.animations.stop();
// this.girl_walk.animations.stop();
//          game.add.tween(this.playbtn.scale).to({x:1,y:1}, 400, Phaser.Easing.Quadratic.Out, true);

//          },this);


//          // game.add.tween(this.gril0001).to({x:150}, 1000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
//          // game.add.tween(this.gril0001).to({x:155,y:330}, 2000, Phaser.Easing.Quadratic.Out, true);
//          // game.add.tween(this.gril0001.scale).to({x:0.2,y:0.2}, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
//          // game.add.tween(this.gril0001).to({alpha:0}, 1000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){

//          //  game.add.tween(this.boy0001).to({x:150}, 1000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
//          // game.add.tween(this.boy0001).to({x:170,y:330}, 2000, Phaser.Easing.Quadratic.Out, true);
//          // game.add.tween(this.boy0001.scale).to({x:0.2,y:0.2}, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
//          // game.add.tween(this.boy0001).to({alpha:0}, 1000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){

//          //  game.add.tween(this.frank).to({x:150}, 1000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
//          // game.add.tween(this.frank).to({x:170,y:330}, 2000, Phaser.Easing.Quadratic.Out, true);
//          // game.add.tween(this.frank.scale).to({x:0.2,y:0.2}, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
//          // game.add.tween(this.frank).to({alpha:0}, 1000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){


//          // // game.add.tween(this.gril0001).to({x:155,y:230}, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
//          // // game.add.tween(this.boy0001.scale).to({x:0,y:0}, 2000, Phaser.Easing.Quadratic.Out, true);
//          // // game.add.tween(this.boy0001).to({x:150,y:230}, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
//          // //    game.add.tween(this.frank.scale).to({x:0,y:0}, 2000, Phaser.Easing.Quadratic.Out, true);
//          // // game.add.tween(this.frank).to({x:150,y:230}, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){

//          // // },this);
//          // // },this);
//          // // },this);
//          // },this);
//          // },this);
//          // },this);
//          // },this);
//          // },this);
//          // },this);
//          // },this);
//          // },this);
//          // },this);
//          },this);
//         }


//          this.logoVar = game.add.sprite(5, 5, 'logo');
//          this.logoVar.scale.setTo(0.8);
//          this.logoVar.inputEnabled = true
//          this.logoVar.input.useHandCursor = true;
//          this.logoVar.events.onInputUp.add(this.openLink, this);

//          this.musicButton = game.add.sprite(427,5,"soundicon");
//          this.musicButton.scale.setTo(0.9);
//          this.musicButton.inputEnabled = true
//          this.musicButton.input.useHandCursor = true;
//          this.musicButton.events.onInputUp.add(this.changemusic, this);
//          if (!game.sound.mute) {
//                this.musicButton.frame = 0;
//             }else{
//                this.musicButton.frame = 1;
//             }
//         },
// changemusic:function()
//          {
//             if (!game.sound.mute) {
//                this.musicButton.frame = 1;
//                game.sound.mute = true;
//             }else{
//                this.musicButton.frame = 0;
//                game.sound.mute = false;
//             };
//          },
// openLink:function()
// {
//    CreateLinksInGame("Baby-Taylor-Airline-High-Hopes","game","logo");
// },
// moreLink:function()
// {
//    CreateLinksInGame("Baby-Taylor-Airline-High-Hopes","game","more");
// },
// btnOver:function(items){
//   items.scale.setTo(items.scale.x+0.05);
//       effectVar = game.add.sprite(items.x-30,items.y-80,'effects'); 
//    effectVar.anchor.setTo(0.5);
//    effectVar.scale.setTo(2);
//    effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
//    effectVar.animations.play('glitter', 30, false);
//    },
// btnOut:function(items){
//      items.scale.setTo(items.scale.x-0.05);

//    },
// removeGlitter:function(evt){
//       evt.kill(); 
//       },
// enterRoom:function(){
//    game.add.tween(this.shutter).to({y:0}, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
//    game.state.start('final_screen1');
//        });   
//    },       
// }

// f11111111


Main.final_screen1 = function() {}

Main.final_screen1.prototype = {
    create: function() {
        this.levelGroup = game.add.group();
        this.introbg = game.add.sprite(0, 0, 'plane1');
        this.levelGroup.add(this.introbg);

        this.plane14 = game.add.sprite(-470, 0, 'plane14');
        // this.plane14=game.add.sprite(800,320,'plane14');
        this.plane14.anchor.setTo(0.5);


        this.plane2 = game.add.sprite(375, 644.5, 'plane2');
        this.plane2.anchor.setTo(0.5);

        this.plane3 = game.add.sprite(346.5, 59.5, 'plane3');
        this.plane3.anchor.setTo(0.5);

        this.plane4 = game.add.sprite(220.5, 543.5, 'plane4');
        this.plane4.anchor.setTo(0.5);

        this.plane5 = game.add.sprite(74, 441, 'plane5');
        this.plane5.anchor.setTo(0.5);

        this.plane6 = game.add.sprite(71.5, 146.5, 'plane6');
        this.plane6.anchor.setTo(0.5);

        this.plane7 = game.add.sprite(202.5, 235, 'plane7');
        this.plane7.anchor.setTo(0.5);

        this.plane8 = game.add.sprite(158.5, 309, 'plane8');
        this.plane8.anchor.setTo(0.5);

        this.plane9 = game.add.sprite(77, 284, 'plane9');
        this.plane9.anchor.setTo(0.5);

        this.plane10 = game.add.sprite(307, 327.5, 'plane10');
        this.plane10.anchor.setTo(0.5);

        this.plane11 = game.add.sprite(320.5, 250.5, 'plane11');
        this.plane11.anchor.setTo(0.5);


        this.circle1 = game.add.graphics(-200, 80);
        // this.circle1 = game.add.graphics(80,80);
        this.circle1.beginFill(0x000000, 0.5);
        this.circle1.drawRect(0, 0, 450, 350);
        this.plane11.mask = this.circle1;

        // this.ani_plane=game.add.sprite(350,320,'ani_plane');
        // this.ani_plane=game.add.sprite(800,320,'ani_plane');
        // this.ani_plane.anchor.setTo(0.5);



        //   this.dragCircle_1 = game.add.graphics(200,240);
        //   this.dragCircle_1.beginFill(0x000000,0);
        //   this.dragCircle_1.drawRect(0,0,80,80);
        //   // this.dragCircle_1.inputEnabled=true;
        //   // this.dragCircle_1.input.useHandCursor=true;
        //     this.dragCircle_1.events.onInputDown.add(function(){
        //   this.arrow1.visible=false;
        //     this.dragCircle_1.inputEnabled=false;
        //     this.ani_plane.animations.add('ani_plane');
        //     this.ani_plane.animations.play('ani_plane',10,false).onComplete.add(function(){
        //   this.arrow2.visible=true;
        //     this.frank.inputEnabled=true;
        //   this.frank.input.useHandCursor=true;
        // },this);
        //   },this);


        // // this.ani_plane.animations.add('ani_plane');
        // // this.ani_plane.animations.play('ani_plane',10,true);




        this.boy0001 = game.add.sprite(-80, 280, 'boy0001');
        this.boy0001.anchor.setTo(0.5);
        this.boy0001.scale.setTo(0.3);

        //   this.boy0001.events.onInputDown.add(function(){
        //   this.arrow4.visible=false;
        //     this.boy0001.inputEnabled=false;
        // game.add.tween(this.boy0001).to({x:300}, 1000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){

        // game.add.tween(this.boy0001.scale).to({x:0.05,y:0.05}, 2000, Phaser.Easing.Quadratic.Out, true);
        // game.add.tween(this.boy0001).to({x:250,y:280}, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
        // game.add.tween(this.boy0001).to({alpha:0}, 800, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
        //  this.ani_plane.animations.add('ani_plane',[9,8,7,6,5,4,3,2,1,0]);
        //     this.ani_plane.animations.play('ani_plane',10,false).onComplete.add(function(){
        //  game.add.tween(this.playbtn.scale).to({x:1,y:1}, 500, Phaser.Easing.Quadratic.Out, true);


        // },this);
        // },this);
        // },this);
        // },this);

        // },this);




        this.frank = game.add.sprite(-80, 280, 'frank');
        this.frank.anchor.setTo(0.5);
        this.frank.scale.setTo(0.32);
        //    this.frank.events.onInputDown.add(function(){
        //    this.arrow2.visible=false;
        //      this.frank.inputEnabled=false;
        //  game.add.tween(this.frank).to({x:300}, 1000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){

        //  game.add.tween(this.frank.scale).to({x:0.04,y:0.04}, 2000, Phaser.Easing.Quadratic.Out, true);
        //  game.add.tween(this.frank).to({x:250,y:280}, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
        //  game.add.tween(this.frank).to({alpha:0}, 800, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
        //    this.arrow3.visible=true;
        // this.gril0001.inputEnabled=true;
        //    this.gril0001.input.useHandCursor=true;

        //  },this);
        //  },this);
        //  },this);            
        //  },this);

        this.gril0001 = game.add.sprite(50, 280, 'gril0001');
        this.gril0001.anchor.setTo(0.5);
        this.gril0001.scale.setTo(0.3);
        //   this.gril0001.events.onInputDown.add(function(){
        //   this.arrow3.visible=false;
        //     this.gril0001.inputEnabled=false;
        // game.add.tween(this.gril0001).to({x:300}, 1000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){

        // game.add.tween(this.gril0001.scale).to({x:0.04,y:0.04}, 2000, Phaser.Easing.Quadratic.Out, true);
        // game.add.tween(this.gril0001).to({x:250,y:280}, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
        // game.add.tween(this.gril0001).to({alpha:0}, 800, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){

        //   this.arrow4.visible=true;
        //   this.boy0001.inputEnabled=true;
        //   this.boy0001.input.useHandCursor=true;
        // },this);
        // },this);
        // },this);
        // },this);



        this.plane12 = game.add.sprite(320.5, 250.5, 'plane12');
        this.plane12.anchor.setTo(0.5);
        this.plane12.visible = false;

        this.plane13 = game.add.sprite(315.5, 417.5, 'plane13');
        this.plane13.anchor.setTo(0.5);



        this.babygroup = game.add.group();
        this.Body = game.add.sprite(0, 0, 'Body');
        this.babygroup.add(this.Body);

        this.babyelsabag56tophand = game.add.sprite(0, 0, 'babyelsabag56tophand');
        this.babygroup.add(this.babyelsabag56tophand);



        this.Shoe1 = game.add.sprite(0, 0, 'Shoe' + Main.baby_array[5]);
        this.babygroup.add(this.Shoe1);

        this.Dress1 = game.add.sprite(0, 0, 'Dress' + Main.baby_array[4]);
        this.babygroup.add(this.Dress1);

        this.babyelsabag1 = game.add.sprite(0, 0, 'babyelsabag' + Main.baby_array[0]);
        this.babyelsabag1.alpha = 0;
        this.babygroup.add(this.babyelsabag1);

        this.babyelsabagtophand = game.add.sprite(0, 0, 'babyelsabagtophand');
        this.babygroup.add(this.babyelsabagtophand);

        this.babyelsaneckkerchief1 = game.add.sprite(0, 0, 'babyelsaneckkerchief' + Main.baby_array[3]);
        // this.babyelsaneckkerchief1.alpha=0;
        this.babygroup.add(this.babyelsaneckkerchief1);

        this.Face = game.add.sprite(0, 0, 'Face');
        this.babygroup.add(this.Face);

        this.babyelsaearing1 = game.add.sprite(0, 0, 'babyelsaearing' + Main.baby_array[2]);
        // this.babyelsaearing1.alpha=0;
        this.babygroup.add(this.babyelsaearing1);

        this.babyelsaearing2 = game.add.sprite(-143, 0, 'babyelsaearing' + Main.baby_array[2]);
        this.babyelsaearing2.scale.setTo(0);

        // this.babyelsaearing2.alpha=0;
        this.babygroup.add(this.babyelsaearing2);

        this.Hair = game.add.sprite(0, 0, 'f_hair');
        this.babygroup.add(this.Hair);

        this.babyelsacap1 = game.add.sprite(0, 0, 'babyelsacap' + Main.baby_array[1]);
        // this.babyelsacap1.alpha=0;
        this.babygroup.add(this.babyelsacap1);

        this.BabyElsasmallfile = game.add.sprite(0, 0, 'BabyElsasmallfile');
        this.BabyElsasmallfile.visible = false;
        this.babygroup.add(this.BabyElsasmallfile);

        this.Righthandfinger = game.add.sprite(0, 0, 'Righthandfinger');
        this.babygroup.add(this.Righthandfinger);

        this.babygroup.scale.setTo(0.43);
        this.babygroup.x = 80;
        this.babygroup.y = 200;



        this.morebtn = game.add.sprite(85, 730, 'morebtn');
        this.morebtn.anchor.setTo(0.5);
        // this.morebtn.scale.setTo(0);
        this.morebtn.inputEnabled = true;
        this.morebtn.input.useHandCursor = true;
        this.morebtn.events.onInputUp.add(this.moreLink, this);
        this.morebtn.events.onInputOver.add(this.btnOver, this);
        this.morebtn.events.onInputOut.add(this.btnOut, this);

        this.playbtn = game.add.sprite(430, 730, 'donebtn');
        this.playbtn.anchor.setTo(0.5);
        this.playbtn.scale.setTo(0);
        this.playbtn.inputEnabled = true;
        this.playbtn.input.useHandCursor = true;
        this.playbtn.events.onInputUp.add(this.enterRoom, this);
        this.playbtn.events.onInputOver.add(this.btnOver, this);
        this.playbtn.events.onInputOut.add(this.btnOut, this);



        var arro2x = [245, 240, 150, 70, 113, 410, 710];
        var arro2y = [250, 300, 400, 320, 402, 130, 440];

        for (i = 1; i <= 4; i++) {
            this['arrow' + i] = game.add.sprite(arro2x[i - 1], arro2y[i - 1], 'arrow');
            this['arrow' + i].anchor.setTo(0.5);
            this['arrow' + i].animations.add('arrow');
            this['arrow' + i].animations.play('arrow', 30, true);
            this['arrow' + i].visible = false;
            if (i == 2) {

            }
            if (i == 1) {
                this['arrow' + i].visible = false;
                // this['arrow'+i].rotation=1.6;
            }

            if (i == 2) {
                this['arrow' + i].visible = false;
                // this['arrow'+i].rotation=1.6;
            }
            if (i == 4) {
                this['arrow' + i].visible = false;
                // this['arrow'+i].rotation=1.6;
            }

        }



        if (Main.shutterOn[0]) {
            this.shutter = game.add.sprite(0, 0, 'titlebg');
            game.add.tween(this.shutter).to({
                y: -850
            }, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                game.add.tween(this.plane14).to({
                    x: 550,
                    y: 290
                }, 4000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                    game.add.tween(this.circle1).to({
                        x: 80
                    }, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                        this.plane12.visible = true;

                        game.add.tween(this.gril0001.scale).to({
                            x: 0.2,
                            y: 0.2
                        }, 2000, Phaser.Easing.Quadratic.Out, true);
                        game.add.tween(this.gril0001).to({
                            x: 230
                        }, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                            game.add.tween(this.boy0001).to({
                                x: 80,
                                y: 260
                            }, 2000, Phaser.Easing.Quadratic.Out, true, 1000).onComplete.add(function() {
                                game.add.tween(this.boy0001.scale).to({
                                    x: 0.2,
                                    y: 0.2
                                }, 1500, Phaser.Easing.Quadratic.Out, true);
                                game.add.tween(this.boy0001).to({
                                    x: 230
                                }, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {

                                    game.add.tween(this.frank).to({
                                        x: 80
                                    }, 2000, Phaser.Easing.Quadratic.Out, true, 1000).onComplete.add(function() {
                                        game.add.tween(this.frank.scale).to({
                                            x: 0.2,
                                            y: 0.2
                                        }, 1500, Phaser.Easing.Quadratic.Out, true);
                                        game.add.tween(this.frank).to({
                                            x: 230
                                        }, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {

                                            game.add.tween(this.playbtn.scale).to({
                                                x: 1,
                                                y: 1
                                            }, 500, Phaser.Easing.Quadratic.Out, true);
                                        }, this);
                                    }, this);
                                }, this);
                            }, this);
                        }, this);

                    }, this);
                }, this);
            }, this);
        }

        // game.add.tween(this.ani_plane).to({x:350}, 1500, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
        //  this.arrow1.visible=true;
        //  this.dragCircle_1.inputEnabled=true;
        //  this.dragCircle_1.input.useHandCursor=true;
        // },this);


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
        CreateLinksInGame("Baby-Taylor-Airline-High-Hopes", "game", "logo");
    },
    moreLink: function() {
        CreateLinksInGame("Baby-Taylor-Airline-High-Hopes", "game", "more");
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
            game.state.start('final_screen');
        });
    },
}

// mmmmmmm

Main.menu = function() {}

Main.menu.prototype = {
    create: function() {
        this.levelGroup = game.add.group();
        this.introbg = game.add.sprite(0, 0, 'introbg');
        this.levelGroup.add(this.introbg);


        this.morebtn = game.add.sprite(85, 730, 'morebtn');
        this.morebtn.anchor.setTo(0.5);
        this.morebtn.scale.setTo(0);
        this.morebtn.inputEnabled = true;
        this.morebtn.input.useHandCursor = true;
        this.morebtn.events.onInputUp.add(this.moreLink, this);
        this.morebtn.events.onInputOver.add(this.btnOver, this);
        this.morebtn.events.onInputOut.add(this.btnOut, this);

        this.playbtn = game.add.sprite(430, 730, 'playbtn');
        this.playbtn.anchor.setTo(0.5);
        this.playbtn.scale.setTo(0);
        this.playbtn.inputEnabled = true;
        this.playbtn.input.useHandCursor = true;
        this.playbtn.events.onInputUp.add(this.enterRoom, this);
        this.playbtn.events.onInputOver.add(this.btnOver, this);
        this.playbtn.events.onInputOut.add(this.btnOut, this);




        if (Main.shutterOn[0]) {
            this.shutter = game.add.sprite(0, 0, 'titlebg');
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
        CreateLinksInGame("Baby-Taylor-Airline-High-Hopes", "game", "logo");
    },
    moreLink: function() {
        CreateLinksInGame("Baby-Taylor-Airline-High-Hopes", "game", "more");
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

// ffffffffff

Main.final_screen = function() {}

Main.final_screen.prototype = {
    create: function() {
        this.levelGroup = game.add.group();
        this.bg = game.add.sprite(0, 0, 'r_bg');
        this.levelGroup.add(this.bg);


        this.flite = game.add.sprite(280.5, 231.5, 'ani_plane');
        this.flite.anchor.setTo(0.5);




        this.babygroup = game.add.group();
        this.Body = game.add.sprite(0, 0, 'Body');
        this.babygroup.add(this.Body);

        this.babyelsabag56tophand = game.add.sprite(0, 0, 'babyelsabag56tophand');
        this.babygroup.add(this.babyelsabag56tophand);


        this.Shoe1 = game.add.sprite(0, 0, 'Shoe' + Main.baby_array[5]);
        this.babygroup.add(this.Shoe1);

        this.Dress1 = game.add.sprite(0, 0, 'Dress' + Main.baby_array[4]);
        this.babygroup.add(this.Dress1);

        this.babyelsabag1 = game.add.sprite(0, 0, 'babyelsabag' + Main.baby_array[0]);
        // this.babyelsabag1.alpha=0;
        this.babygroup.add(this.babyelsabag1);

        this.babyelsabagtophand = game.add.sprite(0, 0, 'babyelsabagtophand');
        this.babygroup.add(this.babyelsabagtophand);

        this.babyelsaneckkerchief1 = game.add.sprite(0, 0, 'babyelsaneckkerchief' + Main.baby_array[3]);
        // this.babyelsaneckkerchief1.alpha=0;
        this.babygroup.add(this.babyelsaneckkerchief1);

        this.Face = game.add.sprite(0, 0, 'Face');
        this.babygroup.add(this.Face);

        this.babyelsaearing1 = game.add.sprite(0, 0, 'babyelsaearing' + Main.baby_array[2]);
        // this.babyelsaearing1.alpha=0;
        this.babygroup.add(this.babyelsaearing1);

        this.babyelsaearing2 = game.add.sprite(-143, 0, 'babyelsaearing' + Main.baby_array[2]);
        this.babyelsaearing2.scale.setTo(0);

        // this.babyelsaearing2.alpha=0;
        this.babygroup.add(this.babyelsaearing2);

        this.Hair = game.add.sprite(0, 0, 'f_hair');
        this.babygroup.add(this.Hair);

        this.babyelsacap1 = game.add.sprite(0, 0, 'babyelsacap' + Main.baby_array[1]);
        // this.babyelsacap1.alpha=0;
        this.babygroup.add(this.babyelsacap1);




        this.Righthandfinger = game.add.sprite(0, 0, 'Righthandfinger');
        this.babygroup.add(this.Righthandfinger);

        this.babygroup.scale.setTo(0.65);
        this.babygroup.x = 100;
        this.babygroup.y = 200;





        this.morebtn = game.add.sprite(85, 730, 'morebtn');
        this.morebtn.anchor.setTo(0.5);
        // this.morebtn.scale.setTo(0);
        this.morebtn.inputEnabled = true;
        this.morebtn.input.useHandCursor = true;
        this.morebtn.events.onInputUp.add(this.moreLink, this);
        this.morebtn.events.onInputOver.add(this.btnOver, this);
        this.morebtn.events.onInputOut.add(this.btnOut, this);

        this.playbtn = game.add.sprite(430, 730, 'resetbtn');
        this.playbtn.anchor.setTo(0.5);
        this.playbtn.scale.setTo(0);
        this.playbtn.inputEnabled = true;
        this.playbtn.input.useHandCursor = true;
        this.playbtn.events.onInputUp.add(this.enterRoom, this);
        this.playbtn.events.onInputOver.add(this.btnOver, this);
        this.playbtn.events.onInputOut.add(this.btnOut, this);

        this.thumbGroup = game.add.group();
        game.load.crossOrigin = '*';
        /*this.randomId = game.rnd.integerInRange(0,  RelatedGames.length-1);
        this.thumbVar = game.add.sprite(167, 652, 'thumb_'+this.randomId);
        this.thumbVar.inputEnabled = true
        this.thumbVar.input.useHandCursor = true;
        this.thumbVar.events.onInputUp.add(this.thumbLink, this);
        this.thumbframeVar = game.add.sprite(165, 650, 'Tump_frame'); 
        this.thumbVar.height=this.thumbframeVar.height-2;
        this.thumbVar.width=this.thumbframeVar.width-2;
        this.thumbGroup.add(this.thumbVar);
        this.thumbGroup.add(this.thumbframeVar);
        this.thumbGroup.y=150;*/


        if (Main.shutterOn[0]) {
            this.shutter = game.add.sprite(0, 0, 'titlebg');
            game.add.tween(this.shutter).to({
                y: -850
            }, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                //game.add.tween(this.thumbGroup).to({y:0},700,Phaser.Easing.Quadratic.Out,true);
                game.add.tween(this.playbtn.scale).to({
                    x: 1,
                    y: 1
                }, 700, Phaser.Easing.Quadratic.Out, true);
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
    thumbLink: function() {
        CreateLinksInGame("Baby-Taylor-Airline-High-Hopes", "gameover", "thumb", RelatedGames[this.randomId]['id']);
    },
    openLink: function() {
        CreateLinksInGame("Baby-Taylor-Airline-High-Hopes", "gameover", "logo");
    },
    moreLink: function() {
        CreateLinksInGame("Baby-Taylor-Airline-High-Hopes", "gameover", "more");
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
            Main.baby_array = [1, 1, 1, 1, 1, 1];
            game.state.start('intro');
        });
    },
}



game.state.add('boot', Main.boot);
game.state.add('preloader', Main.preloader);
game.state.add('title', Main.title);
game.state.add('intro', Main.intro);
game.state.add('baby_dressup', Main.baby_dressup);
game.state.add('leval1', Main.leval1);
game.state.add('bathroom_scene', Main.bathroom_scene);
game.state.add('bathroom2_scene', Main.bathroom2_scene);
game.state.add('hair_scene', Main.hair_scene);
game.state.add('airpot_entry', Main.airpot_entry);
game.state.add('check_in', Main.check_in);
game.state.add('airpot_scene', Main.airpot_scene);
game.state.add('final_screen', Main.final_screen);
game.state.add('final_screen1', Main.final_screen1);

game.state.start('boot');