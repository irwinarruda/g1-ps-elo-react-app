import React from 'react';
import Header from '../../components/Header/index';
import './styles.css';
import {Redirect} from 'react-router-dom';
//import {Link} from 'react-router-dom';
import { USER_IS_LOGED} from '../../UserApi';

function MinhaConta(){


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
        } else {
          userLogout();
          setRedirect(true);
        }
    };    
    findToken();  
  }, []);

  React.useEffect(() => {
    console.log(data);
  }, [data]);

  function userLogout() {
    window.localStorage.removeItem("token");
    setData(null);
  }

  function renderRedirect(){
      if(redirect) {
          return <Redirect to='/login'/>
      }
  }

  return(
      <div className="fundo">
        <Header />
          <p3>Nome</p3>
          <p3>Senha</p3>
            <div className="text-box1">

            </div>
            <div className="img-label">
                  <p>Profile Pic</p> 
            </div>
            {renderRedirect()}
      </div>        
  );
}

export default MinhaConta;