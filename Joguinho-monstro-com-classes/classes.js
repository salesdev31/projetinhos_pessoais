// Knight ou Sorcerer 
//Littesmonster ou BigMonster


class Character {
    _life = 1;
    maxLife = 1;
    attack = 0;
    defense = 0;

    constructor(name){
        this.name = name;
    }

    get life (){
        return this._life;
    }

    set life(newLife){
        this._life = newLife < 0 ? 0 : newLife;
    }
}

class Knight extends Character{
    constructor(name){
        super(name);
        this.life = 100;
        this.attack = 10;
        this.defense = 8
        this.maxLife = this.life;
    }
};



class Sorcerer extends Character{
    constructor(name){
        super(name);
        this.life = 80;
        this.attack = 15;
        this.defense = 3;
        this.maxLife = this.life;
    }
}

class Littesmonster extends Character{
    constructor(name){
        super("Littesmonster");
        this.life = 40;
        this.attack = 4;
        this.defense = 4;
        this.maxLife = this.life;
    }
}


class BigMonster extends Character{
    constructor(name){
        super("BigMonster");
        this.life = 120;
        this.attack = 16;
        this.defense = 6;
        this.maxLife = this.life;
    }
}


class Stage {
    constructor(fighter1, fighter2, fighter1EL, fighter2EL, log){
        this.fighter1 = fighter1;
        this.fighter2 = fighter2;
        this.fighter1EL = fighter1EL;
        this.fighter2EL = fighter2EL;
        this.log = log;
    }

    start(){
        this.update();
        this.fighter1EL.querySelector('.attackButton').addEventListener('click', () => {
            this.doAttaking(this.fighter1, this.fighter2);
        });

        this.fighter2EL.querySelector('.attackButton').addEventListener('click', () => {
            this.doAttaking(this.fighter2, this.fighter1);
        });
    }

    update(){
        // Fighter 1
        this.fighter1EL.querySelector('.name').innerHTML = `${this.fighter1.name} - ${this.fighter1.life.toFixed(2)} HP`;
        let f1Pct = (this.fighter1.life / this.fighter1.maxLife) * 100; //   (100/100) * 100
        this.fighter1EL.querySelector('.bar').style.width = `${f1Pct}%`

        // Fighter 2
        this.fighter2EL.querySelector('.name').innerHTML = `${this.fighter2.name} - ${this.fighter2.life.toFixed(2)} HP`;
        let f2Pct = (this.fighter2.life / this.fighter2.maxLife) * 100; //   (100/100) * 100
        this.fighter2EL.querySelector('.bar').style.width = `${f2Pct}%`
    }

    doAttaking(atacando, atacado ){
        if(atacando.life <= 0 || atacado.life <=0){
            this.log.addmessage("Atacando cachorro morto");
            return;
        }

        let atacanteFactor = (Math.random() * 2).toFixed(2);
        let defesaFactor = (Math.random() * 2).toFixed(2);

        let ataqueAtual = atacando.attack * atacanteFactor;
        let defesaAtual = atacado.defense * defesaFactor;

        if(atacanteFactor > defesaFactor){
            atacado.life -= ataqueAtual;
            this.log.addmessage(`${atacando.name} casou ${ataqueAtual} de dano em ${atacado.name}`)
        }else {
            this.log.addmessage(`${atacado.name} conseguiu se defender`)
        }

        this.update();
    };
}

class Log {
    list = [];

    constructor(listEl){
        this.listEl = listEl;
    }

    addmessage(msg){
        this.list.push(msg);
        this.render();
    }

    render(){
        this.listEl.innerHTML = '';

        for(let i in this.list){
            this.listEl.innerHTML += `<li>${this.list[i]}</li>`;
        }
    }
}



