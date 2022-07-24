song="";
function preload(){
    song1=loadSound("jk.mp3");
    song2=loadSound("")
}
function setup(){
    canvas= createCanvas(600,500);
    canvas.center();
    video= createCapture(VIDEO);
    video.hide();
}
function draw(){
    image(video,0,0,600,500);
}
function play(){
    song.play();
}