(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function Sudoku() {

}

Sudoku.prototype.RowCheck =  function(num1, num2, num3, num4, num5, num6, num7, num8, num9){
  var numList = [num1, num2, num3, num4, num5, num6, num7, num8, num9];

  for (i = 0; i < 9; i++)
  {
    for(j = i+1; j < 9; j++)
    {
      if(numList[i] == numList[j])
      {
        return false;
      }
    }
  }
  return true;
}

Sudoku.prototype.ColCheck =  function(num1, num2, num3, num4, num5, num6, num7, num8, num9){
  var numList = [num1, num2, num3, num4, num5, num6, num7, num8, num9];

  for (i = 0; i < 9; i++)
  {
    for(j = i+1; j < 9; j++)
    {
      if(numList[i] == numList[j])
      {
        return false;
      }
    }
  }
  return true;
}

Sudoku.prototype.AllRowCheck = function(row1, row2, row3, row4, row5, row6, row7, row8, row9){
  var rowList = [row1, row2, row3, row4, row5, row6, row7, row8, row9];

  for (i = 0; i < 9; i++)
  {
    for(j = i+1; j < 9; j++)
    {
      for(k = 0; k < 9; k++)
      {
        if(rowList[i][k] == rowList[j][k])
        {
          return false;
        }
      }
    }
  }
  return true;
}

Sudoku.prototype.CheckBoxes = function(row1, row2, row3, row4, row5, row6, row7, row8, row9){
    var rowList = [row1, row2, row3, row4, row5, row6, row7, row8, row9];
    box = [];

    for(g = 0; g < 9; g+=3)
    {
      for(h = 0; h < 9; h+=3)
      {
        for(i = 0 + g; i < 3 + g; i++)
        {
          for(j = 0 + h; j < 3 + h; j++)
          {
            box.push(rowList[i][j]);
          }
        }

        for (i = 0; i < 9; i++)
        {
          for(j = i+1; j < 9; j++)
          {
            if(box[i] == box[j])
            {
              return false;
            }
          }

        }
        box = [];
      }

    }
    return true;
}

Sudoku.prototype.CheckAll = function(row1, row2, row3, row4, row5, row6, row7, row8, row9){
  var rowList = [row1, row2, row3, row4, row5, row6, row7, row8, row9];
  box = [];
///Row check

  for(g = 0; g < 9; g++)
  {
    for (i = 0; i < 9; i++)
    {
      for(j = i+1; j < 9; j++)
      {
        if(rowList[g][i] == rowList[g][j])
        {
          return false;
        }
      }
    }
  }

//Col check

for(g = 0; g < 9; g++)
{
  for (i = 0; i < 9; i++)
  {
    for(j = i+1; j < 9; j++)
    {
      if(rowList[i][g] == rowList[j][g])
      {
        return false;
      }
    }
  }
}

//All row check
  for (i = 0; i < 9; i++)
  {
    for(j = i+1; j < 9; j++)
    {
      for(k = 0; k < 9; k++)
      {
        if(rowList[i][k] == rowList[j][k])
        {
          return false;
        }
      }
    }
  }

///All Boxes Check
  for(g = 0; g < 9; g+=3)
  {
    for(h = 0; h < 9; h+=3)
    {
      for(i = 0 + g; i < 3 + g; i++)
      {
        for(j = 0 + h; j < 3 + h; j++)
        {
          box.push(rowList[i][j]);
        }
      }

      for (i = 0; i < 9; i++)
      {
        for(j = i+1; j < 9; j++)
        {
          if(box[i] == box[j])
          {
            return false;
          }
        }

      }
      box = [];
    }

  }
  return true;

}

exports.sudokuModule = Sudoku;

},{}],2:[function(require,module,exports){
var Sudoku = require('./../js/sudoku.js').sudokuModule;

$(document).ready(function() {
  $("form#formOne").submit(function(event) {
    event.preventDefault();
    var board = [];
    for(i = 1; i <= 81; i+=9)
    {
      var input1 = $("input#input"+i).val();
      var input2 = $("input#input"+(i+1)).val();
      var input3 = $("input#input"+(i+2)).val();
      var input4 = $("input#input"+(i+3)).val();
      var input5 = $("input#input"+(i+4)).val();
      var input6 = $("input#input"+(i+5)).val();
      var input7 = $("input#input"+(i+6)).val();
      var input8 = $("input#input"+(i+7)).val();
      var input9 = $("input#input"+(i+8)).val();

      board.push([input1, input2, input3, input4, input5, input6, input7, input8, input9]);
    }

      var simpleSudoku = new Sudoku();

      var result = simpleSudoku.CheckAll(board[0], board[1], board[2], board[3], board[4], board[5], board[6], board[7], board[8]);

      if(result == true)
      {
        $("#result").text("Correct");
      }
      else
      {
        $("#result").text("Wrong");
      }


  })
})

},{"./../js/sudoku.js":1}]},{},[2]);
