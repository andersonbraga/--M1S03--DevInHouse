function procuraMinMax(numeros) {
  if (Array.isArray(numeros) && numeros.length > 0) {
    let maior = numeros[0];
    let menor = numeros[0];

    for (let i = 0; i < numeros.length; i++) {
      if (numeros[i] > maior) {
        maior = numeros[i];
      }
      if (numeros[i] < menor) {
        menor = numeros[i];
      }
    }
    console.log(`Maior: ${maior} | Menor: ${menor}`);
  } else {
    console.log('Não é possivel encontrar');
  }
}

procuraMinMax([56, 65, 64, -3, 23, 42, -15, 65, 14, 32, 78, 70, 47]);
procuraMinMax([]);
procuraMinMax([1]);
procuraMinMax([1, -1]);
procuraMinMax(null);
procuraMinMax([-2, -2, -2, -2]);
procuraMinMax([20, 10, 30]);

// var arr = ['885.9', '984.9', '444.9', '528.9', '528.9'];
// var min = Math.min(...arr);
// var max = Math.max(...arr);

// console.log(min);
// console.log(max);
