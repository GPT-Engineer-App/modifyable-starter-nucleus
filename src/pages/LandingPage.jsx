import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";

const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow container mx-auto px-4 py-8 flex flex-col items-center justify-center">
        <h2 className="text-4xl font-bold mb-6">Discover Amazing Features</h2>
        <p className="text-xl mb-8 text-center max-w-2xl">
          Experience the power of our innovative app. Boost your productivity and streamline your workflow with our cutting-edge tools.
        </p>
        <Link to="/app">
          <Button size="lg">Get Started</Button>
        </Link>
      </main>

      <footer className="bg-secondary text-secondary-foreground py-4">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 My App. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
