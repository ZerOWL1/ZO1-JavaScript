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
}


// 1. First JavaScript - JQuery
$(".btn-click").click(function() {
    // alert("Button Click");
});


// 2. Variables
var a = 10;
var b = 15;
var total = a + b;
let fullName = 'Hello World';
const PI = 3.14;

$(".btn-click").click(function() {
    //console.log(fullName);
    var text = total + '\n' + fullName + '\n' + (fullName = PI);
    var test = text.replace(/\n/g, "<br/>");
    $('.text-type').html(test);
})

//3. Comments
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

$(".btn-click").click(function() {
    var mess = "Enter Your Name!!";
    // var name = prompt(mess);
    var name = null;
    console.log("Your Name: " + name);
})

//setTimeOut(function(), timeOut) - Đối tượng truyền vào là 1 Function
$(".btn-click").click(function() {
    setTimeout(function() {
        var text = '';
        $('.text-type').text(text);
    }, 5000)
})

//setInterval(function(), timeDo) - Hàm thực hiện liên tục trong 1 khoảng thời gian
$(".btn-click").click(function() {
    setInterval(function() {
        var text = 'Hello World';
        for (let index = 0; index < text.length; index++) {
            //console.log(text.charAt(index));
        }
    }, 5000)
})

/** 5. Toán Tử
 * Self-Educated
 */