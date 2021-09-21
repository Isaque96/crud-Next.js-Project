import Customer from "../core/Customer";

interface TableProps {
  customers: Customer[];
}

export default function Table(props: TableProps) {
  function renderHeader() {
    return (
      <tr>
        <th className="text-left p-4">Código</th>
        <th className="text-left p-4">Nome</th>
        <th className="text-left p-4">Idade</th>
      </tr>
    )
  }

  function renderData() {
    return props.customers?.map((customer, i) => {
      return (
        <tr key={customer.id} className={`${i % 2 === 0 ? 'bg-purple-200' : 'bg-purple-100'}`}>
          <td className="text-left p-4">{customer.id}</td>
          <td className="text-left p-4">{customer.name}</td>
          <td className="text-left p-4">{customer.age}</td>
        </tr>
      )
    })
  }

  return (
    <table className="w-full rounded-xl overflow-hidden">
      <thead className="text-gray-100 bg-gradient-to-r from-purple-400 to-purple-700">
        {renderHeader()}
      </thead>
      <tbody>
        {renderData()}
      </tbody>
    </table>
  )
}