let questions = document.querySelectorAll('.list-item .question');
questions.forEach((question) => {
    question.addEventListener('click', () => {
        let listItem = question.parentElement;
        let isActive =listItem.classList.contains('active');
        document.querySelectorAll('.list-item').forEach((item) => {
            item.classList.remove('active');
            item.querySelector('.question img').src = './assets/images/icon-plus.svg';
        });
        if (!isActive) {
            listItem.classList.add('active');
            listItem.querySelector('.question img').src = './assets/images/icon-minus.svg';
        }
    });
});
