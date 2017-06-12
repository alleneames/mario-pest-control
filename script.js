var goombaCoin=5;
var goombaTotal= 0;
//var input = Number(document.querySelector("#gInput").value);

goomba function(){
    document.querySelector("#gButton").addEventListener("click", function() {
    var numGoombas= Number(document.querySelector("#gInput").value);
    var goombaTotal = numGoombas *goombaCoin;

    
    document.querySelector("#gOutput").innerHTML = goombaTotal;
})
};


  

  document.querySelector("#gOutput").innerHTML = goombaTotal+bobTotal+cheepTotal;