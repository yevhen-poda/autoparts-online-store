'use strict'

const navList = document.querySelector('.nav__list')

if (navList) {
  navList.addEventListener('click', function(evt) {
    const curTarget = evt.currentTarget
    const target = evt.target
    const activeLink = 'nav__link--active'
    if (target.classList.contains('nav__link')) {
      curTarget.querySelector('.' + activeLink).classList.remove(activeLink)
      target.classList.add(activeLink)
    }
  });
}
