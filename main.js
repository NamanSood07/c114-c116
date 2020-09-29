function preload(){
    
}
function setup(){
    canvas=createCanvas(500,500);
    canvas.position(500,160);
    video= createCapture(VIDEO);
    video.hide();
}
function draw(){
    image(video,0,0,649,480);
  
};
 function take_snapshot(){
     save('My_filter_image.png')
 }