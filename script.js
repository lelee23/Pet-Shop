let loginForm = document.querySelector('.header .login-form');

document.querySelector('#login-btn').onclick = () =>{
    loginForm.classList.toggle('active');
    navbar.classList.remove('show');

}

let navbar= document.querySelector('.header .navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('show');
    loginForm.classList.remove('active');

}
window.onscroll = () =>{
    loginForm.classList.remove('active');
    navbar.classList.remove('show');



    if(window.scrollY > 0){
        document.querySelector('.header').classList.add('nav');        
    }else{
        document.querySelector('.header').classList.remove('nav')
    }
}

window.onload = () =>{
    if(window.scrollY > 0){
        document.querySelector('.header').classList.add('nav');        
    }else{
        document.querySelector('.header').classList.remove('nav')
    }
}