function validateSignInForm() {
    const emailOrPhone = document.getElementById('email-phone').value;
    const password = document.getElementById('password').value;

    if (!emailOrPhone || !password) {
        alert("Please fill in all fields.");
        return false;
    }

    // Email or phone validation logic can be added here.

    return true;
}

// Predefined credentials for demonstration purposes
const validEmail = "user@example.com";
const validPassword = "password123";

document.getElementById("signin-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Get user input values
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Validate credentials
    if (email === validEmail && password === validPassword) {
        // Redirect to the protected page if valid credentials
        window.location.href = "courses.html";
    } else {
        // Show error message if credentials are invalid
        document.getElementById("error-message").style.display = "block";
    }
});


document.getElementById('paymentForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    
    const cardName = document.getElementById('cardName').value;
    const cardNumber = document.getElementById('cardNumber').value;
    const expiryDate = document.getElementById('expiryDate').value;
    const cvv = document.getElementById('cvv').value;
    const amount = document.getElementById('amount').value;
    const errorMessage = document.getElementById('error-message');

    // Validate form inputs
    if (validateForm(cardName, cardNumber, expiryDate, cvv, amount)) {
        alert('Payment Successful');
        errorMessage.textContent = '';
        document.getElementById('paymentForm').reset();
    } else {
        errorMessage.textContent = 'Please fill out all fields correctly.';
    }
});

function validateForm(cardName, cardNumber, expiryDate, cvv, amount) {
    const cardNumberRegex = /^[0-9]{16}$/;
    const expiryDateRegex = /^(0[1-9]|1[0-2])\/[0-9]{2}$/;
    const cvvRegex = /^[0-9]{3}$/;
    
    if (cardName === '' || !cardNumberRegex.test(cardNumber) || 
        !expiryDateRegex.test(expiryDate) || !cvvRegex.test(cvv) || amount <= 0) {
        return false;
    }
    return true;
}

document.getElementById('submitBtn').addEventListener('click', function (e) {
    e.preventDefault(); // Prevent the form from submitting or reloading the page

    // Get UTIR input value
    const utirNumber = document.getElementById('utirNumber').value;

    // Validate UTIR number
    if (utirNumber === '') {
        alert('Please enter the UTIR number');
        return;
    }

    // Show success message
    alert('Payment successful! Kindly check your mail for ID and Password');
});
