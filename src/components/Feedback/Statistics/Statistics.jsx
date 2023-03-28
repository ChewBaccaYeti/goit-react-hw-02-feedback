import PropTypes from 'prop-types';
import { Div, Text } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <Div>
      <Text>Good:{good}</Text>
      <Text>Neutral:{neutral}</Text>
      <Text>Bad:{bad}</Text>
      <Text>Total:{total()}</Text>
      <Text>Positive feedback:{positivePercentage()}%</Text>
    </Div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.func.isRequired,
  positivePercentage: PropTypes.func.isRequired,
};
