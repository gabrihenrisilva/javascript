//Variáveis
let NomeAluno;
let SobrenomeAluno;
let anoNascimentoAluno;
let idadeAluno;

//Constantes
const ESCOLA = "Senai";
const Ano_Atual = 2023;

//Receber informações do usuário
NomeAluno = prompt("Digite o seu primeiro nome: ");
SobrenomeAluno = prompt("Digite o seu sobrenome: ");

let NomeAlunoCompleto = NomeAluno + " " + SobrenomeAluno;
anoNascimentoAluno = parseInt(prompt("Digite o ano do seu nascimento: "));
idadeAluno = Ano_Atual - anoNascimentoAluno;

alert("seu nome é " + NomeAlunoCompleto + " e você estuda no " + ESCOLA + ", sua idade é " + idadeAluno + " ano(s).");