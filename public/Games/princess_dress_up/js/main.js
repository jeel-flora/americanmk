var game = new Phaser.Game(504, 800, Phaser.AUTO, 'gameContainer');
var Main = {
    music: null,

    shutterOn: [true],
    makarray: [1, 1, 1, 1, 1, 1],

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
        game.load.spritesheet('soundicon', 'assets/soundicon.png', 127, 134, 2);
        game.load.image('logo', 'assets/logo.png');
        game.load.spritesheet('effects', 'assets/effects.png', 141, 134);
        game.load.spritesheet('effectssd', 'assets/efftes012.png', 367, 335);
        // game.load.spritesheet('t_timer','assets/t_timer.png',160,160,60);
        game.load.spritesheet('arrow', 'assets/arrow.png', 66, 89, 13);
        for (i = 1; i <= 24; i++) {

            game.load.image('barbiedress' + i, 'assets/barbie/barbiedress' + i + '.png');
            game.load.image('barbiebackdress' + i, 'assets/barbie/barbiebackdress' + i + '.png');
        }


        for (i = 1; i <= 8; i++) {

            game.load.image('barbiebackdress' + i, 'assets/barbie/barbiebackdress' + i + '.png');
            game.load.image('barbiefronthair' + i, 'assets/barbie/barbiefronthair' + i + '.png');
        }


        for (i = 1; i <= 8; i++) {
            game.load.image('barbiebackhair' + i, 'assets/barbie/barbiebackhair' + i + '.png');
            // game.load.image('barbiedress'+i,'assets/barbie/barbiedress'+i+'.png');   
            game.load.image('barbiebag' + i, 'assets/barbie/barbiebag' + i + '.png');
            game.load.image('barbieearing' + i, 'assets/barbie/barbieearing' + i + '.png');

            game.load.image('barbienecklace' + i, 'assets/barbie/barbienecklace' + i + '.png');
        }
        for (i = 1; i <= 24; i++) {

            game.load.image('tabledress' + i, 'assets/table/tabledress' + i + '.png');
            game.load.image('barbiehand' + i, 'assets/barbie/barbiehand' + i + '.png');
        }

        for (i = 1; i <= 12; i++) {
            game.load.image('barbieshoe' + i, 'assets/barbie/barbieshoe' + i + '.png');
        }


        for (i = 1; i <= 8; i++) {
            game.load.image('tablehair' + i, 'assets/table/tablehair' + i + '.png');

            game.load.image('tablenecklace' + i, 'assets/table/tablenecklace' + i + '.png');
            game.load.image('tableearing' + i, 'assets/table/tableearing' + i + '.png');

        }
        game.load.image('barbiebg', 'assets/barbie/barbiebg.jpg');
        game.load.image('barbiebody', 'assets/barbie/barbiebody.png');
        game.load.image('barbiehead', 'assets/barbie/barbiehead.png');
        game.load.image('barbihand1', 'assets/barbie/barbihand1.png');
        // game.load.image('barbiehand2','assets/barbie/barbiehand2.png');
        game.load.image('arbiehand3', 'assets/barbie/arbiehand3.png');
        game.load.image('first', 'assets/table/first.png');
        game.load.image('leftarrow', 'assets/barbie/leftarrow.png');
        game.load.image('rightarrow', 'assets/barbie/rightarrow.png');
        game.load.image('dray', 'assets/table/dray.png');

        game.load.image('correct', 'assets/button/correct.png');
        game.load.image('go', 'assets/button/go.png');
        game.load.image('more', 'assets/button/more.png');
        game.load.image('play', 'assets/button/play.png');
        game.load.image('reset', 'assets/button/reset.png');
        game.load.image('introchar', 'assets/intro/introchar.png');
        game.load.image('introletter', 'assets/intro/introletter.png');
        game.load.image('monabody2', 'assets/barbie/monabody2.png');
        game.load.image('barbiebodylsat', 'assets/barbie/barbiebodylsat.png');
        game.load.image('title', 'assets/barbie/title.png');
        game.load.image('download', 'assets/barbie/download.png');
        game.load.image('lastbit', 'assets/table/lastbit.png');
        game.load.image('barbiebodya', 'assets/barbie/barbiebodya.png');
        game.load.image('barbiebody01', 'assets/barbie/barbiebody01.png');
        game.load.image('barbiebodyfinger', 'assets/barbie/barbiebodyfinger.png');
        game.load.image('barbiebody01hand', 'assets/barbie/barbiebody01hand.png');
        game.load.image('barbiebodyfinger', 'assets/barbie/barbiebodyfinger.png');
        game.load.image('t_drr', 'assets/intro/t_drr.png');


        game.load.image('Tump_frame', 'assets/Tump_frame.png');

        //LLLLL
        game.load.onFileComplete.add(this.fileLoadFunPre, this);


    },
    fileLoadFunPre: function(progress, cacheKey, success, totalLoaded, totalFiles) {
        this.progress.setText('LOADING: ' + parseInt(progress) + '%');
        if (progress == 100) {
            this.progress.visible = false;
            game.load.onFileComplete.removeAll();
            //aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa

            // game.state.start('final_screen'); 
            // 
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
                // 
                game.state.start('title');
                // 

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
        this.levelGroup = game.add.group();
        this.barbiebg = game.add.sprite(0, 0, 'barbiebg');
        // this.levelGroup.add(this.barbiebg);



        this.barbiegroup = game.add.group();



        this.barbiebackdress1 = game.add.sprite(322, 444, 'barbiebackdress' + Main.makarray[0]);
        this.barbiebackdress1.anchor.setTo(0.5);
        // this.barbiebackdress1.alpha =Main.arial_alpha[0];
        this.barbiegroup.add(this.barbiebackdress1);


        this.barbiebackhair1 = game.add.sprite(297, 213, 'barbiebackhair7');
        this.barbiebackhair1.anchor.setTo(0.5);
        // this.barbiebackhair1.alpha =Main.arial_alpha[0];
        this.barbiegroup.add(this.barbiebackhair1);

        this.barbiebody01 = game.add.sprite(286, 465, 'barbiebody01' /*+Main.arial_arr[0]*/ );
        this.barbiebody01.anchor.setTo(0.5);
        // this.barbiebody01.alpha =Main.arial_alpha[0];
        this.barbiegroup.add(this.barbiebody01);

        //          this.monabody2= game.add.sprite(286,465,'monabody2'/*+Main.arial_arr[0]*/);
        //        this.monabody2.anchor.setTo(0.5);
        // // this.monabody2.visible=false;
        //        this.barbiegroup.add(this.monabody2);  

        // this.barbiebag1= game.add.sprite(206.7,495.9,'barbiebag'+Main.makarray[5]);
        //        this.barbiebag1.anchor.setTo(0.5);
        //        // this.barbiebag1.alpha =Main.arial_alpha[0];
        //        this.barbiegroup.add(this.barbiebag1); 

        //          this.barbiebodylsat= game.add.sprite(286,465,'barbiebodylsat'/*+Main.arial_arr[0]*/);
        //        this.barbiebodylsat.anchor.setTo(0.5);
        // // this.barbiebodylsat.visible=false;
        //        this.barbiegroup.add(this.barbiebodylsat);  

        this.barbieshoe1 = game.add.sprite(300, 689, 'barbieshoe' + Main.makarray[2]);
        this.barbieshoe1.anchor.setTo(0.5);
        // this.barbieshoe1.alpha =Main.arial_alpha[0];
        this.barbiegroup.add(this.barbieshoe1);

        this.barbiedress1 = game.add.sprite(319.7, 455.9, 'barbiedress10');
        this.barbiedress1.anchor.setTo(0.5);
        // this.barbiedress1.alpha =Main.arial_alpha[0];
        this.barbiegroup.add(this.barbiedress1);

        this.barbienecklace1 = game.add.sprite(302.7, 248.9, 'barbienecklace' + Main.makarray[3]);
        this.barbienecklace1.anchor.setTo(0.5);
        // this.barbienecklace1.alpha =Main.arial_alpha[0];
        this.barbiegroup.add(this.barbienecklace1);

        this.barbiehead = game.add.sprite(298.7, 173.9, 'barbiehead' /*+Main.arial_arr[0]*/ );
        this.barbiehead.anchor.setTo(0.5);
        // this.barbiehead.alpha =Main.arial_alpha[0];
        this.barbiegroup.add(this.barbiehead);

        this.barbiefronthair1 = game.add.sprite(296.7, 218.9, 'barbiefronthair7');
        this.barbiefronthair1.anchor.setTo(0.5);
        // this.barbiefronthair1.alpha =Main.arial_alpha[0];
        this.barbiegroup.add(this.barbiefronthair1);


        this.barbieearing1 = game.add.sprite(267.7, 204.9, 'barbieearing' + Main.makarray[4]);
        this.barbieearing1.anchor.setTo(0.5);
        // this.barbieearing1.alpha =Main.arial_alpha[0];
        this.barbiegroup.add(this.barbieearing1);



        this.b_arbieearing1 = game.add.sprite(332.7, 204.9, 'barbieearing' + Main.makarray[4]);
        this.b_arbieearing1.anchor.setTo(0.5);
        // this.b_arbieearing1.alpha =Main.arial_alpha[0];
        this.barbiegroup.add(this.b_arbieearing1);



        this.barbiebody01hand = game.add.sprite(286, 465, 'barbiebody01hand');
        this.barbiebody01hand.anchor.setTo(0.5);
        this.barbiegroup.add(this.barbiebody01hand);



        this.tabledress3 = game.add.sprite(393, 370, 't_drr');
        this.tabledress3.anchor.setTo(0.5);
        this.tabledress3.scale.setTo(0.5);
        this.barbiegroup.add(this.tabledress3);


        this.barbiebodyfinger = game.add.sprite(286, 465, 'barbiebodyfinger');
        this.barbiebodyfinger.anchor.setTo(0.5);
        this.barbiegroup.add(this.barbiebodyfinger)

        this.barbiegroup.x = 600;
        this.barbiegroup.y = 20;
        this.barbiegroup.scale.x = -this.barbiegroup.scale.x;


        this.title = game.add.sprite(236.7, 660.9, 'title');
        this.title.anchor.setTo(0.5);


        this.morebtn = game.add.sprite(85, 730, 'more');
        this.morebtn.anchor.setTo(0.5);
        this.morebtn.inputEnabled = true;
        this.morebtn.input.useHandCursor = true;
        this.morebtn.events.onInputUp.add(this.moreLink, this);
        this.morebtn.events.onInputOver.add(this.btnOver, this);
        this.morebtn.events.onInputOut.add(this.btnOut, this);

        this.playbtn = game.add.sprite(430, 730, 'play');
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

        this.musicButton = game.add.sprite(407, 5, "soundicon");
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
        this.levelGroup = game.add.group();
        this.barbiebg = game.add.sprite(0, 0, 'barbiebg');
        this.levelGroup.add(this.barbiebg);

        this.introchar = game.add.sprite(220, 440, 'introchar');
        this.introchar.anchor.setTo(0.5);
        this.introchar.scale.setTo(0.76);


        this.morebtn = game.add.sprite(85, 730, 'more');
        this.morebtn.anchor.setTo(0.5);
        this.morebtn.scale.setTo(0);
        this.morebtn.inputEnabled = true;
        this.morebtn.input.useHandCursor = true;
        this.morebtn.events.onInputUp.add(this.moreLink, this);
        this.morebtn.events.onInputOver.add(this.btnOver, this);
        this.morebtn.events.onInputOut.add(this.btnOut, this);

        this.playbtn = game.add.sprite(430, 730, 'go');
        this.playbtn.anchor.setTo(0.5);
        this.playbtn.scale.setTo(0);
        this.playbtn.inputEnabled = true;
        this.playbtn.input.useHandCursor = true;
        this.playbtn.events.onInputUp.add(this.enterRoom, this);
        this.playbtn.events.onInputOver.add(this.btnOver, this);
        this.playbtn.events.onInputOut.add(this.btnOut, this);

        this.popup1 = game.add.sprite(125, 145, 'introletter');
        this.popup1.anchor.setTo(0.5);
        this.popup1.scale.setTo(0);
        // this.levelGroup.add(this.popup1);



        if (Main.shutterOn[0]) {
            this.shutter = game.add.sprite(0, 0, 'download');
            game.add.tween(this.shutter).to({
                y: -850
            }, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(this.startPopUp,
                this)
        }
        this.logoVar = game.add.sprite(5, 5, 'logo');
        this.logoVar.scale.setTo(0.8);
        this.logoVar.inputEnabled = true
        this.logoVar.input.useHandCursor = true;
        this.logoVar.events.onInputUp.add(this.openLink, this);

        this.musicButton = game.add.sprite(407, 5, "soundicon");
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
            x: 0.47,
            y: 0.47
        }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(this.bringPopUp2, this);
    },
    bringPopUp2: function() {
        game.add.tween(this.popup1).to({
            alpha: 0
        }, 700, Phaser.Easing.Quadratic.Out, true, 2900).onComplete.add(this.bringBottons, this);
        // game.add.tween(this.popup2.scale).to({x:1, y:1}, 700, Phaser.Easing.Quadratic.Out, true, 2500).onComplete.add(this.bringPopUp3, this);
    },
    // bringPopUp3:function(){
    //    game.add.tween(this.popup2).to({alpha:0}, 700, Phaser.Easing.Quadratic.Out, true, 2000)
    //    game.add.tween(this.popup3.scale).to({x:1, y:1}, 700, Phaser.Easing.Quadratic.Out, true, 2500).onComplete.add(this.bringBottons, this);
    //    },
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
            MyShowAD('barbie');
        });

    },
}

//baaaaaaaaaaaaaaaaaaaaaaaaaaaaa

Main.barbie = function() {}

Main.barbie.prototype = {
    create: function() {
        this.levelGroup = game.add.group();
        this.d1_arr = [0, 0, 0, 0, 0, 0];


        this.barbiebg = game.add.sprite(0, 0, 'barbiebg');
        this.levelGroup.add(this.barbiebg);


        this.table1group = game.add.group();




        this.first = game.add.sprite(129, 455, 'first');
        this.first.anchor.setTo(0.5);
        this.table1group.add(this.first);



        this.lastbit = game.add.sprite(121, 250, 'lastbit');
        this.lastbit.anchor.setTo(0.5);
        this.lastbit.scale.setTo(0.90);
        this.table1group.add(this.lastbit);


        this.rightarrow = game.add.sprite(120, 170, 'rightarrow');
        this.rightarrow.anchor.setTo(0.5);
        this.table1group.add(this.rightarrow);
        this.rightarrow.inputEnabled = true;
        this.rightarrow.input.useHandCursor = true;
        this.rightarrow.input.pixelPerfectClick = true;
        this.rightarrow.input.pixelPerfectOver = true;
        this.rightarrow.events.onInputDown.add(function() {
            this.table1group.visible = false;
            this.table2group.visible = true;
            this.table3group.visible = false;
            this.table4group.visible = false;



        }, this);





        this.l1_astbit = game.add.sprite(121, 400, 'lastbit');
        this.l1_astbit.anchor.setTo(0.5);
        this.l1_astbit.scale.setTo(0.90);
        this.table1group.add(this.l1_astbit);


        this.tabledress8 = game.add.sprite(130, 416, 'tabledress8');
        this.tabledress8.scale.setTo(0.74);
        this.tabledress8.anchor.setTo(0.5);
        this.table1group.add(this.tabledress8);
        this.tabledress8.inputEnabled = true;
        this.tabledress8.input.pixelPerfectClick = true;
        this.tabledress8.input.pixelPerfectOver = true;
        this.tabledress8.input.useHandCursor = true;
        this.tabledress8.events.onInputDown.add(function() {
            // this.monabody2.visible=false;
            // this.makeblush1.alpha=1;
            this.barbiedress1.loadTexture('barbiedress8');
            this.barbiebackdress1.loadTexture('barbiebackdress8');
            this.barbiehand1.loadTexture('barbiehand8');

            Main.makarray[0] = 8;

            effectssd = game.add.sprite(350, 400, 'effectssd');
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
                }, 400, Phaser.Easing.Bounce.Out, true);
            }
        }, this);

        this.tabledress7 = game.add.sprite(75, 417, 'tabledress7');
        this.tabledress7.scale.setTo(0.8);
        this.tabledress7.anchor.setTo(0.5);
        this.table1group.add(this.tabledress7);
        this.tabledress7.inputEnabled = true;
        this.tabledress7.input.useHandCursor = true;
        //   this.tabledress7.input.pixelPerfectClick=true;
        // this.tabledress7.input.pixelPerfectOver=true;
        this.tabledress7.events.onInputDown.add(function() {
            // this.monabody2.visible=false;
            // this.makeblush1.alpha=1;
            this.barbiedress1.loadTexture('barbiedress7');
            this.barbiebackdress1.loadTexture('barbiebackdress7');
            this.barbiehand1.loadTexture('barbiehand7');

            Main.makarray[0] = 7;

            effectssd = game.add.sprite(350, 400, 'effectssd');
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
                }, 400, Phaser.Easing.Bounce.Out, true);
            }
        }, this);


        this.tabledress6 = game.add.sprite(12, 414, 'tabledress6');
        this.tabledress6.anchor.setTo(0.5);
        this.tabledress6.scale.setTo(0.79);
        this.table1group.add(this.tabledress6);
        this.tabledress6.inputEnabled = true;
        this.tabledress6.input.useHandCursor = true;
        this.tabledress6.input.pixelPerfectClick = true;
        this.tabledress6.input.pixelPerfectOver = true;
        this.tabledress6.events.onInputDown.add(function() {
            // this.monabody2.visible=false;
            // this.makeblush1.alpha=1;
            this.barbiedress1.loadTexture('barbiedress6');
            this.barbiebackdress1.loadTexture('barbiebackdress6');
            this.barbiehand1.loadTexture('barbiehand6');

            Main.makarray[0] = 6;
            effectssd = game.add.sprite(350, 400, 'effectssd');
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
                }, 400, Phaser.Easing.Bounce.Out, true);
            }
        }, this);


        this.tabledress1 = game.add.sprite(-60, 416.4, 'tabledress1');
        this.tabledress1.scale.setTo(0.77);
        this.tabledress1.anchor.setTo(0.5);
        this.table1group.add(this.tabledress1);
        this.tabledress1.inputEnabled = true;
        this.tabledress1.input.useHandCursor = true;
        this.tabledress1.input.pixelPerfectClick = true;
        this.tabledress1.input.pixelPerfectOver = true;
        this.tabledress1.events.onInputDown.add(function() {
            // this.monabody2.visible=false;
            // this.makeblush1.alpha=1;
            this.barbiedress1.loadTexture('barbiedress1');

            this.barbiebackdress1.loadTexture('barbiebackdress1');
            this.barbiehand1.loadTexture('barbiehand1');
            Main.makarray[0] = 1;
            effectssd = game.add.sprite(350, 400, 'effectssd');
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
                }, 400, Phaser.Easing.Bounce.Out, true);
            }
        }, this);

        this.tabledress2 = game.add.sprite(135, 264, 'tabledress2');
        this.tabledress2.scale.setTo(0.8);
        this.tabledress2.anchor.setTo(0.5);
        this.table1group.add(this.tabledress2);
        this.tabledress2.inputEnabled = true;
        this.tabledress2.input.useHandCursor = true;
        //   this.tabledress2.input.pixelPerfectClick=true;
        // this.tabledress2.input.pixelPerfectOver=true;
        this.tabledress2.events.onInputDown.add(function() {
            // this.monabody2.visible=false;
            // this.makeblush1.alpha=1;
            this.barbiedress1.loadTexture('barbiedress2');
            this.barbiebackdress1.loadTexture('barbiebackdress2');
            this.barbiehand1.loadTexture('barbiehand2');

            Main.makarray[0] = 2;

            effectssd = game.add.sprite(350, 400, 'effectssd');
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
                }, 400, Phaser.Easing.Bounce.Out, true);
            }
        }, this);

        this.tabledress3 = game.add.sprite(80, 268, 'tabledress3');
        this.tabledress3.scale.setTo(0.77);
        this.tabledress3.anchor.setTo(0.5);
        this.table1group.add(this.tabledress3);
        this.tabledress3.inputEnabled = true;
        this.tabledress3.input.pixelPerfectClick = true;
        this.tabledress3.input.pixelPerfectOver = true;
        this.tabledress3.input.useHandCursor = true;
        this.tabledress3.events.onInputDown.add(function() {
            // this.monabody2.visible=false;
            // this.makeblush1.alpha=1;
            this.barbiedress1.loadTexture('barbiedress3');
            this.barbiebackdress1.loadTexture('barbiebackdress3');
            this.barbiehand1.loadTexture('barbiehand3');

            Main.makarray[0] = 3;

            effectssd = game.add.sprite(350, 400, 'effectssd');
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
                }, 400, Phaser.Easing.Bounce.Out, true);
            }
        }, this);

        this.tabledress4 = game.add.sprite(10, 270, 'tabledress4');
        this.tabledress4.anchor.setTo(0.5);
        this.tabledress4.scale.setTo(0.88);
        this.table1group.add(this.tabledress4);
        this.tabledress4.inputEnabled = true;
        this.tabledress4.input.useHandCursor = true;
        this.tabledress4.input.pixelPerfectClick = true;
        this.tabledress4.input.pixelPerfectOver = true;
        this.tabledress4.events.onInputDown.add(function() {
            // this.monabody2.visible=false;
            // this.makeblush1.alpha=1;
            this.barbiedress1.loadTexture('barbiedress4');
            this.barbiebackdress1.loadTexture('barbiebackdress4');
            this.barbiehand1.loadTexture('barbiehand4');

            Main.makarray[0] = 4;
            effectssd = game.add.sprite(350, 400, 'effectssd');
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
                }, 400, Phaser.Easing.Bounce.Out, true);
            }
        }, this);


        this.tabledress5 = game.add.sprite(-60, 272, 'tabledress5');
        this.tabledress5.anchor.setTo(0.5);
        this.tabledress5.scale.setTo(0.78);
        this.table1group.add(this.tabledress5);
        this.tabledress5.inputEnabled = true;
        this.tabledress5.input.useHandCursor = true;
        this.tabledress5.input.pixelPerfectClick = true;
        this.tabledress5.input.pixelPerfectOver = true;
        this.tabledress5.events.onInputDown.add(function() {
            //   this.monabody2.visible=false;
            // // this.makeblush1.alpha=1;
            this.barbiedress1.loadTexture('barbiedress5');
            this.barbiebackdress1.loadTexture('barbiebackdress5');
            this.barbiehand1.loadTexture('barbiehand5');

            Main.makarray[0] = 5;
            effectssd = game.add.sprite(350, 400, 'effectssd');
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
                }, 400, Phaser.Easing.Bounce.Out, true);
            }
        }, this);



        this.dray = game.add.sprite(125, 310, 'dray');
        this.dray.anchor.setTo(0.5);
        this.table1group.add(this.dray);


        this.b_arbieshoe1 = game.add.sprite(-70, 528, 'barbieshoe1');
        this.b_arbieshoe1.anchor.setTo(0.5);
        this.table1group.add(this.b_arbieshoe1);
        this.b_arbieshoe1.scale.setTo(0.5);
        this.b_arbieshoe1.inputEnabled = true;
        this.b_arbieshoe1.input.useHandCursor = true;
        //  this.b_arbieshoe1.input.pixelPerfectClick=true;
        // this.b_arbieshoe1.input.pixelPerfectOver=true;   
        this.b_arbieshoe1.events.onInputDown.add(function() {
            // this.monabody2.visible=false;
            // // // this.makeblush1.alpha=1;
            this.barbieshoe1.loadTexture('barbieshoe1');
            //   
            Main.makarray[2] = 1;
            effectssd = game.add.sprite(350, 650, 'effectssd');
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
                }, 400, Phaser.Easing.Bounce.Out, true);
            }
        }, this);




        this.b_arbieshoe2 = game.add.sprite(0, 532, 'barbieshoe2');
        this.b_arbieshoe2.anchor.setTo(0.5);
        this.b_arbieshoe2.scale.setTo(0.5);
        this.table1group.add(this.b_arbieshoe2);
        this.b_arbieshoe2.inputEnabled = true;
        this.b_arbieshoe2.input.useHandCursor = true;
        //  this.b_arbieshoe2.input.pixelPerfectClick=true;
        // this.b_arbieshoe2.input.pixelPerfectOver=true;   
        this.b_arbieshoe2.events.onInputDown.add(function() {
            // this.monabody2.visible=false;
            // // // this.makeblush1.alpha=1;
            this.barbieshoe1.loadTexture('barbieshoe2');

            Main.makarray[2] = 2;

            effectssd = game.add.sprite(350, 650, 'effectssd');
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
                }, 400, Phaser.Easing.Bounce.Out, true);
            }
        }, this);



        this.b_arbieshoe3 = game.add.sprite(60, 532, 'barbieshoe3');
        this.b_arbieshoe3.anchor.setTo(0.5);
        this.b_arbieshoe3.scale.setTo(0.5);
        this.table1group.add(this.b_arbieshoe3);
        this.b_arbieshoe3.inputEnabled = true;
        this.b_arbieshoe3.input.useHandCursor = true;
        //  this.b_arbieshoe3.input.pixelPerfectClick=true;
        // this.b_arbieshoe3.input.pixelPerfectOver=true;   
        this.b_arbieshoe3.events.onInputDown.add(function() {
            // this.monabody2.visible=false;
            // // // this.makeblush1.alpha=1;
            this.barbieshoe1.loadTexture('barbieshoe3');

            Main.makarray[2] = 3;

            effectssd = game.add.sprite(350, 650, 'effectssd');
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
                }, 400, Phaser.Easing.Bounce.Out, true);
            }
        }, this);




        this.b_arbieshoe4 = game.add.sprite(120, 532, 'barbieshoe4');
        this.b_arbieshoe4.anchor.setTo(0.5);
        this.b_arbieshoe4.scale.setTo(0.5);
        this.table1group.add(this.b_arbieshoe4);
        this.b_arbieshoe4.inputEnabled = true;
        this.b_arbieshoe4.input.useHandCursor = true;
        //  this.b_arbieshoe4.input.pixelPerfectClick=true;
        // this.b_arbieshoe4.input.pixelPerfectOver=true;   
        this.b_arbieshoe4.events.onInputDown.add(function() {
            // // // this.makeblush1.alpha=1;
            // this.monabody2.visible=false;
            //    
            this.barbieshoe1.loadTexture('barbieshoe4');
            //    
            Main.makarray[2] = 4;
            effectssd = game.add.sprite(350, 650, 'effectssd');
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
                }, 400, Phaser.Easing.Bounce.Out, true);
            }
        }, this);


        this.d1ray = game.add.sprite(125, 380, 'dray');
        this.d1ray.anchor.setTo(0.5);
        this.table1group.add(this.d1ray);

        this.d1_ray = game.add.sprite(125, 443, 'dray');
        this.d1_ray.anchor.setTo(0.5);
        this.table1group.add(this.d1_ray);


        this.b_arbieshoe5 = game.add.sprite(-60, 600, 'barbieshoe5');
        this.b_arbieshoe5.anchor.setTo(0.5);
        this.b_arbieshoe5.scale.setTo(0.5);
        this.table1group.add(this.b_arbieshoe5);
        this.b_arbieshoe5.inputEnabled = true;
        this.b_arbieshoe5.input.useHandCursor = true;
        //  this.b_arbieshoe5.input.pixelPerfectClick=true;
        // this.b_arbieshoe5.input.pixelPerfectOver=true;   
        this.b_arbieshoe5.events.onInputDown.add(function() {
            // // // this.makeblush1.alpha=1;
            // this.monabody2.visible=false;
            //    
            this.barbieshoe1.loadTexture('barbieshoe5');
            //     
            Main.makarray[2] = 5;
            effectssd = game.add.sprite(350, 650, 'effectssd');
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
                }, 400, Phaser.Easing.Bounce.Out, true);
            }
        }, this);


        this.b_arbieshoe6 = game.add.sprite(0, 610, 'barbieshoe6');
        this.b_arbieshoe6.anchor.setTo(0.5);
        this.b_arbieshoe6.scale.setTo(0.37);
        this.table1group.add(this.b_arbieshoe6);
        this.b_arbieshoe6.inputEnabled = true;
        this.b_arbieshoe6.input.useHandCursor = true;
        //  this.b_arbieshoe6.input.pixelPerfectClick=true;
        // this.b_arbieshoe6.input.pixelPerfectOver=true;   
        this.b_arbieshoe6.events.onInputDown.add(function() {
            // this.monabody2.visible=false;
            // // // this.makeblush1.alpha=1;
            this.barbieshoe1.loadTexture('barbieshoe6');
            //   
            Main.makarray[2] = 6;
            effectssd = game.add.sprite(350, 650, 'effectssd');
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
                }, 400, Phaser.Easing.Bounce.Out, true);
            }
        }, this);



        this.b_arbieshoe7 = game.add.sprite(70, 600, 'barbieshoe7');
        this.b_arbieshoe7.anchor.setTo(0.5);
        this.b_arbieshoe7.scale.setTo(0.5);
        this.table1group.add(this.b_arbieshoe7);
        this.b_arbieshoe7.inputEnabled = true;
        this.b_arbieshoe7.input.useHandCursor = true;
        //  this.b_arbieshoe7.input.pixelPerfectClick=true;
        // this.b_arbieshoe7.input.pixelPerfectOver=true;   
        this.b_arbieshoe7.events.onInputDown.add(function() {
            // this.monabody2.visible=false;
            // // // this.makeblush1.alpha=1;
            this.barbieshoe1.loadTexture('barbieshoe7');

            Main.makarray[2] = 7;
            effectssd = game.add.sprite(350, 650, 'effectssd');
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
                }, 400, Phaser.Easing.Bounce.Out, true);
            }
        }, this);


        this.b_arbieshoe8 = game.add.sprite(130, 600, 'barbieshoe8');
        this.b_arbieshoe8.anchor.setTo(0.5);
        this.b_arbieshoe8.scale.setTo(0.5);
        this.table1group.add(this.b_arbieshoe8);
        this.b_arbieshoe8.inputEnabled = true;
        this.b_arbieshoe8.input.useHandCursor = true;
        //  this.b_arbieshoe8.input.pixelPerfectClick=true;
        // this.b_arbieshoe8.input.pixelPerfectOver=true;   
        this.b_arbieshoe8.events.onInputDown.add(function() {
            // this.monabody2.visible=false;
            // // // this.makeblush1.alpha=1;
            this.barbieshoe1.loadTexture('barbieshoe8');

            Main.makarray[2] = 8;
            effectssd = game.add.sprite(350, 650, 'effectssd');
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
                }, 400, Phaser.Easing.Bounce.Out, true);
            }
        }, this);
        /////////


        this.b_arbieshoe9 = game.add.sprite(-60, 660, 'barbieshoe9');
        this.b_arbieshoe9.anchor.setTo(0.5);
        this.b_arbieshoe9.scale.setTo(0.5);
        this.table1group.add(this.b_arbieshoe9);
        this.b_arbieshoe9.inputEnabled = true;
        this.b_arbieshoe9.input.useHandCursor = true;
        //  this.b_arbieshoe9.input.pixelPerfectClick=true;
        // this.b_arbieshoe9.input.pixelPerfectOver=true;   
        this.b_arbieshoe9.events.onInputDown.add(function() {
            // this.monabody2.visible=false;
            // // // this.makeblush1.alpha=1;
            this.barbieshoe1.loadTexture('barbieshoe9');

            Main.makarray[2] = 9;
            effectssd = game.add.sprite(350, 650, 'effectssd');
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
                }, 400, Phaser.Easing.Bounce.Out, true);
            }
        }, this);

        this.b_arbieshoe10 = game.add.sprite(0, 660, 'barbieshoe10');
        this.b_arbieshoe10.anchor.setTo(0.5);
        this.b_arbieshoe10.scale.setTo(0.45);
        this.table1group.add(this.b_arbieshoe10);
        this.b_arbieshoe10.inputEnabled = true;
        this.b_arbieshoe10.input.useHandCursor = true;
        //  this.b_arbieshoe10.input.pixelPerfectClick=true;
        // this.b_arbieshoe10.input.pixelPerfectOver=true;   
        this.b_arbieshoe10.events.onInputDown.add(function() {
            // this.monabody2.visible=false;
            // // // this.makeblush1.alpha=1;
            this.barbieshoe1.loadTexture('barbieshoe10');

            Main.makarray[2] = 10;
            effectssd = game.add.sprite(350, 650, 'effectssd');
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
                }, 400, Phaser.Easing.Bounce.Out, true);
            }
        }, this);


        this.b_arbieshoe11 = game.add.sprite(60, 660, 'barbieshoe11');
        this.b_arbieshoe11.anchor.setTo(0.5);
        this.b_arbieshoe11.scale.setTo(0.5);
        this.table1group.add(this.b_arbieshoe11);
        this.b_arbieshoe11.inputEnabled = true;
        this.b_arbieshoe11.input.useHandCursor = true;
        //  this.b_arbieshoe11.input.pixelPerfectClick=true;
        // this.b_arbieshoe11.input.pixelPerfectOver=true;   
        this.b_arbieshoe11.events.onInputDown.add(function() {
            // this.monabody2.visible=false;
            // // // this.makeblush1.alpha=1;
            this.barbieshoe1.loadTexture('barbieshoe11');

            Main.makarray[2] = 11;
            effectssd = game.add.sprite(350, 650, 'effectssd');
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
                }, 400, Phaser.Easing.Bounce.Out, true);
            }
        }, this);

        this.b_arbieshoe12 = game.add.sprite(125, 660, 'barbieshoe12');
        this.b_arbieshoe12.anchor.setTo(0.5);
        this.b_arbieshoe12.scale.setTo(0.45);
        this.table1group.add(this.b_arbieshoe12);
        this.b_arbieshoe12.inputEnabled = true;
        this.b_arbieshoe12.input.useHandCursor = true;
        //  this.b_arbieshoe12.input.pixelPerfectClick=true;
        // this.b_arbieshoe12.input.pixelPerfectOver=true;   
        this.b_arbieshoe12.events.onInputDown.add(function() {
            // this.monabody2.visible=false;
            // // // this.makeblush1.alpha=1;
            this.barbieshoe1.loadTexture('barbieshoe12');
            Main.makarray[2] = 12;
            effectssd = game.add.sprite(350, 650, 'effectssd');
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
                }, 400, Phaser.Easing.Bounce.Out, true);
            }
        }, this);

        // this.table1group.visible=false;
        /////////////////////////////////////////////////////////////////////////////////////////////
        this.table2group = game.add.group();
        // this.table2group.visible=false;

        this.first = game.add.sprite(129, 455, 'first');
        this.first.anchor.setTo(0.5);
        this.table2group.add(this.first);



        this.lastbit = game.add.sprite(121, 250, 'lastbit');
        this.lastbit.anchor.setTo(0.5);
        this.lastbit.scale.setTo(0.90);
        this.table2group.add(this.lastbit);

        this.leftarrow = game.add.sprite(-60, 170, 'leftarrow');
        this.leftarrow.anchor.setTo(0.5);
        this.table2group.add(this.leftarrow);
        this.leftarrow.inputEnabled = true;
        this.leftarrow.input.useHandCursor = true;
        this.leftarrow.input.pixelPerfectClick = true;
        this.leftarrow.input.pixelPerfectOver = true;
        this.leftarrow.events.onInputDown.add(function() {
            this.table1group.visible = true;
            this.table2group.visible = false;
            this.table3group.visible = false;
            this.table4group.visible = false;
            // this.table5group.visible=false;
            // this.table6group.visible=false;
            // this.table7group.visible=false;
            // this.table8group.visible=false;
            // this.table9group.visible=false;
            // this.table10group.visible=false;
        }, this);
        this.rightarrow = game.add.sprite(120, 170, 'rightarrow');
        this.rightarrow.anchor.setTo(0.5);
        this.table2group.add(this.rightarrow);
        this.rightarrow.inputEnabled = true;
        this.rightarrow.input.useHandCursor = true;
        this.rightarrow.input.pixelPerfectClick = true;
        this.rightarrow.input.pixelPerfectOver = true;
        this.rightarrow.events.onInputDown.add(function() {
            this.table3group.visible = true;
            this.table2group.visible = false;
            this.table1group.visible = false;
            this.table4group.visible = false;
            // this.table5group.visible=false;
            // this.table6group.visible=false;
            // this.table7group.visible=false;
            // this.table8group.visible=false;
            // this.table9group.visible=false;
            // this.table10group.visible=false;
        }, this);




        this.tabledress9 = game.add.sprite(130, 275, 'tabledress9');
        this.tabledress9.anchor.setTo(0.5);
        this.tabledress9.scale.setTo(0.86);
        this.table2group.add(this.tabledress9);
        this.tabledress9.inputEnabled = true;
        this.tabledress9.input.useHandCursor = true;
        this.tabledress9.input.pixelPerfectClick = true;
        this.tabledress9.input.pixelPerfectOver = true;
        this.tabledress9.events.onInputDown.add(function() {
            // this.monabody2.visible=false;
            // this.makeblush1.alpha=1;
            this.barbiedress1.loadTexture('barbiedress9');
            this.barbiebackdress1.loadTexture('barbiebackdress9');
            this.barbiehand1.loadTexture('barbiehand9');

            Main.makarray[0] = 9;
            effectssd = game.add.sprite(350, 400, 'effectssd');
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
                }, 400, Phaser.Easing.Bounce.Out, true);
            }
        }, this);


        this.tabledress10 = game.add.sprite(77, 271, 'tabledress10');
        this.tabledress10.scale.setTo(0.82);
        this.tabledress10.anchor.setTo(0.5);
        this.table2group.add(this.tabledress10);
        this.tabledress10.inputEnabled = true;
        this.tabledress10.input.useHandCursor = true;
        this.tabledress10.input.pixelPerfectClick = true;
        this.tabledress10.input.pixelPerfectOver = true;
        this.tabledress10.events.onInputDown.add(function() {
            // this.monabody2.visible=false;
            // this.makeblush1.alpha=1;
            this.barbiedress1.loadTexture('barbiedress10');
            this.barbiebackdress1.loadTexture('barbiebackdress10');
            this.barbiehand1.loadTexture('barbiehand10');

            Main.makarray[0] = 10;
            effectssd = game.add.sprite(350, 400, 'effectssd');
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
                }, 400, Phaser.Easing.Bounce.Out, true);
            }
        }, this);

        this.tabledress11 = game.add.sprite(10, 272, 'tabledress11');
        this.tabledress11.scale.setTo(0.9);
        this.tabledress11.anchor.setTo(0.5);
        this.table2group.add(this.tabledress11);
        this.tabledress11.inputEnabled = true;
        this.tabledress11.input.useHandCursor = true;
        this.tabledress11.input.pixelPerfectClick = true;
        this.tabledress11.input.pixelPerfectOver = true;
        this.tabledress11.events.onInputDown.add(function() {
            // this.monabody2.visible=false;
            // this.makeblush1.alpha=1;
            this.barbiedress1.loadTexture('barbiedress11');
            this.barbiebackdress1.loadTexture('barbiebackdress11');
            this.barbiehand1.loadTexture('barbiehand11');

            Main.makarray[0] = 11;
            effectssd = game.add.sprite(350, 400, 'effectssd');
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
                }, 400, Phaser.Easing.Bounce.Out, true);
            }
        }, this);

        this.tabledress12 = game.add.sprite(-50, 274, 'tabledress12');
        this.tabledress12.anchor.setTo(0.5);
        this.tabledress12.scale.setTo(0.33);
        this.table2group.add(this.tabledress12);
        this.tabledress12.inputEnabled = true;
        this.tabledress12.input.useHandCursor = true;
        this.tabledress12.input.pixelPerfectClick = true;
        this.tabledress12.input.pixelPerfectOver = true;
        this.tabledress12.events.onInputDown.add(function() {
            // this.monabody2.visible=false; 
            // this.makeblush1.alpha=1;
            this.barbiedress1.loadTexture('barbiedress12');
            this.barbiebackdress1.loadTexture('barbiebackdress12');
            this.barbiehand1.loadTexture('barbiehand12');

            Main.makarray[0] = 12;

            effectssd = game.add.sprite(350, 400, 'effectssd');
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
                }, 400, Phaser.Easing.Bounce.Out, true);
            }
        }, this);
        //////



        this.lastbit = game.add.sprite(121, 400, 'lastbit');
        this.lastbit.anchor.setTo(0.5);
        this.lastbit.scale.setTo(0.90);
        this.table2group.add(this.lastbit);


        this.tabledress13 = game.add.sprite(135, 442, 'tabledress13');
        this.tabledress13.scale.setTo(0.41);
        this.tabledress13.anchor.setTo(0.5);
        this.table2group.add(this.tabledress13);
        this.tabledress13.inputEnabled = true;
        //   this.tabledress13.input.pixelPerfectClick=true;
        // this.tabledress13.input.pixelPerfectOver=true;
        this.tabledress13.input.useHandCursor = true;
        this.tabledress13.events.onInputDown.add(function() {
            // this.monabody2.visible=false;
            // this.makeblush1.alpha=1;
            this.barbiedress1.loadTexture('barbiedress13');
            this.barbiebackdress1.loadTexture('barbiebackdress13');
            this.barbiehand1.loadTexture('barbiehand13');

            Main.makarray[0] = 13;

            effectssd = game.add.sprite(350, 400, 'effectssd');
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
                }, 400, Phaser.Easing.Bounce.Out, true);
            }
        }, this);

        this.tabledress14 = game.add.sprite(78, 423, 'tabledress14');
        this.tabledress14.scale.setTo(0.32);
        this.tabledress14.anchor.setTo(0.5);
        this.table2group.add(this.tabledress14);
        this.tabledress14.inputEnabled = true;
        this.tabledress14.input.useHandCursor = true;
        this.tabledress14.input.pixelPerfectClick = true;
        this.tabledress14.input.pixelPerfectOver = true;
        this.tabledress14.events.onInputDown.add(function() {
            // this.monabody2.visible=false;
            // this.makeblush1.alpha=1;
            this.barbiedress1.loadTexture('barbiedress14');
            this.barbiebackdress1.loadTexture('barbiebackdress14');
            this.barbiehand1.loadTexture('barbiehand14');

            Main.makarray[0] = 14;
            effectssd = game.add.sprite(350, 400, 'effectssd');
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
                }, 400, Phaser.Easing.Bounce.Out, true);
            }
        }, this);


        this.tabledress15 = game.add.sprite(8, 422, 'tabledress15');
        this.tabledress15.scale.setTo(0.82);
        this.tabledress15.anchor.setTo(0.5);
        this.table2group.add(this.tabledress15);
        this.tabledress15.inputEnabled = true;
        this.tabledress15.input.useHandCursor = true;
        this.tabledress15.input.pixelPerfectClick = true;
        this.tabledress15.input.pixelPerfectOver = true;
        this.tabledress15.events.onInputDown.add(function() {
            // this.monabody2.visible=false;
            // this.makeblush1.alpha=1;
            this.barbiedress1.loadTexture('barbiedress15');
            this.barbiebackdress1.loadTexture('barbiebackdress15');
            this.barbiehand1.loadTexture('barbiehand15');

            Main.makarray[0] = 15;
            effectssd = game.add.sprite(350, 400, 'effectssd');
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
                }, 400, Phaser.Easing.Bounce.Out, true);
            }
        }, this);

        this.tabledress16 = game.add.sprite(-65, 422, 'tabledress16');
        this.tabledress16.anchor.setTo(0.5);
        this.tabledress16.scale.setTo(0.9);
        this.table2group.add(this.tabledress16);
        this.tabledress16.inputEnabled = true;
        this.tabledress16.input.useHandCursor = true;
        //  this.tabledress16.input.pixelPerfectClick=true;
        // this.tabledress16.input.pixelPerfectOver=true;   
        this.tabledress16.events.onInputDown.add(function() {
            // this.monabody2.visible=false;
            // this.makeblush1.alpha=1;
            this.barbiedress1.loadTexture('barbiedress16');
            this.barbiebackdress1.loadTexture('barbiebackdress16');
            this.barbiehand1.loadTexture('barbiehand16');

            Main.makarray[0] = 16;

            effectssd = game.add.sprite(350, 400, 'effectssd');
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
                }, 400, Phaser.Easing.Bounce.Out, true);
            }
        }, this);


        this.d1_ray = game.add.sprite(125, 313, 'dray');
        this.d1_ray.anchor.setTo(0.5);
        this.table2group.add(this.d1_ray);


        this.d1_ray = game.add.sprite(125, 413, 'dray');
        this.d1_ray.anchor.setTo(0.5);
        this.table2group.add(this.d1_ray);

        this.tablehair1 = game.add.sprite(-70, 560, 'tablehair1');
        this.tablehair1.anchor.setTo(0.5);
        this.tablehair1.scale.setTo(0.5);
        this.table2group.add(this.tablehair1);
        this.tablehair1.inputEnabled = true;
        this.tablehair1.input.useHandCursor = true;
        this.tablehair1.input.pixelPerfectClick = true;
        this.tablehair1.input.pixelPerfectOver = true;
        this.tablehair1.events.onInputDown.add(function() {
            // this.monabody2.visible=false;
            // // this.makeblush1.alpha=1;
            this.barbiefronthair1.loadTexture('barbiefronthair1');
            this.barbiebackhair1.loadTexture('barbiebackhair1');
            Main.makarray[1] = 1;


            if (Main.makarray[1] == 5) {
                this.barbieearing1.visible = true;
                this.b_arbieearing1.visible = false;

            } else {
                this.barbieearing1.visible = true;
                this.b_arbieearing1.visible = true;
            }
            effectssd = game.add.sprite(350, 200, 'effectssd');
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
                }, 400, Phaser.Easing.Bounce.Out, true);
            }
        }, this);



        this.tablehair2 = game.add.sprite(0, 560, 'tablehair2');
        this.tablehair2.scale.setTo(0.5);
        this.tablehair2.anchor.setTo(0.5);
        this.table2group.add(this.tablehair2);
        this.tablehair2.inputEnabled = true;
        this.tablehair2.input.useHandCursor = true;
        this.tablehair2.input.pixelPerfectClick = true;
        this.tablehair2.input.pixelPerfectOver = true;
        this.tablehair2.events.onInputDown.add(function() {
            // this.monabody2.visible=false;
            // // this.makeblush1.alpha=1;
            this.barbiefronthair1.loadTexture('barbiefronthair2');
            this.barbiebackhair1.loadTexture('barbiebackhair2');
            Main.makarray[1] = 2;


            if (Main.makarray[1] == 5) {
                this.barbieearing1.visible = true;
                this.b_arbieearing1.visible = false;

            } else {
                this.barbieearing1.visible = true;
                this.b_arbieearing1.visible = true;
            }
            //      
            effectssd = game.add.sprite(350, 200, 'effectssd');
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
                }, 400, Phaser.Easing.Bounce.Out, true);
            }
        }, this);



        this.tablehair3 = game.add.sprite(65, 560, 'tablehair3');
        this.tablehair3.scale.setTo(0.5);
        this.tablehair3.anchor.setTo(0.5);
        this.table2group.add(this.tablehair3);
        this.tablehair3.inputEnabled = true;
        this.tablehair3.input.useHandCursor = true;
        this.tablehair3.input.pixelPerfectClick = true;
        this.tablehair3.input.pixelPerfectOver = true;
        this.tablehair3.events.onInputDown.add(function() {
            // this.monabody2.visible=false;
            // // this.makeblush1.alpha=1;
            this.barbiefronthair1.loadTexture('barbiefronthair3');
            this.barbiebackhair1.loadTexture('barbiebackhair3');
            Main.makarray[1] = 3;


            if (Main.makarray[1] == 5) {
                this.barbieearing1.visible = true;
                this.b_arbieearing1.visible = false;

            } else {
                this.barbieearing1.visible = true;
                this.b_arbieearing1.visible = true;
            }
            effectssd = game.add.sprite(350, 200, 'effectssd');
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
                }, 400, Phaser.Easing.Bounce.Out, true);
            }
        }, this);



        //    

        this.tablehair4 = game.add.sprite(130, 565, 'tablehair4');
        this.tablehair4.anchor.setTo(0.5);
        this.tablehair4.scale.setTo(0.47);

        this.table2group.add(this.tablehair4);
        this.tablehair4.inputEnabled = true;
        this.tablehair4.input.useHandCursor = true;
        this.tablehair4.input.pixelPerfectClick = true;
        this.tablehair4.input.pixelPerfectOver = true;
        this.tablehair4.events.onInputDown.add(function() {
            // this.monabody2.visible=false;
            // // this.makeblush1.alpha=1;
            this.barbiefronthair1.loadTexture('barbiefronthair4');
            this.barbiebackhair1.loadTexture('barbiebackhair4');
            Main.makarray[1] = 4;
            //   


            if (Main.makarray[1] == 5) {
                this.barbieearing1.visible = true;
                this.b_arbieearing1.visible = false;

            } else {
                this.barbieearing1.visible = true;
                this.b_arbieearing1.visible = true;
            }
            effectssd = game.add.sprite(350, 200, 'effectssd');
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
                }, 400, Phaser.Easing.Bounce.Out, true);
            }
        }, this);
        /////////////////



        this.tablehair5 = game.add.sprite(-70, 653, 'tablehair5');
        this.tablehair5.anchor.setTo(0.5);
        this.tablehair5.scale.setTo(0.5);
        this.table2group.add(this.tablehair5);
        this.tablehair5.inputEnabled = true;
        this.tablehair5.input.useHandCursor = true;
        this.tablehair5.input.pixelPerfectClick = true;
        this.tablehair5.input.pixelPerfectOver = true;
        this.tablehair5.events.onInputDown.add(function() {
            // this.monabody2.visible=false;
            // // this.makeblush1.alpha=1;

            this.barbiefronthair1.loadTexture('barbiefronthair5');
            this.barbiebackhair1.loadTexture('barbiebackhair5');

            Main.makarray[1] = 5;


            if (Main.makarray[1] == 5) {
                this.barbieearing1.visible = true;
                this.b_arbieearing1.visible = false;

            } else {
                this.barbieearing1.visible = true;
                this.b_arbieearing1.visible = true;
            }
            //      
            effectssd = game.add.sprite(350, 200, 'effectssd');
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
                }, 400, Phaser.Easing.Bounce.Out, true);
            }
        }, this);




        this.tablehair6 = game.add.sprite(0, 653, 'tablehair6');
        this.tablehair6.anchor.setTo(0.5);
        this.tablehair6.scale.setTo(0.5);
        this.table2group.add(this.tablehair6);
        this.tablehair6.inputEnabled = true;
        this.tablehair6.input.useHandCursor = true;
        this.tablehair6.input.pixelPerfectClick = true;
        this.tablehair6.input.pixelPerfectOver = true;
        this.tablehair6.events.onInputDown.add(function() {
            // this.monabody2.visible=false;
            // // this.makeblush1.alpha=1;
            this.barbiefronthair1.loadTexture('barbiefronthair6');
            this.barbiebackhair1.loadTexture('barbiebackhair6');
            Main.makarray[1] = 6;
            //      
            if (Main.makarray[1] == 5) {
                this.barbieearing1.visible = true;
                this.b_arbieearing1.visible = false;

            } else {
                this.barbieearing1.visible = true;
                this.b_arbieearing1.visible = true;
            }
            effectssd = game.add.sprite(350, 200, 'effectssd');
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
                }, 400, Phaser.Easing.Bounce.Out, true);
            }
        }, this);



        this.tablehair7 = game.add.sprite(70, 653, 'tablehair7');
        this.tablehair7.anchor.setTo(0.5);
        this.tablehair7.scale.setTo(0.48);
        this.table2group.add(this.tablehair7);
        this.tablehair7.inputEnabled = true;
        this.tablehair7.input.useHandCursor = true;
        this.tablehair7.input.pixelPerfectClick = true;
        this.tablehair7.input.pixelPerfectOver = true;
        this.tablehair7.events.onInputDown.add(function() {
            // this.monabody2.visible=false;
            // // this.makeblush1.alpha=1;
            this.barbiefronthair1.loadTexture('barbiefronthair7');
            this.barbiebackhair1.loadTexture('barbiebackhair7');
            Main.makarray[1] = 7;
            //        
            if (Main.makarray[1] == 5) {
                this.barbieearing1.visible = true;
                this.b_arbieearing1.visible = false;

            } else {
                this.barbieearing1.visible = true;
                this.b_arbieearing1.visible = true;
            }
            effectssd = game.add.sprite(350, 200, 'effectssd');
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
                }, 400, Phaser.Easing.Bounce.Out, true);
            }
        }, this);


        this.tablehair8 = game.add.sprite(140, 653, 'tablehair8');
        this.tablehair8.anchor.setTo(0.5);
        this.tablehair8.scale.setTo(0.5);

        this.table2group.add(this.tablehair8);
        this.tablehair8.inputEnabled = true;
        this.tablehair8.input.useHandCursor = true;
        this.tablehair8.input.pixelPerfectClick = true;
        this.tablehair8.input.pixelPerfectOver = true;
        this.tablehair8.events.onInputDown.add(function() {
            // this.monabody2.visible=false;
            // // this.makeblush1.alpha=1;
            this.barbiefronthair1.loadTexture('barbiefronthair8');
            this.barbiebackhair1.loadTexture('barbiebackhair8');
            Main.makarray[1] = 8;
            if (Main.makarray[1] == 5) {
                this.barbieearing1.visible = true;
                this.b_arbieearing1.visible = false;

            } else {
                this.barbieearing1.visible = true;
                this.b_arbieearing1.visible = true;
            }
            effectssd = game.add.sprite(350, 200, 'effectssd');
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
                }, 400, Phaser.Easing.Bounce.Out, true);
            }
        }, this);

        this.table2group.visible = false;

        /////////////////////////////////////////////////////////////////////////////////////
        this.table3group = game.add.group();
        // this.table3group.visible=false;


        this.first = game.add.sprite(129, 455, 'first');
        this.first.anchor.setTo(0.5);
        this.table3group.add(this.first);



        this.lastbit = game.add.sprite(121, 250, 'lastbit');
        this.lastbit.anchor.setTo(0.5);
        this.lastbit.scale.setTo(0.90);
        this.table3group.add(this.lastbit);


        this.leftarrow = game.add.sprite(-60, 170, 'leftarrow');
        this.leftarrow.anchor.setTo(0.5);
        this.table3group.add(this.leftarrow);
        this.leftarrow.inputEnabled = true;
        this.leftarrow.input.useHandCursor = true;
        this.leftarrow.input.pixelPerfectClick = true;
        this.leftarrow.input.pixelPerfectOver = true;
        this.leftarrow.events.onInputDown.add(function() {
            this.table1group.visible = false;
            this.table2group.visible = true;
            this.table3group.visible = false;
            this.table4group.visible = false;
            // this.table5group.visible=false;
            // this.table6group.visible=false;
            // this.table7group.visible=false;
            // this.table8group.visible=false;
            // this.table9group.visible=false;
            // this.table10group.visible=false;
        }, this);


        this.rightarrow = game.add.sprite(120, 170, 'rightarrow');
        this.rightarrow.anchor.setTo(0.5);
        this.table3group.add(this.rightarrow);
        this.rightarrow.inputEnabled = true;
        this.rightarrow.input.useHandCursor = true;
        this.rightarrow.input.pixelPerfectClick = true;
        this.rightarrow.input.pixelPerfectOver = true;
        this.rightarrow.events.onInputDown.add(function() {
            this.table1group.visible = false;
            this.table2group.visible = false;
            this.table3group.visible = false;
            this.table4group.visible = true;
            // this.table5group.visible=false;
            // this.table6group.visible=false;
            // this.table7group.visible=false;
            // this.table8group.visible=false;
            // this.table9group.visible=false;
            // this.table10group.visible=false;

        }, this);

        this.tabledress17 = game.add.sprite(125, 267.5, 'tabledress17');
        this.tabledress17.anchor.setTo(0.5);
        this.tabledress17.scale.setTo(0.8);
        this.table3group.add(this.tabledress17);
        this.tabledress17.inputEnabled = true;
        this.tabledress17.input.useHandCursor = true;
        //   this.tabledress17.input.pixelPerfectClick=true;
        // this.tabledress17.input.pixelPerfectOver=true;
        this.tabledress17.events.onInputDown.add(function() {
            // this.monabody2.visible=false;
            // this.makeblush1.alpha=1;
            this.barbiedress1.loadTexture('barbiedress17');
            this.barbiebackdress1.loadTexture('barbiebackdress17');
            this.barbiehand1.loadTexture('barbiehand17');

            Main.makarray[0] = 17;

            effectssd = game.add.sprite(350, 400, 'effectssd');
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
                }, 400, Phaser.Easing.Bounce.Out, true);
            }
        }, this);

        this.tabledress18 = game.add.sprite(65, 268.5, 'tabledress18');
        this.tabledress18.scale.setTo(0.77);
        this.tabledress18.anchor.setTo(0.5);
        this.table3group.add(this.tabledress18);
        this.tabledress18.inputEnabled = true;
        //   this.tabledress18.input.pixelPerfectClick=true;
        // this.tabledress18.input.pixelPerfectOver=true;
        this.tabledress18.input.useHandCursor = true;
        this.tabledress18.events.onInputDown.add(function() {
            // this.monabody2.visible=false;
            // this.makeblush1.alpha=1;
            this.barbiedress1.loadTexture('barbiedress18');
            this.barbiebackdress1.loadTexture('barbiebackdress18');
            this.barbiehand1.loadTexture('barbiehand18');

            Main.makarray[0] = 18;

            effectssd = game.add.sprite(350, 400, 'effectssd');
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
                }, 400, Phaser.Easing.Bounce.Out, true);
            }
        }, this);

        this.tabledress19 = game.add.sprite(-8, 281, 'tabledress19');
        this.tabledress19.anchor.setTo(0.5);
        this.tabledress19.scale.setTo(0.63);
        this.table3group.add(this.tabledress19);
        this.tabledress19.inputEnabled = true;
        this.tabledress19.input.useHandCursor = true;
        //  this.tabledress19.input.pixelPerfectClick=true;
        // this.tabledress19.input.pixelPerfectOver=true;
        this.tabledress19.events.onInputDown.add(function() {
            // this.monabody2.visible=false;
            // this.makeblush1.alpha=1;
            this.barbiedress1.loadTexture('barbiedress19');
            this.barbiebackdress1.loadTexture('barbiebackdress19');
            this.barbiehand1.loadTexture('barbiehand19');

            Main.makarray[0] = 19;
            effectssd = game.add.sprite(350, 400, 'effectssd');
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
                }, 400, Phaser.Easing.Bounce.Out, true);
            }
        }, this);


        this.tabledress20 = game.add.sprite(-60, 273, 'tabledress20');
        this.tabledress20.scale.setTo(0.7);
        this.tabledress20.anchor.setTo(0.5);
        this.table3group.add(this.tabledress20);
        this.tabledress20.inputEnabled = true;
        this.tabledress20.input.useHandCursor = true;
        //     this.tabledress20.input.pixelPerfectClick=true;
        // this.tabledress20.input.pixelPerfectOver=true;   
        this.tabledress20.events.onInputDown.add(function() {
            // this.monabody2.visible=false;
            // this.makeblush1.alpha=1;
            this.barbiedress1.loadTexture('barbiedress20');
            this.barbiebackdress1.loadTexture('barbiebackdress20');
            this.barbiehand1.loadTexture('barbiehand20');

            Main.makarray[0] = 20;
            effectssd = game.add.sprite(350, 400, 'effectssd');
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
                }, 400, Phaser.Easing.Bounce.Out, true);
            }
        }, this);




        this.l1_astbit = game.add.sprite(121, 400, 'lastbit');
        this.l1_astbit.anchor.setTo(0.5);
        this.l1_astbit.scale.setTo(0.90);
        this.table3group.add(this.l1_astbit);




        this.tabledress21 = game.add.sprite(135, 417, 'tabledress21');
        this.tabledress21.anchor.setTo(0.5);
        this.tabledress21.scale.setTo(0.80);
        this.table3group.add(this.tabledress21);
        this.tabledress21.inputEnabled = true;
        this.tabledress21.input.useHandCursor = true;
        this.tabledress21.input.pixelPerfectClick = true;
        this.tabledress21.input.pixelPerfectOver = true;
        this.tabledress21.events.onInputDown.add(function() {
            // this.monabody2.visible=false;
            // this.makeblush1.alpha=1;
            this.barbiedress1.loadTexture('barbiedress21');
            this.barbiebackdress1.loadTexture('barbiebackdress21');
            this.barbiehand1.loadTexture('barbiehand21');

            Main.makarray[0] = 21;
            effectssd = game.add.sprite(350, 400, 'effectssd');
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
                }, 400, Phaser.Easing.Bounce.Out, true);
            }
        }, this);

        this.tabledress22 = game.add.sprite(70, 414, 'tabledress22');
        this.tabledress22.anchor.setTo(0.5);
        this.tabledress22.scale.setTo(0.8);
        this.table3group.add(this.tabledress22);
        this.tabledress22.inputEnabled = true;
        this.tabledress22.input.useHandCursor = true;
        //   this.tabledress22.input.pixelPerfectClick=true;
        // this.tabledress22.input.pixelPerfectOver=true;
        this.tabledress22.events.onInputDown.add(function() {
            // this.monabody2.visible=false;
            // this.makeblush1.alpha=1;
            this.barbiedress1.loadTexture('barbiedress22');
            this.barbiebackdress1.loadTexture('barbiebackdress22');
            this.barbiehand1.loadTexture('barbiehand22');

            Main.makarray[0] = 22;

            effectssd = game.add.sprite(350, 400, 'effectssd');
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
                }, 400, Phaser.Easing.Bounce.Out, true);
            }
        }, this);

        this.tabledress23 = game.add.sprite(10, 416.9, 'tabledress23');
        this.tabledress23.anchor.setTo(0.5);
        this.tabledress23.scale.setTo(0.8);
        this.table3group.add(this.tabledress23);
        this.tabledress23.inputEnabled = true;
        this.tabledress23.input.pixelPerfectClick = true;
        this.tabledress23.input.pixelPerfectOver = true;
        this.tabledress23.input.useHandCursor = true;
        this.tabledress23.events.onInputDown.add(function() {
            // this.monabody2.visible=false;
            // this.makeblush1.alpha=1;
            this.barbiedress1.loadTexture('barbiedress23');
            this.barbiebackdress1.loadTexture('barbiebackdress23');
            this.barbiehand1.loadTexture('barbiehand23');

            Main.makarray[0] = 23;

            effectssd = game.add.sprite(350, 400, 'effectssd');
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
                }, 400, Phaser.Easing.Bounce.Out, true);
            }
        }, this);

        this.tabledress24 = game.add.sprite(-50, 428, 'tabledress24');
        this.tabledress24.scale.setTo(0.62);
        this.tabledress24.anchor.setTo(0.5);
        this.table3group.add(this.tabledress24);
        this.tabledress24.inputEnabled = true;
        this.tabledress24.input.useHandCursor = true;
        this.tabledress24.input.pixelPerfectClick = true;
        this.tabledress24.input.pixelPerfectOver = true;
        this.tabledress24.events.onInputDown.add(function() {
            // this.monabody2.visible=false;
            // this.makeblush1.alpha=1;
            this.barbiedress1.loadTexture('barbiedress24');
            this.barbiebackdress1.loadTexture('barbiebackdress24');
            this.barbiehand1.loadTexture('barbiehand24');

            Main.makarray[0] = 24;
            effectssd = game.add.sprite(350, 400, 'effectssd');
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
                }, 400, Phaser.Easing.Bounce.Out, true);
            }
        }, this);



        this.d1_ray = game.add.sprite(125, 315, 'dray');
        this.d1_ray.anchor.setTo(0.5);
        this.table3group.add(this.d1_ray);


        this.d1_ray = game.add.sprite(125, 410, 'dray');
        this.d1_ray.anchor.setTo(0.5);
        this.table3group.add(this.d1_ray);

        this.tablenecklace1 = game.add.sprite(-60, 565, 'tablenecklace1');
        this.tablenecklace1.anchor.setTo(0.5);
        this.tablenecklace1.scale.setTo(1.2);
        this.table3group.add(this.tablenecklace1);
        this.tablenecklace1.inputEnabled = true;
        this.tablenecklace1.input.useHandCursor = true;
        this.tablenecklace1.input.pixelPerfectClick = true;
        this.tablenecklace1.input.pixelPerfectOver = true;
        this.tablenecklace1.events.onInputDown.add(function() {
            this.barbienecklace1.alpha = 1;
            // this.monabody2.visible=false;
            //  
            this.barbienecklace1.loadTexture('barbienecklace1');
            Main.makarray[3] = 1;
            effectssd = game.add.sprite(350, 200, 'effectssd');
            effectssd.anchor.setTo(0.5);
            effectssd.animations.add('effectssd');
            effectssd.animations.play('effectssd', 20, false).onComplete.add(function(evt) {
                evt.destroy();
            }, this);
            this.d1_arr[3] = 1;
            if (this.d1_arr.indexOf(0) < 0) {
                game.add.tween(this.playbtn.scale).to({
                    x: 0.9,
                    y: 0.9
                }, 400, Phaser.Easing.Bounce.Out, true);
            }
        }, this);



        this.tablenecklace2 = game.add.sprite(10, 565, 'tablenecklace2');
        this.tablenecklace2.anchor.setTo(0.5);
        this.tablenecklace2.scale.setTo(1.2);
        this.table3group.add(this.tablenecklace2);
        this.tablenecklace2.inputEnabled = true;
        this.tablenecklace2.input.useHandCursor = true;
        this.tablenecklace2.input.pixelPerfectClick = true;
        this.tablenecklace2.input.pixelPerfectOver = true;
        this.tablenecklace2.events.onInputDown.add(function() {
            // this.monabody2.visible=false;
            // this.barbienecklace1.alpha=1;
            this.barbienecklace1.alpha = 1;

            this.barbienecklace1.loadTexture('barbienecklace2');

            Main.makarray[3] = 2;
            effectssd = game.add.sprite(350, 200, 'effectssd');
            effectssd.anchor.setTo(0.5);
            effectssd.animations.add('effectssd');
            effectssd.animations.play('effectssd', 20, false).onComplete.add(function(evt) {
                evt.destroy();
            }, this);
            this.d1_arr[3] = 1;
            if (this.d1_arr.indexOf(0) < 0) {
                game.add.tween(this.playbtn.scale).to({
                    x: 0.9,
                    y: 0.9
                }, 400, Phaser.Easing.Bounce.Out, true);
            }
        }, this);



        this.tablenecklace3 = game.add.sprite(75, 565, 'tablenecklace3');
        this.tablenecklace3.anchor.setTo(0.5);
        this.table3group.add(this.tablenecklace3);
        this.tablenecklace3.scale.setTo(1.2);
        this.tablenecklace3.inputEnabled = true;
        this.tablenecklace3.input.useHandCursor = true;
        this.tablenecklace3.input.pixelPerfectClick = true;
        this.tablenecklace3.input.pixelPerfectOver = true;
        this.tablenecklace3.events.onInputDown.add(function() {
            // this.monabody2.visible=false;
            // // this.makeblush1.alpha=1;
            this.barbienecklace1.alpha = 1;

            this.barbienecklace1.loadTexture('barbienecklace3');

            Main.makarray[3] = 3;

            effectssd = game.add.sprite(350, 200, 'effectssd');
            effectssd.anchor.setTo(0.5);
            effectssd.animations.add('effectssd');
            effectssd.animations.play('effectssd', 20, false).onComplete.add(function(evt) {
                evt.destroy();
            }, this);
            this.d1_arr[3] = 1;
            if (this.d1_arr.indexOf(0) < 0) {
                game.add.tween(this.playbtn.scale).to({
                    x: 0.9,
                    y: 0.9
                }, 400, Phaser.Easing.Bounce.Out, true);
            }
        }, this);

        // this.d_ray= game.add.sprite(130,490,'dray');
        // this.d_ray.anchor.setTo(0.5); 
        // this.table3group.add(this.d_ray);      

        //    

        this.tablenecklace4 = game.add.sprite(130, 565, 'tablenecklace4');
        this.tablenecklace4.anchor.setTo(0.5);
        this.tablenecklace4.scale.setTo(1.2);
        this.table3group.add(this.tablenecklace4);
        this.tablenecklace4.inputEnabled = true;
        this.tablenecklace4.input.useHandCursor = true;
        this.tablenecklace4.input.pixelPerfectClick = true;
        this.tablenecklace4.input.pixelPerfectOver = true;
        this.tablenecklace4.events.onInputDown.add(function() {
            // this.monabody2.visible=false;
            // // this.makeblush1.alpha=1;
            this.barbienecklace1.alpha = 1;

            this.barbienecklace1.loadTexture('barbienecklace4');

            Main.makarray[3] = 4;

            effectssd = game.add.sprite(350, 200, 'effectssd');
            effectssd.anchor.setTo(0.5);
            effectssd.animations.add('effectssd');
            effectssd.animations.play('effectssd', 20, false).onComplete.add(function(evt) {
                evt.destroy();
            }, this);
            this.d1_arr[3] = 1;
            if (this.d1_arr.indexOf(0) < 0) {
                game.add.tween(this.playbtn.scale).to({
                    x: 0.9,
                    y: 0.9
                }, 400, Phaser.Easing.Bounce.Out, true);
            }
        }, this);




        this.tablenecklace5 = game.add.sprite(130, 655, 'tablenecklace5');
        this.tablenecklace5.anchor.setTo(0.5);
        this.table3group.add(this.tablenecklace5);
        this.tablenecklace5.scale.setTo(1.2);
        this.tablenecklace5.inputEnabled = true;
        this.tablenecklace5.input.useHandCursor = true;
        this.tablenecklace5.input.pixelPerfectClick = true;
        this.tablenecklace5.input.pixelPerfectOver = true;
        this.tablenecklace5.events.onInputDown.add(function() {
            // this.monabody2.visible=false;
            // // this.makeblush1.alpha=1;
            this.barbienecklace1.alpha = 1;

            this.barbienecklace1.loadTexture('barbienecklace5');

            Main.makarray[3] = 5;

            effectssd = game.add.sprite(350, 200, 'effectssd');
            effectssd.anchor.setTo(0.5);
            effectssd.animations.add('effectssd');
            effectssd.animations.play('effectssd', 20, false).onComplete.add(function(evt) {
                evt.destroy();
            }, this);
            this.d1_arr[3] = 1;
            if (this.d1_arr.indexOf(0) < 0) {
                game.add.tween(this.playbtn.scale).to({
                    x: 0.9,
                    y: 0.9
                }, 400, Phaser.Easing.Bounce.Out, true);
            }
        }, this);




        this.tablenecklace6 = game.add.sprite(75, 655, 'tablenecklace6');
        this.tablenecklace6.scale.setTo(1.2);
        this.tablenecklace6.anchor.setTo(0.5);
        this.table3group.add(this.tablenecklace6);
        this.tablenecklace6.inputEnabled = true;
        this.tablenecklace6.input.useHandCursor = true;
        this.tablenecklace6.input.pixelPerfectClick = true;
        this.tablenecklace6.input.pixelPerfectOver = true;
        this.tablenecklace6.events.onInputDown.add(function() {
            // this.monabody2.visible=false;
            // // this.makeblush1.alpha=1;
            this.barbienecklace1.alpha = 1;

            this.barbienecklace1.loadTexture('barbienecklace6');
            Main.makarray[3] = 6;


            effectssd = game.add.sprite(350, 200, 'effectssd');
            effectssd.anchor.setTo(0.5);
            effectssd.animations.add('effectssd');
            effectssd.animations.play('effectssd', 20, false).onComplete.add(function(evt) {
                evt.destroy();
            }, this);
            this.d1_arr[3] = 1;
            if (this.d1_arr.indexOf(0) < 0) {
                game.add.tween(this.playbtn.scale).to({
                    x: 0.9,
                    y: 0.9
                }, 400, Phaser.Easing.Bounce.Out, true);
            }
        }, this);



        this.tablenecklace7 = game.add.sprite(13, 655, 'tablenecklace7');
        this.tablenecklace7.anchor.setTo(0.5);
        this.tablenecklace7.scale.setTo(1.2);
        this.table3group.add(this.tablenecklace7);
        this.tablenecklace7.inputEnabled = true;
        this.tablenecklace7.input.useHandCursor = true;
        this.tablenecklace7.input.pixelPerfectClick = true;
        this.tablenecklace7.input.pixelPerfectOver = true;
        this.tablenecklace7.events.onInputDown.add(function() {
            // // this.makeblush1.alpha=1;
            // this.monabody2.visible=false;
            this.barbienecklace1.alpha = 1;

            this.barbienecklace1.loadTexture('barbienecklace7');
            Main.makarray[3] = 7;

            effectssd = game.add.sprite(350, 200, 'effectssd');
            effectssd.anchor.setTo(0.5);
            effectssd.animations.add('effectssd');
            effectssd.animations.play('effectssd', 20, false).onComplete.add(function(evt) {
                evt.destroy();
            }, this);
            this.d1_arr[3] = 1;
            if (this.d1_arr.indexOf(0) < 0) {
                game.add.tween(this.playbtn.scale).to({
                    x: 0.9,
                    y: 0.9
                }, 400, Phaser.Easing.Bounce.Out, true);
            }
        }, this);


        this.tablenecklace8 = game.add.sprite(-60, 655, 'tablenecklace8');
        this.tablenecklace8.anchor.setTo(0.5);
        this.table3group.add(this.tablenecklace8);
        this.tablenecklace8.scale.setTo(1.2);
        this.tablenecklace8.inputEnabled = true;
        this.tablenecklace8.input.useHandCursor = true;
        this.tablenecklace8.input.pixelPerfectClick = true;
        this.tablenecklace8.input.pixelPerfectOver = true;
        this.tablenecklace8.events.onInputDown.add(function() {
            // // this.makeblush1.alpha=1;
            // this.monabody2.visible=false;
            this.barbienecklace1.alpha = 1;

            this.barbienecklace1.loadTexture('barbienecklace8');
            Main.makarray[3] = 8;

            effectssd = game.add.sprite(350, 200, 'effectssd');
            effectssd.anchor.setTo(0.5);
            effectssd.animations.add('effectssd');
            effectssd.animations.play('effectssd', 20, false).onComplete.add(function(evt) {
                evt.destroy();
            }, this);
            this.d1_arr[3] = 1;
            if (this.d1_arr.indexOf(0) < 0) {
                game.add.tween(this.playbtn.scale).to({
                    x: 0.9,
                    y: 0.9
                }, 400, Phaser.Easing.Bounce.Out, true);
            }
        }, this);
        this.table3group.visible = false;


        //////////////////////////////////////////////////////////////////////////////////
        this.table4group = game.add.group();
        // this.table4group.visible=false;



        this.first = game.add.sprite(129, 455, 'first');
        this.first.anchor.setTo(0.5);
        this.table4group.add(this.first);


        this.d_ray = game.add.sprite(130, 120, 'dray');
        this.d_ray.anchor.setTo(0.5);
        this.table4group.add(this.d_ray);

        this.tableearing1 = game.add.sprite(-60, 270, 'tableearing1');
        this.tableearing1.anchor.setTo(0.5);
        this.table4group.add(this.tableearing1);
        this.tableearing1.scale.setTo(1.2);
        this.tableearing1.inputEnabled = true;
        this.tableearing1.input.useHandCursor = true;
        //  this.tableearing1.input.pixelPerfectClick=true;
        // this.tableearing1.input.pixelPerfectOver=true;   
        this.tableearing1.events.onInputDown.add(function() {

            // this.monabody2.visible=false;
            // this.barbiebody.visible=true;

            this.barbieearing1.alpha = 1;
            this.b_arbieearing1.alpha = 1;

            this.barbieearing1.loadTexture('barbieearing1');
            this.b_arbieearing1.loadTexture('barbieearing1');
            Main.makarray[4] = 1;
            if (Main.makarray[1] == 5) {
                this.barbieearing1.visible = true;
                this.b_arbieearing1.visible = false;

            } else {
                this.barbieearing1.visible = true;
                this.b_arbieearing1.visible = true;
            }
            effectssd = game.add.sprite(350, 200, 'effectssd');
            effectssd.anchor.setTo(0.5);
            effectssd.animations.add('effectssd');
            effectssd.animations.play('effectssd', 20, false).onComplete.add(function(evt) {
                evt.destroy();
            }, this);
            this.d1_arr[4] = 1;
            if (this.d1_arr.indexOf(0) < 0) {
                game.add.tween(this.playbtn.scale).to({
                    x: 0.9,
                    y: 0.9
                }, 400, Phaser.Easing.Bounce.Out, true);
            }
        }, this);



        this.tableearing2 = game.add.sprite(12, 270, 'tableearing2');
        this.tableearing2.anchor.setTo(0.5);
        this.table4group.add(this.tableearing2);
        this.tableearing2.scale.setTo(1.2);
        this.tableearing2.inputEnabled = true;
        this.tableearing2.input.useHandCursor = true;
        //  this.tableearing2.input.pixelPerfectClick=true;
        // this.tableearing2.input.pixelPerfectOver=true;   
        this.tableearing2.events.onInputDown.add(function() {


            // this.monabody2.visible=false;
            // this.barbiebody.visible=true;


            this.barbieearing1.alpha = 1;
            this.b_arbieearing1.alpha = 1;
            this.barbieearing1.loadTexture('barbieearing2');
            this.b_arbieearing1.loadTexture('barbieearing2');
            Main.makarray[4] = 2;

            if (Main.makarray[1] == 5) {
                this.barbieearing1.visible = true;
                this.b_arbieearing1.visible = false;

            } else {
                this.barbieearing1.visible = true;
                this.b_arbieearing1.visible = true;
            }
            effectssd = game.add.sprite(350, 200, 'effectssd');
            effectssd.anchor.setTo(0.5);
            effectssd.animations.add('effectssd');
            effectssd.animations.play('effectssd', 20, false).onComplete.add(function(evt) {
                evt.destroy();
            }, this);
            this.d1_arr[4] = 1;
            if (this.d1_arr.indexOf(0) < 0) {
                game.add.tween(this.playbtn.scale).to({
                    x: 0.9,
                    y: 0.9
                }, 400, Phaser.Easing.Bounce.Out, true);
            }
        }, this);



        this.tableearing3 = game.add.sprite(75, 270, 'tableearing3');
        this.tableearing3.anchor.setTo(0.5);
        this.table4group.add(this.tableearing3);
        this.tableearing3.scale.setTo(1.2);
        this.tableearing3.inputEnabled = true;
        this.tableearing3.input.useHandCursor = true;
        //  this.tableearing3.input.pixelPerfectClick=true;
        // this.tableearing3.input.pixelPerfectOver=true;   
        this.tableearing3.events.onInputDown.add(function() {
            // // this.makeblush1.alpha=1;
            // this.monabody2.visible=false;
            // this.barbiebody.visible=true;

            this.barbieearing1.alpha = 1;
            this.b_arbieearing1.alpha = 1;


            this.barbieearing1.loadTexture('barbieearing3');
            this.b_arbieearing1.loadTexture('barbieearing3');
            Main.makarray[4] = 3;

            if (Main.makarray[1] == 5) {
                this.barbieearing1.visible = true;
                this.b_arbieearing1.visible = false;

            } else {
                this.barbieearing1.visible = true;
                this.b_arbieearing1.visible = true;
            }

            effectssd = game.add.sprite(350, 200, 'effectssd');
            effectssd.anchor.setTo(0.5);
            effectssd.animations.add('effectssd');
            effectssd.animations.play('effectssd', 20, false).onComplete.add(function(evt) {
                evt.destroy();
            }, this);
            this.d1_arr[4] = 1;
            if (this.d1_arr.indexOf(0) < 0) {
                game.add.tween(this.playbtn.scale).to({
                    x: 0.9,
                    y: 0.9
                }, 400, Phaser.Easing.Bounce.Out, true);
            }
        }, this);



        //    

        this.tableearing4 = game.add.sprite(135, 270, 'tableearing4');
        this.tableearing4.anchor.setTo(0.5);
        this.table4group.add(this.tableearing4);
        this.tableearing4.scale.setTo(1.2);
        this.tableearing4.inputEnabled = true;
        this.tableearing4.input.useHandCursor = true;
        this.tableearing4.input.pixelPerfectClick = true;
        this.tableearing4.input.pixelPerfectOver = true;
        this.tableearing4.events.onInputDown.add(function() {
            // // this.makeblush1.alpha=1;
            // this.monabody2.visible=false;
            // this.barbiebody.visible=true;


            this.barbieearing1.alpha = 1;
            this.b_arbieearing1.alpha = 1;
            this.barbieearing1.loadTexture('barbieearing4');
            this.b_arbieearing1.loadTexture('barbieearing4');
            Main.makarray[4] = 4;
            if (Main.makarray[1] == 5) {
                this.barbieearing1.visible = true;
                this.b_arbieearing1.visible = false;

            } else {
                this.barbieearing1.visible = true;
                this.b_arbieearing1.visible = true;
            }

            effectssd = game.add.sprite(350, 200, 'effectssd');
            effectssd.anchor.setTo(0.5);
            effectssd.animations.add('effectssd');
            effectssd.animations.play('effectssd', 20, false).onComplete.add(function(evt) {
                evt.destroy();
            }, this);
            this.d1_arr[4] = 1;
            if (this.d1_arr.indexOf(0) < 0) {
                game.add.tween(this.playbtn.scale).to({
                    x: 0.9,
                    y: 0.9
                }, 400, Phaser.Easing.Bounce.Out, true);
            }
        }, this);



        this.d_ray = game.add.sprite(130, 240, 'dray');
        this.d_ray.anchor.setTo(0.5);
        this.table4group.add(this.d_ray);

        this.tableearing5 = game.add.sprite(-60, 390, 'tableearing5');
        this.tableearing5.anchor.setTo(0.5);
        this.tableearing5.scale.setTo(1.2);
        this.table4group.add(this.tableearing5);
        this.tableearing5.inputEnabled = true;
        this.tableearing5.input.useHandCursor = true;
        this.tableearing5.input.pixelPerfectClick = true;
        this.tableearing5.input.pixelPerfectOver = true;
        this.tableearing5.events.onInputDown.add(function() {
            // // this.makeblush1.alpha=1;
            // this.monabody2.visible=false;
            // this.barbiebody.visible=true;

            this.barbieearing1.alpha = 1;
            this.b_arbieearing1.alpha = 1;
            this.barbieearing1.loadTexture('barbieearing5');
            this.b_arbieearing1.loadTexture('barbieearing5');

            Main.makarray[4] = 5;
            if (Main.makarray[1] == 5) {
                this.barbieearing1.visible = true;
                this.b_arbieearing1.visible = false;

            } else {
                this.barbieearing1.visible = true;
                this.b_arbieearing1.visible = true;
            }

            effectssd = game.add.sprite(350, 200, 'effectssd');
            effectssd.anchor.setTo(0.5);
            effectssd.animations.add('effectssd');
            effectssd.animations.play('effectssd', 20, false).onComplete.add(function(evt) {
                evt.destroy();
            }, this);
            this.d1_arr[4] = 1;
            if (this.d1_arr.indexOf(0) < 0) {
                game.add.tween(this.playbtn.scale).to({
                    x: 0.9,
                    y: 0.9
                }, 400, Phaser.Easing.Bounce.Out, true);
            }
        }, this);




        this.tableearing6 = game.add.sprite(10, 390, 'tableearing6');
        this.tableearing6.anchor.setTo(0.5);
        this.table4group.add(this.tableearing6);
        this.tableearing6.scale.setTo(1.2);
        this.tableearing6.inputEnabled = true;
        this.tableearing6.input.useHandCursor = true;
        this.tableearing6.events.onInputDown.add(function() {
            // // this.makeblush1.alpha=1;
            // this.monabody2.visible=false;
            // this.barbiebody.visible=true;

            this.barbieearing1.alpha = 1;
            this.b_arbieearing1.alpha = 1;
            this.barbieearing1.loadTexture('barbieearing6');
            this.b_arbieearing1.loadTexture('barbieearing6');

            Main.makarray[4] = 6;

            if (Main.makarray[1] == 5) {
                this.barbieearing1.visible = true;
                this.b_arbieearing1.visible = false;

            } else {
                this.barbieearing1.visible = true;
                this.b_arbieearing1.visible = true;
            }

            effectssd = game.add.sprite(350, 200, 'effectssd');
            effectssd.anchor.setTo(0.5);
            effectssd.animations.add('effectssd');
            effectssd.animations.play('effectssd', 20, false).onComplete.add(function(evt) {
                evt.destroy();
            }, this);
            this.d1_arr[4] = 1;
            if (this.d1_arr.indexOf(0) < 0) {
                game.add.tween(this.playbtn.scale).to({
                    x: 0.9,
                    y: 0.9
                }, 400, Phaser.Easing.Bounce.Out, true);
            }
        }, this);



        this.tableearing7 = game.add.sprite(80, 390, 'tableearing7');
        this.tableearing7.anchor.setTo(0.5);
        this.table4group.add(this.tableearing7);
        this.tableearing7.scale.setTo(1.2);
        this.tableearing7.inputEnabled = true;
        this.tableearing7.input.useHandCursor = true;
        this.tableearing7.input.pixelPerfectClick = true;
        this.tableearing7.input.pixelPerfectOver = true;
        this.tableearing7.events.onInputDown.add(function() {
            // // this.makeblush1.alpha=1;
            // this.monabody2.visible=false;
            // this.barbiebody.visible=true;
            this.barbieearing1.alpha = 1;
            this.b_arbieearing1.alpha = 1;


            this.barbieearing1.loadTexture('barbieearing7');
            this.b_arbieearing1.loadTexture('barbieearing7');

            Main.makarray[4] = 7;

            if (Main.makarray[1] == 5) {
                this.barbieearing1.visible = true;
                this.b_arbieearing1.visible = false;

            } else {
                this.barbieearing1.visible = true;
                this.b_arbieearing1.visible = true;
            }

            effectssd = game.add.sprite(350, 200, 'effectssd');
            effectssd.anchor.setTo(0.5);
            effectssd.animations.add('effectssd');
            effectssd.animations.play('effectssd', 20, false).onComplete.add(function(evt) {
                evt.destroy();
            }, this);
            this.d1_arr[4] = 1;
            if (this.d1_arr.indexOf(0) < 0) {
                game.add.tween(this.playbtn.scale).to({
                    x: 0.9,
                    y: 0.9
                }, 400, Phaser.Easing.Bounce.Out, true);
            }
        }, this);


        this.tableearing8 = game.add.sprite(140, 390, 'tableearing8');
        this.tableearing8.anchor.setTo(0.5);
        this.tableearing8.scale.setTo(1.2);
        this.table4group.add(this.tableearing8);
        this.tableearing8.inputEnabled = true;
        this.tableearing8.input.useHandCursor = true;
        this.tableearing8.input.pixelPerfectClick = true;
        this.tableearing8.input.pixelPerfectOver = true;
        this.tableearing8.events.onInputDown.add(function() {
            // this.makeblush1.alpha=1;
            // this.monabody2.visible=false;
            // this.barbiebody.visible=true;

            this.barbieearing1.alpha = 1;
            this.b_arbieearing1.alpha = 1;


            this.barbieearing1.loadTexture('barbieearing8');
            this.b_arbieearing1.loadTexture('barbieearing8');
            Main.makarray[4] = 8;

            if (Main.makarray[1] == 5) {
                this.barbieearing1.visible = true;
                this.b_arbieearing1.visible = false;

            } else {
                this.barbieearing1.visible = true;
                this.b_arbieearing1.visible = true;
            }

            effectssd = game.add.sprite(350, 200, 'effectssd');
            effectssd.anchor.setTo(0.5);
            effectssd.animations.add('effectssd');
            effectssd.animations.play('effectssd', 20, false).onComplete.add(function(evt) {
                evt.destroy();
            }, this);
            this.d1_arr[4] = 1;
            if (this.d1_arr.indexOf(0) < 0) {
                game.add.tween(this.playbtn.scale).to({
                    x: 0.9,
                    y: 0.9
                }, 400, Phaser.Easing.Bounce.Out, true);
            }
        }, this);





        this.d_ray = game.add.sprite(130, 360, 'dray');
        this.d_ray.anchor.setTo(0.5);
        this.table4group.add(this.d_ray);



        this.b_arbiebag1 = game.add.sprite(-60, 515, 'barbiebag1');
        this.b_arbiebag1.anchor.setTo(0.5);
        this.table4group.add(this.b_arbiebag1);
        this.b_arbiebag1.scale.setTo(0.58);
        this.b_arbiebag1.inputEnabled = true;
        this.b_arbiebag1.input.useHandCursor = true;
        //  this.b_arbiebag1.input.pixelPerfectClick=true;
        // this.b_arbiebag1.input.pixelPerfectOver=true;   
        this.b_arbiebag1.events.onInputDown.add(function() {
            // // // this.makeblush1.alpha=1;
            this.barbiebody.visible = false;
            this.barbiebodylsat.visible = true;
            this.monabody2.visible = true;

            this.barbiebag1.alpha = 1;
            this.barbiebag1.loadTexture('barbiebag1');
            Main.makarray[5] = 1;
            effectssd = game.add.sprite(450, 500, 'effectssd');
            effectssd.anchor.setTo(0.5);
            effectssd.animations.add('effectssd');
            effectssd.animations.play('effectssd', 20, false).onComplete.add(function(evt) {
                evt.destroy();
            }, this);
            this.d1_arr[5] = 1;
            if (this.d1_arr.indexOf(0) < 0) {
                game.add.tween(this.playbtn.scale).to({
                    x: 0.9,
                    y: 0.9
                }, 400, Phaser.Easing.Bounce.Out, true);
            }
        }, this);



        this.b_arbiebag2 = game.add.sprite(10, 520, 'barbiebag2');
        this.b_arbiebag2.anchor.setTo(0.5);
        this.table4group.add(this.b_arbiebag2);
        this.b_arbiebag2.scale.setTo(0.68);
        this.b_arbiebag2.inputEnabled = true;
        this.b_arbiebag2.input.useHandCursor = true;
        //  this.b_arbiebag2.input.pixelPerfectClick=true;
        // this.b_arbiebag2.input.pixelPerfectOver=true;   
        this.b_arbiebag2.events.onInputDown.add(function() {
            // // // this.makeblush1.alpha=1;
            this.barbiebody.visible = false;
            this.barbiebodylsat.visible = true;
            this.monabody2.visible = true;
            this.barbiebag1.alpha = 1;

            this.barbiebag1.loadTexture('barbiebag2');

            Main.makarray[5] = 2;

            effectssd = game.add.sprite(350, 500, 'effectssd');
            effectssd.anchor.setTo(0.5);
            effectssd.animations.add('effectssd');
            effectssd.animations.play('effectssd', 20, false).onComplete.add(function(evt) {
                evt.destroy();
            }, this);
            this.d1_arr[5] = 1;
            if (this.d1_arr.indexOf(0) < 0) {
                game.add.tween(this.playbtn.scale).to({
                    x: 0.9,
                    y: 0.9
                }, 400, Phaser.Easing.Bounce.Out, true);
            }
        }, this);



        this.b_arbiebag3 = game.add.sprite(80, 530, 'barbiebag3');
        this.b_arbiebag3.anchor.setTo(0.5);
        this.table4group.add(this.b_arbiebag3);
        this.b_arbiebag3.scale.setTo(0.68);
        this.b_arbiebag3.inputEnabled = true;
        this.b_arbiebag3.input.useHandCursor = true;
        //  this.b_arbiebag3.input.pixelPerfectClick=true;
        // this.b_arbiebag3.input.pixelPerfectOver=true;   
        this.b_arbiebag3.events.onInputDown.add(function() {
            // // // this.makeblush1.alpha=1;
            this.barbiebody.visible = false;
            this.barbiebodylsat.visible = true;
            this.monabody2.visible = true;
            this.barbiebag1.alpha = 1;

            this.barbiebag1.loadTexture('barbiebag3');

            Main.makarray[5] = 3;


            effectssd = game.add.sprite(350, 500, 'effectssd');
            effectssd.anchor.setTo(0.5);
            effectssd.animations.add('effectssd');
            effectssd.animations.play('effectssd', 20, false).onComplete.add(function(evt) {
                evt.destroy();
            }, this);
            this.d1_arr[5] = 1;
            if (this.d1_arr.indexOf(0) < 0) {
                game.add.tween(this.playbtn.scale).to({
                    x: 0.9,
                    y: 0.9
                }, 400, Phaser.Easing.Bounce.Out, true);
            }
        }, this);

        //        
        // //    

        this.b_arbiebag4 = game.add.sprite(140, 510, 'barbiebag4');
        this.b_arbiebag4.anchor.setTo(0.5);
        this.table4group.add(this.b_arbiebag4);

        this.b_arbiebag4.scale.setTo(0.45);
        this.b_arbiebag4.scale.x = -this.b_arbiebag4.scale.x;

        this.b_arbiebag4.inputEnabled = true;
        this.b_arbiebag4.input.useHandCursor = true;
        this.b_arbiebag4.input.pixelPerfectClick = true;
        this.b_arbiebag4.input.pixelPerfectOver = true;
        this.b_arbiebag4.events.onInputDown.add(function() {
            // // this.makeblush1.alpha=1;
            this.barbiebody.visible = false;
            this.barbiebodylsat.visible = true;
            this.monabody2.visible = true;
            this.barbiebag1.alpha = 1;

            this.barbiebag1.loadTexture('barbiebag4');

            Main.makarray[5] = 4;

            effectssd = game.add.sprite(350, 500, 'effectssd');
            effectssd.anchor.setTo(0.5);
            effectssd.animations.add('effectssd');
            effectssd.animations.play('effectssd', 20, false).onComplete.add(function(evt) {
                evt.destroy();
            }, this);
            this.d1_arr[5] = 1;
            if (this.d1_arr.indexOf(0) < 0) {
                game.add.tween(this.playbtn.scale).to({
                    x: 0.9,
                    y: 0.9
                }, 400, Phaser.Easing.Bounce.Out, true);
            }
        }, this);




        this.b_arbiebag5 = game.add.sprite(-60, 660, 'barbiebag5');
        this.b_arbiebag5.anchor.setTo(0.5);
        this.b_arbiebag5.scale.setTo(0.65);
        this.b_arbiebag5.scale.x = -0.7;

        this.table4group.add(this.b_arbiebag5);
        this.b_arbiebag5.inputEnabled = true;
        this.b_arbiebag5.input.useHandCursor = true;
        this.b_arbiebag5.input.pixelPerfectClick = true;
        this.b_arbiebag5.input.pixelPerfectOver = true;
        this.b_arbiebag5.events.onInputDown.add(function() {
            // // this.makeblush1.alpha=1;
            this.barbiebody.visible = false;
            this.barbiebodylsat.visible = true;
            this.monabody2.visible = true;
            this.barbiebag1.alpha = 1;

            this.barbiebag1.loadTexture('barbiebag5');
            Main.makarray[5] = 5;

            effectssd = game.add.sprite(350, 500, 'effectssd');
            effectssd.anchor.setTo(0.5);
            effectssd.animations.add('effectssd');
            effectssd.animations.play('effectssd', 20, false).onComplete.add(function(evt) {
                evt.destroy();
            }, this);
            this.d1_arr[5] = 1;
            if (this.d1_arr.indexOf(0) < 0) {
                game.add.tween(this.playbtn.scale).to({
                    x: 0.9,
                    y: 0.9
                }, 400, Phaser.Easing.Bounce.Out, true);
            }
        }, this);




        this.b_arbiebag6 = game.add.sprite(0, 670, 'barbiebag6');
        this.b_arbiebag6.anchor.setTo(0.5);
        this.table4group.add(this.b_arbiebag6);
        this.b_arbiebag6.scale.setTo(0.60);
        this.b_arbiebag6.scale.x = -this.b_arbiebag6.scale.x;

        this.b_arbiebag6.inputEnabled = true;
        this.b_arbiebag6.input.useHandCursor = true;
        this.b_arbiebag6.events.onInputDown.add(function() {
            // // // this.makeblush1.alpha=1;
            this.barbiebody.visible = false;
            this.barbiebodylsat.visible = true;
            this.monabody2.visible = true;
            this.barbiebag1.alpha = 1;

            this.barbiebag1.loadTexture('barbiebag6');

            Main.makarray[5] = 6;

            effectssd = game.add.sprite(350, 500, 'effectssd');
            effectssd.anchor.setTo(0.5);
            effectssd.animations.add('effectssd');
            effectssd.animations.play('effectssd', 20, false).onComplete.add(function(evt) {
                evt.destroy();
            }, this);
            this.d1_arr[5] = 1;
            if (this.d1_arr.indexOf(0) < 0) {
                game.add.tween(this.playbtn.scale).to({
                    x: 0.9,
                    y: 0.9
                }, 400, Phaser.Easing.Bounce.Out, true);
            }
        }, this);



        this.b_arbiebag7 = game.add.sprite(60, 670, 'barbiebag7');
        this.b_arbiebag7.anchor.setTo(0.5);
        this.table4group.add(this.b_arbiebag7);
        this.b_arbiebag7.scale.setTo(0.60);
        this.b_arbiebag7.inputEnabled = true;
        this.b_arbiebag7.input.useHandCursor = true;
        this.b_arbiebag7.input.pixelPerfectClick = true;
        this.b_arbiebag7.input.pixelPerfectOver = true;
        this.b_arbiebag7.events.onInputDown.add(function() {
            // // // this.makeblush1.alpha=1;
            this.barbiebody.visible = false;
            this.monabody2.visible = true;
            this.barbiebodylsat.visible = true;
            this.barbiebag1.alpha = 1;

            this.barbiebag1.loadTexture('barbiebag7');
            Main.makarray[5] = 7;

            effectssd = game.add.sprite(350, 500, 'effectssd');
            effectssd.anchor.setTo(0.5);
            effectssd.animations.add('effectssd');
            effectssd.animations.play('effectssd', 20, false).onComplete.add(function(evt) {
                evt.destroy();
            }, this);
            this.d1_arr[5] = 1;
            if (this.d1_arr.indexOf(0) < 0) {
                game.add.tween(this.playbtn.scale).to({
                    x: 0.9,
                    y: 0.9
                }, 400, Phaser.Easing.Bounce.Out, true);
            }
        }, this);


        this.b_arbiebag8 = game.add.sprite(130, 670, 'barbiebag8');
        this.b_arbiebag8.anchor.setTo(0.5);
        this.b_arbiebag8.scale.setTo(0.57);
        this.table4group.add(this.b_arbiebag8);
        this.b_arbiebag8.inputEnabled = true;
        this.b_arbiebag8.input.useHandCursor = true;
        this.b_arbiebag8.input.pixelPerfectClick = true;
        this.b_arbiebag8.input.pixelPerfectOver = true;
        this.b_arbiebag8.events.onInputDown.add(function() {
            // // this.makeblush1.alpha=1;
            this.barbiebody.visible = false;
            this.monabody2.visible = true;
            this.barbiebodylsat.visible = true;
            this.barbiebag1.alpha = 1;

            this.barbiebag1.loadTexture('barbiebag8');
            Main.makarray[5] = 8;

            effectssd = game.add.sprite(350, 500, 'effectssd');
            effectssd.anchor.setTo(0.5);
            effectssd.animations.add('effectssd');
            effectssd.animations.play('effectssd', 20, false).onComplete.add(function(evt) {
                evt.destroy();
            }, this);
            this.d1_arr[5] = 1;
            if (this.d1_arr.indexOf(0) < 0) {
                game.add.tween(this.playbtn.scale).to({
                    x: 0.9,
                    y: 0.9
                }, 400, Phaser.Easing.Bounce.Out, true);
            }
        }, this);

        this.leftarrow = game.add.sprite(-60, 170, 'leftarrow');
        this.leftarrow.anchor.setTo(0.5);
        this.table4group.add(this.leftarrow);
        this.leftarrow.inputEnabled = true;
        this.leftarrow.input.useHandCursor = true;
        this.leftarrow.input.pixelPerfectClick = true;
        this.leftarrow.input.pixelPerfectOver = true;
        this.leftarrow.events.onInputDown.add(function() {
            this.table1group.visible = false;
            this.table2group.visible = false;
            this.table3group.visible = true;
            this.table4group.visible = false;
            // this.table5group.visible=false;
            // this.table6group.visible=false;
            // this.table7group.visible=false;
            // this.table8group.visible=false;
            // this.table9group.visible=false;
            // this.table10group.visible=false;
        }, this);
        // this.rightarrow= game.add.sprite(223,270,'rightarrow');
        //      this.rightarrow.anchor.setTo(0.5); 
        //      this.table4group.add(this.rightarrow);
        //       this.rightarrow.inputEnabled=true;
        //      this.rightarrow.input.useHandCursor=true; 
        //       this.rightarrow.input.pixelPerfectClick=true;
        //      this.rightarrow.input.pixelPerfectOver=true;   
        //      this.rightarrow.events.onInputDown.add(function(){
        //      	this.table1group.visible=false;
        //      	this.table2group.visible=false;
        //      	this.table3group.visible=true;
        //      	this.table4group.visible=false;
        //      	this.table5group.visible=true;
        //      	this.table6group.visible=false;
        //      	this.table7group.visible=false;
        //      	this.table8group.visible=false;
        //      	this.table9group.visible=false;
        //      	this.table10group.visible=false;


        //             },this);

        this.table4group.visible = false;

        ///////////////////////////////////////////////////////////////////////////////////////////////////////

        // //////////////////////////////////////////////////////////////////////////////////////



        this.all_cb_grp = game.add.group();

        this.all_cb_grp.add(this.table1group);
        this.all_cb_grp.add(this.table2group);
        this.all_cb_grp.add(this.table3group);
        this.all_cb_grp.add(this.table4group);
        // this.all_cb_grp.add(this.table5group);  
        // this.all_cb_grp.add(this.table6group);  
        // this.all_cb_grp.add(this.table7group);  
        // this.all_cb_grp.add(this.table8group);  
        // this.all_cb_grp.add(this.table9group);  
        // this.all_cb_grp.add(this.table10group); 

        this.all_cb_grp.scale.setTo(1.0);
        this.all_cb_grp.y = -50;
        this.all_cb_grp.x = 120;

        /////////////////////////////////////////////////////////////////////////////////////////////////
        /////////// bgggggggggggggggggggg
        this.barbiegroup = game.add.group();
        this.barbiegroup.scale.setTo(0.8);


        this.barbiebackdress1 = game.add.sprite(322, 444, 'barbiebackdress' + Main.makarray[0]);
        this.barbiebackdress1.anchor.setTo(0.5);
        // this.barbiebackdress1.alpha =Main.arial_alpha[0];
        this.barbiegroup.add(this.barbiebackdress1);


        this.barbiebackhair1 = game.add.sprite(301, 213, 'barbiebackhair' + Main.makarray[1]);
        this.barbiebackhair1.anchor.setTo(0.5);
        // this.barbiebackhair1.alpha =Main.arial_alpha[0];
        this.barbiegroup.add(this.barbiebackhair1);


        // this.barbiebag1= game.add.sprite(206.7,495.9,'barbiebag'+Main.makarray[5]);
        //        this.barbiebag1.anchor.setTo(0.5);
        //        // this.barbiebag1.alpha =Main.arial_alpha[0];
        //        this.barbiegroup.add(this.barbiebag1); 

        this.barbiebody = game.add.sprite(286, 465, 'barbiebody' /*+Main.arial_arr[0]*/ );
        this.barbiebody.anchor.setTo(0.5);
        // this.barbiebody.alpha =Main.arial_alpha[0];
        this.barbiegroup.add(this.barbiebody);

        this.monabody2 = game.add.sprite(286, 465, 'monabody2' /*+Main.arial_arr[0]*/ );
        this.monabody2.anchor.setTo(0.5);
        this.monabody2.visible = false;
        this.barbiegroup.add(this.monabody2);

        // this.barbiebag1= game.add.sprite(206.7,495.9,'barbiebag'+Main.makarray[5]);
        //        this.barbiebag1.anchor.setTo(0.5);
        //        this.barbiebag1.alpha=0;       
        //        // this.barbiebag1.alpha =Main.arial_alpha[0];
        //        this.barbiegroup.add(this.barbiebag1); 

        //          this.barbiebodylsat= game.add.sprite(286,465,'barbiebodylsat'/*+Main.arial_arr[0]*/);
        //        this.barbiebodylsat.anchor.setTo(0.5);
        // this.barbiebodylsat.visible=false;
        //        this.barbiegroup.add(this.barbiebodylsat);  

        this.barbieshoe1 = game.add.sprite(307, 689, 'barbieshoe' + Main.makarray[2]);
        this.barbieshoe1.anchor.setTo(0.5);
        // this.barbieshoe1.alpha =Main.arial_alpha[0];
        this.barbiegroup.add(this.barbieshoe1);

        this.barbiedress1 = game.add.sprite(322.5, 455.9, 'barbiedress' + Main.makarray[0]);
        this.barbiedress1.anchor.setTo(0.5);
        // this.barbiedress1.alpha =Main.arial_alpha[0];
        this.barbiegroup.add(this.barbiedress1);


        this.barbiebag1 = game.add.sprite(183, 500, 'barbiebag' + Main.makarray[5]); /*206.7//495.9,*/
        this.barbiebag1.anchor.setTo(0.5);
        this.barbiebag1.alpha = 0;
        this.barbiebag1.angle = 15;
        // this.barbiebag1.alpha =Main.arial_alpha[0];
        this.barbiegroup.add(this.barbiebag1);

        this.barbiebodylsat = game.add.sprite(286, 465, 'barbiebodylsat' /*+Main.arial_arr[0]*/ );
        this.barbiebodylsat.anchor.setTo(0.5);
        this.barbiebodylsat.visible = false;
        this.barbiegroup.add(this.barbiebodylsat);

        this.barbienecklace1 = game.add.sprite(306.7, 248.9, 'barbienecklace' + Main.makarray[3]);
        this.barbienecklace1.anchor.setTo(0.5);
        this.barbienecklace1.alpha = 0;
        // this.barbienecklace1.alpha =Main.arial_alpha[0];
        this.barbiegroup.add(this.barbienecklace1);

        this.barbiehead = game.add.sprite(303.7, 173.9, 'barbiehead' /*+Main.arial_arr[0]*/ );
        this.barbiehead.anchor.setTo(0.5);
        // this.barbiehead.alpha =Main.arial_alpha[0];
        this.barbiegroup.add(this.barbiehead);

        this.barbiefronthair1 = game.add.sprite(301.7, 218.9, 'barbiefronthair' + Main.makarray[1]);
        this.barbiefronthair1.anchor.setTo(0.5);
        // this.barbiefronthair1.alpha =Main.arial_alpha[0];
        this.barbiegroup.add(this.barbiefronthair1);


        this.barbieearing1 = game.add.sprite(271.7, 204.9, 'barbieearing' + Main.makarray[4]);
        this.barbieearing1.anchor.setTo(0.5);
        this.barbieearing1.alpha = 0;

        // this.barbieearing1.alpha =Main.arial_alpha[0];
        this.barbiegroup.add(this.barbieearing1);



        this.b_arbieearing1 = game.add.sprite(336.7, 204.9, 'barbieearing' + Main.makarray[4]);
        this.b_arbieearing1.anchor.setTo(0.5);
        this.b_arbieearing1.alpha = 0;

        // this.b_arbieearing1.alpha =Main.arial_alpha[0];
        this.barbiegroup.add(this.b_arbieearing1);

        // this.barbiebag1= game.add.sprite(183,500,'barbiebag'+Main.makarray[5]);
        //        this.barbiebag1.anchor.setTo(0.5);
        //        // this.barbiebag1.alpha =Main.arial_alpha[0];
        //        this.barbiegroup.add(this.barbiebag1); 



        // this.barbiehand2= game.add.sprite(206.7,495.9,'barbiehand2'/*+Main.arial_arr[0]*/);
        //        this.barbiehand2.anchor.setTo(0.5);
        //        // this.barbiehand2.scale.setTo(2.9);
        //        // this.barbiehand2.alpha =Main.arial_alpha[0];
        //        this.barbiegroup.add(this.barbiehand2); 


        // this.arbiehand3= game.add.sprite(206.7,495.9,'arbiehand3'/*+Main.arial_arr[0]*/);
        //        this.arbiehand3.anchor.setTo(0.5);
        //        // this.arbiehand3.scale.setTo(2.9);
        //        // this.arbiehand3.alpha =Main.arial_alpha[0];
        //        this.barbiegroup.add(this.arbiehand3); 


        // this.barbihand1= game.add.sprite(367,225,'barbihand1'/*+Main.arial_arr[0]*/);
        //        this.barbihand1.anchor.setTo(0.5);
        //        // this.barbihand1.alpha =Main.arial_alpha[0];
        //        this.barbiegroup.add(this.barbihand1); 



        this.barbiebodya = game.add.sprite(286, 465, 'barbiebodya' /*+Main.arial_arr[0]*/ );
        this.barbiebodya.anchor.setTo(0.5);
        // this.barbiebodya.alpha =Main.arial_alpha[0];
        this.barbiegroup.add(this.barbiebodya);

        this.barbiehand1 = game.add.sprite(323.7, 455.9, 'barbiehand' + Main.makarray[0]);
        this.barbiehand1.anchor.setTo(0.5);
        // this.barbiehand1.scale.setTo(2.9);
        // this.barbiehand1.alpha =Main.arial_alpha[0];
        this.barbiegroup.add(this.barbiehand1);


        this.barbiegroup.x = 630;
        this.barbiegroup.y = 80;
        this.barbiegroup.scale.x = -this.barbiegroup.scale.x;


        this.morebtn = game.add.sprite(85, 730, 'more');
        this.morebtn.anchor.setTo(0.5);
        // this.morebtn.scale.setTo(0);
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

            }, this);
        }


        this.logoVar = game.add.sprite(5, 5, 'logo');
        this.logoVar.scale.setTo(0.8);
        this.logoVar.inputEnabled = true
        this.logoVar.input.useHandCursor = true;
        this.logoVar.events.onInputUp.add(this.openLink, this);

        this.musicButton = game.add.sprite(407, 5, "soundicon");
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

// fffffffffffffffffffffffffffffffffffffffffffffffffffffffff

Main.final_screen = function() {}

Main.final_screen.prototype = {
    create: function() {
        this.levelGroup = game.add.group();

        this.barbiebg = game.add.sprite(0, 0, 'barbiebg');
        this.levelGroup.add(this.barbiebg);


        ////////////////////////////
        this.barbiegroup = game.add.group();
        this.barbiegroup.scale.setTo(0.8);


        this.barbiebackdress1 = game.add.sprite(322, 444, 'barbiebackdress' + Main.makarray[0]);
        this.barbiebackdress1.anchor.setTo(0.5);
        // this.barbiebackdress1.alpha =Main.arial_alpha[0];
        this.barbiegroup.add(this.barbiebackdress1);


        this.barbiebackhair1 = game.add.sprite(301, 213, 'barbiebackhair' + Main.makarray[1]);
        this.barbiebackhair1.anchor.setTo(0.5);
        // this.barbiebackhair1.alpha =Main.arial_alpha[0];
        this.barbiegroup.add(this.barbiebackhair1);


        // this.barbiebag1= game.add.sprite(206.7,495.9,'barbiebag'+Main.makarray[5]);
        //        this.barbiebag1.anchor.setTo(0.5);
        //        // this.barbiebag1.alpha =Main.arial_alpha[0];
        //        this.barbiegroup.add(this.barbiebag1); 

        this.barbiebody = game.add.sprite(286, 465, 'barbiebody' /*+Main.arial_arr[0]*/ );
        this.barbiebody.anchor.setTo(0.5);
        // this.barbiebody.alpha =Main.arial_alpha[0];
        this.barbiegroup.add(this.barbiebody);

        this.monabody2 = game.add.sprite(286, 465, 'monabody2' /*+Main.arial_arr[0]*/ );
        this.monabody2.anchor.setTo(0.5);
        this.barbiebody.visible = false;
        this.barbiegroup.add(this.monabody2);

        // this.barbiebag1= game.add.sprite(206.7,495.9,'barbiebag'+Main.makarray[5]);
        //        this.barbiebag1.anchor.setTo(0.5);
        //        this.barbiebag1.alpha=0;       
        //        // this.barbiebag1.alpha =Main.arial_alpha[0];
        //        this.barbiegroup.add(this.barbiebag1); 

        //          this.barbiebodylsat= game.add.sprite(286,465,'barbiebodylsat'/*+Main.arial_arr[0]*/);
        //        this.barbiebodylsat.anchor.setTo(0.5);
        // this.barbiebodylsat.visible=false;
        //        this.barbiegroup.add(this.barbiebodylsat);  

        this.barbieshoe1 = game.add.sprite(307, 689, 'barbieshoe' + Main.makarray[2]);
        this.barbieshoe1.anchor.setTo(0.5);
        // this.barbieshoe1.alpha =Main.arial_alpha[0];
        this.barbiegroup.add(this.barbieshoe1);

        this.barbiedress1 = game.add.sprite(322.5, 455.9, 'barbiedress' + Main.makarray[0]);
        this.barbiedress1.anchor.setTo(0.5);
        // this.barbiedress1.alpha =Main.arial_alpha[0];
        this.barbiegroup.add(this.barbiedress1);


        this.barbiebag1 = game.add.sprite(183, 500, 'barbiebag' + Main.makarray[5]); /*206.7//495.9,*/
        this.barbiebag1.anchor.setTo(0.5);
        // this.barbiebag1.alpha=0;       
        this.barbiebag1.angle = 15;
        // this.barbiebag1.alpha =Main.arial_alpha[0];
        this.barbiegroup.add(this.barbiebag1);

        this.barbiebodylsat = game.add.sprite(286, 465, 'barbiebodylsat' /*+Main.arial_arr[0]*/ );
        this.barbiebodylsat.anchor.setTo(0.5);
        this.barbiebodylsat.visible = true;
        this.barbiegroup.add(this.barbiebodylsat);

        this.barbienecklace1 = game.add.sprite(306.7, 248.9, 'barbienecklace' + Main.makarray[3]);
        this.barbienecklace1.anchor.setTo(0.5);
        // this.barbienecklace1.alpha=0;
        // this.barbienecklace1.alpha =Main.arial_alpha[0];
        this.barbiegroup.add(this.barbienecklace1);

        this.barbiehead = game.add.sprite(303.7, 173.9, 'barbiehead' /*+Main.arial_arr[0]*/ );
        this.barbiehead.anchor.setTo(0.5);
        // this.barbiehead.alpha =Main.arial_alpha[0];
        this.barbiegroup.add(this.barbiehead);

        this.barbiefronthair1 = game.add.sprite(301.7, 218.9, 'barbiefronthair' + Main.makarray[1]);
        this.barbiefronthair1.anchor.setTo(0.5);
        // this.barbiefronthair1.alpha =Main.arial_alpha[0];
        this.barbiegroup.add(this.barbiefronthair1);


        this.barbieearing1 = game.add.sprite(271.7, 204.9, 'barbieearing' + Main.makarray[4]);
        this.barbieearing1.anchor.setTo(0.5);
        // this.barbieearing1.alpha=0;

        // this.barbieearing1.alpha =Main.arial_alpha[0];
        this.barbiegroup.add(this.barbieearing1);



        this.b_arbieearing1 = game.add.sprite(336.7, 204.9, 'barbieearing' + Main.makarray[4]);
        this.b_arbieearing1.anchor.setTo(0.5);
        // this.b_arbieearing1.alpha=0;

        // this.b_arbieearing1.alpha =Main.arial_alpha[0];
        this.barbiegroup.add(this.b_arbieearing1);

        // this.barbiebag1= game.add.sprite(183,500,'barbiebag'+Main.makarray[5]);
        //        this.barbiebag1.anchor.setTo(0.5);
        //        // this.barbiebag1.alpha =Main.arial_alpha[0];
        //        this.barbiegroup.add(this.barbiebag1); 



        // this.barbiehand2= game.add.sprite(206.7,495.9,'barbiehand2'/*+Main.arial_arr[0]*/);
        //        this.barbiehand2.anchor.setTo(0.5);
        //        // this.barbiehand2.scale.setTo(2.9);
        //        // this.barbiehand2.alpha =Main.arial_alpha[0];
        //        this.barbiegroup.add(this.barbiehand2); 


        // this.arbiehand3= game.add.sprite(206.7,495.9,'arbiehand3'/*+Main.arial_arr[0]*/);
        //        this.arbiehand3.anchor.setTo(0.5);
        //        // this.arbiehand3.scale.setTo(2.9);
        //        // this.arbiehand3.alpha =Main.arial_alpha[0];
        //        this.barbiegroup.add(this.arbiehand3); 


        // this.barbihand1= game.add.sprite(367,225,'barbihand1'/*+Main.arial_arr[0]*/);
        //        this.barbihand1.anchor.setTo(0.5);
        //        // this.barbihand1.alpha =Main.arial_alpha[0];
        //        this.barbiegroup.add(this.barbihand1); 



        this.barbiebodya = game.add.sprite(286, 465, 'barbiebodya' /*+Main.arial_arr[0]*/ );
        this.barbiebodya.anchor.setTo(0.5);
        // this.barbiebodya.alpha =Main.arial_alpha[0];
        this.barbiegroup.add(this.barbiebodya);

        this.barbiehand1 = game.add.sprite(323.7, 455.9, 'barbiehand' + Main.makarray[0]);
        this.barbiehand1.anchor.setTo(0.5);
        // this.barbiehand1.scale.setTo(2.9);
        // this.barbiehand1.alpha =Main.arial_alpha[0];
        this.barbiegroup.add(this.barbiehand1);



        if (Main.makarray[1] == 5) {
            this.barbieearing1.visible = true;
            this.b_arbieearing1.visible = false;

        } else {
            this.barbieearing1.visible = true;
            this.b_arbieearing1.visible = true;
        }

        this.barbiegroup.x = 500;
        this.barbiegroup.y = 120;
        this.barbiegroup.scale.x = -this.barbiegroup.scale.x;


        /////////////////////////////////////////////////////////
        //   this.barbiegroup = game.add.group();



        //    this.barbiebackdress1= game.add.sprite(322,444,'barbiebackdress'+Main.makarray[0]);
        //         this.barbiebackdress1.anchor.setTo(0.5);
        //           // this.barbiebackdress1.alpha =Main.arial_alpha[0];
        //         this.barbiegroup.add(this.barbiebackdress1); 


        //    this.barbiebackhair1= game.add.sprite(301,213,'barbiebackhair'+Main.makarray[1]);
        //         this.barbiebackhair1.anchor.setTo(0.5);
        //         // this.barbiebackhair1.alpha =Main.arial_alpha[0];
        //         this.barbiegroup.add(this.barbiebackhair1); 


        //  // this.barbiebag1= game.add.sprite(206.7,495.9,'barbiebag'+Main.makarray[5]);
        //  //        this.barbiebag1.anchor.setTo(0.5);
        //  //        // this.barbiebag1.alpha =Main.arial_alpha[0];
        //  //        this.barbiegroup.add(this.barbiebag1); 

        //    this.barbiebody= game.add.sprite(286,465,'barbiebody'/*+Main.arial_arr[0]*/);
        //         this.barbiebody.anchor.setTo(0.5);
        //         // this.barbiebody.alpha =Main.arial_alpha[0];
        //         this.barbiegroup.add(this.barbiebody); 

        //           this.monabody2= game.add.sprite(286,465,'monabody2'/*+Main.arial_arr[0]*/);
        //         this.monabody2.anchor.setTo(0.5);
        //  this.monabody2.visible=false;
        //         this.barbiegroup.add(this.monabody2);  

        //  // this.barbiebag1= game.add.sprite(206.7,495.9,'barbiebag'+Main.makarray[5]);
        //  //        this.barbiebag1.anchor.setTo(0.5);
        //  //        this.barbiebag1.alpha=0;       
        //  //        // this.barbiebag1.alpha =Main.arial_alpha[0];
        //  //        this.barbiegroup.add(this.barbiebag1); 

        //  //          this.barbiebodylsat= game.add.sprite(286,465,'barbiebodylsat'/*+Main.arial_arr[0]*/);
        //  //        this.barbiebodylsat.anchor.setTo(0.5);
        //  // this.barbiebodylsat.visible=false;
        //  //        this.barbiegroup.add(this.barbiebodylsat);  

        //         this.barbieshoe1= game.add.sprite(307,689,'barbieshoe'+Main.makarray[2]);
        //         this.barbieshoe1.anchor.setTo(0.5);
        //         // this.barbieshoe1.alpha =Main.arial_alpha[0];
        //         this.barbiegroup.add(this.barbieshoe1); 

        //         this.barbiedress1= game.add.sprite(322.5,455.9,'barbiedress'+Main.makarray[0]); 
        //         this.barbiedress1.anchor.setTo(0.5);
        //         // this.barbiedress1.alpha =Main.arial_alpha[0];
        //         this.barbiegroup.add(this.barbiedress1); 


        // this.barbiebag1= game.add.sprite(206.7,495.9,'barbiebag'+Main.makarray[5]);
        //         this.barbiebag1.anchor.setTo(0.5);
        //         this.barbiebag1.alpha=0;       
        //         // this.barbiebag1.alpha =Main.arial_alpha[0];
        //         this.barbiegroup.add(this.barbiebag1); 

        //           this.barbiebodylsat= game.add.sprite(286,465,'barbiebodylsat'/*+Main.arial_arr[0]*/);
        //         this.barbiebodylsat.anchor.setTo(0.5);
        //  this.barbiebodylsat.visible=false;
        //         this.barbiegroup.add(this.barbiebodylsat);  

        //         this.barbienecklace1= game.add.sprite(306.7,248.9,'barbienecklace'+Main.makarray[3]);
        //         this.barbienecklace1.anchor.setTo(0.5);
        //         this.barbienecklace1.alpha=0;
        //         // this.barbienecklace1.alpha =Main.arial_alpha[0];
        //         this.barbiegroup.add(this.barbienecklace1); 

        //   this.barbiehead= game.add.sprite(303.7,173.9,'barbiehead'/*+Main.arial_arr[0]*/);
        //         this.barbiehead.anchor.setTo(0.5);
        //         // this.barbiehead.alpha =Main.arial_alpha[0];
        //         this.barbiegroup.add(this.barbiehead); 

        //  this.barbiefronthair1= game.add.sprite(301.7,218.9,'barbiefronthair'+Main.makarray[1]);
        //         this.barbiefronthair1.anchor.setTo(0.5);
        //         // this.barbiefronthair1.alpha =Main.arial_alpha[0];
        //         this.barbiegroup.add(this.barbiefronthair1); 


        //  this.barbieearing1= game.add.sprite(271.7,204.9,'barbieearing'+Main.makarray[4]);
        //         this.barbieearing1.anchor.setTo(0.5);
        //         this.barbieearing1.alpha=0;

        //         // this.barbieearing1.alpha =Main.arial_alpha[0];
        //         this.barbiegroup.add(this.barbieearing1); 



        //  this.b_arbieearing1= game.add.sprite(336.7,204.9,'barbieearing'+Main.makarray[4]);
        //         this.b_arbieearing1.anchor.setTo(0.5);
        //         this.b_arbieearing1.alpha=0;

        //         // this.b_arbieearing1.alpha =Main.arial_alpha[0];
        //         this.barbiegroup.add(this.b_arbieearing1); 

        //  // this.barbiebag1= game.add.sprite(206.7,495.9,'barbiebag'+Main.makarray[5]);
        //  //        this.barbiebag1.anchor.setTo(0.5);
        //  //        // this.barbiebag1.alpha =Main.arial_alpha[0];
        //  //        this.barbiegroup.add(this.barbiebag1); 



        //  // this.barbiehand2= game.add.sprite(206.7,495.9,'barbiehand2'/*+Main.arial_arr[0]*/);
        //  //        this.barbiehand2.anchor.setTo(0.5);
        //  //        // this.barbiehand2.scale.setTo(2.9);
        //  //        // this.barbiehand2.alpha =Main.arial_alpha[0];
        //  //        this.barbiegroup.add(this.barbiehand2); 


        //  this.arbiehand3= game.add.sprite(206.7,495.9,'arbiehand3'/*+Main.arial_arr[0]*/);
        //         this.arbiehand3.anchor.setTo(0.5);
        //         // this.arbiehand3.scale.setTo(2.9);
        //         // this.arbiehand3.alpha =Main.arial_alpha[0];
        //         this.barbiegroup.add(this.arbiehand3); 


        //  // this.barbihand1= game.add.sprite(367,225,'barbihand1'/*+Main.arial_arr[0]*/);
        //  //        this.barbihand1.anchor.setTo(0.5);
        //  //        // this.barbihand1.alpha =Main.arial_alpha[0];
        //  //        this.barbiegroup.add(this.barbihand1); 



        //  this.barbiebodya= game.add.sprite(286,465,'barbiebodya'/*+Main.arial_arr[0]*/);
        //         this.barbiebodya.anchor.setTo(0.5);
        //         // this.barbiebodya.alpha =Main.arial_alpha[0];
        //         this.barbiegroup.add(this.barbiebodya); 

        //  this.barbiehand1= game.add.sprite(323.7,455.9,'barbiehand'+Main.makarray[0]);
        //         this.barbiehand1.anchor.setTo(0.5);
        //         // this.barbiehand1.scale.setTo(2.9);
        //         // this.barbiehand1.alpha =Main.arial_alpha[0];
        //         this.barbiegroup.add(this.barbiehand1); 
        ///////////////////
        this.morebtn = game.add.sprite(85, 730, 'more');
        this.morebtn.anchor.setTo(0.5);
        // this.morebtn.scale.setTo(0);
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
            this.shutter = game.add.sprite(0, 0, 'download');
            game.add.tween(this.shutter).to({
                y: -850
            }, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                // game.add.tween(this.thumbGroup).to({y:0},700,Phaser.Easing.Quadratic.Out,true);
                game.add.tween(this.playbtn.scale).to({
                    x: 1,
                    y: 1
                }, 700, Phaser.Easing.Quadratic.Out, true);
            }, this);
        }


        this.logoVar = game.add.sprite(5, 5, 'logo');
        this.logoVar.scale.setTo(0.8);
        this.logoVar.inputEnabled = true;
        this.logoVar.input.useHandCursor = true;
        this.logoVar.events.onInputUp.add(this.openLink, this);

        this.musicButton = game.add.sprite(407, 5, "soundicon");
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
            MyShowAD('intro');


            Main.makarray = [1, 1, 1, 1, 1, 1];

        });

    },
}

function MyShowAD(state) {
    Main.music.pause();
    game.state.start(state);
    Main.music.resume();
    //YYGSDK.adsManager.request(YYG.TYPE.INTERSTITIAL,YYG.EventHandler.create(this,()=>{game.state.start(state);Main.music.resume();}),YYG.EventHandler.create(this,()=>{game.state.start(state);Main.music.resume();})); 
}







game.state.add('boot', Main.boot);
game.state.add('preloader', Main.preloader);
game.state.add('title', Main.title);
game.state.add('intro', Main.intro);
game.state.add('barbie', Main.barbie);
game.state.add('final_screen', Main.final_screen);

game.state.start('boot');