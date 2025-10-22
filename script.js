function sendEmail(event) {
    event.preventDefault();
    let parms = {
        pname : document.getElementById("pname").value,
        email : document.getElementById("email").value,
        subject : document.getElementById("subject").value,
        message : document.getElementById("message").value,
    }
    emailjs.send("service_qlpbogc","template_3g1w45h",parms).then(alert("Email Sent!"))
    setTimeout(() => location.reload(), 300);
}