import React from 'react';
import './styles.css';
import Input from '../../components/Input';
import LoginImg from '../../assets/login.svg';
import LogoNomeImg from '../../assets/logo-nome.svg';
import WaitImg from '../../assets/wait.svg'
import {Link, Redirect} from 'react-router-dom';
import {USER_LOGIN, USER_IS_LOGED} from '../../UserApi';

function Login() {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [wait, setWait] = React.useState(false);
    const [redirect, setRedirect] = React.useState(false);
    const [data, setData] = React.useState();

    React.useEffect(() => {
        async function findToken() {
            const token = window.localStorage.getItem("token");
            if(token) {
                const response = await USER_IS_LOGED(token);
                //var dadinhos = response;
                const body =[ 
                    response.username,
                    response.email,
                    response.urlImg,
                    response.movieDB
                ];
                setData(body);
                setRedirect(true);
            }
        };    
        findToken();  
    }, []);

    React.useEffect(() => {
        if(data) {
            setRedirect(true);
            console.log(data);
        } 
    }, [data]);

    function renderRedirect(){
        if(redirect) {
            return <Redirect to='/'/>
        }
    }

    async function handleSubmit(event){
        try{
            event.preventDefault();
            setWait(true);
            const userInfo = {
                email: email,
                password: password
            };
            const {url, options} = USER_LOGIN(userInfo);
            const response = await fetch(url, options);
            const json = await response.json();
            const bodyLogin = {
                username: json.username,
                email: json.email,
                urlImg: json.urlImg,
                accesstoken: json.accesstoken
            };
            setData(bodyLogin)
            window.localStorage.setItem("token", json.accesstoken);
            //setRedirect(true);
        } catch(err) {
            console.error("Erro: " + err);
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
                    <Link to="/cadastro">Criar uma conta</Link>
                    {wait?<img className="waitCircle" src={WaitImg} alt="Carregamento" />:null}
                    {renderRedirect()}
                </div>
            </div>
        </div>
    );
}

export default Login;
