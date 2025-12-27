 const element=event.target
    if(board_array[element.id]==='E'){
        totalturn++
    if(turn==='O'){
    element.innerHTML='O'
    board_array[element.id]='O'

    if(checkWinner()){
        document.getElementById('winningMessage').innerHTML="Winner is O"
        board.removeEventListener('click',printer)
        return
    }
    turn='X'
    }
    else{
    element.innerHTML='X'
    board_array[element.id]='X'
    if(checkWinner()){
        document.getElementById('winningMessage').innerHTML='Winner is X'
        board.removeEventListener('click',printer)
        return
        }
    turn='O'
     }
    if(totalturn===9){
     document.getElementById('winningMessage').innerHTML='Match is Draw'
         }
    }