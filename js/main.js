//logic code
tictactoe = {

  players : [ { player:0, name: 'p1', image:"images/x.png" }, { player:1 , name: 'p2', image:"images/o.png" } ],

  switcher:0,

  turns: 0,

  board : ["_","_","_","_","_","_","_","_","_"],

  play(player, x) {
    if (tictactoe.board[x] === "_"){
      tictactoe.board[x] = player
      tictactoe.turns++
      return "played";
    }
  },

  winner(player) {
    if (
      (tictactoe.board[0]===player) && (tictactoe.board[1]===player) && (tictactoe.board[2]===player) || //horizontal
      (tictactoe.board[3]===player) && (tictactoe.board[4]===player) && (tictactoe.board[5]===player) || //horizontal
      (tictactoe.board[6]===player) && (tictactoe.board[7]===player) && (tictactoe.board[8]===player) || //horizontal
      (tictactoe.board[0]===player) && (tictactoe.board[3]===player) && (tictactoe.board[6]===player) || //vertical
      (tictactoe.board[1]===player) && (tictactoe.board[4]===player) && (tictactoe.board[7]===player) || //vertical
      (tictactoe.board[2]===player) && (tictactoe.board[5]===player) && (tictactoe.board[8]===player) || //vertical
      (tictactoe.board[0]===player) && (tictactoe.board[4]===player) && (tictactoe.board[8]===player) || //diagonal
      (tictactoe.board[2]===player) && (tictactoe.board[4]===player) && (tictactoe.board[6]===player)  //diagonal
      ){
      console.log("you won");
    }else if (tictactoe.turns === 9) {
      console.log("It is a draw");
    }
  }

}

//UI/DOM code

const render = function (){
//...
}


//all DOM updating code will be here

$(document).ready(function(){

  $('img').on('click', function() {
  console.log($(this));
  $(this).context.src = tictactoe.players[tictactoe.switcher].img
  // tictactoe.play()
  console.log(tictactoe.players[tictactoe.switcher].name);
  tictactoe.winner()
  console.log("clicked");
  if(tictactoe.switcher === 0){
  tictactoe.switcher = 1
}else{
  tictactoe.switcher = 0
}

  });


  // $('img').on('click', function() {
  // console.log($(this));
  // $(this).context.src = "images/o.png"
  // console.log("clicked");
  // });

});
