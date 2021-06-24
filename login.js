function addUser() {
    var player_1 = document.getElementById("player1-name").value;
    var player_2 = document.getElementById("player2-name").value;

    localStorage.setItem("Player 1 Name",player_1);
    localStorage.setItem("Player 2 Name",player_2);

    window.location = "game.html";
}