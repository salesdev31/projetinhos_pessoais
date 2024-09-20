document.body.addEventListener('keyup', (event)=>{
    tocaSom(event.code.toLowerCase());
})


document.querySelector('.composer button').addEventListener('click', ()=>{
    let digitadoSong = document.querySelector('#input').value;
    let arrayDeSongs = digitadoSong.split('');
    tocaArray(arrayDeSongs);
})

function tocaSom(event){

    let audioElement = document.querySelector(`#s_${event}`);
    let keyElement = document.querySelector(`div[data-key="${event}"`);


    
    if(audioElement){
        audioElement.currentTime = 0;
        audioElement.play();
    }

    if(keyElement){
        keyElement.classList.add('active');
        setTimeout(()=>{
            keyElement.classList.remove('active');
        }, 300)
    }
}


function tocaArray(arrayDeSongs){

    let timer = 0;
    for(let i of arrayDeSongs){
         
        setTimeout(()=>{
            tocaSom( `key${i}`);
        }, timer);
        

        timer += 250;
    }

};