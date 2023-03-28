import PropTypes from 'propTypes';

export const Notifications = ({ message }) => {
  return <h2>{message}</h2>;
};

Notifications.propTypes = {
  message: PropTypes.string.isRequired,
};
