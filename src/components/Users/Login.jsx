import { useContext } from "react";
import UserContext from "../../context/UserContext";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate} from 'react-router-dom'

const Login = () => {
    const {users, setIsLoggedIn} = useContext(UserContext);
    const navigation = useNavigate();

 const formik = useFormik({
    initialValues: {
        username:'',
        password:''
    },

    validationSchema: Yup.object().shape({
        username: Yup.string('Must be a string.')
                     .required('Cannot be empty.'),
        password: Yup.string('Must be a string.')
                     .min(3,'Must be at least 3 symbols.')
                     .required('Cannot be empty')
    }),

    onSubmit:( values ) => {
        console.log(values);

        const isLogged = users.find(user => (user.username === values.username) && (user.password === values.password));
        if (isLogged === undefined){
            console.log ('underfined');
            navigation('/register')
        }else {
            setIsLoggedIn(users.find(user => user.username === values.username));
            navigation('/home');
            console.log('available')
        }
    },
 });

 
     
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(e.target.username.value);
//     console.log(e.target.password.value);
//   }

    return(
        <>
        <h1> Log in </h1>
        {/* <div>
            <form onSubmit={handleSubmit}>
                <label > User Name 
                    <input type="text" name="username" />
                </label>
                
                    <label> Password 
                    <input type="password" name="password" />
                    </label>

                    <button type="submit"> Log in </button>
            </form>
        </div> */}
        <div>
            <form className='forma' onSubmit={formik.handleSubmit}>
                <div>
                    <label htmlFor="userName"> Username: 
                    <input type="text"
                           name="username"
                           id="username" 
                           value={formik.values.username}
                           onChange={formik.handleChange}/>
                    </label>
                </div>
                {formik.touched.username && formik.errors.username ?(
                    <span className="error">{formik.errors.username}</span>
                ) : null}

                <div>
                    <label htmlFor="password"> Password: 
                    <input type="password"
                           name="password"
                           id="password" 
                           value={formik.values.password}
                           onChange={formik.handleChange}/>
                    </label>
                </div>
                {formik.touched.password && formik.errors.password ?(
                    <span className="error">{formik.errors.password}</span>
                ) : null}
                <div>
                    <button type="submit">Log in</button>
                </div>
            </form>
        </div>
        </>
    )
}

export default Login;