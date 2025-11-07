export function questionsInit() {
    const questions = document.querySelectorAll('.js-question');

    questions.forEach((question) => {
        const btn = question.querySelector('.js-question-button');
        const textWrapper = question.querySelector('.js-question-text');
        const plusIcon = question.querySelector('.question__plus-icon');
        const minusIcon = question.querySelector('.question__minus-icon');

        const titleWrapper = question.querySelector('.question__title-wrapper');

        titleWrapper.addEventListener('click', () => {
            const isActive = question.classList.contains('active');

            questions.forEach((item) => {
                item.classList.remove('active');
                const wrapper = item.querySelector('.js-question-text');
                const plus = item.querySelector('.question__plus-icon');
                const minus = item.querySelector('.question__minus-icon');
                wrapper.style.maxHeight = null;
                plus.style.display = 'block';
                minus.style.display = 'none';
            });

            if (!isActive) {
                question.classList.add('active');
                textWrapper.style.maxHeight = textWrapper.scrollHeight + 'px';
                plusIcon.style.display = 'none';
                minusIcon.style.display = 'block';
            }
        });
    });
}