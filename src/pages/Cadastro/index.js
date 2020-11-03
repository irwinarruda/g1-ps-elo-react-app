import React from 'react';
import Input from '../../components/Input';
import './styles.css';
import LogoImg from '../../assets/logo.svg'
import CadastroImg from '../../assets/cadastro.svg'
import {Link} from 'react-router-dom';

function Cadastro() {
    const [nome, setNome] = React.useState ("");
    const [email, setEmail] = React.useState ("");
    const [password, setPassword] = React.useState ("");
    const [confPassword, setConfPassword] = React.useState()
    return (
        <div className="cordefundo">
            <div className="login-container">
                <div className="logo-ilustracao">
                    <img src={CadastroImg} />
                </div>
                <div className="login-cadastro">
                    <img src={LogoImg}/>
                    <form>
                        <Input type="text" name="nome" label="Nome:" value={nome} setValue={setNome}/>
                        <Input type="text" name="email" label="E-mail:" value={email} setValue={setEmail}/>
                        <Input type="password" name="password" label="Senha:" value={password} setValue={setPassword}/>
                        <Input type="password" name="confPassword" label="Confirme sua senha:" value={confPassword} setValue={setConfPassword}/>
                        <button className="btn">Criar conta</button>
                    </form>
                    <Link to="/login">Já tem uma conta?</Link>
                </div>
            </div>
        </div>
    );
}

export default Cadastro;