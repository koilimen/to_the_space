import { Scene, GameObjects } from 'phaser';

export class MainMenu extends Scene {
    background: GameObjects.Image;
    logo: GameObjects.Image;
    title: GameObjects.Text;
    main_menu_alien_popup: GameObjects.Sprite;

    constructor() {
        super('MainMenu');
    }

    create() {
        this.background = this.add.image(360, 640, 'background');
        this.logo = this.add.image(360, 800, 'play_btn');

        this.main_menu_alien_popup = this.add.sprite(620, 1180, "main_menu_alien_popup")
        this.anims.create({
            key: 'alien_popup',
            frames: this.anims.generateFrameNumbers('main_menu_alien_popup', { start: 0, end: 11 }),
            frameRate: 24,
            repeat: 0
        });
        this.anims.create({
            key: 'alien_blink',
            frames: this.anims.generateFrameNumbers('main_menu_alien_blink', { start: 0, end: 42 }),
            frameRate: 24,
            repeat: -1,
            repeatDelay: 2000
        })
        setTimeout(() => {
            this.main_menu_alien_popup.anims.play('alien_popup');
            setTimeout( () => {
                this.main_menu_alien_popup.anims.play('alien_blink');
            }, 2000)

        }, 1000)
    }
}
