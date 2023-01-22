img_5="";
status="";
function preload(){
    img_5=loadImage("couch.webp");
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
    image(img_5,0,0,640,420);
    fill("blue");
    text("COUCH",45,75);
    noFill();
    stroke("blue");
    rect(30,60,450,350);

    }
    function modelLoaded()
    {
        console.log("MODEL LOADED!")
        status=true;
        objectDetector.detect(img_5,gotResult);
    
    }
    function gotResult(error,results)
    {
        if (error){
            console.log(error);
        }
        console.log(results);
    }