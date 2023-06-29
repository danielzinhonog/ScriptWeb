export class Aluno{

    //Atributo Privado
    //Para inserir ou consultar um atributo privado é necessario encapsular
    _cpf
    constructor(n1, n2){
        this.nome = n1;
        this.sobreNome = n2;
    }

    //Para atribuir um valor a um atributo privado utilizamos o método set
    set inseriCpf(cpf){
        this._cpf = cpf;
    }

    //Para visualizar um atributo privado utilizo o get
    get inseriCpf(){
        return this._cpf;
    }

    //Nossos métodos (Comuns)
    falarNome(){
        return this.nome;
    }
}