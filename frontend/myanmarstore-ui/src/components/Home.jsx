import PageHeading from "./PageHeading"
import ProductListings from "./ProductListings"
import apiClient from "../api/apiClient"
import { useState,useEffect } from "react"
export default function Home(){

    const [products,setProduct] = useState([]);
    const [loading,setLoading] = useState([true]);
    const [error,setError] = useState(null);

    //  // Run once when the component mounts
  // Mounting is the process of creating and adding the component into DOM
    useEffect(()=>{
        fetchProduct()
    },[]);

    const fetchProduct = async() => {
        try{
            setLoading(true);
            const response = await apiClient.get("/products");
            setProduct(response.data);
        }catch(error){
             setError(
                error.response?.data?.message ||
                "Failed to fetch products. Please try again."
      );
        }
        finally{
             setLoading(false);
        }
    }

    if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <span className="text-xl font-semibold">Loading products...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center">
        <span className="text-xl text-red-500">Error: {error}</span>
      </div>
    );
  }
    return (

        <div className="home-container">
            <PageHeading>
            Myanmar food offers a variety of traditional dishes such as Mohinga 
            (fish noodle soup), Shan Noodles, and Tea Leaf Salad. Meals often 
            include rice, curries, soups, and fresh vegetables, making Myanmar cuisine
             healthy, colorful, and full of unique taste.</PageHeading>
             <ProductListings products={products} />
        </div>
        
    )
}