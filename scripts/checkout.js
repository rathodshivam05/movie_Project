// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time

let walletArr = JSON.parse(localStorage.getItem("amount"))
console.log(walletArr)
let h1 =document.getElementById("wallet")
h1.innerText = walletArr

//taking data from movie.html
let checkoutArr = JSON.parse(localStorage.getItem("movie"))
console.log(checkoutArr)


checkoutArr.map(function(ele){
    let box = document.createElement("div")
    let title = document.createElement("p")
    title.innerText = ele.Title;
    let img = document.createElement("img")
    img.src = ele.Poster;
box.append(title, img)
document.getElementById("movie").append(box)

})
document.getElementById("confirm").addEventListener("click",check)
       
function check(){
let seats = document.getElementById("number_of_seats").value
console.log(typeof seats)

if(wallet_amount[0]/100>=seats){
 alert("Booking successful!")
wallet_amount[0]-=seats*100; 
}else{
alert("Insufficient Balance!")
}
}