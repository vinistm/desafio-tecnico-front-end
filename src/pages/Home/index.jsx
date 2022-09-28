import { useContext } from "react";
import { useForm } from "react-hook-form";
import { ValuesContext } from "../../Providers/forms";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Container,Antecipacao,Receber } from "./style";





const Home = () =>{
   


    const formSchema = yup.object().shape({
        amount: yup
          .string()
          .required("Valor obrigatório!"),
        installments: yup
          .string()
          .required("Conteúdo obrigatório")
          .max(12, "Maximo 12 parcelas"),
        mdr: yup
          .string()
          .required("Conteúdo obrigatório")

      });
    const {register,handleSubmit,formState:{errors}} = useForm({resolver:yupResolver(formSchema)});
    const { values,postValue} = useContext(ValuesContext);

    
   
    return(
        <div>
            <Container>
                <Antecipacao>
                    <h2>Simule sua Antecipação</h2>
                    <form onChange={handleSubmit(postValue)}>
                        <label>
                            <p>Informe o valor da venda*</p>
                            <input type="text" name="amount" placeholder="ex: 12000"{...register("amount")}/>
                            <span>{errors.amount && errors.amount.message}</span>
                            
                        </label>
                        <label>
                            <p>Em quantas parcelas *</p>
                        <input type="text" name="installments" placeholder="ex: 4"{...register("installments")}/>
                        <span>{errors.installments && errors.installments.message}</span>
                        </label>
                        <label>
                            <p>Informe o percentual de MDR *</p>
                        <input type="text" name="mdr" placeholder="ex: 3"{...register("mdr")}/>
                        <span>{errors.mdr && errors.mdr.message}</span>
                        </label>
                        

                    </form>
                </Antecipacao>
                <Receber>
                    <h2>VOCÊ RECEBERÁ:  </h2>
                    <p>Amanhã: R$ {values[1]},00</p>
                    <p>Em 15 dias: R$ {values[15]},00</p>
                    <p>Em 30 dias: R$ {values[30]},00</p>
                    <p>Em 90 dias: R$ {values[90]},00</p>

                </Receber>
            </Container>
           
        </div>
       
    )


}
export default Home;