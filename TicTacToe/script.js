let player = "O";
let p = document.getElementById("turn");
let btn = document.getElementsByClassName("item");
p.innerHTML=`Turn: "${player}"`;
function tictactoe(id) {
    elem = document.getElementById(id);
    if(elem.innerHTML.length === 0) {
        elem.innerHTML = player;
        elem.style.color = (player === "O")? "#FF6655" : "#EC08BE";
        isWin = win();
        isDraw = check_draw();
        if( isWin ){
            document.getElementById("res").innerHTML=player+" Wins!";
            elem.innerHTML = player;
            disable_buttons();
        } else if( isDraw ) {
            document.getElementById("res").innerHTML="Game Draw!";
            elem.innerHTML = player;
            disable_buttons();
        } else {
            player = (player === "O")? "X" : "O";
            p.innerHTML=`Turn: "${player}"`;
        }
        if(isWin || isDraw){
            setTimeout(finalize, 2000);
        }
    }
}

function win() {
    let  a=0;
    //checking rows
    a += ((btn[0].innerHTML === btn[1].innerHTML) && (btn[0].innerHTML === btn[2].innerHTML) && (btn[0].innerHTML !=""));
    a += ((btn[3].innerHTML === btn[4].innerHTML) && (btn[3].innerHTML === btn[5].innerHTML) && (btn[3].innerHTML !=""));
    a += ((btn[6].innerHTML === btn[7].innerHTML) && (btn[6].innerHTML === btn[8].innerHTML) && (btn[6].innerHTML !=""));

    //checking columns
    a += ((btn[0].innerHTML === btn[3].innerHTML) && (btn[0].innerHTML === btn[6].innerHTML) && (btn[0].innerHTML !=""));
    a += ((btn[1].innerHTML === btn[4].innerHTML) && (btn[1].innerHTML === btn[7].innerHTML) && (btn[1].innerHTML !=""));
    a += ((btn[2].innerHTML === btn[5].innerHTML) && (btn[2].innerHTML === btn[8].innerHTML) && (btn[2].innerHTML !=""));

    //checking diagonals
    a += ((btn[0].innerHTML === btn[4].innerHTML) && (btn[0].innerHTML === btn[8].innerHTML) && (btn[0].innerHTML !=""));
    a += ((btn[2].innerHTML === btn[4].innerHTML) && (btn[2].innerHTML === btn[6].innerHTML) && (btn[2].innerHTML !=""));

    return (a>0);
}

function check_draw() {
    let full = 0;
    for(let i=0; i<btn.length; i++){
        full += (btn[i].innerHTML.length > 0);
    }
    return (full == 9);
}

function finalize() {    
    if(confirm("Do you want to play another game?")){
        clear_board();
    }    
}

function disable_buttons() {
    for(let i=0; i<btn.length; i++){
        btn[i].onclick=null;
    }
}

function clear_board(){
    location.reload();
}