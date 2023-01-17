tabledesmatières=["Phrase complète","Pronomesque","Particules de cas grammaticaux"];
for (v of tabledesmatières){
document.getElementByClass("tab").innerHTML+=`<a href="${v}.html">${v}</a><br>`;
}
