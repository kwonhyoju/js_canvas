const canvas = document.querySelector(".js_canvas");
const colors = document.getElementsByClassName("js_colors");
const range = document.querySelector(".jsRange");
const modeBtn = document.querySelector(".jsMode");

let FP_btn = true;

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

function handleColorClick(e){
    const changeColor = e.target.style.backgroundColor;
    ctx.strokeStyle = changeColor;
}

function handleRangeChange(e){
    const stroke = e.target.value;
    ctx.lineWidth = stroke;
}

function handleModeChenge(){
    if(FP_btn ===true){
        FP_btn = false;
        modeBtn.innerText="Paint";
    }else{
        FP_btn = true;
        modeBtn.innerText="Fill";
    }
}


if(canvas){
    canvas.addEventListener("mousemove",onMouseMove);
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup",stopPainting);
    canvas.addEventListener("mouseleave",stopPainting);
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
