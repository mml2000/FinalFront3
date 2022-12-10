import React, {useState} from "react";
import { FormStyled,PStyled, InputButtonFormStyled } from "../styles/FormStyle";


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const [datos, setDatos] = useState({
    name: null,
    email: null
  })
  const [showMessage, setShowMessage] = useState(false)
  const [message, setMessage] = useState()

  //Las frases estaban en español y por ende así las dejé
  const handleValidation =(e)=>{
    e.preventDefault()
    const mailFormat = (/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
    if(mailFormat.test(datos.email) && datos.name.length > 5){
      setMessage(<PStyled>Gracias {datos.name}, te contactaremos cuando antes vía mail</PStyled>)
      setShowMessage(true)
    }else{
      setMessage(<PStyled>Por favor verifique su información nuevamente</PStyled>)
      setShowMessage(true)
    }
  }


  return (
    <div  data-testid="form-1">
      <FormStyled onSubmit={handleValidation} >
        <label  htmlFor="name" >Full Name:</label>
        <input onChange={(e)=>setDatos({...datos, name: e.target.value})} type="text" placeholder="Full name" id="name"/>
        <label htmlFor="email">Email:</label>
        <input type="text" placeholder="Email" id="email" onChange={(e) => setDatos({...datos, email: e.target.value})} />
        <InputButtonFormStyled type="submit" value="Send"/>
      </FormStyled>
      {showMessage && message }
    </div>
  );
};

export default Form;
