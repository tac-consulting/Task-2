let num=document.getElementById("number")
let number=0;
let minus=document.getElementById("minus");
let reset=document.getElementById("reset");
let plus=document.getElementById("plus");

plus.addEventListener("click",()=>{
    number=number+1;
    num.textContent=number;
})

minus.addEventListener("click",()=>{
    number=number-1;
    num.textContent=number;
})

reset.addEventListener("click",()=>{
    number=0;
    num.textContent=number;
})