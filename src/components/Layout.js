import React, { useContext } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { useLogout } from '../hooks/useLogout';
import { SelectContext } from '../context/SelectContext';

const Layout = () => {
  const { logout } = useLogout();
  const { setSelect } = useContext(SelectContext);

  const updateFilter = (e) => {
    console.log('updating select', e.target.value);
    setSelect(e.target.value);
  };

  return (
    <>
      <nav>
        <h1>My Todo List</h1>
        <ul>
          <li>
            <select onChange={(e) => updateFilter(e)}>
              <option value='all'>All</option>
              <option value='incomplete'>Incomplete</option>
              <option value='complete'>Completed</option>
            </select>
          </li>
          <li>
            <NavLink to='/'>Home</NavLink>
          </li>
          <li>
            <NavLink to='/login'>Login</NavLink>
          </li>
          <li>
            <NavLink to='/signup'>Signup</NavLink>
          </li>
          <li onClick={logout}>Logout</li>
        </ul>
      </nav>

      <main className='container'>
        <Outlet />
      </main>
    </>
  );
};

export { Layout };
