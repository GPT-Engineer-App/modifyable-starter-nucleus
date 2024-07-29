import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { Link } from "react-router-dom";

const Index = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-primary text-primary-foreground p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">My App</h1>
        <div className="flex items-center space-x-4">
          <Link to="/">
            <Button variant="outline">Back to Landing</Button>
          </Link>
          <ThemeToggle />
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mb-6">Welcome to the Main App</h2>
        <p className="mb-6 text-lg">This is where you can start building your application's main features.</p>
        <div className="mb-8 p-6 bg-card rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Sample Counter</h3>
          <p className="mb-4">Count: {count}</p>
          <div className="space-x-4">
            <Button onClick={() => setCount(count + 1)}>Increment</Button>
            <Button onClick={() => setCount(count - 1)} variant="outline">Decrement</Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
