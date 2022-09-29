import { useContext } from "react";
import { ValuesContext } from "../../Providers/forms";
import { Link } from "react-router-dom";
import Form from "../../components/form";
import Answer from "../../components/answer";
import { useForm } from "react-hook-form";


const Home = () =>{
  
    const {postValue} = useContext(ValuesContext);
    const {handleSubmit} = useForm();

    return(
       <>
        <Form onChange={handleSubmit(postValue)}/>
        <Answer/>
         <Link to="/delay">Delay</Link>

       </>
       
    )


}
export default Home;