'use strict';

////////////////////////////////////////////////////////////////////////
// Tweenline section
////////////////////////////////////////////////////////////////////////

// let $box = $('#box');

// // 1. Create a First .to() Tween

// TweenLite.to(
//   $box,
//   1,
//   {left: 0, x: 0}
// );

// // 2. Create a .from() Tween

// TweenLite.from(
//   $box,
//   2,
//   {x: '+= 300px', autoAlpha: 0}
// );

// // 3. Create a .set() Tween
// TweenLite.set($box, {x: '-=200px', scale: 0.3});
// TweenLite.set($box, {x: '+=100px', scale: 0.6, delay: 1});
// TweenLite.set($box, {x: '-50%', scale: 1, delay: 2});

// // 4. Create a .fromTo() Tween

// TweenLite.fromTo($box, 2, {x: '-= 200px'}, {x: 150, ease: Power4.easeInOut, onStart: start, onComplete: complete});

// // 5. GreenSock Easing

// TweenLite.to($box, 0.4, {top: '100%', y: '-100%', ease: Bounce.easeOut, delay: 2});
// TweenLite.to($box, 0.7, {x: '-200px', y: '-100%', ease: Back.easeInOut, delay: 3});
// TweenLite.to($box, 0.8, {x: '-400px', y: '-100%', ease: Back.easeInOut, delay: 4.2});
// TweenLite.to($box, 2.5, {top: '50%', y: '-50%', ease: Power0.easeNone, delay: 5});
// TweenLite.to($box, 2.5, {x: '+=400px', ease: Elastic.easeInOut, delay: 7.7});
// TweenLite.to($box, 2.5, {x: '-=400px', rotation: -720, ease: SlowMo.ease.config(0.1, 0.7, false), delay: 10});

// // 6. Callback Functions

// function start() {
//   console.log('start');
// };

// function complete() {
//   console.log('end');
// };

////////////////////////////////////////////////////////////////////////
// TimelineLite section
////////////////////////////////////////////////////////////////////////

let $box1 = $('#box1');
let $box2 = $('#box2');
let $box3 = $('#box3');
let tl = new TimelineLite({onUpdate: updateSlider});

// 2. Create tweens for our boxes

// TweenLite.from($box1, 1, {y: '-=40', autoAlpha: 0, ease:Power4.easeInOut});
// TweenLite.from($box2, 1, {y: '-=40', autoAlpha: 0, ease:Power4.easeInOut, delay: 0.5});
// TweenLite.from($box3, 1, {y: '-=40', autoAlpha: 0, ease:Power4.easeInOut, delay: 1});

// 3. Add Tweens to Timeline

tl.from($box1, 1, {y: '-=40', autoAlpha: 0, ease:Power4.easeInOut}) // no comma or semi-colon
  .from($box2, 1, {y: '-=40', autoAlpha: 0, ease:Power4.easeInOut}, '+= 0.5') // no comma or semi-colon
  .from($box3, 1, {y: '-=40', autoAlpha: 0, ease:Power4.easeInOut}); // semi-colon after last tween

// 4. Create a Slider to Control Playback

$('#slider').slider({
  range: false,
  min: 0,
  max: 100,
  step: .1,
  slide: function (event, ui) {
    tl.pause();
    //adjust the timeline's progress() based on slider val
    tl.progress(ui.value/100);
  }
});

// Function updateSlider
function updateSlider() {
  $('#slider').slider('value', tl.progress() * 100);
};


