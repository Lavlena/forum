import { useState } from "react";
import { createContext } from "react";
import { useEffect } from "react";


const AnswerContext = createContext();

const AnswerProvider = ({children}) => {

    const [answers, setAnswers] = useState(null);
    //STATE FUNCTIONS

    const addAnswer = (newAnswer) => {
        setAnswers([...answers, newAnswer]);
        postAnswer(newAnswer);
    }

    const deleteAnswer = (id) => {
        setAnswers(answers.filter(answer => answer.id.toString() !== id.toString()));
        removeAnswer(id);
    }

    const editAnswer = (id, editedAnswer) => {
        setAnswers(answers.map(answer => answer.id.toString() === id ? {...answer, ...editedAnswer} : answer));
        updateAnswer(id, editedAnswer);
    }

    //CRUD FUNCTIONS

    const getAnswers = async () => {
        const data = await fetch('http://localhost:5000/answers')
        .then(res => res.json());
        setAnswers(data);
     }
    
     useEffect(() => {
        getAnswers();
     }, []); 

     const postAnswer = (newAnswer) => {
        fetch ('http://localhost:5000/answers', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newAnswer),
        });
               
     }

       const removeAnswer = (id) => {
    fetch(`http://localhost:5000/answers/${id}`, {
      method: "DELETE",
    });
  }
  
  const updateAnswer = (id, editedAnswer) => {
    fetch(`http://localhost:5000/answers/${id}`, {
      method: "PATCH",
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(editedAnswer)
    });
  }

    return(
        <AnswerContext.Provider
        value={{
            answers,
            setAnswers,
            postAnswer,
            addAnswer,
            deleteAnswer,
            editAnswer,
            updateAnswer,
            removeAnswer
        }}>
            {children}
        </AnswerContext.Provider>
    )
}
export {AnswerProvider};
export default AnswerContext