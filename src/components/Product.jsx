import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import ProductShimmer from "./ProductShimmer";


const Product = () => {

    const { id } = useParams();
    const [productData, setProductData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProduct = async () => {
          setLoading(true);
          try {
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            const json = await response.json();
            console.log(json);
            setProductData(json);
          } catch (error) {
            console.error("Failed to fetch products:", error);
          } finally {
            setLoading(false);
          }
        };
    
        fetchProduct();
      }, [id]);

    if (!productData) {
      return <ProductShimmer/> ;
    }

  return (
    <>
      <div className="flex justify-center items-center min-h-[60vh] bg-gray-50 py-8">
        <div className="relative flex flex-col gap-4 px-6 pt-6 pb-8 border-2 border-slate-200 w-full max-w-md bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 group overflow-hidden">
          <div className="absolute top-4 right-4 bg-blue-500 text-white text-xs font-bold px-4 py-1 rounded-full shadow-md z-10">
            ${productData.price}
          </div>
          <div className="absolute top-4 left-4 bg-gray-200 text-gray-700 text-xs px-3 py-1 rounded-full z-10">
            {productData.category}
          </div>
          <div className="w-full h-64 flex items-center justify-center overflow-hidden rounded-xl bg-gray-50">
            <img
              src={productData.image}
              alt={productData.title}
              className="object-contain w-full h-full transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <h2
            className="text-2xl font-semibold text-gray-900 mt-2 truncate"
            title={productData.title}
          >
            {productData.title}
          </h2>
          <p className="text-gray-600 text-base line-clamp-4 min-h-[4em]">
            {productData.description}
          </p>
          <div className="flex items-center gap-3 mt-2">
            <span className="flex items-center gap-1 text-yellow-500 font-semibold">
              <span className="inline" > {productData.rating?.rate}</span>
            </span>
            <span className="text-gray-500 text-sm">
              ({productData.rating?.count} reviews)
            </span>
          </div>
          <button className="mt-4 flex items-center justify-center gap-2 px-5 py-2 bg-blue-500 text-white rounded-lg font-medium text-base hover:bg-blue-600 transition-colors">
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
};

export default Product;
