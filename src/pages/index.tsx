import Layout from "../components/Layout";
import Table from "../components/Table";
import Formulary from "../components/Formulary";
import Button from "../components/Button";
import useCustomers from "../hooks/useCustomers";

export default function Home() {
  const { 
    customer, 
    customers, 
    saveCustomer, 
    selectedCustomer, 
    newCustomer, 
    deletedCustomer,
    visibleTable,
    showTable
  } = useCustomers();

  return (
    <div className={`
      flex justify-center items-center h-screen bg-gradient-to-r from-blue-500 to-purple-500 text-white
    `}>
      <Layout title="Cadastro Simples">
        {visibleTable ? (
          <>
            <div className="flex justify-end">
              <Button color="green" className="mb-4" onClick={newCustomer}>Novo Cliente</Button>
            </div>
            <Table customers={customers} selectedCustomer={selectedCustomer} deletedCustomer={deletedCustomer}></Table>
          </>
        ) : (
          <Formulary customer={customer} changedCustomer={saveCustomer} cancelled={showTable}></Formulary>
        )}
      </Layout>
    </div>
  )
}
