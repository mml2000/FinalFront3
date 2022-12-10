import {React, useContext } from 'react'
import { Link } from 'react-router-dom'
import { Ul, NavStyled, ButtonStyled, Li} from '../styles/NavStyle'
import { ContextGlobal } from './utils/global.context'
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  const {state, dispatch} = useContext(ContextGlobal);
  const themeRelated = state.theme === "LIGTH"? {bColor:"#3e3e42", color: "white", src: "./images/sol.png"} 
  : {bColor:"#e5e5e5", color: "black", src: "./images/luna.png"};

  

  return (
    <NavStyled bColor={themeRelated.bColor}  data-testid="navbar-1">
      <h1><span style={{color: 'red'}}>D</span>H Odonto</h1>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      <Ul>
      <Li color={themeRelated.color}><Link to="/home">Home</Link></Li>
        <Li color={themeRelated.color}><Link to="/contact">Contact</Link></Li>
        <Li color={themeRelated.color}><Link to="/favs">Favs</Link> </Li>
        <Li color={themeRelated.color}><ButtonStyled onClick={() => dispatch({theme: state.theme}) }><img src={themeRelated.src} /></ButtonStyled></Li>
      </Ul>
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
    </NavStyled>
  )
}

export default Navbar