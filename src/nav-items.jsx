import { Home, Layout, Sun, Globe2 } from "lucide-react";
import Index from "./pages/Index.jsx";
import LandingPage from "./pages/LandingPage.jsx";
import Mercury from "./pages/planets/Mercury.jsx";
import Venus from "./pages/planets/Venus.jsx";
import Earth from "./pages/planets/Earth.jsx";
import Mars from "./pages/planets/Mars.jsx";
import Jupiter from "./pages/planets/Jupiter.jsx";
import Saturn from "./pages/planets/Saturn.jsx";
import Uranus from "./pages/planets/Uranus.jsx";
import Neptune from "./pages/planets/Neptune.jsx";

/**
 * Central place for defining the navigation items. Used for navigation components and routing.
 */
export const navItems = [
  {
    title: "Landing",
    to: "/",
    icon: <Layout className="h-4 w-4" />,
    page: <LandingPage />,
  },
  {
    title: "App",
    to: "/app",
    icon: <Home className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Mercury",
    to: "/planets/mercury",
    icon: <Globe2 className="h-4 w-4" />,
    page: <Mercury />,
  },
  {
    title: "Venus",
    to: "/planets/venus",
    icon: <Globe2 className="h-4 w-4" />,
    page: <Venus />,
  },
  {
    title: "Earth",
    to: "/planets/earth",
    icon: <Globe2 className="h-4 w-4" />,
    page: <Earth />,
  },
  {
    title: "Mars",
    to: "/planets/mars",
    icon: <Globe2 className="h-4 w-4" />,
    page: <Mars />,
  },
  {
    title: "Jupiter",
    to: "/planets/jupiter",
    icon: <Globe2 className="h-4 w-4" />,
    page: <Jupiter />,
  },
  {
    title: "Saturn",
    to: "/planets/saturn",
    icon: <Globe2 className="h-4 w-4" />,
    page: <Saturn />,
  },
  {
    title: "Uranus",
    to: "/planets/uranus",
    icon: <Globe2 className="h-4 w-4" />,
    page: <Uranus />,
  },
  {
    title: "Neptune",
    to: "/planets/neptune",
    icon: <Globe2 className="h-4 w-4" />,
    page: <Neptune />,
  },
];
