import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { Link } from "react-router-dom";

const Mars = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-primary text-primary-foreground p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Mars</h1>
        <div className="flex items-center space-x-4">
          <Link to="/app">
            <Button variant="outline">Back to App</Button>
          </Link>
          <ThemeToggle />
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mb-6">Mars: The Red Planet</h2>
        <img src="/placeholder.svg" alt="Mars" className="mx-auto object-cover w-full h-[400px] rounded-lg mb-6" />
        <p className="mb-4">
          Mars is often called the Red Planet due to its reddish appearance caused by iron oxide (rust) on its surface. It's a cold, desert world with a thin atmosphere.
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>Diameter: 6,779 km</li>
          <li>Orbit: 687 Earth days</li>
          <li>Day length: 24 hours 37 minutes</li>
          <li>Surface temperature: -140°C to 20°C</li>
        </ul>
        <p>
          Mars has the largest volcano in the solar system, Olympus Mons, and a canyon system, Valles Marineris, that dwarfs Earth's Grand Canyon. Evidence suggests that Mars once had flowing water on its surface.
        </p>
      </main>
    </div>
  );
};

export default Mars;
