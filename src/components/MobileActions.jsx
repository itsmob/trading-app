import '../styles/MobileActions.css';
import { Link } from 'react-router-dom';

export default function MobileActions() {
  return (
    <>
      <nav className='mobile-actions'>
        <div className='container'>
          <ul className='mobile-actions-content'>
            <li>
              <Link to='post'>
                <i className='fa-solid fa-bullhorn'></i>
              </Link>
            </li>
            <li>
              <Link to='/'>
                <i className='fa-solid fa-house'></i>
              </Link>
            </li>
            <li>
              <Link to='offers'>
                <i className='fa-solid fa-magnifying-glass'></i>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
