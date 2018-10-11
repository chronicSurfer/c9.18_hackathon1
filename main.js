$(document).ready(InitializeApp);

var player = 1;
//0 means empty sqaure 1 is P1 and 2 is P2
var squareArray = [1,2,2,0,0,0,1,0,0,1,2,1,0,0,2,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,];
var chainArray = [];
var currentSquare = null;
var nextSquarePositiononBigArray = null;
var currentSquarePositionNumber = null;
var gridWidth = 8;

function InitializeApp(){
    $('.square').click(checkingPlayerStatus);
}


function checkingPlayerStatus(){
    if (player === 1){
        
        
        checkLeft();
        checkTop();
        
    }
    // else if (player === 2){
        
    //     currentSquarePositionNumber = Number($(event.currentTarget).text());
    //     currentSquare = $(event.target);

    //     checkLeft();
    //     $(event.currentTarget).addClass('p2');
    //     currentSquare = $(event.target);
    //     player = 1;
    // }

}







function directionChecker(){
    
    checkLeft();
    // nextSquarePositiononBigArray= null;
    // checkTop()
    // checkTopLeft();
    // checkTop();
    // checkTopRight();
    // checkRight();
    // checkBottomRight();
    // checkBottom();
    // checkBottomLeft();
    
    
}
function checkLeft(){
    currentSquarePositionNumber = Number($(event.currentTarget).text());
    
    currentSquare = $(event.target);
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
        
        for (i=0; i<gridWidth; i++){
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
        
        for (i=0; i<gridWidth; i++){
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
