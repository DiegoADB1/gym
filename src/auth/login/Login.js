import axios from "axios";
import jwt from 'jsonwebtoken';
import {
    MDBCol,
    MDBContainer,
    MDBInput,
    MDBRow
} from 'mdb-react-ui-kit';
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import config from "../../config.json";
import "../../footer/Footer.js";
import "../../header/Header.js";
import "../../header/HeaderContent.js";
import "../auth.css";
import LOGO from "../../imgs/logo.png";

function Login() {
    const navigate = useNavigate();

    const handleSubmit = async e => {
        console.log("teste")
        e.preventDefault()

        await axios.post(config.api.url + "/api/auth/login", formInputData)
            .then(res => {
                localStorage.setItem("Authorization", res.data)
                let jsonDecoded = jwt.decode(res.data)
                localStorage.setItem("username", jsonDecoded.sub)
                navigate("/")
            })
            .then(res => refreshPage())
            .catch(res => {
                if (res.status != 200) {
                    alert("Usuário ou senha incorretos")
                    return;
                }
            })

    }

    function refreshPage() {
        window.location.reload();
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
        <MDBContainer fluid className="authPage">
            <MDBRow>

                <MDBCol sm='6'>
                    <form onSubmit={handleSubmit}>
                        <div className='d-flex flex-row ps-5 pt-5'>
                            <span className="h1 fw-bold mb-0"><img src={LOGO} alt="logo" /></span>
                        </div>

                        <div className='d-flex flex-column justify-content-center h-custom-2 w-75 pt-4' style={{ top: "50%", transform: "translateY(25%)" }}>

                            <h3 className="fw-normal mb-3 ps-5 pb-3" style={{ letterSpacing: '1px', color: "white" }}>Log in</h3>

                            <MDBInput wrapperClass='mb-4 mx-5 w-100' label='Usuário' labelStyle={{ color: "white" }} name="username" id='formControlLg' type='text' size="lg" onChange={handleChange} required={true}/>
                            <MDBInput wrapperClass='mb-4 mx-5 w-100' label='Senha' labelStyle={{ color: "white" }} name="password" id='formControlLg' type='password' size="lg" onChange={handleChange} required={true}/>

                            <button type="submit" className="mb-4 px-5 mx-5 w-100 btn" style={{ backgroundColor: "#ff9900" }}>Login</button>

                            <p className='ms-5' style={{ color: "white" }}>Não possui uma conta?
                                <Link style={{ marginLeft: "10px" }} to="/signup">Cadastre-se aqui</Link>
                            </p>

                        </div>
                    </form>
                </MDBCol>

                <MDBCol sm='6' className='d-none d-sm-block px-0'>
                    <img src="https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg"
                        alt="Login image" className="w-100 authImg" style={{ objectFit: 'cover', objectPosition: 'left' }} />
                </MDBCol>

            </MDBRow>

        </MDBContainer>
    );
}

export default Login;