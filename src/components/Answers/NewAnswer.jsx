import { useNavigate, useParams } from "react-router-dom";
import { useContext } from "react";
import AnswerContext from "../../context/AnswerContext";
import QuestionContext from "../../context/QuestionContext";
import UserContext from "../../context/UserContext";

const NewAnswer = () => {
 const {questionid} = useParams();
 const {answers, addAnswer} = useContext(AnswerContext);
 const {editQuestion} = useContext(QuestionContext);
 const {isLoggedIn} = useContext(UserContext);
 const navigate = useNavigate();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target.answer.value); 
        
        const newAnswer = {
            id: Date.now(),
            questionId: questionid,
            answer: e.target.answer.value,
            userId: isLoggedIn.id,
            likesno: [],
            edited: false
        }

        if (e.target.answer.value === ""){
            console.log('Must be filled, try again')
        } else {
            addAnswer(newAnswer);
        }

        navigate(-1);
     }
    

    return(
        <>
        <h1> New Answer </h1>
        <div>
            <form onSubmit={handleSubmit}>
            <label> Answer
                  <textarea name="answer" 
                            cols="30" 
                            rows="10"></textarea>
                </label>
                <button type="submit"> Submit </button> 
            </form>
        </div>
        </>
    )
}
export default NewAnswer;