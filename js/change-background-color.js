const btnColor = document.querySelector(".btnColor");
btnColor.addEventListener("click",function(){
    
    let myColor = "rgb("+random(255)+","+random(255)+","+random(255)+")";
    console.log(myColor);
    document.body.style.backgroundColor = myColor;
})

function random(num){
    return Math.floor(Math.random() * (num * 1));
}


