var daysList = document.getElementById('birthdayDayJS');

for (var i = 1; i <= 31; i++) {
    var option = document.createElement("option");
    option.value = [i];
    option.text = [i];
    daysList.appendChild(option);
}

var monthsList = document.getElementById('birthdayMonthJS');
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

for (var i = 0; i < months.length; i++) {
  var option = document.createElement("option");
  option.value = months[i];
  option.text = months[i];
  monthsList.appendChild(option);
}

var yearsList = document.getElementById('birthdayDayJS');

for (var i = 1900; i <= 2017; i++) {
    var option = document.createElement("option");
    option.value = [i];
    option.text = [i];
    yearsList.appendChild(option);
}

var userName = document.querySelector('#nameJS');
var mailOrEmail = document.querySelector('#emailMobileJS');
var checkMailOrEmail = document.querySelector('#emailMobileCheckJS');
var checkCreateAccount = document.querySelector('#js-createAccount-check');

function createAccount() {
  if (mailOrEmail.value === checkMailOrEmail.value) {
    checkCreateAccount.innerHTML = "Gracias, " + userName.value + ", la cuenta se ha creado correctamente";
    checkMailOrEmail.style.border = "1px solid #ccc";
  }
  else {
    checkCreateAccount.innerHTML = "No se ha podido crear la cuenta";
    checkMailOrEmail.style.border = "1px solid red"
  }
}

var submitButton = document.querySelector('.button-submit');
submitButton.addEventListener("click", createAccount);
