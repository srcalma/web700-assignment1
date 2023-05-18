console.log("Welcome to WEB700")

var a = 100
console.log(a)
console.log(typeof(a))

a = "Hello"
console.log(a)
console.log(typeof(a))

b = "Stephanie" , d = 2500
console.log(b,d)

let c = "Hello World"
console.log(c)

const q = 56
console.log(q)

//q = 90
//console.log(q)

//Object literal
student = {
    sid:1,
    fnm: "Stephanie",
    lastname: "Calma",
    result: "Pass"
}

console.log(student)
console.log(typeof(student))
console.log(student.sid)

var z
console.log(z)
console.log(typeof(z))

//Expression
var z = 10 + 20
console.log(z)

function sayHello(){
    console.log("Hello World!")
}

sayHello()
console.log(typeof(sayHello))

var hello = function() {
    console.log("Hello Stephanie!!")
}
hello()
console.log(hello)

let hello2 = function(name) {
    console.log(`Hello ${name}`)
}
hello2('Jewel')
hello2('Opera')

var name = 'GLOBAL'
let name2 = "GLOBAL LET"
function sayHello2() {
    name = "GLOBAL IN"
    let name2 = "GLOBAL LET IN"
    console.log("Hello Stephanie - " + name)
    console.log("Hello Stephanie - " + name2)
}

sayHello2()
console.log(name)
console.log(name2)

function updateScore(currentScore, value, bonus) {
    return bonus ? currentScore + value * bonus : currentScore + value;
}

updateScore(10, 3);
updateScore(10, 3);
updateScore(10, 3, 2);


updateScore(10, 3);
updateScore(10, 3);
updateScore(10, 3, 2);