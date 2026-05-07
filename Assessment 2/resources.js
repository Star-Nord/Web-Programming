//this is copied to all js files and adds functionality to the dropdown menu that appears at small page sizes
document.querySelector('.dropdown').addEventListener('click', function() {
    document.querySelector('.links').classList.toggle('open');
});
// this was copied from faq.js but class names were changed to fit the resources page
document.querySelectorAll('.resource').forEach(resource => { //this selects all resources and adds a listener for each of them
    resource.addEventListener('click', function() {
        const resource = this;
        const contentdropdown = this.nextElementSibling; //this declares all the relevant elements
        const chevron = this.querySelector('.chevron');
        resource.classList.toggle('open');
        contentdropdown.classList.toggle('open'); //this toggles the open class for all the elements
        chevron.classList.toggle('open');
    });
});