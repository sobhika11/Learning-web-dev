var len=document.querySelectorAll('button').length;
for(let i=0;i<len;i++){
    document.querySelectorAll('button')[i].addEventListener('click',handleClick);
}
function handleClick(){
    alert("I got clicked!");
}
