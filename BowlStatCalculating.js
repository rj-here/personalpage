function calculateBowlingAverage() {
    // This function gets the bowling average of a bowler: runs conceded / wickets taken
    var output = document.getElementById("output"); // The output element to display the bowling average
    var runsConceded = parseInt(prompt("Input the number of runs conceded by the bowler")); // This prompt gets the runs conceded by the bowler
    var wicketsTaken = parseInt(prompt("Input the number of wickets taken by the bowler")); // This prompt gets the number of wickets taken by the bowler
    var avg = (runsConceded / wicketsTaken); // The calculation of bowling average: runs conceded over wickets taken
    document.getElementById("bowlingAvg").innerHTML = "Bowling Average: " + avg.toFixed(2); // Updating the HTML element with the bowling average
    output.innerHTML = "Bowling Average: " + avg.toFixed(2); // Displaying the bowling average
}

function calculateBowlingStrikeRate() {
    // This function gets the strike rate of a bowler: balls bowled / wickets taken
    var output = document.getElementById("output"); // The output element to display the bowling strike rate
    var ballsBowled = parseInt(prompt("Input the number of balls bowled by the bowler")); // This prompt gets the number of balls bowled by the bowler
    var wicketsTaken = parseInt(prompt("Input the number of wickets taken by the bowler")); // This prompt gets the number of wickets taken by the bowler
    var strikeRate = (ballsBowled / wicketsTaken); // The calculation of bowling strike rate: ballws bowled over the wickets taken
    document.getElementById("bowlingSR").innerHTML = "Bowling Strike Rate: " + strikeRate.toFixed(2); // Updating the HTML element with the bowling strike rate
    output.innerHTML = "Bowling Strike Rate: " + strikeRate.toFixed(2); // Displaying the bowling strike rate
}

function calculateEconomyRate() {
    // This function gets the economy rate of a bowler: runs conceded / overs bowled
    var output = document.getElementById("output"); // The output element to display the economy rate
    var runsConceded = parseInt(prompt("Input the number of runs conceded by the bowler")); // This prompt gets the runs conceded by the bowler
    var bowlsBowled = parseInt(prompt("Input the number of balls bowled by the bowler")); // This prompt gets the number of balls bowled by the bowler
    var economyRate = (runsConceded / (bowlsBowled / 6)); // The calculation of economy rate: runs conceded divided by the overs bowled (dividing the balls bowled by 6, to get an accurate representation of how many overs were bowled)
    document.getElementById("economyRate").innerHTML = "Economy Rate: " + economyRate.toFixed(2); // Updating the HTML element with the economy rate
    output.innerHTML = "Economy Rate: " + economyRate.toFixed(2); // Displaying the economy rate
}