// The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

// P   A   H   N
// A P L S I I G
// Y   I   R
// And then read line by line: "PAHNAPLSIIGYIR"

// Write the code that will take a string and make this conversion given a number of rows:

// string convert(string s, int numRows);

/**
 * Time: O(n)
 * Space: O(n)
 * n - length of string
 */

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
function convert(s, numRows) {
    if (numRows === 1) {
      return s;
    }
  
    const strs = Array(numRows).fill('');
    let step = 1;
    let row = 0;
  
    // Add each letter to its corresponding row
    for (let i = 0; i < s.length; i++) {
      strs[row] += s.charAt(i);
      row += step;
  
      // Reached the edge so turn around
      if (row === 0 || row === numRows - 1) {
        step *= -1;
      }
    }
  
    return strs.reduce((total, current) => total + current); // join all the rows
  };