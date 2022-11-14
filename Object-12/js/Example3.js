const Person={
    Isim: "Nurdan",
    Soyisim: "Ozkan",
    Yas: 32,
    Id: 273547,
    Boy: 1.70
}

function Getir(){
    document.getElementById("demo3").innerHTML=Person["Isim"]+ "<br>"+ Person["Boy"];
}