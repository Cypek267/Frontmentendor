const questions = document.querySelectorAll('.faq-question');

questions.forEach(question => {
  question.addEventListener('click', () => {
    const faqItem = question.parentElement;
    const answer = faqItem.querySelector('.faq-answer');
    const icon = question.querySelector('.icon');

    const isOpen =
      question.getAttribute('aria-expanded') === 'true';

    // Close all items
    document.querySelectorAll('.faq-item').forEach(item => {
      item.classList.remove('active');

      item
        .querySelector('.faq-question')
        .setAttribute('aria-expanded', 'false');

      item.querySelector('.icon').src =
        './assets/images/icon-plus.svg';
    });

    // Open clicked item
    if (!isOpen) {
      faqItem.classList.add('active');

      question.setAttribute('aria-expanded', 'true');

      icon.src =
        './assets/images/icon-minus.svg';
    }
  });
});
