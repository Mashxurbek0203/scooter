var burger = document.querySelector('.header-burger-btn');
var nav = document.querySelector('.header-nav-container');
var body = document.querySelector('.body');
var span = document.querySelector('.header-burger-btn__span');
var question = document.querySelector('.question-item__btn');
var answer = document.querySelector('.question-item__description');



burger.addEventListener("click", function () {
    nav.classList.toggle('header-nav-container--active');
    burger.classList.toggle('header-burger-btn--active');
    span.classList.toggle('header-burger-btn--active__span');
    body.classList.toggle('body--hidden')
    
})



question.addEventListener("click", function () {
    answer.classList.toggle('question-item__description--active')
    question.classList.toggle('question-item__btn--active')

})