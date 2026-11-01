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

function searchProducts() {

    let input =
        document.getElementById("searchBox");

    let filter =
        input.value.toLowerCase();

    let items =
        document.getElementsByClassName("order-item");

    for (let i = 0; i < items.length; i++) {

        let text =
            items[i].textContent.toLowerCase();

        if (text.includes(filter)) {
            items[i].style.display = "";
        } else {
            items[i].style.display = "none";
        }
    }
}

document.addEventListener("DOMContentLoaded", function () {

    const enquiryForm =
        document.getElementById("enquiryForm");

    if (enquiryForm) {

        enquiryForm.addEventListener("submit", function (event) {

            event.preventDefault();

            const product =
                document.getElementById("product").value;

            const quantity =
                document.getElementById("quantity").value;

            const response =
                document.getElementById("response");

            response.innerHTML =
                "Thank you for your enquiry about "
                + quantity + " "
                + product +
                ". We will contact you shortly regarding pricing and availability.";
        });
    }
});