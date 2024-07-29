import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { Link } from "react-router-dom";
import { Menu, X } from 'lucide-react';
import { navItems } from "@/nav-items";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-primary text-primary-foreground p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">My App</Link>
        <div className="hidden md:flex items-center space-x-4">
          {navItems.map((item) => (
            <Link key={item.to} to={item.to}>
              <Button variant="ghost">{item.title}</Button>
            </Link>
          ))}
          <ThemeToggle />
        </div>
        <div className="md:hidden">
          <Button variant="ghost" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden mt-4">
          {navItems.map((item) => (
            <Link key={item.to} to={item.to} className="block py-2">
              <Button variant="ghost" className="w-full text-left" onClick={() => setIsOpen(false)}>
                {item.title}
              </Button>
            </Link>
          ))}
          <div className="py-2">
            <ThemeToggle />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
