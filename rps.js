let user_score = 0;
let computer_score = 0;

const choice = document.querySelectorAll(".choice");
const msg=document.querySelector("#msg")

const user_score_para=document.querySelector("#user-score");
const computer_score_para=document.querySelector("#computer-score")

const show_winner = (user_win,userChoice,computer_choice) =>{
    if(user_win){
        user_score++;
        user_score_para.innerText = user_score;
        console.log("user wins");
        msg.innerText=`user win!  your ${userChoice} beats ${computer_choice} `;
        msg.style.backgroundColor="green";
    }
    else{
        computer_score++;
        computer_score_para.innerText=computer_score;
        console.log("computer wins");
        msg.innerText=`computer win! ${computer_choice} beats your${userChoice}`;
        msg.style.backgroundColor="red";
    }

}

const draw=()=>{
    console.log("the game was draw.");
    msg.innerText="match draw";
    msg.style.backgroundColor="blue";
}

const   generate_computer_choice = () =>{
    //rock paper scissors

    const options =["rock","paper","scissors"];
    const random_index = Math.floor(Math.random()*3);
    return options[random_index];
}

const play_game =(userChoice)=>{
    console.log("user choice : ",userChoice);
    //generate conputer choice
    const computer_choice = generate_computer_choice();
    console.log("computer choice : ",computer_choice);

    if(userChoice===computer_choice ){
        //Draw condition
        draw(); 
    }else {
        let user_win="true";

        if(userChoice==="rock"){
            user_win= computer_choice==="paper" ? false : true;
        }
        else if(userChoice==="paper"){
            user_win= computer_choice==="scissors" ? false : true;
        }
        else {
            user_win= computer_choice==="rock" ? false : true;
        }

        show_winner(user_win,userChoice,computer_choice);
    }
};

choice.forEach((choice) => {
    console.log(choice);
    
    choice.addEventListener("click", () => {
        const  userChoice= choice.getAttribute("id");
        
        play_game(userChoice);
    });
});