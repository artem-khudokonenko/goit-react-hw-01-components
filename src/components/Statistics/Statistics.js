import { ItemList, List, Section, TitleStat } from "./Statistics.styled";
import PropTypes from 'prop-types';

export const Statistics = ({ title, stats }) => {
  return (
    <Section>
      <TitleStat>{title}</TitleStat>
      <List>
        {stats.map(stat => (
          <ItemList key={stat.id}>
            <span>{stat.label}</span>
            <span>{stat.percentage}%</span>
          </ItemList>
        ))}
      </List>
    </Section>
  );
};
Statistics.propTypes={
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.object)

}

