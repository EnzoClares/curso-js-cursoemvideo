function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    //var hora =
    var hora = data.getHours()
    var educ = window.document.getElementById('educ')
    msg.innerHTML = `Agora são ${hora} horas`
    
    if (hora>=5 && hora<=13){
        img.src= 'manha250.jpg'
        document.body.style.background='#e2cd9f'
        educ.innerHTML='Bom dia!!!'
    } else if (hora >=14 && hora<=18){
        img.src= 'tarde250.jpg'
        document.body.style.background='#b9846f'
        educ.innerHTML='Boa tarde!!!'
    } else {
        img.src='noite250.jpg'
        document.body.style.background='#515154'
        educ.innerHTML='Boa noite!!!'
    }

}
