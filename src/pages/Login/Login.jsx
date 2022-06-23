import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import React from 'react';
import { login } from '../../utilities/users-service'

const Login = ({ setUser }) => {
    const navigate = useNavigate();
    const [inputType, setInputType] = useState("password");
    const [message, setMessage] = useState("We'll never share your email with anyone else.");
    const [credendials, setCredendials] = useState({
        email: '',
        password: ''
    })
    const handleChange = e => {
        setCredendials({ ...credendials, [e.target.name]: e.target.value });
    }
    const handleSubmit = async e => {
        e.preventDefault()
        try {
            const user = await login(credendials);
            if(user){
                setUser(user);
                navigate('/movies');
            }
            
        } catch (e) {
            setMessage('Log in Failed - Try Again');
        }
    }

    const showPassword = () => {
        if(inputType === 'password'){
            setInputType('text')
        }else{
            setInputType('password')
        }
    }
    return (
        <React.Fragment>
            <form className='mx-auto col-10 col-sm-8 col-md-8 col-lg-4' onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input
                        type="email"
                        name="email"
                        onChange={handleChange}
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        value={credendials.email} />
                    <div id="emailHelp" className="form-text">{message}</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <div className="input-group mb-3">
                        <input
                            type={inputType}
                            className="form-control"
                            id="exampleInputPassword1"
                            name="password"
                            onChange={handleChange}
                            value={credendials.password}
                        />
                        <span className="input-group-text" onClick={showPassword}>
                            <i className="bi bi-eye-slash" aria-hidden="true"></i>
                        </span>
                    </div>
                </div>

                <button
                    type="submit"
                    className="btn btn-primary"
                >Submit</button>
            </form>

        </React.Fragment>
    );
}

export default Login;
