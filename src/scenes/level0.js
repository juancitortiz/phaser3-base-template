class LevelZero extends Phaser.Scene { 
    constructor() {
      super('level0');
    }
  
    preload() {
        this.value = 0;
    }
    create() {
        console.log("level0!");
        this.add.text(100,100,"Level0 loaded");
        this.value = 50;
    }
    
  }