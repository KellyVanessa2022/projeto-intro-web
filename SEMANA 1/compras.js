
// 1. Para o item que você decidiu, pense nas características que são importantes para construí-lo. Vamos usar estas características para definir exemplos destes objetos usando o código.
// Você precisará criar pelo menos:
//   * uma característica String;
//   * uma característica Number;
//   * uma característica Boolean;
// Exemplos abaixo
// const nome; //string
// const idade; //number 
// const verificouEmail; //boolean 
// Recomendamos, pensando no futuro, que você também pense em dados que podem receber múltiplos valores de uma só vez. Não vamos usar estes dados até mais pra frente, mas é legal já ter uma ideia.

const compras1 = "leite condensado"
const valor1 = 5
const booleano1 =  compras1 !== valor1


// 2. Agora, crie três conjuntos de variáveis utilizando as características que você definiu acima. Lembre-se que deve ser o mesmo tipo de item, com três conjuntos de dados diferentes.
// Exemplo:
// const nome1 = "Fulano";
// const idade1 = 33;
// const verificouEmail1 = false;

// const nome2 = "Sicrano";
// const idade2 = 41;
// const verificouEmail2 = true;

// const nome3 = "Beltrano";
// const idade3 = 27;
// const verificouEmail3 = true;

const compras2 = "leite em pó"
const valor2 = 18
const booleano2 = compras2 === valor2


const compras3 = "farinha lactéa"
const valor3 = 10
const booleano3 = compras3 !== valor3

const compras4 = "creme de leite"
const valor4 = 4
const booleano4 = compras4 != valor4



// 3. Faça um cálculo de média, entre os valores numéricos respectivos de cada item. Imprima o valor da média utilizando um console.log. Guarde este valor em uma const;
// 💡A média deve ser igual à soma dos itens, dividida pelo total de itens.

const media1 =(valor1+valor2+valor3+valor4)/4

console.log(media1)

// 4. Com um console.log, imprima o resultado de uma operação lógica que checa se todos os valores de variáveis booleanas criadas até aqui são verdadeiras.
// 💡 Exemplo
// const verificaEmails = verificouEmail1 && verificouEmail2 && verificouEmail3;
// console.log(verificaEmails);
// // nesse caso, vai imprimir false, pois verificouEmail ===  false

const verificarbooleanoGeral = booleano1 && booleano2 && booleano3 && booleano4

console.log(verificarbooleanoGeral)

// 5. Crie pelo menos mais uma característica para o item que você criou. Esta característica deve ser um array. Mantenha o tipo de dado do array criado sempre o mesmo, isto é, se é um array de strings, só deve receber strings.
// const nome; //string
// const idade; //number
// const verificouEmail; //boolean
// const projetos; //array de strings

const Array1 = ["desnatado", "zero lactose"]
const Array2 = ["zero acucar","integral"]
const Array3 = ["ferro","acido folico"]
const Array4 = ["desnatado","semidesnatado"]

// 6. Exiba um relatório utilizando console.log(), mostrando todos os dados de cada um dos itens criados até aqui
//   1. O log deve exibir o dado de nome, título ou afim sempre em LETRAS MAIÚSCULAS, como no exemplo abaixo.
// FULANO
// idade: 33
// verificou email?: false
// projetos: ["Projeto de HTML", "Projeto de CSS", "Projeto React"] 
console.log (compras1.toUpperCase(), valor1, booleano1,Array1)
console.log(compras2.toUpperCase(), valor2, booleano2,Array2)
console.log(compras3.toUpperCase(), valor3, booleano3,Array3)
console.log(compras4.toUpperCase(), valor4, booleano4,Array4)
