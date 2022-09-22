function Quote({ QuoteHeading, quoteparagraph, quotebutton }) {
   
   function handlePriceClick(){
    alert("button is clicked")
   }
   
   
    return (
        <>
            <h1>{QuoteHeading}</h1>
            <p>{quoteparagraph}</p>
            <button onClick={handlePriceClick}>{quotebutton}</button>

        </>
    )
}

export default Quote
