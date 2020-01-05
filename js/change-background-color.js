let showColorCode = document.getElementById("showColorCode");

const btnColor = document.querySelector(".btnColor");
btnColor.addEventListener("click",function(){
    
    let myColor = "RGB("+random(255)+","+random(255)+","+random(255)+")";
    console.log(myColor);
    showColorCode.innerHTML = myColor;
    document.body.style.backgroundColor = myColor;
})

function random(num){
    return Math.floor(Math.random() * (num * 1));
}


