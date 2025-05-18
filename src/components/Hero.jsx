import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import ShimmerCard from "./ShimmerCard";

const Hero = () => {
  const [allProducts, setAllProducts] = useState([]); // full data from API
  const [products, setProducts] = useState([]); // displayed (filtered) products
  const [searchQuery, setSearchQuery] = useState(""); // search input
  const [loading, setLoading] = useState(true); // shimmer loading state

  // Fetch product data from API
  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const json = await response.json();
        setAllProducts(json);
        setProducts(json);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, []);

  // Handle search use allProducts)
  const handleSearch = () => {
    const filtered = allProducts.filter((product) =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setProducts(filtered);
  };

  // Show top-rated products
  const topRatedProductsData = () => {
    const filtered = allProducts.filter((product) => product.rating?.rate >= 4);
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
            onClick={topRatedProductsData}
            className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Top Rated Products
          </button>
        </div>

        <div className="flex flex-wrap justify-center gap-4 product-items">
          {products.length > 0 ? (
            products.map((product) => (
              <ProductCard
                key={product.id}
                title={product.title}
                description={product.description}
                price={product.price}
                image={product.image}
                category={product.category}
              />
            ))
          ) : (
            <p className="text-center text-gray-500">No products found.</p>
          )}
        </div>
      </section>
    </>
  );
};

export default Hero;
