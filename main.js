$(document).ready(InitializeApp);

var player = 1;
//0 means empty sqaure 1 is P1 and 2 is P2
var squareArray = [1,2,2,2,0,0,1,0,0,2,2,0,0,2,2,0,0,0,0,0,0,1,0,1,0,2,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,];
var chainArray = [];
var currentSquare = null;
var nextSquarePositiononBigArray = null;
var currentSquarePositionNumber = null;
var gridWidth = 8;

function InitializeApp(){
    $('.square').click(checkingPlayerStatus);
}

//this is a function that changes squareArray's values at the position on the array that matches with the text of the div.
function checkingPlayerStatus(){
    if (player === 1){

        
        
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
        
    
    }
    else if (player === 2){
        $(event.currentTarget).addClass('p2');
        var textOfCurrentTarget =  $(event.currentTarget).text();
        squareArray[textOfCurrentTarget] = 2;
        player = 1;
    }
    // changeSquarePlayerClass([ 5,6,7,8 ]);

}







//0 means empty sqaure 1 is P1 and 2 is P2





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

