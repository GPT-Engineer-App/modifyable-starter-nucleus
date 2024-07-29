import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { Link } from "react-router-dom";

const Neptune = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-primary text-primary-foreground p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Neptune</h1>
        <div className="flex items-center space-x-4">
          <Link to="/app">
            <Button variant="outline">Back to App</Button>
          </Link>
          <ThemeToggle />
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mb-6">Neptune: The Windy Planet</h2>
        <img src="/placeholder.svg" alt="Neptune" className="mx-auto object-cover w-full h-[400px] rounded-lg mb-6" />
        <p className="mb-4">
          Neptune is the eighth and farthest known planet from the Sun. It's another ice giant, similar in composition to Uranus, with an atmosphere of hydrogen, helium, and methane.
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>Diameter: 49,244 km</li>
          <li>Orbit: 165 Earth years</li>
          <li>Day length: 16 hours 6 minutes</li>
          <li>Temperature (cloud top): -214°C</li>
        </ul>
        <p>
          Neptune is known for its dynamic atmosphere with visible weather patterns. The planet's Great Dark Spot is a storm similar to Jupiter's Great Red Spot. Neptune also has the strongest winds recorded in the solar system, reaching speeds of 2,100 km/h.
        </p>
      </main>
    </div>
  );
};

export default Neptune;
