import { useState } from 'react';
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";

const Index = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

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
