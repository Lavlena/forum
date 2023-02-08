const NewQuestion = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target.title.value);
        console.log(e.target.question.value);
      }
    

    return(
        <>
        <h1> New Question </h1>
        <div>
            <form onSubmit={handleSubmit}>
                <label> Title
                    <input type="text"
                           name="title"/>
                </label>
                <label> Question
                  <textarea name="question" 
                            cols="30" 
                            rows="10"></textarea>
                </label>
                <button type="submit"> Submit </button>
            </form>
        </div>
        </>
    )
}

export default NewQuestion;