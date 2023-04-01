import PropTypes from 'prop-types';

export const Notifications = ({ message }) => {
  return <h2>{message}</h2>;
};

Notifications.propTypes = {
  message: PropTypes.string.isRequired,
};
