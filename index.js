var randomNumber1 = Math.floor(Math.random() * 6) + 1;
randomDiceImages = "dice" + randomNumber1 + ".png";
randomImageSource = "images/" + randomDiceImages;
var Image1 = document.querySelectorAll("img")[0];
Image1.setAttribute("src", randomImageSource);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
randomDiceImages2 = "dice" + randomNumber2 + ".png";
randomImageSource2 = "images/" + randomDiceImages2;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSource2)

if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = " ⛳ Player 1  wins!"
}

else if (randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = " ⛳ Player 2 wins!"
}

else{
    document.querySelector("h1").innerHTML = " ⛳ Draw!"
}


