const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});


document.addEventListener("DOMContentLoaded", function() {
    document.querySelector("form").addEventListener("submit", sendMail);
});

function sendMail() {
    event.preventDefault();
    let parms = {
        name : document.getElementById("name").value,
        mail : document.getElementById("mail").value,
        phone : document.getElementById("phone").value,
        adress : document.getElementById("adress").value,
        message : document.getElementById("message").value,
        solution: document.getElementById("btn__1").checked ? document.getElementById("btn__1").value : document.getElementById("btn__2").value,
    }
 
    
    emailjs.send("service_tradvard_gmail", "template_i833wmg", parms)
        .then(function(response) {
            console.log("Email sent successfully:", response);
            alert("Tack för ditt mail. Jag återkommer så fort jag kan! Vänliga hälsningar, Daniel");
            emailjs.send("service_tradvard_gmail", "template_epgaaud", parms);
            document.querySelector("form").reset();
        }, function(error) {
            console.error("Hoppsan, där gick något visst fel. Testa försök igen eller maila mig. Mina kontaktuppgifter finns längst ner på sidan. Error:", error);
            alert("Error: " + error);
        });

    

}

document.addEventListener("DOMContentLoaded", function() {
    emailjs.init(EMAILJS_PUBLIC_KEY);
    console.log("EmailJS initieras!");
});

document.addEventListener("DOMContentLoaded", function() {
    if (typeof EMAILJS_PUBLIC_KEY !== "undefined") {
        emailjs.init(EMAILJS_PUBLIC_KEY);
        console.log("EmailJS initieras!");
    } else {
        console.error("EMAILJS_PUBLIC_KEY är inte definierad!");
    }
});




