function contar(){
    var ini = window.document.getElementById('txti')
    var fim = window.document.getElementById('txtf')
    var passo = window.document.getElementById('txtp')
    var res = window.document.getElementById('res') 
    if (ini.value.length == 0 || fim.value.length == 0 ||passo.value.length == 0){
        res.innerHTML = 'Impossível Contar'
       // window.alert('ERRO!! Faltam dados')
        
    } else {
        res.innerHTML = 'Contando : <br> '
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0 ){
            window.alert('Passo invalido ! Considerando passo = 1 ')
            p = 1
        }
        if  (f>i){
        for (var c = i; c <= f; c += p){
            res.innerHTML += ` ${c}\u{1F449}  `
        } // CONTAGEM CRESCENTE
    
    }   else{
        for(var c = i ; c >= f; c-= p ) {
            res.innerHTML += ` ${c} \u{1F449}`
        }// CONTAGEM DECRESCENTE
    
    }
    res.innerHTML += `\u{1F3C1}`
 }
}