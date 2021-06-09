# Todolist

# l'affichage des données 

Je n'ai pas reussi à réglé le problème de l'api qui renvoi aucune reponse un puis renvoi parfois une response mais en faisant mes vérifications et des tests j'ai conclu que cela venait probablement de ma fonction getTodos qui était active avant de recevoir une réponse de {data} mais je ne suis pas sûr, j'aurais probablement fait une fonction aynchrone pour attendre une réponse de l'api et executer le reste une fois faite. 

# filters

Je n'ai pas eu l'ocasion de finir les filtres et le tri par manque de temps et d'organisation (j'ai passé plus de temps à debug au final). Cependant j'avais déjà la logique et j'ai pu testé les filtres sur graphQL. J'aurais repris la logique faite avec handleFilterType() et handleChangeDone() pour filtrer / trier et si je n'arrivais pas j'aurais par exemple pour le filtre par catégorie crée une fonction qui va boucler mes todos et permettre de filtrer en comparant la valeur actuelle de mon boutton qui filtre et les types et les types des todos. Revérifier les requetes car avec le button done qui devait changer la valeur isDone en true ou false me renvoyait le status 400.
