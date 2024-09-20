var drum=document.querySelectorAll(".drum").length;

for(var i=0;i<drum;i++){
    
    document.querySelectorAll(".drum")[i].addEventListener("click",gotclicked);
function gotclicked(){
    
    var button = this.innerHTML;
    Makesound(button);
    ButtonAnimation(button);
   
}

document.addEventListener("keydown",function(event){
   Makesound(event.key);
   ButtonAnimation(event.key);
})
}




function Makesound(key){
    switch (key) {
        case "w":
            var audio=new Audio("sounds/tom-1.mp3");
            audio.volume = 0.2;
            audio.play();
            
            break;
        case "a":
            var audio=new Audio("sounds/tom-2.mp3");
            audio.volume = 0.2;
            audio.play();
            
            break;
        case "s":
            var audio=new Audio("sounds/tom-3.mp3");
            audio.volume = 0.2;
            audio.play();
            break;
        case "d":
            var audio=new Audio("sounds/tom-4.mp3");
            audio.volume = 0.2;
            audio.play();
            break;
        case "j":
            var audio=new Audio("sounds/snare.mp3");
            audio.volume = 0.2;
            audio.play();
            break;
        case"k":
        var audio=new Audio("sounds/kick-bass.mp3");
        audio.volume = 0.2;
            audio.play();
            break;
        case"l":
        var audio=new Audio("sounds/crash.mp3");
        audio.volume = 0.2;
            audio.play();
            break;
        default:
            break;
    }
}

function ButtonAnimation(currentKey){
  var activeButton= document.querySelector("." + currentKey);
 activeButton.classList.add("pressed");

 setTimeout(function(){
    activeButton.classList.remove("pressed");
 },100);
}
