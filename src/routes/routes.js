const express = require('express');

const path = require('path');

const router = express.Router()

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + "./../pages/index.html"));
})

// router.get("/", (req, res) => {
//     res.sendFile(path.join(__dirname + './pages/home.html'));
// })

const pessoaController = require('../controllers/pessoaController');

const servicoController = require('../controllers/servicoController');

const pacotesController = require('../controllers/pacotesController');

const compromissoController = require('../controllers/compromissoController');

const loginController = require('../controllers/loginController');

const prestarController = require('../controllers/prestarController');



router.get('/pessoa', pessoaController.listarPessoas);

router.get('/pessoa/:id_pessoa', pessoaController.buscarPessoa);

router.post('/pessoa', pessoaController.adicionarPessoa);

router.patch('/pessoa/:id', pessoaController.atualizarPessoa);

router.delete('/pessoa/:id', pessoaController.deletarPessoa);

// SERVICO

//Rotas para Serviço
router.get('/servico', servicoController.listarServico);

router.get('/servico/:id_servico', servicoController.buscarServico);

router.post('/servico', servicoController.adicionarServico);

router.patch('/servico/:id_servico', servicoController.adicionarServico);

router.delete('/servico/:id_servico', servicoController.deletarServico);

//Pacotes

//Rotas para Pacotes
router.get('/pacotes', pacotesController.listarPacotes);

router.get('/pacotes/:id_servico', pacotesController.buscarPacote);

router.post('/pacotes',  pacotesController.adicionarPacote);

router.patch('/pacotes/:id_servico', pacotesController.atualizaPacote);

router.delete('/pacotes/:id_servico',  pacotesController.deletarPacote);

//Compromisso

//Rotas para Compromisso
router.get('/compromisso', compromissoController.listarCompromisso);

router.get('/compromisso/:id_compromisso', compromissoController.buscarCompromisso);
//POST
router.post('/compromisso', compromissoController.adcionarCompromisso);
//PATCH
router.patch('/compromisso/:id_compromisso', compromissoController.atualizarCompromisso);
//DELETE
router.delete('/compromisso/:id_compromisso', compromissoController.deletarCompromisso);

//Prestar

//Rotas para prestar - GET
router.get('/prestar', prestarController.listarPrestar);

router.get('/prestar/:id_prestar', prestarController.buscarPrestar);
//POST
router.post('/prestar', prestarController.adicionarPrestar);
//PATCH 
router.patch('/prestar/:id_prestar', prestarController.atualizaPrestar);
//DELETE
router.delete('/prestar/:id_prestar', prestarController.deletarPrestar);

//Rotas login 
router.post('/login', loginController.loginCliente);



module.exports = router; 


