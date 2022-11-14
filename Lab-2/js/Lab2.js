function Test(){
    let t1=document.getElementById("t").value;
    let i=document.getElementById("in1").value;
    let s=t1.includes(i);

    if(s==true && i!=""){
        document.getElementById("d1").innerHTML="aradidginiz kelime cümle içinde bulunmaktadir";
        document.getElementById("d1").style.color="green";
        
    }else{
        document.getElementById("d1").innerHTML="aradiginiz kelime bulunamadi";
        document.getElementById("d1").style.color="red";
    }
}