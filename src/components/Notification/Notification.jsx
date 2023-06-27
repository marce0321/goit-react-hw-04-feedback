import PropTypes from 'prop-types';
import css from '../Notification/Notification.module.css';

export const Notification = ({message}) => (
    <p className={css.notification__text}>
        {message}
    </p>
)

Notification.propTypes = {
    message: PropTypes.string.isRequired
}