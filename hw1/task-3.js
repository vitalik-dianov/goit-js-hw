const ADMIN_PASSWORD = "qwe";
let message;
let password;
password = prompt("Введите пароль");

if (password === null) {
  message = "Отменено пользователем!";
  alert(message);
} else {
  if (password != ADMIN_PASSWORD) {
    message = "Неверный пароль!";
    alert(message);
  } else {
    if (password === ADMIN_PASSWORD) {
      message = "Добро пожаловать !";
      alert(message);
    }
  }
}
