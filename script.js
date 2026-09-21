let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');

let formBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');
let formClose = document.querySelector('#form-close');

let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

let videoBtn = document.querySelectorAll('.vid-btn');
let videoSlider = document.querySelector('#video-slider');


searchBtn.addEventListener('click', () => {

    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');

});



formBtn.addEventListener('click', () => {

    loginForm.classList.add('active');

});

formClose.addEventListener('click', () => {

    loginForm.classList.remove('active');

});


menu.addEventListener('click', () => {

    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');

});


window.addEventListener('scroll', () => {

    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');

    menu.classList.remove('fa-times');
    navbar.classList.remove('active');

    loginForm.classList.remove('active');

});


videoBtn.forEach(btn => {

    btn.addEventListener('click', () => {

        document
            .querySelector('.vid-btn.active')
            ?.classList.remove('active');

        btn.classList.add('active');

        let src = btn.getAttribute('data-src');

        if (src) {

            videoSlider.src = src;

            videoSlider.load();

            videoSlider.play().catch(() => {
                console.log('Video playback requires user interaction.');
            });

        }

    });

});



let bookingForm = document.querySelector('#booking-form');

bookingForm.addEventListener('submit', (event) => {

    event.preventDefault();

    let destination =
        document.querySelector('#destination').value;

    let guests =
        document.querySelector('#guests').value;

    let arrival =
        document.querySelector('#arrival').value;

    let leaving =
        document.querySelector('#leaving').value;


    // Check dates

    if (new Date(leaving) < new Date(arrival)) {

        alert(
            'Leaving date cannot be before the arrival date.'
        );

        return;

    }


    alert(
        `Booking request received!\n\n` +
        `Destination: ${destination}\n` +
        `Guests: ${guests}\n` +
        `Arrival: ${arrival}\n` +
        `Leaving: ${leaving}`
    );

});

// PACKAGE BOOK NOW BUTTON

let packageButtons =
    document.querySelectorAll('.package-book');

packageButtons.forEach(button => {

    button.addEventListener('click', () => {

        let card =
            button.closest('.box');

        let destination =
            card.querySelector('h3').innerText;

        destination =
            destination.replace(/\s+/g, ' ').trim();


        document.querySelector('#destination').value =
            destination;

    });

});


// CONTACT FORM

let contactForm =
    document.querySelector('#contact-form');

contactForm.addEventListener('submit', (event) => {

    event.preventDefault();

    alert(
        'Thank you! Your message has been submitted.'
    );

    contactForm.reset();

});


// LOGIN SUBMIT

let login =
    document.querySelector('#login-form');

login.addEventListener('submit', (event) => {

    event.preventDefault();

    alert('Login form submitted.');

    login.reset();

    loginForm.classList.remove('active');

});


// REVIEW SLIDER

let reviewTrack =
    document.querySelector('.review-track');

let previousButton =
    document.querySelector('.slider-btn.prev');

let nextButton =
    document.querySelector('.slider-btn.next');


function getReviewScrollAmount() {

    let card =
        document.querySelector('.review-card');

    if (!card) {
        return 0;
    }

    return card.offsetWidth + 20;

}


nextButton.addEventListener('click', () => {

    reviewTrack.scrollBy({

        left: getReviewScrollAmount(),

        behavior: 'smooth'

    });

});


previousButton.addEventListener('click', () => {

    reviewTrack.scrollBy({

        left: -getReviewScrollAmount(),

        behavior: 'smooth'

    });

});


// SEARCH FUNCTION

let searchForm =
    document.querySelector('#search-form');

searchForm.addEventListener('submit', (event) => {

    event.preventDefault();

    let query =
        document.querySelector('#search-bar')
        .value
        .trim()
        .toLowerCase();


    if (!query) {
        return;
    }


    let sections =
        document.querySelectorAll(
            '#packages .box, #gallery .box, #services .box'
        );


    let found = false;


    sections.forEach(section => {

        let text =
            section.innerText.toLowerCase();


        if (text.includes(query) && !found) {

            section.scrollIntoView({

                behavior: 'smooth',

                block: 'center'

            });

            found = true;

        }

    });


    if (!found) {

        alert(
            `No result found for "${query}".`
        );

    }

});

// BOOKING DATE VALIDATION

let arrivalInput =
    document.querySelector('#arrival');

let leavingInput =
    document.querySelector('#leaving');


let today =
    new Date().toISOString().split('T')[0];


arrivalInput.min = today;

leavingInput.min = today;


arrivalInput.addEventListener('change', () => {

    leavingInput.min =
        arrivalInput.value;

});
// =====================================================
// GALLERY TOUCH EFFECT
// =====================================================

let galleryBoxes =
    document.querySelectorAll('.gallery .box-container .box');


galleryBoxes.forEach(box => {

    box.addEventListener('click', () => {

        // Close all other gallery boxes
        galleryBoxes.forEach(item => {

            if (item !== box) {

                item.classList.remove('active');

            }

        });


        // Toggle the selected gallery box
        box.classList.toggle('active');

    });

});