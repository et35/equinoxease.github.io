document.addEventListener('DOMContentLoaded', () => {
    // Example JS for form submission or interactivity if needed in future
    const form = document.querySelector('form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your message!');
    });
});
