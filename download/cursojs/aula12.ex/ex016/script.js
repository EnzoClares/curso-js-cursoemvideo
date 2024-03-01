function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var anof = document.getElementById('txtano')
    var res = document.getElementById('res')

    if(anof.value.lenght == 0 || Number(anof.value)>ano){
        window.alert ('ERRO !! VERIFIQUE OS DADOS')
    } else{
        var fsex = document.getElementsByName('txtsex')  // no caso os valores lógicos possíveis dessa var são [0] ou [1]
        var idade = ano - Number(anof.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if(fsex[0].checked ){
            genero = 'homem'
            if (idade >= 0 && idade <=12){
                img.setAttribute('src','criancamenino.jpg')
            } else if (idade <=21 ){
                img.setAttribute('src','jovemhomem.jpg')
            }else if (idade <= 59){
                img.setAttribute('src','adultohomem.jpg')
            } else {
                img.setAttribute('src','homemidoso.jpg')
            }
        } else if(fsex[1].checked){
            genero = 'mulher'
            if (idade >= 0 && idade <=12){
                img.setAttribute('src','criancamenina.jpg')
            } else if (idade <=21 ){
                img.setAttribute('src','jovemmulher.jpg')
            }else if (idade <= 59){
                img.setAttribute('src','adultomulher.jpg')
            } else {
                img.setAttribute('src','mulheridoso.jpg')
            }
        }
        res.style.textAlign='center'
        res.innerHTML=`detectamos ${genero} com ${idade} anos`
        res.appendChild(img)

    }
}

