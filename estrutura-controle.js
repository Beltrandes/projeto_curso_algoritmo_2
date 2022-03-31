
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


    
