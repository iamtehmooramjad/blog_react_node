import React, {useContext} from 'react';
import {Link, useNavigate} from "react-router-dom";
import {AuthContext} from "../context/authContext";

const Login = () => {

    const [inputs, setInputs] = React.useState({
        username: "",
        password: ""
    })

    const [err, setErr] = React.useState(null)

    const navigate = useNavigate()

    const {login} = useContext(AuthContext)


    const handleChange = e => {
        setInputs(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    }

    const handleSubmit = async e => {
        e.preventDefault()
        try {
            await login(inputs)
            navigate("/")
        } catch (e) {
            setErr(e.response.data)
        }
    }


    return (
        <div className="auth">
            <h1>Login</h1>
            <form action="">
                <input type="text" placeholder="Username" name="username" required onChange={handleChange}/>
                <input type="password" placeholder="Password" name="password" required onChange={handleChange}/>
                <button onClick={handleSubmit}>Login</button>
                {err && <p>{err}</p>}
                <span>Don't you have an account? <Link to="/register">Register</Link></span>
            </form>
        </div>
    );
};

export default Login;
