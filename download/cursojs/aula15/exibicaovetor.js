let num = [2,3,4,7,2,3]
/*console.log(num[0])
console.log(num[1])
console.log(num[2])
console.log(num[3])
console.log(num[4])
console.log(num[5])*/
/*for (var c = 0; c<num.length; c++){
    console.log(`o elemento da posição: ${c} é igual a: ${num[c]}`)
}*/
for (let c in num){
    console.log(num[c])
} // so funciona para array (vetores) e objetos
//obs: todo array em js é um object  