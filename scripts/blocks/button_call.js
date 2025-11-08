export function InitOpenningForm() {
  const modal = document.getElementById('modal-form');
  
  // Всі кнопки які мають відкривати форму
  const openButtons = document.querySelectorAll('.hero__call-button, .offer__button, .special-offer__button, .header__call-button');
  
  // Відкриття модалки при кліку на будь-яку кнопку
  openButtons.forEach(button => {
    button.addEventListener('click', () => {
      modal.classList.add('is-open');
    });
  });

  // Закриття модалки при кліку на хрестик або backdrop
  document.querySelectorAll('[data-close-modal]').forEach((el) => {
    el.addEventListener('click', () => {
      modal.classList.remove('is-open');
    });
  });

  // Закриття модалки при кліку поза модалкою
  document.addEventListener('click', (e) => {
    if (modal.classList.contains('is-open') && e.target.classList.contains('modal__backdrop')) {
      modal.classList.remove('is-open');
    }
  });

  // Ініціалізація EmailJS
  emailjs.init("go-idoMc480xV0FTr");

  const form = document.getElementById("form");
  if (form) {
    form.addEventListener("submit", function(e) {
      e.preventDefault();
  
      const params = {
        name: document.getElementById("name").value,
        phone: document.getElementById("phone").value,
        email: document.getElementById("email").value
      };
  
      emailjs.send("service_rsacy8c", "template_mdyi18a", params)
        .then(() => {
          alert("Успішно надіслано!");
          form.reset();
          modal.classList.remove('is-open');
        })
        .catch((err) => {
          alert("Помилка: " + JSON.stringify(err));
        });
    });
  } else {
    console.log("Form not found");
  }
}