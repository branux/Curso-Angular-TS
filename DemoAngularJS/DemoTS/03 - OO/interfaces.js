var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
function fullname(pessoa) {
    return pessoa.nome + " " +
        pessoa.sobrenome;
}
var nome = "Fabiano";
var sobrenome = "Nalin";
console.log(fullname({ nome: "fabiano", sobrenome: "nalin" }));
var Pessoa = (function () {
    function Pessoa(_nome, _sobrenome) {
        this._nome = _nome;
        this._sobrenome = _sobrenome;
        this.nome = _nome;
        this._sobrenome = _sobrenome;
    }
    return Pessoa;
}());
var pessoa = new Pessoa("Raphael", "Nalin");
//pessoa.nome = "Raphael";
//pessoa.sobrenome = "Nalin";
console.log(fullname(pessoa));
var Aluno = (function () {
    function Aluno(nome, sobrenome, ra) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.ra = ra;
    }
    return Aluno;
}());
var aluno = new Aluno("Rebeca", "Souza", 123);
var Funcionario = (function (_super) {
    __extends(Funcionario, _super);
    function Funcionario(nome, sobrenome, ra, mae) {
        _super.call(this, nome, sobrenome, ra);
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.ra = ra;
        this.mae = mae;
    }
    return Funcionario;
}(Aluno));
var funcionario = new Funcionario("nome", "sobrenome", 102, "mãe");
console.log(funcionario.nome);
//# sourceMappingURL=interfaces.js.map