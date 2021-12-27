import PropTypes from 'prop-types'
import { StatisticsCard, Title, StatList, Item } from "./Statistics.styled";
const Statistics = ({ title, stats }) => (
  <StatisticsCard>
    {title && <Title>{title}</Title>}
    <StatList>
      {stats.map(({id, label, percentage }) => (
        <Item key={id}>
          <span>{label}</span>
          <span>{percentage}%</span>
        </Item>
      ))}
    </StatList>
  </StatisticsCard>
);

export default Statistics;

Statistics.propTypes = {
 
  stats: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired
  }).isRequired).isRequired
}