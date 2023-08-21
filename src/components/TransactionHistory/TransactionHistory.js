import { Table, Td, TitelTablet } from "./TransactionHistory.styled";
import PropTypes from 'prop-types';

export const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <thead>
        <tr>
          <TitelTablet>Type</TitelTablet>
          <TitelTablet>Amount</TitelTablet>
          <TitelTablet>Currency</TitelTablet>
        </tr>
      </thead>

      <tbody>
        {items.map(({id,type,amount,currency}) => {
          return (
            <tr key={id}>
              <Td>{type}</Td>
              <td>{amount}</td>
              <td>{currency}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};
TransactionHistory.propTypes={
  items: PropTypes.arrayOf(PropTypes.object),

}