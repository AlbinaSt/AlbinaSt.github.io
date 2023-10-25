function isItNumber(str) {
  return /^-?\d+([.,](\d)+)?$/.test(str);
}
function calculate() {
  let quantity_of_goods = document.getElementById("quantity_of_goods");
  let goods_type = document.getElementById("goods_type");
  let result_field = document.getElementById("result");

  let aubergine_options = document.getElementById("aubergine_options");
  let loan_options = document.getElementById("loan_options");
  let loan_options_type = document.getElementsByName("loan_options_type");

  let result = 0;
  let aubergine_options_result = 0;
  let loan_options_result = 0;

  if (quantity_of_goods.value === "") {
    result_field.innerHTML = "Нет значения";
    return;
  }

  if (!isItNumber(quantity_of_goods.value)) {
    result_field.innerHTML = "Неверное значение";
    return;
  } else {
    quantity_of_goods.value = quantity_of_goods.value.replace(",", ".");
  }

  if (quantity_of_goods.value < 0) {
    result_field.innerHTML = "Неверное значение";
    return;
  }

  let loan_prices = new Map([
    ["long_support", 1000],
    ["grandson_too", 500],
  ]);

  let aubergine_freshness = new Map([
    ["fresh", 150],
    ["not_fresh", 50],
  ]);

  if (aubergine_options.style.display == "block")
    aubergine_options_result += aubergine_freshness.get(
      aubergine_options.value
    );
  else aubergine_options_result = 0;

  if (loan_options.style.display == "block") {
    for (i = 0; i < loan_options_type.length; i++) {
      if (loan_options_type[i].checked)
        loan_options_result += loan_prices.get(loan_options_type[i].value);
    }
  } else loan_options_result = 0;

  let goods = new Map([
    ["tomato", 900],
    ["cucumber", 1000],
    ["zucchini", 1500],
    ["onion", 1300],
  ]);

  result +=
    parseFloat(quantity_of_goods.value) * goods.get(goods_type.value) +
    aubergine_options_result +
    loan_options_result;

  result_field.innerHTML = result.toString();
}

function showDependOnRadioButton() {
  let radio_button_service_types = document.getElementsByName("service_type");
  let aubergine_options = document.getElementById("aubergine_options");
  let loan_options = document.getElementById("loan_options");

  for (i = 0; i < radio_button_service_types.length; i++) {
    if (radio_button_service_types[i].checked) {
      if (radio_button_service_types[i].value == "Flowers") {
        aubergine_options.style.display = "none";
        loan_options.style.display = "none";
      } else if (radio_button_service_types[i].value == "Loans") {
        loan_options.style.display = "block";
        aubergine_options.style.display = "none";
      } else {
        aubergine_options.style.display = "block";
        loan_options.style.display = "none";
      }
    }
  }
}

window.addEventListener("DOMContentLoaded", function () {
  let b = document.getElementById("calculate_button");
  b.addEventListener("click", calculate);
});

let radio_default = document.getElementById("radio_button_checked_by_default");
radio_default.checked = true;

window.addEventListener("DOMContentLoaded", function () {
  let radio_button_service_types = document.getElementsByName("service_type");
  for (i = 0; i < radio_button_service_types.length; i++) {
    radio_button_service_types[i].addEventListener(
      "change",
      showDependOnRadioButton
    );
  }
});

$(document).ready(function ($) {
  $("#foo2").carouFredSel({
    circular: false,
    infinite: false,
    auto: false,
    prev: {
      button: "#foo2_prev",
      key: "left",
    },
    next: {
      button: "#foo2_next",
      key: "right",
    },
    pagination: "#foo2_pag",
  });
});
