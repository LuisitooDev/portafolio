import React, { useState, useEffect } from 'react';

export function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch(`http://localhost:3000/api/products`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchProducts();
  }, []);

  return (
    <div>
     {products.length > 0 ? (
      <div>
        <p>{products[0].descripcion}</p>
      </div>
    ) : (
      <p>No hay datos disponibles</p>
    )}
    </div>
  );
}