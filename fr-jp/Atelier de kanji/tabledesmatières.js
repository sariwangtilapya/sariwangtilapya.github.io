const tabledesmatières=["ki moku","kuchi","royal","sous-particules","Mag vs Um","Enclitics I","Enclitics II","Enclitics III","Enclitics IV","Sentence Structure"/**/];
document.getElementById("tab").innerHTML=`<a href="Course Overview.html">Course Overview</a><br>`;
for (v of tabledesmatières){
document.getElementById("tab").innerHTML+=`<a href="${v}.html">${v}</a><br>`;
}
