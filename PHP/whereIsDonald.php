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
    <title>Where is Donald ?</title>
    <link rel="stylesheet" type="text/css" href="../CSS/styleWhereIs.css">
</head>

<body>

<div id="titre">
    <p>Here, you have to find Donnie among his support (maybe)</p>
</div>
<div id="game">
    <img src=../images/DonaldTrump.png id='donny' alt="" onclick="found()" >
</div>

<script type="text/javascript" src="../JS/WhereIsDonald.js"></script>
</body>
</html>
