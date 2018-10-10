$(document).ready(InitializeApp);

var player = 1;

function InitializeApp(){
    $('.square').click(checkingPlayerStatus);
}

//this is a function that changes squareArray's values at the position on the array that matches with the text of the div.
function checkingPlayerStatus(){
    if (player === 1){
        $(event.currentTarget).addClass('p1');
        var textOfCurrentTarget =  $(event.currentTarget).text();
        squareArray[textOfCurrentTarget] = 1;
        player = 2;
    }
    else if (player === 2){
        $(event.currentTarget).addClass('p2');
        var textOfCurrentTarget =  $(event.currentTarget).text();
        squareArray[textOfCurrentTarget] = 2;
        player = 1;
    }
    changeSquarePlayerClass([ 5,6,7,8 ]);
}






//0 means empty sqaure 1 is P1 and 2 is P2
var squareArray = [0,0,0,0,0,0,2,2,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var chainArray = [];


function directionChecker(currentSquare){
    currentSquarePositionNumber = [Number(currentSquare.text())];
    checkLeft();
    // checkTopLeft();
    // checkTop();
    // checkTopRight();
    // checkRight();
    // checkBottomRight();
    // checkBottom();
    // checkBottomLeft();
    
    
}
function checkLeft(){
    
    if (currentSquare.hasClass("left-edge")){
        chainArray = [];
        return;
    }
    if (squareArray[currentSquarePositionNumber] - 1===0){
        chainArray = [];
        return;
    }
    if (squareArray[currentSquarePositionNumber] - 1===player){
        chainArray = [];
        return;
    }
    var gridWidth = 8
    if (squareArray[currentSquarePositionNumber] - 1 !==player){
        chainArray.push(squareArray[currentSquarePositionNumber]);
        chainArray.push(squareArray[currentSquarePositionNumber-1])
        for (i=0; i<gridWidth; i++){
            var nextSquare = squareArray[currentSquarePositionNumber-(i+1)];
            if (nextSquare!==player){
                chainArray.push(nextSquare)
    
            }else if(nextSquare===player){
                chainArray.push(nextSquare)
                return chainArray;
            }
        }

    }
    
    var tempCurrent = currentSquarePosition;
    var leftSquare = squareArray[tempCurrent - 1];
    chainArray.push(currentSquarePosition);
    chainArray.push(leftSquare);
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

        }
        for (var indexChangingSquareArray = 0; indexChangingSquareArray < arrayIReceived.length; indexChangingSquareArray ++){
            squareArray[arrayIReceived[indexChangingSquareArray]] = 1;
        }
    }
     else if ($(`.square:nth-child(${arrayIReceived[0] + 1})`).hasClass('p2')){
          for (var receivedArrayIndex = 0; receivedArrayIndex < arrayIReceived.length; receivedArrayIndex++){
              $(`.square:nth-child(${arrayIReceived[receivedArrayIndex] + 1})`).removeClass("p1 p2");
              $(`.square:nth-child(${arrayIReceived[receivedArrayIndex] + 1})`).addClass('p2');
       }
         for (var indexChangingSquareArray = 0; indexChangingSquareArray < arrayIReceived.length; indexChangingSquareArray ++){
             squareArray[arrayIReceived[indexChangingSquareArray]] = 2;
         }
    }
    console.log(squareArray);
}

