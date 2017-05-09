(function() {

    var referee = function(board) {
      this.redPlayerScore = 0;
      this.yellowPlayerScore = 0
      this.boardToReferee = board;
      this.gameOver = false;
    };

    referee.prototype.checkGameStatus = function(player, cell) {
        var r = this.checkVertical(player, cell);
        this.checkHorizontal(player, cell);
    };

    referee.prototype.checkVertical = function(player, cell) {
        var c = player.colour;

        for(i = 0; i < 3; i++) {
          console.log(this.boardToReferee.valueArray);
          for(j=0; j<4; j++) {
              if(this.boardToReferee.valueArray[i][j] == c &&
                this.boardToReferee.valueArray[i + 1][j] == c &&
                this.boardToReferee.valueArray[i + 2][j] == c &&
              this.boardToReferee.valueArray[i +  3][j] == c) {
                alert("player " + player.colour + " wins!");
                this.gameOver = true;
              }
          }
        }

    };

    referee.prototype.checkHorizontal = function(player, cell) {

    };


    module.exports = referee;


})();