import React, {useState, useEffect, useContext} from "react";
import Card from "../Components/Card";
import { ContextGlobal } from "../Components/utils/global.context";
import { CardsContainer } from '../styles/CardsContainer';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const {dentist} = useContext(ContextGlobal)

  const [favs, setFavs] = useState(JSON.parse(localStorage.getItem('favs')));
  const [favData, setFavData] = useState();

  const filterInfo = () => {
    if(dentist.dataDentists){
      setFavData(dentist.dataDentists.filter((e) => favs.includes(e.id)));
    }
  }

  const childPropsFav = {
    favs,
    setFavs
  }

  useEffect(() =>{
    filterInfo();
    const jsonFav = JSON.stringify(favs);
    localStorage.setItem("favs", jsonFav);
  },[favs, dentist.dataDentists])

  return (
    <>
      <h1>Dentists Favs</h1>
      <CardsContainer>
        {/* este componente debe consumir los destacados del localStorage */}
        {favData? favData.map(e => (<Card name={e.name} username={e.username} id={e.id} key={e.id} remove="red" fav={childPropsFav}/>)) : <p>Loading ...</p>  }           
        {/* Deberan renderizar una Card por cada uno de ellos */}
      </CardsContainer>
    </>
  );
};

export default Favs;
