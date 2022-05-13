import { useState, useEffect, useRef } from 'react';

import { db } from '../firebase/config';
import { collection, onSnapshot, orderBy, query, where } from 'firebase/firestore';

export const useCollection = (c, _q) => {
  const [documents, setDocuments] = useState(null);

  const q = useRef(_q).current;

  useEffect(() => {
    let ref = collection(db, c);

    if (q) {
      ref = query(ref, where(...q));
    }

    const endQuery = query(ref, orderBy('title'));

    const unsub = onSnapshot(endQuery, (querySnapshot) => {
      let results = [];
      querySnapshot.forEach((doc) => {
        results.push({ ...doc.data(), id: doc.id });
      });
      console.log(results);
      setDocuments(results);
    });
    return () => unsub();
  }, [c, q]);

  return { documents };
};
