const tabledesmatières=[];

function redir(loc){document.location=`${loc}.html`}

let d=0, f=0; pp=false; const dln=document.location.pathname, dll=dln.length;
while(dln[dll-d]!="/"){if (dln[dll-d]=="."&&!pp){f=d;} d++;}
const nomDeFiche=decodeURIComponent(dln.slice(dll-d+1,dll-f));

document.title=nomDeFiche;
document.getElementsByClassName("headTitre")[0].innerText="Particules";
// document.getElementsByClassName("headTitre")[1].innerText="Particules";

fetch("tabledesmatières.txt")
.then(response => response.text())
.then(text => {let i=0, s=0; ix=text.length;
while (i<ix){if (text[i]=="\n"){tabledesmatières.push(text.slice(s,i)); s=i+1;}i++;}
for (v of tabledesmatières){
if (v[v.length-1]=="*"){//document.getElementById("tab").innerHTML+=`${v.slice(0,v.length-1)}<br>`;
    const ong=document.createElement("button"); ong.setAttribute("class","tablinks pasdispo");
    ong.innerText=v.slice(0,v.length-1); document.getElementById("tab").appendChild(ong);}
else {const ong=document.createElement("button"); ong.innerText=v;
if (v==nomDeFiche){ong.setAttribute("class","tablinks active");}
else{ong.setAttribute("class","tablinks");}
    ong.setAttribute("onclick","redir(this.innerText)");
    document.getElementById("tab").appendChild(ong)}
}
});
