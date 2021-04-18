var points= sessionStorage.getItem("points")
var head_result =document.getElementById('result-header')
var body_result =document.getElementById('result-body')

if(points>4){
    head_result.innerText = "That's nice! You've got "+points+" out of 6 right"
    body_result.innerText = "You worked hard and it paid off! Nice work"    
}
else{
    head_result.innerText = "Oops! You've got only "+points+" out of 6 questions"
    body_result.innerText = "Watch Avengers and take the quiz again. Better luck next time"
}
function reset(){
    location.href = "index.html"
}