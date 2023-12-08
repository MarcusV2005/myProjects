//DOM
const imagem =document.querySelector('#imagem')
const jogador =document.querySelector('#nome')
const btha =document.querySelector('#btha')
const btcr7 =document.querySelector('#btcr7')
const btdy =document.querySelector('#btdy')
const btmb =document.querySelector('#btmb')
const btney =document.querySelector('#btney')
const btme =document.querySelector('#btme')
//EVENTOS
btha.addEventListener('click',Halland)
btcr7.addEventListener('click',CR7)
btdy.addEventListener('click',Dybala)
btmb.addEventListener('click',Mbappe)
btney.addEventListener('click',Neymar)
btme.addEventListener('click',Messi)

//FUNÇÕES
function Halland(){
    imagem.src="images/haaland.png"
}
function CR7(){
    imagem.src="images/cr7.jpg"
}
function Dybala(){
    imagem.src="images/dybala.jpg"
}
function Mbappe(){
    imagem.src="images/mbappe.jpg"
}
function Messi(){
    imagem.src="images/messi.jpg"
}
function Neymar(){
    imagem.src="images/neymar.jpg"
}


