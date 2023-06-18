import axios from "axios";
import jwt from 'jsonwebtoken';
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import config from "../../config.json";
import "./login.css"
import "../../footer/Footer.js"
import "../../header/Header.js"
import "../../header/HeaderContent.js"

function Login() {
    const navigate = useNavigate();

    const handleSubmit = async e => {
        e.preventDefault()

        await axios.post(config.api.url + "/api/auth/login", formInputData)
            .then(res => {
                localStorage.setItem("Authorization", res.data)
                let jsonDecoded = jwt.decode(res.data)
                localStorage.setItem("username", jsonDecoded.sub)
                navigate("/")
            })
            .catch(res => {
                if (res.status != 200) {
                    alert("Usuário ou senha incorretos")
                    return;
                }
            })
    }

    const [formInputData, setFormInputData] = useState({
        username: "",
        password: "",
    });

    const handleChange = (e) => {
        const newInput = (data) => ({
            ...data,
            [e.target.name]: e.target.value,
        });
        setFormInputData(newInput);
    };


    return (
        <div className="geral">
            <form className="login-form" onSubmit={handleSubmit}>
                <label>
                    Usuário:
                    <input
                        type="text"
                        name="username"
                        onChange={handleChange}
                        required
                    />
                </label>
                <br />
                <label>
                    Senha:
                    <input
                        type="password"
                        name="password"
                        onChange={handleChange}
                        required
                    />
                </label>
                <br />
                <br />
                <button type="submit">Enviar</button>
                <Link className="btn btn-register" to="/signup">
                    Registre-se
                </Link>
            </form>
        </div>
    )
}

export default Login;