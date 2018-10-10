$(document).ready(InitializeApp);

var player = 1;

function InitializeApp(){
    $('.square').click(checkingPlayerStatus);
}


function checkingPlayerStatus(){
    if (player === 1){
        $(event.currentTarget).addClass('p1');
        player = 2;
    }
    else if (player === 2){
        $(event.currentTarget).addClass('p2');
        player = 1;
    }

}




//0 means empty sqaure 1 is P1 and 2 is P2
var squareArray = [0,0,0,0,0,1,2,2,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,];
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



/*
function changeSquarePlayerClass(arrayFromOscar){

    var arrayIReceived = arrayFromOscar;

    if ($(arrayIReceived[0]).hasClass('p1')){
       for (var receivedArrayIndex = 0; receivedArrayIndex < arrayIReceived.length; receivedArrayIndex++){
           arrayIReceived[receivedArrayIndex].removeClass("p1 p2");
           arrayIReceived[receivedArrayIndex].addClass('p1');
       }
    }

    else if ($(arrayIRecieved[0]).hasClass('p2')){
        for (var receivedArrayIndex = 0; receivedArrayIndex < arrayIReceived.length; receivedArrayIndex++){
            arrayIReceived[receivedArrayIndex].removeClass("p1 p2");
            arrayIReceived[receivedArrayIndex].addClass('p2');
        }
    }

}*/
