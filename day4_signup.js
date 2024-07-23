document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Example of processing the signup data
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Password:', password);

    // Simulate successful signup (in a real scenario, you would send the data to a server)
    alert('Signup successful! Redirecting to login page...');

    // Redirect to login.html
    window.location.href = 'login.html';
});