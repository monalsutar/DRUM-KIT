
document.getElementsByClassName("btn")[0].addEventListener("click",function(){
    var aud = new Audio("crash.mp3");
    aud.play();
});
document.getElementsByClassName("btn")[1].addEventListener("click",function(){
    var aud = new Audio("kick-bass.mp3");
    aud.play();
});
document.getElementsByClassName("btn")[2].addEventListener("click",function(){
    var aud = new Audio("snare.mp3");
    aud.play();
});
document.getElementsByClassName("btn")[3].addEventListener("click",function(){
    var aud = new Audio("tom-1.mp3");
    aud.play();
});
document.getElementsByClassName("btn")[4].addEventListener("click",function(){
    var aud = new Audio("tom-2.mp3");
    aud.play();
});
document.getElementsByClassName("btn")[5].addEventListener("click",function(){
    var aud = new Audio("tom-3.mp3");
    aud.play();
});
document.getElementsByClassName("btn")[6].addEventListener("click",function(){
    var aud = new Audio("tom-4.mp3");
    aud.play();
});





document.addEventListener("keypress",function(event){
    // alert("key pressed   "+event.key)
    var k = event.key;

    switch(k){
        case "w":
            var aud = new Audio("crash.mp3");
            aud.play();
            break;
        case "a":
            var aud = new Audio("kick-bass.mp3");
            aud.play();
            break;
        case "s":
            var aud = new Audio("snare.mp3");
            aud.play();
            break;   
        case "d":
            var aud = new Audio("tom-1.mp3");
            aud.play();
            break; 
        case "j":
            var aud = new Audio("tom-2.mp3");
            aud.play();
            break;
        case "k":
            var aud = new Audio("tom-3.mp3");
            aud.play();
            break;
        case "l":
            var aud = new Audio("tom-4.mp3");
            aud.play();
            break;
        default:
            //alert("No key")
    }
})