const hiragana=["あ", "い", "う", "え", "お", "か", "き", "く", "け", "こ", "さ", "し", "す", "せ", "そ", "た", "ち", "つ", "て", "と", "な", "に", "ぬ", "ね", "の", "は", "ひ", "ふ", "へ", "ほ", "ま", "み", "む", "め", "も", "ら", "り", "る", "れ", "ろ", "や", "ゆ", "よ", "わ", "を", "ん"]
const romaji=["a" ,"i" ,"u" ,"e" ,"o" ,"ka" ,"ki" ,"ku" ,"ke" ,"ko" ,"sa" ,"shi" ,"su" ,"se" ,"so" ,"ta" ,"chi" ,"tsu" ,"te" ,"to" ,"na" ,"ni" ,"nu" ,"ne" ,"no" ,"ha" ,"hi" ,"fu" ,"he" ,"ho" ,"ma" ,"mi" ,"mu" ,"me" ,"mo" ,"ya" ,"yu" ,"yo" ,"ra" ,"ri" ,"ru" ,"re" ,"ro" ,"wa" ,"wo", "n"];

let question=romaji; let réponse= hiragana;
const résultatAff=document.getElementById("résultatHako")
let questionUchi;

questionUchi=Math.floor(Math.random()*question.length);
const boutonsAff=document.getElementById("boutonsHako");
const questionAff=document.getElementById("questionHako");
questionAff.innerText=question[questionUchi];

function clicSuru(innerText){
résultatDas=réponse.indexOf(innerText)===questionUchi?"🔴":"❌";
résultatAff.innerText=résultatDas;
questionUchi=Math.floor(Math.random()*question.length);
questionAff.innerText=question[questionUchi];}

for (v of réponse){
const réponseAff=document.createElement("button");
réponseAff.innerText=v;
réponseAff.setAttribute("onClick", "clicSuru(this.innerText)");
boutonsAff.appendChild(réponseAff);}
