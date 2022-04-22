let leKanjiMême=[]; let lectureOnyomi=[]; let lectureKunyomi=[];
const kyouikuKanjiNiveaux=[kyouikuKanjiN1,kyouikuKanjiN2,kyouikuKanjiN3,kyouikuKanjiN4,kyouikuKanjiN5,kyouikuKanjiN6,kyouikuKanjiPréfectures];
let kanjiEns=kyouikuKanjiNiveaux[0]; let infoPage=0;

for (i=0; i<kanjiEns.length; i++){leKanjiMême.push(kanjiEns[i][1]);
lectureOnyomi.push(kanjiEns[i][4]); lectureKunyomi.push(kanjiEns[i][5]);}

let questionEns=leKanjiMême; let réponseEns=lectureKunyomi;
let question=[]; let réponse=[];

function PENA(limite){return Math.floor(Math.random()*limite);}

function QeRConf(){for (i=0; i<6; i++){function randomiser(){
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
const infosAff=document.getElementById("infosHako");

function boutonsRéglagesConf(){let i=0; while (i<kyouikuKanjiNiveaux.length){
const réglagesAff=document.createElement("button");
if (i===6){réglagesAff.innerText="Préfectures";} else{réglagesAff.innerText="Niveau "+[i+1];}
réglagesAff.setAttribute("onClick", "réglagesClic(this.id)");
réglagesAff.setAttribute("id", i); infosAff.appendChild(réglagesAff);
/*if (i===4){réglagesAff.appendChild(brAff);} */i++;}} boutonsRéglagesConf();

function choixRéponseConf(){let s=0; for (v of réponse){
const réponseAff=document.createElement("button"); réponseAff.innerText=v;
réponseAff.setAttribute("onClick", "choixRéponseClic(this.innerText)");
boutonsAff.appendChild(réponseAff);
if (s===2){const brAff=document.createElement("br"); boutonsAff.appendChild(brAff);}
s++;}} choixRéponseConf();

function réglagesClic(id){
kanjiEns=kyouikuKanjiNiveaux[parseInt(id)]; lectureKunyomi=[]; lectureOnyomi=[]; leKanjiMême=[];
for (i=0; i<kanjiEns.length; i++){leKanjiMême.push(kanjiEns[i][1]);
lectureOnyomi.push(kanjiEns[i][4]); lectureKunyomi.push(kanjiEns[i][5]);}
questionEns=leKanjiMême; réponseEns=lectureKunyomi;
question=[]; réponse=[]; QeRConf();
questionUchi=PENA(question.length);
boutonsAff.innerHTML=""; choixRéponseConf();
questionAff.innerText=question[questionUchi];}

function choixRéponseClic(innerText){
résultatDas=réponse.indexOf(innerText)===questionUchi?"⭕️":"❌";
résultatAff.innerText=résultatDas; infoPage=1;
infosAff.innerText=réponse[questionUchi];
question=[]; réponse=[]; QeRConf();
questionUchi=PENA(question.length);
boutonsAff.innerHTML=""; choixRéponseConf();
questionAff.innerText=question[questionUchi];}
