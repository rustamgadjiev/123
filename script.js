const modal = document.querySelector('.request-modal');
const buttons = document.querySelectorAll('.request-btn');

const modalClose = document.querySelector('.request-modal-close');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
});

modalClose.addEventListener('click', () => {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
});