import React from 'react';
import { BsTrash } from 'react-icons/bs';
import { GrEdit } from 'react-icons/gr';

export default function Todo({ todo, toggleComplete, handleDelete, handleEdit }) {
  const [newTitle, setNewTitle] = React.useState(todo.title);
  const [newSubtitle, setNewSubtitle] = React.useState(todo.subtitle);

  const handleChangeTitle = (e) => {
    e.preventDefault();
    if (todo.completed === true) {
      setNewTitle(todo.title);
    } else {
      todo.title = '';
      setNewTitle(e.target.value);
    }
  };

  const handleChangeSubtitle = (e) => {
    e.preventDefault();
    if (todo.completed === true) {
      setNewSubtitle(todo.subtitle);
    } else {
      todo.subtitle = '';
      setNewSubtitle(e.target.value);
    }
  };
  return (
    <div className='todo'>
      <div className='todo__inputs'>
        <div>
          <input
            style={{ textDecoration: todo.completed && 'line-through' }}
            type='text'
            value={todo.title === '' ? newTitle : todo.title}
            className='list'
            onChange={handleChangeTitle}
          />
        </div>
        <div>
          <input
            style={{ textDecoration: todo.completed && 'line-through' }}
            type='text'
            value={todo.subtitle === '' ? newSubtitle : todo.subtitle}
            className='list'
            onChange={handleChangeSubtitle}
          />
        </div>
      </div>
      <div className='todo__actions'>
        <input type='checkbox' className='pointer' checked={todo.completed} onChange={() => toggleComplete(todo)} />
        <button className='button-edit' onClick={() => handleEdit(todo, newTitle, newSubtitle)}>
          <GrEdit className='icons' />
        </button>
        <button className='button-delete' onClick={() => handleDelete(todo.id)}>
          <BsTrash className='icons' />
        </button>
      </div>
    </div>
  );
}
