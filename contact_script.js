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
        To: 'tanmoysaha@ieee.org',
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

// emailSubscribe.addEventListener('normal', (e)=> {
//     e.preventDefault();
//     Email.send({
//         Host: "smtp.elasticemail.com",
//         Username: "tanmoytssaha@gmail.com",
//         Password: "DCB6F54D465F833A28AEC4425AEF9D7D6D5D",
//         To: 'tanmoysaha@ieee.org',
//         From: "tanmoytssaha@gmail.com",
//         Subject: "Sun Tech Precision subscription mail",
//         Body: subscriptionMail + " <br>This email address wants to subscribe your email newsletter.<br>Please this email to your email newsletter.",
//     }).then(
//         (message) => {
//             if(message == 'OK'){
//                 alert("Email has been sent successfully");
//             } else {
//                 alert(message)
//             }
//         }
//     );
// })