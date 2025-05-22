import { Scene } from 'phaser';

export class Game extends Scene {
    camera: Phaser.Cameras.Scene2D.Camera;
    background: Phaser.GameObjects.Image;
    msg_text: Phaser.GameObjects.Text;
    fire_button: Phaser.GameObjects.Image;
    joystick_pad: Phaser.GameObjects.Image;
    joystick_pulp: Phaser.GameObjects.Image;

    constructor() {
        super('Level1');
    }

    create() {
        this.add.image(360, 640, 'background');
        this.add.image(360, 640, 'rocket');
        this.fire_button = this.add.image(600, 1150, 'fire_button');
        this.fire_button.setOrigin(0.5);
        this.joystick_pad = this.add.image(120, 1150, 'joystick_pad');
        this.joystick_pad.setOrigin(0.5);
        this.joystick_pulp = this.add.image(120, 1150, 'joystick_pulp');
        this.joystick_pulp.setOrigin(0.5);
    }
}
