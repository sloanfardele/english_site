<?php
$counter = 'counter.txt';

if(!file_exists($counter)) {
    file_put_contents($counter, 0);
}

file_put_contents($counter, 1 + file_get_contents($counter));
?>
<head>
    <link rel="stylesheet" type="text/css" href="/CSS/style.css"/>
    <meta charset="UTF-8">
    <script src="/JS/main.js"></script>
</head>
<header>
    <div id="hymne">
    <audio src="/media/hymne.mp3" autoplay loop> <!-- On oublie pas de remttre l'autoplay et le loop -->
    </audio>
    </div>
    <div id="icone" onclick="stopMusic()">
        <div>&#9733 &#9733 &#9733</div>
        <p id="title">
        The Donald Trump's best website
        </p>
        <div>&#9733 &#9733 &#9733</div>
    </div>


    <a href=# id="hamb">
        <span></span>
        <span></span>
        <span></span>
    </a>

    <nav>
        <ul>
            <li><a href="index.php" class="link">Donald Trump's quotes</a></li>
            <li><a href="whereIsDonald.php" class="link">Where is Donald ?</a></li>
            <li><a href="picofdonnald.php" class="link">The best pictures of Donnie</a></li>
            <li><a href="mexicanhunter.php" class="link">The Mexican hunter ultimate game</a></li>
        </ul>
    </nav>

    <code>
        clicking on "a" toggles class "open" on "a"
    </code>
    <script src="/JS/hamburger.js"></script>

</header>
