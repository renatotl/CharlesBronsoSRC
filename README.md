# catalogoCharlesBronson

Menu principal com a foto do ator Charles Bronson e menus para cadastro, podemos cadastrar mais filmes dele.
Menu de Sobre onte tem um texto que fala um pouco sobre o ator.
Menu lista de filmes onde veremos todos os filmes já cadastrados e podemos tanto apagar filmes já existentes como edtá-los

ESTÉ É A PARTE 2:
houve uas mudanças como pastas e códigod organiados no SRC/ Controllers, Models, Routes.

passo 1: index.js na matris
poasso 2: public com css e js
passo 3: views com o index.ejs
passo 4: criar a pasta SRC na matris com as 4 pastss dentro CONTROLLERS, DATABASE, MODELS, ROUTES.
passo 4: npm init -y para preenchimento outomático ou npm init para manual
passo 5: npm install nodemon --save--dev
passo 6: alterar o script no package.json
 "scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js"
  },
  passo7: npm install express --save /com o save ele está salvo alocado 
  passo8: npm install --save ejs
  passo9: o nosso INDEX.JS na matris já foi configurado de forma correta.
  passo10: routes.js configurado
  passo11: FilmeController é onde a gente controla a rota

  passo12: no PGadimn em Database foi criado uma nova tabela chamada FILMES
  Em filmes abri QUERYTOOL
----------
  create table filme(
id integer not null generated always as identity,
nome character(50) not null,
descricao character (1000) not null,
imagem character (1000) not null,
	primary key (id)
)


insert into filme (nome,descricao,imagem)
values ('Desejo de Matar', 'Em Nova York vive Paul Kersey (Charles Bronson) , um homem pacífico que tem sua vida destroçada quando três marginais invadem seu apartamento, estupram sua filha, que fica em estado gravíssimo, e matam Joanna, sua mulher. Após uma viagem a uma cidade do Arizona na qual todos andam armados e a criminalidade é mínima, Kersey decide eliminar qualquer um que o ameace, pois a polícia se mostra incapaz de encontrar os culpados. Assim Kersey se arma e começa a patrulhar as ruas, matando assassinos e ladrões e ficando obcecado em fazer justiça. Paralelamente ele é caçado por Frank Ochoa (Vincent Gardenia), um detetive da polícia que deseja encontrar o homem que está fazendo o trabalho dos tiras.','img/desejo.jpg')




em tabel filmes botão direito e view edit data



finalizado o banco de dados


passo13: na matris criar arquivo .env(conectr com o banco) e um   .env.exemple(quem quiser baixar e saber como usamos as variáveis) 


dentro do aequivo.env foi copiado igual ado prof

congigurando o .env   1 nome do banco que fizemos lá no postgree 2 nome do postgree 3 senha 4 localhost

passo14: npm i dotenv

passo15: npm install sequelize pg pg-hstore   ele que faz a conexão com o pgadmin

passo16: arquivo bd.js em database
passo17: filmes.js em models


passo18: na rais arquivo procfile





TUDO QUE FOR VALIDAÇÃO E QUANDO CHAMO A ROTA FICA EM CONTROLLERS  CONTROLA TUDO, CLICKE DE CADASTRAR, DELETAÇÃO
-----------------------
DATABASE é a conexão vou mandar as variáveis de ambiente que estam no ENV pro meu BANCO  pelo SEQUELIZE (ORM) ele ajuda na conexão do PG admin com o Node. No DATABASE fica todos os dados necessários para a conexão.
---------------------------
MODELS fica o medele de dados que iremos receber do BANCO o usuário guarda os dados no fronto e ele guarda na tabela assim o BACK entende como está vindo esses dados. Os dados são descontruídos dentro de MODELS 
-------
ROUTES é o caminho da minhas rotas 


======= o index ve as informações e enia informações para o banco, verifica o frameWork que estamos usando que no caso é o EXPRESS, pega o caminho de todas as rotas e passa as rotas pro index
O cliente clica em cadastrar o programa vai em ROUTES e ver qual é a rota cadastrar, acha a rota cadastrar exemplo create e vai lá no CONTROLLERS acha a rota create entra dentro dela e executa o que tem que executar e passa as informações pra MODELS 

HIERARQUIA    INDEX pra ROTA pra CONTROLLER e depois pra MODEL

------------------------------DEPLOY-----------------

 como agora estamos usando o banco de dados vamos seguir o passo a passo:

 Criar nome em letra minúscula o nome não pode existir e estados unidos criar 
 ------------
 Criando banco de dados
  1 resources, em ADD ONS: heroku postgres, Plan name: Hobby Dev-Free, submit e bc criado.
  2 deply, github e pegar o nome do repositório e colar em re-po name,conect, enable eutomac deplay(toda vez que fizer um commit ele atualizar automáticamente), deplay branch
  3 precisamos das ariáveis de hamiente no heroku, em settings, clieque em Config Vars e copie DATABASE_URL
  lembrando que em DATABASE, BD.EJ apague os campos: process.env.DB_BASE,
    process.env.DB_USER,
    process.env.DB_PASS, e host: process.env.DB_HOST,
        port: 5432, 
        na linha logo abaide de :const sequelize = new Sequelize(
          escreva: proces.env.DATABASE_URL,  A VÍRUGALA faz parte do code!
 4 logo abaixo de  dialect: "postgres" coloque: dialectOption: {
            ssl: {
                require: true,
                rejecUnauthorized: false,
            },
        },    

 EM MODELS            
antes de 
module.exports = FilmeB;
coloque : const iniTable =async () =>{

    await FilmeB.sync();
}
initTable()
--
ele cra essa tabela no nosso bc