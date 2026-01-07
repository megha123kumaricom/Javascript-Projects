const quote=[
    "Technology is nothing. What’s important is that you have a faith in people." ,
    "The advance of technology is based on making it fit in so that you don’t really even notice it",
"Your most unhappy customers are your greatest source of learning",
"It has become appallingly obvious that our technology has exceeded our humanity.",
"Any sufficiently advanced technology is indistinguishable from magic",
"The greatest achievement of technology is not how it changes life, but how it improves it.",
"Technology should do the hard work so people can do the things that make them the happiest in life.",  
"The art challenges the technology, and the technology inspires the art.",
"Software is eating the world",
];
const button =document.querySelector('button');
const quotes = document.querySelector('h1');
button.addEventListener('click',()=>{
    const index=Math.floor(Math.random()*quote.length);
    quotes.textContent=quote[index];
})
