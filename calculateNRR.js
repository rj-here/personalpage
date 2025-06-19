function getNRR() {
    // This function calculates the Net Run Rate (NRR) for a cricket match: the difference between the run rate of the 2 teams
var output = document.getElementById("output"); // The output element to display the Net Run Rate
var runsScoredFor = parseInt(prompt("Input the number of runs scored by Team 1 (FOR)")); // This prompt gets the runs scored by Team 1
var oversFor = parseInt(prompt("Input the number of overs faced in full by Team 1 (FOR). If partial overs have been done (such as 47.2), then just consider 47.")); // This prompt gets the number of voers faced by first team
var extras = parseInt(prompt("How many balls of the not fully completed over were faced?")); // This prompt gets the additonal balls faced of the not fully completed over (2 balls in the case of the 47.2 overs example)
var runsScoredAgainst = parseInt(prompt("Input the number of runs scored by Team 2 (AGAINST)")); // This prompt gets the runs scored by Team 2 
var oversAgainst = parseInt(prompt("Input the number of maximum overs that could be faced by Team 2 (AGAINST). So, if a game had them all out for 47 overs, 50 will still be the value taken.")); // This prompt gets the maximum overs that could be faced by Team 2, so whether they batted a full 50 overs, or lost all 10 wickets in 47 overs, it'll be 50 for that given game
var oversForTotal = (oversFor*6 + extras)/6; // This calculation is converts the overs faced by Team 1 into an eligible value, for calcuation purposes
var forRR = runsScoredFor/oversForTotal; // This calcuation is the run rate of Team 1, or the FOR team
var againstRR = runsScoredAgainst/oversAgainst; // This calculation is the run rate of Team 2, or the AGAINST team
var nrr = forRR - againstRR; // This calcuation is the NRR: for - against
document.getElementById("nrr").innerHTML = "Net Run Rate: " + nrr.toFixed(3); // Updating the HTML element with the NRR
output.innerHTML = "Net Run Rate: " + nrr.toFixed(3); // Displaying the NRR
}