noseX=0;
noseY=0;
function preload(){
clown_nose=loadImage('https://i.postimg.cc/3x3QzSGq/m.png');
}
function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video= createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet= ml5.poseNet(video,modelLoded);
    poseNet.on('pose',gotPoses);
}
function modelLoded(){
    console.log('PoseNet Is Instalized');
}
function gotPoses(results)
{
    if(results.lenght>0)
    {
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("nose x="+ result[0].pose.nose.x);
        console.log("nose y="+ result[0].pose.nose.y);
    }
}

function draw(){
 image(video,0,0,300,300);
 image(clown_nose, noseX, noseY,80, 35);
}
function take_snapshot(){
    save('myFilterImage.png');
}
