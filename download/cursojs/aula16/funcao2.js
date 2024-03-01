function soma(n1=0, n2=0){
    return n1 + n2 // n1 ou n2 não podem estar colados no sinal de '+' senão da erro
}
console.log(soma(10,5))
//n1/n2=0 são parâmetros pré-definidos, se caso a chamada for feita com apenas 1 parâmetro sendo pedido 
// ao invés de dar NaN, ele indica o parâmetro vazio como zero.