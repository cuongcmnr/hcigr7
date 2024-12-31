document.addEventListener('DOMContentLoaded', () => {
    const loggedInUser = localStorage.getItem('loggedInUser');
    const actionsDiv = document.querySelector('.actions');
    if (loggedInUser) {
        actionsDiv.innerHTML = `
        <button class="review" onclick="location.href='select-place.html'">Write a Review</button>
        <button class="plan" onclick="location.href='plan-trip.html'">Plan Your Trip</button>
        <span>Welcome, ${loggedInUser}</span> <button class="logout" onclick="logout()">Logout</button>`;
    }

    const header = document.querySelector('.custom-header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 1) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
});

// Logout function
function logout() {
    localStorage.removeItem('loggedInUser');
    window.location.reload();
}
