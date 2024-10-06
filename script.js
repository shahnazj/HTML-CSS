const menuBtn = document.querySelector('.menu-btn')
const mainMenu = document.querySelector('#main-menu')
const darkModeSwitch = document.querySelector('#darkmode-switch')
const hasSetDarkMode = localStorage.getItem('darkmode')

menuBtn.addEventListener('click', () => {
    const isExpanded = menuBtn.getAttribute('aria-expanded') === 'true'
    
    if(isExpanded){
        menuBtn.setAttribute('aria-expanded', false)
        mainMenu.addEventListener('animationend', () => {
            mainMenu.classList.add('hide')
        }, {once: true})
    }else{
        mainMenu.classList.remove('hide')
        menuBtn.setAttribute('aria-expanded', true);
    }
})



if(hasSetDarkMode == null){
    if(window.matchMedia('(preferes-color-schem): dark').matches){
        enableDarkMode()
    }else{
        disableDarkMode()
    }
}else if(hasSetDarkMode == 'on'){
    enableDarkMode()
}else if(hasSetDarkMode == 'off'){
    disableDarkMode()
}



darkModeSwitch.addEventListener('change', () => {
    if(darkModeSwitch.checked){
        document.documentElement.classList.add('dark')
        localStorage.setItem('darkMode', 'on')
    }else{
        document.documentElement.classList.remove('dark')
        localStorage.setItem('darkMode', 'off')
    }
})

function enableDarkMode(){
    darkModeSwitch.checked = true
    document.documentElement.classList.add('dark')
}

function disableDarkMode(){
    darkModeSwitch.checked = false
    document.documentElement.classList.remove('dark')
}

// FAQ part codes
const faqQuestions = document.querySelectorAll('.faq-question');
faqQuestions.forEach(question => {
  question.addEventListener('click', () => {
    const answer = question.nextElementSibling;
    question.classList.toggle('active');
    answer.classList.toggle('active');
    if (answer.classList.contains('active')) {
      answer.style.maxHeight = answer.scrollHeight + 'px';
    } else {
      answer.style.maxHeight = '0';
    }
  });
});