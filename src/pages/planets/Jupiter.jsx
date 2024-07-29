import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { Link } from "react-router-dom";

const Jupiter = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-primary text-primary-foreground p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Jupiter</h1>
        <div className="flex items-center space-x-4">
          <Link to="/app">
            <Button variant="outline">Back to App</Button>
          </Link>
          <ThemeToggle />
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mb-6">Jupiter: The Giant Planet</h2>
        <img src="/placeholder.svg" alt="Jupiter" className="mx-auto object-cover w-full h-[400px] rounded-lg mb-6" />
        <p className="mb-4">
          Jupiter is the largest planet in our solar system. It's a gas giant with a Great Red Spot, a storm that has been raging for hundreds of years.
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>Diameter: 139,820 km</li>
          <li>Orbit: 11.9 Earth years</li>
          <li>Day length: 9 hours 56 minutes</li>
          <li>Temperature (cloud top): -145°C</li>
        </ul>
        <p>
          Jupiter has a strong magnetic field and numerous moons, including the four large Galilean moons: Io, Europa, Ganymede, and Callisto. Its rapid rotation causes the planet to bulge at the equator.
        </p>
      </main>
    </div>
  );
};

export default Jupiter;
