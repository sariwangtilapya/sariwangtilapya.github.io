const tabledesmatières=[];
fetch("tabledesmatières.txt")
.then(response => response.text())
.then(text => {let i=0, s=0; ix=text.length;
while (i<ix){if (text[i]=="\n"){tabledesmatières.push(text.slice(s,i)); s=i+1;}i++;}
for (v of tabledesmatières){
if (v[v.length-1]=="*"){document.getElementById("tab").innerHTML+=`${v.slice(0,v.length-1)}<br>`;}
else {document.getElementById("tab").innerHTML+=`<a href="${v}.html">${v}</a><br>`;}
}
document.title="Particules";
document.getElementsByClassName("headTitre")[0].innerText="Particules";
document.getElementsByClassName("headTitre")[1].innerText="Particules";
});
