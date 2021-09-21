import Layout from "../components/Layout";
import Table from "../components/Table";
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

  return (
    <div className={`
      flex justify-center items-center h-screen bg-gradient-to-r from-blue-500 to-purple-500 text-white
    `}>
      <Layout title="Cadastro Simples">
        <div className="flex justify-end">
          <Button cor="green" className="mb-4">Novo Cliente</Button>
        </div>
        <Table customers={customers} selectedCustomer={selectedCustomer} deletedCustomer={deletedCustomer}></Table>
      </Layout>
    </div>
  )
}
