import { useState, useEffect, useRef, useContext } from 'react';
import { SelectContext } from '../context/SelectContext';
import { db } from '../firebase/config';
import { collection, onSnapshot, orderBy, query, where } from 'firebase/firestore';

export const useCollection = (c, _q) => {
  const [documents, setDocuments] = useState(null);
  const { select } = useContext(SelectContext);

  const q = useRef(_q).current;

  useEffect(() => {
    let ref = collection(db, c);

    if (q) {
      ref = query(ref, where(...q));
    }

    let endQuery;
    if (select === 'all') {
      endQuery = query(ref, orderBy('title'));
    } else {
      endQuery = query(ref, orderBy('title'), where('completed', '==', select === 'complete'));
    }

    const unsub = onSnapshot(endQuery, (querySnapshot) => {
      let results = [];
      querySnapshot.forEach((doc) => {
        results.push({ ...doc.data(), id: doc.id });
      });
      console.log(results);
      setDocuments(results);
    });
    return () => unsub();
  }, [c, q, select]);

  return { documents };
};
