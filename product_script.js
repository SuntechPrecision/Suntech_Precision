window.onload = function () {
    const menu_btn = document.querySelector('.hamburger');
    const menu_list = document.querySelector('.mobile-nav');

    menu_btn.addEventListener('click', function() {
        menu_btn.classList.toggle('is-active');
        menu_list.classList.toggle('is-active');
    });
}

const logos = document.querySelectorAll('#logo path')


for (let i = 0; i < logos.length; i++) {
    console.log(`Letter ${i} is ${logos[i].getTotalLength()}`);
    
}