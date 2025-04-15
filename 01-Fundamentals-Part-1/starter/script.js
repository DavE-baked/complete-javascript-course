 const mh1 = 1.69;
const jh1 = 1.95;
const mw1 = 78;
const jw1 = 92;
let answer1 = document.getElementById("bmimark1");
const mh2 = 1.88;
const jh2 = 1.76;
const mw2 = 95;
const jw2 = 85;
let answer2 = document.getElementById("bmimark2");
function bmi(x, y) {
    return(x * y * 2);
};
const mark1 = bmi(mh1, mw1);
const john1 = bmi(jh1, jw1);
const mark2 = bmi(mh2, mw2);
const john2 = bmi(jh2, jw2);
console.log('Mark\'s BMI Test 1: ' + mark1);
console.log('John\'s BMI Test 1: ' + john1);
console.log('Mark\'s BMI Test 2: ' + mark2);
console.log('John\'s BMI Test 2: ' + john2);

if(mark1 > john1) {
    var markHigherBMI = true;
    console.log('markHigherBMI = ' + markHigherBMI);
        var text = document.createTextNode;
        text.value = markHigherBMI;
        answer1.innerHTML =(text)
    
}
else{
    var markHigherBMI = false;
    console.log('markHigherBMI = ' + markHigherBMI);
        var text = document.createTextNode;
        text.value = markHigherBMI;
        answer1.value = (text)
};
if(mark2 > john2) {
    var markHigherBMI = true;
    console.log('markHigherBMI = ' + markHigherBMI);
        var text = document.createTextNode;
        text.value = markHigherBMI;
        answer2.value = (text)
    
}
else{
    var markHigherBMI = false;
    console.log('markHigherBMI = ' + markHigherBMI);
        var text = document.createTextNode;
        text.value = markHigherBMI;
        answer2.value = (text)
};


