// var five = require("johnny-five");
// var board = new five.Board();

// board.on("ready", function() {
//   console.log("Ready event. Repl instance auto-initialized!");

//   var led = new five.Led(13);

//   this.repl.inject({
//     // Allow limited on/off control access to the
//     // Led instance from the REPL.
//     on: function() {
//       led.on();
//     },
//     off: function() {
//       led.off();
//     }
//   });
// });



// var five = require("johnny-five");
// var board = new five.Board();

// board.on("ready", function() {
//   var led = new five.Led(13);

//   // This will grant access to the led instance
//   // from within the REPL that's created when
//   // running this program.
//   this.repl.inject({
//     led: led
//   });

//   led.blink();
// });


// var five = require("johnny-five");
// var board = new five.Board();

// board.on("ready", function() {
//   var ledPins = [2,3,4,5,6,7,8,9];
//   var leds = new five.Leds(ledPins);

//   function oneAfterAnother() {
//     var delay = 1;
//     board.counter = 0;
//     for (var i = 0; i < leds.length; i++) {
//       var led = leds[i];

//       board.wait(delay,function(){
//         console.log(this.counter + " on")
//         leds[this.counter].on();
//       })
//       board.wait(delay + 200,function(){
//         console.log(this.counter + " off")
//         leds[this.counter].off();
//         this.counter = (this.counter + 1) % leds.length;
//       })
//       delay += 500;
//     }
//   }

//   leds.on();
//   board.wait(1000, leds.off.bind(leds));

//   // oneAfterAnother();
//   // board.loop(4500, oneAfterAnother);
// });


// var five = require("johnny-five"),
// board, myServo;
// board = new five.Board();
// board.on("ready", function() {
//   myServo = new five.Servo(9);

//   board.repl.inject({
//     servo: myServo
//   });

//   myServo.sweep();

//   this.wait(5000, function(){
//     myServo.stop();
//     myServo.center();
//   });
// });

// var five = require("johnny-five");
// var board = new five.Board();

// board.on("ready", function() {

//   // The servo signal line is connected to
//   // Digital PWM Pin 10
//   var servo = new five.Servo(9);

//   // You can add any objects to the board's REPL,
//   // Let's add the servo here, so we can control
//   // it directly from the REPL!
//   board.repl.inject({
//     servo: servo
//   });
// });


// var five = require("johnny-five");
// var board = new five.Board();

// board.on("ready", function() {
//     var range = [0, 170];

//   // Servo to control panning
//   var pan = new five.Servo({
//     pin: 9,
//     range: range,
//     center: true
//   });

//   // Create a new `joystick` hardware instance.
//   var joystick = new five.Joystick({
//     //   [ x, y ]
//     pins: ["A0", "A1"],
//     freq: 100
//   });


//   joystick.on("change", function() {
//     pan.to(five.Fn.scale(this.y, -1, 1, 0, 170));
//   });
// });



var five = require("johnny-five");


five.Board().on("ready", function() {

  // Initialize the RGB LED
  var led = new five.Led.RGB({
    pins: {
      red: 6,
      green: 5,
      blue: 3
    }
  });

  // RGB LED alternate constructor
  // This will normalize an array of pins in [r, g, b]
  // order to an object (like above) that's shaped like:
  // {
  //   red: r,
  //   green: g,
  //   blue: b
  // }
  //var led = new five.Led.RGB([3,5,6]);

  // Add led to REPL (optional)
  this.repl.inject({
    led: led
  });

  // Turn it on and set the initial color
  led.on();
  led.color("#FF0000");

  // led.blink(1000);

  var joystick = new five.Joystick({
    //   [ x, y ]
    pins: ["A0", "A1"],
    freq: 100
  });


  joystick.on("change", function() {
    led.intensity(10);
  });

});