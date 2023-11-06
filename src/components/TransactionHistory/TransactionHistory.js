import PropTypes from "prop-types";
import css from "./TransactionHistory.module.css";

const TransactionHistory = ({ items }) => {
  return (
    <table className={css["transaction-history"]}>
      <thead>
        <tr>
          <th className={css.title}>Type</th>
          <th className={css.title}>Amount</th>
          <th className={css.title}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.length > 0 &&
          items.map(({ id, type, amount, currency }) => (
            <tr key={id}>
              <td className={css.data}>{type}</td>
              <td className={css.data}>{amount}</td>
              <td className={css.data}>{currency}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;

TransactionHistory.propTypes = {
  items: PropTypes.array.isRequired,
};
