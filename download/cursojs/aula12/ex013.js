var agora = new Date()
var hora = agora.getHours()
var minuto = agora.getMinutes()
if (hora >= 5 && hora < 12){
    console.log('Bom dia')
} else if (hora <=18){
    console.log('Boa tarde')
}else {
    console.log('Boa noite')
}
console.log(`são exatamente ${hora}:${minuto} horas`)