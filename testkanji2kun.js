const leKanjiMême=[]; const lectureOnyomi=[]; const lectureKunyomi=[];
let kanjiEns=kyouikuKanjiN2;

for (i=0; i<kanjiEns.length; i++){
leKanjiMême.push(kanjiEns[i][1]);
lectureOnyomi.push(kanjiEns[i][4]);
lectureKunyomi.push(kanjiEns[i][5]);}

let questionEns=leKanjiMême; let réponseEns=lectureKunyomi;
let question=[]; let réponse=[];

function PENA(limite){return Math.floor(Math.random()*limite);}

function QeRConf(){
for (i=0; i<6; i++){function randomiser(){
let réponseAléa=PENA(réponseEns.length);
if (réponse.includes(réponseEns[réponseAléa])){randomiser();}
else {réponse.push(réponseEns[réponseAléa]);
question.push(questionEns[réponseAléa]);}}
randomiser();}} QeRConf();

const résultatAff=document.getElementById("résultatHako")
let questionUchi=PENA(question.length);
const boutonsAff=document.getElementById("boutonsHako");
const questionAff=document.getElementById("questionHako");
questionAff.innerText=question[questionUchi];

function boutonsConf(){let s=0;
for (v of réponse){
const réponseAff=document.createElement("button");
const brAff=document.createElement("br");
réponseAff.innerText=v;
réponseAff.setAttribute("onClick", "clicSuru(this.innerText)");
boutonsAff.appendChild(réponseAff);
if (s===2){boutonsAff.appendChild(brAff); s++;}}
} boutonsConf();

function clicSuru(innerText){
résultatDas=réponse.indexOf(innerText)===questionUchi?"⭕️":"❌"+réponse[questionUchi];
résultatAff.innerText=résultatDas;
question=[]; réponse=[]; QeRConf();
questionUchi=PENA(question.length);
boutonsAff.innerHTML=""; boutonsConf();
questionAff.innerText=question[questionUchi];}
