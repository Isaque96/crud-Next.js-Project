import { useState } from "react";
import Customer from "../core/Customer";
import Input from "./Input";
import Button from "./Button";

interface FormularyProps {
 customer: Customer;
}

export default function Formulary(props: FormularyProps) {
  const id = props.customer?.id;
  const [name, setName] = useState(props.customer?.name ?? '');
  const [age, setAge] = useState(props.customer?.age ?? 0);
  
  return (
    <div>
      { id ? (
        <Input readOnly text="Código" value={id} className="mb-4" />
      ) : false }
      <Input text="Nome" value={name} changedValue={setName} className="mb-4" />
      <Input text="Idade" type="number" value={age} changedValue={setAge} />
      <div className="flex justify-end mt-7">
        <Button color="blue" className="mr-2">
          {id ? 'Alterar' : 'Salvar'}
        </Button>
        <Button color="gray">
          Cancelar
        </Button>
      </div>
    </div>
  )
}