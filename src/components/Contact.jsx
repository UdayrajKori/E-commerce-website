const Contact = () => {
  return (
    <section className="max-w-2xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Contact Us
      </h1>
      <p className="text-gray-700 text-lg mb-6 text-center">
        Have questions or feedback? We'd love to hear from you!
      </p>

      <form className="space-y-5">
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Your name"
          />
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">
            Message
          </label>
          <textarea
            resize="none"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
            rows="5"
            placeholder="Your message..."
          ></textarea>
        </div>

        <button
          type="submit"
          className="px-6 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
