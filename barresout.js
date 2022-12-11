if (localStorage.getItem("visité")=="0"){
document.body.innerHTML+=`<div id="barreInf"><span>Vos dons nous permet de maintenir et améliorer le site. Merci !</span>
<span style="background-color: #32c1b6; color: #002b36;">BTC : 
    <input type="text" value="19eRibHoLtLhA21RYC2z1Tz31qEaWy98pi" id="btcAd" readonly>
    <button onclick="copierLAd()">Copier</button></span>
<button onclick="fermerB()">×</button>
</div>`;
function fermerB(){
    document.getElementById("barreInf").remove();}
function copierLAd() {var copyText = document.getElementById("btcAd");
copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices
navigator.clipboard.writeText(copyText.value);
  alert("Copied the text: " + copyText.value);}}
