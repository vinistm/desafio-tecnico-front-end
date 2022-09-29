import { useContext } from "react";
import { ValuesContext } from "../../Providers/forms";
import { Link } from "react-router-dom";
import Form from "../../components/form";
import Answer from "../../components/answer";
import { AdjustHome,Links } from "./style";




const Delay = () =>{
  
    const {testDelay} = useContext(ValuesContext);

    return(
       <>
       <AdjustHome>

        <Form submitValue={testDelay}/>
        <Answer/>
       </AdjustHome>
       <Links>
            <Link to="/">Home</Link>
            <Link to="/error">Error</Link>
            <Link to="/timeout">Timeout</Link>

      </Links>
       </>
       
    )


}
export default Delay;