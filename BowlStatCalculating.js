function calculateBowlingAverage() {
var output = document.getElementById("output");
var runsConceded = parseInt(prompt("Input the number of runs conceded by the bowler"));
var wicketsTaken = parseInt(prompt("Input the number of wickets taken by the bowler"));
var avg = (runsConceded / wicketsTaken);
document.getElementById("bowlingAverage").innerHTML = "Bowling Average: " + avg.toFixed(2);
output.innerHTML = "Bowling Average: " + avg.toFixed(2);
}

function calculateBowlingStrikeRate() {
var output = document.getElementById("output");
var ballsBowled = parseInt(prompt("Input the number of balls bowled by the bowler"));
var wicketsTaken = parseInt(prompt("Input the number of wickets taken by the bowler"));
var strikeRate = (ballsBowled / wicketsTaken);
document.getElementById("bowlingStrikeRate").innerHTML = "Bowling Strike Rate: " + strikeRate.toFixed(2);
output.innerHTML = "Bowling Strike Rate: " + strikeRate.toFixed(2);
}

function calculateEconomyRate() {
var output = document.getElementById("output");
var runsConceded = parseInt(prompt("Input the number of runs conceded by the bowler"));
var bowlsBowled = parseInt(prompt("Input the number of balls bowled by the bowler"));
var economyRate = (runsConceded / (bowlsBowled / 6));
document.getElementById("economyRate").innerHTML = "Economy Rate: " + economyRate.toFixed(2);
output.innerHTML = "Economy Rate: " + economyRate.toFixed(2);
}