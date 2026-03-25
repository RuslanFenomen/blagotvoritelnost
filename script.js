// Menu
function btnToggle(a, b, c) {
    const menu = document.querySelector(a)
    const menuBtn = document.querySelector(b)
    const menuLink = document.querySelectorAll(c)

    menuBtn.addEventListener('click', function () {
        menu.classList.toggle('menu--active')
    })

    menuLink.forEach(link => {
        link.addEventListener('click', function () {
            menu.classList.remove('menu--active')
        })
    })

    document.addEventListener('click', function (event) {
        if (menu.classList.contains('menu--active')) {
            if (!menu.contains(event.target)) {
                menu.classList.remove('menu--active')
            }
        }
    })
}

btnToggle('.menu', '.menu__btn', '.menu__link')

// Header fixed
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});