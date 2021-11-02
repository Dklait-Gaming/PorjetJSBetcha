const bcrypt = require('bcrypt');
const { log } = require('console');
const { response } = require('express');
const express = require('express');
const expressApp = express();
const mongoose = require('mongoose');
const path = require('path');
const { resourceUsage } = require('process');
mongoose.connect("mongodb://localhost:27017/JeuBetcha", //JeuBetcha c'est le nom de ma bdd avec les Collections à l'intérieur
    {
        useNewUrlParser: true
    })
    .then(() => console.log("Connexion à MongoDB..."))
    .catch((error) => console.log(error.message))


/*Mes schémas*/
const utilisateur = new mongoose.Schema
({
    pseudo: String,
    password: String
});

const partie = new mongoose.Schema
({
   name: String,
   Adversaire : String,
   etatpartie : String,
   createurPartie : String,
   mise : Number
});
/*Mes schémas*/


// Création du Model pour les commentaires
const UtilisateurModel = mongoose.model('utilisateur', utilisateur);
const PartieModel = mongoose.model('partie', partie);
// Création du Model pour les commentaires

expressApp.use(express.urlencoded())


/****************************************/

async function CreateUser(name,password)
{
   const utilisateur = new UtilisateurModel
   ({  //La constante Utilisateur va reprendre le modèle de la collection Users de la bdd
      pseudo: name, //Récupération du paramètre name dans le champ pseudo
      password: password //Récupération du paramètre password dans le champ password
   })

   //ça sauvegarde sur la bdd les deux champs
   const Result = await utilisateur.save(); 
   
   //Affichage des données envoyés du formulaire
   console.log(Result); 
}

/***************************************/


expressApp.set('views',path.join(__dirname, 'views'))
expressApp.set('view engine','ejs')


// Pour récup les données d'inscription dans la bdd

expressApp.post("/inscription", async(req, res) => {
   bcrypt.hash(req.body.password,10)
   .then((hash)=>{
      CreateUser(req.body.pseudo,hash)
   })
   .catch((error)=>res.status(500).json({error}))
   
   //redirection sur la page connexion
   res.redirect("/connexion")
   console.log();
   console.log("Utilisateur créée avec succès!!!");
});

//Pour récup les données d'inscription dans la bdd



// Pour récupérer les données concernant la partie

expressApp.post("/connexion", async(req, res) => {
   //try{
   //const hashedPassword= await bcrypt.hash(req.body.password,10)
  bcrypt.hash(req.body.password,10)
  .then((hash)=>{
     CreateUser(req.body.pseudo,hash)
  })
  .catch((error)=>res.status(500).json({error}))
  res.redirect("/create_game")
});

// Pour récupérer les données concernant la partie


function getValue() {
   // Sélectionner l'élément input et récupérer sa valeur
   const input = document.getElementById("miser").value;
   // Afficher la valeur
   alert(input);
}

expressApp.post("/game", (req,res)=>{
   console.log(input);
})




// Pour supprimer la partie

expressApp.delete("/jeu/:id", (req, res) => {
   console.log("id", req.params.id);
   GameModel.findOneAndDelete({'name':req.params.id},async function(err,bddgame){
      
   })
   //users.splice(req.params.id, 1)
   console.log("La partie a été supprimé");
   res.redirect("/")

})

// Pour supprimer la partie



/*Code pour récupérer le nom de la partie*/

expressApp.get("/creategame", (req, res) => {
    console.log("test");

    res.json(users)
})
expressApp.listen(3000, () =>{
      console.log("Serveur mode Terminal fonctionnel...")
   });

/*Code pour récupérer le nom de la partie*/


// Pour la redirection sur la page création partie

   expressApp.post("/connexion", async(req, res) => {
      console.log(req.body);

      // On crée une instance du Model
      const mapartie = new PartieModel(req.body);
  
      // On le sauvegarde dans MongoDB !
      
      mapartie.save (function (err){
      if(err) { throw err; }
      console.log('Partie créée avec succès !');
  
      //redirection de ma page
      res.render("/create_game")
      });
   })

// Pour la redirection sur la page création partie



// Redirection vers la page jeu

   expressApp.post("/create_game", async(req, res) => {
      
      console.log(req.body);
      // On crée une instance du Model
      const mapartie = new PartieModel(req.body);
  
      // On sauvegarde la partie dans MongoDB !
      mapartie.save (function (err){
      if(err) { throw err; }

      // Affichage d'un message dans le terminal
      console.log("Partie créée avec succès !!!");

  
      res.render("jeu.ejs")
      });
   })

// Pour la connexion

expressApp.post("/connexion", async(req, res) => {
   UtilisateurModel.findOne({ 'pseudo' : req.body.pseudo }, function (err, data) {
      if (data) 
      {
          bcrypt.compare(req.body.password, data.password, function (err, result) 
          {
              if (result == true) 
              {
                  console.log("Identifiant OK");
                  res.redirect("/create_game");
                  return

              } 
              else 
              {
                  console.log("Nom d'utilisateur ou mot de passe incorrect");
                  res.render("connexion.ejs");
                  return;
              }
          });

      } 
      else 
      {
          res.render("connexion.ejs");
          return;
      }
  });
});


// Pour la connexion



// Pour miser



//Pour la liste des parties

// Création de la fonction getPartie
async function getPartie(){
   const AllParties = await PartieModel.find(); //Création de la constante AllParties qui reçoit toutes les parties de notre bdd
   return AllParties; //retourner toutes les parties
}
expressApp.get("/create_game", async(req, res) => {
   const AllParties = await  getPartie()
   console.log("AllParties",AllParties);
   res.render("creationpartie.ejs",{AllParties});
})








// Pour naviguer sur la barre de menu

   expressApp.get("/", function(req, res){
      res.render("index.ejs"); 
   });

   expressApp.get("/inscription",function(req,res){
      res.render("inscription.ejs");
   });

   expressApp.get("/connexion",function(req,res){
      res.render("connexion.ejs");
   });

   expressApp.get("/game",function(req,res){
      res.render("jeu.ejs");
   });

// Pour naviguer sur la barre de menu