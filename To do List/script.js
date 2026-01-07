const form=document.querySelector('form');
const alltask=document.querySelector('#alltask');
const input=document.querySelector('input');
form.addEventListener('submit',(e)=>

{
    e.preventDefault();
    const text=input.value.trim();
    if(text=="")
        return;
    const parent=document.createElement('div');
    const task=document.createElement('span');
    task.textContent=text;
    task.style.marginRight="20px";
    const deletebutton=document.createElement('button');
    deletebutton.textContent="Delete";
    const donebutton=document.createElement('button');
    donebutton.textContent="Done";
    deletebutton.style.width="65px";

donebutton.style.marginRight="15px";
parent.append(task,donebutton,deletebutton);
alltask.append(parent);
deletebutton.addEventListener('click',()=>{
    parent.remove();
})
donebutton.addEventListener('click',()=>{
    task.style.textDecoration='line-through';
    task.style.color='grey';
})
form.reset();

})