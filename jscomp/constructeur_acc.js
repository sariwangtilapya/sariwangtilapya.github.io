// const dln=document.location.pathname, dll=dln.length, lesBarresOubliques=[];
// let lesBarresOubliquesIter=1, lePointDExtension; pointTrouvé=false;
// while(lesBarresOubliquesIter<=dll){
// if (dln[dll-lesBarresOubliquesIter]=="."&&!pointTrouvé){lePointDExtension=dll-lesBarresOubliquesIter; pointTrouvé=true;}
// if (dln[dll-lesBarresOubliquesIter]=="/"){lesBarresOubliques.push(dll-lesBarresOubliquesIter);}
// lesBarresOubliquesIter++;}


// const nomDuFiche=decodeURIComponent(dln.slice(lesBarresOubliques[0]+1,lePointDExtension));
// document.title=nomDuFiche;
const titresArr=["ＳＡＲＩＷＡＮＧ","ＴＩＬＡＰＹＡ","サリワン・ティラピア"];
let titreIndexActuel=0;

const header=document.createElement("header");
const navbar=document.createElement("nav");
    navbar.setAttribute("id","navbar");
const navbrand=document.createElement("div");
    navbrand.setAttribute("id","navbar-brand");
const titre=document.createElement("h1");
    titre.setAttribute("id","titre");
function titreChange(){titreIndexActuel=(titreIndexActuel+1)%3; titre.innerText=titresArr[titreIndexActuel];
    setTimeout(()=>titreChange(),3000);}
    titre.innerText=titresArr[titreIndexActuel];
    setTimeout(()=>titreChange(),3000);
const navlinks=document.createElement("div");
    navlinks.setAttribute("id","navbar-links");
    navlinks.innerHTML=`FR-JP
    <a href="en-jp/home.html">EN-JP</a>
    <a href="fr-tl/accueil.html">FR-TL</a>
    <a href="en-tl/home.html">EN-TL</a></div>`;
// const navlinksFils=document.createElement("a");
//     navlinksFils.setAttribute("href","/index.html");
//     navlinksFils.innerText="Page d'accueil";

// const tab=document.createElement("aside");
//     tab.setAttribute("class","tab");
//     tab.setAttribute("id","tab");

const tab=document.getElementById("tab");

    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    tablinks = document.getElementsByClassName("tablinks");
function onglets(evt, ongletNom) {ongletAct=ongletNom;

    if (enPortrait||(window.innerHeight<=768&&window.innerWidth<=768)){
    document.getElementById(ongletAct).style.left="0px";
    document.getElementById(ongletAct).style.top=`${header.getBoundingClientRect().height}px`;
    document.getElementById(ongletAct).style.width="100vw";
    document.getElementById(ongletAct).style.height=`${window.innerHeight-header.getBoundingClientRect().height-tab.getBoundingClientRect().height}px`;
    }

    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(ongletNom).style.display = "block";
    evt.currentTarget.className += " active";
    }

    document.getElementById("defaultOpen").click();

header.appendChild(navbar);
    navbar.appendChild(navbrand);
        navbrand.appendChild(titre);
    navbar.appendChild(navlinks);
        // navlinks.appendChild(navlinksFils);

localStorage.setItem("langue","fr");

document.body.insertBefore(header, document.body.firstChild);
// document.body.appendChild(tab);
// document.getElementById("contenu").appendChild(droitDAuteur);

tab.style.height=`${window.innerHeight-header.getBoundingClientRect().height}px`;
for (i = 0; i < tabcontent.length; i++) {
tabcontent[i].style.height=`${window.innerHeight-header.getBoundingClientRect().height}px`;}

let enPortrait;
if (window.matchMedia("(orientation: portrait)").matches) {
    enPortrait=true;
} else if (window.matchMedia("(orientation: landscape)").matches) {
    enPortrait=false;
} else {
    enPortrait=false;
}

if (enPortrait||(window.innerHeight<=768&&window.innerWidth<=768)){
    tabcontent = document.getElementsByClassName("tabcontent");
    document.getElementById('Accueil').style.left="0px";
    document.getElementById('Accueil').style.top=`${header.getBoundingClientRect().height}px`;
    document.getElementById('Accueil').style.width="100vw";
    document.getElementById('Accueil').style.height=`${window.innerHeight-header.getBoundingClientRect().height-tab.getBoundingClientRect().height}px`;

for (i = 0; i < tab.getElementsByTagName("button").length; i++) {
    tab.getElementsByTagName("button")[i].style.padding="0px 0em";
}
    // navbar.style.padding="0px"; navbar.style.paddingLeft="1rem";
    tab.style.width="100vw";
    tab.style.bottom="0em";
    // tab.style.removeProperty("height");
    tab.style.padding="0px";
    tab.style.height="6em";
    tab.style.display='flex'
    tab.style.overflowX="auto";
    tab.style.overflowY="hidden";
    }

    document.getElementById("defaultOpen").click();
    
