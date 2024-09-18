let log = new Log(document.querySelector('.log'));

let char = new Knight('Adriano');
let monster = new BigMonster();


let stage = new Stage(char, monster, document.querySelector('#char'), document.querySelector('#monster'), log);


console.log(char)
console.log('============================')
console.log(monster)


stage.start();