var game = new Phaser.Game(504, 800, Phaser.AUTO, 'gameContainer');
var Main = {
    music: null,
    shutterOn: [true],
    bar_arr: [1, 1, 1, 1, 1],

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
        game.load.spritesheet('soundicon', 'assets/soundicon.png', 86, 85, 2);
        game.load.image('logo', 'assets/logo.png');
        game.load.spritesheet('effects', 'assets/effects.png', 141, 134);
        game.load.spritesheet('effectssd', 'assets/efftes012.png', 367, 335);


        game.load.image('introbg', 'assets/intro/introbg.png');
        game.load.image('introspeaker', 'assets/intro/introspeaker.png');
        game.load.image('introtvlight', 'assets/intro/introtvlight.png');
        game.load.spritesheet('introtv', 'assets/intro/introtv.png', 133, 171, 4);
        game.load.image('introstandtaylor', 'assets/intro/introstandtaylor.png');
        game.load.image('taylormom', 'assets/intro/taylormom.png');
        game.load.image('introletter1', 'assets/intro/introletter1.png');
        game.load.image('introletter2', 'assets/intro/introletter2.png');
        game.load.image('introletter3', 'assets/intro/introletter3.png');
        game.load.image('introsittingtaylor', 'assets/intro/introsittingtaylor.png');
        game.load.image('introsittingtaylor', 'assets/intro/introsittingtaylor.png');
        // game.load.image('ggg','assets/intro/ggg.png');

        game.load.image('correct', 'assets/buttons/correct.png');
        game.load.image('more', 'assets/buttons/more.png');
        game.load.image('next', 'assets/buttons/next.png');
        game.load.image('play', 'assets/buttons/play.png');
        game.load.image('reset', 'assets/buttons/reset.png');
        game.load.image('panel_1', 'assets/buttons/panel_1.png');

        game.load.image('body', 'assets/taylor/body.png');
        game.load.image('face', 'assets/taylor/face.png');
        game.load.image('frame1', 'assets/taylor/frame1.png');
        game.load.image('frame2', 'assets/taylor/frame2.png');
        game.load.image('frame3', 'assets/taylor/frame3.png');
        game.load.image('taylorearning', 'assets/taylor/taylorearning.png');
        game.load.image('taylorhand', 'assets/taylor/taylorhand.png');
        game.load.image('taylorshoe1', 'assets/taylor/taylorshoe1.png');
        game.load.image('taylorshoe2', 'assets/taylor/taylorshoe2.png');
        game.load.image('taylorbg', 'assets/taylor/taylorbg.jpg');
        game.load.image('taylornecklace1', 'assets/taylor/taylornecklace1.png');
        game.load.image('taylornecklace1', 'assets/taylor/taylornecklace1.png');
        game.load.image('b_arrow', 'assets/taylor/b_arrow.png');
        game.load.image('n_arrow', 'assets/taylor/n_arrow.png');
        game.load.image('new_popup', 'assets/taylor/new_popup.png');


        game.load.image('btn1', 'assets/shop/btn1.png');
        game.load.image('btn2', 'assets/shop/btn2.png');
        game.load.image('sh_panel', 'assets/shop/sh_panel.png');
        game.load.image('sh_panel2', 'assets/shop/sh_panel2.png');
        game.load.image('sh_panel3', 'assets/shop/sh_panel3.png');
        game.load.image('trally', 'assets/shop/trally.png');
        game.load.image('trally2', 'assets/shop/trally2.png');
        game.load.image('sh_bg', 'assets/shop/sh_bg.jpg');
        game.load.image('c_baby', 'assets/shop/c_baby.png');
        game.load.image('bottle_g1', 'assets/shop/bottle_g1.png');
        game.load.image('cho_g1', 'assets/shop/cho_g1.png');
        game.load.image('coco_bottle', 'assets/shop/coco_bottle.png');
        game.load.image('fl_g', 'assets/shop/fl_g.png');
        game.load.image('last_rak', 'assets/shop/last_rak.png');
        game.load.image('milk_1_g1', 'assets/shop/milk_1_g1.png');
        game.load.image('mushroom_g1', 'assets/shop/mushroom_g1.png');
        game.load.image('plum_g1', 'assets/shop/plum_g1.png');
        game.load.image('ptato_g1', 'assets/shop/ptato_g1.png');
        game.load.image('sh_1', 'assets/shop/sh_1.png');
        game.load.image('sh_1_1', 'assets/shop/sh_1_1.png');
        game.load.image('sh_1_2', 'assets/shop/sh_1_2.png');
        game.load.image('sh_1_3', 'assets/shop/sh_1_3.png');
        game.load.image('sh_1_4', 'assets/shop/sh_1_4.png');
        game.load.image('sh_1_6', 'assets/shop/sh_1_6.png');
        game.load.image('sh_1_10', 'assets/shop/sh_1_10.png');
        game.load.image('sh_1_12', 'assets/shop/sh_1_12.png');
        game.load.image('sh_1_13', 'assets/shop/sh_1_13.png');
        game.load.image('sh_1_14', 'assets/shop/sh_1_14.png');
        game.load.image('sh_1_16', 'assets/shop/sh_1_16.png');
        game.load.image('sh_2', 'assets/shop/sh_2.png');
        game.load.image('sh_6', 'assets/shop/sh_6.png');
        game.load.image('sh_10', 'assets/shop/sh_10.png');
        game.load.image('sh_12', 'assets/shop/sh_12.png');
        game.load.image('sh_16', 'assets/shop/sh_16.png');
        game.load.image('sh_17', 'assets/shop/sh_17.png');
        game.load.image('sh_18', 'assets/shop/sh_18.png');
        game.load.image('sh_20', 'assets/shop/sh_20.png');
        game.load.image('sh_1_7', 'assets/shop/sh_1_7.png');
        game.load.image('sh_pop0001', 'assets/shop/sh_pop0001.png');
        game.load.image('sh_pop0002', 'assets/shop/sh_pop0002.png');
        game.load.image('sh_pop0003', 'assets/shop/sh_pop0003.png');
        game.load.image('sh_pop0004', 'assets/shop/sh_pop0004.png');
        game.load.image('sh_pop0005', 'assets/shop/sh_pop0005.png');
        game.load.image('sh_pop0006', 'assets/shop/sh_pop0006.png');
        game.load.image('sh_pop0007', 'assets/shop/sh_pop0007.png');
        game.load.image('sh_pop0008', 'assets/shop/sh_pop0008.png');
        game.load.image('sh_pop0009', 'assets/shop/sh_pop0009.png');

        game.load.image('barbie', 'assets/cake/barbie.png');
        game.load.image('knife', 'assets/cake/knife.png');
        game.load.image('scraber', 'assets/cake/scraber.png');
        game.load.image('stand', 'assets/cake/stand.png');
        game.load.image('panel', 'assets/cake/panel.png');
        game.load.image('sheet', 'assets/cake/sheet.png');
        game.load.image('final_barbie', 'assets/cake/final_barbie.png');
        game.load.image('head', 'assets/cake/head.png');
        // game.load.image('back_hair1','assets/cake/back_hair1.png');
        game.load.image('icon0001', 'assets/cake/icon0001.png');
        game.load.image('icon0002', 'assets/cake/icon0002.png');
        game.load.image('icon0003', 'assets/cake/icon0003.png');
        game.load.image('icon0004', 'assets/cake/icon0004.png');
        game.load.image('icon0005', 'assets/cake/icon0005.png');
        game.load.image('glass_1', 'assets/cake/glass_1.png');
        game.load.image('glass_2', 'assets/cake/glass_2.png');
        game.load.image('glass_22', 'assets/cake/glass_22.png');
        game.load.image('ribbon', 'assets/cake/ribbon.png');
        game.load.image('lid', 'assets/cake/lid.png');
        game.load.image('big_plate', 'assets/cake/big_plate.png');
        game.load.image('t_table', 'assets/cake/t_table.png');
        game.load.image('cream_ani_1', 'assets/cake/cream_ani_1.png');
        game.load.image('cream_knife', 'assets/cake/cream_knife.png');
        game.load.image('cream_knife_1', 'assets/cake/cream_knife_1.png');
        game.load.image('cream_bowl', 'assets/cake/cream_bowl.png');
        game.load.image('cream_knife_1', 'assets/cake/cream_knife_1.png');
        game.load.image('fina', 'assets/cake/fina.png');
        game.load.image('mom', 'assets/shop/mom.png');
        // game.load.image('pose_003h','assets/cake/pose_003h.png');
        // game.load.image('pose_005h','assets/cake/pose_005h.png');
        // game.load.image('pose_006h','assets/cake/pose_006h.png');
        game.load.image('popup', 'assets/cake/popup.png');
        game.load.image('mom_text', 'assets/cake/mom_text.png');
        game.load.image('child_txt', 'assets/cake/child_txt.png');
        game.load.image('new_dress', 'assets/cake/new_dress.png');
        // game.load.image('c11','assets/cake/c11.png');


        for (i = 1; i <= 6; i++) {

            game.load.image('bottom_0' + i, 'assets/cake/bottom_0' + i + '.png');
            game.load.image('pose_0' + i, 'assets/cake/pose_0' + i + '.png');
            game.load.image('pose_' + i, 'assets/cake/pose_' + i + '.png');
            game.load.image('pf_hand' + i, 'assets/cake/pf_hand' + i + '.png');
            game.load.image('h_hand' + i, 'assets/cake/h_hand' + i + '.png');
            game.load.image('top_0' + i, 'assets/cake/top_0' + i + '.png');
            game.load.image('barbie_hair0' + i, 'assets/cake/barbie_hair0' + i + '.png');
            game.load.image('back_hair0' + i, 'assets/cake/back_hair0' + i + '.png');
            game.load.image('taylordress1000' + i, 'assets/taylor/taylordress1000' + i + '.png');
            game.load.image('dress_01000' + i, 'assets/cake/dress_01000' + i + '.png');
            game.load.image('shoes_1000' + i, 'assets/cake/shoes_1000' + i + '.png');

        }



        for (i = 1; i <= 7; i++) {
            game.load.image('taylordress' + i, 'assets/taylor/taylordress' + i + '.png');
            game.load.image('taylorshoe' + i, 'assets/taylor/taylorshoe' + i + '.png');

        }


        for (i = 1; i <= 6; i++) {
            game.load.image('bottom_01dec_01_' + i, 'assets/cake/bottom_01dec_01_' + i + '.png');
            game.load.image('bottom_01dec_02_' + i, 'assets/cake/bottom_01dec_02_' + i + '.png');
            game.load.image('bottom_01dec_03_' + i, 'assets/cake/bottom_01dec_03_' + i + '.png');
            game.load.image('bottom_01dec_04_' + i, 'assets/cake/bottom_01dec_04_' + i + '.png');
            game.load.image('bottom_01dec_05_' + i, 'assets/cake/bottom_01dec_05_' + i + '.png');
            game.load.image('bottom_01dec_06_' + i, 'assets/cake/bottom_01dec_06_' + i + '.png');
            game.load.image('bottom1_top' + i, 'assets/cake/bottom1_top' + i + '.png');
            game.load.image('bottom2_top' + i, 'assets/cake/bottom2_top' + i + '.png');
            game.load.image('bottom3_top' + i, 'assets/cake/bottom3_top' + i + '.png');
            game.load.image('bottom4_top' + i, 'assets/cake/bottom4_top' + i + '.png');
            game.load.image('bottom5_top' + i, 'assets/cake/bottom5_top' + i + '.png');
            game.load.image('bottom6_top' + i, 'assets/cake/bottom6_top' + i + '.png');

        }

        for (i = 1; i <= 2; i++) {


            game.load.image('taylordress' + i, 'assets/taylor/taylordress' + i + '.png');
        }
        game.load.image('titleletter', 'assets/intro/titleletter.png');
        game.load.image('download', 'assets/intro/download.png');
        game.load.image('new_bg_1', 'assets/intro/new_bg_1.png');

        game.load.spritesheet('cook1fullbowl', 'assets/cook1/cook1fullbowl.png', 174, 141, 19);
        game.load.spritesheet('cook1firstbowl', 'assets/cook1/cook1firstbowl.png', 152, 230, 21);
        game.load.spritesheet('cook1secondbowl', 'assets/cook1/cook1secondbowl.png', 163, 236, 20);
        game.load.image('cook1bg', 'assets/cook1/cook1bg.png');
        game.load.image('bb_g', 'assets/cook1/bb_g.png');
        game.load.image('chimminey', 'assets/cook1/chimminey.png');
        game.load.image('cuboard', 'assets/cook1/cuboard.png');
        game.load.image('fridge', 'assets/cook1/fridge.png');
        game.load.image('fridge_door2', 'assets/cook1/fridge_door2.png');
        game.load.image('side_panel', 'assets/cook1/side_panel.png');


        game.load.image('cook1table', 'assets/cook1/cook1table.png');
        game.load.image('cook1firstone', 'assets/cook1/cook1firstone.png');
        game.load.image('cook1secondone', 'assets/cook1/cook1secondone.png');
        game.load.spritesheet('arrow', 'assets/cook1/arrow.png', 66, 89, 13);
        game.load.image('cook2firstone', 'assets/cook2/cook2firstone.png');
        game.load.image('cook2secondone', 'assets/cook2/cook2secondone.png');
        game.load.image('cook2thirdone', 'assets/cook2/cook2thirdone.png');
        game.load.spritesheet('cook2firstbowl', 'assets/cook2/cook2firstbowl.png', 140, 216, 16);
        game.load.spritesheet('cook2secondbowl', 'assets/cook2/cook2secondbowl.png', 141, 196, 16);
        game.load.spritesheet('cook2thirdbowl', 'assets/cook2/cook2thirdbowl.png', 136, 195, 19);
        game.load.spritesheet('cookfullbowl', 'assets/cook2/cookfullbowl.png', 173, 141, 20);
        game.load.image('cook3egg', 'assets/cook3/cook3egg.png');
        game.load.image('cook3panel', 'assets/cook3/cook3panel.png');
        game.load.image('cook3panel2', 'assets/cook3/cook3panel2.png');
        game.load.spritesheet('cook3eggani', 'assets/cook3/cook3eggani.png', 105, 138, 28);
        game.load.spritesheet('cook3firstbowl', 'assets/cook3/cook3firstbowl.png', 173, 141, 9);
        game.load.spritesheet('cook3secondbowl', 'assets/cook3/cook3secondbowl.png', 123, 99, 13);
        game.load.image('c1', 'assets/cook3/c1.png');
        game.load.image('c2', 'assets/cook3/c2.png');
        game.load.image('c3', 'assets/cook3/c3.png');
        game.load.spritesheet('c2ani', 'assets/cook3/c2ani.png', 107, 233, 15);
        game.load.image('first', 'assets/secondpro/first.png');
        game.load.image('second', 'assets/secondpro/second.png');

        game.load.spritesheet('secondfirstbowl', 'assets/secondpro/secondfirstbowl.png', 86, 231, 17);
        game.load.spritesheet('secondfullbowl', 'assets/secondpro/secondfullbowl.png', 173, 141, 19);
        game.load.spritesheet('secondsecondbowl', 'assets/secondpro/secondsecondbowl.png', 266, 338, 16);
        game.load.image('profirst', 'assets/secondpro/profirst.png');
        game.load.image('prosecond', 'assets/secondpro/prosecond.png');
        game.load.image('prothird', 'assets/secondpro/prothird.png');

        game.load.spritesheet('profirstani', 'assets/secondpro/profirstani.png', 111, 96, 7);
        game.load.spritesheet('prosecondani', 'assets/secondpro/prosecondani.png', 191, 291, 24);
        game.load.spritesheet('prothirdani', 'assets/secondpro/prothirdani.png', 121, 121, 25);
        game.load.spritesheet('profullbowl', 'assets/secondpro/profullbowl.png', 173, 176, 15);
        game.load.spritesheet('fullmachineani', 'assets/taylor/fullmachineani.png', 288, 567, 12);
        game.load.image('macine1', 'assets/taylor/macine1.png');
        game.load.image('firstone', 'assets/taylor/firstone.png');
        game.load.image('firsttwo', 'assets/taylor/firsttwo.png');
        game.load.spritesheet('t_timer', 'assets/taylor/t_timer.png', 160, 160, 60);
        game.load.spritesheet('fullbox', 'assets/taylor/fullbox.png', 254, 180, 5);
        game.load.spritesheet('board2', 'assets/taylor/board2.png', 297, 421, 5);

        game.load.image('cook1firstonecopy', 'assets/cook1/cook1firstonecopy.png');
        game.load.image('cook1secondonecopy', 'assets/cook1/cook1secondonecopy.png');
        game.load.image('cook2firstonecopy', 'assets/cook2/cook2firstonecopy.png');
        game.load.image('cook2secondonecopy', 'assets/cook2/cook2secondonecopy.png');
        game.load.image('cook2thirdonecopy', 'assets/cook2/cook2thirdonecopy.png');
        game.load.image('secondhand', 'assets/secondpro/secondhand.png');
        game.load.image('ggg', 'assets/taylor/ggg.jpg');
        game.load.image('board1', 'assets/taylor/board1.png');
        game.load.image('hand', 'assets/taylor/hand.png');

        game.load.image('anchor_01', 'assets/dressup/anchor_01.png');
        game.load.image('cuboard_1', 'assets/dressup/cuboard_1.png');
        // game.load.image('cuboard_2','assets/dressup/cuboard_2.png');
        game.load.image('nxt', 'assets/dressup/nxt.png');
        game.load.image('prr', 'assets/dressup/prr.png');
        game.load.image('steel', 'assets/dressup/steel.png');
        game.load.image('doll', 'assets/dressup/doll.png');
        game.load.image('new_popup', 'assets/dressup/new_popup.png');



        /*for(i=0;i<RelatedGames.length; i++)
            {
            game.load.image('thumb_'+i, RelatedGames[i]["thumb"]);
            }*/
        game.load.image('Tump_frame', 'assets/Tump_frame.png');


        game.load.spritesheet('cream_ani', 'assets/cake/cream_ani.png', 346, 287, 14);
        game.load.spritesheet('cut_ani', 'assets/cake/cut_ani.png', 606, 337, 16);
        game.load.spritesheet('knife_ani', 'assets/cake/knife_ani.png', 319, 343, 11);
        game.load.spritesheet('needle_ani', 'assets/cake/needle_ani.png', 499, 260, 11);
        game.load.spritesheet('door_ani', 'assets/dressup/door_ani.png', 297, 421, 5);


        //LLLLL
        game.load.onFileComplete.add(this.fileLoadFunPre, this);

    },

    fileLoadFunPre: function(progress, cacheKey, success, totalLoaded, totalFiles) {
        this.progress.setText('LOADING: ' + parseInt(progress) + '%');
        if (progress == 100) {
            this.progress.visible = false;
            game.load.onFileComplete.removeAll();
            //AAAAA

            // game.state.start('taylordressup');


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
        // YYGSDK.navigate("loading","logo");
    }
}
Main.title = function() {}

Main.title.prototype = {
    create: function() {
        if (Main.music == null) {
            Main.music = game.add.audio('music', 0.5, true);
            Main.music.play();
        };
        this.levelGroup = game.add.group();
        // this.bg = game.add.sprite(0,0,'titlebg');
        // this.levelGroup.add(this.bg);


        this.introbg = game.add.sprite(0, 0, 'introbg');

        this.introtvlight = game.add.sprite(424.50, 229.50, 'introtvlight');
        this.introtvlight.anchor.setTo(0.5);

        this.introspeaker = game.add.sprite(475.50, 342.50, 'introspeaker');
        this.introspeaker.anchor.setTo(0.5);



        // this.introtv=game.add.sprite(424.75,236.50,'introtv');
        // this.introtv.anchor.setTo(0.5);
        // this.introtv.animations.add('introtv');
        // this.introtv.animations.play('introtv',1,true);


        this.mom_1 = game.add.sprite(330, 400.25, 'mom');
        this.mom_1.anchor.setTo(0.5);


        this.dgroup = game.add.group();

        this.body = game.add.sprite(274.25, 513.85, 'body');
        this.body.anchor.setTo(0.5);
        this.dgroup.add(this.body);

        this.face = game.add.sprite(268.75, 320.45, 'face');
        this.face.anchor.setTo(0.5);
        this.dgroup.add(this.face);

        this.taylorshoe1 = game.add.sprite(277.90, 647.55, 'taylorshoe2');
        this.taylorshoe1.anchor.setTo(0.5);
        this.taylorshoe1.scale.setTo(0.6);
        this.dgroup.add(this.taylorshoe1);

        this.taylordress_1 = game.add.sprite(278, 521, 'taylordress10001');
        this.taylordress_1.anchor.setTo(0.5);
        this.dgroup.add(this.taylordress_1);

        this.taylordress1 = game.add.sprite(280, 517, 'taylordress1');
        this.taylordress1.anchor.setTo(0.5);
        this.taylordress1.visible = false;
        this.dgroup.add(this.taylordress1);

        this.taylornecklace1 = game.add.sprite(271.50, 396.85, 'taylornecklace1');
        this.taylornecklace1.anchor.setTo(0.5);
        // this.taylornecklace1.alpha=0; 
        this.dgroup.add(this.taylornecklace1);

        this.taylorearning = game.add.sprite(270.30, 354, 'taylorearning');
        this.taylorearning.anchor.setTo(0.5);
        this.dgroup.add(this.taylorearning);

        this.taylorhand = game.add.sprite(215.45, 414.50, 'taylorhand');
        this.taylorhand.anchor.setTo(0.5);
        this.dgroup.add(this.taylorhand);


        this.dgroup.x = -130;


        this.t_table = game.add.sprite(386.95, 712.55, 't_table');
        this.t_table.anchor.setTo(0.5);

        this.glass_1 = game.add.sprite(378.25, 520, 'glass_1');
        this.glass_1.anchor.setTo(0.5);
        this.glass_1.scale.setTo(0.6);

        this.glass_22 = game.add.sprite(378, 572, 'glass_22');
        this.glass_22.anchor.setTo(0.5);
        this.glass_22.scale.setTo(0.6);


        //////////////////////////////////////////////////////////////////////////////////

        this.barbie_group = game.add.group();


        this.back_hair01 = game.add.sprite(272, 254, 'back_hair0' + Main.bar_arr[0]);
        this.back_hair01.anchor.setTo(0.5);
        this.back_hair01.scale.setTo(0.92);
        //// this.back_hair01.alpha=0;     
        this.barbie_group.add(this.back_hair01);

        this.pose_01 = game.add.sprite(269.25, 335, 'pose_0' + Main.bar_arr[1]);
        this.pose_01.anchor.setTo(0.5);
        //// this.pose_01.alpha=0;
        this.barbie_group.add(this.pose_01);

        this.new_dress = game.add.sprite(270, 315, 'new_dress');
        this.new_dress.anchor.setTo(0.5);
        this.new_dress.scale.setTo(1.65);
        this.barbie_group.add(this.new_dress);


        this.head = game.add.sprite(269, 230, 'head');
        this.head.anchor.setTo(0.5);
        this.barbie_group.add(this.head);

        this.bottomdec_01 = game.add.sprite(264, 505, 'bottom_01dec_01_' + Main.bar_arr[4]);
        this.bottomdec_01.anchor.setTo(0.5);
        this.bottomdec_01.scale.setTo(0.85);
        //this.bottomdec_01.alpha=0;
        this.barbie_group.add(this.bottomdec_01);

        this.bottomdec_02 = game.add.sprite(264, 494, 'bottom_01dec_02_' + Main.bar_arr[4]);
        this.bottomdec_02.anchor.setTo(0.5);
        this.bottomdec_02.scale.setTo(0.85);
        //this.bottomdec_02.alpha=0;
        this.barbie_group.add(this.bottomdec_02);

        this.bottomdec_03 = game.add.sprite(262, 507, 'bottom_01dec_03_' + Main.bar_arr[4]);
        this.bottomdec_03.anchor.setTo(0.5);
        this.bottomdec_03.scale.setTo(0.85);
        //this.bottomdec_03.alpha=0;
        this.barbie_group.add(this.bottomdec_03);

        this.bottomdec_04 = game.add.sprite(264, 504, 'bottom_01dec_04_' + Main.bar_arr[4]);
        this.bottomdec_04.anchor.setTo(0.5);
        this.bottomdec_04.scale.setTo(0.85);
        //this.bottomdec_04.alpha=0;
        this.barbie_group.add(this.bottomdec_04);

        this.bottomdec_05 = game.add.sprite(264, 495, 'bottom_01dec_05_' + Main.bar_arr[4]);
        this.bottomdec_05.anchor.setTo(0.5);
        this.bottomdec_05.scale.setTo(0.85);
        //this.bottomdec_05.alpha=0;
        this.barbie_group.add(this.bottomdec_05);

        this.bottomdec_06 = game.add.sprite(263, 501, 'bottom_01dec_06_' + Main.bar_arr[4]);
        this.bottomdec_06.anchor.setTo(0.5);
        this.bottomdec_06.scale.setTo(0.85);
        //this.bottomdec_06.alpha=0;
        this.barbie_group.add(this.bottomdec_06);

        this.bottom_01 = game.add.sprite(266, 415, 'bottom_0' + Main.bar_arr[3]);
        this.bottom_01.anchor.setTo(0.5);
        this.bottom_01.scale.setTo(0.85);
        //this.bottom_01.alpha=0;
        this.barbie_group.add(this.bottom_01);



        this.bottom1_top = game.add.sprite(266, 526, 'bottom1_top' + Main.bar_arr[4]);
        this.bottom1_top.anchor.setTo(0.5);
        this.bottom1_top.scale.setTo(0.85);
        //this.bottom1_top.alpha=0;
        this.barbie_group.add(this.bottom1_top);

        this.bottom2_top = game.add.sprite(266, 515, 'bottom2_top' + Main.bar_arr[4]);
        this.bottom2_top.anchor.setTo(0.5);
        this.bottom2_top.scale.setTo(0.85);
        //this.bottom2_top.alpha=0;
        this.barbie_group.add(this.bottom2_top);

        this.bottom3_top = game.add.sprite(264, 528, 'bottom3_top' + Main.bar_arr[4]);
        this.bottom3_top.anchor.setTo(0.5);
        this.bottom3_top.scale.setTo(0.85);
        //this.bottom3_top.alpha=0;
        this.barbie_group.add(this.bottom3_top);

        this.bottom4_top = game.add.sprite(266, 525, 'bottom4_top' + Main.bar_arr[4]);
        this.bottom4_top.anchor.setTo(0.5);
        this.bottom4_top.scale.setTo(0.85);
        //this.bottom4_top.alpha=0;
        this.barbie_group.add(this.bottom4_top);

        this.bottom5_top = game.add.sprite(266, 516, 'bottom5_top' + Main.bar_arr[4]);
        this.bottom5_top.anchor.setTo(0.5);
        this.bottom5_top.scale.setTo(0.85);
        //this.bottom5_top.alpha=0;
        this.barbie_group.add(this.bottom5_top);

        this.bottom6_top = game.add.sprite(265, 522, 'bottom6_top' + Main.bar_arr[4]);
        this.bottom6_top.anchor.setTo(0.5);
        this.bottom6_top.scale.setTo(0.85);
        //this.bottom6_top.alpha=0;
        this.barbie_group.add(this.bottom6_top);

        this.h_hand = game.add.sprite(269, 335, 'h_hand' + Main.bar_arr[1]);
        this.h_hand.anchor.setTo(0.5);
        //this.h_hand.alpha=0;
        this.barbie_group.add(this.h_hand);

        this.pose_1 = game.add.sprite(269, 335, 'pose_' + Main.bar_arr[1]);
        this.pose_1.anchor.setTo(0.5);
        //this.pose_1.alpha=0;
        this.barbie_group.add(this.pose_1);

        this.top_01 = game.add.sprite(281.85, 289.85, 'top_0' + Main.bar_arr[2]);
        this.top_01.anchor.setTo(0.5);
        //this.top_01.alpha=0;
        this.barbie_group.add(this.top_01);

        this.pf_hand = game.add.sprite(269, 335, 'pf_hand' + Main.bar_arr[1]);
        this.pf_hand.anchor.setTo(0.5);
        //this.pf_hand.alpha=0;
        this.barbie_group.add(this.pf_hand);

        this.barbie_hair01 = game.add.sprite(273, 252, 'barbie_hair0' + Main.bar_arr[0]);
        this.barbie_hair01.anchor.setTo(0.5);
        this.barbie_hair01.scale.setTo(0.92);
        this.barbie_group.add(this.barbie_hair01);



        //////////////////////////////////////////////////////////////////////////////////

        if (Main.bar_arr[3] == 1) {
            this.bottomdec_01.visible = true;
            this.bottomdec_02.visible = false;
            this.bottomdec_03.visible = false;
            this.bottomdec_04.visible = false;
            this.bottomdec_05.visible = false;
            this.bottomdec_06.visible = false;

            this.bottom1_top.visible = true;
            this.bottom2_top.visible = false;
            this.bottom3_top.visible = false;
            this.bottom4_top.visible = false;
            this.bottom5_top.visible = false;
            this.bottom6_top.visible = false;

        }
        if (Main.bar_arr[3] == 2) {
            this.bottomdec_01.visible = false;
            this.bottomdec_02.visible = true;
            this.bottomdec_03.visible = false;
            this.bottomdec_04.visible = false;
            this.bottomdec_05.visible = false;
            this.bottomdec_06.visible = false;

            this.bottom1_top.visible = false;
            this.bottom2_top.visible = true;
            this.bottom3_top.visible = false;
            this.bottom4_top.visible = false;
            this.bottom5_top.visible = false;
            this.bottom6_top.visible = false;
        }
        if (Main.bar_arr[3] == 3) {
            this.bottomdec_01.visible = false;
            this.bottomdec_02.visible = false;
            this.bottomdec_03.visible = true;
            this.bottomdec_04.visible = false;
            this.bottomdec_05.visible = false;
            this.bottomdec_06.visible = false;

            this.bottom1_top.visible = false;
            this.bottom2_top.visible = false;
            this.bottom3_top.visible = true;
            this.bottom4_top.visible = false;
            this.bottom5_top.visible = false;
            this.bottom6_top.visible = false;
        }
        if (Main.bar_arr[3] == 4) {
            this.bottomdec_01.visible = false;
            this.bottomdec_02.visible = false;
            this.bottomdec_03.visible = false;
            this.bottomdec_04.visible = true;
            this.bottomdec_05.visible = false;
            this.bottomdec_06.visible = false;

            this.bottom1_top.visible = false;
            this.bottom2_top.visible = false;
            this.bottom3_top.visible = false;
            this.bottom4_top.visible = true;
            this.bottom5_top.visible = false;
            this.bottom6_top.visible = false;
        }
        if (Main.bar_arr[3] == 5) {
            this.bottomdec_01.visible = false;
            this.bottomdec_02.visible = false;
            this.bottomdec_03.visible = false;
            this.bottomdec_04.visible = false;
            this.bottomdec_05.visible = true;
            this.bottomdec_06.visible = false;

            this.bottom1_top.visible = false;
            this.bottom2_top.visible = false;
            this.bottom3_top.visible = false;
            this.bottom4_top.visible = false;
            this.bottom5_top.visible = true;
            this.bottom6_top.visible = false;

        }
        if (Main.bar_arr[3] == 6) {
            this.bottomdec_01.visible = false;
            this.bottomdec_02.visible = false;
            this.bottomdec_03.visible = false;
            this.bottomdec_04.visible = false;
            this.bottomdec_05.visible = false;
            this.bottomdec_06.visible = true;

            this.bottom1_top.visible = false;
            this.bottom2_top.visible = false;
            this.bottom3_top.visible = false;
            this.bottom4_top.visible = false;
            this.bottom5_top.visible = false;
            this.bottom6_top.visible = true;
        }
        //////////////////////////////////////////////////////////////////////////////////


        this.barbie_group.visible = true;
        this.barbie_group.scale.setTo(0.55);
        this.barbie_group.x = 235;
        this.barbie_group.y = 310;


        this.glass_2 = game.add.sprite(378, 572, 'glass_2');
        this.glass_2.anchor.setTo(0.5);
        this.glass_2.scale.setTo(0.6);

        this.lid = game.add.sprite(360, 390, 'lid');
        this.lid.anchor.setTo(0.5);
        this.lid.scale.setTo(0.6);
        this.lid.visible = true;

        this.ribbon = game.add.sprite(376, 382, 'ribbon');
        this.ribbon.anchor.setTo(0.5);
        this.ribbon.scale.setTo(0.6);
        this.ribbon.visible = true;




        this.titleletter = game.add.sprite(250, 690, 'titleletter');
        this.titleletter.anchor.setTo(0.5);
        this.titleletter.scale.setTo(0.8);


        this.morebtn = game.add.sprite(65, 740, 'more');
        this.morebtn.anchor.setTo(0.5);
        this.morebtn.scale.setTo(0.9);
        this.morebtn.inputEnabled = true;
        this.morebtn.input.useHandCursor = true;
        this.morebtn.events.onInputUp.add(this.moreLink, this);
        this.morebtn.events.onInputOver.add(this.btnOver, this);
        this.morebtn.events.onInputOut.add(this.btnOut, this);
        // this.levelGroup.add(this.morebtn);

        this.playbtn = game.add.sprite(430, 730, 'play');
        this.playbtn.anchor.setTo(0.5);
        this.playbtn.scale.setTo(0.9);
        this.playbtn.inputEnabled = true;
        this.playbtn.input.useHandCursor = true;
        this.playbtn.events.onInputUp.add(this.enterRoom, this);
        this.playbtn.events.onInputOver.add(this.btnOver, this);
        this.playbtn.events.onInputOut.add(this.btnOut, this);
        // this.levelGroup.add(this.playbtn);


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
        //  YYGSDK.navigate("menu","logo");
    },
    moreLink: function() {
        //  YYGSDK.navigate("menu","more");
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
        MyShowAD('intro');
    },
}

Main.intro = function() {}

Main.intro.prototype = {
    create: function() {
        this.levelGroup = game.add.group();
        // this.introbg = game.add.sprite(0,0,'introbg');
        // this.levelGroup.add(this.introbg);


        this.introbg = game.add.sprite(0, 0, 'introbg');


        this.introtv = game.add.sprite(424.75, 236.50, 'introtv');
        this.introtv.anchor.setTo(0.5);
        this.introtv.animations.add('introtv');
        this.introtv.animations.play('introtv', 1, true);

        this.introtvlight = game.add.sprite(424.50, 229.50, 'introtvlight');
        this.introtvlight.anchor.setTo(0.5);

        this.introspeaker = game.add.sprite(475.50, 342.50, 'introspeaker');
        this.introspeaker.anchor.setTo(0.5);



        // this.introstandtaylor=game.add.sprite(140.50,541.50,'introstandtaylor');
        // this.introstandtaylor.anchor.setTo(0.5);



        this.taylormom = game.add.sprite(97.05, 327.25, 'taylormom');
        this.taylormom.anchor.setTo(0.5);


        this.introsittingtaylor = game.add.sprite(186.50, 342.65, 'introsittingtaylor');
        this.introsittingtaylor.anchor.setTo(0.5);
        this.introsittingtaylor.scale.setTo(0.7);


        // this.taylormom=game.add.sprite(379.05,424.25,'taylormom');
        // this.taylormom.anchor.setTo(0.5);



        this.morebtn = game.add.sprite(65, 740, 'more');
        this.morebtn.anchor.setTo(0.5);
        this.morebtn.scale.setTo(0.9);
        this.morebtn.inputEnabled = true;
        this.morebtn.input.useHandCursor = true;
        this.morebtn.events.onInputUp.add(this.moreLink, this);
        this.morebtn.events.onInputOver.add(this.btnOver, this);
        this.morebtn.events.onInputOut.add(this.btnOut, this);
        // this.levelGroup.add(this.morebtn);


        this.playbtn = game.add.sprite(430, 730, 'next');
        this.playbtn.anchor.setTo(0.5);
        this.playbtn.scale.setTo(0);
        this.playbtn.inputEnabled = true;
        this.playbtn.input.useHandCursor = true;
        this.playbtn.events.onInputUp.add(this.enterRoom, this);
        this.playbtn.events.onInputOver.add(this.btnOver, this);
        this.playbtn.events.onInputOut.add(this.btnOut, this);
        // this.levelGroup.add(this.playbtn);

        this.popup1 = game.add.sprite(280, 190, 'introletter1');
        this.popup1.anchor.setTo(0.5);
        this.popup1.scale.setTo(0);
        // this.levelGroup.add(this.popup1);

        this.popup2 = game.add.sprite(180, 120, 'introletter3');
        this.popup2.anchor.setTo(0.5);
        this.popup2.scale.setTo(0);
        // // this.levelGroup.add(this.popup2);

        this.popup3 = game.add.sprite(280, 180, 'introletter2');
        this.popup3.anchor.setTo(0.5);
        this.popup3.scale.setTo(0);
        // this.levelGroup.add(this.popup3);


        if (Main.shutterOn[0]) {
            this.shutter = game.add.sprite(0, 0, 'download');
            game.add.tween(this.shutter).to({
                y: -850
            }, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(this.startPopUp, this)
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
            x: 0.5,
            y: 0.5
        }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(this.bringPopUp2, this);
    },
    bringPopUp2: function() {
        game.add.tween(this.popup1).to({
            alpha: 0
        }, 700, Phaser.Easing.Quadratic.Out, true, 2000);
        game.add.tween(this.popup2.scale).to({
            x: 0.6,
            y: 0.6
        }, 700, Phaser.Easing.Quadratic.Out, true, 2500).onComplete.add(this.bringPopUp3, this);
    },
    bringPopUp3: function() {
        game.add.tween(this.popup2).to({
            alpha: 0
        }, 700, Phaser.Easing.Quadratic.Out, true, 2000)
        game.add.tween(this.popup3.scale).to({
            x: 0.6,
            y: 0.6
        }, 700, Phaser.Easing.Quadratic.Out, true, 2500).onComplete.add(this.bringBottons, this);

    },
    bringBottons: function() {
        game.add.tween(this.popup3.scale).to({
            x: 0,
            y: 0
        }, 700, Phaser.Easing.Quadratic.Out, true, 2500).onComplete.add(function() {
            // game.add.tween(this.morebtn.scale).to({x:0.8, y:0.8}, 700, Phaser.Easing.Quadratic.Out, true);
            game.add.tween(this.playbtn.scale).to({
                x: 0.8,
                y: 0.8
            }, 700, Phaser.Easing.Quadratic.Out, true);

        }, this);


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
        // YYGSDK.navigate("game","logo");
    },
    moreLink: function() {
        //  YYGSDK.navigate("game","morebutton");
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
            MyShowAD('shopping');
        });

    },
}

//tttttttttt
Main.taylordressup = function() {}
Main.taylordressup.prototype = {
    create: function() {
        this.levelGroup = game.add.group();


        this.ggg = game.add.sprite(0, 0, 'ggg');

        this.b_arrow = game.add.sprite(357, 88, 'b_arrow');
        this.b_arrow.anchor.setTo(0.5);
        this.b_arrow.scale.setTo(0.8);
        // this.b_arrow.inputEnabled =true;
        // this.b_arrow.input.useHandCursor =true;
        this.b_arrow.events.onInputDown.add(function() {
            this.b_arrow.visible = false;
            this.n_arrow.visible = true;
            this.c_group.visible = true;
            this.c1_group.visible = false;

        }, this);
        this.b_arrow.visible = false;

        this.n_arrow = game.add.sprite(430, 88, 'n_arrow');
        this.n_arrow.anchor.setTo(0.5);
        this.n_arrow.scale.setTo(0.8);
        // this.n_arrow.inputEnabled =true;
        // this.n_arrow.input.useHandCursor =true;
        this.n_arrow.events.onInputDown.add(function() {
            this.n_arrow.visible = false;
            this.b_arrow.visible = true;
            this.c_group.visible = false;
            this.c1_group.visible = true;

        }, this);
        this.n_arrow.visible = false;



        this.rect_05 = game.add.graphics(140, 100);
        this.rect_05.beginFill(0x666666, 0);
        this.rect_05.drawRect(0, 0, 504, 600);
        this.rect_05.inputEnabled = true;
        this.rect_05.input.useHandCursor = true;



        this.cuboard_1 = game.add.sprite(348, 340, 'cuboard_1');
        this.cuboard_1.anchor.setTo(0.5);
        this.cuboard_1.scale.setTo(0.75);
        // this.c_group.add(this.cuboard_1);

        this.steel = game.add.sprite(346, 200, 'steel');
        this.steel.anchor.setTo(0.5);
        // this.c_group.add(this.steel);

        this.anchor_01 = game.add.sprite(270, 220, 'anchor_01');
        this.anchor_01.anchor.setTo(0.5);
        // this.c_group.add(this.anchor_01);




        this.dgroup = game.add.group();

        this.body = game.add.sprite(274.25, 513.85, 'body');
        this.body.anchor.setTo(0.5);
        this.dgroup.add(this.body);

        this.taylorshoe_1 = game.add.sprite(279, 483, 'taylorshoe1');
        this.taylorshoe_1.anchor.setTo(0.5);
        // this.taylorshoe_1.scale.setTo(1.3);
        this.dgroup.add(this.taylorshoe_1);


        this.face = game.add.sprite(268.75, 320.45, 'face');
        this.face.anchor.setTo(0.5);
        this.dgroup.add(this.face);



        this.taylorshoe1 = game.add.sprite(277.90, 647.55, 'shoes_10001');
        this.taylorshoe1.anchor.setTo(0.5);
        this.taylorshoe1.scale.setTo(0.6);
        this.taylorshoe1.visible = false;
        this.dgroup.add(this.taylorshoe1);

        this.taylordress_1 = game.add.sprite(271, 521, 'taylordress1');
        this.taylordress_1.anchor.setTo(0.5);
        this.dgroup.add(this.taylordress_1);

        this.taylordress1 = game.add.sprite(277, 515, 'taylordress1');
        this.taylordress1.anchor.setTo(0.5);
        this.taylordress1.visible = false;
        this.dgroup.add(this.taylordress1);

        this.hand = game.add.sprite(277, 520, 'hand');
        this.hand.anchor.setTo(0.5);
        this.dgroup.add(this.hand)

        this.taylornecklace1 = game.add.sprite(271.50, 396.85, 'taylornecklace1');
        this.taylornecklace1.anchor.setTo(0.5);
        this.taylornecklace1.alpha = 0;
        this.dgroup.add(this.taylornecklace1);

        this.taylorearning = game.add.sprite(270.30, 354, 'taylorearning');
        this.taylorearning.anchor.setTo(0.5);
        this.dgroup.add(this.taylorearning);

        this.taylorhand = game.add.sprite(215.45, 414.50, 'taylorhand');
        this.taylorhand.anchor.setTo(0.5);
        this.dgroup.add(this.taylorhand);



        this.dgroup.x = -180;
        this.dgroup.y = 0;
        // this.dgroup.scale.setTo(1);

        this.c_group = game.add.group();


        this.dress_010001 = game.add.sprite(275, 280, 'taylordress10003');
        this.dress_010001.anchor.setTo(0.5);
        this.dress_010001.scale.setTo(0.5);
        this.dress_010001.inputEnabled = true;
        this.dress_010001.input.useHandCursor = true;
        this.dress_010001.input.pixelPerfectClick = true;
        this.dress_010001.input.pixelPerfectOver = true;
        this.dress_010001.input.enableDrag();
        this.dress_010001.events.onInputUp.add(function() {
            if ((game.input.activePointer.x > 0 && game.input.activePointer.x < 230 && game.input.activePointer.y > 146 && game.input.activePointer.y < 610)) {
                // this.dress_010001.visible =false;
                this.taylordress1.visible = true;
                this.taylordress_1.visible = false;
                this.taylordress1.loadTexture('taylordress10003');
                this.dress_010012.visible = true;
                this.dress_010001.visible = false;
                this.dress_010011.visible = true;
                this.dress_010002.visible = true;
                this.dress_010003.visible = true;
                this.dress_12.visible = true;
                game.add.tween(this.dress_010001).to({
                    x: 275,
                    y: 280
                }, 50, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                    game.add.tween(this.popup).to({
                        alpha: 1
                    }, 800, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                        game.add.tween(this.popup).to({
                            alpha: 0
                        }, 800, Phaser.Easing.Quadratic.Out, true, 500).onComplete.add(function() {




                        }, this);
                    }, this);
                }, this);


            } else {

                game.add.tween(this.dress_010001).to({
                    x: 275,
                    y: 280
                }, 300, Phaser.Easing.Quadratic.Out, true)

            }
        }, this);

        this.c_group.add(this.dress_010001);

        this.shoes_100031 = game.add.sprite(265, 390, 'shoes_10003');
        this.shoes_100031.anchor.setTo(0.5);
        this.shoes_100031.scale.setTo(0.45);
        this.shoes_100031.inputEnabled = true;
        this.shoes_100031.input.useHandCursor = true;
        this.shoes_100031.input.pixelPerfectClick = true;
        this.shoes_100031.input.pixelPerfectOver = true;
        this.shoes_100031.input.enableDrag();
        this.shoes_100031.events.onInputUp.add(function() {

            if ((game.input.activePointer.x > 0 && game.input.activePointer.x < 230 && game.input.activePointer.y > 620 && game.input.activePointer.y < 784)) {
                // this.shoes_100031.visible =false;
                this.taylorshoe_1.visible = false;
                this.taylorshoe1.visible = true;
                this.taylorshoe1.loadTexture('shoes_10003');

                this.shoes_100031.visible = false;
                this.shoes_100051.visible = true;
                this.shoes_100011.visible = true;
                this.shoes_100041.visible = true;
                this.shoes_100021.visible = true;
                this.shoes_100061.visible = true;
                game.add.tween(this.shoes_100031).to({
                    x: 265,
                    y: 390
                }, 50, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                    game.add.tween(this.popup).to({
                        alpha: 1
                    }, 800, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                        game.add.tween(this.popup).to({
                            alpha: 0
                        }, 800, Phaser.Easing.Quadratic.Out, true, 500).onComplete.add(function() {




                        }, this);
                    }, this);
                }, this);


            } else {

                game.add.tween(this.shoes_100031).to({
                    x: 265,
                    y: 390
                }, 300, Phaser.Easing.Quadratic.Out, true)

            }
        }, this);
        this.c_group.add(this.shoes_100031);



        this.anchor_02 = game.add.sprite(350, 220, 'anchor_01');
        this.anchor_02.anchor.setTo(0.5);
        this.c_group.add(this.anchor_02);

        this.dress_010011 = game.add.sprite(350, 280, 'taylordress10002');
        this.dress_010011.anchor.setTo(0.5);
        this.dress_010011.scale.setTo(0.5);
        this.dress_010011.inputEnabled = true;
        this.dress_010011.input.useHandCursor = true;
        this.dress_010011.input.pixelPerfectClick = true;
        this.dress_010011.input.pixelPerfectOver = true;
        this.dress_010011.input.enableDrag();
        this.dress_010011.events.onInputUp.add(function() {
            if ((game.input.activePointer.x > 0 && game.input.activePointer.x < 230 && game.input.activePointer.y > 146 && game.input.activePointer.y < 610)) {
                // this.dress_010011.visible =false;
                this.taylordress1.visible = true;
                this.taylordress_1.visible = false;
                this.taylordress1.loadTexture('taylordress10002');

                this.dress_010012.visible = true;
                this.dress_010001.visible = true;
                this.dress_010011.visible = false;
                this.dress_010002.visible = true;
                this.dress_010003.visible = true;
                this.dress_12.visible = true;

                game.add.tween(this.dress_010011).to({
                    x: 350,
                    y: 280
                }, 50, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                    game.add.tween(this.popup).to({
                        alpha: 1
                    }, 800, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                        game.add.tween(this.popup).to({
                            alpha: 0
                        }, 800, Phaser.Easing.Quadratic.Out, true, 500).onComplete.add(function() {


                            // Main.magicstars.play();




                        }, this);
                    }, this);
                }, this);


            } else {

                game.add.tween(this.dress_010011).to({
                    x: 350,
                    y: 280
                }, 300, Phaser.Easing.Quadratic.Out, true)

            }
        }, this);
        this.c_group.add(this.dress_010011);



        this.shoes_100051 = game.add.sprite(345, 390, 'shoes_10005');
        this.shoes_100051.anchor.setTo(0.5);
        this.shoes_100051.scale.setTo(0.45);
        this.shoes_100051.inputEnabled = true;
        this.shoes_100051.input.useHandCursor = true;
        this.shoes_100051.input.pixelPerfectClick = true;
        this.shoes_100051.input.pixelPerfectOver = true;
        this.shoes_100051.input.enableDrag();
        this.shoes_100051.events.onInputUp.add(function() {
            if ((game.input.activePointer.x > 0 && game.input.activePointer.x < 230 && game.input.activePointer.y > 620 && game.input.activePointer.y < 784)) {
                // this.shoes_100051.visible =false;
                this.taylorshoe_1.visible = false;
                this.taylorshoe1.visible = true;
                this.shoes_100031.visible = true;
                this.shoes_100051.visible = false;
                this.shoes_100011.visible = true;
                this.shoes_100041.visible = true;
                this.shoes_100021.visible = true;
                this.shoes_100061.visible = true;
                this.taylorshoe1.loadTexture('shoes_10005');
                game.add.tween(this.shoes_100051).to({
                    x: 345,
                    y: 390
                }, 50, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                    game.add.tween(this.popup).to({
                        alpha: 1
                    }, 800, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                        game.add.tween(this.popup).to({
                            alpha: 0
                        }, 800, Phaser.Easing.Quadratic.Out, true, 500).onComplete.add(function() {


                            // Main.magicstars.play();




                        }, this);
                    }, this);
                }, this);

            } else {

                game.add.tween(this.shoes_100051).to({
                    x: 345,
                    y: 390
                }, 300, Phaser.Easing.Quadratic.Out, true)

            }
        }, this);
        this.c_group.add(this.shoes_100051);


        this.anchor_03 = game.add.sprite(430, 220, 'anchor_01');
        this.anchor_03.anchor.setTo(0.5);
        this.c_group.add(this.anchor_03);

        this.dress_010002 = game.add.sprite(435, 280, 'taylordress10004');
        this.dress_010002.anchor.setTo(0.5);
        this.dress_010002.scale.setTo(0.5);
        this.dress_010002.inputEnabled = true;
        this.dress_010002.input.useHandCursor = true;
        this.dress_010002.input.pixelPerfectClick = true;
        this.dress_010002.input.pixelPerfectOver = true;
        this.dress_010002.input.enableDrag();
        this.dress_010002.events.onInputUp.add(function() {
            if ((game.input.activePointer.x > 0 && game.input.activePointer.x < 230 && game.input.activePointer.y > 146 && game.input.activePointer.y < 610)) {
                // this.dress_010002.visible =false;
                this.taylordress1.visible = true;
                this.taylordress_1.visible = false;

                this.dress_010012.visible = true;
                this.dress_010001.visible = true;
                this.dress_010011.visible = true;
                this.dress_010002.visible = false;
                this.dress_010003.visible = true;
                this.dress_12.visible = true;
                this.taylordress1.loadTexture('taylordress10004');
                game.add.tween(this.dress_010002).to({
                    x: 435,
                    y: 280
                }, 50, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                    game.add.tween(this.popup).to({
                        alpha: 1
                    }, 800, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                        game.add.tween(this.popup).to({
                            alpha: 0
                        }, 800, Phaser.Easing.Quadratic.Out, true, 500).onComplete.add(function() {



                            // Main.magicstars.play();



                        }, this);
                    }, this);
                }, this);

            } else {

                game.add.tween(this.dress_010002).to({
                    x: 435,
                    y: 280
                }, 300, Phaser.Easing.Quadratic.Out, true)

            }
        }, this);

        this.c_group.add(this.dress_010002);

        this.shoes_100011 = game.add.sprite(435, 390, 'shoes_10001');
        this.shoes_100011.anchor.setTo(0.5);
        this.shoes_100011.scale.setTo(0.45);
        this.shoes_100011.inputEnabled = true;
        this.shoes_100011.input.useHandCursor = true;
        this.shoes_100011.input.pixelPerfectClick = true;
        this.shoes_100011.input.pixelPerfectOver = true;
        this.shoes_100011.input.enableDrag();
        this.shoes_100011.events.onInputUp.add(function() {
            if ((game.input.activePointer.x > 0 && game.input.activePointer.x < 230 && game.input.activePointer.y > 620 && game.input.activePointer.y < 784)) {
                // this.shoes_100011.visible =false;
                this.taylorshoe_1.visible = false;
                this.taylorshoe1.visible = true;
                this.taylorshoe1.loadTexture('shoes_10001');

                this.shoes_100031.visible = true;
                this.shoes_100051.visible = true;
                this.shoes_100011.visible = false;
                this.shoes_100041.visible = true;
                this.shoes_100021.visible = true;
                this.shoes_100061.visible = true;

                game.add.tween(this.shoes_100011).to({
                    x: 435,
                    y: 390
                }, 50, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                    game.add.tween(this.popup).to({
                        alpha: 1
                    }, 800, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                        game.add.tween(this.popup).to({
                            alpha: 0
                        }, 800, Phaser.Easing.Quadratic.Out, true, 500).onComplete.add(function() {



                            // Main.magicstars.play();




                        }, this);
                    }, this);
                }, this);

            } else {

                game.add.tween(this.shoes_100011).to({
                    x: 435,
                    y: 390
                }, 300, Phaser.Easing.Quadratic.Out, true)

            }
        }, this);
        this.c_group.add(this.shoes_100011);


        this.c_group.visible = true;

        this.c1_group = game.add.group();

        // this.cuboard_2 = game.add.sprite(348,340,'cuboard_1');
        // this.cuboard_2.anchor.setTo(0.5);
        // this.cuboard_2.scale.setTo(0.75);
        // this.c1_group.add(this.cuboard_2);

        // this.steel1 = game.add.sprite(346,200,'steel');
        // this.steel1.anchor.setTo(0.5);
        // this.c1_group.add(this.steel1);

        this.anchor_011 = game.add.sprite(270, 220, 'anchor_01');
        this.anchor_011.anchor.setTo(0.5);
        this.c1_group.add(this.anchor_011);

        this.dress_010003 = game.add.sprite(272, 280, 'taylordress10005');
        this.dress_010003.anchor.setTo(0.5);
        this.dress_010003.scale.setTo(0.5);
        this.dress_010003.inputEnabled = true;
        this.dress_010003.input.useHandCursor = true;
        this.dress_010003.input.pixelPerfectClick = true;
        this.dress_010003.input.pixelPerfectOver = true;
        this.dress_010003.input.enableDrag();
        this.dress_010003.events.onInputUp.add(function() {
            if ((game.input.activePointer.x > 0 && game.input.activePointer.x < 230 && game.input.activePointer.y > 146 && game.input.activePointer.y < 610)) {
                // this.dress_010003.visible =false;
                this.taylordress1.visible = true;
                this.taylordress_1.visible = false;
                this.taylordress1.loadTexture('taylordress10005');
                this.dress_010012.visible = true;
                this.dress_010001.visible = true;
                this.dress_010011.visible = true;
                this.dress_010002.visible = true;
                this.dress_010003.visible = false;
                this.dress_12.visible = true;
                game.add.tween(this.dress_010003).to({
                    x: 272,
                    y: 280
                }, 300, Phaser.Easing.Quadratic.Out, true)
                game.add.tween(this.popup).to({
                    alpha: 1
                }, 800, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                    game.add.tween(this.popup).to({
                        alpha: 0
                    }, 800, Phaser.Easing.Quadratic.Out, true, 500).onComplete.add(function() {


                        // Main.magicstars.play();



                    }, this);
                }, this);

            } else {

                game.add.tween(this.dress_010003).to({
                    x: 272,
                    y: 280
                }, 300, Phaser.Easing.Quadratic.Out, true)

            }
        }, this);

        this.c1_group.add(this.dress_010003);

        this.shoes_100041 = game.add.sprite(265, 390, 'shoes_10004');
        this.shoes_100041.anchor.setTo(0.5);
        this.shoes_100041.scale.setTo(0.45);
        this.shoes_100041.inputEnabled = true;
        this.shoes_100041.input.useHandCursor = true;
        this.shoes_100041.input.pixelPerfectClick = true;
        this.shoes_100041.input.pixelPerfectOver = true;
        this.shoes_100041.input.enableDrag();
        this.shoes_100041.events.onInputUp.add(function() {
            if ((game.input.activePointer.x > 0 && game.input.activePointer.x < 230 && game.input.activePointer.y > 620 && game.input.activePointer.y < 784)) {
                // this.shoes_100041.visible =false;
                this.taylorshoe_1.visible = false;
                this.taylorshoe1.visible = true;
                this.taylorshoe1.loadTexture('shoes_10004');

                this.shoes_100031.visible = true;
                this.shoes_100051.visible = true;
                this.shoes_100011.visible = true;
                this.shoes_100041.visible = false;
                this.shoes_100021.visible = true;
                this.shoes_100061.visible = true;
                game.add.tween(this.shoes_100041).to({
                    x: 265,
                    y: 390
                }, 300, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                    game.add.tween(this.popup).to({
                        alpha: 1
                    }, 800, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                        game.add.tween(this.popup).to({
                            alpha: 0
                        }, 800, Phaser.Easing.Quadratic.Out, true, 500).onComplete.add(function() {




                        }, this);
                    }, this);
                }, this);

            } else {

                game.add.tween(this.shoes_100041).to({
                    x: 265,
                    y: 390
                }, 300, Phaser.Easing.Quadratic.Out, true)

            }
        }, this);
        this.c1_group.add(this.shoes_100041);



        this.anchor_021 = game.add.sprite(350, 220, 'anchor_01');
        this.anchor_021.anchor.setTo(0.5);
        this.c1_group.add(this.anchor_021);

        this.dress_010012 = game.add.sprite(350, 280, 'taylordress10006');
        this.dress_010012.anchor.setTo(0.5);
        this.dress_010012.scale.setTo(0.5);
        this.dress_010012.inputEnabled = true;
        this.dress_010012.input.useHandCursor = true;
        this.dress_010012.input.pixelPerfectClick = true;
        this.dress_010012.input.pixelPerfectOver = true;
        this.dress_010012.input.enableDrag();
        this.dress_010012.events.onInputUp.add(function() {
            if ((game.input.activePointer.x > 0 && game.input.activePointer.x < 230 && game.input.activePointer.y > 146 && game.input.activePointer.y < 610)) {
                this.dress_010012.visible = false;
                this.dress_010001.visible = true;
                this.dress_010011.visible = true;
                this.dress_010002.visible = true;
                this.dress_010003.visible = true;
                this.dress_12.visible = true;
                this.taylordress1.visible = true;
                this.taylordress_1.visible = false;
                this.taylordress1.loadTexture('taylordress10006');
                this.dress_010012.inputEnabled = false;

                game.add.tween(this.dress_010012).to({
                    x: 350,
                    y: 280
                }, 300, Phaser.Easing.Quadratic.Out, true)

            } else {

                game.add.tween(this.dress_010012).to({
                    x: 350,
                    y: 280
                }, 300, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                    game.add.tween(this.popup).to({
                        alpha: 1
                    }, 800, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                        game.add.tween(this.popup).to({
                            alpha: 0
                        }, 800, Phaser.Easing.Quadratic.Out, true, 500).onComplete.add(function() {


                            // Main.magicstars.play();



                        }, this);
                    }, this);
                }, this);

            }
        }, this);

        this.c1_group.add(this.dress_010012);


        this.shoes_100021 = game.add.sprite(345, 390, 'shoes_10002');
        this.shoes_100021.anchor.setTo(0.5);
        this.shoes_100021.scale.setTo(0.45);
        this.shoes_100021.inputEnabled = true;
        this.shoes_100021.input.useHandCursor = true;
        this.shoes_100021.input.pixelPerfectClick = true;
        this.shoes_100021.input.pixelPerfectOver = true;
        this.shoes_100021.input.enableDrag();
        this.shoes_100021.events.onInputUp.add(function() {
            if ((game.input.activePointer.x > 0 && game.input.activePointer.x < 230 && game.input.activePointer.y > 620 && game.input.activePointer.y < 784)) {
                // this.shoes_100021.visible =false;
                this.taylorshoe_1.visible = false;
                this.taylorshoe1.visible = true;
                this.shoes_100031.visible = true;
                this.shoes_100051.visible = true;
                this.shoes_100011.visible = true;
                this.shoes_100041.visible = true;
                this.shoes_100021.visible = false;
                this.shoes_100061.visible = true;
                this.taylorshoe1.loadTexture('shoes_10002');
                game.add.tween(this.shoes_100021).to({
                    x: 345,
                    y: 390
                }, 300, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                    game.add.tween(this.popup).to({
                        alpha: 1
                    }, 800, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                        game.add.tween(this.popup).to({
                            alpha: 0
                        }, 800, Phaser.Easing.Quadratic.Out, true, 500).onComplete.add(function() {


                        }, this);
                    }, this);
                }, this);

            } else {

                game.add.tween(this.shoes_100021).to({
                    x: 345,
                    y: 390
                }, 300, Phaser.Easing.Quadratic.Out, true)

            }
        }, this);
        this.c1_group.add(this.shoes_100021);


        this.anchor_031 = game.add.sprite(430, 220, 'anchor_01');
        this.anchor_031.anchor.setTo(0.5);
        this.c1_group.add(this.anchor_031);

        this.dress_12 = game.add.sprite(435, 315, 'taylordress10001');
        this.dress_12.anchor.setTo(0.5);
        this.dress_12.scale.setTo(0.7);
        this.dress_12.inputEnabled = true;
        this.dress_12.input.useHandCursor = true;
        this.dress_12.input.pixelPerfectClick = true;
        this.dress_12.input.pixelPerfectOver = true;
        this.dress_12.input.enableDrag();
        this.dress_12.events.onInputUp.add(function() {
            if ((game.input.activePointer.x > 0 && game.input.activePointer.x < 230 && game.input.activePointer.y > 146 && game.input.activePointer.y < 610)) {
                this.dress_010001.visible = true;
                this.dress_010011.visible = true;
                this.dress_010002.visible = true;
                this.dress_010003.visible = true;
                this.dress_010012.visible = true;
                this.dress_12.visible = false;

                this.taylordress1.visible = true;
                this.taylordress_1.visible = false;
                this.taylordress1.loadTexture('taylordress10001');

                this.dress_010001.inputEnabled = false;
                this.dress_010011.inputEnabled = false;
                this.dress_010002.inputEnabled = false;
                this.dress_010003.inputEnabled = false;
                this.dress_010012.inputEnabled = false;
                this.dress_12.inputEnabled = false;
                game.add.tween(this.dress_12).to({
                    x: 435,
                    y: 315
                }, 300, Phaser.Easing.Quadratic.Out, true);
                game.add.tween(this.new_popup).to({
                    alpha: 1
                }, 1000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                    game.add.tween(this.new_popup).to({
                        alpha: 0
                    }, 1000, Phaser.Easing.Quadratic.Out, true, 500).onComplete.add(function() {
                        this.ch1_i[0] = 1;

                        if (this.ch1_i.indexOf(0) < 0) {
                            this.b_arrow.visible = false;
                            this.n_arrow.visible = false;
                            game.add.tween(this.playbtn.scale).to({
                                x: 1,
                                y: 1
                            }, 800, Phaser.Easing.Quadratic.Out, true);

                        }

                        // Main.magicstars.play();


                    }, this);
                }, this);
                // },this);

            } else {

                game.add.tween(this.dress_12).to({
                    x: 435,
                    y: 315
                }, 300, Phaser.Easing.Quadratic.Out, true)

            }
        }, this);


        this.c1_group.add(this.dress_12);

        this.shoes_100061 = game.add.sprite(435, 390, 'shoes_10006');
        this.shoes_100061.anchor.setTo(0.5);
        this.shoes_100061.scale.setTo(0.45);
        this.shoes_100061.inputEnabled = true;
        this.shoes_100061.input.useHandCursor = true;
        this.shoes_100061.input.pixelPerfectClick = true;
        this.shoes_100061.input.pixelPerfectOver = true;
        this.shoes_100061.input.enableDrag();
        this.shoes_100061.events.onInputUp.add(function() {
            if ((game.input.activePointer.x > 0 && game.input.activePointer.x < 230 && game.input.activePointer.y > 620 && game.input.activePointer.y < 784)) {
                this.shoes_100061.visible = false;
                this.shoes_100031.visible = true;
                this.shoes_100051.visible = true;
                this.shoes_100011.visible = true;
                this.shoes_100041.visible = true;
                this.shoes_100021.visible = true;
                this.taylorshoe_1.visible = false;
                this.taylorshoe1.visible = true;
                this.taylorshoe1.loadTexture('shoes_10006');

                this.shoes_100031.inputEnabled = false;
                this.shoes_100051.inputEnabled = false;
                this.shoes_100011.inputEnabled = false;
                this.shoes_100041.inputEnabled = false;
                this.shoes_100021.inputEnabled = false;
                this.shoes_100061.inputEnabled = false;

                game.add.tween(this.shoes_100061).to({
                    x: 435,
                    y: 390
                }, 300, Phaser.Easing.Quadratic.Out, true);
                game.add.tween(this.new_popup).to({
                    alpha: 1
                }, 1000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                    game.add.tween(this.new_popup).to({
                        alpha: 0
                    }, 1000, Phaser.Easing.Quadratic.Out, true, 500).onComplete.add(function() {
                        this.ch1_i[1] = 1;

                        if (this.ch1_i.indexOf(0) < 0) {
                            this.b_arrow.visible = false;
                            this.n_arrow.visible = false;
                            game.add.tween(this.playbtn.scale).to({
                                x: 1,
                                y: 1
                            }, 800, Phaser.Easing.Quadratic.Out, true);

                        }

                        // Main.magicstars.play();




                    }, this);
                }, this);

                // },this);

            } else {

                game.add.tween(this.shoes_100061).to({
                    x: 435,
                    y: 390
                }, 300, Phaser.Easing.Quadratic.Out, true)

            }
        }, this);
        this.c1_group.add(this.shoes_100061);

        this.c1_group.visible = false;


        this.a1 = game.add.graphics(0, 0);
        this.a1.beginFill(0x000000, 0);
        this.a1.drawRect(0, 0, 504, 800);
        this.a1.inputEnabled = true;

        this.board2 = game.add.sprite(347, 331, 'board2');
        this.board2.anchor.setTo(0.5);
        this.board2.events.onInputDown.add(function() {
            this.arrow1.visible = false;
            this.board2.inputEnabled = false;
            this.board2.frame = 2;
            this.n_arrow.visible = true;
            this.b_arrow.inputEnabled = true;
            this.b_arrow.input.useHandCursor = true;
            this.n_arrow.inputEnabled = true;
            this.n_arrow.input.useHandCursor = true;
            this.rect_05.inputEnabled = false;
            this.a1.visible = false;

        }, this);

        this.popup = game.add.sprite(205, 210, 'popup');
        this.popup.anchor.setTo(0.5);
        this.popup.scale.setTo(0.8);
        this.popup.alpha = 0;


        this.new_popup = game.add.sprite(205, 210, 'new_popup');
        this.new_popup.anchor.setTo(0.5);
        this.new_popup.scale.setTo(0.8);
        this.new_popup.alpha = 0;

        this.ch1_i = [0, 0];





        // this.c_group.add(this.dgroup);
        this.arrowgp = game.add.group();

        var arro2x = [162, 375, 341, 314, 328, 10, 326, 10, 401, 391, 391, 114, 298];
        var arro2y = [354, 411, 25, 44, 179, 90, 249, 170, 83, 226, 80, 511, 329];

        for (i = 1; i <= 20; i++) {
            this['arrow' + i] = game.add.sprite(arro2x[i - 1], arro2y[i - 1], 'arrow');
            this['arrow' + i].anchor.setTo(0.5);
            this['arrow' + i].animations.add('arrow');
            this['arrow' + i].animations.play('arrow', 15, true);
            this['arrow' + i].visible = false;
            if (i == 1) {
                this['arrow' + i].visible = false;
                // this.arrow1.angle=-90;

            }
            if (i == 2) {
                this['arrow' + i].visible = false;

            }
            if (i == 3) {
                this['arrow' + i].visible = false;
                this.arrow3.angle = 90;
            }
            if (i == 4) {
                this['arrow' + i].visible = false;
                // this.arrow4.angle=-90;

            }
            if (i == 5) {
                this['arrow' + i].visible = false;
                this.arrow5.angle = 90;
            }
            if (i == 6) {
                this['arrow' + i].visible = false;
                this.arrow6.angle = -90;
            }
            if (i == 7) {
                this['arrow' + i].visible = false;
                this.arrow7.angle = 90;
            }
            if (i == 8) {
                this['arrow' + i].visible = false;
                this.arrow8.angle = -90;
            }
            if (i == 9) {
                this['arrow' + i].visible = false;

            }
            if (i == 10) {
                this['arrow' + i].visible = false;
                // this.arrow10.angle =-90;
            }
            if (i == 11) {
                this['arrow' + i].visible = false;
                // this.arrow10.angle =-90;
            }
            if (i == 12) {
                this['arrow' + i].visible = false;
                // this.arrow10.angle =-90;
            }
            if (i == 13) {
                this['arrow' + i].visible = false;
                // this.arrow10.angle =-90;
            }
            if (i == 14) {
                this['arrow' + i].visible = false;
                // this.arrow10.angle =-90;
            }
            if (i == 15) {
                this['arrow' + i].visible = false;
                // this.arrow10.angle =-90;
            }
            if (i == 16) {
                this['arrow' + i].visible = false;
                // this.arrow10.angle =-90;
            }
            if (i == 17) {
                this['arrow' + i].visible = false;
                // this.arrow10.angle =-90;
            }
            this.arrowgp.add(this['arrow' + i]);

        }



        this.morebtn = game.add.sprite(65, 740, 'more');
        this.morebtn.anchor.setTo(0.5);
        this.morebtn.scale.setTo(0.9);
        this.morebtn.inputEnabled = true;
        this.morebtn.input.useHandCursor = true;
        this.morebtn.events.onInputUp.add(this.moreLink, this);
        this.morebtn.events.onInputOver.add(this.btnOver, this);
        this.morebtn.events.onInputOut.add(this.btnOut, this);
        // this.levelGroup.add(this.morebtn);


        this.playbtn = game.add.sprite(430, 730, 'correct');
        this.playbtn.anchor.setTo(0.5);
        this.playbtn.scale.setTo(0);
        this.playbtn.inputEnabled = true;
        this.playbtn.input.useHandCursor = true;
        this.playbtn.events.onInputUp.add(this.enterRoom, this);
        this.playbtn.events.onInputOver.add(this.btnOver, this);
        this.playbtn.events.onInputOut.add(this.btnOut, this);
        // this.levelGroup.add(this.playbtn);


        if (Main.shutterOn[0]) {
            this.shutter = game.add.sprite(0, 0, 'download');
            game.add.tween(this.shutter).to({
                y: -850
            }, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                this.arrow1.visible = true;
                this.arrow1.x = 343;
                this.arrow1.y = 242;
                this.board2.inputEnabled = true;
                this.board2.input.useHandCursor = true;


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
    dress_down: function(evt) {

    },
    dress_up: function(evt) {
        if (evt.id == 1) {
            console.log('evt.id==1');
            if ((game.input.activePointer.x > 0 && game.input.activePointer.x < 230 && game.input.activePointer.y > 146 && game.input.activePointer.y < 610)) {

                this.taylordress1.loadTexture('taylordress10003');
                game.add.tween(this.dress_010001).to({
                    x: 272,
                    y: 310
                }, 300, Phaser.Easing.Quadratic.Out, true)
            } else {

                game.add.tween(this.dress_010001).to({
                    x: 272,
                    y: 310
                }, 300, Phaser.Easing.Quadratic.Out, true)

            }
        }

        if (evt.id == 2) {

            console.log('evt.id==2');
            if ((game.input.activePointer.x > 0 && game.input.activePointer.x < 230 && game.input.activePointer.y > 146 && game.input.activePointer.y < 610)) {

                this.taylordress1.loadTexture('taylordress10002');
                game.add.tween(this.dress_010011).to({
                    x: 350,
                    y: 315
                }, 300, Phaser.Easing.Quadratic.Out, true)
            } else {

                game.add.tween(this.dress_010011).to({
                    x: 350,
                    y: 315
                }, 300, Phaser.Easing.Quadratic.Out, true)

            }
        }


    },

    update: function() {

        // console.log(game.input.activePointer.x+'====='+game.input.activePointer.y);      



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
        // YYGSDK.navigate("game","logo");
    },
    moreLink: function() {
        // YYGSDK.navigate("game","morebutton");
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
            MyShowAD('final_screen');
        });

    },

}

//c1111111111111111111

Main.cook1 = function() {}

Main.cook1.prototype = {
    create: function() {

        this.levelGroup = game.add.group();
        this.bb_g = game.add.sprite(0, 0, 'bb_g');
        this.levelGroup.add(this.bb_g);


        this.fridge = game.add.sprite(250, 295.6, 'fridge');
        this.fridge.anchor.setTo(0.5);

        this.fridge_door2 = game.add.sprite(348, 294.6, 'fridge_door2');
        this.fridge_door2.anchor.setTo(0.5);

        this.chimminey = game.add.sprite(53, 126.6, 'chimminey');
        this.chimminey.anchor.setTo(0.5);

        this.cuboard = game.add.sprite(113.6, 426.1, 'cuboard');
        this.cuboard.anchor.setTo(0.5);

        this.side_panel = game.add.sprite(493, 257.6, 'side_panel');
        this.side_panel.anchor.setTo(0.5);



        this.cook1table = game.add.sprite(254.10, 656.65, 'cook1table');
        this.cook1table.anchor.setTo(0.5);


        this.cook1fullbowl = game.add.sprite(244.85, 516.55, 'cook1fullbowl');
        this.cook1fullbowl.anchor.setTo(0.5);

        this.cook1group = game.add.group();

        this.cook1firstbowl = game.add.sprite(314.65, 375.35, 'cook1firstbowl');
        this.cook1firstbowl.anchor.setTo(0.5);
        this.cook1firstbowl.visible = false;

        this.cook1secondbowl = game.add.sprite(314.65, 373, 'cook1secondbowl');
        this.cook1secondbowl.anchor.setTo(0.5);
        this.cook1secondbowl.visible = false;

        this.cook1firstonecopy = game.add.sprite(102.75, 597.45, 'cook1firstonecopy');
        this.cook1firstonecopy.anchor.setTo(0.5);
        this.cook1firstonecopy.scale.setTo(0.6);
        this.cook1firstonecopy.visible = false;





        this.cook1firstone = game.add.sprite(102.75, 597.45, 'cook1firstone');
        this.cook1firstone.anchor.setTo(0.5);
        this.cook1group.add(this.cook1firstone);
        this.cook1firstone.inputEnabled = true;
        this.cook1firstone.input.useHandCursor = true;
        this.cook1firstone.input.enableDrag();
        this.cook1firstone.events.onInputDown.add(function() {
            game.world.bringToTop(this.cook1firstone)
            this.cook1firstone.loadTexture('cook1firstonecopy');

            this.arrow1.visible = false;
            this.arrow2.visible = true;


        }, this);
        this.cook1firstone.events.onInputUp.add(function() {

            if ((game.input.activePointer.x > 143 && game.input.activePointer.x < 345 && game.input.activePointer.y > 300 && game.input.activePointer.y < 519)) {

                this.cook1firstone.visible = false;
                this.cook1firstbowl.visible = true;
                this.arrow2.visible = false;
                this.cook1firstbowl.animations.add('cook1firstbowl');
                this.cook1firstbowl.animations.play('cook1firstbowl', 15, false).onComplete.add(function() {
                    this.cook1firstbowl.visible = false;
                    this.arrow3.visible = true;

                    this.cook1secondone.inputEnabled = true;
                    this.cook1secondone.input.useHandCursor = true;
                    this.cook1secondone.input.enableDrag();

                }, this);

                this.cook1fullbowl.animations.add('cook1fullbowl', [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
                this.cook1fullbowl.animations.play('cook1fullbowl', 25, false).onComplete.add(function() {

                }, this);
            } else {
                this.arrow1.visible = true;
                this.arrow2.visible = false;
                game.add.tween(this.cook1firstone).to({
                    x: 102.75,
                    y: 597.45
                }, 500, Phaser.Easing.Quadratic.Out, true);

            }
            // 
            // },this);
        }, this);


        this.cook1secondonecopy = game.add.sprite(102.75, 597.45, 'cook1secondonecopy');
        this.cook1secondonecopy.anchor.setTo(0.5);
        this.cook1secondonecopy.scale.setTo(0.6);
        this.cook1secondonecopy.visible = false;




        this.cook1secondone = game.add.sprite(400.70, 597.55, 'cook1secondone');
        this.cook1secondone.anchor.setTo(0.5);
        this.cook1group.add(this.cook1secondone);
        // this.cook1secondone.inputEnabled=true;
        //   this.cook1secondone.input.useHandCursor=true;
        //   this.cook1secondone.input.enableDrag();	
        this.cook1secondone.events.onInputDown.add(function() {
            game.world.bringToTop(this.cook1secondone)
            this.cook1secondone.loadTexture('cook1secondonecopy');
            this.arrow3.visible = false;
            this.arrow4.visible = true;
        }, this);
        this.cook1secondone.events.onInputUp.add(function() {
            if ((game.input.activePointer.x > 143 && game.input.activePointer.x < 345 && game.input.activePointer.y > 300 && game.input.activePointer.y < 519)) {
                this.cook1secondone.visible = false;
                this.cook1secondbowl.visible = true;
                this.arrow4.visible = false;
                this.cook1fullbowl.animations.add('cook1fullbowl', [12, 12, 12, 12, 12, 12, 12, 13, 14, 15, 16, 17, 18]);
                this.cook1fullbowl.animations.play('cook1fullbowl', 10, false).onComplete.add(function() {
                    this.cook1secondbowl.visible = false;
                    this.cook1fullbowl.visible = false;
                    this.cookfullbowl.visible = true;
                    game.add.tween(this.cook2group).to({
                        x: 0
                    }, 1000, Phaser.Easing.Quadratic.Out, true, 700).onComplete.add(function() {
                        this.arrow5.visible = true;
                    }, this);
                }, this);

                this.cook1secondbowl.animations.add('cook1secondbowl');
                this.cook1secondbowl.animations.play('cook1secondbowl', 15, false);

            } else {
                this.arrow3.visible = true;
                this.arrow4.visible = false;
                game.add.tween(this.cook1secondone).to({
                    x: 400.70,
                    y: 597.55
                }, 500, Phaser.Easing.Quadratic.Out, true);

            }
        }, this);

        this.cookfullbowl = game.add.sprite(244.85, 516.55, 'cookfullbowl');
        this.cookfullbowl.anchor.setTo(0.5);
        this.cookfullbowl.visible = false;

        this.cook2group = game.add.group();


        // this.cookfullbowl=game.add.sprite(244.85,516.55,'cookfullbowl');
        // this.cookfullbowl.anchor.setTo(0.5);
        // this.cookfullbowl.visible=false;
        // // this.cook2group.add(this.cookfullbowl);

        this.cook2firstbowl = game.add.sprite(300.70, 395.55, 'cook2firstbowl');
        this.cook2firstbowl.anchor.setTo(0.5);
        this.cook2firstbowl.visible = false;
        this.cook2group.add(this.cook2firstbowl);


        this.cook2secondbowl = game.add.sprite(300.70, 405.55, 'cook2secondbowl');
        this.cook2secondbowl.anchor.setTo(0.5);
        this.cook2secondbowl.visible = false;

        this.cook2group.add(this.cook2secondbowl);



        this.cook2thirdbowl = game.add.sprite(300.70, 405.55, 'cook2thirdbowl');
        this.cook2thirdbowl.anchor.setTo(0.5);
        this.cook2thirdbowl.visible = false;

        this.cook2group.add(this.cook2thirdbowl);

        // this.cookfullbowl=game.add.sprite(244.85,516.55,'cookfullbowl');
        // this.cookfullbowl.anchor.setTo(0.5);
        // this.cook2group.add(this.cookfullbowl);

        this.cook2firstonecopy = game.add.sprite(102.75, 597.45, 'cook2firstonecopy');
        this.cook2firstonecopy.anchor.setTo(0.5);
        // this.cook2firstonecopy.scale.setTo(0.6);	
        this.cook2firstonecopy.visible = false;
        // this.cook2group.add(this.cook2firstonecopy);







        this.cook2firstone = game.add.sprite(102.75, 597.45, 'cook2firstone');
        this.cook2firstone.anchor.setTo(0.5);
        this.cook2firstone.scale.setTo(0.6);

        this.cook2group.add(this.cook2firstone);
        this.cook2firstone.inputEnabled = true;
        this.cook2firstone.input.useHandCursor = true;
        this.cook2firstone.input.enableDrag();
        this.cook2firstone.events.onInputDown.add(function() {
            game.world.bringToTop(this.cook2firstone)
            this.cook2firstone.loadTexture('cook2firstonecopy');

            this.arrow5.visible = false;
            this.arrow6.visible = true;

        }, this);
        this.cook2firstone.events.onInputUp.add(function() {

            if ((game.input.activePointer.x > 129 && game.input.activePointer.x < 360 && game.input.activePointer.y > 390 && game.input.activePointer.y < 612)) {

                this.cook2firstone.visible = false;

                this.cook2firstbowl.visible = true;
                this.arrow6.visible = false;

                game.time.events.add(200, function() {
                    this.cookfullbowl.animations.add('cookfullbowl', [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 4, 5, 6, 7]);

                    this.cookfullbowl.animations.play('cookfullbowl', 50, false).onComplete.add(function() {
                        this.cook2firstbowl.visible = false;
                        this.arrow7.visible = true;
                        this.cook2secondone.inputEnabled = true;
                        this.cook2secondone.input.useHandCursor = true;
                        this.cook2secondone.input.enableDrag();
                    }, this);
                }, this);

                game.time.events.add(10, function() {
                    this.cook2firstbowl.animations.add('cook2firstbowl');
                    this.cook2firstbowl.animations.play('cook2firstbowl', 15, false).onComplete.add(function() {}, this);
                }, this);
            } else {
                this.arrow5.visible = true;
                this.arrow6.visible = false;
                game.add.tween(this.cook2firstone).to({
                    x: 102.75,
                    y: 597.45
                }, 500, Phaser.Easing.Quadratic.Out, true);

            }
        }, this);


        this.cook2secondonecopy = game.add.sprite(400.70, 597.55, 'cook2secondonecopy');
        this.cook2secondonecopy.anchor.setTo(0.5);
        // this.cook2secondonecopy.scale.setTo(0.6);	
        this.cook2secondonecopy.visible = false;
        // this.cook2group.add(this.cook2secondonecopy);


        this.cook2secondone = game.add.sprite(400.70, 597.55, 'cook2secondone');
        this.cook2secondone.anchor.setTo(0.5);
        this.cook2secondone.scale.setTo(0.6);
        this.cook2group.add(this.cook2secondone);
        // this.cook2secondone.inputEnabled=true;
        //   this.cook2secondone.input.useHandCursor=true;
        //   this.cook2secondone.input.enableDrag();  
        this.cook2secondone.events.onInputDown.add(function() {
            game.world.bringToTop(this.cook2secondone)
            this.cook2secondone.loadTexture('cook2secondonecopy');

            this.arrow7.visible = false;
            this.arrow8.visible = true;


        }, this);
        this.cook2secondone.events.onInputUp.add(function() {

            if ((game.input.activePointer.x > 129 && game.input.activePointer.x < 360 && game.input.activePointer.y > 390 && game.input.activePointer.y < 612)) {

                this.cook2secondone.visible = false;

                this.cook2secondbowl.visible = true;

                this.arrow8.visible = false;

                // game.time.events.add(1000,function(){
                this.cook2secondbowl.animations.add('cook2secondbowl');

                this.cook2secondbowl.animations.play('cook2secondbowl', 15, false).onComplete.add(function() {

                    // this.cook2secondbowl.visible=false;
                    //   this.arrow9.visible=true;


                    //  this.cook2thirdone.inputEnabled=true;
                    //    this.cook2thirdone.input.useHandCursor=true;
                    //    this.cook2thirdone.input.enableDrag();  

                }, this);

                game.time.events.add(400, function() {

                    this.cookfullbowl.animations.add('cookfullbowl', [9, 9, 9, 9, 10, 11, 12, 13]);

                    this.cookfullbowl.animations.play('cookfullbowl', 15, false).onComplete.add(function() {

                        this.cook2secondbowl.visible = false;
                        this.arrow9.visible = true;


                        this.cook2thirdone.inputEnabled = true;
                        this.cook2thirdone.input.useHandCursor = true;
                        this.cook2thirdone.input.enableDrag();
                    }, this);
                }, this);

                // },this);
            } else {
                this.arrow7.visible = true;
                this.arrow8.visible = false;
                game.add.tween(this.cook2secondone).to({
                    x: 400.70,
                    y: 597.55
                }, 500, Phaser.Easing.Quadratic.Out, true);

            }
        }, this);



        this.cook2thirdonecopy = game.add.sprite(250.70, 597.55, 'cook2thirdonecopy');
        this.cook2thirdonecopy.anchor.setTo(0.5);
        // this.cook2thirdonecopy.scale.setTo(0.6);	
        this.cook2thirdonecopy.visible = false;
        // this.cook2group.add(this.cook2thirdonecopy);


        this.cook2thirdone = game.add.sprite(250.70, 597.55, 'cook2thirdone');
        this.cook2thirdone.anchor.setTo(0.5);
        this.cook2thirdone.scale.setTo(0.6);
        this.cook2group.add(this.cook2thirdone);
        // this.cook2thirdone.inputEnabled=true;
        //   this.cook2thirdone.input.useHandCursor=true;
        //   this.cook2thirdone.input.enableDrag();  
        this.cook2thirdone.events.onInputDown.add(function() {
            game.world.bringToTop(this.cook2thirdone)
            this.cook2thirdone.loadTexture('cook2thirdonecopy');
            this.arrow9.visible = false;
            this.arrow10.visible = true;
        }, this);
        this.cook2thirdone.events.onInputUp.add(function() {
            if ((game.input.activePointer.x > 129 && game.input.activePointer.x < 360 && game.input.activePointer.y > 390 && game.input.activePointer.y < 612)) {

                this.cook2thirdone.visible = false;
                this.cook2thirdbowl.visible = true;
                this.arrow10.visible = false;
                this.cook2thirdbowl.animations.add('cook2thirdbowl');
                this.cook2thirdbowl.animations.play('cook2thirdbowl', 20, false) /*.onComplete.add(function(){         */
                // this.cook2thirdbowl.visible=false;   
                game.time.events.add(300, function() {
                    this.cookfullbowl.animations.add('cookfullbowl', [14, 15, 16, 17, 18, 19, 20]);
                    this.cookfullbowl.animations.play('cookfullbowl', 25, false).onComplete.add(function() {
                        this.cook2thirdbowl.visible = false;

                        // },this);
                        game.add.tween(this.cook3group).to({
                            x: 0
                        }, 1000, Phaser.Easing.Quadratic.Out, true, 700).onComplete.add(function() {
                            this.arrow11.visible = true;
                        }, this);
                        this.cook1secondbowl.visible = false;
                        this.cookfullbowl.visible = false;
                        this.cook3firstbowl.visible = true;
                    }, this);
                }, this);
            } else {
                this.arrow9.visible = true;
                this.arrow10.visible = false;
                game.add.tween(this.cook2thirdone).to({
                    x: 250.70,
                    y: 597.55
                }, 500, Phaser.Easing.Quadratic.Out, true);
            }
        }, this);



        this.cook2group.x = 1000;


        this.cook3firstbowl = game.add.sprite(244.85, 512.55, 'cook3firstbowl');
        this.cook3firstbowl.anchor.setTo(0.5);
        // this.cook3firstbowl.scale.setTo(0.99);


        this.cook3firstbowl.visible = false;


        this.cook3group = game.add.group();

        this.cook3panel = game.add.sprite(353.15, 655.70, 'cook3panel');
        this.cook3panel.anchor.setTo(0.5);
        this.cook3group.add(this.cook3panel);




        this.cook3secondbowl = game.add.sprite(106.60, 589.10, 'cook3secondbowl');
        this.cook3secondbowl.anchor.setTo(0.5);
        this.cook3group.add(this.cook3secondbowl);


        this.c1 = game.add.sprite(100.60, 600.10, 'c1');
        this.c1.anchor.setTo(0.5);
        this.c1.visible = false;

        this.cook3group.add(this.c1);


        this.c2 = game.add.sprite(250, 650, 'c2');
        this.c2.anchor.setTo(0.5);
        this.c2.events.onInputDown.add(function() {
            this.arrow15.visible = false;
            this.arrow1.visible = true;
            this.arrow1.x = 237;
            this.arrow1.y = 363;

        }, this);
        this.c2.events.onInputUp.add(function() {
            if ((game.input.activePointer.x > 129 && game.input.activePointer.x < 360 && game.input.activePointer.y > 390 && game.input.activePointer.y < 612)) {
                this.arrow1.visible = false;
                this.c2.visible = false;
                this.c2ani.visible = true;

                this.c2ani.animations.add('c2ani');
                this.c2ani.animations.play('c2ani', 10, false)

                game.time.events.add(300, function() {
                    this.cook3firstbowl.animations.add('cook3firstbowl');
                    this.cook3firstbowl.animations.play('cook3firstbowl', 10, false).onComplete.add(function() {
                        game.add.tween(this.c2ani).to({
                            alpha: 0
                        }, 500, Phaser.Easing.Quadratic.Out, true, 700).onComplete.add(function() {
                            game.add.tween(this.cook3firstbowl).to({
                                x: -700
                            }, 1000, Phaser.Easing.Quadratic.Out, true, 700);
                            MyShowAD('secondpro');

                        }, this);


                    }, this);
                }, this);
            } else {
                this.arrow15.visible = true;
                this.arrow1.visible = false;
                game.add.tween(this.c2).to({
                    x: 250,
                    y: 650
                }, 500, Phaser.Easing.Quadratic.Out, true);
            }
        }, this);
        this.c2.x = 700;


        this.cook3eggani = game.add.sprite(127.15, 505.70, 'cook3eggani');
        this.cook3eggani.anchor.setTo(0.5);
        this.cook3group.add(this.cook3eggani);
        this.cook3eggani.visible = false;





        this.c2ani = game.add.sprite(256.60, 360, 'c2ani');
        this.c2ani.anchor.setTo(0.5);
        this.c2ani.visible = false;


        this.cook_3egg = game.add.sprite(373.15, 625.70, 'cook3egg');
        this.cook_3egg.anchor.setTo(0.5);
        this.cook3group.add(this.cook_3egg);
        // this.cook_3egg.inputEnabled=true;
        // this.cook_3egg.input.useHandCursor=true;
        // this.cook_3egg.input.pixelPerfectClick=true;
        // this.cook_3egg.input.pixelPerfectOver=true;
        // this.cook_3egg.input.enableDrag();  
        this.cook_3egg.events.onInputDown.add(function() {
            game.world.bringToTop(this.cook_3egg)
            this.arrow13.visible = false;
            this.arrow14.visible = true;
        }, this);
        this.cook_3egg.events.onInputUp.add(function() {
            if ((game.input.activePointer.x > 27 && game.input.activePointer.x < 175 && game.input.activePointer.y > 520 && game.input.activePointer.y < 624)) {
                this.arrow14.visible = false;
                this.cook_3egg.visible = false;
                // this.arrow2.visible=false;      
                this.cook3eggani.visible = true;
                this.cook3eggani.animations.add('cook3eggani');
                this.cook3eggani.animations.play('cook3eggani', 25, false).onComplete.add(function() {
                    this.cook3eggani.visible = false;
                    game.add.tween(this.cook3group).to({
                        x: -500
                    }, 1000, Phaser.Easing.Quadratic.Out, true, 500).onComplete.add(function() {
                        game.add.tween(this.c2).to({
                            x: 250
                        }, 1000, Phaser.Easing.Quadratic.Out, true, 500).onComplete.add(function() {
                            this.arrow15.visible = true;
                            this.arrow15.x = 247;
                            this.arrow15.y = 571;
                            this.c2.inputEnabled = true;
                            this.c2.input.useHandCursor = true;
                            this.c2.input.enableDrag();
                        }, this);
                    }, this);

                }, this);

                this.cook3secondbowl.animations.add('cook3secondbowl', [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 6, /*6,6,6,6,6,7,7,7,7,7,7,7,7,*/ 7, 8 /*,8,8,8,8,8*/ , 9 /*,9,9,9*/ , 9, 10, 11, 12]);

                this.cook3secondbowl.animations.play('cook3secondbowl', 15, false).onComplete.add(function() {



                    this.cook3secondbowl.visible = false;

                }, this);

            } else {

                this.arrow13.visible = true;
                this.arrow14.visible = false;
                game.add.tween(this.cook_3egg).to({
                    x: 373,
                    y: 625
                }, 500, Phaser.Easing.Quadratic.Out, true);

            }

        }, this);





        //       this.c2=game.add.sprite(130.60,583.10,'c2');
        //      this.c2.anchor.setTo(0.5);
        //       this.cook3group.add(this.c2);
        //       this.c2.visible=false;
        //        // this.c2.inputEnabled=true;
        //        //  this.c2.input.useHandCursor=true;
        //        //  this.c2.input.pixelPerfectClick=true;
        //        //  this.c2.input.pixelPerfectOver=true;

        //        //  this.c2.input.enableDrag();  

        //         this.c2.events.onInputDown.add(function(){
        //       game.world.bringToTop(this.c2)
        //       this.arrow15.visible=false;
        //       this.arrow16.visible=true;

        //            },this);

        //           this.c2.events.onInputUp.add(function(){

        // if((game.input.activePointer.x>143 && game.input.activePointer.x< 345 && game.input.activePointer.y> 381 && game.input.activePointer.y< 519)){
        //       this.arrow16.visible=false;      
        //       this.c2.visible=false;
        //       this.c2ani.visible=true;
        //       this.c2ani.animations.add('c2ani');
        //       this.c2ani.animations.play('c2ani',10,false).onComplete.add(function(){         
        //   this.c2ani.visible=false;  

        //     // this.cook3group.x=-500;
        //          // game.add.tween(this.cook3group).to({x:-500}, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){ 

        //          MyShowAD('secondpro');
        //        // },this);
        //          // game.add.tween(this.secondprogroup).to({x:0}, 500, Phaser.Easing.Quadratic.Out, true);


        //       this.cook3firstbowl.animations.add('cook3firstbowl',[0,0,0,1,2,3,4,5,6,7,8]);
        //       this.cook3firstbowl.animations.play('cook3firstbowl',15,false).onComplete.add(function(){  
        //        // this.arrow3.visible=true;

        //      },this);   

        // },this);
        //     }
        //  else
        //  {

        //        this.arrow15.visible=true;
        //       this.arrow16.visible=false;

        //          game.add.tween(this.c2).to({x:130,y:583}, 500, Phaser.Easing.Quadratic.Out, true);

        //  }

        // },this);


        // this.cook3eggani=game.add.sprite(127.15,505.70,'cook3eggani');
        // this.cook3eggani.anchor.setTo(0.5);
        // this.cook3group.add(this.cook3eggani);
        // this.cook3eggani.visible=false;

        this.cook3egg = game.add.sprite(326.55, 620.20, 'cook3egg');
        this.cook3egg.anchor.setTo(0.5);
        this.cook3group.add(this.cook3egg);
        this.cook3egg.inputEnabled = true;
        this.cook3egg.input.useHandCursor = true;
        this.cook3egg.input.pixelPerfectClick = true;
        this.cook3egg.input.pixelPerfectOver = true;
        this.cook3egg.input.enableDrag();
        this.cook3egg.events.onInputDown.add(function() {
            game.world.bringToTop(this.cook3egg)
            this.arrow11.visible = false;
            this.arrow12.visible = true;
        }, this);

        this.cook3egg.events.onInputUp.add(function() {
            if ((game.input.activePointer.x > 27 && game.input.activePointer.x < 175 && game.input.activePointer.y > 520 && game.input.activePointer.y < 624)) {
                this.arrow12.visible = false;
                this.cook3egg.visible = false;
                // this.arrow2.visible=false;      
                this.cook3eggani.visible = true;
                this.cook3eggani.animations.add('cook3eggani');
                this.cook3eggani.animations.play('cook3eggani', 10, false).onComplete.add(function() {

                    this.cook3eggani.visible = false;
                    this.arrow13.visible = true;
                    this.cook_3egg.inputEnabled = true;
                    this.cook_3egg.input.useHandCursor = true;
                    this.cook_3egg.input.pixelPerfectClick = true;
                    this.cook_3egg.input.pixelPerfectOver = true;
                    this.cook_3egg.input.enableDrag();
                }, this);

                this.cook3secondbowl.animations.add('cook3secondbowl', [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, /*1,1,1,1,2,2,2,2,2,2,2,2,*/ 2, 3, 4, 5]);

                this.cook3secondbowl.animations.play('cook3secondbowl', 15, false).onComplete.add(function() {
                    // this.arrow3.visible=true;




                    this.cook_3egg.inputEnabled = true;
                    this.cook_3egg.input.useHandCursor = true;
                    this.cook_3egg.input.pixelPerfectClick = true;
                    this.cook_3egg.input.pixelPerfectOver = true;
                }, this);
            } else {

                this.arrow11.visible = true;
                this.arrow12.visible = false;
                game.add.tween(this.cook3egg).to({
                    x: 326,
                    y: 620
                }, 500, Phaser.Easing.Quadratic.Out, true);

            }

        }, this);


        this.cook3panel2 = game.add.sprite(353.15, 645.70, 'cook3panel2');
        this.cook3panel2.anchor.setTo(0.5);
        this.cook3group.add(this.cook3panel2);

        this.cook3group.x = 900;

        this.arrowgp = game.add.group();
        // c1           
        //   1         2      3        4        5        6        7       8       9      10    11     12    13  14  15    16
        var arro2x = [102.30, 248.30, 400, 248, 105.30, 248, 400, 248.30, 250, 248, 325, 115, 375, 115, 115, 240];
        var arro2y = [460.65, 380, 450, 380.65, 450, 380, 450, 380, 450, 380, 500, 480, 500, 480, 480, 380];

        for (i = 1; i <= 50; i++) {
            this['arrow' + i] = game.add.sprite(arro2x[i - 1], arro2y[i - 1], 'arrow');
            this['arrow' + i].anchor.setTo(0.5);
            this['arrow' + i].scale.setTo(0.9);


            this['arrow' + i].animations.add('arrow');
            this['arrow' + i].animations.play('arrow', 20, true);
            this['arrow' + i].visible = false;
            if (i == 1) {
                this['arrow' + i].visible = true;
            }
            if (i == 2) {
                this['arrow' + i].visible = false;
            }
            if (i == 3) {
                this['arrow' + i].visible = false;
            }
            if (i == 4) {
                this['arrow' + i].visible = false;
            }
            if (i == 5) {
                this['arrow' + i].visible = false;
            }
            if (i == 6) {
                this['arrow' + i].visible = false;
            }
            if (i == 7) {
                this['arrow' + i].visible = false;
            }
            if (i == 8) {
                this['arrow' + i].visible = false;
            }
            if (i == 9) {
                this['arrow' + i].visible = false;
            }
            if (i == 10) {
                this['arrow' + i].visible = false;
            }
            if (i == 11) {
                this['arrow' + i].visible = false;
            }
            if (i == 12) {
                this['arrow' + i].visible = false;
            }
            if (i == 13) {
                this['arrow' + i].visible = false;
            }
            if (i == 14) {
                this['arrow' + i].visible = false;
            }
            if (i == 15) {
                this['arrow' + i].visible = false;
            }
            if (i == 16) {
                this['arrow' + i].visible = false;
            }



            this.arrowgp.add(this['arrow' + i]);
            this.arrowgp.y = 25;

        }





        this.morebtn = game.add.sprite(65, 740, 'more');
        this.morebtn.anchor.setTo(0.5);
        this.morebtn.scale.setTo(0.9);
        this.morebtn.inputEnabled = true;
        this.morebtn.input.useHandCursor = true;
        this.morebtn.events.onInputUp.add(this.moreLink, this);
        this.morebtn.events.onInputOver.add(this.btnOver, this);
        this.morebtn.events.onInputOut.add(this.btnOut, this);
        // this.levelGroup.add(this.morebtn);


        if (Main.shutterOn[0]) {
            this.shutter = game.add.sprite(0, 0, 'download');
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

        // console.log(game.input.activePointer.x+'====='+game.input.activePointer.y);      



    },
    openLink: function() {
        //  YYGSDK.navigate("game","logo");
    },
    moreLink: function() {
        // YYGSDK.navigate("game","morebutton");
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

//seeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee

Main.secondpro = function() {}

Main.secondpro.prototype = {
    create: function() {
        this.levelGroup = game.add.group();
        this.bb_g = game.add.sprite(0, 0, 'bb_g');
        this.levelGroup.add(this.bb_g);


        this.fridge = game.add.sprite(250, 295.6, 'fridge');
        this.fridge.anchor.setTo(0.5);

        this.fridge_door2 = game.add.sprite(348, 294.6, 'fridge_door2');
        this.fridge_door2.anchor.setTo(0.5);

        this.chimminey = game.add.sprite(53, 126.6, 'chimminey');
        this.chimminey.anchor.setTo(0.5);

        this.cuboard = game.add.sprite(113.6, 426.1, 'cuboard');
        this.cuboard.anchor.setTo(0.5);

        this.side_panel = game.add.sprite(493, 257.6, 'side_panel');
        this.side_panel.anchor.setTo(0.5);



        this.cook1table = game.add.sprite(254.10, 656.65, 'cook1table');
        this.cook1table.anchor.setTo(0.5);


        this.secondfullbowl = game.add.sprite(244.85, 516.55, 'secondfullbowl');
        this.secondfullbowl.anchor.setTo(0.5);
        this.secondfullbowl.scale.setTo(0.98);


        this.secondprogroup = game.add.group();
        // this.secondprogroup.x=-800;

        this.secondfirstbowl = game.add.sprite(282.80, 381.10, 'secondfirstbowl');
        this.secondfirstbowl.anchor.setTo(0.5);
        this.secondfirstbowl.visible = false;
        this.secondprogroup.add(this.secondfirstbowl);


        this.secondsecondbowl = game.add.sprite(252.80, 356.10, 'secondsecondbowl');
        this.secondsecondbowl.anchor.setTo(0.5);
        this.secondsecondbowl.visible = false;
        this.secondprogroup.add(this.secondsecondbowl);


        this.first = game.add.sprite(382.80, 612.10, 'first');
        this.first.anchor.setTo(0.5);
        this.first.scale.setTo(1.1);
        this.secondprogroup.add(this.first);
        this.first.inputEnabled = true;
        this.first.input.useHandCursor = true;
        this.first.input.pixelPerfectClick = true;
        this.first.input.pixelPerfectOver = true;
        this.first.input.enableDrag();
        this.first.events.onInputDown.add(function() {
            game.world.bringToTop(this.first)
            this.arrow1.visible = false;
            this.arrow2.visible = true;
        }, this);
        this.first.events.onInputUp.add(function() {
            if ((game.input.activePointer.x > 143 && game.input.activePointer.x < 345 && game.input.activePointer.y > 381 && game.input.activePointer.y < 519)) {
                this.first.visible = false;
                this.arrow2.visible = false;

                this.secondfirstbowl.visible = true;
                this.secondfirstbowl.animations.add('secondfirstbowl');
                this.secondfirstbowl.animations.play('secondfirstbowl', 10, false).onComplete.add(function() {
                    this.secondfirstbowl.visible = false;

                    this.arrow12.visible = true;
                    this.secondhand.inputEnabled = true;
                    this.secondhand.input.useHandCursor = true;
                    this.secondhand.input.pixelPerfectClick = true;
                    this.secondhand.input.pixelPerfectOver = true;
                    this.secondhand.input.enableDrag();

                }, this);

                game.time.events.add(1000, function() {

                    this.secondfullbowl.animations.add('secondfullbowl', [3, 4, 5, 6, 7, 8, 9, 10, 11]);
                    this.secondfullbowl.animations.play('secondfullbowl', 15, false).onComplete.add(function() {
                        // this.arrow3.visible=true;   
                    }, this);
                }, this);
            } else {
                this.arrow1.visible = true;
                this.arrow2.visible = false;
                game.add.tween(this.first).to({
                    x: 382.80,
                    y: 612.10
                }, 500, Phaser.Easing.Quadratic.Out, true);
            }
        }, this);


        this.second_hand = game.add.sprite(255.05, 426.25, 'secondhand');
        this.second_hand.anchor.setTo(0.5);
        this.second_hand.visible = false;
        this.secondprogroup.add(this.second_hand);


        this.secondhand = game.add.sprite(275.05, 652.25, 'secondhand');
        this.secondhand.anchor.setTo(0.5);
        this.secondprogroup.add(this.secondhand);
        // this.secondhand.inputEnabled=true;
        // this.secondhand.input.useHandCursor=true;
        // this.secondhand.input.pixelPerfectClick=true;
        // this.secondhand.input.pixelPerfectOver=true;
        // this.secondhand.input.enableDrag();  
        this.secondhand.events.onInputDown.add(function() {
            game.world.bringToTop(this.secondhand)
            this.arrow12.visible = false;
            this.arrow11.visible = true;
        }, this);
        this.secondhand.events.onInputUp.add(function() {
            if ((game.input.activePointer.x > 143 && game.input.activePointer.x < 345 && game.input.activePointer.y > 381 && game.input.activePointer.y < 519)) {

                this.arrow11.visible = false;

                this.secondhand.visible = false;
                this.second_hand.visible = true;

                this.arrow3.visible = true;

                this.second.inputEnabled = true;
                this.second.input.useHandCursor = true;
                this.second.input.pixelPerfectClick = true;
                this.second.input.pixelPerfectOver = true;
                this.second.input.enableDrag();


            } else {

                this.arrow12.visible = true;
                this.arrow11.visible = false;
                game.add.tween(this.secondhand).to({
                    x: 275.05,
                    y: 652.25
                }, 500, Phaser.Easing.Quadratic.Out, true);
            }
        }, this);




        this.second = game.add.sprite(135.05, 612.25, 'second');
        this.second.anchor.setTo(0.5);
        this.secondprogroup.add(this.second);
        // this.second.inputEnabled=true;
        // this.second.input.useHandCursor=true;
        // this.second.input.pixelPerfectClick=true;
        // this.second.input.pixelPerfectOver=true;
        // this.second.input.enableDrag();  
        this.second.events.onInputDown.add(function() {
            game.world.bringToTop(this.second)
            this.arrow3.visible = false;
            this.arrow4.visible = true;
        }, this);
        this.second.events.onInputUp.add(function() {
            if ((game.input.activePointer.x > 143 && game.input.activePointer.x < 345 && game.input.activePointer.y > 301 && game.input.activePointer.y < 519)) {
                this.second.visible = false;
                this.arrow4.visible = false;


                this.second_hand.visible = false;


                this.secondsecondbowl.visible = true;


                this.secondsecondbowl.animations.add('secondsecondbowl', /*[0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4]*/ );
                this.secondsecondbowl.animations.play('secondsecondbowl', 15, false).onComplete.add(function() {
                    this.secondsecondbowl.visible = false;

                    this.secondfullbowl.visible = false;
                    this.profullbowl.visible = true;


                    game.add.tween(this.watergroup).to({
                        x: 0
                    }, 3000, Phaser.Easing.Quadratic.Out, true, 700).onComplete.add(function() {

                        this.arrow5.visible = true;
                        this.profirst.inputEnabled = true;
                        this.profirst.input.useHandCursor = true;
                        this.profirst.input.pixelPerfectClick = true;
                        this.profirst.input.pixelPerfectOver = true;
                        this.profirst.input.enableDrag();

                    }, this);
                }, this);

                this.secondfullbowl.animations.add('secondfullbowl', [12, 13, 14, 15, 16, 17, 18]);
                this.secondfullbowl.animations.play('secondfullbowl', 15, false).onComplete.add(function() {
                    // this.arrow3.visible=true;   

                }, this);
            }
            // this.secondfullbowl.visible=false;
            // this.cook1fullbowl.visible=false;
            // this.profullbowl.visible=true;


            // game.add.tween(this.watergroup).to({x:0},1000,Phaser.Easing.Quadratic.Out,true,700)
            // this.arrow5.visible=true;
            else {


                this.arrow3.visible = true;
                this.arrow4.visible = false;
                game.add.tween(this.second).to({
                    x: 135.05,
                    y: 612.25
                }, 500, Phaser.Easing.Quadratic.Out, true);
            }
        }, this);

        this.profullbowl = game.add.sprite(244.85, 498.55, 'profullbowl');
        this.profullbowl.anchor.setTo(0.5);
        // this.profullbowl.scale.setTo(0.6);
        this.profullbowl.visible = false;

        this.watergroup = game.add.group();

        this.profirstani = game.add.sprite(282.80, 391.10, 'profirstani');
        this.profirstani.anchor.setTo(0.5);
        this.profirstani.scale.setTo(1.3);
        this.profirstani.visible = false;
        this.watergroup.add(this.profirstani);


        this.prosecondani = game.add.sprite(305.80, 350.10, 'prosecondani');
        this.prosecondani.anchor.setTo(0.5);
        this.prosecondani.visible = false;
        this.watergroup.add(this.prosecondani);


        this.prothirdani = game.add.sprite(217.80, 421.10, 'prothirdani');
        this.prothirdani.anchor.setTo(0.5);
        this.prothirdani.visible = false;
        this.watergroup.add(this.prothirdani);




        this.profirst = game.add.sprite(222.80, 650.10, 'profirst');
        this.profirst.anchor.setTo(0.5);
        this.profirst.scale.setTo(0.6);
        this.watergroup.add(this.profirst);
        // this.profirst.inputEnabled=true;
        // this.profirst.input.useHandCursor=true;
        // this.profirst.input.pixelPerfectClick=true;
        // this.profirst.input.pixelPerfectOver=true;
        // this.profirst.input.enableDrag();  
        this.profirst.events.onInputDown.add(function() {
            game.world.bringToTop(this.profirst)
            this.arrow5.visible = false;
            this.arrow6.visible = true;
        }, this);
        this.profirst.events.onInputUp.add(function() {
            if ((game.input.activePointer.x > 143 && game.input.activePointer.x < 345 && game.input.activePointer.y > 381 && game.input.activePointer.y < 519)) {
                this.arrow6.visible = false;

                this.profirst.visible = false;
                this.profirstani.visible = true;
                this.profirstani.animations.add('profirstani');
                this.profirstani.animations.play('profirstani', 10, false).onComplete.add(function() {
                    this.profirstani.visible = false;
                    this.arrow7.visible = true;

                    this.prosecond.inputEnabled = true;
                    this.prosecond.input.useHandCursor = true;
                    this.prosecond.input.pixelPerfectClick = true;
                    this.prosecond.input.pixelPerfectOver = true;
                    this.prosecond.input.enableDrag();

                }, this);


                this.profullbowl.animations.add('profullbowl', [0, 0, 0, 0, 0, 0, 1, 2, 3, 4, 5, 6, 7]);
                this.profullbowl.animations.play('profullbowl', 15, false).onComplete.add(function() {
                    // this.arrow3.visible=true;   

                }, this);


            } else {

                this.arrow5.visible = true;
                this.arrow6.visible = false;
                game.add.tween(this.profirst).to({
                    x: 222.80,
                    y: 650.10
                }, 500, Phaser.Easing.Quadratic.Out, true);
            }
        }, this);





        this.prosecond = game.add.sprite(405.05, 552.25, 'prosecond');
        this.prosecond.anchor.setTo(0.5);
        this.watergroup.add(this.prosecond);
        // this.prosecond.inputEnabled=true;
        // this.prosecond.input.useHandCursor=true;
        // this.prosecond.input.pixelPerfectClick=true;
        // this.prosecond.input.pixelPerfectOver=true;
        // this.prosecond.input.enableDrag();  
        this.prosecond.events.onInputDown.add(function() {
            game.world.bringToTop(this.prosecond)
            this.arrow7.visible = false;
            this.arrow8.visible = true;
        }, this);
        this.prosecond.events.onInputUp.add(function() {
            if ((game.input.activePointer.x > 143 && game.input.activePointer.x < 345 && game.input.activePointer.y > 381 && game.input.activePointer.y < 519)) {
                this.arrow8.visible = false;

                this.prosecond.visible = false;
                this.prosecondani.visible = true;
                this.prosecondani.animations.add('prosecondani');
                this.prosecondani.animations.play('prosecondani', 10, false).onComplete.add(function() {
                    this.prosecondani.visible = false;
                    this.arrow9.visible = true;
                    this.prothird.inputEnabled = true;
                    this.prothird.input.useHandCursor = true;
                    this.prothird.input.pixelPerfectClick = true;
                    this.prothird.input.pixelPerfectOver = true;
                    this.prothird.input.enableDrag();

                }, this);

                this.profullbowl.animations.add('profullbowl', [8, 8, 8, 8, 8, 8, 9, 9, 9, 9, 9, 10, 11, 12, 13, 14, 15]);
                this.profullbowl.animations.play('profullbowl', 15, false).onComplete.add(function() {
                    //        // this.arrow3.visible=true;   
                }, this);
            } else {

                this.arrow7.visible = true;
                this.arrow8.visible = false;
                game.add.tween(this.prosecond).to({
                    x: 405.05,
                    y: 552.25
                }, 500, Phaser.Easing.Quadratic.Out, true);
            }
        }, this);




        this.prothird = game.add.sprite(105.05, 602.25, 'prothird');
        this.prothird.anchor.setTo(0.5);
        this.watergroup.add(this.prothird);
        // this.prothird.inputEnabled=true;
        // this.prothird.input.useHandCursor=true;
        // this.prothird.input.pixelPerfectClick=true;
        // this.prothird.input.pixelPerfectOver=true;
        // this.prothird.input.enableDrag();  
        this.prothird.events.onInputDown.add(function() {
            game.world.bringToTop(this.prothird)
            this.arrow9.visible = false;
            this.arrow10.visible = true;

        }, this);
        this.prothird.events.onInputUp.add(function() {
            if ((game.input.activePointer.x > 143 && game.input.activePointer.x < 345 && game.input.activePointer.y > 381 && game.input.activePointer.y < 519)) {
                this.arrow10.visible = false;

                this.prothird.visible = false;
                this.prothirdani.visible = true;
                this.prothirdani.animations.add('prothirdani');
                this.prothirdani.animations.play('prothirdani', 10, false).onComplete.add(function() {
                    this.prothirdani.visible = false;

                    game.add.tween(this.profullbowl).to({
                        x: -500
                    }, 1000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {

                        MyShowAD('machine');


                    }, this);




                }, this);

                //       this.profullbowl.animations.add('profullbowl');
                //       this.profullbowl.animations.play('profullbowl',15,false).onComplete.add(function(){
                // //        // this.arrow3.visible=true;   
                //      },this);         
            } else {


                this.arrow9.visible = true;
                this.arrow10.visible = false;
                game.add.tween(this.prothird).to({
                    x: 105.05,
                    y: 602.25
                }, 500, Phaser.Easing.Quadratic.Out, true);
            }
        }, this);

        this.watergroup.x = 800;

        this.secondprogroup.x = 900;
        game.add.tween(this.secondprogroup).to({
            x: 0
        }, 500, Phaser.Easing.Quadratic.Out, true, 500).onComplete.add(function() {
            this.arrow1.visible = true;
        }, this);


        this.arrowgp = game.add.group();
        // c1           
        //   1         2      3        4        5       6       7       8        9      10   11   12    13    14    15    16
        var arro2x = [382.30, 248.30, 130, 248, 210.30, 248, 400, 248.30, 100, 248, 248, 248];
        var arro2y = [500.65, 380, 500, 350.65, 530, 380, 430, 380, 500, 410, 380, 510];

        for (i = 1; i <= 50; i++) {
            this['arrow' + i] = game.add.sprite(arro2x[i - 1], arro2y[i - 1], 'arrow');
            this['arrow' + i].anchor.setTo(0.5);
            this['arrow' + i].scale.setTo(0.9);


            this['arrow' + i].animations.add('arrow');
            this['arrow' + i].animations.play('arrow', 20, true);
            this['arrow' + i].visible = false;
            if (i == 1) {
                this['arrow' + i].visible = false;
            }
            if (i == 2) {
                this['arrow' + i].visible = false;
            }
            if (i == 3) {
                this['arrow' + i].visible = false;
            }
            if (i == 4) {
                this['arrow' + i].visible = false;
            }
            if (i == 5) {
                this['arrow' + i].visible = false;
            }
            if (i == 6) {
                this['arrow' + i].visible = false;
            }
            if (i == 7) {
                this['arrow' + i].visible = false;
            }
            if (i == 8) {
                this['arrow' + i].visible = false;
            }
            if (i == 9) {
                this['arrow' + i].visible = false;
            }
            if (i == 10) {
                this['arrow' + i].visible = false;
            }
            if (i == 11) {
                this['arrow' + i].visible = false;
            }
            if (i == 12) {
                this['arrow' + i].visible = false;
            }

            this.arrowgp.add(this['arrow' + i]);

        }





        this.morebtn = game.add.sprite(65, 740, 'more');
        this.morebtn.anchor.setTo(0.5);
        this.morebtn.scale.setTo(0.9);
        this.morebtn.inputEnabled = true;
        this.morebtn.input.useHandCursor = true;
        this.morebtn.events.onInputUp.add(this.moreLink, this);
        this.morebtn.events.onInputOver.add(this.btnOver, this);
        this.morebtn.events.onInputOut.add(this.btnOut, this);
        // this.levelGroup.add(this.morebtn);






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

        //console.log(game.input.activePointer.x+'====='+game.input.activePointer.y);      



    },
    openLink: function() {
        // YYGSDK.navigate("game","logo");
    },
    moreLink: function() {
        // YYGSDK.navigate("game","morebutton");
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
//mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm

Main.machine = function() {}

Main.machine.prototype = {
    create: function() {
        this.levelGroup = game.add.group();
        this.bb_g = game.add.sprite(0, 0, 'bb_g');
        this.levelGroup.add(this.bb_g);


        this.fridge = game.add.sprite(250, 295.6, 'fridge');
        this.fridge.anchor.setTo(0.5);

        this.fridge_door2 = game.add.sprite(348, 294.6, 'fridge_door2');
        this.fridge_door2.anchor.setTo(0.5);

        this.chimminey = game.add.sprite(53, 126.6, 'chimminey');
        this.chimminey.anchor.setTo(0.5);

        this.cuboard = game.add.sprite(113.6, 426.1, 'cuboard');
        this.cuboard.anchor.setTo(0.5);

        this.side_panel = game.add.sprite(493, 257.6, 'side_panel');
        this.side_panel.anchor.setTo(0.5);


        this.cook1table = game.add.sprite(254.10, 656.65, 'cook1table');
        this.cook1table.anchor.setTo(0.5);


        // this.fullmachineani=game.add.sprite(200.85,416.55,'fullmachineani');
        // this.fullmachineani.anchor.setTo(0.5);
        // this.fullmachineani.scale.setTo(0.7);

        this.machinegroup = game.add.group();


        this.fullmachineani = game.add.sprite(200.85, 416.55, 'fullmachineani');
        this.fullmachineani.anchor.setTo(0.5);
        this.machinegroup.add(this.fullmachineani);

        this.fullmachineani.scale.setTo(0.7);





        this.macine1 = game.add.sprite(405.85, 516.55, 'macine1');
        this.macine1.anchor.setTo(0.5);
        this.machinegroup.add(this.macine1);
        this.macine1.inputEnabled = true;
        this.macine1.input.useHandCursor = true;
        this.macine1.input.pixelPerfectClick = true;
        this.macine1.input.pixelPerfectOver = true;
        this.macine1.input.enableDrag();
        this.macine1.events.onInputDown.add(function() {
            game.world.bringToTop(this.macine1)
            this.arrow1.visible = false;
            this.arrow2.visible = true;
        }, this);
        this.macine1.events.onInputUp.add(function() {
            if ((game.input.activePointer.x > 143 && game.input.activePointer.x < 345 && game.input.activePointer.y > 381 && game.input.activePointer.y < 519)) {
                this.arrow2.visible = false;

                this.macine1.visible = false;


                this.fullmachineani.animations.add('fullmachineani');
                this.fullmachineani.animations.play('fullmachineani', 10, false).onComplete.add(function() {
                    this.fullmachineani.visible = true;
                    game.add.tween(this.fullmachineani).to({
                        x: -400
                    }, 1500, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {


                        MyShowAD('fire');
                    }, this);

                }, this);

            } else {
                this.arrow1.visible = true;
                this.arrow2.visible = false;
                game.add.tween(this.macine1).to({
                    x: 405.85,
                    y: 516.55
                }, 500, Phaser.Easing.Quadratic.Out, true);
            }
        }, this);



        // this.fullmachineani=game.add.sprite(200.85,416.55,'fullmachineani');
        // this.fullmachineani.anchor.setTo(0.5);
        // this.machinegroup.add(this.fullmachineani);

        // this.fullmachineani.scale.setTo(0.7);


        this.machinegroup.x = 900;

        game.add.tween(this.machinegroup).to({
            x: 0
        }, 1000, Phaser.Easing.Quadratic.Out, true, 500).onComplete.add(function() {
            this.arrow1.visible = true;

        }, this);

        this.arrowgp = game.add.group();

        var arro2x = [400, 192, 438, 192, 414, 410, 710];
        var arro2y = [375, 406, 439, 486, 527, 130, 440];

        for (i = 1; i <= 6; i++) {
            this['arrow' + i] = game.add.sprite(arro2x[i - 1], arro2y[i - 1], 'arrow');
            this['arrow' + i].anchor.setTo(0.5);
            this['arrow' + i].animations.add('arrow');
            this['arrow' + i].animations.play('arrow', 15, true);
            this['arrow' + i].visible = false;
            if (i == 1) {
                this['arrow' + i].visible = false;
            }
            if (i == 2) {
                this['arrow' + i].visible = false;
            }
            if (i == 3) {
                this['arrow' + i].visible = false;
            }
            if (i == 4) {
                this['arrow' + i].visible = false;
            }
            if (i == 5) {
                this['arrow' + i].visible = false;
            }
            if (i == 6) {
                this['arrow' + i].visible = false;
            }
            this.arrowgp.add(this['arrow' + i]);

        }


        this.morebtn = game.add.sprite(65, 740, 'more');
        this.morebtn.anchor.setTo(0.5);
        this.morebtn.scale.setTo(0.9);
        this.morebtn.inputEnabled = true;
        this.morebtn.input.useHandCursor = true;
        this.morebtn.events.onInputUp.add(this.moreLink, this);
        this.morebtn.events.onInputOver.add(this.btnOver, this);
        this.morebtn.events.onInputOut.add(this.btnOut, this);
        // this.levelGroup.add(this.morebtn);

        // this.playbtn = game.add.sprite(430,730,'correct');
        // this.playbtn.anchor.setTo(0.5);
        // this.playbtn.inputEnabled = true;
        // this.playbtn.input.useHandCursor = true;
        // // this.playbtn.events.onInputUp.add(this.enterRoom, this);
        // this.playbtn.events.onInputOver.add(this.btnOver, this);
        // this.playbtn.events.onInputOut.add(this.btnOut, this);
        // // this.levelGroup.add(this.playbtn);



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
        // YYGSDK.navigate("game","logo");
    },
    moreLink: function() {
        //  YYGSDK.navigate("game","morebutton");
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

Main.fire = function() {}

Main.fire.prototype = {
    create: function() {
        this.levelGroup = game.add.group();
        this.bb_g = game.add.sprite(0, 0, 'bb_g');
        this.levelGroup.add(this.bb_g);


        this.fridge = game.add.sprite(250, 295.6, 'fridge');
        this.fridge.anchor.setTo(0.5);

        this.fridge_door2 = game.add.sprite(348, 294.6, 'fridge_door2');
        this.fridge_door2.anchor.setTo(0.5);

        this.chimminey = game.add.sprite(53, 126.6, 'chimminey');
        this.chimminey.anchor.setTo(0.5);

        this.cuboard = game.add.sprite(113.6, 426.1, 'cuboard');
        this.cuboard.anchor.setTo(0.5);

        this.side_panel = game.add.sprite(493, 257.6, 'side_panel');
        this.side_panel.anchor.setTo(0.5);

        this.cook1table = game.add.sprite(254.10, 656.65, 'cook1table');
        this.cook1table.anchor.setTo(0.5);


        // this.fullbox=game.add.sprite(224.10,506.65,'fullbox');
        // this.fullbox.anchor.setTo(0.5);


        // this.firstone=game.add.sprite(224.10,626.65,'firstone');
        // this.firstone.anchor.setTo(0.5);


        this.firegroup = game.add.group();


        this.firefullcup_count = 0;


        this.fullbox = game.add.sprite(246.70, 507.85, 'fullbox');
        this.fullbox.anchor.setTo(0.5);
        this.fullbox.scale.setTo(1.0);
        this.firegroup.add(this.fullbox);


        // this.levelGroup.add(this.fullbox);


        this.fullbox.inputEnabled = true;
        this.fullbox.input.useHandCursor = true;
        // this.fullbox.input.enableDrag();	
        this.fullbox.events.onInputDown.add(function() {
            this.firefullcup_count++
                this.fullbox.inputEnabled = false;
            if (this.firefullcup_count == 1) {
                this.fullbox.frame = 1;

            }


            this.arrow1.visible = false;
            this.arrow2.visible = true;
            this.firstone.inputEnabled = true;
            this.firstone.input.useHandCursor = true;
            this.firstone.input.enableDrag();



            // game.world.bringToTop(this.fullbox)

        }, this);



        this.firecup1_count = 0;
        this.firstone = game.add.sprite(251.95, 622.60, 'firstone');
        this.firstone.anchor.setTo(0.5);
        // this.firstone.scale.setTo(0.5);
        this.firegroup.add(this.firstone);



        this.firsttwo = game.add.sprite(241.95, 520, 'firsttwo');
        this.firsttwo.anchor.setTo(0.5);
        this.firsttwo.scale.setTo(0.6);
        this.firsttwo.visible = false;
        this.firegroup.add(this.firsttwo);


        // this.levelGroup.add(this.firecup1);
        // this.firecup1.inputEnabled=true;
        // this.firecup1.input.useHandCursor=true;
        // this.firecup1.input.enableDrag();	
        // this.firecup1.events.onInputDown.add(function(){

        this.firstone.events.onInputDown.add(function() {

            this.arrow2.visible = false;
            this.arrow3.visible = true;


            // },this);


            this.firstone.events.onInputUp.add(function() {

                if ((game.input.activePointer.x > 78 && game.input.activePointer.x < 435 && game.input.activePointer.y > 418 && game.input.activePointer.y < 649)) {

                    this.firstone.visible = false;
                    this.arrow3.visible = false;


                    this.firecup1_count++

                        this.firstone.inputEnabled = false;
                    this.firstone.visible = false;

                    if (this.firecup1_count == 1) {
                        this.fullbox.frame = 2;

                    }


                    if (this.firecup1_count == 1) {
                        this.fullbox.frame = 3;

                    }

                    game.add.tween(this.t_timer).to({
                        x: 80
                    }, 1000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {



                        this.t_timer.animations.add('t_timer');

                        this.t_timer.animations.play('t_timer', 8, false).onComplete.add(function() {

                            game.add.tween(this.t_timer).to({
                                x: -100
                            }, 1000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {

                                this.fullbox.inputEnabled = false;
                                // if( this.firecup1_count==1)
                                // {
                                // this.fullbox.frame=2;

                                // }
                                this.fullbox.frame = 4;

                                // this.fullbox.inputEnabled=false;



                                this.fullbox.inputEnabled = false;


                                if (this.firecup1_count == 1) {
                                    this.fullbox.frame = 1;


                                }

                                this.fullbox.frame = 1;


                                this.firsttwo.visible = true;

                                game.add.tween(this.firsttwo.scale).to({
                                    x: 1,
                                    y: 1
                                }, 700, Phaser.Easing.Quadratic.Out, true, 1500)
                                game.add.tween(this.firsttwo).to({
                                    x: 251.95,
                                    y: 652
                                }, 700, Phaser.Easing.Quadratic.Out, true, 1500).onComplete.add(function() {

                                    // game.add.tween(this.playbtn.scale).to({x:1,y:1},400,Phaser.Easing.Bounce.Out,true,1000);

                                    game.add.tween(this.fullbox).to({
                                        x: -500
                                    }, 2000, Phaser.Easing.Quadratic.Out, true, 300).onComplete.add(function() {
                                        game.add.tween(this.firsttwo).to({
                                            x: 251.95,
                                            y: 552
                                        }, 2000, Phaser.Easing.Quadratic.Out, true, 300).onComplete.add(function() {
                                            game.add.tween(this.playbtn.scale).to({
                                                x: 0.9,
                                                y: 0.9
                                            }, 1000, Phaser.Easing.Quadratic.Out, true, 1000);

                                        }, this);

                                    }, this);

                                }, this);

                                this.t_timer.visible = false;

                            }, this);
                        }, this);
                    }, this);

                } else {

                    this.arrow2.visible = true;
                    this.arrow3.visible = false;

                    game.add.tween(this.firstone).to({
                        x: 251,
                        y: 622
                    }, 500, Phaser.Easing.Quadratic.Out, true);


                }

            }, this);

        }, this);

        this.t_timer = game.add.sprite(10, 350, 't_timer');
        this.t_timer.anchor.setTo(0.5);
        this.t_timer.scale.setTo(0.8);

        // this.levelGroup.add(this.t_timer);

        this.t_timer.x = -100;

        this.firegroup.x = 1000;

        // this['arrow'+i].visible=true;

        game.add.tween(this.firegroup).to({
            x: 0
        }, 1000, Phaser.Easing.Quadratic.Out, true, 500).onComplete.add(function() {

            this.arrow1.visible = true;



        }, this);


        this.arrowgp = game.add.group();

        var arro2x = [250, 252, 245, 318, 414, 410, 710];
        var arro2y = [405, 500, 405, 538, 527, 130, 440];

        for (i = 1; i <= 60; i++) {
            this['arrow' + i] = game.add.sprite(arro2x[i - 1], arro2y[i - 1], 'arrow');
            this['arrow' + i].anchor.setTo(0.5);
            this['arrow' + i].animations.add('arrow');
            this['arrow' + i].animations.play('arrow', 15, true);
            this['arrow' + i].visible = false;
            if (i == 1) {
                this['arrow' + i].visible = false;
            }
            if (i == 2) {
                this['arrow' + i].visible = false;
            }
            if (i == 3) {
                this['arrow' + i].visible = false;
            }
            if (i == 4) {
                this['arrow' + i].visible = false;
            }
            if (i == 5) {
                this['arrow' + i].visible = false;
            }
            if (i == 6) {
                this['arrow' + i].visible = false;
            }
            this.arrowgp.add(this['arrow' + i]);

        }


        this.morebtn = game.add.sprite(65, 740, 'more');
        this.morebtn.anchor.setTo(0.5);
        this.morebtn.scale.setTo(0.9);
        this.morebtn.inputEnabled = true;
        this.morebtn.input.useHandCursor = true;
        this.morebtn.events.onInputUp.add(this.moreLink, this);
        this.morebtn.events.onInputOver.add(this.btnOver, this);
        this.morebtn.events.onInputOut.add(this.btnOut, this);
        // this.levelGroup.add(this.morebtn);

        this.playbtn = game.add.sprite(430, 730, 'correct');
        this.playbtn.anchor.setTo(0.5);
        this.playbtn.scale.setTo(0);
        this.playbtn.inputEnabled = true;
        this.playbtn.input.useHandCursor = true;
        this.playbtn.events.onInputUp.add(this.enterRoom, this);
        this.playbtn.events.onInputOver.add(this.btnOver, this);
        this.playbtn.events.onInputOut.add(this.btnOut, this);
        // this.levelGroup.add(this.playbtn);



        if (Main.shutterOn[0]) {
            this.shutter = game.add.sprite(0, -850, 'download');
            game.add.tween(this.shutter).to({
                y: -850
            }, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {}, this);
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
        // YYGSDK.navigate("game","logo");
    },
    moreLink: function() {
        // YYGSDK.navigate("game","morebutton");
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
            MyShowAD('cake');
        });

    },
}
//shhhhhhhhhhhhh

Main.shopping = function() {}

Main.shopping.prototype = {
    create: function() {
        this.levelGroup = game.add.group();
        this.sh_bg = game.add.sprite(0, 0, 'sh_bg');
        this.levelGroup.add(this.sh_bg);

        this.sh_grp3 = game.add.group();
        this.sh_grp2 = game.add.group();
        this.sh_grp1 = game.add.group();

        this.sh_panel3 = game.add.sprite(471.25, 409.8, 'sh_panel3');
        this.sh_panel3.anchor.setTo(0.5);
        this.sh_grp1.add(this.sh_panel3);

        this.sh_panel = game.add.sprite(33.25, 414.9, 'sh_panel');
        this.sh_panel.anchor.setTo(0.5);
        this.sh_grp1.add(this.sh_panel);

        this.bottle_g1 = game.add.sprite(45, 510, 'bottle_g1');
        this.bottle_g1.anchor.setTo(0.5);
        this.sh_grp1.add(this.bottle_g1);

        this.ptato_g1 = game.add.sprite(50, 380, 'ptato_g1');
        this.ptato_g1.anchor.setTo(0.5);
        this.sh_grp1.add(this.ptato_g1);


        this.sh_1_2 = game.add.sprite(430, 250, 'sh_1_2');
        this.sh_1_2.anchor.setTo(0.5);
        this.sh_1_2.events.onInputDown.add(function() {
            this.sh_1_2.inputEnabled = false;

            this.sh_2.visible = true;
            game.add.tween(this.sh_2).to({
                x: 270,
                y: 509
            }, 1000, Phaser.Easing.Quadratic.Out, true, 300).onComplete.add(function() {
                game.add.tween(this.sh_pop0001).to({
                    alpha: 0
                }, 1000, Phaser.Easing.Quadratic.Out, true, 300).onComplete.add(function() {
                    this.sh_pop0001.loadTexture('sh_pop0005')
                    game.add.tween(this.sh_pop0001).to({
                        alpha: 1
                    }, 1000, Phaser.Easing.Quadratic.Out, true, 200).onComplete.add(function() {
                        this.sh_1_13.inputEnabled = true;
                        this.sh_1_13.input.useHandCursor = true;
                    }, this);
                }, this);
            }, this);
        }, this);

        this.sh_grp1.add(this.sh_1_2);

        this.sh_1_4 = game.add.sprite(443.3, 375, 'sh_1_4');
        this.sh_1_4.anchor.setTo(0.5);

        this.sh_1_4.events.onInputDown.add(function() {
            this.sh_1_4.inputEnabled = false;

            this.sh_10.visible = true;
            game.add.tween(this.sh_10).to({
                x: 280,
                y: 510
            }, 1000, Phaser.Easing.Quadratic.Out, true, 300).onComplete.add(function() {
                game.add.tween(this.sh_pop0001).to({
                    alpha: 0
                }, 1000, Phaser.Easing.Quadratic.Out, true, 300).onComplete.add(function() {
                    this.sh_pop0001.loadTexture('sh_pop0009')
                    game.add.tween(this.sh_pop0001).to({
                        alpha: 1
                    }, 1000, Phaser.Easing.Quadratic.Out, true, 200).onComplete.add(function() {
                        this.sh_1_1.inputEnabled = true;
                        this.sh_1_1.input.useHandCursor = true;
                    }, this);
                }, this);
            }, this);
        }, this);
        this.sh_grp1.add(this.sh_1_4);


        this.sh_1_3 = game.add.sprite(440, 480, 'sh_1_3');
        this.sh_1_3.anchor.setTo(0.5);

        this.sh_1_3.events.onInputDown.add(function() {
            this.sh_1_3.inputEnabled = false;

            this.sh_6.visible = true;
            game.add.tween(this.sh_6).to({
                x: 230,
                y: 510
            }, 1000, Phaser.Easing.Quadratic.Out, true, 300).onComplete.add(function() {
                game.add.tween(this.sh_pop0001).to({
                    alpha: 0
                }, 1000, Phaser.Easing.Quadratic.Out, true, 300).onComplete.add(function() {
                    this.sh_pop0001.loadTexture('sh_pop0007')
                    game.add.tween(this.sh_pop0001).to({
                        alpha: 1
                    }, 1000, Phaser.Easing.Quadratic.Out, true, 200).onComplete.add(function() {
                        this.sh_1_4.inputEnabled = true;
                        this.sh_1_4.input.useHandCursor = true;
                    }, this);
                }, this);
            }, this);
        }, this);
        this.sh_grp1.add(this.sh_1_3);



        this.sh_1_1 = game.add.sprite(63.7, 258.65, 'sh_1_1');
        this.sh_1_1.anchor.setTo(0.5);

        this.sh_1_1.events.onInputDown.add(function() {
            this.sh_1_1.inputEnabled = false;

            this.sh_1.visible = true;
            game.add.tween(this.sh_1).to({
                x: 290,
                y: 510
            }, 1000, Phaser.Easing.Quadratic.Out, true, 300).onComplete.add(function() {
                game.add.tween(this.sh_pop0001).to({
                    alpha: 0
                }, 1000, Phaser.Easing.Quadratic.Out, true, 300).onComplete.add(function() {
                    this.sh_pop0001.loadTexture('sh_pop0004')
                    game.add.tween(this.sh_pop0001).to({
                        alpha: 1
                    }, 1000, Phaser.Easing.Quadratic.Out, true, 200).onComplete.add(function() {
                        this.sh_1_2.inputEnabled = true;
                        this.sh_1_2.input.useHandCursor = true;
                    }, this);
                    //          game.add.tween(this.playbtn.scale).to({x:0.75,y:0.75},1000,Phaser.Easing.Quadratic.Out,true,1000);
                    // game.add.tween(this.btn2.scale).to({x:0,y:0},100,Phaser.Easing.Quadratic.Out,true,200);
                    // game.add.tween(this.btn1.scale).to({x:0,y:0},100,Phaser.Easing.Quadratic.Out,true,200);
                }, this);
            }, this);
        }, this);


        this.sh_grp1.add(this.sh_1_1);

        this.sh_panel2 = game.add.sprite(500, 409.45, 'sh_panel2');
        this.sh_panel2.anchor.setTo(0.5);
        this.sh_grp1.add(this.sh_panel2);

        this.sh_panel2_1 = game.add.sprite(-10, 408.5, 'sh_panel2');
        this.sh_panel2_1.anchor.setTo(0.5);
        this.sh_grp1.add(this.sh_panel2_1);


        // this.sh_grp1.visible =false;



        this.sh_panel3 = game.add.sprite(471.25, 409.8, 'sh_panel3');
        this.sh_panel3.anchor.setTo(0.5);
        this.sh_grp2.add(this.sh_panel3);

        this.sh_panel = game.add.sprite(33.25, 414.9, 'sh_panel');
        this.sh_panel.anchor.setTo(0.5);
        this.sh_grp2.add(this.sh_panel);

        this.milk_1_g1 = game.add.sprite(435, 370, 'milk_1_g1');
        this.milk_1_g1.anchor.setTo(0.5);
        this.sh_grp2.add(this.milk_1_g1);

        this.plum_g1 = game.add.sprite(450.15, 250, 'plum_g1');
        this.plum_g1.anchor.setTo(0.5);
        this.sh_grp2.add(this.plum_g1);

        this.coco_bottle = game.add.sprite(440, 480.95, 'coco_bottle');
        this.coco_bottle.anchor.setTo(0.5);
        this.sh_grp2.add(this.coco_bottle);


        this.sh_1_6 = game.add.sprite(75, 500, 'sh_1_6');
        this.sh_1_6.anchor.setTo(0.5);

        this.sh_1_6.events.onInputDown.add(function() {
            this.sh_1_6.inputEnabled = false;
            this.sh_12.visible = true;
            game.add.tween(this.sh_12).to({
                x: 240,
                y: 530
            }, 1000, Phaser.Easing.Quadratic.Out, true, 300).onComplete.add(function() {
                game.add.tween(this.sh_pop0001).to({
                    alpha: 0
                }, 1000, Phaser.Easing.Quadratic.Out, true, 300).onComplete.add(function() {
                    this.sh_pop0001.loadTexture('sh_pop0006');
                    game.add.tween(this.sh_pop0001).to({
                        alpha: 1
                    }, 1000, Phaser.Easing.Quadratic.Out, true, 200).onComplete.add(function() {
                        this.sh_1_3.inputEnabled = true;
                        this.sh_1_3.input.useHandCursor = true;
                    }, this);
                }, this);
            }, this);

        }, this);
        this.sh_grp2.add(this.sh_1_6);



        this.sh_1_10 = game.add.sprite(60, 380, 'sh_1_10');
        this.sh_1_10.anchor.setTo(0.5);

        this.sh_1_10.events.onInputDown.add(function() {
            this.sh_1_10.inputEnabled = false;
            this.sh_16.visible = true;
            game.add.tween(this.sh_16).to({
                x: 280,
                y: 530
            }, 1000, Phaser.Easing.Quadratic.Out, true, 300).onComplete.add(function() {
                game.add.tween(this.sh_pop0001).to({
                    alpha: 0
                }, 1000, Phaser.Easing.Quadratic.Out, true, 300).onComplete.add(function() {
                    this.sh_pop0001.loadTexture('sh_pop0003')
                    game.add.tween(this.sh_pop0001).to({
                        alpha: 1
                    }, 1000, Phaser.Easing.Quadratic.Out, true, 300).onComplete.add(function() {
                        this.sh_1_6.inputEnabled = true;
                        this.sh_1_6.input.useHandCursor = true;

                    }, this);
                }, this);
            }, this);
        }, this);
        this.sh_grp2.add(this.sh_1_10);

        this.sh_14_drag = false;

        this.sh_1_12 = game.add.sprite(65, 252.05, 'sh_1_12');
        this.sh_1_12.anchor.setTo(0.5);
        this.sh_1_12.inputEnabled = true;
        this.sh_1_12.events.onInputDown.add(function() {
            this.sh_1_12.inputEnabled = false;
            this.sh_17.visible = true;
            game.add.tween(this.sh_17).to({
                x: 210,
                y: 500
            }, 1000, Phaser.Easing.Quadratic.Out, true, 300).onComplete.add(function() {
                game.add.tween(this.sh_pop0001).to({
                    alpha: 0
                }, 1000, Phaser.Easing.Quadratic.Out, true, 300).onComplete.add(function() {
                    this.sh_pop0001.loadTexture('sh_pop0008')
                    game.add.tween(this.sh_pop0001).to({
                        alpha: 1
                    }, 1000, Phaser.Easing.Quadratic.Out, true, 200).onComplete.add(function() {
                        this.sh_1_10.inputEnabled = true;
                        this.sh_1_10.input.useHandCursor = true;
                    }, this);
                }, this);
            }, this);
        }, this);





        this.sh_grp2.add(this.sh_1_12);



        this.sh_panel2 = game.add.sprite(500, 409.45, 'sh_panel2');
        this.sh_panel2.anchor.setTo(0.5);
        this.sh_grp2.add(this.sh_panel2);

        this.sh_panel2_1 = game.add.sprite(-10, 408.5, 'sh_panel2');
        this.sh_panel2_1.anchor.setTo(0.5);
        this.sh_grp2.add(this.sh_panel2_1);



        this.sh_panel3 = game.add.sprite(471.25, 409.8, 'sh_panel3');
        this.sh_panel3.anchor.setTo(0.5);
        this.sh_grp3.add(this.sh_panel3);

        this.sh_panel = game.add.sprite(33.25, 414.9, 'sh_panel');
        this.sh_panel.anchor.setTo(0.5);
        this.sh_grp3.add(this.sh_panel);

        this.cho_g1 = game.add.sprite(440, 260, 'cho_g1');
        this.cho_g1.anchor.setTo(0.5);
        this.sh_grp3.add(this.cho_g1);

        this.sh_1_7 = game.add.sprite(65, 485, 'sh_1_7');
        this.sh_1_7.anchor.setTo(0.5);
        this.sh_grp3.add(this.sh_1_7);


        this.fl_g = game.add.sprite(50.2, 265, 'fl_g');
        this.fl_g.anchor.setTo(0.5);
        // this.fl_g.inputEnabled = true;
        // this.fl_g.input.useHandCursor = true;
        // this.fl_g.events.onInputDown.add(function(){
        // this.fl_g.inputEnabled = false;

        //      this.sh_17.visible = true;
        //  game.add.tween(this.sh_17).to({x:210,y:500},1000,Phaser.Easing.Quadratic.Out,true,300).onComplete.add(function(){
        //  game.add.tween(this.sh_pop0001).to({alpha:0},1000,Phaser.Easing.Quadratic.Out,true,300).onComplete.add(function(){
        //       this.sh_pop0001.loadTexture('sh_pop0002')
        //  game.add.tween(this.sh_pop0001).to({alpha:1},1000,Phaser.Easing.Quadratic.Out,true,200).onComplete.add(function(){
        //  this.sh_1_16.inputEnabled = true;
        //  this.sh_1_16.input.useHandCursor = true;
        //  },this);
        //  },this);
        //  },this);
        //  },this);
        this.sh_grp3.add(this.fl_g);

        this.sh_1_16 = game.add.sprite(442.4, 500, 'sh_1_16');
        this.sh_1_16.anchor.setTo(0.5);

        this.sh_1_16.events.onInputDown.add(function() {
            this.sh_1_16.inputEnabled = false;

            this.sh_20.visible = true;
            game.add.tween(this.sh_20).to({
                x: 210,
                y: 530
            }, 1000, Phaser.Easing.Quadratic.Out, true, 300).onComplete.add(function() {
                game.add.tween(this.sh_pop0001).to({
                    alpha: 0
                }, 1000, Phaser.Easing.Quadratic.Out, true, 300).onComplete.add(function() {
                    game.add.tween(this.playbtn.scale).to({
                        x: 0.75,
                        y: 0.75
                    }, 1000, Phaser.Easing.Quadratic.Out, true, 1000);
                    game.add.tween(this.btn2.scale).to({
                        x: 0,
                        y: 0
                    }, 1000, Phaser.Easing.Quadratic.Out, true, 200);
                    game.add.tween(this.btn1.scale).to({
                        x: 0,
                        y: 0
                    }, 1000, Phaser.Easing.Quadratic.Out, true, 200);
                }, this);
            }, this);


        }, this);
        this.sh_grp3.add(this.sh_1_16);



        this.sh_1_13 = game.add.sprite(440, 390, 'sh_1_13');
        this.sh_1_13.anchor.setTo(0.5);

        this.sh_1_13.events.onInputDown.add(function() {
            this.sh_1_13.inputEnabled = false;

            this.sh_18.visible = true;
            game.add.tween(this.sh_18).to({
                x: 280,
                y: 510
            }, 1000, Phaser.Easing.Quadratic.Out, true, 300).onComplete.add(function() {
                game.add.tween(this.sh_pop0001).to({
                    alpha: 0
                }, 1000, Phaser.Easing.Quadratic.Out, true, 300).onComplete.add(function() {
                    this.sh_pop0001.loadTexture('sh_pop0002')
                    game.add.tween(this.sh_pop0001).to({
                        alpha: 1
                    }, 1000, Phaser.Easing.Quadratic.Out, true, 200).onComplete.add(function() {
                        this.sh_1_16.inputEnabled = true;
                        this.sh_1_16.input.useHandCursor = true;
                    }, this);
                }, this);
            }, this);
        }, this);
        this.sh_grp3.add(this.sh_1_13);

        // this.sh_19 = game.add.sprite(65.9,374.85,'sh_19');
        // this.sh_19.anchor.setTo(0.5);   
        // this.sh_19.visible = true;   
        // this.sh_grp3.add(this.sh_19);  


        this.sh_1_14 = game.add.sprite(65.9, 374.85, 'sh_1_14');
        this.sh_1_14.anchor.setTo(0.5);
        this.sh_1_14.scale.setTo(0.75);
        // this.sh_1_14.inputEnabled = true;
        //  this.sh_1_14.input.useHandCursor = true;
        this.sh_1_14.events.onInputDown.add(function() {
            this.sh_1_14.inputEnabled = false;
            this.sh_19.visible = false;

            this.sh_19.visible = true;
            game.add.tween(this.sh_19).to({
                x: 300,
                y: 500
            }, 1000, Phaser.Easing.Quadratic.Out, true, 300).onComplete.add(function() {
                game.add.tween(this.sh_pop0001).to({
                    alpha: 0
                }, 1000, Phaser.Easing.Quadratic.Out, true, 300).onComplete.add(function() {
                    this.sh_pop0001.loadTexture('sh_pop_text2');
                    game.add.tween(this.sh_pop0001).to({
                        alpha: 1
                    }, 1000, Phaser.Easing.Quadratic.Out, true, 200).onComplete.add(function() {
                        game.add.tween(this.sh_pop0001).to({
                            alpha: 1
                        }, 1000, Phaser.Easing.Quadratic.Out, true, 3000);


                    }, this);
                }, this);
            }, this);
        }, this);
        this.sh_grp3.add(this.sh_1_14);

        this.sh_panel2 = game.add.sprite(500, 409.45, 'sh_panel2');
        this.sh_panel2.anchor.setTo(0.5);
        this.sh_grp3.add(this.sh_panel2);

        this.sh_panel2_1 = game.add.sprite(-10, 408.5, 'sh_panel2');
        this.sh_panel2_1.anchor.setTo(0.5);
        this.sh_grp3.add(this.sh_panel2_1);

        // this.sh_grp3.visible =true;

        this.trally_grp = game.add.group();


        this.mom = game.add.sprite(350, 350, 'mom');
        this.mom.anchor.setTo(0.5);
        this.mom.scale.setTo(0.75);
        this.trally_grp.add(this.mom);


        this.c_baby = game.add.sprite(230, 420, 'c_baby');
        this.c_baby.anchor.setTo(0.5);
        this.c_baby.scale.setTo(0.8);
        this.trally_grp.add(this.c_baby);




        this.sh_pop0001 = game.add.sprite(140, 260, 'sh_pop0001');
        this.sh_pop0001.anchor.setTo(0.5);
        this.trally_grp.add(this.sh_pop0001);

        this.trally = game.add.sprite(266.35, 557, 'trally');
        this.trally.anchor.setTo(0.5);
        this.trally_grp.add(this.trally);


        this.sh_17 = game.add.sprite(60, 250, 'sh_17'); //50.2,247.75  210,500
        this.sh_17.anchor.setTo(0.5);
        this.sh_17.scale.setTo(0.8);
        this.sh_17.visible = false;
        this.trally_grp.add(this.sh_17);


        this.sh_20 = game.add.sprite(442.4, 490, 'sh_20'); //442.4,367.3
        this.sh_20.anchor.setTo(0.5);
        this.sh_20.scale.setTo(0.5);
        this.sh_20.visible = false;
        this.trally_grp.add(this.sh_20);

        this.sh_12 = game.add.sprite(75, 500, 'sh_12');
        this.sh_12.anchor.setTo(0.5);
        this.sh_12.visible = false;
        this.trally_grp.add(this.sh_12);

        this.sh_2 = game.add.sprite(430, 250, 'sh_2');
        this.sh_2.anchor.setTo(0.5);
        this.sh_2.scale.setTo(0.8);
        this.sh_2.visible = false;
        this.trally_grp.add(this.sh_2);


        this.sh_18 = game.add.sprite(450, 400, 'sh_18');
        this.sh_18.anchor.setTo(0.5);
        this.sh_18.scale.setTo(0.8);
        this.sh_18.visible = false;
        this.trally_grp.add(this.sh_18);

        this.sh_6 = game.add.sprite(454.05, 497.65, 'sh_6');
        this.sh_6.anchor.setTo(0.5);
        this.sh_6.scale.setTo(0.7);
        this.sh_6.visible = false;
        this.trally_grp.add(this.sh_6);


        this.sh_10 = game.add.sprite(443.3, 370, 'sh_10');
        this.sh_10.anchor.setTo(0.5);
        this.sh_10.scale.setTo(0.7);
        this.sh_10.visible = false;
        this.trally_grp.add(this.sh_10);

        this.sh_16 = game.add.sprite(60, 400, 'sh_16');
        this.sh_16.anchor.setTo(0.5);
        this.sh_16.scale.setTo(0.8);
        this.sh_16.visible = false;
        this.trally_grp.add(this.sh_16);

        this.sh_1 = game.add.sprite(63.7, 258.65, 'sh_1');
        this.sh_1.anchor.setTo(0.5);
        this.sh_1.scale.setTo(0.8);
        this.sh_1.visible = false;
        this.trally_grp.add(this.sh_1);


        //.....................
        this.trally2 = game.add.sprite(251.6, 507.1, 'trally2');
        this.trally2.anchor.setTo(0.5);
        this.trally_grp.add(this.trally2);




        this.sh_grp1.x = 600;
        this.sh_grp2.x = 600;
        this.sh_grp3.x = 0;

        this.arr_cnt = 2;

        this.btn1 = game.add.sprite(385, 130, 'btn1');
        this.btn1.anchor.setTo(0.5);
        this.btn1.scale.setTo(0.65);
        this.btn1.id = 1;
        this.btn1.inputEnabled = true;
        this.btn1.input.useHandCursor = true;
        this.btn1.events.onInputDown.add(this.arrow_fun, this);
        this.btn1.visible = false;

        this.btn2 = game.add.sprite(465, 130, 'btn2');
        this.btn2.anchor.setTo(0.5);
        this.btn2.scale.setTo(0.65);
        this.btn2.id = 2;
        this.btn2.inputEnabled = true;
        this.btn2.input.useHandCursor = true;
        this.btn2.events.onInputDown.add(this.arrow_fun, this);



        //      game.time.events.add(700,function(){
        //         game.add.tween(this.sh_grp2).to({x:0},2500,Phaser.Easing.Linear.In,true).onComplete.add(function(){
        //         game.add.tween(this.trally_grp).to({y:0},1000,Phaser.Easing.Linear.In,true).onComplete.add(function(){
        // // this.sh_b_arrow.inputEnabled = true;
        // // this.sh_f_arrow.inputEnabled = true;
        // // this.sh_f_arrow.visible = true;

        //      },this);
        //      },this);
        //      },this);

        this.morebtn = game.add.sprite(65, 740, 'more');
        this.morebtn.anchor.setTo(0.5);
        this.morebtn.scale.setTo(0.9);
        this.morebtn.inputEnabled = true;
        this.morebtn.input.useHandCursor = true;
        this.morebtn.events.onInputUp.add(this.moreLink, this);
        this.morebtn.events.onInputOver.add(this.btnOver, this);
        this.morebtn.events.onInputOut.add(this.btnOut, this);

        this.playbtn = game.add.sprite(430, 730, 'correct');
        this.playbtn.anchor.setTo(0.5);
        this.playbtn.scale.setTo(0);
        this.playbtn.inputEnabled = true;
        this.playbtn.input.useHandCursor = true;
        this.playbtn.events.onInputUp.add(this.enterRoom, this);
        this.playbtn.events.onInputOver.add(this.btnOver, this);
        this.playbtn.events.onInputOut.add(this.btnOut, this);


        if (Main.shutterOn[0]) {
            this.shutter = game.add.sprite(0, 0, 'download');
            game.add.tween(this.shutter).to({
                y: -850
            }, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {}, this);
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
    arrow_fun: function(evt) {

        this.btn1.inputEnabled = false;
        this.btn2.inputEnabled = false;

        if (evt.id == 1) {

            this.arr_cnt++
                //console.log(this.arr_cnt);

                if (this.arr_cnt == 1) {
                    game.add.tween(this.trally_grp).to({
                        y: 100
                    }, 1000, Phaser.Easing.Linear.In, true, 500).onComplete.add(function() {
                        game.add.tween(this.sh_grp1).to({
                            x: 600
                        }, 1000, Phaser.Easing.Linear.In, true, 300);
                        this.btn2.visible = true;
                        this.btn1.visible = true;
                        game.add.tween(this.sh_grp2).to({
                            x: 0
                        }, 1200, Phaser.Easing.Linear.In, true).onComplete.add(function() {
                            game.add.tween(this.trally_grp).to({
                                y: 0
                            }, 1000, Phaser.Easing.Linear.In, true).onComplete.add(function() {
                                this.btn1.inputEnabled = true;

                                this.btn2.inputEnabled = true;

                            }, this);
                        }, this);
                    }, this);


                }


            if (this.arr_cnt == 2) {
                game.add.tween(this.trally_grp).to({
                    y: 100
                }, 1000, Phaser.Easing.Linear.In, true, 500).onComplete.add(function() {
                    game.add.tween(this.sh_grp2).to({
                        x: 600
                    }, 1000, Phaser.Easing.Linear.In, true, 300);

                    this.btn2.visible = true;
                    this.btn1.visible = false;
                    game.add.tween(this.sh_grp3).to({
                        x: 0
                    }, 1200, Phaser.Easing.Linear.In, true).onComplete.add(function() {
                        game.add.tween(this.trally_grp).to({
                            y: 0
                        }, 1000, Phaser.Easing.Linear.In, true).onComplete.add(function() {
                            this.btn1.inputEnabled = true;

                            this.btn2.inputEnabled = true;


                        }, this);
                    }, this);
                }, this);


            }

        }

        if (evt.id == 2) {

            this.arr_cnt--
                //console.log(this.arr_cnt);
                if (this.arr_cnt == 1) {
                    game.add.tween(this.trally_grp).to({
                        y: 100
                    }, 1000, Phaser.Easing.Linear.In, true, 500).onComplete.add(function() {
                        game.add.tween(this.sh_grp3).to({
                            x: -700
                        }, 1600, Phaser.Easing.Linear.In, true, 150);
                        this.btn2.visible = true;
                        this.btn1.visible = true;
                        game.add.tween(this.sh_grp2).to({
                            x: 0
                        }, 1390, Phaser.Easing.Linear.In, true).onComplete.add(function() {
                            game.add.tween(this.trally_grp).to({
                                y: 0
                            }, 1000, Phaser.Easing.Linear.In, true).onComplete.add(function() {
                                this.btn1.inputEnabled = true;

                                this.btn2.inputEnabled = true;

                            }, this);
                        }, this);
                    }, this);


                }

            if (this.arr_cnt == 0) {
                game.add.tween(this.trally_grp).to({
                    y: 100
                }, 1000, Phaser.Easing.Linear.In, true, 500).onComplete.add(function() {
                    game.add.tween(this.sh_grp2).to({
                        x: -700
                    }, 1600, Phaser.Easing.Linear.In, true, 150);
                    this.btn2.visible = false;
                    this.btn1.visible = true;
                    game.add.tween(this.sh_grp1).to({
                        x: 0
                    }, 1390, Phaser.Easing.Linear.In, true).onComplete.add(function() {
                        game.add.tween(this.trally_grp).to({
                            y: 0
                        }, 1000, Phaser.Easing.Linear.In, true).onComplete.add(function() {
                            this.btn1.inputEnabled = true;

                            this.btn2.inputEnabled = true;

                        }, this);
                    }, this);
                }, this);


            }




        }


    },
    //uuuuuuuuuuuuuuuuuuuuuuuuuuu
    update: function() {

        if (this.sh_14_drag) {

            this.sh_14.x = game.input.activePointer.x;
            this.sh_14.y = game.input.activePointer.y;
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
        //  YYGSDK.navigate("game","logo");
    },
    moreLink: function() {
        // YYGSDK.navigate("game","morebutton");
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
            MyShowAD('cook1');
        });
    },
}

////ccccccccccccc

Main.cake = function() {}

Main.cake.prototype = {
    create: function() {
        this.levelGroup = game.add.group();
        this.bb_g = game.add.sprite(0, 0, 'bb_g');
        this.levelGroup.add(this.bb_g);


        this.fridge = game.add.sprite(250, 295.6, 'fridge');
        this.fridge.anchor.setTo(0.5);

        this.fridge_door2 = game.add.sprite(348, 294.6, 'fridge_door2');
        this.fridge_door2.anchor.setTo(0.5);

        this.chimminey = game.add.sprite(53, 126.6, 'chimminey');
        this.chimminey.anchor.setTo(0.5);

        this.cuboard = game.add.sprite(113.6, 426.1, 'cuboard');
        this.cuboard.anchor.setTo(0.5);

        this.side_panel = game.add.sprite(493, 257.6, 'side_panel');
        this.side_panel.anchor.setTo(0.5);

        this.cook1table = game.add.sprite(254.10, 656.65, 'cook1table');
        this.cook1table.anchor.setTo(0.5);

        this.stand = game.add.sprite(240, 545.45, 'stand');
        this.stand.anchor.setTo(0.5);

        this.cut_ani = game.add.sprite(235, 420, 'cut_ani');
        this.cut_ani.anchor.setTo(0.5);
        this.cut_ani.scale.setTo(0.9);

        this.final_barbie_01 = game.add.sprite(247, 330, 'final_barbie');
        this.final_barbie_01.anchor.setTo(0.5);
        this.final_barbie_01.visible = false;

        this.cream_ani_1 = game.add.sprite(235, 420, 'cream_ani_1');
        this.cream_ani_1.anchor.setTo(0.5);
        this.cream_ani_1.scale.setTo(0.9);
        this.cream_ani_1.visible = false;

        this.final_barbie_1 = game.add.sprite(250, 330, 'final_barbie');
        this.final_barbie_1.anchor.setTo(0.5);
        this.final_barbie_1.scale.setTo(1);
        this.final_barbie_1.visible = false;


        this.rect_05 = game.add.graphics(140, 300);
        this.rect_05.beginFill(0x666666, 0);
        this.rect_05.events.onInputDown.add(function() {
            this.cream_bowl.visible = false;
            this.arrow1.visible = false;
            this.rect_05.inputEnabled = false;
            this.knife_ani.visible = true;
            this.cream_knife_drag = false;
            this.cream_knife.visible = false;
            this.needle_ani.visible = true;
            this.knife_ani.animations.add('knife_ani');
            this.knife_ani.animations.play('knife_ani', 5, false).onComplete.add(function() {
                this.arrow2.visible = true;
                this.arrow2.x = 230;
                this.arrow2.y = 608;
                this.needle_ani.inputEnabled = true;
                this.needle_ani.input.useHandCursor = true;
                this.needle_ani.input.enableDrag();

            }, this);

        }, this);
        this.rect_05.drawRect(0, 0, 200, 250);

        this.panel = game.add.sprite(257.65, 895, 'panel');
        this.panel.anchor.setTo(0.5);



        this.barbie_group = game.add.group();

        this.back_hair01 = game.add.sprite(272, 254, 'back_hair0' + Main.bar_arr[0]);
        this.back_hair01.anchor.setTo(0.5);
        this.back_hair01.scale.setTo(0.92);
        // this.back_hair01.alpha=0;     
        this.barbie_group.add(this.back_hair01);

        this.pose_01 = game.add.sprite(269.25, 335, 'pose_0' + Main.bar_arr[1]);
        this.pose_01.anchor.setTo(0.5);
        // this.pose_01.alpha=0;
        this.barbie_group.add(this.pose_01);

        this.new_dress = game.add.sprite(270, 315, 'new_dress');
        this.new_dress.anchor.setTo(0.5);
        this.new_dress.scale.setTo(1.65);
        this.barbie_group.add(this.new_dress);


        this.head = game.add.sprite(269, 230, 'head');
        this.head.anchor.setTo(0.5);

        this.barbie_group.add(this.head);

        this.bottomdec_01 = game.add.sprite(262, 469, 'bottom_01dec_01_' + Main.bar_arr[4]);
        this.bottomdec_01.anchor.setTo(0.5);
        // this.bottomdec_01.scale.setTo(0.97);
        this.bottomdec_01.alpha = 0;
        this.barbie_group.add(this.bottomdec_01);

        this.bottomdec_02 = game.add.sprite(263, 467, 'bottom_01dec_02_' + Main.bar_arr[4]);
        this.bottomdec_02.anchor.setTo(0.5);
        // this.bottomdec_02.scale.setTo(0.97);
        this.bottomdec_02.alpha = 0;
        this.barbie_group.add(this.bottomdec_02);

        this.bottomdec_03 = game.add.sprite(262, 467, 'bottom_01dec_03_' + Main.bar_arr[4]);
        this.bottomdec_03.anchor.setTo(0.5);
        // this.bottomdec_03.scale.setTo(0.97);
        this.bottomdec_03.alpha = 0;
        this.barbie_group.add(this.bottomdec_03);

        this.bottomdec_04 = game.add.sprite(262, 467, 'bottom_01dec_04_' + Main.bar_arr[4]);
        this.bottomdec_04.anchor.setTo(0.5);
        // this.bottomdec_04.scale.setTo(0.97);
        this.bottomdec_04.alpha = 0;
        this.barbie_group.add(this.bottomdec_04);

        this.bottomdec_05 = game.add.sprite(260, 467, 'bottom_01dec_05_' + Main.bar_arr[4]);
        this.bottomdec_05.anchor.setTo(0.5);
        // this.bottomdec_05.scale.setTo(0.97);
        this.bottomdec_05.alpha = 0;
        this.barbie_group.add(this.bottomdec_05);

        this.bottomdec_06 = game.add.sprite(262, 467, 'bottom_01dec_06_' + Main.bar_arr[4]);
        this.bottomdec_06.anchor.setTo(0.5);
        // this.bottomdec_06.scale.setTo(0.96);
        this.bottomdec_06.alpha = 0;
        this.barbie_group.add(this.bottomdec_06);

        this.bottom_01 = game.add.sprite(262, 415, 'bottom_0' + Main.bar_arr[3]);
        this.bottom_01.anchor.setTo(0.5);
        // this.bottom_01.scale.setTo(0.85);
        this.bottom_01.alpha = 0;
        this.barbie_group.add(this.bottom_01);

        this.knife_ani1 = game.add.sprite(295, 382, 'knife_ani');
        this.knife_ani1.anchor.setTo(0.5);
        this.knife_ani1.scale.setTo(0.9);
        this.knife_ani1.frame = 10;
        this.barbie_group.add(this.knife_ani1);


        this.h_hand = game.add.sprite(269, 335, 'h_hand' + Main.bar_arr[1]);
        this.h_hand.anchor.setTo(0.5);
        this.h_hand.alpha = 0;
        this.barbie_group.add(this.h_hand);

        this.pose_1 = game.add.sprite(269, 335, 'pose_' + Main.bar_arr[1]);
        this.pose_1.anchor.setTo(0.5);
        this.pose_1.alpha = 0;
        this.barbie_group.add(this.pose_1);

        this.top_01 = game.add.sprite(281.85, 289.85, 'top_0' + Main.bar_arr[2]);
        this.top_01.anchor.setTo(0.5);
        this.top_01.alpha = 0;
        this.barbie_group.add(this.top_01);


        this.pf_hand = game.add.sprite(269, 335, 'pf_hand' + Main.bar_arr[1]);
        this.pf_hand.anchor.setTo(0.5);
        this.pf_hand.alpha = 0;
        this.barbie_group.add(this.pf_hand);

        this.barbie_hair01 = game.add.sprite(273, 252, 'barbie_hair0' + Main.bar_arr[0]);
        this.barbie_hair01.anchor.setTo(0.5);
        this.barbie_hair01.scale.setTo(0.92);
        this.barbie_group.add(this.barbie_hair01);



        this.needle_ani_1 = game.add.sprite(336, 410, 'needle_ani');
        this.needle_ani_1.anchor.setTo(0.5);
        this.needle_ani_1.scale.setTo(0.9);
        this.needle_ani_1.frame = 10;
        this.needle_ani_1.visible = true;
        this.barbie_group.add(this.needle_ani_1);

        // this.needle_ani_11 = game.add.sprite(336,410,'needle_ani');
        // this.needle_ani_11.anchor.setTo(0.5);
        // this.needle_ani_11.scale.setTo(0.95);
        // this.needle_ani_11.frame=10;
        // this.needle_ani_11.visible=true;
        // this.barbie_group.add(this.needle_ani_11); 

        // this.needle_ani_12 = game.add.sprite(336,410,'needle_ani');
        // this.needle_ani_12.anchor.setTo(0.5);
        // this.needle_ani_12.scale.setTo(0.9);
        // this.needle_ani_12.frame=10;
        // this.needle_ani_12.visible=true;
        // this.barbie_group.add(this.needle_ani_12);

        // this.needle_ani_14 = game.add.sprite(334,410,'needle_ani');
        // this.needle_ani_14.anchor.setTo(0.5);
        // this.needle_ani_14.scale.setTo(0.9);
        // this.needle_ani_14.frame=10;
        // this.needle_ani_14.visible=true;
        // this.barbie_group.add(this.needle_ani_14);

        this.barbie_group.visible = false;
        this.barbie_group.scale.setTo(1);
        this.barbie_group.x = -28;
        this.barbie_group.y = 0;


        this.cream_ani = game.add.sprite(245, 410, 'cream_ani');
        this.cream_ani.anchor.setTo(0.5);
        this.cream_ani.scale.setTo(0.8);
        this.cream_ani.visible = false;

        this.knife_ani = game.add.sprite(272, 378, 'knife_ani');
        this.knife_ani.anchor.setTo(0.5);
        this.knife_ani.scale.setTo(0.85);
        this.knife_ani.visible = false;



        this.sheet = game.add.sprite(230, 732.15, 'sheet');
        this.sheet.anchor.setTo(0.5);
        this.sheet.scale.setTo(0.9);
        this.sheet.events.onInputDown.add(function() {
            this.arrow1.visible = false;
            this.arrow2.visible = true;
            this.arrow2.x = 260;
            this.arrow2.y = 252;
        }, this);
        this.sheet.events.onInputUp.add(function() {
            if ((game.input.activePointer.x > 143 && game.input.activePointer.x < 345 && game.input.activePointer.y > 269 && game.input.activePointer.y < 511)) {
                this.arrow2.visible = false;

                this.sheet.visible = false;
                this.cream_ani_1.visible = true;
                // this.cream_ani.animations.add('cream_ani',[0]);
                // this.cream_ani.animations.play('cream_ani',10,false).onComplete.add(function(){
                this.scraber.visible = true;
                this.arrow1.visible = true;
                this.arrow1.x = 250;
                this.arrow1.y = 611;
                this.scraber.inputEnabled = true;
                this.scraber.input.useHandCursor = true;
                this.scraber.input.enableDrag();

                // },this);         
            } else {
                this.arrow1.visible = true;
                this.arrow1.x = 200;
                this.arrow1.y = 605;
                this.arrow2.visible = false;
                game.add.tween(this.sheet).to({
                    x: 230,
                    y: 732.15
                }, 500, Phaser.Easing.Quadratic.Out, true);
            }
        }, this);


        this.scraber = game.add.sprite(250, 719.85, 'scraber');
        this.scraber.anchor.setTo(0.5);
        this.scraber.scale.setTo(0.9);
        this.scraber.events.onInputDown.add(function() {
            this.arrow1.visible = false;
            this.arrow2.visible = true

        }, this);
        this.scraber.events.onInputUp.add(function() {
            if ((game.input.activePointer.x > 143 && game.input.activePointer.x < 345 && game.input.activePointer.y > 269 && game.input.activePointer.y < 511)) {
                this.arrow2.visible = false;
                this.cream_ani_1.visible = true;
                this.scraber.visible = false;
                this.cream_ani.visible = true;
                this.cream_ani.animations.add('cream_ani');
                this.cream_ani.animations.play('cream_ani', 10, false).onComplete.add(function() {
                    this.cream_ani_1.visible = false;
                    this.cream_bowl.visible = true;
                    this.cream_knife.visible = true;
                    this.arrow1.visible = true;
                    this.arrow1.x = 362;
                    this.arrow1.y = 640;
                    this.cream_knife.inputEnabled = true;
                    this.cream_knife.input.useHandCursor = true;
                    this.cream_knife.input.enableDrag();


                }, this);
            } else {
                this.arrow1.visible = true;
                this.arrow1.x = 250;
                this.arrow1.y = 611;
                this.arrow2.visible = false;
                game.add.tween(this.scraber).to({
                    x: 250,
                    y: 719.85
                }, 500, Phaser.Easing.Quadratic.Out, true);
            }
        }, this);
        this.scraber.visible = false;

        this.cream_bowl = game.add.sprite(200, 700, 'cream_bowl');
        this.cream_bowl.anchor.setTo(0.5);
        this.cream_bowl.visible = false;

        this.rect_01 = game.add.graphics(120, 595);
        this.rect_01.beginFill(0x666666, 0);
        this.rect_01.events.onInputDown.add(function() {
            this.arrow2.visible = false;
            this.rect_01.inputEnabled = false;
            this.cream_knife.loadTexture('cream_knife_1');
            this.arrow1.visible = true;
            this.arrow1.x = 227;
            this.arrow1.y = 268;
            this.rect_05.inputEnabled = true;
        }, this);
        this.rect_01.drawRect(0, 0, 150, 150);



        this.cream_knife = game.add.sprite(370, 700, 'cream_knife');
        this.cream_knife.anchor.setTo(0.5);
        this.cream_knife.events.onInputDown.add(function() {
            this.cream_knife.inputEnabled = false;
            this.arrow1.visible = false;
            this.arrow2.visible = true;
            this.arrow2.x = 196;
            this.arrow2.y = 615;
            this.cream_knife_drag = true;
            this.rect_01.inputEnabled = true;;
        }, this);
        this.cream_knife.visible = false;

        this.cream_knife_drag = false;

        this.needle_ani = game.add.sprite(340, 735, 'needle_ani');
        this.needle_ani.anchor.setTo(0.5);
        this.needle_ani.scale.setTo(0.8);
        // this.needle_ani.frame=10;
        this.needle_ani.events.onInputDown.add(function() {
            this.arrow2.visible = false
            this.arrow1.visible = true;
            this.arrow1.x = 245;
            this.arrow1.y = 424;

        }, this);
        this.needle_ani.events.onInputUp.add(function() {
            if ((game.input.activePointer.x > 143 && game.input.activePointer.x < 345 && game.input.activePointer.y > 381 && game.input.activePointer.y < 519)) {
                this.needle_ani.inputEnabled = false;
                this.arrow1.visible = false;
                this.needle_ani.x = 311;
                this.needle_ani.y = 410;
                this.needle_ani.scale.setTo(0.85);
                this.needle_ani.animations.add('needle_ani');
                this.needle_ani.animations.play('needle_ani', 5, false).onComplete.add(function() {
                    this.final_barbie.visible = true;
                    this.arrow2.visible = true;
                    this.arrow2.x = 220;
                    this.arrow2.y = 582;
                    this.final_barbie.inputEnabled = true;
                    this.final_barbie.input.useHandCursor = true;
                    this.final_barbie.input.enableDrag();

                }, this);

            } else {
                this.arrow1.visible = false;
                this.arrow2.visible = true;
                this.arrow2.x = 230;
                this.arrow2.y = 608;
                game.add.tween(this.needle_ani).to({
                    x: 340,
                    y: 735
                }, 500, Phaser.Easing.Quadratic.Out, true);
            }
        }, this);
        this.needle_ani.visible = false;

        // this.needle_ani_1 = game.add.sprite(318,420,'needle_ani');
        // this.needle_ani_1.anchor.setTo(0.5);
        // this.needle_ani_1.scale.setTo(0.94);
        // this.needle_ani_1.frame=10;
        // this.needle_ani_1.visible =false;


        this.final_barbie = game.add.sprite(220, 715, 'final_barbie');
        this.final_barbie.anchor.setTo(0.5);
        this.final_barbie.scale.setTo(0.7);
        // this.final_barbie.inputEnabled =true;
        // this.final_barbie.input.useHandCursor =true;
        // this.final_barbie.input.enableDrag();

        this.final_barbie.events.onInputDown.add(function() {
            this.arrow2.visible = false;
            this.arrow1.visible = true;
            this.arrow1.x = 225;
            this.arrow1.y = 258;

        }, this);
        this.final_barbie.events.onInputUp.add(function() {
            if ((game.input.activePointer.x > 93 && game.input.activePointer.x < 345 && game.input.activePointer.y > 171 && game.input.activePointer.y < 402)) {
                this.arrow1.visible = false;
                this.final_barbie.visible = false;
                this.cut_ani.visible = false;
                this.cream_ani.visible = false;
                this.knife_ani.visible = false;
                this.barbie_group.visible = true;
                this.barbie_group.scale.setTo(1);
                this.barbie_group.x = -21;
                this.barbie_group.y = -10;
                this.needle_ani.visible = false;

                // console.log('ggggggggggggg')
                // this.knife_ani.visible =false;
                // this.final_barbie_01.visible =true;
                // this.barbie_group.visible =true;
                game.add.tween(this.playbtn.scale).to({
                    x: 0.9,
                    y: 0.9
                }, 500, Phaser.Easing.Quadratic.Out, true, 600);
                // game.add.tween(this.panel).to({y:1500},1000, Phaser.Easing.Quadratic.Out, true,600).onComplete.add(function(){
                // game.add.tween(this.panel_group).to({x:0},1000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
                // },this);
                // },this);
            } else {
                this.arrow1.visible = true;
                this.arrow1.x = 243;
                this.arrow1.y = 598;
                this.arrow2.visible = false;
                game.add.tween(this.final_barbie).to({
                    x: 220,
                    y: 715
                }, 500, Phaser.Easing.Quadratic.Out, true);
            }
        }, this);
        this.final_barbie.visible = false;


        this.panel_group = game.add.group();

        this.panel_1 = game.add.sprite(460, 400, 'panel_1');
        this.panel_1.anchor.setTo(0.5);
        this.panel_1.scale.setTo(0.8);
        this.panel_group.add(this.panel_1);

        this.count1 = 0;
        this.icon0004 = game.add.sprite(459, 215, 'icon0004');
        this.icon0004.anchor.setTo(0.5);
        this.icon0004.inputEnabled = true;
        this.icon0004.input.useHandCursor = true;
        this.icon0004.events.onInputDown.add(function() {
            this.final_barbie_01.visible = false;
            this.barbie_hair01.alpha = 1;
            this.back_hair01.alpha = 1;
            this.pose_01.alpha = 1;
            this.pose_01.alpha = 1;
            this.head.alpha = 1;

            this.count1++;
            this.barbie_hair01.alpha = 1;
            this.back_hair01.alpha = 1;
            this.barbie_hair01.loadTexture('barbie_hair0' + this.count1);
            this.back_hair01.loadTexture('back_hair0' + this.count1);
            Main.bar_arr[0] = this.count1;
            if (this.count1 >= 6) {
                this.count1 = 0;
            }
            this.ch1_i[0] = 1;

            if (this.ch1_i.indexOf(0) < 0) {
                game.add.tween(this.playbtn.scale).to({
                    x: 0.9,
                    y: 0.9
                }, 800, Phaser.Easing.Quadratic.Out, true);
            }
            effectssd = game.add.sprite(game.world.width / 2, game.world.height / 4, 'effectssd');
            effectssd.anchor.setTo(0.5);
            effectssd.animations.add('effectssd');
            effectssd.animations.play('effectssd', 20, false).onComplete.add(function(evt) {
                evt.destroy();
            }, this);
        }, this);
        this.panel_group.add(this.icon0004);

        this.count2 = 0;
        this.icon0002 = game.add.sprite(459, 305, 'icon0002');
        this.icon0002.anchor.setTo(0.5);
        this.icon0002.inputEnabled = true;
        this.icon0002.input.useHandCursor = true;
        this.icon0002.events.onInputDown.add(function() {
            this.final_barbie_01.visible = false;
            this.barbie_group.visible = true;
            this.barbie_hair01.alpha = 1;
            this.back_hair01.alpha = 1;
            this.count2++;
            this.pose_1.alpha = 1;
            this.pf_hand.alpha = 1;
            // this.h_hand.alpha=1;
            this.pf_hand.loadTexture('pf_hand' + this.count2);
            // this.h_hand.loadTexture('h_hand'+this.count2);        
            this.pose_01.loadTexture('pose_0' + this.count2);
            this.pose_1.loadTexture('pose_' + this.count2);
            Main.bar_arr[1] = this.count2;
            if (this.count2 >= 6) {
                this.count2 = 0;
            }


            this.ch1_i[1] = 1;

            if (this.ch1_i.indexOf(0) < 0) {
                game.add.tween(this.playbtn.scale).to({
                    x: 0.9,
                    y: 0.9
                }, 800, Phaser.Easing.Quadratic.Out, true);
            }
            effectssd = game.add.sprite(game.world.width / 2, game.world.height / 4, 'effectssd');
            effectssd.anchor.setTo(0.5);
            effectssd.animations.add('effectssd');
            effectssd.animations.play('effectssd', 20, false).onComplete.add(function(evt) {
                evt.destroy();
            }, this);
        }, this);
        this.panel_group.add(this.icon0002);


        this.count3 = 0;
        this.icon0003 = game.add.sprite(459, 395, 'icon0003');
        this.icon0003.anchor.setTo(0.5);
        this.icon0003.inputEnabled = true;
        this.icon0003.input.useHandCursor = true;
        this.icon0003.events.onInputDown.add(function() {
            this.final_barbie_01.visible = false;
            this.barbie_group.visible = true;
            this.barbie_hair01.alpha = 1;
            this.back_hair01.alpha = 1;
            this.pose_01.alpha = 1;
            this.top_01.alpha = 1;
            this.new_dress.visible = false;


            this.count3++;
            this.top_01.loadTexture('top_0' + this.count3);
            Main.bar_arr[2] = this.count3;
            if (this.count3 >= 6) {
                this.count3 = 0;
            }
            this.ch1_i[2] = 1;

            if (this.ch1_i.indexOf(0) < 0) {
                game.add.tween(this.playbtn.scale).to({
                    x: 0.9,
                    y: 0.9
                }, 800, Phaser.Easing.Quadratic.Out, true);

            }
            effectssd = game.add.sprite(game.world.width / 2, game.world.height / 3.7, 'effectssd');
            effectssd.anchor.setTo(0.5);
            effectssd.animations.add('effectssd');
            effectssd.animations.play('effectssd', 20, false).onComplete.add(function(evt) {
                evt.destroy();
            }, this);

        }, this);

        this.panel_group.add(this.icon0003);


        this.count4 = 0;
        this.icon0001 = game.add.sprite(459, 485, 'icon0001');
        this.icon0001.anchor.setTo(0.5);
        this.icon0001.inputEnabled = true;
        this.icon0001.input.useHandCursor = true;
        this.icon0001.events.onInputDown.add(function() {
            this.icon0005.inputEnabled = true;
            this.icon0005.input.useHandCursor = true;
            this.final_barbie_01.visible = false;
            this.barbie_group.visible = true;
            this.barbie_hair01.alpha = 1;
            this.back_hair01.alpha = 1;
            this.pose_01.alpha = 1;
            this.top_01.alpha = 1;
            this.bottom_01.alpha = 1;
            this.knife_ani.visible = false;
            this.new_dress.visible = false;
            this.cream_ani.visible = false;
            this.cut_ani.visible = false;
            this.knife_ani1.visible = false;
            this.needle_ani_1.scale.setTo(0.9);
            this.needle_ani_1.x = 331;
            this.needle_ani_1.y = 410;
            this.count4++;
            this.bottom_01.loadTexture('bottom_0' + this.count4);
            if (Main.bar_arr[3] == 1) {
                this.bottomdec_01.visible = true;
                this.bottomdec_02.visible = false;
                this.bottomdec_03.visible = false;
                this.bottomdec_04.visible = false;
                this.bottomdec_05.visible = false;
                this.bottomdec_06.visible = false;

            }
            if (Main.bar_arr[3] == 2) {
                this.bottomdec_01.visible = false;
                this.bottomdec_02.visible = true;
                this.bottomdec_03.visible = false;
                this.bottomdec_04.visible = false;
                this.bottomdec_05.visible = false;
                this.bottomdec_06.visible = false;
            }
            if (Main.bar_arr[3] == 3) {
                this.bottomdec_01.visible = false;
                this.bottomdec_02.visible = false;
                this.bottomdec_03.visible = true;
                this.bottomdec_04.visible = false;
                this.bottomdec_05.visible = false;
                this.bottomdec_06.visible = false;
            }
            if (Main.bar_arr[3] == 4) {
                this.bottomdec_01.visible = false;
                this.bottomdec_02.visible = false;
                this.bottomdec_03.visible = false;
                this.bottomdec_04.visible = true;
                this.bottomdec_05.visible = false;
                this.bottomdec_06.visible = false;
            }
            if (Main.bar_arr[3] == 5) {
                this.bottomdec_01.visible = false;
                this.bottomdec_02.visible = false;
                this.bottomdec_03.visible = false;
                this.bottomdec_04.visible = false;
                this.bottomdec_05.visible = true;
                this.bottomdec_06.visible = false;

            }
            if (Main.bar_arr[3] == 6) {
                this.bottomdec_01.visible = false;
                this.bottomdec_02.visible = false;
                this.bottomdec_03.visible = false;
                this.bottomdec_04.visible = false;
                this.bottomdec_05.visible = false;
                this.bottomdec_06.visible = true;
            }
            Main.bar_arr[3] = this.count4;
            if (this.count4 >= 6) {
                this.count4 = 0;
            }
            this.ch1_i[3] = 1;

            if (this.ch1_i.indexOf(0) < 0) {
                game.add.tween(this.playbtn.scale).to({
                    x: 0.9,
                    y: 0.9
                }, 800, Phaser.Easing.Quadratic.Out, true);

            }
            effectssd = game.add.sprite(game.world.width / 2, game.world.height / 2, 'effectssd');
            effectssd.anchor.setTo(0.5);
            effectssd.animations.add('effectssd');
            effectssd.animations.play('effectssd', 20, false).onComplete.add(function(evt) {
                evt.destroy();
            }, this);

        }, this);

        this.panel_group.add(this.icon0001);

        this.count5 = 0;
        this.icon0005 = game.add.sprite(459, 575, 'icon0005');
        this.icon0005.anchor.setTo(0.5);
        this.icon0005.scale.setTo(0.7);
        // this.icon0005.inputEnabled =true;
        // this.icon0005.input.useHandCursor =true;
        this.icon0005.events.onInputDown.add(function() {
            this.final_barbie_01.visible = false;
            this.barbie_group.visible = true;
            this.barbie_hair01.alpha = 1;
            this.back_hair01.alpha = 1;
            this.pose_01.alpha = 1;
            this.top_01.alpha = 1;
            this.bottom_01.alpha = 1;
            this.bottomdec_01.alpha = 1;
            this.bottomdec_02.alpha = 1;
            this.bottomdec_03.alpha = 1;
            this.bottomdec_04.alpha = 1;
            this.bottomdec_05.alpha = 1;
            this.bottomdec_06.alpha = 1;
            this.new_dress.visible = false;
            this.knife_ani.visible = false;
            this.needle_ani_1.visible = false;
            this.count5++;
            this.bottomdec_01.loadTexture('bottom_01dec_01_' + this.count5);
            this.bottomdec_02.loadTexture('bottom_01dec_02_' + this.count5);
            this.bottomdec_03.loadTexture('bottom_01dec_03_' + this.count5);
            this.bottomdec_04.loadTexture('bottom_01dec_04_' + this.count5);
            this.bottomdec_05.loadTexture('bottom_01dec_05_' + this.count5);
            this.bottomdec_06.loadTexture('bottom_01dec_06_' + this.count5);
            if (Main.bar_arr[3] == 1) {
                this.bottomdec_01.visible = true;
                this.bottomdec_02.visible = false;
                this.bottomdec_03.visible = false;
                this.bottomdec_04.visible = false;
                this.bottomdec_05.visible = false;
                this.bottomdec_06.visible = false;
            }
            if (Main.bar_arr[3] == 2) {
                this.bottomdec_01.visible = false;
                this.bottomdec_02.visible = true;
                this.bottomdec_03.visible = false;
                this.bottomdec_04.visible = false;
                this.bottomdec_05.visible = false;
                this.bottomdec_06.visible = false;
            }
            if (Main.bar_arr[3] == 3) {
                this.bottomdec_01.visible = false;
                this.bottomdec_02.visible = false;
                this.bottomdec_03.visible = true;
                this.bottomdec_04.visible = false;
                this.bottomdec_05.visible = false;
                this.bottomdec_06.visible = false;
            }
            if (Main.bar_arr[3] == 4) {
                this.bottomdec_01.visible = false;
                this.bottomdec_02.visible = false;
                this.bottomdec_03.visible = false;
                this.bottomdec_04.visible = true;
                this.bottomdec_05.visible = false;
                this.bottomdec_06.visible = false;
            }
            if (Main.bar_arr[3] == 5) {
                this.bottomdec_01.visible = false;
                this.bottomdec_02.visible = false;
                this.bottomdec_03.visible = false;
                this.bottomdec_04.visible = false;
                this.bottomdec_05.visible = true;
                this.bottomdec_06.visible = false;
            }
            if (Main.bar_arr[3] == 6) {
                this.bottomdec_01.visible = false;
                this.bottomdec_02.visible = false;
                this.bottomdec_03.visible = false;
                this.bottomdec_04.visible = false;
                this.bottomdec_05.visible = false;
                this.bottomdec_06.visible = true;
            }
            Main.bar_arr[4] = this.count5;
            if (this.count5 >= 6) {
                this.count5 = 0;
            }
            this.ch1_i[4] = 1;

            if (this.ch1_i.indexOf(0) < 0) {
                game.add.tween(this.playbtn.scale).to({
                    x: 0.9,
                    y: 0.9
                }, 800, Phaser.Easing.Quadratic.Out, true);

            }

            effectssd = game.add.sprite(game.world.width / 2, game.world.height / 2.7, 'effectssd');
            effectssd.anchor.setTo(0.5);
            effectssd.animations.add('effectssd');
            effectssd.animations.play('effectssd', 20, false).onComplete.add(function(evt) {
                evt.destroy();
            }, this);
        }, this);
        this.panel_group.add(this.icon0005);

        this.ch1_i = [0, 0, 0, 0, 0];

        this.panel_group.x = 1000;



        this.arrowgp = game.add.group();

        var arro2x = [250, 252, 245, 318, 414, 410, 710];
        var arro2y = [405, 500, 405, 538, 527, 130, 440];

        for (i = 1; i <= 60; i++) {
            this['arrow' + i] = game.add.sprite(arro2x[i - 1], arro2y[i - 1], 'arrow');
            this['arrow' + i].anchor.setTo(0.5);
            this['arrow' + i].animations.add('arrow');
            this['arrow' + i].animations.play('arrow', 15, true);
            this['arrow' + i].visible = false;
            if (i == 1) {
                this['arrow' + i].visible = false;
            }
            if (i == 2) {
                this['arrow' + i].visible = false;
            }
            if (i == 3) {
                this['arrow' + i].visible = false;
            }
            if (i == 4) {
                this['arrow' + i].visible = false;
            }
            if (i == 5) {
                this['arrow' + i].visible = false;
            }
            if (i == 6) {
                this['arrow' + i].visible = false;
            }
            this.arrowgp.add(this['arrow' + i]);

        }
        // // 


        this.morebtn = game.add.sprite(65, 740, 'more');
        this.morebtn.anchor.setTo(0.5);
        this.morebtn.scale.setTo(0.9);
        this.morebtn.inputEnabled = true;
        this.morebtn.input.useHandCursor = true;
        this.morebtn.events.onInputUp.add(this.moreLink, this);
        this.morebtn.events.onInputOver.add(this.btnOver, this);
        this.morebtn.events.onInputOut.add(this.btnOut, this);
        // this.levelGroup.add(this.morebtn);

        this.playbtn = game.add.sprite(430, 730, 'next');
        this.playbtn.anchor.setTo(0.5);
        this.playbtn.scale.setTo(0);
        this.playbtn.inputEnabled = true;
        this.playbtn.input.useHandCursor = true;
        this.playbtn.events.onInputUp.add(this.enterRoom, this);
        this.playbtn.events.onInputOver.add(this.btnOver, this);
        this.playbtn.events.onInputOut.add(this.btnOut, this);
        // this.levelGroup.add(this.playbtn);


        if (Main.shutterOn[0]) {
            this.shutter = game.add.sprite(0, 0, 'download');
            game.add.tween(this.shutter).to({
                y: -850
            }, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                this.arrow1.visible = true;
                this.arrow1.x = 200;
                this.arrow1.y = 605;
                this.sheet.inputEnabled = true;
                this.sheet.input.useHandCursor = true;
                this.sheet.input.enableDrag();

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

    update: function() {
        // console.log(game.input.activePointer.x+':'+game.input.activePointer.y);
        if (this.dummydrag) {
            this.dummyobject.x = game.input.activePointer.x;
            this.dummyobject.y = game.input.activePointer.y;
        }
        if (this.cream_knife_drag) {
            this.cream_knife.x = game.input.activePointer.x - 10;
            this.cream_knife.y = game.input.activePointer.y;
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
        // YYGSDK.navigate("game","logo");
    },
    moreLink: function() {
        // YYGSDK.navigate("game","morebutton");
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
            MyShowAD('barbie_cake');
            //console.log(Main.bar_arr[0])
            //console.log(Main.bar_arr[1])
            //console.log(Main.bar_arr[2])
            //console.log(Main.bar_arr[3])
        });
    },
}

// bcccccccccccc

Main.barbie_cake = function() {}
Main.barbie_cake.prototype = {
    create: function() {

        this.levelGroup = game.add.group();
        this.bb_g = game.add.sprite(0, 0, 'bb_g');
        this.levelGroup.add(this.bb_g);

        this.fridge = game.add.sprite(250, 295.6, 'fridge');
        this.fridge.anchor.setTo(0.5);

        this.fridge_door2 = game.add.sprite(348, 294.6, 'fridge_door2');
        this.fridge_door2.anchor.setTo(0.5);

        this.chimminey = game.add.sprite(53, 126.6, 'chimminey');
        this.chimminey.anchor.setTo(0.5);

        this.cuboard = game.add.sprite(113.6, 426.1, 'cuboard');
        this.cuboard.anchor.setTo(0.5);

        this.side_panel = game.add.sprite(493, 257.6, 'side_panel');
        this.side_panel.anchor.setTo(0.5);

        this.cook1table = game.add.sprite(254.10, 656.65, 'cook1table');
        this.cook1table.anchor.setTo(0.5);

        this.stand = game.add.sprite(240, 545.45, 'stand');
        this.stand.anchor.setTo(0.5);

        this.panel = game.add.sprite(610, 400.45, 'panel');
        this.panel.anchor.setTo(0.5);
        this.panel.scale.setTo(0.9);

        // this.dragCircle_hair_a1 = game.add.graphics(0,0);
        // this.dragCircle_hair_a1.beginFill(0x000000, 1);
        // this.dragCircle_hair_a1.drawRect(0,0,504,800);

        this.barbie_group = game.add.group();
        this.barbie_group.x = -20;
        this.barbie_group.y = -57;

        this.back_hair01 = game.add.sprite(272, 254, 'back_hair0' + Main.bar_arr[0]);
        this.back_hair01.anchor.setTo(0.5);
        this.back_hair01.scale.setTo(0.92);
        // this.back_hair01.alpha=0;     
        this.barbie_group.add(this.back_hair01);

        this.pose_01 = game.add.sprite(269.25, 335, 'pose_0' + Main.bar_arr[1]);
        this.pose_01.anchor.setTo(0.5);
        // this.pose_01.alpha=0;
        this.barbie_group.add(this.pose_01);

        this.new_dress = game.add.sprite(270, 315, 'new_dress');
        this.new_dress.anchor.setTo(0.5);
        this.new_dress.scale.setTo(1.65);
        this.barbie_group.add(this.new_dress);


        this.head = game.add.sprite(269, 230, 'head');
        this.head.anchor.setTo(0.5);
        this.barbie_group.add(this.head);

        this.bottomdec_01 = game.add.sprite(264, 505, 'bottom_01dec_01_' + Main.bar_arr[4]);
        this.bottomdec_01.anchor.setTo(0.5);
        this.bottomdec_01.scale.setTo(0.85);
        this.bottomdec_01.alpha = 0;
        this.barbie_group.add(this.bottomdec_01);

        this.bottomdec_02 = game.add.sprite(264, 494, 'bottom_01dec_02_' + Main.bar_arr[4]);
        this.bottomdec_02.anchor.setTo(0.5);
        this.bottomdec_02.scale.setTo(0.85);
        this.bottomdec_02.alpha = 0;
        this.barbie_group.add(this.bottomdec_02);

        this.bottomdec_03 = game.add.sprite(262, 507, 'bottom_01dec_03_' + Main.bar_arr[4]);
        this.bottomdec_03.anchor.setTo(0.5);
        this.bottomdec_03.scale.setTo(0.85);
        this.bottomdec_03.alpha = 0;
        this.barbie_group.add(this.bottomdec_03);

        this.bottomdec_04 = game.add.sprite(264, 504, 'bottom_01dec_04_' + Main.bar_arr[4]);
        this.bottomdec_04.anchor.setTo(0.5);
        this.bottomdec_04.scale.setTo(0.85);
        this.bottomdec_04.alpha = 0;
        this.barbie_group.add(this.bottomdec_04);

        this.bottomdec_05 = game.add.sprite(264, 495, 'bottom_01dec_05_' + Main.bar_arr[4]);
        this.bottomdec_05.anchor.setTo(0.5);
        this.bottomdec_05.scale.setTo(0.85);
        this.bottomdec_05.alpha = 0;
        this.barbie_group.add(this.bottomdec_05);

        this.bottomdec_06 = game.add.sprite(263, 501, 'bottom_01dec_06_' + Main.bar_arr[4]);
        this.bottomdec_06.anchor.setTo(0.5);
        this.bottomdec_06.scale.setTo(0.85);
        this.bottomdec_06.alpha = 0;
        this.barbie_group.add(this.bottomdec_06);

        this.bottom_01 = game.add.sprite(266, 415, 'bottom_0' + Main.bar_arr[3]);
        this.bottom_01.anchor.setTo(0.5);
        this.bottom_01.scale.setTo(0.85);
        this.bottom_01.alpha = 0;
        this.barbie_group.add(this.bottom_01);



        this.bottom1_top = game.add.sprite(266, 526, 'bottom1_top' + Main.bar_arr[4]);
        this.bottom1_top.anchor.setTo(0.5);
        this.bottom1_top.scale.setTo(0.85);
        this.bottom1_top.alpha = 0;
        this.barbie_group.add(this.bottom1_top);

        this.bottom2_top = game.add.sprite(266, 515, 'bottom2_top' + Main.bar_arr[4]);
        this.bottom2_top.anchor.setTo(0.5);
        this.bottom2_top.scale.setTo(0.85);
        this.bottom2_top.alpha = 0;
        this.barbie_group.add(this.bottom2_top);

        this.bottom3_top = game.add.sprite(264, 528, 'bottom3_top' + Main.bar_arr[4]);
        this.bottom3_top.anchor.setTo(0.5);
        this.bottom3_top.scale.setTo(0.85);
        this.bottom3_top.alpha = 0;
        this.barbie_group.add(this.bottom3_top);

        this.bottom4_top = game.add.sprite(266, 525, 'bottom4_top' + Main.bar_arr[4]);
        this.bottom4_top.anchor.setTo(0.5);
        this.bottom4_top.scale.setTo(0.85);
        this.bottom4_top.alpha = 0;
        this.barbie_group.add(this.bottom4_top);

        this.bottom5_top = game.add.sprite(266, 516, 'bottom5_top' + Main.bar_arr[4]);
        this.bottom5_top.anchor.setTo(0.5);
        this.bottom5_top.scale.setTo(0.85);
        this.bottom5_top.alpha = 0;
        this.barbie_group.add(this.bottom5_top);

        this.bottom6_top = game.add.sprite(265, 522, 'bottom6_top' + Main.bar_arr[4]);
        this.bottom6_top.anchor.setTo(0.5);
        this.bottom6_top.scale.setTo(0.85);
        this.bottom6_top.alpha = 0;
        this.barbie_group.add(this.bottom6_top);

        this.knife_ani1 = game.add.sprite(295, 382, 'knife_ani');
        this.knife_ani1.anchor.setTo(0.5);
        this.knife_ani1.scale.setTo(0.9);
        this.knife_ani1.frame = 10;
        this.barbie_group.add(this.knife_ani1);

        this.h_hand = game.add.sprite(269, 335, 'h_hand' + Main.bar_arr[1]);
        this.h_hand.anchor.setTo(0.5);
        this.h_hand.alpha = 0;
        this.barbie_group.add(this.h_hand);

        this.pose_1 = game.add.sprite(269, 335, 'pose_' + Main.bar_arr[1]);
        this.pose_1.anchor.setTo(0.5);
        this.pose_1.alpha = 0;
        this.barbie_group.add(this.pose_1);

        this.top_01 = game.add.sprite(281.85, 289.85, 'top_0' + Main.bar_arr[2]);
        this.top_01.anchor.setTo(0.5);
        this.top_01.alpha = 0;
        this.barbie_group.add(this.top_01);

        this.pf_hand = game.add.sprite(269, 335, 'pf_hand' + Main.bar_arr[1]);
        this.pf_hand.anchor.setTo(0.5);
        this.pf_hand.alpha = 0;
        this.barbie_group.add(this.pf_hand);

        this.barbie_hair01 = game.add.sprite(273, 252, 'barbie_hair0' + Main.bar_arr[0]);
        this.barbie_hair01.anchor.setTo(0.5);
        this.barbie_hair01.scale.setTo(0.92);
        this.barbie_group.add(this.barbie_hair01);

        // this.barbie_group.scale.setTo(0.9)



        this.needle_ani_1 = game.add.sprite(339, 457, 'needle_ani');
        this.needle_ani_1.anchor.setTo(0.5);
        this.needle_ani_1.scale.setTo(0.93);
        this.needle_ani_1.frame = 10;
        this.needle_ani_1.visible = true;
        this.barbie_group.add(this.needle_ani_1);

        // this.needle_ani_1.visible=false;
        // this.knife_ani1.visible=false;
        // this.bottom_01.visible=false;

        //////////////////////////////


        this.panel_group = game.add.group();
        this.count1 = 1;
        this.icon0004 = game.add.sprite(459, 215, 'icon0004');
        this.icon0004.anchor.setTo(0.5);
        this.icon0004.inputEnabled = true;
        this.icon0004.input.useHandCursor = true;
        this.icon0004.events.onInputDown.add(function() {
            // this.final_barbie_01.visible =false;
            this.barbie_hair01.alpha = 1;
            this.back_hair01.alpha = 1;
            this.pose_01.alpha = 1;
            this.pose_01.alpha = 1;
            this.head.alpha = 1;

            this.count1++;
            this.barbie_hair01.alpha = 1;
            this.back_hair01.alpha = 1;
            this.barbie_hair01.loadTexture('barbie_hair0' + this.count1);
            this.back_hair01.loadTexture('back_hair0' + this.count1);
            Main.bar_arr[0] = this.count1;
            if (this.count1 >= 6) {
                this.count1 = 0;
            }
            this.ch1_i[0] = 1;

            if (this.ch1_i.indexOf(0) < 0) {
                game.add.tween(this.playbtn.scale).to({
                    x: 0.9,
                    y: 0.9
                }, 800, Phaser.Easing.Quadratic.Out, true);
            }
            effectssd = game.add.sprite(game.world.width / 2, game.world.height / 4, 'effectssd');
            effectssd.anchor.setTo(0.5);
            effectssd.animations.add('effectssd');
            effectssd.animations.play('effectssd', 20, false).onComplete.add(function(evt) {
                evt.destroy();
            }, this);
        }, this);
        this.panel_group.add(this.icon0004);

        this.count2 = 0;
        this.icon0002 = game.add.sprite(459, 305, 'icon0002');
        this.icon0002.anchor.setTo(0.5);
        this.icon0002.inputEnabled = true;
        this.icon0002.input.useHandCursor = true;
        this.icon0002.events.onInputDown.add(function() {
            // this.final_barbie_01.visible =false;
            this.barbie_group.visible = true;
            this.barbie_hair01.alpha = 1;
            this.back_hair01.alpha = 1;
            this.count2++;
            this.pose_1.alpha = 1;
            this.pf_hand.alpha = 1;
            // this.h_hand.alpha=1;
            this.pf_hand.loadTexture('pf_hand' + this.count2);
            // this.h_hand.loadTexture('h_hand'+this.count2);        
            this.pose_01.loadTexture('pose_0' + this.count2);
            this.pose_1.loadTexture('pose_' + this.count2);
            Main.bar_arr[1] = this.count2;
            if (this.count2 >= 6) {
                this.count2 = 0;
            }


            this.ch1_i[1] = 1;

            if (this.ch1_i.indexOf(0) < 0) {
                game.add.tween(this.playbtn.scale).to({
                    x: 0.9,
                    y: 0.9
                }, 800, Phaser.Easing.Quadratic.Out, true);
            }
            effectssd = game.add.sprite(game.world.width / 2, game.world.height / 4, 'effectssd');
            effectssd.anchor.setTo(0.5);
            effectssd.animations.add('effectssd');
            effectssd.animations.play('effectssd', 20, false).onComplete.add(function(evt) {
                evt.destroy();
            }, this);
        }, this);
        this.panel_group.add(this.icon0002);


        this.count3 = 0;
        this.icon0003 = game.add.sprite(459, 395, 'icon0003');
        this.icon0003.anchor.setTo(0.5);
        this.icon0003.inputEnabled = true;
        this.icon0003.input.useHandCursor = true;
        this.icon0003.events.onInputDown.add(function() {
            // this.final_barbie_01.visible =false;
            this.barbie_group.visible = true;
            this.barbie_hair01.alpha = 1;
            this.back_hair01.alpha = 1;
            this.pose_01.alpha = 1;
            this.top_01.alpha = 1;
            this.new_dress.visible = false;


            this.count3++;
            this.top_01.loadTexture('top_0' + this.count3);
            Main.bar_arr[2] = this.count3;
            if (this.count3 >= 6) {
                this.count3 = 0;
            }
            this.ch1_i[2] = 1;

            if (this.ch1_i.indexOf(0) < 0) {
                game.add.tween(this.playbtn.scale).to({
                    x: 0.9,
                    y: 0.9
                }, 800, Phaser.Easing.Quadratic.Out, true);

            }
            effectssd = game.add.sprite(game.world.width / 2, game.world.height / 3.7, 'effectssd');
            effectssd.anchor.setTo(0.5);
            effectssd.animations.add('effectssd');
            effectssd.animations.play('effectssd', 20, false).onComplete.add(function(evt) {
                evt.destroy();
            }, this);

        }, this);

        this.panel_group.add(this.icon0003);


        this.count4 = 0;
        this.icon0001 = game.add.sprite(459, 485, 'icon0001');
        this.icon0001.anchor.setTo(0.5);
        this.icon0001.inputEnabled = true;
        this.icon0001.input.useHandCursor = true;
        this.icon0001.events.onInputDown.add(function() {
            this.icon0005.inputEnabled = true;
            this.icon0005.input.useHandCursor = true;
            // this.final_barbie_01.visible =false;
            this.barbie_group.visible = true;
            this.barbie_hair01.alpha = 1;
            this.back_hair01.alpha = 1;
            this.pose_01.alpha = 1;
            this.top_01.alpha = 1;
            this.bottom_01.alpha = 1;
            // this.knife_ani.visible=false;
            this.new_dress.visible = false;
            // this.cream_ani.visible=false;	
            // this.cut_ani.visible=false;
            this.knife_ani1.visible = false;
            this.needle_ani_1.scale.setTo(1);
            this.needle_ani_1.x = 345;
            this.needle_ani_1.y = 457;
            this.count4++;
            this.bottom_01.loadTexture('bottom_0' + this.count4);

            Main.bar_arr[3] = this.count4;
            if (this.count4 >= 6) {
                this.count4 = 0;
            }

            if (Main.bar_arr[3] == 1) {
                this.bottomdec_01.visible = true;
                this.bottomdec_02.visible = false;
                this.bottomdec_03.visible = false;
                this.bottomdec_04.visible = false;
                this.bottomdec_05.visible = false;
                this.bottomdec_06.visible = false;

                this.bottom1_top.visible = true;
                this.bottom2_top.visible = false;
                this.bottom3_top.visible = false;
                this.bottom4_top.visible = false;
                this.bottom5_top.visible = false;
                this.bottom6_top.visible = false;

            }
            if (Main.bar_arr[3] == 2) {
                this.bottomdec_01.visible = false;
                this.bottomdec_02.visible = true;
                this.bottomdec_03.visible = false;
                this.bottomdec_04.visible = false;
                this.bottomdec_05.visible = false;
                this.bottomdec_06.visible = false;

                this.bottom1_top.visible = false;
                this.bottom2_top.visible = true;
                this.bottom3_top.visible = false;
                this.bottom4_top.visible = false;
                this.bottom5_top.visible = false;
                this.bottom6_top.visible = false;
            }
            if (Main.bar_arr[3] == 3) {
                this.bottomdec_01.visible = false;
                this.bottomdec_02.visible = false;
                this.bottomdec_03.visible = true;
                this.bottomdec_04.visible = false;
                this.bottomdec_05.visible = false;
                this.bottomdec_06.visible = false;

                this.bottom1_top.visible = false;
                this.bottom2_top.visible = false;
                this.bottom3_top.visible = true;
                this.bottom4_top.visible = false;
                this.bottom5_top.visible = false;
                this.bottom6_top.visible = false;
            }
            if (Main.bar_arr[3] == 4) {
                this.bottomdec_01.visible = false;
                this.bottomdec_02.visible = false;
                this.bottomdec_03.visible = false;
                this.bottomdec_04.visible = true;
                this.bottomdec_05.visible = false;
                this.bottomdec_06.visible = false;

                this.bottom1_top.visible = false;
                this.bottom2_top.visible = false;
                this.bottom3_top.visible = false;
                this.bottom4_top.visible = true;
                this.bottom5_top.visible = false;
                this.bottom6_top.visible = false;
            }
            if (Main.bar_arr[3] == 5) {
                this.bottomdec_01.visible = false;
                this.bottomdec_02.visible = false;
                this.bottomdec_03.visible = false;
                this.bottomdec_04.visible = false;
                this.bottomdec_05.visible = true;
                this.bottomdec_06.visible = false;

                this.bottom1_top.visible = false;
                this.bottom2_top.visible = false;
                this.bottom3_top.visible = false;
                this.bottom4_top.visible = false;
                this.bottom5_top.visible = true;
                this.bottom6_top.visible = false;

            }
            if (Main.bar_arr[3] == 6) {
                this.bottomdec_01.visible = false;
                this.bottomdec_02.visible = false;
                this.bottomdec_03.visible = false;
                this.bottomdec_04.visible = false;
                this.bottomdec_05.visible = false;
                this.bottomdec_06.visible = true;

                this.bottom1_top.visible = false;
                this.bottom2_top.visible = false;
                this.bottom3_top.visible = false;
                this.bottom4_top.visible = false;
                this.bottom5_top.visible = false;
                this.bottom6_top.visible = true;
            }

            this.ch1_i[3] = 1;

            if (this.ch1_i.indexOf(0) < 0) {
                game.add.tween(this.playbtn.scale).to({
                    x: 0.9,
                    y: 0.9
                }, 800, Phaser.Easing.Quadratic.Out, true);

            }
            effectssd = game.add.sprite(game.world.width / 2, game.world.height / 2, 'effectssd');
            effectssd.anchor.setTo(0.5);
            effectssd.animations.add('effectssd');
            effectssd.animations.play('effectssd', 20, false).onComplete.add(function(evt) {
                evt.destroy();
            }, this);

        }, this);

        this.panel_group.add(this.icon0001);

        this.count5 = 0;
        this.icon0005 = game.add.sprite(459, 575, 'icon0005');
        this.icon0005.anchor.setTo(0.5);
        this.icon0005.scale.setTo(0.7);
        // this.icon0005.inputEnabled =true;
        // this.icon0005.input.useHandCursor =true;
        this.icon0005.events.onInputDown.add(function() {
            // this.final_barbie_01.visible =false;
            this.barbie_group.visible = true;
            this.barbie_hair01.alpha = 1;
            this.back_hair01.alpha = 1;
            this.pose_01.alpha = 1;
            this.top_01.alpha = 1;
            this.bottom_01.alpha = 1;
            this.bottomdec_01.alpha = 1;
            this.bottomdec_02.alpha = 1;
            this.bottomdec_03.alpha = 1;
            this.bottomdec_04.alpha = 1;
            this.bottomdec_05.alpha = 1;
            this.bottomdec_06.alpha = 1;
            this.bottom1_top.alpha = 1;
            this.bottom2_top.alpha = 1;
            this.bottom3_top.alpha = 1;
            this.bottom4_top.alpha = 1;
            this.bottom5_top.alpha = 1;
            this.bottom6_top.alpha = 1;
            this.new_dress.visible = false;
            this.knife_ani1.visible = false;
            this.needle_ani_1.visible = false;
            this.barbie_group.y = -60;

            this.count5++;

            Main.bar_arr[4] = this.count5;
            if (this.count5 >= 6) {
                this.count5 = 1;
            }

            this.bottomdec_01.loadTexture('bottom_01dec_01_' + this.count5);
            this.bottomdec_02.loadTexture('bottom_01dec_02_' + this.count5);
            this.bottomdec_03.loadTexture('bottom_01dec_03_' + this.count5);
            this.bottomdec_04.loadTexture('bottom_01dec_04_' + this.count5);
            this.bottomdec_05.loadTexture('bottom_01dec_05_' + this.count5);
            this.bottomdec_06.loadTexture('bottom_01dec_06_' + this.count5);
            this.bottom1_top.loadTexture('bottom1_top' + this.count5);
            this.bottom2_top.loadTexture('bottom2_top' + this.count5);
            this.bottom3_top.loadTexture('bottom3_top' + this.count5);
            this.bottom4_top.loadTexture('bottom4_top' + this.count5);
            this.bottom5_top.loadTexture('bottom5_top' + this.count5);
            this.bottom6_top.loadTexture('bottom6_top' + this.count5);

            if (Main.bar_arr[3] == 1) {
                this.bottomdec_01.visible = true;
                this.bottomdec_02.visible = false;
                this.bottomdec_03.visible = false;
                this.bottomdec_04.visible = false;
                this.bottomdec_05.visible = false;
                this.bottomdec_06.visible = false;

                this.bottom1_top.visible = true;
                this.bottom2_top.visible = false;
                this.bottom3_top.visible = false;
                this.bottom4_top.visible = false;
                this.bottom5_top.visible = false;
                this.bottom6_top.visible = false;

            }
            if (Main.bar_arr[3] == 2) {
                this.bottomdec_01.visible = false;
                this.bottomdec_02.visible = true;
                this.bottomdec_03.visible = false;
                this.bottomdec_04.visible = false;
                this.bottomdec_05.visible = false;
                this.bottomdec_06.visible = false;

                this.bottom1_top.visible = false;
                this.bottom2_top.visible = true;
                this.bottom3_top.visible = false;
                this.bottom4_top.visible = false;
                this.bottom5_top.visible = false;
                this.bottom6_top.visible = false;
            }
            if (Main.bar_arr[3] == 3) {
                this.bottomdec_01.visible = false;
                this.bottomdec_02.visible = false;
                this.bottomdec_03.visible = true;
                this.bottomdec_04.visible = false;
                this.bottomdec_05.visible = false;
                this.bottomdec_06.visible = false;

                this.bottom1_top.visible = false;
                this.bottom2_top.visible = false;
                this.bottom3_top.visible = true;
                this.bottom4_top.visible = false;
                this.bottom5_top.visible = false;
                this.bottom6_top.visible = false;
            }
            if (Main.bar_arr[3] == 4) {
                this.bottomdec_01.visible = false;
                this.bottomdec_02.visible = false;
                this.bottomdec_03.visible = false;
                this.bottomdec_04.visible = true;
                this.bottomdec_05.visible = false;
                this.bottomdec_06.visible = false;

                this.bottom1_top.visible = false;
                this.bottom2_top.visible = false;
                this.bottom3_top.visible = false;
                this.bottom4_top.visible = true;
                this.bottom5_top.visible = false;
                this.bottom6_top.visible = false;
            }
            if (Main.bar_arr[3] == 5) {
                this.bottomdec_01.visible = false;
                this.bottomdec_02.visible = false;
                this.bottomdec_03.visible = false;
                this.bottomdec_04.visible = false;
                this.bottomdec_05.visible = true;
                this.bottomdec_06.visible = false;

                this.bottom1_top.visible = false;
                this.bottom2_top.visible = false;
                this.bottom3_top.visible = false;
                this.bottom4_top.visible = false;
                this.bottom5_top.visible = true;
                this.bottom6_top.visible = false;

            }
            if (Main.bar_arr[3] == 6) {
                this.bottomdec_01.visible = false;
                this.bottomdec_02.visible = false;
                this.bottomdec_03.visible = false;
                this.bottomdec_04.visible = false;
                this.bottomdec_05.visible = false;
                this.bottomdec_06.visible = true;

                this.bottom1_top.visible = false;
                this.bottom2_top.visible = false;
                this.bottom3_top.visible = false;
                this.bottom4_top.visible = false;
                this.bottom5_top.visible = false;
                this.bottom6_top.visible = true;
            }

            this.ch1_i[4] = 1;

            if (this.ch1_i.indexOf(0) < 0) {
                game.add.tween(this.playbtn.scale).to({
                    x: 0.9,
                    y: 0.9
                }, 800, Phaser.Easing.Quadratic.Out, true);

            }

            effectssd = game.add.sprite(game.world.width / 2, game.world.height / 1.7, 'effectssd');
            effectssd.anchor.setTo(0.5);
            effectssd.animations.add('effectssd');
            effectssd.animations.play('effectssd', 20, false).onComplete.add(function(evt) {
                evt.destroy();
            }, this);
        }, this);
        this.panel_group.add(this.icon0005);

        this.ch1_i = [0, 0, 0, 0, 0];


        ///////////////////////////////////////////////


        // this.mcnt1=0;
        //  this.mcir = game.add.graphics(0,0);
        //  this.mcir.beginFill(0x666666,0);
        //  this.mcir.drawRect(0,0,504,800);
        //  this.mcir.inputEnabled=true;
        //  this.mcir.events.onInputDown.add(function(){
        //  this.mcnt1++;
        //  this['xcnt'+this.mcnt1]=game.input.activePointer.x;
        //  this['ycnt'+this.mcnt1]=game.input.activePointer.y;
        //  this.mcir = game.add.graphics(game.input.activePointer.x,game.input.activePointer.y);
        //  this.mcir.beginFill(0x000000,0.5);
        //  this.mcir.drawCircle(0,0,5);
        //  console.log(this['xcnt'+this.mcnt1]+':'+this['ycnt'+this.mcnt1]);
        //  //console.log(this['ycnt'+this.mcnt1]);
        //  },this);
        ///////////////////////////////////////////////

        this.morebtn = game.add.sprite(65, 740, 'more');
        this.morebtn.anchor.setTo(0.5);
        this.morebtn.scale.setTo(0.9);
        this.morebtn.inputEnabled = true;
        this.morebtn.input.useHandCursor = true;
        this.morebtn.events.onInputUp.add(this.moreLink, this);
        this.morebtn.events.onInputOver.add(this.btnOver, this);
        this.morebtn.events.onInputOut.add(this.btnOut, this);
        // this.levelGroup.add(this.morebtn);


        this.playbtn = game.add.sprite(430, 730, 'correct');
        this.playbtn.anchor.setTo(0.5);
        this.playbtn.scale.setTo(0);
        this.playbtn.inputEnabled = true;
        this.playbtn.input.useHandCursor = true;
        this.playbtn.events.onInputUp.add(this.enterRoom, this);
        this.playbtn.events.onInputOver.add(this.btnOver, this);
        this.playbtn.events.onInputOut.add(this.btnOut, this);
        // this.levelGroup.add(this.playbtn);


        if (Main.shutterOn[0]) {
            this.shutter = game.add.sprite(0, 0, 'download');
            game.add.tween(this.shutter).to({
                y: -850
            }, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {}, this);
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
    update: function() {
        // console.log(game.input.activePointer.x+'====='+game.input.activePointer.y); 

        if (this.dummydrag) {
            this.dummy.x = game.input.activePointer.x;
            this.dummy.y = game.input.activePointer.y;
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
        // YYGSDK.navigate("game","logo");
    },
    moreLink: function() {
        // YYGSDK.navigate("game","morebutton");
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
            MyShowAD('gift');
        });

    },

}
//iiiiiii

Main.final_screen = function() {}

Main.final_screen.prototype = {
    create: function() {
        // Main.bar_arr[2]
        //console.log(Main.bar_arr[0])
        //console.log(Main.bar_arr[1])
        //console.log(Main.bar_arr[2])
        //console.log(Main.bar_arr[3])

        this.introbg = game.add.sprite(0, 0, 'introbg');

        this.introtvlight = game.add.sprite(424.50, 229.50, 'introtvlight');
        this.introtvlight.anchor.setTo(0.5);

        this.introspeaker = game.add.sprite(475.50, 342.50, 'introspeaker');
        this.introspeaker.anchor.setTo(0.5);



        this.introtv = game.add.sprite(424.75, 236.50, 'introtv');
        this.introtv.anchor.setTo(0.5);
        // this.introtv.animations.add('introtv');
        // this.introtv.animations.play('introtv',1,true);

        this.dgroup = game.add.group();

        this.body = game.add.sprite(274.25, 513.85, 'body');
        this.body.anchor.setTo(0.5);
        this.dgroup.add(this.body);

        this.face = game.add.sprite(268.75, 320.45, 'face');
        this.face.anchor.setTo(0.5);
        this.dgroup.add(this.face);

        this.taylorshoe1 = game.add.sprite(277.90, 647.55, 'taylorshoe2');
        this.taylorshoe1.anchor.setTo(0.5);
        this.taylorshoe1.scale.setTo(0.6);
        this.dgroup.add(this.taylorshoe1);

        this.taylordress_1 = game.add.sprite(278, 521, 'taylordress10001');
        this.taylordress_1.anchor.setTo(0.5);
        this.dgroup.add(this.taylordress_1);

        this.hand = game.add.sprite(277, 520, 'hand');
        this.hand.anchor.setTo(0.5);
        this.dgroup.add(this.hand)

        this.taylordress1 = game.add.sprite(280, 517, 'taylordress1');
        this.taylordress1.anchor.setTo(0.5);
        this.taylordress1.visible = false;
        this.dgroup.add(this.taylordress1);

        this.taylornecklace1 = game.add.sprite(271.50, 396.85, 'taylornecklace1');
        this.taylornecklace1.anchor.setTo(0.5);
        this.dgroup.add(this.taylornecklace1);

        this.taylorearning = game.add.sprite(270.30, 354, 'taylorearning');
        this.taylorearning.anchor.setTo(0.5);
        this.dgroup.add(this.taylorearning);

        this.taylorhand = game.add.sprite(215.45, 414.50, 'taylorhand');
        this.taylorhand.anchor.setTo(0.5);
        this.dgroup.add(this.taylorhand);


        this.dgroup.x = -130;

        this.t_table = game.add.sprite(386.95, 712.55, 't_table');
        this.t_table.anchor.setTo(0.5);

        this.glass_1 = game.add.sprite(378.25, 500, 'glass_1');
        this.glass_1.anchor.setTo(0.5);
        this.glass_1.scale.setTo(0.6);

        this.glass_22 = game.add.sprite(378, 572, 'glass_22');
        this.glass_22.anchor.setTo(0.5);
        this.glass_22.scale.setTo(0.6);

        this.barbie_group = game.add.group();
        this.barbie_group.scale.setTo(0.5);
        this.barbie_group.x = 245;
        this.barbie_group.y = 320;

        this.back_hair01 = game.add.sprite(272, 254, 'back_hair0' + Main.bar_arr[0]);
        this.back_hair01.anchor.setTo(0.5);
        this.back_hair01.scale.setTo(0.92);
        //// this.back_hair01.alpha=0;     
        this.barbie_group.add(this.back_hair01);

        this.pose_01 = game.add.sprite(269.25, 335, 'pose_0' + Main.bar_arr[1]);
        this.pose_01.anchor.setTo(0.5);
        //// this.pose_01.alpha=0;
        this.barbie_group.add(this.pose_01);

        this.new_dress = game.add.sprite(270, 315, 'new_dress');
        this.new_dress.anchor.setTo(0.5);
        this.new_dress.scale.setTo(1.65);
        this.barbie_group.add(this.new_dress);


        this.head = game.add.sprite(269, 230, 'head');
        this.head.anchor.setTo(0.5);
        this.barbie_group.add(this.head);

        this.bottomdec_01 = game.add.sprite(264, 505, 'bottom_01dec_01_' + Main.bar_arr[4]);
        this.bottomdec_01.anchor.setTo(0.5);
        this.bottomdec_01.scale.setTo(0.85);
        //this.bottomdec_01.alpha=0;
        this.barbie_group.add(this.bottomdec_01);

        this.bottomdec_02 = game.add.sprite(264, 494, 'bottom_01dec_02_' + Main.bar_arr[4]);
        this.bottomdec_02.anchor.setTo(0.5);
        this.bottomdec_02.scale.setTo(0.85);
        //this.bottomdec_02.alpha=0;
        this.barbie_group.add(this.bottomdec_02);

        this.bottomdec_03 = game.add.sprite(262, 507, 'bottom_01dec_03_' + Main.bar_arr[4]);
        this.bottomdec_03.anchor.setTo(0.5);
        this.bottomdec_03.scale.setTo(0.85);
        //this.bottomdec_03.alpha=0;
        this.barbie_group.add(this.bottomdec_03);

        this.bottomdec_04 = game.add.sprite(264, 504, 'bottom_01dec_04_' + Main.bar_arr[4]);
        this.bottomdec_04.anchor.setTo(0.5);
        this.bottomdec_04.scale.setTo(0.85);
        //this.bottomdec_04.alpha=0;
        this.barbie_group.add(this.bottomdec_04);

        this.bottomdec_05 = game.add.sprite(264, 495, 'bottom_01dec_05_' + Main.bar_arr[4]);
        this.bottomdec_05.anchor.setTo(0.5);
        this.bottomdec_05.scale.setTo(0.85);
        //this.bottomdec_05.alpha=0;
        this.barbie_group.add(this.bottomdec_05);

        this.bottomdec_06 = game.add.sprite(263, 501, 'bottom_01dec_06_' + Main.bar_arr[4]);
        this.bottomdec_06.anchor.setTo(0.5);
        this.bottomdec_06.scale.setTo(0.85);
        //this.bottomdec_06.alpha=0;
        this.barbie_group.add(this.bottomdec_06);

        this.bottom_01 = game.add.sprite(266, 415, 'bottom_0' + Main.bar_arr[3]);
        this.bottom_01.anchor.setTo(0.5);
        this.bottom_01.scale.setTo(0.85);
        //this.bottom_01.alpha=0;
        this.barbie_group.add(this.bottom_01);



        this.bottom1_top = game.add.sprite(266, 526, 'bottom1_top' + Main.bar_arr[4]);
        this.bottom1_top.anchor.setTo(0.5);
        this.bottom1_top.scale.setTo(0.85);
        //this.bottom1_top.alpha=0;
        this.barbie_group.add(this.bottom1_top);

        this.bottom2_top = game.add.sprite(266, 515, 'bottom2_top' + Main.bar_arr[4]);
        this.bottom2_top.anchor.setTo(0.5);
        this.bottom2_top.scale.setTo(0.85);
        //this.bottom2_top.alpha=0;
        this.barbie_group.add(this.bottom2_top);

        this.bottom3_top = game.add.sprite(264, 528, 'bottom3_top' + Main.bar_arr[4]);
        this.bottom3_top.anchor.setTo(0.5);
        this.bottom3_top.scale.setTo(0.85);
        //this.bottom3_top.alpha=0;
        this.barbie_group.add(this.bottom3_top);

        this.bottom4_top = game.add.sprite(266, 525, 'bottom4_top' + Main.bar_arr[4]);
        this.bottom4_top.anchor.setTo(0.5);
        this.bottom4_top.scale.setTo(0.85);
        //this.bottom4_top.alpha=0;
        this.barbie_group.add(this.bottom4_top);

        this.bottom5_top = game.add.sprite(266, 516, 'bottom5_top' + Main.bar_arr[4]);
        this.bottom5_top.anchor.setTo(0.5);
        this.bottom5_top.scale.setTo(0.85);
        //this.bottom5_top.alpha=0;
        this.barbie_group.add(this.bottom5_top);

        this.bottom6_top = game.add.sprite(265, 522, 'bottom6_top' + Main.bar_arr[4]);
        this.bottom6_top.anchor.setTo(0.5);
        this.bottom6_top.scale.setTo(0.85);
        //this.bottom6_top.alpha=0;
        this.barbie_group.add(this.bottom6_top);

        this.h_hand = game.add.sprite(269, 335, 'h_hand' + Main.bar_arr[1]);
        this.h_hand.anchor.setTo(0.5);
        //this.h_hand.alpha=0;
        this.barbie_group.add(this.h_hand);

        this.pose_1 = game.add.sprite(269, 335, 'pose_' + Main.bar_arr[1]);
        this.pose_1.anchor.setTo(0.5);
        //this.pose_1.alpha=0;
        this.barbie_group.add(this.pose_1);

        this.top_01 = game.add.sprite(281.85, 289.85, 'top_0' + Main.bar_arr[2]);
        this.top_01.anchor.setTo(0.5);
        //this.top_01.alpha=0;
        this.barbie_group.add(this.top_01);

        this.pf_hand = game.add.sprite(269, 335, 'pf_hand' + Main.bar_arr[1]);
        this.pf_hand.anchor.setTo(0.5);
        //this.pf_hand.alpha=0;
        this.barbie_group.add(this.pf_hand);

        this.barbie_hair01 = game.add.sprite(273, 252, 'barbie_hair0' + Main.bar_arr[0]);
        this.barbie_hair01.anchor.setTo(0.5);
        this.barbie_hair01.scale.setTo(0.92);
        this.barbie_group.add(this.barbie_hair01);

        this.glass_2 = game.add.sprite(378, 572, 'glass_2');
        this.glass_2.anchor.setTo(0.5);
        this.glass_2.scale.setTo(0.6);

        this.lid = game.add.sprite(360, 385, 'lid');
        this.lid.anchor.setTo(0.5);
        this.lid.scale.setTo(0.6);
        this.lid.visible = true;

        this.ribbon = game.add.sprite(376, 382, 'ribbon');
        this.ribbon.anchor.setTo(0.5);
        this.ribbon.scale.setTo(0.6);
        this.ribbon.visible = true;


        //  this.g1_group = game.add.group();

        // this.glass_1 = game.add.sprite(378.25,540,'glass_1');
        // this.glass_1.anchor.setTo(0.5);
        // this.glass_1.scale.setTo(0.6);
        // this.g1_group.add(this.glass_1);

        // this.back_hair01 = game.add.sprite(380,470,'back_hair0'+Main.bar_arr[0]);
        // this.back_hair01.anchor.setTo(0.5);     
        // this.back_hair01.scale.setTo(0.65);     
        // this.g1_group.add(this.back_hair01);

        // this.pose_01 = game.add.sprite(380,530,'pose_0'+Main.bar_arr[1]);
        // this.pose_01.anchor.setTo(0.5);
        // this.pose_01.scale.setTo(0.65);
        // this.g1_group.add(this.pose_01);

        // this.head = game.add.sprite(382,458,'head');
        // this.head.anchor.setTo(0.5);
        // this.head.scale.setTo(0.65);
        // this.g1_group.add(this.head);

        // this.pose_1 = game.add.sprite(269,335,'pose_'+Main.bar_arr[1]);
        // this.pose_1.anchor.setTo(0.5);
        // this.pose_1.alpha=0;
        // this.g1_group.add(this.pose_1); 

        // this.top_01 = game.add.sprite(388,500,'top_0'+Main.bar_arr[2]);
        // this.top_01.anchor.setTo(0.5);
        // this.top_01.scale.setTo(0.65);
        // this.g1_group.add(this.top_01);

        // this.barbie_hair01 = game.add.sprite(383,470,'barbie_hair0'+Main.bar_arr[0]);
        // this.barbie_hair01.anchor.setTo(0.5);
        // this.barbie_hair01.scale.setTo(0.65);
        // this.g1_group.add(this.barbie_hair01);

        // this.bottom_01 = game.add.sprite(380,575,'bottom_0'+Main.bar_arr[3]);
        // this.bottom_01.anchor.setTo(0.5);
        // this.bottom_01.scale.setTo(0.65);
        // this.g1_group.add(this.bottom_01);

        // this.bottomdec_01 = game.add.sprite(380,620,'bottomdec_0'+Main.bar_arr[4]);
        // this.bottomdec_01.anchor.setTo(0.5);
        // this.bottomdec_01.scale.setTo(0.65);
        // this.g1_group.add(this.bottomdec_01);

        // this.glass_2 = game.add.sprite(378,572,'glass_2');
        // this.glass_2.anchor.setTo(0.5);
        // this.glass_2.scale.setTo(0.6);
        // this.g1_group.add(this.glass_2);

        // this.lid = game.add.sprite(360,415,'lid');
        // this.lid.anchor.setTo(0.5);
        // this.lid.scale.setTo(0.6);
        // this.g1_group.add(this.lid);

        // this.ribbon = game.add.sprite(375,413,'ribbon');
        // this.ribbon.anchor.setTo(0.5);
        // this.ribbon.scale.setTo(0.6);
        // this.g1_group.add(this.ribbon );

        //    this.g1_group.scale.setTo(0.9);
        //   this.g1_group.x=30;
        //   this.g1_group.y=35;

        if (Main.bar_arr[3] == 1) {
            this.bottomdec_01.visible = true;
            this.bottomdec_02.visible = false;
            this.bottomdec_03.visible = false;
            this.bottomdec_04.visible = false;
            this.bottomdec_05.visible = false;
            this.bottomdec_06.visible = false;

            this.bottom1_top.visible = true;
            this.bottom2_top.visible = false;
            this.bottom3_top.visible = false;
            this.bottom4_top.visible = false;
            this.bottom5_top.visible = false;
            this.bottom6_top.visible = false;

        }
        if (Main.bar_arr[3] == 2) {
            this.bottomdec_01.visible = false;
            this.bottomdec_02.visible = true;
            this.bottomdec_03.visible = false;
            this.bottomdec_04.visible = false;
            this.bottomdec_05.visible = false;
            this.bottomdec_06.visible = false;

            this.bottom1_top.visible = false;
            this.bottom2_top.visible = true;
            this.bottom3_top.visible = false;
            this.bottom4_top.visible = false;
            this.bottom5_top.visible = false;
            this.bottom6_top.visible = false;
        }
        if (Main.bar_arr[3] == 3) {
            this.bottomdec_01.visible = false;
            this.bottomdec_02.visible = false;
            this.bottomdec_03.visible = true;
            this.bottomdec_04.visible = false;
            this.bottomdec_05.visible = false;
            this.bottomdec_06.visible = false;

            this.bottom1_top.visible = false;
            this.bottom2_top.visible = false;
            this.bottom3_top.visible = true;
            this.bottom4_top.visible = false;
            this.bottom5_top.visible = false;
            this.bottom6_top.visible = false;
        }
        if (Main.bar_arr[3] == 4) {
            this.bottomdec_01.visible = false;
            this.bottomdec_02.visible = false;
            this.bottomdec_03.visible = false;
            this.bottomdec_04.visible = true;
            this.bottomdec_05.visible = false;
            this.bottomdec_06.visible = false;

            this.bottom1_top.visible = false;
            this.bottom2_top.visible = false;
            this.bottom3_top.visible = false;
            this.bottom4_top.visible = true;
            this.bottom5_top.visible = false;
            this.bottom6_top.visible = false;
        }
        if (Main.bar_arr[3] == 5) {
            this.bottomdec_01.visible = false;
            this.bottomdec_02.visible = false;
            this.bottomdec_03.visible = false;
            this.bottomdec_04.visible = false;
            this.bottomdec_05.visible = true;
            this.bottomdec_06.visible = false;

            this.bottom1_top.visible = false;
            this.bottom2_top.visible = false;
            this.bottom3_top.visible = false;
            this.bottom4_top.visible = false;
            this.bottom5_top.visible = true;
            this.bottom6_top.visible = false;

        }
        if (Main.bar_arr[3] == 6) {
            this.bottomdec_01.visible = false;
            this.bottomdec_02.visible = false;
            this.bottomdec_03.visible = false;
            this.bottomdec_04.visible = false;
            this.bottomdec_05.visible = false;
            this.bottomdec_06.visible = true;

            this.bottom1_top.visible = false;
            this.bottom2_top.visible = false;
            this.bottom3_top.visible = false;
            this.bottom4_top.visible = false;
            this.bottom5_top.visible = false;
            this.bottom6_top.visible = true;
        }
        this.arrowgp = game.add.group();

        var arro2x = [250, 252, 245, 318, 414, 410, 710];
        var arro2y = [405, 500, 405, 538, 527, 130, 440];

        for (i = 1; i <= 60; i++) {
            this['arrow' + i] = game.add.sprite(arro2x[i - 1], arro2y[i - 1], 'arrow');
            this['arrow' + i].anchor.setTo(0.5);
            this['arrow' + i].animations.add('arrow');
            this['arrow' + i].animations.play('arrow', 15, true);
            this['arrow' + i].visible = false;
            if (i == 1) {
                this['arrow' + i].visible = false;
            }
            if (i == 2) {
                this['arrow' + i].visible = false;
            }
            if (i == 3) {
                this['arrow' + i].visible = false;
            }
            if (i == 4) {
                this['arrow' + i].visible = false;
            }
            if (i == 5) {
                this['arrow' + i].visible = false;
            }
            if (i == 6) {
                this['arrow' + i].visible = false;
            }
            this.arrowgp.add(this['arrow' + i]);

        }

        this.morebtn = game.add.sprite(65, 740, 'more');
        this.morebtn.anchor.setTo(0.5);
        this.morebtn.scale.setTo(0.9);
        this.morebtn.inputEnabled = true;
        this.morebtn.input.useHandCursor = true;
        this.morebtn.events.onInputUp.add(this.moreLink, this);
        this.morebtn.events.onInputOver.add(this.btnOver, this);
        this.morebtn.events.onInputOut.add(this.btnOut, this);

        this.playbtn = game.add.sprite(430, 730, 'reset');
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
            this.shutter = game.add.sprite(0, 0, 'download');
            game.add.tween(this.shutter).to({
                y: -850
            }, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                // game.add.tween(this.thumbGroup).to({y:0},700,Phaser.Easing.Quadratic.Out,true);
                game.add.tween(this.playbtn.scale).to({
                    x: 0.9,
                    y: 0.9
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

    update: function() {
        // //console.log(game.input.activePointer.x+':'+game.input.activePointer.y);
        if (this.dummydrag) {
            this.dummyobject.x = game.input.activePointer.x;
            this.dummyobject.y = game.input.activePointer.y;
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
        //YYGSDK.navigate("gameover","thumb",RelatedGames[this.randomId]['id']);
    },
    openLink: function() {
        // YYGSDK.navigate("gameover","logo");
    },
    moreLink: function() {
        // YYGSDK.navigate("gameover","more");
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
        Main.bar_arr = [1, 1, 1, 1, 1];
        game.add.tween(this.shutter).to({
            y: 0
        }, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
            MyShowAD('intro');
        });

    },
}


//ggg

Main.gift = function() {}

Main.gift.prototype = {
    create: function() {

        this.levelGroup = game.add.group();
        this.bb_g = game.add.sprite(0, 0, 'bb_g');
        this.levelGroup.add(this.bb_g);


        this.fridge = game.add.sprite(250, 295.6, 'fridge');
        this.fridge.anchor.setTo(0.5);

        this.fridge_door2 = game.add.sprite(348, 294.6, 'fridge_door2');
        this.fridge_door2.anchor.setTo(0.5);

        this.chimminey = game.add.sprite(53, 126.6, 'chimminey');
        this.chimminey.anchor.setTo(0.5);

        this.cuboard = game.add.sprite(113.6, 426.1, 'cuboard');
        this.cuboard.anchor.setTo(0.5);

        this.side_panel = game.add.sprite(493, 257.6, 'side_panel');
        this.side_panel.anchor.setTo(0.5);

        this.c_baby = game.add.sprite(180, 400, 'c_baby');
        this.c_baby.anchor.setTo(0.5);
        this.c_baby.x = -700;



        this.mom = game.add.sprite(350, 400, 'mom');
        this.mom.anchor.setTo(0.5);
        this.mom.x = 1000;

        this.child_txt = game.add.sprite(80, 180, 'child_txt');
        this.child_txt.anchor.setTo(0.5);
        this.child_txt.scale.setTo(0.8);
        this.child_txt.alpha = 0;

        this.mom_text = game.add.sprite(220, 100, 'mom_text');
        this.mom_text.anchor.setTo(0.5);
        this.mom_text.scale.setTo(0.7);
        this.mom_text.alpha = 0;


        this.cook1table = game.add.sprite(254.10, 656.65, 'cook1table');
        this.cook1table.anchor.setTo(0.5);


        this.glass_1 = game.add.sprite(378.25, 520, 'glass_1');
        this.glass_1.anchor.setTo(0.5);
        this.glass_1.scale.setTo(0.6);

        this.glass_22 = game.add.sprite(378, 572, 'glass_22');
        this.glass_22.anchor.setTo(0.5);
        this.glass_22.scale.setTo(0.6);


        //////////////////////////////////////////////////////////////////////////////////

        this.barbie_group = game.add.group();
        // this.barbie_group.x=-20;
        // this.barbie_group.y=-57;

        this.back_hair01 = game.add.sprite(272, 254, 'back_hair0' + Main.bar_arr[0]);
        this.back_hair01.anchor.setTo(0.5);
        this.back_hair01.scale.setTo(0.92);
        //// this.back_hair01.alpha=0;     
        this.barbie_group.add(this.back_hair01);

        this.pose_01 = game.add.sprite(269.25, 335, 'pose_0' + Main.bar_arr[1]);
        this.pose_01.anchor.setTo(0.5);
        //// this.pose_01.alpha=0;
        this.barbie_group.add(this.pose_01);

        this.new_dress = game.add.sprite(270, 315, 'new_dress');
        this.new_dress.anchor.setTo(0.5);
        this.new_dress.scale.setTo(1.65);
        this.barbie_group.add(this.new_dress);


        this.head = game.add.sprite(269, 230, 'head');
        this.head.anchor.setTo(0.5);
        this.barbie_group.add(this.head);

        this.bottomdec_01 = game.add.sprite(264, 505, 'bottom_01dec_01_' + Main.bar_arr[4]);
        this.bottomdec_01.anchor.setTo(0.5);
        this.bottomdec_01.scale.setTo(0.85);
        //this.bottomdec_01.alpha=0;
        this.barbie_group.add(this.bottomdec_01);

        this.bottomdec_02 = game.add.sprite(264, 494, 'bottom_01dec_02_' + Main.bar_arr[4]);
        this.bottomdec_02.anchor.setTo(0.5);
        this.bottomdec_02.scale.setTo(0.85);
        //this.bottomdec_02.alpha=0;
        this.barbie_group.add(this.bottomdec_02);

        this.bottomdec_03 = game.add.sprite(262, 507, 'bottom_01dec_03_' + Main.bar_arr[4]);
        this.bottomdec_03.anchor.setTo(0.5);
        this.bottomdec_03.scale.setTo(0.85);
        //this.bottomdec_03.alpha=0;
        this.barbie_group.add(this.bottomdec_03);

        this.bottomdec_04 = game.add.sprite(264, 504, 'bottom_01dec_04_' + Main.bar_arr[4]);
        this.bottomdec_04.anchor.setTo(0.5);
        this.bottomdec_04.scale.setTo(0.85);
        //this.bottomdec_04.alpha=0;
        this.barbie_group.add(this.bottomdec_04);

        this.bottomdec_05 = game.add.sprite(264, 495, 'bottom_01dec_05_' + Main.bar_arr[4]);
        this.bottomdec_05.anchor.setTo(0.5);
        this.bottomdec_05.scale.setTo(0.85);
        //this.bottomdec_05.alpha=0;
        this.barbie_group.add(this.bottomdec_05);

        this.bottomdec_06 = game.add.sprite(263, 501, 'bottom_01dec_06_' + Main.bar_arr[4]);
        this.bottomdec_06.anchor.setTo(0.5);
        this.bottomdec_06.scale.setTo(0.85);
        //this.bottomdec_06.alpha=0;
        this.barbie_group.add(this.bottomdec_06);

        this.bottom_01 = game.add.sprite(266, 415, 'bottom_0' + Main.bar_arr[3]);
        this.bottom_01.anchor.setTo(0.5);
        this.bottom_01.scale.setTo(0.85);
        //this.bottom_01.alpha=0;
        this.barbie_group.add(this.bottom_01);



        this.bottom1_top = game.add.sprite(266, 526, 'bottom1_top' + Main.bar_arr[4]);
        this.bottom1_top.anchor.setTo(0.5);
        this.bottom1_top.scale.setTo(0.85);
        //this.bottom1_top.alpha=0;
        this.barbie_group.add(this.bottom1_top);

        this.bottom2_top = game.add.sprite(266, 515, 'bottom2_top' + Main.bar_arr[4]);
        this.bottom2_top.anchor.setTo(0.5);
        this.bottom2_top.scale.setTo(0.85);
        //this.bottom2_top.alpha=0;
        this.barbie_group.add(this.bottom2_top);

        this.bottom3_top = game.add.sprite(264, 528, 'bottom3_top' + Main.bar_arr[4]);
        this.bottom3_top.anchor.setTo(0.5);
        this.bottom3_top.scale.setTo(0.85);
        //this.bottom3_top.alpha=0;
        this.barbie_group.add(this.bottom3_top);

        this.bottom4_top = game.add.sprite(266, 525, 'bottom4_top' + Main.bar_arr[4]);
        this.bottom4_top.anchor.setTo(0.5);
        this.bottom4_top.scale.setTo(0.85);
        //this.bottom4_top.alpha=0;
        this.barbie_group.add(this.bottom4_top);

        this.bottom5_top = game.add.sprite(266, 516, 'bottom5_top' + Main.bar_arr[4]);
        this.bottom5_top.anchor.setTo(0.5);
        this.bottom5_top.scale.setTo(0.85);
        //this.bottom5_top.alpha=0;
        this.barbie_group.add(this.bottom5_top);

        this.bottom6_top = game.add.sprite(265, 522, 'bottom6_top' + Main.bar_arr[4]);
        this.bottom6_top.anchor.setTo(0.5);
        this.bottom6_top.scale.setTo(0.85);
        //this.bottom6_top.alpha=0;
        this.barbie_group.add(this.bottom6_top);

        this.h_hand = game.add.sprite(269, 335, 'h_hand' + Main.bar_arr[1]);
        this.h_hand.anchor.setTo(0.5);
        //this.h_hand.alpha=0;
        this.barbie_group.add(this.h_hand);

        this.pose_1 = game.add.sprite(269, 335, 'pose_' + Main.bar_arr[1]);
        this.pose_1.anchor.setTo(0.5);
        //this.pose_1.alpha=0;
        this.barbie_group.add(this.pose_1);

        this.top_01 = game.add.sprite(281.85, 289.85, 'top_0' + Main.bar_arr[2]);
        this.top_01.anchor.setTo(0.5);
        //this.top_01.alpha=0;
        this.barbie_group.add(this.top_01);

        this.pf_hand = game.add.sprite(269, 335, 'pf_hand' + Main.bar_arr[1]);
        this.pf_hand.anchor.setTo(0.5);
        //this.pf_hand.alpha=0;
        this.barbie_group.add(this.pf_hand);

        this.barbie_hair01 = game.add.sprite(273, 252, 'barbie_hair0' + Main.bar_arr[0]);
        this.barbie_hair01.anchor.setTo(0.5);
        this.barbie_hair01.scale.setTo(0.92);
        this.barbie_group.add(this.barbie_hair01);



        //////////////////////////////////////////////////////////////////////////////////

        if (Main.bar_arr[3] == 1) {
            this.bottomdec_01.visible = true;
            this.bottomdec_02.visible = false;
            this.bottomdec_03.visible = false;
            this.bottomdec_04.visible = false;
            this.bottomdec_05.visible = false;
            this.bottomdec_06.visible = false;

            this.bottom1_top.visible = true;
            this.bottom2_top.visible = false;
            this.bottom3_top.visible = false;
            this.bottom4_top.visible = false;
            this.bottom5_top.visible = false;
            this.bottom6_top.visible = false;

        }
        if (Main.bar_arr[3] == 2) {
            this.bottomdec_01.visible = false;
            this.bottomdec_02.visible = true;
            this.bottomdec_03.visible = false;
            this.bottomdec_04.visible = false;
            this.bottomdec_05.visible = false;
            this.bottomdec_06.visible = false;

            this.bottom1_top.visible = false;
            this.bottom2_top.visible = true;
            this.bottom3_top.visible = false;
            this.bottom4_top.visible = false;
            this.bottom5_top.visible = false;
            this.bottom6_top.visible = false;
        }
        if (Main.bar_arr[3] == 3) {
            this.bottomdec_01.visible = false;
            this.bottomdec_02.visible = false;
            this.bottomdec_03.visible = true;
            this.bottomdec_04.visible = false;
            this.bottomdec_05.visible = false;
            this.bottomdec_06.visible = false;

            this.bottom1_top.visible = false;
            this.bottom2_top.visible = false;
            this.bottom3_top.visible = true;
            this.bottom4_top.visible = false;
            this.bottom5_top.visible = false;
            this.bottom6_top.visible = false;
        }
        if (Main.bar_arr[3] == 4) {
            this.bottomdec_01.visible = false;
            this.bottomdec_02.visible = false;
            this.bottomdec_03.visible = false;
            this.bottomdec_04.visible = true;
            this.bottomdec_05.visible = false;
            this.bottomdec_06.visible = false;

            this.bottom1_top.visible = false;
            this.bottom2_top.visible = false;
            this.bottom3_top.visible = false;
            this.bottom4_top.visible = true;
            this.bottom5_top.visible = false;
            this.bottom6_top.visible = false;
        }
        if (Main.bar_arr[3] == 5) {
            this.bottomdec_01.visible = false;
            this.bottomdec_02.visible = false;
            this.bottomdec_03.visible = false;
            this.bottomdec_04.visible = false;
            this.bottomdec_05.visible = true;
            this.bottomdec_06.visible = false;

            this.bottom1_top.visible = false;
            this.bottom2_top.visible = false;
            this.bottom3_top.visible = false;
            this.bottom4_top.visible = false;
            this.bottom5_top.visible = true;
            this.bottom6_top.visible = false;

        }
        if (Main.bar_arr[3] == 6) {
            this.bottomdec_01.visible = false;
            this.bottomdec_02.visible = false;
            this.bottomdec_03.visible = false;
            this.bottomdec_04.visible = false;
            this.bottomdec_05.visible = false;
            this.bottomdec_06.visible = true;

            this.bottom1_top.visible = false;
            this.bottom2_top.visible = false;
            this.bottom3_top.visible = false;
            this.bottom4_top.visible = false;
            this.bottom5_top.visible = false;
            this.bottom6_top.visible = true;
        }
        //////////////////////////////////////////////////////////////////////////////////


        this.barbie_group.visible = true;
        this.barbie_group.scale.setTo(0.5);
        this.barbie_group.x = 245;
        this.barbie_group.y = 340;

        this.glass_2 = game.add.sprite(378, 572, 'glass_2');
        this.glass_2.anchor.setTo(0.5);
        this.glass_2.scale.setTo(0.6);

        this.lid = game.add.sprite(360, 405, 'lid');
        this.lid.anchor.setTo(0.5);
        this.lid.scale.setTo(0.6);
        this.lid.visible = false;

        this.ribbon = game.add.sprite(375, 403, 'ribbon');
        this.ribbon.anchor.setTo(0.5);
        this.ribbon.scale.setTo(0.6);
        this.ribbon.visible = false;

        this.lid_1 = game.add.sprite(130, 550, 'lid');
        this.lid_1.anchor.setTo(0.5);
        this.lid_1.scale.setTo(0.6);
        this.lid_1.events.onInputDown.add(function() {
            this.arrow1.visible = false;
            this.arrow2.visible = true;
            this.arrow2.x = 374;
            this.arrow2.y = 341;

        }, this);
        this.lid_1.events.onInputUp.add(function() {
            if ((game.input.activePointer.x > 242 && game.input.activePointer.x < 492 && game.input.activePointer.y > 301 && game.input.activePointer.y < 628)) {
                this.arrow2.visible = false;
                this.lid_1.visible = false;
                this.lid.visible = true;
                game.add.tween(this.r_group).to({
                    x: 0
                }, 1000, Phaser.Easing.Quadratic.Out, true, 800).onComplete.add(function() {
                    this.arrow1.visible = true;
                    this.arrow1.x = 113;
                    this.arrow1.y = 529;
                    this.ribbon_1.inputEnabled = true;
                    this.ribbon_1.input.useHandCursor = true;
                    this.ribbon_1.input.enableDrag();

                }, this);


            } else {
                this.arrow1.visible = true;
                this.arrow1.x = 140;
                this.arrow1.y = 476;
                this.arrow2.visible = false;
                game.add.tween(this.lid_1).to({
                    x: 130,
                    y: 550
                }, 500, Phaser.Easing.Quadratic.Out, true);
            }
        }, this);
        // this.lid_1.x=-700;


        this.r_group = game.add.group();

        this.big_plate = game.add.sprite(115, 585, 'big_plate');
        this.big_plate.anchor.setTo(0.5)
        this.big_plate.scale.setTo(0.5)
        this.r_group.add(this.big_plate);

        this.ribbon_1 = game.add.sprite(110, 588, 'ribbon');
        this.ribbon_1.anchor.setTo(0.5);
        // this.ribbon_1.angle=90;
        this.ribbon_1.scale.setTo(0.45);
        this.ribbon_1.events.onInputDown.add(function() {
            this.arrow1.visible = false;
            this.arrow2.visible = true;
            this.arrow2.x = 374;
            this.arrow2.y = 341;

        }, this);
        this.ribbon_1.events.onInputUp.add(function() {
            if ((game.input.activePointer.x > 242 && game.input.activePointer.x < 492 && game.input.activePointer.y > 301 && game.input.activePointer.y < 628)) {
                this.arrow2.visible = false;
                this.ribbon_1.visible = false;
                this.ribbon.visible = true;
                game.add.tween(this.big_plate).to({
                    x: -700
                }, 1000, Phaser.Easing.Quadratic.Out, true, 800).onComplete.add(function() {
                    game.add.tween(this.glass_1).to({
                        x: 230
                    }, 1000, Phaser.Easing.Quadratic.Out, true, 500);
                    game.add.tween(this.glass_2).to({
                        x: 230
                    }, 1000, Phaser.Easing.Quadratic.Out, true, 500);
                    game.add.tween(this.glass_22).to({
                        x: 230
                    }, 1000, Phaser.Easing.Quadratic.Out, true, 500);
                    game.add.tween(this.lid).to({
                        x: 215
                    }, 1000, Phaser.Easing.Quadratic.Out, true, 500);
                    game.add.tween(this.barbie_group).to({
                        x: 100
                    }, 1000, Phaser.Easing.Quadratic.Out, true, 500);
                    game.add.tween(this.ribbon).to({
                        x: 230
                    }, 1000, Phaser.Easing.Quadratic.Out, true, 500).onComplete.add(function() {

                        game.add.tween(this.c_baby).to({
                            x: 180
                        }, 1000, Phaser.Easing.Quadratic.Out, true, 500);
                        game.add.tween(this.mom).to({
                            x: 350
                        }, 1000, Phaser.Easing.Quadratic.Out, true, 500).onComplete.add(function() {
                            game.add.tween(this.child_txt).to({
                                alpha: 1
                            }, 1000, Phaser.Easing.Quadratic.Out, true, 500).onComplete.add(function() {
                                game.add.tween(this.child_txt).to({
                                    alpha: 1
                                }, 1000, Phaser.Easing.Quadratic.Out, true, 500).onComplete.add(function() {
                                    game.add.tween(this.child_txt).to({
                                        alpha: 0
                                    }, 1000, Phaser.Easing.Quadratic.Out, true, 900).onComplete.add(function() {
                                        game.add.tween(this.mom_text).to({
                                            alpha: 1
                                        }, 1000, Phaser.Easing.Quadratic.Out, true, 500).onComplete.add(function() {
                                            game.add.tween(this.mom_text).to({
                                                alpha: 0
                                            }, 1000, Phaser.Easing.Quadratic.Out, true, 900).onComplete.add(function() {

                                                game.add.tween(this.playbtn.scale).to({
                                                    x: 0.9,
                                                    y: 0.9
                                                }, 1000, Phaser.Easing.Quadratic.Out, true, 800)
                                            }, this);
                                        }, this);
                                    }, this);
                                }, this);
                            }, this);
                        }, this);
                    }, this);
                }, this);

            } else {
                this.arrow1.visible = true;
                this.arrow1.x = 113;
                this.arrow1.y = 529;
                this.arrow2.visible = false;
                game.add.tween(this.ribbon_1).to({
                    x: 110,
                    y: 588
                }, 500, Phaser.Easing.Quadratic.Out, true);
            }
        }, this);
        this.r_group.add(this.ribbon_1);

        this.r_group.x = -700;

        if (Main.bar_arr[3] == 1) {
            this.bottomdec_01.visible = true;
            this.bottomdec_02.visible = false;
            this.bottomdec_03.visible = false;
            this.bottomdec_04.visible = false;
            this.bottomdec_05.visible = false;
            this.bottomdec_06.visible = false;
        }
        if (Main.bar_arr[3] == 2) {
            this.bottomdec_01.visible = false;
            this.bottomdec_02.visible = true;
            this.bottomdec_03.visible = false;
            this.bottomdec_04.visible = false;
            this.bottomdec_05.visible = false;
            this.bottomdec_06.visible = false;
        }
        if (Main.bar_arr[3] == 3) {
            this.bottomdec_01.visible = false;
            this.bottomdec_02.visible = false;
            this.bottomdec_03.visible = true;
            this.bottomdec_04.visible = false;
            this.bottomdec_05.visible = false;
            this.bottomdec_06.visible = false;
        }
        if (Main.bar_arr[3] == 4) {
            this.bottomdec_01.visible = false;
            this.bottomdec_02.visible = false;
            this.bottomdec_03.visible = false;
            this.bottomdec_04.visible = true;
            this.bottomdec_05.visible = false;
            this.bottomdec_06.visible = false;
        }
        if (Main.bar_arr[3] == 5) {
            this.bottomdec_01.visible = false;
            this.bottomdec_02.visible = false;
            this.bottomdec_03.visible = false;
            this.bottomdec_04.visible = false;
            this.bottomdec_05.visible = true;
            this.bottomdec_06.visible = false;
        }
        if (Main.bar_arr[3] == 6) {
            this.bottomdec_01.visible = false;
            this.bottomdec_02.visible = false;
            this.bottomdec_03.visible = false;
            this.bottomdec_04.visible = false;
            this.bottomdec_05.visible = false;
            this.bottomdec_06.visible = true;
        }

        this.arrowgp = game.add.group();

        var arro2x = [250, 252, 245, 318, 414, 410, 710];
        var arro2y = [405, 500, 405, 538, 527, 130, 440];

        for (i = 1; i <= 60; i++) {
            this['arrow' + i] = game.add.sprite(arro2x[i - 1], arro2y[i - 1], 'arrow');
            this['arrow' + i].anchor.setTo(0.5);
            this['arrow' + i].animations.add('arrow');
            this['arrow' + i].animations.play('arrow', 15, true);
            this['arrow' + i].visible = false;
            if (i == 1) {
                this['arrow' + i].visible = false;
            }
            if (i == 2) {
                this['arrow' + i].visible = false;
            }
            if (i == 3) {
                this['arrow' + i].visible = false;
            }
            if (i == 4) {
                this['arrow' + i].visible = false;
            }
            if (i == 5) {
                this['arrow' + i].visible = false;
            }
            if (i == 6) {
                this['arrow' + i].visible = false;
            }
            this.arrowgp.add(this['arrow' + i]);

        }

        this.morebtn = game.add.sprite(65, 740, 'more');
        this.morebtn.anchor.setTo(0.5);
        this.morebtn.scale.setTo(0.9);
        this.morebtn.inputEnabled = true;
        this.morebtn.input.useHandCursor = true;
        this.morebtn.events.onInputUp.add(this.moreLink, this);
        this.morebtn.events.onInputOver.add(this.btnOver, this);
        this.morebtn.events.onInputOut.add(this.btnOut, this);

        this.playbtn = game.add.sprite(430, 730, 'correct');
        this.playbtn.anchor.setTo(0.5);
        this.playbtn.scale.setTo(0);
        this.playbtn.inputEnabled = true;
        this.playbtn.input.useHandCursor = true;
        this.playbtn.events.onInputUp.add(this.enterRoom, this);
        this.playbtn.events.onInputOver.add(this.btnOver, this);
        this.playbtn.events.onInputOut.add(this.btnOut, this);




        if (Main.shutterOn[0]) {
            this.shutter = game.add.sprite(0, 0, 'download');
            game.add.tween(this.shutter).to({
                y: -850
            }, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                this.arrow1.visible = true;
                this.arrow1.x = 125;
                this.arrow1.y = 450;
                this.lid_1.inputEnabled = true;
                this.lid_1.input.useHandCursor = true;
                this.lid_1.input.enableDrag();

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

    update: function() {
        //console.log(game.input.activePointer.x+':'+game.input.activePointer.y);
        if (this.dummydrag) {
            this.dummyobject.x = game.input.activePointer.x;
            this.dummyobject.y = game.input.activePointer.y;
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
        //YYGSDK.navigate("game","logo");
    },
    moreLink: function() {
        // YYGSDK.navigate("game","morebutton");
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
            MyShowAD('taylordressup');
        });

    },
}


function MyShowAD(state) {
    Main.music.pause();
    game.state.start(state);
    Main.music.resume();
    // YYGSDK.adsManager.request(YYG.TYPE.INTERSTITIAL,YYG.EventHandler.create(this,()=>{game.state.start(state);Main.music.resume();}),YYG.EventHandler.create(this,()=>{game.state.start(state);Main.music.resume();})); 
}


game.state.add('boot', Main.boot);
game.state.add('preloader', Main.preloader);
game.state.add('title', Main.title);
game.state.add('taylordressup', Main.taylordressup);
game.state.add('intro', Main.intro);
game.state.add('cook1', Main.cook1);
game.state.add('secondpro', Main.secondpro);
game.state.add('machine', Main.machine);
game.state.add('fire', Main.fire);
game.state.add('shopping', Main.shopping);
game.state.add('cake', Main.cake);
game.state.add('gift', Main.gift);
game.state.add('barbie_cake', Main.barbie_cake);
game.state.add('final_screen', Main.final_screen);




game.state.start('boot');