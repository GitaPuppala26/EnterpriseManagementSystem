import React, { useState } from 'react';

const Products = () => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Smartphone', category: 'Electronics', price: 499.99, stock: 10 },
    { id: 2, name: 'Laptop', category: 'Electronics', price: 11899.99, stock: 5 },
    { id: 3, name: 'Airpods', category: 'Electronics', price: 1899.99, stock: 6 },
    { id: 4, name: 'Sneakers', category: 'Footwear', price: 899.99, stock: 11 },
    { id: 5, name: 'Flipflops', category: 'Footwear', price: 899.99, stock: 20 },
    { id: 6, name: 'Chips', category: 'Food', price: 9.99, stock: 25 },
    { id: 7, name: 'Face Cream', category: 'Beauty', price: 109.99, stock: 8 }
    // Add more mock data as needed
  ]);

  const handleAddProduct = (event) => {
    event.preventDefault();
    const form = event.target;
    const newProduct = {
      id: products.length + 1,
      name: form.name.value,
      category: form.category.value,
      price: parseFloat(form.price.value),
      stock: parseInt(form.stock.value)
    };
    setProducts([...products, newProduct]);
    form.reset();
  };

  const handleEditProduct = (productId, field, value) => {
    const updatedProducts = products.map(product => {
      if (product.id === productId) {
        return { ...product, [field]: value };
      }
      return product;
    });
    setProducts(updatedProducts);
  };

  const handleDeleteProduct = (productId) => {
    const updatedProducts = products.filter(product => product.id !== productId);
    setProducts(updatedProducts);
  };

  return (
    <div style={{ overflowX: 'auto', maxWidth: '100%', marginBottom: '20px', marginLeft: '10px', marginRight: '10px' }}>
      <h4>Products Management</h4>
      <table style={{ width: 'calc(100% - 20px)', borderCollapse: 'collapse', marginLeft: 'auto', marginRight: 'auto' }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td contentEditable onBlur={e => handleEditProduct(product.id, 'name', e.target.textContent)}>{product.name}</td>
              <td contentEditable onBlur={e => handleEditProduct(product.id, 'category', e.target.textContent)}>{product.category}</td>
              <td contentEditable onBlur={e => handleEditProduct(product.id, 'price', parseFloat(e.target.textContent))}>{product.price}</td>
              <td contentEditable onBlur={e => handleEditProduct(product.id, 'stock', parseInt(e.target.textContent))}>{product.stock}</td>
              <td>
                <button onClick={() => handleDeleteProduct(product.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <form style={{ display: 'flex', maxWidth: '300px' }} onSubmit={handleAddProduct}>
        <div style={{ display: 'flex', flexDirection: 'column', marginRight: '10px' }}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', marginRight: '10px' }}>
          <label htmlFor="category">Category:</label>
          <input type="text" id="category" name="category" required />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', marginRight: '10px' }}>
          <label htmlFor="price">Price:</label>
          <input type="number" id="price" name="price" step="0.01" required />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', marginRight: '10px' }}>
          <label htmlFor="stock">Stock:</label>
          <input type="number" id="stock" name="stock" required />
        </div>
        <button type="submit" style={{ backgroundColor: 'black', color: 'white', border: 'none', cursor: 'pointer', alignSelf: 'flex-end', marginTop: '8px' }}>Add Product</button>
      </form>
    </div>
  );
};

export default Products;
