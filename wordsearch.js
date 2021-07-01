const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map(ls => ls.join(''));
  for (let l of horizontalJoin) {
    if (l.includes(word)) {

      return true;
    }
  }

  const rows = letters.length;
  const columns = letters[0].length;

  for (let i = 0; i < columns; i++) {
    let currentString = "";
    for (let j = 0; j < rows; j++) {
      const rowIndex = j;
      const columnIndex = i;
      currentString += letters[rowIndex][columnIndex];

    }
    if (currentString === word) {
      return true;
    }
  }

  return false;
};


module.exports = wordSearch;