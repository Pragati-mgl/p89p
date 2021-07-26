function add_user(){
player1_name=document.getElementById("Player1_Name_Input").Value;
player2_name=document.getElementById("Player2_Name_Input").Value;
localStorage.setItem("player1_name",player1_name);
localStorage.setItem("player2_name",player2_name);
window.location.replace("game_page.html");
}



