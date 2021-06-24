var player_1_name = localStorage.getItem("Player_1_Name");
var player_2_name = localStorage.getItem("Player_2_Name");

var p1_score = 0;
var p2_score = 0;

document.getElementById("player1_name").innerHTML= player_1_name + ":";
document.getElementById("player2_name").innerHTML= player_2_name + ":";

document.getElementById("player1_score").innerHTML= p1_score + ":";
document.getElementById("player2_score").innerHTML= p2_score + ":";

document.getElementById("player_question").innerHTML= "Question Turn - " + player_1_name;
document.getElementById("player_answer").innerHTML= "Answer Turn - " + player_2_name;

function send() {
    num1 = document.getElementById("num1").value;
    console.log(num1);

    num2 = document.getElementById("num2").value;
    console.log(num2);

    question = parseInt(num1) + "x" + parseInt(num2);
    answer = parseInt(num1) * parseInt(num2);

    console.log(question);

    Question_html = "<h4 id='word_display'> Question : " + question + "</h4><br>";
    input_box = "Answer : <input type='text' id='answer_input'><br><br>";
    check_button = "<button class='btn btn-info' onclick='check()'>#check</button>";
    row = Question_html + input_box + check_button;

    document.getElementById("output").innerHTML = row;
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
}

question_turn = "p1";
answer_turn = "p2";
