function fullname(pessoa: IPessoa) {
    return pessoa.nome + " " +
        pessoa.sobrenome;
}

var nome = "Fabiano";
var sobrenome = "Nalin";
console.log(fullname({ nome: "fabiano", sobrenome: "nalin" }));

interface IPessoa {
    nome: string;
    sobrenome: string;
    idade?: number;
}

class Pessoa implements IPessoa {
    nome: string;
    sobrenome: string;

    constructor(private _nome: string, private _sobrenome: string) {
        this.nome = _nome;
        this._sobrenome = _sobrenome;
    }

}

var pessoa = new Pessoa("Raphael", "Nalin");
//pessoa.nome = "Raphael";
//pessoa.sobrenome = "Nalin";

console.log(fullname(pessoa));


interface IAluno extends IPessoa {
    ra: number;
}

interface IProfessor extends IPessoa {
    id: number;
}

class Aluno implements IPessoa {

    constructor(
        public nome: string, public sobrenome: string,
        public ra: number) { }
}

var aluno = new Aluno("Rebeca", "Souza", 123);

class Funcionario extends Aluno {
    constructor(public nome: string, public sobrenome: string,
        public ra: number, public mae: string) {
        super(nome, sobrenome, ra);
    }
}

var funcionario = new Funcionario("nome", "sobrenome", 102, "mãe");
console.log(funcionario.nome);
