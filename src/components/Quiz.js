import React,{useState,useContext} from 'react';
import { QuizContext } from '../Helpers/Context';
import {Questions} from '../Helpers/QuestionBank';

function Quiz(){

    const {score,setScore,setGameState}= useContext(QuizContext);

    const [currQuestion,SetCurrQuestion] = useState(0);
    const [optionChosen,setOptionChosen] = useState("");

    const nextQuestion = ()=>{
        if(Questions[currQuestion].answer == optionChosen){
            setScore(score+1);
        }
        alert(score);
        SetCurrQuestion(currQuestion+1);
    };
    const finishQuiz = ()=>{
        if(Questions[currQuestion].answer == optionChosen){
            setScore(score+1);
        }
        setGameState("endScreen");
        
    }

    return (
    <div className='Quiz'>
        <h1>{Questions[currQuestion].prompt}</h1>
        <div className='options'>
            <button onClick={()=>setOptionChosen("A")}>{Questions[currQuestion].optionA}</button>
            <button onClick={()=>setOptionChosen("B")}>{Questions[currQuestion].optionB}</button>
            <button onClick={()=>setOptionChosen("C")}>{Questions[currQuestion].optionC}</button>
            <button onClick={()=>setOptionChosen("D")}>{Questions[currQuestion].optionD}</button>
        </div>
        {currQuestion == Questions.length - 1 ? (
          <button onClick={finishQuiz}>Finish Quiz</button>  
        ) : (
            <button onClick={nextQuestion}>Next Question</button>
        )}
        </div>
    );
}
export default Quiz;