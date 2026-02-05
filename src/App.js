import ProductCard from './components/ProductCard';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-8 flex gap-6 flex-wrap justify-center">
      <ProductCard
        name="Wireless Headphones"
        price={2499}
        image="https://via.placeholder.com/300"
        inStock={true}
      />

      <ProductCard
        name="Smart Watch"
        price={3999}
        image="https://via.placeholder.com/300"
        inStock={false}
      />

      <ProductCard
        name="Bluetooth Speaker"
        price={1799}
        image="https://via.placeholder.com/300"
        inStock={true}
      />
    </div>
  );
}

export default App;
