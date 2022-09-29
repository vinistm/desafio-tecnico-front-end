import Home from "../pages/Home";
import Delay from "../pages/Delay";
import Error from "../pages/Error"
import Tiemout from "../pages/Timeout"
import { Route, Routes } from "react-router-dom";

function AppRoutes() {

  return (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/delay" element={<Delay />} />
    <Route path="/error" element={<Error />} />
    <Route path="/timeout" element={<Tiemout />} />
  </Routes>
 
  );
 
}

export default AppRoutes;
