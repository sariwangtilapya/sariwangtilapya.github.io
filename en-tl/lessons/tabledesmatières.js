const tabledesmatières=["Imperative I","Infinitive","Mayroon","Enclitics","declension table","all structure cheat sheet"];
for (v of tabledesmatières){
document.getElementById("tab").innerHTML+=`<a href="${v}.html">${v}</a><br>`;
}
