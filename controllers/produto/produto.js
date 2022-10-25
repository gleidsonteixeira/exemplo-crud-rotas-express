let fs = require('fs');

let produtos = fs.readFileSync('controllers/produto/db.json').toString();
let promocao = fs.readFileSync('controllers/produto/db2.json').toString();

function listar(){
    return produtos;
}

function listarPromo(){
    return promocao;
}

function criar(produto){
    produtos.push(produto);
    return produtos
}

function atualizar(){
    return "Atualizar produto"
}

function deletar(produto_id){
    produtos = produtos.filter((prod) => prod.id != produto_id)
    return JSON.stringify(produtos)
}

module.exports = {
    listar: listar,
    listarPromo: listarPromo,
    criar: criar,
    atualizar: atualizar,
    deletar: deletar
}