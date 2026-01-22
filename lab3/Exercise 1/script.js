const form = document.querySelector('#registrationForm');
const roleSelect = document.querySelector('#role');
const submitBtn = document.querySelector('#submitBtn');
const skillsBox = document.querySelector('#skillsBox');
const pwdHint = document.querySelector('#pwdHint');
const strengthBar = document.querySelector('.strength span');

const FIELDS = ['name', 'email', 'age', 'password', 'confirmPassword'];

const validators = {
    name: v => v.trim() ? "" : "Name is required",

    email: v =>
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)
            ? ""
            : "Invalid email address",

    age: (v, role) => {
        const n = Number(v);
        if (!n) return "Age is required";
        if (role === 'Student' && (n < 5 || n > 100)) return "Student: 5–100";
        if (role === 'Teacher' && n < 21) return "Teacher: 21+";
        if (role === 'Admin' && n < 18) return "Admin: 18+";
        return "";
    },

    password: (v, role) => {
        if (role === 'Admin') {
            return v.length >= 10 && /[!@#$%^&*]/.test(v)
                ? ""
                : "10+ chars & symbol required";
        }
        return v.length >= 6 ? "" : "Minimum 6 characters";
    },

    confirmPassword: (v) =>
        v === password.value ? "" : "Passwords do not match"
};

function setError(id, msg) {
    const input = document.getElementById(id);
    const error = document.getElementById(id + 'Error');
    input.classList.toggle('invalid', !!msg);
    error.textContent = msg;
}

function updatePasswordStrength(pwd) {
    if (!pwd) {
        strengthBar.style.width = '0%';
        return;
    }
    if (pwd.length >= 10) {
        strengthBar.style.width = '100%';
        strengthBar.style.background = '#22c55e';
    } else {
        strengthBar.style.width = '40%';
        strengthBar.style.background = '#facc15';
    }
}

function updateRoleUI(role) {
    if (role === 'Admin') {
        skillsBox.style.display = 'none';
        pwdHint.textContent = '(min 10 chars + symbol)';
    } else {
        skillsBox.style.display = 'block';
        pwdHint.textContent = '(min 6 chars)';
    }
}

function validateForm() {
    const role = roleSelect.value;
    let valid = true;

    FIELDS.forEach(id => {
        const value = document.getElementById(id).value;
        const error = validators[id]
            ? validators[id](value, role)
            : "";
        setError(id, error);
        if (error) valid = false;
    });

    updatePasswordStrength(password.value);
    submitBtn.disabled = !valid;
    return valid;
}

roleSelect.addEventListener('change', () => {
    updateRoleUI(roleSelect.value);
    validateForm();
});

form.addEventListener('input', validateForm);

form.addEventListener('submit', e => {
    e.preventDefault();
    if (!validateForm()) return;
    alert('Registration Successful!');
    form.reset();
    strengthBar.style.width = '0%';
    validateForm();
});

updateRoleUI(roleSelect.value);
validateForm();
