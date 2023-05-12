window.onload = function () {
    const menu_btn = document.querySelector('.hamburger');
    const menu_list = document.querySelector('.mobile-nav');
    const product_btn = document.querySelectorAll('.remarkable-card');
    const product_list = document.querySelectorAll('.product-cards');

    menu_btn.addEventListener('click', function() {
        menu_btn.classList.toggle('is-active');
        menu_list.classList.toggle('is-active');
    });

    product_btn.forEach((button) => {
        button.addEventListener('click', () => {
            product_btn.forEach((button) => {
                button.classList.remove('active');
            });

            button.classList.add('active');

            const category = button.getAttribute('data-filter');

            product_list.forEach((product) => {
                if (category === 'all') {
                    product.classList.add('active-cards');
                } else if (product.getAttribute('data-category') === category) {
                    product.classList.add('active-cards');
                } else {
                    product.classList.remove('active-cards');
                }
            });
        });
    });
}

const logos = document.querySelectorAll('#logo path')


for (let i = 0; i < logos.length; i++) {
    console.log(`Letter ${i} is ${logos[i].getTotalLength()}`);
    
}