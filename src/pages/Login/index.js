import React from 'react';
import './styles.css';
import Input from '../../components/Input';

function Login() {
    const [username, setUsername] = React.useState ("")
    return (
        <div>
            <Input type="text" name="usuario" label="Nome:" value={username} setValue={setUsername}/>
            {username}
        </div>
    );
}

export default Login;
