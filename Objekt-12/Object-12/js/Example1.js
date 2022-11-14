const meyve=["elma", "armut", 45, 67, "cilek",23];
let t="";
for(let i=0; i<meyve.length; i++){
    t+=meyve[i]+"<br>"
}

document.getElementById("demo1").innerHTML=t;