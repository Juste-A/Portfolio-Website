const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".nav-menu");

// Display Mobile Menu
const mobileMenu = () => {
    menu.classList.toggle("is-active");
    menuLinks.classList.toggle("active");
}

menu.addEventListener("click", mobileMenu);

// Typewritter effect
const TypeWritter = function (txtElement, words, wait = 3000) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = '';
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
}

// Type Method
TypeWritter.prototype.type = function () {
    // Current index of word
    const current = this.wordIndex % this.words.length;
    // Get full text of current word
    const fullTxt = this.words[current];

    // Check if deleting
    if (this.isDeleting) {
        // Remove char

    } else {
        // Add char
        this.txt =
    }

    setTimeout(() => this.type(), 500)
}

// Init on DOM Load
document.addEventListener('DOMContentLoaded', init);

// Init App
function init() {
    const txtElement = document.querySelector('.txt-type');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');
    //  Init Typewritter
    new TypeWritter(txtElement, words, wait);
}