import PropTypes from 'prop-types';
import { NotificationStyled } from './Notification.styled';

export const Notification = ({ message }) => {
  return <NotificationStyled>{message}</NotificationStyled>;
};

Notification.prototypes = {
  message: PropTypes.string.isRequired,
};
