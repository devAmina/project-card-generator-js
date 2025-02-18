// Add your code here
window.onload=function(){
    const cards = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q","K", "A"];
    const suits = ["♥", "♦", "♠", "♣"];
    var randomValue = cards[Math.floor(cards.length * Math.random())];
    var suitsValue = suits[Math.floor(suits.length * Math.random())];
    if(suitsValue=="♥"|| suitsValue=="♦"){
        document.getElementById("card-value1").style.color="red"; 
        document.getElementById("card-value2").style.color="red"; 
        document.getElementById("card-suit").style.color="red";
    }
    document.getElementById("card-value1").innerHTML = randomValue;
    document.getElementById("card-value2").innerHTML = randomValue;
    document.getElementById("card-suit").innerHTML =suitsValue;
}
