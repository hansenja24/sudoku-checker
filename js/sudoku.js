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

Sudoku.prototype.CheckBoxes = function(row1, row2, row3){
    var rowList = [row1, row2, row3];
    box = [];

    for(i = 0; i < 3; i++)
    {
      for(j = 0; j < 3; j++)
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
    return true;
}

exports.sudokuModule = Sudoku;
