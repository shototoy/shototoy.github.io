const modalBackdrop = document.getElementById('modal-backdrop');

function openModal() {
    modalBackdrop.style.display = 'flex';
    // Small timeout to allow display:flex to apply before adding opacity class for transition
    setTimeout(() => {
        modalBackdrop.classList.add('active');
    }, 10);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

function closeModal() {
    modalBackdrop.classList.remove('active');
    setTimeout(() => {
        modalBackdrop.style.display = 'none';
        document.body.style.overflow = '';
    }, 300); // Match transition duration
}

function handleBackdropClick(event) {
    if (event.target === modalBackdrop) {
        closeModal();
    }
}

// Close on Escape key
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && modalBackdrop.classList.contains('active')) {
        closeModal();
    }
});
