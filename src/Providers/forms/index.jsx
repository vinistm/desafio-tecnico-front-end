
import { useState,useEffect,createContext } from "react";
import {api} from "../../services/api"

export const ValuesContext = createContext({});

export const ValuesProvider = ({children}) =>{
    const [ values,setValues] = useState([]);
    const [timeOut,setTimeout] = useState(false);
    const [errorAfk,setErrorAfk] = useState(false);
    const [delay,setDelay] = useState(false);
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
    const testTimeout = (data) => {
        api
            .post("?internalError",data)
            .then((response)=>{
                console.log(response.data);
                setTimeout(response.data);
            })
            .catch((err)=>{
                console.log(err)
            })
    };
    const testErrorAfk = (data) => {
        api
            .post("?timeout",data)
            .then((response)=>{
                console.log(response.data);
                setErrorAfk(response.data);
            })
            .catch((err)=>{
                console.log(err)
            })
    };
    const testDelay = (data) => {
        api
            .post("?delay=5000",data)
            .then((response)=>{
                console.log(response.data);
                setDelay(response.data);
            })
            .catch((err)=>{
                console.log(err)
            })
    };
    useEffect(() =>{
        postValue()
    },[])

    return(
        <ValuesContext.Provider value={{values,postValue,timeOut,testTimeout,errorAfk,testErrorAfk,delay,testDelay}}>
            {children}
        </ValuesContext.Provider>
    )
}
