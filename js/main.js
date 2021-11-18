const getElement = (selector) => {
    const element = document.querySelector(selector)

    if (element) return element
    throw Error(
        `Please double check your class names, there is no ${selector} class`
    )
}
const links = getElement('.nav-links')
const navBar = getElement('.navbar')
const footerSoc = getElement('.footer')
const leftFooter = getElement('.left-footer')
const navBtnDOM = getElement('.container')
const mainPage = getElement('.page')

navBtnDOM.addEventListener('click', () => {
    links.classList.toggle('nav-links-show')
    navBar.classList.toggle('navbar-show')
    footerSoc.classList.toggle('footer-hide')
    mainPage.classList.toggle('page-hide')
    leftFooter.classList.toggle('left-footer-hide')
})

function myFunction(x) {
    x.classList.toggle("change");
}

// header

var i = 0;
var x = 0;
var speed = 150;
var ic = 0
var xc = 0
var txt = ['I code cool  ', 'I develop ', 'I love '];
var tyt = ['websites', 'mobile apps', 'wordpress']

window.addEventListener("DOMContentLoaded", function() {
    typeWriter()
})


function typeWriter() {
    if (i < txt[x].length) {
        document.querySelector(".hero-heading").textContent += txt[x].charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    } else {
        i = 0

        x++
        if (x >= txt.length) {
            x = 0
        }
        htmlElement()
    }
}

function htmlElement() {
    document.querySelector(".hero-heading").innerHTML += '<span class="hero-heading-1"></span>'
    child()
}


function child() {
    if (ic < tyt[xc].length) {
        document.querySelector(".hero-heading-1").textContent += tyt[xc].charAt(ic);
        ic++;
        setTimeout(child, speed);
    } else {
        ic = 0
        xc++
        if (xc >= txt.length) {
            xc = 0
        }
        document.querySelector(".hero-heading").textContent = ''
        typeWriter()
    }
}

// nav transparen to black
var myNav = document.querySelector('.navbar');
window.onscroll = function() {
    "use strict";
    if (document.body.scrollTop >= 200 || document.documentElement.scrollTop >= 200) {
        myNav.classList.add("nav-colored");
        myNav.classList.remove("nav-transparent");
    } else {
        myNav.classList.add("nav-transparent");
        myNav.classList.remove("nav-colored");
    }
};