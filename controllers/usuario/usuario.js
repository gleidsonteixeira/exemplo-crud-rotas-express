const fs = require('fs');

const usuarios = fs.readFileSync('controllers/usuario/usuarios.db');

function listar () {
    return usuarios;
}

function buscar (idQueVeioNaURL) {
    let usuario = JSON.parse(usuarios).filter(us => us.id == idQueVeioNaURL);
    return usuario[0];
}

function auth (emailReq, senhaReq) {
    let usuario = JSON.parse(usuarios).filter(us => us.email === emailReq);
    if (usuario.length === 0) {
        return "Usuário não encontrado";
    }

    if (usuario[0].senha !== senhaReq) {
        return "Senha incorreta";
    }

    let token = "Tklmf#" + usuario[0].senha + "rau_thtn";
    token = token.split("").reverse().join('');

    return token;
}

module.exports = {
    listar,
    buscar,
    auth,
}