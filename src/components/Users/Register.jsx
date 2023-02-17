const Register = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target.username.value);
        console.log(e.target.email.value);
        console.log(e.target.password.value);
        console.log(e.target.passwordrepeat.value);
        console.log(e.target.avatar.value);
      }
    

    return(
        <>
        <h1> Register </h1>
        <div>
            <form onSubmit={handleSubmit}>
                <label> User Name
                    <input type="text"
                           name="username" />
                </label> Email
                <label>
                    <input type="email"
                           name="email" />
                </label>
                <label> Passwopd
                    <input type="password"
                           name="password" />
                </label>
                <label> Repeat Password
                    <input type="password"
                           name="passwordrepeat" />
                </label>
                <label> User Avatar
                    <input type="url"
                           name="avatar" />
                </label>
                <button type="submit"> Sign Up </button>
            </form>
        </div>
        </>
    )
}

export default Register;