import Home from "../pages/Home";
import Delay from "../pages/Delay";
import { Route,Switch} from "react-router-dom";

function AppRoutes() {

  return (
    <Switch>
      <Route exact path="/">
        <Home/>
      </Route>
      <Route exact path="/delay">
        <Delay/>
      </Route>
    </Switch>
 
  );
 
}

export default AppRoutes;
