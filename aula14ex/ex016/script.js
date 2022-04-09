function calcular(){
    var inicio = document.querySelector('input#inicio')
    var fim = document.querySelector('input#fim')
    var passo = document.querySelector('input#passo')
    var res = document.querySelector('div#res')
    var ii = Number(inicio.value)
    var ff = Number(fim.value)
    var pp = Number(passo.value)
    if (ii < 0 || ii > ff  || pp < 0){
        res.innerHTML =('Impossivel contar')
    }  
    else if (ii >= 0){
        res.innerHTML = 'Contando: '
        for (let c = ii ; c <= ff ; c = c + pp ){
        res.innerHTML += `${c}, `
        if (pp == 0) {
            alert ('Passo não poderar ser igual a 0, ele começara a partir de 1')
            pp++
                 
        }
            res.innerHTML += 'É isso.'
    }
    }       
                                      
}        

    



        

