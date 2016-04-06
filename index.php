<?php
$counter = 'counter.txt';

if(!file_exists($counter)) {
    file_put_contents($counter, 0);
}

file_put_contents($counter, 1 + file_get_contents($counter));
?>
<html>
<?php
/**
 * Created by PhpStorm.
 * User: Sloan
 * Date: 08/03/2016
 * Time: 21:47
 */
include("header.php");
?>
<head>
    <meta charset="utf-8">
    <title>Make quotes great again</title>
    <link rel="stylesheet" type="text/css" href="../CSS/quotes.css">
</head>
<body>
<div id="pres">
    <p id="titre">Welcome on Donald Trump's quote generator</p>
    <p id="sous-titre">(Click on Donny to see another <strike>mexican</strike> great quote !)</p>
</div>
<div id="affichage">
    <div id="citation">
        <img src="../images/guillement_gauche.jpg" class="guill">
        <p id="quote"></p>
        <img src="../images/guillemet-droite.png" class="guill" id="guill-droite">
    </div>
    <div id="donald">
        <img src="../images/trump-head.png" onclick="rdmQuote()">
    </div>

</div>

<script type="text/javascript" src="../JS/main.js"></script>
</body>
</html>

