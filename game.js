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

document.getElementById("player1_name").innerHTML= player_1_name + ":";
document.getElementById("player2_name").innerHTML= player_2_name + ":";

document.getElementById("player1_score").innerHTML= p1_score + ":";
document.getElementById("player2_score").innerHTML= p2_score + ":";

document.getElementById("player_question").innerHTML= "Question Turn - " + player_1_name;
document.getElementById("player_answer").innerHTML= "Answer Turn - " + player_2_name;

function send() {
    get_word = document.getElementById("word").value;
    lowercase_word = get_word.toLowerCase();
    console.log("User Input in lowercase : " + lowercase_word);

    second_letter = lowercase_word.charAt(1);
    console.log(second_letter);

    index_middle = Math.floor(lowercase_word.length/2);
    middle_letter = lowercase_word.charAt(index_middle);
    console.log(middle_letter);

    index_last = lowercase_word.length - 1;
    last_letter = lowercase_word.charAt(index_last);
    console.log(last_letter);

    output1 = lowercase_word.replace(second_letter, "_");
    output2 = output1.replace(middle_letter, "_");
    output3 = output2.replace(last_letter, "_");
    console.log(output3);

    question_word = "<h4 id='word_display'> Question : " + output3 + "</h4><br>";
    input_box = "Answer : <input type='text' id='answer_input'><br><br>"
    check_button = "<button class='btn btn-info' onclick='check()'>#check</button>"
    row = question_word + input_box + check_button;

    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = "";
}

question_turn = "p1";
answer_turn = "p2"
