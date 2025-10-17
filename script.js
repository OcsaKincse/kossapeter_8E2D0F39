// Vizi állatok adatai (tömb)
const allatok = [
  { nev: "Delfin", meret: 250 },
  { nev: "Tengeri teknős", meret: 120 },
  { nev: "Ponty", meret: 40 },
  { nev: "Korallsügér", meret: 35 }
];

// 1) Függvény – aritmetikai művelet + ciklus + összegzés (programozási tétel)
function atlagMeret() {
  let osszeg = 0;
  for (let i = 0; i < allatok.length; i++) {
    osszeg += allatok[i].meret; // aritmetikai művelet
  }
  let atlag = osszeg / allatok.length;
  document.getElementById("eredmeny").textContent = "Átlagos méret: " + atlag + " cm";
}

// 2) Függvény – paraméteres + elágazás + logikai művelet
function nagyobbMint(minMeret) {
  let lista = [];
  for (let i = 0; i < allatok.length; i++) {
    if (allatok[i].meret > minMeret) { // logikai művelet + elágazás
      lista.push(allatok[i].nev);
    }
  }
  document.getElementById("eredmeny").textContent = 
    "Nagyobb, mint " + minMeret + " cm: " + lista.join(", ");
}

// 3) Függvény – kiválasztás (programozási tétel)
function legnagyobb() {
  let max = allatok[0];
  for (let i = 1; i < allatok.length; i++) {
    if (allatok[i].meret > max.meret) { // logikai művelet + elágazás
      max = allatok[i];
    }
  }
  document.getElementById("eredmeny").textContent = 
    "A legnagyobb állat: " + max.nev + " (" + max.meret + " cm)";
}

// 4) Függvény – számlálás (programozási tétel)
function szamolas(hatar) {
  let db = 0;
  for (let i = 0; i < allatok.length; i++) {
    if (allatok[i].meret < hatar) { // elágazás
      db++;
    }
  }
  document.getElementById("eredmeny").textContent = 
    "Ennyi állat kisebb, mint " + hatar + " cm: " + db;
}