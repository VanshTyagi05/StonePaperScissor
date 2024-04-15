//we will declare two variable to track score of user and comp
let userscore=0;
let compscore=0;
//to access all choices
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg") 
const userscorepara=document.querySelector("#user-score")
const compscorepara=document.querySelector("#comp-score")


    const genCompChoice=()=>{
    //create an array for choices:- rock,paper,scissor
    const options= ["rock","paper","scissor"]
    //a random number generator maths function 
    //Math.random():- generates a number from 0 to 1
   const randomidx= Math.floor(Math.random() *3);
     return options[randomidx];
  }

  //draw function
   const drawGame=()=>{
    console.log("game is drwan");
    msg.innerText="Game Drawn!";
    msg.style.backgroundColor ="black";
   }
 const showWinner=(userwin,userChoice,compchoice)=>{
    if(userwin){
      userscore++;
      userscorepara.innerText=userscore;
        console.log(`you win!  Your ${userChoice} beats ${compchoice}`);
        msg.innerText=`you win! ${userChoice} beats ${compchoice}`;
        msg.style.backgroundColor ="green";
    }else {
      compscore++;
      compscorepara.innerText=compscore;
    console.log("you lose");
    msg.innerText=`You lose! Computer's ${compchoice} beats  ${userChoice}  }`
    msg.style.backgroundColor ="red";
 } }

//creating a function that will generate a random 
//number and compare it with user input

const playGame=(userChoice)=>{
    console.log("userchoice=",userChoice);
    //generate computer choice
    const compchoice= genCompChoice();
    console.log("compchoice=",compchoice);

    if(userChoice===compchoice){
        //drawgame
         drawGame();

    } else{
        let userwin=true;
        if(userChoice=="rock"){
            //remaining comp choice:- paper;scissor
            userwin=compchoice==="paper"?false:true;
        } else if(userChoice==="paper"){
            //rock scissor
            userwin=compchoice==="scissor"?false:true;       
        } else {
            //paper rock
           userwin=compchoice==="rock"?false:true;
        }
       showWinner(userwin,userChoice,compchoice);
        }
    };




 //for selecting a single choice from different choices
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
      const userChoice = choice.getAttribute("id");
    //   console.log("choice was clicked",userChoice);
      playGame(userChoice);
    });
  });

