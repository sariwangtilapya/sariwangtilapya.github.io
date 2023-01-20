const tabledesmatières=["Imperative I","Infinitive","Mag vs Um","Imperative II","Repeated Expressions"/*,"Mayroon"*/,"Enclitics Overview","Enclitics I","Enclitics II","Enclitics III","Enclitics IV","Sentence Structure"/*,"Ser vs Estar","declension table","all structure cheat sheet"*/];
for (v of tabledesmatières){
document.getElementById("tab").innerHTML+=`<a href="${v}.html">${v}</a><br>`;
}
