//dom
const body=document.querySelector('body')
const ft1=document.querySelector('#ft1')
const but1=document.querySelector('#but1')
const but2=document.querySelector('#but2')
const but3=document.querySelector('#but3')
const but4=document.querySelector('#but4')


//evento with fuction 

but1.addEventListener('click',()=>{

    body.className='barça'
    ft1.src="images/FC-Barcelona-icon.png"
})

but2.addEventListener('click',()=>{

    body.className='madrid'
    ft1.src="images/Real-Madrid-Logo.png"
})

but3.addEventListener('click',()=>{

    body.className='hilal'
    ft1.src="images/al-hilal-logo-D05F0E2FD1-seeklogo.com.png"
})

but4.addEventListener('click',()=>{

    body.className='inter'
    ft1.src="images/inter-miami-cf-logo-3D46B8A7DE-seeklogo.com.png"
})







