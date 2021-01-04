var randnum= Math.random();
randnum= Math.floor(randnum*6)+1;
console.log(randnum);

var randnum1= Math.random();
randnum1= Math.floor(randnum1*6)+1;
console.log(randnum1);


if(randnum===1)
    document.querySelector(".img1").setAttribute("src","images/dice1.png") ;
else if(randnum===2)
    document.querySelector(".img1").setAttribute("src","images/dice2.png") ;
else if(randnum===3)
    document.querySelector(".img1").setAttribute("src","images/dice3.png") ;
else if(randnum===4)
    document.querySelector(".img1").setAttribute("src","images/dice4.png") ;
else if(randnum===5)
    document.querySelector(".img1").setAttribute("src","images/dice5.png") ;
else
    document.querySelector(".img1").setAttribute("src","images/dice6.png") ;


    if(randnum1===1)
    document.querySelector(".img2").setAttribute("src","images/dice1.png") ;
else if(randnum1===2)
    document.querySelector(".img2").setAttribute("src","images/dice2.png") ;
else if(randnum1===3)
    document.querySelector(".img2").setAttribute("src","images/dice3.png") ;
else if(randnum1===4)
    document.querySelector(".img2").setAttribute("src","images/dice4.png") ;
else if(randnum1===5)
    document.querySelector(".img2").setAttribute("src","images/dice5.png") ;
else
    document.querySelector(".img2").setAttribute("src","images/dice6.png") ;



if(randnum===randnum1)
    document.querySelector("h1").textContent="🤦‍♂️DRAW";
else if(randnum>randnum1)
    document.querySelector("h1").innerHTML="Player 1 wins🚩";
else
    document.querySelector("h1").textContent="🚩Player 2 wins";