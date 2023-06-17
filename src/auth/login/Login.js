import { useState } from "react";
import config from "../../config.json";
import axios from "axios";
import jwt from 'jsonwebtoken';
import { Link } from "react-router-dom";

function Login() {

    const handleSubmit = async e => {
        e.preventDefault()

        const response = await axios.post(config.api.url + "/api/auth/login", formInputData)
        if (response.status != 200) {
            alert("Usuário ou senha incorretos")
            return;
        }

        localStorage.setItem("Authorization", response.data)
        let jsonDecoded = jwt.decode(response.data)
        localStorage.setItem("username", jsonDecoded.sub)

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
        <>
            <form onSubmit={handleSubmit}>
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
            </form>
            <Link className="btn btn-primary" to="/signup">
                Registre-se
            </Link>
        </>
    )
}

export default Login;