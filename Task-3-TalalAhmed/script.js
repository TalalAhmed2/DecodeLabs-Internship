function showMessage() {
    document.getElementById("content").innerHTML =
        "Button Clicked Successfully!";
}

function toggleContent() {

    let content = document.getElementById("content");

    if (content.style.display === "none") {
        content.style.display = "block";
    } else {
        content.style.display = "none";
    }
}

function changeText() {

    const messages = [
        "JavaScript makes webpages interactive!",
        "Dynamic content updated successfully!",
        "DOM Manipulation in action!",
        "Interactivity improves user experience!"
    ];

    let random = Math.floor(Math.random() * messages.length);

    document.getElementById("content").innerHTML =
        messages[random];
}

function toggleTheme() {

    document.body.classList.toggle("dark");

    const button = document.querySelector(".dark-btn");

    if (document.body.classList.contains("dark")) {
        button.innerHTML = "☀️ Light Mode";
    } else {
        button.innerHTML = "🌙 Dark Mode";
    }
}