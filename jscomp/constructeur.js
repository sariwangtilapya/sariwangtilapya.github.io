const dln=document.location.pathname, dll=dln.length, lesBarresOubliques=[];
let lesBarresOubliquesIter=1, lePointDExtension; pointTrouvé=false;
while(lesBarresOubliquesIter<=dll){
if (dln[dll-lesBarresOubliquesIter]=="."&&!pointTrouvé){lePointDExtension=dll-lesBarresOubliquesIter; pointTrouvé=true;}
if (dln[dll-lesBarresOubliquesIter]=="/"){lesBarresOubliques.push(dll-lesBarresOubliquesIter);}
lesBarresOubliquesIter++;}

const nomDuFiche=decodeURIComponent(dln.slice(lesBarresOubliques[0]+1,lePointDExtension));
document.title=nomDuFiche;

const header=document.createElement("header");
const navbar=document.createElement("nav");
    navbar.setAttribute("id","navbar");
const navbrand=document.createElement("div");
    navbrand.setAttribute("id","navbar-brand");
const titre=document.createElement("h1");
    titre.setAttribute("id","titre");
    titre.innerText=decodeURIComponent(dln.slice(lesBarresOubliques[1]+1,lesBarresOubliques[0])).toUpperCase();
const navlinks=document.createElement("div");
    navlinks.setAttribute("id","navbar-links");
const navlinksFils=document.createElement("a");
    if (dln.slice(lesBarresOubliques[lesBarresOubliques.length-1],lesBarresOubliques[lesBarresOubliques.length-2])=="/fr-jp")
    {navlinksFils.setAttribute("href","/index.html");
    navlinksFils.innerText="Page d'accueil";}
    else if (dln.slice(lesBarresOubliques[lesBarresOubliques.length-1],lesBarresOubliques[lesBarresOubliques.length-2])=="/en-jp")
    {navlinksFils.setAttribute("href","/en-jp/home.html");
    navlinksFils.innerText="Home";}

const tab=document.createElement("aside");
    tab.setAttribute("class","tab");
    tab.setAttribute("id","tab");

const droitDAuteur=document.createElement("div");
    droitDAuteur.innerText="sariwangtilapya© 2022";



header.appendChild(navbar);
    navbar.appendChild(navbrand);
        navbrand.appendChild(titre);
    navbar.appendChild(navlinks);
        navlinks.appendChild(navlinksFils);

localStorage.setItem("langue","fr");

document.body.insertBefore(header, document.body.firstChild);
document.body.appendChild(tab);
document.getElementById("contenu").appendChild(droitDAuteur);

// let enPortrait;
//   if (window.matchMedia("(orientation: portrait)").matches) {
//     enPortrait=true;
//   } else if (window.matchMedia("(orientation: landscape)").matches) {
//     enPortrait=false;
//   } else {
//     enPortrait=false;
//   }
//   if (enPortrait||
// function orientationSet(){
//     if (window.innerWidth<=768){
//     document.getElementById("contenu").style.height=`${window.innerHeight+header.getBoundingClientRect().height+tab.getBoundingClientRect().height}px`;    
//     tab.style.bottom="0em";
//     }
//   else{
//     tab.style.height=`${window.innerHeight-header.getBoundingClientRect().height}px`;
//     document.getElementById("contenu").style.height=`${window.innerHeight-header.getBoundingClientRect().height}px`;
//   }
// }
//   window.addEventListener('resize', function (){console.log("changé"); orientationSet()});
try {
    nvDArt; // The variable is not set (ReferenceError)
    
  } catch (error) {
    nvDArt=null;}

if (nvDArt==null|| nvDArt==0){document.getElementById("contenu").style.display="block";}
// document.getElementById("contenu").innerText=nvDArt==undefined;

