import '../styles/Root.css';
import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';
import MobileActions from '../components/MobileActions';

export default function Root() {
  return (
    <>
      <div className='layout'>
        <NavBar />
        <main className='main'>
          <div className='container'>
            <Outlet />
          </div>
        </main>
        <MobileActions />
      </div>
    </>
  );
}
