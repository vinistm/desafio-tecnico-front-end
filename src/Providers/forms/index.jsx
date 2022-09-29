
import { useState,createContext } from "react";
import {api,apiDelay} from "../../services/api"

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
    // const testTimeout = (data) => {
    //     api
    //         .post("?internalError",data)
    //         .then((response)=>{
    //             console.log(response.data);
    //             setTimeout(response.data);
    //         })
    //         .catch((err)=>{
    //             console.log(err)
    //         })
    // };
    // const testErrorAfk = (data) => {
    //     api
    //         .post("?timeout",data)
    //         .then((response)=>{
    //             console.log(response.data);
    //             setErrorAfk(response.data);
    //         })
    //         .catch((err)=>{
    //             console.log(err)
    //         })
    // };
    const testDelay = (data) => {
        apiDelay
            .post("",data)
            .then((response)=>{
                console.log(response.data);
                setValues(response.data);
            })
            .catch((err)=>{
                console.log(err)
            })
    };

    return(
        <ValuesContext.Provider value={{values,postValue,testDelay}}>
            {children}
        </ValuesContext.Provider>
    )
}
