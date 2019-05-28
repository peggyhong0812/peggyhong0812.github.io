//select the board
//add event
//click on square - fill it in
//altenative what to put
//make sure can't click more than one


//1st way
//const board = document.getElementById('board')
let player = "X"

//2nd way
//board.addEventListener("click",function(event){
//event.target.innerHTML = "x";
// //});

// board.onclick = function (event) {
//     const box = event.target
//     box.innerText = player
//     nextplayer()
// }

//2nd way
let boxes = document.querySelectorAll(".box");
//let turn = o;
//boxes.forEach(funtion(box){
//box.onclick = function (event) {
//    if (turn % 2 == o)
//    }

//    event.target.innerHTML = "x";
//else {
//    event.target.innerHTML = "o";
//}
//};



function changePlayer() {
    if (player == "X") {
        player = "O";
    } else {
        player = "X";
    }
}

boxes.forEach(function (box) {
    box.onclick = function (event) {
        if (event.target.innerHTML == "") {
            event.target.innerHTML = player;
            if (checkWin()) {
                alert('You Won')
            }
            else if (checkIsDraw() == true) {
                setTimeout(function () {
                    alert('Draw Game')
                }, 200)

            } else {
                changePlayer();
            }
        } else {
            alert("Space already taken!");
        }
    };
});

let winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]


function checkWin() {
    let winner = false
    winningCombos.forEach(function (element) {
        if (boxes[element[0]].innerHTML == player && boxes[element[1]].innerHTML == player && boxes[element[2]].innerHTML == player) {
            winner = true
        }
    });

    return winner;
}


function checkIsDraw() {
    let draw = true

    boxes.forEach(function (box) {
        if (box.innerText == '')
            draw = false
    })

    return draw;
}



