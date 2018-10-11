function checkDirection(direction){
    
    
    if (direction==="top"){
        classToLookFor = "top-edge";
        classToLookFor2 = null;
        nextSquarePositiononBigArray0 = currentSquarePositionNumber - gridWidth;
        nextSquarePositiononBigArray = currentSquare.text()-(i*gridWidth+gridWidth)

    }else if (direction==="topleft"){
        classToLookFor = "top-edge";
        classToLookFor2 = "left-edge";
        nextSquarePositiononBigArray0 = currentSquarePositionNumber - (gridWidth +1)
        nextSquarePositiononBigArray = currentSquarePositionNumber - ((i*(gridWidth+1))+gridWidth+1);

    }else if (direction==="left"){
        classToLookFor = "left-edge";
        classToLookFor2 = null;
        nextSquarePositiononBigArray0 = currentSquarePositionNumber - 1;
        nextSquarePositiononBigArray = currentSquare.text()-(i+1);
    }else if (direction==="bottomleft"){
        classToLookFor = "left-edge";
        classToLookFor2 = "bottom-edge";
        nextSquarePositiononBigArray0 = currentSquarePositionNumber + gridWidth-1;
        nextSquarePositiononBigArray = Number(currentSquare.text())+((i*gridWidth)+gridWidth-(1+i));
    }else if (direction==="bottom"){
        classToLookFor = "bottom-edge";
        classToLookFor2 = null;
        nextSquarePositiononBigArray0 = currentSquarePositionNumber + gridWidth;
        nextSquarePositiononBigArray = Number(currentSquare.text())+(i*gridWidth+gridWidth);
    }else if (direction==="bottomright"){
        classToLookFor = "bottom-edge";
        classToLookFor2 = "right-edge";
        nextSquarePositiononBigArray0 = currentSquarePositionNumber + (gridWidth +1);
        nextSquarePositiononBigArray = currentSquarePositionNumber + ((i*(gridWidth+1))+gridWidth+1);
    }else if (direction==="right"){
        classToLookFor = "right-edge";
        classToLookFor2 = null;
        nextSquarePositiononBigArray0 = currentSquarePositionNumber + 1;
        nextSquarePositiononBigArray = parseInt(currentSquare.text()) + (i+1);
    }else if (direction==="topright"){
        classToLookFor = "right-edge";
        classToLookFor2 = "top-edge";
        nextSquarePositiononBigArray0 = currentSquarePositionNumber - (gridWidth -1);
        nextSquarePositiononBigArray = currentSquarePositionNumber - ((i*(gridWidth-1))+gridWidth-1);
    }

    console.log("check "+direction+" ran");
    currentSquarePositionNumber = Number($(event.currentTarget).text());
    currentSquare = $(event.target);
    console.log("NEXT SQUARE IS: "+nextSquarePositiononBigArray0);
    
    if (currentSquare.hasClass(classToLookFor) || currentSquare.hasClass(classToLookFor2)){
        chainArray = [];
        console.log("ended cuz "+direction+" edge");
        return;
    }
    if (squareArray[nextSquarePositiononBigArray0]===0){
        chainArray = [];
        console.log("ended cuz empty "+direction+" next");
        
        return;
    }
    if (squareArray[nextSquarePositiononBigArray0]===player){
        chainArray = [];
        console.log("ended cuz "+direction+" next is same kind");
        return;
    }
    
    if (nextSquarePositiononBigArray0!==player){ // Start the "works" chain here
        chainArray.push(Number(currentSquare.text()));
        console.log("currentAqaure is: "+currentSquare.text());
        
        for (var i=0; i<gridWidth; i++){
            
       
            console.log("NEXT SQUARE NOW IS: "+nextSquarePositiononBigArray);
            if (currentSquare.hasClass(classToLookFor) || currentSquare.hasClass(classToLookFor2)){
                chainArray = [];
                console.log("ended cuz "+direction+" edge 1");
                return;
            }
            if (squareArray[nextSquarePositiononBigArray]===0){
                chainArray = [];
                console.log("ended cuz "+direction+" empty next");
                
                return;
            }
            if (squareArray[nextSquarePositiononBigArray]===player){
                chainArray.push(nextSquarePositiononBigArray);
                console.log("ended cuz next "+direction+" is end of working chain");
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



