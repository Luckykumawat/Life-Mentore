// var icon = document.querySelector('.icon')
var prevScrollpos = window.scrollY;

// Get the button
var scrollButton = document.getElementById("scrollBtn");

// Function to be called when the user scrolls
window.onscroll = function() {
    // Get the current scroll position
    var currentScrollPos = window.scrollY;

    // Show or hide the button based on scroll position
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollButton.style.display = "flex";
    } else {
        scrollButton.style.display = "none";
    }

    // Toggle navbar visibility based on scroll direction
    if (prevScrollpos > currentScrollPos) { // If user is scrolling up
        document.querySelector(".nav").style.top = "0"; // Show the navbar 
        
    } else { // If user is scrolling down
        document.querySelector(".nav").style.top = "-70px"; // Hide the navbar
    }

    // Update previous scroll position
    prevScrollpos = currentScrollPos;
};

// Function to scroll to the top of the document
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth" // Smooth scrolling behavior
    });
}

    var close = document.querySelector('.close')
    var menu = document.querySelector('.menu')
    var burger = document.querySelector('.burger')
    var field =  document.querySelector('.ancer');

    menu.addEventListener('click',function(){
         burger.style.display = 'block'
    })

    close.addEventListener('click',function(){
        burger.style.display = 'none'
   })
   field.addEventListener('click',function(){
    burger.style.display = "none";
    
})


function toggleParagraph1() {
    var para0 = document.querySelector('.mentore-card .para0')
    if (para0.style.display === 'none') {
        para0.style.display = 'flex';
    } else {
        para0.style.display = 'none';
    }
}

function toggleParagraph2() {
    var para1 = document.querySelector('.mentore-card .para1')
    if (para1.style.display === 'none') {
        para1.style.display = 'flex';
    } else {
        para1.style.display = 'none';
    }
}

function toggleParagraph3() {
    var para2 = document.querySelector('.mentore-card .para2')
    if (para2.style.display === 'none') {
        para2.style.display = 'flex';
    } else {
        para2.style.display = 'none';
    }
}
function toggleParagraph4() {
    var para3 = document.querySelector('.mentore-card .para3')
    if (para3.style.display === 'none') {
        para3.style.display = 'flex';
    } else {
        para3.style.display = 'none';
    }
}