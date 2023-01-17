const tabledesmatières=["Phrase complète","Pronomesque","Particules de cas grammaticaux"];
for (v of tabledesmatières){
document.getElementById("tab").innerHTML+=`<a href="${v}.html">${v}</a><br>`;
}
