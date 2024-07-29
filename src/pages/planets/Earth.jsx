import Navbar from "@/components/Navbar";

const Earth = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mb-6">Earth: Our Home Planet</h2>
        <img src="/placeholder.svg" alt="Earth" className="mx-auto object-cover w-full h-[400px] rounded-lg mb-6" />
        <p className="mb-4">
          Earth is the third planet from the Sun and the only known planet to support life. It's characterized by its blue oceans, green landscapes, and white clouds.
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>Diameter: 12,742 km</li>
          <li>Orbit: 365.25 days</li>
          <li>Day length: 24 hours</li>
          <li>Surface temperature: -88°C to 58°C</li>
        </ul>
        <p>
          Earth's unique features, including its atmosphere, magnetic field, and abundance of liquid water, make it perfectly suited for the diverse life forms that call it home.
        </p>
      </main>
    </div>
  );
};

export default Earth;
