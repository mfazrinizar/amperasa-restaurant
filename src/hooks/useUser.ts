// hooks/useUser.ts

import { useEffect, useState } from "react";
import { auth } from "@/lib/firebase";
import { User } from "firebase/auth";
import { toast } from "sonner";
import { removeSession } from "@/lib/session";

const useUserNav = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (currentUser) => {
      if (currentUser) {
        try {
          const response = await fetch('/api/verify-token');
          if (response.status === 200) {
            setUser(currentUser);
          } else {
            await auth.signOut();
            await removeSession(true);
            setUser(null);
            toast.error("Your session has expired. Please login again.");
          }
        } catch (error) {
          await auth.signOut();
          setUser(null);
        }
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  return user;
};

export default useUserNav;