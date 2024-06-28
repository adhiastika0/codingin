'use client';

import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { collection, onSnapshot, query } from 'firebase/firestore';
import { db } from '@/firebase/clientApp';

const ChapterContext = createContext();

export const useChapters = () => {
  return useContext(ChapterContext);
};

export const ChapterProvider = ({ children }) => {
  const [chapters, setChapters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const q = query(collection(db, 'chapters'));
    const unsubscribe = onSnapshot(
      q,
      (querySnapshot) => {
        const chaptersArray = [];
        querySnapshot.forEach((doc) => {
          chaptersArray.push({ ...doc.data(), id: doc.id });
        });
        setChapters(chaptersArray);
        setIsLoading(false);
      },
      (error) => {
        setError(error.message);
        setIsLoading(false);
      }
    );

    return () => unsubscribe();
  }, []);

  const contextValue = useMemo(
    () => ({
      chapters,
      isLoading,
      error,
    }),
    [chapters, isLoading, error]
  );

  return (
    <ChapterContext.Provider value={contextValue}>
      {children}
    </ChapterContext.Provider>
  );
};
