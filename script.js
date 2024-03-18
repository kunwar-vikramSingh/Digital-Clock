let Hrs = document.getElementById("Hrs")
let Min = document.getElementById("Min")
let Sec = document.getElementById("Sec")

setInterval(()=>{
let CurrentTime = new Date()
Hrs.innerHTML = (CurrentTime.getHours()<10?"0":"") + CurrentTime.getHours();
Min.innerHTML = (CurrentTime.getMinutes()<10?"0":"") + CurrentTime.getMinutes();
Sec.innerHTML = (CurrentTime.getSeconds()<10?"0":"") + CurrentTime.getSeconds();
},1000)
