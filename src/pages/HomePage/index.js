import React from 'react';
import Header from '../../components/Header/index';
import './styles.css';
import {Redirect} from 'react-router-dom';
import {SEARCH_MOVIE} from '../../TMDB';
import { USER_IS_LOGED, USER_UPDATEDB } from '../../UserApi';
import ItemId from './ItemId';
import Input from '../../components/Input';
import Wait from '../../assets/wait.svg';

function HomePage(){
  const [film, setFilm] = React.useState("");
  const [redirect, setRedirect] = React.useState(false);
  const [data, setData] = React.useState();
  const [wait, setWait] = React.useState(false);

  React.useEffect(() => {
    async function findToken() {
        const token = window.localStorage.getItem("token");
        if(token && token !== "undefined") {
            const response = await USER_IS_LOGED(token);
            const body =[ 
                response.username,
                response.email,
                response.movieDB,
            ];
            setData(body);
        } else {
          setRedirect(true);
        }
    };    
    findToken();  
  }, []);

  function renderRedirect(){
      if(redirect) {
          return <Redirect to='/login'/>
      }
  }

  async function handleSubmit(event) {
    try{
      event.preventDefault();
      setWait(true);
      if(film === "") throw new Error("Nenhum dado Colocado");
      const {urlD, optionsD} = SEARCH_MOVIE(film);
      const responseDB = await fetch(urlD, optionsD);
      const jsonDB = await responseDB.json();
      const userInfo = {
          movieDB: (jsonDB.results[0].id).toString()
      };
      const token = window.localStorage.getItem("token");
      const {url, options} = USER_UPDATEDB(userInfo, token);
      const response = await fetch(url, options);
      const json = await response.json();
      if(json.error) {
        throw new Error(json.error);
      }
      const bodyLogin = [
          json.username,
          json.email,
          json.movieDB,
      ];
      setData(bodyLogin);
      alert("Filme Cadastrado com Sucesso");
    } catch(err) {
        alert(err);
        console.error("Erro: " + err);
    } finally {
      setFilm("");
      setWait(false)
    }
  }
  
  return(
      <div className="fundo">
        <Header />
        {data? <ItemId array={data[2]} /> : null}
        <div className="home-search-container">
          <h1>Adicionar Filme</h1>
          <form className="home-form-container" onSubmit={handleSubmit}>
            <Input type="text" name="film" value={film} setValue={setFilm} label="Nome: "/>
            <button className="btn" type="submit">Salvar</button>
          </form>
          {wait? <img src={Wait} alt="imagem de espera"/>:null}
        </div>
        {renderRedirect()}
      </div>        
  )
}

export default HomePage;