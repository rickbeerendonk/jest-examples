/*! European Union Public License version 1.2 !*/
/*! Copyright © 2022 Rick Beerendonk          !*/

function sum(a, b, c) {
  if (c) {
    return a + b + c;
  } else {
    return a + b;
  }
}

module.exports = sum;
