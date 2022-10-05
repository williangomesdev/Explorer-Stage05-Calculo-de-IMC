//validar se é um numero que passamos
export function notANumber(value) {
  return isNaN(value) || value === "";
}

//calculo imc
export function IMC(weight, height) {
  return (weight / (height / 100) ** 2).toFixed(2);
}
