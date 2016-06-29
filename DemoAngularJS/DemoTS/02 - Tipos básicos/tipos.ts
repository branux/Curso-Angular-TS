console.log("** ANY **");
var qualquer: any = 123;
qualquer = "texto";
qualquer = ["texto", 123, true];
console.log(qualquer);


console.log("\n\n** Boolean **");
var boleano: boolean = true;
console.log(boleano);

console.log("\n\n** number **");
var num1: number = -1;
var num2: number = 3.1415;
console.log(num1);
console.log(num2);

console.log("\n\n** String **");
var texto: string = "texto";
console.log(texto);

console.log("\n\n** Array **");
var arrayAny: Array<any> = ["texto", 123, true];
var arrayNum: number[] = [1, 12, 4, 1.2];
console.log(arrayAny);
console.log(arrayNum);

console.log("\n\n** Enums **");
enum cores { Vermelho=2, Verde=1, Azul=10 };
console.log(cores.Vermelho);
var cor: string = cores[10];
console.log(cor);

console.log("\n\n** Void **");
function Escreve(): void {
    console.log("Fim");
    //return "teste";
}