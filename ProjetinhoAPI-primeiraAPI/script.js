



document.querySelector('#botao').addEventListener('click', ()=>{
    fetch('https://jsonplaceholder.typicode.com/posts').then((dados)=>{
        return dados.json();
    }).then((dadosLimpos)=> {
       jogaNaTela(dadosLimpos);
    })
});

function jogaNaTela(arrayAPI){
    let newUl = document.createElement('ul');
    newUl.classList.add('ulStyle')
    let div = document.querySelector('.array');
    div.append(newUl);
    for(let i in arrayAPI){
        let newLi = document.createElement('li');
        newLi.innerHTML = arrayAPI[i].body;
        newUl.append(newLi);
    }

console.log(arrayAPI)

}