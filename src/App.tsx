import React, {useState} from 'react';

// Types
import {Difficulty, fetchQuizQuestions, QuestionState} from "./API";

// components
import QuestionCard from "./components/QuestionCard";

type AnswerObject = {
    question : string;
    answer : string;
    correct : boolean;
    correctAnswer : string;
}

const TOTAL_QUESTIONS = 10;

const App = () => {

    const [loading, setLoading] = useState(false);
    const [questions, setQuestions] = useState<QuestionState[]>([]);
    const [number, setNumber] = useState(0);
    const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
    const [score, setScore] = useState(0);
    const [gameOver, setGameOver] = useState(true);

    console.log(questions);

    const startTrivia = async () => {
      setLoading(true);
      setGameOver(false);

      const newQuestions = await fetchQuizQuestions(
          TOTAL_QUESTIONS,
          Difficulty.EASY
      );

      setQuestions(newQuestions);
      setScore(0);
      setUserAnswers([]);
      setNumber(0);
      setLoading(false);
    };
    
    const checkAnswer = (e : React.MouseEvent<HTMLButtonElement>) => {
      
    }
    
    const nextQuestion = () => {
      
    }

  return (
    <div className="App">
        <h1>Oh my God ! QUIZ</h1>
        {
            gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
                <button className="start" onClick={startTrivia}>Start</button>
            ) : null
        }

        { !gameOver ? <p className="score">Score : </p> : null }

        { loading && <p>Loading Questions ...</p> }

        { !loading && !gameOver && (
        <QuestionCard
            questionNbr={number + 1}
            totalQuestions={TOTAL_QUESTIONS}
            question={questions[number].question}
            answers={questions[number].answers}
            userAnswer={userAnswers ? userAnswers[number] : undefined}
            callback={checkAnswer}
        />
        )}
        <br/>
        <button className="next" onClick={nextQuestion}>Next Question</button>

    </div>
  );
}

export default App;
