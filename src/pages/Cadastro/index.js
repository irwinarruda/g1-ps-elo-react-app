import React from 'react';
import Input from '../../components/Input';
import './styles.css';
import LogoImg from '../../assets/logo.svg'
import CadastroImg from '../../assets/cadastro.svg'
import {Link} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';

function Cadastro() {
    const [nome, setNome] = React.useState ("");
    const [email, setEmail] = React.useState ("");
    const [password, setPassword] = React.useState ("");
    const [confPassword, setConfPassword] = React.useState("");
    return (
        <div className="cordefundo">
            <div className="cadastro-container">
                <div className="logo-ilustracao">
                    <img src={CadastroImg} alt="Cadastro" />
                </div>
                <div className="dados-cadastro">
                    <img src={LogoImg} alt="Logo Count and Flix"/>
                    <form>
                        <Input type="text" name="nome" label="Nome:" value={nome} setValue={setNome}/>
                        <Input type="email" name="email" label="E-mail:" value={email} setValue={setEmail}/>
                        <Input type="password" name="password" label="Senha:" value={password} setValue={setPassword}/>
                        <Input type="password" name="confPassword" label="Confirme sua senha:" value={confPassword} setValue={setConfPassword}/>
                        <button className="btn">Criar conta</button>
                    </form>
                    <Link to="/login">
                        <FiArrowLeft size={16} color="#FF5040" />
                        Já tem uma conta? Entre aqui</Link>
                </div>
            </div>
        </div>
    );
}

export default Cadastro;