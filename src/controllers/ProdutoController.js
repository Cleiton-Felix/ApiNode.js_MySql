const ProdutoService = require('../services/ProdutoService');

module.exports = {
    buscarTodos: async (req, res) => {
        let json = {error:'', result:[]};

        let produtos = await ProdutoService.buscarTodos();

        for(let i in produtos){
            json.result.push({
                codigo: produtos[i].codigo,
                descricao: produtos[i].nome
            });
        }

        res.json(json);
    },

    buscarUm: async (req, res) => {
        let json = {error:'', result:{}};

        let codigo = req.params.codigo; 
        let produto = await ProdutoService.buscarUm(codigo);

        if(produto){
            json.result = produto; 
        }

        res.json(json);
    },

    inserir: async(req, res) => {
        let json = {error:'', result:{}};

        let nome = req.body.nome;
        let tamanho = req.body.tamanho;
        let genero = req.body.genero;

        if (nome && tamanho && genero){
            let ProdutoCodigo = await ProdutoService.inserir(nome, tamanho, genero);
            json.result = {
                codigo: ProdutoCodigo,
                nome,
                tamanho,
                genero
            };
        }else{
            json.error = 'Campos não enviados';
        }
        res.json(json);
    },

    alterar: async(req, res) => {
        let json = {error:'', result:{}};

        let codigo = req.params.codigo;
        let nome = req.body.nome;
        let tamanho = req.body.tamanho;
        let genero = req.body.genero;

        if (codigo && nome && tamanho && genero){
            await ProdutoService.alterar(codigo, nome, tamanho, genero);
            json.result = {
                codigo,
                nome,
                tamanho,
                genero
            };
        }else{
            json.error = 'Campos não enviados';
        }
        res.json(json);
    },

    excluir: async(req, res) => {
        let json = {error:'', result:{}};

        await ProdutoService.excluir(req.params.codigo);
        
        res.json(json);
    }
};
// todos os codigos acima, trata os erros e resultados 