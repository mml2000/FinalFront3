import React, {useState, useEffect} from 'react'
import { useContext } from 'react';
import Card from '../Components/Card'
import { ContextGlobal } from '../Components/utils/global.context';
import { CardsContainer } from '../styles/CardsContainer';
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const {dentist} = useContext(ContextGlobal)
  
  const initialValue = () => {
    const dataStorage = JSON.parse(localStorage.getItem('favs'));
    if(dataStorage === null){
      return [];
    }else {
      return dataStorage;
    }
  }
  
  const [favs, setFavs] = useState(initialValue);

    const childPropsFav = {
      favs,
      setFavs
    }
    useEffect(() =>{
      const jsonFav = JSON.stringify(favs);
      localStorage.setItem("favs", jsonFav);
    },[favs])

  

  return (
    <main className="" >
      <h1>Home</h1>
      <CardsContainer>
        {/* Aqui deberias renderizar las cards */}
          {dentist.loader? <p>Loading ...</p> : dentist.dataDentists.map(e => (<Card key={e.id} name={e.name} username={e.username} id={e.id} fav={childPropsFav}/>))}
      </CardsContainer>
    </main>
  )
}

export default Home