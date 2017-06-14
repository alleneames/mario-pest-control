var goombaCoin = 5;
var bobOmbCoin = 7;
var cheepCheepsCoin = 11;
var goombaTotal= 0;
var bobOmbTotal = 0;
var cheepCheepTotal = 0;
//goomba function(){
    document.querySelector("#gButton").addEventListener("click", function() {
    var numGoombas= Number(document.querySelector("#gInput").value);
    goombaTotal = numGoombas *goombaCoin;

    
    document.querySelector("#gOutput").innerHTML = goombaTotal;
        totalSum();
});




  //document.querySelector("#gOutput").innerHTML = goombaTotal+bobTotal+cheepTotal;
//};

//Bob-ombs function
document.querySelector("#bButton").addEventListener("click", function() {
    var numBobombs = Number(document.querySelector("#bInput").value);
    bobOmbTotal = numBobombs * bobOmbCoin;
    
    document.querySelector("#bOutput").innerHTML = bobOmbTotal;
    totalSum();
});

//Cheep Cheeps function
document.querySelector("#cButton").addEventListener("click", function() {
    var cheepCheeps = Number(document.querySelector("#cInput").value);
    cheepCheepTotal = cheepCheeps * cheepCheepsCoin;
    
    document.querySelector("#cOutput").innerHTML = cheepCheepTotal;
    totalSum();
});

var totalSum = function () {
    document.querySelector("#grandTotal").innerHTML = goombaTotal + cheepCheepTotal + bobOmbTotal;

};

