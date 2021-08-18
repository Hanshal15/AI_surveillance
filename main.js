status = "";

function preload() {
    
}

function setup() {
    video = createCapture(VIDEO);
    video.hide();
    canvas = createCanvas(480,380);
    canvas.center();
}

function start() {
    object_detector = ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting the object";
}

function modelLoaded() {
    console.log("Model loaded");
}
