const findBestEmployee = function (employees) {
  // твой код
  const array = Object.entries(employees);
  let biggestQuantity = 0;

  for (const item of array) {
    const key = item[0];
    const value = item[1];
    if (value > biggestQuantity) {
      biggestQuantity = value;
    }
  }
  for (const item of array) {
    const key = item[0];
    const value = item[1];
    if (value === biggestQuantity) {
      return key;
    }
  }
};

console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  })
);
console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  })
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  })
); // lux
