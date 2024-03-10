const printLetters = (input) => {
  // input like this: 3 or ab or abaab
  if (!isNaN(Number(input))) {
    return;
  } else {
    // evitar que el string tenga caracteres repetidos consecutivos
    let result = '';
    for (let i = 0; i < input.length; i++) {
      if (i === 0 || input[i] !== input[i - 1]) {
        result += input[i];
      }
    }
    console.log(result);
  }
};

const inputs = ['3', 'ab', 'abaab'];

for (const input of inputs) {
  printLetters(input);
}
