<?php
/**
 * Created by PhpStorm.
 * User: link0
 * Date: 22/03/2016
 * Time: 15:10
 */
include("header.html");

?>

<html>
<head>
    <link rel="stylesheet" type="text/css" href="../CSS/mexicanhunter.css">
</head>
<body>
<div id="pres">
    <p id="titre">Kill as fast as possible all the mexican you can see</p>
    <p id="sous-titre">(Click on the start button to play)</p>
</div>
<div>
    <table id="gameboard"></table>
    <button id="start">Start</button>
    <div>
        <h2>Time remaining: <span id="timer">2</span></h2>
    </div>
    <div id="response"></div>
    <div id="fick"></div>
</div>
<script src="../JS/mexicanhunter.js"></script>
</body>
</html>
