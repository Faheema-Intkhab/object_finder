statuss = "";

function setup()
{
    canvas = createCanvas(480, 380);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}

function start()
{
    objectDetector = ml5.objectDetector('cocossd' , modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
    input_box = document.getElementById("box").value;
}

function modelLoaded()
{
    console.log("MODEL IS LOADED!!!");
    statuss = true;
}

function draw()
{
    image(video, 0, 0, 480, 380);
}