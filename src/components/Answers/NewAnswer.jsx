const NewAnswer = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target.answer.value);   
     }
    

    return(
        <>
        <h1> New Answer </h1>
        <div>
            <form onSubmit={handleSubmit}>
            <label> Answer
                  <textarea name="answer" 
                            cols="30" 
                            rows="10"></textarea>
                </label>
                <button type="submit"> Submit </button> 
            </form>
        </div>
        </>
    )
}
export default NewAnswer;