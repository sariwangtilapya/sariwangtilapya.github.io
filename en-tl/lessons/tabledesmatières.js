const tabledesmatières=["Yes or No","Natural Phenomena","Definiteness","Conjugation Table","Rules of Repetition I","Rules of Infixation","Rules of Prefixation","Rules of Suffixation","Nouns as Verbs","Parts of a Sentence","Attribute","Imperative I","Infinitive","Mag vs Um","Imperative II","Repeated Expressions"/*,"Mayroon"*/,"Enclitics Overview","Enclitics I","Enclitics II","Enclitics III","Enclitics IV","Sentence Structure"/*,"Ser vs Estar","declension table","all structure cheat sheet"*/];
document.getElementById("tab").innerHTML=`<a href="Course Overview.html">Course Overview</a><br>`;
for (v of tabledesmatières){
document.getElementById("tab").innerHTML+=`<a href="${v}.html">${v}</a><br>`;
}
