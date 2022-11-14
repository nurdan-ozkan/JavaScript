function AnahtarTest(){
    let x=document.getElementById("in1").value;
    switch(x){
case "bir":
            document.getElementById("demo1").innerHTML="bugun gunlerden Pazartesi"
break;

case "iki":
            document.getElementById("demo1").innerHTML="bugun gunlerden Sali"
break;

case "uc":
            document.getElementById("demo1").innerHTML="bugun gunlerden Carsamba"
break;

default :
            document.getElementById("demo1").innerHTML="gecersiz bir secim"
break;

}
}