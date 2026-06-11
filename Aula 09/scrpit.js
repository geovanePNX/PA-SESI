const result = document.querySelector("#resultado")

const soma = document.querySelector("#soma")
const subtracao = document.querySelector("#subtracao")
const multiplicacao = document.querySelector("#multiplicacao")
const divisao = document.querySelector("#divisao")

soma.addEventListener('click', (e) => {
    e.preventDefault()
    const valueA = Number(document.querySelector("#valuea").value)
    const valueB = Number(document.querySelector("#valueb").value)
    const resultado = valueA + valueB
    return result.innerHTML = `Resultado da Soma: ${resultado}`
})

subtracao.addEventListener('click', (e) => {
    e.preventDefault()
    const valueA = Number(document.querySelector("#valuea").value)
    const valueB = Number(document.querySelector("#valueb").value)
    const resultado = valueA + valueB
    return result.innerHTML = `Resultado da Soma: ${resultado}`
})

multiplicacao.addEventListener('click', (e) => {
    e.preventDefault()
    const valueA = Number(document.querySelector("#valuea").value)
    const valueB = Number(document.querySelector("#valueb").value)
    const resultado = valueA + valueB
    return result.innerHTML = `Resultado da Soma: ${resultado}`
})

divisao.addEventListener('click', (e) => {
    e.preventDefault()
    const valueA = Number(document.querySelector("#valuea").value)
    const valueB = Number(document.querySelector("#valueb").value)
    const resultado = valueA + valueB
    return result.innerHTML = `Resultado da Soma: ${resultado}`
})
