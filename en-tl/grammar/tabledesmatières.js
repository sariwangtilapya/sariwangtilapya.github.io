const tabledesmatières=["Vowel Mutations","Definiteness","Conjugation Table","Hydration","Rules of Infixation","Rules of Prefixation","Rules of Suffixation","Nouns as Verbs","Parts of a Sentence","Attribute","Imperative I","Infinitive","Mag vs Um","Imperative II","Repeated Expressions","Mayroon","SPAM Overview"/*,"Enclitics I","Enclitics II","Enclitics III","Enclitics IV","Sentence Structure"/*,"Ser vs Estar","declension table","all structure cheat sheet"*/];
document.getElementById("tab").innerHTML=`<a href="Course Overview.html">Course Overview</a><br>`;
for (v of tabledesmatières){
document.getElementById("tab").innerHTML+=`<a href="${v}.html">${v}</a><br>`;
}
