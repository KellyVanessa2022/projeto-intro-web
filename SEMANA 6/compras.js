// 1. Reescrevendo o relatório criado utilizando console.log() que começamos na semana 2, altere a forma que a característica de array dos itens seja escrita como um laço que guarde todos os valores da propriedade array do objeto em uma mesma string. Utilize esta string no relatório.
 
const listasuper1={
    compras:'Leite condensado',
    valor: 5,
    booleano: true,
    array: ["desnatado " , "zero lactose"],
    foto:"LC.jpeg"
} 

const listasuper2={
    compras:'Leite em pó' ,
    valor: 18,
    booleano: false, 
    array: ["zero acucar ","integral"],
    foto:"LP.png"

}

const listasuper3={
    compras:'Farinha lactéa',
    valor: 10,
    booleano: true,
    array: ["ferro ","acido folico"],
    foto:"nova farinha.jpeg"
}

listasuper1.compras = listasuper1.compras.toUpperCase()
    listasuper2.compras = listasuper2.compras.toUpperCase()
    listasuper3.compras = listasuper3.compras.toUpperCase()


// const listasuper4={
//     compras:'creme de leite'.toUpperCase(),
//     valor: 4,
//     booleano:true,
//     array:["desnatado","semidesnatado"]
// }
const compitens=[]

if (listasuper1.booleano === true) {
    compitens.push(listasuper1)
} else {
   alert("o leite condensado não foi adicionado") 
}

if (listasuper2.booleano === false) {
    compitens.push(listasuper2)
} else {
    alert("não adicionou o leite em pó")
}

if (listasuper3.booleano === true){
    compitens.push(listasuper3)
}else{
    alert("farinha lactéa não adicionada")
}


// console.log(compitens)

 function funcaodeItens(objeto) {
    let meuarray = [...objeto]
    for(objeto in meuarray){
        meuarray[objeto]={...meuarray[objeto]}
    }
    for(i=0; i<meuarray.length; i++){
        let string = meuarray[i].array.toString()
        meuarray[i].array=string
    }
    return meuarray
 }
console.log("Enunciado1:\n")
console.log(funcaodeItens(compitens))






// 2. Ainda no relatório, altere-o para que ele seja criado utilizando laços. Ou seja, você não deve mais imprimir individualmente cada item do relatório. Cada item deve ser exibido a partir de uma iteração do laço. Para testar, adicione mais um item ao array de objetos, e verifique se ele é exibido corretamente.
// Exemplo:
// let cars = [
//   {
//     "color": "purple",
//     "type": "minivan",
//     "registration": new Date('2017-01-03'),
//     "capacity": 7
//   },
//   {
//     "color": "red",
//     "type": "station wagon",
//     "registration": new Date('2018-03-03'),
//     "capacity": 5
//   }
// ];

// //ANTES 
// console.log("color: "+cars[0].color);
// console.log("type: "+cars[0].type);
// console.log("registration: "+cars[0].registration);
// console.log("capacity: "+cars[0].capacity);

// console.log("----------------------");

// console.log("color: "+cars[1].color);
// console.log("type: "+cars[1].type);
// console.log("registration: "+cars[1].registration);
// console.log("capacity: "+cars[1].capacity);


//DEPOIS
for(item of compitens){
    for (propriedade in item){
        console.log(`${propriedade}: ${item[propriedade]}`)
    }
console.log("----------------------");
}
// 3. Crie uma função que receba como parâmetro um objeto, e devolva a string do relatório com os dados do objeto.
for(item of compitens){
    for (propriedade in item){
        console.log(`${item[propriedade]}`)
    }
console.log("----------------------");
}

    
// 4. Crie uma função que recebe um array de objetos e uma string. Esta função deve retornar um objeto, e o objeto retornado deve possuir apenas os itens que tenham o nome/título igual à string passada como parâmetro. Caso não exista um item, exiba um ALERT indicando que nenhum item foi encontrado.


// function buscandoItens(array, string){
//     for(listasuper of array){
//         if(listasuper.compras === string){
//             return listasuper
//         }else{
//             alert("Seu produto não foi encontrado.")
//         }
//     }
    
    
// }
// const pesquisaNomes = buscandoItens(compitens, prompt("Digite um nome").toUpperCase())
// console.log(pesquisaNomes)


const listabla = document.querySelector(".itensmae")
compitens.filter(ing =>{
    function listaCompras(){
        listabla.innerHTML += `<div>
        <img src="./fotos/${ing.foto}">
        <h3>${ing.compras}</h3>
        <p>
        Preço: ${ing.valor}
        </p>
        <p>
        Disponivel: ${ing.booleano}
    </p>

        <p>
           Rótulo: ${ing.array} 

        </p>

    </div> `

    
    }
    listaCompras()
})


function ingreDiente(event){
    event.preventDefault()
    let novaLista = document.getElementById('id-itensmae')
    let nomelista = document.getElementById('id-busca').value.toLocaleUpperCase()
    for(let i=0;i<compitens.length;i++){
    if(nomelista === compitens[i].compras){
        return (novaLista.innerHTML = `<div>
        <img src="./fotos/${compitens[i].foto}">
        <h3>${compitens[i].compras}</h3>
        <p>
        Preço: ${compitens[i].valor}
        </p>
        <p>
        Disponivel: ${compitens[i].booleano}
    </p>

        <p>
           Rótulo: ${compitens[i].array} 

        </p>

    </div>`)
    }

    }

    alert("Nada foi encontrado!");
    document.getElementById('id-busca').value = "";
    return;
}


ingreDiente()