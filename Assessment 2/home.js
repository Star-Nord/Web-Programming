//this originated here but has been since been copied to all js files, it adds functionality to the dropdown menu
document.querySelector('.dropdown').addEventListener('click', function() {
    document.querySelector('.links').classList.toggle('open');
});