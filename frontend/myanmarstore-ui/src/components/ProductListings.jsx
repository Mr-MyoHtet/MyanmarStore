import React, { useState,useMemo } from "react";
import ProductCard from "./ProductCard";
import SearchBox from "./SearchBox";
import Dropdown from "./Dropdown";

const sortList = ["Popularity", "Price Low to High", "Price High to Low"];
export default function ProductListings({ products }) {
  const [searchText,setSearchText] = useState("");
  const [selectedSort,setSelectedSort] = useState("Popularity");

//useMemo to caache the data of dependency
  const  filteredAndSortedProducts = useMemo(()=>{
    if(!Array.isArray(products)){
      return [];
    }
      let filteredProducts= Array.isArray(products)? products.filter((product)=>{
      return product.name.toLowerCase().includes(searchText.toLowerCase())||
      product.description.toLowerCase().includes(searchText.toLowerCase())
  }):[];
    return  filteredProducts.slice().sort((a,b)=>{
      switch(selectedSort){
        case "Price Low to High":
          return parseFloat(a.price)- parseFloat(b.price);
        case "Price High to Low":
          return parseFloat(b.price)- parseFloat(a.price);
        case "Popularity":
          default:
            return parseInt(b.popularity) - parseInt(a.popularity);
      }
  })
  },[products,searchText,selectedSort]);
  
  function handleSearchChange(inputSearch){
    setSearchText(inputSearch);
  }
  function handleSortChange(sortType){
    setSelectedSort(sortType);
  }
  // let filteredAndSortedProducts = Array.isArray(products)? products.filter((product)=>{
  //   return product.name.toLowerCase().includes(searchText.toLowerCase())||
  //          product.description.toLowerCase().includes(searchText.toLowerCase())
  // }):[];
  // switch (selectedSort) {
  //   case "Price Low to High":
  //     filteredAndSortedProducts= filteredAndSortedProducts.sort((a,b)=>parseFloat(a.price)- parseInt(b.price));
  //     break;
  //   case "Price High to Low":
  //     filteredAndSortedProducts= filteredAndSortedProducts.sort((a,b)=>parseFloat(b.price)- parseInt(a.price));
  //     break;
  //   case "Popularity":
  //   break;
  //   default:
  //     filteredAndSortedProducts= filteredAndSortedProducts.sort((a,b)=>parseInt(b.popularity)- parseInt(a.popularity));
  //           break;
  // }
  return(
    <div className="max-w-[1152px] mx-auto">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-12">
        <SearchBox label="Search" placeholder="Search Product" value={searchText} handleSearch={(value)=>handleSearchChange(value)}></SearchBox>
        <Dropdown label="Sort By" options={sortList} value={selectedSort} handleSort={(value)=>handleSortChange(value)}></Dropdown>
      </div>
           <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-6 py-12">
        {filteredAndSortedProducts.length > 0 ? (
          filteredAndSortedProducts.map((product) => (
            <ProductCard key={product.productId} product={product} />
          ))
        ) : (
          <p className="product-listings-empty">No products found</p>
        )}
        </div>
      </div>
  );
}
