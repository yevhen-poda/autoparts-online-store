'use strict'

document.body.classList.remove('no-js')

const menu = document.querySelector('.menu')
const menuToggle = document.querySelector('.header__menu-toggle')

if (menuToggle) {
  menuToggle.addEventListener('click', function(e) {
    if (menu) {
      e.currentTarget.classList.toggle('header__menu-toggle--active')
      document.body.classList.toggle('menu-opened')
    }
  })
}

const navList = document.querySelector('.nav__list')

if (navList) {
  navList.addEventListener('click', function(e) {
    const curTarget = e.currentTarget
    const target = e.target
    const activeLink = 'nav__link--active'
    if (target.classList.contains('nav__link')) {
      curTarget.querySelector('.' + activeLink).classList.remove(activeLink)
      target.classList.add(activeLink)
    }
  })
}
