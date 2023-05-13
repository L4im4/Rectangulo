var camera
var cv
var neuro
var nosex
var nosey
var leftwrist
var rightwrist
var dif

function setup(){
camera=createCapture(VIDEO)
camera.position(80,150)
cv=createCanvas(500,500)
cv.position(900,150)
neuro=ml5.poseNet(camera, modelloaded)
neuro.on("pose", resulatdos)
}

function draw(){
fill("green")
rect(nosex, nosey, dif , dif/2)
}

function preload(){

}
 
function modelloaded(){
    console.log("El modelo si cargo!")
}

function resulatdos(e){
    console.log(e)
    nosex=e[0].pose.nose.x
    nosey=e[0].pose.nose.y
    leftwrist=e[0].pose.leftWrist.x
    rightwrist=e[0].pose.rightWrist.x
   dif= leftwrist - rightwrist
}