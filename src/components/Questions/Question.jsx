import { useContext } from "react";
import UserContext from "../../context/UserContext";
import QuestionContext from "../../context/QuestionContext";
import { useNavigate } from "react-router-dom";

const Question = ({question, index}) => {
    const {users, isLoggedIn} = useContext(UserContext);
    const {editQuestion, deleteQuestion} = useContext(QuestionContext);
    const navigate = useNavigate();
    const author = users.find(user => user.id === question.userId);

    const handleAnswers = () => {
        navigate('/answers/'+question.id);
    }

    const handleEdit = () => {
        navigate('/editquestion/'+question.id);
    }
    const handleRemove = () => {
        deleteQuestion(question.id);
    }

    return(
        <>
        <div className="question">
        <h3>{question.title}</h3>
        <p>{question.question}</p>
        <div className="info">
            <img src={author.avatar} alt="avatar"style={{height:'50px'}}/>
            <span>{author.username}</span>
            <p>{question.edited ? "edited" : ""}</p>
        </div>
        <p>{new Date(question.id).toLocaleDateString('LT')}</p>
        <br />
        <button onClick={handleAnswers}> Answers</button>
        {(isLoggedIn && question.userId.toString() === isLoggedIn.id.toString()) &&
        <div>
            <button onClick={handleEdit}>Edit</button>
            <button onClick={handleRemove}>Delete</button>
         </div>
         }

        </div>
        </>
    )
}
export default Question;