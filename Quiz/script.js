const form=document.querySelector('form');
const answer={
    q1:"Dr. Rajendra Prasad",
    q2:"Jawaharlal Nehru",
    q3:"Indira Gandhi",
    q4:"Mahatma Gandhi",
}
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const data=new FormData(form);
    let finalscore=0;
    for(let[name,value] of data.entries()){
        if(answer[name]==value)
            finalscore++;
    }
    document.getElementById('out').textContent=`yoy final score is ${finalscore} out of 4`;
    form.reset();
})
