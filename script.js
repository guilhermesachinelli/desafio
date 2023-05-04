// var texto = prompt("Digite algo")
// let posicao = texto.split(" ");
// let numpav = 0;
// let tamanho = posicao.length

// for (let i = 0; i < tamanho; i++) {
//     if (posicao[i] == '') {
//         numpav++
//     }
// }
// let final = tamanho - numpav
// console.log(final);
// let numeros = prompt("Digite um Numero");
// let soma = 0;
// do {
//     let i = numeros.split("");
//     console.log(i)
//     for (let posicaoes = 0; posicaoes < i.length; posicaoes++) {
//         soma += Number(i[posicaoes]);
//     }
//     console.log(soma)
// } while (soma >= 10) {
// }
// let digitado;
// let comparar;
// let a = [];
// let b = []
// let palavra = "";
// let maior;
// do {
//     digitado = prompt("Escreva uma palavra")
//     b.push(digitado);
//     comparar = digitado.length;
//     a.push(comparar)
//     for (let i = 0; i <= a.length; i++) {
//         maior = a[0];
//         if (maior < a[i]) {
//             maior = a[i]
//             palavra = b[i]
//         }
//     }
// } while (digitado !== "!") {
// }
// console.log(`A maior palavra é ${palavra}`)
let a = prompt("Digite algo 1")
let b = prompt("Digite algo 2")
let num = a.split(" ");
let num2 = b.split(" ");
let num3 = num.concat(num2)
alert(num3)
console.log(num3)
