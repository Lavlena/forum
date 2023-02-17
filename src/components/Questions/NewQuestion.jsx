import { useState } from "react";
import { useContext } from "react";
import QuestionContext from "../../context/QuestionContext";

const NewQuestion = () => {
    // const [questions, setQuestions] = useState({
    //     title:'',
    //     question:'',
        
    // });
   const {postQuestion, addQuestion} = useContext(QuestionContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target.title.value);
        console.log(e.target.question.value);
        
                const newQ = {
            title: e.target.title.value,
            question: e.target.question.value,
            id: Date.now(),
        
        };
        // postQuestion(newQ);
        addQuestion(newQ);
          
      }
    
    return(
        <>
        <h1> New Question </h1>
        <div>
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