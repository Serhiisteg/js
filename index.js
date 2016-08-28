// var hello = 'Hello World!;'
// document.write(hello);
// console.log(hello);
// alert(hello);

// var num = 10;
// var bool = true;
// var sum = 10 + true;
// document.write(sum);

// var num = 10;
// var str = '10';
// var sum = num + str;s
// document.write(sum); 

function sum(a, b) {
    var result = a + b;
    return result;
}
function lg(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}

var res = sum(2,2);
document.write(res);
document.write('<br>');
document.write(sum(5,10));
document.write('<br>');

document.write(lg(10, 20));
document.write('<br>');