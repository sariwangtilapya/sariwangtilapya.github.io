const tabledesmatières=["Parts of a Sentence","Imperative I","Infinitive","Mag vs Um","Imperative II","Repeated Expressions"/*,"Mayroon"*/,"Enclitics Overview","Enclitics I","Enclitics II","Enclitics III","Enclitics IV","Sentence Structure"/*,"Ser vs Estar","declension table","all structure cheat sheet"*/];
document.getElementById("tab").innerHTML=`<a href="Course Overview.html">Course Overview</a><br>`;
for (v of tabledesmatières){
document.getElementById("tab").innerHTML+=`<a href="${v}.html">${v}</a><br>`;
}
