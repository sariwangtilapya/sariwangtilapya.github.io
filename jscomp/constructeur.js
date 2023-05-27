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
    navlinksFils.setAttribute("href","/index.html");
    navlinksFils.innerText="Page d'accueil";

const tab=document.createElement("aside");
    tab.setAttribute("class","tab");
    tab.setAttribute("id","tab");



header.appendChild(navbar);
    navbar.appendChild(navbrand);
        navbrand.appendChild(titre);
    navbar.appendChild(navlinks);
        navlinks.appendChild(navlinksFils);

localStorage.setItem("langue","fr");

document.body.insertBefore(header, document.body.firstChild);
document.body.appendChild(tab);

console.log(header.getBoundingClientRect().height);
tab.style.height=`${window.innerHeight-header.getBoundingClientRect().height}px`;
document.getElementById("contenu").style.height=`${window.innerHeight-header.getBoundingClientRect().height}px`;

try {
    nvDArt; // The variable is not set (ReferenceError)
    // document.getElementById("contenu").innerText=nvDArt;
    
  } catch (error) {
    nvDArt=null;

if (nvDArt==null|| nvDArt==0){document.getElementById("contenu").style.display="block";}
// document.getElementById("contenu").innerText=nvDArt==undefined;
  }