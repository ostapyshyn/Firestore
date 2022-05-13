import React from 'react';
import { db } from '../firebase/config';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { useAuthContext } from '../hooks/useAuthContext';

export default function AddTodo() {
  const [title, setTitle] = React.useState('');
  const [subtitle, setSubtitle] = React.useState('');
  const { user } = useAuthContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title !== '' && subtitle !== '') {
      await addDoc(collection(db, 'todos'), {
        title,
        subtitle,
        uid: user.uid,
        completed: false,
        createdAt: serverTimestamp(),
      });
      setTitle('');
      setSubtitle('');
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className='input_container'>
        <input type='text' placeholder='Enter title...' value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div className='input_container'>
        <input type='text' placeholder='Enter subtitle...' value={subtitle} onChange={(e) => setSubtitle(e.target.value)} />
      </div>
      <div className='btn_container'>
        <button>Add</button>
      </div>
    </form>
  );
}
