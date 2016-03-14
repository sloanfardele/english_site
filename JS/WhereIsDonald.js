posAleat();


function found() {
    alert("You found Donald !");
    posAleat();
}

function posAleat() {

    var image = document.getElementById("game");

    var tete = document.getElementById("icone");

    var donny=document.getElementById("donny");

    var posx = Math.round(Math.random() * (screen.width));
    var posy = Math.round(Math.random() * (screen.height));

    posx = posx % image.offsetWidth;
    posy = posy % image.offsetHeight;


    posx = posx - donny.offsetWidth;
    posy = posy - donny.offsetHeight;

    if(posx<0)
    {
        posx=0;
    }
    if(posy<0)
    {
        posy=0;
    }

    donny.style.marginLeft = posx + "px";
    donny.style.marginTop = posy + "px";

}





