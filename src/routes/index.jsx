import Antecipacao from "../Antecipacao";
import { Route, Switch } from "react-router";

function Routes() {

  return (
    <Switch>
      <Route exact path="/">
        <Antecipacao/>
      </Route>
    </Switch>
  );
}

export default Routes;
