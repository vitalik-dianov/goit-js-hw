const country = prompt("Укажите страну назначения :");

let cost;
let finallyCountry;
let normalizeCountry;
normalizeCountry = country.toLowerCase();
if (country === null) {
  alert(`Отменено пользователем`);
} else
  switch (normalizeCountry) {
    case "китай":
      cost = 100;
      finallyCountry = "Китай";
      break;

    case "чили":
      cost = 250;
      finallyCountry = "Чили";
      break;

    case "австралия":
      cost = 170;
      finallyCountry = "Австралию";
      break;

    case "индия":
      cost = 80;
      finallyCountry = "Индию";
      break;

    case "ямайка":
      cost = 120;
      finallyCountry = "Ямайку";
      break;

    default:
      alert("В вашей стране доставка не доступна!");
      break;
  }
if ((normalizeCountry = finallyCountry)) {
  alert(`Доставка в ${finallyCountry} будет стоить ${cost} кредитов.`);
  console.log(finallyCountry);
  console.log(normalizeCountry);
}
