const tabledesmatières=["Imperative","Mayroon","all structures cheat sheet","declension table"];
for (v of tabledesmatières){
document.getElementById("tab").innerHTML+=`<a href="${v}.html">${v}</a><br>`;
}
