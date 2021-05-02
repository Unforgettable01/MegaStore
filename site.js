var form =  document.forms[1];

form.addEventListener("submit", function(event) {
  event.preventDefault();
  new FormData(form);
});

form.addEventListener("formdata", event => {

  var email = form.elements.email.value;
  var password = form.elements.password.value;
  console.log("Почта - " + email);
  console.log("Пароль - " + password);

 if (email == "") {
         Swal.fire(
        'Ошибка!',
        'Почта не заполнена!',
        'error'
        );
  return;
 }else if (password == "") {
    Swal.fire(
    'Ошибка!',
    'Пароль не заполнен!',
    'error'
    );
    return;
 }else  if (password.length < 10) {
               Swal.fire(
                   'Ошибка!',
                   'Вы ввели слабый пароль, попробуйте еще раз',
                   'error'
               );
               form.reset();
               return;
           }
 Swal.fire(
        'Все верно!',
        'Добро пожаловать!',
        'success'
    );
form.reset();
});