const express = require('express')
const ContatosController = require('./controllers/ContatosController')
const router = express.Router()

router.get('/', ContatosController.index)
router.get('/novo', ContatosController.novo)
router.post('/novo', ContatosController.salvarNovo)
router.get('/excluir/:id', ContatosController.excluir)
router.get('/editar/:id', ContatosController.editar)
router.post('/editar/:id', ContatosController.salvarEditar)

module.exports = router