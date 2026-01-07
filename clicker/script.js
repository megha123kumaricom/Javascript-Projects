const body=document.querySelector('body');
body.addEventListener("click",(e)=>
{
    
const circleElement=document.createElement('div');
circleElement.classList.add('circle');
circleElement.textContent="HI";
const color=['red','blue','green','pink','violet','white','silver','yellow'];
circleElement.style.backgroundColor=color[Math.floor(Math.random()*8)];
circleElement.style.top=`${e.clientY-25}px`;
circleElement.style.left=`${e.clientX-25}px`;
body.append(circleElement);
setTimeout(()=>{
circleElement.remove();

},5000);

})







