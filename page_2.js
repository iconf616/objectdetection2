img_1="";
status="";
function preload(){
    img_1=loadImage("tv.jpeg");
}
function setup()
{
    canvas = createCanvas(640,420);
    canvas.center();
    objectDetector=ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML="STATUS : DETECTING OBJECTS ";
}
function draw()
{
    image(img_1,0,0,640,420);
    fill("blue");
    text("TV",45,75);
    noFill();
    stroke("blue");
    rect(30,60,450,350);
    
    }
    function modelLoaded()
    {
        console.log("MODEL LOADED!")
        status=true;
        objectDetector.detect(img_1,gotResult);
    
    }
    function gotResult(error,results)
    {
        if (error){
            console.log(error);
        }
        console.log(results);
    }