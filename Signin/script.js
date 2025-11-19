document.getElementById("btn1").addEventListener("click", function () {

    let fname = document.getElementById("txt");
    let mobile = document.getElementById("tele");
    let mail = document.getElementById("mail");
    let docid = document.getElementById("num");
    let password = document.getElementById("pwd");

    // Name
    if (fname.value === "") {
        alert("Enter your fullname");
        return;
    }

    // Mobile
    if (mobile.value === "") {
        alert("Enter your Mobile Number");
        return;
    }
    if (mobile.value.length !== 10 || isNaN(mobile.value)) {
        alert("Enter only numbers and 10 digits only!");
        return;
    }

    // Mail
    if (mail.value === "") {
        alert("Enter your mail");
        return;
    }
    if (!mail.value.includes("@") || !mail.value.includes(".")) {
        alert("Invalid E-Mail!");
        return;
    }

    // ID
    if (docid.value === "") {
        alert("Enter your ID");
        return;
    }

    // Password
    if (password.value === "") {
        alert("Enter your password");
        return;
    }

    // Password validation patterns
    let upperCase = /[A-Z]/;
    let number = /[0-9]/;
    let symbol = /[!@#$%^&*(),.?":{}|<>]/;

    if (!upperCase.test(password.value)) {
        alert("Password must contain at least ONE uppercase letter");
        return;
    }
    if (!number.test(password.value)) {
        alert("Password must contain at least ONE number");
        return;
    }
    if (!symbol.test(password.value)) {
        alert("Password must contain at least ONE special symbol");
        return;
    }

    alert("Created Successfully!");
});
