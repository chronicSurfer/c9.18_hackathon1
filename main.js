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
