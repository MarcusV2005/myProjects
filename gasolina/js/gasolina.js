//Dom

const dis1=document.querySelector('#dis1')
const dis2=document.querySelector('#dis2')
const dis3=document.querySelector('#dis3')
const but=document.querySelector('#but')
const resultado=document.querySelector('#resultado')

//Evento
but.addEventListener('click',viagem)

function viagem(){
 
let preço=(dis1.value/dis2.value)*dis3.value
resultado.textContent="Seu custo será:R$" +preço.toFixed(2)

}