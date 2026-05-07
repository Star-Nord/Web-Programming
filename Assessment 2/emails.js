//this is copied to all js files and adds functionality to the dropdown menu that appears at small page sizes
document.querySelector('.dropdown').addEventListener('click', function() {
    document.querySelector('.links').classList.toggle('open');
});
// declaring checkinput here so it can later be used in the checkEmail function
var checkinput = document.getElementById("checkerinput").value;

let emails = []; //declaring emails so it can later be filled
const notworkingblurb = document.getElementById("notworkingblurb");
fetch("database.json") //fetches the database.json file but sadly it only works if the file is run by a live server
.then(response => response.json())
.then(data => {emails = data.emails;}) //fills the emails variable with emails from the database.json
.catch(() => {notworkingblurb.classList.add("show");}); //if the fetch fails, it shows the not working message to inform the user that the functionality is not working

function checkEmail() {
    const checkinput = document.getElementById("checkerinput").value; //declares checkinput with .value so it retrieves the text inside the search box instead of the text box itself
    const foundblurb = document.getElementById("foundblurb");
    const notfoundblurb = document.getElementById("notfoundblurb"); //these both are declared so they can later be set to show or not depending on the result
    if (emails.includes(checkinput)) {
        foundblurb.classList.add('show');
        notfoundblurb.classList.remove('show');
    } else {
        notfoundblurb.classList.add('show');
        foundblurb.classList.remove('show');
    } //if one gets the class added, the other one gets the class removed so both don't show at the same time
}

document.getElementById("checker").addEventListener("submit", function(event) { //adds a listener to the search bar so when the user presses enter it runs the function
    event.preventDefault();
    if (notworkingblurb.classList.contains("show")) {
        return;
    } //this is to make sure the function doesn't run if the fetch failed so you don't get the not found message when it can't even index the database in the first place
    checkEmail();
});
// this is a dropdown menu made for the faq section that was reused here
document.querySelectorAll('.question').forEach(question => { //this selects all questions and adds a listener for each of them
    question.addEventListener('click', function() {
        const question = this;
        const answerdropdown = this.nextElementSibling; //this declares all the relevant elements
        const chevron = this.querySelector('.chevron');
        question.classList.toggle('open');
        answerdropdown.classList.toggle('open'); //this toggles the open class for all the elements
        chevron.classList.toggle('open');
    });
});