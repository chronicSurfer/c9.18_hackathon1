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