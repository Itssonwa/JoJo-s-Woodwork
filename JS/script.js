function sendOrder() {
    let order = document.getElementById("orderText").value;

    if (order.trim() === "") {
        alert("Please enter your order details.");
        return;
    }

    window.location.href = "thankyou.html";
}
document.addEventListener("DOMContentLoaded", function () {

    const contactForm =
        document.getElementById("contactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const name =
                document.getElementById("name").value;
            const email =
                document.getElementById("email").value;
            const message =
                document.getElementById("message").value;
            if (
                name.trim() === "" ||
                email.trim() === "" ||
                message.trim() === ""
            ) {
                alert("Please fill in all fields.");
                return;
            }
            alert("Message sent successfully!");
        });
    }
});