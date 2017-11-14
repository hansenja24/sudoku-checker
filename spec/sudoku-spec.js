var Sudoku = require('./../js/sudoku.js').sudokuModule;

describe('Sudoku', function() {
  it('should test whether a Sudoku first row is true', function() {
    var sudokuCheck = new Sudoku()
    expect(sudokuCheck.RowCheck(4,7,8,1,5,6,2,3,9)).toEqual(true)
  });

    it('should test whether a Sudoku first column is true', function() {
      var sudokuCheck = new Sudoku()
      expect(sudokuCheck.ColCheck(9,7,5,3,8,6,2,1,4)).toEqual(true)
    });

    it('should test whether a Sudoku all row is true', function() {
      var sudokuCheck = new Sudoku()
      console.log(Sudoku);
      expect(sudokuCheck.AllRowCheck([1,2,3,4,5,6,7,8,9],[2,3,4,5,6,7,8,9,1],[3,4,5,6,7,8,9,1,2],[4,5,6,7,8,9,1,2,3],[5,6,7,8,9,1,2,3,4],[6,7,8,9,1,2,3,4,5],[7,8,9,1,2,3,4,5,6],[8,9,1,2,3,4,5,6,7],[9,1,2,3,4,5,6,7,8])).toEqual(true)
    });
});
