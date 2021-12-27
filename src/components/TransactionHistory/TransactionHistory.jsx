import { Table,Title,Data } from "./TransactionHistory.styled";

const TransactionHistory = ({ items }) => (
  <Table>
    <thead>
      <tr>
        <Title>Type</Title>
        <Title>Amount</Title>
        <Title>Currency</Title>
      </tr>
    </thead>

    <tbody>
      {items.map(item => (
        <tr key={item.id}>
          <Data>{item.type}</Data>
          <Data>{item.amount}</Data>
          <Data>{item.currency}</Data>
        </tr>
      ))}
    </tbody>
  </Table>
);
export default TransactionHistory;
