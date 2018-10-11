$(document).ready(InitializeApp);

var player = 1;
//0 means empty sqaure 1 is P1 and 2 is P2
var squareArray = [1,2,2,2,0,0,1,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,1,0,0,0,];
var chainArray = [];
var currentSquare = null;
var nextSquarePositiononBigArray = null;
var currentSquarePositionNumber = null;
var gridWidth = 8;
var whiteCounter = 2;
var blackCounter = 2;
var winnerOfGame = null;


function InitializeApp(){
    $('.square').click(checkingPlayerStatus);
}

//this is a function that changes squareArray's values at the position on the array that matches with the text of the div.
function checkingPlayerStatus(){
    if (parseInt(whiteCounter) + parseInt(blackCounter === 64)){
        return;
    }
    if (player === 1){


        checkLeft();
        checkTop();
        checkRight();
        blackCounter++;
        console.log('black count is: ' + blackCounter)

    }
    else if (player === 2){
        $(event.currentTarget).addClass('p2');
        var textOfCurrentTarget =  $(event.currentTarget).text();
        squareArray[textOfCurrentTarget] = 2;
        player = 1;
        whiteCounter++;
        console.log('white count is: ' + whiteCounter)
    }

    changeSquarePlayerClass(chainArray);

    if (parseInt(whiteCounter) > parseInt(blackCounter)){
        winnerOfGame = 'White Player';
    }
    else{
        winnerOfGame = 'Black Player';
    }

    if (parseInt(whiteCounter) + parseInt(blackCounter === 64)){   /////KNOW WHEN GAME IS OVER!
        console.log('Game over! ' + winnerOfGame + ' wins!!');
    }

}


//0 means empty square 1 is P1 and 2 is P2


function directionChecker(){

    checkLeft();
    // nextSquarePositiononBigArray= null;
     checkTop()
    // checkTopLeft();
    // checkTop();
    // checkTopRight();
     checkRight();
    // checkBottomRight();
    // checkBottom();
    // checkBottomLeft();


}
function checkRight(){
    currentSquarePositionNumber = Number($(event.currentTarget).text());

    currentSquare = $(event.currentTarget);
    nextSquarePositiononBigArray = currentSquarePositionNumber + 1;
    console.log("this is t or f: "+currentSquare.hasClass("right-edge"));
    console.log(squareArray[currentSquarePositionNumber - 1]);

    if (currentSquare.hasClass("right-edge")){
        chainArray = [];
        console.log("ended cuz edge 1");
        return;
    }
    if (squareArray[nextSquarePositiononBigArray]===0){
        chainArray = [];
        console.log("ended cuz empty next");

        return;
    }
    if (squareArray[nextSquarePositiononBigArray]===player){
        chainArray = [];
        console.log("ended cuz next is same kind");
        return;
    }

    if (nextSquarePositiononBigArray!==player){
        chainArray.push(Number(currentSquare.text()));
        console.log("currentSquare is: "+currentSquare.text());

        for (var i=0; i < gridWidth; i++){
            if (currentSquare.hasClass("right-edge")){
                chainArray = [];
                console.log("ended cuz edge 1");
                return;
            }
            if (squareArray[nextSquarePositiononBigArray]===0){
                chainArray = [];
                console.log("ended cuz empty next");

                return;
            }
            if (squareArray[nextSquarePositiononBigArray]===player){
                chainArray.push(nextSquarePositiononBigArray);
                console.log("ended cuz next is end of working chain");
                console.log(chainArray);
                $(event.currentTarget).addClass('p1');
                return chainArray;
            }
            nextSquarePositiononBigArray = parseInt(currentSquare.text()) + (i+1);
            console.log(nextSquarePositiononBigArray+"thiiiiis is next sqaure");
            if (squareArray[nextSquarePositiononBigArray]!==player && squareArray[nextSquarePositiononBigArray]!==0){
                chainArray.push(nextSquarePositiononBigArray)
                console.log("my chain 1 is: "+ chainArray)

            }else if(nextSquarePositiononBigArray===player){
                chainArray.push(nextSquarePositiononBigArray)
                $(event.currentTarget).addClass('p1');
                player = 2;
                console.log("my chain 2 is: "+ chainArray)
                return chainArray;
            }
        }

    }
}
function checkLeft(){
    currentSquarePositionNumber = Number($(event.currentTarget).text());

    currentSquare = $(event.currentTarget);
    nextSquarePositiononBigArray = currentSquarePositionNumber - 1;
    console.log("this is t or f: "+currentSquare.hasClass("left-edge"));
    console.log(squareArray[currentSquarePositionNumber - 1]);

    if (currentSquare.hasClass("left-edge")){
        chainArray = [];
        console.log("ended cuz edge 1");
        return;
    }
    if (squareArray[nextSquarePositiononBigArray]===0){
        chainArray = [];
        console.log("ended cuz empty next");

        return;
    }
    if (squareArray[nextSquarePositiononBigArray]===player){
        chainArray = [];
        console.log("ended cuz next is same kind");
        return;
    }

    if (nextSquarePositiononBigArray!==player){
        chainArray.push(Number(currentSquare.text()));
        console.log("currentAqaure is: "+currentSquare.text());

        for (var i=0; i<gridWidth; i++){
            if (currentSquare.hasClass("left-edge")){
                chainArray = [];
                console.log("ended cuz edge 1");
                return;
            }
            if (squareArray[nextSquarePositiononBigArray]===0){
                chainArray = [];
                console.log("ended cuz empty next");

                return;
            }
            if (squareArray[nextSquarePositiononBigArray]===player){
                chainArray.push(nextSquarePositiononBigArray);
                console.log("ended cuz next is end of working chain");
                console.log(chainArray);
                $(event.currentTarget).addClass('p1');
                return chainArray;
            }
            nextSquarePositiononBigArray = currentSquare.text()-(i+1);
            console.log(nextSquarePositiononBigArray+"thiiiiis is next sqaure");
            if (squareArray[nextSquarePositiononBigArray]!==player && squareArray[nextSquarePositiononBigArray]!==0){
                chainArray.push(nextSquarePositiononBigArray)
                console.log("my chain 1 is: "+ chainArray)

            }else if(nextSquarePositiononBigArray===player){
                chainArray.push(nextSquarePositiononBigArray)
                $(event.currentTarget).addClass('p1');
                player = 2;
                console.log("my chain 2 is: "+ chainArray)
                return chainArray;
            }
        }

    }


}

function checkTop(){
    console.log("check top ran");
    currentSquarePositionNumber = Number($(event.currentTarget).text());


    currentSquare = $(event.target);

    nextSquarePositiononBigArray = currentSquarePositionNumber - gridWidth;
    console.log("this is t or f: "+currentSquare.hasClass("top-edge"));
    console.log(currentSquarePositionNumber - gridWidth);

    if (currentSquare.hasClass("top-edge")){
        chainArray = [];
        console.log("ended cuz top edge 1");
        return;
    }
    if (squareArray[nextSquarePositiononBigArray]===0){
        chainArray = [];
        console.log("ended cuz empty top next");

        return;
    }
    if (squareArray[nextSquarePositiononBigArray]===player){
        chainArray = [];
        console.log("ended cuz top next is same kind");
        return;
    }

    if (nextSquarePositiononBigArray!==player){
        chainArray.push(Number(currentSquare.text()));
        console.log("currentAqaure is: "+currentSquare.text());

        for (var i=0; i<gridWidth; i++){
            nextSquarePositiononBigArray = currentSquare.text()-(i*gridWidth+gridWidth);
            console.log("NEXT SQUARE IS: "+nextSquarePositiononBigArray)
            if (currentSquare.hasClass("top-edge")){
                chainArray = [];
                console.log("ended cuz top edge 1");
                return;
            }
            if (squareArray[nextSquarePositiononBigArray]===0){
                chainArray = [];
                console.log("ended cuz top empty next");

                return;
            }
            if (squareArray[nextSquarePositiononBigArray]===player){
                chainArray.push(nextSquarePositiononBigArray);
                console.log("ended cuz next top is end of working chain");
                console.log(chainArray);
                $(event.currentTarget).addClass('p1');
                return chainArray;
            }

            console.log(nextSquarePositiononBigArray+"thiiiiis is next sqaure");
            if (squareArray[nextSquarePositiononBigArray]!==player && squareArray[nextSquarePositiononBigArray]!==0){
                chainArray.push(nextSquarePositiononBigArray)
                console.log("my chain 1 is: "+ chainArray)

            }else if(nextSquarePositiononBigArray===player){
                chainArray.push(nextSquarePositiononBigArray)
                $(event.currentTarget).addClass('p1');
                player = 2;
                console.log("my chain 2 is: "+ chainArray)
                return chainArray;
            }
        }

    }


}


//this function changes the divs classes to what ever the first div in the array is. The array I am speaking about is the array given to this
//function from directionChecker function
function changeSquarePlayerClass(arrayFromOscar){
    var arrayIReceived = arrayFromOscar;
    console.log(arrayIReceived);
    console.log(squareArray);
    if ($(`.square:nth-child(${arrayIReceived[0] + 1})`).hasClass('p1')){
        for (var receivedArrayIndex = 0; receivedArrayIndex < arrayIReceived.length; receivedArrayIndex++) {
            $(`.square:nth-child(${arrayIReceived[receivedArrayIndex] + 1})`).removeClass("p1 p2");
            $(`.square:nth-child(${arrayIReceived[receivedArrayIndex] + 1})`).addClass('p1');
            blackCounter++;
            console.log('black count is: ' + blackCounter)

        }
        for (var indexChangingSquareArray = 0; indexChangingSquareArray < arrayIReceived.length; indexChangingSquareArray ++){
            squareArray[arrayIReceived[indexChangingSquareArray]] = 1;
        }
    }
    else if ($(`.square:nth-child(${arrayIReceived[0] + 1})`).hasClass('p2')){
        for (var receivedArrayIndex = 0; receivedArrayIndex < arrayIReceived.length; receivedArrayIndex++){
            $(`.square:nth-child(${arrayIReceived[receivedArrayIndex] + 1})`).removeClass("p1 p2");
            $(`.square:nth-child(${arrayIReceived[receivedArrayIndex] + 1})`).addClass('p2');
            whiteCounter++;
            console.log('white count is: ' + whiteCounter)
        }
        for (var indexChangingSquareArray = 0; indexChangingSquareArray < arrayIReceived.length; indexChangingSquareArray ++){
            squareArray[arrayIReceived[indexChangingSquareArray]] = 2;
        }
    }
    console.log(squareArray);
}