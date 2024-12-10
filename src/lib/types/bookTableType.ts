// lib/types/bookTableType.ts

import { Timestamp } from "firebase/firestore";

export type BookTable = {
    id?: string;
    user_id: string;
    is_verified: boolean;
    table_number?: number;
    table_floor: number;
    price: number;
    date: Timestamp;
    booked_at: Timestamp;
};