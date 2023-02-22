import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import QuestionContext from "../../context/QuestionContext";

const EditQuestion = () => {
 const {questions, editQuestion} = useContext(QuestionContext);
const {questionid} = useParams();

const nowQuestion = questions.find(question => question.id.toString() === questionid.toString()).question;
const [dataQuestion, setDataQuestion] = useState(nowQuestion);

const nowTitle = questions.find(question => question.id.toString() === questionid.toString()).title;
const [dataTitle, setDataTitle] = useState(nowTitle);

const navigate = useNavigate();

const handleSubmit = (e) => {
    e/preventDefault();

    if(e.target.question.value !== nowQuestion || e.target.title.value !== nowTitle) {
        const renewQuestion = {
            question: e.target.question.value,
            title: e.target.title.value,
            edited: Date.now(),
        }
        editQuestion(questionid, renewQuestion)
    }
    navigate(-1);
}

    return (
        <>
      <div className="forma">
            <h1>Edit Your Question</h1>
            <form onSubmit={handleSubmit}>

                <label htmlFor="title">Edit Title:
                    <input 
                        type="text" 
                        name="title" 
                        id="title" 
                        value={dataTitle}
                        onChange={(e) => setDataTitle(e.target.value)}
                    />
                </label>

                <label htmlFor="question">Edit Question:
                    <textarea 
                        name="question" 
                        id="question" 
                        cols="30" rows="10" 
                        value={dataQuestion}
                        onChange={(e) => setDataQuestion(e.target.value)}>
                    </textarea>
                </label>
                
                <button type="submit">Edit Question</button>
            </form>
        </div>  
        </>
    )
}

export default EditQuestion;