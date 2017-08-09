//logic code
tictactoe = {

  players : [ { player:0, name: 'O', image:"./images/x.png", score:0}, { player:1 , name: 'X', image:"./images/o.png", score:0 } ],

  switcher:0,

  turns: 0,

  board : ["_","_","_","_","_","_","_","_","_"],

  alertWinMessage(){
    setTimeout(function(){
      tictactoe.players[tictactoe.switcher].score++
      console.log(tictactoe.players[tictactoe.switcher].score);
      alert(`The winner is ${tictactoe.players[tictactoe.switcher].name}`)
      tictactoe.reset()
    }, 150 )
  },

  alertDrawMessage(){
    setTimeout(function(){
      alert('Nobody wins!')
    }, 150 )
  },

  play(player, x) {
    if (this.board[x] === "_"){
      this.board[x] = player
      this.turns++
      this.winner(player);
      return "played";

    }
  },

  reset(){
    $(".top").attr('src', "images/top.jpg")
    this.board = ["_","_","_","_","_","_","_","_","_"]
    $(".top").removeAttr('clicked')
    this.turns = 0;
  },

  // clearBoard(){
  //   return document.getElementById('id').innerHTML = "./images/top.jpg";
  // },

  winner(player) {


    if (
      (this.board[0]===player) && (this.board[1]===player) && (this.board[2]===player) || //horizontal
      (this.board[3]===player) && (this.board[4]===player) && (this.board[5]===player) || //horizontal
      (this.board[6]===player) && (this.board[7]===player) && (this.board[8]===player) || //horizontal
      (this.board[0]===player) && (this.board[3]===player) && (this.board[6]===player) || //vertical
      (this.board[1]===player) && (this.board[4]===player) && (this.board[7]===player) || //vertical
      (this.board[2]===player) && (this.board[5]===player) && (this.board[8]===player) || //vertical
      (this.board[0]===player) && (this.board[4]===player) && (this.board[8]===player) || //diagonal
      (this.board[2]===player) && (this.board[4]===player) && (this.board[6]===player)  //diagonal
      ){
      //alert("you won");
      this.alertWinMessage();
      //this.reset();
      // t = setTimeout("tictactoe.reset()",2000);
      // this.clearBoard();


    }else if (this.turns === 9) {
      this.alertDrawMessage();
      //this.reset();
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
    //$(this).context.src = tictactoe.players[tictactoe.switcher].img
    if($(this).attr('clicked' )) {
      return;
    }
    $(this).attr('clicked', 'true' )
    $(this).attr('src', tictactoe.players[tictactoe.switcher].image)

    // tictactoe.play()
    console.log(tictactoe.players[tictactoe.switcher].name);

    console.log("clicked");
    const index = $(this).attr('id');
    if(tictactoe.switcher === 0){
      tictactoe.switcher = 1;
      tictactoe.play('p1', index);
    }else{
      tictactoe.switcher = 0
      tictactoe.play('p2', index);
    }
    console.log(tictactoe.board);

  });



  let $button = document.querySelector('.button');
  $button.addEventListener('click', function() {
  let duration = 0.3,
      delay = 0.08;
  TweenMax.to($button, duration, {scaleY: 1.6, ease: Expo.easeOut});
  TweenMax.to($button, duration, {scaleX: 1.2, scaleY: 1, ease: Back.easeOut, easeParams: [3], delay: delay});
  TweenMax.to($button, duration * 1.25, {scaleX: 1, scaleY: 1, ease: Back.easeOut, easeParams: [6], delay: delay * 3 });
  tictactoe.reset();
  });

});
