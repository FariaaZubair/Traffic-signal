function checkSignal() {
    var color = prompt("Enter color of traffic signal (red, yellow, green)").toLowerCase();

    var messageElement = document.getElementById('message');

    if (color === "red") {
        messageElement.textContent = "Must Stop!";
        document.querySelector('.red').classList.add('active');
    } else if (color === "yellow") {
        messageElement.textContent = "Ready to Move!";
        document.querySelector('.yellow').classList.add('active');
    } else if (color === "green") {
        messageElement.textContent = "Move Now!";
        document.querySelector('.green').classList.add('active');
    } else {
        messageElement.textContent = "Invalid Color! Please enter red, yellow, or green.";
    }
}
