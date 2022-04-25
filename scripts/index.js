// Store the wallet amount to your local storage with key "amount"
function addAmount(){
var amoutArr =[0];
let arr2= JSON.parse(localStorage.getItem("amount")) || amoutArr;
let amount = document.querySelector("#amount").value;
 if(arr2!==undefined)
 {
   arr2[0]=arr2[0]+Number(amount)
 }
document.querySelector("#wallet").innerHTML = arr2 ;
localStorage.setItem("amount",JSON.stringify(arr2));
console.log(arr2);
}

function bookMovies(){
  
    window.location.href = "movies.html"
}