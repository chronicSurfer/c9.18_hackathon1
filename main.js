$(document).ready(InitializeApp);

var player = 1;
//0 means empty sqaure 1 is P1 and 2 is P2

var squareArray = [1,2,2,2,0,0,1,0,0,2,2,0,0,2,2,0,0,0,0,0,0,1,0,1,0,2,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,];

var chainArray = [];
var currentSquare = null;
var nextSquarePositiononBigArray = null;
var currentSquarePositionNumber = null;
var gridWidth = 8;
var classToAdd = "p1";
var whiteCounter = 2;
var blackCounter = 2;
var winnerOfGame = null;
var numberToAddToArray = null;


function InitializeApp(){
    $('.square').click(checkingPlayerStatus);
}

//this is a function that changes squareArray's values at the position on the array that matches with the text of the div.
function checkingPlayerStatus(){
    if (parseInt(whiteCounter) + parseInt(blackCounter === 64)){
        return;
    }
    if (player === 1){

        classToAdd = "p1";
        numberToAddToArray = 1;
        // checkIfThereIsAvailableMoves(numberToAddToArray);
        checkLeft();
        chainArray=[];
        checkTop();
        chainArray=[];
        checkTopLeft();
        chainArray=[];
        checkTopRight();
        chainArray=[];
        checkBottomRight();
        chainArray=[];
        checkBottom();
        chainArray=[];
        checkBottomLeft();

        ///falsy statement because chainArray is empty. Returns because we only checked where player clicked, not all
       // availble squares
        if (!chainArray)
        {
            return;
        }

        ///truthy statement because chainArray contains something
        if(chainArray === true)
        {
            $(event.currentTarget).addClass(classToAdd);
            var textOfCurrentTarget =  $(event.currentTarget).text();
            squareArray[textOfCurrentTarget] = 1;
            changeSquarePlayerClass(chainArray);
        }
        checkNumberOfP();
        console.log('black count is: ' + blackCounter);
        player=2;
        console.log("Current player is now "+ player);
        
    
    }
    else if (player === 2)
    {
        classToAdd="p2";
        numberToAddToArray = 2;
       // checkIfThereIsAvailableMoves(numberToAddToArray);
        checkLeft();
        chainArray=[];
        checkTop();
        chainArray=[];
        checkTopLeft();
        chainArray=[];
        checkTopRight();
        chainArray=[];
        checkBottomRight();
        chainArray=[];
        checkBottom();
        chainArray=[];
        checkBottomLeft();


        ///falsy statement because chainArray is empty. Returns because we only checked where player clicked, not all
        // availble squares
        if (!chainArray)
        {
            return;
        }

        ///truthy statement because chainArray contains something
        if(chainArray === true)
        {
        $(event.currentTarget).addClass(classToAdd);
        var textOfCurrentTarget =  $(event.currentTarget).text();
        squareArray[textOfCurrentTarget] = 2;
        changeSquarePlayerClass(chainArray);
        }
        checkNumberOfP();
        player=1;
        console.log('white count is: ' + whiteCounter);
        console.log("Current player is now "+ player);
    }

    if (parseInt(whiteCounter) > parseInt(blackCounter)){
        winnerOfGame = 'White Player';
    }
    else if (parseInt(whiteCounter) < parseInt(blackCounter)){
        winnerOfGame = 'Black Player';
    }


    /////KNOW WHEN GAME IS OVER!
    if (parseInt(whiteCounter) + parseInt(blackCounter === 64))
    {
        console.log('Game over! ' + winnerOfGame + ' wins!!');
    }
}

function checkIfThereIsAvailableMoves(number){
    for (var checkingEachNumberOfSquareArray= 0; checkingEachNumberOfSquareArray < squareArray.length; checkingEachNumberOfSquareArray++){
        if (squareArray[checkingEachNumberOfSquareArray] === 0){
            ///run all the 'check' functions but replace event.currentTarget with  below.
            ($(`.square:nth-child(${squareArray[checkingEachNumberOfSquareArray] + 1})`))
        }
    }
}




function checkNumberOfP(){
    var blackcounting = null;
    var whitecounting = null;
    for (var checkingNumberOfPIndex = 0; checkingNumberOfPIndex < squareArray.length; checkingNumberOfPIndex++ ){
        if (squareArray[checkingNumberOfPIndex] === 1){
            blackcounting++;
        }
        else if (squareArray[checkingNumberOfPIndex] === 2){
            whitecounting++;
        }
    }
    whiteCounter = whitecounting;
    blackCounter = blackcounting;
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
                $(event.currentTarget).addClass(classToAdd);
                return chainArray;
            }
            nextSquarePositiononBigArray = currentSquare.text()-(i+1);
            console.log(nextSquarePositiononBigArray+"thiiiiis is next sqaure");
            if (squareArray[nextSquarePositiononBigArray]!==player && squareArray[nextSquarePositiononBigArray]!==0){
                chainArray.push(nextSquarePositiononBigArray)
                console.log("my chain 1 is: "+ chainArray)

            }else if(nextSquarePositiononBigArray===player){
                chainArray.push(nextSquarePositiononBigArray)
                $(event.currentTarget).addClass(classToAdd);
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
                $(event.currentTarget).addClass(classToAdd);
                return chainArray;
            }
            
            console.log(nextSquarePositiononBigArray+"thiiiiis is next sqaure");
            if (squareArray[nextSquarePositiononBigArray]!==player && squareArray[nextSquarePositiononBigArray]!==0){
                chainArray.push(nextSquarePositiononBigArray)
                console.log("my chain 1 is: "+ chainArray)
    
            }else if(nextSquarePositiononBigArray===player){
                chainArray.push(nextSquarePositiononBigArray)
                $(event.currentTarget).addClass(classToAdd);
                player = 2;
                console.log("my chain 2 is: "+ chainArray)
                return chainArray;
            }
        }

    }
    
    
}

function checkTopLeft(){
    console.log("check topleft ran");
    currentSquarePositionNumber = Number($(event.currentTarget).text());
    
    
    currentSquare = $(event.target);
    
    nextSquarePositiononBigArray = currentSquarePositionNumber - (gridWidth +1);
    console.log("this is t or f: "+currentSquare.hasClass("top-edge"));
    console.log("NEXT SQUARE IS: "+nextSquarePositiononBigArray);
    
    if (currentSquare.hasClass("top-edge") || currentSquare.hasClass("left-edge")){
        chainArray = [];
        console.log("ended cuz top left edge 1");
        return;
    }
    if (squareArray[nextSquarePositiononBigArray]===0){
        chainArray = [];
        console.log("ended cuz empty top left next");
        
        return;
    }
    if (squareArray[nextSquarePositiononBigArray]===player){
        chainArray = [];
        console.log("ended cuz top left next is same kind");
        return;
    }
    
    if (nextSquarePositiononBigArray!==player){
        chainArray.push(Number(currentSquare.text()));
        console.log("currentAqaure is: "+currentSquare.text());
        
        for (var i=0; i<gridWidth; i++){
            nextSquarePositiononBigArray = currentSquarePositionNumber - ((i*(gridWidth+1))+gridWidth+1);
       
            console.log("NEXT SQUARE NOW IS: "+nextSquarePositiononBigArray);
            if (currentSquare.hasClass("top-edge") || currentSquare.hasClass("left-edge")){
                chainArray = [];
                console.log("ended cuz top left edge 1");
                return;
            }
            if (squareArray[nextSquarePositiononBigArray]===0){
                chainArray = [];
                console.log("ended cuz top left empty next");
                
                return;
            }
            if (squareArray[nextSquarePositiononBigArray]===player){
                chainArray.push(nextSquarePositiononBigArray);
                console.log("ended cuz next top is end of working chain");
                console.log(chainArray);
                $(event.currentTarget).addClass(classToAdd);
                return chainArray;
            }
            
            console.log(nextSquarePositiononBigArray+"thiiiiis is next sqaure");
            if (squareArray[nextSquarePositiononBigArray]!==player && squareArray[nextSquarePositiononBigArray]!==0){
                chainArray.push(nextSquarePositiononBigArray)
                console.log("my chain 1 is: "+ chainArray)
    
            }else if(nextSquarePositiononBigArray===player){
                chainArray.push(nextSquarePositiononBigArray)
                $(event.currentTarget).addClass(classToAdd);
                player = 2;
                console.log("my chain 2 is: "+ chainArray)
                return chainArray;
            }
        }

    }
    
    
}


function checkTopRight(){
    console.log("check topright ran");
    currentSquarePositionNumber = Number($(event.currentTarget).text());
    
    
    currentSquare = $(event.target);
    
    nextSquarePositiononBigArray = currentSquarePositionNumber - (gridWidth -1);
    console.log("this is t or f: "+currentSquare.hasClass("top-edge"));
    console.log("NEXT SQUARE IS: "+nextSquarePositiononBigArray);
    
    if (currentSquare.hasClass("top-edge") || currentSquare.hasClass("right-edge")){
        chainArray = [];
        console.log("ended cuz top right edge 1");
        return;
    }
    if (squareArray[nextSquarePositiononBigArray]===0){
        chainArray = [];
        console.log("ended cuz empty top right next");
        
        return;
    }
    if (squareArray[nextSquarePositiononBigArray]===player){
        chainArray = [];
        console.log("ended cuz top right next is same kind");
        return;
    }
    
    if (nextSquarePositiononBigArray!==player){
        chainArray.push(Number(currentSquare.text()));
        console.log("currentAqaure is: "+currentSquare.text());
        
        for (var i=0; i<gridWidth; i++){
            nextSquarePositiononBigArray = currentSquarePositionNumber - ((i*(gridWidth-1))+gridWidth-1);
       
            console.log("NEXT SQUARE NOW IS: "+nextSquarePositiononBigArray);
            if (currentSquare.hasClass("top-edge") || currentSquare.hasClass("right-edge")){
                chainArray = [];
                console.log("ended cuz top right edge 1");
                return;
            }
            if (squareArray[nextSquarePositiononBigArray]===0){
                chainArray = [];
                console.log("ended cuz top right empty next");
                
                return;
            }
            if (squareArray[nextSquarePositiononBigArray]===player){
                chainArray.push(nextSquarePositiononBigArray);
                console.log("ended cuz next top is end of working chain");
                console.log(chainArray);
                $(event.currentTarget).addClass(classToAdd);
                return chainArray;
            }

            console.log(nextSquarePositiononBigArray+"thiiiiis is next sqaure");
            if (squareArray[nextSquarePositiononBigArray]!==player && squareArray[nextSquarePositiononBigArray]!==0){
                chainArray.push(nextSquarePositiononBigArray)
                console.log("my chain 1 is: "+ chainArray)

            }else if(nextSquarePositiononBigArray===player){
                chainArray.push(nextSquarePositiononBigArray)
                $(event.currentTarget).addClass(classToAdd);
                player = 2;
                console.log("my chain 2 is: "+ chainArray)
                return chainArray;
            }
        }

    }


}

function checkBottomRight(){
    console.log("check bottomright ran");
    currentSquarePositionNumber = Number($(event.currentTarget).text());
    
    
    currentSquare = $(event.target);
    
    nextSquarePositiononBigArray = currentSquarePositionNumber + (gridWidth +1);
    console.log("this is t or f: "+currentSquare.hasClass("top-edge"));
    console.log("NEXT SQUARE IS: "+nextSquarePositiononBigArray);
    
    if (currentSquare.hasClass("right-edge") || currentSquare.hasClass("bottom-edge")){
        chainArray = [];
        console.log("ended cuz bottom right edge 1");
        return;
    }
    if (squareArray[nextSquarePositiononBigArray]===0){
        chainArray = [];
        console.log("ended cuz empty bottom right next");
        
        return;
    }
    if (squareArray[nextSquarePositiononBigArray]===player){
        chainArray = [];
        console.log("ended cuz bottom right next is same kind");
        return;
    }
    
    if (nextSquarePositiononBigArray!==player){
        chainArray.push(Number(currentSquare.text()));
        console.log("currentAqaure is: "+currentSquare.text());
        
        for (var i=0; i<gridWidth; i++){
            nextSquarePositiononBigArray = currentSquarePositionNumber + ((i*(gridWidth+1))+gridWidth+1);
       
            console.log("NEXT SQUARE NOW IS: "+nextSquarePositiononBigArray);
            if (currentSquare.hasClass("bottom-edge") || currentSquare.hasClass("right-edge")){
                chainArray = [];
                console.log("ended cuz bottom right edge 1");
                return;
            }
            if (squareArray[nextSquarePositiononBigArray]===0){
                chainArray = [];
                console.log("ended cuz bottom right empty next");
                
                return;
            }
            if (squareArray[nextSquarePositiononBigArray]===player){
                chainArray.push(nextSquarePositiononBigArray);
                console.log("ended cuz next bottom right is end of working chain");
                console.log(chainArray);
                $(event.currentTarget).addClass(classToAdd);
                return chainArray;
            }
            
            console.log(nextSquarePositiononBigArray+"thiiiiis is next sqaure");
            if (squareArray[nextSquarePositiononBigArray]!==player && squareArray[nextSquarePositiononBigArray]!==0){
                chainArray.push(nextSquarePositiononBigArray)
                console.log("my chain 1 is: "+ chainArray)
    
            }else if(nextSquarePositiononBigArray===player){
                chainArray.push(nextSquarePositiononBigArray)
                $(event.currentTarget).addClass(classToAdd);
                player = 2;
                console.log("my chain 2 is: "+ chainArray)
                return chainArray;
            }
        }

    }
    
    
}

function checkBottom(){
    console.log("check bottom ran");
    currentSquarePositionNumber = Number($(event.currentTarget).text());
    
    
    currentSquare = $(event.target);
    
    nextSquarePositiononBigArray = currentSquarePositionNumber + gridWidth;
    console.log("this is t or f: "+currentSquare.hasClass("top-edge"));
    console.log(currentSquarePositionNumber + gridWidth);
    
    if (currentSquare.hasClass("bottom-edge")){
        chainArray = [];
        console.log("ended cuz bottom edge 1");
        return;
    }
    if (squareArray[nextSquarePositiononBigArray]===0){
        chainArray = [];
        console.log("ended cuz empty bottom next");
        
        return;
    }
    if (squareArray[nextSquarePositiononBigArray]===player){
        chainArray = [];
        console.log("ended cuz bottom next is same kind");
        return;
    }
    
    if (nextSquarePositiononBigArray!==player){
        chainArray.push(Number(currentSquare.text()));
        console.log("currentAqaure is: "+currentSquare.text());
        
        for (var i=0; i<gridWidth; i++){
            nextSquarePositiononBigArray = Number(currentSquare.text())+(i*gridWidth+gridWidth);
            console.log("NEXT SQUARE IS: "+nextSquarePositiononBigArray)
            if (currentSquare.hasClass("bottom-edge")){
                chainArray = [];
                console.log("ended cuz bottom edge 1");
                return;
            }
            if (squareArray[nextSquarePositiononBigArray]===0){
                chainArray = [];
                console.log("ended cuz bottom empty next");
                
                return;
            }
            if (squareArray[nextSquarePositiononBigArray]===player){
                chainArray.push(nextSquarePositiononBigArray);
                console.log("ended cuz next bottom is end of working chain");
                console.log(chainArray);
                $(event.currentTarget).addClass(classToAdd);
                return chainArray;
            }
            
            console.log(nextSquarePositiononBigArray+"thiiiiis is next sqaure");
            if (squareArray[nextSquarePositiononBigArray]!==player && squareArray[nextSquarePositiononBigArray]!==0){
                chainArray.push(nextSquarePositiononBigArray)
                console.log("my chain 1 is: "+ chainArray)
    
            }else if(nextSquarePositiononBigArray===player){
                chainArray.push(nextSquarePositiononBigArray)
                $(event.currentTarget).addClass(classToAdd);
                player = 2;
                console.log("my chain 2 is: "+ chainArray)
                return chainArray;
            }
        }

    }
    
    
}

function checkBottomLeft(){
    console.log("check bottomLeft ran");
    currentSquarePositionNumber = Number($(event.currentTarget).text());
    
    
    currentSquare = $(event.target);
    
    nextSquarePositiononBigArray = currentSquarePositionNumber + gridWidth-1;
    console.log("this is t or f: "+currentSquare.hasClass("top-edge"));
    console.log(currentSquarePositionNumber + gridWidth-1);
    
    if (currentSquare.hasClass("bottom-edge")){
        chainArray = [];
        console.log("ended cuz bottom edge 1");
        return;
    }
    if (squareArray[nextSquarePositiononBigArray]===0){
        chainArray = [];
        console.log("ended cuz empty bottom next");
        
        return;
    }
    if (squareArray[nextSquarePositiononBigArray]===player){
        chainArray = [];
        console.log("ended cuz bottom next is same kind");
        return;
    }
    
    if (nextSquarePositiononBigArray!==player){
        chainArray.push(Number(currentSquare.text()));
        console.log("currentAqaure is: "+currentSquare.text());
        
        for (var i=0; i<gridWidth; i++){
            nextSquarePositiononBigArray = Number(currentSquare.text())+((i*gridWidth)+gridWidth-(1+i));
            console.log("NEXT SQUARE IS: "+nextSquarePositiononBigArray)
            if (currentSquare.hasClass("bottom-edge")){
                chainArray = [];
                console.log("ended cuz bottom edge 1");
                return;
            }
            if (squareArray[nextSquarePositiononBigArray]===0){
                chainArray = [];
                console.log("ended cuz bottom empty next");
                
                return;
            }
            if (squareArray[nextSquarePositiononBigArray]===player){
                chainArray.push(nextSquarePositiononBigArray);
                console.log("ended cuz next bottom is end of working chain");
                console.log(chainArray);
                $(event.currentTarget).addClass(classToAdd);
                return chainArray;
            }
            
            console.log(nextSquarePositiononBigArray+"thiiiiis is next sqaure");
            if (squareArray[nextSquarePositiononBigArray]!==player && squareArray[nextSquarePositiononBigArray]!==0){
                chainArray.push(nextSquarePositiononBigArray)
                console.log("my chain 1 is: "+ chainArray)
    
            }else if(nextSquarePositiononBigArray===player){
                chainArray.push(nextSquarePositiononBigArray)
                $(event.currentTarget).addClass(classToAdd);
                player = 2;
                console.log("my chain 2 is: "+ chainArray)
                return chainArray;
            }
        }

    }
    
    
}

//this function changes the divs classes to what ever the first div in the array is. The array I am speaking about is the array given to this
//function from directionChecker function
