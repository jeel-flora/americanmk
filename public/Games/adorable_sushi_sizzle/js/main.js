var game = new Phaser.Game(504, 800, Phaser.AUTO, 'gameContainer');
var Main = {
    music: null,

    shutterOn: [true],

    c1_array: [0],

    j_array: [1, 1, 1],
    cake_array: [6, 6, 6],
    cake2_array: [1, 1, 1],

    creameX: [173, 199, 226, 255, 285, 314, 166, 193, 222, 248, 280, 310, 332, 166, 194, 225, 256, 289, 318, 339, 168, 197, 220, 250, 277, 304, 337, 185, 231, 266, 289],
    creameY: [489, 491, 489, 489, 488, 488, 517, 519, 519, 516, 518, 518, 514, 548, 546, 547, 544, 547, 550, 545, 577, 576, 572, 572, 572, 577, 579, 587, 586, 590, 591],
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
        game.load.image('prelogo', 'assets/jio-logo.png');
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
        game.load.spritesheet('soundicon', 'assets/soundicon.png', 73, 75, 2);
        game.load.image('logo', 'assets/jio-logo-black.png');
        game.load.spritesheet('effects', 'assets/effects.png', 141, 134);
        game.load.spritesheet('effectssd', 'assets/efftes012.png', 367, 335);

        //LLLLL
        game.load.onFileComplete.add(this.fileLoadFunPre, this);

        ///////////////////\\\\\\\\\\\\\\\\\\\///////////////\\\\\\\\\\\\\\\\
        for (var i = 1; i <= 6; i++) {
            game.load.image('dect_cake000' + i, 'assets/juice/dect/dect_cake000' + i + '.png');
            game.load.image('d_cake_top000' + i, 'assets/juice/dect/d_cake_top000' + i + '.png');
            game.load.image('dect_cake_top000' + i, 'assets/juice/dect/dect_cake_top000' + i + '.png');
            game.load.image('d_cake000' + i, 'assets/cake2/d_cake000' + i + '.png');
            game.load.image('d_top1_000' + i, 'assets/cake2/d_top1_000' + i + '.png');
            game.load.image('d_top000' + i, 'assets/cake2/d_top000' + i + '.png');
            if (i <= 3) {
                game.load.image('c1_btn' + i, 'assets/cake2/c1_btn' + i + '.png');
                game.load.image('c_btn' + i, 'assets/juice/dect/c_btn' + i + '.png');
            }
            if (i <= 5) {
                game.load.image('btn000' + i, 'assets/btns/btn000' + i + '.png');
            }
            if (i <= 4) {
                game.load.image('d_gl000' + i, 'assets/juice/dect/d_gl000' + i + '.png');
                game.load.image('d_glass000' + i, 'assets/juice/dect/d_glass000' + i + '.png');
                game.load.image('j_clr000' + i, 'assets/juice/dect/j_clr000' + i + '.png');
                game.load.image('j_frt' + i, 'assets/juice/dect/j_frt' + i + '.png');
            }
        }

        game.load.spritesheet('arrow', 'assets/arrow.png', 66, 89, 13);

        game.load.spritesheet('j_ani_drink', 'assets/juice/j_ani_drink.png', 285, 300, 13);
        game.load.spritesheet('j_ani_glass', 'assets/juice/j_ani_glass.png', 124, 328, 19);
        game.load.spritesheet('j_ani_lemon', 'assets/juice/j_ani_lemon.png', 259, 422, 10);
        game.load.spritesheet('j_ani_tropi', 'assets/juice/j_ani_tropi.png', 268, 269, 16);
        game.load.spritesheet('j_juice', 'assets/juice/j_juice.png', 124, 213, 7);
        game.load.spritesheet('j_pineapple', 'assets/juice/j_pineapple.png', 248, 227, 12);
        game.load.spritesheet('j_ani_ice', 'assets/juice/j_ani_ice.png', 297, 317, 5);
        game.load.spritesheet('ani_soda', 'assets/juice/ani_soda.png', 320, 279, 12);

        game.load.image('j_bg', 'assets/juice/j_bg.jpg');
        game.load.image('titlebg', 'assets/titlebg.jpg');
        game.load.image('baby_elsa', 'assets/juice/baby_elsa.png');
        game.load.image('j_drink', 'assets/juice/j_drink.png');
        game.load.image('j_lemon', 'assets/juice/j_lemon.png');
        game.load.image('j_panel', 'assets/juice/j_panel.png');
        game.load.image('j_pine', 'assets/juice/j_pine.png');
        game.load.image('j_pine_close', 'assets/juice/j_pine_close.png');
        game.load.image('j_tropi', 'assets/juice/j_tropi.png');
        game.load.image('j_tropi_close', 'assets/juice/j_tropi_close.png');
        game.load.image('j_ice', 'assets/juice/j_ice.png');
        game.load.image('frnt_glass', 'assets/juice/frnt_glass.png');
        game.load.image('j_soda', 'assets/juice/j_soda.png');
        game.load.image('nxt', 'assets/juice/nxt.png');
        game.load.image('prr', 'assets/juice/prr.png');

        game.load.image('d_panel', 'assets/juice/dect/d_panel.png');
        game.load.image('d_plate', 'assets/juice/dect/d_plate.png');
        game.load.image('g1_back1', 'assets/juice/dect/g1_back1.png');
        game.load.image('g1_back2', 'assets/juice/dect/g1_back2.png');
        game.load.image('g1_back3', 'assets/juice/dect/g1_back3.png');
        game.load.image('g1_back4', 'assets/juice/dect/g1_back4.png');
        game.load.image('g1_clr0001', 'assets/juice/dect/g1_clr0001.png');
        game.load.image('g1_clr0002', 'assets/juice/dect/g1_clr0002.png');
        game.load.image('g1_clr0003', 'assets/juice/dect/g1_clr0003.png');
        game.load.image('g1_clr0004', 'assets/juice/dect/g1_clr0004.png');
        game.load.image('g1_top1', 'assets/juice/dect/g1_top1.png');
        game.load.image('g1_top2', 'assets/juice/dect/g1_top2.png');
        game.load.image('g1_top3', 'assets/juice/dect/g1_top3.png');
        game.load.image('g1_top4', 'assets/juice/dect/g1_top4.png');
        game.load.image('g1_fruit0001', 'assets/juice/dect/g1_fruit0001.png');
        game.load.image('g1_fruit0002', 'assets/juice/dect/g1_fruit0002.png');
        game.load.image('g1_fruit0003', 'assets/juice/dect/g1_fruit0003.png');
        game.load.image('g1_fruit0004', 'assets/juice/dect/g1_fruit0004.png');
        game.load.image('g1_frnt1', 'assets/juice/dect/g1_frnt1.png');
        game.load.image('g1_frnt2', 'assets/juice/dect/g1_frnt2.png');
        game.load.image('g1_frnt3', 'assets/juice/dect/g1_frnt3.png');
        game.load.image('g1_frnt4', 'assets/juice/dect/g1_frnt4.png');

        game.load.image('g2_clr0001', 'assets/juice/dect/g2_clr0001.png');
        game.load.image('g2_clr0002', 'assets/juice/dect/g2_clr0002.png');
        game.load.image('g2_clr0003', 'assets/juice/dect/g2_clr0003.png');
        game.load.image('g2_clr0004', 'assets/juice/dect/g2_clr0004.png');
        game.load.image('g2_fruit0001', 'assets/juice/dect/g2_fruit0001.png');
        game.load.image('g2_fruit0002', 'assets/juice/dect/g2_fruit0002.png');
        game.load.image('g2_fruit0003', 'assets/juice/dect/g2_fruit0003.png');
        game.load.image('g2_fruit0004', 'assets/juice/dect/g2_fruit0004.png');

        game.load.image('g3_fruit0001', 'assets/juice/dect/g3_fruit0001.png');
        game.load.image('g3_fruit0002', 'assets/juice/dect/g3_fruit0002.png');
        game.load.image('g3_fruit0003', 'assets/juice/dect/g3_fruit0003.png');
        game.load.image('g3_fruit0004', 'assets/juice/dect/g3_fruit0004.png');
        game.load.image('g3_clr0001', 'assets/juice/dect/g3_clr0001.png');
        game.load.image('g3_clr0002', 'assets/juice/dect/g3_clr0002.png');
        game.load.image('g3_clr0003', 'assets/juice/dect/g3_clr0003.png');
        game.load.image('g3_clr0004', 'assets/juice/dect/g3_clr0004.png');

        game.load.image('g4_clr0001', 'assets/juice/dect/g4_clr0001.png');
        game.load.image('g4_clr0002', 'assets/juice/dect/g4_clr0002.png');
        game.load.image('g4_clr0003', 'assets/juice/dect/g4_clr0003.png');
        game.load.image('g4_clr0004', 'assets/juice/dect/g4_clr0004.png');
        game.load.image('g4_fruit0001', 'assets/juice/dect/g4_fruit0001.png');
        game.load.image('g4_fruit0002', 'assets/juice/dect/g4_fruit0002.png');
        game.load.image('g4_fruit0003', 'assets/juice/dect/g4_fruit0003.png');
        game.load.image('g4_fruit0004', 'assets/juice/dect/g4_fruit0004.png');

        game.load.spritesheet('c_ani_bowl', 'assets/cake2/c_ani_bowl.png', 496, 400, 9);
        game.load.spritesheet('c_ani_rice', 'assets/cake2/c_ani_rice.png', 318, 92, 11);
        game.load.spritesheet('c_ani_stand', 'assets/cake2/c_ani_stand.png', 404, 361, 11);
        game.load.spritesheet('c_cutter', 'assets/cake2/c_cutter.png', 397, 348, 19);

        game.load.image('c_black', 'assets/cake2/c_black.png');
        game.load.image('c_black1', 'assets/cake2/c_black1.png');
        game.load.image('c_bowl', 'assets/cake2/c_bowl.png');
        game.load.image('c_brown', 'assets/cake2/c_brown.png');
        game.load.image('c_brown1', 'assets/cake2/c_brown1.png');
        game.load.image('c_green', 'assets/cake2/c_green.png');
        game.load.image('c_green1', 'assets/cake2/c_green1.png');
        game.load.image('c_plate', 'assets/cake2/c_plate.png');
        game.load.image('c_roll', 'assets/cake2/c_roll.png');
        game.load.image('stand_c_0001', 'assets/cake2/stand_c_0001.png');
        game.load.image('stand_c_0002', 'assets/cake2/stand_c_0002.png');
        game.load.image('c_close', 'assets/cake2/c_close.png');
        game.load.image('c_rice', 'assets/cake2/c_rice.png');



        game.load.image('fsplate', 'assets/cooking1/fsplate.png');
        game.load.image('psusi1', 'assets/cooking1/psusi1.png');
        game.load.image('cut_piece2', 'assets/cooking1/cut_piece2.png');
        game.load.image('cut_piece1', 'assets/cooking1/cut_piece1.png');
        game.load.image('fplate', 'assets/cooking1/fplate.png');
        game.load.image('rolled_susi', 'assets/cooking1/rolled_susi.png');
        game.load.image('mpiece', 'assets/cooking1/mpiece.png');
        game.load.image('bpiece', 'assets/cooking1/bpiece.png');
        game.load.image('apiece', 'assets/cooking1/apiece.png');
        game.load.image('mlayer1', 'assets/cooking1/mlayer1.png');
        game.load.image('rlayer1', 'assets/cooking1/rlayer1.png');
        game.load.image('roller1', 'assets/cooking1/roller1.png');
        game.load.image('lpiece', 'assets/cooking1/lpiece.png');
        game.load.image('cpack', 'assets/cooking1/cpack.png');
        game.load.image('cpack', 'assets/cooking1/cpack.png');
        game.load.image('knife', 'assets/cooking1/knife.png');
        game.load.image('cplate', 'assets/cooking1/cplate.png');
        game.load.image('vplate', 'assets/cooking1/vplate.png');
        game.load.image('avocado', 'assets/cooking1/avocado.png');
        game.load.image('bringel', 'assets/cooking1/bringel.png');
        game.load.image('vcap', 'assets/cooking1/vcap.png');
        game.load.image('sbottle', 'assets/cooking1/sbottle.png');
        game.load.image('vbottle', 'assets/cooking1/vbottle.png');
        game.load.image('spack1', 'assets/cooking1/spack1.png');
        game.load.image('bvineger', 'assets/cooking1/bvineger.png');
        game.load.image('bsugar', 'assets/cooking1/bsugar.png');
        game.load.image('vbowl1', 'assets/cooking1/vbowl1.png');
        game.load.image('vbowlf', 'assets/cooking1/vbowlf.png');
        game.load.image('spoon0001', 'assets/cooking1/spoon0001.png');
        game.load.image('spoon0002', 'assets/cooking1/spoon0002.png');
        game.load.image('wjar', 'assets/cooking1/wjar.png');
        game.load.image('price', 'assets/cooking1/price.png');
        game.load.image('pwater', 'assets/cooking1/pwater.png');
        game.load.image('pot_front', 'assets/cooking1/pot_front.png');
        game.load.image('pot', 'assets/cooking1/pot.png');
        game.load.image('phandle2', 'assets/cooking1/phandle2.png');
        game.load.image('phandle1', 'assets/cooking1/phandle1.png');
        game.load.image('pcap', 'assets/cooking1/pcap.png');
        game.load.image('heater', 'assets/cooking1/heater.png');
        game.load.image('hbtn', 'assets/cooking1/hbtn.png');
        game.load.image('rpack1', 'assets/cooking1/rpack1.png');
        game.load.image('ctable', 'assets/cooking1/ctable.png');
        game.load.image('belsa', 'assets/cooking1/belsa.png');
        game.load.image('scisorr', 'assets/cooking1/scisorr.png');
        game.load.image('cbg', 'assets/cooking1/cbg.jpg');
        game.load.image('titlebg', 'assets/cooking1/cbg.jpg');
        game.load.spritesheet('rpack_cut', 'assets/cooking1/rpack_cut.png', 219, 185, 5);
        game.load.spritesheet('spack_cut', 'assets/cooking1/spack_cut.png', 278, 234, 5);
        game.load.spritesheet('rice_drop', 'assets/cooking1/rice_drop.png', 186, 274, 15);
        game.load.spritesheet('water_drop', 'assets/cooking1/water_drop.png', 232, 335, 24);
        game.load.spritesheet('spoon_ani1', 'assets/cooking1/spoon_ani1.png', 224, 279, 25);
        game.load.spritesheet('rbowl_ani', 'assets/cooking1/rbowl_ani.png', 187, 278, 25);
        game.load.spritesheet('sugar_drop', 'assets/cooking1/sugar_drop.png', 209, 301, 13);
        game.load.spritesheet('vineger_drop', 'assets/cooking1/vineger_drop.png', 275, 233, 14);
        game.load.spritesheet('salt_ani', 'assets/cooking1/salt_ani.png', 232, 259, 21);
        game.load.spritesheet('spoon_mix', 'assets/cooking1/spoon_mix.png', 167, 184, 9);
        game.load.spritesheet('avocado_cut', 'assets/cooking1/avocado_cut.png', 190, 247, 22);
        game.load.spritesheet('bringel_cut', 'assets/cooking1/bringel_cut.png', 205, 203, 5);
        game.load.spritesheet('crab_pack', 'assets/cooking1/crab_pack.png', 220, 121, 2);
        game.load.spritesheet('crab_plate', 'assets/cooking1/crab_plate.png', 213, 74, 8);
        game.load.spritesheet('roll_ani', 'assets/cooking1/roll_ani.png', 340, 196, 11);
        game.load.spritesheet('rsusi_cut', 'assets/cooking1/rsusi_cut.png', 290, 348, 6);


        game.load.image('itext', 'assets/intro/itext.png');
        game.load.image('text', 'assets/intro/text.png');
        game.load.image('tcake1', 'assets/intro/tcake1.png');
        game.load.image('tcake2', 'assets/intro/tcake2.png');
        game.load.image('tjuice', 'assets/intro/tjuice.png');
        game.load.image('dd_cake', 'assets/cake2/dd_cake.png');
        game.load.image('j_pop', 'assets/juice/j_pop.png');

        game.load.image('morebtn', 'assets/btns/btn0004.png');
        game.load.image('playbtn', 'assets/btns/btn0003.png');
        game.load.image('resetbtn', 'assets/btns/btn0001.png');
        game.load.image('donebtn', 'assets/btns/btn0002.png');
        game.load.image('nextbtn', 'assets/btns/btn0005.png');
        game.load.spritesheet('arrow', 'assets/arrow.png', 66, 89, 13);

        game.load.spritesheet('timer', 'assets/timer.png', 160, 160, 60);


        ///////////////////\\\\\\\\\\\\\\\\\\\///////////////\\\\\\\\\\\\\\\\

        /*  for(i=0;i<RelatedGames.length; i++)
        {
        game.load.image('thumb_'+i, RelatedGames[i]["thumb"]);
        }*/
        game.load.image('Tump_frame', 'assets/Tump_frame.png');
        ///////////////////\\\\\\\\\\\\\\\\\\\///////////////\\\\\\\\\\\\\\\\


    },
    fileLoadFunPre: function(progress, cacheKey, success, totalLoaded, totalFiles) {
        this.progress.setText('LOADING: ' + parseInt(progress) + '%');
        if (progress == 100) {
            this.progress.visible = false;
            game.load.onFileComplete.removeAll();
            //AAAAAA
            // game.state.start('cooking1_screen');


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
        CreateLinksInGame("Baby-Elsa-Sushi-Cooking", "loading", "logo");
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
        this.bg = game.add.sprite(0, 0, 'j_bg');
        this.levelGroup.add(this.bg);

        this.baby_elsa = game.add.sprite(120, 425, 'baby_elsa');
        this.baby_elsa.anchor.setTo(0.5);

        this.j_panel = game.add.sprite(255, 630, 'j_panel');
        this.j_panel.anchor.setTo(0.5);

        this.tcake1 = game.add.sprite(171.5, 515, 'tcake1');
        this.tcake1.anchor.setTo(0.5);

        this.tjuice = game.add.sprite(398.05, 463.65, 'tjuice');
        this.tjuice.anchor.setTo(0.5);

        this.tcake2 = game.add.sprite(309.85, 642.5, 'tcake2');
        this.tcake2.anchor.setTo(0.5);

        this.text = game.add.sprite(354.3, 275, 'text');
        this.text.anchor.setTo(0.5);

        game.add.tween(this.text.scale).to({
            x: 1.05,
            y: 1.05
        }, 700, Phaser.Easing.Linear.Out, true, 0, -1).yoyo(100, true);

        /* this.d_glass = game.add.sprite(420,400,'d_glass000'+Main.j_array[0]);
         this.d_glass.anchor.setTo(0.5);
         this.d_glass.scale.setTo(0.95);


         this.cakegroup = game.add.group();
         this.d_plate = game.add.sprite(255,530,'d_plate');
         this.d_plate.anchor.setTo(0.5);
         this.cakegroup.add(this.d_plate);

         
         this.dect_cake = game.add.sprite(180,500,'dect_cake000'+Main.cake_array[0]);
         this.dect_cake.anchor.setTo(0.5);
         this.cakegroup.add(this.dect_cake);


         this.dect_cake1 = game.add.sprite(340,500,'dect_cake000'+Main.cake_array[0]);
         this.dect_cake1.anchor.setTo(0.5);
         this.cakegroup.add(this.dect_cake1);

         this.cakegroup.scale.setTo(0.67);
         this.cakegroup.x=-10;
         this.cakegroup.y=130;


         this.cakegroup2=game.add.group();
         this.c_plate = game.add.sprite(255,530,'c_plate');
         this.c_plate.anchor.setTo(0.5);
         this.cakegroup2.add(this.c_plate);

         this.cake1 = game.add.sprite(180,520,'d_cake000'+Main.cake2_array[0]);
         this.cake1.anchor.setTo(0.5);
         this.cakegroup2.add(this.cake1);


         this.cake2 = game.add.sprite(230,520,'d_cake000'+Main.cake2_array[0]);
         this.cake2.anchor.setTo(0.5);
         this.cakegroup2.add(this.cake2);

         this.cake3 = game.add.sprite(280,520,'d_cake000'+Main.cake2_array[0]);
         this.cake3.anchor.setTo(0.5);
         this.cakegroup2.add(this.cake3);

         this.cake4 = game.add.sprite(330,520,'d_cake000'+Main.cake2_array[0]);
         this.cake4.anchor.setTo(0.5);
         this.cakegroup2.add(this.cake4);

         this.cakegroup2.scale.setTo(0.8);
         this.cakegroup2.x=70;
         this.cakegroup2.y=175;
         */
        this.morebtn = game.add.sprite(85, 730, 'morebtn');
        this.morebtn.anchor.setTo(0.5);
        this.morebtn.scale.setTo(0.9);
        this.morebtn.inputEnabled = true;
        this.morebtn.input.useHandCursor = true;
        this.morebtn.events.onInputUp.add(this.moreLink, this);
        this.morebtn.events.onInputOver.add(this.btnOver, this);
        this.morebtn.events.onInputOut.add(this.btnOut, this);

        this.playbtn = game.add.sprite(430, 730, 'playbtn');
        this.playbtn.anchor.setTo(0.5);
        this.playbtn.scale.setTo(0.9);
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
        CreateLinksInGame("Baby-Elsa-Sushi-Cooking", "menu", "logo");
    },
    moreLink: function() {
        CreateLinksInGame("Baby-Elsa-Sushi-Cooking", "menu", "more");
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
        this.introbg = game.add.sprite(0, 0, 'j_bg');
        this.levelGroup.add(this.introbg);


        this.baby_elsa = game.add.sprite(380, 425, 'baby_elsa');
        this.baby_elsa.anchor.setTo(0.5);
        this.baby_elsa.scale.setTo(0.88);



        this.morebtn = game.add.sprite(85, 730, 'morebtn');
        this.morebtn.anchor.setTo(0.5);
        this.morebtn.scale.setTo(0);
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

        this.popup1 = game.add.sprite(190, 210, 'itext');
        this.popup1.anchor.setTo(0.5);
        this.popup1.scale.setTo(0);




        if (Main.shutterOn[0]) {
            this.shutter = game.add.sprite(0, 0, 'titlebg');
            game.add.tween(this.shutter).to({
                y: -850
            }, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                this.startPopUp();
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
            x: 0.8,
            y: 0.8
        }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(this.bringBottons, this);
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
            x: 0.9,
            y: 0.9
        }, 700, Phaser.Easing.Quadratic.Out, true);
        game.add.tween(this.playbtn.scale).to({
            x: 0.9,
            y: 0.9
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
        CreateLinksInGame("Baby-Elsa-Sushi-Cooking", "game", "logo");
    },
    moreLink: function() {
        CreateLinksInGame("Baby-Elsa-Sushi-Cooking", "game", "morebutton");
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
            game.state.start('cooking1_screen');
        });

    },
}

// i111111


Main.intro1 = function() {}

Main.intro1.prototype = {
    create: function() {
        this.levelGroup = game.add.group();
        this.introbg = game.add.sprite(0, 0, 'j_bg');
        this.levelGroup.add(this.introbg);


        this.baby_elsa = game.add.sprite(150, 450, 'baby_elsa');
        this.baby_elsa.anchor.setTo(0.5);
        this.baby_elsa.scale.setTo(0.88);



        this.morebtn = game.add.sprite(85, 730, 'morebtn');
        this.morebtn.anchor.setTo(0.5);
        this.morebtn.scale.setTo(0);
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

        this.j_pop = game.add.sprite(350, 210, 'j_pop');
        this.j_pop.anchor.setTo(0.5);
        this.j_pop.scale.setTo(0);




        if (Main.shutterOn[0]) {
            this.shutter = game.add.sprite(0, 0, 'titlebg');
            game.add.tween(this.shutter).to({
                y: -850
            }, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                game.add.tween(this.j_pop.scale).to({
                    x: 1,
                    y: 1
                }, 800, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                    game.add.tween(this.j_pop.scale).to({
                        x: 0,
                        y: 0
                    }, 800, Phaser.Easing.Quadratic.Out, true, 2800).onComplete.add(function() {
                        game.add.tween(this.morebtn.scale).to({
                            x: 0.9,
                            y: 0.9
                        }, 700, Phaser.Easing.Quadratic.Out, true);
                        game.add.tween(this.playbtn.scale).to({
                            x: 0.9,
                            y: 0.9
                        }, 700, Phaser.Easing.Quadratic.Out, true);
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
            x: 0.8,
            y: 0.8
        }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(this.bringBottons, this);
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
            x: 0.9,
            y: 0.9
        }, 700, Phaser.Easing.Quadratic.Out, true);
        game.add.tween(this.playbtn.scale).to({
            x: 0.9,
            y: 0.9
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
        CreateLinksInGame("Baby-Elsa-Sushi-Cooking", "game", "logo");
    },
    moreLink: function() {
        CreateLinksInGame("Baby-Elsa-Sushi-Cooking", "game", "morebutton");
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
            game.state.start('juice_screen');
        });

    },
}
// jjjjjjjjj

Main.juice_screen = function() {}

Main.juice_screen.prototype = {
    create: function() {
        this.levelGroup = game.add.group();
        this.introbg = game.add.sprite(0, 0, 'j_bg');
        this.levelGroup.add(this.introbg);

        this.baby_elsa = game.add.sprite(120, 425, 'baby_elsa');
        this.baby_elsa.anchor.setTo(0.5);

        this.j_panel = game.add.sprite(255, 630, 'j_panel');
        this.j_panel.anchor.setTo(0.5);

        this.j_ani_glass = game.add.sprite(252, 400, 'j_ani_glass');
        this.j_ani_glass.anchor.setTo(0.5);

        this.j_juice = game.add.sprite(252, 457, 'j_juice');
        this.j_juice.anchor.setTo(0.5);
        this.j_juice.visible = false;

        this.j_ani_ice = game.add.sprite(340, 211, 'j_ani_ice');
        this.j_ani_ice.anchor.setTo(0.5);
        this.j_ani_ice.visible = false;

        this.j_ani_lemon = game.add.sprite(305, 330, 'j_ani_lemon');
        this.j_ani_lemon.anchor.setTo(0.5);
        this.j_ani_lemon.scale.setTo(0.9);
        this.j_ani_lemon.visible = false;

        this.j_ani_drink = game.add.sprite(370, 286, 'j_ani_drink');
        this.j_ani_drink.anchor.setTo(0.5);
        this.j_ani_drink.visible = false;

        this.ani_soda = game.add.sprite(392, 288, 'ani_soda');
        this.ani_soda.anchor.setTo(0.5);
        this.ani_soda.visible = false;

        this.j_pineapple = game.add.sprite(142, 317, 'j_pineapple');
        this.j_pineapple.anchor.setTo(0.5);
        this.j_pineapple.visible = false;

        this.j_ani_tropi = game.add.sprite(367, 330, 'j_ani_tropi');
        this.j_ani_tropi.anchor.setTo(0.5);
        this.j_ani_tropi.visible = false;

        this.frnt_glass = game.add.sprite(252, 457, 'frnt_glass');
        this.frnt_glass.anchor.setTo(0.5);

        ////////////\\\\\\\\\\\\////////\\\\\\\\\\\////////////\\\\\\\\\\\

        this.j_ice = game.add.sprite(380, 600, 'j_ice');
        this.j_ice.anchor.setTo(0.5);
        this.j_ice.inputEnabled = true;
        this.j_ice.input.useHandCursor = true;
        this.j_ice.input.enableDrag();
        this.j_ice.events.onInputDown.add(function() {
            this.arrow1.visible = false;
            this.arrow2.visible = true;
        }, this);
        this.j_ice.events.onInputUp.add(function() {

            if ((game.input.activePointer.x > 150 && game.input.activePointer.x < 430 && game.input.activePointer.y > 160 && game.input.activePointer.y < 385)) {
                this.arrow2.visible = false;
                this.j_ice.visible = false;
                this.j_ani_ice.visible = true;
                this.j_ani_glass.animations.add('j_ani_glass', [0, 0, 0, 0, 0, 1, 2, 3, 4, 5]);
                this.j_ani_glass.animations.play('j_ani_glass', 8, false).onComplete.add(function() {
                    this.j_lemon.inputEnabled = true;
                    this.j_lemon.input.useHandCursor = true;
                    this.j_lemon.input.enableDrag();
                    this.arrow3.visible = true;
                }, this);

                this.j_ani_ice.animations.add('j_ani_ice');
                this.j_ani_ice.animations.play('j_ani_ice', 8, false).onComplete.add(function() {
                    this.j_ani_ice.visible = false;
                }, this);

            } else {
                this.arrow1.visible = true;
                this.arrow2.visible = false;
                game.add.tween(this.j_ice).to({
                    x: 380,
                    y: 600
                }, 800, Phaser.Easing.Quadratic.Out, true);
            }
        }, this);

        /////////////\\\\\\\\\\\////////////\\\\\\\\\\\\\\////////////\\\\\\\


        this.j_lemon = game.add.sprite(133, 570, 'j_lemon');
        this.j_lemon.anchor.setTo(0.5);
        this.j_lemon.events.onInputDown.add(function() {
            this.arrow3.visible = false;
            this.arrow4.visible = true;
        }, this);
        this.j_lemon.events.onInputUp.add(function() {

            if ((game.input.activePointer.x > 50 && game.input.activePointer.x < 430 && game.input.activePointer.y > 160 && game.input.activePointer.y < 385)) {
                this.j_lemon.visible = false;
                this.j_ani_lemon.visible = true;
                this.arrow4.visible = false;

                this.j_ani_glass.animations.add('j_ani_glass', [5, 5, 5, 5, 5, 5, 6, 7, 8, 9]);
                this.j_ani_glass.animations.play('j_ani_glass', 8, false).onComplete.add(function() {


                }, this);

                this.j_ani_lemon.animations.add('j_ani_lemon');
                this.j_ani_lemon.animations.play('j_ani_lemon', 8, false).onComplete.add(function() {
                    this.j_ani_lemon.visible = false;
                    game.add.tween(this.j_drink).to({
                        x: 350
                    }, 800, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                        this.j_drink.inputEnabled = true;
                        this.j_drink.input.useHandCursor = true;
                        this.j_drink.input.enableDrag();
                        this.arrow5.visible = true;
                    }, this);
                }, this);

            } else {
                this.arrow3.visible = true;
                this.arrow4.visible = false;
                game.add.tween(this.j_lemon).to({
                    x: 133,
                    y: 570
                }, 800, Phaser.Easing.Quadratic.Out, true);

            }
        }, this);


        /////////////\\\\\\\\\\\////////////\\\\\\\\\\\\\\////////////\\\\\\\

        this.j_drink = game.add.sprite(650, 570, 'j_drink');
        this.j_drink.anchor.setTo(0.5);
        this.j_drink.events.onInputDown.add(function() {
            this.arrow5.visible = false;
            this.arrow6.visible = true;
        }, this);
        this.j_drink.events.onInputUp.add(function() {

            if ((game.input.activePointer.x > 150 && game.input.activePointer.x < 430 && game.input.activePointer.y > 160 && game.input.activePointer.y < 385)) {
                this.arrow6.visible = false;
                this.j_drink.visible = false;
                this.j_ani_drink.visible = true;
                this.j_ani_glass.animations.add('j_ani_glass', [9, 9, 10, 11, 12, 13, 14]);
                this.j_ani_glass.animations.play('j_ani_glass', 8, false).onComplete.add(function() {

                }, this);

                this.j_ani_drink.animations.add('j_ani_drink', [0, 1, 2, 3, 4, 5, 6, 7]);
                this.j_ani_drink.animations.play('j_ani_drink', 8, false).onComplete.add(function() {
                    this.j_ani_drink.visible = false;
                    game.add.tween(this.j_soda).to({
                        x: 350,
                        y: 570
                    }, 800, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                        this.j_soda.inputEnabled = true;
                        this.j_soda.input.useHandCursor = true;
                        this.j_soda.input.enableDrag();
                        this.arrow7.visible = true;
                    }, this);
                }, this);

            } else {
                this.arrow5.visible = true;
                this.arrow6.visible = false;
                game.add.tween(this.j_drink).to({
                    x: 350,
                    y: 570
                }, 800, Phaser.Easing.Quadratic.Out, true);
            }
        }, this);

        /////////////\\\\\\\\\\\////////////\\\\\\\\\\\\\\////////////\\\\\\\

        this.j_soda = game.add.sprite(650, 570, 'j_soda');
        this.j_soda.anchor.setTo(0.5);
        this.j_soda.events.onInputDown.add(function() {
            this.arrow7.visible = false;
            this.arrow8.visible = true;
        }, this);
        this.j_soda.events.onInputUp.add(function() {

            if ((game.input.activePointer.x > 150 && game.input.activePointer.x < 430 && game.input.activePointer.y > 160 && game.input.activePointer.y < 385)) {
                this.arrow8.visible = false;
                this.j_soda.visible = false;
                this.ani_soda.visible = true;
                this.j_ani_glass.animations.add('j_ani_glass', [14, 15, 16, 17, 18]);
                this.j_ani_glass.animations.play('j_ani_glass', 8, false).onComplete.add(function() {

                    this.j_ani_glass.visible = false;
                    this.j_juice.visible = true;

                }, this);

                this.ani_soda.animations.add('ani_soda', [0, 1, 2, 3, 4, 5, 6]);
                this.ani_soda.animations.play('ani_soda', 8, false).onComplete.add(function() {
                    this.ani_soda.visible = false;
                    game.add.tween(this.pinegroup).to({
                        x: 0
                    }, 800, Phaser.Easing.Quadratic.Out, true);
                    game.add.tween(this.tropigroup).to({
                        x: 0
                    }, 800, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                        this.j_pine.inputEnabled = true;
                        this.j_pine.input.useHandCursor = true;
                        this.j_pine.input.enableDrag();
                        this.arrow9.visible = true;
                    }, this);
                }, this);

            } else {
                this.arrow7.visible = true;
                this.arrow8.visible = false;
                game.add.tween(this.j_soda).to({
                    x: 350,
                    y: 570
                }, 800, Phaser.Easing.Quadratic.Out, true);
            }
        }, this);


        /////////////\\\\\\\\\\\////////////\\\\\\\\\\\\\\////////////\\\\\\\

        this.pinegroup = game.add.group();
        this.j_pine = game.add.sprite(120, 540, 'j_pine');
        this.j_pine.anchor.setTo(0.5);
        this.j_pine.events.onInputDown.add(function() {
            this.j_pine_close.visible = false;
            this.arrow9.visible = false;
            this.arrow10.visible = true;
        }, this);
        this.j_pine.events.onInputUp.add(function() {

            if ((game.input.activePointer.x > 150 && game.input.activePointer.x < 430 && game.input.activePointer.y > 160 && game.input.activePointer.y < 385)) {
                this.arrow10.visible = false;
                this.j_pine.visible = false;
                this.j_pineapple.visible = true;
                this.j_juice.animations.add('j_juice', [0, 1, 2, 3]);
                this.j_juice.animations.play('j_juice', 8, false).onComplete.add(function() {


                }, this);

                this.j_pineapple.animations.add('j_pineapple', [0, 1, 2, 3, 4, 5, 6]);
                this.j_pineapple.animations.play('j_pineapple', 8, false).onComplete.add(function() {
                    this.j_pineapple.visible = false;
                    this.j_tropi.inputEnabled = true;
                    this.j_tropi.input.useHandCursor = true;
                    this.j_tropi.input.enableDrag();
                    this.arrow11.visible = true;
                }, this);

            } else {
                this.arrow9.visible = true;
                this.arrow10.visible = false;
                game.add.tween(this.j_pine).to({
                    x: 120,
                    y: 540
                }, 800, Phaser.Easing.Quadratic.Out, true);
            }
        }, this);
        this.pinegroup.add(this.j_pine);

        this.j_pine_close = game.add.sprite(118, 435, 'j_pine_close');
        this.j_pine_close.anchor.setTo(0.5);
        this.pinegroup.add(this.j_pine_close);




        this.tropigroup = game.add.group();
        this.j_tropi = game.add.sprite(400, 540, 'j_tropi');
        this.j_tropi.anchor.setTo(0.5);
        this.j_tropi.events.onInputDown.add(function() {
            this.j_tropi_close.visible = false;
            this.arrow11.visible = false;
            this.arrow12.visible = true;
        }, this);
        this.j_tropi.events.onInputUp.add(function() {

            if ((game.input.activePointer.x > 150 && game.input.activePointer.x < 430 && game.input.activePointer.y > 160 && game.input.activePointer.y < 385)) {
                this.arrow12.visible = false;
                this.j_tropi.visible = false;
                this.j_ani_tropi.visible = true;
                this.j_juice.animations.add('j_juice', [3, 4, 5, 6]);
                this.j_juice.animations.play('j_juice', 8, false).onComplete.add(function() {

                }, this);

                this.j_ani_tropi.animations.add('j_ani_tropi', [0, 1, 2, 3, 4, 5, 6]);
                this.j_ani_tropi.animations.play('j_ani_tropi', 8, false).onComplete.add(function() {
                    this.j_ani_tropi.visible = false;
                    game.add.tween(this.playbtn.scale).to({
                        x: 0.9,
                        y: 0.9
                    }, 800, Phaser.Easing.Quadratic.Out, true);

                }, this);

            } else {
                this.arrow11.visible = true;
                this.arrow12.visible = false;
                game.add.tween(this.j_tropi).to({
                    x: 400,
                    y: 540
                }, 800, Phaser.Easing.Quadratic.Out, true);
            }
        }, this);
        this.tropigroup.add(this.j_tropi);


        this.j_tropi_close = game.add.sprite(397, 438, 'j_tropi_close');
        this.j_tropi_close.anchor.setTo(0.5);
        this.tropigroup.add(this.j_tropi_close);

        this.pinegroup.x = -200;
        this.tropigroup.x = 200;


        /////////////\\\\\\\\\\\////////////\\\\\\\\\\\\\\////////////\\\\\\\
        // this.j_ice.visible=false;
        // this.j_lemon.visible=false;
        /////////////\\\\\\\\\\\////////////\\\\\\\\\\\\\\////////////\\\\\\\

        // this.mcnt1=0;
        // this.mcir = game.add.graphics(0,0);
        // this.mcir.beginFill(0x666666,0.1);
        // this.mcir.drawRect(0,0,504,800);
        // this.mcir.inputEnabled=true;
        // this.mcir.events.onInputDown.add(function(){
        //   this.mcnt1++;
        //   this['xcnt'+this.mcnt1]=game.input.activePointer.x;
        //   this['ycnt'+this.mcnt1]=game.input.activePointer.y;
        // this.mcir = game.add.graphics(game.input.activePointer.x,game.input.activePointer.y);
        // this.mcir.beginFill(0x000000,0.5);
        // this.mcir.drawCircle(0,0,20);
        // console.log(this['xcnt'+this.mcnt1]+':'+this['ycnt'+this.mcnt1]);
        // //console.log(this['ycnt'+this.mcnt1]);
        // },this);

        //  this.arrow = game.add.sprite(250,255,'j_ani_tropi');
        //  this.arrow.anchor.setTo(0.5);
        //  // this.arrow.alpha=0.4;
        //  // this.arrow.rotation=0.5;
        //  this.arrowdrag=true;

        /////////////\\\\\\\\\\\////////////\\\\\\\\\\\\\\////////////\\\\\\\

        for (i = 1; i <= 12; i++) {

            if (i == 1) {
                this['arrow' + i] = game.add.sprite(376, 515, 'arrow');
            }
            if (i == 2) {
                this['arrow' + i] = game.add.sprite(250, 315, 'arrow');
            }
            if (i == 3) {
                this['arrow' + i] = game.add.sprite(105, 515, 'arrow');
            }
            if (i == 4) {
                this['arrow' + i] = game.add.sprite(250, 315, 'arrow');
            }
            if (i == 5) {
                this['arrow' + i] = game.add.sprite(346, 515, 'arrow');
            }
            if (i == 6) {
                this['arrow' + i] = game.add.sprite(250, 315, 'arrow');
            }
            if (i == 7) {
                this['arrow' + i] = game.add.sprite(346, 405, 'arrow');
            }
            if (i == 8) {
                this['arrow' + i] = game.add.sprite(250, 315, 'arrow');
            }
            if (i == 9) {
                this['arrow' + i] = game.add.sprite(118, 405, 'arrow');
            }
            if (i == 10) {
                this['arrow' + i] = game.add.sprite(250, 315, 'arrow');
            }
            if (i == 11) {
                this['arrow' + i] = game.add.sprite(396, 405, 'arrow');
            }
            if (i == 12) {
                this['arrow' + i] = game.add.sprite(250, 315, 'arrow');
            }

            this['arrow' + i].anchor.setTo(0.5);
            this['arrow' + i].animations.add('arrow');
            this['arrow' + i].animations.play('arrow', 30, true);
            if (i > 1) {
                this['arrow' + i].visible = false;

            }
        }


        /////////////\\\\\\\\\\\////////////\\\\\\\\\\\\\\////////////\\\\\\\


        this.morebtn = game.add.sprite(85, 730, 'btn0004');
        this.morebtn.anchor.setTo(0.5);
        this.morebtn.scale.setTo(0.9);
        this.morebtn.inputEnabled = true;
        this.morebtn.input.useHandCursor = true;
        this.morebtn.events.onInputUp.add(this.moreLink, this);
        this.morebtn.events.onInputOver.add(this.btnOver, this);
        this.morebtn.events.onInputOut.add(this.btnOut, this);

        this.playbtn = game.add.sprite(430, 730, 'btn0002');
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

        if (this.arrowdrag) {
            this.arrow.x = game.input.activePointer.x;
            this.arrow.y = game.input.activePointer.y;
        }
    },
    openLink: function() {
        CreateLinksInGame("Baby-Elsa-Sushi-Cooking", "game", "logo");
    },
    moreLink: function() {
        CreateLinksInGame("Baby-Elsa-Sushi-Cooking", "game", "more");
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
            game.state.start('dect_juice');
        });

    },
}

// ddddddddd

Main.dect_juice = function() {}

Main.dect_juice.prototype = {
    create: function() {
        this.d1_arr = [0, 0, 0];

        this.levelGroup = game.add.group();
        this.introbg = game.add.sprite(0, 0, 'j_bg');
        this.levelGroup.add(this.introbg);

        this.baby_elsa = game.add.sprite(120, 425, 'baby_elsa');
        this.baby_elsa.anchor.setTo(0.5);

        this.j_panel = game.add.sprite(255, 630, 'j_panel');
        this.j_panel.anchor.setTo(0.5);

        this.g1_back = game.add.sprite(292.4, 421.45, 'g1_back' + Main.j_array[0]);
        this.g1_back.anchor.setTo(0.5);

        this.g1_clr = game.add.sprite(292.9, 392.95, 'g1_clr000' + Main.j_array[1]);
        this.g1_clr.anchor.setTo(0.5);

        this.g2_clr = game.add.sprite(287.3, 379.95, 'g2_clr000' + Main.j_array[1]);
        this.g2_clr.anchor.setTo(0.5);
        this.g2_clr.visible = false;

        this.g3_clr = game.add.sprite(274.9, 404.95, 'g3_clr000' + Main.j_array[1]);
        this.g3_clr.anchor.setTo(0.5);
        this.g3_clr.visible = false;

        this.g4_clr = game.add.sprite(275.4, 393.45, 'g4_clr000' + Main.j_array[1]);
        this.g4_clr.anchor.setTo(0.5);
        this.g4_clr.visible = false;

        this.g1_top = game.add.sprite(291.9, 278.45, 'g1_top' + Main.j_array[0]);
        this.g1_top.anchor.setTo(0.5);

        this.g1_fruit = game.add.sprite(344.3, 275.25, 'g1_fruit000' + Main.j_array[2]);
        this.g1_fruit.anchor.setTo(0.5);

        this.g2_fruit = game.add.sprite(340.7, 250.7, 'g2_fruit000' + Main.j_array[2]);
        this.g2_fruit.anchor.setTo(0.5);
        this.g2_fruit.visible = false;

        this.g3_fruit = game.add.sprite(358.3, 251.2, 'g3_fruit000' + Main.j_array[2]);
        this.g3_fruit.anchor.setTo(0.5);
        this.g3_fruit.visible = false;

        this.g4_fruit = game.add.sprite(360.8, 247.2, 'g4_fruit000' + Main.j_array[2]);
        this.g4_fruit.anchor.setTo(0.5);
        this.g4_fruit.visible = false;

        this.g1_frnt = game.add.sprite(292.4, 381.45, 'g1_frnt' + Main.j_array[0]);
        this.g1_frnt.anchor.setTo(0.5);


        this.d_panel = game.add.sprite(255, 690, 'd_panel');
        this.d_panel.anchor.setTo(0.5);


        this.group1 = game.add.group();
        var glassx = [100, 200, 300, 400];
        var glassy = [690, 690, 690, 690];

        for (i = 1; i <= 4; i++) {
            this['glass' + i] = game.add.sprite(glassx[i - 1], glassy[i - 1], 'd_gl000' + i);
            this['glass' + i].anchor.setTo(0.5);
            // this['glass'+i].scale.setTo(0.65);                
            this['glass' + i].inputEnabled = true;
            this['glass' + i].input.useHandCursor = true;
            this['glass' + i].id = i;
            this['glass' + i].events.onInputOver.add(this.btnOver, this);
            this['glass' + i].events.onInputOut.add(this.btnOut, this);
            this['glass' + i].events.onInputDown.add(this.glassfun, this);
            this.group1.add(this['glass' + i]);
        }



        this.group2 = game.add.group();
        var colorx = [100, 200, 300, 400];
        var colory = [690, 690, 690, 690];

        for (i = 1; i <= 4; i++) {
            this['color' + i] = game.add.sprite(colorx[i - 1], colory[i - 1], 'j_clr000' + i);
            this['color' + i].anchor.setTo(0.5);
            this['color' + i].scale.setTo(0.85);
            this['color' + i].inputEnabled = true;
            this['color' + i].input.useHandCursor = true;
            this['color' + i].id = i;
            this['color' + i].events.onInputOver.add(this.btnOver, this);
            this['color' + i].events.onInputOut.add(this.btnOut, this);
            this['color' + i].events.onInputDown.add(this.colorfun, this);
            this.group2.add(this['color' + i]);
        }

        this.group3 = game.add.group();
        var fruitx = [100, 200, 300, 400];
        var fruity = [690, 690, 690, 690];

        for (i = 1; i <= 4; i++) {
            this['fruit' + i] = game.add.sprite(fruitx[i - 1], fruity[i - 1], 'j_frt' + i);
            this['fruit' + i].anchor.setTo(0.5);
            this['fruit' + i].scale.setTo(0.85);
            this['fruit' + i].inputEnabled = true;
            this['fruit' + i].input.useHandCursor = true;
            this['fruit' + i].id = i;
            this['fruit' + i].events.onInputOver.add(this.btnOver, this);
            this['fruit' + i].events.onInputOut.add(this.btnOut, this);
            this['fruit' + i].events.onInputDown.add(this.fruitfun, this);
            this.group3.add(this['fruit' + i]);
        }

        this.group2.visible = false;
        this.group3.visible = false;

        this.n_arrow = game.add.sprite(470, 610, 'nxt');
        this.n_arrow.anchor.setTo(0.5);
        this.n_arrow.scale.setTo(0.5);
        this.n_arrow.inputEnabled = true;
        this.n_arrow.input.useHandCursor = true;
        this.n_arrow.id = 1;
        this.n_arrow.input.pixelPerfectOver = true;
        // this.n_arrow.events.onInputOver.add(this.btnOver, this);
        // this.n_arrow.events.onInputOut.add(this.btnOut, this);
        this.n_arrow.events.onInputDown.add(this.c1_array, this);


        this.b_arrow = game.add.sprite(30, 610, 'prr');
        this.b_arrow.anchor.setTo(0.5);
        this.b_arrow.scale.setTo(0.5);
        this.b_arrow.visible = false;
        this.b_arrow.inputEnabled = true;
        this.b_arrow.input.useHandCursor = true;
        this.b_arrow.id = 2;
        this.b_arrow.input.pixelPerfectOver = true;
        // this.b_arrow.events.onInputOver.add(this.btnOver, this);
        // this.b_arrow.events.onInputOut.add(this.btnOut, this);
        this.b_arrow.events.onInputDown.add(this.c1_array, this);

        this.morebtn = game.add.sprite(85, 520, 'btn0004');
        this.morebtn.anchor.setTo(0.5);
        this.morebtn.scale.setTo(0.9);
        this.morebtn.inputEnabled = true;
        this.morebtn.input.useHandCursor = true;
        this.morebtn.events.onInputUp.add(this.moreLink, this);
        this.morebtn.events.onInputOver.add(this.btnOver, this);
        this.morebtn.events.onInputOut.add(this.btnOut, this);

        this.playbtn = game.add.sprite(430, 520, 'btn0002');
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
    c1_array: function(evt) {
        if (evt.id == 1) {

            Main.c1_array[0]++;
            this['group' + Main.c1_array[0]].visible = false;
            this['group' + (Main.c1_array[0] + 1)].visible = true;
            this.b_arrow.visible = true;

        }

        if (evt.id == 2) {

            Main.c1_array[0]--;
            this['group' + (Main.c1_array[0] + 2)].visible = false;
            this['group' + (Main.c1_array[0] + 1)].visible = true;
            this.n_arrow.visible = true;

        }


        if (Main.c1_array[0] == 0) {
            this.b_arrow.visible = true;
            this.n_arrow.visible = false;
        }

        if (Main.c1_array[0] == 2) {
            // this.b_arrow.visible = true;
            this.n_arrow.visible = false;
        } else {
            // this.b_arrow.visible = false;
            // this.n_arrow.visible = true;

        }

        if (Main.c1_array[0] == 0) {

            this.b_arrow.visible = false;
            this.n_arrow.visible = true;
        }

    },
    glassfun: function(evt) {
        this.g1_frnt.loadTexture('g1_frnt' + evt.id);
        this.g1_back.loadTexture('g1_back' + evt.id);
        this.g1_top.loadTexture('g1_top' + evt.id);

        // this.g1_fruit.loadTexture('g1_fruit000'+evt.id);
        // this.g2_fruit.loadTexture('g2_fruit000'+evt.id);
        // this.g3_fruit.loadTexture('g3_fruit000'+evt.id);
        // this.g4_fruit.loadTexture('g4_fruit000'+evt.id);

        Main.j_array[0] = evt.id;
        if (Main.j_array[0] == 1) {
            this.g1_frnt.x = 292.4;
            this.g1_back.x = 292.4;
            this.g1_top.x = 291.9;

            this.g1_frnt.y = 381.45;
            this.g1_back.y = 421.45;
            this.g1_top.y = 278.45;

            this.g1_fruit.visible = true;
            this.g2_fruit.visible = false;
            this.g3_fruit.visible = false;
            this.g4_fruit.visible = false;

            this.g1_clr.visible = true;
            this.g2_clr.visible = false;
            this.g3_clr.visible = false;
            this.g4_clr.visible = false;

        }
        if (Main.j_array[0] == 2) {
            this.g1_frnt.x = 287.3;
            this.g1_back.x = 287.3;
            this.g1_top.x = 286.8;

            this.g1_frnt.y = 376.45;
            this.g1_back.y = 414.45;
            this.g1_top.y = 264.95;

            this.g1_fruit.visible = false;
            this.g2_fruit.visible = true;
            this.g3_fruit.visible = false;
            this.g4_fruit.visible = false;

            this.g1_clr.visible = false;
            this.g2_clr.visible = true;
            this.g3_clr.visible = false;
            this.g4_clr.visible = false;
        }
        if (Main.j_array[0] == 3) {
            this.g1_frnt.x = 275.9;
            this.g1_back.x = 275.9;
            this.g1_top.x = 286.8;

            this.g1_frnt.y = 400.45;
            this.g1_back.y = 409.45;
            this.g1_top.y = 264.95;

            this.g1_fruit.visible = false;
            this.g2_fruit.visible = false;
            this.g3_fruit.visible = true;
            this.g4_fruit.visible = false;

            this.g1_clr.visible = false;
            this.g2_clr.visible = false;
            this.g3_clr.visible = true;
            this.g4_clr.visible = false;

        }
        if (Main.j_array[0] == 4) {
            this.g1_frnt.x = 276.9;
            this.g1_back.x = 276.4;
            this.g1_top.x = 276.9;

            this.g1_frnt.y = 409.95;
            this.g1_back.y = 412.95;
            this.g1_top.y = 261.95;

            this.g1_fruit.visible = false;
            this.g2_fruit.visible = false;
            this.g3_fruit.visible = false;
            this.g4_fruit.visible = true;

            this.g1_clr.visible = false;
            this.g2_clr.visible = false;
            this.g3_clr.visible = false;
            this.g4_clr.visible = true;
        }

        effectssd = game.add.sprite(this.g1_frnt.x, this.g1_frnt.y, 'effectssd');
        effectssd.anchor.setTo(0.5);
        effectssd.animations.add('effectssd');
        effectssd.animations.play('effectssd', 20, false).onComplete.add(function(evt) {
            evt.destroy();
        }, this);

        this.d1_arr[0] = 1;
        if (this.d1_arr.indexOf(0) < 0) {
            game.add.tween(this.playbtn.scale).to({
                x: 0.9,
                y: 0.9
            }, 800, Phaser.Easing.Bounce.Out, true);
        }
    },

    colorfun: function(evt) {

        this.g1_clr.loadTexture('g1_clr000' + evt.id);
        this.g2_clr.loadTexture('g2_clr000' + evt.id);
        this.g3_clr.loadTexture('g3_clr000' + evt.id);
        this.g4_clr.loadTexture('g4_clr000' + evt.id);

        Main.j_array[1] = evt.id;
        if (Main.j_array[0] == 1) {

            this.g1_clr.visible = true;
            this.g2_clr.visible = false;
            this.g3_clr.visible = false;
            this.g4_clr.visible = false;

        }
        if (Main.j_array[0] == 2) {

            this.g1_clr.visible = false;
            this.g2_clr.visible = true;
            this.g3_clr.visible = false;
            this.g4_clr.visible = false;
        }
        if (Main.j_array[0] == 3) {

            this.g1_clr.visible = false;
            this.g2_clr.visible = false;
            this.g3_clr.visible = true;
            this.g4_clr.visible = false;

        }
        if (Main.j_array[0] == 4) {

            this.g1_clr.visible = false;
            this.g2_clr.visible = false;
            this.g3_clr.visible = false;
            this.g4_clr.visible = true;
        }

        effectssd = game.add.sprite(this.g1_clr.x, this.g1_clr.y, 'effectssd');
        effectssd.anchor.setTo(0.5);
        effectssd.animations.add('effectssd');
        effectssd.animations.play('effectssd', 20, false).onComplete.add(function(evt) {
            evt.destroy();
        }, this);
        this.d1_arr[1] = 1;
        if (this.d1_arr.indexOf(0) < 0) {
            game.add.tween(this.playbtn.scale).to({
                x: 0.9,
                y: 0.9
            }, 800, Phaser.Easing.Bounce.Out, true);
        }
    },

    fruitfun: function(evt) {

        this.g1_fruit.loadTexture('g1_fruit000' + evt.id);
        this.g2_fruit.loadTexture('g2_fruit000' + evt.id);
        this.g3_fruit.loadTexture('g3_fruit000' + evt.id);
        this.g4_fruit.loadTexture('g4_fruit000' + evt.id);

        Main.j_array[2] = evt.id;
        if (Main.j_array[0] == 1) {

            this.g1_fruit.visible = true;
            this.g2_fruit.visible = false;
            this.g3_fruit.visible = false;
            this.g4_fruit.visible = false;

        }
        if (Main.j_array[0] == 2) {

            this.g1_fruit.visible = false;
            this.g2_fruit.visible = true;
            this.g3_fruit.visible = false;
            this.g4_fruit.visible = false;
        }
        if (Main.j_array[0] == 3) {

            this.g1_fruit.visible = false;
            this.g2_fruit.visible = false;
            this.g3_fruit.visible = true;
            this.g4_fruit.visible = false;

        }
        if (Main.j_array[0] == 4) {

            this.g1_fruit.visible = false;
            this.g2_fruit.visible = false;
            this.g3_fruit.visible = false;
            this.g4_fruit.visible = true;
        }

        effectssd = game.add.sprite(this.g1_fruit.x, this.g1_fruit.y, 'effectssd');
        effectssd.anchor.setTo(0.5);
        effectssd.animations.add('effectssd');
        effectssd.animations.play('effectssd', 20, false).onComplete.add(function(evt) {
            evt.destroy();
        }, this);
        this.d1_arr[2] = 1;
        if (this.d1_arr.indexOf(0) < 0) {
            game.add.tween(this.playbtn.scale).to({
                x: 0.9,
                y: 0.9
            }, 800, Phaser.Easing.Bounce.Out, true);
        }
    },
    openLink: function() {
        CreateLinksInGame("Baby-Elsa-Sushi-Cooking", "game", "logo");
    },
    moreLink: function() {
        CreateLinksInGame("Baby-Elsa-Sushi-Cooking", "game", "more");
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
            // game.state.start('make_cake2');
            game.state.start('final_screen');
        });
    },
}

// d22222222

Main.dect_cake = function() {}

Main.dect_cake.prototype = {
    create: function() {

        this.d2_arr = [0, 0, 0];

        this.levelGroup = game.add.group();
        this.introbg = game.add.sprite(0, 0, 'j_bg');
        this.levelGroup.add(this.introbg);

        this.baby_elsa = game.add.sprite(115.3, 415, 'baby_elsa');
        this.baby_elsa.anchor.setTo(0.5);

        this.j_panel = game.add.sprite(254, 625.5, 'j_panel');
        this.j_panel.anchor.setTo(0.5);

        this.cakegp = game.add.group();

        this.d_plate = game.add.sprite(255, 530, 'd_plate');
        this.d_plate.anchor.setTo(0.5);
        this.cakegp.add(this.d_plate);


        this.dect_cake = game.add.sprite(165.25, 507.6, 'dect_cake000' + Main.cake_array[0]);
        this.dect_cake.anchor.setTo(0.5);
        this.cakegp.add(this.dect_cake);

        this.d_cake_top = game.add.sprite(163.05, 461.3, 'd_cake_top000' + Main.cake_array[1]);
        this.d_cake_top.anchor.setTo(0.5);
        this.cakegp.add(this.d_cake_top);

        this.dect_cake_top = game.add.sprite(160.45, 453.4, 'dect_cake_top000' + Main.cake_array[2]);
        this.dect_cake_top.anchor.setTo(0.5);
        this.cakegp.add(this.dect_cake_top);


        this.dect_cake1 = game.add.sprite(335.25, 507.6, 'dect_cake000' + Main.cake_array[0]);
        this.dect_cake1.anchor.setTo(0.5);
        this.cakegp.add(this.dect_cake1);

        this.d_cake_top1 = game.add.sprite(333.05, 461.3, 'd_cake_top000' + Main.cake_array[1]);
        this.d_cake_top1.anchor.setTo(0.5);
        this.cakegp.add(this.d_cake_top1);

        this.dect_cake_top1 = game.add.sprite(330.45, 453.4, 'dect_cake_top000' + Main.cake_array[2]);
        this.dect_cake_top1.anchor.setTo(0.5);
        this.cakegp.add(this.dect_cake_top1);

        this.icongp = game.add.group();
        this.d_panel = game.add.sprite(255, 710, 'd_panel');
        this.d_panel.anchor.setTo(0.5);
        this.d_panel.scale.setTo(0.85);
        this.icongp.add(this.d_panel);


        this.i1_cnt = 1;
        this.icon01 = game.add.sprite(130, 710, 'c_btn1');
        this.icon01.anchor.setTo(0.5);
        this.icon01.scale.setTo(0.8);
        this.icon01.inputEnabled = true;
        this.icon01.input.useHandCursor = true;
        this.icon01.events.onInputOver.add(this.btnOver, this);
        this.icon01.events.onInputOut.add(this.btnOut, this);
        this.icon01.events.onInputDown.add(function() {
            this.i1_cnt++
                this.dect_cake.loadTexture('dect_cake000' + this.i1_cnt);
            this.dect_cake1.loadTexture('dect_cake000' + this.i1_cnt);
            Main.cake_array[0] = this.i1_cnt;

            if (this.i1_cnt >= 6) {
                this.i1_cnt = 0;
            }

            this.d2_arr[0] = 1;
            if (this.d2_arr.indexOf(0) < 0) {
                game.add.tween(this.playbtn.scale).to({
                    x: 0.9,
                    y: 0.9
                }, 800, Phaser.Easing.Bounce.Out, true);
            }

            effectssd = game.add.sprite(250, 480, 'effectssd');
            effectssd.anchor.setTo(0.5);
            effectssd.animations.add('effectssd');
            effectssd.animations.play('effectssd', 20, false).onComplete.add(function(evt) {
                evt.destroy();
            }, this);
        }, this);
        this.icongp.add(this.icon01);


        this.i2_cnt = 1;
        this.icon02 = game.add.sprite(250, 710, 'c_btn2');
        this.icon02.anchor.setTo(0.5);
        this.icon02.scale.setTo(0.8);
        this.icon02.inputEnabled = true;
        this.icon02.input.useHandCursor = true;
        this.icon02.events.onInputOver.add(this.btnOver, this);
        this.icon02.events.onInputOut.add(this.btnOut, this);
        this.icon02.events.onInputDown.add(function() {
            this.i2_cnt++
                this.d_cake_top.loadTexture('d_cake_top000' + this.i2_cnt);
            this.d_cake_top1.loadTexture('d_cake_top000' + this.i2_cnt);
            Main.cake_array[1] = this.i2_cnt;

            if (this.i2_cnt >= 6) {
                this.i2_cnt = 0;
            }

            this.d2_arr[1] = 1;
            if (this.d2_arr.indexOf(0) < 0) {
                game.add.tween(this.playbtn.scale).to({
                    x: 0.9,
                    y: 0.9
                }, 800, Phaser.Easing.Bounce.Out, true);
            }

            effectssd = game.add.sprite(250, 480, 'effectssd');
            effectssd.anchor.setTo(0.5);
            effectssd.animations.add('effectssd');
            effectssd.animations.play('effectssd', 20, false).onComplete.add(function(evt) {
                evt.destroy();
            }, this);
        }, this);
        this.icongp.add(this.icon02);


        this.i3_cnt = 1;
        this.icon03 = game.add.sprite(370, 710, 'c_btn3');
        this.icon03.anchor.setTo(0.5);
        this.icon03.scale.setTo(0.8);
        this.icon03.inputEnabled = true;
        this.icon03.input.useHandCursor = true;
        this.icon03.events.onInputOver.add(this.btnOver, this);
        this.icon03.events.onInputOut.add(this.btnOut, this);
        this.icon03.events.onInputDown.add(function() {
            this.i3_cnt++
                this.dect_cake_top.loadTexture('dect_cake_top000' + this.i3_cnt);
            this.dect_cake_top1.loadTexture('dect_cake_top000' + this.i3_cnt);
            Main.cake_array[2] = this.i3_cnt;

            if (this.i3_cnt >= 6) {
                this.i3_cnt = 0;
            }

            this.d2_arr[2] = 1;
            if (this.d2_arr.indexOf(0) < 0) {
                game.add.tween(this.playbtn.scale).to({
                    x: 0.9,
                    y: 0.9
                }, 800, Phaser.Easing.Bounce.Out, true);
            }

            effectssd = game.add.sprite(250, 480, 'effectssd');
            effectssd.anchor.setTo(0.5);
            effectssd.animations.add('effectssd');
            effectssd.animations.play('effectssd', 20, false).onComplete.add(function(evt) {
                evt.destroy();
            }, this);
        }, this);
        this.icongp.add(this.icon03);


        this.icongp.x = 500;
        this.cakegp.x = -500;

        this.morebtn = game.add.sprite(65, 737, 'btn0004');
        this.morebtn.anchor.setTo(0.5);
        this.morebtn.scale.setTo(0.9);
        // this.morebtn.scale.setTo(0);
        this.morebtn.inputEnabled = true;
        this.morebtn.input.useHandCursor = true;
        this.morebtn.events.onInputUp.add(this.moreLink, this);
        this.morebtn.events.onInputOver.add(this.btnOver, this);
        this.morebtn.events.onInputOut.add(this.btnOut, this);

        this.playbtn = game.add.sprite(440, 600, 'btn0002');
        this.playbtn.anchor.setTo(0.5);
        // this.playbtn.scale.setTo(0.85);
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
            }, 0, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                game.add.tween(this.morebtn).to({
                    y: 600
                }, 700, Phaser.Easing.Quadratic.Out, true);
                game.add.tween(this.cakegp).to({
                    x: 0
                }, 700, Phaser.Easing.Quadratic.Out, true);
                game.add.tween(this.icongp).to({
                    x: 0
                }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {

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
        CreateLinksInGame("Baby-Elsa-Sushi-Cooking", "game", "logo");
    },
    moreLink: function() {
        CreateLinksInGame("Baby-Elsa-Sushi-Cooking", "game", "more");
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
            game.state.start('make_cake2');
        });

    },
}

// fffffffff

Main.final_screen = function() {}

Main.final_screen.prototype = {
    create: function() {
        this.levelGroup = game.add.group();
        this.introbg = game.add.sprite(0, 0, 'j_bg');
        this.levelGroup.add(this.introbg);

        this.baby_elsa = game.add.sprite(120, 425, 'baby_elsa');
        this.baby_elsa.anchor.setTo(0.5);

        this.j_panel = game.add.sprite(255, 630, 'j_panel');
        this.j_panel.anchor.setTo(0.5);

        this.jc_group = game.add.group();
        this.g1_back = game.add.sprite(292.4, 421.45, 'g1_back' + Main.j_array[0]);
        this.g1_back.anchor.setTo(0.5);
        this.jc_group.add(this.g1_back);

        this.g1_clr = game.add.sprite(292.9, 392.95, 'g1_clr000' + Main.j_array[1]);
        this.g1_clr.anchor.setTo(0.5);
        this.g1_clr.visible = false;
        this.jc_group.add(this.g1_clr);

        this.g2_clr = game.add.sprite(287.3, 379.95, 'g2_clr000' + Main.j_array[1]);
        this.g2_clr.anchor.setTo(0.5);
        this.g2_clr.visible = false;
        this.jc_group.add(this.g2_clr);

        this.g3_clr = game.add.sprite(274.9, 404.95, 'g3_clr000' + Main.j_array[1]);
        this.g3_clr.anchor.setTo(0.5);
        this.g3_clr.visible = false;
        this.jc_group.add(this.g3_clr);

        this.g4_clr = game.add.sprite(275.4, 393.45, 'g4_clr000' + Main.j_array[1]);
        this.g4_clr.anchor.setTo(0.5);
        this.g4_clr.visible = false;
        this.jc_group.add(this.g4_clr);

        this.g1_top = game.add.sprite(291.9, 278.45, 'g1_top' + Main.j_array[0]);
        this.g1_top.anchor.setTo(0.5);
        this.jc_group.add(this.g1_top);

        this.g1_fruit = game.add.sprite(344.3, 275.25, 'g1_fruit000' + Main.j_array[2]);
        this.g1_fruit.anchor.setTo(0.5);
        this.g1_fruit.visible = false;
        this.jc_group.add(this.g1_fruit);

        this.g2_fruit = game.add.sprite(340.7, 250.7, 'g2_fruit000' + Main.j_array[2]);
        this.g2_fruit.anchor.setTo(0.5);
        this.g2_fruit.visible = false;
        this.jc_group.add(this.g2_fruit);

        this.g3_fruit = game.add.sprite(358.3, 251.2, 'g3_fruit000' + Main.j_array[2]);
        this.g3_fruit.anchor.setTo(0.5);
        this.g3_fruit.visible = false;
        this.jc_group.add(this.g3_fruit);

        this.g4_fruit = game.add.sprite(360.8, 247.2, 'g4_fruit000' + Main.j_array[2]);
        this.g4_fruit.anchor.setTo(0.5);
        this.g4_fruit.visible = false;
        this.jc_group.add(this.g4_fruit);

        this.g1_frnt = game.add.sprite(292.4, 381.45, 'g1_frnt' + Main.j_array[0]);
        this.g1_frnt.anchor.setTo(0.5);
        this.jc_group.add(this.g1_frnt);


        this.cakegp = game.add.group();

        this.d_plate = game.add.sprite(255, 530, 'd_plate');
        this.d_plate.anchor.setTo(0.5);
        this.cakegp.add(this.d_plate);


        this.dect_cake = game.add.sprite(165.25, 507.6, 'dect_cake000' + Main.cake_array[0]);
        this.dect_cake.anchor.setTo(0.5);
        this.cakegp.add(this.dect_cake);

        this.d_cake_top = game.add.sprite(163.05, 461.3, 'd_cake_top000' + Main.cake_array[1]);
        this.d_cake_top.anchor.setTo(0.5);
        this.cakegp.add(this.d_cake_top);

        this.dect_cake_top = game.add.sprite(160.45, 453.4, 'dect_cake_top000' + Main.cake_array[2]);
        this.dect_cake_top.anchor.setTo(0.5);
        this.cakegp.add(this.dect_cake_top);


        this.dect_cake1 = game.add.sprite(335.25, 507.6, 'dect_cake000' + Main.cake_array[0]);
        this.dect_cake1.anchor.setTo(0.5);
        this.cakegp.add(this.dect_cake1);

        this.d_cake_top1 = game.add.sprite(333.05, 461.3, 'd_cake_top000' + Main.cake_array[1]);
        this.d_cake_top1.anchor.setTo(0.5);
        this.cakegp.add(this.d_cake_top1);

        this.dect_cake_top1 = game.add.sprite(330.45, 453.4, 'dect_cake_top000' + Main.cake_array[2]);
        this.dect_cake_top1.anchor.setTo(0.5);
        this.cakegp.add(this.dect_cake_top1);

        this.cakegp.scale.setTo(0.67);
        this.cakegp.x = -10;
        this.cakegp.y = 130;


        this.cakegroup2 = game.add.group();
        this.c_plate = game.add.sprite(255, 530, 'c_plate');
        this.c_plate.anchor.setTo(0.5);
        this.cakegroup2.add(this.c_plate);

        this.d_cake1 = game.add.sprite(170, 529.9, 'd_cake000' + Main.cake2_array[0]);
        this.d_cake1.anchor.setTo(0.5);
        this.cakegroup2.add(this.d_cake1);

        this.d1_top_1 = game.add.sprite(169.85, 522.15, 'd_top1_000' + Main.cake2_array[1]);
        this.d1_top_1.anchor.setTo(0.5);
        this.cakegroup2.add(this.d1_top_1);

        this.d_top_1 = game.add.sprite(169.65, 511.5, 'd_top000' + Main.cake2_array[2]);
        this.d_top_1.anchor.setTo(0.5);
        this.cakegroup2.add(this.d_top_1);


        this.d_cake2 = game.add.sprite(230, 529.9, 'd_cake000' + Main.cake2_array[0]);
        this.d_cake2.anchor.setTo(0.5);
        this.cakegroup2.add(this.d_cake2);

        this.d1_top_2 = game.add.sprite(229.85, 522.15, 'd_top1_000' + Main.cake2_array[1]);
        this.d1_top_2.anchor.setTo(0.5);
        this.cakegroup2.add(this.d1_top_2);

        this.d_top_2 = game.add.sprite(229.65, 511.5, 'd_top000' + Main.cake2_array[2]);
        this.d_top_2.anchor.setTo(0.5);
        this.cakegroup2.add(this.d_top_2);


        this.d_cake3 = game.add.sprite(280, 529.9, 'd_cake000' + Main.cake2_array[0]);
        this.d_cake3.anchor.setTo(0.5);
        this.cakegroup2.add(this.d_cake3);

        this.d1_top_3 = game.add.sprite(279.85, 522.15, 'd_top1_000' + Main.cake2_array[1]);
        this.d1_top_3.anchor.setTo(0.5);
        this.cakegroup2.add(this.d1_top_3);

        this.d_top_3 = game.add.sprite(279.65, 511.5, 'd_top000' + Main.cake2_array[2]);
        this.d_top_3.anchor.setTo(0.5);
        this.cakegroup2.add(this.d_top_3);


        this.d_cake4 = game.add.sprite(330, 529.9, 'd_cake000' + Main.cake2_array[0]);
        this.d_cake4.anchor.setTo(0.5);
        this.cakegroup2.add(this.d_cake4);

        this.d1_top_4 = game.add.sprite(329.85, 522.15, 'd_top1_000' + Main.cake2_array[1]);
        this.d1_top_4.anchor.setTo(0.5);
        this.cakegroup2.add(this.d1_top_4);

        this.d_top_4 = game.add.sprite(329.65, 511.5, 'd_top000' + Main.cake2_array[2]);
        this.d_top_4.anchor.setTo(0.5);
        this.cakegroup2.add(this.d_top_4);

        this.cakegroup2.scale.setTo(0.8);
        this.cakegroup2.x = 70;
        this.cakegroup2.y = 175;

        this.jc_group.scale.setTo(0.7);
        this.jc_group.x = 190;
        this.jc_group.y = 125;



        if (Main.j_array[0] == 1) {
            this.g1_frnt.x = 292.4;
            this.g1_back.x = 292.4;
            this.g1_top.x = 291.9;

            this.g1_frnt.y = 381.45;
            this.g1_back.y = 421.45;
            this.g1_top.y = 278.45;

            this.g1_fruit.visible = true;
            this.g2_fruit.visible = false;
            this.g3_fruit.visible = false;
            this.g4_fruit.visible = false;

            this.g1_clr.visible = true;
            this.g2_clr.visible = false;
            this.g3_clr.visible = false;
            this.g4_clr.visible = false;

        }
        if (Main.j_array[0] == 2) {
            this.g1_frnt.x = 287.3;
            this.g1_back.x = 287.3;
            this.g1_top.x = 286.8;

            this.g1_frnt.y = 376.45;
            this.g1_back.y = 414.45;
            this.g1_top.y = 264.95;

            this.g1_fruit.visible = false;
            this.g2_fruit.visible = true;
            this.g3_fruit.visible = false;
            this.g4_fruit.visible = false;

            this.g1_clr.visible = false;
            this.g2_clr.visible = true;
            this.g3_clr.visible = false;
            this.g4_clr.visible = false;
        }
        if (Main.j_array[0] == 3) {
            this.g1_frnt.x = 275.9;
            this.g1_back.x = 275.9;
            this.g1_top.x = 286.8;

            this.g1_frnt.y = 400.45;
            this.g1_back.y = 409.45;
            this.g1_top.y = 264.95;

            this.g1_fruit.visible = false;
            this.g2_fruit.visible = false;
            this.g3_fruit.visible = true;
            this.g4_fruit.visible = false;

            this.g1_clr.visible = false;
            this.g2_clr.visible = false;
            this.g3_clr.visible = true;
            this.g4_clr.visible = false;

        }
        if (Main.j_array[0] == 4) {
            this.g1_frnt.x = 276.9;
            this.g1_back.x = 276.4;
            this.g1_top.x = 276.9;

            this.g1_frnt.y = 409.95;
            this.g1_back.y = 412.95;
            this.g1_top.y = 261.95;

            this.g1_fruit.visible = false;
            this.g2_fruit.visible = false;
            this.g3_fruit.visible = false;
            this.g4_fruit.visible = true;

            this.g1_clr.visible = false;
            this.g2_clr.visible = false;
            this.g3_clr.visible = false;
            this.g4_clr.visible = true;
        }





        this.thumbGroup = game.add.group();
        game.load.crossOrigin = '*';
        //this.randomId = game.rnd.integerInRange(0,  RelatedGames.length-1);
        /* this.thumbVar = game.add.sprite(167, 652, 'thumb_'+this.randomId);
         this.thumbVar.inputEnabled = true
         this.thumbVar.input.useHandCursor = true;
         this.thumbVar.events.onInputUp.add(this.thumbLink, this);
         this.thumbframeVar = game.add.sprite(165, 650, 'Tump_frame'); 
         this.thumbVar.height=this.thumbframeVar.height-2;
         this.thumbVar.width=this.thumbframeVar.width-2;
         this.thumbGroup.add(this.thumbVar);
         this.thumbGroup.add(this.thumbframeVar);
         this.thumbGroup.y=150;*/


        this.morebtn = game.add.sprite(85, 730, 'btn0004');
        this.morebtn.anchor.setTo(0.5);
        this.morebtn.scale.setTo(0.9);
        this.morebtn.inputEnabled = true;
        this.morebtn.input.useHandCursor = true;
        this.morebtn.events.onInputUp.add(this.moreLink, this);
        this.morebtn.events.onInputOver.add(this.btnOver, this);
        this.morebtn.events.onInputOut.add(this.btnOut, this);

        this.playbtn = game.add.sprite(430, 730, 'btn0001');
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
                game.add.tween(this.playbtn.scale).to({
                    x: 0.9,
                    y: 0.9
                }, 800, Phaser.Easing.Quadratic.Out, true);
                //game.add.tween(this.thumbGroup).to({y:0}, 800, Phaser.Easing.Quadratic.Out, true);

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
        CreateLinksInGame("Baby-Elsa-Sushi-Cooking", "gameover", "thumb", RelatedGames[this.randomId]['id']);
    },
    openLink: function() {
        CreateLinksInGame("Baby-Elsa-Sushi-Cooking", "gameover", "logo");
    },
    moreLink: function() {
        CreateLinksInGame("Baby-Elsa-Sushi-Cooking", "gameover", "more");
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
            //  Main.c1_array=[0];

            // Main.j_array=[1];
            // Main.cake_array=[1];
            // Main.cake2_array=[1];
            Main.c1_array = [0];

            Main.j_array = [1, 1, 1];
            Main.cake_array = [6, 6, 6];
            Main.cake2_array = [1, 1, 1];
            game.state.start('intro');
        });

    },
}

// c2222222222

Main.make_cake2 = function() {}

Main.make_cake2.prototype = {
    create: function() {
        this.br_drag = false;
        this.gr_drag = false;
        this.rc_drag = false;
        this.roll1_drag = false;
        this.roll2_drag = false;
        this.closedrag = false;
        this.c1drag = false;
        this.c2drag = false;
        this.c3drag = false;
        this.c4drag = false;

        this.levelGroup = game.add.group();
        this.introbg = game.add.sprite(0, 0, 'j_bg');
        this.levelGroup.add(this.introbg);

        this.baby_elsa = game.add.sprite(120, 425, 'baby_elsa');
        this.baby_elsa.anchor.setTo(0.5);

        this.j_panel = game.add.sprite(255, 630, 'j_panel');
        this.j_panel.anchor.setTo(0.5);

        this.stand_cnt = 0;
        this.stand_c_0001 = game.add.sprite(255, 550, 'stand_c_0001');
        this.stand_c_0001.anchor.setTo(0.5);
        // this.stand_c_0001.inputEnabled=true;
        // this.stand_c_0001.input.useHandCursor=true;
        this.stand_c_0001.events.onInputDown.add(function() {
            this.stand_c_0001.inputEnabled = false;
            this.stand_cnt++
                if (this.stand_cnt == 1) {
                    this.c_arrow9.visible = false;
                    this.c_arrow10.visible = true;

                    this.stand_c_0001.loadTexture('stand_c_0002');
                    this.c_black1.visible = false;
                    this.c_green11.visible = false;
                    this.c_brown11.visible = false;
                    this.c_ani_rice.visible = false;
                    this.stand_c_0001.inputEnabled = true;
                    this.stand_c_0001.input.useHandCursor = true;
                }
            if (this.stand_cnt == 2) {
                this.c_arrow10.visible = false;

                this.stand_c_0001.loadTexture('stand_c_0001');
                this.c_roll.visible = true;
                game.add.tween(this.c_roll).to({
                    x: -250
                }, 800, Phaser.Easing.Quadratic.Out, true, 500);
                game.add.tween(this.stand_c_0001).to({
                    x: -250
                }, 800, Phaser.Easing.Quadratic.Out, true, 500).onComplete.add(function() {
                    game.add.tween(this.c_rice).to({
                        x: 285
                    }, 800, Phaser.Easing.Quadratic.Out, true);
                    game.add.tween(this.c_cutter).to({
                        x: 255
                    }, 800, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                        this.c_rice.inputEnabled = true;
                        this.c_rice.input.useHandCursor = true;
                        this.c_arrow11.visible = true;
                    }, this);
                }, this);
            }
        }, this);


        this.c_black1 = game.add.sprite(255, 550, 'c_black1');
        this.c_black1.anchor.setTo(0.5);
        this.c_black1.visible = false;

        ///////////////////\\\\\\\\\\\\\\\\\\\///////////////////\\\\\\\\\\\\\\\\

        this.c_black = game.add.sprite(300, 700, 'c_black');
        this.c_black.anchor.setTo(0.5);
        this.c_black.inputEnabled = true;
        this.c_black.input.useHandCursor = true;
        this.c_black.input.enableDrag();
        this.c_black.events.onInputDown.add(function() {
            this.c_arrow1.visible = false;
            this.c_arrow2.visible = true;
        }, this);
        this.c_black.events.onInputUp.add(function() {

            if ((game.input.activePointer.x > 100 && game.input.activePointer.x < 400 && game.input.activePointer.y > 480 && game.input.activePointer.y < 600)) {
                this.c_arrow2.visible = false;
                this.c_black.visible = false;
                this.c_black1.visible = true;

                game.add.tween(this.c_bowl).to({
                    x: 280
                }, 800, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                    this.c_bowl.inputEnabled = true;
                    this.c_bowl.input.useHandCursor = true;
                    this.c_bowl.input.enableDrag();
                    this.c_arrow3.visible = true;
                }, this);

            } else {
                this.c_arrow1.visible = true;
                this.c_arrow2.visible = false;

                game.add.tween(this.c_black).to({
                    x: 300,
                    y: 700
                }, 800, Phaser.Easing.Quadratic.Out, true);

            }
        }, this);

        this.c_ani_rice = game.add.sprite(255, 540, 'c_ani_rice');
        this.c_ani_rice.anchor.setTo(0.5);
        this.c_ani_rice.visible = false;

        this.c_ani_bowl = game.add.sprite(320, 380, 'c_ani_bowl');
        this.c_ani_bowl.anchor.setTo(0.5);
        this.c_ani_bowl.scale.setTo(0.9);
        this.c_ani_bowl.visible = false;

        this.c_bowl = game.add.sprite(650, 680, 'c_bowl');
        // this.c_bowl = game.add.sprite(280,680,'c_bowl');
        this.c_bowl.anchor.setTo(0.5);
        this.c_bowl.scale.setTo(0.9);
        // this.c_bowl.inputEnabled=true;
        // this.c_bowl.input.useHandCursor=true;
        // this.c_bowl.input.enableDrag();
        this.c_bowl.events.onInputDown.add(function() {
            this.c_arrow3.visible = false;
            this.c_arrow4.visible = true;

        }, this);
        this.c_bowl.events.onInputUp.add(function() {

            if ((game.input.activePointer.x > 100 && game.input.activePointer.x < 400 && game.input.activePointer.y > 280 && game.input.activePointer.y < 600)) {
                this.c_arrow4.visible = false;
                this.c_ani_bowl.visible = true;
                this.c_bowl.visible = false;
                this.c_ani_rice.visible = true;
                this.c_ani_rice.animations.add('c_ani_rice');
                this.c_ani_rice.animations.play('c_ani_rice', 10, false).onComplete.add(function() {

                }, this);

                this.c_ani_bowl.animations.add('c_ani_bowl');
                this.c_ani_bowl.animations.play('c_ani_bowl', 10, false).onComplete.add(function() {
                    this.c_ani_bowl.visible = false;
                    game.add.tween(this.c_brown).to({
                        x: 250
                    }, 800, Phaser.Easing.Quadratic.Out, true, 500).onComplete.add(function() {
                        this.c_brown.inputEnabled = true;
                        this.c_brown.input.useHandCursor = true;
                        this.c_arrow5.visible = true;
                    }, this);
                }, this);
            } else {
                this.c_arrow3.visible = true;
                this.c_arrow4.visible = false;
                game.add.tween(this.c_bowl).to({
                    x: 280,
                    y: 680
                }, 800, Phaser.Easing.Quadratic.Out, true);

            }
        }, this);

        //////////////////\\\\////\\\\////\\\\\\\\\\\\\\///////////\\\\\\\\\\\/////////////

        this.c_brown = game.add.sprite(650, 700, 'c_brown');
        // this.c_brown = game.add.sprite(250,700,'c_brown');
        this.c_brown.anchor.setTo(0.5);
        // this.c_brown.inputEnabled=true;
        // this.c_brown.input.useHandCursor=true;
        this.c_brown.events.onInputDown.add(function() {
            this.c_arrow5.visible = false;
            this.c_arrow6.visible = true;
            this.c_brown.inputEnabled = false;
            this.c_brown1.visible = true;
            this.br_drag = true;
            this.dragCirclel1.inputEnabled = true;
            this.dragCirclel1.input.useHandCursor = true;
        }, this);

        this.dragCirclel1 = game.add.graphics(130, 490.6);
        this.dragCirclel1.beginFill(0x000000, 0);
        this.dragCirclel1.drawRect(0, 0, 280, 100);
        this.dragCirclel1.events.onInputDown.add(function() {
            this.dragCirclel1.inputEnabled = false;
            this.c_arrow6.visible = false;
            this.br_drag = false;
            this.c_brown11.visible = true;
            this.c_brown1.visible = false;
            game.add.tween(this.c_brown).to({
                x: -250
            }, 800, Phaser.Easing.Quadratic.Out, true, 500).onComplete.add(function() {
                game.add.tween(this.c_green).to({
                    x: 250
                }, 800, Phaser.Easing.Quadratic.Out, true, 500).onComplete.add(function() {
                    this.c_green.inputEnabled = true;
                    this.c_green.input.useHandCursor = true;
                    this.c_arrow7.visible = true;
                }, this);
            }, this);
        }, this);


        this.c_brown11 = game.add.sprite(250, 530, 'c_brown1');
        this.c_brown11.anchor.setTo(0.5);
        this.c_brown11.visible = false;


        this.c_brown1 = game.add.sprite(250, 700, 'c_brown1');
        this.c_brown1.anchor.setTo(0.5);
        this.c_brown1.visible = false;
        //////////////////\\\\////\\\\////\\\\\\\\\\\\\\///////////\\\\\\\\\\\/////////////

        this.c_green = game.add.sprite(650, 700, 'c_green');
        // this.c_green = game.add.sprite(250,700,'c_green');
        this.c_green.anchor.setTo(0.5);
        // this.c_green.inputEnabled=true;
        // this.c_green.input.useHandCursor=true;
        this.c_green.events.onInputDown.add(function() {
            this.c_arrow8.visible = true;
            this.c_arrow7.visible = false;
            this.c_green.inputEnabled = false;
            this.c_green1.visible = true;
            this.gr_drag = true;
            this.dragCirclel2.inputEnabled = true;
            this.dragCirclel2.input.useHandCursor = true;
        }, this);

        this.dragCirclel2 = game.add.graphics(130, 490.6);
        this.dragCirclel2.beginFill(0x000000, 0);
        this.dragCirclel2.drawRect(0, 0, 280, 100);
        this.dragCirclel2.events.onInputDown.add(function() {
            this.c_arrow8.visible = false;
            this.dragCirclel2.inputEnabled = false;
            this.fr_drag = false;
            this.c_green11.visible = true;
            this.c_green1.visible = false;
            game.add.tween(this.c_green).to({
                x: -250
            }, 800, Phaser.Easing.Quadratic.Out, true, 500).onComplete.add(function() {
                this.stand_c_0001.inputEnabled = true;
                this.stand_c_0001.input.useHandCursor = true;
                this.c_arrow9.visible = true;
            }, this);
        }, this);

        this.c_green11 = game.add.sprite(250, 550, 'c_green1');
        this.c_green11.anchor.setTo(0.5);
        this.c_green11.visible = false;


        this.c_green1 = game.add.sprite(250, 700, 'c_green1');
        this.c_green1.anchor.setTo(0.5);
        this.c_green1.visible = false;

        this.c_roll = game.add.sprite(255, 530, 'c_roll');
        this.c_roll.anchor.setTo(0.5);
        this.c_roll.visible = false;
        //////////////////\\\\////\\\\////\\\\\\\\\\\\\\///////////\\\\\\\\\\\/////////////



        this.cutter_cnt = 0;
        this.c_cutter = game.add.sprite(700, 420, 'c_cutter');
        // this.c_cutter = game.add.sprite(255,420,'c_cutter');
        this.c_cutter.anchor.setTo(0.5);
        // this.c_cutter.inputEnabled=true;
        // this.c_cutter.input.useHandCursor=true;
        this.c_cutter.events.onInputDown.add(function() {
            this.c_cutter.inputEnabled = false;
            this.cutter_cnt++
                if (this.cutter_cnt == 1) {
                    this.c_arrow12.visible = false;
                    this.c_rice.visible = false;
                    this.rc_drag = false;
                    this.c_cutter.animations.add('c_cutter', [1]);
                    this.c_cutter.animations.play('c_cutter', 8, false).onComplete.add(function() {

                        game.add.tween(this.c_plate).to({
                            x: 285
                        }, 800, Phaser.Easing.Quadratic.Out, true, 500);
                        game.add.tween(this.c_roll1).to({
                            x: 285
                        }, 800, Phaser.Easing.Quadratic.Out, true, 500);
                        game.add.tween(this.c_roll2).to({
                            x: 285
                        }, 800, Phaser.Easing.Quadratic.Out, true, 500).onComplete.add(function() {
                            this.c_roll2.inputEnabled = true;
                            this.c_roll2.input.useHandCursor = true;
                            this.c_arrow13.visible = true;
                        }, this);
                    }, this);
                }
            if (this.cutter_cnt == 2) {
                this.c_arrow14.visible = false;
                this.c_cutter.animations.add('c_cutter', [2]);
                this.c_cutter.animations.play('c_cutter', 8, false).onComplete.add(function() {
                    this.roll2_drag = false;
                    this.c_roll2.visible = false;
                    this.c_roll1.inputEnabled = true;
                    this.c_roll1.input.useHandCursor = true;
                    this.c_arrow15.visible = true;
                }, this);
            }
            if (this.cutter_cnt == 3) {
                this.c_arrow16.visible = false;

                this.c_cutter.animations.add('c_cutter', [3]);
                this.c_cutter.animations.play('c_cutter', 8, false).onComplete.add(function() {
                    this.roll1_drag = false;
                    this.c_roll1.visible = false;
                    game.add.tween(this.c_plate).to({
                        x: -285
                    }, 800, Phaser.Easing.Quadratic.Out, true, 500).onComplete.add(function() {
                        this.c_cutter.inputEnabled = true;
                        this.c_cutter.input.useHandCursor = true;
                        this.c_arrow17.visible = true;

                    }, this);
                }, this);
            }
            if (this.cutter_cnt == 4) {
                this.c_arrow17.visible = false;

                this.c_cutter.animations.add('c_cutter', [4, 5]);
                this.c_cutter.animations.play('c_cutter', 8, false).onComplete.add(function() {
                    game.add.tween(this.c_close).to({
                        x: 285
                    }, 800, Phaser.Easing.Quadratic.Out, true, 500).onComplete.add(function() {
                        this.c_close.inputEnabled = true;
                        this.c_close.input.useHandCursor = true;
                        this.c_arrow18.visible = true;

                    }, this);
                }, this);
            }
            if (this.cutter_cnt == 5) {
                this.c_arrow19.visible = false;
                this.c_close.visible = false;
                this.c_cutter.animations.add('c_cutter', [6, 7, 8, 9, 10, 11, 12, 13, 14]);
                this.c_cutter.animations.play('c_cutter', 8, false).onComplete.add(function() {
                    //     game.add.tween(this.c_close).to({x:285}, 800, Phaser.Easing.Quadratic.Out, true,500).onComplete.add(function(){
                    game.add.tween(this.c_plate1).to({
                        x: 285
                    }, 800, Phaser.Easing.Quadratic.Out, true, 500).onComplete.add(function() {
                        this.c_cutter.inputEnabled = true;
                        this.c_cutter.input.useHandCursor = true;
                        this.c_arrow22.visible = true;

                        // },this);
                    }, this);
                }, this);
            }
            //                    if(this.cutter_cnt==6){
            // this.c_arrow20.visible=false;

            //                   this.c_cutter.animations.add('c_cutter',[14]);
            //                   this.c_cutter.animations.play('c_cutter',8,false).onComplete.add(function(){
            //                   game.add.tween(this.c_plate1).to({x:285}, 800, Phaser.Easing.Quadratic.Out, true,500).onComplete.add(function(){
            //                     this.c_cutter.inputEnabled=true;
            //                     this.c_cutter.input.useHandCursor=true;
            // // this.c_arrow22.visible=true;

            //               },this);
            //               },this);
            //                    }
            if (this.cutter_cnt == 6) {
                this.c_arrow22.visible = false;

                this.c_cutter.animations.add('c_cutter', [15]);
                this.c_cutter.animations.play('c_cutter', 8, false).onComplete.add(function() {
                    //     game.add.tween(this.c_close).to({x:285}, 800, Phaser.Easing.Quadratic.Out, true,500).onComplete.add(function(){
                    this.cake1.visible = true;
                    this.c1drag = true;
                    this.c_plate1.inputEnabled = true;
                    this.c_plate1.input.useHandCursor = true;
                    this.c_arrow23.visible = true;

                    // },this);
                }, this);
            }
            if (this.cutter_cnt == 7) {
                this.c_arrow24.visible = false;

                this.c_cutter.animations.add('c_cutter', [16]);
                this.c_cutter.animations.play('c_cutter', 8, false).onComplete.add(function() {
                    //     game.add.tween(this.c_close).to({x:285}, 800, Phaser.Easing.Quadratic.Out, true,500).onComplete.add(function(){
                    this.cake2.visible = true;
                    this.c2drag = true;
                    this.c_plate1.inputEnabled = true;
                    this.c_plate1.input.useHandCursor = true;
                    // },this);
                    this.c_arrow25.visible = true;

                }, this);
            }
            if (this.cutter_cnt == 8) {
                this.c_arrow26.visible = false;
                this.c_cutter.animations.add('c_cutter', [17]);
                this.c_cutter.animations.play('c_cutter', 8, false).onComplete.add(function() {
                    //     game.add.tween(this.c_close).to({x:285}, 800, Phaser.Easing.Quadratic.Out, true,500).onComplete.add(function(){
                    this.cake3.visible = true;
                    this.c3drag = true;
                    this.c_plate1.inputEnabled = true;
                    this.c_plate1.input.useHandCursor = true;
                    this.c_arrow27.visible = true;
                    // },this);
                }, this);
            }
            if (this.cutter_cnt == 9) {
                this.c_arrow28.visible = false;
                this.c_cutter.animations.add('c_cutter', [18]);
                this.c_cutter.animations.play('c_cutter', 8, false).onComplete.add(function() {
                    //     game.add.tween(this.c_close).to({x:285}, 800, Phaser.Easing.Quadratic.Out, true,500).onComplete.add(function(){
                    this.cake4.visible = true;
                    this.c4drag = true;
                    this.c_plate1.inputEnabled = true;
                    this.c_plate1.input.useHandCursor = true;
                    this.c_arrow29.visible = true;
                    // },this);
                }, this);
            }
        }, this);

        // this.plategroup = game.add.group();
        // this.c_plate = game.add.sprite(285,680,'c_plate');
        this.c_plate = game.add.sprite(-250, 680, 'c_plate');
        this.c_plate.anchor.setTo(0.5);
        this.c_plate.scale.setTo(0.85);
        // this.plategroup.add(this.c_plate);

        // this.c_roll1 = game.add.sprite(285,645,'c_roll');
        this.c_roll1 = game.add.sprite(-250, 645, 'c_roll');
        this.c_roll1.anchor.setTo(0.5);
        this.c_roll1.scale.setTo(0.85);
        this.c_roll1.events.onInputDown.add(function() {
            this.c_roll1.inputEnabled = false;
            this.c_arrow15.visible = false;
            this.c_arrow16.visible = true;
            this.roll1_drag = true;
            this.c_cutter.inputEnabled = true;
            this.c_cutter.input.useHandCursor = true;
        }, this);
        // this.plategroup.add(this.c_roll1);

        // this.c_roll2 = game.add.sprite(285,690,'c_roll');
        this.c_roll2 = game.add.sprite(-250, 690, 'c_roll');
        this.c_roll2.anchor.setTo(0.5);
        this.c_roll2.scale.setTo(0.85);
        // this.c_roll2.inputEnabled=true;
        // this.c_roll2.input.useHandCursor=true;
        this.c_roll2.events.onInputDown.add(function() {
            this.c_arrow13.visible = false;
            this.c_arrow14.visible = true;
            this.c_roll2.inputEnabled = false;

            this.roll2_drag = true;
            this.c_cutter.inputEnabled = true;
            this.c_cutter.input.useHandCursor = true;
        }, this);
        // this.plategroup.add(this.c_roll2);

        // this.plategroup.scale.setTo(0.8);
        // // this.plategroup.x=80;
        // this.plategroup.x=-350;
        // this.plategroup.y=280;


        this.c_rice = game.add.sprite(750, 680, 'c_rice');
        // this.c_rice = game.add.sprite(285,680,'c_rice');
        this.c_rice.anchor.setTo(0.5);
        // this.c_rice.inputEnabled=true;
        // this.c_rice.input.useHandCursor=true;
        this.c_rice.events.onInputDown.add(function() {
            this.c_arrow11.visible = false;
            this.c_arrow12.visible = true;
            this.c_rice.inputEnabled = false;
            this.rc_drag = true;
            this.c_cutter.inputEnabled = true;
            this.c_cutter.input.useHandCursor = true;
        }, this);

        this.c_close = game.add.sprite(650, 680, 'c_close');
        // this.c_close = game.add.sprite(285,680,'c_close');
        this.c_close.anchor.setTo(0.5);
        this.c_close.events.onInputDown.add(function() {
            this.c_arrow18.visible = false;
            this.c_arrow19.visible = true;
            this.c_close.inputEnabled = false;
            this.closedrag = true;
            this.c_cutter.inputEnabled = true;
            this.c_cutter.input.useHandCursor = true;
        }, this);

        this.plt_group = game.add.group();
        this.platecnt = 0;
        this.c_plate1 = game.add.sprite(-285, 670, 'c_plate');
        // this.c_plate1 = game.add.sprite(285,670,'c_plate');
        this.c_plate1.anchor.setTo(0.5);
        this.c_plate1.events.onInputDown.add(function() {
            this.c_plate1.inputEnabled = false;
            this.platecnt++
                if (this.platecnt == 1) {
                    this.c_arrow23.visible = false;
                    this.c_arrow24.visible = true;

                    this.cake1.visible = false;
                    this.cake_1.visible = true;
                    this.c1drag = false;
                    this.c_cutter.inputEnabled = true;
                    this.c_cutter.input.useHandCursor = true;
                }
            if (this.platecnt == 2) {
                this.c_arrow25.visible = false;
                this.c_arrow26.visible = true;
                this.cake2.visible = false;
                this.cake_2.visible = true;
                this.c2drag = false;
                this.c_cutter.inputEnabled = true;
                this.c_cutter.input.useHandCursor = true;
            }
            if (this.platecnt == 3) {
                this.c_arrow27.visible = false;
                this.c_arrow28.visible = true;
                this.cake3.visible = false;
                this.cake_3.visible = true;
                this.c3drag = false;
                this.c_cutter.inputEnabled = true;
                this.c_cutter.input.useHandCursor = true;
            }
            if (this.platecnt == 4) {
                this.c_arrow29.visible = false;
                this.cake4.visible = false;
                this.cake_4.visible = true;
                this.c3drag = false;
                game.add.tween(this.c_cutter).to({
                    x: -322
                }, 800, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                    game.add.tween(this.plt_group).to({
                        y: -120
                    }, 800, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                        game.add.tween(this.playbtn.scale).to({
                            x: 0.9,
                            y: 0.9
                        }, 800, Phaser.Easing.Quadratic.Out, true);
                    }, this);
                }, this);

            }
        }, this);
        this.plt_group.add(this.c_plate1);

        this.cake_1 = game.add.sprite(205, 655, 'dd_cake');
        this.cake_1.anchor.setTo(0.5);
        this.cake_1.visible = false;
        this.plt_group.add(this.cake_1);

        this.cake_2 = game.add.sprite(255, 655, 'dd_cake');
        this.cake_2.anchor.setTo(0.5);
        this.cake_2.visible = false;
        this.plt_group.add(this.cake_2);

        this.cake_3 = game.add.sprite(305, 655, 'dd_cake');
        this.cake_3.anchor.setTo(0.5);
        this.cake_3.visible = false;
        this.plt_group.add(this.cake_3);

        this.cake_4 = game.add.sprite(355, 655, 'dd_cake');
        this.cake_4.anchor.setTo(0.5);
        this.cake_4.visible = false;
        this.plt_group.add(this.cake_4);

        this.cake1 = game.add.sprite(285, 680, 'dd_cake');
        this.cake1.anchor.setTo(0.5);
        this.cake1.visible = false;

        this.cake2 = game.add.sprite(285, 680, 'dd_cake');
        this.cake2.anchor.setTo(0.5);
        this.cake2.visible = false;

        this.cake3 = game.add.sprite(285, 680, 'dd_cake');
        this.cake3.anchor.setTo(0.5);
        this.cake3.visible = false;

        this.cake4 = game.add.sprite(285, 680, 'dd_cake');
        this.cake4.anchor.setTo(0.5);
        this.cake4.visible = false;


        //////////////////\\\\////\\\\////\\\\\\\\\\\\\\///////////\\\\\\\\\\\/////////////

        // this.c_black1.visible=true;
        // this.c_ani_rice.visible=true;
        // this.c_ani_rice.animations.add('c_ani_rice',[10]);
        // this.c_ani_rice.animations.play('c_ani_rice',10,false);

        // this.c_black.visible=false;
        // this.stand_c_0001.visible=false;

        //////////////////\\\\\\\///\\\\\\\///\\\\\\\\\\\\\\///////////\\\\\\\\\\\/////////////

        for (i = 1; i <= 29; i++) {

            if (i == 1) {
                this['c_arrow' + i] = game.add.sprite(297, 650, 'arrow');
            }
            if (i == 2) {
                this['c_arrow' + i] = game.add.sprite(250, 500, 'arrow');
            }
            if (i == 3) {
                this['c_arrow' + i] = game.add.sprite(270, 600, 'arrow');
            }
            if (i == 4) {
                this['c_arrow' + i] = game.add.sprite(250, 500, 'arrow');
            }
            if (i == 5) {
                this['c_arrow' + i] = game.add.sprite(240, 650, 'arrow');
            }
            if (i == 6) {
                this['c_arrow' + i] = game.add.sprite(250, 500, 'arrow');
            }
            if (i == 7) {
                this['c_arrow' + i] = game.add.sprite(240, 650, 'arrow');
            }
            if (i == 8) {
                this['c_arrow' + i] = game.add.sprite(250, 500, 'arrow');
            }
            if (i == 9) {
                this['c_arrow' + i] = game.add.sprite(250, 500, 'arrow');
            }
            if (i == 10) {
                this['c_arrow' + i] = game.add.sprite(250, 500, 'arrow');
            }
            if (i == 11) {
                this['c_arrow' + i] = game.add.sprite(280, 650, 'arrow');
            }
            if (i == 12) {
                this['c_arrow' + i] = game.add.sprite(280, 420, 'arrow');
            }
            if (i == 13) {
                this['c_arrow' + i] = game.add.sprite(280, 650, 'arrow');
            }
            if (i == 14) {
                this['c_arrow' + i] = game.add.sprite(280, 420, 'arrow');
            }
            if (i == 15) {
                this['c_arrow' + i] = game.add.sprite(280, 590, 'arrow');
            }
            if (i == 16) {
                this['c_arrow' + i] = game.add.sprite(280, 420, 'arrow');
            }
            if (i == 17) {
                this['c_arrow' + i] = game.add.sprite(280, 420, 'arrow');
            }
            if (i == 18) {
                this['c_arrow' + i] = game.add.sprite(280, 620, 'arrow');
            }
            if (i == 19) {
                this['c_arrow' + i] = game.add.sprite(280, 420, 'arrow');
            }
            if (i == 20) {
                this['c_arrow' + i] = game.add.sprite(280, 420, 'arrow');
            }
            if (i == 21) {
                this['c_arrow' + i] = game.add.sprite(280, 420, 'arrow');
            }
            if (i == 22) {
                this['c_arrow' + i] = game.add.sprite(394, 365, 'arrow');
            }
            if (i == 23) {
                this['c_arrow' + i] = game.add.sprite(280, 640, 'arrow');
            }
            if (i == 24) {
                this['c_arrow' + i] = game.add.sprite(370, 365, 'arrow');
            }
            if (i == 25) {
                this['c_arrow' + i] = game.add.sprite(280, 640, 'arrow');
            }
            if (i == 26) {
                this['c_arrow' + i] = game.add.sprite(340, 365, 'arrow');
            }
            if (i == 27) {
                this['c_arrow' + i] = game.add.sprite(280, 640, 'arrow');
            }
            if (i == 28) {
                this['c_arrow' + i] = game.add.sprite(310, 365, 'arrow');
            }
            if (i == 29) {
                this['c_arrow' + i] = game.add.sprite(280, 640, 'arrow');
            }

            this['c_arrow' + i].anchor.setTo(0.5);
            this['c_arrow' + i].animations.add('arrow');
            this['c_arrow' + i].animations.play('arrow', 30, true);
            if (i > 1) {
                this['c_arrow' + i].visible = false;

            }
        }


        //////////////////\\\\\\\///\\\\\\\///\\\\\\\\\\\\\\///////////\\\\\\\\\\\/////////////


        this.morebtn = game.add.sprite(60, 730, 'btn0004');
        this.morebtn.anchor.setTo(0.5);
        this.morebtn.scale.setTo(0.9);
        this.morebtn.inputEnabled = true;
        this.morebtn.input.useHandCursor = true;
        this.morebtn.events.onInputUp.add(this.moreLink, this);
        this.morebtn.events.onInputOver.add(this.btnOver, this);
        this.morebtn.events.onInputOut.add(this.btnOut, this);

        this.playbtn = game.add.sprite(445, 730, 'btn0002');
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

        if (this.br_drag) {
            this.c_brown1.x = game.input.activePointer.x;
            this.c_brown1.y = game.input.activePointer.y;
        }
        if (this.gr_drag) {
            this.c_green1.x = game.input.activePointer.x;
            this.c_green1.y = game.input.activePointer.y;
        }
        if (this.rc_drag) {
            this.c_rice.x = game.input.activePointer.x;
            this.c_rice.y = game.input.activePointer.y;
        }
        if (this.roll1_drag) {
            this.c_roll1.x = game.input.activePointer.x;
            this.c_roll1.y = game.input.activePointer.y;
        }
        if (this.roll2_drag) {
            this.c_roll2.x = game.input.activePointer.x;
            this.c_roll2.y = game.input.activePointer.y;
        }
        if (this.closedrag) {
            this.c_close.x = game.input.activePointer.x;
            this.c_close.y = game.input.activePointer.y;
        }
        if (this.c1drag) {
            this.cake1.x = game.input.activePointer.x;
            this.cake1.y = game.input.activePointer.y;
        }
        if (this.c2drag) {
            this.cake2.x = game.input.activePointer.x;
            this.cake2.y = game.input.activePointer.y;
        }
        if (this.c3drag) {
            this.cake3.x = game.input.activePointer.x;
            this.cake3.y = game.input.activePointer.y;
        }
        if (this.c4drag) {
            this.cake4.x = game.input.activePointer.x;
            this.cake4.y = game.input.activePointer.y;
        }
    },
    openLink: function() {
        CreateLinksInGame("Baby-Elsa-Sushi-Cooking", "game", "logo");
    },
    moreLink: function() {
        CreateLinksInGame("Baby-Elsa-Sushi-Cooking", "game", "more");
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
            game.state.start('dect_cake2');
        });

    },
}


// d1111111


Main.dect_cake2 = function() {}

Main.dect_cake2.prototype = {
    create: function() {
        this.d3_arr = [0, 0, 0];
        this.levelGroup = game.add.group();
        this.introbg = game.add.sprite(0, 0, 'j_bg');
        this.levelGroup.add(this.introbg);

        this.baby_elsa = game.add.sprite(120, 425, 'baby_elsa');
        this.baby_elsa.anchor.setTo(0.5);

        this.j_panel = game.add.sprite(255, 630, 'j_panel');
        this.j_panel.anchor.setTo(0.5);

        this.c_plate = game.add.sprite(255, 530, 'c_plate');
        this.c_plate.anchor.setTo(0.5);

        this.d_panel = game.add.sprite(255, 710, 'd_panel');
        this.d_panel.anchor.setTo(0.5);
        this.d_panel.scale.setTo(0.85);



        this.d_cake1 = game.add.sprite(170, 529.9, 'd_cake000' + Main.cake2_array[0]);
        this.d_cake1.anchor.setTo(0.5);

        this.d1_top_1 = game.add.sprite(169.85, 522.15, 'd_top1_000' + Main.cake2_array[1]);
        this.d1_top_1.anchor.setTo(0.5);

        this.d_top_1 = game.add.sprite(169.65, 511.5, 'd_top000' + Main.cake2_array[2]);
        this.d_top_1.anchor.setTo(0.5);


        this.d_cake2 = game.add.sprite(230, 529.9, 'd_cake000' + Main.cake2_array[0]);
        this.d_cake2.anchor.setTo(0.5);

        this.d1_top_2 = game.add.sprite(229.85, 522.15, 'd_top1_000' + Main.cake2_array[1]);
        this.d1_top_2.anchor.setTo(0.5);

        this.d_top_2 = game.add.sprite(229.65, 511.5, 'd_top000' + Main.cake2_array[2]);
        this.d_top_2.anchor.setTo(0.5);


        this.d_cake3 = game.add.sprite(280, 529.9, 'd_cake000' + Main.cake2_array[0]);
        this.d_cake3.anchor.setTo(0.5);

        this.d1_top_3 = game.add.sprite(279.85, 522.15, 'd_top1_000' + Main.cake2_array[1]);
        this.d1_top_3.anchor.setTo(0.5);

        this.d_top_3 = game.add.sprite(279.65, 511.5, 'd_top000' + Main.cake2_array[2]);
        this.d_top_3.anchor.setTo(0.5);


        this.d_cake4 = game.add.sprite(330, 529.9, 'd_cake000' + Main.cake2_array[0]);
        this.d_cake4.anchor.setTo(0.5);

        this.d1_top_4 = game.add.sprite(329.85, 522.15, 'd_top1_000' + Main.cake2_array[1]);
        this.d1_top_4.anchor.setTo(0.5);

        this.d_top_4 = game.add.sprite(329.65, 511.5, 'd_top000' + Main.cake2_array[2]);
        this.d_top_4.anchor.setTo(0.5);


        this.i1_cnt = 1;
        this.icon01 = game.add.sprite(130, 710, 'c1_btn1');
        this.icon01.anchor.setTo(0.5);
        this.icon01.scale.setTo(0.8);
        this.icon01.inputEnabled = true;
        this.icon01.input.useHandCursor = true;
        this.icon01.events.onInputOver.add(this.btnOver, this);
        this.icon01.events.onInputOut.add(this.btnOut, this);
        this.icon01.events.onInputDown.add(function() {
            this.i1_cnt++
                this.d_cake1.loadTexture('d_cake000' + this.i1_cnt);
            this.d_cake2.loadTexture('d_cake000' + this.i1_cnt);
            this.d_cake3.loadTexture('d_cake000' + this.i1_cnt);
            this.d_cake4.loadTexture('d_cake000' + this.i1_cnt);
            Main.cake2_array[0] = this.i1_cnt;

            if (this.i1_cnt >= 6) {
                this.i1_cnt = 0;
            }

            this.d3_arr[0] = 1;
            if (this.d3_arr.indexOf(0) < 0) {
                game.add.tween(this.playbtn.scale).to({
                    x: 0.9,
                    y: 0.9
                }, 800, Phaser.Easing.Bounce.Out, true);
            }

            effectssd = game.add.sprite(250, 480, 'effectssd');
            effectssd.anchor.setTo(0.5);
            effectssd.animations.add('effectssd');
            effectssd.animations.play('effectssd', 20, false).onComplete.add(function(evt) {
                evt.destroy();
            }, this);
        }, this);


        this.i2_cnt = 1;
        this.icon02 = game.add.sprite(250, 710, 'c1_btn2');
        this.icon02.anchor.setTo(0.5);
        this.icon02.scale.setTo(0.8);
        this.icon02.inputEnabled = true;
        this.icon02.input.useHandCursor = true;
        this.icon02.events.onInputOver.add(this.btnOver, this);
        this.icon02.events.onInputOut.add(this.btnOut, this);
        this.icon02.events.onInputDown.add(function() {
            this.i2_cnt++
                this.d1_top_1.loadTexture('d_top1_000' + this.i2_cnt);
            this.d1_top_2.loadTexture('d_top1_000' + this.i2_cnt);
            this.d1_top_3.loadTexture('d_top1_000' + this.i2_cnt);
            this.d1_top_4.loadTexture('d_top1_000' + this.i2_cnt);
            Main.cake2_array[1] = this.i2_cnt;

            if (this.i2_cnt >= 6) {
                this.i2_cnt = 0;
            }

            this.d3_arr[1] = 1;
            if (this.d3_arr.indexOf(0) < 0) {
                game.add.tween(this.playbtn.scale).to({
                    x: 0.9,
                    y: 0.9
                }, 800, Phaser.Easing.Bounce.Out, true);
            }

            effectssd = game.add.sprite(250, 480, 'effectssd');
            effectssd.anchor.setTo(0.5);
            effectssd.animations.add('effectssd');
            effectssd.animations.play('effectssd', 20, false).onComplete.add(function(evt) {
                evt.destroy();
            }, this);
        }, this);


        this.i3_cnt = 1;
        this.icon03 = game.add.sprite(370, 710, 'c1_btn3');
        this.icon03.anchor.setTo(0.5);
        this.icon03.scale.setTo(0.8);
        this.icon03.inputEnabled = true;
        this.icon03.input.useHandCursor = true;
        this.icon03.events.onInputOver.add(this.btnOver, this);
        this.icon03.events.onInputOut.add(this.btnOut, this);
        this.icon03.events.onInputDown.add(function() {
            this.i3_cnt++
                this.d_top_1.loadTexture('d_top000' + this.i3_cnt);
            this.d_top_2.loadTexture('d_top000' + this.i3_cnt);
            this.d_top_3.loadTexture('d_top000' + this.i3_cnt);
            this.d_top_4.loadTexture('d_top000' + this.i3_cnt);
            Main.cake2_array[2] = this.i3_cnt;

            if (this.i3_cnt >= 6) {
                this.i3_cnt = 0;
            }

            this.d3_arr[2] = 1;
            if (this.d3_arr.indexOf(0) < 0) {
                game.add.tween(this.playbtn.scale).to({
                    x: 0.9,
                    y: 0.9
                }, 800, Phaser.Easing.Bounce.Out, true);
            }

            effectssd = game.add.sprite(250, 480, 'effectssd');
            effectssd.anchor.setTo(0.5);
            effectssd.animations.add('effectssd');
            effectssd.animations.play('effectssd', 20, false).onComplete.add(function(evt) {
                evt.destroy();
            }, this);
        }, this);





        this.morebtn = game.add.sprite(60, 620, 'btn0004');
        this.morebtn.anchor.setTo(0.5);
        this.morebtn.scale.setTo(0.85);
        // this.morebtn.scale.setTo(0);
        this.morebtn.inputEnabled = true;
        this.morebtn.input.useHandCursor = true;
        this.morebtn.events.onInputUp.add(this.moreLink, this);
        this.morebtn.events.onInputOver.add(this.btnOver, this);
        this.morebtn.events.onInputOut.add(this.btnOut, this);

        this.playbtn = game.add.sprite(440, 620, 'btn0002');
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
        CreateLinksInGame("Baby-Elsa-Sushi-Cooking", "game", "logo");
    },
    moreLink: function() {
        CreateLinksInGame("Baby-Elsa-Sushi-Cooking", "game", "more");
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
            game.state.start('intro1');
        });

    },
}


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
        CreateLinksInGame("Baby-Elsa-Sushi-Cooking", "game", "logo");
    },
    moreLink: function() {
        CreateLinksInGame("Baby-Elsa-Sushi-Cooking", "game", "more");
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

Main.cooking1_screen = function() {}

Main.cooking1_screen.prototype = {
    create: function() {
        this.levelGroup = game.add.group();
        this.tbg = game.add.sprite(0, 0, 'cbg');
        this.levelGroup.add(this.tbg);

        this.belsa = game.add.sprite(115.3, 415, 'belsa');
        this.belsa.anchor.setTo(0.5);

        this.ctable = game.add.sprite(254, 625.5, 'ctable');
        this.ctable.anchor.setTo(0.5);

        this.rpack_cut = game.add.sprite(280, 470, 'rpack_cut');
        this.rpack_cut.anchor.setTo(0.5);
        // this.rpack_cut.visible=false;

        this.spack_cut = game.add.sprite(570, 470, 'spack_cut');
        this.spack_cut.anchor.setTo(0.5);

        this.cutcnt = 0;


        this.scisorr = game.add.sprite(147.55, 500, 'scisorr');
        this.scisorr.anchor.setTo(0.5);
        this.scisorr.inputEnabled = true;
        // this.scisorr.visible=false;
        this.scisorr.input.enableDrag();
        this.scisorr.events.onInputDown.add(function() {
            game.world.bringToTop(this.scisorr);
            // this.scisorr.loadTexture('bpack0002');
            this.arrow1.visible = false;
            this.arrow1.x = 145;
            this.arrow1.y = 430;
            this.arrow2.visible = true;
        }, this);
        this.scisorr.events.onInputUp.add(function() {
            this.scisorr.inputEnabled = false;
            this.arrow2.visible = false;
            if ((game.input.activePointer.x > 209 && game.input.activePointer.x < 361 && game.input.activePointer.y > 361 && game.input.activePointer.y < 510)) {
                this.cutcnt++;
                this.scisorr.visible = false;
                this.scisorr.x = 147.55;
                this.scisorr.y = 500;

                //  game.add.tween(this.wf_layer1.scale).to({x:1,y:1},1100,Phaser.Easing.Quadratic.Out,true);


                if (this.cutcnt == 1) {

                    this.rpack_cut.visible = true;
                    this.rpack_cut.animations.add('rpack_cut');
                    this.rpack_cut.animations.play('rpack_cut', 10, false).onComplete.add(function() {
                        this.scisorr.visible = true;
                        game.add.tween(this.rpack_cut).to({
                            x: 550
                        }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                            game.add.tween(this.spack_cut).to({
                                x: 270
                            }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                                this.scisorr.inputEnabled = true;
                                this.arrow1.visible = true;
                                this.arrow1.x = 145;
                                this.arrow1.y = 430;
                            }, this);
                        }, this);
                    }, this);

                }

                if (this.cutcnt == 2) {

                    this.spack_cut.visible = true;
                    this.spack_cut.animations.add('spack_cut');
                    this.spack_cut.animations.play('spack_cut', 10, false).onComplete.add(function() {
                        // this.scisorr.visible=true;
                        game.add.tween(this.spack_cut).to({
                            x: 550
                        }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                            game.add.tween(this.hgp).to({
                                x: 0
                            }, 700, Phaser.Easing.Quadratic.Out, true)
                            game.add.tween(this.wjar).to({
                                x: 388
                            }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                                this.wjar.inputEnabled = true;
                                this.wjar.input.enableDrag();
                                this.arrow1.visible = true;
                                this.arrow1.x = 375;
                                this.arrow1.y = 489;
                            }, this);
                        }, this);
                    }, this);

                }


            } else {
                game.add.tween(this.scisorr).to({
                    x: 147.55,
                    y: 500
                }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                    this.scisorr.inputEnabled = true;
                    this.arrow1.visible = true;
                }, this);
            }
        }, this);

        this.hgp = game.add.group();

        this.heater = game.add.sprite(249.1, 474.15, 'heater');
        this.heater.anchor.setTo(0.5);
        this.hgp.add(this.heater);

        this.bcnt = 0;

        this.hbtn = game.add.sprite(251, 509.85, 'hbtn');
        this.hbtn.anchor.setTo(0.5);
        // this.hbtn.inputEnabled=true;
        this.hbtn.events.onInputDown.add(function() {
            this.bcnt++;
            this.arrow1.visible = false;
            this.hbtn.inputEnabled = false;
            if (this.bcnt == 1) {
                game.add.tween(this.hbtn).to({
                    angle: 90
                }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {

                    game.add.tween(this.timer).to({
                        x: 250
                    }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                        this.timer.animations.add('timer');
                        this.timer.animations.play('timer', 20, false).onComplete.add(function() {
                            game.add.tween(this.timer).to({
                                x: -80
                            }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                                this.hbtn.inputEnabled = true;
                                this.arrow1.visible = true;
                                this.arrow1.x = 252;
                                this.arrow1.y = 459;


                            }, this);
                        }, this);
                    }, this);
                }, this);
            }

            if (this.bcnt == 2) {
                game.add.tween(this.hbtn).to({
                    angle: 0
                }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                    this.spoon_ani1.visible = true;
                    this.price.visible = false;
                    this.pwater.visible = false;
                    this.pcap1.inputEnabled = true;
                    this.arrow2.visible = true;


                }, this);
            }

        }, this);
        this.hgp.add(this.hbtn);

        this.potgp = game.add.group();

        this.pot = game.add.sprite(248.6, 405.25, 'pot');
        this.pot.anchor.setTo(0.5);
        this.potgp.add(this.pot);

        this.price = game.add.sprite(240.1, 400.25, 'price');
        this.price.anchor.setTo(0.5);
        this.price.scale.setTo(0);
        this.potgp.add(this.price);

        this.pwater = game.add.sprite(248.6, 385.75, 'pwater');
        this.pwater.anchor.setTo(0.5);
        this.pwater.scale.setTo(0);
        this.potgp.add(this.pwater);

        this.spoon_ani1 = game.add.sprite(270, 294, 'spoon_ani1');
        this.spoon_ani1.anchor.setTo(0.5);
        this.spoon_ani1.visible = false;
        this.potgp.add(this.spoon_ani1);

        this.pcap1 = game.add.sprite(249.3, 341.9, 'pcap');
        this.pcap1.anchor.setTo(0.5);
        this.pcap1.visible = false;
        // this.pcap1.inputEnabled=true;
        this.pcap1.events.onInputDown.add(function() {
            this.pcap1.inputEnabled = false;
            this.arrow2.visible = false;
            game.add.tween(this.pcap1).to({
                y: 300,
                alpha: 0
            }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                game.add.tween(this.bowlgp1).to({
                    x: 0
                }, 700, Phaser.Easing.Quadratic.Out, true);
                game.add.tween(this.spoon1).to({
                    x: 400
                }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                    this.spoon1.inputEnabled = true;
                    this.arrow1.visible = true;
                    this.arrow1.x = 382;
                    this.arrow1.y = 623;
                }, this);
            }, this);

        }, this);

        this.potgp.add(this.pcap1);

        this.hgp.add(this.potgp);

        this.rice_drop = game.add.sprite(318, 301, 'rice_drop');
        this.rice_drop.anchor.setTo(0.5);
        this.rice_drop.visible = false;
        this.potgp.add(this.rice_drop);

        this.water_drop = game.add.sprite(344, 263, 'water_drop');
        this.water_drop.anchor.setTo(0.5);
        this.water_drop.visible = false;
        this.potgp.add(this.water_drop);

        this.pot_front = game.add.sprite(248.6, 410.25, 'pot_front');
        this.pot_front.anchor.setTo(0.5);
        this.potgp.add(this.pot_front);

        this.hgp.x = -400;



        this.wjar = game.add.sprite(588.8, 612.85, 'wjar');
        this.wjar.anchor.setTo(0.5);
        this.wjar.inputEnabled = true;
        // this.wjar.visible=false;
        this.wjar.input.enableDrag();
        this.wjar.events.onInputDown.add(function() {
            game.world.bringToTop(this.wjar);
            // this.wjar.loadTexture('bpack0002');
            this.arrow1.visible = false;
            this.arrow1.x = 375;
            this.arrow1.y = 489;
            this.arrow2.visible = true;
            this.arrow2.x = 248;
            this.arrow2.y = 309;
        }, this);
        this.wjar.events.onInputUp.add(function() {
            this.wjar.inputEnabled = false;
            this.arrow2.visible = false;
            if ((game.input.activePointer.x > 168 && game.input.activePointer.x < 381 && game.input.activePointer.y > 266 && game.input.activePointer.y < 393)) {
                this.wjar.visible = false;


                game.add.tween(this.pwater).to({
                    y: 365.75
                }, 1500, Phaser.Easing.Quadratic.Out, true);
                game.add.tween(this.pwater.scale).to({
                    x: 1,
                    y: 1
                }, 1500, Phaser.Easing.Quadratic.Out, true);



                this.water_drop.visible = true;
                this.water_drop.animations.add('water_drop');
                this.water_drop.animations.play('water_drop', 10, false).onComplete.add(function() {
                    game.add.tween(this.water_drop).to({
                        alpha: 0
                    }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                        // game.add.tween(this.bowlgp1).to({x:0},700,Phaser.Easing.Quadratic.Out,true);
                        game.add.tween(this.rpack1).to({
                            x: 380
                        }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                            this.rpack1.inputEnabled = true;
                            this.rpack1.input.enableDrag();
                            this.arrow1.visible = true;
                            this.arrow1.x = 375;
                            this.arrow1.y = 489;
                        }, this);
                    }, this);
                }, this);




            } else {
                game.add.tween(this.wjar).to({
                    x: 388.8,
                    y: 612.85
                }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                    this.wjar.inputEnabled = true;
                    this.arrow1.visible = true;
                }, this);
            }
        }, this);


        this.rpack1 = game.add.sprite(580, 612.85, 'rpack1');
        this.rpack1.anchor.setTo(0.5);
        // this.rpack1.inputEnabled=true;
        // this.rpack1.input.enableDrag();
        this.rpack1.events.onInputDown.add(function() {
            game.world.bringToTop(this.rpack1);
            // this.rpack1.loadTexture('bpack0002');
            this.arrow1.visible = false;
            this.arrow1.x = 375;
            this.arrow1.y = 489;
            this.arrow2.visible = true;
            this.arrow2.x = 248;
            this.arrow2.y = 309;
        }, this);
        this.rpack1.events.onInputUp.add(function() {
            this.rpack1.inputEnabled = false;
            this.arrow2.visible = false;
            if ((game.input.activePointer.x > 168 && game.input.activePointer.x < 381 && game.input.activePointer.y > 266 && game.input.activePointer.y < 393)) {
                this.rpack1.visible = false;


                game.add.tween(this.price).to({
                    y: 380.75
                }, 1500, Phaser.Easing.Quadratic.Out, true);
                game.add.tween(this.price.scale).to({
                    x: 1,
                    y: 1
                }, 1500, Phaser.Easing.Quadratic.Out, true);



                this.rice_drop.visible = true;
                this.rice_drop.animations.add('rice_drop');
                this.rice_drop.animations.play('rice_drop', 10, false).onComplete.add(function() {
                    game.add.tween(this.rice_drop).to({
                        alpha: 0
                    }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                        game.add.tween(this.pcap).to({
                            x: 120
                        }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                            this.pcap.inputEnabled = true;
                            this.pcap.input.enableDrag();
                            this.arrow1.visible = true;
                            this.arrow1.x = 119;
                            this.arrow1.y = 534;
                        }, this);
                    }, this);
                }, this);




            } else {
                game.add.tween(this.rpack1).to({
                    x: 388.8,
                    y: 612.85
                }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                    this.rpack1.inputEnabled = true;
                    this.arrow1.visible = true;
                }, this);
            }
        }, this);

        this.pcap = game.add.sprite(-120, 612.85, 'pcap');
        this.pcap.anchor.setTo(0.5);
        // this.pcap.inputEnabled=true;
        // this.pcap.input.enableDrag();
        this.pcap.events.onInputDown.add(function() {
            game.world.bringToTop(this.pcap);
            // this.pcap.loadTexture('bpack0002');
            this.arrow1.visible = false;
            this.arrow1.x = 119;
            this.arrow1.y = 534;
            this.arrow2.visible = true;
            this.arrow2.x = 248;
            this.arrow2.y = 309;
        }, this);
        this.pcap.events.onInputUp.add(function() {
            this.pcap.inputEnabled = false;
            this.arrow2.visible = false;
            if ((game.input.activePointer.x > 168 && game.input.activePointer.x < 381 && game.input.activePointer.y > 266 && game.input.activePointer.y < 393)) {
                this.pcap.visible = false;
                this.pcap1.visible = true;

                this.hbtn.inputEnabled = true;
                this.arrow1.visible = true;
                this.arrow1.x = 252;
                this.arrow1.y = 459;





            } else {
                game.add.tween(this.pcap).to({
                    x: 120,
                    y: 612.85
                }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                    this.pcap.inputEnabled = true;
                    this.arrow1.visible = true;
                }, this);
            }
        }, this);

        this.bowlgp1 = game.add.group();

        this.vbowl1 = game.add.sprite(127.4, 619.8, 'vbowl1');
        this.vbowl1.anchor.setTo(0.5);
        this.bowlgp1.add(this.vbowl1);

        this.rbowl_ani = game.add.sprite(138, 546, 'rbowl_ani');
        this.rbowl_ani.anchor.setTo(0.5);
        this.rbowl_ani.visible = false;
        this.bowlgp1.add(this.rbowl_ani);

        this.vbowlf = game.add.sprite(126.9, 654.3, 'vbowlf');
        this.vbowlf.anchor.setTo(0.5);
        this.bowlgp1.add(this.vbowlf);

        this.bowlgp1.x = -270;

        this.spoon1drag = false;
        this.spoon1 = game.add.sprite(600, 654.3, 'spoon0001');
        this.spoon1.anchor.setTo(0.5);
        this.spoon1.angle = -40;
        // this.spoon1.inputEnabled=true;
        this.spoon1.events.onInputDown.add(function() {
            this.spoon1.inputEnabled = false;
            this.spoon1drag = true;
            this.crect.inputEnabled = true;
            this.arrow1.visible = false;
            this.arrow1.x = 382;
            this.arrow1.y = 623;
            this.arrow2.visible = true;

        }, this);

        this.spcnt1 = 0;

        this.crect = game.add.graphics(161, 279);
        this.crect.beginFill(0x000000, 0);
        this.crect.drawRect(0, 0, 180, 100);
        // this.crect.inputEnabled=true;
        this.crect.events.onInputDown.add(function() {
            this.spcnt1++;
            this.crect.inputEnabled = false;
            this.arrow2.visible = false;
            if (this.spcnt1 == 1) {
                this.spoon1.visible = false;
                this.spoon1.loadTexture('spoon0002');
                this.spoon_ani1.visible = true;
                this.spoon_ani1.animations.add('spoon_ani1', [0, 1, 2, 3, 4, 5, 6]);
                this.spoon_ani1.animations.play('spoon_ani1', 10, false).onComplete.add(function() {
                    this.spoon1.visible = true;
                    this.blrect.inputEnabled = true;
                    this.arrow1.visible = true;
                    this.arrow1.x = 128;
                    this.arrow1.y = 555;

                }, this);
            }

            if (this.spcnt1 == 2) {
                this.spoon1.visible = false;
                this.spoon1.loadTexture('spoon0002');
                this.spoon_ani1.visible = true;
                this.spoon_ani1.animations.add('spoon_ani1', [8, 9, 10, 11, 12, 13, 14, 15]);
                this.spoon_ani1.animations.play('spoon_ani1', 10, false).onComplete.add(function() {
                    this.spoon1.visible = true;
                    this.blrect.inputEnabled = true;
                    this.arrow1.visible = true;

                }, this);

            }

            if (this.spcnt1 == 3) {
                this.spoon1.visible = false;
                this.spoon1.loadTexture('spoon0002');
                this.spoon_ani1.visible = true;
                this.spoon_ani1.animations.add('spoon_ani1', [17, 18, 19, 20, 21, 22, 23]);
                this.spoon_ani1.animations.play('spoon_ani1', 10, false).onComplete.add(function() {
                    this.spoon_ani1.visible = false;
                    this.spoon1.visible = true;
                    this.blrect.inputEnabled = true;
                    this.arrow1.visible = true;

                }, this);

            }


        }, this);

        this.blrect = game.add.graphics(41, 540);
        this.blrect.beginFill(0x000000, 0);
        this.blrect.drawRect(0, 0, 180, 100);
        // this.blrect.inputEnabled=true;
        this.blrect.events.onInputDown.add(function() {
            this.blrect.inputEnabled = false;
            this.arrow1.visible = false;
            if (this.spcnt1 == 1) {
                this.spoon1.visible = false;
                this.spoon1.loadTexture('spoon0001');
                this.rbowl_ani.visible = true;
                this.rbowl_ani.animations.add('rbowl_ani', [0, 1, 2, 3, 4, 5, 6, 7]);
                this.rbowl_ani.animations.play('rbowl_ani', 10, false).onComplete.add(function() {
                    this.spoon1.visible = true;
                    this.crect.inputEnabled = true;
                    this.arrow2.visible = true;

                }, this);

            }

            if (this.spcnt1 == 2) {
                this.spoon1.visible = false;
                this.spoon1.loadTexture('spoon0001');
                this.rbowl_ani.visible = true;
                this.rbowl_ani.animations.add('rbowl_ani', [8, 9, 10, 11, 12, 13, 14, 15]);
                this.rbowl_ani.animations.play('rbowl_ani', 10, false).onComplete.add(function() {
                    this.spoon1.visible = true;
                    this.crect.inputEnabled = true;
                    this.arrow2.visible = true;

                }, this);

            }

            if (this.spcnt1 == 3) {
                this.spoon1.visible = false;
                this.spoon1.loadTexture('spoon0001');
                this.rbowl_ani.visible = true;
                this.rbowl_ani.animations.add('rbowl_ani', [17, 18, 19, 20, 21, 22, 23, 24]);
                this.rbowl_ani.animations.play('rbowl_ani', 10, false).onComplete.add(function() {
                    this.spoon1drag = false;
                    // this.crect.inputEnabled=true;
                    game.add.tween(this.bowlgp1).to({
                        x: -350
                    }, 700, Phaser.Easing.Quadratic.Out, true);
                    game.add.tween(this.hgp).to({
                        x: 500
                    }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                        game.add.tween(this.bowlgp2).to({
                            x: 0
                        }, 700, Phaser.Easing.Quadratic.Out, true);
                        game.add.tween(this.spack1).to({
                            x: 380
                        }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                            this.spack1.inputEnabled = true;
                            this.spack1.input.enableDrag();
                            this.arrow1.visible = true;
                            this.arrow1.x = 375;
                            this.arrow1.y = 489;
                        }, this);
                    }, this);

                }, this);

            }


        }, this);


        this.bowlgp2 = game.add.group();

        this.vbowl2 = game.add.sprite(257.4, 459.8, 'vbowl1');
        this.vbowl2.anchor.setTo(0.5);
        this.bowlgp2.add(this.vbowl2);

        this.rbowl_ani2 = game.add.sprite(268, 386, 'rbowl_ani');
        this.rbowl_ani2.anchor.setTo(0.5);
        this.rbowl_ani2.frame = 24;
        this.bowlgp2.add(this.rbowl_ani2);

        this.bsugar = game.add.sprite(256.9, 500, 'bsugar');
        this.bsugar.anchor.setTo(0.5);
        this.bsugar.scale.setTo(0);
        this.bowlgp2.add(this.bsugar);

        this.sugar_drop = game.add.sprite(337, 369, 'sugar_drop');
        this.sugar_drop.anchor.setTo(0.5);
        this.sugar_drop.visible = false;
        this.bowlgp2.add(this.sugar_drop);

        this.spoon_mix = game.add.sprite(237, 424, 'spoon_mix');
        this.spoon_mix.anchor.setTo(0.5);
        this.spoon_mix.visible = false;
        this.bowlgp2.add(this.spoon_mix);

        this.bvineger = game.add.sprite(258, 470, 'bvineger');
        this.bvineger.anchor.setTo(0.5);
        this.bvineger.scale.setTo(0);
        this.bowlgp2.add(this.bvineger);

        this.vineger_drop = game.add.sprite(371, 387, 'vineger_drop');
        this.vineger_drop.anchor.setTo(0.5);
        this.vineger_drop.visible = false;
        this.bowlgp2.add(this.vineger_drop);

        this.salt_ani = game.add.sprite(180, 412, 'salt_ani');
        this.salt_ani.anchor.setTo(0.5);
        this.salt_ani.scale.setTo(0.8);
        this.salt_ani.visible = false;
        this.bowlgp2.add(this.salt_ani);

        this.vbowlf2 = game.add.sprite(256.9, 494.3, 'vbowlf');
        this.vbowlf2.anchor.setTo(0.5);
        this.bowlgp2.add(this.vbowlf2);

        this.bowlgp2.x = -380;


        this.spack1 = game.add.sprite(580, 612.85, 'spack1');
        this.spack1.anchor.setTo(0.5);
        // this.spack1.inputEnabled=true;
        // this.spack1.input.enableDrag();
        this.spack1.events.onInputDown.add(function() {
            game.world.bringToTop(this.spack1);
            // this.spack1.loadTexture('bpack0002');
            this.arrow1.visible = false;
            this.arrow1.x = 375;
            this.arrow1.y = 489;
            this.arrow2.visible = true;
            this.arrow2.x = 255;
            this.arrow2.y = 360;
        }, this);
        this.spack1.events.onInputUp.add(function() {
            this.spack1.inputEnabled = false;
            this.arrow2.visible = false;
            if ((game.input.activePointer.x > 167 && game.input.activePointer.x < 363 && game.input.activePointer.y > 344 && game.input.activePointer.y < 465)) {
                this.spack1.visible = false;


                game.add.tween(this.bsugar).to({
                    y: 487
                }, 1500, Phaser.Easing.Quadratic.Out, true);
                game.add.tween(this.bsugar.scale).to({
                    x: 1,
                    y: 1
                }, 1500, Phaser.Easing.Quadratic.Out, true);



                this.sugar_drop.visible = true;
                this.sugar_drop.animations.add('sugar_drop');
                this.sugar_drop.animations.play('sugar_drop', 10, false).onComplete.add(function() {
                    game.add.tween(this.sugar_drop).to({
                        alpha: 0
                    }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                        game.add.tween(this.sbottle).to({
                            x: 370
                        }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                            this.sbottle.inputEnabled = true;
                            this.sbottle.input.enableDrag();
                            this.arrow1.visible = true;
                            this.arrow1.x = 375;
                            this.arrow1.y = 489;
                        }, this);
                    }, this);
                }, this);




            } else {
                game.add.tween(this.spack1).to({
                    x: 380,
                    y: 612.85
                }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                    this.spack1.inputEnabled = true;
                    this.arrow1.visible = true;
                }, this);
            }
        }, this);

        this.sbottle = game.add.sprite(570, 605, 'sbottle');
        this.sbottle.anchor.setTo(0.5);
        this.sbottle.scale.setTo(0.8);
        // this.sbottle.inputEnabled=true;
        // this.sbottle.input.enableDrag();
        this.sbottle.events.onInputDown.add(function() {
            game.world.bringToTop(this.sbottle);
            // this.sbottle.loadTexture('bpack0002');
            this.arrow1.visible = false;
            this.arrow1.x = 375;
            this.arrow1.y = 489;
            this.arrow2.visible = true;
            this.arrow2.x = 255;
            this.arrow2.y = 360;
        }, this);
        this.sbottle.events.onInputUp.add(function() {
            this.sbottle.inputEnabled = false;
            this.arrow2.visible = false;
            if ((game.input.activePointer.x > 167 && game.input.activePointer.x < 363 && game.input.activePointer.y > 344 && game.input.activePointer.y < 465)) {
                this.sbottle.visible = false;


                // game.add.tween(this.bsugar).to({y:487},1500,Phaser.Easing.Quadratic.Out,true);
                // game.add.tween(this.bsugar.scale).to({x:1,y:1},1500,Phaser.Easing.Quadratic.Out,true);



                this.salt_ani.visible = true;
                this.salt_ani.animations.add('salt_ani');
                this.salt_ani.animations.play('salt_ani', 10, false).onComplete.add(function() {
                    game.add.tween(this.salt_ani).to({
                        alpha: 0
                    }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                        game.add.tween(this.ogp1).to({
                            x: 0
                        }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                            this.vbottle1.inputEnabled = true;
                            this.arrow1.visible = true;
                            this.arrow1.x = 394;
                            this.arrow1.y = 440;
                        }, this);
                    }, this);
                }, this);




            } else {
                game.add.tween(this.sbottle).to({
                    x: 370,
                    y: 605
                }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                    this.sbottle.inputEnabled = true;
                    this.arrow1.visible = true;
                }, this);
            }
        }, this);


        this.vcnt = 0;

        this.ogp1 = game.add.group();

        this.vbottle1 = game.add.sprite(393, 601, 'vbottle');
        this.vbottle1.anchor.setTo(0.5);
        // this.vbottle1.inputEnabled=true;
        // this.vbottle1.input.enableDrag();
        this.vbottle1.events.onInputDown.add(function() {
            if (this.vcnt == 0) {
                this.arrow1.visible = false;
                this.arrow1.x = 394;
                this.arrow1.y = 440;
                this.vcnt++;
                this.vbottle1.inputEnabled = false;
                game.add.tween(this.vcap1).to({
                    y: 450,
                    alpha: 0
                }, 1000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                    this.vbottle1.inputEnabled = true;
                    this.vbottle1.input.enableDrag();
                    this.arrow1.visible = true;
                }, this);

            } else {
                // game.world.bringToTop(this.vbottle1);
                this.arrow1.visible = false;
                this.arrow2.visible = true;
                this.arrow2.x = 255;
                this.arrow2.y = 360;
            }
        }, this);
        this.vbottle1.events.onInputUp.add(function() {
            this.vbottle1.inputEnabled = false;
            this.arrow2.visible = false;
            if ((game.input.activePointer.x > 167 && game.input.activePointer.x < 363 && game.input.activePointer.y > 344 && game.input.activePointer.y < 465)) {

                this.vbottle1.visible = false;
                game.add.tween(this.bvineger).to({
                    y: 470
                }, 700, Phaser.Easing.Quadratic.Out, true);
                game.add.tween(this.bvineger.scale).to({
                    x: 1,
                    y: 1
                }, 700, Phaser.Easing.Quadratic.Out, true);

                this.vineger_drop.visible = true;
                this.vineger_drop.animations.add('vineger_drop');
                this.vineger_drop.animations.play('vineger_drop', 10, false).onComplete.add(function() {
                    game.add.tween(this.vineger_drop).to({
                        alpha: 0
                    }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                        game.add.tween(this.spoon2).to({
                            x: 380
                        }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                            this.spoon2.inputEnabled = true;
                            this.spoon2.input.enableDrag();
                            this.arrow1.visible = true;
                            this.arrow1.x = 375;
                            this.arrow1.y = 560;
                        }, this);
                    }, this);
                }, this);


            } else {
                game.add.tween(this.vbottle1).to({
                    x: 393,
                    y: 601
                }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                    this.vbottle1.inputEnabled = true;
                    this.arrow1.visible = true;
                }, this);
            }
        }, this);
        this.ogp1.add(this.vbottle1);

        this.vcap1 = game.add.sprite(393, 490, 'vcap');
        this.vcap1.anchor.setTo(0.5);
        this.ogp1.add(this.vcap1);

        this.ogp1.x = 250;

        this.spoon2 = game.add.sprite(580, 612.85, 'spoon0001');
        this.spoon2.anchor.setTo(0.5);
        this.spoon2.angle = -35;
        // this.spoon2.inputEnabled=true;
        // this.spoon2.input.enableDrag();
        this.spoon2.events.onInputDown.add(function() {
            game.world.bringToTop(this.spoon2);
            // this.spoon2.loadTexture('bpack0002');
            this.arrow1.visible = false;
            this.arrow1.x = 375;
            this.arrow1.y = 560;
            this.arrow2.visible = true;
            this.arrow2.x = 255;
            this.arrow2.y = 360;
        }, this);
        this.spoon2.events.onInputUp.add(function() {
            this.spoon2.inputEnabled = false;
            this.arrow2.visible = false;
            if ((game.input.activePointer.x > 167 && game.input.activePointer.x < 363 && game.input.activePointer.y > 344 && game.input.activePointer.y < 465)) {
                this.spoon2.visible = false;


                game.add.tween(this.bsugar).to({
                    alpha: 0
                }, 1200, Phaser.Easing.Quadratic.Out, true);
                game.add.tween(this.bvineger).to({
                    alpha: 0
                }, 1200, Phaser.Easing.Quadratic.Out, true);



                this.spoon_mix.visible = true;
                this.spoon_mix.animations.add('spoon_mix');
                this.spoon_mix.animations.play('spoon_mix', 10, false).onComplete.add(function() {
                    game.add.tween(this.spoon_mix).to({
                        alpha: 0
                    }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                        game.add.tween(this.bowlgp2).to({
                            x: -370
                        }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                            game.add.tween(this.plategp1).to({
                                x: 0
                            }, 700, Phaser.Easing.Quadratic.Out, true);
                            game.add.tween(this.knife1).to({
                                x: 420
                            }, 700, Phaser.Easing.Quadratic.Out, true);
                            game.add.tween(this.plategp2).to({
                                x: 0
                            }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                                this.bringel_1.inputEnabled = true;
                                this.bringel_1.input.enableDrag();
                                this.arrow1.visible = true;
                                this.arrow1.x = 114;
                                this.arrow1.y = 599;
                            }, this);
                        }, this);
                    }, this);
                }, this);




            } else {
                game.add.tween(this.spoon2).to({
                    x: 380,
                    y: 612.85
                }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                    this.spoon2.inputEnabled = true;
                    this.arrow1.visible = true;
                }, this);
            }
        }, this);

        this.plategp1 = game.add.group();

        this.cplate = game.add.sprite(245.95, 502.6, 'cplate');
        this.cplate.anchor.setTo(0.5);
        this.plategp1.add(this.cplate);



        this.plategp2 = game.add.group();

        this.vplate = game.add.sprite(120.25, 640, 'vplate');
        this.vplate.anchor.setTo(0.5);
        this.plategp2.add(this.vplate);

        this.bringel1 = game.add.sprite(245.95, 490, 'bringel');
        this.bringel1.anchor.setTo(0.5);
        this.bringel1.visible = false;
        this.plategp2.add(this.bringel1);



        this.bringel_cut = game.add.sprite(252, 524, 'bringel_cut');
        this.bringel_cut.anchor.setTo(0.5);
        this.bringel_cut.visible = false;
        this.plategp2.add(this.bringel_cut);

        this.bringel2 = game.add.sprite(245.95, 490, 'bringel');
        this.bringel2.anchor.setTo(0.5);
        this.bringel2.visible = false;
        this.plategp2.add(this.bringel2);

        this.bringel_cut2 = game.add.sprite(252, 524, 'bringel_cut');
        this.bringel_cut2.anchor.setTo(0.5);
        this.bringel_cut2.visible = false;
        this.plategp2.add(this.bringel_cut2);

        this.avocado1 = game.add.sprite(245.95, 490, 'avocado');
        this.avocado1.anchor.setTo(0.5);
        this.avocado1.visible = false;
        this.plategp2.add(this.avocado1);

        this.avocado_cut = game.add.sprite(257, 495, 'avocado_cut');
        this.avocado_cut.anchor.setTo(0.5);
        this.avocado_cut.scale.setTo(0.7);
        this.avocado_cut.visible = false;
        this.plategp2.add(this.avocado_cut);

        this.bringel_2 = game.add.sprite(120.25, 620, 'bringel');
        this.bringel_2.anchor.setTo(0.5);
        // this.bringel_2.inputEnabled=true;
        // this.bringel_2.input.enableDrag();
        this.bringel_2.events.onInputDown.add(function() {
            game.world.bringToTop(this.bringel_2);
            // this.bringel_2.loadTexture('bpack0002');
            this.arrow1.visible = false;
            this.arrow1.x = 108;
            this.arrow1.y = 580;
            this.arrow2.visible = true;
            this.arrow2.x = 228;
            this.arrow2.y = 436;
        }, this);
        this.bringel_2.events.onInputUp.add(function() {
            this.bringel_2.inputEnabled = false;
            this.arrow2.visible = false;
            if ((game.input.activePointer.x > 129 && game.input.activePointer.x < 328 && game.input.activePointer.y > 452 && game.input.activePointer.y < 539)) {
                this.bringel_2.visible = false;

                this.bringel2.visible = true;


                this.knife1.inputEnabled = true;
                this.knife1.input.enableDrag();

                this.arrow1.visible = true;
                this.arrow1.x = 415;
                this.arrow1.y = 467;






            } else {
                game.add.tween(this.bringel_2).to({
                    x: 120.25,
                    y: 620
                }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                    this.bringel_2.inputEnabled = true;
                    this.arrow1.visible = true;
                }, this);
            }
        }, this);
        this.plategp2.add(this.bringel_2);

        this.bringel_1 = game.add.sprite(120.25, 640, 'bringel');
        this.bringel_1.anchor.setTo(0.5);
        // this.bringel_1.inputEnabled=true;
        // this.bringel_1.input.enableDrag();
        this.bringel_1.events.onInputDown.add(function() {
            game.world.bringToTop(this.bringel_1);
            // this.bringel_1.loadTexture('bpack0002');
            this.arrow1.visible = false;
            this.arrow1.x = 114;
            this.arrow1.y = 599;
            this.arrow2.visible = true;
            this.arrow2.x = 228;
            this.arrow2.y = 436;
        }, this);
        this.bringel_1.events.onInputUp.add(function() {
            this.bringel_1.inputEnabled = false;
            this.arrow2.visible = false;
            if ((game.input.activePointer.x > 129 && game.input.activePointer.x < 328 && game.input.activePointer.y > 452 && game.input.activePointer.y < 539)) {
                this.bringel_1.visible = false;

                this.bringel1.visible = true;


                this.knife1.inputEnabled = true;
                this.knife1.input.enableDrag();


                this.arrow1.visible = true;
                this.arrow1.x = 415;
                this.arrow1.y = 467;





            } else {
                game.add.tween(this.bringel_1).to({
                    x: 120.25,
                    y: 640
                }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                    this.bringel_1.inputEnabled = true;
                    this.arrow1.visible = true;
                }, this);
            }
        }, this);
        this.plategp2.add(this.bringel_1);


        this.avocado = game.add.sprite(120.25, 630, 'avocado');
        this.avocado.anchor.setTo(0.5);
        this.avocado.visible = false;
        // this.avocado.inputEnabled=true;
        // this.avocado.input.enableDrag();
        this.avocado.events.onInputDown.add(function() {
            game.world.bringToTop(this.avocado);
            // this.avocado.loadTexture('bpack0002');
            this.arrow1.visible = false;
            this.arrow1.x = 114;
            this.arrow1.y = 560;
            this.arrow2.visible = true;
            this.arrow2.x = 228;
            this.arrow2.y = 436;
        }, this);
        this.avocado.events.onInputUp.add(function() {
            this.avocado.inputEnabled = false;
            this.arrow2.visible = false;
            if ((game.input.activePointer.x > 129 && game.input.activePointer.x < 328 && game.input.activePointer.y > 452 && game.input.activePointer.y < 539)) {
                this.avocado.visible = false;

                this.avocado1.visible = true;


                this.knife1.inputEnabled = true;
                this.knife1.input.enableDrag();


                this.arrow1.visible = true;
                this.arrow1.x = 415;
                this.arrow1.y = 467;





            } else {
                game.add.tween(this.avocado).to({
                    x: 120.25,
                    y: 630
                }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                    this.avocado.inputEnabled = true;
                    this.arrow1.visible = true;
                }, this);
            }
        }, this);
        this.plategp2.add(this.avocado);

        this.plategp1.x = -400;
        this.plategp2.x = -300;

        this.kncnt = 0;


        this.knife1 = game.add.sprite(620.25, 620, 'knife');
        this.knife1.anchor.setTo(0.5);
        // this.knife1.inputEnabled=true;
        // this.knife1.input.enableDrag();
        this.knife1.events.onInputDown.add(function() {
            game.world.bringToTop(this.knife1);
            // this.knife1.loadTexture('bpack0002');
            this.arrow1.visible = false;
            this.arrow1.x = 415;
            this.arrow1.y = 467;
            this.arrow2.visible = true;
            this.arrow2.x = 228;
            this.arrow2.y = 436;
        }, this);
        this.knife1.events.onInputUp.add(function() {
            this.knife1.inputEnabled = false;
            this.arrow2.visible = false;
            if ((game.input.activePointer.x > 129 && game.input.activePointer.x < 328 && game.input.activePointer.y > 452 && game.input.activePointer.y < 539)) {
                this.kncnt++;
                this.knife1.visible = false;
                this.knife1.x = 420.25;
                this.knife1.y = 620;

                if (this.kncnt == 1) {
                    this.bringel1.visible = false;
                    this.bringel_cut.visible = true;
                    this.bringel_cut.animations.add('bringel_cut');
                    this.bringel_cut.animations.play('bringel_cut', 10, false).onComplete.add(function() {
                        this.bringel_cut.y = 510;
                        this.knife1.visible = true;

                        this.arrow1.visible = true;
                        this.arrow1.x = 108;
                        this.arrow1.y = 580;
                        this.bringel_2.inputEnabled = true;
                        this.bringel_2.input.enableDrag();

                        /*game.add.tween(this.bringel_cut).to({alpha:0},700,Phaser.Easing.Quadratic.Out,true).onComplete.add(function(){
         game.add.tween(this.bowlgp2).to({x:-370},700,Phaser.Easing.Quadratic.Out,true).onComplete.add(function(){
          this.sbottle.inputEnabled=true;
         this.sbottle.input.enableDrag();
         this.arrow1.visible=true;
        this.arrow1.x=375;
         this.arrow1.y=489;
          },this);
          },this);*/
                    }, this);
                }

                if (this.kncnt == 2) {
                    this.bringel2.visible = false;
                    this.bringel_cut2.visible = true;
                    this.bringel_cut2.animations.add('bringel_cut');
                    this.bringel_cut2.animations.play('bringel_cut', 10, false).onComplete.add(function() {
                        this.knife1.visible = true;

                        game.add.tween(this.bringel_cut2).to({
                            x: 120,
                            y: 650
                        }, 700, Phaser.Easing.Quadratic.Out, true);
                        game.add.tween(this.bringel_cut).to({
                            x: 120,
                            y: 690
                        }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                            game.add.tween(this.plategp2).to({
                                x: -300
                            }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                                this.bringel_cut.visible = false;
                                this.bringel_cut2.visible = false;
                                this.avocado.visible = true;
                                game.add.tween(this.plategp2).to({
                                    x: 0
                                }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                                    this.avocado.inputEnabled = true;
                                    this.avocado.input.enableDrag();
                                    this.arrow1.visible = true;
                                    this.arrow1.x = 114;
                                    this.arrow1.y = 560;
                                }, this);
                            }, this);
                        }, this);
                    }, this);
                }

                if (this.kncnt == 3) {
                    this.avocado1.visible = false;
                    this.avocado_cut.visible = true;
                    this.avocado_cut.animations.add('avocado_cut');
                    this.avocado_cut.animations.play('avocado_cut', 10, false).onComplete.add(function() {

                        game.add.tween(this.avocado_cut).to({
                            x: 120,
                            y: 645
                        }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                            game.add.tween(this.plategp1).to({
                                x: 400
                            }, 700, Phaser.Easing.Quadratic.Out, true);
                            game.add.tween(this.plategp2).to({
                                x: -300
                            }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                                game.add.tween(this.crab_plate).to({
                                    x: 257
                                }, 700, Phaser.Easing.Quadratic.Out, true);
                                game.add.tween(this.cpack).to({
                                    x: 370
                                }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                                    this.cpack.inputEnabled = true;
                                    this.cpack.input.enableDrag();
                                    this.arrow1.visible = true;
                                    this.arrow1.x = 366;
                                    this.arrow1.y = 523;
                                }, this);
                            }, this);
                        }, this);
                    }, this);
                }







            } else {
                game.add.tween(this.knife1).to({
                    x: 420.25,
                    y: 620
                }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                    this.knife1.inputEnabled = true;
                    this.arrow1.visible = true;
                }, this);
            }
        }, this);

        this.crab_plate = game.add.sprite(-257, 506, 'crab_plate');
        this.crab_plate.anchor.setTo(0.5);


        this.crab_pack = game.add.sprite(260, 410, 'crab_pack');
        this.crab_pack.anchor.setTo(0.5);
        this.crab_pack.visible = false;


        this.cpack = game.add.sprite(630, 605, 'cpack');
        this.cpack.anchor.setTo(0.5);
        // this.cpack.scale.setTo(0.8);
        // this.cpack.inputEnabled=true;
        // this.cpack.input.enableDrag();
        this.cpack.events.onInputDown.add(function() {
            game.world.bringToTop(this.cpack);
            // this.cpack.loadTexture('bpack0002');
            this.arrow1.visible = false;
            this.arrow1.x = 366;
            this.arrow1.y = 523;
            this.arrow2.visible = true;
            this.arrow2.x = 252;
            this.arrow2.y = 432;
        }, this);
        this.cpack.events.onInputUp.add(function() {
            this.cpack.inputEnabled = false;
            this.arrow2.visible = false;
            if ((game.input.activePointer.x > 162 && game.input.activePointer.x < 356 && game.input.activePointer.y > 399 && game.input.activePointer.y < 520)) {
                this.cpack.visible = false;


                // game.add.tween(this.bsugar).to({y:487},1500,Phaser.Easing.Quadratic.Out,true);
                // game.add.tween(this.bsugar.scale).to({x:1,y:1},1500,Phaser.Easing.Quadratic.Out,true);

                this.crab_pack.visible = true;
                this.crab_pack.animations.add('crab_pack');
                this.crab_pack.animations.play('crab_pack', 10, false);



                this.crab_plate.visible = true;
                this.crab_plate.animations.add('crab_plate');
                this.crab_plate.animations.play('crab_plate', 15, false).onComplete.add(function() {
                    game.add.tween(this.crab_pack).to({
                        alpha: 0
                    }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                        game.add.tween(this.crab_plate).to({
                            x: -150
                        }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                            game.add.tween(this.rgp1).to({
                                x: 0
                            }, 700, Phaser.Easing.Quadratic.Out, true);
                            game.add.tween(this.bowlgp3).to({
                                x: 0
                            }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                                this.spoon3.inputEnabled = true;
                                this.arrow1.visible = true;
                                this.arrow1.x = 355;
                                this.arrow1.y = 594;
                            }, this);
                        }, this);
                    }, this);
                }, this);




            } else {
                game.add.tween(this.cpack).to({
                    x: 370,
                    y: 605
                }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                    this.cpack.inputEnabled = true;
                    this.arrow1.visible = true;
                }, this);
            }
        }, this);

        this.rgp1 = game.add.group();

        this.roller1 = game.add.sprite(256.35, 549.95, 'roller1');
        this.roller1.anchor.setTo(0.5);
        this.rgp1.add(this.roller1);

        this.rlayer1 = game.add.sprite(254.35, 540.45, 'rlayer1');
        this.rlayer1.anchor.setTo(0.5);
        this.rgp1.add(this.rlayer1);

        this.mlayer1 = game.add.sprite(254.35, 534.8, 'mlayer1');
        this.mlayer1.anchor.setTo(0.5);
        this.mlayer1.visible = false;
        this.rgp1.add(this.mlayer1);

        this.bpiece1 = game.add.sprite(211.3, 500, 'bpiece');
        this.bpiece1.anchor.setTo(0.5);
        this.bpiece1.scale.setTo(0.6);
        this.bpiece1.visible = false;
        this.rgp1.add(this.bpiece1);

        this.bpiece2 = game.add.sprite(277.8, 500, 'bpiece');
        this.bpiece2.anchor.setTo(0.5);
        this.bpiece2.scale.setTo(0.6);
        this.bpiece2.visible = false;
        this.rgp1.add(this.bpiece2);

        this.lpiece1 = game.add.sprite(257.95, 516.45, 'lpiece');
        this.lpiece1.anchor.setTo(0.5);
        this.lpiece1.visible = false;
        this.rgp1.add(this.lpiece1);

        this.lpiece2 = game.add.sprite(277.45, 530.9, 'lpiece');
        this.lpiece2.anchor.setTo(0.5);
        this.lpiece2.angle = -30;
        this.lpiece2.visible = false;
        this.rgp1.add(this.lpiece2);

        this.lpiece3 = game.add.sprite(225.95, 528.2, 'lpiece');
        this.lpiece3.anchor.setTo(0.5);
        this.lpiece3.angle = -50;
        this.lpiece3.visible = false;
        this.rgp1.add(this.lpiece3);

        this.lpiece4 = game.add.sprite(252.45, 537.95, 'lpiece');
        this.lpiece4.anchor.setTo(0.5);
        this.lpiece4.visible = false;
        this.rgp1.add(this.lpiece4);

        this.apiece1 = game.add.sprite(217, 560.15, 'apiece');
        this.apiece1.anchor.setTo(0.5);
        this.apiece1.angle = 65;
        // this.apiece1.scale.setTo(0.57);
        this.apiece1.visible = false;
        this.rgp1.add(this.apiece1);

        this.apiece2 = game.add.sprite(290.9, 557, 'apiece');
        this.apiece2.anchor.setTo(0.5);
        this.apiece2.angle = 65;
        // this.apiece2.scale.setTo(0.57);
        this.apiece2.visible = false;
        this.rgp1.add(this.apiece2);

        this.apiece3 = game.add.sprite(253.9, 557, 'apiece');
        this.apiece3.anchor.setTo(0.5);
        this.apiece3.angle = 65;
        // this.apiece3.scale.setTo(0.57);
        this.apiece3.visible = false;
        this.rgp1.add(this.apiece3);

        this.mpiece1 = game.add.sprite(236.95, 517.1, 'mpiece');
        this.mpiece1.anchor.setTo(0.5);
        // this.mpiece1.scale.setTo(0.9);
        this.mpiece1.visible = false;
        this.rgp1.add(this.mpiece1);

        this.mpiece2 = game.add.sprite(273.95, 527.95, 'mpiece');
        this.mpiece2.anchor.setTo(0.5);
        // this.mpiece2.scale.setTo(0.9);
        this.mpiece2.visible = false;
        this.rgp1.add(this.mpiece2);

        this.rgp1.x = -500;

        this.bowlgp3 = game.add.group();

        this.vbowl3 = game.add.sprite(357.4, 659.8, 'vbowl1');
        this.vbowl3.anchor.setTo(0.5);
        this.bowlgp3.add(this.vbowl3);

        this.rbowl_ani3 = game.add.sprite(368, 586, 'rbowl_ani');
        this.rbowl_ani3.anchor.setTo(0.5);
        this.rbowl_ani3.frame = 24;
        this.bowlgp3.add(this.rbowl_ani3);

        this.spoon3 = game.add.sprite(376.9, 650, 'spoon0002');
        this.spoon3.anchor.setTo(0.5);
        this.spoon3.angle = -40;
        // this.spoon3.inputEnabled=true;
        this.spoon3.events.onInputDown.add(function() {
            this.spoon3.inputEnabled = false;
            this.arrow1.visible = false;
            this.arrow1.x = 355;
            this.arrow1.y = 594;
            this.arrow2.visible = true;
            this.arrow2.x = 247;
            this.arrow2.y = 441;
            this.spoon3.visible = false;
            this.spoon4.visible = true;
            this.creamefun();

        }, this);
        this.bowlgp3.add(this.spoon3);

        this.vbowlf3 = game.add.sprite(356.9, 694.3, 'vbowlf');
        this.vbowlf3.anchor.setTo(0.5);
        this.bowlgp3.add(this.vbowlf3);

        this.spoon4 = game.add.sprite(376.9, 650, 'spoon0002');
        this.spoon4.anchor.setTo(0.5);
        this.spoon4.angle = -40;
        this.spoon4.visible = false;
        this.bowlgp3.add(this.spoon4);

        this.bowlgp3.x = 300;

        this.bowlgp4 = game.add.group();

        this.vbowl4 = game.add.sprite(357.4, 659.8, 'vbowl1');
        this.vbowl4.anchor.setTo(0.5);
        this.bowlgp4.add(this.vbowl4);

        var lpiecex = [306, 334, 363, 391, 422, 410, 710];
        var lpiecey = [675, 679, 675, 675, 675, 130, 440];

        for (i = 1; i <= 5; i++) {
            this['lpiece_' + i] = game.add.sprite(lpiecex[i - 1], lpiecey[i - 1], 'lpiece');
            this['lpiece_' + i].anchor.setTo(0.5);
            this.bowlgp4.add(this['lpiece_' + i]);

        }

        this.lcnt = 0;

        this.vbowlf4 = game.add.sprite(356.9, 694.3, 'vbowlf');
        this.vbowlf4.anchor.setTo(0.5);
        // this.vbowlf4.inputEnabled=true;
        this.vbowlf4.events.onInputDown.add(function() {
            this.lcnt++;
            this.vbowlf4.inputEnabled = false;
            this.lpiece0drag = true;
            this.arrow1.visible = false;
            this.arrow1.x = 360;
            this.arrow1.y = 610;
            this.arrow2.visible = true;
            this.arrow2.x = 250;
            this.arrow2.y = 470;
            if (this.lcnt == 1) {
                this.frect.inputEnabled = true;
                this.lpiece_1.visible = false;
                this.lpiece_0.visible = true;
            }
            if (this.lcnt == 2) {
                this.frect.inputEnabled = true;
                this.lpiece_2.visible = false;
                this.lpiece_0.visible = true;
            }
            if (this.lcnt == 3) {
                this.frect.inputEnabled = true;
                this.lpiece_3.visible = false;
                this.lpiece_0.visible = true;
            }
            if (this.lcnt == 4) {
                this.frect.inputEnabled = true;
                this.lpiece_4.visible = false;
                this.lpiece_0.visible = true;
            }

        }, this);
        this.bowlgp4.add(this.vbowlf4);

        this.lpiece0drag = false;
        this.lpiece_0 = game.add.sprite(306, 668, 'lpiece');
        this.lpiece_0.anchor.setTo(0.5);
        this.lpiece_0.visible = false;
        this.bowlgp4.add(this.lpiece_0);

        this.bowlgp4.x = 300;

        this.plategp_1 = game.add.group();
        this.vpcnt = 0;

        this.bpiece1drag = false;
        this.vplate_1 = game.add.sprite(357.4, 680, 'vplate');
        this.vplate_1.anchor.setTo(0.5);
        // this.vplate_1.inputEnabled=true;
        this.vplate_1.events.onInputDown.add(function() {
            this.vpcnt++;
            this.vplate_1.inputEnabled = false;
            this.frect.inputEnabled = true;
            this.arrow1.visible = false;
            this.arrow1.x = 360;
            this.arrow1.y = 610;
            this.arrow2.visible = true;
            this.arrow2.x = 250;
            this.arrow2.y = 470;
            if (this.vpcnt == 1) {
                this.bpiece1drag = true;
            }
            if (this.vpcnt == 2) {
                this.bpiece_1.visible = true;
                this.bpiece_2.visible = false;
            }

        }, this);
        this.plategp_1.add(this.vplate_1);

        this.bpiece_4 = game.add.sprite(357.4, 660, 'bpiece');
        this.bpiece_4.anchor.setTo(0.5);
        this.plategp_1.add(this.bpiece_4);

        this.bpiece_3 = game.add.sprite(357.4, 670, 'bpiece');
        this.bpiece_3.anchor.setTo(0.5);
        this.plategp_1.add(this.bpiece_3);

        this.bpiece_2 = game.add.sprite(357.4, 680, 'bpiece');
        this.bpiece_2.anchor.setTo(0.5);
        this.plategp_1.add(this.bpiece_2);

        this.bpiece_1 = game.add.sprite(357.4, 690, 'bpiece');
        this.bpiece_1.anchor.setTo(0.5);
        this.plategp_1.add(this.bpiece_1);

        this.plategp_1.x = 300;


        this.plategp_2 = game.add.group();
        this.vpcnt2 = 0;

        this.apiece1drag = false;
        this.vplate_2 = game.add.sprite(357.4, 680, 'vplate');
        this.vplate_2.anchor.setTo(0.5);
        // this.vplate_2.inputEnabled=true;
        this.vplate_2.events.onInputDown.add(function() {
            this.vpcnt2++;
            this.vplate_2.inputEnabled = false;
            this.frect.inputEnabled = true;
            this.arrow1.visible = false;
            this.arrow1.x = 360;
            this.arrow1.y = 610;
            this.arrow2.visible = true;
            this.arrow2.x = 250;
            this.arrow2.y = 470;
            if (this.vpcnt2 == 1) {
                this.apiece1drag = true;
            }
            if (this.vpcnt2 == 2) {
                this.apiece_1.visible = true;
                this.apiece_2.visible = false;
            }

        }, this);
        this.plategp_2.add(this.vplate_2);

        this.apiece_4 = game.add.sprite(357.4, 660, 'apiece');
        this.apiece_4.anchor.setTo(0.5);
        this.apiece_4.angle = 75;
        this.plategp_2.add(this.apiece_4);

        this.apiece_3 = game.add.sprite(357.4, 670, 'apiece');
        this.apiece_3.anchor.setTo(0.5);
        this.apiece_3.angle = 75;
        this.plategp_2.add(this.apiece_3);

        this.apiece_2 = game.add.sprite(357.4, 680, 'apiece');
        this.apiece_2.anchor.setTo(0.5);
        this.apiece_2.angle = 75;
        this.plategp_2.add(this.apiece_2);

        this.apiece_1 = game.add.sprite(357.4, 690, 'apiece');
        this.apiece_1.anchor.setTo(0.5);
        this.apiece_1.angle = 75;
        this.plategp_2.add(this.apiece_1);

        this.plategp_2.x = 300;

        this.plategp_3 = game.add.group();
        this.vpcnt3 = 0;

        this.mpiece1drag = false;
        this.vplate_3 = game.add.sprite(357.4, 680, 'vplate');
        this.vplate_3.anchor.setTo(0.5);
        // this.vplate_3.inputEnabled=true;
        this.vplate_3.events.onInputDown.add(function() {
            this.vpcnt3++;
            this.vplate_3.inputEnabled = false;
            this.frect.inputEnabled = true;
            this.arrow1.visible = false;
            this.arrow1.x = 360;
            this.arrow1.y = 610;
            this.arrow2.visible = true;
            this.arrow2.x = 250;
            this.arrow2.y = 470;
            if (this.vpcnt3 == 1) {
                this.mpiece1drag = true;
            }
            if (this.vpcnt3 == 2) {
                this.mpiece_1.visible = true;
                this.mpiece_2.visible = false;
            }

        }, this);
        this.plategp_3.add(this.vplate_3);

        this.mpiece_4 = game.add.sprite(357.4, 660, 'mpiece');
        this.mpiece_4.anchor.setTo(0.5);
        this.plategp_3.add(this.mpiece_4);

        this.mpiece_3 = game.add.sprite(357.4, 670, 'mpiece');
        this.mpiece_3.anchor.setTo(0.5);
        this.plategp_3.add(this.mpiece_3);

        this.mpiece_2 = game.add.sprite(357.4, 680, 'mpiece');
        this.mpiece_2.anchor.setTo(0.5);
        this.plategp_3.add(this.mpiece_2);

        this.mpiece_1 = game.add.sprite(357.4, 690, 'mpiece');
        this.mpiece_1.anchor.setTo(0.5);
        this.plategp_3.add(this.mpiece_1);

        this.plategp_3.x = 300;


        this.roll_ani = game.add.sprite(252, 520, 'roll_ani');
        this.roll_ani.anchor.setTo(0.5);
        this.roll_ani.visible = false;


        this.roller2 = game.add.sprite(256.35, 549.95, 'roller1');
        this.roller2.anchor.setTo(0.5);
        this.roller2.visible = false;

        this.fplate = game.add.sprite(756.1, 539.25, 'fplate');
        this.fplate.anchor.setTo(0.5);

        this.rolledsDrag = false;
        this.rolled_susi1 = game.add.sprite(256.35, 530, 'rolled_susi');
        this.rolled_susi1.anchor.setTo(0.5);
        this.rolled_susi1.visible = false;
        // this.rolled_susi1.inputEnabled=true;
        this.rolled_susi1.events.onInputDown.add(function() {
            this.rolled_susi1.inputEnabled = false;
            this.rolledsDrag = true;
            this.arrow2.visible = false;
            game.add.tween(this.roller2).to({
                x: -356
            }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                game.add.tween(this.fplate).to({
                    x: 256
                }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                    this.frect.inputEnabled = true;
                    this.arrow2.visible = true;
                }, this);
            }, this);

        }, this);

        this.rsusi_cut = game.add.sprite(256.35, 538, 'rsusi_cut');
        this.rsusi_cut.anchor.setTo(0.5);
        // this.rsusi_cut.frame=5;
        this.rsusi_cut.visible = false;

        this.cut_piece1 = game.add.sprite(185, 528, 'cut_piece1');
        this.cut_piece1.anchor.setTo(0.5);
        this.cut_piece1.visible = false;
        // this.cut_piece1.inputEnabled=true;
        // this.cut_piece1.input.enableDrag();
        this.cut_piece1.events.onInputDown.add(function() {
            game.world.bringToTop(this.cut_piece1);
            // this.cut_piece1.loadTexture('bpack0002');
            this.arrow1.visible = false;
            this.arrow1.x = 188;
            this.arrow1.y = 457;
            this.arrow2.visible = true;
            this.arrow2.x = 384;
            this.arrow2.y = 591;
        }, this);
        this.cut_piece1.events.onInputUp.add(function() {
            this.cut_piece1.inputEnabled = false;
            this.arrow2.visible = false;
            if ((game.input.activePointer.x > 280 && game.input.activePointer.x < 487 && game.input.activePointer.y > 606 && game.input.activePointer.y < 717)) {
                this.cut_piece1.visible = false;


                // game.add.tween(this.bsugar).to({y:487},1500,Phaser.Easing.Quadratic.Out,true);
                // game.add.tween(this.bsugar.scale).to({x:1,y:1},1500,Phaser.Easing.Quadratic.Out,true);

                this.psusi1.visible = true;
                this.cut_piece2.inputEnabled = true;
                this.cut_piece2.input.enableDrag();
                this.arrow1.visible = true;
                this.arrow1.x = 326;
                this.arrow1.y = 451;



            } else {
                game.add.tween(this.cut_piece1).to({
                    x: 185,
                    y: 528
                }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                    this.cut_piece1.inputEnabled = true;
                    this.arrow1.visible = true;
                }, this);
            }
        }, this);


        this.cut_piece2 = game.add.sprite(327, 527, 'cut_piece2');
        this.cut_piece2.anchor.setTo(0.5);
        this.cut_piece2.visible = false;
        // this.cut_piece2.scale.setTo(0.8);
        // this.cut_piece2.inputEnabled=true;
        // this.cut_piece2.input.enableDrag();
        this.cut_piece2.events.onInputDown.add(function() {
            game.world.bringToTop(this.cut_piece2);
            // this.cut_piece2.loadTexture('bpack0002');
            this.arrow1.visible = false;
            this.arrow1.x = 326;
            this.arrow1.y = 451;
            this.arrow2.visible = true;
            this.arrow2.x = 384;
            this.arrow2.y = 591;
        }, this);
        this.cut_piece2.events.onInputUp.add(function() {
            this.cut_piece2.inputEnabled = false;
            this.arrow2.visible = false;
            if ((game.input.activePointer.x > 280 && game.input.activePointer.x < 487 && game.input.activePointer.y > 606 && game.input.activePointer.y < 717)) {
                this.cut_piece2.visible = false;


                // game.add.tween(this.bsugar).to({y:487},1500,Phaser.Easing.Quadratic.Out,true);
                // game.add.tween(this.bsugar.scale).to({x:1,y:1},1500,Phaser.Easing.Quadratic.Out,true);

                this.psusi2.visible = true;

                game.add.tween(this.fplate).to({
                    x: -300
                }, 700, Phaser.Easing.Quadratic.Out, true);

                game.add.tween(this.playbtn.scale).to({
                    x: 0.9,
                    y: 0.9
                }, 700, Phaser.Easing.Quadratic.Out, true);

                game.add.tween(this.fsgroup).to({
                    x: -110,
                    y: -30
                }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {

                    // game.state.start('dect_cake');
                }, this);


            } else {
                game.add.tween(this.cut_piece2).to({
                    x: 327,
                    y: 527
                }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                    this.cut_piece2.inputEnabled = true;
                    this.arrow1.visible = true;
                }, this);
            }
        }, this);

        this.knife_1 = game.add.sprite(640.25, 620, 'knife');
        this.knife_1.anchor.setTo(0.5);
        // this.knife_1.inputEnabled=true;
        // this.knife_1.input.enableDrag();
        this.knife_1.events.onInputDown.add(function() {
            game.world.bringToTop(this.knife_1);
            // this.knife_1.loadTexture('bpack0002');
            this.arrow1.visible = false;
            this.arrow1.x = 427;
            this.arrow1.y = 467;
            this.arrow2.visible = true;
            this.arrow2.x = 250;
            this.arrow2.y = 436;
        }, this);
        this.knife_1.events.onInputUp.add(function() {
            this.knife_1.inputEnabled = false;
            this.arrow2.visible = false;
            if ((game.input.activePointer.x > 149 && game.input.activePointer.x < 378 && game.input.activePointer.y > 432 && game.input.activePointer.y < 596)) {
                this.kncnt++;
                this.knife_1.visible = false;
                this.rolled_susi1.visible = false;


                this.bringel1.visible = false;
                this.rsusi_cut.visible = true;
                this.rsusi_cut.animations.add('rsusi_cut');
                this.rsusi_cut.animations.play('rsusi_cut', 10, false).onComplete.add(function() {
                    this.rsusi_cut.visible = false;
                    this.cut_piece1.visible = true;
                    this.cut_piece2.visible = true;
                    game.add.tween(this.fsgroup).to({
                        x: 0
                    }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                        this.cut_piece1.inputEnabled = true;
                        this.cut_piece1.input.enableDrag();
                        this.arrow1.visible = true;
                        this.arrow1.x = 188;
                        this.arrow1.y = 457;

                        /*game.add.tween(this.bringel_cut).to({alpha:0},700,Phaser.Easing.Quadratic.Out,true).onComplete.add(function(){
         game.add.tween(this.bowlgp2).to({x:-370},700,Phaser.Easing.Quadratic.Out,true).onComplete.add(function(){
          this.sbottle.inputEnabled=true;
         this.sbottle.input.enableDrag();
         this.arrow1.visible=true;
        this.arrow1.x=375;
         this.arrow1.y=489;
          },this);
          },this);*/
                    }, this);
                }, this);


            } else {
                game.add.tween(this.knife_1).to({
                    x: 440.25,
                    y: 620
                }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                    this.knife_1.inputEnabled = true;
                    this.arrow1.visible = true;
                }, this);
            }
        }, this);

        this.frcnt = 0;

        this.frect = game.add.graphics(160, 482);
        this.frect.beginFill(0x000000, 0);
        this.frect.drawRect(0, 0, 180, 100);
        // this.frect.inputEnabled=true;
        this.frect.events.onInputDown.add(function() {
            this.frcnt++;
            this.frect.inputEnabled = false;
            this.arrow2.visible = false;
            if (this.frcnt == 1) {
                this.arrow1.visible = true;
                this.lpiece1.visible = true;
                this.lpiece_0.visible = false;
                this.vbowlf4.inputEnabled = true;
            }
            if (this.frcnt == 2) {
                this.arrow1.visible = true;
                this.lpiece2.visible = true;
                this.lpiece_0.visible = false;
                this.vbowlf4.inputEnabled = true;
            }
            if (this.frcnt == 3) {
                this.arrow1.visible = true;
                this.lpiece3.visible = true;
                this.lpiece_0.visible = false;
                this.vbowlf4.inputEnabled = true;
            }
            if (this.frcnt == 4) {
                this.lpiece4.visible = true;
                this.lpiece_0.visible = false;
                this.lpiece0drag = false;
                game.add.tween(this.bowlgp4).to({
                    x: 300
                }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                    game.add.tween(this.plategp_1).to({
                        x: 0
                    }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                        this.vplate_1.inputEnabled = true;
                        this.arrow1.visible = true;
                        this.arrow1.x = 360;
                        this.arrow1.y = 610;
                    }, this);
                }, this);
            }

            if (this.frcnt == 5) {
                this.arrow1.visible = true;
                this.bpiece1.visible = true;
                this.bpiece_1.visible = false;
                this.vplate_1.inputEnabled = true;
            }

            if (this.frcnt == 6) {
                // this.arrow1.visible=true;
                this.bpiece2.visible = true;
                this.bpiece_1.visible = false;
                this.bpiece1drag = false;
                game.add.tween(this.plategp_1).to({
                    x: 300
                }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                    game.add.tween(this.plategp_2).to({
                        x: 0
                    }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                        this.vplate_2.inputEnabled = true;
                        this.arrow1.visible = true;
                        this.arrow1.x = 360;
                        this.arrow1.y = 610;
                    }, this);
                }, this);
            }

            if (this.frcnt == 7) {
                this.arrow1.visible = true;
                this.apiece1.visible = true;
                this.apiece_1.visible = false;
                this.vplate_2.inputEnabled = true;
            }

            if (this.frcnt == 8) {
                // this.arrow1.visible=true;
                this.apiece1drag = false;
                this.apiece2.visible = true;
                this.apiece_1.visible = false;
                game.add.tween(this.plategp_2).to({
                    x: 300
                }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                    game.add.tween(this.plategp_3).to({
                        x: 0
                    }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                        this.vplate_3.inputEnabled = true;
                        this.arrow1.visible = true;
                        this.arrow1.x = 360;
                        this.arrow1.y = 610;
                    }, this);
                }, this);
            }

            if (this.frcnt == 9) {
                this.arrow1.visible = true;
                this.mpiece1.visible = true;
                this.mpiece_1.visible = false;
                this.vplate_3.inputEnabled = true;
            }

            if (this.frcnt == 10) {
                // this.arrow1.visible=true;
                this.mpiece1drag = false;
                this.mpiece2.visible = true;
                this.mpiece_1.visible = false;
                game.add.tween(this.plategp_3).to({
                    x: 300
                }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                    this.frect.inputEnabled = true;
                    this.arrow2.visible = true;

                }, this);
            }

            if (this.frcnt == 11) {
                this.rgp1.visible = false;
                this.roll_ani.visible = true;
                game.add.tween(this.roll_ani).to({
                    y: 580
                }, 700, Phaser.Easing.Quadratic.Out, true);
                this.roll_ani.animations.add('roll_ani');
                this.roll_ani.animations.play('roll_ani', 10, false).onComplete.add(function() {
                    this.frect.inputEnabled = true;
                    this.arrow2.visible = true;

                }, this);
            }

            if (this.frcnt == 12) {
                this.roll_ani.visible = false;
                this.roller2.visible = true;
                this.rolled_susi1.visible = true;
                this.rolled_susi1.inputEnabled = true;
                this.arrow2.visible = true;

            }
            if (this.frcnt == 13) {
                this.rolledsDrag = false;
                this.rolled_susi1.x = 256;
                this.rolled_susi1.y = 530;
                this.arrow2.visible = false;
                game.add.tween(this.knife_1).to({
                    x: 440
                }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                    this.knife_1.inputEnabled = true;
                    this.knife_1.input.enableDrag();
                    this.arrow1.visible = true;
                    this.arrow1.x = 427;
                    this.arrow1.y = 467;

                }, this);

            }
        }, this);

        this.fsgroup = game.add.group();

        this.fsplate = game.add.sprite(389.3, 691.05, 'fsplate');
        this.fsplate.anchor.setTo(0.5);
        this.fsgroup.add(this.fsplate);

        this.psusi1 = game.add.sprite(340.9, 659.95, 'psusi1');
        this.psusi1.anchor.setTo(0.5);
        this.psusi1.visible = false;
        this.fsgroup.add(this.psusi1);

        this.psusi2 = game.add.sprite(446.15, 656.05, 'psusi1');
        this.psusi2.anchor.setTo(0.5);
        this.psusi2.visible = false;
        this.fsgroup.add(this.psusi2);

        this.fsgroup.x = 300;







        this.timer = game.add.sprite(-80, 150, 'timer');
        this.timer.anchor.setTo(0.5);
        this.timer.scale.setTo(0.8);



        this.arrowgp = game.add.group();

        var arro2x = [145, 330, 355, 705, 113, 410, 710];
        var arro2y = [430, 365, 694, 420, 402, 130, 440];

        for (i = 1; i <= 2; i++) {
            this['arrow' + i] = game.add.sprite(arro2x[i - 1], arro2y[i - 1], 'arrow');
            this['arrow' + i].anchor.setTo(0.5);
            this['arrow' + i].animations.add('arrow');
            this['arrow' + i].animations.play('arrow', 15, true);
            this['arrow' + i].visible = false;
            if (i == 1) {
                this['arrow' + i].visible = true;
            }
            this.arrowgp.add(this['arrow' + i]);

        }

        /*   this.hitGroup = game.add.group();
      for(var i=0; i<=Main.creameX.length-1; i++)
      {
      this["hitCircle1_"+i] = game.add.graphics(Main.creameX[i],Main.creameY[i]);
      this["hitCircle1_"+i].beginFill(0xffffFF,0.7);
      this["hitCircle1_"+i].drawCircle(0,0,40);
      this["hitCircle1_"+i].id = i;
      this.hitGroup.add(this["hitCircle1_"+i]);     
      game.physics.arcade.enable([this["hitCircle1_"+i]]);
      this["hitCircle1_"+i].body.collideWorldBounds = true;
      }*/

        // this.dummydrag = true;

        // this.dummyobject= game.add.sprite(-100,0,'arrow');
        // this.dummyobject.anchor.setTo(0.5);
        // this.dummyobject.animations.add('salt_ani');
        // this.dummyobject.animations.play('salt_ani',10,true);
        // this.dummyobject.scale.setTo(0.8);


        /* this.mcnt1=0;

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
        this.hitCount = 0;

        this.morebtn = game.add.sprite(65, 737, 'morebtn');
        this.morebtn.anchor.setTo(0.5);
        this.morebtn.scale.setTo(0.9);
        this.morebtn.inputEnabled = true;
        this.morebtn.input.useHandCursor = true;
        this.morebtn.events.onInputUp.add(this.moreLink, this);
        this.morebtn.events.onInputOver.add(this.btnOver, this);
        this.morebtn.events.onInputOut.add(this.btnOut, this);
        // this.levelGroup.add(this.morebtn);

        this.playbtn = game.add.sprite(447, 740, 'donebtn');
        this.playbtn.anchor.setTo(0.5);
        this.playbtn.scale.setTo(0);
        this.playbtn.inputEnabled = true;
        this.playbtn.input.useHandCursor = true;
        this.playbtn.events.onInputUp.add(this.enterRoom, this);
        this.playbtn.events.onInputOver.add(this.btnOver, this);
        this.playbtn.events.onInputOut.add(this.btnOut, this);
        // this.levelGroup.add(this.playbtn);

        if (Main.shutterOn[0]) {
            this.shutter = game.add.sprite(0, 0, 'titlebg');
            game.add.tween(this.shutter).to({
                y: -850
            }, 2000, Phaser.Easing.Quadratic.Out, true) //.onComplete.add(this.startPopUp, this)
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
    hitSprite: function(sprite1, sprite2) {
        sprite2.kill();
        this.hitCount++;
        this.arrow2.visible = false;
        this.mlayer1.visible = true;
        if (this.hitCount >= Main.creameX.length) {

            this.dragCircle.x = 500;
            this.dragCircle.y = 800;
            this.spoon4drag = false;
            game.add.tween(this.spoon4).to({
                x: 376.9,
                y: 650
            }, 1000, Phaser.Easing.Linear.None, true).onComplete.add(function() {
                this.spoon3.visible = true;
                this.spoon4.visible = false;
                this.hitCount = 0;
                game.add.tween(this.bowlgp3).to({
                    x: 300
                }, 700, Phaser.Easing.Linear.None, true).onComplete.add(function() {
                    game.add.tween(this.bowlgp4).to({
                        x: 0
                    }, 700, Phaser.Easing.Linear.None, true).onComplete.add(function() {
                        this.vbowlf4.inputEnabled = true;
                        this.arrow1.visible = true;
                        this.arrow1.x = 360;
                        this.arrow1.y = 610;

                    }, this);
                }, this);
            }, this);
        }
        this.circleDraw.drawCircle(Main.creameX[sprite2.id], Main.creameY[sprite2.id], 60);
    },
    creamefun: function() {
        // this.face_paint1_2.visible=true;
        this.hitGroup = game.add.group();
        for (var i = 0; i <= Main.creameX.length - 1; i++) {
            this["hitCircle1_" + i] = game.add.graphics(Main.creameX[i], Main.creameY[i]);
            this["hitCircle1_" + i].beginFill(0x0000FF, 0);
            this["hitCircle1_" + i].drawCircle(0, 0, 40);
            this["hitCircle1_" + i].id = i;
            this.hitGroup.add(this["hitCircle1_" + i]);
            game.physics.arcade.enable([this["hitCircle1_" + i]]);
            this["hitCircle1_" + i].body.collideWorldBounds = true;

            this.circleGroup = game.add.group();
            this.circleDraw = game.add.graphics(0, 0);
            this.circleDraw.beginFill(0x0000FF, 0);
            this.circleGroup.add(this.circleDraw);
            this.mlayer1.mask = this.circleDraw;


            this.dragCircle = game.add.graphics(0, 0);
            this.dragCircle.beginFill(0xFF0000, 0);
            this.dragCircle.drawCircle(0, 0, 15);
            this.dragCircle.endFill();

            game.physics.arcade.enable([this.dragCircle]);
            this.dragCircle.body.collideWorldBounds = true;
            this.dragCircle.body.onCollide = new Phaser.Signal();
            this.dragCircle.body.onCollide.add(this.hitSprite, this);

            this.spoon4drag = true;
        }
    },
    update: function() {
        if (this.dummydrag) {
            this.dummyobject.x = game.input.activePointer.x;
            this.dummyobject.y = game.input.activePointer.y;
            console.log(game.input.activePointer.x + ':' + game.input.activePointer.y);
        }

        if (this.sgp1drag) {
            this.sgp1.x = game.input.activePointer.x - 300;
            this.sgp1.y = game.input.activePointer.y - 500;
        }

        if (this.sgp2drag) {
            this.sgp2.x = game.input.activePointer.x - 140;
            this.sgp2.y = game.input.activePointer.y - 155;
        }

        if (this.spoon1drag) {
            this.spoon1.x = game.input.activePointer.x - 10;
            this.spoon1.y = game.input.activePointer.y - 20;
        }

        if (this.lpiece0drag) {
            this.lpiece_0.x = game.input.activePointer.x;
            this.lpiece_0.y = game.input.activePointer.y;
        }

        if (this.bpiece1drag) {
            this.bpiece_1.x = game.input.activePointer.x;
            this.bpiece_1.y = game.input.activePointer.y;
        }

        if (this.apiece1drag) {
            this.apiece_1.x = game.input.activePointer.x;
            this.apiece_1.y = game.input.activePointer.y;
        }

        if (this.mpiece1drag) {
            this.mpiece_1.x = game.input.activePointer.x;
            this.mpiece_1.y = game.input.activePointer.y;
        }
        if (this.rolledsDrag) {
            this.rolled_susi1.x = game.input.activePointer.x;
            this.rolled_susi1.y = game.input.activePointer.y;
        }

        if (this.spoon4drag) {
            this.spoon4.x = game.input.activePointer.x - 10;
            this.spoon4.y = game.input.activePointer.y - 20;
            this.dragCircle.x = game.input.activePointer.x - 50;
            this.dragCircle.y = game.input.activePointer.y;

            for (i = 0; i <= Main.creameX.length; i++) {
                game.physics.arcade.collide(this.dragCircle, this['hitCircle1_' + i]);
            }

        }
        game.world.bringToTop(this.arrowgp);
        game.world.bringToTop(this.shutter);
        game.world.bringToTop(this.logoVar);
        game.world.bringToTop(this.musicButton);

    },
    openLink: function() {
        CreateLinksInGame(" Baby-Elsa-Sushi-Cooking", "game", "logo");
    },
    moreLink: function() {
        CreateLinksInGame(" Baby-Elsa-Sushi-Cooking", "game", "more");
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

            game.state.start('dect_cake');

        });

    },
}




game.state.add('boot', Main.boot);
game.state.add('preloader', Main.preloader);
game.state.add('title', Main.title);
game.state.add('intro', Main.intro);
game.state.add('juice_screen', Main.juice_screen);
game.state.add('dect_juice', Main.dect_juice);
game.state.add('dect_cake', Main.dect_cake);
game.state.add('final_screen', Main.final_screen);
game.state.add('make_cake2', Main.make_cake2);
game.state.add('dect_cake2', Main.dect_cake2);
game.state.add('cooking1_screen', Main.cooking1_screen);
game.state.add('intro1', Main.intro1);

game.state.start('boot');