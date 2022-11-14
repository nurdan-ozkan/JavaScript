function Calculate(){
    let i1=Number(document.getElementById("in1").value);
    let i2=Number(document.getElementById("in2").value);
    let i3=document.getElementById("in3").value;
    let x;
    switch(i3){
        case "toplama":
            x=i1+i2;
            document.getElementById("s").innnerHTML="Toplama Sonucu:"+" "+x;
        break;
        case "carpma":
            x=i1*i2;
            document.getElementById("s").innnerHTML="Carpma Sonucu:"+" "+x;
        break;
        case "bolme":
            x=i1/i2;
            document.getElementById("s").innnerHTML="Bolme Sonucu:"+" "+x;
        break;
        case "cikarma":
            x=i1-i2;
            document.getElementById("s").innnerHTML="Cikarma Sonucu:"+" "+x;
        break;
        default:
            document.getElementById("s").innnerHTML="Gecersiz Secim:";
        break;
    }
}