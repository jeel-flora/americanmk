function MyShowAD(state) {
    Main.music.pause();
    game.state.start(state);
    Main.music.resume();
    //YYGSDK.adsManager.request(YYG.TYPE.INTERSTITIAL,YYG.EventHandler.create(this,()=>{game.state.start(state);Main.music.resume();}),YYG.EventHandler.create(this,()=>{game.state.start(state);Main.music.resume();})); 
}
var game = new Phaser.Game(504, 800, Phaser.AUTO, 'gameContainer');
var Main = {
    music: null,
    shutterOn: [true],

    decoFlag: [1, 1, 1, 1, 1, 1, 1, 1, 1],


    shampooX: [150, 134, 166, 168, 140, 136, 131, 134, 159, 179, 205, 234, 212, 179, 244, 263, 266, 276, 290, 299, 275, 246, 307, 289, 244, 246, 280, 303, 319, 252, 191, 158],

    shampooY: [541, 508, 512, 482, 469, 433, 399, 360, 326, 307, 293, 296, 317, 334, 325, 300, 336, 359, 381,
        419, 448, 473, 458, 491, 505, 536, 527, 514, 481, 357, 348, 350
    ],



    soapX: [89, 62, 100, 128, 140, 147, 145, 168, 152, 201, 238, 264, 267, 214, 272, 283, 267, 268, 28, 305, 337, 358, 388, 337, 276, 305, 318, 228, 272, 254, 196, 168, 131, 116, 153, 179, 216, 241, 262, 230, 177, 177, 168, 168, 184, 216, 243, 244, 217, 185, 216, 211, 192, 228, 198, 228, 200],
    soapY: [568, 544, 532, 513, 480, 440, 393, 345, 363, 339, 342, 350, 379, 328, 411, 441, 464, 492, 515, 537, 569, 579, 572, 540, 552, 569, 588, 587, 595, 572, 579, 574, 569, 547, 547, 539, 540, 539, 523, 555, 507, 468, 435, 396, 366, 358, 380, 430, 416, 390, 387, 441, 420, 473, 488, 505, 505],




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
        game.load.spritesheet('soundicon', 'assets/soundicon.png', 77, 74);
        game.load.image('logo', 'assets/logo.png');
        game.load.spritesheet('effects', 'assets/effects.png', 141, 134);
        game.load.spritesheet('effectssd', 'assets/efftes012.png', 367, 335);

        game.load.image('morebtn', 'assets/buttons/morebtn.png');
        game.load.image('playbtn', 'assets/buttons/btn0003.png');
        game.load.image('resetbtn', 'assets/buttons/btn0001.png');
        game.load.image('donebtn', 'assets/buttons/btn0002.png');
        game.load.image('nextbtn', 'assets/buttons/btn0005.png');

        game.load.image('bbg', 'assets/getup/bbg.jpg');
        game.load.image('alarm', 'assets/getup/alarm.png');
        game.load.image('bedshit', 'assets/getup/bedshit.png');
        game.load.image('panel', 'assets/getup/panel.png');
        game.load.image('tbody', 'assets/getup/tbody.png');
        game.load.image('dress0001', 'assets/getup/dress0001.png');
        game.load.image('dress0002', 'assets/getup/dress0002.png');
        game.load.spritesheet('eye_blink', 'assets/getup/eye_blink.png', 151, 57, 5);
        game.load.spritesheet('timer', 'assets/getup/timer.png', 130, 133, 10);
        game.load.spritesheet('arrow', 'assets/arrow.png', 66, 89, 13);

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
        game.load.image('soap', 'assets/bathroom/soap.png');
        game.load.image('mouth0001', 'assets/bathroom/mouth0001.png');
        game.load.image('mouth0002', 'assets/bathroom/mouth0002.png');
        game.load.image('mouth0003', 'assets/bathroom/mouth0003.png');
        game.load.spritesheet('brush_ani', 'assets/bathroom/brush_ani.png', 284, 246, 9);
        game.load.spritesheet('eye_blink2', 'assets/bathroom/eye_blink2.png', 268, 101, 5);
        game.load.spritesheet('glass_ani', 'assets/bathroom/glass_ani.png', 175, 237, 15);
        game.load.spritesheet('water_spitting', 'assets/bathroom/water_spitting.png', 111, 260, 30);
        game.load.spritesheet('spray', 'assets/bathroom/spray.png', 207, 187, 15);
        game.load.spritesheet('arrow', 'assets/arrow.png', 66, 89, 13);

        game.load.image('tbg', 'assets/title/tbg.jpg');
        game.load.image('tbg2', 'assets/title/tbg2.jpg');
        game.load.image('shutterbg', 'assets/shutterbg.jpg');
        game.load.image('text', 'assets/title/text.png');
        game.load.image('betty', 'assets/title/betty.png');
        game.load.image('betty2', 'assets/title/betty2.png');
        game.load.image('oliver', 'assets/title/oliver.png');
        game.load.image('taylorb', 'assets/title/taylorb.png');
        game.load.image('tdog', 'assets/title/tdog.png');

        game.load.image('o_text1', 'assets/knockscene/o_text0001.png');
        game.load.image('o_text2', 'assets/knockscene/o_text0002.png');
        game.load.image('m_text1', 'assets/knockscene/m_text0001.png');
        game.load.image('m_text2', 'assets/knockscene/m_text0002.png');
        game.load.image('t_text1', 'assets/knockscene/t_text0001.png');
        game.load.image('t_text2', 'assets/knockscene/t_text0002.png');
        game.load.image('t_text3', 'assets/knockscene/t_text0003.png');
        game.load.image('t_text4', 'assets/knockscene/t_text0004.png');
        game.load.image('bgp1', 'assets/knockscene/bgp1.png');
        game.load.image('bgp2', 'assets/knockscene/bgp2.png');
        game.load.image('bgp3', 'assets/knockscene/bgp3.png');
        game.load.image('bmark', 'assets/knockscene/bmark.png');
        game.load.image('dmark', 'assets/knockscene/dmark.png');
        game.load.spritesheet('dog_ani', 'assets/knockscene/dog_ani.png', 243, 282, 11);
        game.load.spritesheet('dust_ani', 'assets/knockscene/dust_ani.png', 112, 113, 16);

        game.load.image('bdoll', 'assets/playscene/bdoll.png');
        game.load.image('bear', 'assets/playscene/bear.png');
        game.load.image('ptable', 'assets/playscene/ptable.png');
        game.load.image('ptbody1', 'assets/playscene/ptbody1.png');
        game.load.image('ptbody2', 'assets/playscene/ptbody2.png');
        game.load.image('thand', 'assets/playscene/thand.png');
        game.load.image('pbg', 'assets/playscene/pbg.jpg');
        game.load.spritesheet('hand_ani', 'assets/playscene/hand_ani.png', 214, 265, 5);
        game.load.spritesheet('hand2_ani', 'assets/playscene/hand2_ani.png', 223, 327, 5);

        game.load.image('clbg', 'assets/cleaning/clbg.jpg');
        game.load.image('b_bed', 'assets/cleaning/b_bed.png');
        game.load.image('cdust1', 'assets/cleaning/cdust1.png');
        game.load.image('cphoto', 'assets/cleaning/cphoto.png');
        game.load.image('chair1', 'assets/cleaning/chair1.png');
        game.load.image('chair2', 'assets/cleaning/chair2.png');
        game.load.image('ctable', 'assets/cleaning/ctable.png');
        game.load.image('ctable2', 'assets/cleaning/ctable2.png');
        game.load.image('cwater', 'assets/cleaning/cwater.png');
        game.load.image('dcleaner', 'assets/cleaning/dcleaner.png');
        game.load.image('dpicker', 'assets/cleaning/dpicker.png');
        game.load.image('dustbin', 'assets/cleaning/dustbin.png');
        game.load.image('ftrolly', 'assets/cleaning/ftrolly.png');
        game.load.image('lamp', 'assets/cleaning/lamp.png');
        game.load.image('light', 'assets/cleaning/light.png');
        game.load.image('paperball', 'assets/cleaning/paperball.png');
        game.load.image('scleaner', 'assets/cleaning/scleaner.png');
        game.load.image('sofa', 'assets/cleaning/sofa.png');
        game.load.image('trolly', 'assets/cleaning/trolly.png');
        game.load.image('wcleaner', 'assets/cleaning/wcleaner.png');
        game.load.image('sweb1', 'assets/cleaning/sweb1.png');
        game.load.image('sweb2', 'assets/cleaning/sweb2.png');
        game.load.image('clpanel', 'assets/cleaning/clpanel.png');

        game.load.image('book_keeper', 'assets/decoration/book_keeper.png');
        game.load.image('ipanel', 'assets/decoration/ipanel.png');
        game.load.image('line', 'assets/decoration/line.png');
        game.load.image('roof_light', 'assets/decoration/roof_light.png');
        game.load.image('window', 'assets/decoration/window.png');
        game.load.image('wkeeper', 'assets/decoration/wkeeper.png');
        game.load.image('wpic', 'assets/decoration/wpic.png');
        game.load.image('wpic2', 'assets/decoration/wpic2.png');
        game.load.image('rhole', 'assets/decoration/rhole.png');
        game.load.image('forwardbtn', 'assets/forwardbtn.png');

        for (i = 1; i <= 10; i++) {
            game.load.image('toy' + i, 'assets/cleaning/toy' + i + '.png');
            if (i <= 5) {
                game.load.image('chair000' + i, 'assets/decoration/chair000' + i + '.png');
                game.load.image('dhouse000' + i, 'assets/decoration/dhouse000' + i + '.png');
                game.load.image('floor000' + i, 'assets/decoration/floor000' + i + '.png');
                game.load.image('matt000' + i, 'assets/decoration/matt000' + i + '.png');
                game.load.image('roof000' + i, 'assets/decoration/roof000' + i + '.png');
                game.load.image('w_screen000' + i, 'assets/decoration/w_screen000' + i + '.png');
                game.load.image('wall000' + i, 'assets/decoration/wall000' + i + '.png');
            }
            if (i <= 6) {
                game.load.image('drawer000' + i, 'assets/decoration/drawer000' + i + '.png');
                game.load.image('rlight000' + i, 'assets/decoration/rlight000' + i + '.png');
            }

            if (i <= 9) {
                game.load.image('icon' + i, 'assets/decoration/icon' + i + '.png');
            }
        }


        //yard_sell1_assets
        game.load.image('y1_bg', 'assets/yard_sell1/y1_bg.jpg');
        game.load.image('y1_bg2', 'assets/yard_sell1/y1_bg2.png');
        game.load.image('y1_panel', 'assets/yard_sell1/y1_panel.png');
        game.load.image('y1_panel2', 'assets/yard_sell1/y1_panel2.png');
        game.load.image('y1_sell_text1', 'assets/yard_sell1/y1_sell_text1.png');
        game.load.image('y1_sell_text2', 'assets/yard_sell1/y1_sell_text2.png');
        game.load.image('y1_sell_text3', 'assets/yard_sell1/y1_sell_text3.png');
        game.load.image('y1_sell_text4', 'assets/yard_sell1/y1_sell_text4.png');
        game.load.image('y1_sell_text5', 'assets/yard_sell1/y1_sell_text5.png');
        game.load.image('y1_sell_text6', 'assets/yard_sell1/y1_sell_text6.png');
        game.load.image('y1_chr', 'assets/yard_sell1/y1_chr.png');

        //bathing_assets
        game.load.image('bth_bg', 'assets/bathing/bth_bg.jpg');
        game.load.image('b_table', 'assets/bathing/b_table.png');
        game.load.image('b_tool2', 'assets/bathing/b_tool2.png');
        game.load.image('b_tool5', 'assets/bathing/b_tool5.png');
        game.load.image('b_tool6', 'assets/bathing/b_tool6.png');
        game.load.image('b_tool7', 'assets/bathing/b_tool7.png');
        game.load.image('b_tool10', 'assets/bathing/b_tool10.png');
        game.load.image('b_tool11', 'assets/bathing/b_tool11.png');
        game.load.image('baby_toylor', 'assets/bathing/baby_toylor.png');
        game.load.image('bathing_tub1', 'assets/bathing/bathing_tub1.png');
        game.load.image('bathing_tub2', 'assets/bathing/bathing_tub2.png');
        game.load.image('self', 'assets/bathing/self.png');
        game.load.image('b_hand', 'assets/bathing/b_hand.png');
        game.load.image('b_tool12', 'assets/bathing/b_tool12.png');
        game.load.image('water2', 'assets/bathing/water2.png');
        game.load.image('water3', 'assets/bathing/water3.png');
        game.load.image('water4', 'assets/bathing/water4.png');
        game.load.image('water5', 'assets/bathing/water5.png');
        game.load.image('hair_buble', 'assets/bathing/hair_buble.png');
        // game.load.image('b_tool12','assets/bathing/b_tool12.png');
        game.load.spritesheet('b_mouse_hint', 'assets/bathing/b_mouse_hint.png', 240, 143, 40);
        game.load.spritesheet('b_tool1_ani', 'assets/bathing/b_tool1_ani.png', 162, 325, 33);
        game.load.spritesheet('b_tool3', 'assets/bathing/b_tool3.png', 168, 496, 27);
        game.load.spritesheet('b_tool4', 'assets/bathing/b_tool4.png', 216, 176, 12);
        game.load.spritesheet('b_water1', 'assets/bathing/b_water1.png', 448, 143, 5);
        game.load.spritesheet('b_water2', 'assets/bathing/b_water2.png', 448, 131, 5);
        game.load.spritesheet('shower', 'assets/bathing/shower.png', 151, 642, 20);
        game.load.spritesheet('tap', 'assets/bathing/tap.png', 124, 104, 4);
        game.load.spritesheet('timer01', 'assets/timer01.png', 160, 160, 60);
        //yard_sell2_assets
        game.load.image('y2_tag', 'assets/yard_sell2/y2_tag.png');
        game.load.image('y2_text_panel', 'assets/yard_sell2/y2_text_panel.png');
        for (i = 1; i <= 16; i++) {
            game.load.image('y2_' + i, 'assets/yard_sell2/y2_' + i + '.png')
            game.load.image('y2_tag' + i, 'assets/yard_sell2/y2_tag' + i + '.png')
        }


        //button_assets
        for (i = 1; i <= 6; i++) {

            game.load.image('btn000' + i, 'assets/buttons/btn000' + i + '.png');
        }

        game.load.spritesheet('arrow', 'assets/arrow.png', 66, 89, 13);
        game.load.image('f_img', 'assets/f_img.png');


        for (i = 0; i < RelatedGames.length; i++) {
            game.load.image('thumb_' + i, RelatedGames[i]["thumb"]);
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

            // MyShowAD('bathing'); 


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
        this.bg = game.add.sprite(0, 0, 'tbg');
        this.levelGroup.add(this.bg);

        this.fgroup = game.add.group();


        this.oliver = game.add.sprite(371.55, 442.1, 'oliver');
        this.oliver.anchor.setTo(0.5);
        this.fgroup.add(this.oliver);

        this.betty = game.add.sprite(132.15, 417.95, 'betty');
        this.betty.anchor.setTo(0.5);
        this.fgroup.add(this.betty);

        this.taylorb = game.add.sprite(250.85, 370.5, 'taylorb');
        this.taylorb.anchor.setTo(0.5);
        this.fgroup.add(this.taylorb);

        this.tdog = game.add.sprite(352.1, 435.95, 'tdog');
        this.tdog.anchor.setTo(0.5);
        this.fgroup.add(this.tdog);

        this.text = game.add.sprite(249.25, 543.35, 'text');
        this.text.anchor.setTo(0.5);

        this.mrect = game.add.graphics(0, 100);
        this.mrect.beginFill(0x000000, 0.5);
        this.mrect.drawRect(0, 0, 500, 400);
        this.fgroup.mask = this.mrect;


        game.add.tween(this.text.scale).to({
            x: 1.05,
            y: 1.05
        }, 700, Phaser.Easing.Linear.Out, true, 0, -1).yoyo(100, true);

        this.morebtn = game.add.sprite(75.55, 760, 'morebtn');
        this.morebtn.anchor.setTo(0.5);
        this.morebtn.inputEnabled = true;
        this.morebtn.input.useHandCursor = true;
        this.morebtn.events.onInputUp.add(this.moreLink, this);
        this.morebtn.events.onInputOver.add(this.btnOver, this);
        this.morebtn.events.onInputOut.add(this.btnOut, this);
        // this.levelGroup.add(this.morebtn);
        this.playbtn = game.add.sprite(431.4, 749.2, 'playbtn');
        this.playbtn.anchor.setTo(0.5);
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
        //YYGSDK.navigate("menu","logo");
    },
    moreLink: function() {
        // YYGSDK.navigate("menu","more");
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
        MyShowAD('wakeup_scene');
    },
}

Main.intro = function() {}

Main.intro.prototype = {
    create: function() {
        this.levelGroup = game.add.group();
        this.introbg = game.add.sprite(0, 0, 'introbg');
        this.levelGroup.add(this.introbg);
        this.morebtn = game.add.sprite(431.4, 749.2, 'morebtn');
        this.morebtn.anchor.setTo(0.5);
        this.morebtn.scale.setTo(0);
        this.morebtn.inputEnabled = true;
        this.morebtn.input.useHandCursor = true;
        this.morebtn.events.onInputUp.add(this.moreLink, this);
        this.morebtn.events.onInputOver.add(this.btnOver, this);
        this.morebtn.events.onInputOut.add(this.btnOut, this);
        this.levelGroup.add(this.morebtn);
        this.playbtn = game.add.sprite(75.55, 749.55, 'playbtn');
        this.playbtn.anchor.setTo(0.5);
        this.playbtn.scale.setTo(0);
        this.playbtn.inputEnabled = true;
        this.playbtn.input.useHandCursor = true;
        this.playbtn.events.onInputUp.add(this.enterRoom, this);
        this.playbtn.events.onInputOver.add(this.btnOver, this);
        this.playbtn.events.onInputOut.add(this.btnOut, this);
        this.levelGroup.add(this.playbtn);

        this.popup1 = game.add.sprite(220, 150, 'popup1');
        this.popup1.anchor.setTo(0.5);
        this.popup1.scale.setTo(0);
        this.levelGroup.add(this.popup1);

        this.popup2 = game.add.sprite(210, 180, 'popup2');
        this.popup2.anchor.setTo(0.5);
        this.popup2.scale.setTo(0);
        this.levelGroup.add(this.popup2);

        this.popup3 = game.add.sprite(220, 150, 'popup3');
        this.popup3.anchor.setTo(0.5);
        this.popup3.scale.setTo(0);
        this.levelGroup.add(this.popup3);


        if (Main.shutterOn[0]) {
            this.shutter = game.add.sprite(0, 0, 'titlebg');
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
            MyShowAD('elsaScreen');
        });

    },
}

Main.wakeup_scene = function() {}

Main.wakeup_scene.prototype = {
    create: function() {
        this.levelGroup = game.add.group();
        this.bg = game.add.sprite(0, 0, 'bbg');
        this.levelGroup.add(this.bg);

        this.bgroup = game.add.group();

        this.tbody = game.add.sprite(258.95, 411.35, 'tbody');
        this.tbody.anchor.setTo(0.5);
        this.bgroup.add(this.tbody);

        this.dress1 = game.add.sprite(260, 456, 'dress0001');
        this.dress1.anchor.setTo(0.5);
        this.bgroup.add(this.dress1);

        this.eye_blink = game.add.sprite(260, 272, 'eye_blink');
        this.eye_blink.anchor.setTo(0.5);
        this.eye_blink.frame = 4;
        this.bgroup.add(this.eye_blink);






        this.bedshit = game.add.sprite(259, 612.1, 'bedshit');
        this.bedshit.anchor.setTo(0.5);

        this.panel = game.add.sprite(254.6, 811.05, 'panel');
        this.panel.anchor.setTo(0.5);

        this.alrgp = game.add.group();

        this.alarm = game.add.sprite(248, 646.9, 'alarm');
        this.alarm.anchor.setTo(0.5);
        // this.alarm.inputEnabled = true;
        this.alarm.events.onInputDown.add(function() {
            this.arrow1.visible = false;
            this.alarm.inputEnabled = false;
            this.tweenl.stop();

            game.add.tween(this.playbtn.scale).to({
                x: 1,
                y: 1
            }, 700, Phaser.Easing.Quadratic.Out, true);
        }, this);
        this.alrgp.add(this.alarm);

        this.timer = game.add.sprite(247.1, 677.35, 'timer');
        this.timer.anchor.setTo(0.5);

        this.alrgp.add(this.timer);

        //  this.wcir1 = game.add.graphics(250,660);
        // this.wcir1.beginFill(0x000000,0.5);
        // this.wcir1.drawCircle(0,0,170);


        // this.dummydrag = true;

        // this.dummyobject= game.add.sprite(-100,0,'eye_blink');
        // this.dummyobject.anchor.setTo(0.5);

        var arro2x = [245, 595, 442, 705, 113, 410, 710];
        var arro2y = [511, 163, 414, 420, 402, 130, 440];

        for (i = 1; i <= 1; i++) {
            this['arrow' + i] = game.add.sprite(arro2x[i - 1], arro2y[i - 1], 'arrow');
            this['arrow' + i].anchor.setTo(0.5);
            this['arrow' + i].animations.add('arrow');
            this['arrow' + i].animations.play('arrow', 12, true);
            this['arrow' + i].visible = false;
            if (i == 2) {
                this['arrow' + i].angle = 90;
            }
            if (i == 1) {
                // this['arrow'+i].visible=true;
            }

        }



        this.morebtn = game.add.sprite(75.55, 762, 'morebtn');
        this.morebtn.anchor.setTo(0.5);
        this.morebtn.inputEnabled = true;
        this.morebtn.input.useHandCursor = true;
        this.morebtn.events.onInputUp.add(this.moreLink, this);
        this.morebtn.events.onInputOver.add(this.btnOver, this);
        this.morebtn.events.onInputOut.add(this.btnOut, this);
        // this.levelGroup.add(this.morebtn);
        this.playbtn = game.add.sprite(451.4, 747, 'donebtn');
        this.playbtn.anchor.setTo(0.5);
        this.playbtn.scale.setTo(0);
        this.playbtn.inputEnabled = true;
        this.playbtn.input.useHandCursor = true;
        this.playbtn.events.onInputUp.add(this.enterRoom, this);
        this.playbtn.events.onInputOver.add(this.btnOver, this);
        this.playbtn.events.onInputOut.add(this.btnOut, this);

        if (Main.shutterOn[0]) {
            this.shutter = game.add.sprite(0, 0, 'shutterbg');
            game.add.tween(this.shutter).to({
                y: -850
            }, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                this.timer.animations.add('timer');
                this.timer.animations.play('timer', 10, false).onComplete.add(function() {
                    this.tweenl = game.add.tween(this.alrgp).to({
                        x: [3, 0]
                    }, 150, Phaser.Easing.Quadratic.Out, true).loop();
                    game.time.events.add(500, function() {
                        this.alarm.inputEnabled = true;
                        this.arrow1.visible = true;
                        this.eye_blink.animations.add('eye_blink', [0, 1, 2, 3, 4, 3, 2, 1, 0]).onComplete.add(function() {
                            this.eye_blink.frame = 0;
                        }, this);
                        this.eye_blink.animations.play('eye_blink', 10, false);
                        game.time.events.loop(3000, this.updateyeblink, this);
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
    updateyeblink: function() {
        this.eye_blink.play('eye_blink', 10, false);
    },
    update: function() {
        if (this.dummydrag) {
            this.dummyobject.x = game.input.activePointer.x;
            this.dummyobject.y = game.input.activePointer.y;
            console.log(game.input.activePointer.x + ':' + game.input.activePointer.y);
        }

    },
    openLink: function() {
        // YYGSDK.navigate("game","logo");
    },
    moreLink: function() {
        // YYGSDK.navigate("game","more");
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
            MyShowAD('bathroom_scene');
        });

    },
}

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


        /* this.eye_blink2 = game.add.sprite(277,298,'eye_blink2');
         this.eye_blink2.anchor.setTo(0.5);       
         // this.eye_blink2.frame = 4;
         this.bgroup.add(this.eye_blink2); */

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
        // this.tpaste.inputEnabled=true;
        // this.tpaste.angle=80;
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
        // this.glass_ani.frame=6;
        this.glass_ani.visible = false;

        this.water_spitting = game.add.sprite(285, 501, 'water_spitting');
        this.water_spitting.anchor.setTo(0.5);
        this.water_spitting.visible = false;




        this.glass = game.add.sprite(581.9, 502.35, 'glass_ani');
        this.glass.anchor.setTo(0.5);
        // this.glass.visible=false;
        // this.glass.inputEnabled=true;
        // this.glass.input.enableDrag();
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
                        game.add.tween(this.bfoam).to({
                            alpha: 0
                        }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                            this.mouth0001.loadTexture('mouth0001');
                            game.add.tween(this.playbtn.scale).to({
                                x: 1,
                                y: 1
                            }, 700, Phaser.Easing.Quadratic.Out, true);
                        }, this);
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



        //  this.dummydrag = true;

        // this.dummyobject= game.add.sprite(-100,0,'arrow');
        // this.dummyobject.anchor.setTo(0.5);





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
                // this['arrow'+i].angle=90;
            }
            if (i == 1) {
                this['arrow' + i].visible = true;
            }

        }

        // this.dummydrag = true;

        // this.dummyobject= game.add.sprite(-100,0,'arrow');
        // this.dummyobject.anchor.setTo(0.5);


        game.physics.arcade.enable([this.dragCircle, this.strike1]);
        this.strike1.body.onCollide = new Phaser.Signal();
        this.strike1.body.onCollide.add(this.foamfun, this);

        game.physics.arcade.enable([this.dragCircle, this.strike2]);
        this.strike2.body.onCollide = new Phaser.Signal();
        this.strike2.body.onCollide.add(this.foamfun2, this);

        this.fcnt = 0;

        /*this.mcnt1=0;

        this.mcir = game.add.graphics(0,0);
        this.mcir.beginFill(0x666666,0);
        this.mcir.drawRect(0,0,800,600);
        this.mcir.inputEnabled=true;
        this.mcir.events.onInputDown.add(function(){
            this.mcnt1++;
          this['xcnt'+this.mcnt1]=game.input.activePointer.x;
          this['ycnt'+this.mcnt1]=game.input.activePointer.y;
        this.mcir = game.add.graphics(game.input.activePointer.x,game.input.activePointer.y);
        this.mcir.beginFill(0x000000,0.5);
        this.mcir.drawCircle(0,0,20);
        //  this.mcir = game.add.sprite(game.input.activePointer.x,game.input.activePointer.y,'scanner');
        // this.mcir.anchor.setTo(0.5);
        // this.mcir.scale.setTo(0.75);
        console.log(this['xcnt'+this.mcnt1]+':'+this['ycnt'+this.mcnt1]);
        //console.log(this['ycnt'+this.mcnt1]);

        },this);*/



        this.morebtn = game.add.sprite(75.55, 762, 'morebtn');
        this.morebtn.anchor.setTo(0.5);
        this.morebtn.inputEnabled = true;
        this.morebtn.input.useHandCursor = true;
        this.morebtn.events.onInputUp.add(this.moreLink, this);
        this.morebtn.events.onInputOver.add(this.btnOver, this);
        this.morebtn.events.onInputOut.add(this.btnOut, this);
        // this.levelGroup.add(this.morebtn);
        this.playbtn = game.add.sprite(451.4, 747, 'donebtn');
        this.playbtn.anchor.setTo(0.5);
        this.playbtn.scale.setTo(0);
        this.playbtn.inputEnabled = true;
        this.playbtn.input.useHandCursor = true;
        this.playbtn.events.onInputUp.add(this.enterRoom, this);
        this.playbtn.events.onInputOver.add(this.btnOver, this);
        this.playbtn.events.onInputOut.add(this.btnOut, this);

        if (Main.shutterOn[0]) {
            this.shutter = game.add.sprite(0, 0, 'shutterbg');
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
            console.log(game.input.activePointer.x + ':' + game.input.activePointer.y);
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
        // YYGSDK.navigate("game","logo");
    },
    moreLink: function() {
        // YYGSDK.navigate("game","more");
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
            MyShowAD('bathroom2_scene');
        });

    },
}
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

        this.eye_blink2 = game.add.sprite(277, 288, 'eye_blink2');
        this.eye_blink2.anchor.setTo(0.5);
        this.eye_blink2.frame = 4;
        this.bgroup.add(this.eye_blink2);

        this.ffoam = game.add.sprite(290, 300, 'ffoam');
        this.ffoam.anchor.setTo(0.5);
        this.ffoam.alpha = 0;

        this.fwater = game.add.sprite(281, 293, 'fwater');
        this.fwater.anchor.setTo(0.5);
        this.fwater.alpha = 0;

        this.bpanel = game.add.sprite(247, 727.15, 'bpanel');
        this.bpanel.anchor.setTo(0.5);

        this.soapdrag = false;

        this.soap = game.add.sprite(112.35, 635.3, 'soap');
        this.soap.anchor.setTo(0.5);
        // this.soap.inputEnabled=true;
        this.soap.events.onInputDown.add(function() {
            this.soap.inputEnabled = false;
            this.soapdrag = true;
            this.strike1.body.enable = true;
            this.arrow2.visible = true;
            this.arrow1.visible = false;

        }, this);

        this.spraydrag = false;

        this.spray = game.add.sprite(240, 565, 'spray');
        this.spray.anchor.setTo(0.5);
        this.spray.inputEnabled = true;
        this.spray.events.onInputDown.add(function() {
            this.spray.inputEnabled = false;
            this.spraydrag = true;
            this.arrow1.visible = false;
            this.arrow2.visible = true;

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
        // this.towel.inputEnabled=true;
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
        // this.bcir1.inputEnabled=true;
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
                            this.arrow1.visible = true;
                            this.arrow1.x = 112;
                            this.arrow1.y = 566;
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
        // this.bcir2.inputEnabled=true;
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
                // this['arrow'+i].angle=90;
            }
            if (i == 1) {
                this['arrow' + i].visible = true;
            }

        }

        // this.dummydrag = true;

        // this.dummyobject= game.add.sprite(-100,0,'arrow');
        // this.dummyobject.anchor.setTo(0.5);


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

        /*this.mcnt1=0;

        this.mcir = game.add.graphics(0,0);
        this.mcir.beginFill(0x666666,0);
        this.mcir.drawRect(0,0,800,600);
        this.mcir.inputEnabled=true;
        this.mcir.events.onInputDown.add(function(){
            this.mcnt1++;
          this['xcnt'+this.mcnt1]=game.input.activePointer.x;
          this['ycnt'+this.mcnt1]=game.input.activePointer.y;
        this.mcir = game.add.graphics(game.input.activePointer.x,game.input.activePointer.y);
        this.mcir.beginFill(0x000000,0.5);
        this.mcir.drawCircle(0,0,20);
        //  this.mcir = game.add.sprite(game.input.activePointer.x,game.input.activePointer.y,'scanner');
        // this.mcir.anchor.setTo(0.5);
        // this.mcir.scale.setTo(0.75);
        console.log(this['xcnt'+this.mcnt1]+':'+this['ycnt'+this.mcnt1]);
        //console.log(this['ycnt'+this.mcnt1]);

        },this);*/



        this.morebtn = game.add.sprite(75.55, 762, 'morebtn');
        this.morebtn.anchor.setTo(0.5);
        this.morebtn.inputEnabled = true;
        this.morebtn.input.useHandCursor = true;
        this.morebtn.events.onInputUp.add(this.moreLink, this);
        this.morebtn.events.onInputOver.add(this.btnOver, this);
        this.morebtn.events.onInputOut.add(this.btnOut, this);
        // this.levelGroup.add(this.morebtn);
        this.playbtn = game.add.sprite(451.4, 747, 'donebtn');
        this.playbtn.anchor.setTo(0.5);
        this.playbtn.scale.setTo(0);
        this.playbtn.inputEnabled = true;
        this.playbtn.input.useHandCursor = true;
        this.playbtn.events.onInputUp.add(this.enterRoom, this);
        this.playbtn.events.onInputOver.add(this.btnOver, this);
        this.playbtn.events.onInputOut.add(this.btnOut, this);

        if (Main.shutterOn[0]) {
            this.shutter = game.add.sprite(0, 0, 'shutterbg');
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
                this.dragCircle.y = 800;
                game.add.tween(this.soap).to({
                    x: 112.35,
                    y: 635.3
                }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
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
                    game.add.tween(this.playbtn.scale).to({
                        x: 1,
                        y: 1
                    }, 700, Phaser.Easing.Quadratic.Out, true);
                    this.eye_blink2.y = 298;
                    this.eye_blink2.animations.add('eye_blink', [4, 3, 2, 1, 0]).onComplete.add(function() {
                        this.eye_blink2.frame = 0;
                    }, this);
                    this.eye_blink2.animations.play('eye_blink', 10, false);
                    // game.time.events.loop(3000,this.updateyeblink,this);

                }, this);

            }
        }, this);

    },
    updateyeblink: function() {
        this.eye_blink2.play('eye_blink', 10, false);
    },
    update: function() {
        if (this.dummydrag) {
            this.dummyobject.x = game.input.activePointer.x;
            this.dummyobject.y = game.input.activePointer.y;
            console.log(game.input.activePointer.x + ':' + game.input.activePointer.y);
        }
        if (this.spraydrag) {
            this.spray.x = game.input.activePointer.x - 40;
            this.spray.y = game.input.activePointer.y + 60;
        }

        if (this.soapdrag) {
            this.soap.x = game.input.activePointer.x;
            this.soap.y = game.input.activePointer.y;
            this.dragCircle.x = game.input.activePointer.x;
            this.dragCircle.y = game.input.activePointer.y;
        }
        if (this.toweldrag) {
            this.towel.x = game.input.activePointer.x;
            this.towel.y = game.input.activePointer.y + 60;
            this.dragCircle.x = game.input.activePointer.x;
            this.dragCircle.y = game.input.activePointer.y;
        }
        game.physics.arcade.collide(this.dragCircle, this.strike1);
        game.physics.arcade.collide(this.dragCircle, this.strike2);
        game.physics.arcade.collide(this.dragCircle, this.strike3);
        game.physics.arcade.collide(this.dragCircle, this.strike4);


    },
    openLink: function() {
        // YYGSDK.navigate("game","logo");
    },
    moreLink: function() {
        // YYGSDK.navigate("game","more");
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
            MyShowAD('play_screen');
        });

    },
}
Main.play_screen = function() {}

Main.play_screen.prototype = {
    create: function() {
        this.levelGroup = game.add.group();
        this.bg = game.add.sprite(0, 0, 'pbg');
        this.levelGroup.add(this.bg);

        this.tgroup = game.add.group();

        this.ptbody1 = game.add.sprite(248.6, 477.45, 'ptbody1');
        this.ptbody1.anchor.setTo(0.5);
        this.tgroup.add(this.ptbody1);

        this.thand = game.add.sprite(248.6, 477.45, 'thand');
        this.thand.anchor.setTo(0.5);
        this.tgroup.add(this.thand);

        this.ptbody2 = game.add.sprite(246.25, 415.1, 'ptbody2');
        this.ptbody2.anchor.setTo(0.5);
        this.tgroup.add(this.ptbody2);

        this.hand_ani = game.add.sprite(249.4, 300, 'hand_ani');
        this.hand_ani.anchor.setTo(0.5);
        this.hand_ani.visible = false;
        // this.hand_ani.animations.add('hand_ani');
        // this.hand_ani.animations.play('hand_ani',10,true);
        this.tgroup.add(this.hand_ani);

        this.hand2_ani = game.add.sprite(249.4, 300, 'hand2_ani');
        this.hand2_ani.anchor.setTo(0.5);
        this.hand2_ani.visible = false;
        // this.hand2_ani.animations.add('hand2_ani');
        // this.hand2_ani.animations.play('hand2_ani',10,true);
        this.tgroup.add(this.hand2_ani);

        this.ptable = game.add.sprite(259.35, 718.35, 'ptable');
        this.ptable.anchor.setTo(0.5);

        this.bear = game.add.sprite(172.8, 556.45, 'bear');
        this.bear.anchor.setTo(0.5);
        // this.bear.inputEnabled=true;
        this.bear.events.onInputDown.add(function() {
            this.bear.inputEnabled = false;
            this.bearDrag = true;
            this.arrow1.visible = false;
            this.arrow2.visible = true;

        }, this);

        this.bdollDrag = false;

        this.bdoll = game.add.sprite(324.15, 569.05, 'bdoll');
        this.bdoll.anchor.setTo(0.5);
        this.bdoll.inputEnabled = true;
        this.bdoll.events.onInputDown.add(function() {
            this.bdoll.inputEnabled = false;
            this.bdollDrag = true;
            this.arrow1.visible = false;
            this.arrow2.visible = true;

        }, this);

        this.dcnt = 0;

        this.rect1 = game.add.graphics(200, 370);
        this.rect1.beginFill(0x000000, 0);
        this.rect1.drawRect(0, 0, 100, 100);
        this.rect1.inputEnabled = true;
        this.rect1.events.onInputDown.add(function() {
            this.dcnt++;
            this.arrow2.visible = false;
            this.thand.visible = false;
            if (this.dcnt == 1) {
                this.bdollDrag = false;
                this.bdoll.visible = false;
                this.hand_ani.visible = true;
                this.hand_ani.animations.add('hand_ani', [0, 1, 2, 3, 4, 3, 2, 1, 0, 1, 2, 3, 4, 3, 2, 1, 0]);
                this.hand_ani.animations.play('hand_ani', 10, false).onComplete.add(function() {
                    // game.add.tween(this.playbtn.scale).to({x:1,y:1},700,Phaser.Easing.Quadratic.Out,true);
                    this.hand_ani.visible = false;
                    this.thand.visible = true;
                    this.bdoll.visible = true;
                    this.bdoll.x = 324.15;
                    this.bdoll.y = 569.05;
                    this.bear.inputEnabled = true;
                    this.arrow1.visible = true;
                    this.arrow1.x = 175;
                    this.arrow1.y = 416;

                }, this);
            }

            if (this.dcnt == 2) {
                this.bear.visible = false;
                this.bearDrag = false;
                this.hand2_ani.visible = true;
                this.hand2_ani.animations.add('hand2_ani', [0, 1, 2, 3, 4, 3, 2, 1, 0, 1, 2, 3, 4, 3, 2, 1, 0]);
                this.hand2_ani.animations.play('hand2_ani', 10, false).onComplete.add(function() {
                    game.add.tween(this.playbtn.scale).to({
                        x: 1,
                        y: 1
                    }, 700, Phaser.Easing.Quadratic.Out, true);
                    this.thand.visible = true;
                    this.hand2_ani.visible = false;
                    this.bear.visible = true;
                    this.bear.x = 172.8;
                    this.bear.y = 556.45;

                }, this);
            }

        }, this);

        // this.dummydrag = true;

        // this.dummyobject= game.add.sprite(-100,0,'arrow');
        // this.dummyobject.anchor.setTo(0.5);



        var arro2x = [323, 252, 442, 705, 113, 410, 710];
        var arro2y = [433, 334, 414, 420, 402, 130, 440];

        for (i = 1; i <= 2; i++) {
            this['arrow' + i] = game.add.sprite(arro2x[i - 1], arro2y[i - 1], 'arrow');
            this['arrow' + i].anchor.setTo(0.5);
            this['arrow' + i].animations.add('arrow');
            this['arrow' + i].animations.play('arrow', 12, true);
            this['arrow' + i].visible = false;
            if (i == 2) {
                // this['arrow'+i].angle=90;
            }
            if (i == 1) {
                this['arrow' + i].visible = true;
            }

        }

        this.morebtn = game.add.sprite(75.55, 760, 'morebtn');
        this.morebtn.anchor.setTo(0.5);
        this.morebtn.inputEnabled = true;
        this.morebtn.input.useHandCursor = true;
        this.morebtn.events.onInputUp.add(this.moreLink, this);
        this.morebtn.events.onInputOver.add(this.btnOver, this);
        this.morebtn.events.onInputOut.add(this.btnOut, this);
        // this.levelGroup.add(this.morebtn);
        this.playbtn = game.add.sprite(451.4, 740, 'donebtn');
        this.playbtn.anchor.setTo(0.5);
        this.playbtn.scale.setTo(0);
        this.playbtn.inputEnabled = true;
        this.playbtn.input.useHandCursor = true;
        this.playbtn.events.onInputUp.add(this.enterRoom, this);
        this.playbtn.events.onInputOver.add(this.btnOver, this);
        this.playbtn.events.onInputOut.add(this.btnOut, this);

        if (Main.shutterOn[0]) {
            this.shutter = game.add.sprite(0, 0, 'shutterbg');
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
    update: function() {
        if (this.dummydrag) {
            this.dummyobject.x = game.input.activePointer.x;
            this.dummyobject.y = game.input.activePointer.y;
            console.log(game.input.activePointer.x + ':' + game.input.activePointer.y);
        }

        if (this.bdollDrag) {
            this.bdoll.x = game.input.activePointer.x;
            this.bdoll.y = game.input.activePointer.y;
        }

        if (this.bearDrag) {
            this.bear.x = game.input.activePointer.x;
            this.bear.y = game.input.activePointer.y;
        }
    },
    openLink: function() {
        //  YYGSDK.navigate("game","logo");
    },
    moreLink: function() {
        // YYGSDK.navigate("game","more");
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
            MyShowAD('knock_scene');
        });

    },
}

Main.knock_scene = function() {}

Main.knock_scene.prototype = {
    create: function() {
        this.levelGroup = game.add.group();
        this.introbg = game.add.sprite(0, 0, 'tbg2');
        this.levelGroup.add(this.introbg);


        this.bgp1 = game.add.sprite(-252, 150.5, 'bgp1');
        this.bgp1.anchor.setTo(0.5);

        this.bgp2 = game.add.sprite(782, 351, 'bgp2');
        this.bgp2.anchor.setTo(0.5);

        this.bgp3 = game.add.sprite(-252, 640, 'bgp3');
        this.bgp3.anchor.setTo(0.5);





        this.morebtn = game.add.sprite(75.55, 762, 'morebtn');
        this.morebtn.anchor.setTo(0.5);
        // this.morebtn.scale.setTo(0);
        this.morebtn.inputEnabled = true;
        this.morebtn.input.useHandCursor = true;
        this.morebtn.events.onInputUp.add(this.moreLink, this);
        this.morebtn.events.onInputOver.add(this.btnOver, this);
        this.morebtn.events.onInputOut.add(this.btnOut, this);
        // this.levelGroup.add(this.morebtn);
        this.playbtn = game.add.sprite(451.4, 747, 'nextbtn');
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
            }, 2000, Phaser.Easing.Quadratic.Out, true);
        }




        //  this.dummydrag = true;

        // this.dummyobject= game.add.sprite(348,301,'phone');
        // this.dummyobject.anchor.setTo(0.5);
        // this.dummyobject.scale.x=0.9;
        // this.dummyobject.scale.y=0.6;
        // this.dummyobject.angle=-70;


        if (Main.shutterOn[0]) {
            this.shutter = game.add.sprite(0, 0, 'shutterbg');
            game.add.tween(this.shutter).to({
                y: -850
            }, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                game.add.tween(this.bgp1).to({
                    x: 252
                }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                    game.add.tween(this.bgp2).to({
                        x: 252
                    }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                        game.add.tween(this.bgp3).to({
                            x: 252
                        }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                            game.add.tween(this.playbtn.scale).to({
                                x: 1,
                                y: 1
                            }, 700, Phaser.Easing.Quadratic.Out, true);
                            // this.startPopUp();
                        }, this);
                    }, this);
                }, this);
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
        }, 700, Phaser.Easing.Quadratic.Out, true, 2500).onComplete.add(this.bringBottons, this);
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
    update: function() {
        if (this.dummydrag) {
            this.dummyobject.x = game.input.activePointer.x;
            this.dummyobject.y = game.input.activePointer.y;
            console.log(game.input.activePointer.x + ':' + game.input.activePointer.y);
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
            MyShowAD('dirt_scene');
        });

    },
}

Main.dirt_scene = function() {}

Main.dirt_scene.prototype = {
    create: function() {
        this.levelGroup = game.add.group();
        this.bg = game.add.sprite(0, 0, 'pbg');
        this.levelGroup.add(this.bg);


        this.oliver = game.add.sprite(671.55, 442.1, 'oliver');
        this.oliver.anchor.setTo(0.5);

        this.betty2 = game.add.sprite(-132.15, 417.95, 'betty2');
        this.betty2.anchor.setTo(0.5);

        this.tgroup = game.add.group();

        this.ptbody1 = game.add.sprite(248.6, 477.45, 'ptbody1');
        this.ptbody1.anchor.setTo(0.5);
        this.tgroup.add(this.ptbody1);

        this.thand = game.add.sprite(248.6, 477.45, 'thand');
        this.thand.anchor.setTo(0.5);
        this.tgroup.add(this.thand);

        this.ptbody2 = game.add.sprite(246.25, 415.1, 'ptbody2');
        this.ptbody2.anchor.setTo(0.5);
        this.tgroup.add(this.ptbody2);


        this.ptable = game.add.sprite(259.35, 718.35, 'ptable');
        this.ptable.anchor.setTo(0.5);

        this.bear = game.add.sprite(172.8, 556.45, 'bear');
        this.bear.anchor.setTo(0.5);

        this.bmark = game.add.sprite(210, 610, 'bmark');
        this.bmark.anchor.setTo(0.5);
        this.bmark.angle = 90;
        this.bmark.alpha = 0;

        this.bdollDrag = false;

        this.bdoll = game.add.sprite(324.15, 569.05, 'bdoll');
        this.bdoll.anchor.setTo(0.5);
        // this.bdoll.inputEnabled=true;

        this.dmark = game.add.sprite(293, 644, 'dmark');
        this.dmark.anchor.setTo(0.5);
        this.dmark.angle = 90;
        this.dmark.alpha = 0;

        this.dog_ani = game.add.sprite(154, 539, 'dog_ani');
        this.dog_ani.anchor.setTo(0.5);
        this.dog_ani.animations.add('dog_ani', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]);
        this.dog_ani.animations.play('dog_ani', 10, false).onComplete.add(function() {
            game.add.tween(this.dog_ani).to({
                x: 230
            }, 600, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                // game.add.tween(this.bmark).to({alpha:1},1600,Phaser.Easing.Quadratic.Out,true);
                this.dog_ani.animations.add('dog_ani', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]);
                this.dog_ani.animations.play('dog_ani', 10, false);
                game.time.events.add(500, function() {
                    this.dust_ani2.visible = true;
                    this.dust_ani2.animations.add('dust_ani');
                    this.dust_ani2.animations.play('dust_ani', 11, false);
                    game.add.tween(this.bdoll).to({
                        angle: 90,
                        x: 310,
                        y: 650
                    }, 600, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                        game.add.tween(this.dmark).to({
                            alpha: 1
                        }, 1600, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                            this.startPopUp();

                        }, this);
                    }, this);
                }, this);
            }, this);
        }, this);

        this.dust_ani = game.add.sprite(221, 650, 'dust_ani');
        this.dust_ani.anchor.setTo(0.5);
        this.dust_ani.visible = false;

        this.dust_ani2 = game.add.sprite(314, 650, 'dust_ani');
        this.dust_ani2.anchor.setTo(0.5);
        this.dust_ani2.visible = false;


        game.time.events.add(500, function() {
            this.dust_ani.visible = true;
            this.dust_ani.animations.add('dust_ani');
            this.dust_ani.animations.play('dust_ani', 11, false);
            game.add.tween(this.bear).to({
                angle: 90,
                x: 230,
                y: 600
            }, 600, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                game.add.tween(this.bmark).to({
                    alpha: 1
                }, 1600, Phaser.Easing.Quadratic.Out, true);
            }, this);
        }, this);


        this.popup1 = game.add.sprite(141, 174, 't_text1');
        this.popup1.anchor.setTo(0.5);
        this.popup1.scale.setTo(0);

        this.popup2 = game.add.sprite(141, 174, 't_text2');
        this.popup2.anchor.setTo(0.5);
        this.popup2.scale.setTo(0);

        this.popup3 = game.add.sprite(266, 98, 'o_text1');
        this.popup3.anchor.setTo(0.5);
        this.popup3.scale.setTo(0);



        // this.dummydrag = true;

        // this.dummyobject= game.add.sprite(-100,0,'o_text1');
        // this.dummyobject.anchor.setTo(0.5);
        // this.dummyobject.scale.setTo(0.8);



        var arro2x = [323, 252, 442, 705, 113, 410, 710];
        var arro2y = [433, 334, 414, 420, 402, 130, 440];

        for (i = 1; i <= 2; i++) {
            this['arrow' + i] = game.add.sprite(arro2x[i - 1], arro2y[i - 1], 'arrow');
            this['arrow' + i].anchor.setTo(0.5);
            this['arrow' + i].animations.add('arrow');
            this['arrow' + i].animations.play('arrow', 12, true);
            this['arrow' + i].visible = false;
            if (i == 2) {
                // this['arrow'+i].angle=90;
            }
            if (i == 1) {
                // this['arrow'+i].visible=true;
            }

        }

        this.morebtn = game.add.sprite(75.55, 760, 'morebtn');
        this.morebtn.anchor.setTo(0.5);
        this.morebtn.inputEnabled = true;
        this.morebtn.input.useHandCursor = true;
        this.morebtn.events.onInputUp.add(this.moreLink, this);
        this.morebtn.events.onInputOver.add(this.btnOver, this);
        this.morebtn.events.onInputOut.add(this.btnOut, this);
        // this.levelGroup.add(this.morebtn);
        this.playbtn = game.add.sprite(451.4, 740, 'donebtn');
        this.playbtn.anchor.setTo(0.5);
        this.playbtn.scale.setTo(0);
        this.playbtn.inputEnabled = true;
        this.playbtn.input.useHandCursor = true;
        this.playbtn.events.onInputUp.add(this.enterRoom, this);
        this.playbtn.events.onInputOver.add(this.btnOver, this);
        this.playbtn.events.onInputOut.add(this.btnOut, this);

        if (Main.shutterOn[0]) {
            this.shutter = game.add.sprite(0, 0, 'shutterbg');
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
    update: function() {
        if (this.dummydrag) {
            this.dummyobject.x = game.input.activePointer.x;
            this.dummyobject.y = game.input.activePointer.y;
            console.log(game.input.activePointer.x + ':' + game.input.activePointer.y);
        }

        if (this.bdollDrag) {
            this.bdoll.x = game.input.activePointer.x;
            this.bdoll.y = game.input.activePointer.y;
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
        }, 700, Phaser.Easing.Quadratic.Out, true, 1000);
        game.add.tween(this.betty2).to({
            x: 132
        }, 1600, Phaser.Easing.Quadratic.Out, true)
        game.add.tween(this.oliver).to({
            x: 371
        }, 1600, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
            game.add.tween(this.popup2.scale).to({
                x: 1,
                y: 1
            }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(this.bringPopUp3, this);
        }, this);
    },
    bringPopUp3: function() {
        game.add.tween(this.popup2).to({
            alpha: 0
        }, 700, Phaser.Easing.Quadratic.Out, true, 2500)
        game.add.tween(this.popup3.scale).to({
            x: 0.8,
            y: 0.8
        }, 700, Phaser.Easing.Quadratic.Out, true, 3000).onComplete.add(this.bringBottons, this);
    },
    bringBottons: function() {
        // game.add.tween(this.morebtn.scale).to({x:1, y:1}, 700, Phaser.Easing.Quadratic.Out, true);
        game.add.tween(this.playbtn.scale).to({
            x: 1,
            y: 1
        }, 700, Phaser.Easing.Quadratic.Out, true);
    },
    openLink: function() {
        //  YYGSDK.navigate("game","logo");
    },
    moreLink: function() {
        //  YYGSDK.navigate("game","more");
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
            MyShowAD('cleaning_screen');
        });

    },
}

Main.cleaning_screen = function() {}

Main.cleaning_screen.prototype = {
    create: function() {
        this.levelGroup = game.add.group();
        this.bg = game.add.sprite(0, 0, 'clbg');
        this.levelGroup.add(this.bg);


        this.oliver = game.add.sprite(671.55, 442.1, 'oliver');
        this.oliver.anchor.setTo(0.5);

        var toyx = [237.35, 232.8, 234.35, 127.25];
        var toyy = [331.4, 381.4, 429.35, 571.8];

        this.fincnt = 0;

        this.tycnt = 0;

        for (i = 1; i <= 3; i++) {
            this['toy' + i] = game.add.sprite(toyx[i - 1], toyy[i - 1], 'toy' + i);
            this['toy' + i].anchor.setTo(0.5);
            if (i == 1) {
                // this['toy'+i].inputEnabled=true;
                // this['toy'+i].input.enableDrag();
            }
            this['toy' + i].id = i;
            this['toy' + i].events.onInputDown.add(function(evt) {
                game.world.bringToTop(this['toy' + evt.id]);
                // this.arrow1.visible=false;
                if (this.tycnt == 0) {
                    this.tycnt = 1;
                    game.add.tween(this.ftrolly).to({
                        y: 799.85
                    }, 500, Phaser.Easing.Quadratic.Out, true);
                    game.add.tween(this.trolly).to({
                        y: 791.8
                    }, 500, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                        this.arrow2.visible = true;
                        this.arrow2.x = 216;
                        this.arrow2.y = 664;
                    }, this);
                } else {
                    this.arrow2.visible = true;
                    this.arrow2.x = 216;
                    this.arrow2.y = 664;
                }
            }, this);
            this['toy' + i].events.onInputUp.add(function(evt) {
                this['toy' + evt.id].inputEnabled = false;
                this.arrow2.visible = false;
                if ((game.input.activePointer.x > 149 && game.input.activePointer.x < 329 && game.input.activePointer.y > 669 && game.input.activePointer.y < 783)) {
                    this.tycnt++;
                    this.fincnt++;
                    this['toy' + evt.id].visible = false;
                    this.ditems = game.add.sprite(evt.x, evt.y, 'toy' + evt.id);
                    this.ditems.anchor.setTo(0.5);
                    game.world.bringToTop(this.ditems);
                    game.world.bringToTop(this.ftrolly);
                    this.trollygp.add(this.ditems);



                    game.add.tween(this.ditems).to({
                        x: 237,
                        y: 780
                    }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                        // game.add.tween(this.ditems.scale).to({x:0.6,y:0.6},700,Phaser.Easing.Quadratic.Out,true);
                        if (this.tycnt <= 4) {
                            // console.log('mm')
                            this['toy' + (evt.id + 1)].inputEnabled = true;
                            this['toy' + (evt.id + 1)].input.enableDrag();
                            this.arrow2.visible = true;
                            if (this.tycnt <= 3) {
                                this.arrow2.x = toyx[evt.id];
                                this.arrow2.y = toyy[evt.id] - 60;
                            } else {
                                this.arrow2.x = toyx[evt.id] + 10;
                                this.arrow2.y = toyy[evt.id] - 80;
                            }
                        }
                        if (this.tycnt == 11) {
                            this.trollygp.add(this.ftrolly);
                            game.add.tween(this.trollygp).to({
                                y: 200
                            }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                                if (this.fincnt == 20) {
                                    game.add.tween(this.panelgp).to({
                                        y: 0
                                    }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                                        this.cphoto.inputEnabled = true;
                                        this.light.inputEnabled = true;
                                        this.ctable2.inputEnabled = true;
                                        this.lamp.inputEnabled = true;
                                        this.b_bed.inputEnabled = true;
                                    }, this);
                                }
                            }, this);

                        }
                    }, this);


                } else {
                    game.add.tween(this['toy' + evt.id]).to({
                        x: toyx[evt.id - 1],
                        y: toyy[evt.id - 1]
                    }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                        this['toy' + evt.id].inputEnabled = true;
                        // this.arrow1.visible=true;
                        this.arrow2.visible = true;
                        this.arrow2.x = toyx[evt.id - 1];
                        this.arrow2.y = toyy[evt.id - 1] - 60;
                    }, this);
                }
            }, this);
        }
        this.cleancnt2 = 0;

        this.chair1 = game.add.sprite(268.65, 518.25, 'chair1');
        this.chair1.anchor.setTo(0.5);
        // this.chair1.inputEnabled=true;
        this.chair1.events.onInputDown.add(function() {
            game.world.bringToTop(this.chair1);
            this.chair1.inputEnabled = false;
            this.arrow2.visible = false;
            game.add.tween(this.chair1.scale).to({
                x: 0.6,
                y: 0.6
            }, 700, Phaser.Easing.Quadratic.Out, true);
            game.add.tween(this.chair1).to({
                x: 67,
                y: 760
            }, 1000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                this.cleancnt2++;
                this.chair1.visible = false;
                this.chair_1.alpha = 1;
                this.chair2.inputEnabled = true;
                this.arrow2.visible = true;
                this.arrow2.x = 400;
                this.arrow2.y = 450;
                if (this.cleancnt2 == 4) {
                    game.add.tween(this.panelgp).to({
                        y: 200
                    }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                        game.add.tween(this.playbtn.scale).to({
                            x: 1,
                            y: 1
                        }, 1000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {

                        }, this);
                    }, this);
                }
            }, this);
        }, this);


        this.ctable = game.add.sprite(359.05, 544, 'ctable');
        this.ctable.anchor.setTo(0.5);
        // this.ctable.inputEnabled=true;
        this.ctable.events.onInputDown.add(function() {
            game.world.bringToTop(this.ctable);
            this.ctable.inputEnabled = false;
            this.arrow2.visible = false;
            game.add.tween(this.ctable.scale).to({
                x: 0.5,
                y: 0.5
            }, 700, Phaser.Easing.Quadratic.Out, true);
            game.add.tween(this.ctable).to({
                x: 340,
                y: 750
            }, 1000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                this.cleancnt2++;
                this.ctable.visible = false;
                5
                this.ctable3.alpha = 1;
                this.chair1.inputEnabled = true;
                this.arrow2.visible = true;
                this.arrow2.x = 262;
                this.arrow2.y = 352;
                if (this.cleancnt2 == 4) {
                    game.add.tween(this.panelgp).to({
                        y: 200
                    }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                        game.add.tween(this.playbtn.scale).to({
                            x: 1,
                            y: 1
                        }, 1000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {

                        }, this);
                    }, this);
                }
            }, this);
        }, this);

        this.chair2 = game.add.sprite(413.05, 520.3, 'chair2');
        this.chair2.anchor.setTo(0.5);
        // this.chair2.inputEnabled=true;
        this.chair2.events.onInputDown.add(function() {
            game.world.bringToTop(this.chair2);
            this.chair2.inputEnabled = false;
            this.arrow2.visible = false;
            game.add.tween(this.chair2.scale).to({
                x: 0.5,
                y: 0.5
            }, 700, Phaser.Easing.Quadratic.Out, true);
            game.add.tween(this.chair2).to({
                x: 423,
                y: 740
            }, 1000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                this.cleancnt2++;
                this.chair2.visible = false;
                5
                this.chair_2.alpha = 1;
                if (this.cleancnt2 == 4) {
                    game.add.tween(this.panelgp).to({
                        y: 200
                    }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                        game.add.tween(this.playbtn.scale).to({
                            x: 1,
                            y: 1
                        }, 1000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {

                        }, this);
                    }, this);
                }
            }, this);
        }, this);

        this.cleancnt1 = 0;

        this.cphoto = game.add.sprite(236.35, 255.15, 'cphoto');
        this.cphoto.anchor.setTo(0.5);
        // this.cphoto.inputEnabled=true;
        this.cphoto.events.onInputDown.add(function() {
            game.world.bringToTop(this.cphoto);
            this.cphoto.inputEnabled = false;
            this.arrow2.visible = false;
            game.add.tween(this.cphoto.scale).to({
                x: 0.7,
                y: 0.7
            }, 700, Phaser.Easing.Quadratic.Out, true);
            game.add.tween(this.cphoto).to({
                x: 304,
                y: 720
            }, 1000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                this.cleancnt1++;
                this.cphoto.visible = false;
                this.cphoto2.alpha = 1;
                this.lamp.inputEnabled = true;
                this.arrow2.visible = true;
                this.arrow2.x = 157;
                this.arrow2.y = 366;

                if (this.cleancnt1 == 5) {

                    game.add.tween(this.panelgp).to({
                        y: 200
                    }, 1000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                        game.add.tween(this.panelgp).to({
                            y: 0
                        }, 1000, Phaser.Easing.Quadratic.Out, true);
                        this.cleangp1.visible = false;
                        this.cleangp2.visible = true;
                        this.chair1.inputEnabled = true;
                        this.ctable.inputEnabled = true;
                        this.chair2.inputEnabled = true;
                        this.sofa.inputEnabled = true;
                    }, this);
                }
            }, this);
        }, this);

        this.light = game.add.sprite(241.4, 57.2, 'light');
        this.light.anchor.setTo(0.5);
        // this.light.inputEnabled=true;
        this.light.events.onInputDown.add(function() {
            game.world.bringToTop(this.light);
            this.light.inputEnabled = false;
            this.arrow2.visible = false;
            game.add.tween(this.light.scale).to({
                x: 0.6,
                y: 0.6
            }, 700, Phaser.Easing.Quadratic.Out, true);
            game.add.tween(this.light).to({
                x: 178,
                y: 725
            }, 1000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                this.cleancnt1++;
                this.light.visible = false;
                this.light2.alpha = 1;
                if (this.cleancnt1 == 5) {
                    game.add.tween(this.panelgp).to({
                        y: 200
                    }, 1000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                        this.cleangp1.visible = false;
                        this.cleangp2.visible = true;
                        game.add.tween(this.panelgp).to({
                            y: 0
                        }, 1000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {

                            //     this.chair1.inputEnabled=true;

                            // this.chair2.inputEnabled=true;
                            this.sofa.inputEnabled = true;
                            this.arrow2.visible = true;
                            this.arrow2.angle = 0;
                            this.arrow2.x = 240;
                            this.arrow2.y = 475;
                        }, this);
                    }, this);
                }
            }, this);
        }, this);

        this.ctable2 = game.add.sprite(130.8, 511.2, 'ctable2');
        this.ctable2.anchor.setTo(0.5);
        // this.ctable2.inputEnabled=true;
        this.ctable2.events.onInputDown.add(function() {
            game.world.bringToTop(this.ctable2);
            this.ctable2.inputEnabled = false;
            this.arrow2.visible = false;
            game.add.tween(this.ctable2.scale).to({
                x: 0.6,
                y: 0.6
            }, 700, Phaser.Easing.Quadratic.Out, true);
            game.add.tween(this.ctable2).to({
                x: 95,
                y: 720
            }, 1000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                this.cleancnt1++;
                this.ctable2.visible = false;
                this.ctable_2.alpha = 1;
                this.light.inputEnabled = true;
                this.arrow2.visible = true;
                this.arrow2.angle = 180;
                this.arrow2.x = 246;
                this.arrow2.y = 165;
                if (this.cleancnt1 == 5) {
                    game.add.tween(this.panelgp).to({
                        y: 200
                    }, 1000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                        game.add.tween(this.panelgp).to({
                            y: 0
                        }, 1000, Phaser.Easing.Quadratic.Out, true);
                        this.cleangp1.visible = false;
                        this.cleangp2.visible = true;
                        this.chair1.inputEnabled = true;
                        this.ctable.inputEnabled = true;
                        this.chair2.inputEnabled = true;
                        this.sofa.inputEnabled = true;
                    }, this);
                }
            }, this);
        }, this);

        this.lamp = game.add.sprite(167.15, 424.35, 'lamp');
        this.lamp.anchor.setTo(0.5);
        // this.lamp.inputEnabled=true;
        this.lamp.events.onInputDown.add(function() {
            game.world.bringToTop(this.lamp);
            this.lamp.inputEnabled = false;
            this.arrow2.visible = false;
            game.add.tween(this.lamp.scale).to({
                x: 0.7,
                y: 0.7
            }, 700, Phaser.Easing.Quadratic.Out, true);
            game.add.tween(this.lamp).to({
                x: 256,
                y: 707
            }, 1000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                this.cleancnt1++;
                this.lamp.visible = false;
                this.lamp2.alpha = 1;
                this.b_bed.inputEnabled = true;
                this.arrow2.visible = true;
                this.arrow2.x = 90;
                this.arrow2.y = 418;

                if (this.cleancnt1 == 5) {
                    game.add.tween(this.panelgp).to({
                        y: 200
                    }, 1000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                        game.add.tween(this.panelgp).to({
                            y: 0
                        }, 1000, Phaser.Easing.Quadratic.Out, true);
                        this.cleangp1.visible = false;
                        this.cleangp2.visible = true;
                        this.chair1.inputEnabled = true;
                        this.ctable.inputEnabled = true;
                        this.chair2.inputEnabled = true;
                        this.sofa.inputEnabled = true;
                    }, this);
                }
            }, this);
        }, this);

        this.b_bed = game.add.sprite(102.5, 506.15, 'b_bed');
        this.b_bed.anchor.setTo(0.5);
        // this.b_bed.inputEnabled=true;
        this.b_bed.events.onInputDown.add(function() {
            game.world.bringToTop(this.b_bed);
            this.b_bed.inputEnabled = false;
            this.arrow2.visible = false;
            game.add.tween(this.b_bed.scale).to({
                x: 0.7,
                y: 0.7
            }, 700, Phaser.Easing.Quadratic.Out, true);
            game.add.tween(this.b_bed).to({
                x: 404,
                y: 720
            }, 1000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                this.cleancnt1++;
                this.b_bed.visible = false;
                this.b_bed2.alpha = 1;
                this.ctable2.inputEnabled = true;
                this.arrow2.visible = true;
                this.arrow2.x = 134;
                this.arrow2.y = 411;
                if (this.cleancnt1 == 5) {
                    game.add.tween(this.panelgp).to({
                        y: 200
                    }, 1000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                        game.add.tween(this.panelgp).to({
                            y: 0
                        }, 1000, Phaser.Easing.Quadratic.Out, true);
                        this.cleangp1.visible = false;
                        this.cleangp2.visible = true;
                        this.chair1.inputEnabled = true;
                        this.ctable.inputEnabled = true;
                        this.chair2.inputEnabled = true;
                        this.sofa.inputEnabled = true;
                    }, this);
                }
            }, this);
        }, this);



        this.sofa = game.add.sprite(254, 614.25, 'sofa');
        this.sofa.anchor.setTo(0.5);
        // this.sofa.inputEnabled=true;
        this.sofa.events.onInputDown.add(function() {
            game.world.bringToTop(this.sofa);
            this.sofa.inputEnabled = false;
            this.arrow2.visible = false;
            game.add.tween(this.sofa.scale).to({
                x: 0.4,
                y: 0.4
            }, 700, Phaser.Easing.Quadratic.Out, true);
            game.add.tween(this.sofa).to({
                x: 188,
                y: 730
            }, 1000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                this.cleancnt2++;
                this.sofa.visible = false;
                5
                this.sofa2.alpha = 1;
                this.ctable.inputEnabled = true;
                this.arrow2.visible = true;
                this.arrow2.x = 350;
                this.arrow2.y = 394;

                if (this.cleancnt2 == 4) {
                    game.add.tween(this.panelgp).to({
                        y: 200
                    }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                        game.add.tween(this.playbtn.scale).to({
                            x: 1,
                            y: 1
                        }, 1000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {

                        }, this);
                    }, this);
                }
            }, this);
        }, this);

        this.dgp1 = game.add.group();

        this.dpicker = game.add.sprite(129.85, 705.1, 'dpicker');
        this.dpicker.anchor.setTo(0.5);
        this.dgp1.add(this.dpicker);

        this.cdust1 = game.add.sprite(214.9, 751.15, 'cdust1');
        this.cdust1.anchor.setTo(0.5);
        this.dgp1.add(this.cdust1);

        this.dcleaner = game.add.sprite(177.3, 692.3, 'dcleaner');
        this.dcleaner.anchor.setTo(0.5);
        this.dcleaner.inputEnabled = true;
        this.dcleaner.input.enableDrag();
        this.dcleaner.events.onInputDown.add(function() {
            game.world.bringToTop(this.dcleaner);
            // this.arrow1.visible=false;
            this.arrow2.visible = true;
            this.arrow2.x = 216;
            this.arrow2.y = 664;
        }, this);
        this.dcleaner.events.onInputUp.add(function() {
            this.dcleaner.inputEnabled = false;
            this.arrow2.visible = false;
            if ((game.input.activePointer.x > 194 && game.input.activePointer.x < 284 && game.input.activePointer.y > 684 && game.input.activePointer.y < 771)) {
                this.fincnt++;
                // this.dcleaner.visible=false;
                this.dcleaner.x = 266;
                this.dcleaner.y = 732;
                game.add.tween(this.cdust1.scale).to({
                    x: 0.7,
                    y: 0.7
                }, 700, Phaser.Easing.Quadratic.Out, true);
                game.add.tween(this.cdust1).to({
                    x: 130,
                    y: 720
                }, 700, Phaser.Easing.Quadratic.Out, true);
                game.add.tween(this.dcleaner).to({
                    x: 177.3,
                    y: 692.3
                }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                    this.dgp1.add(this.dcleaner);
                    game.world.bringToTop(this.dgp1);
                    game.add.tween(this.dgp1).to({
                        x: -240
                    }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                        this.wcleaner.inputEnabled = true;
                        this.wcleaner.input.enableDrag();
                        this.arrow2.visible = true;
                        this.arrow2.x = 416;
                        this.arrow2.y = 630;
                        if (this.fincnt == 20) {
                            game.add.tween(this.panelgp).to({
                                y: 0
                            }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                                this.cphoto.inputEnabled = true;
                                this.light.inputEnabled = true;
                                this.ctable2.inputEnabled = true;
                                this.lamp.inputEnabled = true;
                                this.b_bed.inputEnabled = true;
                            }, this);
                        }

                    }, this);
                }, this);

            } else {
                game.add.tween(this.dcleaner).to({
                    x: 177.3,
                    y: 692.3
                }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                    this.dcleaner.inputEnabled = true;
                    // this.arrow1.visible=true;
                    this.arrow2.visible = true;
                    this.arrow2.x = 160;
                    this.arrow2.y = 634;
                }, this);
            }
        }, this);
        // this.dgp1.add(this.dcleaner);

        this.cwater = game.add.sprite(359.05, 756.15, 'cwater');
        this.cwater.anchor.setTo(0.5);



        var toy2x = [127.25, 121.7, 445.9, 386.85, 33.35, 203, 356];
        var toy2y = [571.8, 425.85, 691.5, 572.8, 649.6, 571.3, 416.25];


        for (i = 4; i <= 10; i++) {
            this['toy' + i] = game.add.sprite(toy2x[i - 4], toy2y[i - 4], 'toy' + i);
            this['toy' + i].anchor.setTo(0.5);
            //  this['toy'+i].inputEnabled=true;
            // this['toy'+i].input.enableDrag();
            this['toy' + i].id = i;
            this['toy' + i].events.onInputDown.add(function(evt) {
                game.world.bringToTop(this['toy' + evt.id]);
                // this.arrow1.visible=false;
                if (this.tycnt == 0) {
                    this.tycnt = 1;
                    game.add.tween(this.ftrolly).to({
                        y: 799.85
                    }, 500, Phaser.Easing.Quadratic.Out, true);
                    game.add.tween(this.trolly).to({
                        y: 791.8
                    }, 500, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                        this.arrow2.visible = true;
                        this.arrow2.x = 216;
                        this.arrow2.y = 664;
                    }, this);
                } else {
                    this.arrow2.visible = true;
                    this.arrow2.x = 216;
                    this.arrow2.y = 664;
                }
            }, this);
            this['toy' + i].events.onInputUp.add(function(evt) {
                this['toy' + evt.id].inputEnabled = false;
                this.arrow2.visible = false;
                if ((game.input.activePointer.x > 149 && game.input.activePointer.x < 329 && game.input.activePointer.y > 669 && game.input.activePointer.y < 783)) {
                    this.fincnt++;
                    this.tycnt++;
                    this['toy' + evt.id].visible = false;
                    this.ditems = game.add.sprite(evt.x, evt.y, 'toy' + evt.id);
                    this.ditems.anchor.setTo(0.5);
                    game.world.bringToTop(this.ditems);
                    game.world.bringToTop(this.ftrolly);
                    this.trollygp.add(this.ditems);

                    game.add.tween(this.ditems).to({
                        x: 237,
                        y: 780
                    }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                        // game.add.tween(this.ditems.scale).to({x:0.6,y:0.6},700,Phaser.Easing.Quadratic.Out,true);
                        if (this.tycnt <= 10) {
                            // console.log('mm')
                            this['toy' + (evt.id + 1)].inputEnabled = true;
                            this['toy' + (evt.id + 1)].input.enableDrag();
                            this.arrow2.visible = true;
                            this.arrow2.x = toy2x[evt.id - 3];
                            this.arrow2.y = toy2y[evt.id - 3] - 60;

                        }

                        if (this.tycnt == 11) {
                            this.trollygp.add(this.ftrolly);
                            game.add.tween(this.trollygp).to({
                                y: 200
                            }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                                this['paperball' + 1].inputEnabled = true;
                                this['paperball' + 1].input.enableDrag();
                                this.arrow2.visible = true;
                                this.arrow2.x = 22.2;
                                this.arrow2.y = 640;
                                if (this.fincnt == 20) {
                                    game.add.tween(this.panelgp).to({
                                        y: 0
                                    }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                                        this.cphoto.inputEnabled = true;
                                        this.light.inputEnabled = true;
                                        this.ctable2.inputEnabled = true;
                                        this.lamp.inputEnabled = true;
                                        this.b_bed.inputEnabled = true;
                                    }, this);
                                }
                            }, this);

                        }
                    }, this);


                } else {
                    game.add.tween(this['toy' + evt.id]).to({
                        x: toy2x[evt.id - 4],
                        y: toy2y[evt.id - 4]
                    }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                        this['toy' + evt.id].inputEnabled = true;
                        // this.arrow1.visible=true;
                        if (evt.id == 4) {
                            this.arrow2.visible = true;
                            this.arrow2.x = toy2x[evt.id - 4] + 10;
                            this.arrow2.y = toy2y[evt.id - 4] - 80;
                        } else {
                            this.arrow2.visible = true;
                            this.arrow2.x = toy2x[evt.id - 4];
                            this.arrow2.y = toy2y[evt.id - 4] - 60;
                        }





                    }, this);
                }
            }, this);
        }



        var paperx = [22.2, 162.1, 310.6, 492.45, 307.6, 14, 356];
        var papery = [691.05, 779.4, 586.45, 620.8, 424.8, 570.55, 416.25];

        this.pbcnt = 0;
        this.pbcnt2 = 0;


        for (i = 1; i <= 6; i++) {
            this['paperball' + i] = game.add.sprite(paperx[i - 1], papery[i - 1], 'paperball');
            this['paperball' + i].anchor.setTo(0.5);
            // this['paperball'+i].inputEnabled=true;
            // this['paperball'+i].input.enableDrag();
            this['paperball' + i].id = i;
            this['paperball' + i].events.onInputDown.add(function(evt) {
                game.world.bringToTop(this['paperball' + evt.id]);
                this.arrow2.visible = false;
                if (this.pbcnt2 == 0) {
                    this.pbcnt2 = 1;
                    game.add.tween(this.dustbin).to({
                        x: 480
                    }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {


                        this.arrow2.visible = true;
                        this.arrow2.x = 453;
                        this.arrow2.y = 673;
                    }, this);
                } else {
                    this.arrow2.visible = true;
                    this.arrow2.x = 453;
                    this.arrow2.y = 673;
                }
            }, this);
            this['paperball' + i].events.onInputUp.add(function(evt) {
                this['paperball' + evt.id].inputEnabled = false;
                this.arrow2.visible = false;
                if ((game.input.activePointer.x > 382 && game.input.activePointer.x < 500 && game.input.activePointer.y > 706 && game.input.activePointer.y < 797)) {
                    this.fincnt++;
                    this.pbcnt++;
                    this['paperball' + evt.id].visible = false;
                    // this.cpaper.visible = false;
                    effectssd = game.add.sprite(game.input.activePointer.x, game.input.activePointer.y, 'effectssd');
                    effectssd.anchor.setTo(0.5);
                    effectssd.animations.add('effectssd');
                    effectssd.animations.play('effectssd', 20, false).onComplete.add(function(evt) {
                        evt.destroy();
                    }, this);
                    if (this.pbcnt <= 5) {
                        // console.log('mm')
                        this['paperball' + (evt.id + 1)].inputEnabled = true;
                        this['paperball' + (evt.id + 1)].input.enableDrag();
                        this.arrow2.visible = true;
                        this.arrow2.x = paperx[evt.id];
                        this.arrow2.y = papery[evt.id] - 50;

                    }
                    if (this.pbcnt == 6) {
                        game.add.tween(this.dustbin).to({
                            x: 650
                        }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                            if (this.fincnt == 20) {
                                game.add.tween(this.panelgp).to({
                                    y: 0
                                }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                                    this.cphoto.inputEnabled = true;
                                    this.arrow2.visible = true;
                                    this.arrow2.x = 236;
                                    this.arrow2.y = 190;
                                }, this);
                            }
                        }, this);
                    }


                } else {
                    game.add.tween(this['paperball' + evt.id]).to({
                        x: paperx[evt.id - 1],
                        y: papery[evt.id - 1]
                    }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                        this['paperball' + evt.id].inputEnabled = true;
                        // this.arrow1.visible=true;
                        this.arrow2.visible = true;
                        this.arrow2.x = paperx[evt.id - 1];
                        this.arrow2.y = papery[evt.id - 1] - 50;
                    }, this);
                }
            }, this);
        }

        this.trollygp = game.add.group();

        this.trolly = game.add.sprite(237.25, 891.8, 'trolly');
        this.trolly.anchor.setTo(0.5);
        this.trollygp.add(this.trolly);

        this.ftrolly = game.add.sprite(237.25, 899.85, 'ftrolly');
        this.ftrolly.anchor.setTo(0.5);
        // this.trollygp.add(this.ftrolly);

        // this.trollygp.y=100;

        this.spcnt1 = 0;
        this.spcnt2 = 0;

        this.scleaner = game.add.sprite(480, 516, 'scleaner');
        this.scleaner.anchor.setTo(0.5);
        //   this.scleaner.inputEnabled=true;
        // this.scleaner.input.enableDrag();
        this.scleaner.events.onInputDown.add(function() {
            game.world.bringToTop(this.scleaner);
            this.arrow2.visible = false;
            if (this.spcnt2 == 0) {
                this.arrow3.visible = true;
                this.arrow3.angle = 180;
                this.arrow3.x = 57;
                this.arrow3.y = 170;
            }
            if (this.spcnt1 == 0) {
                this.arrow4.visible = true;
                this.arrow4.angle = 180;
                this.arrow4.x = 468;
                this.arrow4.y = 275;
            }
        }, this);
        this.scleaner.events.onInputUp.add(function() {
            this.scleaner.inputEnabled = false;
            this.arrow3.visible = false;
            this.arrow4.visible = false;

            if ((game.input.activePointer.x > 377 && game.input.activePointer.x < 502 && game.input.activePointer.y > 81 && game.input.activePointer.y < 245)) {
                // this.scleaner.visible=false;
                this.fincnt++;
                if (this.spcnt1 == 0) {
                    this.spcnt1 = 1;
                    this.scleaner.x = 446;
                    this.scleaner.y = 227;
                    game.add.tween(this.scleaner.anchor).to({
                        y: 0.9
                    }, 700, Phaser.Easing.Quadratic.Out, true);
                    game.add.tween(this.sweb1).to({
                        alpha: 0
                    }, 1100, Phaser.Easing.Quadratic.Out, true);
                    game.add.tween(this.scleaner).to({
                        angle: [-25, 25, -25, 25, -25, 25, -25, 25]
                    }, 1500, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                        if (this.spcnt1 == 0 || this.spcnt2 == 0) {
                            game.add.tween(this.scleaner).to({
                                angle: 0
                            }, 700, Phaser.Easing.Quadratic.Out, true);
                            game.add.tween(this.scleaner.anchor).to({
                                y: 0.5
                            }, 700, Phaser.Easing.Quadratic.Out, true);
                            game.add.tween(this.scleaner).to({
                                x: 480,
                                y: 516
                            }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                                this.scleaner.inputEnabled = true;
                                // this.arrow1.visible=true;
                                this.arrow2.visible = true;
                                this.arrow2.x = 474;
                                this.arrow2.y = 397;
                            }, this);
                        } else {
                            game.add.tween(this.scleaner).to({
                                x: 680,
                                y: 300
                            }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                                this['toy' + 1].inputEnabled = true;
                                this['toy' + 1].input.enableDrag();
                                this.arrow2.visible = true;
                                this.arrow2.x = 237.35;
                                this.arrow2.y = 270;
                                if (this.fincnt == 20) {
                                    game.add.tween(this.panelgp).to({
                                        y: 0
                                    }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                                        this.cphoto.inputEnabled = true;
                                        this.arrow2.visible = true;
                                        this.arrow2.x = 236;
                                        this.arrow2.y = 190;

                                        // this.light.inputEnabled=true;
                                        // this.ctable2.inputEnabled=true;
                                        // this.b_bed.inputEnabled=true;
                                    }, this);
                                }
                            }, this);
                        }

                    }, this);
                } else {
                    game.add.tween(this.scleaner).to({
                        x: 480,
                        y: 516
                    }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                        this.scleaner.inputEnabled = true;
                        this.arrow2.visible = true;
                        this.arrow2.x = 474;
                        this.arrow2.y = 397;
                    }, this);
                }

            } else if ((game.input.activePointer.x > 1 && game.input.activePointer.x < 175 && game.input.activePointer.y > 4 && game.input.activePointer.y < 154)) {
                this.fincnt++;
                if (this.spcnt2 == 0) {
                    this.spcnt2 = 1;
                    this.scleaner.x = 66;
                    this.scleaner.y = 136;
                    game.add.tween(this.scleaner.anchor).to({
                        y: 0.9
                    }, 700, Phaser.Easing.Quadratic.Out, true);
                    game.add.tween(this.sweb2).to({
                        alpha: 0
                    }, 1100, Phaser.Easing.Quadratic.Out, true);
                    game.add.tween(this.scleaner).to({
                        angle: [-25, 25, -25, 25, -25, 25, -25, 25]
                    }, 1500, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                        if (this.spcnt1 == 0 || this.spcnt2 == 0) {
                            game.add.tween(this.scleaner).to({
                                angle: 0
                            }, 700, Phaser.Easing.Quadratic.Out, true);
                            game.add.tween(this.scleaner.anchor).to({
                                y: 0.5
                            }, 700, Phaser.Easing.Quadratic.Out, true);
                            game.add.tween(this.scleaner).to({
                                x: 480,
                                y: 516
                            }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                                this.scleaner.inputEnabled = true;
                                // this.arrow1.visible=true;
                                this.arrow2.visible = true;
                                this.arrow2.x = 474;
                                this.arrow2.y = 397;
                            }, this);
                        } else {
                            game.add.tween(this.scleaner).to({
                                x: 680,
                                y: 300
                            }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                                this['toy' + 1].inputEnabled = true;
                                this['toy' + 1].input.enableDrag();
                                this.arrow2.visible = true;
                                this.arrow2.x = 237.35;
                                this.arrow2.y = 270;
                                if (this.fincnt == 20) {
                                    game.add.tween(this.panelgp).to({
                                        y: 0
                                    }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                                        this.cphoto.inputEnabled = true;
                                        this.light.inputEnabled = true;
                                        this.ctable2.inputEnabled = true;
                                        this.lamp.inputEnabled = true;
                                        this.b_bed.inputEnabled = true;
                                    }, this);
                                }
                            }, this);
                        }

                    }, this);
                } else {
                    game.add.tween(this.scleaner).to({
                        x: 480,
                        y: 516
                    }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                        this.scleaner.inputEnabled = true;
                        // this.arrow1.visible=true;
                        this.arrow2.visible = true;
                        this.arrow2.x = 474;
                        this.arrow2.y = 397;
                    }, this);
                }
            } else {
                game.add.tween(this.scleaner).to({
                    x: 480,
                    y: 516
                }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                    this.scleaner.inputEnabled = true;
                    // this.arrow1.visible=true;
                    this.arrow2.visible = true;
                    this.arrow2.x = 474;
                    this.arrow2.y = 397;
                }, this);
            }
        }, this);

        this.wcleaner = game.add.sprite(440.35, 588, 'wcleaner');
        this.wcleaner.anchor.setTo(0.5);
        //  this.wcleaner.inputEnabled=true;
        // this.wcleaner.input.enableDrag();
        this.wcleaner.events.onInputDown.add(function() {
            game.world.bringToTop(this.wcleaner);
            // this.arrow1.visible=false;
            this.arrow2.visible = true;
            this.arrow2.x = 348;
            this.arrow2.y = 716;
        }, this);
        this.wcleaner.events.onInputUp.add(function() {
            this.wcleaner.inputEnabled = false;
            this.arrow2.visible = false;
            if ((game.input.activePointer.x > 290 && game.input.activePointer.x < 436 && game.input.activePointer.y > 714 && game.input.activePointer.y < 797)) {
                // this.wcleaner.visible=false;
                this.fincnt++;
                this.wcleaner.x = 405;
                this.wcleaner.y = 638;
                game.add.tween(this.cwater.scale).to({
                    x: 0,
                    y: 0
                }, 1000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                    game.add.tween(this.wcleaner).to({
                        x: 640
                    }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                        this.scleaner.inputEnabled = true;
                        this.scleaner.input.enableDrag();
                        this.arrow2.visible = true;
                        this.arrow2.x = 474;
                        this.arrow2.y = 397;
                        if (this.fincnt == 20) {
                            game.add.tween(this.panelgp).to({
                                y: 0
                            }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                                this.cphoto.inputEnabled = true;
                                this.light.inputEnabled = true;
                                this.ctable2.inputEnabled = true;
                                this.lamp.inputEnabled = true;
                                this.b_bed.inputEnabled = true;
                            }, this);
                        }
                    }, this);
                }, this);

            } else {
                game.add.tween(this.wcleaner).to({
                    x: 440.35,
                    y: 588
                }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                    this.wcleaner.inputEnabled = true;
                    // this.arrow1.visible=true;
                    this.arrow2.visible = true;
                    this.arrow2.x = 416;
                    this.arrow2.y = 630;
                }, this);
            }
        }, this);



        this.sweb1 = game.add.sprite(444, 160.75, 'sweb1');
        this.sweb1.anchor.setTo(0.5);

        this.sweb2 = game.add.sprite(95, 64.55, 'sweb2');
        this.sweb2.anchor.setTo(0.5);

        this.dustbin = game.add.sprite(680, 830, 'dustbin');
        this.dustbin.anchor.setTo(0.5);
        this.dustbin.scale.x = -this.dustbin.scale.x;

        this.panelgp = game.add.group();

        this.clpanel = game.add.sprite(253.95, 863, 'clpanel');
        this.clpanel.anchor.setTo(0.5);
        this.panelgp.add(this.clpanel);

        this.cleangp1 = game.add.group();

        this.ctable_2 = game.add.sprite(95, 720, 'ctable2');
        this.ctable_2.anchor.setTo(0.5);
        this.ctable_2.scale.setTo(0.6);
        this.ctable_2.alpha = 0.7;
        this.cleangp1.add(this.ctable_2);

        this.light2 = game.add.sprite(178, 725, 'light');
        this.light2.anchor.setTo(0.5);
        this.light2.scale.setTo(0.6);
        this.light2.alpha = 0.7;
        this.cleangp1.add(this.light2);

        this.lamp2 = game.add.sprite(256, 707, 'lamp');
        this.lamp2.anchor.setTo(0.5);
        this.lamp2.scale.setTo(0.7);
        this.lamp2.alpha = 0.7;
        this.cleangp1.add(this.lamp2);

        this.cphoto2 = game.add.sprite(304, 720, 'cphoto');
        this.cphoto2.anchor.setTo(0.5);
        this.cphoto2.scale.setTo(0.7);
        this.cphoto2.alpha = 0.7;
        this.cleangp1.add(this.cphoto2);

        this.b_bed2 = game.add.sprite(404, 720, 'b_bed');
        this.b_bed2.anchor.setTo(0.5);
        this.b_bed2.scale.setTo(0.7);
        this.b_bed2.alpha = 0.7;
        this.cleangp1.add(this.b_bed2);

        // this.cleangp1.visible=false;

        this.cleangp2 = game.add.group();

        this.chair_1 = game.add.sprite(67, 760, 'chair1');
        this.chair_1.anchor.setTo(0.5);
        this.chair_1.scale.setTo(0.6);
        this.chair_1.alpha = 0.7;
        this.cleangp2.add(this.chair_1);

        this.sofa2 = game.add.sprite(188, 730, 'sofa');
        this.sofa2.anchor.setTo(0.5);
        this.sofa2.scale.setTo(0.4);
        this.sofa2.alpha = 0.7;
        this.cleangp2.add(this.sofa2);

        this.ctable3 = game.add.sprite(340, 750, 'ctable');
        this.ctable3.anchor.setTo(0.5);
        this.ctable3.scale.setTo(0.5);
        this.ctable3.alpha = 0.7;
        this.cleangp2.add(this.ctable3);

        this.chair_2 = game.add.sprite(423, 740, 'chair2');
        this.chair_2.anchor.setTo(0.5);
        this.chair_2.scale.setTo(0.5);
        this.chair_2.alpha = 0.7;
        this.cleangp2.add(this.chair_2);

        this.cleangp2.visible = false;

        this.panelgp.add(this.cleangp1);
        this.panelgp.add(this.cleangp2);

        this.panelgp.y = 200;

        // this.dummydrag = true;

        // this.dummyobject= game.add.sprite(-100,0,'arrow');
        // this.dummyobject.anchor.setTo(0.5);
        // this.dummyobject.scale.setTo(0.5);

        this.arrowgp = game.add.group();



        var arro2x = [323, 160, 442, 705, 113, 410, 710];
        var arro2y = [433, 634, 414, 420, 402, 130, 440];

        for (i = 1; i <= 4; i++) {
            this['arrow' + i] = game.add.sprite(arro2x[i - 1], arro2y[i - 1], 'arrow');
            this['arrow' + i].anchor.setTo(0.5);
            this['arrow' + i].animations.add('arrow');
            this['arrow' + i].animations.play('arrow', 12, true);
            this['arrow' + i].visible = false;
            if (i == 2) {
                // this['arrow'+i].angle=90;
            }
            if (i == 2) {
                this['arrow' + i].visible = true;
            }
            this.arrowgp.add(this['arrow' + i]);

        }

        /*  this.mcnt1=0;

         this.mcir = game.add.graphics(0,0);
         this.mcir.beginFill(0x666666,0);
         this.mcir.drawRect(0,0,504,800);
         this.mcir.inputEnabled=true;
         this.mcir.events.onInputDown.add(function(){
             this.mcnt1++;
           this['xcnt'+this.mcnt1]=game.input.activePointer.x;
           this['ycnt'+this.mcnt1]=game.input.activePointer.y;
         this.mcir = game.add.graphics(game.input.activePointer.x,game.input.activePointer.y);
         this.mcir.beginFill(0x000000,0.5);
         this.mcir.drawCircle(0,0,20);
         //  this.mcir = game.add.sprite(game.input.activePointer.x,game.input.activePointer.y,'dcleaner');
         // this.mcir.anchor.setTo(0.5);
         // this.mcir.scale.setTo(0.75);
         console.log(this['xcnt'+this.mcnt1]+':'+this['ycnt'+this.mcnt1]);
         //console.log(this['ycnt'+this.mcnt1]);

         },this);*/

        this.morebtn = game.add.sprite(60, 765, 'morebtn');
        this.morebtn.anchor.setTo(0.5);
        this.morebtn.scale.setTo(0.75);
        this.morebtn.inputEnabled = true;
        this.morebtn.input.useHandCursor = true;
        this.morebtn.events.onInputUp.add(this.moreLink, this);
        this.morebtn.events.onInputOver.add(this.btnOver, this);
        this.morebtn.events.onInputOut.add(this.btnOut, this);
        // this.levelGroup.add(this.morebtn);
        this.playbtn = game.add.sprite(451.4, 740, 'donebtn');
        this.playbtn.anchor.setTo(0.5);
        this.playbtn.scale.setTo(0);
        this.playbtn.inputEnabled = true;
        this.playbtn.input.useHandCursor = true;
        this.playbtn.events.onInputUp.add(this.enterRoom, this);
        this.playbtn.events.onInputOver.add(this.btnOver, this);
        this.playbtn.events.onInputOut.add(this.btnOut, this);

        if (Main.shutterOn[0]) {
            this.shutter = game.add.sprite(0, 0, 'shutterbg');
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
    update: function() {
        if (this.dummydrag) {
            this.dummyobject.x = game.input.activePointer.x;
            this.dummyobject.y = game.input.activePointer.y;
            console.log(game.input.activePointer.x + ':' + game.input.activePointer.y);
        }

        if (this.bdollDrag) {
            this.bdoll.x = game.input.activePointer.x;
            this.bdoll.y = game.input.activePointer.y;
        }
        game.world.bringToTop(this.arrowgp);
        game.world.bringToTop(this.shutter);
        game.world.bringToTop(this.logoVar);
        game.world.bringToTop(this.musicButton);
        // console.log(this.fincnt)
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
        }, 700, Phaser.Easing.Quadratic.Out, true, 1000);
        game.add.tween(this.betty2).to({
            x: 132
        }, 1600, Phaser.Easing.Quadratic.Out, true)
        game.add.tween(this.oliver).to({
            x: 371
        }, 1600, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
            game.add.tween(this.popup2.scale).to({
                x: 1,
                y: 1
            }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(this.bringPopUp3, this);
        }, this);
    },
    bringPopUp3: function() {
        game.add.tween(this.popup2).to({
            alpha: 0
        }, 700, Phaser.Easing.Quadratic.Out, true, 2500)
        game.add.tween(this.popup3.scale).to({
            x: 0.8,
            y: 0.8
        }, 700, Phaser.Easing.Quadratic.Out, true, 3000).onComplete.add(this.bringBottons, this);
    },
    bringBottons: function() {
        // game.add.tween(this.morebtn.scale).to({x:1, y:1}, 700, Phaser.Easing.Quadratic.Out, true);
        game.add.tween(this.playbtn.scale).to({
            x: 1,
            y: 1
        }, 700, Phaser.Easing.Quadratic.Out, true);
    },
    openLink: function() {
        //  YYGSDK.navigate("game","logo");
    },
    moreLink: function() {
        //  YYGSDK.navigate("game","more");
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
            MyShowAD('decoration_screen');
        });

    },
}

Main.decoration_screen = function() {}

Main.decoration_screen.prototype = {
    create: function() {
        this.annai = [0, 0, 0, 0, 0, 0, 0, 0, 0];
        this.levelGroup = game.add.group();
        // this.bg = game.add.sprite(0,0,'clbg');
        // this.levelGroup.add(this.bg);
        this.decgroup = game.add.group();

        this.floor1 = game.add.sprite(252, 531.5, 'floor000' + Main.decoFlag[1]);
        this.floor1.anchor.setTo(0.5);
        this.decgroup.add(this.floor1);

        this.roof1 = game.add.sprite(252, 108, 'roof000' + Main.decoFlag[2]);
        this.roof1.anchor.setTo(0.5);
        this.decgroup.add(this.roof1);

        this.rhole = game.add.sprite(236, 37.5, 'rhole');
        this.rhole.anchor.setTo(0.5);
        this.decgroup.add(this.rhole);

        this.wall1 = game.add.sprite(252, 367, 'wall000' + Main.decoFlag[0]);
        this.wall1.anchor.setTo(0.5);
        this.decgroup.add(this.wall1);

        this.line = game.add.sprite(252, 488.5, 'line');
        this.line.anchor.setTo(0.5);
        this.decgroup.add(this.line);

        this.roof_light = game.add.sprite(242.5, 189, 'roof_light');
        this.roof_light.anchor.setTo(0.5);
        this.decgroup.add(this.roof_light);

        this.wkeeper = game.add.sprite(231, 373, 'wkeeper');
        this.wkeeper.anchor.setTo(0.5);
        this.decgroup.add(this.wkeeper);

        this.wpic = game.add.sprite(16.5, 276, 'wpic');
        this.wpic.anchor.setTo(0.5);
        this.decgroup.add(this.wpic);

        this.window = game.add.sprite(222.5, 357.5, 'window');
        this.window.anchor.setTo(0.5);
        this.decgroup.add(this.window);

        this.w_screen1 = game.add.sprite(230.5, 355.5, 'w_screen000' + Main.decoFlag[3]);
        this.w_screen1.anchor.setTo(0.5);
        this.decgroup.add(this.w_screen1);

        this.book_keeper = game.add.sprite(487.5, 459, 'book_keeper');
        this.book_keeper.anchor.setTo(0.5);
        this.decgroup.add(this.book_keeper);

        this.rlight1 = game.add.sprite(250.5, 94, 'rlight000' + Main.decoFlag[8]);
        this.rlight1.anchor.setTo(0.5);
        this.decgroup.add(this.rlight1);

        this.wpic2 = game.add.sprite(234, 252.5, 'wpic2');
        this.wpic2.anchor.setTo(0.5);
        this.decgroup.add(this.wpic2);

        this.drawer1 = game.add.sprite(44, 463, 'drawer000' + Main.decoFlag[6]);
        this.drawer1.anchor.setTo(0.5);
        this.decgroup.add(this.drawer1);

        this.matt1 = game.add.sprite(251, 674.5, 'matt000' + Main.decoFlag[4]);
        this.matt1.anchor.setTo(0.5);
        this.decgroup.add(this.matt1);

        this.dhouse1 = game.add.sprite(160.5, 560, 'dhouse000' + Main.decoFlag[5]);
        this.dhouse1.anchor.setTo(0.5);
        this.decgroup.add(this.dhouse1);

        this.chair1 = game.add.sprite(378.95, 475, 'chair000' + Main.decoFlag[7]);
        this.chair1.anchor.setTo(0.5);
        this.decgroup.add(this.chair1);

        this.ipanel = game.add.sprite(253.35, 862.25, 'ipanel');
        this.ipanel.anchor.setTo(0.5);

        this.icongp1 = game.add.group();
        this.icongp2 = game.add.group();

        var iconx = [73, 160, 250, 340, 428, 112.65, 202.3, 291.15, 380.8];
        var icony = [734, 734, 734, 734, 734, 734, 734, 734, 734];

        for (i = 1; i <= 9; i++) {
            this['icon' + i] = game.add.sprite(iconx[i - 1], icony[i - 1], 'icon' + i);
            this['icon' + i].anchor.setTo(0.5);
            this['icon' + i].scale.setTo(0.95);
            this['icon' + i].inputEnabled = true;
            this['icon' + i].id = i;
            this['icon' + i].cnt = 1;
            this['icon' + i].events.onInputDown.add(this.changefun, this);
            this['icon' + i].events.onInputOver.add(this.btnOver, this);
            this['icon' + i].events.onInputOut.add(this.btnOut, this);
            if (i <= 5) {
                this.icongp1.add(this['icon' + i]);
            } else {
                this.icongp2.add(this['icon' + i]);
            }
        }

        this.icongp2.visible = false;

        this.bgcnt = 1;

        this.forwardbtn = game.add.sprite(346, 645, 'forwardbtn');
        this.forwardbtn.anchor.setTo(0.5);
        this.forwardbtn.inputEnabled = true;
        this.forwardbtn.events.onInputDown.add(function() {
            // this.bgcnt++;
            this.forwardbtn.visible = false;
            this.icongp1.visible = false;
            this.backwardbtn.visible = true;
            this.icongp2.visible = true;


        }, this);

        this.backwardbtn = game.add.sprite(232, 645, 'forwardbtn');
        this.backwardbtn.anchor.setTo(0.5);
        this.backwardbtn.scale.x = -this.backwardbtn.scale.x;
        this.backwardbtn.visible = false;
        this.backwardbtn.inputEnabled = true;
        this.backwardbtn.events.onInputDown.add(function() {
            // this.bgcnt--;
            this.forwardbtn.visible = true;
            this.icongp1.visible = true;
            this.backwardbtn.visible = false;
            this.icongp2.visible = false;


        }, this);



        // this.dummydrag = true;

        // this.dummyobject= game.add.sprite(-100,0,'forwardbtn');
        // this.dummyobject.anchor.setTo(0.5);
        // this.dummyobject.scale.setTo(0.5);



        var arro2x = [323, 252, 442, 705, 113, 410, 710];
        var arro2y = [433, 334, 414, 420, 402, 130, 440];

        for (i = 1; i <= 4; i++) {
            this['arrow' + i] = game.add.sprite(arro2x[i - 1], arro2y[i - 1], 'arrow');
            this['arrow' + i].anchor.setTo(0.5);
            this['arrow' + i].animations.add('arrow');
            this['arrow' + i].animations.play('arrow', 12, true);
            this['arrow' + i].visible = false;
            if (i == 2) {
                // this['arrow'+i].angle=90;
            }
            if (i == 1) {
                // this['arrow'+i].visible=true;
            }

        }

        /*  this.mcnt1=0;

         this.mcir = game.add.graphics(0,0);
         this.mcir.beginFill(0x666666,0);
         this.mcir.drawRect(0,0,504,800);
         this.mcir.inputEnabled=true;
         this.mcir.events.onInputDown.add(function(){
             this.mcnt1++;
           this['xcnt'+this.mcnt1]=game.input.activePointer.x;
           this['ycnt'+this.mcnt1]=game.input.activePointer.y;
         this.mcir = game.add.graphics(game.input.activePointer.x,game.input.activePointer.y);
         this.mcir.beginFill(0x000000,0.5);
         this.mcir.drawCircle(0,0,20);
         //  this.mcir = game.add.sprite(game.input.activePointer.x,game.input.activePointer.y,'dcleaner');
         // this.mcir.anchor.setTo(0.5);
         // this.mcir.scale.setTo(0.75);
         console.log(this['xcnt'+this.mcnt1]+':'+this['ycnt'+this.mcnt1]);
         //console.log(this['ycnt'+this.mcnt1]);

         },this);*/

        this.morebtn = game.add.sprite(60, 635, 'morebtn');
        this.morebtn.anchor.setTo(0.5);
        this.morebtn.scale.setTo(0.75);
        this.morebtn.inputEnabled = true;
        this.morebtn.input.useHandCursor = true;
        this.morebtn.events.onInputUp.add(this.moreLink, this);
        this.morebtn.events.onInputOver.add(this.btnOver, this);
        this.morebtn.events.onInputOut.add(this.btnOut, this);
        // this.levelGroup.add(this.morebtn);
        this.playbtn = game.add.sprite(451.4, 617, 'donebtn');
        this.playbtn.anchor.setTo(0.5);
        this.playbtn.scale.setTo(0);
        this.playbtn.inputEnabled = true;
        this.playbtn.input.useHandCursor = true;
        this.playbtn.events.onInputUp.add(this.enterRoom, this);
        this.playbtn.events.onInputOver.add(this.btnOver, this);
        this.playbtn.events.onInputOut.add(this.btnOut, this);

        if (Main.shutterOn[0]) {
            this.shutter = game.add.sprite(0, 0, 'shutterbg');
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
        this.effectFlag = [this.wall1, this.floor1, this.roof1, this.w_screen1, this.matt1, this.dhouse1, this.drawer1, this.chair1, this.rlight1];
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
        if (this.dummydrag) {
            this.dummyobject.x = game.input.activePointer.x;
            this.dummyobject.y = game.input.activePointer.y;
            console.log(game.input.activePointer.x + ':' + game.input.activePointer.y);
        }

        if (this.bdollDrag) {
            this.bdoll.x = game.input.activePointer.x;
            this.bdoll.y = game.input.activePointer.y;
        }
        // console.log(this.fincnt)
    },
    changefun: function(evt) {
        this.annai[evt.id - 1] = 1;
        if (evt.id == 1) {
            evt.cnt++;
            this.wall1.loadTexture('wall000' + evt.cnt);
            Main.decoFlag[0] = evt.cnt;
            if (evt.cnt >= 5) {
                evt.cnt = 0;
            }
        }
        if (evt.id == 2) {
            evt.cnt++;
            this.floor1.loadTexture('floor000' + evt.cnt);
            Main.decoFlag[1] = evt.cnt;
            if (evt.cnt >= 5) {
                evt.cnt = 0;
            }
        }
        if (evt.id == 3) {
            evt.cnt++;
            this.roof1.loadTexture('roof000' + evt.cnt);
            Main.decoFlag[2] = evt.cnt;
            if (evt.cnt >= 5) {
                evt.cnt = 0;
            }

        }

        if (evt.id == 4) {
            evt.cnt++;
            this.w_screen1.loadTexture('w_screen000' + evt.cnt);
            Main.decoFlag[3] = evt.cnt;
            if (evt.cnt >= 5) {
                evt.cnt = 0;
            }

        }

        if (evt.id == 5) {
            evt.cnt++;
            this.matt1.loadTexture('matt000' + evt.cnt);
            Main.decoFlag[4] = evt.cnt;
            if (evt.cnt >= 5) {
                evt.cnt = 0;
            }

        }

        if (evt.id == 6) {
            evt.cnt++;
            this.dhouse1.loadTexture('dhouse000' + evt.cnt);
            Main.decoFlag[5] = evt.cnt;
            if (evt.cnt >= 5) {
                evt.cnt = 0;
            }

        }

        if (evt.id == 7) {
            evt.cnt++;
            this.drawer1.loadTexture('drawer000' + evt.cnt);
            Main.decoFlag[6] = evt.cnt;
            if (evt.cnt >= 6) {
                evt.cnt = 0;
            }

        }

        if (evt.id == 8) {
            evt.cnt++;
            this.chair1.loadTexture('chair000' + evt.cnt);
            Main.decoFlag[7] = evt.cnt;
            if (evt.cnt >= 5) {
                evt.cnt = 0;
            }

        }

        if (evt.id == 9) {
            evt.cnt++;
            this.rlight1.loadTexture('rlight000' + evt.cnt);
            Main.decoFlag[8] = evt.cnt;
            if (evt.cnt >= 5) {
                evt.cnt = 0;
            }

        }



        if (this.annai.indexOf(0) < 0) {
            game.add.tween(this.playbtn.scale).to({
                x: 0.81,
                y: 0.81
            }, 800, Phaser.Easing.Elastic.Out, true);
        }
        effectssd = game.add.sprite(this.effectFlag[evt.id - 1].worldPosition.x, this.effectFlag[evt.id - 1].worldPosition.y, 'effectssd');
        effectssd.anchor.setTo(0.5);
        effectssd.animations.add('effectssd');
        effectssd.animations.play('effectssd', 20, false).onComplete.add(function(evt) {
            evt.destroy();
        }, this);
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
        }, 700, Phaser.Easing.Quadratic.Out, true, 1000);
        game.add.tween(this.betty2).to({
            x: 132
        }, 1600, Phaser.Easing.Quadratic.Out, true)
        game.add.tween(this.oliver).to({
            x: 371
        }, 1600, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
            game.add.tween(this.popup2.scale).to({
                x: 1,
                y: 1
            }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(this.bringPopUp3, this);
        }, this);
    },
    bringPopUp3: function() {
        game.add.tween(this.popup2).to({
            alpha: 0
        }, 700, Phaser.Easing.Quadratic.Out, true, 2500)
        game.add.tween(this.popup3.scale).to({
            x: 0.8,
            y: 0.8
        }, 700, Phaser.Easing.Quadratic.Out, true, 3000).onComplete.add(this.bringBottons, this);
    },
    bringBottons: function() {
        // game.add.tween(this.morebtn.scale).to({x:1, y:1}, 700, Phaser.Easing.Quadratic.Out, true);
        game.add.tween(this.playbtn.scale).to({
            x: 1,
            y: 1
        }, 700, Phaser.Easing.Quadratic.Out, true);
    },
    openLink: function() {
        // YYGSDK.navigate("game","logo");
    },
    moreLink: function() {
        //  YYGSDK.navigate("game","more");
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
            MyShowAD('dfinal_screen');
        });

    },
}

Main.dfinal_screen = function() {}

Main.dfinal_screen.prototype = {
    create: function() {
        this.annai = [0, 0, 0, 0, 0, 0, 0, 0, 0];
        this.levelGroup = game.add.group();
        // this.bg = game.add.sprite(0,0,'clbg');
        // this.levelGroup.add(this.bg);
        this.decgroup = game.add.group();

        this.floor1 = game.add.sprite(252, 531.5, 'floor000' + Main.decoFlag[1]);
        this.floor1.anchor.setTo(0.5);
        this.decgroup.add(this.floor1);

        this.roof1 = game.add.sprite(252, 108, 'roof000' + Main.decoFlag[2]);
        this.roof1.anchor.setTo(0.5);
        this.decgroup.add(this.roof1);

        this.rhole = game.add.sprite(236, 37.5, 'rhole');
        this.rhole.anchor.setTo(0.5);
        this.decgroup.add(this.rhole);

        this.wall1 = game.add.sprite(252, 367, 'wall000' + Main.decoFlag[0]);
        this.wall1.anchor.setTo(0.5);
        this.decgroup.add(this.wall1);

        this.line = game.add.sprite(252, 488.5, 'line');
        this.line.anchor.setTo(0.5);
        this.decgroup.add(this.line);

        this.roof_light = game.add.sprite(242.5, 189, 'roof_light');
        this.roof_light.anchor.setTo(0.5);
        this.decgroup.add(this.roof_light);

        this.wkeeper = game.add.sprite(231, 373, 'wkeeper');
        this.wkeeper.anchor.setTo(0.5);
        this.decgroup.add(this.wkeeper);

        this.wpic = game.add.sprite(16.5, 276, 'wpic');
        this.wpic.anchor.setTo(0.5);
        this.decgroup.add(this.wpic);

        this.window = game.add.sprite(222.5, 357.5, 'window');
        this.window.anchor.setTo(0.5);
        this.decgroup.add(this.window);

        this.w_screen1 = game.add.sprite(230.5, 355.5, 'w_screen000' + Main.decoFlag[3]);
        this.w_screen1.anchor.setTo(0.5);
        this.decgroup.add(this.w_screen1);

        this.book_keeper = game.add.sprite(487.5, 459, 'book_keeper');
        this.book_keeper.anchor.setTo(0.5);
        this.decgroup.add(this.book_keeper);

        this.rlight1 = game.add.sprite(250.5, 94, 'rlight000' + Main.decoFlag[8]);
        this.rlight1.anchor.setTo(0.5);
        this.decgroup.add(this.rlight1);

        this.wpic2 = game.add.sprite(234, 252.5, 'wpic2');
        this.wpic2.anchor.setTo(0.5);
        this.decgroup.add(this.wpic2);

        this.drawer1 = game.add.sprite(44, 463, 'drawer000' + Main.decoFlag[6]);
        this.drawer1.anchor.setTo(0.5);
        this.decgroup.add(this.drawer1);

        this.matt1 = game.add.sprite(251, 674.5, 'matt000' + Main.decoFlag[4]);
        this.matt1.anchor.setTo(0.5);
        this.decgroup.add(this.matt1);

        this.dhouse1 = game.add.sprite(160.5, 560, 'dhouse000' + Main.decoFlag[5]);
        this.dhouse1.anchor.setTo(0.5);
        this.decgroup.add(this.dhouse1);

        this.chair1 = game.add.sprite(378.95, 475, 'chair000' + Main.decoFlag[7]);
        this.chair1.anchor.setTo(0.5);
        this.decgroup.add(this.chair1);

        this.tgroup = game.add.group();

        this.ptbody1 = game.add.sprite(248.6, 477.45, 'ptbody1');
        this.ptbody1.anchor.setTo(0.5);
        this.tgroup.add(this.ptbody1);

        this.thand = game.add.sprite(248.6, 477.45, 'thand');
        this.thand.anchor.setTo(0.5);
        this.tgroup.add(this.thand);

        this.ptbody2 = game.add.sprite(246.25, 415.1, 'ptbody2');
        this.ptbody2.anchor.setTo(0.5);
        this.tgroup.add(this.ptbody2);

        this.tgroup.scale.setTo(0.9);
        this.tgroup.x = 130;
        this.tgroup.y = 70;

        this.dog_ani = game.add.sprite(260, 590, 'dog_ani');
        this.dog_ani.anchor.setTo(0.5);
        this.dog_ani.scale.setTo(0.75);



        // this.dummydrag = true;

        // this.dummyobject= game.add.sprite(-100,0,'forwardbtn');
        // this.dummyobject.anchor.setTo(0.5);
        // this.dummyobject.scale.setTo(0.5);



        var arro2x = [323, 252, 442, 705, 113, 410, 710];
        var arro2y = [433, 334, 414, 420, 402, 130, 440];

        for (i = 1; i <= 4; i++) {
            this['arrow' + i] = game.add.sprite(arro2x[i - 1], arro2y[i - 1], 'arrow');
            this['arrow' + i].anchor.setTo(0.5);
            this['arrow' + i].animations.add('arrow');
            this['arrow' + i].animations.play('arrow', 12, true);
            this['arrow' + i].visible = false;
            if (i == 2) {
                // this['arrow'+i].angle=90;
            }
            if (i == 1) {
                // this['arrow'+i].visible=true;
            }

        }

        /*  this.mcnt1=0;

         this.mcir = game.add.graphics(0,0);
         this.mcir.beginFill(0x666666,0);
         this.mcir.drawRect(0,0,504,800);
         this.mcir.inputEnabled=true;
         this.mcir.events.onInputDown.add(function(){
             this.mcnt1++;
           this['xcnt'+this.mcnt1]=game.input.activePointer.x;
           this['ycnt'+this.mcnt1]=game.input.activePointer.y;
         this.mcir = game.add.graphics(game.input.activePointer.x,game.input.activePointer.y);
         this.mcir.beginFill(0x000000,0.5);
         this.mcir.drawCircle(0,0,20);
         //  this.mcir = game.add.sprite(game.input.activePointer.x,game.input.activePointer.y,'dcleaner');
         // this.mcir.anchor.setTo(0.5);
         // this.mcir.scale.setTo(0.75);
         console.log(this['xcnt'+this.mcnt1]+':'+this['ycnt'+this.mcnt1]);
         //console.log(this['ycnt'+this.mcnt1]);

         },this);*/

        this.morebtn = game.add.sprite(60, 760, 'morebtn');
        this.morebtn.anchor.setTo(0.5);
        this.morebtn.scale.setTo(0.75);
        this.morebtn.inputEnabled = true;
        this.morebtn.input.useHandCursor = true;
        this.morebtn.events.onInputUp.add(this.moreLink, this);
        this.morebtn.events.onInputOver.add(this.btnOver, this);
        this.morebtn.events.onInputOut.add(this.btnOut, this);
        // this.levelGroup.add(this.morebtn);
        this.playbtn = game.add.sprite(451.4, 740, 'donebtn');
        this.playbtn.anchor.setTo(0.5);
        this.playbtn.scale.setTo(0);
        this.playbtn.inputEnabled = true;
        this.playbtn.input.useHandCursor = true;
        this.playbtn.events.onInputUp.add(this.enterRoom, this);
        this.playbtn.events.onInputOver.add(this.btnOver, this);
        this.playbtn.events.onInputOut.add(this.btnOut, this);

        if (Main.shutterOn[0]) {
            this.shutter = game.add.sprite(0, 0, 'shutterbg');
            game.add.tween(this.shutter).to({
                y: -850
            }, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
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
        this.effectFlag = [this.wall1, this.floor1, this.roof1, this.w_screen1, this.matt1, this.dhouse1, this.drawer1, this.chair1, this.rlight1];
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
        if (this.dummydrag) {
            this.dummyobject.x = game.input.activePointer.x;
            this.dummyobject.y = game.input.activePointer.y;
            console.log(game.input.activePointer.x + ':' + game.input.activePointer.y);
        }

        if (this.bdollDrag) {
            this.bdoll.x = game.input.activePointer.x;
            this.bdoll.y = game.input.activePointer.y;
        }
        // console.log(this.fincnt)
    },
    changefun: function(evt) {
        this.annai[evt.id - 1] = 1;
        if (evt.id == 1) {
            evt.cnt++;
            this.wall1.loadTexture('wall000' + evt.cnt);
            Main.decoFlag[0] = evt.cnt;
            if (evt.cnt >= 5) {
                evt.cnt = 0;
            }
        }
        if (evt.id == 2) {
            evt.cnt++;
            this.floor1.loadTexture('floor000' + evt.cnt);
            Main.decoFlag[1] = evt.cnt;
            if (evt.cnt >= 5) {
                evt.cnt = 0;
            }
        }
        if (evt.id == 3) {
            evt.cnt++;
            this.roof1.loadTexture('roof000' + evt.cnt);
            Main.decoFlag[2] = evt.cnt;
            if (evt.cnt >= 5) {
                evt.cnt = 0;
            }

        }

        if (evt.id == 4) {
            evt.cnt++;
            this.w_screen1.loadTexture('w_screen000' + evt.cnt);
            Main.decoFlag[3] = evt.cnt;
            if (evt.cnt >= 5) {
                evt.cnt = 0;
            }

        }

        if (evt.id == 5) {
            evt.cnt++;
            this.matt1.loadTexture('matt000' + evt.cnt);
            Main.decoFlag[4] = evt.cnt;
            if (evt.cnt >= 5) {
                evt.cnt = 0;
            }

        }

        if (evt.id == 6) {
            evt.cnt++;
            this.dhouse1.loadTexture('dhouse000' + evt.cnt);
            Main.decoFlag[5] = evt.cnt;
            if (evt.cnt >= 5) {
                evt.cnt = 0;
            }

        }

        if (evt.id == 7) {
            evt.cnt++;
            this.drawer1.loadTexture('drawer000' + evt.cnt);
            Main.decoFlag[6] = evt.cnt;
            if (evt.cnt >= 6) {
                evt.cnt = 0;
            }

        }

        if (evt.id == 8) {
            evt.cnt++;
            this.chair1.loadTexture('chair000' + evt.cnt);
            Main.decoFlag[7] = evt.cnt;
            if (evt.cnt >= 5) {
                evt.cnt = 0;
            }

        }

        if (evt.id == 9) {
            evt.cnt++;
            this.rlight1.loadTexture('rlight000' + evt.cnt);
            Main.decoFlag[8] = evt.cnt;
            if (evt.cnt >= 5) {
                evt.cnt = 0;
            }

        }



        if (this.annai.indexOf(0) < 0) {
            game.add.tween(this.playbtn.scale).to({
                x: 0.81,
                y: 0.81
            }, 800, Phaser.Easing.Elastic.Out, true);
        }
        effectssd = game.add.sprite(this.effectFlag[evt.id - 1].worldPosition.x, this.effectFlag[evt.id - 1].worldPosition.y, 'effectssd');
        effectssd.anchor.setTo(0.5);
        effectssd.animations.add('effectssd');
        effectssd.animations.play('effectssd', 20, false).onComplete.add(function(evt) {
            evt.destroy();
        }, this);
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
        }, 700, Phaser.Easing.Quadratic.Out, true, 1000);
        game.add.tween(this.betty2).to({
            x: 132
        }, 1600, Phaser.Easing.Quadratic.Out, true)
        game.add.tween(this.oliver).to({
            x: 371
        }, 1600, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
            game.add.tween(this.popup2.scale).to({
                x: 1,
                y: 1
            }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(this.bringPopUp3, this);
        }, this);
    },
    bringPopUp3: function() {
        game.add.tween(this.popup2).to({
            alpha: 0
        }, 700, Phaser.Easing.Quadratic.Out, true, 2500)
        game.add.tween(this.popup3.scale).to({
            x: 0.8,
            y: 0.8
        }, 700, Phaser.Easing.Quadratic.Out, true, 3000).onComplete.add(this.bringBottons, this);
    },
    bringBottons: function() {
        // game.add.tween(this.morebtn.scale).to({x:1, y:1}, 700, Phaser.Easing.Quadratic.Out, true);
        game.add.tween(this.playbtn.scale).to({
            x: 1,
            y: 1
        }, 700, Phaser.Easing.Quadratic.Out, true);
    },
    openLink: function() {
        // YYGSDK.navigate("game","logo");
    },
    moreLink: function() {
        // YYGSDK.navigate("game","more");
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
            MyShowAD('yard_sell1');
        });

    },
}

//y111111111111111111
Main.yard_sell1 = function() {}

Main.yard_sell1.prototype = {
    create: function() {
        this.levelGroup = game.add.group();

        this.y1_bg = game.add.sprite(0, 0, 'y1_bg');
        this.levelGroup.add(this.y1_bg);

        this.y1_bg2 = game.add.sprite(250, 340.4, 'y1_bg2');
        this.y1_bg2.anchor.setTo(0.5);
        this.levelGroup.add(this.y1_bg2);

        this.panel_grp1 = game.add.group();


        this.y1_panel = game.add.sprite(251.05, 356.35, 'y1_panel');
        this.y1_panel.anchor.setTo(0.5);
        this.panel_grp1.add(this.y1_panel);

        this.y1_sell_text6 = game.add.sprite(243.9, 512.2, 'y1_sell_text6');
        this.y1_sell_text6.anchor.setTo(0.5);
        this.panel_grp1.add(this.y1_sell_text6);

        this.y1_sell_text1 = game.add.sprite(248.65, 325.05, 'y1_sell_text1');
        this.y1_sell_text1.anchor.setTo(0.5);
        this.panel_grp1.add(this.y1_sell_text1);

        this.y1_sell_text2 = game.add.sprite(248.65, 325.05, 'y1_sell_text2');
        this.y1_sell_text2.anchor.setTo(0.5);
        this.y1_sell_text2.alpha = 0;
        this.panel_grp1.add(this.y1_sell_text2);

        this.y1_sell_text3 = game.add.sprite(236.85, 325.45, 'y1_sell_text3');
        this.y1_sell_text3.anchor.setTo(0.5);
        this.y1_sell_text3.alpha = 0;
        this.panel_grp1.add(this.y1_sell_text3);

        this.y1_sell_text4 = game.add.sprite(249.1, 314.5, 'y1_sell_text4');
        this.y1_sell_text4.anchor.setTo(0.5);
        this.y1_sell_text4.alpha = 0;
        this.panel_grp1.add(this.y1_sell_text4);

        this.y1_sell_text5 = game.add.sprite(244.85, 333.9, 'y1_sell_text5');
        this.y1_sell_text5.anchor.setTo(0.5);
        this.y1_sell_text5.alpha = 0;
        this.panel_grp1.add(this.y1_sell_text5);

        this.icone_grp = game.add.group();

        this.y1_panel2 = game.add.sprite(257.1, 820.35, 'y1_panel2');
        this.y1_panel2.anchor.setTo(0.5);
        this.icone_grp.add(this.y1_panel2);

        this.i1 = game.add.sprite(210.15, 713.15, 'y1_sell_text3');
        this.i1.anchor.setTo(0.5);
        this.i1.scale.setTo(0.35);

        this.i1.events.onInputDown.add(function() {
            this.arrow.visible = false;
            this.y1_sell_text3.alpha = 0.5;

        }, this);
        this.i1.events.onInputUp.add(function() {

            if ((game.input.activePointer.x > 90 && game.input.activePointer.x < 380 && game.input.activePointer.y > 140 && game.input.activePointer.y < 500)) {
                this.y1_sell_text3.alpha = 1;
                this.i1.kill();

                this.arrow.visible = true;
                this.arrow.x = 300;
                this.arrow.y = 640;

                this.i2.inputEnabled = true;
                this.i2.input.useHandCursor = true;
                this.i2.input.enableDrag();

            } else {

                game.add.tween(this.i1).to({
                    x: 210.15,
                    y: 713.15
                }, 500, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {

                    this.arrow.visible = true;


                }, this);
                this.y1_sell_text3.alpha = 0;

            }

        }, this);

        this.icone_grp.add(this.i1);

        this.i2 = game.add.sprite(302.9, 706.9, 'y1_sell_text4');
        this.i2.anchor.setTo(0.5);
        this.i2.scale.setTo(0.35);

        this.i2.events.onInputDown.add(function() {
            this.arrow.visible = false;
            this.y1_sell_text4.alpha = 0.5;

        }, this);
        this.i2.events.onInputUp.add(function() {

            if ((game.input.activePointer.x > 90 && game.input.activePointer.x < 380 && game.input.activePointer.y > 140 && game.input.activePointer.y < 500)) {
                this.y1_sell_text4.alpha = 1;
                this.i2.kill();

                this.arrow.visible = true;
                this.arrow.x = 400;
                this.arrow.y = 700;

                this.i4.inputEnabled = true;
                this.i4.input.useHandCursor = true;
                this.i4.input.enableDrag();

            } else {

                game.add.tween(this.i2).to({
                    x: 302.9,
                    y: 706.9
                }, 500, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {

                    this.arrow.visible = true;


                }, this);
                this.y1_sell_text4.alpha = 0;

            }

        }, this);
        this.icone_grp.add(this.i2);

        this.i3 = game.add.sprite(110.65, 716, 'y1_sell_text2');
        this.i3.anchor.setTo(0.5);
        this.i3.scale.setTo(0.35);
        this.i3.inputEnabled = true;
        this.i3.input.useHandCursor = true;
        this.i3.input.enableDrag();
        this.i3.events.onInputDown.add(function() {
            this.arrow.visible = false;
            this.y1_sell_text2.alpha = 0.5;

        }, this);
        this.i3.events.onInputUp.add(function() {

            if ((game.input.activePointer.x > 90 && game.input.activePointer.x < 380 && game.input.activePointer.y > 140 && game.input.activePointer.y < 500)) {
                this.y1_sell_text2.alpha = 1;
                this.i3.kill();

                this.arrow.visible = true;
                this.arrow.x = 210;
                this.arrow.y = 640;

                this.i1.inputEnabled = true;
                this.i1.input.useHandCursor = true;
                this.i1.input.enableDrag();

            } else {

                game.add.tween(this.i3).to({
                    x: 110.65,
                    y: 716
                }, 500, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {

                    this.arrow.visible = true;


                }, this);
                this.y1_sell_text2.alpha = 0;

            }

        }, this);

        this.icone_grp.add(this.i3);

        this.i4 = game.add.sprite(405.25, 715.45, 'y1_sell_text5');
        this.i4.anchor.setTo(0.5);
        this.i4.scale.setTo(0.35);

        this.i4.events.onInputDown.add(function() {
            this.arrow.visible = false;
            this.y1_sell_text5.alpha = 0.5;

        }, this);
        this.i4.events.onInputUp.add(function() {

            if ((game.input.activePointer.x > 90 && game.input.activePointer.x < 380 && game.input.activePointer.y > 140 && game.input.activePointer.y < 500)) {
                this.y1_sell_text5.alpha = 1;
                this.i4.kill();
                this.arrow.visible = false;

                game.add.tween(this.playbtn.scale).to({
                    x: 1,
                    y: 1
                }, 500, Phaser.Easing.Quadratic.Out, true);

            } else {

                game.add.tween(this.i4).to({
                    x: 405.25,
                    y: 715.45
                }, 500, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {

                    this.arrow.visible = true;


                }, this);
                this.y1_sell_text5.alpha = 0;

            }

        }, this);
        this.icone_grp.add(this.i4);

        this.icone_grp.y = 180;
        this.panel_grp1.x = -500;


        this.arrow = game.add.sprite(105, 700, 'arrow');
        this.arrow.anchor.setTo(0.5);
        this.arrow.visible = false;
        this.arrow.animations.add('arrow');
        this.arrow.animations.play('arrow', 15, true);


        this.morebtn = game.add.sprite(75.55, 600, 'btn0004');
        this.morebtn.anchor.setTo(0.5);
        this.morebtn.scale.setTo(1);
        this.morebtn.inputEnabled = true;
        this.morebtn.input.useHandCursor = true;
        this.morebtn.events.onInputUp.add(this.moreLink, this);
        this.morebtn.events.onInputOver.add(this.btnOver, this);
        this.morebtn.events.onInputOut.add(this.btnOut, this);
        // this.levelGroup.add(this.morebtn);

        this.playbtn = game.add.sprite(431.4, 600, 'btn0002');
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
                game.add.tween(this.panel_grp1).to({
                    x: 0
                }, 1000, Phaser.Easing.Quadratic.Out, true, 500);
                game.add.tween(this.icone_grp).to({
                    y: 0
                }, 1000, Phaser.Easing.Quadratic.Out, true, 1500).onComplete.add(function() {
                    this.arrow.visible = true;

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
    update: function() {

        // console.log(game.input.activePointer.x+':'+game.input.activePointer.y);


        if (this.dummydrag) {
            this.dummyobject.x = game.input.activePointer.x;
            this.dummyobject.y = game.input.activePointer.y;
            console.log(game.input.activePointer.x + ':' + game.input.activePointer.y);
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
        // YYGSDK.navigate("game","more");
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
            MyShowAD('yard_sell2');
        });

    },
}


//y2222222222222222222222222
Main.yard_sell2 = function() {}

Main.yard_sell2.prototype = {
    create: function() {
        this.levelGroup = game.add.group();

        this.y1_bg = game.add.sprite(0, 0, 'y1_bg');
        this.levelGroup.add(this.y1_bg);

        this.dad = game.add.sprite(1400, 462.1, 'oliver');
        this.dad.anchor.setTo(0.5);
        this.dad.scale.setTo(0.75);

        this.mom = game.add.sprite(1220, 448, 'betty2');
        this.mom.anchor.setTo(0.5);
        this.mom.scale.setTo(0.75);

        this.o_text2 = game.add.sprite(120, 150, 'o_text2');
        this.o_text2.anchor.setTo(0.5);
        this.o_text2.scale.setTo(0);


        this.y1_chr = game.add.sprite(80, 370, 'y1_chr');
        this.y1_chr.anchor.setTo(0.5);
        this.y1_chr.scale.setTo(0.7);
        this.levelGroup.add(this.y1_chr);

        this.y1_bg2 = game.add.sprite(250, 340.4, 'y1_bg2');
        this.y1_bg2.anchor.setTo(0.5);
        this.levelGroup.add(this.y1_bg2);


        this.y2_text_panel = game.add.sprite(324.15, 415.6, 'y2_text_panel');
        this.y2_text_panel.anchor.setTo(0.5);
        this.levelGroup.add(this.y2_text_panel);

        for (i = 1; i <= 16; i++) {

            if (i == 1) {
                this['y2_' + i] = game.add.sprite(319.9, 479.65, 'y2_' + i)

            }

            if (i == 2) {
                this['y2_' + i] = game.add.sprite(400.5, 544.9, 'y2_' + i)

            }

            if (i == 3) {
                this['y2_' + i] = game.add.sprite(424.5, 635.45, 'y2_' + i)

            }

            if (i == 4) {
                this['y2_' + i] = game.add.sprite(200, 540, 'y2_' + i)

            }
            if (i == 5) {
                this['y2_' + i] = game.add.sprite(70.45, 593.95, 'y2_' + i)

            }

            if (i == 6) {
                this['y2_' + i] = game.add.sprite(70, 565, 'y2_' + i)

            }

            if (i == 7) {
                this['y2_' + i] = game.add.sprite(188.2, 615.5, 'y2_' + i)

            }

            if (i == 8) {
                this['y2_' + i] = game.add.sprite(312.45, 594.75, 'y2_' + i)

            }

            if (i == 9) {
                this['y2_' + i] = game.add.sprite(312.45, 430.45, 'y2_' + i)

            }

            if (i == 10) {
                this['y2_' + i] = game.add.sprite(25.85, 360.95, 'y2_' + i)

            }

            if (i == 11) {
                this['y2_' + i] = game.add.sprite(435.8, 437, 'y2_' + i)

            }

            if (i == 12) {
                this['y2_' + i] = game.add.sprite(57.3, 381.45, 'y2_' + i)

            }

            if (i == 13) {
                this['y2_' + i] = game.add.sprite(269.25, 433.45, 'y2_' + i)

            }

            if (i == 14) {
                this['y2_' + i] = game.add.sprite(215.3, 487, 'y2_' + i)

            }

            if (i == 15) {
                this['y2_' + i] = game.add.sprite(131.8, 369.45, 'y2_' + i)

            }

            if (i == 16) {
                this['y2_' + i] = game.add.sprite(195.95, 450, 'y2_' + i)

            }
            this['y2_' + i].anchor.setTo(0.5);
            this['y2_' + i].alpha = 0;

            // if (i==3) {
            // this['y2_'+i].alpha = 1;


            // }

        }


        for (i = 1; i <= 17; i++) {

            if (i == 1) {
                this['y2_tag' + i] = game.add.sprite(33.2, 406.7, 'y2_tag' + i)

            }

            if (i == 2) {
                this['y2_tag' + i] = game.add.sprite(101.1, 407.2, 'y2_tag' + i)

            }

            if (i == 3) {
                this['y2_tag' + i] = game.add.sprite(301.1, 444.15, 'y2_tag' + i)

            }

            if (i == 4) {
                this['y2_tag' + i] = game.add.sprite(447.55, 384.15, 'y2_tag' + i)

            }

            if (i == 5) {
                this['y2_tag' + i] = game.add.sprite(171.7, 386.65, 'y2_tag' + i)

            }

            if (i == 6) {
                this['y2_tag' + i] = game.add.sprite(378, 440.2, 'y2_tag' + i)

            }

            if (i == 7) {
                this['y2_tag' + i] = game.add.sprite(470.55, 436.5, 'y2_tag' + i)

            }

            if (i == 8) {
                this['y2_tag' + i] = game.add.sprite(362.3, 505, 'y2_tag' + i)

            }
            if (i == 9) {
                this['y2_tag' + i] = game.add.sprite(213.3, 538, 'y2_tag' + i)

            }

            if (i == 10) {
                this['y2_tag' + i] = game.add.sprite(249.75, 482.8, 'y2_tag' + i)

            }

            if (i == 11) {
                this['y2_tag' + i] = game.add.sprite(112.2, 534, 'y2_tag' + i)

            }

            if (i == 12) {
                this['y2_tag' + i] = game.add.sprite(89.2, 566, 'y2_tag' + i)

            }
            if (i == 13) {
                this['y2_tag' + i] = game.add.sprite(322.5, 589.5, 'y2_tag' + i)

            }
            if (i == 14) {
                this['y2_tag' + i] = game.add.sprite(460.4, 643.4, 'y2_tag' + i)

            }
            if (i == 15) {
                this['y2_tag' + i] = game.add.sprite(384.5, 720, 'y2_tag' + i)

            }
            if (i == 16) {
                this['y2_tag' + i] = game.add.sprite(215.5, 446.5, 'y2_tag' + i)

            }

            if (i == 17) {
                this['y2_tag' + i] = game.add.sprite(210, 575, 'y2_tag16')

            }

            this['y2_tag' + i].anchor.setTo(0.5);
            this['y2_tag' + i].alpha = 0;

            // if (i==17) {
            // this['y2_tag'+i].alpha = 1;

            // }

        }


        this.icone_grp = game.add.group();

        this.y1_panel2 = game.add.sprite(253.95, 863, 'y1_panel2');
        this.y1_panel2.anchor.setTo(0.5);
        this.icone_grp.add(this.y1_panel2);

        for (i = 1; i <= 5; i++) {

            if (i == 1) {
                this['y2_icon' + i] = game.add.sprite(105, 762, 'y2_' + i);

            }

            if (i == 2) {
                this['y2_icon' + i] = game.add.sprite(235, 762, 'y2_' + i);

            }

            if (i == 3) {
                this['y2_icon' + i] = game.add.sprite(315, 762, 'y2_' + i);

            }

            if (i == 4) {
                this['y2_icon' + i] = game.add.sprite(380, 762, 'y2_' + i);

            }

            if (i == 5) {
                this['y2_icon' + i] = game.add.sprite(440, 762, 'y2_' + i);

            }
            this['y2_icon' + i].anchor.setTo(0.5);
            this['y2_icon' + i].scale.setTo(0.5);
            this['y2_icon' + i].alpha = 0.5;
            this.icone_grp.add(this['y2_icon' + i]);
        }


        this.icone_grp2 = game.add.group();

        this.y1_panel2 = game.add.sprite(253.95, 863, 'y1_panel2');
        this.y1_panel2.anchor.setTo(0.5);
        this.icone_grp2.add(this.y1_panel2);

        for (i = 6; i <= 9; i++) {

            if (i == 6) {
                this['y2_icon' + i] = game.add.sprite(105, 755, 'y2_' + i);

            }

            if (i == 7) {
                this['y2_icon' + i] = game.add.sprite(188.2, 755, 'y2_' + i);

            }

            if (i == 8) {
                this['y2_icon' + i] = game.add.sprite(270, 750, 'y2_' + i);

            }

            if (i == 9) {
                this['y2_icon' + i] = game.add.sprite(360, 750, 'y2_16');

            }
            this['y2_icon' + i].anchor.setTo(0.5);
            this['y2_icon' + i].scale.setTo(0.5);
            this['y2_icon' + i].alpha = 0.5;
            this.icone_grp2.add(this['y2_icon' + i]);

            if (i == 6) {
                this['y2_icon' + i].alpha = 1;

            }
        }




        this.icone_grp3 = game.add.group();

        this.y1_panel2 = game.add.sprite(253.95, 863, 'y1_panel2');
        this.y1_panel2.anchor.setTo(0.5);
        this.icone_grp3.add(this.y1_panel2);
        //..................
        for (i = 10; i <= 16; i++) {

            if (i == 10) {
                this['y2_icon' + i] = game.add.sprite(70, 750, 'y2_9');

            }

            if (i == 11) {
                this['y2_icon' + i] = game.add.sprite(150, 750, 'y2_10');

            }

            if (i == 12) {
                this['y2_icon' + i] = game.add.sprite(220, 750, 'y2_11');

            }

            if (i == 13) {
                this['y2_icon' + i] = game.add.sprite(290, 750, 'y2_12');

            }

            if (i == 14) {
                this['y2_icon' + i] = game.add.sprite(330, 750, 'y2_13');

            }
            if (i == 15) {
                this['y2_icon' + i] = game.add.sprite(380, 750, 'y2_14');

            }

            if (i == 16) {
                this['y2_icon' + i] = game.add.sprite(440, 750, 'y2_15');

            }
            this['y2_icon' + i].anchor.setTo(0.5);
            this['y2_icon' + i].alpha = 0.5;
            // this['y2_icon'+i].scale.setTo(0.5);
            this.icone_grp3.add(this['y2_icon' + i]);
        }

        this.t_text0003 = game.add.sprite(250, 160, 't_text3');
        this.t_text0003.anchor.setTo(0.5);
        this.t_text0003.scale.setTo(0);





        this.timer01 = game.add.sprite(1372.6, 279.6, 'timer01');
        this.timer01.anchor.setTo(0.5);






        this.y2_icon6.scale.setTo(1);
        this.y2_icon8.scale.setTo(0.7);
        this.y2_icon9.scale.setTo(1);

        this.y2_icon10.alpha = 1;
        this.y2_icon1.alpha = 1;
        this.y2_icon1.inputEnabled = true;
        this.y2_icon1.input.useHandCursor = true;
        this.y2_icon1.input.enableDrag();
        this.y2_icon1.events.onInputDown.add(function() {
            this.arrow.visible = false;
            this.y2_1.alpha = 0.5;

        }, this);
        this.y2_icon1.events.onInputUp.add(function() {

            if ((game.input.activePointer.x > 235 && game.input.activePointer.x < 500 && game.input.activePointer.y > 400 && game.input.activePointer.y < 750)) {
                this.y2_1.alpha = 1;
                this.y2_icon1.kill();




                this.arrow.visible = true;
                this.arrow.x = 240;
                this.arrow.y = 700;
                this.y2_icon2.alpha = 1;
                this.y2_tag4.alpha = 1;

                this.y2_icon2.inputEnabled = true;
                this.y2_icon2.input.useHandCursor = true;
                this.y2_icon2.input.enableDrag();

            } else {

                game.add.tween(this.y2_icon1).to({
                    x: 105,
                    y: 762
                }, 500, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {

                    this.arrow.visible = true;


                }, this);
                this.y2_1.alpha = 0;

            }

        }, this);


        this.y2_icon2.events.onInputDown.add(function() {
            this.arrow.visible = false;
            this.y2_2.alpha = 0.5;

        }, this);
        this.y2_icon2.events.onInputUp.add(function() {

            if ((game.input.activePointer.x > 100 && game.input.activePointer.x < 500 && game.input.activePointer.y > 300 && game.input.activePointer.y < 600)) {
                this.y2_2.alpha = 1;
                this.y2_icon2.kill();


                this.arrow.visible = true;
                this.arrow.x = 325;
                this.arrow.y = 680;
                this.y2_icon3.alpha = 1;
                this.y2_tag8.alpha = 1;

                this.y2_icon3.inputEnabled = true;
                this.y2_icon3.input.useHandCursor = true;
                this.y2_icon3.input.enableDrag();

            } else {

                game.add.tween(this.y2_icon2).to({
                    x: 235,
                    y: 762
                }, 500, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {

                    this.arrow.visible = true;


                }, this);
                this.y2_2.alpha = 0;

            }

        }, this);



        this.y2_icon3.events.onInputDown.add(function() {
            this.arrow.visible = false;
            this.y2_3.alpha = 0.5;

        }, this);
        this.y2_icon3.events.onInputUp.add(function() {

            if ((game.input.activePointer.x > 100 && game.input.activePointer.x < 500 && game.input.activePointer.y > 300 && game.input.activePointer.y < 750)) {
                this.y2_3.alpha = 1;
                this.y2_icon3.kill();


                this.arrow.visible = true;
                this.arrow.x = 380;
                this.arrow.y = 700;
                this.y2_icon4.alpha = 1;
                this.y2_tag14.alpha = 1;

                this.y2_icon4.inputEnabled = true;
                this.y2_icon4.input.useHandCursor = true;
                this.y2_icon4.input.enableDrag();

            } else {

                game.add.tween(this.y2_icon3).to({
                    x: 315,
                    y: 762
                }, 500, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {

                    this.arrow.visible = true;


                }, this);
                this.y2_3.alpha = 0;

            }

        }, this);

        this.y2_icon4.events.onInputDown.add(function() {
            this.arrow.visible = false;
            this.y2_4.alpha = 0.5;

        }, this);
        this.y2_icon4.events.onInputUp.add(function() {

            if ((game.input.activePointer.x > 70 && game.input.activePointer.x < 400 && game.input.activePointer.y > 400 && game.input.activePointer.y < 650)) {
                this.y2_4.alpha = 1;
                this.y2_icon4.kill();


                this.arrow.visible = true;
                this.arrow.x = 435;
                this.arrow.y = 680;
                this.y2_icon5.alpha = 1;
                this.y2_tag9.alpha = 1;

                this.y2_icon5.inputEnabled = true;
                this.y2_icon5.input.useHandCursor = true;
                this.y2_icon5.input.enableDrag();

            } else {

                game.add.tween(this.y2_icon4).to({
                    x: 380,
                    y: 762
                }, 500, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {

                    this.arrow.visible = true;


                }, this);
                this.y2_4.alpha = 0;

            }

        }, this);


        this.y2_icon5.events.onInputDown.add(function() {
            this.arrow.visible = false;
            this.y2_5.alpha = 0.5;

        }, this);
        this.y2_icon5.events.onInputUp.add(function() {

            if ((game.input.activePointer.x > 0 && game.input.activePointer.x < 400 && game.input.activePointer.y > 360 && game.input.activePointer.y < 700)) {
                this.y2_5.alpha = 1;
                this.y2_icon5.kill();

                this.y2_tag11.alpha = 1;

                //   this.arrow.visible = true; 
                //   this.arrow.x = 430; 
                //   this.arrow.y = 680; 
                //   this.y2_icon2.alpha = 1;

                // this.y2_icon5.inputEnabled = true;
                // this.y2_icon5.input.useHandCursor = true;
                // this.y2_icon5.input.enableDrag();

                game.add.tween(this.icone_grp).to({
                    y: 200
                }, 1000, Phaser.Easing.Quadratic.Out, true, 1000).onComplete.add(function() {
                    game.add.tween(this.icone_grp2).to({
                        y: 0
                    }, 1000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                        this.arrow.visible = true;
                        this.arrow.x = 105;
                        this.arrow.y = 690;
                        this.y2_icon6.inputEnabled = true;
                        this.y2_icon6.input.useHandCursor = true;
                        this.y2_icon6.input.enableDrag();
                    }, this);
                }, this);

            } else {

                game.add.tween(this.y2_icon5).to({
                    x: 440,
                    y: 762
                }, 500, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {

                    this.arrow.visible = true;


                }, this);
                this.y2_5.alpha = 0;

            }

        }, this);


        this.y2_icon6.events.onInputDown.add(function() {
            this.arrow.visible = false;
            this.y2_6.alpha = 0.5;

        }, this);
        this.y2_icon6.events.onInputUp.add(function() {

            if ((game.input.activePointer.x > 0 && game.input.activePointer.x < 400 && game.input.activePointer.y > 340 && game.input.activePointer.y < 650)) {
                this.y2_6.alpha = 1;
                this.y2_icon6.kill();


                this.arrow.visible = true;
                this.arrow.x = 188;
                this.arrow.y = 675;
                this.y2_icon7.alpha = 1;

                this.y2_tag12.alpha = 1;

                this.y2_icon7.inputEnabled = true;
                this.y2_icon7.input.useHandCursor = true;
                this.y2_icon7.input.enableDrag();

            } else {

                game.add.tween(this.y2_icon6).to({
                    x: 105,
                    y: 755
                }, 500, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {

                    this.arrow.visible = true;


                }, this);
                this.y2_6.alpha = 0;

            }

        }, this);


        this.y2_icon7.events.onInputDown.add(function() {
            this.arrow.visible = false;
            this.y2_7.alpha = 0.5;

        }, this);
        this.y2_icon7.events.onInputUp.add(function() {

            if ((game.input.activePointer.x > 0 && game.input.activePointer.x < 400 && game.input.activePointer.y > 340 && game.input.activePointer.y < 650)) {
                this.y2_7.alpha = 1;
                this.y2_icon7.kill();

                this.y2_tag17.alpha = 1;

                this.arrow.visible = true;
                this.arrow.x = 270;
                this.arrow.y = 670;
                this.y2_icon8.alpha = 1;

                this.y2_icon8.inputEnabled = true;
                this.y2_icon8.input.useHandCursor = true;
                this.y2_icon8.input.enableDrag();

            } else {

                game.add.tween(this.y2_icon7).to({
                    x: 188.2,
                    y: 755
                }, 500, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {

                    this.arrow.visible = true;


                }, this);
                this.y2_7.alpha = 0;

            }

        }, this);


        this.y2_icon8.events.onInputDown.add(function() {
            this.arrow.visible = false;
            this.y2_8.alpha = 0.5;

        }, this);
        this.y2_icon8.events.onInputUp.add(function() {

            if ((game.input.activePointer.x > 0 && game.input.activePointer.x < 400 && game.input.activePointer.y > 340 && game.input.activePointer.y < 650)) {
                this.y2_8.alpha = 1;
                this.y2_tag13.alpha = 1;
                this.y2_icon8.kill();


                this.arrow.visible = true;
                this.arrow.x = 360;
                this.arrow.y = 680;
                this.y2_icon9.alpha = 1;

                this.y2_icon9.inputEnabled = true;
                this.y2_icon9.input.useHandCursor = true;
                this.y2_icon9.input.enableDrag();

            } else {

                game.add.tween(this.y2_icon8).to({
                    x: 270,
                    y: 750
                }, 500, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {

                    this.arrow.visible = true;


                }, this);
                this.y2_8.alpha = 0;

            }

        }, this);

        this.y2_icon9.events.onInputDown.add(function() {
            this.arrow.visible = false;
            this.y2_16.alpha = 0.5;

        }, this);
        this.y2_icon9.events.onInputUp.add(function() {

            if ((game.input.activePointer.x > 0 && game.input.activePointer.x < 500 && game.input.activePointer.y > 240 && game.input.activePointer.y < 650)) {
                this.y2_16.alpha = 1;
                this.y2_icon9.kill();

                this.y2_tag16.alpha = 1;

                game.add.tween(this.icone_grp2).to({
                    y: 200
                }, 1000, Phaser.Easing.Quadratic.Out, true, 1000).onComplete.add(function() {
                    game.add.tween(this.icone_grp3).to({
                        y: 0
                    }, 1000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {


                        this.arrow.visible = true;
                        this.arrow.x = 70;
                        this.arrow.y = 680;

                        this.y2_icon10.inputEnabled = true;
                        this.y2_icon10.input.useHandCursor = true;
                        this.y2_icon10.input.enableDrag();

                    }, this);
                }, this);

            } else {

                game.add.tween(this.y2_icon9).to({
                    x: 360,
                    y: 750
                }, 500, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {

                    this.arrow.visible = true;


                }, this);
                this.y2_16.alpha = 0;

            }

        }, this);

        this.y2_icon10.events.onInputDown.add(function() {
            this.arrow.visible = false;
            this.y2_9.alpha = 0.5;

        }, this);
        this.y2_icon10.events.onInputUp.add(function() {

            if ((game.input.activePointer.x > 0 && game.input.activePointer.x < 400 && game.input.activePointer.y > 160 && game.input.activePointer.y < 600)) {
                this.y2_9.alpha = 1;
                this.y2_icon10.kill();
                this.y2_tag6.alpha = 1;


                this.arrow.visible = true;
                this.arrow.x = 145;
                this.arrow.y = 680;
                this.y2_icon11.alpha = 1;

                this.y2_icon11.inputEnabled = true;
                this.y2_icon11.input.useHandCursor = true;
                this.y2_icon11.input.enableDrag();

            } else {

                game.add.tween(this.y2_icon10).to({
                    x: 70,
                    y: 750
                }, 500, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {

                    this.arrow.visible = true;


                }, this);
                this.y2_9.alpha = 0;

            }

        }, this);

        this.y2_icon11.events.onInputDown.add(function() {
            this.arrow.visible = false;
            this.y2_10.alpha = 0.5;

        }, this);
        this.y2_icon11.events.onInputUp.add(function() {

            if ((game.input.activePointer.x > 0 && game.input.activePointer.x < 400 && game.input.activePointer.y > 160 && game.input.activePointer.y < 600)) {
                this.y2_10.alpha = 1;
                this.y2_icon11.kill();

                this.y2_tag1.alpha = 1;

                this.arrow.visible = true;
                this.arrow.x = 220;
                this.arrow.y = 680;
                this.y2_icon12.alpha = 1;

                this.y2_icon12.inputEnabled = true;
                this.y2_icon12.input.useHandCursor = true;
                this.y2_icon12.input.enableDrag();

            } else {

                game.add.tween(this.y2_icon11).to({
                    x: 150,
                    y: 750
                }, 500, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {

                    this.arrow.visible = true;


                }, this);
                this.y2_10.alpha = 0;

            }

        }, this);


        this.y2_icon12.events.onInputDown.add(function() {
            this.arrow.visible = false;
            this.y2_11.alpha = 0.5;

        }, this);
        this.y2_icon12.events.onInputUp.add(function() {

            if ((game.input.activePointer.x > 0 && game.input.activePointer.x < 480 && game.input.activePointer.y > 160 && game.input.activePointer.y < 600)) {
                this.y2_11.alpha = 1;
                this.y2_icon12.kill();

                this.y2_tag7.alpha = 1;

                this.arrow.visible = true;
                this.arrow.x = 290;
                this.arrow.y = 700;
                this.y2_icon13.alpha = 1;

                this.y2_icon13.inputEnabled = true;
                this.y2_icon13.input.useHandCursor = true;
                this.y2_icon13.input.enableDrag();

            } else {

                game.add.tween(this.y2_icon12).to({
                    x: 220,
                    y: 750
                }, 500, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {

                    this.arrow.visible = true;


                }, this);
                this.y2_11.alpha = 0;

            }

        }, this);



        this.y2_icon13.events.onInputDown.add(function() {
            this.arrow.visible = false;
            this.y2_12.alpha = 0.5;

        }, this);
        this.y2_icon13.events.onInputUp.add(function() {

            if ((game.input.activePointer.x > 0 && game.input.activePointer.x < 480 && game.input.activePointer.y > 160 && game.input.activePointer.y < 600)) {
                this.y2_12.alpha = 1;
                this.y2_icon13.kill();

                this.y2_tag2.alpha = 1;

                this.arrow.visible = true;
                this.arrow.x = 330;
                this.arrow.y = 680;
                this.y2_icon14.alpha = 1;

                this.y2_icon14.inputEnabled = true;
                this.y2_icon14.input.useHandCursor = true;
                this.y2_icon14.input.enableDrag();

            } else {

                game.add.tween(this.y2_icon13).to({
                    x: 290,
                    y: 750
                }, 500, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {

                    this.arrow.visible = true;


                }, this);
                this.y2_12.alpha = 0;

            }

        }, this);


        this.y2_icon14.events.onInputDown.add(function() {
            this.arrow.visible = false;
            this.y2_13.alpha = 0.5;

        }, this);
        this.y2_icon14.events.onInputUp.add(function() {

            if ((game.input.activePointer.x > 0 && game.input.activePointer.x < 480 && game.input.activePointer.y > 160 && game.input.activePointer.y < 600)) {
                this.y2_13.alpha = 1;
                this.y2_tag3.alpha = 1;
                this.y2_icon14.kill();


                this.arrow.visible = true;
                this.arrow.x = 380;
                this.arrow.y = 670;
                this.y2_icon15.alpha = 1;

                this.y2_icon15.inputEnabled = true;
                this.y2_icon15.input.useHandCursor = true;
                this.y2_icon15.input.enableDrag();

            } else {

                game.add.tween(this.y2_icon14).to({
                    x: 330,
                    y: 750
                }, 500, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {

                    this.arrow.visible = true;


                }, this);
                this.y2_13.alpha = 0;

            }

        }, this);


        this.y2_icon15.events.onInputDown.add(function() {
            this.arrow.visible = false;
            this.y2_14.alpha = 0.5;

        }, this);
        this.y2_icon15.events.onInputUp.add(function() {

            if ((game.input.activePointer.x > 0 && game.input.activePointer.x < 480 && game.input.activePointer.y > 160 && game.input.activePointer.y < 600)) {
                this.y2_14.alpha = 1;
                this.y2_icon15.kill();
                this.y2_tag10.alpha = 1;


                this.arrow.visible = true;
                this.arrow.x = 440;
                this.arrow.y = 700;
                this.y2_icon16.alpha = 1;

                this.y2_icon16.inputEnabled = true;
                this.y2_icon16.input.useHandCursor = true;
                this.y2_icon16.input.enableDrag();

            } else {

                game.add.tween(this.y2_icon15).to({
                    x: 380,
                    y: 750
                }, 500, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {

                    this.arrow.visible = true;


                }, this);
                this.y2_14.alpha = 0;

            }

        }, this);


        this.y2_icon16.events.onInputDown.add(function() {
            this.arrow.visible = false;
            this.y2_15.alpha = 0.5;

        }, this);
        this.y2_icon16.events.onInputUp.add(function() {

            if ((game.input.activePointer.x > 0 && game.input.activePointer.x < 480 && game.input.activePointer.y > 160 && game.input.activePointer.y < 600)) {
                this.y2_15.alpha = 1;
                this.y2_icon16.kill();
                this.y2_tag5.alpha = 1;

                game.add.tween(this.timer01).to({
                    x: 372.6
                }, 1200, Phaser.Easing.Quadratic.Out, true, 500).onComplete.add(function() {

                    this.timer01.animations.add('timer01');
                    this.timer01.animations.play('timer01', 3.5, false);

                    game.add.tween(this.y2_16).to({
                        alpha: 0
                    }, 1200, Phaser.Easing.Quadratic.Out, true, 1300); //  
                    game.add.tween(this.y2_tag16).to({
                        alpha: 0
                    }, 1200, Phaser.Easing.Quadratic.Out, true, 1300); //  

                    game.add.tween(this.y2_15).to({
                        alpha: 0
                    }, 1200, Phaser.Easing.Quadratic.Out, true, 2000); //  
                    game.add.tween(this.y2_tag5).to({
                        alpha: 0
                    }, 1200, Phaser.Easing.Quadratic.Out, true, 2000); //  

                    game.add.tween(this.y2_14).to({
                        alpha: 0
                    }, 1200, Phaser.Easing.Quadratic.Out, true, 3000); //
                    game.add.tween(this.y2_tag10).to({
                        alpha: 0
                    }, 1200, Phaser.Easing.Quadratic.Out, true, 3000); //


                    game.add.tween(this.y2_13).to({
                        alpha: 0
                    }, 1200, Phaser.Easing.Quadratic.Out, true, 4000); //
                    game.add.tween(this.y2_tag3).to({
                        alpha: 0
                    }, 1200, Phaser.Easing.Quadratic.Out, true, 4000); //


                    game.add.tween(this.y2_12).to({
                        alpha: 0
                    }, 1200, Phaser.Easing.Quadratic.Out, true, 5000); //
                    game.add.tween(this.y2_tag2).to({
                        alpha: 0
                    }, 1200, Phaser.Easing.Quadratic.Out, true, 5000); //


                    game.add.tween(this.y2_11).to({
                        alpha: 0
                    }, 1200, Phaser.Easing.Quadratic.Out, true, 6000);
                    game.add.tween(this.y2_tag7).to({
                        alpha: 0
                    }, 1200, Phaser.Easing.Quadratic.Out, true, 6000);


                    game.add.tween(this.y2_10).to({
                        alpha: 0
                    }, 1200, Phaser.Easing.Quadratic.Out, true, 7000); //
                    game.add.tween(this.y2_tag1).to({
                        alpha: 0
                    }, 1200, Phaser.Easing.Quadratic.Out, true, 7000); //


                    game.add.tween(this.y2_9).to({
                        alpha: 0
                    }, 1200, Phaser.Easing.Quadratic.Out, true, 8000); //
                    game.add.tween(this.y2_tag6).to({
                        alpha: 0
                    }, 1200, Phaser.Easing.Quadratic.Out, true, 8000); //

                    game.add.tween(this.y2_6).to({
                        alpha: 0
                    }, 1200, Phaser.Easing.Quadratic.Out, true, 9000);
                    game.add.tween(this.y2_tag12).to({
                        alpha: 0
                    }, 1200, Phaser.Easing.Quadratic.Out, true, 9000);

                    game.add.tween(this.y2_8).to({
                        alpha: 0
                    }, 1200, Phaser.Easing.Quadratic.Out, true, 10000);
                    game.add.tween(this.y2_tag13).to({
                        alpha: 0
                    }, 1200, Phaser.Easing.Quadratic.Out, true, 10000);

                    game.add.tween(this.y2_7).to({
                        alpha: 0
                    }, 1200, Phaser.Easing.Quadratic.Out, true, 11000);
                    game.add.tween(this.y2_tag17).to({
                        alpha: 0
                    }, 1200, Phaser.Easing.Quadratic.Out, true, 11000);

                    game.add.tween(this.y2_5).to({
                        alpha: 0
                    }, 1200, Phaser.Easing.Quadratic.Out, true, 12000);
                    game.add.tween(this.y2_tag11).to({
                        alpha: 0
                    }, 1200, Phaser.Easing.Quadratic.Out, true, 12000);

                    game.add.tween(this.y2_4).to({
                        alpha: 0
                    }, 1200, Phaser.Easing.Quadratic.Out, true, 13000);
                    game.add.tween(this.y2_tag9).to({
                        alpha: 0
                    }, 1200, Phaser.Easing.Quadratic.Out, true, 13000);

                    game.add.tween(this.y2_3).to({
                        alpha: 0
                    }, 1200, Phaser.Easing.Quadratic.Out, true, 14000);
                    game.add.tween(this.y2_tag14).to({
                        alpha: 0
                    }, 1200, Phaser.Easing.Quadratic.Out, true, 14000);

                    game.add.tween(this.y2_2).to({
                        alpha: 0
                    }, 1200, Phaser.Easing.Quadratic.Out, true, 15000);
                    game.add.tween(this.y2_tag8).to({
                        alpha: 0
                    }, 1200, Phaser.Easing.Quadratic.Out, true, 15000);

                    game.add.tween(this.y2_1).to({
                        alpha: 0
                    }, 1200, Phaser.Easing.Quadratic.Out, true, 16000);
                    game.add.tween(this.y2_tag4).to({
                        alpha: 0
                    }, 1200, Phaser.Easing.Quadratic.Out, true, 16000);

                    game.add.tween(this.timer01).to({
                        x: 1000
                    }, 1200, Phaser.Easing.Quadratic.Out, true, 18000).onComplete.add(function() {

                        game.add.tween(this.mom).to({
                            x: 220
                        }, 1200, Phaser.Easing.Quadratic.Out, true, 500);
                        game.add.tween(this.dad).to({
                            x: 400
                        }, 1200, Phaser.Easing.Quadratic.Out, true, 700).onComplete.add(function() {

                            game.add.tween(this.t_text0003.scale).to({
                                x: 0.9,
                                y: 0.9
                            }, 1200, Phaser.Easing.Quadratic.Out, true, 500).onComplete.add(function() {
                                game.add.tween(this.t_text0003).to({
                                    alpha: 0
                                }, 1200, Phaser.Easing.Quadratic.Out, true, 1000).onComplete.add(function() {

                                    game.add.tween(this.o_text2.scale).to({
                                        x: 0.75,
                                        y: 0.75
                                    }, 1000, Phaser.Easing.Quadratic.Out, true, 1000);
                                    game.add.tween(this.o_text2).to({
                                        alpha: 0
                                    }, 1000, Phaser.Easing.Quadratic.Out, true, 8000);
                                    game.add.tween(this.playbtn.scale).to({
                                        x: 1,
                                        y: 1
                                    }, 1000, Phaser.Easing.Quadratic.Out, true, 2000);

                                }, this);
                            }, this);
                        }, this);
                    }, this);
                }, this);


                //   game.add.tween(this.icone_grp3).to({y:200},1000,Phaser.Easing.Quadratic.Out,true,1000).onComplete.add(function(){

                //   game.add.tween(this.playbtn.scale).to({x:1,y:1},500,Phaser.Easing.Quadratic.Out,true);

                // },this);  


                //   this.arrow.visible = true; 
                //   this.arrow.x = 380; 
                //   this.arrow.y = 670; 
                //   this.y2_icon16.alpha = 1;

                // this.y2_icon16.inputEnabled = true;
                // this.y2_icon16.input.useHandCursor = true;
                // this.y2_icon16.input.enableDrag();

            } else {

                game.add.tween(this.y2_icon16).to({
                    x: 440,
                    y: 750
                }, 500, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {

                    this.arrow.visible = true;


                }, this);
                this.y2_15.alpha = 0;

            }

        }, this);

        this.icone_grp.visible = true;
        this.icone_grp2.y = 200;
        this.icone_grp3.y = 200;


        // this.y2_tag5.alpha = 0;
        // this.y2_1.alpha = 0;


        // this.y2_1.alpha = 1;

        // this.icone_grp.y = 180;
        // this.panel_grp1.x = -500;




        this.morebtn = game.add.sprite(75.55, 640, 'btn0004');
        this.morebtn.anchor.setTo(0.5);
        this.morebtn.scale.setTo(1);
        this.morebtn.inputEnabled = true;
        this.morebtn.input.useHandCursor = true;
        this.morebtn.events.onInputUp.add(this.moreLink, this);
        this.morebtn.events.onInputOver.add(this.btnOver, this);
        this.morebtn.events.onInputOut.add(this.btnOut, this);
        // this.levelGroup.add(this.morebtn);

        this.playbtn = game.add.sprite(431.4, 640, 'btn0002');
        this.playbtn.anchor.setTo(0.5);
        this.playbtn.scale.setTo(0);
        this.playbtn.inputEnabled = true;
        this.playbtn.input.useHandCursor = true;
        this.playbtn.events.onInputUp.add(this.enterRoom, this);
        this.playbtn.events.onInputOver.add(this.btnOver, this);
        this.playbtn.events.onInputOut.add(this.btnOut, this);
        // this.levelGroup.add(this.playbtn);

        this.arrow = game.add.sprite(105, 700, 'arrow');
        this.arrow.anchor.setTo(0.5);
        this.arrow.visible = true;
        this.arrow.animations.add('arrow');
        this.arrow.animations.play('arrow', 15, true);


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
    },
    update: function() {

        // console.log(game.input.activePointer.x+':'+game.input.activePointer.y);


        if (this.dummydrag) {
            this.dummyobject.x = game.input.activePointer.x;
            this.dummyobject.y = game.input.activePointer.y;
            console.log(game.input.activePointer.x + ':' + game.input.activePointer.y);
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
        // YYGSDK.navigate("game","more");
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
            MyShowAD('bathing');
        });

    },
}
//bbbbbbbbbbbbb
Main.bathing = function() {}

Main.bathing.prototype = {
    create: function() {
        this.levelGroup = game.add.group();

        this.bth_bg = game.add.sprite(0, 0, 'bth_bg');
        this.levelGroup.add(this.bth_bg);
        258.8

        this.bathing_tub1 = game.add.sprite(258.8, 566.35, 'bathing_tub1');
        this.bathing_tub1.anchor.setTo(0.5);
        this.levelGroup.add(this.bathing_tub1);

        this.b_water1 = game.add.sprite(250.15, 615, 'b_water1');
        this.b_water1.anchor.setTo(0.5);
        this.levelGroup.add(this.b_water1);

        this.baby_toylor = game.add.sprite(214.9, 496, 'baby_toylor');
        this.baby_toylor.anchor.setTo(0.5);
        this.levelGroup.add(this.baby_toylor);

        this.b_water2 = game.add.sprite(250.15, 615, 'b_water2');
        this.b_water2.anchor.setTo(0.5);
        this.levelGroup.add(this.b_water2);

        this.duck = game.add.sprite(371.5, 557.75, 'b_tool5');
        this.duck.anchor.setTo(0.5);
        this.duck.alpha = 0;
        this.levelGroup.add(this.duck);

        this.octopas = game.add.sprite(116.15, 553.15, 'b_tool2');
        this.octopas.anchor.setTo(0.5);
        this.octopas.alpha = 0;
        this.levelGroup.add(this.octopas);

        this.water4 = game.add.sprite(250, 570, 'water4');
        this.water4.anchor.setTo(0.5);
        this.water4.alpha = 0;
        this.levelGroup.add(this.water4);

        this.water5 = game.add.sprite(220, 425, 'water5');
        this.water5.anchor.setTo(0.5);
        this.water5.visible = false;
        this.levelGroup.add(this.water5);

        this.water2 = game.add.sprite(210, 445, 'water2');
        this.water2.anchor.setTo(0.5);
        this.water2.alpha = 0;
        this.levelGroup.add(this.water2);

        this.water3 = game.add.sprite(225, 480, 'water3');
        this.water3.anchor.setTo(0.5);
        this.water3.visible = false;
        this.levelGroup.add(this.water3);



        this.bathing_tub2 = game.add.sprite(258.8, 676.65, 'bathing_tub2');
        this.bathing_tub2.anchor.setTo(0.5);
        this.levelGroup.add(this.bathing_tub2);

        this.shower_cnt = 0;

        this.shower = game.add.sprite(220, 65, 'shower');
        this.shower.anchor.setTo(0.5);

        this.shower.events.onInputDown.add(function() {
            this.shower_cnt++
                this.shower.inputEnabled = false;

            if (this.shower_cnt == 1) {
                this.arrow.visible = false;
                this.shower.animations.add('shower', [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]);
                this.shower.animations.play('shower', 10, true);

                game.add.tween(this.water2).to({
                    alpha: 1
                }, 1000, Phaser.Easing.Quadratic.Out, true, 1000).onComplete.add(function() {
                    this.arrow.visible = true;



                    this.shower.inputEnabled = true;
                    this.shower.input.useHandCursor = true;

                }, this);

            }

            if (this.shower_cnt == 2) {
                this.shower.animations.stop();
                this.shower.frame = 0;
                this.arrow.x = 210;
                this.arrow.y = 585;
                this.arrow.angle = 0;
                this.arrow.visible = true;

                this.b_tool3.inputEnabled = true;
                this.b_tool3.input.useHandCursor = true;
            }


            if (this.shower_cnt == 3) {

                this.arrow.visible = false;
                this.shower.animations.add('shower', [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]);
                this.shower.animations.play('shower', 10, true);

                game.add.tween(this.water5).to({
                    alpha: 0
                }, 1000, Phaser.Easing.Quadratic.Out, true, 1500).onComplete.add(function() {
                    this.arrow.visible = true;
                    this.shower.inputEnabled = true;
                    this.shower.input.useHandCursor = true;

                }, this);

            }


            if (this.shower_cnt == 4) {
                this.shower.animations.stop();
                this.shower.frame = 0;
                this.arrow.x = 315;
                this.arrow.y = 600;
                this.arrow.angle = 0;
                this.arrow.visible = true;

                this.b_tool10.inputEnabled = true;
                this.b_tool10.input.useHandCursor = true;

            }


            if (this.shower_cnt == 5) {

                this.arrow.visible = false;
                this.shower.animations.add('shower', [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]);
                this.shower.animations.play('shower', 10, true);

                game.add.tween(this.water3).to({
                    alpha: 0
                }, 1000, Phaser.Easing.Quadratic.Out, true, 1500).onComplete.add(function() {
                    game.add.tween(this.water4).to({
                        alpha: 0
                    }, 2000, Phaser.Easing.Linear.Out, true, 2000);

                    this.arrow.visible = true;
                    this.shower.inputEnabled = true;
                    this.shower.input.useHandCursor = true;

                }, this);

            }

            if (this.shower_cnt == 6) {
                this.shower.animations.stop();
                this.shower.frame = 0;

                this.arrow.visible = true;
                this.arrow.x = 415;
                this.arrow.y = 650;
                this.arrow.angle = 0;

                this.b_tool11.inputEnabled = true;
                this.b_tool11.input.useHandCursor = true;

            }

        }, this);
        this.levelGroup.add(this.shower);

        this.tap = game.add.sprite(442.9, 466.75, 'tap');
        this.tap.anchor.setTo(0.5);
        this.levelGroup.add(this.tap);

        this.b_table = game.add.sprite(256.05, 786.15, 'b_table');
        this.b_table.anchor.setTo(0.5);
        this.levelGroup.add(this.b_table);


        this.b_tool2 = game.add.sprite(50, 670, 'b_tool2');
        this.b_tool2.anchor.setTo(0.5);

        this.b_tool2.events.onInputDown.add(function() {
            this.arrow.visible = false;
            this.octopas.alpha = 0.5;

        }, this);
        this.b_tool2.events.onInputUp.add(function() {

            if ((game.input.activePointer.x > 5 && game.input.activePointer.x < 320 && game.input.activePointer.y > 450 && game.input.activePointer.y < 640)) {
                this.octopas.alpha = 1;
                this.b_tool2.alpha = 0;
                this.b_tool2.kill();
                this.arrow.visible = true;
                this.arrow.x = 160;
                this.arrow.y = 610;

                this.b_tool1_ani.inputEnabled = true;
                this.b_tool1_ani.input.useHandCursor = true;

                game.add.tween(this.octopas.scale).to({
                    x: 0.95,
                    y: 1.05
                }, 300, Phaser.Easing.Linear.Out, true, 0, -1).yoyo(true, 200);

            } else {

                game.add.tween(this.b_tool2).to({
                    x: 50,
                    y: 670
                }, 500, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {

                    this.arrow.visible = true;


                }, this);
                this.octopas.alpha = 0;

            }

        }, this);
        this.levelGroup.add(this.b_tool2);

        this.b_hand = game.add.sprite(0, 0, 'b_hand');
        this.b_hand.anchor.setTo(0.5);
        this.b_hand.visible = false;
        this.levelGroup.add(this.b_hand);


        this.b_mouse_hint = game.add.sprite(-100, 200, 'b_mouse_hint');
        this.b_mouse_hint.anchor.setTo(0.5);
        this.levelGroup.add(this.b_mouse_hint);

        this.b_tool4 = game.add.sprite(230, 450, 'b_tool4');
        this.b_tool4.anchor.setTo(0.5);
        this.b_tool4.visible = false;

        this.b_tool4.animations.add('b_tool4', [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]);
        this.b_tool4.animations.play('b_tool4', 10, true);


        this.b_tool3 = game.add.sprite(230, 450, 'b_tool3');
        this.b_tool3.anchor.setTo(0.5);

        this.b_tool3.events.onInputDown.add(function() {
            this.b_tool3.inputEnabled = false;

            this.b_tool3.inputEnabled = false;

            this.arrow.visible = false;

            this.b_tool3.animations.add('b_tool3');
            this.b_tool3.animations.play('b_tool3', 10, false).onComplete.add(function() {

                this.b_handdrag = true;
                game.add.tween(this.b_mouse_hint).to({
                    x: 100
                }, 1000, Phaser.Easing.Quadratic.Out, true, 1000).onComplete.add(function() {
                    this.b_mouse_hint.animations.add('b_mouse_hint');
                    this.b_mouse_hint.animations.play('b_mouse_hint', 20, true);

                }, this);
            }, this);

        }, this);
        this.levelGroup.add(this.b_tool3);

        this.b_tool12 = game.add.sprite(430, 680, 'b_tool12');
        this.b_tool12.anchor.setTo(0.5);
        this.b_tool12.visible = false;
        // this.b_tool12.inputEnabled=true;
        // this.b_tool12.input.useHandCursor= true;
        this.b_tool12.events.onInputDown.add(function() {
            this.b_tool12drag = true;
            this.arrow.visible = false;
            this.b_tool12.visible = false;

            game.add.tween(this.b_mouse_hint).to({
                x: 100
            }, 1000, Phaser.Easing.Quadratic.Out, true, 500).onComplete.add(function() {
                this.b_mouse_hint.animations.add('b_mouse_hint');
                this.b_mouse_hint.animations.play('b_mouse_hint', 20, true);

            }, this);

        }, this);
        this.levelGroup.add(this.b_tool12);

        this.b_tool5 = game.add.sprite(120, 660, 'b_tool5');
        this.b_tool5.anchor.setTo(0.5);

        this.b_tool5.events.onInputDown.add(function() {
            this.arrow.visible = false;
            this.duck.alpha = 0.5;

        }, this);
        this.b_tool5.events.onInputUp.add(function() {

            if ((game.input.activePointer.x > 180 && game.input.activePointer.x < 500 && game.input.activePointer.y > 450 && game.input.activePointer.y < 640)) {
                this.duck.alpha = 1;
                this.b_tool5.alpha = 0;
                this.b_tool5.kill();
                game.add.tween(this.duck.scale).to({
                    x: 0.95,
                    y: 1.05
                }, 300, Phaser.Easing.Linear.Out, true, 0, -1).yoyo(true, 100);

                this.arrow.visible = true;
                this.arrow.x = 44;
                this.arrow.y = 610;
                this.arrow.angle = 0;

                this.b_tool2.inputEnabled = true;
                this.b_tool2.input.useHandCursor = true;
                this.b_tool2.input.enableDrag();
            } else {

                game.add.tween(this.b_tool5).to({
                    x: 120,
                    y: 660
                }, 500, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {

                    this.arrow.visible = true;


                }, this);
                this.duck.alpha = 0;

            }

        }, this);
        this.levelGroup.add(this.b_tool5);

        this.b_tool11drag = false;
        this.b_tool12drag = false;
        this.b_tool10drag = false;
        this.b_handdrag = false;

        this.self = game.add.sprite(406.55, 156.5, 'self');
        this.self.anchor.setTo(0.5);
        this.levelGroup.add(this.self);

        this.b_tool6 = game.add.sprite(369.8, 58.05, 'b_tool6');
        this.b_tool6.anchor.setTo(0.5);
        this.levelGroup.add(this.b_tool6);

        this.b_tool7 = game.add.sprite(411.85, 56.05, 'b_tool7');
        this.b_tool7.anchor.setTo(0.5);
        this.levelGroup.add(this.b_tool7);

        this.b_tool10 = game.add.sprite(310, 682.25, 'b_tool10');
        this.b_tool10.anchor.setTo(0.5);

        this.b_tool10.events.onInputDown.add(function() {
            this.arrow.visible = false;
            this.b_tool10drag = true;
            this.b_tool10.inputEnabled = false;

            game.add.tween(this.b_mouse_hint).to({
                x: 100
            }, 1000, Phaser.Easing.Quadratic.Out, true, 500).onComplete.add(function() {
                this.b_mouse_hint.animations.add('b_mouse_hint');
                this.b_mouse_hint.animations.play('b_mouse_hint', 20, true);

            }, this);
        }, this);
        this.levelGroup.add(this.b_tool10);

        this.b_tool11 = game.add.sprite(420.4, 690, 'b_tool11');
        this.b_tool11.anchor.setTo(0.5);
        // this.b_tool11.inputEnabled= true;
        // this.b_tool11.input.useHandCursor = true;    
        this.b_tool11.events.onInputDown.add(function() {
            this.arrow.visible = false;
            this.b_tool11drag = true;
            this.b_tool11.inputEnabled = false;
            this.b_tool1_ani.inputEnabled = false;
            this.b_tool3.inputEnabled = false;

            game.add.tween(this.b_mouse_hint).to({
                x: 100
            }, 1000, Phaser.Easing.Quadratic.Out, true, 500).onComplete.add(function() {
                this.b_mouse_hint.animations.add('b_mouse_hint');
                this.b_mouse_hint.animations.play('b_mouse_hint', 20, true);

            }, this);
        }, this);
        this.levelGroup.add(this.b_tool11);


        this.b_tool1_ani = game.add.sprite(150, 590, 'b_tool1_ani');
        this.b_tool1_ani.anchor.setTo(0.5);

        this.b_tool1_ani.events.onInputDown.add(function() {
            this.b_tool1_ani.inputEnabled = false;

            this.arrow.visible = false;
            this.b_tool1_ani.animations.add('b_tool1_ani', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26]);
            this.b_tool1_ani.animations.play('b_tool1_ani', 10, false).onComplete.add(function() {

                game.add.tween(this.water4).to({
                    alpha: 1
                }, 1000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                    this.arrow.visible = true;
                    this.arrow.x = 110;
                    this.arrow.y = 100;
                    this.arrow.angle = -90;

                    this.shower.inputEnabled = true;
                    this.shower.input.useHandCursor = true;
                }, this);
            }, this);
        }, this);
        this.levelGroup.add(this.b_tool1_ani);

        this.tap_circle1_cnt = 0;

        this.tap_circle1 = game.add.graphics(445, 448);
        this.tap_circle1.beginFill(0x000000, 0);
        this.tap_circle1.drawRect(0, 0, 50, 50);
        this.tap_circle1.inputEnabled = true;
        this.tap_circle1.input.useHandCursor = true;
        this.tap_circle1.events.onInputDown.add(function() {
            this.tap_circle1_cnt++
                this.tap_circle1.inputEnabled = false;

            if (this.tap_circle1_cnt == 1) {

                this.arrow.visible = false;
                this.tap.animations.add('tap', [2, 3]);
                this.tap.animations.play('tap', 2, true);

                this.b_water1.animations.add('b_water1');
                this.b_water1.animations.play('b_water1', 2, false);

                this.b_water2.animations.add('b_water2');
                this.b_water2.animations.play('b_water2', 2, false).onComplete.add(function() {

                    this.arrow.visible = true;

                    this.tap_circle1.inputEnabled = true;
                    this.tap_circle1.input.useHandCursor = true;
                }, this);

            }

            if (this.tap_circle1_cnt == 2) {
                this.arrow.visible = true;
                this.tap.animations.stop();
                this.tap.frame = 0;

                this.arrow.x = 115;
                this.arrow.y = 590;
                this.b_tool5.inputEnabled = true;
                this.b_tool5.input.useHandCursor = true;
                this.b_tool5.input.enableDrag();
            }

        }, this);

        // this.shower.animations.add('shower',[5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]);
        // this.shower.animations.play('shower',10,true); 

        this.arrow = game.add.sprite(470, 400, 'arrow');
        this.arrow.anchor.setTo(0.5);
        this.arrow.visible = true;
        this.arrow.animations.add('arrow');
        this.arrow.animations.play('arrow', 15, true);

        this.hitGroup1 = game.add.group();
        for (var i = 0; i <= Main.shampooX.length - 1; i++) {
            this["hitCircle_a" + i] = game.add.graphics(Main.shampooX[i], Main.shampooY[i]);
            this["hitCircle_a" + i].beginFill(0x000000, 0);
            this["hitCircle_a" + i].drawCircle(0, 0, 50);
            this["hitCircle_a" + i].id = i;
            this.hitGroup1.add(this["hitCircle_a" + i]);
            game.physics.arcade.enable([this["hitCircle_a" + i]]);
            this["hitCircle_a" + i].body.collideWorldBounds = true;
        }

        this.circleGroup1 = game.add.group();
        this.circle1 = game.add.graphics(0, 0);
        this.circle1.beginFill(0x000000, 0);
        this.circleGroup1.add(this.circle1);
        this.water5.mask = this.circle1;

        this.dragCircla1 = game.add.graphics(0, 0);
        this.dragCircla1.beginFill(0x000000, 0);
        this.dragCircla1.drawCircle(0, 0, 15);
        this.dragCircla1.endFill();


        this.hitSpritea1_cnt = 0;

        game.physics.arcade.enable([this.dragCircla1]);
        this.dragCircla1.body.collideWorldBounds = true;
        this.dragCircla1.body.onCollide = new Phaser.Signal();
        this.dragCircla1.body.onCollide.add(this.hitSprite1, this);

        this.hitGroup2 = game.add.group();
        for (var i = 0; i <= Main.soapX.length - 1; i++) {
            this["hitCircle_b" + i] = game.add.graphics(Main.soapX[i], Main.soapY[i]);
            this["hitCircle_b" + i].beginFill(0x000000, 0);
            this["hitCircle_b" + i].drawCircle(0, 0, 50);
            this["hitCircle_b" + i].id = i;
            this.hitGroup1.add(this["hitCircle_b" + i]);
            game.physics.arcade.enable([this["hitCircle_b" + i]]);
            this["hitCircle_b" + i].body.collideWorldBounds = true;
        }

        this.circleGroup2 = game.add.group();
        this.circle2 = game.add.graphics(0, 0);
        this.circle2.beginFill(0x000000, 0);
        this.circleGroup2.add(this.circle2);
        this.water3.mask = this.circle2;

        this.dragCircla2 = game.add.graphics(0, 0);
        this.dragCircla2.beginFill(0x000000, 0);
        this.dragCircla2.drawCircle(0, 0, 15);
        this.dragCircla2.endFill();


        this.hitSpritea2_cnt = 0;

        game.physics.arcade.enable([this.dragCircla2]);
        this.dragCircla2.body.collideWorldBounds = true;
        this.dragCircla2.body.onCollide = new Phaser.Signal();
        this.dragCircla2.body.onCollide.add(this.hitSprite2, this);

        this.dragCircla3 = game.add.graphics(0, 0);
        this.dragCircla3.beginFill(0x000000, 0);
        this.dragCircla3.drawCircle(0, 0, 15);
        this.dragCircla3.endFill();

        this.dragCircla04 = game.add.graphics(0, 0);
        this.dragCircla04.beginFill(0x000000, 0);
        this.dragCircla04.drawCircle(0, 0, 40);
        this.dragCircla04.endFill();




        this.dragCircla05 = game.add.graphics(210, 440);
        this.dragCircla05.beginFill(0x000000, 0);
        this.dragCircla05.drawCircle(0, 0, 80);
        this.dragCircla05.endFill();

        this.dragCircla4 = game.add.graphics(210, 540);
        this.dragCircla4.beginFill(0x000000, 0);
        this.dragCircla4.drawCircle(0, 0, 15);
        this.dragCircla4.endFill();

        game.physics.arcade.enable([this.dragCircla4, this.dragCircla3]);
        this.dragCircla4.body.collideWorldBounds = true;
        this.dragCircla4.body.onCollide = new Phaser.Signal();
        this.dragCircla4.body.onCollide.add(function() {

            this.dragCircla4.kill();

            game.add.tween(this.water2).to({
                alpha: 0
            }, 1500, Phaser.Easing.Quadratic.Out, true, 1500).onComplete.add(function() {
                game.add.tween(this.b_mouse_hint).to({
                    x: -100
                }, 1000, Phaser.Easing.Quadratic.Out, true, 1000);

                this.b_tool11.inputEnabled = false;
                this.b_tool11drag = false;
                game.add.tween(this.b_tool11).to({
                    x: 420.4,
                    y: 690
                }, 1000, Phaser.Easing.Quadratic.Out, true, 700).onComplete.add(function() {
                    game.add.tween(this.playbtn.scale).to({
                        x: 1,
                        y: 1
                    }, 1000, Phaser.Easing.Quadratic.Out, true, 1500);


                    this.arrow.visible = false;
                    // this.arrow.x = 400;
                    // this.arrow.y = 600;
                    // this.arrow.angle = 0;
                    // this.arrow.visible = true;
                    // this.b_tool12.inputEnabled = true;
                    // this.b_tool12.input.useHandCursor = true;
                }, this);
                // game.add.tween(this.playbtn.scale).to({x:1,y:1},1000,Phaser.Easing.Quadratic.Out,true,1500);


            }, this);
        }, this);


        game.physics.arcade.enable([this.dragCircla04, this.dragCircla05]);
        this.dragCircla04.body.collideWorldBounds = true;
        this.dragCircla04.body.onCollide = new Phaser.Signal();
        this.dragCircla04.body.onCollide.add(function() {
            //ffffffffffffffffffffff
            this.dragCircla04.kill();

            game.add.tween(this.water2).to({
                alpha: 0
            }, 1500, Phaser.Easing.Quadratic.Out, true, 500).onComplete.add(function() {
                game.add.tween(this.b_mouse_hint).to({
                    x: -100
                }, 1000, Phaser.Easing.Quadratic.Out, true, 1000);
                game.add.tween(this.b_tool4).to({
                    alpha: 0
                }, 1000, Phaser.Easing.Quadratic.Out, true, 700).onComplete.add(function() {
                    this.b_tool12.visible = true;
                    this.b_tool12.inputEnabled = false;

                }, this);
                game.add.tween(this.playbtn.scale).to({
                    x: 1,
                    y: 1
                }, 1000, Phaser.Easing.Quadratic.Out, true, 1500);

            }, this);
        }, this);



        //   this.mcnt1=0;
        // this.mcir = game.add.graphics(0,0);
        // this.mcir.beginFill(0x666666,0.1);
        // this.mcir.drawRect(0,0,504,800);
        // this.mcir.inputEnabled=true;
        // this.mcir.events.onInputDown.add(function(){
        //   this.mcnt1++;
        //   this['xcnt'+this.mcnt1]=game.input.activePointer.x;
        //   this['ycnt'+this.mcnt1]=game.input.activePointer.y;
        // this.mcir = game.add.graphics(game.input.activePointer.x,game.input.activePointer.y);
        // this.mcir.beginFill(0x000000,1);
        // this.mcir.drawCircle(0,0,50);
        // console.log(this['xcnt'+this.mcnt1]+':'+this['ycnt'+this.mcnt1]);
        // //console.log(this['ycnt'+this.mcnt1]);
        // },this);


        this.morebtn = game.add.sprite(75.55, 740, 'btn0004');
        this.morebtn.anchor.setTo(0.5);
        this.morebtn.scale.setTo(1);
        this.morebtn.inputEnabled = true;
        this.morebtn.input.useHandCursor = true;
        this.morebtn.events.onInputUp.add(this.moreLink, this);
        this.morebtn.events.onInputOver.add(this.btnOver, this);
        this.morebtn.events.onInputOut.add(this.btnOut, this);
        // this.levelGroup.add(this.morebtn);

        this.playbtn = game.add.sprite(431.4, 740, 'btn0002');
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
    },

    hitSprite1: function(sprite1, sprite2) {
        console.log(this.hitSpritea1_cnt);
        sprite2.kill();
        this.hitSpritea1_cnt++
            // this.stich.visible=false;
            this.water5.visible = true;

        if (this.hitSpritea1_cnt >= 31) {
            game.add.tween(this.b_hand).to({
                alpha: 0
            }, 1500, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                this.b_hand.visible = false;
                this.b_handdrag = false;
                this.b_mouse_hint.animations.stop();
                this.b_mouse_hint.frame = 0;
                game.add.tween(this.b_mouse_hint).to({
                    x: -100
                }, 1000, Phaser.Easing.Linear.Out, true, 500);
                this.arrow.visible = true;
                this.arrow.x = 110;
                this.arrow.y = 100;
                this.arrow.angle = -90;

                this.shower.inputEnabled = true;
                this.shower.input.useHandCursor = true;
            }, this);
        }
        this.circle1.drawCircle(Main.shampooX[sprite2.id], Main.shampooY[sprite2.id], 50);
    },


    hitSprite2: function(sprite1, sprite2) {
        console.log(this.hitSpritea2_cnt);
        sprite2.kill();
        this.hitSpritea2_cnt++
            // this.stich.visible=false;
            this.water3.visible = true;

        if (this.hitSpritea2_cnt >= 53) {
            this.b_tool10drag = false;

            game.add.tween(this.b_tool10).to({
                x: 310,
                y: 682.25
            }, 1500, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                // this.b_hand.visible=false;
                // this.b_handdrag=false;
                this.b_mouse_hint.animations.stop();
                this.b_mouse_hint.frame = 0;
                game.add.tween(this.b_mouse_hint).to({
                    x: -100
                }, 1000, Phaser.Easing.Linear.Out, true, 500);
                this.arrow.visible = true;
                this.arrow.x = 110;
                this.arrow.y = 100;
                this.arrow.angle = -90;


                this.shower.inputEnabled = true;
                this.shower.input.useHandCursor = true;
            }, this);
        }
        this.circle2.drawCircle(Main.soapX[sprite2.id], Main.soapY[sprite2.id], 50);
    },
    update: function() {

        // console.log(game.input.activePointer.x+':'+game.input.activePointer.y);



        if (this.b_tool12drag) {

            this.b_tool4.visible = true;
            this.b_tool4.x = this.game.input.activePointer.x;
            this.b_tool4.y = this.game.input.activePointer.y + 30;

            this.dragCircla04.x = this.game.input.activePointer.x;
            this.dragCircla04.y = this.game.input.activePointer.y;

        }

        if (this.b_tool11drag) {

            this.b_tool11.visible = true;
            this.b_tool11.x = this.game.input.activePointer.x;
            this.b_tool11.y = this.game.input.activePointer.y + 30;

            this.dragCircla3.x = this.game.input.activePointer.x;
            this.dragCircla3.y = this.game.input.activePointer.y;

        }

        if (this.b_tool10drag) {

            this.b_tool10.visible = true;
            this.b_tool10.x = game.input.activePointer.x + 10;
            this.b_tool10.y = game.input.activePointer.y;

            this.dragCircla2.x = this.game.input.activePointer.x;
            this.dragCircla2.y = this.game.input.activePointer.y;

            for (var i = 0; i <= Main.soapX.length; i++)

            {
                game.physics.arcade.collide(this.dragCircla2, this['hitCircle_b' + i]);
            }

        }

        if (this.b_handdrag) {

            this.b_hand.visible = true;
            this.b_hand.x = game.input.activePointer.x + 10;
            this.b_hand.y = game.input.activePointer.y;

            this.dragCircla1.x = this.game.input.activePointer.x;
            this.dragCircla1.y = this.game.input.activePointer.y;

            for (var i = 0; i <= Main.shampooX.length; i++)

            {
                game.physics.arcade.collide(this.dragCircla1, this['hitCircle_a' + i]);
            }

        }

        game.physics.arcade.collide(this.dragCircla3, this.dragCircla4);
        game.physics.arcade.collide(this.dragCircla05, this.dragCircla04);


        //               if(this.tool1_drag){
        //             this.tool1.x = game.input.activePointer.x;
        //             this.tool1.y = game.input.activePointer.y;

        //             this.dragCircla1.x = this.game.input.activePointer.x;
        //             this.dragCircla1.y = this.game.input.activePointer.y;

        //      for(var i=0;i<=Main.shampooX.length;i++)

        //      {
        //     game.physics.arcade.collide(this.dragCircla1, this['hitCircle_a'+i]);
        //     }
        // }
        if (this.dummydrag) {
            this.dummyobject.x = game.input.activePointer.x;
            this.dummyobject.y = game.input.activePointer.y;
            console.log(game.input.activePointer.x + ':' + game.input.activePointer.y);
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
        //  YYGSDK.navigate("game","more");
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
            MyShowAD('final');

        });

    },
}

//fffffffffffffffffffffff
Main.final = function() {}

Main.final.prototype = {
    create: function() {
        this.annai = [0, 0, 0, 0, 0, 0, 0, 0, 0];
        this.levelGroup = game.add.group();
        // this.bg = game.add.sprite(0,0,'clbg');
        // this.levelGroup.add(this.bg);
        this.decgroup = game.add.group();

        this.floor1 = game.add.sprite(252, 531.5, 'floor000' + Main.decoFlag[1]);
        this.floor1.anchor.setTo(0.5);
        this.decgroup.add(this.floor1);

        this.roof1 = game.add.sprite(252, 108, 'roof000' + Main.decoFlag[2]);
        this.roof1.anchor.setTo(0.5);
        this.decgroup.add(this.roof1);

        this.rhole = game.add.sprite(236, 37.5, 'rhole');
        this.rhole.anchor.setTo(0.5);
        this.decgroup.add(this.rhole);

        this.wall1 = game.add.sprite(252, 367, 'wall000' + Main.decoFlag[0]);
        this.wall1.anchor.setTo(0.5);
        this.decgroup.add(this.wall1);

        this.line = game.add.sprite(252, 488.5, 'line');
        this.line.anchor.setTo(0.5);
        this.decgroup.add(this.line);

        this.roof_light = game.add.sprite(242.5, 189, 'roof_light');
        this.roof_light.anchor.setTo(0.5);
        this.decgroup.add(this.roof_light);

        this.wkeeper = game.add.sprite(231, 373, 'wkeeper');
        this.wkeeper.anchor.setTo(0.5);
        this.decgroup.add(this.wkeeper);

        this.wpic = game.add.sprite(16.5, 276, 'wpic');
        this.wpic.anchor.setTo(0.5);
        this.decgroup.add(this.wpic);

        this.window = game.add.sprite(222.5, 357.5, 'window');
        this.window.anchor.setTo(0.5);
        this.decgroup.add(this.window);

        this.w_screen1 = game.add.sprite(230.5, 355.5, 'w_screen000' + Main.decoFlag[3]);
        this.w_screen1.anchor.setTo(0.5);
        this.decgroup.add(this.w_screen1);

        this.book_keeper = game.add.sprite(487.5, 459, 'book_keeper');
        this.book_keeper.anchor.setTo(0.5);
        this.decgroup.add(this.book_keeper);

        this.rlight1 = game.add.sprite(250.5, 94, 'rlight000' + Main.decoFlag[8]);
        this.rlight1.anchor.setTo(0.5);
        this.decgroup.add(this.rlight1);

        this.wpic2 = game.add.sprite(234, 252.5, 'wpic2');
        this.wpic2.anchor.setTo(0.5);
        this.decgroup.add(this.wpic2);

        this.drawer1 = game.add.sprite(44, 463, 'drawer000' + Main.decoFlag[6]);
        this.drawer1.anchor.setTo(0.5);
        this.decgroup.add(this.drawer1);

        this.matt1 = game.add.sprite(251, 674.5, 'matt000' + Main.decoFlag[4]);
        this.matt1.anchor.setTo(0.5);
        this.decgroup.add(this.matt1);

        this.dhouse1 = game.add.sprite(160.5, 560, 'dhouse000' + Main.decoFlag[5]);
        this.dhouse1.anchor.setTo(0.5);
        this.decgroup.add(this.dhouse1);

        this.chair1 = game.add.sprite(378.95, 475, 'chair000' + Main.decoFlag[7]);
        this.chair1.anchor.setTo(0.5);
        this.decgroup.add(this.chair1);

        //   this.tgroup = game.add.group();

        // this.ptbody1 = game.add.sprite(248.6,477.45,'ptbody1');
        // this.ptbody1.anchor.setTo(0.5);
        // this.tgroup.add(this.ptbody1);

        //  this.thand = game.add.sprite(248.6,477.45,'thand');
        // this.thand.anchor.setTo(0.5);
        // this.tgroup.add(this.thand);

        // this.ptbody2 = game.add.sprite(246.25,415.1,'ptbody2');
        // this.ptbody2.anchor.setTo(0.5);
        // this.tgroup.add(this.ptbody2);

        // this.tgroup.scale.setTo(0.9);
        // this.tgroup.x=130;
        // this.tgroup.y=70;

        this.f_img = game.add.sprite(360.05, 435.1, 'f_img');
        this.f_img.anchor.setTo(0.5);

        this.dog_ani = game.add.sprite(260, 590, 'dog_ani');
        this.dog_ani.anchor.setTo(0.5);
        this.dog_ani.scale.setTo(0.75);



        // this.dummydrag = true;

        // this.dummyobject= game.add.sprite(-100,0,'forwardbtn');
        // this.dummyobject.anchor.setTo(0.5);
        // this.dummyobject.scale.setTo(0.5);



        var arro2x = [323, 252, 442, 705, 113, 410, 710];
        var arro2y = [433, 334, 414, 420, 402, 130, 440];

        for (i = 1; i <= 4; i++) {
            this['arrow' + i] = game.add.sprite(arro2x[i - 1], arro2y[i - 1], 'arrow');
            this['arrow' + i].anchor.setTo(0.5);
            this['arrow' + i].animations.add('arrow');
            this['arrow' + i].animations.play('arrow', 12, true);
            this['arrow' + i].visible = false;
            if (i == 2) {
                // this['arrow'+i].angle=90;
            }
            if (i == 1) {
                // this['arrow'+i].visible=true;
            }

        }

        /*  this.mcnt1=0;

         this.mcir = game.add.graphics(0,0);
         this.mcir.beginFill(0x666666,0);
         this.mcir.drawRect(0,0,504,800);
         this.mcir.inputEnabled=true;
         this.mcir.events.onInputDown.add(function(){
             this.mcnt1++;
           this['xcnt'+this.mcnt1]=game.input.activePointer.x;
           this['ycnt'+this.mcnt1]=game.input.activePointer.y;
         this.mcir = game.add.graphics(game.input.activePointer.x,game.input.activePointer.y);
         this.mcir.beginFill(0x000000,0.5);
         this.mcir.drawCircle(0,0,20);
         //  this.mcir = game.add.sprite(game.input.activePointer.x,game.input.activePointer.y,'dcleaner');
         // this.mcir.anchor.setTo(0.5);
         // this.mcir.scale.setTo(0.75);
         console.log(this['xcnt'+this.mcnt1]+':'+this['ycnt'+this.mcnt1]);
         //console.log(this['ycnt'+this.mcnt1]);

         },this);*/

        this.morebtn = game.add.sprite(60, 760, 'morebtn');
        this.morebtn.anchor.setTo(0.5);
        this.morebtn.scale.setTo(0);
        this.morebtn.inputEnabled = true;
        this.morebtn.input.useHandCursor = true;
        this.morebtn.events.onInputUp.add(this.moreLink, this);
        this.morebtn.events.onInputOver.add(this.btnOver, this);
        this.morebtn.events.onInputOut.add(this.btnOut, this);
        // this.levelGroup.add(this.morebtn);
        this.playbtn = game.add.sprite(451.4, 740, 'btn0001');
        this.playbtn.anchor.setTo(0.5);
        this.playbtn.scale.setTo(0);
        this.playbtn.inputEnabled = true;
        this.playbtn.input.useHandCursor = true;
        this.playbtn.events.onInputUp.add(this.enterRoom, this);
        this.playbtn.events.onInputOver.add(this.btnOver, this);
        this.playbtn.events.onInputOut.add(this.btnOut, this);

        this.thumbGroup = game.add.group();
        game.load.crossOrigin = '*';
        this.randomId = game.rnd.integerInRange(0, RelatedGames.length - 1);
        this.thumbVar = game.add.sprite(160, 660, 'thumb_' + this.randomId);
        this.thumbVar.inputEnabled = true
        this.thumbVar.input.useHandCursor = true;
        this.thumbVar.events.onInputUp.add(this.thumbLink, this);
        this.thumbframeVar = game.add.sprite(158, 658, 'Tump_frame');
        this.thumbVar.height = this.thumbframeVar.height - 2;
        this.thumbVar.width = this.thumbframeVar.width - 2;
        this.thumbGroup.add(this.thumbVar);
        this.thumbGroup.add(this.thumbframeVar);

        this.thumbGroup.visible = false;
        this.thumbGroup.alpha = 0;

        if (Main.shutterOn[0]) {
            this.shutter = game.add.sprite(0, 0, 'shutterbg');
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
        this.effectFlag = [this.wall1, this.floor1, this.roof1, this.w_screen1, this.matt1, this.dhouse1, this.drawer1, this.chair1, this.rlight1];
    },
    startPopUp: function() {

        game.add.tween(this.morebtn.scale).to({
            x: 0.75,
            y: 0.75
        }, 700, Phaser.Easing.Quadratic.Out, true, 1000);
        game.add.tween(this.playbtn.scale).to({
            x: 1,
            y: 1
        }, 700, Phaser.Easing.Quadratic.Out, true, 1000).onComplete.add(function() {
            this.thumbGroup.visible = true;
            game.add.tween(this.thumbGroup).to({
                alpha: 1
            }, 700, "Linear", true, 200);
        }, this);
    },
    thumbLink: function() {
        // YYGSDK.navigate("gameover","thumb",RelatedGames[this.randomId]['id']);
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
        if (this.dummydrag) {
            this.dummyobject.x = game.input.activePointer.x;
            this.dummyobject.y = game.input.activePointer.y;
            console.log(game.input.activePointer.x + ':' + game.input.activePointer.y);
        }

        if (this.bdollDrag) {
            this.bdoll.x = game.input.activePointer.x;
            this.bdoll.y = game.input.activePointer.y;
        }
        // console.log(this.fincnt)
    },
    changefun: function(evt) {
        this.annai[evt.id - 1] = 1;
        if (evt.id == 1) {
            evt.cnt++;
            this.wall1.loadTexture('wall000' + evt.cnt);
            Main.decoFlag[0] = evt.cnt;
            if (evt.cnt >= 5) {
                evt.cnt = 0;
            }
        }
        if (evt.id == 2) {
            evt.cnt++;
            this.floor1.loadTexture('floor000' + evt.cnt);
            Main.decoFlag[1] = evt.cnt;
            if (evt.cnt >= 5) {
                evt.cnt = 0;
            }
        }
        if (evt.id == 3) {
            evt.cnt++;
            this.roof1.loadTexture('roof000' + evt.cnt);
            Main.decoFlag[2] = evt.cnt;
            if (evt.cnt >= 5) {
                evt.cnt = 0;
            }

        }

        if (evt.id == 4) {
            evt.cnt++;
            this.w_screen1.loadTexture('w_screen000' + evt.cnt);
            Main.decoFlag[3] = evt.cnt;
            if (evt.cnt >= 5) {
                evt.cnt = 0;
            }

        }

        if (evt.id == 5) {
            evt.cnt++;
            this.matt1.loadTexture('matt000' + evt.cnt);
            Main.decoFlag[4] = evt.cnt;
            if (evt.cnt >= 5) {
                evt.cnt = 0;
            }

        }

        if (evt.id == 6) {
            evt.cnt++;
            this.dhouse1.loadTexture('dhouse000' + evt.cnt);
            Main.decoFlag[5] = evt.cnt;
            if (evt.cnt >= 5) {
                evt.cnt = 0;
            }

        }

        if (evt.id == 7) {
            evt.cnt++;
            this.drawer1.loadTexture('drawer000' + evt.cnt);
            Main.decoFlag[6] = evt.cnt;
            if (evt.cnt >= 6) {
                evt.cnt = 0;
            }

        }

        if (evt.id == 8) {
            evt.cnt++;
            this.chair1.loadTexture('chair000' + evt.cnt);
            Main.decoFlag[7] = evt.cnt;
            if (evt.cnt >= 5) {
                evt.cnt = 0;
            }

        }

        if (evt.id == 9) {
            evt.cnt++;
            this.rlight1.loadTexture('rlight000' + evt.cnt);
            Main.decoFlag[8] = evt.cnt;
            if (evt.cnt >= 5) {
                evt.cnt = 0;
            }

        }



        if (this.annai.indexOf(0) < 0) {
            game.add.tween(this.playbtn.scale).to({
                x: 0.81,
                y: 0.81
            }, 800, Phaser.Easing.Elastic.Out, true);
        }
        effectssd = game.add.sprite(this.effectFlag[evt.id - 1].worldPosition.x, this.effectFlag[evt.id - 1].worldPosition.y, 'effectssd');
        effectssd.anchor.setTo(0.5);
        effectssd.animations.add('effectssd');
        effectssd.animations.play('effectssd', 20, false).onComplete.add(function(evt) {
            evt.destroy();
        }, this);
    },

    bringPopUp2: function() {
        game.add.tween(this.popup1).to({
            alpha: 0
        }, 700, Phaser.Easing.Quadratic.Out, true, 1000);
        game.add.tween(this.betty2).to({
            x: 132
        }, 1600, Phaser.Easing.Quadratic.Out, true)
        game.add.tween(this.oliver).to({
            x: 371
        }, 1600, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
            game.add.tween(this.popup2.scale).to({
                x: 1,
                y: 1
            }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(this.bringPopUp3, this);
        }, this);
    },
    bringPopUp3: function() {
        game.add.tween(this.popup2).to({
            alpha: 0
        }, 700, Phaser.Easing.Quadratic.Out, true, 2500)
        game.add.tween(this.popup3.scale).to({
            x: 0.8,
            y: 0.8
        }, 700, Phaser.Easing.Quadratic.Out, true, 3000).onComplete.add(this.bringBottons, this);
    },
    bringBottons: function() {
        // game.add.tween(this.morebtn.scale).to({x:1, y:1}, 700, Phaser.Easing.Quadratic.Out, true);
        game.add.tween(this.playbtn.scale).to({
            x: 1,
            y: 1
        }, 700, Phaser.Easing.Quadratic.Out, true);
    },
    openLink: function() {
        // YYGSDK.navigate("game","logo");
    },
    moreLink: function() {
        // YYGSDK.navigate("game","more");
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
            MyShowAD('wakeup_scene');

            Main.decoFlag = [1, 1, 1, 1, 1, 1, 1, 1, 1];

        });

    },
}



game.state.add('boot', Main.boot);
game.state.add('preloader', Main.preloader);
game.state.add('title', Main.title);
game.state.add('wakeup_scene', Main.wakeup_scene);
game.state.add('bathroom_scene', Main.bathroom_scene);
game.state.add('bathroom2_scene', Main.bathroom2_scene);
game.state.add('play_screen', Main.play_screen);
game.state.add('knock_scene', Main.knock_scene);
game.state.add('dirt_scene', Main.dirt_scene);
game.state.add('cleaning_screen', Main.cleaning_screen);
game.state.add('decoration_screen', Main.decoration_screen);
game.state.add('dfinal_screen', Main.dfinal_screen);
game.state.add('yard_sell1', Main.yard_sell1);
game.state.add('yard_sell2', Main.yard_sell2);
game.state.add('bathing', Main.bathing);
game.state.add('final', Main.final);

game.state.start('boot');