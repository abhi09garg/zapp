import { Home, ImagePlus, User, LogIn, LogOut, LayoutGrid } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { to: '/', icon: Home },
  { to: '/feed', icon: LayoutGrid },
  { to: '/upload', icon: ImagePlus },
  { to: '/profile', icon: User },
  { to: '/login', icon: LogIn },
];

export default function Navbar() {
  const { pathname } = useLocation();

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-md flex justify-around items-center h-16 z-50">
      {navItems.map(({ to, icon: Icon }) => (
        <Link key={to} to={to} className={`text-blue-600 ${pathname === to ? 'font-bold' : ''}`}>
          <Icon className="h-6 w-6" />
        </Link>
      ))}
    </nav>
  );
}
