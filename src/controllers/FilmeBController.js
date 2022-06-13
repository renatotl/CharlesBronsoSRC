const FilmeB = require("../models/FilmesBronson");//trazendo o filme que está cadastrado os dados na tabela no meu banco de dados do arquivo Filmes.js

const orderById = { order: [["id", "ASC"]] };//definido o orderById

//rota principal
const getAll = async (req, res) => {//async, aguarda porque eu vou lá fazer a consulta espere as ações para renderizar a página
    try{//tente por esse caminho se der certo
        const FilmesBronson = await FilmeB.findAll();//aguardando
        res.render("index",{
            FilmesBronson,// este nome tem que está igual a linha de cima
            
            
        });
    }catch(err){//deu erro, venha nesse caminho
        res.status(500).send({err: err.message});//vem do objeto erro
    };
};


//direcionar para pg signup
const signup = (req,res) => {
    try{
    res.render("index2",{});//só quero que ele tente renderizar minha página signup
    
    }catch (err) {
       res.status(500).send({err: err.message})//erro do servidor
    }
    
    };

//mostra a página sobre
    const sobre = (req,res) => {
        try{
        res.render("index3",{});//só quero que ele tente renderizar minha página signup
        
        }catch (err) {
           res.status(500).send({err: err.message})//erro do servidor
        }
        
        };
      
       //criando o controle da rota add
const add = async (req,res) => {
    try {
       const filme =req.body;
       
       await FilmeB.create(filme);
       res.redirect('/')
    } catch (err) {
    res.status(500).send({err: err.message})//erro do servidor
 
    }
 }



     //mostra a página sobre todos os filmes cadastrados
    const filmess = async (req,res) => {
        try{
        const FilmesBronson = await FilmeB.findAll();//aguardando

            // este nome tem que está igual a linha de cima
            res.render("index4",{FilmesBronson});//só quero que ele tente renderizar minha página signup
        
        }catch (err) {
           res.status(500).send({err: err.message})//erro do servidor
        }
        
        };

       //rota deletar o filme
const deletar = async (req,res) => {
    try{//o destoy é uma função // vai lá no banco e destrua i ID que vem do body
        await FilmeB.destroy({where : { id: req.params.id}});// o Where aponta pro ID o req.params.id é o ID que vem do body
        
        res.redirect("/");
    }catch(err){//deu erro, venha nesse caminho
        res.status(500).send({err: err.message});//vem do objeto erro
    };
}
//rota de edição do filme
const editar = async (req,res) => {// realmente edita o filme 
    try{
        //peguei o ID que vem do body e comparei com ID da chave primária do meu banco
        const filme = await FilmeB.findByPk(req.params.id);
        const {nome, descricao, imagem } = req.body;// desconstruindo o objeto para poder editar cada um

        filme.nome = nome;// passando o novo valor
        filme.descricao = descricao;
        filme.imagem = imagem;



        //salvando no banco o SAVE salva direto no banco o filme que vem do body
        const filmeEditado = await filme.save();
        res.render("editar", {
            filme: filmeEditado,// pegou o filme que editei e passou o filmeEditado
            message:"Filme editado com sucesso!",
        });
        res.redirect("/");
    }catch(err){//deu erro, venha nesse caminho
        res.status(500).send({err: err.message});//vem do objeto erro
    };
};
//tela de atualização
const novo = async (req,res) => {
    try{
       
        const filme = await FilmeB.findByPk(req.params.id);
      
    res.render("index5",{filme});//só quero que ele tente renderizar minha página signup
    
    }catch (err) {
       res.status(500).send({err: err.message})//erro do servidor
    }
    
    };

   
        //popapi
        

module.exports = {//exportando todas as rotas que a gente usar qui po routes
    getAll,
    signup,
    sobre,
    filmess,
    add,
    deletar,
    editar,
    novo,
    
    
}