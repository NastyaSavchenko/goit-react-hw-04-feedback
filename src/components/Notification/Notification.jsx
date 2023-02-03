import PT from 'prop-types';

import css from '../Statistics/statistics.module.css';

const Notification = ({ message }) => {
  return <p className={css.title}>{message}</p>;
};

Notification.propTypes = {
  message: PT.string.isRequired,
};

export default Notification;
