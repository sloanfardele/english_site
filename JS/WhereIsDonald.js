posAleat();

function found(){
    alert ("You found Donald !");
    posAleat();
}

function posAleat(){  
    
    posx = Math.round(Math.random()*(screen.width)); 
    posy = Math.round(Math.random()*(screen.height)); 

    document.getElementById("donny").style.marginLeft = posx+"px";
    document.getElementById("donny").style.marginTop = posy+"px";
    
}

