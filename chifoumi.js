const joueurAff = document.getElementById('vous');
const ordiAff = document.getElementById('ordi');
const resultatAff = document.createElement('h3');
const scoreAff = document.createElement('h3');
const jeuAff = document.getElementById('jeu');
jeuAff.append(resultatAff,scoreAff);

const choix = ['Pierre', 'Papier', 'Ciseaux'];
let joueur;
let ordi;
let score=[0,0];


const handleClick = (e) => {
  joueur = e.target.id;
joueurAff.innerHTML = score[0]+' ' + joueur;
  ordiDas()
  scoreDas()
}

const ordiDas = () => {
  const alea = choix[Math.floor(Math.random() * choix.length)];
  ordi = alea;
ordiAff.innerHTML =score[1]+ ' ' + ordi;
}

for (let i = 0; i < choix.length; i++) {
  const boutonsAff = document.createElement('button');
boutonsAff.id = choix [i];
boutonsAff.innerHTML = choix[i];
  boutonsAff.addEventListener('click', handleClick);
  jeuAff.appendChild(boutonsAff);
}

scoreAff = () => {
let jIndex = choix.indexOf (joueur);
let vict=0;
for (let i=1; i<3; i++){
if (choix[(jIndex+i)%3] === ordi){
score [i%2] +=1;
vict=i;}}
joueurAff.innerHTML = score[0]+' ' + joueur;
ordiAff.innerHTML =score[1]+ ' ' + ordi;
switch (vict){
case 0: resultatAff.innerHTML = "ÉGALITÉ !";
break;
case 1: resultatAff.innerHTML = "PERDU !";
break;
case 2: resultatAff.innerHTML = "GAGNÉ !";
break;}
}
