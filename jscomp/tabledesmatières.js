const tabledesmatières=[];

function redir(loc){document.location=`${loc}.html`}

//console.log(tab.getElementsByClassName("tablinks")[0].style);
function orientationSet(){
    // if (enPortrait||(window.innerHeight<=767&&
        if (window.innerWidth<=768){
        document.getElementById("contenu").style.left="0";
        document.getElementById("contenu").style.width="100vw";
        // navbar.style.padding="0px"; navbar.style.paddingLeft="1rem";
        tab.style.width="100vw";
        tab.style.bottom="0em";
        // tab.style.removeProperty("height");
        tab.style.height="2.5em";
        tab.style.display='flex'
        tab.style.overflowX="scroll";
        tab.style.overflowY="hidden";
        document.getElementById("contenu").style.height=`${window.innerHeight-header.getBoundingClientRect().height-tab.getBoundingClientRect().height}px`;
        // tab.getElementsByTagName("button")[0].style.color="red";
        for (i=0; i<tab.getElementsByTagName("button").length; i++){
            // tab.getElementsByTagName("button")[i].style.removeProperty("padding");
            tab.getElementsByTagName("button")[i].style.display="inline-block";
            // tab.getElementsByTagName("button")[i].style.flexShrink=
            tab.getElementsByTagName("button")[i].style.flex="0 0 auto"; 
            tab.getElementsByTagName("button")[i].style.width="auto";
            // tab.getElementsByTagName("button")[i].style.whiteSpace="nowrap";    
        }
        }
        else{
        document.getElementById("contenu").style.left="25vw";
        document.getElementById("contenu").style.width="75vw";
        document.getElementById("contenu").style.height=`${window.innerHeight-header.getBoundingClientRect().height}px`;
        tab.style.width="25vw";
        tab.style.bottom="unset";
        tab.style.height=`${window.innerHeight-header.getBoundingClientRect().height}px`;
        tab.style.display="unset";
        tab.style.overflowX="unset";
        tab.style.overflowY="scroll";
        for (i=0; i<tab.getElementsByTagName("button").length; i++){
            // tab.getElementsByTagName("button")[i].style.removeProperty("padding");
            tab.getElementsByTagName("button")[i].style.display="block";
            // tab.getElementsByTagName("button")[i].style.flexShrink=
            tab.getElementsByTagName("button")[i].style.flex="unset"; 
            tab.getElementsByTagName("button")[i].style.width="100%";
            // tab.getElementsByTagName("button")[i].style.whiteSpace="nowrap";    
        }
        }
      }

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


orientationSet();

window.addEventListener('resize', function (){this.setTimeout(orientationSet(),300)});

});


