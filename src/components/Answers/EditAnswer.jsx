import { useState } from "react";
import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AnswerContext from "../../context/AnswerContext";

const EditAnswer = () => {
 const {answers, editAnswer} = useContext(AnswerContext);
 const {answerid} = useParams();

 const nowAnswer = answers.find(answer => answer.id.toString() === answerid.toString()).answer;

 const [dataAnswer, setDataAnswer] = useState(nowAnswer);
 const navigate = useNavigate();

 const handleSubmit = (e) => {
    e.preventDefault();

    if(e.target.answer.value !== nowAnswer){
        const renewAnswer = {
            answer: e.target.answer.value,
            edited: Date.now(),
        }
        editAnswer(answerid, renewAnswer);
    }
    navigate (-1);
 }

    return (
        <>
        <div className="forma">
        <h1>Edit your Answer</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor="answeredit">
                <textarea name="answer" id="answer" value={dataAnswer} cols="30" rows="10" onChange = {(e) => setDataAnswer(e.target.value)}></textarea>
            </label>
            <button type="submit">Edit Answer</button>
        </form>
        </div>
        </>
    )
}

export default EditAnswer;