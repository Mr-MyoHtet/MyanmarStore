import React, { useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faShoppingCart,
  faShoppingBasket,
} from "@fortawesome/free-solid-svg-icons";

export default function ProductDetails() {
  const location = useLocation();
  const product = location.state?.product;
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center dark:text-normalbg">
        Product not found
      </div>
    );
  }

  return (
    <div className="min-h-screen dark:text-normalbg">
      <div className="max-w-6xl mx-auto px-6 py-16">

        {/* TWO COLUMN LAYOUT — UDEMY STYLE */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

          {/* LEFT: IMAGE (NOT CENTERED) */}
          <div>
            <div className="border rounded-md p-4 inline-block dark:text-normalbg">
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-[280px] h-[280px] object-contain"
              />
            </div>
          </div>

          {/* RIGHT: DETAILS */}
          <div className="max-w-sm space-y-4 dark:text-normalbg">

            {/* Back link aligned to top */}
            <Link
              to="/home"
              className="flex items-center text-sm text-gray-500 hover:text-gray-800 dark:text-normalbg"
            >
              <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
              Back to All Products
            </Link>

            <h1 className="text-xl font-semibold text-gray-900 dark:text-normalbg">
              {product.name}
            </h1>

            <p className="text-sm text-gray-500  dark:text-normalbg">
              {product.description}
            </p>

            <div className="text-lg font-semibold text-gray-900  dark:text-normalbg">
              ${product.price}
            </div>

            {/* Quantity */}
            <div className="flex items-center gap-2 dark:text-normalbg">
              <span className="text-sm text-gray-600 dark:text-normalbg">Qty:</span>
              <input
                type="number"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(+e.target.value || 1)}
                className="w-14 border rounded px-2 py-1 text-sm text-center dark:text-normalbg"
              />
            </div>

            {/* Buttons */}
            <div className="flex flex-col gap-3 pt-4">
              <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-md text-sm font-medium flex items-center justify-center gap-2">
                Add to Cart
                <FontAwesomeIcon icon={faShoppingCart} />
              </button>

              <button
                onClick={() => navigate("/cart")}
                className="w-full bg-indigo-100 hover:bg-indigo-200 text-indigo-700 py-2 rounded-md text-sm font-medium flex items-center justify-center gap-2"
              >
                View Cart
                <FontAwesomeIcon icon={faShoppingBasket} />
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}