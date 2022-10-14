const base = document.querySelector('#base-inp');
const height = document.querySelector('#height-inp');
const areaBtn = document.querySelector('#calculate-area');
const outputBox = document.querySelector('#output-box');

function calculateAreaofTriangle (base,height){
    const areaOfTriangle = (base * height)/2;
    return (areaOfTriangle);
}

function areaOfTriangle(){
    const area = calculateAreaofTriangle(Number(base.value), Number(height.value));

    outputBox.innerText = `Area Of Triangle is ${area}`;
}

areaBtn.addEventListener('click',areaOfTriangle);