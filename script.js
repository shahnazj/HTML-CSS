const menuBtn = document.querySelector('.menu-btn')
const mainMenu = document.querySelector('#main-menu')

mainMenu.classList.add('hello')

menuBtn.addEventListener('click', () =>{
    const isExpanded = menuBtn.getAttribute('aria-expanded') === 'true'
    if(isExpanded){
        menuBtn.setAttribute('aria-expanded', false)
        mainMenu.addEventListener('animationend', () => {
            mainMenu.classList.add('hide')
        }, {once: true})
    }else{
        mainMenu.classList.remove('hide')
        menuBtn.setAttribute('aria-expanded', true)
    }
})