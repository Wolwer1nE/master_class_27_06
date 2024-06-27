import CharactersSprite from "../../assets/sprites/characters.png"
class MainScene extends Phaser.Scene{
    constructor() {
        super("MainScene");
    }

    init(){

    }

    preload(){
        this.load.spritesheet('characters',
            CharactersSprite,
            { frameWidth: 24, frameHeight: 24, spacing: 1 });
    }

    create(){
        this.anims.create({
            key: 'green',
            frames: this.anims.generateFrameNumbers('characters', { frames: [ 0, 1] }),
            frameRate: 8,
            repeat: -1
        });

        this.anims.create({
            key: 'blue',
            frames: this.anims.generateFrameNumbers('characters', { frames: [ 2, 3] }),
            frameRate: 8,
            repeat: -1
        });

        const player = this.physics.add.sprite(200,200 , null, null);
        player.play('green');
    }

    update(time, delta){

    }
}

export {MainScene}