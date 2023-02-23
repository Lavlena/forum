const Login = () => {
     
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.username.value);
    console.log(e.target.password.value);
  }

    return(
        <>
        <h1> Log in </h1>
        <div>
            <form onSubmit={handleSubmit}>
                <label > User Name 
                    <input type="text" name="username" />
                </label>
                
                    <label> Password 
                    <input type="password" name="password" />
                    </label>

                    <button type="submit"> Log in </button>
            </form>
        </div>
        </>
    )
}

export default Login;