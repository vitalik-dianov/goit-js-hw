const total = 100;
let ordered = 20;
console.log(
  `Количество заказанных товаров ${ordered}. Доступно товаров на складе ${total}. `
);
if (total >= ordered) {
  console.log("Заказ оформлен, с вами свяжется менеджер");
} else {
  console.log("На складе недостаточно товаров!");
}

ordered = 80;
console.log(
  `Количество заказанных товаров ${ordered}. Доступно товаров на складе ${total}.`
);
if (total >= ordered) {
  console.log("Заказ оформлен, с вами свяжется менеджер");
} else {
  console.log("На складе недостаточно товаров!");
}

ordered = 130;
console.log(
  `Количество заказанных товаров ${ordered}. Доступно товаров на складе ${total}.`
);
if (total >= ordered) {
  console.log("Заказ оформлен, с вами свяжется менеджер");
} else {
  console.log("На складе недостаточно товаров!");
}
