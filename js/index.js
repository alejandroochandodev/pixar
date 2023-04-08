
const headerHamburguesa = document.querySelector(`.Header-hamburguesa`)
console.log(headerHamburguesa)

const headerClose = document.querySelector(`.Header-close`)
console.log(headerClose)

const headerNav = document.querySelector(`.Header-nav`)
console.log(headerNav)

headerHamburguesa.addEventListener(`click` , () => {
    headerNav.classList.add(`isActive`)
    headerClose.classList.add(`isActive`)
    headerHamburguesa.classList.add(`isInactive`)
})

headerClose.addEventListener(`click` , () => {
    headerNav.classList.remove(`isActive`)
    headerClose.classList.remove(`isActive`)
    headerHamburguesa.classList.remove(`isInactive`)
})