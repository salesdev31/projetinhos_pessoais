//Knight
//life - 100   // maxLife - 100 // attack - 10 // defense - 8

//Sorceres
//life - 50 // maxLife - 50 // attack - 14 // defense - 3

//litle Monster 
// life - 40 // maxLife - 40 // attack - 4 // defense - 4

//Big Monster
//life - 120 // maxLife - 120 // attack - 16 // defense - 6

const defaultCharacter = {
    name: '',
    life: 1,
    maxLife: 1,
    attack: 0,
    defense: 0
}


const createKnight = (name) => {
    return {
        ...defaultCharacter,
        name,
        life: 100,
        maxLife: 100,
        attack: 10,
        defense: 8
    }
};

const createSorcerer = (name) => {
    return {
        ...defaultCharacter,
        name,
        life: 50,
        maxLife: 50,
        attack: 14,
        defense: 3
    }
}

function createLitleMonster(){
    return {
        ...defaultCharacter,
        name: 'Litle Monster',
        life: 40,
        maxLife: 40,
        attack: 4,
        defense: 4
    }
}


function createBigMonster(){
    return {
        ...defaultCharacter,
        name: 'Big Monster',
        life: 120,
        maxLife: 120,
        attack: 16,
        defense: 6
    }
}

const stage = {
    start(fighter1, fighter2, fighter1El, fighter2El){
        this.fighter1 = fighter1,
        this.fighter2 = fighter2,
        this.fighter1El = fighter1El,
        this.fighter2El = fighter2El

        this.fighter1El.querySelector('.attackButton').addEventListener('click', ()=>{
            this.aTreta(this.fighter1, this.fighter2);
        })

        this.fighter2El.querySelector('.attackButton').addEventListener('click', ()=> {
            this.aTreta(this.fighter2, this.fighter1);
        })


        this.fighter1El.querySelector('.name').innerHTML = `${this.fighter1.name}`;
        this.fighter2El.querySelector('.name').innerHTML = `${this.fighter2.name}`;

        this.atualizaTela();
    },

    atualizaTela(mensagem){
        pctVidaPlayer1 = (this.fighter1.life / this.fighter1.maxLife) * 100;
        pctVidaPlayer2 = (this.fighter2.life / this.fighter2.maxLife) * 100;
        this.fighter1El.querySelector('.bar').style.width = `${pctVidaPlayer1}%`;
        this.fighter2El.querySelector('.bar').style.width = `${pctVidaPlayer2}%`;

        if(mensagem !== undefined){
            document.querySelector('ul').innerHTML += `<li>${mensagem}</li>`
        }
       
    },

    aTreta(atacante, atacado){
        
        var mensagem = '';
        if(atacante.life <= 0 || atacado.life <= 0){
            console.log('alguem ai esta morto...');
            document.querySelector('ul').innerHTML += `<li>Player morto - Fim!</li>`
            return;
        }        

        let fatorAtaque = (Math.random(2) * 2).toFixed(2);
        let fatorDefesa = (Math.random(2) *2).toFixed(2);

        let ataqueAtual = (atacante.attack * fatorAtaque);
        let defesaAtual = (atacado.defense * fatorDefesa);

        if(ataqueAtual > defesaAtual){
            atacado.life -= ataqueAtual;
            atacado.life = atacado.life < 0 ? 0 : atacado.life;
            mensagem = `${atacante.name} conseguiu tirar ${ataqueAtual} de vida de ${atacado.name}`;
        }else{
            mensagem = `${atacado.name} conseguiu se defender`;
        }

        this.atualizaTela(mensagem);

       
    },


}



























/* 
const stage = {
    start(fighter1, fighter2, fighter1El, fighter2El){
        this.fighter1 = fighter1;
        this.fighter2 = fighter2;
        this.fighter1El = fighter1El;
        this.fighter2El = fighter2El;

        this.fighter1El.querySelector('.attackButton').addEventListener('click', ()=> this.doAttack(this.fighter1, this.fighter2));
        this.fighter2El.querySelector('.attackButton').addEventListener('click', ()=> this.doAttack(this.fighter2, this.fighter1))

        this.update();

    },

    update(){
        //fighter1
        this.fighter1El.querySelector('.name').innerHTML = `${this.fighter1.name} - HP: ${this.fighter1.life}`;
        let porcentagemVidaP1 = (this.fighter1.life / this.fighter1.maxLife) * 100;
        this.fighter1El.querySelector('.bar').style.width = `${porcentagemVidaP1}%`;

        //fighter2
        this.fighter2El.querySelector('.name').innerHTML = `${this.fighter2.name} - HP: ${this.fighter2.life}`;
        let porcentagemVidaP2 = (this.fighter2.life / this.fighter2.maxLife) * 100;
        this.fighter2El.querySelector('.bar').style.width = `${porcentagemVidaP2}%`;
    },

    doAttack(atacando, atacado){
        if(atacando.life <= 0 || atacado.life <= 0 ){
            console.log('Esta morto, partida finalizada!');
            alert('O Jogador foi morto, partina encerrada')
            return;
        }

        let fatorDeAtaque = (Math.random() * 2).toFixed(2);
        let fatorDeDefesa = (Math.random() * 2).toFixed(2);

        let ataqueAtual = (atacando.attack * fatorDeAtaque);
        let defesaAtual = (atacado.defense * fatorDeDefesa);

        if(ataqueAtual > defesaAtual){
            atacado.life -= ataqueAtual;
            atacado.life = atacado.life < 0 ? 0: atacado.life;
            console.log(`${atacando.name} causou ${ataqueAtual} de dano em ${atacado.name}`)
        }else {
            console.log(`${atacado.name} conseguiu se defender...`)
        }

        this.update();
    }
}

*/

