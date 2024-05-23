let boxes=document.querySelectorAll('.box');
let resetbtn=document.querySelector('#reset');

let turn=true;//if true then X else O
let count=0;
let flag=0;
const win=[
    [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]
]

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        count++;
        if(turn==true){
            box.textContent="X";
            turn=false;
        }
        else{
            box.textContent="O";
            turn=true;
        }
        box.disabled=true;
        checkwin();
    });
});
const disableboxes =()=>{
    for(let boxs of boxes){
        boxs.disabled=true;
    }
}
const checkwin=()=>{
    for(let pattern of win){
        let p1=boxes[pattern[0]].textContent;
        let p2=boxes[pattern[1]].textContent;
        let p3=boxes[pattern[2]].textContent;
        if(p1!="" && p2!="" && p3!=""){
            if(p1===p2 && p2===p3){
                if(p1==="X"){alert('Winner is X');flag=1;break;}
                else{alert("Winner is O");flag=1;break;}
                disableboxes();    
            }     
        }        
    }
    if(count===9 && flag===0){alert("Game is Draw");}
};
resetbtn.addEventListener("click",()=>{
    turn=true;
    count=0;
    flag=0;
    for(let boxs of boxes){
        boxs.disabled=false;
        boxs.textContent="";
    }
});