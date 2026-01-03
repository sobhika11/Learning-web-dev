
let rn1=Math.floor(Math.random()*6+1)
let img1="dice"+rn1+".png"
let rn2=Math.floor(Math.random()*6+1)
let img2="dice"+rn2+".png"
document.querySelectorAll('img')[0].setAttribute("src","./images/"+img1)
document.querySelectorAll('img')[1].setAttribute("src","./images/"+img2)
if(rn1>rn2)
    document.querySelector('h1').innerHTML='Player 1 Wins'
else if(rn2>rn1)
    document.querySelector('h1').innerHTML='Player 2 Wins'
else
    document.querySelector('h1').innerHTML="Draw"
