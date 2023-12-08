//dom
const dis1=document.querySelector("#dis1")
const dis2=document.querySelector("#dis2")
const dis3=document.querySelector("#dis3")
const but=document.querySelector("#but")
const resultado=document.querySelector("#resultado")

//função
but.addEventListener('click',total)

//
function total(){
    let preço=(dis1.value/dis2.value)*dis3.value
    resultado.textContent="valor para a viagem=R$" +preço.toFixed(2)

}
