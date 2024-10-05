let config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: 0x00000f,
    parent: "canvas-container",
    scene : [
      BootScene, LevelZero
    ],
    physics: {
      default: "arcade",
      arcade: {
        gravity: { y: 0 }
      }
    },
    sound: {
      disableWebAudio: true
    }
  };
  
  new Phaser.Game(config);