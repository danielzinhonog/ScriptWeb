//Criar uma classe pessoa.
    //A pessoa deverá falar seu nome e sua idade.
class Pessoa{
    //Atributos
    nome;
    idade;

    //Métodos - Realiza uma ação.
    falaNome(){
        //Utilizar no metodo return
        return this.nome;
    }

    falarIdade(){
        return this.idade;
    }
}

//Vamos usar o molde - Instanciar a classe
const aluno = new Pessoa ();
aluno.nome = "Marcos Silva";
aluno.idade = 37;

console.log("Nome: " + aluno.falaNome());
console.log("Idade: " + aluno.falaIdade());