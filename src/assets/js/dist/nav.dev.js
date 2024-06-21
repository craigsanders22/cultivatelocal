"use strict";

// add classes for mobile navigation toggling
var CSbody = document.querySelector("body");
var CSnavbarMenu = document.querySelector("#cs-navigation");
var CShamburgerMenu = document.querySelector("#cs-navigation .cs-toggle");
CShamburgerMenu.addEventListener('click', function () {
  CShamburgerMenu.classList.toggle("cs-active");
  CSnavbarMenu.classList.toggle("cs-active");
  CSbody.classList.toggle("cs-open"); // run the function to check the aria-expanded value

  ariaExpanded();
}); // checks the value of aria expanded on the cs-ul and changes it accordingly whether it is expanded or not 

function ariaExpanded() {
  var csUL = document.querySelector('#cs-expanded');
  var csExpanded = csUL.getAttribute('aria-expanded');

  if (csExpanded === 'false') {
    csUL.setAttribute('aria-expanded', 'true');
  } else {
    csUL.setAttribute('aria-expanded', 'false');
  }
} // This script adds a class to the body after scrolling 100px
// and we used these body.scroll styles to create some on scroll 
// animations with the navbar


document.addEventListener('scroll', function (e) {
  var scroll = document.documentElement.scrollTop;

  if (scroll >= 100) {
    document.querySelector('body').classList.add('scroll');
  } else {
    document.querySelector('body').classList.remove('scroll');
  }
}); // mobile nav toggle code

var dropDowns = Array.from(document.querySelectorAll('#cs-navigation .cs-dropdown'));

var _loop = function _loop() {
  var item = _dropDowns[_i];

  var onClick = function onClick() {
    item.classList.toggle('cs-active');
  };

  item.addEventListener('click', onClick);
};

for (var _i = 0, _dropDowns = dropDowns; _i < _dropDowns.length; _i++) {
  _loop();
}