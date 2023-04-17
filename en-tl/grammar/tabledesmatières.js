const tabledesmatières=["Sentence Structure","Main Predicate Unit","SPAM Overview","Declension Table","Conjugation Table","Rules of Prefixation","Rules of Hydration","Rules of Infixation","Rules of Suffixation","Definiteness","Malleable « ng »","Fused « ng »"/*,"Nouns as Verbs","Parts of a Sentence","Epithet","Repeated Expressions","Infinitive","Imperative II","Enclitics I","Enclitics II","Enclitics III","Enc,"Imperative I","Mag vs Um"litics IV","Ser vs Estar"*/];
document.getElementById("tab").innerHTML=`GRAMMAR<br>`;
for (v of tabledesmatières){
document.getElementById("tab").innerHTML+=`<a href="${v}.html">${v}</a><br>`;
}
