console.log("** ANY **");
var qualquer = 123;
qualquer = "texto";
qualquer = ["texto", 123, true];
console.log(qualquer);
console.log("\n\n** Boolean **");
var boleano = true;
console.log(boleano);
console.log("\n\n** number **");
var num1 = -1;
var num2 = 3.1415;
console.log(num1);
console.log(num2);
console.log("\n\n** String **");
var texto = "texto";
console.log(texto);
console.log("\n\n** Array **");
var arrayAny = ["texto", 123, true];
var arrayNum = [1, 12, 4, 1.2];
console.log(arrayAny);
console.log(arrayNum);
console.log("\n\n** Enums **");
var cores;
(function (cores) {
    cores[cores["Vermelho"] = 2] = "Vermelho";
    cores[cores["Verde"] = 1] = "Verde";
    cores[cores["Azul"] = 10] = "Azul";
})(cores || (cores = {}));
;
console.log(cores.Vermelho);
var cor = cores[10];
console.log(cor);
console.log("\n\n** Void **");
function Escreve() {
    console.log("Fim");
    //return "teste";
}
//# sourceMappingURL=tipos.js.map