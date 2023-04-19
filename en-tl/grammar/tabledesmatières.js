const tabledesmatières=["Sentence Structure","Main Predicate Unit","Declension Table","SPAM Overview","Rules of Hydration","Rules of Prefixation","Rules of Infixation","Rules of Suffixation","Conjugation Table","Definiteness","Numbers",/*,"Nouns as Verbs","Parts of a Sentence","Epithet","Repeated Expressions","Infinitive","Imperative II","Imperative I","Mag vs Um","Ser vs Estar"*/];
document.getElementById("tab").innerHTML=`GRAMMAR --> Go to lessons <a href="../lessons/Checklist.html">here</a>.<br>`;
for (v of tabledesmatières){
document.getElementById("tab").innerHTML+=`<a href="${v}.html">${v}</a><br>`;
}
