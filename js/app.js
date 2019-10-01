const canvas = document.querySelector(".js_canvas");
const colors = document.getElementsByClassName("js_colors");
const range = document.querySelector(".jsRange");
const modeBtn = document.querySelector(".jsMode");
const ctx = canvas.getContext('2d');
const saveBtn = document.querySelector(".jsSave");

let FP_btn = true;
const INIT_COLOR = "#2c2c2c";
const CANVAS_SIZE= 700;

canvas.width = CANVAS_SIZE;
canvas.height = CANVAS_SIZE;

ctx.fillStyle  = "#fff";
ctx.fillRect(0,0,CANVAS_SIZE,CANVAS_SIZE);
ctx.strokeStyle =INIT_COLOR;
ctx.fillStyle  = INIT_COLOR;
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

function handleColorClick(e){
    const changeColor = e.target.style.backgroundColor;
    ctx.strokeStyle = changeColor;
    ctx.fillStyle = changeColor;
}

function handleRangeChange(e){
    const stroke = e.target.value;
    ctx.lineWidth = stroke;
}

function handleModeChenge(){//
    if(FP_btn === true){
        FP_btn = false;
        modeBtn.innerText="Paint";
    }else{
        FP_btn = true;
        modeBtn.innerText="Fill";
    }
}

function handlePaintClick(){
    if(!FP_btn){
        ctx.fillRect(0,0,CANVAS_SIZE,CANVAS_SIZE);
    }
}

function handleContext(e){
    e.preventDefault();
}

function handleClickSave(){
    const img = canvas.toDataURL('image/png');
    const aTag = document.createElement("a");
     aTag.href=img;
     aTag.download="download";
     aTag.click();
}


if(canvas){
    canvas.addEventListener("mousemove",onMouseMove);
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup",stopPainting);
    canvas.addEventListener("mouseleave",stopPainting);
    canvas.addEventListener("click",handlePaintClick);
    canvas.addEventListener("contextmenu",handleContext);
}

if (colors){
    Array.from(colors).forEach(item=>item.addEventListener("click",handleColorClick));    
}


if(range){
    range.addEventListener("input",handleRangeChange);
}

if (modeBtn){
    modeBtn.addEventListener("click",handleModeChenge);
}


if(saveBtn){
    saveBtn.addEventListener("click", handleClickSave);
}