import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [points, setPoints] = useState(0);
  const [thisQuestion, setThisQuiestion] = useState(0);
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
      text: 'Что значить flex',
      options: [
        ['это флексить', false],
        ['это найс то миит йу', false],
        ['это свойсво display', true],
        ['Дела', false],
      ],
      select: 0,
    },
    {
      text: 'когда началась первая мировая война',
      options: [
        ['1999', false],
        ['1917', true],
        ['1888', false],
        ['2021', false],
      ],
      select: 0,
    },
    {
      text: 'Что такое webpack',
      options: [
        ['Язык программирования', false],
        ['Высокотехнологияная энергетическое устройство', false],
        ['Незнаю', false],
        ['Это сборщик пакетов', true],
      ],
      select: 0,
    },
    {
      text: 'Когда был создан React',
      options: [
        ['1997', false],
        ['2010', false],
        ['2011', true],
        ['2016', false],
      ],
      select: 0,
    }
  ]);
  function optionsClick(n) {
    if (thisQuestion < questions.length - 1) {
      setThisQuiestion(thisQuestion + 1);
    } else {
      document.querySelector('.quiz__modal').style.display = 'flex'
    }
    if (questions[thisQuestion].options[n][1] == true) {
      setPoints(points + 1);
    }
  }

  function restart() {
    setThisQuiestion(0);
    setPoints(0);
    document.querySelector('.quiz__modal').style.display = 'none';
  }
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
      <div className="quiz__modal">
        <div className="modal__block">
          <div className="modal__title">Result</div>
          <div className="modal__result">{points} / {questions.length}</div>
          <button className="modal__restart" onClick={restart}>restart</button>
        </div>
      </div>
    </>
  );
};

export default App;