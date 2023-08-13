import '../styles/LogIn.css';
import { useNavigate } from 'react-router-dom';

export default function LogIn() {
  const navigate = useNavigate();

  return (
    <>
      <form action='/' method='POST' className='log-in'>
        <div className='container'>
          <div className='log-in-content'>
            <i
              onClick={() => {
                navigate(-1);
              }}
              className='fa-solid fa-xmark exit-login'
            ></i>
            <h3>Login</h3>

            <div className='form'>
              <span className='suggestion'></span>

              <div className='inputs'>
                <label>
                  <span>User</span>
                  <input type='text' name='user' id='user' />
                </label>

                <label>
                  <span>Password</span>
                  <input type='password' name='password' id='password' />
                </label>
              </div>

              <button type='submit'>Log in</button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
