import React from 'react';
import Header from '../../components/Header/index';
import './styles.css';
import {Redirect} from 'react-router-dom';
import { USER_IS_LOGED, USER_UPDATEIMG } from '../../UserApi';

function MinhaConta(){
  const [img, setImg] = React.useState();
  const [labelmesage, setLabelmesage] = React.useState("Escolha uma imagem de Perfil")
  const [redirect, setRedirect] = React.useState(false);
  const [imgData, setImgData] = React.useState(null);
  const [data, setData] = React.useState();

  React.useEffect(() => {
    async function findToken() {
        const token = window.localStorage.getItem("token");
        if(token) {
            const response = await USER_IS_LOGED(token);
            const body =[ 
                response.username,
                response.email,
                response.urlImg,
                response.movieDB
            ];
            setImgData(response.urlImg);
            setData(body);
        } else {
          setRedirect(true);
        }
    };    
    findToken();  
  }, []);

  React.useEffect(() => {
    console.log(data);
  }, [data]);

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
      formData.append("userImage",img);
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
          <div className="minha-conta-img-container"><img src={imgData?imgData:""} alt="Imagem de Perfil" className="minha-conta-img-container"/> </div>
        </div>
        <div>
          <div className="minha-conta-input">
            <label>Nome:</label>
            <input type="text" value={data?data[0]:""} disabled/>
          </div>
          <div className="minha-conta-input">
            <label>Email:</label>
            <input type="text" value={data?data[1]:""} disabled/>
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