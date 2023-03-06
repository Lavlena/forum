import { createContext } from "react";
import { useState } from "react";
import { useEffect } from "react";

const QuestionContext = createContext();

const QuestionProvider = ({children}) => {
    const [questions, setQuestions] = useState(null);
    //STATE FUNCTIONS

    const addQuestion = (newQuestion) =>{
            setQuestions([...questions, newQuestion]);
            postQuestion(newQuestion);
}

  const deleteQuestion = (id) => {
    setQuestions(questions.filter(question => question.id.toString() !== id));
   removeQuestion(id);
  }

  const editQuestion = (id, editedQuestion) => {
    setQuestions(questions.map(question => question.id.toString() === id ? {...question, ...editedQuestion} : question));
       updateQuestion(id, editedQuestion);
  }


    //CRUD FUNCTIONS
    const getQuestions = async () => {
        const data = await fetch('http://localhost:5000/questions')
        .then(res => res.json());
        setQuestions(data);
     }
    
     useEffect(() => {
        getQuestions();
     }, []); 

     const postQuestion = (newQuestion) => {
        fetch ('http://localhost:5000/questions', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newQuestion),
        });
               
     }

       const removeQuestion = (id) => {
    fetch(`http://localhost:5000/questions/${id}`, {
      method: "DELETE",
    });
  }
  
  const updateQuestion = (id, editedQuestion) => {
    fetch(`http://localhost:5000/questions/${id}`, {
      method: "PATCH",
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(editedQuestion)
    });
  }


    return(
        <QuestionContext.Provider
        value={{
            questions,
            setQuestions,
            postQuestion,
            addQuestion,
            deleteQuestion,
            editQuestion
            

        }}>
            {children}
        </QuestionContext.Provider>
    )
}

export {QuestionProvider};
export default QuestionContext;