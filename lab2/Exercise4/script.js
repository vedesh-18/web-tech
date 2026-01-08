document.getElementById("userForm").addEventListener("submit", registerUser);
displayUsers();

function registerUser(e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const mobile = document.getElementById("mobile").value.trim();
    const password = document.getElementById("password").value.trim();
    const error = document.getElementById("error");

    if (!name || !email || !mobile || !password) {
        error.innerText = "All fields are mandatory";
        return;
    }

    if (mobile.length !== 10 || isNaN(mobile)) {
        error.innerText = "Mobile number must be 10 digits";
        return;
    }

    if (password.length < 6) {
        error.innerText = "Password must be minimum 6 characters";
        return;
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];

    if (users.some(u => u.email === email)) {
        error.innerText = "Email already registered";
        return;
    }

    if (users.some(u => u.mobile === mobile)) {
        error.innerText = "Mobile number already registered";
        return;
    }

    users.push({ name, email, mobile, password });
    localStorage.setItem("users", JSON.stringify(users));

    error.innerText = "";
    document.getElementById("userForm").reset();
    displayUsers();
}

function displayUsers() {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const table = document.getElementById("userTable");
    table.innerHTML = "";

    users.forEach((user, index) => {
        table.innerHTML += `
            <tr>
                <td>${user.name}</td>
                <td>${user.email}</td>
                <td>${user.mobile}</td>
                <td>
                    <button class="delete-btn" onclick="deleteUser(${index})">
                        Delete
                    </button>
                </td>
            </tr>
        `;
    });
}

function deleteUser(index) {
    let users = JSON.parse(localStorage.getItem("users")) || [];
    users.splice(index, 1);
    localStorage.setItem("users", JSON.stringify(users));
    displayUsers();

    if (users.length === 0) {
        showSuccessToast();
    }
}

function clearAllUsers() {
    localStorage.removeItem("users");
    displayUsers();
    showSuccessToast();
}

function showSuccessToast() {
    const toast = document.getElementById("successToast");
    toast.style.display = "flex";

    setTimeout(() => {
        toast.style.display = "none";
    }, 2000);
}
