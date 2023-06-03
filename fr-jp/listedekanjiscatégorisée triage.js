let SdO="kanji_in_context";
let v=0; let vx=systèmesDOrdination.length;
while (v<vx){c=document.createElement("INPUT");
c.setAttribute("type","radio"); c.setAttribute("name","ordre");
c.setAttribute("id",`${systèmesDOrdination[v]}`); c.setAttribute("onClick","réordonner(this.id)");
document.getElementById("ordre").appendChild(c); if (systèmesDOrdination[v]==SdO){c.setAttribute("checked",1)}
l=document.createElement("LABEL"); l.setAttribute("for",`${systèmesDOrdination[v]}`); l.innerHTML=`${systèmesDOrdination[v]}`;
document.getElementById("ordre").appendChild(l);
v++;}

let étatActuel=[nvSc,nvJLPT,SKIP,tousLesKanjis,traits];
let étatActuel_i=0;
let étatActuel_ii=[1,4,4,1];

function dup(vl){document.getElementById("kanjiHako").innerText=""; v=0; vx=groupements[vl-1].length
while (v<vx){let naka=document.createElement("span"); naka.setAttribute("class","kanHakoNaka"); 
naka.innerText=groupements[vl-1][v][0];
document.getElementById("kanjiHako").appendChild(naka);
  //+=`${groupements[vl-1][v][0]}　`; 
  v++;}
  kanjiClick();
//document.getElementById("kanjiHako").innerText=wxw;
document.getElementById("compteHako").innerText=`Il y a ${groupements[vl-1].length} kanjis dans cette liste.`;
}

function nvSc_ii(vl){étatActuel_ii[0]=vl;dup(vl);}
function nvJLPT_ii(vl){étatActuel_ii[1]=vl;dup(vl);}
function SKIP_ii(vl){étatActuel_ii[2]=vl;dup(vl);}
function tousLesKanjis_ii(vl){étatActuel_ii[3]=vl; a=vl*3700;
  if (a>kanjidic_french.length){a=kanjidic_french.length;}

  document.getElementById("kanjiHako").innerText=""; v=0; vx=kanjidic_french.length;
while (v<vx){let naka=document.createElement("span"); naka.setAttribute("class","kanHakoNaka"); 
naka.innerText=kanjidic_french[v][0];
document.getElementById("kanjiHako").appendChild(naka);
  //+=`${groupements[vl-1][v][0]}　`; 
  v++;}
  kanjiClick();
//   wxw=""; i=(vl-1)*3700; while (i<a){wxw+=`${kanjidic_french[i][0]}　`; i++;}
//   document.getElementById("kanjiHako").innerText=wxw;
  document.getElementById("compteHako").innerText=`Kanjis no. ${(vl-1)*3700+1} à ${a}`;
}

  function nvSc(){étatActuel_i=0; groupements=[]; document.getElementById("étage2").innerText="";
for (i=1; i<=10; i++){c=document.createElement("INPUT");
c.setAttribute("type","radio"); c.setAttribute("name","nvSc"); c.setAttribute("id",`nvSc${i}`);
c.setAttribute("value",`${i}`); c.setAttribute("onClick","nvSc_ii(this.value)");
document.getElementById("étage2").appendChild(c); if (i==étatActuel_ii[0]){c.setAttribute("checked",1)}
l=document.createElement("LABEL"); l.setAttribute("for",`nvSc${i}`); l.innerHTML=`${i}`;
document.getElementById("étage2").appendChild(l);
if (i==6){i++;}}
v=0; vx=kanjidic_french.length;
while (v<vx){if (groupements[parseInt(kanjidic_french[v][5].grade)-1]==undefined){groupements[parseInt(kanjidic_french[v][5].grade)-1]=new Array;}
groupements[parseInt(kanjidic_french[v][5].grade)-1].push(kanjidic_french[v]); v++;}
nvSc_ii(étatActuel_ii[0]);
}

function nvJLPT(){étatActuel_i=1; groupements=[]; document.getElementById("étage2").innerText="";
for (i=4; i>0; i--){c=document.createElement("INPUT");
c.setAttribute("type","radio"); c.setAttribute("name","nvJLPT"); c.setAttribute("id",`nvJLPT${i}`);
c.setAttribute("value",`${i}`); c.setAttribute("onClick","nvJLPT_ii(this.value)");
document.getElementById("étage2").appendChild(c); if (i==étatActuel_ii[1]){c.setAttribute("checked",1)}
l=document.createElement("LABEL"); l.setAttribute("for",`nvJLPT${i}`); l.innerHTML=`${i}`;
document.getElementById("étage2").appendChild(l);}
for (v of kanjidic_french){if (groupements[parseInt(v[5].jlpt)-1]==undefined){groupements[parseInt(v[5].jlpt)-1]=new Array;}
groupements[parseInt(v[5].jlpt)-1].push(v)}
nvJLPT_ii(étatActuel_ii[1]);
}

function SKIP(){étatActuel_i=2; groupements=[]; document.getElementById("étage2").innerText="";
for (i=4; i>0; i--){c=document.createElement("INPUT");
c.setAttribute("type","radio"); c.setAttribute("name","SKIP"); c.setAttribute("id",`SKIP${i}`);
c.setAttribute("value",`${i}`); c.setAttribute("onClick","SKIP_ii(this.value)");
document.getElementById("étage2").appendChild(c); if (i==étatActuel_ii[2]){c.setAttribute("checked",1)}
l=document.createElement("LABEL"); l.setAttribute("for",`SKIP${i}`); l.innerHTML=`${i}`;
document.getElementById("étage2").appendChild(l);}
for (v of kanjidic_french){if (groupements[parseInt(v[5].skip)-1]==undefined){groupements[parseInt(v[5].skip)-1]=new Array;}
groupements[parseInt(v[5].skip)-1].push(v)}
SKIP_ii(étatActuel_ii[2]);
}

function tousLesKanjis(){étatActuel_i=3; document.getElementById("étage2").innerText="page : ";
i=1; while (i<=3){c=document.createElement("INPUT");
c.setAttribute("type","radio"); c.setAttribute("name","tousLesKanjis"); c.setAttribute("id",`tousLesKanjis${i}`);
c.setAttribute("value",`${i}`); c.setAttribute("onClick","tousLesKanjis_ii(this.value)");
document.getElementById("étage2").appendChild(c); if (i==1){c.setAttribute("checked",1)}
l=document.createElement("LABEL"); l.setAttribute("for",`tousLesKanjis${i}`); l.innerHTML=`${i}`;
document.getElementById("étage2").appendChild(l);
i++;}
tousLesKanjis_ii(étatActuel_ii[3])
}

function traits(){groupements=[];
étage2.innerHTML=`<input type="checkbox" name="Niveau Scolaire" onclick="nvS1()">1<input type="checkbox" name="Niveau Scolaire" onclick="nvS2()">2`
for (v of kanjidic_french){if (groupements[parseInt(v[5].strokes)-1]==undefined){groupements[parseInt(v[5].strokes)-1]=new Array;}
groupements[parseInt(v[5].strokes)-1].push(v)}
wxw="";
for (v of groupements){if (v!=undefined){
for (w of v){wxw+=w[0]+"　";}
}wxw+="\n";}
document.getElementById("kanjiHako").innerText=wxw;}

// if (document.getElementById("nvSc").checked==1){nvSc();}

function pOrd(sSdO){SdO=sSdO;
let sorter=[]; let uSorter=[];
v=0; vx=kanjidic_french.length;
while (v<vx){if (eval(`kanjidic_french[v][5].${sSdO}`)!=undefined){sorter.push(kanjidic_french[v]);} else {uSorter.push(kanjidic_french[v]);}v++;}
sorter.sort(function(a,b) {return parseInt(eval(`a[5].${sSdO}`),10)-parseInt(eval(`b[5].${sSdO}`),10);});
kanjidic_french=sorter.concat(uSorter);
}

function réordonner(id){
    pOrd(id); étatActuel[étatActuel_i]();
}
function fermerI(){
    document.getElementById("insBoî").remove();
}

let vocListe=[];
function vocabAff(kA){vocListe=[]; document.getElementById("vocab").innerHTML="";
  v=0; vx=jmdict_fr.length;
    while (v<vx){if (jmdict_fr[v][0].includes(kA)){
      // wxw+=`${jmdict_fr[v]}\n`;}v++;
      vocBoî=document.createElement("div"); vocBoî.innerText=jmdict_fr[v];
      document.getElementById("vocab").appendChild(vocBoî);}
    // document.getElementById("vocab").innerText=wxw;
    v++;}
    document.getElementById("boîCach").style.display="block";
}