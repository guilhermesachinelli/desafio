var texto = prompt("Digite algo")
let posicao = texto.split(" ");
let numpav = 0;
let tamanho = posicao.length

for (let i = 0; i < tamanho; i++) {
    if (posicao[i] == '') {
        numpav++
    }
}
let final = tamanho - numpav
console.log(final);