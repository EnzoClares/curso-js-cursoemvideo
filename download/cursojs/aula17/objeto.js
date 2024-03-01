/*let amigo =[] // vetores(arrays) e objetos(objects) são de uma mesma 'classe', então aparecem como object na execução de typeof
console.log(typeof amigo)*/

let amigo = {nome:'José',
sexo:'M',
peso:85.4,
engordar(p=0){
       console.log('engordou')
       this.peso+=p
    
}}
console.log(`${amigo.nome} pesa ${amigo.peso}kg`)
amigo.engordar(2)
console.log(`2 kg e ficou com ${amigo.peso}kg`)