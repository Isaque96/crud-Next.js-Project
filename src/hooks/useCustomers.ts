import { useEffect, useState } from "react";
import Customer from "../core/Customer";
import CustomerCollection from "../backend/db/CustomerCollection";
import CustomerRepository from "../core/CustomerRepository";
import useTableOrFormulary from "./useTableOrFormulary";

export default function useCustomers() {  
  const repo: CustomerRepository = new CustomerCollection();

  const { visibleTable, visibleFormulary, showFormulary, showTable } = useTableOrFormulary();

  const [customer, setCustomer] = useState<Customer>(Customer.empty());
  const [customers, setCustomers] = useState<Customer[]>([]);
  
  useEffect(getAll, []);

  function getAll() {
    repo.getAll().then(customers => {
      setCustomers(customers);
      showTable();
    })
  }

  function selectedCustomer(customer: Customer) {
    setCustomer(customer);
    showFormulary();
  }

  async function deletedCustomer(customer: Customer) {
    await repo.delete(customer);
    getAll();
  }

  function newCustomer() {
    setCustomer(Customer.empty());
    showFormulary();
  }
  
  async function saveCustomer(customer: Customer) {
    await repo.save(customer);
    getAll();
  }

  return {
    customer,
    customers,
    saveCustomer,
    selectedCustomer,
    newCustomer,
    deletedCustomer,
    getAll,
    visibleTable,
    visibleFormulary,
    showTable,
    showFormulary
  }
}