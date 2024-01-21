

function throwdice()
{
    let min = 1
    let max = 6 
    
    let randomNumber1 = Math.floor(Math.random()*( max - min + 1 ) + min) 
    let randomNumber2 = Math.floor(Math.random()*( max - min + 1 ) + min) 

// for dice 1

switch(randomNumber1)
{
    case 1:
        document.querySelector(".img1").setAttribute("src","./images/dice1.png")
        break
    case 2:
        document.querySelector(".img1").setAttribute("src","./images/dice2.png")
        break
    case 3:
        document.querySelector(".img1").setAttribute("src","./images/dice3.png")
        break 
    case 4:
        document.querySelector(".img1").setAttribute("src","./images/dice4.png")
        break           
    case 5:
        document.querySelector(".img1").setAttribute("src","./images/dice5.png")
        break
    case 6:
        document.querySelector(".img1").setAttribute("src","./images/dice6.png")
        break
}

// for dice 2 

switch(randomNumber2)
{
    case 1:
        document.querySelector(".img2").setAttribute("src","./images/dice1.png")
        break
    case 2:
        document.querySelector(".img2").setAttribute("src","./images/dice2.png")
        break
    case 3:
        document.querySelector(".img2").setAttribute("src","./images/dice3.png")
        break 
    case 4:
        document.querySelector(".img2").setAttribute("src","./images/dice4.png")
        break           
    case 5:
        document.querySelector(".img2").setAttribute("src","./images/dice5.png")
        break
    case 6:
        document.querySelector(".img2").setAttribute("src","./images/dice6.png")
        break
}

if(randomNumber1 > randomNumber2)
{
    document.querySelector("h1").innerHTML=" &#127882 Player 1 Win"
}
else if (randomNumber2 > randomNumber1)
{
    document.querySelector("h1").innerHTML=" Player 2 Win &#127882 " 
}
else
{
    document.querySelector("h1").innerHTML="Draw!&#128116"
}

}



