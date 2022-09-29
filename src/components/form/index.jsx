import { useForm} from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Container,Antecipacao } from "../../pages/Home/style";
import { ReactNode } from "react";

const Form = () =>{

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
const {register,formState:{errors}} = useForm({resolver:yupResolver(formSchema)});

    return(
        <div>
            <Container>
                <Antecipacao>
                    <h2>Simule sua Antecipação</h2>
                    <form {...ReactNode}>
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
            </Container>
            
        
        </div>
    
    )


}
export default Form