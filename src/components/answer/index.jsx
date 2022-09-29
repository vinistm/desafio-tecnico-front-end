import { useContext } from "react";
import { ValuesContext } from "../../Providers/forms";
import { Receber } from "./style";
const Answer =()=>{
    const {values} = useContext(ValuesContext);
    
    return(
    <Receber>
        <h2>VOCÊ RECEBERÁ:  </h2>
        <p>Amanhã: R$ {values.length === 0 ? "0,00":Number(values[1]).toFixed(2)}</p>
        <p>Em 15 dias: R$ {values.length === 0 ? "0,00":Number(values[15]).toFixed(2)}</p>
        <p>Em 30 dias: R$ {values.length === 0 ? "0,00":Number(values[30]).toFixed(2)}</p>
        <p>Em 90 dias: R$ {values.length === 0 ? "0,00":Number(values[90]).toFixed(2)}</p>

    </Receber>
    )
}
export default Answer