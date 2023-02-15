
const Question = ({question}) => {
    return(
        <>
        <div className="question">
        <h3>{question.title}</h3>
        <p>{question.question}</p>
        </div>
        </>
    )
}
export default Question;