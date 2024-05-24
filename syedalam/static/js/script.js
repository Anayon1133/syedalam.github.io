document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggleButton');
    toggleButton.addEventListener('click', toggleNightMode);
});

function toggleNightMode() {
    document.body.classList.toggle('night-mode');
}