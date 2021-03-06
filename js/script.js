const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".nav-menu");

/////////// Display Mobile Menu ///////////
const mobileMenu = () => {
    menu.classList.toggle("is-active");
    menuLinks.classList.toggle("active");
}

menu.addEventListener("click", mobileMenu);

//////////////////// Typewritter effect //////////////
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
        // Remove character
        this.txt = fullTxt.substring(0, this.txt.length - 1);

    } else {
        // Add chararacter
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    // Insert text into element
    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

    // Initial type speed
    let typeSpeed = 240;

    if (this.isDeleting) {
        typeSpeed /= 2;
    }

    // If word is complete
    if (!this.isDeleting && this.txt === fullTxt) {
        // Make pause at the end
        typeSpeed = this.wait;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        // move to the next word
        this.wordIndex++;
        // pause before start typing
        typeSpeed = 400;

    }

    setTimeout(() => this.type(), typeSpeed)
}

// Initialise on DOM Load
document.addEventListener('DOMContentLoaded', init);

// Initialise App
function init() {
    const txtElement = document.querySelector('.txt-type');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');
    //  Init Typewritter
    new TypeWritter(txtElement, words, wait);
}


//////////// Contact me form //////////////

const isValidEmail = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};

const isValidPhone = (phone) => {
    const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    return re.test(String(phone).toLowerCase());
};