const tabledesmatières=[];

function redir(loc){document.location=`${loc}.html`}

document.title="Particules";
document.getElementsByClassName("headTitre")[0].innerText="Particules";
document.getElementsByClassName("headTitre")[1].innerText="Particules";

fetch("tabledesmatières.txt")
.then(response => response.text())
.then(text => {let i=0, s=0; ix=text.length;
while (i<ix){if (text[i]=="\n"){tabledesmatières.push(text.slice(s,i)); s=i+1;}i++;}
for (v of tabledesmatières){
if (v[v.length-1]=="*"){//document.getElementById("tab").innerHTML+=`${v.slice(0,v.length-1)}<br>`;
    const ong=document.createElement("button"); ong.setAttribute("class","tablinks pasdispo");
    ong.innerText=v.slice(0,v.length-1); document.getElementById("tab").appendChild(ong);}
else {//document.getElementById("tab").innerHTML+=`<a href="${v}.html">${v}</a><br>`;
    const ong=document.createElement("button"); ong.setAttribute("class","tablinks");
    ong.innerText=v; ong.setAttribute("onclick","redir(this.innerText)");
    document.getElementById("tab").appendChild(ong)}
}
});
