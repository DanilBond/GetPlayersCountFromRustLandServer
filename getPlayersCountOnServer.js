var playerText = document.getElementsByClassName("xserver__status");
var players = "";
var playersCount = 0;
var button = document.getElementsByClassName("btn btn-success btn-block");
var audio = new Audio('https://mp3melodii.ru/files_site_02/001/mellen_gi_remix_na_budilnik.mp3');

setTmou();
function setTmou(){
	setTimeout(CheckPlayers, 10000);
}

function CheckPlayers() {
 button[0].click();
console.log(playerText[0].innerHTML);
players = playerText[0].innerHTML;
players = players[0] + players[1];
console.log(players);
playersCount = parseInt(players);
console.log(playersCount);
if(playersCount <= 20){
	console.log("Raidss!!!");
	audio.play();
}
else{
	console.log("I need some sleep");
}
setTmou();
}