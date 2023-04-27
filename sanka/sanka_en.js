function délai(a){
document.getElementById("alerte").innerText=`${a} seconds before access`;
if (a==0){document.getElementById("déverrouiller").style.display="inline";} a--;
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
document.getElementById("pub").innerHTML=`Must be at level ${nvDArt-3} to access this article. You are at level ${localStorage.getItem("nvTilapya")}`;
}
}