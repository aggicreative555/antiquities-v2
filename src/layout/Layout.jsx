import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

export function Layout() {
  return (
    <div className='flex justify-center align-center flex-col my-10 mx-10'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
