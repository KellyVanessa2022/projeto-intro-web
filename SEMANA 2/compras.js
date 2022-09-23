//1. Transforme os itens que criamos nas últimas semanas em objetos.

const listasuper1={
    compras1:"leite condensado",
    valor1: 5,
    booleano1: true,
    array1: ["desnatado", "zero lactose"]
} 

const listasuper2={
    compras2:"leite em pó",
    valor2: 18,
    booleano2: false, 
    array2: ["zero acucar","integral"]

}

const listasuper3={
    compras3:"farinha lactéa",
    valor3: 10,
    booleano3: true,
    array3: ["ferro","acido folico"]
}

const listasuper4={
    compras4:"creme de leite",
    valor4: 4,
    booleano4:true,
    array4:["desnatado","semidesnatado"]
}
//console.log(listasuper1, listasuper2,listasuper3, listasuper4)
//2. Crie um array para guardar os objetos. Este array deve estar vazio, por enquanto;


const itens=[]

if (listasuper1.booleano1 === true) {
    itens.push(listasuper1)
} else {
   alert("o leite condensado não foi adicionado") 
}

console.log(itens)

if (listasuper2.booleano2 === false) {
    itens.push(listasuper2)
} else {
    alert("não adicionou o leite em pó")
}

if (listasuper3.booleano3 === true){
    itens.push(listasuper3)
}else{
    alert("farinha lactéa não adicionada")
}

if (listasuper4.booleano4 === true) {
    itens.push(listasuper4)
} else {
    alert("o creme de leite não foi adicionado")
}

//3. Adicione os objetos criados no item 1 ao array de objetos criado no item 2, utilizando o push()
//Ao fim, você deve ter algo parecido com isso:

//4. Altere o item 3 “Adicione os novos objetos no array de objetos, utilizando o push()”, para criar uma verificação antes de dar o push. A caraterística booleana do objeto deve ser validada. Isto é, o objeto só deve ser adicionado ao array se a propriedade booleana for true;
//5. Crie uma condição else, que, em caso de valor false na condição acima, exiba um **ALERT** avisando para o usuário que o item não foi adicionado, e não faça o push
