//dom
const uni1 = document.querySelector('#uni1')
const uni2 = document.querySelector('#uni2')
const uni3 = document.querySelector('#uni3')
const botao= document.querySelector('#btn')
const resultado= document.querySelector('#resultado')

//evento

botao.addEventListener('click',media)

// ultima parte(função)

function media(){

    let nota = (Number(uni1.value)+Number(uni2.value)+Number(uni3.value))/3 

    if(nota>=6){
        resultado.textContent="Sua média final foi:"+nota.toFixed(1)+"Você está aprovado!"
}
 
     else{
    resultado.textContent="Sua média final foi:"+nota.toFixed(1)+"Você está recuperação!"
}
}

