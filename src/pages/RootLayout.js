import { Outlet } from 'react-router-dom';

import MainNav from '../components/Ui/MainNav';

function RootLayout() {
  return (
    <>
      <MainNav />
      <main>
        <Outlet />
      </main>
    </>
  );
}