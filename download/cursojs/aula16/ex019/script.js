let num = document.getElementById('txtn')
let lista = document.getElementById('txtsel')
let res = document.getElementById('res')
let valores = []


function isNumero(n){
    if (Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}
function inLista(n, l){
    if (l.indexOf(Number(n)) != -1){
        return true 
        // indexOf = Retorna o primeiro indice que o elemento pode ser
        // encontrado numa array, caso seja -1 ele não está presente
    } else {
        return false
    }
}
function adicionar(){
    if(isNumero(num.value) && inLista(num.value, valores)){
       valores.push(Number(num.value)) // não deixar repetir não está funcionando
       let item = document.createElement('option')
       item.text = `Valor ${num.value} adicionado`
       lista.appendChild(item) 
       res.innerHTML = ''// LIMPAR ASSIM QUE ADICIONAR UM NOVO NÚMERO

    }else {
        window.alert('Valor invalido !!!')
    }
    num.value = '' // deixar o espaço de número em branco depois de uma ação
    num.focus()// voltar com a barrinha piscando
}

function verificar(){
    if (valores.length == 0){
        window.alert('Erro!! Faltam Valores')
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores){
            soma += valores[pos]
            media = soma/tot
            if (valores[pos] > maior)
                maior = valores[pos]
            if (valores[pos] < menor)
                menor = valores[pos]
        } // analisa um por um e verifica quem é o maior e menor.

        res.innerHTML = ''// para zerar o valor de res
        res.innerHTML += `<p>O número de valores cadastrados é: ${tot}.</p>`
        res.innerHTML += `<p>O maior valor cadastrado é: ${maior}.</p>`
        res.innerHTML += `<p>O menor valor cadastrado é: ${menor}.</p>`
        res.innerHTML += `<p>A soma dos valores é igual a: ${soma}</p>`
        res.innerHTML += `<p>A média dos valores é igual a: ${media} </p>`
    }
}
// LEMBRE-SE: PROGRAME SEMPRE GRADATIVAMENTE