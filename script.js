let boxes= document.querySelectorAll(".box");
let resetBtn= document.querySelector("#reset-btn"); 
let msg= document.querySelector("#msg");
let newGameBtn= document.querySelector("#new-btn");
let msgContainer= document.querySelector(".msg-container");

//player turn (1st player "O" then "X")
let turnO= true;

//winning pattern (stored in 2D array)
let winPattern= [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

//box click events
boxes.forEach((box)=> {
    box.addEventListener("click",()=>{
        if(turnO){   //change player turn
            box.innerText= "X";
            turnO= false;
            box.disabled = true; //disable (not click) the box after click once
        }else{
            box.innerText= "O";
            turnO= true;
            box.disabled = true;  //disable (not click) the box after click once
        }
        checkWinner();
    });
});

//check winner
let checkWinner= ()=> {
    for(let pattern of winPattern){
        // console.log(pattern[0],pattern[1],pattern[2]);
        // console.log(boxes[pattern[0]].innerText,boxes[pattern[1]].innerText,boxes[pattern[2]].innerText);
        //above function store each box value.

        let pos1Val= boxes[pattern[0]].innerText;
        let pos2Val= boxes[pattern[1]].innerText;
        let pos3Val= boxes[pattern[2]].innerText;
        if(pos1Val != "" &&  pos2Val != "" && pos3Val != ""){   //find winner
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                showWinner(pos1Val);
            }
        }
    }
};

// show winner
let disableBoxes= ()=> {
    for(let box of boxes){
        box.disabled= true;
    }
}
let enablebleBoxes= ()=> {
    for(let box of boxes){
        box.disabled= false;
        box.innerText= "";
    }
}
const showWinner= (winner)=> {
    msg.innerText= `Congratulation! winner is: ${winner}`;
    msgContainer.classList.remove("hide"); //unhide/ display the hide div i.e "msg-container"
    disableBoxes();
}

//reset game btn
let resetGame= ()=> {
    turnO= true;
    enablebleBoxes(); 
    msgContainer.classList.add("hide");   
}
newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);