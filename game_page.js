var p1Name=localStorage.getItem("player1")
var p2Name=localStorage.getItem("player2")
document.getElementById("p1Name").innerHTML=p1Name+" : "
document.getElementById("p2Name").innerHTML=p2Name+" : " 
var p1Score=0
document.getElementById("p1Score").innerHTML=p1Score
var p2Score=0
document.getElementById("p2Score").innerHTML=p2Score
QTurn="p1"
Aturn="p2"
document.getElementById("QuestionTurn").innerHTML="Question Turn: "+ p1Name
document.getElementById("AnswerTurn").innerHTML="Answer Turn: "+p2Name

function send(){
var N1= document.getElementById("N1").value
var N2= document.getElementById("N2").value
 correctAns=N1*N2
console.log(correctAns)
Qtag=`<h4> Question: &nbsp; <span id="word_display">${N1} x ${N2} ? </span></h4> <br>`
Atag=`Answer: <input type="number" id="AnsInput"><br><br><br><br>`
ButtonTag=`<button class="btn btn-success" onclick="Check()">Submit Answer</button>`
document.getElementById("output").innerHTML=Qtag+Atag+ButtonTag
document.getElementById("N1").value=""
document.getElementById("N2").value=""
}
QTurn= "Player1"
ATurn="Player2"

function Check(){
 var Answer=document.getElementById("AnsInput").value

if (Answer==correctAns) {
 if (ATurn=="Player1") {
  p1Score=p1Score+1 
  document.getElementById("p1Score").innerHTML=p1Score
 } else {
     p2Score=p2Score+1
     document.getElementById("p2Score").innerHTML=p2Score
 }   
}
if (QTurn=="Player1") {
  QTurn="Player2"  
document.getElementById("QuestionTurn").innerHTML="Question Turn: "+ p2Name
} else {
    QTurn="Player1"
    document.getElementById("QuestionTurn").innerHTML="Question Turn: "+ p1Name 
}
if (ATurn=="Player1") {
    ATurn="Player2"
    document.getElementById("AnswerTurn").innerHTML="Answer Turn: "+ p2Name
} else {
  ATurn="Player1"
  document.getElementById("AnswerTurn").innerHTML="Answer Turn: "+ p1Name  
}
document.getElementById("output").innerHTML=""
}
