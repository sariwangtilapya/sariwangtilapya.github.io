const hiraganagojuon=["あ", "い", "う", "え", "お", "か", "き", "く", "け", "こ", "さ", "し", "す", "せ", "そ", "た", "ち", "つ", "て", "と", "な", "に", "ぬ", "ね", "の", "は", "ひ", "ふ", "へ", "ほ", "ま", "み", "む", "め", "も", "や", "ゆ", "よ", "ら", "り", "る", "れ", "ろ", "わ", "を", "ん"];
const katakanagojuon=["ア", "イ", "ウ", "エ", "オ", "カ", "キ", "ク", "ケ", "コ", "サ", "シ", "ス", "セ", "ソ", "タ", "チ", "ツ", "テ", "ト", "ナ", "ニ", "ヌ", "ネ", "ノ", "ハ", "ヒ", "フ", "ヘ", "ホ", "マ", "ミ", "ム", "メ", "モ", "ヤ", "ユ", "ヨ", "ラ", "リ", "ル", "レ", "ロ", "ワ", "ヲ", "ン"];
const romajigojuon=["a" ,"i" ,"u" ,"e" ,"o" ,"ka" ,"ki" ,"ku" ,"ke" ,"ko" ,"sa" ,"shi" ,"su" ,"se" ,"so" ,"ta" ,"chi" ,"tsu" ,"te" ,"to" ,"na" ,"ni" ,"nu" ,"ne" ,"no" ,"ha" ,"hi" ,"fu" ,"he" ,"ho" ,"ma" ,"mi" ,"mu" ,"me" ,"mo" ,"ya" ,"yu" ,"yo" ,"ra" ,"ri" ,"ru" ,"re" ,"ro" ,"wa" ,"wo", "n"];

let poids=[]; let poidsNet=0; let poidsAléa=0; let réponseAléa=0;

for (v of hiraganagojuon){poids.push(1);}

let question=[]; let réponse=[];

function PENA(limite){return Math.floor(Math.random()*limite);}



function QeRConf(){
for (i=0; i<6; i++){poidsNet=0; for(v of poids){poidsNet+=v;}
function randomiser(){poidsAléa=Math.random()*poidsNet; réponseAléa=poids.length;
do{réponseAléa--; poidsNet-=poids[réponseAléa];} while(poidsNet>poidsAléa);
if (réponse.includes(romajigojuon[réponseAléa])){randomiser();}
else {réponse.push(romajigojuon[réponseAléa]);
question.push(hiraganagojuon[réponseAléa]);}}
randomiser();}} QeRConf();

const résultatAff=document.getElementById("résultatHako")
let questionUchi=PENA(question.length);
const boutonsAff=document.getElementById("boutonsHako");
const questionAff=document.getElementById("questionHako");
questionAff.innerText=question[questionUchi];

function boutonsConf(){let s=0; for (v of réponse){
const réponseAff=document.createElement("button");
const brAff=document.createElement("br"); réponseAff.innerText=v;
réponseAff.setAttribute("onClick", "clicSuru(this.innerText)");
boutonsAff.appendChild(réponseAff);
if (s===2){boutonsAff.appendChild(brAff); s++;}}}

boutonsConf();

function réponseIre(vérificateur){
if (vérificateur===questionUchi){résultatDas="⭕️"; poids[romajigojuon.indexOf(question[questionUchi])]/=4;}
else {résultatDas="❌"; poids[romajigojuon.indexOf(question[questionUchi])]*=4;}
résultatAff.innerText=résultatDas;
question=[]; réponse=[]; QeRConf();
questionUchi=PENA(question.length);
boutonsAff.innerHTML=""; boutonsConf();
questionAff.innerText=question[questionUchi];}
function clicSuru(innerText){réponseIre(réponse.indexOf(innerText));}

const eventCodes=[["KeyL","Semicolon","Quote","Comma","Period","Slash"],["KeyQ","KeyW","KeyE","KeyA","KeyS","KeyD"]];
document.addEventListener('keyup', (event) => {
   // console.log(`key=${event.key},code=${event.code
if (eventCodes[0].includes(event.code)){réponseIre(eventCodes[0].indexOf(event.code));}
else if (eventCodes[1].includes(event.code)){réponseIre(eventCodes[1].indexOf(event.code));}})
