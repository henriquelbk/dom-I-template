const p = document.getElementById('paragrafo')
console.log(p.innerHTML)

const inputTexto = document.getElementById('texto')
console.log(inputTexto.value)

const imprimeCarac = () => {
    console.log(inputTexto.value)
}

const substituiValor = () => {
    p.innerHTML = inputTexto.value
    console.log(p.innerHTML)
}