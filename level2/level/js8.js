document.addEventListener("DOMContentLoaded", function() {
  const openFormBtn = document.getElementById("openFormBtn");
  const closeFormBtn = document.getElementById("closeForm");
  const feedbackForm = document.getElementById("feedbackForm");
  const contactForm = document.getElementById("contactForm");
  const responseMessage = document.getElementById("responseMessage");

  openFormBtn.addEventListener("click", function() {
    feedbackForm.style.display = "block";
  });

  closeFormBtn.addEventListener("click", function() {
    feedbackForm.style.display = "none";
    responseMessage.innerHTML = "";
  });

  contactForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const formData = new FormData(contactForm);

    fetch("https://formcarry.com/s/jueViKGUnz", {
      method: "POST",
      body: formData
    })
    .then(response => {
      if (!response.ok) {
        throw new Error("Ошибка отправки формы");
      }
      return response.json();
    })
    .then(data => {
      responseMessage.innerHTML = "Форма успешно отправлена!";
      contactForm.reset();
    })
    .catch(error => {
      responseMessage.innerHTML = "Произошла ошибка при отправке формы.";
      console.error(error.message);
    });
  });
});
