// Function to toggle the answer visibility when the icon is clicked
document.querySelectorAll('.toggle-btn').forEach(button => {
    button.addEventListener('click', function() {
        // Find the answer section associated with the clicked button
        const faqItem = button.closest('.faq-item'); // Get the parent FAQ item
        const answer = faqItem.querySelector('.answer'); // Get the answer section within the item

        // Toggle the display of the answer
        if (answer.style.display === 'block') {
            answer.style.display = 'none'; // Hide the answer
        } else {
            answer.style.display = 'block'; // Show the answer
        }
    });
});
