const { documentElement: html, body } = document
const burgerButton = document.querySelector(".icon-menu")
const pageWrapper = document.querySelector(".wrapper")
const lockPaddingElements = document.querySelectorAll(".lock-padding")
const headerSubMenu = document.querySelector(".header__submenu")
const userAccountButton = document.querySelector('.header__account-btn')
const menuLinks = document.querySelectorAll('[data-go-to]');
/*
* Универсальная функция для блокировки скрола при открытии модальных окон
* При открытии модального окна вызываем: toggleBodyLock(true)
* При закрытии окна вызываем: toggleBodyLock(false)
*/
const toggleBodyLock = (isLock) => {
  console.log(isLock);
  const lockPaddingValue = window.innerWidth - pageWrapper.offsetWidth

  setTimeout(() => {
    if (lockPaddingElements) {
      lockPaddingElements.forEach((element) => {
        element.style.paddingRight = isLock ? `${lockPaddingValue}px` : '0px'
      })
    }

    body.style.paddingRight = isLock ? `${lockPaddingValue}px` : '0px'
    body.classList.toggle('lock', isLock)
  }, isLock ? 0 : 500)
}

const menuInit = () => {
  if (burgerButton) {
    document.addEventListener('click', ({ target }) => {
      if (target.closest('.icon-menu')) {
        html.classList.toggle('menu-open')
        toggleBodyLock(html.classList.contains('menu-open'))
      }
    })
  }
}

menuInit()
