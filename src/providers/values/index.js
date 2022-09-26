import { createContext } from "react";
import { useState } from "react";
import { toast } from "react-toastify";



export const AntecipacaoContext = createContext()

export const antecipacaoProvider = ({ children }) => {

  const [antecipacao, setAntecipacao] = useState([])

  const addAntecipacao = (productItem) => {

    setAntecipacao([...antecipacao,productItem])

    toast.success('Produto adicionado !', {
      position: "top-center",
      autoClose: 1200,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      });

  }


  return (
    <AntecipacaoContext.Provider antecipacao ={{ antecipacao, setAntecipacao, addAntecipacao}}>
      {children}
    </AntecipacaoContext.Provider>
  )
}