export function InitOpenningForm() {
  const modal = document.getElementById('modal-form');

  const openButtons = document.querySelectorAll('.hero__call-button, .offer__button, .special-offer__button, .header__call-button');

  openButtons.forEach(button => {
    button.addEventListener('click', () => {
      modal.classList.add('is-open');
    });
  });

  document.querySelectorAll('[data-close-modal]').forEach((el) => {
    el.addEventListener('click', () => {
      modal.classList.remove('is-open');
    });
  });

  document.addEventListener('click', (e) => {
    if (modal.classList.contains('is-open') && e.target.classList.contains('modal__backdrop')) {
      modal.classList.remove('is-open');
    }
  });

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