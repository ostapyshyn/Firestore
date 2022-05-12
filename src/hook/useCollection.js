import { useState, useEffect } from 'react';

import { db } from '../firebase/config';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';

export const useCollection = (c) => {
  const [documents, setDocuments] = useState(null);

  useEffect(() => {
    let ref = collection(db, c);
    const q = query(ref, orderBy('title'));

    const unsub = onSnapshot(q, (querySnapshot) => {
      let results = [];
      querySnapshot.forEach((doc) => {
        results.push({ ...doc.data(), id: doc.id });
      });
      console.log(results);
      setDocuments(results);
    });
    return () => unsub();
  }, [c]);

  return { documents };
};
