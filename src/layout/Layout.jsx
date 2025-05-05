import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

export function Layout() {
  return (
    <div className='flex justify-center flex-col'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
