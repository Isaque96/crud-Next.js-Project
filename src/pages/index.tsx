import { useState } from "react";
import Layout from "../components/Layout";
import Table from "../components/Table";
import Formulary from "../components/Formulary";
import Button from "../components/Button";
import Customer from "../core/Customer";

export default function Home() {
  const [customer, setCustomer] = useState<Customer>(Customer.empty());
  const [visible, setVisible] = useState<'table' | 'formulary'>('table');

  const customers = [
    new Customer('Isaque', 25, '1'),
    new Customer('Isabela', 19, '2'),
    new Customer('Maurício', 54, '3'),
    new Customer('Elisana', 51, '4'),
    new Customer('Arlete', 84, '5')
  ]

  function selectedCustomer(customer: Customer) {
    setCustomer(customer);
    setVisible('formulary');
  }

  function deletedCustomer(customer: Customer) {
    console.log(`Excluir: ${customer.name}`);
  }

  function newCustomer() {
    setCustomer(Customer.empty());
    setVisible('formulary');
  }
  
  function saveCustomer(customer: Customer) {
    console.log(customer);
    setVisible('table');
  }
  
  return (
    <div className={`
      flex justify-center items-center h-screen bg-gradient-to-r from-blue-500 to-purple-500 text-white
    `}>
      <Layout title="Cadastro Simples">
        {visible === 'table' ? (
          <>
            <div className="flex justify-end">
              <Button color="green" className="mb-4" onClick={newCustomer}>Novo Cliente</Button>
            </div>
            <Table customers={customers} selectedCustomer={selectedCustomer} deletedCustomer={deletedCustomer}></Table>
          </>
        ) : (
          <Formulary customer={customer} changedCustomer={saveCustomer} cancelled={() => setVisible('table')}></Formulary>
        )}
      </Layout>
    </div>
  )
}
