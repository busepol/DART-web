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

const menuButton = document.getElementById('menu-button');
const sidebar = document.getElementById('sidebar');
const body = document.body;
const overlay = document.getElementById("overlay");

menuButton.addEventListener('click', function() {
    overlay.classList.toggle("visible");
    sidebar.classList.toggle('open'); 
});

body.addEventListener('click', function(event) {
    if (sidebar.classList.contains('open') && !sidebar.contains(event.target) && !menuButton.contains(event.target)) {
      overlay.classList.remove("visible");
      sidebar.classList.remove('open'); 
    }
    
  });

 
  sidebar.addEventListener('click', function(event) {
    event.stopPropagation(); 

});
