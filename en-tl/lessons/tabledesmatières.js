const tabledesmatières=["Yes or No","Natural Phenomena","Verb Tenses","Verbs of Displacement","There is","Asking Where","Greeting"];
document.getElementById("tab").innerHTML=`<a href="Course Overview.html">Course Overview</a><br>`;
for (v of tabledesmatières){
document.getElementById("tab").innerHTML+=`<a href="${v}.html">${v}</a><br>`;
}
