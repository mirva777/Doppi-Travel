export function range(start = 1, end, step = 1) {
  const result = [];

  if (typeof end !== "number") {
    end = start;
    start = 1;
  }

  for (let i = start; i <= end; i += step) {
    result.push(i);
  }

  return result;
}

export function getTwoRandomNumbersFromSum(sum = 0) {
  const firstNumber = Math.floor(Math.random() * sum);
  const secondNumber = sum - firstNumber;

  return [firstNumber, secondNumber];
}

export function getRandomOption(options = []) {
  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
}
