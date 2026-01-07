setInterval(()=>{
    const div=document.querySelector('div');
    const currenttime=new Date();
    const jeemainstime=new Date(2026,1,25).getTime();
    let timer=jeemainstime-currenttime;
    const day=Math.floor((timer)/(1000*60*60*24));
    timer%=1000*60*60*24;
    const hour=Math.floor((timer)/(1000*60*60));
    timer%=1000*60*60;
    const minute=Math.floor((timer)/(1000*60));
    timer%=1000*60;
    const second=Math.floor((timer)/1000);
    timer%=1000;
    result.textContent=`Day:${day} Hour:${hour} Minute:${minute} Second:${second}`;
},1000)