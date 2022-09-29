
import { useState,createContext } from "react";
import {api} from "../../services/api"
import { toast } from "react-toastify";

export const ValuesContext = createContext({});

export const ValuesProvider = ({children}) =>{
    const [ values,setValues] = useState([]);

    const postValue = (data) => {
        api
            .post("",data)
            .then((response)=>{
                setValues(response.data);
                toast.success('Calculo efetuado !', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    });
            })
            .catch((err) => {
                toast.error("Ocorreu um erro na requisição!", {
                  position: "top-right",
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                });
              });
            };
    const testDelay = (data) => {
        api
            .post("?delay=5000",data)
            .then((response)=>{
                setValues(response.data);
                toast.success('Calculo efetuado !', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    });
            })
            .catch((err) => {
                toast.error("Ocorreu um erro na requisição!", {
                  position: "top-right",
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                });
              });
    };
    const postError = (data) => {
        api
          .post("?internalError", data)
          .then((response) => {
            setValues(response.data);
          })
          .catch((err) => {
            toast.error("Erro na requisição!", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
          });
    }
          
    const postTimeout = (data) => {
        api
            .post("?timeout", data)
            .then((response) => {
            setValues(response.data);
            })
            .catch((err) => {
            toast.error("Verifique a sua conexão com a internet", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            });
        };

    return(
        <ValuesContext.Provider 
        value={{values,postValue,testDelay,postError,postTimeout}}>
            {children}
        </ValuesContext.Provider>
    )
}
