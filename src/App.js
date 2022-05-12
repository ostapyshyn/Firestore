import React from 'react';

import { colRef } from './firebase/config';
import { doc, updateDoc, deleteDoc } from 'firebase/firestore';

import Todo from './components/Todo';
import Title from './components/Title';
import AddTodo from './components/AddTodo';

import { useCollection } from './hook/useCollection';

import './App.css';

function App() {
  const { documents: todos } = useCollection('todos');
  const [visible, setVisible] = React.useState(5);

  const handleEdit = async (todo, title) => {
    await updateDoc(doc(colRef, todo.id), { title: title });
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
        <Title />
      </div>
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
export default App;
