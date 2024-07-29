import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { Link } from "react-router-dom";

const Venus = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-primary text-primary-foreground p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Venus</h1>
        <div className="flex items-center space-x-4">
          <Link to="/app">
            <Button variant="outline">Back to App</Button>
          </Link>
          <ThemeToggle />
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mb-6">Venus: Earth's Evil Twin</h2>
        <img src="/placeholder.svg" alt="Venus" className="mx-auto object-cover w-full h-[400px] rounded-lg mb-6" />
        <p className="mb-4">
          Venus is often called Earth's twin because of their similar size and proximity. However, it's a world of extremes with a toxic atmosphere and scorching surface temperatures.
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>Diameter: 12,104 km</li>
          <li>Orbit: 225 Earth days</li>
          <li>Day length: 243 Earth days (retrograde rotation)</li>
          <li>Surface temperature: 462°C (average)</li>
        </ul>
        <p>
          Venus has a thick atmosphere of carbon dioxide and clouds of sulfuric acid, creating a runaway greenhouse effect that makes it the hottest planet in our solar system.
        </p>
      </main>
    </div>
  );
};

export default Venus;
