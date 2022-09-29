import { useContext } from "react";
import { ValuesContext } from "../../Providers/forms";
const Answer =()=>{
    const {values} = useContext(ValuesContext);
    console.log(values)
    return(
    <div>
        <h2>VOCÊ RECEBERÁ:  </h2>
        <p>Amanhã: R$ {values[1]},00</p>
        <p>Em 15 dias: R$ {values[15]},00</p>
        <p>Em 30 dias: R$ {values[30]},00</p>
        <p>Em 90 dias: R$ {values[90]},00</p>

    </div>
    )
}
export default Answer