function délai(a){
document.getElementById("alerte").innerHTML=`${a} secondes avant accès<br>Activez votre niveau TILAPYA <a href="/sanka/niveau tilapya.html">ici</a>`;
if (a==0){document.getElementById("déverrouiller").style.display="block";} a--;
if (a>=0){setTimeout(()=>délai(a),1000);}
}
function pouf(){document.getElementById("contenu").style.visibility="visible";
document.getElementById("pub").style.display="none";}
if (localStorage.getItem("nvTilapya")==null){localStorage.setItem("nvTilapya",0);}

let nvDiff=nvDArt-parseInt(localStorage.getItem("nvTilapya"));
if (nvDiff>0){document.getElementById("contenu").style.visibility="hidden";
document.getElementById("pub").style.display="block";
let tempsRestant=2**(2*nvDiff); délai(tempsRestant);
if (nvDiff>3){document.getElementById("pub").style.display="block";
document.getElementById("pub").innerHTML=`Il faut être au moins niveau ${nvDArt-3} pour accéder à cet article. Vous êtes à niveau ${localStorage.getItem("nvTilapya")}`;
}
}