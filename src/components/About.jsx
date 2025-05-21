import { useEffect, useState } from "react";
import ShimmerCard from "./ShimmerCard"; // Reusing the shimmer loading component

const About = () => {
  const [loading, setLoading] = useState(true);

  // Simulate loading state for the about page
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // 1.5s delay like product loading

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex flex-wrap justify-center gap-4 p-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <ShimmerCard key={index} />
        ))}
      </div>
    );
  }

  return (
    <section className="max-w-4xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        About Us
      </h1>
      <p className="text-gray-700 text-lg leading-7 mb-4">
        Welcome to our store! This project demonstrates a modern eCommerce web app built with <strong>ReactJS</strong> and styled using <strong>TailwindCSS</strong>.
        It features API-based dynamic content, search filtering, top-rated product views, and loading shimmer effects.
      </p>
      <p className="text-gray-700 text-lg leading-7 mb-4">
        We aim to provide an optimized and fast browsing experience through modular components like <code>ProductCard</code>, <code>ShimmerCard</code>, and React hooks for state management and data fetching.
      </p>
      <p className="text-gray-700 text-lg leading-7">
        Feel free to explore the products and test all functionalities — this app is fully responsive and built with performance in mind.
      </p>
    </section>
  );
};

export default About;
