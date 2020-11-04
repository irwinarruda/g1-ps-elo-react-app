import React from 'react';
import './styles.css';
import {Redirect} from 'react-router-dom';
import Input from '../../components/Input';
import LoginImg from '../../assets/login.svg';
import LogoNomeImg from '../../assets/logo-nome.svg';
import WaitImg from '../../assets/wait.svg';
import {Link} from 'react-router-dom';
import {USER_LOGIN} from '../../UserApi';
import {FiLogIn} from 'react-icons/fi';

function Login() {
    const [email, setEmail] = React.useState ("");
    const [password, setPassword] = React.useState ("");
    const [wait, setWait] = React.useState(false);
    const [redirect, setRedirect] = React.useState(false);
    function renderRedirect(){
        if(redirect) {
            return <Redirect to='/'/>
        }
    }
    async function handleSubmit(event){
        try{
            event.preventDefault();
            setWait(true);
            const body = {
                email: email,
                password: password
            };
            const {url, options} = USER_LOGIN(body);
            console.log(url); console.log(options);
            const response = await fetch (url, options);
            const json = await response.json();
            console.log(json);
            setRedirect(true);
        } catch(err) {
            console.error("Erro: " +err);
        } finally {
            setWait(false);
        }
    }
    return (
        <div className="cordefundo">
            <div className="login-container">
                <div className="logo-ilustracao">
                    <img src={LoginImg} alt="Login" />
                </div>
                <div className="login-cadastro">
                    <img src={LogoNomeImg} alt="Count and Flix"/>
                    <form onSubmit={handleSubmit}>
                        <Input type="email" name="email" label="E-mail:" value={email} setValue={setEmail}/>
                        <Input type="password" name="password" label="Senha:" value={password} setValue={setPassword}/>
                        {!wait? <button type="submit" className="btn">Entrar</button>: <button type="submit" className="btn" disabled="disabled">Entrar</button>}
                    </form>
                    <Link to="/cadastro">
                        <FiLogIn size={16} color="#FF5040" />
                        Criar uma conta</Link>
                    {wait?<img className="waitCircle" src={WaitImg} alt="Carregamento" />:null}
                    {renderRedirect()}
                </div>
            </div>
        </div>
    );
}

export default Login;
