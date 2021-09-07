const b1 = document.querySelector('.b1');
const mymenu = document.querySelector('.menu');

b1.addEventListener('click', function (){
    this.classList.toggle('is-active');
    mymenu.classList.toggle('is-active');
})
