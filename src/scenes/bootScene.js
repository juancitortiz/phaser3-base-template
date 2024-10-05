class BootScene extends Phaser.Scene {
    constructor() {
      super("bootScene");
    }
  
    preload() {
        // It needs to load something or it will not load the next scene.
        this.load.setBaseURL('https://labs.phaser.io');
        this.load.image('logo', 'assets/sprites/phaser3-logo.png');

        this.load.path = "./assets/";
    
        let loadingBar = this.add.graphics()
        .fillGradientStyle(0xffffff, 0xee9900, 0xffffff, 0xee9900, 1);
    
        this.load.on('progress', (percentaje) => {
            loadingBar.fillRect(0, this.game.config.height / 2, this.game.config.width * percentaje, 50);
        })
    
        this.load.on('complete', () => {
            console.log("cargo!");
            this.scene.start("level0");
        })
    }
    
    create(){}
  }