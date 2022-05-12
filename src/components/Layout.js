import { NavLink, Outlet } from 'react-router-dom';
import { useLogout } from '../hooks/useLogout';

const Layout = () => {
  const { logout } = useLogout();
  return (
    <>
      <nav>
        <h1>My Todo List</h1>
        <ul>
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
