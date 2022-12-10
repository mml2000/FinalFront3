import { createContext, useReducer, useEffect, useState } from "react";

export const initialState = {theme: "LIGTH", bColor: '#1b1d1e', color: 'white'}

export const ContextGlobal = createContext(undefined);

const reducerFunction = (state, {theme}) => {
  switch (theme) {
    case "DARK":
      return {
        theme: 'LIGTH',
        bColor: '#1b1d1e',
        color: 'white'
      }
    case 'LIGTH':
      return {
        theme: 'DARK',
        bColor: 'white',
        color: 'black'
      }
      default:
        return state;
  }
}


export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  const [state, dispatch] = useReducer(reducerFunction, initialState);
  const [loader, setLoader] = useState(true);
  const [dataDentists, setDataDentists] = useState(null);

  const fetchDataDentists = () =>{
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setDataDentists(data))
      .finally(() => {
        setLoader(false)
      })
  }

  useEffect(() => {
    fetchDataDentists();
    }, []);

  const store ={
    state,
    dispatch,
    dentist: {
      dataDentists,
      fetchDataDentists,
      loader
    }
  };

  return (
    <ContextGlobal.Provider value={store}>
      <div style={{ backgroundColor: `${state.bColor}`, width: "100%", height: '100%', minHeight: "100vh", color:`${state.color}`}}>
        {children}
      </div>
    </ContextGlobal.Provider>
  )
};
