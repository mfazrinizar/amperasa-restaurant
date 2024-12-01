// lib/queries/dashboardQueries.ts

import { collection, addDoc, query, where, getDocs, deleteDoc, doc, serverTimestamp, Timestamp } from "firebase/firestore";
import { db } from "@/lib/firebase"; // Adjust the import path to your Firebase setup
import { BookTable } from "@/lib/types/bookTableType";

export const createBookTable = async (userId: string, floorNumber: number, price: number): Promise<boolean> => {
  try {
    const bookTableData: BookTable = {
      user_id: userId,
      is_verified: false,
      table_floor: floorNumber,
      price: price,
      date: serverTimestamp() as Timestamp,
    };

    await addDoc(collection(db, "book_table"), bookTableData);
    console.log("Table booked successfully");
    return true;
  } catch (error) {
    console.error("Error booking table: ", error);
    return false;
  }
};

export const getUserBookTables = async (userId: string): Promise<BookTable[]> => {
  try {
    const q = query(collection(db, "book_table"), where("user_id", "==", userId));
    const querySnapshot = await getDocs(q);
    const bookTables: BookTable[] = [];
    querySnapshot.forEach((doc) => {
      bookTables.push({ id: doc.id, ...doc.data() } as BookTable);
    });
    return bookTables;
  } catch (error) {
    console.error("Error getting book tables: ", error);
    return [];
  }
};

export const cancelBookTable = async (userId: string, bookTableId: string): Promise<boolean> => {
  try {
    const bookTableDoc = doc(db, "book_table", bookTableId);
    await deleteDoc(bookTableDoc);
    console.log("Book table cancelled successfully");
    return true;
  } catch (error) {
    console.error("Error cancelling book table: ", error);
    return false;
  }
};