function getStrikeRate() {
    // This function gets the strike rate of a batter: runs scored / balls faced * 100
    var output = document.getElementById("output"); // The output element to display the strike rate
    var runsScored = parseInt(prompt("Input the number of runs scored by the batter")); // This prompt gets the runs scored by the batter
    var ballsFaced = parseInt(prompt("Input the number of balls faced by the batter")); // This prompt gets the number of balls faced by the batter
    var strikeRate = (runsScored / ballsFaced) * 100; // The calculation of strike rate: runs scored over the balls faced, multiplied by 100
    document.getElementById("strikeRate").innerHTML = "Strike Rate: " + strikeRate.toFixed(2); // Updating the HTML element with the strike rate
    output.innerHTML = "Strike Rate: " + strikeRate.toFixed(2); // Displaying the strike rate
}

function getAverage() {
    // This function gets the batting average of a batter: runs scored / dismissals
    var output = document.getElementById("output"); // The output element to display the batting average
    var runsScored = parseInt(prompt("Input the number of runs scored by the batter")); // This prompt gets the runs scored by the batter
    var dismissals = parseInt(prompt("Input the number of times the batter has been dismissed")); // This prompt gets the number of dismissals of the batter
    var average = (runsScored / dismissals).toFixed(2); //The batting average is the runs scored divided by the dismissals
    document.getElementById("average").innerHTML = "Batting Average: " + average; // Updating the HTML element with the batting average
    output.innerHTML = "Batting Average: " + average; // Displaying the batting average
}