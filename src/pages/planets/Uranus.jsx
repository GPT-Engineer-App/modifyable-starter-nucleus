import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { Link } from "react-router-dom";

const Uranus = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-primary text-primary-foreground p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Uranus</h1>
        <div className="flex items-center space-x-4">
          <Link to="/app">
            <Button variant="outline">Back to App</Button>
          </Link>
          <ThemeToggle />
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mb-6">Uranus: The Sideways Planet</h2>
        <img src="/placeholder.svg" alt="Uranus" className="mx-auto object-cover w-full h-[400px] rounded-lg mb-6" />
        <p className="mb-4">
          Uranus is an ice giant, composed mainly of icy materials such as water, ammonia, and methane. It's unique among the planets as it rotates on its side, likely due to a collision early in its history.
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>Diameter: 50,724 km</li>
          <li>Orbit: 84 Earth years</li>
          <li>Day length: 17 hours 14 minutes</li>
          <li>Temperature (cloud top): -224°C</li>
        </ul>
        <p>
          Uranus has a faint ring system and numerous small moons. Its blue-green color comes from methane in its atmosphere, which absorbs red light and reflects blue-green light.
        </p>
      </main>
    </div>
  );
};

export default Uranus;
