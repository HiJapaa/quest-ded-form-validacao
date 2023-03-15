let campos = document.querySelectorAll('#nome, #email, #telefone, #mensagem')
let obrigatorio = document.querySelectorAll('.formulario p')
let btn = document.getElementById('btn')

btn.addEventListener('click', () => {

    campos.forEach((item, indice) => {

        if (item.value == "") {

            item.classList.remove('aceito')
            adicionarNegado(item, indice)

        } else if (item.value != "") {

            removerNegado(item, indice)
            item.classList.add('aceito')
        }
    })
})

function removerNegado(item, indice) {
    obrigatorio[indice].classList.remove('negado')
    item.classList.remove('negado')
}

function adicionarNegado(item, indice) {
    item.classList.add('negado')
    obrigatorio[indice].classList.add('negado')
}