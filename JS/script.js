function sendOrder() {
    let order = document.getElementById("orderText").value;

    if (order.trim() === "") {
        alert("Please enter your order details.");
        return;
    }

    window.location.href = "thankyou.html";
}
