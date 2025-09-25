import React from 'react';

function Carts() {
  const products = [
    {
      id: 1,
      name: 'Wireless Headphones',
      image: 'https://via.placeholder.com/120x90.png?text=Headphones',
      price: 20.0,
      discountPercent: 10,
    },
    {
      id: 2,
      name: 'Smart Watch',
      image: 'https://via.placeholder.com/120x90.png?text=Smart+Watch',
      price: 34.0,
      discountPercent: 15,
    },
    {
      id: 3,
      name: 'Portable Speaker',
      image: 'https://via.placeholder.com/120x90.png?text=Speaker',
      price: 15.0,
      discountPercent: 5,
    },
    {
      id: 4,
      name: 'Speaker',
      image: 'https://via.placeholder.com/120x90.png?text=Speaker',
      price: 150.0,
      discountPercent: 15,
    },
    {
      id: 5,
      name: 'iphone',
      image: 'https://via.placeholder.com/120x90.png?text=Speaker',
      price: 101.0,
      discountPercent: 12,
    },
  ];


  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((p) => {
          return (
            <div
              className="p-4 bg-white rounded-md shadow-sm flex flex-col items-center"
            >
              <img
                src={p.image}
                alt={p.name}
                className="w-32 h-24 object-cover rounded mb-3"
              />
              <h3 className="font-semibold text-lg text-center">{p.name}</h3>
              <p className="text-gray-600 mt-1">${(p.price)}</p>
              <p className="text-green-600 text-sm">{p.discountPercent}% Off</p>
              <button
                onClick={() => alert(`${p.name} added to cart`)}
                className="mt-3 px-4 py-2 bg-blue-600 text-white rounded"
              >
                Add to Cart
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Carts;
