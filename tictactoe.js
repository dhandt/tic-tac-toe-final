// Function called after each move to check for a winner, not the most but it doesn't affect the game much.
// I'm not commenting all of these...just, no...
function isItWin()
      {
        // Check to see if the top row are all the same value in the whoClicked array
        if (whoClicked[0]===whoClicked[1]&&whoClicked[0]===whoClicked[2])
        {
          //If they are the same, and it is player x's turn this displays that player x has won
          if (xTurn === true)
          {
            alert("X Wins!")
          }
          //If they are the same, and it is player o's turn this displays that player o has won
          else if (xTurn === false)
          {
            alert("O Wins!")
          }
        }
        else if (whoClicked[0]===whoClicked[3]&&whoClicked[0]===whoClicked[6])
        {
          if (xTurn === true)
          {
            alert("X Wins!")
          }
          else if (xTurn === false)
          {
            alert("O Wins!")
          }
        }
        else if (whoClicked[0]===whoClicked[4]&&whoClicked[0]===whoClicked[8])
        {
          if (xTurn === true)
          {
            alert("X Wins!")
          }
          else if (xTurn === false)
          {
            alert("O Wins!")
          }
        }
        else if (whoClicked[3]===whoClicked[4]&&whoClicked[3]===whoClicked[5])
        {
          if (xTurn === true)
          {
            alert("X Wins!")
          }
          else if (xTurn === false)
          {
            alert("O Wins!")
          }
        }
        else if (whoClicked[6]===whoClicked[7]&&whoClicked[6]===whoClicked[8])
        {
          if (xTurn === true)
          {
            alert("X Wins!")
          }
          else if (xTurn === false)
          {
            alert("O Wins!")
          }
        }
        else if (whoClicked[1]===whoClicked[4]&&whoClicked[1]===whoClicked[7])
        {
          if (xTurn === true)
          {
            alert("X Wins!")
          }
          else if (xTurn === false)
          {
            alert("O Wins!")
          }
        }
        else if (whoClicked[2]===whoClicked[5]&&whoClicked[2]===whoClicked[8])
        {
          if (xTurn === true)
          {
            alert("X Wins!")
          }
          else if (xTurn === false)
          {
            alert("O Wins!")
          }
        } 
        else if (whoClicked[2]===whoClicked[4]&&whoClicked[2]===whoClicked[6]) 
        {
          if (xTurn === true)
          {
            alert("X Wins!")
          }
          else if (xTurn === false)
          {
            alert("O Wins!")
          }  
        }
        // If all squares are clicked yet no one has achieved the winning conditions, display that fact
        else if (squareClicked[0]===true&&squareClicked[1]===true&&squareClicked[2]===true
               &&squareClicked[3]===true&&squareClicked[4]===true&&squareClicked[5]===true
               &&squareClicked[6]===true&&squareClicked[7]===true&&squareClicked[8]===true)
        {
          alert("There are no winners, you managed to lose while playing alone, good job.")
        }
      }
        
function squareClick(squareNumber)
      {
        // This selects an entire HTML element and changes it's attributes
        var square = document.getElementById("area" + squareNumber);
        // Is it x's turn and is the square not clicked?
        if (xTurn && squareClicked[squareNumber] === false)
        {
          // Use DOM to change the image to an x
          square.src = "images/x.png";
          // Remeber that this square was clicked
          squareClicked[squareNumber] = true;
          // Remember who clicked this square
          whoClicked[squareNumber] = 1;
          // Check to see if the turn player has won before moving on to the next turn
          isItWin()
          //Changes the player turn to the opposite of whatever it currently is(true or false, x or o).
          xTurn = !xTurn;
        }
        // Is it o's turn and is the square not clicked?
        else if (!xTurn && squareClicked[squareNumber] === false)
        {
          // Use DOM to change the image to an o
          square.src = "images/o.png";
          // Remember that this square was clicked
          squareClicked[squareNumber] = true;
          // Remember who clicked this square
          whoClicked[squareNumber] = 2;
          // Check to see if the turn player has won before moving on to the next turn
          isItWin()
          //Changes the player turn to the opposite of whatever it currently is(true or false, x or o).
          xTurn = !xTurn;
        }
        else
        {
          // Ignore the user, they clicked on something that was already clicked
        }
      }