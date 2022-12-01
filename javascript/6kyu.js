// Função que retorna a raiz digital de dado número "n"
// ! Refatorar: para se adequar ao somatório ((n - 1) % 9) + 1
function digitalRoot(n) {
  toNumber = (str) => parseInt(str, 10); // função auxiliar
  toStringList = (int) => int.toString().split(""); // função auxiliar

  // result iniciará como a soma recursiva de seus dígitos
  result = toStringList(n).reduce((acc, el) => acc + toNumber(el), 0);

  // enquanto obtiver mais de um digíto, repete a soma recursiva
  while (toStringList(result).length > 1) {
    result = toStringList(result).reduce((acc, el) => acc += toNumber(el), 0);
  }

  return result;
}
