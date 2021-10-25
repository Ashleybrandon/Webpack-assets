"use strict";

const menuIcon = document.querySelector('.menu-icon');
const mobileMenu = document.querySelector('.inner-menu-container');

//mobile menu toggle

menuIcon.addEventListener('click', function(e){

   if (mobileMenu.classList.contains('active')) {
    mobileMenu.classList.remove('active');
    menuIcon.classList.remove('active');
   } else {
    mobileMenu.classList.add('active');
    menuIcon.classList.add('active');
   }

    e.preventDefault(); 

});

//Sub menu toggle

function addListenerToElement (element, eventType, listener) {
  element.addEventListener(eventType, listener);
  
}

// Add "active" class to clicked element, remove it from siblings and toggle show in sub-menus
function toggleActiveClass () {
  let parentElement = this.parentNode
  let siblings = parentElement.parentNode.children
  let dropDown = this.nextElementSibling
  

  if (dropDown !== null) {
    dropDown.classList.toggle('sub-menu-show');
    console.log(dropDown);
  }
}

// Close the open dropdown clicking everywhere
function closeDropdown (event) {
  let dropDownShow = document.getElementsByClassName(
    'sub-menu-show'
  )[0]

  if (
    dropDownShow !== undefined &&
    dropDownShow.previousElementSibling !== event.target
  ) {
    dropDownShow.classList.remove('sub-menu-show');
  }
}

let menuItems = document.querySelectorAll('.child-trigger');

for (const value of menuItems) {
  addListenerToElement(value, 'click', toggleActiveClass);
}

addListenerToElement(window, 'mouseup', closeDropdown);


//Scroll down on click
function scrollWin() {
  window.scrollBy(0, 650);
}

