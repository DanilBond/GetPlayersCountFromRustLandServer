var playerText = document.getElementsByClassName("xserver__status");
var players = "";
var playersCount = 0;
var button = document.getElementsByClassName("btn btn-success btn-block");
var audio = new Audio('https://mp3melodii.ru/files_site_02/001/mellen_gi_remix_na_budilnik.mp3');
var date = new Date();
var currentHour = 0;

setTmou();
function setTmou(){
	setTimeout(CheckPlayers, 10000);
}

function CheckPlayers() {
button[0].click();
players = playerText[0].innerHTML;
players = players[0] + players[1];
playersCount = parseInt(players);
console.log(playersCount);
console.log(date.getHours() + ":" + date.getMinutes());	
if(playersCount <= 20){
	currentHour = date.getHours();
	if(currentHour >= 10){
	console.log("Raidss!!!");
	audio.play();
	}
	else{
	console.log("Waiting a sun");	
	}
}
else{
	console.log("I need some sleep");
}
setTmou();
}
