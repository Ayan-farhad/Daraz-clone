// function isValidEmail(email) {
//     // Simple email format validation
//     return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
// }

// function login() {
//     // Get user input
//     var email = document.getElementById('email').value;
//     var password = document.getElementById('password').value;

//     // Check if both fields are filled
//     if (email === "" || password === "") {
//         alert("Please fill in both email and password fields.");
//     } else if (!isValidEmail(email)) {
//         alert("Please enter a valid email address.");
//     } else {
//         // Save to localStorage
//         localStorage.setItem('userEmail', email);
//         localStorage.setItem('userPassword', password);

//         // Redirect to the next page (replace 'nextpage.html' with your actual next page)
//         window.location.href = 'index.html';
//     }
// }

function isValidEmail(email) {
    // Simple email format validation
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function signup() {
    // Get user input
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    // Check if both fields are filled
    if (email === "" || password === "") {
        alert("Please fill in both email and password fields.");
    } else if (!isValidEmail(email)) {
        alert("Please enter a valid email address.");
    } else {
        // Save to localStorage
        localStorage.setItem('userEmail', email);
        localStorage.setItem('userPassword', password);

        // Optionally, you can redirect to a login page or any other page after signup
        window.location.href = 'index.html';
    }
}