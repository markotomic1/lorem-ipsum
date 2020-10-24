import React, { useState } from "react";
import data from "./data.js";

function App() {
  const [paragraph, setParagraph] = useState(0);
  const [text, setText] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(paragraph);
    if (paragraph === 0) {
      amount = 1;
    }
    setText(data.slice(0, amount));
  };
  return (
    <section className='section'>
      <div className='title'>
        <h2>Bored of Lorem Ipsum?</h2>
      </div>
      <form
        className='form'
        onSubmit={handleSubmit}
      >
        <label htmlFor='num'>Paragraphs:</label>
        <input
          type='number'
          name='num'
          value={paragraph}
          id='num'
          min='0'
          max='9'
          onChange={(e) =>
            setParagraph(e.target.value)
          }
        ></input>
        <button className='btn' type='submit'>
          Generate
        </button>
      </form>
      <div className='paragraph-container'>
        {text.map((item, index) => {
          return <p key={index}>{item}</p>;
        })}
      </div>
    </section>
  );
}

export default App;
