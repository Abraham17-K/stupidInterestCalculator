var percent = 5
var principal = 1000
var unit = "year" //month or year
var amountTimesCompounded = 1 //amount of times compounded per period
var amountOfPeriods = 3
percent = (percent / 100)

const output = document.getElementById("answer")
const console = document.getElementById("console")
var currentNum = principal

// output.innerHTML += '<tr><th>Year</th><th>Percent</th><th>Total Money</th></tr>'
for(var i = 1; i <= amountOfPeriods; i++) {
    print(i)
    var oldNum = currentNum
    var currentInterest = round(currentNum * percent)
    currentNum = round(currentInterest + currentNum)
    // print("running")
    print(addZero(oldNum))
    oldNum = addZero(oldNum)
    displayCurrentNum = addZero(currentNum)
    currentInterest = addZero(currentInterest)
    output.innerHTML += `Y${i}: $${oldNum} x ${percent} = $${currentInterest}<br>$${oldNum} + $${currentInterest} = $${displayCurrentNum}<br>`
}

function addZero(num) {
    print("zeroing")
    // print(num)
    var stringNum = num.toString()
    // print("stringNum")
    // print(stringNum)
    if (stringNum.indexOf(".") == -1) return num;
    var arrString = stringNum.split(".")
    if (arrString[1].length == 1) {
        stringNum += "0"
        return stringNum
    } else {
        return num;
    }
}

function round(num) {
    // print(num)
    return Math.round(num*100)/100
}

function print(msg) {
    console.innerHTML += `${msg}<br>`
}