import { Link } from 'react-router';
import "../styles/register.css";
import { useState } from 'react';

const Register = () => {

    const [userData, setUserData] = useState(
        {
            fullName: '',
            email: '',
            password: '',
            confirmPassword: '',
        }
    );

    // Function to change controlled input
    const inputHandler = (e) => {
        setUserData((prevState) => {
            return { ...prevState, [e.target.name]: e.target.value}
        });
    }

    console.log(userData)

    return (
        <section className="register">
            <div className="container register__container">
                <h2>Register</h2>
                <form>
                    <p className="form__error-message">
                        Error from the backend
                    </p>
                    <input onChange={inputHandler} type="text" name="fullName" placeholder="Full Name" autoComplete="true" autoFocus />
                    <input onChange={inputHandler} type="email" name="email" placeholder="Email Address" autoComplete="true" />
                    <input onChange={inputHandler} type="password" name="password" placeholder="Password" autoComplete="true" />
                    <input onChange={inputHandler} type="password" name="confirm-password" placeholder="Confirm Password" autoComplete="true" />
                    <p>
                        Already have an account?
                        <Link to='/'> Sign In</Link>
                    </p>
                    <button type='submit' className="btn primary">Register</button>
                </form>
            </div>
        </section>
    );
};

export default Register;
