function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var res = window.document.querySelector('div.res')
    var data = new Date()
   //var hora = data.getHours()
   var  hora = 19;      
    msg.innerHTML = `Agora são ${hora} horas.`


    if (hora >= 0 && hora < 12){
        //bom dia
        img.src = 'files/perfil-manhã-small.png'
        res.innerHTML = '<p> Bom Dia </p>'
        document.body.style.background = '#dbc5ae'

    }else if (hora >= 12 && hora <= 18){
        //boa tarde
        img.src = 'files/perfil-tarde-small.png'
        res.innerHTML = '<p> Boa tarde </p>'
        document.body.style.background = '#9f5204'
    }else {
        //boa noite
        img.src = 'files/perfil-noite-small.png'
        res.innerHTML = '<p> Boa Noite </p>'
        document.body.style.background = '#003482'
    }
}


