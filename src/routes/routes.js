const routes = require("express").Router();//nativo do express, caminho que ele será executado em routes
const FilmeBController = require("../controllers/FilmeBController");//acessa o controllers

routes.get("/", FilmeBController.getAll);//listar tudo que tem na rota (cadastrado no banco)
routes.get("/signup", FilmeBController.signup);// página de cadastro
routes.get("/sobre", FilmeBController.sobre);// página sobre o ator
routes.get("/filmess", FilmeBController.filmess);//Página da lista de filmes cadastrados
routes.post("/add", FilmeBController.add);// rota do cadastro finalizado
routes.get("/delete/:id", FilmeBController.deletar);// rota de delete
routes.get("/novo/:id", FilmeBController.novo);// rota de delete
routes.post("/editar/:id", FilmeBController.editar);// rota de atualizar




module.exports = routes;//exporto ela para qualquer caminho que nesse caso é FilmeController