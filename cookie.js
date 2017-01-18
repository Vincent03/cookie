
//var animal;
//var maladie;
//var sens;
//var nom;
var questions = 4; alert('Bonjour, nous allons te poser une série de quatres questions.');
var tab =new Array;



tab.push = prompt('Il vous reste '+questions+' questions. Comment t\'appelles tu?');
questions -= 1;
tab.push = prompt('Il vous reste '+questions+' questions. Quel maladie te fais le plus peur?');
questions -= 1;
tab.push = prompt('Il vous reste '+questions+' questions. Quel est ton animal préféré?');
questions -= 1;
tab.push = prompt('Il vous reste '+questions+' questions. Peut tu me citer un des cinqs sens?');

alert('Un jour un/une'+tab[2]+'atteint du'+tab[1]+'ayant perdu'+tab[3]+'qui s\'appellait'+tab[0]+'.');





