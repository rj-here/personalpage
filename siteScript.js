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

//This part is to get a typing effect on the homepage, because my friends have it, and I want it too!
const roles = ["Software Developer", "Computer Security Student/Major", "Problem Solver", "Tech Enthusiast", "Lifelong Learner", "Cricket Viewer"]; //What I want to be typed out!
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
// ...existing code...

// Toggle filter/sort controls visibility
function filterSort() {
    const controls = document.getElementById('filter-sort-controls');
    if (!controls) return;
    controls.style.display = (controls.style.display === 'block') ? 'none' : 'block';
}

// Filtering
function filterProjects() {
    const lang = document.getElementById('filter-language')?.value || 'all-lang';
    const category = document.getElementById('filter-category')?.value || 'all-type';
    const people = document.getElementById('filter-people')?.value || 'all-ppl';
    const year = document.getElementById('filter-year')?.value || 'all-years';
    const hack = document.getElementById('filter-hackathon')?.value || 'all-hackathons';

    const projects = document.querySelectorAll('#projects-list .project');
    projects.forEach(proj => {
        const okLang = (lang === 'all-lang' || proj.dataset.language === lang);
        const okCat = (category === 'all-type' || proj.dataset.category === category);
        const okPpl = (people === 'all-ppl' || proj.dataset.people === people);
        const okYear = (year === 'all-years' || proj.dataset.year === year);
        const okHack = (hack === 'all-hackathons' || proj.dataset.hackathon === hack);

        proj.style.display = (okLang && okCat && okPpl && okYear && okHack) ? '' : 'none';
    });
}

// Sorting (reorders DOM children)
function sortProjects() {
    const sortVal = document.getElementById('sort-options')?.value;
    const list = document.getElementById('projects-list');
    if (!list || !sortVal) return;

    const items = Array.from(list.querySelectorAll('.project'));

    let sorted = items.slice();
    if (sortVal === 'title-asc') {
        sorted.sort((a,b) => (a.dataset.title || '').localeCompare(b.dataset.title || ''));
    } else if (sortVal === 'title-desc') {
        sorted.sort((a,b) => (b.dataset.title || '').localeCompare(a.dataset.title || ''));
    } else if (sortVal === 'new-first') {
        sorted.sort((a,b) => Number(b.dataset.year || 0) - Number(a.dataset.year || 0));
    } else if (sortVal === 'old-first') {
        sorted.sort((a,b) => Number(a.dataset.year || 0) - Number(b.dataset.year || 0));
    } else if (sortVal === 'lang-asc') {
        sorted.sort((a,b) => (a.dataset.language || '').localeCompare(b.dataset.language || ''));
    } else if (sortVal === 'lang-desc') {
        sorted.sort((a,b) => (b.dataset.language || '').localeCompare(a.dataset.language || ''));
    } else if (sortVal === 'category-asc') {
        sorted.sort((a,b) => (a.dataset.category || '').localeCompare(b.dataset.category || ''));
    } else if (sortVal === 'category-desc') {
        sorted.sort((a,b) => (b.dataset.category || '').localeCompare(a.dataset.category || ''));
    }

    // append in new order
    sorted.forEach(node => list.appendChild(node));
}

// Attach event listeners after DOM is ready (defer script ensures this)
(function attachFilters() {
    const ids = ['filter-language','filter-category','filter-people','filter-year','filter-hackathon'];
    ids.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.addEventListener('change', () => { filterProjects(); sortProjects(); });
    });
    const sortEl = document.getElementById('sort-options');
    if (sortEl) sortEl.addEventListener('change', () => sortProjects());

    // initial apply
    filterProjects();
    sortProjects();
})();