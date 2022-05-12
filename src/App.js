import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import { Signup } from './pages/Signup';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Layout } from './components/Layout';
import { Notfound } from './pages/Notfound';

import './App.css';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='signup' element={<Signup />} />
            <Route path='login' element={<Login />} />
            <Route path='*' element={<Notfound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
    // const { documents: todos } = useCollection('todos');
    // const [visible, setVisible] = React.useState(5);

    // const handleEdit = async (todo, title, subtitle) => {
    //   await updateDoc(doc(colRef, todo.id), { title, subtitle });
    // };
    // const toggleComplete = async (todo) => {
    //   await updateDoc(doc(colRef, todo.id), { completed: !todo.completed });
    // };
    // const handleDelete = async (id) => {
    //   await deleteDoc(doc(colRef, id));
    // };

    // const showMoreItems = () => {
    //   setVisible((prevState) => prevState + 5);
    // };

    // return (
    //   <div className='App'>
    //     <div>
    //       <Title />
    //     </div>
    //     <div>
    //       <AddTodo />
    //     </div>
    //     <div className='todo_container'>
    //       {todos &&
    //         todos
    //           .slice(0, visible)
    //           .map((todo) => <Todo key={todo.id} todo={todo} toggleComplete={toggleComplete} handleDelete={handleDelete} handleEdit={handleEdit} />)}
    //     </div>
    //     <div className='load_button'>
    //       <button className='load' onClick={showMoreItems}>
    //         Load more
    //       </button>
    //     </div>
    //   </div>
  );
}
export default App;
