const express = require('express'); //faz requisição do express que foi baixado como dependencia no terminal
const router = express.Router();

const ProdutoController = require('./controllers/ProdutoController');

router.get('/produtos' , ProdutoController.buscarTodos); // criação do endpoint. get(pega)
router.get('/produto/:codigo', ProdutoController.buscarUm);
router.post('/produto', ProdutoController.inserir);// post insere no endpoint
router.put('/produto/:codigo', ProdutoController.alterar);// put alterna no endpoint
router.delete('/produto/:codigo', ProdutoController.excluir);


module.exports = router;


