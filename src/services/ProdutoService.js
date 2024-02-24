const db = require('../db');

module.exports = {
    buscarTodos: () => {
        return new Promise((aceito, rejeitado)=>{
            db.query('SELECT * FROM produtos', (error, results)=>{
                if(error) { rejeitado(error); return; }
                aceito(results);
            });
        });
    }, // codigos que busca todos no banco de dados

    buscarUm: (codigo) => {
        return new Promise((aceito, rejeitado)=>{

            db.query('SELECT * FROM produtos WHERE codigo = ?', [codigo], (error, results) => {
                if(error) { rejeitado(error); return; }
                if(results.length > 0){ 
                    aceito(results[0]);
                }else {
                    aceito(false);
                }
            });
        });
    },// codigos que busca pelo codigo no banco de dados

    inserir: (nome, tamanho, genero)=> {
        return new Promise((aceito, rejeitado)=> {

            db.query('INSERT INTO produtos (nome, tamanho, genero ) VALUES (?, ?, ?)',
                [nome, tamanho, genero],
                (error, results)=>{
                    if(error){ rejeitado(error); return; }
                    aceito(results.insertCodigo); 
                }
            );
        });
    },// codigos que insere no banco

    alterar: (codigo, nome, tamanho, genero) => {
        return new Promise((aceito, rejeitado) => {
            db.query('UPDATE produtos SET nome = ?, tamanho = ?, genero = ? WHERE codigo = ?',
                [nome, tamanho, genero, codigo], 
                (error, results) => {
                    if (error) { rejeitado(error); return; }
                    aceito(results);
                }
            );
        });
    },// codigos que altera

    excluir: (codigo)=> {
        return new Promise((aceito, rejeitado)=> {
            db.query('DELETE FROM produtos WHERE codigo = ?',[codigo], (error, results ) =>{
                if(error){ rejeitado(error); return; }
                aceito(results);
            });
        });
    }// codigos que deleta
}
