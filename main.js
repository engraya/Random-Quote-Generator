// button 

var button = document.getElementById("new-quote");

var quote = document.getElementById("mainQuote");

var author = document.getElementById("author");


const quotes = [
    {quote: `"oorem ipsum, dolor sit amet consectetur adipisicing elit. Sed, quod aliquid odit autem dicta impedit nesciunt iusto beatae quas facilis necessitatibus laboriosam quos, non corporis officia error recusandae incidunt itaque."`, author: `Mr.  A`},
    {quote: `"korem ipsum, dolor sit amet consectetur adipisicing elit. Sed, quod aliquid odit autem dicta impedit nesciunt iusto beatae quas faciiyuiis necessitatibus laboriosam quos, non corporis officia error recusandae incidunt itaque."`, author: `Mr.  B`},
    {quote: `"porem ipsum, dolor siyeyt amet consectetur adipisicing elit. Sed, quod aliquid odit dgdgsagautem dicta impedit nesciunt iusto beatae quas fiiacilis necessiytititatibus laboriosam quos, non corporis officia error recusandae incidunt itaque."`, author: `Mr.  C`},
    {quote: `"forem ipsum, dolor sit amet coyensectetur adipisicing elit. Sed, quod aliquid odit autem dicta impedit nesciunt iusto beatae quas facilis necessitatibus laboriosam quos, non corporis officia error recusandae incidunt itaque."`, author: `Mr.  D`},
    {quote: `"bhorem ipsum, dolor sit amet consectetur adiasgearepisicing elit. Sed, quod aliquid odit autem dicta impedit nesciunt iusto beatae quas facilis necessitatibus laboriosam quos, non corporis officia error recusandae incidunt itaque."`, author: `Mr.  E`},
    {quote: `"ijorem ipsum, dolor sit amet consectetur adipisicing elit. Sed, quod aliquid odit audsagdsagem dicta impedit nesciunt iusto beatae quas facilis necessitatibus laboriosam quos, non corporis officia error recusandae incidunt itaque."`, author: `Mr.  F`},
    {quote: `"zsorem ipsum, doreytrlor sit amet consectetutrur adipisicing elit. Sed, quod aliquid odit autem dicta impedit nesciunt iusto beatae quas facilis necessitatibus laboriosam quos, non corporis officia error recusandae incidunt itaque."`, author: `Mr.  G`},
    {quote: `"frorem ipsum, dolor sit amet consectetur adipisicing elit. Sed, quod aljsdajgsajgf jfsg jfgeatae quas facilis necessitatibus ltrutyaboriosam quos, non corporis officia error recusandae incidunt itaque."`, author: `Mr.  H`},
    
];


button.addEventListener("click", changeQuoteFunction)


function changeQuoteFunction() {
    let generateRandom = Math.floor(Math.random() * quotes.length);
    let random = generateRandom;

    let quoteInstance =  quotes[random].quote;
    let authorInstace =  quotes[random].author;

    quote.innerText = quoteInstance;
    author.innerText = authorInstace;
} 