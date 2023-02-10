import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [points, setPoints] = useState(0);
  const [questions, setQuestion] = useState([
    {
      text: 'Что значить \'use-strict\'',
      options: [
        ['Новосибирск', false],
        ['Москва', true],
        ['Санкт-питербург', false],
        ['Вашингтон', false],
      ],
      select: 0,
    },
    {
      text: 'Привет',
      options: [
        ['Как', false],
        ['Твои', true],
        ['Прекрасные', false],
        ['Дела', false],
      ],
      select: 0,
    }
  ]);
  function optionsClick(n) {
    if (thisQuestion < questions.length - 1) {
      setThisQuiestion(thisQuestion + 1);
    } else {
      console.log('end')
    }
    if (questions[thisQuestion].options[n][1] == true) {
      setPoints(points + 1);
    }
  }
  const [thisQuestion, setThisQuiestion] = useState(0);
  return (
    <>
      <div className='quiz__text'>
        {questions[thisQuestion].text}
      </div>
      <div className="quiz__options">
        <div onClick={() => optionsClick(0)}>{questions[thisQuestion].options[0]}</div>
        <div onClick={() => optionsClick(1)}>{questions[thisQuestion].options[1]}</div>
        <div onClick={() => optionsClick(2)}>{questions[thisQuestion].options[2]}</div>
        <div onClick={() => optionsClick(3)}>{questions[thisQuestion].options[3]}</div>
      </div>
    </>
  );
};

export default App;