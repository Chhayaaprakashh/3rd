function ProductCard({ name, price, image, inStock }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 w-72 hover:shadow-lg transition">
      <img
        src={image}
        alt={name}
        className="h-40 w-full object-cover rounded-md"
      />

      <h2 className="text-lg font-semibold mt-3">{name}</h2>

      <p className="text-gray-700 mt-1">
        ₹{price.toFixed(2)}
      </p>

      <span
        className={`inline-block mt-3 px-3 py-1 text-sm rounded-full font-medium ${
          inStock
            ? 'bg-green-100 text-green-700'
            : 'bg-red-100 text-red-700'
        }`}
      >
        {inStock ? 'In Stock' : 'Out of Stock'}
      </span>
    </div>
  );
}

export default ProductCard;
