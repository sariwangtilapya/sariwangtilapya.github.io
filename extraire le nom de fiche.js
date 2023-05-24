let d=0, f=0; pp=false; const dln=document.location.pathname, dll=dln.length;
while(dln[dll-d]!="/"){
    if (dln[dll-d]=="."&&!pp){f=d;} d++;
}
document.title=dln.slice(dll-d+1,dll-f);