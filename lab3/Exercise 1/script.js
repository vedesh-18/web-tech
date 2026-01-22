const form = document.getElementById("registerForm");
const role = document.getElementById("role");
const skillsBox = document.getElementById("skillsBox");

role.addEventListener("change", () => {
    if (role.value === "teacher" || role.value === "admin") {
        skillsBox.style.display = "block";
    } else {
        skillsBox.style.display = "none";
    }
});

function showError(id, msg) {
    document.getElementById(id).innerText = msg;
}

function validateEmail(email, role) {
    if (role === "teacher" && !email.endsWith("@school.edu")) return false;
    if (role === "admin" && !email.endsWith("@admin.org")) return false;
    return true;
}

function validatePassword(password, role) {
    if (role === "student") return password.length >= 6;
    if (role === "teacher") return password.length >= 8;
    if (role === "admin")
        return password.length >= 10 &&
               /[A-Z]/.test(password) &&
               /[0-9]/.test(password) &&
               /[@#$%!]/.test(password);
}

form.addEventListener("submit", function (e) {
    e.preventDefault();

    let valid = true;

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const age = document.getElementById("age").value;

    if (name === "") {
        showError("nameErr", "Name required");
        valid = false;
    }

    if (!validateEmail(email, role.value)) {
        showError("emailErr", "Invalid email domain");
        valid = false;
    }

    if (!validatePassword(password, role.value)) {
        showError("passErr", "Weak password for selected role");
        valid = false;
    }

    if (password !== confirmPassword) {
        showError("confirmErr", "Passwords do not match");
        valid = false;
    }

    if (age < 18) {
        showError("ageErr", "Age must be 18+");
        valid = false;
    }

    if (role.value === "") {
        showError("roleErr", "Select a role");
        valid = false;
    }

    if (valid) {
        alert("Registration Successful!");
        form.reset();
        skillsBox.style.display = "none";
    }
});
