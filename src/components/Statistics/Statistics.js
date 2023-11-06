import PropTypes from "prop-types";
import css from "./Statistics.module.css";

const Statistics = ({ title, stats }) => {
  const getRandomHexColor = () => {
    const color = `#${(0x1000000 + Math.random() * 0xffffff)
      .toString(16)
      .substr(1, 6)}`;

    return { backgroundColor: color };
  };

  return (
    <section className={css.statistics}>
      {title ? <h2 className={css.title}> {title}</h2> : null}

      <ul className={css["stat-list"]}>
        {stats.map((stat) => (
          <li className={css.item} key={stat.id} style={getRandomHexColor()}>
            <span>{stat.label}</span>
            <span> {stat.percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Statistics;

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
};
