const tabledesmatières=[];
fetch("tabledesmatières.txt")
.then(response => response.text())
.then(text => {let i=0, s=0; ix=text.length;
while (i<ix){if (text[i]=="\n"){tabledesmatières.push(text.slice(s,i+1)); s=i+1;}i++;}
for (v of tabledesmatières){
document.getElementById("tab").innerHTML+=`<a href="${v}.html">${v}</a><br>`;
}
});
