// [scene:scene_A]
class scene_A extends Phaser.Scene {
  constructor() {
    super({ key: 'scene_A' });
  }


  init() {
    // [start-init]

    // [end-init]
  }

  preload() {
    // [start-preload]
    this.load.image('phaser', 'phaser.png');
    this.load.image('space', 'space.png');
    this.load.spritesheet('spritesheet_spaceship', 'spaceship.png', { frameWidth: 176, frameHeight: 96, margin: 0, spacing: 0 });
    this.load.audio('audio_background', 'space bg loop 1 mono 128kps 44khz 6s.mp3');
    this.load.audio('audio_flyoff', 'rocket-launch fly-off mono 8khz 1s.mp3');

    // [end-preload]
  }

  create() {
    // [start-create]
    this.cameras.main.setBackgroundColor('#0c34ac');

    this.phaser = this.add.image(883, 391, 'phaser');
    this.phaser.setName('phaser');
    this.phaser.setAlpha(1);
    this.phaser.setDepth(0);
    this.phaser.setScale(1, 1);
    this.phaser.setAngle(0);
    this.phaser.setVisible(true);
    this.phaser.setBlendMode(0);
    this.phaser.setScrollFactor(1, 1);
    this.phaser.setInteractive();
    this.phaser.setOrigin(0.5, 0.5);
    this.phaser.setFlipX(false);
    this.phaser.setFlipY(false);

    this.phaser_keolot = this.add.text(408, 948, 'Phaser.io + Keolot editor + VSCode+ai\n', {
    "fontFamily": "Arial, Helvetica, sans-serif",
    "fontSize": "60px",
    "color": "#d5d73c",
    "backgroundColor": "#00000000",
    "stroke": "#ffffff",
    "strokeThickness": 0,
    "align": "left",
    "resolution": 1,
    "padding": {
        "x": 0,
        "y": 0
    },
    "shadow": {
        "color": "#000000",
        "blur": 5,
        "offsetX": 5,
        "offsetY": 5,
        "fill": false
    }
});
    this.phaser_keolot.setName('phaser_keolot');
    this.phaser_keolot.setAlpha(1);
    this.phaser_keolot.setDepth(0);
    this.phaser_keolot.setScale(1, 1);
    this.phaser_keolot.setAngle(0);
    this.phaser_keolot.setVisible(true);
    this.phaser_keolot.setBlendMode(0);
    this.phaser_keolot.setScrollFactor(1, 1);
    this.phaser_keolot.setInteractive();
    this.phaser_keolot.setOrigin(0, 0);
    this.phaser_keolot.setFlipX(false);
    this.phaser_keolot.setFlipY(false);

    this.text_6ULoO67I = this.add.text(490, 546, '- Click logo to start.\n- Arrow up-down: zoom in-out on spaceship.\n- Right arrow: hold to fly-off, release to stop.\n- Left arrow: spawn spaceship (max 30, 15s fly-off).\n', {
    "fontFamily": "Arial, Helvetica, sans-serif",
    "fontSize": "40px",
    "color": "#bec837",
    "backgroundColor": "#00000000",
    "stroke": "#ffffff",
    "strokeThickness": 0,
    "align": "left",
    "resolution": 1,
    "padding": {
        "x": 0,
        "y": 0
    },
    "shadow": {
        "color": "#000000",
        "blur": 5,
        "offsetX": 5,
        "offsetY": 5,
        "fill": false
    }
});
    this.text_6ULoO67I.setName('text_6ULoO67I');
    this.text_6ULoO67I.setAlpha(1);
    this.text_6ULoO67I.setDepth(0);
    this.text_6ULoO67I.setScale(1, 1);
    this.text_6ULoO67I.setAngle(0);
    this.text_6ULoO67I.setVisible(true);
    this.text_6ULoO67I.setBlendMode(0);
    this.text_6ULoO67I.setScrollFactor(1, 1);
    this.text_6ULoO67I.setInteractive();
    this.text_6ULoO67I.setOrigin(0, 0);
    this.text_6ULoO67I.setFlipX(false);
    this.text_6ULoO67I.setFlipY(false);
// create script for scene_A

this.phaser.on('pointerup', (pointer) => {
    this.scene.start('scene_B');
});

    // Play looping background music (attempt immediately; if blocked, resume on first user gesture)
    this.bgMusic = this.sound.add('audio_background', { loop: true, volume: 1.0 });
    try {
      this.bgMusic.play();
    } catch (e) {
      // some browsers block autoplay until user interaction; we'll resume on first pointerdown
    }

    if (this.sound && this.sound.context && this.sound.context.state === 'suspended') {
      this.input.once('pointerdown', () => {
        this.sound.context.resume().then(() => {
          if (this.bgMusic && !this.bgMusic.isPlaying) {
            this.bgMusic.play();
          }
        }).catch(() => {
          if (this.bgMusic && !this.bgMusic.isPlaying) {
            this.bgMusic.play();
          }
        });
      });
    }




    // [end-create]
  }

  update(time, delta) {
    // [start-update]

    // [end-update]
  }
}
// [end-scene]

// [scene:scene_B]
class scene_B extends Phaser.Scene {
  constructor() {
    super({ key: 'scene_B' });
  }


  init() {
    // [start-init]

    // [end-init]
  }

  preload() {
    // [start-preload]

    // [end-preload]
  }

  create() {
    // [start-create]
    this.cameras.main.setBackgroundColor('#636018');
    if (!this.anims.exists('shipFly')) {
        this.anims.create({
            key: 'shipFly',
            frames: this.anims.generateFrameNumbers('spritesheet_spaceship', {
                start: 0,
                end: 2
            }),
            frameRate: 15,
            repeat: -1,
            delay: 0,
            repeatDelay: 0,
            yoyo: false
        });
    }

    this.UP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
    this.DOWN = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
    this.RIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
    this.LEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
    this.SPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

    this.sprite_spaceship = this.matter.add.sprite(889, 496, 'spritesheet_spaceship', null, {
    "isStatic": false,
    "friction": 0.1,
    "restitution": 0,
    "frictionStatic": 0.5,
    "density": 0.001,
    "isSensor": false,
    "slop": 0.05,
    "ignoreGravity": true,
    "frictionAir": 0.01,
    "damping": 0,
    "angularDamping": 0,
    "sleepThreshold": 60,
    "shape": {
        "type": "rectangle",
        "width": 32,
        "height": 32,
        "radius": 16,
        "sides": 5,
        "slope": 0.5,
        "verts": []
    },
    "collisionFilter": {
        "group": 0,
        "category": 1,
        "mask": 4294967295
    }
} );
    this.sprite_spaceship.setName('sprite_spaceship');
    this.sprite_spaceship.setAlpha(1);
    this.sprite_spaceship.setDepth(1);
    this.sprite_spaceship.setScale(1, 1);
    this.sprite_spaceship.setAngle(0);
    this.sprite_spaceship.setVisible(true);
    this.sprite_spaceship.setBlendMode(0);
    this.sprite_spaceship.setScrollFactor(1, 1);
    this.sprite_spaceship.setInteractive();
    this.sprite_spaceship.setOrigin(0.5, 0.5);
    this.sprite_spaceship.setFlipX(false);
    this.sprite_spaceship.setFlipY(false);

    this.tileSprite_space = this.add.tileSprite(960, 550, 1280, 720, 'space');
    this.tileSprite_space.setName('tileSprite_space');
    this.tileSprite_space.setAlpha(1);
    this.tileSprite_space.setDepth(0);
    this.tileSprite_space.setScale(1.5, 1.5);
    this.tileSprite_space.setAngle(0);
    this.tileSprite_space.setVisible(true);
    this.tileSprite_space.setBlendMode(0);
    this.tileSprite_space.setScrollFactor(1, 1);
    this.tileSprite_space.setInteractive();
    this.tileSprite_space.setOrigin(0.5, 0.5);
    this.tileSprite_space.setFlipX(false);
    this.tileSprite_space.setFlipY(false);
    this.tileSprite_space.tilePositionX = 0;
    this.tileSprite_space.tilePositionY = 0;
    this.tileSprite_space.tileScaleX = 1;
    this.tileSprite_space.tileScaleY = 1;
// create script for scene_B

  // setup fly-off sound (play while RIGHT arrow held; do not loop)
    this.flyoffSound = this.sound.add('audio_flyoff', { loop: false, volume: 1.0 });

// Spawned non-physics copies tracking
this._spawnedCopies = [];
this._maxSpawnedCopies = 30;


// spaceship acceleration state
this._spaceshipAccelerating = false;
this._spaceshipSpeed = 0; // px/s
this._spaceshipMaxSpeed = 600; // px/s (tunable) -- reduced to half for slower fly-off
this._spaceshipAccel = 600; // px/s^2 (tunable)
this._spaceshipDecel = 800; // px/s^2 when key released (tunable)
// exit speed to match spawned copies (px/sec). Spawned copies use `400 * 5`.
this._spaceshipExitSpeed = 400 * 5;
// When true the main spaceship is in a one-way fly-off state and should
// continue moving right until off-screen (but not be destroyed).
this._spaceshipFlyingOff = false;

this.sprite_spaceship.play("shipFly");

this.tweens.add({
    targets: this.sprite_spaceship,
    y: 400,
    duration: 1500,
    ease: 'Sine.inOut',
    yoyo: true,
    loop: -1
});

/*
this.tween_O7vWLy4J = this.tweens.add({
    targets: this.sprite_spaceship,
    scale: 2,     
    alpha: 0.5, 
    duration: 1500,
    ease: 'Sine.easeInOut',
    yoyo: true,
	delay: 0,
    repeat: -1,
	paused: false,
    onStart: () => {
    },
    onComplete: () => {
    },
    onUpdate: function(tween) {
    }
});
*/



this.UP.on('up', () => {
  // offline code from vs-code ai chat
  // listener for arrow-up keypress
  // increase sprite_spaceship x,y scales 10% (animated tween)
  if (this.sprite_spaceship) {
    const targetScaleX = this.sprite_spaceship.scaleX * 1.1;
    const targetScaleY = this.sprite_spaceship.scaleY * 1.1;
    this.tweens.add({
      targets: this.sprite_spaceship,
      scaleX: targetScaleX,
      scaleY: targetScaleY,
      duration: 200,
      ease: 'Sine.inOut'
    });
  }
 });


this.DOWN.on('up', () => {
  // offline code from vs-code ai chat
  // listener for arrow-down keypress
  // decrease sprite_spaceship x,y scales 10% (animated tween)
  if (this.sprite_spaceship) {
    const targetScaleX = this.sprite_spaceship.scaleX * 0.9;
    const targetScaleY = this.sprite_spaceship.scaleY * 0.9;
    this.tweens.add({
      targets: this.sprite_spaceship,
      scaleX: targetScaleX,
      scaleY: targetScaleY,
      duration: 200,
      ease: 'Sine.inOut'
    });
  }
});


// Start accelerating when key is pressed, stop ramping when released
this.RIGHT.on('down', () => {
  if (!this.sprite_spaceship) { return; }
  // If ship already left screen, ignore
  const rightEdge = this.scale.width + (this.sprite_spaceship.displayWidth || 0) / 2;
  if (this.sprite_spaceship.x > rightEdge) { return; }
  // Enter one-way fly-off mode: ship should continue moving right without stopping.
  this._spaceshipFlyingOff = true;
  // Stop any physics velocity so tween controls movement cleanly
  if (this.sprite_spaceship && this.sprite_spaceship.body) {
    this.sprite_spaceship.setVelocityX(0);
  }
  // Compute the destination and duration using the same logic as spawned copies
  const endX = this.scale.width + (this.sprite_spaceship.displayWidth || 0) / 2 + 50;
  const speed = this._spaceshipExitSpeed; // px/sec
  const distance = Math.max(0, endX - this.sprite_spaceship.x);
  const duration = Math.max(200, Math.round((distance / speed) * 1000));
  // Tween a small object and update the Matter sprite position on each frame
  const tweenObj = { x: this.sprite_spaceship.x };
  this._spaceshipExitTween = this.tweens.add({
    targets: tweenObj,
    x: endX,
    duration: duration,
    ease: 'Linear',
    onUpdate: () => {
      if (this.sprite_spaceship && this.sprite_spaceship.body) {
        this.sprite_spaceship.setPosition(tweenObj.x, this.sprite_spaceship.y);
      } else if (this.sprite_spaceship) {
        this.sprite_spaceship.x = tweenObj.x;
      }
    },
    onComplete: () => {
      // Do not destroy the sprite; leave it off-screen. Clear the flying flag so
      // other logic can run if needed (the x check prevents retriggering).
      this._spaceshipFlyingOff = false;
    }
  });
  // Play the fly-off sound as a one-shot (do not loop). Ensure audio context resumed.
  try {
    if (this.sound && this.sound.context && this.sound.context.state === 'suspended') {
      this.sound.context.resume().then(() => {
        this.sound.play('audio_flyoff', { loop: false, volume: 1.0 });
      }).catch(() => {
        this.sound.play('audio_flyoff', { loop: false, volume: 1.0 });
      });
    } else {
      this.sound.play('audio_flyoff', { loop: false, volume: 1.0 });
    }
  } catch (e) {
    // ignore audio playback errors
  }
  // Tween will handle movement; no immediate physics velocity needed.
});

this.RIGHT.on('up', () => {
  // stop increasing speed when key released
  this._spaceshipAccelerating = false;
  // Do not stop the one-shot fly-off sound here. If the ship is in
  // `_spaceshipFlyingOff` mode it will continue to the right without stopping.
});


// on each press of left-arrow, spawn a non-physics sprite copy that flies in from the left
this.LEFT.on('down', () => {
  if (!this.sprite_spaceship) { return; }
  // play fly-off sound immediately as a one-shot
  try {
    if (this.sound && this.sound.context && this.sound.context.state === 'suspended') {
      this.sound.context.resume().then(() => {
        this.sound.play('audio_flyoff', { loop: false, volume: 1.0 });
      }).catch(() => {
        this.sound.play('audio_flyoff', { loop: false, volume: 1.0 });
      });
    } else {
      this.sound.play('audio_flyoff', { loop: false, volume: 1.0 });
    }
  } catch (e) {
    // ignore audio playback errors
  }
  // enforce maximum of spawned copies
  if (this._spawnedCopies.length >= this._maxSpawnedCopies) {
    return;
  }
  // pick a final destination somewhere on-screen (with some padding)
  const finalX = Phaser.Math.Between(50, Math.max(50, this.scale.width - 50));
  const finalY = Phaser.Math.Between(50, Math.max(50, this.scale.height - 50));
  // start off-screen to the left
  const startX = -100;
  // create a non-physics sprite (no Matter body) using the same spritesheet key
  const copy = this.add.sprite(startX, finalY, 'spritesheet_spaceship', 0);
  copy.setScale(1, 1);
  copy.setOrigin(0.5, 0.5);
  copy.setVisible(true);
  copy.setFlipX(false);
  copy.setFlipY(false);
  // name for debugging
  copy.setName('spawned_spaceship_' + this._spawnedCopies.length);
  // play the same flying animation if available
  if (this.anims.exists('shipFly')) {
    copy.play('shipFly');
  }
  this._spawnedCopies.push(copy);

  // Tween the copy into its final position from the left
  const entryDistance = Math.abs(finalX - startX);
  const entrySpeed = 600; // px/sec
  const entryDuration = Math.max(250, Math.round((entryDistance / entrySpeed) * 1000));
  copy._entryTween = this.tweens.add({
    targets: copy,
    x: finalX,
    duration: entryDuration,
    ease: 'Quad.easeOut'
  });

  // After 20 seconds, start moving the copy off to the right and destroy when off-screen
  const delayMs = 20000; // 20 seconds
  copy._exitTimer = this.time.delayedCall(delayMs, () => {
    // play fly-off sound for this spawned copy (non-loop)
    try {
      if (this.sound && this.sound.context && this.sound.context.state === 'suspended') {
        this.sound.context.resume().then(() => {
          this.sound.play('audio_flyoff', { loop: false, volume: 1.0 });
        }).catch(() => {
          this.sound.play('audio_flyoff', { loop: false, volume: 1.0 });
        });
      } else {
        this.sound.play('audio_flyoff', { loop: false, volume: 1.0 });
      }
    } catch (e) {
      // ignore audio playback errors
    }
    // compute destination X just past the right edge
    const endX = this.scale.width + (copy.displayWidth || 0) / 2 + 50;
    // choose a speed (px/sec) for the exit movement
    const speed = 400 * 5; // px per second (5x faster)
    const distance = Math.max(0, endX - copy.x);
    const duration = Math.max(200, Math.round((distance / speed) * 1000));
    // create tween to move copy to endX, then destroy and cleanup
    copy._exitTween = this.tweens.add({
      targets: copy,
      x: endX,
      duration: duration,
      ease: 'Linear',
      onComplete: () => {
        // remove from tracking array
        const idx = this._spawnedCopies.indexOf(copy);
        if (idx !== -1) {
          this._spawnedCopies.splice(idx, 1);
        }
        // destroy sprite
        if (copy && copy.destroy) {
          copy.destroy();
        }
      }
    });
  }, [], this);
});


this.SPACE.on('up', () => {
  // If the main spaceship is not currently on-screen, play the fly-off
  // sound once and tween the ship in from the left to the center of the screen.
  if (!this.sprite_spaceship) { return; }
  const shipHalfW = (this.sprite_spaceship.displayWidth || 100) / 2;
  const offLeft = this.sprite_spaceship.x < -shipHalfW;
  const offRight = this.sprite_spaceship.x > this.scale.width + shipHalfW;
  const notVisible = !this.sprite_spaceship.visible;
  if (!(offLeft || offRight || notVisible)) {
    // ship appears to be on-screen — do nothing
    return;
  }
  // Play the fly-off sound as a one-shot and ensure audio context resumed
  try {
    if (this.sound && this.sound.context && this.sound.context.state === 'suspended') {
      this.sound.context.resume().then(() => {
        this.sound.play('audio_flyoff', { loop: false, volume: 1.0 });
      }).catch(() => {
        this.sound.play('audio_flyoff', { loop: false, volume: 1.0 });
      });
    } else {
      this.sound.play('audio_flyoff', { loop: false, volume: 1.0 });
    }
  } catch (e) {
    // ignore audio errors
  }

  // Determine start and target positions
  const startX = -(this.sprite_spaceship.displayWidth || 200);
  const centerX = Math.round(this.scale.width / 2);
  const centerY = Math.round(this.scale.height / 2);

  // Make the ship visible and place it off-screen left
  this.sprite_spaceship.setVisible(true);
  if (this._spaceshipEntryTween) {
    this._spaceshipEntryTween.stop();
    this._spaceshipEntryTween = null;
  }
  if (this.sprite_spaceship.body) {
    this.sprite_spaceship.setPosition(startX, centerY);
    this.sprite_spaceship.setVelocity(0, 0);
  } else {
    this.sprite_spaceship.x = startX;
    this.sprite_spaceship.y = centerY;
  }

  // Start flying animation if available
  if (this.anims.exists('shipFly')) {
    this.sprite_spaceship.play('shipFly');
  }

  // Tween a small object and update the Matter sprite position each frame
  const distance = Math.abs(centerX - startX);
  const speed = 600; // px/sec
  const duration = Math.max(250, Math.round((distance / speed) * 1000));
  const tweenObj = { x: startX };
  this._spaceshipEntryTween = this.tweens.add({
    targets: tweenObj,
    x: centerX,
    duration: duration,
    ease: 'Quad.easeOut',
    onUpdate: () => {
      if (this.sprite_spaceship && this.sprite_spaceship.body) {
        this.sprite_spaceship.setPosition(tweenObj.x, centerY);
      } else if (this.sprite_spaceship) {
        this.sprite_spaceship.x = tweenObj.x;
        this.sprite_spaceship.y = centerY;
      }
    },
    onComplete: () => {
      if (this.sprite_spaceship && this.sprite_spaceship.body) {
        this.sprite_spaceship.setPosition(centerX, centerY);
        this.sprite_spaceship.setVelocityX(0);
      } else if (this.sprite_spaceship) {
        this.sprite_spaceship.x = centerX;
        this.sprite_spaceship.y = centerY;
      }
      this._spaceshipEntryTween = null;
    }
  });
 });





    // [end-create]
  }

  update(time, delta) {
    // [start-update]
// update script for scene_B

this.tileSprite_space.tilePositionX += 2;

    // When using tween-based exit, the tween drives the ship off-screen.
    // No per-frame velocity enforcement is required here.
    // accelerate while right key held (only when not in the forced fly-off mode)
    if (!this._spaceshipFlyingOff && this._spaceshipAccelerating && this.sprite_spaceship && this.sprite_spaceship.body) {
      // delta is ms; convert to seconds
      const dt = delta / 1000;
      // increase speed
      this._spaceshipSpeed += this._spaceshipAccel * dt;
      if (this._spaceshipSpeed > this._spaceshipMaxSpeed) {
        this._spaceshipSpeed = this._spaceshipMaxSpeed;
      }
      this.sprite_spaceship.setVelocityX(this._spaceshipSpeed);
      // If the sprite has moved completely off the right edge, stop and hide
      const rightEdge = this.scale.width + (this.sprite_spaceship.displayWidth || 0) / 2;
      if (this.sprite_spaceship.x > rightEdge) {
        this.sprite_spaceship.setVelocityX(0);
        this.sprite_spaceship.setVisible(false);
        this._spaceshipAccelerating = false;
      }
    }

    // decelerate when not accelerating (natural slowdown)
    if (!this._spaceshipAccelerating && !this._spaceshipFlyingOff && this.sprite_spaceship && this.sprite_spaceship.body && this._spaceshipSpeed > 0) {
      const dt = delta / 1000;
      // reduce speed by decel * dt
      this._spaceshipSpeed -= this._spaceshipDecel * dt;
      if (this._spaceshipSpeed <= 0) {
        this._spaceshipSpeed = 0;
        this.sprite_spaceship.setVelocityX(0);
      } else {
        this.sprite_spaceship.setVelocityX(this._spaceshipSpeed);
      }
      // If the sprite has moved completely off the right edge while coasting, hide it
      const rightEdge = this.scale.width + (this.sprite_spaceship.displayWidth || 0) / 2;
      if (this.sprite_spaceship.x > rightEdge) {
        this.sprite_spaceship.setVelocityX(0);
        this.sprite_spaceship.setVisible(false);
        this._spaceshipSpeed = 0;
        this._spaceshipAccelerating = false;
      }
    }

 



    // [end-update]
  }
}
// [end-scene]

const config = {
    "type": 0,
    "backgroundColor": "#777777",
    "transparent": false,
    "antialias": true,
    "disableContextMenu": true,
    "scale": {
        "mode": 3,
        "autoCenter": 1,
        "width": 1920,
        "height": 1080
    },
    "input": {
        "keyboard": true,
        "mouse": true,
        "touch": true,
        "gamepad": false,
        "activePointers": 1
    },
    "audio": {
        "noAudio": false,
        "disableWebAudio": false
    },
    "pixelArt": false,
    "physics": {
        "default": "matter",
        "matter": {
            "gravity": {
                "x": 0,
                "y": 1
            },
            "debug": false,
            "enableSleeping": false
        }
    },
    "scene": [scene_A, scene_B]
};

const game = new Phaser.Game(config);