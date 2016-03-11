posAleat();


function found() {
    alert("You found Donald !");
    posAleat();
}

function posAleat() {

    var image = document.getElementById("game");

    var tete = document.getElementById("icone");

    var posx = Math.round(Math.random() * (screen.width));
    var posy = Math.round(Math.random() * (screen.height));

    posx = posx % image.offsetWidth;
    posy = posy % image.offsetHeight;

    posx = posx - tete.offsetWidth;


    document.getElementById("donny").style.marginLeft = posx + "px";
    document.getElementById("donny").style.marginTop = posy + "px";

}


function refreshCent()
{
    for(var i=0;i<100;i++)
    {
        posAleat();
    }
}



