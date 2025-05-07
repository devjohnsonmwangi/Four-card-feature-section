// script.js
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
    const modal = document.getElementById('cardModal');
    const modalTitle = modal?.querySelector('h2');
    const modalDetails = modal?.querySelector('.details');
    const closeBtn = modal?.querySelector('.close');

    // Add the correct types for TypeScript purposes
    if (!modalTitle || !modalDetails || !closeBtn || !modal) {
        console.error('Modal or its elements not found');
        return;
    }

    // Function to show the modal
    const showModal = (title, details) => {
        if (modalTitle && modalDetails) {
            modalTitle.textContent = title;
            modalDetails.textContent = details;
        }
        modal.style.display = "block";
    }

    // Function to close the modal
    const closeModal = () => {
        modal.style.display = "none";
    }

    // Add click event listeners to each card
    cards.forEach(card => {
        card.addEventListener('click', () => {
            const title = card.querySelector('h3')?.textContent || 'Card Title';
            const details = card.dataset.details || 'No details provided.';
            showModal(title, details);
        });
    });

    // Add close event listener to the close button
    closeBtn.addEventListener('click', closeModal);

    // Add click event listener to the window to close the modal
    window.addEventListener('click', (event) => {
        if (event.target == modal) {
            closeModal();
        }
    });
});