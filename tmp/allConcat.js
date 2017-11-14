var Sudoku = require('./../js/sudoku.js').sudokuModule;

$(document).ready(function() {
  $("form#formOne").submit(function(event) {
    event.preventDefault();

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

      var row+i = [input1, input2, input3, input4, input5, input6, input7, input8, input9];
    }

      var simpleSudoku = new Sudoku();

      var result = simpleSudoku.CheckAll(row1, row2, row3, row4, row5, row6, row7, row8, row9);

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
