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

    console.log("posx");
    console.log(posx);
    console.log("tete");
    console.log(tete.offsetWidth);

    posx = posx - tete.offsetWidth;

    if(posx<0)
    {
        alert("Erreur, rafraichir s'il vous plait(Ctrl+R ou F5");
    }




    document.getElementById("donny").style.marginLeft = posx + "px";
    document.getElementById("donny").style.marginTop = posy + "px";

}






