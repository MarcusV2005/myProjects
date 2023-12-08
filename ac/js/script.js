//Dom
const video=document.querySelector('video')
const butPlay=document.querySelector('#butPlay')
const butStop=document.querySelector('#butStop')
const butPause=document.querySelector('#butPause')
const butFast=document.querySelector('#butFast')
const butSlow=document.querySelector('#butSlow')



butPlay.addEventListener('click',()=>{


video.play()
video.playbackRate=1


})

butPause.addEventListener('click',()=>{


    video.pause()
   
    
    
})

butStop.addEventListener('click',()=>{


    video.pause()
    video.currentTime=0
    
    
})


butFast.addEventListener('click',()=>{


    video.playbackRate+=0.25
    
    
    
})

butSlow.addEventListener('click',()=>{


    video.playbackRate-=0.25
    
    
    
})


video.addEventListener('click',()=>{


    video.requestFullscreen()
    
    
    
})






    
