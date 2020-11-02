import React from 'react';
import './styles.css';
import Input from '../../components/Input';
import LoginImg from '../../assets/login.svg';
import LogoNomeImg from '../../assets/logo-nome.svg';
import {Link} from 'react-router-dom';

function Login() {
    const [email, setEmail] = React.useState ("");
    const [password, setPassword] = React.useState ("");
    return (
        <div className="login-container">
            <div className="logo-ilustracao">
                <img src={LoginImg} />
            </div>
            <div className="login-cadastro">
                <img src={LogoNomeImg}/>
                <form>
                    <Input type="text" name="email" label="E-mail:" value={email} setValue={setEmail}/>
                    <Input type="password" name="password" label="Senha:" value={password} setValue={setPassword}/>
                    <button className="btn">Entrar</button>
                </form>
                <Link to="/criar">Criar uma conta</Link>
            </div>
        </div>
    );
}

export default Login;
