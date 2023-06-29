// button 

var button = document.getElementById("new-quote");

var quote = document.getElementById("mainQuote");

var author = document.getElementById("author");


const quotes = [
    {quote: `"oorem ipsum, dolor sit amet consectetur adipisicing elit. Sed, quod aliquid odit autem dicta impedit nesciunt iusto beatae quas facilis necessitatibus laboriosam quos, non corporis officia error recusandae incidunt itaque."`, author: `Sardauna`},
    {quote: `"korem ipsum, dolor sit amet consectetur adipisicing elit. Sed, quod aliquid odit autem dicta impedit nesciunt iusto beatae quas facilis necessitatibus laboriosam quos, non corporis officia error recusandae incidunt itaque."`, author: `Tafawa Balewa`},
    {quote: `"porem ipsum, dolor sit amet consectetur adipisicing elit. Sed, quod aliquid odit autem dicta impedit nesciunt iusto beatae quas facilis necessitatibus laboriosam quos, non corporis officia error recusandae incidunt itaque."`, author: `Azikiwe`},
    {quote: `"forem ipsum, dolor sit amet consectetur adipisicing elit. Sed, quod aliquid odit autem dicta impedit nesciunt iusto beatae quas facilis necessitatibus laboriosam quos, non corporis officia error recusandae incidunt itaque."`, author: `Buhari`},
    {quote: `"frorem ipsum, dolor sit amet consectetur adipisicing elit. Sed, quod aliquid odit autem dicta impedit nesciunt iusto beatae quas facilis necessitatibus laboriosam quos, non corporis officia error recusandae incidunt itaque."`, author: `Babangida`},
    {quote: `"bhorem ipsum, dolor sit amet consectetur adipisicing elit. Sed, quod aliquid odit autem dicta impedit nesciunt iusto beatae quas facilis necessitatibus laboriosam quos, non corporis officia error recusandae incidunt itaque."`, author: `Shonekan`},
    {quote: `"ijorem ipsum, dolor sit amet consectetur adipisicing elit. Sed, quod aliquid odit autem dicta impedit nesciunt iusto beatae quas facilis necessitatibus laboriosam quos, non corporis officia error recusandae incidunt itaque."`, author: `Abiola`},
    {quote: `"zsorem ipsum, dolor sit amet consectetur adipisicing elit. Sed, quod aliquid odit autem dicta impedit nesciunt iusto beatae quas facilis necessitatibus laboriosam quos, non corporis officia error recusandae incidunt itaque."`, author: `Murtala`},
    
];


button.addEventListener("click", changeQuoteFunction)


function changeQuoteFunction() {
    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    author.innerText = quotes[random].author;
} 