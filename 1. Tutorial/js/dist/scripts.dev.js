"use strict";

var _myInfo;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//SCRIPTS DECLARE HERE
var i = 0;
var txt = 'WELCOME TO ZEROWL1 TEMPLATE';
var speed = 50;

window.onload = function typing(e) {
  if (i < txt.length) {
    document.getElementById("type").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typing, speed);
  }
}; // 1. First JavaScript - JQuery


$(".btn-click").click(function () {// alert("Button Click");
}); // 2. Variables

var a = 10;
var b = 15;
var total = a + b;
var fullName = 'Hello World';
var PI = 3.14;
$(".btn-click").click(function () {
  //console.log(fullName);
  var text = total + '\n' + fullName + '\n' + (fullName = PI);
  var test = text.replace(/\n/g, "<br/>");
  $('.text-type').html(test);
}); //3. Comments
// Block comment - Key: /**
// Comment Normal - Key: Ctrl + K + U

/** 4. Built-IN Function
 * - Alert
 * - Console
 * - Confirm
 * - Prompt
 * - Set Timeout
 * - Set Interval
 */

$(".btn-click").click(function () {
  var mess = "Enter Your Name!!"; // var name = prompt(mess);

  var name = null;
  console.log("Your Name: " + name);
}); //setTimeOut(function(), timeOut) - Đối tượng truyền vào là 1 Function

$(".btn-click").click(function () {
  setTimeout(function () {
    var text = '';
    $('.text-type').text(text);
  }, 5000);
}); //setInterval(function(), timeDo) - Hàm thực hiện liên tục trong 1 khoảng thời gian

$(".btn-click").click(function () {
  setInterval(function () {
    var text = 'Hello World';

    for (var index = 0; index < text.length; index++) {//console.log(text.charAt(index));
    }
  }, 5000);
});
/** 5. Toán Tử
 * Self-Educated
 * Prefix, Postfix
 */

/** 6. Data Types:
 *  - Number
 *  - String
 *  - Bool
 *  - Undefined
 *  - Null
 *  - Symbol
 *  - Function()
 *  - Object
 * 
 *  + Check DataType: using typeof function
 */

/** 7. Toán Tử Logical đi với if
 */
// var rs = 'Test' && null
// if (rs) {
//     console.log('True DK')
// } else {
//     console.log('False DK')
// }

/** 8. Chuỗi
 * - Tạo chuỗi:
 *  + Cách tạo chuỗi
 *  + Nên dùng cách nào? lí do?
 *  + DataType of
 * - Case sử dụng vs backslash (\)
 * - Kiểm tra độ dài chuỗi
 * - Chú ý đến độ dài chuỗi khi viết
 * - Templates String ES6
 */
//Cách 1:

var hello = 'Hello World |\'From Dead\'| Test'; //Cách 2:

var hello2 = new String('Test 1'); //DataType
//console.log(typeof hello2);
// console.log(hello);
// console.log(hello.substring(0, hello.indexOf('|')));
// console.log(hello.substring(hello.indexOf('|'), 25));
// console.log(hello.substring(hello.lastIndexOf('|') + 1));
// console.log(hello.split('|'));
// console.log(`This is: ` +
//     `${hello.substring(0, hello.indexOf('|'))}`)
// //Test
// var a = 1;
// var b = 2;
// console.log(`This is Total: ${a+b}`)

/** 9. Built-in methods of String type
 * - Lenght
 * - Find index / lastIndexOf / Search
 * - Cut String [slice()/ split(), subString()]
 * - Replace
 * - Convert to upper case
 * - Convert to lower case
 * - Trim
 * - Split
 * - Get a character by index
 * - ....
 */
// var myString = "   Dota2 Community! Com";
// // /g is using regex
// console.log(myString.trim().length);

/** 10. Number 
 * - To String
 * - To Fixed - Làm Tròn Số
 */

/** 11. Array
 * - Declares
 * - Check Array Type: Array.isArray(myArray)
 */
//Work with Array
//1. To String

var languages = ['Java', 'C#', 'Ruby']; //2. Join
// console.log(languages.join(' - '))
//3. Pop - Last IN First OUT (Stack)
// console.log(languages.pop())
//4. Push - Add Last and Return Array.length
// console.log(languages.push('Dart', 'Dota2'))
//5. Shift - Delete Last and Return Value
// console.log(languages.shift(languages))
//6. Unshift - Add First and Return Array.length
// console.log(languages.unshift('Dota2', 'Pikachu'))
//7. Splicing - Delete input index and element delete number of index
// Return index value
// console.log(languages.splice(1, 2))
// console.log(languages.splice(1, 0, 'Dota2')) //add index
//8. Concat - Merge Array
//9. Slicing - Cut Element of Array
// console.log(languages)

/** 12. Function
 * Built-in
 * Own Functions
 * Tham So Args
 */
// var a = Math.random() * 101;
// var b = Math.random() * 101;
// var sum = function(a, b) {
//     console.log(`This is: ${a+b}`)
// }
// sum(a, b);
// function divNum(a, b) {
//     console.log(`This is: ${a-b}`)
// }
// function mulNumber(a, b) {
//     return (a * b).toString();
// }
// divNum(a, b)
// console.log(a)
// console.log(b)
// console.log(mulNumber(a.toFixed(), b.toFixed()))
//function arguments
// function writeLog() {
//     var myString = '';
//     for (const item of arguments) {
//         myString += `${item} - `
//     }
//     console.log(myString.slice(0, -2).trim());
// }
// writeLog('Pokemon', 'Pikachu')
//     // console.log(writeLog('Pokemon', 'Pikachu'))

/** 13. Các loại Function
 * - Declaration Function - Function Bình Thường
 * - Expression Function - Function Được Gán Vào Biến
 * - Arrow Function
 */

/** 14. Polyfill - Make Function Help By Owns
 */
// var methods = 'Java C# Python'.includes('Java', 0);
// var methods2 = 'Java C# Python'.indexOf('C#', 0);
// console.log(methods)
// console.log(methods2)

/** 15. Object
 */

var emailKey = 'email';
var myInfo = (_myInfo = {
  name: 'Zerowl',
  age: 21
}, _defineProperty(_myInfo, emailKey, 'haild.works@gmail.com'), _defineProperty(_myInfo, "getName", function getName() {
  return this.name;
}), _myInfo);
var ageKey = 'age'; //delete 1 element of obj
// delete myInfo[ageKey];
// console.log(myInfo.getName());

/** 16. Object Constructor
 * 
 */

/** 17. Object Prototype
 * - Nguyên mẫu của đối tượng
 */
// function User(firstName, lastName, avatar) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.avatar = avatar;
//     this.getName = function() {
//         return `${this.firstName} ${this.lastName}`
//     }
// }
// var author = new User('Author', 'Pikachu', 'Avatar');
// var user = new User('User', 'Pokemon', 'Avatar');
// //setter new properties to constructor author
// author.title = 'authorTitle';
// //setter new properties to constructor user
// user.comment = 'userComment';
// //add prototype
// User.prototype.className = 'SE1435'
// console.log(author.getName())
// console.log(user.className)
// console.log(user)

/** 18. Date Obj
 */
// var date = new Date();
// console.log(date.getMonth() + 1);

/** 19. Switch Case
 * 
 */
// var date = new Date().getDay() + 1;
// var date = 4;
// switch (date) {
//     case 2:
//         console.log('Monday');
//         break;
//     case 3:
//         console.log('Thu 3');
//         break;
//     case 7:
//         console.log('Thu 7');
//         break;
//     default:
//         console.log('Date not found');
//         break;
// }

/** 20. Tenary Operator
 * Toán tử 3 ngôi
 */
// var course = {
//     name: "Java",
//     coin: 10
// }
// var rs = course.coin > 0 ? `${course.coin}$` : "Free";
// console.log(`This ${course.name} costs ${rs}`);

/** 21. Loop
 * 1. for - lặp với điều kiện đúng
 * 2. for/in - lặp qua key của đối tượng
 * 3. for/of - lặp qua value của đối tượng
 * 4. while - lặp khi điều kiện dúng
 * 5. do/while - lặp ít nhất 1 lần, sau đó ktra điều kiện
 */
// var arr = ["Java", "C#", "C++"]
//normal for

function sleep(ms) {
  return new Promise(function (resolve) {
    return setTimeout(resolve, ms);
  });
} // async function runArray(arr) {
//     for (let i = 0; i < 101; i += 10) {
//         await sleep(1000);
//         console.log(`Test ${i}%`);
//     }
// }
// runArray(arr);
//for/in - get key of object
// var myInfo = {
//     name: "HaiLD8",
//     age: "21",
//     address: "Hanoi"
// }
// var myString = 'Java';
// for (var key in myInfo) {
//     console.log(myInfo[key])
// }
// for (var key in myString) {
//     console.log(myString[key])
// }
//for/of - get value of object
// var arr = ["Java", "C#", "C++", "Python"]
// var testObject = {
//     name: 'Test',
//     age: 18
// }
// for (var value of Object.keys(testObject)) {
//     console.log(testObject[value]);
// }
//while loop


var arr = ["Java", "C#", "C++", ".NET"]; // var index = 0;
// while (index <= arr.length - 1) {
//     console.log(arr[index]);
//     index++;
// }
//do-while loop

var i = 0;

do {
  console.log(i);
  i++;
} while (i <= 10);