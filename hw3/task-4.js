const countTotalSalary = function (employees) {
  let sumValues = 0;
  const values = Object.values(employees);
  for (let i = 0; i < values.length; i += 1) {
    sumValues += values[i];
  }
  return sumValues;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(countTotalSalary({})); // 0

console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80,
  })
); // 330

console.log(
  countTotalSalary({
    kiwi: 200,
    lux: 50,
    chelsy: 150,
  })
); // 400
