const About = () => {
  return (
    <section className="max-w-4xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        About Us
      </h1>
      <p className="text-gray-700 text-lg leading-7 mb-4">
        Welcome to our store! This project demonstrates a modern eCommerce web
        app built with <strong>ReactJS</strong> and styled using{" "}
        <strong>TailwindCSS</strong>. It features API-based dynamic content,
        search filtering, top-rated product views, and loading shimmer effects.
      </p>
      <p className="text-gray-700 text-lg leading-7 mb-4">
        We aim to provide an optimized and fast browsing experience through
        modular components like <code>ProductCard</code>,{" "}
        <code>ShimmerCard</code>, and React hooks for state management and data
        fetching.
      </p>
      <p className="text-gray-700 text-lg leading-7">
        Feel free to explore the products and test all functionalities — this
        app is fully responsive and built with performance in mind.
      </p>
    </section>
  );
};

export default About;
