
import { useState,useEffect,createContext } from "react";
import {api} from "../../services/api"

export const ValuesContext = createContext({});

export const ValuesProvider = ({children}) =>{
    const [ values,setValues] = useState([]);
    const postValue = (data) => {
        api
            .post("",data)
            .then((response)=>{
                console.log(response.data);
                setValues(response.data);
            })
            .catch((err)=>{
                console.log(err)
            })
    };
    useEffect(() =>{
        postValue()
    },[])

    return(
        <ValuesContext.Provider value={{values,postValue}}>
            {children}
        </ValuesContext.Provider>
    )
}
