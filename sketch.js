let video;
let poseNet;
let poses = [];

const selected = document.querySelector('select');
const nose = document.querySelector('.nose');
const rightEar = document.querySelector('.right-ear');
const leftEar = document.querySelector('.left-ear');

let currentModel = '';

const models = [
  {
    type: 'clown',
    nose: './images/clown/nose.png',
    leftEar: './images/clown/ears-left.png',
    rightEar: './images/clown/ears-right.png',
  },
  { type: 'pig',
    nose: './images/pig/nose.png',
    leftEar: './images/pig/ears-left.png',
    rightEar: './images/pig/ears-right.png',
  },
  {
    type: 'cat',
    nose: './images/cat/nose.png',
    leftEar: './images/cat/ears-left.png',
    rightEar: './images/cat/ears-right.png',
  },
  {
    type: 'dumbo',
    nose: './images/dumbo/nose.png',
    leftEar: './images/dumbo/ears-left.png',
    rightEar: './images/dumbo/ears-right.png',
  },
  {
    type: 'horse',
    nose: './images/horse/nose.png',
    leftEar: '',
    rightEar: '',
  },
];

selected.addEventListener('change', function(event){
  models.forEach(model => {
    if(event.target.value === model.type){
      currentModel = model.type;
      nose.src = model.nose;
      leftEar.src = model.leftEar;
      rightEar.src = model.rightEar;
    }
  })
});




function setup() {
  createCanvas(1200, 768);
  video = createCapture(VIDEO);
  video.size(width, height);

  // Create a new poseNet method with a single detection
  poseNet = ml5.poseNet(video, modelReady);
  // This sets up an event that fills the global variable "poses"
  // with an array every time new poses are detected
  poseNet.on('pose', function(results) {
    poses = results;
  });
  // Hide the video element, and just show the canvas
  video.hide();
}

function modelReady() {
  select('#status').html('Model Loaded');
}

// A function to draw ellipses over the detected keypoints
function drawKeypoints()  {
  // Loop through all the poses detected

  for (let i = 0; i < poses.length; i++) {
    // For each pose detected, loop through all the keypoints
    let pose = poses[i].pose;
    for (let j = 0; j < pose.keypoints.length; j++) {
      // A keypoint is an object describing a body part (like rightArm or leftShoulder)
      let keypoint;
      keypoint = pose.keypoints[j];
      if (keypoint.score > 0.6 && keypoint.part === "nose") {
        renderModel(currentModel, keypoint);
      }
      if (keypoint.score > 0.6 && keypoint.part === "leftEar") {
        renderModel(currentModel, keypoint);
      }
      if (keypoint.score > 0.6 && keypoint.part === "rightEar") {
        renderModel(currentModel, keypoint);
      }
    // Only draw an ellipse is the pose probability is bigger than 0.2
    }
  }
}

function draw() {
  image(video, 0, 0, width, height);

  // We can call both functions to draw all keypoints
  drawKeypoints();
}

function renderModel(model, keypoint){
  if(model === "pig"){
    nose.style.width = '130px';
    leftEar.style.width = '180px';
    rightEar.style.width = '180px';
    if(keypoint.part === "nose"){
      nose.style.left = keypoint.position.x + 220;
      nose.style.top = keypoint.position.y + 80;
    } else if (keypoint.part === 'leftEar'){
      leftEar.style.left = keypoint.position.x + 270;
      leftEar.style.top = keypoint.position.y - 140;
    } else if (keypoint.part === 'rightEar'){
      rightEar.style.left = keypoint.position.x + 130;
      rightEar.style.top = keypoint.position.y - 140;
    }
    fill(255, 0, 0);
    noStroke();
  }
  if(model === "clown"){
    nose.style.width = '110px';
    leftEar.style.width = '300px';
    rightEar.style.width = '300px';
    if(keypoint.part === "nose"){
      nose.style.left = keypoint.position.x + 235;
      nose.style.top = keypoint.position.y + 90;
    } else if (keypoint.part === 'leftEar'){
      leftEar.style.left = keypoint.position.x + 255;
      leftEar.style.top = keypoint.position.y - 180;
    } else if (keypoint.part === 'rightEar'){
      rightEar.style.left = keypoint.position.x + 10;
      rightEar.style.top = keypoint.position.y - 180;
    }
    fill(255, 0, 0);
    noStroke();
  }
  if(model === "cat"){
    nose.style.width = '130px';
    leftEar.style.width = '150px';
    rightEar.style.width = '150px';
    if(keypoint.part === "nose"){
      nose.style.left = keypoint.position.x + 220;
      nose.style.top = keypoint.position.y + 100;
    } else if (keypoint.part === 'leftEar'){
      leftEar.style.left = keypoint.position.x + 230;
      leftEar.style.top = keypoint.position.y - 140;
    } else if (keypoint.part === 'rightEar'){
      rightEar.style.left = keypoint.position.x + 190;
      rightEar.style.top = keypoint.position.y - 140;
    }
    fill(255, 0, 0);
    noStroke();
  }
  if(model === "dumbo"){
    nose.style.width = '130px';
    leftEar.style.width = '300px';
    rightEar.style.width = '300px';
    if(keypoint.part === "nose"){
      nose.style.left = keypoint.position.x + 220;
      nose.style.top = keypoint.position.y + 100;
    } else if (keypoint.part === 'leftEar'){
      leftEar.style.left = keypoint.position.x + 250;
      leftEar.style.top = keypoint.position.y - 150;
    } else if (keypoint.part === 'rightEar'){
      rightEar.style.left = keypoint.position.x + 20;
      rightEar.style.top = keypoint.position.y - 140;
    }
    fill(255, 0, 0);
    noStroke();
  }        
  if(model === "horse"){
    nose.style.width = '700px';
    leftEar.style.width = '0';
    rightEar.style.width = '0';
    if(keypoint.part === "nose"){
      nose.style.left = keypoint.position.x - 160;
      nose.style.top = keypoint.position.y - 300;
    } else if (keypoint.part === 'leftEar'){
      leftEar.style.left = keypoint.position.x + 250;
      leftEar.style.top = keypoint.position.y - 150;
    } else if (keypoint.part === 'rightEar'){
      rightEar.style.left = keypoint.position.x + 20;
      rightEar.style.top = keypoint.position.y - 140;
    }
    fill(255, 0, 0);
    noStroke();
  }        
}