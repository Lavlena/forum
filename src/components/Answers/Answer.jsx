import { useContext } from "react";
import AnswerContext from "../../context/AnswerContext";
import UserContext from "../../context/UserContext";
import QuestionContext from "../../context/QuestionContext";
import { useNavigate } from "react-router-dom";
import Answers from "./Answers";

const Answer = ({answer,index}) => {
    const {deleteAnswer, editAnswer} = useContext(AnswerContext);
    const {users, isLoggedIn} = useContext(UserContext);
    const {questions} = useContext(QuestionContext);
    const navigate = useNavigate();

    const handleEdit = () => {
        navigate(`/editAnswer/${answer.id}`);
    }
    const handleRemove = () =>{
       deleteAnswer(answer.id);
    }
    return (
        <>
        <div className="answer">
            <div className="info">
                <img src={users.find(user => user.id.toString() === answer.userId.toString()).avatar} alt="avatar" style={{height:'50px'}} />
                <p>{users.find(user => user.id.toString() === answer.userId.toString()).username}</p>
                <hr />
                <h3>{answer.answer}</h3>
                <hr />
                <p>{answer.edited ? "edited" : ""}</p>
            </div>
                <p>{new Date(answer.id).toLocaleDateString('LT')}</p>
                <br />
                {isLoggedIn && answer.userId.toString() === isLoggedIn.id.toString() &&
                <div>
                    <button onClick={handleEdit}>Edit</button>
                    <button onClick={handleRemove}>Delete</button>
                </div>
                 }
        </div>
        </>
    )
}

export default Answer;