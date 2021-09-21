import Customer from "../core/Customer";

interface TableProps {
  customers: Customer[];
}

export default function Table(props: TableProps) {
  function renderHeader() {
    return (
      <tr>
        <th>Código</th>
        <th>Nome</th>
        <th>Idade</th>
      </tr>
    )
  }

  function renderData() {
    return props.customers?.map((customer, i) => {
      return (
        <tr key={customer.id}>
          <td>{customer.id}</td>
          <td>{customer.name}</td>
          <td>{customer.age}</td>
        </tr>
      )
    })
  }

  return (
    <table>
      <thead>
        {renderHeader()}
      </thead>
      <tbody>
        {renderData()}
      </tbody>
    </table>
  )
}