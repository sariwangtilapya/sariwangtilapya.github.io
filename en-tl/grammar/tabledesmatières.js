const tabledesmatières=["Sentence Structure","Main Predicate Unit","Pronouns","SPAM Overview","Declension Table","Conjugation Table","Malleable « ng »","Fused « ng »","Rules of Hydration","Rules of Prefixation","Rules of Infixation","Rules of Suffixation","Definiteness","Numbers",/*,"Nouns as Verbs","Parts of a Sentence","Epithet","Repeated Expressions","Infinitive","Imperative II","Enclitics I","Enclitics II","Enclitics III","Enc,"Imperative I","Mag vs Um"litics IV","Ser vs Estar"*/];
document.getElementById("tab").innerHTML=`GRAMMAR --> Go to lessons <a href="../lessons/Checklist.html">here</a>.<br>`;
for (v of tabledesmatières){
document.getElementById("tab").innerHTML+=`<a href="${v}.html">${v}</a><br>`;
}
