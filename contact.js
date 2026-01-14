document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let subject = document.getElementById("subject").value.trim();
    let message = document.getElementById("message").value.trim();
    let status = document.getElementById("status");

    if (name === "" || email === "" || subject === "" || message === "") {
        status.style.color = "red";
        status.innerHTML = "Please fill in all fields.";
    } else {
        status.style.color = "green";
        status.innerHTML = "Message sent successfully!";
        document.getElementById("contactForm").reset();
    }
});
