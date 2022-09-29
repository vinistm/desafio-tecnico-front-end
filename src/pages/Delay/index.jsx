import { useContext } from "react";
import { ValuesContext } from "../../Providers/forms";
import { Link } from "react-router-dom";
import Form from "../../components/form";
import Answer from "../../components/answer";





const Delay = () =>{
  
    const {testDelay} = useContext(ValuesContext);

    return(
       <>
        <Form {...testDelay}/>
        <Answer/>
         <Link to="/">Home</Link>
       </>
       
    )


}
export default Delay;