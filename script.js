
const allatok = [
  { nev: "Delfin", meret: 250 },
  { nev: "Tengeri teknős", meret: 120 },
  { nev: "Ponty", meret: 40 },
  { nev: "Korallsügér", meret: 35 }
];


function atlagMeret() {
  let osszeg = 0;
  for (let i = 0; i < allatok.length; i++) {
    osszeg += allatok[i].meret; 
  }
  let atlag = osszeg / allatok.length;
  document.getElementById("eredmeny").textContent = "Átlagos méret: " + atlag + " cm";
}


function nagyobbMint(minMeret) {
  let lista = [];
  for (let i = 0; i < allatok.length; i++) {
    if (allatok[i].meret > minMeret) { 
      lista.push(allatok[i].nev);
    }
  }
  document.getElementById("eredmeny").textContent = 
    "Nagyobb, mint " + minMeret + " cm: " + lista.join(", ");
}

function legnagyobb() {
  let max = allatok[0];
  for (let i = 1; i < allatok.length; i++) {
    if (allatok[i].meret > max.meret) { 
      max = allatok[i];
    }
  }
  document.getElementById("eredmeny").textContent = 
    "A legnagyobb állat: " + max.nev + " (" + max.meret + " cm)";
}


function szamolas(hatar) {
  let db = 0;
  for (let i = 0; i < allatok.length; i++) {
    if (allatok[i].meret < hatar) { 
      db++;
    }
  }
  document.getElementById("eredmeny").textContent = 
    "Ennyi állat kisebb, mint " + hatar + " cm: " + db;
}