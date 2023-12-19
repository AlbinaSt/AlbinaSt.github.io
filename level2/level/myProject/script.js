$(function () {
  var $speed = 200;
  var $class = "opened";
  var $class_open = ".faq-answer";

  $(document).ready(function () {
    $(".faq-question").on("click", function () {
      $ul = $(this).closest("ul");
      $answer = $(this).closest("li").find($class_open);

      if (!$(this).closest("li").hasClass($class)) {
        $ul.find("li").each(function () {
          if ($(this).hasClass($class))
            $(this).removeClass($class).find($class_open).slideUp($speed);
        });
      }

      $answer.slideToggle($speed).closest("li").toggleClass($class);
    });
  });
});

document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Предотвратить перезагрузку страницы по умолчанию

  var name = document.getElementById("name").value;
  var phone = document.getElementById("phone").value;
  var email = document.getElementById("email").value;
  var product = document.getElementById("product").value;

  axios
    .post("https://formcarry.com/s/jueViKGUnz", {
      name: name,
      phone: phone,
      email: email,
      product: product,
    })
    .then(function (response) {
      document.getElementById("message").innerHTML =
        "Ваши данные успешно отправлены!";
    })
    .catch(function (error) {
      console.log(error);
    });
});
