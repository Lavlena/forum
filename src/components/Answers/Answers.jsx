import { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import AnswerContext from "../../context/AnswerContext";
import QuestionContext from "../../context/QuestionContext";
import UserContext from "../../context/UserContext"
import Answer from "./Answer";

const Answers = () =>{
    const {questionid} = useParams();
    const {answers} = useContext(AnswerContext);
    const {questions} = useContext(QuestionContext);
    const {isLoggedIn} = useContext(UserContext);
    const navigate = useNavigate();

    const handleNewAnswer = () =>{
        navigate('/newAnswer/'+questionid);
    }

    return(
        <>
        <h2> {questions && questions.find(question => question.id.toString() === questionid.toString()).question}</h2>
        
        <div>
        { (answers) ?
            (answers.filter(answer => answer.questionId.toString() === questionid.toString()).map((answer,index) => (
                <Answer 
                answer = {answer}
                key = {index}
                index = {index}/>
            )))
            :
            (<img src="https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif" alt="loading"/>)
         }
        </div>
         {isLoggedIn && <button className="newAns" onClick={handleNewAnswer}> Your Answer </button>}
        </>
    )
} 

export default Answers;