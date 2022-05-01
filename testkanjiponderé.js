const résultatAff=document.getElementById("résultatHako")
const boutonsAff=document.getElementById("boutonsHako");
const questionAff=document.getElementById("questionHako");
const infosAff=document.getElementById("infosHako");

const kyouikuKanjiNiveaux=[kyouikuKanjiN1,kyouikuKanjiN2,kyouikuKanjiN3,kyouikuKanjiN4,kyouikuKanjiN5,kyouikuKanjiN6,kyouikuKanjiPréfectures];
let kanjiEns=0; let infoPageNo=1; let yomiChoisieBan=0;
const infoPage=[pageÀPropos, pageEnsembleDeKanjis, pageBonneRéponse, pageLectureAlt];
let dernièresBonnesRéponses=[]; let dernierKanjiEns=0;

let leKanjiMême=[]; let traduction=[]; let lecturesKanji=[[],[]];

let question=[]; let réponse=[[],[]]; let tradDeb=[];
let questionUchi=0; let réponseAléa=0;

function PENA(limite){return Math.floor(Math.random()*limite);}
function pageÀPropos(){infosAff.innerText="Mets des instructions ici."; infoPageNo=0;}

function viderLesTableaux(){leKanjiMême=[]; lecturesKanji=[[],[]]; traduction=[];}
function viderQeR(){question=[]; réponse=[[],[]]; tradDeb=[];}
function tableauKanjiConf(){for (v of kyouikuKanjiNiveaux[kanjiEns]){leKanjiMême.push(v[1]); traduction.push(v[3]); lecturesKanji[1].push(v[4]); lecturesKanji[0].push(v[5]);}}

let poidsNet=0; let poidsAléa=0; let poidsAléaTab=[];

function QeRConf(){poidsAléaTab=[]; for (i=0; i<6; i++){poidsNet=0; for (v of kyouikuKanjiNiveaux[kanjiEns]){poidsNet+=v[6];}
function randomiser(){poidsAléa=Math.random()*poidsNet; réponseAléa=kyouikuKanjiNiveaux[kanjiEns].length;
do{réponseAléa--; poidsNet-=kyouikuKanjiNiveaux[kanjiEns][réponseAléa][6];} while(poidsNet>poidsAléa);
if (réponse[yomiChoisieBan].includes(lecturesKanji[yomiChoisieBan][réponseAléa])){randomiser();}
else {poidsAléaTab.push(réponseAléa); réponse[yomiChoisieBan].push(lecturesKanji[yomiChoisieBan][réponseAléa]);
question.push(leKanjiMême[réponseAléa]); tradDeb.push(traduction[réponseAléa]);
réponse[(yomiChoisieBan+1)%2].push(lecturesKanji[(yomiChoisieBan+1)%2][réponseAléa]);}} randomiser();
}}

function questionDas(){questionUchi=PENA(question.length); questionAff.innerText=question[questionUchi];}

function choixRéponseDas(){let s=0; boutonsAff.innerHTML=""; for (v of réponse[yomiChoisieBan]){
let réponseAff=document.createElement("button"); réponseAff.innerText=v;
réponseAff.setAttribute("onClick", "choixRéponseClic(this.id)"); réponseAff.setAttribute("id", s);
boutonsAff.appendChild(réponseAff); if (s===2){const brAff=document.createElement("br");
boutonsAff.appendChild(brAff);} s++;}
dernierKanjiEns=kanjiEns;}

function boutonsRéglagesDas(){for (i=0; i<kyouikuKanjiNiveaux.length;i++){const réglagesAff=document.createElement("button");
if (i===6){réglagesAff.innerText="Préfectures";} else{réglagesAff.innerText="Niveau "+[i+1];}
réglagesAff.setAttribute("onClick", "réglagesClic(this.id)"); réglagesAff.setAttribute("id", i);
infosAff.appendChild(réglagesAff);}}

//viderLesTableaux(); viderQeR();
tableauKanjiConf(); QeRConf();
questionDas(); choixRéponseDas(); boutonsRéglagesDas();

function réglagesClic(id){kanjiEns=parseInt(id); viderLesTableaux();}

let dernièreBonneRéponse="Bonne réponse : "; let dernièreQuestions=[];
function pageBonneRéponse(){infosAff.innerText=dernièreBonneRéponse; infoPageNo=2;}
function pageEnsembleDeKanjis(){infosAff.innerText=""; boutonsRéglagesDas(); infoPageNo=1;}
let réponseBtn=document.querySelectorAll("#boutonsHako>button");

function réponseIre(vérificateur){if (vérificateur===questionUchi){résultatAff.innerText="⭕️"; kyouikuKanjiNiveaux[dernierKanjiEns][poidsAléaTab[questionUchi]][6]/=4;}
else {résultatAff.innerText="❌"; kyouikuKanjiNiveaux[dernierKanjiEns][poidsAléaTab[questionUchi]][6]*=4;}
dernièreBonneRéponse=question[questionUchi]+" - "+réponse[yomiChoisieBan][questionUchi];
dernièreBonneRéponseAlt=question[questionUchi]+" - "+réponse[(yomiChoisieBan+1)%2][questionUchi];
pageBonneRéponse(); viderQeR(); viderLesTableaux(); tableauKanjiConf(); QeRConf(); questionDas(); choixRéponseDas();;
console.log(kyouikuKanjiNiveaux[kanjiEns][poidsAléaTab[questionUchi]][6]);}
function choixRéponseClic(id){réponseIre(parseInt(id));}


function pageLectureAlt(){infosAff.innerHTML=dernièreBonneRéponseAlt; infoPageNo=3;}

function déroule(value){if (value==="↑"){infoPageNo=(infoPageNo+infoPage.length-1)%infoPage.length;}
else if (value==="↓"){infoPageNo=(infoPageNo+1)%infoPage.length;} infoPage[infoPageNo]();}

const eventCodes=[["ArrowUp","ArrowDown"],["KeyL","Semicolon","Quote","Comma","Period","Slash"],["KeyQ","KeyW","KeyE","KeyA","KeyS","KeyD"],["KeyO","KeyK"],["Digit1","Digit2","Digit3","Digit4","Digit5","Digit6","Digit0"]];
document.addEventListener('keyup', (event) => {
   // console.log(`key=${event.key},code=${event.code}`);
if (eventCodes[0].includes(event.code)){
if (event.code==="ArrowUp"){infoPageNo=(infoPageNo+infoPage.length-1)%infoPage.length;}
else {infoPageNo=(infoPageNo+1)%infoPage.length;} infoPage[infoPageNo]();}
else if (eventCodes[1].includes(event.code)){réponseIre(eventCodes[1].indexOf(event.code));}
else if (eventCodes[2].includes(event.code)){réponseIre(eventCodes[2].indexOf(event.code));}
else if (event.code==="IntlBackslash"){infosAff.innerText=tradDeb[questionUchi];}
else if (eventCodes[4].includes(event.code)){dernierKanjiEns=kanjiEns; kanjiEns=eventCodes[4].indexOf(event.code); viderLesTableaux();}
else if (eventCodes[3].includes(event.code)){réponseBtn=document.querySelectorAll("#boutonsHako>button");
if (event.code==="KeyK"){yomiChoisieBan=0;} else {yomiChoisieBan=1;}
for (i=0; i<réponseBtn.length; i++){réponseBtn[i].innerText=réponse[yomiChoisieBan][i];}}})

