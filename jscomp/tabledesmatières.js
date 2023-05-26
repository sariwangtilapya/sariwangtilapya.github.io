const tabledesmatières=[];

function redir(loc){document.location=`${loc}.html`}

const tdmAd=dln.slice(1,lesBarresOubliques[0]).replace(/\//g,"_");
fetch(`/tabledesmatières/${tdmAd}.txt`)
.then(response => response.text())
.then(text => {let i=0, s=0; ix=text.length;
while (i<ix){if (text[i]=="\n"){tabledesmatières.push(text.slice(s,i)); s=i+1;}i++;}
tabledesmatières.push(text.slice(s,i));
for (v of tabledesmatières){
if (v[v.length-1]=="*"){//document.getElementById("tab").innerHTML+=`${v.slice(0,v.length-1)}<br>`;
    const ong=document.createElement("button"); ong.setAttribute("class","tablinks pasdispo");
    ong.innerText=v.slice(0,v.length-1); document.getElementById("tab").appendChild(ong);}
else {const ong=document.createElement("button"); ong.innerText=v;
if (v==nomDuFiche){ong.setAttribute("class","tablinks active");}
else{ong.setAttribute("class","tablinks");}
    ong.setAttribute("onclick","redir(this.innerText)");
    document.getElementById("tab").appendChild(ong)}
}
});
