document.addEventListener('DOMContentLoaded', () => {
    const loggedInUser = localStorage.getItem('loggedInUser');
    const actionsDiv = document.querySelector('.actions');
    if (loggedInUser) {
        actionsDiv.innerHTML = `<span>Welcome, ${loggedInUser}</span> <button class="logout" onclick="logout()">Logout</button>`;
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