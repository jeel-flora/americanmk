var game = new Phaser.Game(504, 800, Phaser.AUTO, 'gameContainer');
var Main = {
    music: null,

    shutterOn: [true],


    color_aX: [57, 63, 102, 103, 143, 140, 170, 175, 204, 199, 223, 223, 243, 245, 268, 268, 217, 298, 299, 327, 327, 364, 356, 381, 381, 415, 410, 332, 317, 313, 327, 337, 292, 285, 292, 272, 252, 226, 202, 156, 107, 55, 46, 92, 89, 134, 131, 154, 154, 182, 184, 176, 205, 214, 214, 235, 237, 258, 278],
    color_aY: [382, 405, 354, 380, 373, 398, 355, 376, 362, 385, 359, 377, 377, 389, 392, 408, 398, 382, 398, 395, 418, 422, 449, 428, 442, 437, 458, 451, 446, 463, 481, 499, 500, 478, 445, 450, 432, 423, 428, 421, 408, 430, 456, 436, 449, 433, 441, 445, 467, 444, 469, 488, 473, 488, 451, 464, 485, 483, 496],

    color_bX: [57, 63, 102, 103, 143, 140, 170, 175, 204, 199, 223, 223, 243, 245, 268, 268, 217, 298, 299, 327, 327, 364, 356, 381, 381, 415, 410, 332, 317, 313, 327, 337, 292, 285, 292, 272, 252, 226, 202, 156, 107, 55, 46, 92, 89, 134, 131, 154, 154, 182, 184, 176, 205, 214, 214, 235, 237, 258, 278],
    color_bY: [382, 405, 354, 380, 373, 398, 355, 376, 362, 385, 359, 377, 377, 389, 392, 408, 398, 382, 398, 395, 418, 422, 449, 428, 442, 437, 458, 451, 446, 463, 481, 499, 500, 478, 445, 450, 432, 423, 428, 421, 408, 430, 456, 436, 449, 433, 441, 445, 467, 444, 469, 488, 473, 488, 451, 464, 485, 483, 496],

    color_cX: [61, 88, 110, 135, 166, 196, 222, 252, 283, 312, 42, 25, 25, 23, 24, 49, 51, 66, 90, 115, 145, 176, 205, 231, 260, 286, 321, 350, 377, 402, 429, 452, 472, 396, 372, 351, 330, 307, 278, 252, 217, 186, 157, 120, 95, 69, 103, 130, 159, 190, 144, 166, 195, 175, 218, 241, 262, 287, 309, 335, 351, 427, 170, 203, 228, 255, 218, 239, 244, 267, 283, 298, 322, 349, 324, 289],
    color_cY: [384, 376, 354, 355, 354, 353, 355, 357, 355, 371, 404, 427, 445, 462, 491, 465, 440, 419, 403, 387, 385, 382, 380, 385, 382, 386, 395, 404, 412, 423, 433, 448, 469, 448, 446, 435, 426, 418, 412, 416, 414, 407, 413, 412, 428, 446, 449, 435, 439, 432, 459, 468, 459, 450, 440, 436, 439, 440, 448, 456, 465, 453, 486, 485, 474, 468, 495, 459, 495, 490, 465, 478, 473, 483, 488, 496],

    color_ddX: [362, 385, 405, 428, 445, 457, 457, 445, 429, 409, 383, 365, 358, 383, 408, 434, 425, 400, 391, 418, 411],
    color_ddY: [488, 481, 476, 471, 482, 505, 526, 546, 564, 563, 558, 541, 515, 512, 500, 508, 531, 533, 504, 488, 513],

    color_dX: [48, 67, 86, 110, 133, 143, 150, 150, 138, 145, 112, 92, 67, 51, 48, 71, 93, 117, 120, 107, 79, 99, 84],
    color_dY: [490, 485, 480, 480, 486, 499, 519, 537, 559, 536, 563, 563, 558, 542, 517, 517, 503, 504, 523, 544, 528, 519, 490],


    color_eeX: [362, 385, 405, 428, 445, 457, 457, 445, 429, 409, 383, 365, 358, 383, 408, 434, 425, 400, 391, 418, 411],
    color_eeY: [488, 481, 476, 471, 482, 505, 526, 546, 564, 563, 558, 541, 515, 512, 500, 508, 531, 533, 504, 488, 513],

    color_eX: [48, 67, 86, 110, 133, 143, 150, 150, 138, 145, 112, 92, 67, 51, 48, 71, 93, 117, 120, 107, 79, 99, 84],
    color_eY: [490, 485, 480, 480, 486, 499, 519, 537, 559, 536, 563, 563, 558, 542, 517, 517, 503, 504, 523, 544, 528, 519, 490],


    color_ffX: [362, 385, 405, 428, 445, 457, 457, 445, 429, 409, 383, 365, 358, 383, 408, 434, 425, 400, 391, 418, 411],
    color_ffY: [488, 481, 476, 471, 482, 505, 526, 546, 564, 563, 558, 541, 515, 512, 500, 508, 531, 533, 504, 488, 513],

    color_fX: [48, 67, 86, 110, 133, 143, 150, 150, 138, 145, 112, 92, 67, 51, 48, 71, 93, 117, 120, 107, 79, 99, 84],
    color_fY: [490, 485, 480, 480, 486, 499, 519, 537, 559, 536, 563, 563, 558, 542, 517, 517, 503, 504, 523, 544, 528, 519, 490],


    // color_eX:[62,85,118,141,49,74,104,127,150,134,111,88,52,69,93,112,127,358,367,379,400,422,438,452,452,451,438,415,391,378,387,401,424,427,414,406,446,395,116],
    // color_eY:[485,474,474,490,513,508,499,506,517,540,524,533,538,552,563,546,565,527,503,476,472,471,477,499,520,538,556,556,550,532,520,496,496,518,538,518,499,501,483],

    // color_eeX:[62,85,118,141,49,74,104,127,150,134,111,88,52,69,93,112,127,358,367,379,400,422,438,452,452,451,438,415,391,378,387,401,424,427,414,406,446,395,116],
    // color_eeY:[485,474,474,490,513,508,499,506,517,540,524,533,538,552,563,546,565,527,503,476,472,471,477,499,520,538,556,556,550,532,520,496,496,518,538,518,499,501,483],

    // color_fX:[62,85,118,141,49,74,104,127,150,134,111,88,52,69,93,112,127,358,367,379,400,422,438,452,452,451,438,415,391,378,387,401,424,427,414,406,446,395,116],
    // color_fY:[485,474,474,490,513,508,499,506,517,540,524,533,538,552,563,546,565,527,503,476,472,471,477,499,520,538,556,556,550,532,520,496,496,518,538,518,499,501,483],


    // color_ffX:[62,85,118,141,49,74,104,127,150,134,111,88,52,69,93,112,127,358,367,379,400,422,438,452,452,451,438,415,391,378,387,401,424,427,414,406,446,395,116],
    // color_ffY:[485,474,474,490,513,508,499,506,517,540,524,533,538,552,563,546,565,527,503,476,472,471,477,499,520,538,556,556,550,532,520,496,496,518,538,518,499,501,483],

    car_array: [1],
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
        game.load.spritesheet('soundicon', 'assets/soundicon.png', 77, 82, 2);
        game.load.image('logo', 'assets/logo.png');
        game.load.spritesheet('effects', 'assets/effects.png', 141, 134);
        game.load.spritesheet('effectssd', 'assets/efftes012.png', 367, 335);

        game.load.image('titlebg', 'assets/titlebg.png');
        game.load.spritesheet('t_timer', 'assets/t_timer.png', 160, 160, 60);

        game.load.image('morebtn', 'assets/btns/btn0004.png');
        game.load.image('playbtn', 'assets/btns/btn0003.png');
        game.load.image('nextbtn', 'assets/btns/btn0005.png');
        game.load.image('restebtn', 'assets/btns/btn0001.png');
        game.load.image('donebtn', 'assets/btns/btn0002.png');

        game.load.image('baby1', 'assets/title/baby1.png');
        game.load.image('mom', 'assets/title/mom.png');
        game.load.image('t_text', 'assets/title/t_text.png');
        game.load.image('light', 'assets/title/light.png');
        game.load.image('t_bg', 'assets/title/t_bg.jpg');
        game.load.image('p_bg', 'assets/title/p_bg.jpg');

        game.load.image('cub', 'assets/packing/cub.png');
        game.load.image('file', 'assets/packing/file.png');
        game.load.image('lap', 'assets/packing/lap0001.png');
        game.load.image('lap0002', 'assets/packing/lap0002.png');
        game.load.image('lnch', 'assets/packing/lap.png');
        game.load.image('ironbox', 'assets/packing/ironbox.png');
        game.load.image('n_paper', 'assets/packing/n_paper.png');
        game.load.spritesheet('ani_door', 'assets/packing/ani_door.png', 291, 377, 5);
        game.load.spritesheet('ani_bag', 'assets/packing/ani_bag.png', 218, 285, 22);
        game.load.spritesheet('ani_iorn', 'assets/packing/ani_iorn.png', 396, 312, 24);
        game.load.spritesheet('arrow', 'assets/arrow.png', 66, 89, 13);


        game.load.image('i_panel', 'assets/iron/i_panel.png');
        game.load.image('i_hanger', 'assets/iron/i_hanger.png');
        game.load.image('h_pant', 'assets/iron/h_pant.png');
        game.load.image('h_shirt', 'assets/iron/h_shirt.png');
        game.load.image('h_p1', 'assets/iron/h_p1.png');
        game.load.image('h_s1', 'assets/iron/h_s1.png');
        game.load.image('pant0001', 'assets/iron/pant0001.png');
        game.load.image('pant0002', 'assets/iron/pant0002.png');
        game.load.image('pant0003', 'assets/iron/pant0003.png');
        game.load.image('pant0004', 'assets/iron/pant0004.png');
        game.load.image('shirt0001', 'assets/iron/shirt0001.png');
        game.load.image('shirt0002', 'assets/iron/shirt0002.png');
        game.load.image('shirt0003', 'assets/iron/shirt0003.png');
        game.load.image('shirt0004', 'assets/iron/shirt0004.png');
        game.load.image('shirt0005', 'assets/iron/shirt0005.png');

        game.load.spritesheet('ani_air', 'assets/car/ani_air.png', 158, 173, 30);
        game.load.spritesheet('ani_water', 'assets/car/ani_water.png', 298, 365, 12);
        game.load.spritesheet('brush1', 'assets/car/brush1.png', 191, 56, 10);
        game.load.spritesheet('brush2', 'assets/car/brush2.png', 113, 75, 10);
        game.load.image('bubble', 'assets/car/bubble.png');
        game.load.image('bubble_1', 'assets/car/bubble_1.png');
        game.load.image('bubble_12', 'assets/car/bubble_12.png');
        game.load.image('water', 'assets/car/water.png');
        game.load.image('water_1', 'assets/car/water_1.png');
        game.load.image('water_12', 'assets/car/water_12.png');
        game.load.image('shower1', 'assets/car/shower1.png');
        game.load.image('c_design', 'assets/car/c_design.png');
        game.load.image('air', 'assets/car/air.png');
        game.load.image('c_bg', 'assets/car/c_bg.jpg');



        game.load.spritesheet('ani_spray', 'assets/clean/ani_spray.png', 191, 783, 12);
        game.load.spritesheet('ani_vacum', 'assets/clean/ani_vacum.png', 202, 147, 10);
        game.load.spritesheet('ani_sponch', 'assets/clean/ani_sponch.png', 100, 100, 18);
        game.load.image('cl_bg', 'assets/clean/cl_bg.jpg');
        game.load.image('cl_light', 'assets/clean/cl_light.png');
        game.load.image('cl_panel', 'assets/clean/cl_panel.png');
        game.load.image('teddy', 'assets/clean/teddy.png');
        game.load.image('train', 'assets/clean/train.png');
        game.load.image('c1_1', 'assets/clean/c1_1.png');



        game.load.spritesheet('ani_bowl1', 'assets/cooking/ani_bowl1.png', 223, 150, 27);
        game.load.spritesheet('ani_ice', 'assets/cooking/ani_ice.png', 298, 356, 10);
        game.load.spritesheet('ani_bowl2', 'assets/cooking/ani_bowl2.png', 235, 300, 33);
        game.load.spritesheet('ani_bowl3', 'assets/cooking/ani_bowl3.png', 176, 120, 14);
        game.load.spritesheet('ani_bowl4', 'assets/cooking/ani_bowl4.png', 176, 121, 11);
        game.load.spritesheet('ani_bowl5', 'assets/cooking/ani_bowl5.png', 175, 288, 36);
        game.load.spritesheet('ani_brown', 'assets/cooking/ani_brown.png', 224, 203, 8);
        game.load.spritesheet('ani_brown2', 'assets/cooking/ani_brown2.png', 241, 175, 7);
        game.load.spritesheet('ani_brownie', 'assets/cooking/ani_brownie.png', 143, 214, 17);
        game.load.spritesheet('ani_choco', 'assets/cooking/ani_choco.png', 245, 203, 7);
        game.load.spritesheet('ani_clr1', 'assets/cooking/ani_clr1.png', 143, 117, 6);
        game.load.spritesheet('ani_clr2', 'assets/cooking/ani_clr2.png', 142, 96, 7);
        game.load.spritesheet('ani_clr3', 'assets/cooking/ani_clr3.png', 142, 96, 7);
        game.load.spritesheet('ani_corn', 'assets/cooking/ani_corn.png', 180, 231, 16);
        game.load.spritesheet('ani_cream', 'assets/cooking/ani_cream.png', 152, 314, 18);
        game.load.spritesheet('ani_drop_cream1', 'assets/cooking/ani_drop_cream1.png', 135, 243, 11);
        game.load.spritesheet('ani_drop1', 'assets/cooking/ani_drop1.png', 353, 257, 8);
        game.load.spritesheet('ani_egg', 'assets/cooking/ani_egg.png', 175, 229, 28);
        game.load.spritesheet('ani_flour', 'assets/cooking/ani_flour.png', 187, 261, 19);
        game.load.spritesheet('ani_press1', 'assets/cooking/ani_press1.png', 269, 344, 16);
        game.load.spritesheet('ani_roll', 'assets/cooking/ani_roll.png', 207, 117, 16);
        game.load.spritesheet('ani_roller1', 'assets/cooking/ani_roller1.png', 263, 234, 6);
        game.load.spritesheet('ani_roller2', 'assets/cooking/ani_roller2.png', 257, 231, 7);
        game.load.spritesheet('ani_roller3', 'assets/cooking/ani_roller3.png', 275, 231, 6);
        game.load.spritesheet('ani_salt', 'assets/cooking/ani_salt.png', 160, 163, 21);
        game.load.spritesheet('ani_spoon1', 'assets/cooking/ani_spoon1.png', 174, 267, 34);
        game.load.spritesheet('ani_sugar', 'assets/cooking/ani_sugar.png', 188, 297, 19);
        game.load.spritesheet('corn_plate', 'assets/cooking/corn_plate.png', 227, 110, 10);
        game.load.spritesheet('on_off', 'assets/cooking/on_off.png', 34, 35, 6);
        game.load.spritesheet('oven1', 'assets/cooking/oven1.png', 198, 345, 3);
        game.load.spritesheet('bowl_ice_ani', 'assets/cooking/bowl_ice_ani.png', 313, 182, 2);
        game.load.image('brown', 'assets/cooking/brown.png');
        game.load.image('brown1', 'assets/cooking/brown1.png');
        game.load.image('brownie1', 'assets/cooking/brownie1.png');
        game.load.image('choco', 'assets/cooking/choco.png');
        game.load.image('ck_bg', 'assets/cooking/ck_bg.jpg');
        game.load.image('ck_bg2', 'assets/cooking/ck_bg2.jpg');
        game.load.image('ck_bg3', 'assets/cooking/ck_bg3.jpg');
        game.load.image('ck_panel', 'assets/cooking/ck_panel.png');
        game.load.image('cone_roler', 'assets/cooking/cone_roler.png');
        game.load.image('cone1', 'assets/cooking/cone1.png');
        game.load.image('cone2', 'assets/cooking/cone2.png');
        game.load.image('cone3', 'assets/cooking/cone3.png');
        game.load.image('corn', 'assets/cooking/corn.png');
        game.load.image('cream', 'assets/cooking/cream.png');
        game.load.image('drill', 'assets/cooking/drill.png');
        game.load.image('drop_brownie', 'assets/cooking/drop_brownie.png');
        game.load.image('drop1', 'assets/cooking/drop1.png');
        game.load.image('egg', 'assets/cooking/egg.png');
        game.load.image('f_choco', 'assets/cooking/f_choco.png');
        game.load.image('f_plate', 'assets/cooking/f_plate.png');
        game.load.image('f_stand', 'assets/cooking/f_stand.png');
        game.load.image('flour', 'assets/cooking/flour.png');
        game.load.image('front', 'assets/cooking/front.png');
        game.load.image('front1', 'assets/cooking/front1.png');
        game.load.image('plate1', 'assets/cooking/plate1.png');
        game.load.image('roller', 'assets/cooking/roller.png');
        game.load.image('salt', 'assets/cooking/salt.png');
        game.load.image('sugar', 'assets/cooking/sugar.png');
        game.load.image('pink', 'assets/cooking/pink.png');
        game.load.image('green', 'assets/cooking/green.png');
        game.load.image('yellow', 'assets/cooking/yellow.png');
        game.load.image('f_bronbowl', 'assets/cooking/f_bronbowl.png');
        game.load.image('f_plate1', 'assets/cooking/f_plate1.png');
        game.load.image('f_plate2', 'assets/cooking/f_plate2.png');
        game.load.image('stand5', 'assets/cooking/stand5.png');
        game.load.image('stand6', 'assets/cooking/stand6.png');
        game.load.image('spoon5', 'assets/cooking/spoon5.png');
        game.load.image('bowl_ice', 'assets/cooking/bowl_ice.png');
        game.load.image('bowl_ice1', 'assets/cooking/bowl_ice1.png');
        game.load.image('bowl_ice2', 'assets/cooking/bowl_ice2.png');
        game.load.image('dust_2', 'assets/car/dust_2.png');






        for (var i = 1; i <= 15; i++) {
            if (i <= 2) {
                game.load.image('i_pant' + i, 'assets/iron/i_pant' + i + '.png');
                game.load.image('i_shirt' + i, 'assets/iron/i_shirt' + i + '.png');
                game.load.image('tab' + i, 'assets/packing/tab' + i + '.png');
                game.load.image('i_tab' + i, 'assets/packing/i_tab' + i + '.png');
                game.load.image('tire' + i, 'assets/car/tire' + i + '.png');
                game.load.image('bucket' + i, 'assets/car/bucket' + i + '.png');
                game.load.image('cl_basket' + i, 'assets/clean/cl_basket' + i + '.png');
                game.load.image('cl_dust' + i, 'assets/clean/cl_dust' + i + '.png');
                game.load.image('c1_dustbin' + i, 'assets/clean/c1_dustbin' + i + '.png');
                game.load.image('toy' + i, 'assets/clean/toy' + i + '.png');
                game.load.image('eg_bowl' + i, 'assets/cooking/eg_bowl' + i + '.png');
                game.load.image('f_spoon' + i, 'assets/cooking/f_spoon' + i + '.png');
            }
            if (i <= 3) {
                game.load.image('dad' + i, 'assets/title/dad' + i + '.png');
                game.load.image('d_pop' + i, 'assets/title/d_pop' + i + '.png');
                game.load.image('ice_pop000' + i, 'assets/title/ice_pop000' + i + '.png');
                game.load.image('m_pop' + i, 'assets/title/m_pop' + i + '.png');
                game.load.image('final_cone' + i, 'assets/cooking/final_cone' + i + '.png');
            }
            if (i <= 6) {
                game.load.image('b_pop' + i, 'assets/title/b_pop' + i + '.png');
                game.load.image('cl_w' + i, 'assets/clean/cl_w' + i + '.png');
                game.load.image('heater' + i, 'assets/cooking/heater' + i + '.png');
            }
            if (i <= 4) {
                game.load.image('dust' + i, 'assets/car/dust' + i + '.png');
                game.load.image('cl_tool' + i, 'assets/clean/cl_tool' + i + '.png');
                game.load.image('clr_bowl' + i, 'assets/cooking/clr_bowl' + i + '.png');
                game.load.image('f_cone1_' + i, 'assets/cooking/f_cone1_' + i + '.png');
                game.load.image('f_cone2_' + i, 'assets/cooking/f_cone2_' + i + '.png');
                game.load.image('spoon' + i, 'assets/cooking/spoon' + i + '.png');
                game.load.image('f_cone3_' + i, 'assets/cooking/f_cone3_' + i + '.png');
                game.load.image('stand' + i, 'assets/cooking/stand' + i + '.png');
            }
            if (i <= 7) {
                game.load.image('c_clr' + i, 'assets/car/c_clr' + i + '.png');
                game.load.image('c_mirror' + i, 'assets/car/c_mirror' + i + '.png');
                game.load.image('c_icon' + i, 'assets/btns/c_icon' + i + '.png');
            }
        }


        /*  for(i=0;i<RelatedGames.length; i++)
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
            //AAAAAA
            // game.state.start('car_wash');


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
        CreateLinksInGame("Baby-Taylor-Helping-Time", "loading", "logo");
    }
}
// tttttt
Main.title = function() {}

Main.title.prototype = {
    create: function() {
        this.levelGroup = game.add.group();
        this.bg = game.add.sprite(0, 0, 't_bg');
        this.levelGroup.add(this.bg);

        this.dad1 = game.add.sprite(150, 432.35, 'dad1');
        this.dad1.anchor.setTo(0.5);

        this.mom = game.add.sprite(420.65, 427.9, 'mom');
        this.mom.anchor.setTo(0.5);

        this.baby1 = game.add.sprite(264.3, 454.65, 'baby1');
        this.baby1.anchor.setTo(0.5);

        this.t_text = game.add.sprite(250.65, 592.8, 't_text');
        this.t_text.anchor.setTo(0.5);


        this.morebtn = game.add.sprite(170, 730, 'morebtn');
        this.morebtn.anchor.setTo(0.5);
        this.morebtn.inputEnabled = true;
        this.morebtn.input.useHandCursor = true;
        this.morebtn.events.onInputUp.add(this.moreLink, this);
        this.morebtn.events.onInputOver.add(this.btnOver, this);
        this.morebtn.events.onInputOut.add(this.btnOut, this);

        this.playbtn = game.add.sprite(360, 730, 'playbtn');
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
        CreateLinksInGame("Baby-Taylor-Helping-Time", "menu", "logo");
    },
    moreLink: function() {
        CreateLinksInGame("Baby-Taylor-Helping-Time", "menu", "more");
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
        game.state.start('packing');
    },
}

Main.intro = function() {}

Main.intro.prototype = {
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
        CreateLinksInGame("Baby-Taylor-Helping-Time", "game", "logo");
    },
    moreLink: function() {
        CreateLinksInGame("Baby-Taylor-Helping-Time", "game", "morebutton");
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

// pppppp

Main.packing = function() {}

Main.packing.prototype = {
    create: function() {
        this.s1drag = false;
        this.s2drag = false;
        this.levelGroup = game.add.group();
        this.introbg = game.add.sprite(0, 0, 'p_bg');
        this.levelGroup.add(this.introbg);

        this.light = game.add.sprite(262, 59.5, 'light');
        this.light.anchor.setTo(0.5);

        this.cub = game.add.sprite(385.3, 320.2, 'cub');
        this.cub.anchor.setTo(0.5);
        this.cub.scale.setTo(0.8);


        this.i_hanger1 = game.add.sprite(324, 232, 'i_hanger');
        this.i_hanger1.anchor.setTo(0.5);

        this.h_shirt = game.add.sprite(325, 278, 'h_shirt');
        this.h_shirt.anchor.setTo(0.5);
        this.h_shirt.scale.setTo(0.8);
        // this.h_shirt.inputEnabled = true;
        // this.h_shirt.input.useHandCursor = true;
        this.h_shirt.events.onInputDown.add(function() {
            this.d_arrow7.visible = false;
            this.d_arrow8.visible = true;
            this.h_shirt.loadTexture('h_s1')
            game.world.bringToTop(this.h_shirt)
            this.h_shirt.inputEnabled = false;
            this.s1drag = true;
            this.i_tab1.inputEnabled = true;
            this.i_tab1.input.useHandCursor = true;
        }, this);


        this.i_hanger2 = game.add.sprite(367, 232, 'i_hanger');
        this.i_hanger2.anchor.setTo(0.5);

        this.h_pant1 = game.add.sprite(370, 280, 'h_p1');
        this.h_pant1.anchor.setTo(0.5);
        this.h_pant1.scale.setTo(0.85);
        this.h_pant1.visible = false;

        this.h_pant = game.add.sprite(370, 280, 'h_pant');
        this.h_pant.anchor.setTo(0.5);
        this.h_pant.scale.setTo(0.9);
        // this.h_pant.inputEnabled = true;
        // this.h_pant.input.useHandCursor = true;
        this.h_pant.events.onInputDown.add(function() {
            this.d_arrow7.visible = false;
            this.d_arrow8.visible = true;
            game.world.bringToTop(this.h_pant1)
            this.h_pant.inputEnabled = false;
            this.h_pant.visible = false;
            this.h_pant1.visible = true;
            this.s2drag = true;
            this.i_tab1.inputEnabled = true;
            this.i_tab1.input.useHandCursor = true;
        }, this);

        this.ani_door = game.add.sprite(385, 328, 'ani_door');
        this.ani_door.anchor.setTo(0.5);
        this.ani_door.scale.setTo(0.8);
        // this.ani_door.inputEnabled=true;
        // this.ani_door.input.useHandCursor=true;
        this.ani_door.events.onInputDown.add(function() {
            this.d_arrow6.visible = false;
            this.ani_door.inputEnabled = false;
            this.ani_door.animations.add('ani_door');
            this.ani_door.animations.play('ani_door', 10, false).onComplete.add(function() {
                this.d_arrow7.visible = true;
                this.h_shirt.inputEnabled = true;
                this.h_shirt.input.useHandCursor = true;
            }, this);
        }, this);




        this.i_tab_cnt = 0;
        this.i_tab1 = game.add.sprite(135.2, 470.75, 'i_tab1');
        this.i_tab1.anchor.setTo(0.5);
        // this.i_tab1.inputEnabled = true;
        // this.i_tab1.input.useHandCursor = true;
        this.i_tab1.events.onInputDown.add(function() {
            this.d_arrow8.visible = false;
            this.i_tab1.inputEnabled = false;
            this.i_tab_cnt++
                if (this.i_tab_cnt == 1) {
                    this.i_s1.visible = true;
                    this.h_shirt.visible = false;
                    this.h_pant.inputEnabled = true;
                    this.h_pant.input.useHandCursor = true;
                    this.d_arrow7.visible = true;
                    this.d_arrow7.x = 365;

                }
            if (this.i_tab_cnt == 2) {
                this.i_p1.visible = true;
                this.h_pant1.visible = false;

                game.add.tween(this.iron_grp.scale).to({
                    x: 1,
                    y: 1
                }, 700, Phaser.Easing.Quadratic.Out, true, 1000).onComplete.add(function() {
                    this.ani_door.frame = 0;
                    this.i_p1.visible = false;
                    this.i_s1.visible = false;
                    this.d_arrow9.visible = true;
                    this.ani_iorn1.inputEnabled = true;
                    this.ani_iorn1.input.useHandCursor = true;
                    this.ani_iorn1.input.enableDrag();
                }, this);
            }


        }, this);

        this.i_s1 = game.add.sprite(70.2, 430.75, 'shirt0001');
        this.i_s1.anchor.setTo(0.5);
        this.i_s1.scale.setTo(0.8);
        this.i_s1.visible = false;

        this.i_p1 = game.add.sprite(180.2, 430.75, 'h_p1');
        this.i_p1.anchor.setTo(0.5);
        this.i_p1.scale.setTo(0.7);
        this.i_p1.visible = false;

        this.ani_iorn = game.add.sprite(310, 425, 'ironbox');
        this.ani_iorn.anchor.setTo(0.5);
        this.ani_iorn.rotation = -0.5;

        this.baby1 = game.add.sprite(350, 580, 'baby1');
        this.baby1.anchor.setTo(0.5);

        this.tab1 = game.add.sprite(-37, 672.85, 'tab1');
        this.tab1.anchor.setTo(0.5);

        this.tab2 = game.add.sprite(227.1, 789.45, 'tab2');
        this.tab2.anchor.setTo(0.5);

        this.bag_cnt = 0;
        this.ani_bag = game.add.sprite(409.4, 667.95, 'ani_bag');
        this.ani_bag.anchor.setTo(0.5);
        // this.ani_bag.inputEnabled=true;
        // this.ani_bag.input.useHandCursor=true;
        // this.ani_bag.input.pixelPerfectClick=true;
        // this.ani_bag.input.pixelPerfectOver=true;
        this.ani_bag.events.onInputDown.add(function() {
            this.bag_cnt++
                this.ani_bag.inputEnabled = false;
            if (this.bag_cnt == 1) {
                this.d_arrow1.visible = false;
                this.d_arrow2.visible = true;
                this.ani_bag.frame = 1;
                this.file.inputEnabled = true;
                this.file.input.useHandCursor = true;
                this.file.input.enableDrag();
            }
            if (this.bag_cnt == 2) {
                this.ani_bag.frame = 21;
                this.d_arrow1.visible = false;
                this.ani_door.inputEnabled = true;
                this.ani_door.input.useHandCursor = true;
                this.d_arrow6.visible = true;
            }
        }, this);


        this.lnch = game.add.sprite(65.05, 530.25, 'lnch');
        this.lnch.anchor.setTo(0.5);
        this.lnch.scale.setTo(0.8);
        // this.lnch.inputEnabled = true;
        // this.lnch.input.useHandCursor = true;
        // this.lnch.input.enableDrag();
        this.lnch.events.onInputDown.add(function() {
            this.d_arrow5.visible = false;
            this.d_arrow1.visible = true;
            // game.world.bringToTop(this.lnch)
        }, this);
        this.lnch.events.onInputUp.add(function() {

            if ((game.input.activePointer.x > 350 && game.input.activePointer.x < 500 && game.input.activePointer.y > 550 && game.input.activePointer.y < 800)) {
                this.d_arrow1.visible = false;

                this.lnch.visible = false;
                this.ani_bag.animations.add('ani_bag', [15, 16, 17, 18, 19, 20]);
                this.ani_bag.animations.play('ani_bag', 10, false).onComplete.add(function() {
                    this.d_arrow1.visible = true;
                    this.ani_bag.inputEnabled = true;
                    this.ani_bag.input.useHandCursor = true;
                    this.ani_bag.input.pixelPerfectClick = true;
                    this.ani_bag.input.pixelPerfectOver = true;
                }, this);

            } else {
                this.d_arrow5.visible = true;
                this.d_arrow1.visible = false;
                game.add.tween(this.lnch).to({
                    x: 65.05,
                    y: 530.25
                }, 700, Phaser.Easing.Quadratic.Out, true)
            }
        }, this);

        this.n_paper = game.add.sprite(84, 630, 'n_paper');
        this.n_paper.anchor.setTo(0.5);
        this.n_paper.scale.setTo(0.95);
        // this.n_paper.inputEnabled = true;
        // this.n_paper.input.useHandCursor = true;
        // this.n_paper.input.enableDrag();
        this.n_paper.events.onInputDown.add(function() {
            this.d_arrow4.visible = false;
            this.d_arrow1.visible = true;
            // game.world.bringToTop(this.n_paper)
        }, this);
        this.n_paper.events.onInputUp.add(function() {

            if ((game.input.activePointer.x > 350 && game.input.activePointer.x < 500 && game.input.activePointer.y > 550 && game.input.activePointer.y < 800)) {
                this.d_arrow1.visible = false;

                this.n_paper.visible = false;
                this.ani_bag.animations.add('ani_bag', [10, 11, 12, 13, 14]);
                this.ani_bag.animations.play('ani_bag', 10, false).onComplete.add(function() {
                    this.d_arrow5.visible = true;
                    this.lnch.inputEnabled = true;
                    this.lnch.input.useHandCursor = true;
                    this.lnch.input.enableDrag();
                }, this);

            } else {
                this.d_arrow4.visible = true;
                this.d_arrow1.visible = false;
                game.add.tween(this.n_paper).to({
                    x: 84,
                    y: 630
                }, 700, Phaser.Easing.Quadratic.Out, true)
            }
        }, this);

        this.lap = game.add.sprite(63.05, 707.45, 'lap');
        this.lap.anchor.setTo(0.5);
        // this.lap.rotation=1.6;
        // this.lap.inputEnabled = true;
        // this.lap.input.useHandCursor = true;
        // this.lap.input.enableDrag();
        this.lap.events.onInputDown.add(function() {
            this.d_arrow3.visible = false;
            this.d_arrow1.visible = true;
            // game.world.bringToTop(this.lap)
        }, this);
        this.lap.events.onInputUp.add(function() {

            if ((game.input.activePointer.x > 350 && game.input.activePointer.x < 500 && game.input.activePointer.y > 550 && game.input.activePointer.y < 800)) {
                this.d_arrow1.visible = false;
                this.lap.visible = false;
                this.ani_bag.animations.add('ani_bag', [5, 6, 7, 8, 9]);
                this.ani_bag.animations.play('ani_bag', 10, false).onComplete.add(function() {
                    this.d_arrow4.visible = true;
                    this.n_paper.inputEnabled = true;
                    this.n_paper.input.useHandCursor = true;
                    this.n_paper.input.enableDrag();
                }, this);

            } else {
                this.d_arrow3.visible = true;
                this.d_arrow1.visible = false;
                game.add.tween(this.lap).to({
                    x: 63.05,
                    y: 707.45
                }, 700, Phaser.Easing.Quadratic.Out, true)
            }
        }, this);

        this.file = game.add.sprite(220, 718.8, 'file');
        this.file.anchor.setTo(0.5);
        this.file.scale.setTo(0.9);
        // this.file.inputEnabled = true;
        // this.file.input.useHandCursor = true;
        // this.file.input.enableDrag();
        this.file.events.onInputDown.add(function() {
            // game.world.bringToTop(this.file)
            this.d_arrow2.visible = false;
            this.d_arrow1.visible = true;
        }, this);
        this.file.events.onInputUp.add(function() {

            if ((game.input.activePointer.x > 350 && game.input.activePointer.x < 500 && game.input.activePointer.y > 550 && game.input.activePointer.y < 800)) {
                this.d_arrow1.visible = false;
                this.file.visible = false;
                this.ani_bag.animations.add('ani_bag', [2, 3, 4]);
                this.ani_bag.animations.play('ani_bag', 10, false).onComplete.add(function() {
                    this.d_arrow3.visible = true;
                    this.lap.inputEnabled = true;
                    this.lap.input.useHandCursor = true;
                    this.lap.input.enableDrag();
                }, this);

            } else {
                this.d_arrow2.visible = true;
                this.d_arrow1.visible = false;
                game.add.tween(this.file).to({
                    x: 220,
                    y: 718.8
                }, 700, Phaser.Easing.Quadratic.Out, true)
            }
        }, this);

        this.b_pop1 = game.add.sprite(180, 330, 'b_pop1');
        this.b_pop1.anchor.setTo(0.5);
        this.b_pop1.scale.setTo(0);


        this.iron_grp = game.add.group();
        this.i_panel = game.add.sprite(250, 350, 'i_panel');
        this.i_panel.anchor.setTo(0.5);
        this.iron_grp.add(this.i_panel);

        this.i_shirt1 = game.add.sprite(230, 350, 'shirt0001');
        this.i_shirt1.anchor.setTo(0.5);
        // this.i_shirt1.inputEnabled = true;
        // this.i_shirt1.input.useHandCursor = true;
        this.i_shirt1.events.onInputDown.add(function() {
            this.i_shirt1.inputEnabled = false;
            this.d_arrow10.visible = false;
            game.time.events.add(350, function() {
                this.i_shirt1.loadTexture('shirt0003');

                game.time.events.add(350, function() {
                    this.i_shirt1.loadTexture('shirt0004');

                    game.time.events.add(350, function() {
                        this.i_shirt1.loadTexture('shirt0005');

                        game.add.tween(this.i_shirt1).to({
                            x: -220
                        }, 700, Phaser.Easing.Quadratic.Out, true, 1000).onComplete.add(function() {
                            game.add.tween(this.i_pant1).to({
                                x: 230
                            }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                                this.ani_iorn1.visible = false;
                                this.ani_iorn2.visible = true;
                                this.d_arrow9.visible = true;
                                this.ani_iorn2.inputEnabled = true;
                                this.ani_iorn2.input.useHandCursor = true;
                                this.ani_iorn2.input.enableDrag();

                            }, this);
                        }, this);


                    }, this);
                }, this);
            }, this);

        }, this);
        this.iron_grp.add(this.i_shirt1);


        this.i_pant1 = game.add.sprite(-230, 350, 'pant0001');
        this.i_pant1.anchor.setTo(0.5);
        // this.i_pant1.inputEnabled = true;
        // this.i_pant1.input.useHandCursor = true;
        this.i_pant1.events.onInputDown.add(function() {
            this.i_pant1.inputEnabled = false;
            this.d_arrow10.visible = false;
            game.time.events.add(350, function() {
                this.i_pant1.loadTexture('pant0003');

                game.time.events.add(350, function() {
                    this.i_pant1.loadTexture('pant0004');

                    game.add.tween(this.i_pant1).to({
                        x: -220
                    }, 700, Phaser.Easing.Quadratic.Out, true, 1000).onComplete.add(function() {
                        game.add.tween(this.ani_iorn2.scale).to({
                            x: 0,
                            y: 0
                        }, 700, Phaser.Easing.Quadratic.Out, true);
                        game.add.tween(this.iron_grp.scale).to({
                            x: 0,
                            y: 0
                        }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                            game.add.tween(this.morebtn.scale).to({
                                x: 1,
                                y: 1
                            }, 400, Phaser.Easing.Quadratic.Out, true, 300);
                            game.add.tween(this.playbtn.scale).to({
                                x: 1,
                                y: 1
                            }, 400, Phaser.Easing.Quadratic.Out, true, 300);

                        }, this);
                    }, this);
                }, this);
            }, this);
        }, this);
        this.iron_grp.add(this.i_pant1);

        // this.ani_iorn1 = game.add.sprite(300,370,'ani_iorn');
        this.ani_iorn1 = game.add.sprite(490, 355, 'ani_iorn');
        this.ani_iorn1.anchor.setTo(0.5);
        // this.ani_iorn1.inputEnabled = true;
        // this.ani_iorn1.input.useHandCursor = true;
        // this.ani_iorn1.input.enableDrag();
        this.ani_iorn1.events.onInputDown.add(function() {
            this.d_arrow9.visible = false;
            this.d_arrow10.visible = true;

        }, this);
        this.ani_iorn1.events.onInputUp.add(function() {

            if ((game.input.activePointer.x > 135 && game.input.activePointer.x < 290 && game.input.activePointer.y > 280 && game.input.activePointer.y < 420)) {
                this.d_arrow10.visible = false;
                this.ani_iorn1.inputEnabled = false;
                this.ani_iorn1.x = 300;
                this.ani_iorn1.y = 370;
                this.ani_iorn1.animations.add('ani_iorn1');
                this.ani_iorn1.animations.play('ani_iorn1', 10, false).onComplete.add(function() {
                    this.ani_iorn1.animations.add('ani_iorn1');
                    this.i_shirt1.loadTexture('shirt0002');
                    this.ani_iorn1.animations.play('ani_iorn1', 10, false).onComplete.add(function() {
                        this.ani_iorn1.frame = 0;
                        game.add.tween(this.ani_iorn1).to({
                            x: 490,
                            y: 355
                        }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                            this.i_shirt1.inputEnabled = true;
                            this.i_shirt1.input.useHandCursor = true;
                            this.d_arrow10.visible = true;

                        }, this);
                    }, this);
                }, this);

            } else {
                this.d_arrow9.visible = true;
                this.d_arrow10.visible = false;

                game.add.tween(this.ani_iorn1).to({
                    x: 490,
                    y: 355
                }, 300, Phaser.Easing.Quadratic.Out, true)
            }
        }, this);
        this.iron_grp.add(this.ani_iorn1);

        this.ani_iorn2 = game.add.sprite(490, 355, 'ani_iorn');
        this.ani_iorn2.anchor.setTo(0.5);
        this.ani_iorn2.visible = false;
        // this.ani_iorn2.inputEnabled = true;
        // this.ani_iorn2.input.useHandCursor = true;
        // this.ani_iorn2.input.enableDrag();
        this.ani_iorn2.events.onInputDown.add(function() {
            this.d_arrow9.visible = false;
            this.d_arrow10.visible = true;

        }, this);
        this.ani_iorn2.events.onInputUp.add(function() {

            if ((game.input.activePointer.x > 135 && game.input.activePointer.x < 290 && game.input.activePointer.y > 280 && game.input.activePointer.y < 420)) {
                this.d_arrow10.visible = false;
                this.ani_iorn2.inputEnabled = false;
                this.ani_iorn2.x = 300;
                this.ani_iorn2.y = 370;
                this.ani_iorn2.animations.add('ani_iorn2');
                this.ani_iorn2.animations.play('ani_iorn2', 10, false).onComplete.add(function() {
                    this.ani_iorn2.animations.add('ani_iorn2');
                    this.i_pant1.loadTexture('pant0002')
                    this.i_pant1.x = 215;
                    this.i_pant1.y = 340;
                    this.ani_iorn2.animations.play('ani_iorn2', 10, false).onComplete.add(function() {
                        this.ani_iorn2.frame = 0;
                        game.add.tween(this.ani_iorn2).to({
                            x: 490,
                            y: 355
                        }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                            this.d_arrow10.visible = true;
                            this.i_pant1.inputEnabled = true;
                            this.i_pant1.input.useHandCursor = true;

                        }, this);
                    }, this);
                }, this);

            } else {
                this.d_arrow9.visible = true;
                this.d_arrow10.visible = false;

                game.add.tween(this.ani_iorn2).to({
                    x: 490,
                    y: 355
                }, 300, Phaser.Easing.Quadratic.Out, true)
            }
        }, this);
        this.iron_grp.add(this.ani_iorn2);




        this.iron_grp.scale.setTo(0);



        this.morebtn = game.add.sprite(85, 730, 'morebtn');
        this.morebtn.anchor.setTo(0.5);
        this.morebtn.scale.setTo(0);
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

        // drrrrrrrrrrrrrrrrr
        this.arrowgp = game.add.group();

        var arro2x = [400, 220, 80, 80, 70, 360, 325, 100, 410, 220];
        var arro2y = [600, 650, 630, 550, 450, 220, 180, 350, 270, 270];

        for (i = 1; i <= 12; i++) {
            this['d_arrow' + i] = game.add.sprite(arro2x[i - 1], arro2y[i - 1], 'arrow');
            this['d_arrow' + i].anchor.setTo(0.5);
            this['d_arrow' + i].animations.add('d_arrow');
            this['d_arrow' + i].animations.play('d_arrow', 30, true);
            this['d_arrow' + i].visible = false;
            if (i == 7) {
                this['d_arrow' + i].visible = false;
            }
            this.arrowgp.add(this['d_arrow' + i]);

        }

        if (Main.shutterOn[0]) {
            this.shutter = game.add.sprite(0, 0, 'titlebg');
            game.add.tween(this.shutter).to({
                y: -850
            }, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                game.add.tween(this.b_pop1.scale).to({
                    x: 1,
                    y: 1
                }, 800, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                    game.add.tween(this.b_pop1.scale).to({
                        x: 0,
                        y: 0
                    }, 800, Phaser.Easing.Quadratic.Out, true, 2800).onComplete.add(function() {

                        this.d_arrow1.visible = true;
                        this.ani_bag.inputEnabled = true;
                        this.ani_bag.input.useHandCursor = true;
                        this.ani_bag.input.pixelPerfectClick = true;
                        this.ani_bag.input.pixelPerfectOver = true;
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
    update: function() {
        // console.log(game.input.activePointer.x+':'+game.input.activePointer.y);
        if (this.s1drag) {
            this.h_shirt.x = game.input.activePointer.x;
            this.h_shirt.y = game.input.activePointer.y;
        }

        if (this.s2drag) {
            this.h_pant1.x = game.input.activePointer.x;
            this.h_pant1.y = game.input.activePointer.y;
        }
    },
    openLink: function() {
        CreateLinksInGame("Baby-Taylor-Helping-Time", "game", "logo");
    },
    moreLink: function() {
        CreateLinksInGame("Baby-Taylor-Helping-Time", "game", "more");
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
            game.state.start('iron_pop');
        });

    },
}

// ippppppppp

Main.iron_pop = function() {}

Main.iron_pop.prototype = {
    create: function() {
        this.levelGroup = game.add.group();
        this.introbg = game.add.sprite(0, 0, 'p_bg');
        this.levelGroup.add(this.introbg);

        this.light = game.add.sprite(262, 59.5, 'light');
        this.light.anchor.setTo(0.5);

        this.cub = game.add.sprite(385.3, 320.2, 'cub');
        this.cub.anchor.setTo(0.5);
        this.cub.scale.setTo(0.8);

        this.ani_door = game.add.sprite(385, 328, 'ani_door');
        this.ani_door.anchor.setTo(0.5);
        this.ani_door.scale.setTo(0.8);




        this.baby1 = game.add.sprite(380, 570, 'baby1');
        this.baby1.anchor.setTo(0.5);
        this.baby1.scale.setTo(0.8);

        this.dad3 = game.add.sprite(150, 450, 'dad3');
        this.dad3.anchor.setTo(0.5);
        this.dad3.scale.setTo(0.95);

        this.pop2 = game.add.sprite(250, 410, 'b_pop2');
        this.pop2.anchor.setTo(0.5);
        this.pop2.scale.setTo(0);

        this.pop3 = game.add.sprite(250, 410, 'b_pop3');
        this.pop3.anchor.setTo(0.5);
        this.pop3.scale.setTo(0);

        this.pop1 = game.add.sprite(290, 150, 'd_pop1');
        this.pop1.anchor.setTo(0.5);
        this.pop1.scale.setTo(0);

        this.pop4 = game.add.sprite(290, 150, 'd_pop2');
        this.pop4.anchor.setTo(0.5);
        this.pop4.scale.setTo(0);

        this.morebtn = game.add.sprite(85, 730, 'morebtn');
        this.morebtn.anchor.setTo(0.5);
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
                game.add.tween(this.pop2.scale).to({
                    x: 1,
                    y: 1
                }, 800, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                    game.add.tween(this.pop2.scale).to({
                        x: 0,
                        y: 0
                    }, 800, Phaser.Easing.Quadratic.Out, true, 2500).onComplete.add(function() {
                        game.add.tween(this.pop1.scale).to({
                            x: 1,
                            y: 1
                        }, 800, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                            game.add.tween(this.pop1.scale).to({
                                x: 0,
                                y: 0
                            }, 800, Phaser.Easing.Quadratic.Out, true, 2500).onComplete.add(function() {
                                // game.add.tween(this.pop3.scale).to({x:1,y:1}, 800, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
                                // game.add.tween(this.pop3.scale).to({x:0,y:0}, 800, Phaser.Easing.Quadratic.Out, true,2500).onComplete.add(function(){
                                // game.add.tween(this.pop4.scale).to({x:1,y:1}, 800, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
                                // game.add.tween(this.pop4.scale).to({x:0,y:0}, 800, Phaser.Easing.Quadratic.Out, true,2500).onComplete.add(function(){
                                game.add.tween(this.playbtn.scale).to({
                                    x: 1,
                                    y: 1
                                }, 400, Phaser.Easing.Quadratic.Out, true);

                                // },this);
                                // },this);
                                // },this);
                                // },this);
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
        CreateLinksInGame("Baby-Taylor-Helping-Time", "game", "logo");
    },
    moreLink: function() {
        CreateLinksInGame("Baby-Taylor-Helping-Time", "game", "more");
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
            game.state.start('car_wash');
        });

    },
}

// cccccccccccc

Main.car_wash = function() {}

Main.car_wash.prototype = {
    create: function() {
        this.b3_drag = false;
        this.b4_drag = false;
        this.b1_drag = false;
        this.b2_drag = false;
        this.s1_drag = false;
        this.s2_drag = false;
        this.s3_drag = false;
        this.s4_drag = false;
        this.levelGroup = game.add.group();
        this.introbg = game.add.sprite(0, 0, 'c_bg');
        this.levelGroup.add(this.introbg);

        this.tire2 = game.add.sprite(96.95, 513.5, 'tire2');
        this.tire2.anchor.setTo(0.5);

        this.tire1 = game.add.sprite(411.05, 508.5, 'tire1');
        this.tire1.anchor.setTo(0.5);

        this.c_clr = game.add.sprite(252, 432.5, 'c_clr' + Main.car_array[0]);
        this.c_clr.anchor.setTo(0.5);

        this.c_design = game.add.sprite(248, 441.5, 'c_design');
        this.c_design.anchor.setTo(0.5);

        this.c_mirror = game.add.sprite(347.5, 416, 'c_mirror' + Main.car_array[0]);
        this.c_mirror.anchor.setTo(0.5);

        this.dust1 = game.add.sprite(222, 419.5, 'dust1');
        this.dust1.anchor.setTo(0.5);

        this.d1 = game.add.sprite(413, 528.5, 'dust_2');
        this.d1.anchor.setTo(0.5);

        this.d2 = game.add.sprite(97, 543.5, 'dust2');
        this.d2.anchor.setTo(0.5);

        this.w1 = game.add.sprite(100, 413.5, 'dust3');
        this.w1.anchor.setTo(0.5);
        // this.w1.inputEnabled=true;
        // this.w1.input.useHandCursor=true;
        this.w1.events.onInputDown.add(function() {
            this.c_arrow9.visible = false;
            this.w1.inputEnabled = false;
            this.b_1.visible = true;
            this.brush1.visible = false;
            this.b_1.animations.add('b_1');
            this.b_1.animations.play('b_1', 10, true);
            game.add.tween(this.w1).to({
                alpha: 0
            }, 2000, Phaser.Easing.Quadratic.Out, true);
            game.add.tween(this.w1).to({
                y: 440
            }, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                this.c_arrow10.visible = true;
                this.b_1.visible = false;
                this.brush1.visible = true;
                this.w2.inputEnabled = true;
                this.w2.input.useHandCursor = true;
            }, this);
        }, this);

        this.w2 = game.add.sprite(308.5, 431.5, 'dust3');
        this.w2.anchor.setTo(0.5);
        // this.w2.inputEnabled=true;
        // this.w2.input.useHandCursor=true;
        this.w2.events.onInputDown.add(function() {
            this.c_arrow10.visible = false;
            this.w2.inputEnabled = false;
            this.b_2.visible = true;
            this.brush1.visible = false;
            this.b_2.animations.add('b_2');
            this.b_2.animations.play('b_2', 10, true);
            game.add.tween(this.w2).to({
                alpha: 0
            }, 2000, Phaser.Easing.Quadratic.Out, true);
            game.add.tween(this.w2).to({
                y: 455
            }, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                this.c_arrow11.visible = true;
                this.b_2.visible = false;
                this.brush1.visible = true;
                this.w3.inputEnabled = true;
                this.w3.input.useHandCursor = true;
            }, this);
        }, this);

        this.w3 = game.add.sprite(98.5, 465, 'dust3');
        this.w3.anchor.setTo(0.5);
        this.w3.scale.setTo(0.8);
        // this.w3.inputEnabled=true;
        // this.w3.input.useHandCursor=true;
        this.w3.events.onInputDown.add(function() {
            this.c_arrow11.visible = false;
            this.w3.inputEnabled = false;
            this.b_3.visible = true;
            this.brush1.visible = false;
            this.b_3.animations.add('b_3');
            this.b_3.animations.play('b_3', 10, true);
            game.add.tween(this.w3).to({
                alpha: 0
            }, 2000, Phaser.Easing.Quadratic.Out, true);
            game.add.tween(this.w3).to({
                y: 500
            }, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                this.c_arrow12.visible = true;
                this.b_3.visible = false;
                this.brush1.visible = true;
                this.w4.inputEnabled = true;
                this.w4.input.useHandCursor = true;
            }, this);
        }, this);

        this.w4 = game.add.sprite(412.5, 465, 'dust3');
        this.w4.anchor.setTo(0.5);
        this.w4.scale.setTo(0.9);
        // this.w4.inputEnabled=true;
        // this.w4.input.useHandCursor=true;
        this.w4.events.onInputDown.add(function() {
            this.c_arrow12.visible = false;
            this.w4.inputEnabled = false;
            this.b_4.visible = true;
            this.brush1.visible = false;
            this.b_4.animations.add('b_4');
            this.b_4.animations.play('b_4', 10, true);
            game.add.tween(this.w4).to({
                alpha: 0
            }, 2000, Phaser.Easing.Quadratic.Out, true);
            game.add.tween(this.w4).to({
                y: 500
            }, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                this.b3_drag = false;
                this.brush1.visible = true;
                this.b_4.visible = false;
                game.add.tween(this.brush1).to({
                    x: 450,
                    y: 710
                }, 800, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                    this.brush1.visible = false;
                    this.f_brush1.visible = true;

                    this.b1.visible = false;
                    this.brush3.visible = true;
                    this.c_arrow13.visible = true;
                    this.shower3.inputEnabled = true;
                    this.shower3.input.useHandCursor = true;
                }, this);
            }, this);
        }, this);

        this.g1 = game.add.sprite(266, 383.5, 'dust4');
        this.g1.anchor.setTo(0.5);

        this.g2 = game.add.sprite(129, 384.5, 'dust4');
        this.g2.anchor.setTo(0.5);
        this.g2.scale.x = -1;

        this.bubble1 = game.add.sprite(252, 465, 'bubble');
        this.bubble1.anchor.setTo(0.5);
        this.bubble1.visible = false;

        this.bubble_2 = game.add.sprite(252, 465, 'bubble');
        this.bubble_2.anchor.setTo(0.5);
        this.bubble_2.visible = false;

        this.bubble2 = game.add.sprite(252, 465, 'bubble_1');
        this.bubble2.anchor.setTo(0.5);
        this.bubble2.visible = false;

        this.bubble3 = game.add.sprite(252, 465, 'bubble_12');
        this.bubble3.anchor.setTo(0.5);
        this.bubble3.visible = false;

        this.water1 = game.add.sprite(252, 465, 'water');
        this.water1.anchor.setTo(0.5);
        this.water1.visible = false;

        this.water_2 = game.add.sprite(252, 465, 'water');
        this.water_2.anchor.setTo(0.5);
        this.water_2.visible = false;

        this.water2 = game.add.sprite(252, 465, 'water_1');
        this.water2.anchor.setTo(0.5);
        this.water2.visible = false;

        this.water3 = game.add.sprite(252, 465, 'water_12');
        this.water3.anchor.setTo(0.5);
        this.water3.visible = false;

        this.water22 = game.add.sprite(252, 465, 'water_1');
        this.water22.anchor.setTo(0.5);
        this.water22.visible = false;

        this.water33 = game.add.sprite(252, 465, 'water_12');
        this.water33.anchor.setTo(0.5);
        this.water33.visible = false;

        this.ani_water = game.add.sprite(150, 700, 'ani_water');
        this.ani_water.anchor.setTo(0.5);
        this.ani_water.visible = false;
        this.ani_water.frame = 5;
        this.ani_water.scale.x = -1;

        //////////////////////////////////////////////////////////////////

        this.baby1 = game.add.sprite(680, 560, 'baby1');
        // this.baby1 = game.add.sprite(380,560,'baby1');
        this.baby1.anchor.setTo(0.5);
        this.baby1.scale.setTo(0.67);

        this.dad3 = game.add.sprite(-250, 470, 'dad3');
        // this.dad3 = game.add.sprite(150,470,'dad3');
        this.dad3.anchor.setTo(0.5);
        this.dad3.scale.setTo(0.73);

        this.pop1 = game.add.sprite(260, 410, 'b_pop3');
        this.pop1.anchor.setTo(0.5);
        this.pop1.scale.setTo(0);

        this.pop2 = game.add.sprite(270, 185, 'd_pop2');
        this.pop2.anchor.setTo(0.5);
        this.pop2.scale.setTo(0);

        //////////////////////////////////////////////////////////////////

        this.bucket2 = game.add.sprite(280, 850, 'bucket2');
        // this.bucket2 = game.add.sprite(280,720,'bucket2');
        this.bucket2.anchor.setTo(0.5);
        // this.bucket2.inputEnabled=true;
        // this.bucket2.input.useHandCursor=true;
        this.bucket2.events.onInputDown.add(function() {
            game.world.bringToTop(this.b1)
            this.b1.visible = true;
            this.brush2.visible = false;
            this.c_arrow4.visible = false;
            this.bucket2.inputEnabled = false;
            game.add.tween(this.b1).to({
                y: [680, 690, 700, 690, 680, 670, 680, 690, 700, 690, 680, 670]
            }, 1000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                this.c_arrow5.visible = true;
                this.b2_drag = true;
            }, this);
        }, this);

        this.b1 = game.add.sprite(260, 670, 'brush2');
        this.b1.anchor.setTo(0.5);
        this.b1.visible = false;


        this.bucket1 = game.add.sprite(280, 850, 'bucket1');
        // this.bucket1 = game.add.sprite(280,720,'bucket1');
        this.bucket1.anchor.setTo(0.5);

        this.brush2 = game.add.sprite(360, 850, 'brush2');
        // this.brush2 = game.add.sprite(360,750,'brush2');
        this.brush2.anchor.setTo(0.5);
        // this.brush2.inputEnabled=true;
        // this.brush2.input.useHandCursor=true;
        // this.brush2.input.pixelPerfectClick=true;
        // this.brush2.input.pixelPerfectOver=true;
        this.brush2.events.onInputDown.add(function() {
            this.c_arrow3.x = -250;
            this.c_arrow4.visible = true;
            game.world.bringToTop(this.brush2)
            this.bucket2.inputEnabled = true;
            this.bucket2.input.useHandCursor = true;
            this.brush2.inputEnabled = false;
            this.b1_drag = true;
        }, this);


        //////////////////////////////////////////////////////////////////
        //////////////////////////////////////////////////////////////////


        this.shower1 = game.add.sprite(150, 950, 'shower1');
        // this.shower1 = game.add.sprite(150,700,'shower1');
        this.shower1.anchor.setTo(0.5);
        this.shower1.scale.x = -1;
        // this.shower1.inputEnabled=true;
        // this.shower1.input.useHandCursor=true;
        this.shower1.events.onInputDown.add(function() {
            game.world.bringToTop(this.ani_water)
            game.world.bringToTop(this.shower1)
            this.shower1.inputEnabled = false;
            this.s1_drag = true;
            this.c_arrow1.visible = false;
            this.c_arrow2.visible = true;
        }, this);

        ////////////////////////////////////////////
        this.hitGroup1 = game.add.group();
        for (var i = 0; i <= Main.color_aX.length - 1; i++) {
            this["hitCircle_a" + i] = game.add.graphics(Main.color_aX[i], Main.color_aY[i]);
            this["hitCircle_a" + i].beginFill(0x000000, 0);
            this["hitCircle_a" + i].drawCircle(0, 0, 40);
            this["hitCircle_a" + i].id = i;
            this.hitGroup1.add(this["hitCircle_a" + i]);
            game.physics.arcade.enable([this["hitCircle_a" + i]]);
            this["hitCircle_a" + i].body.collideWorldBounds = true;
        }


        this.circleGroup1 = game.add.group();
        this.circle_a1 = game.add.graphics(0, 0);
        this.circle_a1.beginFill(0x000000, 0);
        this.circleGroup1.add(this.circle_a1);
        this.water1.mask = this.circle_a1;

        this.dragCircla1 = game.add.graphics(0, 0);
        this.dragCircla1.beginFill(0x000000, 0);
        this.dragCircla1.drawCircle(0, 0, 50);
        this.dragCircla1.endFill();

        this.hitSprite_a1_cnt = 0;

        game.physics.arcade.enable([this.dragCircla1]);
        this.dragCircla1.body.collideWorldBounds = true;
        this.dragCircla1.body.onCollide = new Phaser.Signal();
        this.dragCircla1.body.onCollide.add(this.hitSprite_a1, this);

        ////////////////////////////////////////////

        this.shower2 = game.add.sprite(150, 700, 'shower1');
        this.shower2.anchor.setTo(0.5);
        this.shower2.scale.x = -1;
        this.shower2.visible = false;
        // this.shower2.inputEnabled=true;
        // this.shower2.input.useHandCursor=true;
        this.shower2.events.onInputDown.add(function() {
            this.c_arrow6.x = -250;
            this.c_arrow7.visible = true;
            game.world.bringToTop(this.ani_water)
            game.world.bringToTop(this.shower2)
            this.shower2.inputEnabled = false;
            this.s2_drag = true;
        }, this);

        ////////////////////////////////////////////

        this.hitGroup1 = game.add.group();
        for (var i = 0; i <= Main.color_bX.length - 1; i++) {
            this["hitCircle_b" + i] = game.add.graphics(Main.color_bX[i], Main.color_bY[i]);
            this["hitCircle_b" + i].beginFill(0x000000, 0);
            this["hitCircle_b" + i].drawCircle(0, 0, 40);
            this["hitCircle_b" + i].id = i;
            this.hitGroup1.add(this["hitCircle_b" + i]);
            game.physics.arcade.enable([this["hitCircle_b" + i]]);
            this["hitCircle_b" + i].body.collideWorldBounds = true;
        }

        this.circleGroup1 = game.add.group();
        this.circle_b1 = game.add.graphics(0, 0);
        this.circle_b1.beginFill(0x000000, 0);
        this.circleGroup1.add(this.circle_b1);
        this.water_2.mask = this.circle_b1;

        this.dragCirclb1 = game.add.graphics(0, 0);
        this.dragCirclb1.beginFill(0x000000, 0);
        this.dragCirclb1.drawCircle(0, 0, 50);
        this.dragCirclb1.endFill();

        this.hitSprite_b1_cnt = 0;

        game.physics.arcade.enable([this.dragCirclb1]);
        this.dragCirclb1.body.collideWorldBounds = true;
        this.dragCirclb1.body.onCollide = new Phaser.Signal();
        this.dragCirclb1.body.onCollide.add(this.hitSprite_b1, this);


        /////////////////////////////////////////////////////////////////////

        this.shower3 = game.add.sprite(150, 700, 'shower1');
        this.shower3.anchor.setTo(0.5);
        this.shower3.scale.x = -1;
        this.shower3.visible = false;
        // this.shower3.inputEnabled=true;
        // this.shower3.input.useHandCursor=true;
        this.shower3.events.onInputDown.add(function() {
            this.c_arrow13.visible = false;
            this.c_arrow14.visible = true;
            this.shower3.inputEnabled = false;
            game.world.bringToTop(this.ani_water)
            game.world.bringToTop(this.shower3)
            this.s3_drag = true;
        }, this);
        /////////////////////////////////////////////////////////////////////

        this.hitGroup1 = game.add.group();
        for (var i = 0; i <= Main.color_cX.length - 1; i++) {
            this["hitCircle_c" + i] = game.add.graphics(Main.color_cX[i], Main.color_cY[i]);
            this["hitCircle_c" + i].beginFill(0x000000, 0);
            this["hitCircle_c" + i].drawCircle(0, 0, 40);
            this["hitCircle_c" + i].id = i;
            this.hitGroup1.add(this["hitCircle_c" + i]);
            game.physics.arcade.enable([this["hitCircle_c" + i]]);
            this["hitCircle_c" + i].body.collideWorldBounds = true;
        }

        this.circleGroup1 = game.add.group();
        this.circle_c1 = game.add.graphics(0, 0);
        this.circle_c1.beginFill(0x000000, 0);
        this.circleGroup1.add(this.circle_c1);
        this.bubble1.mask = this.circle_c1;

        this.dragCirclc1 = game.add.graphics(0, 0);
        this.dragCirclc1.beginFill(0x000000, 0);
        this.dragCirclc1.drawCircle(0, 0, 50);
        this.dragCirclc1.endFill();

        this.hitSprite_c1_cnt = 0;

        game.physics.arcade.enable([this.dragCirclc1]);
        this.dragCirclc1.body.collideWorldBounds = true;
        this.dragCirclc1.body.onCollide = new Phaser.Signal();
        this.dragCirclc1.body.onCollide.add(this.hitSprite_c1, this);


        /////////////////////////////////////////////////////////////////////

        this.shower4 = game.add.sprite(150, 700, 'shower1');
        this.shower4.anchor.setTo(0.5);
        this.shower4.scale.x = -1;
        this.shower4.visible = false;
        // this.shower4.inputEnabled=true;
        // this.shower4.input.useHandCursor=true;
        this.shower4.events.onInputDown.add(function() {
            this.c_arrow17.x = -250;
            this.c_arrow18.visible = true;
            game.world.bringToTop(this.ani_water)
            game.world.bringToTop(this.shower4)
            this.shower4.inputEnabled = false;
            this.s4_drag = true;
        }, this);

        /////////////////////////////////////////////////////////////////////


        this.hitGroup1 = game.add.group();
        for (var i = 0; i <= Main.color_fX.length - 1; i++) {
            this["hitCircle_f" + i] = game.add.graphics(Main.color_fX[i], Main.color_fY[i]);
            this["hitCircle_f" + i].beginFill(0x000000, 0);
            this["hitCircle_f" + i].drawCircle(0, 0, 40);
            this["hitCircle_f" + i].id = i;
            this.hitGroup1.add(this["hitCircle_f" + i]);
            game.physics.arcade.enable([this["hitCircle_f" + i]]);
            this["hitCircle_f" + i].body.collideWorldBounds = true;
        }


        this.circleGroup1 = game.add.group();
        this.circle_f1 = game.add.graphics(0, 0);
        this.circle_f1.beginFill(0x000000, 0);
        this.circleGroup1.add(this.circle_f1);
        this.water22.mask = this.circle_f1;

        this.dragCirclf1 = game.add.graphics(0, 0);
        this.dragCirclf1.beginFill(0x000000, 0);
        this.dragCirclf1.drawCircle(0, 0, 50);
        this.dragCirclf1.endFill();

        this.hitSprite_f1_cnt = 0;

        game.physics.arcade.enable([this.dragCirclf1]);
        this.dragCirclf1.body.collideWorldBounds = true;
        this.dragCirclf1.body.onCollide = new Phaser.Signal();
        this.dragCirclf1.body.onCollide.add(this.hitSprite_f1, this);
        /////////////////////////////////////////////////////////////////////

        this.hitGroup1 = game.add.group();
        for (var i = 0; i <= Main.color_ffX.length - 1; i++) {
            this["hitCircle_ff" + i] = game.add.graphics(Main.color_ffX[i], Main.color_ffY[i]);
            this["hitCircle_ff" + i].beginFill(0x000000, 0);
            this["hitCircle_ff" + i].drawCircle(0, 0, 40);
            this["hitCircle_ff" + i].id = i;
            this.hitGroup1.add(this["hitCircle_ff" + i]);
            game.physics.arcade.enable([this["hitCircle_ff" + i]]);
            this["hitCircle_ff" + i].body.collideWorldBounds = true;
        }


        this.circleGroup1 = game.add.group();
        this.circle_ff1 = game.add.graphics(0, 0);
        this.circle_ff1.beginFill(0x000000, 0);
        this.circleGroup1.add(this.circle_ff1);
        this.water33.mask = this.circle_ff1;

        this.dragCirclff1 = game.add.graphics(0, 0);
        this.dragCirclff1.beginFill(0x000000, 0);
        this.dragCirclff1.drawCircle(0, 0, 50);
        this.dragCirclff1.endFill();
        this.dragCirclff1.visible = false;

        this.hitSprite_ff1_cnt = 0;

        game.physics.arcade.enable([this.dragCirclff1]);
        this.dragCirclff1.body.collideWorldBounds = true;
        this.dragCirclff1.body.onCollide = new Phaser.Signal();
        this.dragCirclff1.body.onCollide.add(this.hitSprite_ff1, this);
        /////////////////////////////////////////////////////////////////////

        this.hitGroup1 = game.add.group();
        for (var i = 0; i <= Main.color_dX.length - 1; i++) {
            this["hitCircle_d" + i] = game.add.graphics(Main.color_dX[i], Main.color_dY[i]);
            this["hitCircle_d" + i].beginFill(0x000000, 0);
            this["hitCircle_d" + i].drawCircle(0, 0, 40);
            this["hitCircle_d" + i].id = i;
            this.hitGroup1.add(this["hitCircle_d" + i]);
            game.physics.arcade.enable([this["hitCircle_d" + i]]);
            this["hitCircle_d" + i].body.collideWorldBounds = true;
        }


        this.circleGroup1 = game.add.group();
        this.circle_d1 = game.add.graphics(0, 0);
        this.circle_d1.beginFill(0x000000, 0);
        this.circleGroup1.add(this.circle_d1);
        this.water2.mask = this.circle_d1;

        this.dragCircld1 = game.add.graphics(0, 0);
        this.dragCircld1.beginFill(0x000000, 0);
        this.dragCircld1.drawCircle(0, 0, 50);
        this.dragCircld1.endFill();

        this.hitSprite_d1_cnt = 0;

        game.physics.arcade.enable([this.dragCircld1]);
        this.dragCircld1.body.collideWorldBounds = true;
        this.dragCircld1.body.onCollide = new Phaser.Signal();
        this.dragCircld1.body.onCollide.add(this.hitSprite_d1, this);

        /////////////////////////////////////////////////////////////////////


        this.hitGroup1 = game.add.group();
        for (var i = 0; i <= Main.color_ddX.length - 1; i++) {
            this["hitCircle_dd" + i] = game.add.graphics(Main.color_ddX[i], Main.color_ddY[i]);
            this["hitCircle_dd" + i].beginFill(0x000000, 0);
            this["hitCircle_dd" + i].drawCircle(0, 0, 40);
            this["hitCircle_dd" + i].id = i;
            this.hitGroup1.add(this["hitCircle_dd" + i]);
            game.physics.arcade.enable([this["hitCircle_dd" + i]]);
            this["hitCircle_dd" + i].body.collideWorldBounds = true;
        }


        this.circleGroup1 = game.add.group();
        this.circle_dd1 = game.add.graphics(0, 0);
        this.circle_dd1.beginFill(0x000000, 0);
        this.circleGroup1.add(this.circle_dd1);
        this.water3.mask = this.circle_dd1;

        this.dragCircldd1 = game.add.graphics(0, 0);
        this.dragCircldd1.beginFill(0x000000, 0);
        this.dragCircldd1.drawCircle(0, 0, 50);
        this.dragCircldd1.endFill();
        this.dragCircldd1.visible = false;

        this.hitSprite_dd1_cnt = 0;

        game.physics.arcade.enable([this.dragCircldd1]);
        this.dragCircldd1.body.collideWorldBounds = true;
        this.dragCircldd1.body.onCollide = new Phaser.Signal();
        this.dragCircldd1.body.onCollide.add(this.hitSprite_dd1, this);

        /////////////////////////////////////////////////////////////////////



        this.b_1 = game.add.sprite(150, 420, 'brush1');
        this.b_1.anchor.setTo(0.5);
        this.b_1.scale.x = -1;
        this.b_1.visible = false;

        this.b_2 = game.add.sprite(360, 430, 'brush1');
        this.b_2.anchor.setTo(0.5);
        this.b_2.scale.x = -1;
        this.b_2.visible = false;

        this.b_3 = game.add.sprite(150, 470, 'brush1');
        this.b_3.anchor.setTo(0.5);
        this.b_3.scale.x = -1;
        this.b_3.visible = false;

        this.b_4 = game.add.sprite(470, 480, 'brush1');
        this.b_4.anchor.setTo(0.5);
        this.b_4.scale.x = -1;
        this.b_4.visible = false;

        this.f_brush1 = game.add.sprite(450, 710, 'brush1');
        this.f_brush1.anchor.setTo(0.5);
        this.f_brush1.scale.x = -1;
        this.f_brush1.visible = false;

        this.brush1 = game.add.sprite(450, 850, 'brush1');
        // this.brush1 = game.add.sprite(450,710,'brush1');
        this.brush1.anchor.setTo(0.5);
        this.brush1.scale.x = -1;
        // this.brush1.inputEnabled=true;
        // this.brush1.input.useHandCursor=true;
        this.brush1.events.onInputDown.add(function() {
            this.c_arrow8.x = -250;
            game.world.bringToTop(this.brush1)
            this.brush1.inputEnabled = false;
            this.b3_drag = true;
            this.c_arrow9.visible = true;
            this.w1.inputEnabled = true;
            this.w1.input.useHandCursor = true;
        }, this);


        /////////////////////////////////////////////////////////////////////

        this.brush3 = game.add.sprite(360, 750, 'brush2');
        this.brush3.anchor.setTo(0.5);
        this.brush3.visible = false;
        // this.brush3.inputEnabled=true;
        // this.brush3.input.useHandCursor=true;
        // this.brush3.input.pixelPerfectClick=true;
        // this.brush3.input.pixelPerfectOver=true;
        this.brush3.events.onInputDown.add(function() {
            this.c_arrow15.x = -250;
            this.c_arrow16.visible = true;
            game.world.bringToTop(this.brush3)
            this.brush3.inputEnabled = false;
            this.b4_drag = true;
        }, this);
        /////////////////////////////////////////////////////////////////////
        this.hitGroup1 = game.add.group();
        for (var i = 0; i <= Main.color_eX.length - 1; i++) {
            this["hitCircle_e" + i] = game.add.graphics(Main.color_eX[i], Main.color_eY[i]);
            this["hitCircle_e" + i].beginFill(0x000000, 0);
            this["hitCircle_e" + i].drawCircle(0, 0, 40);
            this["hitCircle_e" + i].id = i;
            this.hitGroup1.add(this["hitCircle_e" + i]);
            game.physics.arcade.enable([this["hitCircle_e" + i]]);
            this["hitCircle_e" + i].body.collideWorldBounds = true;
        }


        this.circleGroup1 = game.add.group();
        this.circle_e1 = game.add.graphics(0, 0);
        this.circle_e1.beginFill(0x000000, 0);
        this.circleGroup1.add(this.circle_e1);
        this.bubble2.mask = this.circle_e1;

        this.dragCircle1 = game.add.graphics(0, 0);
        this.dragCircle1.beginFill(0x000000, 0);
        this.dragCircle1.drawCircle(0, 0, 50);
        this.dragCircle1.endFill();

        this.hitSprite_e1_cnt = 0;

        game.physics.arcade.enable([this.dragCircle1]);
        this.dragCircle1.body.collideWorldBounds = true;
        this.dragCircle1.body.onCollide = new Phaser.Signal();
        this.dragCircle1.body.onCollide.add(this.hitSprite_e1, this);

        /////////////////////////////////////////////////////////////////////


        this.hitGroup1 = game.add.group();
        for (var i = 0; i <= Main.color_eeX.length - 1; i++) {
            this["hitCircle_ee" + i] = game.add.graphics(Main.color_eeX[i], Main.color_eeY[i]);
            this["hitCircle_ee" + i].beginFill(0x000000, 0);
            this["hitCircle_ee" + i].drawCircle(0, 0, 40);
            this["hitCircle_ee" + i].id = i;
            this.hitGroup1.add(this["hitCircle_ee" + i]);
            game.physics.arcade.enable([this["hitCircle_ee" + i]]);
            this["hitCircle_ee" + i].body.collideWorldBounds = true;
        }


        this.circleGroup1 = game.add.group();
        this.circle_ee1 = game.add.graphics(0, 0);
        this.circle_ee1.beginFill(0x000000, 0);
        this.circleGroup1.add(this.circle_ee1);
        this.bubble3.mask = this.circle_ee1;

        this.dragCirclee1 = game.add.graphics(0, 0);
        this.dragCirclee1.beginFill(0x000000, 0);
        this.dragCirclee1.drawCircle(0, 0, 50);
        this.dragCirclee1.endFill();
        this.dragCirclee1.visible = false;

        this.hitSprite_ee1_cnt = 0;

        game.physics.arcade.enable([this.dragCirclee1]);
        this.dragCirclee1.body.collideWorldBounds = true;
        this.dragCirclee1.body.onCollide = new Phaser.Signal();
        this.dragCirclee1.body.onCollide.add(this.hitSprite_ee1, this);

        /////////////////////////////////////////////////////////////////////

        this.ani_air = game.add.sprite(356, 490, 'ani_air');
        this.ani_air.anchor.setTo(0.5);
        this.ani_air.visible = false;

        // this.air = game.add.sprite(250,680,'air');
        this.air = game.add.sprite(850, 680, 'air');
        this.air.anchor.setTo(0.5);
        // this.air.inputEnabled=true;
        // this.air.input.useHandCursor=true;
        // this.air.input.enableDrag();
        this.air.events.onInputDown.add(function() {
            this.c_arrow19.visible = false;
            this.c_arrow20.visible = true;
        }, this);
        this.air.events.onInputDown.add(function() {

        }, this);
        this.air.events.onInputUp.add(function() {

            if ((game.input.activePointer.x > 260 && game.input.activePointer.x < 480 && game.input.activePointer.y > 416 && game.input.activePointer.y < 590)) {
                this.c_arrow20.visible = false;
                this.air.visible = false;
                this.ani_air.visible = true;
                this.ani_air.animations.add('ani_air');
                this.ani_air.animations.play('ani_air', 10, false).onComplete.add(function() {
                    this.ani_air.visible = false;
                    this.tire1.loadTexture('tire2')
                    game.add.tween(this.panelgp).to({
                        y: 0
                    }, 800, Phaser.Easing.Quadratic.Out, true);

                }, this);
            } else {
                this.c_arrow19.visible = true;
                this.c_arrow20.visible = false;

                game.add.tween(this.air).to({
                    x: 250,
                    y: 680
                }, 800, Phaser.Easing.Quadratic.Out, true);
            }
        }, this);

        /////////////////////////////////////////////////////////////////////
        this.panelgp = game.add.group();

        var buttonx = [327, 200, 285, 370, 157, 243, 115];
        var buttony = [715, 632, 632, 632, 715, 715, 632];

        for (i = 1; i <= 7; i++) {
            this['button' + i] = game.add.sprite(buttonx[i - 1], buttony[i - 1], 'c_icon' + i);
            this['button' + i].anchor.setTo(0.5);
            this['button' + i].inputEnabled = true;
            this['button' + i].input.useHandCursor = true;
            this['button' + i].id = i;
            this['button' + i].events.onInputOver.add(this.btnOver, this);
            this['button' + i].events.onInputOut.add(this.btnOut, this);
            this['button' + i].events.onInputDown.add(this.dectfun, this);
            this.panelgp.add(this['button' + i]);
        }

        this.panelgp.y = 500;


        /////////////////////////////////////////////////////////////////////
        // this.mcnt1=0;
        // this.mcir = game.add.graphics(0,0);
        // this.mcir.beginFill(0x666666,0);
        // this.mcir.drawRect(0,0,504,800);
        // this.mcir.inputEnabled=true;
        // this.mcir.events.onInputDown.add(function(){
        //   this.mcnt1++;
        //   this['xcnt'+this.mcnt1]=game.input.activePointer.x;
        //   this['ycnt'+this.mcnt1]=game.input.activePointer.y;
        // this.mcir = game.add.graphics(game.input.activePointer.x,game.input.activePointer.y);
        // this.mcir.beginFill(0x000000,0.5);
        // this.mcir.drawCircle(0,0,40);
        // console.log(this['xcnt'+this.mcnt1]+':'+this['ycnt'+this.mcnt1]);
        // //console.log(this['ycnt'+this.mcnt1]);
        // },this);

        //  this.arrow = game.add.sprite(258,287,'arrow');
        //  this.arrow.anchor.setTo(0.5);
        //  // this.arrow.alpha=0.4;
        //  // this.arrow.rotation=0.5;
        //  this.arrowdrag=true;
        /////////////////////////////////////////////////////////////////////

        // arrrrrrrrrrrrr
        this.arrowgp = game.add.group();
        // s1  c   br1 b   c  s2  c  br2  d1  d2  d3  d4  s3 t  br1 t  s4
        var arro2x = [152, 250, 382, 282, 250, 152, 250, 397, 111, 309, 104, 417, 152, 99, 382, 99, 152, 99, 220, 310];
        var arro2y = [555, 310, 698, 650, 310, 555, 310, 645, 353, 377, 418, 420, 555, 428, 698, 428, 555, 428, 560, 510];

        for (i = 1; i <= 50; i++) {
            this['c_arrow' + i] = game.add.sprite(arro2x[i - 1], arro2y[i - 1], 'arrow');
            this['c_arrow' + i].anchor.setTo(0.5);
            this['c_arrow' + i].animations.add('c_arrow');
            this['c_arrow' + i].animations.play('c_arrow', 30, true);
            this['c_arrow' + i].visible = false;
            if (i == 14) {
                this['c_arrow' + i].visible = false;
            }
            if (i == 20) {
                this['c_arrow' + i].visible = false;
                this['c_arrow' + i].rotation = -1.57;
            }
            this.arrowgp.add(this['c_arrow' + i]);

        }


        this.morebtn = game.add.sprite(65, 740, 'morebtn');
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
                game.add.tween(this.baby1).to({
                    x: 380
                }, 800, Phaser.Easing.Quadratic.Out, true);
                game.add.tween(this.dad3).to({
                    x: 150
                }, 800, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                    game.add.tween(this.pop1.scale).to({
                        x: 1,
                        y: 1
                    }, 800, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                        game.add.tween(this.pop1.scale).to({
                            x: 0,
                            y: 0
                        }, 800, Phaser.Easing.Quadratic.Out, true, 2500).onComplete.add(function() {
                            game.add.tween(this.pop2.scale).to({
                                x: 1,
                                y: 1
                            }, 800, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                                game.add.tween(this.pop2.scale).to({
                                    x: 0,
                                    y: 0
                                }, 800, Phaser.Easing.Quadratic.Out, true, 3000).onComplete.add(function() {
                                    game.add.tween(this.baby1).to({
                                        x: 680
                                    }, 800, Phaser.Easing.Quadratic.Out, true);
                                    game.add.tween(this.dad3).to({
                                        x: -250
                                    }, 800, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {

                                        game.add.tween(this.bucket1).to({
                                            y: 720
                                        }, 800, Phaser.Easing.Quadratic.Out, true);
                                        game.add.tween(this.brush2).to({
                                            y: 750
                                        }, 800, Phaser.Easing.Quadratic.Out, true);
                                        game.add.tween(this.shower1).to({
                                            y: 700
                                        }, 800, Phaser.Easing.Quadratic.Out, true);
                                        game.add.tween(this.brush1).to({
                                            y: 710
                                        }, 800, Phaser.Easing.Quadratic.Out, true);
                                        game.add.tween(this.brush2).to({
                                            y: 750
                                        }, 800, Phaser.Easing.Quadratic.Out, true);
                                        game.add.tween(this.bucket2).to({
                                            y: 720
                                        }, 800, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                                            this.c_arrow1.visible = true;
                                            this.shower1.inputEnabled = true;
                                            this.shower1.input.useHandCursor = true;

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

    dectfun: function(evt) {

        this.c_mirror.loadTexture('c_mirror' + evt.id);
        this.c_clr.loadTexture('c_clr' + evt.id);

        Main.car_array[0] = evt.id;

        game.add.tween(this.playbtn.scale).to({
            x: 1,
            y: 1
        }, 400, Phaser.Easing.Quadratic.Out, true);

        effectssd = game.add.sprite(this.c_clr.x, this.c_clr.y, 'effectssd');
        effectssd.anchor.setTo(0.5);
        effectssd.animations.add('effectssd');
        effectssd.animations.play('effectssd', 20, false).onComplete.add(function(evt) {
            evt.destroy();
        }, this);
    },

    hitSprite_a1: function(sprite1, sprite2) {
        // console.log(this.hitSprite_a1_cnt);
        sprite2.kill();
        this.hitSprite_a1_cnt++
            this.ani_water.visible = true
        this.c_arrow2.x = -250;
        this.water1.visible = true;
        this.ani_water.animations.add('ani_water', [3, 4, 5, 6, 7, 8, 9, 10, 11]);
        this.ani_water.animations.play('ani_water', 10, true);
        if (this.hitSprite_a1_cnt >= 59) {
            this.s1_drag = false;
            this.ani_water.visible = false
            game.add.tween(this.shower1).to({
                x: 150,
                y: 700
            }, 800, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                this.shower1.visible = false;
                this.shower2.visible = true;
                this.brush2.inputEnabled = true;
                this.brush2.input.useHandCursor = true;
                this.brush2.input.pixelPerfectClick = true;
                this.brush2.input.pixelPerfectOver = true;
                this.c_arrow3.visible = true;
            }, this);
        }
        this.circle_a1.drawCircle(Main.color_aX[sprite2.id], Main.color_aY[sprite2.id], 50);

    },
    hitSprite_b1: function(sprite1, sprite2) {
        // console.log(this.hitSprite_b1_cnt);
        sprite2.kill();
        this.hitSprite_b1_cnt++
            this.c_arrow7.visible = false;
        this.water_2.visible = true;
        this.ani_water.visible = true
        game.add.tween(this.bubble1).to({
            alpha: 0
        }, 2000, Phaser.Easing.Quadratic.Out, true);
        this.ani_water.animations.add('ani_water', [3, 4, 5, 6, 7, 8, 9, 10, 11]);
        this.ani_water.animations.play('ani_water', 10, true);
        if (this.hitSprite_b1_cnt >= 59) {
            this.s2_drag = false;
            game.add.tween(this.water_2).to({
                y: 480
            }, 2000, Phaser.Easing.Quadratic.Out, true);
            game.add.tween(this.water_2).to({
                alpha: 0
            }, 2000, Phaser.Easing.Quadratic.Out, true);
            this.ani_water.visible = false
            game.add.tween(this.shower2).to({
                x: 150,
                y: 700
            }, 800, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                this.shower2.visible = false;
                this.shower3.visible = true;
                this.c_arrow8.visible = true;
                this.brush1.inputEnabled = true;
                this.brush1.input.useHandCursor = true;
            }, this);
        }
        this.circle_b1.drawCircle(Main.color_bX[sprite2.id], Main.color_bY[sprite2.id], 50);

    },
    hitSprite_c1: function(sprite1, sprite2) {
        // console.log(this.hitSprite_c1_cnt);
        sprite2.kill();
        this.hitSprite_c1_cnt++
            this.c_arrow5.visible = false;
        this.bubble1.visible = true;
        this.b1.animations.add('b1');
        this.b1.animations.play('b1', 10, true);
        game.add.tween(this.dust1).to({
            y: 440
        }, 2000, Phaser.Easing.Quadratic.Out, true);
        game.add.tween(this.dust1).to({
            alpha: 0
        }, 2000, Phaser.Easing.Quadratic.Out, true);
        game.add.tween(this.g1).to({
            alpha: 0
        }, 2000, Phaser.Easing.Quadratic.Out, true);
        game.add.tween(this.g2).to({
            alpha: 0
        }, 2000, Phaser.Easing.Quadratic.Out, true);
        game.add.tween(this.water1).to({
            alpha: 0
        }, 2000, Phaser.Easing.Quadratic.Out, true);
        if (this.hitSprite_c1_cnt >= 76) {
            this.b2_drag = false;
            this.b1.animations.stop();
            this.b1.frame = 0;
            game.add.tween(this.b1).to({
                x: 360,
                y: 750
            }, 800, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                this.c_arrow6.visible = true;
                this.shower2.inputEnabled = true
                this.shower2.input.useHandCursor = true;
            }, this);
        }
        this.circle_c1.drawCircle(Main.color_cX[sprite2.id], Main.color_cY[sprite2.id], 50);

    },
    hitSprite_d1: function(sprite1, sprite2) {
        // console.log(this.hitSprite_d1_cnt);
        sprite2.kill();
        this.hitSprite_d1_cnt++
            this.c_arrow14.visible = false;
        this.water2.visible = true;
        this.ani_water.visible = true
        this.ani_water.animations.add('ani_water', [3, 4, 5, 6, 7, 8, 9, 10, 11]);
        this.ani_water.animations.play('ani_water', 10, true);
        if (this.hitSprite_d1_cnt >= 23) {
            this.dragCircldd1.visible = true;
            this.c_arrow14.visible = true;
            this.c_arrow14.x = 420;


        }
        this.circle_d1.drawCircle(Main.color_dX[sprite2.id], Main.color_dY[sprite2.id], 50);

    },

    hitSprite_dd1: function(sprite1, sprite2) {
        // console.log(this.hitSprite_dd1_cnt);
        sprite2.kill();
        this.hitSprite_dd1_cnt++
            this.c_arrow14.visible = false;
        this.water3.visible = true;
        this.ani_water.visible = true
        this.ani_water.animations.add('ani_water', [3, 4, 5, 6, 7, 8, 9, 10, 11]);
        this.ani_water.animations.play('ani_water', 10, true);
        if (this.hitSprite_dd1_cnt >= 21) {
            this.ani_water.visible = false;
            this.s3_drag = false;
            game.add.tween(this.shower3).to({
                x: 150,
                y: 700
            }, 800, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                this.shower3.visible = false;
                this.shower4.visible = true;
                this.c_arrow15.visible = true;
                this.brush3.inputEnabled = true;
                this.brush3.input.useHandCursor = true;
                this.brush3.input.pixelPerfectClick = true;
                this.brush3.input.pixelPerfectOver = true;
            }, this);
        }
        this.circle_dd1.drawCircle(Main.color_ddX[sprite2.id], Main.color_ddY[sprite2.id], 50);

    },

    hitSprite_e1: function(sprite1, sprite2) {
        // console.log(this.hitSprite_e1_cnt);
        sprite2.kill();
        this.bubble2.visible = true;
        this.c_arrow16.visible = false;
        this.hitSprite_e1_cnt++
            game.add.tween(this.water2).to({
                alpha: 0
            }, 2000, Phaser.Easing.Quadratic.Out, true);
        this.brush3.animations.add('brush3');
        this.brush3.animations.play('brush3', 10, true);
        if (this.hitSprite_e1_cnt >= 23) {
            this.dragCirclee1.visible = true;

            this.c_arrow16.visible = true;
            this.c_arrow16.x = 420;

        }
        this.circle_e1.drawCircle(Main.color_eX[sprite2.id], Main.color_eY[sprite2.id], 50);

    },

    hitSprite_ee1: function(sprite1, sprite2) {
        // console.log(this.hitSprite_ee1_cnt);
        sprite2.kill();
        this.bubble3.visible = true;
        this.c_arrow16.visible = false;
        this.hitSprite_ee1_cnt++
            game.add.tween(this.water3).to({
                alpha: 0
            }, 2000, Phaser.Easing.Quadratic.Out, true);
        this.brush3.animations.add('brush3');
        this.brush3.animations.play('brush3', 10, true);
        if (this.hitSprite_ee1_cnt >= 21) {
            this.b4_drag = false;
            this.brush3.animations.stop();
            this.brush3.frame = 0;
            game.add.tween(this.d1).to({
                alpha: 0
            }, 1500, Phaser.Easing.Quadratic.Out, true);
            game.add.tween(this.d2).to({
                alpha: 0
            }, 1500, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {

            }, this);
            game.add.tween(this.brush3).to({
                x: 360,
                y: 750
            }, 800, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                this.c_arrow17.visible = true;
                this.shower4.inputEnabled = true
                this.shower4.input.useHandCursor = true;
            }, this);
        }
        this.circle_ee1.drawCircle(Main.color_eeX[sprite2.id], Main.color_eeY[sprite2.id], 50);

    },

    hitSprite_f1: function(sprite1, sprite2) {
        // console.log(this.hitSprite_f1_cnt);
        sprite2.kill();
        this.hitSprite_f1_cnt++
            this.c_arrow18.visible = false;
        this.water22.visible = true;
        this.ani_water.visible = true
        game.add.tween(this.bubble2).to({
            alpha: 0
        }, 2000, Phaser.Easing.Quadratic.Out, true);
        this.ani_water.animations.add('ani_water', [3, 4, 5, 6, 7, 8, 9, 10, 11]);
        this.ani_water.animations.play('ani_water', 10, true);
        if (this.hitSprite_f1_cnt >= 23) {
            game.add.tween(this.water22).to({
                alpha: 0
            }, 1500, Phaser.Easing.Quadratic.Out, true);
            game.add.tween(this.water22).to({
                y: 480
            }, 1500, Phaser.Easing.Quadratic.Out, true);
            this.dragCirclff1.visible = true;
            this.c_arrow18.visible = true;
            this.c_arrow18.x = 420;
        }
        this.circle_f1.drawCircle(Main.color_fX[sprite2.id], Main.color_fY[sprite2.id], 50);

    },

    hitSprite_ff1: function(sprite1, sprite2) {
        // console.log(this.hitSprite_ff1_cnt);
        sprite2.kill();
        this.hitSprite_ff1_cnt++
            this.c_arrow18.visible = false;
        this.water33.visible = true;
        this.ani_water.visible = true
        game.add.tween(this.bubble3).to({
            alpha: 0
        }, 2000, Phaser.Easing.Quadratic.Out, true);
        this.ani_water.animations.add('ani_water', [3, 4, 5, 6, 7, 8, 9, 10, 11]);
        this.ani_water.animations.play('ani_water', 10, true);
        if (this.hitSprite_ff1_cnt >= 21) {
            this.ani_water.visible = false;
            this.s4_drag = false;
            game.add.tween(this.water33).to({
                alpha: 0
            }, 1500, Phaser.Easing.Quadratic.Out, true);
            game.add.tween(this.water33).to({
                y: 480
            }, 1500, Phaser.Easing.Quadratic.Out, true);
            game.add.tween(this.shower4).to({
                x: 150,
                y: 700
            }, 800, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                game.add.tween(this.f_brush1).to({
                    y: 1000
                }, 800, Phaser.Easing.Quadratic.Out, true);
                game.add.tween(this.bucket1).to({
                    y: 1000
                }, 800, Phaser.Easing.Quadratic.Out, true);
                game.add.tween(this.bucket2).to({
                    y: 1000
                }, 800, Phaser.Easing.Quadratic.Out, true);
                game.add.tween(this.brush3).to({
                    y: 1000
                }, 800, Phaser.Easing.Quadratic.Out, true);
                game.add.tween(this.shower4).to({
                    y: 1000
                }, 800, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                    game.add.tween(this.air).to({
                        x: 250
                    }, 800, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                        this.c_arrow19.visible = true;
                        this.air.inputEnabled = true;
                        this.air.input.useHandCursor = true;
                        this.air.input.enableDrag();
                    }, this);
                }, this);
            }, this);
        }
        this.circle_ff1.drawCircle(Main.color_ffX[sprite2.id], Main.color_ffY[sprite2.id], 50);

    },

    update: function() {
        // console.log(game.input.activePointer.x+':'+game.input.activePointer.y);

        if (this.arrowdrag) {
            this.arrow.x = game.input.activePointer.x;
            this.arrow.y = game.input.activePointer.y;
        }

        if (this.b3_drag) {
            this.brush1.x = game.input.activePointer.x + 60;
            this.brush1.y = game.input.activePointer.y + 15;
        }

        if (this.b4_drag) {
            this.brush3.x = game.input.activePointer.x - 10;
            this.brush3.y = game.input.activePointer.y;

            this.dragCircle1.x = this.game.input.activePointer.x;
            this.dragCircle1.y = this.game.input.activePointer.y;


            for (var i = 0; i <= Main.color_eX.length; i++)

            {
                game.physics.arcade.collide(this.dragCircle1, this['hitCircle_e' + i]);
            }

            this.dragCirclee1.x = this.game.input.activePointer.x;
            this.dragCirclee1.y = this.game.input.activePointer.y;


            for (var i = 0; i <= Main.color_eeX.length; i++)

            {
                game.physics.arcade.collide(this.dragCirclee1, this['hitCircle_ee' + i]);
            }

        }

        if (this.b1_drag) {
            this.brush2.x = game.input.activePointer.x - 10;
            this.brush2.y = game.input.activePointer.y;
        }

        if (this.b2_drag) {
            this.b1.x = game.input.activePointer.x - 10;
            this.b1.y = game.input.activePointer.y;

            this.dragCirclc1.x = this.game.input.activePointer.x;
            this.dragCirclc1.y = this.game.input.activePointer.y;


            for (var i = 0; i <= Main.color_cX.length; i++)

            {
                game.physics.arcade.collide(this.dragCirclc1, this['hitCircle_c' + i]);
            }
        }

        if (this.s1_drag) {
            this.shower1.x = game.input.activePointer.x + 35;
            this.shower1.y = game.input.activePointer.y + 95;

            this.ani_water.x = game.input.activePointer.x + 30;
            this.ani_water.y = game.input.activePointer.y - 168;

            this.dragCircla1.x = this.game.input.activePointer.x - 50;
            this.dragCircla1.y = this.game.input.activePointer.y - 20;

            for (var i = 0; i <= Main.color_aX.length; i++)

            {
                game.physics.arcade.collide(this.dragCircla1, this['hitCircle_a' + i]);
            }
        }

        if (this.s2_drag) {
            this.shower2.x = game.input.activePointer.x + 35;
            this.shower2.y = game.input.activePointer.y + 95;

            this.ani_water.x = game.input.activePointer.x + 30;
            this.ani_water.y = game.input.activePointer.y - 168;

            this.dragCirclb1.x = this.game.input.activePointer.x - 50;
            this.dragCirclb1.y = this.game.input.activePointer.y - 20;

            for (var i = 0; i <= Main.color_bX.length; i++)

            {
                game.physics.arcade.collide(this.dragCirclb1, this['hitCircle_b' + i]);
            }
        }

        if (this.s3_drag) {
            this.shower3.x = game.input.activePointer.x + 35;
            this.shower3.y = game.input.activePointer.y + 95;

            this.ani_water.x = game.input.activePointer.x + 30;
            this.ani_water.y = game.input.activePointer.y - 168;

            this.dragCircld1.x = this.game.input.activePointer.x - 50;
            this.dragCircld1.y = this.game.input.activePointer.y - 20;


            for (var i = 0; i <= Main.color_dX.length; i++)

            {
                game.physics.arcade.collide(this.dragCircld1, this['hitCircle_d' + i]);
            }

            this.dragCircldd1.x = this.game.input.activePointer.x - 50;
            this.dragCircldd1.y = this.game.input.activePointer.y - 20;


            for (var i = 0; i <= Main.color_ddX.length; i++)

            {
                game.physics.arcade.collide(this.dragCircldd1, this['hitCircle_dd' + i]);
            }
        }

        if (this.s4_drag) {
            this.shower4.x = game.input.activePointer.x + 35;
            this.shower4.y = game.input.activePointer.y + 95;

            this.ani_water.x = game.input.activePointer.x + 30;
            this.ani_water.y = game.input.activePointer.y - 168;

            this.dragCirclf1.x = this.game.input.activePointer.x - 50;
            this.dragCirclf1.y = this.game.input.activePointer.y - 20;


            for (var i = 0; i <= Main.color_fX.length; i++)

            {
                game.physics.arcade.collide(this.dragCirclf1, this['hitCircle_f' + i]);
            }

            this.dragCirclff1.x = this.game.input.activePointer.x - 50;
            this.dragCirclff1.y = this.game.input.activePointer.y - 20;


            for (var i = 0; i <= Main.color_ffX.length; i++)

            {
                game.physics.arcade.collide(this.dragCirclff1, this['hitCircle_ff' + i]);
            }
        }
    },
    openLink: function() {
        CreateLinksInGame("Baby-Taylor-Helping-Time", "game", "logo");
    },
    moreLink: function() {
        CreateLinksInGame("Baby-Taylor-Helping-Time", "game", "more");
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
            game.state.start('cleaning_scene');
        });
    },
}

// clllll

Main.cleaning_scene = function() {}

Main.cleaning_scene.prototype = {
    create: function() {
        this.levelGroup = game.add.group();
        this.introbg = game.add.sprite(0, 0, 'cl_bg');
        this.levelGroup.add(this.introbg);

        ////////////////////////////////////////////////




        this.cl_w1 = game.add.sprite(199.95, 370.6, 'cl_w1');
        this.cl_w1.anchor.setTo(0.5);
        // this.cl_w1.inputEnabled = true;
        // this.cl_w1.input.useHandCursor = true;
        // this.cl_w1.input.enableDrag();
        this.cl_w1.events.onInputDown.add(function() {
            game.world.bringToTop(this.cl_w1)
            this.cl_arrow3.visible = false;
            this.cl_arrow4.visible = true;
        }, this);
        this.cl_w1.events.onInputUp.add(function() {

            if ((game.input.activePointer.x > 330 && game.input.activePointer.x < 500 && game.input.activePointer.y > 500 && game.input.activePointer.y < 635)) {
                this.cl_arrow4.visible = false;
                this.a1.visible = true;
                this.cl_w1.visible = false;
                game.add.tween(this.a1).to({
                    angle: 50
                }, 800, Phaser.Easing.Quadratic.Out, true);
                game.add.tween(this.a1).to({
                    y: 720
                }, 1000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                    this.a1.visible = false;
                    this.a1.x = 430;
                    this.a1.y = 570;
                    this.cl_w2.inputEnabled = true;
                    this.cl_w2.input.useHandCursor = true;
                    this.cl_w2.input.enableDrag();
                    this.cl_arrow5.visible = true;
                }, this);


            } else {
                this.cl_arrow3.visible = true;
                this.cl_arrow4.visible = false;

                game.add.tween(this.cl_w1).to({
                    x: 199.95,
                    y: 370.6
                }, 700, Phaser.Easing.Quadratic.Out, true)
            }
        }, this);

        this.cl_w2 = game.add.sprite(114.3, 475.15, 'cl_w2');
        this.cl_w2.anchor.setTo(0.5);
        // this.cl_w2.inputEnabled = true;
        // this.cl_w2.input.useHandCursor = true;
        // this.cl_w2.input.enableDrag();
        this.cl_w2.events.onInputDown.add(function() {
            this.cl_arrow5.visible = false;
            this.cl_arrow6.visible = true;
            game.world.bringToTop(this.cl_w2)
        }, this);
        this.cl_w2.events.onInputUp.add(function() {

            if ((game.input.activePointer.x > 330 && game.input.activePointer.x < 500 && game.input.activePointer.y > 500 && game.input.activePointer.y < 635)) {
                this.cl_arrow6.visible = false;
                this.a2.visible = true;
                this.cl_w2.visible = false;
                game.add.tween(this.a2).to({
                    angle: 50
                }, 800, Phaser.Easing.Quadratic.Out, true);
                game.add.tween(this.a2).to({
                    y: 720
                }, 1000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                    this.a2.visible = false;
                    this.cl_w3.inputEnabled = true;
                    this.cl_w3.input.useHandCursor = true;
                    this.cl_w3.input.enableDrag();
                    this.cl_arrow7.visible = true;
                }, this);


            } else {
                this.cl_arrow5.visible = true;
                this.cl_arrow6.visible = false;

                game.add.tween(this.cl_w2).to({
                    x: 114.3,
                    y: 475.15
                }, 700, Phaser.Easing.Quadratic.Out, true)
            }
        }, this);

        this.cl_w3 = game.add.sprite(42.4, 534.65, 'cl_w3');
        this.cl_w3.anchor.setTo(0.5);
        // this.cl_w3.inputEnabled = true;
        // this.cl_w3.input.useHandCursor = true;
        // this.cl_w3.input.enableDrag();
        this.cl_w3.events.onInputDown.add(function() {
            this.cl_arrow7.visible = false;
            this.cl_arrow8.visible = true;
            game.world.bringToTop(this.cl_w3)
        }, this);
        this.cl_w3.events.onInputUp.add(function() {

            if ((game.input.activePointer.x > 330 && game.input.activePointer.x < 500 && game.input.activePointer.y > 500 && game.input.activePointer.y < 635)) {
                this.cl_arrow8.visible = false;
                this.a3.visible = true;
                this.cl_w3.visible = false;
                game.add.tween(this.a3).to({
                    angle: 50
                }, 800, Phaser.Easing.Quadratic.Out, true);
                game.add.tween(this.a3).to({
                    y: 720
                }, 1000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                    this.a3.visible = false;
                    this.cl_w4.inputEnabled = true;
                    this.cl_w4.input.useHandCursor = true;
                    this.cl_w4.input.enableDrag();
                    this.cl_arrow9.visible = true;
                }, this);


            } else {
                this.cl_arrow7.visible = true;
                this.cl_arrow8.visible = false;

                game.add.tween(this.cl_w3).to({
                    x: 42.4,
                    y: 534.65
                }, 700, Phaser.Easing.Quadratic.Out, true)
            }
        }, this);


        this.cl_w4 = game.add.sprite(126.9, 583.6, 'cl_w4');
        this.cl_w4.anchor.setTo(0.5);
        // this.cl_w4.inputEnabled = true;
        // this.cl_w4.input.useHandCursor = true;
        // this.cl_w4.input.enableDrag();
        this.cl_w4.events.onInputDown.add(function() {
            this.cl_arrow9.visible = false;
            this.cl_arrow10.visible = true;
            game.world.bringToTop(this.cl_w4)
        }, this);
        this.cl_w4.events.onInputUp.add(function() {

            if ((game.input.activePointer.x > 330 && game.input.activePointer.x < 500 && game.input.activePointer.y > 500 && game.input.activePointer.y < 635)) {
                this.cl_arrow10.visible = false;
                this.a4.visible = true;
                this.cl_w4.visible = false;
                game.add.tween(this.a4).to({
                    angle: 50
                }, 800, Phaser.Easing.Quadratic.Out, true);
                game.add.tween(this.a4).to({
                    y: 720
                }, 1000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                    this.a4.visible = false;
                    this.cl_w5.inputEnabled = true;
                    this.cl_w5.input.useHandCursor = true;
                    this.cl_w5.input.enableDrag();
                    this.cl_arrow11.visible = true;
                }, this);


            } else {
                this.cl_arrow9.visible = true;
                this.cl_arrow10.visible = false;

                game.add.tween(this.cl_w4).to({
                    x: 126.9,
                    y: 583.6
                }, 700, Phaser.Easing.Quadratic.Out, true)
            }
        }, this);


        this.cl_w5 = game.add.sprite(255.95, 595.2, 'cl_w5');
        this.cl_w5.anchor.setTo(0.5);
        // this.cl_w5.inputEnabled = true;
        // this.cl_w5.input.useHandCursor = true;
        // this.cl_w5.input.enableDrag();
        this.cl_w5.events.onInputDown.add(function() {
            this.cl_arrow11.visible = false;
            this.cl_arrow12.visible = true;
            game.world.bringToTop(this.cl_w5)
        }, this);
        this.cl_w5.events.onInputUp.add(function() {

            if ((game.input.activePointer.x > 330 && game.input.activePointer.x < 500 && game.input.activePointer.y > 500 && game.input.activePointer.y < 635)) {
                this.cl_arrow12.visible = false;
                this.a5.visible = true;
                this.cl_w5.visible = false;
                game.add.tween(this.a5).to({
                    angle: 50
                }, 800, Phaser.Easing.Quadratic.Out, true);
                game.add.tween(this.a5).to({
                    y: 720
                }, 1000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                    this.a5.visible = false;
                    this.cl_w1_1.inputEnabled = true;
                    this.cl_w1_1.input.useHandCursor = true;
                    this.cl_w1_1.input.enableDrag();
                    this.cl_arrow13.visible = true;
                }, this);


            } else {
                this.cl_arrow11.visible = true;
                this.cl_arrow12.visible = false;

                game.add.tween(this.cl_w5).to({
                    x: 255.95,
                    y: 595.2
                }, 700, Phaser.Easing.Quadratic.Out, true)
            }
        }, this);

        this.cl_w1_1 = game.add.sprite(210.95, 548.65, 'cl_w1');
        this.cl_w1_1.anchor.setTo(0.5);
        // this.cl_w1_1.inputEnabled = true;
        // this.cl_w1_1.input.useHandCursor = true;
        // this.cl_w1_1.input.enableDrag();
        this.cl_w1_1.events.onInputDown.add(function() {
            this.cl_arrow13.visible = false;
            this.cl_arrow14.visible = true;
            game.world.bringToTop(this.cl_w1_1)
        }, this);
        this.cl_w1_1.events.onInputUp.add(function() {

            if ((game.input.activePointer.x > 330 && game.input.activePointer.x < 500 && game.input.activePointer.y > 500 && game.input.activePointer.y < 635)) {
                this.cl_arrow14.visible = false;
                this.a1.visible = true;
                this.cl_w1_1.visible = false;
                game.add.tween(this.a1).to({
                    angle: 50
                }, 800, Phaser.Easing.Quadratic.Out, true);
                game.add.tween(this.a1).to({
                    y: 720
                }, 1000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                    this.a1.visible = false;
                    this.c1_dustbin1.loadTexture('c1_dustbin1')
                    this.c1_1.visible = false;
                    game.add.tween(this.c1_dustbin1).to({
                        x: 1000
                    }, 800, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                        game.add.tween(this.basket_gp).to({
                            x: 0
                        }, 800, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                            this.teddy.inputEnabled = true;
                            this.teddy.input.useHandCursor = true;
                            this.teddy.input.enableDrag();
                            this.cl_arrow15.visible = true;
                        }, this);
                    }, this);
                }, this);


            } else {
                this.cl_arrow13.visible = true;
                this.cl_arrow14.visible = false;

                game.add.tween(this.cl_w1_1).to({
                    x: 210.95,
                    y: 548.65
                }, 700, Phaser.Easing.Quadratic.Out, true)
            }
        }, this);

        ///////////////////////////////////////////////////////////////////////////

        this.cl_dust2 = game.add.sprite(250.55, 636.1, 'cl_dust2');
        this.cl_dust2.anchor.setTo(0.5);

        this.cl_dust_2 = game.add.sprite(216.5, 459.1, 'cl_dust2');
        this.cl_dust_2.anchor.setTo(0.5);
        this.cl_dust_2.scale.setTo(0.95);

        this.cl_w6 = game.add.sprite(343.45, 625.5, 'cl_w6');
        this.cl_w6.anchor.setTo(0.5);

        this.teddy = game.add.sprite(417.95, 495.25, 'teddy');
        this.teddy.anchor.setTo(0.5);
        // this.teddy.inputEnabled = true;
        // this.teddy.input.useHandCursor = true;
        // this.teddy.input.enableDrag();
        this.teddy.events.onInputDown.add(function() {
            this.cl_arrow15.visible = false;
            this.cl_arrow16.visible = true;
            game.world.bringToTop(this.teddy)
        }, this);
        this.teddy.events.onInputUp.add(function() {

            if ((game.input.activePointer.x > 40 && game.input.activePointer.x < 240 && game.input.activePointer.y > 560 && game.input.activePointer.y < 700)) {
                this.cl_arrow16.visible = false;
                this.teddy.visible = false;
                this.teddy1.visible = true;
                this.train.inputEnabled = true;
                this.train.input.useHandCursor = true;
                this.train.input.enableDrag();
                this.cl_arrow17.visible = true;
            } else {
                this.cl_arrow15.visible = true;
                this.cl_arrow16.visible = false;

                game.add.tween(this.teddy).to({
                    x: 417.95,
                    y: 495.25
                }, 700, Phaser.Easing.Quadratic.Out, true)
            }
        }, this);

        this.train = game.add.sprite(251.15, 441.05, 'train');
        this.train.anchor.setTo(0.5);
        // this.train.inputEnabled = true;
        // this.train.input.useHandCursor = true;
        // this.train.input.enableDrag();
        this.train.events.onInputDown.add(function() {
            this.cl_arrow17.visible = false;
            this.cl_arrow18.visible = true;
            game.world.bringToTop(this.train)
        }, this);
        this.train.events.onInputUp.add(function() {

            if ((game.input.activePointer.x > 40 && game.input.activePointer.x < 240 && game.input.activePointer.y > 560 && game.input.activePointer.y < 700)) {
                this.cl_arrow18.visible = false;
                this.train.visible = false;
                this.train1.visible = true;
                this.toy1.inputEnabled = true;
                this.toy1.input.useHandCursor = true;
                this.toy1.input.enableDrag();
                this.cl_arrow19.visible = true;
            } else {
                this.cl_arrow17.visible = true;
                this.cl_arrow18.visible = false;

                game.add.tween(this.train).to({
                    x: 251.15,
                    y: 441.05
                }, 700, Phaser.Easing.Quadratic.Out, true)
            }
        }, this);

        this.toy1 = game.add.sprite(404.85, 372.95, 'toy1');
        this.toy1.anchor.setTo(0.5);
        // this.toy1.inputEnabled = true;
        // this.toy1.input.useHandCursor = true;
        // this.toy1.input.enableDrag();
        this.toy1.events.onInputDown.add(function() {
            this.cl_arrow19.visible = false;
            this.cl_arrow20.visible = true;
            game.world.bringToTop(this.toy1)
        }, this);
        this.toy1.events.onInputUp.add(function() {

            if ((game.input.activePointer.x > 40 && game.input.activePointer.x < 240 && game.input.activePointer.y > 560 && game.input.activePointer.y < 700)) {
                this.cl_arrow20.visible = false;
                this.toy1.visible = false;
                this.toy_1.visible = true;

                this.toy2.inputEnabled = true;
                this.toy2.input.useHandCursor = true;
                this.toy2.input.enableDrag();
                this.cl_arrow21.visible = true;

            } else {
                this.cl_arrow19.visible = true;
                this.cl_arrow20.visible = false;

                game.add.tween(this.toy1).to({
                    x: 404.85,
                    y: 372.95
                }, 700, Phaser.Easing.Quadratic.Out, true)
            }
        }, this);

        this.toy2 = game.add.sprite(107.15, 367.35, 'toy2');
        this.toy2.anchor.setTo(0.5);
        // this.toy2.inputEnabled = true;
        // this.toy2.input.useHandCursor = true;
        // this.toy2.input.enableDrag();
        this.toy2.events.onInputDown.add(function() {
            this.cl_arrow21.visible = false;
            this.cl_arrow22.visible = true;
            game.world.bringToTop(this.toy2)
        }, this);
        this.toy2.events.onInputUp.add(function() {

            if ((game.input.activePointer.x > 40 && game.input.activePointer.x < 240 && game.input.activePointer.y > 560 && game.input.activePointer.y < 700)) {
                this.cl_arrow22.visible = false;
                this.toy2.visible = false;
                this.toy_2.visible = true;
                game.add.tween(this.basket_gp).to({
                    x: -350
                }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                    game.add.tween(this.cl_panel_gp).to({
                        y: 0
                    }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                        this.cl_tool2.inputEnabled = true;
                        this.cl_tool2.input.useHandCursor = true;
                        this.cl_tool2.input.enableDrag();
                        this.cl_arrow23.visible = true;
                    }, this);
                }, this);
            } else {
                this.cl_arrow21.visible = true;
                this.cl_arrow22.visible = false;

                game.add.tween(this.toy2).to({
                    x: 107.15,
                    y: 367.35
                }, 700, Phaser.Easing.Quadratic.Out, true)
            }
        }, this);

        this.cl_dust1 = game.add.sprite(61, 83, 'cl_dust1');
        this.cl_dust1.anchor.setTo(0.5);

        this.cl_dust_1 = game.add.sprite(245.05, 193.55, 'cl_dust1');
        this.cl_dust_1.anchor.setTo(0.5);

        this.cl_light = game.add.sprite(239.5, 110, 'cl_light');
        this.cl_light.anchor.setTo(0.5);

        //////////////////////////////////////////////////////////////////////////

        this.baby1 = game.add.sprite(650, 600, 'baby1');
        this.baby1.anchor.setTo(0.5);

        this.pop1 = game.add.sprite(200, 380, 'b_pop4');
        this.pop1.anchor.setTo(0.5);
        this.pop1.scale.setTo(0);


        this.cl_panel_gp = game.add.group();
        this.cl_panel = game.add.sprite(257.65, 919.1, 'cl_panel');
        this.cl_panel.anchor.setTo(0.5);
        this.cl_panel_gp.add(this.cl_panel);

        this.cl_tool1 = game.add.sprite(86.65, 731.55, 'cl_tool1');
        this.cl_tool1.anchor.setTo(0.5);
        // this.cl_tool1.inputEnabled = true;
        // this.cl_tool1.input.useHandCursor = true;
        // this.cl_tool1.input.enableDrag();
        this.cl_tool1.events.onInputDown.add(function() {
            this.cl_arrow1.visible = false;
            this.cl_arrow2.visible = true;
        }, this);
        this.cl_tool1.events.onInputUp.add(function() {

            if ((game.input.activePointer.x > 0 && game.input.activePointer.x < 150 && game.input.activePointer.y > 0 && game.input.activePointer.y < 200)) {
                this.cl_arrow2.visible = false;
                this.clean1.visible = true;
                this.cl_tool1.visible = false;

                game.add.tween(this.cl_dust1).to({
                    alpha: 0
                }, 3500, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                    this.clean1.visible = false;
                    this.clean2.visible = true;
                    game.add.tween(this.cl_dust_1).to({
                        alpha: 0
                    }, 3500, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                        this.clean2.visible = false;
                        this.clean3.visible = true;
                        game.add.tween(this.clean3).to({
                            x: 86.65,
                            y: 731.55
                        }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                            game.add.tween(this.cl_panel_gp).to({
                                y: 500
                            }, 1200, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                                game.add.tween(this.c1_dustbin1).to({
                                    x: 450
                                }, 800, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                                    this.c1_1.visible = true;
                                    this.c1_dustbin1.loadTexture('c1_dustbin2')
                                    this.cl_w1.inputEnabled = true;
                                    this.cl_w1.input.useHandCursor = true;
                                    this.cl_w1.input.enableDrag();
                                    this.cl_arrow3.visible = true;
                                }, this);
                            }, this);
                        }, this);
                    }, this);
                }, this);

            } else {
                this.cl_arrow1.visible = true;
                this.cl_arrow2.visible = false;

                game.add.tween(this.cl_tool1).to({
                    x: 86.65,
                    y: 731.55
                }, 700, Phaser.Easing.Quadratic.Out, true)
            }
        }, this);
        this.cl_panel_gp.add(this.cl_tool1);

        ////////////////////////////////////////////////////////////////

        this.cl_tool2 = game.add.sprite(168.5, 729.95, 'cl_tool2');
        this.cl_tool2.anchor.setTo(0.5);
        // this.cl_tool2.inputEnabled = true;
        // this.cl_tool2.input.useHandCursor = true;
        // this.cl_tool2.input.enableDrag();
        this.cl_tool2.events.onInputDown.add(function() {
            this.cl_arrow23.visible = false;
            this.cl_arrow24.visible = true;

        }, this);
        this.cl_tool2.events.onInputUp.add(function() {

            if ((game.input.activePointer.x > 150 && game.input.activePointer.x < 300 && game.input.activePointer.y > 390 && game.input.activePointer.y < 530)) {
                this.cl_arrow24.visible = false;

                game.add.tween(this.cl_panel_gp).to({
                    y: 600
                }, 1300, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {

                }, this);

                this.cl_tool2.visible = false;
                this.spray1.visible = true;
                this.spray1.animations.add('spray1');
                this.spray1.animations.play('spray1', 10, false).onComplete.add(function() {
                    this.spray1.animations.add('spray1');
                    this.spray1.animations.play('spray1', 10, false).onComplete.add(function() {
                        this.spray1.visible = false;
                        this.spray2.visible = true;
                        this.spray2.animations.add('spray2');
                        this.spray2.animations.play('spray2', 10, false).onComplete.add(function() {
                            this.spray2.animations.add('spray2');
                            this.spray2.animations.play('spray2', 10, false).onComplete.add(function() {
                                this.spray2.visible = false;
                                this.spray3.visible = true;
                                game.add.tween(this.spray3).to({
                                    x: 168.5,
                                    y: 729.95
                                }, 1300, Phaser.Easing.Quadratic.Out, true);
                                game.add.tween(this.cl_panel_gp).to({
                                    y: 0
                                }, 1300, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                                    this.cl_tool3.inputEnabled = true;
                                    this.cl_tool3.input.useHandCursor = true;
                                    this.cl_tool3.input.enableDrag();
                                    this.cl_arrow25.visible = true;
                                }, this);
                            }, this);
                        }, this);
                    }, this);
                }, this);


            } else {
                this.cl_arrow23.visible = true;
                this.cl_arrow24.visible = false;

                game.add.tween(this.cl_tool2).to({
                    x: 168.5,
                    y: 729.95
                }, 700, Phaser.Easing.Quadratic.Out, true)
            }
        }, this);
        this.cl_panel_gp.add(this.cl_tool2);

        ////////////////////////////////////////////////////////////////////////


        this.ani_sponch1 = game.add.sprite(225, 460, 'ani_sponch');
        this.ani_sponch1.anchor.setTo(0.5);
        this.ani_sponch1.scale.setTo(0.95);
        this.ani_sponch1.visible = false;

        this.ani_sponch2 = game.add.sprite(250, 630, 'ani_sponch');
        this.ani_sponch2.anchor.setTo(0.5);
        this.ani_sponch2.scale.setTo(0.95);
        this.ani_sponch2.visible = false;


        this.spray1 = game.add.sprite(200, 160, 'ani_spray');
        this.spray1.anchor.setTo(0.5);
        this.spray1.visible = false;

        this.spray2 = game.add.sprite(240, 340, 'ani_spray');
        this.spray2.anchor.setTo(0.5);
        this.spray2.visible = false;

        this.spray3 = game.add.sprite(312, 28, 'cl_tool2');
        // this.spray3 = game.add.sprite(168.5,729.95,'cl_tool2');
        this.spray3.anchor.setTo(0.5);
        this.spray3.visible = false;
        this.cl_panel_gp.add(this.spray3);

        this.sponch2 = game.add.sprite(250, 630, 'ani_sponch');
        // this.sponch2 = game.add.sprite(250,630,'sponch2');
        this.sponch2.anchor.setTo(0.5);
        this.sponch2.scale.setTo(0.95);
        this.sponch2.visible = false;
        // this.cl_panel_gp.add(this.sponch2);

        this.sponch3 = game.add.sprite(258.35, 715.15, 'ani_sponch');
        this.sponch3.anchor.setTo(0.5);
        this.sponch3.scale.setTo(0.95);
        this.sponch3.visible = false;
        this.cl_panel_gp.add(this.sponch3);


        /////////////////////////////////////////////////////////////////////////

        this.cl_tool3 = game.add.sprite(258.35, 715.15, 'cl_tool3');
        this.cl_tool3.anchor.setTo(0.5);
        // this.cl_tool3.inputEnabled = true;
        // this.cl_tool3.input.useHandCursor = true;
        // this.cl_tool3.input.enableDrag();
        this.cl_tool3.events.onInputDown.add(function() {
            this.cl_arrow25.visible = false;
            this.cl_arrow26.visible = true;
        }, this);
        this.cl_tool3.events.onInputUp.add(function() {

            if ((game.input.activePointer.x > 150 && game.input.activePointer.x < 300 && game.input.activePointer.y > 390 && game.input.activePointer.y < 530)) {
                this.cl_arrow26.visible = false;
                game.add.tween(this.cl_panel_gp).to({
                    y: 1000
                }, 1300, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {

                }, this);

                this.cl_tool3.visible = false;
                this.ani_sponch1.visible = true;
                this.ani_sponch1.animations.add('ani_sponch1');
                this.ani_sponch1.animations.play('ani_sponch1', 10, true);
                game.add.tween(this.cl_dust_2).to({
                    alpha: 0
                }, 3500, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                    this.ani_sponch1.visible = false;
                    this.ani_sponch2.visible = true;
                    this.ani_sponch2.animations.add('ani_sponch2');
                    this.ani_sponch2.animations.play('ani_sponch2', 10, true);
                    game.add.tween(this.cl_dust2).to({
                        alpha: 0
                    }, 3500, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                        this.ani_sponch2.visible = false;
                        this.sponch2.visible = true;

                        game.add.tween(this.sponch2).to({
                            x: 258.35,
                            y: 715.15
                        }, 1500, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                            this.sponch2.visible = false;
                            this.sponch3.visible = true;
                        }, this);

                        game.add.tween(this.cl_panel_gp).to({
                            y: 0
                        }, 1300, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                            this.cl_tool4.inputEnabled = true;
                            this.cl_tool4.input.useHandCursor = true;
                            this.cl_tool4.input.enableDrag();
                            this.cl_arrow27.visible = true;
                        }, this);
                    }, this);
                }, this);

            } else {
                this.cl_arrow25.visible = true;
                this.cl_arrow26.visible = false;

                game.add.tween(this.cl_tool3).to({
                    x: 258.35,
                    y: 715.15
                }, 700, Phaser.Easing.Quadratic.Out, true)
            }
        }, this);
        this.cl_panel_gp.add(this.cl_tool3);

        ////////////////////////////////////////////////////////////////////////

        this.cl_tool4 = game.add.sprite(371.7, 720.05, 'cl_tool4');
        this.cl_tool4.anchor.setTo(0.5);
        this.cl_tool4.scale.x = -1;
        // this.cl_tool4.inputEnabled = true;
        // this.cl_tool4.input.useHandCursor = true;
        // this.cl_tool4.input.enableDrag();
        this.cl_tool4.events.onInputDown.add(function() {
            this.cl_arrow27.visible = false;
            this.cl_arrow28.visible = true;
        }, this);
        this.cl_tool4.events.onInputUp.add(function() {

            if ((game.input.activePointer.x > 170 && game.input.activePointer.x < 470 && game.input.activePointer.y > 450 && game.input.activePointer.y < 670)) {
                this.cl_arrow28.visible = false;
                game.add.tween(this.cl_panel_gp).to({
                    y: 1000
                }, 1300, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {

                }, this);

                this.cl_tool4.visible = false;
                this.ani_vacum.visible = true;
                this.ani_vacum.animations.add('ani_vacum');
                this.ani_vacum.animations.play('ani_vacum', 8, true);

                game.add.tween(this.cl_w6).to({
                    alpha: 0
                }, 3500, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                    game.add.tween(this.ani_vacum).to({
                        x: -300
                    }, 800, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                        this.ani_vacum.visible = false;
                        game.add.tween(this.playbtn.scale).to({
                            x: 1,
                            y: 1
                        }, 400, Phaser.Easing.Quadratic.Out, true);
                        game.add.tween(this.morebtn.scale).to({
                            x: 1,
                            y: 1
                        }, 400, Phaser.Easing.Quadratic.Out, true);

                    }, this);
                }, this);

            } else {
                this.cl_arrow27.visible = true;
                this.cl_arrow28.visible = false;

                game.add.tween(this.cl_tool4).to({
                    x: 371.7,
                    y: 720.05
                }, 700, Phaser.Easing.Quadratic.Out, true)
            }
        }, this);
        this.cl_panel_gp.add(this.cl_tool4);


        this.ani_vacum = game.add.sprite(290.7, 560.05, 'ani_vacum');
        this.ani_vacum.anchor.setTo(0.5);
        this.ani_vacum.scale.x = -1;
        this.ani_vacum.visible = false;

        ////////////////////////////////////////////////////////////////////////


        this.cl_panel_gp.y = 200;

        this.clean1 = game.add.sprite(60, 120, 'cl_tool1');
        this.clean1.anchor.setTo(0.5);
        this.clean1.rotation = -0.2;
        this.clean1.visible = false;
        this.tween1 = game.add.tween(this.clean1).to({
            rotation: [0.2, 0.6, 1, 0.6, 0.2, -0.2]
        }, 1200, 'Linear', true).loop();

        this.clean2 = game.add.sprite(245, 230, 'cl_tool1');
        this.clean2.anchor.setTo(0.5);
        this.clean2.rotation = -0.2;
        this.clean2.visible = false;
        this.tween2 = game.add.tween(this.clean2).to({
            rotation: [0.2, 0.6, 1, 0.6, 0.2, -0.2]
        }, 1200, 'Linear', true).loop();

        this.clean3 = game.add.sprite(245, 230, 'cl_tool1');
        this.clean3.anchor.setTo(0.5);
        this.clean3.visible = false;
        this.cl_panel_gp.add(this.clean3);
        //////////////////////////////////////////////////////////////////////////

        this.c1_dustbin1 = game.add.sprite(700, 700, 'c1_dustbin2');
        // this.c1_dustbin1 = game.add.sprite(450,700,'c1_dustbin2');
        this.c1_dustbin1.anchor.setTo(0.5);
        this.c1_dustbin1.scale.x = -1;

        this.a1 = game.add.sprite(430, 570, 'cl_w1');
        this.a1.anchor.setTo(0.5);
        this.a1.visible = false;

        this.a2 = game.add.sprite(430, 570, 'cl_w2');
        this.a2.anchor.setTo(0.5);
        this.a2.visible = false;

        this.a3 = game.add.sprite(430, 570, 'cl_w3');
        this.a3.anchor.setTo(0.5);
        this.a3.visible = false;

        this.a4 = game.add.sprite(430, 570, 'cl_w4');
        this.a4.anchor.setTo(0.5);
        this.a4.visible = false;

        this.a5 = game.add.sprite(430, 570, 'cl_w5');
        this.a5.anchor.setTo(0.5);
        this.a5.visible = false;

        this.c1_1 = game.add.sprite(450, 700, 'c1_1');
        this.c1_1.anchor.setTo(0.5);
        this.c1_1.scale.x = -1;
        this.c1_1.visible = false;

        //////////////////////////////////////////////////////////////////////////

        this.basket_gp = game.add.group();
        this.cl_basket1 = game.add.sprite(150, 700, 'cl_basket1');
        this.cl_basket1.anchor.setTo(0.5);
        this.basket_gp.add(this.cl_basket1);

        this.teddy1 = game.add.sprite(200, 700, 'teddy');
        this.teddy1.anchor.setTo(0.5);
        this.teddy1.visible = false;
        this.basket_gp.add(this.teddy1);

        this.toy_1 = game.add.sprite(150, 730, 'toy1');
        this.toy_1.anchor.setTo(0.5);
        this.toy_1.visible = false;
        this.basket_gp.add(this.toy_1);

        this.toy_2 = game.add.sprite(100, 730, 'toy2');
        this.toy_2.anchor.setTo(0.5);
        this.toy_2.visible = false;
        this.basket_gp.add(this.toy_2);

        this.train1 = game.add.sprite(170, 700, 'train');
        this.train1.anchor.setTo(0.5);
        this.train1.visible = false;
        this.basket_gp.add(this.train1);

        this.cl_basket2 = game.add.sprite(150, 710, 'cl_basket2');
        this.cl_basket2.anchor.setTo(0.5);
        this.basket_gp.add(this.cl_basket2);

        this.basket_gp.x = -350;

        //////////////////////////////////////////////////////////////////////////

        // this.mcnt1=0;
        // this.mcir = game.add.graphics(0,0);
        // this.mcir.beginFill(0x666666,0);
        // this.mcir.drawRect(0,0,504,800);
        // this.mcir.inputEnabled=true;
        // this.mcir.events.onInputDown.add(function(){
        // this.mcnt1++;
        // this['xcnt'+this.mcnt1]=game.input.activePointer.x;
        // this['ycnt'+this.mcnt1]=game.input.activePointer.y;
        // this.mcir = game.add.graphics(game.input.activePointer.x,game.input.activePointer.y);
        // this.mcir.beginFill(0x000000,0.5);
        // this.mcir.drawCircle(0,0,10);
        // console.log(this['xcnt'+this.mcnt1]+':'+this['ycnt'+this.mcnt1]);
        // //console.log(this['ycnt'+this.mcnt1]);
        // },this);

        // this.arrow = game.add.sprite(258,287,'arrow');
        // this.arrow.anchor.setTo(0.5);
        // // this.arrow.alpha=0.4;
        // // this.arrow.rotation=0.5;
        // this.arrowdrag=true;

        //////////////////////////////////////////////////////////////////////////

        // clrrrrrrrrrrrrrr


        this.arrowgp = game.add.group();

        var arro2x = [90, 125, 198, 423, 115, 423, 50, 423, 130, 423, 258, 423, 208, 423, 417, 145, 257, 145, 413, 145, 106, 145, 167, 220, 264, 220, 363, 347];
        var arro2y = [672, 90, 321, 540, 418, 540, 482, 540, 522, 540, 542, 540, 495, 540, 410, 620, 380, 620, 290, 620, 302, 620, 630, 400, 645, 400, 602, 570];

        for (i = 1; i <= 50; i++) {
            this['cl_arrow' + i] = game.add.sprite(arro2x[i - 1], arro2y[i - 1], 'arrow');
            this['cl_arrow' + i].anchor.setTo(0.5);
            this['cl_arrow' + i].animations.add('cl_arrow');
            this['cl_arrow' + i].animations.play('cl_arrow', 30, true);
            this['cl_arrow' + i].visible = false;
            if (i == 1) {
                this['cl_arrow' + i].visible = false;
            }
            if (i == 2) {
                this['cl_arrow' + i].visible = false;
                this['cl_arrow' + i].rotation = 1.57;
            }
            this.arrowgp.add(this['cl_arrow' + i]);

        }

        //////////////////////////////////////////////////////////////////////////


        this.morebtn = game.add.sprite(85, 730, 'morebtn');
        this.morebtn.anchor.setTo(0.5);
        this.morebtn.scale.setTo(0);
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
                game.add.tween(this.baby1).to({
                    x: 350
                }, 800, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                    game.add.tween(this.pop1.scale).to({
                        x: 1,
                        y: 1
                    }, 800, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                        game.add.tween(this.pop1.scale).to({
                            x: 0,
                            y: 0
                        }, 800, Phaser.Easing.Quadratic.Out, true, 2800).onComplete.add(function() {
                            game.add.tween(this.baby1).to({
                                x: 650
                            }, 800, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                                game.add.tween(this.cl_panel_gp).to({
                                    y: 0
                                }, 800, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                                    this.cl_arrow1.visible = true;
                                    this.cl_tool1.inputEnabled = true;
                                    this.cl_tool1.input.useHandCursor = true;
                                    this.cl_tool1.input.enableDrag();
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

        if (this.arrowdrag) {
            this.arrow.x = game.input.activePointer.x;
            this.arrow.y = game.input.activePointer.y;
        }
    },
    openLink: function() {
        CreateLinksInGame("Baby-Taylor-Helping-Time", "game", "logo");
    },
    moreLink: function() {
        CreateLinksInGame("Baby-Taylor-Helping-Time", "game", "more");
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
            game.state.start('ice_pop');
        });

    },
}

// ipppppppppp

Main.ice_pop = function() {}

Main.ice_pop.prototype = {
    create: function() {
        this.levelGroup = game.add.group();
        this.introbg = game.add.sprite(0, 0, 'p_bg');
        this.levelGroup.add(this.introbg);


        this.light = game.add.sprite(262, 59.5, 'light');
        this.light.anchor.setTo(0.5);
        this.cub = game.add.sprite(385.3, 320.2, 'cub');
        this.cub.anchor.setTo(0.5);
        this.cub.scale.setTo(0.8);

        this.ani_door = game.add.sprite(385, 328, 'ani_door');
        this.ani_door.anchor.setTo(0.5);
        this.ani_door.scale.setTo(0.8);


        this.baby1 = game.add.sprite(380, 600, 'baby1');
        this.baby1.anchor.setTo(0.5);
        this.baby1.scale.setTo(0.8);

        this.dad3 = game.add.sprite(150, 450, 'mom');
        this.dad3.anchor.setTo(0.5);
        this.dad3.scale.setTo(0.95);

        this.pop1 = game.add.sprite(300, 180, 'm_pop1');
        this.pop1.anchor.setTo(0.5);
        this.pop1.scale.setTo(0);

        this.pop2 = game.add.sprite(250, 410, 'ice_pop0002');
        this.pop2.anchor.setTo(0.5);
        this.pop2.scale.setTo(0);

        this.pop3 = game.add.sprite(250, 410, 'ice_pop0001');
        this.pop3.anchor.setTo(0.5);
        this.pop3.scale.setTo(0);

        this.pop4 = game.add.sprite(270, 160, 'm_pop2');
        this.pop4.anchor.setTo(0.5);
        this.pop4.scale.setTo(0);



        this.morebtn = game.add.sprite(85, 730, 'morebtn');
        this.morebtn.anchor.setTo(0.5);
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
                game.add.tween(this.pop1.scale).to({
                    x: 1,
                    y: 1
                }, 800, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                    game.add.tween(this.pop1.scale).to({
                        x: 0,
                        y: 0
                    }, 800, Phaser.Easing.Quadratic.Out, true, 3000).onComplete.add(function() {
                        game.add.tween(this.pop2.scale).to({
                            x: 0.8,
                            y: 0.8
                        }, 800, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                            game.add.tween(this.pop2.scale).to({
                                x: 0,
                                y: 0
                            }, 800, Phaser.Easing.Quadratic.Out, true, 3000).onComplete.add(function() {
                                game.add.tween(this.pop3.scale).to({
                                    x: 0.85,
                                    y: 0.85
                                }, 800, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                                    game.add.tween(this.pop3.scale).to({
                                        x: 0,
                                        y: 0
                                    }, 800, Phaser.Easing.Quadratic.Out, true, 3000).onComplete.add(function() {
                                        game.add.tween(this.pop4.scale).to({
                                            x: 1,
                                            y: 1
                                        }, 800, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                                            game.add.tween(this.pop4.scale).to({
                                                x: 0,
                                                y: 0
                                            }, 800, Phaser.Easing.Quadratic.Out, true, 3000).onComplete.add(function() {

                                                game.add.tween(this.playbtn.scale).to({
                                                    x: 1,
                                                    y: 1
                                                }, 400, Phaser.Easing.Quadratic.Out, true);


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
        CreateLinksInGame("Baby-Taylor-Helping-Time", "game", "logo");
    },
    moreLink: function() {
        CreateLinksInGame("Baby-Taylor-Helping-Time", "game", "more");
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
            game.state.start('cook_scene');
        });
    },
}

Main.icecream_pop = function() {}

Main.icecream_pop.prototype = {
    create: function() {
        this.levelGroup = game.add.group();
        this.introbg = game.add.sprite(0, 0, 'p_bg');
        this.levelGroup.add(this.introbg);


        this.light = game.add.sprite(262, 59.5, 'light');
        this.light.anchor.setTo(0.5);


        this.cub = game.add.sprite(385.3, 320.2, 'cub');
        this.cub.anchor.setTo(0.5);
        this.cub.scale.setTo(0.8);

        this.ani_door = game.add.sprite(385, 328, 'ani_door');
        this.ani_door.anchor.setTo(0.5);
        this.ani_door.scale.setTo(0.8);


        this.baby1 = game.add.sprite(380, 600, 'baby1');
        this.baby1.anchor.setTo(0.5);
        this.baby1.scale.setTo(0.8);

        // this.dad3 = game.add.sprite(150,450,'mom');
        // this.dad3.anchor.setTo(0.5);
        // this.dad3.scale.setTo(0.95);

        this.pop1 = game.add.sprite(210, 370, 'ice_pop0001');
        this.pop1.anchor.setTo(0.5);
        this.pop1.scale.setTo(0);

        this.pop2 = game.add.sprite(210, 370, 'ice_pop0002');
        this.pop2.anchor.setTo(0.5);
        this.pop2.scale.setTo(0);

        this.pop3 = game.add.sprite(270, 160, 'm_pop2');
        this.pop3.anchor.setTo(0.5);
        this.pop3.scale.setTo(0);



        this.morebtn = game.add.sprite(85, 730, 'morebtn');
        this.morebtn.anchor.setTo(0.5);
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
                game.add.tween(this.pop1.scale).to({
                    x: 1,
                    y: 1
                }, 800, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                    game.add.tween(this.pop1.scale).to({
                        x: 0,
                        y: 0
                    }, 800, Phaser.Easing.Quadratic.Out, true, 3000).onComplete.add(function() {
                        game.add.tween(this.pop2.scale).to({
                            x: 1,
                            y: 1
                        }, 800, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                            game.add.tween(this.pop2.scale).to({
                                x: 0,
                                y: 0
                            }, 800, Phaser.Easing.Quadratic.Out, true, 3000).onComplete.add(function() {

                                game.add.tween(this.playbtn.scale).to({
                                    x: 1,
                                    y: 1
                                }, 400, Phaser.Easing.Quadratic.Out, true);


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
        CreateLinksInGame("Baby-Taylor-Helping-Time", "game", "logo");
    },
    moreLink: function() {
        CreateLinksInGame("Baby-Taylor-Helping-Time", "game", "more");
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
            game.state.start('cook_scene');
        });

    },
}



// cssssssssss

Main.cook_scene = function() {}

Main.cook_scene.prototype = {
    create: function() {
        this.spoon_drag = false;
        this.sdrag = false;
        this.spdrag = false;
        this.levelGroup = game.add.group();
        this.introbg = game.add.sprite(0, 0, 'ck_bg');
        this.levelGroup.add(this.introbg);



        this.baby1 = game.add.sprite(680, 450, 'baby1');
        this.baby1.anchor.setTo(0.5);

        this.pop1 = game.add.sprite(170, 200, 'ice_pop0003');
        this.pop1.anchor.setTo(0.5);
        this.pop1.scale.setTo(0);

        this.ck_panel = game.add.sprite(250, 660, 'ck_panel');
        this.ck_panel.anchor.setTo(0.5);


        this.ani_bowl1 = game.add.sprite(250, 530, 'ani_bowl1');
        this.ani_bowl1.anchor.setTo(0.5);
        // this.ani_bowl1.visible=false;

        this.ani_bowl2 = game.add.sprite(245, 455, 'ani_bowl2');
        this.ani_bowl2.anchor.setTo(0.5);
        this.ani_bowl2.visible = false;

        //////////////////////////////////////////////////////////

        this.ani_flour = game.add.sprite(320, 400, 'ani_flour');
        this.ani_flour.anchor.setTo(0.5);
        this.ani_flour.visible = false;

        this.ani_sugar = game.add.sprite(320, 400, 'ani_sugar');
        this.ani_sugar.anchor.setTo(0.5);
        this.ani_sugar.visible = false;

        this.ani_cream = game.add.sprite(190, 400, 'ani_cream');
        this.ani_cream.anchor.setTo(0.5);
        this.ani_cream.visible = false;

        this.ani_choco = game.add.sprite(170, 390, 'ani_choco');
        this.ani_choco.anchor.setTo(0.5);
        this.ani_choco.visible = false;

        this.front = game.add.sprite(250, 550, 'front');
        this.front.anchor.setTo(0.5);

        //////////////////////////////////////////////////////////


        this.flour = game.add.sprite(420, 590, 'flour');
        this.flour.anchor.setTo(0.5);
        // this.flour.inputEnabled = true;
        // this.flour.input.useHandCursor = true;
        // this.flour.input.enableDrag();
        this.flour.events.onInputDown.add(function() {
            game.world.bringToTop(this.flour)
            this.ck_arrow1.visible = false;
            this.ck_arrow2.visible = true;
        }, this);
        this.flour.events.onInputUp.add(function() {

            if ((game.input.activePointer.x > 135 && game.input.activePointer.x < 360 && game.input.activePointer.y > 95 && game.input.activePointer.y < 540)) {
                this.ck_arrow2.visible = false;
                this.flour.visible = false;
                this.ani_flour.visible = true;
                this.ani_flour.animations.add('ani_flour');
                this.ani_flour.animations.play('ani_flour', 10, false).onComplete.add(function() {
                    this.ani_flour.visible = false;
                    this.ck_arrow3.visible = true;
                    this.sugar.inputEnabled = true;
                    this.sugar.input.useHandCursor = true;
                    this.sugar.input.enableDrag();
                }, this);

                this.ani_bowl1.animations.add('ani_bowl1', [0, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
                this.ani_bowl1.animations.play('ani_bowl1', 10, false).onComplete.add(function() {}, this);

            } else {
                this.ck_arrow1.visible = true;
                this.ck_arrow2.visible = false;

                game.add.tween(this.flour).to({
                    x: 420,
                    y: 590
                }, 700, Phaser.Easing.Quadratic.Out, true)
            }
        }, this);

        ////////////////////////////////////////////////////////////////////////
        this.sugar = game.add.sprite(250, 620, 'sugar');
        this.sugar.anchor.setTo(0.5);
        // this.sugar.inputEnabled = true;
        // this.sugar.input.useHandCursor = true;
        // this.sugar.input.enableDrag();
        this.sugar.events.onInputDown.add(function() {
            this.ck_arrow3.visible = false;
            this.ck_arrow4.visible = true;
            game.world.bringToTop(this.sugar)
        }, this);
        this.sugar.events.onInputUp.add(function() {

            if ((game.input.activePointer.x > 135 && game.input.activePointer.x < 360 && game.input.activePointer.y > 95 && game.input.activePointer.y < 540)) {
                this.ck_arrow4.visible = false;
                this.sugar.visible = false;
                this.ani_sugar.visible = true;
                this.ani_sugar.animations.add('ani_sugar');
                this.ani_sugar.animations.play('ani_sugar', 10, false).onComplete.add(function() {
                    this.ani_sugar.visible = false;
                    this.cream.inputEnabled = true;
                    this.cream.input.useHandCursor = true;
                    this.cream.input.enableDrag();
                    this.ck_arrow5.visible = true;
                }, this);

                this.ani_bowl1.animations.add('ani_bowl1', [10, 10, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);
                this.ani_bowl1.animations.play('ani_bowl1', 10, false).onComplete.add(function() {}, this);

            } else {
                this.ck_arrow3.visible = true;
                this.ck_arrow4.visible = false;

                game.add.tween(this.sugar).to({
                    x: 250,
                    y: 620
                }, 700, Phaser.Easing.Quadratic.Out, true)
            }
        }, this);

        ////////////////////////////////////////////////////////////////////////

        this.cream = game.add.sprite(100, 600, 'cream');
        this.cream.anchor.setTo(0.5);
        // this.cream.inputEnabled = true;
        // this.cream.input.useHandCursor = true;
        // this.cream.input.enableDrag();
        this.cream.events.onInputDown.add(function() {
            this.ck_arrow5.visible = false;
            this.ck_arrow6.visible = true;
            game.world.bringToTop(this.cream)
        }, this);
        this.cream.events.onInputUp.add(function() {

            if ((game.input.activePointer.x > 135 && game.input.activePointer.x < 360 && game.input.activePointer.y > 95 && game.input.activePointer.y < 540)) {
                this.ck_arrow6.visible = false;
                this.cream.visible = false;
                this.ani_cream.visible = true;
                this.ani_cream.animations.add('ani_cream');
                this.ani_cream.animations.play('ani_cream', 10, false).onComplete.add(function() {
                    this.ani_cream.visible = false;
                }, this);

                this.ani_bowl1.animations.add('ani_bowl1', [21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 22, 23, 24, 25, 26]);
                this.ani_bowl1.animations.play('ani_bowl1', 10, false).onComplete.add(function() {
                    this.ani_bowl1.visible = false;
                    this.ani_bowl2.visible = true;
                    game.add.tween(this.drill).to({
                        x: 380
                    }, 700, Phaser.Easing.Quadratic.Out, true);
                    game.add.tween(this.choco).to({
                        x: 100
                    }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                        this.choco.inputEnabled = true;
                        this.choco.input.useHandCursor = true;
                        this.choco.input.enableDrag();
                        this.ck_arrow7.visible = true;
                    }, this);
                }, this);

            } else {
                this.ck_arrow5.visible = true;
                this.ck_arrow6.visible = false;

                game.add.tween(this.cream).to({
                    x: 100,
                    y: 600
                }, 700, Phaser.Easing.Quadratic.Out, true);
            }
        }, this);

        ////////////////////////////////////////////////////////////////////////


        this.choco = game.add.sprite(-250, 600, 'choco');
        // this.choco = game.add.sprite(100,600,'choco');
        this.choco.anchor.setTo(0.5);
        // this.choco.inputEnabled = true;
        // this.choco.input.useHandCursor = true;
        // this.choco.input.enableDrag();
        this.choco.events.onInputDown.add(function() {
            this.ck_arrow7.visible = false;
            this.ck_arrow8.visible = true;
            game.world.bringToTop(this.choco)
        }, this);
        this.choco.events.onInputUp.add(function() {

            if ((game.input.activePointer.x > 135 && game.input.activePointer.x < 360 && game.input.activePointer.y > 95 && game.input.activePointer.y < 540)) {
                this.ck_arrow8.visible = false;
                this.choco.visible = false;
                this.ani_choco.visible = true;
                this.ani_choco.animations.add('ani_choco');
                this.ani_choco.animations.play('ani_choco', 10, false).onComplete.add(function() {
                    this.ani_choco.visible = false;
                    this.drill.inputEnabled = true;
                    this.drill.input.useHandCursor = true;
                    this.drill.input.enableDrag();
                    this.ck_arrow9.visible = true;
                }, this);

                this.ani_bowl2.animations.add('ani_bowl2', [0, 0, 0, 0, 0, 0, 1, 2, 3, 4, 5, 6]);
                this.ani_bowl2.animations.play('ani_bowl2', 10, false).onComplete.add(function() {

                }, this);

            } else {
                this.ck_arrow7.visible = true;
                this.ck_arrow8.visible = false;

                game.add.tween(this.choco).to({
                    x: 100,
                    y: 600
                }, 700, Phaser.Easing.Quadratic.Out, true);
            }
        }, this);

        ////////////////////////////////////////////////////////////////////////

        this.drill = game.add.sprite(680, 630, 'drill');
        // this.drill = game.add.sprite(380,630,'drill');
        this.drill.anchor.setTo(0.5);
        // this.drill.inputEnabled = true;
        // this.drill.input.useHandCursor = true;
        // this.drill.input.enableDrag();
        this.drill.events.onInputDown.add(function() {
            this.ck_arrow9.visible = false;
            this.ck_arrow10.visible = true;
            game.world.bringToTop(this.drill)
        }, this);
        this.drill.events.onInputUp.add(function() {

            if ((game.input.activePointer.x > 135 && game.input.activePointer.x < 360 && game.input.activePointer.y > 95 && game.input.activePointer.y < 540)) {
                this.ck_arrow10.visible = false;
                this.drill.visible = false;
                this.ani_bowl2.animations.add('ani_bowl2', [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32]);
                this.ani_bowl2.animations.play('ani_bowl2', 10, false).onComplete.add(function() {
                    this.front.visible = false;
                    game.add.tween(this.ani_bowl2).to({
                        x: -250
                    }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                        game.add.tween(this.oven1).to({
                            x: 250
                        }, 700, Phaser.Easing.Quadratic.Out, true)
                        game.add.tween(this.drop1).to({
                            x: 380
                        }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                            this.drop1.inputEnabled = true;
                            this.drop1.input.useHandCursor = true;
                            this.drop1.input.enableDrag();
                            this.ck_arrow12.visible = true;
                        }, this);
                    }, this);
                }, this);

            } else {
                this.ck_arrow9.visible = true;
                this.ck_arrow10.visible = false;

                game.add.tween(this.drill).to({
                    x: 380,
                    y: 630
                }, 700, Phaser.Easing.Quadratic.Out, true);
            }
        }, this);

        ////////////////////////////////////////////////////////////////////////

        this.oven_cnt = 0;
        // this.oven1 = game.add.sprite(250,530,'bowl_ice_ani');
        this.oven1 = game.add.sprite(650, 530, 'bowl_ice_ani');
        this.oven1.anchor.setTo(0.5);
        this.oven1.scale.setTo(0.73);
        this.oven1.frame = 0;
        // this.oven1.inputEnabled=true;
        // this.oven1.input.useHandCursor=true;
        this.oven1.events.onInputDown.add(function() {
            this.oven_cnt++
                this.oven1.inputEnabled = false;
            if (this.oven_cnt == 1) {
                this.introbg.loadTexture('ck_bg2')
                this.ck_arrow14.x = 300;
                this.ck_arrow14.y = 100;
                this.oven_drag = true;
                game.add.tween(this.oven1.scale).to({
                    x: 0.75,
                    y: 0.75
                }, 700, Phaser.Easing.Quadratic.Out, true);
                this.dragCircle2.inputEnabled = true;
                this.dragCircle2.input.useHandCursor = true;
            }
            if (this.oven_cnt == 2) {
                this.ck_arrow14.visible = false;
                this.oven1.frame = 1;
                game.add.tween(this.t_timer).to({
                    x: 250
                }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                    this.t_timer.animations.add('t_timer');
                    this.t_timer.animations.play('t_timer', 10, false).onComplete.add(function() {
                        game.add.tween(this.t_timer).to({
                            x: -250
                        }, 700, Phaser.Easing.Quadratic.Out, true, 500).onComplete.add(function() {
                            game.add.tween(this.oven1).to({
                                x: -250
                            }, 700, Phaser.Easing.Quadratic.Out, true, 500).onComplete.add(function() {
                                game.add.tween(this.ani_drop_cream1).to({
                                    y: 550
                                }, 700, Phaser.Easing.Quadratic.Out, true);
                                game.add.tween(this.ani_drop_cream2).to({
                                    y: 550
                                }, 700, Phaser.Easing.Quadratic.Out, true);
                                game.add.tween(this.ani_drop_cream3).to({
                                    y: 550
                                }, 700, Phaser.Easing.Quadratic.Out, true);
                                game.add.tween(this.spoon1).to({
                                    x: 420
                                }, 700, Phaser.Easing.Quadratic.Out, true);
                                game.add.tween(this.oven_1).to({
                                    x: 250
                                }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                                    this.ck_arrow15.visible = true;
                                    this.oven_1.inputEnabled = true;
                                    this.oven_1.input.useHandCursor = true;
                                }, this);
                            }, this);
                        }, this);
                    }, this);
                }, this);
            }
        }, this);

        this.dragCircle2 = game.add.graphics(250, 160);
        this.dragCircle2.beginFill(0x000000, 0);
        this.dragCircle2.drawRect(0, 0, 120, 200);
        // this.dragCircle2.inputEnabled = true;
        // this.dragCircle2.input.useHandCursor = true;
        this.dragCircle2.events.onInputDown.add(function() {
            this.ck_arrow14.visible = false;
            this.dragCircle2.inputEnabled = false;
            this.oven_drag = false;
            this.oven1.visible = false;
            this.introbg.loadTexture('ck_bg3')
            game.time.events.add(500, function() {
                this.introbg.loadTexture('ck_bg')
                game.add.tween(this.t_timer).to({
                    x: 250
                }, 700, Phaser.Easing.Quadratic.Out, true, 500).onComplete.add(function() {
                    this.t_timer.animations.add('t_timer');
                    this.t_timer.animations.play('t_timer', 10, false).onComplete.add(function() {
                        game.add.tween(this.t_timer).to({
                            x: -250
                        }, 700, Phaser.Easing.Quadratic.Out, true, 500).onComplete.add(function() {
                            game.time.events.add(500, function() {
                                this.introbg.loadTexture('ck_bg3')
                                game.time.events.add(500, function() {
                                    this.introbg.loadTexture('ck_bg2')
                                    game.time.events.add(500, function() {
                                        this.introbg.loadTexture('ck_bg')
                                    }, this);

                                    this.bowl_ice.visible = true;
                                    game.add.tween(this.bowl_ice.scale).to({
                                        x: 0.7,
                                        y: 0.7
                                    }, 700, Phaser.Easing.Quadratic.Out, true)
                                    game.add.tween(this.bowl_ice).to({
                                        x: 250,
                                        y: 530
                                    }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {

                                        game.add.tween(this.bowl_ice).to({
                                            x: -250
                                        }, 700, Phaser.Easing.Quadratic.Out, true, 500).onComplete.add(function() {
                                            game.add.tween(this.ani_drop_cream1).to({
                                                y: 550
                                            }, 700, Phaser.Easing.Quadratic.Out, true);
                                            game.add.tween(this.ani_drop_cream2).to({
                                                y: 550
                                            }, 700, Phaser.Easing.Quadratic.Out, true);
                                            game.add.tween(this.ani_drop_cream3).to({
                                                y: 550
                                            }, 700, Phaser.Easing.Quadratic.Out, true);
                                            game.add.tween(this.spoon1).to({
                                                x: 420
                                            }, 700, Phaser.Easing.Quadratic.Out, true);
                                            game.add.tween(this.oven_1).to({
                                                x: 250
                                            }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                                                this.ck_arrow16.visible = true;
                                                this.spoon1.inputEnabled = true;
                                                this.spoon1.input.useHandCursor = true;
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

        this.bowl_ice = game.add.sprite(290, 180, 'bowl_ice');
        this.bowl_ice.anchor.setTo(0.5);
        this.bowl_ice.scale.setTo(0.4);
        this.bowl_ice.visible = false;



        this.ani_drop1 = game.add.sprite(340, 340, 'ani_drop1');
        this.ani_drop1.anchor.setTo(0.5);
        this.ani_drop1.visible = false;

        // this.drop1 = game.add.sprite(380,630,'drop1');
        this.drop1 = game.add.sprite(680, 630, 'drop1');
        this.drop1.anchor.setTo(0.5);
        this.drop1.inputEnabled = true;
        this.drop1.input.useHandCursor = true;
        this.drop1.input.enableDrag();
        this.drop1.events.onInputDown.add(function() {
            this.ck_arrow12.visible = false;
            this.ck_arrow13.visible = true;
        }, this);
        this.drop1.events.onInputUp.add(function() {

            if ((game.input.activePointer.x > 135 && game.input.activePointer.x < 360 && game.input.activePointer.y > 95 && game.input.activePointer.y < 540)) {
                this.ck_arrow13.visible = false;
                this.drop1.visible = false;
                this.ani_drop1.visible = true;
                this.ani_drop1.animations.add('ani_drop1');
                this.ani_drop1.animations.play('ani_drop1', 10, false).onComplete.add(function() {
                    this.ani_drop1.visible = false;
                    this.oven1.frame = 1;
                    this.oven1.inputEnabled = true;
                    this.oven1.input.useHandCursor = true;
                    this.ck_arrow14.visible = true;

                }, this);

            } else {
                this.ck_arrow12.visible = true;
                this.ck_arrow13.visible = false;

                game.add.tween(this.drop1).to({
                    x: 380,
                    y: 630
                }, 700, Phaser.Easing.Quadratic.Out, true);
            }
        }, this);

        this.t_timer = game.add.sprite(-250, 200, 't_timer');
        this.t_timer.anchor.setTo(0.5);

        ////////////////////////////////////////////////////////////////////////

        this.oven_cnt1 = 0;
        // this.oven_1 = game.add.sprite(250,460,'ani_ice');
        this.oven_1 = game.add.sprite(-250, 460, 'ani_ice');
        this.oven_1.anchor.setTo(0.5);
        this.oven_1.scale.setTo(0.77);
        // this.oven_1.inputEnabled=true;
        // this.oven_1.input.useHandCursor=true;
        this.oven_1.events.onInputDown.add(function() {
            this.oven_cnt1++
                this.oven_1.inputEnabled = false;
            if (this.oven_cnt1 == 1) {
                this.ck_arrow16.visible = true;
                this.ck_arrow15.visible = false;

                this.ani_spoon1.visible = true;
                this.oven_1.frame = 0;
                this.spoon1.inputEnabled = true;
                this.spoon1.input.useHandCursor = true;
            }
        }, this);

        this.ani_spoon1 = game.add.sprite(260, 308, 'ani_spoon1');
        this.ani_spoon1.anchor.setTo(0.5);
        this.ani_spoon1.visible = false;

        this.drag_cnt = 0;
        this.dragCircle1 = game.add.graphics(170, 430);
        this.dragCircle1.beginFill(0x000000, 0);
        this.dragCircle1.drawRect(0, 0, 170, 90);
        // this.dragCircle1.inputEnabled = true;
        // this.dragCircle1.input.useHandCursor = true;
        this.dragCircle1.events.onInputDown.add(function() {
            this.drag_cnt++
                this.dragCircle1.inputEnabled = false;
            if (this.drag_cnt == 1) {
                this.ck_arrow17.visible = false;

                this.spoon1.visible = false;
                this.spoon1.loadTexture('spoon2')
                this.oven_1.animations.add('oven_1', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
                this.oven_1.animations.play('oven_1', 10, false).onComplete.add(function() {
                    this.spoon1.visible = true;
                    this.ck_arrow18.visible = true;

                    this.ani_drop_cream1.inputEnabled = true;
                    this.ani_drop_cream1.input.useHandCursor = true;
                }, this);

            }

            if (this.drag_cnt == 2) {
                this.ck_arrow19.visible = false;
                this.spoon1.visible = false;
                this.spoon1.loadTexture('spoon2')
                this.oven_1.animations.add('oven_1', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
                this.oven_1.animations.play('oven_1', 10, false).onComplete.add(function() {
                    this.spoon1.visible = true;
                    this.ani_drop_cream2.inputEnabled = true;
                    this.ani_drop_cream2.input.useHandCursor = true;
                    this.ck_arrow20.visible = true;
                }, this);

            }

            if (this.drag_cnt == 3) {
                this.ck_arrow21.visible = false;
                this.spoon1.visible = false;
                this.spoon1.loadTexture('spoon2')
                this.oven_1.animations.add('oven_1', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
                this.oven_1.animations.play('oven_1', 10, false).onComplete.add(function() {
                    this.spoon1.visible = true;
                    this.ani_drop_cream3.inputEnabled = true;
                    this.ani_drop_cream3.input.useHandCursor = true;
                    this.ck_arrow22.visible = true;
                }, this);

            }

        }, this);



        this.ani_drop_cream1 = game.add.sprite(100, 800, 'ani_drop_cream1');
        // this.ani_drop_cream1 = game.add.sprite(100,550,'ani_drop_cream1');
        this.ani_drop_cream1.anchor.setTo(0.5);
        // this.ani_drop_cream1.inputEnabled = true;
        // this.ani_drop_cream1.input.useHandCursor = true;
        // this.ani_drop_cream1.input.pixelPerfectClick=true;
        // this.ani_drop_cream1.input.pixelPerfectOver=true;
        this.ani_drop_cream1.events.onInputDown.add(function() {
            this.ck_arrow18.visible = false;
            this.ani_drop_cream1.inputEnabled = false;
            this.spoon1.visible = false;
            this.spoon1.loadTexture('spoon1')
            this.ani_drop_cream1.animations.add('ani_drop_cream1');
            this.ani_drop_cream1.animations.play('ani_drop_cream1', 10, false).onComplete.add(function() {
                this.spoon1.visible = true;
                this.dragCircle1.inputEnabled = true;
                this.dragCircle1.input.useHandCursor = true;
                this.ck_arrow19.visible = true;
            }, this);
        }, this);

        this.ani_drop_cream2 = game.add.sprite(250, 800, 'ani_drop_cream1');
        // this.ani_drop_cream2 = game.add.sprite(250,550,'ani_drop_cream1');
        this.ani_drop_cream2.anchor.setTo(0.5);
        // this.ani_drop_cream2.inputEnabled = true;
        // this.ani_drop_cream2.input.useHandCursor = true;
        // this.ani_drop_cream2.input.pixelPerfectClick=true;
        // this.ani_drop_cream2.input.pixelPerfectOver=true;
        this.ani_drop_cream2.events.onInputDown.add(function() {
            this.ck_arrow20.visible = false;
            this.ani_drop_cream2.inputEnabled = false;
            this.spoon1.visible = false;
            this.spoon1.loadTexture('spoon1')
            this.ani_drop_cream2.animations.add('ani_drop_cream2');
            this.ani_drop_cream2.animations.play('ani_drop_cream2', 10, false).onComplete.add(function() {
                this.spoon1.visible = true;
                this.dragCircle1.inputEnabled = true;
                this.dragCircle1.input.useHandCursor = true;
                this.ck_arrow21.visible = true;
            }, this);
        }, this);

        this.ani_drop_cream3 = game.add.sprite(400, 800, 'ani_drop_cream1');
        // this.ani_drop_cream3 = game.add.sprite(400,550,'ani_drop_cream1');
        this.ani_drop_cream3.anchor.setTo(0.5);
        // this.ani_drop_cream3.inputEnabled = true;
        // this.ani_drop_cream3.input.useHandCursor = true;
        // this.ani_drop_cream3.input.pixelPerfectClick=true;
        // this.ani_drop_cream3.input.pixelPerfectOver=true;
        this.ani_drop_cream3.events.onInputDown.add(function() {
            this.ck_arrow22.visible = false;
            this.ani_drop_cream3.inputEnabled = false;
            this.spoon1.visible = false;
            this.ani_drop_cream3.animations.add('ani_drop_cream3');
            this.ani_drop_cream3.animations.play('ani_drop_cream3', 10, false).onComplete.add(function() {
                game.add.tween(this.ani_drop_cream1).to({
                    x: -250
                }, 800, Phaser.Easing.Quadratic.Out, true);
                game.add.tween(this.ani_drop_cream2).to({
                    x: -250
                }, 800, Phaser.Easing.Quadratic.Out, true);
                game.add.tween(this.ani_drop_cream3).to({
                    x: -250
                }, 800, Phaser.Easing.Quadratic.Out, true);
                game.add.tween(this.oven_1).to({
                    x: -250
                }, 800, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                    game.add.tween(this.clr_3).to({
                        x: 410
                    }, 800, Phaser.Easing.Quadratic.Out, true);
                    game.add.tween(this.pink).to({
                        x: 250
                    }, 800, Phaser.Easing.Quadratic.Out, true);
                    game.add.tween(this.yellow).to({
                        x: 350
                    }, 800, Phaser.Easing.Quadratic.Out, true);
                    game.add.tween(this.green).to({
                        x: 150
                    }, 800, Phaser.Easing.Quadratic.Out, true);
                    game.add.tween(this.clr_2).to({
                        x: 260
                    }, 800, Phaser.Easing.Quadratic.Out, true);
                    game.add.tween(this.clr_1).to({
                        x: 110
                    }, 800, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                        this.ck_arrow23.visible = true;
                        this.pink.inputEnabled = true;
                        this.pink.input.useHandCursor = true;
                        this.pink.input.enableDrag();
                    }, this);
                }, this);
            }, this);
        }, this);


        this.spoon1 = game.add.sprite(620, 540, 'spoon1');
        // this.spoon1 = game.add.sprite(420,540,'spoon1');
        this.spoon1.anchor.setTo(0.5);
        this.spoon1.inputEnabled = true;
        this.spoon1.input.useHandCursor = true;
        this.spoon1.events.onInputDown.add(function() {
            this.ck_arrow16.visible = false;
            this.ck_arrow17.visible = true;
            this.spoon1.inputEnabled = false;
            this.spoon_drag = true;
            this.dragCircle1.inputEnabled = true;
            this.dragCircle1.input.useHandCursor = true;
        }, this);

        ////////////////////////////////////////////////////////////////////////

        // this.clr_1 = game.add.sprite(110,530,'clr_bowl1');
        this.clr_1 = game.add.sprite(-250, 530, 'clr_bowl1');
        this.clr_1.anchor.setTo(0.5);

        // this.clr_2 = game.add.sprite(260,530,'clr_bowl1');
        this.clr_2 = game.add.sprite(-250, 530, 'clr_bowl1');
        this.clr_2.anchor.setTo(0.5);

        // this.clr_3 = game.add.sprite(410,530,'clr_bowl1');
        this.clr_3 = game.add.sprite(-250, 530, 'clr_bowl1');
        this.clr_3.anchor.setTo(0.5);

        this.ani_clr2 = game.add.sprite(320, 450, 'ani_clr2');
        this.ani_clr2.anchor.setTo(0.5);
        this.ani_clr2.visible = false;

        this.ani_clr1 = game.add.sprite(470, 450, 'ani_clr3');
        this.ani_clr1.anchor.setTo(0.5);
        this.ani_clr1.visible = false;

        this.ani_clr3 = game.add.sprite(180, 450, 'ani_clr1');
        this.ani_clr3.anchor.setTo(0.5);
        this.ani_clr3.visible = false;


        // this.green = game.add.sprite(150,600,'green');
        this.green = game.add.sprite(-250, 600, 'green');
        this.green.anchor.setTo(0.5);
        // this.green.inputEnabled = true;
        // this.green.input.useHandCursor = true;
        // this.green.input.enableDrag();
        this.green.events.onInputDown.add(function() {
            this.ck_arrow25.visible = false;
            this.ck_arrow24.visible = true;
            this.ck_arrow24.x = 100;
            game.world.bringToTop(this.green)
        }, this);
        this.green.events.onInputUp.add(function() {

            if ((game.input.activePointer.x > 0 && game.input.activePointer.x < 200 && game.input.activePointer.y > 95 && game.input.activePointer.y < 540)) {
                this.ck_arrow24.visible = false;
                this.green.visible = false;
                this.ani_clr3.visible = true;
                this.ani_clr3.animations.add('ani_clr3');
                this.ani_clr3.animations.play('ani_clr3', 10, false).onComplete.add(function() {
                    this.ani_clr3.visible = false;
                    this.clr_1.loadTexture('clr_bowl3')
                    this.yellow.inputEnabled = true;
                    this.yellow.input.useHandCursor = true;
                    this.yellow.input.enableDrag();
                    this.ck_arrow25.visible = true;
                    this.ck_arrow25.x = 350;
                }, this);

            } else {
                this.ck_arrow25.visible = true;
                this.ck_arrow25.x = 150;
                this.ck_arrow24.visible = false;

                game.add.tween(this.green).to({
                    x: 150,
                    y: 600
                }, 700, Phaser.Easing.Quadratic.Out, true);
            }
        }, this);

        // this.pink = game.add.sprite(250,600,'pink');
        this.pink = game.add.sprite(-250, 600, 'pink');
        this.pink.anchor.setTo(0.5);
        // this.pink.inputEnabled = true;
        // this.pink.input.useHandCursor = true;
        // this.pink.input.enableDrag();
        this.pink.events.onInputDown.add(function() {
            this.ck_arrow23.visible = false;
            this.ck_arrow24.visible = true;
            game.world.bringToTop(this.pink)
        }, this);
        this.pink.events.onInputUp.add(function() {

            if ((game.input.activePointer.x > 180 && game.input.activePointer.x < 330 && game.input.activePointer.y > 95 && game.input.activePointer.y < 540)) {
                this.ck_arrow24.visible = false;
                this.pink.visible = false;
                this.ani_clr2.visible = true;
                this.ani_clr2.animations.add('ani_clr2');
                this.ani_clr2.animations.play('ani_clr2', 10, false).onComplete.add(function() {
                    this.ani_clr2.visible = false;
                    this.clr_2.loadTexture('clr_bowl2')
                    this.green.inputEnabled = true;
                    this.green.input.useHandCursor = true;
                    this.green.input.enableDrag();
                    this.ck_arrow25.visible = true;
                    this.ck_arrow25.x = 150;
                }, this);

            } else {
                this.ck_arrow23.visible = true;
                this.ck_arrow24.visible = false;

                game.add.tween(this.pink).to({
                    x: 250,
                    y: 600
                }, 700, Phaser.Easing.Quadratic.Out, true);
            }
        }, this);

        // this.yellow = game.add.sprite(350,600,'yellow');
        this.yellow = game.add.sprite(650, 600, 'yellow');
        this.yellow.anchor.setTo(0.5);
        // this.yellow.inputEnabled = true;
        // this.yellow.input.useHandCursor = true;
        // this.yellow.input.enableDrag();
        this.yellow.events.onInputDown.add(function() {
            this.ck_arrow25.visible = false;
            this.ck_arrow26.visible = true;
            game.world.bringToTop(this.yellow)
        }, this);
        this.yellow.events.onInputUp.add(function() {

            if ((game.input.activePointer.x > 350 && game.input.activePointer.x < 485 && game.input.activePointer.y > 95 && game.input.activePointer.y < 540)) {
                this.ck_arrow26.visible = false;
                this.yellow.visible = false;
                this.ani_clr1.visible = true;
                this.ani_clr1.animations.add('ani_clr1');
                this.ani_clr1.animations.play('ani_clr1', 10, false).onComplete.add(function() {
                    this.ani_clr1.visible = false;
                    this.clr_3.loadTexture('clr_bowl4')

                    game.add.tween(this.clr_3).to({
                        x: 650
                    }, 800, Phaser.Easing.Quadratic.Out, true);
                    game.add.tween(this.clr_2).to({
                        x: -260
                    }, 800, Phaser.Easing.Quadratic.Out, true);
                    game.add.tween(this.clr_1).to({
                        x: -250
                    }, 800, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {

                        game.add.tween(this.baby1).to({
                            x: 380
                        }, 1000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                            game.add.tween(this.pop1.scale).to({
                                x: 1,
                                y: 1
                            }, 800, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                                game.add.tween(this.pop1.scale).to({
                                    x: 0,
                                    y: 0
                                }, 800, Phaser.Easing.Quadratic.Out, true, 2500).onComplete.add(function() {
                                    game.add.tween(this.baby1).to({
                                        x: 680
                                    }, 1000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {

                                        game.add.tween(this.sugar_1).to({
                                            x: 250
                                        }, 800, Phaser.Easing.Quadratic.Out, true);
                                        game.add.tween(this.ani_bowl3).to({
                                            x: 250
                                        }, 800, Phaser.Easing.Quadratic.Out, true);
                                        game.add.tween(this.flour_1).to({
                                            x: 420
                                        }, 800, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                                            this.front1.visible = true;
                                            this.flour_1.inputEnabled = true;
                                            this.flour_1.input.useHandCursor = true;
                                            this.flour_1.input.enableDrag();
                                            this.ck_arrow27.visible = true;
                                        }, this);
                                    }, this);
                                }, this);
                            }, this);

                        }, this);
                    }, this);
                }, this);
            } else {
                this.ck_arrow25.visible = true;
                this.ck_arrow26.visible = false;

                game.add.tween(this.yellow).to({
                    x: 350,
                    y: 600
                }, 700, Phaser.Easing.Quadratic.Out, true);
            }
        }, this);

        ////////////////////////////////////////////////////////////////////////

        this.ani_bowl3 = game.add.sprite(-250, 500, 'ani_bowl3');
        this.ani_bowl3.anchor.setTo(0.5);

        this.ani_bowl4 = game.add.sprite(250, 500, 'ani_bowl4');
        this.ani_bowl4.anchor.setTo(0.5);
        this.ani_bowl4.visible = false;

        this.ani_bowl5 = game.add.sprite(250, 414, 'ani_bowl5');
        this.ani_bowl5.anchor.setTo(0.5);
        this.ani_bowl5.visible = false;

        this.ani_choco_1 = game.add.sprite(180, 370, 'ani_choco');
        this.ani_choco_1.anchor.setTo(0.5);
        this.ani_choco_1.visible = false;

        this.ani_brown_1 = game.add.sprite(180, 370, 'ani_brown');
        this.ani_brown_1.anchor.setTo(0.5);
        this.ani_brown_1.visible = false;

        this.ani_brownie = game.add.sprite(300, 400, 'ani_brownie');
        this.ani_brownie.anchor.setTo(0.5);
        this.ani_brownie.visible = false;

        this.ani_flour_1 = game.add.sprite(320, 400, 'ani_flour');
        this.ani_flour_1.anchor.setTo(0.5);
        this.ani_flour_1.visible = false;

        this.ani_sugar_1 = game.add.sprite(320, 400, 'ani_sugar');
        this.ani_sugar_1.anchor.setTo(0.5);
        this.ani_sugar_1.visible = false;

        this.ani_egg1 = game.add.sprite(250, 400, 'ani_egg');
        this.ani_egg1.anchor.setTo(0.5);
        this.ani_egg1.visible = false;

        this.front1 = game.add.sprite(250, 510, 'front1');
        this.front1.anchor.setTo(0.5);
        this.front1.visible = false;
        ////////////////////////////////////////////////////////////////////////

        this.flour_1 = game.add.sprite(650, 590, 'flour');
        this.flour_1.anchor.setTo(0.5);
        // this.flour_1.inputEnabled = true;
        // this.flour_1.input.useHandCursor = true;
        // this.flour_1.input.enableDrag();
        this.flour_1.events.onInputDown.add(function() {
            this.ck_arrow27.visible = false;
            this.ck_arrow28.visible = true;
            game.world.bringToTop(this.flour_1)
        }, this);
        this.flour_1.events.onInputUp.add(function() {

            if ((game.input.activePointer.x > 150 && game.input.activePointer.x < 350 && game.input.activePointer.y > 95 && game.input.activePointer.y < 540)) {
                this.ck_arrow28.visible = false;
                this.flour_1.visible = false;
                this.ani_flour_1.visible = true;
                this.ani_flour_1.animations.add('ani_flour_1');
                this.ani_flour_1.animations.play('ani_flour_1', 10, false).onComplete.add(function() {
                    this.ani_flour_1.visible = false;
                    this.sugar_1.inputEnabled = true;
                    this.sugar_1.input.useHandCursor = true;
                    this.sugar_1.input.enableDrag();
                    this.ck_arrow29.visible = true;
                }, this);

                this.ani_bowl3.animations.add('ani_bowl3', [0, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
                this.ani_bowl3.animations.play('ani_bowl3', 10, false).onComplete.add(function() {}, this);

            } else {
                this.ck_arrow27.visible = true;
                this.ck_arrow28.visible = false;

                game.add.tween(this.flour_1).to({
                    x: 420,
                    y: 590
                }, 700, Phaser.Easing.Quadratic.Out, true)
            }
        }, this);
        ////////////////////////////////////////////////////////////////////////

        this.sugar_1 = game.add.sprite(-250, 620, 'sugar');
        this.sugar_1.anchor.setTo(0.5);
        // this.sugar_1.inputEnabled = true;
        // this.sugar_1.input.useHandCursor = true;
        // this.sugar_1.input.enableDrag();
        this.sugar_1.events.onInputDown.add(function() {
            this.ck_arrow29.visible = false;
            this.ck_arrow30.visible = true;
            game.world.bringToTop(this.sugar_1)
        }, this);
        this.sugar_1.events.onInputUp.add(function() {

            if ((game.input.activePointer.x > 150 && game.input.activePointer.x < 350 && game.input.activePointer.y > 95 && game.input.activePointer.y < 540)) {
                this.ck_arrow30.visible = false;
                this.sugar_1.visible = false;
                this.ani_sugar_1.visible = true;
                this.ani_sugar_1.animations.add('ani_sugar_1');
                this.ani_sugar_1.animations.play('ani_sugar_1', 10, false).onComplete.add(function() {
                    this.ani_sugar_1.visible = false;
                    this.ani_bowl3.visible = false;
                    this.ani_bowl4.visible = true;
                    game.add.tween(this.eg_bowl1).to({
                        x: 387.6
                    }, 700, Phaser.Easing.Quadratic.Out, true);
                    game.add.tween(this.egg).to({
                        x: 348
                    }, 700, Phaser.Easing.Quadratic.Out, true)
                    game.add.tween(this.eg_bowl2).to({
                        x: 387.6
                    }, 700, Phaser.Easing.Quadratic.Out, true)
                    game.add.tween(this.egg1).to({
                        x: 425
                    }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                        this.egg.inputEnabled = true;
                        this.egg.input.useHandCursor = true;
                        this.egg.input.enableDrag();
                        this.ck_arrow31.visible = true;
                    }, this);
                }, this);

                this.ani_bowl3.animations.add('ani_bowl3', [9, 9, 9, 9, 9, 9, 10, 11, 12, 13]);
                this.ani_bowl3.animations.play('ani_bowl3', 10, false).onComplete.add(function() {}, this);

            } else {
                this.ck_arrow29.visible = true;
                this.ck_arrow30.visible = false;

                game.add.tween(this.sugar_1).to({
                    x: 250,
                    y: 620
                }, 700, Phaser.Easing.Quadratic.Out, true)
            }
        }, this);
        ////////////////////////////////////////////////////////////////////////        

        this.eg_bowl1 = game.add.sprite(687.6, 641.05, 'eg_bowl1');
        this.eg_bowl1.anchor.setTo(0.5);

        this.egg = game.add.sprite(648, 599.05, 'egg');
        this.egg.anchor.setTo(0.5);
        // this.egg.inputEnabled = true;
        // this.egg.input.useHandCursor = true;
        // this.egg.input.enableDrag();
        this.egg.events.onInputDown.add(function() {
            this.ck_arrow31.visible = false;
            this.ck_arrow32.visible = true;
            game.world.bringToTop(this.egg)
        }, this);
        this.egg.events.onInputUp.add(function() {

            if ((game.input.activePointer.x > 150 && game.input.activePointer.x < 360 && game.input.activePointer.y > 320 && game.input.activePointer.y < 510)) {
                this.ck_arrow32.visible = false;
                this.egg.visible = false;
                this.ani_egg1.visible = true;
                this.ani_egg1.animations.add('ani_egg1');
                this.ani_egg1.animations.play('ani_egg1', 10, false).onComplete.add(function() {
                    this.ani_egg1.visible = false;
                    this.egg1.inputEnabled = true;
                    this.egg1.input.useHandCursor = true;
                    this.egg1.input.enableDrag();
                    this.ck_arrow33.visible = true;
                }, this);
                this.ani_bowl4.animations.add('ani_bowl4', [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 4, 5, 6, 7]);
                this.ani_bowl4.animations.play('ani_bowl4', 10, false).onComplete.add(function() {

                }, this);

            } else {
                this.ck_arrow31.visible = true;
                this.ck_arrow32.visible = false;

                game.add.tween(this.egg).to({
                    x: 348,
                    y: 599.05
                }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                    game.world.bringToTop(this.eg_bowl2)
                }, this);
            }
        }, this);

        this.egg1 = game.add.sprite(725, 599.05, 'egg');
        this.egg1.anchor.setTo(0.5);
        // this.egg1.inputEnabled = true;
        // this.egg1.input.useHandCursor = true;
        // this.egg1.input.enableDrag();
        this.egg1.events.onInputDown.add(function() {
            this.ck_arrow33.visible = false;
            this.ck_arrow34.visible = true;
            game.world.bringToTop(this.egg1)
        }, this);
        this.egg1.events.onInputUp.add(function() {

            if ((game.input.activePointer.x > 150 && game.input.activePointer.x < 360 && game.input.activePointer.y > 320 && game.input.activePointer.y < 510)) {
                this.ck_arrow34.visible = false;
                this.egg1.visible = false;
                this.ani_egg1.visible = true;
                this.ani_egg1.animations.add('ani_egg1');
                this.ani_egg1.animations.play('ani_egg1', 10, false).onComplete.add(function() {
                    this.ani_egg1.visible = false;
                    game.add.tween(this.eg_bowl1).to({
                        x: 650
                    }, 700, Phaser.Easing.Quadratic.Out, true);
                    game.add.tween(this.eg_bowl2).to({
                        x: 650
                    }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                        this.ani_bowl4.visible = false;
                        this.ani_bowl5.visible = true;
                        game.add.tween(this.choco_1).to({
                            x: 100
                        }, 700, Phaser.Easing.Quadratic.Out, true);
                        game.add.tween(this.brownie1).to({
                            x: 320
                        }, 700, Phaser.Easing.Quadratic.Out, true);
                        game.add.tween(this.drill_1).to({
                            x: 400
                        }, 700, Phaser.Easing.Quadratic.Out, true);
                        game.add.tween(this.brown_1).to({
                            x: 230
                        }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                            this.ck_arrow35.visible = true;
                            this.choco_1.inputEnabled = true;
                            this.choco_1.input.useHandCursor = true;
                            this.choco_1.input.enableDrag();
                        }, this);
                    }, this);
                }, this);
                this.ani_bowl4.animations.add('ani_bowl4', [7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 8, 9, 10, 11]);
                this.ani_bowl4.animations.play('ani_bowl4', 10, false).onComplete.add(function() {

                }, this);

            } else {
                this.ck_arrow33.visible = true;
                this.ck_arrow34.visible = false;

                game.add.tween(this.egg1).to({
                    x: 425,
                    y: 599.05
                }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                    game.world.bringToTop(this.eg_bowl2)
                }, this);
            }
        }, this);

        this.eg_bowl2 = game.add.sprite(687.6, 630.85, 'eg_bowl2');
        this.eg_bowl2.anchor.setTo(0.5);

        ////////////////////////////////////////////////////////////////////////

        this.choco_1 = game.add.sprite(-250, 550, 'choco');
        this.choco_1.anchor.setTo(0.5);
        // this.choco_1.inputEnabled = true;
        // this.choco_1.input.useHandCursor = true;
        // this.choco_1.input.enableDrag();
        this.choco_1.events.onInputDown.add(function() {
            this.ck_arrow35.visible = false;
            this.ck_arrow36.visible = true;
            game.world.bringToTop(this.choco_1)
        }, this);
        this.choco_1.events.onInputUp.add(function() {

            if ((game.input.activePointer.x > 100 && game.input.activePointer.x < 360 && game.input.activePointer.y > 320 && game.input.activePointer.y < 510)) {
                this.ck_arrow36.visible = false;
                this.choco_1.visible = false;
                this.ani_choco_1.visible = true;
                this.ani_choco_1.animations.add('ani_choco_1');
                this.ani_choco_1.animations.play('ani_choco_1', 10, false).onComplete.add(function() {
                    this.ani_choco_1.visible = false;

                }, this);
                this.ani_bowl5.animations.add('ani_bowl5', [0, 0, 0, 0, 0, 0, 1, 2, 3, 4, 5, 6, 7]);
                this.ani_bowl5.animations.play('ani_bowl5', 10, false).onComplete.add(function() {
                    this.brown_1.inputEnabled = true;
                    this.brown_1.input.useHandCursor = true;
                    this.brown_1.input.enableDrag();
                    this.ck_arrow37.visible = true;
                }, this);

            } else {
                this.ck_arrow35.visible = true;
                this.ck_arrow36.visible = false;

                game.add.tween(this.choco_1).to({
                    x: 100,
                    y: 550
                }, 700, Phaser.Easing.Quadratic.Out, true);
            }
        }, this);

        this.brown_1 = game.add.sprite(-250, 600, 'brown');
        this.brown_1.anchor.setTo(0.5);
        // this.brown_1.inputEnabled = true;
        // this.brown_1.input.useHandCursor = true;
        // this.brown_1.input.enableDrag();
        this.brown_1.events.onInputDown.add(function() {
            this.ck_arrow37.visible = false;
            this.ck_arrow38.visible = true;
            game.world.bringToTop(this.brown_1)
        }, this);
        this.brown_1.events.onInputUp.add(function() {

            if ((game.input.activePointer.x > 150 && game.input.activePointer.x < 360 && game.input.activePointer.y > 320 && game.input.activePointer.y < 510)) {
                this.ck_arrow38.visible = false;
                this.brown_1.visible = false;
                this.ani_brown_1.visible = true;
                this.ani_brown_1.animations.add('ani_brown_1');
                this.ani_brown_1.animations.play('ani_brown_1', 10, false).onComplete.add(function() {
                    this.ani_brown_1.visible = false;

                }, this);
                this.ani_bowl5.animations.add('ani_bowl5', [7, 7, 7, 7, 7, 7, 8, 9, 10, 11, 12, 13, 14, 15]);
                this.ani_bowl5.animations.play('ani_bowl5', 10, false).onComplete.add(function() {
                    this.brownie1.inputEnabled = true;
                    this.brownie1.input.useHandCursor = true;
                    this.brownie1.input.enableDrag();
                    this.ck_arrow39.visible = true;
                }, this);

            } else {
                this.ck_arrow37.visible = true;
                this.ck_arrow38.visible = false;

                game.add.tween(this.brown_1).to({
                    x: 230,
                    y: 600
                }, 700, Phaser.Easing.Quadratic.Out, true);
            }
        }, this);

        this.brownie1 = game.add.sprite(650, 630, 'brownie1');
        this.brownie1.anchor.setTo(0.5);
        // this.brownie1.inputEnabled = true;
        // this.brownie1.input.useHandCursor = true;
        // this.brownie1.input.enableDrag();
        this.brownie1.events.onInputDown.add(function() {
            this.ck_arrow39.visible = false;
            this.ck_arrow40.visible = true;
            game.world.bringToTop(this.brownie1)
        }, this);
        this.brownie1.events.onInputUp.add(function() {

            if ((game.input.activePointer.x > 150 && game.input.activePointer.x < 360 && game.input.activePointer.y > 320 && game.input.activePointer.y < 510)) {
                this.ck_arrow40.visible = false;
                this.brownie1.visible = false;
                this.ani_brownie.visible = true;
                this.ani_brownie.animations.add('ani_brownie');
                this.ani_brownie.animations.play('ani_brownie', 10, false).onComplete.add(function() {
                    this.ani_brownie.visible = false;

                }, this);
                this.ani_bowl5.animations.add('ani_bowl5', [15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 16, 17, 18, 19, 20]);
                this.ani_bowl5.animations.play('ani_bowl5', 10, false).onComplete.add(function() {
                    this.ck_arrow41.visible = true;
                    this.drill_1.inputEnabled = true;
                    this.drill_1.input.useHandCursor = true;
                    this.drill_1.input.enableDrag();
                }, this);

            } else {
                this.ck_arrow39.visible = true;
                this.ck_arrow40.visible = false;

                game.add.tween(this.brownie1).to({
                    x: 320,
                    y: 630
                }, 700, Phaser.Easing.Quadratic.Out, true);
            }
        }, this);

        this.drill_1 = game.add.sprite(650, 580, 'drill');
        this.drill_1.anchor.setTo(0.5);
        // this.drill_1.inputEnabled = true;
        // this.drill_1.input.useHandCursor = true;
        // this.drill_1.input.enableDrag();
        this.drill_1.events.onInputDown.add(function() {
            this.ck_arrow41.visible = false;
            this.ck_arrow42.visible = true;
            game.world.bringToTop(this.drill_1)
        }, this);
        this.drill_1.events.onInputUp.add(function() {

            if ((game.input.activePointer.x > 150 && game.input.activePointer.x < 360 && game.input.activePointer.y > 320 && game.input.activePointer.y < 510)) {
                this.ck_arrow42.visible = false;
                this.front1.visible = false;
                this.drill_1.visible = false;
                this.ani_bowl5.animations.add('ani_bowl5', [21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35]);
                this.ani_bowl5.animations.play('ani_bowl5', 10, false).onComplete.add(function() {
                    game.add.tween(this.ani_bowl5).to({
                        x: -250
                    }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                        game.add.tween(this.ani_roll).to({
                            x: 350
                        }, 700, Phaser.Easing.Quadratic.Out, true);
                        game.add.tween(this.brown1).to({
                            x: 150
                        }, 700, Phaser.Easing.Quadratic.Out, true);
                        game.add.tween(this.roller).to({
                            x: 350
                        }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                            this.brown1.inputEnabled = true;
                            this.brown1.input.useHandCursor = true;
                            this.brown1.input.enableDrag();
                            this.ck_arrow43.visible = true;
                        }, this);
                    }, this);
                }, this);

            } else {
                this.ck_arrow41.visible = true;
                this.ck_arrow42.visible = false;

                game.add.tween(this.drill_1).to({
                    x: 400,
                    y: 580
                }, 700, Phaser.Easing.Quadratic.Out, true);
            }
        }, this);

        ////////////////////////////////////////////////////////////////////////



        this.brown1 = game.add.sprite(-250, 550, 'brown1');
        this.brown1.anchor.setTo(0.5);
        // this.brown1.inputEnabled = true;
        // this.brown1.input.useHandCursor = true;
        // this.brown1.input.enableDrag();
        this.brown1.events.onInputDown.add(function() {
            this.ck_arrow43.visible = false;
            this.ck_arrow44.visible = true;
            game.world.bringToTop(this.brown1)
        }, this);
        this.brown1.events.onInputUp.add(function() {

            if ((game.input.activePointer.x > 245 && game.input.activePointer.x < 445 && game.input.activePointer.y > 465 && game.input.activePointer.y < 650)) {
                this.ck_arrow44.visible = false;
                this.brown1.visible = false;
                this.ani_brown2.visible = true;
                this.ani_brown2.animations.add('ani_brown2');
                this.ani_brown2.animations.play('ani_brown2', 10, false).onComplete.add(function() {
                    this.ani_brown2.visible = false;

                }, this);
                this.ani_roll.animations.add('ani_roll', [0, 0, 0, 0, 0, 0, 1, 2, 3, 4]);
                this.ani_roll.animations.play('ani_roll', 10, false).onComplete.add(function() {
                    this.roller.inputEnabled = true;
                    this.roller.input.useHandCursor = true;
                    this.roller.input.enableDrag();
                    this.ck_arrow45.visible = true;
                }, this);

            } else {
                this.ck_arrow43.visible = true;
                this.ck_arrow44.visible = false;

                game.add.tween(this.brown1).to({
                    x: 150,
                    y: 550
                }, 700, Phaser.Easing.Quadratic.Out, true);
            }
        }, this);

        this.ani_roll = game.add.sprite(650, 600, 'ani_roll');
        this.ani_roll.anchor.setTo(0.5);

        this.roller = game.add.sprite(650, 690, 'roller');
        this.roller.anchor.setTo(0.5);
        // this.roller.inputEnabled = true;
        // this.roller.input.useHandCursor = true;
        // this.roller.input.enableDrag();
        this.roller.events.onInputDown.add(function() {
            this.ck_arrow45.visible = false;
            this.ck_arrow46.visible = true;
            game.world.bringToTop(this.roller)
        }, this);
        this.roller.events.onInputUp.add(function() {

            if ((game.input.activePointer.x > 245 && game.input.activePointer.x < 445 && game.input.activePointer.y > 465 && game.input.activePointer.y < 650)) {
                this.ck_arrow46.visible = false;
                this.roller.visible = false;
                this.ani_roll.animations.add('ani_roll', [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);
                this.ani_roll.animations.play('ani_roll', 10, false).onComplete.add(function() {
                    game.add.tween(this.ani_roll).to({
                        x: 650
                    }, 700, Phaser.Easing.Quadratic.Out, true, 250).onComplete.add(function() {
                        game.add.tween(this.f_spoon1).to({
                            x: 210
                        }, 700, Phaser.Easing.Quadratic.Out, true);
                        game.add.tween(this.ani_press1).to({
                            x: 350
                        }, 700, Phaser.Easing.Quadratic.Out, true);
                        game.add.tween(this.f_bronbowl).to({
                            x: 120
                        }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                            this.f_spoon1.inputEnabled = true;
                            this.f_spoon1.input.useHandCursor = true;
                            this.f_spoon1.input.pixelPerfectClick = true;
                            this.f_spoon1.input.pixelPerfectOver = true;
                            this.ck_arrow47.visible = true;
                        }, this);
                    }, this);
                }, this);

            } else {
                this.ck_arrow45.visible = true;
                this.ck_arrow46.visible = false;

                game.add.tween(this.roller).to({
                    x: 350,
                    y: 690
                }, 700, Phaser.Easing.Quadratic.Out, true);
            }
        }, this);

        this.ani_brown2 = game.add.sprite(280, 500, 'ani_brown2');
        this.ani_brown2.anchor.setTo(0.5);
        this.ani_brown2.visible = false;

        ////////////////////////////////////////////////////////////////////////

        // this.f_bronbowl = game.add.sprite(120,550,'f_bronbowl');
        this.f_bronbowl = game.add.sprite(-250, 550, 'f_bronbowl');
        this.f_bronbowl.anchor.setTo(0.5);
        // this.f_bronbowl.inputEnabled=true;
        // this.f_bronbowl.input.useHandCursor=true;
        this.f_bronbowl.events.onInputDown.add(function() {
            this.ck_arrow48.visible = false;
            this.ck_arrow49.visible = true;
            this.f_bronbowl.inputEnabled = false;
            this.ani_press1.inputEnabled = true;
            this.f_spoon1.loadTexture('f_spoon2')
            this.ani_press1.input.useHandCursor = true;
        }, this);

        // this.f_spoon1 = game.add.sprite(210,590,'f_spoon1');
        this.f_spoon1 = game.add.sprite(-250, 590, 'f_spoon1');
        this.f_spoon1.anchor.setTo(0.5);
        this.f_spoon1.inputEnabled = true;
        this.f_spoon1.input.useHandCursor = true;
        this.f_spoon1.input.pixelPerfectClick = true;
        this.f_spoon1.input.pixelPerfectOver = true;
        this.f_spoon1.events.onInputDown.add(function() {
            this.ck_arrow47.visible = false;
            this.ck_arrow48.visible = true;
            this.f_spoon1.inputEnabled = false;
            game.world.bringToTop(this.f_spoon1)
            this.spdrag = true;
            this.f_bronbowl.inputEnabled = true;
            this.f_bronbowl.input.useHandCursor = true;
        }, this);

        // this.ani_press1 = game.add.sprite(350,500,'ani_press1');
        this.ani_press1 = game.add.sprite(650, 500, 'ani_press1');
        this.ani_press1.anchor.setTo(0.5);
        // this.ani_press1.inputEnabled=true;
        // this.ani_press1.input.useHandCursor=true;
        this.ani_press1.events.onInputDown.add(function() {
            this.ck_arrow49.visible = false;
            this.ani_press1.inputEnabled = false;
            this.spdrag = false;
            this.f_spoon1.visible = false;
            this.ani_press1.animations.add('ani_press1', [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);
            this.ani_press1.animations.play('ani_press1', 8, false).onComplete.add(function() {
                game.add.tween(this.t_timer).to({
                    x: 250
                }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                    this.t_timer.animations.add('t_timer');
                    this.t_timer.animations.play('t_timer', 10, false).onComplete.add(function() {
                        game.add.tween(this.t_timer).to({
                            x: -250
                        }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                            this.ani_press1.frame = 14;
                            game.add.tween(this.f_bronbowl).to({
                                x: -250
                            }, 700, Phaser.Easing.Quadratic.Out, true, 700);
                            game.add.tween(this.ani_press1).to({
                                x: 650
                            }, 700, Phaser.Easing.Quadratic.Out, true, 700).onComplete.add(function() {
                                game.add.tween(this.corn).to({
                                    x: 400
                                }, 700, Phaser.Easing.Quadratic.Out, true);
                                game.add.tween(this.corn_plate).to({
                                    x: 200
                                }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                                    this.ck_arrow50.visible = true;
                                    this.corn.inputEnabled = true;
                                    this.corn.input.useHandCursor = true;
                                    this.corn.input.enableDrag();
                                }, this);
                            }, this);
                        }, this);
                    }, this);
                }, this);
            }, this);
        }, this);

        ////////////////////////////////////////////////////////////////////////

        // this.corn_plate = game.add.sprite(200,600,'corn_plate');
        this.corn_plate = game.add.sprite(-250, 600, 'corn_plate');
        this.corn_plate.anchor.setTo(0.5);


        this.ani_corn = game.add.sprite(270, 480, 'ani_corn');
        this.ani_corn.anchor.setTo(0.5);
        this.ani_corn.visible = false;

        this.corn = game.add.sprite(650, 600, 'corn');
        this.corn.anchor.setTo(0.5);
        // this.corn.inputEnabled = true;
        // this.corn.input.useHandCursor = true;
        // this.corn.input.enableDrag();
        this.corn.events.onInputDown.add(function() {
            this.ck_arrow50.visible = false;
            this.ck_arrow51.visible = true;
            game.world.bringToTop(this.corn)
        }, this);
        this.corn.events.onInputUp.add(function() {

            if ((game.input.activePointer.x > 70 && game.input.activePointer.x < 335 && game.input.activePointer.y > 445 && game.input.activePointer.y < 670)) {
                this.ck_arrow51.visible = false;
                this.corn.visible = false;
                this.ani_corn.visible = true;
                this.ani_corn.animations.add('ani_corn');
                this.ani_corn.animations.play('ani_corn', 10, false).onComplete.add(function() {}, this);
                this.corn_plate.animations.add('corn_plate');
                this.corn_plate.animations.play('corn_plate', 10, false).onComplete.add(function() {
                    this.ani_corn.visible = false;
                    game.add.tween(this.corn_plate).to({
                        x: -290
                    }, 700, Phaser.Easing.Quadratic.Out, true, 500).onComplete.add(function() {
                        game.add.tween(this.on_off).to({
                            x: 290
                        }, 700, Phaser.Easing.Quadratic.Out, true, 500);
                        game.add.tween(this.heater1).to({
                            x: 150
                        }, 700, Phaser.Easing.Quadratic.Out, true, 500);
                        game.add.tween(this.f_plate1).to({
                            x: 220
                        }, 700, Phaser.Easing.Quadratic.Out, true, 500);
                        game.add.tween(this.f_plate2).to({
                            x: 400
                        }, 700, Phaser.Easing.Quadratic.Out, true, 500).onComplete.add(function() {
                            this.heater1.inputEnabled = true;
                            this.heater1.input.useHandCursor = true;
                            this.ck_arrow52.visible = true;
                        }, this);
                    }, this);
                }, this);

            } else {
                this.ck_arrow50.visible = true;
                this.ck_arrow51.visible = false;

                game.add.tween(this.corn).to({
                    x: 400,
                    y: 600
                }, 700, Phaser.Easing.Quadratic.Out, true);
            }
        }, this);
        ////////////////////////////////////////////////////////////////////////

        this.heater_cnt = 0;
        this.heater1 = game.add.sprite(-250, 530, 'heater1');
        this.heater1.anchor.setTo(0.5);
        // this.heater1.inputEnabled=true;
        // this.heater1.input.useHandCursor=true;
        this.heater1.events.onInputDown.add(function() {
            this.heater1.inputEnabled = false;
            this.heater_cnt++
                if (this.heater_cnt == 1) {
                    this.ck_arrow52.visible = false;
                    this.ck_arrow53.visible = true;

                    this.heater1.loadTexture('heater2')
                    this.f_plate1.inputEnabled = true;
                    this.f_plate1.input.useHandCursor = true;
                    this.f_plate1.input.enableDrag();
                }
        }, this);


        this.on_cnt = 0;
        this.on_off = game.add.sprite(-250, 560, 'on_off');
        this.on_off.anchor.setTo(0.5);
        // this.on_off.inputEnabled=true;
        // this.on_off.input.useHandCursor=true;
        this.on_off.events.onInputDown.add(function() {
            this.on_off.inputEnabled = false;
            this.on_cnt++
                if (this.on_cnt == 1) {
                    this.ck_arrow55.visible = false;

                    this.on_off.animations.add('on_off', [0, 1, 2, 3, 4, 5]);
                    this.on_off.animations.play('on_off', 10, false).onComplete.add(function() {

                        game.add.tween(this.t_timer).to({
                            x: 250
                        }, 700, Phaser.Easing.Quadratic.Out, true, 500).onComplete.add(function() {
                            this.t_timer.animations.add('t_timer');
                            this.t_timer.animations.play('t_timer', 10, false).onComplete.add(function() {
                                game.add.tween(this.t_timer).to({
                                    x: -250
                                }, 700, Phaser.Easing.Quadratic.Out, true, 500).onComplete.add(function() {
                                    this.on_off.animations.add('on_off', [5, 4, 3, 2, 1, 0]);
                                    this.on_off.animations.play('on_off', 10, false).onComplete.add(function() {
                                        this.f_plate1.visible = true;
                                        this.f_plate1.x = 157;
                                        this.f_plate1.y = 522;
                                        this.heater1.loadTexture('heater2')
                                        game.add.tween(this.f_plate1).to({
                                            x: 220,
                                            y: 650
                                        }, 700, Phaser.Easing.Quadratic.Out, true, 500).onComplete.add(function() {
                                            this.ck_arrow56.visible = true;
                                            this.f_plate2.inputEnabled = true;
                                            this.f_plate2.input.useHandCursor = true;
                                            this.f_plate2.input.enableDrag();
                                        }, this);
                                    }, this);
                                }, this);
                            }, this);
                        }, this);
                    }, this);
                }

            if (this.on_cnt == 2) {
                this.ck_arrow58.visible = false;

                this.on_off.animations.add('on_off', [0, 1, 2, 3, 4, 5]);
                this.on_off.animations.play('on_off', 10, false).onComplete.add(function() {

                    game.add.tween(this.t_timer).to({
                        x: 250
                    }, 700, Phaser.Easing.Quadratic.Out, true, 500).onComplete.add(function() {
                        this.t_timer.animations.add('t_timer');
                        this.t_timer.animations.play('t_timer', 10, false).onComplete.add(function() {
                            game.add.tween(this.t_timer).to({
                                x: -250
                            }, 700, Phaser.Easing.Quadratic.Out, true, 500).onComplete.add(function() {
                                this.on_off.animations.add('on_off', [5, 4, 3, 2, 1, 0]);
                                this.on_off.animations.play('on_off', 10, false).onComplete.add(function() {
                                    this.f_plate2.visible = true;
                                    this.f_plate2.x = 157;
                                    this.f_plate2.y = 522;
                                    this.heater1.loadTexture('heater2')
                                    game.add.tween(this.f_plate2).to({
                                        x: 400,
                                        y: 650
                                    }, 700, Phaser.Easing.Quadratic.Out, true, 500).onComplete.add(function() {
                                        game.add.tween(this.on_off).to({
                                            x: -250
                                        }, 700, Phaser.Easing.Quadratic.Out, true, 500);
                                        game.add.tween(this.heater1).to({
                                            x: -250
                                        }, 700, Phaser.Easing.Quadratic.Out, true, 500);
                                        game.add.tween(this.f_plate1).to({
                                            x: -250
                                        }, 700, Phaser.Easing.Quadratic.Out, true, 500);
                                        game.add.tween(this.f_plate2).to({
                                            x: 650
                                        }, 700, Phaser.Easing.Quadratic.Out, true, 500).onComplete.add(function() {


                                            game.add.tween(this.ani_roller1).to({
                                                x: 100
                                            }, 700, Phaser.Easing.Quadratic.Out, true, 500);
                                            game.add.tween(this.ani_roller2).to({
                                                x: 250
                                            }, 700, Phaser.Easing.Quadratic.Out, true, 500);
                                            game.add.tween(this.cone_roler2).to({
                                                x: 260
                                            }, 700, Phaser.Easing.Quadratic.Out, true, 500);
                                            game.add.tween(this.cone_roler1).to({
                                                x: 80
                                            }, 700, Phaser.Easing.Quadratic.Out, true, 500);
                                            game.add.tween(this.cone_roler3).to({
                                                x: 420
                                            }, 700, Phaser.Easing.Quadratic.Out, true, 500);
                                            game.add.tween(this.ani_roller3).to({
                                                x: 400
                                            }, 700, Phaser.Easing.Quadratic.Out, true, 500).onComplete.add(function() {

                                                this.ck_arrow59.visible = true;
                                                this.cone_roler2.inputEnabled = true;
                                                this.cone_roler2.input.useHandCursor = true;
                                                this.cone_roler2.input.enableDrag();

                                            }, this);
                                        }, this);


                                    }, this);
                                }, this);
                            }, this);
                        }, this);
                    }, this);
                }, this);
            }

        }, this);

        this.f_plate1 = game.add.sprite(-250, 650, 'f_plate1');
        this.f_plate1.anchor.setTo(0.5);
        this.f_plate1.scale.setTo(0.85);
        // this.f_plate1.inputEnabled = true;
        // this.f_plate1.input.useHandCursor = true;
        // this.f_plate1.input.enableDrag();
        this.f_plate1.events.onInputDown.add(function() {
            this.ck_arrow53.visible = false;
            this.ck_arrow54.visible = true;
            game.world.bringToTop(this.f_plate1)
        }, this);
        this.f_plate1.events.onInputUp.add(function() {

            if ((game.input.activePointer.x > 40 && game.input.activePointer.x < 309 && game.input.activePointer.y > 430 && game.input.activePointer.y < 590)) {
                this.ck_arrow54.visible = false;
                this.f_plate1.inputEnabled = false;
                this.heater1.loadTexture('heater3')
                this.f_plate1.visible = false;
                game.time.events.add(800, function() {
                    this.heater1.loadTexture('heater4')

                    this.on_off.inputEnabled = true;
                    this.on_off.input.useHandCursor = true;
                    this.ck_arrow55.visible = true;

                }, this);
            } else {
                this.ck_arrow53.visible = true;
                this.ck_arrow54.visible = false;

                game.add.tween(this.f_plate1).to({
                    x: 220,
                    y: 650
                }, 700, Phaser.Easing.Quadratic.Out, true);
            }
        }, this);

        this.f_plate2 = game.add.sprite(650, 650, 'f_plate2');
        this.f_plate2.anchor.setTo(0.5);
        this.f_plate2.scale.setTo(0.85);
        // this.f_plate2.inputEnabled = true;
        // this.f_plate2.input.useHandCursor = true;
        // this.f_plate2.input.enableDrag();
        this.f_plate2.events.onInputDown.add(function() {
            this.ck_arrow56.visible = false;
            this.ck_arrow57.visible = true;
            game.world.bringToTop(this.f_plate2)
        }, this);
        this.f_plate2.events.onInputUp.add(function() {

            if ((game.input.activePointer.x > 40 && game.input.activePointer.x < 309 && game.input.activePointer.y > 430 && game.input.activePointer.y < 590)) {
                this.ck_arrow57.visible = false;
                this.f_plate2.inputEnabled = false;
                this.heater1.loadTexture('heater5')
                this.f_plate2.visible = false;
                game.time.events.add(800, function() {
                    this.heater1.loadTexture('heater6')

                    this.on_off.inputEnabled = true;
                    this.on_off.input.useHandCursor = true;
                    this.ck_arrow58.visible = true;

                }, this);
            } else {
                this.ck_arrow56.visible = true;
                this.ck_arrow57.visible = false;

                game.add.tween(this.f_plate2).to({
                    x: 400,
                    y: 650
                }, 700, Phaser.Easing.Quadratic.Out, true);
            }
        }, this);


        ////////////////////////////////////////////////////////////////////////

        this.ani_roller1 = game.add.sprite(-250, 600, 'ani_roller1');
        this.ani_roller1.anchor.setTo(0.5);
        this.ani_roller1.scale.setTo(0.85);

        this.ani_roller2 = game.add.sprite(-250, 515, 'ani_roller2');
        this.ani_roller2.anchor.setTo(0.5);
        this.ani_roller2.scale.setTo(0.85);

        this.ani_roller3 = game.add.sprite(650, 600, 'ani_roller3');
        this.ani_roller3.anchor.setTo(0.5);
        this.ani_roller3.scale.setTo(0.85);


        this.cone_roler2 = game.add.sprite(-250, 650, 'cone_roler');
        this.cone_roler2.anchor.setTo(0.5);
        this.cone_roler2.scale.setTo(0.7);
        this.cone_roler2.rotation = -0.85;
        // this.cone_roler2.inputEnabled = true;
        // this.cone_roler2.input.useHandCursor = true;
        // this.cone_roler2.input.enableDrag();
        this.cone_roler2.events.onInputDown.add(function() {
            this.ck_arrow59.visible = false;
            this.ck_arrow60.visible = true;
            game.world.bringToTop(this.cone_roler2)
        }, this);
        this.cone_roler2.events.onInputUp.add(function() {

            if ((game.input.activePointer.x > 150 && game.input.activePointer.x < 340 && game.input.activePointer.y > 470 && game.input.activePointer.y < 560)) {
                this.ck_arrow60.visible = false;

                this.cone_roler2.visible = false;
                this.ani_roller2.animations.add('ani_roller2', [0, 1, 2, 3, 4, 5]);
                this.ani_roller2.animations.play('ani_roller2', 10, false).onComplete.add(function() {

                    this.cone_roler1.inputEnabled = true;
                    this.cone_roler1.input.useHandCursor = true;
                    this.cone_roler1.input.enableDrag();
                    this.ck_arrow61.visible = true;
                }, this);
            } else {
                this.ck_arrow59.visible = true;
                this.ck_arrow60.visible = false;

                game.add.tween(this.cone_roler2).to({
                    x: 260,
                    y: 650
                }, 700, Phaser.Easing.Quadratic.Out, true);
            }
        }, this);

        this.cone_roler1 = game.add.sprite(-250, 540, 'cone_roler');
        this.cone_roler1.anchor.setTo(0.5);
        this.cone_roler1.scale.setTo(0.7);
        this.cone_roler1.rotation = -0.85;
        // this.cone_roler1.inputEnabled = true;
        // this.cone_roler1.input.useHandCursor = true;
        // this.cone_roler1.input.enableDrag();
        this.cone_roler1.events.onInputDown.add(function() {
            this.ck_arrow61.visible = false;
            this.ck_arrow62.visible = true;
            game.world.bringToTop(this.cone_roler1)
        }, this);
        this.cone_roler1.events.onInputUp.add(function() {

            if ((game.input.activePointer.x > 0 && game.input.activePointer.x < 188 && game.input.activePointer.y > 568 && game.input.activePointer.y < 668)) {
                this.ck_arrow62.visible = false;

                this.cone_roler1.visible = false;
                this.ani_roller1.animations.add('ani_roller1', [0, 1, 2, 3, 4]);
                this.ani_roller1.animations.play('ani_roller1', 10, false).onComplete.add(function() {

                    this.cone_roler3.inputEnabled = true;
                    this.cone_roler3.input.useHandCursor = true;
                    this.cone_roler3.input.enableDrag();
                    this.ck_arrow63.visible = true;
                }, this);

            } else {
                this.ck_arrow61.visible = true;
                this.ck_arrow62.visible = false;

                game.add.tween(this.cone_roler1).to({
                    x: 80,
                    y: 540
                }, 700, Phaser.Easing.Quadratic.Out, true);
            }
        }, this);

        this.cone_roler3 = game.add.sprite(650, 540, 'cone_roler');
        this.cone_roler3.anchor.setTo(0.5);
        this.cone_roler3.scale.setTo(0.7);
        this.cone_roler3.rotation = -0.85;
        // this.cone_roler3.inputEnabled = true;
        // this.cone_roler3.input.useHandCursor = true;
        // this.cone_roler3.input.enableDrag();
        this.cone_roler3.events.onInputDown.add(function() {
            this.ck_arrow63.visible = false;
            this.ck_arrow64.visible = true;
            game.world.bringToTop(this.cone_roler3)
        }, this);
        this.cone_roler3.events.onInputUp.add(function() {

            if ((game.input.activePointer.x > 250 && game.input.activePointer.x < 500 && game.input.activePointer.y > 568 && game.input.activePointer.y < 668)) {
                this.ck_arrow64.visible = false;

                this.cone_roler3.visible = false;
                this.ani_roller3.animations.add('ani_roller3', [0, 1, 2, 3, 4, 5]);
                this.ani_roller3.animations.play('ani_roller3', 10, false).onComplete.add(function() {

                    game.add.tween(this.ani_roller1).to({
                        x: -250
                    }, 700, Phaser.Easing.Quadratic.Out, true, 500);
                    game.add.tween(this.ani_roller2).to({
                        x: -250
                    }, 700, Phaser.Easing.Quadratic.Out, true, 500);
                    game.add.tween(this.ani_roller3).to({
                        x: 650
                    }, 700, Phaser.Easing.Quadratic.Out, true, 500).onComplete.add(function() {

                        game.add.tween(this.cone1).to({
                            x: 150
                        }, 700, Phaser.Easing.Quadratic.Out, true);
                        game.add.tween(this.stand1).to({
                            x: 380
                        }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {

                            this.ck_arrow65.visible = true;
                            this.cone1.inputEnabled = true;
                            this.cone1.input.useHandCursor = true;
                            this.cone1.input.enableDrag();
                        }, this);

                    }, this);
                }, this);

            } else {
                this.ck_arrow63.visible = true;
                this.ck_arrow64.visible = false;

                game.add.tween(this.cone_roler3).to({
                    x: 420,
                    y: 540
                }, 700, Phaser.Easing.Quadratic.Out, true);
            }
        }, this);


        ////////////////////////////////////////////////////////////////////////

        this.cone1 = game.add.sprite(-250, 540, 'cone1');
        this.cone1.anchor.setTo(0.5);
        // this.cone1.inputEnabled = true;
        // this.cone1.input.useHandCursor = true;
        // this.cone1.input.enableDrag();
        this.cone1.events.onInputDown.add(function() {
            this.ck_arrow65.visible = false;
            this.ck_arrow66.visible = true;
            game.world.bringToTop(this.cone1)
        }, this);
        this.cone1.events.onInputUp.add(function() {

            if ((game.input.activePointer.x > 320 && game.input.activePointer.x < 450 && game.input.activePointer.y > 390 && game.input.activePointer.y < 615)) {
                this.ck_arrow66.visible = false;

                this.cone1.inputEnabled = false;
                this.cone1.loadTexture('cone_roler')
                this.stand1.loadTexture('stand4')
                game.add.tween(this.cone1).to({
                    x: 150,
                    y: 540
                }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                    game.add.tween(this.cone1).to({
                        x: -250
                    }, 700, Phaser.Easing.Quadratic.Out, true);
                    game.add.tween(this.stand1).to({
                        x: 650
                    }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                        game.add.tween(this.stand_1).to({
                            x: 380
                        }, 700, Phaser.Easing.Quadratic.Out, true);
                        game.add.tween(this.cone_1).to({
                            x: 150
                        }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                            this.cone_1.inputEnabled = true;
                            this.cone_1.input.useHandCursor = true;
                            this.cone_1.input.enableDrag();
                            this.ck_arrow67.visible = true;
                        }, this);
                    }, this);
                }, this);


            } else {
                this.ck_arrow65.visible = true;
                this.ck_arrow66.visible = false;

                game.add.tween(this.cone1).to({
                    x: 150,
                    y: 540
                }, 700, Phaser.Easing.Quadratic.Out, true);
            }
        }, this);

        this.stand1 = game.add.sprite(650, 480, 'stand1');
        this.stand1.anchor.setTo(0.5);

        ////////////////////////////////////////////////////////////////////////

        this.cone_1 = game.add.sprite(-250, 540, 'cone2');
        this.cone_1.anchor.setTo(0.5);
        // this.cone_1.inputEnabled = true;
        // this.cone_1.input.useHandCursor = true;
        // this.cone_1.input.enableDrag();
        this.cone_1.events.onInputDown.add(function() {
            this.ck_arrow67.visible = false;
            this.ck_arrow68.visible = true;
            game.world.bringToTop(this.cone_1)
        }, this);
        this.cone_1.events.onInputUp.add(function() {

            if ((game.input.activePointer.x > 320 && game.input.activePointer.x < 450 && game.input.activePointer.y > 390 && game.input.activePointer.y < 615)) {
                this.ck_arrow68.visible = false;

                this.cone_1.inputEnabled = false;
                this.cone_1.loadTexture('cone_roler')
                this.stand_1.loadTexture('stand3')
                game.add.tween(this.cone_1).to({
                    x: 150,
                    y: 540
                }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                    game.add.tween(this.cone_1).to({
                        x: -250
                    }, 700, Phaser.Easing.Quadratic.Out, true);
                    game.add.tween(this.stand_1).to({
                        x: 650
                    }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                        game.add.tween(this.stand_2).to({
                            x: 380
                        }, 700, Phaser.Easing.Quadratic.Out, true);
                        game.add.tween(this.cone_2).to({
                            x: 150
                        }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                            this.cone_2.inputEnabled = true;
                            this.cone_2.input.useHandCursor = true;
                            this.cone_2.input.enableDrag();
                            this.ck_arrow69.visible = true;
                        }, this);
                    }, this);
                }, this);


            } else {
                this.ck_arrow67.visible = true;
                this.ck_arrow68.visible = false;

                game.add.tween(this.cone_1).to({
                    x: 150,
                    y: 540
                }, 700, Phaser.Easing.Quadratic.Out, true);
            }
        }, this);

        this.stand_1 = game.add.sprite(650, 480, 'stand1');
        this.stand_1.anchor.setTo(0.5);
        ////////////////////////////////////////////////////////////////////////

        this.cone_2 = game.add.sprite(-250, 540, 'cone3');
        this.cone_2.anchor.setTo(0.5);
        // this.cone_2.inputEnabled = true;
        // this.cone_2.input.useHandCursor = true;
        // this.cone_2.input.enableDrag();
        this.cone_2.events.onInputDown.add(function() {
            this.ck_arrow69.visible = false;
            this.ck_arrow70.visible = true;
            game.world.bringToTop(this.cone_2)
        }, this);
        this.cone_2.events.onInputUp.add(function() {

            if ((game.input.activePointer.x > 320 && game.input.activePointer.x < 450 && game.input.activePointer.y > 390 && game.input.activePointer.y < 615)) {
                this.ck_arrow70.visible = false;

                this.cone_2.inputEnabled = false;
                this.cone_2.loadTexture('cone_roler')
                this.stand_2.loadTexture('stand2')
                game.add.tween(this.cone_2).to({
                    x: 150,
                    y: 540
                }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                    game.add.tween(this.cone_2).to({
                        x: 150,
                        y: 540
                    }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                        game.add.tween(this.cone_2).to({
                            x: -250
                        }, 700, Phaser.Easing.Quadratic.Out, true);
                        game.add.tween(this.stand_2).to({
                            x: 650
                        }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                            game.add.tween(this.ice_gp).to({
                                x: 0
                            }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                                this.sp1.inputEnabled = true;
                                this.sp1.input.useHandCursor = true;
                                this.ck_arrow71.visible = true;
                            }, this);
                        }, this);
                    }, this);
                }, this);

            } else {
                this.ck_arrow70.visible = false;
                this.ck_arrow69.visible = true;

                game.add.tween(this.cone_2).to({
                    x: 150,
                    y: 540
                }, 700, Phaser.Easing.Quadratic.Out, true);
            }
        }, this);

        this.stand_2 = game.add.sprite(650, 480, 'stand1');
        this.stand_2.anchor.setTo(0.5);
        ////////////////////////////////////////////////////////////////////////

        this.ice_gp = game.add.group();
        this.f_s1 = game.add.sprite(100, 440, 'stand1');
        this.f_s1.anchor.setTo(0.5);

        this.f_c1cnt = 0;
        this.f_c1 = game.add.sprite(100, 420, 'f_cone3_1');
        this.f_c1.anchor.setTo(0.5);
        // this.f_c1.inputEnabled=true;
        // this.f_c1.input.useHandCursor=true;
        this.f_c1.events.onInputDown.add(function() {
            this.f_c1.inputEnabled = false;
            this.f_c1cnt++
                if (this.f_c1cnt == 1) {
                    this.ck_arrow73.visible = false;
                    this.ck_arrow74.visible = true;
                    this.f_c1.loadTexture('f_cone3_2');
                    this.f_c2.inputEnabled = true;
                    this.f_c2.input.useHandCursor = true;
                }
            if (this.f_c1cnt == 2) {
                this.ck_arrow77.visible = false;
                this.ck_arrow78.visible = true;
                this.f_c1.loadTexture('f_cone3_3');
                this.f_c2.inputEnabled = true;
                this.f_c2.input.useHandCursor = true;
            }
            if (this.f_c1cnt == 3) {
                this.ck_arrow81.visible = false;
                this.ck_arrow82.visible = true;
                this.f_c1.loadTexture('f_cone3_4');
                this.f_c2.inputEnabled = true;
                this.f_c2.input.useHandCursor = true;
            }
        }, this);

        this.fr1 = game.add.sprite(100, 440, 'stand5');
        this.fr1.anchor.setTo(0.5);


        this.f_s2 = game.add.sprite(250, 440, 'stand1');
        this.f_s2.anchor.setTo(0.5);

        this.f_c2cnt = 0;
        this.f_c2 = game.add.sprite(260, 425, 'f_cone2_1');
        this.f_c2.anchor.setTo(0.5);
        // this.f_c2.inputEnabled=true;
        // this.f_c2.input.useHandCursor=true;
        this.f_c2.events.onInputDown.add(function() {
            this.f_c2.inputEnabled = false;
            this.f_c2cnt++
                if (this.f_c2cnt == 1) {
                    this.ck_arrow74.visible = false;
                    this.ck_arrow75.visible = true;
                    this.f_c2.loadTexture('f_cone2_2');
                    this.f_c3.inputEnabled = true;
                    this.f_c3.input.useHandCursor = true;
                }
            if (this.f_c2cnt == 2) {
                this.ck_arrow78.visible = false;
                this.ck_arrow79.visible = true;
                this.f_c2.loadTexture('f_cone2_3');
                this.f_c3.inputEnabled = true;
                this.f_c3.input.useHandCursor = true;
            }
            if (this.f_c2cnt == 3) {
                this.ck_arrow82.visible = false;
                this.ck_arrow83.visible = true;
                this.f_c2.loadTexture('f_cone2_4');
                this.f_c3.inputEnabled = true;
                this.f_c3.input.useHandCursor = true;
            }
        }, this);

        this.fr2 = game.add.sprite(250, 440, 'stand6');
        this.fr2.anchor.setTo(0.5);



        this.f_s3 = game.add.sprite(380, 440, 'stand1');
        this.f_s3.anchor.setTo(0.5);

        this.f_c3cnt = 0;
        this.f_c3 = game.add.sprite(390, 425, 'f_cone1_1');
        this.f_c3.anchor.setTo(0.5);
        // this.f_c3.inputEnabled=true;
        // this.f_c3.input.useHandCursor=true;
        this.f_c3.events.onInputDown.add(function() {
            this.f_c3.inputEnabled = false;
            this.f_c3cnt++
                if (this.f_c3cnt == 1) {
                    this.ck_arrow75.visible = false;
                    this.ck_arrow76.visible = true;
                    this.f_c3.loadTexture('f_cone1_2');
                    this.sp1.loadTexture('spoon1');
                    this.cl_3.inputEnabled = true;
                    this.cl_3.input.useHandCursor = true;
                }
            if (this.f_c3cnt == 2) {
                this.ck_arrow79.visible = false;
                this.ck_arrow80.visible = true;
                this.f_c3.loadTexture('f_cone1_3');
                this.sp1.loadTexture('spoon1');
                this.cl_1.inputEnabled = true;
                this.cl_1.input.useHandCursor = true;
            }
            if (this.f_c3cnt == 3) {
                this.ck_arrow83.visible = false;
                this.f_c3.loadTexture('f_cone1_4');
                this.sp1.loadTexture('spoon1');
                this.sdrag = false;
                game.add.tween(this.sp1).to({
                    x: 370,
                    y: 700
                }, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                    game.add.tween(this.playbtn.scale).to({
                        x: 1,
                        y: 1
                    }, 400, Phaser.Easing.Quadratic.Out, true, 500)

                }, this);

            }
        }, this);

        this.fr3 = game.add.sprite(380, 440, 'stand6');
        this.fr3.anchor.setTo(0.5);


        this.cl_1 = game.add.sprite(100, 640, 'clr_bowl3');
        this.cl_1.anchor.setTo(0.5);
        // this.cl_1.inputEnabled=true;
        // this.cl_1.input.useHandCursor=true;
        this.cl_1.events.onInputDown.add(function() {
            this.ck_arrow80.visible = false;
            this.ck_arrow81.visible = true;
            this.cl_1.inputEnabled = false;
            this.sp1.loadTexture('spoon4');
            this.f_c1.inputEnabled = true;
            this.f_c1.input.useHandCursor = true;
        }, this);

        this.cl_2 = game.add.sprite(250, 640, 'clr_bowl2');
        this.cl_2.anchor.setTo(0.5);
        // this.cl_2.inputEnabled=true;
        // this.cl_2.input.useHandCursor=true;
        this.cl_2.events.onInputDown.add(function() {
            this.ck_arrow72.visible = false;
            this.ck_arrow73.visible = true;
            this.cl_2.inputEnabled = false;
            this.sp1.loadTexture('spoon3');
            this.f_c1.inputEnabled = true;
            this.f_c1.input.useHandCursor = true;
        }, this);


        this.cl_3 = game.add.sprite(400, 640, 'clr_bowl4');
        this.cl_3.anchor.setTo(0.5);
        // this.cl_3.inputEnabled=true;
        // this.cl_3.input.useHandCursor=true;
        this.cl_3.events.onInputDown.add(function() {
            this.ck_arrow76.visible = false;
            this.ck_arrow77.visible = true;
            this.cl_3.inputEnabled = false;
            this.sp1.loadTexture('spoon5');
            this.f_c1.inputEnabled = true;
            this.f_c1.input.useHandCursor = true;
        }, this);

        this.sp1 = game.add.sprite(370, 700, 'spoon1');
        this.sp1.anchor.setTo(0.5);
        // this.sp1.inputEnabled=true;
        // this.sp1.input.useHandCursor=true;
        this.sp1.events.onInputDown.add(function() {
            this.ck_arrow71.visible = false;
            this.ck_arrow72.visible = true;
            this.sp1.inputEnabled = false;
            this.sdrag = true;
            this.cl_2.inputEnabled = true;
            this.cl_2.input.useHandCursor = true;
        }, this);

        this.ice_gp.add(this.f_s1);
        this.ice_gp.add(this.f_c1);
        this.ice_gp.add(this.fr1);
        this.ice_gp.add(this.f_s2);
        this.ice_gp.add(this.f_c2);
        this.ice_gp.add(this.fr2);
        this.ice_gp.add(this.f_s3);
        this.ice_gp.add(this.f_c3);
        this.ice_gp.add(this.fr3);
        this.ice_gp.add(this.cl_1);
        this.ice_gp.add(this.cl_2);
        this.ice_gp.add(this.cl_3);
        this.ice_gp.add(this.sp1);

        this.ice_gp.x = 500;




        ////////////////////////////////////////////////////////////////////////

        // this.flour.visible=false;
        // this.sugar.visible=false;
        // this.cream.visible=false;
        // this.ani_bowl1.visible=false;
        // this.front.visible=false;

        ////////////////////////////////////////////////////////////////////////

        // this.mcnt1=0;
        // this.mcir = game.add.graphics(0,0);
        // this.mcir.beginFill(0x666666,0);
        // this.mcir.drawRect(0,0,504,800);
        // this.mcir.inputEnabled=true;
        // this.mcir.events.onInputDown.add(function(){
        // this.mcnt1++;
        // this['xcnt'+this.mcnt1]=game.input.activePointer.x;
        // this['ycnt'+this.mcnt1]=game.input.activePointer.y;
        // this.mcir = game.add.graphics(game.input.activePointer.x,game.input.activePointer.y);
        // this.mcir.beginFill(0x000000,0.5);
        // this.mcir.drawCircle(0,0,10);
        // console.log(this['xcnt'+this.mcnt1]+':'+this['ycnt'+this.mcnt1]);
        // //console.log(this['ycnt'+this.mcnt1]);
        // },this);

        // this.arrow = game.add.sprite(258,287,'arrow');
        // this.arrow.anchor.setTo(0.5);
        // // this.arrow.alpha=0.4;
        // // this.arrow.rotation=0.5;
        // this.arrowdrag=true;


        ////////////////////////////////////////////////////////////////////////


        this.arrowgp = game.add.group();

        var arro2x = [422, 250, 255, 250, 105, 250, 105, 250, 358, 250, 250, 377, 255, 255, 255, 422, 255, 110, 255, 255,
            255, 405, 248, 264, 351, 410, 422, 252, 250, 252, 347, 252, 427, 252, 100, 252, 235, 252, 322, 252, 422, 252, 150, 355,
            351, 355, 160, 125, 365, 400, 205, 170, 222, 166, 290, 400, 166, 290, 260, 245, 85, 85, 430, 390, 125, 385, 125, 385,
            125, 385, 350, 255, 100, 265, 390, 400, 100, 265, 390, 105, 100, 265, 390,
        ];

        var arro2y = [460, 430, 505, 430, 504, 430, 505, 430, 495, 430, 310, 518, 380, 380, 380, 460, 380, 545, 380, 545,
            380, 550, 488, 445, 490, 450, 460, 408, 500, 408, 506, 408, 506, 408, 459, 408, 509, 408, 517, 408, 460, 408, 450, 555,
            630, 555, 575, 455, 535, 485, 560, 380, 575, 460, 510, 570, 460, 510, 585, 495, 475, 590, 477, 570, 390, 400, 390, 400,
            390, 400, 650, 570, 310, 310, 310, 560, 310, 310, 310, 565, 310, 310, 310,
        ];

        for (i = 1; i <= 100; i++) {


            this['ck_arrow' + i] = game.add.sprite(arro2x[i - 1], arro2y[i - 1], 'arrow');
            this['ck_arrow' + i].anchor.setTo(0.5);
            this['ck_arrow' + i].animations.add('ck_arrow');
            this['ck_arrow' + i].animations.play('ck_arrow', 30, true);
            this['ck_arrow' + i].visible = false;
            if (i == 71) {
                this['ck_arrow' + i].visible = false;
            }

            this.arrowgp.add(this['ck_arrow' + i]);

        }
        ////////////////////////////////////////////////////////////////////////

        this.morebtn = game.add.sprite(85, 730, 'morebtn');
        this.morebtn.anchor.setTo(0.5);
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

                this.ck_arrow1.visible = true;
                this.flour.inputEnabled = true;
                this.flour.input.useHandCursor = true;
                this.flour.input.enableDrag();


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
        // console.log(game.input.activePointer.x+':'+game.input.activePointer.y);
        if (this.arrowdrag) {
            this.arrow.x = game.input.activePointer.x;
            this.arrow.y = game.input.activePointer.y;
        }

        if (this.oven_drag) {
            this.oven1.x = game.input.activePointer.x;
            this.oven1.y = game.input.activePointer.y;
        }

        if (this.spoon_drag) {
            this.spoon1.x = game.input.activePointer.x + 30;
            this.spoon1.y = game.input.activePointer.y - 10;
        }

        if (this.sdrag) {
            this.sp1.x = game.input.activePointer.x + 30;
            this.sp1.y = game.input.activePointer.y - 10;
        }

        if (this.spdrag) {
            this.f_spoon1.x = game.input.activePointer.x + 40;
            this.f_spoon1.y = game.input.activePointer.y - 45;
        }
    },
    openLink: function() {
        CreateLinksInGame("Baby-Taylor-Helping-Time", "game", "logo");
    },
    moreLink: function() {
        CreateLinksInGame("Baby-Taylor-Helping-Time", "game", "more");
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
        CreateLinksInGame("Baby-Taylor-Helping-Time", "game", "logo");
    },
    moreLink: function() {
        CreateLinksInGame("Baby-Taylor-Helping-Time", "game", "more");
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

// ffffffffff

Main.final_screen = function() {}

Main.final_screen.prototype = {
    create: function() {
        this.levelGroup = game.add.group();
        this.introbg = game.add.sprite(0, 0, 'p_bg');
        this.levelGroup.add(this.introbg);


        this.dad1 = game.add.sprite(130, 430, 'dad1');
        this.dad1.anchor.setTo(0.5);
        this.dad1.scale.setTo(0.9);

        this.mom = game.add.sprite(420, 430, 'mom');
        this.mom.anchor.setTo(0.5);
        this.mom.scale.setTo(0.9);

        this.baby1 = game.add.sprite(270, 550, 'baby1');
        this.baby1.anchor.setTo(0.5);
        this.baby1.scale.setTo(0.85);

        this.pop1 = game.add.sprite(270, 150, 'd_pop3');
        this.pop1.anchor.setTo(0.5);
        this.pop1.scale.setTo(0);

        this.pop2 = game.add.sprite(240, 120, 'm_pop3');
        this.pop2.anchor.setTo(0.5);
        this.pop2.scale.setTo(0);

        this.pop3 = game.add.sprite(130, 350, 'b_pop6');
        this.pop3.anchor.setTo(0.5);
        this.pop3.scale.setTo(0);


        this.morebtn = game.add.sprite(85, 730, 'morebtn');
        this.morebtn.anchor.setTo(0.5);
        // this.morebtn.scale.setTo(0);
        this.morebtn.inputEnabled = true;
        this.morebtn.input.useHandCursor = true;
        this.morebtn.events.onInputUp.add(this.moreLink, this);
        this.morebtn.events.onInputOver.add(this.btnOver, this);
        this.morebtn.events.onInputOut.add(this.btnOut, this);

        this.playbtn = game.add.sprite(430, 730, 'restebtn');
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
        this.thumbVar.inputEnabled = true;
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
                game.add.tween(this.pop1.scale).to({
                    x: 1,
                    y: 1
                }, 800, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                    game.add.tween(this.pop1.scale).to({
                        x: 0,
                        y: 0
                    }, 800, Phaser.Easing.Quadratic.Out, true, 3000).onComplete.add(function() {
                        game.add.tween(this.pop2.scale).to({
                            x: 0.85,
                            y: 0.85
                        }, 800, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                            game.add.tween(this.pop2.scale).to({
                                x: 0,
                                y: 0
                            }, 800, Phaser.Easing.Quadratic.Out, true, 4200).onComplete.add(function() {
                                game.add.tween(this.pop3.scale).to({
                                    x: 1,
                                    y: 1
                                }, 800, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                                    game.add.tween(this.pop3.scale).to({
                                        x: 0,
                                        y: 0
                                    }, 800, Phaser.Easing.Quadratic.Out, true, 2500).onComplete.add(function() {
                                        //game.add.tween(this.thumbGroup).to({y:0},700,Phaser.Easing.Quadratic.Out,true);
                                        game.add.tween(this.playbtn.scale).to({
                                            x: 1,
                                            y: 1
                                        }, 700, Phaser.Easing.Quadratic.Out, true);
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
        CreateLinksInGame("Baby-Taylor-Helping-Time", "gameover", "thumb", RelatedGames[this.randomId]['id']);
    },
    openLink: function() {
        CreateLinksInGame("Baby-Taylor-Helping-Time", "gameover", "logo");
    },
    moreLink: function() {
        CreateLinksInGame("Baby-Taylor-Helping-Time", "gameover", "more");
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
            Main.car_array = [1];
            game.state.start('packing');
        });

    },
}






game.state.add('boot', Main.boot);
game.state.add('preloader', Main.preloader);
game.state.add('title', Main.title);
game.state.add('intro', Main.intro);
game.state.add('packing', Main.packing);
game.state.add('iron_pop', Main.iron_pop);
game.state.add('car_wash', Main.car_wash);
game.state.add('cleaning_scene', Main.cleaning_scene);
game.state.add('ice_pop', Main.ice_pop);
game.state.add('cook_scene', Main.cook_scene);
game.state.add('icecream_pop', Main.icecream_pop);
game.state.add('final_screen', Main.final_screen);

game.state.start('boot');