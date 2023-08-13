import '../styles/SignUp.css';
import { useNavigate } from 'react-router-dom';

export default function SignUp() {
  const navigate = useNavigate();

  return (
    <>
      <form action='/' method='POST' className='sign-up'>
        <div className='container'>
          <div className='sign-up-content'>
            <i
              onClick={() => {
                navigate(-1);
              }}
              className='fa-solid fa-xmark exit-login'
            ></i>
            <h3>Sign Up</h3>

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

              <button type='submit'>Sign up</button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
