import { useContext } from "react";
import { Link } from "react-router-dom";
import Form from "../../components/form";
import Answer from "../../components/answer";
import { ValuesContext } from "../../Providers/forms";
import { AdjustHome,Links } from "./style";


const Error = () => {
  const { postError } = useContext(ValuesContext);

  return (
    <>
      <AdjustHome>
        <Form submitValue={postError} />
        <Answer />
      </AdjustHome>
      <Links>
            <Link to="/">Home</Link>
            <Link to="/delay">Delay</Link>
            <Link to="/timeout">Timeout</Link>

      </Links>
      
    </>
  );
};

export default Error;