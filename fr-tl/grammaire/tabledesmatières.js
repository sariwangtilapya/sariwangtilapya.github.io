const tabledesmatières=["Structure de phrases","Groupe de prédicat principal","Tableau de déclination","Résumé de SPAMs","Règles of hydratation","Règles de préfixion","Règles d'infixion","Règles de suffixion","On","Conjugaisons","Definition","Nombres",/*,"Nouns as Verbs","Parts of a Sentence","Epithet","Repeated Expressions","Infinitive","Imperative II","Imperative I","Mag vs Um","Ser vs Estar"*/];
document.getElementById("tab").innerHTML=`GRAMMAR --> Go to lessons <a href="../lessons/Checklist.html">here</a>.<br>`;
for (v of tabledesmatières){
document.getElementById("tab").innerHTML+=`<a href="${v}.html">${v}</a><br>`;
}
