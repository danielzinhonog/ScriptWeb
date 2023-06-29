export class Calculadora{
   valor1;
   valor2;
   
constructor(n1, n2){
    this.valor1 = n1;
    this.valor2 = n2;
}

somar(){
    return this.valor1 + this.valor2;
}

subtrair(){
    return this.valor1 - this.valor2;
}

multiplicar(){
    return this.valor1 * this.valor2;
}

dividir(){
    return this.valor1 / this.valor2;
}

}