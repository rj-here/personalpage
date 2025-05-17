function getStrikeRate() {
    var output = document.getElementById("output");
    var runsScored = parseInt(prompt("Input the number of runs scored by the batter"));
    var ballsFaced = parseInt(prompt("Input the number of balls faced by the batter"));
    var strikeRate = (runsScored / ballsFaced) * 100;
    document.getElementById("strikeRate").innerHTML = "Strike Rate: " + strikeRate.toFixed(2);
    output.innerHTML = "Strike Rate: " + strikeRate.toFixed(2);
}