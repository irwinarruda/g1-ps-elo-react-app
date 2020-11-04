import React from 'react';
import Header from '../../components/Header/index';
import './styles.css';
import {Redirect} from 'react-router-dom';
//import {Link} from 'react-router-dom';
import { USER_IS_LOGED, USER_UPDATEIMG} from '../../UserApi';

function MinhaConta(){
  const [img, setImg] = React.useState();
  const [labelmesage, setLabelmesage] = React.useState("Escolha uma imagem de Perfil")
  const [redirect, setRedirect] = React.useState(false);
  const [imgData, setImgData] = React.useState(null);
  //const [data, setData] = React.useState();
  const data = {
    username: "Irwin Arruda",
    email: "irwin@gmail.com"
  }

  React.useEffect(() => {
    async function findToken() {
        /* const token = window.localStorage.getItem("token");
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
        } */
    };    
    findToken();  
  }, []);

  React.useEffect(() => {
    console.log(data);
  }, [data]);

  function userLogout() {
    window.localStorage.removeItem("token");
    //setData(null);
  }

  function renderRedirect(){
      if(redirect) {
          return <Redirect to='/login'/>
      }
  }

  function handleImgChange(event) {
    if(event.target.files[0]) {
        setImg(event.target.files[0]);
        setLabelmesage(event.target.files[0].name);
    }    
  } 

  async function handleSubmit(event){
    try{
      event.preventDefault();
      const formData = new FormData();
      formData.append("urlImg",img);
      const token = window.localStorage.getItem("token")
      const{url,options} = USER_UPDATEIMG(formData, token)
      const response = await fetch(url,options)
      const json = await response.json()
      setImgData(json.urlImg);
    }catch(erro){
      console.error(erro)
    }
  }

  return(
      <div className="fundo">
        <Header />
            <div className="minha-conta-container">
              <div className="img-label">
                <img src={imgData?imgData:""} alt="Imagem de Perfil"/> 
              </div>
              <div>
                <div className="minha-conta-input">
                  <label>Nome:</label>
                  <input type="text" value={data.username} disabled/>
                </div>
                <div className="minha-conta-input">
                  <label>Email:</label>
                  <input type="text" value={data.email} disabled/>
                </div>
                <div className="foto-de-perfil">
                  <p>Foto de Perfil:</p>
                  <form id="formImg" onSubmit={handleSubmit}>
                    <label htmlFor="file">{labelmesage}</label>
                    <input type="file" onChange={handleImgChange} name="file" id="file"/>
                  </form>
                </div>
                <button type="submit" form="formImg" className="btn-minha-conta">Salvar</button> 
              </div>
              {renderRedirect()}
            </div>
      </div>        
  );
}

export default MinhaConta;