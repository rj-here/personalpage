//This first part of the script opens the direct links in new tabs to the pages of my other websites.
function lbwNRR() {
    window.open("https://rj-here.github.io/lbwincricket/netRunRate.html");
}
function lbwBatStats() {
    window.open("https://rj-here.github.io/lbwincricket/battingStats.html");
}
function lbwBowlStats() {
    window.open("https://rj-here.github.io/lbwincricket/bowlingStats.html");
}
function econFunDS() {
    window.open("https://rj-here.github.io/someeconomicfun/demandAndSupply.html");
}
function econFunER() {
    window.open("https://rj-here.github.io/someeconomicfun/exchangeRates.html");
}
//This part is for eventual sidebar navigation functionality
function menu() {
document.getElementById('sidebar').classList.toggle('open');
}

//This part is to get a typing effect on the homepage, because my friends have it, and I want it too!
const roles = ["Computer Security Major", "Cybersecurity Enthusiast", "Tech Enthusiast", "Software Developer", "Software Engineer", "Web Developer"]
const typingElement = document.getElementById("typing-effect");
let roleIndex = 0; //This tracks the current role being typed
let charIndex = 0; //This tracks the current character being typed
let isDeleting = false; //This tracks if characters are being inserted or deleted!
function typeWriter() {
const currentRole = roles[roleIndex]; //This is the current role, to be typed up
if (!isDeleting) { //If isDeleting is not true (false), that means we are typing characters
    typingElement.textContent = currentRole.slice(0, charIndex + 1); //We slice the current role from the start to the current character index
    charIndex++; //We increment the character index
    if (charIndex === currentRole.length) { //If the character index is equal to the length of the current role, we have finished typing it
        isDeleting = true; //To set isDeleting to true, so that we can start deleting characters
        setTimeout(typeWriter, 2000); //To wait for 2 seconds before starting to delete characters
        return; //Returning from the function, meaning time to stop!
    }

    }
else { //If isDeleting is true, that means we are deleting characters
    typingElement.textContent = currentRole.slice(0, charIndex - 1); //To slice the current role from start to one before current character index
    charIndex--;
    if (charIndex === 0) { //If the character index is equal to 0, we have finished deleting the current role
        isDeleting = false; //To set isDeleting to false, so that we can start typing characters again
        roleIndex = (roleIndex + 1) % roles.length; //To increment the role index, and loop back to the start if it exceeds the length of roles array
    }

}
setTimeout(typeWriter, isDeleting ? 100 : 200); //To set a timeout for the next character to be typed or deleted, depending on whether we are typing or deleting
}

typeWriter(); //To start the typing effect