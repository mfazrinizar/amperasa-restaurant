// hooks/useToastSuccessOrFailed.ts
import { useEffect } from 'react';
import { toast } from 'sonner';

const useToastSuccessOrFailed = (isSuccessful: boolean | null, message: string, reset: () => void) => {
  useEffect(() => {
    if (isSuccessful !== null) {
      if (isSuccessful) {
        toast.success(message);
      } else {
        toast.error(message);
      }
      reset();
    }
  }, [isSuccessful, message, reset]);
};

export default useToastSuccessOrFailed;