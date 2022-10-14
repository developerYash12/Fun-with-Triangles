const sides = document.querySelectorAll('.side-input');
const hypotenuosBtn = document.querySelector('#hypotenous-btn');
const outputBox = document.querySelector('#output-box');


function calculateSumOfSquares(a,b){
    const sumOfSquares = a*a + b*b;
    return (sumOfSquares);
}
function calculateHypotenuos(){
    const sumOfSquares = calculateSumOfSquares(Number(sides[0].value),Number(sides[1].value));
    const lengthOfHypotenuos = Math.sqrt(sumOfSquares).toFixed(2);

    outputBox.innerText = `The Length Of Hypotenuos is ${lengthOfHypotenuos}`;
}

hypotenuosBtn.addEventListener('click',calculateHypotenuos);