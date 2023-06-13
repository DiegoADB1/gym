
import { useContext, useState } from "react";
import AuthContext from "./AuthContext";

function Login() {
    const context = useContext(AuthContext);

    const handleSubmit = async e => {

        e.preventDefault()
        await context.Login(formInputData);
        console.log(context)
    }

    const [formInputData, setFormInputData] = useState({
        username: "",
        password: "",
    });

    const handleChange = (e) => {
        console.log(formInputData)
        const newInput = (data) => ({
            ...data,
            [e.target.name]: e.target.value,
        });
        setFormInputData(newInput);
    };


    return (
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
    )
}

export default Login;