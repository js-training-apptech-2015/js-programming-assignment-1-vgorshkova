/**
 * Created by Winter on 07.11.2015.
 */
function solution1(A, B, C) {
    return Math.ceil((B - A) / C);
}

function solution2(A, B){
    var max = A;
    for (var i = A; i <= B; i++){
        for (var j = i; j <= B; j++){
            if ((i ^ j) > max){
                max = (i ^ j);
            }
        }
    }
    return max;
}

function roundFloat(x, n){
    if (isNaN(x)||isNaN(n)){
        return false;
    }
    var m = Math.pow(10, n);
    return Math.round(x * m) / m;
}

var A = 0, B = 120, C = 10;
var maxPath = 40;
var logString="solution1<br>";
var accuracy = 2;
while (C < maxPath){
    var crossedPath = 0.6, speedUp = 3.1;
    logString=logString+("John has travelled <b>"+ roundFloat(A,accuracy) +" km</b>. Total distance is <b>" + roundFloat(B,accuracy) +
        " km</b>. He passes <b>" + roundFloat(C,accuracy) + "</b> km per day and needs a bit <b>" + roundFloat(solution1(A, B, C),accuracy) + " days</b> for travelling<br>");
    A = A + crossedPath;
    C = C + speedUp;
}

A = 1, B = 1000;
logString = logString+"<br><hr><br> XOR<sub>max</sub>(" + A + ", " + B + "): " + solution2(A, B);

var paragraph = document.getElementById("log");
paragraph.innerHTML = logString;