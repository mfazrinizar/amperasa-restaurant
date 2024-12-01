// hooks/useMustBeLoggedInNotification.ts
import { useEffect, useState } from 'react';
import { toast } from 'sonner';


export default function useMustBeLoggedInNotification() {
  const [shouldShowNotification, setShouldShowNotification] = useState(false);

  useEffect(() => {
    if (shouldShowNotification) {
      toast.warning('Dear guest, you must be logged in to book a table.');
      setShouldShowNotification(false); // Reset the state
    }
  }, [shouldShowNotification]);

  const showLoginNotification = () => {
    setShouldShowNotification(true);
  };

  return { showLoginNotification };
}