import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import Table from "../components/Table";
import Formulary from "../components/Formulary";
import Button from "../components/Button";
import Customer from "../core/Customer";
import CustomerRepository from "../core/CustomerRepository";
import CustomerCollection from "../backend/db/CustomerCollection";

export default function Home() {
  const repo: CustomerRepository = new CustomerCollection();

  const [customer, setCustomer] = useState<Customer>(Customer.empty());
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [visible, setVisible] = useState<'table' | 'formulary'>('table');

  useEffect(getAll, []);

  function getAll() {
    repo.getAll().then(customers => {
      setCustomers(customers);
      setVisible('table');
    })
  }

  function selectedCustomer(customer: Customer) {
    setCustomer(customer);
    setVisible('formulary');
  }

  async function deletedCustomer(customer: Customer) {
    await repo.delete(customer);
    getAll();
  }

  function newCustomer() {
    setCustomer(Customer.empty());
    setVisible('formulary');
  }
  
  async function saveCustomer(customer: Customer) {
    await repo.save(customer);
    getAll();
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
