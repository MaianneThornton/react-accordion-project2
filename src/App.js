import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
function App() {
  // sets the array of questions from the data.js file as the useState value
  const [questions, setQuestions] = useState(data);
  return (
    <main>
      <div className="container">
        <h3>questions and answers about login</h3>
        <section className="info">
          {
            //iterating the list of questions from question.js via the SingleQuestion component and then spreading all the properties beginning with id.
            questions.map((question) => {
              return (<SingleQuestion key={question.id}{...question} />);
            })};

        </section>
      </div>
    </main>
  )
};

export default App;
