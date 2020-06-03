const checkForSpam = function (message) {
  const messageLowCase = message.toLowerCase();
  const spam = ["sale", "spam"];

  console.log(messageLowCase);
  for (let i = 0; i < messageLowCase.length; i += 1)
    if (messageLowCase.includes(spam[i])) {
      return true;
    }
  return false;
};

console.log(checkForSpam("Latest technology news")); // false

console.log(checkForSpam("JavaScript weekly newsletter")); // false

console.log(checkForSpam("Get best sale offers now!")); // true

console.log(checkForSpam("[SPAM] How to earn fast money?")); // true
