import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import PageBackground from './PageBackground';

export default function SiteLayout() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <PageBackground variant="hero" />
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
