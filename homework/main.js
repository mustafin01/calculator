function calculateFinalAmount() {
    // Получение значений полей ввода
    var amount = parseFloat(document.getElementById("amount").value);
    var interestRate = parseFloat(document.getElementById("interest").value);
    var time = parseFloat(document.getElementById("time").value);
  
    // Рассчет конечной суммы
    var finalAmount = amount * (1 + interestRate / 100) ** time;
  
    // Отображение результата на странице
    document.getElementById("result").innerHTML = "Сумма через " + time + " год(а/лет) составит: " + finalAmount.toFixed(2);
  }