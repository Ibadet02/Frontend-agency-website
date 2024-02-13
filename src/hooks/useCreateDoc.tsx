import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase/config";
import { useState } from "react";

const useCreateDoc = (collectionName: string) => {
    const [isLoading, setIsLoading] = useState(false);
  const createDoc = async (docData: any) => {
    setIsLoading(true);
    try {
      const docRef = await addDoc(collection(db, collectionName), docData);
      const docWithDataId = { ...docData, id: docRef.id };
      return docWithDataId;
    } catch (error) {
      console.error("Error adding document: ", error);
    } finally {
        setIsLoading(false);
        console.log("Document added successfully");
    }
  };
  return { createDoc, isLoading};
};

export default useCreateDoc;
