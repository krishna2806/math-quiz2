function navigate(){
plyer1=document.getElementById("player1_name_input").value
plyer2=document.getElementById("player2_name_input").value

localStorage.setItem("PLYER1",plyer1)
localStorage.setItem("PLYER",plyer2)

window.location="gamepage.html"
}