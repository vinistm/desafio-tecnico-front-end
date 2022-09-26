import api from "../services/api"
import * as yup from "yup";
import { useHistory } from "react-router-dom"
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

function Antecipacao(){
    const schema = yup.object().shape({
        amount:yup.number().required("campo obrigatório!"),
        installments:yup.number().max(12,'Maximo de 12 parcelas').required("campo obrigatório!"),
        mdr:yup.number().required("campo obrigatório!"),
        days:yup.number("Dias 30,60,90")
    });
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({
        resolver: yupResolver(schema),
      });
    const history = useHistory();
    const onSubmitFunction =({amount,installments,mdr,days}) =>{
        const valores = {amount, installments,mdr,days};
        api.post("",valores)
        .then((_)=>{
            return history.push("")
        })
        .catch()
    
        console.log(valores)
        
    }
    return(
        <div>
            <form onSubmit={handleSubmit(onSubmitFunction)}>
                <h2>Simule sua Antecipação</h2>
                <input
                {...register("amount")}
                amount="amount"
                label="Valor"
                placeholder="valor da venda"
                error={errors.amount?.message}/>
                 <input
                {...register("installments")}
                installments="installments"
                label="parcelas"
                placeholder="numero de parcelas"
                error={errors.installments?.message}/>
                <input
                {...register("mdr")}
                mdr="mdr"
                label="percentual"
                placeholder="informe o percentual"
                error={errors.mdr?.message}/>
                <input
                {...register("days")}
                days="days"
                label="dias"
                placeholder="informe os dias"
                error={errors.days?.message}/>
                <button type ="submit">Calcular</button>
            </form>
        </div>
    )
}

export default Antecipacao