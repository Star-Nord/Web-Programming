//this is copied to all js files and adds functionality to the dropdown menu that appears at small page sizes
document.querySelector('.dropdown').addEventListener('click', function() {
    document.querySelector('.links').classList.toggle('open');
});

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