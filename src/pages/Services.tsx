
import Navbar from "@/components/Navbar";

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-grow flex items-center justify-center">
        <div className="text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900">Our Services</h1>
          <p className="mt-4 text-lg text-gray-500">
            This is the services page of your website.
          </p>
        </div>
      </main>
    </div>
  );
};

export default Services;
