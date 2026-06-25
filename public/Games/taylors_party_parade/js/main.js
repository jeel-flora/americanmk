var game = new Phaser.Game(504, 800, Phaser.AUTO, 'gameContainer');
var Main = {
    music: null,

    shutterOn: [true],
    tr_arr: [1, 1, 1, 1, 1],
    dec_arr: [1, 1, 1],
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
        game.load.spritesheet('soundicon', 'assets/soundicon.png', 97, 138, 2);
        game.load.image('logo', 'assets/logo.png');
        game.load.spritesheet('effects', 'assets/effects.png', 141, 134);
        game.load.spritesheet('effectssd', 'assets/efftes012.png', 367, 335);
        game.load.spritesheet('t_timer', 'assets/t_timer.png', 160, 160, 60);
        game.load.spritesheet('arrow', 'assets/arrow.png', 66, 89, 13);

        /* for(i=0;i<RelatedGames.length; i++)
        {
        game.load.image('thumb_'+i, RelatedGames[i]["thumb"]);
        }*/
        game.load.image('Tump_frame', 'assets/Tump_frame.png');

        game.load.image('dad', 'assets/intro/dad.png');
        game.load.image('i_bg', 'assets/intro/i_bg.png');
        game.load.image('mom', 'assets/intro/mom.png');
        game.load.image('taylor', 'assets/intro/taylor.png');
        game.load.image('dad_txt0001', 'assets/intro/dad_txt0001.png');
        game.load.image('dad_txt0002', 'assets/intro/dad_txt0002.png');
        game.load.image('mom_text0001', 'assets/intro/mom_text0001.png');
        game.load.image('mom_text0002', 'assets/intro/mom_text0002.png');
        game.load.image('mom_text0003', 'assets/intro/mom_text0003.png');


        game.load.image('d_bg', 'assets/btns/d_bg.png');
        game.load.image('t_body', 'assets/btns/t_body.png');
        game.load.image('earing', 'assets/btns/earing.png');
        game.load.image('t_head', 'assets/btns/t_head.png');
        game.load.image('panel1', 'assets/btns/panel1.png');
        game.load.image('d_panel', 'assets/btns/d_panel.png');

        game.load.image('bowl1', 'assets/cooking/bowl1.png');
        game.load.image('bowl2', 'assets/cooking/bowl2.png');
        game.load.image('c_bg', 'assets/cooking/c_bg.png');
        game.load.image('c_table', 'assets/cooking/c_table.png');
        game.load.image('flour0001', 'assets/cooking/flour0001.png');
        game.load.image('flour0002', 'assets/cooking/flour0002.png');
        game.load.image('sugar0001', 'assets/cooking/sugar0001.png');
        game.load.image('sugar0002', 'assets/cooking/sugar0002.png');
        game.load.image('egg_st1', 'assets/cooking/egg_st1.png');
        game.load.image('egg_st2', 'assets/cooking/egg_st2.png');
        game.load.image('joint', 'assets/cooking/joint.png');
        game.load.image('egg', 'assets/cooking/egg.png');
        game.load.image('coco_bowl', 'assets/cooking/coco_bowl.png');
        game.load.image('butter_bowl', 'assets/cooking/butter_bowl.png');
        game.load.image('kettle', 'assets/cooking/kettle.png');
        game.load.image('salt', 'assets/cooking/salt.png');
        game.load.image('wisk', 'assets/cooking/wisk.png');
        game.load.image('backed_pan', 'assets/cooking/backed_pan.png');
        game.load.image('plate', 'assets/cooking/plate.png');
        game.load.image('table', 'assets/cooking/table.png');
        game.load.image('sheet', 'assets/cooking/sheet.png');
        game.load.image('scraber', 'assets/cooking/scraber.png');
        game.load.image('p1', 'assets/cooking/p1.png');
        game.load.image('p2', 'assets/cooking/p2.png');
        game.load.image('yellow', 'assets/cooking/yellow.png');
        game.load.image('cake_1', 'assets/cooking/cake_1.png');
        game.load.image('c_bg1', 'assets/cooking/c_bg1.png');
        game.load.image('titlebg', 'assets/titlebg.png');

        game.load.image('fork', 'assets/intro/fork.png');
        game.load.image('new_table', 'assets/intro/new_table.png');
        game.load.image('juice', 'assets/intro/juice.png');
        game.load.image('knife', 'assets/intro/knife.png');
        // game.load.image('plate1','assets/intro/plate1.png'); 	
        // game.load.image('plate2','assets/intro/plate2.png'); 	
        game.load.image('jessica', 'assets/intro/jessica.png');
        game.load.image('tom', 'assets/intro/tom.png');
        game.load.image('tisuue', 'assets/intro/tisuue.png');
        game.load.image('jessica_txt0001', 'assets/intro/jessica_txt0001.png');
        game.load.image('jessica_txt0002', 'assets/intro/jessica_txt0002.png');
        game.load.image('tom_txt', 'assets/intro/tom_txt.png');
        game.load.image('title', 'assets/intro/title.png');
        game.load.image('i1', 'assets/intro/i1.png');
        game.load.image('i2', 'assets/intro/i2.png');
        game.load.image('i3', 'assets/intro/i3.png');
        game.load.image('g_bg1', 'assets/intro/g_bg1.png');
        game.load.image('plate_2', 'assets/intro/plate_2.png');
        game.load.image('plate1_1', 'assets/intro/plate1_1.png');
        game.load.image('desert', 'assets/intro/desert.png');
        game.load.image('fruit', 'assets/intro/fruit.png');
        game.load.image('nn_text', 'assets/intro/nn_text.png');


        game.load.image('center_panel', 'assets/dec/center_panel.png');
        game.load.image('side_panel', 'assets/dec/side_panel.png');
        game.load.image('coins0001', 'assets/dec/coins0001.png');
        game.load.image('coins0002', 'assets/dec/coins0002.png');
        game.load.image('coins0003', 'assets/dec/coins0003.png');
        game.load.image('i_arrow', 'assets/dec/i_arrow.png');
        game.load.image('b_bg', 'assets/intro/b_bg.png');
        game.load.image('c11', 'assets/dec/c11.png');

        game.load.spritesheet('flour_ani', 'assets/cooking/flour_ani.png', 136, 134, 10);
        game.load.spritesheet('fl_p_ani', 'assets/cooking/fl_p_ani.png', 213, 268, 15);
        game.load.spritesheet('salt_ani', 'assets/cooking/salt_ani.png', 126, 126, 10);
        game.load.spritesheet('su_p_ani', 'assets/cooking/su_p_ani.png', 204, 269, 15);
        game.load.spritesheet('bowl_ani', 'assets/cooking/bowl_ani.png', 172, 135, 10);
        game.load.spritesheet('fliter_ani', 'assets/cooking/fliter_ani.png', 182, 96, 14);
        game.load.spritesheet('yolk_ani', 'assets/cooking/yolk_ani.png', 254, 556, 8);
        game.load.spritesheet('egg_ani', 'assets/cooking/egg_ani.png', 240, 235, 40);
        game.load.spritesheet('y_flow_ani', 'assets/cooking/y_flow_ani.png', 209, 164, 10);
        game.load.spritesheet('bt_ani', 'assets/cooking/bt_ani.png', 104, 116, 5);
        game.load.spritesheet('butter_bowlani', 'assets/cooking/butter_bowlani.png', 183, 158, 7);
        game.load.spritesheet('coco_ani', 'assets/cooking/coco_ani.png', 105, 105, 10);
        game.load.spritesheet('coco_bowl_ani', 'assets/cooking/coco_bowl_ani.png', 143, 301, 18);
        game.load.spritesheet('salt_flow_ani', 'assets/cooking/salt_flow_ani.png', 200, 202, 30);
        game.load.spritesheet('water_ani', 'assets/cooking/water_ani.png', 188, 309, 25);
        game.load.spritesheet('water_flow_ani', 'assets/cooking/water_flow_ani.png', 254, 388, 23);
        game.load.spritesheet('mold_ani', 'assets/cooking/mold_ani.png', 193, 147, 15);
        game.load.spritesheet('ovan_ani', 'assets/cooking/ovan_ani.png', 348, 234, 6);
        game.load.spritesheet('fall_ani', 'assets/cooking/fall_ani.png', 324, 373, 23);
        game.load.spritesheet('final_ani', 'assets/cooking/final_ani.png', 333, 186, 17);
        game.load.spritesheet('c1_ani', 'assets/cooking/c1_ani.png', 415, 369, 7);

        for (i = 1; i <= 8; i++) {
            game.load.image('taylor_txt000' + i, 'assets/intro/taylor_txt000' + i + '.png');
        }
        for (i = 1; i <= 5; i++) {
            game.load.image('icons000' + i, 'assets/btns/icons000' + i + '.png');
            game.load.image('btn0' + i, 'assets/btns/btn0' + i + '.png');

        }

        for (i = 1; i <= 6; i++) {
            game.load.image('h1_cap000' + i, 'assets/btns/h1_cap000' + i + '.png');
            game.load.image('h2_cap000' + i, 'assets/btns/h2_cap000' + i + '.png');
            game.load.image('h3_cap000' + i, 'assets/btns/h3_cap000' + i + '.png');
            game.load.image('h4_cap000' + i, 'assets/btns/h4_cap000' + i + '.png');
            game.load.image('h5_cap000' + i, 'assets/btns/h5_cap000' + i + '.png');
            game.load.image('h6_cap000' + i, 'assets/btns/h6_cap000' + i + '.png');
            game.load.image('t_backhair000' + i, 'assets/btns/t_backhair000' + i + '.png');
            game.load.image('t_fronthair000' + i, 'assets/btns/t_fronthair000' + i + '.png');
            game.load.image('t_chain000' + i, 'assets/btns/t_chain000' + i + '.png');
            game.load.image('t_shoes000' + i, 'assets/btns/t_shoes000' + i + '.png');
            game.load.image('t_dress000' + i, 'assets/btns/t_dress000' + i + '.png');
            game.load.image('cake000' + i, 'assets/dec/cake000' + i + '.png');
            game.load.image('dec_table000' + i, 'assets/dec/dec_table000' + i + '.png');
            game.load.image('dec000' + i, 'assets/dec/dec000' + i + '.png');
        }

        //LLLLL
        game.load.onFileComplete.add(this.fileLoadFunPre, this);


    },
    fileLoadFunPre: function(progress, cacheKey, success, totalLoaded, totalFiles) {
        this.progress.setText('LOADING: ' + parseInt(progress) + '%');
        if (progress == 100) {
            this.progress.visible = false;
            game.load.onFileComplete.removeAll();
            //AAAAAA

            // game.state.start('decoration');



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

    },
}
Main.title = function() {}

Main.title.prototype = {
    create: function() {
        if (Main.music == null) {
            Main.music = game.add.audio('music', 0.5, true);
            Main.music.play();
        };
        this.b_bg = game.add.sprite(0, 0, 'b_bg');


        this.jessica = game.add.sprite(100, 463.8, 'jessica');
        this.jessica.anchor.setTo(0.5);
        this.jessica.scale.setTo(0.85);


        this.jessica_txt0002 = game.add.sprite(180, 200, 'jessica_txt0002');
        this.jessica_txt0002.anchor.setTo(0.5);
        this.jessica_txt0002.scale.setTo(0.65);
        this.jessica_txt0002.alpha = 0;



        this.t_group = game.add.group();

        this.t_backhair0001 = game.add.sprite(274.6, 425.45, 't_backhair000' + Main.tr_arr[0]);
        this.t_backhair0001.anchor.setTo(0.5);
        this.t_group.add(this.t_backhair0001);

        this.t_body = game.add.sprite(272.5, 503, 't_body');
        this.t_body.anchor.setTo(0.5);
        this.t_group.add(this.t_body);

        this.t_head = game.add.sprite(263.95, 236.8, 't_head');
        this.t_head.anchor.setTo(0.5);
        this.t_group.add(this.t_head);

        this.t_shoes0001 = game.add.sprite(274.1, 425.95, 't_shoes000' + Main.tr_arr[2]);
        this.t_shoes0001.anchor.setTo(0.5);
        this.t_group.add(this.t_shoes0001);

        this.t_dress0001 = game.add.sprite(273.7, 425.95, 't_dress000' + Main.tr_arr[1]);
        this.t_dress0001.anchor.setTo(0.5);
        this.t_group.add(this.t_dress0001);

        this.t_chain0001 = game.add.sprite(275.15, 425.8, 't_chain000' + Main.tr_arr[3]);
        this.t_chain0001.anchor.setTo(0.5);
        this.t_chain0001.alpha = 1;
        this.t_group.add(this.t_chain0001);

        this.t_fronthair0001 = game.add.sprite(271.95, 425.45, 't_fronthair000' + Main.tr_arr[0]);
        this.t_fronthair0001.anchor.setTo(0.5);
        this.t_group.add(this.t_fronthair0001);

        this.earing = game.add.sprite(274.1, 425.95, 'earing');
        this.earing.anchor.setTo(0.5);
        this.earing.alpha = 1;
        this.t_group.add(this.earing);

        this.earing11 = game.add.sprite(158, 425.95, 'earing');
        this.earing11.anchor.setTo(0.5);
        this.earing11.alpha = 1;
        this.t_group.add(this.earing11);

        this.h1_cap0001 = game.add.sprite(271.95, 425.45, 'h1_cap000' + Main.tr_arr[4]);
        this.h1_cap0001.anchor.setTo(0.5);
        this.h1_cap0001.alpha = 1;
        this.t_group.add(this.h1_cap0001);

        this.h2_cap0001 = game.add.sprite(271.95, 425.4, 'h2_cap000' + Main.tr_arr[4]);
        this.h2_cap0001.anchor.setTo(0.5);
        this.h2_cap0001.alpha = 1;
        this.t_group.add(this.h2_cap0001);

        this.h3_cap0001 = game.add.sprite(271.8, 425.6, 'h3_cap000' + Main.tr_arr[4]);
        this.h3_cap0001.anchor.setTo(0.5);
        this.h3_cap0001.alpha = 1;
        this.t_group.add(this.h3_cap0001);

        this.h4_cap0001 = game.add.sprite(271.95, 425.65, 'h4_cap000' + Main.tr_arr[4]);
        this.h4_cap0001.anchor.setTo(0.5);
        this.h4_cap0001.alpha = 1;
        this.t_group.add(this.h4_cap0001);

        this.h5_cap0001 = game.add.sprite(271.9, 425.6, 'h5_cap000' + Main.tr_arr[4]);
        this.h5_cap0001.anchor.setTo(0.5);
        this.h5_cap0001.alpha = 1;
        this.t_group.add(this.h5_cap0001);

        this.h6_cap0001 = game.add.sprite(272, 425.65, 'h6_cap000' + Main.tr_arr[4]);
        this.h6_cap0001.anchor.setTo(0.5);
        this.h6_cap0001.alpha = 1;
        this.t_group.add(this.h6_cap0001);

        this.t_group.scale.setTo(0.75);
        this.t_group.x = 60;
        this.t_group.y = 130;


        this.tom = game.add.sprite(430, 469.05, 'tom');
        this.tom.anchor.setTo(0.5);
        this.tom.scale.setTo(0.8);

        this.tom_txt = game.add.sprite(340, 220, 'tom_txt');
        this.tom_txt.anchor.setTo(0.5);
        this.tom_txt.scale.setTo(0.68);
        this.tom_txt.alpha = 0;


        // this.taylor_txt0007 =game.add.sprite(370,200,'taylor_txt0007');
        // this.taylor_txt0007.anchor.setTo(0.5);	
        // this.taylor_txt0007.scale.setTo(0.65);	
        // this.taylor_txt0007.alpha=0;	

        this.taylor_txt0008 = game.add.sprite(370, 200, 'taylor_txt0008');
        this.taylor_txt0008.anchor.setTo(0.5);
        this.taylor_txt0008.scale.setTo(0.65);
        this.taylor_txt0008.alpha = 0;

        this.new_table = game.add.sprite(260, 750, 'new_table');
        this.new_table.anchor.setTo(0.5);

        this.dec_gp = game.add.group();

        this.dec_table0001 = game.add.sprite(197.9, 540.45, 'dec_table000' + Main.dec_arr[0]);
        this.dec_table0001.anchor.setTo(0.5);
        this.dec_gp.add(this.dec_table0001);

        this.cake0001 = game.add.sprite(197.95, 410, 'cake000' + Main.dec_arr[1]);
        this.cake0001.anchor.setTo(0.5);
        this.dec_gp.add(this.cake0001);

        this.dec0001 = game.add.sprite(196, 280, 'dec000' + Main.dec_arr[2]);
        this.dec0001.anchor.setTo(0.5);
        this.dec_gp.add(this.dec0001);

        this.dec_gp.scale.setTo(0.6);
        this.dec_gp.y = 280;
        this.dec_gp.x = 130;

        this.plate1 = game.add.sprite(84, 570, 'plate_2');
        this.plate1.anchor.setTo(0.5);

        this.desert = game.add.sprite(81, 570, 'desert');
        this.desert.anchor.setTo(0.5);
        this.desert.scale.setTo(0.24);

        this.knife = game.add.sprite(110, 630, 'knife');
        this.knife.anchor.setTo(0.5);

        this.tisuue = game.add.sprite(360, 600, 'tisuue');
        this.tisuue.anchor.setTo(0.5);

        this.plate2 = game.add.sprite(410, 550, 'plate1_1');
        this.plate2.anchor.setTo(0.5);

        this.fruit = game.add.sprite(410, 543, 'fruit');
        this.fruit.anchor.setTo(0.5);
        this.fruit.scale.setTo(0.2);

        this.juice1 = game.add.sprite(150, 610, 'juice');
        this.juice1.anchor.setTo(0.5);

        this.juice = game.add.sprite(395, 598.9, 'juice');
        this.juice.anchor.setTo(0.5);

        if (Main.tr_arr[0] == 1) {
            this.h1_cap0001.visible = true;
            this.h2_cap0001.visible = false;
            this.h3_cap0001.visible = false;
            this.h4_cap0001.visible = false;
            this.h5_cap0001.visible = false;
            this.h6_cap0001.visible = false;

        }
        if (Main.tr_arr[0] == 2) {
            this.h1_cap0001.visible = false;
            this.h2_cap0001.visible = true;
            this.h3_cap0001.visible = false;
            this.h4_cap0001.visible = false;
            this.h5_cap0001.visible = false;
            this.h6_cap0001.visible = false;

        }
        if (Main.tr_arr[0] == 3) {
            this.h1_cap0001.visible = false;
            this.h2_cap0001.visible = false;
            this.h3_cap0001.visible = true;
            this.h4_cap0001.visible = false;
            this.h5_cap0001.visible = false;
            this.h6_cap0001.visible = false;

        }
        if (Main.tr_arr[0] == 4) {
            this.h1_cap0001.visible = false;
            this.h2_cap0001.visible = false;
            this.h3_cap0001.visible = false;
            this.h4_cap0001.visible = true;
            this.h5_cap0001.visible = false;
            this.h6_cap0001.visible = false;

        }
        if (Main.tr_arr[0] == 5) {
            this.h1_cap0001.visible = false;
            this.h2_cap0001.visible = false;
            this.h3_cap0001.visible = false;
            this.h4_cap0001.visible = false;
            this.h5_cap0001.visible = true;
            this.h6_cap0001.visible = false;

        }
        if (Main.tr_arr[0] == 6) {
            this.h1_cap0001.visible = false;
            this.h2_cap0001.visible = false;
            this.h3_cap0001.visible = false;
            this.h4_cap0001.visible = false;
            this.h5_cap0001.visible = false;
            this.h6_cap0001.visible = true;

        }
        if (Main.tr_arr[0] == 4 || Main.tr_arr[0] == 6) {
            this.earing.visible = false;
        } else {
            this.earing.visible = true;
        }


        this.title = game.add.sprite(250, 550, 'title');
        this.title.anchor.setTo(0.5);
        this.title.scale.setTo(0.85);




        this.morebtn = game.add.sprite(85, 730, 'btn04');
        this.morebtn.anchor.setTo(0.5);
        this.morebtn.inputEnabled = true;
        this.morebtn.input.useHandCursor = true;
        this.morebtn.events.onInputUp.add(this.moreLink, this);
        this.morebtn.events.onInputOver.add(this.btnOver, this);
        this.morebtn.events.onInputOut.add(this.btnOut, this);

        this.playbtn = game.add.sprite(430, 730, 'btn03');
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
        this.musicButton.scale.setTo(0.65);
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

    },
    moreLink: function() {

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

        this.i_bg = game.add.sprite(0, 0, 'i_bg');

        this.dad = game.add.sprite(110, 427.35, 'dad');
        this.dad.anchor.setTo(0.5);
        this.dad.scale.setTo(0.95);

        this.dad_txt0001 = game.add.sprite(270, 100, 'dad_txt0001');
        this.dad_txt0001.anchor.setTo(0.5);
        this.dad_txt0001.alpha = 0;

        this.dad_txt0002 = game.add.sprite(260, 100, 'dad_txt0002');
        this.dad_txt0002.anchor.setTo(0.5);
        this.dad_txt0002.scale.setTo(0.98);
        this.dad_txt0002.alpha = 0;

        this.taylor = game.add.sprite(260, 550, 'taylor');
        this.taylor.anchor.setTo(0.5);
        this.taylor.scale.setTo(0.36);

        this.mom = game.add.sprite(415, 417.15, 'mom');
        this.mom.anchor.setTo(0.5);
        this.mom.scale.setTo(1.04);

        this.mom_text0002 = game.add.sprite(260, 130, 'mom_text0002');
        this.mom_text0002.anchor.setTo(0.5);
        this.mom_text0002.scale.setTo(0.8);
        this.mom_text0002.alpha = 0;

        this.mom_text0003 = game.add.sprite(260, 130, 'mom_text0003');
        this.mom_text0003.anchor.setTo(0.5);
        this.mom_text0003.scale.setTo(0.8);
        this.mom_text0003.alpha = 0;

        this.taylor_txt0001 = game.add.sprite(400, 420, 'taylor_txt0001');
        this.taylor_txt0001.anchor.setTo(0.5);
        this.taylor_txt0001.scale.setTo(0.7);
        this.taylor_txt0001.alpha = 0;

        this.taylor_txt0002 = game.add.sprite(380, 420, 'taylor_txt0002');
        this.taylor_txt0002.anchor.setTo(0.5);
        this.taylor_txt0002.scale.setTo(0.7);
        this.taylor_txt0002.alpha = 0;

        this.taylor_txt0003 = game.add.sprite(350, 420, 'taylor_txt0003');
        this.taylor_txt0003.anchor.setTo(0.5);
        this.taylor_txt0003.scale.setTo(0.7);
        this.taylor_txt0003.alpha = 0;




        this.morebtn = game.add.sprite(85, 730, 'btn04');
        this.morebtn.anchor.setTo(0.5);
        this.morebtn.scale.setTo(1);
        this.morebtn.inputEnabled = true;
        this.morebtn.input.useHandCursor = true;
        this.morebtn.events.onInputUp.add(this.moreLink, this);
        this.morebtn.events.onInputOver.add(this.btnOver, this);
        this.morebtn.events.onInputOut.add(this.btnOut, this);

        this.playbtn = game.add.sprite(430, 730, 'btn05');
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
                game.add.tween(this.dad_txt0001).to({
                    alpha: 1
                }, 1000, Phaser.Easing.Quadratic.Out, true, 500);
                game.add.tween(this.dad_txt0001).to({
                    alpha: 0
                }, 1000, Phaser.Easing.Quadratic.Out, true, 3200).onComplete.add(function() {
                    game.add.tween(this.taylor_txt0001).to({
                        alpha: 1
                    }, 1000, Phaser.Easing.Quadratic.Out, true, 500).onComplete.add(function() {
                        game.add.tween(this.taylor_txt0001).to({
                            alpha: 0
                        }, 1000, Phaser.Easing.Quadratic.Out, true, 1800).onComplete.add(function() {
                            game.add.tween(this.mom_text0002).to({
                                alpha: 1
                            }, 1000, Phaser.Easing.Quadratic.Out, true, 600).onComplete.add(function() {
                                game.add.tween(this.mom_text0002).to({
                                    alpha: 0
                                }, 1000, Phaser.Easing.Quadratic.Out, true, 1800).onComplete.add(function() {
                                    game.add.tween(this.taylor_txt0002).to({
                                        alpha: 1
                                    }, 1000, Phaser.Easing.Quadratic.Out, true, 600).onComplete.add(function() {
                                        game.add.tween(this.taylor_txt0002).to({
                                            alpha: 0
                                        }, 1000, Phaser.Easing.Quadratic.Out, true, 1800).onComplete.add(function() {
                                            game.add.tween(this.mom_text0003).to({
                                                alpha: 1
                                            }, 1000, Phaser.Easing.Quadratic.Out, true, 600).onComplete.add(function() {
                                                game.add.tween(this.mom_text0003).to({
                                                    alpha: 0
                                                }, 1000, Phaser.Easing.Quadratic.Out, true, 1800).onComplete.add(function() {
                                                    game.add.tween(this.dad_txt0002).to({
                                                        alpha: 1
                                                    }, 1000, Phaser.Easing.Quadratic.Out, true, 600).onComplete.add(function() {
                                                        game.add.tween(this.dad_txt0002).to({
                                                            alpha: 0
                                                        }, 1000, Phaser.Easing.Quadratic.Out, true, 1800).onComplete.add(function() {
                                                            game.add.tween(this.taylor_txt0003).to({
                                                                alpha: 1
                                                            }, 1000, Phaser.Easing.Quadratic.Out, true, 600).onComplete.add(function() {
                                                                game.add.tween(this.taylor_txt0003).to({
                                                                    alpha: 0
                                                                }, 1000, Phaser.Easing.Quadratic.Out, true, 1800).onComplete.add(function() {
                                                                    game.add.tween(this.playbtn.scale).to({
                                                                        x: 1,
                                                                        y: 1
                                                                    }, 1000, Phaser.Easing.Quadratic.Out, true, 800);
                                                                }, this);
                                                            }, this);
                                                        }, this);
                                                    }, this);
                                                }, this);
                                            }, this);
                                        }, this);
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
        this.musicButton.scale.setTo(0.65);
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

    },
    moreLink: function() {

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
            MyShowAD('cooking');
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
        this.musicButton.scale.setTo(0.65);
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

    },
    moreLink: function() {

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
            MyShowAD('elsaScreen');
        });

    },
}

//iiiiiiiiiiiiiiiiiiiiiiiiii


Main.scene1 = function() {}

Main.scene1.prototype = {
    create: function() {

        this.g_bg1 = game.add.sprite(0, 0, 'g_bg1');

        this.i1 = game.add.sprite(0, 0, 'i1');
        this.i1.x = -700;

        this.i2 = game.add.sprite(0, 0, 'i2');
        this.i2.x = 700;

        this.t_group = game.add.group();

        this.i_group = game.add.group();
        this.i3 = game.add.sprite(0, 0, 'i3');
        this.i_group.add(this.i3);


        this.i_group.add(this.t_group);
        this.t_backhair0001 = game.add.sprite(274.6, 425.45, 't_backhair000' + Main.tr_arr[0]);
        this.t_backhair0001.anchor.setTo(0.5);
        this.t_group.add(this.t_backhair0001);

        this.t_body = game.add.sprite(272.5, 503, 't_body');
        this.t_body.anchor.setTo(0.5);
        this.t_group.add(this.t_body);

        this.t_head = game.add.sprite(263.95, 236.8, 't_head');
        this.t_head.anchor.setTo(0.5);
        this.t_group.add(this.t_head);

        this.t_shoes0001 = game.add.sprite(274.1, 425.95, 't_shoes000' + Main.tr_arr[2]);
        this.t_shoes0001.anchor.setTo(0.5);
        this.t_group.add(this.t_shoes0001);

        this.t_dress0001 = game.add.sprite(273.7, 425.95, 't_dress000' + Main.tr_arr[1]);
        this.t_dress0001.anchor.setTo(0.5);
        this.t_group.add(this.t_dress0001);

        this.t_chain0001 = game.add.sprite(275.15, 425.8, 't_chain000' + Main.tr_arr[3]);
        this.t_chain0001.anchor.setTo(0.5);
        this.t_chain0001.alpha = 1;
        this.t_group.add(this.t_chain0001);

        this.t_fronthair0001 = game.add.sprite(271.95, 425.45, 't_fronthair000' + Main.tr_arr[0]);
        this.t_fronthair0001.anchor.setTo(0.5);
        this.t_group.add(this.t_fronthair0001);

        this.earing = game.add.sprite(274.1, 425.95, 'earing');
        this.earing.anchor.setTo(0.5);
        this.earing.alpha = 1;
        this.t_group.add(this.earing);

        this.earing11 = game.add.sprite(158, 425.95, 'earing');
        this.earing11.anchor.setTo(0.5);
        this.earing11.alpha = 1;
        this.t_group.add(this.earing11);

        this.h1_cap0001 = game.add.sprite(271.95, 425.45, 'h1_cap000' + Main.tr_arr[4]);
        this.h1_cap0001.anchor.setTo(0.5);
        this.h1_cap0001.alpha = 1;
        this.t_group.add(this.h1_cap0001);

        this.h2_cap0001 = game.add.sprite(271.95, 425.4, 'h2_cap000' + Main.tr_arr[4]);
        this.h2_cap0001.anchor.setTo(0.5);
        this.h2_cap0001.alpha = 1;
        this.t_group.add(this.h2_cap0001);

        this.h3_cap0001 = game.add.sprite(271.8, 425.6, 'h3_cap000' + Main.tr_arr[4]);
        this.h3_cap0001.anchor.setTo(0.5);
        this.h3_cap0001.alpha = 1;
        this.t_group.add(this.h3_cap0001);

        this.h4_cap0001 = game.add.sprite(271.95, 425.65, 'h4_cap000' + Main.tr_arr[4]);
        this.h4_cap0001.anchor.setTo(0.5);
        this.h4_cap0001.alpha = 1;
        this.t_group.add(this.h4_cap0001);

        this.h5_cap0001 = game.add.sprite(271.9, 425.6, 'h5_cap000' + Main.tr_arr[4]);
        this.h5_cap0001.anchor.setTo(0.5);
        this.h5_cap0001.alpha = 1;
        this.t_group.add(this.h5_cap0001);

        this.h6_cap0001 = game.add.sprite(272, 425.65, 'h6_cap000' + Main.tr_arr[4]);
        this.h6_cap0001.anchor.setTo(0.5);
        this.h6_cap0001.alpha = 1;
        this.t_group.add(this.h6_cap0001);

        this.t_group.scale.setTo(0.4);
        this.t_group.x = 210;
        this.t_group.y = 510;

        this.t_group.visible = true;
        this.i_group.x = -700;


        this.jessica_txt0001 = game.add.sprite(280, 525, 'jessica_txt0001');
        this.jessica_txt0001.anchor.setTo(0.5);
        this.jessica_txt0001.scale.setTo(0.75);
        this.jessica_txt0001.alpha = 0;

        this.taylor_txt0007 = game.add.sprite(380, 520, 'taylor_txt0007');
        this.taylor_txt0007.anchor.setTo(0.5);
        this.taylor_txt0007.scale.setTo(0.6);
        this.taylor_txt0007.alpha = 0;

        if (Main.tr_arr[0] == 1) {
            this.h1_cap0001.visible = true;
            this.h2_cap0001.visible = false;
            this.h3_cap0001.visible = false;
            this.h4_cap0001.visible = false;
            this.h5_cap0001.visible = false;
            this.h6_cap0001.visible = false;

        }
        if (Main.tr_arr[0] == 2) {
            this.h1_cap0001.visible = false;
            this.h2_cap0001.visible = true;
            this.h3_cap0001.visible = false;
            this.h4_cap0001.visible = false;
            this.h5_cap0001.visible = false;
            this.h6_cap0001.visible = false;

        }
        if (Main.tr_arr[0] == 3) {
            this.h1_cap0001.visible = false;
            this.h2_cap0001.visible = false;
            this.h3_cap0001.visible = true;
            this.h4_cap0001.visible = false;
            this.h5_cap0001.visible = false;
            this.h6_cap0001.visible = false;

        }
        if (Main.tr_arr[0] == 4) {
            this.h1_cap0001.visible = false;
            this.h2_cap0001.visible = false;
            this.h3_cap0001.visible = false;
            this.h4_cap0001.visible = true;
            this.h5_cap0001.visible = false;
            this.h6_cap0001.visible = false;

        }
        if (Main.tr_arr[0] == 5) {
            this.h1_cap0001.visible = false;
            this.h2_cap0001.visible = false;
            this.h3_cap0001.visible = false;
            this.h4_cap0001.visible = false;
            this.h5_cap0001.visible = true;
            this.h6_cap0001.visible = false;

        }
        if (Main.tr_arr[0] == 6) {
            this.h1_cap0001.visible = false;
            this.h2_cap0001.visible = false;
            this.h3_cap0001.visible = false;
            this.h4_cap0001.visible = false;
            this.h5_cap0001.visible = false;
            this.h6_cap0001.visible = true;

        }
        if (Main.tr_arr[0] == 4 || Main.tr_arr[0] == 6) {
            this.earing.visible = false;
        } else {
            this.earing.visible = true;
        }






        this.morebtn = game.add.sprite(85, 730, 'btn04');
        this.morebtn.anchor.setTo(0.5);
        this.morebtn.scale.setTo(0.8);
        this.morebtn.inputEnabled = true;
        this.morebtn.input.useHandCursor = true;
        this.morebtn.events.onInputUp.add(this.moreLink, this);
        this.morebtn.events.onInputOver.add(this.btnOver, this);
        this.morebtn.events.onInputOut.add(this.btnOut, this);

        this.playbtn = game.add.sprite(430, 730, 'btn02');
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
                game.add.tween(this.i1).to({
                    x: 0
                }, 1000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                    game.add.tween(this.i2).to({
                        x: 0
                    }, 1000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                        game.add.tween(this.i_group).to({
                            x: 0
                        }, 1000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                            game.add.tween(this.jessica_txt0001).to({
                                alpha: 1
                            }, 1000, Phaser.Easing.Quadratic.Out, true, 800).onComplete.add(function() {
                                game.add.tween(this.jessica_txt0001).to({
                                    alpha: 0
                                }, 1000, Phaser.Easing.Quadratic.Out, true, 2400).onComplete.add(function() {
                                    game.add.tween(this.taylor_txt0007).to({
                                        alpha: 1
                                    }, 1000, Phaser.Easing.Quadratic.Out, true, 800).onComplete.add(function() {
                                        game.add.tween(this.taylor_txt0007).to({
                                            alpha: 0
                                        }, 1000, Phaser.Easing.Quadratic.Out, true, 1600).onComplete.add(function() {
                                            game.add.tween(this.playbtn.scale).to({
                                                x: 1,
                                                y: 1
                                            }, 1000, Phaser.Easing.Quadratic.Out, true, 800);
                                        }, this);
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
        this.musicButton.scale.setTo(0.65);
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

    },
    moreLink: function() {

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

Main.intro1 = function() {}

Main.intro1.prototype = {
    create: function() {

        this.introbg = game.add.sprite(0, 0, 'introbg');

        // this.gbox1 = game.add.sprite(477.1,257.15,'gbox1');
        // this.gbox1.anchor.setTo(0.5);

        // this.loon = game.add.sprite(440,320,'loon');
        // this.loon.anchor.setTo(0.5);
        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // this.taylor = game.add.sprite(100,500,'taylor');
        // this.taylor.anchor.setTo(0.5);

        this.i_tygroup = game.add.group();
        this.i_tygroup.scale.setTo(0.55);
        this.i_tygroup.x = 60;
        this.i_tygroup.y = 270;

        this.t_22_body = game.add.sprite(100, 500, 't_22_body');
        this.t_22_body.anchor.setTo(0.5);
        this.i_tygroup.add(this.t_22_body);

        this.t_22_headamtn = game.add.sprite(90, 213, 't_22_headamtn');
        this.t_22_headamtn.anchor.setTo(0.5);
        this.t_22_headamtn.animations.add('t_22_headamtn', [0, 0, 0, 0, 0, 0, 1]);
        this.t_22_headamtn.animations.play('t_22_headamtn', 4, true);
        this.i_tygroup.add(this.t_22_headamtn);



        ///////////////////////////////////////////////////////////////////////////////////////////////////////////

        // this.tmom = game.add.sprite(370,400,'tmom');
        // this.tmom.anchor.setTo(0.5);

        this.ladygroup = game.add.group();
        this.ladygroup.scale.setTo(0.9);
        this.ladygroup.y = 100;


        this.tmom_body = game.add.sprite(370, 400, 'tmom_body');
        this.tmom_body.anchor.setTo(0.5);
        this.ladygroup.add(this.tmom_body);

        this.tmom_head = game.add.sprite(363, 165, 'tmom_head');
        this.tmom_head.anchor.setTo(0.5);
        this.ladygroup.add(this.tmom_head);

        this.lady_eyeblink = game.add.sprite(363.2, 165, 'lady_eyeblink');
        this.lady_eyeblink.anchor.setTo(0.5);
        this.lady_eyeblink.scale.setTo(0.65);
        this.lady_eyeblink.animations.add('lady_eyeblink');
        this.lady_eyeblink.animations.play('lady_eyeblink', 10, false).onComplete.add(function() {}, this);
        game.time.events.loop(2000, this.ladyupdateEyeBlink, this);
        this.ladygroup.add(this.lady_eyeblink);

        this.tmom_kannadi = game.add.sprite(362.5, 168, 'tmom_kannadi');
        this.tmom_kannadi.anchor.setTo(0.5);
        this.ladygroup.add(this.tmom_kannadi);

        this.tmom_hair = game.add.sprite(363, 192, 'tmom_hair');
        this.tmom_hair.anchor.setTo(0.5);
        this.ladygroup.add(this.tmom_hair);


        //////////////////////////////////////////////////////////////////////////////////////////////////////////


        // this.crippon1 = game.add.sprite(440,380,'crippon1');
        // this.crippon1.anchor.setTo(0.5);

        // this.crippon2 = game.add.sprite(450,390,'crippon2');
        // this.crippon2.anchor.setTo(0.5);

        // this.crippon3 = game.add.sprite(460,400,'crippon3');
        // this.crippon3.anchor.setTo(0.5);

        // this.crippon4 = game.add.sprite(480,405,'crippon4');
        // this.crippon4.anchor.setTo(0.5);

        this.tylorpop1 = game.add.sprite(225, 310, 'tylorpop1');
        this.tylorpop1.anchor.setTo(0.5);
        this.tylorpop1.scale.setTo(0);

        this.tmompop1 = game.add.sprite(203, 180, 'tmompop1');
        this.tmompop1.anchor.setTo(0.5);
        this.tmompop1.scale.setTo(0);


        this.morebtn = game.add.sprite(85, 730, 'btn4');
        this.morebtn.anchor.setTo(0.5);
        // this.morebtn.scale.setTo(0);
        this.morebtn.inputEnabled = true;
        this.morebtn.input.useHandCursor = true;
        this.morebtn.events.onInputUp.add(this.moreLink, this);
        this.morebtn.events.onInputOver.add(this.btnOver, this);
        this.morebtn.events.onInputOut.add(this.btnOut, this);

        this.playbtn = game.add.sprite(430, 730, 'btn5');
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

                game.add.tween(this.tylorpop1.scale).to({
                    x: 0.7,
                    y: 0.7
                }, 700, Phaser.Easing.Quadratic.Out, true);
                game.add.tween(this.tylorpop1).to({
                    alpha: 0
                }, 1000, Phaser.Easing.Quadratic.Out, true, 3000).onComplete.add(function() {
                    game.add.tween(this.tmompop1.scale).to({
                        x: 0.8,
                        y: 0.8
                    }, 700, Phaser.Easing.Quadratic.Out, true);
                    game.add.tween(this.tmompop1).to({
                        alpha: 0
                    }, 1000, Phaser.Easing.Quadratic.Out, true, 3000).onComplete.add(function() {
                        game.add.tween(this.playbtn.scale).to({
                            x: 0.8,
                            y: 0.8
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
    ladyupdateEyeBlink: function() {
        this.lady_eyeblink.play('lady_eyeblink', 24, false);
    },

    openLink: function() {
        CreateLinksInGame("Baby-Taylor-Christmas-Day", "game", "logo");
    },
    moreLink: function() {
        CreateLinksInGame("Baby-Taylor-Christmas-Day", "game", "morebutton");
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
            game.state.start('findobject1');
        });

    },
}

//nnnnnnnnnnnnnnnnnnnn

Main.new_dressup = function() {}

Main.new_dressup.prototype = {
    create: function() {

        this.d_bg = game.add.sprite(0, 0, 'd_bg');

        this.t_group = game.add.group();

        this.t_backhair0001 = game.add.sprite(274.6, 425.45, 't_backhair000' + Main.tr_arr[0]);
        this.t_backhair0001.anchor.setTo(0.5);
        this.t_group.add(this.t_backhair0001);

        this.t_body = game.add.sprite(272.5, 503, 't_body');
        this.t_body.anchor.setTo(0.5);
        this.t_group.add(this.t_body);

        this.t_head = game.add.sprite(263.95, 236.8, 't_head');
        this.t_head.anchor.setTo(0.5);
        this.t_group.add(this.t_head);

        this.t_shoes0001 = game.add.sprite(274.1, 425.95, 't_shoes000' + Main.tr_arr[2]);
        this.t_shoes0001.anchor.setTo(0.5);
        this.t_group.add(this.t_shoes0001);

        this.t_dress0001 = game.add.sprite(273.7, 425.95, 't_dress000' + Main.tr_arr[1]);
        this.t_dress0001.anchor.setTo(0.5);
        this.t_group.add(this.t_dress0001);

        this.t_chain0001 = game.add.sprite(275.15, 425.8, 't_chain000' + Main.tr_arr[3]);
        this.t_chain0001.anchor.setTo(0.5);
        this.t_chain0001.alpha = 1;
        this.t_group.add(this.t_chain0001);

        this.t_fronthair0001 = game.add.sprite(271.95, 425.45, 't_fronthair000' + Main.tr_arr[0]);
        this.t_fronthair0001.anchor.setTo(0.5);
        this.t_group.add(this.t_fronthair0001);

        this.earing = game.add.sprite(274.1, 425.95, 'earing');
        this.earing.anchor.setTo(0.5);
        this.earing.alpha = 1;
        this.t_group.add(this.earing);

        this.earing11 = game.add.sprite(158, 425.95, 'earing');
        this.earing11.anchor.setTo(0.5);
        this.earing11.alpha = 1;
        this.t_group.add(this.earing11);

        this.h1_cap0001 = game.add.sprite(271.95, 425.45, 'h1_cap000' + Main.tr_arr[4]);
        this.h1_cap0001.anchor.setTo(0.5);
        this.h1_cap0001.alpha = 1;
        this.t_group.add(this.h1_cap0001);

        this.h2_cap0001 = game.add.sprite(271.95, 425.4, 'h2_cap000' + Main.tr_arr[4]);
        this.h2_cap0001.anchor.setTo(0.5);
        this.h2_cap0001.alpha = 1;
        this.t_group.add(this.h2_cap0001);

        this.h3_cap0001 = game.add.sprite(271.8, 425.6, 'h3_cap000' + Main.tr_arr[4]);
        this.h3_cap0001.anchor.setTo(0.5);
        this.h3_cap0001.alpha = 1;
        this.t_group.add(this.h3_cap0001);

        this.h4_cap0001 = game.add.sprite(271.95, 425.65, 'h4_cap000' + Main.tr_arr[4]);
        this.h4_cap0001.anchor.setTo(0.5);
        this.h4_cap0001.alpha = 1;
        this.t_group.add(this.h4_cap0001);

        this.h5_cap0001 = game.add.sprite(271.9, 425.6, 'h5_cap000' + Main.tr_arr[4]);
        this.h5_cap0001.anchor.setTo(0.5);
        this.h5_cap0001.alpha = 1;
        this.t_group.add(this.h5_cap0001);

        this.h6_cap0001 = game.add.sprite(272, 425.65, 'h6_cap000' + Main.tr_arr[4]);
        this.h6_cap0001.anchor.setTo(0.5);
        this.h6_cap0001.alpha = 1;
        this.t_group.add(this.h6_cap0001);


        this.t_group.scale.setTo(0.85);
        this.t_group.x = 20;
        this.t_group.y = 80;

        this.taylor_txt0006 = game.add.sprite(380, 200, 'taylor_txt0006');
        this.taylor_txt0006.anchor.setTo(0.5);
        this.taylor_txt0006.scale.setTo(0.65);
        this.taylor_txt0006.alpha = 0;

        if (Main.tr_arr[0] == 1) {
            this.h1_cap0001.visible = true;
            this.h2_cap0001.visible = false;
            this.h3_cap0001.visible = false;
            this.h4_cap0001.visible = false;
            this.h5_cap0001.visible = false;
            this.h6_cap0001.visible = false;

        }
        if (Main.tr_arr[0] == 2) {
            this.h1_cap0001.visible = false;
            this.h2_cap0001.visible = true;
            this.h3_cap0001.visible = false;
            this.h4_cap0001.visible = false;
            this.h5_cap0001.visible = false;
            this.h6_cap0001.visible = false;

        }
        if (Main.tr_arr[0] == 3) {
            this.h1_cap0001.visible = false;
            this.h2_cap0001.visible = false;
            this.h3_cap0001.visible = true;
            this.h4_cap0001.visible = false;
            this.h5_cap0001.visible = false;
            this.h6_cap0001.visible = false;

        }
        if (Main.tr_arr[0] == 4) {
            this.h1_cap0001.visible = false;
            this.h2_cap0001.visible = false;
            this.h3_cap0001.visible = false;
            this.h4_cap0001.visible = true;
            this.h5_cap0001.visible = false;
            this.h6_cap0001.visible = false;

        }
        if (Main.tr_arr[0] == 5) {
            this.h1_cap0001.visible = false;
            this.h2_cap0001.visible = false;
            this.h3_cap0001.visible = false;
            this.h4_cap0001.visible = false;
            this.h5_cap0001.visible = true;
            this.h6_cap0001.visible = false;

        }
        if (Main.tr_arr[0] == 6) {
            this.h1_cap0001.visible = false;
            this.h2_cap0001.visible = false;
            this.h3_cap0001.visible = false;
            this.h4_cap0001.visible = false;
            this.h5_cap0001.visible = false;
            this.h6_cap0001.visible = true;

        }
        if (Main.tr_arr[0] == 4 || Main.tr_arr[0] == 6) {
            this.earing.visible = false;
        } else {
            this.earing.visible = true;
        }


        this.morebtn = game.add.sprite(85, 730, 'btn04');
        this.morebtn.anchor.setTo(0.5);
        this.morebtn.scale.setTo(0.8);
        this.morebtn.inputEnabled = true;
        this.morebtn.input.useHandCursor = true;
        this.morebtn.events.onInputUp.add(this.moreLink, this);
        this.morebtn.events.onInputOver.add(this.btnOver, this);
        this.morebtn.events.onInputOut.add(this.btnOut, this);

        this.playbtn = game.add.sprite(430, 730, 'btn02');
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
                game.add.tween(this.taylor_txt0006).to({
                    alpha: 1
                }, 1000, Phaser.Easing.Quadratic.Out, true, 800).onComplete.add(function() {
                    game.add.tween(this.taylor_txt0006).to({
                        alpha: 0
                    }, 1000, Phaser.Easing.Quadratic.Out, true, 1800).onComplete.add(function() {
                        game.add.tween(this.playbtn.scale).to({
                            x: 1,
                            y: 1
                        }, 1000, Phaser.Easing.Quadratic.Out, true, 800);
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
        this.musicButton.scale.setTo(0.65);
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

    },
    moreLink: function() {

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
            MyShowAD('scene1');
        });

    },
}

//////111111111111111111111

Main.decoration = function() {}

Main.decoration.prototype = {
    create: function() {

        this.c_bg = game.add.sprite(0, 0, 'c_bg');

        this.c_table = game.add.sprite(252, 691.45, 'c_table');
        this.c_table.anchor.setTo(0.5);

        this.dec_gp = game.add.group();

        this.d22 = game.add.sprite(197.9, 540.45, 'dec_table0003');
        this.d22.anchor.setTo(0.5);
        this.dec_gp.add(this.d22);

        this.dec_table0001 = game.add.sprite(197.9, 540.45, 'dec_table000' + Main.dec_arr[0]);
        this.dec_table0001.anchor.setTo(0.5);
        this.dec_table0001.visible = false;
        this.dec_gp.add(this.dec_table0001);

        this.c11 = game.add.sprite(197.95, 430, 'c11');
        this.c11.anchor.setTo(0.5);
        this.dec_gp.add(this.c11);

        this.cake0001 = game.add.sprite(197.95, 410, 'cake000' + Main.dec_arr[1]);
        this.cake0001.anchor.setTo(0.5);
        this.cake0001.visible = false;
        this.dec_gp.add(this.cake0001);

        this.dec0001 = game.add.sprite(196, 280, 'dec000' + Main.dec_arr[2]);
        this.dec0001.anchor.setTo(0.5);
        this.dec0001.visible = false;
        this.dec_gp.add(this.dec0001);

        this.dec_gp.scale.setTo(0.9);
        this.dec_gp.y = 60;
        this.dec_gp.x = 60;



        this.p1_group = game.add.group();

        this.side_panel = game.add.sprite(450, 345.9, 'side_panel');
        this.side_panel.anchor.setTo(0.5);
        this.p1_group.add(this.side_panel);

        this.t1 = game.add.sprite(438.25, 150, 'dec_table0006');
        this.t1.anchor.setTo(0.5);
        this.t1.scale.setTo(0.3);
        this.t1.inputEnabled = true;
        this.t1.input.useHandCursor = true;
        this.t1.events.onInputDown.add(function() {
            this.d22.visible = false;
            this.dec_table0001.visible = true;
            this.dec_table0001.loadTexture('dec_table0006');
            Main.dec_arr[0] = 6;
            this.ch1_i[0] = 1;

            if (this.ch1_i.indexOf(0) < 0) {
                game.add.tween(this.playbtn.scale).to({
                    x: 0.8,
                    y: 0.8
                }, 800, Phaser.Easing.Quadratic.Out, true);

            }


            effectssd = game.add.sprite(game.world.width / 2.5, game.world.height / 1.5, 'effectssd');
            effectssd.anchor.setTo(0.5);
            effectssd.animations.add('effectssd');
            effectssd.animations.play('effectssd', 20, false).onComplete.add(function(evt) {
                evt.destroy();
            }, this);

        }, this);
        this.p1_group.add(this.t1);

        this.t2 = game.add.sprite(438.25, 210, 'dec_table0002');
        this.t2.anchor.setTo(0.5);
        this.t2.scale.setTo(0.3);
        this.t2.inputEnabled = true;
        this.t2.input.useHandCursor = true;
        this.t2.events.onInputDown.add(function() {
            this.d22.visible = false;
            this.dec_table0001.visible = true;
            this.dec_table0001.loadTexture('dec_table0002');
            Main.dec_arr[0] = 2;
            this.ch1_i[0] = 1;

            if (this.ch1_i.indexOf(0) < 0) {
                game.add.tween(this.playbtn.scale).to({
                    x: 0.8,
                    y: 0.8
                }, 800, Phaser.Easing.Quadratic.Out, true);

            }


            effectssd = game.add.sprite(game.world.width / 2.5, game.world.height / 1.5, 'effectssd');
            effectssd.anchor.setTo(0.5);
            effectssd.animations.add('effectssd');
            effectssd.animations.play('effectssd', 20, false).onComplete.add(function(evt) {
                evt.destroy();
            }, this);


        }, this);
        this.p1_group.add(this.t2);

        this.t3 = game.add.sprite(438.25, 290, 'dec_table0003');
        this.t3.anchor.setTo(0.5);
        this.t3.scale.setTo(0.3);
        this.t3.inputEnabled = true;
        this.t3.input.useHandCursor = true;
        this.t3.events.onInputDown.add(function() {
            this.d22.visible = false;
            this.dec_table0001.visible = true;
            this.dec_table0001.loadTexture('dec_table0003');
            Main.dec_arr[0] = 3;
            this.ch1_i[0] = 1;

            if (this.ch1_i.indexOf(0) < 0) {
                game.add.tween(this.playbtn.scale).to({
                    x: 0.8,
                    y: 0.8
                }, 800, Phaser.Easing.Quadratic.Out, true);

            }


            effectssd = game.add.sprite(game.world.width / 2.5, game.world.height / 1.5, 'effectssd');
            effectssd.anchor.setTo(0.5);
            effectssd.animations.add('effectssd');
            effectssd.animations.play('effectssd', 20, false).onComplete.add(function(evt) {
                evt.destroy();
            }, this);
        }, this);
        this.p1_group.add(this.t3);

        this.t4 = game.add.sprite(438.25, 380, 'dec_table0004');
        this.t4.anchor.setTo(0.5);
        this.t4.scale.setTo(0.3);
        this.t4.inputEnabled = true;
        this.t4.input.useHandCursor = true;
        this.t4.events.onInputDown.add(function() {
            this.d22.visible = false;
            this.dec_table0001.visible = true;
            this.dec_table0001.loadTexture('dec_table0004');
            Main.dec_arr[0] = 4;
            this.ch1_i[0] = 1;

            if (this.ch1_i.indexOf(0) < 0) {
                game.add.tween(this.playbtn.scale).to({
                    x: 0.8,
                    y: 0.8
                }, 800, Phaser.Easing.Quadratic.Out, true);

            }


            effectssd = game.add.sprite(game.world.width / 2.5, game.world.height / 1.5, 'effectssd');
            effectssd.anchor.setTo(0.5);
            effectssd.animations.add('effectssd');
            effectssd.animations.play('effectssd', 20, false).onComplete.add(function(evt) {
                evt.destroy();
            }, this);

        }, this);
        this.p1_group.add(this.t4);

        this.t5 = game.add.sprite(438.25, 460, 'dec_table0005');
        this.t5.anchor.setTo(0.5);
        this.t5.scale.setTo(0.3);
        this.t5.inputEnabled = true;
        this.t5.input.useHandCursor = true;
        this.t5.events.onInputDown.add(function() {
            this.d22.visible = false;
            this.dec_table0001.visible = true;
            this.dec_table0001.loadTexture('dec_table0005');
            Main.dec_arr[0] = 5;
            this.ch1_i[0] = 1;

            if (this.ch1_i.indexOf(0) < 0) {
                game.add.tween(this.playbtn.scale).to({
                    x: 0.8,
                    y: 0.8
                }, 800, Phaser.Easing.Quadratic.Out, true);

            }


            effectssd = game.add.sprite(game.world.width / 2.5, game.world.height / 1.5, 'effectssd');
            effectssd.anchor.setTo(0.5);
            effectssd.animations.add('effectssd');
            effectssd.animations.play('effectssd', 20, false).onComplete.add(function(evt) {
                evt.destroy();
            }, this);


        }, this);
        this.p1_group.add(this.t5);

        this.t1 = game.add.sprite(438.25, 540, 'dec_table0001');
        this.t1.anchor.setTo(0.5);
        this.t1.scale.setTo(0.3);
        this.t1.inputEnabled = true;
        this.t1.input.useHandCursor = true;
        this.t1.events.onInputDown.add(function() {
            this.d22.visible = false;
            this.dec_table0001.visible = true;
            this.dec_table0001.loadTexture('dec_table0001');
            Main.dec_arr[0] = 1;
            this.ch1_i[0] = 1;

            if (this.ch1_i.indexOf(0) < 0) {
                game.add.tween(this.playbtn.scale).to({
                    x: 0.8,
                    y: 0.8
                }, 800, Phaser.Easing.Quadratic.Out, true);

            }


            effectssd = game.add.sprite(game.world.width / 2.5, game.world.height / 1.5, 'effectssd');
            effectssd.anchor.setTo(0.5);
            effectssd.animations.add('effectssd');
            effectssd.animations.play('effectssd', 20, false).onComplete.add(function(evt) {
                evt.destroy();
            }, this);

        }, this);
        this.p1_group.add(this.t1);


        this.p1_group.visible = false;
        this.p1_group.scale.y = 1.10;
        this.p1_group.y = -20;
        this.p1_group.scale.setTo(0.9);
        this.p1_group.y = 30;
        this.p1_group.x = 60;


        this.p2_group = game.add.group();

        this.side_panel1 = game.add.sprite(450, 345.9, 'side_panel');
        this.side_panel1.anchor.setTo(0.5);
        this.p2_group.add(this.side_panel1);

        this.c1 = game.add.sprite(438.25, 150, 'cake0006');
        this.c1.anchor.setTo(0.5);
        this.c1.scale.setTo(0.3);
        this.c1.inputEnabled = true;
        this.c1.input.useHandCursor = true;
        this.c1.events.onInputDown.add(function() {
            this.c11.visible = false;
            this.cake0001.visible = true;
            this.cake0001.loadTexture('cake0006');
            Main.dec_arr[1] = 6;
            this.ch1_i[1] = 1;

            if (this.ch1_i.indexOf(0) < 0) {
                game.add.tween(this.playbtn.scale).to({
                    x: 0.8,
                    y: 0.8
                }, 800, Phaser.Easing.Quadratic.Out, true);

            }


            effectssd = game.add.sprite(game.world.width / 2.5, game.world.height / 1.8, 'effectssd');
            effectssd.anchor.setTo(0.5);
            effectssd.animations.add('effectssd');
            effectssd.animations.play('effectssd', 20, false).onComplete.add(function(evt) {
                evt.destroy();
            }, this);

        }, this);
        this.p2_group.add(this.c1);

        this.c2 = game.add.sprite(438.25, 220, 'cake0002');
        this.c2.anchor.setTo(0.5);
        this.c2.scale.setTo(0.3);
        this.c2.inputEnabled = true;
        this.c2.input.useHandCursor = true;
        this.c2.events.onInputDown.add(function() {
            this.c11.visible = false;
            this.cake0001.visible = true;
            this.cake0001.loadTexture('cake0002');
            Main.dec_arr[1] = 2;
            this.ch1_i[1] = 1;

            if (this.ch1_i.indexOf(0) < 0) {
                game.add.tween(this.playbtn.scale).to({
                    x: 0.8,
                    y: 0.8
                }, 800, Phaser.Easing.Quadratic.Out, true);

            }


            effectssd = game.add.sprite(game.world.width / 2.5, game.world.height / 1.8, 'effectssd');
            effectssd.anchor.setTo(0.5);
            effectssd.animations.add('effectssd');
            effectssd.animations.play('effectssd', 20, false).onComplete.add(function(evt) {
                evt.destroy();
            }, this);

        }, this);
        this.p2_group.add(this.c2);

        this.c3 = game.add.sprite(438.25, 300, 'cake0003');
        this.c3.anchor.setTo(0.5);
        this.c3.scale.setTo(0.3);
        this.c3.inputEnabled = true;
        this.c3.input.useHandCursor = true;
        this.c3.events.onInputDown.add(function() {
            this.c11.visible = false;
            this.cake0001.visible = true;
            this.cake0001.loadTexture('cake0003');
            Main.dec_arr[1] = 6;
            this.ch1_i[1] = 1;

            if (this.ch1_i.indexOf(0) < 0) {
                game.add.tween(this.playbtn.scale).to({
                    x: 0.8,
                    y: 0.8
                }, 800, Phaser.Easing.Quadratic.Out, true);

            }


            effectssd = game.add.sprite(game.world.width / 2.5, game.world.height / 1.8, 'effectssd');
            effectssd.anchor.setTo(0.5);
            effectssd.animations.add('effectssd');
            effectssd.animations.play('effectssd', 20, false).onComplete.add(function(evt) {
                evt.destroy();
            }, this);

        }, this);
        this.p2_group.add(this.c3);

        this.c4 = game.add.sprite(438.25, 380, 'cake0004');
        this.c4.anchor.setTo(0.5);
        this.c4.scale.setTo(0.3);
        this.c4.inputEnabled = true;
        this.c4.input.useHandCursor = true;
        this.c4.events.onInputDown.add(function() {
            this.c11.visible = false;
            this.cake0001.visible = true;
            this.cake0001.loadTexture('cake0004');
            Main.dec_arr[1] = 4;
            this.ch1_i[1] = 1;

            if (this.ch1_i.indexOf(0) < 0) {
                game.add.tween(this.playbtn.scale).to({
                    x: 0.8,
                    y: 0.8
                }, 800, Phaser.Easing.Quadratic.Out, true);

            }


            effectssd = game.add.sprite(game.world.width / 2.5, game.world.height / 1.8, 'effectssd');
            effectssd.anchor.setTo(0.5);
            effectssd.animations.add('effectssd');
            effectssd.animations.play('effectssd', 20, false).onComplete.add(function(evt) {
                evt.destroy();
            }, this);

        }, this);
        this.p2_group.add(this.c4);

        this.c5 = game.add.sprite(438.25, 460, 'cake0005');
        this.c5.anchor.setTo(0.5);
        this.c5.scale.setTo(0.3);
        this.c5.inputEnabled = true;
        this.c5.input.useHandCursor = true;
        this.c5.events.onInputDown.add(function() {
            this.c11.visible = false;
            this.cake0001.visible = true;
            this.cake0001.loadTexture('cake0005');
            Main.dec_arr[1] = 5;
            this.ch1_i[1] = 1;

            if (this.ch1_i.indexOf(0) < 0) {
                game.add.tween(this.playbtn.scale).to({
                    x: 0.8,
                    y: 0.8
                }, 800, Phaser.Easing.Quadratic.Out, true);

            }


            effectssd = game.add.sprite(game.world.width / 2.5, game.world.height / 1.8, 'effectssd');
            effectssd.anchor.setTo(0.5);
            effectssd.animations.add('effectssd');
            effectssd.animations.play('effectssd', 20, false).onComplete.add(function(evt) {
                evt.destroy();
            }, this);

        }, this);
        this.p2_group.add(this.c5);

        this.c1 = game.add.sprite(438.25, 540, 'cake0001');
        this.c1.anchor.setTo(0.5);
        this.c1.scale.setTo(0.3);
        this.c1.inputEnabled = true;
        this.c1.input.useHandCursor = true;
        this.c1.events.onInputDown.add(function() {
            this.c11.visible = false;
            this.cake0001.visible = true;
            this.cake0001.loadTexture('cake0001');
            Main.dec_arr[1] = 1;
            this.ch1_i[1] = 1;

            if (this.ch1_i.indexOf(0) < 0) {
                game.add.tween(this.playbtn.scale).to({
                    x: 0.8,
                    y: 0.8
                }, 800, Phaser.Easing.Quadratic.Out, true);

            }


            effectssd = game.add.sprite(game.world.width / 2.5, game.world.height / 1.8, 'effectssd');
            effectssd.anchor.setTo(0.5);
            effectssd.animations.add('effectssd');
            effectssd.animations.play('effectssd', 20, false).onComplete.add(function(evt) {
                evt.destroy();
            }, this);

        }, this);
        this.p2_group.add(this.c1);

        this.p2_group.visible = false;
        this.p2_group.scale.y = 1.10;
        this.p2_group.y = -20;
        this.p2_group.scale.setTo(0.9);
        this.p2_group.y = 30;
        this.p2_group.x = 60;


        this.p3_group = game.add.group();

        this.side_panel1 = game.add.sprite(450, 345.9, 'side_panel');
        this.side_panel1.anchor.setTo(0.5);
        this.p3_group.add(this.side_panel1);

        this.d1 = game.add.sprite(438.25, 150, 'dec0006');
        this.d1.anchor.setTo(0.5);
        this.d1.scale.setTo(0.27);
        this.d1.inputEnabled = true;
        this.d1.input.useHandCursor = true;
        this.d1.events.onInputDown.add(function() {
            this.dec0001.visible = true;
            this.dec0001.loadTexture('dec0006');
            Main.dec_arr[2] = 6;
            this.ch1_i[2] = 1;

            if (this.ch1_i.indexOf(0) < 0) {
                game.add.tween(this.playbtn.scale).to({
                    x: 0.8,
                    y: 0.8
                }, 800, Phaser.Easing.Quadratic.Out, true);

            }


            effectssd = game.add.sprite(game.world.width / 2.5, game.world.height / 2, 'effectssd');
            effectssd.anchor.setTo(0.5);
            effectssd.animations.add('effectssd');
            effectssd.animations.play('effectssd', 20, false).onComplete.add(function(evt) {
                evt.destroy();
            }, this);


        }, this);
        this.p3_group.add(this.d1);

        this.d2 = game.add.sprite(438.25, 220, 'dec0002');
        this.d2.anchor.setTo(0.5);
        this.d2.scale.setTo(0.27);
        this.d2.inputEnabled = true;
        this.d2.input.useHandCursor = true;
        this.d2.events.onInputDown.add(function() {
            this.dec0001.visible = true;
            this.dec0001.loadTexture('dec0002');
            Main.dec_arr[2] = 2;
            this.ch1_i[2] = 1;

            if (this.ch1_i.indexOf(0) < 0) {
                game.add.tween(this.playbtn.scale).to({
                    x: 0.8,
                    y: 0.8
                }, 800, Phaser.Easing.Quadratic.Out, true);

            }


            effectssd = game.add.sprite(game.world.width / 2.5, game.world.height / 2, 'effectssd');
            effectssd.anchor.setTo(0.5);
            effectssd.animations.add('effectssd');
            effectssd.animations.play('effectssd', 20, false).onComplete.add(function(evt) {
                evt.destroy();
            }, this);

        }, this);
        this.p3_group.add(this.d2);

        this.d3 = game.add.sprite(438.25, 300, 'dec0003');
        this.d3.anchor.setTo(0.5);
        this.d3.scale.setTo(0.27);
        this.d3.inputEnabled = true;
        this.d3.input.useHandCursor = true;
        this.d3.events.onInputDown.add(function() {
            this.dec0001.visible = true;
            this.dec0001.loadTexture('dec0003');
            Main.dec_arr[2] = 3;
            this.ch1_i[2] = 1;

            if (this.ch1_i.indexOf(0) < 0) {
                game.add.tween(this.playbtn.scale).to({
                    x: 0.8,
                    y: 0.8
                }, 800, Phaser.Easing.Quadratic.Out, true);

            }


            effectssd = game.add.sprite(game.world.width / 2.5, game.world.height / 2, 'effectssd');
            effectssd.anchor.setTo(0.5);
            effectssd.animations.add('effectssd');
            effectssd.animations.play('effectssd', 20, false).onComplete.add(function(evt) {
                evt.destroy();
            }, this);

        }, this);
        this.p3_group.add(this.d3);

        this.d4 = game.add.sprite(438.25, 375, 'dec0004');
        this.d4.anchor.setTo(0.5);
        this.d4.scale.setTo(0.27);
        this.d4.inputEnabled = true;
        this.d4.input.useHandCursor = true;
        this.d4.events.onInputDown.add(function() {
            this.dec0001.visible = true;
            this.dec0001.loadTexture('dec0004');
            Main.dec_arr[2] = 4;
            this.ch1_i[2] = 1;

            if (this.ch1_i.indexOf(0) < 0) {
                game.add.tween(this.playbtn.scale).to({
                    x: 0.8,
                    y: 0.8
                }, 800, Phaser.Easing.Quadratic.Out, true);

            }


            effectssd = game.add.sprite(game.world.width / 2.5, game.world.height / 2, 'effectssd');
            effectssd.anchor.setTo(0.5);
            effectssd.animations.add('effectssd');
            effectssd.animations.play('effectssd', 20, false).onComplete.add(function(evt) {
                evt.destroy();
            }, this);

        }, this);
        this.p3_group.add(this.d4);

        this.d5 = game.add.sprite(438.25, 470, 'dec0005');
        this.d5.anchor.setTo(0.5);
        this.d5.scale.setTo(0.27);
        this.d5.inputEnabled = true;
        this.d5.input.useHandCursor = true;
        this.d5.events.onInputDown.add(function() {
            this.dec0001.visible = true;
            this.dec0001.loadTexture('dec0005');
            Main.dec_arr[2] = 5;
            this.ch1_i[2] = 1;

            if (this.ch1_i.indexOf(0) < 0) {
                game.add.tween(this.playbtn.scale).to({
                    x: 0.8,
                    y: 0.8
                }, 800, Phaser.Easing.Quadratic.Out, true);

            }


            effectssd = game.add.sprite(game.world.width / 2.5, game.world.height / 2, 'effectssd');
            effectssd.anchor.setTo(0.5);
            effectssd.animations.add('effectssd');
            effectssd.animations.play('effectssd', 20, false).onComplete.add(function(evt) {
                evt.destroy();
            }, this);

        }, this);
        this.p3_group.add(this.d5);

        this.d6 = game.add.sprite(438.25, 540, 'dec0001');
        this.d6.anchor.setTo(0.5);
        this.d6.scale.setTo(0.27);
        this.d6.inputEnabled = true;
        this.d6.input.useHandCursor = true;
        this.d6.events.onInputDown.add(function() {
            this.dec0001.visible = true;
            this.dec0001.loadTexture('dec0001');
            Main.dec_arr[2] = 1;
            this.ch1_i[2] = 1;

            if (this.ch1_i.indexOf(0) < 0) {
                game.add.tween(this.playbtn.scale).to({
                    x: 0.8,
                    y: 0.8
                }, 800, Phaser.Easing.Quadratic.Out, true);

            }


            effectssd = game.add.sprite(game.world.width / 2.5, game.world.height / 2, 'effectssd');
            effectssd.anchor.setTo(0.5);
            effectssd.animations.add('effectssd');
            effectssd.animations.play('effectssd', 20, false).onComplete.add(function(evt) {
                evt.destroy();
            }, this);

        }, this);
        this.p3_group.add(this.d6);

        this.p3_group.visible = false;
        this.p3_group.scale.y = 1.10;
        this.p3_group.y = -20;
        this.p3_group.scale.setTo(0.9);
        this.p3_group.y = 30;
        this.p3_group.x = 60;





        this.c_panel_gp = game.add.group();

        this.center_panel = game.add.sprite(255, 840, 'center_panel');
        this.center_panel.anchor.setTo(0.5);
        this.c_panel_gp.add(this.center_panel);

        this.coins0001 = game.add.sprite(116.55, 750, 'coins0002');
        this.coins0001.anchor.setTo(0.5);
        this.coins0001.inputEnabled = true;
        this.coins0001.input.useHandCursor = true;
        this.coins0001.events.onInputDown.add(function() {
            this.p1_group.visible = true;
            this.p2_group.visible = false;
            this.p3_group.visible = false;


        }, this);
        this.c_panel_gp.add(this.coins0001);

        this.coins0002 = game.add.sprite(244.6, 750, 'coins0003');
        this.coins0002.anchor.setTo(0.5);
        this.coins0002.inputEnabled = true;
        this.coins0002.input.useHandCursor = true;
        this.coins0002.events.onInputDown.add(function() {
            this.p2_group.visible = true;
            this.p1_group.visible = false;
            this.p3_group.visible = false;



        }, this);
        this.c_panel_gp.add(this.coins0002);

        this.coins0003 = game.add.sprite(374.65, 750, 'coins0001');
        this.coins0003.anchor.setTo(0.5);
        this.coins0003.inputEnabled = true;
        this.coins0003.input.useHandCursor = true;
        this.coins0003.events.onInputDown.add(function() {
            this.p3_group.visible = true;
            this.p1_group.visible = false;
            this.p2_group.visible = false;



        }, this);
        this.c_panel_gp.add(this.coins0003);

        this.c_panel_gp.scale.setTo(0.85);
        this.c_panel_gp.x = 40;
        this.c_panel_gp.y = 100;

        this.ch1_i = [0, 0, 0];




        this.morebtn = game.add.sprite(60, 620, 'btn04');
        this.morebtn.anchor.setTo(0.5);
        this.morebtn.scale.setTo(0.9);
        this.morebtn.inputEnabled = true;
        this.morebtn.input.useHandCursor = true;
        this.morebtn.events.onInputUp.add(this.moreLink, this);
        this.morebtn.events.onInputOver.add(this.btnOver, this);
        this.morebtn.events.onInputOut.add(this.btnOut, this);

        this.playbtn = game.add.sprite(430, 625, 'btn02');
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
        this.musicButton.scale.setTo(0.65);
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

    },
    moreLink: function() {

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
            MyShowAD('dressup');
            // game.state.start('final_screen')
        });

    },
}
////ddddddddddddddddddd

Main.dressup = function() {}

Main.dressup.prototype = {
    create: function() {


        this.d_bg = game.add.sprite(0, 0, 'd_bg');

        this.t_group = game.add.group();

        this.t_backhair0001 = game.add.sprite(274.6, 425.45, 't_backhair000' + Main.tr_arr[0]);
        this.t_backhair0001.anchor.setTo(0.5);
        this.t_group.add(this.t_backhair0001);

        this.t_body = game.add.sprite(272.5, 503, 't_body');
        this.t_body.anchor.setTo(0.5);
        this.t_group.add(this.t_body);

        this.t_head = game.add.sprite(263.95, 236.8, 't_head');
        this.t_head.anchor.setTo(0.5);
        this.t_group.add(this.t_head);

        this.t_shoes0001 = game.add.sprite(274.1, 425.95, 't_shoes000' + Main.tr_arr[2]);
        this.t_shoes0001.anchor.setTo(0.5);
        this.t_group.add(this.t_shoes0001);

        this.t_dress0001 = game.add.sprite(273.7, 425.95, 't_dress000' + Main.tr_arr[1]);
        this.t_dress0001.anchor.setTo(0.5);
        this.t_group.add(this.t_dress0001);

        this.t_chain0001 = game.add.sprite(275.15, 425.8, 't_chain000' + Main.tr_arr[3]);
        this.t_chain0001.anchor.setTo(0.5);
        this.t_chain0001.alpha = 0;
        this.t_group.add(this.t_chain0001);

        this.t_fronthair0001 = game.add.sprite(271.95, 425.45, 't_fronthair000' + Main.tr_arr[0]);
        this.t_fronthair0001.anchor.setTo(0.5);
        this.t_group.add(this.t_fronthair0001);

        this.earing = game.add.sprite(274.1, 425.95, 'earing');
        this.earing.anchor.setTo(0.5);
        this.earing.alpha = 1;
        this.t_group.add(this.earing);

        this.earing11 = game.add.sprite(158, 425.95, 'earing');
        this.earing11.anchor.setTo(0.5);
        this.earing11.alpha = 1;
        this.t_group.add(this.earing11);

        this.h1_cap0001 = game.add.sprite(271.95, 425.45, 'h1_cap000' + Main.tr_arr[4]);
        this.h1_cap0001.anchor.setTo(0.5);
        this.h1_cap0001.alpha = 0;
        this.t_group.add(this.h1_cap0001);

        this.h2_cap0001 = game.add.sprite(271.95, 425.4, 'h2_cap000' + Main.tr_arr[4]);
        this.h2_cap0001.anchor.setTo(0.5);
        this.h2_cap0001.alpha = 0;
        this.t_group.add(this.h2_cap0001);

        this.h3_cap0001 = game.add.sprite(271.8, 425.6, 'h3_cap000' + Main.tr_arr[4]);
        this.h3_cap0001.anchor.setTo(0.5);
        this.h3_cap0001.alpha = 0;
        this.t_group.add(this.h3_cap0001);

        this.h4_cap0001 = game.add.sprite(271.95, 425.65, 'h4_cap000' + Main.tr_arr[4]);
        this.h4_cap0001.anchor.setTo(0.5);
        this.h4_cap0001.alpha = 0;
        this.t_group.add(this.h4_cap0001);

        this.h5_cap0001 = game.add.sprite(271.9, 425.6, 'h5_cap000' + Main.tr_arr[4]);
        this.h5_cap0001.anchor.setTo(0.5);
        this.h5_cap0001.alpha = 0;
        this.t_group.add(this.h5_cap0001);

        this.h6_cap0001 = game.add.sprite(272, 425.65, 'h6_cap000' + Main.tr_arr[4]);
        this.h6_cap0001.anchor.setTo(0.5);
        this.h6_cap0001.alpha = 0;
        this.t_group.add(this.h6_cap0001);


        this.t_group.scale.setTo(0.85);
        this.t_group.x = 80;
        this.t_group.y = 80;

        this.taylor_txt0004 = game.add.sprite(410, 200, 'taylor_txt0004');
        this.taylor_txt0004.anchor.setTo(0.5);
        this.taylor_txt0004.scale.setTo(0.65);
        this.taylor_txt0004.alpha = 0;

        this.taylor_txt0005 = game.add.sprite(410, 180, 'taylor_txt0005');
        this.taylor_txt0005.anchor.setTo(0.5);
        this.taylor_txt0005.scale.setTo(0.65);
        this.taylor_txt0005.alpha = 0;

        this.taylor_txt0006 = game.add.sprite(390, 190, 'taylor_txt0006');
        this.taylor_txt0006.anchor.setTo(0.5);
        this.taylor_txt0006.scale.setTo(0.65);
        this.taylor_txt0006.alpha = 0;

        this.taylor_txt0007 = game.add.sprite(390, 190, 'taylor_txt0007');
        this.taylor_txt0007.anchor.setTo(0.5);
        this.taylor_txt0007.scale.setTo(0.65);
        this.taylor_txt0007.alpha = 0;

        // this.t_group.x=700;

        this.panel1_group = game.add.group();

        this.d_panel = game.add.sprite(75, 380, 'd_panel');
        this.d_panel.anchor.setTo(0.5);
        this.panel1_group.add(this.d_panel);

        // this.d_panel.scale.setTo(0.6);
        // this.panel1.angle=-90;
        this.count1 = 1;
        this.icons0001 = game.add.sprite(72.6, 188.85, 'icons0001');
        this.icons0001.anchor.setTo(0.5);
        this.icons0001.inputEnabled = true;
        this.icons0001.input.useHandCursor = true;
        this.icons0001.events.onInputDown.add(function() {
            this.count1++
                this.t_backhair0001.loadTexture('t_backhair000' + this.count1);
            this.t_fronthair0001.loadTexture('t_fronthair000' + this.count1);

            Main.tr_arr[0] = this.count1;
            if (this.count1 >= 6) {
                this.count1 = 0;
            }
            if (Main.tr_arr[0] == 1) {
                this.h1_cap0001.visible = true;
                this.h2_cap0001.visible = false;
                this.h3_cap0001.visible = false;
                this.h4_cap0001.visible = false;
                this.h5_cap0001.visible = false;
                this.h6_cap0001.visible = false;

            }
            if (Main.tr_arr[0] == 2) {
                this.h1_cap0001.visible = false;
                this.h2_cap0001.visible = true;
                this.h3_cap0001.visible = false;
                this.h4_cap0001.visible = false;
                this.h5_cap0001.visible = false;
                this.h6_cap0001.visible = false;

            }
            if (Main.tr_arr[0] == 3) {
                this.h1_cap0001.visible = false;
                this.h2_cap0001.visible = false;
                this.h3_cap0001.visible = true;
                this.h4_cap0001.visible = false;
                this.h5_cap0001.visible = false;
                this.h6_cap0001.visible = false;

            }
            if (Main.tr_arr[0] == 4) {
                this.h1_cap0001.visible = false;
                this.h2_cap0001.visible = false;
                this.h3_cap0001.visible = false;
                this.h4_cap0001.visible = true;
                this.h5_cap0001.visible = false;
                this.h6_cap0001.visible = false;

            }
            if (Main.tr_arr[0] == 5) {
                this.h1_cap0001.visible = false;
                this.h2_cap0001.visible = false;
                this.h3_cap0001.visible = false;
                this.h4_cap0001.visible = false;
                this.h5_cap0001.visible = true;
                this.h6_cap0001.visible = false;

            }
            if (Main.tr_arr[0] == 6) {
                this.h1_cap0001.visible = false;
                this.h2_cap0001.visible = false;
                this.h3_cap0001.visible = false;
                this.h4_cap0001.visible = false;
                this.h5_cap0001.visible = false;
                this.h6_cap0001.visible = true;

            }
            if (Main.tr_arr[0] == 4 || Main.tr_arr[0] == 6) {
                this.earing.visible = false;
            } else {
                this.earing.visible = true;
            }



            this.ch1_i[0] = 1;

            if (this.ch1_i.indexOf(0) < 0) {

                game.add.tween(this.playbtn.scale).to({
                    x: 1,
                    y: 1
                }, 800, Phaser.Easing.Quadratic.Out, true);


            }

            // Main.magicstars.play();

            effectssd = game.add.sprite(game.world.width / 1.75, game.world.height / 3.3, 'effectssd');
            effectssd.anchor.setTo(0.5);
            effectssd.animations.add('effectssd');
            effectssd.animations.play('effectssd', 20, false).onComplete.add(function(evt) {
                evt.destroy();
            }, this);


        }, this);
        this.panel1_group.add(this.icons0001);


        this.count2 = 1;
        this.icons0002 = game.add.sprite(72.6, 283, 'icons0002');
        this.icons0002.anchor.setTo(0.5);
        this.icons0002.inputEnabled = true;
        this.icons0002.input.useHandCursor = true;
        this.icons0002.events.onInputDown.add(function() {
            this.count2++
                this.t_dress0001.loadTexture('t_dress000' + this.count2);
            Main.tr_arr[1] = this.count2;
            if (this.count2 >= 6) {
                this.count2 = 0;
            }

            this.ch1_i[1] = 1;

            if (this.ch1_i.indexOf(0) < 0) {

                game.add.tween(this.playbtn.scale).to({
                    x: 1,
                    y: 1
                }, 800, Phaser.Easing.Quadratic.Out, true);

            }

            // Main.magicstars.play();

            effectssd = game.add.sprite(game.world.width / 1.75, game.world.height / 1.7, 'effectssd');
            effectssd.anchor.setTo(0.5);
            effectssd.animations.add('effectssd');
            effectssd.animations.play('effectssd', 20, false).onComplete.add(function(evt) {
                evt.destroy();
            }, this);


        }, this);
        this.panel1_group.add(this.icons0002);


        this.count3 = 0;
        this.icons0003 = game.add.sprite(72.6, 380.65, 'icons0003');
        this.icons0003.anchor.setTo(0.5);
        this.icons0003.inputEnabled = true;
        this.icons0003.input.useHandCursor = true;
        this.icons0003.events.onInputDown.add(function() {
            this.count3++
                this.t_shoes0001.loadTexture('t_shoes000' + this.count3);
            Main.tr_arr[2] = this.count3;
            if (this.count3 >= 6) {
                this.count3 = 0;
            }

            this.ch1_i[2] = 1;

            if (this.ch1_i.indexOf(0) < 0) {

                game.add.tween(this.playbtn.scale).to({
                    x: 1,
                    y: 1
                }, 800, Phaser.Easing.Quadratic.Out, true);

            }

            // Main.magicstars.play();

            effectssd = game.add.sprite(game.world.width / 1.75, game.world.height / 1.1, 'effectssd');
            effectssd.anchor.setTo(0.5);
            effectssd.animations.add('effectssd');
            effectssd.animations.play('effectssd', 20, false).onComplete.add(function(evt) {
                evt.destroy();
            }, this);


        }, this);
        this.panel1_group.add(this.icons0003);



        this.count4 = 0;
        this.icons0004 = game.add.sprite(72.6, 478.55, 'icons0004');
        this.icons0004.anchor.setTo(0.5);
        this.icons0004.inputEnabled = true;
        this.icons0004.input.useHandCursor = true;
        this.icons0004.events.onInputDown.add(function() {
            this.count4++
                this.t_chain0001.alpha = 1;
            this.t_chain0001.loadTexture('t_chain000' + this.count4);
            Main.tr_arr[3] = this.count4;
            if (this.count4 >= 6) {
                this.count4 = 0;
            }

            this.ch1_i[3] = 1;

            if (this.ch1_i.indexOf(0) < 0) {

                game.add.tween(this.playbtn.scale).to({
                    x: 1,
                    y: 1
                }, 800, Phaser.Easing.Quadratic.Out, true);

            }

            // Main.magicstars.play();

            effectssd = game.add.sprite(game.world.width / 1.75, game.world.height / 1.1, 'effectssd');
            effectssd.anchor.setTo(0.5);
            effectssd.animations.add('effectssd');
            effectssd.animations.play('effectssd', 20, false).onComplete.add(function(evt) {
                evt.destroy();
            }, this);



        }, this);
        this.panel1_group.add(this.icons0004);


        this.count5 = 0;
        this.icons0005 = game.add.sprite(72.6, 577.65, 'icons0005');
        this.icons0005.anchor.setTo(0.5);
        this.icons0005.inputEnabled = true;
        this.icons0005.input.useHandCursor = true;
        this.icons0005.events.onInputDown.add(function() {
            this.count5++;
            this.h1_cap0001.alpha = 1;
            this.h2_cap0001.alpha = 1;
            this.h3_cap0001.alpha = 1;
            this.h4_cap0001.alpha = 1;
            this.h5_cap0001.alpha = 1;
            this.h6_cap0001.alpha = 1;

            this.h1_cap0001.loadTexture('h1_cap000' + this.count5);
            this.h2_cap0001.loadTexture('h2_cap000' + this.count5);
            this.h3_cap0001.loadTexture('h3_cap000' + this.count5);
            this.h4_cap0001.loadTexture('h4_cap000' + this.count5);
            this.h5_cap0001.loadTexture('h5_cap000' + this.count5);
            this.h6_cap0001.loadTexture('h6_cap000' + this.count5);

            Main.tr_arr[4] = this.count5;
            if (Main.tr_arr[0] == 1) {
                this.h1_cap0001.visible = true;
                this.h2_cap0001.visible = false;
                this.h3_cap0001.visible = false;
                this.h4_cap0001.visible = false;
                this.h5_cap0001.visible = false;
                this.h6_cap0001.visible = false;

            }
            if (Main.tr_arr[0] == 2) {
                this.h1_cap0001.visible = false;
                this.h2_cap0001.visible = true;
                this.h3_cap0001.visible = false;
                this.h4_cap0001.visible = false;
                this.h5_cap0001.visible = false;
                this.h6_cap0001.visible = false;

            }
            if (Main.tr_arr[0] == 3) {
                this.h1_cap0001.visible = false;
                this.h2_cap0001.visible = false;
                this.h3_cap0001.visible = true;
                this.h4_cap0001.visible = false;
                this.h5_cap0001.visible = false;
                this.h6_cap0001.visible = false;

            }
            if (Main.tr_arr[0] == 4) {
                this.h1_cap0001.visible = false;
                this.h2_cap0001.visible = false;
                this.h3_cap0001.visible = false;
                this.h4_cap0001.visible = true;
                this.h5_cap0001.visible = false;
                this.h6_cap0001.visible = false;

            }
            if (Main.tr_arr[0] == 5) {
                this.h1_cap0001.visible = false;
                this.h2_cap0001.visible = false;
                this.h3_cap0001.visible = false;
                this.h4_cap0001.visible = false;
                this.h5_cap0001.visible = true;
                this.h6_cap0001.visible = false;

            }
            if (Main.tr_arr[0] == 6) {
                this.h1_cap0001.visible = false;
                this.h2_cap0001.visible = false;
                this.h3_cap0001.visible = false;
                this.h4_cap0001.visible = false;
                this.h5_cap0001.visible = false;
                this.h6_cap0001.visible = true;

            }


            if (this.count5 >= 6) {
                this.count5 = 0;
            }
            this.ch1_i[4] = 1;

            if (this.ch1_i.indexOf(0) < 0) {

                game.add.tween(this.playbtn.scale).to({
                    x: 1,
                    y: 1
                }, 800, Phaser.Easing.Quadratic.Out, true);


            }


            effectssd = game.add.sprite(game.world.width / 1.8, game.world.height / 3.8, 'effectssd');
            effectssd.anchor.setTo(0.5);
            effectssd.animations.add('effectssd');
            effectssd.animations.play('effectssd', 20, false).onComplete.add(function(evt) {
                evt.destroy();
            }, this);

        }, this);
        this.panel1_group.add(this.icons0005);

        this.ch1_i = [0, 0, 0, 0, 0];

        this.panel1_group.x = -700;


        this.morebtn = game.add.sprite(85, 730, 'btn04');
        this.morebtn.anchor.setTo(0.5);
        this.morebtn.scale.setTo(1);
        this.morebtn.inputEnabled = true;
        this.morebtn.input.useHandCursor = true;
        this.morebtn.events.onInputUp.add(this.moreLink, this);
        this.morebtn.events.onInputOver.add(this.btnOver, this);
        this.morebtn.events.onInputOut.add(this.btnOut, this);

        this.playbtn = game.add.sprite(430, 730, 'btn05');
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
                game.add.tween(this.taylor_txt0004).to({
                    alpha: 1
                }, 1000, Phaser.Easing.Quadratic.Out, true, 600);
                game.add.tween(this.taylor_txt0004).to({
                    alpha: 0
                }, 1000, Phaser.Easing.Quadratic.Out, true, 2600).onComplete.add(function() {
                    game.add.tween(this.taylor_txt0005).to({
                        alpha: 1
                    }, 1000, Phaser.Easing.Quadratic.Out, true, 600).onComplete.add(function() {
                        game.add.tween(this.taylor_txt0005).to({
                            alpha: 0
                        }, 1000, Phaser.Easing.Quadratic.Out, true, 1800).onComplete.add(function() {
                            game.add.tween(this.panel1_group).to({
                                x: 0
                            }, 1000, Phaser.Easing.Quadratic.Out, true, 800);

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
        this.musicButton.scale.setTo(0.65);
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

    },
    moreLink: function() {

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
            MyShowAD('new_dressup');
        });

    },
}

///cccccccccccccccccccccc


Main.cooking = function() {}

Main.cooking.prototype = {
    create: function() {

        this.c_bg = game.add.sprite(0, 0, 'c_bg1');

        this.c_table = game.add.sprite(252, 695, 'c_table');
        this.c_table.anchor.setTo(0.5);


        this.timer = game.add.sprite(-80, 150, 't_timer');
        this.timer.anchor.setTo(0.5);
        this.timer.scale.setTo(0);

        this.b_group = game.add.group();

        this.bowl1 = game.add.sprite(259.15, 535.65, 'bowl1');
        this.bowl1.anchor.setTo(0.5);
        this.b_group.add(this.bowl1);

        this.flour_ani = game.add.sprite(259, 535, 'flour_ani');
        this.flour_ani.anchor.setTo(0.5);
        this.flour_ani.scale.setTo(0.8);
        this.flour_ani.visible = false;
        this.b_group.add(this.flour_ani);


        this.salt_ani = game.add.sprite(259, 545, 'salt_ani');
        this.salt_ani.anchor.setTo(0.5);
        this.salt_ani.visible = false;
        this.b_group.add(this.salt_ani);


        this.yolk_ani = game.add.sprite(500, 410, 'yolk_ani');
        this.yolk_ani.anchor.setTo(0.5);
        this.yolk_ani.frame = 7;
        this.yolk_ani.angle = 90;
        this.yolk_ani.visible = false;
        this.b_group.add(this.yolk_ani);

        this.yellow = game.add.sprite(250, 560, 'yellow');
        this.yellow.anchor.setTo(0.5);
        this.yellow.scale.setTo(0);
        this.b_group.add(this.yellow);


        this.coco_ani = game.add.sprite(245, 540, 'coco_ani');
        this.coco_ani.anchor.setTo(0.5);
        this.coco_ani.visible = false;
        this.b_group.add(this.coco_ani);


        this.water_ani = game.add.sprite(258, 400, 'water_ani');
        this.water_ani.anchor.setTo(0.5);
        this.water_ani.visible = false;
        this.b_group.add(this.water_ani);


        this.bt_ani = game.add.sprite(245, 490, 'bt_ani');
        this.bt_ani.anchor.setTo(0.5);
        this.bt_ani.visible = false;
        this.b_group.add(this.bt_ani);

        this.bowl2 = game.add.sprite(259.15, 553, 'bowl2');
        this.bowl2.anchor.setTo(0.5);
        this.b_group.add(this.bowl2);


        this.y_flow_ani = game.add.sprite(300, 400, 'y_flow_ani');
        this.y_flow_ani.anchor.setTo(0.5);
        this.y_flow_ani.visible = false;

        this.fl_p_ani = game.add.sprite(320, 390, 'fl_p_ani');
        this.fl_p_ani.anchor.setTo(0.5);
        this.fl_p_ani.scale.setTo(0.8);
        this.fl_p_ani.visible = false;

        this.su_p_ani = game.add.sprite(320, 390, 'su_p_ani');
        this.su_p_ani.anchor.setTo(0.5);
        this.su_p_ani.scale.setTo(0.8);
        this.su_p_ani.visible = false;

        this.coco_bowl_ani = game.add.sprite(230, 390, 'coco_bowl_ani');
        this.coco_bowl_ani.anchor.setTo(0.5);
        this.coco_bowl_ani.scale.setTo(0.8);
        this.coco_bowl_ani.visible = false;

        this.butter_bowlani = game.add.sprite(300, 340, 'butter_bowlani');
        this.butter_bowlani.anchor.setTo(0.5);
        this.butter_bowlani.scale.setTo(0.8);
        this.butter_bowlani.visible = false;

        this.salt_flow_ani = game.add.sprite(210, 370, 'salt_flow_ani');
        this.salt_flow_ani.anchor.setTo(0.5);
        this.salt_flow_ani.scale.setTo(0.8);
        this.salt_flow_ani.visible = false;

        this.water_flow_ani = game.add.sprite(330, 370, 'water_flow_ani');
        this.water_flow_ani.anchor.setTo(0.5);
        this.water_flow_ani.scale.setTo(0.8);
        this.water_flow_ani.visible = false;


        this.flour0001 = game.add.sprite(91.15, 620, 'flour0001');
        this.flour0001.anchor.setTo(0.5);
        this.flour0001.events.onInputDown.add(function() {
            this.flour0001.loadTexture('flour0002');
            this.arrow1.visible = false;
            this.arrow2.scale.setTo(0.8);
            this.arrow2.x = 243;
            this.arrow2.y = 387;

        }, this);
        this.flour0001.events.onInputUp.add(function() {
            if ((game.input.activePointer.x > 125 && game.input.activePointer.x < 372 && game.input.activePointer.y > 247 && game.input.activePointer.y < 611)) {
                this.arrow2.visible = false;
                this.flour0001.visible = false;
                this.fl_p_ani.visible = true;
                this.fl_p_ani.animations.add('fl_p_ani');
                this.fl_p_ani.animations.play('fl_p_ani', 10, false)

                game.time.events.add(500, function() {
                    this.flour_ani.visible = true;
                    this.flour_ani.animations.add('flour_ani');
                    this.flour_ani.animations.play('flour_ani', 10, false).onComplete.add(function() {
                        game.add.tween(this.fl_p_ani).to({
                            alpha: 0
                        }, 1000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                            this.arrow1.visible = true;
                            this.arrow1.x = 433;
                            this.arrow1.y = 496;
                            this.sugar0001.inputEnabled = true;
                            this.sugar0001.input.useHandCursor = true;
                            this.sugar0001.input.enableDrag();

                        }, this);
                    }, this);


                }, this);

            } else {
                this.arrow1.visible = true;
                this.arrow1.x = 82;
                this.arrow1.y = 499;
                this.arrow2.visible = false;
                game.add.tween(this.flour0001).to({
                    x: 91.15,
                    y: 620
                }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {

                }, this);
            }
        }, this);
        this.flour0001.scale.setTo(0.8);
        this.flour0001.visible = true;

        this.sugar0001 = game.add.sprite(432.7, 620, 'sugar0001');
        this.sugar0001.anchor.setTo(0.5);
        this.sugar0001.events.onInputDown.add(function() {
            this.sugar0001.loadTexture('sugar0002')
            this.arrow1.visible = false;
            this.arrow2.scale.setTo(0.8);
            this.arrow2.x = 243;
            this.arrow2.y = 387;
        }, this);
        this.sugar0001.events.onInputUp.add(function() {
            if ((game.input.activePointer.x > 125 && game.input.activePointer.x < 372 && game.input.activePointer.y > 247 && game.input.activePointer.y < 611)) {
                this.arrow2.visible = false;
                this.sugar0001.visible = false;
                this.su_p_ani.visible = true;
                this.su_p_ani.animations.add('su_p_ani');
                this.su_p_ani.animations.play('su_p_ani', 10, false)

                game.time.events.add(500, function() {
                    this.salt_ani.visible = true;
                    this.salt_ani.animations.add('salt_ani');
                    this.salt_ani.animations.play('salt_ani', 10, false).onComplete.add(function() {
                        game.add.tween(this.su_p_ani).to({
                            alpha: 0
                        }, 1000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                            game.add.tween(this.bowl_gp).to({
                                x: 0
                            }, 1000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                                game.add.tween(this.egg3).to({
                                    x: 300
                                }, 1000, Phaser.Easing.Quadratic.Out, true, 600);
                                game.add.tween(this.egg_st111).to({
                                    x: 300
                                }, 1000, Phaser.Easing.Quadratic.Out, true, 600);
                                game.add.tween(this.egg_st22).to({
                                    x: 300
                                }, 1000, Phaser.Easing.Quadratic.Out, true, 600);
                                game.add.tween(this.egg_st1).to({
                                    x: 370
                                }, 1000, Phaser.Easing.Quadratic.Out, true, 600);
                                game.add.tween(this.egg1).to({
                                    x: 370
                                }, 1000, Phaser.Easing.Quadratic.Out, true, 600);
                                game.add.tween(this.egg_st2).to({
                                    x: 370
                                }, 1000, Phaser.Easing.Quadratic.Out, true, 600);
                                game.add.tween(this.joint).to({
                                    x: 408
                                }, 1000, Phaser.Easing.Quadratic.Out, true, 600);
                                game.add.tween(this.joint1).to({
                                    x: 335
                                }, 1000, Phaser.Easing.Quadratic.Out, true, 600);
                                game.add.tween(this.egg_st11).to({
                                    x: 444
                                }, 1000, Phaser.Easing.Quadratic.Out, true, 600);
                                game.add.tween(this.egg2).to({
                                    x: 444
                                }, 1000, Phaser.Easing.Quadratic.Out, true, 600);
                                game.add.tween(this.egg_st21).to({
                                    x: 444
                                }, 1000, Phaser.Easing.Quadratic.Out, true, 600).onComplete.add(function() {
                                    this.arrow1.visible = true;
                                    this.arrow1.x = 295;
                                    this.arrow1.y = 535;
                                    this.egg3.inputEnabled = true;
                                    this.egg3.input.useHandCursor = true;
                                    this.egg3.input.enableDrag();

                                }, this);
                            }, this);
                        }, this);
                    }, this);
                }, this);

            } else {
                this.arrow1.visible = true;
                this.arrow1.x = 433;
                this.arrow1.y = 496;
                this.arrow2.visible = false;
                game.add.tween(this.sugar0001).to({
                    x: 432.7,
                    y: 620
                }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {

                }, this);
            }
        }, this);
        this.sugar0001.scale.setTo(0.8);
        this.sugar0001.visible = true;

        this.bowl_gp = game.add.group();

        this.bowl_ani = game.add.sprite(100, 630, 'bowl_ani');
        this.bowl_ani.anchor.setTo(0.5);
        this.bowl_gp.add(this.bowl_ani);

        this.fliter_ani = game.add.sprite(100, 580, 'fliter_ani');
        this.fliter_ani.anchor.setTo(0.5);
        this.fliter_ani.events.onInputDown.add(function() {
            this.arrow1.visible = false;
            this.arrow2.visible = true;
            this.arrow2.x = 259;
            this.arrow2.y = 357;

        }, this);
        this.fliter_ani.events.onInputUp.add(function() {
            if ((game.input.activePointer.x > 125 && game.input.activePointer.x < 372 && game.input.activePointer.y > 247 && game.input.activePointer.y < 611)) {
                this.arrow2.visible = false;
                this.fliter_ani.visible = false;
                this.y_flow_ani.visible = true;
                this.y_flow_ani.animations.add('y_flow_ani');
                this.y_flow_ani.animations.play('y_flow_ani', 10, false)

                game.time.events.add(800, function() {
                    game.add.tween(this.yellow).to({
                        x: 250,
                        y: 520
                    }, 1000, Phaser.Easing.Quadratic.Out, true);
                    game.add.tween(this.yellow.scale).to({
                        x: 1,
                        y: 1
                    }, 1000, Phaser.Easing.Quadratic.Out, true)
                    game.add.tween(this.y_flow_ani).to({
                        alpha: 0
                    }, 1000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                        game.add.tween(this.bowl_gp).to({
                            x: -700
                        }, 1000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                            game.add.tween(this.egg_st1).to({
                                x: 700
                            }, 1000, Phaser.Easing.Quadratic.Out, true, 300);
                            game.add.tween(this.egg_st2).to({
                                x: 700
                            }, 1000, Phaser.Easing.Quadratic.Out, true, 300);
                            game.add.tween(this.joint).to({
                                x: 700
                            }, 1000, Phaser.Easing.Quadratic.Out, true, 300);
                            game.add.tween(this.joint1).to({
                                x: 700
                            }, 1000, Phaser.Easing.Quadratic.Out, true, 300);
                            game.add.tween(this.egg_st21).to({
                                x: 700
                            }, 1000, Phaser.Easing.Quadratic.Out, true, 300);
                            game.add.tween(this.egg_st11).to({
                                x: 700
                            }, 1000, Phaser.Easing.Quadratic.Out, true, 300);
                            game.add.tween(this.egg_st111).to({
                                x: 700
                            }, 1000, Phaser.Easing.Quadratic.Out, true, 300);
                            game.add.tween(this.egg_st22).to({
                                x: 700
                            }, 1000, Phaser.Easing.Quadratic.Out, true, 300).onComplete.add(function() {
                                game.add.tween(this.coco_bowl).to({
                                    x: 100
                                }, 1000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                                    game.add.tween(this.butter_bowl).to({
                                        x: 400
                                    }, 1000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                                        this.arrow1.visible = true;
                                        this.arrow1.x = 97;
                                        this.arrow1.y = 525;
                                        this.coco_bowl.inputEnabled = true;
                                        this.coco_bowl.input.useHandCursor = true;
                                        this.coco_bowl.input.enableDrag();
                                    }, this);
                                }, this);
                            }, this);
                        }, this);
                    }, this);
                }, this);
                // },this);


            } else {
                this.arrow1.visible = true;
                this.arrow1.x = 93;
                this.arrow1.y = 528;
                this.arrow2.visible = false;
                game.add.tween(this.fliter_ani).to({
                    x: 100,
                    y: 580
                }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {

                }, this);
            }
        }, this);
        this.bowl_gp.add(this.fliter_ani);

        this.bowl_gp.x = -700;


        this.egg_st1 = game.add.sprite(370, 660, 'egg_st1');
        this.egg_st1.anchor.setTo(0.5);
        this.egg_st1.scale.setTo(0.8);
        this.egg_st1.x = 700;

        this.egg_ani = game.add.sprite(110, 465, 'egg_ani');
        this.egg_ani.anchor.setTo(0.5);
        this.egg_ani.scale.setTo(0.85);
        this.egg_ani.visible = false;


        this.egg1 = game.add.sprite(370, 621, 'egg');
        this.egg1.anchor.setTo(0.5);
        this.egg1.scale.setTo(0.8);
        this.egg1.events.onInputDown.add(function() {
            this.arrow1.visible = false;
            this.arrow2.visible = true;
            this.arrow2.x = 71;
            this.arrow2.y = 506;
            game.world.bringToTop(this.egg1);
        }, this);
        this.egg1.events.onInputUp.add(function() {
            if ((game.input.activePointer.x > 3 && game.input.activePointer.x < 246 && game.input.activePointer.y > 426 && game.input.activePointer.y < 706)) {
                this.arrow2.visible = false;
                this.egg1.visible = false;
                this.egg_ani.visible = true;
                this.egg_ani.animations.add('egg_ani', [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]);
                this.egg_ani.animations.play('egg_ani', 10, false)
                game.time.events.add(2600, function() {

                    this.fliter_ani.animations.add('fliter_ani', [5, 6, 7, 8]);
                    this.fliter_ani.animations.play('fliter_ani', 10, false)
                    game.time.events.add(500, function() {

                        this.bowl_ani.animations.add('bowl_ani', [5, 7]);
                        this.bowl_ani.animations.play('bowl_ani', 10, false).onComplete.add(function() {
                            this.arrow1.visible = true;
                            this.arrow1.x = 444;
                            this.arrow1.y = 540;
                            this.egg2.inputEnabled = true;
                            this.egg2.input.useHandCursor = true;
                            this.egg2.input.enableDrag();

                        }, this);

                    }, this)

                }, this);


            } else {
                this.arrow1.visible = true;
                this.arrow1.x = 365;
                this.arrow1.y = 544;
                this.arrow2.visible = false;
                game.world.bringToTop(this.egg_st2);
                game.add.tween(this.egg1).to({
                    x: 370,
                    y: 621
                }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {

                }, this);
            }
        }, this);
        this.egg1.x = 700;

        this.egg_st2 = game.add.sprite(370, 651, 'egg_st2');
        this.egg_st2.anchor.setTo(0.5);
        this.egg_st2.scale.setTo(0.8);
        this.egg_st2.x = 700;

        this.joint = game.add.sprite(408, 629, 'joint');
        this.joint.anchor.setTo(0.5);
        this.joint.x = 700;



        this.egg_st11 = game.add.sprite(444, 660, 'egg_st1');
        this.egg_st11.anchor.setTo(0.5);
        this.egg_st11.scale.setTo(0.8);
        this.egg_st11.x = 700;

        this.egg2 = game.add.sprite(444, 621, 'egg');
        this.egg2.anchor.setTo(0.5);
        this.egg2.scale.setTo(0.8);
        this.egg2.events.onInputDown.add(function() {
            this.arrow1.visible = false;
            this.arrow2.visible = true;
            this.arrow2.x = 71;
            this.arrow2.y = 506;
            game.world.bringToTop(this.egg2);
        }, this);
        this.egg2.events.onInputUp.add(function() {
            if ((game.input.activePointer.x > 3 && game.input.activePointer.x < 246 && game.input.activePointer.y > 426 && game.input.activePointer.y < 706)) {
                this.arrow2.visible = false;
                this.egg2.visible = false;
                this.egg_ani.visible = true;
                this.egg_ani.animations.add('egg_ani', [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]);
                this.egg_ani.animations.play('egg_ani', 10, false)
                game.time.events.add(2600, function() {

                    this.fliter_ani.animations.add('fliter_ani', [9, 10, 11]);
                    this.fliter_ani.animations.play('fliter_ani', 10, false)
                    game.time.events.add(500, function() {
                        this.bowl_ani.animations.add('bowl_ani', [6, 7, 8]);
                        this.bowl_ani.animations.play('bowl_ani', 10, false).onComplete.add(function() {
                            this.arrow1.visible = true;
                            this.arrow1.x = 93;
                            this.arrow1.y = 528;
                            this.fliter_ani.inputEnabled = true;
                            this.fliter_ani.input.useHandCursor = true;
                            this.fliter_ani.input.enableDrag();

                        }, this);

                    }, this)

                }, this);


            } else {
                this.arrow1.visible = true;
                this.arrow1.x = 444;
                this.arrow1.y = 540;
                this.arrow2.visible = false;
                game.world.bringToTop(this.egg_st21);

                game.add.tween(this.egg2).to({
                    x: 444,
                    y: 621
                }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {

                }, this);
            }
        }, this);
        this.egg2.x = 700;
        // 
        this.egg_st21 = game.add.sprite(444, 651, 'egg_st2');
        this.egg_st21.anchor.setTo(0.5);
        this.egg_st21.scale.setTo(0.8);
        this.egg_st21.x = 700;

        this.egg_st111 = game.add.sprite(300, 660, 'egg_st1');
        this.egg_st111.anchor.setTo(0.5);
        this.egg_st111.scale.setTo(0.8);
        this.egg_st111.x = 700;

        this.egg3 = game.add.sprite(300, 621, 'egg');
        this.egg3.anchor.setTo(0.5);
        this.egg3.scale.setTo(0.8);
        this.egg3.inputEnabled = true;
        this.egg3.input.useHandCursor = true;
        this.egg3.input.enableDrag();
        this.egg3.events.onInputDown.add(function() {
            this.arrow1.visible = false;
            this.arrow2.visible = true;
            this.arrow2.x = 71;
            this.arrow2.y = 506;
            game.world.bringToTop(this.egg3);

        }, this);
        this.egg3.events.onInputUp.add(function() {
            if ((game.input.activePointer.x > 3 && game.input.activePointer.x < 246 && game.input.activePointer.y > 426 && game.input.activePointer.y < 706)) {
                this.arrow2.visible = false;
                this.egg3.visible = false;
                this.egg_ani.visible = true;
                this.egg_ani.animations.add('egg_ani', [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]);
                this.egg_ani.animations.play('egg_ani', 10, false)
                game.time.events.add(2600, function() {

                    this.fliter_ani.animations.add('fliter_ani', [1, 2, 3, 4]);
                    this.fliter_ani.animations.play('fliter_ani', 10, false)
                    game.time.events.add(500, function() {

                        this.bowl_ani.animations.add('bowl_ani', [1, 2, 3, 4]);
                        this.bowl_ani.animations.play('bowl_ani', 10, false).onComplete.add(function() {
                            this.arrow1.visible = true;
                            this.arrow1.x = 365;
                            this.arrow1.y = 544;
                            this.egg1.inputEnabled = true;
                            this.egg1.input.useHandCursor = true;
                            this.egg1.input.enableDrag();

                        }, this);

                    }, this)

                }, this);


            } else {
                this.arrow1.visible = true;
                this.arrow1.x = 295;
                this.arrow1.y = 535;
                this.arrow2.visible = false;
                game.world.bringToTop(this.egg_st22);
                game.add.tween(this.egg3).to({
                    x: 300,
                    y: 621
                }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {

                }, this);
            }
        }, this);
        this.egg3.x = 700;

        this.egg_st22 = game.add.sprite(300, 651, 'egg_st2');
        this.egg_st22.anchor.setTo(0.5);
        this.egg_st22.scale.setTo(0.8);
        this.egg_st22.x = 700;

        this.joint1 = game.add.sprite(335, 629, 'joint');
        this.joint1.anchor.setTo(0.5);
        this.joint1.x = 700;





        this.coco_bowl = game.add.sprite(100, 630, 'coco_bowl');
        this.coco_bowl.anchor.setTo(0.5);
        // this.coco_bowl.inputEnabled =true;
        // this.coco_bowl.input.useHandCursor =true;
        this.coco_bowl.events.onInputDown.add(function() {
            this.arrow1.visible = false;
            this.arrow2.visible = true;
            this.arrow2.x = 249;
            this.arrow2.y = 411;
        }, this);
        this.coco_bowl.events.onInputUp.add(function() {
            if ((game.input.activePointer.x > 125 && game.input.activePointer.x < 372 && game.input.activePointer.y > 247 && game.input.activePointer.y < 611)) {
                this.arrow2.visible = false;
                this.coco_bowl.visible = false;
                this.coco_bowl_ani.visible = true;
                this.coco_bowl_ani.animations.add('coco_bowl_ani');
                this.coco_bowl_ani.animations.play('coco_bowl_ani', 10, false)

                game.time.events.add(500, function() {
                    this.coco_ani.visible = true;
                    this.coco_ani.animations.add('coco_ani');
                    this.coco_ani.animations.play('coco_ani', 10, false).onComplete.add(function() {
                        game.add.tween(this.coco_bowl_ani).to({
                            alpha: 0
                        }, 1000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                            this.arrow1.visible = true;
                            this.arrow1.x = 394;
                            this.arrow1.y = 552;
                            this.butter_bowl.inputEnabled = true;
                            this.butter_bowl.input.useHandCursor = true;
                            this.butter_bowl.input.enableDrag();

                        }, this);
                    }, this);
                }, this);

            } else {
                this.arrow1.visible = true;
                this.arrow1.x = 97;
                this.arrow1.y = 525;
                this.arrow2.visible = false;
                game.add.tween(this.coco_bowl).to({
                    x: 100,
                    y: 630
                }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {

                }, this);
            }
        }, this);
        this.coco_bowl.x = -700;

        this.butter_bowl = game.add.sprite(400, 650, 'butter_bowl');
        this.butter_bowl.anchor.setTo(0.5);
        this.butter_bowl.events.onInputDown.add(function() {
            this.arrow1.visible = false;
            this.arrow2.visible = true;
            this.arrow2.x = 247;
            this.arrow2.y = 404;
        }, this);
        this.butter_bowl.events.onInputUp.add(function() {
            if ((game.input.activePointer.x > 125 && game.input.activePointer.x < 372 && game.input.activePointer.y > 247 && game.input.activePointer.y < 611)) {
                this.arrow2.visible = false;
                this.butter_bowl.visible = false;
                this.butter_bowlani.visible = true;
                this.butter_bowlani.animations.add('butter_bowlani');
                this.butter_bowlani.animations.play('butter_bowlani', 10, false)

                game.time.events.add(500, function() {
                    this.bt_ani.visible = true;
                    this.bt_ani.animations.add('bt_ani');
                    this.bt_ani.animations.play('bt_ani', 10, false).onComplete.add(function() {
                        game.add.tween(this.butter_bowlani).to({
                            alpha: 0
                        }, 1000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                            game.add.tween(this.n_group).to({
                                x: 0
                            }, 1000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                                this.arrow1.visible = true;
                                this.arrow1.x = 80;
                                this.arrow1.y = 553;
                                this.salt.inputEnabled = true;
                                this.salt.input.useHandCursor = true;
                                this.salt.input.enableDrag();

                            }, this);
                        }, this);
                    }, this);
                }, this);

            } else {
                this.arrow1.visible = true;
                this.arrow1.x = 394;
                this.arrow1.y = 552;
                this.arrow2.visible = false;
                game.add.tween(this.butter_bowl).to({
                    x: 400,
                    y: 650
                }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {

                }, this);
            }
        }, this);
        this.butter_bowl.x = 700;


        this.n_group = game.add.group();

        this.salt = game.add.sprite(85, 630, 'salt');
        this.salt.anchor.setTo(0.5);
        this.salt.inputEnabled = true;
        this.salt.input.useHandCursor = true;
        this.salt.events.onInputDown.add(function() {
            this.arrow1.visible = false;
            this.arrow2.visible = true;
            this.arrow2.x = 254;
            this.arrow2.y = 392;

        }, this);
        this.salt.events.onInputUp.add(function() {
            if ((game.input.activePointer.x > 125 && game.input.activePointer.x < 372 && game.input.activePointer.y > 247 && game.input.activePointer.y < 611)) {
                this.arrow2.visible = false;
                this.salt.visible = false;
                this.salt_flow_ani.visible = true;
                this.salt_flow_ani.animations.add('salt_flow_ani', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]);
                this.salt_flow_ani.animations.play('salt_flow_ani', 10, false);
                game.add.tween(this.salt_flow_ani).to({
                    alpha: 0
                }, 1000, Phaser.Easing.Quadratic.Out, true, 800).onComplete.add(function() {
                    this.arrow1.visible = true;
                    this.arrow1.x = 420;
                    this.arrow1.y = 516;
                    this.kettle.inputEnabled = true;
                    this.kettle.input.useHandCursor = true;
                    this.kettle.input.enableDrag();
                }, this);




            } else {
                this.arrow1.visible = true;
                this.arrow1.x = 80;
                this.arrow1.y = 553;
                this.arrow2.visible = false;
                game.add.tween(this.salt).to({
                    x: 85,
                    y: 630
                }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {

                }, this);
            }
        }, this);
        this.n_group.add(this.salt);

        this.wisk = game.add.sprite(240, 660, 'wisk');
        this.wisk.anchor.setTo(0.5);
        this.wisk.scale.setTo(0.8);
        this.wisk.events.onInputDown.add(function() {
            this.arrow1.visible = false;
            this.arrow2.visible = true;
            this.arrow2.x = 246;
            this.arrow2.y = 383;
        }, this);
        this.wisk.events.onInputUp.add(function() {
            if ((game.input.activePointer.x > 125 && game.input.activePointer.x < 372 && game.input.activePointer.y > 247 && game.input.activePointer.y < 611)) {
                this.arrow2.visible = false;
                this.wisk.visible = false;
                this.bt_ani.visible = false;
                this.water_ani.animations.add('water_ani', [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29]);
                this.water_ani.animations.play('water_ani', 6, false).onComplete.add(function() {
                    game.add.tween(this.b_group).to({
                        x: -700
                    }, 1000, Phaser.Easing.Quadratic.Out, true, 500).onComplete.add(function() {
                        game.add.tween(this.mold_gp).to({
                            x: 0
                        }, 1000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                            this.arrow1.visible = true;
                            this.arrow1.x = 369;
                            this.arrow1.y = 486;
                            this.fall_ani.inputEnabled = true;
                            this.fall_ani.input.useHandCursor = true;
                            this.fall_ani.input.enableDrag();


                        }, this);
                    }, this);
                }, this);


            } else {
                this.arrow1.visible = true;
                this.arrow1.x = 235;
                this.arrow1.y = 605;
                this.arrow2.visible = false;
                game.add.tween(this.wisk).to({
                    x: 240,
                    y: 660
                }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {

                }, this);
            }
        }, this);
        this.n_group.add(this.wisk);

        this.kettle = game.add.sprite(430, 630, 'kettle');
        this.kettle.anchor.setTo(0.5);
        this.kettle.scale.setTo(0.8);
        this.kettle.events.onInputDown.add(function() {
            this.arrow1.visible = false;
            this.arrow2.visible = true;
            this.arrow2.x = 256;
            this.arrow2.y = 412;
        }, this);
        this.kettle.events.onInputUp.add(function() {
            if ((game.input.activePointer.x > 125 && game.input.activePointer.x < 372 && game.input.activePointer.y > 247 && game.input.activePointer.y < 611)) {
                this.arrow2.visible = false;
                this.kettle.visible = false;
                this.water_flow_ani.visible = true;
                this.water_flow_ani.animations.add('water_flow_ani');
                this.water_flow_ani.animations.play('water_flow_ani', 10, false)
                game.time.events.add(200, function() {
                    this.water_ani.visible = true;
                    this.water_ani.animations.add('water_ani', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
                    this.water_ani.animations.play('water_ani', 10, false)
                    game.add.tween(this.water_flow_ani).to({
                        alpha: 0
                    }, 1000, Phaser.Easing.Quadratic.Out, true, 1000).onComplete.add(function() {
                        this.arrow1.visible = true;
                        this.arrow1.x = 235;
                        this.arrow1.y = 605;
                        this.wisk.inputEnabled = true;
                        this.wisk.input.useHandCursor = true;
                        this.wisk.input.enableDrag();
                    }, this);
                }, this);

            } else {
                this.arrow1.visible = true;
                this.arrow1.x = 420;
                this.arrow1.y = 516;
                this.arrow2.visible = false;
                game.add.tween(this.kettle).to({
                    x: 430,
                    y: 630
                }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {

                }, this);
            }
        }, this);
        this.n_group.add(this.kettle);

        this.n_group.x = 700;

        /////////////////////////

        this.mold_gp = game.add.group();

        this.mold_ani = game.add.sprite(130, 600, 'mold_ani');
        this.mold_ani.anchor.setTo(0.5);
        this.mold_gp.add(this.mold_ani);

        // this.fall_ani =game.add.sprite(330,500,'fall_ani');
        // this.fall_ani.anchor.setTo(0.5);

        this.fall_ani = game.add.sprite(330, 500, 'fall_ani');
        this.fall_ani.anchor.setTo(0.5);
        this.fall_ani.inputEnabled = true;
        this.fall_ani.input.useHandCursor = true;
        this.fall_ani.input.enableDrag();
        this.fall_ani.events.onInputDown.add(function() {
            this.arrow1.visible = false;
            this.arrow2.visible = true;
            this.arrow2.x = 126;
            this.arrow2.y = 412;

        }, this);
        this.fall_ani.events.onInputUp.add(function() {
            if ((game.input.activePointer.x > 125 && game.input.activePointer.x < 372 && game.input.activePointer.y > 247 && game.input.activePointer.y < 611)) {
                this.fall_ani.inputEnabled = false;
                this.arrow2.visible = false;
                this.fall_ani.x = 230;
                this.fall_ani.y = 427;
                this.fall_ani.animations.add('fall_ani');
                this.fall_ani.animations.play('fall_ani', 10, false)

                game.time.events.add(500, function() {
                    this.mold_ani.animations.add('mold_ani');
                    this.mold_ani.animations.play('mold_ani', 10, false).onComplete.add(function() {
                        this.fall_ani.x = 330;
                        this.fall_ani.y = 500;
                        game.add.tween(this.fall_ani).to({
                            x: 700
                        }, 1000, Phaser.Easing.Quadratic.Out, true, 400).onComplete.add(function() {
                            game.add.tween(this.mold_ani).to({
                                x: -700
                            }, 1000, Phaser.Easing.Quadratic.Out, true, 400).onComplete.add(function() {
                                game.add.tween(this.ovan_gp).to({
                                    x: 0
                                }, 1000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                                    this.arrow1.visible = true;
                                    this.arrow1.x = 246;
                                    this.arrow1.y = 354;
                                    this.ovan_ani.inputEnabled = true;
                                    this.ovan_ani.input.useHandCursor = true;

                                }, this);
                            }, this);
                        }, this);
                    }, this);
                }, this);

            } else {
                this.arrow1.visible = true;
                this.arrow1.x = 369;
                this.arrow1.y = 468;
                this.arrow2.visible = false;
                game.add.tween(this.fall_ani).to({
                    x: 330,
                    y: 500
                }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {

                }, this);
            }
        }, this);
        this.mold_gp.add(this.fall_ani);



        this.mold_gp.x = 700;

        this.ovan_gp = game.add.group();


        this.count1 = 0;
        this.ovan_ani = game.add.sprite(230, 530, 'ovan_ani');
        this.ovan_ani.anchor.setTo(0.5);
        this.ovan_ani.inputEnabled = true;
        this.ovan_ani.input.useHandCursor = true;
        this.ovan_ani.events.onInputDown.add(function() {
            this.count1++
                if (this.count1 == 1) {
                    this.arrow1.visible = false;
                    this.ovan_ani.frame = 1;
                    this.arrow2.visible = true;
                    this.arrow2.x = 242;
                    this.arrow2.y = 586;
                    this.mold_ani01.inputEnabled = true;
                    this.mold_ani01.input.useHandCursor = true;
                    this.mold_ani01.input.enableDrag();
                }
            if (this.count1 == 2) {
                this.backed_pan.visible = true;
                this.ovan_ani.frame = 1;
                this.backed_pan.inputEnabled = true;
                this.backed_pan.input.useHandCursor = true;
            }

        }, this);
        this.ovan_gp.add(this.ovan_ani);

        this.backed_pan = game.add.sprite(230, 525, 'backed_pan');
        this.backed_pan.anchor.setTo(0.5);
        this.backed_pan.scale.setTo(0.8);
        this.backed_pan.events.onInputDown.add(function() {
            this.arrow1.visible = false;
            game.add.tween(this.backed_pan).to({
                x: 250,
                y: 680
            }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                game.add.tween(this.ovan_ani).to({
                    x: -700
                }, 1000, Phaser.Easing.Quadratic.Out, true, 800).onComplete.add(function() {
                    game.add.tween(this.backed_pan).to({
                        x: -700
                    }, 1000, Phaser.Easing.Quadratic.Out, true, 800).onComplete.add(function() {
                        game.add.tween(this.dec_group).to({
                            x: 0
                        }, 1000, Phaser.Easing.Quadratic.Out, true);
                        game.add.tween(this.p_group).to({
                            x: 0
                        }, 1000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                            this.arrow2.visible = true;
                            this.arrow2.x = 235;
                            this.arrow2.y = 572;
                            this.cake_1.inputEnabled = true;
                            this.cake_1.input.useHandCursor = true;
                            this.cake_1.input.enableDrag();

                        }, this);
                    }, this);
                }, this);
            }, this);


        }, this);
        this.backed_pan.visible = false;

        this.mold_ani01 = game.add.sprite(250, 680, 'mold_ani');
        this.mold_ani01.anchor.setTo(0.5);
        this.mold_ani01.scale.setTo(0.85);
        this.mold_ani01.frame = 14;
        this.mold_ani01.events.onInputDown.add(function() {
            this.arrow2.visible = false;
            this.arrow1.visible = true;
            this.arrow1.x = 240;
            this.arrow1.y = 358;
        }, this);
        this.mold_ani01.events.onInputUp.add(function() {
            if ((game.input.activePointer.x > 71 && game.input.activePointer.x < 416 && game.input.activePointer.y > 336 && game.input.activePointer.y < 624)) {
                this.ovan_ani.inputEnabled = false;
                this.fall_ani.inputEnabled = false;
                this.arrow1.visible = false;
                this.mold_ani01.visible = false;
                this.ovan_ani.frame = 2;
                game.time.events.add(200, function() {
                    this.ovan_ani.frame = 3;
                }, this);

                this.timer.scale.setTo(0.8);
                game.add.tween(this.timer).to({
                    x: 180
                }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {

                    game.time.events.add(400, function() {
                        this.ovan_ani.frame = 4;
                    }, this);
                    this.timer.animations.add('timer');
                    this.timer.animations.play('timer', 25, false).onComplete.add(function() {
                        game.add.tween(this.timer).to({
                            x: -80
                        }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                            this.arrow1.visible = true;
                            this.arrow1.x = 232;
                            this.arrow1.y = 366;
                            this.ovan_ani.inputEnabled = true;



                        }, this);
                    }, this);
                }, this);

            } else {
                this.arrow1.visible = false;
                this.arrow1.x = 242;
                this.arrow1.y = 586;
                this.arrow2.visible = true;
                game.add.tween(this.mold_ani01).to({
                    x: 250,
                    y: 680
                }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {

                }, this);
            }
        }, this);
        this.ovan_gp.add(this.mold_ani01);

        this.ovan_gp.x = 700;

        //2222222222222222222222222

        this.dec_group = game.add.group();


        this.table = game.add.sprite(240, 520, 'table');
        this.table.anchor.setTo(0.5);
        this.table.scale.setTo(0.9);
        this.dec_group.add(this.table);

        this.final_ani = game.add.sprite(235, 430, 'final_ani');
        this.final_ani.anchor.setTo(0.5);
        this.final_ani.scale.setTo(0.9);
        this.final_ani.visible = false;
        this.dec_group.add(this.final_ani);

        this.dec_group.x = 700;

        this.p_group = game.add.group();

        this.p1 = game.add.sprite(240, 710, 'plate');
        this.p1.anchor.setTo(0.5);
        this.p1.scale.setTo(1);
        this.p_group.add(this.p1);

        this.cake_1 = game.add.sprite(240, 700, 'cake_1');
        this.cake_1.anchor.setTo(0.5);
        this.cake_1.scale.setTo(0.8);
        // this.cake_1.inputEnabled =true;
        // this.cake_1.input.useHandCursor =true;
        // this.cake_1.input.enableDrag();
        this.cake_1.events.onInputDown.add(function() {
            this.arrow2.visible = false;
            this.arrow1.visible = true;
            this.arrow1.x = 237;
            this.arrow1.y = 300;

        }, this);
        this.cake_1.events.onInputUp.add(function() {
            if ((game.input.activePointer.x > 71 && game.input.activePointer.x < 377 && game.input.activePointer.y > 293 && game.input.activePointer.y < 470)) {
                this.arrow1.visible = false;
                this.cake_1.visible = false;
                this.final_ani.visible = true;
                game.add.tween(this.p_group).to({
                    x: -700
                }, 1000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                    game.add.tween(this.plate_group).to({
                        x: 0
                    }, 1000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                        this.arrow2.visible = true;
                        this.arrow2.x = 253;
                        this.arrow2.y = 587;
                        this.sheet.inputEnabled = true;
                        this.sheet.input.useHandCursor = true;
                        this.sheet.input.enableDrag();
                    }, this);
                }, this);

            } else {
                this.arrow2.visible = true;
                this.arrow2.x = 235;
                this.arrow2.y = 572;
                this.arrow1.visible = false;
                game.add.tween(this.cake_1).to({
                    x: 240,
                    y: 700
                }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {

                }, this);
            }
        }, this);
        this.p_group.add(this.cake_1);

        this.p_group.x = 700;

        this.plate_group = game.add.group();

        this.plate = game.add.sprite(260, 700, 'plate');
        this.plate.anchor.setTo(0.5);
        this.plate_group.add(this.plate);

        this.sheet = game.add.sprite(250, 700, 'sheet');
        this.sheet.anchor.setTo(0.5);
        this.sheet.scale.setTo(0.9);
        // this.sheet.inputEnabled =true;
        //    this.sheet.input.useHandCursor =true;
        //    this.sheet.input.enableDrag();
        this.sheet.events.onInputDown.add(function() {
            this.arrow2.visible = false;
            this.arrow1.visible = true;
            this.arrow1.x = 253;
            this.arrow1.y = 290;

        }, this);
        this.sheet.events.onInputUp.add(function() {
            if ((game.input.activePointer.x > 71 && game.input.activePointer.x < 377 && game.input.activePointer.y > 293 && game.input.activePointer.y < 470)) {
                this.arrow1.visible = false;
                this.sheet.visible = false;
                this.final_ani.frame = 1;
                game.add.tween(this.plate_group).to({
                    x: -700
                }, 1000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                    game.add.tween(this.plate_group1).to({
                        x: 0
                    }, 1000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                        this.arrow2.visible = true;
                        this.arrow2.x = 255;
                        this.arrow2.y = 595;
                        this.scraber.inputEnabled = true;
                        this.scraber.input.useHandCursor = true;
                        this.scraber.input.enableDrag();
                    }, this);
                }, this);


            } else {
                this.arrow2.visible = true;
                this.arrow2.x = 253;
                this.arrow2.y = 587;
                this.arrow1.visible = false;
                game.add.tween(this.sheet).to({
                    x: 250,
                    y: 700
                }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {

                }, this);
            }
        }, this);
        this.plate_group.add(this.sheet);

        this.plate_group.x = 700;


        this.plate_group1 = game.add.group();

        this.plate1 = game.add.sprite(260, 700, 'plate');
        this.plate1.anchor.setTo(0.5);
        this.plate_group1.add(this.plate1);

        this.scraber = game.add.sprite(260, 700, 'scraber');
        this.scraber.anchor.setTo(0.5);
        // this.scraber.inputEnabled =true;
        //    this.scraber.input.useHandCursor =true;
        //    this.scraber.input.enableDrag();
        this.scraber.events.onInputDown.add(function() {
            this.arrow2.visible = false;
            this.arrow1.visible = true;
            this.arrow1.x = 253;
            this.arrow1.y = 290;

        }, this);
        this.scraber.events.onInputUp.add(function() {
            if ((game.input.activePointer.x > 71 && game.input.activePointer.x < 377 && game.input.activePointer.y > 293 && game.input.activePointer.y < 470)) {
                this.arrow1.visible = false;
                this.scraber.visible = false;
                this.final_ani.animations.add('final_ani', [2, 3, 4, 5, 6, 7, 8, 9, 10, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23]);
                this.final_ani.animations.play('final_ani', 5, false).onComplete.add(function() {
                    game.add.tween(this.plate_group1).to({
                        x: -700
                    }, 1000, Phaser.Easing.Quadratic.Out, true, 300).onComplete.add(function() {
                        game.add.tween(this.playbtn.scale).to({
                            x: 1,
                            y: 1
                        }, 1000, Phaser.Easing.Quadratic.Out, true, 800);

                    }, this);
                }, this);
            } else {
                this.arrow2.visible = true;
                this.arrow2.x = 255;
                this.arrow2.y = 595;
                this.arrow1.visible = false;
                game.add.tween(this.scraber).to({
                    x: 260,
                    y: 700
                }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {

                }, this);
            }
        }, this);
        this.plate_group1.add(this.scraber);

        this.plate_group1.x = 700;





        this.arrowgp = game.add.group();

        var arro2x = [37, 256, 430, 37, 459, 41, 449, 410];
        var arro2y = [155, 469, 165, 298, 291, 458, 438, 610];

        for (i = 1; i <= 8; i++) {
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
                // this.arrow3.angle =90;
            }
            if (i == 4) {
                this['arrow' + i].visible = false;
                // this.arrow4.angle=-90;

            }
            if (i == 5) {
                this['arrow' + i].visible = false;
                // this.arrow5.angle =90;
            }
            if (i == 6) {
                this['arrow' + i].visible = false;
                // this.arrow6.angle =-90;
            }
            if (i == 7) {
                // this['arrow'+i].visible=false;
                this.arrow7.angle = 90;
            }
            if (i == 8) {
                this['arrow' + i].visible = false;
            }
            this.arrowgp.add(this['arrow' + i]);

        }


        this.morebtn = game.add.sprite(85, 730, 'btn04');
        this.morebtn.anchor.setTo(0.5);
        this.morebtn.scale.setTo(1);
        this.morebtn.inputEnabled = true;
        this.morebtn.input.useHandCursor = true;
        this.morebtn.events.onInputUp.add(this.moreLink, this);
        this.morebtn.events.onInputOver.add(this.btnOver, this);
        this.morebtn.events.onInputOut.add(this.btnOut, this);

        this.playbtn = game.add.sprite(430, 730, 'btn05');
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
                this.arrow1.visible = true;
                this.arrow1.scale.setTo(0.8);
                this.arrow1.x = 82;
                this.arrow1.y = 499;
                this.flour0001.inputEnabled = true;
                this.flour0001.input.useHandCursor = true;
                this.flour0001.input.enableDrag();

            }, this);
        }


        this.logoVar = game.add.sprite(5, 5, 'logo');
        this.logoVar.scale.setTo(0.8);
        this.logoVar.inputEnabled = true
        this.logoVar.input.useHandCursor = true;
        this.logoVar.events.onInputUp.add(this.openLink, this);

        this.musicButton = game.add.sprite(427, 5, "soundicon");
        this.musicButton.scale.setTo(0.65);
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
        // console.log(game.input.activePointer.x+':'+game.input.activePointer.y);
        if (this.dummydrag) {
            this.dummyobject.x = game.input.activePointer.x;
            this.dummyobject.y = game.input.activePointer.y;
        }
    },
    openLink: function() {

    },
    moreLink: function() {

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
            MyShowAD('decoration');
        });

    },
}

// ffffffffff

Main.final_screen = function() {}

Main.final_screen.prototype = {
    create: function() {

        this.b_bg = game.add.sprite(0, 0, 'b_bg');


        this.jessica = game.add.sprite(100, 463.8, 'jessica');
        this.jessica.anchor.setTo(0.5);
        this.jessica.scale.setTo(0.85);

        this.jessica_txt0002 = game.add.sprite(250, 150, 'nn_text');
        this.jessica_txt0002.anchor.setTo(0.5);
        this.jessica_txt0002.angle = -10;
        this.jessica_txt0002.scale.setTo(1);
        this.jessica_txt0002.alpha = 0;

        this.t_group = game.add.group();

        this.t_backhair0001 = game.add.sprite(274.6, 425.45, 't_backhair000' + Main.tr_arr[0]);
        this.t_backhair0001.anchor.setTo(0.5);
        this.t_group.add(this.t_backhair0001);

        this.t_body = game.add.sprite(272.5, 503, 't_body');
        this.t_body.anchor.setTo(0.5);
        this.t_group.add(this.t_body);

        this.t_head = game.add.sprite(263.95, 236.8, 't_head');
        this.t_head.anchor.setTo(0.5);
        this.t_group.add(this.t_head);

        this.t_shoes0001 = game.add.sprite(274.1, 425.95, 't_shoes000' + Main.tr_arr[2]);
        this.t_shoes0001.anchor.setTo(0.5);
        this.t_group.add(this.t_shoes0001);

        this.t_dress0001 = game.add.sprite(273.7, 425.95, 't_dress000' + Main.tr_arr[1]);
        this.t_dress0001.anchor.setTo(0.5);
        this.t_group.add(this.t_dress0001);

        this.t_chain0001 = game.add.sprite(275.15, 425.8, 't_chain000' + Main.tr_arr[3]);
        this.t_chain0001.anchor.setTo(0.5);
        this.t_chain0001.alpha = 1;
        this.t_group.add(this.t_chain0001);

        this.t_fronthair0001 = game.add.sprite(271.95, 425.45, 't_fronthair000' + Main.tr_arr[0]);
        this.t_fronthair0001.anchor.setTo(0.5);
        this.t_group.add(this.t_fronthair0001);

        this.earing = game.add.sprite(274.1, 425.95, 'earing');
        this.earing.anchor.setTo(0.5);
        this.earing.alpha = 1;
        this.t_group.add(this.earing);

        this.earing11 = game.add.sprite(158, 425.95, 'earing');
        this.earing11.anchor.setTo(0.5);
        this.earing11.alpha = 1;
        this.t_group.add(this.earing11);

        this.h1_cap0001 = game.add.sprite(271.95, 425.45, 'h1_cap000' + Main.tr_arr[4]);
        this.h1_cap0001.anchor.setTo(0.5);
        this.h1_cap0001.alpha = 1;
        this.t_group.add(this.h1_cap0001);

        this.h2_cap0001 = game.add.sprite(271.95, 425.4, 'h2_cap000' + Main.tr_arr[4]);
        this.h2_cap0001.anchor.setTo(0.5);
        this.h2_cap0001.alpha = 1;
        this.t_group.add(this.h2_cap0001);

        this.h3_cap0001 = game.add.sprite(271.8, 425.6, 'h3_cap000' + Main.tr_arr[4]);
        this.h3_cap0001.anchor.setTo(0.5);
        this.h3_cap0001.alpha = 1;
        this.t_group.add(this.h3_cap0001);

        this.h4_cap0001 = game.add.sprite(271.95, 425.65, 'h4_cap000' + Main.tr_arr[4]);
        this.h4_cap0001.anchor.setTo(0.5);
        this.h4_cap0001.alpha = 1;
        this.t_group.add(this.h4_cap0001);

        this.h5_cap0001 = game.add.sprite(271.9, 425.6, 'h5_cap000' + Main.tr_arr[4]);
        this.h5_cap0001.anchor.setTo(0.5);
        this.h5_cap0001.alpha = 1;
        this.t_group.add(this.h5_cap0001);

        this.h6_cap0001 = game.add.sprite(272, 425.65, 'h6_cap000' + Main.tr_arr[4]);
        this.h6_cap0001.anchor.setTo(0.5);
        this.h6_cap0001.alpha = 1;
        this.t_group.add(this.h6_cap0001);

        this.t_group.scale.setTo(0.75);
        this.t_group.x = 60;
        this.t_group.y = 140;


        this.tom = game.add.sprite(430, 479, 'tom');
        this.tom.anchor.setTo(0.5);
        this.tom.scale.setTo(0.85);

        //  this.tom_txt =game.add.sprite(340,200,'tom_txt');
        // this.tom_txt.anchor.setTo(0.5);	
        // this.tom_txt.scale.setTo(0.75);	
        // this.tom_txt.alpha=0;	


        // this.taylor_txt0007 =game.add.sprite(370,200,'taylor_txt0007');
        // this.taylor_txt0007.anchor.setTo(0.5);	
        // this.taylor_txt0007.scale.setTo(0.65);	
        // this.taylor_txt0007.alpha=0;	

        this.taylor_txt0008 = game.add.sprite(370, 200, 'taylor_txt0008');
        this.taylor_txt0008.anchor.setTo(0.5);
        this.taylor_txt0008.scale.setTo(0.65);
        this.taylor_txt0008.alpha = 0;

        this.new_table = game.add.sprite(260, 750, 'new_table');
        this.new_table.anchor.setTo(0.5);

        this.dec_gp = game.add.group();

        this.dec_table0001 = game.add.sprite(197.9, 540.45, 'dec_table000' + Main.dec_arr[0]);
        this.dec_table0001.anchor.setTo(0.5);
        this.dec_gp.add(this.dec_table0001);

        this.cake0001 = game.add.sprite(197.95, 410, 'cake000' + Main.dec_arr[1]);
        this.cake0001.anchor.setTo(0.5);
        this.dec_gp.add(this.cake0001);

        this.dec0001 = game.add.sprite(196, 300, 'dec000' + Main.dec_arr[2]);
        this.dec0001.anchor.setTo(0.5);
        this.dec0001.scale.setTo(0.85);
        this.dec_gp.add(this.dec0001);

        this.dec_gp.scale.setTo(0.6);
        this.dec_gp.y = 280;
        this.dec_gp.x = 130;

        this.plate1 = game.add.sprite(84, 570, 'plate_2');
        this.plate1.anchor.setTo(0.5);

        this.desert = game.add.sprite(81, 570, 'desert');
        this.desert.anchor.setTo(0.5);
        this.desert.scale.setTo(0.24);

        this.knife = game.add.sprite(110, 630, 'knife');
        this.knife.anchor.setTo(0.5);

        this.tisuue = game.add.sprite(360, 600, 'tisuue');
        this.tisuue.anchor.setTo(0.5);

        this.plate2 = game.add.sprite(410, 550, 'plate1_1');
        this.plate2.anchor.setTo(0.5);

        this.fruit = game.add.sprite(410, 543, 'fruit');
        this.fruit.anchor.setTo(0.5);
        this.fruit.scale.setTo(0.2);

        this.juice1 = game.add.sprite(150, 610, 'juice');
        this.juice1.anchor.setTo(0.5);

        this.juice = game.add.sprite(395, 598.9, 'juice');
        this.juice.anchor.setTo(0.5);

        if (Main.tr_arr[0] == 1) {
            this.h1_cap0001.visible = true;
            this.h2_cap0001.visible = false;
            this.h3_cap0001.visible = false;
            this.h4_cap0001.visible = false;
            this.h5_cap0001.visible = false;
            this.h6_cap0001.visible = false;

        }
        if (Main.tr_arr[0] == 2) {
            this.h1_cap0001.visible = false;
            this.h2_cap0001.visible = true;
            this.h3_cap0001.visible = false;
            this.h4_cap0001.visible = false;
            this.h5_cap0001.visible = false;
            this.h6_cap0001.visible = false;

        }
        if (Main.tr_arr[0] == 3) {
            this.h1_cap0001.visible = false;
            this.h2_cap0001.visible = false;
            this.h3_cap0001.visible = true;
            this.h4_cap0001.visible = false;
            this.h5_cap0001.visible = false;
            this.h6_cap0001.visible = false;

        }
        if (Main.tr_arr[0] == 4) {
            this.h1_cap0001.visible = false;
            this.h2_cap0001.visible = false;
            this.h3_cap0001.visible = false;
            this.h4_cap0001.visible = true;
            this.h5_cap0001.visible = false;
            this.h6_cap0001.visible = false;

        }
        if (Main.tr_arr[0] == 5) {
            this.h1_cap0001.visible = false;
            this.h2_cap0001.visible = false;
            this.h3_cap0001.visible = false;
            this.h4_cap0001.visible = false;
            this.h5_cap0001.visible = true;
            this.h6_cap0001.visible = false;

        }
        if (Main.tr_arr[0] == 6) {
            this.h1_cap0001.visible = false;
            this.h2_cap0001.visible = false;
            this.h3_cap0001.visible = false;
            this.h4_cap0001.visible = false;
            this.h5_cap0001.visible = false;
            this.h6_cap0001.visible = true;

        }
        if (Main.tr_arr[0] == 4 || Main.tr_arr[0] == 6) {
            this.earing.visible = false;
        } else {
            this.earing.visible = true;
        }



        this.morebtn = game.add.sprite(85, 730, 'btn04');
        this.morebtn.anchor.setTo(0.5);
        // this.morebtn.scale.setTo(0);
        this.morebtn.inputEnabled = true;
        this.morebtn.input.useHandCursor = true;
        this.morebtn.events.onInputUp.add(this.moreLink, this);
        this.morebtn.events.onInputOver.add(this.btnOver, this);
        this.morebtn.events.onInputOut.add(this.btnOut, this);

        this.playbtn = game.add.sprite(430, 730, 'btn01');
        this.playbtn.anchor.setTo(0.5);
        this.playbtn.scale.setTo(0);
        this.playbtn.inputEnabled = true;
        this.playbtn.input.useHandCursor = true;
        this.playbtn.events.onInputUp.add(this.enterRoom, this);
        this.playbtn.events.onInputOver.add(this.btnOver, this);
        this.playbtn.events.onInputOut.add(this.btnOut, this);

        this.thumbGroup = game.add.group();
        game.load.crossOrigin = '*';
        /* this.randomId = game.rnd.integerInRange(0,  RelatedGames.length-1);
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
                // game.add.tween(this.jessica_txt0001).to({alpha:1}, 1000, Phaser.Easing.Quadratic.Out, true,800).onComplete.add(function(){
                // game.add.tween(this.jessica_txt0001).to({alpha:0}, 1000, Phaser.Easing.Quadratic.Out, true,2400).onComplete.add(function(){
                // game.add.tween(this.taylor_txt0007).to({alpha:1}, 1000, Phaser.Easing.Quadratic.Out, true,800).onComplete.add(function(){
                // game.add.tween(this.taylor_txt0007).to({alpha:0}, 1000, Phaser.Easing.Quadratic.Out, true,1600).onComplete.add(function(){
                game.add.tween(this.jessica_txt0002).to({
                    alpha: 1
                }, 1000, Phaser.Easing.Quadratic.Out, true, 800);
                // game.add.tween(this.tom_txt).to({alpha:1}, 1000, Phaser.Easing.Quadratic.Out, true,800);
                game.add.tween(this.jessica_txt0002).to({
                    alpha: 0
                }, 1000, Phaser.Easing.Quadratic.Out, true, 2400).onComplete.add(function() {
                    // game.add.tween(this.tom_txt).to({alpha:0}, 1000, Phaser.Easing.Quadratic.Out, true,2400).onComplete.add(function(){
                    game.add.tween(this.taylor_txt0008).to({
                        alpha: 1
                    }, 1000, Phaser.Easing.Quadratic.Out, true, 800).onComplete.add(function() {
                        game.add.tween(this.taylor_txt0008).to({
                            alpha: 0
                        }, 1000, Phaser.Easing.Quadratic.Out, true, 1800).onComplete.add(function() {
                            // game.add.tween(this.thumbGroup).to({y:0},700,Phaser.Easing.Quadratic.Out,true);
                            game.add.tween(this.playbtn.scale).to({
                                x: 1,
                                y: 1
                            }, 700, Phaser.Easing.Quadratic.Out, true);
                        }, this);
                    }, this);
                }, this);
            }, this);
            // },this);
            // },this);
            // },this);
            // },this);
        }


        this.logoVar = game.add.sprite(5, 5, 'logo');
        this.logoVar.scale.setTo(0.8);
        this.logoVar.inputEnabled = true
        this.logoVar.input.useHandCursor = true;
        this.logoVar.events.onInputUp.add(this.openLink, this);

        this.musicButton = game.add.sprite(427, 5, "soundicon");
        this.musicButton.scale.setTo(0.65);
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

    },
    openLink: function() {

    },
    moreLink: function() {

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
            Main.tr_arr = [1, 1, 1, 1, 1];
            Main.dec_arr = [1, 1, 1];
            MyShowAD('intro');
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
game.state.add('intro', Main.intro);
game.state.add('intro1', Main.intro1);
game.state.add('dressup', Main.dressup);
game.state.add('cooking', Main.cooking);
game.state.add('decoration', Main.decoration);
game.state.add('new_dressup', Main.new_dressup);
game.state.add('scene1', Main.scene1);
game.state.add('final_screen', Main.final_screen);

game.state.start('boot');