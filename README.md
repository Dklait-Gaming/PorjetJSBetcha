# PorjetJSBetcha

Grille d'auto-évaluation Mehdi IVANCICH


Grille de notation BACK (sur 33 points): 9/33

Les users sont stockés en BDD : 1 point -> FAIT
Les mots de passe sont stockés en base de données sous forme hashée+salée avec bcryptjs : 1 point -> FAIT
Les parties sont stockées en BDD : 1 point -> FAIT
Les users ont des parties : 1 point -> FAIT
Une partie appartient à un seul user : 1 point

chaque participant peut se créer un compte : 2 points -> FAIT
chaque participant peut s'authentifier : 1 point -> FAIT
chaque participant peut se deconnecter : 1 point -> 

On peut créer une nouvelle partie : 2 points
Il faut etre logué pour créer une partie : 1 point -> FAIT On peut se connecter et on arrive sur la page création de partie
On peut lister les parties : 2 points -> FAIT (une liste est présente en dessous de mon formulaire dans creationpartie.ejs)
Il faut etre logué pour lister les parties : 1 point -> FAIT a MOITIE On peut avoir la liste des parties mais j'ai un problème au niveai de la connexion d'un utilisateur

si l'utilisateur n'est pas l'adversaire, la partie sera affichée du point de vue d'un spectateur : 1 point
si l'utilisateur participe à la partie, la partie sera affichée du point de vue du joueur : 1 point

le créateur de la partie peut supprimer cette partie : 1 point -> J'ai essayé de le faire mais ça n'a pas fonctionné
on ne peut pas supprimer une partie dont on est pas le créateur : 1 point

chaque joueur possède initialement 100 jetons : 1 point
Chaque joueur mise en secret un certain nombre de jetons (entre 0 et 100) : 2 points
Celui qui a misé le plus se voit retirer le montant de sa mise de ses jetons, mais voit le lot avancer d'un cran dans sa direction : 3 points
le joueur qui n'a pas remporté le pari garde sa mise et ne perd aucun jeton : 2 points
Les joueurs continuent à parier jusqu'à que le lot arrive sur l'emplacement d'un des joueurs : 1 point
Les joueurs continuent à parier jusqu'à que les deux joueurs n'aient plus de jetons : 1 point
Les joueurs continuent à parier jusqu'à 20 paris maximum : 1 point
Si le lot arrive sur l'emplacement d'un joueur, ce joueur remporte le lot (vainqueur), la partie est terminée : 3 points


Grille de notation FRONT (sur 24 points): Entre 10 et 13/24 (Pouvez vous m'ajouter le point bonus demandé à la fin svp)

Il y a un bouton "créer un compte" : 2 points -> FAIT 
Il y a un bouton "s'authentifier" : 1 point -> FAIT
Il y a un bouton "se deconnecter" : 1 point -> FAIT mais non fonctionnel 

Il y a un bouton "créer une nouvelle partie" : 2 points -> FAIT on peut créer une partie, cela se stocke dans notre bdd
On peut lister les parties : 2 points -> FAIT On a la liste complète de toutes les parties créées

Pour chaque partie de la liste, on voit son nom, son adversaire,son état, un lien pour afficher la partie : 1 point

si l'utilisateur n'est pas l'adversaire, la partie sera affichée du point de vue d'un spectateur : 1 point 
si l'utilisateur participe à la partie, la partie sera affichée du point de vue du joueur : 1 point

le créateur de la partie peut supprimer cette partie : 1 point -> J'ai tenté mais ça n'a pas marché pourtant mon code à l'air bon
on ne peut pas supprimer une partie dont on est pas le créateur : 1 point

On voit 11 emplacements contigus : 2 points -> FAIT
On voit le nom et nombre de jetons des joueurs : 1 point
On peut miser : 3 points -> Je n'ai pas réussi à faire le système de mise mais j'ai fait une simulation avec un input text et quand on valide le formulaire on a une alerte avec l'info récupéré du input text mais cela me génère une erreur que je n'arrive pas à régler
un pari est généré automatiquement après 30 secondes (entre 0 et le nombre de jetons du joueur) : 1 point
la partie sera mise à jour sans intervention de l'utilisateur : 3 points
On voit le nom du gagnant : 1 point

Points bonus eventuels :
- Je peux naviguer dynamiquement sur la barre de menu en .ejs et non en HTML (éventuellement +1 point)
- J'ai fait un text typing sur ma page d'accueil (éventuellement +1 point)
