// script.js

// Function to handle form submission
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    
    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent the default form submission

        // Get form values
        const name = form.querySelector('input[type="text"]').value;
        const email = form.querySelector('input[type="email"]').value;
        const message = form.querySelector('textarea').value;

        // Simple form validation
        if (!name || !email || !message) {
            alert("Please fill in all fields.");
            return;
        }

        // Display success message
        alert(`Thank you, ${name}! Your message has been sent.`);

        // Optionally, clear the form fields
        form.reset();
    });
});
