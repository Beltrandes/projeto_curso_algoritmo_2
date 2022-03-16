/*
Var
// Seção de Declarações das variáveis 
   nota1, nota2, nota3, nota4, media: real
   nome: caractere

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
   escreval("Digite o nome do aluno")
   leia(nome)
   escreval("Digite a nota 1 do aluno:")
   leia(nota1)
   escreval("Digite a nota 2 do aluno:")
   leia(nota2)
   escreval("Digite a nota 3 do aluno:")
   leia(nota3)
   escreval("Digite a nota 4 do aluno:")
   leia(nota4)
   media := (nota1 + nota2 + nota3 + nota4) / 4

   se media >= 5 entao
   escreval("Aprovado!", nome)
   escreval("Sua média foi:", media)
   senao
   escreval("Reprovado!", nome)
   escreval("Sua média foi", media)
   fimse
   
Fimalgoritmo
*/
var nome, nota1, nota2, nota3, nota4, media;
nome = prompt("Digite o nome do aluno:")
nota1 = prompt("Digite a Nota 1 do aluno:")
nota2 = prompt("Digite a Nota 2 do aluno:")


media = (parseInt(nota1) + parseInt(nota2)) / 2;

if(media >= 5){
  alert("Voce foi aprovado!" + nome)
  alert("Sua media foi:" + media)
}
else
  alert("Voce foi reprovado!" + nome)
  alert("Sua media foi:" + media)