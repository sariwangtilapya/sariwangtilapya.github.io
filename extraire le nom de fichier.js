let lesBarresOubliquesIter=0, f=0; pp=false; const dln=document.location.pathname, dll=dln.length;
while(dln[dll-lesBarresOubliquesIter]!="/"){
    if (dln[dll-lesBarresOubliquesIter]=="."&&!pp){f=lesBarresOubliquesIter;} lesBarresOubliquesIter++;
}
const nomDuFichier=dln.slice(dll-lesBarresOubliquesIter+1,dll-f);
const extension=dln.slice(dll-f);
document.title=nomDuFichier