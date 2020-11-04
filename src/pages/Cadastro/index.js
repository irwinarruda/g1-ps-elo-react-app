import React from 'react';
import Input from '../../components/Input';
import './styles.css';
import {FiArrowLeft} from 'react-icons/fi';
import LogoImg from '../../assets/logo.svg';
import CadastroImg from '../../assets/cadastro.svg';
import WaitImg from '../../assets/wait.svg';
import {Link, Redirect} from 'react-router-dom';
import {USER_CREATE} from '../../UserApi';


function Cadastro() {
    const [nome, setNome] = React.useState ("");
    const [email, setEmail] = React.useState ("");
    const [password, setPassword] = React.useState ("");
    const [confPassword, setConfPassword] = React.useState("");
    const [wait, setWait] = React.useState(false);
    const [redirect, setRedirect] = React.useState(false);
    const [data, setData] = React.useState();

    React.useEffect(() => {
        function findToken() {
            const token = window.localStorage.getItem("token");
            if(token) {
                setData(token);
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
            return <Redirect to='/login'/>
        }
    }

    async function handleSubmit(event) {
        try {
            event.preventDefault();
            setWait(true);
            if(password !== confPassword) throw new Error("Senhas diferentes");
            const userInfo = {
                username: nome,
                email: email,
                password: password
            };
            const {url, options} = USER_CREATE(userInfo);
            const response = await fetch(url, options);
            const json = await response.json();
            const bodyLogin = {
                username: json.username,
                email: json.email,
                urlImg: json.urlImg,
            };
            setData(bodyLogin);
        }catch(err) {
            console.error("Erro: " + err);
        }
    }

    return (
        <div className="cordefundo">
            <div className="cadastro-container">
                <div className="cadastro-ilustracao">
                    <img src={CadastroImg} alt="Ilustração"/>
                </div>
                <div className="cadastro-dado">
                    <img src={LogoImg} alt="logo"/>
                    <form onSubmit={handleSubmit}>
                        <Input type="text" name="nome" label="Nome:" value={nome} setValue={setNome}/>
                        <Input type="email" name="email" label="E-mail:" value={email} setValue={setEmail}/>
                        <Input type="password" name="password" label="Senha:" value={password} setValue={setPassword}/>
                        <Input type="password" name="confPassword" label="Confirme sua senha:" value={confPassword} setValue={setConfPassword}/>
                        <button className="btn">Criar conta</button>
                    </form>
                    <Link to="/login">
                        <FiArrowLeft size={16} color="#FF5040"/>
                        Já tem uma conta? Entre aqui</Link>
                    {wait?<img className="waitCircle" src={WaitImg} alt="Carregamento" />:null}
                    {renderRedirect()}
                </div>
            </div>
        </div>
    );
}

export default Cadastro;