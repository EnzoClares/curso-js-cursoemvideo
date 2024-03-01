var idade = 12
console.log(`você tem ${idade} anos`)
if (idade < 16 ){
    console.log('proibido de votar')
}else if (idade < 18 || idade > 65){
    console.log('voto opcional')
} else {
    console.log('voto obrigatório')
}