let digitalElement = document.querySelector('.digital');

let sElement = document.querySelector('.p_s');
let mElement = document.querySelector('.p_m'); 
let helement = document.querySelector('.p_h');




function updateClock(){
    let now = new Date();
    let hour = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    let segundosDoRelogio = ((360 / 60) * seconds) - 90;
    let minutosDoRelogio = ((360 / 60) * minutes) - 90;
    let horasDoRelogio = ((360 / 12) * hour) - 90;




    sElement.style.transform = `rotate(${segundosDoRelogio}deg)`
    mElement.style.transform = `rotate(${minutosDoRelogio}deg)`
    helement.style.transform = `rotate(${horasDoRelogio}deg)`


    digitalElement.innerHTML = `${fixZero(hour)}:${fixZero(minutes)}:${fixZero(seconds)}`;
}


function fixZero(time){
    return time < 10 ? '0'+time : time;
}

setInterval(updateClock, 1000);
updateClock(); //to rodando ela aqui uma vez, pra assim que abrir o projeto, ja abrir o timer, se não, ia demorar 1 segundo pro timer começar    