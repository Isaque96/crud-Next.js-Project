import { useState } from "react";
import Layout from "../components/Layout";
import Table from "../components/Table";
import Formulary from "../components/Formulary";
import Button from "../components/Button";
import Customer from "../core/Customer";

export default function Home() {
  const customers = [
    new Customer('Isaque', 25, '1'),
    new Customer('Isabela', 19, '2'),
    new Customer('Maurício', 54, '3'),
    new Customer('Elisana', 51, '4'),
    new Customer('Arlete', 84, '5')
  ]

  function selectedCustomer(customer: Customer) {
    console.log(customer.name)
  }

  function deletedCustomer(customer: Customer) {
    console.log(`Excluir: ${customer.name}`)
  }

  function saveCustomer(customer: Customer) {
    console.log(customer);
  }

  const [visible, setVisible] = useState<'table' | 'formulary'>('table');

  return (
    <div className={`
      flex justify-center items-center h-screen bg-gradient-to-r from-blue-500 to-purple-500 text-white
    `}>
      <Layout title="Cadastro Simples">
        {visible === 'table' ? (
          <>
            <div className="flex justify-end">
              <Button color="green" className="mb-4" onClick={() => setVisible('formulary')}>Novo Cliente</Button>
            </div>
            <Table customers={customers} selectedCustomer={selectedCustomer} deletedCustomer={deletedCustomer}></Table>
          </>
        ) : (
          <Formulary customer={customers[0]} changedCustomer={saveCustomer} cancelled={() => setVisible('table')}></Formulary>
        )}
      </Layout>
    </div>
  )
}
