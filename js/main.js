//logic code
tictactoe = {

  players : [ { player:0, name: 'woody', image:"./images/woody.png", score:0}, { player:1 , name: 'buzz', image:"./images/buzz.png", score:0 } ],

  switcher:0,

  turns: 0,

  board : ["_","_","_","_","_","_","_","_","_"],

  alertWinMessage(winner){
    setTimeout(function(){
      tictactoe.players[tictactoe.switcher].score++                  //add score when player wins
      console.log(tictactoe.players[tictactoe.switcher].score);
      if (winner === 'x') {
        $( ".buzz" ).empty();
        $( ".draw" ).empty();
        $('.woody').text(`The winner is woody`);
      } else {
        $( ".woody" ).empty();
        $( ".draw" ).empty();
        $('.buzz').text(`The winner is buzz`);
      }
      tictactoe.reset()  // calls reset board
    }, 150 )

  },

  alertDrawMessage(){
    setTimeout(function(){
      $( ".buzz" ).empty();
      $( ".woody" ).empty();
      $('.draw').text('Nobody wins!');
      tictactoe.reset()  // calls reset board
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
    $("#number-score-woody").html(tictactoe.players[0].score) //updating the winner score at the top
    $("#number-score-buzz").html(tictactoe.players[1].score)  // ""
    tictactoe.players[0].sound.pause();
    tictactoe.players[1].sound.pause();
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
      this.alertWinMessage(player);
      //this.reset();
      // t = setTimeout("tictactoe.reset()",2000);
      // this.clearBoard();


    }else if (this.turns === 9) {
      this.alertDrawMessage();
      //this.reset();
    }
  }

}

//all DOM updating code will be here

$(document).ready(function(){

  let woody = $('#sound1')[0];
  tictactoe.players[0].sound = woody;

  let buzz = $('#sound2')[0];
  tictactoe.players[1].sound = buzz;

  $('img').on('click', function() {
    console.log($(this));

    if($(this).attr('clicked' )) {
      return;
    }
    tictactoe.players[0].sound.pause();
    tictactoe.players[0].sound.currentTime = 0;
    tictactoe.players[1].sound.pause();
    tictactoe.players[1].sound.currentTime = 0;
    $(this).attr('src', tictactoe.players[tictactoe.switcher].sound.play())


    $(this).attr('clicked', 'true' )
    $(this).attr('src', tictactoe.players[tictactoe.switcher].image)

    console.log(tictactoe.players[tictactoe.switcher].name);

    console.log("clicked");
    const index = $(this).attr('id');
    if(tictactoe.switcher === 0){
      tictactoe.switcher = 1;
      tictactoe.play('x', index);
    }else{
      tictactoe.switcher = 0
      tictactoe.play('o', index);
    }
    console.log(tictactoe.board);


  });


  let audio = $("#sound1")[0];
  let $button = document.querySelector('.button');
  $button.addEventListener('click', function() {
  audio.play();
  let duration = 0.3,
      delay = 0.08;
  TweenMax.to($button, duration, {scaleY: 1.6, ease: Expo.easeOut});
  TweenMax.to($button, duration, {scaleX: 1.2, scaleY: 1, ease: Back.easeOut, easeParams: [3], delay: delay});
  TweenMax.to($button, duration * 1.25, {scaleX: 1, scaleY: 1, ease: Back.easeOut, easeParams: [6], delay: delay * 3 });
  tictactoe.reset();
  });

});
