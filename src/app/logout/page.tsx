"use client";

import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { logoutUser } from "@/lib/network/authQueries";
import { toast } from "sonner";
import LoadingSpinner from "@/components/ui/LoadingSpinner";

export default function Page() {
    const router = useRouter();
    const [isLoggingOut, setIsLoggingOut] = useState(true);

    const handleLogout = useCallback(async () => {
        try {
            const loggedOut = await logoutUser();

            if (loggedOut) {
                toast.success("Logged out successfully. Redirecting...");
                router.push("/");
            } else {
                toast.error("Failed to logout. Please try again.");
                router.push("/dashboard");
            }
        } catch (error) {
            toast.error("An error occurred. Please try again.");
            router.push("/dashboard");
        } finally {
            setIsLoggingOut(false);
        }
    }, [router]);

    useEffect(() => {
        handleLogout();
    }, [handleLogout]);

    return (
        <div className="flex items-center justify-center h-screen">
            {isLoggingOut && <LoadingSpinner />}
        </div>
    );
}