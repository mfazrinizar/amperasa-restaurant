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
          await new Promise((resolve) => setTimeout(resolve, 1000));

          const response = await fetch('/api/verify-token', {
            credentials: 'include',
          });

          if (response.status === 200) {
            setUser(currentUser);
          } else {
            toast.error("Your session has expired. Please login again.");
            await auth.signOut();
            await removeSession(true);
            setUser(null);
          }
        } catch (error) {
          // console.log("Current cookies:", document.cookie);

          // console.log("Error verifying token cookie: ", error);
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