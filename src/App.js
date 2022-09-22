import './App.css';
import Button from './button';
import { myQuote } from './data';
import Image from './image';
import Quote from './quote';
function App() {
  let myList = myQuote.map((elem, ind)=> {
    console.log(elem)
  console.log(ind)
  return(
    <Quote key={ind} QuoteHeading={elem.QuoteHeading}  quoteparagraph={elem.quoteparagraph} quotebutton={elem.quotebutton}/>
  )
})

  return (
    <div>
      <h1 style={{ color: 'red' }}>Karibu Phase 2</h1>
      <p>it is very intresting</p>
      <Button />
      <Image />
      {/* <Quote QuoteHeading="this is my first quote"
        quoteparagraph="this my paragraph"
        quotebutton="10ksh" />
      <Quote QuoteHeading="this is my second quote"
        quoteparagraph="this my  second paragraph"
        quotebutton="110ksh" /> */}

        {myList}
    </div>

  );
}

export default App;
