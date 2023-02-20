'use strict';//vai mostrar a padronização correta

//variaveis criadas
let somaMussarela = 0;
let somaCalabresa = 0;
let somaMargarita = 0;
let somaChocolate = 0;
let somaPortuguesa = 0;
let vendaMussarela = 0.00;
let vendaCalabresa = 0.00;
let vendaMargarita = 0.00;
let vendaPortuguesa = 0.00;
let vendaChocolate = 0.00;

let btnVendas = document.getElementById('vendas');//puxa o botão do html
let btnEstorno = document.getElementById('estorno');
let btnPlanilha = document.getElementById('export');

//eventos que vamos capturar é o clic do botão no html
btnVendas.addEventListener('click',venda,false);
btnEstorno.addEventListener('click',estorno,false);
btnPlanilha.addEventListener('click',planilha,false);

//criar funções
function venda(e)
{
   if(document.getElementById('mussarela').checked) 
   {
      somaMussarela = somaMussarela + 1;
      vendaMussarela = vendaMussarela + 25.00;
    document.getElementById('resultadoMussarela').innerHTML = somaMussarela;
    document.getElementById('vendaMussarela').innerHTML = vendaMussarela.toFixed(2);
   
}else if(document.getElementById('calabresa').checked)
   {
    somaCalabresa = somaCalabresa + 1;
    vendaCalabresa = vendaCalabresa + 25.00;
    document.getElementById('resultadoCalabresa').innerHTML = somaCalabresa;
    document.getElementById('vendaCalabresa').innerHTML = vendaCalabresa.toFixed(2);
   
}else if(document.getElementById('margarita').checked)
   {
    somaMargarita = somaMargarita + 1;
    vendaMargarita = vendaMargarita + 25.00;
    document.getElementById('resultadoMargarita').innerHTML = somaMargarita;
    document.getElementById('vendaMargarita').innerHTML = vendaMargarita.toFixed(2);
   
}else if(document.getElementById('portuguesa').checked)
   {
    somaPortuguesa = somaPortuguesa + 1;
    vendaPortuguesa = vendaPortuguesa + 25.00;
    document.getElementById('resultadoPortuguesa').innerHTML = somaPortuguesa;
    document.getElementById('vendaPortuguesa').innerHTML = vendaPortuguesa.toFixed(2);
  
}else if(document.getElementById('chocolate').checked)
   {
    somaChocolate = somaChocolate + 1;
    vendaChocolate = vendaChocolate + 25.00;
    document.getElementById('resultadoChocolate').innerHTML = somaChocolate;
    document.getElementById('vendaChocolate').innerHTML = vendaChocolate.toFixed(2);
   }
}

function estorno(e)
{
   if(document.getElementById('mussarela').checked) 
   {
    somaMussarela = somaMussarela - 1;
    vendaMussarela = vendaMussarela - 25.00;
    if(somaMussarela < 0)
    {
      somaMussarela = 0;
      vendaMussarela = 0.00;
    }
    document.getElementById('resultadoMussarela').innerHTML = somaMussarela;
    document.getElementById('vendaMussarela').innerHTML = vendaMussarela.toFixed(2);
   
}else if(document.getElementById('calabresa').checked)
   {
    somaCalabresa = somaCalabresa - 1;
    vendaCalabresa = vendaCalabresa - 25.00;
    if(somaCalabresa < 0)
    {
      somaCalabresa = 0;
      vendaCalabresa = 0.00;
    }
    document.getElementById('resultadoCalabresa').innerHTML = somaCalabresa;
    document.getElementById('vendaCalabresa').innerHTML = vendaCalabresa.toFixed(2);
   
}else if(document.getElementById('margarita').checked)
   {
    somaMargarita = somaMargarita - 1;
    vendaMargarita = vendaMargarita - 25.00;
    if(somaMargarita < 0)
    {
      somaMargarita = 0;
      vendaMargarita = 0.00;
    }
    document.getElementById('resultadoMargarita').innerHTML = somaMargarita;
    document.getElementById('vendaMargarita').innerHTML = vendaMargarita.toFixed(2);
   
}else if(document.getElementById('portuguesa').checked)
   {
    somaPortuguesa = somaPortuguesa - 1;
    vendaPortuguesa = vendaPortuguesa - 25.00;
    if(somaPortuguesa < 0)
    {
      somaPortuguesa = 0;
      vendaPortuguesa = 0.00;
    }
    document.getElementById('resultadoPortuguesa').innerHTML = somaPortuguesa;
    document.getElementById('vendaPortuguesa').innerHTML = vendaPortuguesa.toFixed(2);
  
}else if(document.getElementById('chocolate').checked)
   {
    somaChocolate = somaChocolate - 1;
    vendaChocolate = vendaChocolate - 25.00;
    if(somaChocolate < 0)
    {
      somaChocolate = 0;
      vendaChocolate = 0.00;
    }
    document.getElementById('resultadoChocolate').innerHTML = somaChocolate;
    document.getElementById('vendaChocolate').innerHTML = vendaChocolate.toFixed(2);
   }
}
function planilha(e)
{
   TableToExcel.convert(document.getElementById('table'));// usar a tableToExcel em letra maiuscula
}