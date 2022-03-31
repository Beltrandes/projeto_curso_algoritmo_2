
function acaoBotao() {
    var idade, limite, contador, nome
    limite = prompt("Digite a quantidade de vezes que você quer verificar a idade:" )
    contador = 0
    while (contador < limite){
         nome = prompt("Digite o nome da pessoa:" )
         idade = promt(`Digite a idade do${nome} : ` )
         if (idade > 18)
             document.getElementById("paragrafo").innerText = nome + "você é maior de idade! "
         else
             document.getElementById("paragrafo").innerText = nome + "você é menor de idade! "
         contador++
    
    } 
}