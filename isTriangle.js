const inputs = document.querySelectorAll('.angle-input');
const checkBtn = document.querySelector('#check-btn');
const output = document.querySelector('#output');


function calculateSumOfAngles(angle1,angle2,angle3){
    const sumOfAngle = angle1 + angle2 + angle3;
    return(sumOfAngle);
}
function isTriangle(){
    const sumOfAngle = calculateSumOfAngles(Number(inputs[0].value),Number(inputs[1].value),Number(inputs[2].value));

    if (sumOfAngle === 180){
        output.innerText = "Yayy ! Angles Form A Triangle";
    }
    else{
        output.innerText = "Oh No ! Its Not A Triangle";
    }
}

checkBtn.addEventListener('click',isTriangle);