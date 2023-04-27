const tabledesmatières=["Checklist","Notation","Oui ou non","Phénomènes naturels","Temps de verbes","Verbes de déplacement","Adjectifs","Prononciation de akó","Il y a"/*,"---drafts below---","na","pa","Asking Where","Chez moi"*/];
document.getElementById("tab").innerHTML=`LEÇONS --> Grammaire <a href="../grammaire/Structure de phrases.html">ici</a>.<br>`;
for (v of tabledesmatières){
document.getElementById("tab").innerHTML+=`<a href="${v}.html">${v}</a><br>`;
}
