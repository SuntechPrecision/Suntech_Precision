const username = document.getElementById("Name");
const email = document.getElementById("Emali");
const subject = document.getElementById("Subject");
const message = document.getElementById("Message");
const submit = document.getElementsByClassName('form-email')[0];

// const emailSubscribe = document.getElementById('normal');
// const subscriptionMail = document.getElementById('email-subscribe');

submit.addEventListener('submit', (e) => {
    e.preventDefault();
    const body = 'Name: ' + username.value + '<br>Email: ' + email.value + '<br>Subject: ' + subject.value + '<br>Message: ' + message.value;
    console.log(body);
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "tanmoytssaha@gmail.com",
        Password: "DCB6F54D465F833A28AEC4425AEF9D7D6D5D",
        To: 'suntechprecision2017@gmail.com',
        From: "tanmoytssaha@gmail.com",
        Subject: "Sun Tech Precision Contact Form",
        Body: body,
    }).then(
        (message) => {
            if(message == 'OK'){
                alert("Email has been sent successfully");
            } else {
                alert(message)
            }
        }
    );
})

window.onload = function() {
    const menu_btn = document.querySelector('.hamburger');
    const menu_list = document.querySelector('.mobile-nav');

    menu_btn.addEventListener('click', function() {
        menu_btn.classList.toggle('is-active');
        menu_list.classList.toggle('is-active');
    });
}