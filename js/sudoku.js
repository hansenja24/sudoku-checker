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
