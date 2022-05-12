import React from 'react';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

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
      <input
        style={{ textDecoration: todo.completed && 'line-through' }}
        type='text'
        value={todo.title === '' ? newTitle : todo.title}
        className='list'
        onChange={handleChangeTitle}
      />
      <input
        style={{ textDecoration: todo.completed && 'line-through' }}
        type='text'
        value={todo.subtitle === '' ? newSubtitle : todo.subtitle}
        className='list'
        onChange={handleChangeSubtitle}
      />
      <div>
        <button className='button-complete' onClick={() => toggleComplete(todo)}>
          <CheckCircleIcon id='i' />
        </button>
        <button className='button-edit' onClick={() => handleEdit(todo, newTitle, newSubtitle)}>
          <EditIcon id='i' />
        </button>
        <button className='button-delete' onClick={() => handleDelete(todo.id)}>
          <DeleteIcon id='i' />
        </button>
      </div>
    </div>
  );
}
