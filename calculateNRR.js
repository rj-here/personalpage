function getNRR() {
var output = document.getElementById("output");
var runsScoredFor = parseInt(prompt("Input the number of runs scored by Team 1 (FOR)"));
var oversFor = parseInt(prompt("Input the number of overs faced in full by Team 1 (FOR). If partial overs have been done (such as 47.2), then just consider 47."));
var extras = parseInt(prompt("Extras please!"));
var runsScoredAgainst = parseInt(prompt("Input the number of runs scored by Team 2 (AGAINST)"));
var oversAgainst = parseInt(prompt("Input the number of maximum overs that could be faced by Team 2 (AGAINST). So, if a game had them all out for 47 overs, 50 will still be the value taken."));
var oversForTotal = (oversFor*6 + extras)/6;
var forRR = runsScoredFor/oversForTotal;
var againstRR = runsScoredAgainst/oversAgainst;
var nrr = forRR - againstRR;
document.getElementById("nrr").innerHTML = "Net Run Rate: " + nrr.toFixed(3);
output.innerHTML = "Net Run Rate: " + nrr.toFixed(3);
}