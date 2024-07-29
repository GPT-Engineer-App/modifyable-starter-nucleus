import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { Link } from "react-router-dom";

const Saturn = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-primary text-primary-foreground p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Saturn</h1>
        <div className="flex items-center space-x-4">
          <Link to="/app">
            <Button variant="outline">Back to App</Button>
          </Link>
          <ThemeToggle />
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mb-6">Saturn: The Ringed Planet</h2>
        <img src="/placeholder.svg" alt="Saturn" className="mx-auto object-cover w-full h-[400px] rounded-lg mb-6" />
        <p className="mb-4">
          Saturn is known for its spectacular ring system, which is made up of ice particles, rocky debris, and dust. It's another gas giant, composed mainly of hydrogen and helium.
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>Diameter: 116,460 km</li>
          <li>Orbit: 29.5 Earth years</li>
          <li>Day length: 10 hours 42 minutes</li>
          <li>Temperature (cloud top): -178°C</li>
        </ul>
        <p>
          Saturn has a complex system of moons, with Titan being the largest and the only moon in the solar system with a substantial atmosphere. The planet's low density means it could float in water if there were an ocean large enough.
        </p>
      </main>
    </div>
  );
};

export default Saturn;
