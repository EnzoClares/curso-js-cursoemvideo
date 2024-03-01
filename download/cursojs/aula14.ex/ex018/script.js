function tabuada(){
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    
    
    if (num.value.length == 0){
        window.alert('Digite um número')
    } else {
        
        let n = Number(num.value)
        let c = 1
       /* for (var c = 1; c >= 10; c++){
            let item = document.createElement('option')
            item.text = `${n} X ${c} = ${n*c}`
            tab.appendChild(item)
        }*/
        tab.innerHTML=''// para limpar quando for feita outra contagem
        while (c <= 10 ){
            let item = document.createElement('option') 
            // criação de elementos para por dentro do select
            item.text = `${n} X ${c} = ${n*c}`// conteúdo do option
            item.value = `${c}` // dar nome a cada elemento do item (uso frequente em outras linguagens)
            tab.appendChild(item)// adicionar elemento do item no select 'tab'
            c++
        }
    }
}