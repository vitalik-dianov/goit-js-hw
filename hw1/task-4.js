const credits = 23000;
const pricePerDroid = 3000;
const amount = prompt("Сколько дроидов вы хотите купить?");
if (amount === null) {
  console.log("Отменено пользователем!");
} else {
  const totalPrice = amount * pricePerDroid;
  if (totalPrice <= credits) {
    console.log(
      `Вы купили ${amount} дроидов, на счету осталось ${
        credits - totalPrice
      } кредитов. `
    );
  } else {
    console.log("Недостаточно средств на счету!");
  }
}
