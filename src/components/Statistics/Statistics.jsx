import { StatisticsCard, Title, StatList, Item } from "./Statistics.styled";

const Statistics = ({ title, stats }) => (
  <StatisticsCard>
    {title && <Title>{title}</Title>}
    <StatList>
      {stats.map(stat => (
        <Item key={stat.id}>
          <span>{stat.label}</span>
          <span>{stat.percentage}%</span>
        </Item>
      ))}
    </StatList>
  </StatisticsCard>
);

export default Statistics;
