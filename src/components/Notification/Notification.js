import s from './Notification.module.css';
import PropTypes from 'prop-types';

function Notification({ message }) {
  return <>{message && <div className={s.message}>{message}</div>}</>;
}

Notification.propTypes = {
  message: PropTypes.string,
};

export default Notification;
