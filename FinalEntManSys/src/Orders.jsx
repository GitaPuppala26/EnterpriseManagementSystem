import React, { useState } from 'react';

function Orders() {
  const [searchedOrder, setSearchedOrder] = useState(null);

  const orders = [
    { orderId: 101, productId: 1, orderDate: '2024-03-15', quantity: 2 },
    { orderId: 102, productId: 8, orderDate: '2024-03-16', quantity: 1 },
    { orderId: 103, productId: 3, orderDate: '2024-03-17', quantity: 3 },
    { orderId: 104, productId: 4, orderDate: '2024-03-18', quantity: 2 },
    { orderId: 105, productId: 10, orderDate: '2024-03-19', quantity: 1 },
    { orderId: 106, productId: 7, orderDate: '2024-03-20', quantity: 4 },
    { orderId: 107, productId: 4, orderDate: '2024-03-21', quantity: 2 },
    { orderId: 108, productId: 11, orderDate: '2024-03-22', quantity: 1 },
    { orderId: 109, productId: 6, orderDate: '2024-03-23', quantity: 3 },
    { orderId: 110, productId: 9, orderDate: '2024-03-24', quantity: 2 }
  ];

  const handleFindOrder = (event) => {
    event.preventDefault();
    const orderId = event.target['Order ID'].value;
    const foundOrder = orders.find(order => order.orderId === parseInt(orderId));
    setSearchedOrder(foundOrder);
  };

  return (
    <div style={{ overflowX: 'auto', maxWidth: '100%', marginBottom: '20px', marginLeft: '10px', marginRight: '10px' }}>
      <h4>Orders Management</h4>
      {searchedOrder ? (
        <div>
          <p>Order ID: {searchedOrder.orderId}</p>
          <p>Product ID: {searchedOrder.productId}</p>
          <p>Order Date: {searchedOrder.orderDate}</p>
          <p>Quantity: {searchedOrder.quantity}</p>
        </div>
      ) : (
        <table style={{ width: 'calc(100% - 20px)', borderCollapse: 'collapse', marginLeft: 'auto', marginRight: 'auto' }}>
          <thead>
            <tr>
              <th style={{ padding: '8px', border: '1px solid #ddd', backgroundColor: '#f2f2f2', textAlign: 'left' }}>Order ID</th>
              <th style={{ padding: '8px', border: '1px solid #ddd', backgroundColor: '#f2f2f2', textAlign: 'left' }}>Product ID</th>
              <th style={{ padding: '8px', border: '1px solid #ddd', backgroundColor: '#f2f2f2', textAlign: 'left' }}>Order Date</th>
              <th style={{ padding: '8px', border: '1px solid #ddd', backgroundColor: '#f2f2f2', textAlign: 'left' }}>Quantity</th>
            </tr>
          </thead>
          <tbody>
            {orders.map(order => (
              <tr key={order.orderId}>
                <td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'left' }}>{order.orderId}</td>
                <td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'left' }}>{order.productId}</td>
                <td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'left' }}>{order.orderDate}</td>
                <td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'left' }}>{order.quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <form style={{ display: 'flex', maxWidth: '300px' }} onSubmit={handleFindOrder}>
        <div style={{ display: 'flex', flexDirection: 'column', marginRight: '10px' }}>
          <label htmlFor="Order ID" style={{ marginBottom: '10px' }}>Order ID:</label>
          <input type="text" id="Order ID" name="Order ID" style={{ padding: '8px', marginBottom: '10px' }} />
        </div>
        <button type="submit" style={{ backgroundColor: 'black', color: 'white', border: 'none', cursor: 'pointer', alignSelf: 'flex-end', marginTop: '8px' }}>Find Order</button>
      </form>
    </div>
  );
}

export default Orders;
