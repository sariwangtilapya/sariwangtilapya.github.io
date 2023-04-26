const tabledesmatières=["Checklist","Notation","Yes or No","Natural Phenomena","Verb Tenses","Verbs of Displacement","Adjectives","Pronunciation of akó","There is"/*,"---drafts below---","na","pa","Asking Where","Chez moi"*/];
document.getElementById("tab").innerHTML=`LESSONS --> Go to grammar <a href="../grammar/Sentence Structure.html">here</a>.<br>`;
for (v of tabledesmatières){
document.getElementById("tab").innerHTML+=`<a href="${v}.html">${v}</a><br>`;
}
