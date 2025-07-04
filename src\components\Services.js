import React from 'react';

function Services() {
  return (
    <section className="bg-gray-100 py-20">
      <h2 className="text-3xl font-bold text-gray-900">
        Our Services
      </h2>
      <ul className="flex flex-wrap justify-center">
        <li className="w-full md:w-1/2 xl:w-1/3 p-6">
          <h3 className="text-lg font-bold text-gray-900">
            Nuclear Power Generation
          </h3>
          <p className="text-lg text-gray-600">
            We generate clean energy through our state-of-the-art nuclear power plants.
          </p>
        </li>
        <li className="w-full md:w-1/2 xl:w-1/3 p-6">
          <h3 className="text-lg font-bold text-gray-900">
            Renewable Energy Solutions
          </h3>
          <p className="text-lg text-gray-600">
            We offer innovative renewable energy solutions to reduce carbon footprint.
          </p>
        </li>
        <li className="w-full md:w-1/2 xl:w-1/3 p-6">
          <h3 className="text-lg font-bold text-gray-900">
            Energy Efficiency
          </h3>
          <p className="text-lg text-gray-600">
            We provide energy-efficient solutions to reduce energy consumption.
          </p>
        </li>
      </ul>
    </section>
  );
}

export default Services;