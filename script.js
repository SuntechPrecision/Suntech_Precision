window.onload = function () {
    const menu_btn = document.querySelector('.hamburger');
    const menu_list = document.querySelector('.mobile-nav');

    menu_btn.addEventListener('click', function() {
        menu_btn.classList.toggle('is-active');
        menu_list.classList.toggle('is-active');
    });

    // menu_list.addEventListener('click', function() {
    //     menu_list.classList.toggle('is-active');
    // });
}