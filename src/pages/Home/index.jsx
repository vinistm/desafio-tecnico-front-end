import {  useContext } from "react";
import { ValuesContext } from "../../Providers/forms";
import { Link } from "react-router-dom";
import Form from "../../components/form";
import Answer from "../../components/answer";
import { AdjustHome,Links } from "./style";



const Home = () =>{

    const {postValue} = useContext(ValuesContext);


    return(
    <>
        <AdjustHome>
            
            <Form submitValue={postValue}/>
            <Answer/>
        </AdjustHome>
        <Links>
            <Link to="/delay">Delay</Link>
            <Link to="/timeout">Timeout</Link>
            <Link to="/error">Error</Link>

        </Links>
    </>
    )


}
export default Home;