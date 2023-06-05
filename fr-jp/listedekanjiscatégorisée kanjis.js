function délai(a){
    listeDeTraits[a].style.display="block";
    listeDeTraits[a].style.animation= `dash ${longueur[a]/(50+vitesseDeTraçage*25)}s linear`;
    iter++;
}
function toDélai(){iter=0; vitesseDeTraçage=document.getElementById("vitesseDeTraçage").value;
document.getElementsByTagName("svg")[0].style.border="1px transparent solid";
    for (v of listeDeTraits){
    v.style.display="none";
}setTimeout(()=>délai(iter),0);}

function dessinerLeKanjiCurry(){dessinerLekanji();}
function dessinerLekanji(){fetch(`https://raw.githubusercontent.com/KanjiVG/kanjivg/master/kanji/${kanjiCode}.svg`)
    .then(response => response.text())
    .then(svgData => {longueur=[]; iter=0;
      svgData=svgData.slice(svgData.search("<svg"));
      document.getElementById('desKan').innerHTML = svgData;
      listeDeTraits=document.getElementsByTagName('path');
    for (v of listeDeTraits){longueur.push(v.getTotalLength());
        v.addEventListener('animationend', () => {
            if (iter<listeDeTraits.length){délai(iter);}
            else{document.getElementsByTagName("svg")[0].style.border="1px black solid";}
          });    }
  if (autoTraçage==1)        
  {toDélai(); }
  desKanBout=document.createElement("button"); desKanBout.innerText="Tracer";
  desKanBout.setAttribute("onclick","toDélai()"); document.getElementById("desKan").appendChild(desKanBout);
    })
    .catch(error => {
      document.getElementById("desKan").innerText="Une erreur s'est produite. Veuillez réessayer."
  desKanBout=document.createElement("button"); desKanBout.innerText="Recharger";
  desKanBout.setAttribute("onclick","dessinerLeKanjiCurry()"); document.getElementById("desKan").appendChild(desKanBout);
    });}

function kanjiClick() {let tKi; vitesseDeTraçage=document.getElementById("vitesseDeTraçage").value;
tousKan=document.getElementsByClassName("kanHakoNaka"); v=0, vx=tousKan.length; while(v<vx){
tousKan[v].addEventListener('click', function(event) {
  tKi=Array.from(document.getElementsByClassName("kanHakoNaka"));
  //range = document.caretRangeFromPoint(event.clientX, event.clientY);
  //var hoveredCharacter = range.startContainer.textContent.charAt(range.startOffset);
  // if (range.startOffset%2==1){hovIdx=range.startOffset-1;} else {hovIdx=range.startOffset;}
  // if (range.startOffset<targetDiv.innerText.length){
if (étatActuel_i==3){
  console.log(tKi.indexOf(event.target));
  document.getElementById("kanjiTitre").innerText=kanjidic_french[(étatActuel_ii[3]-1)*3700+tKi.indexOf(event.target)][0];
  document.getElementById('Onyomi').innerText = kanjidic_french[(étatActuel_ii[3]-1)*3700+tKi.indexOf(event.target)][1];
    j=0, jx=kanjidic_french[(étatActuel_ii[3]-1)*3700+tKi.indexOf(event.target)][2]; okuriganaCom=false;
    wxw="";
    while (j<jx.length){
      if (jx[j]=="."){okuriganaCom=true; wxw+='<span class="okurigana">';}
      else if(okuriganaCom&&(jx[j]==" "||j==jx.length)){okuriganaCom=false; wxw+='</span>';}
      else {wxw+=jx[j];}
      if(jx[j]==" "){wxw+=', '}
      j++;
    }
    document.getElementById('Kunyomi').innerHTML =wxw;
  document.getElementById('Signification').innerText="";
  for (v of kanjidic_french[(étatActuel_ii[3]-1)*3700+tKi.indexOf(event.target)][4]){
  document.getElementById('Signification').innerText += v+"\n";}
  kanjiCode=kanjidic_french[(étatActuel_ii[3]-1)*3700+tKi.indexOf(event.target)][0].charCodeAt(0).toString(16);
  kanAct=kanjidic_french[(étatActuel_ii[3]-1)*3700+tKi.indexOf(event.target)][0];
    document.getElementById('desKan').innerText = `Chargement de l'ordre de traits de ${kanjidic_french[(étatActuel_ii[3]-1)*3700+tKi.indexOf(event.target)][0]}\nLes images SVG grace à KanjiVG`;
}
else{
  document.getElementById("kanjiTitre").innerText=groupements[étatActuel_ii[étatActuel_i]-1][tKi.indexOf(event.target)][0];
  document.getElementById('Onyomi').innerText=groupements[étatActuel_ii[étatActuel_i]-1][tKi.indexOf(event.target)][1];
  j=0, jx=groupements[étatActuel_ii[étatActuel_i]-1][tKi.indexOf(event.target)][2]; okuriganaCom=false;
    wxw="";
    while (j<jx.length){
      if (jx[j]=="."){okuriganaCom=true; wxw+='<span class="okurigana">';}
      else if(okuriganaCom&&(jx[j]==" "||j==jx.length)){okuriganaCom=false; wxw+='</span>';}
      else {wxw+=jx[j];}
      if(jx[j]==" "){wxw+=', '}
      j++;
    }
    document.getElementById('Kunyomi').innerHTML =wxw;
  document.getElementById('Signification').innerText="";
  for (v of groupements[étatActuel_ii[étatActuel_i]-1][tKi.indexOf(event.target)][4]){
  document.getElementById('Signification').innerText += v+"\n";}
  kanjiCode=groupements[étatActuel_ii[étatActuel_i]-1][tKi.indexOf(event.target)][0].charCodeAt(0).toString(16);
  kanAct=groupements[étatActuel_ii[étatActuel_i]-1][tKi.indexOf(event.target)][0];
    document.getElementById('desKan').innerText = `Chargement de l'ordre de traits de ${groupements[étatActuel_ii[étatActuel_i]-1][tKi.indexOf(event.target)][0]}\nLes images SVG grace à KanjiVG`;
  }
while (kanjiCode.length<5){kanjiCode="0"+kanjiCode;}
dessinerLekanji();
}); v++;}}

let dicos=["kanjidic_french/kanji_bank_1.json","jmdict_fr.json"];

const requests = dicos.map((dico) => {
  const url = `/dictionnaires/${dico}`;
  return fetch(url).then(response => response.json()); //json ou text
});

Promise.all(requests)
.then(json=>{kanjidic_french=json[0]; jmdict_fr=json[1];

pOrd("heisig");
nvSc();

// var hovIdx; var range;
// //characteer hover
// var targetDiv = document.getElementById('kanjiHako');
// let bksp=0;
// targetDiv.addEventListener('mousemove', function(event) {
//   range = document.caretRangeFromPoint(event.clientX, event.clientY);
//   //var hoveredCharacter = range.startContainer.textContent.charAt(range.startOffset);
//   if (range.startOffset%2==1){hovIdx=range.startOffset-1;} else {hovIdx=range.startOffset;}
//   if (range.startOffset<targetDiv.innerText.length)
//   {document.getElementById("prevuHako").innerText=range.startContainer.textContent.charAt(hovIdx);}
//  // console.log(hovIdx)
// });

})
.catch(error => {
      console.log(error);
      // Gérez les erreurs de requête ici
    });