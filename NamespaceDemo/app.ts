/// <reference path="utility-functions.ts" />


const maxBooks = Utility.maxBooksAllowed(15);
console.log(maxBooks);

import util = Utility.Fees;
//const result1 = Utility.Fees.calculateLateFee(10);
const result1 = util.calculateLateFee(10);
console.log(result1);




//  tsc app.ts --target ES5