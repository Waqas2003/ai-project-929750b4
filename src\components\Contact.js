import React from 'react';

function Contact() {
  return (
    <section className="bg-white py-20">
      <h2 className="text-3xl font-bold text-gray-900">
        Get in Touch
      </h2>
      <p className="text-lg text-gray-600">
        Contact us for more information or to learn more about our services.
      </p>
      <form className="max-w-md mx-auto p-4 pt-6">
        <input
          type="text"
          placeholder="Name"
          className="w-full p-2 pl-10 text-sm text-gray-700"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 pl-10 text-sm text-gray-700"
        />
        <textarea
          placeholder="Message"
          className="w-full p-2 pl-10 text-sm text-gray-700"
        />
        <button
          type="submit"
          className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}

export default Contact;