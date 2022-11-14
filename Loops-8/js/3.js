function Hs(){
    let x=Number(document.getElementById("in1").value);
    let toplam=0;
    for(let i=0; i<=x; i++){
        toplam=toplam+i;

    }
    document.getElementById("ee").innerHTML=toplam;
}