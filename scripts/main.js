// Variables
const hamburgerIcon = document.querySelector('.icon-hamburger');



// Functions
function toggleDropdown() {
    // get dropdown list
    const dropdownList = document.querySelector('.dropdown-list');
    if(dropdownList.style.display === 'none') {
        dropdownList.style.display = 'block';
    } else {
        dropdownList.style.display = 'none'
    }
}





// event listeners
hamburgerIcon.addEventListener('click', toggleDropdown);