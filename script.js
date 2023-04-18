window.onload = function () {
    const menu_btn = document.querySelector('.hamburger');
    const menu_list = document.querySelector('.mobile-nav');

    menu_btn.addEventListener('click', function() {
        menu_btn.classList.toggle('is-active');
        menu_list.classList.toggle('is-active');
    });

    //JS code for sliding animation
    // const btns = document.querySelectorAll(".nav-btn");
    // const slides = document.querySelectorAll(".img-slide");

    // var sliderNav = function(manual) {
    //     btns.forEach((btn)=>{
    //         btn.classList.remove("btn-active");
    //     });
        
    //     slides.forEach((slide)=>{
    //         slide.classList.remove("slide-active");
    //     });

    //     btns[manual].classList.add("btn-active");
    //     slides[manual].classList.add("slide-active");
    // }

    // btns.forEach((btn, i) => {
    //     btn.addEventListener("click", ()=>{
    //         sliderNav(i);
    //     });
    // });

    // const leftArrow = document.querySelector(".arrow-left")
    // const rightArrow = document.querySelector(".arrow-right")

    // rightArrow.addEventListener("click", function(e) {
    //     e.preventDefault();
    //     nextSlide();
    // });

    // leftArrow.addEventListener("click", function (e) {
    //     e.preventDefault()
    //     prevSlide();
    // });

    // function nextSlide() {
    //     console.log(slides);
    //     var active = document.querySelector(".slide-active");
    //     var dot_btns = document.querySelector(".btn-active");
    //     // Unset Current Slide and Radio Button
    //     active.classList.remove("slide-active");
    //     dot_btns.classList.remove("btn-active");
    //     // Set Next Slide and Radio Button
    //     if (active.nextElementSibling) {
    //         dot_btns.nextElementSibling.classList.add("btn-active");
    //         active.nextElementSibling.classList.add("slide-active");
    //     } else if(dot_btns.length <= 3){
    //         dot_btns[0].classList.add("btn-active");
    //         slides[0].classList.add("slide-active");
    //     }
    //   }

    //   function prevSlide() {
    //     console.log(slides)
    //     var active = document.querySelector(".slide-active");
    //     var dot_btns = document.querySelector(".btn-active");
    //     // Unset Current Slide and Radio Button
    //     active.classList.remove("slide-active");
    //     dot_btns.classList.remove("btn-active");
    //     // Set Next Slide and Radio Button
    //     if (active.previousElementSibling) {
    //       active.previousElementSibling.classList.add("slide-active");
    //       dot_btns.nextElementSibling.classList.add("btn-active");
    //     } else {
    //       slides[slides.length - 1].classList.add("slide-active");
    //       dot_btns[slides.length - 1].classList.add("btn-active");
    //     }
    //   } 
}