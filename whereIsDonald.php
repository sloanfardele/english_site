<?php
/**
 * Created by PhpStorm.
 * User: Sloan
 * Date: 10/03/2016
 * Time: 22:56
 */

include("header.html");
?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Make Waldo great again</title>
    <link rel="stylesheet" type="text/css" href="../CSS/styleWhereIs.css">
</head>

<body>

<div id="pres">
    <p id="titre">Here, you have to find Donny among these mexicans</p>
</div>
<div id="game">
    <img src=../images/DonaldTrump.png id='donny' alt="" onclick="found()" >
</div>

<script type="text/javascript" src="../JS/WhereIsDonald.js"></script>
</body>
</html>
