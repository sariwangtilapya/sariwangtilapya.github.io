function orientationSet(){
    // if (enPortrait||(window.innerHeight<=767&&
        if (window.innerWidth<=768){
        document.getElementById("kanjiHako").style.left="0";
        document.getElementById("kanjiHako").style.width="100vw";
        // navbar.style.padding="0px"; navbar.style.paddingLeft="1rem";
        document.getElementById("détailsHako").style.left="0";
        document.getElementById("détailsHako").style.width="100vw";
        document.getElementById("détailsHako").style.bottom="0";
        // document.getElementById("détailsHako").style.removeProperty("height");
        // document.getElementById("détailsHako").style.height="2.5em";
        // document.getElementById("détailsHako").style.display='flex'
        document.getElementById("kanjiHako").style.overflowY="scroll";
        document.getElementById("optionsFenêtre").appendChild(document.getElementById("ordre"));
        document.getElementById("ordre").style.display="block";
        document.getElementById("optionsBouton").style.position="unset";
        document.getElementById("DHDroite").style.position="fixed";
        document.getElementById("DHDroite").style.bottom="0";
        document.getElementById("DHDroite").style.right="0";
        document.getElementById("DHDroite").style.width="111px";
        document.getElementById("DHGauche").style.width=`${window.innerWidth-document.getElementById("DHDroite").getBoundingClientRect().width}px`;
        document.getElementById("détailsHako").style.height="135px"
        document.getElementById("kanjiHako").style.height=`${window.innerHeight-document.getElementById("header").getBoundingClientRect().height-document.getElementById("détailsHako").getBoundingClientRect().height}px`;
        // document.getElementById("détailsHako").getElementsByTagName("button")[0].style.color="red";
        // for (i=0; i<document.getElementById("détailsHako").getElementsByTagName("button").length; i++){
        //     // document.getElementById("détailsHako").getElementsByTagName("button")[i].style.removeProperty("padding");
        //     document.getElementById("détailsHako").getElementsByTagName("button")[i].style.display="inline-block";
        //     // document.getElementById("détailsHako").getElementsByTagName("button")[i].style.flexShrink=
        //     document.getElementById("détailsHako").getElementsByTagName("button")[i].style.flex="0 0 auto"; 
        //     document.getElementById("détailsHako").getElementsByTagName("button")[i].style.width="auto";
        //     // document.getElementById("détailsHako").getElementsByTagName("button")[i].style.whiteSpace="nowrap";    
        //     }
        }
        else{
        document.getElementById("kanjiHako").style.left="0";
        document.getElementById("kanjiHako").style.width="70vw";
        document.getElementById("kanjiHako").style.height=`${window.innerHeight-document.getElementById("header").getBoundingClientRect().height}px`;
        // document.getElementById("kanjiHako").style.overflowX="unset";
        document.getElementById("kanjiHako").style.overflowY="scroll";
        document.getElementById("ordrePrnt").appendChild(document.getElementById("ordre"));
        document.getElementById("ordre").style.display="inline";
        document.getElementById("optionsBouton").style.position="fixed";
        document.getElementById("DHDroite").style.position="unset";
        document.getElementById("DHDroite").style.bottom="unset";
        document.getElementById("DHDroite").style.right="unset";
        document.getElementById("DHDroite").style.width="unset";
        document.getElementById("DHGauche").style.width=`unset`;
        document.getElementById("détailsHako").style.width="30vw";
        document.getElementById("détailsHako").style.left="70vw";
        document.getElementById("détailsHako").style.bottom="unset";
        document.getElementById("détailsHako").style.height=`${window.innerHeight-document.getElementById("header").getBoundingClientRect().height}px`;
        document.getElementById("détailsHako").style.display="block";
        document.getElementById("détailsHako").style.overflowY="scroll";
        // for (i=0; i<document.getElementById("détailsHako").getElementsByTagName("button").length; i++){
        //     // document.getElementById("détailsHako").getElementsByTagName("button")[i].style.removeProperty("padding");
        //     document.getElementById("détailsHako").getElementsByTagName("button")[i].style.display="block";
        //     // document.getElementById("détailsHako").getElementsByTagName("button")[i].style.flexShrink=
        //     document.getElementById("détailsHako").getElementsByTagName("button")[i].style.flex="unset"; 
        //     document.getElementById("détailsHako").getElementsByTagName("button")[i].style.width="100%";
        //     // document.getElementById("détailsHako").getElementsByTagName("button")[i].style.whiteSpace="nowrap";    
        //     }
        }
      }

      orientationSet();

window.addEventListener('resize', function (){this.setTimeout(orientationSet(),300)});