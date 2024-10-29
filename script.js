const labels = document.querySelectorAll(".form-control label");

labels.forEach(label => {
    label.innerHTML = label.innerText
        .split("")
        .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
        .join("");
});

document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    if (email && password) {
        alert("Login successful!");
    }
});
