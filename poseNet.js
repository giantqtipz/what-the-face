// let video;
// let poseNet;
// let poses = [];

// const models = {
//   clown: {
//     nose: './images/clown/nose.png',
//     leftEar: './images/clown/ears-left.png',
//     rightEar: './images/clown/ears-right.png',
//   },
//   pig: {
//     nose: './images/pig/nose.png',
//     leftEar: './images/pig/ears-left.png',
//     rightEar: './images/pig/ears-right.png',
//   },
//   cat: {
//     nose: './images/cat/nose.png',
//     leftEar: './images/cat/ears-left.png',
//     rightEar: './images/cat/ears-right.png',
//   },
//   dog: {
//     nose: './images/dog/nose.png',
//     leftEar: './images/dog/ears-left.png',
//     rightEar: './images/dog/ears-right.png',
//   },
// }

// function setup() {
//   video = createCapture(VIDEO);
//   video.size(width, height);

//   // Create a new poseNet method with a single detection
//   poseNet = ml5.poseNet(video, modelReady);
//   // This sets up an event that fills the global variable "poses"
//   // with an array every time new poses are detected
//   poseNet.on('pose', function(results) {
//     poses = results;
//   });
//   // Hide the video element, and just show the canvas
//   video.hide();
// }

// function modelReady() {
//   select('#status').html('Model Loaded');
// }

// function drawPoseNet() {
//   image(video, 0, 0, width, height);

//   // We can call both functions to draw all keypoints
//   drawKeypoints();
// }

// // A function to draw ellipses over the detected keypoints
// function drawKeypoints()  {
//   // Loop through all the poses detected
//   const nose = document.querySelector('.nose');
//   const rightEar = document.querySelector('.right-ear');
//   const leftEar = document.querySelector('.left-ear');
//   for (let i = 0; i < poses.length; i++) {
//     // For each pose detected, loop through all the keypoints
//     let pose = poses[i].pose;
//     for (let j = 0; j < pose.keypoints.length; j++) {
//       // A keypoint is an object describing a body part (like rightArm or leftShoulder)
//       let keypoint;
//       keypoint = pose.keypoints[j];
//       if (keypoint.score > 0.6 && keypoint.part === "nose") {
//         nose.style.left = keypoint.position.x + 220;
//         nose.style.top = keypoint.position.y + 80;
//         fill(255, 0, 0);
//         noStroke();
//       }
//       if (keypoint.score > 0.6 && keypoint.part === "leftEar") {
//         leftEar.style.left = keypoint.position.x + 260;
//         leftEar.style.top = keypoint.position.y + 20;
//         fill(255, 0, 0);
//         noStroke();
//       }
//       if (keypoint.score > 0.6 && keypoint.part === "rightEar") {
//         rightEar.style.left = keypoint.position.x + 110;
//         rightEar.style.top = keypoint.position.y + 20;
//         fill(255, 0, 0);
//         noStroke();
//       }
//     // Only draw an ellipse is the pose probability is bigger than 0.2
//     }
//   }
// }

// function test() {
//   const selected = document.querySelector('select');
//   console.log(selected)
// }