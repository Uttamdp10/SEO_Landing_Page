var menubar = document.querySelector('#menu-bar')
var mynav = document.querySelector('.navbar')


menubar.onclick = () =>{
    menubar.classList.toggle('fa-times')
    mynav.classList.toggle('active')
}

const navbar = document.querySelector('.header')

window.onscroll = () =>{
    if(window.scrollY > 300){
        navbar.classList.add('active')
    }
    else{
        navbar.classList.remove('active')
    }
}