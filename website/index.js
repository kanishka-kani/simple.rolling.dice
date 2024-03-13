const mybtn = document.getElementById("mybtn");
const label = document.getElementById("mylabel");
const min = 1;
const max = 6;
let randomroll;

mybtn.onclick = function(){
    randomroll = Math.floor(Math.random()*6 )+1
     label.textContent = randomroll;
}