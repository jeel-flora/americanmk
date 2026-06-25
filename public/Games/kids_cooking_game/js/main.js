var game = new Phaser.Game(504, 800, Phaser.AUTO, 'gameContainer');
var Main = {
    music: null,
    shutterOn: [true],
    map_arr: [0],
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
        //this.prelogo;
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
        //this.prelogo.events.onInputUp.add(this.openLink, this);

        game.load.crossOrigin = '*';
        game.load.audio('music', ['assets/music.mp3']);
        game.load.spritesheet('soundicon', 'assets/soundicon.png', 69, 71);
        game.load.image('logo', 'assets/logo.png');
        game.load.spritesheet('effects', 'assets/effects.png', 141, 134);
        game.load.spritesheet('effectssd', 'assets/efftes012.png', 367, 335);

        game.load.image('morebtn', 'assets/buttons/morebtn.png');
        game.load.image('playbtn', 'assets/buttons/playbtn.png');
        game.load.image('resetbtn', 'assets/buttons/resetbtn.png');
        game.load.image('donebtn', 'assets/buttons/donebtn.png');
        game.load.image('nextbtn', 'assets/buttons/nextbtn.png');

        game.load.image('tbg', 'assets/title/tbg.jpg');
        game.load.image('tbg2', 'assets/title/tbg2.jpg');
        game.load.image('shutterbg', 'assets/shutterbg.jpg');
        game.load.image('text', 'assets/title/text.png');
        game.load.image('oliver', 'assets/title/oliver.png');
        game.load.image('betty', 'assets/title/betty.png');
        game.load.image('tbaby', 'assets/title/tbaby.png');

        game.load.image('ibg', 'assets/intro/ibg.jpg');
        game.load.image('bgp1', 'assets/intro/bgp1.png');
        game.load.image('bgp2', 'assets/intro/bgp2.png');
        game.load.image('bgp3', 'assets/intro/bgp3.png');
        game.load.image('btext0001', 'assets/intro/btext0001.png');
        game.load.image('ftext0001', 'assets/intro/ftext0001.png');
        game.load.image('mtext', 'assets/intro/mtext.png');
        game.load.image('tom', 'assets/intro/tom.png');
        game.load.image('phone', 'assets/intro/phone.png');
        game.load.image('phone1', 'assets/intro/phone1.png');

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

        game.load.image('book0001', 'assets/reading/book0001.png');
        game.load.image('book0002', 'assets/reading/book0002.png');
        game.load.image('rbg', 'assets/reading/rbg.jpg');

        game.load.image('mbg', 'assets/map/mbg.jpg');
        game.load.image('car1', 'assets/map/car1.png');
        game.load.image('car2', 'assets/map/car2.png');
        game.load.image('houses1', 'assets/map/houses1.png');
        game.load.image('houses2', 'assets/map/houses2.png');

        game.load.image('c1_bg', 'assets/cooking1/c1_bg.jpg');
        game.load.image('c1_chr1', 'assets/cooking1/c1_chr1.png');
        game.load.image('c1_chr2', 'assets/cooking1/c1_chr2.png');
        game.load.image('c1_table', 'assets/cooking1/c1_table.png');

        game.load.image('c1_table', 'assets/cooking2/c1_table.png');
        game.load.image('knife1', 'assets/cooking2/knife1.png');
        game.load.image('knife2', 'assets/cooking2/knife2.png');
        game.load.image('splate', 'assets/cooking2/splate.png');
        game.load.image('wbowl1', 'assets/cooking2/wbowl1.png');
        game.load.image('wbowl2', 'assets/cooking2/wbowl2.png');
        game.load.image('w_cutpice', 'assets/cooking2/w_cutpice.png');
        game.load.image('lempice', 'assets/cooking2/lempice.png');
        game.load.image('lempice2', 'assets/cooking2/lempice2.png');
        game.load.image('lbottle', 'assets/cooking2/lbottle.png');
        game.load.image('mbtn', 'assets/cooking2/mbtn.png');
        game.load.image('mcap', 'assets/cooking2/mcap.png');
        game.load.image('mfront', 'assets/cooking2/mfront.png');
        game.load.image('mfront2', 'assets/cooking2/mfront2.png');
        game.load.image('mix_down', 'assets/cooking2/mix_down.png');
        game.load.image('wjug', 'assets/cooking2/wjug.png');
        game.load.image('sugar_pack', 'assets/cooking2/sugar_pack.png');
        game.load.image('iglass', 'assets/cooking2/iglass.png');
        game.load.image('wjuice_drop', 'assets/cooking2/wjuice_drop.png');
        game.load.image('jglassf', 'assets/cooking2/jglassf.png');
        game.load.image('apbowl', 'assets/cooking2/apbowl.png');
        game.load.image('bnbowl', 'assets/cooking2/bnbowl.png');
        game.load.image('gpbowl', 'assets/cooking2/gpbowl.png');
        game.load.image('orbowl', 'assets/cooking2/orbowl.png');
        game.load.image('opice', 'assets/cooking2/opice.png');
        game.load.image('apice', 'assets/cooking2/apice.png');
        game.load.image('bpice', 'assets/cooking2/bpice.png');
        game.load.image('gpice', 'assets/cooking2/gpice.png');
        game.load.image('jplate', 'assets/cooking2/jplate.png');
        game.load.image('ftable', 'assets/cooking2/ftable.png');
        game.load.spritesheet('watermellon_cut', 'assets/cooking2/watermellon_cut.png', 440, 294, 24);
        game.load.spritesheet('lemon_cut', 'assets/cooking2/lemon_cut.png', 166, 197, 4);
        game.load.spritesheet('lemon_juice', 'assets/cooking2/lemon_juice.png', 121, 199, 9);
        game.load.spritesheet('mixi_ani', 'assets/cooking2/mixi_ani.png', 160, 158, 40);
        game.load.spritesheet('w_drop', 'assets/cooking2/w_drop.png', 177, 172, 4);
        game.load.spritesheet('water_ani1', 'assets/cooking2/water_ani1.png', 203, 278, 21);
        game.load.spritesheet('l_drop', 'assets/cooking2/l_drop.png', 165, 281, 19);
        game.load.spritesheet('sugar_cut', 'assets/cooking2/sugar_cut.png', 206, 266, 13);
        game.load.spritesheet('sugar_drop', 'assets/cooking2/sugar_drop.png', 192, 240, 19);
        game.load.spritesheet('ice_drop', 'assets/cooking2/ice_drop.png', 272, 185, 4);
        game.load.spritesheet('wjuice_ani', 'assets/cooking2/wjuice_ani.png', 88, 194, 20);
        game.load.spritesheet('mjuice_drop', 'assets/cooking2/mjuice_drop.png', 207, 283, 20);

        game.load.image('forwardbtn', 'assets/forwardbtn.png');

        game.load.image('shbg', 'assets/shopping/shbg.png');
        game.load.image('ftrolly', 'assets/shopping/ftrolly.png');
        game.load.image('trolly', 'assets/shopping/trolly.png');
        game.load.image('cfront', 'assets/shopping/cfront.png');
        game.load.image('cfront2', 'assets/shopping/cfront2.png');
        game.load.image('cfront3', 'assets/shopping/cfront3.png');
        game.load.image('cfront4', 'assets/shopping/cfront4.png');
        game.load.image('cuboard1', 'assets/shopping/cuboard1.png');
        game.load.image('cuboard2', 'assets/shopping/cuboard2.png');
        game.load.image('cuboard3', 'assets/shopping/cuboard3.png');
        game.load.image('cuboard4', 'assets/shopping/cuboard4.png');
        game.load.spritesheet('door1', 'assets/shopping/door1.png', 435, 499, 3);
        game.load.spritesheet('door2', 'assets/shopping/door2.png', 338, 510, 3);
        game.load.spritesheet('door3', 'assets/shopping/door3.png', 427, 496, 3);
        game.load.spritesheet('door4', 'assets/shopping/door4.png', 331, 499, 3);

        for (i = 1; i <= 31; i++) {
            game.load.image('item' + i, 'assets/shopping/item' + i + '.png');
            if (i <= 3) {
                game.load.image('btext000' + i, 'assets/intro/btext000' + i + '.png');
            }
            if (i <= 2) {
                game.load.image('tom_text000' + i, 'assets/intro/tom_text000' + i + '.png');
            }
        }


        //cooking_assets
        game.load.image('c1_bg', 'assets/cooking1/c1_bg.jpg');
        game.load.image('c1_chr1', 'assets/cooking1/c1_chr1.png');
        game.load.image('c1_chr2', 'assets/cooking1/c1_chr2.png');
        game.load.image('c1_table', 'assets/cooking1/c1_table.png');
        game.load.image('stp_1_1', 'assets/cooking1/stp_1_1.png');
        game.load.image('stp_1_2', 'assets/cooking1/stp_1_2.png');
        game.load.image('stp_1_3', 'assets/cooking1/stp_1_3.png');
        game.load.image('stp_1_4', 'assets/cooking1/stp_1_4.png');
        game.load.image('stp_1_40001', 'assets/cooking1/stp_1_40001.png');
        game.load.image('stp_1_40002', 'assets/cooking1/stp_1_40002.png');
        game.load.image('stp_1_40003', 'assets/cooking1/stp_1_40003.png');
        game.load.image('stp_1_40004', 'assets/cooking1/stp_1_40004.png');
        game.load.image('stp_1_40004', 'assets/cooking1/stp_1_40004.png');
        game.load.spritesheet('stp_1_ani', 'assets/cooking1/stp_1_ani.png', 340, 220, 10);
        game.load.spritesheet('stp_1_boul1', 'assets/cooking1/stp_1_boul1.png', 232, 291, 11);

        game.load.image('stp_2_1', 'assets/cooking1/stp_2_1.png');
        game.load.image('stp_2_2', 'assets/cooking1/stp_2_2.png');
        game.load.image('stp_3_1', 'assets/cooking1/stp_3_1.png');
        game.load.image('stp_3_3', 'assets/cooking1/stp_3_3.png');
        game.load.image('stp_3_6', 'assets/cooking1/stp_3_6.png');
        game.load.image('stp_4_1', 'assets/cooking1/stp_4_1.png');
        game.load.image('stp_4_2', 'assets/cooking1/stp_4_2.png');
        game.load.image('stp_4_3', 'assets/cooking1/stp_4_3.png');
        game.load.image('stp_4_21', 'assets/cooking1/stp_4_21.png');
        game.load.image('stp_4_32', 'assets/cooking1/stp_4_32.png');
        game.load.image('stp_5_1', 'assets/cooking1/stp_5_1.png');
        game.load.image('stp_5_2', 'assets/cooking1/stp_5_2.png');
        game.load.image('stp_5_4', 'assets/cooking1/stp_5_4.png');
        game.load.image('stp_5_5', 'assets/cooking1/stp_5_5.png');
        // game.load.image('stp_4_4','assets/cooking1/stp_4_4.png');
        game.load.spritesheet('stp_2_1ani', 'assets/cooking1/stp_2_1ani.png', 277, 214, 26);
        game.load.spritesheet('stp_2_2ani', 'assets/cooking1/stp_2_2ani.png', 363, 237, 26);
        game.load.spritesheet('stp_3_2', 'assets/cooking1/stp_3_2.png', 223, 285, 14);
        game.load.spritesheet('stp_3_4', 'assets/cooking1/stp_3_4.png', 274, 364, 26);
        game.load.spritesheet('stp_3_5', 'assets/cooking1/stp_3_5.png', 175, 228, 15);
        game.load.spritesheet('stp_3_7', 'assets/cooking1/stp_3_7.png', 359, 373, 20);
        game.load.spritesheet('stp_3_8', 'assets/cooking1/stp_3_8.png', 221, 185, 40);
        game.load.spritesheet('stp_4_22', 'assets/cooking1/stp_4_22.png', 298, 229, 30);
        game.load.spritesheet('stp_4_33', 'assets/cooking1/stp_4_33.png', 309, 322, 25);
        game.load.spritesheet('stp_5_3', 'assets/cooking1/stp_5_3.png', 431, 363, 10);
        game.load.spritesheet('stp_5_6', 'assets/cooking1/stp_5_6.png', 317, 460, 22);
        game.load.spritesheet('stp_5_7', 'assets/cooking1/stp_5_7.png', 293, 412, 24);
        game.load.spritesheet('stp_4_4', 'assets/cooking1/stp_4_4.png', 227, 431, 33);

        ////////////\\\\\\\\\\\\\\////////////\\\\\\\\\\\//////////\\\\\\\

        game.load.spritesheet('ani_tomatto', 'assets/cooking1/cook/ani_tomatto.png', 162, 217, 18);
        game.load.spritesheet('t_timer', 'assets/t_timer.png', 160, 160, 60);

        game.load.image('stp_5_01', 'assets/cooking1/stp_5_01.png');
        game.load.image('t_board', 'assets/cooking1/cook/t_board.png');
        game.load.image('t_knfe0001', 'assets/cooking1/cook/t_knfe0001.png');
        game.load.image('t_knfe0002', 'assets/cooking1/cook/t_knfe0002.png');
        game.load.image('bowl_bread0001', 'assets/cooking1/cook/bowl_bread0001.png');
        game.load.image('bowl_bread0002', 'assets/cooking1/cook/bowl_bread0002.png');
        game.load.image('t_oven', 'assets/cooking1/cook/t_oven.png');
        game.load.image('t_close', 'assets/cooking1/cook/t_close.png');
        game.load.image('t_open', 'assets/cooking1/cook/t_open.png');
        game.load.image('brd_plt', 'assets/cooking1/cook/brd_plt.png');
        game.load.image('brd_plt1', 'assets/cooking1/cook/brd_plt1.png');
        game.load.image('meat_plte', 'assets/cooking1/cook/meat_plte.png');
        game.load.image('t_meat', 'assets/cooking1/cook/t_meat.png');
        game.load.image('t_plte', 'assets/cooking1/cook/t_plte.png');
        game.load.image('cali1', 'assets/cooking1/cook/cali1.png');
        game.load.image('cali2', 'assets/cooking1/cook/cali2.png');
        game.load.image('cali3', 'assets/cooking1/cook/cali3.png');
        game.load.image('chese', 'assets/cooking1/cook/chese.png');
        game.load.image('tomatto', 'assets/cooking1/cook/tomatto.png');

        game.load.image('sandwich', 'assets/final/sandwich.png');

        /*   for(i=0;i<RelatedGames.length; i++)
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
            // game.state.start('bathroom2_scene');
            //AAAAAA
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
    // openLink:function(){
    // CreateLinksInGame("Baby-Taylor-Caring-Story-Cooking","loading","logo");
    // }
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

        this.oliver = game.add.sprite(387, 470, 'oliver');
        this.oliver.anchor.setTo(0.5);

        this.betty = game.add.sprite(110.55, 434.5, 'betty');
        this.betty.anchor.setTo(0.5);

        this.tbaby = game.add.sprite(257.6, 397.55, 'tbaby');
        this.tbaby.anchor.setTo(0.5);

        this.text = game.add.sprite(253.05, 569.1, 'text');
        this.text.anchor.setTo(0.5);

        this.morebtn = game.add.sprite(75.55, 762, 'morebtn');
        this.morebtn.anchor.setTo(0.5);
        this.morebtn.inputEnabled = true;
        this.morebtn.input.useHandCursor = true;
        //this.morebtn.events.onInputUp.add(this.moreLink, this);
        this.morebtn.events.onInputOver.add(this.btnOver, this);
        this.morebtn.events.onInputOut.add(this.btnOut, this);
        // this.levelGroup.add(this.morebtn);
        this.playbtn = game.add.sprite(451.4, 747, 'playbtn');
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
        //this.logoVar.events.onInputUp.add(this.openLink, this);

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
        CreateLinksInGame("Baby-Taylor-Caring-Story-Cooking", "menu", "logo");
    },
    moreLink: function() {
        CreateLinksInGame("Baby-Taylor-Caring-Story-Cooking", "menu", "more");
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
        game.state.start('wakeup_scene');
    },
}

Main.intro = function() {}

Main.intro.prototype = {
    create: function() {
        this.levelGroup = game.add.group();
        this.introbg = game.add.sprite(0, 0, 'rbg');
        this.levelGroup.add(this.introbg);


        // this.betty = game.add.sprite(367.9,447.75,'betty');
        // this.betty.anchor.setTo(0.5);


        // this.tom = game.add.sprite(122,488,'tom');
        // this.tom.anchor.setTo(0.5);
        // this.tom.scale.setTo(0.74);

        // this.tbaby = game.add.sprite(350,500,'tbaby');
        // this.tbaby.anchor.setTo(0.5);

        this.bgroup = game.add.group();

        this.tbody = game.add.sprite(258.95, 411.35, 'tbody');
        this.tbody.anchor.setTo(0.5);
        this.bgroup.add(this.tbody);

        this.dress1 = game.add.sprite(260, 456, 'dress0002');
        this.dress1.anchor.setTo(0.5);
        this.bgroup.add(this.dress1);

        this.eye_blink = game.add.sprite(260, 272, 'eye_blink');
        this.eye_blink.anchor.setTo(0.5);
        // this.eye_blink.frame = 4;
        this.bgroup.add(this.eye_blink);

        this.bgroup.scale.setTo(0.8);
        this.bgroup.x = 40;
        this.bgroup.y = 140;

        this.ftable = game.add.sprite(276.45, 799.2, 'ftable');
        this.ftable.anchor.setTo(0.5);

        this.phone = game.add.sprite(270, 650, 'phone');
        this.phone.anchor.setTo(0.5);
        // this.phone.inputEnabled=true; 
        this.phone.events.onInputDown.add(function() {
            // this.phone.loadTexture('phone');
            this.phone.inputEnabled = false;
            this.arrow1.visible = false;
            this.phonetween.stop();
            game.add.tween(this.phone.scale).to({
                y: 0.5
            }, 700, Phaser.Easing.Quadratic.Out, true);
            game.add.tween(this.phone).to({
                x: 316,
                y: 389,
                angle: -70
            }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                this.phone.loadTexture('phone');
                this.startPopUp();
            }, this);

        }, this);




        this.morebtn = game.add.sprite(75.55, 762, 'morebtn');
        this.morebtn.anchor.setTo(0.5);
        this.morebtn.scale.setTo(0);
        this.morebtn.inputEnabled = true;
        this.morebtn.input.useHandCursor = true;
        //this.morebtn.events.onInputUp.add(this.moreLink, this);
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



        this.popup1 = game.add.sprite(410, 210, 'tom_text0001');
        this.popup1.anchor.setTo(0.5);
        this.popup1.scale.setTo(0);
        //this.levelGroup.add(this.popup1);

        this.popup2 = game.add.sprite(131.4, 189.4, 'btext0001');
        this.popup2.anchor.setTo(0.5);
        this.popup2.scale.setTo(0);
        // this.levelGroup.add(this.popup2);

        // this.popup3 = game.add.sprite(113.5,305.05,'btext0001');
        // this.popup3.anchor.setTo(0.5);
        // this.popup3.scale.setTo(0);
        // this.levelGroup.add(this.popup3);

        var arro2x = [262, 595, 442, 705, 113, 410, 710];
        var arro2y = [586, 163, 414, 420, 402, 130, 440];

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
                this.phonetween = game.add.tween(this.phone).to({
                    angle: [5, 0]
                }, 700, Phaser.Easing.Quadratic.Out, true).loop();
                this.phone.loadTexture('phone1');
                this.arrow1.visible = true;
                this.phone.inputEnabled = true;
            }, this)
        }

        this.logoVar = game.add.sprite(5, 5, 'logo');
        this.logoVar.scale.setTo(0.8);
        this.logoVar.inputEnabled = true
        this.logoVar.input.useHandCursor = true;
        //this.logoVar.events.onInputUp.add(this.openLink, this);

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
        game.add.tween(this.popup2).to({
            alpha: 0
        }, 700, Phaser.Easing.Quadratic.Out, true, 2000).onComplete.add(function() {
            this.phone.loadTexture('phone');
            game.add.tween(this.phone.scale).to({
                y: 1
            }, 700, Phaser.Easing.Quadratic.Out, true);
            game.add.tween(this.phone).to({
                x: 270,
                y: 650,
                angle: 0
            }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                game.add.tween(this.morebtn.scale).to({
                    x: 1,
                    y: 1
                }, 700, Phaser.Easing.Quadratic.Out, true);
                game.add.tween(this.playbtn.scale).to({
                    x: 1,
                    y: 1
                }, 700, Phaser.Easing.Quadratic.Out, true);
            }, this);
        }, this);

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
        CreateLinksInGame("Baby-Taylor-Caring-Story-Cooking", "game", "logo");
    },
    moreLink: function() {
        CreateLinksInGame("Baby-Taylor-Caring-Story-Cooking", "game", "morebutton");
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
            game.state.start('intro2');
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
        //this.morebtn.events.onInputUp.add(this.moreLink, this);
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
        //this.logoVar.events.onInputUp.add(this.openLink, this);

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
        CreateLinksInGame("Baby-Taylor-Caring-Story-Cooking", "game", "logo");
    },
    moreLink: function() {
        CreateLinksInGame("Baby-Taylor-Caring-Story-Cooking", "game", "more");
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

        //  this.dummydrag = true;

        // this.dummyobject= game.add.sprite(-100,0,'mouth0001');
        // this.dummyobject.anchor.setTo(0.5);

        /* this.eye_blink2 = game.add.sprite(277,298,'eye_blink2');
         this.eye_blink2.anchor.setTo(0.5);       
         // this.eye_blink2.frame = 4;
         this.bgroup.add(this.eye_blink2); */

        this.bfoam = game.add.sprite(277, 375, 'bfoam');
        this.bfoam.anchor.setTo(0.5);
        this.bfoam.alpha = 0;

        this.bpanel = game.add.sprite(247, 727.15, 'bpanel');
        this.bpanel.anchor.setTo(0.5);

        this.washer = game.add.sprite(178.05, 595.95, 'washer');
        this.washer.anchor.setTo(0.5);

        this.tpaste = game.add.sprite(424.75, 660.8, 'tpaste');
        this.tpaste.anchor.setTo(0.5);
        // this.tpaste.inputEnabled=true;
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


        this.glass = game.add.sprite(311.9, 502.35, 'glass_ani');
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
                    x: 311.9,
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
                this.arrow2.visible = true;
                this.tpaste.inputEnabled = true;
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
        //this.morebtn.events.onInputUp.add(this.moreLink, this);
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
        //this.logoVar.events.onInputUp.add(this.openLink, this);

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
                    // game.add.tween(this.bfoam).to({alpha:0},700,Phaser.Easing.Quadratic.Out,true).onComplete.add(function(){
                    this.arrow1.visible = true;
                    this.arrow1.x = 372;
                    this.arrow1.y = 437;
                    this.glass.inputEnabled = true;
                    this.glass.input.enableDrag();

                    // },this);
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
        CreateLinksInGame("Baby-Taylor-Caring-Story-Cooking", "game", "logo");
    },
    moreLink: function() {
        CreateLinksInGame("Baby-Taylor-Caring-Story-Cooking", "game", "more");
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
        //this.morebtn.events.onInputUp.add(this.moreLink, this);
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
        // this.logoVar.events.onInputUp.add(this.openLink, this);

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
        this.fcnt += 2;
        this.acnt2 -= 0.2;
        this.arrow2.visible = false;
        this.arrow1.visible = false;
        this.strike1.body.enable = false;
        game.add.tween(this.fwater).to({
            alpha: this.acnt2
        }, 700, Phaser.Easing.Quadratic.Out, true);
        game.add.tween(this.ffoam).to({
            alpha: (this.fcnt / 10)
        }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
            if (this.fcnt < 10) {
                this.strike2.body.enable = true;
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
    foamfun2: function() {
        this.fcnt += 2;
        this.acnt2 -= 0.2;
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
        this.fcnt4 += 2;
        this.acnt4 -= 0.2;
        this.arrow2.visible = false;
        this.arrow1.visible = false;
        this.strike3.body.enable = false;

        game.add.tween(this.fwater).to({
            alpha: this.acnt4
        }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
            if (this.fcnt4 < 10) {
                this.strike4.body.enable = true;
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
    cleanfun2: function() {
        this.fcnt4 += 2;
        this.acnt4 -= 0.2;
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
        CreateLinksInGame("Baby-Taylor-Caring-Story-Cooking", "game", "logo");
    },
    moreLink: function() {
        CreateLinksInGame("Baby-Taylor-Caring-Story-Cooking", "game", "more");
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
            game.state.start('reading_scene');
        });

    },
}
Main.reading_scene = function() {}

Main.reading_scene.prototype = {
    create: function() {
        this.levelGroup = game.add.group();
        this.bg = game.add.sprite(0, 0, 'rbg');
        this.levelGroup.add(this.bg);

        this.bgroup = game.add.group();

        this.tbody = game.add.sprite(258.95, 411.35, 'tbody');
        this.tbody.anchor.setTo(0.5);
        this.bgroup.add(this.tbody);

        this.dress1 = game.add.sprite(260, 456, 'dress0002');
        this.dress1.anchor.setTo(0.5);
        this.bgroup.add(this.dress1);

        this.eye_blink = game.add.sprite(260, 272, 'eye_blink');
        this.eye_blink.anchor.setTo(0.5);
        // this.eye_blink.frame = 4;
        this.bgroup.add(this.eye_blink);








        this.panel = game.add.sprite(254.6, 811.05, 'panel');
        this.panel.anchor.setTo(0.5);


        this.book1 = game.add.sprite(416, 131, 'book0001');
        this.book1.anchor.setTo(0.5);
        this.book1.scale.setTo(0.5);
        this.book1.inputEnabled = true;
        this.book1.events.onInputDown.add(function() {
            this.book1.inputEnabled = false;
            this.arrow1.visible = false;
            game.add.tween(this.book1.scale).to({
                x: 1,
                y: 1
            }, 700, Phaser.Easing.Quadratic.Out, true);
            game.add.tween(this.book1).to({
                x: 238,
                y: 624
            }, 1100, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                this.book1.loadTexture('book0002');
                game.add.tween(this.playbtn.scale).to({
                    x: 1,
                    y: 1
                }, 700, Phaser.Easing.Quadratic.Out, true);
            }, this);

        }, this);





        // this.dummydrag = true;

        //  this.dummyobject= game.add.sprite(-100,0,'arrow');
        //  this.dummyobject.anchor.setTo(0.5);
        // this.dummyobject.scale.setTo(0.5);

        var arro2x = [372, 595, 442, 705, 113, 410, 710];
        var arro2y = [94, 163, 414, 420, 402, 130, 440];

        for (i = 1; i <= 1; i++) {
            this['arrow' + i] = game.add.sprite(arro2x[i - 1], arro2y[i - 1], 'arrow');
            this['arrow' + i].anchor.setTo(0.5);
            this['arrow' + i].animations.add('arrow');
            this['arrow' + i].animations.play('arrow', 12, true);
            this['arrow' + i].visible = false;
            if (i == 1) {
                this['arrow' + i].angle = -45;
            }
            if (i == 1) {
                this['arrow' + i].visible = true;
            }

        }



        this.morebtn = game.add.sprite(75.55, 762, 'morebtn');
        this.morebtn.anchor.setTo(0.5);
        this.morebtn.inputEnabled = true;
        this.morebtn.input.useHandCursor = true;
        //this.morebtn.events.onInputUp.add(this.moreLink, this);
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
        //this.logoVar.events.onInputUp.add(this.openLink, this);

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
        CreateLinksInGame("Baby-Taylor-Caring-Story-Cooking", "game", "logo");
    },
    moreLink: function() {
        CreateLinksInGame("Baby-Taylor-Caring-Story-Cooking", "game", "more");
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

Main.intro2 = function() {}

Main.intro2.prototype = {
    create: function() {
        this.levelGroup = game.add.group();
        this.introbg = game.add.sprite(0, 0, 'rbg');
        this.levelGroup.add(this.introbg);


        this.betty = game.add.sprite(133, 447.75, 'betty');
        this.betty.anchor.setTo(0.5);


        this.bgroup = game.add.group();

        this.tbody = game.add.sprite(258.95, 411.35, 'tbody');
        this.tbody.anchor.setTo(0.5);
        this.bgroup.add(this.tbody);

        this.dress1 = game.add.sprite(260, 456, 'dress0002');
        this.dress1.anchor.setTo(0.5);
        this.bgroup.add(this.dress1);

        this.eye_blink = game.add.sprite(260, 272, 'eye_blink');
        this.eye_blink.anchor.setTo(0.5);
        // this.eye_blink.frame = 4;
        this.bgroup.add(this.eye_blink);

        this.bgroup.scale.setTo(0.71);
        this.bgroup.x = 200;
        this.bgroup.y = 250;

        this.morebtn = game.add.sprite(75.55, 762, 'morebtn');
        this.morebtn.anchor.setTo(0.5);
        this.morebtn.scale.setTo(0);
        this.morebtn.inputEnabled = true;
        this.morebtn.input.useHandCursor = true;
        //this.morebtn.events.onInputUp.add(this.moreLink, this);
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

        this.popup1 = game.add.sprite(314.45, 240, 'btext0002');
        this.popup1.anchor.setTo(0.5);
        this.popup1.scale.setTo(0);
        //this.levelGroup.add(this.popup1);

        this.popup2 = game.add.sprite(270, 120, 'mtext');
        this.popup2.anchor.setTo(0.5);
        this.popup2.scale.setTo(0);
        // this.levelGroup.add(this.popup2);

        // this.popup3 = game.add.sprite(113.5,305.05,'btext0001');
        // this.popup3.anchor.setTo(0.5);
        // this.popup3.scale.setTo(0);
        // this.levelGroup.add(this.popup3);


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
        //this.logoVar.events.onInputUp.add(this.openLink, this);

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
        }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(this.bringPopUp2, this);
    },
    bringPopUp2: function() {
        game.add.tween(this.popup1).to({
            alpha: 0
        }, 700, Phaser.Easing.Quadratic.Out, true, 3000);
        game.add.tween(this.popup2.scale).to({
            x: 1,
            y: 1
        }, 700, Phaser.Easing.Quadratic.Out, true, 3500).onComplete.add(this.bringBottons, this);
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
        CreateLinksInGame("Baby-Taylor-Caring-Story-Cooking", "game", "logo");
    },
    moreLink: function() {
        CreateLinksInGame("Baby-Taylor-Caring-Story-Cooking", "game", "morebutton");
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
            game.state.start('map_scene');
        });

    },
}
Main.map_scene = function() {}

Main.map_scene.prototype = {
    create: function() {
        this.levelGroup = game.add.group();
        this.bg = game.add.sprite(0, 0, 'mbg');
        this.levelGroup.add(this.bg);



        if (Main.map_arr[0] == 1) {
            this.car2 = game.add.sprite(438, 194, 'car2');
            this.car2.anchor.setTo(0.5);
            this.car2.scale.setTo(0.7);
            this.car2.scale.x = -this.car2.scale.x;
        } else {
            this.car1 = game.add.sprite(184.95, 609.1, 'car1');
            this.car1.anchor.setTo(0.5);
            this.car1.scale.setTo(0.8);
        }

        this.houses1 = game.add.sprite(236.95, 245, 'houses1');
        this.houses1.anchor.setTo(0.5);

        this.houses2 = game.add.sprite(243.95, 479, 'houses2');
        this.houses2.anchor.setTo(0.5);

        //   this.dummydrag = true;

        // this.dummyobject= game.add.sprite(-100,0,'car1');
        // this.dummyobject.anchor.setTo(0.5);
        // this.dummyobject.scale.setTo(0.8);





        this.morebtn = game.add.sprite(75.55, 762, 'morebtn');
        this.morebtn.anchor.setTo(0.5);
        // this.morebtn.scale.setTo(0);
        this.morebtn.inputEnabled = true;
        this.morebtn.input.useHandCursor = true;
        //this.morebtn.events.onInputUp.add(this.moreLink, this);
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

        if (Main.shutterOn[0]) {
            this.shutter = game.add.sprite(0, 0, 'shutterbg');
            game.add.tween(this.shutter).to({
                y: -850
            }, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {

                if (Main.map_arr[0] == 1) {
                    game.time.events.add(500, function() {
                        this.car2.scale.x = -this.car2.scale.x;
                    }, this);
                    game.add.tween(this.car2).to({
                        x: 210,
                        y: 350
                    }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                        game.time.events.add(500, function() {
                            this.car2.scale.x = -this.car2.scale.x;
                        }, this);
                        game.add.tween(this.car2).to({
                            x: 300,
                            y: 420
                        }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                            game.time.events.add(500, function() {
                                this.car2.scale.x = -this.car2.scale.x;
                            }, this);
                            game.add.tween(this.car2).to({
                                x: 125,
                                y: 540
                            }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                                game.add.tween(this.car2).to({
                                    x: 184.95,
                                    y: 609.1
                                }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                                    game.add.tween(this.playbtn.scale).to({
                                        x: 1,
                                        y: 1
                                    }, 700, Phaser.Easing.Quadratic.Out, true);

                                }, this);
                            }, this);
                        }, this);
                    }, this);
                } else {
                    game.time.events.add(500, function() {
                        this.car1.scale.x = -this.car1.scale.x;
                    }, this);

                    game.add.tween(this.car1).to({
                        x: 125,
                        y: 540
                    }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                        game.time.events.add(500, function() {
                            this.car1.scale.x = -this.car1.scale.x;
                            this.car1.x = 280;
                        }, this);
                        game.add.tween(this.car1).to({
                            x: 300,
                            y: 420
                        }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                            game.time.events.add(500, function() {
                                this.car1.scale.x = -this.car1.scale.x;
                            }, this);
                            game.add.tween(this.car1).to({
                                x: 210,
                                y: 350
                            }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {

                                game.add.tween(this.car1).to({
                                    x: 438,
                                    y: 194
                                }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                                    game.add.tween(this.playbtn.scale).to({
                                        x: 1,
                                        y: 1
                                    }, 700, Phaser.Easing.Quadratic.Out, true);

                                }, this);
                            }, this);
                        }, this);
                    }, this);
                }
            }, this);
        }





        this.logoVar = game.add.sprite(5, 5, 'logo');
        this.logoVar.scale.setTo(0.8);
        this.logoVar.inputEnabled = true
        this.logoVar.input.useHandCursor = true;
        //this.logoVar.events.onInputUp.add(this.openLink, this);

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


    },
    openLink: function() {
        CreateLinksInGame("Baby-Taylor-Caring-Story-Photo", "game", "logo");
    },
    moreLink: function() {
        CreateLinksInGame("Baby-Taylor-Caring-Story-Photo", "game", "more");
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
            if (Main.map_arr[0] == 1) {
                game.state.start('cooking1');
            } else {
                game.state.start('shopping_screen');

            }


        });

    },
}

Main.shopping_screen = function() {}

Main.shopping_screen.prototype = {
    create: function() {
        Main.map_arr[0] = 1;
        this.levelGroup = game.add.group();
        this.bg = game.add.sprite(0, 0, 'shbg');
        this.levelGroup.add(this.bg);


        this.cgroup1 = game.add.group();

        this.cuboard1 = game.add.sprite(233.1, 417.4, 'cuboard1');
        this.cuboard1.anchor.setTo(0.5);
        this.cgroup1.add(this.cuboard1);


        var item1X = [81.6, 145.6, 205.6, 263.2, 317.25, 375.25];
        var item1Y = [191.65, 191.65, 187.8, 187.8, 191.65, 187.8];
        for (i = 1; i <= 6; i++) {
            this['item1_' + i] = game.add.sprite(item1X[i - 1], item1Y[i - 1], 'item1');
            this['item1_' + i].anchor.setTo(0.5);
            this['item1_' + i].id = i;
            this['item1_' + i].cnt = 1;
            this['item1_' + i].inputEnabled = true;
            this['item1_' + i].input.useHandCursor = true;
            this['item1_' + i].input.pixelPerfectOver = true;
            this['item1_' + i].input.pixelPerfectOut = true;
            this['item1_' + i].events.onInputDown.add(this.changeitem1, this);

            this.cgroup1.add(this['item1_' + i]);
        }

        var item2X = [81.65, 130.85, 170.9, 263.2, 317.25, 375.25];
        var item2Y = [351.6, 351.6, 351.6, 187.8, 191.65, 187.8];
        for (i = 1; i <= 3; i++) {
            this['item2_' + i] = game.add.sprite(item2X[i - 1], item2Y[i - 1], 'item2');
            this['item2_' + i].anchor.setTo(0.5);
            this['item2_' + i].id = i;
            this['item2_' + i].cnt = 1;
            this['item2_' + i].inputEnabled = true;
            this['item2_' + i].input.useHandCursor = true;
            this['item2_' + i].input.pixelPerfectOver = true;
            this['item2_' + i].input.pixelPerfectOut = true;
            this['item2_' + i].events.onInputDown.add(this.changeitem2, this);

            this.cgroup1.add(this['item2_' + i]);
        }

        var item3X = [299.1, 342.6, 383.35, 263.2, 317.25, 375.25];
        var item3Y = [350.75, 352.75, 352.75, 187.8, 191.65, 187.8];
        for (i = 1; i <= 3; i++) {
            this['item3_' + i] = game.add.sprite(item3X[i - 1], item3Y[i - 1], 'item3');
            this['item3_' + i].anchor.setTo(0.5);
            this['item3_' + i].id = i;
            this['item3_' + i].cnt = 1;
            this['item3_' + i].inputEnabled = true;
            this['item3_' + i].input.useHandCursor = true;
            this['item3_' + i].input.pixelPerfectOver = true;
            this['item3_' + i].input.pixelPerfectOut = true;
            this['item3_' + i].events.onInputDown.add(this.changeitem3, this);

            this.cgroup1.add(this['item3_' + i]);
        }

        var item4X = [122.2, 236.15, 355.25, 263.2, 317.25, 375.25];
        var item4Y = [519.8, 519.8, 519.8, 187.8, 191.65, 187.8];
        for (i = 1; i <= 3; i++) {
            this['item4_' + i] = game.add.sprite(item4X[i - 1], item4Y[i - 1], 'item4');
            this['item4_' + i].anchor.setTo(0.5);
            this['item4_' + i].id = i;
            this['item4_' + i].cnt = 1;
            this['item4_' + i].inputEnabled = true;
            this['item4_' + i].input.useHandCursor = true;
            this['item4_' + i].input.pixelPerfectOver = true;
            this['item4_' + i].input.pixelPerfectOut = true;
            this['item4_' + i].events.onInputDown.add(this.changeitem4, this);

            this.cgroup1.add(this['item4_' + i]);
        }

        this.door1 = game.add.sprite(230, 332.65, 'door1');
        this.door1.anchor.setTo(0.5);
        this.cgroup1.add(this.door1);

        this.cfront = game.add.sprite(230, 332.65, 'cfront');
        this.cfront.anchor.setTo(0.5);
        this.cfront.inputEnabled = true;
        this.cfront.events.onInputDown.add(function() {
            this.cfront.inputEnabled = false;
            this.door1.animations.add('door1');
            this.door1.animations.play('door1', 10, false).onComplete.add(function() {

            }, this);

        }, this);
        this.cgroup1.add(this.cfront);


        this.cgroup2 = game.add.group();

        this.cuboard2 = game.add.sprite(633.45, 401.6, 'cuboard2');
        this.cuboard2.anchor.setTo(0.5);
        this.cgroup2.add(this.cuboard2);

        var item5X = [535.1, 602.15, 673.2, 737.15, 317.25, 375.25];
        var item5Y = [225, 225, 225, 225, 191.65, 187.8];
        for (i = 1; i <= 4; i++) {
            this['item5_' + i] = game.add.sprite(item5X[i - 1], item5Y[i - 1], 'item5');
            this['item5_' + i].anchor.setTo(0.5);
            this['item5_' + i].id = i;
            this['item5_' + i].cnt = 1;
            this['item5_' + i].inputEnabled = true;
            this['item5_' + i].input.useHandCursor = true;
            this['item5_' + i].input.pixelPerfectOver = true;
            this['item5_' + i].input.pixelPerfectOut = true;
            this['item5_' + i].events.onInputDown.add(this.changeitem5, this);

            this.cgroup2.add(this['item5_' + i]);
        }

        var item6X = [517.85, 565.85, 613.8, 737.15, 317.25, 375.25];
        var item6Y = [337.55, 337.55, 337.55, 225, 191.65, 187.8];
        for (i = 1; i <= 3; i++) {
            this['item6_' + i] = game.add.sprite(item6X[i - 1], item6Y[i - 1], 'item6');
            this['item6_' + i].anchor.setTo(0.5);
            this['item6_' + i].id = i;
            this['item6_' + i].cnt = 1;
            this['item6_' + i].inputEnabled = true;
            this['item6_' + i].input.useHandCursor = true;
            this['item6_' + i].input.pixelPerfectOver = true;
            this['item6_' + i].input.pixelPerfectOut = true;
            this['item6_' + i].events.onInputDown.add(this.changeitem6, this);

            this.cgroup2.add(this['item6_' + i]);
        }

        var item7X = [671.3, 745.25, 613.8, 737.15, 317.25, 375.25];
        var item7Y = [347.95, 347.95, 337.55, 225, 191.65, 187.8];
        for (i = 1; i <= 2; i++) {
            this['item7_' + i] = game.add.sprite(item7X[i - 1], item7Y[i - 1], 'item7');
            this['item7_' + i].anchor.setTo(0.5);
            this['item7_' + i].id = i;
            this['item7_' + i].cnt = 1;
            this['item7_' + i].inputEnabled = true;
            this['item7_' + i].input.useHandCursor = true;
            this['item7_' + i].input.pixelPerfectOver = true;
            this['item7_' + i].input.pixelPerfectOut = true;
            this['item7_' + i].events.onInputDown.add(this.changeitem7, this);

            this.cgroup2.add(this['item7_' + i]);
        }

        var item8X = [569.65, 569.65, 569.65, 737.15, 317.25, 375.25];
        var item8Y = [461.3, 443.25, 426.1, 225, 191.65, 187.8];
        for (i = 1; i <= 3; i++) {
            this['item8_' + i] = game.add.sprite(item8X[i - 1], item8Y[i - 1], 'item8');
            this['item8_' + i].anchor.setTo(0.5);
            this['item8_' + i].id = i;
            this['item8_' + i].cnt = 1;
            this['item8_' + i].inputEnabled = true;
            this['item8_' + i].input.useHandCursor = true;
            this['item8_' + i].input.pixelPerfectOver = true;
            this['item8_' + i].input.pixelPerfectOut = true;
            this['item8_' + i].events.onInputDown.add(this.changeitem8, this);

            this.cgroup2.add(this['item8_' + i]);
        }

        var item9X = [706.3, 706.3, 706.3, 737.15, 317.25, 375.25];
        var item9Y = [455.8, 441.25, 430.9, 225, 191.65, 187.8];
        for (i = 1; i <= 3; i++) {
            this['item9_' + i] = game.add.sprite(item9X[i - 1], item9Y[i - 1], 'item9');
            this['item9_' + i].anchor.setTo(0.5);
            this['item9_' + i].id = i;
            this['item9_' + i].cnt = 1;
            this['item9_' + i].inputEnabled = true;
            this['item9_' + i].input.useHandCursor = true;
            this['item9_' + i].input.pixelPerfectOver = true;
            this['item9_' + i].input.pixelPerfectOut = true;
            this['item9_' + i].events.onInputDown.add(this.changeitem9, this);

            this.cgroup2.add(this['item9_' + i]);
        }

        var item10X = [541.95, 706.3, 706.3, 737.15, 317.25, 375.25];
        var item10Y = [542.7, 441.25, 430.9, 225, 191.65, 187.8];
        for (i = 1; i <= 1; i++) {
            this['item10_' + i] = game.add.sprite(item10X[i - 1], item10Y[i - 1], 'item10');
            this['item10_' + i].anchor.setTo(0.5);
            this['item10_' + i].id = i;
            this['item10_' + i].cnt = 1;
            this['item10_' + i].inputEnabled = true;
            this['item10_' + i].input.useHandCursor = true;
            this['item10_' + i].input.pixelPerfectOver = true;
            this['item10_' + i].input.pixelPerfectOut = true;
            this['item10_' + i].events.onInputDown.add(this.changeitem10, this);

            this.cgroup2.add(this['item10_' + i]);
        }

        var item11X = [640.45, 674, 706.3, 737.15, 317.25, 375.25];
        var item11Y = [540.05, 537.15, 430.9, 225, 191.65, 187.8];
        for (i = 1; i <= 2; i++) {
            this['item11_' + i] = game.add.sprite(item11X[i - 1], item11Y[i - 1], 'item11');
            this['item11_' + i].anchor.setTo(0.5);
            this['item11_' + i].id = i;
            this['item11_' + i].cnt = 1;
            this['item11_' + i].inputEnabled = true;
            this['item11_' + i].input.useHandCursor = true;
            this['item11_' + i].input.pixelPerfectOver = true;
            this['item11_' + i].input.pixelPerfectOut = true;
            this['item11_' + i].events.onInputDown.add(this.changeitem11, this);

            this.cgroup2.add(this['item11_' + i]);
        }

        var item12X = [724.1, 745.1, 706.3, 737.15, 317.25, 375.25];
        var item12Y = [536.8, 536.8, 430.9, 225, 191.65, 187.8];
        for (i = 1; i <= 2; i++) {
            this['item12_' + i] = game.add.sprite(item12X[i - 1], item12Y[i - 1], 'item12');
            this['item12_' + i].anchor.setTo(0.5);
            this['item12_' + i].id = i;
            this['item12_' + i].cnt = 1;
            this['item12_' + i].inputEnabled = true;
            this['item12_' + i].input.useHandCursor = true;
            this['item12_' + i].input.pixelPerfectOver = true;
            this['item12_' + i].input.pixelPerfectOut = true;
            this['item12_' + i].events.onInputDown.add(this.changeitem12, this);

            this.cgroup2.add(this['item12_' + i]);
        }

        this.door2 = game.add.sprite(632.95, 338.25, 'door2');
        this.door2.anchor.setTo(0.5);
        this.cgroup2.add(this.door2);

        this.cfront2 = game.add.sprite(630.9, 338.8, 'cfront2');
        this.cfront2.anchor.setTo(0.5);
        this.cfront2.inputEnabled = true;
        this.cfront2.events.onInputDown.add(function() {
            this.cfront2.inputEnabled = false;
            this.door2.animations.add('door2');
            this.door2.animations.play('door2', 10, false).onComplete.add(function() {

            }, this);

        }, this);
        this.cgroup2.add(this.cfront2);

        this.cgroup3 = game.add.group();

        this.cuboard3 = game.add.sprite(1048.15, 412.3, 'cuboard3');
        this.cuboard3.anchor.setTo(0.5);
        this.cgroup3.add(this.cuboard3);

        var item13X = [919, 1033, 1150, 737.15, 317.25, 375.25];
        var item13Y = [169.5, 170.6, 172.55, 225, 191.65, 187.8];
        for (i = 1; i <= 3; i++) {
            this['item13_' + i] = game.add.sprite(item13X[i - 1], item13Y[i - 1], 'item13');
            this['item13_' + i].anchor.setTo(0.5);
            this['item13_' + i].id = i;
            this['item13_' + i].cnt = 1;
            this['item13_' + i].inputEnabled = true;
            this['item13_' + i].input.useHandCursor = true;
            this['item13_' + i].input.pixelPerfectOver = true;
            this['item13_' + i].input.pixelPerfectOut = true;
            this['item13_' + i].events.onInputDown.add(this.changeitem13, this);

            this.cgroup3.add(this['item13_' + i]);
        }

        var item14X = [902, 1037, 1172.1, 737.15, 317.25, 375.25];
        var item14Y = [335.15, 332.15, 335.15, 225, 191.65, 187.8];
        for (i = 1; i <= 3; i++) {
            this['item14_' + i] = game.add.sprite(item14X[i - 1], item14Y[i - 1], 'item14');
            this['item14_' + i].anchor.setTo(0.5);
            this['item14_' + i].id = i;
            this['item14_' + i].cnt = 1;
            this['item14_' + i].inputEnabled = true;
            this['item14_' + i].input.useHandCursor = true;
            this['item14_' + i].input.pixelPerfectOver = true;
            this['item14_' + i].input.pixelPerfectOut = true;
            this['item14_' + i].events.onInputDown.add(this.changeitem14, this);

            this.cgroup3.add(this['item14_' + i]);
        }

        var item15X = [901.55, 1032.6, 1165.3, 737.15, 317.25, 375.25];
        var item15Y = [495.9, 497.9, 495.9, 225, 191.65, 187.8];
        for (i = 1; i <= 3; i++) {
            this['item15_' + i] = game.add.sprite(item15X[i - 1], item15Y[i - 1], 'item15');
            this['item15_' + i].anchor.setTo(0.5);
            this['item15_' + i].id = i;
            this['item15_' + i].cnt = 1;
            this['item15_' + i].inputEnabled = true;
            this['item15_' + i].input.useHandCursor = true;
            this['item15_' + i].input.pixelPerfectOver = true;
            this['item15_' + i].input.pixelPerfectOut = true;
            this['item15_' + i].events.onInputDown.add(this.changeitem15, this);

            this.cgroup3.add(this['item15_' + i]);
        }

        this.door3 = game.add.sprite(1034.35, 325.5, 'door3');
        this.door3.anchor.setTo(0.5);
        this.cgroup3.add(this.door3);

        this.cfront3 = game.add.sprite(1035.4, 323.95, 'cfront3');
        this.cfront3.anchor.setTo(0.5);
        this.cfront3.inputEnabled = true;
        this.cfront3.events.onInputDown.add(function() {
            this.cfront3.inputEnabled = false;
            this.door3.animations.add('door3');
            this.door3.animations.play('door3', 10, false).onComplete.add(function() {

            }, this);

        }, this);
        this.cgroup3.add(this.cfront3);

        this.cgroup4 = game.add.group();

        this.cuboard4 = game.add.sprite(1508.25, 407.2, 'cuboard3');
        this.cuboard4.anchor.setTo(0.5);
        this.cgroup4.add(this.cuboard4);

        var item16X = [1359.35, 1489.2, 1618.2, 737.15, 317.25, 375.25];
        var item16Y = [162.9, 162.9, 162.9, 225, 191.65, 187.8];
        for (i = 1; i <= 3; i++) {
            this['item16_' + i] = game.add.sprite(item16X[i - 1], item16Y[i - 1], 'item16');
            this['item16_' + i].anchor.setTo(0.5);
            this['item16_' + i].id = i;
            this['item16_' + i].cnt = 1;
            this['item16_' + i].inputEnabled = true;
            this['item16_' + i].input.useHandCursor = true;
            this['item16_' + i].input.pixelPerfectOver = true;
            this['item16_' + i].input.pixelPerfectOut = true;
            this['item16_' + i].events.onInputDown.add(this.changeitem16, this);

            this.cgroup4.add(this['item16_' + i]);
        }

        var item17X = [1383.45, 1492.45, 1604.45, 737.15, 317.25, 375.25];
        var item17Y = [342.4, 339.4, 335.4, 225, 191.65, 187.8];
        for (i = 1; i <= 3; i++) {
            this['item17_' + i] = game.add.sprite(item17X[i - 1], item17Y[i - 1], 'item17');
            this['item17_' + i].anchor.setTo(0.5);
            this['item17_' + i].id = i;
            this['item17_' + i].cnt = 1;
            this['item17_' + i].inputEnabled = true;
            this['item17_' + i].input.useHandCursor = true;
            this['item17_' + i].input.pixelPerfectOver = true;
            this['item17_' + i].input.pixelPerfectOut = true;
            this['item17_' + i].events.onInputDown.add(this.changeitem17, this);

            this.cgroup4.add(this['item17_' + i]);
        }

        var item18X = [1368.5, 1500.55, 1627.6, 737.15, 317.25, 375.25];
        var item18Y = [493.4, 491.35, 489.3, 225, 191.65, 187.8];
        for (i = 1; i <= 3; i++) {
            this['item18_' + i] = game.add.sprite(item18X[i - 1], item18Y[i - 1], 'item18');
            this['item18_' + i].anchor.setTo(0.5);
            this['item18_' + i].id = i;
            this['item18_' + i].cnt = 1;
            this['item18_' + i].inputEnabled = true;
            this['item18_' + i].input.useHandCursor = true;
            this['item18_' + i].input.pixelPerfectOver = true;
            this['item18_' + i].input.pixelPerfectOut = true;
            this['item18_' + i].events.onInputDown.add(this.changeitem18, this);

            this.cgroup4.add(this['item18_' + i]);
        }

        this.door4 = game.add.sprite(1494.45, 320.4, 'door3');
        this.door4.anchor.setTo(0.5);
        this.cgroup4.add(this.door4);

        this.cfront4 = game.add.sprite(1495.5, 318.85, 'cfront3');
        this.cfront4.anchor.setTo(0.5);
        this.cfront4.inputEnabled = true;
        this.cfront4.events.onInputDown.add(function() {
            this.cfront4.inputEnabled = false;
            this.door4.animations.add('door3');
            this.door4.animations.play('door3', 10, false).onComplete.add(function() {

            }, this);

        }, this);
        this.cgroup4.add(this.cfront4);

        this.cgroup5 = game.add.group();

        this.cuboard5 = game.add.sprite(1916.15, 400.1, 'cuboard4');
        this.cuboard5.anchor.setTo(0.5);
        this.cgroup5.add(this.cuboard5);

        var item19X = [1795.85, 1841.9, 1886.15, 737.15, 317.25, 375.25];
        var item19Y = [202.15, 201.95, 199.9, 225, 191.65, 187.8];
        for (i = 1; i <= 3; i++) {
            this['item19_' + i] = game.add.sprite(item19X[i - 1], item19Y[i - 1], 'item19');
            this['item19_' + i].anchor.setTo(0.5);
            this['item19_' + i].id = i;
            this['item19_' + i].cnt = 1;
            this['item19_' + i].inputEnabled = true;
            this['item19_' + i].input.useHandCursor = true;
            this['item19_' + i].input.pixelPerfectOver = true;
            this['item19_' + i].input.pixelPerfectOut = true;
            this['item19_' + i].events.onInputDown.add(this.changeitem19, this);

            this.cgroup5.add(this['item19_' + i]);
        }

        var item20X = [1935.15, 1976.15, 2019.15, 737.15, 317.25, 375.25];
        var item20Y = [202.5, 201.6, 200.25, 225, 191.65, 187.8];
        for (i = 1; i <= 3; i++) {
            this['item20_' + i] = game.add.sprite(item20X[i - 1], item20Y[i - 1], 'item20');
            this['item20_' + i].anchor.setTo(0.5);
            this['item20_' + i].id = i;
            this['item20_' + i].cnt = 1;
            this['item20_' + i].inputEnabled = true;
            this['item20_' + i].input.useHandCursor = true;
            this['item20_' + i].input.pixelPerfectOver = true;
            this['item20_' + i].input.pixelPerfectOut = true;
            this['item20_' + i].events.onInputDown.add(this.changeitem20, this);

            this.cgroup5.add(this['item20_' + i]);
        }

        var item21X = [1785.7, 1838.05, 1893.7, 737.15, 317.25, 375.25];
        var item21Y = [316.65, 316.55, 318.6, 225, 191.65, 187.8];
        for (i = 1; i <= 3; i++) {
            this['item21_' + i] = game.add.sprite(item21X[i - 1], item21Y[i - 1], 'item21');
            this['item21_' + i].anchor.setTo(0.5);
            this['item21_' + i].id = i;
            this['item21_' + i].cnt = 1;
            this['item21_' + i].inputEnabled = true;
            this['item21_' + i].input.useHandCursor = true;
            this['item21_' + i].input.pixelPerfectOver = true;
            this['item21_' + i].input.pixelPerfectOut = true;
            this['item21_' + i].events.onInputDown.add(this.changeitem21, this);

            this.cgroup5.add(this['item21_' + i]);
        }

        var item22X = [1951.75, 2009.7, 1893.7, 737.15, 317.25, 375.25];
        var item22Y = [314.3, 314.3, 318.6, 225, 191.65, 187.8];
        for (i = 1; i <= 2; i++) {
            this['item22_' + i] = game.add.sprite(item22X[i - 1], item22Y[i - 1], 'item22');
            this['item22_' + i].anchor.setTo(0.5);
            this['item22_' + i].id = i;
            this['item22_' + i].cnt = 1;
            this['item22_' + i].inputEnabled = true;
            this['item22_' + i].input.useHandCursor = true;
            this['item22_' + i].input.pixelPerfectOver = true;
            this['item22_' + i].input.pixelPerfectOut = true;
            this['item22_' + i].events.onInputDown.add(this.changeitem22, this);

            this.cgroup5.add(this['item22_' + i]);
        }

        var item23X = [1773.05, 1795.6, 1819.45, 1841.95, 1868.9, 1891.45];
        var item23Y = [419.75, 421.75, 421.75, 421.75, 421.75, 421.75];
        for (i = 1; i <= 6; i++) {
            this['item23_' + i] = game.add.sprite(item23X[i - 1], item23Y[i - 1], 'item23');
            this['item23_' + i].anchor.setTo(0.5);
            this['item23_' + i].id = i;
            this['item23_' + i].cnt = 1;
            this['item23_' + i].inputEnabled = true;
            this['item23_' + i].input.useHandCursor = true;
            this['item23_' + i].input.pixelPerfectOver = true;
            this['item23_' + i].input.pixelPerfectOut = true;
            this['item23_' + i].events.onInputDown.add(this.changeitem23, this);

            this.cgroup5.add(this['item23_' + i]);
        }

        var item24X = [1942.7, 1973.2, 1997.6, 2028.25, 1868.9, 1891.45];
        var item24Y = [426.35, 426.35, 426.35, 426.35, 421.75, 421.75];
        for (i = 1; i <= 4; i++) {
            this['item24_' + i] = game.add.sprite(item24X[i - 1], item24Y[i - 1], 'item24');
            this['item24_' + i].anchor.setTo(0.5);
            this['item24_' + i].id = i;
            this['item24_' + i].cnt = 1;
            this['item24_' + i].inputEnabled = true;
            this['item24_' + i].input.useHandCursor = true;
            this['item24_' + i].input.pixelPerfectOver = true;
            this['item24_' + i].input.pixelPerfectOut = true;
            this['item24_' + i].events.onInputDown.add(this.changeitem24, this);

            this.cgroup5.add(this['item24_' + i]);
        }

        var item25X = [1782.95, 1820, 1860, 1900, 1940, 1980];
        var item25Y = [528.55, 528.55, 528.55, 528.55, 528.55, 528.55];
        for (i = 1; i <= 6; i++) {
            this['item25_' + i] = game.add.sprite(item25X[i - 1], item25Y[i - 1], 'item25');
            this['item25_' + i].anchor.setTo(0.5);
            this['item25_' + i].id = i;
            this['item25_' + i].cnt = 1;
            this['item25_' + i].inputEnabled = true;
            this['item25_' + i].input.useHandCursor = true;
            this['item25_' + i].input.pixelPerfectOver = true;
            this['item25_' + i].input.pixelPerfectOut = true;
            this['item25_' + i].events.onInputDown.add(this.changeitem25, this);

            this.cgroup5.add(this['item25_' + i]);
        }

        this.door5 = game.add.sprite(1905.95, 323, 'door4');
        this.door5.anchor.setTo(0.5);
        this.cgroup5.add(this.door5);

        this.cfront5 = game.add.sprite(1903.9, 323.5, 'cfront4');
        this.cfront5.anchor.setTo(0.5);
        this.cfront5.inputEnabled = true;
        this.cfront5.events.onInputDown.add(function() {
            this.cfront5.inputEnabled = false;
            this.door5.animations.add('door4');
            this.door5.animations.play('door4', 10, false).onComplete.add(function() {

            }, this);

        }, this);
        this.cgroup5.add(this.cfront5);

        this.cgroup6 = game.add.group();

        this.cuboard6 = game.add.sprite(2280.05, 400.1, 'cuboard4');
        this.cuboard6.anchor.setTo(0.5);
        this.cgroup6.add(this.cuboard6);

        var item26X = [2193.4, 2269.15, 2349.45, 737.15, 317.25, 375.25];
        var item26Y = [197.35, 198.05, 199.85, 225, 191.65, 187.8];
        for (i = 1; i <= 3; i++) {
            this['item26_' + i] = game.add.sprite(item26X[i - 1], item26Y[i - 1], 'item26');
            this['item26_' + i].anchor.setTo(0.5);
            this['item26_' + i].id = i;
            this['item26_' + i].cnt = 1;
            this['item26_' + i].inputEnabled = true;
            this['item26_' + i].input.useHandCursor = true;
            this['item26_' + i].input.pixelPerfectOver = true;
            this['item26_' + i].input.pixelPerfectOut = true;
            this['item26_' + i].events.onInputDown.add(this.changeitem26, this);

            this.cgroup6.add(this['item26_' + i]);
        }

        var item27X = [2160.75, 2237.15, 2349.45, 737.15, 317.25, 375.25];
        var item27Y = [312.55, 312.55, 199.85, 225, 191.65, 187.8];
        for (i = 1; i <= 2; i++) {
            this['item27_' + i] = game.add.sprite(item27X[i - 1], item27Y[i - 1], 'item27');
            this['item27_' + i].anchor.setTo(0.5);
            this['item27_' + i].id = i;
            this['item27_' + i].cnt = 1;
            this['item27_' + i].inputEnabled = true;
            this['item27_' + i].input.useHandCursor = true;
            this['item27_' + i].input.pixelPerfectOver = true;
            this['item27_' + i].input.pixelPerfectOut = true;
            this['item27_' + i].events.onInputDown.add(this.changeitem27, this);

            this.cgroup6.add(this['item27_' + i]);
        }

        var item28X = [2311.65, 2383.5, 2349.45, 737.15, 317.25, 375.25];
        var item28Y = [314.25, 311.55, 199.85, 225, 191.65, 187.8];
        for (i = 1; i <= 2; i++) {
            this['item28_' + i] = game.add.sprite(item28X[i - 1], item28Y[i - 1], 'item28');
            this['item28_' + i].anchor.setTo(0.5);
            this['item28_' + i].id = i;
            this['item28_' + i].cnt = 1;
            this['item28_' + i].inputEnabled = true;
            this['item28_' + i].input.useHandCursor = true;
            this['item28_' + i].input.pixelPerfectOver = true;
            this['item28_' + i].input.pixelPerfectOut = true;
            this['item28_' + i].events.onInputDown.add(this.changeitem28, this);

            this.cgroup6.add(this['item28_' + i]);
        }

        var item29X = [2161.45, 2233.5, 2349.45, 737.15, 317.25, 375.25];
        var item29Y = [419.2, 419.2, 199.85, 225, 191.65, 187.8];
        for (i = 1; i <= 2; i++) {
            this['item29_' + i] = game.add.sprite(item29X[i - 1], item29Y[i - 1], 'item29');
            this['item29_' + i].anchor.setTo(0.5);
            this['item29_' + i].id = i;
            this['item29_' + i].cnt = 1;
            this['item29_' + i].inputEnabled = true;
            this['item29_' + i].input.useHandCursor = true;
            this['item29_' + i].input.pixelPerfectOver = true;
            this['item29_' + i].input.pixelPerfectOut = true;
            this['item29_' + i].events.onInputDown.add(this.changeitem29, this);

            this.cgroup6.add(this['item29_' + i]);
        }

        var item30X = [2305.9, 2377.2, 2349.45, 737.15, 317.25, 375.25];
        var item30Y = [417.8, 420.55, 199.85, 225, 191.65, 187.8];
        for (i = 1; i <= 2; i++) {
            this['item30_' + i] = game.add.sprite(item30X[i - 1], item30Y[i - 1], 'item30');
            this['item30_' + i].anchor.setTo(0.5);
            this['item30_' + i].id = i;
            this['item30_' + i].cnt = 1;
            this['item30_' + i].inputEnabled = true;
            this['item30_' + i].input.useHandCursor = true;
            this['item30_' + i].input.pixelPerfectOver = true;
            this['item30_' + i].input.pixelPerfectOut = true;
            this['item30_' + i].events.onInputDown.add(this.changeitem30, this);

            this.cgroup6.add(this['item30_' + i]);
        }

        var item31X = [2159.95, 2253.3, 2343.5, 737.15, 317.25, 375.25];
        var item31Y = [521.05, 519, 519, 225, 191.65, 187.8];
        for (i = 1; i <= 3; i++) {
            this['item31_' + i] = game.add.sprite(item31X[i - 1], item31Y[i - 1], 'item31');
            this['item31_' + i].anchor.setTo(0.5);
            this['item31_' + i].id = i;
            this['item31_' + i].cnt = 1;
            this['item31_' + i].inputEnabled = true;
            this['item31_' + i].input.useHandCursor = true;
            this['item31_' + i].input.pixelPerfectOver = true;
            this['item31_' + i].input.pixelPerfectOut = true;
            this['item31_' + i].events.onInputDown.add(this.changeitem31, this);

            this.cgroup6.add(this['item31_' + i]);
        }

        this.door6 = game.add.sprite(2269.85, 323, 'door4');
        this.door6.anchor.setTo(0.5);
        this.cgroup6.add(this.door6);

        this.cfront6 = game.add.sprite(2267.8, 323.5, 'cfront4');
        this.cfront6.anchor.setTo(0.5);
        this.cfront6.inputEnabled = true;
        this.cfront6.events.onInputDown.add(function() {
            this.cfront6.inputEnabled = false;
            this.door6.animations.add('door4');
            this.door6.animations.play('door4', 10, false).onComplete.add(function() {

            }, this);

        }, this);
        this.cgroup6.add(this.cfront6);


        this.levelGroup.add(this.cgroup1);
        this.levelGroup.add(this.cgroup2);
        this.levelGroup.add(this.cgroup3);
        this.levelGroup.add(this.cgroup4);
        this.levelGroup.add(this.cgroup5);
        this.levelGroup.add(this.cgroup6);

        // this.levelGroup.x=-2100;

        this.trolly = game.add.sprite(300.2, 612.65, 'trolly');
        this.trolly.anchor.setTo(0.5);
        this.trolly.scale.setTo(0.85);

        this.ftrolly = game.add.sprite(283.85, 644.35, 'ftrolly');
        this.ftrolly.anchor.setTo(0.5);
        this.ftrolly.scale.setTo(0.85);

        this.ncnt = 0;

        this.forwardbtn = game.add.sprite(465, 644.35, 'forwardbtn');
        this.forwardbtn.anchor.setTo(0.5);
        this.forwardbtn.inputEnabled = true;
        this.forwardbtn.events.onInputDown.add(function() {
            this.ncnt++;
            this.forwardbtn.inputEnabled = false;
            this.backwardbtn.visible = true;
            if (this.ncnt == 5) {
                this.forwardbtn.visible = false;
            }
            game.add.tween(this.levelGroup).to({
                x: (this.levelGroup.x - 410)
            }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                this.forwardbtn.inputEnabled = true;
            }, this);

        }, this);

        this.backwardbtn = game.add.sprite(105, 644.35, 'forwardbtn');
        this.backwardbtn.anchor.setTo(0.5);
        this.backwardbtn.scale.x = -this.backwardbtn.scale.x;
        this.backwardbtn.visible = false;
        this.backwardbtn.inputEnabled = true;
        this.backwardbtn.events.onInputDown.add(function() {
            this.ncnt--;
            this.backwardbtn.inputEnabled = false;
            this.forwardbtn.visible = true;
            if (this.ncnt == 0) {
                this.backwardbtn.visible = false;
            }
            game.add.tween(this.levelGroup).to({
                x: (this.levelGroup.x + 410)
            }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                this.backwardbtn.inputEnabled = true;

            }, this);

        }, this);


        //   this.dummydrag = true;

        // this.dummyobject= game.add.sprite(-100,0,'item1');
        // this.dummyobject.anchor.setTo(0.5);
        // this.dummyobject.scale.setTo(0.8);

        this.bcnt = 0;





        this.morebtn = game.add.sprite(75.55, 762, 'morebtn');
        this.morebtn.anchor.setTo(0.5);
        // this.morebtn.scale.setTo(0);
        this.morebtn.inputEnabled = true;
        this.morebtn.input.useHandCursor = true;
        //this.morebtn.events.onInputUp.add(this.moreLink, this);
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

            }, this);
        }





        this.logoVar = game.add.sprite(5, 5, 'logo');
        this.logoVar.scale.setTo(0.8);
        this.logoVar.inputEnabled = true
        this.logoVar.input.useHandCursor = true;
        // this.logoVar.events.onInputUp.add(this.openLink, this);

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

        game.world.bringToTop(this.morebtn);
        game.world.bringToTop(this.playbtn);
        game.world.bringToTop(this.shutter);
        game.world.bringToTop(this.logoVar);
        game.world.bringToTop(this.musicButton);

    },
    changeitem1: function(evt) {
        this.bcnt++;
        if (this.bcnt == 31) {
            game.add.tween(this.playbtn.scale).to({
                x: 1,
                y: 1
            }, 700, Phaser.Easing.Quadratic.Out, true);
        }
        this['item1_' + evt.id].visible = false;
        for (i = 1; i <= 6; i++) {
            this['item1_' + i].inputEnabled = false;
        }
        this.ditems = game.add.sprite(evt.x, evt.y, 'item1');
        this.ditems.anchor.setTo(0.5);
        game.world.bringToTop(this.ditems);
        game.world.bringToTop(this.ftrolly);

        game.add.tween(this.ditems).to({
            x: 267,
            y: 632
        }, 700, Phaser.Easing.Quadratic.Out, true);
        game.add.tween(this.ditems.scale).to({
            x: 0.6,
            y: 0.6
        }, 700, Phaser.Easing.Quadratic.Out, true);


    },
    changeitem2: function(evt) {
        this.bcnt++;
        if (this.bcnt == 31) {
            game.add.tween(this.playbtn.scale).to({
                x: 1,
                y: 1
            }, 700, Phaser.Easing.Quadratic.Out, true);
        }
        this['item2_' + evt.id].visible = false;
        for (i = 1; i <= 3; i++) {
            this['item2_' + i].inputEnabled = false;
        }
        this.ditems = game.add.sprite(evt.x, evt.y, 'item2');
        this.ditems.anchor.setTo(0.5);
        game.world.bringToTop(this.ditems);
        game.world.bringToTop(this.ftrolly);

        game.add.tween(this.ditems).to({
            x: 277,
            y: 642
        }, 700, Phaser.Easing.Quadratic.Out, true);
        game.add.tween(this.ditems.scale).to({
            x: 0.6,
            y: 0.6
        }, 700, Phaser.Easing.Quadratic.Out, true);


    },
    changeitem3: function(evt) {
        this.bcnt++;
        if (this.bcnt == 31) {
            game.add.tween(this.playbtn.scale).to({
                x: 1,
                y: 1
            }, 700, Phaser.Easing.Quadratic.Out, true);
        }
        this['item3_' + evt.id].visible = false;
        for (i = 1; i <= 3; i++) {
            this['item3_' + i].inputEnabled = false;
        }
        this.ditems = game.add.sprite(evt.x, evt.y, 'item3');
        this.ditems.anchor.setTo(0.5);
        game.world.bringToTop(this.ditems);
        game.world.bringToTop(this.ftrolly);

        game.add.tween(this.ditems).to({
            x: 277,
            y: 642
        }, 700, Phaser.Easing.Quadratic.Out, true);
        game.add.tween(this.ditems.scale).to({
            x: 0.6,
            y: 0.6
        }, 700, Phaser.Easing.Quadratic.Out, true);


    },
    changeitem4: function(evt) {
        this.bcnt++;
        if (this.bcnt == 31) {
            game.add.tween(this.playbtn.scale).to({
                x: 1,
                y: 1
            }, 700, Phaser.Easing.Quadratic.Out, true);
        }
        this['item4_' + evt.id].visible = false;
        for (i = 1; i <= 3; i++) {
            this['item4_' + i].inputEnabled = false;
        }
        this.ditems = game.add.sprite(evt.x, evt.y, 'item4');
        this.ditems.anchor.setTo(0.5);
        game.world.bringToTop(this.ditems);
        game.world.bringToTop(this.ftrolly);

        game.add.tween(this.ditems).to({
            x: 277,
            y: 642
        }, 700, Phaser.Easing.Quadratic.Out, true);
        game.add.tween(this.ditems.scale).to({
            x: 0.6,
            y: 0.6
        }, 700, Phaser.Easing.Quadratic.Out, true);


    },

    changeitem5: function(evt) {
        this.bcnt++;
        if (this.bcnt == 31) {
            game.add.tween(this.playbtn.scale).to({
                x: 1,
                y: 1
            }, 700, Phaser.Easing.Quadratic.Out, true);
        }
        this['item5_' + evt.id].visible = false;
        for (i = 1; i <= 4; i++) {
            this['item5_' + i].inputEnabled = false;
        }
        this.ditems = game.add.sprite(game.input.activePointer.x, game.input.activePointer.y, 'item5');
        this.ditems.anchor.setTo(0.5);
        game.world.bringToTop(this.ditems);
        game.world.bringToTop(this.ftrolly);

        game.add.tween(this.ditems).to({
            x: 277,
            y: 642
        }, 700, Phaser.Easing.Quadratic.Out, true);
        game.add.tween(this.ditems.scale).to({
            x: 0.6,
            y: 0.6
        }, 700, Phaser.Easing.Quadratic.Out, true);


    },
    changeitem6: function(evt) {
        this.bcnt++;
        if (this.bcnt == 31) {
            game.add.tween(this.playbtn.scale).to({
                x: 1,
                y: 1
            }, 700, Phaser.Easing.Quadratic.Out, true);
        }
        this['item6_' + evt.id].visible = false;
        for (i = 1; i <= 3; i++) {
            this['item6_' + i].inputEnabled = false;
        }
        this.ditems = game.add.sprite(game.input.activePointer.x, game.input.activePointer.y, 'item6');
        this.ditems.anchor.setTo(0.5);
        game.world.bringToTop(this.ditems);
        game.world.bringToTop(this.ftrolly);

        game.add.tween(this.ditems).to({
            x: 277,
            y: 642
        }, 700, Phaser.Easing.Quadratic.Out, true);
        game.add.tween(this.ditems.scale).to({
            x: 0.6,
            y: 0.6
        }, 700, Phaser.Easing.Quadratic.Out, true);


    },

    changeitem7: function(evt) {
        this.bcnt++;
        if (this.bcnt == 31) {
            game.add.tween(this.playbtn.scale).to({
                x: 1,
                y: 1
            }, 700, Phaser.Easing.Quadratic.Out, true);
        }
        this['item7_' + evt.id].visible = false;
        for (i = 1; i <= 2; i++) {
            this['item7_' + i].inputEnabled = false;
        }
        this.ditems = game.add.sprite(game.input.activePointer.x, game.input.activePointer.y, 'item7');
        this.ditems.anchor.setTo(0.5);
        game.world.bringToTop(this.ditems);
        game.world.bringToTop(this.ftrolly);

        game.add.tween(this.ditems).to({
            x: 277,
            y: 642
        }, 700, Phaser.Easing.Quadratic.Out, true);
        game.add.tween(this.ditems.scale).to({
            x: 0.6,
            y: 0.6
        }, 700, Phaser.Easing.Quadratic.Out, true);


    },

    changeitem8: function(evt) {
        this.bcnt++;
        if (this.bcnt == 31) {
            game.add.tween(this.playbtn.scale).to({
                x: 1,
                y: 1
            }, 700, Phaser.Easing.Quadratic.Out, true);
        }
        this['item8_' + evt.id].visible = false;
        for (i = 1; i <= 3; i++) {
            this['item8_' + i].inputEnabled = false;
        }
        this.ditems = game.add.sprite(game.input.activePointer.x, game.input.activePointer.y, 'item8');
        this.ditems.anchor.setTo(0.5);
        game.world.bringToTop(this.ditems);
        game.world.bringToTop(this.ftrolly);

        game.add.tween(this.ditems).to({
            x: 277,
            y: 642
        }, 700, Phaser.Easing.Quadratic.Out, true);
        game.add.tween(this.ditems.scale).to({
            x: 0.6,
            y: 0.6
        }, 700, Phaser.Easing.Quadratic.Out, true);


    },
    changeitem9: function(evt) {
        this.bcnt++;
        if (this.bcnt == 31) {
            game.add.tween(this.playbtn.scale).to({
                x: 1,
                y: 1
            }, 700, Phaser.Easing.Quadratic.Out, true);
        }
        this['item9_' + evt.id].visible = false;
        for (i = 1; i <= 3; i++) {
            this['item9_' + i].inputEnabled = false;
        }
        this.ditems = game.add.sprite(game.input.activePointer.x, game.input.activePointer.y, 'item9');
        this.ditems.anchor.setTo(0.5);
        game.world.bringToTop(this.ditems);
        game.world.bringToTop(this.ftrolly);

        game.add.tween(this.ditems).to({
            x: 277,
            y: 642
        }, 700, Phaser.Easing.Quadratic.Out, true);
        game.add.tween(this.ditems.scale).to({
            x: 0.6,
            y: 0.6
        }, 700, Phaser.Easing.Quadratic.Out, true);


    },
    changeitem10: function(evt) {
        this.bcnt++;
        if (this.bcnt == 31) {
            game.add.tween(this.playbtn.scale).to({
                x: 1,
                y: 1
            }, 700, Phaser.Easing.Quadratic.Out, true);
        }
        this['item10_' + evt.id].visible = false;
        for (i = 1; i <= 1; i++) {
            this['item10_' + i].inputEnabled = false;
        }
        this.ditems = game.add.sprite(game.input.activePointer.x, game.input.activePointer.y, 'item10');
        this.ditems.anchor.setTo(0.5);
        game.world.bringToTop(this.ditems);
        game.world.bringToTop(this.ftrolly);

        game.add.tween(this.ditems).to({
            x: 277,
            y: 642
        }, 700, Phaser.Easing.Quadratic.Out, true);
        game.add.tween(this.ditems.scale).to({
            x: 0.6,
            y: 0.6
        }, 700, Phaser.Easing.Quadratic.Out, true);


    },
    changeitem11: function(evt) {
        this.bcnt++;
        if (this.bcnt == 31) {
            game.add.tween(this.playbtn.scale).to({
                x: 1,
                y: 1
            }, 700, Phaser.Easing.Quadratic.Out, true);
        }
        this['item11_' + evt.id].visible = false;
        for (i = 1; i <= 2; i++) {
            this['item11_' + i].inputEnabled = false;
        }
        this.ditems = game.add.sprite(game.input.activePointer.x, game.input.activePointer.y, 'item11');
        this.ditems.anchor.setTo(0.5);
        game.world.bringToTop(this.ditems);
        game.world.bringToTop(this.ftrolly);

        game.add.tween(this.ditems).to({
            x: 277,
            y: 642
        }, 700, Phaser.Easing.Quadratic.Out, true);
        game.add.tween(this.ditems.scale).to({
            x: 0.6,
            y: 0.6
        }, 700, Phaser.Easing.Quadratic.Out, true);

    },
    changeitem12: function(evt) {
        this.bcnt++;
        if (this.bcnt == 31) {
            game.add.tween(this.playbtn.scale).to({
                x: 1,
                y: 1
            }, 700, Phaser.Easing.Quadratic.Out, true);
        }
        this['item12_' + evt.id].visible = false;
        for (i = 1; i <= 2; i++) {
            this['item12_' + i].inputEnabled = false;
        }
        this.ditems = game.add.sprite(game.input.activePointer.x, game.input.activePointer.y, 'item12');
        this.ditems.anchor.setTo(0.5);
        game.world.bringToTop(this.ditems);
        game.world.bringToTop(this.ftrolly);

        game.add.tween(this.ditems).to({
            x: 277,
            y: 642
        }, 700, Phaser.Easing.Quadratic.Out, true);
        game.add.tween(this.ditems.scale).to({
            x: 0.6,
            y: 0.6
        }, 700, Phaser.Easing.Quadratic.Out, true);


    },
    changeitem13: function(evt) {
        this.bcnt++;
        if (this.bcnt == 31) {
            game.add.tween(this.playbtn.scale).to({
                x: 1,
                y: 1
            }, 700, Phaser.Easing.Quadratic.Out, true);
        }
        this['item13_' + evt.id].visible = false;
        for (i = 1; i <= 3; i++) {
            this['item13_' + i].inputEnabled = false;
        }
        this.ditems = game.add.sprite(game.input.activePointer.x, game.input.activePointer.y, 'item13');
        this.ditems.anchor.setTo(0.5);
        game.world.bringToTop(this.ditems);
        game.world.bringToTop(this.ftrolly);

        game.add.tween(this.ditems).to({
            x: 357,
            y: 642
        }, 700, Phaser.Easing.Quadratic.Out, true);
        game.add.tween(this.ditems.scale).to({
            x: 0.5,
            y: 0.5
        }, 700, Phaser.Easing.Quadratic.Out, true);


    },
    changeitem14: function(evt) {
        this.bcnt++;
        if (this.bcnt == 31) {
            game.add.tween(this.playbtn.scale).to({
                x: 1,
                y: 1
            }, 700, Phaser.Easing.Quadratic.Out, true);
        }
        this['item14_' + evt.id].visible = false;
        for (i = 1; i <= 3; i++) {
            this['item14_' + i].inputEnabled = false;
        }
        this.ditems = game.add.sprite(game.input.activePointer.x, game.input.activePointer.y, 'item14');
        this.ditems.anchor.setTo(0.5);
        game.world.bringToTop(this.ditems);
        game.world.bringToTop(this.ftrolly);

        game.add.tween(this.ditems).to({
            x: 357,
            y: 642
        }, 700, Phaser.Easing.Quadratic.Out, true);
        game.add.tween(this.ditems.scale).to({
            x: 0.5,
            y: 0.5
        }, 700, Phaser.Easing.Quadratic.Out, true);


    },
    changeitem15: function(evt) {
        this.bcnt++;
        if (this.bcnt == 31) {
            game.add.tween(this.playbtn.scale).to({
                x: 1,
                y: 1
            }, 700, Phaser.Easing.Quadratic.Out, true);
        }
        this['item15_' + evt.id].visible = false;
        for (i = 1; i <= 3; i++) {
            this['item15_' + i].inputEnabled = false;
        }
        this.ditems = game.add.sprite(game.input.activePointer.x, game.input.activePointer.y, 'item15');
        this.ditems.anchor.setTo(0.5);
        game.world.bringToTop(this.ditems);
        game.world.bringToTop(this.ftrolly);

        game.add.tween(this.ditems).to({
            x: 357,
            y: 642
        }, 700, Phaser.Easing.Quadratic.Out, true);
        game.add.tween(this.ditems.scale).to({
            x: 0.5,
            y: 0.5
        }, 700, Phaser.Easing.Quadratic.Out, true);


    },
    changeitem16: function(evt) {
        this.bcnt++;
        if (this.bcnt == 31) {
            game.add.tween(this.playbtn.scale).to({
                x: 1,
                y: 1
            }, 700, Phaser.Easing.Quadratic.Out, true);
        }
        this['item16_' + evt.id].visible = false;
        for (i = 1; i <= 3; i++) {
            this['item16_' + i].inputEnabled = false;
        }
        this.ditems = game.add.sprite(game.input.activePointer.x, game.input.activePointer.y, 'item16');
        this.ditems.anchor.setTo(0.5);
        game.world.bringToTop(this.ditems);
        game.world.bringToTop(this.ftrolly);

        game.add.tween(this.ditems).to({
            x: 357,
            y: 642
        }, 700, Phaser.Easing.Quadratic.Out, true);
        game.add.tween(this.ditems.scale).to({
            x: 0.5,
            y: 0.5
        }, 700, Phaser.Easing.Quadratic.Out, true);

    },
    changeitem17: function(evt) {
        this.bcnt++;
        if (this.bcnt == 31) {
            game.add.tween(this.playbtn.scale).to({
                x: 1,
                y: 1
            }, 700, Phaser.Easing.Quadratic.Out, true);
        }
        this['item17_' + evt.id].visible = false;
        for (i = 1; i <= 3; i++) {
            this['item17_' + i].inputEnabled = false;
        }
        this.ditems = game.add.sprite(game.input.activePointer.x, game.input.activePointer.y, 'item17');
        this.ditems.anchor.setTo(0.5);
        game.world.bringToTop(this.ditems);
        game.world.bringToTop(this.ftrolly);

        game.add.tween(this.ditems).to({
            x: 357,
            y: 642
        }, 700, Phaser.Easing.Quadratic.Out, true);
        game.add.tween(this.ditems.scale).to({
            x: 0.5,
            y: 0.5
        }, 700, Phaser.Easing.Quadratic.Out, true);


    },
    changeitem18: function(evt) {
        this.bcnt++;
        if (this.bcnt == 31) {
            game.add.tween(this.playbtn.scale).to({
                x: 1,
                y: 1
            }, 700, Phaser.Easing.Quadratic.Out, true);
        }
        this['item18_' + evt.id].visible = false;
        for (i = 1; i <= 3; i++) {
            this['item18_' + i].inputEnabled = false;
        }
        this.ditems = game.add.sprite(game.input.activePointer.x, game.input.activePointer.y, 'item18');
        this.ditems.anchor.setTo(0.5);
        game.world.bringToTop(this.ditems);
        game.world.bringToTop(this.ftrolly);

        game.add.tween(this.ditems).to({
            x: 357,
            y: 642
        }, 700, Phaser.Easing.Quadratic.Out, true);
        game.add.tween(this.ditems.scale).to({
            x: 0.5,
            y: 0.5
        }, 700, Phaser.Easing.Quadratic.Out, true);


    },
    changeitem19: function(evt) {
        this.bcnt++;
        if (this.bcnt == 31) {
            game.add.tween(this.playbtn.scale).to({
                x: 1,
                y: 1
            }, 700, Phaser.Easing.Quadratic.Out, true);
        }
        this['item19_' + evt.id].visible = false;
        for (i = 1; i <= 3; i++) {
            this['item19_' + i].inputEnabled = false;
        }
        this.ditems = game.add.sprite(game.input.activePointer.x, game.input.activePointer.y, 'item19');
        this.ditems.anchor.setTo(0.5);
        game.world.bringToTop(this.ditems);
        game.world.bringToTop(this.ftrolly);

        game.add.tween(this.ditems).to({
            x: 267,
            y: 672
        }, 700, Phaser.Easing.Quadratic.Out, true);
        game.add.tween(this.ditems.scale).to({
            x: 0.5,
            y: 0.5
        }, 700, Phaser.Easing.Quadratic.Out, true);


    },
    changeitem20: function(evt) {
        this.bcnt++;
        if (this.bcnt == 31) {
            game.add.tween(this.playbtn.scale).to({
                x: 1,
                y: 1
            }, 700, Phaser.Easing.Quadratic.Out, true);
        }
        this['item20_' + evt.id].visible = false;
        for (i = 1; i <= 3; i++) {
            this['item20_' + i].inputEnabled = false;
        }
        this.ditems = game.add.sprite(game.input.activePointer.x, game.input.activePointer.y, 'item20');
        this.ditems.anchor.setTo(0.5);
        game.world.bringToTop(this.ditems);
        game.world.bringToTop(this.ftrolly);

        game.add.tween(this.ditems).to({
            x: 277,
            y: 672
        }, 700, Phaser.Easing.Quadratic.Out, true);
        game.add.tween(this.ditems.scale).to({
            x: 0.5,
            y: 0.5
        }, 700, Phaser.Easing.Quadratic.Out, true);


    },
    changeitem21: function(evt) {
        this.bcnt++;
        if (this.bcnt == 31) {
            game.add.tween(this.playbtn.scale).to({
                x: 1,
                y: 1
            }, 700, Phaser.Easing.Quadratic.Out, true);
        }
        this['item21_' + evt.id].visible = false;
        for (i = 1; i <= 3; i++) {
            this['item21_' + i].inputEnabled = false;
        }
        this.ditems = game.add.sprite(game.input.activePointer.x, game.input.activePointer.y, 'item21');
        this.ditems.anchor.setTo(0.5);
        game.world.bringToTop(this.ditems);
        game.world.bringToTop(this.ftrolly);

        game.add.tween(this.ditems).to({
            x: 287,
            y: 672
        }, 700, Phaser.Easing.Quadratic.Out, true);
        game.add.tween(this.ditems.scale).to({
            x: 0.5,
            y: 0.5
        }, 700, Phaser.Easing.Quadratic.Out, true);


    },
    changeitem22: function(evt) {
        this.bcnt++;
        if (this.bcnt == 31) {
            game.add.tween(this.playbtn.scale).to({
                x: 1,
                y: 1
            }, 700, Phaser.Easing.Quadratic.Out, true);
        }
        this['item22_' + evt.id].visible = false;
        for (i = 1; i <= 2; i++) {
            this['item22_' + i].inputEnabled = false;
        }
        this.ditems = game.add.sprite(game.input.activePointer.x, game.input.activePointer.y, 'item22');
        this.ditems.anchor.setTo(0.5);
        game.world.bringToTop(this.ditems);
        game.world.bringToTop(this.ftrolly);

        game.add.tween(this.ditems).to({
            x: 297,
            y: 672
        }, 700, Phaser.Easing.Quadratic.Out, true);
        game.add.tween(this.ditems.scale).to({
            x: 0.5,
            y: 0.5
        }, 700, Phaser.Easing.Quadratic.Out, true);



    },
    changeitem23: function(evt) {
        this.bcnt++;
        if (this.bcnt == 31) {
            game.add.tween(this.playbtn.scale).to({
                x: 1,
                y: 1
            }, 700, Phaser.Easing.Quadratic.Out, true);
        }
        this['item23_' + evt.id].visible = false;
        for (i = 1; i <= 6; i++) {
            this['item23_' + i].inputEnabled = false;
        }
        this.ditems = game.add.sprite(game.input.activePointer.x, game.input.activePointer.y, 'item23');
        this.ditems.anchor.setTo(0.5);
        game.world.bringToTop(this.ditems);
        game.world.bringToTop(this.ftrolly);

        game.add.tween(this.ditems).to({
            x: 317,
            y: 642
        }, 700, Phaser.Easing.Quadratic.Out, true);
        game.add.tween(this.ditems.scale).to({
            x: 0.7,
            y: 0.7
        }, 700, Phaser.Easing.Quadratic.Out, true);


    },
    changeitem24: function(evt) {
        this.bcnt++;
        if (this.bcnt == 31) {
            game.add.tween(this.playbtn.scale).to({
                x: 1,
                y: 1
            }, 700, Phaser.Easing.Quadratic.Out, true);
        }
        this['item24_' + evt.id].visible = false;
        for (i = 1; i <= 4; i++) {
            this['item24_' + i].inputEnabled = false;
        }
        this.ditems = game.add.sprite(game.input.activePointer.x, game.input.activePointer.y, 'item24');
        this.ditems.anchor.setTo(0.5);
        game.world.bringToTop(this.ditems);
        game.world.bringToTop(this.ftrolly);

        game.add.tween(this.ditems).to({
            x: 307,
            y: 672
        }, 700, Phaser.Easing.Quadratic.Out, true);
        game.add.tween(this.ditems.scale).to({
            x: 0.7,
            y: 0.7
        }, 700, Phaser.Easing.Quadratic.Out, true);



    },
    changeitem25: function(evt) {
        this.bcnt++;
        if (this.bcnt == 31) {
            game.add.tween(this.playbtn.scale).to({
                x: 1,
                y: 1
            }, 700, Phaser.Easing.Quadratic.Out, true);
        }
        this['item25_' + evt.id].visible = false;
        for (i = 1; i <= 6; i++) {
            this['item25_' + i].inputEnabled = false;
        }
        this.ditems = game.add.sprite(game.input.activePointer.x, game.input.activePointer.y, 'item25');
        this.ditems.anchor.setTo(0.5);
        game.world.bringToTop(this.ditems);
        game.world.bringToTop(this.ftrolly);

        game.add.tween(this.ditems).to({
            x: 297,
            y: 662
        }, 700, Phaser.Easing.Quadratic.Out, true);
        game.add.tween(this.ditems.scale).to({
            x: 0.5,
            y: 0.5
        }, 700, Phaser.Easing.Quadratic.Out, true);



    },
    changeitem26: function(evt) {
        this.bcnt++;
        if (this.bcnt == 31) {
            game.add.tween(this.playbtn.scale).to({
                x: 1,
                y: 1
            }, 700, Phaser.Easing.Quadratic.Out, true);
        }
        this['item26_' + evt.id].visible = false;
        for (i = 1; i <= 2; i++) {
            this['item26_' + i].inputEnabled = false;
        }
        this.ditems = game.add.sprite(game.input.activePointer.x, game.input.activePointer.y, 'item26');
        this.ditems.anchor.setTo(0.5);
        game.world.bringToTop(this.ditems);
        game.world.bringToTop(this.ftrolly);

        game.add.tween(this.ditems).to({
            x: 297,
            y: 662
        }, 700, Phaser.Easing.Quadratic.Out, true);
        game.add.tween(this.ditems.scale).to({
            x: 0.5,
            y: 0.5
        }, 700, Phaser.Easing.Quadratic.Out, true);



    },
    changeitem27: function(evt) {
        this.bcnt++;
        if (this.bcnt == 31) {
            game.add.tween(this.playbtn.scale).to({
                x: 1,
                y: 1
            }, 700, Phaser.Easing.Quadratic.Out, true);
        }
        this['item27_' + evt.id].visible = false;
        for (i = 1; i <= 2; i++) {
            this['item27_' + i].inputEnabled = false;
        }
        this.ditems = game.add.sprite(game.input.activePointer.x, game.input.activePointer.y, 'item27');
        this.ditems.anchor.setTo(0.5);
        game.world.bringToTop(this.ditems);
        game.world.bringToTop(this.ftrolly);

        game.add.tween(this.ditems).to({
            x: 297,
            y: 662
        }, 700, Phaser.Easing.Quadratic.Out, true);
        game.add.tween(this.ditems.scale).to({
            x: 0.5,
            y: 0.5
        }, 700, Phaser.Easing.Quadratic.Out, true);



    },
    changeitem28: function(evt) {
        this.bcnt++;
        if (this.bcnt == 31) {
            game.add.tween(this.playbtn.scale).to({
                x: 1,
                y: 1
            }, 700, Phaser.Easing.Quadratic.Out, true);
        }
        this['item28_' + evt.id].visible = false;
        for (i = 1; i <= 2; i++) {
            this['item28_' + i].inputEnabled = false;
        }
        this.ditems = game.add.sprite(game.input.activePointer.x, game.input.activePointer.y, 'item28');
        this.ditems.anchor.setTo(0.5);
        game.world.bringToTop(this.ditems);
        game.world.bringToTop(this.ftrolly);

        game.add.tween(this.ditems).to({
            x: 297,
            y: 662
        }, 700, Phaser.Easing.Quadratic.Out, true);
        game.add.tween(this.ditems.scale).to({
            x: 0.5,
            y: 0.5
        }, 700, Phaser.Easing.Quadratic.Out, true);



    },
    changeitem29: function(evt) {
        this.bcnt++;
        if (this.bcnt == 31) {
            game.add.tween(this.playbtn.scale).to({
                x: 1,
                y: 1
            }, 700, Phaser.Easing.Quadratic.Out, true);
        }
        this['item29_' + evt.id].visible = false;
        for (i = 1; i <= 2; i++) {
            this['item29_' + i].inputEnabled = false;
        }
        this.ditems = game.add.sprite(game.input.activePointer.x, game.input.activePointer.y, 'item29');
        this.ditems.anchor.setTo(0.5);
        game.world.bringToTop(this.ditems);
        game.world.bringToTop(this.ftrolly);

        game.add.tween(this.ditems).to({
            x: 297,
            y: 662
        }, 700, Phaser.Easing.Quadratic.Out, true);
        game.add.tween(this.ditems.scale).to({
            x: 0.5,
            y: 0.5
        }, 700, Phaser.Easing.Quadratic.Out, true);



    },
    changeitem30: function(evt) {
        this.bcnt++;
        if (this.bcnt == 31) {
            game.add.tween(this.playbtn.scale).to({
                x: 1,
                y: 1
            }, 700, Phaser.Easing.Quadratic.Out, true);
        }
        this['item30_' + evt.id].visible = false;
        for (i = 1; i <= 2; i++) {
            this['item30_' + i].inputEnabled = false;
        }
        this.ditems = game.add.sprite(game.input.activePointer.x, game.input.activePointer.y, 'item30');
        this.ditems.anchor.setTo(0.5);
        game.world.bringToTop(this.ditems);
        game.world.bringToTop(this.ftrolly);

        game.add.tween(this.ditems).to({
            x: 297,
            y: 662
        }, 700, Phaser.Easing.Quadratic.Out, true);
        game.add.tween(this.ditems.scale).to({
            x: 0.5,
            y: 0.5
        }, 700, Phaser.Easing.Quadratic.Out, true);



    },

    changeitem31: function(evt) {
        this.bcnt++;
        if (this.bcnt == 31) {
            game.add.tween(this.playbtn.scale).to({
                x: 1,
                y: 1
            }, 700, Phaser.Easing.Quadratic.Out, true);
        }
        this['item31_' + evt.id].visible = false;
        for (i = 1; i <= 3; i++) {
            this['item31_' + i].inputEnabled = false;
        }
        this.ditems = game.add.sprite(game.input.activePointer.x, game.input.activePointer.y, 'item31');
        this.ditems.anchor.setTo(0.5);
        game.world.bringToTop(this.ditems);
        game.world.bringToTop(this.ftrolly);

        game.add.tween(this.ditems).to({
            x: 297,
            y: 662
        }, 700, Phaser.Easing.Quadratic.Out, true);
        game.add.tween(this.ditems.scale).to({
            x: 0.5,
            y: 0.5
        }, 700, Phaser.Easing.Quadratic.Out, true);



    },
    openLink: function() {
        CreateLinksInGame("Baby-Taylor-Caring-Story-Photo", "game", "logo");
    },
    moreLink: function() {
        CreateLinksInGame("Baby-Taylor-Caring-Story-Photo", "game", "more");
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
            game.state.start('map_scene');

        });

    },
}

Main.cooking2_screen = function() {}

Main.cooking2_screen.prototype = {
    create: function() {
        this.levelGroup = game.add.group();
        this.bg = game.add.sprite(0, 0, 'c1_bg');
        this.levelGroup.add(this.bg);


        this.c1_chr1 = game.add.sprite(398.05, 496.55, 'c1_chr1');
        this.c1_chr1.anchor.setTo(0.5);

        this.c1_chr2 = game.add.sprite(175.1, 468.55, 'c1_chr2');
        this.c1_chr2.anchor.setTo(0.5);

        this.c1_table = game.add.sprite(273.55, 651.5, 'c1_table');
        this.c1_table.anchor.setTo(0.5);

        this.splate = game.add.sprite(184.3, 597.6, 'splate');
        this.splate.anchor.setTo(0.5);

        this.lemon_juice1 = game.add.sprite(628, 586, 'lemon_juice');
        this.lemon_juice1.anchor.setTo(0.5);

        this.wbowl1 = game.add.sprite(428, 586, 'wbowl1');
        this.wbowl1.anchor.setTo(0.5);

        this.w_cutpice1 = game.add.sprite(224, 600, 'w_cutpice');
        this.w_cutpice1.anchor.setTo(0.5);
        this.w_cutpice1.visible = false;
        // this.w_cutpice1.inputEnabled=true;
        // this.w_cutpice1.input.enableDrag();
        this.w_cutpice1.events.onInputDown.add(function() {
            //game.world.bringToTop(this.pcup);
            this.arrow2.visible = false;
            this.arrow3.visible = true;
        }, this);
        this.w_cutpice1.events.onInputUp.add(function() {
            this.w_cutpice1.inputEnabled = false;
            this.arrow3.visible = false;
            if ((game.input.activePointer.x > 348 && game.input.activePointer.x < 494 && game.input.activePointer.y > 500 && game.input.activePointer.y < 600)) {
                this.w_cutpice1.visible = false;
                this.wbowl1.loadTexture('wbowl2');
                game.time.events.add(200, function() {
                    game.add.tween(this.wbowl1).to({
                        x: 650
                    }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                        game.add.tween(this.lemon_juice1).to({
                            x: 428
                        }, 700, Phaser.Easing.Quadratic.Out, true);
                        game.add.tween(this.lemon_cut).to({
                            x: 233
                        }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                            this.knife0.inputEnabled = true;
                            this.arrow1.visible = true;
                        }, this);
                    }, this);
                }, this);


            } else {
                game.add.tween(this.w_cutpice1).to({
                    x: 224,
                    y: 600
                }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                    this.w_cutpice1.inputEnabled = true;
                    this.arrow2.visible = true;
                }, this);
            }
        }, this);

        this.watermellon_cut = game.add.sprite(270, 612, 'watermellon_cut');
        this.watermellon_cut.anchor.setTo(0.5);
        // this.watermellon_cut.frame=23;

        this.lemon_cut = game.add.sprite(-233, 598, 'lemon_cut');
        this.lemon_cut.anchor.setTo(0.5);
        // this.lemon_cut.frame=3;

        this.lempice = game.add.sprite(275, 581, 'lempice');
        this.lempice.anchor.setTo(0.5);
        this.lempice.visible = false;
        // this.lempice.inputEnabled=true;
        // this.lempice.input.enableDrag();
        this.lempice.events.onInputDown.add(function() {
            //game.world.bringToTop(this.pcup);
            this.lempice2.inputEnabled = false;
            this.arrow2.visible = false;
            this.arrow3.visible = true;
        }, this);
        this.lempice.events.onInputUp.add(function() {
            this.lempice.inputEnabled = false;
            this.arrow3.visible = false;
            if ((game.input.activePointer.x > 348 && game.input.activePointer.x < 494 && game.input.activePointer.y > 500 && game.input.activePointer.y < 600)) {
                this.lempice.visible = false;
                this.lemon_juice1.visible = true;
                this.lemon_juice1.animations.add('lemon_juice1');
                this.lemon_juice1.animations.play('lemon_juice1', 10, false).onComplete.add(function() {
                    game.add.tween(this.knife0).to({
                        x: -200
                    }, 700, Phaser.Easing.Quadratic.Out, true);
                    game.add.tween(this.splate).to({
                        x: -200
                    }, 700, Phaser.Easing.Quadratic.Out, true);
                    game.add.tween(this.lempice2).to({
                        x: -200
                    }, 700, Phaser.Easing.Quadratic.Out, true);
                    game.add.tween(this.lemon_juice1).to({
                        x: 650
                    }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                        game.add.tween(this.mixgp).to({
                            x: 0
                        }, 700, Phaser.Easing.Quadratic.Out, true);
                        game.add.tween(this.wbowl3).to({
                            x: 428
                        }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                            this.wbowl3.inputEnabled = true;
                            this.wbowl3.input.enableDrag();
                            this.arrow1.visible = true;
                            this.arrow1.x = 430;
                            this.arrow1.y = 486;
                        }, this);
                    }, this);
                }, this);


            } else {
                game.add.tween(this.lempice).to({
                    x: 275,
                    y: 581
                }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                    this.lempice.inputEnabled = true;
                    this.lempice2.inputEnabled = true;
                    this.arrow2.visible = true;
                }, this);
            }
        }, this);


        this.lempice2 = game.add.sprite(189, 579, 'lempice2');
        this.lempice2.anchor.setTo(0.5);
        this.lempice2.visible = false;
        // this.lempice2.inputEnabled=true;
        // this.lempice2.input.enableDrag();
        this.lempice2.events.onInputDown.add(function() {
            //game.world.bringToTop(this.pcup);
            this.lempice.inputEnabled = false;
            this.arrow2.visible = false;
            this.arrow3.visible = true;
        }, this);
        this.lempice2.events.onInputUp.add(function() {
            this.lempice2.inputEnabled = false;
            this.arrow3.visible = false;
            if ((game.input.activePointer.x > 348 && game.input.activePointer.x < 494 && game.input.activePointer.y > 500 && game.input.activePointer.y < 600)) {
                this.lempice2.visible = false;
                this.lemon_juice1.visible = true;
                this.lemon_juice1.animations.add('lemon_juice1');
                this.lemon_juice1.animations.play('lemon_juice1', 10, false).onComplete.add(function() {
                    game.add.tween(this.knife0).to({
                        x: -200
                    }, 700, Phaser.Easing.Quadratic.Out, true);
                    game.add.tween(this.splate).to({
                        x: -200
                    }, 700, Phaser.Easing.Quadratic.Out, true);
                    game.add.tween(this.lempice).to({
                        x: -200
                    }, 700, Phaser.Easing.Quadratic.Out, true);
                    game.add.tween(this.lemon_juice1).to({
                        x: 650
                    }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                        game.add.tween(this.mixgp).to({
                            x: 0
                        }, 700, Phaser.Easing.Quadratic.Out, true);
                        game.add.tween(this.wbowl3).to({
                            x: 428
                        }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                            this.wbowl3.inputEnabled = true;
                            this.wbowl3.input.enableDrag();
                            this.arrow1.visible = true;
                            this.arrow1.x = 430;
                            this.arrow1.y = 486;
                        }, this);
                    }, this);
                }, this);


            } else {
                game.add.tween(this.lempice2).to({
                    x: 189,
                    y: 579
                }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                    this.lempice2.inputEnabled = true;
                    this.lempice.inputEnabled = true;
                    this.arrow2.visible = true;
                }, this);
            }
        }, this);



        this.kcnt = 0;

        this.knife0 = game.add.sprite(261.2, 745.85, 'knife1');
        this.knife0.anchor.setTo(0.5);
        this.knife0.inputEnabled = true;
        this.knife0.input.useHandCursor = true;
        this.knife0.input.pixelPerfectClick = true;
        this.knife0.events.onInputDown.add(function() {
            this.knifedrag = true;
            this.knife0.visible = false;
            this.knife1.visible = true;
            this.knife1.angle = -7;
            this.arrow1.visible = false;
            this.arrow2.visible = true;

        }, this);
        this.knife0.events.onInputUp.add(function() {
            this.knifedrag = false;
            this.arrow2.visible = false;
            this.knife0.inputEnabled = false;
            if ((game.input.activePointer.x > 99 && game.input.activePointer.x < 338 && game.input.activePointer.y > 503 && game.input.activePointer.y < 663)) {
                this.kcnt++;
                this.knife1.visible = false;
                if (this.kcnt == 1) {
                    this.watermellon_cut.visible = true;
                    this.watermellon_cut.animations.add('watermellon_cut');
                    this.watermellon_cut.animations.play('watermellon_cut', 10, false).onComplete.add(function() {
                        this.knife0.visible = true;
                        this.watermellon_cut.visible = false;
                        this.w_cutpice1.visible = true;
                        this.w_cutpice1.inputEnabled = true;
                        this.w_cutpice1.input.enableDrag();
                        this.arrow2.visible = true;

                    }, this);
                }

                if (this.kcnt == 2) {
                    this.lemon_cut.visible = true;
                    this.lemon_cut.animations.add('lemon_cut');
                    this.lemon_cut.animations.play('lemon_cut', 10, false).onComplete.add(function() {
                        this.knife0.visible = true;
                        this.lemon_cut.visible = false;
                        this.lempice.visible = true;
                        this.lempice2.visible = true;
                        this.lempice2.inputEnabled = true;
                        this.lempice2.input.enableDrag();
                        this.lempice.inputEnabled = true;
                        this.lempice.input.enableDrag();
                        this.arrow2.visible = true;

                    }, this);
                }

            } else {
                this.knifedrag = false;
                this.arrow2.visible = false;
                game.add.tween(this.knife1).to({
                    x: 261.2,
                    y: 680
                }, 1000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                    this.arrow1.visible = true;
                    this.knife0.visible = true;
                    this.knife1.visible = false;
                    this.knife0.inputEnabled = true;
                }, this);
            }
        }, this);

        this.knife1 = game.add.sprite(265.95, 110, 'knife2');
        this.knife1.anchor.setTo(0.5);
        this.knife1.visible = false;

        this.jplate = game.add.sprite(684, 624, 'jplate');
        this.jplate.anchor.setTo(0.5);
        // this.jplate.inputEnabled=true;
        this.jplate.events.onInputDown.add(function() {
            this.jplate.inputEnabled = false;
            this.opice0.visible = false;
            this.arrow2.visible = false;

            if (this.pic_cnt <= 6) {
                if (this.pic_cnt <= 5) {
                    this.arrow1.visible = true;
                }
                this.pcir1.inputEnabled = true;
                this['opice' + this.pic_cnt].visible = true;
            }
            if (this.pic_cnt == 6) {
                this.pcir1.inputEnabled = false;
                game.add.tween(this.orbowl).to({
                    x: -100
                }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                    this.orbowl.loadTexture('apbowl');
                    this.opice0.loadTexture('apice');
                    game.add.tween(this.orbowl).to({
                        x: 90
                    }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                        this.pcir1.inputEnabled = true;
                        this.arrow1.visible = true;
                        this.arrow2.x = 357;
                        this.arrow2.y = 537;
                    }, this);
                }, this);
            }
            if (this.pic_cnt > 6 && this.pic_cnt <= 11) {
                if (this.pic_cnt <= 10) {
                    this.arrow1.visible = true;
                }
                this.pcir1.inputEnabled = true;

                this['apice' + (this.pic_cnt - 6)].visible = true;
            }
            if (this.pic_cnt == 11) {
                this.pcir1.inputEnabled = false;
                game.add.tween(this.orbowl).to({
                    x: -100
                }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                    this.orbowl.loadTexture('gpbowl');
                    this.opice0.loadTexture('gpice');
                    game.add.tween(this.orbowl).to({
                        x: 90
                    }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                        this.pcir1.inputEnabled = true;
                        this.arrow1.visible = true;

                    }, this);
                }, this);
            }
            if (this.pic_cnt > 11 && this.pic_cnt <= 18) {
                if (this.pic_cnt <= 17) {
                    this.arrow1.visible = true;
                }
                this.pcir1.inputEnabled = true;
                this['gpice' + (this.pic_cnt - 11)].visible = true;
            }
            if (this.pic_cnt == 18) {
                this.pcir1.inputEnabled = false;
                game.add.tween(this.orbowl).to({
                    x: -100
                }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                    this.orbowl.loadTexture('bnbowl');
                    this.opice0.loadTexture('bpice');
                    game.add.tween(this.orbowl).to({
                        x: 90
                    }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                        this.pcir1.inputEnabled = true;
                        this.arrow1.visible = true;
                        this.arrow2.x = 206;
                        this.arrow2.y = 542;
                    }, this);
                }, this);
            }
            if (this.pic_cnt > 18 && this.pic_cnt <= 23) {
                if (this.pic_cnt <= 22) {
                    this.arrow1.visible = true;
                }
                this.pcir1.inputEnabled = true;
                this['bpice' + (this.pic_cnt - 18)].visible = true;
            }

            if (this.pic_cnt == 23) {
                this.pcir1.inputEnabled = false;
                game.add.tween(this.orbowl).to({
                    x: -100
                }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {

                    game.add.tween(this.playbtn.scale).to({
                        x: 1,
                        y: 1
                    }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {

                    }, this);
                }, this);
            }

        }, this);


        var gpicex = [316, 338, 357, 374, 318, 338, 357];
        var gpicey = [576, 581, 586, 593, 593, 598, 600];

        for (i = 1; i <= 7; i++) {
            this['gpice' + i] = game.add.sprite(gpicex[i - 1], gpicey[i - 1], 'gpice');
            this['gpice' + i].anchor.setTo(0.5);
            this['gpice' + i].visible = false;

        }

        var bpicex = [233, 258, 287, 243, 270, 338, 357];
        var bpicey = [581, 583, 581, 600, 595, 598, 600];

        for (i = 1; i <= 5; i++) {
            this['bpice' + i] = game.add.sprite(bpicex[i - 1], bpicey[i - 1], 'bpice');
            this['bpice' + i].anchor.setTo(0.5);
            this['bpice' + i].visible = false;

        }



        this.orbowl = game.add.sprite(-90, 537, 'orbowl');
        this.orbowl.anchor.setTo(0.5);

        this.pic_cnt = 0;

        this.picedrag = false;

        this.pcir1 = game.add.graphics(25, 490);
        this.pcir1.beginFill(0x000000, 0);
        this.pcir1.drawRect(0, 0, 125, 60);
        // this.pcir1.inputEnabled=true;
        this.pcir1.events.onInputDown.add(function() {
            this.pic_cnt++;
            this.pcir1.inputEnabled = false;
            this.opice0.visible = true;
            this.arrow1.visible = false;
            this.arrow1.x = 85;
            this.arrow1.y = 447;
            this.arrow2.visible = true;

            this.picedrag = true;
            this.jplate.inputEnabled = true;
            if (this.pic_cnt == 1) {
                this.arrow2.x = 206;
                this.arrow2.y = 542;
            }


        }, this);




        //    this.dummydrag = true;

        // this.dummyobject= game.add.sprite(-100,0,'arrow');
        // this.dummyobject.anchor.setTo(0.5);





        this.glgp = game.add.group();

        this.wjuice_ani = game.add.sprite(360, 464, 'wjuice_ani');
        this.wjuice_ani.anchor.setTo(0.5);
        this.glgp.add(this.wjuice_ani);

        this.mjuice_drop = game.add.sprite(435, 333, 'mjuice_drop');
        this.mjuice_drop.anchor.setTo(0.5);
        this.mjuice_drop.visible = false;
        this.glgp.add(this.mjuice_drop);

        this.jglassf = game.add.sprite(360, 440, 'jglassf');
        this.jglassf.anchor.setTo(0.5);
        // this.jglassf.inputEnabled=true;
        this.jglassf.events.onInputDown.add(function() {
            this.jglassf.inputEnabled = false;
            this.arrow1.visible = false;
            game.add.tween(this.glgp).to({
                x: -80,
                y: 80
            }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                game.add.tween(this.orbowl).to({
                    x: 90
                }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                    this.pcir1.inputEnabled = true;
                    this.arrow1.visible = true;
                    this.arrow1.x = 85;
                    this.arrow1.y = 447;
                }, this);
            }, this);

        }, this);
        this.glgp.add(this.jglassf);

        this.glgp.x = 300;
        // this.glgp.x=-80;
        // this.glgp.y=80;

        var opicex = [209, 192, 187, 192, 204, 226, 710];
        var opicey = [593, 603, 622, 637, 649, 656, 440];

        for (i = 1; i <= 6; i++) {
            this['opice' + i] = game.add.sprite(opicex[i - 1], opicey[i - 1], 'opice');
            this['opice' + i].anchor.setTo(0.5);
            if (i == 3) {
                this['opice' + i].angle = -30;
            }
            if (i == 4) {
                this['opice' + i].angle = -50;
            }
            if (i == 5) {
                this['opice' + i].angle = -70;
            }
            if (i == 6) {
                this['opice' + i].angle = -90;
            }
            this['opice' + i].visible = false;

        }

        var apicex = [311, 331, 348, 365, 382, 226, 710];
        var apicey = [663, 654, 646, 636, 624, 656, 440];

        for (i = 1; i <= 5; i++) {
            this['apice' + i] = game.add.sprite(apicex[i - 1], apicey[i - 1], 'apice');
            this['apice' + i].anchor.setTo(0.5);
            this['apice' + i].visible = false;

        }

        this.opice0 = game.add.sprite(90, 537, 'opice');
        this.opice0.anchor.setTo(0.5);
        this.opice0.visible = false;





        this.mixgp = game.add.group();

        this.mix_down = game.add.sprite(172.8, 646.7, 'mix_down');
        this.mix_down.anchor.setTo(0.5);
        this.mixgp.add(this.mix_down);

        this.mbtn = game.add.sprite(171, 658.45, 'mbtn');
        this.mbtn.anchor.setTo(0.5);
        // this.mbtn.inputEnabled=true;
        this.mbtn.events.onInputDown.add(function() {
            this.arrow1.visible = false;
            this.mbtn.inputEnabled = false;
            game.add.tween(this.mbtn).to({
                angle: 90
            }, 700, Phaser.Easing.Quadratic.Out, true);
            this.mixi_ani.animations.add('mixi_ani', [32, 33, 34, 35, 36, 37, 38, 39]);
            this.mixi_ani.animations.play('mixi_ani', 10, false).onComplete.add(function() {
                game.add.tween(this.mbtn).to({
                    angle: 0
                }, 700, Phaser.Easing.Quadratic.Out, true);
                this.mcap1.inputEnabled = true;
                this.arrow1.visible = true;
                this.arrow1.x = 171;
                this.arrow1.y = 381;

            }, this);
        }, this);
        this.mixgp.add(this.mbtn);

        this.mfront2 = game.add.sprite(185.35, 525.15, 'mfront2');
        this.mfront2.anchor.setTo(0.5);
        this.mixgp.add(this.mfront2);

        this.mixi_ani = game.add.sprite(191, 525.15, 'mixi_ani');
        this.mixi_ani.anchor.setTo(0.5);
        // this.mixi_ani.frame=39;

        this.mixgp.add(this.mixi_ani);

        this.w_drop = game.add.sprite(216, 403, 'w_drop');
        this.w_drop.anchor.setTo(0.5);
        this.w_drop.visible = false;
        this.mixgp.add(this.w_drop);

        this.water_ani1 = game.add.sprite(275, 440, 'water_ani1');
        this.water_ani1.anchor.setTo(0.5);
        this.water_ani1.visible = false;
        this.mixgp.add(this.water_ani1);

        this.l_drop = game.add.sprite(221, 442, 'l_drop');
        this.l_drop.anchor.setTo(0.5);
        this.l_drop.visible = false;
        this.mixgp.add(this.l_drop);

        this.sugar_drop1 = game.add.sprite(260, 457, 'sugar_drop');
        this.sugar_drop1.anchor.setTo(0.5);
        this.sugar_drop1.visible = false;
        this.mixgp.add(this.sugar_drop1);

        this.ice_drop1 = game.add.sprite(260, 442, 'ice_drop');
        this.ice_drop1.anchor.setTo(0.5);
        this.ice_drop1.visible = false;
        this.mixgp.add(this.ice_drop1);

        this.mfront = game.add.sprite(185.35, 525.15, 'mfront');
        this.mfront.anchor.setTo(0.5);
        this.mixgp.add(this.mfront);

        this.wjuice_drop = game.add.sprite(185.35, 525.15, 'wjuice_drop');
        this.wjuice_drop.anchor.setTo(0.5);
        this.wjuice_drop.visible = false;
        //  this.wjuice_drop.inputEnabled=true;
        // this.wjuice_drop.input.enableDrag();
        this.wjuice_drop.events.onInputDown.add(function() {
            //game.world.bringToTop(this.pcup);
            this.arrow1.visible = false;
            this.arrow2.visible = true;
            this.arrow2.x = 360;
            this.arrow2.y = 313;
        }, this);
        this.wjuice_drop.events.onInputUp.add(function() {
            this.wjuice_drop.inputEnabled = false;
            this.arrow2.visible = false;
            if ((game.input.activePointer.x > 287 && game.input.activePointer.x < 448 && game.input.activePointer.y > 225 && game.input.activePointer.y < 376)) {
                this.wjuice_drop.visible = false;
                this.mjuice_drop.visible = true;
                this.mjuice_drop.animations.add('mjuice_drop');
                this.mjuice_drop.animations.play('mjuice_drop', 10, false)
                game.time.events.add(200, function() {
                    this.wjuice_ani.animations.add('wjuice_ani');
                    this.wjuice_ani.animations.play('wjuice_ani', 10, false).onComplete.add(function() {
                        game.add.tween(this.mjuice_drop).to({
                            alpha: 0
                        }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                            game.add.tween(this.mixgp).to({
                                x: -300
                            }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                                game.add.tween(this.jplate).to({
                                    x: 284
                                }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                                    this.jglassf.inputEnabled = true;
                                    this.arrow1.visible = true;
                                    this.arrow1.x = 360;
                                    this.arrow1.y = 313;
                                }, this);
                            }, this);
                        }, this);
                    }, this);
                }, this);

            } else {
                game.add.tween(this.wjuice_drop).to({
                    x: 185.35,
                    y: 525.15
                }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                    this.wjuice_drop.inputEnabled = true;
                    this.arrow1.visible = true;
                }, this);
            }
        }, this);
        this.mixgp.add(this.wjuice_drop);

        this.mcap1 = game.add.sprite(175, 459, 'mcap');
        this.mcap1.anchor.setTo(0.5);
        this.mcap1.visible = false;
        // this.mcap1.inputEnabled=true;
        this.mcap1.events.onInputDown.add(function() {
            this.arrow1.visible = false;
            this.mcap1.inputEnabled = false;
            this.wjuice_drop.visible = true;
            this.mfront2.visible = false;
            this.mfront.visible = false;
            this.mixi_ani.visible = false;
            game.add.tween(this.mcap1).to({
                y: 380,
                alpha: 0
            }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                game.add.tween(this.glgp).to({
                    x: 0
                }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                    this.wjuice_drop.inputEnabled = true;
                    this.wjuice_drop.input.enableDrag();
                    this.arrow1.visible = true;
                }, this);
            }, this);

        }, this);
        this.mixgp.add(this.mcap1);

        this.mixgp.x = -300;

        this.wbowl3 = game.add.sprite(628, 586, 'wbowl2');
        this.wbowl3.anchor.setTo(0.5);
        // this.wbowl3.inputEnabled=true;
        // this.wbowl3.input.enableDrag();
        this.wbowl3.events.onInputDown.add(function() {
            //game.world.bringToTop(this.pcup);
            this.arrow1.visible = false;
            this.arrow1.x = 430;
            this.arrow1.y = 486;
            this.arrow2.visible = true;
            this.arrow2.x = 175;
            this.arrow2.y = 384;
        }, this);
        this.wbowl3.events.onInputUp.add(function() {
            this.wbowl3.inputEnabled = false;
            this.arrow2.visible = false;
            if ((game.input.activePointer.x > 94 && game.input.activePointer.x < 262 && game.input.activePointer.y > 372 && game.input.activePointer.y < 510)) {
                this.wbowl3.visible = false;
                this.w_drop.visible = true;
                this.w_drop.animations.add('w_drop');
                this.w_drop.animations.play('w_drop', 10, false)
                this.mixi_ani.visible = true;
                game.time.events.add(200, function() {
                    this.mixi_ani.animations.add('mixi_ani', [1, 2, 3, 4]);
                    this.mixi_ani.animations.play('mixi_ani', 10, false).onComplete.add(function() {
                        game.add.tween(this.w_drop).to({
                            alpha: 0
                        }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                            game.add.tween(this.wjug1).to({
                                x: 428
                            }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                                this.wjug1.inputEnabled = true;
                                this.wjug1.input.enableDrag();
                                this.arrow1.visible = true;
                                this.arrow1.x = 410;
                                this.arrow1.y = 456;
                            }, this);
                        }, this);
                    }, this);
                }, this);

            } else {
                game.add.tween(this.wbowl3).to({
                    x: 428,
                    y: 586
                }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                    this.wbowl3.inputEnabled = true;
                    this.arrow1.visible = true;
                }, this);
            }
        }, this);

        this.wjug1 = game.add.sprite(628, 586, 'wjug');
        this.wjug1.anchor.setTo(0.5);
        // this.wjug1.inputEnabled=true;
        // this.wjug1.input.enableDrag();
        this.wjug1.events.onInputDown.add(function() {
            //game.world.bringToTop(this.pcup);
            this.arrow1.visible = false;
            this.arrow1.x = 410;
            this.arrow1.y = 456;
            this.arrow2.visible = true;
            this.arrow2.x = 175;
            this.arrow2.y = 384;
        }, this);
        this.wjug1.events.onInputUp.add(function() {
            this.wjug1.inputEnabled = false;
            this.arrow2.visible = false;
            if ((game.input.activePointer.x > 94 && game.input.activePointer.x < 262 && game.input.activePointer.y > 372 && game.input.activePointer.y < 510)) {
                this.wjug1.visible = false;
                this.water_ani1.visible = true;
                this.water_ani1.animations.add('water_ani1');
                this.water_ani1.animations.play('water_ani1', 15, false)
                this.mixi_ani.visible = true;
                game.time.events.add(200, function() {
                    this.mixi_ani.animations.add('mixi_ani', [5, 6, 7, 8, 9, 10, 11]);
                    this.mixi_ani.animations.play('mixi_ani', 7, false).onComplete.add(function() {
                        game.add.tween(this.water_ani1).to({
                            alpha: 0
                        }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                            game.add.tween(this.lbottle1).to({
                                x: 428
                            }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                                this.lbottle1.inputEnabled = true;
                                this.lbottle1.input.enableDrag();
                                this.arrow1.visible = true;
                                this.arrow1.x = 430;
                                this.arrow1.y = 456;
                            }, this);
                        }, this);
                    }, this);
                }, this);

            } else {
                game.add.tween(this.wjug1).to({
                    x: 428,
                    y: 586
                }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                    this.wjug1.inputEnabled = true;
                    this.arrow1.visible = true;
                }, this);
            }
        }, this);

        this.lbottle1 = game.add.sprite(628, 586, 'lbottle');
        this.lbottle1.anchor.setTo(0.5);
        // this.lbottle1.inputEnabled=true;
        // this.lbottle1.input.enableDrag();
        this.lbottle1.events.onInputDown.add(function() {
            //game.world.bringToTop(this.pcup);
            this.arrow1.visible = false;
            this.arrow1.x = 430;
            this.arrow1.y = 456;
            this.arrow2.visible = true;
            this.arrow2.x = 175;
            this.arrow2.y = 384;
        }, this);
        this.lbottle1.events.onInputUp.add(function() {
            this.lbottle1.inputEnabled = false;
            this.arrow2.visible = false;
            if ((game.input.activePointer.x > 94 && game.input.activePointer.x < 262 && game.input.activePointer.y > 372 && game.input.activePointer.y < 510)) {
                this.lbottle1.visible = false;
                this.l_drop.visible = true;
                this.l_drop.animations.add('l_drop');
                this.l_drop.animations.play('l_drop', 15, false)
                this.mixi_ani.visible = true;
                game.time.events.add(200, function() {
                    this.mixi_ani.animations.add('mixi_ani', [12, 13, 14, 15, 16, 17]);
                    this.mixi_ani.animations.play('mixi_ani', 7, false).onComplete.add(function() {
                        game.add.tween(this.l_drop).to({
                            alpha: 0
                        }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                            game.add.tween(this.sugar_cut1).to({
                                x: 404
                            }, 700, Phaser.Easing.Quadratic.Out, true)
                            game.add.tween(this.scissor1).to({
                                x: 362
                            }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                                this.scissor1.inputEnabled = true;
                                this.scissor1.input.enableDrag();
                                this.arrow1.visible = true;
                                this.arrow1.x = 355;
                                this.arrow1.y = 641;
                            }, this);
                        }, this);
                    }, this);
                }, this);

            } else {
                game.add.tween(this.lbottle1).to({
                    x: 428,
                    y: 586
                }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                    this.lbottle1.inputEnabled = true;
                    this.arrow1.visible = true;
                }, this);
            }
        }, this);

        this.sugar_cut1 = game.add.sprite(604, 486, 'sugar_cut');
        this.sugar_cut1.anchor.setTo(0.5);

        this.scissor1 = game.add.sprite(662, 697, 'item2');
        this.scissor1.anchor.setTo(0.5);
        this.scissor1.angle = 30;
        // this.scissor1.inputEnabled=true;
        // this.scissor1.input.enableDrag();
        this.scissor1.events.onInputDown.add(function() {
            //game.world.bringToTop(this.pcup);
            this.arrow1.visible = false;
            this.arrow1.x = 355;
            this.arrow1.y = 641;
            this.arrow2.visible = true;
            this.arrow2.x = 435;
            this.arrow2.y = 401;
        }, this);
        this.scissor1.events.onInputUp.add(function() {
            this.scissor1.inputEnabled = false;
            this.arrow2.visible = false;
            if ((game.input.activePointer.x > 355 && game.input.activePointer.x < 469 && game.input.activePointer.y > 404 && game.input.activePointer.y < 549)) {
                this.scissor1.visible = false;

                this.sugar_cut1.visible = true;

                this.sugar_cut1.animations.add('sugar_cut1');
                this.sugar_cut1.animations.play('sugar_cut1', 10, false).onComplete.add(function() {
                    // game.add.tween(this.l_drop).to({alpha:0},700,Phaser.Easing.Quadratic.Out,true).onComplete.add(function(){
                    this.sugar_cut1.visible = false;
                    this.sugar_pack1.visible = true;
                    this.sugar_pack1.inputEnabled = true;
                    this.sugar_pack1.input.enableDrag();
                    this.arrow1.visible = true;
                    this.arrow1.x = 435;
                    this.arrow1.y = 401;

                    // },this);         	
                }, this);


            } else {
                game.add.tween(this.scissor1).to({
                    x: 362,
                    y: 697
                }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                    this.scissor1.inputEnabled = true;
                    this.arrow1.visible = true;
                }, this);
            }
        }, this);

        this.sugar_pack1 = game.add.sprite(444.7, 537.5, 'sugar_pack');
        this.sugar_pack1.anchor.setTo(0.5);
        this.sugar_pack1.visible = false;
        // this.sugar_pack1.inputEnabled=true;
        // this.sugar_pack1.input.enableDrag();
        this.sugar_pack1.events.onInputDown.add(function() {
            //game.world.bringToTop(this.pcup);
            this.arrow1.visible = false;
            this.arrow1.x = 435;
            this.arrow1.y = 401;
            this.arrow2.visible = true;
            this.arrow2.x = 175;
            this.arrow2.y = 384;
        }, this);
        this.sugar_pack1.events.onInputUp.add(function() {
            this.sugar_pack1.inputEnabled = false;
            this.arrow2.visible = false;
            if ((game.input.activePointer.x > 94 && game.input.activePointer.x < 262 && game.input.activePointer.y > 372 && game.input.activePointer.y < 510)) {
                this.sugar_pack1.visible = false;
                this.sugar_drop1.visible = true;
                this.mixi_ani.animations.add('mixi_ani', [18, 19, 20]);
                this.mixi_ani.animations.play('mixi_ani', 7, false)
                this.sugar_drop1.animations.add('sugar_drop');
                this.sugar_drop1.animations.play('sugar_drop', 10, false).onComplete.add(function() {
                    game.add.tween(this.sugar_drop1).to({
                        alpha: 0
                    }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                        game.add.tween(this.iglass1).to({
                            x: 428
                        }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                            this.iglass1.inputEnabled = true;
                            this.iglass1.input.enableDrag();
                            this.arrow1.visible = true;
                            this.arrow1.x = 430;
                            this.arrow1.y = 456;
                        }, this);
                    }, this);
                }, this);


            } else {
                game.add.tween(this.sugar_pack1).to({
                    x: 444.7,
                    y: 537
                }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                    this.sugar_pack1.inputEnabled = true;
                    this.arrow1.visible = true;
                }, this);
            }
        }, this);


        this.iglass1 = game.add.sprite(628, 586, 'iglass');
        this.iglass1.anchor.setTo(0.5);
        // this.iglass1.inputEnabled=true;
        // this.iglass1.input.enableDrag();
        this.iglass1.events.onInputDown.add(function() {
            //game.world.bringToTop(this.pcup);
            this.arrow1.visible = false;
            this.arrow1.x = 430;
            this.arrow1.y = 456;
            this.arrow2.visible = true;
            this.arrow2.x = 175;
            this.arrow2.y = 384;
        }, this);
        this.iglass1.events.onInputUp.add(function() {
            this.iglass1.inputEnabled = false;
            this.arrow2.visible = false;
            if ((game.input.activePointer.x > 94 && game.input.activePointer.x < 262 && game.input.activePointer.y > 372 && game.input.activePointer.y < 510)) {
                this.iglass1.visible = false;
                this.ice_drop1.visible = true;
                this.ice_drop1.animations.add('ice_drop');
                this.ice_drop1.animations.play('ice_drop', 10, false)
                game.time.events.add(100, function() {
                    this.mixi_ani.visible = true;
                    this.mixi_ani.animations.add('mixi_ani', [21, 22, 23, 24, 25]);
                    this.mixi_ani.animations.play('mixi_ani', 7, false).onComplete.add(function() {
                        game.add.tween(this.ice_drop1).to({
                            alpha: 0
                        }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                            game.add.tween(this.mcap2).to({
                                x: 428
                            }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                                this.mcap2.inputEnabled = true;
                                this.mcap2.input.enableDrag();
                                this.arrow1.visible = true;
                                this.arrow1.x = 430;
                                this.arrow1.y = 486;
                            }, this);
                        }, this);
                    }, this);
                }, this);

            } else {
                game.add.tween(this.iglass1).to({
                    x: 428,
                    y: 586
                }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                    this.iglass1.inputEnabled = true;
                    this.arrow1.visible = true;
                }, this);
            }
        }, this);

        this.mcap2 = game.add.sprite(628, 586, 'mcap');
        this.mcap2.anchor.setTo(0.5);
        // this.mcap2.inputEnabled=true;
        // this.mcap2.input.enableDrag();
        this.mcap2.events.onInputDown.add(function() {
            //game.world.bringToTop(this.pcup);
            this.arrow1.visible = false;
            this.arrow1.x = 430;
            this.arrow1.y = 486;
            this.arrow2.visible = true;
            this.arrow2.x = 175;
            this.arrow2.y = 384;
        }, this);
        this.mcap2.events.onInputUp.add(function() {
            this.mcap2.inputEnabled = false;
            this.arrow2.visible = false;
            if ((game.input.activePointer.x > 94 && game.input.activePointer.x < 262 && game.input.activePointer.y > 372 && game.input.activePointer.y < 510)) {
                this.mcap2.visible = false;
                this.mcap1.visible = true;
                this.mbtn.inputEnabled = true;
                this.arrow1.visible = true;
                this.arrow1.x = 172;
                this.arrow1.y = 605;


            } else {
                game.add.tween(this.mcap2).to({
                    x: 428,
                    y: 586
                }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                    this.mcap2.inputEnabled = true;
                    this.arrow1.visible = true;
                }, this);
            }
        }, this);



        //   this.dummydrag = true;

        // this.dummyobject= game.add.sprite(-100,0,'jplate');
        // this.dummyobject.anchor.setTo(0.5);
        // this.dummyobject.animations.add('w_drop');
        // this.dummyobject.animations.play('w_drop',10,true);
        // this.dummyobject.scale.setTo(0.8);

        var arro2x = [258, 221, 430, 705, 113, 410, 710];
        var arro2y = [675, 486, 471, 420, 402, 130, 440];

        for (i = 1; i <= 3; i++) {
            this['arrow' + i] = game.add.sprite(arro2x[i - 1], arro2y[i - 1], 'arrow');
            this['arrow' + i].anchor.setTo(0.5);
            this['arrow' + i].animations.add('arrow');
            this['arrow' + i].animations.play('arrow', 12, true);
            this['arrow' + i].visible = false;
            if (i == 1) {
                this['arrow' + i].visible = true;
            }

        }

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





        this.morebtn = game.add.sprite(75.55, 762, 'morebtn');
        this.morebtn.anchor.setTo(0.5);
        // this.morebtn.scale.setTo(0);
        this.morebtn.inputEnabled = true;
        this.morebtn.input.useHandCursor = true;
        //this.morebtn.events.onInputUp.add(this.moreLink, this);
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

            }, this);
        }





        this.logoVar = game.add.sprite(5, 5, 'logo');
        this.logoVar.scale.setTo(0.8);
        this.logoVar.inputEnabled = true
        this.logoVar.input.useHandCursor = true;
        //this.logoVar.events.onInputUp.add(this.openLink, this);

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

        if (this.knifedrag) {
            this.knife1.x = game.input.activePointer.x + 8;
            this.knife1.y = game.input.activePointer.y - 30;
        }
        if (this.picedrag) {
            this.opice0.x = game.input.activePointer.x;
            this.opice0.y = game.input.activePointer.y;
        }


    },
    openLink: function() {
        CreateLinksInGame("Baby-Taylor-Caring-Story-Photo", "game", "logo");
    },
    moreLink: function() {
        CreateLinksInGame("Baby-Taylor-Caring-Story-Photo", "game", "more");
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

            game.state.start('knok_scene');



        });

    },
}

Main.cooking1 = function() {}

Main.cooking1.prototype = {
    create: function() {
        this.levelGroup = game.add.group();
        this.c1_bg = game.add.sprite(0, 0, 'c1_bg');
        this.levelGroup = game.add.group();

        this.c1_chr1 = game.add.sprite(343.2, 504.35, 'c1_chr1');
        this.c1_chr1.anchor.setTo(0.5);

        this.c1_chr2 = game.add.sprite(166.9, 477.7, 'c1_chr2');
        this.c1_chr2.anchor.setTo(0.5);

        this.c1_table = game.add.sprite(273.55, 651.5, 'c1_table');
        this.c1_table.anchor.setTo(0.5);

        /*------------------stp1_start---------------------*/
        this.stp1_grp = game.add.group();


        this.stp_1_boul1 = game.add.sprite(135.05, 520, 'stp_1_boul1');
        this.stp_1_boul1.anchor.setTo(0.5);
        this.stp1_grp.add(this.stp_1_boul1);

        this.stp_1_1 = game.add.sprite(372.7, 506.35, 'stp_1_1');
        this.stp_1_1.anchor.setTo(0.5);

        this.stp_1_1.events.onInputDown.add(function() {
            this.arrow1.visible = false;
            this.arrow2.visible = true;
        }, this);
        this.stp_1_1.events.onInputUp.add(function() {
            if ((game.input.activePointer.x > 0 && game.input.activePointer.x < 250 && game.input.activePointer.y > 250 && game.input.activePointer.y < 600)) {
                this.arrow2.visible = false;
                this.stp_1_1.visible = false;

                this.stp_1_ani.visible = true;
                this.stp_1_ani.animations.add('stp_1_ani');
                this.stp_1_ani.animations.play('stp_1_ani', 10, false);

                game.time.events.add(600, function() {
                    this.stp_1_boul1.animations.add('stp_1_boul1', [6, 7, 8, 9, 10]);
                    this.stp_1_boul1.animations.play('stp_1_boul1', 10, false).onComplete.add(function() {

                        game.add.tween(this.stp_1_ani).to({
                            x: 1000
                        }, 1000, Phaser.Easing.Quadratic.Out, true, 1000);
                        this.stp_3_8.visible = true;
                        this.stp_1_boul1.visible = false;

                        game.add.tween(this.stp_1_3).to({
                            x: 1000
                        }, 1000, Phaser.Easing.Quadratic.Out, true, 1000).onComplete.add(function() {
                            game.add.tween(this.stp_3_1).to({
                                x: 300
                            }, 1000, Phaser.Easing.Quadratic.Out, true, 500);
                            game.add.tween(this.stp_3_2).to({
                                x: 390
                            }, 1000, Phaser.Easing.Quadratic.Out, true, 500).onComplete.add(function() {


                                this.arrow1.visible = true;
                                this.arrow1.x = 295;
                                this.arrow1.y = 595;

                            }, this);
                        }, this);


                    }, this);
                }, this);


            } else {

                game.add.tween(this.stp_1_1).to({
                    x: 372.7,
                    y: 506.35
                }, 1000, Phaser.Easing.Quadratic.Out, true);

            }

        }, this);
        this.stp1_grp.add(this.stp_1_1);

        this.stp_1_3 = game.add.sprite(377.4, 610.35, 'stp_1_3');
        this.stp_1_3.anchor.setTo(0.5);
        this.stp1_grp.add(this.stp_1_3);
        this.stp1_drg1 = false;
        this.stp1_drg2 = false;

        this.stp_1_4 = game.add.sprite(377.4, 610.35, 'stp_1_40001');
        this.stp_1_4.anchor.setTo(0.5);

        this.stp_1_4.events.onInputDown.add(function() {

            this.stp1_drg2 = true;
            this.stp1_drg1 = false;
            this.stp_1_2.visible = false;
            this.stp_1_4.visible = true;
            this.stp_1_4.visible = false;
            this.arrow1.visible = false;
            this.arrow2.visible = true;
            this.stp_1_4.inputEnabled = false;

        }, this);
        this.stp1_grp.add(this.stp_1_4);

        this.stp_1_2 = game.add.sprite(369.55, 704.1, 'stp_1_2');
        this.stp_1_2.anchor.setTo(0.5);
        this.stp_1_2.scale.setTo(0.85);
        this.stp_1_2.inputEnabled = true;
        this.stp_1_2.input.useHandCursor = true;
        this.stp_1_2.events.onInputDown.add(function() {
            this.stp1_drg1 = true;
            this.arrow1.x = 370;
            this.arrow1.y = 550;
            this.stp_1_2.inputEnabled = false;

            this.stp_1_4.inputEnabled = true;
            this.stp_1_4.input.useHandCursor = true;

        }, this);
        this.stp1_grp.add(this.stp_1_2);

        this.stp_1_4_d = game.add.sprite(369.55, 704.1, 'stp_1_4');
        this.stp_1_4_d.anchor.setTo(0.5);
        this.stp_1_4_d.scale.setTo(0.85);
        this.stp_1_4_d.visible = false;
        this.stp1_grp.add(this.stp_1_4_d);


        this.stp_1_ani = game.add.sprite(255.05, 440, 'stp_1_ani');
        this.stp_1_ani.anchor.setTo(0.5);
        this.stp_1_ani.visible = false;
        this.stp1_grp.add(this.stp_1_ani);

        this.rect1 = game.add.graphics(35, 420);
        this.rect1.anchor.setTo(0.5);
        this.rect1.beginFill(0xFFFFFF, 0);
        this.rect1.drawRect(0, 0, 170, 150);
        this.rect1.inputEnabled = true;
        this.rect1.input.useHandCursor = true;
        this.rect1.events.onInputDown.add(function() {
            this.stp1_drg2 = false;
            this.arrow2.visible = false;
            console.log('bfhjui');
            this.stp_1_4_d.visible = false;
            this.stp_1_boul1.visible = true;
            this.rect1.inputEnabled = false;

            this.stp_1_boul1.animations.add('stp_1_boul1', [0, 1, 2, 3, 4, 5]);
            this.stp_1_boul1.animations.play('stp_1_boul1', 10, false).onComplete.add(function() {


                this.arrow1.visible = true;
                this.arrow1.x = 370;
                this.arrow1.y = 450;

                this.stp_1_1.inputEnabled = true;
                this.stp_1_1.input.useHandCursor = true;
                this.stp_1_1.input.enableDrag();
            }, this);

        }, this);


        // this.stp_1_ani.animations.add('stp_1_ani');
        // this.stp_1_ani.animations.play('stp_1_ani',10,false);

        /*------------------stp1_end---------------------*/

        /*------------------stp2_start---------------------*/

        this.stp_3_8 = game.add.sprite(129, 573, 'stp_3_8');
        this.stp_3_8.anchor.setTo(0.5);
        this.stp_3_8.visible = false;

        this.stp_3_2 = game.add.sprite(390, 510, 'stp_3_2');
        this.stp_3_2.anchor.setTo(0.5);

        this.stp_3_1 = game.add.sprite(300, 630, 'stp_3_1');
        this.stp_3_1.anchor.setTo(0.5);
        this.stp_3_1.inputEnabled = true;
        this.stp_3_1.input.useHandCursor = true;
        this.stp_3_1.input.enableDrag();
        this.stp_3_1.events.onInputDown.add(function() {

            this.arrow1.visible = false;
            this.arrow2.visible = true;
            this.arrow2.x = 430;
            this.arrow2.y = 440;

        }, this);
        this.stp_3_1.events.onInputUp.add(function() {
            if ((game.input.activePointer.x > 270 && game.input.activePointer.x < 504 && game.input.activePointer.y > 400 && game.input.activePointer.y < 650)) {
                this.arrow2.visible = false;
                this.stp_3_1.visible = false;

                this.stp_3_2.animations.add('stp_3_2');
                this.stp_3_2.animations.play('stp_3_2', 10, false).onComplete.add(function() {
                    this.stp_3_2.visible = false;
                    this.stp_3_3.visible = true;

                    this.arrow2.visible = true;
                    this.arrow2.x = 430;
                    this.arrow2.y = 440;


                }, this);
            } else {

                game.add.tween(this.stp_3_1).to({
                    x: 300,
                    y: 630
                }, 1000, Phaser.Easing.Quadratic.Out, true);

            }

        }, this);


        this.stp_3_3 = game.add.sprite(433, 565, 'stp_3_3');
        this.stp_3_3.anchor.setTo(0.5);
        this.stp_3_3.inputEnabled = true;
        this.stp_3_3.input.useHandCursor = true;
        this.stp_3_3.input.enableDrag();
        this.stp_3_3.events.onInputDown.add(function() {

            this.arrow1.visible = false;
            this.arrow2.visible = true;
            this.arrow2.x = 125;
            this.arrow2.y = 490;

        }, this);
        this.stp_3_3.events.onInputUp.add(function() {
            if ((game.input.activePointer.x > 0 && game.input.activePointer.x < 250 && game.input.activePointer.y > 450 && game.input.activePointer.y < 570)) {
                this.arrow2.visible = false;
                this.stp_3_3.visible = false;
                this.stp_3_4.visible = true;

                // game.time.events.add(1000,function(){

                this.stp_3_8.animations.add('stp_3_8', [0, 1, 2, 3, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23]);
                this.stp_3_8.animations.play('stp_3_8', 10, false);

                // },this)

                this.stp_3_4.animations.add('stp_3_4');
                this.stp_3_4.animations.play('stp_3_4', 10, false).onComplete.add(function() {

                    game.add.tween(this.stp_3_4).to({
                        x: 1000
                    }, 1000, Phaser.Easing.Quadratic.Out, true, 1500).onComplete.add(function() {


                        game.add.tween(this.stp_3_11).to({
                            x: 300
                        }, 1000, Phaser.Easing.Quadratic.Out, true, 500);
                        game.add.tween(this.stp_3_5).to({
                            x: 390
                        }, 1000, Phaser.Easing.Quadratic.Out, true, 500).onComplete.add(function() {


                            this.arrow1.visible = true;
                            this.arrow1.x = 295;
                            this.arrow1.y = 595;

                        }, this);

                    }, this);
                }, this);
            } else {

                game.add.tween(this.stp_3_3).to({
                    x: 433,
                    y: 565
                }, 1000, Phaser.Easing.Quadratic.Out, true);

            }

        }, this);
        this.stp_3_3.visible = false;

        this.stp_3_4 = game.add.sprite(280, 480, 'stp_3_4');
        this.stp_3_4.anchor.setTo(0.5);
        this.stp_3_4.visible = false;


        this.stp_3_5 = game.add.sprite(1390, 510, 'stp_3_5');
        this.stp_3_5.anchor.setTo(0.5);


        this.stp_3_11 = game.add.sprite(1300, 630, 'stp_3_1');
        this.stp_3_11.anchor.setTo(0.5);
        this.stp_3_11.inputEnabled = true;
        this.stp_3_11.input.useHandCursor = true;
        this.stp_3_11.input.enableDrag();
        this.stp_3_11.events.onInputDown.add(function() {

            this.arrow1.visible = false;
            this.arrow2.visible = true;
            this.arrow2.x = 430;
            this.arrow2.y = 440;

        }, this);
        this.stp_3_11.events.onInputUp.add(function() {
            if ((game.input.activePointer.x > 270 && game.input.activePointer.x < 504 && game.input.activePointer.y > 400 && game.input.activePointer.y < 650)) {
                this.arrow2.visible = false;
                this.stp_3_11.visible = false;

                this.stp_3_5.animations.add('stp_3_5');
                this.stp_3_5.animations.play('stp_3_5', 10, false).onComplete.add(function() {
                    this.stp_3_5.visible = false;
                    this.stp_3_6.visible = true;

                    this.arrow2.visible = true;
                    this.arrow2.x = 430;
                    this.arrow2.y = 440;

                    this.stp_3_6.inputEnabled = true;
                    this.stp_3_6.input.useHandCursor = true;
                    this.stp_3_6.input.enableDrag();
                }, this);
            } else {

                game.add.tween(this.stp_3_11).to({
                    x: 300,
                    y: 630
                }, 1000, Phaser.Easing.Quadratic.Out, true);

            }

        }, this);


        this.stp_3_6 = game.add.sprite(426, 544.5, 'stp_3_6');
        this.stp_3_6.anchor.setTo(0.5);
        this.stp_3_6.visible = false;

        this.stp_3_6.events.onInputDown.add(function() {

            this.arrow1.visible = false;
            this.arrow2.visible = true;
            this.arrow2.x = 125;
            this.arrow2.y = 490;

        }, this);
        this.stp_3_6.events.onInputUp.add(function() {
            if ((game.input.activePointer.x > 0 && game.input.activePointer.x < 250 && game.input.activePointer.y > 450 && game.input.activePointer.y < 570)) {
                this.arrow2.visible = false;
                this.stp_3_6.visible = false;
                this.stp_3_7.visible = true;

                game.time.events.add(100, function() {

                    this.stp_3_8.animations.add('stp_3_8', [24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39]);
                    this.stp_3_8.animations.play('stp_3_8', 10, false);

                }, this)

                this.stp_3_7.animations.add('stp_3_7');
                this.stp_3_7.animations.play('stp_3_7', 10, false).onComplete.add(function() {

                    game.add.tween(this.stp_3_7).to({
                        x: 1000
                    }, 1000, Phaser.Easing.Quadratic.Out, true, 1500).onComplete.add(function() {
                        game.add.tween(this.stp_2_1).to({
                            x: 400
                        }, 1000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {

                            this.arrow1.visible = true;
                            this.arrow1.x = 398;
                            this.arrow1.y = 470;

                            this.stp_2_1.inputEnabled = true;
                            this.stp_2_1.input.useHandCursor = true;
                            // this.stp_2_1.visible = false; 
                            this.stp_2_1.input.enableDrag();
                        }, this);
                    }, this);
                }, this);
            } else {

                game.add.tween(this.stp_3_6).to({
                    x: 433,
                    y: 565
                }, 1000, Phaser.Easing.Quadratic.Out, true);

            }

        }, this);

        this.stp_3_7 = game.add.sprite(280, 480, 'stp_3_7');
        this.stp_3_7.anchor.setTo(0.5);
        this.stp_3_7.visible = false;


        this.stp_2_1 = game.add.sprite(1400, 544.5, 'stp_2_1');
        this.stp_2_1.anchor.setTo(0.5);

        this.stp_2_1.events.onInputDown.add(function() {

            this.arrow1.visible = false;
            this.arrow2.visible = true;
            this.arrow2.x = 125;
            this.arrow2.y = 490;

        }, this);
        this.stp_2_1.events.onInputUp.add(function() {
            if ((game.input.activePointer.x > 0 && game.input.activePointer.x < 250 && game.input.activePointer.y > 450 && game.input.activePointer.y < 570)) {
                this.arrow2.visible = false;
                this.stp_2_1.visible = false;
                this.stp_2_1ani.visible = true;


                this.stp_2_1ani.animations.add('stp_2_1ani');
                this.stp_2_1ani.animations.play('stp_2_1ani', 10, false).onComplete.add(function() {

                    game.add.tween(this.stp_2_1ani).to({
                        x: 1000
                    }, 1000, Phaser.Easing.Quadratic.Out, true, 1500).onComplete.add(function() {
                        game.add.tween(this.stp_2_2).to({
                            x: 400
                        }, 1000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {


                            this.arrow1.visible = true;
                            this.arrow1.x = 398;
                            this.arrow1.y = 470;
                            this.stp_2_2.inputEnabled = true;
                            this.stp_2_2.input.useHandCursor = true;
                            // this.stp_2_2.visible = false; 
                            this.stp_2_2.input.enableDrag();
                        }, this);
                    }, this);
                }, this);
            } else {

                game.add.tween(this.stp_2_1).to({
                    x: 433,
                    y: 565
                }, 1000, Phaser.Easing.Quadratic.Out, true);

            }

        }, this);


        this.stp_2_2 = game.add.sprite(1400, 544.5, 'stp_2_2');
        this.stp_2_2.anchor.setTo(0.5);

        this.stp_2_2.events.onInputDown.add(function() {

            this.arrow1.visible = false;
            this.arrow2.visible = true;
            this.arrow2.x = 125;
            this.arrow2.y = 490;

        }, this);
        this.stp_2_2.events.onInputUp.add(function() {
            if ((game.input.activePointer.x > 0 && game.input.activePointer.x < 250 && game.input.activePointer.y > 450 && game.input.activePointer.y < 570)) {
                this.arrow2.visible = false;
                this.stp_2_2.visible = false;
                this.stp_2_2ani.visible = true;


                this.stp_2_2ani.animations.add('stp_2_2ani');
                this.stp_2_2ani.animations.play('stp_2_2ani', 10, false).onComplete.add(function() {

                    game.add.tween(this.stp_2_2ani).to({
                        x: 1000
                    }, 1000, Phaser.Easing.Quadratic.Out, true, 1500).onComplete.add(function() {
                        game.add.tween(this.stp_2_2).to({
                            x: 400
                        }, 1000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                            game.add.tween(this.stp_4_3).to({
                                x: 400
                            }, 1000, Phaser.Easing.Quadratic.Out, true);
                            game.add.tween(this.stp_4_32).to({
                                x: 400
                            }, 1000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {

                                this.stp_3_8.visible = false;
                                this.stp_4_4.visible = true;

                                this.arrow1.visible = true;
                                this.arrow1.x = 396;
                                this.arrow1.y = 445;


                            }, this);
                        }, this);
                    }, this);
                }, this);
            } else {

                game.add.tween(this.stp_2_2).to({
                    x: 433,
                    y: 565
                }, 1000, Phaser.Easing.Quadratic.Out, true);

            }

        }, this);

        this.stp_2_1ani = game.add.sprite(250, 490, 'stp_2_1ani');
        this.stp_2_1ani.anchor.setTo(0.5);
        this.stp_2_1ani.visible = false;

        this.stp_2_2ani = game.add.sprite(250, 490, 'stp_2_2ani');
        this.stp_2_2ani.anchor.setTo(0.5);
        this.stp_2_2ani.visible = false;


        this.stp_2_1ani.animations.add('stp_2_1ani');
        this.stp_2_1ani.animations.play('stp_2_1ani', 10, false);


        /*------------------stp2_end---------------------*/

        /*------------------stp3_start---------------------*/


        this.stp_4_4 = game.add.sprite(125.5, 448.5, 'stp_4_4');
        this.stp_4_4.anchor.setTo(0.5);
        this.stp_4_4.visible = false;



        this.stp_4_3 = game.add.sprite(1400, 550, 'stp_4_3');
        this.stp_4_3.anchor.setTo(0.5);
        this.stp_4_3.inputEnabled = true;
        this.stp_4_3.input.useHandCursor = true;
        this.stp_4_3.input.enableDrag();
        this.stp_4_3.events.onInputDown.add(function() {
            this.arrow1.visible = false;
            this.arrow2.visible = true;
            this.arrow2.x = 125;
            this.arrow2.y = 490;


            game.add.tween(this.stp_4_32).to({
                y: 438
            }, 1000, Phaser.Easing.Quadratic.Out, true);
            game.add.tween(this.stp_4_32).to({
                alpha: 0
            }, 1000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {

            }, this);



        }, this);
        this.stp_4_3.events.onInputUp.add(function() {
            if ((game.input.activePointer.x > 0 && game.input.activePointer.x < 245 && game.input.activePointer.y > 460 && game.input.activePointer.y < 560)) {
                this.arrow2.visible = false;
                this.stp_4_3.visible = false;
                this.stp_4_33.visible = true;

                this.stp_4_33.animations.add('stp_4_33');
                this.stp_4_33.animations.play('stp_4_33', 10, false);

                game.time.events.add(500, function() {

                    this.stp_4_4.animations.add('stp_4_4', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]);
                    this.stp_4_4.animations.play('stp_4_4', 10, false).onComplete.add(function() {

                        game.add.tween(this.stp_4_33).to({
                            x: 1000
                        }, 1000, Phaser.Easing.Quadratic.Out, true, 700).onComplete.add(function() {
                            game.add.tween(this.stp_4_21).to({
                                x: 400
                            }, 1000, Phaser.Easing.Quadratic.Out, true);
                            game.add.tween(this.stp_4_2).to({
                                x: 400
                            }, 1000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {


                                this.arrow1.visible = true;
                                this.arrow1.x = 398;
                                this.arrow1.y = 430;

                                this.stp_4_2.inputEnabled = true;
                                this.stp_4_2.input.useHandCursor = true;
                                this.stp_4_2.input.enableDrag();

                            }, this);
                        }, this);

                    }, this);



                }, this);

            } else {

                game.add.tween(this.stp_4_3).to({
                    x: 400,
                    y: 550
                }, 1000, Phaser.Easing.Quadratic.Out, true);

            }

        }, this);

        this.stp_4_32 = game.add.sprite(1400, 468, 'stp_4_32');
        this.stp_4_32.anchor.setTo(0.5);

        this.stp_4_33 = game.add.sprite(270, 480, 'stp_4_33');
        this.stp_4_33.anchor.setTo(0.5);
        this.stp_4_33.visible = false;


        this.stp_4_2 = game.add.sprite(1400, 550, 'stp_4_2');
        this.stp_4_2.anchor.setTo(0.5);

        this.stp_4_2.events.onInputDown.add(function() {
            this.arrow1.visible = false;
            this.arrow2.visible = true;
            this.arrow2.x = 125;
            this.arrow2.y = 490;


            game.add.tween(this.stp_4_21).to({
                y: 438
            }, 1000, Phaser.Easing.Quadratic.Out, true);
            game.add.tween(this.stp_4_21).to({
                alpha: 0
            }, 1000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {

            }, this);



        }, this);
        this.stp_4_2.events.onInputUp.add(function() {
            if ((game.input.activePointer.x > 0 && game.input.activePointer.x < 245 && game.input.activePointer.y > 460 && game.input.activePointer.y < 560)) {
                this.arrow2.visible = false;
                this.stp_4_2.visible = false;
                this.stp_4_22.visible = true;

                this.stp_4_22.animations.add('stp_4_22');
                this.stp_4_22.animations.play('stp_4_22', 10, false);

                game.time.events.add(500, function() {

                    this.stp_4_4.animations.add('stp_4_4', [18, 19, 20, 21]);
                    this.stp_4_4.animations.play('stp_4_4', 10, false).onComplete.add(function() {

                        game.add.tween(this.stp_4_22).to({
                            x: 800
                        }, 1000, Phaser.Easing.Quadratic.Out, true, 2000).onComplete.add(function() {
                            game.add.tween(this.stp_4_1).to({
                                x: 400
                            }, 1000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {



                                this.arrow1.visible = true;
                                this.arrow1.x = 400;
                                this.arrow1.y = 570;

                                this.stp_4_1.inputEnabled = true;
                                this.stp_4_1.input.useHandCursor = true;
                                this.stp_4_1.input.enableDrag();

                            }, this);
                        }, this);

                    }, this);



                }, this);

            } else {

                game.add.tween(this.stp_4_2).to({
                    x: 400,
                    y: 550
                }, 1000, Phaser.Easing.Quadratic.Out, true);

            }

        }, this);

        this.stp_4_21 = game.add.sprite(1400, 468, 'stp_4_21');
        this.stp_4_21.anchor.setTo(0.5);

        this.stp_4_22 = game.add.sprite(270, 480, 'stp_4_22');
        this.stp_4_22.anchor.setTo(0.5);
        this.stp_4_22.visible = false;



        this.stp_4_1 = game.add.sprite(1400, 600, 'stp_4_1');
        this.stp_4_1.anchor.setTo(0.5);

        this.stp_4_1.scale.setTo(0.8);
        this.stp_4_1.events.onInputDown.add(function() {
            this.arrow1.visible = false;
            this.arrow2.visible = true;
            this.arrow2.x = 125;
            this.arrow2.y = 490;

        }, this);
        this.stp_4_1.events.onInputUp.add(function() {
            if ((game.input.activePointer.x > 0 && game.input.activePointer.x < 245 && game.input.activePointer.y > 460 && game.input.activePointer.y < 560)) {
                this.arrow2.visible = false;
                this.stp_4_1.visible = false;

                game.time.events.add(100, function() {

                    this.stp_4_4.animations.add('stp_4_4', [22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33]);
                    this.stp_4_4.animations.play('stp_4_4', 10, false).onComplete.add(function() {

                        game.add.tween(this.stp_4_4).to({
                            x: -800
                        }, 1000, Phaser.Easing.Quadratic.Out, true, 2000).onComplete.add(function() {
                            game.add.tween(this.srp_5grp).to({
                                x: 0
                            }, 1000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {


                                this.arrow1.visible = true;
                                this.arrow1.x = 100;
                                this.arrow1.y = 625;
                                this.arrow1.angle = -90;

                                this.stp_5_1.inputEnabled = true;
                                this.stp_5_1.input.useHandCursor = true;
                            }, this);
                        }, this);

                    }, this);



                }, this);

            } else {

                game.add.tween(this.stp_4_1).to({
                    x: 400,
                    y: 550
                }, 1000, Phaser.Easing.Quadratic.Out, true);

            }

        }, this);


        // this.stp_4_33.animations.add('stp_4_33');
        // this.stp_4_33.animations.play('stp_4_33',10,false);

        // this.stp_3_8.frame = 39; 

        //  game.time.events.add(1500,function(){

        // this.stp_3_8.visible = false; 
        // this.stp_4_4.visible = true; 

        //  },this);



        /*------------------stp3_end---------------------*/

        /*------------------stp4_start---------------------*/

        this.srp_5grp = game.add.group();

        this.stp_5_1 = game.add.sprite(138.2, 582.15, 'stp_5_1');
        this.stp_5_1.anchor.setTo(0.5);

        this.stp_5_1.events.onInputDown.add(function() {
            this.arrow1.visible = true;
            this.arrow1.x = 378;
            this.arrow1.y = 435;
            this.arrow1.angle = 0;
            this.stp_5_1.inputEnabled = false;

            this.stp_5_1.loadTexture('stp_5_01');

            this.stp_5_4.inputEnabled = true;
            this.stp_5_4.input.useHandCursor = true;
            this.stp_5_4.input.enableDrag();

        }, this);
        this.srp_5grp.add(this.stp_5_1);

        this.stp_5_7 = game.add.sprite(171.3, 390, 'stp_5_7');
        this.stp_5_7.anchor.setTo(0.5);
        this.srp_5grp.add(this.stp_5_7);


        this.stp_4_11 = game.add.sprite(210, 695.6, 'stp_4_1');
        this.stp_4_11.anchor.setTo(0.5);
        this.stp_4_11.scale.setTo(0.85);
        this.stp_4_11.angle = -90;

        this.stp_4_11.events.onInputDown.add(function() {
            this.arrow1.visible = false;
            this.arrow2.visible = true;
            this.arrow2.x = 125;
            this.arrow2.y = 490;


        }, this);
        this.stp_4_11.events.onInputUp.add(function() {
            if ((game.input.activePointer.x > 0 && game.input.activePointer.x < 290 && game.input.activePointer.y > 430 && game.input.activePointer.y < 590)) {
                this.arrow2.visible = false;
                this.stp_4_11.visible = false;


                game.time.events.add(400, function() {

                    this.stp_5_7.animations.add('stp_5_7', [12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23]);
                    this.stp_5_7.animations.play('stp_5_7', 10, false).onComplete.add(function() {

                        game.add.tween(this.srp_5grp).to({
                            x: -1000
                        }, 1000, Phaser.Easing.Quadratic.Out, true, 2000).onComplete.add(function() {
                            game.add.tween(this.boardgrp).to({
                                x: 0
                            }, 1000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                                //nnnnnnnnnnnnnnnnnnnnnnnnnnn

                                this.l_arrow1.visible = true;



                            }, this);
                        }, this);

                    }, this);



                }, this);

            } else {

                game.add.tween(this.stp_4_11).to({
                    x: 210,
                    y: 695.6
                }, 1000, Phaser.Easing.Quadratic.Out, true);

            }

        }, this);
        this.srp_5grp.add(this.stp_4_11);

        this.stp_5_2 = game.add.sprite(402.05, 522.35, 'stp_5_2');
        this.stp_5_2.anchor.setTo(0.5);

        this.stp_5_2.events.onInputDown.add(function() {
            this.arrow1.visible = false;
            this.arrow2.visible = true;
            this.arrow2.x = 125;
            this.arrow2.y = 490;


        }, this);
        this.stp_5_2.events.onInputUp.add(function() {
            if ((game.input.activePointer.x > 0 && game.input.activePointer.x < 290 && game.input.activePointer.y > 430 && game.input.activePointer.y < 590)) {
                this.arrow2.visible = false;
                this.stp_5_2.visible = false;

                this.stp_5_3.visible = true;
                this.stp_5_3.animations.add('stp_5_3');
                this.stp_5_3.animations.play('stp_5_3', 10, false);


                game.time.events.add(500, function() {

                    this.stp_5_7.animations.add('stp_5_7', [8, 9, 10, 11, 12]);
                    this.stp_5_7.animations.play('stp_5_7', 10, false).onComplete.add(function() {

                        game.add.tween(this.stp_5_6).to({
                            x: 800
                        }, 1000, Phaser.Easing.Quadratic.Out, true, 1000).onComplete.add(function() {

                            this.stp_4_11.inputEnabled = true;
                            this.stp_4_11.input.useHandCursor = true;
                            this.stp_4_11.input.enableDrag();

                            this.stp_5_6.visible = false;

                            this.arrow1.visible = true;
                            this.arrow1.x = 207;
                            this.arrow1.y = 653;

                        }, this);

                    }, this);



                }, this);

            } else {

                game.add.tween(this.stp_5_2).to({
                    x: 402.05,
                    y: 522.35
                }, 1000, Phaser.Easing.Quadratic.Out, true);

            }

        }, this);
        this.srp_5grp.add(this.stp_5_2);

        this.stp_5_4 = game.add.sprite(376.85, 611.5, 'stp_5_4');
        this.stp_5_4.anchor.setTo(0.5);

        this.stp_5_4.events.onInputDown.add(function() {
            this.arrow1.visible = false;
            this.arrow2.visible = true;
            this.arrow2.x = 125;
            this.arrow2.y = 490;


            game.add.tween(this.stp_5_5).to({
                y: 469.9
            }, 1000, Phaser.Easing.Quadratic.Out, true);
            game.add.tween(this.stp_5_5).to({
                alpha: 0
            }, 1000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {

            }, this);


        }, this);
        this.stp_5_4.events.onInputUp.add(function() {
            if ((game.input.activePointer.x > 0 && game.input.activePointer.x < 290 && game.input.activePointer.y > 430 && game.input.activePointer.y < 590)) {
                this.arrow2.visible = false;
                this.stp_5_4.visible = false;

                this.stp_5_6.visible = true;
                this.stp_5_6.animations.add('stp_5_6');
                this.stp_5_6.animations.play('stp_5_6', 10, false);


                game.time.events.add(400, function() {

                    this.stp_5_7.animations.add('stp_5_7', [0, 1, 2, 3, 4, 5, 6, 7]);
                    this.stp_5_7.animations.play('stp_5_7', 10, false).onComplete.add(function() {

                        game.add.tween(this.stp_5_6).to({
                            x: 800
                        }, 1000, Phaser.Easing.Quadratic.Out, true, 2000).onComplete.add(function() {


                            this.arrow1.visible = true;
                            this.arrow1.x = 410;
                            this.arrow1.y = 440;

                            this.stp_5_2.inputEnabled = true;
                            this.stp_5_2.input.useHandCursor = true;
                            this.stp_5_2.input.enableDrag();

                        }, this);

                    }, this);



                }, this);

            } else {

                game.add.tween(this.stp_5_4).to({
                    x: 376.85,
                    y: 611.5
                }, 1000, Phaser.Easing.Quadratic.Out, true);

            }

        }, this);
        this.srp_5grp.add(this.stp_5_4);

        this.stp_5_5 = game.add.sprite(377.75, 499.9, 'stp_5_5');
        this.stp_5_5.anchor.setTo(0.5);
        this.srp_5grp.add(this.stp_5_5);

        this.stp_5_6 = game.add.sprite(310, 525, 'stp_5_6');
        this.stp_5_6.anchor.setTo(0.5);
        this.stp_5_6.visible = false;
        this.srp_5grp.add(this.stp_5_6);



        this.stp_5_3 = game.add.sprite(270, 408, 'stp_5_3');
        this.stp_5_3.anchor.setTo(0.5);
        this.stp_5_3.visible = false;
        this.srp_5grp.add(this.stp_5_3);

        this.stp_5_3.animations.add('stp_5_3');
        this.stp_5_3.animations.play('stp_5_3', 10, false);


        /*------------------stp4_end---------------------*/


        // this.stp_1_1.x = 1500;
        // this.stp_1_3.x = 1500;
        // this.stp_1_4.x = 1500;
        // this.stp_1_2.x = 1500; 
        // this.stp_1_boul1.x = 1500; 

        this.stp_3_1.x = 1500;
        this.stp_3_2.x = 1500;
        this.srp_5grp.x = 1500;



        /////////////////////////\\\\\\\\\\\\\\\\\\\\\\/////////////////////////



        this.boardgrp = game.add.group();
        this.t_board = game.add.sprite(221.6, 583.8, "t_board");
        this.t_board.anchor.setTo(0.5);
        this.boardgrp.add(this.t_board);


        this.ani_tomatto = game.add.sprite(248.15, 576.4, "ani_tomatto");
        this.ani_tomatto.anchor.setTo(0.5);
        this.ani_tomatto.events.onInputDown.add(function() {
            this.ani_tomatto.inputEnabled = false;
            this.l_arrow2.visible = false;

            this.t_knfe0002.visible = false;
            this.t_kndrag = false;
            this.ani_tomatto.animations.add('ani_tomatto');
            this.ani_tomatto.animations.play('ani_tomatto', 8, false).onComplete.add(function() {
                game.add.tween(this.boardgrp).to({
                    x: -450
                }, 800, Phaser.Easing.Quadratic.Out, true, 500).onComplete.add(function() {
                    game.add.tween(this.ovengrp).to({
                        x: 0
                    }, 800, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                        this.dragCirclek_1.inputEnabled = true;
                        this.l_arrow3.visible = true;

                    }, this);
                }, this);
            }, this);
        }, this);
        this.boardgrp.add(this.ani_tomatto);


        this.t_knfe0002 = game.add.sprite(256.75, 738.75, "t_knfe0002");
        this.t_knfe0002.anchor.setTo(0.5);
        this.t_knfe0002.visible = false;

        this.t_knfe0001 = game.add.sprite(256.75, 738.75, "t_knfe0001");
        this.t_knfe0001.anchor.setTo(0.5);
        this.t_knfe0001.inputEnabled = true;
        this.t_knfe0001.input.useHandCursor = true;
        this.t_knfe0001.input.pixelPerfectClick = true;
        this.t_knfe0001.input.pixelPerfectOver = true;
        this.t_knfe0001.events.onInputDown.add(function() {
            this.l_arrow1.visible = false;
            this.l_arrow2.visible = true;

            this.t_knfe0001.inputEnabled = false;
            this.ani_tomatto.inputEnabled = true;
            this.ani_tomatto.input.useHandCursor = true;
            this.ani_tomatto.input.pixelPerfectClick = true;
            this.ani_tomatto.input.pixelPerfectOver = true;

            this.t_knfe0001.visible = false;
            this.t_knfe0002.visible = true;
            this.t_kndrag = true;
        }, this);
        this.boardgrp.add(this.t_knfe0001);



        /////////////////////////\\\\\\\\\\\\\\\\\\\\\\/////////////////////////

        this.ovengrp = game.add.group();
        this.t_oven = game.add.sprite(247.15, 477.35, "t_oven");
        this.t_oven.anchor.setTo(0.5);
        this.ovengrp.add(this.t_oven);

        this.t_open = game.add.sprite(62.65, 519.85, "t_open");
        this.t_open.anchor.setTo(0.5);
        this.t_open.visible = false;
        this.ovengrp.add(this.t_open);

        this.bowl_bread0002 = game.add.sprite(246.8, 683.05, "bowl_bread0002");
        this.bowl_bread0002.anchor.setTo(0.5);
        this.bowl_bread0002.visible = false;
        this.ovengrp.add(this.bowl_bread0002);

        this.bowl_bread0001 = game.add.sprite(246.8, 683.05, "bowl_bread0001");
        this.bowl_bread0001.anchor.setTo(0.5);
        this.bowl_bread0001.events.onInputDown.add(function() {
            this.bowl_bread0001.inputEnabled = false;
            this.l_arrow4.visible = false;

            game.add.tween(this.bowl_bread0002.scale).to({
                x: 0.75,
                y: 0.75
            }, 800, Phaser.Easing.Quadratic.Out, true);
            game.add.tween(this.bowl_bread0002).to({
                x: 210,
                y: 530
            }, 800, Phaser.Easing.Quadratic.Out, true);
            game.add.tween(this.bowl_bread0001.scale).to({
                x: 0.75,
                y: 0.75
            }, 800, Phaser.Easing.Quadratic.Out, true);
            game.add.tween(this.bowl_bread0001).to({
                x: 210,
                y: 530
            }, 800, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                this.dragCirclek_1.inputEnabled = true;
                this.l_arrow5.visible = true;

            }, this);
        }, this);
        this.ovengrp.add(this.bowl_bread0001);



        this.t_close = game.add.sprite(212.15, 490.85, "t_close");
        this.t_close.anchor.setTo(0.5);
        this.ovengrp.add(this.t_close);

        this.d1_cnt = 0;
        this.dragCirclek_1 = game.add.graphics(370, 538.6);
        this.dragCirclek_1.beginFill(0x000000, 0);
        this.dragCirclek_1.drawCircle(0, 0, 50);
        this.dragCirclek_1.events.onInputDown.add(function() {
            this.dragCirclek_1.inputEnabled = false;
            this.bowl_bread0001.inputEnabled = true;
            this.d1_cnt++
                if (this.d1_cnt == 1) {
                    this.l_arrow3.visible = false;
                    this.l_arrow4.visible = true;
                    this.t_open.visible = true;
                    this.t_close.visible = false;
                }

            if (this.d1_cnt == 2) {
                this.t_open.visible = false;
                this.t_close.visible = true;
                this.l_arrow5.visible = false;


                game.add.tween(this.t_timer).to({
                    x: 250
                }, 800, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                    game.add.tween(this.bowl_bread0001).to({
                        visible: false
                    }, 800, Phaser.Easing.Quadratic.Out, true, 1200);
                    game.add.tween(this.bowl_bread0002).to({
                        visible: true
                    }, 800, Phaser.Easing.Quadratic.Out, true, 1200);
                    this.t_timer.animations.add('t_timer');
                    this.t_timer.animations.play('t_timer', 10, false).onComplete.add(function() {
                        game.add.tween(this.t_timer).to({
                            x: 900
                        }, 800, Phaser.Easing.Quadratic.Out, true, 500).onComplete.add(function() {
                            this.dragCirclek_1.inputEnabled = true;
                            this.l_arrow6.visible = true;

                        }, this);
                    }, this);
                }, this);

            }

            if (this.d1_cnt == 3) {
                this.t_open.visible = true;
                this.t_close.visible = false;
                this.l_arrow6.visible = false;

                game.add.tween(this.bowl_bread0002.scale).to({
                    x: 1,
                    y: 1
                }, 800, Phaser.Easing.Quadratic.Out, true, 500);
                game.add.tween(this.bowl_bread0002).to({
                    x: 246.8,
                    y: 683.05
                }, 800, Phaser.Easing.Quadratic.Out, true, 500).onComplete.add(function() {
                    game.add.tween(this.ovengrp).to({
                        x: -450
                    }, 800, Phaser.Easing.Quadratic.Out, true, 500).onComplete.add(function() {
                        game.add.tween(this.brd_plt1).to({
                            x: 144.75
                        }, 800, Phaser.Easing.Quadratic.Out, true);
                        game.add.tween(this.meat_plte).to({
                            x: 355.55
                        }, 800, Phaser.Easing.Quadratic.Out, true);
                        game.add.tween(this.brd_plt).to({
                            x: 160
                        }, 800, Phaser.Easing.Quadratic.Out, true);
                        game.add.tween(this.brd_plt_1).to({
                            x: 135
                        }, 800, Phaser.Easing.Quadratic.Out, true);
                        game.add.tween(this.t_meat).to({
                            x: 355.55
                        }, 800, Phaser.Easing.Quadratic.Out, true);
                        game.add.tween(this.t_plte).to({
                            x: 270.65
                        }, 800, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                            this.brd_plt_1.inputEnabled = true;
                            this.brd_plt_1.input.useHandCursor = true;
                            this.brd_plt_1.input.enableDrag();
                            this.l_arrow7.visible = true;

                        }, this);
                    }, this);
                }, this);

            }

        }, this);



        this.t_timer = game.add.sprite(900, 650, "t_timer");
        this.t_timer.anchor.setTo(0.5);


        /////////////////////////\\\\\\\\\\\\\\\\\\\\\\/////////////////////////

        // this.brd_plt1 = game.add.sprite(144.75,669.05,"brd_plt1");
        this.brd_plt1 = game.add.sprite(900.75, 669.05, "brd_plt1");
        this.brd_plt1.anchor.setTo(0.5);

        // this.meat_plte = game.add.sprite(355.55,669.05,"meat_plte");
        this.meat_plte = game.add.sprite(900.55, 669.05, "meat_plte");
        this.meat_plte.anchor.setTo(0.5);

        this.plategrp = game.add.group();
        // this.t_plte = game.add.sprite(270.65,555.1,"t_plte");
        this.t_plte = game.add.sprite(900.65, 555.1, "t_plte");
        this.t_plte.anchor.setTo(0.5);
        this.plategrp.add(this.t_plte);

        this.bg_plt_brd = game.add.sprite(270.65, 555.1, "brd_plt");
        this.bg_plt_brd.anchor.setTo(0.5);
        this.bg_plt_brd.visible = false;
        this.plategrp.add(this.bg_plt_brd);


        this.bg_plt_meat = game.add.sprite(270.65, 555.1, "t_meat");
        this.bg_plt_meat.anchor.setTo(0.5);
        this.bg_plt_meat.scale.setTo(0.85);
        this.bg_plt_meat.visible = false;
        this.plategrp.add(this.bg_plt_meat);


        this.bg_plt_cali1 = game.add.sprite(270.65, 535.1, "cali1");
        this.bg_plt_cali1.anchor.setTo(0.5);
        this.bg_plt_cali1.scale.setTo(0.85);
        this.bg_plt_cali1.visible = false;
        this.plategrp.add(this.bg_plt_cali1);


        this.bg_plt_cali2 = game.add.sprite(270.65, 555.1, "cali2");
        this.bg_plt_cali2.anchor.setTo(0.5);
        this.bg_plt_cali2.scale.setTo(0.85);
        this.bg_plt_cali2.visible = false;
        this.plategrp.add(this.bg_plt_cali2);

        this.bg_plt_tomato1 = game.add.sprite(270.65, 530.1, "tomatto");
        this.bg_plt_tomato1.anchor.setTo(0.5);
        this.bg_plt_tomato1.scale.setTo(0.85);
        this.bg_plt_tomato1.visible = false;
        this.plategrp.add(this.bg_plt_tomato1);

        this.bg_plt_tomato2 = game.add.sprite(250.65, 550.1, "tomatto");
        this.bg_plt_tomato2.anchor.setTo(0.5);
        this.bg_plt_tomato2.scale.setTo(0.85);
        this.bg_plt_tomato2.visible = false;
        this.plategrp.add(this.bg_plt_tomato2);

        this.bg_plt_tomato3 = game.add.sprite(285.65, 550.1, "tomatto");
        this.bg_plt_tomato3.anchor.setTo(0.5);
        this.bg_plt_tomato3.scale.setTo(0.85);
        this.bg_plt_tomato3.visible = false;
        this.plategrp.add(this.bg_plt_tomato3);

        this.bg_plt_cse = game.add.sprite(270.65, 545.1, "chese");
        this.bg_plt_cse.anchor.setTo(0.5);
        this.bg_plt_cse.scale.setTo(0.85);
        this.bg_plt_cse.visible = false;
        this.plategrp.add(this.bg_plt_cse);

        this.bg_plt_brd1 = game.add.sprite(270.65, 540.1, "brd_plt");
        this.bg_plt_brd1.anchor.setTo(0.5);
        this.bg_plt_brd1.visible = false;
        this.plategrp.add(this.bg_plt_brd1);


        /////////////\\\\\\\\\\\/////////\\\\\\\\\\/////////\\\\\\\\\\//////////\\\\\///


        // this.brd_plt = game.add.sprite(160,660.05,"brd_plt");
        this.brd_plt = game.add.sprite(900, 660.05, "brd_plt");
        this.brd_plt.anchor.setTo(0.5);
        this.brd_plt.events.onInputDown.add(function() {
            this.l_arrow23.visible = false;
            this.l_arrow24.visible = true;

        }, this);
        this.brd_plt.events.onInputUp.add(function() {
            if ((game.input.activePointer.x > 150 && game.input.activePointer.x < 380 && game.input.activePointer.y > 490 && game.input.activePointer.y < 605)) {
                this.brd_plt.visible = false;
                this.l_arrow24.visible = false;

                this.bg_plt_brd1.visible = true;
                game.add.tween(this.brd_plt1).to({
                    x: -250
                }, 800, Phaser.Easing.Quadratic.Out, true, 500).onComplete.add(function() {
                    game.add.tween(this.playbtn.scale).to({
                        x: 1,
                        y: 1
                    }, 800, Phaser.Easing.Quadratic.Out, true);
                    effectssd = game.add.sprite(this.bg_plt_brd1.x, this.bg_plt_brd1.y, 'effectssd');
                    effectssd.anchor.setTo(0.5);
                    effectssd.animations.add('effectssd');
                    effectssd.animations.play('effectssd', 20, false).onComplete.add(function(evt) {
                        evt.destroy();
                    }, this);
                }, this);
            } else {
                this.l_arrow23.visible = true;
                this.l_arrow24.visible = false;

                game.add.tween(this.brd_plt).to({
                    x: 160,
                    y: 660.05
                }, 800, Phaser.Easing.Quadratic.Out, true);

            }
        }, this);



        // this.brd_plt_1 = game.add.sprite(135,660.05,"brd_plt");
        this.brd_plt_1 = game.add.sprite(900, 660.05, "brd_plt");
        this.brd_plt_1.anchor.setTo(0.5);
        this.brd_plt_1.events.onInputDown.add(function() {
            this.l_arrow7.visible = false;
            this.l_arrow8.visible = true;

        }, this);
        this.brd_plt_1.events.onInputUp.add(function() {
            if ((game.input.activePointer.x > 150 && game.input.activePointer.x < 380 && game.input.activePointer.y > 490 && game.input.activePointer.y < 605)) {
                this.brd_plt_1.visible = false;
                this.bg_plt_brd.visible = true;
                this.l_arrow8.visible = false;
                this.l_arrow9.visible = true;


                this.t_meat.inputEnabled = true;
                this.t_meat.input.useHandCursor = true;
                this.t_meat.input.enableDrag();
            } else {
                this.l_arrow8.visible = false;
                this.l_arrow7.visible = true;

                game.add.tween(this.brd_plt_1).to({
                    x: 135,
                    y: 660.05
                }, 800, Phaser.Easing.Quadratic.Out, true);

            }
        }, this);


        // this.t_meat = game.add.sprite(355.55,669.05,"t_meat");
        this.t_meat = game.add.sprite(900.55, 669.05, "t_meat");
        this.t_meat.anchor.setTo(0.5);
        this.t_meat.events.onInputDown.add(function() {
            this.l_arrow9.visible = false;
            this.l_arrow10.visible = true;

        }, this);
        this.t_meat.events.onInputUp.add(function() {
            if ((game.input.activePointer.x > 150 && game.input.activePointer.x < 380 && game.input.activePointer.y > 490 && game.input.activePointer.y < 605)) {
                this.t_meat.visible = false;
                this.bg_plt_meat.visible = true;
                this.l_arrow10.visible = false;

                game.add.tween(this.meat_plte).to({
                    x: 650
                }, 800, Phaser.Easing.Quadratic.Out, true, 500);
                game.add.tween(this.brd_plt1).to({
                    x: -200
                }, 800, Phaser.Easing.Quadratic.Out, true, 500);
                game.add.tween(this.brd_plt).to({
                    x: -200
                }, 800, Phaser.Easing.Quadratic.Out, true, 500).onComplete.add(function() {
                    game.add.tween(this.csegrp).to({
                        x: 0
                    }, 800, Phaser.Easing.Quadratic.Out, true);
                    game.add.tween(this.caligrp).to({
                        x: 0
                    }, 800, Phaser.Easing.Quadratic.Out, true);
                    game.add.tween(this.tomgrp).to({
                        y: 0
                    }, 800, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                        this.cali2.inputEnabled = true;
                        this.cali2.input.useHandCursor = true;
                        this.cali2.input.enableDrag();
                        this.l_arrow11.visible = true;

                    }, this);
                }, this);
            } else {
                this.l_arrow9.visible = true;
                this.l_arrow10.visible = false;

                game.add.tween(this.t_meat).to({
                    x: 355.55,
                    y: 669.05
                }, 800, Phaser.Easing.Quadratic.Out, true);
            }
        }, this);

        /////////////\\\\\\\\\\\/////////\\\\\\\\\\/////////\\\\\\\\\\//////////\\\\\///


        this.tomgrp = game.add.group();
        this.tomm_plte = game.add.sprite(254.8, 680.85, "meat_plte");
        this.tomm_plte.anchor.setTo(0.5);
        this.tomgrp.add(this.tomm_plte);

        this.tomatto1 = game.add.sprite(219.25, 682.55, "tomatto");
        this.tomatto1.anchor.setTo(0.5);
        this.tomgrp.add(this.tomatto1);

        this.tomatto2 = game.add.sprite(257, 662.65, "tomatto");
        this.tomatto2.anchor.setTo(0.5);
        this.tomgrp.add(this.tomatto2);


        this.tomatto3 = game.add.sprite(250.1, 679.25, "tomatto");
        this.tomatto3.anchor.setTo(0.5);
        this.tomatto3.events.onInputDown.add(function() {
            this.l_arrow19.visible = false;
            this.l_arrow20.visible = true;

        }, this);
        this.tomatto3.events.onInputUp.add(function() {
            if ((game.input.activePointer.x > 150 && game.input.activePointer.x < 380 && game.input.activePointer.y > 490 && game.input.activePointer.y < 605)) {
                this.tomatto3.visible = false;
                this.bg_plt_tomato1.visible = true;
                this.l_arrow20.visible = false;
                this.l_arrow21.visible = true;

                this.chese.inputEnabled = true;
                this.chese.input.useHandCursor = true;
                this.chese.input.enableDrag();
            } else {
                this.l_arrow19.visible = true;
                this.l_arrow20.visible = false;

                game.add.tween(this.tomatto3).to({
                    x: 250.1,
                    y: 679.25
                }, 800, Phaser.Easing.Quadratic.Out, true);

            }
        }, this);
        this.tomgrp.add(this.tomatto3);


        this.tomatto4 = game.add.sprite(291.5, 676.2, "tomatto");
        this.tomatto4.anchor.setTo(0.5);
        this.tomatto4.events.onInputDown.add(function() {
            this.l_arrow17.visible = false;
            this.l_arrow18.visible = true;

        }, this);
        this.tomatto4.events.onInputUp.add(function() {
            if ((game.input.activePointer.x > 150 && game.input.activePointer.x < 380 && game.input.activePointer.y > 490 && game.input.activePointer.y < 605)) {
                this.tomatto4.visible = false;
                this.bg_plt_tomato3.visible = true;
                this.l_arrow18.visible = false;
                this.l_arrow19.visible = true;

                this.tomatto3.inputEnabled = true;
                this.tomatto3.input.useHandCursor = true;
                this.tomatto3.input.enableDrag();
            } else {
                this.l_arrow17.visible = true;
                this.l_arrow18.visible = false;


                game.add.tween(this.tomatto4).to({
                    x: 291.5,
                    y: 676.2
                }, 800, Phaser.Easing.Quadratic.Out, true);

            }
        }, this);
        this.tomgrp.add(this.tomatto4);


        this.tomatto5 = game.add.sprite(261.05, 695.65, "tomatto");
        this.tomatto5.anchor.setTo(0.5);
        this.tomatto5.events.onInputDown.add(function() {
            this.l_arrow15.visible = false;
            this.l_arrow16.visible = true;

        }, this);
        this.tomatto5.events.onInputUp.add(function() {
            if ((game.input.activePointer.x > 150 && game.input.activePointer.x < 380 && game.input.activePointer.y > 490 && game.input.activePointer.y < 605)) {
                this.tomatto5.visible = false;
                this.l_arrow16.visible = false;
                this.l_arrow17.visible = true;

                this.bg_plt_tomato2.visible = true;
                this.tomatto4.inputEnabled = true;
                this.tomatto4.input.useHandCursor = true;
                this.tomatto4.input.enableDrag();
            } else {
                this.l_arrow15.visible = true;
                this.l_arrow16.visible = false;

                game.add.tween(this.tomatto5).to({
                    x: 261.05,
                    y: 695.65
                }, 800, Phaser.Easing.Quadratic.Out, true);

            }
        }, this);
        this.tomgrp.add(this.tomatto5);

        /////////////\\\\\\\\\\\/////////\\\\\\\\\\/////////\\\\\\\\\\//////////\\\\\///


        this.caligrp = game.add.group();
        this.cali_plt1 = game.add.sprite(85.2, 623.8, "brd_plt1");
        this.cali_plt1.anchor.setTo(0.5);
        this.caligrp.add(this.cali_plt1);


        this.cali3 = game.add.sprite(67.65, 610.05, "cali3");
        this.cali3.anchor.setTo(0.5);
        this.caligrp.add(this.cali3);


        this.cali1 = game.add.sprite(85.2, 585.75, "cali1");
        this.cali1.anchor.setTo(0.5);
        this.cali1.events.onInputDown.add(function() {
            this.l_arrow13.visible = false;
            this.l_arrow14.visible = true;

        }, this);
        this.cali1.events.onInputUp.add(function() {
            if ((game.input.activePointer.x > 150 && game.input.activePointer.x < 380 && game.input.activePointer.y > 490 && game.input.activePointer.y < 605)) {
                this.cali1.visible = false;
                this.bg_plt_cali1.visible = true;
                this.l_arrow14.visible = false;
                this.l_arrow15.visible = true;

                this.tomatto5.inputEnabled = true;
                this.tomatto5.input.useHandCursor = true;
                this.tomatto5.input.enableDrag();

            } else {
                this.l_arrow13.visible = true;
                this.l_arrow14.visible = false;

                game.add.tween(this.cali1).to({
                    x: 85.2,
                    y: 585.75
                }, 800, Phaser.Easing.Quadratic.Out, true);

            }
        }, this);
        this.caligrp.add(this.cali1);


        this.cali2 = game.add.sprite(100.2, 621.9, "cali2");
        this.cali2.anchor.setTo(0.5);
        this.cali2.events.onInputDown.add(function() {
            this.l_arrow11.visible = false;
            this.l_arrow12.visible = true;

        }, this);
        this.cali2.events.onInputUp.add(function() {
            if ((game.input.activePointer.x > 150 && game.input.activePointer.x < 380 && game.input.activePointer.y > 490 && game.input.activePointer.y < 605)) {
                this.cali2.visible = false;
                this.bg_plt_cali2.visible = true;
                this.l_arrow12.visible = false;
                this.l_arrow13.visible = true;

                this.cali1.inputEnabled = true;
                this.cali1.input.useHandCursor = true;
                this.cali1.input.enableDrag();
            } else {
                this.l_arrow11.visible = true;
                this.l_arrow12.visible = false;

                game.add.tween(this.cali2).to({
                    x: 100.2,
                    y: 621.9
                }, 800, Phaser.Easing.Quadratic.Out, true);

            }
        }, this);
        this.caligrp.add(this.cali2);

        /////////////\\\\\\\\\\\/////////\\\\\\\\\\/////////\\\\\\\\\\//////////\\\\\///


        this.csegrp = game.add.group();
        this.cse_plt1 = game.add.sprite(422.4, 632.35, "brd_plt1");
        this.cse_plt1.anchor.setTo(0.5);
        this.csegrp.add(this.cse_plt1);

        this.chese = game.add.sprite(425.8, 623.85, "chese");
        this.chese.anchor.setTo(0.5);
        this.chese.events.onInputDown.add(function() {
            this.l_arrow21.visible = false;
            this.l_arrow22.visible = true;

        }, this);
        this.chese.events.onInputUp.add(function() {
            if ((game.input.activePointer.x > 150 && game.input.activePointer.x < 380 && game.input.activePointer.y > 490 && game.input.activePointer.y < 605)) {
                this.chese.visible = false;
                this.bg_plt_cse.visible = true;
                this.l_arrow22.visible = false;


                game.add.tween(this.csegrp).to({
                    x: 650
                }, 800, Phaser.Easing.Quadratic.Out, true);
                game.add.tween(this.caligrp).to({
                    x: -450
                }, 800, Phaser.Easing.Quadratic.Out, true);
                game.add.tween(this.tomgrp).to({
                    y: 650
                }, 800, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                    game.add.tween(this.brd_plt1).to({
                        x: 144.75
                    }, 800, Phaser.Easing.Quadratic.Out, true);
                    game.add.tween(this.brd_plt).to({
                        x: 160
                    }, 800, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                        this.brd_plt.inputEnabled = true;
                        this.brd_plt.input.useHandCursor = true;
                        this.brd_plt.input.enableDrag();
                        this.l_arrow23.visible = true;

                    }, this);
                }, this);

            } else {
                this.l_arrow21.visible = true;
                this.l_arrow22.visible = false;

                game.add.tween(this.chese).to({
                    x: 425.8,
                    y: 623.85
                }, 800, Phaser.Easing.Quadratic.Out, true);

            }
        }, this);
        this.csegrp.add(this.chese);

        /////////////\\\\\\\\\\\/////////\\\\\\\\\\/////////\\\\\\\\\\//////////\\\\\///



        // this.stp_1_boul1.visible=false;
        // this.stp_1_2.visible=false;
        // this.stp_1_1.visible=false;
        // this.stp_1_3.visible=false;
        // this.stp_1_4.visible=false;

        this.tomgrp.y = 900;
        this.csegrp.x = 650;
        this.caligrp.x = -450;


        this.boardgrp.x = 900;
        this.ovengrp.x = 900;
        /////////////////////////\\\\\\\\\\\\\\\\\\\\\\/////////////////////////

        //arrrrrrrrrrrrr
        for (i = 1; i <= 24; i++) {
            if (i == 1) {
                this['l_arrow' + i] = game.add.sprite(257, 695, 'arrow'); //370,650

            }

            if (i == 2) {
                this['l_arrow' + i] = game.add.sprite(272, 533, 'arrow');
            }


            if (i == 3) {
                this['l_arrow' + i] = game.add.sprite(368, 515, 'arrow');
            }
            if (i == 4) {
                this['l_arrow' + i] = game.add.sprite(250, 653, 'arrow');
            }
            if (i == 5) {
                this['l_arrow' + i] = game.add.sprite(368, 515, 'arrow');
            }
            if (i == 6) {
                this['l_arrow' + i] = game.add.sprite(368, 515, 'arrow');
            }
            if (i == 7) {
                this['l_arrow' + i] = game.add.sprite(144, 645, 'arrow');
            }
            if (i == 8) {
                this['l_arrow' + i] = game.add.sprite(270, 530, 'arrow');
            }
            if (i == 9) {
                this['l_arrow' + i] = game.add.sprite(352, 644, 'arrow');
            }
            if (i == 10) {
                this['l_arrow' + i] = game.add.sprite(270, 530, 'arrow');
            }
            if (i == 11) {
                this['l_arrow' + i] = game.add.sprite(105, 570, 'arrow');
            }
            if (i == 12) {
                this['l_arrow' + i] = game.add.sprite(270, 530, 'arrow');
            }
            if (i == 13) {
                this['l_arrow' + i] = game.add.sprite(82, 540, 'arrow');
            }
            if (i == 14) {
                this['l_arrow' + i] = game.add.sprite(270, 530, 'arrow');
            }
            if (i == 15) {
                this['l_arrow' + i] = game.add.sprite(260, 660, 'arrow');
            }
            if (i == 16) {
                this['l_arrow' + i] = game.add.sprite(270, 530, 'arrow');
            }
            if (i == 17) {
                this['l_arrow' + i] = game.add.sprite(290, 644, 'arrow');
            }
            if (i == 18) {
                this['l_arrow' + i] = game.add.sprite(270, 530, 'arrow');
            }
            if (i == 19) {
                this['l_arrow' + i] = game.add.sprite(246, 650, 'arrow');
            }
            if (i == 20) {
                this['l_arrow' + i] = game.add.sprite(270, 530, 'arrow');
            }
            if (i == 21) {
                this['l_arrow' + i] = game.add.sprite(418, 595, 'arrow');
            }
            if (i == 22) {
                this['l_arrow' + i] = game.add.sprite(270, 530, 'arrow');
            }
            if (i == 23) {
                this['l_arrow' + i] = game.add.sprite(155, 635, 'arrow');
            }
            if (i == 24) {
                this['l_arrow' + i] = game.add.sprite(270, 530, 'arrow');
            }


            this['l_arrow' + i].anchor.setTo(0.5);
            this['l_arrow' + i].animations.add('arrow');
            this['l_arrow' + i].animations.play('arrow', 15, true);
            if (i >= 1) {
                this['l_arrow' + i].visible = false;

            }
        }

        //arrrrrrrrrrrrr
        for (i = 1; i <= 2; i++) {
            if (i == 1) {
                this['arrow' + i] = game.add.sprite(370, 650, 'arrow'); //370,650

            }

            if (i == 2) {
                this['arrow' + i] = game.add.sprite(130, 450, 'arrow');
                this['arrow' + i].visible = false;
            }

            this['arrow' + i].anchor.setTo(0.5);
            this['arrow' + i].animations.add('arrow');
            this['arrow' + i].animations.play('arrow', 15, true);
            // this['arrow'+i].visible=false;
        }

        this.morebtn = game.add.sprite(68, 749.55, 'morebtn');
        this.morebtn.anchor.setTo(0.5);
        this.morebtn.scale.setTo(0.9);
        this.morebtn.inputEnabled = true;
        this.morebtn.input.useHandCursor = true;
        //this.morebtn.events.onInputUp.add(this.moreLink, this);
        this.morebtn.events.onInputOver.add(this.btnOver, this);
        this.morebtn.events.onInputOut.add(this.btnOut, this);
        // this.levelGroup.add(this.morebtn);

        this.playbtn = game.add.sprite(450, 749.2, 'donebtn');
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

            }, this);
        }





        this.logoVar = game.add.sprite(5, 5, 'logo');
        this.logoVar.scale.setTo(0.8);
        this.logoVar.inputEnabled = true
        this.logoVar.input.useHandCursor = true;
        //this.logoVar.events.onInputUp.add(this.openLink, this);

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

        // console.log(game.input.activePointer.x+':'+game.input.activePointer.y);

        if (this.dummydrag) {
            this.dummyobject.x = game.input.activePointer.x;
            this.dummyobject.y = game.input.activePointer.y;
            console.log(game.input.activePointer.x + ':' + game.input.activePointer.y);
        }



        if (this.stp1_drg1) {
            this.stp_1_2.x = game.input.activePointer.x;
            this.stp_1_2.y = game.input.activePointer.y;

        }

        if (this.stp1_drg2) {
            this.stp_1_4_d.x = game.input.activePointer.x - 10;
            this.stp_1_4_d.y = game.input.activePointer.y;
            this.stp_1_4_d.visible = true;

        }

        if (this.t_kndrag) {
            this.t_knfe0002.x = game.input.activePointer.x + 10;
            this.t_knfe0002.y = game.input.activePointer.y;

        }

    },
    openLink: function() {
        CreateLinksInGame("Baby-Taylor-Caring-Story-Photo", "game", "logo");
    },
    moreLink: function() {
        CreateLinksInGame("Baby-Taylor-Caring-Story-Photo", "game", "more");
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
            game.state.start('cooking2_screen');

        });

    },
}

Main.knok_scene = function() {}

Main.knok_scene.prototype = {
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
        this.morebtn.scale.setTo(0);
        this.morebtn.inputEnabled = true;
        this.morebtn.input.useHandCursor = true;
        //this.morebtn.events.onInputUp.add(this.moreLink, this);
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



        this.popup2 = game.add.sprite(216.9, 465.9, 'btext0003');
        this.popup2.anchor.setTo(0.5);
        this.popup2.scale.setTo(0);
        //this.levelGroup.add(this.popup1);

        this.popup1 = game.add.sprite(211.2, 560, 'tom_text0002');
        this.popup1.anchor.setTo(0.5);
        this.popup1.scale.setTo(0);
        // this.levelGroup.add(this.popup2);

        // this.popup3 = game.add.sprite(113.5,305.05,'btext0001');
        // this.popup3.anchor.setTo(0.5);
        // this.popup3.scale.setTo(0);
        // this.levelGroup.add(this.popup3);



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
                            this.startPopUp();
                        }, this);
                    }, this);
                }, this);
            }, this)
        }

        this.logoVar = game.add.sprite(5, 5, 'logo');
        this.logoVar.scale.setTo(0.8);
        this.logoVar.inputEnabled = true
        this.logoVar.input.useHandCursor = true;
        //this.logoVar.events.onInputUp.add(this.openLink, this);

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
        CreateLinksInGame("Baby-Taylor-Caring-Story-Cooking", "game", "logo");
    },
    moreLink: function() {
        CreateLinksInGame("Baby-Taylor-Caring-Story-Cooking", "game", "morebutton");
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

Main.final_screen = function() {}

Main.final_screen.prototype = {
    create: function() {
        this.levelGroup = game.add.group();
        this.bg = game.add.sprite(0, 0, 'rbg');
        this.levelGroup.add(this.bg);

        this.book1 = game.add.sprite(416, 131, 'book0001');
        this.book1.anchor.setTo(0.5);
        this.book1.scale.setTo(0.5);

        this.tom = game.add.sprite(367, 500, 'tom');
        this.tom.anchor.setTo(0.5);
        // this.tom.scale.setTo(0.9);

        this.bgroup = game.add.group();

        this.tbody = game.add.sprite(258.95, 411.35, 'tbody');
        this.tbody.anchor.setTo(0.5);
        this.bgroup.add(this.tbody);

        this.dress1 = game.add.sprite(260, 456, 'dress0002');
        this.dress1.anchor.setTo(0.5);
        this.bgroup.add(this.dress1);

        this.eye_blink = game.add.sprite(260, 272, 'eye_blink');
        this.eye_blink.anchor.setTo(0.5);
        // this.eye_blink.frame = 4;
        this.bgroup.add(this.eye_blink);

        this.bgroup.scale.setTo(0.8);
        this.bgroup.x = -20;
        this.bgroup.y = 150;










        this.ftable = game.add.sprite(276.45, 799.2, 'ftable');
        this.ftable.anchor.setTo(0.5);

        this.sandwich = game.add.sprite(370, 630, 'sandwich');
        this.sandwich.anchor.setTo(0.5);
        this.sandwich.scale.setTo(0.7);

        this.jgroup = game.add.group();


        this.jplate = game.add.sprite(284, 624, 'jplate');
        this.jplate.anchor.setTo(0.5);
        this.jgroup.add(this.jplate);

        var gpicex = [316, 338, 357, 374, 318, 338, 357];
        var gpicey = [576, 581, 586, 593, 593, 598, 600];

        for (i = 1; i <= 7; i++) {
            this['gpice' + i] = game.add.sprite(gpicex[i - 1], gpicey[i - 1], 'gpice');
            this['gpice' + i].anchor.setTo(0.5);
            this.jgroup.add(this['gpice' + i]);

        }

        var bpicex = [233, 258, 287, 243, 270, 338, 357];
        var bpicey = [581, 583, 581, 600, 595, 598, 600];

        for (i = 1; i <= 5; i++) {
            this['bpice' + i] = game.add.sprite(bpicex[i - 1], bpicey[i - 1], 'bpice');
            this['bpice' + i].anchor.setTo(0.5);
            this.jgroup.add(this['bpice' + i]);

        }

        this.wjuice_ani = game.add.sprite(282, 542, 'wjuice_ani');
        this.wjuice_ani.anchor.setTo(0.5);
        this.wjuice_ani.frame = 19;
        this.jgroup.add(this.wjuice_ani);

        var opicex = [209, 192, 187, 192, 204, 226, 710];
        var opicey = [593, 603, 622, 637, 649, 656, 440];

        for (i = 1; i <= 6; i++) {
            this['opice' + i] = game.add.sprite(opicex[i - 1], opicey[i - 1], 'opice');
            this['opice' + i].anchor.setTo(0.5);
            if (i == 3) {
                this['opice' + i].angle = -30;
            }
            if (i == 4) {
                this['opice' + i].angle = -50;
            }
            if (i == 5) {
                this['opice' + i].angle = -70;
            }
            if (i == 6) {
                this['opice' + i].angle = -90;
            }
            this.jgroup.add(this['opice' + i]);

        }

        var apicex = [311, 331, 348, 365, 382, 226, 710];
        var apicey = [663, 654, 646, 636, 624, 656, 440];

        for (i = 1; i <= 5; i++) {
            this['apice' + i] = game.add.sprite(apicex[i - 1], apicey[i - 1], 'apice');
            this['apice' + i].anchor.setTo(0.5);
            this.jgroup.add(this['apice' + i]);

        }

        this.jgroup.scale.setTo(0.75);
        this.jgroup.x = -70;
        this.jgroup.y = 150;



        // this.dummydrag = true;

        //  this.dummyobject= game.add.sprite(-100,0,'arrow');
        //  this.dummyobject.anchor.setTo(0.5);
        // this.dummyobject.scale.setTo(0.5);

        var arro2x = [372, 595, 442, 705, 113, 410, 710];
        var arro2y = [94, 163, 414, 420, 402, 130, 440];

        for (i = 1; i <= 1; i++) {
            this['arrow' + i] = game.add.sprite(arro2x[i - 1], arro2y[i - 1], 'arrow');
            this['arrow' + i].anchor.setTo(0.5);
            this['arrow' + i].animations.add('arrow');
            this['arrow' + i].animations.play('arrow', 12, true);
            this['arrow' + i].visible = false;
            if (i == 1) {
                this['arrow' + i].angle = -45;
            }
            if (i == 1) {
                // this['arrow'+i].visible=true;
            }

        }



        this.morebtn = game.add.sprite(75.55, 762, 'morebtn');
        this.morebtn.anchor.setTo(0.5);
        this.morebtn.inputEnabled = true;
        this.morebtn.input.useHandCursor = true;
        //this.morebtn.events.onInputUp.add(this.moreLink, this);
        this.morebtn.events.onInputOver.add(this.btnOver, this);
        this.morebtn.events.onInputOut.add(this.btnOut, this);
        // this.levelGroup.add(this.morebtn);
        this.playbtn = game.add.sprite(451.4, 747, 'resetbtn');
        this.playbtn.anchor.setTo(0.5);
        this.playbtn.scale.setTo(0);
        this.playbtn.inputEnabled = true;
        this.playbtn.input.useHandCursor = true;
        this.playbtn.events.onInputUp.add(this.enterRoom, this);
        this.playbtn.events.onInputOver.add(this.btnOver, this);
        this.playbtn.events.onInputOut.add(this.btnOut, this);

        game.load.crossOrigin = '*';
        /* this.randomId = game.rnd.integerInRange(0,  RelatedGames.length-1);
            this.thumbVar = game.add.sprite(157, 935, 'thumb_'+this.randomId);
            this.thumbVar.inputEnabled = true;
            this.thumbVar.input.useHandCursor = true;
           this.thumbVar.events.onInputUp.add(this.thumbLink, this);
            this.thumbframeVar = game.add.sprite(155, 935, 'Tump_frame'); 
			this.thumbVar.height=this.thumbframeVar.height-2;
			this.thumbVar.width=this.thumbframeVar.width-2;*/

        if (Main.shutterOn[0]) {
            this.shutter = game.add.sprite(0, 0, 'shutterbg');
            game.add.tween(this.shutter).to({
                y: -850
            }, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                game.add.tween(this.playbtn.scale).to({
                    x: 1,
                    y: 1
                }, 700, Phaser.Easing.Quadratic.Out, true);
                // game.add.tween(this.thumbframeVar).to({y:655}, 700, Phaser.Easing.Quadratic.Out, true);
                // game.add.tween(this.thumbVar).to({y:655}, 700, Phaser.Easing.Quadratic.Out, true);
            }, this);
        }

        this.logoVar = game.add.sprite(5, 5, 'logo');
        this.logoVar.scale.setTo(0.8);
        this.logoVar.inputEnabled = true
        this.logoVar.input.useHandCursor = true;
        // this.logoVar.events.onInputUp.add(this.openLink, this);

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
    thumbLink: function() {
        CreateLinksInGame("Baby-Taylor-Caring-Story-Cooking", "gameover", "thumb", RelatedGames[this.randomId]['id']);
    },
    openLink: function() {
        CreateLinksInGame("Baby-Taylor-Caring-Story-Cooking", "game", "logo");
    },
    moreLink: function() {
        CreateLinksInGame("Baby-Taylor-Caring-Story-Cooking", "game", "more");
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
        Main.map_arr = [0];
        game.add.tween(this.shutter).to({
            y: 0
        }, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
            game.state.start('wakeup_scene');
        });

    },
}
game.state.add('boot', Main.boot);
game.state.add('preloader', Main.preloader);
game.state.add('title', Main.title);
game.state.add('intro', Main.intro);
game.state.add('intro2', Main.intro2);
game.state.add('wakeup_scene', Main.wakeup_scene);
game.state.add('bathroom_scene', Main.bathroom_scene);
game.state.add('bathroom2_scene', Main.bathroom2_scene);
game.state.add('reading_scene', Main.reading_scene);
game.state.add('map_scene', Main.map_scene);
game.state.add('shopping_screen', Main.shopping_screen);
game.state.add('cooking2_screen', Main.cooking2_screen);
game.state.add('cooking1', Main.cooking1);
game.state.add('knok_scene', Main.knok_scene);
game.state.add('final_screen', Main.final_screen);

game.state.start('boot');