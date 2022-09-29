import { useContext } from "react";
import { Link } from "react-router-dom";
import Form from "../../components/form";
import Answer from "../../components/answer";
import { ValuesContext } from "../../Providers/forms";
import { AdjustHome,Links } from "./style";

const Tiemout = () => {
  const { postTimeout } = useContext(ValuesContext);

  return (
    <>
      <AdjustHome>
        <Form submitValue={postTimeout} />
        <Answer />
      </AdjustHome>
      <Links>
        <Link to="/">Home</Link>
        <Link to="/delay">Delay</Link>
        <Link to="/error">Error</Link>
      </Links>
    </>
  );
};

export default Tiemout;