import { useContext } from "react";
import QuestionContext from "../context/QuestionContext";
import Question from './Questions/Question';
import UserContext from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const Home = () => {
   
    const {questions} = useContext(QuestionContext);
    const {isLoggedIn} = useContext(UserContext);
    const navigate = useNavigate();

    const handleNewQuestion = () => {
        navigate('/newQuestion/');
    }

    return(
        <> 
    {isLoggedIn && <button className="add" onClick={handleNewQuestion}>Your Question</button> }
        <div className="test">
           {questions ?
           (questions.map((question, index) =>(
            <Question
                question={question}
                key={index}
                index={index}
            />
           ))
           ):
           (<img src="https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif" alt="loading" />)
           }
        </div>
      
      
        </>
            )
  }

export default Home;