let brojArtikala = 0;

function dodajUKorpu(naziv) {
  brojArtikala++;
  alert(`Proizvod "${naziv}" je dodat u korpu. Trenutno imate ${brojArtikala} ${brojArtikala === 1 ? 'artikl' : 'artikala'} u korpi.`);
}

function prikaziPoruku() {
  alert("GlinaArt je porodična radionica posvećena ručnoj izradi unikatnih proizvoda od gline.");
}