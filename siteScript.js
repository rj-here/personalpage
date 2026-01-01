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
const roles = ["Software & Web Developer", "Computer Security Major", "Problem Solver", "Tech & Cricket Enthusiast"]; //What I want to be typed out!
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
//This part is for the mini announcement button on the homepage
function miniAnnounce() {
    alert("Hi! Nothing at the moment, but if a mini announcement comes, you click the button to know.")
}
//This part is for the light/dark mode toggle button
function modeToggle() {
    document.body.classList.toggle('dark-mode'); //To toggle the dark-mode class on the element
    //To save the preference
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark'); //Maintains dark mode
    } else {
        localStorage.setItem('theme', 'light'); //Maintains light mode
    }
}
typeWriter(); //To start the typing effect
//This will be for sorting & filtering projects
function filterAndSort() {
    // Getting all the projects together
    const projects = document.querySelectorAll('.project-card');

    // Changes in the filter dropdowns
    const languageFilter = document.getElementById('filter-language').value; //language filter
    const yearFilter = document.getElementById('filter-year').value; //year filter
    const peopleFilter = document.getElementById('filter-people').value; //people filter
    const hackathonFilter = document.getElementById('filter-hackathon').value; //hackathon filter
    const categoryFilter = document.getElementById('filter-category').value; //category filter
    // Changes in the sort dropdown
    const sortOption = document.getElementById('sort').value;

    console.log("Filters:", { languageFilter, yearFilter, peopleFilter, hackathonFilter, categoryFilter });

    // Filter projects based on dropdown values
    const filteredProjects = Array.from(projects).filter(project => {
        const matchesLanguage = languageFilter === 'all' || project.dataset.language === languageFilter;
        const matchesYear = yearFilter === 'all' || project.dataset.year === yearFilter;
        const matchesPeople = peopleFilter === 'all' || project.dataset.people === peopleFilter;
        const matchesHackathon = hackathonFilter === 'all' || project.dataset.hackathon === hackathonFilter;
        const matchesCategory = categoryFilter === 'all' || project.dataset.category === categoryFilter;

        return matchesLanguage && matchesYear && matchesPeople && matchesHackathon && matchesCategory;
    });

    console.log("Filtered Projects:", filteredProjects);

    // Sort projects based on the selected option
    const sortedProjects = filteredProjects.sort((a, b) => {
        if (sortOption === 'title') {
            return a.dataset.title.localeCompare(b.dataset.title);
        } else if (sortOption === 'year') {
            return b.dataset.year - a.dataset.year;
        } else if (sortOption === 'none') {
            return 0; // No sorting, keep the original order
        }
    });

    console.log("Sorted Projects:", sortedProjects);

    // Clear the container and append the filtered and sorted projects
    const projectContainer = document.querySelector('.projects-container');
    projectContainer.innerHTML = ''; // Clear the container

    if (sortedProjects.length === 0) {
        projectContainer.innerHTML = '<p>No projects match the selected criteria.</p>'; // Show a message if no projects match
    } else {
        sortedProjects.forEach(project => projectContainer.appendChild(project)); // Add sorted projects
    }
}


