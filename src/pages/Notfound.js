import { Link } from 'react-router-dom';

const Notfound = () => {
  return (
    <div>
      This page doesn't exist. Go to{' '}
      <Link to='/'>
        <span className='home'>home</span>.
      </Link>
    </div>
  );
};

export { Notfound };
