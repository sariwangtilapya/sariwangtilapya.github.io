const tabledesmatières=["Checklist","Notation","Yes or No","Natural Phenomena","Verb Tenses","Verbs of Displacement","Adjectives","Pronunciation of akó","---drafts below---","na","pa","There is","Asking Where","Chez moi"];
document.getElementById("tab").innerHTML=`<a href="Course Overview.html">Course Overview</a><br>`;
for (v of tabledesmatières){
document.getElementById("tab").innerHTML+=`<a href="${v}.html">${v}</a><br>`;
}
