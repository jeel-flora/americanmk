/**
 * @author Mat Groves http://matgroves.com/ @Doormat23
 */

/**
 * This turns your displayObjects to grayscale.
 * @class Gray
 * @contructor
 */
Phaser.Filter.Gray = function(game) {

    Phaser.Filter.call(this, game);

    this.uniforms.gray = {
        type: '1f',
        value: 1.0
    };
    this.hexColor = 0xff00ff;
    this.uniforms.rgbColor = {
        type: '3fv',
        value: [0, 1, 0]
    }


    this.fragmentSrc = [

        "precision mediump float;",

        "varying vec2       vTextureCoord;",
        "varying vec4       vColor;",
        "uniform sampler2D  uSampler;",
        "uniform float      gray;",
        "uniform vec3       rgbColor;",

        "void main(void) {",
        "gl_FragColor = texture2D(uSampler, vTextureCoord);",
        "gl_FragColor.r = rgbColor.r * gl_FragColor.a;",
        "gl_FragColor.g = rgbColor.g * gl_FragColor.a;",
        "gl_FragColor.b = rgbColor.b * gl_FragColor.a;",

        "}"
    ];

};

Phaser.Filter.Gray.prototype = Object.create(Phaser.Filter.prototype);
Phaser.Filter.Gray.prototype.constructor = Phaser.Filter.Gray;

/**
 * The strength of the gray. 1 will make the object black and white, 0 will make the object its normal color
 * @property gray
 */
Object.defineProperty(Phaser.Filter.Gray.prototype, 'gray', {

    get: function() {
        return this.uniforms.gray.value;
    },

    set: function(value) {
        this.uniforms.gray.value = value;
    }

});

Object.defineProperties(Phaser.Filter.Gray.prototype, {
    rgbColor: {
        get: function() {
            return this.uniforms.rgbColor;
        },
        set: function(value) {
            this.uniforms.rgbColor = value;
        }
    },

    hexColor: {
        get: function() {
            return PIXI.utils.rgbColor(this.uniforms.rgbColor);
        },
        set: function(value) {
            this.uniforms.rgbColor = {
                type: '3fv',
                value: Phaser.Color.hexToRGBArray(value)
            }

        }
    },
});