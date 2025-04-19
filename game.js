let boxes=document.querySelectorAll(".box");
let win=document.querySelector(".winner");
let reset=document.querySelector("#reset");

let turnX=true;

const winArray=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

let showMessage=(winner)=>{
    win.innerText=`${winner} বিজয়ী`;
    win.classList.remove("hide");
    boxes.forEach((box)=>{
        box.disabled=true;
    });
}

let matchDraw=()=>{
    win.innerText=`আবার চেষ্টা কর!!!`;
    win.classList.remove("hide");
}


const WinnerCheck=()=>{
    let allClick=true;
    let match=false;
    winArray.forEach((index) => {
        if(boxes[index[0]].innerText!="" && boxes[index[1]].innerText!="" && boxes[index[2]].innerText!=""){
            if(boxes[index[0]].innerText===boxes[index[1]].innerText && boxes[index[1]].innerText===boxes[index[2]].innerText)
            {
                match=true;
                showMessage(boxes[index[0]].innerText);               
                boxes.disabled=true;
            }
        }
        else{
            allClick=false;
        }
    });

    if(allClick===true && match===false){
        matchDraw();
    }
}

boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        if(turnX){
            box.innerText="X";
            turnX=false;         
        }
        else{
            box.innerText="O";
            turnX=true; 
        }
        box.disabled=true;
        WinnerCheck();
    })
});

reset.onclick=()=>{
    turnX=true;
    win.classList.add("hide");
    boxes.forEach((box)=>{
        box.disabled=false;
        box.innerText="";
    });

}
