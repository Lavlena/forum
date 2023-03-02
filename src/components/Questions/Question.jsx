import { useContext } from "react";
import UserContext from "../../context/UserContext";
import QuestionContext from "../../context/QuestionContext";
import { useNavigate } from "react-router-dom";

const Question = ({question, index}) => {
    const {users, isLoggedIn} = useContext(UserContext);
    const {editQuestion, deleteQuestion} = useContext(QuestionContext);
    const navigate = useNavigate();
    const member = users.find(user => user.id === question.userId);

    const handleAnswers = () => {
        navigate('/answers/'+question.id);
    }

    const handleEdit = () => {
        navigate('/editQuestion/'+question.id);
    }
    const handleRemove = () => {
        deleteQuestion(question.id);
    }

    return(
        <>
        <div className="question">
        <h3>{question.title}</h3>
        <hr />
        <p>{question.question}</p>
        <hr />
        <div className="info">
            <img src={member.avatar} alt="avatar"style={{height:'50px'}}/>
            <span>{member.username}</span>
            <hr />
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