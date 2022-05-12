import React from 'react';

import { colRef } from '../firebase/config';
import { doc, updateDoc, deleteDoc } from 'firebase/firestore';

import Todo from '../components/Todo';
import AddTodo from '../components/AddTodo';

import { useCollection } from '../hooks/useCollection';

import '../App.css';

export function Home() {
  const { documents: todos } = useCollection('todos');

  const [visible, setVisible] = React.useState(5);

  const handleEdit = async (todo, title, subtitle) => {
    await updateDoc(doc(colRef, todo.id), { title, subtitle });
  };
  const toggleComplete = async (todo) => {
    await updateDoc(doc(colRef, todo.id), { completed: !todo.completed });
  };
  const handleDelete = async (id) => {
    await deleteDoc(doc(colRef, id));
  };

  const showMoreItems = () => {
    setVisible((prevState) => prevState + 5);
  };

  return (
    <div className='App'>
      <div>
        <AddTodo />
      </div>
      <div className='todo_container'>
        {todos &&
          todos
            .slice(0, visible)
            .map((todo) => <Todo key={todo.id} todo={todo} toggleComplete={toggleComplete} handleDelete={handleDelete} handleEdit={handleEdit} />)}
      </div>
      <div className='load_button'>
        <button className='load' onClick={showMoreItems}>
          Load more
        </button>
      </div>
    </div>
  );
}
export default Home;
