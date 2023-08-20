const usuarios = [
    { nome: 'joao', idade: 23 },
    { nome: 'maria', idade: 18 },
    { nome: 'ana', idade: 30 },
    { nome: 'rodrigo', idade: 17 }
];
function verificarFesta(grupo){
const resultado = grupo.every((objeto)=>{
return objeto.idade>=18
})

if(resultado){
    console.log("Festa Liberada!")
}else{
    console.log("Possui menor de idade")
}}

verificarFesta(usuarios)