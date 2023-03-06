import { useState } from "react";
import { useContext } from "react";
import QuestionContext from "../../context/QuestionContext";
import UserContext from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
const NewQuestion = () => {
    // const [questions, setQuestions] = useState({
    //     title:'',
    //     question:'',
        
    // });
    const {isLoggedIn} = useContext(UserContext);
   const {questions, addQuestion} = useContext(QuestionContext);
   const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target.title.value);
        console.log(e.target.question.value);
        
                const newQ = {
            title: e.target.title.value,
            question: e.target.question.value,
            id: Date.now(),
            userId: isLoggedIn.id,
            likesno: [],
            edited: false,
        }
        if (e.target.question.value === ""){
            console.log('Must be filled, try again')
        } else {
            addQuestion(newQ);
        }

        navigate(-1);

        // postQuestion(newQ);
       
          
      }
    
    return(
        <>
        <h1> New Question </h1>
        <div className="form">
            <form onSubmit={handleSubmit}>
                <label> Title
                    <input type="text"
                           name="title"/>
                </label>
                <label> Question
                  <textarea name="question" 
                            cols="30" 
                            rows="10"></textarea>
                </label>
                <button type="submit"> Submit </button>
            </form>
        </div>
        </>
    )
}

export default NewQuestion;