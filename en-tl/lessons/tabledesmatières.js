const tabledesmatières=["Yes or No","Natural Phenomena","Verb Tenses","Verbs of Displacement"/*,"Ser vs Estar","declension table","all structure cheat sheet"*/];
document.getElementById("tab").innerHTML=`<a href="Course Overview.html">Course Overview</a><br>`;
for (v of tabledesmatières){
document.getElementById("tab").innerHTML+=`<a href="${v}.html">${v}</a><br>`;
}
