function carregar() {
    var msg = document.querySelector('div#msg');
    var img = document.querySelector('img#imagem');
    var data = new Date();
    var hora = data.getHours();
    msg.innerHTML = `Agora são ${hora} horas`;
    if (hora >=0 && hora <= 12){
    //Bom dia
        img.src = 'manha.png'
        document.body.style.background = '#f7ea75'
    }   else if (hora >=13 && hora <=18){
    //Bom tarde
        img.src = 'tarde.png'
        document.body.style.background = '#ffb765'
    }   else {
    //Boa noite
        img.src = 'noite.png'
        document.body.style.background = '#161411'
    }   
}
