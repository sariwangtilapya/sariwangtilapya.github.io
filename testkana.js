const hiragana=["あ","い","う","え","お"];

const romaji=["a","i","u","e","o"];

let question=romaji; let réponse= hiragana;
const résultatAff=document.createElement("p")
let résultatDas="Résultat";
résultatAff.innerText=résultatDas; let questionUchi;

questionUchi=Math.floor(Math.random()*question.length);

const questionAff=document.createElement("p");
questionAff.innerText=question[questionUchi];
document.body.append(questionAff);
document.body.append(résultatAff);

function clicSuru(innerText){
résultatDas=réponse.indexOf(innerText)===questionUchi?"🔴":"❌";
résultatAff.innerText=résultatDas;
questionUchi=Math.floor(Math.random()*question.length);
questionAff.innerText=question[questionUchi];}

for (v of réponse){
const réponseAff=document.createElement("button");
réponseAff.innerText=v;
réponseAff.setAttribute("onClick", "clicSuru(this.innerText)");
document.body.appendChild(réponseAff);}
