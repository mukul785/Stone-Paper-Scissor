var choice = ['stone', 'paper', 'scissor'];
var user_choice;
var comp_choice;
var user_score = 0;
var comp_score = 0;
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function choose(choice_entered) {
    user_choice = choice[choice_entered];
    comp_choice = choice[getRandomNumber(0,2)];
    winner_time();
}
function winner_time() {
    if (user_choice == choice[0] && comp_choice == choice[1]) {
        comp_score++;
        document.getElementById("Result").innerText = "Comp win, paper beats stone";
    }
    else if (user_choice == choice[0] && comp_choice == choice[2]) {
        user_score++;
        document.getElementById("Result").innerText = "You win, stone beats scissor";
    }
    else if (user_choice == choice[1] && comp_choice == choice[0]) {
        user_score++;
        document.getElementById("Result").innerText = "You win, paper beats stone";
    }
    else if (user_choice == choice[1] && comp_choice == choice[2]) {
        comp_score++;
        document.getElementById("Result").innerText = "Comp win, scissor beats paper";
    }
    else if (user_choice == choice[2] && comp_choice == choice[0]) {
        comp_score++;
        document.getElementById("Result").innerText = "Comp win, stone beats scissor";
    }
    else if (user_choice == choice[2] && comp_choice == choice[1]) {
        user_score++;
        document.getElementById("Result").innerText = "You win, scissor beats paper";
    }
    else{
        document.getElementById("Result").innerText = "Draw";
    }
    document.getElementById("user-score").innerText = user_score;
    document.getElementById("comp-score").innerText = comp_score;
    end_race();
}
function end_race(){
    if(user_score==10 || comp_score==10){
        alert("jdvk");
        user_score=0;
        comp_score=0;
        document.getElementById("user-score").innerText = user_score;
        document.getElementById("comp-score").innerText = comp_score;
        document.getElementById("Result").innerText = "Choose one";
    }
}
