import React from 'react';
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";

const Register = () => {

    const navigate = useNavigate()

    const [inputs, setInputs] = React.useState({
        username: "",
        email: "",
        password: ""
    });

    const [err, setErr] = React.useState(null)

    const handleChange = e => {
        setInputs(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const handleSubmit = async e => {
        e.preventDefault()
        try {
            await axios.post("/auth/register", inputs)
            navigate("/login")

        } catch (e) {
            setErr(e.response.data)
        }
    }

    console.log(inputs)

    return (
        <div className="auth">
            <h1>Register</h1>
            <form action="">
                <input type="email" placeholder="Email" required name="email" onChange={handleChange}/>
                <input type="text" placeholder="Username" required name="username" onChange={handleChange}/>
                <input type="password" placeholder="Password" required name="password" onChange={handleChange}/>
                <button onClick={handleSubmit}>Register</button>
                {err && <p>{err}</p>}
                <span>Do you have an account? <Link to="/login">Login</Link></span>
            </form>
        </div>
    );
};

export default Register;
