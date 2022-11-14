let msg=[];
function Add(){
    let x=document.getElementById("in1").value;
    msg.push(x,"<br>");
    document.getElementById("i").innerHTML=msg;
}
function Delete(){
    msg.pop();
    document.getElementById("i").innerHTML=msg;
}