document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    // Example of processing the login data
    console.log('Username:', username);
    console.log('Password:', password);

    // Simulate successful login (in a real scenario, you would send the data to a server)
    alert('Login successful! Redirecting to welcome page...');

    // Redirect to welcome.html
    window.location.href = 'welcome.html';
});