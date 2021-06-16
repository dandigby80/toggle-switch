'use strict';

const container = document.querySelector('.container');
const toggle = document.querySelector('.toggle');
const toggleBtn = document.querySelector('.toggle-btn');
const moon = document.getElementById('moon');
const sun = document.getElementById('sun');

toggle.addEventListener('click', function(){
  container.classList.toggle('container-light')
  toggleBtn.classList.toggle('on');
  toggle.classList.toggle('toggle-on');
  moon.classList.toggle('icon-off');
  sun.classList.toggle('icon-off');
})