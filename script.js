
let navBar = document.getElementById("header-rolar");


document.addEventListener('scroll', () => {
    if(scrollY > 0) {
        navBar.classList.add('ativabar')
    }else {
        navBar.classList.remove('ativabar')
    }
})