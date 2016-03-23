/**
 * Created by link0 on 22/03/2016.
 */
var user = (function(){

    var attempts = 0,
        name = "Guest",
        victoryFlag = 0; //-1 = lost, 0 = still playing, 1 = won

    return{
        incrementAttempts:function(){
            attempts++;
        },
        resetAttempts:function(){
            attempts = 0;
        },
        getAttempts:function(){
            return attempts;
        },
        hasWon:function(){
            return victoryFlag;
        },
        setVictoryFlag:function(val){
            //confirm if the value of variable val is acceptable before assigning it to victoryFlag
            victoryFlag = val;
        }
    };
}());

var gameBoard = (function(){
    var grid_size = 5,
        id = "gameboard",
        row = null,
        cell = null,
        cellNumber = 0,
        numToCoord = {},
        coordToNum = {},
        cellsClicked = 0,
        el = null;


    function setGridSize(newSize){
        grid_size = newSize;
    }

    function getGridSize(){
        return grid_size;
    }

    function incrementCellsClicked(){
        cellsClicked++;
    }

    function resetCellsClicked(){
        cellsClicked = 0;
    }

    function getCellsClicked(){
        return cellsClicked;
    }
    //calculate the cell number based on row index and cell index
    function getCellNumber(cI, rI){
        var cellIndex = cI + 1,
            rowIndexMultiplier = grid_size * rI;
        return cellIndex + rowIndexMultiplier;
    }

    function draw(){
        var i, j, ij = 0;
        for(i=0;i<grid_size;i++){
            row = el.insertRow(i);
            for(j=0; j<grid_size; j++){
                cell = row.insertCell(j);
                ij = ""+i+j;
                cellNumber = getCellNumber(i,j);
                coordToNum[ij] = cellNumber;
                numToCoord[cellNumber] = i+","+j;
            }
        }
    }

    //color cells as per the random numbers derived from getRandomIntInclusive
    function colorCells(numArr){
        var len = numArr.length, coordArr;
        for(var i=0; i<len; i++){
            coordArr = numToCoord[numArr[i]].split(",");
            cell = el.rows[coordArr[1]].cells[coordArr[0]];
            cell.className = "cell";
        }
    }

    function resetColors(numArr){
        var len = numArr.length, coordArr;
        for(var i=0; i<len; i++){
            coordArr = numToCoord[numArr[i]].split(",");
            cell = el.rows[coordArr[1]].cells[coordArr[0]];
            cell.className = "cell-white";
        }
    }

    function clickCell(e){
        if(e.target.nodeName === "TD"){

            cellNumber = getCellNumber(e.target.cellIndex, e.target.parentElement.rowIndex);

            //check if the number associated with clicked cell falls in our random number array
            if(game.isNumberInArray(cellNumber)){ //numArr.indexOf(cellNumber) > -1){
                game.removeClickedCellFromArray(cellNumber); //pop the clicked number from numArr
                incrementCellsClicked(); //cellsClickedCounter++;
                e.target.className = "cell-white";
                if(areAllCellsClicked()){
                    /*
                     1. stop timer
                     2. reset rnd array?
                     3. reset cells
                     4. reset user attempts
                     */
                    user.setVictoryFlag(1);
                    game.resetGame();
                }
            }
        }
    }

    function init(){
        var cellNumber;
        el = document.getElementById(id);
        //draw the grid
        draw();

        //attach click event to each cell.
        el.addEventListener("click", function(e){clickCell(e);});
    }

    function areAllCellsClicked(){
        return cellsClicked === grid_size;
    }

    function reset(){
        cellsClicked = 0;
    }

    return {
        init:init,
        resetColors:resetColors,
        resetCellsClicked:resetCellsClicked,
        colorCells:colorCells,
        getCellNumber:getCellNumber,
        getGridSize:getGridSize,
        getCellsClicked:getCellsClicked,
        areAllCellsClicked:areAllCellsClicked,
        reset:reset
    }

}());

var game = (function(){

    var numArr = [],
        time_limit = 2,
        int_id,
        counter = 0,
        startBtn = null,
        timer = null,
        player = null,
        responseHolder = null;


    function init(){
        //attach event handlers
        startBtn = document.getElementById("start");
        responseHolder = document.getElementById("response");
        startBtn.addEventListener("click", function(){
            clearResponses();
            startGame();
        });
        timer = document.getElementById("timer");

        player = Object.create(user);
        gameBoard.init();
    }

    function isNumberInArray(num){
        return numArr.indexOf(num)>-1?true:false;
    }

    function removeClickedCellFromArray(cellNumber){
        var index = numArr.indexOf(cellNumber);
        //splice only when the index derived in within the range of numArr
        if(index >=0 && index < numArr.length){
            numArr.splice(index, 1);
        }
    }

    function startGame(size){
        var tempArr = [];

        //trigger time on event
        //color cells as per the value of numArr

        startBtn.disabled = true;


        tempArr = getNewPuzzle(1, 25, size);

        //if(numArr.length > 0){
        numArr = numArr.concat(tempArr)
        //}

        //numArr =

        int_id = setInterval(function(){
            counter++;
            timer.innerHTML = time_limit - counter;
            if(counter>=time_limit){
                //time is up, user lost one life
                resetGame();
            }
        }, 1000);
        gameBoard.colorCells(numArr);
    }

    //get 5 random numbers in the provided range
    function getNewPuzzle(min, max, maxSize) { //getRandomIntInclusive
        var arr = [], done = false, rnd = 0, grid_size = gameBoard.getGridSize(), size;
        while(!done){
            rnd = Math.floor(Math.random() * (max - min + 1)) + min;
            if(arr.indexOf(rnd) === -1 && numArr.indexOf(rnd) === -1){
                arr.push(rnd);
                size = typeof maxSize === "undefined"?grid_size:maxSize;
                if(arr.length >=size) //TODO 5 should be replaced by grid_size derived from gameBoard object
                    done = true;
            }
        }
        return arr;
    }

    function checkStatus(){
        if(gameBoard.areAllCellsClicked()){
            user.setVictoryFlag(1);
            gameBoard.resetCellsClicked();
            resetGame();
        }
    }

    function stopTimer(){
        clearInterval(int_id);
    }

    function resetGame(){

        //getNewPuzzle
        //resetColors
        var didUserWin = user.hasWon(),
            attempts = user.getAttempts(),
            cellsClicked = gameBoard.getCellsClicked();

        console.log(numArr);

        counter = 0;
        stopTimer();
        gameBoard.resetColors(numArr);
        timer.innerHTML = time_limit;

        if(didUserWin === 1){
            //user won the game
            termimate();
            updateResponse("You won!");
            var song = document.getElementById("fick");
            song.innerHTML = '<audio src="../media/murica.mp3" autoplay>';

        }else if(didUserWin === 0 && attempts < 2 && cellsClicked >=3){
            updateResponse("You were close! Try again.");
            user.incrementAttempts();
            //trigger start event
            startGame(cellsClicked);

        }else{
            termimate();
            updateResponse("Sorry, you lost!");
        }

        gameBoard.reset();
    }

    //clear any game messages on the screen
    function clearResponses(){
        responseHolder.innerHTML = "";
    }

    function updateResponse(message){
        responseHolder.innerHTML = message;
    }

    function termimate(){
        user.resetAttempts();
        user.setVictoryFlag(0);
        startBtn.disabled = false;
        numArr = [];
    }

    init();
    return {
        resetGame:resetGame,
        isNumberInArray:isNumberInArray,
        checkStatus:checkStatus,
        removeClickedCellFromArray:removeClickedCellFromArray
    }
}());

var createIterator = function (func, n) {
    // TODO: Write code here to return a function
    // that executes *func*, *n* times on a supplied input
    // n = n || 0;
    // func = typeof func === "function"?func:function(){};
    return function(x){
        //var res = 0;
        x = x || 0;
        function iterate(times){

            //alert("times "+times);
            if(times==0) return 0;
            x = func.call(null,x);
            //alert("X : "+x);
            times--;
            iterate(times);
        }

        iterate(n);
        return x;

        //return
        /*
         for(var i=0; i<n; i++){
         //alert(x);
         x = func.call(null,x);

         }
         return x;*/
    }
};

function increment(y){
    //alert("before increment "+n);
    return ++y;
    //alert("after increment "+n);
}

function getDouble(d){
    return d + d;
}
