import PropTypes from 'prop-types';
import { Table, Title, Data } from './TransactionHistory.styled';

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
      {items.map(({ id, type, amount, currency }) => (
        <tr key={id}>
          <Data>{type}</Data>
          <Data>{amount}</Data>
          <Data>{currency}</Data>
        </tr>
      ))}
    </tbody>
  </Table>
);
export default TransactionHistory;

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};