import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { Link } from "react-router-dom";

const Mercury = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-primary text-primary-foreground p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Mercury</h1>
        <div className="flex items-center space-x-4">
          <Link to="/app">
            <Button variant="outline">Back to App</Button>
          </Link>
          <ThemeToggle />
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mb-6">Mercury: The Swift Planet</h2>
        <img src="/placeholder.svg" alt="Mercury" className="mx-auto object-cover w-full h-[400px] rounded-lg mb-6" />
        <p className="mb-4">
          Mercury is the smallest planet in our solar system and the closest to the Sun. It's a rocky world with a heavily cratered surface, resembling Earth's Moon.
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>Diameter: 4,879 km</li>
          <li>Orbit: 88 Earth days</li>
          <li>Day length: 59 Earth days</li>
          <li>Surface temperature: -180°C to 430°C</li>
        </ul>
        <p>
          Despite its proximity to the Sun, Mercury has ice in its polar craters, shielded from the intense heat by permanent shadows.
        </p>
      </main>
    </div>
  );
};

export default Mercury;
