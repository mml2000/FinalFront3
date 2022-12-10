import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { ContextGlobal } from '../Components/utils/global.context';
import { TableStyled, TdStyled, ThStyled } from '../styles/DetailStyle';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {

  const { id } = useParams()
  const {dentist, state} = useContext(ContextGlobal)
  // Dado que la información sobre el dentista en el endpoint especifico y general es la misma, decidí simplemente filtrar la 
  // información que ya está guardada en memoria
  const data = dentist.dataDentists.filter((e) => id.includes(e.id));

  const colorsTheme = state.theme === "LIGTH"? {bColor: "#3e3e42", color: "white"} : {bColor: "#dddddd", color: "black"};

  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  return (
    <>
      <h1>Detail Dentist {id} </h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {(
        <TableStyled>
          <tr>
            <ThStyled>Name</ThStyled>
            <ThStyled>Email</ThStyled>
            <ThStyled>Phone</ThStyled>
            <ThStyled>Website</ThStyled>
          </tr>
          <tr>
            <TdStyled theme={{...colorsTheme}}>{data[0].name}</TdStyled>
            <TdStyled theme={{...colorsTheme}}>{data[0].email}</TdStyled>
            <TdStyled theme={{...colorsTheme}}>{data[0].phone}</TdStyled>
            <TdStyled theme={{...colorsTheme}}>{data[0].website}</TdStyled>
          </tr>
        </TableStyled>
      )}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    </>
  )
}

export default Detail