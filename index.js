/**
 * Author: Luciana Bruscino
 */

const URL = process.env.URL || 'http://lucianabruscino.com/'; 
console.log(" DomComplete tests run: ", URL);
const repeat = process.env.repeat || 1;
console.log(" Running ", repeat + " test");

const startTest = require('./start.js');
for (let i = 0; i < repeat  ; i++) {
	startTest(URL, repeat);
}
