import React, {useContext, useState} from "react";
import { Navigate } from "react-router-dom";
import { CardInfoContainer, StyledButton, StyledImg, DivAlert } from "../styles/CardStyle";
import { ContextGlobal } from "./utils/global.context";

const Card = ({ name, username, id, fav, remove}) => {
  const {state} = useContext(ContextGlobal)
  const [navigate, setNavigate] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const bColor = state.theme === "LIGTH"? "#2d2d30" : "white";
  const alert = <DivAlert><p>Dentist {name} added to fav</p></DivAlert>
  
  const addFav = ()=>{
    setShowAlert(true);
    setTimeout(() => {setShowAlert(false);},2000);
    // Aqui iria la logica para agregar la Card en el localStorage'
    if(!fav.favs.includes(id))
      fav.setFavs(prev => [ ...prev, id]);
  }

  const removeFav = () =>{
    const newFavs = fav.favs.filter((e)=> e !== id);
    fav.setFavs(newFavs);

  }

  const showThisButton = () => {
    if(remove){
      return <StyledButton bColor={remove} onClick={removeFav}>Remove</StyledButton>
    }else{
      return <StyledButton bColor="#007acc" onClick={addFav}>Add fav</StyledButton>
    }
  }

  if(navigate){
    return <Navigate to={"/dentist/"+id}/>;
  }


  return (
    <CardInfoContainer colors={{bColor, remove}}>
        {/* En cada card deberan mostrar en name - username y el id */}
      <StyledImg onClick={()=>{setNavigate(true)}} src="./images/doctor.jpg" alt="" />
      <p onClick={()=>{setNavigate(true)}}>{name}</p>
      <p onClick={()=>{setNavigate(true)}}>{username}</p>
        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        {showThisButton()}
      {showAlert && alert}
    </CardInfoContainer>
  );
};

export default Card;
