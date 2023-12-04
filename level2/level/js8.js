    // Показать попап при клике на кнопку
    document.getElementById('openPopup').addEventListener('click', function() {
      document.getElementById('popup').style.display = 'block';
    });

    // Обработка отправки формы
    document.getElementById('myForm').addEventListener('submit', function(event) {
      event.preventDefault();
      const formData = new FormData(this);

      fetch('https://formcarry.com/s/ВАШ_ID_ФОРМЫ', {
        method: 'POST',
        body: formData
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Ошибка при отправке данных');
        }
        return response.json();
      })
      .then(data => {
        document.getElementById('message').innerText = 'Данные успешно отправлены';
        // Дополнительные действия после успешной отправки
        console.log(data);
      })
      .catch(error => {
        document.getElementById('message').innerText = error.message || 'Что-то пошло не так';
        // Дополнительные действия при ошибке
        console.error(error);
      });
    });
