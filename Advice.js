
let spanCount = document.getElementById("AdviceNo"); 
let spanAdvice = document.getElementById("AdviceText"); 
const apiURL="https://api.adviceslip.com/advice";
let count =0;
async function getAdvice(){
    const response = await fetch(apiURL);
    const data =  await response.json();
    spanAdvice.innerHTML=data.slip.advice;
    count++;
    spanCount.innerHTML=count;
}
getAdvice();