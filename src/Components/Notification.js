import { useContext } from 'react';
import { NotificationManager } from 'react-notifications';

const useNotifications = () => {
  const showNotification = (message, type) => {
    switch (type) {
      case 'success':
        NotificationManager.success(message);
        break;
      case 'warning':
        NotificationManager.warning(message);
        break;
      case 'error':
        NotificationManager.error(message);
        break;
      default:
        NotificationManager.info(message);
        break;
    }
  };

  return { showNotification };
};

export default useNotifications;
