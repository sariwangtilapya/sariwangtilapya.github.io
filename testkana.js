const hiragana=["あ", "い", "う", "え", "お", "か", "き", "く", "け", "こ", "さ", "し", "す", "せ", "そ", "た", "ち", "つ", "て", "と", "な", "に", "ぬ", "ね", "の", "は", "ひ", "ふ", "へ", "ほ", "ま", "み", "む", "め", "も", "や", "ゆ", "よ", "ら", "り", "る", "れ", "ろ", "わ", "を", "ん"];
const romaji=["a" ,"i" ,"u" ,"e" ,"o" ,"ka" ,"ki" ,"ku" ,"ke" ,"ko" ,"sa" ,"shi" ,"su" ,"se" ,"so" ,"ta" ,"chi" ,"tsu" ,"te" ,"to" ,"na" ,"ni" ,"nu" ,"ne" ,"no" ,"ha" ,"hi" ,"fu" ,"he" ,"ho" ,"ma" ,"mi" ,"mu" ,"me" ,"mo" ,"ya" ,"yu" ,"yo" ,"ra" ,"ri" ,"ru" ,"re" ,"ro" ,"wa" ,"wo", "n"];

let question=[]; let réponse=[];

function PENA(limite){
return Math.floor(Math.random()*limite);}

function QeRConf(){
for (i=0; i<5; i++){function randomiser(){
let réponseAléa=PENA(hiragana.length);
if (réponse.includes(hiragana[réponseAléa])){randomiser();}
else {réponse.push(hiragana[réponseAléa]);
question.push(romaji[réponseAléa]);}}
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
résultatDas=réponse.indexOf(innerText)===questionUchi?"🔴":"❌";
résultatAff.innerText=résultatDas;
question=[]; réponse=[]; QeRConf();
questionUchi=PENA(question.length);
boutonsAff.innerHTML="";
 boutonsConf();
questionAff.innerText=question[questionUchi];}
