const passwordEl = document.getElementById("password");
const lengthEl = document.getElementById("length");
const lengthValue = document.getElementById("lengthValue");
const uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");
const generateBtn = document.getElementById("generateBtn");
const copyBtn = document.getElementById("copyBtn");

const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerChars = "abcdefghijklmnopqrstuvwxyz";
const numberChars = "0123456789";
const symbolChars = "!@#$%^&*()_+[]{}|;:,.<>?";

// Update slider value
lengthEl.addEventListener("input", () => {
    lengthValue.textContent = lengthEl.value;
});

// Generate password
generateBtn.addEventListener("click", () => {
    let chars = "";

    if (uppercaseEl.checked) chars += upperChars;
    if (lowercaseEl.checked) chars += lowerChars;
    if (numbersEl.checked) chars += numberChars;
    if (symbolsEl.checked) chars += symbolChars;

    if (chars === "") {
        alert("Select at least one option!");
        return;
    }

    let password = "";

    for (let i = 0; i < lengthEl.value; i++) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        password += chars[randomIndex];
    }

    passwordEl.value = password;
});

// Copy password
copyBtn.addEventListener("click", () => {
    if (passwordEl.value === "") {
        alert("Generate a password first!");
        return;
    }

    navigator.clipboard.writeText(passwordEl.value);
    alert("Password copied to clipboard!");
});