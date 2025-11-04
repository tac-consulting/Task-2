let inputcolor=document.getElementById("colorinput")
let generatecolor=document.getElementById("generate-color")
let randomcolor=document.getElementById("generate-randamcolor")



generatecolor.addEventListener('click', ()=>{
    document.body.style.backgroundColor=inputcolor.value;
    inputcolor.value="";

});

//totally we have 3 types of coloring
//hsla(360,100%,50%,0.5)

randomcolor.addEventListener("click",()=>{
    document.body.style.backgroundColor=generateRandomColor();
    inputcolor.value="";
});



function generateRandomColor(){
    let hue=Math.random()*360;
    let saturation=Math.random()*100;
    let lightness=Math.random()*100;
    let alphavalue=Math.random();
    let color=`hsla(${hue}, ${saturation}%, ${lightness}%, ${alphavalue})`;
   

    return color;
};