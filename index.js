let min = document.getElementById("min")
let sec = document.getElementById("sec")
let startBtn = document.getElementById("start")
let pauseBtn = document.getElementById("pause")

let secCount = 0;
let intervalId = 0;


for(var i = 0 ; i < 5 ; i++){
    setTimeout(()=>{
        console.log(i);
    } , 2000);

}








// startBtn.addEventListener("click",()=>{
//     intervalId = setInterval(()=>{
//         sec.innerText = secCount
//         secCount++;
//     },1000)
// })

// pauseBtn.addEventListener("click",()=>{
//   clearInterval(intervalId)
//   sec.innerText = "00"
// secCount = 0;
// })












