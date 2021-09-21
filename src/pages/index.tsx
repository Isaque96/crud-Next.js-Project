import Layout from "../components/Layout";
import Table from "../components/Table";
import Customer from "../core/Customer";

export default function Home() {
  const customers = [
    new Customer('Isaque', 25, '1'),
    new Customer('Isabela', 19, '2'),
    new Customer('Maurício', 54, '3'),
    new Customer('Elisana', 51, '4'),
    new Customer('Arlete', 84, '5')
  ]

  return (
    <div className={`
      flex justify-center items-center h-screen bg-gradient-to-r from-blue-500 to-purple-500 text-white
    `}>
      <Layout title="Cadastro Simples">
        <Table customers={customers}></Table>
      </Layout>
    </div>
  )
}
