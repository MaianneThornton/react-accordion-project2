import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
//accessing the properties from the questions array and objects
const Question = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button className="btn" onClick={() =>
        //setting the setShowInfo parameter to the opposite of whatever showInfo's current state is onClick 
        { setShowInfo(!showInfo) }}>
          {/* toggles the icons via a ternary */}
          {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {/* hides the p element by default: if showInfo is true then display the p element */}
      {showInfo && <p>{info}</p>}

    </article>
  )
};

export default Question;
