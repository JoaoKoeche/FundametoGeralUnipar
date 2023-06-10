// JOÃO VITOR D. KOCHE RA:00246448 -- MAICON PEREIRA RA:00249946

// EXERCICIO 1-----------------------------------------------------------------------------------
let number1 = document.querySelector('#number1')
let number2 = document.querySelector('#number2')
let button1 = document.querySelector('#button1')
let result1 = document.querySelector('#resultado1')

function terreno(){
    
        let medida1 = Number(number1.value);
        let medida2 = Number(number2.value);
        let count1 = medida1 * medida2;
        result1.innerHTML = `O terreno possui:${count1} m2` ;
}

button1.onclick = function(){
    terreno()
}

// EXERCICIO 2 -------------------------------------------------------------------------------------------
let number3 = document.querySelector('#number3')
let button2 = document.querySelector('#button2')
let result2 = document.querySelector('#resultado2')

function haras(){
    
    let cavalos = Number(number3.value);
    let count2 = cavalos * 4;
    result2.innerHTML = `O Haras precisa de ${count2} ferraduras!` ;
}

button2.onclick = function(){
    haras()
}

// EXERCICIO 3 -----------------------------------------------------------------------------------------
let paes = document.querySelector('#paes');
let broas = document.querySelector('#broas');
let button3 = document.querySelector('#button3');
let resultado3 = document.querySelector('#resultado3');
let resultado4 = document.querySelector('#resultado4');


function padaria(){

    let paes1 = Number(paes.value);
    let broas1 = Number(broas.value);
    let atempt = paes1 * 0.12;
    let atempt2 = broas1 * 1.5;
    let term = atempt + atempt2;
    let poup = term / 10;
    resultado3.innerHTML = `total de vendas de pães e broas: R$${term}`;
    resultado4.innerHTML = `do total de vendas, destinar R$${poup.toFixed(2)} para poupança!`;
}

button3.onclick = function(){
    padaria()
}

// EXERCICIO 4-------------------------------------------------------------------------------------------
let name = document.querySelector('#name')
let age = document.querySelector('#age')
let button4 = document.querySelector('#button4')
let resultado5 = document.querySelector('#resultado5')

function nameAge(){
    
        let vai = String(name.value);
        let age1 = Number(age.value);
        let count4 = age1 * 365;
        resultado5.innerHTML = `${vai}, você tem ${count4} dias vividos` ;
}

button4.onclick = function(){
    nameAge()
}

//  EXERCICIO 5----------------------------------------------------------------------------------------------
let gas = document.querySelector('#gas')
let amount = document.querySelector('#amount')
let button5 = document.querySelector('#button5')
let resultado6 = document.querySelector('#resultado6')

function posto(){
    
    let gasolina = Number(gas.value);
    let  valor = Number(amount.value);
    let litragem = valor / gasolina;
    resultado6.innerHTML = `é possivel abastecer ${litragem.toFixed(1)}L com o valor disponivel` ;
}

button5.onclick = function(){
    posto()
}

// EXERCICIO 6 ------------------------------------------------------------------------------------------
let wheigt = document.querySelector('#wheigt');
let button6 = document.querySelector('#button6');
let resultado7 = document.querySelector('#resultado7');

function prato(){
    
    let pesagem = Number(wheigt.value);
    let teste = pesagem * 12;
    resultado7.innerHTML = `A refeição fica em R$${teste.toFixed(2)}.` ;
}

button6.onclick = function(){
    prato()
}

// EXERCICIO 7---------------------------------------------------------------------------------
let dia = document.querySelector('#dia')
let mes = document.querySelector('#mes')
let button7 = document.querySelector('#button7')
let resultado8 = document.querySelector('#resultado8')

function passados(){
    
    let day = Number(dia.value);
    let  mounth = Number(mes.value);
    let mounthing = mounth * 30;
    let plus = mounthing + day;
    resultado8.innerHTML = `Já se passaram ${plus} dias desde o inicio do ano` ;
}

button7.onclick = function(){
    passados()
}

// EXERCICIO 8------------------------------------------------------------------------------
let ShirtP = document.querySelector('#ShirtP')
let ShirtM = document.querySelector('#ShirtM')
let ShirtG = document.querySelector('#ShirtG')
let button8 = document.querySelector('#button8')
let resultado9 = document.querySelector('#resultado9')
let resultado10 = document.querySelector('#resultado10')

function fabriCamiseta(){
    
    let tShirtP = Number(ShirtP.value);
    let  tShirtM = Number(ShirtM.value);
    let  tShirtG = Number(ShirtG.value);
    let valueP = tShirtP * 10;
    let valueM = tShirtM * 12;
    let valueG = tShirtG * 15;
    let amountFC = valueP + valueM + valueG;
    resultado9.innerHTML = `Valor das camisetas, P: R$${valueP}, M: R$${valueM}, G: R$${valueG}.` ;
    resultado10.innerHTML = `Valor total: R$${amountFC}`
}

button8.onclick = function(){
    fabriCamiseta()
}

// EXERCICIO 9 (não entendi muito bem a proposta, mas fiz oque interpretei)----------------------------------------------------------
let valueX = document.querySelector('#valueX')
let ValueY = document.querySelector('#ValueY')
let button9 = document.querySelector('#button9')
let resultado11 = document.querySelector('#resultado11')

function cartesianPlan(){
    
    let valX = Number(valueX.value);
    let  valY = Number(ValueY.value);
    let diference = valX - valY;
    resultado11.innerHTML = `A diferença de distancia entre os dois pontos são de ${/*Math.abs */(diference)}` ;
}

button9.onclick = function(){
    cartesianPlan()
}

// EXERCICIO 10 ------------------------------------------------------------------------------------------------------------------------
let daysWithout = document.querySelector('#daysWithoutAci')
let button10 = document.querySelector('#button10')
let resultado12 = document.querySelector('#resultado12')

function fabrica2(){
    
    let daysWit = Number(daysWithout.value);
    let mounthX = daysWit / 30;
    let yearX = daysWit / 365;
    let daysX = ((mounthX * 30) + (yearX * 365)) - daysWit;
    resultado12.innerHTML = `Tempo sem acidentes, anos: ${yearX.toFixed(1)}, meses: ${mounthX.toFixed(0)}, dias: ${daysX}` ;
}

button10.onclick = function(){
    fabrica2()
}

// EXERCICIO 11 -----------------------------------------------------------------------------------------------------------------------
let salary = document.querySelector('#salary')
let button11 = document.querySelector('#button11')
let resultado13 = document.querySelector('#resultado13')

function reajuste(){
    
    let salaryX = Number(salary.value);
    let uper = salaryX * (15/100);
    let lower = uper * (8/100);
    let finalSal = salaryX + uper;
    let finalDesc = finalSal - lower;
    resultado13.innerHTML = `Salario antes = R$${salaryX}, Salario depois = R$${finalSal}, Salario com desconto R$${finalDesc}.` ;
}

button11.onclick = function(){
    reajuste()
}

// EXERCICIO 12-------------------------------------------------------------------------------------------------------------------------
let numeroInt = document.querySelector('#numeroInteiro')
let button12 = document.querySelector('#button12')
let resultado14 = document.querySelector('#resultado14')

function numeroCompleto(){
    
    let numero = Number(numeroInt.value);
    let centena  = numero / 100;
    let dezena = numero / 10;
    resultado14.innerHTML = `o numero possui, ${Math.floor(centena)} de centenas, ${Math.floor(dezena).toFixed(0)} de dezenas e ${numero} de unidades`;
}

button12.onclick = function(){
    numeroCompleto()
}

// EXERCICIO 13------------------------------------------------------------------------------------------------------------------------------------------
let raioP = document.querySelector('#raioPizza')
let button13 = document.querySelector('#button13')
let resultado15 = document.querySelector('#resultado15')

function calcRaio(){
    
    let raio = Number(raioP.value);
    let pi = 3.14
    let total  = pi * (raio * raio)
    resultado15.innerHTML = `a pizza possui ${total} de area`;
}

button13.onclick = function(){
    calcRaio()
}

//EXERCICIO 14---------------------------------------------------------------
let valorContA = document.querySelector('#ValorDaConta')
let button14 = document.querySelector('#button14')
let resultado16 = document.querySelector('#resultado16')

function contaDosAmigos(){
    
    let valorCont = Number(valorContA.value);
    let valorAbaixo = Math.floor(valorCont / 3)
    let valorAcima  = valorCont - (valorAbaixo * 2)
    resultado16.innerHTML = `ficou ${valorAbaixo} para Carlos, ${valorAbaixo} para André e ${valorAcima} para Felipe`;
}

button14.onclick = function(){
    contaDosAmigos()
}

alert("João Vitor D. Koeche, RA:00246448 /// Maicon Pereira, RA:00249946")