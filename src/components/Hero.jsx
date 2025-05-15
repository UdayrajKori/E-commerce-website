import ProductCard from "./ProductCard";
import { ProductData } from "../utils/ProductData";
import { useEffect, useState } from "react";
import ShimmerCard from "./ShimmerCard";

const Hero = () => {
  const [products, setProducts] = useState(ProductData); // holds filtered or all products
  const [searchQuery, setSearchQuery] = useState(""); // holds search input
  const [loading, setLoading] = useState(true); // this is for the shimmercode

  // here is the data fetching part starting...

  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = async () => {
    setLoading(true); // show shimmer
    const data = await fetch("https://fakestoreapi.com/products");
    const json = await data.json();
    setProducts(json);
    setLoading(false); // hide shimmer
  };

  // here is the data fetching part ending...

  // Function to filter top-rated products
  const topRatedProductsData = () => {
    const filtered = ProductData.filter((product) => product.rating.rate >= 4);
    setProducts(filtered);
  };

  // Function to handle search
  const handleSearch = () => {
    const filtered = ProductData.filter((product) =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setProducts(filtered);
  };

  if (loading) {
    return (
      <div className="flex flex-wrap justify-center gap-4 p-4">
        {Array.from({ length: 8 }).map((_, index) => (
          <ShimmerCard key={index} />
        ))}
      </div>
    );
  }

  return (
    <>
      <header></header>
      <section className="flex flex-col gap-4 px-2 py-2">
        <div className="flex gap-3 px-7 py-4">
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-80 px-4 py-2 pr-10 text-sm text-gray-700 bg-white border border-gray-800 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
              placeholder="Search..."
            />
            <button
              onClick={handleSearch}
              className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Search
            </button>
          </div>

          <button
            className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            onClick={topRatedProductsData}
          >
            Top Rated Products
          </button>
        </div>

        <div className="flex flex-wrap justify-center gap-4 product-items">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              title={product.title}
              description={product.description}
              price={product.price}
              image={product.image}
              category={product.category}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Hero;
