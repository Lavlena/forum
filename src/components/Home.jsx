import { useContext } from "react";
import QuestionContext from "../context/QuestionContext";
import Question from './Questions/Question'

const Home = () => {
   
    const {questions} = useContext(QuestionContext)
    return(
        <> 

        <div className="test">
           { questions && (questions.map((question, index) =>(
            <Question
                question={question}
                key={index}
            />
           )))
           }
        </div>
      
      
        </>
            )
  }

export default Home;