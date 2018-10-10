$(document).ready(InitializeApp)

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
