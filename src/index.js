import Phaser from "phaser";
import {MainScene} from "./scene/MainScene";

const config = {
    type: Phaser.AUTO,
    width: 468,
    height: 270,
    pixelArt: true,
    zoom: 1.0,
    scene: MainScene,
    physics: {
        default: 'arcade',
        arcade: {
            debug: false,
            gravity: {
                y: 0,
            }
        }
    },
};

const game = new Phaser.Game(config);