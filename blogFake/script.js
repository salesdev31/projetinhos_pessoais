let inputTitle = document.querySelector('#inputTitle');
let textArea = document.querySelector('#textArea');
let botao = document.querySelector('#btnEnviar');


async function pegaDadosApi(){
    let req = await fetch('https://jsonplaceholder.typicode.com/posts');
    let dadosPuros = await req.json();
    montaLi(dadosPuros);
}

function montaLi(dadosPuros){
    
    let divUl = document.querySelector('#divUl');
    let newUl = document.createElement('ol');
    divUl.innerHTML = `Carregando...`
    
    if(divUl.innerHTML === 'Carregando...'){
        divUl.innerHTML = "";
        for(let i in dadosPuros){
            let newLi = document.createElement('li');
            let newH2 = document.createElement('h2');
            let newP = document.createElement('p');
            newH2.innerHTML = dadosPuros[i].title;
            newP.innerHTML = dadosPuros[i].body;
            newLi.append(newH2);
            newLi.append(newP);
            newUl.append(newLi);
         }
     
    }
   
    divUl.append(newUl);
    
}

async function enviarPost(){
       let valorDoTitulo = inputTitle.value;
       let valorDoBody = textArea.value;

        await fetch('https://jsonplaceholder.typicode.com/posts',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'  //aqui a gente fala que vamos enviar por Json
            },
            body: JSON.stringify({              //No corpo eu uso a função JSON.stringify({}) mandando um objeto e convertendo em um json
                title: valorDoTitulo,
                body: valorDoBody,
                userId: 2
            })
        });   
       

        inputTitle.value = "";
        textArea.value = "";
}




botao.addEventListener('click', pegaDadosApi)
document.querySelector('#btnPostar').addEventListener('click', enviarPost);
