import { useState } from 'react';
import { useLogin } from '../hooks/useLogin';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../firebase/config';
import { useAuthContext } from '../hooks/useAuthContext';

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { error, login } = useLogin();
  const { dispatch } = useAuthContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((res) => {
        dispatch({ type: 'LOGIN', payload: res.user });
        console.log(res.user.displayName);
        console.log(res.user.email);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <h2>Login with Google</h2>
      <button onClick={signInWithGoogle}>Click me</button>
      <form onSubmit={handleSubmit}>
        <label>
          <span>email:</span>
          <input required type='email' onChange={(e) => setEmail(e.target.value)} value={email} />
        </label>
        <label>
          <span>password:</span>
          <input required type='password' onChange={(e) => setPassword(e.target.value)} value={password} />
        </label>
        <button>log in</button>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
}
