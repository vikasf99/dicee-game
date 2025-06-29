// Description: This code simulates a dice roll for two players and updates the HTML to display the results.


var randomNumber1= Math.floor(Math.random()*6) + 1;
var randomNumber2= Math.floor(Math.random()*6) + 1;

//// It also determines the winner based on the rolled numbers.
// Update the image sources based on the random numbers
var randomImageSource1 = "images/dice" + randomNumber1 + ".png"; // e.g., "images/dice3.png"
document.querySelector(".img1").setAttribute("src", randomImageSource1);

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";
document.querySelector(".img2").setAttribute("src", randomImageSource2);

// Determine the winner and update the heading

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🏆 Player 1 Wins!";
}
else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🏆";
}
else {
    document.querySelector("h1").innerHTML = "It's a Draw 🥉";
}


