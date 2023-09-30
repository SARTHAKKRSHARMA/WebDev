const gameInfo = document.querySelector(".game-info");
const ticTacToeContainer = document.querySelector(".tic-tac-toe");
const newGameBtn = document.querySelector(".btn");
const allBox = document.querySelectorAll(".box");

let currPlayer = "X";
let gameOver = false;
let winner = null;
let boxAvailable = 9; 
let playerXMoves = {
    "row" : {},
    "col" : {},
    "diagonal1" : {},
    "diagonal2" : {}
}

let playerOMoves = {
    "row" : {},
    "col" : {},
    "diagonal1" : {},
    "diagonal2" : {}
}


changeGameDescription();

function changeGameDescription()
{
    if(gameOver)
    {
        if(winner == 'X') gameInfo.textContent = "Winner X";
        else if(winner == 'O') gameInfo.textContent = "Winner O";
        else gameInfo.textContent = "Draw";
    }
    else
    {
        if(currPlayer === "X") gameInfo.textContent = "Current X";
        else gameInfo.textContent = "Current O";
    }
}

function swapPlayer()
{
    if(!gameOver)
    {
        if(currPlayer == "X") currPlayer = "O";
        else currPlayer = "X";
    }
}


function canPlayMove(element)
{
    return (element.classList.contains("box") && !element.textContent);
}

function playMove(element)
{
    if(element.classList.contains("box")) 
    {
        element.textContent = currPlayer;
        let id = element.id;
        id = parseInt(id[id.length - 1]); 
        const row = parseInt((id -1) / 3);
        const col = parseInt((id -1) % 3);
        if(currPlayer == "X")
        {
            if(row in playerXMoves.row) playerXMoves.row[row]++;
            else playerXMoves.row[row] = 1;

            if(col in playerXMoves.col) playerXMoves.col[col]++;
            else playerXMoves.col[col] = 1;

            if((row - col) in playerXMoves.diagonal1) playerXMoves.diagonal1[row - col]++;
            else playerXMoves.diagonal1[row - col] = 1;

            if((row + col) in playerXMoves.diagonal2) playerXMoves.diagonal2[row + col]++;
            else playerXMoves.diagonal2[row + col] = 1;
        }
        else
        {
            if(row in playerOMoves.row) playerOMoves.row[row]++;
            else playerOMoves.row[row] = 1;

            if(col in playerOMoves.col) playerOMoves.col[col]++;
            else playerOMoves.col[col] = 1;

            if((row - col) in playerOMoves.diagonal1) playerOMoves.diagonal1[row - col]++;
            else playerOMoves.diagonal1[row - col] = 1;

            if((row + col) in playerOMoves.diagonal2) playerOMoves.diagonal2[row + col]++;
            else playerOMoves.diagonal2[row + col] = 1;
        }
    }
}

function decrementBoxAvailable()
{
    if(boxAvailable > 0) boxAvailable--;
}


function addBackgroundColor(param1, param2)
{
    if(param1 === "row")
    {
       allBox.forEach((box) => {
            let id = box.id;
            id = id[id.length - 1];
            id = parseInt(id) - 1;
            let row = parseInt(id / 3);
            if(row == param2) box.classList.add("win");
       })     
    }
    else if(param1 === "col")
    {
        allBox.forEach((box) => {
            let id = box.id;
            id = id[id.length - 1];
            id = parseInt(id) - 1;
            let col = parseInt(id % 3);
            if(col == param2) box.classList.add("win");
       })         
    }
    else if(param1 === "diagonal1")
    {
        allBox.forEach((box) => {
            let id = box.id;
            id = id[id.length - 1];
            id = parseInt(id) - 1;
            let row = parseInt(id / 3);
            let col = parseInt(id % 3);
            if(row - col == param2) box.classList.add("win");
       })         
    }
    else if(param1 === "diagonal2")
    {
        allBox.forEach((box) => {
            let id = box.id;
            id = id[id.length - 1];
            id = parseInt(id) - 1;
            let row = parseInt(id / 3);
            let col = parseInt(id % 3);
            if(row + col == param2) box.classList.add("win");
       })         
    }
}
function checkWin(element)
{

    if(boxAvailable <= 5)
    {
        let id = element.id;
        id = id[id.length - 1];
        id = parseInt(id) - 1;
        const row = parseInt(id / 3);
        const col = parseInt(id % 3);
        if(currPlayer == "X")
        {
            if(playerXMoves["row"][row] == 3)
            {
                addBackgroundColor("row", row);
                return true;
            }
            if(playerXMoves["col"][col] == 3)
            {
                addBackgroundColor("col", col);
                return true;
            }
            if(playerXMoves["diagonal1"][row - col] == 3)
            {
                addBackgroundColor("diagonal1", row - col);
                return true;
            }
            if(playerXMoves["diagonal2"][row + col] == 3)
            {
                addBackgroundColor("diagonal2", row + col);
                return true;
            }
        }
        else
        {
            if(playerOMoves["row"][row] == 3)
            {
                addBackgroundColor("row", row);
                return true;
            }
            if(playerOMoves["col"][col] == 3)
            {
                addBackgroundColor("col", col);
                return true;
            }
            if(playerOMoves["diagonal1"][row - col] == 3)
            {
                addBackgroundColor("diagonal1", row - col);
                return true;
            }
            if(playerOMoves["diagonal2"][row + col] == 3)
            {
                addBackgroundColor("diagonal2", row + col);
                return true;
            }    
        }
    }
    return false;
}


function gameOverFun(player)
{
    gameOver = true;
    winner = player;
    changeGameDescription();
    newGameBtn.classList.add("active");
}

function restoreDefault()
{
    currPlayer = "X";
    gameOver = false;
    winner = null;
    boxAvailable = 9; 
    allBox.forEach((element) => {
        element.textContent = "";
        element.classList.remove("win");
    });  
    playerXMoves = {
        "row" : {},
        "col" : {},
        "diagonal1" : {},
        "diagonal2" : {}
    }
    
    playerOMoves = {
        "row" : {},
        "col" : {},
        "diagonal1" : {},
        "diagonal2" : {}
    }
}

ticTacToeContainer.addEventListener("click", (event => 
    {
        if(!gameOver && canPlayMove(event.target))
        {
            playMove(event.target);
            let check = checkWin(event.target);
            if(check)
            {
                gameOverFun(currPlayer);
            }
            else
            {
                swapPlayer();
                decrementBoxAvailable();
                if(boxAvailable == 0)
                {
                    gameOverFun(null)
                }
                changeGameDescription();
            }
        }
    }))


newGameBtn.addEventListener("click", () => 
{
    restoreDefault();
    changeGameDescription();
    newGameBtn.classList.remove("active");
});

