const canvas = document.querySelector(".js_canvas");
const ctx = canvas.getContext('2d');
canvas.width = 700;
canvas.height = 700;
ctx.strokeStyle ="#2c2c2c";
ctx.lineWidth = 2.5;

let mouseStatu = false;

function stopPainting(){
    mouseStatu= false;
}

function startPainting(){
    mouseStatu = true;
}

function onMouseMove(event){
    const x= event.offsetX;
    const y = event.offsetY;

    if(!mouseStatu){
        ctx.beginPath();
        ctx.moveTo(x,y);
    }else{
        ctx.lineTo(x,y);
        ctx.stroke();
    }
}


if(canvas){
    canvas.addEventListener("mousemove",onMouseMove);
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup",stopPainting);
    canvas.addEventListener("mouseleave",stopPainting);
}