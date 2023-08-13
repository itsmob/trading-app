import '../styles/NavBar.css';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <>
      <header className='header'>
        <div className='container'>
          <div className='nav-bar-content'>
            <div
              className='logo'
              onClick={() => {
                window.scrollTo(0, 0);
              }}
            >
              <Link to='/'>
                <h3>Swap money</h3>
              </Link>
            </div>
            <nav className='header__nav'>
              <div className='mobile-menu'>
                <Link to='trades'>
                  <i className='fa-solid fa-money-bill-transfer'></i>
                </Link>
                <Link to='login'>
                  <i className='fa-solid fa-user'></i>
                </Link>
              </div>
              <ul className='not-mobile'>
                <li>
                  <Link to='offers'>
                    <i className='fa-solid fa-magnifying-glass'></i>
                  </Link>
                </li>
                <li>
                  <Link to='post'>
                    <i className='fa-solid fa-bullhorn'></i>
                  </Link>
                </li>
                <li>
                  <Link to='trades'>
                    <i className='fa-solid fa-money-bill-transfer'></i>
                  </Link>
                </li>
                <li>
                  <Link to='login'>
                    <i className='fa-solid fa-user'></i>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}
