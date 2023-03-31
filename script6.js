const one = document.getElementById("1");
const two = document.getElementById("2");
const three = document.getElementById("3");
const four = document.getElementById("4");
const five = document.getElementById("5");
const six = document.getElementById("6");
const seven = document.getElementById("7");
const eight = document.getElementById("8");
const nine = document.getElementById("9");
const zero = document.getElementById("0");
const divide = document.getElementById("divide");
const multiply = document.getElementById("multiply");
const subtract = document.getElementById("subtract");
const add = document.getElementById("add");
const period = document.getElementById("period");
const screen = document.getElementById("screen");
const clear = document.getElementById("clear");
const equals = document.getElementById("equals");


let aNum = 0;
let bNum = 0;
let cNum = 0;
let aChar = "";
let bChar = "";
let cChar = "";
let destination = "a";
let currentOperator = ""

//converts the number or character into character or number
function convertNumtoChar(num) {
    return  num.toString();
}

function convertChartoNum (char) {
    return parseFloat(char);
}


//resets all variables
function resetAll() {
    aNum = 0;
    bNum = 0;
    cNum = 0;
    aChar = "";
    bChar = "";
    cChar = "";
    currentOperator = "";
    destination = "a";
}

//for developer's convenience. Prints to console the current value of the variables
function printAll() {
    console.log("aNum: ", aNum)
    console.log("bNum: ", bNum)
    console.log("cNum: ", cNum)
    console.log("aChar: ", aChar)
    console.log("bChar: ", bChar)
    console.log("cChar: ", cChar)
    console.log("currentOperator: ", currentOperator)
    console.log("destination: ", destination)
}

//concatenates the new characters to (a,b,c) + Char
function concatToA(char) {
    aChar += char;
}

function concatToB(char) {
    bChar += char;
}

function concatToC(char) {
    cChar += char;
}

//basic calculations
function addNum() {
    return aNum + bNum;
}

function subtractNum() {
    return aNum - bNum;
}

function multiplyNum() {
    return aNum * bNum;
}

function divideNum() {
    return aNum / bNum
}

//reassign variables for next calculation
function moveCtoA() {
    aNum = cNum;
    aChar = cChar;
}

function emptyB() {
    bNum = 0;
    bChar = "";
}

//clears the text nodes
function clearChildren() {
    while (screen.firstChild) {
        screen.removeChild(screen.firstChild);
    }
}


//moves C to A and empties all B then clears the text nodes
function prepareNextCalc() {
    moveCtoA();
    emptyB();
}

//concats the new characters depending on the destination
function concatChar(char) {
    if (destination == "a") {
        concatToA(char)
    } else {
        concatToB(char)
    }
}

//switches destination
function switchDestination() {
    if (destination == "a") {
        destination = "b";
    } else if (destination == "b") {
        destination = "a"
    } else {
        console.log("something went wrong with switchDestination()")
    }
}

//converts all string variables into numbers then store them into their number variables
function convertABtoNum() {
    aNum = convertChartoNum(aChar);
    bNum = convertChartoNum(bChar);
}

function displaycChar() {
    cChar = convertNumtoChar(cNum)
    let result = document.createTextNode(cChar)
    screen.appendChild(result)
}



//returns true or false depending on whether both aChar and bChar is storing any values
function isCalcReady() {
    return aChar != "" && bChar != ""
}

//returns the corresponding calculation depending on the current operator
function correspondingCalc() {
    switch (currentOperator) {
        case "+":
            return addNum();
        case "-":
            return subtractNum();
        case "*":
            return multiplyNum();
        case "/":
            return divideNum();
    }
}

clear.addEventListener('click', (e) => {
    e.preventDefault();
    clearChildren()
    resetAll();
    // let defaultFirst = document.createTextNode(" ");
    // screen.appendChild(defaultFirst)

})


one.addEventListener('click', (e) => {
    e.preventDefault();
    let oneText = document.createTextNode("1"); 
    screen.appendChild(oneText);
    char = "1"
    concatChar(char)
})
two.addEventListener('click', (e) => {
    e.preventDefault();
    let twoText = document.createTextNode("2"); 
    screen.appendChild(twoText);
    char = "2"
    concatChar(char)
})
three.addEventListener('click', (e) => {
    e.preventDefault();
    let threeText = document.createTextNode("3"); 
    screen.appendChild(threeText);
    char = "3"
    concatChar(char)
})
four.addEventListener('click', (e) => {
    e.preventDefault();
    let fourText = document.createTextNode("4"); 
    screen.appendChild(fourText);
    char = "4"
    concatChar(char)
})
five.addEventListener('click', (e) => {
    e.preventDefault();
    let fiveText = document.createTextNode("5"); 
    screen.appendChild(fiveText);
    char = "5"
    concatChar(char)
})
six.addEventListener('click', (e) => {
    e.preventDefault();
    let sixText = document.createTextNode("6"); 
    screen.appendChild(sixText);
    char = "6"
    concatChar(char)
})
seven.addEventListener('click', (e) => {
    e.preventDefault();
    let sevenText = document.createTextNode("7"); 
    screen.appendChild(sevenText);
    char = "7"
    concatChar(char)
})
eight.addEventListener('click', (e) => {
    e.preventDefault();
    let eightText = document.createTextNode("8"); 
    screen.appendChild(eightText);
    char = "8"
    concatChar(char)
})
nine.addEventListener('click', (e) => {
    e.preventDefault();
    let nineText = document.createTextNode("9"); 
    screen.appendChild(nineText);
    char = "9"
    concatChar(char)
})
zero.addEventListener('click', (e) => {
    e.preventDefault();
    let zeroText = document.createTextNode("0"); 
    screen.appendChild(zeroText);
    char = "0"
    concatChar(char)
})
period.addEventListener('click', (e) => {
    e.preventDefault();
    // let periodText = document.createTextNode("."); 
    // screen.appendChild(periodText);
})
divide.addEventListener('click', (e) => {
    e.preventDefault();
    char = "/"
    destination = "b";
    if (isCalcReady()) {
        convertABtoNum();
        cChar = correspondingCalc();
        cNum = convertChartoNum(cChar)
        clearChildren()
        displaycChar()
        prepareNextCalc();
    }
    let divideText = document.createTextNode("/"); 
    screen.appendChild(divideText);
    currentOperator = "/"

})
multiply.addEventListener('click', (e) => {
    e.preventDefault(); 
    char = "*"
    destination = "b";
    if (isCalcReady()) {
        convertABtoNum();
        cChar = correspondingCalc();
        cNum = convertChartoNum(cChar)
        clearChildren()
        displaycChar()
        prepareNextCalc();
    }
    let multiplyText = document.createTextNode("*");
    screen.appendChild(multiplyText);
    currentOperator = "*"

})
subtract.addEventListener('click', (e) => {
    e.preventDefault();
    char = "-"
    destination = "b";
    if (isCalcReady()) {
        convertABtoNum();
        cChar = correspondingCalc();
        cNum = convertChartoNum(cChar)
        clearChildren()
        displaycChar()
        prepareNextCalc();
    }
    let subtractText = document.createTextNode("-"); 
    screen.appendChild(subtractText);
    currentOperator = "-"
})
add.addEventListener('click', (e) => {
    e.preventDefault(); 
    char = "+"
    destination = "b";
    if (isCalcReady()) {
        convertABtoNum();
        cChar = correspondingCalc();
        cNum = convertChartoNum(cChar)
        clearChildren()
        displaycChar()
        prepareNextCalc();
    }
    let addText = document.createTextNode("+");
    screen.appendChild(addText);
    currentOperator = "+"
    
    
    
    
    
    
})
equals.addEventListener('click', (e) => {
    e.preventDefault(); 
    convertABtoNum();
    cNum = correspondingCalc()
    clearChildren()
    displaycChar()
    prepareNextCalc();
    destination = "a";
    
})

clearChildren();







