posAleat();


function found() {
    alert("You found Donald !");
    posAleat();
}

function posAleat() {

    var image = document.getElementById("game");

    var donny=document.getElementById("donny");

    var posx = Math.round(Math.random() * (image.offsetHeight));
    var posy = Math.round(Math.random() * (image.offsetWidth));

    posx = posx - donny.offsetHeight;
    posy = posy - donny.offsetWidth;



    if(posx<0)
    {
        posx=0;
    }
    if(posy<0)
    {
        posy=0;
    }


    donny.style.marginTop = posx + "px";
    donny.style.marginLeft = posy + "px";

}





