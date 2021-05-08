var res=document.getElementById("result");
function calculator(oper){
  let a=document.getElementById("a").value;
  let b=document.getElementById("b").value;
  //let oper=document.getElementById("oper").value;
  if(oper === "c"){
    document.getElementById("result").innerHTML="0";
  } else{
    if(a && b)
      res.innerHTML=eval(Math.round(eval(a+oper+b)*100)/100);
    else
      res.innerHTML="NaN";
  }
}
res.innerHTML="Hello";